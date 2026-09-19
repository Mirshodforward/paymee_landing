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
import { PREMIUM_PLANS, STARS_PER_UNIT_UZS, formatUzs } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "payme-orqali-stars-va-premium-sotib-olish";

/**
 * Payme bilan nimalarni olish mumkin — buyurtma turlari `describeOrder()` da
 * belgilangan: stars, premium, gift, NFT, raqam, balans.
 */
function WhatTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mahsulot", "Payme ishlaydimi", "Izoh"],
      rows: [
        ["Telegram Stars", "Ha", "50 dan 10 000 donagacha"],
        ["Telegram Premium", "Ha", "1, 3, 6 va 12 oy"],
        ["Oddiy sovg‘alar", "Ha", "Stars hisobidan yuboriladi"],
        ["Telegram raqam", "Ha", "Alohida buyurtma sifatida"],
        ["Balansni to‘ldirish", "Ha", "Keyin balansdan to‘laysiz"],
      ],
    },
    ru: {
      headers: ["Товар", "Работает ли Payme", "Примечание"],
      rows: [
        ["Telegram Stars", "Да", "От 50 до 10 000 штук"],
        ["Telegram Premium", "Да", "1, 3, 6 и 12 месяцев"],
        ["Обычные подарки", "Да", "Отправляются за звёзды"],
        ["Telegram-номер", "Да", "Отдельным заказом"],
        ["Пополнение баланса", "Да", "Потом платите с баланса"],
      ],
    },
    en: {
      headers: ["Product", "Payme works", "Note"],
      rows: [
        ["Telegram Stars", "Yes", "From 50 to 10,000 units"],
        ["Telegram Premium", "Yes", "1, 3, 6 and 12 months"],
        ["Regular gifts", "Yes", "Sent from a Stars balance"],
        ["Telegram number", "Yes", "As a separate order"],
        ["Balance top-up", "Yes", "Then you pay from the balance"],
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

/** Payme, Click va kartaga o'tkazma — bir xil mahsulot, boshqa yo'l. */
function MethodTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["", "Payme", "Click", "Kartaga o‘tkazma"],
      rows: [
        ["Tasdiqlash", "Avtomatik", "Avtomatik", "SMS bo‘yicha avtomatik"],
        ["Chek yuborish", "Kerak emas", "Kerak emas", "Kerak emas"],
        ["Komissiya", "Shlyuz komissiyasi bor", "Shlyuz komissiyasi bor", "Yo‘q"],
        ["Aniq summa muhimmi", "Yo‘q — summa tayyor", "Yo‘q — summa tayyor", "Ha, tiyinigacha"],
        ["Nima kerak", "Payme ilovasi", "Click ilovasi", "Istalgan UzCard/HUMO"],
      ],
    },
    ru: {
      headers: ["", "Payme", "Click", "Перевод на карту"],
      rows: [
        ["Подтверждение", "Автоматически", "Автоматически", "Автоматически по SMS"],
        ["Отправлять чек", "Не нужно", "Не нужно", "Не нужно"],
        ["Комиссия", "Есть комиссия шлюза", "Есть комиссия шлюза", "Нет"],
        ["Важна ли точная сумма", "Нет — сумма готова", "Нет — сумма готова", "Да, до копейки"],
        ["Что нужно", "Приложение Payme", "Приложение Click", "Любая UzCard/Humo"],
      ],
    },
    en: {
      headers: ["", "Payme", "Click", "Card transfer"],
      rows: [
        ["Confirmation", "Automatic", "Automatic", "Automatic, via SMS"],
        ["Sending a receipt", "Not needed", "Not needed", "Not needed"],
        ["Commission", "Gateway commission applies", "Gateway commission applies", "None"],
        ["Does the exact amount matter", "No — the amount is set", "No — the amount is set", "Yes, to the last so‘m"],
        ["What you need", "The Payme app", "The Click app", "Any UzCard/HUMO"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c, d]) => [<strong key="a">{a}</strong>, b, c, d])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      <b>Payme</b> endi <b>@StarsPaymee_bot</b> da rasmiy to‘lov usuli. Botda mahsulotni tanlaysiz, to‘lov
      usuli sifatida Payme’ni belgilaysiz va Payme ilovasida tayyor summani tasdiqlaysiz. To‘lov{" "}
      <b>avtomatik</b> aniqlanadi — chek yuborish, admin kutish yoki summani qo‘lda kiritish kerak emas.
      Payme bilan <b>Stars ham, Premium ham</b> olinadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima-ozgardi", label: "Nima o‘zgardi" },
          { href: "#nima-olinadi", label: "Payme bilan nima olinadi" },
          { href: "#stars", label: "Payme orqali Stars sotib olish" },
          { href: "#premium", label: "Payme orqali Premium sotib olish" },
          { href: "#tasdiq", label: "To‘lov qanday tasdiqlanadi" },
          { href: "#hisob-raqami", label: "Hisob raqami nima uchun kerak" },
          { href: "#komissiya", label: "Komissiya va yakuniy summa" },
          { href: "#taqqoslash", label: "Payme, Click yoki kartaga o‘tkazma" },
          { href: "#xato", label: "Tez-tez uchraydigan holatlar" },
        ]}
      />

      <h2 id="nima-ozgardi">Nima o‘zgardi</h2>
      <p>
        Ilgari Payme bilan to‘lash uchun pulni kartaga o‘tkazish va summani tiyinigacha to‘g‘ri kiritish
        kerak edi. Endi Payme <b>alohida to‘lov usuli</b> sifatida ulangan: botda «Payme» ni tanlaysiz,
        ilova ochiladi va u yerda <b>tayyor summa</b> turadi.
      </p>
      <KeyFacts label="Amalda bu nimani anglatadi">
        <li>
          <b>Summani o‘zingiz yozmaysiz</b> — xato kiritish ehtimoli yo‘qoladi.
        </li>
        <li>
          <b>Chek yuborilmaydi</b> — to‘lov tizim darajasida tasdiqlanadi.
        </li>
        <li>
          <b>Nima uchun to‘layotganingiz ko‘rinadi</b> — Payme ilovasida buyurtma tavsifi chiqadi,
          masalan «100 Telegram Stars» yoki «Telegram Premium — 6 oy».
        </li>
        <li>
          <b>Kutish qisqaradi</b> — to‘lov tasdiqlangan zahoti buyurtma ishga tushadi.
        </li>
      </KeyFacts>

      <h2 id="nima-olinadi">Payme bilan nima olinadi</h2>
      <p>
        Payme faqat Stars uchun emas — botdagi to‘lovli mahsulotlarning barchasi uchun ishlaydi.
      </p>
      <WhatTable locale="uz" />
      <Notice label="Kolleksion (sotuvdan olingan) sovg‘alar">
        To‘lov usulidan qat’i nazar, kolleksion sovg‘alar bot orqali yetkazilmaydi. Batafsil:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">nega kolleksion giftlar endi olinmaydi</Link>.
      </Notice>

      <h2 id="stars">Payme orqali Telegram Stars sotib olish</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring va «Stars» bo‘limini tanlang.
        </Step>
        <Step title="2. Miqdorni tanlang">
          50, 100, 500, 1000 — yoki o‘z sonini kiriting. Narx darhol so‘mda ko‘rinadi.
        </Step>
        <Step title="3. @username kiriting">
          Yulduzlar tushadigan hisob. O‘zingizga olsangiz — o‘z username’ingiz, sovg‘a qilsangiz —
          do‘stingizniki. Parol so‘ralmaydi.
        </Step>
        <Step title="4. To‘lov usuli — Payme">
          Ro‘yxatdan «Payme» ni belgilaysiz. Bot to‘lov havolasini yasab beradi.
        </Step>
        <Step title="5. Payme ilovasida tasdiqlang">
          Havolani bossangiz Payme ochiladi. Summa va buyurtma tavsifi tayyor turadi — faqat tasdiqlaysiz.
        </Step>
        <Step title="6. Yulduzlarni qabul qiling">
          To‘lov tasdiqlangach buyurtma avtomatik ishga tushadi va yulduzlar hisobga tushadi.
        </Step>
      </Steps>

      <InlineCta text="Payme bilan yulduzlarni hoziroq oling." product={{ kind: "stars", amount: 100 }} />

      <h2 id="premium">Payme orqali Telegram Premium sotib olish</h2>
      <p>
        Premium’da bitta farq bor: yulduz emas, <b>muddat</b> tanlaysiz. Qolgani bir xil — Payme’ni
        belgilaysiz, ilovada tasdiqlaysiz, Premium avtomatik faollashadi.
      </p>
      <CompareTable
        headers={["Muddat", "Narx", "Oyiga"]}
        rows={PREMIUM_PLANS.map((p) => [
          <strong key="a">{p.months === 12 ? "1 yil" : `${p.months} oy`}</strong>,
          formatUzs(p.priceUzs, "uz"),
          formatUzs(Math.round(p.priceUzs / p.months), "uz"),
        ])}
      />
      <p>
        Premium Telegramning <b>rasmiy sovg‘a mexanizmi</b> orqali beriladi — shuning uchun login,
        parol yoki SMS-kod so‘ralmaydi, faqat ochiq @username yetarli. Narxlar va boshqa to‘lov
        yo‘llari haqida:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          Telegram Premium narxi va to‘lov usullari
        </Link>
        .
      </p>

      <InlineCta text="Premium muddatini tanlang va Payme bilan to‘lang." product={{ kind: "premium", months: 6 }} />

      <h2 id="tasdiq">To‘lov qanday tasdiqlanadi</h2>
      <p>
        Payme — <b>shlyuz</b> (gateway) turidagi usul. Ya’ni to‘lov haqidagi xabar bevosita to‘lov
        tizimidan keladi, odam ko‘rib o‘tirmaydi.
      </p>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Avtomatik">
          To‘lov tasdiqlangan zahoti buyurtma navbatga tushadi.
        </InfoCard>
        <InfoCard emoji="🧾" title="Chek kerak emas">
          Skrinshot yoki chek yuborish talab qilinmaydi.
        </InfoCard>
        <InfoCard emoji="🕐" title="Sutka davomida">
          Admin uyquda bo‘lishi to‘lovga ta’sir qilmaydi.
        </InfoCard>
        <InfoCard emoji="🔁" title="To‘lamasangiz">
          Havola ochiq qoladi — keyinroq qaytib to‘lasangiz ham bo‘ladi.
        </InfoCard>
      </InfoGrid>

      <h2 id="hisob-raqami">Hisob raqami nima uchun kerak</h2>
      <p>
        Payme orqali qilingan har bir to‘lovga <b>hisob raqami</b> biriktiriladi. U odatda kerak
        bo‘lmaydi, lekin bitta holatda juda foydali: agar pul yechilib, buyurtma esa ochiq qolsa,
        qo‘llab-quvvatlashga aynan shu raqamni yuborasiz — to‘lovni qidirish bir necha daqiqada
        tugaydi.
      </p>
      <Notice label="Muammo bo‘lsa nima yuborish kerak">
        Buyurtma raqami, to‘lov vaqti va Payme’dagi hisob raqami — shu uchtasi{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        uchun yetarli.
      </Notice>

      <h2 id="komissiya">Komissiya va yakuniy summa</h2>
      <p>
        Ochig‘ini aytamiz: shlyuz orqali to‘lash <b>kartaga to‘g‘ridan-to‘g‘ri o‘tkazishdan biroz
        qimmatroq</b>. Sababi — to‘lov tizimi o‘z komissiyasini oladi va u yakuniy summaga qo‘shiladi.
      </p>
      <KeyFacts label="Nimaga e’tibor berish kerak">
        <li>
          Bot <b>yakuniy summani to‘lovdan oldin</b> ko‘rsatadi — «keyin qo‘shimcha» degani yo‘q.
        </li>
        <li>
          Bazaviy narx — <b>{formatUzs(STARS_PER_UNIT_UZS, "uz")} / yulduz</b>; shlyuz bilan to‘laganda
          yakuniy summa shundan yuqoriroq chiqadi.
        </li>
        <li>
          Eng arzon yo‘l — <b>kartaga o‘tkazma</b>, lekin unda summani tiyinigacha to‘g‘ri kiritish shart.
        </li>
        <li>
          Farq kichik summalarda deyarli sezilmaydi; katta buyurtmada kartaga o‘tkazma foydaliroq.
        </li>
      </KeyFacts>

      <h2 id="taqqoslash">Payme, Click yoki kartaga o‘tkazma — qaysi biri</h2>
      <MethodTable locale="uz" />
      <p>
        Qisqasi: <b>tezlik va xotirjamlik</b> kerak bo‘lsa — Payme yoki Click;{" "}
        <b>eng arzon narx</b> kerak bo‘lsa — kartaga o‘tkazma. Kartangiz umuman bo‘lmasa,{" "}
        <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">naqd pul bilan to‘lash</Link>{" "}
        yo‘li ham bor.
      </p>

      <h2 id="xato">Tez-tez uchraydigan holatlar</h2>
      <InfoGrid>
        <InfoCard emoji="❌" title="Payme ro‘yxatda yo‘q">
          Ba’zan usul vaqtincha o‘chirilgan bo‘ladi (texnik ishlar). Click yoki kartaga o‘tkazmani
          tanlang — mahsulot va narx o‘zgarmaydi.
        </InfoCard>
        <InfoCard emoji="💳" title="Payme’da mablag‘ yetmadi">
          Ilovada kartani almashtiring yoki hisobni to‘ldiring, so‘ng o‘sha havolaga qayting.
        </InfoCard>
        <InfoCard emoji="⏳" title="Pul yechildi, buyurtma ochiq">
          2–3 daqiqa kuting. O‘zgarmasa — buyurtma raqami va hisob raqami bilan yozing.
        </InfoCard>
        <InfoCard emoji="🔗" title="Havola eskirdi">
          Botda buyurtmani qayta oching — yangi to‘lov havolasi yasaladi.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "https://payme.uz", label: "Payme — rasmiy sayt" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "xarid boti" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "qo‘llab-quvvatlash" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      <b>Payme</b> теперь официальный способ оплаты в <b>@StarsPaymee_bot</b>. Вы выбираете товар в боте,
      отмечаете Payme как способ оплаты и подтверждаете готовую сумму в приложении Payme. Платёж
      определяется <b>автоматически</b> — чек отправлять, ждать администратора или вводить сумму вручную не
      нужно. Через Payme покупаются <b>и звёзды, и Premium</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima-ozgardi", label: "Что изменилось" },
          { href: "#nima-olinadi", label: "Что можно купить через Payme" },
          { href: "#stars", label: "Покупка звёзд через Payme" },
          { href: "#premium", label: "Покупка Premium через Payme" },
          { href: "#tasdiq", label: "Как подтверждается платёж" },
          { href: "#hisob-raqami", label: "Зачем нужен номер счёта" },
          { href: "#komissiya", label: "Комиссия и итоговая сумма" },
          { href: "#taqqoslash", label: "Payme, Click или перевод на карту" },
          { href: "#xato", label: "Частые ситуации" },
        ]}
      />

      <h2 id="nima-ozgardi">Что изменилось</h2>
      <p>
        Раньше, чтобы заплатить через Payme, нужно было перевести деньги на карту и ввести сумму точно
        до копейки. Теперь Payme подключён как <b>отдельный способ оплаты</b>: вы выбираете в боте
        «Payme», открывается приложение, и там уже стоит <b>готовая сумма</b>.
      </p>
      <KeyFacts label="Что это значит на практике">
        <li>
          <b>Сумму не вводите вручную</b> — ошибиться невозможно.
        </li>
        <li>
          <b>Чек не отправляется</b> — платёж подтверждается на уровне системы.
        </li>
        <li>
          <b>Видно, за что платите</b> — в Payme отображается описание заказа, например «100 Telegram
          Stars» или «Telegram Premium — 6 месяцев».
        </li>
        <li>
          <b>Ожидание короче</b> — заказ запускается сразу после подтверждения платежа.
        </li>
      </KeyFacts>

      <h2 id="nima-olinadi">Что можно купить через Payme</h2>
      <p>Payme работает не только для звёзд, а для всех платных товаров бота.</p>
      <WhatTable locale="ru" />
      <Notice label="Коллекционные (снятые с продажи) подарки">
        Независимо от способа оплаты коллекционные подарки через бота не доставляются. Подробнее:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">
          почему коллекционные подарки больше не купить
        </Link>
        .
      </Notice>

      <h2 id="stars">Покупка Telegram Stars через Payme</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram и выберите раздел «Stars».
        </Step>
        <Step title="2. Выберите количество">
          50, 100, 500, 1000 — или своё число. Цена сразу показывается в сумах.
        </Step>
        <Step title="3. Укажите @username">
          Аккаунт, на который зачислятся звёзды: свой или друга, если это подарок. Пароль не запрашивается.
        </Step>
        <Step title="4. Способ оплаты — Payme">Отмечаете «Payme», бот формирует ссылку на оплату.</Step>
        <Step title="5. Подтвердите в приложении Payme">
          По ссылке открывается Payme. Сумма и описание заказа уже готовы — остаётся подтвердить.
        </Step>
        <Step title="6. Получите звёзды">
          После подтверждения платежа заказ запускается автоматически, и звёзды зачисляются.
        </Step>
      </Steps>

      <InlineCta text="Купите звёзды через Payme прямо сейчас." product={{ kind: "stars", amount: 100 }} />

      <h2 id="premium">Покупка Telegram Premium через Payme</h2>
      <p>
        С Premium одно отличие: вы выбираете не количество звёзд, а <b>срок</b>. Остальное то же —
        отмечаете Payme, подтверждаете в приложении, Premium включается автоматически.
      </p>
      <CompareTable
        headers={["Срок", "Цена", "В месяц"]}
        rows={PREMIUM_PLANS.map((p) => [
          <strong key="a">{p.months === 12 ? "1 год" : `${p.months} мес.`}</strong>,
          formatUzs(p.priceUzs, "ru"),
          formatUzs(Math.round(p.priceUzs / p.months), "ru"),
        ])}
      />
      <p>
        Premium выдаётся через <b>официальный механизм подарков</b> Telegram — поэтому логин, пароль и
        SMS-код не запрашиваются, достаточно открытого @username. О ценах и других способах оплаты:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          цены на Telegram Premium и способы оплаты
        </Link>
        .
      </p>

      <InlineCta text="Выберите срок Premium и оплатите через Payme." product={{ kind: "premium", months: 6 }} />

      <h2 id="tasdiq">Как подтверждается платёж</h2>
      <p>
        Payme — способ типа <b>шлюз</b> (gateway). Это значит, что уведомление о платеже приходит прямо
        из платёжной системы, человек его не проверяет.
      </p>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Автоматически">
          Заказ встаёт в очередь сразу после подтверждения платежа.
        </InfoCard>
        <InfoCard emoji="🧾" title="Чек не нужен">
          Скриншот или квитанцию отправлять не требуется.
        </InfoCard>
        <InfoCard emoji="🕐" title="Круглосуточно">
          То, что администратор спит, на оплату не влияет.
        </InfoCard>
        <InfoCard emoji="🔁" title="Если не оплатили">
          Ссылка остаётся активной — можно вернуться и оплатить позже.
        </InfoCard>
      </InfoGrid>

      <h2 id="hisob-raqami">Зачем нужен номер счёта</h2>
      <p>
        К каждому платежу через Payme привязывается <b>номер счёта</b>. Обычно он не нужен, но в одном
        случае очень выручает: если деньги списались, а заказ остался открытым, вы отправляете в
        поддержку именно этот номер — и платёж находят за пару минут.
      </p>
      <Notice label="Что отправить, если возникла проблема">
        Номер заказа, время платежа и номер счёта в Payme — этих трёх пунктов достаточно для{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        .
      </Notice>

      <h2 id="komissiya">Комиссия и итоговая сумма</h2>
      <p>
        Скажем прямо: оплата через шлюз <b>немного дороже прямого перевода на карту</b>. Причина в том,
        что платёжная система берёт свою комиссию, и она входит в итоговую сумму.
      </p>
      <KeyFacts label="На что обратить внимание">
        <li>
          Бот показывает <b>итоговую сумму до оплаты</b> — никаких «доплатите потом».
        </li>
        <li>
          Базовая цена — <b>{formatUzs(STARS_PER_UNIT_UZS, "ru")} за звезду</b>; при оплате через шлюз
          итог выходит выше.
        </li>
        <li>
          Самый дешёвый путь — <b>перевод на карту</b>, но там сумму нужно ввести точь-в-точь.
        </li>
        <li>
          На маленьких суммах разница почти незаметна; на крупном заказе перевод на карту выгоднее.
        </li>
      </KeyFacts>

      <h2 id="taqqoslash">Payme, Click или перевод на карту</h2>
      <MethodTable locale="ru" />
      <p>
        Коротко: нужна <b>скорость и спокойствие</b> — Payme или Click; нужна <b>минимальная цена</b> —
        перевод на карту. Если карты нет вообще, есть путь{" "}
        <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">оплаты наличными</Link>.
      </p>

      <h2 id="xato">Частые ситуации</h2>
      <InfoGrid>
        <InfoCard emoji="❌" title="Payme нет в списке">
          Иногда способ временно отключён (технические работы). Выберите Click или перевод на карту —
          товар и цена не меняются.
        </InfoCard>
        <InfoCard emoji="💳" title="В Payme не хватило средств">
          Смените карту в приложении или пополните счёт, затем вернитесь по той же ссылке.
        </InfoCard>
        <InfoCard emoji="⏳" title="Деньги списались, заказ открыт">
          Подождите 2–3 минуты. Если ничего не изменилось — напишите, указав номер заказа и номер счёта.
        </InfoCard>
        <InfoCard emoji="🔗" title="Ссылка устарела">
          Откройте заказ в боте заново — сформируется новая ссылка на оплату.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "https://payme.uz", label: "Payme — официальный сайт" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "бот для покупки" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "поддержка" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      <b>Payme</b> is now an official payment method in <b>@StarsPaymee_bot</b>. You pick the product in the
      bot, choose Payme as the payment method and confirm a ready-made amount in the Payme app. The payment
      is detected <b>automatically</b> — no receipt to send, no admin to wait for, no amount to type by hand.
      Payme works for <b>both Stars and Premium</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima-ozgardi", label: "What changed" },
          { href: "#nima-olinadi", label: "What you can buy with Payme" },
          { href: "#stars", label: "Buying Stars with Payme" },
          { href: "#premium", label: "Buying Premium with Payme" },
          { href: "#tasdiq", label: "How the payment is confirmed" },
          { href: "#hisob-raqami", label: "Why the account number matters" },
          { href: "#komissiya", label: "Commission and the final amount" },
          { href: "#taqqoslash", label: "Payme, Click or a card transfer" },
          { href: "#xato", label: "Common situations" },
        ]}
      />

      <h2 id="nima-ozgardi">What changed</h2>
      <p>
        Paying through Payme used to mean transferring money to a card and typing the amount exactly, to
        the last so‘m. Payme is now wired in as a <b>payment method of its own</b>: you select “Payme” in
        the bot, the app opens, and the <b>amount is already filled in</b>.
      </p>
      <KeyFacts label="What that means in practice">
        <li>
          <b>You do not type the amount</b> — there is nothing to get wrong.
        </li>
        <li>
          <b>No receipt is sent</b> — the payment is confirmed at the system level.
        </li>
        <li>
          <b>You can see what you are paying for</b> — Payme shows the order description, for example
          “100 Telegram Stars” or “Telegram Premium — 6 months”.
        </li>
        <li>
          <b>Less waiting</b> — the order starts the moment the payment clears.
        </li>
      </KeyFacts>

      <h2 id="nima-olinadi">What you can buy with Payme</h2>
      <p>Payme is not limited to Stars — it works for every paid product in the bot.</p>
      <WhatTable locale="en" />
      <Notice label="Collectible (sold-out) gifts">
        Whatever the payment method, collectible gifts are not delivered through the bot. More on that:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">
          why collectible gifts can no longer be bought
        </Link>
        .
      </Notice>

      <h2 id="stars">Buying Telegram Stars with Payme</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram and go to the “Stars” section.
        </Step>
        <Step title="2. Choose the amount">
          50, 100, 500, 1,000 — or a number of your own. The price appears in so‘m straight away.
        </Step>
        <Step title="3. Enter the @username">
          The account the Stars go to: yours, or a friend’s if it is a gift. No password is requested.
        </Step>
        <Step title="4. Payment method — Payme">You select “Payme” and the bot builds a payment link.</Step>
        <Step title="5. Confirm in the Payme app">
          The link opens Payme. The amount and the order description are already there — you just confirm.
        </Step>
        <Step title="6. Receive the Stars">
          Once the payment clears the order runs automatically and the Stars arrive.
        </Step>
      </Steps>

      <InlineCta text="Buy your Stars with Payme now." product={{ kind: "stars", amount: 100 }} />

      <h2 id="premium">Buying Telegram Premium with Payme</h2>
      <p>
        Premium differs in one respect: you choose a <b>term</b> rather than a number of Stars. The rest is
        identical — select Payme, confirm in the app, and Premium activates automatically.
      </p>
      <CompareTable
        headers={["Term", "Price", "Per month"]}
        rows={PREMIUM_PLANS.map((p) => [
          <strong key="a">{p.months === 12 ? "1 year" : `${p.months} mo`}</strong>,
          formatUzs(p.priceUzs, "en"),
          formatUzs(Math.round(p.priceUzs / p.months), "en"),
        ])}
      />
      <p>
        Premium is delivered through Telegram’s <b>official gift mechanism</b>, which is why no login,
        password or SMS code is asked for — a public @username is enough. On prices and the other payment
        routes:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          Telegram Premium prices and payment methods
        </Link>
        .
      </p>

      <InlineCta text="Pick a Premium term and pay with Payme." product={{ kind: "premium", months: 6 }} />

      <h2 id="tasdiq">How the payment is confirmed</h2>
      <p>
        Payme is a <b>gateway</b> method. The payment notification arrives straight from the payment
        system — nobody reviews it by hand.
      </p>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Automatic">
          The order is queued as soon as the payment clears.
        </InfoCard>
        <InfoCard emoji="🧾" title="No receipt needed">
          There is no screenshot or slip to send.
        </InfoCard>
        <InfoCard emoji="🕐" title="Around the clock">
          An admin being asleep makes no difference to the payment.
        </InfoCard>
        <InfoCard emoji="🔁" title="If you do not pay">
          The link stays open — you can come back and pay later.
        </InfoCard>
      </InfoGrid>

      <h2 id="hisob-raqami">Why the account number matters</h2>
      <p>
        Every Payme payment carries an <b>account number</b>. You rarely need it, but in one case it is
        worth a lot: if the money leaves your account and the order stays open, that number is what you
        send to support — and the payment is found within minutes.
      </p>
      <Notice label="What to send if something goes wrong">
        The order ID, the time of the payment and the Payme account number — those three are enough for{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        .
      </Notice>

      <h2 id="komissiya">Commission and the final amount</h2>
      <p>
        To be straightforward about it: paying through a gateway is <b>slightly more expensive than a
        direct card transfer</b>, because the payment system takes its commission and that is included in
        the final figure.
      </p>
      <KeyFacts label="What to keep in mind">
        <li>
          The bot shows the <b>final amount before you pay</b> — there is never a “pay the rest later”.
        </li>
        <li>
          The base price is <b>{formatUzs(STARS_PER_UNIT_UZS, "en")} per star</b>; paying through a gateway
          puts the total above that.
        </li>
        <li>
          The cheapest route is a <b>card transfer</b>, but there the amount has to be exact.
        </li>
        <li>
          On small amounts the difference is barely noticeable; on a large order a card transfer pays off.
        </li>
      </KeyFacts>

      <h2 id="taqqoslash">Payme, Click or a card transfer</h2>
      <MethodTable locale="en" />
      <p>
        In short: for <b>speed and peace of mind</b>, Payme or Click; for the <b>lowest price</b>, a card
        transfer. If you have no card at all, there is also the{" "}
        <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">cash route</Link>.
      </p>

      <h2 id="xato">Common situations</h2>
      <InfoGrid>
        <InfoCard emoji="❌" title="Payme is not in the list">
          The method is sometimes switched off for maintenance. Choose Click or a card transfer — the
          product and the price do not change.
        </InfoCard>
        <InfoCard emoji="💳" title="Not enough funds in Payme">
          Switch cards in the app or top up, then return to the same link.
        </InfoCard>
        <InfoCard emoji="⏳" title="Money taken, order still open">
          Wait two or three minutes. If nothing changes, write in with the order ID and the account number.
        </InfoCard>
        <InfoCard emoji="🔗" title="The link has expired">
          Reopen the order in the bot and a fresh payment link is generated.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Useful links"
        items={[
          { href: "https://payme.uz", label: "Payme — official site" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "the purchase bot" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "support" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Payme orqali Telegram Stars sotib olish mumkinmi?",
    answer:
      "Ha. @StarsPaymee_bot da to‘lov usuli sifatida Payme’ni tanlaysiz, ilovada tayyor summani tasdiqlaysiz va yulduzlar avtomatik tushadi.",
  },
  {
    question: "Payme bilan Telegram Premium ham olinadimi?",
    answer: "Ha, 1, 3, 6 va 12 oylik muddatlarning barchasi Payme orqali to‘lanadi.",
  },
  {
    question: "To‘lovdan keyin chek yuborish kerakmi?",
    answer: "Yo‘q. Payme shlyuz orqali ishlaydi — to‘lov avtomatik tasdiqlanadi, skrinshot so‘ralmaydi.",
  },
  {
    question: "Summani o‘zim kiritishim kerakmi?",
    answer: "Yo‘q, summa Payme ilovasida tayyor turadi. Bu kartaga o‘tkazmadan asosiy farqi.",
  },
  {
    question: "Payme bilan to‘lash qimmatroqmi?",
    answer:
      "Biroz. Shlyuz o‘z komissiyasini oladi, shuning uchun yakuniy summa kartaga to‘g‘ridan-to‘g‘ri o‘tkazishdan yuqoriroq. Bot yakuniy summani to‘lovdan oldin ko‘rsatadi.",
  },
  {
    question: "Payme’da Telegram hisobimga kirish so‘raladimi?",
    answer: "Yo‘q. Login, parol va SMS-kod hech qachon so‘ralmaydi — faqat ochiq @username yetarli.",
  },
  {
    question: "Pul yechildi, lekin buyurtma bajarilmadi. Nima qilay?",
    answer:
      "2–3 daqiqa kuting. O‘zgarmasa, buyurtma raqami va Payme’dagi hisob raqami bilan @StarsPaymeeSupport ga yozing.",
  },
  {
    question: "Payme ro‘yxatda ko‘rinmayapti.",
    answer:
      "Usul vaqtincha o‘chirilgan bo‘lishi mumkin. Click yoki kartaga o‘tkazmani tanlang — mahsulot va yetkazish o‘zgarmaydi.",
  },
  {
    question: "To‘lov havolasi eskirsa nima bo‘ladi?",
    answer: "Botda buyurtmani qayta ochsangiz, yangi havola yasaladi. Pul yo‘qolmaydi.",
  },
  {
    question: "Payme orqali sovg‘a qilsam bo‘ladimi?",
    answer: "Ha. Buyurtma berayotganda o‘zingizniki emas, do‘stingizning @username’ini kiritasiz.",
  },
];

const ruFaq = [
  {
    question: "Можно ли купить звёзды Telegram через Payme?",
    answer:
      "Да. В @StarsPaymee_bot выбираете Payme как способ оплаты, подтверждаете готовую сумму в приложении, и звёзды зачисляются автоматически.",
  },
  {
    question: "Через Payme можно купить и Telegram Premium?",
    answer: "Да, все сроки — 1, 3, 6 и 12 месяцев — оплачиваются через Payme.",
  },
  {
    question: "Нужно ли отправлять чек после оплаты?",
    answer: "Нет. Payme работает через шлюз — платёж подтверждается автоматически, скриншот не нужен.",
  },
  {
    question: "Нужно ли вводить сумму самому?",
    answer: "Нет, сумма уже готова в приложении Payme. Это главное отличие от перевода на карту.",
  },
  {
    question: "Оплата через Payme дороже?",
    answer:
      "Немного. Шлюз берёт свою комиссию, поэтому итог выше прямого перевода на карту. Бот показывает итоговую сумму до оплаты.",
  },
  {
    question: "Запрашивается ли доступ к моему Telegram-аккаунту?",
    answer: "Нет. Логин, пароль и SMS-код не запрашиваются никогда — достаточно открытого @username.",
  },
  {
    question: "Деньги списались, а заказ не выполнен. Что делать?",
    answer:
      "Подождите 2–3 минуты. Если ничего не изменилось, напишите в @StarsPaymeeSupport, указав номер заказа и номер счёта в Payme.",
  },
  {
    question: "Payme не отображается в списке.",
    answer:
      "Способ может быть временно отключён. Выберите Click или перевод на карту — товар и доставка не меняются.",
  },
  {
    question: "Что будет, если ссылка на оплату устареет?",
    answer: "Откройте заказ в боте заново — сформируется новая ссылка. Деньги не теряются.",
  },
  {
    question: "Можно ли через Payme сделать подарок?",
    answer: "Да. При оформлении вводите не свой @username, а username друга.",
  },
];

const enFaq = [
  {
    question: "Can I buy Telegram Stars with Payme?",
    answer:
      "Yes. In @StarsPaymee_bot you choose Payme as the payment method, confirm the ready-made amount in the app, and the Stars arrive automatically.",
  },
  {
    question: "Does Payme work for Telegram Premium too?",
    answer: "Yes — all four terms, 1, 3, 6 and 12 months, can be paid with Payme.",
  },
  {
    question: "Do I have to send a receipt after paying?",
    answer: "No. Payme runs through a gateway, so the payment is confirmed automatically and no screenshot is asked for.",
  },
  {
    question: "Do I type the amount myself?",
    answer: "No, the amount is already filled in inside the Payme app. That is the main difference from a card transfer.",
  },
  {
    question: "Is paying with Payme more expensive?",
    answer:
      "Slightly. The gateway takes its commission, so the total comes out above a direct card transfer. The bot shows the final amount before you pay.",
  },
  {
    question: "Is access to my Telegram account requested?",
    answer: "No. A login, password or SMS code is never requested — a public @username is enough.",
  },
  {
    question: "The money left my account but the order was not fulfilled. What now?",
    answer:
      "Wait two or three minutes. If nothing changes, message @StarsPaymeeSupport with the order ID and the Payme account number.",
  },
  {
    question: "Payme is not showing in the list.",
    answer:
      "The method may be switched off temporarily. Choose Click or a card transfer — the product and the delivery are unchanged.",
  },
  {
    question: "What happens if the payment link expires?",
    answer: "Reopen the order in the bot and a new link is generated. No money is lost.",
  },
  {
    question: "Can I send a gift through Payme?",
    answer: "Yes. When ordering, enter your friend’s @username instead of your own.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  keywords: [
    "payme orqali stars sotib olish",
    "payme orqali telegram premium",
    "payme bilan telegram to‘lov",
    "payme telegram stars",
    "купить звёзды telegram через payme",
    "telegram premium через payme",
    "buy telegram stars with payme",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Mahsulotni tanlang", text: "Stars miqdorini yoki Premium muddatini belgilang." },
    { name: "@username kiriting", text: "Login va parol so‘ralmaydi." },
    { name: "To‘lov usuli — Payme", text: "Ro‘yxatdan Payme’ni belgilang, bot havola yasaydi." },
    { name: "Payme ilovasida tasdiqlang", text: "Summa tayyor turadi — faqat tasdiqlaysiz." },
    { name: "Yetkazishni kuting", text: "To‘lov avtomatik aniqlanadi va buyurtma ishga tushadi." },
  ],
  locales: {
    uz: {
      title: "Payme orqali Telegram Stars va Premium sotib olish",
      excerpt:
        "Payme endi botda rasmiy to‘lov usuli: summa tayyor turadi, chek yuborilmaydi, to‘lov avtomatik tasdiqlanadi. Stars va Premium uchun qadam-baqadam qo‘llanma.",
      metaTitle: "Payme orqali Telegram Stars va Premium olish",
      metaDescription:
        "Payme bilan Telegram Stars va Premium sotib olish: summa ilovada tayyor, chek kerak emas, to‘lov avtomatik tasdiqlanadi. Komissiya va xatolar haqida ham.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Payme bilan to‘lang",
      ctaBody: "@StarsPaymee_bot — Stars va Premium, summa tayyor, tasdiqlash bir bosishda.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Telegram Stars и Premium через Payme",
      excerpt:
        "Payme теперь официальный способ оплаты в боте: сумма готова, чек не нужен, платёж подтверждается автоматически. Пошагово для звёзд и Premium.",
      metaTitle: "Купить звёзды Telegram и Premium через Payme",
      metaDescription:
        "Покупка Telegram Stars и Premium через Payme: сумма уже в приложении, чек не нужен, платёж подтверждается автоматически. О комиссии и частых ошибках.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оплатите через Payme",
      ctaBody: "@StarsPaymee_bot — звёзды и Premium, сумма готова, подтверждение в одно нажатие.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Stars and Premium with Payme",
      excerpt:
        "Payme is now an official payment method in the bot: the amount is pre-filled, no receipt is needed and the payment confirms automatically. Step by step for Stars and Premium.",
      metaTitle: "Buy Telegram Stars and Premium with Payme",
      metaDescription:
        "Buying Telegram Stars and Premium with Payme: the amount is already in the app, no receipt needed, payment confirms automatically. Commission and common issues covered.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pay with Payme",
      ctaBody: "@StarsPaymee_bot — Stars and Premium, amount pre-filled, one tap to confirm.",
      faq: enFaq,
    },
  },
};
