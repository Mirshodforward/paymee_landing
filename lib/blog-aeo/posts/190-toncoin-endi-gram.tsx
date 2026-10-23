import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "toncoin-endi-gram";

/**
 * Toncoin → Gram rebrendingi (2026-06-15): Telegram foydalanuvchisi uchun nima o'zgardi.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-22): «toncoin gram», «ton gram nomi o'zgardi»,
 * «toncoin переименован в gram» — yangilik/izoh niyati; saytda umuman yo'q edi
 * (TON faqat NFT narxlari va 55-maqolada ekotizim sifatida tilga olingan).
 * Maqola rebrendingni tushuntiradi, firibgarlikdan ogohlantiradi va StarsPaymee
 * mijozi uchun hech narsa o'zgarmaganini (narx so'mda, hamyon kerak emas) aytadi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-22): ton.org («Gram is the native coin of the TON
 * blockchain… The coin was also known as Toncoin»), TON rasmiy e'loni (X article),
 * fragment.com/about («Grams ($GRAM)»), CoinMarketCap Academy, crypto.news,
 * KuCoin/Kaiko xabarlari — ovoz 1–8 iyun, 81,22%, kuchga kirish 15 iyun 2026.
 * Kuchga kirish SOATI manbalarda farq qiladi (12:00 / 20:00 UTC) — ataylab
 * yozilmagan. StarsPaymee Gram sotmaydi va Gram'da to'lov olmaydi
 * (bot paymentMethods'da kripto yo'q) — shu asosda yozilgan.
 *
 * Narxlar konstantalardan: STARS_PER_UNIT_UZS / STARS_PER_UNIT_GATEWAY_UZS,
 * PREMIUM_PLANS (karta narxi, 1 oylik ataylab ko'rsatilmaydi).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");

function PriceTables({ locale }: { locale: Locale }) {
  const copy = {
    uz: { s: ["Stars", "Karta · balans", "Click · Payme · Uzum · Paynet"], p: ["Premium", "Karta · balans"], mo: "oy", unit: "so‘m" },
    ru: { s: ["Stars", "Карта · баланс", "Click · Payme · Uzum · Paynet"], p: ["Premium", "Карта · баланс"], mo: "мес", unit: "сум" },
    en: { s: ["Stars", "Card · balance", "Click · Payme · Uzum · Paynet"], p: ["Premium", "Card · balance"], mo: "months", unit: "som" },
  }[locale];
  return (
    <>
      <CompareTable
        headers={copy.s}
        rows={[100, 500, 1000].map((n) => [
          <strong key="n">{`${fmt(n, locale)} ⭐`}</strong>,
          `${fmt(n * STARS_PER_UNIT_UZS, locale)} ${copy.unit}`,
          `${fmt(n * STARS_PER_UNIT_GATEWAY_UZS, locale)} ${copy.unit}`,
        ])}
      />
      <CompareTable
        headers={copy.p}
        rows={PREMIUM_PLANS.filter((p) => p.months !== 1).map((p) => [
          <strong key="m">{`${p.months} ${copy.mo}`}</strong>,
          `${fmt(p.priceUzs, locale)} ${copy.unit}`,
        ])}
      />
    </>
  );
}

const SOURCES = {
  ton: "https://ton.org",
  announce: "https://x.com/ton_blockchain/article/2064322586368970830",
  fragment: "https://fragment.com/about",
  cmc: "https://coinmarketcap.com/academy/article/toncoin-rebrands-to-gram",
  cryptoNews: "https://crypto.news/what-is-gram-the-complete-guide-to-the-toncoin-rebrand/",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      2026-yil 15-iyundan TON blokcheynining asosiy tangasi <b>Toncoin (TON)</b> rasman <b>Gram (GRAM)</b> deb
      ataladi — bu jamoatchilik ovozi natijasi (81,22% «ha»). O‘zgargani faqat nom, ticker va logotip: blokcheyn
      avvalgidek The Open Network, balanslar 1:1 saqlandi, hamyon manzillari o‘sha-o‘sha, swap yoki claim kerak
      emas. StarsPaymee’da Stars va Premium so‘mda sotiladi — sizga Gram kerak bo‘lmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima-boldi", label: "Nima bo‘ldi — sanalar va raqamlar" },
          { href: "#ozgardi", label: "Nima o‘zgardi va nima o‘zgarmadi" },
          { href: "#tarix", label: "Nega aynan Gram — nomning tarixi" },
          { href: "#telegram", label: "Telegram, Fragment va Stars’da bu qanday ko‘rinadi" },
          { href: "#tekshiruv", label: "Sizda TON bo‘lsa — 3 qadam" },
          { href: "#firibgarlik", label: "Firibgarlikdan ehtiyot bo‘ling" },
          { href: "#starspaymee", label: "StarsPaymee foydalanuvchilari uchun nima o‘zgaradi" },
        ]}
      />

      <h2 id="nima-boldi">Nima bo‘ldi — sanalar va raqamlar</h2>
      <p>
        2026-yil iyun boshida TON jamoasi <b>TON Vote</b> platformasida tanganing nomini o‘zgartirish bo‘yicha ovoz
        berish o‘tkazdi. Taklif muallifi sifatida Telegram’ning tasdiqlangan hisobi ko‘rsatilgan, Pavel Durov esa
        o‘zgarishni ochiq qo‘llab-quvvatladi. Ovoz berish 8-iyunda yakunlandi: ishtirok etgan ovozlarning 81,22%
        «ha» dedi. 15-iyundan boshlab tanga rasman <b>Gram</b>, birja tickeri — <b>GRAM</b>.
      </p>
      <KeyFacts label="Asosiy faktlar">
        <li>
          <b>Ovoz berish:</b> 1–8 iyun 2026, TON Vote platformasi; 81,22% qo‘llab-quvvatladi.
        </li>
        <li>
          <b>Kuchga kirdi:</b> 15-iyun 2026.
        </li>
        <li>
          <b>Nom va ticker:</b> Toncoin (TON) → Gram (GRAM); logotip yangilandi.
        </li>
        <li>
          <b>Blokcheyn:</b> The Open Network (TON) — nomi o‘zgarmadi.
        </li>
        <li>
          <b>Egalar uchun harakat:</b> kerak emas — balans avtomatik GRAM deb ko‘rsatiladi.
        </li>
      </KeyFacts>

      <h2 id="ozgardi">Nima o‘zgardi va nima o‘zgarmadi</h2>
      <CompareTable
        headers={["", "15-iyungacha", "15-iyundan"]}
        rows={[
          [<strong key="a">Tanga nomi</strong>, "Toncoin", "Gram"],
          [<strong key="b">Ticker</strong>, "TON", "GRAM"],
          [<strong key="c">Logotip</strong>, "eski", "yangilangan"],
          [<strong key="d">Blokcheyn</strong>, "The Open Network (TON)", "The Open Network (TON) — o‘sha"],
          [<strong key="e">Balans</strong>, "10 TON", "10 GRAM — 1:1"],
          [<strong key="f">Hamyon manzili</strong>, "—", "o‘zgarmadi"],
          [<strong key="g">Smart-kontrakt, NFT, jetton, steyking</strong>, "ishlaydi", "o‘zgarishsiz ishlaydi"],
          [<strong key="h">Swap, claim, migratsiya</strong>, "—", "kerak emas"],
        ]}
      />
      <Notice label="Muhim">
        Rebrending — bu yangi tanga emas. Eski TON yo‘qolmaydi, yangi GRAM «olinmaydi»: bu bitta aktiv, faqat nomi
        o‘zgargan. O‘tish davrida ko‘p birja va hamyonlarda «Gram (prev. Toncoin)» yozuvi turdi — bu normal holat,
        ba’zi platformalar nomni kechroq yangiladi.
      </Notice>

      <h2 id="tarix">Nega aynan Gram — nomning tarixi</h2>
      <p>
        Gram — yangi emas, <b>qaytgan nom</b>. Telegram 2018-yilda o‘z blokcheyni (Telegram Open Network) uchun
        yozgan dastlabki texnik hujjatda tanga aynan Gram deb nomlangan edi. Keyin loyiha huquqiy to‘siqqa uchradi,
        tarmoqni mustaqil jamoa davom ettirdi va tanga Toncoin bo‘ldi. 2026-yilgi ovoz berish — dastlabki nomga
        qaytish.
      </p>
      <InfoGrid>
        <InfoCard emoji="📄" title="2018 — Gram">
          Telegram Open Network texnik hujjati; tanga — Gram. Loyiha xususiy investorlardan taxminan 1,7 mlrd dollar
          yig‘di.
        </InfoCard>
        <InfoCard emoji="⚖️" title="2019–2020 — SEC va chiqish">
          2019-yil oktyabrda AQSh Qimmatli qog‘ozlar komissiyasi (SEC) tanga sotuvini ro‘yxatdan o‘tmagan qimmatli
          qog‘oz chiqarish deb hisobladi. 2020-yilda Telegram loyihadan chiqdi, investorlarga 1,2 mlrd dollardan ko‘p
          mablag‘ qaytardi va 18,5 mln dollar jarima to‘ladi.
        </InfoCard>
        <InfoCard emoji="🔄" title="2020–2026 — Toncoin">
          Tarmoqni mustaqil dasturchilar The Open Network nomi bilan davom ettirdi; tanga sud ishidan uzoqlashish uchun
          Toncoin deb nomlandi.
        </InfoCard>
        <InfoCard emoji="✅" title="2026 — yana Gram">
          Jamoa ovozi bilan tanga dastlabki nomiga qaytdi. Durov Telegram tarmoqning eng katta validatoriga aylanishini
          aytdi.
        </InfoCard>
      </InfoGrid>

      <h2 id="telegram">Telegram, Fragment va Stars’da bu qanday ko‘rinadi</h2>
      <InfoGrid>
        <InfoCard emoji="🧩" title="Fragment">
          Fragment’ning rasmiy sahifalarida to‘lov valyutasi endi «Grams ($GRAM)» deb yozilgan: username, kolleksion
          raqam va sovg‘alar auksioni Gram’da. Mexanizm o‘sha, faqat nom yangilandi.
        </InfoCard>
        <InfoCard emoji="👛" title="Hamyon va birjalar">
          Hamyon ilovalari, birjalar va kurs saytlari tickerni GRAM’ga o‘zgartirdi; o‘tish davrida «Gram (prev.
          Toncoin)» yozuvi ko‘rinib turdi. Balansdagi raqam o‘zgarmadi.
        </InfoCard>
        <InfoCard emoji="⭐" title="Telegram Stars">
          Stars Gram emas va Gram’ga aylanmadi. Bu Telegram ichidagi alohida birlik: ilovada App Store yoki Google
          Play orqali, Fragment’da Gram bilan olinadi. Kreatorlar Stars’ni Fragment orqali Gram’ga chiqaradi (ilgari
          «TON» deb yozilar edi).
        </InfoCard>
        <InfoCard emoji="🎁" title="NFT sovg‘alar">
          Kolleksion sovg‘alar bozorida narxlar Gram’da ko‘rsatiladi (avval TON). Sovg‘aning qiymati o‘zgarmadi —
          faqat birlik nomi.
        </InfoCard>
      </InfoGrid>
      <p>
        Telegram nega to‘lovlarini Stars atrofida qurayotgani va bu TON ekotizimiga qanday bog‘liq —{" "}
        <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">alohida maqolada</Link>. Kolleksion sovg‘alar
        qanday ishlashi — <Link href="/blog/telegram-nft-gift-nima">Telegram NFT sovg‘a nima</Link>.
      </p>

      <h2 id="tekshiruv">Sizda TON bo‘lsa — 3 qadam</h2>
      <Steps>
        <Step title="1. Hamyon ilovasini yangilang">
          Yangi versiyada balans GRAM nomi va yangi logotip bilan ko‘rinadi. Miqdor o‘sha: 10 TON edi — 10 GRAM
          bo‘ldi.
        </Step>
        <Step title="2. Manzilni o‘zgartirmang">
          Hamyon manzili avvalgidek ishlaydi: eski manzilga yuborilgan mablag‘ xuddi shunday keladi. Yangi manzil
          yaratish shart emas.
        </Step>
        <Step title="3. Hech narsani «almashtirmang»">
          Swap, claim yoki migratsiya havolalariga o‘tmang. Rasmiy jarayonda bunday qadam yo‘q — uni talab qilgan
          sayt yoki bot firibgar.
        </Step>
      </Steps>

      <h2 id="firibgarlik">Firibgarlikdan ehtiyot bo‘ling</h2>
      <Notice label="Ogohlantirish">
        Rebrendingdan keyingi haftalarda «TON’ni GRAM’ga almashtiring», «GRAM’ni claim qiling», «migratsiya muddati
        tugayapti» kabi xabarlar va saytlar paydo bo‘ldi. Hammasi firibgarlik: rasmiy tomondan hech qanday harakat
        talab qilinmaydi, hamyonni «ulash»ni so‘ragan sayt mablag‘ni o‘g‘irlaydi.
      </Notice>
      <KeyFacts label="Qizil bayroqlar">
        <li>
          <b>Seed-fraza yoki shaxsiy kalit</b> so‘ralsa — har doim firibgarlik, istisnosiz.
        </li>
        <li>
          <b>«Vaqt chegaralangan» swap yoki claim</b> — rasmiy jarayonda muddat ham, almashtirish ham yo‘q.
        </li>
        <li>
          <b>Nomi o‘xshash tokenlar</b> — eski GRAM (PoW), GRM, GRAMPUS kabi tangalar rebrending qilingan Toncoin emas.
        </li>
        <li>
          <b>Telegram yoki TON nomidan shaxsiy xabar</b> — rasmiy jamoalar shaxsiy xabarda hamyon ulashni so‘ramaydi.
        </li>
      </KeyFacts>
      <p>
        Telegram akkauntingizni himoyalash bo‘yicha asosiy sozlamalar —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA qo‘llanmasi</Link>; shubhali sovg‘a
        havolasini tekshirish — <Link href="/blog/telegram-gift-havolasini-tekshirish">alohida maqola</Link>.
      </p>

      <h2 id="starspaymee">StarsPaymee foydalanuvchilari uchun nima o‘zgaradi</h2>
      <p>
        Qisqasi — <b>hech narsa</b>. StarsPaymee’da Telegram Stars, Premium va sovg‘alar <b>so‘mda</b> sotiladi:
        UzCard/HUMO kartaga o‘tkazma yoki balansdan {STARS_PER_UNIT_UZS} so‘m, Click, Payme, Uzum yoki Paynet orqali{" "}
        {STARS_PER_UNIT_GATEWAY_UZS} so‘m — bir yulduz. Premium — 3, 6 yoki 12 oy (jadvalda karta o‘tkazmasi narxi;
        onlayn shlyuz tanlansa, yakuniy summa botda ko‘rsatiladi). Narxlar Gram kursiga bog‘lanmagan, buyurtma uchun
        faqat @username kerak.
      </p>
      <PriceTables locale="uz" />
      <KeyFacts label="Sizga kerak bo‘lmaydi">
        <li>Gram yoki TON hamyoni, kripto birja hisobi.</li>
        <li>Kurs, tarmoq komissiyasi va konvertatsiyani hisoblash.</li>
        <li>Fragment’da ro‘yxatdan o‘tish va hamyon ulash.</li>
        <li>Telegram paroli yoki kod — yetkazish rasmiy mexanizm orqali, username bo‘yicha.</li>
      </KeyFacts>
      <p>
        StarsPaymee Gram sotmaydi va Gram’da to‘lov qabul qilmaydi — faqat so‘m. Fragment’da o‘zingiz to‘lamoqchi
        bo‘lsangiz, Gram’ni birjadan olib, hamyon ulashingiz kerak bo‘ladi; Stars yoki Premium olish uchun bu shart
        emas. To‘liq narxlar: <Link href="/stars">Telegram Stars</Link> va{" "}
        <Link href="/premium">Telegram Premium</Link>.
      </p>
      <InlineCta text="Stars kerakmi? So‘mda, username bilan — 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Premium kerakmi? 3, 6 yoki 12 oy — kripto hamyonsiz, parolsiz." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Manbalar"
        items={[
          { href: SOURCES.ton, label: "ton.org", note: "«Gram is the native coin of the TON blockchain… also known as Toncoin»" },
          { href: SOURCES.announce, label: "TON: Native Token Rename — Toncoin (TON) to Gram (GRAM)", note: "rasmiy e’lon" },
          { href: SOURCES.fragment, label: "fragment.com/about", note: "to‘lovlar «Grams ($GRAM)» deb yozilgan" },
          { href: SOURCES.cmc, label: "CoinMarketCap Academy", note: "rebrending va nomning tarixi" },
          { href: SOURCES.cryptoNews, label: "crypto.news — What is Gram", note: "nima o‘zgardi, firibgarlik ogohlantirishi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      С 15 июня 2026 года основная монета блокчейна TON <b>Toncoin (TON)</b> официально называется{" "}
      <b>Gram (GRAM)</b> — по итогам голосования сообщества (81,22% «за»). Изменились только название, тикер и
      логотип: блокчейн по-прежнему The Open Network, балансы сохранены 1:1, адреса кошельков те же, никакой swap
      или claim не нужен. В StarsPaymee Stars и Premium продаются за сумы — Gram вам не понадобится.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima-boldi", label: "Что произошло — даты и цифры" },
          { href: "#ozgardi", label: "Что изменилось и что нет" },
          { href: "#tarix", label: "Почему именно Gram — история названия" },
          { href: "#telegram", label: "Как это выглядит в Telegram, Fragment и Stars" },
          { href: "#tekshiruv", label: "Если у вас есть TON — 3 шага" },
          { href: "#firibgarlik", label: "Осторожно, мошенники" },
          { href: "#starspaymee", label: "Что меняется для пользователей StarsPaymee" },
        ]}
      />

      <h2 id="nima-boldi">Что произошло — даты и цифры</h2>
      <p>
        В начале июня 2026 года сообщество TON провело на платформе <b>TON Vote</b> голосование о переименовании
        монеты. Автором предложения указан верифицированный аккаунт Telegram, а Павел Дуров открыто поддержал
        изменение. Голосование завершилось 8 июня: 81,22% участвовавших голосов — «за». С 15 июня монета официально
        называется <b>Gram</b>, биржевой тикер — <b>GRAM</b>.
      </p>
      <KeyFacts label="Главные факты">
        <li>
          <b>Голосование:</b> 1–8 июня 2026, платформа TON Vote; 81,22% поддержали.
        </li>
        <li>
          <b>Вступило в силу:</b> 15 июня 2026.
        </li>
        <li>
          <b>Название и тикер:</b> Toncoin (TON) → Gram (GRAM); логотип обновлён.
        </li>
        <li>
          <b>Блокчейн:</b> The Open Network (TON) — название не менялось.
        </li>
        <li>
          <b>Действия держателей:</b> не требуются — баланс автоматически отображается как GRAM.
        </li>
      </KeyFacts>

      <h2 id="ozgardi">Что изменилось и что нет</h2>
      <CompareTable
        headers={["", "До 15 июня", "С 15 июня"]}
        rows={[
          [<strong key="a">Название монеты</strong>, "Toncoin", "Gram"],
          [<strong key="b">Тикер</strong>, "TON", "GRAM"],
          [<strong key="c">Логотип</strong>, "старый", "обновлённый"],
          [<strong key="d">Блокчейн</strong>, "The Open Network (TON)", "The Open Network (TON) — тот же"],
          [<strong key="e">Баланс</strong>, "10 TON", "10 GRAM — 1:1"],
          [<strong key="f">Адрес кошелька</strong>, "—", "не изменился"],
          [<strong key="g">Смарт-контракты, NFT, жетоны, стейкинг</strong>, "работают", "работают без изменений"],
          [<strong key="h">Swap, claim, миграция</strong>, "—", "не нужны"],
        ]}
      />
      <Notice label="Важно">
        Ребрендинг — это не новая монета. Старый TON не исчезает, новый GRAM не нужно «получать»: это один и тот же
        актив с новым названием. В переходный период многие биржи и кошельки показывали подпись «Gram (prev.
        Toncoin)» — это нормально, некоторые платформы обновили название позже.
      </Notice>

      <h2 id="tarix">Почему именно Gram — история названия</h2>
      <p>
        Gram — не новое, а <b>вернувшееся название</b>. В первоначальном техническом документе, который Telegram
        написал в 2018 году для своего блокчейна (Telegram Open Network), монета называлась именно Gram. Затем
        проект столкнулся с юридическими препятствиями, сеть продолжило независимое сообщество, а монета стала
        Toncoin. Голосование 2026 года — возвращение к исходному названию.
      </p>
      <InfoGrid>
        <InfoCard emoji="📄" title="2018 — Gram">
          Технический документ Telegram Open Network; монета — Gram. Проект привлёк у частных инвесторов около
          1,7 млрд долларов.
        </InfoCard>
        <InfoCard emoji="⚖️" title="2019–2020 — SEC и выход">
          В октябре 2019 года Комиссия по ценным бумагам США (SEC) признала продажу монет незарегистрированным
          выпуском ценных бумаг. В 2020 году Telegram вышел из проекта, вернул инвесторам более 1,2 млрд долларов и
          заплатил штраф 18,5 млн долларов.
        </InfoCard>
        <InfoCard emoji="🔄" title="2020–2026 — Toncoin">
          Сеть продолжили независимые разработчики под названием The Open Network; монету назвали Toncoin, чтобы
          дистанцироваться от судебного дела.
        </InfoCard>
        <InfoCard emoji="✅" title="2026 — снова Gram">
          Голосованием сообщества монета вернула исходное название. Дуров заявил, что Telegram станет крупнейшим
          валидатором сети.
        </InfoCard>
      </InfoGrid>

      <h2 id="telegram">Как это выглядит в Telegram, Fragment и Stars</h2>
      <InfoGrid>
        <InfoCard emoji="🧩" title="Fragment">
          На официальных страницах Fragment валюта оплаты теперь называется «Grams ($GRAM)»: аукционы username,
          коллекционных номеров и подарков идут в Gram. Механизм тот же, обновилось только название.
        </InfoCard>
        <InfoCard emoji="👛" title="Кошельки и биржи">
          Приложения-кошельки, биржи и сайты курсов сменили тикер на GRAM; в переходный период была видна подпись
          «Gram (prev. Toncoin)». Число на балансе не изменилось.
        </InfoCard>
        <InfoCard emoji="⭐" title="Telegram Stars">
          Stars — не Gram и в Gram не превратились. Это отдельная единица внутри Telegram: в приложении покупается
          через App Store или Google Play, на Fragment — за Gram. Авторы выводят Stars через Fragment в Gram (раньше
          писали «TON»).
        </InfoCard>
        <InfoCard emoji="🎁" title="NFT-подарки">
          На рынке коллекционных подарков цены показываются в Gram (раньше — в TON). Ценность подарка не изменилась
          — только название единицы.
        </InfoCard>
      </InfoGrid>
      <p>
        Почему Telegram строит платежи вокруг Stars и как это связано с экосистемой TON —{" "}
        <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">в отдельной статье</Link>. Как устроены
        коллекционные подарки — <Link href="/blog/telegram-nft-gift-nima">что такое NFT-подарок Telegram</Link>.
      </p>

      <h2 id="tekshiruv">Если у вас есть TON — 3 шага</h2>
      <Steps>
        <Step title="1. Обновите приложение кошелька">
          В новой версии баланс отображается с названием GRAM и новым логотипом. Сумма та же: было 10 TON — стало
          10 GRAM.
        </Step>
        <Step title="2. Не меняйте адрес">
          Адрес кошелька работает как прежде: средства, отправленные на старый адрес, приходят точно так же.
          Создавать новый адрес не нужно.
        </Step>
        <Step title="3. Ничего не «обменивайте»">
          Не переходите по ссылкам на swap, claim или миграцию. В официальном процессе такого шага нет — сайт или
          бот, который его требует, мошеннический.
        </Step>
      </Steps>

      <h2 id="firibgarlik">Осторожно, мошенники</h2>
      <Notice label="Предупреждение">
        В первые недели после ребрендинга появились сообщения и сайты вроде «обменяйте TON на GRAM», «заберите
        свой GRAM», «срок миграции истекает». Всё это мошенничество: с официальной стороны никаких действий не
        требуется, а сайт, который просит «подключить» кошелёк, выводит средства.
      </Notice>
      <KeyFacts label="Красные флаги">
        <li>
          <b>Просят seed-фразу или приватный ключ</b> — всегда мошенничество, без исключений.
        </li>
        <li>
          <b>«Ограниченный по времени» swap или claim</b> — в официальном процессе нет ни сроков, ни обмена.
        </li>
        <li>
          <b>Токены с похожим названием</b> — старый GRAM (PoW), GRM, GRAMPUS не являются переименованным Toncoin.
        </li>
        <li>
          <b>Личное сообщение «от Telegram» или «от TON»</b> — официальные команды не просят подключить кошелёк в
          личке.
        </li>
      </KeyFacts>
      <p>
        Базовые настройки защиты аккаунта Telegram —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по 2FA</Link>; как проверить
        подозрительную ссылку на подарок —{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">отдельная статья</Link>.
      </p>

      <h2 id="starspaymee">Что меняется для пользователей StarsPaymee</h2>
      <p>
        Коротко — <b>ничего</b>. В StarsPaymee Telegram Stars, Premium и подарки продаются <b>за сумы</b>: переводом
        на карту UzCard/HUMO или с баланса {STARS_PER_UNIT_UZS} сум, через Click, Payme, Uzum или Paynet{" "}
        {STARS_PER_UNIT_GATEWAY_UZS} сум — за одну звезду. Premium — на 3, 6 или 12 месяцев (в таблице цена при
        переводе на карту; при выборе онлайн-шлюза итоговая сумма показывается в боте). Цены не привязаны к курсу
        Gram, для заказа нужен только @username.
      </p>
      <PriceTables locale="ru" />
      <KeyFacts label="Вам не понадобится">
        <li>Кошелёк Gram или TON, аккаунт на криптобирже.</li>
        <li>Расчёт курса, сетевой комиссии и конвертации.</li>
        <li>Регистрация на Fragment и подключение кошелька.</li>
        <li>Пароль или код от Telegram — доставка через официальный механизм, по username.</li>
      </KeyFacts>
      <p>
        StarsPaymee не продаёт Gram и не принимает оплату в Gram — только сумы. Если хотите платить на Fragment
        самостоятельно, Gram придётся купить на бирже и подключить кошелёк; для покупки Stars или Premium это не
        нужно. Полные цены: <Link href="/stars">Telegram Stars</Link> и{" "}
        <Link href="/premium">Telegram Premium</Link>.
      </p>
      <InlineCta text="Нужны Stars? В сумах, по username — на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Нужен Premium? 3, 6 или 12 месяцев — без криптокошелька и пароля." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Источники"
        items={[
          { href: SOURCES.ton, label: "ton.org", note: "«Gram is the native coin of the TON blockchain… also known as Toncoin»" },
          { href: SOURCES.announce, label: "TON: Native Token Rename — Toncoin (TON) to Gram (GRAM)", note: "официальное объявление" },
          { href: SOURCES.fragment, label: "fragment.com/about", note: "платежи обозначены как «Grams ($GRAM)»" },
          { href: SOURCES.cmc, label: "CoinMarketCap Academy", note: "ребрендинг и история названия" },
          { href: SOURCES.cryptoNews, label: "crypto.news — What is Gram", note: "что изменилось, предупреждение о мошенниках" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Since 15 June 2026 the native coin of the TON blockchain, <b>Toncoin (TON)</b>, is officially called{" "}
      <b>Gram (GRAM)</b> after a community vote (81.22% in favour). Only the name, ticker and logo changed: the
      blockchain is still The Open Network, balances carried over 1:1, wallet addresses are the same, and no swap or
      claim is needed. StarsPaymee sells Stars and Premium in som — you will not need Gram.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima-boldi", label: "What happened — dates and numbers" },
          { href: "#ozgardi", label: "What changed and what did not" },
          { href: "#tarix", label: "Why Gram — the history of the name" },
          { href: "#telegram", label: "How it looks in Telegram, Fragment and Stars" },
          { href: "#tekshiruv", label: "If you hold TON — 3 steps" },
          { href: "#firibgarlik", label: "Watch out for scams" },
          { href: "#starspaymee", label: "What changes for StarsPaymee users" },
        ]}
      />

      <h2 id="nima-boldi">What happened — dates and numbers</h2>
      <p>
        In early June 2026 the TON community held a vote on the <b>TON Vote</b> platform about renaming the coin.
        The proposal was listed under Telegram’s verified account, and Pavel Durov openly backed the change. Voting
        closed on 8 June: 81.22% of participating votes said yes. From 15 June the coin is officially <b>Gram</b>,
        with the exchange ticker <b>GRAM</b>.
      </p>
      <KeyFacts label="Key facts">
        <li>
          <b>Vote:</b> 1–8 June 2026, the TON Vote platform; 81.22% in favour.
        </li>
        <li>
          <b>Effective:</b> 15 June 2026.
        </li>
        <li>
          <b>Name and ticker:</b> Toncoin (TON) → Gram (GRAM); updated logo.
        </li>
        <li>
          <b>Blockchain:</b> The Open Network (TON) — name unchanged.
        </li>
        <li>
          <b>Holder action:</b> none — balances show as GRAM automatically.
        </li>
      </KeyFacts>

      <h2 id="ozgardi">What changed and what did not</h2>
      <CompareTable
        headers={["", "Before 15 June", "From 15 June"]}
        rows={[
          [<strong key="a">Coin name</strong>, "Toncoin", "Gram"],
          [<strong key="b">Ticker</strong>, "TON", "GRAM"],
          [<strong key="c">Logo</strong>, "old", "updated"],
          [<strong key="d">Blockchain</strong>, "The Open Network (TON)", "The Open Network (TON) — the same"],
          [<strong key="e">Balance</strong>, "10 TON", "10 GRAM — 1:1"],
          [<strong key="f">Wallet address</strong>, "—", "unchanged"],
          [<strong key="g">Smart contracts, NFTs, jettons, staking</strong>, "work", "work unchanged"],
          [<strong key="h">Swap, claim, migration</strong>, "—", "not needed"],
        ]}
      />
      <Notice label="Important">
        A rebrand is not a new coin. The old TON does not disappear and no new GRAM has to be “collected”: it is one
        asset with a new name. During the transition many exchanges and wallets showed the label “Gram (prev.
        Toncoin)” — that is normal; some platforms updated the name later.
      </Notice>

      <h2 id="tarix">Why Gram — the history of the name</h2>
      <p>
        Gram is not new — it is a <b>returning name</b>. In the original technical paper Telegram wrote in 2018 for
        its blockchain (Telegram Open Network), the coin was called Gram. The project then ran into legal obstacles,
        an independent community carried the network on, and the coin became Toncoin. The 2026 vote is a return to
        the original name.
      </p>
      <InfoGrid>
        <InfoCard emoji="📄" title="2018 — Gram">
          The Telegram Open Network paper; the coin is Gram. The project raised about $1.7 billion from private
          investors.
        </InfoCard>
        <InfoCard emoji="⚖️" title="2019–2020 — the SEC and the exit">
          In October 2019 the US Securities and Exchange Commission (SEC) treated the coin sale as an unregistered
          securities offering. In 2020 Telegram left the project, returned more than $1.2 billion to investors and
          paid an $18.5 million penalty.
        </InfoCard>
        <InfoCard emoji="🔄" title="2020–2026 — Toncoin">
          Independent developers carried the network on as The Open Network; the coin was named Toncoin to distance
          it from the court case.
        </InfoCard>
        <InfoCard emoji="✅" title="2026 — Gram again">
          By community vote the coin got its original name back. Durov said Telegram would become the network’s
          largest validator.
        </InfoCard>
      </InfoGrid>

      <h2 id="telegram">How it looks in Telegram, Fragment and Stars</h2>
      <InfoGrid>
        <InfoCard emoji="🧩" title="Fragment">
          Fragment’s official pages now call the payment currency “Grams ($GRAM)”: auctions for usernames,
          collectible numbers and gifts run in Gram. The mechanism is the same; only the name was updated.
        </InfoCard>
        <InfoCard emoji="👛" title="Wallets and exchanges">
          Wallet apps, exchanges and price sites switched the ticker to GRAM; during the transition the label “Gram
          (prev. Toncoin)” was visible. The number on your balance did not change.
        </InfoCard>
        <InfoCard emoji="⭐" title="Telegram Stars">
          Stars are not Gram and did not turn into Gram. They are a separate unit inside Telegram: bought in the app
          through the App Store or Google Play, on Fragment for Gram. Creators cash Stars out through Fragment in
          Gram (it used to say “TON”).
        </InfoCard>
        <InfoCard emoji="🎁" title="NFT gifts">
          On the collectible-gift market prices are shown in Gram (previously TON). A gift’s value did not change —
          only the unit’s name.
        </InfoCard>
      </InfoGrid>
      <p>
        Why Telegram builds its payments around Stars and how that ties into the TON ecosystem —{" "}
        <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">in a separate article</Link>. How collectible
        gifts work — <Link href="/blog/telegram-nft-gift-nima">what a Telegram NFT gift is</Link>.
      </p>

      <h2 id="tekshiruv">If you hold TON — 3 steps</h2>
      <Steps>
        <Step title="1. Update your wallet app">
          The new version shows the balance under the GRAM name with the new logo. The amount is the same: 10 TON
          became 10 GRAM.
        </Step>
        <Step title="2. Do not change the address">
          Your wallet address works as before: funds sent to the old address arrive exactly the same way. There is no
          need to create a new one.
        </Step>
        <Step title="3. Do not “swap” anything">
          Do not follow swap, claim or migration links. The official process has no such step — a site or bot that
          demands it is a scam.
        </Step>
      </Steps>

      <h2 id="firibgarlik">Watch out for scams</h2>
      <Notice label="Warning">
        In the weeks after the rebrand, messages and sites appeared saying “swap your TON for GRAM”, “claim your
        GRAM” or “the migration deadline is ending”. All of it is fraud: no action is required from the official
        side, and a site that asks you to “connect” a wallet drains it.
      </Notice>
      <KeyFacts label="Red flags">
        <li>
          <b>Asking for your seed phrase or private key</b> — always a scam, no exceptions.
        </li>
        <li>
          <b>A “time-limited” swap or claim</b> — the official process has no deadline and no swap.
        </li>
        <li>
          <b>Look-alike tokens</b> — the old GRAM (PoW), GRM or GRAMPUS are not the renamed Toncoin.
        </li>
        <li>
          <b>A private message “from Telegram” or “from TON”</b> — official teams never ask you to connect a wallet in
          a DM.
        </li>
      </KeyFacts>
      <p>
        The basic settings that protect your Telegram account —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the 2FA guide</Link>; how to check a suspicious
        gift link — <Link href="/blog/telegram-gift-havolasini-tekshirish">a separate article</Link>.
      </p>

      <h2 id="starspaymee">What changes for StarsPaymee users</h2>
      <p>
        In short — <b>nothing</b>. StarsPaymee sells Telegram Stars, Premium and gifts <b>in som</b>:{" "}
        {STARS_PER_UNIT_UZS} som per star by UzCard/HUMO card transfer or from balance, {STARS_PER_UNIT_GATEWAY_UZS}{" "}
        som through Click, Payme, Uzum or Paynet. Premium — 3, 6 or 12 months (the table shows the card-transfer
        price; if you choose an online gateway, the final amount is shown in the bot). Prices are not tied to the
        Gram rate, and an order needs only your @username.
      </p>
      <PriceTables locale="en" />
      <KeyFacts label="You will not need">
        <li>A Gram or TON wallet, or a crypto exchange account.</li>
        <li>Working out the rate, network fees and conversion.</li>
        <li>Registering on Fragment and connecting a wallet.</li>
        <li>Your Telegram password or code — delivery goes through the official mechanism, by username.</li>
      </KeyFacts>
      <p>
        StarsPaymee does not sell Gram and does not accept payment in Gram — som only. If you want to pay on
        Fragment yourself, you will need to buy Gram on an exchange and connect a wallet; buying Stars or Premium
        does not require that. Full prices: <Link href="/stars">Telegram Stars</Link> and{" "}
        <Link href="/premium">Telegram Premium</Link>.
      </p>
      <InlineCta text="Need Stars? In som, by username — on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Need Premium? 3, 6 or 12 months — no crypto wallet, no password." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Sources"
        items={[
          { href: SOURCES.ton, label: "ton.org", note: "“Gram is the native coin of the TON blockchain… also known as Toncoin”" },
          { href: SOURCES.announce, label: "TON: Native Token Rename — Toncoin (TON) to Gram (GRAM)", note: "official announcement" },
          { href: SOURCES.fragment, label: "fragment.com/about", note: "payments are described as “Grams ($GRAM)”" },
          { href: SOURCES.cmc, label: "CoinMarketCap Academy", note: "the rebrand and the history of the name" },
          { href: SOURCES.cryptoNews, label: "crypto.news — What is Gram", note: "what changed, scam warning" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Toncoin va Gram — bir xil tangami?",
    answer:
      "Ha. 2026-yil 15-iyunda Toncoin rasman Gram deb qayta nomlandi, ticker TON o‘rniga GRAM bo‘ldi. Bu o‘sha blokcheyndagi o‘sha aktiv — faqat nom, ticker va logotip o‘zgardi.",
  },
  {
    question: "Toncoin qachon Gram bo‘ldi?",
    answer:
      "TON Vote platformasidagi jamoatchilik ovozi 2026-yil 8-iyunda yakunlandi (81,22% «ha»), qayta nomlash 2026-yil 15-iyundan kuchga kirdi.",
  },
  {
    question: "TON blokcheynining nomi ham o‘zgardimi?",
    answer: "Yo‘q. Tarmoq avvalgidek The Open Network (TON) deb ataladi. Gram — faqat tanganing nomi.",
  },
  {
    question: "Hamyon manzilim yoki balansim o‘zgaradimi?",
    answer:
      "Yo‘q. Manzillar o‘sha-o‘sha, balans 1:1 saqlandi: 10 TON edi — 10 GRAM bo‘ldi. Smart-kontraktlar, NFT va steyking o‘zgarishsiz ishlaydi.",
  },
  {
    question: "TON’ni GRAM’ga almashtirish kerakmi?",
    answer:
      "Yo‘q. Hech qanday swap, claim yoki migratsiya nazarda tutilmagan. Buni talab qilgan har qanday sayt yoki xabar — firibgarlik.",
  },
  {
    question: "Birjada hali ham TON deb yozilgan — nega?",
    answer:
      "Bu o‘tish davri: platformalar nomni o‘z jadvali bo‘yicha yangiladi va ko‘pincha «Gram (prev. Toncoin)» yozuvini ko‘rsatdi. Balansingizga bu ta’sir qilmaydi.",
  },
  {
    question: "Nega aynan Gram deb nomlandi?",
    answer:
      "Telegram’ning 2018-yilgi dastlabki texnik hujjatida tanga shunday nomlangan edi. 2019–2020-yillardagi SEC bilan bahsdan keyin loyihani jamoa Toncoin nomi bilan davom ettirdi; 2026-yilda ovoz berish orqali dastlabki nom qaytarildi.",
  },
  {
    question: "Telegram Stars endi Gram’mi?",
    answer:
      "Yo‘q. Stars — Telegram ichidagi alohida birlik, u Gram’ga aylangani yo‘q. Fragment’da Stars Gram bilan olinadi va chiqariladi (ilgari TON), ilovada — App Store yoki Google Play orqali, StarsPaymee’da — so‘mda.",
  },
  {
    question: "StarsPaymee’da Gram bilan to‘lash mumkinmi?",
    answer:
      "Yo‘q. StarsPaymee faqat so‘m qabul qiladi — UzCard/HUMO kartaga o‘tkazma, Click, Payme, Uzum, Paynet — va Gram sotmaydi. Stars yoki Premium olish uchun kripto hamyon kerak emas.",
  },
  {
    question: "Gram kursi StarsPaymee’dagi Stars narxiga ta’sir qiladimi?",
    answer: `Yo‘q. Narx so‘mda qat’iy: karta o‘tkazmasi va balansdan ${STARS_PER_UNIT_UZS} so‘m, Click, Payme, Uzum yoki Paynet orqali ${STARS_PER_UNIT_GATEWAY_UZS} so‘m — bir yulduz. Gram kursi faqat Fragment’da o‘zi to‘laydiganlar uchun muhim.`,
  },
];

const ruFaq = [
  {
    question: "Toncoin и Gram — это одна и та же монета?",
    answer:
      "Да. 15 июня 2026 года Toncoin официально переименован в Gram, тикер TON сменился на GRAM. Это тот же актив в том же блокчейне — изменились только название, тикер и логотип.",
  },
  {
    question: "Когда Toncoin стал Gram?",
    answer:
      "Голосование сообщества на платформе TON Vote завершилось 8 июня 2026 года (81,22% «за»), переименование вступило в силу 15 июня 2026 года.",
  },
  {
    question: "Блокчейн TON тоже переименовали?",
    answer: "Нет. Сеть по-прежнему называется The Open Network (TON). Gram — название только монеты.",
  },
  {
    question: "Изменится ли адрес кошелька или баланс?",
    answer:
      "Нет. Адреса остались прежними, баланс сохранён 1:1: было 10 TON — стало 10 GRAM. Смарт-контракты, NFT и стейкинг работают без изменений.",
  },
  {
    question: "Нужно ли обменивать TON на GRAM?",
    answer:
      "Нет. Никакого swap, claim или миграции не предусмотрено. Любой сайт или сообщение с таким требованием — мошенничество.",
  },
  {
    question: "На бирже всё ещё написано TON — почему?",
    answer:
      "Это переходный период: платформы обновляли название по своему графику и часто показывали подпись «Gram (prev. Toncoin)». На ваш баланс это не влияет.",
  },
  {
    question: "Почему выбрали название Gram?",
    answer:
      "Так монета называлась в первоначальном техническом документе Telegram 2018 года. После спора с SEC в 2019–2020 годах проект продолжило сообщество под названием Toncoin; в 2026 году голосованием вернули исходное имя.",
  },
  {
    question: "Telegram Stars теперь тоже Gram?",
    answer:
      "Нет. Stars — отдельная внутренняя единица Telegram, она не превратилась в Gram. На Fragment Stars покупают и выводят за Gram (раньше — за TON), в приложении — через App Store или Google Play, в StarsPaymee — за сумы.",
  },
  {
    question: "Можно ли оплатить в StarsPaymee в Gram?",
    answer:
      "Нет. StarsPaymee принимает только сумы — перевод на карту UzCard/HUMO, Click, Payme, Uzum, Paynet — и не продаёт Gram. Криптокошелёк для покупки Stars или Premium не нужен.",
  },
  {
    question: "Влияет ли курс Gram на цену Stars в StarsPaymee?",
    answer: `Нет. Цена фиксирована в сумах: ${STARS_PER_UNIT_UZS} сум за звезду при переводе на карту и с баланса, ${STARS_PER_UNIT_GATEWAY_UZS} сум через Click, Payme, Uzum или Paynet. Курс Gram важен только тем, кто платит на Fragment сам.`,
  },
];

const enFaq = [
  {
    question: "Are Toncoin and Gram the same coin?",
    answer:
      "Yes. On 15 June 2026 Toncoin was officially renamed Gram and the ticker changed from TON to GRAM. It is the same asset on the same blockchain — only the name, ticker and logo changed.",
  },
  {
    question: "When did Toncoin become Gram?",
    answer:
      "The community vote on the TON Vote platform closed on 8 June 2026 (81.22% in favour), and the rename took effect on 15 June 2026.",
  },
  {
    question: "Was the TON blockchain renamed too?",
    answer: "No. The network is still called The Open Network (TON). Gram is the name of the coin only.",
  },
  {
    question: "Will my wallet address or balance change?",
    answer:
      "No. Addresses stayed the same and balances carried over 1:1: 10 TON became 10 GRAM. Smart contracts, NFTs and staking work unchanged.",
  },
  {
    question: "Do I need to swap TON for GRAM?",
    answer: "No. There is no swap, claim or migration of any kind. Any site or message that demands one is a scam.",
  },
  {
    question: "My exchange still says TON — why?",
    answer:
      "That is the transition period: platforms updated the name on their own schedule and often showed the label “Gram (prev. Toncoin)”. It does not affect your balance.",
  },
  {
    question: "Why the name Gram?",
    answer:
      "That is what the coin was called in Telegram’s original 2018 technical paper. After the dispute with the SEC in 2019–2020 the community carried the project on as Toncoin; in 2026 a vote brought the original name back.",
  },
  {
    question: "Are Telegram Stars now Gram as well?",
    answer:
      "No. Stars are a separate unit inside Telegram and did not turn into Gram. On Fragment, Stars are bought and cashed out for Gram (previously TON); in the app, through the App Store or Google Play; at StarsPaymee, in som.",
  },
  {
    question: "Can I pay StarsPaymee in Gram?",
    answer:
      "No. StarsPaymee accepts som only — UzCard/HUMO card transfer, Click, Payme, Uzum, Paynet — and does not sell Gram. You do not need a crypto wallet to buy Stars or Premium.",
  },
  {
    question: "Does the Gram rate affect the Stars price at StarsPaymee?",
    answer: `No. The price is fixed in som: ${STARS_PER_UNIT_UZS} som per star by card transfer and from balance, ${STARS_PER_UNIT_GATEWAY_UZS} som through Click, Payme, Uzum or Paynet. The Gram rate matters only to people who pay on Fragment themselves.`,
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
  keywords: [
    "toncoin endi gram",
    "toncoin gram",
    "ton gram nomi o‘zgardi",
    "gram kripto telegram",
    "toncoin gram deb o‘zgartirildi",
    "gram coin nima",
    "toncoin переименован в gram",
    "toncoin стал gram",
    "ton gram ребрендинг",
    "что такое gram telegram",
    "toncoin renamed gram",
    "what is gram crypto telegram",
  ],
  locales: {
    uz: {
      title: "Toncoin endi Gram deb ataladi: Telegram foydalanuvchilari uchun nima o‘zgardi",
      excerpt:
        "15-iyun 2026 dan Toncoin — Gram (GRAM). Ovoz berish natijasi, nima o‘zgardi va nima o‘zgarmadi, Fragment va Stars’da qanday ko‘rinadi, firibgarlikdan himoya va StarsPaymee mijozi uchun nima o‘zgaradi.",
      metaTitle: "Toncoin endi Gram — nima o‘zgardi va nima o‘zgarmadi",
      metaDescription:
        "Toncoin 2026-yil 15-iyundan Gram (GRAM) deb ataladi: ovoz berish natijasi, nima o‘zgardi, balans 1:1, firibgarlikdan himoya va Telegram Stars xaridiga ta’siri.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Gram kerak emas — Stars va Premium so‘mda",
      ctaBody: `StarsPaymee’da narxlar so‘mda: Stars donasi ${STARS_PER_UNIT_UZS} so‘mdan, Premium 3, 6 yoki 12 oy. Faqat @username — kripto hamyonsiz, 5 soniyada.`,
      faq: uzFaq,
    },
    ru: {
      title: "Toncoin теперь называется Gram: что изменилось для пользователей Telegram",
      excerpt:
        "С 15 июня 2026 Toncoin — это Gram (GRAM). Итоги голосования, что изменилось и что нет, как это выглядит на Fragment и в Stars, защита от мошенников и что меняется для клиентов StarsPaymee.",
      metaTitle: "Toncoin теперь Gram — что изменилось и что нет",
      metaDescription:
        "С 15 июня 2026 года Toncoin официально называется Gram (GRAM): итоги голосования, что изменилось, баланс 1:1, защита от мошенников и влияние на покупку Stars.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Gram не нужен — Stars и Premium за сумы",
      ctaBody: `В StarsPaymee цены в сумах: звезда от ${STARS_PER_UNIT_UZS} сум, Premium на 3, 6 или 12 месяцев. Только @username — без криптокошелька, за 5 секунд.`,
      faq: ruFaq,
    },
    en: {
      title: "Toncoin is now called Gram: what changed for Telegram users",
      excerpt:
        "Since 15 June 2026 Toncoin is Gram (GRAM). The vote result, what changed and what did not, how it looks on Fragment and in Stars, how to avoid scams, and what changes for StarsPaymee customers.",
      metaTitle: "Toncoin is now Gram — what changed and what did not",
      metaDescription:
        "Since 15 June 2026 Toncoin is officially Gram (GRAM): the vote result, what changed, balances 1:1, how to avoid scams and what it means for buying Stars.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "No Gram needed — Stars and Premium in som",
      ctaBody: `StarsPaymee prices are in som: a star from ${STARS_PER_UNIT_UZS} som, Premium for 3, 6 or 12 months. Just your @username — no crypto wallet, within 5 seconds.`,
      faq: enFaq,
    },
  },
};
