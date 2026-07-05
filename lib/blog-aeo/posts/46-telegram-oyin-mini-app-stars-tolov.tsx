import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-oyin-mini-app-stars-tolov";

function UzAnswer() {
  return (
    <p>
      Telegram o‘yinlari va Mini App’larida Stars bilan to‘lov — ilova ichida chiqqan «Pay» yoki «Buy» tugmasini
      bosish orqali amalga oshadi: Telegram avtomatik ravishda balansingizdagi Stars’ni tekshiradi va tasdiqlash
      oynasini ko‘rsatadi. Agar balansda yetarli Stars bo‘lmasa, to‘lovni yakunlashdan oldin to‘g‘ridan-to‘g‘ri
      qo‘shimcha Stars sotib olish taklif qilinadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qanday", label: "Mini App’da to‘lov qanday ishlaydi" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich xarid" },
          { href: "#balans", label: "Balans yetmasa nima bo‘ladi" },
          { href: "#xavfsizlik", label: "Xavfsizlik va tasdiqlash" },
        ]}
      />

      <h2 id="qanday">Telegram o‘yin va Mini App’larida to‘lov qanday ishlaydi?</h2>
      <p>
        Telegram Mini App’lar (o‘yinlar, xizmatlar, do‘konlar) ichki xaridlar uchun Telegram’ning rasmiy to‘lov
        API’sidan foydalanadi — bu <strong>Stars</strong> orqali amalga oshadi. Foydalanuvchi tashqi to‘lov tizimiga
        chiqmasdan, to‘liq Telegram ichida xaridni yakunlaydi.
      </p>

      <h2 id="bosqichlar">Bosqichma-bosqich: Mini App’da qanday to‘lash mumkin?</h2>
      <Steps>
        <Step title="Mini App’ni oching">Telegram ichida kerakli o‘yin yoki xizmatni ishga tushiring.</Step>
        <Step title="Xarid qilmoqchi bo‘lgan narsani tanlang">
          Ichki mahsulot, funksiya yoki o‘yin ichidagi narsani tanlang.
        </Step>
        <Step title="«Pay with Stars» tugmasini bosing">
          Telegram tasdiqlash oynasini ko‘rsatadi — narx Stars’da aniq ko‘rinadi.
        </Step>
        <Step title="To‘lovni tasdiqlang">
          Bir bosishda tasdiqlaysiz, Stars balansingizdan yechiladi va mahsulot darhol faollashadi.
        </Step>
      </Steps>

      <InlineCta text="Balansingizda Stars yetarlimi? So‘mda, botda 10 soniyada to‘ldiring." />

      <h2 id="balans">Balansda Stars yetarli bo‘lmasa nima bo‘ladi?</h2>
      <KeyFacts label="Bunday holatda">
        <li>
          <b>Avtomatik taklif:</b> Telegram darhol qo‘shimcha Stars sotib olishni taklif qiladi.
        </li>
        <li>
          <b>To‘g‘ridan-to‘g‘ri to‘lov:</b> Mini App’dan chiqmasdan, shu oynada kerakli paketni tanlash mumkin.
        </li>
        <li>
          <b>Xarid davomiyligi:</b> Stars yetkazilgach, boshlangan xarid avtomatik yakunlanadi.
        </li>
      </KeyFacts>
      <p>
        Agar oldindan Stars sotib olib qo‘yishni afzal ko‘rsangiz, buni{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> maqolasida
        ko‘rgan holda amalga oshirishingiz mumkin.
      </p>

      <h2 id="xavfsizlik">To‘lov xavfsiz va tasdiqlanganmi?</h2>
      <p>
        Ha — bu jarayon to‘liq Telegram’ning rasmiy to‘lov infratuzilmasi orqali ishlaydi, uchinchi tomon
        saytlariga o‘tish yoki karta ma’lumotini kiritish talab qilinmaydi (agar Stars balansda bo‘lsa). Bu ayni
        paytda Mini App ishlab chiquvchilari uchun ham qulay — ular o‘z to‘lov tizimini yaratishi shart emas.
        Dasturchilar uchun botga Stars to‘lovini qanday ulash haqida{" "}
        <Link href="/blog/telegram-botga-stars-tolovini-ulash">«Botga Stars to‘lovini ulash»</Link> maqolasida
        batafsil yozilgan.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "Stars to‘lov API hujjati" },
          { href: "https://core.telegram.org/bots/webapps", label: "core.telegram.org/bots/webapps", note: "Mini Apps hujjati" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Оплата Stars в играх и Mini App Telegram происходит через нажатие кнопки «Pay» или «Buy», появляющейся внутри
      приложения: Telegram автоматически проверяет баланс Stars и показывает окно подтверждения. Если Stars на
      балансе недостаточно, перед завершением оплаты сразу предлагается докупить дополнительные Stars.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qanday", label: "Как работает оплата в Mini App" },
          { href: "#bosqichlar", label: "Пошаговая покупка" },
          { href: "#balans", label: "Что если баланса не хватает" },
          { href: "#xavfsizlik", label: "Безопасность и подтверждение" },
        ]}
      />

      <h2 id="qanday">Как работает оплата в играх и Mini App Telegram?</h2>
      <p>
        Telegram Mini App (игры, сервисы, магазины) используют официальный платёжный API Telegram для внутренних
        покупок — это происходит через <strong>Stars</strong>. Пользователь завершает покупку полностью внутри
        Telegram, не переходя на внешнюю платёжную систему.
      </p>

      <h2 id="bosqichlar">Пошагово: как оплатить в Mini App?</h2>
      <Steps>
        <Step title="Откройте Mini App">Запустите нужную игру или сервис внутри Telegram.</Step>
        <Step title="Выберите, что хотите купить">Выберите внутренний товар, функцию или предмет в игре.</Step>
        <Step title="Нажмите «Pay with Stars»">
          Telegram покажет окно подтверждения — цена отображается в Stars.
        </Step>
        <Step title="Подтвердите оплату">
          Одним нажатием подтверждаете, Stars списываются с баланса, товар сразу активируется.
        </Step>
      </Steps>

      <InlineCta text="Достаточно ли Stars на балансе? Пополните в сумах, в боте за 10 секунд." />

      <h2 id="balans">Что если на балансе не хватает Stars?</h2>
      <KeyFacts label="В этом случае">
        <li>
          <b>Автоматическое предложение:</b> Telegram сразу предлагает докупить дополнительные Stars.
        </li>
        <li>
          <b>Прямая оплата:</b> не выходя из Mini App, можно выбрать нужный пакет в том же окне.
        </li>
        <li>
          <b>Продолжение покупки:</b> после зачисления Stars начатая покупка завершается автоматически.
        </li>
      </KeyFacts>
      <p>
        Если предпочитаете купить Stars заранее, это можно сделать через статью{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>.
      </p>

      <h2 id="xavfsizlik">Безопасна ли оплата и подтверждается ли она?</h2>
      <p>
        Да — этот процесс полностью работает через официальную платёжную инфраструктуру Telegram, переход на
        сторонние сайты или ввод данных карты не требуется (если Stars есть на балансе). Это удобно и для
        разработчиков Mini App — им не нужно создавать собственную платёжную систему. Как подключить оплату Stars к
        боту разработчикам — подробно в статье{" "}
        <Link href="/blog/telegram-botga-stars-tolovini-ulash">«Подключение оплаты Stars к боту»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "документация Stars API оплаты" },
          { href: "https://core.telegram.org/bots/webapps", label: "core.telegram.org/bots/webapps", note: "документация Mini Apps" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram mini app stars tolov",
    "telegram oyinlarda stars",
    "telegram stars payment",
    "mini app stars bilan tolash",
    "telegram game stars purchase",
  ],
  howToSteps: [
    { name: "Mini App’ni oching", text: "Telegram ichida kerakli o‘yin yoki xizmatni ishga tushiring." },
    { name: "Mahsulotni tanlang", text: "Ichki mahsulot, funksiya yoki o‘yin ichidagi narsani tanlang." },
    { name: "Pay with Stars tugmasini bosing", text: "Telegram tasdiqlash oynasini ko‘rsatadi." },
    { name: "To‘lovni tasdiqlang", text: "Stars balansdan yechiladi, mahsulot darhol faollashadi." },
  ],
  locales: {
    uz: {
      title: "Telegram o‘yinlari va Mini App’larda Stars bilan to‘lov qilish (2026)",
      excerpt:
        "Telegram o‘yin va Mini App’larida Stars orqali qanday to‘lov qilinadi, balans yetmasa nima bo‘ladi va bu jarayon qanchalik xavfsiz.",
      metaTitle: "Telegram Mini App’da Stars bilan to‘lov — 2026",
      metaDescription:
        "Telegram o‘yinlari va Mini App’larda Stars bilan to‘lov qanday ishlaydi: bosqichma-bosqich xarid, balans yetmasa nima qilish va xavfsizlik.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘yin va Mini App’lar uchun Stars kerakmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada.",
      faq: [
        {
          question: "Mini App’da Stars bilan qanday to‘lash mumkin?",
          answer: "Ichidagi «Pay with Stars» tugmasini bosib, chiqqan oynada to‘lovni tasdiqlash orqali.",
        },
        {
          question: "Balansda Stars yetmasa nima bo‘ladi?",
          answer: "Telegram avtomatik ravishda qo‘shimcha Stars sotib olishni taklif qiladi, Mini App’dan chiqmasdan.",
        },
        {
          question: "Bu to‘lov usuli xavfsizmi?",
          answer: "Ha, u to‘liq Telegram’ning rasmiy to‘lov infratuzilmasi orqali ishlaydi, tashqi saytga o‘tish shart emas.",
        },
        {
          question: "Bu jarayon uchun karta ma’lumoti kiritish kerakmi?",
          answer: "Agar balansda Stars bo‘lsa, yo‘q — faqat balans yetarli bo‘lishi kerak.",
        },
        {
          question: "Dasturchi sifatida botimga Stars to‘lovini qo‘shsam bo‘ladimi?",
          answer: "Ha, Telegram’ning rasmiy to‘lov API’si orqali istalgan bot yoki Mini App’ga Stars to‘lovini ulash mumkin.",
        },
      ],
    },
    ru: {
      title: "Оплата Stars в играх и Mini App Telegram (2026)",
      excerpt:
        "Как происходит оплата через Stars в играх и Mini App Telegram, что если не хватает баланса и насколько безопасен этот процесс.",
      metaTitle: "Оплата Stars в Telegram Mini App — 2026",
      metaDescription:
        "Как работает оплата Stars в играх и Mini App Telegram: пошаговая покупка, что делать при нехватке баланса и вопросы безопасности.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars для игр и Mini App?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Как оплатить в Mini App через Stars?",
          answer: "Нажав кнопку «Pay with Stars» внутри приложения и подтвердив оплату в появившемся окне.",
        },
        {
          question: "Что если не хватает Stars на балансе?",
          answer: "Telegram автоматически предлагает докупить дополнительные Stars, не выходя из Mini App.",
        },
        {
          question: "Безопасен ли этот способ оплаты?",
          answer: "Да, он полностью работает через официальную платёжную инфраструктуру Telegram, переход на внешний сайт не требуется.",
        },
        {
          question: "Нужно ли вводить данные карты для этого процесса?",
          answer: "Если на балансе есть Stars — нет, достаточно, чтобы баланса хватало.",
        },
        {
          question: "Могу ли я как разработчик добавить оплату Stars в своего бота?",
          answer: "Да, через официальный платёжный API Telegram оплату Stars можно подключить к любому боту или Mini App.",
        },
      ],
    },
  },
};
