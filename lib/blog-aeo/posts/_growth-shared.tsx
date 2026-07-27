import { Link } from "@/i18n/navigation";
import { GrowthSeriesNav } from "@/components/blog/growth-series-nav";
import { TelegramNumberPriceBoard } from "@/components/blog/telegram-number-price-board";
import {
  CompareTable,
  InlineCta,
  KeyFacts,
  Sources,
  Steps,
  Step,
  Toc,
  Yes,
  No,
} from "@/components/blog/aeo-blocks";
import { virtualNumberStats } from "@/lib/telegram-virtual-numbers";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

export function GrowthSeriesAside({ locale }: { locale: AeoUiLocale }) {
  return <GrowthSeriesNav locale={locale} />;
}

export function BotNumberCtaUz() {
  return (
    <InlineCta text="Joriy narx va 100+ davlat — @StarsPaymee_bot ichidagi raqamlar bo‘limida. So‘mda to‘lov." />
  );
}

export function BotNumberCtaRu() {
  return (
    <InlineCta text="Актуальные цены и 100+ стран — в разделе номеров @StarsPaymee_bot. Оплата в сумах." />
  );
}

export function VirtualNumberKeyFactsUz() {
  return (
    <KeyFacts label="StarsPaymee raqam katalogi (namuna)">
      <li>
        <b>{virtualNumberStats.countryCount}</b> davlat — A-Z, arzon, qimmat va zaxira bo‘yicha saralash
      </li>
      <li>
        <b>~6 600 so‘m</b> dan — Bangladesh, Hindiston, AQSh va boshqa arzon segmentlar
      </li>
      <li>
        <b>~56 300 so‘m</b> gacha — Singapur, Koreya, Bahrayn kabi premium davlatlar
      </li>
      <li>
        Har bir qatorda <b>«ta mavjud»</b> — qancha tayyor akkaunt/raqam zaxirada ekanini ko‘rsatadi
      </li>
    </KeyFacts>
  );
}

export function StarsPremiumLinksUz() {
  return (
    <p>
      Raqamdan keyin ko‘pincha <Link href="/premium">Premium</Link>,{" "}
      <Link href="/stars">Stars</Link> yoki <Link href="/gifts">Gifts</Link> kerak bo‘ladi — ularni ham botda
      username bilan olish mumkin. Batafsil:{" "}
      <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">Stars qayerdan olish</Link> va{" "}
      <Link href="/blog/telegram-premium-eng-oson-usul">Premium eng oson usul</Link>.
    </p>
  );
}

export function StarsPremiumLinksRu() {
  return (
    <p>
      После номера часто нужны <Link href="/premium">Premium</Link>,{" "}
      <Link href="/stars">Stars</Link> или <Link href="/gifts">Gifts</Link> — в боте по username. Подробнее:{" "}
      <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">где купить Stars</Link> и{" "}
      <Link href="/blog/telegram-premium-eng-oson-usul">самый простой Premium</Link>.
    </p>
  );
}

export const growthCompareHeadersUz = ["Variant", "Narx diapazoni", "SMS/OTP", "O‘zbekiston kartasi"];
export const growthCompareHeadersRu = ["Вариант", "Диапазон цен", "SMS/OTP", "Карта Узбекистана"];
