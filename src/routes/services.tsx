import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Layers,
  Truck,
  Leaf,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { servicesData, whyLemurianData, servicesProcessSteps } from "@/data/stoneData";
import servicesHeroImage from "@/assets/services-hero.jpg";
import materialBreakImage from "@/assets/material-break.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Lemurian Designers | Custom Stone Work, Engraving, Sculpting & Landscape Stone Services",
      },
      {
        name: "description",
        content:
          "Bespoke stone solutions across 7 disciplines—laying, engraving, sculpting, kitchens, fountains, basins & resort stone work. Handcrafted precision, modern CNC, pan-India delivery.",
      },
      {
        name: "keywords",
        content:
          "stone work company, custom stone services, stone engraving, stone sculpting, resort stone work, stone kitchen countertops, stone fountains, stone washbasins, stone masonry contractors, granite engraving, marble sculpture, sandstone landscaping, monolithic stone basins, temple stone work, CNC stone carving, luxury stone kitchens, outdoor water features",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      {/* 1. FULLSCREEN HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={servicesHeroImage}
          alt="Natural Stonework background - Lemurian Designers"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Lemurian Designers</p>
          <h1 className="font-display font-normal text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.0] my-2">
            Seven Disciplines.
            <br />
            One Uncompromised Standard.
          </h1>
          <p className="hero-lead text-white/95 text-sm md:text-base leading-relaxed max-w-3xl my-2">
            At Lemurian Designers, stone is more than material—it’s memory, craft, and legacy. From
            hand-carved sculptures to precision-engineered kitchen counters, we deliver bespoke
            stone solutions across seven specialized disciplines, unified by a single standard of
            excellence.
          </p>
          <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-2xl mb-3 hidden sm:block">
            Whether you’re building a luxury resort, designing a heritage home, or creating a
            statement water feature, our master artisans and modern CNC capabilities ensure every
            project is timeless, durable, and uniquely yours.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {servicesData.map((svc) => (
              <a
                key={svc.number}
                href={`#service-${svc.number}`}
                className="category-badge text-[0.68rem] py-0.5 px-2.5 border-white/30 text-white/90 hover:text-white hover:border-white bg-black/20 backdrop-blur-sm"
              >
                <span className="text-secondary font-bold mr-1">{svc.number}</span>
                {svc.title}
              </a>
            ))}
          </div>

          <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-3">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
              Book a Site Consultation <ArrowUpRight size={14} />
            </Link>
            <a href="#services-list" className="btn-secondary text-xs py-2.5 px-5">
              Explore All 7 Disciplines ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICES CATALOG (THE 7 DISCIPLINES) */}
      <section id="services-list" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow">Our Stone Craft Disciplines</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
              Seven Disciplines. One Uncompromised Standard.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From hand-carved sculptures to precision-engineered kitchen counters, explore our
              complete turnkey solutions below.
            </p>
          </div>

          <div className="space-y-24">
            {servicesData.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article
                  key={service.number}
                  id={`service-${service.number}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-border pb-20 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Image Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="showcase-image-box">
                      <img
                        src={service.image}
                        alt={`${service.title} - Lemurian Designers`}
                        loading="lazy"
                        style={{ maxHeight: "55vh", objectFit: "cover" }}
                      />
                    </div>
                    <p className="text-xs italic text-muted-foreground mt-2.5 px-1">
                      “{service.tagline}”
                    </p>
                  </div>

                  {/* Content Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                        DISCIPLINE {service.number}
                      </span>
                      <span className="text-border">•</span>
                      <span className="text-[0.65rem] tracking-wider uppercase text-muted-foreground font-semibold">
                        Bespoke Stonework
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-medium text-foreground my-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-foreground/85 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Ideal For Tags */}
                    <div className="mb-5">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                        Ideal For
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.idealFor.map((item) => (
                          <span
                            key={item}
                            className="text-[0.72rem] font-medium text-foreground bg-stone-100 dark:bg-stone-900 border border-border px-2.5 py-1 rounded-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scope & Inclusions */}
                    <div className="mb-6">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                        Craft Execution & Inclusions
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.inclusions.map((inc) => (
                          <div
                            key={inc}
                            className="flex items-start gap-2 text-xs text-foreground bg-black/[0.02] border border-border/70 px-2.5 py-1.5 rounded-sm"
                          >
                            <CheckCircle2 size={13} className="text-secondary shrink-0 mt-0.5" />
                            <span className="leading-snug">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SEO Keywords Pill Rail */}
                    <div className="mb-6 flex flex-wrap gap-1 items-center">
                      <span className="text-[0.62rem] uppercase font-bold text-muted-foreground mr-1">
                        Keywords:
                      </span>
                      {service.seoKeywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-[0.62rem] font-mono text-muted-foreground bg-black/[0.03] px-2 py-0.5 rounded-sm"
                        >
                          #{kw.replace(/\s+/g, "-")}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to="/contact"
                        search={{ service: service.serviceKey }}
                        className="btn-dark text-xs py-2.5 px-4"
                      >
                        {service.ctaText} <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={`https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark-outline text-xs py-2.5 px-4"
                      >
                        <MessageCircle size={13} /> WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY LEMURIAN DESIGNERS */}
      <section className="screen-section theme-paper border-t border-border">
        <div className="section-pad-inner">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">The Lemurian Standard</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
              Why Lemurian Designers?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Centuries of Chola stone carving traditions seamlessly integrated with modern CNC
              precision and architectural engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyLemurianData.map((item, idx) => {
              const icons = [Sparkles, ShieldCheck, Layers, Truck, Leaf];
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={item.title}
                  className="p-6 bg-black/[0.02] border border-border rounded-sm hover:border-secondary/60 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-4">
                      <IconComponent size={19} />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/50 text-[0.65rem] font-mono text-secondary tracking-widest uppercase font-semibold">
                    PILLAR 0{idx + 1}
                  </div>
                </div>
              );
            })}

            {/* 6th Studio Feature Card */}
            <div className="p-6 bg-forest text-red-400 border border-border rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-4">
                  <Compass size={19} />
                </div>
                <h3 className="font-display text-xl text-black mb-2">Puducherry Craft Studio</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Visit our carving facility to inspect stone slabs, review chiseling textures, and
                  align on custom scale mockups with our master sculptors.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/20">
                <Link
                  to="/contact"
                  className="text-xs text-secondary hover:text-white font-semibold inline-flex items-center gap-1"
                >
                  Schedule Studio Visit <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS OVERVIEW */}
      <section className="screen-section theme-paper border-t border-border">
        <div className="section-pad-inner">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="eyebrow">Disciplined Workflow</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
                Our Process
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                From initial spatial consultation to lifelong stone aftercare, our workflow ensures
                uncompromising quality at every milestone.
              </p>
            </div>
            <Link to="/process" className="btn-dark-outline text-xs whitespace-nowrap">
              Explore 7-Phase Execution Guide <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {servicesProcessSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 bg-black/[0.02] border border-border rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-secondary mb-2">
                    {step.step}
                  </div>
                  <h4 className="font-display text-base font-medium text-foreground mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MATERIAL BREAK QUOTE */}
      <section className="material-break">
        <img
          src={materialBreakImage}
          loading="lazy"
          width={1920}
          height={1280}
          alt="Terraced stone architecture and dry masonry landscape"
        />
        <blockquote>
          “Stone should not simply be used as a building material. It should shape the atmosphere,
          character and long-term identity of a space.”
        </blockquote>
      </section>

      {/* 6. CONVERSION & DIRECT CONTACT SECTION */}
      <section className="screen-section theme-paper text-center">
        <div className="section-pad-inner max-w-4xl mx-auto">
          <p className="eyebrow text-secondary">Seven disciplines. One uncompromised standard.</p>
          <h2 className="text-3xl sm:text-5xl font-display text-foreground my-3">
            Ready to bring your stone vision to life?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you are building a luxury resort, designing a heritage home, or commissioning a
            bespoke monolithic sculpture, our master artisans and CNC capabilities ensure timeless
            longevity.
          </p>

          {/* Action Channels from PDF: Call Us | Email Us | Visit Puducherry Studio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            <a
              href="tel:+919876543210"
              className="p-4 rounded border border-border bg-black/[0.02] hover:bg-black/[0.04] transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold tracking-wider text-muted-foreground block">
                  Call Direct
                </span>
                <span className="text-xs font-semibold text-foreground">+91 98765 43210</span>
              </div>
            </a>

            <a
              href="mailto:enquiry@lemurian.in"
              className="p-4 rounded border border-border bg-black/[0.02] hover:bg-black/[0.04] transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold tracking-wider text-muted-foreground block">
                  Email Us
                </span>
                <span className="text-xs font-semibold text-foreground">enquiry@lemurian.in</span>
              </div>
            </a>

            <Link
              to="/contact"
              className="p-4 rounded border border-border bg-black/[0.02] hover:bg-black/[0.04] transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-[0.65rem] uppercase font-bold tracking-wider text-muted-foreground block">
                  Visit Studio
                </span>
                <span className="text-xs font-semibold text-foreground">Puducherry, India</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="btn-dark py-3 px-6 text-xs uppercase tracking-wider font-bold"
            >
              Request Consultation <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/work"
              className="btn-dark-outline py-3 px-6 text-xs uppercase tracking-wider font-bold"
            >
              Browse Completed Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
