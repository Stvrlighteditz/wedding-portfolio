import type { MetadataRoute } from "next";

import { studio } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
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
