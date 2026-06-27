import type { Metadata, Viewport } from "next";

import { SanityStudio } from "@/components/studio/sanity-studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Content Studio | Stvrlight Films",
  robots: {
    index: false,
    follow: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function StudioPage() {
  return <SanityStudio />;
}
