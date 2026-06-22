import { useEffect, useState } from "react";
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
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.95);
    font-weight: 300;
    margin-bottom: 8px;
  }
  .header-note {
    font-size: 13px;
    color: rgba(255,255,255,0.9);
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
  .urgency-text em { font-style: normal; color: rgba(255,255,255,0.8); font-weight: 400; }

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
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.9);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .fb-label::before {
    content: '';
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.85);
    text-decoration: line-through;
    text-decoration-color: rgba(255,255,255,0.85);
  }
  .anchor-unit { font-size: 11px; color: rgba(255,255,255,0.7); }
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
    color: rgba(255,255,255,0.85);
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
    color: rgba(255,255,255,0.85);
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
  .mo-unit { font-size: 12px; color: rgba(255,255,255,0.85); margin-left: 4px; flex: 1; }
  .mo-was { font-size: 12px; color: rgba(255,255,255,0.7); text-decoration: line-through; margin-right: 6px; }
  .mo-pct {
    font-size: 10px;
    font-weight: 700;
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.85);
    margin-bottom: 3px;
  }
  .save-num {
    font-size: 26px;
    font-weight: 900;
    color: var(--ivory);
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .save-unit { font-size: 12px; color: rgba(255,255,255,0.9); margin-left: 3px; }
  .spots { font-size: 11px; color: rgba(255,255,255,0.7); }

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

  .btn-cream {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #E1D6C8;
    color: #180800;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 13px 36px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
  }
  .btn-cream:hover { opacity: 0.9; transform: translateY(-1px); }

  .timetable-bar {
    display: block;
    margin-top: 18px;
    background: #E1D6C8;
    color: #180800;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    padding: 13px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
  }
  .timetable-bar:hover { opacity: 0.9; transform: translateY(-1px); }

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
    color: rgba(255,255,255,0.85);
    margin: 14px 0 2px;
  }
  .pk-row { display: flex; align-items: baseline; gap: 2px; }
  .pk-sym { font-size: 15px; font-weight: 700; color: #f0e6d6; line-height: 1; }
  .pk-num { font-size: 44px; font-weight: 900; color: #f0e6d6; letter-spacing: -0.03em; line-height: 1; }
  .pk-unit { font-size: 12px; color: rgba(255,255,255,0.85); align-self: flex-end; padding-bottom: 5px; margin-left: 3px; }
  .pk-total { font-size: 12px; color: rgba(255,255,255,0.85); margin-top: 3px; margin-bottom: 4px; }
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
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.85);
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
    color: rgba(255,255,255,0.9);
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
    color: rgba(255,255,255,0.8);
    line-height: 1.8;
    max-width: 500px;
  }
  .footer-brand {
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
    white-space: nowrap;
  }
  .footer-tagline {
    font-size: 10px;
    font-weight: 300;
    font-style: italic;
    color: rgba(255,255,255,0.8);
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

    .pp-scope .row-unit-g { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.85); }


    
    .pp-scope .badge { position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 14px; border-radius: 0 0 5px 5px; white-space: nowrap; font-weight: 700; }


    
    .pp-scope .cta-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 1.25rem; margin-bottom: 4.5rem; }


    
    .pp-scope .section { margin-bottom: 1rem; }


    
    .pp-scope .dropin-section { background: transparent; border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); border-radius: 0; overflow: hidden; margin-bottom: 4.5rem; }

    .pp-scope .dropin-header { padding: 2.5rem 2.5rem 1.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); }

    .pp-scope .dropin-headline { font-size: 32px; font-weight: 900; color: #f0e6d6; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.1; margin-bottom: 0.75rem; }

    .pp-scope .dropin-strapline { font-size: 14px; color: rgba(255,255,255,0.85); font-style: italic; letter-spacing: 0.01em; }

    .pp-scope .dropin-body { display: grid; grid-template-columns: 1fr 300px; }

    .pp-scope .dropin-left { padding: 2rem 2.5rem; border-right: 1px solid rgba(255,255,255,0.08); }

    .pp-scope .dropin-desc { font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 1.5rem; max-width: 520px; }

    .pp-scope .dropin-bullets { list-style: none; display: flex; flex-direction: column; gap: 0; }

    .pp-scope .dropin-bullet { display: flex; align-items: center; gap: 12px; font-size: 12px; color: rgba(255,255,255,0.45); padding: 9px 0; border-top: 1px solid rgba(255,255,255,0.06); }

    .pp-scope .dropin-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }

    .pp-scope .dropin-bullet::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.25); flex-shrink: 0; }

    .pp-scope .dropin-right { padding: 2rem 2rem; display: flex; flex-direction: column; justify-content: space-between; }

    .pp-scope .dropin-price-block {  }

    .pp-scope .dropin-rate-label { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); font-weight: 700; margin-bottom: 4px; }

    .pp-scope .dropin-big-price { font-size: 72px; font-weight: 900; color: #f0e6d6; letter-spacing: -4px; line-height: 1; }

    .pp-scope .dropin-big-unit { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.85); letter-spacing: 0; }

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

const PRICING_BODY_HEAD = `<nav class="rn-nav">
  <a href="/" class="nav-logo" aria-label="Renegade Reformer home">
    <img src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" alt="Renegade Reformer eagle logo, reformer Pilates Bristol" />
  </a>
  <ul class="nav-links">
    <li><a href="/reformer-signup">Early Access</a></li>
    <li><a href="/reformerpilates.html">Reformer Pilates</a></li>
    <li><a href="/reformerpilates.html#journey">Classes</a></li>
    <li><a href="/pricing">Pricing</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <ul>
    <li><a href="/reformer-signup">Early Access</a></li>
    <li><a href="/reformerpilates.html">Reformer Pilates</a></li>
    <li><a href="/reformerpilates.html#journey">Classes</a></li>
    <li><a href="/pricing">Pricing</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>
<div class="page">

  <header class="header" style="display:flex;align-items:center;justify-content:space-between;gap:32px;">
    <div style="flex:1;min-width:0;">
      <h1 class="page-title">JOIN<br>THE<br>RENEGADE.</h1>
      <p class="header-sub">Reform · Repower · Recover</p>
      <p class="header-note">Choose the way you move. From flexible class packs to monthly memberships, every option is built to help you find your rhythm, stay consistent and make Renegade part of your routine.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <span onclick="const el=document.getElementById('drop-in');const top=el.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top,behavior:'smooth'})" style="border:1px solid rgba(255,255,255,0.85);background:transparent;color:#ffffff;font-size:12px;font-weight:600;padding:13px 28px;border-radius:8px;cursor:pointer;">Drop in<span style="font-size:10px;opacity:0.55;margin-left:5px;vertical-align:middle;">↓</span></span>
        <span onclick="const el=document.getElementById('memberships');const top=el.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top,behavior:'smooth'})" style="border:1px solid rgba(160,45,24,0.5);background:rgba(160,45,24,0.12);color:#f0e6d6;font-size:12px;font-weight:600;padding:13px 28px;border-radius:8px;cursor:pointer;">Become a member<span style="font-size:10px;opacity:0.55;margin-left:5px;vertical-align:middle;">↓</span></span>
        <span onclick="const el=document.getElementById('class-packs');const top=el.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top,behavior:'smooth'})" style="border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.75);font-size:12px;font-weight:600;padding:13px 28px;border-radius:8px;cursor:pointer;">Class packs<span style="font-size:10px;opacity:0.55;margin-left:5px;vertical-align:middle;">↓</span></span>
      </div>
      <a href="/timetable" class="timetable-bar">
        Timetable<span style="font-size:10px;opacity:0.55;margin-left:5px;vertical-align:middle;">↓</span>
      </a>
    </div>
    <div style="flex-shrink:0;width:220px;opacity:0.12;" aria-hidden="true">
      <img alt="Renegade Reformer wordmark, reformer Pilates Bristol" src="data:image/png;base64,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" alt="" style="width:100%;height:auto;opacity:0.85;">
    </div>
  </header>
`;

const PRICING_BODY_TAIL = `<div class="page" style="padding-top:0;padding-bottom:0;">
  <!-- FOUNDING PERKS BANNER -->
  <div class="perks-banner" style="margin-top: 4rem;">
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
          <p class="perk-title">Renegade tote bag*</p>
          <p class="perk-body">Complimentary branded tote on joining — *Elite membership only</p>
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
    <div style="display:flex;justify-content:center;margin-top:28px;">
      <a href="/timetable" class="btn-cream">
        View Timetable<span style="font-size:10px;opacity:0.55;margin-left:5px;vertical-align:middle;">↓</span>
      </a>
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
        <button class="btn-ghost" disabled style="opacity:0.5;cursor:not-allowed">Coming soon</button>
      </div>

      <div class="pack-card">
        <p class="pk-eyebrow" style="margin-top:0;">Class pack</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.55);font-weight:300;margin-bottom:14px;">Valid 3 months from first use</p>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px;">
          <span style="font-size:72px;font-weight:900;color:#f0e6d6;letter-spacing:-0.03em;line-height:1;">8</span>
          <span style="font-size:18px;font-weight:600;color:rgba(255,255,255,0.55);align-self:flex-end;padding-bottom:8px;">classes</span>
        </div>
        <button class="btn-ghost" disabled style="opacity:0.5;cursor:not-allowed">Coming soon</button>
      </div>

      <div class="pack-card">
        <p class="pk-eyebrow" style="margin-top:0;">Class pack</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.55);font-weight:300;margin-bottom:14px;">Valid 3 months from first use</p>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:4px;">
          <span style="font-size:72px;font-weight:900;color:#f0e6d6;letter-spacing:-0.03em;line-height:1;">12</span>
          <span style="font-size:18px;font-weight:600;color:rgba(255,255,255,0.55);align-self:flex-end;padding-bottom:8px;">classes</span>
        </div>
        <button class="btn-ghost" disabled style="opacity:0.5;cursor:not-allowed">Coming soon</button>
      </div>

    </div>
  </section>

  <div style="margin:1rem 0;">
    <button
      type="button"
      id="rr-toggle-notify"
      onclick="toggleNotifyRR()"
      aria-expanded="false"
      style="width:100%;display:flex;align-items:center;justify-content:space-between;background:transparent;border:1px solid rgba(240,230,214,0.3);border-radius:8px;padding:1.1rem 1.4rem;cursor:pointer;color:#f0e6d6;font-family:inherit;"
    >
      <span style="display:flex;align-items:center;gap:12px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:600;color:#f0e6d6;">
        <span aria-hidden="true" style="font-size:14px;opacity:0.85;">〰</span>
        Click here to be notified when live
      </span>
      <span id="rr-chevron-notify" aria-hidden="true" style="font-size:18px;color:#f0e6d6;display:inline-block;transition:transform 0.3s ease;transform:rotate(0deg);">›</span>
    </button>
    <div
      id="rr-panel-notify"
      style="overflow:hidden;max-height:0px;opacity:0;transition:max-height 0.5s ease, opacity 0.4s ease;"
    >
      <div style="padding:1.25rem 0 0;">
        <style>:root { --momenceColorBackground: #230e00; --momenceColorPrimary: 255, 255, 255; --momenceColorBlack: 255, 255, 255; }</style>
        <div id="momence-plugin-lead-form-notify"></div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <p>All memberships roll monthly after an initial 1-month term. Class packs are non-refundable and non-transferable. Founding member rates are strictly limited to 50 spots and locked in for life, your rate never increases as long as your membership remains active.</p>
    <div>
      <p class="footer-brand">Renegade.</p>
      <p class="footer-tagline">reform · repower · recover</p>
    </div>
  </footer>

</div>

`;


const Pricing = () => {
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const toggleAcc = (name: string) => setOpenAcc(prev => (prev === name ? null : name));
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadFormKey, setLeadFormKey] = useState(0);

  const toggleLeadForm = () => {
    setLeadOpen(prev => {
      const nextOpen = !prev;
      if (nextOpen) setLeadFormKey(key => key + 1);
      return nextOpen;
    });
  };

  useEffect(() => {
    const existing = document.getElementById('momence-plugin-lead-form-src');
    if (existing) existing.remove();
    if (!leadOpen) return;

    const container = document.getElementById('momence-plugin-lead-form');
    if (container) container.innerHTML = '';
    const s = document.createElement('script');
    s.async = true;
    s.type = 'module';
    s.id = 'momence-plugin-lead-form-src';
    s.setAttribute('host_id', '227483');
    s.setAttribute('fields', 'fullName,email,phoneNumber,aaawwee');
    s.setAttribute('token', 'zQ7OKzkB7l');
    s.setAttribute('country_code', 'gb');
    s.setAttribute('source_id', '216491');
    s.setAttribute('data-field-def', '{"fullName":{"type":"text","label":"Full name","required":true,"hidden":false},"email":{"type":"email","label":"Email","required":true},"phoneNumber":{"type":"phone-number","label":"Phone number","required":true},"aaawwee":{"type":"text","label":"How can we help?","required":true,"hidden":false}}');
    s.src = `https://momence.com/plugin/lead-form/lead-form.js?t=${Date.now()}`;
    if (container) container.appendChild(s);
  }, [leadOpen, leadFormKey]);

  useEffect(() => {
    const btn = document.getElementById('rr-toggle-notify');
    const panel = document.getElementById('rr-panel-notify');
    const chevron = document.getElementById('rr-chevron-notify');
    const container = document.getElementById('momence-plugin-lead-form-notify');
    if (!btn || !panel || !chevron || !container) return;

    let isOpen = false;

    const toggle = () => {
      isOpen = !isOpen;
      btn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        panel.style.maxHeight = '2000px';
        panel.style.opacity = '1';
        chevron.style.transform = 'rotate(90deg)';
        container.innerHTML = '';
        const s = document.createElement('script');
        s.async = true;
        s.type = 'module';
        s.id = 'momence-plugin-lead-form-src-notify';
        s.setAttribute('host_id', '227483');
        s.setAttribute('fields', 'fullName,email,phoneNumber,rrrrrrrr');
        s.setAttribute('token', 'zQ7OKzkB7l');
        s.setAttribute('country_code', 'gb');
        s.setAttribute('source_id', '216491');
        s.setAttribute('data-field-def', '{"fullName":{"type":"text","label":"Full name","required":true,"hidden":false},"email":{"type":"email","label":"Email","required":true},"phoneNumber":{"type":"phone-number","label":"Phone number","required":true},"rrrrrrrr":{"type":"text","label":"Any questions or just want to be kept in the loop?","required":false,"hidden":false,"placeholder":"Any questions or just want to be kept in the loop?"}}');
        s.src = `https://momence.com/plugin/lead-form/lead-form.js?t=${Date.now()}`;
        container.appendChild(s);
      } else {
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
        chevron.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          const existing = document.getElementById('momence-plugin-lead-form-src-notify');
          if (existing) existing.remove();
          container.innerHTML = '';
        }, 500);
      }
    };

    (window as any).toggleNotifyRR = toggle;

    return () => {
      delete (window as any).toggleNotifyRR;
    };
  }, []);

  useEffect(() => {
    const s = document.createElement('script');
    s.async = true;
    s.type = 'module';
    s.setAttribute('host-id', '227483');
    s.setAttribute('token', 'zQ7OKzkB7l');
    s.setAttribute('position', 'bottom-right');
    s.src = 'https://momence.com/plugin/webchat/webchat.js';
    s.id = 'momence-webchat-script';
    document.body.appendChild(s);
    return () => {
      const existing = document.getElementById('momence-webchat-script');
      if (existing) existing.remove();
    };
  }, []);

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

    return () => {
      window.removeEventListener('scroll', onScroll);
      toggle?.removeEventListener('click', onToggle);
      menu?.removeEventListener('click', onMenuLinkClick);
      document.removeEventListener('click', onAccClick);
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
      <div dangerouslySetInnerHTML={{ __html: PRICING_BODY_HEAD }} />
      <div className="page" style={{paddingTop:0,paddingBottom:0}}>
      <style>{`
  .rr-btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 600; width: 100%; font-family: inherit; }
  .rr-btn-solid { background: #a02d18; border: none; color: #fff; padding: 13px; border-radius: 6px; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; font-weight: 700; width: 100%; font-family: inherit; }

  .rr-banner { background: #f0e6d6; border-radius: 0; overflow: hidden; margin-bottom: 4.5rem; width: 100vw; position: relative; left: 50%; transform: translateX(-50%); min-height: 85vh; display: flex; align-items: center; }
  .rr-banner-inner { display: grid; grid-template-columns: 1fr auto; align-items: center; width: 100%; max-width: 1100px; margin: 0 auto; padding: 8rem 0; }
  .rr-banner-text { padding: 0 3rem 0 4rem; }
  .rr-banner-tag { display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }
  .rr-tag-brown { background: #7a4a28; color: #f5dfc5; font-size: 8px; font-weight: 700; letter-spacing: 0.15em; padding: 4px 12px; border-radius: 4px; text-transform: uppercase; }
  .rr-tag-muted { color: rgba(30,10,0,0.35); font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; }
  .rr-banner-heading { color: #1a0800; font-size: 52px; font-weight: 900; letter-spacing: -1px; margin-bottom: 1.25rem; line-height: 1.05; }
  .rr-banner-body { color: rgba(26,8,0,0.6); font-size: 15px; line-height: 1.8; margin-bottom: 1.5rem; max-width: 520px; }
  .rr-banner-body strong { color: #1a0800; font-weight: 700; }
  .rr-banner-tc { color: rgba(26,8,0,0.3); font-size: 12px; line-height: 1.7; max-width: 480px; }
  .rr-banner-prices { display: flex; gap: 1rem; padding: 0 4rem 0 3rem; flex-shrink: 0; }
  .rr-banner-price-col { background: rgba(26,8,0,0.06); border: 1px solid rgba(26,8,0,0.1); border-radius: 12px; padding: 2.5rem 2.25rem; display: flex; flex-direction: column; align-items: center; min-width: 180px; }
  .rr-banner-pill-label { color: rgba(26,8,0,0.4); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700; margin-bottom: 1rem; text-align: center; }
  .rr-banner-pill-price { color: #1a0800; font-size: 52px; font-weight: 900; letter-spacing: -3px; line-height: 1; }
  .rr-banner-pill-unit { font-size: 13px; font-weight: 400; color: rgba(26,8,0,0.4); margin-top: 6px; }
  @media (max-width: 700px) {
    .rr-banner-inner { grid-template-columns: 1fr; padding: 5rem 0; }
    .rr-banner-prices { padding: 2rem 4rem; flex-direction: column; }
    .rr-banner-price-col { width: 100%; }
  }

  .rr-section-heading { color: #f0e6d6; font-size: 32px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; margin-bottom: 2.5rem; line-height: 1.1; }

  .rr-dropin-section { background: transparent; border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); overflow: hidden; margin-bottom: 4.5rem; }
  .rr-dropin-header { padding: 2.5rem 2.5rem 1.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .rr-dropin-headline { font-size: 32px; font-weight: 900; color: #f0e6d6; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.1; margin-bottom: 0.75rem; }
  .rr-dropin-strapline { font-size: 14px; color: rgba(255,255,255,0.85); font-style: italic; letter-spacing: 0.01em; }
  .rr-dropin-body { display: grid; grid-template-columns: 1fr 300px; }
  .rr-dropin-left { padding: 2rem 2.5rem; border-right: 1px solid rgba(255,255,255,0.08); }
  .rr-dropin-desc { font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 1.5rem; max-width: 520px; }
  .rr-dropin-bullets { list-style: none; display: flex; flex-direction: column; gap: 0; padding: 0; }
  .rr-dropin-bullet { display: flex; align-items: center; gap: 12px; font-size: 12px; color: rgba(255,255,255,0.9); padding: 9px 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .rr-dropin-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }
  .rr-dropin-bullet::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.6); flex-shrink: 0; }
  .rr-dropin-right { padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; }
  .rr-dropin-rate-label { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.85); font-weight: 700; margin-bottom: 4px; }
  .rr-dropin-big-price { font-size: 72px; font-weight: 900; color: #f0e6d6; letter-spacing: -4px; line-height: 1; }
  .rr-dropin-big-unit { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.85); letter-spacing: 0; }
  .rr-dropin-standard { font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 8px; text-decoration: line-through; }
  @media (max-width: 700px) {
    .rr-dropin-body { grid-template-columns: 1fr; }
    .rr-dropin-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .rr-dropin-right { padding: 1.5rem 2rem; }
  }

  .rr-accordion { border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); margin-bottom: 1.5rem; }
  .rr-acc-item { border-bottom: 1px solid rgba(255,255,255,0.08); transition: background 0.25s; }
  .rr-acc-item:last-child { border-bottom: none; }
  .rr-acc-item.open { background: rgba(160,80,30,0.07); }
  .rr-acc-header { display: flex; align-items: center; justify-content: space-between; padding: 1.6rem 1.75rem; cursor: pointer; user-select: none; }
  .rr-acc-header:hover { background: rgba(255,255,255,0.02); }
  .rr-acc-left { display: flex; flex-direction: column; gap: 5px; }
  .rr-acc-eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(210,110,60,1); font-weight: 700; transition: color 0.2s; }
  .rr-acc-item.open .rr-acc-eyebrow { color: #d4603f; }
  .rr-acc-name { font-size: 30px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; line-height: 1; }
  .rr-acc-right { display: flex; align-items: center; gap: 1.5rem; }
  .rr-acc-price-collapsed { text-align: right; }
  .rr-acc-price-big { font-size: 30px; font-weight: 900; color: #f0e6d6; letter-spacing: -1px; line-height: 1; }
  .rr-acc-price-big span { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.9); }
  .rr-acc-price-sub { font-size: 10px; color: rgba(255,255,255,0.9); margin-top: 3px; text-align: right; }
  .rr-acc-chevron { width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; flex-shrink: 0; transition: transform 0.25s, border-color 0.2s; }
  .rr-acc-chevron svg { width: 10px; height: 10px; stroke: rgba(255,255,255,0.85); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.2s; }
  .rr-acc-item.open .rr-acc-chevron { border-color: rgba(255,255,255,0.3); transform: rotate(180deg); }
  .rr-acc-item.open .rr-acc-chevron svg { stroke: rgba(255,255,255,1); }
  .rr-acc-body { display: none; padding: 0.25rem 1.75rem 2rem; }
  .rr-acc-item.open .rr-acc-body { display: block; }
  .rr-acc-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: start; }
  .rr-acc-features { list-style: none; display: flex; flex-direction: column; gap: 0; padding: 0; }
  .rr-acc-feat { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .rr-acc-feat:last-child { border-bottom: none; }
  .rr-acc-feat-icon { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 6px; }
  .rr-acc-feat-icon svg { width: 14px; height: 14px; stroke: rgba(210,160,120,0.8); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .rr-acc-feat-text { font-size: 12px; color: rgba(255,255,255,0.9); line-height: 1.4; }
  .rr-acc-feat-text strong { color: #f0e6d6; font-weight: 600; }
  .rr-acc-pricing-right { display: flex; flex-direction: column; }
  .rr-acc-badge-wrap { margin-bottom: 1rem; }
  .rr-acc-badge { display: inline-block; background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 12px; border-radius: 3px; font-weight: 700; }
  .rr-acc-per-class-box { border: 1px solid rgba(255,255,255,0.2); border-radius: 7px; padding: 14px 16px; margin-bottom: 7px; display: flex; align-items: center; justify-content: space-between; }
  .rr-acc-per-class-label { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.9); }
  .rr-acc-per-class-num { font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -1px; }
  .rr-price-row { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 56px; border-radius: 7px; margin-bottom: 7px; }
  .rr-price-row.founders { background: rgba(160,45,24,0.2); border: 1px solid rgba(160,45,24,0.35); }
  .rr-price-row.general { border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }
  .rr-row-label-f { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,200,180,0.6); flex-shrink: 1; min-width: 0; }
  .rr-row-label-g { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); flex-shrink: 1; min-width: 0; }
  .rr-row-price-f { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: #f0e6d6; white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
  .rr-row-price-g { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: rgba(255,255,255,0.7); white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
  .rr-row-unit-f { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.8); }
  .rr-row-unit-g { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.85); }
  @media (max-width: 700px) {
    .rr-acc-inner { grid-template-columns: 1fr; gap: 1.5rem; }
    .rr-acc-name { font-size: 24px; }
    .rr-acc-price-big { font-size: 24px; }
  }

  .rr-intro-section { margin-top: 4rem; }
  .rr-intro-inner { border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem; display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 3rem; align-items: center; }
  .rr-intro-tag { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.85); margin-bottom: 8px; }
  .rr-intro-title { font-size: 28px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; margin-bottom: 6px; }
  .rr-intro-sub { font-size: 12px; color: rgba(255,255,255,0.9); margin-bottom: 1.25rem; }
  .rr-intro-prices { display: flex; gap: 1.5rem; align-items: baseline; margin-bottom: 1.25rem; }
  .rr-intro-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
  @media (max-width: 700px) {
    .rr-intro-inner { grid-template-columns: 1fr; }
    .rr-intro-right { align-items: flex-start; }
  }
`}</style>

{/* FOUNDING RATE BANNER */}
<div className="rr-banner">
  <div className="rr-banner-inner">
    <div className="rr-banner-text">
      <div className="rr-banner-tag">
        <span className="rr-tag-brown">Ends 31 July</span>
        <span className="rr-tag-muted">Founding rates</span>
      </div>
      <p className="rr-banner-heading">FOUNDING RATES.</p>
      <p className="rr-banner-body">Founding memberships lock in your rate <strong>for life.</strong> Join now and this price is yours for as long as you stay a member.<sup style={{fontSize:'9px',color:'rgba(26,8,0,0.3)'}}>*</sup></p>
      <p className="rr-banner-tc">* Founding membership rate is locked for the duration of your active membership. Standard membership terms and cancellation policy applies.</p>
    </div>
    <div className="rr-banner-prices">
      <div className="rr-banner-price-col">
        <p className="rr-banner-pill-label">Founding drop-in</p>
        <p className="rr-banner-pill-price">£20</p>
        <p className="rr-banner-pill-unit">/class</p>
      </div>
      <div className="rr-banner-price-col">
        <p className="rr-banner-pill-label">INTRO PACK</p>
        <p className="rr-banner-pill-price">£48</p>
        <p className="rr-banner-pill-unit">3 classes</p>
      </div>
    </div>
  </div>
</div>

{/* DROP-IN */}
<div className="rr-dropin-section" id="drop-in">
  <div className="rr-dropin-header">
    <p className="rr-dropin-headline">Drop in.</p>
    <p className="rr-dropin-strapline">No membership. Experience Renegade with no commitment.</p>
  </div>
  <div className="rr-dropin-body">
    <div className="rr-dropin-left">
      <p className="rr-dropin-desc">New to Reformer, curious about Renegade, or not ready to commit yet? Book a single class and experience the studio on your own terms.<br /><br />Early access founding rate available for a limited time as we open the doors.</p>
      <ul className="rr-dropin-bullets">
        <li className="rr-dropin-bullet">All levels welcome, including complete beginners</li>
        <li className="rr-dropin-bullet">Book any reformer class with available spaces</li>
        <li className="rr-dropin-bullet">Free cancellation up to 12 hours before class</li>
      </ul>
    </div>
    <div className="rr-dropin-right">
      <div>
        <p className="rr-dropin-rate-label">Founding rate</p>
        <p className="rr-dropin-big-price">£20<span className="rr-dropin-big-unit"> /class</span></p>
        <p className="rr-dropin-standard" style={{textDecoration:'none',color:'rgba(255,255,255,0.5)',fontSize:'14px'}}>£25 from 13.07</p>
      </div>
      <button className="rr-btn-ghost" onClick={() => window.open('https://momence.com/u/renegade-reformer-ltd-74tF03', '_blank')}>Book a class</button>
    </div>
  </div>
</div>

{/* INTRO PACK */}
<div className="rr-intro-section" style={{ marginBottom: '4rem' }}>
  <div className="rr-intro-inner">
    <div>
      <p className="rr-intro-tag">New clients only · valid 30 days</p>
      <p className="rr-intro-title">Intro pack</p>
      <p className="rr-intro-sub">3 classes to find your feet. The best way to try Renegade properly before committing to a membership.</p>
      <div className="rr-intro-prices">
        <span style={{color:'#f0e6d6',fontWeight:700,fontSize:'15px'}}>£48 <span style={{fontWeight:400,fontSize:'12px',color:'rgba(255,255,255,0.5)'}}>founding rate</span></span>
        <span style={{color:'rgba(255,255,255,0.55)',fontSize:'14px'}}>£55 <span style={{color:'rgba(255,255,255,0.55)',fontSize:'12px'}}>from 13.07</span></span>
      </div>
      <ul className="rr-dropin-bullets">
        <li className="rr-dropin-bullet" style={{color:'rgba(255,255,255,0.45)'}}>£16 per class at founding rate (£18.33 standard)</li>
        <li className="rr-dropin-bullet" style={{color:'rgba(255,255,255,0.45)'}}>Use across any 3 classes in the schedule</li>
        <li className="rr-dropin-bullet" style={{color:'rgba(255,255,255,0.45)'}}>All levels welcome — great for complete beginners</li>
      </ul>
    </div>
    <div className="rr-intro-right">
      <div style={{textAlign:'right'}}>
        <p style={{fontSize:'9px',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',fontWeight:600,marginBottom:'4px'}}>3 classes</p>
        <p style={{fontSize:'52px',fontWeight:900,color:'#f0e6d6',letterSpacing:'-3px',lineHeight:1}}>£48</p>
        <p style={{fontSize:'11px',color:'rgba(255,255,255,0.55)',marginTop:'4px'}}>£55 from 13.07</p>
      </div>
      <button className="rr-btn-ghost" style={{width:'auto',padding:'13px 28px'}} onClick={() => window.open('https://momence.com/Renegade-Reformer/membership/Intro-Offer---Class-Pack/763559', '_blank')}>Book intro pack</button>
    </div>
  </div>
</div>

{/* MONTHLY MEMBERSHIPS */}
<div id="memberships" style={{marginTop:'4.5rem',marginBottom:'1rem'}}>
  <p className="rr-section-heading">Monthly memberships.</p>

  <div className="rr-accordion">

    {/* CORE */}
    <div className={`rr-acc-item${openAcc === 'core' ? ' open' : ''}`}>
      <div className="rr-acc-header" onClick={() => toggleAcc('core')}>
        <div className="rr-acc-left">
          <span className="rr-acc-eyebrow">4 classes / month</span>
          <span className="rr-acc-name">Core</span>
        </div>
        <div className="rr-acc-right">
          <div className="rr-acc-price-collapsed">
            <div className="rr-acc-price-big">£72 <span>/month</span></div>
            <div className="rr-acc-price-sub">£18 per class</div>
          </div>
          <div className="rr-acc-chevron"><svg viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg></div>
        </div>
      </div>
      <div className="rr-acc-body">
        <div className="rr-acc-inner">
          <ul className="rr-acc-features">
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding rate locked for life</strong> — your price never increases*</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>4 classes per month</strong>, credits roll over monthly</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <span className="rr-acc-feat-text"><strong>1 guest pass</strong> per month</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Early booking</strong> — 1 week ahead of non-members</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <span className="rr-acc-feat-text">Rolls monthly — <strong>no lock-in</strong> after first term</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding welcome gift</strong> — branded socks</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£18</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Rate · First 50 Members</span>
              <span className="rr-row-price-f">£72<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Non-founders rate</span>
              <span className="rr-row-price-g">£85<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-ghost" style={{cursor:'pointer'}} onClick={() => window.open('https://momence.com/m/811786', '_blank')}>Get founding rate</button>
          </div>
        </div>
      </div>
    </div>

    {/* PRO */}
    <div className={`rr-acc-item${openAcc === 'pro' ? ' open' : ''}`}>
      <div className="rr-acc-header" onClick={() => toggleAcc('pro')}>
        <div className="rr-acc-left">
          <span className="rr-acc-eyebrow">8 classes / month</span>
          <span className="rr-acc-name">Pro</span>
        </div>
        <div className="rr-acc-right">
          <div className="rr-acc-price-collapsed">
            <div className="rr-acc-price-big">£128 <span>/month</span></div>
            <div className="rr-acc-price-sub">£16 per class</div>
          </div>
          <div className="rr-acc-chevron"><svg viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg></div>
        </div>
      </div>
      <div className="rr-acc-body">
        <div className="rr-acc-badge-wrap">
          <span className="rr-acc-badge">Renegade Recommended</span>
        </div>
        <div className="rr-acc-inner">
          <ul className="rr-acc-features">
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding rate locked for life</strong> — your price never increases*</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>8 classes per month</strong>, credits roll over monthly</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <span className="rr-acc-feat-text"><strong>1 guest pass</strong> per month</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Early booking</strong> — 1 week ahead of non-members</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Priority event booking</strong> — first access to all events</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding welcome gift</strong> — branded socks</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£16</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Rate · First 50 Members</span>
              <span className="rr-row-price-f">£128<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Non-founders rate</span>
              <span className="rr-row-price-g">£150<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-solid" onClick={() => window.open('https://momence.com/m/812640', '_blank')}>Get founding rate</button>
          </div>
        </div>
      </div>
    </div>

    {/* ELITE */}
    <div className={`rr-acc-item${openAcc === 'elite' ? ' open' : ''}`}>
      <div className="rr-acc-header" onClick={() => toggleAcc('elite')}>
        <div className="rr-acc-left">
          <span className="rr-acc-eyebrow">12 classes / month</span>
          <span className="rr-acc-name">Elite</span>
        </div>
        <div className="rr-acc-right">
          <div className="rr-acc-price-collapsed">
            <div className="rr-acc-price-big">£168 <span>/month</span></div>
            <div className="rr-acc-price-sub">£14 per class</div>
          </div>
          <div className="rr-acc-chevron"><svg viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg></div>
        </div>
      </div>
      <div className="rr-acc-body">
        <div className="rr-acc-inner">
          <ul className="rr-acc-features">
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding rate locked for life</strong> — your price never increases*</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
              <span className="rr-acc-feat-text"><strong>12 classes per month</strong>, credits roll over monthly</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <span className="rr-acc-feat-text"><strong>1 guest pass</strong> per month</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Priority event booking</strong> — first access to all events</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Early booking</strong> — 1 week ahead of non-members</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><text x="12" y="17" textAnchor="middle" fontSize="15" fontFamily="Georgia,serif" fill="rgba(210,160,120,0.8)" stroke="none">£</text></svg></div>
              <span className="rr-acc-feat-text"><strong>Best value</strong> — lowest per-class price of any tier</span>
            </li>
            <li className="rr-acc-feat">
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Founding welcome gift</strong> — branded socks & tote</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£14</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Rate · First 50 Members</span>
              <span className="rr-row-price-f">£168<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Non-founders rate</span>
              <span className="rr-row-price-g">£195<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-ghost" onClick={() => window.open('https://momence.com/m/812642', '_blank')}>Get founding rate</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

{/* LEAD CAPTURE ROW */}
<div style={{margin:'3rem 0'}}>
  <button
    type="button"
    onClick={toggleLeadForm}
    aria-expanded={leadOpen}
    style={{
      width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
      background:'transparent', border:'1px solid rgba(240,230,214,0.3)', borderRadius:8,
      padding:'1.1rem 1.4rem', cursor:'pointer', color:'#f0e6d6', fontFamily:'inherit'
    }}
  >
    <span style={{display:'flex',alignItems:'center',gap:12,fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase',fontWeight:600,color:'#f0e6d6'}}>
      <span aria-hidden="true" style={{fontSize:14,opacity:0.85}}>〰</span>
      Want to talk it through first?
    </span>
    <span aria-hidden="true" style={{fontSize:18,color:'#f0e6d6',display:'inline-block',transition:'transform 0.3s ease',transform:leadOpen?'rotate(90deg)':'rotate(0deg)'}}>›</span>
  </button>
  <div
    style={{
      overflow:'hidden',
      maxHeight: leadOpen ? '2000px' : '0px',
      opacity: leadOpen ? 1 : 0,
      transition:'max-height 0.5s ease, opacity 0.4s ease',
    }}
  >
    <div style={{padding:'1.25rem 0 0'}}>
      <style>{`:root { --momenceColorBackground: #230e00; --momenceColorPrimary: 255, 255, 255; --momenceColorBlack: 255, 255, 255; }`}</style>
      {leadOpen && <div key={leadFormKey} id="momence-plugin-lead-form"></div>}
    </div>
  </div>
</div>

      </div>
      <div dangerouslySetInnerHTML={{ __html: PRICING_BODY_TAIL }} />
    </>
  );
};

export default Pricing;
