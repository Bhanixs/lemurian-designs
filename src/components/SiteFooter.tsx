import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <div className="flex items-center gap-3 mb-4">
          <Logo size={44} showWordmark={false} />
          <p className="eyebrow my-0" style={{ color: "var(--secondary)" }}>
            Where Natural Stone Becomes Design
          </p>
        </div>
        <h2 style={{ fontSize: "clamp(2.6rem, 5.2vw, 6rem)", margin: "1.2rem 0" }}>
          Let’s create something
          <br />
          <em>lasting</em> with stone.
        </h2>
        <p
          className="footer-intro"
          style={{ maxWidth: "42rem", fontSize: "0.95rem", lineHeight: 1.65 }}
        >
          Lemurian Designers creates premium natural stone environments and handcrafted
          architectural features for spaces that deserve to be remembered. Share your concept,
          reference images or unfinished idea.
        </p>
        <Link to="/contact" className="footer-cta" style={{ marginTop: "1.5rem" }}>
          Prepare your enquiry <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="enquiry-note" style={{ marginTop: "2.5rem", padding: "1.2rem 0" }}>
        <p style={{ margin: 0 }}>
          When preparing your enquiry, include your project location, approximate dimensions,
          preferred timeline and reference photographs.
        </p>
        <span>South India · Available for regional and international commissions.</span>
      </div>

      <div className="footer-bottom" style={{ marginTop: "2rem", paddingBottom: "0.5rem" }}>
        <Logo size={38} showWordmark={true} />
        <p>Where Natural Stone Becomes Design · Lemurian Designers</p>
        <button
          type="button"
          onClick={handleScrollTop}
          className="cursor-pointer text-right uppercase tracking-wider text-white/70 hover:text-white bg-transparent border-0"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
