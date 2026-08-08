export const STUDIO = {
  name: "Renegade Reformer",
  tagline: "Reform. Repower. Recover.",
  address: {
    street: "22a Church Road",
    locality: "Redfield",
    city: "Bristol",
    postalCode: "BS5 9JA",
    countryCode: "GB",
  },
  nearestStation: "Lawrence Hill train station",
  contact: {
    email: "studio@renegadereformer.co.uk",
    whatsappE164: "+447846849456",
  },
  hours: {
    reformer: { days: "Mon to Fri", open: "8:30am", close: "8:30pm" },
    byNight: { days: "Fri", open: "9:00pm", close: "10:30pm" },
  },
  social: {
    instagram: "https://www.instagram.com/renegade.reformer/",
    facebook: "https://www.facebook.com/fitnessreformer/",
  },
} as const;

// ---- Derived formatting helpers. Nothing below stores a second copy of a fact,
// everything is computed from STUDIO above. ----

export function addressStreetShort(): string {
  // "22a Church Road" -> "22a Church Rd", used only where the site currently
  // shows the abbreviated form (Home.tsx map caption).
  return STUDIO.address.street.replace(/\bRoad\b/, "Rd");
}

export function addressOneLine(): string {
  const a = STUDIO.address;
  return `${a.street}, ${a.locality}, ${a.city} ${a.postalCode}`;
}

export function addressTwoLine(): [string, string] {
  const a = STUDIO.address;
  return [`${a.street}, ${a.locality}`, `${a.city} ${a.postalCode}`];
}

export function whatsappDisplay(): string {
  // "+447846849456" -> "+44 7846 849456"
  const e164 = STUDIO.contact.whatsappE164;
  const cc = e164.slice(0, 3);
  const rest = e164.slice(3);
  return `${cc} ${rest.slice(0, 4)} ${rest.slice(4)}`;
}

export function whatsappUrl(): string {
  return `https://wa.me/${STUDIO.contact.whatsappE164.replace(/^\+/, "")}`;
}

export function telHref(): string {
  return `tel:${STUDIO.contact.whatsappE164}`;
}

export function mailtoHref(): string {
  return `mailto:${STUDIO.contact.email}`;
}

export function reformerHoursText(): string {
  const h = STUDIO.hours.reformer;
  return `${h.days}, ${h.open} to ${h.close}`;
}

export function byNightHoursText(): string {
  const h = STUDIO.hours.byNight;
  return `${h.days}, ${h.open} to ${h.close}`;
}

export function googleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${addressOneLine().replace(/ /g, "+")}&output=embed`;
}