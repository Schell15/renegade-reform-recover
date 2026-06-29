The favicon file `favicon.png` exists in `public/`, but the icon link tags may not be detected cleanly by Google. I'll standardize them to the exact format you specified, across every HTML file, and remove the deprecated `shortcut icon` link.

## What I'll change

1. Replace the existing favicon declarations in each HTML file with:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   <link rel="apple-touch-icon" href="/favicon.png" />
   ```
2. Remove the redundant `sizes` variants and the deprecated `shortcut icon` link.
3. Keep all other head tags (charset, viewport, title, meta, fonts, scripts, JSON-LD) untouched.

## Files to update

- `index.html` (root Vite entry)
- `public/index.html`
- `public/reformer-signup/index.html`
- `public/teachwithus/index.html`
- `public/timetable/index.html`
- Any other top-level `public/*.html` files that contain the current favicon links

## Verification

After the change, I'll fetch the preview or read the source to confirm the `<link rel="icon">` and `<link rel="apple-touch-icon">` tags appear as the first tags after `viewport` and before any font preload tags.

Note: Google can take days to re-crawl and update the favicon shown in search results. If you need to force a refresh, use the Google Search Console URL Inspection / Favicon debugger.