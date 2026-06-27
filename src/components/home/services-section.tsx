import {
  Clapperboard,
  Film,
  HeartHandshake,
  Palette,
  PlaySquare,
  Sparkles
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { services } from "@/constants/content";

const icons = [
  Clapperboard,
  Sparkles,
  Film,
  HeartHandshake,
  PlaySquare,
  Palette
] as const;

export function ServicesSection() {
  return (
    <section className="border-t border-white/10 bg-charcoal py-24 md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] md:items-end">
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              Services
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-balance md:text-7xl">
              Films, edits, and delivery shaped for modern weddings.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-8 text-ivory/64 md:justify-self-end">
              Coverage and post-production are built around clarity, elegance,
              and a client experience that feels calm from first enquiry to
              final delivery.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={service.title} delay={index * 0.04} className="h-full">
                <article className="group flex min-h-80 h-full flex-col justify-between bg-charcoal p-6 transition duration-300 hover:bg-graphite md:p-7">
                  <div>
                    <div className="mb-8 grid size-12 place-items-center border border-champagne/35 bg-champagne/10 text-champagne transition duration-300 group-hover:bg-champagne group-hover:text-ink">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <h3 className="font-serif text-3xl leading-tight text-ivory">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-ivory/64">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-8 border-t border-white/10 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                    {service.feature}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
