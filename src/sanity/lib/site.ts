import { sanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/types/project";
import { resolveStudioProfile } from "@/utils/studio-profile";

export async function getStudioProfile() {
  const settings = await sanityFetch<SiteSettings | null>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
    revalidate: 30
  });

  return resolveStudioProfile(settings);
}
