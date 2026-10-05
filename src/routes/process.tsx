import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ClipboardCheck,
  Ruler,
  Palette,
  Mountain,
  Wrench,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { processStepsData } from "@/data/stoneData";
import masonryImage from "@/assets/stone-masonry.jpg";
import heroImage from "@/assets/lemurian-hero.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our 7-Step Stonework Process | Lemurian Designers" },
      {
        name: "description",
        content:
          "From concept to completion: Consultation, site assessment, design development, stone selection, crafting, installation, and final inspection.",
      },
    ],
  }),
  component: ProcessPage,
});

const stepIcons = [ClipboardCheck, Ruler, Palette, Mountain, Wrench, CheckCircle2, ShieldCheck];

function ProcessPage() {
  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      {/* 1. FULLSCREEN HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={masonryImage}
          alt="Disciplined Stonework Craftsmanship"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Our Work Process</p>
          <h1 className="font-display font-normal text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.0] my-2">
            From concept to completion.
            <br />
            Disciplined craftsmanship.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-2.5">
            Every stone element undergoes seven rigorous phases. We combine traditional stonemason
            intuition with modern laser alignment and engineering oversight, ensuring structural
            integrity and aesthetic distinction for generations.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {processStepsData.map((step) => (
              <a
                key={step.number}
                href={`#phase-${step.number}`}
                className="category-badge text-[0.68rem] py-0.5 px-2.5 border-white/30 text-white/90 hover:text-white hover:border-white bg-black/20 backdrop-blur-sm"
              >
                <span className="text-secondary font-bold mr-1">{step.number}</span>
                {step.phase}
              </a>
            ))}
          </div>

          <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-3">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
              Begin Phase 01 Consultation <ArrowUpRight size={14} />
            </Link>
            <a href="#process-roadmap" className="btn-secondary text-xs py-2.5 px-5">
              Explore All 7 Phases ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE OF 7 PHASES */}
      <section id="process-roadmap" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="mb-12">
            <p className="eyebrow">The 7-Step Architectural Delivery Model</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
              Structured Precision at Every Milestones
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Clear deliverables, rigorous site assessments, stone provenance validation, and
              uncompromising masonry tolerances.
            </p>
          </div>

          <div className="space-y-16">
            {processStepsData.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle2;
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={step.number}
                  id={`phase-${step.number}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-border pb-16"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-forest text-white rounded">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                          PHASE {step.number}
                        </span>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                          {step.phase}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-display font-medium text-foreground my-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-foreground/90 mb-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                      {step.details}
                    </p>
                    <div className="p-3 bg-card border border-border rounded text-xs">
                      <span className="font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        Phase Deliverables
                      </span>
                      <span className="text-foreground font-medium">{step.deliverables}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="showcase-image-box overflow-hidden rounded-sm border border-border/60">
                      <img
                        src={step.image}
                        alt={`Phase ${step.number}: ${step.title} - ${step.phase}`}
                        loading="lazy"
                        className="w-full h-auto max-h-[35vh] object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. QUALITY PRINCIPLES SECTION */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="strengths-grid">
            <div>
              <p className="eyebrow">The Lemurian Standard</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Built for Multi-Generational Durability.
              </h2>
              <p className="strengths-lead text-sm sm:text-base text-muted-foreground leading-relaxed my-4">
                Our installations are engineered to withstand shifting soils, monsoonal rainfall,
                and thermal weathering. We build not for decades, but for centuries.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link to="/contact" className="btn-dark">
                  Book a Site Feasibility Assessment <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
            <div className="strength-list">
              {[
                "Precision laser leveling and plumb alignment",
                "Subterranean gravel foundation drainage",
                "Non-staining natural stone breathable sealants",
                "Quarry tensile test verification before shipment",
                "Dry-run factory assembly before site dispatch",
                "Post-installation maintenance advisory and warranty",
              ].map((rule) => (
                <p key={rule}>
                  <span>{rule}</span>
                  <CheckCircle2 size={14} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
