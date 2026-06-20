import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bright — Full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0E0D0F",
          position: "relative",
        }}
      >
        {/* Gradient glow, matching the Hero signature element */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(232,119,46,0.45) 0%, rgba(232,119,46,0.15) 45%, rgba(232,119,46,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#E8772E",
            fontWeight: 500,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          BRIGHT.NG
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            color: "#F4F2ED",
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Full-stack developer building products from the ground up.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#6B6560",
            marginTop: 32,
          }}
        >
          100-level Software Engineering student — UNIBEN, Nigeria
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
