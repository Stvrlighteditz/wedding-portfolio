import { ArrowLeft, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingCTA } from "@/components/home/booking-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { VideoEmbed } from "@/components/media/video-embed";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { studio } from "@/constants/site";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import type { Project } from "@/types/project";
import { formatProjectDate } from "@/utils/date";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const whatsappUrl = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(
  "Hi, I watched your portfolio and would like to enquire about wedding cinematography."
)}`;

async function getProject(slug: string) {
  return sanityFetch<Project | null>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["project"],
    revalidate: 30
  });
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/portfolio/${project.slug}`
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `/portfolio/${project.slug}`,
      images: project.thumbnail?.asset?.url ? [project.thumbnail.asset.url] : []
    }
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink text-ivory">
      <SiteHeader />
      <section className="luxury-container pt-32 pb-14 md:pt-40">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-mist transition hover:text-champagne"
        >
          <ArrowLeft size={15} strokeWidth={1.8} />
          Portfolio
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-champagne">
              {project.category}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.94] text-balance md:text-8xl">
              {project.title}
            </h1>
          </div>

          <aside className="border-l border-white/10 pl-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist">
              Couple
            </p>
            <p className="mt-2 font-serif text-3xl text-ivory">{project.coupleName}</p>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-ivory/68">
              {project.eventDate ? <p>{formatProjectDate(project.eventDate)}</p> : null}
              {project.location ? <p>{project.location}</p> : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="luxury-container pb-20">
        <VideoEmbed title={project.title} videoUrl={project.videoUrl} />
      </section>

      <section className="luxury-container grid gap-10 pb-28 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-champagne">
            Story
          </p>
          <p className="mt-5 text-lg leading-9 text-ivory/72">
            {project.description || project.shortDescription}
          </p>
        </div>

        <LuxuryButton
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          icon={<MessageCircle size={15} strokeWidth={1.8} />}
        >
          Enquire Now
        </LuxuryButton>
      </section>

      <BookingCTA />
      <SiteFooter />
    </main>
  );
}
