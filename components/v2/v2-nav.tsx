"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { TelegramIcon } from "@/components/v2/icons";
import { V2LocaleSwitcher } from "@/components/v2/v2-locale-switcher";

export type V2NavLabels = {
  products: string;
  why: string;
  how: string;
  faq: string;
  blog: string;
  home: string;
  openBot: string;
};

type SectionLink = { href: string; label: string };

/**
 * V2 suzuvchi navigatsiya. `variant="home"` — bo‘limlarga anchor havolalar,
 * `variant="inner"` (blog) — bosh sahifa bo‘limlariga to‘liq havolalar.
 * Kichik ekranlarda hamburger menyu ochiladi (drawer).
 */
export function V2Nav({
  labels,
  botUrl,
  variant = "home",
  activeBlog = false,
}: {
  labels: V2NavLabels;
  botUrl: string;
  variant?: "home" | "inner";
  activeBlog?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelId = useId().replace(/:/g, "");

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

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

  const sectionLinks: readonly SectionLink[] =
    variant === "home"
      ? [
          { href: "#afzallik", label: labels.why },
          { href: "#mahsulotlar", label: labels.products },
          { href: "#qanday", label: labels.how },
          { href: "#faq", label: labels.faq },
        ]
      : [
          { href: "/#afzallik", label: labels.why },
          { href: "/#mahsulotlar", label: labels.products },
          { href: "/#qanday", label: labels.how },
          { href: "/#faq", label: labels.faq },
        ];

  return (
    <>
      <header className="nav2" data-v2-nav>
        <div className="nav2-in">
          <Link
            className="logo2"
            href="/"
            aria-label="StarsPaymee"
            onClick={() => setOpen(false)}
          >
            <Image
              className="logo2-img"
              src="/logo-128.png"
              alt="StarsPaymee logotipi"
              width={60}
              height={60}
              sizes="60px"
              loading="eager"
              fetchPriority="high"
            />
            <span>
              <span className="gt">Stars</span>Paymee
            </span>
          </Link>

          <nav className="nav2-links" aria-label="Asosiy menyu">
            {sectionLinks.map((l) =>
              variant === "home" ? (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
            <Link href="/blog" aria-current={activeBlog ? "page" : undefined}>
              {labels.blog}
            </Link>
          </nav>

          <div className="nav2-actions">
            <V2LocaleSwitcher />
            <a
              className="btn btn-grad btn-sm mag nav2-cta"
              href={botUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.openBot}
            >
              <TelegramIcon />
              <span className="nav2-cta-txt">{labels.openBot}</span>
            </a>
            <button
              type="button"
              className="nav2-burger"
              aria-label={open ? "Menyuni yopish" : "Menyu"}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav2-burger-icon" aria-hidden>
                <Menu
                  className={`bmi${open ? " hide" : ""}`}
                  strokeWidth={2.25}
                />
                <X
                  className={`bmi${open ? "" : " hide"}`}
                  strokeWidth={2.25}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {mounted && open
        ? createPortal(
            <>
              <button
                type="button"
                aria-label="Menyuni yopish"
                onClick={() => setOpen(false)}
                className="nav2-scrim"
              />
              <div
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label="Asosiy menyu"
                className="nav2-drawer"
              >
                <nav className="nav2-drawer-links" aria-label="Asosiy menyu">
                  {sectionLinks.map((l) =>
                    variant === "home" ? (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ),
                  )}
                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    aria-current={activeBlog ? "page" : undefined}
                  >
                    {labels.blog}
                  </Link>
                </nav>
                <a
                  className="btn btn-grad mag nav2-drawer-cta"
                  href={botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <TelegramIcon />
                  {labels.openBot}
                </a>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
