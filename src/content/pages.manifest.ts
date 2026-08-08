/**
 * Canonical page registry for renegadereformer.co.uk.
 *
 * This is Phase 1 of an incremental effort to make this manifest the single
 * source of truth for page routing, sitemap.xml generation, and the OKF
 * (Open Knowledge Format) markdown bundle under /okf/.
 *
 * IMPORTANT: as of Phase 1, this manifest is descriptive only. It coexists
 * with, and does not yet replace, the existing route table in vite.config.ts
 * (the ROUTES array driving bakedMetaPlugin), the hand-maintained
 * public/sitemap.xml, and the hand-maintained public/okf/*.md files and
 * public/okf/index.md. Nothing reads from this manifest yet except its own
 * build-time validation. Later phases will make sitemap.xml, vite.config.ts's
 * route table, and OKF generation all read from this file instead of
 * maintaining independent lists, at which point the duplication this file
 * currently has with those other lists will be resolved.
 */

/** The single canonical host for every public URL on this site. */
export const CANONICAL_HOST = "https://www.renegadereformer.co.uk";

/**
 * How a page's content is currently sourced, for future OKF generation:
 * - "react-structured": a React page component under src/pages, whose
 *   content today lives inline in the component (future phases may extract
 *   volatile facts into src/content/*.ts data modules).
 * - "static-html": a hand-authored static HTML file under public/, treated
 *   as its own source of truth, not scraped from anywhere else.
 * - "static-html-json-ld": a hand-authored static HTML file under public/
 *   whose primary factual content also exists as a schema.org JSON-LD block
 *   in the same file (e.g. FAQPage), making that JSON-LD the preferred
 *   future source for generation rather than the visible markup.
 * - "dynamic-embed-note": reserved for content whose canonical source is a
 *   live third-party embed (e.g. the Momence booking widget) that should
 *   never be scraped or snapshotted. Not used by any entry yet.
 */
export type PageSourceType =
  | "react-structured"
  | "static-html"
  | "static-html-json-ld"
  | "dynamic-embed-note";

/** The three top-level groupings used in /okf/index.md. */
export type PageCategory =
  | "Studio & booking"
  | "Reformer Pilates guides"
  | "Other Renegade information";

export interface PageManifestEntry {
  /**
   * The public path this page is served at, always starting with "/".
   * For React-routed pages this matches the react-router route path
   * (e.g. "/pricing"). For static HTML pages this matches the public file
   * path (e.g. "/faq.html", "/bynight"). Must be unique across the manifest.
   */
  route: string;
  /**
   * The full canonical URL for this page, always CANONICAL_HOST + route.
   * Must be unique across the manifest.
   */
  canonicalUrl: string;
  /** The page's current <title> text, used for OKF listings. */
  pageTitle: string;
  /**
   * Filename (no path) of this page's OKF markdown file under public/okf/,
   * e.g. "home.md". Required when inOkfIndex is true. Must be unique across
   * the manifest.
   */
  okfFilename?: string;
  /** Grouping used when this page is listed in /okf/index.md. */
  category: PageCategory;
  /** How this page's content is currently sourced. See PageSourceType. */
  sourceType: PageSourceType;
  /**
   * Path (relative to repo root) to the file this page's content currently
   * lives in. Informational in Phase 1; used by future generation phases.
   */
  sourceModule: string;
  /** Whether this page should appear in sitemap.xml. */
  inSitemap: boolean;
  /** Whether this page should appear in /okf/index.md. */
  inOkfIndex: boolean;
}

export const PAGES_MANIFEST: readonly PageManifestEntry[] = [
  // ---- Studio & booking ----
  {
    route: "/",
    canonicalUrl: `${CANONICAL_HOST}/`,
    pageTitle: "Reformer Pilates in Redfield, Bristol | Renegade Reformer",
    okfFilename: "home.md",
    category: "Studio & booking",
    sourceType: "react-structured",
    sourceModule: "src/pages/Home.tsx",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/reformerpilates.html",
    canonicalUrl: `${CANONICAL_HOST}/reformerpilates.html`,
    pageTitle: "Our Reformer Pilates Classes Explained | Renegade Reformer",
    okfFilename: "reformer-pilates-classes.md",
    category: "Studio & booking",
    sourceType: "static-html",
    sourceModule: "public/reformerpilates.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/timetable",
    canonicalUrl: `${CANONICAL_HOST}/timetable`,
    pageTitle: "Class Timetable & Booking | Renegade Reformer",
    okfFilename: "timetable.md",
    category: "Studio & booking",
    sourceType: "react-structured",
    sourceModule: "src/pages/Timetable.tsx",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/pricing",
    canonicalUrl: `${CANONICAL_HOST}/pricing`,
    pageTitle: "Pricing & Membership | Renegade Reformer Bristol",
    okfFilename: "pricing.md",
    category: "Studio & booking",
    sourceType: "react-structured",
    sourceModule: "src/pages/Pricing.tsx",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/contact",
    canonicalUrl: `${CANONICAL_HOST}/contact`,
    pageTitle: "Contact | Renegade Reformer Bristol",
    okfFilename: "contact.md",
    category: "Studio & booking",
    sourceType: "react-structured",
    sourceModule: "src/pages/Contact.tsx",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/faq.html",
    canonicalUrl: `${CANONICAL_HOST}/faq.html`,
    pageTitle: "FAQs | Renegade Reformer",
    okfFilename: "faq.md",
    category: "Studio & booking",
    sourceType: "static-html-json-ld",
    sourceModule: "public/faq.html",
    inSitemap: true,
    inOkfIndex: true,
  },

  // ---- Reformer Pilates guides ----
  {
    route: "/guides.html",
    canonicalUrl: `${CANONICAL_HOST}/guides.html`,
    pageTitle: "Guides | Reformer Pilates Bristol | Renegade Reformer",
    okfFilename: "guides.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/guides.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-what-is-reformer-pilates.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-what-is-reformer-pilates.html`,
    pageTitle: "What Is Reformer Pilates? | Renegade Reformer",
    okfFilename: "guide-what-is-reformer-pilates.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-what-is-reformer-pilates.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-first-reformer-class-bristol.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-first-reformer-class-bristol.html`,
    pageTitle: "First Reformer Class: What to Expect | Renegade Reformer",
    okfFilename: "guide-first-reformer-class.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-first-reformer-class-bristol.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-reformer-vs-mat-pilates.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-reformer-vs-mat-pilates.html`,
    pageTitle: "Reformer vs Mat Pilates: Which to Choose | Renegade Reformer",
    okfFilename: "guide-reformer-vs-mat.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-reformer-vs-mat-pilates.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-how-often-reformer-pilates.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-how-often-reformer-pilates.html`,
    pageTitle: "How Often For Reformer Pilates? | Renegade Reformer",
    okfFilename: "guide-how-often.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-how-often-reformer-pilates.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-reformer-pilates-beginners-bristol.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-reformer-pilates-beginners-bristol.html`,
    pageTitle: "Reformer Pilates for Beginners in Bristol | Renegade Reformer",
    okfFilename: "guide-beginners-bristol.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-reformer-pilates-beginners-bristol.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-reformer-pilates-great-bristol-run.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-reformer-pilates-great-bristol-run.html`,
    pageTitle: "Reformer Pilates for the Great Bristol Run | Renegade Reformer",
    okfFilename: "guide-great-bristol-run.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-reformer-pilates-great-bristol-run.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/journal-reformer-pilates-results-timeline.html",
    canonicalUrl: `${CANONICAL_HOST}/journal-reformer-pilates-results-timeline.html`,
    pageTitle: "How Long For Reformer Pilates Results? | Renegade Reformer",
    okfFilename: "guide-results-timeline.md",
    category: "Reformer Pilates guides",
    sourceType: "static-html",
    sourceModule: "public/journal-reformer-pilates-results-timeline.html",
    inSitemap: true,
    inOkfIndex: true,
  },

  // ---- Other Renegade information ----
  {
    route: "/bynight",
    canonicalUrl: `${CANONICAL_HOST}/bynight`,
    pageTitle: "RENEGADE | BY NIGHT",
    okfFilename: "bynight.md",
    category: "Other Renegade information",
    sourceType: "static-html",
    sourceModule: "public/bynight/index.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/teachwithus",
    canonicalUrl: `${CANONICAL_HOST}/teachwithus`,
    pageTitle: "Instructor Application | Renegade Reformer",
    okfFilename: "teach-with-us.md",
    category: "Other Renegade information",
    sourceType: "static-html",
    sourceModule: "public/teachwithus/index.html",
    inSitemap: true,
    inOkfIndex: true,
  },
  {
    route: "/privacypolicy.html",
    canonicalUrl: `${CANONICAL_HOST}/privacypolicy.html`,
    pageTitle: "Privacy Policy | Renegade Reformer",
    okfFilename: "privacy-policy.md",
    category: "Other Renegade information",
    sourceType: "static-html",
    sourceModule: "public/privacypolicy.html",
    inSitemap: true,
    inOkfIndex: true,
  },
];
