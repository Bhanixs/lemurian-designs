import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { faqsData } from "@/data/stoneData";
import heroImage from "@/assets/lemurian-hero.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Lemurian Designers" },
      {
        name: "description",
        content:
          "Answers to common queries regarding natural stone selection, custom designs, resort projects, engraving, quotes, and timelines.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      {/* 1. FULLSCREEN HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={heroImage}
          alt="Natural Stonework FAQs"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Frequently Asked Questions</p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Frequently asked questions.
            <br />
            Before we begin.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-3">
            Transparent answers to common queries regarding stone selection, reference drawings,
            custom carving, resort water installations, site feasibility, and quotation requests.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {[
              "Custom Designs",
              "Material Selection",
              "Project Feasibility",
              "Pricing & Timelines",
              "Nationwide Delivery",
              "Installation Supervision",
            ].map((item) => (
              <span
                key={item}
                className="category-badge text-[0.68rem] py-0.5 px-2.5 border-white/30 text-white/90 bg-black/20 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-3">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
              Ask a Specific Question <ArrowUpRight size={14} />
            </Link>
            <a href="#faq-list" className="btn-secondary text-xs py-2.5 px-5">
              Browse All 7 FAQs ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. FAQS LIST SECTION */}
      <section id="faq-list" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="faq">
            <div>
              <p className="eyebrow">General & Project Queries</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Everything You Need to Know
              </h2>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
                Have a custom requirement or blueprints ready? You can share photos and drawings
                with our design team during consultation.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link to="/contact" className="btn-dark text-xs py-2.5 px-5">
                  Request a Consultation <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            <div className="faq-list">
              {faqsData.map((faq) => (
                <details key={faq.q} open>
                  <summary>
                    {faq.q}
                    <span>+</span>
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT CONTACT HELPLINE BANNER */}
      <section className="screen-section theme-dark">
        <div className="section-pad-inner">
          <div className="cta-showcase-grid">
            <div className="cta-block">
              <div>
                <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                  Need Quick Answers?
                </p>
                <h3 className="text-2xl sm:text-4xl font-display font-normal text-white my-2">
                  Talk to a Stonework Specialist
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Have a question that isn't answered here, or want to discuss specific stone types
                  for your local soil and climate? Connect directly with our lead masons.
                </p>
              </div>
              <div className="cta-button-row">
                <a href="tel:+919876543210" className="btn-primary text-xs py-2.5 px-4">
                  <Phone size={14} /> Call +91 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20have%20a%20project%20query"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2.5 px-4"
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="cta-block">
              <div>
                <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                  Project Intake Checklist
                </p>
                <h3 className="text-2xl sm:text-4xl font-display font-normal text-white my-2">
                  What to Prepare Before Inquiring
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  To give you the most accurate timeline and feasibility appraisal, prepare rough
                  site dimensions, location pincode, reference photographs, and preferred stone
                  finishes.
                </p>
              </div>
              <div className="cta-button-row">
                <Link to="/contact" className="btn-primary text-xs py-2.5 px-4">
                  Open Project Enquiry Form <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
