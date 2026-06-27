import { portfolioCategories } from "@/constants/site";
import { getSiteUrl } from "@/utils/site-url";
import type { StudioProfile } from "@/utils/studio-profile";

type StructuredDataProps = {
  studio: StudioProfile;
};

export function StructuredData({ studio }: StructuredDataProps) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#studio`,
        name: studio.name,
        url: siteUrl,
        email: studio.email,
        telephone: studio.phone,
        image: studio.heroPosterUrl,
        description:
          "Luxury cinematic wedding films, teasers, reels, and full wedding stories for modern couples.",
        areaServed: studio.location,
        sameAs: [studio.instagram],
        serviceType: portfolioCategories
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: studio.name,
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#studio`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
