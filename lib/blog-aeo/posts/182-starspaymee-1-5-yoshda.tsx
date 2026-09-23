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
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "starspaymee-1-5-yoshda";

/**
 * Yubiley maqolasi — 1,5 yil.
 *
 * ⚠️ HAMMA RAQAM BOT BAZASIDAN OLINGAN (2026-09-23 holati), qo'lda
 * to'qilgani yo'q:
 *   - buyurtmalar 15 375, bajarilgani 8 059 (`orders`);
 *   - ro'yxatdan o'tgan 12 201, xarid qilgan 2 303, oxirgi 30 kunda 1 667;
 *   - sharhlar 513 ta baho, o'rtacha 4,66, matnli 121 ta, 5 yulduz 422 ta;
 *   - to'lov usullari `payment_methods` jadvalidan, sanalari bilan;
 *   - mahsulot sanalari — har bir `order_type` ning ILK buyurtmasi.
 *
 * MUHIM: `orders` jadvali 2026-03-12 dan boshlanadi (hozirgi tizim shunda
 * ishga tushgan), xizmatning umumiy yoshi esa 1,5 yil. Maqolada bu ikkisi
 * ATAYLAB ajratilgan — «18 oyda 15 375 buyurtma» deb yozish noto'g'ri
 * bo'lardi. Landingdagi `STATS.orders = 100_000` raqami bu yerda
 * ISHLATILMAGAN, chunki baza uni tasdiqlamaydi.
 */

/** Raqamlar jadvali — barchasi bazadan. */
function NumbersTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Ko‘rsatkich", "Qiymat"],
      rows: [
        ["Qabul qilingan buyurtmalar", "15 375"],
        ["Bajarilgan buyurtmalar", "8 059"],
        ["Ro‘yxatdan o‘tgan foydalanuvchilar", "12 201"],
        ["Xarid qilgan mijozlar", "2 303"],
        ["Oxirgi 30 kunda faol", "1 667"],
        ["Moderatsiyadan o‘tgan baholar", "513"],
      ],
    },
    ru: {
      headers: ["Показатель", "Значение"],
      rows: [
        ["Принятых заказов", "15 375"],
        ["Выполненных заказов", "8 059"],
        ["Зарегистрированных пользователей", "12 201"],
        ["Совершивших покупку", "2 303"],
        ["Активных за 30 дней", "1 667"],
        ["Прошедших модерацию оценок", "513"],
      ],
    },
    en: {
      headers: ["Metric", "Value"],
      rows: [
        ["Orders received", "15,375"],
        ["Orders completed", "8,059"],
        ["Registered users", "12,201"],
        ["Customers who bought", "2,303"],
        ["Active in the last 30 days", "1,667"],
        ["Moderated ratings", "513"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b]) => [a, <strong key="b">{b}</strong>])}
    />
  );
}

/** Mahsulotlar qanday qo'shilgani — har biri ILK buyurtma sanasi bo'yicha. */
function TimelineTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Vaqt", "Nima qo‘shildi", "Buyurtma"],
      rows: [
        ["2026-yil mart", "Stars, Premium, Telegram sovg‘alari", "2 944"],
        ["2026-yil may", "Stars va Premium uchun yangi to‘lov oqimi", "10 109"],
        ["2026-yil iyun", "Premium akkaunt", "57"],
        ["2026-yil iyul", "Userbot sovg‘asi, virtual raqam, NFT xaridi, balans, Boost, Steam", "1 655"],
        ["2026-yil avgust", "O‘yin to‘ldirish, NFT ijarasi", "595"],
        ["2026-yil sentabr", "Gift card, NFT market", "15"],
      ],
    },
    ru: {
      headers: ["Когда", "Что добавилось", "Заказов"],
      rows: [
        ["Март 2026", "Stars, Premium, подарки Telegram", "2 944"],
        ["Май 2026", "Новый платёжный поток для Stars и Premium", "10 109"],
        ["Июнь 2026", "Premium-аккаунт", "57"],
        ["Июль 2026", "Подарок через userbot, виртуальный номер, покупка NFT, баланс, Boost, Steam", "1 655"],
        ["Август 2026", "Пополнение игр, аренда NFT", "595"],
        ["Сентябрь 2026", "Гифт-карты, NFT-маркет", "15"],
      ],
    },
    en: {
      headers: ["When", "What was added", "Orders"],
      rows: [
        ["March 2026", "Stars, Premium, Telegram gifts", "2,944"],
        ["May 2026", "A new payment flow for Stars and Premium", "10,109"],
        ["June 2026", "Premium account", "57"],
        ["July 2026", "Userbot gift, virtual number, NFT purchase, balance, Boost, Steam", "1,655"],
        ["August 2026", "Game top-ups, NFT rental", "595"],
        ["September 2026", "Gift cards, NFT market", "15"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/** To'lov usullari — `payment_methods` jadvalidagi yoqilgan yozuvlar. */
function PaymentTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Usul", "Turi", "Qachondan"],
      rows: [
        ["Click SuperApp", "Onlayn shlyuz, avtomatik tasdiq", "2026-yil 15-iyul"],
        ["Uzcard / Humo o‘tkazma", "Kartaga o‘tkazma", "2026-yil 15-iyul"],
        ["Balansdan to‘lash", "Ichki balans", "2026-yil 15-iyul"],
        ["СБП (rubl)", "Onlayn shlyuz, avtomatik tasdiq", "2026-yil 20-iyul"],
        ["Payme", "Onlayn shlyuz, avtomatik tasdiq", "2026-yil 16-sentabr"],
      ],
    },
    ru: {
      headers: ["Способ", "Тип", "С какого времени"],
      rows: [
        ["Click SuperApp", "Онлайн-шлюз, автоподтверждение", "15 июля 2026"],
        ["Перевод на Uzcard / Humo", "Перевод на карту", "15 июля 2026"],
        ["Оплата с баланса", "Внутренний баланс", "15 июля 2026"],
        ["СБП (рубли)", "Онлайн-шлюз, автоподтверждение", "20 июля 2026"],
        ["Payme", "Онлайн-шлюз, автоподтверждение", "16 сентября 2026"],
      ],
    },
    en: {
      headers: ["Method", "Type", "Live since"],
      rows: [
        ["Click SuperApp", "Online gateway, auto-confirmed", "15 July 2026"],
        ["Uzcard / Humo transfer", "Card transfer", "15 July 2026"],
        ["Pay from balance", "Internal balance", "15 July 2026"],
        ["SBP (rubles)", "Online gateway, auto-confirmed", "20 July 2026"],
        ["Payme", "Online gateway, auto-confirmed", "16 September 2026"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      StarsPaymee <b>1,5 yoshga</b> to‘ldi. Hozirgi tizim 2026-yil martidan beri ishlaydi va shu
      davrda <b>15 375</b> buyurtma qabul qilindi, <b>8 059</b> tasi bajarildi. Bot’dan{" "}
      <b>12 201</b> foydalanuvchi ro‘yxatdan o‘tgan, <b>2 303</b> tasi xarid qilgan. Mijozlarning{" "}
      <b>513</b> ta bahosi bor, o‘rtachasi <b>4,66</b>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Sahifada"
        items={[
          { href: "#yol", label: "Bir yarim yillik yo‘l" },
          { href: "#raqamlar", label: "Raqamlarda" },
          { href: "#mahsulot", label: "Mahsulotlar qanday qo‘shildi" },
          { href: "#tolov", label: "To‘lov usullari" },
          { href: "#sharh", label: "Mijozlar nima deydi" },
          { href: "#boshlash", label: "Qanday boshlash mumkin" },
        ]}
      />

      <KeyFacts label="Qisqa ma‘lumot">
        <li>
          Xizmat <b>1,5 yildan ortiq</b> ishlaydi, hozirgi tizim <b>2026-yil martidan</b> beri.
        </li>
        <li>
          <b>15 375</b> buyurtma qabul qilindi, <b>8 059</b> tasi bajarildi.
        </li>
        <li>
          <b>13</b> xil mahsulot: Stars va Premium’dan NFT ijarasi va gift cardgacha.
        </li>
        <li>
          <b>5</b> ta to‘lov usuli, shundan <b>3</b> tasi avtomatik tasdiqlanadigan onlayn shlyuz.
        </li>
      </KeyFacts>

      <h2 id="yol">Bir yarim yillik yo‘l</h2>
      <p>
        StarsPaymee 1,5 yoshga to‘ldi. Bu — shunchaki sana emas, balki har kuni buyurtma qabul
        qilish, xatolarni tuzatish va mijoz savollariga javob berish demakdir. Bizni tanlagan,
        yaqinlariga tavsiya qilgan va fikr bildirgan har bir odamga rahmat.
      </p>
      <p>
        Maqsadimiz boshidan bugungacha o‘zgarmadi: <b>Telegram’dagi raqamli xaridni tushunarli va
        tez qilish</b>. Kimdir birinchi marta Stars olish uchun keladi, kimdir Premium obunasini
        tanlaydi, yana kimdir yaqiniga sovg‘a yubormoqchi bo‘ladi. Ehtiyoj turlicha, kutilgan natija
        esa bitta: aniq jarayon va o‘z vaqtida yetkazilgan buyurtma.
      </p>
      <Notice label="Raqamlar haqida halol gap">
        Quyidagi barcha son bot bazasidan olingan va <b>2026-yil 23-sentabr</b> holatiga to‘g‘ri
        keladi. Hozirgi buyurtma tizimi 2026-yil 12-martda ishga tushgan, shuning uchun jadvallardagi
        raqamlar <b>o‘sha kundan beri</b> hisoblanadi. Xizmatning umumiy yoshi esa undan uzunroq.
      </Notice>

      <h2 id="raqamlar">Raqamlarda</h2>
      <NumbersTable locale="uz" />
      <p>
        Buyurtmalarning bir qismi to‘lov qilinmay muddati o‘tadi — bu har qanday onlayn xizmatda
        bo‘ladigan holat. Shuning uchun biz <b>qabul qilingan</b> va <b>bajarilgan</b> sonni alohida
        ko‘rsatamiz: birinchisi qiziqishni, ikkinchisi haqiqiy xizmatni bildiradi.
      </p>
      <p>
        Oxirgi uch oyda sur‘at sezilarli o‘sdi: iyul, avgust va sentabrning har birida{" "}
        <b>4 000 dan ortiq</b> buyurtma qabul qilindi. Bu bahorgi oylardan bir necha barobar ko‘p.
      </p>

      <h2 id="mahsulot">Mahsulotlar qanday qo‘shildi</h2>
      <p>
        Biz bitta mahsulotdan boshladik va foydalanuvchilar so‘ragan yo‘nalishlarni bosqichma-bosqich
        qo‘shdik. Quyidagi jadvalda har bir yo‘nalishning <b>birinchi haqiqiy buyurtmasi</b> qachon
        bo‘lgani ko‘rsatilgan:
      </p>
      <TimelineTable locale="uz" />
      <p>
        Bugun botda <b>13</b> xil mahsulot bor: Telegram Stars, Premium, sovg‘alar, virtual raqam,
        NFT xaridi va ijarasi, kanal Boost’i, Steam hamyoni, o‘yin to‘ldirish va gift card. Eng
        ko‘p buyurtma Stars’ga tegishli, ikkinchi o‘rinda Telegram sovg‘alari turadi.
      </p>
      <InfoGrid>
        <InfoCard title="Eng ko‘p so‘ralgani" emoji="⭐">
          Telegram Stars — 9 860 buyurtma. Ikkinchi o‘rinda sovg‘alar (2 059), uchinchisida Premium
          (1 134).
        </InfoCard>
        <InfoCard title="Eng yangisi" emoji="🆕">
          Gift card va NFT market — 2026-yil sentabrda ishga tushdi, hali yangi yo‘nalish.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">To‘lov usullari</h2>
      <p>
        To‘lov qismi biz uchun eng mas‘uliyatli joy. Bugun botda beshta usul ishlaydi va shundan
        uchtasi <b>avtomatik tasdiqlanadigan onlayn shlyuz</b>: to‘lovdan keyin buyurtma qo‘lda
        tekshiruvsiz davom etadi.
      </p>
      <PaymentTable locale="uz" />
      <p>
        Click va Payme to‘lovlari <b>rasmiy to‘lov shlyuzi orqali</b> o‘tadi, СБП esa rubl bilan
        to‘laydiganlar uchun. Uzcard va Humo kartasidan oddiy o‘tkazma ham qoladi — kartadan boshqa
        imkoni yo‘q foydalanuvchilar uchun.
      </p>
      <Notice label="Diqqat">
        To‘lov oynasida har doim <b>oluvchi</b> va <b>summa</b>ni tekshiring. Kartaga o‘tkazmada
        summa tiyinigacha mos bo‘lishi kerak, aks holda to‘lov avtomatik topilmaydi.
      </Notice>

      <InlineCta text="Botni ochib, o‘zingizga kerakli bo‘limni tanlang — narx va shartlar to‘lovdan oldin ko‘rinadi." />

      <h2 id="sharh">Mijozlar nima deydi</h2>
      <p>
        Sharhlar tizimini 2026-yil sentabrda ishga tushirdik. Baho <b>faqat haqiqiy buyurtmadan
        keyin</b> so‘raladi va har bir matn moderatsiyadan o‘tadi. Hozircha <b>513</b> ta baho
        yig‘ildi, o‘rtachasi <b>4,66</b>, shundan <b>422</b> tasi besh yulduz. Matnli sharhlar soni —{" "}
        <b>121</b>.
      </p>
      <p>
        Biz sharhlarni tanlab olmaymiz: past baho ham, tanqid ham xuddi shu tizimda chiqadi. Ularni{" "}
        <Link href="/#izohlar">bosh sahifadagi sharhlar bo‘limida</Link> o‘qishingiz mumkin.
      </p>

      <h2 id="boshlash">Qanday boshlash mumkin</h2>
      <Steps>
        <Step title="Botni oching">
          Telegram’da <b>@StarsPaymee_bot</b> yoki starstg.uz saytidagi havola orqali.
        </Step>
        <Step title="Bo‘limni tanlang">Stars, Premium, sovg‘a yoki boshqa yo‘nalish.</Step>
        <Step title="Ma‘lumotni kiriting">
          Qabul qiluvchi username yoki ID’ni yozing va qayta o‘qib tekshiring.
        </Step>
        <Step title="Narxni ko‘ring">Yakuniy summa va shartlar to‘lovdan oldin ko‘rinadi.</Step>
        <Step title="To‘lang va kuting">
          Onlayn shlyuzda buyurtma avtomatik davom etadi. Savol bo‘lsa, qo‘llab-quvvatlashga yozing.
        </Step>
      </Steps>
      <p>
        Bot manzilini tekshirishni unutmang: to‘g‘ri manzil — <b>@StarsPaymee_bot</b>. Eng xavfsiz
        yo‘l — saytdagi yoki shu maqoladagi havoladan o‘tish.
      </p>

      <h2 id="oldinda">Oldinda nima bor</h2>
      <p>
        Keyingi bosqichda ham e‘tiborimiz o‘sha to‘rt narsada qoladi: <b>tezlik</b>,{" "}
        <b>mas‘uliyat</b>, <b>qulaylik</b> va <b>soddalik</b>. Yangi mahsulotlar qo‘shilaveradi,
        lekin asosiy o‘lchov o‘zgarmaydi — foydalanuvchi buyurtmani ortiqcha savolsiz bera olishi
        kerak.
      </p>
      <p>
        Bizni tanlaganingiz uchun rahmat. Fikringiz bo‘lsa, botga yozing yoki saytdagi sharh
        formasidan foydalaning — har bir mulohaza o‘qiladi.
      </p>

      <Sources
        label="Tegishli sahifalar"
        items={[
          { href: "/uz/stars", label: "Telegram Stars narxlari", note: "paketlar va to‘lov usullari" },
          { href: "/uz/premium", label: "Telegram Premium narxlari", note: "barcha muddatlar" },
          { href: "/uz/about", label: "StarsPaymee haqida", note: "xizmat va aloqa" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "StarsPaymee necha yildan beri ishlaydi?",
    answer:
      "Xizmat 1,5 yildan ortiq ishlaydi. Hozirgi buyurtma tizimi 2026-yil 12-martda ishga tushgan, maqoladagi raqamlar o‘sha kundan beri hisoblanadi.",
  },
  {
    question: "Nechta buyurtma bajarilgan?",
    answer:
      "2026-yil 23-sentabr holatiga 15 375 buyurtma qabul qilingan, shundan 8 059 tasi bajarilgan. Qolganlari asosan to‘lov qilinmay muddati o‘tgan buyurtmalar.",
  },
  {
    question: "Qanday to‘lov usullari bor?",
    answer:
      "Beshta: Click SuperApp, Payme, СБП (rubl), Uzcard/Humo o‘tkazmasi va ichki balans. Birinchi uchtasi avtomatik tasdiqlanadigan onlayn shlyuz.",
  },
  {
    question: "Botda qanday mahsulotlar bor?",
    answer:
      "13 xil: Telegram Stars, Premium, sovg‘alar, virtual raqam, NFT xaridi va ijarasi, kanal Boost’i, Steam hamyoni, o‘yin to‘ldirish, gift card va boshqalar.",
  },
  {
    question: "Sharhlar haqiqiymi?",
    answer:
      "Ha. Baho faqat haqiqiy buyurtmadan keyin so‘raladi va har bir matn moderatsiyadan o‘tadi. Hozircha 513 ta baho bor, o‘rtachasi 4,66.",
  },
  {
    question: "StarsPaymee botini qayerdan topaman?",
    answer:
      "Telegram’dagi manzil — @StarsPaymee_bot. Botga starstg.uz sayti orqali ham o‘tishingiz mumkin; bu eng xavfsiz yo‘l.",
  },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      StarsPaymee исполнилось <b>1,5 года</b>. Нынешняя система работает с марта 2026 года, и за это
      время принято <b>15 375</b> заказов, из них <b>8 059</b> выполнено. В боте{" "}
      <b>12 201</b> зарегистрированный пользователь, <b>2 303</b> из них совершили покупку. Оценок
      от клиентов — <b>513</b>, средняя <b>4,66</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="На странице"
        items={[
          { href: "#yol", label: "Полтора года пути" },
          { href: "#raqamlar", label: "В цифрах" },
          { href: "#mahsulot", label: "Как добавлялись продукты" },
          { href: "#tolov", label: "Способы оплаты" },
          { href: "#sharh", label: "Что говорят клиенты" },
          { href: "#boshlash", label: "Как начать" },
        ]}
      />

      <KeyFacts label="Коротко">
        <li>
          Сервис работает <b>больше 1,5 лет</b>, нынешняя система — <b>с марта 2026</b>.
        </li>
        <li>
          Принято <b>15 375</b> заказов, выполнено <b>8 059</b>.
        </li>
        <li>
          <b>13</b> продуктов: от Stars и Premium до аренды NFT и гифт-карт.
        </li>
        <li>
          <b>5</b> способов оплаты, из них <b>3</b> — онлайн-шлюзы с автоподтверждением.
        </li>
      </KeyFacts>

      <h2 id="yol">Полтора года пути</h2>
      <p>
        StarsPaymee исполнилось полтора года. Это не просто дата: за ней ежедневный приём заказов,
        исправление ошибок и ответы на вопросы. Спасибо каждому, кто выбрал нас, посоветовал
        знакомым и оставил отзыв.
      </p>
      <p>
        Цель с самого начала не менялась: <b>сделать цифровую покупку в Telegram понятной и
        быстрой</b>. Кто-то приходит за первыми звёздами, кто-то выбирает подписку Premium, кто-то
        хочет отправить подарок близкому. Запросы разные, а ожидание одно: понятный процесс и заказ,
        доставленный вовремя.
      </p>
      <Notice label="Честно о цифрах">
        Все числа ниже взяты из базы бота и верны на <b>23 сентября 2026 года</b>. Нынешняя система
        заказов запущена 12 марта 2026 года, поэтому цифры в таблицах считаются <b>с этой даты</b>.
        Общий возраст сервиса при этом больше.
      </Notice>

      <h2 id="raqamlar">В цифрах</h2>
      <NumbersTable locale="ru" />
      <p>
        Часть заказов остаётся неоплаченной и истекает по времени — так бывает в любом онлайн-сервисе.
        Поэтому мы показываем <b>принятые</b> и <b>выполненные</b> отдельно: первое говорит об
        интересе, второе — о реально оказанной услуге.
      </p>
      <p>
        За последние три месяца темп заметно вырос: в июле, августе и сентябре принято{" "}
        <b>больше 4 000</b> заказов в каждом. Это в несколько раз больше весенних месяцев.
      </p>

      <h2 id="mahsulot">Как добавлялись продукты</h2>
      <p>
        Мы начали с одного направления и добавляли новые по мере запросов. В таблице — дата{" "}
        <b>первого реального заказа</b> по каждому направлению:
      </p>
      <TimelineTable locale="ru" />
      <p>
        Сегодня в боте <b>13</b> продуктов: Telegram Stars, Premium, подарки, виртуальный номер,
        покупка и аренда NFT, буст канала, кошелёк Steam, пополнение игр и гифт-карты. Больше всего
        заказов у Stars, на втором месте — подарки Telegram.
      </p>
      <InfoGrid>
        <InfoCard title="Самое востребованное" emoji="⭐">
          Telegram Stars — 9 860 заказов. На втором месте подарки (2 059), на третьем Premium
          (1 134).
        </InfoCard>
        <InfoCard title="Самое новое" emoji="🆕">
          Гифт-карты и NFT-маркет запущены в сентябре 2026 года — это ещё молодое направление.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">Способы оплаты</h2>
      <p>
        Оплата — самая ответственная часть. Сейчас в боте работают пять способов, и три из них —{" "}
        <b>онлайн-шлюзы с автоподтверждением</b>: после оплаты заказ идёт дальше без ручной проверки.
      </p>
      <PaymentTable locale="ru" />
      <p>
        Платежи Click и Payme проходят <b>через официальный платёжный шлюз</b>, СБП — для тех, кто
        платит рублями. Обычный перевод с карты Uzcard или Humo тоже остаётся: для тех, у кого нет
        другого варианта.
      </p>
      <Notice label="Важно">
        В окне оплаты всегда сверяйте <b>получателя</b> и <b>сумму</b>. При переводе на карту сумма
        должна совпадать точь-в-точь, иначе платёж не найдётся автоматически.
      </Notice>

      <InlineCta text="Откройте бота и выберите нужный раздел — цена и условия видны до оплаты." />

      <h2 id="sharh">Что говорят клиенты</h2>
      <p>
        Систему отзывов мы запустили в сентябре 2026 года. Оценку просим <b>только после реального
        заказа</b>, и каждый текст проходит модерацию. Сейчас собрано <b>513</b> оценок, средняя —{" "}
        <b>4,66</b>, из них <b>422</b> пятёрки. Отзывов с текстом — <b>121</b>.
      </p>
      <p>
        Мы не отбираем отзывы вручную: низкие оценки и критика выходят через ту же систему. Прочитать
        их можно в <Link href="/#izohlar">разделе отзывов на главной</Link>.
      </p>

      <h2 id="boshlash">Как начать</h2>
      <Steps>
        <Step title="Откройте бота">
          В Telegram — <b>@StarsPaymee_bot</b>, или по ссылке с сайта starstg.uz.
        </Step>
        <Step title="Выберите раздел">Stars, Premium, подарок или другое направление.</Step>
        <Step title="Введите данные">Укажите username или ID получателя и перечитайте их.</Step>
        <Step title="Посмотрите цену">Итоговая сумма и условия видны до оплаты.</Step>
        <Step title="Оплатите и дождитесь">
          Через онлайн-шлюз заказ продолжается автоматически. Есть вопрос — напишите в поддержку.
        </Step>
      </Steps>
      <p>
        Не забудьте сверить адрес бота: правильный — <b>@StarsPaymee_bot</b>. Самый безопасный путь —
        переход по ссылке с сайта или из этой статьи.
      </p>

      <h2 id="oldinda">Что дальше</h2>
      <p>
        На следующем этапе внимание остаётся на тех же четырёх вещах: <b>скорость</b>,{" "}
        <b>ответственность</b>, <b>удобство</b> и <b>простота</b>. Продукты будут добавляться, но
        главный критерий не меняется: пользователь должен оформить заказ без лишних вопросов.
      </p>
      <p>
        Спасибо, что выбираете нас. Есть замечание — напишите в бот или через форму отзыва на сайте:
        читаем каждое.
      </p>

      <Sources
        label="Связанные страницы"
        items={[
          { href: "/ru/stars", label: "Цены на Telegram Stars", note: "пакеты и способы оплаты" },
          { href: "/ru/premium", label: "Цены на Telegram Premium", note: "все сроки" },
          { href: "/ru/about", label: "О StarsPaymee", note: "сервис и контакты" },
        ]}
      />
    </>
  );
}

const ruFaq = [
  {
    question: "Сколько лет работает StarsPaymee?",
    answer:
      "Сервис работает больше 1,5 лет. Нынешняя система заказов запущена 12 марта 2026 года, и цифры в статье считаются с этой даты.",
  },
  {
    question: "Сколько заказов выполнено?",
    answer:
      "На 23 сентября 2026 года принято 15 375 заказов, из них выполнено 8 059. Остальные — в основном неоплаченные заказы, истёкшие по времени.",
  },
  {
    question: "Какие есть способы оплаты?",
    answer:
      "Пять: Click SuperApp, Payme, СБП (рубли), перевод на Uzcard/Humo и внутренний баланс. Первые три — онлайн-шлюзы с автоподтверждением.",
  },
  {
    question: "Какие продукты есть в боте?",
    answer:
      "Тринадцать: Telegram Stars, Premium, подарки, виртуальный номер, покупка и аренда NFT, буст канала, кошелёк Steam, пополнение игр, гифт-карты и другое.",
  },
  {
    question: "Отзывы настоящие?",
    answer:
      "Да. Оценку просим только после реального заказа, каждый текст проходит модерацию. Сейчас собрано 513 оценок, средняя 4,66.",
  },
  {
    question: "Где найти бот StarsPaymee?",
    answer:
      "Адрес в Telegram — @StarsPaymee_bot. Перейти можно и через сайт starstg.uz; это самый безопасный путь.",
  },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      StarsPaymee has turned <b>1.5 years old</b>. The current system has run since March 2026, and
      in that time it took <b>15,375</b> orders and completed <b>8,059</b> of them. The bot has{" "}
      <b>12,201</b> registered users, <b>2,303</b> of whom have bought something. Customers have
      left <b>513</b> ratings, averaging <b>4.66</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="On this page"
        items={[
          { href: "#yol", label: "A year and a half" },
          { href: "#raqamlar", label: "In numbers" },
          { href: "#mahsulot", label: "How the products grew" },
          { href: "#tolov", label: "Payment methods" },
          { href: "#sharh", label: "What customers say" },
          { href: "#boshlash", label: "How to start" },
        ]}
      />

      <KeyFacts label="In short">
        <li>
          The service has run for <b>more than 1.5 years</b>; the current system since{" "}
          <b>March 2026</b>.
        </li>
        <li>
          <b>15,375</b> orders taken, <b>8,059</b> completed.
        </li>
        <li>
          <b>13</b> products, from Stars and Premium to NFT rental and gift cards.
        </li>
        <li>
          <b>5</b> payment methods, <b>3</b> of them auto-confirmed online gateways.
        </li>
      </KeyFacts>

      <h2 id="yol">A year and a half</h2>
      <p>
        StarsPaymee has turned one and a half. That is not just a date: behind it sit daily orders,
        fixes, and answers to questions. Thank you to everyone who chose us, recommended us to a
        friend, or left a review.
      </p>
      <p>
        The goal has not changed since day one: <b>make a digital purchase in Telegram clear and
        fast</b>. Some people arrive for their first stars, some pick a Premium subscription, some
        want to send a gift. The needs differ, the expectation is the same: a clear process and an
        order delivered on time.
      </p>
      <Notice label="Honest about the numbers">
        Every figure below comes from the bot’s database and is correct as of{" "}
        <b>23 September 2026</b>. The current order system launched on 12 March 2026, so the numbers
        in the tables are counted <b>from that date</b>. The service itself is older than that.
      </Notice>

      <h2 id="raqamlar">In numbers</h2>
      <NumbersTable locale="en" />
      <p>
        Some orders are never paid for and expire, which happens in any online service. That is why
        we show <b>taken</b> and <b>completed</b> separately: the first shows interest, the second
        shows service actually delivered.
      </p>
      <p>
        The pace has grown sharply over the last three months: July, August and September each took{" "}
        <b>more than 4,000</b> orders. That is several times the spring figures.
      </p>

      <h2 id="mahsulot">How the products grew</h2>
      <p>
        We started with one line and added others as people asked for them. The table shows when each
        line saw its <b>first real order</b>:
      </p>
      <TimelineTable locale="en" />
      <p>
        Today the bot carries <b>13</b> products: Telegram Stars, Premium, gifts, virtual numbers,
        NFT purchase and rental, channel boosts, Steam wallet, game top-ups and gift cards. Stars
        draw the most orders, with Telegram gifts second.
      </p>
      <InfoGrid>
        <InfoCard title="Most requested" emoji="⭐">
          Telegram Stars — 9,860 orders. Gifts come second (2,059) and Premium third (1,134).
        </InfoCard>
        <InfoCard title="Newest" emoji="🆕">
          Gift cards and the NFT market launched in September 2026 and are still young.
        </InfoCard>
      </InfoGrid>

      <h2 id="tolov">Payment methods</h2>
      <p>
        Payment is the part we treat most carefully. Five methods work today, and three of them are{" "}
        <b>auto-confirmed online gateways</b>: once paid, the order continues without a manual check.
      </p>
      <PaymentTable locale="en" />
      <p>
        Click and Payme run <b>through an official payment gateway</b>, and SBP serves those paying
        in rubles. A plain Uzcard or Humo transfer stays available for people who have no other way.
      </p>
      <Notice label="Worth checking">
        In the payment sheet, always verify the <b>payee</b> and the <b>amount</b>. For a card
        transfer the amount has to match to the last so’m, otherwise the payment is not matched
        automatically.
      </Notice>

      <InlineCta text="Open the bot and pick the section you need — the price and terms are shown before you pay." />

      <h2 id="sharh">What customers say</h2>
      <p>
        We launched the review system in September 2026. A rating is asked for <b>only after a real
        order</b>, and every text goes through moderation. So far <b>513</b> ratings have come in,
        averaging <b>4.66</b>, with <b>422</b> of them five stars. <b>121</b> carry written text.
      </p>
      <p>
        We do not hand-pick reviews: low ratings and criticism come through the same system. You can
        read them in the <Link href="/#izohlar">reviews section on the homepage</Link>.
      </p>

      <h2 id="boshlash">How to start</h2>
      <Steps>
        <Step title="Open the bot">
          In Telegram at <b>@StarsPaymee_bot</b>, or through the link on starstg.uz.
        </Step>
        <Step title="Pick a section">Stars, Premium, a gift or another line.</Step>
        <Step title="Enter the details">Type the recipient’s username or ID, then read it back.</Step>
        <Step title="Check the price">The final amount and terms appear before you pay.</Step>
        <Step title="Pay and wait">
          Through an online gateway the order continues automatically. Any question goes to support.
        </Step>
      </Steps>
      <p>
        Do check the bot’s handle: the correct one is <b>@StarsPaymee_bot</b>. The safest route is
        the link on the site or in this article.
      </p>

      <h2 id="oldinda">What comes next</h2>
      <p>
        The next stretch keeps the same four priorities: <b>speed</b>, <b>responsibility</b>,{" "}
        <b>convenience</b> and <b>simplicity</b>. Products will keep arriving, but the measure stays
        the same: someone should be able to place an order without extra questions.
      </p>
      <p>
        Thank you for choosing us. If you have a remark, write to the bot or use the review form on
        the site — every one of them gets read.
      </p>

      <Sources
        label="Related pages"
        items={[
          { href: "/en/stars", label: "Telegram Stars prices", note: "packs and payment methods" },
          { href: "/en/premium", label: "Telegram Premium prices", note: "every plan" },
          { href: "/en/about", label: "About StarsPaymee", note: "the service and contacts" },
        ]}
      />
    </>
  );
}

const enFaq = [
  {
    question: "How long has StarsPaymee been running?",
    answer:
      "The service has run for more than 1.5 years. The current order system launched on 12 March 2026, and the figures in this article are counted from that date.",
  },
  {
    question: "How many orders have been completed?",
    answer:
      "As of 23 September 2026, 15,375 orders were taken and 8,059 completed. Most of the rest are unpaid orders that expired.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Five: Click SuperApp, Payme, SBP (rubles), an Uzcard/Humo transfer and the internal balance. The first three are auto-confirmed online gateways.",
  },
  {
    question: "What products does the bot carry?",
    answer:
      "Thirteen: Telegram Stars, Premium, gifts, virtual numbers, NFT purchase and rental, channel boosts, Steam wallet, game top-ups, gift cards and more.",
  },
  {
    question: "Are the reviews real?",
    answer:
      "Yes. A rating is asked for only after a real order and every text is moderated. There are 513 ratings so far, averaging 4.66.",
  },
  {
    question: "Where do I find the StarsPaymee bot?",
    answer:
      "The Telegram handle is @StarsPaymee_bot. You can also reach it through starstg.uz, which is the safest route.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "trust",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  keywords: [
    "starspaymee",
    "starspaymee bot",
    "starstg.uz",
    "telegram stars sotib olish",
    "telegram premium olish",
    "telegram stars bot",
    "o‘zbekistonda telegram stars",
    "starspaymee отзывы",
    "телеграм старс узбекистан",
    "starspaymee review",
  ],
  locales: {
    uz: {
      title: "StarsPaymee 1,5 yoshda: 18 oydan beri siz bilan",
      excerpt:
        "StarsPaymee 1,5 yoshda. Bot bazasidan olingan haqiqiy raqamlar: nechta buyurtma bajarildi, qaysi mahsulotlar qachon qo‘shildi, qanday to‘lov usullari ishlaydi va mijozlar nima deydi.",
      metaTitle: "StarsPaymee 1,5 yoshda — 18 oy siz bilan",
      metaDescription:
        "StarsPaymee 1,5 yoshda. 15 375 buyurtma, 13 mahsulot, 5 to‘lov usuli va 513 ta mijoz bahosi — bot bazasidan olingan haqiqiy raqamlar bilan hisobot.",
      answerTitle: "Qisqacha",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Bizni tanlaganingiz uchun rahmat",
      ctaBody:
        "Telegram Stars yoki Premium kerak bo‘lsa, botni oching — narx va shartlar to‘lovdan oldin ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "StarsPaymee — 1,5 года: полтора года вместе с вами",
      excerpt:
        "StarsPaymee исполнилось 1,5 года. Реальные цифры из базы бота: сколько заказов выполнено, когда появлялись продукты, какие способы оплаты работают и что говорят клиенты.",
      metaTitle: "StarsPaymee — 1,5 года вместе с вами",
      metaDescription:
        "StarsPaymee — 1,5 года. 15 375 заказов, 13 продуктов, 5 способов оплаты и 513 оценок клиентов: отчёт с реальными цифрами из базы бота.",
      answerTitle: "Коротко",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Спасибо, что выбираете нас",
      ctaBody:
        "Нужны Telegram Stars или Premium — откройте бота: цена и условия видны до оплаты.",
      faq: ruFaq,
    },
    en: {
      title: "StarsPaymee turns 1.5: eighteen months with you",
      excerpt:
        "StarsPaymee has turned 1.5 years old. Real figures from the bot's database: how many orders were completed, when each product arrived, which payment methods run, and what customers say.",
      metaTitle: "StarsPaymee turns 1.5 years old",
      metaDescription:
        "StarsPaymee turns 1.5. A report with real numbers from the bot's database: 15,375 orders, 13 products, 5 payment methods and 513 customer ratings.",
      answerTitle: "In brief",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Thank you for choosing us",
      ctaBody:
        "If you need Telegram Stars or Premium, open the bot — the price and terms show before you pay.",
      faq: enFaq,
    },
  },
};
