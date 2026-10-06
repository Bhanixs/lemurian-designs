import masonryImage from "@/assets/stone-masonry.jpg";
import stoneLaying from "@/assets/stoneLayingMasonry.png";
import sculptureImage from "@/assets/stone-sculpture.jpg";
import basinImage from "@/assets/stone-basin.jpg";
import kitchenImage from "@/assets/stone-kitchen.jpg";
import fountainImage from "@/assets/stone-fountain.jpg";
import engravingImage from "@/assets/stone-engraving.jpg";
import resortLandscapeImage from "@/assets/resort-landscape.jpg";
import industryCommercialImage from "@/assets/industry-commercial.jpg";
import industryResidentialImage from "@/assets/industry-residential.jpg";
import industryEcostayImage from "@/assets/industry-ecostay.jpg";
import industryPublicImage from "@/assets/industry-public.jpg";
import phase1Image from "@/assets/process-phase-1.jpg";
import phase2Image from "@/assets/process-phase-2.jpg";
import phase3Image from "@/assets/process-phase-3.jpg";
import phase4Image from "@/assets/process-phase-4.jpg";
import phase5Image from "@/assets/process-phase-5.jpg";
import phase6Image from "@/assets/process-phase-6.jpg";
import phase7Image from "@/assets/process-phase-7.jpg";

export {
  masonryImage,
  sculptureImage,
  basinImage,
  kitchenImage,
  fountainImage,
  engravingImage,
  resortLandscapeImage,
  industryCommercialImage,
  industryResidentialImage,
  industryEcostayImage,
  industryPublicImage,
};

export interface ServiceItem {
  number: string;
  title: string;
  serviceKey: string;
  tagline: string;
  description: string;
  idealFor: string[];
  seoKeywords: string[];
  image: string;
  inclusions: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Stone Laying & Masonry",
    serviceKey: "Stone Laying & Masonry",
    tagline: "Precision installation for floors, walls, facades, and landscapes.",
    description:
      "We handle end-to-end stone masonry—from substrate prep to final polishing—using granite, marble, sandstone, limestone, and engineered stone. Our team ensures perfect alignment, joint consistency, and structural integrity for residential, commercial, and hospitality projects.",
    idealFor: [
      "Villa flooring",
      "Feature walls",
      "Cladding",
      "Paving",
      "Retaining walls",
      "Temple structures",
    ],
    seoKeywords: [
      "stone laying services",
      "stone masonry contractors",
      "natural stone installation",
      "granite flooring experts",
      "sandstone cladding",
    ],
    image: stoneLaying,
    inclusions: [
      "End-to-end substrate prep to final polishing",
      "Granite, marble, sandstone & limestone",
      "Perfect alignment & joint consistency",
      "Residential, commercial & hospitality",
      "Retaining walls & structural masonry",
      "Exterior facades & perimeter walling",
    ],
    ctaText: "Enquire About Masonry",
  },
  {
    number: "02",
    title: "Stone Engraving",
    serviceKey: "Stone Engraving",
    tagline: "Personalized inscriptions, logos, and decorative patterns carved in stone.",
    description:
      "Using laser, CNC, and hand-engraving techniques, we create memorial plaques, inauguration stones, signage, and artistic engravings on granite, marble, and sandstone. Every line is crisp, deep, and built to last outdoors and indoors.",
    idealFor: [
      "Nameplates",
      "Commemorative stones",
      "Corporate logos",
      "Temple inscriptions",
      "Memorial markers",
    ],
    seoKeywords: [
      "stone engraving services",
      "laser engraved stone",
      "custom stone nameplates",
      "granite engraving",
      "memorial stone carving",
    ],
    image: engravingImage,
    inclusions: [
      "Laser, CNC & hand-engraved techniques",
      "Crisp, deep weather-defying lettering",
      "Granite, marble & sandstone surfaces",
      "Commemorative & inauguration plaques",
      "Corporate brand marks & identity signs",
      "Sacred temple inscriptions & markers",
    ],
    ctaText: "Discuss Custom Engraving",
  },
  {
    number: "03",
    title: "Stone Sculpting",
    serviceKey: "Stone Sculpting",
    tagline: "Hand-carved and CNC-sculpted art for sacred, decorative, and architectural use.",
    description:
      "Our sculptors blend traditional Chola-era craftsmanship with 3D modeling to produce deities, figurines, relief panels, and abstract forms in marble, granite, and soft stones. Each piece is a narrative in stone.",
    idealFor: [
      "Temple idols",
      "Garden sculptures",
      "Wall reliefs",
      "Heritage restorations",
      "Art installations",
    ],
    seoKeywords: [
      "stone sculpting services",
      "marble sculpture artists",
      "CNC stone carving",
      "temple sculpture makers",
      "custom stone art",
    ],
    image: sculptureImage,
    inclusions: [
      "Traditional Chola-era heritage craftsmanship",
      "Advanced 3D modeling & CNC precision",
      "Sacred temple idols & deity carving",
      "Bespoke architectural wall reliefs",
      "Courtyard & garden statement sculptures",
      "Heritage restorations & conservation",
    ],
    ctaText: "Commission a Sculpture",
  },
  {
    number: "04",
    title: "Resort & Landscape Stone Works",
    serviceKey: "Resort & Landscape Stone Works",
    tagline: "Turnkey stone solutions for hospitality, resorts, and outdoor spaces.",
    description:
      "From stone pathways and water bodies to pergolas, seating, and themed facades—we design and execute landscape stonework that complements nature and elevates guest experience.",
    idealFor: [
      "Resorts",
      "Heritage hotels",
      "Villa landscapes",
      "Public parks",
      "Temple complexes",
    ],
    seoKeywords: [
      "resort stone work",
      "landscape stone contractors",
      "outdoor stone features",
      "hospitality stone design",
      "natural stone landscaping",
    ],
    image: resortLandscapeImage,
    inclusions: [
      "Turnkey hospitality stone master planning",
      "Flagstone pathways & rustic walkways",
      "Pergolas, stone seating & outdoor lounges",
      "Themed facades & grand entrance portals",
      "Pool copings & natural stone surrounds",
      "Subterranean foundations & drainage integration",
    ],
    ctaText: "Explore Resort Stonework",
  },
  {
    number: "05",
    title: "Custom Stone Kitchen Works",
    serviceKey: "Custom Stone Kitchen Works",
    tagline: "Bespoke countertops, islands, backsplashes, and sinks crafted in stone.",
    description:
      "We fabricate kitchen surfaces in granite, quartzite, marble, and compact stone—cut to your layout, finished to your preference (honed, polished, leathered), and sealed for daily use.",
    idealFor: ["Luxury homes", "Boutique hotels", "Chef’s kitchens", "F&B outlets"],
    seoKeywords: [
      "custom stone kitchen countertops",
      "granite kitchen fabrication",
      "marble island makers",
      "stone backsplash installation",
      "kitchen stone contractors",
    ],
    image: kitchenImage,
    inclusions: [
      "Monolithic kitchen islands & countertops",
      "Granite, quartzite, marble & compact stone",
      "Honed, polished, and leathered textures",
      "Integrated seamless backsplashes & sinks",
      "Mitred edges & invisible joinery details",
      "Food-grade sealing for daily culinary life",
    ],
    ctaText: "Order Custom Kitchen Stonework",
  },
  {
    number: "06",
    title: "Stone Fountain & Water Features",
    serviceKey: "Stone Fountain & Water Features",
    tagline: "Architectural fountains, cascades, and interactive water art.",
    description:
      "Our water features combine hydraulic engineering with stone artistry—creating serene centrepieces for lobbies, courtyards, gardens, and spiritual spaces. Materials include granite, sandstone, marble, and river stone.",
    idealFor: [
      "Hotel lobbies",
      "Temple tanks",
      "Villa courtyards",
      "Public plazas",
      "Wellness centres",
    ],
    seoKeywords: [
      "stone fountain makers",
      "custom water features",
      "outdoor stone fountains",
      "temple water body contractors",
      "landscape water art",
    ],
    image: fountainImage,
    inclusions: [
      "Hydraulic engineering meets stone craft",
      "Granite, sandstone, marble & river stone",
      "Central courtyard cascading fountains",
      "Wall-mounted weeping stone water walls",
      "Sacred temple tanks & reflection ponds",
      "Hand-chiseled spillways & spout accents",
    ],
    ctaText: "Create a Water Feature",
  },
  {
    number: "07",
    title: "Custom Stone Washbasins & Bathtubs",
    serviceKey: "Custom Stone Washbasins & Bathtubs",
    tagline: "Monolithic basins and tubs carved from single blocks of stone.",
    description:
      "Each basin or bathtub is sculpted to ergonomic contours, finished smooth, and sealed for water resistance. Choose from matte, polished, or textured finishes in granite, marble, or river stone.",
    idealFor: ["Luxury bathrooms", "Heritage homes", "Boutique hotels", "Spa retreats"],
    seoKeywords: [
      "custom stone washbasins",
      "monolithic stone bathtubs",
      "granite bathroom sinks",
      "marble tub makers",
      "bespoke stone bath fixtures",
    ],
    image: basinImage,
    inclusions: [
      "Carved from single monolithic stone blocks",
      "Ergonomic contours & water-resistant sealing",
      "Matte, honed, or tactile chiseled finishes",
      "Granite, marble & river boulder vessels",
      "Freestanding soaker tubs for spa sanctuaries",
      "Custom vanity countertops & drain integration",
    ],
    ctaText: "Custom Basin & Tub Enquiry",
  },
];

export const whyLemurianData = [
  {
    title: "Master Artisans + Modern Tech",
    description: "Hand-carving heritage skills meets CNC precision.",
  },
  {
    title: "End-to-End Execution",
    description: "Design → fabrication → installation → aftercare.",
  },
  {
    title: "Material Expertise",
    description: "Granite, marble, sandstone, limestone, quartzite, engineered stone.",
  },
  {
    title: "Pan-India Delivery",
    description: "Projects across Tamil Nadu, Puducherry, Karnataka, and beyond.",
  },
  {
    title: "Sustainability Focus",
    description: "Low-waste fabrication, local sourcing, and eco-friendly sealing.",
  },
];

export const servicesProcessSteps = [
  {
    step: "01",
    title: "Consultation & Site Visit",
    description: "Understand your vision, space, and stone preferences.",
  },
  {
    step: "02",
    title: "Design & 3D Visualization",
    description: "CAD drawings, material samples, and finish mockups.",
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Hand-carving, CNC machining, engraving, and polishing in our workshop.",
  },
  {
    step: "04",
    title: "Installation",
    description: "Skilled laying, waterproofing, jointing, and final finishing on-site.",
  },
  {
    step: "05",
    title: "Aftercare Guidance",
    description: "Sealing, cleaning, and maintenance tips for long-term beauty.",
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
    id: "resort-fountain-spotlight",
    title: "Courtyard Water Feature & Fountain",
    category: "Landscape Stonework & Water Features",
    image: fountainImage,
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
    title: "Commercial Spaces",
    tagline: "Corporate headquarters, cultural institutions, fine dining & retail.",
    image: industryCommercialImage,
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
    number: "02",
    title: "Residential Projects",
    tagline: "Private estates, contemporary villas, and ancestral garden homes.",
    image: industryResidentialImage,
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
    number: "03",
    title: "Resorts & Hotels",
    tagline: "Bespoke hospitality destinations, eco-luxury retreats & boutique stays.",
    image: resortLandscapeImage,
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
    number: "04",
    title: "Farms & Eco-Stays",
    tagline: "Agricultural retreats, nature sanctuaries & off-grid homesteads.",
    image: industryEcostayImage,
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
    image: industryPublicImage,
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
