import { Link } from "@/i18n/navigation";
import { InlineCta, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { GamPaySeriesNav } from "@/components/blog/gampay-series-nav";
import { GAMES } from "@/lib/games";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "oyin-hisobini-toldirish";

/** Jadval — to‘qqizta o‘yin uchun bir xil ustunlar, ikkala tilda. */
function GamesTable({ locale }: { locale: "uz" | "ru" }) {
  const head =
    locale === "ru"
      ? ["Игра", "Что покупаете", "Что нужно ввести", "Доставка"]
      : ["O‘yin", "Nima olinadi", "Nima so‘raladi", "Yetkazish"];

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GAMES.map((g) => (
            <tr key={g.code}>
              <td>
                {g.blogSlug ? (
                  <Link href={`/blog/${g.blogSlug}`}>{g.title}</Link>
                ) : (
                  g.title
                )}
              </td>
              <td>{g.unit}</td>
              <td>{g.idLabel}</td>
              <td>{locale === "ru" ? g.eta.ru : g.eta.uz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      O‘yin hisobini O‘zbekistonda so‘mda to‘ldirish uchun xalqaro karta ham, VPN ham kerak emas.
      @StarsPaymee_bot dagi <strong>GamPay</strong> bo‘limida o‘yinni tanlaysiz, Player ID ni
      kiritasiz va UzCard, HUMO, Click yoki Payme bilan to‘laysiz. Hozirda 9 ta o‘yin va Steam
      hamyoni qo‘llab-quvvatlanadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="muammo">Nega O‘zbekistonda o‘yin to‘ldirish qiyin edi?</h2>
      <p>
        Mobil o‘yinlarning rasmiy do‘konlari to‘lovni Google Play yoki App Store balansi orqali
        qabul qiladi, ular esa o‘z navbatida xalqaro Visa yoki Mastercard so‘raydi. O‘zbekistondagi
        ko‘p o‘yinchida faqat UzCard yoki HUMO bor — natijada Royale Pass ham, olmos ham «sotib
        bo‘lmaydigan» narsaga aylanadi. Ba’zilar chet ellik do‘stidan so‘raydi, ba’zilar ishonchsiz
        sotuvchilarga pul o‘tkazadi.
      </p>
      <p>
        Player ID orqali to‘ldirish shu zanjirni butunlay chetlab o‘tadi: to‘lov mahalliy tizimda
        so‘mda o‘tadi, o‘yin valyutasi esa to‘g‘ridan-to‘g‘ri hisobingizga tushadi. Ilova do‘koni,
        valyuta konvertatsiyasi va VPN umuman ishtirok etmaydi.
      </p>

      <KeyFacts label="Asosiy faktlar">
        <li>9 ta o‘yin + Steam hamyoni</li>
        <li>To‘lov: UzCard, HUMO, Click, Payme — so‘mda</li>
        <li>Faqat ochiq Player ID kerak — parol hech qachon so‘ralmaydi</li>
        <li>Yetkazish: o‘yiniga qarab ~1 daqiqadan ~5 daqiqagacha</li>
        <li>Xalqaro karta, chet el hisobi yoki VPN talab qilinmaydi</li>
      </KeyFacts>

      <h2 id="oyinlar">Qaysi o‘yinlar qo‘llab-quvvatlanadi?</h2>
      <GamesTable locale="uz" />
      <p>
        Steam hamyoni ham shu bo‘limda —{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">
          Steam balansini so‘mda to‘ldirish
        </Link>{" "}
        maqolasida alohida yozilgan. To‘liq ro‘yxat va joriy holat{" "}
        <Link href="/gampay">GamPay sahifasida</Link>.
      </p>

      <h2 id="qadamlar">Qanday to‘ldiriladi — 4 qadam</h2>
      <Steps>
        <Step title="1. GamPay bo‘limini oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring va GamPay javonidan o‘yiningizni tanlang.
        </Step>
        <Step title="2. Player ID ni kiriting">
          Har bir o‘yinda ID boshqacha ataladi. MLBB va Magic Chess’da qavs ichidagi Server ID ni
          ham kiritish kerak, Asphalt 9’da esa platformani tanlaysiz.
        </Step>
        <Step title="3. Paketni tanlang">
          Narx so‘mda ko‘rinadi. Paketlar provayder katalogidan jonli keladi, shuning uchun
          yakuniy summani har doim botda ko‘rasiz.
        </Step>
        <Step title="4. To‘lang">
          UzCard, HUMO, Click yoki Payme orqali so‘mda to‘laysiz — valyuta va yetkazish avtomatik.
        </Step>
      </Steps>

      <InlineCta text="O‘yin hisobingizni so‘mda to‘ldiring — GamPay bo‘limida 9 ta o‘yin." />

      <h2 id="narx">Narx nega oldindan yozilmaydi?</h2>
      <p>
        Paket narxlari provayder katalogiga va valyuta kursiga bog‘liq — ular haftalar davomida
        o‘zgarib turadi. Saytga yozib qo‘yilgan raqam tez orada eskiradi va noto‘g‘ri va’daga
        aylanadi. Shuning uchun aniq summa har doim botda, buyurtmani tasdiqlashdan oldin
        ko‘rsatiladi: nima to‘layotganingizni bilib turib tasdiqlaysiz.
      </p>

      <h2 id="xavfsizlik">Xavfsizlik — nima so‘ralmaydi</h2>
      <InfoGrid>
        <InfoCard emoji="🚫" title="O‘yin paroli">
          Hech bir to‘ldirish xizmatiga o‘yin parolingizni bermang.
        </InfoCard>
        <InfoCard emoji="🚫" title="SMS yoki Telegram kodi">
          Kod so‘ragan har qanday odam — firibgar. Bu hisobni o‘g‘irlash usuli.
        </InfoCard>
        <InfoCard emoji="✅" title="Faqat Player ID">
          U ochiq ma’lumot: o‘yin ichida boshqalar ham ko‘radi, hisobni boshqarib bo‘lmaydi.
        </InfoCard>
        <InfoCard emoji="🧾" title="Buyurtma tarixi">
          Har bir to‘lov botda saqlanadi — muammo bo‘lsa ID bilan murojaat qilasiz.
        </InfoCard>
      </InfoGrid>
      <p>
        Bu mavzu batafsil{" "}
        <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">onlayn to‘lovda karta xavfsizligi</Link>{" "}
        maqolasida yozilgan.
      </p>

      <h2 id="telegram">O‘yin valyutasi va Telegram Stars — farqi nima?</h2>
      <p>
        Telegram Stars — Telegram ekotizimi ichidagi valyuta: botlar, mini-ilovalar va sovg‘alar
        uchun ishlatiladi. O‘yin valyutasi (UC, olmos, CP) esa faqat o‘sha o‘yin ichida amal
        qiladi va ular bir-biriga aylanmaydi. Taqqoslash{" "}
        <Link href="/blog/telegram-stars-vs-robux-vbucks-uc">
          Stars va boshqa o‘yin valyutalari
        </Link>{" "}
        maqolasida.
      </p>

      <GamPaySeriesNav locale="uz" />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы пополнить игровой аккаунт в Узбекистане за сумы, не нужны ни международная карта, ни
      VPN. В разделе <strong>GamPay</strong> в @StarsPaymee_bot вы выбираете игру, вводите Player
      ID и платите картой UzCard, HUMO, через Click или Payme. Сейчас поддерживаются 9 игр и
      кошелёк Steam.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="muammo">Почему пополнять игры в Узбекистане было сложно?</h2>
      <p>
        Официальные магазины мобильных игр принимают оплату через баланс Google Play или App
        Store, а те, в свою очередь, требуют международную Visa или Mastercard. У многих игроков в
        Узбекистане есть только UzCard или HUMO — и Royale Pass или алмазы становятся «недоступной»
        покупкой. Кто-то просит друзей за границей, кто-то переводит деньги ненадёжным продавцам.
      </p>
      <p>
        Пополнение по Player ID убирает эту цепочку целиком: оплата проходит в локальной системе в
        сумах, а игровая валюта поступает прямо на аккаунт. Магазин приложений, конвертация валюты
        и VPN вообще не участвуют.
      </p>

      <KeyFacts label="Ключевые факты">
        <li>9 игр + кошелёк Steam</li>
        <li>Оплата: UzCard, HUMO, Click, Payme — в сумах</li>
        <li>Нужен только открытый Player ID — пароль не спрашивают никогда</li>
        <li>Доставка: от ~1 до ~5 минут в зависимости от игры</li>
        <li>Международная карта, зарубежный аккаунт и VPN не требуются</li>
      </KeyFacts>

      <h2 id="oyinlar">Какие игры поддерживаются?</h2>
      <GamesTable locale="ru" />
      <p>
        Кошелёк Steam тоже в этом разделе — про него отдельно в статье{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">
          пополнение баланса Steam в сумах
        </Link>
        . Полный список и текущее состояние — на <Link href="/gampay">странице GamPay</Link>.
      </p>

      <h2 id="qadamlar">Как пополнить — 4 шага</h2>
      <Steps>
        <Step title="1. Откройте раздел GamPay">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram и выберите свою игру в списке GamPay.
        </Step>
        <Step title="2. Введите Player ID">
          В каждой игре ID называется по-своему. В MLBB и Magic Chess нужен ещё Server ID в
          скобках, а в Asphalt 9 выбирается платформа.
        </Step>
        <Step title="3. Выберите пакет">
          Цена показывается в сумах. Пакеты приходят из каталога поставщика вживую, поэтому
          итоговую сумму вы всегда видите в боте.
        </Step>
        <Step title="4. Оплатите">
          Платите в сумах через UzCard, HUMO, Click или Payme — валюта и доставка автоматические.
        </Step>
      </Steps>

      <InlineCta text="Пополните игровой аккаунт в сумах — 9 игр в разделе GamPay." />

      <h2 id="narx">Почему цена не указана заранее?</h2>
      <p>
        Цены пакетов зависят от каталога поставщика и курса валют — они меняются неделями.
        Записанное на сайте число быстро устаревает и превращается в неверное обещание. Поэтому
        точная сумма всегда показывается в боте, до подтверждения заказа: вы подтверждаете, зная,
        сколько платите.
      </p>

      <h2 id="xavfsizlik">Безопасность — что не спрашивают</h2>
      <InfoGrid>
        <InfoCard emoji="🚫" title="Игровой пароль">
          Никогда не сообщайте пароль от игры сервисам пополнения.
        </InfoCard>
        <InfoCard emoji="🚫" title="Код из SMS или Telegram">
          Любой, кто просит код, — мошенник. Так угоняют аккаунты.
        </InfoCard>
        <InfoCard emoji="✅" title="Только Player ID">
          Это открытые данные: их видят другие игроки, управлять аккаунтом с ними нельзя.
        </InfoCard>
        <InfoCard emoji="🧾" title="История заказов">
          Каждая оплата сохраняется в боте — при проблеме обращаетесь с ID.
        </InfoCard>
      </InfoGrid>
      <p>
        Подробнее — в статье{" "}
        <Link href="/blog/onlayn-tolovda-karta-xavfsizligi">безопасность карты при онлайн-оплате</Link>
        .
      </p>

      <h2 id="telegram">Чем игровая валюта отличается от Telegram Stars?</h2>
      <p>
        Telegram Stars — валюта внутри экосистемы Telegram: для ботов, мини-приложений и подарков.
        Игровая валюта (UC, алмазы, CP) действует только внутри своей игры, и одна в другую не
        конвертируется. Сравнение — в статье{" "}
        <Link href="/blog/telegram-stars-vs-robux-vbucks-uc">
          Stars и другие игровые валюты
        </Link>
        .
      </p>

      <GamPaySeriesNav locale="ru" />
    </>
  );
}

const uzFaq = [
  {
    question: "O‘yin hisobini so‘mda to‘ldirsa bo‘ladimi?",
    answer:
      "Ha. @StarsPaymee_bot dagi GamPay bo‘limida UzCard, HUMO, Click yoki Payme orqali O‘zbek so‘mida to‘laysiz.",
  },
  {
    question: "Qaysi o‘yinlar bor?",
    answer:
      "PUBG Mobile, Mobile Legends, Free Fire, Call of Duty Mobile, Honor of Kings, Magic Chess: Go Go, Delta Force, Asphalt 9, Bigo Live va Steam hamyoni.",
  },
  {
    question: "Xalqaro Visa yoki Mastercard kerakmi?",
    answer: "Yo‘q. Mahalliy UzCard va HUMO kartalari, Click va Payme yetarli.",
  },
  { question: "VPN kerakmi?", answer: "Yo‘q. To‘lov ham, yetkazish ham O‘zbekistondan ishlaydi." },
  {
    question: "Parol so‘raladimi?",
    answer:
      "Hech qachon. Faqat ochiq Player ID kerak. Parol yoki SMS kod so‘ragan xizmat — firibgar.",
  },
  {
    question: "Qancha vaqtda tushadi?",
    answer:
      "O‘yiniga qarab ~1 daqiqadan ~5 daqiqagacha. Mobile Legends eng tez, Delta Force va Asphalt 9 biroz uzunroq.",
  },
  {
    question: "Narxni oldindan ko‘rsam bo‘ladimi?",
    answer: "Ha. Bot buyurtmani tasdiqlashdan oldin yakuniy summani so‘mda ko‘rsatadi.",
  },
  {
    question: "Do‘stimning hisobini to‘ldirsam bo‘ladimi?",
    answer: "Ha. Buyurtmada uning Player ID sini kiritsangiz kifoya.",
  },
  {
    question: "Player ID ni qayerdan topaman?",
    answer:
      "Har bir o‘yinda profil bo‘limida, ism ostida ko‘rsatiladi. Aniq joyi har bir o‘yinning alohida maqolasida yozilgan.",
  },
  {
    question: "Noto‘g‘ri ID kiritsam nima bo‘ladi?",
    answer:
      "Valyuta boshqa hisobga tushadi va uni qaytarib bo‘lmaydi. Shuning uchun bot tasdiqlashdan oldin ID ni ko‘rsatadi — o‘sha yerda tekshiring.",
  },
  {
    question: "Valyuta kelmasa nima qilaman?",
    answer:
      "Avval o‘yinni qayta ishga tushiring — balans ba’zan kechikib yangilanadi. Keyin @StarsPaymeeSupport ga buyurtma ID bilan yozing.",
  },
  {
    question: "O‘yin valyutasini Telegram Stars’ga aylantirsa bo‘ladimi?",
    answer:
      "Yo‘q. Bular alohida tizimlar: Stars Telegram ichida, o‘yin valyutasi esa faqat o‘sha o‘yinda amal qiladi.",
  },
  { question: "Bot qachon ishlaydi?", answer: "24/7. Buyurtmani istalgan vaqtda berish mumkin." },
  {
    question: "Yordam kerak bo‘lsa kimga yozaman?",
    answer: "@StarsPaymeeSupport — buyurtma ID bilan yozsangiz tezroq yordam beriladi.",
  },
];

const ruFaq = [
  {
    question: "Можно ли пополнить игровой аккаунт в сумах?",
    answer:
      "Да. В разделе GamPay в @StarsPaymee_bot вы платите в узбекских сумах через UzCard, HUMO, Click или Payme.",
  },
  {
    question: "Какие игры доступны?",
    answer:
      "PUBG Mobile, Mobile Legends, Free Fire, Call of Duty Mobile, Honor of Kings, Magic Chess: Go Go, Delta Force, Asphalt 9, Bigo Live и кошелёк Steam.",
  },
  {
    question: "Нужна ли международная Visa или Mastercard?",
    answer: "Нет. Достаточно локальных карт UzCard и HUMO, а также Click и Payme.",
  },
  { question: "Нужен ли VPN?", answer: "Нет. И оплата, и доставка работают из Узбекистана." },
  {
    question: "Спрашивают ли пароль?",
    answer:
      "Никогда. Нужен только открытый Player ID. Сервис, который просит пароль или код из SMS, — мошеннический.",
  },
  {
    question: "За сколько поступает?",
    answer:
      "От ~1 до ~5 минут в зависимости от игры. Mobile Legends быстрее всех, Delta Force и Asphalt 9 чуть дольше.",
  },
  {
    question: "Можно ли увидеть цену заранее?",
    answer: "Да. Бот показывает итоговую сумму в сумах до подтверждения заказа.",
  },
  {
    question: "Можно ли пополнить аккаунт друга?",
    answer: "Да. Достаточно указать его Player ID в заказе.",
  },
  {
    question: "Где найти Player ID?",
    answer:
      "В каждой игре он показан в профиле под именем. Точное место описано в отдельной статье по каждой игре.",
  },
  {
    question: "Что будет, если ввести неверный ID?",
    answer:
      "Валюта уйдёт на чужой аккаунт, и вернуть её нельзя. Поэтому бот показывает ID перед подтверждением — проверьте его там.",
  },
  {
    question: "Что делать, если валюта не пришла?",
    answer:
      "Сначала перезапустите игру — баланс иногда обновляется с задержкой. Затем напишите в @StarsPaymeeSupport с ID заказа.",
  },
  {
    question: "Можно ли обменять игровую валюту на Telegram Stars?",
    answer:
      "Нет. Это разные системы: Stars работают внутри Telegram, игровая валюта — только внутри своей игры.",
  },
  { question: "Когда работает бот?", answer: "24/7. Заказ можно оформить в любое время." },
  {
    question: "Куда писать за помощью?",
    answer: "@StarsPaymeeSupport — с ID заказа помогут быстрее.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "O‘yinlar",
  type: "howto",
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
  keywords: [
    "o‘yin hisobini to‘ldirish",
    "oyin toldirish uzbekistan",
    "o‘yin valyutasi so‘mda",
    "game top up uzbekistan",
    "пополнение игрового аккаунта узбекистан",
    "пополнить игру в сумах",
    "gampay",
  ],
  howToSteps: [
    {
      name: "GamPay bo‘limini oching",
      text: "@StarsPaymee_bot ni ishga tushiring va GamPay javonidan o‘yiningizni tanlang.",
    },
    {
      name: "Player ID ni kiriting",
      text: "O‘yin profilidagi ID raqamini kiriting. Ba’zi o‘yinlarda Server ID yoki platforma ham so‘raladi.",
    },
    {
      name: "Paketni tanlang",
      text: "Kerakli miqdorni belgilang — narx so‘mda, tasdiqlashdan oldin ko‘rinadi.",
    },
    {
      name: "To‘lovni amalga oshiring",
      text: "UzCard, HUMO, Click yoki Payme orqali so‘mda to‘lang.",
    },
  ],
  locales: {
    uz: {
      title: "O‘yin hisobini so‘mda to‘ldirish — 9 ta o‘yin uchun qo‘llanma",
      excerpt:
        "PUBG UC, MLBB va Free Fire olmos, CODM CP — O‘zbekistonda mahalliy karta bilan so‘mda. Player ID, narx, yetkazish va xavfsizlik bo‘yicha to‘liq qo‘llanma.",
      metaTitle: "O‘yin hisobini so‘mda to‘ldirish — 9 o‘yin uchun qo‘llanma",
      metaDescription:
        "O‘zbekistonda o‘yin hisobini so‘mda to‘ldirish: PUBG UC, MLBB va Free Fire olmos, CODM CP. UzCard, HUMO, Click, Payme. Faqat Player ID kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘yin hisobingizni hoziroq to‘ldiring",
      ctaBody:
        "@StarsPaymee_bot dagi GamPay bo‘limida o‘yinni tanlang, Player ID ni kiriting va so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение игрового аккаунта в сумах — гайд по 9 играм",
      excerpt:
        "UC для PUBG, алмазы MLBB и Free Fire, CP для CODM — в Узбекистане локальной картой в сумах. Player ID, цена, доставка и безопасность.",
      metaTitle: "Пополнение игрового аккаунта в сумах — гайд по 9 играм",
      metaDescription:
        "Пополнение игрового аккаунта в Узбекистане за сумы: UC для PUBG, алмазы MLBB и Free Fire, CP для CODM. UzCard, HUMO, Click, Payme. Нужен только Player ID.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните игровой аккаунт сейчас",
      ctaBody:
        "Откройте раздел GamPay в @StarsPaymee_bot, выберите игру, введите Player ID и оплатите в сумах.",
      faq: ruFaq,
    },
  },
};
