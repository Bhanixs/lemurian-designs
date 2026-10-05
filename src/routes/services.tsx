import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { servicesData } from "@/data/stoneData";
import heroImage from "@/assets/lemurian-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Stone Masonry & Craft Services | Lemurian Designers" },
      {
        name: "description",
        content:
          "Explore our 7 core stonework capabilities: Stone laying & masonry, custom engraving, monolithic sculpting, resort landscape stonework, benches, fountains, and washbasins.",
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
          src={heroImage}
          alt="Natural Stonework background"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Our Capabilities</p>
          <h1 className="font-display font-normal text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.0] my-2">
            Stonework for spaces that
            <br />
            deserve to be remembered.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-2.5">
            Crafted for homes, resorts, gardens, hospitality spaces, commercial properties and
            landmark projects. We bring together geological provenance, ancestral masonry
            traditions, and contemporary architectural sensibilities.
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
              Explore All 7 Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICES CATALOG */}
      <section id="services-list" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="mb-12">
            <p className="eyebrow">Comprehensive Stonework Solutions</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
              Seven Disciplines. One Uncompromising Standard.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Every cut, joint, texture, and curve is resolved with engineering precision and deep
              respect for natural stone geology.
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
                        alt={service.title}
                        loading="lazy"
                        style={{ maxHeight: "55vh", objectFit: "cover" }}
                      />
                    </div>
                    <p className="text-xs italic text-muted-foreground mt-2 px-1">
                      “{service.tagline}”
                    </p>
                  </div>

                  {/* Content Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                      SERVICE {service.number}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-medium text-foreground my-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                        Scope & Key Inclusions
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.inclusions.map((inc) => (
                          <div
                            key={inc}
                            className="flex items-center gap-2 text-xs text-foreground bg-black/[0.03] border border-border/80 px-2.5 py-1.5 rounded"
                          >
                            <CheckCircle2 size={13} className="text-secondary shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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

      {/* 3. MATERIAL BREAK QUOTE */}
      <section className="material-break">
        <img
          src={heroImage}
          loading="lazy"
          width={1920}
          height={1280}
          alt="Granite stone sculpture surrounded by tropical landscape planting"
        />
        <blockquote>
          “Stone should not simply be used as a building material. It should shape the atmosphere,
          character and long-term identity of a space.”
        </blockquote>
      </section>

      {/* 4. CONSULTATION PROMPT */}
      <section className="screen-section theme-paper text-center">
        <div className="section-pad-inner max-w-3xl mx-auto">
          <p className="eyebrow">Ready to Bring Natural Stone to Your Space?</p>
          <h2 className="text-3xl sm:text-5xl font-display text-foreground my-3">
            Every project begins with a conversation.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Whether you need a custom-cut monolithic fountain or hundreds of running feet of dry
            stone masonry, we assist from stone provenance selection through final execution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-dark">
              Request Project Consultation <ArrowUpRight size={14} />
            </Link>
            <Link to="/work" className="btn-dark-outline">
              Browse Completed Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
