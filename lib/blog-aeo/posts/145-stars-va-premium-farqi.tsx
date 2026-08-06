import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, CompareTable, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-va-premium-farqi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      <b>Stars</b> — vaziyatga qarab sarflanadigan valyuta (bot xizmati, sovg‘a, homiylik). <b>Premium</b> — doimiy
      obuna bo‘lib, butun ilova bo‘ylab imkoniyat beradi (4 GB fayl, reklamasizlik, kengaytirilgan limitlar).
      Ikkalasi bir-birini <b>to‘ldiradi</b>, raqobatlashmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="stars">Telegram Stars nima uchun kerak?</h2>
      <p>
        Stars — bir martalik yoki vaqti-vaqti bilan sarflanadigan valyuta. U moslashuvchan: faqat kerak bo‘lgan
        vaqtda, kerakli miqdorda olinadi.
      </p>
      <KeyFacts label="Stars qachon foydali">
        <li>Botlardagi muayyan xizmat yoki funksiyani sotib olish.</li>
        <li>Do‘stlarga raqamli sovg‘a yuborish.</li>
        <li>Kanal mualliflariga bir martalik homiylik.</li>
      </KeyFacts>

      <h2 id="premium">Telegram Premium nima uchun kerak?</h2>
      <p>
        Premium — doimiy obuna, u butun ilova bo‘ylab qo‘shimcha imkoniyat beradi va uzoq muddatli foydalanish uchun
        mo‘ljallangan.
      </p>
      <KeyFacts label="Premium qachon foydali">
        <li>Katta fayl yuklash chegarasi (4 GB).</li>
        <li>Reklamasiz tajriba.</li>
        <li>Maxsus emoji, stiker va profil dizayni.</li>
        <li>Ko‘proq kanal va papkaga a’zo bo‘lish.</li>
      </KeyFacts>

      <h2 id="jadval">Qaysi birini tanlash kerak?</h2>
      <CompareTable
        headers={["Ehtiyoj", "Tavsiya"]}
        rows={[
          ["Bitta botdan bir martalik xizmat", "Stars"],
          ["Do‘stga sovg‘a yuborish", "Stars"],
          ["Muallifga homiylik qilish", "Stars"],
          ["Doimiy reklamasiz va tez tajriba", "Premium"],
          ["Katta fayllarni tez-tez yuborish", "Premium"],
          ["Profilni to‘liq shaxsiylashtirish", "Premium"],
        ]}
      />

      <h2 id="birga">Ikkalasini birga ishlatish mumkinmi?</h2>
      <p>
        Albatta. Ko‘plab foydalanuvchi Premium obunasiga ega bo‘lgan holda qo‘shimcha ravishda Stars ham sotib oladi —
        biri doimiy qulaylik, ikkinchisi esa vaziyatga qarab sarflanadigan resurs vazifasini bajaradi.
      </p>

      <InlineCta text="Ikkalasi ham bitta botda — tanlang." />

      <p>
        Batafsil: <Link href="/blog/stars-olish">Stars olish</Link>,{" "}
        <Link href="/blog/premium-olish">Premium olish</Link> va{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">Premium vs oddiy hisob</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      <b>Stars</b> — валюта, которую тратят по ситуации (услуга бота, подарок, донат). <b>Premium</b> — постоянная
      подписка, дающая возможности по всему приложению (файлы 4 ГБ, отсутствие рекламы, расширенные лимиты). Они{" "}
      <b>дополняют</b> друг друга, а не конкурируют.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="stars">Зачем нужны Telegram Stars?</h2>
      <p>
        Stars — валюта разового или периодического использования. Она гибкая: покупается только тогда, когда нужна, и
        в нужном количестве.
      </p>
      <KeyFacts label="Когда полезны Stars">
        <li>Покупка конкретной услуги или функции в боте.</li>
        <li>Отправка цифрового подарка другу.</li>
        <li>Разовая поддержка автора канала.</li>
      </KeyFacts>

      <h2 id="premium">Зачем нужен Telegram Premium?</h2>
      <p>
        Premium — постоянная подписка, которая даёт дополнительные возможности по всему приложению и рассчитана на
        длительное использование.
      </p>
      <KeyFacts label="Когда полезен Premium">
        <li>Больший лимит загрузки файлов (4 ГБ).</li>
        <li>Опыт без рекламы.</li>
        <li>Особые эмодзи, стикеры и дизайн профиля.</li>
        <li>Больше подписок на каналы и папок.</li>
      </KeyFacts>

      <h2 id="jadval">Что выбрать?</h2>
      <CompareTable
        headers={["Потребность", "Рекомендация"]}
        rows={[
          ["Разовая услуга в одном боте", "Stars"],
          ["Отправить подарок другу", "Stars"],
          ["Поддержать автора", "Stars"],
          ["Постоянный быстрый опыт без рекламы", "Premium"],
          ["Часто отправлять крупные файлы", "Premium"],
          ["Полностью персонализировать профиль", "Premium"],
        ]}
      />

      <h2 id="birga">Можно ли пользоваться обоими?</h2>
      <p>
        Конечно. Многие пользователи, имея подписку Premium, дополнительно покупают Stars — одно даёт постоянное
        удобство, другое служит ресурсом, который тратится по ситуации.
      </p>

      <InlineCta text="Оба варианта в одном боте — выбирайте." />

      <p>
        Подробнее: <Link href="/blog/stars-olish">покупка Stars</Link>,{" "}
        <Link href="/blog/premium-olish">покупка Premium</Link> и{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">Premium против обычного аккаунта</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      <b>Stars</b> are a currency spent as the situation demands (a bot service, a gift, a donation).{" "}
      <b>Premium</b> is an ongoing subscription that improves the whole app (4 GB files, no ads, higher limits). The
      two <b>complement</b> each other rather than compete.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="stars">What are Telegram Stars for?</h2>
      <p>
        Stars are a one-off or occasional currency. They are flexible: you buy them only when needed, in the amount
        you need.
      </p>
      <KeyFacts label="When Stars are useful">
        <li>Buying a specific service or feature in a bot.</li>
        <li>Sending a digital gift to a friend.</li>
        <li>A one-off donation to a channel author.</li>
      </KeyFacts>

      <h2 id="premium">What is Telegram Premium for?</h2>
      <p>
        Premium is a standing subscription that adds capability across the whole app and is designed for long-term
        use.
      </p>
      <KeyFacts label="When Premium is useful">
        <li>A larger upload limit (4 GB).</li>
        <li>An ad-free experience.</li>
        <li>Exclusive emoji, stickers and profile design.</li>
        <li>More channel subscriptions and folders.</li>
      </KeyFacts>

      <h2 id="jadval">Which should you choose?</h2>
      <CompareTable
        headers={["Need", "Recommendation"]}
        rows={[
          ["A one-off service in a single bot", "Stars"],
          ["Sending a friend a gift", "Stars"],
          ["Supporting an author", "Stars"],
          ["A permanently fast, ad-free experience", "Premium"],
          ["Sending large files often", "Premium"],
          ["Fully personalising your profile", "Premium"],
        ]}
      />

      <h2 id="birga">Can you use both?</h2>
      <p>
        Certainly. Many people hold a Premium subscription and buy Stars on top — one gives constant convenience, the
        other is a resource spent as situations come up.
      </p>

      <InlineCta text="Both live in the same bot — take your pick." />

      <p>
        More: <Link href="/blog/stars-olish">getting Stars</Link>,{" "}
        <Link href="/blog/premium-olish">getting Premium</Link> and{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">Premium versus a standard account</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Stars va Premium orasidagi farq nima?", answer: "Stars — vaziyatga qarab sarflanadigan valyuta; Premium — doimiy obuna." },
  { question: "Qaysi biri menga kerak?", answer: "Bir martalik xizmat va sovg‘a uchun Stars, doimiy qulaylik uchun Premium." },
  { question: "Ikkalasini birga olsam bo‘ladimi?", answer: "Ha, ular bir-birini to‘ldiradi." },
  { question: "Premium Stars beradimi?", answer: "Yo‘q, bular alohida mahsulotlar." },
  { question: "Stars bilan Premium sotib olsam bo‘ladimi?", answer: "Ba’zi holatlarda Premium bilan bog‘liq imkoniyatlar mavjud, lekin odatda alohida olinadi." },
  { question: "Qaysi biri arzonroq?", answer: "Stars kichik miqdorda arzon, Premium esa uzoq muddatli qiymat beradi." },
  { question: "Ikkalasi ham bir botdami?", answer: "Ha, @StarsPaymee_bot da ikkalasi ham mavjud." },
  { question: "To‘lov usullari bir xilmi?", answer: "Ha — UzCard, HUMO, Click, Payme, Paynet." },
];

const ruFaq = [
  { question: "В чём разница между Stars и Premium?", answer: "Stars — валюта, которую тратят по ситуации; Premium — постоянная подписка." },
  { question: "Что нужно именно мне?", answer: "Для разовой услуги и подарков — Stars, для постоянного удобства — Premium." },
  { question: "Можно ли пользоваться обоими?", answer: "Да, они дополняют друг друга." },
  { question: "Даёт ли Premium звёзды?", answer: "Нет, это отдельные продукты." },
  { question: "Можно ли купить Premium за Stars?", answer: "В отдельных случаях есть связанные возможности, но обычно они приобретаются отдельно." },
  { question: "Что дешевле?", answer: "Stars дешевле в малом объёме, Premium даёт долгосрочную ценность." },
  { question: "Оба в одном боте?", answer: "Да, в @StarsPaymee_bot доступны оба." },
  { question: "Способы оплаты одинаковые?", answer: "Да — UzCard, HUMO, Click, Payme, Paynet." },
];

const enFaq = [
  { question: "What is the difference between Stars and Premium?", answer: "Stars are spent as situations arise; Premium is an ongoing subscription." },
  { question: "Which one do I need?", answer: "Stars for one-off services and gifts; Premium for constant convenience." },
  { question: "Can I use both?", answer: "Yes, they complement each other." },
  { question: "Does Premium include Stars?", answer: "No, they are separate products." },
  { question: "Can I buy Premium with Stars?", answer: "Some related options exist, but they are usually bought separately." },
  { question: "Which is cheaper?", answer: "Stars are cheap in small amounts; Premium delivers long-term value." },
  { question: "Are both in the same bot?", answer: "Yes, @StarsPaymee_bot has both." },
  { question: "Are the payment methods the same?", answer: "Yes — UzCard, HUMO, Click, Payme, Paynet." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "comparison",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "stars va premium farqi",
    "stars yoki premium",
    "telegram stars premium taqqoslash",
    "qaysi biri kerak stars premium",
    "stars premium farq",
    "stars vs premium 2026",
  ],
  locales: {
    uz: {
      title: "Stars va Premium — qaysi biri kerak sizga?",
      excerpt:
        "Telegram Stars va Premium nimasi bilan farq qiladi, qaysi ehtiyojga qaysi biri mos va ikkalasini birga ishlatish mumkinmi.",
      metaTitle: "Stars va Premium — qaysi biri kerak sizga?",
      metaDescription:
        "Stars va Premium farqi: Stars vaziyatga qarab sarflanadi, Premium doimiy obuna. Qaysi ehtiyojga qaysi biri mos kelishi jadvali.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘zingizga mosini tanlang",
      ctaBody: "@StarsPaymee_bot — Stars ham, Premium ham bitta joyda.",
      faq: uzFaq,
    },
    ru: {
      title: "Stars или Premium — что нужно именно вам?",
      excerpt:
        "Чем отличаются Telegram Stars и Premium, что подходит под какую задачу и можно ли пользоваться обоими одновременно.",
      metaTitle: "Stars или Premium — что нужно именно вам?",
      metaDescription:
        "Разница Stars и Premium: Stars тратятся по ситуации, Premium — постоянная подписка. Таблица соответствия задач и решений.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите подходящее",
      ctaBody: "@StarsPaymee_bot — и Stars, и Premium в одном месте.",
      faq: ruFaq,
    },
    en: {
      title: "Stars or Premium — which one do you need?",
      excerpt:
        "How Telegram Stars and Premium differ, which suits which need, and whether you can use both at once.",
      metaTitle: "Stars or Premium — which one do you need?",
      metaDescription:
        "The difference between Stars and Premium: Stars are spent situationally, Premium is an ongoing subscription. A need-to-choice table.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pick what fits you",
      ctaBody: "@StarsPaymee_bot — both Stars and Premium in one place.",
      faq: enFaq,
    },
  },
};
