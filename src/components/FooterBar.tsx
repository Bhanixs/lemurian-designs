import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function FooterBar({
  showCta = true,
  ctaText = "Request Consultation",
  ctaLink = "/contact",
}: {
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}) {
  return (
    <footer className="compact-footer-bar">
      <div className="compact-footer-container">
        <div className="footer-bar-left flex items-center gap-2">
          <Logo size={20} showWordmark={false} />
          <span className="footer-location-text">
            Natural Stone Craftsmanship · South India & Nationwide
          </span>
        </div>

        <div className="footer-bar-center">
          <a href="tel:+919876543210" className="footer-action-link" aria-label="Direct Phone">
            <Phone size={11} /> +91 98765 43210
          </a>
          <span className="footer-divider">/</span>
          <a
            href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-action-link"
            aria-label="Direct WhatsApp"
          >
            <MessageCircle size={11} /> WhatsApp
          </a>
        </div>

        {showCta && (
          <div className="footer-bar-right">
            <Link to={ctaLink} className="footer-cta-pill">
              <span>{ctaText}</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
