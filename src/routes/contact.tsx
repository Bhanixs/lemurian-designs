import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  UploadCloud,
  CheckCircle2,
  FileText,
  Camera,
  Compass,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/lemurian-hero.jpg";
import contactHeroImage from "@/assets/contact-hero.jpg";

interface ContactSearch {
  service?: string;
}

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Request Consultation | Lemurian Designers" },
      {
        name: "description",
        content:
          "Request a natural stone consultation with Lemurian Designers. Discuss masonry, sculptures, water features, washbasins, resort landscaping, and custom architectural commissions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service: initialService } = Route.useSearch();
  const [selectedService, setSelectedService] = useState<string>(
    initialService || "Stone Laying & Masonry",
  );
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      {/* 1. FULLSCREEN HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={contactHeroImage}
          alt="Consultation background - Lemurian Designers Studio Entrance"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Request Consultation</p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Let’s discuss your project.
            <br />
            Create something lasting.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-3">
            Tell us what you have in mind. Whether you need stone masonry, engraving, sculpting,
            landscaping features or a bespoke stone product, our senior team will review your
            requirements and recommend the ideal path forward.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {[
              "Site Feasibility Review",
              "Material & Quarry Sourcing",
              "Technical Shop Drawings",
              "Custom Sculptural Prototypes",
              "Comprehensive Bill of Quantities",
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
            <a href="#intake-form" className="btn-primary text-xs py-2.5 px-5">
              Fill Intake Form ↓
            </a>
            <a href="tel:+919876543210" className="btn-secondary text-xs py-2.5 px-5">
              <Phone size={13} /> Call Directly: +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-5"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. CONSULTATION FORM & DIRECT CHANNELS SECTION */}
      <section id="intake-form" className="screen-section theme-dark">
        <div className="section-pad-inner">
          <div className="mb-10">
            <p className="eyebrow" style={{ color: "var(--secondary)" }}>
              Project Intake Form
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-white my-2">
              Send Your Project Requirements
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              Fill out the details below. If you have blueprints, site photos, or reference images,
              you can attach them directly.
            </p>
          </div>

          <div className="contact-grid">
            {/* Main Form */}
            <div>
              {submitted ? (
                <div className="form-success-box">
                  <h3>Consultation Request Received</h3>
                  <p>
                    Thank you for reaching out to Lemurian Designers. Our senior stonework
                    specialists will review your project details, location, and references and get
                    back to you within 24 hours.
                  </p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                      style={{
                        background: "transparent",
                        color: "var(--white-soft)",
                        borderColor: "var(--white-soft)",
                      }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        required
                        type="text"
                        placeholder="e.g. Anandha Krishnan"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName">Company or Project Name</label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="e.g. Heritage Sanctuary Resort"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input id="phoneNumber" required type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailAddress">Email Address *</label>
                      <input
                        id="emailAddress"
                        required
                        type="email"
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectLocation">Project Location *</label>
                      <input
                        id="projectLocation"
                        required
                        type="text"
                        placeholder="City, District or State"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="serviceType">Type of Service</label>
                      <select
                        id="serviceType"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="Stone Laying & Masonry">Stone Laying & Masonry</option>
                        <option value="Stone Engraving">Stone Engraving</option>
                        <option value="Stone Sculpting">Stone Sculpting</option>
                        <option value="Resort & Landscape Stone Works">
                          Resort & Landscape Stone Works
                        </option>
                        <option value="Custom Stone Benches">Custom Stone Benches</option>
                        <option value="Stone Fountains & Water Features">
                          Stone Fountains & Water Features
                        </option>
                        <option value="Custom Stone Washbasins">Custom Stone Washbasins</option>
                        <option value="Other Architectural Stonework">
                          Other Architectural Stonework
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectSize">Approximate Project Size / Scope</label>
                      <input
                        id="projectSize"
                        type="text"
                        placeholder="e.g. 1500 sq ft wall, or 2 custom fountains"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeline">Preferred Timeline</label>
                      <input
                        id="timeline"
                        type="text"
                        placeholder="e.g. Immediate, 1-2 months, or Q4"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budgetRange">Budget Range (Optional)</label>
                    <input
                      id="budgetRange"
                      type="text"
                      placeholder="e.g. ₹2,00,000 – ₹10,00,000+"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectDescription">Project Description & Requirements *</label>
                    <textarea
                      id="projectDescription"
                      required
                      rows={4}
                      placeholder="Tell us about your space, architectural style, stone preferences or specific requirements..."
                    />
                  </div>

                  <div className="form-group">
                    <label>Upload Drawings or Reference Images (Optional)</label>
                    <label htmlFor="fileUpload" className="file-upload-input">
                      <UploadCloud size={18} style={{ color: "var(--secondary)" }} />
                      <span>
                        {fileName
                          ? fileName
                          : "Attach architectural plans, sketches, or site photos"}
                      </span>
                      <input
                        id="fileUpload"
                        type="file"
                        accept="image/*,.pdf,.dwg"
                        className="sr-only"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                      Submit Consultation Request <ArrowUpRight size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Details & Direct Actions Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-sidebar-block">
                <span>Direct Inquiries</span>
                <h4>Talk to Us Directly</h4>
                <p>
                  Prefer to speak directly with our team? Connect with our senior stonework
                  consultants.
                </p>
                <div className="sidebar-cta-buttons">
                  <a href="tel:+919876543210" className="btn-secondary" style={{ width: "100%" }}>
                    <Phone size={14} /> Call Us: +91 98765 43210
                  </a>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ width: "100%" }}
                  >
                    <MessageCircle size={14} /> WhatsApp Us Instantly
                  </a>
                </div>
              </div>

              <div className="contact-sidebar-block">
                <span>Email</span>
                <p style={{ marginTop: "0.4rem" }}>
                  <a href="mailto:info@lemuriandesigners.com">
                    <Mail
                      size={13}
                      style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "-2px" }}
                    />
                    info@lemuriandesigners.com
                  </a>
                </p>
              </div>

              <div className="contact-sidebar-block">
                <span>Office & Works Location</span>
                <p style={{ marginTop: "0.4rem" }}>
                  <MapPin
                    size={13}
                    style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "-2px" }}
                  />
                  South India · Projects executed nationwide
                </p>
              </div>

              <div className="contact-sidebar-block">
                <span>Working Hours</span>
                <p style={{ marginTop: "0.4rem" }}>
                  <Clock
                    size={13}
                    style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "-2px" }}
                  />
                  Monday – Saturday: 9:00 AM – 6:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREPARATION CHECKLIST SECTION */}
      <section className="screen-section theme-paper">
        <div className="section-pad-inner">
          <p className="eyebrow">Helpful Tips</p>
          <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
            What to Prepare Before Your Consultation
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8">
            Having a few details ready helps us provide precise material recommendations and
            accurate estimates faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded">
              <div className="p-2.5 bg-forest text-white w-fit rounded mb-3">
                <Compass size={20} />
              </div>
              <h3 className="text-lg font-display text-foreground mb-1.5">
                1. Approximate Measurements
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rough wall square footage, pathway lengths, or desired dimensions for water basins
                and fountains help us gauge block sizes and quarry requirements.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded">
              <div className="p-2.5 bg-forest text-white w-fit rounded mb-3">
                <Camera size={20} />
              </div>
              <h3 className="text-lg font-display text-foreground mb-1.5">2. Site Photographs</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Wide and close-up photos of your site, surrounding architecture, soil levels, and
                access pathways allow our engineers to plan transport logistics.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded">
              <div className="p-2.5 bg-forest text-white w-fit rounded mb-3">
                <FileText size={20} />
              </div>
              <h3 className="text-lg font-display text-foreground mb-1.5">3. Style References</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Any reference photos, Pinterest boards, or architectural drawings showing stone
                textures or colors you admire give our masons immediate aesthetic clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
