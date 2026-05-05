"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import { inflate } from "pako";

export type TGSStickerHandle = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  goToAndStop: (frame: number) => void;
};

export type TGSStickerProps = {
  stickerPath: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
};

export const TGSSticker = forwardRef<TGSStickerHandle, TGSStickerProps>(function TGSSticker(
  { stickerPath, className, autoplay = true, loop = true },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const isLoadedRef = useRef(false);

  useImperativeHandle(ref, () => ({
    play: () => animationRef.current?.play(),
    pause: () => animationRef.current?.pause(),
    stop: () => animationRef.current?.stop(),
    goToAndStop: (frame: number) => animationRef.current?.goToAndStop(frame, true),
  }));

  useEffect(() => {
    isLoadedRef.current = false;
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(stickerPath);
        if (!response.ok) throw new Error(String(response.status));
        const buffer = await response.arrayBuffer();
        const decompressed = inflate(new Uint8Array(buffer));
        const jsonString = new TextDecoder().decode(decompressed);
        const animationData = JSON.parse(jsonString) as object;

        if (cancelled || !containerRef.current) return;

        animationRef.current?.destroy();

        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData,
        });

        isLoadedRef.current = true;

        if (!autoplay && animationRef.current) {
          animationRef.current.goToAndStop(0, true);
        }
      } catch (e) {
        console.error("TGSSticker:", stickerPath, e);
      }
    };

    void load();

    return () => {
      cancelled = true;
      animationRef.current?.destroy();
      animationRef.current = null;
      isLoadedRef.current = false;
    };
  }, [stickerPath, loop]);

  useEffect(() => {
    if (!isLoadedRef.current || !animationRef.current) return;
    if (autoplay) {
      animationRef.current.play();
    } else {
      animationRef.current.pause();
    }
  }, [autoplay]);

  return <div ref={containerRef} className={className} />;
});
