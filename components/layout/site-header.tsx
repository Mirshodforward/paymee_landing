import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Send } from "lucide-react";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

const navLink =
  "text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]";
const navActive = "text-[#229ED9] font-semibold dark:text-[#229ED9]";

export async function SiteHeader({ blogActive = false }: { blogActive?: boolean }) {
  const telegramBotUrl = getTelegramBotUrl();
  const n = await getTranslations("nav");

  return (
    <header className="relative z-10 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4">
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
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:justify-end xl:gap-5">
          <nav aria-label="Asosiy navigatsiya" className="flex items-center gap-5 text-sm font-medium xl:gap-6">
            <Link href="/#xizmatlar" className={navLink}>
              {n("services")}
            </Link>
            <Link href="/#jarayon" className={navLink}>
              {n("process")}
            </Link>
            <Link href="/#ishonch" className={navLink}>
              {n("trustLabel")}
            </Link>
            <Link href="/#faq" className={navLink}>
              {n("faq")}
            </Link>
            <Link href="/blog" className={blogActive ? navActive : navLink}>
              {n("blog")}
            </Link>
          </nav>
          <LocaleSwitcher />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/blog" className={`text-sm font-medium lg:hidden ${blogActive ? navActive : navLink}`}>
            {n("blog")}
          </Link>
          <div className="lg:hidden">
            <LocaleSwitcher />
          </div>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#229ED9] px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e8dc4] sm:px-5"
          >
            <Send className="size-4 shrink-0 opacity-95" aria-hidden strokeWidth={2} />
            <span className="hidden sm:inline">{n("openTelegram")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
