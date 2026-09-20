import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
} from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ozbekistonda-oylik-premium-uza-humo";

/**
 * 1 oylik va uzoqroq muddatlar — oyiga tushadigan xarajat bo'yicha.
 *
 * MUHIM (2026-yil sentabr): ilgari 1 oylik faqat «akkauntga kirib berish»
 * oqimida edi. Endi u ham username oqimida beriladi, ya'ni to'rtala muddat
 * ham parolsiz. Shuning uchun bu yerda oqimlar emas, MUDDATLAR
 * taqqoslanadi — o'quvchi uchun endi asosiy savol shu.
 */
function TermCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Muddat", "Narx", "Oyiga", "Kimga mos"],
      rows: [
        ["1 oy", "45 000 so‘m", "45 000 so‘m", "Sinab ko‘rish, bir martalik ehtiyoj"],
        ["3 oy", "160 000 so‘m", "~53 300 so‘m", "Qisqa muddat, majburiyatsiz"],
        ["6 oy", "215 000 so‘m", "~35 800 so‘m", "Narx va muddat muvozanati"],
        ["12 oy", "388 000 so‘m", "~32 300 so‘m", "Doimiy foydalanish"],
      ],
    },
    ru: {
      headers: ["Срок", "Цена", "В месяц", "Кому подходит"],
      rows: [
        ["1 месяц", "45 000 сум", "45 000 сум", "Попробовать, разовая задача"],
        ["3 месяца", "160 000 сум", "~53 300 сум", "Короткий срок без обязательств"],
        ["6 месяцев", "215 000 сум", "~35 800 сум", "Баланс цены и срока"],
        ["12 месяцев", "388 000 сум", "~32 300 сум", "Постоянное использование"],
      ],
    },
    en: {
      headers: ["Term", "Price", "Per month", "Who it suits"],
      rows: [
        ["1 month", "45,000 UZS", "45,000 UZS", "Trying it, a one-off need"],
        ["3 months", "160,000 UZS", "~53,300 UZS", "A short term, no commitment"],
        ["6 months", "215,000 UZS", "~35,800 UZS", "The balance of price and term"],
        ["12 months", "388,000 UZS", "~32,300 UZS", "Permanent use"],
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
      Ha — 1 oylik Telegram Premium’ni <b>UzCard yoki HUMO</b> kartasi bilan, so‘mda olish mumkin. Narxi —{" "}
      <b>45 000 so‘m</b>, va u <b>username orqali</b> beriladi: parol ham, SMS-kod ham so‘ralmaydi. To‘lov
      UzCard, HUMO, Click, Payme, Uzum yoki Paynet bilan amalga oshiriladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="qisqa">1 oylik ham username orqali — parol so‘ralmaydi</h2>
      <p>
        Ilgari 1 oylik tarif alohida, «akkauntga kirib berish» oqimida edi. <b>2026-yil sentabridan boshlab
        to‘rtala muddat ham</b> — 1, 3, 6 va 12 oy — username orqali beriladi. Ya’ni bir oylikni olish uchun
        ham parolingizni birovga berish kerak emas. Qolgan farq faqat narx va muddatda:
      </p>
      <TermCompare locale="uz" />
      <p>
        Jadvaldan ikkita xulosa chiqadi. Birinchisi: 1 oylik tarifning asosiy afzalligi — <b>eng kam boshlang‘ich
        to‘lov</b>, ya’ni bir martada atigi 45 000 so‘m berasiz. Ikkinchisi: oyiga hisoblaganda eng tejamkori —
        12 oylik (~32 300 so‘m), undan keyin 6 oylik (~35 800 so‘m). 3 oylik esa oyiga ~53 300 so‘mga tushadi,
        ya’ni 1 oylikdan ham qimmat — u aynan uch oy kerak bo‘lgandagina mantiqiy.
      </p>

      <h2 id="narx">Narxi va muddati</h2>
      <p>
        2026-yil sentabridan barcha muddat — 1, 3, 6 va 12 oy — username oqimida beriladi:
      </p>
      <PremiumPlanBoard locale="uz" flow="username" />
      <p>
        «Akkauntga kirib berish» oqimi faqat nostandart holatlar uchun alohida xizmat sifatida qoldi:
      </p>
      <PremiumPlanBoard locale="uz" flow="login" />
      <KeyFacts label="Muddat haqida aniq faktlar">
        <li>
          <b>Muddat 1 oy</b> — faollashgan kundan boshlab hisoblanadi, kalendar oy oxirigacha emas.
        </li>
        <li>
          <b>Avtoto‘lov yo‘q</b> — oy tugagach hisobingizdan hech narsa yechilmaydi.
        </li>
        <li>
          <b>Muddat tugagach akkaunt bloklanmaydi</b> — faqat Premium imtiyozlari to‘xtaydi, chatlar va kanallar
          joyida qoladi.
        </li>
        <li>
          <b>Uzaytirish</b> — yangi buyurtma berish orqali; buni muddat tugashini kutmasdan ham qilish mumkin.
        </li>
      </KeyFacts>

      <InlineCta text="1 oylik Premium — 45 000 so‘m, so‘mda to‘lov." product={{ kind: "premium", months: 1 }} />

      <h2 id="karta">UzCard va HUMO bilan to‘lash</h2>
      <p>
        Bu yerda xalqaro karta umuman kerak emas — to‘lov mahalliy to‘lov tizimi ichida, so‘mda o‘tadi. Ya’ni
        kartangizni «xalqaro operatsiyalar uchun ochish» yoki valyuta konvertatsiyasi bilan ovora bo‘lish shart
        emas.
      </p>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / HUMO">
          To‘g‘ridan-to‘g‘ri karta raqami bilan; bank SMS yoki ilova orqali tasdiq kodi yuboradi.
        </InfoCard>
        <InfoCard emoji="🟢" title="Click / Payme">
          Ilovada bir bosishda — karta rekvizitlarini qayta kiritmasdan.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          Naqd pul bilan to‘lamoqchi bo‘lganlar uchun.
        </InfoCard>
        <InfoCard emoji="🚫" title="Visa kerak emas">
          Narx so‘mda ko‘rsatiladi, bank konvertatsiya komissiyasi qo‘shilmaydi.
        </InfoCard>
      </InfoGrid>
      <p>
        Agar to‘lov o‘tmasa, odatda sabab bitta: kartada kunlik limit tugagan yoki bank tasdiq kodi kechikkan. Bunday
        holatda bank ilovasini ochiq holda qoldirib, buyurtmani qaytadan boshlash kifoya.
      </p>

      <h2 id="qadamlar">Qadam-baqadam: 1 oylik Premium’ni olish</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Premium bo‘limidan 1 oylik tarifni tanlang">
          Narx 45 000 so‘m — botda darhol ko‘rinadi.
        </Step>
        <Step title="3. Bot so‘ragan ma’lumotni bering">
          Rasmiy faollashtirish uchun kerakli qadamlarni bot ketma-ket tushuntiradi.
        </Step>
        <Step title="4. So‘mda to‘lang">
          UzCard, HUMO, Click, Payme, Uzum yoki Paynet — summa 45 000 so‘m.
        </Step>
        <Step title="5. Faollashuvni tasdiqlang">
          Quyidagi bo‘limdagi uchta tekshiruvdan o‘ting.
        </Step>
      </Steps>

      <h2 id="tekshirish">Premium faollashganini qanday tekshirish kerak</h2>
      <KeyFacts label="Uchta tekshiruv">
        <li>
          <b>Profil rozetkasi</b> — ismingiz yonida Premium yulduzchasi paydo bo‘ladi. Uni o‘zingiz ham, boshqalar
          ham ko‘radi.
        </li>
        <li>
          <b>Sozlamalar</b> — Telegram sozlamalarida «Telegram Premium» bo‘limi ochiladi va u yerda obuna tugash
          sanasi ko‘rsatiladi. Aynan shu sana muddatning haqiqiy tasdig‘i.
        </li>
        <li>
          <b>Amaliy sinov</b> — 2 GB dan katta fayl yuborib ko‘ring yoki Premium stikerlardan birini oching; ishlasa,
          obuna faol.
        </li>
      </KeyFacts>
      <p>
        Agar to‘lov o‘tgan-u, yuqoridagilarning hech biri ko‘rinmasa — Telegram’ni to‘liq yopib qayta oching
        (ba’zan ilova holatni darrov yangilamaydi). Shundan keyin ham o‘zgarmasa, buyurtma raqami bilan{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        ga yozing.
      </p>

      <p>
        Qarang: <Link href="/blog/telegram-premium-eng-oson-usul">Premium olishning eng oson usuli</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">barcha tariflar va narxlar</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">Premium menga kerakmi?</Link>
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
          { href: "https://click.uz/", label: "click.uz", note: "Click to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да — Telegram Premium на 1 месяц можно оформить картой <b>UzCard или Humo</b>, в сумах. Цена —{" "}
      <b>45 000 сум</b>, и оформляется он <b>по username</b>: ни пароль, ни SMS-код не запрашиваются. Оплата:
      UzCard, Humo, Click, Payme, Uzum или Paynet.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="qisqa">Месячный тариф теперь тоже по username — без пароля</h2>
      <p>
        Раньше месячный тариф оформлялся отдельно, через вход в аккаунт. <b>С сентября 2026 года все четыре
        срока</b> — 1, 3, 6 и 12 месяцев — оформляются по username. То есть и для одного месяца передавать
        пароль никому не нужно. Отличаются только цена и срок:
      </p>
      <TermCompare locale="ru" />
      <p>
        Из таблицы следуют два вывода. Первый: главное преимущество месячного тарифа — <b>самый маленький
        стартовый платёж</b>, всего 45 000 сум за раз. Второй: в пересчёте на месяц выгоднее всего годовой
        (~32 300 сум), затем полугодовой (~35 800 сум). А трёхмесячный выходит ~53 300 сум в месяц — дороже
        месячного, поэтому он оправдан, только если нужны ровно три месяца.
      </p>

      <h2 id="narx">Цена и срок</h2>
      <p>С сентября 2026 года все сроки — 1, 3, 6 и 12 месяцев — оформляются по username:</p>
      <PremiumPlanBoard locale="ru" flow="username" />
      <p>Сценарий «со входом в аккаунт» остался отдельной услугой для нестандартных случаев:</p>
      <PremiumPlanBoard locale="ru" flow="login" />
      <KeyFacts label="Точные факты о сроке">
        <li>
          <b>Срок — 1 месяц</b> и считается со дня активации, а не до конца календарного месяца.
        </li>
        <li>
          <b>Автоплатежа нет</b> — по окончании месяца с вас ничего не спишется.
        </li>
        <li>
          <b>Аккаунт не блокируется</b> — прекращаются только привилегии Premium, чаты и каналы остаются на месте.
        </li>
        <li>
          <b>Продление</b> — новым заказом; сделать это можно и не дожидаясь конца срока.
        </li>
      </KeyFacts>

      <InlineCta text="Premium на месяц — 45 000 сум, оплата в сумах." product={{ kind: "premium", months: 1 }} />

      <h2 id="karta">Оплата картой UzCard и Humo</h2>
      <p>
        Международная карта здесь не нужна вообще — платёж проходит внутри местной платёжной системы, в сумах. Не
        нужно «открывать карту для международных операций» и разбираться с конвертацией валюты.
      </p>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / Humo">
          Напрямую по номеру карты; банк присылает код подтверждения по SMS или в приложении.
        </InfoCard>
        <InfoCard emoji="🟢" title="Click / Payme">
          В один клик в приложении — без повторного ввода реквизитов.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          Для тех, кто платит наличными.
        </InfoCard>
        <InfoCard emoji="🚫" title="Виза не нужна">
          Цена показывается в сумах, комиссия банка за конвертацию не добавляется.
        </InfoCard>
      </InfoGrid>
      <p>
        Если платёж не проходит, причина обычно одна: исчерпан дневной лимит по карте или задержался код
        подтверждения банка. В этом случае достаточно оставить банковское приложение открытым и оформить заказ
        заново.
      </p>

      <h2 id="qadamlar">Пошагово: как оформить Premium на месяц</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. В разделе Premium выберите месячный тариф">
          Цена 45 000 сум — она сразу видна в боте.
        </Step>
        <Step title="3. Передайте данные, которые запросит бот">
          Бот последовательно объяснит шаги, нужные для официальной активации.
        </Step>
        <Step title="4. Оплатите в сумах">UzCard, Humo, Click, Payme или Paynet — сумма 45 000 сум.</Step>
        <Step title="5. Подтвердите активацию">Пройдите три проверки из раздела ниже.</Step>
      </Steps>

      <h2 id="tekshirish">Как проверить, что Premium активировался</h2>
      <KeyFacts label="Три проверки">
        <li>
          <b>Значок в профиле</b> — рядом с именем появляется звёздочка Premium. Её видите и вы, и другие
          пользователи.
        </li>
        <li>
          <b>Настройки</b> — в настройках Telegram открывается раздел «Telegram Premium» с датой окончания
          подписки. Именно эта дата — настоящее подтверждение срока.
        </li>
        <li>
          <b>Практическая проверка</b> — отправьте файл больше 2 ГБ или откройте премиум-стикер; если работает,
          подписка активна.
        </li>
      </KeyFacts>
      <p>
        Если оплата прошла, а ничего из перечисленного не видно — полностью закройте и снова откройте Telegram
        (иногда приложение не обновляет состояние сразу). Если и после этого ничего не изменилось, напишите в{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        с номером заказа.
      </p>

      <p>
        Смотрите: <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ оформить Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">все тарифы и цены</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">нужен ли мне Premium?</Link>
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
          { href: "https://click.uz/", label: "click.uz", note: "платёжная система Click" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes — one month of Telegram Premium can be paid for with a <b>UzCard or HUMO</b> card, in so‘m. It costs{" "}
      <b>45,000 UZS</b> and is arranged <b>by username</b>: neither a password nor an SMS code is requested.
      Payment goes through UzCard, HUMO, Click, Payme, Uzum or Paynet.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="qisqa">The monthly plan now runs by username too — no password</h2>
      <p>
        The monthly plan used to be arranged separately, through an account sign-in. <b>Since September 2026 all
        four terms</b> — 1, 3, 6 and 12 months — go by username. So even for a single month there is no password
        to hand over. Only the price and the term differ:
      </p>
      <TermCompare locale="en" />
      <p>
        Two things follow from the table. First, the monthly plan&rsquo;s real advantage is the <b>smallest upfront
        payment</b> — 45,000 UZS in one go. Second, per month the best value is the yearly plan (~32,300 UZS),
        then six months (~35,800 UZS). Three months works out at ~53,300 UZS per month — more than the monthly
        plan — so it only makes sense when you need exactly three months.
      </p>

      <h2 id="narx">Price and term</h2>
      <p>Since September 2026 every term — 1, 3, 6 and 12 months — runs through the username flow:</p>
      <PremiumPlanBoard locale="en" flow="username" />
      <p>The “account sign-in” flow remains a separate service for non-standard cases:</p>
      <PremiumPlanBoard locale="en" flow="login" />
      <KeyFacts label="Precise facts about the term">
        <li>
          <b>The term is one month</b>, counted from the day of activation — not to the end of the calendar month.
        </li>
        <li>
          <b>There is no auto-renewal</b> — nothing is charged when the month ends.
        </li>
        <li>
          <b>The account is not blocked</b> when the term runs out — only the Premium perks stop; chats and channels
          stay exactly as they were.
        </li>
        <li>
          <b>Renewing</b> means placing a new order, and you can do it without waiting for the term to end.
        </li>
      </KeyFacts>

      <InlineCta text="One month of Premium — 45,000 UZS, paid in so‘m." product={{ kind: "premium", months: 1 }} />

      <h2 id="karta">Paying with UzCard and HUMO</h2>
      <p>
        No international card is involved at all — the payment runs inside the local payment system, in so‘m. There
        is nothing to “enable for international transactions” and no currency conversion to think about.
      </p>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / HUMO">
          Straight from the card number; the bank sends a confirmation code by SMS or in its app.
        </InfoCard>
        <InfoCard emoji="🟢" title="Click / Payme">
          One tap in the app — no re-entering card details.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          For anyone who prefers to pay in cash.
        </InfoCard>
        <InfoCard emoji="🚫" title="No Visa needed">
          The price is shown in so‘m and no bank conversion fee is added.
        </InfoCard>
      </InfoGrid>
      <p>
        When a payment fails, the reason is usually one of two: the card’s daily limit is spent, or the bank’s
        confirmation code arrived late. Leaving the banking app open and starting the order again is normally
        enough.
      </p>

      <h2 id="qadamlar">Step by step: getting one month of Premium</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Pick the monthly plan in the Premium section">
          It costs 45,000 UZS, shown in the bot right away.
        </Step>
        <Step title="3. Provide what the bot asks for">
          The bot walks through the steps needed for the official activation, one at a time.
        </Step>
        <Step title="4. Pay in so‘m">UzCard, HUMO, Click, Payme, Uzum or Paynet — the total is 45,000 UZS.</Step>
        <Step title="5. Confirm the activation">Run the three checks in the section below.</Step>
      </Steps>

      <h2 id="tekshirish">How to check that Premium actually activated</h2>
      <KeyFacts label="Three checks">
        <li>
          <b>The profile badge</b> — a Premium star appears next to your name. Both you and everyone else can see
          it.
        </li>
        <li>
          <b>Settings</b> — a “Telegram Premium” section opens in Telegram’s settings and shows the subscription’s
          end date. That date is the real confirmation of the term.
        </li>
        <li>
          <b>A practical test</b> — send a file larger than 2 GB or open a Premium sticker; if it works, the
          subscription is live.
        </li>
      </KeyFacts>
      <p>
        If the payment went through but none of the above shows up, close Telegram completely and reopen it — the
        app does not always refresh its state immediately. If nothing changes after that, message{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        with your order number.
      </p>

      <p>
        See also: <Link href="/blog/telegram-premium-eng-oson-usul">the easiest way to get Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">all plans and prices</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">do I actually need Premium?</Link>
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "1 oylik Telegram Premium’ni UzCard yoki HUMO bilan olsa bo‘ladimi?",
    answer:
      "Ha. To‘lov so‘mda, mahalliy tizim ichida o‘tadi — UzCard, HUMO, Click, Payme, Uzum yoki Paynet. Xalqaro karta kerak emas.",
  },
  {
    question: "1 oylik tarif necha so‘m?",
    answer: "45 000 so‘m.",
  },
  {
    question: "Nega 1 oylikda username so‘ralmaydi?",
    answer:
      "Chunki 1 oylik tarif «akkauntga kirib berish» oqimida beriladi. Username orqali beriladigan tez oqimda eng qisqa muddat — 3 oy.",
  },
  {
    question: "Muddat qachondan boshlanadi?",
    answer: "Faollashgan kundan boshlab bir oy — kalendar oy oxirigacha emas.",
  },
  {
    question: "Avtoto‘lov ulanadimi?",
    answer: "Yo‘q. Oy tugagach hisobingizdan hech narsa yechilmaydi; uzaytirish uchun yangi buyurtma berasiz.",
  },
  {
    question: "Muddat tugasa akkauntim bloklanadimi?",
    answer: "Yo‘q. Faqat Premium imtiyozlari to‘xtaydi, chatlar va kanallar joyida qoladi.",
  },
  {
    question: "Premium faollashganini qanday bilaman?",
    answer:
      "Profilda Premium rozetkasi chiqadi, sozlamalarda «Telegram Premium» bo‘limi tugash sanasi bilan ochiladi va 2 GB dan katta fayl yuborish ishlaydi.",
  },
  {
    question: "To‘lov o‘tmadi — nima qilay?",
    answer:
      "Odatda karta kunlik limiti yoki kechikkan tasdiq kodi sabab bo‘ladi. Bank ilovasini ochiq qoldirib, buyurtmani qaytadan boshlang.",
  },
];

const ruFaq = [
  {
    question: "Можно ли оформить Premium на месяц картой UzCard или Humo?",
    answer:
      "Да. Платёж проходит в сумах внутри местной системы — UzCard, Humo, Click, Payme или Paynet. Международная карта не нужна.",
  },
  { question: "Сколько стоит месячный тариф?", answer: "45 000 сум." },
  {
    question: "Почему при месячном тарифе не спрашивают username?",
    answer:
      "Теперь оформляется. С сентября 2026 года все четыре срока, включая месячный, идут по username — пароль не нужен.",
  },
  {
    question: "С какого момента считается срок?",
    answer: "Один месяц со дня активации, а не до конца календарного месяца.",
  },
  {
    question: "Подключается ли автоплатёж?",
    answer: "Нет. По окончании месяца ничего не спишется; для продления оформляется новый заказ.",
  },
  {
    question: "Заблокируют ли аккаунт после окончания срока?",
    answer: "Нет. Прекращаются только привилегии Premium, чаты и каналы остаются на месте.",
  },
  {
    question: "Как понять, что Premium активировался?",
    answer:
      "В профиле появляется значок Premium, в настройках открывается раздел «Telegram Premium» с датой окончания, и начинает работать отправка файлов больше 2 ГБ.",
  },
  {
    question: "Платёж не прошёл — что делать?",
    answer:
      "Обычно причина — дневной лимит карты или задержавшийся код подтверждения. Оставьте банковское приложение открытым и оформите заказ заново.",
  },
];

const enFaq = [
  {
    question: "Can one month of Premium be paid for with a UzCard or HUMO card?",
    answer:
      "Yes. The payment runs in so‘m inside the local system — UzCard, HUMO, Click, Payme, Uzum or Paynet. No international card is needed.",
  },
  { question: "How much is the monthly plan?", answer: "45,000 UZS." },
  {
    question: "Why is no username requested for the monthly plan?",
    answer:
      "It does now. Since September 2026 all four terms, the monthly one included, run by username — no password needed.",
  },
  {
    question: "When does the term start?",
    answer: "One month from the day of activation, not until the end of the calendar month.",
  },
  {
    question: "Is auto-renewal enabled?",
    answer: "No. Nothing is charged when the month ends; renewing means placing a new order.",
  },
  {
    question: "Will my account be blocked when the term ends?",
    answer: "No. Only the Premium perks stop; chats and channels stay exactly where they were.",
  },
  {
    question: "How do I know Premium activated?",
    answer:
      "A Premium badge appears on the profile, a “Telegram Premium” section with an end date opens in settings, and sending files over 2 GB starts working.",
  },
  {
    question: "The payment failed — what now?",
    answer:
      "Usually it is the card’s daily limit or a late confirmation code. Leave the banking app open and start the order again.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-04-07",
  dateModified: "2026-09-20",
  keywords: [
    "1 oylik telegram premium",
    "bir oylik premium olish",
    "telegram premium uzcard",
    "telegram premium humo",
    "oylik premium narxi",
    "telegram premium 50000 som",
    "premium на месяц узбекистан",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "1 oylik tarifni tanlang", text: "Premium bo‘limida 1 oy — 45 000 so‘m." },
    { name: "So‘ralgan ma’lumotni bering", text: "Rasmiy faollashtirish qadamlarini bot ketma-ket tushuntiradi." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet — 45 000 so‘m." },
    { name: "Faollashuvni tasdiqlang", text: "Profil rozetkasi, sozlamalardagi tugash sanasi va katta fayl sinovi." },
  ],
  locales: {
    uz: {
      title: "1 oylik Telegram Premium: UzCard va HUMO orqali olish",
      excerpt:
        "1 oylik Premium 45 000 so‘m va username orqali beriladi — parolsiz. Narx, muddat, UzCard/HUMO to‘lovi va faollashuvni tekshirish.",
      metaTitle: "1 oylik Telegram Premium — UzCard va HUMO",
      metaDescription:
        "1 oylik Telegram Premium 45 000 so‘m: qaysi oqimda beriladi, UzCard va HUMO bilan to‘lash, muddat qachon boshlanadi va faollashuvni qanday tekshirish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "1 oylik Premium’ni oling",
      ctaBody: "@StarsPaymee_bot — 45 000 so‘m, UzCard, HUMO, Click, Payme, Uzum va Paynet orqali so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Telegram Premium на 1 месяц: оплата картой UzCard и Humo",
      excerpt:
        "Месячный Premium стоит 45 000 сум и оформляется по username — без пароля. Цена, срок, оплата UzCard/Humo и проверка активации.",
      metaTitle: "Telegram Premium на месяц — UzCard и Humo",
      metaDescription:
        "Telegram Premium на 1 месяц за 45 000 сум: в каком сценарии оформляется, оплата картой UzCard и Humo, с какого дня идёт срок и как проверить активацию.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите Premium на месяц",
      ctaBody: "@StarsPaymee_bot — 45 000 сум, оплата в сумах через UzCard, Humo, Click, Payme и Paynet.",
      faq: ruFaq,
    },
    en: {
      title: "One month of Telegram Premium: paying by UzCard and HUMO",
      excerpt:
        "The monthly plan costs 45,000 UZS and is arranged by username — no password. Price, term, UzCard/HUMO payment and how to verify activation.",
      metaTitle: "Telegram Premium for a month — UzCard and HUMO",
      metaDescription:
        "One month of Telegram Premium for 45,000 UZS: which flow delivers it, paying by UzCard and HUMO, when the term starts and how to verify activation.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get one month of Premium",
      ctaBody: "@StarsPaymee_bot — 45,000 UZS, paid in so‘m via UzCard, HUMO, Click, Payme, Uzum and Paynet.",
      faq: enFaq,
    },
  },
};
