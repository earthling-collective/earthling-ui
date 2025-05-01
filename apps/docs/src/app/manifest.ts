import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Earthling UI",
    short_name: "Earthling UI",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#111010",
    background_color: "#111010",
    display: "standalone",
    start_url: "/?source=pwa",
    scope: "/",
    orientation: "portrait",
  };
}
