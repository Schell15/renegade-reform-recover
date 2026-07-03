import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";

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
      <SEO
        title="Contact | Renegade Reformer Bristol"
        description="Get in touch with Renegade Reformer, the reformer Pilates studio in Lawrence Hill, Bristol. Now open, founding rates live. We'd love to hear from you."
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

        <h1
          className="font-neogrotesk text-5xl sm:text-7xl font-bold tracking-tight mb-4"
          style={{ color: "#f0ebe3" }}
        >
          CONTACT.
        </h1>
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
            href="mailto:studio@renegadereformer.co.uk"
            className="transition-colors hover:opacity-80"
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "#b8a080",
            }}
          >
            studio@renegadereformer.co.uk
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;