import { Link } from "react-router-dom";

const EXT = "https://www.renegadereformer.co.uk";

const SiteFooter = () => (
  <footer className="rr-footer">
    <p>
      &copy; 2026 Renegade Reformer &middot; 22a Church Road, Redfield, Bristol BS5 9JA
    </p>
    <div className="rr-footer-links">
      <Link to="/">Home</Link>
      <a href={`${EXT}/reformerpilates.html`}>Reformer Pilates</a>
      <Link to="/pricing">Pricing</Link>
      <Link to="/timetable">Timetable</Link>
      <Link to="/bynight">Renegade | By Night</Link>
      <a href={`${EXT}/guides.html`}>Guides</a>
      <a href={`${EXT}/faq.html`}>FAQs</a>
      <Link to="/contact">Contact</Link>
      <a href={`${EXT}/teachwithus`}>Instructor Application</a>
    </div>
  </footer>
);

export default SiteFooter;