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
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "boshqa-odamga-telegram-stars-sotib-olish";

/**
 * Boshqa odamga (do'stga, yaqin odamga) Telegram Stars olib berish.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-15): «do'stga stars olib berish / sovg'a qilish»
 * — alohida niyat. Saytda faqat parchalar bor edi: /stars FAQ'dagi bitta savol,
 * 184-maqolaning bitta bo'limi, 13/167 — Premium sovg'asi (Stars emas).
 * Bu sahifa to'liq oqimni beradi: kimga, qanday, narx, qabul qiluvchi nima
 * ko'radi, nimani tekshirish. Username'ni topish — 185-maqolada, takrorlanmaydi.
 *
 * Faktlar (bot, 2026-10-15): buyurtmada qabul qiluvchi @username yoziladi,
 * profil 2 soniyada tekshiriladi, Stars to'g'ridan-to'g'ri uning balansiga
 * tushadi (u hech narsa qilmaydi); narx o'zingizga olgandagidek — karta/balans
 * STARS_PER_UNIT_UZS, Click/Payme/Uzum/Paynet STARS_PER_UNIT_GATEWAY_UZS.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");

/** Narx — to'lov usuli bo'yicha, konstantalardan. */
function PriceTable({ locale }: { locale: Locale }) {
  const copy = {
    uz: { headers: ["Miqdor", "Karta o‘tkazmasi · balans", "Click · Payme · Uzum · Paynet"], unit: "so‘m" },
    ru: { headers: ["Количество", "Перевод на карту · баланс", "Click · Payme · Uzum · Paynet"], unit: "сум" },
    en: { headers: ["Amount", "Card transfer · balance", "Click · Payme · Uzum · Paynet"], unit: "som" },
  }[locale];
  return (
    <CompareTable
      headers={copy.headers}
      rows={[50, 100, 500, 1000].map((n) => [
        <strong key="n">{`${fmt(n, locale)}\u00a0⭐`}</strong>,
        `${fmt(n * STARS_PER_UNIT_UZS, locale)} ${copy.unit}`,
        `${fmt(n * STARS_PER_UNIT_GATEWAY_UZS, locale)} ${copy.unit}`,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha. <b>@StarsPaymee_bot</b> da buyurtma berayotganda o‘zingizniki o‘rniga <b>do‘stingizning
      @username’ini</b> yozasiz — yulduzlar to‘g‘ridan-to‘g‘ri uning Telegram balansiga tushadi, u hech
      narsa qilishi shart emas. To‘lov tasdiqlangach odatda <b>5 soniyada</b>. Narx o‘zingizga olgandagidek:
      karta o‘tkazmasida <b>{STARS_PER_UNIT_UZS} so‘m</b>, Click, Payme, Uzum yoki Paynet orqali{" "}
      <b>{STARS_PER_UNIT_GATEWAY_UZS} so‘m</b> — bir dona.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qachon", label: "Qachon boshqa odamga olib beriladi" },
          { href: "#qadamlar", label: "Qadam-baqadam" },
          { href: "#narx", label: "Narxi — o‘zingizga olgandagidek" },
          { href: "#u-nima-koradi", label: "Qabul qiluvchi nima ko‘radi, siz nima ko‘rasiz" },
          { href: "#tekshiruv", label: "To‘lovdan oldin tekshiring" },
          { href: "#xatolar", label: "Xatolar va ularni qaytarib bo‘lmasligi" },
        ]}
      />

      <h2 id="qachon">Qachon boshqa odamga olib beriladi</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Sovg‘a">
          Tug‘ilgan kun yoki shunchaki e’tibor: do‘stingiz Stars’ni o‘zi xohlagan narsaga — sovg‘a,
          reaksiya, bot ichidagi xarid — sarflaydi.
        </InfoCard>
        <InfoCard emoji="💳" title="Kartasi yo‘q odam">
          O‘quvchi, ota-ona yoki chet eldagi yaqin: u sizga naqd beradi yoki shunchaki so‘raydi, siz
          botdan to‘laysiz.
        </InfoCard>
        <InfoCard emoji="📣" title="Kanal yoki jamoa">
          Admin yoki xodimga ish uchun Stars kerak — bitta buyurtma, bitta username.
        </InfoCard>
        <InfoCard emoji="🤝" title="Yordam">
          Do‘stingiz bot ichida to‘lov qilolmay qolgan — kerakli miqdorni unga olib berasiz.
        </InfoCard>
      </InfoGrid>
      <p>
        Qabul qiluvchidan kerak bo‘ladigan yagona narsa — uning <b>@username’i</b>. U yo‘q bo‘lsa,
        avval qo‘yishi kerak: <Link href="/blog/telegram-stars-username-qanday-topiladi">username qayerdan
        topiladi va qanday qo‘yiladi</Link>.
      </p>

      <h2 id="qadamlar">Qadam-baqadam</h2>
      <Steps>
        <Step title="1. Username’ni oling">
          Do‘stingizning profilini oching va @ bilan yozilgan nomni nusxalang. Qo‘lda termang — bitta harf
          xato bo‘lsa, yulduzlar boshqa odamga ketadi.
        </Step>
        <Step title="2. Botda Stars bo‘limini oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Stars. «O‘zim» tugmasini <b>bosmang</b> — u sizning username’ingizni qo‘yadi.
        </Step>
        <Step title="3. Username’ni joylashtiring va kartochkani ko‘ring">
          2 soniyada bot profilni topadi: <b>ism, rasm va @nom</b> chiqadi. Aynan o‘sha odam ekanini
          tekshiring. «Foydalanuvchi topilmadi!» chiqsa — nom xato yoki unda username yo‘q.
        </Step>
        <Step title="4. Miqdorni tanlang">
          Tayyor paket (50, 100, 500, 1000…) yoki istalgan son — 50 dan 10 000 gacha. Summa darhol
          ko‘rinadi.
        </Step>
        <Step title="5. To‘lov usulini tanlang va to‘lang">
          Uzcard/Humo o‘tkazmasi, Click, Payme, Uzum yoki Paynet. Kartaga o‘tkazganda summa{" "}
          <b>aynan ko‘rsatilgandek</b> bo‘lsin — tizim to‘lovni summa bo‘yicha taniydi.
        </Step>
        <Step title="6. «Yetkazildi» holatini kuting">
          To‘lov tasdiqlangach yulduzlar odatda 5 soniyada do‘stingiz balansiga tushadi. Botdagi{" "}
          <b>«Buyurtmalarim»</b>da holat «yetkazildi» bo‘ladi.
        </Step>
      </Steps>
      <InlineCta text="Do‘stingizning username’ini yozing — bot profilni 2 soniyada ko‘rsatadi." product={{ kind: "stars", amount: 100 }} />

      <h2 id="narx">Narxi — o‘zingizga olgandagidek</h2>
      <p>
        Boshqa odamga olib berish uchun ustama yo‘q. Narx faqat <b>to‘lov usuliga</b> bog‘liq: karta
        o‘tkazmasi va balansdan to‘lovda {STARS_PER_UNIT_UZS} so‘m, onlayn shlyuzlar (Click, Payme, Uzum,
        Paynet) orqali {STARS_PER_UNIT_GATEWAY_UZS} so‘m — bir dona.
      </p>
      <PriceTable locale="uz" />
      <p>
        Barcha paketlar va to‘lov usullari — <Link href="/stars">Telegram Stars sahifasida</Link>; aynan 1000
        dona haqida — <Link href="/blog/1000-stars-olish-click-payme">alohida maqolada</Link>.
      </p>

      <h2 id="u-nima-koradi">Qabul qiluvchi nima ko‘radi, siz nima ko‘rasiz</h2>
      <CompareTable
        headers={["", "Qabul qiluvchi", "Siz (xaridor)"]}
        rows={[
          [<strong key="a">Stars qayerga tushadi</strong>, "Uning Telegram balansiga: Sozlamalar → My Stars", "Sizning balansingizga tushmaydi — buyurtma unga edi"],
          [<strong key="b">Nima qilishi kerak</strong>, "Hech narsa — botga kirishi ham shart emas", "To‘lovni aynan ko‘rsatilgan summada qilish"],
          [<strong key="c">Qayerda ko‘rinadi</strong>, "Balans va tranzaksiyalar tarixi", "Botdagi «Buyurtmalarim»: sana, miqdor, holat"],
          [<strong key="d">Kim yuborganini biladimi</strong>, "Bot yoki StarsPaymee xabar yubormaydi — aytish sizga qoladi", "—"],
        ]}
      />
      <p>
        Yetkazilganini ikki tomondan tekshirish mumkin: siz botdagi holatni ko‘rasiz, do‘stingiz esa
        balansini. Qanday ko‘rishi —{" "}
        <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasida.
      </p>

      <h2 id="tekshiruv">To‘lovdan oldin tekshiring</h2>
      <KeyFacts label="30 soniyalik ro‘yxat">
        <li>
          <b>Kartochkadagi ism va rasm</b> — aynan kerakli odamniki.
        </li>
        <li>
          <b>Miqdor</b> — kelishilgan son; keyin qo‘shib bo‘lmaydi, faqat yangi buyurtma.
        </li>
        <li>
          <b>Summa</b> — tanlangan usul uchun ko‘rsatilgan bilan bir xil.
        </li>
        <li>
          <b>«O‘zim» bosilmagan</b> — aks holda yulduzlar o‘zingizga tushadi.
        </li>
      </KeyFacts>

      <h2 id="xatolar">Xatolar va ularni qaytarib bo‘lmasligi</h2>
      <Notice label="Muhim">
        Telegram qoidalariga ko‘ra <b>yetkazilgan Stars qaytarilmaydi</b>. Username xato bo‘lib, yulduzlar
        boshqa odamga tushsa, ularni olib bo‘lmaydi — StarsPaymee faqat o‘z texnik xatosi bo‘lsa pulni
        qaytaradi. Shuning uchun kartochka tekshiruvi — asosiy himoya.
      </Notice>
      <InfoGrid>
        <InfoCard emoji="🔤" title="Noto‘g‘ri username">
          Bot mavjud bo‘lmagan nomni o‘tkazmaydi, lekin <b>boshqa odamning</b> to‘g‘ri nomini o‘tkazadi.
          Kartochkadagi rasmga qarang.
        </InfoCard>
        <InfoCard emoji="🚫" title="Unda username yo‘q">
          «Telegram username topilmadi» — do‘stingiz avval Sozlamalardan nom qo‘yishi kerak, bir daqiqa
          oladi.
        </InfoCard>
        <InfoCard emoji="⏱" title="Yetkazildi, lekin u ko‘rmayapti">
          Ilovani yopib-ochsin, Sozlamalar → My Stars’ni tekshirsin. 10 daqiqada ham yo‘q bo‘lsa —{" "}
          <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmadi</Link> tartibi.
        </InfoCard>
        <InfoCard emoji="🔐" title="Hech narsa so‘ramang">
          Do‘stingizdan parol, SMS-kod yoki akkauntga kirish kerak emas — faqat username.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "/stars", label: "Telegram Stars sotib olish", note: "paketlar, narxlar, to‘lov usullari" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "buyurtma va «Buyurtmalarim»" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "yetkazilmasa — buyurtma raqami bilan" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да. Оформляя заказ в <b>@StarsPaymee_bot</b>, вместо своего username вы вводите <b>@username
      друга</b> — звёзды приходят прямо на его баланс Telegram, ему ничего делать не нужно. После
      подтверждения оплаты обычно <b>за 5 секунд</b>. Цена та же, что и для себя: переводом на карту{" "}
      <b>{STARS_PER_UNIT_UZS} сум</b>, через Click, Payme, Uzum или Paynet{" "}
      <b>{STARS_PER_UNIT_GATEWAY_UZS} сум</b> за звезду.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qachon", label: "Когда покупают другому человеку" },
          { href: "#qadamlar", label: "Пошагово" },
          { href: "#narx", label: "Цена — как для себя" },
          { href: "#u-nima-koradi", label: "Что видит получатель и что видите вы" },
          { href: "#tekshiruv", label: "Проверьте перед оплатой" },
          { href: "#xatolar", label: "Ошибки и почему их нельзя отменить" },
        ]}
      />

      <h2 id="qachon">Когда покупают другому человеку</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Подарок">
          День рождения или просто внимание: друг потратит Stars на что захочет — подарок, реакцию,
          покупку в боте.
        </InfoCard>
        <InfoCard emoji="💳" title="У человека нет карты">
          Школьник, родитель или близкий за границей: он отдаёт вам наличные или просто просит, вы
          платите в боте.
        </InfoCard>
        <InfoCard emoji="📣" title="Канал или команда">
          Админу или сотруднику нужны Stars для работы — один заказ, один username.
        </InfoCard>
        <InfoCard emoji="🤝" title="Выручить">
          Друг не смог оплатить внутри бота — вы покупаете ему нужное количество.
        </InfoCard>
      </InfoGrid>
      <p>
        От получателя нужно одно — его <b>@username</b>. Если его нет, сначала нужно задать:{" "}
        <Link href="/blog/telegram-stars-username-qanday-topiladi">где найти и как задать username</Link>.
      </p>

      <h2 id="qadamlar">Пошагово</h2>
      <Steps>
        <Step title="1. Возьмите username">
          Откройте профиль друга и скопируйте имя с @. Не набирайте вручную — одна неверная буква отправит
          звёзды другому человеку.
        </Step>
        <Step title="2. Откройте раздел Stars в боте">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Stars. Кнопку «Я» <b>не нажимайте</b> — она подставит ваш username.
        </Step>
        <Step title="3. Вставьте username и посмотрите карточку">
          Через 2 секунды бот найдёт профиль: появятся <b>имя, фото и @имя</b>. Убедитесь, что это тот
          человек. «Пользователь не найден!» — имя с ошибкой или username не задан.
        </Step>
        <Step title="4. Выберите количество">
          Готовый пакет (50, 100, 500, 1000…) или любое число от 50 до 10 000. Сумма видна сразу.
        </Step>
        <Step title="5. Выберите способ и оплатите">
          Перевод Uzcard/Humo, Click, Payme, Uzum или Paynet. При переводе на карту сумма должна быть{" "}
          <b>ровно как указано</b> — платёж распознаётся по сумме.
        </Step>
        <Step title="6. Дождитесь статуса «доставлено»">
          После подтверждения оплаты звёзды обычно за 5 секунд приходят на баланс друга. В{" "}
          <b>«Мои заказы»</b> в боте статус станет «доставлено».
        </Step>
      </Steps>
      <InlineCta text="Введите username друга — бот покажет профиль за 2 секунды." product={{ kind: "stars", amount: 100 }} />

      <h2 id="narx">Цена — как для себя</h2>
      <p>
        Наценки за покупку другому нет. Цена зависит только от <b>способа оплаты</b>: перевод на карту и
        оплата с баланса — {STARS_PER_UNIT_UZS} сум, онлайн-шлюзы (Click, Payme, Uzum, Paynet) —{" "}
        {STARS_PER_UNIT_GATEWAY_UZS} сум за звезду.
      </p>
      <PriceTable locale="ru" />
      <p>
        Все пакеты и способы оплаты — на <Link href="/stars">странице Telegram Stars</Link>; про ровно 1000
        штук — <Link href="/blog/1000-stars-olish-click-payme">отдельная статья</Link>.
      </p>

      <h2 id="u-nima-koradi">Что видит получатель и что видите вы</h2>
      <CompareTable
        headers={["", "Получатель", "Вы (покупатель)"]}
        rows={[
          [<strong key="a">Куда приходят Stars</strong>, "На его баланс Telegram: Настройки → My Stars", "На ваш баланс не приходят — заказ был ему"],
          [<strong key="b">Что нужно сделать</strong>, "Ничего — даже заходить в бота не нужно", "Оплатить ровно указанную сумму"],
          [<strong key="c">Где это видно</strong>, "Баланс и история транзакций", "«Мои заказы» в боте: дата, количество, статус"],
          [<strong key="d">Узнает ли, кто отправил</strong>, "Бот и StarsPaymee сообщений не шлют — сказать ему можете вы", "—"],
        ]}
      />
      <p>
        Доставку можно проверить с двух сторон: вы смотрите статус в боте, друг — свой баланс. Как он это
        делает — в статье <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.
      </p>

      <h2 id="tekshiruv">Проверьте перед оплатой</h2>
      <KeyFacts label="Список на 30 секунд">
        <li>
          <b>Имя и фото в карточке</b> — именно нужного человека.
        </li>
        <li>
          <b>Количество</b> — как договорились; добавить потом нельзя, только новым заказом.
        </li>
        <li>
          <b>Сумма</b> — совпадает с указанной для выбранного способа.
        </li>
        <li>
          <b>«Я» не нажата</b> — иначе звёзды придут вам.
        </li>
      </KeyFacts>

      <h2 id="xatolar">Ошибки и почему их нельзя отменить</h2>
      <Notice label="Важно">
        По правилам Telegram <b>доставленные Stars не возвращаются</b>. Если username был чужим и звёзды
        ушли другому человеку, забрать их нельзя — StarsPaymee возвращает деньги только при своей
        технической ошибке. Поэтому проверка карточки — главная защита.
      </Notice>
      <InfoGrid>
        <InfoCard emoji="🔤" title="Неверный username">
          Несуществующее имя бот не пропустит, а вот <b>верное имя другого человека</b> — пропустит.
          Смотрите на фото в карточке.
        </InfoCard>
        <InfoCard emoji="🚫" title="У него нет username">
          «Telegram username не найден» — другу нужно сначала задать имя в настройках, это минута.
        </InfoCard>
        <InfoCard emoji="⏱" title="Доставлено, а он не видит">
          Пусть перезапустит приложение и откроет Настройки → My Stars. Если через 10 минут пусто —
          порядок из статьи <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars не пришли</Link>.
        </InfoCard>
        <InfoCard emoji="🔐" title="Ничего не просите">
          От друга не нужны пароль, SMS-код или вход в аккаунт — только username.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "/stars", label: "Купить Telegram Stars", note: "пакеты, цены, способы оплаты" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "заказ и «Мои заказы»" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "если не доставлено — с номером заказа" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes. When ordering in <b>@StarsPaymee_bot</b>, you enter <b>your friend’s @username</b> instead of
      your own — the Stars land straight on their Telegram balance and they do not need to do anything.
      Usually <b>within 5 seconds</b> of the payment being confirmed. The price is the same as buying for
      yourself: <b>{STARS_PER_UNIT_UZS} som</b> per Star by card transfer, <b>{STARS_PER_UNIT_GATEWAY_UZS} som</b>{" "}
      through Click, Payme, Uzum or Paynet.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#qachon", label: "When people buy for someone else" },
          { href: "#qadamlar", label: "Step by step" },
          { href: "#narx", label: "The price — same as for yourself" },
          { href: "#u-nima-koradi", label: "What the recipient sees and what you see" },
          { href: "#tekshiruv", label: "Check before paying" },
          { href: "#xatolar", label: "Mistakes and why they cannot be undone" },
        ]}
      />

      <h2 id="qachon">When people buy for someone else</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="A gift">
          A birthday or just a kind gesture: your friend spends the Stars on whatever they like — a gift, a
          reaction, a purchase inside a bot.
        </InfoCard>
        <InfoCard emoji="💳" title="Someone without a card">
          A pupil, a parent or a relative abroad: they hand you cash or simply ask, and you pay in the
          bot.
        </InfoCard>
        <InfoCard emoji="📣" title="A channel or a team">
          An admin or colleague needs Stars for work — one order, one username.
        </InfoCard>
        <InfoCard emoji="🤝" title="Helping out">
          A friend could not pay inside a bot — you buy them the amount they need.
        </InfoCard>
      </InfoGrid>
      <p>
        The only thing you need from the recipient is their <b>@username</b>. If they have none, they set
        one first: <Link href="/blog/telegram-stars-username-qanday-topiladi">where to find and how to set a
        username</Link>.
      </p>

      <h2 id="qadamlar">Step by step</h2>
      <Steps>
        <Step title="1. Get the username">
          Open your friend’s profile and copy the name with @. Do not type it by hand — one wrong letter
          sends the Stars to someone else.
        </Step>
        <Step title="2. Open the Stars section in the bot">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Stars. Do <b>not</b> tap “Me” — that fills in your own username.
        </Step>
        <Step title="3. Paste the username and look at the card">
          Within 2 seconds the bot finds the profile: <b>name, photo and @name</b> appear. Make sure it is
          the right person. “User not found!” means a misspelt name or no username set.
        </Step>
        <Step title="4. Choose the amount">
          A ready pack (50, 100, 500, 1000…) or any number from 50 to 10,000. The total shows at once.
        </Step>
        <Step title="5. Choose a payment method and pay">
          Uzcard/Humo transfer, Click, Payme, Uzum or Paynet. For a card transfer the amount must be{" "}
          <b>exactly as shown</b> — the payment is recognised by its amount.
        </Step>
        <Step title="6. Wait for the “delivered” status">
          Once the payment is confirmed, the Stars usually reach your friend’s balance within 5 seconds. In{" "}
          <b>“My orders”</b> in the bot the status turns to “delivered”.
        </Step>
      </Steps>
      <InlineCta text="Enter your friend’s username — the bot shows the profile in 2 seconds." product={{ kind: "stars", amount: 100 }} />

      <h2 id="narx">The price — same as for yourself</h2>
      <p>
        There is no extra charge for buying for someone else. The price depends only on the{" "}
        <b>payment method</b>: card transfer and balance — {STARS_PER_UNIT_UZS} som; online gateways
        (Click, Payme, Uzum, Paynet) — {STARS_PER_UNIT_GATEWAY_UZS} som per Star.
      </p>
      <PriceTable locale="en" />
      <p>
        All packs and payment methods are on the <Link href="/stars">Telegram Stars page</Link>; exactly 1000
        Stars has <Link href="/blog/1000-stars-olish-click-payme">its own article</Link>.
      </p>

      <h2 id="u-nima-koradi">What the recipient sees and what you see</h2>
      <CompareTable
        headers={["", "Recipient", "You (the buyer)"]}
        rows={[
          [<strong key="a">Where the Stars go</strong>, "Their Telegram balance: Settings → My Stars", "Not to your balance — the order was for them"],
          [<strong key="b">What they must do</strong>, "Nothing — they need not even open the bot", "Pay exactly the amount shown"],
          [<strong key="c">Where it shows</strong>, "Balance and transaction history", "“My orders” in the bot: date, amount, status"],
          [<strong key="d">Do they know who sent it</strong>, "Neither the bot nor StarsPaymee messages them — telling them is up to you", "—"],
        ]}
      />
      <p>
        Delivery can be checked from both sides: you see the status in the bot, your friend sees their
        balance. How they do that is in <Link href="/blog/telegram-stars-balansini-tekshirish">checking your
        Stars balance</Link>.
      </p>

      <h2 id="tekshiruv">Check before paying</h2>
      <KeyFacts label="A 30-second list">
        <li>
          <b>Name and photo on the card</b> — the right person.
        </li>
        <li>
          <b>Amount</b> — as agreed; it cannot be topped up later, only with a new order.
        </li>
        <li>
          <b>Total</b> — matches what is shown for the chosen method.
        </li>
        <li>
          <b>“Me” not tapped</b> — or the Stars come to you.
        </li>
      </KeyFacts>

      <h2 id="xatolar">Mistakes and why they cannot be undone</h2>
      <Notice label="Important">
        Under Telegram’s rules <b>delivered Stars are not refundable</b>. If the username was someone
        else’s and the Stars went to them, they cannot be recovered — StarsPaymee refunds only for its own
        technical failures. That is why the card check is your main protection.
      </Notice>
      <InfoGrid>
        <InfoCard emoji="🔤" title="Wrong username">
          The bot blocks a name that does not exist, but it lets through the <b>correct name of another
          person</b>. Look at the photo on the card.
        </InfoCard>
        <InfoCard emoji="🚫" title="They have no username">
          “Telegram username not found” — your friend needs to set one in Settings first; it takes a
          minute.
        </InfoCard>
        <InfoCard emoji="⏱" title="Delivered, but they cannot see it">
          Ask them to restart the app and open Settings → My Stars. Still nothing after 10 minutes — follow{" "}
          <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars did not arrive</Link>.
        </InfoCard>
        <InfoCard emoji="🔐" title="Ask for nothing else">
          No password, SMS code or account login is needed from your friend — only the username.
        </InfoCard>
      </InfoGrid>

      <Sources
        label="Useful links"
        items={[
          { href: "/stars", label: "Buy Telegram Stars", note: "packs, prices, payment methods" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "ordering and “My orders”" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "if not delivered — with the order number" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Boshqa odamga Telegram Stars olib bersa bo‘ladimi?",
    answer:
      "Ha. Buyurtmada uning @username’ini yozasiz, yulduzlar to‘g‘ridan-to‘g‘ri uning balansiga tushadi. U hech narsa qilishi shart emas — botga kirishi ham.",
  },
  {
    question: "Narxi o‘zimga olgandagidan farq qiladimi?",
    answer: `Yo‘q. Narx faqat to‘lov usuliga bog‘liq: karta o‘tkazmasida ${STARS_PER_UNIT_UZS}, Click/Payme/Uzum/Paynet orqali ${STARS_PER_UNIT_GATEWAY_UZS} so‘m — bir dona.`,
  },
  {
    question: "Do‘stimda username yo‘q — nima qilamiz?",
    answer:
      "U Sozlamalar → profil → Username’dan nom qo‘yishi kerak (kamida 5 lotin belgi). Bir daqiqa oladi; keyin nomini sizga aytadi.",
  },
  {
    question: "Yulduzlar qachon tushadi?",
    answer: "To‘lov tasdiqlangach odatda 5 soniyada. Kartaga o‘tkazmada tasdiq SMS orqali keladi, shuning uchun summa aynan ko‘rsatilgandek bo‘lishi kerak.",
  },
  {
    question: "Do‘stim kim yuborganini biladimi?",
    answer: "Bot yoki StarsPaymee unga xabar yubormaydi — u balansida yulduzlarni ko‘radi. Kimdan ekanini o‘zingiz aytasiz.",
  },
  {
    question: "Username’ni xato yozib, boshqa odamga ketsa-chi?",
    answer:
      "Telegram qoidalariga ko‘ra yetkazilgan Stars qaytarilmaydi — ularni olib bo‘lmaydi. Shuning uchun to‘lovdan oldin bot ko‘rsatgan kartochkadagi ism va rasmni tekshiring.",
  },
  {
    question: "Bir buyurtmada bir necha odamga yuborsa bo‘ladimi?",
    answer: "Yo‘q — bitta buyurtma bitta username’ga. Har bir odam uchun alohida buyurtma berasiz.",
  },
  {
    question: "Do‘stimdan parol yoki kod so‘rash kerakmi?",
    answer: "Yo‘q. Username oqimida akkauntga kirish, parol va SMS-kod kerak emas — faqat @username.",
  },
];

const ruFaq = [
  {
    question: "Можно ли купить Telegram Stars другому человеку?",
    answer:
      "Да. В заказе вы вводите его @username, звёзды приходят прямо на его баланс. Ему ничего делать не нужно — даже заходить в бота.",
  },
  {
    question: "Цена отличается от покупки для себя?",
    answer: `Нет. Цена зависит только от способа оплаты: переводом на карту ${STARS_PER_UNIT_UZS}, через Click/Payme/Uzum/Paynet ${STARS_PER_UNIT_GATEWAY_UZS} сум за звезду.`,
  },
  {
    question: "У друга нет username — что делать?",
    answer:
      "Ему нужно задать имя в Настройки → профиль → Имя пользователя (не меньше 5 латинских символов). Это минута; потом он сообщит вам имя.",
  },
  {
    question: "Когда приходят звёзды?",
    answer: "Обычно за 5 секунд после подтверждения оплаты. При переводе на карту подтверждение приходит по SMS, поэтому сумма должна быть ровно как указано.",
  },
  {
    question: "Узнает ли друг, кто отправил?",
    answer: "Бот и StarsPaymee ему не пишут — он просто увидит звёзды на балансе. Кто отправил, скажете вы сами.",
  },
  {
    question: "А если ошибиться в username и звёзды уйдут другому?",
    answer:
      "По правилам Telegram доставленные Stars не возвращаются — забрать их нельзя. Поэтому перед оплатой проверьте имя и фото в карточке, которую показывает бот.",
  },
  {
    question: "Можно одним заказом отправить нескольким людям?",
    answer: "Нет — один заказ на один username. Для каждого человека оформляется отдельный заказ.",
  },
  {
    question: "Нужно ли спрашивать у друга пароль или код?",
    answer: "Нет. В покупке по username не нужны вход в аккаунт, пароль и SMS-код — только @username.",
  },
];

const enFaq = [
  {
    question: "Can I buy Telegram Stars for someone else?",
    answer:
      "Yes. You enter their @username in the order and the Stars go straight to their balance. They need to do nothing — not even open the bot.",
  },
  {
    question: "Is the price different from buying for myself?",
    answer: `No. The price depends only on the payment method: ${STARS_PER_UNIT_UZS} som per Star by card transfer, ${STARS_PER_UNIT_GATEWAY_UZS} som through Click/Payme/Uzum/Paynet.`,
  },
  {
    question: "My friend has no username — what then?",
    answer:
      "They set one under Settings → profile → Username (at least 5 Latin characters). It takes a minute; then they tell you the name.",
  },
  {
    question: "When do the Stars arrive?",
    answer: "Usually within 5 seconds of the payment being confirmed. A card transfer is confirmed by SMS, so the amount must be exactly as shown.",
  },
  {
    question: "Will my friend know who sent them?",
    answer: "Neither the bot nor StarsPaymee messages them — they simply see the Stars on their balance. Telling them is up to you.",
  },
  {
    question: "What if I misspell the username and the Stars go to someone else?",
    answer:
      "Under Telegram’s rules delivered Stars are not refundable — they cannot be recovered. So check the name and photo on the card the bot shows before you pay.",
  },
  {
    question: "Can one order go to several people?",
    answer: "No — one order, one username. Place a separate order for each person.",
  },
  {
    question: "Do I need my friend’s password or a code?",
    answer: "No. The username flow needs no account login, password or SMS code — only the @username.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  keywords: [
    "boshqa odamga stars olib berish",
    "do‘stga telegram stars sovg‘a qilish",
    "telegram stars sovg‘a qilish",
    "stars yuborish do‘stga",
    "boshqa akkauntga stars olish",
    "как подарить звёзды в телеграм другу",
    "купить stars другому человеку",
    "buy telegram stars for a friend",
    "gift telegram stars",
  ],
  howToSteps: [
    { name: "Username’ni oling", text: "Do‘stingiz profilidagi @nomni nusxalang." },
    { name: "Botda Stars bo‘limini oching", text: "@StarsPaymee_bot → Stars; «O‘zim»ni bosmang." },
    { name: "Username’ni joylashtiring", text: "2 soniyada chiqqan kartochkadagi ism va rasmni tekshiring." },
    { name: "Miqdor va to‘lov usulini tanlang", text: "Karta o‘tkazmasi, Click, Payme, Uzum yoki Paynet." },
    { name: "To‘lang va holatni kuting", text: "«Buyurtmalarim»da «yetkazildi» — yulduzlar do‘stingiz balansida." },
  ],
  locales: {
    uz: {
      title: "Boshqa odamga Telegram Stars sotib olish: do‘stga yulduz qanday olib beriladi",
      excerpt:
        "Do‘stingiz yoki yaqiningizga Stars olib bermoqchimisiz? Uning username’i, qadamlar, narx (o‘zingizga olgandagidek), u nima ko‘radi va qaysi xatoni qaytarib bo‘lmaydi.",
      metaTitle: "Boshqa odamga Telegram Stars sotib olish",
      metaDescription:
        "Do‘stga Telegram Stars olib berish: buyurtmada uning @username’ini yozasiz, yulduzlar 5 soniyada uning balansiga tushadi. Narx o‘zingizga olgandagidek — 220 yoki 240 so‘m.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Do‘stingizga Stars olib bering",
      ctaBody: "Uning username’ini yozing, kartochkani tekshiring va qulay usulda to‘lang — yulduzlar 5 soniyada tushadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Как купить Telegram Stars другому человеку: звёзды в подарок другу",
      excerpt:
        "Хотите купить Stars другу или близкому? Его username, шаги, цена (как для себя), что он увидит и какую ошибку нельзя отменить.",
      metaTitle: "Купить Telegram Stars другому человеку",
      metaDescription:
        "Stars в подарок другу: в заказе вводите его @username, звёзды приходят на его баланс за 5 секунд. Цена как для себя — 220 или 240 сум за звезду.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите Stars другу",
      ctaBody: "Введите его username, проверьте карточку и оплатите удобным способом — звёзды придут за 5 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Stars for someone else: Stars as a gift for a friend",
      excerpt:
        "Want to buy Stars for a friend or relative? Their username, the steps, the price (same as for yourself), what they see and which mistake cannot be undone.",
      metaTitle: "Buy Telegram Stars for someone else",
      metaDescription:
        "Stars as a gift for a friend: enter their @username in the order and the Stars reach their balance in 5 seconds. Same price as for yourself — 220 or 240 som per Star.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Stars for a friend",
      ctaBody: "Enter their username, check the card and pay the way that suits you — the Stars arrive in 5 seconds.",
      faq: enFaq,
    },
  },
};
