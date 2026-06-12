import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";



const PRICING_PERKS = `<div class="page" style="padding-top:0;padding-bottom:0;">
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
  </div></div>`;

const PRICING_BODY_TAIL = `<div class="page" style="padding-top:0;padding-bottom:0;">

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


const Pricing = () => {
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const toggleAcc = (name: string) => setOpenAcc(prev => (prev === name ? null : name));
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
  .rr-dropin-strapline { font-size: 14px; color: rgba(255,255,255,0.4); font-style: italic; letter-spacing: 0.01em; }
  .rr-dropin-body { display: grid; grid-template-columns: 1fr 300px; }
  .rr-dropin-left { padding: 2rem 2.5rem; border-right: 1px solid rgba(255,255,255,0.08); }
  .rr-dropin-desc { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 1.5rem; max-width: 520px; }
  .rr-dropin-bullets { list-style: none; display: flex; flex-direction: column; gap: 0; padding: 0; }
  .rr-dropin-bullet { display: flex; align-items: center; gap: 12px; font-size: 12px; color: rgba(255,255,255,0.45); padding: 9px 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .rr-dropin-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }
  .rr-dropin-bullet::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.25); flex-shrink: 0; }
  .rr-dropin-right { padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; }
  .rr-dropin-rate-label { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); font-weight: 700; margin-bottom: 4px; }
  .rr-dropin-big-price { font-size: 72px; font-weight: 900; color: #f0e6d6; letter-spacing: -4px; line-height: 1; }
  .rr-dropin-big-unit { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.4); letter-spacing: 0; }
  .rr-dropin-standard { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 8px; text-decoration: line-through; }
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
  .rr-acc-eyebrow { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(180,80,40,0.7); font-weight: 700; transition: color 0.2s; }
  .rr-acc-item.open .rr-acc-eyebrow { color: #d4603f; }
  .rr-acc-name { font-size: 30px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; line-height: 1; }
  .rr-acc-right { display: flex; align-items: center; gap: 1.5rem; }
  .rr-acc-price-collapsed { text-align: right; }
  .rr-acc-price-big { font-size: 30px; font-weight: 900; color: #f0e6d6; letter-spacing: -1px; line-height: 1; }
  .rr-acc-price-big span { font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.35); }
  .rr-acc-price-sub { font-size: 10px; color: rgba(255,255,255,0.28); margin-top: 3px; text-align: right; }
  .rr-acc-chevron { width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; flex-shrink: 0; transition: transform 0.25s, border-color 0.2s; }
  .rr-acc-chevron svg { width: 10px; height: 10px; stroke: rgba(255,255,255,0.4); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.2s; }
  .rr-acc-item.open .rr-acc-chevron { border-color: rgba(255,255,255,0.3); transform: rotate(180deg); }
  .rr-acc-item.open .rr-acc-chevron svg { stroke: rgba(255,255,255,0.7); }
  .rr-acc-body { display: none; padding: 0.25rem 1.75rem 2rem; }
  .rr-acc-item.open .rr-acc-body { display: block; }
  .rr-acc-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: start; }
  .rr-acc-features { list-style: none; display: flex; flex-direction: column; gap: 0; padding: 0; }
  .rr-acc-feat { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .rr-acc-feat:last-child { border-bottom: none; }
  .rr-acc-feat-icon { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 6px; }
  .rr-acc-feat-icon svg { width: 14px; height: 14px; stroke: rgba(210,160,120,0.8); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .rr-acc-feat-text { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.4; }
  .rr-acc-feat-text strong { color: #f0e6d6; font-weight: 600; }
  .rr-acc-pricing-right { display: flex; flex-direction: column; }
  .rr-acc-badge-wrap { margin-bottom: 1rem; }
  .rr-acc-badge { display: inline-block; background: #8B5E3C; color: #f5dfc5; font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; padding: 3px 12px; border-radius: 3px; font-weight: 700; }
  .rr-acc-per-class-box { border: 1px solid rgba(255,255,255,0.2); border-radius: 7px; padding: 14px 16px; margin-bottom: 7px; display: flex; align-items: center; justify-content: space-between; }
  .rr-acc-per-class-label { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); }
  .rr-acc-per-class-num { font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -1px; }
  .rr-price-row { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 56px; border-radius: 7px; margin-bottom: 7px; }
  .rr-price-row.founders { background: rgba(160,45,24,0.2); border: 1px solid rgba(160,45,24,0.35); }
  .rr-price-row.general { border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }
  .rr-row-label-f { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,200,180,0.6); flex-shrink: 1; min-width: 0; }
  .rr-row-label-g { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.7); flex-shrink: 1; min-width: 0; }
  .rr-row-price-f { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: #f0e6d6; white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
  .rr-row-price-g { font-size: 22px; font-weight: 900; letter-spacing: -1px; color: rgba(255,255,255,0.7); white-space: nowrap; flex-shrink: 0; margin-left: 8px; }
  .rr-row-unit-f { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.35); }
  .rr-row-unit-g { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); }
  @media (max-width: 700px) {
    .rr-acc-inner { grid-template-columns: 1fr; gap: 1.5rem; }
    .rr-acc-name { font-size: 24px; }
    .rr-acc-price-big { font-size: 24px; }
  }

  .rr-intro-section { margin-top: 4rem; }
  .rr-intro-inner { border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem; display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 3rem; align-items: center; }
  .rr-intro-tag { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.3); margin-bottom: 8px; }
  .rr-intro-title { font-size: 28px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; color: #f0e6d6; margin-bottom: 6px; }
  .rr-intro-sub { font-size: 12px; color: rgba(255,255,255,0.45); margin-bottom: 1.25rem; }
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
        <p className="rr-banner-pill-label">Memberships from</p>
        <p className="rr-banner-pill-price">£14</p>
        <p className="rr-banner-pill-unit">/class</p>
      </div>
    </div>
  </div>
</div>

{/* DROP-IN */}
<div className="rr-dropin-section">
  <div className="rr-dropin-header">
    <p className="rr-dropin-headline">Drop-in.</p>
    <p className="rr-dropin-strapline">No membership. Experience Renegade with no commitment.</p>
  </div>
  <div className="rr-dropin-body">
    <div className="rr-dropin-left">
      <p className="rr-dropin-desc">New to Reformer, curious about Renegade, or not ready to commit yet? Book a single class and experience the studio on your own terms.<br /><br />Early access founding rate available for a limited time as we open the doors.</p>
      <ul className="rr-dropin-bullets">
        <li className="rr-dropin-bullet">All levels welcome, including complete beginners</li>
        <li className="rr-dropin-bullet">Book any eligible class with available spaces</li>
        <li className="rr-dropin-bullet">Free cancellation up to 24 hours before class</li>
      </ul>
    </div>
    <div className="rr-dropin-right">
      <div>
        <p className="rr-dropin-rate-label">Founding rate</p>
        <p className="rr-dropin-big-price">£20<span className="rr-dropin-big-unit"> /class</span></p>
        <p className="rr-dropin-standard">£25 standard rate</p>
      </div>
      <button className="rr-btn-ghost">Book a class</button>
    </div>
  </div>
</div>

{/* MONTHLY MEMBERSHIPS */}
<div style={{marginTop:'4.5rem',marginBottom:'1rem'}}>
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
              <span className="rr-acc-feat-text"><strong>Founding welcome gift</strong> — branded socks &amp; tote</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£18</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Discount</span>
              <span className="rr-row-price-f">£72<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Standard Rate</span>
              <span className="rr-row-price-g">£85<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-ghost">Get founding rate</button>
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
              <span className="rr-acc-feat-text"><strong>Founding welcome gift</strong> — branded socks &amp; tote</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£16</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Discount</span>
              <span className="rr-row-price-f">£128<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Standard Rate</span>
              <span className="rr-row-price-g">£150<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-solid">Get founding rate</button>
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
              <div className="rr-acc-feat-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <span className="rr-acc-feat-text"><strong>Best value</strong> — lowest per-class price of any tier</span>
            </li>
          </ul>
          <div className="rr-acc-pricing-right">
            <div className="rr-acc-per-class-box">
              <span className="rr-acc-per-class-label">Per class</span>
              <span className="rr-acc-per-class-num">£14</span>
            </div>
            <div className="rr-price-row founders" style={{marginBottom:'7px'}}>
              <span className="rr-row-label-f">Founders Discount</span>
              <span className="rr-row-price-f">£168<span className="rr-row-unit-f"> /mo</span></span>
            </div>
            <div className="rr-price-row general" style={{marginBottom:'1.25rem'}}>
              <span className="rr-row-label-g">Standard Rate</span>
              <span className="rr-row-price-g">£195<span className="rr-row-unit-g"> /mo</span></span>
            </div>
            <button className="rr-btn-ghost">Get founding rate</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

      </div>
      <div dangerouslySetInnerHTML={ { __html: PRICING_PERKS } } />
      <div dangerouslySetInnerHTML={ { __html: PRICING_BODY_TAIL } } />
    </>
  );
};

export default Pricing;
