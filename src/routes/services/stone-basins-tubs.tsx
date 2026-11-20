import { createFileRoute } from "@tanstack/react-router";
import { ServiceSubPage } from "@/components/ServiceSubPage";
import { servicesNavItems } from "@/lib/site-nav";
import { pageHead } from "@/lib/seo";

const item = servicesNavItems.find((s) => s.slug === "stone-basins-tubs")!;

export const Route = createFileRoute("/services/stone-basins-tubs")({
  head: () =>
    pageHead({
      path: item.path,
      title: item.seoTitle,
      description: item.description,
      image: item.ogImage,
    }),
  component: () => <ServiceSubPage item={item} />,
});
