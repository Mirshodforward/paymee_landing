import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { V2Shell } from "@/components/v2/v2-shell";
import { V2Nav } from "@/components/v2/v2-nav";
import { V2Footer } from "@/components/v2/v2-footer";
import { getTelegramSupportUrl } from "@/lib/site";
import { botDeepLink } from "@/lib/telegram-deeplink";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

/**
 * Stars sahifasi — bosh sahifa va blog bilan bir xil V2 qobig'ida
 * (avval eski `MarketingShell` edi, dizayn ikki xil ko'rinardi).
 *
 * `setRequestLocale` birinchi bo'lishi shart: usiz statik renderda next-intl
 * `defaultLocale`ga qaytadi va `<Link>` lar boshqa tilda ham `/uz/...` ga ketadi.
 */
export default async function StarsLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "v2" });
  const navBotUrl = botDeepLink({ page: "stars", placement: "nav" });
  const footerBotUrl = botDeepLink({ page: "stars", placement: "footer" });

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
      nav={<V2Nav labels={navLabels} botUrl={navBotUrl} variant="inner" />}
      footer={<V2Footer labels={footerLabels} botUrl={footerBotUrl} supportUrl={getTelegramSupportUrl()} />}
    >
      {children}
    </V2Shell>
  );
}
