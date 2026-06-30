import type { AeoUiLocale } from "./types";

/** AEO maqola sahifasi uchun til bo‘yicha interfeys yorliqlari. */
export type AeoUiLabels = {
  faqHeading: string;
  sourcesLabel: string;
  relatedHeading: string;
  tocLabel: string;
  updated: string;
  published: string;
  read: string;
  botLabel: string;
  openBot: string;
  home: string;
  blog: string;
  back: string;
};

const LABELS: Record<AeoUiLocale, AeoUiLabels> = {
  uz: {
    faqHeading: "Tez-tez beriladigan savollar",
    sourcesLabel: "Manbalar",
    relatedHeading: "O‘xshash maqolalar",
    tocLabel: "Mundarija",
    updated: "Yangilangan",
    published: "E’lon qilingan",
    read: "O‘qish",
    botLabel: "Botda buyurtma berish",
    openBot: "Botni ochish",
    home: "Bosh sahifa",
    blog: "Blog",
    back: "Blogga qaytish",
  },
  ru: {
    faqHeading: "Часто задаваемые вопросы",
    sourcesLabel: "Источники",
    relatedHeading: "Похожие статьи",
    tocLabel: "Содержание",
    updated: "Обновлено",
    published: "Опубликовано",
    read: "Читать",
    botLabel: "Оформить заказ в боте",
    openBot: "Открыть бот",
    home: "Главная",
    blog: "Блог",
    back: "Вернуться в блог",
  },
  en: {
    faqHeading: "Frequently asked questions",
    sourcesLabel: "Sources",
    relatedHeading: "Related articles",
    tocLabel: "Contents",
    updated: "Updated",
    published: "Published",
    read: "Read",
    botLabel: "Order in the bot",
    openBot: "Open the bot",
    home: "Home",
    blog: "Blog",
    back: "Back to blog",
  },
};

export function getAeoUi(locale: AeoUiLocale): AeoUiLabels {
  return LABELS[locale] ?? LABELS.uz;
}
