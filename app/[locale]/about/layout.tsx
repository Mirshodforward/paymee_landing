import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { MarketingShell } from "@/components/layout/marketing-shell";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

/**
 * `setRequestLocale` — statik render uchun tilni o‘rnatadi.
 *
 * Usiz `force-static` sahifada next-intl tilni header'dan izlaydi, topolmaydi
 * va `defaultLocale` (uz) ga qaytadi; natijada server tomonda render bo‘lgan
 * `<Link>` lar boshqa tilda ham `/uz/...` ga yo‘naltirardi.
 */
export default async function AboutLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MarketingShell highlight="about">{children}</MarketingShell>;
}
