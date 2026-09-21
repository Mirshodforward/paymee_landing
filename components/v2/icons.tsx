import type { SVGProps } from "react";

/**
 * V2 «Aurora» dizayni uchun inline SVG ikonkalar.
 * Yo‘llar starspaymee-v2 maketidan olingan — fill/stroke CSS orqali boshqariladi.
 */

const STAR_D =
  "M12 2.5l2.65 5.86 6.4.62-4.8 4.3 1.4 6.27L12 16.9l-5.65 2.65 1.4-6.27-4.8-4.3 6.4-.62z";

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={STAR_D} />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.9 3.2 2.75 10.68c-1.05.42-1 1.62.07 1.97l4.86 1.58 1.86 5.63c.28.86 1.4 1.07 1.98.38l2.6-2.64 4.94 3.62c.78.57 1.9.14 2.1-.83l3.02-15.1c.21-1.08-.85-1.96-1.85-1.57Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.55 17.05 4.9 12.4l1.6-1.6 3.05 3.05 7.95-7.95 1.6 1.6z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} {...props}>
      <path d="M5 12h13m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.2 14.2L11 13.3V7h1.8v5.4l4.3 2.5z" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 14-3.5-3.5 1.4-1.4L11 12.2l4.6-4.6 1.4 1.4z" />
    </svg>
  );
}

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 7h-1.3c.19-.46.3-.97.3-1.5A3.5 3.5 0 0 0 15.5 2c-1.4 0-2.6.83-3.5 2.05C11.1 2.83 9.9 2 8.5 2A3.5 3.5 0 0 0 5 5.5c0 .53.11 1.04.3 1.5H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h8V9h2v3h8c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2ZM8.5 6C7.67 6 7 5.33 7 4.5S7.67 3 8.5 3c.83 0 1.5.67 1.5 1.5V6H8.5Zm7 0H14V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 6 15.5 6ZM3 13.5V19c0 1.1.9 2 2 2h6v-7.5H3Zm10 7.5h6c1.1 0 2-.9 2-2v-5.5h-8V21Z" />
    </svg>
  );
}

export function PremiumStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.8l2.3 4.6 5.1.74-3.7 3.6.87 5.07L12 13.42l-4.57 2.4.87-5.08-3.7-3.6 5.1-.73zM12 16.6l3.4 1.8-.3 3.1L12 20l-3.1 1.5-.3-3.1z" />
    </svg>
  );
}

export function UserCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 14-3.5-3.5 1.4-1.4L11 12.2l4.6-4.6 1.4 1.4z" />
    </svg>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 7H5a1 1 0 0 1 0-2h14a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-3 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-2.67 0-8 1.34-8 4v3h10v-3c0-1.05.42-1.95 1.1-2.7C9.94 13.13 8.86 13 8 13Zm8 0c-.36 0-.78.02-1.22.06A5.46 5.46 0 0 1 16 17v3h8v-3c0-2.66-5.33-4-8-4Z" />
    </svg>
  );
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function VerifiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#2AABEE"
        d="M12 1.6 14.7 4l3.6-.3.6 3.6 3.1 1.9-1.5 3.3 1.5 3.3-3.1 1.9-.6 3.6-3.6-.3L12 23l-2.7-2.4-3.6.3-.6-3.6-3.1-1.9 1.5-3.3-1.5-3.3 3.1-1.9.6-3.6 3.6.3z"
      />
      <path fill="#fff" d="m10.7 15.6-3-3 1.3-1.3 1.7 1.7 4.3-4.3 1.3 1.3z" />
    </svg>
  );
}

/** Sahifada bir marta joylanadigan global SVG gradient ta’riflari. */
export function V2SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset=".5" stopColor="#D946EF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset=".55" stopColor="#D946EF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Apple belgisi — App Store nishonchasi uchun. */
export function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/** Google Play belgisi — to‘rt rangli «play» uchburchagi. */
export function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden>
      <path
        fill="#00D2FF"
        d="M47.6 14.5C41 21.3 37 31.7 37 45.2v421.6c0 13.5 4 23.9 10.6 30.7l1.4 1.4L288 261.5v-5.6L49 16z"
      />
      <path
        fill="#00F076"
        d="M366 342.4l-78-78v-5.6l78.1-78.1 1.8 1L461 234c26.4 15 26.4 39.6 0 54.7l-93.1 52.9z"
      />
      <path fill="#FFCE00" d="M367.9 341.4 288 261.5 47.6 497.5c8.7 9.2 23.1 10.4 39.3 1.2z" />
      <path fill="#FF3A44" d="M367.9 181.6 86.9 13.4C70.7 4.2 56.3 5.4 47.6 14.6L288 261.5z" />
    </svg>
  );
}
