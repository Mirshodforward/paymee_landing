"use client";

import { useRef } from "react";
import { GIFT_TGS_PATHS } from "@/lib/gift-tgs-paths";
import { type TGSStickerHandle, TGSSticker } from "./tgs-sticker";

type Props = {
  heading: string;
  caption: string;
};

function StickerCell({ path }: { path: string }) {
  const animRef = useRef<TGSStickerHandle>(null);

  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-2xl border border-slate-200/85 bg-gradient-to-b from-white to-slate-50 p-2 shadow-sm transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-fuchsia-400/45 hover:shadow-md active:translate-y-0 dark:border-slate-700/80 dark:from-slate-900 dark:to-slate-950 dark:hover:border-fuchsia-500/40"
      onMouseEnter={() => animRef.current?.play()}
      onMouseLeave={() => {
        animRef.current?.pause();
        animRef.current?.goToAndStop(0);
      }}
      aria-hidden
    >
      <TGSSticker
        ref={animRef}
        stickerPath={path}
        autoplay={false}
        loop
        className="pointer-events-none flex h-[min(5.5rem,22vw)] w-[min(5.5rem,22vw)] items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:max-w-none"
      />
    </div>
  );
}

export function GiftStickerShowcase({ heading, caption }: Props) {
  return (
    <div
      className="mt-16 rounded-3xl border border-fuchsia-200/55 bg-gradient-to-br from-fuchsia-50/90 via-white to-sky-50/85 p-6 shadow-inner ring-1 ring-fuchsia-100/60 dark:border-fuchsia-900/35 dark:from-fuchsia-950/35 dark:via-slate-900 dark:to-sky-950/25 dark:ring-fuchsia-900/40 sm:p-10"
      aria-labelledby="gift-stickers-heading"
    >
      <div className="max-w-2xl">
        <h3 id="gift-stickers-heading" className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          {heading}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{caption}</p>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9">
        {GIFT_TGS_PATHS.map((p) => (
          <StickerCell key={p} path={p} />
        ))}
      </div>
    </div>
  );
}
