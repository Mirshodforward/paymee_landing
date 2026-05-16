"use client";

import { useEffect, useRef, useState } from "react";
import { TgsSticker } from "@/components/media/tgs-sticker";
import { GIFT_TGS_HOME_SHOWCASE } from "@/lib/gift-tgs-assets";

type GiftTgsShowcaseProps = {
  className?: string;
  /** Hero va tor joylar uchun kichikroq stikerlar */
  compact?: boolean;
  /** true: avval yashirin, viewportga kirganda ochiladi */
  hideUntilVisible?: boolean;
};

export function GiftTgsShowcase({ className, compact, hideUntilVisible }: GiftTgsShowcaseProps) {
  const [shown, setShown] = useState(!hideUntilVisible);
  const rootRef = useRef<HTMLDivElement>(null);

  const size = compact ? 68 : 84;
  const innerGap = compact ? "gap-2 sm:gap-3" : "gap-3 sm:gap-4";
  const pad = compact ? "p-3 sm:p-4" : "p-4 sm:p-5";
  const cellPad = compact ? "p-1.5" : "p-2";

  useEffect(() => {
    if (!hideUntilVisible) return;
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const ob = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          setShown(true);
          ob.disconnect();
        }
      },
      { rootMargin: "32px 0px 8px 0px", threshold: 0.06 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [hideUntilVisible]);

  const rowClass =
    hideUntilVisible === true
      ? [
          "mx-auto flex max-w-full flex-wrap items-center justify-center will-change-[opacity,transform]",
          innerGap,
          "duration-700 ease-out motion-safe:transition-[opacity,transform]",
          shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        ].join(" ")
      : ["mx-auto flex max-w-full flex-wrap items-center justify-center", innerGap].join(" ");

  return (
    <div
      ref={rootRef}
      className={
        className ??
        `relative w-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 to-fuchsia-50/50 ${pad} shadow-lg shadow-fuchsia-500/10 ring-1 ring-fuchsia-100/60 dark:border-slate-600/60 dark:from-slate-900/80 dark:to-fuchsia-950/30 dark:ring-fuchsia-900/35`
      }
    >
      <div className={rowClass} aria-hidden={hideUntilVisible && !shown}>
        {GIFT_TGS_HOME_SHOWCASE.map((tgsSrc) => (
          <div
            key={tgsSrc}
            className={`rounded-2xl bg-white/90 ${cellPad} shadow-inner ring-1 ring-fuchsia-200/40 transition hover:ring-fuchsia-400/50 dark:bg-slate-800/90 dark:ring-fuchsia-800/40`}
          >
            <TgsSticker src={tgsSrc} size={size} className="touch-manipulation" />
          </div>
        ))}
      </div>
    </div>
  );
}
