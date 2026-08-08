import { STUDIO } from "./studio";
import { CANONICAL_HOST } from "./pages.manifest";

export const BUSINESS_ID = `${CANONICAL_HOST}/#studio`;

/**
 * The exact "about" business entity object already used identically in
 * bynight/index.html, guides.html and privacypolicy.html. Any future static
 * page that needs the same business entity should reuse this unchanged.
 */
export function businessEntityJsonLd() {
  return {
    "@type": ["HealthClub", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: STUDIO.name,
    url: CANONICAL_HOST,
    telephone: STUDIO.contact.whatsappE164,
    email: STUDIO.contact.email,
    image: `${CANONICAL_HOST}/og-image.png`,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: STUDIO.address.street,
      addressLocality: STUDIO.address.locality,
      addressRegion: STUDIO.address.city,
      postalCode: STUDIO.address.postalCode,
      addressCountry: STUDIO.address.countryCode,
    },
  };
}

/**
 * Full WebPage-wrapper JSON-LD used by bynight/index.html, guides.html and
 * privacypolicy.html, each with their own page name/url but an identical
 * `about` business entity.
 */
export function pageAboutBusinessJsonLd(pageName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: STUDIO.name, url: CANONICAL_HOST },
    about: businessEntityJsonLd(),
  };
}

/**
 * teachwithus/index.html's JobPosting uses a differently-shaped address
 * (combined locality + city, no telephone/email at this nesting level).
 */
export function jobPostingAddressJsonLd() {
  return {
    "@type": "PostalAddress",
    streetAddress: STUDIO.address.street,
    addressLocality: `${STUDIO.address.locality}, ${STUDIO.address.city}`,
    postalCode: STUDIO.address.postalCode,
    addressCountry: STUDIO.address.countryCode,
  };
}

/** The single shared footer copyright/address line used across every static page. */
export function footerCopyrightHtml(): string {
  return `  <p>&copy; 2026 ${STUDIO.name} &middot; ${STUDIO.address.street}, ${STUDIO.address.locality}, ${STUDIO.address.city} ${STUDIO.address.postalCode}</p>`;
}
