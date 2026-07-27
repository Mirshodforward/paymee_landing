"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/** V2 (qorong‘u) dizayni uchun til almashtirgich. */
export function V2LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const loc = useTranslations("locales");

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const listId = `v2-locale-${reactId}`;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative inline-flex">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={`${loc("switchAria")}: ${locale.toUpperCase()}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#A09AB8] transition hover:border-fuchsia-400/50 hover:text-white sm:gap-1.5 sm:px-3 sm:text-[12px]"
      >
        <Globe className="size-3.5 shrink-0" aria-hidden strokeWidth={2} />
        {locale.toUpperCase()}
        <ChevronDown
          className={`size-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
          strokeWidth={2}
        />
      </button>
      {open ? (
        <div
          id={listId}
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-[130] min-w-[9rem] overflow-hidden rounded-2xl border border-white/12 bg-[#0D0917]/95 py-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          {routing.locales.map((code) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => pick(code)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[12px] font-semibold uppercase tracking-wide transition ${
                  active
                    ? "bg-fuchsia-500/15 text-white"
                    : "text-[#A09AB8] hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{loc(code as "uz" | "ru" | "en")}</span>
                <span className="text-[11px] text-white/35">{code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
