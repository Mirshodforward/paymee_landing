import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-kerak";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Agar botdagi xizmat uchun Stars kerak bo‘lib qolsa, ikki variant bor: rasmiy yo‘l (App Store/Google Play) yoki{" "}
      <b>@StarsPaymee_bot</b> orqali so‘mda to‘ldirish. Ikkinchisi tezroq va xalqaro karta talab qilmaydi —
      yulduzlar ~10 soniyada hisobga tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="talab">Stars nima uchun talab qilinadi?</h2>
      <p>
        Telegram dasturchilar uchun Stars asosidagi rasmiy to‘lov tizimini joriy qildi. Endi ko‘plab botlar pul emas,
        balki Stars orqali to‘lov qabul qiladi.
      </p>
      <InfoGrid>
        <InfoCard emoji="🎮" title="O‘yin botlari">
          Qo‘shimcha imkoniyat va darajalar sotib olish.
        </InfoCard>
        <InfoCard emoji="🤖" title="AI botlar">
          Ko‘proq so‘rov yuborish limiti.
        </InfoCard>
        <InfoCard emoji="🔒" title="Yopiq kontent">
          Kanallarda eksklyuziv postlarga kirish.
        </InfoCard>
        <InfoCard emoji="🎁" title="Sovg‘a va stikerlar">
          Raqamli sovg‘alarni sotib olish.
        </InfoCard>
      </InfoGrid>

      <h2 id="yetishmasa">Stars yetishmasa nima qilish kerak?</h2>
      <KeyFacts label="Ikki variant">
        <li><b>Rasmiy Telegram orqali</b> — App Store yoki Google Play, ba’zi mintaqalarda cheklangan.</li>
        <li><b>Ishonchli xizmat orqali</b> — @StarsPaymee_bot va starstg.uz, mahalliy to‘lov bilan.</li>
      </KeyFacts>

      <h2 id="nega">Nega ko‘pchilik muqobil xizmatni tanlaydi?</h2>
      <p>Rasmiy usul ba’zan quyidagi muammolarga duch keladi:</p>
      <KeyFacts label="Rasmiy usuldagi to‘siqlar">
        <li>Xalqaro bank kartasi talab qilinishi.</li>
        <li>Valyuta konvertatsiyasida qo‘shimcha komissiyalar.</li>
        <li>Ayrim mintaqalarda to‘lov cheklovlari.</li>
      </KeyFacts>

      <InlineCta text="Stars tugab qoldimi? Bir daqiqada to‘ldiring." />

      <h2 id="jarayon">To‘ldirish jarayoni</h2>
      <Steps>
        <Step title="1. Bot yoki saytga kiring">@StarsPaymee_bot.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli Stars sonini belgilang.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. To‘lovni amalga oshiring">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="5. Davom eting">Stars tushgach botdagi xizmatdan foydalaning.</Step>
      </Steps>
      <p>Hech qanday murakkab ro‘yxatdan o‘tish yoki qo‘shimcha hujjat talab qilinmaydi.</p>

      <p>
        Qarang: <Link href="/blog/telegram-botlar-uchun-stars">botlarda Stars qanday ishlatiladi</Link>,{" "}
        <Link href="/blog/stars-olish">Stars olish</Link> va{" "}
        <Link href="/blog/telegram-stars-narxi">narxlar</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram yangiliklari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Если для услуги в боте понадобились Stars, есть два варианта: официальный путь (App Store/Google Play) или
      пополнение в сумах через <b>@StarsPaymee_bot</b>. Второй быстрее и не требует международной карты — звёзды
      приходят за ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="talab">Почему требуются Stars?</h2>
      <p>
        Telegram официально ввёл для разработчиков платёжную систему на основе Stars. Теперь многие боты принимают
        оплату не деньгами, а звёздами.
      </p>
      <InfoGrid>
        <InfoCard emoji="🎮" title="Игровые боты">
          Покупка дополнительных возможностей и уровней.
        </InfoCard>
        <InfoCard emoji="🤖" title="AI-боты">
          Больший лимит запросов.
        </InfoCard>
        <InfoCard emoji="🔒" title="Закрытый контент">
          Доступ к эксклюзивным постам в каналах.
        </InfoCard>
        <InfoCard emoji="🎁" title="Подарки и стикеры">
          Покупка цифровых подарков.
        </InfoCard>
      </InfoGrid>

      <h2 id="yetishmasa">Что делать, если Stars не хватает?</h2>
      <KeyFacts label="Два варианта">
        <li><b>Через официальный Telegram</b> — App Store или Google Play, в ряде регионов ограничено.</li>
        <li><b>Через надёжный сервис</b> — @StarsPaymee_bot и starstg.uz, с местной оплатой.</li>
      </KeyFacts>

      <h2 id="nega">Почему многие выбирают альтернативу?</h2>
      <p>Официальный способ иногда сталкивается со следующими проблемами:</p>
      <KeyFacts label="Препятствия официального пути">
        <li>Требование международной банковской карты.</li>
        <li>Дополнительные комиссии при конвертации валюты.</li>
        <li>Платёжные ограничения в отдельных регионах.</li>
      </KeyFacts>

      <InlineCta text="Звёзды закончились? Пополните за минуту." />

      <h2 id="jarayon">Процесс пополнения</h2>
      <Steps>
        <Step title="1. Откройте бота или сайт">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Укажите нужное число Stars.</Step>
        <Step title="3. Введите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="5. Продолжайте">После зачисления пользуйтесь услугой бота.</Step>
      </Steps>
      <p>Никакой сложной регистрации или дополнительных документов не требуется.</p>

      <p>
        Смотрите: <Link href="/blog/telegram-botlar-uchun-stars">как Stars используются в ботах</Link>,{" "}
        <Link href="/blog/stars-olish">покупка Stars</Link> и{" "}
        <Link href="/blog/telegram-stars-narxi">цены</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "новости Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      If a bot service suddenly needs Stars, there are two options: the official route (App Store/Google Play) or
      topping up in so‘m through <b>@StarsPaymee_bot</b>. The second is faster and needs no international card —
      Stars arrive in about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="talab">Why are Stars required?</h2>
      <p>
        Telegram officially introduced a Stars-based payment system for developers. Many bots now accept payment in
        Stars rather than money.
      </p>
      <InfoGrid>
        <InfoCard emoji="🎮" title="Game bots">
          Buying extra options and levels.
        </InfoCard>
        <InfoCard emoji="🤖" title="AI bots">
          A higher request limit.
        </InfoCard>
        <InfoCard emoji="🔒" title="Gated content">
          Access to exclusive posts in channels.
        </InfoCard>
        <InfoCard emoji="🎁" title="Gifts and stickers">
          Buying digital gifts.
        </InfoCard>
      </InfoGrid>

      <h2 id="yetishmasa">What to do when Stars run out</h2>
      <KeyFacts label="Two options">
        <li><b>Through official Telegram</b> — App Store or Google Play, restricted in some regions.</li>
        <li><b>Through a trusted service</b> — @StarsPaymee_bot and starstg.uz, with local payment.</li>
      </KeyFacts>

      <h2 id="nega">Why many people choose the alternative</h2>
      <p>The official method sometimes runs into these problems:</p>
      <KeyFacts label="Obstacles in the official route">
        <li>An international bank card is required.</li>
        <li>Extra fees during currency conversion.</li>
        <li>Payment restrictions in certain regions.</li>
      </KeyFacts>

      <InlineCta text="Out of Stars? Top up in a minute." />

      <h2 id="jarayon">The top-up process</h2>
      <Steps>
        <Step title="1. Open the bot or site">@StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">Set the number of Stars you need.</Step>
        <Step title="3. Enter a username">The account the Stars should land on.</Step>
        <Step title="4. Pay">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="5. Carry on">Once credited, use the bot service.</Step>
      </Steps>
      <p>No complicated registration and no extra documents are required.</p>

      <p>
        See: <Link href="/blog/telegram-botlar-uchun-stars">how Stars are used in bots</Link>,{" "}
        <Link href="/blog/stars-olish">getting Stars</Link> and{" "}
        <Link href="/blog/telegram-stars-narxi">prices</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram news" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Nega botlar Stars so‘rayapti?", answer: "Telegram dasturchilar uchun rasmiy Stars to‘lov tizimini joriy qildi; botlar shu orqali xizmat sotadi." },
  { question: "Stars tugasa nima qilaman?", answer: "Rasmiy ilova orqali yoki @StarsPaymee_bot orqali to‘ldiring." },
  { question: "Bot orqali to‘ldirish tezmi?", answer: "Ha, odatda ~10 soniya." },
  { question: "Ro‘yxatdan o‘tish kerakmi?", answer: "Yo‘q, hujjat yoki alohida ro‘yxatdan o‘tish talab qilinmaydi." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q, mahalliy to‘lov usullari yetarli." },
  { question: "Qancha Stars kerakligini qanday bilaman?", answer: "Bot xizmat narxini ko‘rsatadi — shunga qarab miqdorni tanlang." },
  { question: "Ortiqcha olsam qoladimi?", answer: "Ha, foydalanilmagan Stars hisobingizda saqlanadi." },
  { question: "Qaysi botlarga ishonish kerak?", answer: "Rasmiy va tasdiqlangan botlarni afzal ko‘ring, sharhlarni o‘qing." },
];

const ruFaq = [
  { question: "Почему боты просят Stars?", answer: "Telegram ввёл официальную платёжную систему Stars для разработчиков; боты продают услуги через неё." },
  { question: "Что делать, если Stars закончились?", answer: "Пополните через официальное приложение или через @StarsPaymee_bot." },
  { question: "Быстро ли пополнение через бота?", answer: "Да, обычно ~10 секунд." },
  { question: "Нужна ли регистрация?", answer: "Нет, документы и отдельная регистрация не требуются." },
  { question: "Нужна ли международная карта?", answer: "Нет, достаточно местных способов оплаты." },
  { question: "Как понять, сколько Stars нужно?", answer: "Бот показывает стоимость услуги — выбирайте количество по ней." },
  { question: "Останутся ли лишние звёзды?", answer: "Да, неиспользованные Stars хранятся на вашем аккаунте." },
  { question: "Каким ботам доверять?", answer: "Предпочитайте официальные и проверенные боты, читайте отзывы." },
];

const enFaq = [
  { question: "Why do bots ask for Stars?", answer: "Telegram introduced an official Stars payment system for developers; bots sell services through it." },
  { question: "What if my Stars run out?", answer: "Top up through the official app or through @StarsPaymee_bot." },
  { question: "Is topping up via a bot fast?", answer: "Yes, usually about 10 seconds." },
  { question: "Is registration required?", answer: "No — no documents and no separate sign-up." },
  { question: "Do I need an international card?", answer: "No, local payment methods are enough." },
  { question: "How do I know how many Stars I need?", answer: "The bot shows the service price — choose the amount from that." },
  { question: "Do leftover Stars stay?", answer: "Yes, unused Stars remain on your account." },
  { question: "Which bots should I trust?", answer: "Prefer official and verified bots, and read reviews first." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram stars kerak",
    "stars kerak bolsa",
    "stars yetishmasa",
    "botda stars talab qilinadi",
    "telegram stars toldirish",
    "stars kerak 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Stars kerak bo‘lsa nima qilish kerak",
      excerpt:
        "Botlar nega Stars so‘raydi, yulduz yetishmasa nima qilish kerak va to‘ldirishning eng tez yo‘li qaysi — amaliy qo‘llanma.",
      metaTitle: "Telegram Stars kerak bo‘lsa nima qilish kerak",
      metaDescription:
        "Telegram Stars kerak bo‘lganda nima qilish kerak? Botlar nega Stars talab qiladi, yetishmasa qanday to‘ldirish va mahalliy to‘lov usullari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars’ni to‘ldiring",
      ctaBody: "@StarsPaymee_bot — bir necha daqiqada, so‘mda, xalqaro kartasiz.",
      faq: uzFaq,
    },
    ru: {
      title: "Что делать, если нужны Telegram Stars",
      excerpt:
        "Почему боты просят Stars, что делать при нехватке звёзд и какой способ пополнения самый быстрый — практическое руководство.",
      metaTitle: "Что делать, если нужны Telegram Stars",
      metaDescription:
        "Что делать, когда нужны Telegram Stars? Почему боты требуют звёзды, как пополнить при нехватке и какие местные способы оплаты доступны.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните Stars",
      ctaBody: "@StarsPaymee_bot — за несколько минут, в сумах, без международной карты.",
      faq: ruFaq,
    },
    en: {
      title: "What to do when you need Telegram Stars",
      excerpt:
        "Why bots ask for Stars, what to do when you run short, and which top-up route is fastest — a practical guide.",
      metaTitle: "What to do when you need Telegram Stars",
      metaDescription:
        "What to do when you need Telegram Stars: why bots require them, how to top up when you run short, and the local payment options.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your Stars",
      ctaBody: "@StarsPaymee_bot — within minutes, in so‘m, no international card.",
      faq: enFaq,
    },
  },
};
