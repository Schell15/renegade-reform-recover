import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const gold = "#C49A4A";
const cream = "#E1D6C8";
const mutedCream = "rgba(225,214,200,0.62)";
const border = "rgba(225,214,200,0.14)";
const cardBg = "rgba(255,255,255,0.03)";
const heroBg =
  "radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)";

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  color: gold,
};

type ClassKey = "foundations" | "renegade" | "rebuild";

const classData: Record<ClassKey, { tag: string; name: string; sub: string; body: string[]; note?: string }> = {
  foundations: {
    tag: "Entry level",
    name: "FOUNDATIONS.",
    sub: "New to reformer? Start here.",
    body: [
      "Our most supportive introduction to reformer Pilates, designed specifically for first timers, anyone nervous to start, returning to movement, or wanting to build confidence before stepping into our main classes.",
      "This class will help you understand the equipment, build confidence and learn the basics properly with a classic full body workout. Expect clear guidance, simple controlled movement and a strong focus on breathing, form, posture and body awareness, all within a welcoming, inclusive space where everyone is learning together.",
      "If you've been waiting for a sign to start, this is it.",
    ],
    note: "Not mandatory, but highly encouraged.",
  },
  renegade: {
    tag: "Beginner",
    name: "RENEGADE.",
    sub: "Your beginner class.",
    body: [
      "Designed to build strength, mobility and better posture while learning the core principles of Pilates.",
      "Expect a slower pace and a strong focus on form and control to build confidence on the reformer.",
    ],
  },
  rebuild: {
    tag: "Intermediate",
    name: "REBUILD.",
    sub: "Reformer plus full body strength training.",
    body: [
      "Fancy a fitness challenge? Rebuild is your weighted, gym-inspired reformer class built for strength, sculpt and control.",
      "Expect heavier resistance, added load and powerful full body sequences that bring a strength training edge to Pilates.",
    ],
  },
};

const legend: { key: ClassKey; label: string; desc: string }[] = [
  { key: "foundations", label: "Foundations", desc: "First timers, get to grips with the basics." },
  { key: "renegade", label: "Renegade", desc: "Beginner flow, rhythm and confidence on the reformer." },
  { key: "rebuild", label: "Rebuild", desc: "Strength and Pilates, your gym workout on the reformer." },
];

const Timetable = () => {
  const [openKey, setOpenKey] = useState<ClassKey | null>(null);
  const open = openKey ? classData[openKey] : null;

  return (
    <div style={{ background: heroBg, minHeight: "100vh", color: cream }}>
      <SEO
        title="Class Timetable & Booking | Renegade Reformer, Redfield Bristol"
        description="Browse this week's reformer Pilates class timetable in Redfield, Bristol and book your spot. Foundations, Renegade and Rebuild classes, 50 minutes, small groups."
        path="/timetable"
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
        </div>
      </header>

      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <p style={eyebrowStyle} className="mb-4">Bristol's Boutique Reformer Studio</p>
        <h1
          className="font-neogrotesk font-bold text-primary"
          style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.95 }}
        >
          FIND YOUR CLASS.
        </h1>
        <p
          style={{ color: mutedCream, fontSize: 14, lineHeight: 1.75, maxWidth: 440, marginTop: 24, borderLeft: "1px solid " + border, paddingLeft: 20 }}
        >
          Every session is 50 minutes. Every class is capped small. Browse the week ahead and secure your spot.
        </p>
      </section>

      <section
        className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-0"
        style={{ borderTop: "1px solid " + border, borderBottom: "1px solid " + border }}
      >
        {legend.map((item, i) => (
          <div
            key={item.key}
            style={{
              padding: "28px 28px 28px 0",
              paddingLeft: i === 0 ? 0 : 28,
              borderRight: i < legend.length - 1 ? "1px solid " + border : "none",
            }}
          >
            <p className="font-neogrotesk font-bold text-primary mb-1" style={{ fontSize: 15, letterSpacing: "0.06em" }}>
              {item.label.toUpperCase()}
            </p>
            <p style={{ color: mutedCream, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{item.desc}</p>
            <button
              onClick={() => setOpenKey(item.key)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: cream,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              Class info
            </button>
          </div>
        ))}
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-10" style={{ color: mutedCream, fontSize: 14, lineHeight: 1.75 }}>
        <h2 className="font-neogrotesk font-bold text-primary mb-4" style={{ fontSize: 20, letterSpacing: "0.06em" }}>
          THIS WEEK'S REFORMER PILATES CLASSES IN REDFIELD, BRISTOL
        </h2>
        <p className="mb-4">
          Renegade Reformer runs strength led reformer Pilates classes in Redfield, Bristol, Monday to Friday, 8:30am to 8:30pm. Every session is 50 minutes and class sizes are kept small. Book any class in the live calendar below.
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: 20, marginBottom: 14 }}>
          <li><strong style={{ color: cream }}>Foundations</strong>, our entry level introduction to reformer Pilates for first timers and returners. Focus on set up, breath, form and body awareness.</li>
          <li><strong style={{ color: cream }}>Renegade</strong>, beginner friendly reformer flow class building strength, mobility and posture with a strong focus on control.</li>
          <li><strong style={{ color: cream }}>Rebuild</strong>, intermediate reformer and strength training class with added load and full body sequences for sculpt and power.</li>
        </ul>
        <p>
          Studio: 22a Church Road, Redfield, Bristol BS5 9JA. Founding member rates are live.{" "}
          <Link to="/pricing" style={{ color: cream, textDecoration: "underline" }}>See pricing</Link> or{" "}
          <Link to="/contact" style={{ color: cream, textDecoration: "underline" }}>get in touch</Link>.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div style={{ borderRadius: 4, overflow: "hidden" }}>
          <iframe
            src="/momence-embed.html"
            title="Renegade Reformer class booking calendar"
            loading="lazy"
            scrolling="no"
            frameBorder={0}
            style={{ width: "100%", border: "none", display: "block", minHeight: 2400 }}
          />
        </div>
      </section>

      <footer style={{ borderTop: "1px solid " + border }} className="max-w-[1200px] mx-auto px-6 py-10 flex items-center justify-between">
        <span style={{ ...eyebrowStyle, color: mutedCream }}>Renegade Reformer, Bristol</span>
        <span style={{ color: "rgba(225,214,200,0.35)", fontSize: 12 }}>renegadereformer.co.uk</span>
      </footer>

      {open && (
        <div
          onClick={() => setOpenKey(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 300,
            background: "rgba(13,4,0,0.85)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#391500", border: "1px solid " + border, maxWidth: 560, width: "100%", padding: 48, position: "relative" }}
          >
            <button
              onClick={() => setOpenKey(null)}
              aria-label="Close"
              style={{
                position: "absolute", top: 20, right: 20, width: 32, height: 32,
                background: "none", border: "1px solid " + border, color: mutedCream,
                cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase", color: mutedCream,
                background: "rgba(225,214,200,0.1)", display: "inline-block", padding: "4px 10px", marginBottom: 20,
              }}
            >
              {open.tag}
            </div>
            <p className="font-neogrotesk font-bold" style={{ fontSize: 30, color: cream, letterSpacing: "0.06em", marginBottom: 4 }}>
              {open.name}
            </p>
            <p className="font-bigcaslon" style={{ fontSize: 18, color: mutedCream, marginBottom: 24 }}>{open.sub}</p>
            <div style={{ height: 1, background: border, marginBottom: 24 }} />
            <div style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(225,214,200,0.7)" }}>
              {open.body.map((p, i) => (<p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>{p}</p>))}
            </div>
            {open.note && (
              <div
                style={{
                  marginTop: 20, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: mutedCream,
                  borderLeft: "2px solid " + gold, background: "rgba(196,154,74,0.08)", padding: "8px 12px",
                }}
              >
                {open.note}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
