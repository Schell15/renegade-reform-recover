import { CANONICAL_HOST, type PageManifestEntry } from "./pages.manifest";

/**
 * Validates the page manifest and returns a list of human-readable error
 * strings. An empty array means the manifest is valid. Pure function, no
 * side effects, safe to call from a build plugin, a script, or a test.
 */
export function validatePagesManifest(entries: readonly PageManifestEntry[]): string[] {
  const errors: string[] = [];

  const routeCounts = new Map<string, number>();
  const canonicalUrlCounts = new Map<string, number>();
  const okfFilenameCounts = new Map<string, number>();

  for (const entry of entries) {
    routeCounts.set(entry.route, (routeCounts.get(entry.route) ?? 0) + 1);
    canonicalUrlCounts.set(entry.canonicalUrl, (canonicalUrlCounts.get(entry.canonicalUrl) ?? 0) + 1);
    if (entry.okfFilename) {
      okfFilenameCounts.set(entry.okfFilename, (okfFilenameCounts.get(entry.okfFilename) ?? 0) + 1);
    }
  }

  for (const entry of entries) {
    const label = entry.route || "(empty route)";

    // Malformed route: must start with "/", no whitespace, no "//", no
    // trailing slash unless it is exactly "/", no query string or hash.
    if (!entry.route || !entry.route.startsWith("/")) {
      errors.push(`Entry "${label}": route must start with "/", got "${entry.route}".`);
    } else {
      if (/\s/.test(entry.route)) {
        errors.push(`Entry "${label}": route must not contain whitespace.`);
      }
      if (entry.route.includes("//")) {
        errors.push(`Entry "${label}": route must not contain "//".`);
      }
      if (entry.route.length > 1 && entry.route.endsWith("/")) {
        errors.push(`Entry "${label}": route must not have a trailing slash (except "/").`);
      }
      if (entry.route.includes("?") || entry.route.includes("#")) {
        errors.push(`Entry "${label}": route must not include a query string or hash.`);
      }
    }

    // Duplicate route.
    if ((routeCounts.get(entry.route) ?? 0) > 1) {
      errors.push(`Duplicate route "${entry.route}" appears ${routeCounts.get(entry.route)} times.`);
    }

    // Invalid/missing canonical host.
    if (!entry.canonicalUrl) {
      errors.push(`Entry "${label}": canonicalUrl is missing.`);
    } else if (!entry.canonicalUrl.startsWith(CANONICAL_HOST)) {
      errors.push(
        `Entry "${label}": canonicalUrl "${entry.canonicalUrl}" does not start with the canonical host "${CANONICAL_HOST}".`,
      );
    } else {
      try {
        new URL(entry.canonicalUrl);
      } catch {
        errors.push(`Entry "${label}": canonicalUrl "${entry.canonicalUrl}" is not a valid URL.`);
      }
    }

    // Duplicate canonicalUrl.
    if (entry.canonicalUrl && (canonicalUrlCounts.get(entry.canonicalUrl) ?? 0) > 1) {
      errors.push(
        `Duplicate canonicalUrl "${entry.canonicalUrl}" appears ${canonicalUrlCounts.get(entry.canonicalUrl)} times.`,
      );
    }

    // inOkfIndex without okfFilename.
    if (entry.inOkfIndex && !entry.okfFilename) {
      errors.push(`Entry "${label}": inOkfIndex is true but okfFilename is missing.`);
    }

    // inSitemap without a canonical URL.
    if (entry.inSitemap && !entry.canonicalUrl) {
      errors.push(`Entry "${label}": inSitemap is true but canonicalUrl is missing.`);
    }

    // Duplicate okfFilename.
    if (entry.okfFilename && (okfFilenameCounts.get(entry.okfFilename) ?? 0) > 1) {
      errors.push(
        `Duplicate okfFilename "${entry.okfFilename}" appears ${okfFilenameCounts.get(entry.okfFilename)} times.`,
      );
    }
  }

  return errors;
}

/**
 * Validates the page manifest and throws a single Error listing every
 * problem found if it is invalid. Intended for use in a build-time plugin.
 */
export function assertValidPagesManifest(entries: readonly PageManifestEntry[]): void {
  const errors = validatePagesManifest(entries);
  if (errors.length > 0) {
    const report = errors.map((e) => `  - ${e}`).join("\n");
    throw new Error(`Invalid pages manifest (src/content/pages.manifest.ts):\n${report}`);
  }
}
