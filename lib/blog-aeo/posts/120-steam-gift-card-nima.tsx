import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-gift-card-nima";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam Gift Card — muayyan nominalga ega kod yoki karta bo‘lib, faollashtirilgandan so‘ng Steam Wallet balansini
      to‘ldiradi. U sovg‘a qilish uchun qulay, lekin hudud (region) cheklovi bo‘lishi va kerakli nominalni topish
      qiyin bo‘lishi mumkin. O‘zbekistonda so‘mda to‘g‘ridan-to‘g‘ri to‘ldirish ko‘pincha qulayroq.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Steam Gift Card nima?</h2>
      <p>
        Steam Gift Card (sovg‘a kartasi) — oldindan belgilangan nominalga ega kod. Uni hisobingizga kiritganingizda
        summa <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansiga qo‘shiladi. Ya’ni Gift Card —
        balansning o‘zi emas, balki uni to‘ldiradigan vosita.
      </p>

      <h2 id="farq">Gift Card va Wallet farqi</h2>
      <CompareTable
        headers={["Xususiyat", "Steam Gift Card", "Steam Wallet"]}
        rows={[
          ["Nima", "kod / karta", "hisobdagi balans"],
          ["Vazifasi", "balansni to‘ldirish", "xaridga sarflash"],
          ["Sovg‘a qilish", <Yes>ha</Yes>, <No>odatda yo‘q</No>],
          ["Nominal", "qat’iy belgilangan", "istalgan qoldiq"],
          ["Hudud cheklovi", <Yes>bo‘lishi mumkin</Yes>, <No>hisobga bog‘liq</No>],
        ]}
      />

      <h2 id="qanday">Gift Card qanday faollashtiriladi?</h2>
      <Steps>
        <Step title="1. Kodni oling">Rasmiy yoki ishonchli manbadan kod sotib oling.</Step>
        <Step title="2. Steam’ga kiring">Hisobingizga rasmiy Steam ilovasi yoki saytidan kiring.</Step>
        <Step title="3. Kodni kiriting">Wallet kodini faollashtirish bo‘limiga kodni kiriting.</Step>
        <Step title="4. Balansni tekshiring">Summa Steam Wallet balansiga qo‘shilganini ko‘ring.</Step>
      </Steps>

      <InlineCta text="Kod izlamasdan to‘g‘ridan-to‘g‘ri to‘ldirmoqchimisiz? Botda so‘mda to‘lang." />

      <h2 id="kamchilik">Gift Card’ning kamchiliklari</h2>
      <KeyFacts label="E’tiborga oling">
        <li>Hudud (region) cheklovi — kod hisobingiz hududiga mos bo‘lishi kerak.</li>
        <li>Kerakli nominalni topish har doim ham oson emas.</li>
        <li>Ishonchsiz manbadagi kod ishlamasligi mumkin.</li>
        <li>Ortiqcha qoldiq balansda qolib ketadi.</li>
      </KeyFacts>

      <p>
        Shu sabab O‘zbekistonda ko‘p foydalanuvchilar{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">so‘mda to‘g‘ridan-to‘g‘ri to‘ldirish</Link>ni
        tanlaydi — kerakli summani o‘zingiz belgilaysiz. Boshqa usullar bilan solishtirish:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">to‘ldirish usullari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/digitalgiftcards/", label: "store.steampowered.com/digitalgiftcards", note: "Steam raqamli sovg‘a kartalari" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam yordam markazi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Steam Gift Card — код или карта с определённым номиналом, которая после активации пополняет баланс Steam
      Wallet. Она удобна для подарка, но возможны региональные ограничения, а нужный номинал найти не всегда легко. В
      Узбекистане чаще удобнее пополнять напрямую в сумах.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Steam Gift Card?</h2>
      <p>
        Steam Gift Card (подарочная карта) — код с заранее заданным номиналом. При вводе на аккаунте сумма
        добавляется к балансу <Link href="/blog/steam-wallet-nima">Steam Wallet</Link>. То есть Gift Card — это не сам
        баланс, а средство его пополнения.
      </p>

      <h2 id="farq">Разница Gift Card и Wallet</h2>
      <CompareTable
        headers={["Свойство", "Steam Gift Card", "Steam Wallet"]}
        rows={[
          ["Что это", "код / карта", "баланс на аккаунте"],
          ["Назначение", "пополнить баланс", "тратить на покупки"],
          ["Можно подарить", <Yes>да</Yes>, <No>обычно нет</No>],
          ["Номинал", "фиксированный", "любой остаток"],
          ["Региональные ограничения", <Yes>возможны</Yes>, <No>зависит от аккаунта</No>],
        ]}
      />

      <h2 id="qanday">Как активировать Gift Card?</h2>
      <Steps>
        <Step title="1. Получите код">Купите код в официальном или надёжном источнике.</Step>
        <Step title="2. Войдите в Steam">Войдите в аккаунт через официальное приложение или сайт.</Step>
        <Step title="3. Введите код">Введите код в разделе активации кода Wallet.</Step>
        <Step title="4. Проверьте баланс">Убедитесь, что сумма добавлена к балансу Steam Wallet.</Step>
      </Steps>

      <InlineCta text="Не хотите искать код? Пополните напрямую в сумах через бота." />

      <h2 id="kamchilik">Недостатки Gift Card</h2>
      <KeyFacts label="Обратите внимание">
        <li>Региональные ограничения — код должен подходить региону аккаунта.</li>
        <li>Нужный номинал найти не всегда просто.</li>
        <li>Код из ненадёжного источника может не сработать.</li>
        <li>Излишек остаётся на балансе.</li>
      </KeyFacts>

      <p>
        Поэтому в Узбекистане многие выбирают{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">прямое пополнение в сумах</Link> — сумму вы
        задаёте сами. Сравнение способов:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">способы пополнения</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/digitalgiftcards/", label: "store.steampowered.com/digitalgiftcards", note: "цифровые подарочные карты Steam" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "справка Steam" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Steam Gift Card is a code or card with a fixed denomination that tops up your Steam Wallet balance once
      activated. It's convenient as a gift, but regional restrictions may apply and finding the right denomination
      isn't always easy. In Uzbekistan, topping up directly in so‘m is often more convenient.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is a Steam Gift Card?</h2>
      <p>
        A Steam Gift Card is a code with a pre‑set denomination. When entered on your account, the amount is added to
        your <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance. So a Gift Card isn't the balance
        itself — it's a means of topping it up.
      </p>

      <h2 id="farq">Gift Card vs Wallet</h2>
      <CompareTable
        headers={["Feature", "Steam Gift Card", "Steam Wallet"]}
        rows={[
          ["What it is", "code / card", "balance on the account"],
          ["Purpose", "top up the balance", "spend on purchases"],
          ["Can be gifted", <Yes>yes</Yes>, <No>usually no</No>],
          ["Denomination", "fixed", "any remaining amount"],
          ["Regional restrictions", <Yes>possible</Yes>, <No>depends on account</No>],
        ]}
      />

      <h2 id="qanday">How do you activate a Gift Card?</h2>
      <Steps>
        <Step title="1. Get the code">Buy a code from an official or trusted source.</Step>
        <Step title="2. Sign in to Steam">Sign in to your account via the official app or website.</Step>
        <Step title="3. Enter the code">Enter it in the Wallet code activation section.</Step>
        <Step title="4. Check the balance">Confirm the amount was added to your Steam Wallet balance.</Step>
      </Steps>

      <InlineCta text="Don't want to hunt for a code? Top up directly in so‘m via the bot." />

      <h2 id="kamchilik">Downsides of Gift Cards</h2>
      <KeyFacts label="Keep in mind">
        <li>Regional restrictions — the code must match your account's region.</li>
        <li>Finding the right denomination isn't always easy.</li>
        <li>A code from an untrusted source may not work.</li>
        <li>Any excess stays on the balance.</li>
      </KeyFacts>

      <p>
        That's why many users in Uzbekistan choose{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">topping up directly in so‘m</Link> — you set the
        amount yourself. Comparing methods:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">top‑up methods</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/digitalgiftcards/", label: "store.steampowered.com/digitalgiftcards", note: "Steam digital gift cards" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam help centre" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Steam Gift Card nima?", answer: "Nominalga ega kod yoki karta; faollashtirilgach Steam Wallet balansini to‘ldiradi." },
  { question: "Gift Card va Wallet farqi nima?", answer: "Wallet — hisobingizdagi balans; Gift Card — shu balansni to‘ldiradigan kod." },
  { question: "Gift Card qanday faollashtiriladi?", answer: "Steam’ga kirib, Wallet kodini faollashtirish bo‘limiga kodni kiritasiz." },
  { question: "Hudud cheklovi bormi?", answer: "Ha, kod hisobingiz hududiga mos bo‘lishi kerak — aks holda ishlamasligi mumkin." },
  { question: "Gift Card sovg‘a qilsa bo‘ladimi?", answer: "Ha, bu uning asosiy afzalligi — kodni boshqaga berish mumkin." },
  { question: "Nominalni o‘zim tanlaymanmi?", answer: "Yo‘q, nominal oldindan belgilangan. Erkin summa uchun to‘g‘ridan-to‘g‘ri to‘ldirish qulayroq." },
  { question: "Kod ishlamasa nima qilaman?", answer: "Hududni va kod manbasini tekshiring; rasmiy manbadan olingan bo‘lsa Steam supportga murojaat qiling." },
  { question: "Kodning muddati tugaydimi?", answer: "Bu kod turiga bog‘liq; sotib olishdan oldin shartlarni tekshiring." },
  { question: "Ishonchsiz manbadan olsam bo‘ladimi?", answer: "Tavsiya etilmaydi — kod ishlamasligi yoki bloklangan bo‘lishi mumkin." },
  { question: "Ortiqcha qoldiq nima bo‘ladi?", answer: "U Wallet balansida qolib, keyingi xaridlarda ishlatiladi." },
  { question: "O‘zbekistonda Gift Card topish osonmi?", answer: "Har doim ham emas; shu sababli so‘mda to‘g‘ridan-to‘g‘ri to‘ldirish ko‘proq qulaylik beradi." },
  { question: "Gift Card orqali o‘yin sovg‘a qilinadimi?", answer: "Gift Card balansni to‘ldiradi; o‘yinni alohida sovg‘a sifatida ham sotib olish mumkin." },
  { question: "Kodni kim bilan ulashsam bo‘ladi?", answer: "Faqat sovg‘a qilmoqchi bo‘lgan odamingiz bilan — kod pul qiymatiga ega." },
  { question: "Kod o‘g‘irlansa qaytariladimi?", answer: "Odatda yo‘q, shuning uchun kodni himoyalang." },
  { question: "Balans qaysi valyutada qo‘shiladi?", answer: "Hisobingiz valyutasida." },
  { question: "Gift Card’siz to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali so‘mda to‘g‘ridan-to‘g‘ri to‘ldirasiz." },
  { question: "Qaysi usul tezroq?", answer: "To‘g‘ridan-to‘g‘ri to‘ldirish odatda tezroq — kod izlash shart emas." },
  { question: "Gift Card narxi qanday?", answer: "Nominal va sotuvchiga bog‘liq; ba’zan ustama qo‘shiladi." },
  { question: "Bir nechta kodni bir hisobga kiritsam bo‘ladimi?", answer: "Odatda ha, ular balansga qo‘shilib boradi." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "Xizmat bo‘yicha @StarsPaymeeSupport; kod bo‘yicha Steam qo‘llab-quvvatlash." },
];

const ruFaq = [
  { question: "Что такое Steam Gift Card?", answer: "Код или карта с номиналом; после активации пополняет баланс Steam Wallet." },
  { question: "Чем отличается Gift Card от Wallet?", answer: "Wallet — баланс на аккаунте; Gift Card — код, который его пополняет." },
  { question: "Как активировать Gift Card?", answer: "Войдите в Steam и введите код в разделе активации кода Wallet." },
  { question: "Есть ли региональные ограничения?", answer: "Да, код должен соответствовать региону аккаунта — иначе может не сработать." },
  { question: "Можно ли подарить Gift Card?", answer: "Да, это её главное преимущество — код можно передать другому." },
  { question: "Могу ли я выбрать номинал сам?", answer: "Нет, номинал задан заранее. Для свободной суммы удобнее прямое пополнение." },
  { question: "Что делать, если код не работает?", answer: "Проверьте регион и источник кода; при покупке в официальном источнике обратитесь в поддержку Steam." },
  { question: "Истекает ли срок кода?", answer: "Зависит от типа кода; проверяйте условия перед покупкой." },
  { question: "Можно ли покупать код у ненадёжного продавца?", answer: "Не рекомендуется — код может не работать или быть заблокирован." },
  { question: "Что происходит с остатком?", answer: "Он остаётся на балансе Wallet и используется в следующих покупках." },
  { question: "Легко ли найти Gift Card в Узбекистане?", answer: "Не всегда; поэтому прямое пополнение в сумах удобнее." },
  { question: "Можно ли подарить игру через Gift Card?", answer: "Gift Card пополняет баланс; игру можно купить в подарок отдельно." },
  { question: "С кем можно делиться кодом?", answer: "Только с тем, кому дарите — код имеет денежную ценность." },
  { question: "Вернут ли код при краже?", answer: "Обычно нет, поэтому берегите код." },
  { question: "В какой валюте зачисляется баланс?", answer: "В валюте вашего аккаунта." },
  { question: "Можно ли пополнить без Gift Card?", answer: "Да. Через @StarsPaymee_bot пополняете напрямую в сумах." },
  { question: "Какой способ быстрее?", answer: "Прямое пополнение обычно быстрее — не нужно искать код." },
  { question: "Сколько стоит Gift Card?", answer: "Зависит от номинала и продавца; иногда добавляется наценка." },
  { question: "Можно ли ввести несколько кодов на один аккаунт?", answer: "Обычно да, они суммируются на балансе." },
  { question: "Куда писать за помощью?", answer: "По сервису — @StarsPaymeeSupport; по коду — поддержка Steam." },
];

const enFaq = [
  { question: "What is a Steam Gift Card?", answer: "A code or card with a denomination; once activated it tops up the Steam Wallet balance." },
  { question: "How does a Gift Card differ from the Wallet?", answer: "The Wallet is the balance on your account; a Gift Card is a code that tops it up." },
  { question: "How do I activate a Gift Card?", answer: "Sign in to Steam and enter the code in the Wallet code activation section." },
  { question: "Are there regional restrictions?", answer: "Yes, the code must match your account's region — otherwise it may not work." },
  { question: "Can a Gift Card be given as a present?", answer: "Yes, that's its main advantage — the code can be passed to someone else." },
  { question: "Can I choose the denomination myself?", answer: "No, the denomination is pre‑set. For a free‑choice amount, direct top‑up is more convenient." },
  { question: "What if the code doesn't work?", answer: "Check the region and the code's source; if bought officially, contact Steam support." },
  { question: "Does the code expire?", answer: "It depends on the code type; check the terms before buying." },
  { question: "Can I buy a code from an untrusted seller?", answer: "Not recommended — the code may not work or may be blocked." },
  { question: "What happens to the remainder?", answer: "It stays on the Wallet balance and is used for future purchases." },
  { question: "Is a Gift Card easy to find in Uzbekistan?", answer: "Not always; that's why topping up directly in so‘m is more convenient." },
  { question: "Can I gift a game via a Gift Card?", answer: "A Gift Card tops up the balance; a game can be bought as a gift separately." },
  { question: "Who can I share the code with?", answer: "Only the person you're gifting — the code has monetary value." },
  { question: "Is a stolen code refunded?", answer: "Usually not, so keep the code safe." },
  { question: "Which currency is the balance credited in?", answer: "Your account's currency." },
  { question: "Can I top up without a Gift Card?", answer: "Yes. Via @StarsPaymee_bot you top up directly in so‘m." },
  { question: "Which method is faster?", answer: "Direct top‑up is usually faster — no need to hunt for a code." },
  { question: "How much does a Gift Card cost?", answer: "It depends on the denomination and seller; sometimes a markup is added." },
  { question: "Can I enter several codes on one account?", answer: "Usually yes, they add up on the balance." },
  { question: "Who do I contact for help?", answer: "For the service — @StarsPaymeeSupport; for the code — Steam support." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "info",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  keywords: [
    "steam gift card nima",
    "steam gift card",
    "steam sovg‘a kartasi",
    "steam gift card faollashtirish",
    "steam gift card uzbekistan",
    "steam wallet kod",
  ],
  howToSteps: [
    { name: "Kodni oling", text: "Rasmiy yoki ishonchli manbadan Gift Card kodini sotib oling." },
    { name: "Steam’ga kiring", text: "Rasmiy ilova yoki sayt orqali hisobingizga kiring." },
    { name: "Kodni kiriting", text: "Wallet kodini faollashtirish bo‘limiga kodni kiriting." },
    { name: "Balansni tekshiring", text: "Summa Steam Wallet balansiga qo‘shilganini tasdiqlang." },
  ],
  locales: {
    uz: {
      title: "Steam Gift Card nima va qanday ishlaydi?",
      excerpt:
        "Steam Gift Card nima, Wallet’dan farqi, qanday faollashtiriladi va qanday kamchiliklari bor? Hudud cheklovi, nominal va O‘zbekiston uchun qulay muqobil — 20 savol-javob.",
      metaTitle: "Steam Gift Card nima va qanday ishlaydi? (2026)",
      metaDescription:
        "Steam Gift Card nima, Steam Wallet’dan farqi nimada va qanday faollashtiriladi? Hudud cheklovi, nominal va O‘zbekistonda qulay muqobil usullar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Kodsiz to‘g‘ridan-to‘g‘ri to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali kerakli summani so‘mda to‘lang — kod izlash shart emas.",
      faq: uzFaq,
    },
    ru: {
      title: "Что такое Steam Gift Card и как она работает?",
      excerpt:
        "Что такое Steam Gift Card, чем отличается от Wallet, как активировать и какие минусы? Региональные ограничения, номинал и удобная альтернатива — 20 вопросов‑ответов.",
      metaTitle: "Что такое Steam Gift Card и как она работает? (2026)",
      metaDescription:
        "Что такое Steam Gift Card, чем она отличается от Steam Wallet и как её активировать? Региональные ограничения, номинал и удобные альтернативы.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополняйте напрямую без кода",
      ctaBody: "Оплатите нужную сумму в сумах через @StarsPaymee_bot — искать код не нужно.",
      faq: ruFaq,
    },
    en: {
      title: "What is a Steam Gift Card and how does it work?",
      excerpt:
        "What a Steam Gift Card is, how it differs from the Wallet, how to activate it and what the downsides are. Regional restrictions, denominations and a convenient alternative — 20 Q&A.",
      metaTitle: "What is a Steam Gift Card and how does it work? (2026)",
      metaDescription:
        "What a Steam Gift Card is, how it differs from Steam Wallet and how to activate it. Regional restrictions, denominations and convenient alternatives.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up directly, no code needed",
      ctaBody: "Pay the exact amount in so‘m via @StarsPaymee_bot — no code hunting required.",
      faq: enFaq,
    },
  },
};
