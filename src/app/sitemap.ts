import type { MetadataRoute } from "next";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { projectId } from "@/sanity/env";
import { getSiteUrl } from "@/utils/site-url";

type SitemapProject = {
  slug: string;
  _updatedAt?: string;
};

const staticRoutes = [
  "",
  "/portfolio",
  "/about",
  "/testimonials",
  "/contact"
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  let projects: SitemapProject[] = [];

  if (projectId) {
    try {
      projects = await client.fetch<SitemapProject[]>(
        groq`*[_type == "project" && defined(slug.current)]{
          "slug": slug.current,
          _updatedAt
        }`
      );
    } catch {
      projects = [];
    }
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: project._updatedAt ? new Date(project._updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticEntries, ...projectEntries];
}
