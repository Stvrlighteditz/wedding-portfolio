import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { studioHighlights } from "@/constants/content";
import type { StudioProfile } from "@/utils/studio-profile";

const studioImage =
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85";

type AboutStudioProps = {
  studio: StudioProfile;
};

export function AboutStudio({ studio }: AboutStudioProps) {
  return (
    <section className="border-t border-white/10 bg-ink py-24 md:py-32">
      <div className="luxury-container grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-center">
        <Reveal className="relative min-h-[34rem] overflow-hidden border border-white/10 bg-graphite shadow-luxury">
          <Image
            src={studioImage}
            alt="Cinematic wedding couple portrait"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="max-w-sm font-serif text-3xl leading-tight text-ivory md:text-4xl">
              Quiet direction. Honest emotion. A film that ages with grace.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              About Studio
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-balance md:text-7xl">
              A cinematic eye for weddings that feel deeply personal.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/68 md:text-lg">
              {studio.name} creates wedding stories with the restraint of
              editorial cinema and the warmth of documentary memory. Every
              frame is guided by feeling, composition, pacing, and the small
              details that make a celebration unmistakably yours.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
              {studioHighlights.map((item) => (
                <div key={item.label} className="bg-ink p-5">
                  <p className="font-serif text-3xl text-ivory">{item.value}</p>
                  <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-mist">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9">
              <LuxuryButton
                href="/about"
                variant="secondary"
                icon={<ArrowRight size={15} strokeWidth={1.8} />}
              >
                Meet the Studio
              </LuxuryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
