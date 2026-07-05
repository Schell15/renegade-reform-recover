import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EXT = "https://www.renegadereformer.co.uk";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openCls = open ? " open" : "";

  return (
    <>
      <nav className="rr-nav">
        <Link to="/" className="rr-nav-logo" aria-label="Renegade Reformer home" onClick={close}>
          <img
            src="/lovable-uploads/fa7bc18e-9a79-444a-901b-45cdc911fda3.png"
            alt="Renegade Reformer logo"
          />
        </Link>
        <div className="rr-nav-right">
          <Link to="/timetable" className="rr-nav-cta" onClick={close}>
            Timetable
          </Link>
          <button
            type="button"
            className={`rr-nav-burger${openCls}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="rr-nav-spacer"></div>

      <div className={`rr-nav-drawer${openCls}`}>
        <button
          type="button"
          className="rr-nav-close"
          aria-label="Close menu"
          onClick={close}
        >
          &times;
        </button>
        <a href={`${EXT}/reformerpilates.html`} onClick={close}>
          Reformer Pilates
        </a>
        <Link to="/bynight" onClick={close}>
          Renegade | By Night
        </Link>
        <Link to="/pricing" onClick={close}>
          Pricing
        </Link>
        <a href={`${EXT}/guides.html`} onClick={close}>
          Guides
        </a>
        <a href={`${EXT}/faq.html`} onClick={close}>
          FAQs
        </a>
        <Link to="/contact" onClick={close}>
          Contact
        </Link>
        <Link to="/timetable" className="rr-nav-drawer-cta" onClick={close}>
          Timetable
        </Link>
      </div>
      <div
        className={`rr-nav-overlay${openCls}`}
        onClick={close}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default SiteHeader;