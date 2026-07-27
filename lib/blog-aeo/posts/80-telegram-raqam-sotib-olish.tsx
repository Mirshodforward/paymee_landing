import { Link } from "@/i18n/navigation";
import { TelegramNumberPriceBoard } from "@/components/blog/telegram-number-price-board";
import {
  CompareTable,
  Sources,
  Steps,
  Step,
  Toc,
  Yes,
  No,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import {
  BotNumberCtaRu,
  BotNumberCtaUz,
  GrowthSeriesAside,
  StarsPremiumLinksRu,
  StarsPremiumLinksUz,
  VirtualNumberKeyFactsUz,
} from "./_growth-shared";

const SLUG = "telegram-raqam-sotib-olish";

function UzAnswer() {
  return (
    <p>
      Telegram uchun raqam sotib olishning eng qulay yo‘li — <strong>@StarsPaymee_bot</strong> yoki Mini App ichidagi
      raqamlar bo‘limi: 100 dan ortiq davlat, arzon variantlar taxminan <strong>6 600 so‘m</strong>dan, qimmatlari{" "}
      <strong>56 300 so‘m</strong>gacha. To‘lov UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda; SMS/OTP kodini
      shu raqam orqali qabul qilib Telegram’da ro‘yxatdan o‘tasiz yoki ikkinchi akkaunt ochasiz.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Telegram raqam nima uchun kerak" },
          { href: "#virtual", label: "Virtual raqam nima" },
          { href: "#narx", label: "Narxlar: arzon va qimmat davlatlar" },
          { href: "#qayerdan", label: "Qayerdan sotib olish" },
          { href: "#qadamlar", label: "Qanday olish — bosqichlar" },
          { href: "#xavfsiz", label: "Xavfsizlik va qonuniylik" },
          { href: "#seriya", label: "10 ta bog‘liq maqola" },
        ]}
      />

      <h2 id="nima">Telegram raqam nima uchun kerak?</h2>
      <p>
        Telegram ro‘yxatdan o‘tishda telefon raqami talab qilinadi: tizim sizga <strong>SMS yoki qo‘ng‘iroq orqali
        tasdiqlash kodi</strong> (OTP) yuboradi. Ba’zi foydalanuvchilar bitta raqamda ikkinchi akkaunt ochmoqchi,
        chet el raqami kerak bo‘lgani uchun yoki mahalliy operator SMS yetkazmayotgani uchun{" "}
        <strong>virtual (bir martalik) raqam</strong> sotib oladi. O‘zbekistonda «telegram raqam sotib olish», «virtual
        telegram raqam», «sms activate telegram» kabi so‘rovlar aynan shu ehtiyojdan kelib chiqadi.
      </p>
      <p>
        Muhim: Telegram bir raqamni odatda bitta akkauntga bog‘laydi. Yangi raqam — yangi akkaunt yoki mavjud
        akkauntdagi raqamni almashtirish uchun ishlatiladi. Ikkinchi holatda eski raqamga kirish imkoniyati yo‘qolishi
        mumkin — avvalo{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA va tiklash</Link> sozlamalarini o‘qing.
      </p>

      <h2 id="virtual">Virtual Telegram raqam nima?</h2>
      <p>
        Virtual raqam — fizik SIM-karta emas, balki onlayn xizmat orqali vaqtincha ijara qilingan telefon raqami.
        Siz raqamni tanlaysiz, to‘lov qilasiz, Telegram kodini shu interfeysda o‘qisiz va keyin raqam muddat tugagach
        bekor qilinishi mumkin. Bunday xizmatlar global bozorlarda 5sim, Grizzly SMS, SMS-Activate kabi nomlar bilan
        ham tanilgan; StarsPaymee boti O‘zbekiston foydalanuvchisi uchun <strong>so‘mda to‘lov</strong> va{" "}
        <strong>ko‘p davlat katalogi</strong> bilan shu vazifani bajaradi.
      </p>
      <CompareTable
        headers={["Tur", "Afzallik", "Kamchilik"]}
        rows={[
          ["Mahalliy SIM", "Doimiy raqam, ishonchli SMS", "Ikkinchi akkaunt uchun alohida SIM kerak"],
          ["Virtual raqam", "Tez, arzon, ko‘p davlat", "Vaqtinchalik; ba’zi davlatlar qimmatroq"],
          ["Tayyor akkaunt", "Darhol foydalanish", "Xavfsizlik va qoidalarga moslikni tekshirish kerak"],
        ]}
      />
      <p>
        Virtual raqam haqida chuqurroq:{" "}
        <Link href="/blog/virtual-telegram-raqam-nima">«Virtual Telegram raqam nima?»</Link> maqolasi.
      </p>

      <h2 id="narx">Narxlar: arzon va qimmat davlatlar</h2>
      <p>
        Botdagi katalogda har bir davlat uchun <strong>narx (so‘m)</strong> va <strong>zaxira</strong> («180 ta mavjud»
        kabi) ko‘rsatiladi. Bu shuni anglatadiki, xizmatda shu davlat kodli ko‘plab tayyor akkaunt yoki raqam slotlari
        bor — tanlash vaqtida kutish kamayadi. Narxlarning farqi operator, mamlakat va talabga bog‘liq: ba’zi
        davlatlarda bir necha ming so‘m, boshqalarida ellik ming so‘mgacha chiqishi mumkin.
      </p>
      <VirtualNumberKeyFactsUz />
      <TelegramNumberPriceBoard locale="uz" variant="budget" />
      <TelegramNumberPriceBoard locale="uz" variant="premium" />
      <p>
        Saralash tugmalari (A-Z, Arzon, Qimmat, Ko‘p) bot interfeysida xuddi shu tartibda ishlaydi — qimmat davlatlar
        ro‘yxatida Singapur, Koreya, Bahrayn kabi variantlar yuqori narx segmentida turadi; Bangladesh va Hindiston esa
        arzon segmentda.
      </p>
      <BotNumberCtaUz />

      <h2 id="qayerdan">Telegram raqamni qayerdan sotib olish mumkin?</h2>
      <CompareTable
        headers={["Xizmat", "To‘lov", "O‘zbekiston kartasi", "Davlatlar soni"]}
        rows={[
          ["Xorijiy SMS-saytlar", "USD / kripto", <No key="1" />, "Ko‘p, lekin konvertatsiya kerak"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Paynet",
            <Yes key="2" />,
            "100+ davlat, joriy zaxira ko‘rinadi",
          ],
        ]}
      />
      <p>
        Agar SMS kodi umuman kelmasa, avvalo operator va VPN masalalarini tekshiring —{" "}
        <Link href="/blog/telegram-sms-kod-kelmayotganda">SMS kod kelmayotganda</Link> (flat maqola) yordam beradi.
      </p>

      <h2 id="qadamlar">Qanday olish — bosqichma-bosqich</h2>
      <Steps>
        <Step title="Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          yoki Mini App → raqamlar / virtual number bo‘limi.
        </Step>
        <Step title="Davlatni tanlang">Arzon yoki kerakli mamlakatni filtrlang; narx va «ta mavjud» ni solishtiring.</Step>
        <Step title="To‘lovni amalga oshiring">So‘mda, mahalliy kartalar orqali.</Step>
        <Step title="Telegram’da raqamni kiriting">Ro‘yxatdan o‘tish ekranida sotib olgan raqamni yozing.</Step>
        <Step title="SMS kodini oling">Bot yoki xizmat interfeysida kelgan OTP ni Telegram’ga kiriting.</Step>
        <Step title="Akkauntni himoyalang">Iloji bo‘lsa darhol 2FA va email qo‘shing.</Step>
      </Steps>
      <StarsPremiumLinksUz />

      <h2 id="xavfsiz">Xavfsizlik va qonuniylik</h2>
      <ul>
        <li>Parol yoki to‘liq akkaunt kirishini talab qiladigan shubhali reklamalardan saqlaning.</li>
        <li>Virtual raqamni faqat qonuniy maqsadda ishlating; firibgarlik va spam Telegram qoidalariga zid.</li>
        <li>Ikkinchi akkaunt ochsangiz, eski raqamni yo‘qotmaslik uchun tiklash opsiyalarini oldindan sozlang.</li>
      </ul>

      <h2 id="seriya">10 ta bog‘liq SEO maqola</h2>
      <p>
        Premium, tayyor akkaunt, biznes profil, kanal boost, Stars, Gifts, username va reklama bo‘yicha alohida
        qo‘llanmalar — quyidagi seriyada. Har birida FAQ schema va ichki havolalar bor.
      </p>
      <GrowthSeriesAside locale="uz" />

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "rasmiy FAQ" },
          { href: "https://core.telegram.org/api/auth", label: "core.telegram.org/api/auth", note: "autentifikatsiya" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Самый удобный способ купить номер для Telegram — раздел номеров в <strong>@StarsPaymee_bot</strong> или Mini App:
      100+ стран, бюджетные варианты от ~<strong>6 600 сум</strong>, премиум до ~<strong>56 300 сум</strong>. Оплата
      UzCard, HUMO, Click, Payme или Paynet в сумах; SMS/OTP принимаете на этот номер для регистрации или второго
      аккаунта.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Зачем нужен номер" },
          { href: "#virtual", label: "Виртуальный номер" },
          { href: "#narx", label: "Цены по странам" },
          { href: "#qayerdan", label: "Где купить" },
          { href: "#qadamlar", label: "Пошагово" },
          { href: "#xavfsiz", label: "Безопасность" },
          { href: "#seriya", label: "Серия из 10 статей" },
        ]}
      />

      <h2 id="nima">Зачем Telegram нужен номер телефона?</h2>
      <p>
        При регистрации Telegram отправляет <strong>код подтверждения по SMS или звонку</strong>. Виртуальный номер
        покупают для второго аккаунта, иностранного кода или когда локальный оператор не доставляет SMS. Запросы вроде
        «купить номер для telegram», «виртуальный номер telegram» и «sms activate» как раз про это.
      </p>

      <h2 id="virtual">Что такое виртуальный номер?</h2>
      <p>
        Это временный онлайн-номер без физической SIM. Вы оплачиваете, читаете OTP в интерфейсе сервиса и
        регистрируетесь. StarsPaymee даёт оплату в сумах и большой каталог стран. Подробнее:{" "}
        <Link href="/blog/virtual-telegram-raqam-nima">«Что такое виртуальный номер?»</Link>.
      </p>

      <h2 id="narx">Цены: дешёвые и дорогие страны</h2>
      <p>
        В каталоге бота указаны <strong>цена в сумах</strong> и <strong>остаток</strong> («72 в наличии»). Разброс
        большой: от нескольких тысяч до десятков тысяч сум за премиум-страны.
      </p>
      <TelegramNumberPriceBoard locale="ru" variant="budget" />
      <TelegramNumberPriceBoard locale="ru" variant="premium" />
      <BotNumberCtaRu />

      <h2 id="qayerdan">Где купить номер для Telegram?</h2>
      <p>
        Для Узбекистана удобнее <strong>@StarsPaymee_bot</strong> с локальными картами и отображением остатков по
        странам, чем зарубежные SMS-сервисы только в USD.
      </p>

      <h2 id="qadamlar">Пошагово</h2>
      <Steps>
        <Step title="Откройте бота">@StarsPaymee_bot → раздел номеров.</Step>
        <Step title="Выберите страну">Сортировка A-Z, дешёвые, дорогие, по остатку.</Step>
        <Step title="Оплатите в сумах">UzCard, HUMO, Click, Payme, Paynet.</Step>
        <Step title="Введите номер в Telegram">На экране регистрации.</Step>
        <Step title="Скопируйте OTP">Из интерфейса бота в Telegram.</Step>
        <Step title="Включите 2FA">По возможности сразу после входа.</Step>
      </Steps>
      <StarsPremiumLinksRu />

      <h2 id="xavfsiz">Безопасность</h2>
      <p>Не передавайте пароли посторонним; используйте номера только в рамках правил Telegram.</p>

      <h2 id="seriya">Серия из 10 статей</h2>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const FAQ_UZ = [
  {
    question: "Telegram raqam sotib olish qayerdan mumkin?",
    answer: "@StarsPaymee_bot yoki Mini App → raqamlar bo‘limi. 100+ davlat, so‘mda to‘lov.",
  },
  {
    question: "Eng arzon telegram raqam qancha?",
    answer: "Katalogda arzon davlatlar taxminan 6 600 so‘mdan boshlanadi (masalan, Bangladesh, Hindiston). Joriy narx botda.",
  },
  {
    question: "Eng qimmat davlatlar qaysi?",
    answer: "Singapur, Janubiy Koreya, Bahrayn kabi variantlar 40 000–56 300 so‘m atrofida bo‘lishi mumkin — botda «Qimmat» filtri.",
  },
  {
    question: "«Ta mavjud» nima degani?",
    answer: "Shu davlat uchun xizmatda nechta tayyor raqam/akkaunt sloti borligini ko‘rsatadi — ko‘p bo‘lsa tezroq tanlash mumkin.",
  },
  {
    question: "Virtual raqam bilan ikkinchi akkaunt ochsa bo‘ladimi?",
    answer: "Ha, yangi raqam bilan yangi akkaunt ro‘yxatdan o‘tadi. Eski akkauntga ta’sir qilmasligi uchun alohida raqam ishlating.",
  },
  {
    question: "SMS kod kelmasa nima qilish kerak?",
    answer: "Boshqa davlat tanlang, biroz kuting yoki operator/VPN masalalarini tekshiring. Botda zaxirasi ko‘p davlatni tanlash osonroq.",
  },
  {
    question: "UzCard bilan to‘lash mumkinmi?",
    answer: "Ha, Click, Payme, Paynet, UzCard va HUMO orqali so‘mda.",
  },
  {
    question: "5sim yoki Grizzly SMS o‘rniga StarsPaymee?",
    answer: "Asosiy farq — mahalliy to‘lov va so‘mda narx; katalog va zaxira bot interfeysida ko‘rinadi.",
  },
  {
    question: "Telegram registratsiya raqami bir martalikmi?",
    answer: "Ko‘pincha virtual raqamlar vaqtinchalik; asosiy akkaunt uchun doimiy SIM yoki uzoq muddatli variant afzal.",
  },
  {
    question: "Tayyor telegram akkaunt ham bormi?",
    answer: "Mavzu alohida: «Telegram akkaunt sotib olish» maqolasida xavfsizlik va farqlar yozilgan.",
  },
  {
    question: "Premium yoki Stars ham shu botdamı?",
    answer: "Ha, username bilan Premium, Stars va Gifts — raqamdan keyin kerak bo‘lsa shu yerda davom etasiz.",
  },
  {
    question: "Narxlar qachon o‘zgaradi?",
    answer: "Zaxira va narx real vaqtda yangilanadi — buyurtma oldidan botdagi joriy qiymatni ko‘ring.",
  },
];

const FAQ_RU = [
  {
    question: "Где купить номер для Telegram?",
    answer: "@StarsPaymee_bot или Mini App → раздел номеров, 100+ стран, оплата в сумах.",
  },
  {
    question: "Сколько стоит самый дешёвый номер?",
    answer: "Бюджетные страны от ~6 600 сум — актуально в боте.",
  },
  {
    question: "Что значит «в наличии»?",
    answer: "Сколько слотов/аккаунтов доступно по выбранной стране.",
  },
  {
    question: "Можно ли второй аккаунт?",
    answer: "Да, с новым номером регистрируется новый аккаунт.",
  },
  {
    question: "Оплата UzCard?",
    answer: "Да, также HUMO, Click, Payme, Paynet.",
  },
  {
    question: "Не приходит SMS?",
    answer: "Выберите другую страну с большим остатком или проверьте сеть/VPN.",
  },
  {
    question: "Есть ли Premium и Stars?",
    answer: "Да, в том же боте по username.",
  },
  {
    question: "Меняются ли цены?",
    answer: "Да, смотрите актуальный каталог перед покупкой.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: [
    "telegram raqam",
    "telegram raqam sotib olish",
    "virtual telegram raqam",
    "telegram uchun raqam",
    "telegram sim karta",
    "arzon telegram raqam",
    "sms qabul qilish",
    "telegram sms",
    "telegram otp",
    "virtual number",
    "sms activate",
    "5sim",
    "grizzly sms",
    "telegram registratsiya raqami",
    "bir martalik raqam",
    "chet el raqami",
    "telegram verification code",
    "online sms",
  ],
  howToSteps: [
    { name: "Botni ochish", text: "@StarsPaymee_bot yoki Mini App → raqamlar." },
    { name: "Davlat tanlash", text: "Narx va zaxiraga qarab mamlakatni tanlang." },
    { name: "To‘lov", text: "UzCard/HUMO/Click/Payme/Paynet bilan so‘mda." },
    { name: "Telegram OTP", text: "Kodni qabul qilib ro‘yxatdan o‘ting." },
  ],
  locales: {
    uz: {
      title: "Telegram raqam sotib olish 2026 — qayerdan va qanday olish?",
      excerpt:
        "Virtual va haqiqiy raqamlar: 100+ davlat, arzon 6 600 so‘mdan, qimmat 56 300 so‘mgacha. SMS/OTP, botda zaxira, UzCard bilan to‘lov va xavfsizlik qo‘llanmasi.",
      metaTitle: "Telegram raqam sotib olish 2026 | Virtual raqamlar",
      metaDescription:
        "Telegram uchun raqam qayerdan olish: arzon va qimmat davlatlar, narxlar, SMS kod, @StarsPaymee_bot. 100+ davlat, so‘mda to‘lov. FAQ va qadamlar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Raqamni hozir tanlang",
      ctaBody: "@StarsPaymee_bot → raqamlar bo‘limida joriy narx va zaxirani ko‘ring. Keyin Premium yoki Stars kerak bo‘lsa — username bilan davom eting.",
      faq: FAQ_UZ,
    },
    ru: {
      title: "Купить номер для Telegram 2026 — где и как?",
      excerpt:
        "Виртуальные номера: 100+ стран, от ~6 600 сум, премиум до ~56 300 сум. SMS/OTP, остатки в боте, оплата картой Узбекистана.",
      metaTitle: "Купить номер Telegram 2026 | Виртуальные номера",
      metaDescription:
        "Где купить номер для Telegram: цены по странам, SMS-код, @StarsPaymee_bot, 100+ стран, оплата в сумах. FAQ и пошагово.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите номер сейчас",
      ctaBody: "@StarsPaymee_bot → раздел номеров. Premium или Stars — по username в том же боте.",
      faq: FAQ_RU,
    },
  },
};
