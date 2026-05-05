import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(145deg, #020617 0%, #082f49 42%, #0c4a6e 72%, #229ED9 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 920 }}>
          <span
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.88)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Telegram Mini App · Stars · Premium · Gift
          </span>
          <span style={{ fontSize: 68, fontWeight: 700, color: "#fff", lineHeight: 1.05 }}>
            {siteConfig.name}
          </span>
          <span style={{ fontSize: 28, color: "rgba(255,255,255,0.92)", lineHeight: 1.4 }}>
            UzCard & HUMO bilan so‘m. Eskirgan va cheklangan giftlar — qulay boshqaruv.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
