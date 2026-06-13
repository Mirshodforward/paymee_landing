import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { V2Shell } from "@/components/v2/v2-shell";
import { V2Nav } from "@/components/v2/v2-nav";
import { V2Footer } from "@/components/v2/v2-footer";
import { getTelegramBotUrl, getTelegramSupportUrl } from "@/lib/site";

export default async function BlogLayout({ children }: { children: ReactNode }) {
  const t = await getTranslations("v2");
  const botUrl = getTelegramBotUrl();
  const supportUrl = getTelegramSupportUrl();

  const navLabels = {
    why: t("navWhy"),
    products: t("navProducts"),
    how: t("navHow"),
    faq: t("navFaq"),
    home: t("navHome"),
    blog: t("blogTitle"),
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
      nav={<V2Nav labels={navLabels} botUrl={botUrl} variant="inner" activeBlog />}
      footer={<V2Footer labels={footerLabels} botUrl={botUrl} supportUrl={supportUrl} />}
    >
      {children}
    </V2Shell>
  );
}
