import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Trees,
  Home,
  Landmark,
  Briefcase,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { industriesData } from "@/data/stoneData";
import heroImage from "@/assets/lemurian-hero.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Sectors We Serve | Lemurian Designers" },
      {
        name: "description",
        content:
          "Specialized natural stone craft for private residences, luxury resorts & hotels, commercial spaces, eco-stays, and civic community landmarks.",
      },
    ],
  }),
  component: IndustriesPage,
});

const industryIcons = [Home, Trees, Briefcase, Landmark, Building2];

function IndustriesPage() {
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
          <p className="eyebrow hero-eyebrow text-secondary">
            Stone Solutions for Different Spaces
          </p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Stone solutions for
            <br />
            different spaces.
          </h1>
          <p className="hero-lead text-white/90 text-sm md:text-base leading-relaxed max-w-2xl my-3">
            From intimate residential courtyards to expansive hospitality properties and monumental
            civic installations, our stonework is tailored to the distinct rhythm and environmental
            demands of every sector.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {industriesData.map((ind) => (
              <a
                key={ind.number}
                href={`#sector-${ind.number}`}
                className="category-badge text-[0.68rem] py-0.5 px-2.5 border-white/30 text-white/90 hover:text-white hover:border-white bg-black/20 backdrop-blur-sm"
              >
                <span className="text-secondary font-bold mr-1">{ind.number}</span>
                {ind.title}
              </a>
            ))}
          </div>

          <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-3">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
              Consult For Your Sector <ArrowUpRight size={14} />
            </Link>
            <a href="#sectors-list" className="btn-secondary text-xs py-2.5 px-5">
              Explore 5 Key Sectors ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECTORS OVERVIEW & LIST */}
      <section id="sectors-list" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="mb-12">
            <p className="eyebrow">Tailored Architectural Stonecraft</p>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground my-2">
              Context-Aware Materialization
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Every typology demands a tailored stone selection, bonding technique, finish, and
              structural engineering method.
            </p>
          </div>

          <div className="space-y-24">
            {industriesData.map((ind, idx) => {
              const Icon = industryIcons[idx] || Building2;
              const isReversed = idx % 2 === 1;
              return (
                <article
                  key={ind.number}
                  id={`sector-${ind.number}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-border pb-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="showcase-image-box">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        loading="lazy"
                        style={{ maxHeight: "55vh", objectFit: "cover" }}
                      />
                    </div>
                    <p className="text-xs italic text-muted-foreground mt-2 px-1">
                      “{ind.highlight}”
                    </p>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                        SECTOR {ind.number}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-display font-medium text-foreground my-2 flex items-center gap-2.5">
                      <Icon size={26} className="text-secondary shrink-0" />
                      <span>{ind.title}</span>
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">{ind.tagline}</p>

                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                        Specialized Stonework Installations
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-xs text-foreground bg-black/[0.03] border border-border/80 px-2.5 py-1.5 rounded"
                          >
                            <CheckCircle2 size={13} className="text-secondary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      search={{ service: ind.title }}
                      className="btn-dark text-xs py-2.5 px-4"
                    >
                      Initiate {ind.title.split(" ")[0]} Consultation <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COLLABORATION SECTION */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="service-area-grid">
            <div>
              <p className="eyebrow">Partnership Network</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground">
                Trusted by Architects, Designers & Estate Builders.
              </h2>
            </div>
            <div className="service-area-text">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-6">
                We integrate smoothly into architectural project pipelines, collaborating closely
                with principal architects, structural engineers, and master landscape designers
                across South India and nationwide.
              </p>
              <div className="audience-tags">
                {[
                  "Architects",
                  "Landscape Designers",
                  "Interior Designers",
                  "Builders & Developers",
                  "Resort & Hospitality Owners",
                  "Private Estate Owners",
                  "Civic & Heritage Bodies",
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

      {/* 4. EDITORIAL FOOTER */}
      <SiteFooter />
    </div>
  );
}
