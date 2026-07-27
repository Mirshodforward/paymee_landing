"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const loc = useTranslations("locales");

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const triggerId = `locale-trigger-${reactId}`;
  const listId = `locale-list-${reactId}`;

  useEffect(() => {
    if (!open) return;

    const onDocPointerDown = (e: MouseEvent | PointerEvent) => {
      const el = rootRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onDocPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onDocPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const pick = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative inline-flex">
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={`${loc("switchAria")}: ${locale.toUpperCase()}`}
        onClick={() => setOpen((v) => !v)}
        className={[
          "inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-slate-100/70 px-2 py-2 shadow-inner shadow-slate-900/[0.04] ring-1 ring-slate-900/[0.03]",
          "sm:gap-2 sm:px-2.5",
          "backdrop-blur-sm transition hover:bg-slate-100 dark:border-slate-600/60 dark:bg-slate-900/70 dark:shadow-black/20 dark:ring-white/[0.06] dark:hover:bg-slate-800/90",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#229ED9]",
          open ? "ring-[#229ED9]/40 dark:ring-[#229ED9]/35" : "",
        ].join(" ")}
      >
        <Globe className="size-3.5 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden strokeWidth={2} />
        <span className="min-w-[1.75rem] text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-800 dark:text-slate-100">
          {locale.toUpperCase()}
        </span>
        <ChevronDown
          className={[
            "size-3.5 shrink-0 text-slate-400 transition-transform duration-200 dark:text-slate-500",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden
          strokeWidth={2}
        />
      </button>

      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-labelledby={triggerId}
          className="absolute right-0 top-[calc(100%+6px)] z-[80] min-w-[9rem] overflow-hidden rounded-xl border border-slate-200/95 bg-white/95 py-1 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/[0.06] backdrop-blur-md dark:border-slate-600/70 dark:bg-slate-900/95 dark:shadow-black/40 dark:ring-white/[0.08]"
        >
          {routing.locales.map((code) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={active}
                aria-label={`${loc("switchAria")}: ${loc(code as "uz" | "ru" | "en")}`}
                onClick={() => pick(code)}
                className={[
                  "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[12px] font-semibold uppercase tracking-[0.06em]",
                  "transition-colors focus-visible:bg-slate-100 focus-visible:outline-none dark:focus-visible:bg-slate-800",
                  active
                    ? "bg-[#229ED9]/12 text-[#229ED9] dark:bg-[#229ED9]/15 dark:text-[#229ED9]"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80",
                ].join(" ")}
              >
                <span>{loc(code as "uz" | "ru" | "en")}</span>
                <span className="tabular-nums text-[11px] text-slate-400 dark:text-slate-500">{code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
