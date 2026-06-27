import type { PortfolioCategory } from "@/types/project";

export const studio = {
  name: "Stvrlight Films",
  tagline: "Luxury wedding films for modern romantics",
  email: "stvrlighteditz40@gmail.com",
  phone: "+91 9016906161",
  whatsapp: "919016906161",
  instagram: "https://www.instagram.com/stvrlight_films/",
  instagramHandle: "@stvrlight_films",
  location: "Available worldwide",
  heroVideoUrl: "https://vimeo.com/762158302",
  heroPosterUrl:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" }
] as const;

export const portfolioCategories: readonly PortfolioCategory[] = [
  "Wedding Highlights",
  "Wedding Teasers",
  "Full Wedding Films",
  "Pre-Wedding",
  "Save The Date",
  "Reels",
  "Short Films",
  "Engagement",
  "Haldi",
  "Mehendi",
  "Reception"
] as const;
