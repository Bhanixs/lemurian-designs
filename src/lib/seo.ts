export const SITE_URL = "https://www.lemuriandesigners.com";
export const SITE_NAME = "Lemurian Designers";

type PageHeadOptions = {
  path: string;
  title: string;
  description: string;
  /** Social share image in public/og, for example "home.jpg". */
  image: string;
  socialTitle?: string;
  socialDescription?: string;
  keywords?: string;
};

/** Page title, description, canonical URL and social tags, all using the canonical domain. */
export function pageHead({
  path,
  title,
  description,
  image,
  socialTitle = title,
  socialDescription = description,
  keywords,
}: PageHeadOptions) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}/og/${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: socialDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: socialDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
