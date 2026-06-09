
## SEO Audit Fixes

### 1. Per-route meta (title + description + og:* + canonical)

The app already uses `react-helmet-async` via a shared `SEO` component (`src/components/SEO.tsx`). It currently sets title, description, canonical, og:title/description/url/image, twitter:title/description/image — but NOT og:type per page, and the canonical base is `https://renegadereformer.co.uk` (no `www`).

**Changes to `src/components/SEO.tsx`:**
- Change `SITE` constant to `https://www.renegadereformer.co.uk`.
- Add `<meta name="twitter:card" content="summary_large_image" />` (overrides the static `summary` in `index.html`).
- Keep canonical/og:url derived from `SITE + path`.

**Update each page's SEO call to the exact copy provided:**

| Route | Title | Description |
|---|---|---|
| `/` (`src/pages/Home.tsx`) | Reformer Pilates Studio in Bristol \| Renegade Reformer | Renegade Reformer is a premium Reformer Pilates studio in Bristol offering strength-led, contemporary classes for all levels. Book your first session today. |
| `/pricing` (`src/pages/Pricing.tsx`) | Reformer Pilates Pricing Bristol \| Renegade Reformer | Explore Renegade Reformer's class packages and membership options. Flexible pricing for reformer Pilates in Bristol — find the plan that works for you. |
| `/recover` (`src/pages/Recovery.tsx`) | Recovery Pilates Classes Bristol \| Renegade Reformer | Low-impact reformer Pilates designed for recovery, rehabilitation, and rest days. Book a recovery session at Renegade Reformer in Bristol. |
| `/reformer-signup` (`src/pages/ReformerSignup.tsx`) | Join Renegade Reformer \| Sign Up for Reformer Pilates Bristol | Sign up for early access to Renegade Reformer — Bristol's strength-led reformer Pilates studio. Be the first to book when we open. |

(`ReformerSignup` currently has two SEO blocks — pre-submit and post-submit. Both will use the new copy.)

### 2. Fix stale og:description in `index.html`

Update the static fallback `og:description` in `index.html` to the new homepage description (item 1, row `/`). Also update the static `<title>` and `<meta name="description">` to match.

### 3. Twitter card upgrade

In `index.html`, change `<meta name="twitter:card" content="summary">` → `summary_large_image`. The `SEO` component will also emit `summary_large_image` per page (covers JS-executing crawlers).

### 4. Canonical tags

Already handled by `SEO` once `SITE` is changed to `https://www.renegadereformer.co.uk`. Each route emits its own canonical via Helmet. Remove the static `<link rel="canonical" href="https://renegadereformer.co.uk/" />` from `index.html` to avoid duplicate canonicals on routes that mount Helmet.

### 5. LocalBusiness JSON-LD on homepage

Add the provided `ExerciseGym` JSON-LD inside a `<Helmet>` block on `src/pages/Home.tsx` (verbatim from the brief). Remove the existing `LocalBusiness` JSON-LD from `index.html` to avoid duplicate/conflicting schema (or replace it with the new `ExerciseGym` block — recommend removing from `index.html` and keeping only the homepage Helmet copy so social crawlers still get one valid schema via the static head; net: move it to `index.html` updated to the new `ExerciseGym` payload, which guarantees no-JS crawlers see it).

**Decision:** Replace the existing JSON-LD block in `index.html` with the new `ExerciseGym` payload (so it ships in the static head for all crawlers). Do not duplicate it via Helmet.

### 6. Sitemap `www` consistency

Update `public/sitemap.xml`: change all 4 `<loc>` entries from `https://renegadereformer.co.uk/...` → `https://www.renegadereformer.co.uk/...`.

### 7. Image alt text audit

Scan results (all `<img>` tags found):

- `src/pages/Home.tsx` — eagle logo: alt `Renegade Studios Eagle Logo` → tighten to `Renegade Reformer — reformer Pilates Bristol logo`.
- `src/pages/ReformerSignup.tsx` — eagle logo (2 occurrences) and 4 `reformer1..4` gallery images. Existing alts are descriptive; refine logo alt to `Renegade Reformer — reformer Pilates Bristol logo` and keep gallery alts but ensure each mentions "reformer Pilates Bristol" naturally (e.g. `Renegade Reformer studio interior render — reformer Pilates Bristol`).
- `src/pages/Recovery.tsx` — recovery logo + 7 gallery photos. All have alts; refine logo and gallery alts to mention "reformer Pilates Bristol" / "recovery Bristol" where natural (logo, practitioner photo).
- `public/discover.html` — 3 logo `<img>` (nav, hero, footer) currently `alt="Renegade Reformer"` → upgrade to `Renegade Reformer — reformer Pilates Bristol logo`. The 6 gallery photos already have descriptive alts; append "— reformer Pilates Bristol" naturally to a couple where it fits.
- `public/pricing.html` — only an inline base64 image (the wordmark). Verify it has an alt; if missing, add `Renegade Reformer — reformer Pilates Bristol`.

No empty `alt=""` strings remain; no filename-based alts remain.

### Out of scope / not changed

- `public/pricing.html` and `public/discover.html` are static pages served via iframe (Pricing) and direct link (Discover). Their `<title>`/meta inside the iframe documents won't be the canonical document title for `/pricing` — the React route's Helmet `<title>` wins for the parent document. No changes required there for items 1–4 beyond alt text.
- No new routes, components, or backend changes.

### Files touched

- `src/components/SEO.tsx` — `SITE` → www, add twitter:card large.
- `src/pages/Home.tsx` — new SEO copy, add `<Helmet>` JSON-LD only if not in `index.html` (we'll keep it in `index.html`).
- `src/pages/Pricing.tsx`, `src/pages/Recovery.tsx`, `src/pages/ReformerSignup.tsx` — new SEO copy.
- `index.html` — title, description, og:description, twitter:card, JSON-LD replaced with new `ExerciseGym` payload, remove static canonical.
- `public/sitemap.xml` — www on all locs.
- `public/discover.html`, `public/pricing.html` — image alt refinements.

