"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Link from "next/link";

import { smoothEase } from "@/constants/motion";
import type { Testimonial } from "@/types/project";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const rating = Math.min(5, Math.max(1, Math.round(testimonial.rating || 5)));

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay: index * 0.07, ease: smoothEase }}
      className="flex h-full flex-col justify-between border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-champagne/40 hover:bg-white/[0.055] md:p-7"
    >
      <div>
        <div className="mb-8 flex items-center justify-between gap-5">
          <span className="grid size-11 place-items-center border border-champagne/35 bg-champagne/10 text-champagne">
            <Quote size={18} strokeWidth={1.7} />
          </span>
          <div className="flex items-center gap-1 text-champagne" aria-label={`${rating} star rating`}>
            {Array.from({ length: rating }).map((_, starIndex) => (
              <Star
                key={starIndex}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>

        <p className="font-serif text-2xl leading-snug text-ivory md:text-3xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <footer className="mt-9 border-t border-white/10 pt-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-champagne">
          {testimonial.name}
        </p>
        {testimonial.role ? (
          <p className="mt-2 text-sm leading-6 text-mist">{testimonial.role}</p>
        ) : null}
        {testimonial.project?.slug ? (
          <Link
            href={`/portfolio/${testimonial.project.slug}`}
            className="mt-4 inline-flex text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ivory/58 transition hover:text-champagne"
          >
            {testimonial.project.coupleName || testimonial.project.title}
          </Link>
        ) : null}
      </footer>
    </motion.article>
  );
}
