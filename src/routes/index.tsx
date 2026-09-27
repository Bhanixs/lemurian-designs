import { createFileRoute } from "@tanstack/react-router";
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

import heroImage from "@/assets/lemurian-hero.jpg";
import masonryImage from "@/assets/stone-masonry.jpg";
import sculptureImage from "@/assets/stone-sculpture.jpg";
import basinImage from "@/assets/stone-basin.jpg";

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

const services = [
  {
    number: "01",
    title: "Stone Laying & Masonry",
    serviceKey: "Stone Laying & Masonry",
    description:
      "We execute reliable and visually refined stone laying for residential, commercial, hospitality and outdoor projects. We carefully consider stone selection, pattern, alignment, joints, texture and overall integration with the surrounding space.",
    inclusions: [
      "Natural stone wall construction",
      "Random rubble stone masonry",
      "Dry stone and bonded stonework",
      "Stone cladding and feature walls",
      "Garden walls and boundary walls",
      "Retaining walls",
      "Stone pathways and walkways",
      "Stone steps and entrance features",
      "Resort landscape stonework",
      "Decorative and structural installations",
    ],
    ctaText: "Enquire About Masonry",
  },
  {
    number: "02",
    title: "Stone Engraving",
    serviceKey: "Stone Engraving",
    description:
      "Add meaning and identity to your space with custom stone engraving. Every engraving is planned according to the stone type, design style, scale and intended location.",
    inclusions: [
      "Names and lettering",
      "Logos and brand marks",
      "Memorial inscriptions",
      "Directional and welcome signs",
      "Decorative patterns",
      "Traditional motifs",
      "House names and property signage",
      "Custom artwork on stone surfaces",
    ],
    ctaText: "Discuss Your Custom Engraving",
  },
  {
    number: "03",
    title: "Stone Sculpting",
    serviceKey: "Stone Sculpting",
    description:
      "Our stone sculpting service turns natural stone into expressive forms, artistic installations and architectural details. From a simple concept to a detailed custom piece, we help develop designs that suit the character of the project.",
    inclusions: [
      "Custom stone sculptures",
      "Abstract stone art",
      "Traditional and cultural motifs",
      "Animal and nature-inspired forms",
      "Decorative pillars and columns",
      "Relief carvings",
      "Garden sculptures",
      "Resort and hospitality installations",
      "Bespoke architectural elements",
    ],
    ctaText: "Commission a Sculpture",
  },
  {
    number: "04",
    title: "Resort & Landscape Stone Works",
    serviceKey: "Resort & Landscape Stone Works",
    description:
      "Natural stone adds a sense of luxury, authenticity and permanence to resort and landscape environments. We create stone features that blend with gardens, architecture, water elements and the surrounding landscape.",
    inclusions: [
      "Stone pathways",
      "Garden borders",
      "Feature walls",
      "Entrance structures",
      "Outdoor seating",
      "Poolside stone elements",
      "Landscape steps",
      "Stone platforms",
      "Decorative boulders and installations",
      "Courtyard and sit-out features",
      "Rustic and nature-inspired outdoor spaces",
    ],
    ctaText: "Explore Resort Stonework",
  },
  {
    number: "05",
    title: "Custom Stone Benches",
    serviceKey: "Custom Stone Benches",
    description:
      "Create comfortable and memorable outdoor seating with custom stone benches. Benches can be designed in simple, rustic, contemporary or sculptural styles based on your requirements.",
    inclusions: [
      "Gardens",
      "Resort sit-out areas",
      "Courtyards",
      "Parks",
      "Pathways",
      "Poolside spaces",
      "Temple and heritage environments",
      "Commercial landscapes",
      "Public and community spaces",
    ],
    ctaText: "Order Custom Benches",
  },
  {
    number: "06",
    title: "Stone Fountains & Water Features",
    serviceKey: "Stone Fountains & Water Features",
    description:
      "A well-designed stone fountain can become the focal point of a garden, courtyard, resort or entrance area. Our designs focus on proportion, water movement, material texture and the atmosphere you want to create.",
    inclusions: [
      "Natural stone fountains",
      "Wall-mounted stone water features",
      "Garden fountains",
      "Courtyard fountains",
      "Resort water features",
      "Cascading stone features",
      "Bowl-style fountains",
      "Sculptural water installations",
      "Custom stone basins and water elements",
    ],
    ctaText: "Create a Signature Water Feature",
  },
  {
    number: "07",
    title: "Custom Stone Washbasins",
    serviceKey: "Custom Stone Washbasins",
    description:
      "Bring the beauty of natural stone into bathrooms, outdoor wash areas and hospitality spaces. Each washbasin can be customized according to the required size, shape, stone type, finish and installation style.",
    inclusions: [
      "Luxury homes",
      "Resorts",
      "Boutique hotels",
      "Farmhouses",
      "Spa and wellness spaces",
      "Outdoor wash areas",
      "Restaurants and cafés",
      "Eco-stays and nature retreats",
    ],
    ctaText: "Custom Washbasin Enquiry",
  },
];

const industries = [
  {
    number: "01",
    title: "Residential Projects",
    items: [
      "Garden walls & boundary walls",
      "Natural stone feature walls",
      "Outdoor seating & custom benches",
      "Stone washbasins for washrooms",
      "Courtyard fountains & water walls",
      "Pathways, walkways & steps",
      "Entrance structures & gates",
      "Custom sculptures & engraved crests",
    ],
  },
  {
    number: "02",
    title: "Resorts & Hotels",
    items: [
      "Comprehensive resort landscaping",
      "Outdoor sit-outs & lounge areas",
      "Poolside stone features & copings",
      "Signature stone fountains",
      "Guest-area artisanal washbasins",
      "Meandering stone walkways",
      "Sculptural installations & art",
      "Welcome, directional & brand signage",
    ],
  },
  {
    number: "03",
    title: "Commercial Spaces",
    items: [
      "Refined office landscapes & atriums",
      "Restaurant & café exteriors",
      "Impressive retail entrances",
      "Bespoke engraved brand signage",
      "Courtyard focal features",
      "Durable outdoor stone seating",
      "Architectural feature walls",
    ],
  },
  {
    number: "04",
    title: "Farms & Eco-Stays",
    items: [
      "Rustic dry stone structures",
      "Nature-inspired gravel & slab pathways",
      "Garden landscape features & borders",
      "Open-air wash areas & monolithic basins",
      "Campfire & sit-out stone benches",
      "Cascading water features",
      "Traditional regional stonework",
    ],
  },
  {
    number: "05",
    title: "Public & Community",
    items: [
      "Public parks & promenade seating",
      "Memorial installations & commemorative stones",
      "Directional & civic signage",
      "Durable stone benches for heavy use",
      "Heritage & temple sculptures",
      "Landscape retaining structures",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your project, space, design expectations, budget and intended use.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We review the location, measurements, access, surface conditions and surrounding architecture or landscape.",
  },
  {
    number: "03",
    title: "Design Development",
    description: "We recommend suitable stonework styles, layouts, finishes and design details.",
  },
  {
    number: "04",
    title: "Stone Selection",
    description:
      "We help select the appropriate stone based on appearance, strength, texture, application and maintenance requirements.",
  },
  {
    number: "05",
    title: "Crafting & Prep",
    description:
      "Stone is cut, shaped, engraved, sculpted or prepared according to the approved design.",
  },
  {
    number: "06",
    title: "Installation",
    description:
      "Our team carries out the stonework with attention to alignment, structural stability, finish and site cleanliness.",
  },
  {
    number: "07",
    title: "Final Inspection",
    description:
      "We review the completed work to ensure that the final result reflects the agreed design and quality expectations.",
  },
];

const strengths = [
  "Custom-designed stonework",
  "Skilled finishing and detailing",
  "Practical and aesthetic solutions",
  "Suitable for residential and commercial projects",
  "Strong understanding of outdoor and landscape environments",
  "Attention to stone texture, proportion and placement",
  "Bespoke engraving and sculpting",
  "Project-specific material recommendations",
  "End-to-end coordination from concept to execution",
  "Work designed for durability and long-term visual appeal",
];

const portfolioCategories = [
  "Stone Masonry",
  "Feature Walls",
  "Resort Landscaping",
  "Stone Engraving",
  "Stone Sculptures",
  "Stone Benches",
  "Stone Fountains",
  "Custom Washbasins",
  "Garden & Sit-outs",
  "Architectural Details",
];

const faqs = [
  {
    q: "What type of stonework does Lemurian Designers undertake?",
    a: "We undertake stone laying, masonry, feature walls, retaining walls, pathways, resort landscaping, stone engraving, sculpting, benches, fountains, washbasins and custom stone features.",
  },
  {
    q: "Do you create custom stone designs?",
    a: "Yes. We develop custom stonework based on your space, design preference, measurements, stone type and intended use.",
  },
  {
    q: "Can you create stone features for resorts and hotels?",
    a: "Yes. We work on resort landscaping, pathways, fountains, sit-out areas, outdoor seating, washbasins, sculptures and other hospitality features.",
  },
  {
    q: "Do you provide stone engraving and lettering?",
    a: "Yes. We create custom names, logos, inscriptions, signs, patterns and decorative engraving on suitable stone surfaces.",
  },
  {
    q: "Can I share a reference image?",
    a: "Yes. You can share reference images, sketches, drawings or photographs of the installation area during the consultation.",
  },
  {
    q: "Do you help with stone selection?",
    a: "Yes. We can recommend suitable stone based on appearance, durability, application, finish, location and maintenance requirements.",
  },
  {
    q: "How do I request a quotation?",
    a: "Contact us by phone, WhatsApp or the enquiry form. Share your project location, requirements, photographs and approximate measurements so we can understand the scope.",
  },
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="wordmark" aria-label="Lemurian Designers home">
      <span
        className={compact ? "wordmark-mark wordmark-mark-compact" : "wordmark-mark"}
        aria-hidden="true"
      >
        L<span>D</span>
      </span>
      {!compact && (
        <span className="wordmark-name">
          Lemurian
          <br />
          Designers
        </span>
      )}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#process">Process</a>
        <a href="#studio">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" className="nav-cta">
          Request Consultation <ArrowUpRight size={13} />
        </a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
          <a href="#studio">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Request Consultation</a>
          <a href="tel:+919876543210">Call Us Now</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </nav>
      </details>
    </header>
  );
}

function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("Stone Laying & Masonry");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="top">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <img
          src={heroImage}
          width={1920}
          height={1280}
          alt="Hand-shaped granite craftsmanship in a tropical stone courtyard"
        />
        <div className="hero-shade" />
        <Header />

        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Natural Stone Craftsmanship · Remarkable Spaces</p>
          <h1>
            Stone, Shaped Into
            <br />
            Lasting Experiences.
          </h1>

          <p className="hero-lead">
            At Lemurian Designers, we transform natural stone into functional, artistic and
            architectural elements that give every space a distinctive identity. From carefully laid
            stone walls and resort landscapes to hand-finished sculptures, fountains, benches and
            stone washbasins, our work combines natural materials, skilled craftsmanship and
            thoughtful design.
          </p>

          <p className="hero-supporting">
            Crafted for homes, resorts, gardens, hospitality spaces, commercial properties and
            landmark projects.
          </p>

          {/* Hero CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">
              Start Your Stone Project <ArrowUpRight size={14} />
            </a>
            <a href="#work" className="btn-secondary">
              Explore Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Request a Consultation
            </a>
          </div>

          {/* Hero Quick Direct Contacts */}
          <div className="hero-quick-actions">
            <a href="tel:+919876543210" className="btn-chip" aria-label="Call Lemurian Designers">
              <Phone size={13} /> Call Us Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%20Lemurian%20Designers%2C%20I%20would%20like%20to%20enquire%20about%20a%20stone%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chip"
              aria-label="WhatsApp Lemurian Designers"
            >
              <MessageCircle size={13} /> WhatsApp Us
            </a>
          </div>
        </div>

        <a href="#studio" className="hero-scroll" aria-label="Discover Lemurian Designers">
          Discover <ArrowDown size={16} />
        </a>
      </section>

      {/* 2. INTRODUCTION / STUDIO SECTION */}
      <section id="studio" className="manifesto section-pad">
        <p className="eyebrow">Introduction & Philosophy</p>
        <div className="manifesto-grid">
          <h2>Natural Stone. Refined Craftsmanship. Timeless Spaces.</h2>
          <div className="manifesto-note">
            <p>
              Stone has the power to make a space feel grounded, enduring and memorable. Lemurian
              Designers works with the natural character of stone to create structures and design
              elements that are both practical and visually distinctive.
            </p>
            <p>
              Our team undertakes stone laying, masonry, engraving, sculpting, landscaping features
              and custom stone fabrication. Whether you need a feature wall, a resort pathway, a
              sculpted installation or a custom washbasin, we bring attention to detail from concept
              to completion.
            </p>
            <p>
              We create stonework that complements the architecture, landscape and purpose of every
              project.
            </p>
            <a className="text-link" href="#services">
              Explore capabilities <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Vision & Mission from PDF */}
        <div className="vision-mission-grid">
          <div className="vm-card">
            <span>Our Vision</span>
            <h3>A trusted name in stone design</h3>
            <p>To become a trusted name in premium natural stone craftsmanship and design.</p>
          </div>
          <div className="vm-card">
            <span>Our Mission</span>
            <h3>Meaningful, durable & refined</h3>
            <p>
              To create meaningful, durable and visually refined stonework that enhances the way
              people experience homes, resorts, gardens and public spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK & PORTFOLIO */}
      <section id="work" className="work section-pad">
        <div className="section-heading">
          <p className="eyebrow">Stonework Portfolio</p>
          <div>
            <h2>
              Built by nature.
              <br />
              Refined by craft.
            </h2>
            <p className="lead">
              Explore selected projects by Lemurian Designers, created for spaces that value natural
              materials, thoughtful detailing and lasting design.
            </p>
          </div>
        </div>

        {/* Portfolio Categories Pills */}
        <div className="portfolio-categories">
          {portfolioCategories.map((category) => (
            <span key={category} className="category-badge">
              {category}
            </span>
          ))}
        </div>

        <div className="work-grid">
          <article className="project project-wide">
            <div className="project-image landscape">
              <img
                src={masonryImage}
                loading="lazy"
                width={1408}
                height={1056}
                alt="Natural stone masonry, dry stone boundary walls and broad garden steps"
              />
            </div>
            <div className="project-meta">
              <h3>Grounded Passage & Masonry</h3>
              <span>Stone Masonry · Feature & Boundary Walls</span>
            </div>
          </article>

          <article className="project project-tall">
            <div className="project-image portrait">
              <img
                src={sculptureImage}
                loading="lazy"
                width={1056}
                height={1408}
                alt="Hand-carved abstract natural granite sculpture"
              />
            </div>
            <div className="project-meta">
              <h3>Continuum</h3>
              <span>Granite · Hand-Sculpted Art</span>
            </div>
          </article>

          <article className="project project-basin">
            <div className="project-image landscape">
              <img
                src={basinImage}
                loading="lazy"
                width={1408}
                height={1056}
                alt="Monolithic natural stone washbasin handcrafted for a luxury hospitality retreat"
              />
            </div>
            <div className="project-meta">
              <h3>Weathered Monolith Vessel</h3>
              <span>Handmade Washbasin · Hospitality</span>
            </div>
          </article>

          {/* Project Spotlight Template from PDF page 8 */}
          <article className="project-spotlight">
            <div className="spotlight-visual">
              <div className="project-image landscape">
                <img
                  src={heroImage}
                  loading="lazy"
                  width={1408}
                  height={1056}
                  alt="Custom stone water feature in resort courtyard"
                />
              </div>
            </div>
            <div className="spotlight-info">
              <p className="eyebrow">Project Spotlight</p>
              <h3>Custom Stone Fountain for Resort Courtyard</h3>
              <dl className="spotlight-dl">
                <dt>Project Type</dt>
                <dd>Landscape stonework and water feature</dd>
                <dt>Location</dt>
                <dd>South India</dd>
                <dt>Materials</dt>
                <dd>Hand-dressed natural granite and textured river stone</dd>
                <dt>Scope</dt>
                <dd>Design, stone shaping, fabrication and installation</dd>
                <dt>Highlight</dt>
                <dd>
                  A custom stone fountain designed as a central feature for a peaceful resort
                  courtyard.
                </dd>
              </dl>
              <a
                href="#contact"
                onClick={() => setSelectedService("Stone Fountains & Water Features")}
                className="btn-dark"
              >
                Discuss Similar Project <ArrowUpRight size={14} />
              </a>
            </div>
          </article>

          {/* Portfolio CTA */}
          <div className="portfolio-cta-banner">
            <div>
              <p className="eyebrow">Have a Similar Project in Mind?</p>
              <h3>Let’s Discuss Your Concept.</h3>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-dark">
                Start Your Project <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="btn-dark-outline">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="services section-pad">
        <div className="services-intro">
          <p className="eyebrow">Our Services</p>
          <h2>Stonework for spaces that deserve to be remembered.</h2>
          <p>
            Crafted for homes, resorts, gardens, hospitality spaces, commercial properties and
            landmark projects.
          </p>
          <div className="services-intro-actions">
            <a href="#contact" className="btn-primary">
              Book a Site Consultation <ArrowUpRight size={14} />
            </a>
            <a href="#contact" className="btn-secondary">
              Send Your Requirement
            </a>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article key={service.number} className="service-row">
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <div className="service-items-list">
                  {service.inclusions.map((item) => (
                    <span key={item} className="service-item-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleServiceSelect(service.serviceKey)}
                  className="service-cta-link"
                >
                  {service.ctaText} <ArrowUpRight size={12} />
                </button>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. MATERIAL BREAK / QUOTE */}
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

      {/* 6. INDUSTRIES WE SERVE */}
      <section id="industries" className="industries section-pad">
        <div className="section-heading">
          <p className="eyebrow">Stone Solutions for Different Spaces</p>
          <div>
            <h2>Industries We Serve</h2>
            <p className="lead">
              From intimate residential sanctuaries to expansive hospitality properties and
              commercial landmarks, our stonework is tailored to the distinct rhythm of every
              environment.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((ind) => (
            <article key={ind.number} className="industry-card">
              <span>{ind.number}</span>
              <h3>{ind.title}</h3>
              <ul>
                {ind.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 7. OUR WORK PROCESS */}
      <section id="process" className="process section-pad">
        <div className="section-heading process-heading">
          <p className="eyebrow">Our Work Process</p>
          <div>
            <h2>From Concept to Completion</h2>
            <p className="lead">
              Every stone element undergoes seven disciplined phases, ensuring alignment, artistic
              fidelity and structural longevity.
            </p>
          </div>
        </div>
        <div className="process-grid-7">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 8. WHY CHOOSE LEMURIAN / STRENGTHS */}
      <section className="strengths section-pad">
        <p className="eyebrow">Why Choose Lemurian Designers?</p>
        <div className="strengths-grid">
          <div>
            <h2>Craftsmanship With a Design Perspective.</h2>
            <p className="strengths-lead">
              We do more than install stone. We help shape how stone contributes to the experience
              and identity of a space.
            </p>
          </div>
          <div className="strength-list">
            {strengths.map((strength) => (
              <p key={strength}>
                <span>{strength}</span>
                <CheckCircle2 size={14} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICE AREA SECTION */}
      <section className="service-area section-pad">
        <div className="service-area-grid">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2>Serving Projects Across South India and Beyond.</h2>
          </div>
          <div className="service-area-text">
            <p>
              Lemurian Designers undertakes selected stone design, masonry, engraving and
              landscaping projects across Tamil Nadu, Karnataka, Kerala and nationwide regions.
            </p>
            <p>
              We collaborate with homeowners, architects, interior designers, landscape designers,
              builders, resort owners, hospitality groups and developers.
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
      </section>

      {/* 10. CALL-TO-ACTION SHOWCASE */}
      <section className="cta-showcase section-pad">
        <div className="cta-showcase-grid">
          <div className="cta-block">
            <div>
              <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                Begin the Dialogue
              </p>
              <h3>Start With Your Idea</h3>
              <p>
                Have a design concept, reference image or unfinished idea? Share it with us. We can
                help you explore the right stone, finish, scale and execution approach.
              </p>
            </div>
            <div className="cta-button-row">
              <a href="#contact" className="btn-primary">
                Send Your Requirement
              </a>
              <a href="#contact" className="btn-secondary">
                Share Project Photos
              </a>
              <a href="#contact" className="btn-secondary">
                Book a Site Consultation
              </a>
              <a href="#contact" className="btn-secondary">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="cta-block">
            <div>
              <p className="eyebrow" style={{ color: "var(--secondary)" }}>
                Enduring Craft
              </p>
              <h3>Make Your Space More Memorable</h3>
              <p>
                From a handcrafted stone bench to an entire resort landscape, the right stonework
                can transform the character of a space. Let’s create something lasting with stone.
              </p>
            </div>
            <div className="cta-button-row">
              <a href="#contact" className="btn-primary">
                Start Your Project <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="btn-secondary">
                Talk to a Stonework Specialist
              </a>
              <a href="tel:+919876543210" className="btn-secondary">
                <Phone size={13} /> Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section id="faq" className="faq section-pad">
        <div>
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Before we begin.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span>+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 12. CONTACT PAGE CONTENT & CONSULTATION FORM */}
      <section id="contact" className="contact-section section-pad">
        <div className="section-heading" style={{ marginBottom: "2rem" }}>
          <p className="eyebrow" style={{ color: "var(--secondary)" }}>
            Contact Lemurian Designers
          </p>
          <div>
            <h2 style={{ color: "var(--white-soft)" }}>Let’s Discuss Your Project</h2>
            <p className="hero-lead" style={{ marginTop: "1rem" }}>
              Tell us what you have in mind. Whether you need stone masonry, engraving, sculpting,
              landscaping features or a custom stone product, our team will help you identify the
              next step.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Consultation Form with all PDF fields */}
          <div>
            {submitted ? (
              <div className="form-success-box">
                <h3>Consultation Request Received</h3>
                <p>
                  Thank you for reaching out to Lemurian Designers. Our stonework specialists will
                  review your project requirements, drawings, and location details and get back to
                  you within 24 hours.
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
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input id="fullName" required type="text" placeholder="e.g. Anandha Krishnan" />
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
                    <input id="emailAddress" required type="email" placeholder="name@domain.com" />
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
                  <input id="budgetRange" type="text" placeholder="e.g. ₹2,00,000 – ₹10,00,000+" />
                </div>

                <div className="form-group">
                  <label htmlFor="projectDescription">Project Description *</label>
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
                      {fileName ? fileName : "Attach architectural plans, sketches, or site photos"}
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
                    Request a Consultation <ArrowUpRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Actions Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-sidebar-block">
              <span>Direct Inquiries</span>
              <h4>Talk to Us</h4>
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
                  className="btn-primary"
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
      </section>

      {/* 13. FOOTER */}
      <footer className="footer section-pad">
        <div className="footer-top">
          <p className="eyebrow" style={{ color: "var(--secondary)" }}>
            Where Natural Stone Becomes Design
          </p>
          <h2>
            Let’s create something
            <br />
            <em>lasting</em> with stone.
          </h2>
          <p className="footer-intro">
            Lemurian Designers creates premium natural stone environments and handcrafted
            architectural features for spaces that deserve to be remembered. Share your concept,
            reference images or unfinished idea.
          </p>
          <a href="#contact" className="footer-cta">
            Prepare your enquiry <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="enquiry-note">
          <p>
            When preparing your enquiry, include your project location, approximate dimensions,
            preferred timeline and reference photographs.
          </p>
          <span>South India · Available for regional and international commissions.</span>
        </div>

        <div className="footer-bottom">
          <Wordmark compact />
          <p>Where Natural Stone Becomes Design · Lemurian Designers</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
