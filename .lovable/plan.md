Goal: update the site-wide favicon (browser tab icon and Google search icon) to the uploaded Renegade Reformer "R" logo.

Current state
- Root `index.html` and `public/bynight/index.html` point to `/flavicon-01.jpg`.
- All other HTML pages point to `/favicon.png`.
- The uploaded logo `logo._v1.png` is a 1920x1920 brown/cream "R" icon, suitable as the new favicon.

Plan
1. Replace `public/favicon.png` with the uploaded `logo._v1.png` (copied/renamed to `public/favicon.png`).
2. Delete the old `public/flavicon-01.jpg` asset.
3. Update the two outlier HTML files to reference `/favicon.png` consistently:
   - `index.html`
   - `public/bynight/index.html`
4. Leave all other HTML files as-is since they already reference `/favicon.png` and will automatically pick up the new image.
5. Verify no remaining `flavicon-01.jpg` references exist and run a typecheck/build check.

Note: The site currently uses a single PNG favicon, which covers modern browsers and the Google search result icon. No `.ico` file is present and none will be added.