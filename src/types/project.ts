export type PortfolioCategory =
  | "Wedding Highlights"
  | "Wedding Teasers"
  | "Full Wedding Films"
  | "Pre-Wedding"
  | "Save The Date"
  | "Reels"
  | "Short Films"
  | "Engagement"
  | "Haldi"
  | "Mehendi"
  | "Reception";

export type SanityImage = {
  _type?: "image";
  alt?: string;
  crop?: unknown;
  hotspot?: unknown;
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  coupleName: string;
  category: PortfolioCategory;
  eventDate?: string;
  location?: string;
  thumbnail?: SanityImage;
  videoUrl: string;
  shortDescription: string;
  description?: string;
  featured: boolean;
  orderRank?: number;
  publishedAt?: string;
};

export type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
  project?: Pick<Project, "title" | "slug" | "coupleName">;
};

export type SiteSettings = {
  title?: string;
  heroVideoUrl?: string;
  heroPoster?: SanityImage;
  contactEmail?: string;
  phone?: string;
  whatsappNumber?: string;
  instagramUrl?: string;
};
