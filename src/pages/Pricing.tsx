import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const PRICING_CSS = `  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --canvas:        #E1D6C8;
    --surface:       #F5F0E8;
    --surface-raised:#FFFFFF;
    --ink:           #180800;
    --ink-muted:     #491E00;
    --ink-faint:     rgba(24,8,0,0.35);
    --divider:       rgba(24,8,0,0.1);
    --border:        rgba(24,8,0,0.1);
    --border-strong: rgba(24,8,0,0.22);
    --founding-bg:   #270E00;
    --founding-deep: #1C0900;
    --ivory:         #E1D6C8;
    --btn-bg:        #180800;
    --btn-text:      #E1D6C8;
    /* page-level text, ivory on dark bg */
    --page-ink:       #E1D6C8;
    --page-ink-muted: rgba(225,214,200,0.55);
    --page-ink-faint: rgba(225,214,200,0.28);
    --page-divider:   rgba(225,214,200,0.12);
  }

  body {
    background: #0d0400;
    background-image: radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%);
    background-attachment: fixed;
    min-height: 100vh;
    color: var(--page-ink);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .page {
    max-width: 920px;
    margin: 0 auto;
    padding: 120px 36px 96px;
  }

  /* ── NAV ── */
  .rn-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    pointer-events: auto;
    transition: background 0.25s ease, backdrop-filter 0.25s ease, box-shadow 0.25s ease;
    background: linear-gradient(to bottom, rgba(0,0,0,calc(0.55 + var(--nav-scroll, 0) * 0.4)) 0%, rgba(0,0,0,calc(0.35 + var(--nav-scroll, 0) * 0.45)) 55%, rgba(0,0,0,calc(var(--nav-scroll, 0) * 0.25)) 100%);
    backdrop-filter: blur(calc(var(--nav-scroll, 0) * 14px));
    -webkit-backdrop-filter: blur(calc(var(--nav-scroll, 0) * 14px));
    box-shadow: 0 12px 32px -16px rgba(0,0,0, calc(var(--nav-scroll, 0) * 0.85));
  }
  .rn-nav .nav-logo img { width: 56px; height: 56px; object-fit: contain; display: block; }
  .rn-nav .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .rn-nav .nav-links a {
    font-size: 10px;
    letter-spacing: 0.28em;
    color: #8a6e50;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s;
  }
  .rn-nav .nav-links a:hover { color: #f0ebe3; }
  .rn-nav .nav-toggle {
    display: none;
    background: transparent;
    border: 0;
    padding: 8px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .rn-nav .nav-toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: #f0e6d6;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .rn-nav .nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .rn-nav .nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .rn-nav .nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #1a0800;
    padding: 88px 24px 24px;
    border-bottom: 1px solid rgba(240,230,214,0.12);
  }
  .mobile-menu.open { display: block; }
  .mobile-menu ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
  .mobile-menu a {
    display: block;
    padding: 16px 4px;
    color: #f0e6d6;
    font-size: 13px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid rgba(240,230,214,0.08);
  }
  .mobile-menu li:last-child a { border-bottom: 0; }
  @media (max-width: 720px) {
    .rn-nav { padding: 16px 20px; }
    .rn-nav .nav-links { display: none; }
    .rn-nav .nav-toggle { display: flex; }
  }

  /* ---- HEADER ---- */
  .header {
    margin-bottom: 48px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--page-divider);
  }
  .wordmark {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--page-ink-muted);
    margin-bottom: 18px;
  }
  .page-title {
    font-size: 80px;
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--page-ink);
    margin-bottom: 20px;
  }
  .header-sub {
    font-size: 13px;
    font-style: italic;
    color: var(--page-ink-muted);
    font-weight: 300;
    margin-bottom: 8px;
  }
  .header-note {
    font-size: 13px;
    color: var(--page-ink-muted);
    max-width: 460px;
    line-height: 1.75;
    font-weight: 300;
    margin-bottom: 22px;
  }
  .urgency-strip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(225,214,200,0.07);
    border: 1px solid rgba(225,214,200,0.18);
    border-radius: 4px;
    padding: 10px 16px;
  }
  .urgency-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--ivory);
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .urgency-text {
    font-size: 12px;
    font-weight: 500;
    color: var(--ivory);
    letter-spacing: 0.03em;
  }
  .urgency-text em { font-style: normal; color: rgba(225,214,200,0.55); font-weight: 400; }

  /* ---- SECTIONS ---- */
  .section { margin-bottom: 72px; }
  .section-label {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--page-ink);
    margin-bottom: 4px;
    line-height: 1;
  }
  .section-note {
    font-size: 13px;
    font-style: italic;
    font-weight: 300;
    color: var(--page-ink-muted);
    margin-top: 6px;
    margin-bottom: 0;
  }

  /* ---- GRIDS ---- */
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }

  /* ---- CARDS ---- */
  .card {
    background: #E1D6C8;
    border: 1px solid rgba(24,8,0,0.12);
    border-radius: 10px;
    padding: 16px 16px 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 28px;
  }
  .card-feat { border: 1.5px solid rgba(24,8,0,0.28); }
  .feat-badge {
    position: absolute;
    top: -22px; left: 0; right: 0;
    text-align: center;
  }
  .feat-badge span {
    display: inline-block;
    background: var(--ink);
    color: var(--canvas);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 4px;
  }
  .card-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 3px;
  }
  .card-sub {
    font-size: 15px;
    font-weight: 600;
    color: var(--ink-muted);
  }

  /* ---- FOUNDING BLOCK ---- */
  .fb {
    background: var(--founding-bg);
    border-radius: 8px;
    padding: 14px 14px 14px;
    margin-top: 10px;
  }
  .fb-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(225,214,200,0.7);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .fb-label::before {
    content: '';
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(225,214,200,0.7);
    flex-shrink: 0;
  }
  .anchor-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  .anchor-was {
    font-size: 14px;
    font-weight: 700;
    color: rgba(225,214,200,0.35);
    text-decoration: line-through;
    text-decoration-color: rgba(225,214,200,0.35);
  }
  .anchor-unit { font-size: 11px; color: rgba(225,214,200,0.22); }
  .pct-badge {
    background: rgba(180,50,40,0.5);
    color: rgba(255,180,170,0.9);
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 3px;
    white-space: nowrap;
    margin-left: auto;
  }
  .pc-eyebrow {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(225,214,200,0.35);
    margin-bottom: 2px;
  }
  .pc-row { display: flex; align-items: baseline; gap: 2px; }
  .pc-sym { font-size: 18px; font-weight: 700; color: var(--ivory); line-height: 1; }
  .pc-num {
    font-size: 54px;
    font-weight: 900;
    color: var(--ivory);
    letter-spacing: -0.03em;
    line-height: 1;
  }
  .pc-unit {
    font-size: 13px;
    color: rgba(225,214,200,0.4);
    align-self: flex-end;
    padding-bottom: 7px;
    margin-left: 4px;
  }
  .fb-divider {
    border: none;
    border-top: 1px solid rgba(225,214,200,0.08);
    margin: 14px 0;
  }
  .mo-line {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .mo-num { font-size: 20px; font-weight: 700; color: rgba(225,214,200,0.8); }
  .mo-unit { font-size: 12px; color: rgba(225,214,200,0.4); margin-left: 4px; flex: 1; }
  .mo-was { font-size: 12px; color: rgba(225,214,200,0.22); text-decoration: line-through; margin-right: 6px; }
  .mo-pct {
    font-size: 10px;
    font-weight: 700;
    color: rgba(225,214,200,0.5);
    background: rgba(225,214,200,0.08);
    padding: 2px 6px;
    border-radius: 3px;
  }
  .save-block {
    background: rgba(225,214,200,0.07);
    border-radius: 5px;
    padding: 10px 12px;
    margin-bottom: 0;
  }
  .save-eyebrow {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(225,214,200,0.35);
    margin-bottom: 3px;
  }
  .save-num {
    font-size: 26px;
    font-weight: 900;
    color: var(--ivory);
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .save-unit { font-size: 12px; color: rgba(225,214,200,0.5); margin-left: 3px; }
  .spots { font-size: 11px; color: rgba(225,214,200,0.22); }

  /* ---- BUTTON ---- */
  .cta { margin-top: auto; padding-top: 16px; }
  .btn {
    display: block;
    width: 100%;
    padding: 13px 18px;
    background: var(--btn-bg);
    color: var(--btn-text);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
  }
  .btn:hover { opacity: 0.85; transform: translateY(-1px); }

  /* ---- PACKS ---- */
  .pack-card {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 14px 14px 14px;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }
  .pk-eyebrow {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin: 14px 0 2px;
  }
  .pk-row { display: flex; align-items: baseline; gap: 2px; }
  .pk-sym { font-size: 15px; font-weight: 700; color: #f0e6d6; line-height: 1; }
  .pk-num { font-size: 44px; font-weight: 900; color: #f0e6d6; letter-spacing: -0.03em; line-height: 1; }
  .pk-unit { font-size: 12px; color: rgba(255,255,255,0.55); align-self: flex-end; padding-bottom: 5px; margin-left: 3px; }
  .pk-total { font-size: 12px; color: rgba(255,255,255,0.55); margin-top: 3px; margin-bottom: 4px; }
  .btn-ghost {
    display: block;
    width: 100%;
    padding: 11px 18px;
    margin-top: auto;
    padding-top: 13px;
    background: transparent;
    color: #f0e6d6;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.2);
    cursor: pointer;
    transition: background 0.15s;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.06); color: #f0e6d6; }

  /* ---- PERKS BANNER ---- */
  .perks-banner {
    background: var(--founding-deep);
    border: 1px solid rgba(225,214,200,0.14);
    border-radius: 12px;
    padding: 32px 30px 28px;
    margin-bottom: 56px;
  }
  .perks-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  .perks-heading {
    font-size: 22px;
    font-weight: 900;
    color: var(--ivory);
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }
  .perks-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(225,214,200,0.5);
    max-width: 340px;
    line-height: 1.65;
    font-style: italic;
  }
  .perks-lock {
    background: rgba(225,214,200,0.06);
    border: 1px solid rgba(225,214,200,0.14);
    border-radius: 8px;
    padding: 14px 18px;
    flex-shrink: 0;
    max-width: 220px;
  }
  .perks-lock-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--ivory);
    margin-bottom: 5px;
  }
  .perks-lock-body {
    font-size: 12px;
    font-weight: 300;
    color: rgba(225,214,200,0.45);
    line-height: 1.6;
  }
  .perks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  .perk {
    display: flex;
    align-items: flex-start;
    gap: 11px;
    background: rgba(225,214,200,0.05);
    border-radius: 7px;
    padding: 13px 14px;
  }
  .perk-icon {
    font-size: 18px;
    color: rgba(225,214,200,0.55);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .perk-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--ivory);
    margin-bottom: 2px;
  }
  .perk-body {
    font-size: 12px;
    font-weight: 300;
    color: rgba(225,214,200,0.5);
    line-height: 1.5;
  }

  /* ---- FOOTER ---- */
  .footer {
    margin-top: 56px;
    padding-top: 28px;
    border-top: 1px solid var(--page-divider);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    flex-wrap: wrap;
  }
  .footer p {
    font-size: 11px;
    font-weight: 300;
    color: var(--page-ink-faint);
    line-height: 1.8;
    max-width: 500px;
  }
  .footer-brand {
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--page-ink-faint);
    white-space: nowrap;
  }
  .footer-tagline {
    font-size: 10px;
    font-weight: 300;
    font-style: italic;
    color: var(--page-ink-faint);
    letter-spacing: 0.06em;
    margin-top: 3px;
    text-align: right;
  }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 660px) {
    .grid-3, .grid-2 { grid-template-columns: 1fr; }
    .page-title { font-size: 54px; }
    .page { padding: 104px 20px 64px; }
    .pc-num { font-size: 44px; }
    .perks-lock { max-width: 100%; }
    .header { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
    .header > div[aria-hidden="true"] { display: none !important; }
  }
  @media print {
    body { background: #fff; }
    .page { padding: 32px; }
  }

  /* ── PRICING PREVIEW (scoped) ── */

    .pp-scope *, .pp-scope *::before, .pp-scope *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .pp-scope { background: transparent; color: #f0e6d6; font-family: 'Inter', sans-serif; padding: 4rem 2rem; }

    .pp-scope .container { max-width: 1100px; margin: 0 auto; }


    
    .pp-scope .btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 600; width: 100%; font-family: 'Inter', sans-serif; }

    .pp-scope .btn-solid { background: #a02d18; border: none; color: #fff; padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 700; width: 100%; font-family: 'Inter', sans-serif; }


    
    .pp-scope .banner { background: #f0e6d6; border-radius: 0; overflow: hidden; margin-bottom: 4.5rem; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; min-height: 100vh; padding-top: 5rem; padding-bottom: 5rem; display: flex; align-items: center; }

    .pp-scope .banner-inner { display: grid; grid-template-columns: 1fr auto; align-items: stretch; max-width: 1100px; margin: 0 auto; width: 100%; }

    .pp-scope .banner-text { padding: 3.5rem 2.5rem; }

    .pp-scope .banner-tag { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }

    .pp-scope .tag-brown { background: #7a4a28; color: #f5dfc5; font-size: 8px; font-weight: 700; letter-spacing: 0.15em; padding: 4px 12px; border-radius: 4px; text-transform: uppercase; }

    .pp-scope .tag-muted { color: rgba(30,10,0,0.35); font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; }

    .pp-scope .banner-heading { color: #1a0800; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 0.6rem; line-height: 1.15; }

    .pp-scope .banner-heading em { font-style: italic; font-weight: 400; color: rgba(26,8,0,0.55); font-size: 22px; }

    .pp-scope .banner-body { color: rgba(26,8,0,0.55); font-size: 12.5px; line-height: 1.6; margin-bottom: 1.5rem; }

    .pp-scope .banner-body strong { color: #1a0800; font-weight: 700; }

    .pp-scope .banner-tc { color: rgba(26,8,0,0.25); font-size: 10px; line-height: 1.6; }

    .pp-scope .banner-prices { display: flex; border-left: 1px solid rgba(26,8,0,0.1); }

    .pp-scope .banner-price-col { padding: 3.5rem 2.25rem; display: flex; flex-direction: column; justify-content: center; align-items: center; min-width: 150px; }

    .pp-scope .banner-price-col + .banner-price-col { border-left: 1px solid rgba(26,8,0,0.1); }

    .pp-scope .banner-pill-label { color: rgba(26,8,0,0.35); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700; margin-bottom: 10px; text-align: center; }

    .pp-scope .banner-pill-price { color: #1a0800; font-size: 40px; font-weight: 900; letter-spacing: -2px; line-height: 1; }

    .pp-scope .banner-pill-unit { font-size: 12px; font-weight: 400; color: rgba(26,8,0,0.4); margin-top: 4px; }

    @media (max-width: 700px) {
      .pp-scope .banner-inner { grid-template-columns: 1fr; }

      .pp-scope .banner-prices { border-left: none; border-top: 1px solid rgba(26,8,0,0.1); }

    }

    
    .pp-scope .section-heading { color: #f0e6d6; font-size: 32px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; margin-bottom: 2.5rem; line-height: 1.1; }


    
    .pp-scope .grid-2 { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); display: grid; grid-template-columns: 1fr 1fr; }

    .pp-scope .grid-3 { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); display: grid; grid-template-columns: 1fr 1fr 1fr; }

    .pp-scope .product-col { padding: 2.25rem 1.75rem; min-width: 0; }

    .pp-scope .product-col.divider { border-right: 2px solid rgba(255,255,255,0.18); }

    .pp-scope .product-col.relative { position: relative; }

    @media (max-width: 700px) {
      .pp-scope .grid-2, .pp-scope .grid-3 { grid-template-columns: 1fr; }

      .pp-scope .product-col.divider { border-right: none; border-bottom: 2px solid rgba(255,255,255,0.18); }

    }

    
    .pp-scope .tier-name { color: #f0e6d6; font-size: 32px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; line-height: 1; margin-bottom: 5px; }

    .pp-scope .tier-sub { color: rgba(255,255,255,0.75); font-size: 12px; text-align: center; margin-bottom: 1.75rem; height: 36px; display: flex; align-items: center; justify-content: center; }


    
    .pp-scope .dual-price { display: flex; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; margin-bottom: 1.4rem; height: 136px; }

    .pp-scope .dual-cell { flex: 1; padding: 18px 14px 18px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }

    .pp-scope .dual-cell + .dual-cell { border-left: 1px solid rgba(255,255,255,0.1); }

    .pp-scope .dual-cell.dim { opacity: 0.75; }

    .pp-scope .dual-label { color: rgba(255,255,255,0.75); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; margin-bottom: 10px; height: 40px; display: flex; align-items: flex-start; justify-content: center; text-align: center; line-height: 1.6; }

    .pp-scope .dual-num { color: #f0e6d6; font-size: 36px; font-weight: 900; letter-spacing: -2px; line-height: 1; }


    
    .pp-scope .price-row { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 56px; border-radius: 7px; margin-bottom: 7px; }

    .pp-scope .price-row.founders { background: rgba(160,45,24,0.2); border: 1px solid rgba(160,45,24,0.35); }

    .pp-scope .price-row.general { border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }

    .pp-scope .row-label-f { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,200,180,0.6); flex-shrink: 1; min-width: 0; }

    .pp-scope .row-label-g { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); flex-shrink: 1; min-width: 0; }

    .pp-scope .row-price-f { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: #f0e6d6; white-space: nowrap; flex-shrink: 0; margin-left: 8px; }

    .pp-scope .row-price-g { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: rgba(255,255,255,0.7); white-space: nowrap; flex-shrink: 0; margin-left: 8px; }

    .pp-scope .row-unit-f { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.35); }

    .pp-scope .row-unit-g { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); }


    
    .pp-scope .badge { position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 14px; border-radius: 0 0 5px 5px; white-space: nowrap; font-weight: 700; }


    
    .pp-scope .cta-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 1.25rem; margin-bottom: 4.5rem; }


    
    .pp-scope .section { margin-bottom: 1rem; }


    
    .pp-scope .dropin-section { background: transparent; border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); border-radius: 0; overflow: hidden; margin-bottom: 4.5rem; }

    .pp-scope .dropin-header { padding: 2.5rem 2.5rem 1.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); }

    .pp-scope .dropin-headline { font-size: 32px; font-weight: 900; color: #f0e6d6; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.1; margin-bottom: 0.75rem; }

    .pp-scope .dropin-strapline { font-size: 14px; color: rgba(255,255,255,0.4); font-style: italic; letter-spacing: 0.01em; }

    .pp-scope .dropin-body { display: grid; grid-template-columns: 1fr 300px; }

    .pp-scope .dropin-left { padding: 2rem 2.5rem; border-right: 1px solid rgba(255,255,255,0.08); }

    .pp-scope .dropin-desc { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 1.5rem; max-width: 520px; }

    .pp-scope .dropin-bullets { list-style: none; display: flex; flex-direction: column; gap: 0; }

    .pp-scope .dropin-bullet { display: flex; align-items: center; gap: 12px; font-size: 12px; color: rgba(255,255,255,0.45); padding: 9px 0; border-top: 1px solid rgba(255,255,255,0.06); }

    .pp-scope .dropin-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }

    .pp-scope .dropin-bullet::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.25); flex-shrink: 0; }

    .pp-scope .dropin-right { padding: 2rem 2rem; display: flex; flex-direction: column; justify-content: space-between; }

    .pp-scope .dropin-price-block {  }

    .pp-scope .dropin-rate-label { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); font-weight: 700; margin-bottom: 4px; }

    .pp-scope .dropin-big-price { font-size: 72px; font-weight: 900; color: #f0e6d6; letter-spacing: -4px; line-height: 1; }

    .pp-scope .dropin-big-unit { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.4); letter-spacing: 0; }

    .pp-scope .dropin-standard { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 8px; text-decoration: line-through; }

    @media (max-width: 700px) {
      .pp-scope .dropin-body { grid-template-columns: 1fr; }

      .pp-scope .dropin-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }

      .pp-scope .dropin-right { padding: 1.5rem 2rem; }

    }

    
    .pp-scope .intro-section { margin-top: 4rem; }

    .pp-scope .intro-inner { border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem; display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 3rem; align-items: center; }

    .pp-scope .intro-left {  }

    .pp-scope .intro-tag { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.3); margin-bottom: 8px; }

    .pp-scope .intro-title { font-size: 28px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; margin-bottom: 6px; }

    .pp-scope .intro-sub { font-size: 12px; color: rgba(255,255,255,0.45); margin-bottom: 1.25rem; }

    .pp-scope .intro-prices { display: flex; gap: 1.5rem; align-items: baseline; margin-bottom: 1.25rem; }

    .pp-scope .intro-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }

    @media (max-width: 700px) {
      .pp-scope .intro-inner { grid-template-columns: 1fr; }

      .pp-scope .intro-right { align-items: flex-start; }

    }

    
    .pp-scope .accordion { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); margin-bottom: 1.5rem; }

    .pp-scope .acc-item { border-bottom: 1px solid rgba(255,255,255,0.08); transition: background 0.25s; }

    .pp-scope .acc-item:last-child { border-bottom: none; }

    .pp-scope .acc-item.open { background: rgba(160,80,30,0.07); }


    .pp-scope .acc-header { display: flex; align-items: center; justify-content: space-between;
      padding: 1.6rem 1.75rem; cursor: pointer; user-select: none; }

    .pp-scope .acc-header:hover { background: rgba(255,255,255,0.02); }


    .pp-scope .acc-left { display: flex; flex-direction: column; gap: 5px; }

    .pp-scope .acc-eyebrow { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(180,80,40,0.7); font-weight: 700; transition: color 0.2s; }

    .pp-scope .acc-item.open .acc-eyebrow { color: #d4603f; }

    .pp-scope .acc-name { font-size: 30px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; line-height: 1; }


    .pp-scope .acc-right { display: flex; align-items: center; gap: 1.5rem; }

    .pp-scope .acc-price-collapsed { text-align: right; }

    .pp-scope .acc-price-big { font-size: 30px; font-weight: 900; color: #f0e6d6; letter-spacing: -1px; line-height: 1; }

    .pp-scope .acc-price-big span { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.35); }

    .pp-scope .acc-price-sub { font-size: 10px; color: rgba(255,255,255,0.28); margin-top: 3px; text-align: right; }


    .pp-scope .acc-chevron { width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; flex-shrink: 0; transition: transform 0.25s, border-color 0.2s; }

    .pp-scope .acc-chevron svg { width: 10px; height: 10px; stroke: rgba(255,255,255,0.4); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.2s; }

    .pp-scope .acc-item.open .acc-chevron { border-color: rgba(255,255,255,0.3); transform: rotate(180deg); }

    .pp-scope .acc-item.open .acc-chevron svg { stroke: rgba(255,255,255,0.7); }


    
    .pp-scope .acc-body { display: none; padding: 0.25rem 1.75rem 2rem; }

    .pp-scope .acc-item.open .acc-body { display: block; }

    .pp-scope .acc-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: start; }


    
    .pp-scope .acc-features { list-style: none; display: flex; flex-direction: column; gap: 0; }

    .pp-scope .acc-feat { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }

    .pp-scope .acc-feat:last-child { border-bottom: none; }

    .pp-scope .acc-feat-icon { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 6px; }

    .pp-scope .acc-feat-icon svg { width: 14px; height: 14px; stroke: rgba(210,160,120,0.8); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

    .pp-scope .acc-feat-text { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.4; }

    .pp-scope .acc-feat-text strong { color: #f0e6d6; font-weight: 600; }


    
    .pp-scope .acc-pricing-right { display: flex; flex-direction: column; }

    .pp-scope .acc-badge-wrap { margin-bottom: 1rem; }

    .pp-scope .acc-badge { display: inline-block; background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 12px; border-radius: 3px; font-weight: 700; }

    .pp-scope .acc-per-class-box { border: 1px solid rgba(255,255,255,0.2); border-radius: 7px; padding: 14px 16px; margin-bottom: 7px; display: flex; align-items: center; justify-content: space-between; }

    .pp-scope .acc-per-class-label { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); }

    .pp-scope .acc-per-class-num { font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -1px; }


    @media (max-width: 700px) {
      .pp-scope .acc-inner { grid-template-columns: 1fr; gap: 1.5rem; }

      .pp-scope .acc-name { font-size: 24px; }

      .pp-scope .acc-price-big { font-size: 24px; }

      .pp-scope .acc-price-main { font-size: 40px; }

    }
  
`;

const PRICING_BODY_BELOW = `<div class="page">
  <!-- FOUNDING PERKS BANNER -->
  <div class="perks-banner">
    <div class="perks-top">
      <div>
        <p class="perks-heading">Founding member perks.</p>
        <p class="perks-sub">Be one of the first to join Renegade and receive all of the below, for as long as you stay a member.</p>
      </div>
      <div class="perks-lock">
        <p class="perks-lock-title">Locked in for life</p>
        <p class="perks-lock-body">Your founding rate stays yours until you pause or cancel. Never pay more.</p>
      </div>
    </div>
    <div class="perks-grid">
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 12H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/><path d="M6 12V6a2 2 0 0 1 4 0v2a2 2 0 0 0 4 0V6a2 2 0 0 1 4 0v6"/></svg>
        <div>
          <p class="perk-title">Renegade socks</p>
          <p class="perk-body">Free pair of branded socks on joining</p>
        </div>
      </div>
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
        <div>
          <p class="perk-title">1 guest pass / month</p>
          <p class="perk-body">Bring a friend to any class, on us</p>
        </div>
      </div>
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>
        <div>
          <p class="perk-title">Priority event booking</p>
          <p class="perk-body">First access to all community events</p>
        </div>
      </div>
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <div>
          <p class="perk-title">Early class booking</p>
          <p class="perk-body">Book one week ahead of non-members</p>
        </div>
      </div>
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <div>
          <p class="perk-title">Renegade tote bag</p>
          <p class="perk-body">Complimentary branded tote on joining</p>
        </div>
      </div>
      <div class="perk">
        <svg class="perk-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
        <div>
          <p class="perk-title">10% off the bar</p>
          <p class="perk-body">Coffee &amp; drinks, every visit</p>
        </div>
      </div>
    </div>
  </div>

  <!-- CLASS PACKS -->
  <section class="section" id="class-packs">
    <p class="section-label">Class packs</p>
    <p class="section-note">Not a member yet? Packs are a great way to try the studio.</p>
    <div class="grid-3">

      <div class="pack-card">
        <p class="pk-eyebrow" style="margin-top:0;">Class pack</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.55);font-weight:300;margin-bottom:14px;">Valid 3 months from first use</p>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px;">
          <span style="font-size:72px;font-weight:900;color:#f0e6d6;letter-spacing:-0.03em;line-height:1;">4</span>
          <span style="font-size:18px;font-weight:600;color:rgba(255,255,255,0.55);align-self:flex-end;padding-bottom:8px;">classes</span>
        </div>
        <p class="pk-eyebrow" style="margin-top:8px;">per class</p>
        <div class="pk-row"><span class="pk-sym">£</span><span class="pk-num">23</span><span class="pk-unit">/ class</span></div>
        <p class="pk-total">£92 total</p>
        <!-- ↓ replace YOUR_URL_HERE -->
        <a href="#" class="btn-ghost">Buy pack</a>
      </div>

      <div class="pack-card">
        <p class="pk-eyebrow" style="margin-top:0;">Class pack</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.55);font-weight:300;margin-bottom:14px;">Valid 3 months from first use</p>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px;">
          <span style="font-size:72px;font-weight:900;color:#f0e6d6;letter-spacing:-0.03em;line-height:1;">8</span>
          <span style="font-size:18px;font-weight:600;color:rgba(255,255,255,0.55);align-self:flex-end;padding-bottom:8px;">classes</span>
        </div>
        <p class="pk-eyebrow" style="margin-top:8px;">per class</p>
        <div class="pk-row"><span class="pk-sym">£</span><span class="pk-num">22</span><span class="pk-unit">/ class</span></div>
        <p class="pk-total">£176 total</p>
        <!-- ↓ replace YOUR_URL_HERE -->
        <a href="#" class="btn-ghost">Buy pack</a>
      </div>

      <div class="pack-card">
        <p class="pk-eyebrow" style="margin-top:0;">Class pack</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.55);font-weight:300;margin-bottom:14px;">Valid 3 months from first use</p>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px;">
          <span style="font-size:72px;font-weight:900;color:#f0e6d6;letter-spacing:-0.03em;line-height:1;">12</span>
          <span style="font-size:18px;font-weight:600;color:rgba(255,255,255,0.55);align-self:flex-end;padding-bottom:8px;">classes</span>
        </div>
        <p class="pk-eyebrow" style="margin-top:8px;">per class</p>
        <div class="pk-row"><span class="pk-sym">£</span><span class="pk-num">21.00</span><span class="pk-unit">/ class</span></div>
        <p class="pk-total">£252 total</p>
        <!-- ↓ replace YOUR_URL_HERE -->
        <a href="#" class="btn-ghost">Buy pack</a>
      </div>

    </div>
  </section>

  <footer class="footer">
    <p>All memberships roll monthly after an initial 1-month term. Class packs are non-refundable and non-transferable. Founding member rates are strictly limited to 50 spots and locked in for life, your rate never increases as long as your membership remains active.</p>
    <div>
      <p class="footer-brand">Renegade.</p>
      <p class="footer-tagline">reform · repower · recover</p>
    </div>
  </footer>

</div>

<div id="cs-toast" role="dialog" aria-modal="true" aria-hidden="true" style="position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.55);z-index:9999;font-family:'Inter',sans-serif;">
  <div style="position:relative;max-width:420px;width:calc(100% - 32px);background:#5a3a2a;color:#fff;border-radius:14px;padding:24px 28px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
    <button type="button" id="cs-toast-close" aria-label="Close" style="position:absolute;top:10px;right:12px;background:transparent;border:0;color:rgba(255,255,255,0.7);font-size:20px;cursor:pointer;line-height:1;">×</button>
    <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;">Coming Soon</h3>
    <p style="font-size:15px;line-height:1.5;color:rgba(255,255,255,0.92);">Reformer Pilates class details will be available shortly.</p>
  </div>
</div>
`;

const NEW_TOP_CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #140800; color: #f0e6d6; font-family: 'Inter', sans-serif; padding: 4rem 2rem; }
    .container { max-width: 1100px; margin: 0 auto; }

    /* ── BUTTONS ── */
    .btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 600; width: 100%; font-family: 'Inter', sans-serif; }
    .btn-solid { background: #a02d18; border: none; color: #fff; padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 700; width: 100%; font-family: 'Inter', sans-serif; }

    /* ── BANNER ── */
    .banner { border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 2rem 2.5rem; display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; flex-wrap: wrap; margin-bottom: 4.5rem; }
    .banner-text { flex: 1; min-width: 240px; }
    .banner-tag { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
    .tag-red { background: #c0391a; color: #fff; font-size: 8px; font-weight: 700; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 4px; text-transform: uppercase; }
    .tag-muted { color: rgba(255,255,255,0.3); font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; }
    .banner-heading { color: #f0e6d6; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 10px; line-height: 1.2; }
    .banner-body { color: rgba(255,255,255,0.55); font-size: 12px; line-height: 1.7; margin-bottom: 6px; }
    .banner-body strong { color: #f0e6d6; }
    .banner-footnote { color: rgba(255,255,255,0.3); font-size: 11px; font-style: italic; }
    .banner-prices { display: flex; flex-direction: column; gap: 8px; min-width: 170px; }
    .banner-pill { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px 20px; text-align: center; }
    .banner-pill-label { color: rgba(255,255,255,0.35); font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 4px; font-weight: 600; }
    .banner-pill-price { color: #f0e6d6; font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }
    .banner-pill-unit { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); }

    /* ── SECTION HEADINGS ── */
    .section-heading { color: #f0e6d6; font-size: 32px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; margin-bottom: 2.5rem; line-height: 1.1; }

    /* ── GRIDS ── */
    .grid-2 { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); display: grid; grid-template-columns: 1fr 1fr; }
    .grid-3 { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); display: grid; grid-template-columns: 1fr 1fr 1fr; }
    .product-col { padding: 2.25rem 1.75rem; min-width: 0; }
    .product-col.divider { border-right: 2px solid rgba(255,255,255,0.18); }
    .product-col.relative { position: relative; }
    @media (max-width: 700px) {
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .product-col.divider { border-right: none; border-bottom: 2px solid rgba(255,255,255,0.18); }
    }

    /* ── TIER NAME ── */
    .tier-name { color: #f0e6d6; font-size: 32px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; line-height: 1; margin-bottom: 5px; }
    .tier-sub { color: rgba(255,255,255,0.75); font-size: 12px; text-align: center; margin-bottom: 1.75rem; height: 36px; display: flex; align-items: center; justify-content: center; }

    /* ── DUAL PRICE BOX ── */
    .dual-price { display: flex; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; margin-bottom: 1.4rem; height: 136px; }
    .dual-cell { flex: 1; padding: 18px 14px 18px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .dual-cell + .dual-cell { border-left: 1px solid rgba(255,255,255,0.1); }
    .dual-cell.dim { opacity: 0.75; }
    .dual-label { color: rgba(255,255,255,0.75); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; margin-bottom: 10px; height: 40px; display: flex; align-items: flex-start; justify-content: center; text-align: center; line-height: 1.6; }
    .dual-num { color: #f0e6d6; font-size: 36px; font-weight: 900; letter-spacing: -2px; line-height: 1; }

    /* ── PRICE ROWS ── */
    .price-row { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 56px; border-radius: 7px; margin-bottom: 7px; }
    .price-row.founders { background: rgba(160,45,24,0.2); border: 1px solid rgba(160,45,24,0.35); }
    .price-row.general { border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }
    .row-label-f { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,200,180,0.6); flex-shrink: 1; min-width: 0; }
    .row-label-g { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); flex-shrink: 1; min-width: 0; }
    .row-price-f { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: #f0e6d6; white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
    .row-price-g { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: rgba(255,255,255,0.7); white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
    .row-unit-f { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.35); }
    .row-unit-g { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); }

    /* ── BADGE ── */
    .badge { position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 14px; border-radius: 0 0 5px 5px; white-space: nowrap; font-weight: 700; }

    /* ── CTA ROW ── */
    .cta-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 1.25rem; margin-bottom: 4.5rem; }

    /* ── SECTION SPACING ── */
    .section { margin-bottom: 1rem; }
`;

const NewPricingTop = () => (
  <>
    <style>{NEW_TOP_CSS}</style>
    <div className="container">

      {/* FOUNDING RATE BANNER */}
      <div className="banner">
        <div className="banner-text">
          <div className="banner-tag">
            <span className="tag-red">Closing 31 July</span>
            <span className="tag-muted">Founding rates</span>
          </div>
          <p className="banner-heading">Lock in your founding rate<br />before we open.</p>
          <p className="banner-body">Drop-in founding rate ends <strong>31 July</strong> &middot; Founding memberships lock in your rate <strong>for life</strong> <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', verticalAlign: 'super', lineHeight: 0 }}>*</span></p>
          <p className="banner-footnote">The lowest price Renegade Reformer will ever offer.</p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', marginTop: '10px', lineHeight: 1.5 }}>* Founding membership rate is locked for the duration of your active membership. Rate applies only to the original plan selected at sign-up. Subject to standard membership terms.</p>
        </div>
        <div className="banner-prices">
          <div className="banner-pill">
            <p className="banner-pill-label">Founding drop-in</p>
            <p className="banner-pill-price">£20 <span className="banner-pill-unit">/class</span></p>
          </div>
          <div className="banner-pill">
            <p className="banner-pill-label">Memberships from</p>
            <p className="banner-pill-price">£14 <span className="banner-pill-unit">/class</span></p>
          </div>
        </div>
      </div>

      {/* DROP-IN & CLASS PACKS */}
      <div className="section">
        <p className="section-heading">Drop-in's &amp; class packs.</p>
        <div className="grid-2">

          {/* Drop-in */}
          <div className="product-col divider">
            <p className="tier-name">Drop-in</p>
            <p className="tier-sub">Single session &middot; pay as you go</p>
            <div className="dual-price">
              <div className="dual-cell">
                <p className="dual-label">Early access<br />founders<br />drop-in price</p>
                <p className="dual-num">£20</p>
              </div>
              <div className="dual-cell dim">
                <p className="dual-label">General launch price</p>
                <p className="dual-num">£25</p>
              </div>
            </div>
            <div className="price-row founders" style={{ marginBottom: '1.1rem' }}>
              <span className="row-label-f">Founders Discount</span>
              <span className="row-price-f">£20<span className="row-unit-f"> /class</span></span>
            </div>
            <button className="btn-ghost">Book founding rate</button>
          </div>

          {/* Intro pack */}
          <div className="product-col">
            <p className="tier-name">Intro pack</p>
            <p className="tier-sub">3 classes &middot; new clients only &middot; valid 30 days</p>
            <div className="dual-price">
              <div className="dual-cell">
                <p className="dual-label">3 class<br />intro pack</p>
                <p className="dual-num">£48</p>
              </div>
              <div className="dual-cell dim">
                <p className="dual-label">General launch price</p>
                <p className="dual-num">£55</p>
              </div>
            </div>
            <div className="price-row founders" style={{ marginBottom: '1.1rem' }}>
              <span className="row-label-f">Founders Discount</span>
              <span className="row-price-f">£16<span className="row-unit-f"> /class</span></span>
            </div>
            <button className="btn-ghost">Book founding rate</button>
          </div>

        </div>
      </div>

      {/* MONTHLY MEMBERSHIPS */}
      <div className="section" style={{ marginTop: '4.5rem' }}>
        <p className="section-heading">Monthly memberships.</p>
        <div className="grid-3">

          {/* Core */}
          <div className="product-col divider">
            <p className="tier-name">Core</p>
            <p className="tier-sub">4 classes / month</p>
            <div className="dual-price">
              <div className="dual-cell">
                <p className="dual-label">Per month</p>
                <p className="dual-num">£72</p>
              </div>
              <div className="dual-cell">
                <p className="dual-label">Per class</p>
                <p className="dual-num">£18</p>
              </div>
            </div>
            <div className="price-row founders">
              <span className="row-label-f">Founders Discount</span>
              <span className="row-price-f">£72<span className="row-unit-f"> /month</span></span>
            </div>
            <div className="price-row general">
              <span className="row-label-g">General Launch Price</span>
              <span className="row-price-g">£85<span className="row-unit-g"> /month</span></span>
            </div>
          </div>

          {/* Pro */}
          <div className="product-col divider relative">
            <div className="badge">Renegade Recommended</div>
            <p className="tier-name">Pro</p>
            <p className="tier-sub">8 classes / month</p>
            <div className="dual-price">
              <div className="dual-cell">
                <p className="dual-label">Per month</p>
                <p className="dual-num">£128</p>
              </div>
              <div className="dual-cell">
                <p className="dual-label">Per class</p>
                <p className="dual-num">£16</p>
              </div>
            </div>
            <div className="price-row founders">
              <span className="row-label-f">Founders Discount</span>
              <span className="row-price-f">£128<span className="row-unit-f"> /month</span></span>
            </div>
            <div className="price-row general">
              <span className="row-label-g">General Launch Price</span>
              <span className="row-price-g">£150<span className="row-unit-g"> /month</span></span>
            </div>
          </div>

          {/* Elite */}
          <div className="product-col">
            <p className="tier-name">Elite</p>
            <p className="tier-sub">12 classes / month</p>
            <div className="dual-price">
              <div className="dual-cell">
                <p className="dual-label">Per month</p>
                <p className="dual-num">£168</p>
              </div>
              <div className="dual-cell">
                <p className="dual-label">Per class</p>
                <p className="dual-num">£14</p>
              </div>
            </div>
            <div className="price-row founders">
              <span className="row-label-f">Founders Discount</span>
              <span className="row-price-f">£168<span className="row-unit-f"> /month</span></span>
            </div>
            <div className="price-row general">
              <span className="row-label-g">General Launch Price</span>
              <span className="row-price-g">£195<span className="row-unit-g"> /month</span></span>
            </div>
          </div>

        </div>
        <div className="cta-row">
          <button className="btn-ghost">Get founding rate</button>
          <button className="btn-solid">Get founding rate</button>
          <button className="btn-ghost">Get founding rate</button>
        </div>
      </div>

    </div>
  </>
);

const Pricing = () => {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.querySelector('.rn-nav') as HTMLElement | null;
    let ticking = false;
    const update = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const t = Math.min(1, y / 120);
      nav?.style.setProperty('--nav-scroll', t.toFixed(3));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    // Mobile hamburger menu
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    const setMenu = (open: boolean) => {
      if (!toggle || !menu) return;
      toggle.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      menu.classList.toggle('open', open);
    };
    const onToggle = () => setMenu(toggle?.getAttribute('aria-expanded') !== 'true');
    const onMenuLinkClick = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'A') setMenu(false);
    };
    toggle?.addEventListener('click', onToggle);
    menu?.addEventListener('click', onMenuLinkClick);

    // Accordion toggle for memberships
    const onAccClick = (e: Event) => {
      const header = (e.target as HTMLElement).closest('[data-acc-toggle]');
      if (!header) return;
      const item = header.closest('[data-acc]');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('[data-acc]').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    };
    document.addEventListener('click', onAccClick);

    // Coming Soon toast
    const toast = document.getElementById('cs-toast');
    const closeBtn = document.getElementById('cs-toast-close');
    const show = () => { if (toast) { toast.style.display = 'flex'; toast.setAttribute('aria-hidden','false'); } };
    const hide = () => { if (toast) { toast.style.display = 'none'; toast.setAttribute('aria-hidden','true'); } };
    const onCloseClick = () => hide();
    const onToastClick = (e: MouseEvent) => { if (e.target === toast) hide(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') hide(); };
    closeBtn?.addEventListener('click', onCloseClick);
    toast?.addEventListener('click', onToastClick as EventListener);
    document.addEventListener('keydown', onKey);

    const btnHandlers: Array<[HTMLButtonElement, (e: Event) => void]> = [];
    document.querySelectorAll<HTMLButtonElement>('button.btn').forEach((btn) => {
      if ((btn.textContent || '').trim() === 'Founders Discount') {
        btn.removeAttribute('onclick');
        const h = (e: Event) => { e.preventDefault(); show(); };
        btn.addEventListener('click', h);
        btnHandlers.push([btn, h]);
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      toggle?.removeEventListener('click', onToggle);
      menu?.removeEventListener('click', onMenuLinkClick);
      closeBtn?.removeEventListener('click', onCloseClick);
      toast?.removeEventListener('click', onToastClick as EventListener);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onAccClick);
      btnHandlers.forEach(([b, h]) => b.removeEventListener('click', h));
    };
  }, []);

  return (
    <>
      <SEO
        title="Reformer Pilates Pricing Bristol | Renegade Reformer"
        description="Explore Renegade Reformer's class packages and membership options. Flexible pricing for reformer Pilates in Bristol, find the plan that works for you."
        path="/pricing"
      />
      <style dangerouslySetInnerHTML={{ __html: PRICING_CSS }} />
      <NewPricingTop />
      <div dangerouslySetInnerHTML={{ __html: PRICING_BODY_BELOW }} />
    </>
  );
};

export default Pricing;
