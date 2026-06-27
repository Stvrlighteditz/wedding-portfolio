import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { ServicesSection } from "@/components/home/services-section";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { creativeProcess, studioHighlights } from "@/constants/content";
import { studio } from "@/constants/site";

const portraitImage =
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=1700&q=85";

const whatsappUrl = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to enquire about wedding cinematography availability."
)}`;

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Aurelia Films, a luxury wedding cinematography studio crafting elegant films for modern couples.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Aurelia Films",
    description:
      "A luxury wedding cinematography studio crafting elegant films for modern couples.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader />

      <section className="luxury-container grid gap-12 pt-36 pb-24 md:pt-44 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:items-end">
        <Reveal>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
            About Aurelia Films
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
            Wedding cinema with restraint, intimacy, and atmosphere.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-ivory/68">
            We approach weddings like living cinema: composed but never stiff,
            emotional but never excessive, luxurious without losing the truth of
            the day.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[32rem] overflow-hidden border border-white/10 bg-graphite shadow-luxury">
          <Image
            src={portraitImage}
            alt="Wedding cinematography behind the scenes"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-10">
        <div className="luxury-container grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {studioHighlights.map((item) => (
            <div key={item.label} className="bg-charcoal p-5 md:p-7">
              <p className="font-serif text-4xl text-ivory">{item.value}</p>
              <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mist">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="luxury-container py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              Creative Process
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
              A calm process for emotionally rich films.
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {creativeProcess.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="grid gap-5 bg-ink p-6 md:grid-cols-[6rem_1fr] md:p-8">
                  <p className="font-serif text-4xl text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-serif text-3xl text-ivory">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-ivory/64">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="border-t border-white/10 bg-ink py-24">
        <div className="luxury-container flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              Availability
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
              Let the wedding feel effortless on camera.
            </h2>
          </div>
          <LuxuryButton
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            icon={<ArrowRight size={15} strokeWidth={1.8} />}
          >
            Start Enquiry
          </LuxuryButton>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
