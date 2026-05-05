import Image from "next/image";
import Link from "next/link";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";

const navLink =
  "text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]";
const navActive = "text-[#229ED9] font-semibold dark:text-[#229ED9]";

export function SiteHeader({ blogActive = false }: { blogActive?: boolean }) {
  const telegramBotUrl = getTelegramBotUrl();

  return (
    <header className="relative z-10 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight text-slate-900 dark:text-white"
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
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Asosiy navigatsiya" className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/#xizmatlar" className={navLink}>
            Xizmatlar
          </Link>
          <Link href="/#jarayon" className={navLink}>
            Jarayon
          </Link>
          <Link href="/#ishonch" className={navLink}>
            Ishonch
          </Link>
          <Link href="/#faq" className={navLink}>
            FAQ
          </Link>
          <Link href="/blog" className={blogActive ? navActive : navLink}>
            Blog
          </Link>
        </nav>
        <Link href="/blog" className={`shrink-0 text-sm font-medium md:hidden ${blogActive ? navActive : navLink}`}>
          Blog
        </Link>
        <a
          href={telegramBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#229ED9] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e8dc4] md:px-5"
        >
          Telegramda ochish
        </a>
      </div>
    </header>
  );
}
