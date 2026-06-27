import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#d8b56d",
          border: "18px solid #d8b56d",
          fontSize: 128,
          letterSpacing: -4
        }}
      >
        AF
      </div>
    ),
    size
  );
}
