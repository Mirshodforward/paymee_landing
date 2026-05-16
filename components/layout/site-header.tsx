import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { HomeTopLink } from "@/components/layout/home-top-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { getTranslations } from "next-intl/server";
import { Send } from "lucide-react";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";

const navLink =
  "text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]";
const navActive = "text-[#229ED9] font-semibold dark:text-[#229ED9]";

export async function SiteHeader({
  highlight = null,
}: {
  /** `blog` — blog bo‘limi; qolganlari marketing ichki sahifalar */
  highlight?: LandingTopic | "blog" | null;
}) {
  const telegramBotUrl = getTelegramBotUrl();
  const n = await getTranslations("nav");
  const lg = await getTranslations("landing");

  const prod = (key: LandingTopic) => (highlight === key ? navActive : navLink);

  const mobileNavHighlight =
    highlight === "blog"
      ? "blog"
      : highlight === "stars" || highlight === "premium" || highlight === "gifts" || highlight === "about"
        ? highlight
        : null;

  return (
    <header className="relative z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <Image
            src="/starspaymeelogo.jpg"
            alt={`${siteConfig.name} logotipi`}
            width={36}
            height={36}
            sizes="36px"
            className="h-9 w-9 shrink-0 rounded-xl object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            priority
          />
          <span className="truncate">{siteConfig.name}</span>
        </Link>
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:justify-end xl:gap-4">
          <nav aria-label="Asosiy navigatsiya" className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[13px] font-medium xl:gap-x-5">
            <HomeTopLink activeClassName={navActive} inactiveClassName={navLink}>
              {n("home")}
            </HomeTopLink>
            <Link href="/stars" className={prod("stars")}>
              {lg("nav.stars")}
            </Link>
            <Link href="/premium" className={prod("premium")}>
              {lg("nav.premium")}
            </Link>
            <Link href="/gifts" className={prod("gifts")}>
              {lg("nav.gifts")}
            </Link>
            <Link href="/blog" className={highlight === "blog" ? navActive : navLink}>
              {n("blog")}
            </Link>
          </nav>
          <LocaleSwitcher />
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <MobileNavMenu
            highlight={mobileNavHighlight}
            labels={{
              home: n("home"),
              stars: lg("nav.stars"),
              premium: lg("nav.premium"),
              gifts: lg("nav.gifts"),
              blog: n("blog"),
              menuOpen: n("menuOpen"),
              menuClose: n("menuClose"),
              menuTitle: n("menuTitle"),
              menuNavAria: n("menuNavAria"),
            }}
          />
          <div className="lg:hidden">
            <LocaleSwitcher />
          </div>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#229ED9] px-3 text-sm font-semibold text-white shadow-md shadow-[#229ED9]/18 ring-1 ring-[#229ED9]/90 transition hover:bg-[#1e8dc4] active:scale-[0.97] sm:min-w-0 sm:px-5"
          >
            <Send className="size-[1.125rem] shrink-0 opacity-95 sm:size-4" aria-hidden strokeWidth={2} />
            <span className="hidden sm:inline">{n("openTelegram")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
