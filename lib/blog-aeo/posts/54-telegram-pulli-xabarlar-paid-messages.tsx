import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-pulli-xabarlar-paid-messages";

function UzAnswer() {
  return (
    <p>
      Telegram’dagi Paid Messages (pulli xabarlar) — kontaktda bo‘lmagan foydalanuvchilardan keladigan xabarlar
      uchun Stars’da narx belgilash funksiyasi: xabar yuboruvchi belgilangan Stars’ni to‘lasa, xabar sizga yetib
      boradi. Bu — keraksiz xabarlarni kamaytirish va bir vaqtning o‘zida qo‘shimcha daromad olish uchun mo‘ljallangan
      ikki maqsadli vosita.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Paid Messages nima" },
          { href: "#yoqish", label: "Qanday yoqiladi" },
          { href: "#narx", label: "Narx qanday belgilanadi" },
          { href: "#kimga", label: "Kimlar uchun mantiqli" },
          { href: "#daromad", label: "Daromadni qanday hisoblash mumkin" },
        ]}
      />

      <h2 id="nima">Paid Messages (pulli xabarlar) nima?</h2>
      <p>
        Bu — Telegram’ning spam va keraksiz xabarlardan himoyalanish uchun taqdim etgan funksiyasi: kontaktda
        bo‘lmagan foydalanuvchi sizga yozmoqchi bo‘lsa, u belgilangan miqdorda Stars to‘lashi kerak bo‘ladi. Agar
        siz keyinchalik shu foydalanuvchiga javob bersangiz, Stars odatda sizga o‘tadi (yoki qoidalarga qarab
        boshqacha taqsimlanishi mumkin).
      </p>

      <h2 id="yoqish">Paid Messages qanday yoqiladi?</h2>
      <Steps>
        <Step title="Maxfiylik sozlamalariga o‘ting">Telegram Sozlamalar → Maxfiylik va xavfsizlik bo‘limini oching.</Step>
        <Step title="«Xabarlar» sozlamasini toping">Kimlar sizga bepul yoza olishini boshqaradigan qismni toping.</Step>
        <Step title="Pulli xabarlarni yoqing">
          Kontaktda bo‘lmaganlar uchun Stars narxini belgilang.
        </Step>
        <Step title="Narxni tasdiqlang">Belgilangan Stars miqdori saqlanadi va darhol amal qila boshlaydi.</Step>
      </Steps>

      <InlineCta text="Auditoriyangizga Stars kerak bo‘lsa — botda so‘mda 10 soniyada." />

      <h2 id="narx">Narxni qanday to‘g‘ri belgilash mumkin?</h2>
      <KeyFacts label="Narx strategiyasi">
        <li>
          <b>Juda past narx:</b> spam kamaymasligi mumkin — narx sezilarli to‘siq bo‘lishi kerak.
        </li>
        <li>
          <b>Juda yuqori narx:</b> haqiqiy muhim xabarlar ham kelmay qolishi mumkin.
        </li>
        <li>
          <b>O‘rtacha muvozanat:</b> auditoriyangiz xarakteriga qarab moslashtiring — kreatorlar uchun boshqacha,
          jamoat arbobi uchun boshqacha.
        </li>
      </KeyFacts>

      <h2 id="kimga">Paid Messages kimlar uchun mantiqli?</h2>
      <ul>
        <li>
          <strong>Mashhur shaxslar va katta auditoriyali kreatorlar:</strong> notanish odamlardan kelayotgan
          xabarlar sonini boshqarish uchun.
        </li>
        <li>
          <strong>Biznes va konsalting xizmatlari:</strong> faqat jiddiy murojaatlarni filtrlash uchun.
        </li>
        <li>
          <strong>Oddiy foydalanuvchi:</strong> odatda zarurat kam, chunki kontaktlar bilan yozishish bepul qoladi.
        </li>
      </ul>
      <p>
        Bu funksiya Stars’ning ko‘plab ishlatilish usullaridan biri — to‘liq ro‘yxatni{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Stars ishlatish usullari»</Link>{" "}
        maqolasida ko‘ring.
      </p>

      <h2 id="daromad">Daromadni qanday hisoblash mumkin?</h2>
      <p>
        Daromad = (kelgan pulli xabarlar soni) × (belgilangan Stars narxi). Masalan, kuniga 20 ta notanish xabar
        kelsa va narx 50 Stars qilib belgilansa, bu — kuniga 1000 Stars’gacha potensial daromad (agar barcha xabar
        yuboruvchilar to‘lasa). Amalda bu ancha kamroq bo‘ladi, chunki narx ko‘p spamerlarni to‘xtatadi. Kreatorlar
        uchun boshqa daromad manbalarini{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">«Kanalni Stars bilan monetizatsiya»</Link>{" "}
        maqolasida ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "Paid Messages e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Paid Messages (платные сообщения) в Telegram — функция установки цены в Stars за сообщения от пользователей
      не из контактов: если отправитель оплачивает установленную сумму Stars, сообщение доходит до вас. Это
      двухцелевой инструмент — снижает количество нежелательных сообщений и одновременно приносит дополнительный
      доход.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое Paid Messages" },
          { href: "#yoqish", label: "Как включить" },
          { href: "#narx", label: "Как установить цену" },
          { href: "#kimga", label: "Кому это логично" },
          { href: "#daromad", label: "Как рассчитать доход" },
        ]}
      />

      <h2 id="nima">Что такое Paid Messages (платные сообщения)?</h2>
      <p>
        Это функция Telegram для защиты от спама и нежелательных сообщений: если пользователь не из ваших
        контактов хочет вам написать, ему нужно заплатить установленное количество Stars. Если вы затем ответите
        этому пользователю, Stars обычно переходят вам (или распределяются иначе в зависимости от правил).
      </p>

      <h2 id="yoqish">Как включить Paid Messages?</h2>
      <Steps>
        <Step title="Перейдите в настройки приватности">Откройте Настройки → Конфиденциальность и безопасность в Telegram.</Step>
        <Step title="Найдите настройку «Сообщения»">Найдите раздел, управляющий тем, кто может писать вам бесплатно.</Step>
        <Step title="Включите платные сообщения">Установите цену в Stars для пользователей не из контактов.</Step>
        <Step title="Подтвердите цену">Установленная сумма Stars сохраняется и сразу начинает действовать.</Step>
      </Steps>

      <InlineCta text="Вашей аудитории нужны Stars? В боте — в сумах за 10 секунд." />

      <h2 id="narx">Как правильно установить цену?</h2>
      <KeyFacts label="Стратегия цены">
        <li>
          <b>Слишком низкая цена:</b> спам может не уменьшиться — цена должна быть заметным барьером.
        </li>
        <li>
          <b>Слишком высокая цена:</b> могут не доходить и действительно важные сообщения.
        </li>
        <li>
          <b>Средний баланс:</b> подстройте под характер вашей аудитории — для авторов иначе, чем для публичной
          персоны.
        </li>
      </KeyFacts>

      <h2 id="kimga">Кому логично использовать Paid Messages?</h2>
      <ul>
        <li>
          <strong>Известным личностям и авторам с большой аудиторией:</strong> для управления количеством сообщений
          от незнакомцев.
        </li>
        <li>
          <strong>Бизнесу и консалтинговым услугам:</strong> для фильтрации только серьёзных обращений.
        </li>
        <li>
          <strong>Обычному пользователю:</strong> обычно нужно редко, так как переписка с контактами остаётся
          бесплатной.
        </li>
      </ul>
      <p>
        Эта функция — один из многих способов использования Stars; полный список — в статье{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Способы использования Stars»</Link>.
      </p>

      <h2 id="daromad">Как рассчитать доход?</h2>
      <p>
        Доход = (количество полученных платных сообщений) × (установленная цена в Stars). Например, если в день
        приходит 20 сообщений от незнакомцев, а цена установлена в 50 Stars, это до 1000 Stars потенциального
        дохода в день (если все отправители платят). На практике это будет значительно меньше, так как цена
        останавливает многих спамеров. Другие источники дохода для авторов — в статье{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">«Монетизация канала через Stars»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "анонс Paid Messages" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram paid messages",
    "telegram pulli xabarlar",
    "telegram stars message price",
    "telegram spam himoya stars",
    "telegram pulli xabar narxi",
  ],
  howToSteps: [
    { name: "Maxfiylik sozlamalariga o‘ting", text: "Sozlamalar → Maxfiylik va xavfsizlik bo‘limini oching." },
    { name: "Xabarlar sozlamasini toping", text: "Kimlar bepul yoza olishini boshqaradigan qismni toping." },
    { name: "Pulli xabarlarni yoqing", text: "Kontaktda bo‘lmaganlar uchun Stars narxini belgilang." },
    { name: "Narxni tasdiqlang", text: "Belgilangan Stars miqdori saqlanadi." },
  ],
  locales: {
    uz: {
      title: "Telegramda pulli xabarlar (Paid Messages): yoqish, narx va daromad (2026)",
      excerpt:
        "Telegram Paid Messages funksiyasi kimlar uchun mantiqli, narx strategiyasi qanday tanlanadi va daromadni qanday hisoblash mumkin.",
      metaTitle: "Telegram Paid Messages — qo‘llanma 2026",
      metaDescription:
        "Telegramda pulli xabarlar (Paid Messages) qanday yoqiladi, narx qanday belgilanadi, kimlar uchun mantiqli va daromadni hisoblash usuli.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Auditoriyangizga Stars kerakmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada.",
      faq: [
        {
          question: "Paid Messages qayerdan yoqiladi?",
          answer: "Sozlamalar → Maxfiylik va xavfsizlik bo‘limidagi xabarlar sozlamasidan.",
        },
        {
          question: "Kontaktdagi odamlar ham to‘lashi kerakmi?",
          answer: "Yo‘q, bu faqat kontaktda bo‘lmagan foydalanuvchilarga tegishli.",
        },
        {
          question: "Narxni qanday to‘g‘ri tanlash kerak?",
          answer: "Juda past narx spamni to‘xtatmaydi, juda yuqori narx muhim xabarlarni ham to‘smasligi uchun o‘rtacha darajani tanlash tavsiya etiladi.",
        },
        {
          question: "Bu funksiya daromad keltiradimi?",
          answer: "Ha, agar notanish odamlar ko‘p yozsa, to‘langan Stars sizga qo‘shimcha daromad bo‘lishi mumkin.",
        },
        {
          question: "Oddiy foydalanuvchiga bu funksiya kerakmi?",
          answer: "Ko‘pincha kerak emas — bu asosan katta auditoriyaga ega kreator va jamoat arboblari uchun foydali.",
        },
      ],
    },
    ru: {
      title: "Платные сообщения (Paid Messages) в Telegram: включение, цена и доход (2026)",
      excerpt:
        "Кому логична функция Telegram Paid Messages, как выбрать стратегию цены и как рассчитать доход.",
      metaTitle: "Telegram Paid Messages — руководство 2026",
      metaDescription:
        "Как включить платные сообщения (Paid Messages) в Telegram, как установить цену, кому это логично и как рассчитать доход.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Вашей аудитории нужны Stars?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Где включить Paid Messages?",
          answer: "В Настройках → Конфиденциальность и безопасность, в разделе настройки сообщений.",
        },
        {
          question: "Должны ли платить люди из контактов?",
          answer: "Нет, это касается только пользователей, не входящих в ваши контакты.",
        },
        {
          question: "Как правильно выбрать цену?",
          answer: "Слишком низкая цена не остановит спам, слишком высокая может отсечь и важные сообщения — рекомендуется средний баланс.",
        },
        {
          question: "Приносит ли эта функция доход?",
          answer: "Да, если много незнакомцев пишут вам, оплаченные Stars могут стать дополнительным доходом.",
        },
        {
          question: "Нужна ли эта функция обычному пользователю?",
          answer: "Часто не нужна — она в основном полезна авторам с большой аудиторией и публичным личностям.",
        },
      ],
    },
  },
};
