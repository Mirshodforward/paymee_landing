import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
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
      </KeyFacts>

      <h2 id="royxat">Imkoniyatlarning to‘liq ro‘yxati</h2>
      <p>Premium to‘rt yo‘nalishda qo‘shimcha beradi:</p>
      <ul>
        <li>
          <b>Fayl va media:</b> 4 GB gacha fayl yuklash, tezroq yuklab olish, video xabarlarni HD sifatida yuborish.
        </li>
        <li>
          <b>Muloqot:</b> ochiq kanallarda reklama ko‘rsatilmaydi, xabar tarjimasi, ovozli xabarni matnga
          aylantirish, tahrir tarixini yashirish.
        </li>
        <li>
          <b>Shaxsiylashtirish:</b> animatsion avatar, profil ramkasi, eksklyuziv emoji to‘plamlari va profildagi
          Premium belgisi.
        </li>
        <li>
          <b>Kanal va papkalar:</b> ko‘proq kanal/guruhga a’zo bo‘lish va ko‘proq chat papkasi yaratish.
        </li>
      </ul>

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

      <h2 id="narx">Narxi va qanday olinishi</h2>
      <p>
        2026-yil sentabridan boshlab <b>barcha muddat — 1, 3, 6 va 12 oy — username oqimida</b> beriladi: akkauntga
        kirish, parol yoki SMS-kod so‘ralmaydi. 1 oylik tarif 45 000 so‘m. «Login orqali» oqim faqat nostandart
        holatlar uchun alohida xizmat sifatida qoldi va uning narxi qo‘llab-quvvatlash orqali aniqlanadi.
      </p>
      <PremiumPlanBoard locale="uz" flow="username" />

      <InlineCta text="O‘zingizga mos muddatni tanlang." product={{ kind: "premium", months: 6 }} />

      <p>
        Xarid tartibi, to‘lov qadamlari va faollashuvni tekshirish —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">Premium olishning eng oson usuli</Link> maqolasida.
        Narxlar tahlili — <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium narxi</Link>, 1 oylik
        tarif esa <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">alohida maqolada</Link>.
      </p>

      <h2 id="uzaytirish">Obunani uzaytirish qanday ishlaydi</h2>
      <p>
        Avtoto‘lov ulanmaydi: muddat tugagach hisobingizdan hech narsa yechilmaydi va akkaunt bloklanmaydi — faqat
        Premium imtiyozlari to‘xtaydi. Uzaytirish har safar yangi buyurtma orqali amalga oshiriladi.
      </p>
      <p>
        Muddat tugashini kutish shart emas: barcha muddat — 1, 3, 6 va 12 oy — username orqali beriladi, ya’ni
        buyurtma tartibi bir xil. Lekin amaldagi Premium <b>ustiga</b> buyurtma berilganda muddat qo‘shiladimi —
        bu tanlangan usulga bog‘liq va hamma holatda bir xil emas. Shuning uchun buyurtmadan oldin holatni
        tekshiring:{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">«Premium bor odamga yana Premium»</Link> maqolasida
        har bir usul uchun nima bo‘lishi yozilgan; aniq sana muhim bo‘lsa, qo‘llab-quvvatlash bilan tasdiqlang.
      </p>

      <p>
        Qarang: <Link href="/blog/telegram-premium-eng-oson-usul">Premium olish</Link>,{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">Premium arziydimi</Link> va{" "}
        oddiy hisob bilan farqi.
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
      много каналов или хотите ленту без рекламы, подписка экономит время и нервы. При редком использовании обычного
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

      <h2 id="narx">Цена и как оформляется</h2>
      <p>
        С сентября 2026 года <b>все сроки — 1, 3, 6 и 12 месяцев — оформляются по username</b>: вход в аккаунт,
        пароль или SMS-код не запрашиваются. Месячный тариф — 45 000 сум. Сценарий «через логин» остался отдельной
        услугой для нестандартных случаев, его условия уточняются в поддержке.
      </p>
      <PremiumPlanBoard locale="ru" flow="username" />

      <InlineCta text="Выберите подходящий вам срок." product={{ kind: "premium", months: 6 }} />

      <p>
        Порядок покупки, шаги оплаты и проверка активации — в статье{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ купить Premium</Link>. Разбор цен —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">цена Premium</Link>, а месячный тариф —{" "}
        <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">в отдельной статье</Link>.
      </p>

      <h2 id="uzaytirish">Как работает продление</h2>
      <p>
        Автоплатёж не подключается: по окончании срока с вас ничего не спишется и аккаунт не заблокируется —
        отключатся только привилегии Premium. Продление каждый раз оформляется новым заказом.
      </p>
      <p>
        Дожидаться конца срока не обязательно: все сроки — 1, 3, 6 и 12 месяцев — оформляются по username, порядок
        заказа одинаковый. Но добавится ли срок к уже <b>действующей</b> подписке, зависит от выбранного способа и
        одинаково не работает везде. Поэтому перед заказом проверьте ситуацию:{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">«Premium тому, у кого он уже есть»</Link> разбирает
        каждый способ; если важна точная дата — подтвердите её в поддержке.
      </p>

      <p>
        Смотрите: <Link href="/blog/telegram-premium-eng-oson-usul">покупка Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">стоит ли Premium</Link> и{" "}
        отличие от обычного аккаунта.
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

      <h2 id="narx">Price and how it is arranged</h2>
      <p>
        Since September 2026 <b>every term — 1, 3, 6 and 12 months — is issued through the username flow</b>: no
        account sign-in, password or SMS code. The monthly plan is 45,000 UZS. The “sign-in” flow remains a separate
        service for non-standard cases, and its terms are agreed through support.
      </p>
      <PremiumPlanBoard locale="en" flow="username" />

      <InlineCta text="Choose the term that suits you." product={{ kind: "premium", months: 6 }} />

      <p>
        The buying order, the payment steps and how to verify activation live in{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">the easiest way to buy Premium</Link>. For the price
        breakdown see <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium pricing</Link>, and the
        monthly plan has <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">its own article</Link>.
      </p>

      <h2 id="uzaytirish">How renewing works</h2>
      <p>
        No auto-renewal is attached: when the term ends nothing is charged and the account is not blocked — only
        the Premium perks switch off. Renewing is always a new order.
      </p>
      <p>
        There is no need to wait for the term to run out: every term — 1, 3, 6 and 12 months — runs through the
        username flow, so ordering works the same way. Whether a new term is <b>added on top</b> of an active
        subscription, however, depends on the method and does not work identically everywhere. Check the situation
        before ordering:{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">“Premium for someone who already has it”</Link> goes
        through each route; if an exact date matters, confirm it with support.
      </p>

      <p>
        See: <Link href="/blog/telegram-premium-eng-oson-usul">getting Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">whether Premium is worth it</Link> and{" "}
        the difference from a standard account.
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
  {
    question: "Oldindan uzaytirsam bo‘ladimi?",
    answer:
      "Muddat tugashini kutish shart emas — buyurtma istalgan vaqtda beriladi. Amaldagi Premium ustiga muddat qo‘shiladimi, bu tanlangan usulga bog‘liq; «Premium bor odamga yana Premium» maqolasida har bir holat yozilgan, aniq sana kerak bo‘lsa supportda tasdiqlang.",
  },
  { question: "Boshqa hisobga olsam bo‘ladimi?", answer: "Ha, buyurtmada o‘sha hisob username’ini ko‘rsating." },
];

const ruFaq = [
  { question: "Нужен ли мне Premium?", answer: "Если нужны крупные файлы, много каналов или отсутствие рекламы — да. При редком использовании необязательно." },
  { question: "Что даёт Premium?", answer: "Файлы 4 ГБ, быстрая загрузка, каналы без рекламы, особые эмодзи и другое." },
  { question: "Какой срок выгоднее?", answer: "Более длительный снижает стоимость в пересчёте на месяц." },
  { question: "Нужна ли международная карта?", answer: "Нет, достаточно местных способов оплаты." },
  { question: "Сколько занимает активация?", answer: "Обычно несколько минут." },
  { question: "Продлевается ли автоматически?", answer: "Нет, после окончания срока оформляется новый заказ." },
  {
    question: "Можно ли продлить заранее?",
    answer:
      "Ждать окончания срока не нужно — заказ оформляется в любой момент. Добавится ли срок к действующей подписке, зависит от способа; разбор всех случаев — в статье «Premium тому, у кого он уже есть», а точную дату подтвердят в поддержке.",
  },
  { question: "Можно ли оформить на другой аккаунт?", answer: "Да, укажите в заказе его username." },
];

const enFaq = [
  { question: "Do I need Premium?", answer: "If you need large files, many channels or no ads — yes. For light use it is optional." },
  { question: "What does Premium give?", answer: "4 GB files, faster downloads, ad-free channels, exclusive emoji and more." },
  { question: "Which term is best value?", answer: "A longer term lowers the effective monthly cost." },
  { question: "Do I need an international card?", answer: "No, local payment methods are enough." },
  { question: "How long does activation take?", answer: "Usually a few minutes." },
  {
    question: "Is the 1-month plan the same process as the others?",
    answer:
      "Yes. Since September 2026 all four terms — 1, 3, 6 and 12 months — run through the username flow with no sign-in, password or SMS code. The sign-in service remains only for non-standard cases.",
  },
  { question: "Does it auto-renew?", answer: "No — after the term ends you place a new order." },
  {
    question: "Can I renew in advance?",
    answer:
      "You do not have to wait for the term to end — an order can be placed at any time. Whether the term is added on top of an active subscription depends on the method; “Premium for someone who already has it” covers each case, and support can confirm the exact date.",
  },
  { question: "Can I buy it for another account?", answer: "Yes — give that account’s username when ordering." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-09-08",
  keywords: [
    "telegram premium kerak",
    "telegram premium imkoniyatlari",
    "premium nima beradi royxat",
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
