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
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "tez-premium-olish";

/**
 * Tez Premium olish — 4 soniyalik faollashtirish.
 *
 * ⚠️ TEZLIK DA'VOSI HAQIDA. «4 soniya» — xizmat egasi bergan ko'rsatkich,
 * baza bilan tasdiqlab bo'lmaydi: `orders` jadvalida yetkazish vaqti
 * saqlanmaydi (faqat `created_at` bor), `paylinker_events` esa faqat
 * to'lov hodisalarini yozadi (invoice.paid / expired / refunded).
 *
 * Shuning uchun matnda u ANIQ CHEGARALANGAN: 4 soniya — TO'LOV
 * TASDIQLANGANDAN KEYINGI avtomatik faollashtirish bosqichi, uchdan-uchiga
 * ketgan vaqt emas. Saytdagi «5 soniya» (`STATS.deliverySeconds`) esa
 * umumiy yetkazish. Ikkisi qarama-qarshi emas: faollashtirish —
 * yetkazishning ichidagi qadam. Shu farq matnda ochiq yozilgan.
 *
 * NARXLAR `lib/products.ts` dagi `PREMIUM_PLANS` dan O'QILADI — qo'lda
 * yozilgan son yo'q, tarif o'zgarsa jadval o'zi yangilanadi.
 */

/** Narx jadvali — manba `PREMIUM_PLANS`, oyiga qiymati hisoblab chiqariladi. */
function PriceTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const nf = new Intl.NumberFormat(locale === "en" ? "en-US" : "ru-RU");
  const fmt = (n: number) => nf.format(n).replace(/\u00a0/g, " ");
  const copy = {
    uz: {
      headers: ["Obuna muddati", "Umumiy narx", "Oyiga hisoblaganda"],
      month: (n: number) => `${n} oy`,
      unit: "so‘m",
      about: "≈",
    },
    ru: {
      headers: ["Срок подписки", "Общая цена", "В пересчёте на месяц"],
      month: (n: number) => `${n} мес`,
      unit: "сум",
      about: "≈",
    },
    en: {
      headers: ["Plan length", "Total price", "Per month"],
      month: (n: number) => `${n} month${n > 1 ? "s" : ""}`,
      unit: "som",
      about: "≈",
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={PREMIUM_PLANS.map((p) => [
        <strong key="m">{copy.month(p.months)}</strong>,
        `${fmt(p.priceUzs)} ${copy.unit}`,
        p.months === 1
          ? `${fmt(p.priceUzs)} ${copy.unit}`
          : `${copy.about} ${fmt(Math.round(p.priceUzs / p.months))} ${copy.unit}`,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Botni ochasiz, obuna muddatini tanlaysiz, qabul qiluvchining{" "}
      <b>username</b>’ini kiritasiz va to‘laysiz. To‘lov tasdiqlangach mos buyurtma avtomatik
      bajariladi — bu bosqich <b>4 soniya</b> atrofida. Narxlar: 1 oy{" "}
      <b>45 000</b>, 12 oy <b>388 000</b> so‘m. Akkaunt paroli yoki xorijiy karta kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Sahifada"
        items={[
          { href: "#nega", label: "Premium’ni tez olish nimaga qulay" },
          { href: "#qanday", label: "4 soniya nimani anglatadi" },
          { href: "#narx", label: "Qaysi muddat sizga mos" },
          { href: "#tolov", label: "So‘mda to‘lash" },
          { href: "#qadam", label: "Besh qadamda xarid" },
          { href: "#imkoniyat", label: "Premium nima beradi" },
          { href: "#muammo", label: "Premium faollashmasa" },
        ]}
      />

      <KeyFacts label="Qisqa ma‘lumot">
        <li>
          Xarid <b>username orqali</b> — parol yoki kirish kodi so‘ralmaydi.
        </li>
        <li>
          To‘lov tasdiqlangach faollashtirish <b>4 soniya</b> atrofida.
        </li>
        <li>
          To‘rt muddat: <b>1, 3, 6</b> va <b>12</b> oy.
        </li>
        <li>To‘lov so‘mda: Click, Payme, Uzcard va HUMO.</li>
      </KeyFacts>

      <h2 id="nega">Premium’ni tez olish nimaga qulay?</h2>
      <p>
        Premium xaridi odatda aniq bir ehtiyojdan boshlanadi. Ishdagi katta faylni yuborish kerak,
        kelgan ovozli xabarni o‘qish kerak yoki tug‘ilgan kunga sovg‘a bugun yetib borishi kerak.
        Shunday paytda kutish eng yoqimsiz qismi bo‘ladi.
      </p>
      <p>
        Shuning uchun biz xaridning har bir bosqichini tushunarli qilishga harakat qilamiz: qaysi
        paketni tanlash, qanday to‘lash va natijani qayerdan ko‘rish. Siz mahsulotni tanlaysiz,
        tizim esa tasdiqlangan buyurtmani o‘zi qayta ishlaydi.
      </p>

      <h2 id="qanday">4 soniya nimani anglatadi?</h2>
      <p>
        Bu raqamni to‘g‘ri tushunish muhim. Xarid uch bosqichdan iborat:
      </p>
      <Steps>
        <Step title="Buyurtma tayyorlanadi">Muddat tanlanadi, qabul qiluvchi ko‘rsatiladi.</Step>
        <Step title="To‘lov tasdiqlanadi">Tizim buyurtma uchun pul tushganini aniqlaydi.</Step>
        <Step title="Premium faollashtiriladi">Mos buyurtma avtomatik bajariladi.</Step>
      </Steps>
      <p>
        <b>4 soniya — aynan uchinchi bosqich.</b> Bank ilovasida to‘lov qilgan vaqtingiz, paket
        tanlash va username yozish vaqti bunga kirmaydi.
      </p>
      <Notice label="Halol chegara">
        Bu ko‘rsatkichni <b>xizmatning o‘zi</b> beradi va u odatdagi holatga tegishli. Telegram
        tomonidagi yoki to‘lov tizimidagi kechikish natijani uzaytirishi mumkin. Saytning boshqa
        sahifalarida ko‘rsatilgan <b>5 soniya</b> esa umumiy yetkazish vaqti — faollashtirish
        o‘shaning ichidagi qadam, ikkisi bir-biriga zid emas.
      </Notice>
      <p>
        Buyurtmani tezroq yakunlash o‘zingizga ham bog‘liq: username’ni oldindan tayyorlab qo‘ying,
        kerakli muddatni bilib oling va yakuniy summani to‘lovdan oldin tekshiring. To‘g‘ri kiritilgan
        ma‘lumot qayta tuzatishga ketadigan vaqtni butunlay olib tashlaydi.
      </p>

      <h2 id="narx">Arzon Premium: qaysi muddat sizga mos?</h2>
      <p>
        «Arzon Premium» deganda ikki xil maqsad bo‘lishi mumkin: <b>hozir kamroq pul sarflash</b>{" "}
        yoki <b>har oyga to‘g‘ri keladigan xarajatni kamaytirish</b>. Bu ikkisiga mos paket bir xil
        emas.
      </p>
      <PriceTable locale="uz" />
      <p>
        Oyiga ko‘rsatilgan summa — umumiy narxning muddatga bo‘lingani, bu bo‘lib to‘lash taklifi
        emas. Bir martalik xarajati eng kam variant — <b>1 oylik</b>. Oyiga hisoblaganda eng
        tejamkori — <b>12 oylik</b>.
      </p>
      <Notice label="Diqqat">
        Muddat uzaygani bilan oylik narx <b>har doim</b> arzonlashavermaydi. Hozirgi jadvalda 3
        oylik tarif oyiga hisoblaganda 1 oylikdan qimmatroq tushadi. Shuning uchun faqat muddatga
        qarab xulosa qilmang — jadvaldagi uchinchi ustunga qarang.
      </Notice>
      <p>
        Muddatlar bo‘yicha batafsil taqqoslash:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          Telegram Premium narxi O‘zbekistonda
        </Link>
        . Barcha tariflar esa <Link href="/premium">Premium sahifasida</Link> turadi.
      </p>

      <h2 id="tolov">So‘mda Premium olish</h2>
      <p>
        O‘zbekistondagi foydalanuvchi uchun narxning so‘mda ko‘rinishi va o‘zi ishlatadigan kartadan
        to‘lay olishi eng qulay yo‘l. Xaridgacha qancha pul kerakligi darhol tushunarli bo‘ladi.
      </p>
      <InfoGrid>
        <InfoCard title="Onlayn to‘lov" emoji="⚡">
          Click va Payme orqali to‘lov avtomatik tasdiqlanadi — buyurtma qo‘lda tekshiruvsiz davom
          etadi.
        </InfoCard>
        <InfoCard title="Karta o‘tkazmasi" emoji="💳">
          Uzcard va HUMO kartasidan oddiy o‘tkazma. Summa tiyinigacha mos bo‘lishi kerak, aks holda
          to‘lov avtomatik topilmaydi.
        </InfoCard>
      </InfoGrid>
      <p>
        Username orqali xaridda <b>xorijiy karta</b> tayyorlash ham, akkauntga <b>kirish
        ma‘lumotlarini berish</b> ham talab qilinmaydi.
      </p>

      <InlineCta text="Premium kerakmi? Botni oching — muddat, narx va shartlar to‘lovdan oldin ko‘rinadi." />

      <h2 id="qadam">Besh qadamda xarid</h2>
      <Steps>
        <Step title="Botga kiring">
          <b>@StarsPaymee_bot</b> havolasini oching yoki avval starstg.uz saytida tanishing.
        </Step>
        <Step title="Paketni tanlang">
          Premium bo‘limida kerakli muddatni belgilang, narx va shartlarni ko‘ring.
        </Step>
        <Step title="Qabul qiluvchini ko‘rsating">
          Username’ni kiriting. Profildagi <b>ko‘rinadigan ism</b> bilan <b>username</b>’ni
          adashtirmang — buyurtma aynan username bo‘yicha ketadi.
        </Step>
        <Step title="To‘lovni yakunlang">
          Summa va buyurtma ma‘lumotlari to‘g‘ri bo‘lsa, mavjud usuldan foydalaning.
        </Step>
        <Step title="Holatni tekshiring">
          Tasdiqni kuting va qabul qiluvchi akkauntda Premium faollashganini ko‘ring.
        </Step>
      </Steps>

      <h2 id="imkoniyat">Premium faollashgach nimalardan foydalanasiz?</h2>
      <p>Tez faollashtirishning foydasi — imkoniyatlardan ertaroq foydalana boshlashingizda:</p>
      <ul>
        <li>
          <b>4 GB gacha fayl yuborish</b> — katta video va ish materiallari uchun.
        </li>
        <li>
          <b>Ovozli xabarni matnga aylantirish</b> — eshitib bo‘lmaydigan paytda o‘qish mumkin.
        </li>
        <li>
          <b>Premium stikerlar, maxsus emoji va profil imkoniyatlari</b>.
        </li>
        <li>
          <b>Kengaytirilgan limitlar va chat boshqaruvi</b> — faol foydalanuvchilar uchun.
        </li>
        <li>
          <b>Yuklab olish tezligi cheklovining olinishi</b> — haqiqiy tezlik internetingizga ham
          bog‘liq.
        </li>
      </ul>

      <h2 id="muammo">Premium tez faollashmasa nima qilish kerak?</h2>
      <p>
        Avval to‘lov yakunlanganini va buyurtma qabul qilinganini tekshiring. Bankdagi tasdiqni
        botdagi buyurtma holati bilan solishtiring. To‘lov hali qayta ishlanayotgan bo‘lsa,{" "}
        <b>aynan shu buyurtmani qayta to‘lamang</b>.
      </p>
      <p>
        Bot buyurtma bajarilganini ko‘rsatsa-yu, Premium ko‘rinmasa, qabul qiluvchi akkaunt to‘g‘ri
        ekanini tekshiring va Telegram ilovasini qayta oching. Akkauntdan chiqish yoki uni o‘chirish
        kerak emas.
      </p>
      <p>
        Savol qolsa, qo‘llab-quvvatlashga <b>buyurtma raqami</b>, <b>to‘lov vaqti</b> va holat
        tavsifini yuboring — shunda murojaatingiz aniq buyurtmaga bog‘lanadi.
      </p>

      <Sources
        label="Manbalar va tegishli sahifalar"
        items={[
          { href: "/uz/premium", label: "Telegram Premium sahifasi", note: "paketlar va xarid tartibi" },
          {
            href: "/uz/blog/telegram-premium-narxi-ozbekistonda-2026",
            label: "Premium narxi O‘zbekistonda",
            note: "muddatlar bo‘yicha taqqoslash",
          },
          {
            href: "https://telegram.org/faq_premium",
            label: "Telegram Premium FAQ",
            note: "imkoniyatlarning rasmiy ro‘yxati",
          },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Premium’ni tez qayerdan olish mumkin?",
    answer:
      "StarsPaymee botida Premium paketini tanlab, username orqali buyurtma berishingiz mumkin. To‘lov tasdiqlangach mos buyurtma avtomatik faollashtiriladi.",
  },
  {
    question: "Premium haqiqatan 4 soniyada faollashadimi?",
    answer:
      "4 soniya — to‘lov tasdiqlangandan keyingi avtomatik faollashtirish bosqichi. Bankdagi to‘lov va paket tanlash vaqti bunga kirmaydi; Telegram yoki to‘lov tizimidagi kechikishda muddat uzayadi.",
  },
  {
    question: "Arzon Premium olish uchun qaysi paketni tanlash kerak?",
    answer:
      "Bir martalik xarajati eng kam variant — 1 oylik. Oyiga hisoblaganda eng tejamkori — 12 oylik. 3 oylik tarif hozir oyiga hisoblaganda 1 oylikdan qimmatroq tushadi.",
  },
  {
    question: "Telegram Premium narxi qancha?",
    answer:
      "1 oy — 45 000, 3 oy — 160 000, 6 oy — 215 000, 12 oy — 388 000 so‘m. Amaldagi yakuniy narx botda ko‘rsatiladi.",
  },
  {
    question: "Premium uchun akkaunt paroli kerakmi?",
    answer:
      "Yo‘q. Username orqali xaridda Telegram paroli ham, kirish kodi ham so‘ralmaydi — faqat qabul qiluvchining username’i kerak.",
  },
  {
    question: "Premium’ni boshqa odamga sovg‘a qilsam bo‘ladimi?",
    answer:
      "Ha. Qabul qiluvchi sifatida boshqa odamning username’ini ko‘rsatasiz. Uning akkaunti va tanlangan paketni to‘lovdan oldin tekshiring.",
  },
  {
    question: "Akkauntda Premium allaqachon bo‘lsa, yana buyurtma bersam bo‘ladimi?",
    answer:
      "Bu holatda botdagi moslik tekshiruviga qarang. Mavjud obunaga yangi paket avtomatik qo‘shiladi deb taxmin qilmang — bot ko‘rsatmasi yoki qo‘llab-quvvatlash javobiga amal qiling.",
  },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Открываете бота, выбираете срок подписки, указываете <b>username</b> получателя и платите.
      После подтверждения оплаты подходящий заказ выполняется автоматически — этот шаг занимает около{" "}
      <b>4 секунд</b>. Цены: 1 месяц <b>45 000</b>, 12 месяцев <b>388 000</b> сум. Пароль от аккаунта
      и зарубежная карта не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="На странице"
        items={[
          { href: "#nega", label: "Зачем быстрая покупка Premium" },
          { href: "#qanday", label: "Что значит 4 секунды" },
          { href: "#narx", label: "Какой срок вам подходит" },
          { href: "#tolov", label: "Оплата в сумах" },
          { href: "#qadam", label: "Покупка за пять шагов" },
          { href: "#imkoniyat", label: "Что даёт Premium" },
          { href: "#muammo", label: "Если Premium не активировался" },
        ]}
      />

      <KeyFacts label="Коротко">
        <li>
          Покупка <b>по username</b> — пароль и код входа не спрашиваются.
        </li>
        <li>
          После подтверждения оплаты активация занимает около <b>4 секунд</b>.
        </li>
        <li>
          Четыре срока: <b>1, 3, 6</b> и <b>12</b> месяцев.
        </li>
        <li>Оплата в сумах: Click, Payme, Uzcard и HUMO.</li>
      </KeyFacts>

      <h2 id="nega">Зачем быстрая покупка Premium?</h2>
      <p>
        Покупка Premium обычно начинается с конкретной потребности: нужно отправить большой рабочий
        файл, прочитать пришедшее голосовое или успеть с подарком ко дню рождения. В такой момент
        ожидание — самая неприятная часть.
      </p>
      <p>
        Поэтому мы стараемся сделать понятным каждый шаг: какой пакет выбрать, как заплатить и где
        увидеть результат. Вы выбираете продукт, а систему подтверждённый заказ обрабатывает сама.
      </p>

      <h2 id="qanday">Что значит 4 секунды?</h2>
      <p>Это число важно понимать правильно. Покупка состоит из трёх шагов:</p>
      <Steps>
        <Step title="Заказ готовится">Выбирается срок, указывается получатель.</Step>
        <Step title="Оплата подтверждается">Система видит, что деньги по заказу пришли.</Step>
        <Step title="Premium активируется">Подходящий заказ выполняется автоматически.</Step>
      </Steps>
      <p>
        <b>4 секунды — это именно третий шаг.</b> Время оплаты в банковском приложении, выбор пакета
        и ввод username сюда не входят.
      </p>
      <Notice label="Честная оговорка">
        Показатель даёт <b>сам сервис</b>, и он относится к обычной ситуации. Задержки на стороне
        Telegram или платёжной системы могут растянуть результат. Указанные на других страницах сайта{" "}
        <b>5 секунд</b> — это общее время доставки, а активация входит в него как отдельный шаг;
        одно другому не противоречит.
      </Notice>
      <p>
        Скорость зависит и от вас: подготовьте username заранее, определитесь со сроком и сверьте
        итоговую сумму до оплаты. Правильно введённые данные убирают время на исправления.
      </p>

      <h2 id="narx">Дешёвый Premium: какой срок подходит?</h2>
      <p>
        Под «дешёвым Premium» понимают разное: <b>потратить меньше сейчас</b> или{" "}
        <b>снизить расход в пересчёте на месяц</b>. Пакет для этих двух целей разный.
      </p>
      <PriceTable locale="ru" />
      <p>
        Сумма за месяц — это общая цена, делённая на срок, а не предложение рассрочки. Самая
        небольшая разовая трата — <b>1 месяц</b>. Самый выгодный в пересчёте на месяц —{" "}
        <b>12 месяцев</b>.
      </p>
      <Notice label="Важно">
        Более длинный срок <b>не всегда</b> дешевле помесячно. В нынешней таблице 3-месячный тариф
        в пересчёте на месяц дороже месячного. Поэтому смотрите на третий столбец, а не только на
        срок.
      </Notice>
      <p>
        Подробное сравнение по срокам:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          цена Telegram Premium в Узбекистане
        </Link>
        . Все тарифы — на <Link href="/premium">странице Premium</Link>.
      </p>

      <h2 id="tolov">Оплата в сумах</h2>
      <p>
        Для пользователя в Узбекистане удобнее всего видеть цену в сумах и платить своей картой. Так
        сразу понятно, сколько денег понадобится.
      </p>
      <InfoGrid>
        <InfoCard title="Онлайн-оплата" emoji="⚡">
          Через Click и Payme оплата подтверждается автоматически — заказ идёт дальше без ручной
          проверки.
        </InfoCard>
        <InfoCard title="Перевод с карты" emoji="💳">
          Обычный перевод с Uzcard или HUMO. Сумма должна совпадать точь-в-точь, иначе платёж не
          найдётся автоматически.
        </InfoCard>
      </InfoGrid>
      <p>
        При покупке по username не нужны ни <b>зарубежная карта</b>, ни <b>данные для входа</b> в
        аккаунт.
      </p>

      <InlineCta text="Нужен Premium? Откройте бота — срок, цена и условия видны до оплаты." />

      <h2 id="qadam">Покупка за пять шагов</h2>
      <Steps>
        <Step title="Откройте бота">
          Ссылка <b>@StarsPaymee_bot</b>, или сначала посмотрите сайт starstg.uz.
        </Step>
        <Step title="Выберите пакет">
          В разделе Premium отметьте нужный срок, посмотрите цену и условия.
        </Step>
        <Step title="Укажите получателя">
          Введите username. Не перепутайте <b>отображаемое имя</b> и <b>username</b> — заказ уходит
          именно по username.
        </Step>
        <Step title="Завершите оплату">Если сумма и данные верны, используйте доступный способ.</Step>
        <Step title="Проверьте статус">
          Дождитесь подтверждения и убедитесь, что Premium активен на аккаунте получателя.
        </Step>
      </Steps>

      <h2 id="imkoniyat">Что даёт Premium</h2>
      <p>Смысл быстрой активации в том, что возможностями вы начинаете пользоваться раньше:</p>
      <ul>
        <li>
          <b>Файлы до 4 ГБ</b> — для больших видео и рабочих материалов.
        </li>
        <li>
          <b>Расшифровка голосовых в текст</b> — когда послушать нельзя.
        </li>
        <li>
          <b>Premium-стикеры, особые эмодзи и оформление профиля</b>.
        </li>
        <li>
          <b>Расширенные лимиты и управление чатами</b> — для активных пользователей.
        </li>
        <li>
          <b>Снятие ограничения скорости загрузки</b> — реальная скорость зависит и от вашего
          интернета.
        </li>
      </ul>

      <h2 id="muammo">Если Premium не активировался</h2>
      <p>
        Сначала проверьте, что оплата прошла и заказ принят. Сверьте подтверждение банка со статусом
        заказа в боте. Если платёж ещё обрабатывается, <b>не оплачивайте тот же заказ повторно</b>.
      </p>
      <p>
        Если бот показывает, что заказ выполнен, а Premium не виден, проверьте правильность аккаунта
        получателя и переоткройте Telegram. Выходить из аккаунта или удалять его не нужно.
      </p>
      <p>
        Остались вопросы — отправьте в поддержку <b>номер заказа</b>, <b>время оплаты</b> и описание
        ситуации: так обращение свяжут с конкретным заказом.
      </p>

      <Sources
        label="Источники и связанные страницы"
        items={[
          { href: "/ru/premium", label: "Страница Telegram Premium", note: "пакеты и порядок покупки" },
          {
            href: "/ru/blog/telegram-premium-narxi-ozbekistonda-2026",
            label: "Цена Premium в Узбекистане",
            note: "сравнение по срокам",
          },
          {
            href: "https://telegram.org/faq_premium",
            label: "Telegram Premium FAQ",
            note: "официальный список возможностей",
          },
        ]}
      />
    </>
  );
}

const ruFaq = [
  {
    question: "Где быстро купить Telegram Premium?",
    answer:
      "В боте StarsPaymee: выбираете пакет Premium и оформляете заказ по username. После подтверждения оплаты подходящий заказ активируется автоматически.",
  },
  {
    question: "Premium правда активируется за 4 секунды?",
    answer:
      "4 секунды — это шаг автоматической активации после подтверждения оплаты. Время оплаты в банке и выбор пакета сюда не входят; при задержках на стороне Telegram или платёжной системы срок увеличивается.",
  },
  {
    question: "Какой пакет выбрать, чтобы вышло дешевле?",
    answer:
      "Самая небольшая разовая трата — 1 месяц. Самый выгодный в пересчёте на месяц — 12 месяцев. Трёхмесячный тариф сейчас помесячно дороже месячного.",
  },
  {
    question: "Сколько стоит Telegram Premium?",
    answer:
      "1 месяц — 45 000, 3 месяца — 160 000, 6 месяцев — 215 000, 12 месяцев — 388 000 сум. Итоговая цена показывается в боте.",
  },
  {
    question: "Нужен ли пароль от аккаунта?",
    answer:
      "Нет. При покупке по username не спрашивают ни пароль Telegram, ни код входа — нужен только username получателя.",
  },
  {
    question: "Можно подарить Premium другому человеку?",
    answer:
      "Да. В качестве получателя указываете username другого человека. Сверьте его аккаунт и выбранный пакет до оплаты.",
  },
  {
    question: "Если на аккаунте уже есть Premium, можно оформить ещё?",
    answer:
      "Смотрите на проверку совместимости в боте. Не считайте, что новый пакет автоматически добавится к текущей подписке — следуйте указанию бота или ответу поддержки.",
  },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Open the bot, pick a plan length, enter the recipient’s <b>username</b> and pay. Once the
      payment is confirmed the matching order runs automatically, and that step takes about{" "}
      <b>4 seconds</b>. Prices: 1 month <b>45,000</b>, 12 months <b>388,000</b> som. No account
      password and no foreign card are needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="On this page"
        items={[
          { href: "#nega", label: "Why speed matters here" },
          { href: "#qanday", label: "What the 4 seconds cover" },
          { href: "#narx", label: "Which plan suits you" },
          { href: "#tolov", label: "Paying in som" },
          { href: "#qadam", label: "Five steps to buy" },
          { href: "#imkoniyat", label: "What Premium gives you" },
          { href: "#muammo", label: "If Premium does not appear" },
        ]}
      />

      <KeyFacts label="In short">
        <li>
          The purchase runs <b>by username</b> — no password or login code is asked for.
        </li>
        <li>
          After the payment is confirmed, activation takes about <b>4 seconds</b>.
        </li>
        <li>
          Four lengths: <b>1, 3, 6</b> and <b>12</b> months.
        </li>
        <li>Payment in som: Click, Payme, Uzcard and HUMO.</li>
      </KeyFacts>

      <h2 id="nega">Why speed matters here</h2>
      <p>
        A Premium purchase usually starts from a specific need: a large work file to send, a voice
        message to read, or a birthday gift that has to arrive today. At that moment waiting is the
        worst part.
      </p>
      <p>
        So we try to keep every step clear: which plan to pick, how to pay, and where to see the
        result. You choose the product; the system handles a confirmed order on its own.
      </p>

      <h2 id="qanday">What the 4 seconds cover</h2>
      <p>The figure is worth reading precisely. A purchase has three steps:</p>
      <Steps>
        <Step title="The order is prepared">A length is chosen and a recipient named.</Step>
        <Step title="Payment is confirmed">The system sees the money for the order.</Step>
        <Step title="Premium is activated">The matching order runs automatically.</Step>
      </Steps>
      <p>
        <b>The 4 seconds are that third step.</b> The time you spend in a banking app, picking a
        plan and typing a username is not included.
      </p>
      <Notice label="An honest caveat">
        The figure comes from <b>the service itself</b> and describes the ordinary case. Delays on
        Telegram’s side or at the payment system can stretch it. The <b>5 seconds</b> quoted
        elsewhere on the site is the overall delivery time, and activation sits inside it as one
        step; the two do not contradict each other.
      </Notice>
      <p>
        Some of the speed is yours: have the username ready, decide on the length, and check the
        final amount before paying. Details entered correctly remove the time spent on corrections.
      </p>

      <h2 id="narx">Cheap Premium: which plan suits you?</h2>
      <p>
        “Cheap Premium” can mean two different things: <b>spending less right now</b> or{" "}
        <b>lowering what it costs per month</b>. The plan that fits each is not the same.
      </p>
      <PriceTable locale="en" />
      <p>
        The per-month figure is the total divided by the length, not an instalment offer. The
        smallest one-off spend is <b>1 month</b>. The best value per month is <b>12 months</b>.
      </p>
      <Notice label="Worth noting">
        A longer plan is <b>not always</b> cheaper per month. In the current table the three-month
        plan works out dearer per month than the one-month one. Read the third column, not just the
        length.
      </Notice>
      <p>
        A fuller comparison by length:{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">
          Telegram Premium prices in Uzbekistan
        </Link>
        . Every plan sits on the <Link href="/premium">Premium page</Link>.
      </p>

      <h2 id="tolov">Paying in som</h2>
      <p>
        For someone in Uzbekistan the easiest path is seeing the price in som and paying with their
        own card. It makes the amount needed obvious up front.
      </p>
      <InfoGrid>
        <InfoCard title="Online payment" emoji="⚡">
          Through Click and Payme the payment is confirmed automatically, so the order continues
          without a manual check.
        </InfoCard>
        <InfoCard title="Card transfer" emoji="💳">
          A plain transfer from Uzcard or HUMO. The amount must match to the last so’m, or the
          payment is not matched automatically.
        </InfoCard>
      </InfoGrid>
      <p>
        Buying by username needs neither a <b>foreign card</b> nor any <b>login details</b> for the
        account.
      </p>

      <InlineCta text="Need Premium? Open the bot — the length, price and terms show before you pay." />

      <h2 id="qadam">Five steps to buy</h2>
      <Steps>
        <Step title="Open the bot">
          The link is <b>@StarsPaymee_bot</b>, or look at starstg.uz first.
        </Step>
        <Step title="Pick a plan">In the Premium section choose the length and read the terms.</Step>
        <Step title="Name the recipient">
          Enter the username. Do not confuse the <b>display name</b> with the <b>username</b> — the
          order follows the username.
        </Step>
        <Step title="Complete the payment">
          If the amount and details are right, use one of the available methods.
        </Step>
        <Step title="Check the status">
          Wait for the confirmation and check that Premium is active on the recipient’s account.
        </Step>
      </Steps>

      <h2 id="imkoniyat">What Premium gives you</h2>
      <p>The point of fast activation is that you start using the features sooner:</p>
      <ul>
        <li>
          <b>Files up to 4 GB</b> — for large videos and work material.
        </li>
        <li>
          <b>Voice messages turned into text</b> — for when you cannot listen.
        </li>
        <li>
          <b>Premium stickers, custom emoji and profile options</b>.
        </li>
        <li>
          <b>Higher limits and chat management</b> — for heavy users.
        </li>
        <li>
          <b>The download speed cap lifted</b> — real speed still depends on your connection.
        </li>
      </ul>

      <h2 id="muammo">If Premium does not appear</h2>
      <p>
        First check that the payment went through and the order was accepted. Compare the bank’s
        confirmation with the order status in the bot. If the payment is still processing,{" "}
        <b>do not pay for the same order again</b>.
      </p>
      <p>
        If the bot shows the order as done but Premium is not visible, check that the recipient
        account is right and reopen Telegram. There is no need to log out or delete the account.
      </p>
      <p>
        With any question left, send support the <b>order number</b>, the <b>payment time</b> and a
        description — that ties your message to the exact order.
      </p>

      <Sources
        label="Sources and related pages"
        items={[
          { href: "/en/premium", label: "The Telegram Premium page", note: "plans and how to buy" },
          {
            href: "/en/blog/telegram-premium-narxi-ozbekistonda-2026",
            label: "Premium prices in Uzbekistan",
            note: "compared by length",
          },
          {
            href: "https://telegram.org/faq_premium",
            label: "Telegram Premium FAQ",
            note: "the official feature list",
          },
        ]}
      />
    </>
  );
}

const enFaq = [
  {
    question: "Where can I buy Telegram Premium quickly?",
    answer:
      "In the StarsPaymee bot: pick a Premium plan and order it by username. Once the payment is confirmed, a matching order is activated automatically.",
  },
  {
    question: "Does Premium really activate in 4 seconds?",
    answer:
      "The 4 seconds are the automatic activation step after the payment is confirmed. Time spent paying at the bank and picking a plan is not included; delays at Telegram or the payment system extend it.",
  },
  {
    question: "Which plan works out cheapest?",
    answer:
      "The smallest one-off spend is the 1-month plan. The best value per month is 12 months. The three-month plan currently costs more per month than the one-month plan.",
  },
  {
    question: "How much does Telegram Premium cost?",
    answer:
      "1 month is 45,000, 3 months 160,000, 6 months 215,000 and 12 months 388,000 som. The final price is shown in the bot.",
  },
  {
    question: "Is an account password required?",
    answer:
      "No. Buying by username asks for neither a Telegram password nor a login code — only the recipient's username.",
  },
  {
    question: "Can I gift Premium to someone else?",
    answer:
      "Yes. You name the other person's username as the recipient. Check their account and the chosen plan before paying.",
  },
  {
    question: "The account already has Premium — can I order again?",
    answer:
      "Follow the compatibility check in the bot. Do not assume a new plan stacks onto an existing subscription automatically; go by what the bot says or what support answers.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  keywords: [
    "tez premium olish",
    "telegram premium tez olish",
    "tezkor premium bot",
    "premium faollashtirish",
    "arzon telegram premium",
    "telegram premium narxi",
    "so‘mda premium olish",
    "username orqali premium olish",
    "быстро купить telegram premium",
    "премиум телеграм за секунды",
    "buy telegram premium fast",
  ],
  howToSteps: [
    { name: "Botga kiring", text: "@StarsPaymee_bot ni oching va Premium bo‘limini tanlang." },
    { name: "Paketni tanlang", text: "1, 3, 6 yoki 12 oylik muddatdan keraklisini belgilang." },
    { name: "Username kiriting", text: "Qabul qiluvchining username’ini yozing va tekshiring." },
    { name: "To‘lang", text: "Click, Payme yoki karta o‘tkazmasi bilan summani to‘lang." },
    { name: "Holatni tekshiring", text: "Tasdiqni kuting va akkauntda Premium faollashganini ko‘ring." },
  ],
  locales: {
    uz: {
      title: "Tez Premium olish: 4 soniyalik faollashtirish",
      excerpt:
        "Premium hozir kerakmi? To‘lov tasdiqlangach 4 soniyalik faollashtirish, username orqali xarid, so‘mda to‘lov va hamyoningizga mos muddatni tanlash haqida to‘liq qo‘llanma.",
      metaTitle: "Tez Premium olish — 4 soniyada",
      metaDescription:
        "Tez va arzon Telegram Premium olish: to‘lov tasdiqlangach 4 soniyalik faollashtirish. Narxlar, so‘mda to‘lov va xarid tartibi bosqichma-bosqich.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium kerakmi? Xaridni hozir boshlang",
      ctaBody:
        "Sizga mos muddatni tanlang, username’ni tekshiring va xaridni tasdiqlang — narx to‘lovdan oldin ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Быстро купить Premium: активация за 4 секунды",
      excerpt:
        "Premium нужен сейчас? Активация за 4 секунды после подтверждения оплаты, покупка по username, оплата в сумах и выбор подходящего срока — полное руководство.",
      metaTitle: "Быстро купить Telegram Premium — за 4 секунды",
      metaDescription:
        "Быстро и недорого купить Telegram Premium: активация за 4 секунды после подтверждения оплаты. Цены, оплата в сумах и порядок покупки по шагам.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужен Premium? Начните покупку",
      ctaBody:
        "Выберите подходящий срок, сверьте username и подтвердите покупку — цена видна до оплаты.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Premium fast: activation in 4 seconds",
      excerpt:
        "Need Premium now? Activation in about 4 seconds once payment is confirmed, buying by username, paying in som, and picking the plan that fits your budget.",
      metaTitle: "Buy Telegram Premium fast — in 4 seconds",
      metaDescription:
        "Buying Telegram Premium fast and cheap: activation in about 4 seconds once payment clears. Prices, paying in som and the purchase steps one by one.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Premium? Start the purchase",
      ctaBody:
        "Pick the length that suits you, check the username and confirm — the price shows before you pay.",
      faq: enFaq,
    },
  },
};
