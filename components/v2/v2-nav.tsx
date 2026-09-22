"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { TelegramIcon } from "@/components/v2/icons";
import { V2LocaleSwitcher } from "@/components/v2/v2-locale-switcher";
import { NAV_MENUS, type NavMenu } from "@/components/v2/v2-nav-menus";

export type V2NavLabels = {
  products: string;
  why: string;
  how: string;
  faq: string;
  blog: string;
  home: string;
  app: string;
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
  activeApk = false,
}: {
  labels: V2NavLabels;
  botUrl: string;
  variant?: "home" | "inner";
  activeBlog?: boolean;
  activeApk?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  /** Ochiq mahsulot menyusi (`NavMenu.id`) — hover, fokus yoki bosishdan. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const loc = useTranslations("locales");
  const t = useTranslations("v2");
  const panelId = useId().replace(/:/g, "");

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  /**
   * Drawer `.v2` ildizi ichiga portal qilinadi — `document.body`ga emas.
   * Barcha `.nav2-drawer` / `.nav2-scrim` uslublari va dizayn tokenlari
   * (`--line2`, `--grad`, `--disp` …) `.v2` ostida scoped: body’ga portal
   * qilinganda ular mos kelmay, menyu umuman uslubsiz chiqib ketardi.
   */
  const portalTarget = mounted
    ? document.querySelector<HTMLElement>(".v2") ?? document.body
    : null;

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

  // Escape — ochiq mahsulot menyusini yopadi (drawer yopiq bo'lganda ham).
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu]);

  /** Bo'limga havola: bosh sahifada `#x`, ichki sahifalarda `/#x`. */
  const hashHref = (h: string) => (variant === "home" ? h : `/${h}`);

  /**
   * Mahsulot menyusi (Stars / Premium / NFT). Hover, fokus va bosishda
   * ochiladi — uchalasi ham bitta holatni boshqaradi, shuning uchun
   * `aria-expanded` har doim ko'rinadigan holatga mos keladi.
   */
  const renderMenu = (m: NavMenu) => {
    const isOpen = openMenu === m.id;
    return (
      <div
        key={m.id}
        className={`nav2-drop${isOpen ? " open" : ""}`}
        data-menu={m.id}
        onMouseEnter={() => setOpenMenu(m.id)}
        onMouseLeave={() => setOpenMenu((cur) => (cur === m.id ? null : cur))}
        onFocus={() => setOpenMenu(m.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setOpenMenu((cur) => (cur === m.id ? null : cur));
          }
        }}
      >
        <button
          type="button"
          className="nav2-drop-btn"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setOpenMenu((cur) => (cur === m.id ? null : m.id))}
        >
          {t(m.key)}
          <ChevronDown className="nav2-chev" strokeWidth={2.5} aria-hidden />
        </button>
        <div className="nav2-menu" role="group" aria-label={t(m.key)}>
          <span className="nav2-menu-arrow" aria-hidden />
          {m.items.map(({ key, href, hash, Icon }) => {
            const body = (
              <>
                <span className="nav2-menu-ic" aria-hidden>
                  <Icon strokeWidth={2} />
                </span>
                <span className="nav2-menu-tx">
                  <b>{t(key)}</b>
                  <em>{t(`${key}Desc`)}</em>
                </span>
              </>
            );
            return hash ? (
              <a
                key={key}
                className="nav2-menu-item"
                href={hashHref(href)}
                onClick={() => setOpenMenu(null)}
              >
                {body}
              </a>
            ) : (
              <Link
                key={key}
                className="nav2-menu-item"
                href={href}
                // Joriy sahifa bo'lsa belgilanadi (masalan /stars da «Stars olish»).
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpenMenu(null)}
              >
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

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
            <span className="logo2-mark" aria-hidden="true">
              <Image
                className="logo2-img"
                src="/logo-mark-clear.png"
                alt="StarsPaymee logotipi"
                width={120}
                height={120}
                sizes="56px"
                loading="eager"
                fetchPriority="high"
              />
            </span>
            <span>
              <span className="gt">Stars</span>Paymee
            </span>
          </Link>

          <nav className="nav2-links" aria-label="Asosiy menyu">
            {NAV_MENUS.map(renderMenu)}
            {/* Desktopda faqat ikkita bo'lim havolasi — qolgani menyularda
                va drawerda; aks holda panel to'lib ketadi. */}
            <a className="nav2-plain" href={hashHref("#qanday")}>
              {labels.how}
            </a>
            <a className="nav2-plain" href={hashHref("#faq")}>
              {labels.faq}
            </a>
            <Link href="/blog" aria-current={activeBlog ? "page" : undefined}>
              {labels.blog}
            </Link>
            <Link href="/apk" aria-current={activeApk ? "page" : undefined}>
              {labels.app}
            </Link>
          </nav>

          <div className="nav2-actions">
            {/* Mobilda bu ikkovi drawer ichiga ko'chadi — panel toza qoladi. */}
            <span className="nav2-desk">
              <V2LocaleSwitcher />
              <a
                className="btn btn-grad btn-sm mag nav2-cta"
                data-cta="nav" href={botUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={labels.openBot}
              >
                <TelegramIcon />
                <span className="nav2-cta-txt">{labels.openBot}</span>
              </a>
            </span>
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

      {portalTarget && open
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
                {/* Mobilda hover yo'q — guruhlar ochiq ro'yxat bo'lib turadi. */}
                <div className="nav2-drawer-groups">
                  {NAV_MENUS.map((m) => (
                    <div className="nav2-dgroup" key={m.id} data-menu={m.id}>
                      <span className="nav2-dgroup-t">{t(m.key)}</span>
                      {m.items.map(({ key, href, hash, Icon }) => {
                        const body = (
                          <>
                            <span className="nav2-menu-ic" aria-hidden>
                              <Icon strokeWidth={2} />
                            </span>
                            <span className="nav2-menu-tx">
                              <b>{t(key)}</b>
                              <em>{t(`${key}Desc`)}</em>
                            </span>
                          </>
                        );
                        return hash ? (
                          <a
                            key={key}
                            className="nav2-menu-item"
                            href={hashHref(href)}
                            onClick={() => setOpen(false)}
                          >
                            {body}
                          </a>
                        ) : (
                          <Link
                            key={key}
                            className="nav2-menu-item"
                            href={href}
                            onClick={() => setOpen(false)}
                          >
                            {body}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>

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
                  <Link
                    href="/apk"
                    onClick={() => setOpen(false)}
                    aria-current={activeApk ? "page" : undefined}
                  >
                    {labels.app}
                  </Link>
                </nav>
                <div
                  className="nav2-drawer-langs"
                  role="group"
                  aria-label={loc("switchAria")}
                >
                  {routing.locales.map((code) => (
                    <button
                      key={code}
                      type="button"
                      className={`nav2-lang${code === locale ? " on" : ""}`}
                      aria-current={code === locale ? "true" : undefined}
                      onClick={() => {
                        setOpen(false);
                        router.replace(pathname, { locale: code });
                      }}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
                <a
                  className="btn btn-grad mag nav2-drawer-cta"
                  data-cta="nav" href={botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <TelegramIcon />
                  {labels.openBot}
                </a>
              </div>
            </>,
            portalTarget,
          )
        : null}
    </>
  );
}
