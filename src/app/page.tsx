import type { Metadata } from "next";

import { AboutStudio } from "@/components/home/about-studio";
import { BookingCTA } from "@/components/home/booking-cta";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { InstagramPreview } from "@/components/home/instagram-preview";
import { PortfolioCategories } from "@/components/home/portfolio-categories";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FeaturedFilms } from "@/components/projects/featured-films";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  homeProjectsQuery,
  homeTestimonialsQuery
} from "@/sanity/lib/queries";
import { getStudioProfile } from "@/sanity/lib/site";
import type { Project, Testimonial } from "@/types/project";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

export default async function HomePage() {
  const [projects, testimonials, studio] = await Promise.all([
    sanityFetch<Project[]>({
      query: homeProjectsQuery,
      tags: ["project"],
      revalidate: 30
    }),
    sanityFetch<Testimonial[]>({
      query: homeTestimonialsQuery,
      tags: ["testimonial"],
      revalidate: 30
    }),
    getStudioProfile()
  ]);

  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader studio={studio} />
      <CinematicHero studio={studio} />
      <FeaturedFilms projects={projects} />
      <PortfolioCategories projects={projects} />
      <AboutStudio />
      <ServicesSection />
      <TestimonialsSection testimonials={testimonials} />
      <InstagramPreview projects={projects} studio={studio} />
      <BookingCTA studio={studio} />
      <SiteFooter studio={studio} />
    </main>
  );
}
