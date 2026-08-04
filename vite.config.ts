import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://www.renegadereformer.co.uk";
const OG_IMAGE = `${SITE}/og-image.png`;

type RouteMeta = { path: string; title: string; description: string; fallbackBody?: string };

const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Reformer Pilates in Redfield, Bristol | Renegade Reformer",
    description:
      "Renegade Reformer is a strength-led reformer Pilates studio in Redfield, Bristol. Drop-ins £25, class packs and memberships from £16.25 per class.",
    fallbackBody:
      "<h1>Renegade Reformer - Reformer Pilates in Redfield, Bristol</h1><p>Renegade Reformer is a strength-led, music-driven reformer Pilates studio in Redfield, Bristol. We're now open, with drop-ins, class packs and monthly memberships.</p><h2>Reform. Repower. Recover.</h2><p>Small class sizes, contemporary reformer Pilates, and a studio built for progression. Explore our classes, view pricing, or book your first session on the timetable.</p><p><a href=\"/pricing\">View pricing</a> | <a href=\"/reformerpilates.html\">Class information</a> | <a href=\"/timetable\">Book a class</a> | <a href=\"/contact\">Contact us</a></p>",
  },
  {
    path: "/pricing",
    title: "Pricing & Membership | Renegade Reformer Bristol",
    description:
      "Pricing at Renegade Reformer, Bristol's reformer Pilates studio in Redfield. Drop-ins £25, class packs and monthly memberships from £16.25 per class.",
    fallbackBody:
      "<h1>Pricing and Membership - Renegade Reformer Bristol</h1><p>Renegade Reformer is our reformer Pilates studio in Redfield, Bristol. Choose from drop-in classes, class packs and monthly memberships.</p><h2>Memberships</h2><ul><li>Core - 4 classes / month - £85/mo (£21.25 per class)</li><li>Pro - 8 classes / month - £150/mo (£18.75 per class)</li><li>Elite - 12 classes / month - £195/mo (£16.25 per class)</li></ul><h2>Drop-in and class packs</h2><p>Drop-in classes are £25. Class packs are £95 for 4 classes, £175 for 8 classes and £252 for 12 classes, each valid 3 months from first use.</p>",
  },
  {
    path: "/contact",
    title: "Contact | Renegade Reformer Bristol",
    description:
      "Get in touch with Renegade Reformer, the reformer Pilates studio in Redfield, Bristol. Email us or message us on WhatsApp. We'd love to hear from you.",
    fallbackBody:
      "<h1>Contact Renegade Reformer</h1><p>Get in touch with Renegade Reformer, our reformer Pilates studio at 22a Church Road, Redfield, Bristol BS5 9JA.</p><p>Email <a href=\"mailto:studio@renegadereformer.co.uk\">studio@renegadereformer.co.uk</a>, message us on WhatsApp at <a href=\"https://wa.me/447846849456\">+44 7846 849456</a> (messages only, not voice calls), or use the contact form.</p>",
  },
  {
    path: "/timetable",
    title: "Class Timetable & Booking | Renegade Reformer",
    description:
      "Browse this week's reformer Pilates timetable in Redfield, Bristol and book your spot: Foundations, Renegade and Rebuild classes, small groups.",
    fallbackBody:
      "<h1>Reformer Pilates Timetable, Redfield, Bristol</h1><p>Browse this week's reformer Pilates classes at Renegade Reformer, 22a Church Road, Redfield, Bristol BS5 9JA, and book your spot online.</p><h2>Our classes</h2><ul><li>Foundations - technique first, ideal for your first reformer classes</li><li>Renegade - our signature strength-led, music-driven class</li><li>Rebuild - strength and Pilates, your gym workout on the reformer</li></ul><p>Every class runs 50 minutes in small groups. <a href=\"/pricing\">View pricing</a> | <a href=\"/reformerpilates.html\">Class information</a></p>",
  },
];

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Every head tag below is also emitted at runtime by react-helmet-async (the
// SEO component). Helmet takes ownership of, and replaces, any tag carrying the
// data-rh attribute, so marking the baked tags keeps exactly one of each in the
// live DOM instead of a static copy plus a Helmet copy.
const RH = ` data-rh="true"`;

/** Replace an existing head tag in place, or append it before </head>. */
function upsertHead(html: string, matcher: RegExp, tag: string) {
  if (matcher.test(html)) return html.replace(matcher, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function bakedHeadTags({ title, description, path: routePath }: RouteMeta) {
  const url = `${SITE}${routePath === "/" ? "/" : routePath}`;
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const u = escapeAttr(url);
  const img = escapeAttr(OG_IMAGE);
  return [
    [/<title[^>]*>[^<]*<\/title>/, `<title${RH}>${t}</title>`],
    [/<meta[^>]*name="description"[^>]*>/, `<meta${RH} name="description" content="${d}" />`],
    [/<link[^>]*rel="canonical"[^>]*>/, `<link${RH} rel="canonical" href="${u}" />`],
    [/<meta[^>]*property="og:title"[^>]*>/, `<meta${RH} property="og:title" content="${t}" />`],
    [
      /<meta[^>]*property="og:description"[^>]*>/,
      `<meta${RH} property="og:description" content="${d}" />`,
    ],
    [/<meta[^>]*property="og:url"[^>]*>/, `<meta${RH} property="og:url" content="${u}" />`],
    [/<meta[^>]*property="og:type"[^>]*>/, `<meta${RH} property="og:type" content="website" />`],
    [
      /<meta[^>]*property="og:image"(?![:])[^>]*>/,
      `<meta${RH} property="og:image" content="${img}" />`,
    ],
    [
      /<meta[^>]*name="twitter:card"[^>]*>/,
      `<meta${RH} name="twitter:card" content="summary_large_image" />`,
    ],
    [/<meta[^>]*name="twitter:title"[^>]*>/, `<meta${RH} name="twitter:title" content="${t}" />`],
    [
      /<meta[^>]*name="twitter:description"[^>]*>/,
      `<meta${RH} name="twitter:description" content="${d}" />`,
    ],
    [/<meta[^>]*name="twitter:image"[^>]*>/, `<meta${RH} name="twitter:image" content="${img}" />`],
  ] as [RegExp, string][];
}

function bakeRouteHtml(rootHtml: string, route: RouteMeta) {
  let html = rootHtml;
  for (const [matcher, tag] of bakedHeadTags(route)) {
    html = upsertHead(html, matcher, tag);
  }

  // Inject a prerendered fallback inside <noscript> so non-JS crawlers see
  // real headings and copy for the route instead of an empty #root div.
  if (route.fallbackBody) {
    // handled below
  }

  // Homepage only: paint the hero copy straight from HTML so the LCP element
  // (the hero paragraph) renders before the React bundle executes. React
  // replaces this markup on its first render into #root.
  if (route.path === "/") {
    const heroShell = `<div style="max-width:1200px;margin:0 auto;padding:4rem 1.5rem 6rem;font-family:'Space Grotesk',system-ui,-apple-system,sans-serif;"><p style="font-size:17px;letter-spacing:0.18em;text-transform:uppercase;color:#C49A4A;margin:0 0 0.5rem;">Bristol · Redfield · Now Open</p><h2 style="font-size:20px;letter-spacing:0.02em;color:#C49A4A;margin:0 0 0.75rem;font-weight:700;">IMMERSIVE REFORMER PILATES</h2><p style="color:rgba(225,214,200,0.68);font-size:14px;line-height:1.7;max-width:520px;margin:0;">Strength, control and rhythm, built into every class. Set inside a considered space of tuned lighting, thoughtful set design and a music-first soundtrack. Reformer pilates in Bristol, done our way.</p></div>`;
    html = html.replace(/<div id="root"><\/div>/, `<div id="root">${heroShell}</div>`);
  }

  if (route.fallbackBody) {
    const fallback = `<noscript><div id="seo-fallback" style="max-width:720px;margin:2rem auto;padding:1rem;font-family:system-ui,sans-serif;line-height:1.6;">${route.fallbackBody}</div></noscript>`;
    html = html.replace(
      /<div id="root">/,
      `${fallback}\n    <div id="root">`,
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
