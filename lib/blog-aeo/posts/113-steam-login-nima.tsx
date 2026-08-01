import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, CompareTable, Yes, No, Steps, Step, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-login-nima";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam Login — akkaunt yaratganingizda tanlagan kirish nomingiz. U Profil nomi (istalgan vaqtda o‘zgartiriladi)
      va Steam ID (noyob raqamli identifikator) dan farq qiladi. Xizmat sizdan «Login» so‘rasa, aynan shu kirish
      nomini kiriting — Profil nomini emas. Login maxfiy parol emas, lekin parolni hech kimga bermang.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Steam Login nima?</h2>
      <p>
        Steam Login — bu Steam akkauntingizni yaratganingizda tanlagan kirish nomi. U hisobingizni aniqlash uchun
        ishlatiladi va odatda o‘zgarmaydi. Balans to‘ldirishda ko‘p xizmat aynan shu ma’lumotni so‘raydi.
      </p>

      <h2 id="farq">Login, Profil nomi va Steam ID farqi</h2>
      <CompareTable
        headers={["Xususiyat", "Login", "Profil nomi", "Steam ID"]}
        rows={[
          ["Nima", "kirish nomi", "ko‘rinadigan nom", "raqamli ID"],
          ["O‘zgaradimi", <No>odatda yo‘q</No>, <Yes>istalgan vaqtda</Yes>, <No>yo‘q</No>],
          ["Kim ko‘radi", "faqat siz", "do‘stlaringiz", "tizimlar"],
          ["Qachon kerak", "kirish, to‘ldirish", "ijtimoiy", "ba’zi servislar"],
        ]}
      />
      <p>
        Shuning uchun xizmat sizdan Login so‘rasa, Profil nomini emas, aynan Login ma’lumotini kiritishingiz kerak
        bo‘lishi mumkin. Ba’zi servislar Steam ID yoki profil URL manzilidan foydalanadi — qaysi ma’lumot
        talab qilinayotganini diqqat bilan tekshiring.
      </p>

      <h2 id="topish">Steam Login qayerdan topiladi?</h2>
      <Steps>
        <Step title="1. Steam ilovasini oching">Desktop yoki mobil Steam ilovasini ishga tushiring.</Step>
        <Step title="2. Account Details bo‘limiga o‘ting">Hisob sozlamalari ichidagi hisob ma’lumotlari bo‘limi.</Step>
        <Step title="3. Hisob ma’lumotlarini tekshiring">Kirish nomingiz shu yerda ko‘rsatiladi.</Step>
        <Step title="4. Topa olmasangiz">Steam’ning rasmiy hisobni tiklash vositalaridan foydalaning.</Step>
      </Steps>

      <InlineCta text="Login tayyormi? Steam balansini so‘mda to‘ldiring." />

      <h2 id="qachon">Steam Login qachon kerak bo‘ladi?</h2>
      <KeyFacts label="Talab qilinishi mumkin bo‘lgan holatlar">
        <li><Link href="/blog/ozbek-somida-steam-balansini-toldirish">Steam balansini to‘ldirish</Link>.</li>
        <li>Ba’zi uchinchi tomon xizmatlari orqali xarid qilish.</li>
        <li>Hisobni tasdiqlash.</li>
        <li>Texnik yordam bilan bog‘lanish.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Loginni boshqalarga berish xavfsizmi?</h2>
      <p>
        Loginning o‘zi maxfiy parol emas, lekin ehtiyot bo‘ling:
      </p>
      <ul>
        <li>❌ Steam parolingizni hech kimga bermang.</li>
        <li>❌ Steam Guard kodini hech kim bilan ulashmang.</li>
        <li>❌ Noma’lum saytlarga hisob ma’lumotlarini kiritmang.</li>
      </ul>
      <p>
        Batafsil himoya choralari:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">Steam hisobini himoya qilish bo‘yicha 10 maslahat</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam yordam markazi" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "hisob ma’lumotlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Steam Login — это имя входа, выбранное при создании аккаунта. Оно отличается от имени профиля (его можно менять
      в любое время) и от Steam ID (уникального числового идентификатора). Если сервис просит «Login», вводите именно
      имя входа, а не имя профиля. Логин — не секретный пароль, но пароль никому не сообщайте.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Steam Login?</h2>
      <p>
        Steam Login — имя входа, которое вы выбрали при создании аккаунта Steam. Оно используется для идентификации
        аккаунта и обычно не меняется. При пополнении баланса многие сервисы запрашивают именно эти данные.
      </p>

      <h2 id="farq">Разница логина, имени профиля и Steam ID</h2>
      <CompareTable
        headers={["Свойство", "Логин", "Имя профиля", "Steam ID"]}
        rows={[
          ["Что это", "имя входа", "видимое имя", "числовой ID"],
          ["Меняется ли", <No>обычно нет</No>, <Yes>в любое время</Yes>, <No>нет</No>],
          ["Кто видит", "только вы", "ваши друзья", "системы"],
          ["Когда нужно", "вход, пополнение", "социальное", "некоторые сервисы"],
        ]}
      />
      <p>
        Поэтому, если сервис просит логин, нужно вводить именно его, а не имя профиля. Некоторые сервисы используют
        Steam ID или URL профиля — внимательно проверяйте, какие данные требуются.
      </p>

      <h2 id="topish">Где найти Steam Login?</h2>
      <Steps>
        <Step title="1. Откройте приложение Steam">Запустите десктопное или мобильное приложение Steam.</Step>
        <Step title="2. Перейдите в Account Details">Раздел данных аккаунта в настройках.</Step>
        <Step title="3. Проверьте данные аккаунта">Ваше имя входа отображается там.</Step>
        <Step title="4. Если не нашли">Воспользуйтесь официальными средствами восстановления Steam.</Step>
      </Steps>

      <InlineCta text="Логин готов? Пополните баланс Steam в сумах." />

      <h2 id="qachon">Когда нужен Steam Login?</h2>
      <KeyFacts label="Возможные случаи">
        <li><Link href="/blog/ozbek-somida-steam-balansini-toldirish">Пополнение баланса Steam</Link>.</li>
        <li>Покупка через некоторые сторонние сервисы.</li>
        <li>Подтверждение аккаунта.</li>
        <li>Обращение в техподдержку.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Безопасно ли давать логин другим?</h2>
      <p>Сам логин — не секретный пароль, но будьте осторожны:</p>
      <ul>
        <li>❌ Не сообщайте никому пароль Steam.</li>
        <li>❌ Не делитесь кодом Steam Guard.</li>
        <li>❌ Не вводите данные аккаунта на неизвестных сайтах.</li>
      </ul>
      <p>
        Подробнее о защите:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">10 советов по защите аккаунта Steam</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "справка Steam" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "данные аккаунта" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Steam Login is the sign‑in name you chose when creating your account. It differs from your profile name (which
      you can change any time) and from your Steam ID (a unique numeric identifier). If a service asks for «Login»,
      enter that sign‑in name, not the profile name. The login isn't a secret password, but never share your password.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is Steam Login?</h2>
      <p>
        Steam Login is the sign‑in name you picked when creating your Steam account. It's used to identify your
        account and usually doesn't change. When topping up a balance, many services ask for exactly this detail.
      </p>

      <h2 id="farq">Login vs profile name vs Steam ID</h2>
      <CompareTable
        headers={["Feature", "Login", "Profile name", "Steam ID"]}
        rows={[
          ["What it is", "sign‑in name", "visible name", "numeric ID"],
          ["Can it change", <No>usually no</No>, <Yes>any time</Yes>, <No>no</No>],
          ["Who sees it", "only you", "your friends", "systems"],
          ["When needed", "sign‑in, top‑up", "social", "some services"],
        ]}
      />
      <p>
        So if a service asks for the login, you need to enter that — not the profile name. Some services use the
        Steam ID or profile URL instead — check carefully which detail is required.
      </p>

      <h2 id="topish">Where do you find your Steam Login?</h2>
      <Steps>
        <Step title="1. Open the Steam app">Launch the desktop or mobile Steam app.</Step>
        <Step title="2. Go to Account Details">The account information section in settings.</Step>
        <Step title="3. Check the account details">Your sign‑in name is displayed there.</Step>
        <Step title="4. If you can't find it">Use Steam's official account recovery tools.</Step>
      </Steps>

      <InlineCta text="Login ready? Top up your Steam balance in so‘m." />

      <h2 id="qachon">When is Steam Login needed?</h2>
      <KeyFacts label="Cases where it may be required">
        <li><Link href="/blog/ozbek-somida-steam-balansini-toldirish">Topping up a Steam balance</Link>.</li>
        <li>Buying through some third‑party services.</li>
        <li>Confirming the account.</li>
        <li>Contacting technical support.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Is it safe to give your login to others?</h2>
      <p>The login itself is not a secret password, but be careful:</p>
      <ul>
        <li>❌ Never give your Steam password to anyone.</li>
        <li>❌ Never share your Steam Guard code.</li>
        <li>❌ Don't enter account details on unknown sites.</li>
      </ul>
      <p>
        More on protection:{" "}
        <Link href="/blog/steam-hisobini-himoya-qilish-10-maslahat">10 tips to protect your Steam account</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam help centre" },
          { href: "https://store.steampowered.com/account/", label: "store.steampowered.com/account", note: "account details" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Steam Login nima?", answer: "Steam akkauntini yaratganda tanlangan kirish nomi. Hisobni aniqlash uchun ishlatiladi." },
  { question: "Steam Login o‘zgaradimi?", answer: "Odatda yo‘q — u hisob yaratilganda belgilanadi." },
  { question: "Login va Profil nomi bir xilmi?", answer: "Yo‘q. Profil nomini istalgan vaqtda o‘zgartirish mumkin, Login esa odatda o‘zgarmaydi." },
  { question: "Steam ID nima?", answer: "Steam hisobiga biriktirilgan noyob raqamli identifikator." },
  { question: "Login va Email bir xilmi?", answer: "Yo‘q. Email — hisobga bog‘langan pochta manzili, Login esa kirish nomi." },
  { question: "Steam Loginni qayerdan topaman?", answer: "Steam ilovasidagi Account Details (hisob ma’lumotlari) bo‘limidan." },
  { question: "Loginni unutib qo‘ysam nima bo‘ladi?", answer: "Steam’ning rasmiy hisobni tiklash vositalari orqali qayta aniqlashingiz mumkin." },
  { question: "Login maxfiymi?", answer: "Login parol emas, lekin uni keraksiz joyda tarqatmang." },
  { question: "Parolni berish kerakmi?", answer: "Yo‘q. Hech qachon Steam parolingizni bermang." },
  { question: "Steam Guard kodini bersa bo‘ladimi?", answer: "Yo‘q. Steam Guard kodini hech kim bilan ulashmang." },
  { question: "Balans to‘ldirishda qaysi ma’lumot kerak?", answer: "Xizmat so‘raganiga qarab — odatda Login yoki profil ma’lumoti. Botdagi ko‘rsatmaga amal qiling." },
  { question: "Profil URL nima?", answer: "Sizning Steam profilingizga olib boradigan havola; ba’zi servislar shundan foydalanadi." },
  { question: "Noto‘g‘ri login kiritsam nima bo‘ladi?", answer: "Buyurtma boshqa hisobga ketishi yoki bajarilmasligi mumkin — ma’lumotni tekshiring." },
  { question: "Login katta-kichik harfga sezgirmi?", answer: "Ma’lumotni ilovada ko‘rsatilganidek aniq kiriting." },
  { question: "Bir nechta akkauntim bo‘lsa-chi?", answer: "Har bir buyurtmada aynan kerakli hisob ma’lumotini kiriting." },
  { question: "Login orqali hisobimni o‘g‘irlashadimi?", answer: "Faqat login bilan emas — lekin parol va Guard kodini bermaslik shart." },
  { question: "Steam Guard nima?", answer: "Hisobingiz uchun ikki bosqichli himoya tizimi." },
  { question: "Loginni o‘zgartirsa bo‘ladimi?", answer: "Steam’da kirish nomi odatda o‘zgartirilmaydi; profil nomini esa o‘zgartirish mumkin." },
  { question: "Balansni so‘mda to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali UzCard, HUMO, Click yoki Payme bilan." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — buyurtma ID bilan yozing." },
];

const ruFaq = [
  { question: "Что такое Steam Login?", answer: "Имя входа, выбранное при создании аккаунта Steam. Используется для идентификации аккаунта." },
  { question: "Меняется ли Steam Login?", answer: "Обычно нет — он задаётся при создании аккаунта." },
  { question: "Логин и имя профиля — одно и то же?", answer: "Нет. Имя профиля можно менять в любое время, логин обычно не меняется." },
  { question: "Что такое Steam ID?", answer: "Уникальный числовой идентификатор, привязанный к аккаунту Steam." },
  { question: "Логин и email — одно и то же?", answer: "Нет. Email — привязанная почта, логин — имя входа." },
  { question: "Где найти Steam Login?", answer: "В приложении Steam в разделе Account Details (данные аккаунта)." },
  { question: "Что если я забыл логин?", answer: "Можно восстановить через официальные средства восстановления Steam." },
  { question: "Логин секретный?", answer: "Логин — не пароль, но не распространяйте его без необходимости." },
  { question: "Нужно ли сообщать пароль?", answer: "Нет. Никогда не сообщайте пароль Steam." },
  { question: "Можно ли дать код Steam Guard?", answer: "Нет. Никому не сообщайте код Steam Guard." },
  { question: "Какие данные нужны при пополнении?", answer: "Зависит от сервиса — обычно логин или данные профиля. Следуйте подсказкам бота." },
  { question: "Что такое URL профиля?", answer: "Ссылка на ваш профиль Steam; некоторые сервисы используют её." },
  { question: "Что если ввести неверный логин?", answer: "Заказ может уйти на другой аккаунт или не выполниться — проверяйте данные." },
  { question: "Логин чувствителен к регистру?", answer: "Вводите данные точно так, как они показаны в приложении." },
  { question: "А если у меня несколько аккаунтов?", answer: "В каждом заказе указывайте данные нужного аккаунта." },
  { question: "Могут ли украсть аккаунт по логину?", answer: "Только по логину — нет, но пароль и код Guard сообщать нельзя." },
  { question: "Что такое Steam Guard?", answer: "Система двухфакторной защиты вашего аккаунта." },
  { question: "Можно ли изменить логин?", answer: "Имя входа в Steam обычно не меняется; имя профиля изменить можно." },
  { question: "Можно ли пополнить баланс в сумах?", answer: "Да. Через @StarsPaymee_bot картой UzCard, HUMO, Click или Payme." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — указывайте ID заказа." },
];

const enFaq = [
  { question: "What is Steam Login?", answer: "The sign‑in name chosen when creating a Steam account. It's used to identify the account." },
  { question: "Does Steam Login change?", answer: "Usually not — it's set when the account is created." },
  { question: "Are the login and profile name the same?", answer: "No. The profile name can be changed any time; the login usually doesn't change." },
  { question: "What is a Steam ID?", answer: "A unique numeric identifier attached to a Steam account." },
  { question: "Are the login and email the same?", answer: "No. The email is the linked mail address; the login is the sign‑in name." },
  { question: "Where do I find my Steam Login?", answer: "In the Steam app under Account Details." },
  { question: "What if I forgot my login?", answer: "You can recover it via Steam's official recovery tools." },
  { question: "Is the login secret?", answer: "The login isn't a password, but don't spread it unnecessarily." },
  { question: "Do I need to share my password?", answer: "No. Never share your Steam password." },
  { question: "Can I share a Steam Guard code?", answer: "No. Never share your Steam Guard code with anyone." },
  { question: "Which details are needed for a top‑up?", answer: "It depends on the service — usually the login or profile details. Follow the bot's prompts." },
  { question: "What is a profile URL?", answer: "A link to your Steam profile; some services use it." },
  { question: "What if I enter the wrong login?", answer: "The order may go to another account or fail — check the details." },
  { question: "Is the login case‑sensitive?", answer: "Enter it exactly as shown in the app." },
  { question: "What if I have several accounts?", answer: "In each order specify the details of the account you need." },
  { question: "Can my account be stolen using the login?", answer: "Not by the login alone — but never share your password or Guard code." },
  { question: "What is Steam Guard?", answer: "A two‑factor protection system for your account." },
  { question: "Can I change the login?", answer: "The Steam sign‑in name usually can't be changed; the profile name can." },
  { question: "Can I top up the balance in so‘m?", answer: "Yes. Via @StarsPaymee_bot with UzCard, HUMO, Click or Payme." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — include the order ID." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "info",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: [
    "steam login nima",
    "steam login",
    "steam id",
    "steam profil nomi",
    "steam login qayerdan topiladi",
    "steam account details",
  ],
  locales: {
    uz: {
      title: "Steam Login nima? Uni qayerdan topish mumkin?",
      excerpt:
        "Steam Login nima, Steam ID va profil nomidan farqi nimada? Loginni qayerdan topish, qachon kerak bo‘lishi va xavfsizlik qoidalari bo‘yicha batafsil qo‘llanma.",
      metaTitle: "Steam Login nima? Uni qayerdan topish mumkin?",
      metaDescription:
        "Steam Login nima, Steam ID va profil nomidan farqi nimada? Steam loginni topish bo‘yicha batafsil qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Steam balansini to‘ldiring",
      ctaBody: "Login tayyor bo‘lsa, @StarsPaymee_bot orqali so‘mda to‘lang — bir necha daqiqada tushadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Что такое Steam Login и где его найти?",
      excerpt:
        "Что такое Steam Login, чем он отличается от Steam ID и имени профиля? Подробное руководство: где найти логин, когда он нужен и правила безопасности.",
      metaTitle: "Что такое Steam Login и где его найти?",
      metaDescription:
        "Что такое Steam Login, чем он отличается от Steam ID и имени профиля? Подробное руководство по поиску логина Steam.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните баланс Steam",
      ctaBody: "Если логин готов — оплатите в сумах через @StarsPaymee_bot, поступит за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "What is Steam Login and where can you find it?",
      excerpt:
        "What Steam Login is and how it differs from a Steam ID and profile name. A detailed guide: where to find the login, when it's needed and safety rules.",
      metaTitle: "What is Steam Login and where can you find it?",
      metaDescription:
        "What Steam Login is and how it differs from a Steam ID and profile name. A detailed guide to finding your Steam login.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your Steam balance",
      ctaBody: "With your login ready, pay in so‘m via @StarsPaymee_bot — it arrives within minutes.",
      faq: enFaq,
    },
  },
};
