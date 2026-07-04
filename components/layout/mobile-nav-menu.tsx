"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChevronRight,
  Crown,
  Gift,
  House,
  LifeBuoy,
  Menu,
  Newspaper,
  Send,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { HomeTopLink } from "@/components/layout/home-top-link";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export type MobileNavLabels = {
  home: string;
  stars: string;
  premium: string;
  gifts: string;
  blog: string;
  openTelegram: string;
  support: string;
  menuOpen: string;
  menuClose: string;
  menuTitle: string;
  menuSubtitle: string;
  menuNavAria: string;
};

export type MobileNavHighlight = LandingTopic | "blog" | null;

const rowBase =
  "group flex min-h-[3.25rem] items-center gap-3 rounded-2xl px-3.5 py-3 text-[15px] font-semibold tracking-tight transition-colors";
const rowInactive =
  "text-slate-700 hover:bg-slate-100 active:bg-slate-200/70 dark:text-slate-200 dark:hover:bg-slate-800/60 dark:active:bg-slate-800/90";
const rowActive =
  "bg-gradient-to-r from-[#229ED9]/15 to-sky-400/10 text-[#229ED9] ring-1 ring-[#229ED9]/25 dark:from-[#229ED9]/20 dark:to-sky-500/10 dark:text-sky-300 dark:ring-[#229ED9]/30";

const iconWrap =
  "flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 ring-1 ring-black/[0.04] transition group-hover:scale-105 dark:bg-slate-800/80 dark:text-slate-400 dark:ring-white/[0.05]";
const iconWrapActive =
  "flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#229ED9] shadow-sm ring-1 ring-[#229ED9]/20 dark:bg-slate-900";

export function MobileNavMenu({
  labels,
  highlight,
  botUrl,
  supportUrl,
}: {
  labels: MobileNavLabels;
  highlight: MobileNavHighlight;
  botUrl: string;
  supportUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [present, setPresent] = useState(false);
  const [shown, setShown] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Mount + animate-in / animate-out + unmount lifecycle
  useEffect(() => {
    if (open) {
      setPresent(true);
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    const t = setTimeout(() => setPresent(false), 320);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!present) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [present]);

  useEffect(() => {
    if (!present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [present]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  const items: { key: MobileNavHighlight; href: string; label: string; Icon: LucideIcon }[] = [
    { key: "stars", href: "/stars", label: labels.stars, Icon: Star },
    { key: "premium", href: "/premium", label: labels.premium, Icon: Crown },
    { key: "gifts", href: "/gifts", label: labels.gifts, Icon: Gift },
    { key: "blog", href: "/blog", label: labels.blog, Icon: Newspaper },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.menuClose : labels.menuOpen}
        onClick={toggle}
        className={[
          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition active:scale-[0.94]",
          "border-slate-200/90 bg-white/95 text-slate-800 shadow-md shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04]",
          "backdrop-blur-md hover:border-[#229ED9]/35 hover:bg-[#229ED9]/[0.06] hover:text-[#229ED9]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#229ED9]",
          "dark:border-slate-600/70 dark:bg-slate-900/95 dark:text-slate-100 dark:shadow-black/25 dark:ring-white/[0.06]",
          "dark:hover:border-[#229ED9]/40 dark:hover:bg-[#229ED9]/10 dark:hover:text-[#229ED9]",
        ].join(" ")}
      >
        <span className="relative block size-5">
          <Menu
            className={`absolute inset-0 size-5 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            strokeWidth={2.25}
            aria-hidden
          />
          <X
            className={`absolute inset-0 size-5 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
            strokeWidth={2.25}
            aria-hidden
          />
        </span>
      </button>

      {present
        ? createPortal(
            <>
          <button
            type="button"
            aria-label={labels.menuClose}
            onClick={close}
            className={`fixed inset-0 top-[4.75rem] z-[60] bg-slate-950/55 transition-opacity duration-200 dark:bg-black/65 ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={labels.menuNavAria}
            className={`fixed bottom-0 right-0 top-[4.75rem] z-[61] flex w-[min(90vw,320px)] flex-col border-l border-slate-200/80 bg-white shadow-[-16px_0_60px_-15px_rgba(15,23,42,0.28)] transition-transform duration-200 ease-out dark:border-slate-700/70 dark:bg-slate-950 dark:shadow-black/50 ${
              shown ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="relative overflow-hidden border-b border-slate-200/80 px-5 py-5 dark:border-slate-800/80">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-[radial-gradient(circle,rgba(34,158,217,0.18),transparent_70%)] blur-xl"
              />
              <div className="relative flex items-center gap-3">
                <Image
                  src="/logo-128.png"
                  alt={`${siteConfig.name} logotipi`}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <h2 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">{siteConfig.name}</h2>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{labels.menuSubtitle}</p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav aria-label={labels.menuNavAria} className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4">
              <div>
                <HomeTopLink
                  activeClassName={`${rowBase} ${rowActive}`}
                  inactiveClassName={`${rowBase} ${rowInactive}`}
                  onAfterNavigate={close}
                >
                  <span className={highlight === null ? iconWrapActive : iconWrap} aria-hidden>
                    <House className="size-[1.15rem]" strokeWidth={2} />
                  </span>
                  <span className="flex-1">{labels.home}</span>
                  <ChevronRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2} />
                </HomeTopLink>
              </div>

              {items.map((item, i) => {
                const active = highlight === item.key;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={`${rowBase} ${active ? rowActive : rowInactive}`}
                  >
                    <span className={active ? iconWrapActive : iconWrap} aria-hidden>
                      <item.Icon className="size-[1.15rem]" strokeWidth={2} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2} />
                  </Link>
                );
              })}
            </nav>

            {/* Footer actions */}
            <div className="border-t border-slate-200/80 px-4 py-4 dark:border-slate-800/80">
              <a
                href={botUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="group flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#229ED9] to-[#1c84b8] px-4 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition active:scale-[0.98]"
              >
                <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
                {labels.openTelegram}
              </a>
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-2 flex min-h-[2.75rem] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-[#229ED9]/40 hover:text-[#229ED9] active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <LifeBuoy className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                {labels.support}
                <ArrowUpRight className="size-3.5 shrink-0 opacity-60" strokeWidth={2.2} aria-hidden />
              </a>
            </div>
          </div>
            </>,
            document.body,
          )
        : null}
    </div>
  );
}
