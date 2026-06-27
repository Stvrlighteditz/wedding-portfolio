import { ArrowRight, Camera, Play } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { LuxuryButton } from "@/components/ui/luxury-button";
import type { Project } from "@/types/project";
import type { StudioProfile } from "@/utils/studio-profile";

const visualMoments = [
  {
    label: "Haldi light",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    label: "Ceremony frame",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
  },
  {
    label: "Reception mood",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    label: "Editorial portrait",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
  }
] as const;

type InstagramPreviewProps = {
  projects: Project[];
  studio: StudioProfile;
};

export function InstagramPreview({ projects, studio }: InstagramPreviewProps) {
  const featuredProject = projects[0];
  const heroImage =
    featuredProject?.thumbnail?.asset?.url ||
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85";

  return (
    <section className="border-t border-white/10 bg-charcoal py-24 md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_auto] md:items-end">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              <Camera size={16} strokeWidth={1.7} />
              Instagram Preview
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-balance md:text-7xl">
              Small frames from weddings, edits, and in-between moments.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <LuxuryButton
              href={studio.instagram}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={<ArrowRight size={15} strokeWidth={1.8} />}
            >
              {studio.instagramHandle}
            </LuxuryButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal className="group relative min-h-[36rem] overflow-hidden border border-white/10 bg-graphite shadow-luxury">
            <Image
              src={heroImage}
              alt={
                featuredProject
                  ? `${featuredProject.title} Instagram preview`
                  : "Wedding film Instagram preview"
              }
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                Latest Frame
              </p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
                {featuredProject?.coupleName || "Editorial wedding stories"}
              </h3>
              {featuredProject ? (
                <p className="mt-4 max-w-lg text-sm leading-7 text-ivory/68">
                  {featuredProject.shortDescription}
                </p>
              ) : null}
            </div>
            <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full border border-champagne/55 bg-champagne/10 text-champagne backdrop-blur-xl">
              <Play size={16} fill="currentColor" strokeWidth={1.5} />
            </span>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {visualMoments.map((moment, index) => (
              <Reveal
                key={moment.label}
                delay={index * 0.05}
                className={index === 1 ? "row-span-2" : ""}
              >
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full min-h-56 overflow-hidden border border-white/10 bg-graphite"
                >
                  <Image
                    src={moment.image}
                    alt={moment.label}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ivory/78">
                    {moment.label}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
