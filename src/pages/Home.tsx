import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Updated to use direct image paths
const Home = () => {
  const navigate = useNavigate();
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <main
      className="min-h-screen font-grotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)",
      }}
    >
      <SEO
        title="Reformer Pilates in Redfield, Bristol | Renegade Reformer"
        description="Renegade Reformer is a strength-led reformer Pilates studio in Redfield, Bristol. Now open, founding member rates live. Book your first class today."
        path="/"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Main Header Logo */}
        <div
          className="animate-fade-in animate-scale-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* White Eagle Logo */}
          <div className="mb-6">
            <img
              src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png"
              alt="Renegade Reformer eagle logo, reformer Pilates Bristol"
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>

          {/* Studio Name */}
          <div className="mb-4 inline-block">
            <h1 className="text-primary font-neogrotesk text-4xl sm:text-7xl font-bold tracking-tight">
              RENEGADE.
            </h1>
            <h2 className="text-primary font-bigcaslon text-4xl sm:text-6xl tracking-tight -mt-2 text-right">
              reformer
            </h2>
          </div>
        </div>
        <p className="sr-only">Reformer Pilates Studio in Bristol</p>

        {/* Tagline */}
        <p
          className="font-light uppercase text-center mb-[52px]"
          style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "#8a6e50",
          }}
        >
          reform &nbsp;&middot;&nbsp; repower &nbsp;&middot;&nbsp; recover
        </p>

        {/* Divider + CTA grid */}
        <div className="w-full" style={{ maxWidth: "min(600px, 86vw)" }}>
          <div
            style={{ height: "0.5px", background: "#4a2e12" }}
            aria-hidden="true"
          ></div>
          <nav
            className="grid grid-cols-3"
            aria-label="Site sections"
            style={{ borderBottom: "0.5px solid #4a2e12" }}
          >
            <button
              onClick={() => setStoryOpen(true)}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderTop: "0.5px solid #4a2e12" }}
            >
              <span
                className="block uppercase font-bold mb-[5px]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  color: "#f0ebe3",
                }}
              >
                Our Story
              </span>
              <span
                className="block uppercase font-light"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#6a5035",
                }}
              >
                We Are Renegade
              </span>
            </button>
            <button
              onClick={() => {
                window.location.href = "/reformerpilates.html";
              }}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{
                borderTop: "0.5px solid #4a2e12",
                borderLeft: "0.5px solid #4a2e12",
                borderRight: "0.5px solid #4a2e12",
              }}
            >
              <span
                className="block uppercase font-bold mb-[5px]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  color: "#f0ebe3",
                }}
              >
                Reformer Pilates
              </span>
              <span
                className="block uppercase font-light"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#6a5035",
                }}
              >
                Full Class Info
              </span>
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderTop: "0.5px solid #4a2e12" }}
            >
              <span
                className="block uppercase font-bold mb-[5px]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  color: "#f0ebe3",
                }}
              >
                Pricing
              </span>
              <span
                className="block uppercase font-light"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#6a5035",
                }}
              >
                Founders discount
              </span>
            </button>
          </nav>

          {/* Secondary nav row */}
          <nav
            className="grid grid-cols-2"
            aria-label="Resources"
            style={{ borderBottom: "0.5px solid #4a2e12" }}
          >
            <button
              onClick={() => { window.location.href = "/faq.html"; }}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
            >
              <span
                className="block uppercase font-bold mb-[5px]"
                style={{ fontSize: "13px", letterSpacing: "0.14em", color: "#f0ebe3" }}
              >
                FAQs
              </span>
              <span
                className="block uppercase font-light"
                style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#6a5035" }}
              >
                Common questions
              </span>
            </button>
            <button
              onClick={() => { window.location.href = "/guides.html"; }}
              className="py-6 px-4 text-center transition-colors hover:bg-white/[0.035]"
              style={{ borderLeft: "0.5px solid #4a2e12" }}
            >
              <span
                className="block uppercase font-bold mb-[5px]"
                style={{ fontSize: "13px", letterSpacing: "0.14em", color: "#f0ebe3" }}
              >
                Guides
              </span>
              <span
                className="block uppercase font-light"
                style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#6a5035" }}
              >
                Tips &amp; advice
              </span>
            </button>
          </nav>
        </div>

        {/* Founders Rates */}
        <div className="mt-9 text-center">
          <p
            className="uppercase font-light mb-2"
            style={{
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#6a5035",
            }}
          >
            FOUNDERS RATES NOW LIVE FOR:
          </p>
          <p
            className="uppercase mb-6"
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              color: "#b8a080",
            }}
          >
            Drop ins · Memberships · Intro Packs
          </p>
        </div>

        {/* Timetable CTA */}
        <a
          href="/timetable"
          style={{
            display: "inline-block",
            marginTop: "0px",
            background: "#E1D6C8",
            color: "#180800",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "14px 48px",
            borderRadius: 0,
            textDecoration: "none",
          }}
        >
          REFORMER CLASS TIMETABLE
        </a>

        {/* By Night CTA */}
        <a
          href="/bynight"
          style={{
            display: "inline-block",
            marginTop: "12px",
            background: "transparent",
            color: "#C49A4A",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "14px 48px",
            borderRadius: 0,
            textDecoration: "none",
            border: "1px solid #C49A4A",
            textAlign: "center",
          }}
        >
          <span style={{ display: "block" }}>RENEGADE | BY NIGHT</span>
          <span
            style={{
              display: "block",
              fontSize: "10px",
              letterSpacing: "0.24em",
              fontWeight: 400,
              marginTop: "4px",
              opacity: 0.85,
            }}
          >
            An immersive wellness experience
          </span>
        </a>

        {/* Coming Soon Bar */}
        <div
          className="w-full text-center"
          style={{
            marginTop: "24px",
            borderTop: "1px solid rgba(225,214,200,0.12)",
            borderBottom: "1px solid rgba(225,214,200,0.12)",
            padding: "20px 0",
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E1D6C8",
            }}
          >
            MAT PILATES · YOGA · BARRE
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(225,214,200,0.38)",
              marginTop: "4px",
            }}
          >
            COMING SOON
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="inline-block uppercase font-bold transition-colors hover:bg-white/[0.035]"
            style={{
              fontSize: "13px",
              letterSpacing: "0.14em",
              color: "#f0ebe3",
              border: "0.5px solid #4a2e12",
              padding: "14px 28px",
              background: "transparent",
            }}
          >
            Get In Touch
          </button>
          <a
            href="/teachwithus"
            className="inline-block uppercase font-bold transition-colors hover:bg-white/[0.035]"
            style={{
              fontSize: "13px",
              letterSpacing: "0.14em",
              color: "#f0ebe3",
              border: "0.5px solid #4a2e12",
              padding: "14px 28px",
              background: "transparent",
              textDecoration: "none",
            }}
          >
            Instructor Application
          </a>
        </div>

        {/* Footer */}
        <footer
          className="w-full mt-16 pt-10 text-center"
          style={{ borderTop: "0.5px solid #4a2e12" }}
        >
          <p
            className="uppercase font-light mb-2"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#6a5035" }}
          >
            Visit Us
          </p>
          <p style={{ fontSize: "13px", letterSpacing: "0.06em", color: "#f0ebe3", marginBottom: "24px" }}>
            22a Church Road, Redfield, Bristol BS5 9JA
          </p>

          <p
            className="uppercase font-light mb-2"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#6a5035" }}
          >
            Opening Hours
          </p>
          <p style={{ fontSize: "13px", color: "#f0ebe3", marginBottom: "4px" }}>
            Reformer Classes: Mon–Fri, 8:30am–8:30pm
          </p>
          <p style={{ fontSize: "13px", color: "#f0ebe3", marginBottom: "24px" }}>
            Renegade | By Night: Fri, 9:00pm–10:30pm
          </p>

          <p
            className="uppercase font-light mb-2"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#6a5035" }}
          >
            Contact
          </p>
          <p style={{ fontSize: "13px", marginBottom: "6px" }}>
            <a
              href="mailto:studio@renegadereformer.co.uk"
              style={{ color: "#f0ebe3", textDecoration: "none" }}
            >
              studio@renegadereformer.co.uk
            </a>
          </p>
          <p style={{ fontSize: "13px", marginBottom: "24px" }}>
            <a
              href="https://wa.me/447846849456"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0ebe3", textDecoration: "underline" }}
            >
              Message us on WhatsApp
            </a>
          </p>

          <p
            className="uppercase font-light mb-2"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#6a5035" }}
          >
            Follow
          </p>
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            style={{ fontSize: "13px", color: "#f0ebe3", paddingBottom: "32px" }}
          >
            <a
              href="https://www.facebook.com/fitnessreformer/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0ebe3", textDecoration: "none" }}
            >
              Facebook
            </a>
            <span style={{ color: "#4a2e12" }}>·</span>
            <a
              href="https://www.instagram.com/renegade.reformer/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0ebe3", textDecoration: "none" }}
            >
              Instagram
            </a>
            <span style={{ color: "#4a2e12" }}>·</span>
            <a
              href="tel:+447846849456"
              style={{ color: "#f0ebe3", textDecoration: "none" }}
            >
              +44 7846 849456
            </a>
          </div>
        </footer>
      </div>

      <Dialog open={storyOpen} onOpenChange={setStoryOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Our Story</DialogTitle>
            <DialogDescription>
              We're still writing this chapter. Check back soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setStoryOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
};
export default Home;
