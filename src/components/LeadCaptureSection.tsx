import { useEffect, useRef, useState } from "react";

const MOMENCE_INNER = `<div id="momence-plugin-lead-form"></div>
<style>
:root {
    --momenceColorBackground: #140800;
    --momenceColorPrimary: 240, 230, 214;
    --momenceColorBlack: 240, 230, 214;
}
</style>`;

const LeadCaptureSection = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    // Remove any existing script then re-inject so the form re-initialises
    const existing = document.getElementById("momence-plugin-lead-form-src");
    if (existing) existing.remove();

    // Clear the mount node so Momence can re-render cleanly
    const mount = containerRef.current?.querySelector("#momence-plugin-lead-form");
    if (mount) mount.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.id = "momence-plugin-lead-form-src";
    script.setAttribute("host_id", "227483");
    script.setAttribute("fields", "fullName,email,phoneNumber,aaawwee");
    script.setAttribute("token", "zQ7OKzkB7l");
    script.setAttribute("country_code", "gb");
    script.setAttribute("source_id", "216491");
    script.setAttribute(
      "data-field-def",
      '{"fullName":{"type":"text","label":"Full name","required":true,"hidden":false},"email":{"type":"email","label":"Email","required":true},"phoneNumber":{"type":"phone-number","label":"Phone number","required":true},"aaawwee":{"type":"text","label":"How can we help?","required":true,"hidden":false}}'
    );
    script.src = "https://momence.com/plugin/lead-form/lead-form.js";
    containerRef.current?.appendChild(script);
  }, [open]);

  return (
    <section
      style={{
        background: "#f0e6d6",
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "2.5rem 1.5rem",
        margin: "3rem 0",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          style={{
            width: "100%",
            background: "#140800",
            color: "#f0e6d6",
            border: "none",
            borderRadius: "10px",
            padding: "22px 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "20px", lineHeight: 1, opacity: 0.85 }}>〰</span>
          <span style={{ flex: 1, textAlign: "left" }}>Want to talk it through first?</span>
          <span
            style={{
              fontSize: "22px",
              lineHeight: 1,
              display: "inline-block",
              transition: "transform 0.3s ease",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            ›
          </span>
        </button>
        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? "1400px" : "0px",
            opacity: open ? 1 : 0,
            transition: "max-height 0.45s ease, opacity 0.35s ease, margin-top 0.35s ease",
            marginTop: open ? "16px" : "0px",
          }}
        >
          <div
            style={{
              background: "#140800",
              color: "#f0e6d6",
              borderRadius: "10px",
              padding: "28px 24px",
            }}
          >
            <style>{`
              .lcs-momence input,
              .lcs-momence textarea,
              .lcs-momence select {
                background: #140800 !important;
                color: #f0e6d6 !important;
                border-color: rgba(240,230,214,0.25) !important;
              }
              .lcs-momence button[type="submit"],
              .lcs-momence [type="submit"] {
                background: #3d1a00 !important;
                color: #f0e6d6 !important;
              }
              .lcs-momence * { color: #f0e6d6; }
            `}</style>
            <div
              ref={containerRef}
              className="lcs-momence"
              dangerouslySetInnerHTML={{ __html: MOMENCE_INNER }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;