"use client";

import Image from "next/image";

import { getBackgroundEmbedUrl } from "@/utils/video";

type HeroVideoProps = {
  posterUrl: string;
  videoUrl?: string;
};

export function HeroVideo({ posterUrl, videoUrl }: HeroVideoProps) {
  const embedUrl = videoUrl ? getBackgroundEmbedUrl(videoUrl) : null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <Image
        src={posterUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover opacity-80"
      />

      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Cinematic wedding film background"
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-video min-h-full min-w-[177.77777778vh] w-full -translate-x-1/2 -translate-y-1/2 scale-110 border-0 opacity-[0.56]"
          allow="autoplay; fullscreen; picture-in-picture"
          tabIndex={-1}
          aria-hidden="true"
        />
      ) : null}

      <div className="cinematic-vignette absolute inset-0" />
      <div className="film-grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/74 to-transparent" />
    </div>
  );
}
