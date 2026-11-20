import stoneLaying from "@/assets/optimized/stoneLayingMasonry.webp";
import {
  engravingImage,
  sculptureImage,
  resortLandscapeImage,
  kitchenImage,
  fountainImage,
  basinImage,
  industryPublicImage,
  industryCommercialImage,
  industryResidentialImage,
  industryEcostayImage,
} from "@/data/stoneData";

export interface NavSubItem {
  slug: string;
  path: string;
  label: string;
  h1: string;
  seoTitle: string;
  description: string;
  serviceKey: string;
  category: "service" | "industry";
  number: string;
  tagline: string;
  highlight?: string;
  image: string;
  ogImage: string;
  relatedPaths: string[];
}

export const servicesNavItems: NavSubItem[] = [
  {
    slug: "stone-laying-masonry",
    path: "/services/stone-laying-masonry",
    label: "Stone Laying & Masonry",
    h1: "Stone Laying & Architectural Masonry",
    seoTitle: "Stone Laying & Masonry | Lemurian Designers",
    description:
      "Precision natural stone masonry, cladding, flooring, and feature walls for residential and hospitality projects with pan-India delivery.",
    serviceKey: "Stone Laying & Masonry",
    category: "service",
    number: "01",
    tagline: "Precision installation for floors, walls, facades, and landscapes.",
    image: stoneLaying,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/resort-landscape",
      "/services/stone-kitchens",
      "/services/stone-fountains",
    ],
  },
  {
    slug: "stone-engraving",
    path: "/services/stone-engraving",
    label: "Stone Engraving",
    h1: "Bespoke Stone Engraving & Inscriptions",
    seoTitle: "Stone Engraving Services | Lemurian Designers",
    description:
      "Custom stone engraving, commemorative plaques, corporate signage, and temple inscriptions carved in granite, marble, and sandstone.",
    serviceKey: "Stone Engraving",
    category: "service",
    number: "02",
    tagline: "Personalized inscriptions, logos, and decorative patterns carved in stone.",
    image: engravingImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/stone-sculpting",
      "/services/stone-laying-masonry",
      "/industries/public-community",
    ],
  },
  {
    slug: "stone-sculpting",
    path: "/services/stone-sculpting",
    label: "Stone Sculpting",
    h1: "Handcrafted Stone Sculptures & Reliefs",
    seoTitle: "Stone Sculpting & Carving | Lemurian Designers",
    description:
      "Hand-carved and CNC stone sculptures, temple idols, wall reliefs, and architectural art in marble and granite by master artisans.",
    serviceKey: "Stone Sculpting",
    category: "service",
    number: "03",
    tagline: "Hand-carved and CNC-sculpted art for sacred, decorative, and architectural use.",
    image: sculptureImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/stone-engraving",
      "/services/stone-fountains",
      "/industries/residential-projects",
    ],
  },
  {
    slug: "resort-landscape",
    path: "/services/resort-landscape",
    label: "Resort & Landscape",
    h1: "Resort & Landscape Stone Craft",
    seoTitle: "Resort & Landscape Stonework | Lemurian Designers",
    description:
      "Turnkey stone landscape design, flagstone pathways, courtyards, pergolas, and natural pool copings for luxury resorts and estates.",
    serviceKey: "Resort & Landscape Stone Works",
    category: "service",
    number: "04",
    tagline: "Turnkey stone solutions for hospitality, resorts, and outdoor spaces.",
    image: resortLandscapeImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/stone-fountains",
      "/industries/resorts-hotels",
      "/services/stone-laying-masonry",
    ],
  },
  {
    slug: "stone-kitchens",
    path: "/services/stone-kitchens",
    label: "Custom Stone Kitchens",
    h1: "Custom Stone Kitchens & Countertops",
    seoTitle: "Custom Stone Kitchen Works | Lemurian Designers",
    description:
      "Bespoke countertops, monolithic islands, and backsplashes crafted in granite, quartzite, and marble with seamless mitred joinery.",
    serviceKey: "Custom Stone Kitchen Works",
    category: "service",
    number: "05",
    tagline: "Bespoke countertops, islands, backsplashes, and sinks crafted in stone.",
    image: kitchenImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/stone-basins-tubs",
      "/services/stone-laying-masonry",
      "/industries/residential-projects",
    ],
  },
  {
    slug: "stone-fountains",
    path: "/services/stone-fountains",
    label: "Stone Fountains",
    h1: "Architectural Stone Fountains & Water Features",
    seoTitle: "Stone Fountains & Water Art | Lemurian Designers",
    description:
      "Architectural stone fountains, courtyard cascades, weeping walls, and temple water bodies engineered with precision hydraulic integration.",
    serviceKey: "Stone Fountains & Water Features",
    category: "service",
    number: "06",
    tagline: "Architectural fountains, cascades, and interactive water art.",
    image: fountainImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/resort-landscape",
      "/services/stone-sculpting",
      "/industries/resorts-hotels",
    ],
  },
  {
    slug: "stone-basins-tubs",
    path: "/services/stone-basins-tubs",
    label: "Washbasins & Bathtubs",
    h1: "Monolithic Stone Washbasins & Bathtubs",
    seoTitle: "Stone Washbasins & Bathtubs | Lemurian Designers",
    description:
      "Monolithic stone washbasins and freestanding bathtubs sculpted from single boulders of river stone, granite, and marble.",
    serviceKey: "Custom Stone Washbasins",
    category: "service",
    number: "07",
    tagline: "Monolithic basins and tubs carved from single blocks of stone.",
    image: basinImage,
    ogImage: "services.jpg",
    relatedPaths: [
      "/services/stone-kitchens",
      "/industries/resorts-hotels",
      "/industries/residential-projects",
    ],
  },
];

export const industriesNavItems: NavSubItem[] = [
  {
    slug: "public-community",
    path: "/industries/public-community",
    label: "Public & Community",
    h1: "Stonework for Public Spaces & Communities",
    seoTitle: "Public & Community Stonework | Lemurian Designers",
    description:
      "Enduring civic stonework for public parks, memorial installations, heritage sites, civic signage, and heavy-duty stone amphitheaters.",
    serviceKey: "Public & Community",
    category: "industry",
    number: "01",
    tagline: "Civic parks, heritage spaces, civic memorials & sacred gardens.",
    highlight: "Multi-generational permanence engineered for collective memory.",
    image: industryPublicImage,
    ogImage: "industries.jpg",
    relatedPaths: [
      "/industries/commercial-spaces",
      "/services/stone-engraving",
      "/services/stone-laying-masonry",
    ],
  },
  {
    slug: "commercial-spaces",
    path: "/industries/commercial-spaces",
    label: "Commercial Spaces",
    h1: "Architectural Stonework for Commercial Spaces",
    seoTitle: "Commercial Stonework Solutions | Lemurian Designers",
    description:
      "High-durability natural stone masonry, atriums, brand crests, courtyards, and facades for corporate offices and retail spaces.",
    serviceKey: "Commercial Spaces",
    category: "industry",
    number: "02",
    tagline: "Corporate headquarters, cultural institutions, fine dining & retail.",
    highlight: "High-traffic durability coupled with striking brand permanence.",
    image: industryCommercialImage,
    ogImage: "industries.jpg",
    relatedPaths: [
      "/industries/resorts-hotels",
      "/services/stone-laying-masonry",
      "/services/stone-engraving",
    ],
  },
  {
    slug: "residential-projects",
    path: "/industries/residential-projects",
    label: "Residential Projects",
    h1: "Natural Stonework for Private Residences",
    seoTitle: "Residential Stonework Design | Lemurian Designers",
    description:
      "Natural stone boundary walls, private courtyards, monolith basins, flagstone paths, and custom sculptures for luxury homes and estates.",
    serviceKey: "Residential Projects",
    category: "industry",
    number: "03",
    tagline: "Private estates, contemporary villas, and ancestral garden homes.",
    highlight: "Creating grounded, enduring spaces that age with dignity.",
    image: industryResidentialImage,
    ogImage: "industries.jpg",
    relatedPaths: [
      "/industries/farms-eco-stays",
      "/services/stone-kitchens",
      "/services/stone-basins-tubs",
    ],
  },
  {
    slug: "resorts-hotels",
    path: "/industries/resorts-hotels",
    label: "Resorts & Hotels",
    h1: "Natural Stone Design for Resorts & Hotels",
    seoTitle: "Resort & Hotel Stonework | Lemurian Designers",
    description:
      "Tactile luxury stonework for boutique retreats and 5-star resorts: arrival water features, villa washbasins, pathways, and lounges.",
    serviceKey: "Resorts & Hotels",
    category: "industry",
    number: "04",
    tagline: "Bespoke hospitality destinations, eco-luxury retreats & boutique stays.",
    highlight: "Evoking timeless sense of place with tactile geological luxury.",
    image: resortLandscapeImage,
    ogImage: "industries.jpg",
    relatedPaths: [
      "/services/resort-landscape",
      "/services/stone-fountains",
      "/industries/farms-eco-stays",
    ],
  },
  {
    slug: "farms-eco-stays",
    path: "/industries/farms-eco-stays",
    label: "Farms & Eco-Stays",
    h1: "Dry-Stone & Natural Craft for Farms & Eco-Stays",
    seoTitle: "Stonework for Farms & Eco-Stays | Lemurian Designers",
    description:
      "Rustic dry-stone masonry, boulder pathways, riverbed washbasins, and campfire circles crafted with hyper-local natural stone.",
    serviceKey: "Farms & Eco-Stays",
    category: "industry",
    number: "05",
    tagline: "Agricultural retreats, nature sanctuaries & off-grid homesteads.",
    highlight: "Dry-stone traditions celebrating raw unadulterated terrain.",
    image: industryEcostayImage,
    ogImage: "industries.jpg",
    relatedPaths: [
      "/industries/residential-projects",
      "/services/resort-landscape",
      "/services/stone-laying-masonry",
    ],
  },
];

export const allSubPageItems: NavSubItem[] = [...servicesNavItems, ...industriesNavItems];

export function findSubPageByPath(path: string): NavSubItem | undefined {
  return allSubPageItems.find((item) => item.path === path);
}

export function findSubPageBySlug(slug: string): NavSubItem | undefined {
  return allSubPageItems.find((item) => item.slug === slug);
}
