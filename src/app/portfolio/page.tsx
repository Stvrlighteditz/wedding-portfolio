import type { Metadata } from "next";

import { BookingCTA } from "@/components/home/booking-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioFilterGrid } from "@/components/projects/portfolio-filter-grid";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/types/project";
import { getInitialPortfolioFilter } from "@/utils/category";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore cinematic wedding highlights, teasers, reels, full films, and pre-wedding stories.",
  alternates: {
    canonical: "/portfolio"
  },
  openGraph: {
    title: "Portfolio",
    description:
      "Explore cinematic wedding highlights, teasers, reels, full films, and pre-wedding stories.",
    url: "/portfolio"
  }
};

type PortfolioPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const initialFilter = getInitialPortfolioFilter(params?.category);
  const projects = await sanityFetch<Project[]>({
    query: projectsQuery,
    tags: ["project"],
    revalidate: 30
  });

  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader />
      <section className="luxury-container pt-36 pb-20 md:pt-44">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
          Portfolio
        </p>
        <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[0.92] text-balance md:text-8xl">
          Films shaped around feeling, pace, and memory.
        </h1>
      </section>

      <PortfolioFilterGrid projects={projects} initialFilter={initialFilter} />
      <BookingCTA />
      <SiteFooter />
    </main>
  );
}
