import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, Steps, Step, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-hisobini-himoya-qilish-10-maslahat";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam hisobini himoya qilishning eng muhim uch qadami: Steam Guard (ikki bosqichli himoya)ni yoqish, kuchli va
      takrorlanmas parol qo‘yish hamda parol/Guard kodini hech kimga bermaslik. Qolgan maslahatlar — fishingdan
      qochish, savdo himoyasi, seanslarni tekshirish va qurilma xavfsizligi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">Nega bu muhim?</h2>
      <p>
        Steam hisobingizda o‘yin kutubxonasi, <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansi va
        Market buyumlari saqlanadi. Hisob o‘g‘irlansa, bularning barchasi xavf ostida qoladi. Quyidagi 10 maslahat
        himoyani sezilarli kuchaytiradi.
      </p>

      <Steps>
        <Step title="1. Steam Guard’ni yoqing">
          Mobil autentifikator orqali ikki bosqichli himoyani faollashtiring — bu eng muhim qadam.
        </Step>
        <Step title="2. Kuchli parol qo‘ying">
          Uzun, harf-raqam-belgi aralashmasi. Boshqa saytdagi parolni takrorlamang.
        </Step>
        <Step title="3. Parolni hech kimga bermang">
          Hech bir rasmiy xizmat, hatto Steam support ham parolingizni so‘ramaydi.
        </Step>
        <Step title="4. Guard kodini ulashmang">
          Kodni aytish — hisobni topshirish bilan teng. Hech qachon skrinshot yubormang.
        </Step>
        <Step title="5. Fishingdan ehtiyot bo‘ling">
          Havolani bosishdan oldin domenni tekshiring. Soxta «Steam» sahifalari juda o‘xshash bo‘ladi.
        </Step>
        <Step title="6. Emailingizni himoyalang">
          Hisobga bog‘langan pochtaga ham ikki bosqichli himoya yoqing — u tiklash kaliti hisoblanadi.
        </Step>
        <Step title="7. Faol seanslarni tekshiring">
          Sozlamalardan qurilmalar ro‘yxatini ko‘ring; notanish seanslarni yoping.
        </Step>
        <Step title="8. Qurilmangizni toza saqlang">
          Antivirus, tizim yangilanishlari va shubhali dasturlarni o‘rnatmaslik.
        </Step>
        <Step title="9. Savdo (trade) takliflarini tekshiring">
          Noma’lum takliflarni rad eting; «bepul skin» va’dalari — klassik aldov.
        </Step>
        <Step title="10. Ishonchli xizmatlardan foydalaning">
          Balans to‘ldirishda parol so‘ramaydigan, buyurtma ID beradigan xizmatni tanlang.
        </Step>
      </Steps>

      <InlineCta text="Xavfsiz to‘ldirish kerakmi? Botda parol so‘ralmaydi." />

      <h2 id="belgilar">Firibgarlikning aniq belgilari</h2>
      <KeyFacts label="Darhol shubhalaning">
        <li>Sizdan Steam parolini so‘rashsa.</li>
        <li>Steam Guard kodini so‘rashsa.</li>
        <li>Bozordan keskin past narx taklif qilishsa.</li>
        <li>«Tezda qaror qiling» deb shoshirishsa.</li>
        <li>Rasmiy bo‘lmagan domen yoki qisqartirilgan havola bo‘lsa.</li>
      </KeyFacts>

      <p>
        Batafsil:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">Steam Wallet xavfsizmi?</Link> va{" "}
        <Link href="/blog/steam-login-nima">Steam Login nima?</Link>
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
      Три самых важных шага защиты аккаунта Steam: включить Steam Guard (двухфакторную защиту), поставить сильный и
      уникальный пароль и никому не сообщать пароль или код Guard. Остальные советы — избегать фишинга, защита
      обменов, проверка сессий и безопасность устройства.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Почему это важно?</h2>
      <p>
        В аккаунте Steam хранятся библиотека игр, баланс{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> и предметы Market. Если аккаунт угонят, всё это под
        угрозой. Следующие 10 советов заметно усиливают защиту.
      </p>

      <Steps>
        <Step title="1. Включите Steam Guard">
          Активируйте двухфакторную защиту через мобильный аутентификатор — это важнейший шаг.
        </Step>
        <Step title="2. Поставьте сильный пароль">
          Длинный, из букв, цифр и символов. Не повторяйте пароль с других сайтов.
        </Step>
        <Step title="3. Никому не сообщайте пароль">
          Ни один официальный сервис, даже поддержка Steam, не просит ваш пароль.
        </Step>
        <Step title="4. Не делитесь кодом Guard">
          Сообщить код — всё равно что отдать аккаунт. Никогда не отправляйте скриншот.
        </Step>
        <Step title="5. Остерегайтесь фишинга">
          Проверяйте домен перед переходом. Поддельные страницы «Steam» бывают очень похожими.
        </Step>
        <Step title="6. Защитите свою почту">
          Включите двухфакторную защиту и на привязанной почте — она ключ к восстановлению.
        </Step>
        <Step title="7. Проверяйте активные сессии">
          Посмотрите список устройств в настройках; завершите незнакомые сессии.
        </Step>
        <Step title="8. Держите устройство чистым">
          Антивирус, обновления системы и отказ от подозрительных программ.
        </Step>
        <Step title="9. Проверяйте обменные предложения">
          Отклоняйте незнакомые предложения; обещания «бесплатных скинов» — классический обман.
        </Step>
        <Step title="10. Пользуйтесь надёжными сервисами">
          Для пополнения выбирайте сервис, который не просит пароль и даёт ID заказа.
        </Step>
      </Steps>

      <InlineCta text="Нужно безопасное пополнение? В боте пароль не запрашивается." />

      <h2 id="belgilar">Явные признаки мошенничества</h2>
      <KeyFacts label="Сразу насторожитесь">
        <li>У вас просят пароль Steam.</li>
        <li>У вас просят код Steam Guard.</li>
        <li>Предлагают цену значительно ниже рынка.</li>
        <li>Торопят: «решайте быстрее».</li>
        <li>Неофициальный домен или сокращённая ссылка.</li>
      </KeyFacts>

      <p>
        Подробнее:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">безопасен ли Steam Wallet?</Link> и{" "}
        <Link href="/blog/steam-login-nima">что такое Steam Login?</Link>
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
      The three most important steps to protect a Steam account: enable Steam Guard (two‑factor protection), set a
      strong, unique password, and never share your password or Guard code with anyone. The rest — avoiding phishing,
      trade protection, checking sessions and device security.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="kirish">Why does this matter?</h2>
      <p>
        Your Steam account holds your game library, your{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance and Market items. If the account is stolen,
        all of it is at risk. The 10 tips below significantly strengthen your protection.
      </p>

      <Steps>
        <Step title="1. Enable Steam Guard">
          Activate two‑factor protection via the mobile authenticator — this is the single most important step.
        </Step>
        <Step title="2. Set a strong password">
          Long, mixing letters, numbers and symbols. Don't reuse a password from another site.
        </Step>
        <Step title="3. Never share your password">
          No official service — not even Steam support — asks for your password.
        </Step>
        <Step title="4. Don't share Guard codes">
          Telling someone the code is as good as handing over the account. Never send a screenshot.
        </Step>
        <Step title="5. Beware of phishing">
          Check the domain before clicking. Fake «Steam» pages can look very similar.
        </Step>
        <Step title="6. Protect your email">
          Enable two‑factor protection on the linked email too — it's the recovery key.
        </Step>
        <Step title="7. Check active sessions">
          Review the device list in settings; end any unfamiliar sessions.
        </Step>
        <Step title="8. Keep your device clean">
          Antivirus, system updates and avoiding suspicious software.
        </Step>
        <Step title="9. Scrutinise trade offers">
          Decline unfamiliar offers; «free skin» promises are a classic scam.
        </Step>
        <Step title="10. Use trustworthy services">
          For top‑ups, choose a service that never asks for a password and gives you an order ID.
        </Step>
      </Steps>

      <InlineCta text="Need a safe top‑up? The bot never asks for your password." />

      <h2 id="belgilar">Clear signs of a scam</h2>
      <KeyFacts label="Be suspicious immediately if">
        <li>They ask for your Steam password.</li>
        <li>They ask for your Steam Guard code.</li>
        <li>They offer a price far below market.</li>
        <li>They rush you: «decide quickly».</li>
        <li>The domain is unofficial or the link is shortened.</li>
      </KeyFacts>

      <p>
        More:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">is Steam Wallet safe?</Link> and{" "}
        <Link href="/blog/steam-login-nima">what is Steam Login?</Link>
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
  { question: "Steam hisobini himoya qilishning eng muhim qadami nima?", answer: "Steam Guard — ikki bosqichli himoyani yoqish. Bu hisobni o‘g‘irlashdan eng kuchli himoya." },
  { question: "Steam Guard qanday yoqiladi?", answer: "Steam mobil ilovasi orqali autentifikatorni faollashtirasiz; sozlamalarda xavfsizlik bo‘limidan." },
  { question: "Kuchli parol qanday bo‘ladi?", answer: "Uzun, harf-raqam-belgi aralashmasi va boshqa saytlarda ishlatilmagan." },
  { question: "Parolni kimga bersam bo‘ladi?", answer: "Hech kimga. Steam support ham parolingizni so‘ramaydi." },
  { question: "Guard kodini do‘stimga bersam bo‘ladimi?", answer: "Yo‘q. Bu hisobni topshirish bilan teng." },
  { question: "Fishing sayt nima?", answer: "Steam’ga o‘xshab yasalgan soxta sahifa — login va parolni o‘g‘irlash uchun." },
  { question: "Fishingni qanday aniqlayman?", answer: "Domen manzilini tekshiring; rasmiy Steam domenidan farq qilsa, kirmang." },
  { question: "Email himoyasi nega muhim?", answer: "Pochta hisobni tiklash kaliti — u himoyalanmagan bo‘lsa, hisob ham xavf ostida." },
  { question: "Faol seanslarni qayerdan ko‘raman?", answer: "Steam sozlamalarining xavfsizlik/qurilmalar bo‘limidan." },
  { question: "Notanish qurilmani ko‘rsam nima qilaman?", answer: "Seansni yoping va darhol parolni o‘zgartiring." },
  { question: "Savdo takliflari xavflimi?", answer: "Noma’lum takliflar xavfli bo‘lishi mumkin — rad eting va buyumni tekshiring." },
  { question: "«Bepul skin» taklifi haqiqiymi?", answer: "Deyarli har doim aldov. Ehtiyot bo‘ling." },
  { question: "Hisobim o‘g‘irlansa nima qilaman?", answer: "Parolni o‘zgartiring, seanslarni yoping va Steam qo‘llab-quvvatlashiga murojaat qiling." },
  { question: "Ommaviy Wi‑Fi xavflimi?", answer: "Xavf bor; iloji bo‘lsa shaxsiy tarmoqdan foydalaning." },
  { question: "Antivirus kerakmi?", answer: "Ha, qurilmani toza saqlash hisob xavfsizligining bir qismidir." },
  { question: "Balans to‘ldirishda nimaga e’tibor beray?", answer: "Xizmat parol so‘ramasligi, buyurtma ID berishi va supporti bo‘lishi kerak." },
  { question: "StarsPaymee parol so‘raydimi?", answer: "Yo‘q. To‘lov mahalliy tizimlar orqali so‘mda amalga oshiriladi." },
  { question: "Parolni qanchalik tez-tez almashtiray?", answer: "Shubha tug‘ilsa darhol; umuman esa vaqti-vaqti bilan." },
  { question: "Bolam hisobidan foydalansa nima qilay?", answer: "Alohida hisob oching va Guard hamda parolni siz boshqaring." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "Xizmat bo‘yicha @StarsPaymeeSupport; hisob bo‘yicha Steam qo‘llab-quvvatlash." },
];

const ruFaq = [
  { question: "Какой самый важный шаг защиты аккаунта Steam?", answer: "Включить Steam Guard — двухфакторную защиту. Это сильнейшая защита от угона." },
  { question: "Как включить Steam Guard?", answer: "Через мобильное приложение Steam активируете аутентификатор; в настройках безопасности." },
  { question: "Каким должен быть сильный пароль?", answer: "Длинным, из букв, цифр и символов, не использованным на других сайтах." },
  { question: "Кому можно сообщить пароль?", answer: "Никому. Поддержка Steam тоже не просит пароль." },
  { question: "Можно ли дать код Guard другу?", answer: "Нет. Это равносильно передаче аккаунта." },
  { question: "Что такое фишинговый сайт?", answer: "Поддельная страница под Steam — для кражи логина и пароля." },
  { question: "Как распознать фишинг?", answer: "Проверьте домен; если он отличается от официального Steam, не заходите." },
  { question: "Почему важна защита почты?", answer: "Почта — ключ к восстановлению аккаунта; если она не защищена, аккаунт тоже под угрозой." },
  { question: "Где посмотреть активные сессии?", answer: "В настройках безопасности/устройств Steam." },
  { question: "Что делать при незнакомом устройстве?", answer: "Завершите сессию и сразу смените пароль." },
  { question: "Опасны ли обменные предложения?", answer: "Незнакомые предложения могут быть опасны — отклоняйте и проверяйте предмет." },
  { question: "Реально ли предложение «бесплатных скинов»?", answer: "Почти всегда обман. Будьте осторожны." },
  { question: "Что делать, если аккаунт угнали?", answer: "Смените пароль, завершите сессии и обратитесь в поддержку Steam." },
  { question: "Опасен ли публичный Wi‑Fi?", answer: "Риск есть; по возможности используйте личную сеть." },
  { question: "Нужен ли антивирус?", answer: "Да, чистота устройства — часть безопасности аккаунта." },
  { question: "На что смотреть при пополнении?", answer: "Сервис не должен просить пароль, должен давать ID заказа и иметь поддержку." },
  { question: "Просит ли StarsPaymee пароль?", answer: "Нет. Оплата проходит в сумах через локальные системы." },
  { question: "Как часто менять пароль?", answer: "Сразу при подозрении; в целом периодически." },
  { question: "Что делать, если аккаунтом пользуется ребёнок?", answer: "Заведите отдельный аккаунт и контролируйте Guard и пароль сами." },
  { question: "Куда писать за помощью?", answer: "По сервису — @StarsPaymeeSupport; по аккаунту — поддержка Steam." },
];

const enFaq = [
  { question: "What's the most important step to protect a Steam account?", answer: "Enabling Steam Guard — two‑factor protection. It's the strongest defence against theft." },
  { question: "How do I enable Steam Guard?", answer: "Activate the authenticator via the Steam mobile app; in the security settings." },
  { question: "What makes a strong password?", answer: "Long, mixing letters, numbers and symbols, and not used on other sites." },
  { question: "Who can I share my password with?", answer: "No one. Steam support doesn't ask for your password either." },
  { question: "Can I give a Guard code to a friend?", answer: "No. It's equivalent to handing over the account." },
  { question: "What is a phishing site?", answer: "A fake page made to look like Steam — to steal your login and password." },
  { question: "How do I spot phishing?", answer: "Check the domain; if it differs from the official Steam domain, don't enter it." },
  { question: "Why does email protection matter?", answer: "Email is the recovery key; if it isn't protected, the account is at risk too." },
  { question: "Where do I see active sessions?", answer: "In Steam's security/devices settings." },
  { question: "What if I see an unfamiliar device?", answer: "End the session and change your password immediately." },
  { question: "Are trade offers dangerous?", answer: "Unfamiliar offers can be — decline them and verify the item." },
  { question: "Is a «free skins» offer real?", answer: "Almost always a scam. Be careful." },
  { question: "What if my account is stolen?", answer: "Change your password, end sessions and contact Steam support." },
  { question: "Is public Wi‑Fi risky?", answer: "There is a risk; use a private network when possible." },
  { question: "Do I need antivirus?", answer: "Yes, a clean device is part of account security." },
  { question: "What should I look for when topping up?", answer: "The service shouldn't ask for a password, should give an order ID and have support." },
  { question: "Does StarsPaymee ask for a password?", answer: "No. Payment goes through local systems in so‘m." },
  { question: "How often should I change my password?", answer: "Immediately on suspicion; otherwise periodically." },
  { question: "What if a child uses the account?", answer: "Create a separate account and manage Guard and the password yourself." },
  { question: "Who do I contact for help?", answer: "For the service — @StarsPaymeeSupport; for the account — Steam support." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  keywords: [
    "steam hisobini himoya qilish",
    "steam guard yoqish",
    "steam xavfsizlik maslahatlari",
    "steam akkaunt himoyasi",
    "steam account security",
    "steam fishing himoya",
  ],
  howToSteps: [
    { name: "Steam Guard’ni yoqing", text: "Mobil autentifikator orqali ikki bosqichli himoyani faollashtiring." },
    { name: "Kuchli parol qo‘ying", text: "Uzun va takrorlanmas parol tanlang." },
    { name: "Parolni bermang", text: "Parol va Guard kodini hech kimga ulashmang." },
    { name: "Fishingdan qoching", text: "Havolani bosishdan oldin domenni tekshiring." },
    { name: "Seanslarni tekshiring", text: "Notanish qurilmalarni sozlamalardan chiqarib tashlang." },
  ],
  locales: {
    uz: {
      title: "Steam hisobini himoya qilish bo‘yicha 10 maslahat",
      excerpt:
        "Steam Guard, kuchli parol, fishingdan himoya, seanslarni tekshirish va savdo xavfsizligi — hisobingiz va Wallet balansini himoya qiluvchi 10 amaliy maslahat va 20 savol-javob.",
      metaTitle: "Steam hisobini himoya qilish: 10 maslahat (2026)",
      metaDescription:
        "Steam hisobini himoya qilish bo‘yicha 10 amaliy maslahat: Steam Guard, kuchli parol, fishingdan saqlanish, seanslar va savdo xavfsizligi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz to‘ldirish",
      ctaBody: "@StarsPaymee_bot orqali so‘mda to‘lang — parol yoki Guard kodi so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "10 советов по защите аккаунта Steam",
      excerpt:
        "Steam Guard, сильный пароль, защита от фишинга, проверка сессий и безопасность обменов — 10 практических советов для защиты аккаунта и баланса Wallet, и 20 вопросов‑ответов.",
      metaTitle: "Защита аккаунта Steam: 10 советов (2026)",
      metaDescription:
        "10 практических советов по защите аккаунта Steam: Steam Guard, сильный пароль, защита от фишинга, сессии и безопасность обменов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Безопасное пополнение",
      ctaBody: "Оплатите в сумах через @StarsPaymee_bot — пароль и код Guard не запрашиваются.",
      faq: ruFaq,
    },
    en: {
      title: "10 tips to protect your Steam account",
      excerpt:
        "Steam Guard, a strong password, phishing protection, session checks and trade safety — 10 practical tips to protect your account and Wallet balance, plus 20 Q&A.",
      metaTitle: "Protecting your Steam account: 10 tips (2026)",
      metaDescription:
        "10 practical tips to protect your Steam account: Steam Guard, a strong password, phishing protection, sessions and trade safety.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Safe top‑up",
      ctaBody: "Pay in so‘m via @StarsPaymee_bot — no password or Guard code is ever requested.",
      faq: enFaq,
    },
  },
};
