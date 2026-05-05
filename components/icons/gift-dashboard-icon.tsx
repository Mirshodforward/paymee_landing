"use client";

import type { CSSProperties } from "react";
import { useId } from "react";

type GiftDashboardIconProps = {
  color?: string;
  size?: number;
  className?: string;
};

const starPathD =
  "M -2.02 1.1 L -5.49 0.62 C -5.81 0.58 -6 0.4 -5.99 -0.04 C -5.96 -0.31 -5.75 -0.51 -5.49 -0.55 L -2.02 -1.02 C -1.53 -1.09 -1.15 -1.47 -1.08 -1.96 L -0.61 -5.43 C -0.56 -5.75 -0.27 -5.98 0.06 -5.93 C 0.32 -5.9 0.53 -5.69 0.56 -5.43 L 1.04 -1.96 C 1.11 -1.47 1.49 -1.09 1.97 -1.02 L 5.44 -0.55 C 5.77 -0.51 5.99 -0.21 5.95 0.12 C 5.91 0.38 5.71 0.59 5.44 0.62 L 1.97 1.1 C 1.49 1.16 1.11 1.55 1.04 2.03 L 0.56 5.5 C 0.52 5.82 0.22 6.05 -0.1 6.01 C -0.37 5.97 -0.57 5.76 -0.61 5.5 L -1.08 2.03 C -1.15 1.55 -1.53 1.16 -2.02 1.1 Z";

const giftPathD =
  "M 87.64 46.07 L 96.3 29.17 C 97.3 27.22 99.72 26.44 101.7 27.42 C 102.47 27.81 103.1 28.43 103.49 29.2 L 111.67 45.5 C 112.33 46.83 113.64 47.74 115.14 47.92 L 132.26 49.93 C 134.59 50.2 136.25 52.28 135.97 54.57 C 135.86 55.51 135.42 56.39 134.73 57.05 L 121.19 70.13 C 120.65 70.66 120.38 71.41 120.48 72.16 L 122.73 89.81 C 123.05 92.34 121.23 94.65 118.66 94.96 C 117.69 95.08 116.7 94.9 115.84 94.44 L 101.54 86.78 C 100.51 86.23 99.26 86.21 98.21 86.74 L 83.4 94.19 C 81.31 95.24 78.76 94.42 77.69 92.37 C 77.29 91.6 77.15 90.73 77.27 89.88 L 78.46 81.78 C 79.03 77.82 81.54 74.38 85.16 72.56 L 101.62 64.33 C 102.06 64.11 102.23 63.58 102.01 63.15 C 101.83 62.81 101.46 62.62 101.09 62.68 L 80.96 65.5 C 77.88 65.93 74.76 65.08 72.35 63.15 L 65.65 57.79 C 63.74 56.26 63.45 53.5 65 51.61 C 65.72 50.74 66.76 50.17 67.9 50.02 L 85.08 47.86 C 86.18 47.72 87.14 47.05 87.64 46.07 Z";

const starLayers: CSSProperties[] = [
  { "--x": "53.8px", "--y": "85.4px", "--i": 0, "--d": "2.4s" } as CSSProperties,
  { "--x": "63.4px", "--y": "26.6px", "--i": 1, "--d": "4.7s" } as CSSProperties,
  { "--x": "145.6px", "--y": "79px", "--s": 0.8, "--i": 2, "--d": "3.1s" } as CSSProperties,
  { "--x": "114.6px", "--y": "19px", "--s": 0.8, "--i": 3, "--d": "5.0s" } as CSSProperties,
  { "--x": "142.3px", "--y": "29.9px", "--o": 0.4, "--i": 4, "--d": "2.8s" } as CSSProperties,
  { "--x": "166.3px", "--y": "57.6px", "--o": 0.4, "--i": 5, "--d": "3.6s" } as CSSProperties,
  { "--x": "40.3px", "--y": "46.6px", "--s": 0.8, "--o": 0.35, "--i": 6, "--d": "4.1s" } as CSSProperties,
  { "--x": "116.5px", "--y": "110.2px", "--s": 0.724, "--o": 0.35, "--i": 7, "--d": "2.5s" } as CSSProperties,
  { "--x": "22px", "--y": "67.7px", "--s": 0.5, "--o": 0.33, "--i": 8, "--d": "4.3s" } as CSSProperties,
  { "--x": "95.9px", "--y": "99.7px", "--s": 0.5, "--o": 0.33, "--i": 9, "--d": "3.9s" } as CSSProperties,
];

/**
 * Telegram Mini App uslubidagi sovg‘a + yulduzchalar animatsiyasi (rang va o‘lcham boshqa bo‘lsa ham ishlaydi).
 */
export function GiftDashboardIcon({ color = "#FFDA03", size = 80, className }: GiftDashboardIconProps) {
  const reactId = `k${useId().replace(/[^a-zA-Z0-9]/g, "") || "gfx"}`;
  const starId = `gd-star-${reactId}`;
  const h = size * 0.625;
  const w = size;

  return (
    <div className={className}>
      <svg
        className="gd-icon-svg mx-auto block"
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 200 125"
        aria-hidden
      >
        <defs>
          <path id={starId} d={starPathD} />
        </defs>
        <style>{`
          .gd-icon-svg > g[data-gd-star] {
            transform: scale(var(--s,1)) translate(var(--x), var(--y));
            transform-origin: var(--x) var(--y);
            opacity: var(--o,1);
            fill: ${color};
            --k: calc(-1 * var(--i));
            --bdur: var(--d,3s);
            --bdel: calc(.2s * var(--k));
            --mdur: calc(10 * var(--bdur));
            --mdel: calc(var(--bdel) + calc(var(--bdur) * var(--k)));
          }
          .gd-icon-svg > g[data-gd-star] > g {
            animation: var(--mdur) steps(1) var(--mdel) infinite gdStarMove_${reactId};
          }
          .gd-icon-svg > g[data-gd-star] > g use {
            animation: var(--bdur) ease var(--bdel) infinite gdStarBlink_${reactId};
          }
          @keyframes gdStarBlink_${reactId} {
            0%, to { opacity: 0; transform: scale(.1); }
            45%, 55% { opacity: 1; transform: scale(1); }
          }
          @keyframes gdStarMove_${reactId} {
            0%, to { transform: translate(0, 0); }
            10% { transform: translate(-3px, 6px); }
            20% { transform: translate(5px, -2px); }
            30% { transform: translate(7px, 4px); }
            40% { transform: translate(-6px, 1px); }
            50% { transform: translate(2px, -7px); }
            60% { transform: translate(1px, 3px); }
            70% { transform: translate(-5px, 5px); }
            80% { transform: translate(6px, -6px); }
            90% { transform: translate(3px, 2px); }
          }
        `}</style>
        <path fill={color} d={giftPathD} />
        {starLayers.map((vars, idx) => (
          <g key={idx} data-gd-star style={vars}>
            <g>
              <use href={`#${starId}`} />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
