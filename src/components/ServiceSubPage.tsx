import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Layers,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { type NavSubItem, findSubPageByPath } from "@/lib/site-nav";
import { servicesData, portfolioProjects, servicesProcessSteps } from "@/data/stoneData";
import { heroImage, lazyImage } from "@/lib/responsive-image";

interface ServiceSubPageProps {
  item: NavSubItem;
}

export function ServiceSubPage({ item }: ServiceSubPageProps) {
  // Find matching service data item
  const serviceDetail = servicesData.find((s) => s.number === item.number) || servicesData[0];

  // Specific project spotlight matching this discipline
  const matchedProject =
    portfolioProjects.find((p) => {
      if (item.number === "01") return p.id === "grounded-passage";
      if (item.number === "03") return p.id === "continuum-sculpture";
      if (item.number === "06") return p.id === "resort-fountain-spotlight";
      if (item.number === "07") return p.id === "weathered-monolith-basin";
      return false;
    }) || null;

  // Resolve related items
  const relatedItems = item.relatedPaths
    .map((path) => findSubPageByPath(path))
    .filter((rel): rel is NavSubItem => Boolean(rel));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
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
            alt={`${item.label} craftsmanship - Lemurian Designers`}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
          <div className="hero-shade" />

          <div className="hero-copy relative z-10 max-w-5xl mt-auto">
            <Breadcrumbs items={breadcrumbs} className="mb-3" />
            <p className="eyebrow hero-eyebrow text-secondary">
              Discipline {item.number} • Natural Stone Craft
            </p>
            <h1 className="font-display font-normal text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.05] my-2">
              {item.h1}
            </h1>
            <p className="hero-lead text-white/95 text-sm md:text-base leading-relaxed max-w-3xl my-2">
              {item.description}
            </p>
            <p className="text-white/80 text-xs md:text-sm italic leading-relaxed max-w-2xl mb-3">
              “{item.tagline}”
            </p>

            <div className="hero-cta-group flex flex-wrap gap-3 items-center mt-4">
              <Link
                to="/contact"
                search={{ service: item.serviceKey }}
                className="btn-primary text-xs py-2.5 px-5"
              >
                Request {item.label} Consultation <ArrowUpRight size={14} />
              </Link>
              <a href="#specifications" className="btn-secondary text-xs py-2.5 px-5">
                Explore Craft Inclusions ↓
              </a>
            </div>
          </div>
        </section>

        {/* 2. SPECIFICATIONS & CRAFT INCLUSIONS */}
        <section id="specifications" className="screen-section theme-paper">
          <div className="section-pad-inner">
            <div className="mb-12 max-w-3xl">
              <p className="eyebrow">Execution Standards</p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                Craft Execution & Scope of Work
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {serviceDetail.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {serviceDetail.inclusions.map((inclusion, idx) => (
                <div
                  key={inclusion}
                  className="p-5 bg-black/[0.02] border border-border rounded-sm flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <span className="text-[0.65rem] font-mono text-muted-foreground tracking-wider uppercase block mb-1">
                      SPECIFICATION 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {inclusion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ideal For Applications */}
            <div className="p-6 bg-black/[0.02] border border-border rounded-sm">
              <h3 className="text-base font-display font-medium text-foreground mb-3">
                Ideal Architectural Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceDetail.idealFor.map((application) => (
                  <span
                    key={application}
                    className="text-xs font-medium text-foreground bg-stone-100 dark:bg-stone-900 border border-border px-3 py-1.5 rounded-sm"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. MATERIAL MASTERY & PROVENANCE */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">Material Integrity</p>
                <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                  Geological Selection & Artisanal Techniques
                </h2>
                <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                  We work with dense natural granites, basalts, crystalline marbles, slates, and
                  sandstones sourced directly from verified South Indian quarries. Each block is
                  inspected for structural integrity, grain density, moisture resistance, and
                  character.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Centuries-old stone carving traditions from the Chola heartland are seamlessly
                  integrated with 3D CAD modeling, diamond-tipped multi-axis CNC machines, and
                  hand-chisel surface texturing at our Puducherry craft studio.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <Sparkles size={14} className="text-secondary shrink-0" />
                    <span>Low-Waste Fabrication</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <ShieldCheck size={14} className="text-secondary shrink-0" />
                    <span>Food-Grade & UV Sealing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <Layers size={14} className="text-secondary shrink-0" />
                    <span>Subterranean Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <Compass size={14} className="text-secondary shrink-0" />
                    <span>Pan-India Turnkey Delivery</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="showcase-image-box">
                  <img
                    {...lazyImage(serviceDetail.image)}
                    alt={`${item.label} material execution - Lemurian Designers`}
                    style={{ maxHeight: "48vh", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORKFLOW & EXECUTION STANDARDS */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow">Turnkey Delivery</p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                Execution Workflow for {item.label}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From initial site discovery to structural assembly and lifelong aftercare, our
                five-stage delivery ensures uncompromising quality.
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

        {/* 5. PORTFOLIO SPOTLIGHT (WHERE AVAILABLE) */}
        {matchedProject && (
          <section className="screen-section theme-paper border-t border-border">
            <div className="section-pad-inner">
              <p className="eyebrow">Proven Realization</p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-2">
                Project Spotlight: {matchedProject.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                <div className="lg:col-span-6">
                  <div className="showcase-image-box">
                    <img
                      {...lazyImage(matchedProject.image)}
                      alt={`${matchedProject.title} - Lemurian Designers`}
                      style={{ maxHeight: "48vh", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {matchedProject.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border text-xs">
                    <div>
                      <span className="text-muted-foreground uppercase font-bold text-[0.65rem] block">
                        Location
                      </span>
                      <span className="font-semibold text-foreground">
                        {matchedProject.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground uppercase font-bold text-[0.65rem] block">
                        Materials
                      </span>
                      <span className="font-semibold text-foreground">
                        {matchedProject.materials}
                      </span>
                    </div>
                    {matchedProject.dimensions && (
                      <div>
                        <span className="text-muted-foreground uppercase font-bold text-[0.65rem] block">
                          Scope & Scale
                        </span>
                        <span className="font-semibold text-foreground">
                          {matchedProject.dimensions}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6. CALL TO ACTION & STUDIO CONTACT */}
        <section className="screen-section theme-paper border-t border-border text-center">
          <div className="section-pad-inner max-w-4xl mx-auto">
            <p className="eyebrow text-secondary">Commission Your Stonework</p>
            <h2 className="text-2xl sm:text-4xl font-display text-foreground my-3">
              Ready to discuss your {item.label.toLowerCase()} requirements?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you are an architect specifying custom stonework or a property owner building
              a legacy home, our studio is ready to provide stone samples, CAD details, and cost
              estimates.
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
                    Direct Studio Line
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
                    Craft Facility
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
                Request Consultation <ArrowUpRight size={14} />
              </Link>
              <a
                href={`https://wa.me/919500809487?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(item.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark-outline py-3 px-6 text-xs uppercase tracking-wider font-bold flex items-center gap-2"
              >
                <MessageCircle size={14} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>

        {/* 7. CROSS-LINKING & RELATED DISCIPLINES */}
        <section className="screen-section theme-paper border-t border-border">
          <div className="section-pad-inner">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="eyebrow">Disciplined Stonecraft</p>
                <h2 className="text-xl sm:text-3xl font-display font-normal text-foreground">
                  Related Stone Craft Disciplines
                </h2>
              </div>
              <Link
                to="/services"
                className="text-xs font-semibold text-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft size={13} /> Return to All 7 Disciplines
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
