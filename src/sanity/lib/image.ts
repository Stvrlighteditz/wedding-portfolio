import imageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });
type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max");
}
