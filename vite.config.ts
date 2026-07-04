import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://www.renegadereformer.co.uk";
const OG_IMAGE = `${SITE}/og-image.png`;

type RouteMeta = { path: string; title: string; description: string; fallbackBody?: string };

const REFORMER_SIGNUP_META: RouteMeta = {
  path: "/reformer-signup",
  title: "Our Story | Renegade Reformer Bristol",
  description:
    "Meet Renegade Reformer, Bristol's strength-led reformer Pilates studio in Redfield. Now open with founding member rates live. Join the movement.",
  fallbackBody:
    "<h1>Our Story - Renegade Reformer</h1><p>Renegade Reformer is a strength-led reformer Pilates studio in Redfield, Bristol. We're now open, with founding member rates live for drop-ins, class packs and monthly memberships.</p><p>Read our story, meet the team behind the studio, and book your first reformer class in Bristol.</p>",
};

const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Reformer Pilates in Redfield, Bristol | Renegade Reformer",
    description:
      "Renegade Reformer is a strength-led reformer Pilates studio in Redfield, Bristol. Now open, founding member rates live. Book your first class today.",
    fallbackBody:
      "<h1>Renegade Reformer - Reformer Pilates in Redfield, Bristol</h1><p>Renegade Reformer is a strength-led, music-driven reformer Pilates studio in Redfield, Bristol. We're now open, with founding member rates live for drop-ins, class packs and monthly memberships.</p><h2>Reform. Repower. Recover.</h2><p>Small class sizes, contemporary reformer Pilates, and a studio built for progression. Explore our classes, view pricing, or book your first session on the timetable.</p><p><a href=\"/pricing\">View pricing</a> | <a href=\"/reformerpilates.html\">Class information</a> | <a href=\"/timetable\">Book a class</a> | <a href=\"/contact\">Contact us</a></p>",
  },
  REFORMER_SIGNUP_META,
  {
    path: "/pricing",
    title: "Pricing & Membership | Renegade Reformer Bristol",
    description:
      "Founding member rates now live at Renegade Reformer, Bristol's reformer Pilates studio in Redfield. Drop-ins, class packs and monthly memberships from £14/class.",
    fallbackBody:
      "<h1>Pricing and Membership - Renegade Reformer Bristol</h1><p>Founding member rates are now live at Renegade Reformer, our reformer Pilates studio in Redfield, Bristol. Choose from drop-in classes, class packs and monthly memberships.</p><h2>Memberships</h2><ul><li>Foundations - 4 classes / month - founding rate from £72/mo (£18/class)</li><li>Pro - 8 classes / month - founding rate from £128/mo (£16/class)</li><li>Elite - 12 classes / month - founding rate from £168/mo (£14/class)</li></ul><p>Founding rates are locked for life for the first 50 members. Class packs and drop-ins also available.</p>",
  },
  {
    path: "/contact",
    title: "Contact | Renegade Reformer Bristol",
    description:
      "Get in touch with Renegade Reformer, the reformer Pilates studio in Redfield, Bristol. Now open, founding rates live. We'd love to hear from you.",
    fallbackBody:
      "<h1>Contact Renegade Reformer</h1><p>Get in touch with Renegade Reformer, our reformer Pilates studio at 22a Church Road, Redfield, Bristol BS5 9JA.</p><p>Email <a href=\"mailto:studio@renegadereformer.co.uk\">studio@renegadereformer.co.uk</a> or use the contact form. We'd love to hear from you.</p>",
  },
];

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function bakedMetaTags({ title, description, path: routePath }: RouteMeta) {
  const url = `${SITE}${routePath === "/" ? "/" : routePath}`;
  return [
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
  ].join("\n    ");
}

function hardcodedReformerSignupHead() {
  return [
    `<title>${escapeAttr(REFORMER_SIGNUP_META.title)}</title>`,
    `<meta name="description" content="${escapeAttr(REFORMER_SIGNUP_META.description)}" />`,
    `<link rel="canonical" href="${SITE}/reformer-signup" />`,
    `<meta property="og:title" content="${escapeAttr(REFORMER_SIGNUP_META.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(REFORMER_SIGNUP_META.description)}" />`,
    `<meta property="og:url" content="${SITE}/reformer-signup" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");
}

function bakeRouteHtml(rootHtml: string, route: RouteMeta) {
  let html = rootHtml;
  if (route.path === "/reformer-signup") {
    html = rootHtml
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`)
      .replace(
        /<meta\s+name="description"[^>]*>/,
        `<meta name="description" content="${escapeAttr(route.description)}" />`,
      )
      .replace(
        /<title>[^<]*<\/title>\s*<meta\s+name="description"[^>]*>/,
        hardcodedReformerSignupHead(),
      );
  } else {
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeAttr(route.title)}</title>`,
    );
    html = html.replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttr(route.description)}" />`,
    );
    html = html.replace("</head>", `    ${bakedMetaTags(route)}\n  </head>`);
  }

  // Inject a prerendered fallback inside <noscript> so non-JS crawlers see
  // real headings and copy for the route instead of an empty #root div.
  if (route.fallbackBody) {
    const fallback = `<noscript><div id="seo-fallback" style="max-width:720px;margin:2rem auto;padding:1rem;font-family:system-ui,sans-serif;line-height:1.6;">${route.fallbackBody}</div></noscript>`;
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root"></div>\n    ${fallback}`,
    );
  }
  return html;
}

function bakedMetaPlugin() {
  return {
    name: "baked-route-meta",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const publicDir = path.resolve(__dirname, "public");
      const rootHtmlPath = path.join(distDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) return;
      const rootHtml = fs.readFileSync(rootHtmlPath, "utf8");
      for (const route of ROUTES) {
        if (route.path === "/") {
          const baked = bakeRouteHtml(rootHtml, route);
          fs.writeFileSync(rootHtmlPath, baked);
          continue;
        }
        // If a hand-authored static file exists in public/, leave it alone.
        const publicOverride = path.join(publicDir, route.path.replace(/^\//, ""), "index.html");
        if (fs.existsSync(publicOverride)) continue;
        const baked = bakeRouteHtml(rootHtml, route);
        const outDir = path.join(distDir, route.path.replace(/^\//, ""));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), baked);
      }
    },
  };
}

function noEmDashPlugin() {
  return {
    name: "no-em-dash-check",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      if (!fs.existsSync(distDir)) return;
      const offenders: { file: string; snippets: string[] }[] = [];

      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
          } else if (entry.isFile() && /\.html?$/i.test(entry.name)) {
            const raw = fs.readFileSync(full, "utf8");
            // Strip <script>/<style> blocks and HTML tags so we only check visible page text.
            const visible = raw
              .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
              .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
              .replace(/<!--[\s\S]*?-->/g, " ")
              .replace(/<[^>]+>/g, " ");
            if (visible.includes("\u2014")) {
              const snippets: string[] = [];
              const re = /.{0,40}\u2014.{0,40}/g;
              let m: RegExpExecArray | null;
              while ((m = re.exec(visible)) !== null) {
                snippets.push(m[0].replace(/\s+/g, " ").trim());
                if (snippets.length >= 5) break;
              }
              offenders.push({ file: path.relative(distDir, full), snippets });
            }
          }
        }
      };
      walk(distDir);

      if (offenders.length > 0) {
        const report = offenders
          .map((o) => `  - ${o.file}\n      ${o.snippets.join("\n      ")}`)
          .join("\n");
        throw new Error(
          `Em-dash (\u2014) found in generated page text. Replace with commas, periods, or rewrite:\n${report}`,
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode !== 'development' && bakedMetaPlugin(),
    mode !== 'development' && noEmDashPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
