import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta, KeyFacts, Notice, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "starspaymee-nft-market";

function UzAnswer() {
  return (
    <p>
      <strong>Hozirgi holat:</strong> @StarsPaymee_bot’dagi <strong>NFT Market</strong> bo‘limida sotuvdagi
      kolleksion (NFT) Telegram sovg‘asini so‘mda sotib olasiz — bu ijara emas, NFT sizniki bo‘ladi. Bitta NFT{" "}
      <strong>300 000 so‘mgacha</strong>; to‘lov faqat UzCard/HUMO kartaga o‘tkazma yoki balans orqali. Xarid
      zanjirda tasdiqlangach admin NFT’ni Telegram @username’ingizga o‘tkazadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Yangilandi — 2026-yil oktabr">
        <p>
          21-sentabrdan botda <b>NFT Market</b> ishlaydi: sotuvdagi kolleksion (NFT) sovg‘ani so‘mda sotib
          olasiz. Telegram sotuvdan olib tashlagan limited sovg‘alarni esa botlar yangi holda yubora olmaydi — bu
          oddiy sovg‘alar katalogiga tegishli, batafsil —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link>.
        </p>
      </Notice>

      <Toc label="Mundarija" items={[{ href: "#nima", label: "StarsPaymee" }, { href: "#xarid", label: "Xarid" }]} />
      <h2 id="nima">StarsPaymee nima?</h2>
      <p>
        Stars, Premium, oddiy sovg‘alar, NFT Market, NFT ijarasi, o‘yin to‘ldirish va Steam hamyoni — bitta bot
        ichida, mahalliy to‘lov va o‘zbek tilidagi qo‘llab-quvvatlash bilan.
      </p>
      <KeyFacts label="Hozir nima ishlaydi">
        <li>
          <b>NFT Market</b> — sotuvdagi kolleksion nusxa, 300 000 so‘mgacha; egalik sizga o‘tadi.
        </li>
        <li>
          <b>NFT ijarasi</b> — kolleksion sovg‘ani muddatga olish (
          <Link href="/blog/telegram-nft-sovga-ijarasi">qo‘llanma</Link>).
        </li>
        <li>
          <b>Oddiy sovg‘alar, Stars va Premium</b> — avvalgidek, username orqali.
        </li>
        <li>
          <b>Limited sovg‘alar</b> — Telegram sotuvdan olib tashlaganlarini botlar yangi holda yubora olmaydi.
        </li>
      </KeyFacts>
      <p>
        Quyidagi ro‘yxat — <b>namuna</b>: kolleksiya, saralash va so‘mdagi narx qanday ko‘rinishini ko‘rsatadi.
        Bu sotuvdagi taklif emas.
      </p>
      <NftGiftMarketBoard locale="uz" />
      <h2 id="xarid">NFT Market’da qanday sotib olinadi?</h2>
      <ol>
        <li>
          @StarsPaymee_bot’ni oching va <b>NFT Market</b> bo‘limiga kiring.
        </li>
        <li>
          Kolleksiya, model, belgi yoki fon bo‘yicha filtrlang va nusxani tanlang — 300 000 so‘mgacha bo‘lganini
          sotib olish mumkin (qimmatroqlari «Tavandan qimmat» deb yopiq turadi).
        </li>
        <li>«Sotib olish»ni bosing va UzCard/HUMO kartaga o‘tkazma yoki balansni tanlang.</li>
        <li>
          Xarid zanjirda tasdiqlangach bot xabar beradi; @StarsPaymeeSupport’ga yozasiz va admin NFT’ni
          @username’ingizga o‘tkazadi. Bu darhol emas — profilingizda @username bo‘lsin.
        </li>
      </ol>
      <p>
        Narx so‘mda ko‘rsatiladi va TON kursiga qarab o‘zgaradi; yakuniy summa buyurtma yaratilganda belgilanadi.
        Click, Payme, Uzum, Paynet va SBP bu bo‘limda yo‘q. Sovg‘a faqat vaqtincha kerak bo‘lsa —{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">NFT ijarasi</Link>.
      </p>
      <InlineCta text="Botda NFT Market — kolleksion sovg‘a so‘mda, 300 000 so‘mgacha." />
      <p>
        Limited sovg‘alar bilan nima o‘zgargani —{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link>; sovg‘a turlari va narx
        tuzilishi esa{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Gifts narxlari»</Link> da.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      <strong>Текущий статус:</strong> в разделе <strong>NFT Market</strong> @StarsPaymee_bot выставленный на
      продажу коллекционный (NFT) подарок Telegram покупается в сумах — это не аренда, NFT становится вашим. Один
      NFT — <strong>до 300 000 сумов</strong>; оплата только переводом на карту UzCard/Humo или с баланса. После
      подтверждения покупки в блокчейне администратор переводит NFT на ваш @username в Telegram.
    </p>
  );
}
function RuBody() {
  return (
    <>
      <Notice label="Обновлено — октябрь 2026">
        <p>
          С 21 сентября в боте работает <b>NFT Market</b>: выставленный на продажу коллекционный (NFT) подарок
          покупается в сумах. Limited-подарки, снятые Telegram с продажи, боты как новые отправлять не могут —
          это касается каталога обычных подарков, подробнее —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">в отдельной статье</Link>.
        </p>
      </Notice>

      <KeyFacts label="Что работает сейчас">
        <li>
          <b>NFT Market</b> — выставленный экземпляр, до 300 000 сумов; владение переходит к вам.
        </li>
        <li>
          <b>Аренда NFT</b> — коллекционный подарок на срок (
          <Link href="/blog/telegram-nft-sovga-ijarasi">руководство</Link>).
        </li>
        <li>
          <b>Обычные подарки, Stars и Premium</b> — как и раньше, по username.
        </li>
        <li>
          <b>Limited-подарки</b> — снятые Telegram с продажи боты как новые отправить не могут.
        </li>
      </KeyFacts>
      <p>
        Ниже — <b>образец</b>: как выглядят коллекции, сортировка и цена в сумах. Это не действующее
        предложение.
      </p>
      <NftGiftMarketBoard locale="ru" />
      <h2 id="xarid">Как купить в NFT Market</h2>
      <ol>
        <li>
          Откройте @StarsPaymee_bot и войдите в раздел <b>NFT Market</b>.
        </li>
        <li>
          Отфильтруйте по коллекции, модели, символу или фону и выберите экземпляр — купить можно до 300 000
          сумов (более дорогие отмечены «Tavandan qimmat» и недоступны).
        </li>
        <li>Нажмите «Sotib olish» и выберите перевод на карту UzCard/Humo или баланс.</li>
        <li>
          После подтверждения в блокчейне бот пришлёт сообщение; напишите в @StarsPaymeeSupport — администратор
          переведёт NFT на ваш @username. Это не мгновенно, у профиля должен быть @username.
        </li>
      </ol>
      <p>
        Цена показывается в сумах и зависит от курса TON; итоговая сумма фиксируется при создании заказа. Click,
        Payme, Uzum, Paynet и СБП в этом разделе недоступны. Если подарок нужен только на время —{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">аренда NFT</Link>.
      </p>
      <InlineCta text="NFT Market в боте — коллекционный подарок в сумах, до 300 000 сумов." />
      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

function EnAnswer() {
  return (
    <p>
      <strong>Current status:</strong> in the <strong>NFT Market</strong> section of @StarsPaymee_bot you buy a
      listed collectible (NFT) Telegram gift in so‘m — it is not a rental, the NFT becomes yours. One NFT costs{" "}
      <strong>up to 300,000 so‘m</strong>; payment is by UzCard/HUMO card transfer or balance only. Once the
      purchase is confirmed on-chain, an admin transfers the NFT to your Telegram @username.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <Notice label="Updated — October 2026">
        <p>
          Since 21 September the bot’s <b>NFT Market</b> has been live: a listed collectible (NFT) gift is bought
          in so‘m. Limited gifts that Telegram took off sale cannot be sent new by bots — that applies to the
          regular gift catalogue; more in{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">a separate article</Link>.
        </p>
      </Notice>

      <KeyFacts label="What works now">
        <li>
          <b>NFT Market</b> — a listed collectible copy, up to 300,000 so‘m; ownership passes to you.
        </li>
        <li>
          <b>NFT rental</b> — a collectible gift for a set term (
          <Link href="/blog/telegram-nft-sovga-ijarasi">the guide</Link>).
        </li>
        <li>
          <b>Regular gifts, Stars and Premium</b> — as before, by username.
        </li>
        <li>
          <b>Limited gifts</b> — those Telegram took off sale cannot be sent new by bots.
        </li>
      </KeyFacts>
      <p>
        Below is a <b>sample</b>: how collections, sorting and so‘m prices look. It is not a live offer.
      </p>
      <NftGiftMarketBoard locale="en" />
      <h2 id="xarid">How to buy in the NFT Market</h2>
      <ol>
        <li>
          Open @StarsPaymee_bot and go to the <b>NFT Market</b> section.
        </li>
        <li>
          Filter by collection, model, symbol or backdrop and pick a copy — anything up to 300,000 so‘m can be
          bought (pricier listings are marked “Tavandan qimmat”, i.e. over the limit, and stay locked).
        </li>
        <li>Tap “Sotib olish” (Buy) and choose a UzCard/HUMO card transfer or your balance.</li>
        <li>
          Once the purchase is confirmed on-chain the bot messages you; write to @StarsPaymeeSupport and an admin
          transfers the NFT to your @username. It is not instant, and your profile needs a @username.
        </li>
      </ol>
      <p>
        The price is shown in so‘m and follows the TON rate; the final amount is fixed when the order is created.
        Click, Payme, Uzum, Paynet and SBP are not available in this section. If you only need the gift for a
        while, see <Link href="/blog/telegram-nft-sovga-ijarasi">NFT rental</Link>.
      </p>
      <InlineCta text="NFT Market in the bot — collectible gifts in so‘m, up to 300,000 so‘m." />
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  {
    question: "StarsPaymee nima?",
    answer:
      "Telegram Stars, Premium, oddiy sovg‘alar, NFT Market, NFT ijarasi, o‘yin to‘ldirish va Steam hamyoni — bitta bot ichida, so‘mda to‘lov bilan.",
  },
  {
    question: "Kolleksion (NFT) sovg‘ani bot orqali olsa bo‘ladimi?",
    answer: "Ha — NFT Market bo‘limida, 300 000 so‘mgacha. NFT sizniki bo‘ladi (bu ijara emas).",
  },
  {
    question: "NFT qachon akkauntimga tushadi?",
    answer:
      "Xarid zanjirda tasdiqlangach NFT vaqtincha StarsPaymee saqlovida bo‘ladi; @StarsPaymeeSupport’ga yozasiz va admin uni @username’ingizga o‘tkazadi. Bu darhol emas.",
  },
  {
    question: "To‘lov qanday amalga oshiriladi?",
    answer:
      "NFT Market’da faqat UzCard/HUMO kartaga o‘tkazma yoki StarsPaymee balansi. Click, Payme, Uzum, Paynet va SBP bu bo‘limda yo‘q.",
  },
  {
    question: "300 000 so‘mdan qimmat NFT’ni olsa bo‘ladimi?",
    answer: "Yo‘q. Bunday e’lonlar ro‘yxatda ko‘rinadi, lekin «Tavandan qimmat» deb yopiq turadi.",
  },
  {
    question: "Limited sovg‘ani bot orqali yangi holda olsa bo‘ladimi?",
    answer:
      "Yo‘q. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yangi holda yubora olmaydi. Ularning sotuvga qo‘yilgan kolleksion nusxalari esa NFT Market’da bo‘lishi mumkin.",
  },
  {
    question: "Sahifadagi narxlar nima?",
    answer:
      "Ular namuna — kolleksiya va saralash qanday ko‘rinishini ko‘rsatadi, sotuvdagi taklif emas. Jonli narxlar botdagi NFT Market’da.",
  },
];

const faqRu = [
  {
    question: "Что такое StarsPaymee?",
    answer:
      "Stars, Premium, обычные подарки, NFT Market, аренда NFT, пополнение игр и кошелёк Steam — в одном боте, с оплатой в сумах.",
  },
  {
    question: "Можно ли получить коллекционный (NFT) подарок через бота?",
    answer: "Да — в NFT Market, до 300 000 сумов. NFT становится вашим (это не аренда).",
  },
  {
    question: "Когда NFT появится в моём аккаунте?",
    answer:
      "После подтверждения в блокчейне NFT временно хранится у StarsPaymee; напишите в @StarsPaymeeSupport — администратор переведёт его на ваш @username. Это не мгновенно.",
  },
  {
    question: "Как оплатить?",
    answer:
      "В NFT Market — только перевод на карту UzCard/Humo или баланс StarsPaymee. Click, Payme, Uzum, Paynet и СБП в этом разделе недоступны.",
  },
  {
    question: "Можно ли купить NFT дороже 300 000 сумов?",
    answer: "Нет. Такие лоты видны в списке, но отмечены «Tavandan qimmat» и недоступны для покупки.",
  },
  {
    question: "Можно ли получить через бота limited-подарок как новый?",
    answer:
      "Нет. Limited-подарки, снятые Telegram с продажи, боты как новые отправлять не могут. Их выставленные на продажу коллекционные экземпляры могут быть в NFT Market.",
  },
  {
    question: "Что за цены показаны на странице?",
    answer: "Это образец интерфейса, а не действующее предложение. Живые цены — в NFT Market бота.",
  },
];

const faqEn = [
  {
    question: "What is StarsPaymee?",
    answer:
      "Telegram Stars, Premium, regular gifts, the NFT Market, NFT rental, game top-ups and the Steam wallet — in one bot, paid in so‘m.",
  },
  {
    question: "Can I get a collectible (NFT) gift through the bot?",
    answer: "Yes — in the NFT Market, up to 300,000 so‘m. The NFT becomes yours (it is not a rental).",
  },
  {
    question: "When does the NFT reach my account?",
    answer:
      "Once the purchase is confirmed on-chain, the NFT is held by StarsPaymee for a while; write to @StarsPaymeeSupport and an admin transfers it to your @username. It is not instant.",
  },
  {
    question: "How do I pay?",
    answer:
      "In the NFT Market only by UzCard/HUMO card transfer or the StarsPaymee balance. Click, Payme, Uzum, Paynet and SBP are not available in this section.",
  },
  {
    question: "Can I buy an NFT that costs more than 300,000 so‘m?",
    answer: "No. Such listings are visible but marked “Tavandan qimmat” (over the limit) and cannot be bought.",
  },
  {
    question: "Can the bot send a limited gift new?",
    answer:
      "No. Limited gifts that Telegram took off sale cannot be sent new by bots. Collectible copies of them that are listed for sale may be in the NFT Market.",
  },
  {
    question: "What are the prices on this page?",
    answer: "A sample of the interface, not a live offer. Live prices are in the bot’s NFT Market.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "cta",
  datePublished: "2026-07-29",
  dateModified: "2026-10-06",
  keywords: [
    "StarsPaymee NFT",
    "StarsPaymee NFT Market",
    "gift market uzbekistan",
    "telegram nft uzbekistan",
    "telegram collectibles uzbekistan",
    "telegram gifts shop",
  ],
  locales: {
    uz: {
      title: "StarsPaymee Gift Market (NFT Market) — kolleksion sovg‘ani so‘mda sotib olish",
      excerpt:
        "Botdagi NFT Market’da sotuvdagi kolleksion (NFT) Telegram sovg‘asini so‘mda sotib olasiz: 300 000 so‘mgacha, karta yoki balans orqali, NFT sizniki bo‘ladi.",
      metaTitle: "StarsPaymee NFT Market — NFT sovg‘a so‘mda",
      metaDescription:
        "StarsPaymee NFT Market: sotuvdagi kolleksion (NFT) sovg‘ani 300 000 so‘mgacha sotib olish, karta yoki balans bilan to‘lash va NFT’ni Telegram @username’ingizga olish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Botda NFT Market",
      ctaBody: "@StarsPaymee_bot — kolleksion NFT sovg‘a so‘mda, 300 000 so‘mgacha; to‘lov karta yoki balans orqali.",
      faq: faqUz,
    },
    ru: {
      title: "StarsPaymee Gift Market (NFT Market) — покупка коллекционного подарка в сумах",
      excerpt:
        "В NFT Market бота выставленный коллекционный (NFT) подарок Telegram покупается в сумах: до 300 000 сумов, картой или с баланса, NFT становится вашим.",
      metaTitle: "StarsPaymee NFT Market — NFT-подарок в сумах",
      metaDescription:
        "NFT Market StarsPaymee: покупка коллекционного (NFT) подарка до 300 000 сумов, оплата картой или с баланса и перевод NFT на ваш @username в Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "NFT Market в боте",
      ctaBody: "@StarsPaymee_bot — коллекционный NFT-подарок в сумах, до 300 000 сумов; оплата картой или с баланса.",
      faq: faqRu,
    },
    en: {
      title: "StarsPaymee Gift Market (NFT Market) — buying a collectible gift in so‘m",
      excerpt:
        "The bot’s NFT Market sells listed collectible (NFT) Telegram gifts in so‘m: up to 300,000 so‘m, paid by card transfer or balance, and the NFT becomes yours.",
      metaTitle: "StarsPaymee NFT Market — NFT gifts in so‘m",
      metaDescription:
        "StarsPaymee NFT Market: buy a listed collectible (NFT) gift for up to 300,000 so‘m, pay by card transfer or balance, and get it on your Telegram @username.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "NFT Market in the bot",
      ctaBody: "@StarsPaymee_bot — collectible NFT gifts in so‘m, up to 300,000 so‘m; pay by card or balance.",
      faq: faqEn,
    },
  },
};
