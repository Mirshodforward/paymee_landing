import { Link } from "@/i18n/navigation";
import { Toc, InfoGrid, InfoCard, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "farzandingiz-stars-sorasa-ota-onalar";

function UzAnswer() {
  return (
    <p>
      Agar farzandingiz Telegram Stars so‘rasa, tashvishlanmang — Stars oddiy raqamli valyuta bo‘lib, sovg‘a, o‘yin
      ichidagi narsalar yoki Premium uchun ishlatiladi va akkauntga bog‘langan (naqd pulga to‘g‘ridan-to‘g‘ri
      aylanmaydi). Xavfsiz yo‘l — <strong>o‘zingiz</strong> nazorat qilingan holda, kichik miqdorda sotib olib,
      farzandingiz nimaga sarflashini birga muhokama qilish.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Stars nima ekanini oddiy tushuntirish" },
          { href: "#xavfsiz", label: "Xavfsiz xarid qilish" },
          { href: "#nazorat", label: "Sarflashni nazorat qilish" },
          { href: "#suhbat", label: "Farzandingiz bilan suhbat" },
        ]}
      />

      <h2 id="nima">Telegram Stars nima ekanini farzandingizga qanday tushuntirish mumkin?</h2>
      <p>
        Stars — Telegram’ning ichki «tangasi», xuddi o‘yinlardagi ichki valyuta kabi. Uni sovg‘a yuborish, Premium
        obuna, bot va o‘yinlardagi narsalar uchun ishlatish mumkin. Muhim jihat: Stars faqat Telegram ichida ishlaydi
        va uni <strong>orqaga naqd pulga</strong> aylantirib bo‘lmaydi (agar bola oddiy foydalanuvchi bo‘lsa).
      </p>

      <InfoGrid>
        <InfoCard emoji="🎁" title="Sovg'a yuborish">Do‘stiga raqamli sovg‘a jo‘natish uchun.</InfoCard>
        <InfoCard emoji="🎮" title="O'yin ichidagi narsalar">Mini App o‘yinlarida ichki xaridlar uchun.</InfoCard>
        <InfoCard emoji="👍" title="Reaksiyalar">Postlarga yulduzli reaksiya qo‘yish uchun.</InfoCard>
        <InfoCard emoji="⭐" title="Premium sovg'a">Do‘stiga Premium obuna hadya qilish uchun.</InfoCard>
      </InfoGrid>

      <InlineCta text="Nazorat ostida, kichik miqdorda sinab ko‘ring — botda so‘mda 10 soniyada." />

      <h2 id="xavfsiz">Xavfsiz xarid qilish uchun nima qilish kerak?</h2>
      <KeyFacts label="Ota-ona uchun tavsiyalar">
        <li>
          <b>O‘zingiz xarid qiling:</b> farzandingiz kartangiz ma’lumotini bilmasin — xaridni siz amalga oshiring.
        </li>
        <li>
          <b>Kichik miqdordan boshlang:</b> katta summa emas, kichik paket bilan sinab ko‘ring.
        </li>
        <li>
          <b>Ishonchli xizmatdan oling:</b> oferta, support va buyurtma ID’si bor rasmiy botdan foydalaning.
        </li>
      </KeyFacts>
      <p>
        Xavfsiz xizmatni qanday aniqlash haqida{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Xavfsiz sotib olish qo‘llanmasi»</Link>da
        batafsil.
      </p>

      <h2 id="nazorat">Sarflashni qanday nazorat qilish mumkin?</h2>
      <ul>
        <li>
          <strong>Miqdorni oldindan belgilang:</strong> masalan, oyiga ma’lum miqdordagi Stars bilan cheklang.
        </li>
        <li>
          <strong>Nimaga sarflashini bilib turing:</strong> sovg‘a, o‘yin yoki reaksiya uchunligini so‘rab turing.
        </li>
        <li>
          <strong>Kartangizni himoyalang:</strong> onlayn to‘lovlar uchun 2FA yoki cheklovlarni bank ilovasida
          sozlang.
        </li>
      </ul>

      <h2 id="suhbat">Farzandingiz bilan qanday suhbat qurish kerak?</h2>
      <p>
        Taqiqlash o‘rniga tushuntirish samaraliroq: Stars — cheklangan «cho‘ntak puli» kabi, uni oqilona
        sarflash kerakligini, notanish odamlarga yuborish yoki «bepul Stars» va’da qiluvchi shubhali botlarga
        ishonmaslik lozimligini birga muhokama qiling. Bunday firibgar sxemalar haqida{" "}
        <Link href="/blog/telegram-stars-bepul-olish-mumkinmi">«Stars’ni bepul olish mumkinmi»</Link> maqolasida
        batafsil yozilgan — buni birga o‘qib chiqish foydali bo‘ladi.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram xavfsizlik FAQ" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Если ваш ребёнок просит Telegram Stars, не переживайте — Stars являются обычной цифровой валютой, которая
      используется для подарков, внутриигровых предметов или Premium, и привязана к аккаунту (напрямую в наличные
      не превращается). Безопасный путь — покупать небольшими суммами <strong>самостоятельно</strong>, под контролем,
      и вместе обсуждать, на что ребёнок их тратит.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Простое объяснение, что такое Stars" },
          { href: "#xavfsiz", label: "Безопасная покупка" },
          { href: "#nazorat", label: "Контроль трат" },
          { href: "#suhbat", label: "Разговор с ребёнком" },
        ]}
      />

      <h2 id="nima">Как объяснить ребёнку, что такое Telegram Stars?</h2>
      <p>
        Stars — это внутренняя «монета» Telegram, как внутриигровая валюта в играх. Её можно использовать для
        отправки подарков, подписки Premium, покупок в ботах и играх. Важный момент: Stars работают только внутри
        Telegram и <strong>обратно в наличные</strong> не превращаются (если ребёнок — обычный пользователь).
      </p>

      <InfoGrid>
        <InfoCard emoji="🎁" title="Отправка подарков">Для отправки другу цифрового подарка.</InfoCard>
        <InfoCard emoji="🎮" title="Внутриигровые предметы">Для покупок внутри игр в Mini App.</InfoCard>
        <InfoCard emoji="👍" title="Реакции">Для звёздной реакции на посты.</InfoCard>
        <InfoCard emoji="⭐" title="Подарок Premium">Для дарения подписки Premium другу.</InfoCard>
      </InfoGrid>

      <InlineCta text="Попробуйте под контролем, с небольшой суммы — в боте, в сумах за 10 секунд." />

      <h2 id="xavfsiz">Что нужно для безопасной покупки?</h2>
      <KeyFacts label="Рекомендации для родителей">
        <li>
          <b>Покупайте сами:</b> ребёнок не должен знать данные вашей карты — покупку делаете вы.
        </li>
        <li>
          <b>Начните с малого:</b> не с крупной суммы, а с небольшого пакета для пробы.
        </li>
        <li>
          <b>Покупайте у надёжного сервиса:</b> используйте официального бота с офертой, поддержкой и ID заказа.
        </li>
      </KeyFacts>
      <p>
        Как определить надёжный сервис — подробно в{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Руководстве по безопасной покупке»</Link>.
      </p>

      <h2 id="nazorat">Как контролировать траты?</h2>
      <ul>
        <li>
          <strong>Установите лимит заранее:</strong> например, ограничьте определённым количеством Stars в месяц.
        </li>
        <li>
          <strong>Будьте в курсе трат:</strong> спрашивайте, на что тратятся Stars — подарок, игру или реакцию.
        </li>
        <li>
          <strong>Защитите свою карту:</strong> настройте 2FA или лимиты для онлайн-платежей в банковском
          приложении.
        </li>
      </ul>

      <h2 id="suhbat">Как построить разговор с ребёнком?</h2>
      <p>
        Объяснение эффективнее запрета: обсудите, что Stars — это как ограниченные «карманные деньги», их нужно
        тратить разумно, не отправлять незнакомцам и не доверять подозрительным ботам, обещающим «бесплатные
        Stars». О таких мошеннических схемах подробно написано в статье{" "}
        <Link href="/blog/telegram-stars-bepul-olish-mumkinmi">«Можно ли получить Stars бесплатно»</Link> — полезно
        прочитать её вместе.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "FAQ по безопасности Telegram" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "info",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "farzandim stars soraydi",
    "bolalar uchun telegram stars",
    "ota onalar telegram xavfsizlik",
    "telegram stars parental control",
    "bola stars sarflashi",
  ],
  locales: {
    uz: {
      title: "Farzandingiz Telegram Stars so‘rayaptimi? Ota-onalar uchun qo‘llanma (2026)",
      excerpt:
        "Telegram Stars nima ekanini oddiy tilda tushuntirish, xavfsiz xarid qilish va farzandingizning sarflashini nazorat qilish bo'yicha qo'llanma.",
      metaTitle: "Farzandingiz Stars so‘rasa — ota-onalar qo‘llanmasi 2026",
      metaDescription:
        "Farzandingiz Telegram Stars so‘rasa nima qilish kerak: Stars nima ekani, xavfsiz xarid, sarflashni nazorat qilish va farzand bilan suhbat qurish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Nazorat ostida sinab ko‘rasizmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram Stars bolalar uchun xavfsizmi?",
          answer: "O‘zi xavfsiz raqamli valyuta, lekin ota-ona nazorati va xaridni o‘zi amalga oshirishi tavsiya etiladi.",
        },
        {
          question: "Stars’ni naqd pulga aylantirib bo‘ladimi?",
          answer: "Oddiy foydalanuvchi (jumladan bola) uchun yo‘q — Stars faqat Telegram ichida sarflanadi.",
        },
        {
          question: "Farzandimga qancha Stars sotib olsam yetarli?",
          answer: "Kichik miqdordan boshlash va ehtiyojga qarab asta-sekin oshirish tavsiya etiladi.",
        },
        {
          question: "Farzandim \"bepul Stars\" botiga ishonsa nima qilish kerak?",
          answer: "Bunday sxemalar deyarli har doim firibgarlik — farzandingiz bilan bu haqda oldindan gaplashib qo‘ying.",
        },
        {
          question: "Xaridni kim amalga oshirishi kerak — men yoki farzandimmi?",
          answer: "Xavfsizlik uchun xaridni ota-ona o‘zi amalga oshirishi va karta ma’lumotini farzandiga bermasligi tavsiya etiladi.",
        },
      ],
    },
    ru: {
      title: "Ваш ребёнок просит Telegram Stars? Руководство для родителей (2026)",
      excerpt:
        "Простое объяснение, что такое Telegram Stars, безопасная покупка и контроль трат ребёнка — руководство для родителей.",
      metaTitle: "Ребёнок просит Stars — руководство для родителей 2026",
      metaDescription:
        "Что делать, если ребёнок просит Telegram Stars: что это такое, безопасная покупка, контроль трат и разговор с ребёнком.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите попробовать под контролем?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Безопасны ли Telegram Stars для детей?",
          answer: "Сама по себе это безопасная цифровая валюта, но рекомендуется родительский контроль и покупка самим родителем.",
        },
        {
          question: "Можно ли обналичить Stars?",
          answer: "Для обычного пользователя (включая ребёнка) — нет, Stars тратятся только внутри Telegram.",
        },
        {
          question: "Сколько Stars достаточно купить ребёнку?",
          answer: "Рекомендуется начать с небольшого количества и постепенно увеличивать по необходимости.",
        },
        {
          question: "Что делать, если ребёнок поверил боту \"бесплатных Stars\"?",
          answer: "Такие схемы почти всегда мошенничество — заранее обсудите это с ребёнком.",
        },
        {
          question: "Кто должен совершать покупку — я или ребёнок?",
          answer: "Для безопасности рекомендуется, чтобы покупку совершал родитель и не передавал данные карты ребёнку.",
        },
      ],
    },
  },
};
