import type { MetadataRoute } from "next";
import { componentInformation } from "@/lib/component-info";
import { pageInformation } from "@/lib/page-info";

const BASE_URL = "https://ui.earthling.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pageInformation.map((page) => ({
      url: `${BASE_URL}${page.href}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...componentInformation.map((component) => ({
      url: `${BASE_URL}/components/${component.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
