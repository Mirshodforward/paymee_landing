import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-kerak";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Premium sizga <b>kerakmi yoki yo‘qmi</b> — foydalanish uslubingizga bog‘liq. Agar katta fayllar bilan tez-tez
      ishlasangiz, ko‘p kanalga obuna bo‘lsangiz yoki reklamasiz tajribani xohlasangiz — obuna vaqt va asabni
      tejaydi. Kamdan-kam foydalansangiz, oddiy hisob yetarli.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="beradi">Telegram Premium nima beradi?</h2>
      <KeyFacts label="Asosiy imkoniyatlar">
        <li>Katta fayl yuklash chegarasi — <b>4 GB</b> gacha.</li>
        <li>Tezroq yuklab olish — fayl va media tezroq yuklanadi.</li>
        <li>Reklamasiz tajriba — ko‘plab ochiq kanallarda reklama ko‘rinmaydi.</li>
        <li>Maxsus emoji va stikerlar.</li>
        <li>Animatsion profil rasmi.</li>
        <li>Ko‘proq kanal va papkaga obuna bo‘lish.</li>
        <li>Xabar tahrirlash tarixini yashirish.</li>
      </KeyFacts>

      <h2 id="kimlar">Kimlar uchun ayniqsa foydali?</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Faol foydalanuvchilar">
          Kuniga ko‘p xabar va fayl almashadiganlar.
        </InfoCard>
        <InfoCard emoji="📢" title="Kanal boshqaruvchilari">
          Kattaroq auditoriya bilan ishlaydiganlar.
        </InfoCard>
        <InfoCard emoji="💼" title="Biznes egalari">
          Mijozlar bilan tezkor va sifatli aloqa kerak bo‘lganlar.
        </InfoCard>
        <InfoCard emoji="🎨" title="Kontent yaratuvchilar">
          Maxsus stiker va effektlardan foydalanmoqchi bo‘lganlar.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Narxi va olish usullari</h2>
      <p>
        Obuna turli muddatlarga mo‘ljallangan; muddat oshgani sari oyiga tushadigan xarajat kamayadi. Rasmiy yo‘l
        ba’zan xalqaro karta talab qilishi sababli qiyinchilik tug‘diradi.
      </p>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />

      <InlineCta text="O‘zingizga mos muddatni tanlang." />

      <h2 id="muqobil">Muqobil yechim</h2>
      <Steps>
        <Step title="1. Muddatni tanlang">1, 3, 6 yoki 12 oy.</Step>
        <Step title="2. Username kiriting">Obuna faollashadigan hisob.</Step>
        <Step title="3. To‘lovni bajaring">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="4. Faollashuvni kuting">Profilda Premium belgisi chiqadi.</Step>
      </Steps>

      <h2 id="uzaytirish">Obunani uzaytirish haqida</h2>
      <p>
        Muddat tugashiga yaqinlashganda obunani oldindan uzaytirib qo‘yish mumkin. Bu imkoniyatlardan uzluksiz
        foydalanish imkonini beradi va har safar qaytadan jarayonni boshlash zaruratini yo‘qqa chiqaradi.
      </p>

      <p>
        Qarang: <Link href="/blog/premium-olish">Premium olish</Link>,{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">to‘liq imkoniyatlar ro‘yxati</Link> va{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">oddiy hisob bilan farqi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
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
      Нужен ли вам Premium — зависит от стиля использования. Если часто работаете с крупными файлами, подписаны на
      много каналов или хотите тайтл без рекламы, подписка экономит время и нервы. При редком использовании обычного
      аккаунта достаточно.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="beradi">Что даёт Telegram Premium?</h2>
      <KeyFacts label="Основные возможности">
        <li>Больший лимит загрузки файлов — до <b>4 ГБ</b>.</li>
        <li>Более быстрая загрузка файлов и медиа.</li>
        <li>Без рекламы — во многих открытых каналах она не показывается.</li>
        <li>Особые эмодзи и стикеры.</li>
        <li>Анимированное фото профиля.</li>
        <li>Больше подписок на каналы и папок.</li>
        <li>Скрытие истории редактирования сообщений.</li>
      </KeyFacts>

      <h2 id="kimlar">Кому особенно полезно?</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Активным пользователям">
          Тем, кто ежедневно шлёт много сообщений и файлов.
        </InfoCard>
        <InfoCard emoji="📢" title="Администраторам каналов">
          Тем, кто работает с большой аудиторией.
        </InfoCard>
        <InfoCard emoji="💼" title="Владельцам бизнеса">
          Кому нужна быстрая и качественная связь с клиентами.
        </InfoCard>
        <InfoCard emoji="🎨" title="Авторам контента">
          Тем, кто хочет пользоваться особыми стикерами и эффектами.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Цена и способы оформления</h2>
      <p>
        Подписка рассчитана на разные сроки; чем больше срок, тем меньше стоимость в пересчёте на месяц. Официальный
        путь иногда осложняется требованием международной карты.
      </p>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />

      <InlineCta text="Выберите подходящий вам срок." />

      <h2 id="muqobil">Альтернативное решение</h2>
      <Steps>
        <Step title="1. Выберите срок">1, 3, 6 или 12 месяцев.</Step>
        <Step title="2. Укажите username">Аккаунт, где активируется подписка.</Step>
        <Step title="3. Оплатите">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="4. Дождитесь активации">В профиле появится значок Premium.</Step>
      </Steps>

      <h2 id="uzaytirish">О продлении подписки</h2>
      <p>
        Ближе к окончанию срока подписку можно продлить заранее. Это позволяет пользоваться возможностями без
        перерыва и не начинать процесс заново каждый раз.
      </p>

      <p>
        Смотрите: <Link href="/blog/premium-olish">покупка Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">полный список возможностей</Link> и{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">отличие от обычного аккаунта</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
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
      Whether you need Premium depends on how you use Telegram. If you often work with large files, follow many
      channels or want an ad-free experience, the subscription saves time and friction. If you use it rarely, a
      standard account is enough.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="beradi">What does Telegram Premium give you?</h2>
      <KeyFacts label="The main features">
        <li>A larger upload limit — up to <b>4 GB</b>.</li>
        <li>Faster downloads for files and media.</li>
        <li>An ad-free experience in many public channels.</li>
        <li>Exclusive emoji and stickers.</li>
        <li>An animated profile photo.</li>
        <li>More channel subscriptions and folders.</li>
        <li>Hiding the message edit history.</li>
      </KeyFacts>

      <h2 id="kimlar">Who benefits most?</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Active users">
          People exchanging many messages and files daily.
        </InfoCard>
        <InfoCard emoji="📢" title="Channel admins">
          Those working with a large audience.
        </InfoCard>
        <InfoCard emoji="💼" title="Business owners">
          Anyone needing fast, high-quality client contact.
        </InfoCard>
        <InfoCard emoji="🎨" title="Content creators">
          People who want the exclusive stickers and effects.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Price and how to get it</h2>
      <p>
        The subscription comes in several terms; the longer the term, the lower the effective monthly cost. The
        official route is sometimes complicated by the international card requirement.
      </p>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />

      <InlineCta text="Choose the term that suits you." />

      <h2 id="muqobil">The alternative</h2>
      <Steps>
        <Step title="1. Choose a term">1, 3, 6 or 12 months.</Step>
        <Step title="2. Enter a username">The account the subscription activates on.</Step>
        <Step title="3. Pay">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="4. Wait for activation">The Premium badge appears on the profile.</Step>
      </Steps>

      <h2 id="uzaytirish">About renewing</h2>
      <p>
        As the term nears its end you can extend the subscription in advance. That keeps the features running without
        a gap and saves starting the process from scratch each time.
      </p>

      <p>
        See: <Link href="/blog/premium-olish">getting Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">the full feature list</Link> and{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">the difference from a standard account</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram news" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Menga Premium kerakmi?", answer: "Agar katta fayl, ko‘p kanal yoki reklamasiz tajriba kerak bo‘lsa — ha. Kamdan-kam foydalansangiz, shart emas." },
  { question: "Premium nima beradi?", answer: "4 GB fayl, tezroq yuklash, reklamasiz kanal, maxsus emoji va boshqalar." },
  { question: "Qaysi muddat foydali?", answer: "Uzoqroq muddat oyiga tushadigan xarajatni kamaytiradi." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q, mahalliy to‘lov usullari yetarli." },
  { question: "Faollashtirish qancha vaqt oladi?", answer: "Odatda bir necha daqiqa." },
  { question: "Obuna avtomatik uzayadimi?", answer: "Yo‘q, muddat tugagach qayta buyurtma berasiz." },
  { question: "Oldindan uzaytirsam bo‘ladimi?", answer: "Ha, muddat tugashidan oldin uzaytirish mumkin." },
  { question: "Boshqa hisobga olsam bo‘ladimi?", answer: "Ha, buyurtmada o‘sha hisob username’ini ko‘rsating." },
];

const ruFaq = [
  { question: "Нужен ли мне Premium?", answer: "Если нужны крупные файлы, много каналов или отсутствие рекламы — да. При редком использовании необязательно." },
  { question: "Что даёт Premium?", answer: "Файлы 4 ГБ, быстрая загрузка, каналы без рекламы, особые эмодзи и другое." },
  { question: "Какой срок выгоднее?", answer: "Более длительный снижает стоимость в пересчёте на месяц." },
  { question: "Нужна ли международная карта?", answer: "Нет, достаточно местных способов оплаты." },
  { question: "Сколько занимает активация?", answer: "Обычно несколько минут." },
  { question: "Продлевается ли автоматически?", answer: "Нет, после окончания срока оформляется новый заказ." },
  { question: "Можно ли продлить заранее?", answer: "Да, продление возможно до окончания срока." },
  { question: "Можно ли оформить на другой аккаунт?", answer: "Да, укажите в заказе его username." },
];

const enFaq = [
  { question: "Do I need Premium?", answer: "If you need large files, many channels or no ads — yes. For light use it is optional." },
  { question: "What does Premium give?", answer: "4 GB files, faster downloads, ad-free channels, exclusive emoji and more." },
  { question: "Which term is best value?", answer: "A longer term lowers the effective monthly cost." },
  { question: "Do I need an international card?", answer: "No, local payment methods are enough." },
  { question: "How long does activation take?", answer: "Usually a few minutes." },
  { question: "Does it auto-renew?", answer: "No — after the term ends you place a new order." },
  { question: "Can I renew in advance?", answer: "Yes, you can extend before the term ends." },
  { question: "Can I buy it for another account?", answer: "Yes — give that account’s username when ordering." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram premium kerak",
    "premium kerakmi",
    "nega premium olish kerak",
    "telegram premium foydasi",
    "premium kimlarga kerak",
    "telegram premium 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Premium kerak — nega olish kerak",
      excerpt:
        "Premium haqiqatan ham kerakmi? U nima beradi, kimlar uchun foydali, tariflar qanday va obunani qanday uzaytirish mumkin.",
      metaTitle: "Telegram Premium kerak — nega olish kerak",
      metaDescription:
        "Telegram Premium kerakmi? Imkoniyatlar ro‘yxati, kimlarga foydali, tariflar va mahalliy to‘lov orqali olish tartibi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni faollashtiring",
      ctaBody: "@StarsPaymee_bot — muddatni tanlang, so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Нужен ли Telegram Premium — зачем его оформлять",
      excerpt:
        "Действительно ли нужен Premium? Что он даёт, кому полезен, какие тарифы и как продлить подписку.",
      metaTitle: "Нужен ли Telegram Premium — зачем его оформлять",
      metaDescription:
        "Нужен ли Telegram Premium? Список возможностей, кому полезно, тарифы и порядок оформления с местной оплатой.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Активируйте Premium",
      ctaBody: "@StarsPaymee_bot — выберите срок и оплатите в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Do you need Telegram Premium — and why",
      excerpt:
        "Is Premium really necessary? What it gives you, who benefits, the plans, and how to renew the subscription.",
      metaTitle: "Do you need Telegram Premium — and why",
      metaDescription:
        "Do you need Telegram Premium? The feature list, who benefits, the plans and how to order with local payment.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Activate Premium",
      ctaBody: "@StarsPaymee_bot — pick a term and pay in so‘m.",
      faq: enFaq,
    },
  },
};
