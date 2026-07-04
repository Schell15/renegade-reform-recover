## Diagnosis

`public/guides.html` (and `public/faq.html`) exist in the repo and serve **200 OK** locally on the Vite preview — I just tested both. The "Guides" button in `src/pages/Home.tsx` also correctly points to `/guides.html` via `window.location.href`.

That means the 404 is not a code issue. It's almost certainly one of these:

1. **The published site hasn't been re-deployed** since `public/guides.html` was created. On `https://www.renegadereformer.co.uk/guides.html` (or the `.lovable.app` published URL) the file only exists in the build output after a new publish. Until then, the SPA fallback serves `index.html`, but for a `.html` path the hosting layer returns a real 404 (per Lovable's SPA fallback rules — paths ending in a file extension are treated as asset requests, not SPA navigations).
2. **The URL being visited is `/guides` (no `.html`).** All internal links use `/guides.html`, so this would only happen from a manual URL, an old bookmark, or an external link. React Router would then hit `*` → `NotFound`.

## Plan

**Step 1 — Confirm which URL is 404'ing.**
Before changing anything, I'd like to know:
- Are you seeing the 404 on the **live published site** (`www.renegadereformer.co.uk/guides.html`) or on the **Lovable preview**?
- Is the URL exactly `/guides.html`, or `/guides`?

**Step 2 — Fix based on the answer:**

- **If it's the published site at `/guides.html`:** the fix is simply to **re-publish** the project. No code changes needed. Same applies to `/faq.html`.
- **If the URL is `/guides` (no `.html`):** add a React Router redirect in `src/App.tsx` alongside the existing `ExternalRedirect` routes, so `/guides` → `/guides.html` and `/faq` → `/faq.html`. This makes the shorter URLs work too.

## Technical details

The relevant existing pattern in `src/App.tsx`:

```tsx
<Route path="/reformerpilates" element={<ExternalRedirect to="/reformerpilates.html" />} />
<Route path="/timetable" element={<ExternalRedirect to="/timetable/index.html" />} />
```

If Step 2b applies, I'd add two more of these:

```tsx
<Route path="/guides" element={<ExternalRedirect to="/guides.html" />} />
<Route path="/faq" element={<ExternalRedirect to="/faq.html" />} />
```

No other files need to change. Nothing else about the guides page, styling, or content will be touched.

Please confirm which of the two scenarios you're hitting so I apply the right fix.