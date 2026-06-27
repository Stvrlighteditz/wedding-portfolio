import { groq } from "next-sanity";

export const projectFields = groq`
  _id,
  title,
  "slug": slug.current,
  coupleName,
  category,
  eventDate,
  location,
  thumbnail{
    ...,
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  videoUrl,
  shortDescription,
  description,
  featured,
  orderRank,
  publishedAt
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(orderRank asc, publishedAt desc)[0...6] {
    ${projectFields}
  }
`;

export const homeProjectsQuery = groq`
  *[_type == "project"] | order(featured desc, orderRank asc, publishedAt desc)[0...6] {
    ${projectFields}
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(orderRank asc, publishedAt desc) {
    ${projectFields}
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    quote,
    rating,
    project->{
      title,
      "slug": slug.current,
      coupleName
    }
  }
`;

export const homeTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc)[0...3] {
    _id,
    name,
    role,
    quote,
    rating,
    project->{
      title,
      "slug": slug.current,
      coupleName
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    heroVideoUrl,
    heroPoster{
      ...,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    },
    contactEmail,
    phone,
    whatsappNumber,
    instagramUrl
  }
`;
