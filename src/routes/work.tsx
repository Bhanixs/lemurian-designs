import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageModal } from "@/components/ImageModal";
import heroImage from "@/assets/lemurian-hero.jpg";
import masonryImage from "@/assets/stone-masonry.jpg";
import sculptureImage from "@/assets/stone-sculpture.jpg";
import basinImage from "@/assets/stone-basin.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Stonework Portfolio | Lemurian Designers" },
      {
        name: "description",
        content:
          "Explore selected projects by Lemurian Designers, created for spaces that value natural materials, thoughtful detailing and lasting design.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [modalImage, setModalImage] = useState<{
    src: string;
    title: string;
    caption?: string;
  } | null>(null);

  return (
    <div className="screen-snap-container">
      <Navbar theme="dark" />

      {/* SCREEN 1: HERO */}
      <section className="hero hero-subpage theme-dark">
        <img
          src={masonryImage}
          alt="Stonework background"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="hero-shade" />

        <div className="hero-copy relative z-10 max-w-5xl mt-auto">
          <p className="eyebrow hero-eyebrow text-secondary">Our Stonework Portfolio</p>
          <h1 className="font-display font-normal text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] my-2">
            Built by nature.
            <br />
            Refined by craft.
          </h1>
          <p className="hero-lead text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl my-2">
            Explore selected projects by Lemurian Designers, created for spaces that value natural
            materials, thoughtful detailing and lasting design.
          </p>

          <div className="portfolio-categories flex flex-wrap gap-1.5 my-3">
            {[
              "Stone Masonry",
              "Feature Walls",
              "Resort Landscaping",
              "Stone Engraving",
              "Stone Sculptures",
              "Stone Benches",
              "Stone Fountains",
              "Custom Washbasins",
            ].map((cat) => (
              <span key={cat} className="category-badge text-[0.62rem] py-0.5 px-2.5">
                {cat}
              </span>
            ))}
          </div>

          <div className="hero-cta-group flex flex-wrap gap-2.5 items-center mt-2">
            <Link to="/contact" className="btn-primary text-xs py-2 px-4">
              Start Your Project <ArrowUpRight size={13} />
            </Link>
            <a href="#spotlight" className="btn-secondary text-xs py-2 px-4">
              Explore Featured Works ↓
            </a>
          </div>
        </div>
      </section>

      {/* SCREEN 2: PROJECT SPOTLIGHT */}
      <section id="spotlight" className="screen-section theme-paper">
        <div className="section-pad-inner">
          <p className="eyebrow">Portfolio Project Spotlight</p>
          <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-1">
            Custom Stone Fountain for Resort Courtyard
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-3">
            <div className="lg:col-span-7">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: heroImage,
                    title: "Custom Stone Fountain for Resort Courtyard",
                    caption: "South India · Hand-dressed natural granite and textured river stone",
                  })
                }
              >
                <img
                  src={heroImage}
                  alt="Custom stone water feature in resort courtyard"
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2.5">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                A custom stone fountain designed as a central acoustic and meditative feature for a
                peaceful resort courtyard. Hand-dressed natural granite integrates smoothly with
                water movement.
              </p>

              <dl className="spotlight-dl text-xs">
                <dt>Project Type</dt>
                <dd>Landscape stonework & water feature</dd>
                <dt>Location</dt>
                <dd>South India</dd>
                <dt>Materials</dt>
                <dd>Hand-dressed natural granite & river stone</dd>
                <dt>Scope</dt>
                <dd>Design, stone shaping, fabrication & installation</dd>
              </dl>

              <Link
                to="/contact"
                search={{ service: "Stone Fountains & Water Features" }}
                className="btn-dark text-xs py-2 px-4"
              >
                Discuss Similar Project <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 3: GROUNDED PASSAGE & MASONRY */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <p className="eyebrow">Category · Stone Masonry & Feature Walls</p>
          <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-1">
            Grounded Passage & Masonry
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-3">
            <div className="lg:col-span-7">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: masonryImage,
                    title: "Grounded Passage & Masonry",
                    caption: "Dry stone boundary walls and broad garden steps",
                  })
                }
              >
                <img
                  src={masonryImage}
                  alt="Natural stone masonry"
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                We execute reliable and visually refined stone laying for residential, commercial,
                hospitality and outdoor projects. We carefully consider stone selection, pattern,
                alignment, joints, texture and overall integration with the surrounding space.
              </p>

              <div className="grid grid-cols-2 gap-1.5 text-[0.72rem] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Random rubble masonry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Dry stone walls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Retaining walls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Stone pathways & steps</span>
                </div>
              </div>

              <Link
                to="/contact"
                search={{ service: "Stone Laying & Masonry" }}
                className="btn-dark text-xs py-2 px-4"
              >
                Enquire About Masonry <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4: CONTINUUM SCULPTURE */}
      <section className="screen-section theme-paper">
        <div className="section-pad-inner">
          <p className="eyebrow">Category · Stone Sculpting & Art</p>
          <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-1">
            Continuum Monolithic Sculpture
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-3">
            <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                Our stone sculpting service turns natural stone into expressive forms, artistic
                installations and architectural details. From a simple concept to a detailed custom
                piece, we help develop designs that suit the character of the project.
              </p>

              <div className="grid grid-cols-2 gap-1.5 text-[0.72rem] text-muted-foreground">
                <div>• Custom sculptures</div>
                <div>• Abstract stone art</div>
                <div>• Cultural motifs</div>
                <div>• Decorative pillars</div>
                <div>• Relief carvings</div>
                <div>• Garden sculptures</div>
              </div>

              <Link
                to="/contact"
                search={{ service: "Stone Sculpting" }}
                className="btn-dark text-xs py-2 px-4"
              >
                Commission a Sculpture <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: sculptureImage,
                    title: "Continuum Monolithic Sculpture",
                    caption: "Hand-carved abstract natural granite sculpture",
                  })
                }
              >
                <img
                  src={sculptureImage}
                  alt="Granite sculpture"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-sm shadow-md"
                  style={{ background: "oklch(0.92 0.015 82)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 5: MONOLITH WASHBASIN */}
      <section className="screen-section theme-base">
        <div className="section-pad-inner">
          <p className="eyebrow">Category · Custom Stone Washbasins</p>
          <h2 className="text-2xl sm:text-4xl font-display font-normal text-foreground my-1">
            Weathered Monolith Vessel
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-3">
            <div className="lg:col-span-7">
              <div
                className="showcase-image-box cursor-pointer"
                onClick={() =>
                  setModalImage({
                    src: basinImage,
                    title: "Weathered Monolith Vessel",
                    caption:
                      "Monolithic natural stone washbasin handcrafted for luxury hospitality",
                  })
                }
              >
                <img
                  src={basinImage}
                  alt="Natural stone washbasin"
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                Bring the beauty of natural stone into bathrooms, outdoor wash areas and hospitality
                spaces. Each washbasin can be customized according to the required size, shape,
                stone type, finish and installation style.
              </p>

              <div className="p-3 bg-card border border-border rounded text-xs space-y-1 text-muted-foreground">
                <div>
                  <strong>Applications:</strong> Luxury homes, resorts, farmhouses, spas
                </div>
                <div>
                  <strong>Customization:</strong> Sizing, natural boulder crust, honed bowl
                </div>
              </div>

              <Link
                to="/contact"
                search={{ service: "Custom Stone Washbasins" }}
                className="btn-dark text-xs py-2 px-4"
              >
                Custom Washbasin Enquiry <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 6: PORTFOLIO CALL TO ACTION */}
      <section className="screen-section theme-dark">
        <div className="section-pad-inner text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow text-secondary">Portfolio Call to Action</p>
          <h2 className="text-3xl sm:text-5xl font-display font-normal text-white">
            Have a Similar Project in Mind? Let’s Discuss It.
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
            From a handcrafted stone detail to a complete outdoor stone environment, our goal is to
            create work that feels natural, purposeful and enduring.
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-4">
              Start Your Project <ArrowUpRight size={13} />
            </Link>
            <Link to="/services" className="btn-secondary text-xs py-2.5 px-4">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
