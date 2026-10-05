import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

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
        <div className="mobile-nav-toggle md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="text-xs uppercase tracking-wider font-semibold ml-1.5">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-drawer-nav">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`mobile-nav-link ${currentPath === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-link ${currentPath === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mobile-nav-cta">
              Request Consultation <ArrowUpRight size={14} />
            </Link>

            <div className="mobile-direct-actions">
              <a href="tel:+919876543210" className="mobile-quick-btn">
                <Phone size={13} /> Call Us Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-quick-btn"
              >
                <MessageCircle size={13} /> WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
