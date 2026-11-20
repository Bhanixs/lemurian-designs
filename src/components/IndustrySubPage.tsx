import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Building2,
  Trees,
  Home,
  Landmark,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { type NavSubItem, findSubPageByPath } from "@/lib/site-nav";
import { industriesData, servicesProcessSteps } from "@/data/stoneData";
import { heroImage, lazyImage } from "@/lib/responsive-image";

interface IndustrySubPageProps {
  item: NavSubItem;
}

const sectorIcons: Record<string, typeof Home> = {
  "01": Landmark,
  "02": Briefcase,
  "03": Home,
  "04": Trees,
  "05": Building2,
};

export function IndustrySubPage({ item }: IndustrySubPageProps) {
  // Find matching industry data item
  const industryDetail =
    industriesData.find((ind) => ind.number === item.number) || industriesData[0];
  const Icon = sectorIcons[item.number] || Building2;

  // Resolve related items
  const relatedItems = item.relatedPaths
    .map((path) => findSubPageByPath(path))
    .filter((rel): rel is NavSubItem => Boolean(rel));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: item.label },
  ];

  return (
    <div className="page-layout">
      <Navbar theme="dark" />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* 1. HERO SECTION */}
        <section className="hero hero-subpage theme-dark">
          <img
            {...heroImage(item.image)}
            alt={`${item.label} architectural stonework - Lemurian Designers`}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
          <div className="hero-shade" />

          <div className="hero-copy relative z-10 max-w-5xl mt-auto">
            <Breadcrumbs items={breadcrumbs} className="mb-3" />
            <div className="flex items-center gap-2 mb-1">
              <Icon size={18} className="text-secondary" />
              <p className="eyebrow hero-eyebrow text-secondary my-0">
                Sector {item.number} • Architectural Stonework
              </p>
            </div>
            <h1 className="font-display font-normal text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.05] my-2">
              {item.h1}
            </h1>
            <p className="hero-lead text-white/95 text-sm md:text-base leading-relaxed max-w-3xl my-2">
              {item.description}
            </p>
            {item.highlight && (
              <p className="text-white/80 text-xs md:text-sm italic leading-relaxed max-w-2xl mb-3">
                “{item.highlight}”
              </p>
            )}

            <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-4">
              <Link
                to="/contact"
                search={{ service: item.serviceKey }}
                className="btn-primary text-xs py-2.5 px-5"
              >
                Initiate {item.label.split(" ")[0]} Consultation <ArrowUpRight size={14} />
              </Link>
              <a href="#installations" className="btn-secondary text-xs py-2.5 px-5">
                View Specialized Installations ↓
              </a>
            </div>
          </div>
        </section>

        {/* 2. SPECIALIZED INSTALLATIONS */}
        <section id="installations" className="screen-section theme-paper">
          <div className="section-pad-inner">
            <div className="mb-12 max-w-3xl">
              <p className="eyebrow">Sector Capabilities</p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                Specialized Stonework Installations
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {industryDetail.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {industryDetail.items.map((installation, idx) => (
                <div
                  key={installation}
                  className="p-5 bg-black/[0.02] border border-border rounded-sm flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-mono text-muted-foreground tracking-wider uppercase block mb-1">
                      INSTALLATION 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {installation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CONTEXT-AWARE MATERIALIZATION */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Environmental Demands</p>
                <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                  Context-Aware Materialization & Durability
                </h2>
                <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                  Every typology demands a tailored stone selection, bonding technique, finish, and
                  structural engineering method. For {item.label.toLowerCase()}, we factor in heavy
                  foot traffic, monsoon weathering, soil load-bearing capacities, and long-term
                  maintenance.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  From non-slip flamed pathways to monolithic water-resistant wash fixtures and
                  reinforced retaining structures, every component is engineered to age with
                  dignity and multi-generational permanence.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <Sparkles size={14} className="text-secondary shrink-0" />
                    <span>Non-Slip Textures</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <Layers size={14} className="text-secondary shrink-0" />
                    <span>Weather-Resistant Sealing</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="showcase-image-box">
                  <img
                    {...lazyImage(industryDetail.image)}
                    alt={`${item.label} stonework craftsmanship - Lemurian Designers`}
                    style={{ maxHeight: "48vh", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PARTNERSHIP & COLLABORATION */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="max-w-3xl mb-10">
              <p className="eyebrow">Partnership Network</p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                Collaboration with Architects & Estate Builders
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We integrate smoothly into architectural project pipelines, collaborating closely
                with principal architects, landscape designers, structural engineers, and property
                developers across South India and nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {servicesProcessSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 bg-black/[0.02] border border-border rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xl font-bold text-secondary mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="font-display text-base font-medium text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION & CONTACT */}
        <section className="screen-section theme-paper border-t border-border text-center">
          <div className="section-pad-inner max-w-4xl mx-auto">
            <p className="eyebrow text-secondary">Initiate Collaboration</p>
            <h2 className="text-2xl sm:text-4xl font-display text-foreground my-3">
              Planning stonework for {item.label.toLowerCase()}?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Our master artisans and engineering team are ready to review your architectural
              drawings, offer stone recommendations, and structure a complete turnkey proposal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
              <a
                href="tel:+919500809487"
                className="p-4 rounded border border-border bg-black/[0.02] hover:bg-black/[0.04] transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold tracking-wider text-muted-foreground block">
                    Direct Phone
                  </span>
                  <span className="text-xs font-semibold text-foreground">+91 95008 09487</span>
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
                    Email Inquiries
                  </span>
                  <span className="text-xs font-semibold text-foreground">enquiry@lemurian.in</span>
                </div>
              </a>

              <Link
                to="/contact"
                search={{ service: item.serviceKey }}
                className="p-4 rounded border border-border bg-black/[0.02] hover:bg-black/[0.04] transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold tracking-wider text-muted-foreground block">
                    Studio Visit
                  </span>
                  <span className="text-xs font-semibold text-foreground">Puducherry, India</span>
                </div>
              </Link>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                search={{ service: item.serviceKey }}
                className="btn-dark py-3 px-6 text-xs uppercase tracking-wider font-bold"
              >
                Request Sector Consultation <ArrowUpRight size={14} />
              </Link>
              <a
                href={`https://wa.me/919500809487?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20stonework%20for%20${encodeURIComponent(item.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark-outline py-3 px-6 text-xs uppercase tracking-wider font-bold flex items-center gap-2"
              >
                <MessageCircle size={14} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>

        {/* 6. CROSS-LINKING & RELATED SECTORS */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="eyebrow">Typology Exploration</p>
                <h2 className="text-xl sm:text-3xl font-display font-normal text-foreground">
                  Explore Related Sectors & Disciplines
                </h2>
              </div>
              <Link
                to="/industries"
                className="text-xs font-semibold text-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft size={13} /> Return to All Sectors
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.slug}
                  to={rel.path}
                  className="group p-5 bg-black/[0.02] border border-border rounded-sm hover:border-secondary/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase block mb-1">
                      {rel.category === "service" ? `DISCIPLINE ${rel.number}` : `SECTOR ${rel.number}`}
                    </span>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-secondary transition-colors mb-2">
                      {rel.label}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground inline-flex items-center gap-1 mt-4 pt-3 border-t border-border/50">
                    Explore Details <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
