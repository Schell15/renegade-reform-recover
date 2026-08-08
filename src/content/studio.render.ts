import { STUDIO, addressOneLine } from "./studio";

const CANONICAL_HOST = "https://www.renegadereformer.co.uk";
export const BUSINESS_ID = `${CANONICAL_HOST}/#business`;

export interface LocalBusinessOptions {
  /** Page-specific @id suffix isn't needed, all pages reference the same business @id. */
  pageUrl: string;
  /** Extra JSON-LD keys to merge on top of the shared base (e.g. offers, priceRange). */
  extra?: Record<string, unknown>;
}

/**
 * Shared LocalBusiness base built from STUDIO. Every page that needs LocalBusiness
 * JSON-LD calls this and may merge page-specific fields on top via `extra`. The
 * @id is always the same so all pages point at one canonical business entity.
 */
export function localBusinessJsonLd({ pageUrl, extra = {} }: LocalBusinessOptions) {
  const base = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: STUDIO.name,
    url: pageUrl,
    telephone: STUDIO.contact.whatsappE164,
    email: STUDIO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: STUDIO.address.street,
      addressLocality: STUDIO.address.locality,
      addressRegion: STUDIO.address.city,
      postalCode: STUDIO.address.postalCode,
      addressCountry: STUDIO.address.countryCode,
    },
  };
  return { ...base, ...extra };
}

/** Convenience for pages that just need the plain address string, no JSON-LD. */
export { addressOneLine };