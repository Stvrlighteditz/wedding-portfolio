import { studio as fallbackStudio } from "@/constants/site";
import type { SiteSettings } from "@/types/project";

export type StudioProfile = {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  instagramHandle: string;
  location: string;
  heroVideoUrl: string;
  heroPosterUrl: string;
};

function cleanValue(value?: string) {
  return value?.trim() || undefined;
}

function cleanWhatsAppNumber(value?: string) {
  return cleanValue(value)?.replace(/\D/g, "");
}

function getInstagramHandle(url?: string) {
  if (!url) {
    return fallbackStudio.instagramHandle;
  }

  try {
    const pathname = new URL(url).pathname.split("/").filter(Boolean)[0];
    return pathname ? `@${pathname}` : fallbackStudio.instagramHandle;
  } catch {
    return fallbackStudio.instagramHandle;
  }
}

export function getStudioInitials(name: string) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return initials || "SF";
}

export function resolveStudioProfile(settings?: SiteSettings | null): StudioProfile {
  const name = cleanValue(settings?.title) || fallbackStudio.name;
  const email = cleanValue(settings?.contactEmail) || fallbackStudio.email;
  const phone = cleanValue(settings?.phone) || fallbackStudio.phone;
  const whatsapp =
    cleanWhatsAppNumber(settings?.whatsappNumber) ||
    cleanWhatsAppNumber(settings?.phone) ||
    fallbackStudio.whatsapp;
  const instagram = cleanValue(settings?.instagramUrl) || fallbackStudio.instagram;
  const heroVideoUrl = cleanValue(settings?.heroVideoUrl) || fallbackStudio.heroVideoUrl;
  const heroPosterUrl = settings?.heroPoster?.asset?.url || fallbackStudio.heroPosterUrl;

  return {
    ...fallbackStudio,
    name,
    email,
    phone,
    whatsapp,
    instagram,
    instagramHandle: getInstagramHandle(instagram),
    heroVideoUrl,
    heroPosterUrl
  };
}
