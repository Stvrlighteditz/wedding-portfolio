import type { MetadataRoute } from "next";

import { getStudioProfile } from "@/sanity/lib/site";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const studio = await getStudioProfile();

  return {
    name: `${studio.name} | Wedding Cinematographer`,
    short_name: studio.name,
    description:
      "Luxury cinematic wedding films, teasers, reels, and full wedding stories.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
