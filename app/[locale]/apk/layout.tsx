import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { V2Shell } from "@/components/v2/v2-shell";
import { V2Nav } from "@/components/v2/v2-nav";
import { V2Footer } from "@/components/v2/v2-footer";
import { getTelegramSupportUrl } from "@/lib/site";
import { botDeepLink } from "@/lib/telegram-deeplink";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

/**
 * `setRequestLocale` birinchi chaqiriladi: usiz `force-static` sahifada
 * next-intl `defaultLocale` (uz) ga qaytadi va havolalar noto'g'ri tilga
 * ketadi.
 */
export default async function ApkLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "v2" });
  const supportUrl = getTelegramSupportUrl();

  const navLabels = {
    why: t("navWhy"),
    products: t("navProducts"),
    how: t("navHow"),
    faq: t("navFaq"),
    home: t("navHome"),
    blog: t("blogTitle"),
    app: t("navApp"),
    openBot: t("openBot"),
  };
  const footerLabels = {
    tagline: t("footerTagline"),
    sections: t("footerSections"),
    products: "Telegram Stars",
    premium: "Telegram Premium",
    gifts: "Telegram Gifts",
    blog: t("blogTitle"),
    support: t("footerSupport"),
    rights: t("footerRights"),
  };

  return (
    <V2Shell
      nav={
        <V2Nav
          labels={navLabels}
          botUrl={botDeepLink({ page: "home", placement: "nav" })}
          variant="inner"
          activeApk
        />
      }
      footer={
        <V2Footer
          labels={footerLabels}
          botUrl={botDeepLink({ page: "home", placement: "footer" })}
          supportUrl={supportUrl}
        />
      }
    >
      {children}
    </V2Shell>
  );
}
