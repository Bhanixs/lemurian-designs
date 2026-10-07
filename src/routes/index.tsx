import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  UploadCloud,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageModal } from "@/components/ImageModal";
import { Logo } from "@/components/Logo";
import {
  servicesData,
  portfolioProjects,
  industriesData,
  processStepsData,
  strengthsData,
  faqsData,
} from "@/data/stoneData";

import heroImage from "@/assets/lemurian-hero.jpg";
import masonryImage from "@/assets/stone-masonry.jpg";
import sculptureImage from "@/assets/stone-sculpture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lemurian Designers | Natural Stone Design & Masonry" },
      {
        name: "description",
        content:
          "Lemurian Designers creates premium natural stone walls, engravings, sculptures, benches, fountains, washbasins and resort landscape features with precision craftsmanship.",
      },
      {
        name: "keywords",
        content:
          "Stone masonry work, Natural stone design, Stone engraving and sculpting, Custom stone benches, Stone fountains, Stone washbasins, Resort stone landscaping, Stone wall construction",
      },
      {
        property: "og:title",
        content: "Lemurian Designers | Stone Masonry, Engraving & Custom Stone Works",
      },
      {
        property: "og:description",
        content:
          "Lemurian Designers creates premium natural stone environments and handcrafted architectural features for spaces that deserve to be remembered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("Stone Laying & Masonry");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);
  const [activeProcessIdx, setActiveProcessIdx] = useState(0);
  const [activeFaqIdx, setActiveFaqIdx] = useState(0);

  const [modalImage, setModalImage] = useState<{
    src: string;
    title: string;
    caption?: string;
  } | null>(null);

  const currentProject = portfolioProjects[activeProjectIdx];
  const currentService = servicesData[activeServiceIdx];
  const currentIndustry = industriesData[activeIndustryIdx];
  const currentProcess = processStepsData[activeProcessIdx];
  const currentFaq = faqsData[activeFaqIdx];

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToNext = (targetId: string) => {
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="screen-snap-container">
      <Navbar theme="dark" />

      {/* 1. HERO SECTION */}
      <section id="top" className="hero theme-dark">
        <img
          src={heroImage}
          width={1920}
          height={1280}
          alt="Hand-shaped granite craftsmanship in a tropical stone courtyard"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">
            Natural Stone Craftsmanship for Remarkable Spaces
          </p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Stone, Shaped Into
            <br />
            Lasting Experiences.
          </h1>

          <p className="hero-lead text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl my-2">
            At Lemurian Designers, we transform natural stone into functional, artistic and
            architectural elements that give every space a distinctive identity. From carefully laid
            stone walls and resort landscapes to hand-finished sculptures, fountains, benches and
            stone washbasins, our work combines natural materials, skilled craftsmanship and
            thoughtful design.
          </p>

          <p className="hero-supporting text-white/70 text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold mb-4">
            Crafted for homes, resorts, gardens, hospitality spaces, commercial properties and
            landmark projects.
          </p>

          <div className="hero-cta-group flex flex-wrap gap-2.5 items-center">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-4">
              Start Your Stone Project <ArrowUpRight size={13} />
            </Link>
            <Link to="/work" className="btn-secondary text-xs py-2.5 px-4">
              Explore Our Work
            </Link>
            <Link to="/contact" className="btn-secondary text-xs py-2.5 px-4">
              Request a Consultation
            </Link>
          </div>

          <div className="hero-quick-actions flex flex-wrap gap-2 items-center mt-3 pt-3 border-t border-white/20">
            <a href="tel:+919876543210" className="btn-chip text-[0.68rem] py-1 px-3">
              <Phone size={11} /> Call Us Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chip text-[0.68rem] py-1 px-3"
            >
              <MessageCircle size={11} /> WhatsApp Us
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToNext("studio")}
          className="hero-scroll cursor-pointer bg-transparent border-0 text-white"
          aria-label="Discover Lemurian Designers"
        >
          Discover <ArrowDown size={14} />
        </button>
      </section>

      {/* 2. INTRODUCTION / STUDIO (SCREEN 2) */}
      <section id="studio" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Logo size={26} showWordmark={false} />
                <p className="eyebrow my-0">Introduction & Philosophy</p>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                Natural Stone. Refined Craftsmanship. Timeless Spaces.
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              About Studio <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                Stone has the power to make a space feel grounded, enduring and memorable. Lemurian
                Designers works with the natural character of stone to create structures and design
                elements that are both practical and visually distinctive.
              </p>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                Our team undertakes stone laying, masonry, engraving, sculpting, landscaping
                features and custom stone fabrication. Whether you need a feature wall, a resort
                pathway, a sculpted installation or a custom washbasin, we bring attention to detail
                from concept to completion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    Our Vision
                  </span>
                  <h3 className="text-base font-display font-medium text-foreground mt-0.5 mb-1">
                    A Trusted Name in Stone Design
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To become a trusted name in premium natural stone craftsmanship and design.
                  </p>
                </div>

                <div className="p-3 bg-card border border-border rounded">
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    Our Mission
                  </span>
                  <h3 className="text-base font-display font-medium text-foreground mt-0.5 mb-1">
                    Meaningful, Durable & Refined
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To enhance how people experience homes, resorts, gardens and public spaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: sculptureImage,
                    title: "Natural Stone Sculpting & Studio Philosophy",
                    caption: "Hand-dressed natural granite craftsmanship",
                  })
                }
              >
                <img
                  src={sculptureImage}
                  alt="Granite stone art"
                  style={{
                    maxHeight: "42vh",
                    objectFit: "contain",
                    background: "oklch(0.92 0.015 82)",
                  }}
                />
              </div>
              <p className="text-[0.65rem] text-muted-foreground text-center mt-2 uppercase tracking-wider">
                Handcrafted Monolith Art · South India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (SCREEN 3) */}
      <section id="services" className="screen-section theme-dark">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                Our Services
              </p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-white mt-1 leading-tight">
                Stonework for Spaces That Deserve to Be Remembered
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase font-bold text-secondary border-b border-secondary pb-0.5 whitespace-nowrap"
            >
              View All 7 Services <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          {/* Quick Service Selector Rail */}
          <div className="selector-tabs-rail mb-3">
            {servicesData.map((s, idx) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActiveServiceIdx(idx)}
                className={`tab-pill-btn ${idx === activeServiceIdx ? "active" : ""}`}
              >
                <span className="tab-pill-num">{s.number}</span>
                <span className="tab-pill-title">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: currentService.image,
                    title: currentService.title,
                    caption: currentService.tagline,
                  })
                }
              >
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  style={{ maxHeight: "40vh", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs font-bold text-secondary tracking-widest uppercase">
                SERVICE {currentService.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {currentService.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2">
                {currentService.description}
              </p>

              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-secondary block mb-1">
                  Key Inclusions
                </span>
                <div className="grid grid-cols-2 gap-1 max-h-[16vh] overflow-y-auto pr-1">
                  {currentService.inclusions.slice(0, 6).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-[0.68rem] text-white/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded truncate"
                    >
                      <CheckCircle2 size={10} className="text-secondary shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  to="/contact"
                  search={{ service: currentService.serviceKey }}
                  className="btn-primary text-xs py-2 px-3.5"
                >
                  {currentService.ctaText} <ArrowUpRight size={12} />
                </Link>
                <Link to="/services" className="btn-secondary text-xs py-2 px-3.5">
                  See Complete Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORK / PORTFOLIO (SCREEN 4) */}
      <section id="work" className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="eyebrow">Stonework Portfolio</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                Built by nature. Refined by craft.
              </h2>
            </div>
            <Link
              to="/work"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              Explore Full Portfolio <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="selector-tabs-rail mb-3">
            {portfolioProjects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProjectIdx(idx)}
                className={`tab-pill-btn ${idx === activeProjectIdx ? "active" : ""}`}
              >
                <span className="tab-pill-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="tab-pill-title">{p.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: currentProject.image,
                    title: currentProject.title,
                    caption: `${currentProject.category} · ${currentProject.location}`,
                  })
                }
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  style={{
                    maxHeight: "42vh",
                    objectFit: currentProject.aspect === "portrait" ? "contain" : "cover",
                    background: "oklch(0.92 0.015 82)",
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <span className="eyebrow text-secondary-foreground/70">
                {currentProject.category}
              </span>
              <h3 className="text-2xl font-display font-medium text-foreground">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-3">
                {currentProject.description}
              </p>

              <div className="grid grid-cols-2 gap-2 py-2 border-y border-border text-xs">
                <div>
                  <span className="text-[0.62rem] uppercase font-bold text-muted-foreground block">
                    Location
                  </span>
                  <span className="text-foreground font-medium">{currentProject.location}</span>
                </div>
                <div>
                  <span className="text-[0.62rem] uppercase font-bold text-muted-foreground block">
                    Materials
                  </span>
                  <span className="text-foreground font-medium truncate block">
                    {currentProject.materials}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  to="/contact"
                  search={{ service: currentProject.category }}
                  className="btn-dark text-xs py-2 px-3.5"
                >
                  Discuss Project <ArrowUpRight size={12} />
                </Link>
                <Link to="/work" className="btn-dark-outline text-xs py-2 px-3.5">
                  View Full Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (SCREEN 5) */}
      <section id="industries" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="eyebrow">Stone Solutions for Different Spaces</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                Industries We Serve
              </h2>
            </div>
            <Link
              to="/industries"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              Explore All Sectors <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="selector-tabs-rail mb-3">
            {industriesData.map((ind, idx) => (
              <button
                key={ind.number}
                type="button"
                onClick={() => setActiveIndustryIdx(idx)}
                className={`tab-pill-btn ${idx === activeIndustryIdx ? "active" : ""}`}
              >
                <span className="tab-pill-num">{ind.number}</span>
                <span className="tab-pill-title">{ind.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: currentIndustry.image,
                    title: currentIndustry.title,
                    caption: currentIndustry.tagline,
                  })
                }
              >
                <img
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  style={{ maxHeight: "40vh", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <span className="eyebrow text-muted-foreground">SECTOR {currentIndustry.number}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground">
                {currentIndustry.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {currentIndustry.tagline}
              </p>

              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Tailored Installations
                </span>
                <div className="grid grid-cols-2 gap-1 max-h-[16vh] overflow-y-auto pr-1">
                  {currentIndustry.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1 text-[0.7rem] text-foreground bg-black/[0.03] border border-border/80 px-2 py-0.5 rounded truncate"
                    >
                      <CheckCircle2 size={10} className="text-secondary shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  to="/contact"
                  search={{ service: currentIndustry.title }}
                  className="btn-dark text-xs py-2 px-3.5"
                >
                  Consult For {currentIndustry.title.split(" ")[0]} <ArrowUpRight size={12} />
                </Link>
                <Link to="/industries" className="btn-dark-outline text-xs py-2 px-3.5">
                  Sector Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR WORK PROCESS (SCREEN 6) */}
      <section id="process" className="screen-section theme-base">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="eyebrow">Our Work Process</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                From Concept to Completion
              </h2>
            </div>
            <Link
              to="/process"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              7-Step Details <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="selector-tabs-rail mb-3">
            {processStepsData.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveProcessIdx(idx)}
                className={`tab-pill-btn ${idx === activeProcessIdx ? "active" : ""}`}
              >
                <span className="tab-pill-num">{step.number}</span>
                <span className="tab-pill-title">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground block">
                PHASE {currentProcess.number} · {currentProcess.phase}
              </span>
              <h3 className="text-2xl font-display font-medium text-foreground">
                {currentProcess.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {currentProcess.description}
              </p>
              <div className="p-3 bg-black/[0.03] border border-border rounded text-xs text-muted-foreground leading-relaxed">
                {currentProcess.details}
              </div>

              <div className="flex gap-2 pt-2">
                <Link to="/contact" className="btn-dark text-xs py-2 px-3.5">
                  Schedule Phase 01 <ArrowUpRight size={12} />
                </Link>
                <Link to="/process" className="btn-dark-outline text-xs py-2 px-3.5">
                  View All Deliverables
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="showcase-image-box mb-2">
                <img
                  src={currentProcess.image}
                  alt={`Phase ${currentProcess.number}: ${currentProcess.title}`}
                  style={{ maxHeight: "36vh", objectFit: "cover" }}
                />
              </div>
              <div className="grid grid-cols-7 gap-1">
                {processStepsData.map((s, idx) => (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActiveProcessIdx(idx)}
                    className={`p-1.5 text-center rounded border text-[0.65rem] transition-colors cursor-pointer ${
                      idx === activeProcessIdx
                        ? "bg-forest text-white border-forest font-bold"
                        : "bg-transparent text-muted-foreground border-border/60 hover:bg-black/5"
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE LEMURIAN & SERVICE AREA (SCREEN 7) */}
      <section className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Logo size={26} showWordmark={false} />
                <p className="eyebrow my-0">Craftsmanship With a Design Perspective</p>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                Why Choose Lemurian Designers?
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              Learn More <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground block mb-2">
                Our 10 Core Strengths
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[36vh] overflow-y-auto pr-1">
                {strengthsData.map((s) => (
                  <div
                    key={s.title}
                    className="p-2 bg-card border border-border rounded flex items-center justify-between gap-2 text-xs"
                  >
                    <span className="font-semibold text-foreground text-[0.72rem]">{s.title}</span>
                    <CheckCircle2 size={12} className="text-accent shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-4 bg-forest text-white rounded space-y-2">
              <p className="eyebrow text-secondary">Service Area Section</p>
              <h3 className="text-xl font-display text-white">
                Serving Projects Across South India and Beyond
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lemurian Designers undertakes selected stone design, masonry, engraving and
                landscaping projects across Tamil Nadu, Karnataka, Kerala and nationwide regions.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {[
                  "Homeowners",
                  "Architects",
                  "Landscape Designers",
                  "Resort Owners",
                  "Builders",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[0.62rem] bg-white/10 px-2 py-0.5 rounded text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SHOWCASE (SCREEN 8) */}
      <section className="screen-section theme-dark">
        <div className="section-pad-inner">
          <div className="cta-showcase-grid">
            <div className="cta-block p-6">
              <div>
                <p className="eyebrow text-secondary">Start With Your Idea</p>
                <h3 className="text-2xl sm:text-3xl font-display text-white my-1">
                  Have a Concept or Reference Photo?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                  Share it with us. We can help you explore the right stone, finish, scale and
                  execution approach.
                </p>
              </div>
              <div className="cta-button-row">
                <Link to="/contact" className="btn-secondary text-xs py-2 px-3">
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="cta-block p-6">
              <div>
                <p className="eyebrow text-secondary">Enduring Craft</p>
                <h3 className="text-2xl sm:text-3xl font-display text-white my-1">
                  Make Your Space More Memorable
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                  From a handcrafted stone bench to an entire resort landscape, the right stonework
                  can transform the character of a space. Let’s create something lasting with stone.
                </p>
              </div>
              <div className="cta-button-row">
                <Link to="/contact" className="btn-primary text-xs py-2 px-3">
                  Start Your Project <ArrowUpRight size={13} />
                </Link>
                <a href="tel:+919876543210" className="btn-secondary text-xs py-2 px-3">
                  <Phone size={11} /> Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (SCREEN 9) */}
      <section id="faq" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-foreground mt-1 leading-tight">
                Before we begin.
              </h2>
            </div>
            <Link
              to="/faq"
              className="text-xs uppercase font-bold text-foreground border-b border-foreground pb-0.5 whitespace-nowrap"
            >
              View All FAQs <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex flex-col gap-1.5 max-h-[38vh] overflow-y-auto pr-2">
              {faqsData.map((f, idx) => (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setActiveFaqIdx(idx)}
                  className={`w-full text-left p-2 rounded border text-xs cursor-pointer transition-colors ${
                    idx === activeFaqIdx
                      ? "bg-card border-foreground/60 font-semibold text-foreground shadow-xs"
                      : "bg-transparent border-border/80 text-foreground/80 hover:bg-black/5"
                  }`}
                >
                  <span className="truncate block">{f.q}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="p-5 bg-card border border-border rounded shadow-xs">
                <span className="text-[0.62rem] uppercase font-bold text-accent tracking-wider block mb-1">
                  {currentFaq.category}
                </span>
                <h3 className="text-lg font-display font-medium text-foreground mb-2">
                  {currentFaq.q}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mb-3">
                  {currentFaq.a}
                </p>
                <div className="pt-2 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground text-[0.7rem]">
                    Have additional requirements?
                  </span>
                  <Link to="/contact" className="text-foreground font-semibold hover:underline">
                    Ask during consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REQUEST A CONSULTATION (SCREEN 10) */}
      <section id="contact" className="screen-section theme-dark">
        <div className="section-pad-inner">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                Contact Lemurian Designers
              </p>
              <h2 className="text-2xl sm:text-4xl font-display font-normal text-white mt-0.5 leading-tight">
                Let’s Discuss Your Project
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-xs uppercase font-bold text-secondary border-b border-secondary pb-0.5 whitespace-nowrap"
            >
              Full Intake Page <ArrowUpRight size={13} className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <div className="lg:col-span-8 bg-black/30 border border-white/15 p-3.5 rounded">
              {submitted ? (
                <div className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <Logo size={42} showWordmark={false} />
                  </div>
                  <CheckCircle2 size={24} className="text-secondary mx-auto mb-2" />
                  <h3 className="text-lg font-display text-white">Consultation Request Received</h3>
                  <p className="text-xs text-white/80 max-w-md mx-auto my-2">
                    Thank you. Our specialists will review your requirements and reach out within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs py-1.5 px-3 mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="form-group">
                      <label
                        htmlFor="homeName"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Full Name *
                      </label>
                      <input
                        id="homeName"
                        required
                        type="text"
                        placeholder="e.g. Anandha Krishnan"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="homeCompany"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Company or Project Name
                      </label>
                      <input
                        id="homeCompany"
                        type="text"
                        placeholder="e.g. Heritage Sanctuary Resort"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="form-group">
                      <label
                        htmlFor="homePhone"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="homePhone"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="homeEmail"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Email Address *
                      </label>
                      <input
                        id="homeEmail"
                        required
                        type="email"
                        placeholder="name@domain.com"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="homeLocation"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Project Location *
                      </label>
                      <input
                        id="homeLocation"
                        required
                        type="text"
                        placeholder="City, District or State"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="form-group">
                      <label
                        htmlFor="homeService"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Type of Service
                      </label>
                      <select
                        id="homeService"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="py-1 px-2 text-xs bg-[#141f19] border border-white/20 text-white rounded"
                      >
                        <option value="Stone Laying & Masonry">Stone Laying & Masonry</option>
                        <option value="Stone Engraving">Stone Engraving</option>
                        <option value="Stone Sculpting">Stone Sculpting</option>
                        <option value="Resort & Landscape Stone Works">
                          Resort & Landscape Works
                        </option>
                        <option value="Custom Stone Benches">Custom Stone Benches</option>
                        <option value="Stone Fountains & Water Features">
                          Fountains & Water Features
                        </option>
                        <option value="Custom Stone Washbasins">Custom Stone Washbasins</option>
                        <option value="Other Architectural Stonework">
                          Other Architectural Stonework
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="homeScope"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Approximate Scope
                      </label>
                      <input
                        id="homeScope"
                        type="text"
                        placeholder="e.g. 1500 sq ft wall, 2 basins"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="homeTimeline"
                        className="text-[0.62rem] font-bold uppercase text-white/75"
                      >
                        Timeline
                      </label>
                      <input
                        id="homeTimeline"
                        type="text"
                        placeholder="e.g. Immediate, 1-2 months"
                        className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="homeDesc"
                      className="text-[0.62rem] font-bold uppercase text-white/75"
                    >
                      Project Requirements *
                    </label>
                    <textarea
                      id="homeDesc"
                      required
                      rows={2}
                      placeholder="Tell us about your space, design aesthetics, stone preferences..."
                      className="py-1 px-2 text-xs bg-black/40 border border-white/20 text-white rounded resize-none"
                    />
                  </div>

                  <div className="flex gap-2 items-center pt-1">
                    <label
                      htmlFor="homeFile"
                      className="flex-1 flex items-center gap-2 p-1.5 border border-dashed border-white/25 rounded cursor-pointer hover:border-secondary"
                    >
                      <UploadCloud size={13} className="text-secondary shrink-0" />
                      <span className="text-[0.68rem] text-white/80 truncate">
                        {fileName || "Attach drawings / site photos"}
                      </span>
                      <input
                        id="homeFile"
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

                    <button
                      type="submit"
                      className="btn-primary text-xs py-2 px-4 whitespace-nowrap"
                    >
                      Request a Consultation <ArrowUpRight size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-4 space-y-2">
              <div className="p-3 bg-black/40 border border-white/15 rounded">
                <span className="text-[0.62rem] uppercase font-bold tracking-widest text-secondary block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-sm font-display text-white mb-2">Speak Directly With Us</h3>
                <div className="space-y-1.5">
                  <a
                    href="tel:+919876543210"
                    className="btn-secondary w-full text-xs py-1.5 px-3 flex items-center justify-center gap-1.5"
                  >
                    <Phone size={12} /> Call Us: +91 98765 43210
                  </a>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-xs py-1.5 px-3 flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={12} /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="p-2.5 bg-black/20 border border-white/10 rounded text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-white/80 text-[0.7rem]">
                  <Mail size={11} className="text-secondary" />
                  <a href="mailto:info@lemuriandesigners.com">info@lemuriandesigners.com</a>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[0.7rem]">
                  <MapPin size={11} className="text-secondary" />
                  <span>South India · Projects executed nationwide</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[0.7rem]">
                  <Clock size={11} className="text-secondary" />
                  <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. GRAND FOOTER */}
      <SiteFooter />

      {modalImage && (
        <ImageModal
          isOpen={true}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          title={modalImage.title}
          caption={modalImage.caption}
        />
      )}
    </div>
  );
}
