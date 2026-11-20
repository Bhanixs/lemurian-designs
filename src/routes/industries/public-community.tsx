import { createFileRoute } from "@tanstack/react-router";
import { IndustrySubPage } from "@/components/IndustrySubPage";
import { industriesNavItems } from "@/lib/site-nav";
import { pageHead } from "@/lib/seo";

const item = industriesNavItems.find((s) => s.slug === "public-community")!;

export const Route = createFileRoute("/industries/public-community")({
  head: () =>
    pageHead({
      path: item.path,
      title: item.seoTitle,
      description: item.description,
      image: item.ogImage,
    }),
  component: () => <IndustrySubPage item={item} />,
});
