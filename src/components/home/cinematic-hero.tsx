"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, MessageCircle, Play } from "lucide-react";

import { HeroVideo } from "@/components/media/hero-video";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { smoothEase } from "@/constants/motion";
import { studio } from "@/constants/site";

const metrics = [
  { value: "120+", label: "weddings filmed" },
  { value: "4K", label: "cinematic delivery" },
  { value: "15", label: "day teaser edits" }
] as const;

const whatsappUrl = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to book a wedding cinematography enquiry."
)}`;

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.25
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: smoothEase }
  }
};

export function CinematicHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <HeroVideo posterUrl={studio.heroPosterUrl} videoUrl={studio.heroVideoUrl} />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-end px-5 pb-8 pt-28 md:px-8 lg:px-10 lg:pb-10">
        <motion.div
          className="grid min-h-[calc(100svh-9rem)] items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="max-w-5xl pb-12 md:pb-16">
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-champagne"
            >
              {studio.tagline}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[clamp(4rem,13vw,11.5rem)] leading-[0.82] text-balance"
            >
              {studio.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-ivory/76 text-pretty md:text-lg"
            >
              Editorial wedding cinematography shaped with quiet luxury,
              emotional pacing, and frame-by-frame attention to the story
              couples want to relive for a lifetime.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LuxuryButton href="#films" icon={<ArrowRight size={15} strokeWidth={1.8} />}>
                View Films
              </LuxuryButton>
              <LuxuryButton
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<MessageCircle size={15} strokeWidth={1.8} />}
              >
                Book a Date
              </LuxuryButton>
            </motion.div>
          </div>

          <motion.aside
            variants={fadeUp}
            className="mb-12 hidden border-l border-white/14 pl-7 lg:block"
          >
            <button
              type="button"
              className="group mb-8 flex items-center gap-4 text-left"
              aria-label="Play showreel"
            >
              <span className="grid size-14 place-items-center rounded-full border border-champagne/60 bg-champagne/10 text-champagne shadow-[0_0_40px_rgba(216,181,109,0.18)] transition group-hover:bg-champagne group-hover:text-ink">
                <Play size={18} fill="currentColor" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-mist">
                  Showreel
                </span>
                <span className="mt-1 block font-serif text-2xl text-ivory">
                  Watch the mood
                </span>
              </span>
            </button>
            <p className="text-sm leading-7 text-ivory/64">
              Designed for couples who want fewer poses, deeper feeling, and a
              film that still feels elegant ten years from now.
            </p>
          </motion.aside>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.95, ease: smoothEase }}
          className="grid gap-5 border-t border-white/10 pt-5 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div className="grid grid-cols-3 gap-3 sm:max-w-xl">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-2xl text-ivory md:text-3xl">{metric.value}</p>
                <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-mist">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#films"
            className="hidden items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-mist transition hover:text-champagne md:inline-flex"
          >
            Scroll
            <span className="grid size-9 place-items-center rounded-full border border-white/14">
              <ArrowDown size={15} strokeWidth={1.7} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
