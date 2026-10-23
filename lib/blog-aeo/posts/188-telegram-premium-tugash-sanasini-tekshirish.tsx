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

const SLUG = "telegram-premium-tugash-sanasini-tekshirish";

/**
 * Telegram Premium qachon tugashini qanday bilish va qachon uzaytirish.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-15): «premium muddatini tekshirish / qachon
 * tugaydi» — alohida niyat. 169-maqola — tugagandan KEYIN nima bo'ladi,
 * 139 — nega kerak (bitta «uzaytirish» bo'limi bilan), 167 — bor odamga yana
 * sovg'a. Bu sahifa faqat sanani aniqlash va uzaytirish vaqtini yoritadi,
 * oqibatlar va sovg'a mantiqini takrorlamaydi — havola beradi.
 *
 * Faktlar: StarsPaymee orqali olingan Premium'da avtoto'lov yo'q (169, 139
 * bilan bir xil da'vo); botdagi «Buyurtmalarim» sana/vaqt/holat ko'rsatadi;
 * muddatlar PREMIUM_PLANS dan (1 oylik ataylab ko'rsatilmaydi — egasi hal
 * qilmagan ochiq savol); amaldagi Premium ustiga muddat qo'shilishi usulga
 * bog'liq (167). Telegram tomoni: Sozlamalar → Telegram Premium.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");

/** Muddat bo'yicha karta narxi — konstantadan; 1 oylik ko'rsatilmaydi. */
function PlanTable({ locale }: { locale: Locale }) {
  const copy = {
    uz: { headers: ["Muddat", "Karta o‘tkazmasi · balans"], mo: "oy", unit: "so‘m" },
    ru: { headers: ["Срок", "Перевод на карту · баланс"], mo: "мес", unit: "сум" },
    en: { headers: ["Term", "Card transfer · balance"], mo: "months", unit: "som" },
  }[locale];
  return (
    <CompareTable
      headers={copy.headers}
      rows={PREMIUM_PLANS.filter((p) => p.months !== 1).map((p) => [
        <strong key="m">{`${p.months} ${copy.mo}`}</strong>,
        `${fmt(p.priceUzs, locale)} ${copy.unit}`,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram’da <b>Sozlamalar → Telegram Premium</b> bo‘limi obuna holatini ko‘rsatadi. StarsPaymee orqali
      olingan Premium’da aniq sana oddiy hisob: <b>@StarsPaymee_bot</b> dagi «Buyurtmalarim»da yetkazilgan
      sana + tanlangan muddat (3, 6 yoki 12 oy). <b>Avtomatik yangilanish yo‘q</b> — muddat tugaganda hech
      narsa yechilmaydi, uzaytirish yangi buyurtma bilan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#telegramda", label: "Telegram’da obuna holatini ko‘rish" },
          { href: "#hisob", label: "Tugash sanasini botdagi buyurtmadan hisoblash" },
          { href: "#avto", label: "Tugash sanasi va «keyingi to‘lov» — farqi" },
          { href: "#tugasa", label: "Muddat tugasa nima bo‘ladi" },
          { href: "#qachon", label: "Qachon uzaytirish kerak" },
          { href: "#uzaytirish", label: "Uzaytirish: qadamlar va narx" },
        ]}
      />

      <h2 id="telegramda">Telegram’da obuna holatini ko‘rish</h2>
      <Steps>
        <Step title="1. Sozlamalar → Telegram Premium">
          Premium faol bo‘lsa, bu bo‘lim obunangiz holatini ko‘rsatadi; profil nomingiz yonida ham Premium
          yulduzchasi turadi.
        </Step>
        <Step title="2. Telegram’ning xabarlari">
          Premium faollashganda Telegram xizmat xabari keladi — unda muddat yoziladi. Muddat tugashiga yaqin
          Telegram odatda alohida eslatma yuboradi.
        </Step>
        <Step title="3. Aniq kun kerak bo‘lsa">
          Eng ishonchli yo‘l — quyidagi hisob: buyurtma sanasi + muddat.
        </Step>
      </Steps>

      <h2 id="hisob">Tugash sanasini botdagi buyurtmadan hisoblash</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>«Buyurtmalarim»</b> → Premium buyurtmasi: unda sana, vaqt va holat turadi. «Yetkazildi» sanasiga
        muddatni qo‘shsangiz — tugash kuni chiqadi:
      </p>
      <CompareTable
        headers={["Yetkazilgan sana", "Muddat", "Tugaydi"]}
        rows={[
          [<strong key="a">15.10.2026</strong>, "3 oy", "15.01.2027"],
          [<strong key="b">15.10.2026</strong>, "6 oy", "15.04.2027"],
          [<strong key="c">15.10.2026</strong>, "12 oy", "15.10.2027"],
        ]}
      />
      <Notice label="Bitta istisno">
        Buyurtma paytida Premium allaqachon faol bo‘lsa, StarsPaymee buyurtmani ochmaydi — yangi muddat eskisining
        ustiga qo‘shilmaydi, joriy obuna tugagach olinadi. Batafsil —{" "}
        <Link href="/blog/telegram-premium-muddatini-uzaytirish">Premium muddatini uzaytirish mumkinmi</Link>.
      </Notice>

      <h2 id="avto">Tugash sanasi va «keyingi to‘lov» — farqi</h2>
      <CompareTable
        headers={["", "StarsPaymee orqali", "App Store / Google Play obunasi"]}
        rows={[
          [<strong key="a">Avtomatik yangilanish</strong>, "Yo‘q — karta ulanmaydi", "Ha, o‘chirmaguncha"],
          [<strong key="b">Muddat tugaganda</strong>, "Hech narsa yechilmaydi, imtiyozlar to‘xtaydi", "Keyingi to‘lov sanasida yana yechiladi"],
          [<strong key="c">Nimani ko‘rasiz</strong>, "Tugash sanasini (buyurtma + muddat)", "«Keyingi to‘lov» sanasini"],
          [<strong key="d">Uzaytirish</strong>, "Yangi buyurtma", "Do‘kon sozlamalarida"],
        ]}
      />
      <p>
        Ya’ni StarsPaymee orqali olingan Premium’da «bekor qilish» degan narsa yo‘q — muddat shunchaki
        o‘z vaqtida tugaydi. Do‘kon obunasini o‘chirish kerak bo‘lsa —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">avtoto‘lovni o‘chirish</Link> qo‘llanmasi.
      </p>

      <h2 id="tugasa">Muddat tugasa nima bo‘ladi</h2>
      <p>
        Akkaunt, chatlar va avval yuborilgan fayllar joyida qoladi; faqat Premium imtiyozlari — katta fayl,
        kengaytirilgan limitlar, premium emoji — to‘xtaydi. Nima aynan o‘zgaradi, nima o‘zgarmaydi —{" "}
        <Link href="/blog/telegram-premium-tugasa-nima-boladi">alohida, jadval bilan</Link>.
      </p>

      <h2 id="qachon">Qachon uzaytirish kerak</h2>
      <InfoGrid>
        <InfoCard emoji="📅" title="Eng oddiy yo‘l">
          Muddat tugagan kuni yoki undan keyin yangi buyurtma bering — faollashuv bir necha soniya, uzilish
          deyarli sezilmaydi.
        </InfoCard>
        <InfoCard emoji="⏰" title="Oldinroq olsangiz">
          Oldindan olib bo‘lmaydi: Premium faol ekan, bot buyurtmani ochmaydi. Tugagan kuni buyurtma bering —
          faollashuv bir necha soniya, uzilish deyarli yo‘q.
        </InfoCard>
        <InfoCard emoji="🔁" title="Uzoq muddat — oyiga arzon">
          12 oylik oyiga eng arzon tushadi; muddatlar va narxlar quyida.
        </InfoCard>
        <InfoCard emoji="🎁" title="Boshqa odamga">
          Uzaytirish ham, birinchi obuna ham username orqali beriladi — do‘stingizga ham shu tartibda.
        </InfoCard>
      </InfoGrid>

      <h2 id="uzaytirish">Uzaytirish: qadamlar va narx</h2>
      <Steps>
        <Step title="1. Botda Premium bo‘limini oching">
          @StarsPaymee_bot → Premium.
        </Step>
        <Step title="2. Muddatni tanlang">
          3, 6 yoki 12 oy. Summa darhol ko‘rinadi.
        </Step>
        <Step title="3. Username">
          O‘zingizga — «O‘zim» tugmasi; boshqa odamga — uning @username’i. Parol yoki kod kerak emas.
        </Step>
        <Step title="4. To‘lang">
          Uzcard/Humo o‘tkazmasi, Click, Payme, Uzum yoki Paynet — yakuniy summa to‘lovdan oldin botda.
        </Step>
        <Step title="5. Faollashuvni kuting">
          To‘lov tasdiqlangach Premium odatda bir necha soniyada yoqiladi; «Buyurtmalarim»da «yetkazildi».
        </Step>
      </Steps>
      <PlanTable locale="uz" />
      <p>
        Jadvalda karta o‘tkazmasi va balansdan to‘lov narxi; Click, Payme, Uzum yoki Paynet tanlansa,
        yakuniy summa botda ko‘rsatiladi. Barcha muddatlar —{" "}
        <Link href="/premium">Telegram Premium sahifasida</Link>.
      </p>
      <InlineCta text="Premium’ni uzaytiring — 3, 6 yoki 12 oy, username bilan, bir necha soniyada." product={{ kind: "premium", months: 3 }} />
      <KeyFacts label="Eslab qoling">
        <li>
          <b>Tugash sanasi</b> = yetkazilgan sana + muddat.
        </li>
        <li>
          <b>Avtoto‘lov yo‘q</b> — kutilmagan yechim bo‘lmaydi.
        </li>
        <li>
          <b>Uzaytirish</b> — yangi buyurtma, faqat joriy obuna tugagach; oldindan olib bo‘lmaydi.
        </li>
      </KeyFacts>

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "«Buyurtmalarim» — sana va holat" },
          { href: "/premium", label: "Telegram Premium sotib olish", note: "muddatlar va narxlar" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      В Telegram раздел <b>Настройки → Telegram Premium</b> показывает состояние подписки. Для Premium,
      купленного через StarsPaymee, точная дата считается просто: дата доставки в «Моих заказах»{" "}
      <b>@StarsPaymee_bot</b> + выбранный срок (3, 6 или 12 месяцев). <b>Автопродления нет</b> — по
      окончании срока ничего не списывается, продление оформляется новым заказом.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#telegramda", label: "Как увидеть состояние подписки в Telegram" },
          { href: "#hisob", label: "Считаем дату окончания по заказу в боте" },
          { href: "#avto", label: "Дата окончания и «следующий платёж» — разница" },
          { href: "#tugasa", label: "Что будет, когда срок закончится" },
          { href: "#qachon", label: "Когда продлевать" },
          { href: "#uzaytirish", label: "Продление: шаги и цена" },
        ]}
      />

      <h2 id="telegramda">Как увидеть состояние подписки в Telegram</h2>
      <Steps>
        <Step title="1. Настройки → Telegram Premium">
          Если Premium активен, раздел показывает состояние подписки; рядом с именем профиля стоит звёздочка
          Premium.
        </Step>
        <Step title="2. Сообщения от Telegram">
          При активации приходит служебное сообщение Telegram — в нём указан срок. Незадолго до окончания
          Telegram обычно присылает отдельное напоминание.
        </Step>
        <Step title="3. Если нужен точный день">
          Самый надёжный способ — расчёт ниже: дата заказа + срок.
        </Step>
      </Steps>

      <h2 id="hisob">Считаем дату окончания по заказу в боте</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>«Мои заказы»</b> → заказ Premium: там дата, время и статус. Прибавьте к дате «доставлено» срок —
        получите день окончания:
      </p>
      <CompareTable
        headers={["Дата доставки", "Срок", "Заканчивается"]}
        rows={[
          [<strong key="a">15.10.2026</strong>, "3 мес", "15.01.2027"],
          [<strong key="b">15.10.2026</strong>, "6 мес", "15.04.2027"],
          [<strong key="c">15.10.2026</strong>, "12 мес", "15.10.2027"],
        ]}
      />
      <Notice label="Одно исключение">
        Если в момент заказа Premium уже активен, StarsPaymee заказ не откроет — новый срок к старому не прибавляется,
        его покупают после окончания текущей подписки. Подробнее —{" "}
        <Link href="/blog/telegram-premium-muddatini-uzaytirish">можно ли продлить Premium заранее</Link>.
      </Notice>

      <h2 id="avto">Дата окончания и «следующий платёж» — разница</h2>
      <CompareTable
        headers={["", "Через StarsPaymee", "Подписка App Store / Google Play"]}
        rows={[
          [<strong key="a">Автопродление</strong>, "Нет — карта не привязывается", "Да, пока не отключите"],
          [<strong key="b">Когда срок закончится</strong>, "Ничего не списывается, преимущества отключаются", "В дату следующего платежа спишется снова"],
          [<strong key="c">Что вы видите</strong>, "Дату окончания (заказ + срок)", "Дату «следующего платежа»"],
          [<strong key="d">Продление</strong>, "Новый заказ", "В настройках магазина"],
        ]}
      />
      <p>
        То есть у Premium через StarsPaymee нет «отмены» — срок просто заканчивается в свой день. Если
        нужно выключить подписку магазина —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">инструкция по отключению автоплатежа</Link>.
      </p>

      <h2 id="tugasa">Что будет, когда срок закончится</h2>
      <p>
        Аккаунт, чаты и ранее отправленные файлы остаются; отключаются только преимущества Premium —
        большие файлы, расширенные лимиты, премиум-эмодзи. Что именно меняется, а что нет —{" "}
        <Link href="/blog/telegram-premium-tugasa-nima-boladi">отдельно, с таблицей</Link>.
      </p>

      <h2 id="qachon">Когда продлевать</h2>
      <InfoGrid>
        <InfoCard emoji="📅" title="Самый простой путь">
          Оформите новый заказ в день окончания или после — активация занимает секунды, перерыв почти
          незаметен.
        </InfoCard>
        <InfoCard emoji="⏰" title="Если заранее">
          Заранее купить нельзя: пока Premium активен, бот не откроет заказ. Оформите заказ в день окончания —
          активация за несколько секунд, перерыва почти нет.
        </InfoCard>
        <InfoCard emoji="🔁" title="Длинный срок — дешевле в месяц">
          12 месяцев выходят дешевле всего в пересчёте на месяц; сроки и цены ниже.
        </InfoCard>
        <InfoCard emoji="🎁" title="Другому человеку">
          И продление, и первая подписка оформляются по username — другу тем же способом.
        </InfoCard>
      </InfoGrid>

      <h2 id="uzaytirish">Продление: шаги и цена</h2>
      <Steps>
        <Step title="1. Откройте раздел Premium в боте">
          @StarsPaymee_bot → Premium.
        </Step>
        <Step title="2. Выберите срок">
          3, 6 или 12 месяцев. Сумма видна сразу.
        </Step>
        <Step title="3. Username">
          Себе — кнопка «Я»; другому — его @username. Пароль и код не нужны.
        </Step>
        <Step title="4. Оплатите">
          Перевод Uzcard/Humo, Click, Payme, Uzum или Paynet — итоговая сумма показана в боте до оплаты.
        </Step>
        <Step title="5. Дождитесь активации">
          После подтверждения оплаты Premium обычно включается за несколько секунд; в «Моих заказах» —
          «доставлено».
        </Step>
      </Steps>
      <PlanTable locale="ru" />
      <p>
        В таблице цена при переводе на карту и оплате с баланса; при выборе Click, Payme, Uzum или Paynet
        итоговая сумма показывается в боте. Все сроки — на{" "}
        <Link href="/premium">странице Telegram Premium</Link>.
      </p>
      <InlineCta text="Продлите Premium — 3, 6 или 12 месяцев, по username, за несколько секунд." product={{ kind: "premium", months: 3 }} />
      <KeyFacts label="Запомните">
        <li>
          <b>Дата окончания</b> = дата доставки + срок.
        </li>
        <li>
          <b>Автоплатежа нет</b> — неожиданных списаний не будет.
        </li>
        <li>
          <b>Продление</b> — новый заказ, только после окончания текущей подписки; заранее купить нельзя.
        </li>
      </KeyFacts>

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "«Мои заказы» — дата и статус" },
          { href: "/premium", label: "Купить Telegram Premium", note: "сроки и цены" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      In Telegram, <b>Settings → Telegram Premium</b> shows the state of your subscription. For Premium bought
      through StarsPaymee the exact date is simple arithmetic: the delivery date in “My orders” in{" "}
      <b>@StarsPaymee_bot</b> + the chosen term (3, 6 or 12 months). <b>There is no auto-renewal</b> —
      nothing is charged when the term ends, and you extend with a new order.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#telegramda", label: "Seeing the subscription status in Telegram" },
          { href: "#hisob", label: "Working out the end date from the bot order" },
          { href: "#avto", label: "End date vs “next payment” — the difference" },
          { href: "#tugasa", label: "What happens when the term ends" },
          { href: "#qachon", label: "When to extend" },
          { href: "#uzaytirish", label: "Extending: steps and price" },
        ]}
      />

      <h2 id="telegramda">Seeing the subscription status in Telegram</h2>
      <Steps>
        <Step title="1. Settings → Telegram Premium">
          If Premium is active, this section shows your subscription status; the Premium star also sits next
          to your profile name.
        </Step>
        <Step title="2. Messages from Telegram">
          When Premium activates, a Telegram service message arrives with the term in it. Shortly before the
          end, Telegram usually sends a separate reminder.
        </Step>
        <Step title="3. If you need the exact day">
          The most reliable way is the calculation below: order date + term.
        </Step>
      </Steps>

      <h2 id="hisob">Working out the end date from the bot order</h2>
      <p>
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>{" "}
        → <b>“My orders”</b> → the Premium order: it shows the date, time and status. Add the term to the
        “delivered” date and you have the end day:
      </p>
      <CompareTable
        headers={["Delivery date", "Term", "Ends"]}
        rows={[
          [<strong key="a">15.10.2026</strong>, "3 months", "15.01.2027"],
          [<strong key="b">15.10.2026</strong>, "6 months", "15.04.2027"],
          [<strong key="c">15.10.2026</strong>, "12 months", "15.10.2027"],
        ]}
      />
      <Notice label="One exception">
        If Premium is already active when you order, StarsPaymee does not open the order — the new term is not added on
        top of the old one; it is bought once the current subscription ends. Details —{" "}
        <Link href="/blog/telegram-premium-muddatini-uzaytirish">can Premium be extended early</Link>.
      </Notice>

      <h2 id="avto">End date vs “next payment” — the difference</h2>
      <CompareTable
        headers={["", "Through StarsPaymee", "App Store / Google Play subscription"]}
        rows={[
          [<strong key="a">Auto-renewal</strong>, "No — no card is linked", "Yes, until you turn it off"],
          [<strong key="b">When the term ends</strong>, "Nothing is charged; the perks stop", "You are charged again on the next payment date"],
          [<strong key="c">What you see</strong>, "The end date (order + term)", "The “next payment” date"],
          [<strong key="d">Extending</strong>, "A new order", "In the store settings"],
        ]}
      />
      <p>
        So Premium through StarsPaymee has nothing to “cancel” — the term simply ends on its day. If you need
        to switch off a store subscription —{" "}
        <Link href="/blog/telegram-premium-avtotolovni-ochirish">the guide to turning off auto-payment</Link>.
      </p>

      <h2 id="tugasa">What happens when the term ends</h2>
      <p>
        Your account, chats and files sent earlier stay; only the Premium perks — large files, extended
        limits, premium emoji — stop. Exactly what changes and what does not —{" "}
        <Link href="/blog/telegram-premium-tugasa-nima-boladi">in a separate article, with a table</Link>.
      </p>

      <h2 id="qachon">When to extend</h2>
      <InfoGrid>
        <InfoCard emoji="📅" title="The simplest way">
          Place a new order on the end day or after — activation takes seconds, so the gap is barely
          noticeable.
        </InfoCard>
        <InfoCard emoji="⏰" title="If you buy early">
          You cannot buy early: while Premium is active, the bot will not open the order. Order on the end day —
          activation takes seconds, so there is almost no gap.
        </InfoCard>
        <InfoCard emoji="🔁" title="A longer term is cheaper per month">
          12 months costs the least per month; terms and prices are below.
        </InfoCard>
        <InfoCard emoji="🎁" title="For someone else">
          Both an extension and a first subscription go by username — the same way for a friend.
        </InfoCard>
      </InfoGrid>

      <h2 id="uzaytirish">Extending: steps and price</h2>
      <Steps>
        <Step title="1. Open the Premium section in the bot">
          @StarsPaymee_bot → Premium.
        </Step>
        <Step title="2. Choose the term">
          3, 6 or 12 months. The total shows at once.
        </Step>
        <Step title="3. Username">
          For yourself — the “Me” button; for someone else — their @username. No password or code.
        </Step>
        <Step title="4. Pay">
          Uzcard/Humo transfer, Click, Payme, Uzum or Paynet — the final amount is shown in the bot before
          you pay.
        </Step>
        <Step title="5. Wait for activation">
          Once the payment is confirmed, Premium usually switches on within seconds; “My orders” shows
          “delivered”.
        </Step>
      </Steps>
      <PlanTable locale="en" />
      <p>
        The table shows the card-transfer and balance price; if you choose Click, Payme, Uzum or Paynet, the
        final amount is shown in the bot. All terms are on the{" "}
        <Link href="/premium">Telegram Premium page</Link>.
      </p>
      <InlineCta text="Extend Premium — 3, 6 or 12 months, by username, within seconds." product={{ kind: "premium", months: 3 }} />
      <KeyFacts label="Remember">
        <li>
          <b>End date</b> = delivery date + term.
        </li>
        <li>
          <b>No auto-payment</b> — no surprise charges.
        </li>
        <li>
          <b>Extending</b> is a new order, only after the current subscription ends; it cannot be bought early.
        </li>
      </KeyFacts>

      <Sources
        label="Useful links"
        items={[
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "“My orders” — date and status" },
          { href: "/premium", label: "Buy Telegram Premium", note: "terms and prices" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Premium qachon tugashini qayerdan bilaman?",
    answer:
      "Sozlamalar → Telegram Premium bo‘limida obuna holati ko‘rinadi. Aniq kun — botdagi «Buyurtmalarim»dagi yetkazilgan sana + muddat: masalan, 15.10.2026 da olingan 3 oylik 15.01.2027 da tugaydi.",
  },
  {
    question: "StarsPaymee orqali olingan Premium avtomatik uzayadimi?",
    answer: "Yo‘q. Karta ulanmaydi, muddat tugaganda hech narsa yechilmaydi — Premium imtiyozlari shunchaki to‘xtaydi. Uzaytirish yangi buyurtma bilan.",
  },
  {
    question: "Tugash sanasi bilan «keyingi to‘lov» sanasi bir xilmi?",
    answer:
      "Yo‘q. «Keyingi to‘lov» faqat App Store yoki Google Play obunasida bo‘ladi — o‘sha kuni yana pul yechiladi. StarsPaymee’da faqat tugash sanasi bor.",
  },
  {
    question: "Muddat tugashidan oldin uzaytirsam, kunlar qo‘shiladimi?",
    answer:
      "Yo‘q — StarsPaymee’da faol Premium ustiga kunlar qo‘shilmaydi, bot buyurtmani ochmaydi. Tugagan kuni yoki undan keyin yangi buyurtma bering. Batafsil — «Premium muddatini uzaytirish mumkinmi» maqolasida.",
  },
  {
    question: "Premium tugasa, chatlar yoki fayllar yo‘qoladimi?",
    answer: "Yo‘q. Akkaunt, chatlar va avval yuborilgan fayllar qoladi; faqat Premium imtiyozlari — katta fayl, kengaytirilgan limitlar, premium emoji — to‘xtaydi.",
  },
  {
    question: "Uzaytirish qancha turadi?",
    answer: `Karta o‘tkazmasida ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "uz")} (3 oy), ${fmt(PREMIUM_PLANS.find((p) => p.months === 6)?.priceUzs ?? 0, "uz")} (6 oy), ${fmt(PREMIUM_PLANS.find((p) => p.months === 12)?.priceUzs ?? 0, "uz")} so‘m (12 oy). Click, Payme, Uzum yoki Paynet orqali yakuniy summa botda ko‘rsatiladi.`,
  },
  {
    question: "Uzaytirish uchun parol kerakmi?",
    answer: "Yo‘q. Premium username orqali beriladi — akkauntga kirish, parol va SMS-kod so‘ralmaydi.",
  },
];

const ruFaq = [
  {
    question: "Где узнать, когда закончится Telegram Premium?",
    answer:
      "В Настройки → Telegram Premium видно состояние подписки. Точный день — дата доставки в «Моих заказах» бота + срок: например, 3 месяца, купленные 15.10.2026, заканчиваются 15.01.2027.",
  },
  {
    question: "Premium через StarsPaymee продлевается автоматически?",
    answer: "Нет. Карта не привязывается, по окончании срока ничего не списывается — преимущества просто отключаются. Продление — новым заказом.",
  },
  {
    question: "Дата окончания и «следующий платёж» — одно и то же?",
    answer:
      "Нет. «Следующий платёж» бывает только у подписки App Store или Google Play — в этот день спишут снова. У StarsPaymee есть только дата окончания.",
  },
  {
    question: "Если продлить до окончания, дни прибавятся?",
    answer:
      "Нет — в StarsPaymee дни поверх активного Premium не добавляются, бот не открывает заказ. Оформите новый заказ в день окончания или после. Подробнее — в статье «Можно ли продлить Telegram Premium заранее».",
  },
  {
    question: "Пропадут ли чаты или файлы, когда Premium закончится?",
    answer: "Нет. Аккаунт, чаты и ранее отправленные файлы остаются; отключаются только преимущества Premium — большие файлы, расширенные лимиты, премиум-эмодзи.",
  },
  {
    question: "Сколько стоит продление?",
    answer: `Переводом на карту: ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "ru")} (3 мес), ${fmt(PREMIUM_PLANS.find((p) => p.months === 6)?.priceUzs ?? 0, "ru")} (6 мес), ${fmt(PREMIUM_PLANS.find((p) => p.months === 12)?.priceUzs ?? 0, "ru")} сум (12 мес). Через Click, Payme, Uzum или Paynet итоговая сумма показывается в боте.`,
  },
  {
    question: "Нужен ли пароль для продления?",
    answer: "Нет. Premium оформляется по username — вход в аккаунт, пароль и SMS-код не запрашиваются.",
  },
];

const enFaq = [
  {
    question: "Where do I find out when Telegram Premium ends?",
    answer:
      "Settings → Telegram Premium shows the subscription status. The exact day is the delivery date in the bot’s “My orders” + the term: for example, 3 months bought on 15.10.2026 end on 15.01.2027.",
  },
  {
    question: "Does Premium through StarsPaymee renew automatically?",
    answer: "No. No card is linked and nothing is charged when the term ends — the perks simply stop. You extend with a new order.",
  },
  {
    question: "Are the end date and the “next payment” date the same?",
    answer:
      "No. A “next payment” only exists for an App Store or Google Play subscription — you are charged again on that day. With StarsPaymee there is only an end date.",
  },
  {
    question: "If I extend before the end, are the days added?",
    answer:
      "No — at StarsPaymee days are not added on top of active Premium; the bot does not open the order. Place a new order on the end day or after. Details are in “Can Telegram Premium be extended early”.",
  },
  {
    question: "Will chats or files disappear when Premium ends?",
    answer: "No. Your account, chats and files sent earlier stay; only the Premium perks — large files, extended limits, premium emoji — stop.",
  },
  {
    question: "What does extending cost?",
    answer: `By card transfer: ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "en")} (3 months), ${fmt(PREMIUM_PLANS.find((p) => p.months === 6)?.priceUzs ?? 0, "en")} (6 months), ${fmt(PREMIUM_PLANS.find((p) => p.months === 12)?.priceUzs ?? 0, "en")} som (12 months). Through Click, Payme, Uzum or Paynet the final amount is shown in the bot.`,
  },
  {
    question: "Do I need a password to extend?",
    answer: "No. Premium is issued by username — no account login, password or SMS code is asked for.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-10-15",
  dateModified: "2026-10-23",
  keywords: [
    "telegram premium qachon tugaydi",
    "premium muddatini tekshirish",
    "telegram premium tugash sanasi",
    "premium obuna holati",
    "telegram premium uzaytirish",
    "как узнать срок действия telegram premium",
    "когда заканчивается telegram premium",
    "telegram premium expiry date",
  ],
  howToSteps: [
    { name: "Sozlamalarni oching", text: "Telegram → Sozlamalar → Telegram Premium — obuna holati." },
    { name: "Buyurtma sanasini toping", text: "@StarsPaymee_bot → «Buyurtmalarim» → Premium buyurtmasining yetkazilgan sanasi." },
    { name: "Muddatni qo‘shing", text: "Sana + 3, 6 yoki 12 oy = tugash kuni." },
    { name: "Uzaytiring", text: "Tugagan kuni yoki undan keyin botda yangi muddat tanlang — username bilan." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium qachon tugashini qanday bilish mumkin va qachon uzaytirish kerak",
      excerpt:
        "Obuna holatini Telegram’da ko‘rish, aniq tugash sanasini botdagi buyurtmadan hisoblash, avtoto‘lov yo‘qligi va uzaytirishning eng oddiy vaqti.",
      metaTitle: "Telegram Premium qachon tugaydi — tekshirish",
      metaDescription:
        "Premium muddati: Sozlamalar → Telegram Premium’da holat, aniq sana — botdagi yetkazilgan sana + 3/6/12 oy. Avtoto‘lov yo‘q; uzaytirish yangi buyurtma bilan, username orqali.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni uzaytiring",
      ctaBody: "3, 6 yoki 12 oyni tanlang, username’ni yozing va to‘lang — Premium bir necha soniyada yoqiladi.",
      faq: uzFaq,
    },
    ru: {
      title: "Как узнать, когда закончится Telegram Premium, и когда его продлевать",
      excerpt:
        "Как увидеть состояние подписки в Telegram, посчитать точную дату окончания по заказу в боте, почему нет автоплатежа и когда проще всего продлить.",
      metaTitle: "Когда заканчивается Telegram Premium — проверка",
      metaDescription:
        "Срок Premium: статус в Настройки → Telegram Premium, точная дата — дата доставки в боте + 3/6/12 месяцев. Автоплатежа нет; продление новым заказом по username.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Продлите Premium",
      ctaBody: "Выберите 3, 6 или 12 месяцев, введите username и оплатите — Premium включится за несколько секунд.",
      faq: ruFaq,
    },
    en: {
      title: "How to find out when Telegram Premium ends and when to extend it",
      excerpt:
        "How to see the subscription status in Telegram, work out the exact end date from the bot order, why there is no auto-payment and the simplest time to extend.",
      metaTitle: "When does Telegram Premium end — how to check",
      metaDescription:
        "Premium term: status under Settings → Telegram Premium, exact date = delivery date in the bot + 3/6/12 months. No auto-payment; extend with a new order by username.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Extend Premium",
      ctaBody: "Choose 3, 6 or 12 months, enter the username and pay — Premium switches on within seconds.",
      faq: enFaq,
    },
  },
};
