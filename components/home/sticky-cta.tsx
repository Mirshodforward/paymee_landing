"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Mobilda hero’dan o‘tib ketgach pastdan ko‘rinadigan doimiy CTA panel.
 */
export function StickyCta({
  botUrl,
  botLabel,
  pricesLabel,
}: {
  botUrl: string;
  botLabel: string;
  pricesLabel: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[130%] opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/60 bg-white/85 p-2 shadow-[0_8px_40px_-8px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/85">
        <a
          href="#narxlar"
          className="flex flex-1 items-center justify-center rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition active:scale-[0.97] dark:text-slate-200"
        >
          {pricesLabel}
        </a>
        <a
          href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#229ED9] to-[#1c84b8] px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/30 transition active:scale-[0.97]"
        >
          <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
          {botLabel}
        </a>
      </div>
    </div>
  );
}
