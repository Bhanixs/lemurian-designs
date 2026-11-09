import dimensions from "@/assets/optimized/dimensions.json";

// Each image in src/assets/optimized has a main file (name.webp) and, when the original is wide
// enough, name-640.webp and name-1280.webp. Components keep passing the main file's URL as a plain
// string, so image fields in stoneData and ImageModal need no knowledge of the variants.
const optimizedUrls = import.meta.glob<string>("../assets/optimized/*.webp", {
  eager: true,
  import: "default",
});

const FILE_NAME = /([^/]+?)(?:-(640|1280))?\.webp$/;

type ImageData = { srcSet: string; width: number; height: number };

function buildImageTable(): Map<string, ImageData> {
  const groups = new Map<string, { main?: string; variants: [number, string][] }>();

  for (const [path, url] of Object.entries(optimizedUrls)) {
    const match = FILE_NAME.exec(path);
    if (!match?.[1]) continue;
    const group = groups.get(match[1]) ?? { variants: [] };
    if (match[2]) group.variants.push([Number(match[2]), url]);
    else group.main = url;
    groups.set(match[1], group);
  }

  const table = new Map<string, ImageData>();
  const sizes: Record<string, { width: number; height: number }> = dimensions;
  for (const [name, { main, variants }] of groups) {
    const size = sizes[name];
    if (!main || !size) continue;
    const candidates = [...variants, [size.width, main] as [number, string]]
      .sort(([a], [b]) => a - b)
      .map(([width, url]) => `${url} ${width}w`);
    table.set(main, { srcSet: candidates.join(", "), ...size });
  }
  return table;
}

const imageTable = buildImageTable();

/** Content images: a half-width column on desktop, full width less page padding on phones. */
export const CONTENT_SIZES = "(min-width: 1024px) 50vw, calc(100vw - 50px)";

// On phones a landscape hero is cropped into a tall screen, so only part of its width is visible.
// A plain 100vw would choose a file too small to stay sharp at that scale.
const HERO_SIZES = "(max-width: 768px) 150vw, 100vw";

/** Returns src plus srcSet and dimensions. Unknown URLs fall back to a plain src. */
export function responsiveImage(src: string) {
  return { src, ...imageTable.get(src) };
}

/**
 * Above-the-fold image: loads straight away. fetchPriority="high" is left off on purpose: the
 * largest paint on these pages is the hero text, and raising the image's priority measurably
 * slowed it by competing with CSS and fonts.
 */
export function heroImage(src: string) {
  return {
    loading: "eager",
    decoding: "async",
    sizes: HERO_SIZES,
    ...responsiveImage(src),
  } as const;
}

/** Below-the-fold image: loads as the visitor scrolls near it. */
export function lazyImage(src: string, sizes: string = CONTENT_SIZES) {
  return { loading: "lazy", decoding: "async", sizes, ...responsiveImage(src) } as const;
}
