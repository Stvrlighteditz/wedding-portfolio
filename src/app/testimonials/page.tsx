import { MessageSquareQuote } from "lucide-react";
import type { Metadata } from "next";

import { BookingCTA } from "@/components/home/booking-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { sanityFetch } from "@/sanity/lib/fetch";
import { testimonialsQuery } from "@/sanity/lib/queries";
import type { Testimonial } from "@/types/project";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client words from couples who trusted Aurelia Films with their wedding story.",
  alternates: {
    canonical: "/testimonials"
  },
  openGraph: {
    title: "Testimonials",
    description:
      "Client words from couples who trusted Aurelia Films with their wedding story.",
    url: "/testimonials"
  }
};

export default async function TestimonialsPage() {
  const testimonials = await sanityFetch<Testimonial[]>({
    query: testimonialsQuery,
    tags: ["testimonial"],
    revalidate: 30
  });

  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader />

      <section className="luxury-container pt-36 pb-20 md:pt-44">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
            <MessageSquareQuote size={16} strokeWidth={1.7} />
            Testimonials
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
            Words from couples who trusted the frame.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/68">
            A wedding film lives beyond the day itself. These notes reflect the
            care, calm, and emotional precision behind each story.
          </p>
        </Reveal>
      </section>

      <section className="luxury-container pb-28">
        {testimonials.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial._id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border border-white/10 bg-white/[0.035] p-8 md:p-10">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                Client Stories
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/68">
                Client notes are being gathered with the same care as the films
                themselves.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      <BookingCTA />
      <SiteFooter />
    </main>
  );
}
