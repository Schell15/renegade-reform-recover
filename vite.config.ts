import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://www.renegadereformer.co.uk";
const OG_IMAGE = `${SITE}/og-image.png`;

type RouteMeta = { path: string; title: string; description: string };

const REFORMER_SIGNUP_META: RouteMeta = {
  path: "/reformer-signup",
  title: "Join Renegade Reformer | Sign Up for Reformer Pilates Bristol",
  description:
    "Sign up for early access to Renegade Reformer, Bristol's strength-led reformer Pilates studio. Be the first to book when we open.",
};

const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Reformer Pilates Studio in Bristol | Renegade Reformer",
    description:
      "Renegade Reformer is a premium Reformer Pilates studio in Bristol. Strength-led, contemporary classes opening Spring 2026. Get early access now.",
  },
  REFORMER_SIGNUP_META,
  {
    path: "/pricing",
    title: "Reformer Pilates Pricing Bristol | Renegade Reformer",
    description:
      "Explore Renegade Reformer's class packages and membership options. Flexible pricing for reformer Pilates in Bristol. Find the plan that works for you.",
  },
];

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function bakedMetaTags({ title, description, path: routePath }: RouteMeta) {
  const url = `${SITE}${routePath === "/" ? "/" : routePath}`;
  return [
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
  ].join("\n    ");
}

function hardcodedReformerSignupHead() {
  return [
    `<title>${escapeAttr(REFORMER_SIGNUP_META.title)}</title>`,
    `<meta name="description" content="${escapeAttr(REFORMER_SIGNUP_META.description)}" />`,
    `<link rel="canonical" href="${SITE}/reformer-signup" />`,
    `<meta property="og:title" content="${escapeAttr(REFORMER_SIGNUP_META.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(REFORMER_SIGNUP_META.description)}" />`,
    `<meta property="og:url" content="${SITE}/reformer-signup" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");
}

function bakeRouteHtml(rootHtml: string, route: RouteMeta) {
  if (route.path === "/reformer-signup") {
    return rootHtml
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`)
      .replace(
        /<meta\s+name="description"[^>]*>/,
        `<meta name="description" content="${escapeAttr(route.description)}" />`,
      )
      .replace(
        /<title>[^<]*<\/title>\s*<meta\s+name="description"[^>]*>/,
        hardcodedReformerSignupHead(),
      );
  }

  let html = rootHtml.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeAttr(route.title)}</title>`,
  );
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  );
  html = html.replace("</head>", `    ${bakedMetaTags(route)}\n  </head>`);
  return html;
}

function bakedMetaPlugin() {
  return {
    name: "baked-route-meta",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const publicDir = path.resolve(__dirname, "public");
      const rootHtmlPath = path.join(distDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) return;
      const rootHtml = fs.readFileSync(rootHtmlPath, "utf8");
      for (const route of ROUTES) {
        if (route.path === "/") {
          const baked = bakeRouteHtml(rootHtml, route);
          fs.writeFileSync(rootHtmlPath, baked);
          continue;
        }
        // If a hand-authored static file exists in public/, leave it alone.
        const publicOverride = path.join(publicDir, route.path.replace(/^\//, ""), "index.html");
        if (fs.existsSync(publicOverride)) continue;
        const baked = bakeRouteHtml(rootHtml, route);
        const outDir = path.join(distDir, route.path.replace(/^\//, ""));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), baked);
      }
    },
  };
}

function noEmDashPlugin() {
  return {
    name: "no-em-dash-check",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      if (!fs.existsSync(distDir)) return;
      const offenders: { file: string; snippets: string[] }[] = [];

      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
          } else if (entry.isFile() && /\.html?$/i.test(entry.name)) {
            const raw = fs.readFileSync(full, "utf8");
            // Strip <script>/<style> blocks and HTML tags so we only check visible page text.
            const visible = raw
              .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
              .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
              .replace(/<!--[\s\S]*?-->/g, " ")
              .replace(/<[^>]+>/g, " ");
            if (visible.includes("\u2014")) {
              const snippets: string[] = [];
              const re = /.{0,40}\u2014.{0,40}/g;
              let m: RegExpExecArray | null;
              while ((m = re.exec(visible)) !== null) {
                snippets.push(m[0].replace(/\s+/g, " ").trim());
                if (snippets.length >= 5) break;
              }
              offenders.push({ file: path.relative(distDir, full), snippets });
            }
          }
        }
      };
      walk(distDir);

      if (offenders.length > 0) {
        const report = offenders
          .map((o) => `  - ${o.file}\n      ${o.snippets.join("\n      ")}`)
          .join("\n");
        throw new Error(
          `Em-dash (\u2014) found in generated page text. Replace with commas, periods, or rewrite:\n${report}`,
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode !== 'development' && bakedMetaPlugin(),
    mode !== 'development' && noEmDashPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
