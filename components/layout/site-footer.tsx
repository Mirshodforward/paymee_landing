import { getTelegramBotUrl, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const telegramBotUrl = getTelegramBotUrl();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-14 text-slate-300 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed opacity-90">
            Telegram Stars, Premium, Gift va eski giftlar bilan ishlash — O‘zbekiston kartalari bilan so‘m to‘lov.
          </p>
          <p className="mt-6 text-sm">
            <a href="/blog" className="font-medium text-[#229ED9] hover:text-sky-300">
              Blog
            </a>
          </p>
        </div>
        <address id="aloqa" className="not-italic">
          <p className="text-xs uppercase tracking-wider text-slate-500">Mini App havolasi</p>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[#229ED9] hover:text-sky-300"
          >
            {telegramBotUrl.replace(/^https?:\/\//, "")}
          </a>
        </address>
      </div>
    </footer>
  );
}
