"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { portfolioCategories } from "@/constants/site";
import type { Project } from "@/types/project";
import { cn } from "@/utils/cn";
import type { PortfolioFilter } from "@/utils/category";

type PortfolioFilterGridProps = {
  initialFilter: PortfolioFilter;
  projects: Project[];
};

export function PortfolioFilterGrid({
  initialFilter,
  projects
}: PortfolioFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>(initialFilter);

  const counts = useMemo(() => {
    return projects.reduce<Record<string, number>>(
      (acc, project) => {
        acc.All += 1;
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      },
      { All: 0 }
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const filters: PortfolioFilter[] = ["All", ...portfolioCategories];

  function handleFilterChange(filter: PortfolioFilter) {
    setActiveFilter(filter);

    const nextUrl =
      filter === "All"
        ? "/portfolio"
        : `/portfolio?category=${encodeURIComponent(filter)}`;

    window.history.replaceState(null, "", nextUrl);
  }

  return (
    <section className="luxury-container pb-28">
      {projects.length > 0 ? (
        <>
          <div className="sticky top-20 z-30 -mx-4 mb-10 border-y border-white/10 bg-ink/78 px-4 py-4 backdrop-blur-2xl md:top-20">
            <div className="mb-4 flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist">
              <SlidersHorizontal size={15} strokeWidth={1.8} />
              Categories
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                const count = counts[filter] || 0;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => handleFilterChange(filter)}
                    className={cn(
                      "inline-flex h-10 shrink-0 items-center justify-center gap-2 border px-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
                      isActive
                        ? "border-champagne bg-champagne text-ink"
                        : "border-white/12 bg-white/[0.035] text-ivory/72 hover:border-champagne/55 hover:text-champagne"
                    )}
                  >
                    <span>{filter}</span>
                    <span
                      className={cn(
                        "text-[0.56rem]",
                        isActive ? "text-ink/70" : "text-mist"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project._id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="border border-white/10 bg-white/[0.035] p-8 md:p-10">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                    No Films In {activeFilter}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/68">
                    Publish a project in this category from Sanity Studio to
                    populate this collection.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <div className="border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-champagne">
            No Films Published
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/68">
            Add and publish a project in Sanity Studio to populate this page.
          </p>
        </div>
      )}
    </section>
  );
}
