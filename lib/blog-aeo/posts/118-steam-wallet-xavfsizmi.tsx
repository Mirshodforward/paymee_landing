import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, InfoGrid, InfoCard, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-wallet-xavfsizmi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Steam Wallet xavfsiz — u Valve’ning rasmiy tizimi. Xavf odatda platformada emas, foydalanuvchi tomonida
      bo‘ladi: parolni ulashish, Steam Guard’ni yoqmaslik va fishing (soxta) saytlarga ma’lumot kiritish. Rasmiy
      hisobdan foydalansangiz, parolni hech kimga bermasangiz va Guard yoqilgan bo‘lsa, balansingiz himoyalangan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Steam Wallet qanchalik xavfsiz?</h2>
      <p>
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> — Valve tomonidan boshqariladigan rasmiy elektron
        balans. Mablag‘ Steam hisobingizga bog‘langan va faqat Steam ichida ishlatiladi. Platformaning o‘zi
        xavfsiz hisoblanadi; muammolar deyarli har doim hisob himoyasi zaif bo‘lganda yuzaga keladi.
      </p>

      <KeyFacts label="Xavfsizlik uchun 3 ta asos">
        <li><b>Steam Guard</b> — ikki bosqichli himoyani yoqing.</li>
        <li><b>Parol</b> — hech kimga, hech qachon bermang.</li>
        <li><b>Fishing</b> — havolani ochishdan oldin domenni tekshiring.</li>
      </KeyFacts>

      <h2 id="xavflar">Asosiy xavflar qayerda?</h2>
      <InfoGrid>
        <InfoCard emoji="🎣" title="Fishing saytlar">
          Steam’ga o‘xshash soxta sahifalar login va parolni o‘g‘irlaydi. Domen manzilini diqqat bilan tekshiring.
        </InfoCard>
        <InfoCard emoji="🔑" title="Parolni ulashish">
          Hech bir rasmiy xizmat sizdan Steam parolini so‘ramaydi. So‘rasa — bu firibgarlik.
        </InfoCard>
        <InfoCard emoji="📱" title="Guard kodini berish">
          Steam Guard kodini boshqaga aytish — hisobni topshirish bilan teng.
        </InfoCard>
        <InfoCard emoji="🎁" title="«Bepul skin» va’dasi">
          Bozordan keskin past narx yoki bepul buyum va’dasi — klassik aldov sxemasi.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Xavfsiz to‘ldirishni xohlaysizmi? Botda parol so‘ralmaydi." />

      <h2 id="xizmat">To‘ldirish xizmatlari xavfsizmi?</h2>
      <p>
        Bu xizmatga bog‘liq. Ishonchli xizmat parolingizni so‘ramaydi va buyurtmani kuzatish imkonini beradi. Quyidagi
        farqni yodda tuting:
      </p>
      <CompareTable
        headers={["Belgi", "Ishonchli xizmat", "Shubhali xizmat"]}
        rows={[
          ["Parol so‘raydimi", <No>yo‘q</No>, <Yes>ha — xavf!</Yes>],
          ["Guard kodi so‘raydimi", <No>yo‘q</No>, <Yes>ha — xavf!</Yes>],
          ["Buyurtma ID / status", <Yes>bor</Yes>, <No>yo‘q</No>],
          ["Support kanali", <Yes>ochiq</Yes>, <No>yo‘q yoki javobsiz</No>],
          ["Narx", "bozorga yaqin", "keskin past"],
        ]}
      />
      <p>
        StarsPaymee’da to‘lov mahalliy tizimlar orqali so‘mda amalga oshiriladi va{" "}
        <b>Steam parolingiz so‘ralmaydi</b>. Batafsil:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">hisobni himoya qilish bo‘yicha 10 maslahat</Link>.
      </p>

      <h2 id="balans">Balans yo‘qolib qolishi mumkinmi?</h2>
      <p>
        Balansning o‘zi «yo‘qolmaydi» — u hisobingizda saqlanadi va muddati odatda tugamaydi. Lekin hisobingiz
        o‘g‘irlansa, mablag‘ sarflanib ketishi mumkin. Shuning uchun himoya choralari eng muhim omil hisoblanadi.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam yordam markazi" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "hisob xavfsizligi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да, Steam Wallet безопасен — это официальная система Valve. Риск обычно не в платформе, а на стороне
      пользователя: передача пароля, отключённый Steam Guard и ввод данных на фишинговых сайтах. Если вы используете
      официальный аккаунт, не сообщаете пароль и включили Guard, ваш баланс защищён.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Насколько безопасен Steam Wallet?</h2>
      <p>
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> — официальный электронный баланс под управлением
        Valve. Средства привязаны к вашему аккаунту Steam и используются только внутри Steam. Сама платформа
        считается безопасной; проблемы почти всегда возникают при слабой защите аккаунта.
      </p>

      <KeyFacts label="3 основы безопасности">
        <li><b>Steam Guard</b> — включите двухфакторную защиту.</li>
        <li><b>Пароль</b> — никогда и никому не сообщайте.</li>
        <li><b>Фишинг</b> — проверяйте домен перед переходом по ссылке.</li>
      </KeyFacts>

      <h2 id="xavflar">Где основные риски?</h2>
      <InfoGrid>
        <InfoCard emoji="🎣" title="Фишинговые сайты">
          Поддельные страницы под Steam крадут логин и пароль. Внимательно проверяйте адрес домена.
        </InfoCard>
        <InfoCard emoji="🔑" title="Передача пароля">
          Ни один официальный сервис не просит пароль Steam. Если просят — это мошенничество.
        </InfoCard>
        <InfoCard emoji="📱" title="Передача кода Guard">
          Сообщить код Steam Guard другому — всё равно что отдать аккаунт.
        </InfoCard>
        <InfoCard emoji="🎁" title="Обещание «бесплатных скинов»">
          Цена сильно ниже рынка или бесплатный предмет — классическая схема обмана.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Хотите безопасное пополнение? В боте пароль не запрашивается." />

      <h2 id="xizmat">Безопасны ли сервисы пополнения?</h2>
      <p>
        Зависит от сервиса. Надёжный сервис не просит пароль и позволяет отслеживать заказ. Запомните разницу:
      </p>
      <CompareTable
        headers={["Признак", "Надёжный сервис", "Подозрительный"]}
        rows={[
          ["Просит ли пароль", <No>нет</No>, <Yes>да — риск!</Yes>],
          ["Просит ли код Guard", <No>нет</No>, <Yes>да — риск!</Yes>],
          ["ID заказа / статус", <Yes>есть</Yes>, <No>нет</No>],
          ["Канал поддержки", <Yes>открыт</Yes>, <No>нет или молчит</No>],
          ["Цена", "близка к рынку", "резко ниже"],
        ]}
      />
      <p>
        В StarsPaymee оплата проходит в сумах через локальные системы, и{" "}
        <b>пароль Steam не запрашивается</b>. Подробнее:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">10 советов по защите аккаунта</Link>.
      </p>

      <h2 id="balans">Может ли баланс пропасть?</h2>
      <p>
        Сам баланс не «исчезает» — он хранится на аккаунте и обычно не имеет срока. Но если аккаунт угонят, средства
        могут потратить. Поэтому меры защиты — самый важный фактор.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "справка Steam" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "безопасность аккаунта" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes, Steam Wallet is safe — it's Valve's official system. The risk is usually not the platform but the user
      side: sharing a password, leaving Steam Guard off, and entering details on phishing sites. If you use an
      official account, never share your password and keep Guard on, your balance is protected.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">How safe is Steam Wallet?</h2>
      <p>
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> is an official electronic balance managed by Valve.
        Funds are tied to your Steam account and used only inside Steam. The platform itself is considered secure;
        problems almost always arise from weak account protection.
      </p>

      <KeyFacts label="3 security fundamentals">
        <li><b>Steam Guard</b> — enable two‑factor protection.</li>
        <li><b>Password</b> — never share it with anyone.</li>
        <li><b>Phishing</b> — check the domain before opening a link.</li>
      </KeyFacts>

      <h2 id="xavflar">Where are the main risks?</h2>
      <InfoGrid>
        <InfoCard emoji="🎣" title="Phishing sites">
          Fake Steam‑lookalike pages steal your login and password. Check the domain carefully.
        </InfoCard>
        <InfoCard emoji="🔑" title="Sharing your password">
          No official service asks for your Steam password. If they do — it's a scam.
        </InfoCard>
        <InfoCard emoji="📱" title="Sharing a Guard code">
          Telling someone your Steam Guard code is as good as handing over the account.
        </InfoCard>
        <InfoCard emoji="🎁" title="«Free skin» promises">
          A price far below market or a free item is a classic scam pattern.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Want a safe top‑up? The bot never asks for your password." />

      <h2 id="xizmat">Are top‑up services safe?</h2>
      <p>
        It depends on the service. A trustworthy one never asks for your password and lets you track the order.
        Remember the difference:
      </p>
      <CompareTable
        headers={["Signal", "Trustworthy service", "Suspicious"]}
        rows={[
          ["Asks for password", <No>no</No>, <Yes>yes — risk!</Yes>],
          ["Asks for Guard code", <No>no</No>, <Yes>yes — risk!</Yes>],
          ["Order ID / status", <Yes>yes</Yes>, <No>no</No>],
          ["Support channel", <Yes>open</Yes>, <No>none or silent</No>],
          ["Price", "close to market", "far below"],
        ]}
      />
      <p>
        At StarsPaymee payment goes through local systems in so‘m, and{" "}
        <b>your Steam password is never requested</b>. More:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">10 tips to protect your account</Link>.
      </p>

      <h2 id="balans">Can the balance disappear?</h2>
      <p>
        The balance itself doesn't «vanish» — it's stored on your account and usually doesn't expire. But if your
        account is stolen, the funds can be spent. That's why protection measures are the key factor.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam help centre" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "account security" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Steam Wallet xavfsizmi?", answer: "Ha, u Valve’ning rasmiy tizimi. Xavf odatda foydalanuvchi tomonida — parolni ulashish yoki fishing." },
  { question: "Steam Guard nima va nega kerak?", answer: "Ikki bosqichli himoya: kirishda qo‘shimcha tasdiq so‘raydi va hisobni o‘g‘irlashdan himoyalaydi." },
  { question: "Parolimni xizmatga bersam bo‘ladimi?", answer: "Yo‘q. Hech qachon. Parol so‘ragan har qanday xizmat shubhali." },
  { question: "Steam Guard kodini bersam-chi?", answer: "Yo‘q. Guard kodini berish hisobni topshirish bilan teng." },
  { question: "Fishing saytni qanday aniqlayman?", answer: "Domen manzilini diqqat bilan tekshiring — rasmiy Steam domenidan farq qilsa, kirmang." },
  { question: "Balans yo‘qolib qolishi mumkinmi?", answer: "Balansning o‘zi yo‘qolmaydi, lekin hisob o‘g‘irlansa mablag‘ sarflanishi mumkin." },
  { question: "Balans muddati tugaydimi?", answer: "Odatda yo‘q — hisobingizda saqlanadi." },
  { question: "Uchinchi tomon xizmatlari xavfsizmi?", answer: "Ishonchlisi parol so‘ramaydi va buyurtmani kuzatish imkonini beradi; shubhalisidan qoching." },
  { question: "StarsPaymee parol so‘raydimi?", answer: "Yo‘q. To‘lov mahalliy tizimlar orqali so‘mda amalga oshiriladi." },
  { question: "Juda arzon taklif xavflimi?", answer: "Ha, bozordan keskin past narx ko‘pincha aldov belgisidir." },
  { question: "Hisobim o‘g‘irlansa nima qilaman?", answer: "Darhol parolni o‘zgartiring, seanslarni yopib, Steam qo‘llab-quvvatlash xizmatiga murojaat qiling." },
  { question: "Ikki bosqichli himoyani qanday yoqaman?", answer: "Steam ilovasi sozlamalaridagi xavfsizlik bo‘limidan Steam Guard’ni faollashtiring." },
  { question: "Steam Market xaridlari xavfsizmi?", answer: "Ha, agar rasmiy Market’dan foydalansangiz va hisob himoyalangan bo‘lsa." },
  { question: "Ommaviy Wi‑Fi da kirsam bo‘ladimi?", answer: "Iloji bo‘lsa qoching; kirsangiz, keyin parolni almashtirish va seanslarni tekshirish foydali." },
  { question: "Havolalarga bosishdan oldin nima qilay?", answer: "Domenni tekshiring, tanish bo‘lmagan yoki qisqartirilgan havolalardan ehtiyot bo‘ling." },
  { question: "Do‘stimdan kelgan havola xavfsizmi?", answer: "Uning hisobi o‘g‘irlangan bo‘lishi mumkin — har doim tekshiring." },
  { question: "Balansni qaytarib olsa bo‘ladimi?", answer: "Odatda yo‘q; Steam Wallet mablag‘lari naqd pulga qaytarilmaydi." },
  { question: "Parolimni qanchalik tez-tez almashtiray?", answer: "Shubhali holat bo‘lsa darhol; umuman esa vaqti-vaqti bilan yangilash foydali." },
  { question: "Xavfsiz to‘ldirish uchun nima muhim?", answer: "Parolni bermaslik, Guard yoqilishi va ishonchli xizmatdan foydalanish." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "Xizmat bo‘yicha @StarsPaymeeSupport; hisob xavfsizligi bo‘yicha Steam qo‘llab-quvvatlash." },
];

const ruFaq = [
  { question: "Безопасен ли Steam Wallet?", answer: "Да, это официальная система Valve. Риск обычно на стороне пользователя — передача пароля или фишинг." },
  { question: "Что такое Steam Guard и зачем он нужен?", answer: "Двухфакторная защита: требует дополнительного подтверждения при входе и защищает от угона аккаунта." },
  { question: "Можно ли сообщить пароль сервису?", answer: "Нет. Никогда. Любой сервис, просящий пароль, подозрителен." },
  { question: "А код Steam Guard?", answer: "Нет. Передать код Guard — всё равно что отдать аккаунт." },
  { question: "Как распознать фишинговый сайт?", answer: "Внимательно проверяйте домен — если он отличается от официального Steam, не заходите." },
  { question: "Может ли пропасть баланс?", answer: "Сам баланс не пропадает, но при угоне аккаунта средства могут потратить." },
  { question: "Истекает ли срок баланса?", answer: "Обычно нет — он хранится на аккаунте." },
  { question: "Безопасны ли сторонние сервисы?", answer: "Надёжный не просит пароль и позволяет отслеживать заказ; подозрительных избегайте." },
  { question: "Просит ли StarsPaymee пароль?", answer: "Нет. Оплата проходит в сумах через локальные системы." },
  { question: "Опасны ли слишком дешёвые предложения?", answer: "Да, цена значительно ниже рынка часто признак обмана." },
  { question: "Что делать, если аккаунт угнали?", answer: "Сразу смените пароль, завершите сессии и обратитесь в поддержку Steam." },
  { question: "Как включить двухфакторную защиту?", answer: "В настройках безопасности приложения Steam активируйте Steam Guard." },
  { question: "Безопасны ли покупки на Steam Market?", answer: "Да, если пользоваться официальным Market и аккаунт защищён." },
  { question: "Можно ли входить через публичный Wi‑Fi?", answer: "По возможности избегайте; если вошли — смените пароль и проверьте сессии." },
  { question: "Что делать перед переходом по ссылке?", answer: "Проверьте домен, остерегайтесь незнакомых и сокращённых ссылок." },
  { question: "Безопасна ли ссылка от друга?", answer: "Его аккаунт мог быть угнан — всегда проверяйте." },
  { question: "Можно ли вернуть баланс?", answer: "Обычно нет; средства Steam Wallet не возвращаются наличными." },
  { question: "Как часто менять пароль?", answer: "Сразу при подозрении; в целом полезно периодически обновлять." },
  { question: "Что важно для безопасного пополнения?", answer: "Не сообщать пароль, включить Guard и пользоваться надёжным сервисом." },
  { question: "Куда писать за помощью?", answer: "По сервису — @StarsPaymeeSupport; по безопасности аккаунта — поддержка Steam." },
];

const enFaq = [
  { question: "Is Steam Wallet safe?", answer: "Yes, it's Valve's official system. The risk is usually on the user side — sharing a password or phishing." },
  { question: "What is Steam Guard and why is it needed?", answer: "Two‑factor protection: it requires extra confirmation at sign‑in and protects against account theft." },
  { question: "Can I give my password to a service?", answer: "No. Never. Any service asking for your password is suspicious." },
  { question: "What about the Steam Guard code?", answer: "No. Sharing a Guard code is as good as handing over the account." },
  { question: "How do I spot a phishing site?", answer: "Check the domain carefully — if it differs from the official Steam domain, don't enter it." },
  { question: "Can the balance disappear?", answer: "The balance itself doesn't disappear, but if the account is stolen the funds can be spent." },
  { question: "Does the balance expire?", answer: "Usually not — it's stored on your account." },
  { question: "Are third‑party services safe?", answer: "A trustworthy one never asks for a password and lets you track the order; avoid suspicious ones." },
  { question: "Does StarsPaymee ask for a password?", answer: "No. Payment goes through local systems in so‘m." },
  { question: "Are very cheap offers dangerous?", answer: "Yes, a price far below market is often a sign of a scam." },
  { question: "What if my account is stolen?", answer: "Change the password immediately, end sessions and contact Steam support." },
  { question: "How do I enable two‑factor protection?", answer: "In the Steam app's security settings, activate Steam Guard." },
  { question: "Are Steam Market purchases safe?", answer: "Yes, if you use the official Market and your account is protected." },
  { question: "Can I sign in over public Wi‑Fi?", answer: "Avoid it if possible; if you did, change your password and check sessions." },
  { question: "What should I do before clicking a link?", answer: "Check the domain and beware of unfamiliar or shortened links." },
  { question: "Is a link from a friend safe?", answer: "Their account may have been stolen — always verify." },
  { question: "Can the balance be refunded?", answer: "Usually not; Steam Wallet funds aren't returned as cash." },
  { question: "How often should I change my password?", answer: "Immediately if you suspect anything; otherwise updating periodically is good practice." },
  { question: "What matters for a safe top‑up?", answer: "Not sharing your password, having Guard on and using a trusted service." },
  { question: "Who do I contact for help?", answer: "For the service — @StarsPaymeeSupport; for account security — Steam support." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "trust",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  keywords: [
    "steam wallet xavfsizmi",
    "steam xavfsizlik",
    "steam guard",
    "steam fishing",
    "steam wallet safe",
    "steam hisobi himoya",
  ],
  locales: {
    uz: {
      title: "Steam Wallet xavfsizmi? Xavflar va himoya choralari",
      excerpt:
        "Steam Wallet xavfsizmi? Asosiy xavflar (fishing, parolni ulashish, Guard kodi), ishonchli va shubhali xizmat farqi hamda balansni himoya qilish — 20 savol-javob.",
      metaTitle: "Steam Wallet xavfsizmi? Xavflar va himoya (2026)",
      metaDescription:
        "Steam Wallet xavfsizmi? Fishing, parol va Steam Guard bo‘yicha asosiy xavflar, ishonchli xizmatni tanlash va balansni himoya qilish qo‘llanmasi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz to‘ldirish",
      ctaBody: "@StarsPaymee_bot orqali so‘mda to‘lang — Steam parolingiz so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Безопасен ли Steam Wallet? Риски и меры защиты",
      excerpt:
        "Безопасен ли Steam Wallet? Основные риски (фишинг, передача пароля, код Guard), разница надёжного и подозрительного сервиса и защита баланса — 20 вопросов‑ответов.",
      metaTitle: "Безопасен ли Steam Wallet? Риски и защита (2026)",
      metaDescription:
        "Безопасен ли Steam Wallet? Основные риски по фишингу, паролю и Steam Guard, выбор надёжного сервиса и руководство по защите баланса.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Безопасное пополнение",
      ctaBody: "Оплатите в сумах через @StarsPaymee_bot — пароль Steam не запрашивается.",
      faq: ruFaq,
    },
    en: {
      title: "Is Steam Wallet safe? Risks and protection measures",
      excerpt:
        "Is Steam Wallet safe? The main risks (phishing, sharing passwords, Guard codes), the difference between trustworthy and suspicious services, and protecting your balance — 20 Q&A.",
      metaTitle: "Is Steam Wallet safe? Risks and protection (2026)",
      metaDescription:
        "Is Steam Wallet safe? Key risks around phishing, passwords and Steam Guard, choosing a trustworthy service and a guide to protecting your balance.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Safe top‑up",
      ctaBody: "Pay in so‘m via @StarsPaymee_bot — your Steam password is never requested.",
      faq: enFaq,
    },
  },
};
