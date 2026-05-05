"use client";

import type { AnimationItem } from "lottie-web";
import lottie from "lottie-web";
import pako from "pako";
import { useEffect, useRef } from "react";

type TgsStickerProps = {
  src: string;
  /** Pixel width/height of the sticker box (square). */
  size?: number;
  className?: string;
};

export function TgsSticker({ src, size = 88, className }: TgsStickerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const wrap = wrapRef.current;
    if (!host || !wrap) return;

    let removed = false;
    let anim: AnimationItem | null = null;

    const play = () => {
      anim?.play();
    };

    const freeze = () => {
      anim?.goToAndStop(0, true);
    };

    const attachInteraction = () => {
      if (!anim) return;
      const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (fineHover) {
        wrap.addEventListener("pointerenter", play);
        wrap.addEventListener("pointerleave", freeze);
        wrap.addEventListener("pointercancel", freeze);
      } else {
        wrap.addEventListener("pointerdown", play);
        wrap.addEventListener("pointerup", freeze);
        wrap.addEventListener("pointercancel", freeze);
        wrap.addEventListener("pointerleave", freeze);
      }
    };

    const detachInteraction = () => {
      wrap.removeEventListener("pointerenter", play);
      wrap.removeEventListener("pointerleave", freeze);
      wrap.removeEventListener("pointercancel", freeze);
      wrap.removeEventListener("pointerdown", play);
      wrap.removeEventListener("pointerup", freeze);
    };

    void (async () => {
      try {
        const res = await fetch(src);
        const ab = await res.arrayBuffer();
        const text = pako.inflate(new Uint8Array(ab), { to: "string" });
        const animationData = JSON.parse(text) as object;
        if (removed) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        anim = lottie.loadAnimation({
          container: host,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData,
        });
        anim.goToAndStop(0, true);

        if (removed) {
          anim.destroy();
          anim = null;
          return;
        }

        if (!reduceMotion) attachInteraction();
      } catch {
        /* decorative */
      }
    })();

    return () => {
      removed = true;
      detachInteraction();
      anim?.destroy();
      anim = null;
      host.innerHTML = "";
    };
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div ref={hostRef} className="flex size-full items-center justify-center [&_svg]:max-h-full [&_svg]:max-w-full" />
    </div>
  );
}
