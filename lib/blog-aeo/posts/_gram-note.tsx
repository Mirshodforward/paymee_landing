import { Link } from "@/i18n/navigation";
import { Notice } from "@/components/blog/aeo-blocks";

/**
 * Toncoin → Gram eslatmasi (2026-10-22). «TON» tanga ma'nosida ishlatilgan
 * eski maqolalarga qo'yiladi: tarmoq nomi TON o'zgarmagan, tanga endi Gram
 * (2026-06-15). Havola — 190-maqola (toncoin-endi-gram). Faktlar o'sha
 * maqolada tekshirilgan; bu yerda faqat qisqa eslatma.
 */
const COPY = {
  uz: {
    label: "Yangilanish — iyun 2026",
    before:
      "TON blokcheynining tangasi Toncoin (TON) 2026-yil 15-iyundan rasman Gram (GRAM) deb ataladi; tarmoq nomi TON o‘zgarmagan, balanslar 1:1 saqlangan. Bu maqolada tanga ma’nosidagi «TON» — endi Gram. Batafsil: ",
    link: "«Toncoin endi Gram» maqolasi",
  },
  ru: {
    label: "Обновление — июнь 2026",
    before:
      "Монета блокчейна TON — Toncoin (TON) — с 15 июня 2026 года официально называется Gram (GRAM); название сети TON не менялось, балансы сохранены 1:1. «TON» в значении монеты в этой статье — теперь Gram. Подробнее: ",
    link: "статья «Toncoin теперь Gram»",
  },
  en: {
    label: "Update — June 2026",
    before:
      "Since 15 June 2026 the TON blockchain’s coin, Toncoin (TON), is officially called Gram (GRAM); the network name TON is unchanged and balances carried over 1:1. Where this article says “TON” as a currency, read Gram. Details: ",
    link: "“Toncoin is now Gram”",
  },
} as const;

export function GramNote({ locale }: { locale: "uz" | "ru" | "en" }) {
  const c = COPY[locale];
  return (
    <Notice label={c.label}>
      {c.before}
      <Link href="/blog/toncoin-endi-gram">{c.link}</Link>.
    </Notice>
  );
}
