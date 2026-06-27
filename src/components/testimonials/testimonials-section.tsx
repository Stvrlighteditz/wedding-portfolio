import { ArrowRight, MessageSquareQuote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import type { Testimonial } from "@/types/project";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null;

  const previewTestimonials = testimonials.slice(0, 3);

  return (
    <section className="border-t border-white/10 bg-ink py-24 md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              <MessageSquareQuote size={16} strokeWidth={1.7} />
              Client Testimonials
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-balance md:text-7xl">
              The quiet proof is in what couples remember.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <LuxuryButton
              href="/testimonials"
              variant="secondary"
              icon={<ArrowRight size={15} strokeWidth={1.8} />}
            >
              Read More
            </LuxuryButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {previewTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
