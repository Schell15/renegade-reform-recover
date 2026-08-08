import type { FaqCategory } from "./faq";
import type { FaqJsonLd } from "./faq.render";

export function countFaqItems(categories: readonly FaqCategory[]): number {
  return categories.reduce((sum, c) => sum + c.items.length, 0);
}

export function validateFaqSource(categories: readonly FaqCategory[]): string[] {
  const errors: string[] = [];
  const seenCategoryIds = new Set<string>();
  const seenItemIds = new Set<string>();

  for (const category of categories) {
    if (!category.id || !category.id.trim()) {
      errors.push(`A FAQ category is missing an id.`);
    } else if (seenCategoryIds.has(category.id)) {
      errors.push(`Duplicate FAQ category id "${category.id}".`);
    } else {
      seenCategoryIds.add(category.id);
    }

    if (!category.label || !category.label.trim()) {
      errors.push(`FAQ category "${category.id}" is missing a label.`);
    }

    for (const item of category.items) {
      if (!item.id || !item.id.trim()) {
        errors.push(`A FAQ item in category "${category.id}" is missing an id.`);
      } else if (seenItemIds.has(item.id)) {
        errors.push(`Duplicate FAQ id "${item.id}".`);
      } else {
        seenItemIds.add(item.id);
      }

      if (!item.question || !item.question.trim()) {
        errors.push(`FAQ item "${item.id}" has an empty question.`);
      }

      if (!item.answer || item.answer.length === 0 || item.answer.every((p) => !p.trim())) {
        errors.push(`FAQ item "${item.id}" has an empty answer.`);
      }
    }
  }

  return errors;
}

export function assertValidFaqSource(categories: readonly FaqCategory[]): void {
  const errors = validateFaqSource(categories);
  if (errors.length > 0) {
    const report = errors.map((e) => `  - ${e}`).join("\n");
    throw new Error(`Invalid FAQ source (src/content/faq.ts):\n${report}`);
  }
}

export function validateGeneratedFaqJsonLd(jsonLd: FaqJsonLd, categories: readonly FaqCategory[]): string[] {
  const expected = countFaqItems(categories);
  const actual = jsonLd.mainEntity?.length ?? 0;
  if (actual !== expected) {
    return [`Generated FAQPage JSON-LD has ${actual} question(s), expected ${expected}.`];
  }
  return [];
}

export function validateGeneratedFaqMarkdown(markdown: string, categories: readonly FaqCategory[]): string[] {
  const errors: string[] = [];
  const expected = countFaqItems(categories);

  const headingCount = (markdown.match(/^### /gm) ?? []).length;
  if (headingCount < expected) {
    errors.push(`Generated /okf/faq.md has ${headingCount} Q&A heading(s), expected at least ${expected}.`);
  }

  const bodyLength = markdown.trim().length;
  if (bodyLength < 1000) {
    errors.push(`Generated /okf/faq.md is suspiciously short (${bodyLength} characters).`);
  }

  if (/<script|<style/i.test(markdown)) {
    errors.push(`Generated /okf/faq.md contains a <script> or <style> fragment.`);
  }

  const withoutFrontmatter = markdown.replace(/^---[\s\S]*?---\n/, "");
  if (/<\/?[a-zA-Z][a-zA-Z0-9]*(\s[^>]*)?>/.test(withoutFrontmatter)) {
    errors.push(`Generated /okf/faq.md appears to contain an HTML tag fragment.`);
  }

  return errors;
}

export function assertValidGeneratedFaqOutput(
  jsonLd: FaqJsonLd,
  markdown: string,
  categories: readonly FaqCategory[],
): void {
  const errors = [
    ...validateGeneratedFaqJsonLd(jsonLd, categories),
    ...validateGeneratedFaqMarkdown(markdown, categories),
  ];
  if (errors.length > 0) {
    const report = errors.map((e) => `  - ${e}`).join("\n");
    throw new Error(`Invalid generated FAQ output:\n${report}`);
  }
}
