import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { portfolioCategories } from "@/constants/site";
import type { Project } from "@/types/project";

type PortfolioCategoriesProps = {
  projects: Project[];
};

export function PortfolioCategories({ projects }: PortfolioCategoriesProps) {
  const counts = projects.reduce<Record<string, number>>((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="border-t border-white/10 bg-charcoal py-20 md:py-24">
      <div className="luxury-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-champagne">
              Portfolio Categories
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-6xl">
              Browse by ceremony, format, and feeling.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ivory/64 md:justify-self-end">
            From intimate teasers to full-length films, every format is shaped
            with the same editorial eye and emotional restraint.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioCategories.map((category) => {
            const count = counts[category] || 0;

            return (
              <Link
                key={category}
                href={`/portfolio?category=${encodeURIComponent(category)}`}
                className="group flex min-h-28 items-end justify-between border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-champagne/50 hover:bg-champagne/10"
              >
                <span>
                  <span className="block font-serif text-2xl leading-tight text-ivory">
                    {category}
                  </span>
                  <span className="mt-3 block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mist">
                    {count} Films
                  </span>
                </span>
                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                  className="mb-1 text-champagne transition duration-300 group-hover:translate-x-1"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
