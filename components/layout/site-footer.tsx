import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getTelegramBotUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const telegramBotUrl = getTelegramBotUrl();
  const telegramSupportUrl = getTelegramSupportUrl();
  const f = await getTranslations("footer");
  const lg = await getTranslations("landing");
  const footerLink =
    "text-sm font-medium text-slate-300 transition hover:text-[#229ED9] hover:underline underline-offset-2";

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-14 text-slate-300 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed opacity-90">{f("tagline")}</p>
          <p className="mt-6 text-sm">
            <Link href="/blog" className="font-medium text-[#229ED9] hover:text-sky-300">
              {f("blog")}
            </Link>
          </p>
          <p className="mt-8 text-xs uppercase tracking-wider text-slate-500">{lg("sectionsHeading")}</p>
          <nav aria-label="Bo‘limlar" className="mt-4 flex flex-col gap-2.5">
            <Link href="/stars" className={footerLink}>
              {lg("nav.stars")}
            </Link>
            <Link href="/premium" className={footerLink}>
              {lg("nav.premium")}
            </Link>
            <Link href="/gifts" className={footerLink}>
              {lg("nav.gifts")}
            </Link>
            <Link href="/about" className={footerLink}>
              {lg("nav.about")}
            </Link>
          </nav>
        </div>
        <address id="aloqa" className="not-italic">
          <p className="text-xs uppercase tracking-wider text-slate-500">{f("miniAppHeading")}</p>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[#229ED9] hover:text-sky-300"
          >
            {telegramBotUrl.replace(/^https?:\/\//, "")}
          </a>
          <p className="mt-6 text-xs uppercase tracking-wider text-slate-500">{f("supportHeading")}</p>
          <a
            href={telegramSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[#229ED9] hover:text-sky-300"
          >
            {telegramSupportUrl.replace(/^https?:\/\//, "")}
          </a>
        </address>
      </div>
    </footer>
  );
}
