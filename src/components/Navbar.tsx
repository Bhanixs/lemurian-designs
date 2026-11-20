import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";
import { servicesNavItems, industriesNavItems, type NavSubItem } from "@/lib/site-nav";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="wordmark" aria-label="Lemurian Designers Home">
      <Logo size={compact ? 44 : 36} showWordmark={!compact} />
    </Link>
  );
}

interface DesktopDropdownProps {
  parentLink: { label: string; path: string };
  items: NavSubItem[];
  currentPath: string;
  theme: "dark" | "light" | "auto";
}

function DesktopDropdown({ parentLink, items, currentPath, theme }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleFocus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const isActive = currentPath === parentLink.path || currentPath.startsWith(`${parentLink.path}/`);

  return (
    <div
      className="relative group/nav"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <Link
        to={parentLink.path}
        className={`nav-link-item ${isActive ? "active" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{parentLink.label}</span>
        <ChevronDown
          size={11}
          className={`ml-1 transition-transform duration-200 ${
            open ? "rotate-180 text-secondary" : "opacity-60"
          }`}
        />
        {isActive && <span className="nav-active-pip" />}
      </Link>

      {/* Submenu Dropdown Container - Always in DOM for SSR crawlability */}
      <div
        className={`absolute top-full left-0 pt-2 z-50 min-w-[290px] transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
        role="menu"
        aria-label={`${parentLink.label} Submenu`}
      >
        <div
          className={`p-3 rounded-md border shadow-2xl backdrop-blur-md ${
            theme === "light"
              ? "bg-white/95 border-stone-200 text-stone-900 shadow-stone-300/40"
              : "bg-[#0e1712]/95 border-white/10 text-stone-100 shadow-black/80"
          }`}
        >
          <div className="text-[0.62rem] font-mono tracking-widest uppercase text-muted-foreground px-2.5 py-1 mb-1 border-b border-border/50">
            {parentLink.label} Directory
          </div>
          <div className="flex flex-col gap-0.5">
            {items.map((sub) => {
              const isSubActive = currentPath === sub.path;
              return (
                <Link
                  key={sub.path}
                  to={sub.path}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`group/subitem flex items-center justify-between px-2.5 py-2 rounded text-xs transition-colors ${
                    isSubActive
                      ? "bg-secondary/15 text-secondary font-semibold"
                      : "text-foreground/85 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.65rem] font-bold text-secondary">
                      {sub.number}
                    </span>
                    <span className="font-medium tracking-normal normal-case">{sub.label}</span>
                  </div>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover/subitem:opacity-100 text-secondary transition-opacity"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" | "auto" }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
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
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services", subItems: servicesNavItems },
    { label: "Industries", path: "/industries", subItems: industriesNavItems },
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
            if (link.subItems) {
              return (
                <DesktopDropdown
                  key={link.path}
                  parentLink={{ label: link.label, path: link.path }}
                  items={link.subItems}
                  currentPath={currentPath}
                  theme={theme}
                />
              );
            }

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

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-content overflow-y-auto max-h-screen">
            <nav className="mobile-drawer-links" aria-label="Mobile links">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-item ${currentPath === "/" ? "active" : ""}`}
              >
                <span className="mobile-nav-num">00</span>
                <span className="mobile-nav-text">Home</span>
              </Link>

              {navLinks.map((link, idx) => {
                const isActive =
                  currentPath === link.path || currentPath.startsWith(`${link.path}/`);
                const isExpanded = mobileExpanded === link.path;

                if (link.subItems) {
                  return (
                    <div key={link.path} className="border-b border-white/10 py-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`mobile-nav-item border-b-0 py-2.5 ${isActive ? "active" : ""}`}
                        >
                          <span className="mobile-nav-num">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="mobile-nav-text">{link.label}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(isExpanded ? null : link.path)}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle ${link.label} sub-pages`}
                          className="p-2 text-white/70 hover:text-white"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-secondary" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable sub-page list */}
                      {isExpanded && (
                        <div className="pl-8 pb-3 space-y-2 border-l border-secondary/30 ml-3 my-1">
                          <Link
                            to={link.path}
                            onClick={() => setMobileOpen(false)}
                            className="block text-xs uppercase tracking-wider text-secondary font-semibold py-1"
                          >
                            All {link.label} Overview →
                          </Link>
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className="block text-sm text-white/80 hover:text-white py-1"
                            >
                              <span className="font-mono text-xs text-secondary/80 mr-2">
                                {sub.number}
                              </span>
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-nav-item ${isActive ? "active" : ""}`}
                  >
                    <span className="mobile-nav-num">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="mobile-nav-text">{link.label}</span>
                  </Link>
                );
              })}
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
                <a href="tel:+919500809487" className="mobile-contact-pill">
                  <Phone size={13} />
                  <span>Call Direct</span>
                </a>
                <a
                  href="https://wa.me/919500809487?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-contact-pill"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Logo size={24} showWordmark={false} />
                <p className="mobile-drawer-note my-0">
                  Lemurian Designers • Architectural Stonework
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
