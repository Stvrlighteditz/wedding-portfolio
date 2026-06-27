import { ImageResponse } from "next/og";

import { getStudioProfile } from "@/sanity/lib/site";

export const alt = "Wedding cinematography portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  const studio = await getStudioProfile();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050505 0%, #14110b 58%, #050505 100%)",
          color: "#f7f2e8",
          padding: "72px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d8b56d"
          }}
        >
          <span>{studio.name}</span>
          <span>Wedding Films</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              maxWidth: 920,
              fontSize: 92,
              lineHeight: 0.94,
              letterSpacing: 0
            }}
          >
            Cinematic wedding films with a luxury editorial soul.
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 26,
              color: "#b7b0a4"
            }}
          >
            Teasers, reels, highlights, and full wedding stories.
          </div>
        </div>
      </div>
    ),
    size
  );
}
