import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://www.renegadereformer.co.uk";
const OG_IMAGE = `${SITE}/og-image.png`;

type RouteMeta = { path: string; title: string; description: string };

const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Reformer Pilates Studio in Bristol | Renegade Reformer",
    description:
      "Renegade Reformer is a premium Reformer Pilates studio in Bristol. Strength-led, contemporary classes opening Spring 2026 — get early access now.",
  },
  {
    path: "/reformer-signup",
    title: "Join Renegade Reformer | Sign Up for Reformer Pilates Bristol",
    description:
      "Sign up for early access to Renegade Reformer — Bristol's strength-led reformer Pilates studio. Be the first to book when we open.",
  },
  {
    path: "/recover",
    title: "Recovery Pilates Classes Bristol | Renegade Reformer",
    description:
      "Low-impact reformer Pilates designed for recovery, rehabilitation, and rest days. Book a recovery session at Renegade Reformer in Bristol.",
  },
  {
    path: "/pricing",
    title: "Reformer Pilates Pricing Bristol | Renegade Reformer",
    description:
      "Explore Renegade Reformer's class packages and membership options. Flexible pricing for reformer Pilates in Bristol — find the plan that works for you.",
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

function bakeRouteHtml(rootHtml: string, route: RouteMeta) {
  let html = rootHtml.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeAttr(route.title)}</title>`,
  );
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  );
  html = html.replace("</head>", `    ${bakedMetaTags(route)}\n  </head>`);
  return html;
}

function bakedMetaPlugin() {
  return {
    name: "baked-route-meta",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const rootHtmlPath = path.join(distDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) return;
      const rootHtml = fs.readFileSync(rootHtmlPath, "utf8");
      for (const route of ROUTES) {
        const baked = bakeRouteHtml(rootHtml, route);
        if (route.path === "/") {
          fs.writeFileSync(rootHtmlPath, baked);
          continue;
        }
        const outDir = path.join(distDir, route.path.replace(/^\//, ""));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), baked);
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
