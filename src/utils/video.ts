type VideoProvider = "youtube" | "vimeo" | "direct" | "unknown";

export function getVideoProvider(url: string): VideoProvider {
  if (/youtu\.?be/.test(url)) return "youtube";
  if (/vimeo\.com/.test(url)) return "vimeo";
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return "direct";
  return "unknown";
}

function parseUrl(url: string) {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

function getYouTubeId(url: string) {
  const parsed = parseUrl(url);
  if (!parsed) return null;

  if (parsed.hostname === "youtu.be") {
    return parsed.pathname.split("/").filter(Boolean)[0] || null;
  }

  if (parsed.pathname.includes("/shorts/")) {
    return parsed.pathname.split("/shorts/")[1]?.split("/")[0] || null;
  }

  if (parsed.pathname.includes("/embed/")) {
    return parsed.pathname.split("/embed/")[1]?.split("/")[0] || null;
  }

  return parsed.searchParams.get("v");
}

function getVimeoId(url: string) {
  const parsed = parseUrl(url);
  if (!parsed) return null;

  return parsed.pathname.split("/").filter(Boolean).pop() || null;
}

export function getEmbedUrl(url: string) {
  const provider = getVideoProvider(url);

  if (provider === "youtube") {
    const videoId = getYouTubeId(url);

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`
      : url;
  }

  if (provider === "vimeo") {
    const videoId = getVimeoId(url);
    return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
  }

  return url;
}

export function getBackgroundEmbedUrl(url: string) {
  const provider = getVideoProvider(url);

  if (provider === "youtube") {
    const videoId = getYouTubeId(url);

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1&rel=0`
      : null;
  }

  if (provider === "vimeo") {
    const videoId = getVimeoId(url);

    return videoId
      ? `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0`
      : null;
  }

  return null;
}

export function getYouTubeThumbnail(url: string) {
  if (getVideoProvider(url) !== "youtube") return null;

  const videoId = getYouTubeId(url);

  return videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : null;
}
