export const DROP_IN_PRICE = 25;

export const INTRO_PACK = {
  name: "Intro Pack",
  classes: 3,
  price: 52,
  validityDays: 21,
  newMembersOnly: true,
  momenceUrl: "https://momence.com/Renegade-Reformer/membership/Intro-Offer---Class-Pack/763559",
} as const;

export const CLASS_PACKS = [
  { name: "4 Class Pack", classes: 4, price: 95, validityMonths: 3, momenceUrl: "https://momence.com/Renegade-Reformer/membership/4-CLASS-PACK/783154" },
  { name: "8 Class Pack", classes: 8, price: 175, validityMonths: 3, momenceUrl: "https://momence.com/Renegade-Reformer/membership/8-CLASS-PACK/783156" },
  { name: "12 Class Pack", classes: 12, price: 252, validityMonths: 3, momenceUrl: "https://momence.com/Renegade-Reformer/membership/12-CLASS-PACK/783155" },
] as const;

export const MEMBERSHIPS = [
  { tier: "Core", classesPerMonth: 4, creditsPerMonth: 12, price: 85, momenceUrl: "https://momence.com/m/811786" },
  { tier: "Pro", classesPerMonth: 8, creditsPerMonth: 24, price: 150, momenceUrl: "https://momence.com/m/812640" },
  { tier: "Elite", classesPerMonth: 12, creditsPerMonth: 36, price: 195, momenceUrl: "https://momence.com/m/812642" },
] as const;

export const CREDITS_PER_CLASS = 3;
export const BOOK_A_CLASS_URL = "https://momence.com/u/renegade-reformer-ltd-74tF03";

// ---- Computed values. Never store a per-class price as its own literal, always derive it. ----

export function perClassPrice(price: number, classes: number): number {
  return price / classes;
}

export function formatGBP(n: number): string {
  return Number.isInteger(n) ? `£${n}` : `£${n.toFixed(2)}`;
}

export function fromPerClassText(price: number, classes: number): string {
  return `${formatGBP(perClassPrice(price, classes))} per class`;
}