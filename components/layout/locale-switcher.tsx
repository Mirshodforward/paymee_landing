"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const loc = useTranslations("locales");

  return (
    <div className="flex items-center gap-1 border border-slate-200/90 bg-white/90 p-1 dark:border-slate-700 dark:bg-slate-900/80">
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          role="radio"
          aria-checked={locale === code}
          aria-label={loc("switchAria")}
          onClick={() => router.replace(pathname, { locale: code })}
          className={`rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition sm:text-xs ${
            locale === code
              ? "bg-[#229ED9] text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
      <span className="hidden sm:inline">{loc(locale as "uz" | "ru" | "en")}</span>
    </div>
  );
}
