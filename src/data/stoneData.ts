import masonryImage from "@/assets/stone-masonry.jpg";
import sculptureImage from "@/assets/stone-sculpture.jpg";
import basinImage from "@/assets/stone-basin.jpg";
import heroImage from "@/assets/lemurian-hero.jpg";
import phase1Image from "@/assets/process-phase-1.jpg";
import phase2Image from "@/assets/process-phase-2.jpg";
import phase3Image from "@/assets/process-phase-3.jpg";
import phase4Image from "@/assets/process-phase-4.jpg";
import phase5Image from "@/assets/process-phase-5.jpg";
import phase6Image from "@/assets/process-phase-6.jpg";
import phase7Image from "@/assets/process-phase-7.jpg";

export interface ServiceItem {
  number: string;
  title: string;
  serviceKey: string;
  tagline: string;
  description: string;
  image: string;
  inclusions: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Stone Laying & Masonry",
    serviceKey: "Stone Laying & Masonry",
    tagline: "Structural endurance and organic texture for distinguished facades & boundary walls.",
    description:
      "We execute reliable and visually refined stone laying for residential, commercial, hospitality and outdoor projects. We carefully consider stone selection, pattern, alignment, joints, texture and overall integration with the surrounding space.",
    image: masonryImage,
    inclusions: [
      "Natural stone wall construction",
      "Random rubble stone masonry",
      "Dry stone and bonded stonework",
      "Stone cladding and feature walls",
      "Garden walls and boundary walls",
      "Retaining walls & slope protection",
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
    tagline: "Carved identity, monumental scripts, and intricate bas-relief inscriptions.",
    description:
      "Add meaning and identity to your space with custom stone engraving. Every engraving is planned according to the stone type, design style, scale and intended location.",
    image: sculptureImage,
    inclusions: [
      "Names and commemorative lettering",
      "Logos and corporate brand marks",
      "Memorial inscriptions & crests",
      "Directional and entrance welcome signs",
      "Decorative floral & geometric patterns",
      "Traditional & temple motifs",
      "Estate names and villa property signage",
      "Custom artwork on polished stone surfaces",
    ],
    ctaText: "Discuss Custom Engraving",
  },
  {
    number: "03",
    title: "Stone Sculpting",
    serviceKey: "Stone Sculpting",
    tagline: "Bespoke monolithic art and architectural forms hand-carved in granite.",
    description:
      "Our stone sculpting service turns natural stone into expressive forms, artistic installations and architectural details. From a simple concept to a detailed custom piece, we help develop designs that suit the character of the project.",
    image: sculptureImage,
    inclusions: [
      "Custom stone sculptures",
      "Abstract stone architectural art",
      "Traditional and cultural motifs",
      "Fauna & flora-inspired sculptural forms",
      "Carved decorative pillars and columns",
      "Relief stone murals & friezes",
      "Courtyard & garden centerpieces",
      "Resort and hospitality installations",
      "Bespoke architectural focal elements",
    ],
    ctaText: "Commission a Sculpture",
  },
  {
    number: "04",
    title: "Resort & Landscape Stone Works",
    serviceKey: "Resort & Landscape Stone Works",
    tagline: "Harmonizing raw earth with luxury retreats and tropical courtyard environments.",
    description:
      "Natural stone adds a sense of luxury, authenticity and permanence to resort and landscape environments. We create stone features that blend with gardens, architecture, water elements and the surrounding landscape.",
    image: heroImage,
    inclusions: [
      "Flagstone & rustic stone pathways",
      "Garden borders and stone edging",
      "Textured feature walls",
      "Grand estate entrance structures",
      "Outdoor lounge & sit-out stonework",
      "Poolside natural stone elements & copings",
      "Landscape steps and terracing",
      "Hand-chiseled stone platforms",
      "Decorative boulders and installations",
      "Rustic and nature-inspired outdoor spaces",
    ],
    ctaText: "Explore Resort Stonework",
  },
  {
    number: "05",
    title: "Custom Stone Benches",
    serviceKey: "Custom Stone Benches",
    tagline: "Monolithic, weather-defying seating carved for public and private sanctuaries.",
    description:
      "Create comfortable and memorable outdoor seating with custom stone benches. Benches can be designed in simple, rustic, contemporary or sculptural styles based on your requirements.",
    image: masonryImage,
    inclusions: [
      "Botanical gardens & private estates",
      "Resort sit-out & veranda areas",
      "Inner courtyards and atriums",
      "Public parks & promenades",
      "Poolside and reflection decks",
      "Heritage and sacred sanctuary grounds",
      "Commercial office plaza landscapes",
      "Heavy-use civic spaces",
    ],
    ctaText: "Order Custom Benches",
  },
  {
    number: "06",
    title: "Stone Fountains & Water Features",
    serviceKey: "Stone Fountains & Water Features",
    tagline: "Acoustic serenity and cascading water over hand-dressed granite surfaces.",
    description:
      "A well-designed stone fountain can become the focal point of a garden, courtyard, resort or entrance area. Our designs focus on proportion, water movement, material texture and the atmosphere you want to create.",
    image: heroImage,
    inclusions: [
      "Monolithic natural stone fountains",
      "Wall-mounted weeping stone water features",
      "Garden fountain basins",
      "Central courtyard reflecting pools",
      "Resort cascade & water walls",
      "Shallow bowl-style water vessels",
      "Sculptural water spout installations",
      "Custom granite basins and overflow channels",
    ],
    ctaText: "Create a Water Feature",
  },
  {
    number: "07",
    title: "Custom Stone Washbasins",
    serviceKey: "Custom Stone Washbasins",
    tagline: "Organic vessels carved from singular river boulders and raw granite monoliths.",
    description:
      "Bring the beauty of natural stone into bathrooms, outdoor wash areas and hospitality spaces. Each washbasin can be customized according to the required size, shape, stone type, finish and installation style.",
    image: basinImage,
    inclusions: [
      "Luxury villa master bathrooms",
      "Boutique resort open-air powder suites",
      "Private farmhouses & nature retreats",
      "Holistic spa and wellness sanctuaries",
      "Courtyard garden hand-wash alcoves",
      "Fine dining restaurants and cafés",
      "Eco-stays and off-grid sanctuaries",
      "Custom wall-mount or pedestal vessels",
    ],
    ctaText: "Custom Washbasin Enquiry",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "landscape" | "portrait";
  location: string;
  materials: string;
  scope: string;
  description: string;
  dimensions?: string;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "grounded-passage",
    title: "Grounded Passage & Masonry",
    category: "Stone Masonry · Feature & Boundary Walls",
    image: masonryImage,
    aspect: "landscape",
    location: "Western Ghats, Tamil Nadu",
    materials: "Hand-chiseled Granite & Basalt Rubble",
    scope: "Design, structural engineering, dry-joint stone laying & terraced stairs",
    description:
      "A continuous dry-stone boundary wall and integrated amphitheater staircase built to harmonize with natural topography without invasive mortar joints.",
    dimensions: "1,800 sq.ft facade area, 45m pathway",
  },
  {
    id: "continuum-sculpture",
    title: "Continuum Granite Form",
    category: "Granite · Hand-Sculpted Art",
    image: sculptureImage,
    aspect: "portrait",
    location: "Bengaluru, Karnataka",
    materials: "Dense Jet-Black Natural Granite",
    scope: "Conceptual 3D modeling, hand-chisel carving, fine fluting & satin polish",
    description:
      "An evocative monolithic sculpture exploring continuity and weightlessness, carved from a single 6-tonne granite block into a spiraling courtyard centerpiece.",
    dimensions: "2.4m height, 1.1m base diameter",
  },
  {
    id: "weathered-monolith-basin",
    title: "Weathered Monolith Vessel",
    category: "Handmade Washbasin · Hospitality",
    image: basinImage,
    aspect: "landscape",
    location: "Wayanad, Kerala",
    materials: "Submerged River Stone Boulder",
    scope: "Core extraction, hand-hollowed basin interior, honed bowl with natural crust",
    description:
      "Each vessel preserves millions of years of natural water weathering on its exterior while offering a silky honed interior for five-star resort suites.",
    dimensions: "72cm x 54cm x 18cm basin",
  },
  {
    id: "resort-fountain-spotlight",
    title: "Courtyard Water Feature & Fountain",
    category: "Landscape Stonework & Water Features",
    image: heroImage,
    aspect: "landscape",
    location: "Madurai, South India",
    materials: "Hand-dressed Natural Granite & River Pebbles",
    scope: "Turnkey design, quarry stone selection, precision carving & plumbing integration",
    description:
      "A tiered fountain engineered with gentle ripple dynamics, serving as the central acoustic and meditative focal point of a tropical resort sanctuary.",
    dimensions: "4.5m pool diameter, 1.8m central tier",
  },
];

export const industriesData = [
  {
    number: "01",
    title: "Residential Projects",
    tagline: "Private estates, contemporary villas, and ancestral garden homes.",
    image: masonryImage,
    highlight: "Creating grounded, enduring spaces that age with dignity.",
    items: [
      "Garden walls & boundary stone enclosures",
      "Natural stone feature walls and hearths",
      "Outdoor seating & custom stone benches",
      "Monolithic washbasins for powder rooms",
      "Courtyard fountains & weeping water walls",
      "Flagstone pathways, walkways & steps",
      "Monumental entrance structures & gate pillars",
      "Custom sculptures & engraved estate crests",
    ],
  },
  {
    number: "02",
    title: "Resorts & Hotels",
    tagline: "Bespoke hospitality destinations, eco-luxury retreats & boutique stays.",
    image: heroImage,
    highlight: "Evoking timeless sense of place with tactile geological luxury.",
    items: [
      "Comprehensive resort master-landscape stonework",
      "Outdoor sit-outs, verandas & sunken lounges",
      "Poolside natural stone features & organic copings",
      "Signature courtyard fountains & entry water displays",
      "Guest-suite artisanal raw stone washbasins",
      "Meandering estate stone walkways & forest trails",
      "Monumental sculptural installations & focal art",
      "Welcome, directional & engraved bronze-inlaid signage",
    ],
  },
  {
    number: "03",
    title: "Commercial Spaces",
    tagline: "Corporate headquarters, cultural institutions, fine dining & retail.",
    image: sculptureImage,
    highlight: "High-traffic durability coupled with striking brand permanence.",
    items: [
      "Refined corporate office landscapes & atriums",
      "Restaurant & café open-air dining courtyards",
      "Impressive retail entrances & carved thresholds",
      "Bespoke engraved brand signage & company crests",
      "Plaza focal features and acoustic water installations",
      "Durable outdoor stone seating engineered for heavy use",
      "Architectural feature facades with deep shadow reveals",
    ],
  },
  {
    number: "04",
    title: "Farms & Eco-Stays",
    tagline: "Agricultural retreats, nature sanctuaries & off-grid homesteads.",
    image: basinImage,
    highlight: "Dry-stone traditions celebrating raw unadulterated terrain.",
    items: [
      "Rustic dry-stone retaining and boundary structures",
      "Nature-inspired gravel, slab & boulder pathways",
      "Garden landscape features & stepped planting borders",
      "Open-air wash areas & monolithic riverbed basins",
      "Campfire circles & curved sit-out stone benches",
      "Cascading bio-pool water features and check dams",
      "Traditional regional stonework using hyper-local boulders",
    ],
  },
  {
    number: "05",
    title: "Public & Community",
    tagline: "Civic parks, heritage spaces, civic memorials & sacred gardens.",
    image: sculptureImage,
    highlight: "Multi-generational permanence engineered for collective memory.",
    items: [
      "Public park promenades & vandal-proof seating",
      "Memorial installations & commemorative stone plaques",
      "Directional, interpretive & civic civic signage",
      "Heavy-duty stone benches built to resist weather and age",
      "Heritage & temple sculptures preserving classic motifs",
      "Landscape retaining structures & civic amphitheaters",
    ],
  },
];

export const processStepsData = [
  {
    number: "01",
    title: "Consultation",
    phase: "Discovery & Alignment",
    description: "We understand your project, space, design expectations, budget and intended use.",
    details:
      "We begin by understanding your vision, aesthetic preferences, spatial layout, budget parameters, and functional requirements. We discuss references, conceptual sketches, and overall architectural context.",
    deliverables: "Design brief, initial material suggestions, feasibility review",
    image: phase1Image,
  },
  {
    number: "02",
    title: "Site Assessment",
    phase: "Spatial Analysis",
    description:
      "We review the location, measurements, access, surface conditions and surrounding architecture or landscape.",
    details:
      "Our team reviews the physical site: soil conditions, drainage vectors, sunlight exposure, surrounding vegetation, architectural styles, and equipment access for transporting heavy stone.",
    deliverables: "Site measurement documentation, structural viability notes",
    image: phase2Image,
  },
  {
    number: "03",
    title: "Design Development",
    phase: "Precision Detailing",
    description: "We recommend suitable stonework styles, layouts, finishes and design details.",
    details:
      "We produce detailed layout drawings, 3D visualizations, joinery patterns, chisel textures, and elevation profiles tailored to your space.",
    deliverables: "Approved design drawings, scale specifications, quote estimate",
    image: phase3Image,
  },
  {
    number: "04",
    title: "Stone Selection",
    phase: "Material Provenance",
    description:
      "We help select the appropriate stone based on appearance, strength, texture, application and maintenance requirements.",
    details:
      "We source only tested blocks—granite, basalt, slate, river rock, sandstone—inspecting each piece for grain consistency, tensile strength, weather resistance, and natural vein character.",
    deliverables: "Material samples, origin verification, texture swatches",
    image: phase4Image,
  },
  {
    number: "05",
    title: "Crafting & Prep",
    phase: "Artisanal Execution",
    description:
      "Stone is cut, shaped, engraved, sculpted or prepared according to the approved design.",
    details:
      "Our master stonemasons and sculptors cut, shape, dress, chisel, engrave, or sculpt the components. Every edge and joint is dry-fitted in our facility before dispatch.",
    deliverables: "Pre-installation quality audit, photographic progress updates",
    image: phase5Image,
  },
  {
    number: "06",
    title: "Installation",
    phase: "Structural Assembly",
    description:
      "Our team carries out the stonework with attention to alignment, structural stability, finish and site cleanliness.",
    details:
      "On-site installation is executed with structural engineering standards: laser alignment, subterranean foundations, dry-pack joints, and clean site management.",
    deliverables: "Structural anchoring, waterproofing, joint detailing",
    image: phase6Image,
  },
  {
    number: "07",
    title: "Final Inspection",
    phase: "Sign-Off & Handover",
    description:
      "We review the completed work to ensure that the final result reflects the agreed design and quality expectations.",
    details:
      "A rigorous walk-through checks joint integrity, level consistency, water flow dynamics, surface sealing, and overall visual harmony before final client handover.",
    deliverables: "Care & maintenance guide, warranty assurance, project sign-off",
    image: phase7Image,
  },
];

export const strengthsData = [
  {
    title: "Custom-Designed Stonework",
    description:
      "Every installation is tailored specifically to the architecture and landscape of your property.",
  },
  {
    title: "Skilled Finishing & Detailing",
    description: "Centuries-old stone craft traditions blended with modern structural precision.",
  },
  {
    title: "Practical & Aesthetic Solutions",
    description:
      "Engineered for real-world environmental weather while making a stunning visual statement.",
  },
  {
    title: "Residential & Commercial Versatility",
    description:
      "Equally comfortable with delicate master bath basins and multi-acre resort landscapes.",
  },
  {
    title: "Landscape & Outdoor Mastery",
    description:
      "Deep understanding of rain drainage, sun exposure, weathering, and organic integration.",
  },
  {
    title: "Attention to Proportion & Texture",
    description:
      "Careful consideration of grain, color temperature, chisel marks, and shadow lines.",
  },
  {
    title: "Bespoke Engraving & Sculpting",
    description:
      "In-house stone carvers capable of complex lettering, corporate crests, and monumental statues.",
  },
  {
    title: "Project-Specific Material Sourcing",
    description:
      "Direct access to high-grade quarries across Southern India ensuring pure stone integrity.",
  },
  {
    title: "End-to-End Coordination",
    description:
      "From initial napkin sketch through quarry sourcing, crafting, transport, and site installation.",
  },
  {
    title: "Generational Durability",
    description: "Stonework crafted to look even more magnificent decades and centuries from now.",
  },
];

export const faqsData = [
  {
    category: "Services & Scope",
    q: "What type of stonework does Lemurian Designers undertake?",
    a: "We undertake stone laying, masonry, feature walls, retaining walls, pathways, resort landscaping, stone engraving, sculpting, benches, fountains, washbasins and custom stone features for residences, resorts, and civic spaces.",
  },
  {
    category: "Design & Customization",
    q: "Do you create custom stone designs?",
    a: "Yes. Every single project is customized based on your specific space, architectural style, exact measurements, chosen stone type, and intended everyday use.",
  },
  {
    category: "Hospitality & Commercial",
    q: "Can you create stone features for resorts and hotels?",
    a: "Yes. We work extensively with hospitality architects on resort landscaping, flagstone pathways, cascading fountains, sit-out areas, monolithic washbasins, and sculptural landmark pieces.",
  },
  {
    category: "Engraving & Carving",
    q: "Do you provide stone engraving and lettering?",
    a: "Yes. We create custom estate names, logos, corporate crests, memorial inscriptions, directional signs, ornamental patterns, and bas-relief artwork on durable stone slabs.",
  },
  {
    category: "Design Process",
    q: "Can I share a reference image or sketch?",
    a: "Absolutely. You can share drawings, Pinterest references, architectural blueprints, or site photographs. Our design team will analyze them and adapt the concept for natural stone execution.",
  },
  {
    category: "Materials & Selection",
    q: "Do you help with stone selection?",
    a: "Yes. We guide you through selecting the ideal stone (granites, basalts, slates, river boulders, sandstones) based on structural load, water exposure, foot traffic, maintenance, and visual character.",
  },
  {
    category: "Quotations & Getting Started",
    q: "How do I request a quotation?",
    a: "Simply use our Request Consultation form, call us, or message us on WhatsApp. Share your location, rough dimensions, and photos, and our specialists will prepare a comprehensive proposal.",
  },
];
