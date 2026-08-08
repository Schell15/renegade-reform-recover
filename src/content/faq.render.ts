import { CANONICAL_HOST } from "./pages.manifest";
import type { FaqCategory, FaqItem, FaqLink } from "./faq";

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(text: string): string {
  return escapeHtml(text).replace(/"/g, "&quot;");
}

/** Matches `[label](href)` or `**bold**` tokens, in order, non-overlapping. */
const INLINE_TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

function renderInlineHtml(text: string): string {
  let result = "";
  let lastIndex = 0;
  INLINE_TOKEN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = INLINE_TOKEN.exec(text)) !== null) {
    result += escapeHtml(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      result += `<a class="inline-link" href="${escapeAttr(match[2])}">${escapeHtml(match[1])}</a>`;
    } else if (match[3] !== undefined) {
      result += `<strong>${escapeHtml(match[3])}</strong>`;
    }
    lastIndex = INLINE_TOKEN.lastIndex;
  }
  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function renderInlinePlainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

function renderLinksHtml(links: readonly FaqLink[] | undefined): string {
  if (!links || links.length === 0) return "";
  return links
    .map((link, i) => {
      const style = i > 0 ? ' style="margin-left:8px;"' : "";
      return `<a class="redirect-link" href="${escapeAttr(link.href)}"${style}>${escapeHtml(link.label)} &rarr;</a>`;
    })
    .join("\n            ");
}

function renderFaqItemHtml(item: FaqItem): string {
  const paragraphs = item.answer.map((p) => `            <p>${renderInlineHtml(p)}</p>`).join("\n");
  const links = renderLinksHtml(item.links);
  return `      <div class="faq-item">
        <button class="faq-toggle" aria-expanded="false">
          <span class="faq-q">${escapeHtml(item.question)}</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-panel">
          <div class="faq-panel-inner">
${paragraphs}${links ? `\n            ${links}` : ""}
          </div>
        </div>
      </div>`;
}

export function renderJumpRowHtml(categories: readonly FaqCategory[]): string {
  return categories.map((c) => `      <a class="jump-chip" href="#${c.id}">${escapeHtml(c.label)}</a>`).join("\n");
}

export function renderFaqSectionsHtml(categories: readonly FaqCategory[]): string {
  return categories
    .map(
      (c) => `    <div class="faq-section" id="${c.id}">
      <h2>${escapeHtml(c.label)}</h2>

${c.items.map(renderFaqItemHtml).join("\n\n")}
    </div>`,
    )
    .join("\n\n");
}

export interface FaqJsonLd {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  "@id": string;
  url: string;
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: { "@type": "Answer"; text: string };
  }>;
}

export function renderFaqJsonLd(categories: readonly FaqCategory[]): FaqJsonLd {
  const pageUrl = `${CANONICAL_HOST}/faq.html`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: categories.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question" as const,
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: item.answer.map(renderInlinePlainText).join(" "),
        },
      })),
    ),
  };
}

function absolutizeMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (_m, label, href) => `[${label}](${CANONICAL_HOST}${href})`);
}

export interface FaqMarkdownFrontmatter {
  type: string;
  title: string;
  description: string;
  resource: string;
  tags: string[];
  generatedBy: string;
  generatedAt: string;
  status: string;
}

export function renderFaqMarkdown(
  categories: readonly FaqCategory[],
  intro: string,
  frontmatter: FaqMarkdownFrontmatter,
): string {
  const tagsYaml = `[${frontmatter.tags.map((t) => `"${t}"`).join(", ")}]`;
  const fm = [
    "---",
    `type: "${frontmatter.type}"`,
    `title: "${frontmatter.title}"`,
    `description: "${frontmatter.description}"`,
    `resource: "${frontmatter.resource}"`,
    `tags: ${tagsYaml}`,
    `generated: { by: "${frontmatter.generatedBy}", at: "${frontmatter.generatedAt}" }`,
    `status: "${frontmatter.status}"`,
    "---",
  ].join("\n");

  const body = categories
    .map((c) => {
      const items = c.items
        .map((item) => {
          const paragraphs = item.answer.map(absolutizeMarkdownLinks).join("\n\n");
          const links = (item.links ?? [])
            .map((l) => `[${l.label}](${l.href.startsWith("/") ? `${CANONICAL_HOST}${l.href}` : l.href})`)
            .join("\n");
          return [`### ${item.question}`, "", paragraphs, links].filter(Boolean).join("\n\n");
        })
        .join("\n\n");
      return `## ${c.label}\n\n${items}`;
    })
    .join("\n\n");

  return `${fm}\n\n# Frequently Asked Questions\n\n${intro}\n\n${body}\n`;
}
