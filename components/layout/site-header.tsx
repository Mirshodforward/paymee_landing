import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { HomeTopLink } from "@/components/layout/home-top-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileNavMenu } from "@/components/layout/mobile-nav-menu";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { getTranslations } from "next-intl/server";
import { Send } from "lucide-react";
import { getTelegramBotUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";

const navLink =
  "relative py-1 text-slate-600 transition-colors hover:text-[#229ED9] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#229ED9] after:to-sky-400 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:text-slate-400 dark:hover:text-[#229ED9]";
const navActive =
  "relative py-1 font-semibold text-[#229ED9] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:scale-x-100 after:rounded-full after:bg-gradient-to-r after:from-[#229ED9] after:to-sky-400 dark:text-[#229ED9]";

export async function SiteHeader({
  highlight = null,
}: {
  /** `blog` — blog bo‘limi; qolganlari marketing ichki sahifalar */
  highlight?: LandingTopic | "blog" | null;
}) {
  const telegramBotUrl = getTelegramBotUrl();
  const telegramSupportUrl = getTelegramSupportUrl();
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
    <header className="relative z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-2 px-3 sm:h-28 sm:gap-3 sm:px-6 lg:gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 text-base font-semibold tracking-tight text-slate-900 sm:gap-3.5 sm:text-lg dark:text-white"
        >
          <Image
            src="/logo-mark.png"
            alt={`${siteConfig.name} logotipi`}
            width={120}
            height={120}
            sizes="(min-width: 640px) 120px, 100px"
            className="h-[100px] w-[100px] shrink-0 object-contain drop-shadow-sm sm:h-[120px] sm:w-[120px]"
            loading="eager"
            fetchPriority="high"
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
            botUrl={telegramBotUrl}
            supportUrl={telegramSupportUrl}
            labels={{
              home: n("home"),
              stars: lg("nav.stars"),
              premium: lg("nav.premium"),
              gifts: lg("nav.gifts"),
              blog: n("blog"),
              openTelegram: n("openTelegram"),
              support: n("support"),
              menuOpen: n("menuOpen"),
              menuClose: n("menuClose"),
              menuTitle: n("menuTitle"),
              menuSubtitle: n("menuSubtitle"),
              menuNavAria: n("menuNavAria"),
            }}
          />
          <div className="hidden">
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
