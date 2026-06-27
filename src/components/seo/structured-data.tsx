import { portfolioCategories, studio } from "@/constants/site";
import { getSiteUrl } from "@/utils/site-url";

export function StructuredData() {
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
