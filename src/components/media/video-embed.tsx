import { getEmbedUrl } from "@/utils/video";

type VideoEmbedProps = {
  title: string;
  videoUrl: string;
};

export function VideoEmbed({ title, videoUrl }: VideoEmbedProps) {
  return (
    <div className="relative aspect-video overflow-hidden border border-white/10 bg-graphite shadow-luxury">
      <iframe
        src={getEmbedUrl(videoUrl)}
        title={title}
        className="absolute inset-0 size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
