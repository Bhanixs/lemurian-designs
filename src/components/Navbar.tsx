import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

import { Logo } from "@/components/Logo";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="wordmark" aria-label="Lemurian Designers Home">
      <Logo size={compact ? 44 : 34} showWordmark={!compact} />
    </Link>
  );
}

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" | "auto" }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  // Lock body scrolling when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Process", path: "/process" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`site-header-nav ${theme === "light" ? "nav-theme-light" : "nav-theme-dark"}`}
    >
      <div className="header-container">
        <Wordmark />

        {/* Desktop Navigation */}
        <nav className="desktop-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-item ${isActive ? "active" : ""}`}
              >
                <span>{link.label}</span>
                {isActive && <span className="nav-active-pip" />}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className={`nav-cta-btn ${currentPath === "/contact" ? "active" : ""}`}
          >
            <span>Request Consultation</span>
            <ArrowUpRight size={13} />
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="mobile-nav-toggle">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-burger-btn"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <span className="burger-icon-box">
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Blur Overlay */}
      {mobileOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-content">
            <nav className="mobile-drawer-links" aria-label="Mobile links">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-item ${currentPath === "/" ? "active" : ""}`}
              >
                <span className="mobile-nav-num">00</span>
                <span className="mobile-nav-text">Home</span>
              </Link>

              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-nav-item ${currentPath === link.path ? "active" : ""}`}
                >
                  <span className="mobile-nav-num">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="mobile-nav-text">{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mobile-cta-button"
              >
                <span>Request Consultation</span>
                <ArrowUpRight size={15} />
              </Link>

              <div className="mobile-drawer-contact-row">
                <a href="tel:+919876543210" className="mobile-contact-pill">
                  <Phone size={13} />
                  <span>Call Direct</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-contact-pill"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="mobile-drawer-note">Lemurian Designers • Architectural Stonework</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
