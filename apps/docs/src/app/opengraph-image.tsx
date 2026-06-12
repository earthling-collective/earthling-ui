import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Earthling UI — a modern, themeable React component library";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111010",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          Earthling UI
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            fontWeight: 400,
            color: "#a8a29e",
          }}
        >
          Components at your command — mix, match, and modify
        </div>
        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 16,
          }}
        >
          {["#60a5fa", "#c084fc", "#f472b6", "#4ade80", "#facc15", "#f87171"].map(
            (color) => (
              <div
                key={color}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  background: color,
                }}
              />
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
