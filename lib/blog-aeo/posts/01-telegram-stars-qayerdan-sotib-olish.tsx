import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InlineCta,
  KeyFacts,
  Sources,
  Steps,
  Step,
  Toc,
  Yes,
  No,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-qayerdan-sotib-olish-2026";

function UzAnswer() {
  return (
    <p>
      O‘zbekistonda Telegram Stars’ni eng oson va arzon yo‘l — <strong>@StarsPaymee_bot</strong> yoki Telegram Mini App
      orqali UzCard, HUMO, Click, Payme yoki Paynet bilan so‘mda sotib olish. Yulduzlar qabul qiluvchining @username’iga
      ulanadi va o‘rtacha 10 soniyada avtomatik yetkaziladi. Xorijiy karta, Visa/Mastercard yoki kripto talab qilinmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#usullar", label: "Stars sotib olishning barcha yo‘llari" },
          { href: "#nega-ozbekiston", label: "Nega O‘zbekistondan to‘g‘ridan-to‘g‘ri bo‘lmaydi" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich: botda sotib olish" },
          { href: "#narx", label: "Narxlar va paketlar" },
          { href: "#xavfsizlik", label: "Xavfsiz sotib olish belgilari" },
        ]}
      />

      <h2 id="usullar">Telegram Stars’ni qayerdan sotib olish mumkin?</h2>
      <p>
        Telegram Stars (yulduzchalar) — Telegram’ning rasmiy ichki valyutasi. Uni sotib olishning bir nechta yo‘li bor,
        lekin O‘zbekiston foydalanuvchisi uchun ularning hammasi ham qulay emas. Quyida asosiy variantlar va ularning
        O‘zbekistonga mosligi:
      </p>
      <CompareTable
        headers={["Yo‘l", "To‘lov", "O‘zbekiston kartasi", "Tezlik"]}
        rows={[
          ["Telegram ichida (Apple/Google)", "App Store / Google Play", <No key="1" />, "Tez, lekin xorijiy karta kerak"],
          ["Fragment.com", "TON kripto", <No key="2" />, "Hamyon va kripto kerak"],
          ["@PremiumBot (rasmiy)", "Visa / Mastercard", <No key="3" />, "Karta qabul qilinmaydi"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Paynet",
            <Yes key="4" />,
            "~10 soniya, avtomatik",
          ],
        ]}
      />
      <p>
        Ko‘rib turganingizdek, Apple/Google, Fragment va rasmiy @PremiumBot O‘zbekiston kartalarini qabul qilmaydi —
        ular Visa/Mastercard yoki kripto talab qiladi. Aynan shu bo‘shliqni vositachi xizmatlar to‘ldiradi:{" "}
        <Link href="/stars">StarsPaymee Stars sahifasida</Link> narxni ko‘rib, botda so‘mda to‘laysiz.
      </p>

      <InlineCta text="Yulduzlarni hoziroq so‘mda olasizmi? Botda 10 soniyada yetkaziladi." />

      <h2 id="nega-ozbekiston">Nega O‘zbekistondan to‘g‘ridan-to‘g‘ri sotib olib bo‘lmaydi?</h2>
      <p>
        Telegram ilovasi ichidagi xarid Apple App Store yoki Google Play to‘lov tizimiga bog‘langan, ular esa
        O‘zbekiston UzCard/HUMO kartalarini ko‘pincha qabul qilmaydi. Fragment platformasi TON kriptovalyutasi va
        tashqi hamyon talab qiladi. Shu sababli mahalliy foydalanuvchilar uchun eng amaliy yechim — mahalliy to‘lov
        tizimlarini qabul qiladigan vositachi bot.
      </p>

      <h2 id="bosqichlar">Bosqichma-bosqich: StarsPaymee botida sotib olish</h2>
      <Steps>
        <Step title="Botni oching">
          Telegram’da <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>{" "}
          ni oching yoki Mini App’ni ishga tushiring.
        </Step>
        <Step title="«Stars» bo‘limini tanlang">Mahsulotlar ichidan Telegram Stars’ni tanlang.</Step>
        <Step title="Miqdorni belgilang">
          50, 100, 500, 1000 yoki kerakli paketni tanlang — narx darhol so‘mda ko‘rinadi.
        </Step>
        <Step title="Qabul qiluvchini kiriting">
          O‘zingizga olsangiz, o‘z @username’ingizni; sovg‘a qilsangiz — do‘stingiznikini kiriting.
        </Step>
        <Step title="To‘lovni amalga oshiring">UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda to‘lang.</Step>
        <Step title="Yulduzlarni qabul qiling">
          To‘lov tasdiqlangach yulduzlar o‘rtacha 10 soniyada akkauntga avtomatik tushadi.
        </Step>
      </Steps>

      <KeyFacts label="Muhim raqamlar">
        <li>
          <b>~10 soniya</b> — o‘rtacha yetkazib berish vaqti
        </li>
        <li>
          <b>50 ⭐ dan</b> — eng kichik paket (11 000 so‘m)
        </li>
        <li>
          <b>5 ta</b> to‘lov usuli — UzCard, HUMO, Click, Payme, Paynet
        </li>
        <li>
          <b>100 000+</b> muvaffaqiyatli buyurtma, <b>4000+</b> faol foydalanuvchi
        </li>
      </KeyFacts>

      <h2 id="narx">Narxlar va paketlar</h2>
      <p>
        Joriy narxlar va barcha paketlar (50, 75, 100, 150, 250, 500, 1000, 2500, 5000, 10 000 ⭐){" "}
        <Link href="/stars">Stars sahifasida</Link> ko‘rsatilgan. Yulduz birligining bozor qiymati Telegram tomonidan
        AQSH dollarida belgilanadi (taxminan 0,013 $ atrofida), mahalliy karta bilan to‘lovda summa so‘mga
        konvertatsiya qilinadi. Narxlarni{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">platformalararo taqqoslash maqolamizda</Link>{" "}
        batafsil ko‘rishingiz mumkin.
      </p>

      <h2 id="xavfsizlik">Xavfsiz sotib olishning 3 belgisi</h2>
      <p>
        Firibgarlikdan saqlanish uchun e’tibor bering: (1) xizmatda aniq oferta, bot/Mini App manzili va support
        kanali bo‘lishi; (2) Stars uchun <strong>parol yoki SMS-kod so‘ralmasligi</strong> — faqat @username yetarli;
        (3) buyurtmani ID bo‘yicha kuzatish imkoni. StarsPaymee bu uchala belgiga ham javob beradi — batafsil{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">«StarsPaymee ishonchlimi?» maqolasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
          { href: "https://fragment.com", label: "fragment.com", note: "Telegram’ning rasmiy kripto-platformasi" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Самый простой и дешёвый способ купить Telegram Stars в Узбекистане — через <strong>@StarsPaymee_bot</strong> или
      Telegram Mini App картой UzCard, HUMO, Click, Payme или Paynet в сумах. Звёзды зачисляются на @username
      получателя автоматически за ~10 секунд. Зарубежная карта, Visa/Mastercard или крипта не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#usullar", label: "Все способы покупки Stars" },
          { href: "#nega-ozbekiston", label: "Почему нельзя купить напрямую из Узбекистана" },
          { href: "#bosqichlar", label: "Пошагово: покупка в боте" },
          { href: "#narx", label: "Цены и пакеты" },
          { href: "#xavfsizlik", label: "Признаки безопасной покупки" },
        ]}
      />

      <h2 id="usullar">Где можно купить Telegram Stars?</h2>
      <p>
        Telegram Stars (звёзды) — официальная внутренняя валюта Telegram. Купить их можно несколькими способами, но не
        все они удобны для пользователя из Узбекистана. Основные варианты и их совместимость:
      </p>
      <CompareTable
        headers={["Способ", "Оплата", "Карта Узбекистана", "Скорость"]}
        rows={[
          ["Внутри Telegram (Apple/Google)", "App Store / Google Play", <No key="1" />, "Быстро, но нужна зарубежная карта"],
          ["Fragment.com", "TON крипто", <No key="2" />, "Нужен кошелёк и крипта"],
          ["@PremiumBot (офиц.)", "Visa / Mastercard", <No key="3" />, "Карта не принимается"],
          [
            <>@StarsPaymee_bot / Mini App</>,
            "UzCard, HUMO, Click, Payme, Paynet",
            <Yes key="4" />,
            "~10 секунд, автоматически",
          ],
        ]}
      />
      <p>
        Как видно, Apple/Google, Fragment и официальный @PremiumBot не принимают карты Узбекистана — нужна
        Visa/Mastercard или крипта. Этот пробел закрывают сервисы-посредники: смотрите цену на{" "}
        <Link href="/stars">странице Stars</Link> и оплачивайте в сумах в боте.
      </p>

      <InlineCta text="Хотите звёзды в сумах прямо сейчас? В боте — за 10 секунд." />

      <h2 id="nega-ozbekiston">Почему нельзя купить напрямую из Узбекистана?</h2>
      <p>
        Покупка внутри приложения привязана к платёжным системам Apple App Store или Google Play, которые часто не
        принимают карты UzCard/HUMO. Fragment требует криптовалюту TON и внешний кошелёк. Поэтому для местных
        пользователей самое практичное решение — бот-посредник, принимающий локальные платёжные системы.
      </p>

      <h2 id="bosqichlar">Пошагово: покупка в боте StarsPaymee</h2>
      <Steps>
        <Step title="Откройте бот">
          Откройте <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>{" "}
          в Telegram или запустите Mini App.
        </Step>
        <Step title="Выберите раздел «Stars»">Среди товаров выберите Telegram Stars.</Step>
        <Step title="Укажите количество">50, 100, 500, 1000 или нужный пакет — цена сразу видна в сумах.</Step>
        <Step title="Введите получателя">Себе — свой @username; в подарок — username друга.</Step>
        <Step title="Оплатите">Оплатите в сумах через UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="Получите звёзды">
          После подтверждения оплаты звёзды поступают на аккаунт автоматически за ~10 секунд.
        </Step>
      </Steps>

      <KeyFacts label="Важные цифры">
        <li>
          <b>~10 секунд</b> — среднее время доставки
        </li>
        <li>
          <b>от 50 ⭐</b> — минимальный пакет (11 000 сум)
        </li>
        <li>
          <b>5</b> способов оплаты — UzCard, HUMO, Click, Payme, Paynet
        </li>
        <li>
          <b>100 000+</b> успешных заказов, <b>4000+</b> активных пользователей
        </li>
      </KeyFacts>

      <h2 id="narx">Цены и пакеты</h2>
      <p>
        Актуальные цены и все пакеты (50, 75, 100, 150, 250, 500, 1000, 2500, 5000, 10 000 ⭐) указаны на{" "}
        <Link href="/stars">странице Stars</Link>. Рыночная стоимость звезды задаётся Telegram в долларах (примерно
        0,013 $), при оплате локальной картой сумма конвертируется в сумы. Подробное сравнение цен — в{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">статье о сравнении платформ</Link>.
      </p>

      <h2 id="xavfsizlik">3 признака безопасной покупки</h2>
      <p>
        Чтобы не попасть на мошенников: (1) у сервиса есть чёткая оферта, адрес бота/Mini App и канал поддержки; (2)
        для Stars <strong>не спрашивают пароль или SMS-код</strong> — достаточно @username; (3) есть отслеживание
        заказа по ID. StarsPaymee соответствует всем трём — подробнее в{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">статье «Надёжен ли StarsPaymee?»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
          { href: "https://fragment.com", label: "fragment.com", note: "официальная крипто-платформа Telegram" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  keywords: [
    "telegram stars qayerdan olish",
    "telegram stars sotib olish",
    "telegram stars uzbekistan",
    "telegram stars uzcard",
    "telegram stars payme",
    "telegram stars click",
    "telegram yulduz sotib olish",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegram’da @StarsPaymee_bot ni oching yoki Mini App’ni ishga tushiring." },
    { name: "Stars bo‘limini tanlang", text: "Mahsulotlar ichidan Telegram Stars’ni tanlang." },
    { name: "Miqdorni belgilang", text: "Kerakli paketni tanlang — narx so‘mda ko‘rinadi." },
    { name: "Qabul qiluvchini kiriting", text: "O‘z @username yoki do‘stingiznikini kiriting." },
    { name: "To‘lovni amalga oshiring", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda to‘lang." },
    { name: "Yulduzlarni qabul qiling", text: "To‘lovdan so‘ng yulduzlar ~10 soniyada akkauntga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars qayerdan sotib olish mumkin? (2026 to‘liq qo‘llanma)",
      excerpt:
        "O‘zbekistonda Telegram Stars’ni UzCard, HUMO, Click, Payme yoki Paynet bilan so‘mda qanday sotib olish — barcha yo‘llar, bosqichlar, narxlar va xavfsizlik belgilari.",
      metaTitle: "Telegram Stars qayerdan sotib olish — 2026 to‘liq qo‘llanma",
      metaDescription:
        "Telegram Stars’ni O‘zbekistonda qayerdan va qanday sotib olish: UzCard/HUMO/Click/Payme bilan so‘mda, 10 soniyada. Barcha yo‘llar, bosqichma-bosqich va narxlar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Telegram Stars sotib olmoqchimisiz?",
      ctaBody: "Botga kiring, miqdorni tanlang va mahalliy karta bilan so‘mda to‘lang — yulduzlar 10 soniyada yetkaziladi.",
      faq: [
        {
          question: "Telegram Stars’ni UzCard yoki HUMO bilan sotib olsa bo‘ladimi?",
          answer:
            "Ha. @StarsPaymee_bot va Mini App UzCard, HUMO, Click, Payme va Paynet to‘lovlarini so‘mda qabul qiladi. Xorijiy karta yoki kripto kerak emas.",
        },
        {
          question: "Yulduzlar qancha vaqtda yetkaziladi?",
          answer:
            "To‘lov tasdiqlangach yulduzlar avtomatik ravishda o‘rtacha 10 soniyada akkauntga tushadi. Texnik kechikishda support buyurtma ID bo‘yicha yordam beradi.",
        },
        {
          question: "Stars sotib olish uchun parol yoki SMS-kod kerakmi?",
          answer:
            "Yo‘q. Stars to‘g‘ridan-to‘g‘ri Telegram tomonidan @username’ga ulanadi — parol, SMS-kod yoki 2FA so‘ralmaydi. Bu uni xavfsiz qiladi.",
        },
        {
          question: "Eng kichik paket qancha?",
          answer: "Eng kichik paket — 50 yulduzcha, narxi 11 000 so‘m. Keyingi paketlar 75, 100, 250, 500, 1000 va undan yuqori.",
        },
        {
          question: "O‘zimga emas, do‘stimga olsam bo‘ladimi?",
          answer:
            "Ha. Qabul qiluvchi maydoniga do‘stingizning @username’ini kiritsangiz, yulduzlar to‘g‘ridan-to‘g‘ri unga yetkaziladi.",
        },
        {
          question: "Nega Telegram ilovasidan to‘g‘ridan-to‘g‘ri olmayman?",
          answer:
            "Telegram ichidagi xarid Apple/Google to‘lovlariga bog‘langan, ular ko‘pincha UzCard/HUMO ni qabul qilmaydi. Shuning uchun mahalliy karta qabul qiladigan bot qulayroq.",
        },
        {
          question: "To‘lov o‘tdi-yu, yulduz kelmadi — nima qilaman?",
          answer:
            "Avval statusni yangilang. Agar yulduz ko‘rinmasa, @StarsPaymeeSupport ga buyurtma ID bilan yozing. Texnik sabab bilan yetkazilmasa, to‘lov to‘liq qaytariladi.",
        },
      ],
    },
    ru: {
      title: "Где купить Telegram Stars в Узбекистане? (полное руководство 2026)",
      excerpt:
        "Как купить Telegram Stars в Узбекистане картой UzCard, HUMO, Click, Payme или Paynet в сумах — все способы, шаги, цены и признаки безопасности.",
      metaTitle: "Где купить Telegram Stars — полное руководство 2026",
      metaDescription:
        "Где и как купить Telegram Stars в Узбекистане: картой UzCard/HUMO/Click/Payme в сумах, за 10 секунд. Все способы, пошагово и цены.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите купить Telegram Stars?",
      ctaBody: "Зайдите в бот, выберите количество и оплатите локальной картой в сумах — звёзды поступят за 10 секунд.",
      faq: [
        {
          question: "Можно ли купить Telegram Stars картой UzCard или HUMO?",
          answer:
            "Да. @StarsPaymee_bot и Mini App принимают UzCard, HUMO, Click, Payme и Paynet в сумах. Зарубежная карта или крипта не нужны.",
        },
        {
          question: "За какое время доставляются звёзды?",
          answer:
            "После подтверждения оплаты звёзды зачисляются автоматически в среднем за 10 секунд. При технической задержке поддержка помогает по ID заказа.",
        },
        {
          question: "Нужен ли пароль или SMS-код для покупки Stars?",
          answer:
            "Нет. Stars зачисляются напрямую от Telegram на @username — пароль, SMS-код или 2FA не требуются. Это делает покупку безопасной.",
        },
        {
          question: "Сколько стоит минимальный пакет?",
          answer: "Минимальный пакет — 50 звёзд за 11 000 сум. Далее идут 75, 100, 250, 500, 1000 и больше.",
        },
        {
          question: "Можно ли купить не себе, а другу?",
          answer:
            "Да. Укажите в поле получателя @username друга, и звёзды будут доставлены напрямую ему.",
        },
        {
          question: "Почему нельзя купить прямо в приложении Telegram?",
          answer:
            "Покупка внутри Telegram привязана к Apple/Google, которые часто не принимают UzCard/HUMO. Поэтому удобнее бот, принимающий локальные карты.",
        },
        {
          question: "Оплата прошла, но звёзды не пришли — что делать?",
          answer:
            "Сначала обновите статус. Если звёзд нет, напишите @StarsPaymeeSupport с ID заказа. Если доставка не удалась по техпричине, оплата полностью возвращается.",
        },
      ],
    },
  },
};
