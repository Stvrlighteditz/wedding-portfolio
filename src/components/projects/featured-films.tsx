"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clapperboard } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { smoothEase } from "@/constants/motion";
import type { Project } from "@/types/project";

type FeaturedFilmsProps = {
  projects: Project[];
};

export function FeaturedFilms({ projects }: FeaturedFilmsProps) {
  return (
    <section id="films" className="border-t border-white/10 bg-ink py-24 md:py-32">
      <div className="luxury-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: smoothEase }}
          >
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              <Clapperboard size={16} strokeWidth={1.7} />
              Featured Wedding Films
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-balance md:text-7xl">
              Recent stories, edited with a cinematic pulse.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: smoothEase }}
          >
            <LuxuryButton
              href="/portfolio"
              variant="secondary"
              icon={<ArrowRight size={15} strokeWidth={1.8} />}
            >
              View Portfolio
            </LuxuryButton>
          </motion.div>
        </div>

        {projects.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            className="mt-14 border border-white/10 bg-white/[0.035] p-8 md:p-10"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-champagne">
              Awaiting Published Films
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/68">
              Publish a project in Sanity and mark it as featured. The homepage
              will automatically display it here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
