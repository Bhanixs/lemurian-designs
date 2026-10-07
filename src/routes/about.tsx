import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Eye, Compass, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { strengthsData } from "@/data/stoneData";
import sculptureImage from "@/assets/stone-sculpture-3.png";
import aboutHeroImage from "@/assets/about-hero.jpg";
import manifestoImage from "@/assets/about-manifesto.jpg";
import strengthsImage from "@/assets/about-strengths.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lemurian Designers | Philosophy & Craft" },
      {
        name: "description",
        content:
          "Learn about Lemurian Designers' vision, mission, stonework philosophy, craftsmanship strengths, and nationwide service areas.",
      },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      {/* 1. FULLSCREEN HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={aboutHeroImage}
          alt="Studio Stonework - Lemurian Designers Atelier"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">About Lemurian Designers</p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Where natural stone
            <br />
            becomes design.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-3">
            Natural stone holds a permanence that few modern materials can match. We work with the
            inherent texture, strength and presence of stone to craft structures, surfaces and focal
            points that endure for generations.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {[
              "Geological Selection",
              "Heritage Craftsmanship",
              "Architectural Integration",
              "Structural Masonry",
              "Monolithic Art",
              "South India & Beyond",
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
              Connect With Our Studio <ArrowUpRight size={14} />
            </Link>
            <a href="#about-manifesto" className="btn-secondary text-xs py-2.5 px-5">
              Explore Studio Philosophy ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & MANIFESTO */}
      <section id="about-manifesto" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <p className="eyebrow">Studio Manifesto</p>
          <div className="manifesto-grid">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Craftsmanship with an Architectural Perspective.
              </h2>
              <div className="showcase-image-box mt-6 overflow-hidden rounded-sm shadow-md">
                <img
                  src={manifestoImage}
                  alt="Architectural stone craftsmanship - Lemurian Designers"
                  className="w-full h-[280px] sm:h-[340px] object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="manifesto-note">
              <p>
                Stone has the power to make a space feel grounded, enduring and memorable. Lemurian
                Designers works with the natural character of stone to create structures and design
                elements that are both practical and visually distinctive.
              </p>
              <p>
                Our team undertakes stone laying, masonry, engraving, sculpting, landscaping
                features and custom stone fabrication. Whether you need a feature wall, a resort
                pathway, a sculpted installation or a custom washbasin, we bring attention to detail
                from concept to completion.
              </p>
              <p>
                We create stonework that complements the architecture, landscape and purpose of
                every project.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Eye size={18} />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl font-display font-normal">A trusted name in stone design</h3>
              <p>
                To become a widely trusted benchmark in premium natural stone craftsmanship,
                recognized for integrity, structural permanence, and understated artistic luxury.
              </p>
            </div>
            <div className="vm-card">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Compass size={18} />
                <span>Our Mission</span>
              </div>
              <h3 className="text-2xl font-display font-normal">Meaningful, durable & refined</h3>
              <p>
                To create meaningful, durable and visually refined stonework that enhances the way
                people experience homes, resorts, gardens and public spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCULPTURAL SPOTLIGHT */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="showcase-image-box">
                <img
                  src={sculptureImage}
                  alt="Sculptural stonework"
                  loading="lazy"
                  style={{
                    maxHeight: "55vh",
                    objectFit: "contain",
                    background: "var(--paper-light)",
                  }}
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow text-muted-foreground">The Natural Element</p>
              <h2 className="text-3xl sm:text-4xl font-display font-normal text-foreground my-2">
                Geological Provenance Meets Master Detailing
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                We work directly with certified quarries across Southern India, sourcing granite,
                basalt, slate, river rock, and sandstone of exceptional density and vein character.
                Each block is hand-inspected for structural integrity before being chiseled.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                Our master masons and carvers come from multi-generational stone craft lineages,
                bringing tactile wisdom that no modern machine can fully replicate.
              </p>
              <Link to="/services" className="btn-dark text-xs py-2.5 px-4">
                Explore Our Stone Capabilities <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR 10 CORE STRENGTHS */}
      <section className="screen-section theme-paper">
        <div className="section-pad-inner">
          <p className="eyebrow">Why Choose Lemurian Designers?</p>
          <div className="strengths-grid">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Built on Craft & Design Distinction.
              </h2>
              <p className="strengths-lead text-sm sm:text-base text-muted-foreground leading-relaxed my-4">
                We do more than install stone. We help shape how stone contributes to the
                experience, character, and generational identity of a space.
              </p>
              <div className="showcase-image-box mt-4 overflow-hidden rounded-sm shadow-md">
                <img
                  src={strengthsImage}
                  alt="Stone masonry craft distinction - Lemurian Designers"
                  className="w-full h-[280px] sm:h-[340px] object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="strength-list">
              {strengthsData.map((strength) => (
                <p key={strength.title}>
                  <span>{strength.title}</span>
                  <CheckCircle2 size={14} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE REGIONS & NETWORK */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="service-area-grid">
            <div>
              <p className="eyebrow">Service Area & Geographic Reach</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Serving Projects Across South India and Beyond.
              </h2>
            </div>
            <div className="service-area-text">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4">
                Lemurian Designers undertakes selected stone design, masonry, engraving and
                landscaping projects across Tamil Nadu, Karnataka, Kerala, and national locations.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-6">
                We collaborate with homeowners, architects, interior designers, landscape designers,
                builders, resort owners, hospitality groups, and developers.
              </p>
              <div className="audience-tags">
                {[
                  "Homeowners",
                  "Architects",
                  "Interior Designers",
                  "Landscape Designers",
                  "Builders",
                  "Resort Owners",
                  "Hospitality Groups",
                  "Developers",
                ].map((tag) => (
                  <span key={tag} className="audience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
