"use client";

import { Globe } from "lucide-react";
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
    <div
      role="radiogroup"
      aria-label={loc("switchAria")}
      className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/95 p-0.5 pl-1 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm dark:border-slate-600/65 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:ring-white/[0.06]"
    >
      <span className="flex shrink-0 pl-1 pr-0.5" aria-hidden>
        <Globe className="size-3.5 text-slate-400 dark:text-slate-500" strokeWidth={2} />
      </span>
      <div className="flex items-center gap-0.5">
        {routing.locales.map((code) => {
          const active = locale === code;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`${loc("switchAria")}: ${loc(code as "uz" | "ru" | "en")}`}
              onClick={() => router.replace(pathname, { locale: code })}
              className={[
                "min-h-8 min-w-[2rem] rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.12em]",
                "transition-[color,background,box-shadow,transform] duration-200",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#229ED9]",
                active
                  ? "bg-[#229ED9] text-white shadow-[0_1px_3px_rgba(34,158,217,0.35)] ring-1 ring-[#229ED9]/90 dark:shadow-[0_1px_4px_rgba(0,0,0,.35)] dark:ring-[#1e8dc4]"
                  : "text-slate-600 hover:bg-slate-200/85 hover:text-slate-900 active:scale-[0.97] dark:text-slate-400 dark:hover:bg-slate-700/85 dark:hover:text-white",
              ].join(" ")}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
