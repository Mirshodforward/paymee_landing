import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-avtotolovni-ochirish";

function UzAnswer() {
  return (
    <p>
      Telegram Premium’ning avtomatik yechib olinishini o‘chirish uchun: <strong>Sozlamalar → Telegram Premium</strong>{" "}
      bo‘limiga kiring va «Obunani bekor qilish» (Cancel subscription) tugmasini bosing. Bekor qilgach ham Premium{" "}
      <strong>to‘langan muddat oxirigacha</strong> ishlashda davom etadi, pul esa qaytarilmaydi — bu shunchaki
      keyingi avtomatik to‘lovning oldini oladi. App Store/Google Play orqali olingan bo‘lsa, bekor qilish o‘sha
      do‘kon sozlamalaridan amalga oshirilishi kerak.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qayerdan", label: "Qayerdan o‘chiriladi" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich bekor qilish" },
          { href: "#appstore", label: "App Store / Google Play orqali olingan bo‘lsa" },
          { href: "#muddat", label: "Bekor qilgach nima bo‘ladi" },
          { href: "#pul", label: "Pul qaytadimi" },
        ]}
      />

      <h2 id="qayerdan">Avtomatik to‘lov qayerdan o‘chiriladi?</h2>
      <p>
        Bu — qayerdan sotib olganingizga bog‘liq. Agar Premium’ni to‘g‘ridan-to‘g‘ri Telegram ilovasi ichidan (Apple
        yoki Google to‘lovi orqali) olgan bo‘lsangiz, avtoto‘lov o‘sha platforma sozlamalarida boshqariladi. Agar
        botdan bir martalik xarid sifatida olgan bo‘lsangiz (masalan, mahalliy bot orqali), odatda avtomatik yechib
        olish umuman yo‘q — bu holatda muddati tugagach obuna shunchaki tugaydi.
      </p>

      <h2 id="bosqichlar">Telegram ilovasi ichida bekor qilish — bosqichma-bosqich</h2>
      <Steps>
        <Step title="Sozlamalarga o‘ting">Telegram’da Sozlamalar (Settings) bo‘limini oching.</Step>
        <Step title="Telegram Premium’ni tanlang">Sozlamalar ro‘yxatidan «Telegram Premium»ni bosing.</Step>
        <Step title="Obuna holatini toping">
          Sahifa pastida joriy obuna va uning yangilanish sanasi ko‘rsatilgan bo‘ladi.
        </Step>
        <Step title="Obunani bekor qiling">
          «Cancel subscription» (obunani bekor qilish) tugmasini bosib, tasdiqlang.
        </Step>
      </Steps>

      <InlineCta text="Yangi obuna kerakmi? So‘mda, botda 10 soniyada — avtoto‘lovsiz variant ham bor." />

      <h2 id="appstore">App Store yoki Google Play orqali olingan bo‘lsa</h2>
      <KeyFacts label="Qayerdan bekor qilinadi">
        <li>
          <b>iPhone (App Store):</b> Sozlamalar → [Ismingiz] → Obunalar → Telegram → «Obunani bekor qilish».
        </li>
        <li>
          <b>Android (Google Play):</b> Play Market → Profil → To‘lovlar va obunalar → Obunalar → Telegram → «Bekor
          qilish».
        </li>
        <li>
          <b>Muhim:</b> Telegram ilovasi ichida bekor qilish bu holatda yetarli emas — do‘kon sozlamasidan ham
          o‘chirish kerak.
        </li>
      </KeyFacts>
      <p>
        Bu — App Store/Google Play’ning umumiy qoidasi: ilova ichi to‘lovlarini faqat o‘sha do‘kon boshqaradi. Buning
        sabablarini{" "}
        <Link href="/blog/telegram-stars-app-store-narx-farqi">«Stars va App Store narx farqi»</Link> maqolasida
        ko‘rish mumkin — komissiya mexanizmi Premium uchun ham o‘xshash.
      </p>

      <h2 id="muddat">Bekor qilgach Premium qachongacha ishlaydi?</h2>
      <p>
        Obunani bekor qilish darhol Premium’ni o‘chirmaydi — u <strong>to‘langan davr oxirigacha</strong> to‘liq
        ishlaydi (masalan, oyning oxirigacha). Shundan keyin akkaunt avtomatik ravishda oddiy (Premium’siz) rejimga
        qaytadi, keyingi to‘lov esa yechilmaydi.
      </p>

      <h2 id="pul">Bekor qilgach pul qaytariladimi?</h2>
      <p>
        Yo‘q, odatda qaytarilmaydi — obunani bekor qilish faqat <strong>keyingi</strong> avtomatik to‘lovning oldini
        oladi, joriy to‘langan davr uchun pul qaytarilmaydi. Agar texnik xatolik yoki noto‘g‘ri hisobdan yechilgan
        bo‘lsa, App Store/Google Play’ning o‘z qaytarish (refund) so‘rovi orqali murojaat qilish kerak. Premium’ning
        umumiy foydalarini qayta ko‘rib chiqish uchun{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link> maqolasiga qarang, yoki
        arzonroq usulni{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium eng oson usul»</Link>da toping.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium FAQ" },
          { href: "https://support.apple.com/HT202039", label: "support.apple.com/HT202039", note: "App Store obunani bekor qilish" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Чтобы отключить автоматическое продление Telegram Premium: зайдите в{" "}
      <strong>Настройки → Telegram Premium</strong> и нажмите «Отменить подписку» (Cancel subscription). После
      отмены Premium продолжит работать <strong>до конца оплаченного периода</strong>, деньги не возвращаются — это
      просто предотвращает следующее автосписание. Если подписка куплена через App Store/Google Play, отменять нужно
      в настройках этого магазина.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qayerdan", label: "Где отключается автосписание" },
          { href: "#bosqichlar", label: "Пошаговая отмена" },
          { href: "#appstore", label: "Если куплено через App Store / Google Play" },
          { href: "#muddat", label: "Что будет после отмены" },
          { href: "#pul", label: "Возвращаются ли деньги" },
        ]}
      />

      <h2 id="qayerdan">Где отключается автоматическая оплата?</h2>
      <p>
        Это зависит от того, где вы купили подписку. Если Premium куплен прямо в приложении Telegram (через оплату
        Apple или Google), автосписание управляется в настройках этой платформы. Если куплен как разовая покупка у
        бота (например, местного), автосписания обычно вообще нет — подписка просто заканчивается по истечении срока.
      </p>

      <h2 id="bosqichlar">Отмена внутри приложения Telegram — пошагово</h2>
      <Steps>
        <Step title="Откройте настройки">Откройте раздел «Настройки» в Telegram.</Step>
        <Step title="Выберите Telegram Premium">Нажмите «Telegram Premium» в списке настроек.</Step>
        <Step title="Найдите статус подписки">
          Внизу страницы указана текущая подписка и дата её продления.
        </Step>
        <Step title="Отмените подписку">
          Нажмите «Cancel subscription» (отменить подписку) и подтвердите.
        </Step>
      </Steps>

      <InlineCta text="Нужна новая подписка? В сумах, в боте за 10 секунд — есть вариант без автосписания." />

      <h2 id="appstore">Если куплено через App Store или Google Play</h2>
      <KeyFacts label="Где отменять">
        <li>
          <b>iPhone (App Store):</b> Настройки → [Ваше имя] → Подписки → Telegram → «Отменить подписку».
        </li>
        <li>
          <b>Android (Google Play):</b> Play Маркет → Профиль → Платежи и подписки → Подписки → Telegram → «Отменить».
        </li>
        <li>
          <b>Важно:</b> отмены внутри приложения Telegram в этом случае недостаточно — нужно отменить и в настройках
          магазина.
        </li>
      </KeyFacts>
      <p>
        Это общее правило App Store/Google Play: покупками внутри приложения управляет только сам магазин. Причины
        этого — в статье{" "}
        <Link href="/blog/telegram-stars-app-store-narx-farqi">«Разница цен Stars и App Store»</Link> — механизм
        комиссии похож и для Premium.
      </p>

      <h2 id="muddat">До какого момента работает Premium после отмены?</h2>
      <p>
        Отмена подписки не отключает Premium сразу — он полностью работает{" "}
        <strong>до конца оплаченного периода</strong> (например, до конца месяца). После этого аккаунт автоматически
        возвращается в обычный (без Premium) режим, а следующая оплата не списывается.
      </p>

      <h2 id="pul">Возвращаются ли деньги после отмены?</h2>
      <p>
        Обычно нет — отмена подписки предотвращает только <strong>следующее</strong> автосписание, за текущий
        оплаченный период деньги не возвращаются. При технической ошибке или неверном списании нужно обратиться за
        возвратом (refund) напрямую в App Store/Google Play. Пересмотреть преимущества Premium можно в статье{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Стоит ли Premium»</Link>, а более дешёвый способ — в{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium самым простым способом»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ по Telegram Premium" },
          { href: "https://support.apple.com/HT202039", label: "support.apple.com/HT202039", note: "отмена подписки App Store" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram premium bekor qilish",
    "premium avtomatik pul yechyapti",
    "telegram premium avtotolovni ochirish",
    "telegram premium obunani bekor qilish",
    "cancel telegram premium",
  ],
  howToSteps: [
    { name: "Sozlamalarga o‘ting", text: "Telegram’da Sozlamalar bo‘limini oching." },
    { name: "Telegram Premium’ni tanlang", text: "Sozlamalar ro‘yxatidan Telegram Premium’ni bosing." },
    { name: "Obuna holatini toping", text: "Joriy obuna va yangilanish sanasini ko‘ring." },
    { name: "Obunani bekor qiling", text: "Cancel subscription tugmasini bosib, tasdiqlang." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium avtoto‘lovni o‘chirish — obunani bekor qilish qo‘llanmasi (2026)",
      excerpt:
        "Telegram Premium avtomatik yechib olinishini qayerdan o‘chirish mumkin, bekor qilgach Premium qachongacha ishlaydi va pul qaytadimi — to‘liq qo‘llanma.",
      metaTitle: "Telegram Premium avtoto‘lovni bekor qilish — 2026",
      metaDescription:
        "Telegram Premium avtomatik to‘lovini qanday o‘chirish: Sozlamalar, App Store va Google Play orqali bekor qilish, muddat va pul qaytarish qoidalari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Boshqa turdagi obuna kerakmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali — avtoto‘lovsiz variant ham bor.",
      faq: [
        {
          question: "Telegram Premium avtoto‘lovi qayerdan o‘chiriladi?",
          answer:
            "Sozlamalar → Telegram Premium bo‘limidan, yoki agar App Store/Google Play orqali olingan bo‘lsa — o‘sha do‘kon sozlamalaridan.",
        },
        {
          question: "Obunani bekor qilsam, Premium darhol o‘chadimi?",
          answer: "Yo‘q, to‘langan muddat oxirigacha to‘liq ishlaydi, keyin avtomatik oddiy rejimga qaytadi.",
        },
        {
          question: "Bekor qilgach pul qaytariladimi?",
          answer: "Odatda yo‘q — bu faqat keyingi to‘lovning oldini oladi. Xato bo‘lsa, do‘kon (Apple/Google) orqali refund so‘raladi.",
        },
        {
          question: "Botdan sotib olingan Premium’da avtoto‘lov bormi?",
          answer: "Odatda yo‘q — bot orqali bir martalik xarid sifatida olingan Premium avtomatik yangilanmaydi.",
        },
        {
          question: "Telegram ilovasida bekor qilsam, App Store’dagi obuna ham to‘xtaydimi?",
          answer: "Yo‘q, App Store/Google Play orqali olingan bo‘lsa, o‘sha do‘kon sozlamalaridan alohida bekor qilish kerak.",
        },
      ],
    },
    ru: {
      title: "Отключение автоплатежа Telegram Premium — руководство по отмене подписки (2026)",
      excerpt:
        "Где отключить автоматическое списание за Telegram Premium, до какого момента работает Premium после отмены и возвращаются ли деньги — полное руководство.",
      metaTitle: "Отмена автоплатежа Telegram Premium — 2026",
      metaDescription:
        "Как отключить автоматическую оплату Telegram Premium: через Настройки, App Store и Google Play, сроки действия и правила возврата денег.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужен другой вариант подписки?",
      ctaBody: "В сумах, локальной картой через @StarsPaymee_bot — есть вариант без автосписания.",
      faq: [
        {
          question: "Где отключить автоплатёж Telegram Premium?",
          answer:
            "В Настройках → Telegram Premium, либо, если куплено через App Store/Google Play — в настройках этого магазина.",
        },
        {
          question: "Отключится ли Premium сразу после отмены?",
          answer: "Нет, он полностью работает до конца оплаченного периода, затем автоматически возвращается в обычный режим.",
        },
        {
          question: "Возвращаются ли деньги после отмены?",
          answer: "Обычно нет — это лишь предотвращает следующее списание. При ошибке нужно запросить возврат через Apple/Google.",
        },
        {
          question: "Есть ли автосписание у Premium, купленного через бота?",
          answer: "Обычно нет — купленный у бота как разовая покупка Premium автоматически не продлевается.",
        },
        {
          question: "Если отменю в Telegram, остановится ли подписка в App Store?",
          answer: "Нет, если куплено через App Store/Google Play, отменять нужно отдельно в настройках этого магазина.",
        },
      ],
    },
  },
};
