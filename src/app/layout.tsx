import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { PageTransition } from "@/components/motion/page-transition";
import { StructuredData } from "@/components/seo/structured-data";
import { getStudioProfile } from "@/sanity/lib/site";
import { getSiteUrl } from "@/utils/site-url";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const siteUrl = getSiteUrl();

export async function generateMetadata(): Promise<Metadata> {
  const studio = await getStudioProfile();

  return {
    metadataBase: new URL(siteUrl),
    applicationName: studio.name,
    title: {
      default: `${studio.name} | Wedding Cinematographer & Video Editor`,
      template: `%s | ${studio.name}`
    },
    description:
      "Luxury cinematic wedding films, teasers, reels, and full wedding stories crafted for modern couples.",
    authors: [{ name: studio.name }],
    creator: studio.name,
    publisher: studio.name,
    keywords: [
      "wedding cinematographer",
      "wedding videographer",
      "wedding films",
      "pre wedding film",
      "cinematic wedding video",
      "video editor"
    ],
    category: "wedding cinematography",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    icons: {
      icon: "/icon",
      apple: "/icon"
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: `${studio.name} | Wedding Cinematographer & Video Editor`,
      description:
        "Premium cinematic wedding films crafted with elegance, emotion, and editorial precision.",
      url: siteUrl,
      siteName: studio.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${studio.name} wedding cinematography`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: studio.name,
      description:
        "Luxury cinematic wedding films for couples who want their story to feel timeless.",
      images: ["/twitter-image"]
    }
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const studioProfile = await getStudioProfile();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <StructuredData studio={studioProfile} />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
