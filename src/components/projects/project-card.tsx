"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { smoothEase } from "@/constants/motion";
import type { Project } from "@/types/project";
import { formatProjectDate } from "@/utils/date";

const fallbackImage =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imageUrl = project.thumbnail?.asset?.url || fallbackImage;
  const href = project.slug ? `/portfolio/${project.slug}` : project.videoUrl;
  const isExternal = !project.slug;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: smoothEase }}
      className="group"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="block overflow-hidden border border-white/10 bg-white/[0.035] transition duration-500 hover:border-champagne/45 hover:bg-white/[0.055]"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-graphite md:aspect-[16/11]">
          <Image
            src={imageUrl}
            alt={project.thumbnail?.alt || `${project.title} thumbnail`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            placeholder={project.thumbnail?.asset?.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={project.thumbnail?.asset?.metadata?.lqip}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-86" />
          <div className="absolute left-4 top-4 border border-white/14 bg-ink/55 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-champagne backdrop-blur-xl">
            {project.category}
          </div>
          <div className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full border border-champagne/60 bg-champagne/12 text-champagne backdrop-blur-xl transition duration-300 group-hover:bg-champagne group-hover:text-ink">
            <Play size={16} fill="currentColor" strokeWidth={1.5} />
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="mb-4 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-mist">
            {project.eventDate ? (
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={13} strokeWidth={1.7} />
                {formatProjectDate(project.eventDate)}
              </span>
            ) : null}
            {project.location ? (
              <span className="inline-flex items-center gap-2">
                <MapPin size={13} strokeWidth={1.7} />
                {project.location}
              </span>
            ) : null}
          </div>

          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-champagne">
            {project.coupleName}
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-ivory/65">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
