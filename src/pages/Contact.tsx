import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { STUDIO, addressOneLine, mailtoHref, whatsappUrl, whatsappDisplay } from "@/content/studio";

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("_replyto", formData.email);
    try {
      const res = await fetch("https://formspree.io/f/mykabygl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(240, 235, 227, 0.05)",
    border: "0.5px solid #4a2e12",
    color: "#f0ebe3",
    letterSpacing: "0.06em",
  };

  return (
    <main
      className="min-h-screen font-grotesk flex flex-col items-center px-8 py-16 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 28%, #3d1c02 0%, #1c0a00 50%, #0d0400 100%)",
      }}
    >
      <SiteHeader />
      <SEO
        title="Contact | Renegade Reformer Bristol"
        description="Get in touch with Renegade Reformer, the reformer Pilates studio in Redfield, Bristol. Now open. We'd love to hear from you."
        path="/contact"
      />

      <div className="w-full max-w-xl relative z-10">
        <button
          onClick={() => navigate("/")}
          className="uppercase font-light mb-12 transition-colors hover:opacity-80"
          style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            color: "#8a6e50",
            background: "transparent",
            border: "none",
          }}
        >
          ← Back
        </button>

        <h1 className="sr-only">Contact Renegade Reformer, Reformer Pilates in Redfield, Bristol</h1>
        <h2
          className="font-neogrotesk text-5xl sm:text-7xl font-bold tracking-tight mb-4"
          style={{ color: "#f0ebe3" }}
        >
          CONTACT.
        </h2>
        <p
          className="uppercase font-light mb-12"
          style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "#8a6e50",
          }}
        >
          We'd love to hear from you
        </p>

        <div
          style={{ height: "0.5px", background: "#4a2e12" }}
          aria-hidden="true"
          className="mb-10"
        ></div>

        {submitted ? (
          <div className="text-center py-12">
            <h2
              className="font-neogrotesk text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "#f0ebe3" }}
            >
              THANK YOU.
            </h2>
            <p
              className="uppercase font-light"
              style={{
                fontSize: "11px",
                letterSpacing: "0.28em",
                color: "#b8a080",
              }}
            >
              We'll be in touch soon
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mykabygl"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors placeholder:text-[#6a5035] focus:bg-white/[0.08]"
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors placeholder:text-[#6a5035] focus:bg-white/[0.08]"
              style={inputStyle}
            />
            <input type="hidden" name="_replyto" value={formData.email} />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors resize-none placeholder:text-[#6a5035] focus:bg-white/[0.08]"
              style={inputStyle}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full uppercase font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{
                background: "#a02d18",
                border: "none",
                color: "#fff",
                padding: "16px",
                borderRadius: "6px",
                fontSize: "11px",
                letterSpacing: "0.18em",
                cursor: "pointer",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="mt-12 text-center">
          <p
            className="uppercase font-light mb-2"
            style={{
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#6a5035",
            }}
          >
            Or email us directly
          </p>
          <a
            href={mailtoHref()}
            className="transition-colors hover:opacity-80"
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "#b8a080",
            }}
          >
            {STUDIO.contact.email}
          </a>

          <p
            className="uppercase font-light mb-2 mt-8"
            style={{
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#6a5035",
            }}
          >
            Or message us on WhatsApp
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="transition-colors hover:opacity-80"
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "#b8a080",
            }}
          >
            {`WhatsApp us on ${whatsappDisplay()}`}
          </a>
          <p
            className="mt-2"
            style={{
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "#6a5035",
            }}
          >
            WhatsApp messages only, this number does not take voice calls.
          </p>
          <p
            className="mt-6"
            style={{
              fontSize: "13px",
              lineHeight: "1.8",
              letterSpacing: "0.04em",
              color: "#8a6e50",
            }}
          >
            However you get in touch, by form, email or WhatsApp, we'll get back to you as soon as we can.
          </p>
        </div>

        <div
          className="mt-12"
          style={{ height: "0.5px", background: "#4a2e12" }}
          aria-hidden="true"
        ></div>

        <section className="mt-10 text-center" aria-label="Studio opening hours">
          <h2
            className="uppercase font-light mb-4"
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "#8a6e50",
            }}
          >
            Opening Hours
          </h2>
          <address
            className="not-italic"
            style={{
              fontSize: "13px",
              lineHeight: "1.9",
              letterSpacing: "0.06em",
              color: "#b8a080",
            }}
          >
            <div>Monday to Friday: {STUDIO.hours.reformer.open} &ndash; {STUDIO.hours.reformer.close}</div>
            <div>Saturday: Closed</div>
            <div>Sunday: Closed</div>
          </address>
          <p
            className="mt-6 uppercase font-light"
            style={{
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#6a5035",
            }}
          >
            {addressOneLine()}
          </p>
        </section>

        <div
          className="mt-12"
          style={{ height: "0.5px", background: "#4a2e12" }}
          aria-hidden="true"
        ></div>

        <section className="mt-10" aria-label="Finding the studio">
          <h2
            className="uppercase font-light mb-4 text-center"
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "#8a6e50",
            }}
          >
            Finding the studio
          </h2>
          <div
            style={{
              fontSize: "13px",
              lineHeight: "1.9",
              letterSpacing: "0.04em",
              color: "#b8a080",
            }}
          >
            <p>
              Parking is free on the surrounding streets. Please don't park at Vanguard Storage next
              door, that's a private car park. Lidl is a five-minute walk away and offers up to 90
              minutes of free parking, though parking there is at your own risk. Lawrence Hill station
              is just a two-minute walk if you're coming by train.
            </p>
            <p className="mt-4">
              Cycling in? There's a bike rack behind the green gate to the right of the studio, or you
              can use Vanguard Storage's rack in their car park, just not after 6:30pm when it closes.
              Both are at your own risk.
            </p>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
};

export default Contact;