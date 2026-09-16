import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta, Notice, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-gift-sotib-olish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram NFT Gift sotib olish</strong> uchun @StarsPaymee_bot ichidagi <strong>Gift Market</strong>ni
      oching: kolleksiyani tanlang, narxni so‘mda ko‘ring, balansni to‘ldiring (UzCard, HUMO, Click, Payme). Ba’zi
      sovg‘alar avvalo <Link href="/stars">Stars</Link> talab qiladi — botda ikkalasi ham mavjud.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Yangilandi — 2026-yil sentabr">
        <p>
          Sotuvdan tugagan <b>kolleksion (NFT) sovg‘alar</b> hozir bot orqali yetkazilmaydi — oddiy sovg‘alar,
          Stars va Premium ishlashda davom etmoqda. Nima o‘zgargani va kolleksion sovg‘a olishning ishlaydigan
          yo‘li —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link>.
        </p>
      </Notice>

      <Toc label="Mundarija" items={[{ href: "#qayerdan", label: "Qayerdan" }, { href: "#tolov", label: "To‘lov" }]} />
      <h2 id="qayerdan">Qayerdan NFT gift olish mumkin?</h2>
      <p>
        Telegram ichida Stars bilan yangi gift, yoki <strong>Gift Market</strong>da tayyor kolleksion nusxa. O‘zbekiston
        uchun qulay: <Link href="/blog/telegram-nft-gift-nima">NFT Gift nima?</Link>,{" "}
        <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>.
      </p>
      <h2 id="tolov">To‘lov va Stars</h2>
      <Steps>
        <Step title="Bot">@StarsPaymee_bot → Gift Market.</Step>
        <Step title="Tanlash">Kolleksiya va narx (so‘m).</Step>
        <Step title="To‘lov">Mahalliy kartalar.</Step>
        <Step title="Profil">Sovg‘a akkauntingizga tushadi yoki sotuvda qo‘yasiz.</Step>
      </Steps>
      <InlineCta text="Hozir xarid qiling — Gift Market so‘mda." />
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Купить NFT Gift: @StarsPaymee_bot → Gift Market, оплата в сумах.</p>;
}
function RuBody() {
  return (
    <>
      <Notice label="Обновлено — сентябрь 2026">
        <p>
          Распроданные <b>коллекционные (NFT) подарки</b> сейчас через бота не выдаются — обычные подарки,
          Stars и Premium продолжают работать. Что изменилось и как всё же получить коллекционный подарок —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">в отдельной статье</Link>.
        </p>
      </Notice>
      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

function EnAnswer() {
  return (
    <p>
      A <strong>collectible (NFT) Telegram gift</strong> is acquired inside Telegram — either by upgrading a regular
      gift you own, or by buying one that is listed for resale. Sold-out collectibles are{" "}
      <strong>not currently delivered through the bot</strong>; regular gifts, Stars and Premium still are.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <Notice label="Updated — September 2026">
        <p>
          Sold-out <b>collectible (NFT) gifts</b> are not delivered through the bot at the moment — regular
          gifts, Stars and Premium keep working. What changed, and the route that does still work, is in{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">a separate article</Link>.
        </p>
      </Notice>
      <Toc label="Contents" items={[{ href: "#qayerdan", label: "Where to get one" }, { href: "#tolov", label: "Payment" }]} />
      <h2 id="qayerdan">Where a collectible gift comes from</h2>
      <Steps>
        <Step title="Upgrade a regular gift">
          The documented route: buy a regular upgradable gift, then raise it to collectible inside Telegram. The
          upgrade is paid for in Stars.
        </Step>
        <Step title="Buy one listed for resale">
          Copies already owned by someone can be listed. Availability and price depend entirely on the market.
        </Step>
        <Step title="Receive one as a gift">Someone can send a gift already upgraded.</Step>
      </Steps>
      <h2 id="tolov">Paying in so&lsquo;m</h2>
      <p>
        Regular gifts and Stars are bought in so&lsquo;m — UzCard, HUMO, Click, Payme, Uzum or Paynet — with no
        international card. Since the upgrade route needs Stars, that is where to start:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Stars in so&lsquo;m</Link> and{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">the collectible upgrade guide</Link>.
      </p>
      <InlineCta text="Buy Stars in so\u2018m and upgrade the gift yourself." product={{ kind: "stars", amount: 100 }} />
      <p>
        Background reading: <Link href="/blog/telegram-nft-gift-nima">what an NFT Gift is</Link> and{" "}
        <Link href="/blog/telegram-gift-price">what its price depends on</Link>.
      </p>
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  { question: "Qayerdan NFT olish mumkin?", answer: "StarsPaymee Gift Market yoki Telegram ichida Stars bilan gift." },
  { question: "Qanday to‘lov qilinadi?", answer: "So‘mda: UzCard, HUMO, Click, Payme, Paynet." },
  { question: "Stars kerakmi?", answer: "Ba’zi xaridlar Stars balansini talab qiladi — botda to‘ldirasiz." },
  { question: "Telegram Premium kerakmi?", answer: "NFT gift uchun shart emas." },
  { question: "O‘zbekistonda mumkinmi?", answer: "Ha, telegram nft uzbekistan bo‘yicha mahalliy to‘lov." },
];

const faqRu = [
  { question: "Где купить?", answer: "Gift Market в @StarsPaymee_bot." },
  { question: "Оплата?", answer: "В сумах, карты Узбекистана." },
];

const faqEn = [
  { question: "Can I buy a collectible gift through the bot?", answer: "Not at the moment. Regular gifts, Stars and Premium work as before." },
  { question: "So how do I get one?", answer: "Buy Stars, get a regular upgradable gift, and upgrade it inside Telegram." },
  { question: "How is it paid for?", answer: "In so\u2018m: UzCard, HUMO, Click, Payme, Uzum or Paynet. No foreign card." },
  { question: "Are Stars required?", answer: "Yes — upgrading a gift to collectible is paid for in Stars." },
  { question: "Is Telegram Premium needed?", answer: "No, Premium is not required to own a collectible gift." },
  { question: "Can any gift be upgraded?", answer: "No. The gift card shows whether the upgrade option exists." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: ["telegram nft sotib olish", "telegram gift sotib olish", "telegram nft uzbekistan", "telegram gifts market"],
  locales: {
    uz: {
      title: "Telegram NFT Gift sotib olish — O‘zbekiston 2026",
      excerpt: "Gift Market, to‘lov usullari, Stars va Premium talablari.",
      metaTitle: "Telegram NFT Gift sotib olish | 2026",
      metaDescription: "Telegram NFT gift qayerdan sotib olinadi, to‘lov so‘mda, Stars kerakmi? FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xarid",
      ctaBody: "Gift Market — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Купить Telegram NFT Gift — 2026",
      excerpt: "Gift Market и оплата в сумах.",
      metaTitle: "Купить Telegram NFT Gift | 2026",
      metaDescription: "Где купить NFT gift, оплата, Stars. FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
    en: {
      title: "How to get a Telegram collectible (NFT) gift",
      excerpt: "What changed with bot delivery, the two routes that still work and how paying in so\u2018m fits in.",
      metaTitle: "Get a Telegram NFT Gift | 2026",
      metaDescription: "How to obtain a Telegram collectible gift: upgrading a regular gift with Stars or buying a resale copy, and what the bot still delivers.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start with Stars",
      ctaBody: "@StarsPaymee_bot — Stars and regular gifts, paid in so\u2018m.",
      faq: faqEn,
    },
  },
};
