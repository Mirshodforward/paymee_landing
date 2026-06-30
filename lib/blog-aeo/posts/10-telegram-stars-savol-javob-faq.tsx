import { Link } from "@/i18n/navigation";
import { InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-savol-javob-faq";

function UzAnswer() {
  return (
    <p>
      Telegram Stars — Telegram’ning rasmiy ichki valyutasi; sovg‘a, Premium, bot to‘lovlari va reaksiyalar uchun
      ishlatiladi. O‘zbekistonda uni @StarsPaymee_bot orqali UzCard/HUMO/Click/Payme bilan so‘mda, 10 soniyada,
      parolsiz olish mumkin. Quyida Stars, Premium va Gifts bo‘yicha eng ko‘p so‘raladigan savollarga qisqa javoblar.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">Telegram Stars, Premium va Gifts — qisqa savol-javob</h2>
      <p>
        Bu maqola eng ko‘p beriladigan savollarni bir joyda jamlaydi. Har bir javob qisqa va aniq. Aniq amaliy
        qadamlar uchun{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link>,{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium eng oson usul»</Link> va{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Gifts qanday yuboriladi»</Link> maqolalarini
        ko‘ring. Joriy narxlar — <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> va{" "}
        <Link href="/gifts">Gifts</Link> sahifalarida.
      </p>

      <InlineCta text="Savolingizga javob topdingizmi? Botda buyurtma bering." />

      <h2 id="savollar">Batafsil savollar</h2>
      <p>
        Quyidagi ro‘yxatda Stars nimaligi, narxi, xavfsizligi, Premium va sovg‘alar bo‘yicha barcha asosiy savollar
        yig‘ilgan. Kerakli savolni bosib, javobni oching.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Stars — официальная внутренняя валюта Telegram; используется для подарков, Premium, оплаты в ботах и
      реакций. В Узбекистане их можно купить через @StarsPaymee_bot картой UzCard/HUMO/Click/Payme в сумах, за 10
      секунд, без пароля. Ниже — краткие ответы на самые частые вопросы про Stars, Premium и Gifts.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Telegram Stars, Premium и Gifts — кратко в вопросах и ответах</h2>
      <p>
        Эта статья собирает самые частые вопросы в одном месте. Каждый ответ краткий и точный. За конкретными шагами
        смотрите{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>,{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Самый простой способ Premium»</Link> и{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Как отправить Gifts»</Link>. Актуальные цены — на
        страницах <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> и{" "}
        <Link href="/gifts">Gifts</Link>.
      </p>

      <InlineCta text="Нашли ответ на свой вопрос? Оформите заказ в боте." />

      <h2 id="savollar">Подробные вопросы</h2>
      <p>
        В списке ниже собраны все основные вопросы: что такое Stars, цена, безопасность, Premium и подарки. Нажмите на
        нужный вопрос, чтобы открыть ответ.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ Premium" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Stars nima?", answer: "Telegram Stars (yulduzchalar) — Telegram’ning rasmiy ichki raqamli valyutasi. Sovg‘a, Premium hadya, bot/Mini App to‘lovlari, paid messages va reaksiyalar uchun ishlatiladi." },
  { question: "Telegram Stars qanday olinadi?", answer: "O‘zbekistonda eng oson yo‘l — @StarsPaymee_bot yoki Mini App orqali UzCard/HUMO/Click/Payme bilan so‘mda. Yulduzlar @username’ga 10 soniyada tushadi." },
  { question: "Bir Telegram Star qancha turadi?", answer: "Bazaviy qiymatni Telegram dollarda belgilaydi (~0,013 $). StarsPaymee’da yulduz donasi taxminan 220 so‘mdan; aniq narx paket va kursga bog‘liq." },
  { question: "Stars sotib olish uchun parol kerakmi?", answer: "Yo‘q. Stars to‘g‘ridan-to‘g‘ri Telegram tomonidan @username’ga ulanadi; parol, SMS-kod yoki 2FA so‘ralmaydi." },
  { question: "Eng kichik paket qancha?", answer: "Eng kichik paket — 50 yulduzcha, narxi 11 000 so‘m." },
  { question: "Stars qanday ishlatiladi?", answer: "Sovg‘a yuborish, Premium hadya, bot/Mini App xaridlari, Star Reactions, paid messages va pulli kontent uchun." },
  { question: "Premium olish mumkinmi?", answer: "Ha. StarsPaymee’da Premium’ni username orqali (3/6/12 oy) yoki login orqali (1 oy, 1 yil) olish mumkin." },
  { question: "Gift (sovg‘a) yuborish mumkinmi?", answer: "Ha. Botda «Gifts» bo‘limidan sovg‘ani tanlab, @username kiritib, so‘mda to‘lab yuborasiz." },
  { question: "Refund (qaytarish) bormi?", answer: "Telegram Stars’ni qaytarmaydi (final sale). Lekin StarsPaymee texnik sabab bilan yetkaza olmasa, to‘lovni to‘liq qaytaradi." },
  { question: "Username kerakmi?", answer: "Ha. Yulduz va Premium aynan @username’ga yetkaziladi, shuning uchun u to‘g‘ri kiritilishi muhim." },
  { question: "SMS-kod kerakmi?", answer: "Username orqali oqimda kerak emas. Faqat login orqali rasmiy oqimda kirish talab qilinadi." },
  { question: "Stars yo‘qoladimi yoki kuyib ketadimi?", answer: "Yo‘q, Stars muddatsiz. Lekin akkaunt o‘chirilsa yoki kirish yo‘qolsa, balans qaytarilmaydi." },
  { question: "Stars’ni boshqa odamga o‘tkazsa bo‘ladimi?", answer: "To‘g‘ridan-to‘g‘ri pul ko‘rinishida emas, lekin sovg‘a yoki Star Reaction orqali yuborish mumkin." },
  { question: "Stars’ni pulga aylantirsa bo‘ladimi?", answer: "Oddiy foydalanuvchi — yo‘q. Faqat kreatorlar ishlab topgan Stars’ni Fragment orqali pulga chiqaradi." },
  { question: "Qaysi to‘lov usullari qabul qilinadi?", answer: "Click, Payme, Paynet, UzCard, HUMO va istalgan O‘zbekiston bank kartasi — so‘mda." },
  { question: "Xorijiy karta yoki kripto kerakmi?", answer: "Yo‘q. StarsPaymee mahalliy kartalar bilan so‘mda ishlaydi; Visa/Mastercard yoki TON kerak emas." },
  { question: "Yulduzlar qancha vaqtda yetkaziladi?", answer: "To‘lov tasdiqlangach o‘rtacha 10 soniyada avtomatik. Tarmoq yukida biroz cho‘zilishi mumkin." },
  { question: "To‘lov o‘tdi-yu, yulduz kelmasa-chi?", answer: "Statusni yangilang, @username’ni tekshiring, kuting. Kelmasa @StarsPaymeeSupport’ga buyurtma ID bilan yozing." },
  { question: "StarsPaymee ishonchlimi?", answer: "Ha — 1+ yil xizmat, 4000+ foydalanuvchi, 100 000+ buyurtma, parol so‘ralmaydi va refund siyosati bor." },
  { question: "Premium muddati tugasa nima bo‘ladi?", answer: "Akkaunt bloklanmaydi; faqat Premium imtiyozlari to‘xtaydi. Istalgan vaqtda qayta faollashtirasiz." },
  { question: "Qaysi Premium muddati tejamkor?", answer: "12 oylik paket oyiga hisoblaganda eng arzon (422 000 so‘m)." },
  { question: "Premium’ni do‘stga sovg‘a qilsa bo‘ladimi?", answer: "Ha. Qabul qiluvchi maydoniga do‘stingizning @username’ini kiriting." },
  { question: "Telegram Stars va TON farqi nima?", answer: "Stars — Telegram ichidagi valyuta (akkauntga bog‘liq), TON — mustaqil blokcheyn kriptosi (tashqi hamyonda)." },
  { question: "Stars qancha amal qiladi?", answer: "Muddatsiz — akkaunt faol turguncha balansda qoladi." },
  { question: "Sovg‘ani anonim yuborsa bo‘ladimi?", answer: "Ha, yuborishda anonimlikni tanlasangiz, ismingiz ko‘rinmaydi." },
  { question: "Mini App nima?", answer: "Telegram ichida ochiladigan ilova — narx, katalog va buyurtmani bitta interfeysda boshqarish imkonini beradi." },
  { question: "Bir nechta akkauntga olsa bo‘ladimi?", answer: "Ha. Har bir buyurtmada kerakli @username’ni kiritsangiz, mahsulot o‘sha akkauntga yetkaziladi." },
  { question: "Narxlar nega o‘zgarib turadi?", answer: "Valyuta kursi, to‘lov komissiyasi va platforma siyosati ta’sir qiladi; xariddan oldin joriy narxni tekshiring." },
  { question: "Firibgarlikdan qanday saqlanaman?", answer: "Parol/SMS so‘raydiganlardan, bozordan keskin past narxdan va ofertasiz xizmatlardan ehtiyot bo‘ling." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — qo‘llab-quvvatlash kanali; buyurtma ID bilan yozsangiz tezroq yordam beriladi." },
];

const ruFaq = [
  { question: "Что такое Telegram Stars?", answer: "Telegram Stars (звёзды) — официальная внутренняя цифровая валюта Telegram. Используется для подарков, дарения Premium, оплаты в ботах/Mini App, paid messages и реакций." },
  { question: "Как купить Telegram Stars?", answer: "В Узбекистане проще всего через @StarsPaymee_bot или Mini App картой UzCard/HUMO/Click/Payme в сумах. Звёзды поступают на @username за 10 секунд." },
  { question: "Сколько стоит одна Telegram Star?", answer: "Базовую стоимость Telegram задаёт в долларах (~0,013 $). В StarsPaymee звезда — примерно от 220 сум; точная цена зависит от пакета и курса." },
  { question: "Нужен ли пароль для покупки Stars?", answer: "Нет. Stars зачисляются напрямую от Telegram на @username; пароль, SMS-код или 2FA не требуются." },
  { question: "Сколько стоит минимальный пакет?", answer: "Минимальный пакет — 50 звёзд за 11 000 сум." },
  { question: "Как используются Stars?", answer: "Для подарков, дарения Premium, покупок в ботах/Mini App, Star Reactions, paid messages и платного контента." },
  { question: "Можно ли купить Premium?", answer: "Да. В StarsPaymee Premium доступен по username (3/6/12 мес) или через логин (1 мес, 1 год)." },
  { question: "Можно ли отправить подарок (Gift)?", answer: "Да. В разделе «Gifts» выберите подарок, введите @username и оплатите в сумах." },
  { question: "Есть ли возврат (refund)?", answer: "Telegram не возвращает Stars (final sale). Но StarsPaymee при невозможности доставки по техпричине возвращает оплату полностью." },
  { question: "Нужен ли username?", answer: "Да. Звёзды и Premium доставляются именно на @username, поэтому важно ввести его верно." },
  { question: "Нужен ли SMS-код?", answer: "В потоке по username — нет. Вход требуется только в официальном потоке через логин." },
  { question: "Сгорают ли Stars?", answer: "Нет, Stars бессрочные. Но при удалении аккаунта или потере доступа баланс не возвращается." },
  { question: "Можно ли передать Stars другому?", answer: "Напрямую деньгами — нет, но можно отправить через подарок или Star Reaction." },
  { question: "Можно ли обналичить Stars?", answer: "Обычный пользователь — нет. Только авторы выводят заработанные Stars через Fragment." },
  { question: "Какие способы оплаты принимаются?", answer: "Click, Payme, Paynet, UzCard, HUMO и любая банковская карта Узбекистана — в сумах." },
  { question: "Нужна ли зарубежная карта или крипта?", answer: "Нет. StarsPaymee работает локальными картами в сумах; Visa/Mastercard или TON не нужны." },
  { question: "За какое время доставляются звёзды?", answer: "После подтверждения оплаты в среднем за 10 секунд автоматически. При нагрузке сети возможна небольшая задержка." },
  { question: "Оплата прошла, но звёзды не пришли?", answer: "Обновите статус, проверьте @username, подождите. Если нет — напишите @StarsPaymeeSupport с ID заказа." },
  { question: "Надёжен ли StarsPaymee?", answer: "Да — 1+ год работы, 4000+ пользователей, 100 000+ заказов, не спрашивают пароль и есть возврат." },
  { question: "Что будет, когда закончится Premium?", answer: "Аккаунт не блокируется; отключаются только привилегии Premium. Активировать снова можно в любой момент." },
  { question: "Какой срок Premium выгоднее?", answer: "Годовой пакет дешевле всего за месяц (422 000 сум)." },
  { question: "Можно ли подарить Premium другу?", answer: "Да. Введите @username друга в поле получателя." },
  { question: "Чем отличаются Telegram Stars и TON?", answer: "Stars — валюта внутри Telegram (привязана к аккаунту), TON — независимая крипта блокчейна (во внешнем кошельке)." },
  { question: "Сколько действуют Stars?", answer: "Бессрочно — пока аккаунт активен, баланс сохраняется." },
  { question: "Можно ли отправить подарок анонимно?", answer: "Да, если выбрать анонимность при отправке, ваше имя не будет видно." },
  { question: "Что такое Mini App?", answer: "Приложение, открывающееся внутри Telegram — позволяет видеть цену, каталог и заказ в одном интерфейсе." },
  { question: "Можно ли купить на несколько аккаунтов?", answer: "Да. В каждом заказе указывайте нужный @username — товар поступит на этот аккаунт." },
  { question: "Почему цены меняются?", answer: "Влияют курс валюты, комиссия оплаты и политика платформы; проверяйте актуальную цену перед покупкой." },
  { question: "Как защититься от мошенников?", answer: "Остерегайтесь тех, кто просит пароль/SMS, цен сильно ниже рынка и сервисов без оферты." },
  { question: "Куда писать, если нужна помощь?", answer: "@StarsPaymeeSupport — канал поддержки; с ID заказа помогут быстрее." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  keywords: [
    "telegram stars savol javob",
    "telegram stars faq",
    "telegram stars haqida savollar",
    "telegram premium savollar",
    "telegram stars nima",
    "telegram stars qanday ishlaydi",
  ],
  locales: {
    uz: {
      title: "Telegram Stars bo‘yicha eng ko‘p so‘raladigan savollar (FAQ 2026)",
      excerpt:
        "Telegram Stars, Premium va Gifts haqida 30+ savol-javob: narx, xavfsizlik, yetkazib berish, refund, username, to‘lov usullari va boshqalar — bitta joyda.",
      metaTitle: "Telegram Stars FAQ — eng ko‘p so‘raladigan savollar 2026",
      metaDescription:
        "Telegram Stars, Premium va Gifts bo‘yicha eng ko‘p so‘raladigan savollar: narx, xavfsizlik, yetkazib berish, refund, username, to‘lov — qisqa javoblar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Tayyormisiz? Botda boshlang",
      ctaBody: "Stars, Premium yoki sovg‘ani botda so‘mda oling — parolsiz, 10 soniyada yetkaziladi.",
      faq: uzFaq,
    },
    ru: {
      title: "Самые частые вопросы про Telegram Stars (FAQ 2026)",
      excerpt:
        "30+ вопросов и ответов про Telegram Stars, Premium и Gifts: цена, безопасность, доставка, возврат, username, способы оплаты и другое — в одном месте.",
      metaTitle: "Telegram Stars FAQ — самые частые вопросы 2026",
      metaDescription:
        "Самые частые вопросы про Telegram Stars, Premium и Gifts: цена, безопасность, доставка, возврат, username, оплата — краткие ответы в одном месте.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Готовы? Начните в боте",
      ctaBody: "Возьмите Stars, Premium или подарок в боте в сумах — без пароля, доставка за 10 секунд.",
      faq: ruFaq,
    },
  },
};
