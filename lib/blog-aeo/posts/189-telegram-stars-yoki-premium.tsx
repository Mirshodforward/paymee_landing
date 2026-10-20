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

const SLUG = "telegram-stars-yoki-premium";

/**
 * Telegram Stars yoki Premium — qaysi birini olish kerak.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-15): «stars va premium farqi / qaysi birini
 * olish» — taqqoslash niyati, saytda umuman yo'q edi (23-maqola — App Store
 * bilan narx farqi, boshqa mavzu). Stars nima (133) va Premium nima (139)
 * alohida bor — bu sahifa ularni takrorlamaydi, faqat solishtiradi va
 * qaysi holatda qaysi biri kerakligini aytadi.
 *
 * Narxlar konstantalardan: Stars — karta/balans STARS_PER_UNIT_UZS,
 * shlyuzlar STARS_PER_UNIT_GATEWAY_UZS; Premium — PREMIUM_PLANS (karta narxi,
 * 1 oylik ataylab ko'rsatilmaydi). Premium imkoniyatlari — Telegram'ning
 * ochiq ro'yxatidan faqat barqarorlari.
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
          <strong key="n">{`${fmt(n, locale)}\u00a0⭐`}</strong>,
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

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      <b>Stars</b> — Telegram ichidagi to‘lov birligi: sovg‘a, pullik reaksiya, bot va Mini App xaridlari,
      pullik kanal kontenti uchun; kerakli miqdorda olinadi va sarflanadi. <b>Premium</b> — qo‘shimcha
      imkoniyatlar obunasi: 4 GB gacha fayl, ikki barobar limitlar, premium emoji, reklamasiz kanallar;
      3, 6 yoki 12 oyga olinadi. Biri ikkinchisining o‘rnini bosmaydi — <b>nimaga sarflashingizga qarab</b>{" "}
      tanlang. Ikkalasi ham so‘mda, username bilan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#farq", label: "Asosiy farq — bitta jadvalda" },
          { href: "#stars-qachon", label: "Qachon Stars kerak" },
          { href: "#premium-qachon", label: "Qachon Premium kerak" },
          { href: "#narx", label: "Narxlarni solishtirish" },
          { href: "#ikkalasi", label: "Ikkalasi birga" },
          { href: "#xarid", label: "Qanday olinadi" },
        ]}
      />

      <h2 id="farq">Asosiy farq — bitta jadvalda</h2>
      <CompareTable
        headers={["", "Telegram Stars", "Telegram Premium"]}
        rows={[
          [<strong key="a">Nima</strong>, "Telegram ichidagi to‘lov birligi (yulduz)", "Qo‘shimcha imkoniyatlar obunasi"],
          [<strong key="b">Nimaga ishlatiladi</strong>, "Sovg‘a, reaksiya, bot/Mini App xaridi, pullik kontent", "Katta fayl, 2× limit, premium emoji, reklamasiz, tezroq yuklash"],
          [<strong key="c">Qanday olinadi</strong>, "Kerakli miqdorda — 50 dan 10 000 gacha", "Muddatga — 3, 6 yoki 12 oy"],
          [<strong key="d">Qanday tugaydi</strong>, "Sarflaganingizcha kamayadi, muddati yo‘q", "Muddat tugaganda imtiyozlar to‘xtaydi"],
          [<strong key="e">Kimga foydali</strong>, "Sovg‘a beradigan, bot va kanallarda to‘lov qiladiganlarga", "Telegram’dan har kuni ko‘p foydalanadiganlarga"],
          [<strong key="f">Narx</strong>, `${STARS_PER_UNIT_UZS}–${STARS_PER_UNIT_GATEWAY_UZS} so‘m / dona`, "Muddatga qarab, quyida"],
        ]}
      />
      <Notice label="Muhim">
        Stars olish Premium bermaydi, Premium esa yulduz balansini to‘ldirmaydi. Bu ikki alohida mahsulot;
        nimaga pul sarflamoqchi ekaningizni avval aniqlang.
      </Notice>

      <h2 id="stars-qachon">Qachon Stars kerak</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Sovg‘a yubormoqchisiz">
          Telegram sovg‘alari yulduzga sotiladi — do‘stingiz profiliga ayiqcha yoki yurakcha yuborish
          uchun Stars kerak.
        </InfoCard>
        <InfoCard emoji="🤖" title="Botda yoki Mini App’da to‘lov">
          O‘yin, xizmat yoki ilova ichidagi xarid «200 Stars» desa — aynan shu miqdor kerak, ortiqcha emas.
        </InfoCard>
        <InfoCard emoji="❤️" title="Pullik reaksiya va kontent">
          Kanalga yulduzli reaksiya, pullik post yoki obuna — hammasi Stars bilan.
        </InfoCard>
        <InfoCard emoji="🔁" title="Kerak bo‘lganda, kerakli miqdorda">
          Muddat yo‘q: 100 ta olsangiz, sarflamaguningizcha turadi.
        </InfoCard>
      </InfoGrid>
      <p>
        Stars nimaga sarflanishi va qanday ishlashi haqida batafsil —{" "}
        <Link href="/blog/telegram-yulduz-kerak">Telegram yulduzi nima uchun kerak</Link>.
      </p>

      <h2 id="premium-qachon">Qachon Premium kerak</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Katta fayllar">
          2 GB o‘rniga 4 GB gacha fayl yuborasiz, yuklab olish tezroq.
        </InfoCard>
        <InfoCard emoji="📚" title="Limitlar tor kelganda">
          Ko‘proq kanal, papka, qadab qo‘yilgan chat va saqlangan stikerlar — limitlar ikki barobar.
        </InfoCard>
        <InfoCard emoji="✨" title="Premium emoji va stikerlar">
          Harakatlanuvchi emoji, maxsus reaksiyalar, profil belgisi.
        </InfoCard>
        <InfoCard emoji="🔇" title="Reklamasiz va ovozli xabarlar matnga">
          Ommaviy kanallarda reklama ko‘rinmaydi, ovozli va video xabarlar matnga aylanadi.
        </InfoCard>
      </InfoGrid>
      <p>
        Premium hamma uchun shart emas: faqat bot ichida bir marta to‘lov kerak bo‘lsa, Stars yetarli. Kimga
        ayniqsa foydali — <Link href="/blog/telegram-premium-kerak">Premium kerakmi</Link> maqolasida.
      </p>

      <h2 id="narx">Narxlarni solishtirish</h2>
      <p>
        Stars narxi to‘lov usuliga bog‘liq: karta o‘tkazmasi va balansdan {STARS_PER_UNIT_UZS} so‘m, Click,
        Payme, Uzum yoki Paynet orqali {STARS_PER_UNIT_GATEWAY_UZS} so‘m — bir dona. Premium jadvalida karta
        o‘tkazmasi narxi; onlayn shlyuz tanlansa, yakuniy summa botda ko‘rsatiladi.
      </p>
      <PriceTables locale="uz" />
      <p>
        To‘liq ro‘yxat: <Link href="/stars">Stars narxlari</Link> va{" "}
        <Link href="/premium">Premium narxlari</Link>.
      </p>

      <h2 id="ikkalasi">Ikkalasi birga</h2>
      <p>
        Ko‘pchilik ikkalasini ham ishlatadi: Premium — kundalik qulaylik uchun, Stars — sovg‘a va bot
        to‘lovlari uchun. Ular bir-biriga xalaqit bermaydi: Premium obunasi bo‘lgan odam Stars’ni xuddi
        shunday oladi va sarflaydi. Ikkalasi ham @StarsPaymee_bot da alohida bo‘lim.
      </p>
      <KeyFacts label="Qisqa qoida">
        <li>
          <b>Narsa yoki xizmat uchun to‘lov</b> kerak → Stars.
        </li>
        <li>
          <b>Telegram’ning o‘zini kengaytirish</b> kerak → Premium.
        </li>
        <li>
          <b>Ikkalasi ham</b> → ikkita alohida buyurtma, bitta bot.
        </li>
      </KeyFacts>

      <h2 id="xarid">Qanday olinadi</h2>
      <Steps>
        <Step title="1. Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Stars yoki Premium bo‘limi.
        </Step>
        <Step title="2. Miqdor yoki muddatni tanlang">
          Stars — 50 dan 10 000 gacha istalgan son; Premium — 3, 6 yoki 12 oy.
        </Step>
        <Step title="3. Username">
          O‘zingizga — «O‘zim»; boshqa odamga — uning @username’i. Parol va kod kerak emas.
        </Step>
        <Step title="4. To‘lang">
          Uzcard/Humo o‘tkazmasi, Click, Payme, Uzum yoki Paynet — summa to‘lovdan oldin ko‘rinadi.
        </Step>
        <Step title="5. Bir necha soniya">
          To‘lov tasdiqlangach Stars balansga tushadi, Premium yoqiladi; «Buyurtmalarim»da «yetkazildi».
        </Step>
      </Steps>
      <InlineCta text="Stars kerakmi? Miqdorni tanlang — 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Premium kerakmi? 3, 6 yoki 12 oy — username bilan, parolsiz." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "/stars", label: "Telegram Stars sotib olish", note: "paketlar va narxlar" },
          { href: "/premium", label: "Telegram Premium sotib olish", note: "muddatlar va narxlar" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "ikkala bo‘lim bitta botda" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      <b>Stars</b> — платёжная единица внутри Telegram: подарки, платные реакции, покупки в ботах и Mini
      App, платный контент каналов; покупаются и тратятся в нужном количестве. <b>Premium</b> — подписка на
      дополнительные возможности: файлы до 4 ГБ, удвоенные лимиты, премиум-эмодзи, каналы без рекламы;
      оформляется на 3, 6 или 12 месяцев. Одно не заменяет другое — выбирайте <b>по тому, на что хотите
      потратить</b>. И то и другое — в сумах, по username.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#farq", label: "Главная разница — в одной таблице" },
          { href: "#stars-qachon", label: "Когда нужны Stars" },
          { href: "#premium-qachon", label: "Когда нужен Premium" },
          { href: "#narx", label: "Сравнение цен" },
          { href: "#ikkalasi", label: "Оба вместе" },
          { href: "#xarid", label: "Как купить" },
        ]}
      />

      <h2 id="farq">Главная разница — в одной таблице</h2>
      <CompareTable
        headers={["", "Telegram Stars", "Telegram Premium"]}
        rows={[
          [<strong key="a">Что это</strong>, "Платёжная единица внутри Telegram (звезда)", "Подписка на дополнительные возможности"],
          [<strong key="b">На что используется</strong>, "Подарки, реакции, покупки в ботах и Mini App, платный контент", "Большие файлы, 2× лимиты, премиум-эмодзи, без рекламы, быстрая загрузка"],
          [<strong key="c">Как покупается</strong>, "В нужном количестве — от 50 до 10 000", "На срок — 3, 6 или 12 месяцев"],
          [<strong key="d">Как заканчивается</strong>, "Уменьшаются по мере трат, срока нет", "По окончании срока преимущества отключаются"],
          [<strong key="e">Кому полезно</strong>, "Тем, кто дарит и платит в ботах и каналах", "Тем, кто много пользуется Telegram каждый день"],
          [<strong key="f">Цена</strong>, `${STARS_PER_UNIT_UZS}–${STARS_PER_UNIT_GATEWAY_UZS} сум / звезда`, "Зависит от срока, ниже"],
        ]}
      />
      <Notice label="Важно">
        Покупка Stars не даёт Premium, а Premium не пополняет баланс звёзд. Это два отдельных продукта;
        сначала определите, на что хотите потратить деньги.
      </Notice>

      <h2 id="stars-qachon">Когда нужны Stars</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Хотите отправить подарок">
          Подарки Telegram продаются за звёзды — чтобы отправить другу мишку или сердце в профиль, нужны
          Stars.
        </InfoCard>
        <InfoCard emoji="🤖" title="Оплата в боте или Mini App">
          Если покупка в игре, сервисе или приложении стоит «200 Stars» — нужно ровно столько, не больше.
        </InfoCard>
        <InfoCard emoji="❤️" title="Платные реакции и контент">
          Звёздная реакция на канал, платный пост или подписка — всё за Stars.
        </InfoCard>
        <InfoCard emoji="🔁" title="Когда нужно и сколько нужно">
          Срока нет: купили 100 — лежат, пока не потратите.
        </InfoCard>
      </InfoGrid>
      <p>
        Подробнее о том, на что тратятся Stars и как они работают —{" "}
        <Link href="/blog/telegram-yulduz-kerak">зачем нужны звёзды Telegram</Link>.
      </p>

      <h2 id="premium-qachon">Когда нужен Premium</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Большие файлы">
          Вместо 2 ГБ отправляете файлы до 4 ГБ, загрузка быстрее.
        </InfoCard>
        <InfoCard emoji="📚" title="Когда тесно в лимитах">
          Больше каналов, папок, закреплённых чатов и сохранённых стикеров — лимиты удвоены.
        </InfoCard>
        <InfoCard emoji="✨" title="Премиум-эмодзи и стикеры">
          Анимированные эмодзи, особые реакции, значок в профиле.
        </InfoCard>
        <InfoCard emoji="🔇" title="Без рекламы и голосовые в текст">
          В публичных каналах не показывается реклама, голосовые и видеосообщения переводятся в текст.
        </InfoCard>
      </InfoGrid>
      <p>
        Premium нужен не всем: если требуется только разовая оплата в боте, хватит Stars. Кому он особенно
        полезен — в статье <Link href="/blog/telegram-premium-kerak">нужен ли Premium</Link>.
      </p>

      <h2 id="narx">Сравнение цен</h2>
      <p>
        Цена Stars зависит от способа оплаты: переводом на карту и с баланса {STARS_PER_UNIT_UZS} сум, через
        Click, Payme, Uzum или Paynet {STARS_PER_UNIT_GATEWAY_UZS} сум за звезду. В таблице Premium — цена при
        переводе на карту; при выборе онлайн-шлюза итоговая сумма показывается в боте.
      </p>
      <PriceTables locale="ru" />
      <p>
        Полный список: <Link href="/stars">цены на Stars</Link> и{" "}
        <Link href="/premium">цены на Premium</Link>.
      </p>

      <h2 id="ikkalasi">Оба вместе</h2>
      <p>
        Многие пользуются и тем и другим: Premium — для повседневного удобства, Stars — для подарков и
        оплаты в ботах. Они не мешают друг другу: человек с Premium покупает и тратит Stars точно так же.
        В @StarsPaymee_bot для каждого — свой раздел.
      </p>
      <KeyFacts label="Короткое правило">
        <li>
          Нужно <b>заплатить за вещь или услугу</b> → Stars.
        </li>
        <li>
          Нужно <b>расширить сам Telegram</b> → Premium.
        </li>
        <li>
          <b>И то и другое</b> → два отдельных заказа, один бот.
        </li>
      </KeyFacts>

      <h2 id="xarid">Как купить</h2>
      <Steps>
        <Step title="1. Откройте бота">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → раздел Stars или Premium.
        </Step>
        <Step title="2. Выберите количество или срок">
          Stars — любое число от 50 до 10 000; Premium — 3, 6 или 12 месяцев.
        </Step>
        <Step title="3. Username">
          Себе — «Я»; другому — его @username. Пароль и код не нужны.
        </Step>
        <Step title="4. Оплатите">
          Перевод Uzcard/Humo, Click, Payme, Uzum или Paynet — сумма видна до оплаты.
        </Step>
        <Step title="5. Несколько секунд">
          После подтверждения оплаты Stars приходят на баланс, Premium включается; в «Моих заказах» —
          «доставлено».
        </Step>
      </Steps>
      <InlineCta text="Нужны Stars? Выберите количество — на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Нужен Premium? 3, 6 или 12 месяцев — по username, без пароля." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "/stars", label: "Купить Telegram Stars", note: "пакеты и цены" },
          { href: "/premium", label: "Купить Telegram Premium", note: "сроки и цены" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "оба раздела в одном боте" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      <b>Stars</b> are Telegram’s in-app payment unit: gifts, paid reactions, purchases in bots and Mini Apps,
      paid channel content; you buy and spend as many as you need. <b>Premium</b> is a subscription to extra
      features: files up to 4 GB, doubled limits, premium emoji, ad-free channels; bought for 3, 6 or 12
      months. Neither replaces the other — choose by <b>what you want to spend on</b>. Both are paid in som,
      by username.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#farq", label: "The main difference in one table" },
          { href: "#stars-qachon", label: "When you need Stars" },
          { href: "#premium-qachon", label: "When you need Premium" },
          { href: "#narx", label: "Comparing prices" },
          { href: "#ikkalasi", label: "Both together" },
          { href: "#xarid", label: "How to buy" },
        ]}
      />

      <h2 id="farq">The main difference in one table</h2>
      <CompareTable
        headers={["", "Telegram Stars", "Telegram Premium"]}
        rows={[
          [<strong key="a">What it is</strong>, "Telegram’s in-app payment unit (a star)", "A subscription to extra features"],
          [<strong key="b">What it is for</strong>, "Gifts, reactions, bot and Mini App purchases, paid content", "Large files, 2× limits, premium emoji, no ads, faster downloads"],
          [<strong key="c">How you buy it</strong>, "In the amount you need — 50 to 10,000", "For a term — 3, 6 or 12 months"],
          [<strong key="d">How it ends</strong>, "Goes down as you spend; no expiry", "The perks stop when the term ends"],
          [<strong key="e">Who it suits</strong>, "People who send gifts and pay in bots and channels", "People who use Telegram heavily every day"],
          [<strong key="f">Price</strong>, `${STARS_PER_UNIT_UZS}–${STARS_PER_UNIT_GATEWAY_UZS} som / star`, "By term, below"],
        ]}
      />
      <Notice label="Important">
        Buying Stars does not give you Premium, and Premium does not top up your star balance. They are two
        separate products; decide first what you want to spend money on.
      </Notice>

      <h2 id="stars-qachon">When you need Stars</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="You want to send a gift">
          Telegram gifts are sold for stars — sending a friend a bear or a heart for their profile takes
          Stars.
        </InfoCard>
        <InfoCard emoji="🤖" title="Paying in a bot or Mini App">
          If a purchase in a game, service or app says “200 Stars”, you need exactly that many — no more.
        </InfoCard>
        <InfoCard emoji="❤️" title="Paid reactions and content">
          A star reaction on a channel, a paid post or a subscription — all with Stars.
        </InfoCard>
        <InfoCard emoji="🔁" title="When you need them, as many as you need">
          No expiry: buy 100 and they stay until you spend them.
        </InfoCard>
      </InfoGrid>
      <p>
        More on what Stars are spent on and how they work —{" "}
        <Link href="/blog/telegram-yulduz-kerak">what Telegram Stars are for</Link>.
      </p>

      <h2 id="premium-qachon">When you need Premium</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Large files">
          Send files up to 4 GB instead of 2 GB, with faster downloads.
        </InfoCard>
        <InfoCard emoji="📚" title="When the limits feel tight">
          More channels, folders, pinned chats and saved stickers — the limits are doubled.
        </InfoCard>
        <InfoCard emoji="✨" title="Premium emoji and stickers">
          Animated emoji, special reactions, a profile badge.
        </InfoCard>
        <InfoCard emoji="🔇" title="No ads, and voice to text">
          No ads in public channels; voice and video messages are transcribed.
        </InfoCard>
      </InfoGrid>
      <p>
        Premium is not for everyone: if you only need a one-off payment inside a bot, Stars are enough. Who
        benefits most — in <Link href="/blog/telegram-premium-kerak">do you need Premium</Link>.
      </p>

      <h2 id="narx">Comparing prices</h2>
      <p>
        The Stars price depends on the payment method: {STARS_PER_UNIT_UZS} som per star by card transfer
        and from balance, {STARS_PER_UNIT_GATEWAY_UZS} som through Click, Payme, Uzum or Paynet. The Premium
        table shows the card-transfer price; if you choose an online gateway, the final amount is shown in
        the bot.
      </p>
      <PriceTables locale="en" />
      <p>
        The full lists: <Link href="/stars">Stars prices</Link> and{" "}
        <Link href="/premium">Premium prices</Link>.
      </p>

      <h2 id="ikkalasi">Both together</h2>
      <p>
        Many people use both: Premium for everyday convenience, Stars for gifts and bot payments. They do not
        interfere with each other: someone with Premium buys and spends Stars exactly the same way. Each has
        its own section in @StarsPaymee_bot.
      </p>
      <KeyFacts label="A short rule">
        <li>
          You need to <b>pay for a thing or a service</b> → Stars.
        </li>
        <li>
          You need to <b>expand Telegram itself</b> → Premium.
        </li>
        <li>
          <b>Both</b> → two separate orders, one bot.
        </li>
      </KeyFacts>

      <h2 id="xarid">How to buy</h2>
      <Steps>
        <Step title="1. Open the bot">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → the Stars or Premium section.
        </Step>
        <Step title="2. Choose the amount or the term">
          Stars — any number from 50 to 10,000; Premium — 3, 6 or 12 months.
        </Step>
        <Step title="3. Username">
          For yourself — “Me”; for someone else — their @username. No password or code.
        </Step>
        <Step title="4. Pay">
          Uzcard/Humo transfer, Click, Payme, Uzum or Paynet — the total shows before you pay.
        </Step>
        <Step title="5. A few seconds">
          Once the payment is confirmed, Stars reach the balance and Premium switches on; “My orders” shows
          “delivered”.
        </Step>
      </Steps>
      <InlineCta text="Need Stars? Pick the amount — on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />
      <InlineCta text="Need Premium? 3, 6 or 12 months — by username, no password." product={{ kind: "premium", months: 3 }} />

      <Sources
        label="Useful links"
        items={[
          { href: "/stars", label: "Buy Telegram Stars", note: "packs and prices" },
          { href: "/premium", label: "Buy Telegram Premium", note: "terms and prices" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "both sections in one bot" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Stars va Premium farqi nimada?",
    answer:
      "Stars — Telegram ichidagi to‘lov birligi: sovg‘a, reaksiya, bot xaridlari uchun, kerakli miqdorda olinadi. Premium — qo‘shimcha imkoniyatlar obunasi: katta fayl, 2× limit, premium emoji; muddatga olinadi.",
  },
  {
    question: "Stars olsam, Premium ham beriladimi?",
    answer: "Yo‘q. Bu ikki alohida mahsulot: Stars yulduz balansini to‘ldiradi, Premium esa alohida obuna sifatida olinadi.",
  },
  {
    question: "Qaysi biri arzonroq?",
    answer: `Ular solishtirilmaydi — maqsadi har xil. Stars dona narxi ${STARS_PER_UNIT_UZS} (karta) yoki ${STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click/Payme/Uzum/Paynet); Premium 3 oy ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "uz")} so‘mdan boshlanadi.`,
  },
  {
    question: "Sovg‘a yuborish uchun nima kerak — Stars yoki Premium?",
    answer: "Stars. Telegram sovg‘alari yulduzga sotiladi; Premium sovg‘a yuborish uchun kerak emas.",
  },
  {
    question: "Bot ichidagi xarid uchun Premium kerakmi?",
    answer: "Yo‘q. Bot va Mini App xaridlari Stars bilan to‘lanadi — kerakli miqdorni oling, ortiqcha emas.",
  },
  {
    question: "Ikkalasini birga olsa bo‘ladimi?",
    answer: "Ha. Ko‘pchilik shunday qiladi: Premium kundalik qulaylik, Stars — sovg‘a va to‘lovlar uchun. @StarsPaymee_bot da ikkita alohida buyurtma.",
  },
  {
    question: "Stars muddati tugaydimi?",
    answer: "Yo‘q. Yulduzlar sarflaguningizcha balansda turadi. Premium esa tanlangan muddat — 3, 6 yoki 12 oy — tugaganda to‘xtaydi.",
  },
];

const ruFaq = [
  {
    question: "В чём разница между Telegram Stars и Premium?",
    answer:
      "Stars — платёжная единица внутри Telegram: на подарки, реакции, покупки в ботах; покупаются в нужном количестве. Premium — подписка на дополнительные возможности: большие файлы, 2× лимиты, премиум-эмодзи; покупается на срок.",
  },
  {
    question: "Если купить Stars, Premium тоже дадут?",
    answer: "Нет. Это два отдельных продукта: Stars пополняют баланс звёзд, а Premium оформляется отдельной подпиской.",
  },
  {
    question: "Что дешевле?",
    answer: `Их не сравнивают — цели разные. Звезда стоит ${STARS_PER_UNIT_UZS} (карта) или ${STARS_PER_UNIT_GATEWAY_UZS} сум (Click/Payme/Uzum/Paynet); Premium на 3 месяца — от ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "ru")} сум.`,
  },
  {
    question: "Что нужно для подарка — Stars или Premium?",
    answer: "Stars. Подарки Telegram продаются за звёзды; Premium для отправки подарка не нужен.",
  },
  {
    question: "Нужен ли Premium для покупки в боте?",
    answer: "Нет. Покупки в ботах и Mini App оплачиваются Stars — купите нужное количество, не больше.",
  },
  {
    question: "Можно взять оба?",
    answer: "Да. Так делают многие: Premium для повседневного удобства, Stars — для подарков и платежей. В @StarsPaymee_bot это два отдельных заказа.",
  },
  {
    question: "У Stars есть срок?",
    answer: "Нет. Звёзды лежат на балансе, пока вы их не потратите. Premium же заканчивается по истечении выбранного срока — 3, 6 или 12 месяцев.",
  },
];

const enFaq = [
  {
    question: "What is the difference between Telegram Stars and Premium?",
    answer:
      "Stars are Telegram’s in-app payment unit: for gifts, reactions and bot purchases, bought in the amount you need. Premium is a subscription to extra features: large files, 2× limits, premium emoji, bought for a term.",
  },
  {
    question: "If I buy Stars, do I get Premium too?",
    answer: "No. They are two separate products: Stars top up your star balance, while Premium is a separate subscription.",
  },
  {
    question: "Which is cheaper?",
    answer: `They are not comparable — the purposes differ. A star costs ${STARS_PER_UNIT_UZS} (card) or ${STARS_PER_UNIT_GATEWAY_UZS} som (Click/Payme/Uzum/Paynet); Premium starts at ${fmt(PREMIUM_PLANS.find((p) => p.months === 3)?.priceUzs ?? 0, "en")} som for 3 months.`,
  },
  {
    question: "What do I need to send a gift — Stars or Premium?",
    answer: "Stars. Telegram gifts are sold for stars; Premium is not needed to send a gift.",
  },
  {
    question: "Do I need Premium to buy inside a bot?",
    answer: "No. Bot and Mini App purchases are paid with Stars — buy the amount you need, no more.",
  },
  {
    question: "Can I have both?",
    answer: "Yes. Many people do: Premium for everyday convenience, Stars for gifts and payments. In @StarsPaymee_bot they are two separate orders.",
  },
  {
    question: "Do Stars expire?",
    answer: "No. Stars stay on your balance until you spend them. Premium ends when the chosen term — 3, 6 or 12 months — runs out.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "comparison",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  keywords: [
    "telegram stars yoki premium",
    "stars va premium farqi",
    "telegram stars premium farqi",
    "qaysi birini olish stars premium",
    "telegram premium yoki stars",
    "stars или premium что выбрать",
    "чем отличаются stars и premium",
    "telegram stars vs premium",
  ],
  locales: {
    uz: {
      title: "Telegram Stars yoki Premium: farqi nimada va qaysi birini olish kerak",
      excerpt:
        "Stars — to‘lov birligi, Premium — obuna. Bitta jadvalda farqi, qaysi holatda qaysi biri kerak, narxlarni solishtirish va ikkalasini birga ishlatish.",
      metaTitle: "Telegram Stars yoki Premium — qaysi biri kerak",
      metaDescription:
        "Stars — sovg‘a, reaksiya va bot xaridlari uchun to‘lov birligi; Premium — katta fayl, 2× limit va premium emoji obunasi. Farqi, narxlari va qachon qaysi biri kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Tanladingizmi? Bitta botda ikkalasi",
      ctaBody: "Stars — kerakli miqdorda, Premium — 3, 6 yoki 12 oyga. So‘mda, username bilan, bir necha soniyada.",
      faq: uzFaq,
    },
    ru: {
      title: "Telegram Stars или Premium: в чём разница и что выбрать",
      excerpt:
        "Stars — платёжная единица, Premium — подписка. Разница в одной таблице, когда что нужно, сравнение цен и использование обоих вместе.",
      metaTitle: "Telegram Stars или Premium — что выбрать",
      metaDescription:
        "Stars — платёжная единица для подарков, реакций и покупок в ботах; Premium — подписка с большими файлами, 2× лимитами и премиум-эмодзи. Разница, цены и когда что нужно.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выбрали? Оба в одном боте",
      ctaBody: "Stars — в нужном количестве, Premium — на 3, 6 или 12 месяцев. В сумах, по username, за несколько секунд.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram Stars or Premium: what the difference is and which to buy",
      excerpt:
        "Stars are a payment unit, Premium is a subscription. The difference in one table, when you need which, a price comparison and using both together.",
      metaTitle: "Telegram Stars or Premium — which to choose",
      metaDescription:
        "Stars are the payment unit for gifts, reactions and bot purchases; Premium is a subscription with large files, 2× limits and premium emoji. The difference, prices and when you need which.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Decided? Both in one bot",
      ctaBody: "Stars in the amount you need, Premium for 3, 6 or 12 months. In som, by username, within seconds.",
      faq: enFaq,
    },
  },
};
