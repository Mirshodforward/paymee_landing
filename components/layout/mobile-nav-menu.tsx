"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { HomeTopLink } from "@/components/layout/home-top-link";
import { Link, usePathname } from "@/i18n/navigation";

export type MobileNavLabels = {
  home: string;
  stars: string;
  premium: string;
  gifts: string;
  blog: string;
  menuOpen: string;
  menuClose: string;
  menuTitle: string;
  menuNavAria: string;
};

export type MobileNavHighlight = LandingTopic | "blog" | null;

const rowInactive =
  "flex min-h-[3.25rem] items-center justify-between gap-3 rounded-xl px-4 py-3 text-[15px] font-semibold tracking-tight text-slate-800 transition-colors hover:bg-slate-50 active:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/60 dark:active:bg-slate-800/90";
const rowActive =
  "flex min-h-[3.25rem] items-center justify-between gap-3 rounded-xl px-4 py-3 text-[15px] font-semibold tracking-tight bg-[#229ED9]/12 text-[#229ED9] ring-1 ring-[#229ED9]/25 dark:bg-[#229ED9]/18 dark:text-[#229ED9] dark:ring-[#229ED9]/30";

export function MobileNavMenu({
  labels,
  highlight,
}: {
  labels: MobileNavLabels;
  highlight: MobileNavHighlight;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  const rowClass = (key: MobileNavHighlight) => (highlight === key ? rowActive : rowInactive);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.menuClose : labels.menuOpen}
        onClick={toggle}
        className={[
          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition active:scale-[0.96]",
          "border-slate-200/90 bg-white/95 text-slate-800 shadow-md shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04]",
          "backdrop-blur-md hover:border-[#229ED9]/35 hover:bg-[#229ED9]/[0.06] hover:text-[#229ED9]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#229ED9]",
          "dark:border-slate-600/70 dark:bg-slate-900/95 dark:text-slate-100 dark:shadow-black/25 dark:ring-white/[0.06]",
          "dark:hover:border-[#229ED9]/40 dark:hover:bg-[#229ED9]/10 dark:hover:text-[#229ED9]",
        ].join(" ")}
      >
        {open ? (
          <X className="size-5 shrink-0" strokeWidth={2.25} aria-hidden />
        ) : (
          <Menu className="size-5 shrink-0" strokeWidth={2.25} aria-hidden />
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label={labels.menuClose}
            className="fixed inset-0 top-[4.25rem] z-40 bg-slate-950/45 backdrop-blur-[2px] transition-opacity dark:bg-black/55"
            onClick={close}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={labels.menuNavAria}
            className="fixed bottom-0 right-0 top-[4.25rem] z-[45] flex w-[min(92vw,300px)] flex-col border-l border-slate-200/90 bg-white/97 shadow-[-12px_0_48px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/97 dark:shadow-black/40"
          >
            <div className="border-b border-slate-200/90 px-5 py-5 dark:border-slate-800/90">
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{labels.menuTitle}</h2>
            </div>

            <nav aria-label={labels.menuNavAria} className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4">
              <HomeTopLink
                activeClassName={rowActive}
                inactiveClassName={rowInactive}
                onAfterNavigate={close}
              >
                <span>{labels.home}</span>
                <ChevronRight className="size-4 shrink-0 opacity-40" aria-hidden strokeWidth={2} />
              </HomeTopLink>
              <Link href="/stars" onClick={close} className={rowClass("stars")}>
                <span>{labels.stars}</span>
                <ChevronRight className="size-4 shrink-0 opacity-40" aria-hidden strokeWidth={2} />
              </Link>
              <Link href="/premium" onClick={close} className={rowClass("premium")}>
                <span>{labels.premium}</span>
                <ChevronRight className="size-4 shrink-0 opacity-40" aria-hidden strokeWidth={2} />
              </Link>
              <Link href="/gifts" onClick={close} className={rowClass("gifts")}>
                <span>{labels.gifts}</span>
                <ChevronRight className="size-4 shrink-0 opacity-40" aria-hidden strokeWidth={2} />
              </Link>
              <Link href="/blog" onClick={close} className={rowClass("blog")}>
                <span>{labels.blog}</span>
                <ChevronRight className="size-4 shrink-0 opacity-40" aria-hidden strokeWidth={2} />
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
