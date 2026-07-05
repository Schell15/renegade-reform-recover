import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Star, MapPin, Clock, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

const gold = "#C49A4A";
const cream = "#E1D6C8";
const mutedCream = "rgba(225,214,200,0.62)";
const border = "rgba(225,214,200,0.14)";
const cardBg = "rgba(255,255,255,0.03)";
const heroBg =
  "radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)";
const nightBg = "#050200";

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  color: gold,
};

const sectionLabelStyle: React.CSSProperties = {
  ...eyebrowStyle,
  color: mutedCream,
  fontSize: 10,
  letterSpacing: "0.36em",
};

const btnSolid: React.CSSProperties = {
  display: "inline-block",
  background: cream,
  color: "#180800",
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  padding: "14px 30px",
  textDecoration: "none",
  border: "1px solid " + cream,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  ...btnSolid,
  background: "transparent",
  color: cream,
};

const btnGold: React.CSSProperties = {
  ...btnSolid,
  background: "transparent",
  color: gold,
  border: "1px solid " + gold,
};

const classes = [
  {
    name: "Foundations",
    desc: "A slower, technique-led class focused on breath, alignment, and building a confident base on the reformer. Ideal for first-timers and anyone returning after a break.",
  },
  {
    name: "Renegade",
    desc: "Our signature strength-and-flow class. Powerful, rhythmic and set to a tuned soundtrack. Reformer training with the intensity dial turned up.",
  },
  {
    name: "Rebuild",
    desc: "A restorative, mobility-focused reformer session. Slower tempo, longer holds, deep stretch. Built to undo the week and put your body back together.",
  },
];

const prices = [
  {
    name: "Drop In",
    price: "£22",
    unit: "per class",
    perks: ["Single 50-min class", "Any class, any level", "No commitment"],
    href: "/pricing",
    featured: false,
  },
  {
    name: "Intro Pack",
    price: "£55",
    unit: "3 classes, new members",
    perks: ["Use within 21 days", "Try every class type", "Best way to start"],
    href: "/pricing",
    featured: true,
  },
  {
    name: "Founding Membership",
    price: "£99",
    unit: "per month, unlimited",
    perks: [
      "Unlimited reformer classes",
      "Rate locked for life",
      "Limited to first 50 members",
    ],
    href: "/pricing",
    featured: false,
  },
];

const reviews = [
  {
    text:
      "This is the best studio I have been to. Every tiny detail has been thought of in the space and the beds are incredible quality. Dani is really welcoming and gives so much detail and support when teaching.",
    who: "Sophie M.",
  },
  {
    text:
      "Just want to say a massive thank you to Dani for my first session Monday morning, she made everyone feel super comfortable and personally greeted everyone as they came in, offering to go through the carriage and checking for injuries etc which is something I've not had at another place.",
    who: "Rhian G.",
  },
];

const faqs = [
  "Do I need experience to try reformer pilates?",
  "What should I wear and bring?",
  "How often should I train on the reformer?",
  "Is reformer pilates suitable if I'm injured or pregnant?",
];

const guides = [
  { title: "What is reformer pilates?", href: "/journal-what-is-reformer-pilates.html" },
  { title: "Your first reformer class in Bristol", href: "/journal-first-reformer-class-bristol.html" },
  { title: "Reformer vs mat pilates", href: "/journal-reformer-vs-mat-pilates.html" },
  { title: "How often should you do reformer?", href: "/journal-how-often-reformer-pilates.html" },
];

const NavLinkA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: cream,
      textDecoration: "none",
      opacity: 0.85,
    }}
  >
    {children}
  </a>
);

const HeroLockup = () => (
  <div style={{ display: "inline-block", textAlign: "right", marginBottom: 26 }}>
    <img
      src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png"
      alt="Renegade Reformer eagle logo"
      style={{ width: 64, height: 64, objectFit: "contain", display: "block", margin: "0 auto 10px" }}
    />
    <div
      className="font-neogrotesk font-bold text-primary"
      style={{ fontSize: "clamp(34px, 5vw, 50px)", letterSpacing: "0.01em", lineHeight: 0.95 }}
    >
      RENEGADE.
    </div>
    <div
      className="font-bigcaslon"
      style={{ fontSize: "clamp(20px, 2.6vw, 28px)", color: gold, lineHeight: 1, marginTop: 4 }}
    >
      reformer
    </div>
  </div>
);

const Home = () => {
  return (
    <div style={{ background: heroBg, minHeight: "100vh", color: cream }}>
      <SEO
        title="Reformer Pilates in Redfield, Bristol | Renegade Reformer"
        description="Renegade Reformer is a strength-led reformer Pilates studio in Redfield, Bristol. Now open, founding member rates live. Book your first class today."
        path="/"
      />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          backdropFilter: "blur(10px)",
          background: "rgba(13,4,0,0.72)",
          borderBottom: "1px solid " + border,
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" aria-label="Renegade Reformer home">
            <img
              src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png"
              alt="Renegade Reformer eagle logo"
              className="w-11 h-11 object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLinkA href="#classes">Classes</NavLinkA>
            <NavLinkA href="#bynight">By Night</NavLinkA>
            <NavLinkA href="#pricing">Pricing</NavLinkA>
            <NavLinkA href="#story">Our Story</NavLinkA>
            <NavLinkA href="#visit">Visit</NavLinkA>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/timetable" style={btnGhost}>Timetable</Link>
            <a href="/reformerpilates.html" style={btnSolid}>Book a class</a>
          </div>
        </div>
      </header>

      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <HeroLockup />
            <p style={eyebrowStyle} className="mb-2">
              Bristol · Redfield · Now Open
            </p>
            <h1
              className="font-neogrotesk font-bold text-primary mb-3"
              style={{ fontSize: 20, letterSpacing: "0.02em", whiteSpace: "nowrap" }}
            >
              Immersive Reformer Pilates
            </h1>
            <p
              style={{ color: "rgba(225,214,200,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 520 }}
              className="mb-8"
            >
              Strength, control and rhythm, built into every class. Set inside a
              considered space of tuned lighting, thoughtful set design and a
              music-first soundtrack. Reformer pilates in Bristol, done our way.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="/reformerpilates.html" style={btnSolid}>Book your first class</a>
              <Link to="/timetable" style={btnGhost}>View timetable</Link>
            </div>
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ fontSize: 12, color: mutedCream, letterSpacing: "0.08em" }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> 22a Church Rd, Redfield BS5 9JA
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} /> Mon to Fri, 8:30am to 8:30pm
              </span>
              <span className="inline-flex items-center gap-2" style={{ color: gold }}>
                <Star size={14} fill={gold} /> 5.0 on Google
              </span>
            </div>
          </div>
          <div>
            <div style={{ aspectRatio: "4 / 5", borderRadius: 18, overflow: "hidden", border: "1px solid " + border }}>
              <video
                src="/WEBSITE-size.mp4"
                autoPlay muted loop playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="visit"
        className="max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-8"
        style={{ borderTop: "1px solid " + border, borderBottom: "1px solid " + border }}
      >
        <div>
          <p style={sectionLabelStyle} className="mb-2">Find Us</p>
          <p style={{ color: cream, fontSize: 15, lineHeight: 1.6 }}>
            22a Church Road<br />Redfield, Bristol BS5 9JA
          </p>
        </div>
        <div>
          <p style={sectionLabelStyle} className="mb-2">Opening Hours</p>
          <p style={{ color: cream, fontSize: 15, lineHeight: 1.6 }}>
            Reformer classes, Mon to Fri, 8:30am to 8:30pm<br />
            Renegade | By Night, Fri, 9:00pm to 10:30pm
          </p>
        </div>
        <div>
          <p style={sectionLabelStyle} className="mb-2">Get In Touch</p>
          <p style={{ color: cream, fontSize: 15, lineHeight: 1.7 }}>
            <a href="https://wa.me/447846849456" target="_blank" rel="noopener noreferrer"
               style={{ color: cream, textDecoration: "none" }} className="inline-flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp us
            </a><br />
            <a href="mailto:studio@renegadereformer.co.uk"
               style={{ color: cream, textDecoration: "none" }} className="inline-flex items-center gap-2">
              <Mail size={14} /> studio@renegadereformer.co.uk
            </a>
          </p>
        </div>
      </section>

      <section id="classes" className="max-w-[1200px] mx-auto px-6 py-24">
        <p style={eyebrowStyle} className="mb-3">The Classes</p>
        <h2
          className="font-neogrotesk font-bold text-primary mb-14"
          style={{ fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1.1 }}
        >
          Three ways to train on the reformer.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((c) => (
            <div key={c.name} style={{ background: cardBg, border: "1px solid " + border, padding: 28, borderRadius: 4 }}>
              <p className="font-neogrotesk font-bold text-primary mb-4" style={{ fontSize: 24, letterSpacing: "0.04em" }}>
                {c.name.toUpperCase()}
              </p>
              <p style={{ color: mutedCream, fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="/reformerpilates.html" style={btnGhost}>Full class breakdown</a>
        </div>
      </section>

      <section id="pricing" className="max-w-[1200px] mx-auto px-6 py-24" style={{ borderTop: "1px solid " + border }}>
        <div
          className="text-center mb-10 py-4 px-6"
          style={{ border: "1px solid " + gold, color: gold, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.24em", fontSize: 12, textTransform: "uppercase" }}
        >
          Founding Member Rates, Limited to the First 50 Members, Locked for Life
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {prices.map((p) => (
            <div
              key={p.name}
              style={{ background: p.featured ? "rgba(196,154,74,0.08)" : cardBg, border: "1px solid " + (p.featured ? gold : border), padding: 32, borderRadius: 4, position: "relative" }}
            >
              {p.featured && (
                <div style={{ position: "absolute", top: -10, left: 24, background: gold, color: "#180800", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, letterSpacing: "0.24em", padding: "3px 10px", textTransform: "uppercase" }}>
                  Most Popular
                </div>
              )}
              <p className="font-neogrotesk font-bold text-primary mb-4" style={{ fontSize: 18, letterSpacing: "0.08em" }}>
                {p.name.toUpperCase()}
              </p>
              <div className="mb-1">
                <span className="font-neogrotesk font-bold" style={{ fontSize: 46, color: cream }}>{p.price}</span>
              </div>
              <p style={{ color: mutedCream, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }} className="mb-6">
                {p.unit}
              </p>
              <ul style={{ color: mutedCream, fontSize: 14, lineHeight: 1.9 }} className="mb-8">
                {p.perks.map((perk) => (<li key={perk}>· {perk}</li>))}
              </ul>
              <Link to={p.href} style={p.featured ? btnSolid : btnGhost}>Choose {p.name}</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="bynight" style={{ background: nightBg, borderTop: "1px solid " + border, borderBottom: "1px solid " + border }}>
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p style={{ ...eyebrowStyle, color: gold }} className="mb-4">After Dark</p>
              <h2 className="font-neogrotesk font-bold text-primary mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1.1 }}>
                RENEGADE <span style={{ color: gold }}>|</span>{" "}
                <span className="font-bigcaslon" style={{ color: gold, fontWeight: 400 }}>By Night</span>
              </h2>
              <p style={{ color: mutedCream, fontSize: 16, lineHeight: 1.75, maxWidth: 500 }} className="mb-4">
                An immersive Friday night reformer session. Tuned lighting, deeper
                sound, a longer set. Reformer pilates as an experience, not a
                workout. Slow-build energy, one shared room, doors close on time.
              </p>
              <p style={{ color: cream, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }} className="mb-8 font-medium">
                Fridays, 9:00pm to 10:30pm
              </p>
              <Link to="/bynight" style={btnGold}>Explore By Night</Link>
            </div>
            <div>
              <div style={{ aspectRatio: "1 / 1", borderRadius: 18, overflow: "hidden", border: "1px solid " + border }}>
                <video
                  src="/night_edit.mp4"
                  autoPlay muted loop playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p style={eyebrowStyle} className="mb-4">Our Story</p>
            <h2 className="font-neogrotesk font-bold text-primary mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1.1 }}>
              A studio built on strength, not aesthetics.
            </h2>
            <p style={{ color: mutedCream, fontSize: 16, lineHeight: 1.75 }} className="mb-4">
              Renegade Reformer is a strength-led reformer pilates studio in
              Redfield, Bristol. We built it because reformer in the UK too often
              feels like a soft stretch class in an off-white room. That's not
              what the reformer is for.
            </p>
            <p style={{ color: mutedCream, fontSize: 16, lineHeight: 1.75 }}>
              Our classes are technique-first and strength-honest. The room is
              dark, warm and considered. Every detail, the beds, the lighting,
              the soundtrack, is chosen so you can train hard and switch off
              from everything else.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["01", "05", "07"].map((n) => (
              <div key={n} style={{ aspectRatio: "3 / 4", overflow: "hidden", borderRadius: 4, border: "1px solid " + border }}>
                <img
                  src={`/reformer-collage/reformer-collage-${n}.png`}
                  alt="Renegade Reformer studio"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24" style={{ borderTop: "1px solid " + border }}>
        <p style={eyebrowStyle} className="mb-3">Reviews</p>
        <h2 className="font-neogrotesk font-bold text-primary mb-12" style={{ fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.1 }}>
          What members are saying.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.who} style={{ background: cardBg, border: "1px solid " + border, padding: 32, borderRadius: 4 }}>
              <div className="flex gap-1 mb-5" aria-label="5 star review">
                {[0, 1, 2, 3, 4].map((i) => (<Star key={i} size={16} fill={gold} color={gold} />))}
              </div>
              <p style={{ color: cream, fontSize: 15, lineHeight: 1.75 }} className="mb-6">
                "{r.text}"
              </p>
              <p style={{ color: mutedCream, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase" }}>
                {r.who}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-14" style={{ borderTop: "1px solid " + border }}>
        <div>
          <p style={eyebrowStyle} className="mb-3">FAQs</p>
          <h3 className="font-neogrotesk font-bold text-primary mb-6" style={{ fontSize: 26 }}>Common questions.</h3>
          <ul style={{ borderTop: "1px solid " + border }}>
            {faqs.map((q) => (
              <li key={q} style={{ borderBottom: "1px solid " + border }}>
                <a href="/faq.html" style={{ display: "block", padding: "16px 0", color: cream, fontSize: 15, textDecoration: "none" }}>{q}</a>
              </li>
            ))}
          </ul>
          <a href="/faq.html" style={btnGhost} className="mt-8 inline-block">All FAQs</a>
        </div>
        <div>
          <p style={eyebrowStyle} className="mb-3">Guides</p>
          <h3 className="font-neogrotesk font-bold text-primary mb-6" style={{ fontSize: 26 }}>Read from the studio.</h3>
          <ul style={{ borderTop: "1px solid " + border }}>
            {guides.map((g) => (
              <li key={g.title} style={{ borderBottom: "1px solid " + border }}>
                <a href={g.href} style={{ display: "block", padding: "16px 0", color: cream, fontSize: 15, textDecoration: "none" }}>{g.title}</a>
              </li>
            ))}
          </ul>
          <a href="/guides.html" style={btnGhost} className="mt-8 inline-block">All guides</a>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid " + border }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <div style={{ overflow: "hidden", borderRadius: 8, border: "1px solid " + border, aspectRatio: "4 / 3" }}>
              <iframe
                title="Renegade Reformer location map"
                src="https://www.google.com/maps?q=22a+Church+Road,+Redfield,+Bristol+BS5+9JA&output=embed"
                style={{ border: 0, width: "100%", height: "100%", filter: "grayscale(0.4) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <Link to="/" className="inline-block mb-8">
              <img src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png" alt="Renegade Reformer eagle logo" className="w-11 h-11 object-contain" />
            </Link>
            <p style={sectionLabelStyle} className="mb-2">Visit</p>
            <p style={{ color: cream, fontSize: 14, lineHeight: 1.7 }} className="mb-5">22a Church Road, Redfield<br />Bristol BS5 9JA</p>
            <p style={sectionLabelStyle} className="mb-2">Hours</p>
            <p style={{ color: cream, fontSize: 14, lineHeight: 1.7 }} className="mb-5">
              Reformer, Mon to Fri, 8:30am to 8:30pm<br />By Night, Fri, 9:00pm to 10:30pm
            </p>
            <p style={sectionLabelStyle} className="mb-2">Contact</p>
            <p style={{ color: cream, fontSize: 14, lineHeight: 1.7 }} className="mb-6">
              <a href="mailto:studio@renegadereformer.co.uk" style={{ color: cream, textDecoration: "none" }}>studio@renegadereformer.co.uk</a><br />
              <a href="tel:+447846849456" style={{ color: cream, textDecoration: "none" }}>+44 7846 849456</a>
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a href="https://www.instagram.com/renegade.reformer/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: cream }}><Instagram size={20} /></a>
              <a href="https://www.facebook.com/fitnessreformer/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: cream }}><Facebook size={20} /></a>
              <a href="https://wa.me/447846849456" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: cream }}><MessageCircle size={20} /></a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              <Link to="/" style={{ color: mutedCream, textDecoration: "none" }}>Home</Link>
              <a href="/reformerpilates.html" style={{ color: mutedCream, textDecoration: "none" }}>Reformer</a>
              <Link to="/pricing" style={{ color: mutedCream, textDecoration: "none" }}>Pricing</Link>
              <Link to="/timetable" style={{ color: mutedCream, textDecoration: "none" }}>Timetable</Link>
              <Link to="/bynight" style={{ color: mutedCream, textDecoration: "none" }}>By Night</Link>
              <a href="/guides.html" style={{ color: mutedCream, textDecoration: "none" }}>Guides</a>
              <a href="/faq.html" style={{ color: mutedCream, textDecoration: "none" }}>FAQs</a>
              <Link to="/contact" style={{ color: mutedCream, textDecoration: "none" }}>Contact</Link>
              <a href="/teachwithus" style={{ color: mutedCream, textDecoration: "none" }}>Teach with us</a>
            </div>
          </div>
        </div>
        <div className="text-center py-6 px-6" style={{ borderTop: "1px solid " + border, color: mutedCream, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase" }}>
          © 2026 Renegade Reformer, Redfield, Bristol
        </div>
      </footer>
    </div>
  );
};

export default Home;