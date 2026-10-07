import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { CompareTable, InlineCta, KeyFacts, No, Sources, Toc, Yes } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-gift-nima";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram NFT Gift</strong> — Telegram ichidagi <strong>kolleksion (collectible) raqamli sovg‘a</strong>:
      cheklangan tiraj, noyob model va ba’zan blockchain (TON) bilan bog‘langan aktiv. Oddiy gift faqat profilda
      ko‘rinadi; NFT/collectible versiyasi esa <strong>Limited Edition</strong>, qayta sotish va Gift Market orqali
      savdo qilish imkonini beradi. O‘zbekistonda <strong>@StarsPaymee_bot</strong>’dagi{" "}
      <strong>NFT Market</strong>da sotuvdagi kolleksion nusxani <strong>so‘mda</strong>, 300 000 so‘mgacha
      sotib olish mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "NFT Gift tushunchasi" },
          { href: "#farq", label: "Oddiy gift vs NFT" },
          { href: "#market", label: "NFT Market (so‘m)" },
          { href: "#limited", label: "Limited Edition" },
          { href: "#xavf", label: "Xavfsizlik" },
          { href: "#seriya", label: "10 ta blog" },
        ]}
      />
      <h2 id="nima">Telegram NFT Gift nima?</h2>
      <p>
        Telegram <strong>Gifts</strong> — Stars evaziga yuboriladigan raqamli sovg‘alar. Ba’zilari keyinchalik{" "}
        <strong>collectible</strong> darajaga ko‘tariladi: raqamlangan nusxa (masalan, 1000 tadan 47-si), noyob fon va
        model. Jamiyatda bular «<strong>Telegram NFT Gift</strong>» deb ham ataladi, chunki ular cheklangan zaxira va
        ikkilamchi bozor (Fragment, Gift Market) orqali qayta sotiladi — xuddi raqamli kolleksiya kabi.
      </p>
      <KeyFacts label="Asosiy atamalar">
        <li>
          <b>Telegram Gift</b> — profil sovg‘asi, Stars bilan sotib olinadi
        </li>
        <li>
          <b>Collectible / NFT Gift</b> — noyob, uzatiladigan, bozorda narxi bo‘ladi
        </li>
        <li>
          <b>NFT Market</b> — StarsPaymee’da so‘mda sotib olish bo‘limi (o‘z sovg‘angizni sotish — Telegram
          ichidagi bozor yoki Fragment’da)
        </li>
        <li>
          <b>Limited Edition</b> — cheklangan tirajli chiqarish
        </li>
      </KeyFacts>

      <h2 id="farq">Oddiy gift va NFT gift farqi</h2>
      <CompareTable
        headers={["Xususiyat", "Oddiy gift", "Collectible / NFT gift"]}
        rows={[
          ["Noyoblik", "Standart ko‘rinish", "Raqam + noyob atributlar"],
          ["Qayta sotish", <No key="1" />, <Yes key="2" />],
          ["Bozor narxi", "Sabit emas", "Talabga qarab o‘zgaradi"],
          ["Limited Edition", "Kamdan-kam", "Ko‘pincha ha"],
        ]}
      />
      <p>
        Upgrade jarayoni:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">collectible upgrade</Link>. Kolleksiya mavzusi:{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">rare sovg‘alar</Link>.
      </p>

      <h2 id="market">NFT Market qanday ko‘rinadi? (so‘mda)</h2>
      <p>
        StarsPaymee Mini App’dagi <strong>NFT Market</strong>da sotuvdagi kolleksion nusxalar kolleksiya, model,
        belgi va fon bo‘yicha filtrlanadi, «Arzon / Qimmat / Yangi / Raqam» bo‘yicha saralanadi va narx{" "}
        <strong>so‘mda</strong> ko‘rsatiladi. 300 000 so‘mgacha bo‘lgan e’lonni sotib olish mumkin; narx TON
        kursiga qarab o‘zgaradi. Quyidagi kartochkalar — namuna. Xarid tartibi —{" "}
        <Link href="/blog/starspaymee-nft-market">NFT Market qo‘llanmasida</Link>.
      </p>
      <NftGiftMarketBoard locale="uz" />
      <InlineCta text="Botdagi NFT Market’da kolleksion sovg‘ani so‘mda oling — 300 000 so‘mgacha." />

      <h2 id="limited">Limited Edition nima?</h2>
      <p>
        <strong>Limited Edition Telegram Gifts</strong> — ma’lum miqdorda chiqarilgan sovg‘a seriyasi. Tiraj tugagach
        yangi nusxa olish qiyinlashadi, shuning uchun narx o‘sishi mumkin (kafolat emas). Batafsil:{" "}
        <Link href="/blog/telegram-nft-gift-nima">Limited Edition maqolasi</Link>.
      </p>

      <h2 id="holat">Hozir kolleksion sovg‘a qanday olinadi?</h2>
      <p>
        Uch yo‘l bor. <Link href="/blog/starspaymee-nft-market">NFT Market</Link> — @StarsPaymee_bot’da
        sotuvdagi kolleksion nusxani 300 000 so‘mgacha sotib olasiz (UzCard/HUMO kartaga o‘tkazma yoki balans;
        xarid tasdiqlangach admin uni @username’ingizga o‘tkazadi).{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">NFT ijarasi</Link> — kolleksion sovg‘ani muddatga olasiz.{" "}
        <b>Upgrade</b> — Telegram ichida, kartochkasida shu imkoniyat bor sovg‘ani yulduz evaziga ko‘tarasiz.
        Faqat Telegram sotuvdan olib tashlagan limited sovg‘ani bot yangi holda yubora olmaydi — batafsil:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">nima o‘zgardi</Link>.
      </p>

      <h2 id="xavf">Xavfsizlik va realistik kutish</h2>
      <p>
        Har qanday <strong>Telegram digital collectible</strong> bozori beqaror bo‘lishi mumkin. Faqat ishonchli bot
        va rasmiy Telegram qoidalariga amal qiling. Stars kerak bo‘lsa:{" "}
        <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars qayerdan olish</Link>, sovg‘a yuborish:{" "}
        <Link href="/gifts">/gifts</Link>.
      </p>

      <h2 id="seriya">10 ta NFT blog seriyasi</h2>
      <NftGiftSeriesNav locale="uz" />

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Gifts yangilanishlari" },
          { href: "https://fragment.com", label: "fragment.com", note: "rasmiy aktivlar bozori" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      <strong>Telegram NFT Gift</strong> — коллекционный цифровой подарок в Telegram с ограниченным тиражом и
      возможностью перепродажи на Gift Market. В <strong>NFT Market</strong> @StarsPaymee_bot выставленный
      экземпляр можно купить в <strong>сумах</strong> — до 300 000 сумов.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2>Что это такое?</h2>
      <p>
        Отличие обычного подарка и collectible — в{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">upgrade</Link>. Готовый коллекционный экземпляр
        можно купить в <Link href="/blog/starspaymee-nft-market">NFT Market</Link> бота (до 300 000 сумов, картой
        или с баланса) или взять в <Link href="/blog/telegram-nft-sovga-ijarasi">аренду</Link> на срок. Примеры
        цен в сумах — на доске ниже.
      </p>
      <NftGiftMarketBoard locale="ru" />
      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

const FAQ_UZ = [
  { question: "Telegram NFT Gift nima?", answer: "Kolleksion, cheklangan tirajli Telegram sovg‘asi — noyob raqam va atributlar, bozorda savdo qilinishi mumkin." },
  { question: "Oddiy gift va NFT gift farqi nima?", answer: "Oddiy gift odatda qayta sotilmaydi; collectible/NFT versiyasi Gift Market yoki Fragment orqali savdo qilinadi." },
  { question: "NFT gift qimmatlashadimi?", answer: "Talab, tiraj va noyoblikka qarab narx o‘zgarishi mumkin — investitsiya kafolati yo‘q." },
  { question: "Telegram NFT xavfsizmi?", answer: "Rasmiy Telegram va ishonchli bot orqali ishlang; shubhali «arzon NFT» reklamalaridan saqlaning." },
  {
    question: "Telegram NFT qanday olinadi?",
    answer:
      "Uch yo‘l: @StarsPaymee_bot’dagi NFT Market’dan so‘mda sotib olish (300 000 so‘mgacha), NFT ijarasi yoki Telegram ichida upgrade imkoniyati bor sovg‘ani yulduz evaziga ko‘tarish.",
  },
  { question: "Limited Edition nima?", answer: "Cheklangan sonli chiqarilgan sovg‘a seriyasi — tiraj tugasa qimmatlashishi mumkin." },
  {
    question: "Telegram NFT ni sotish mumkinmi?",
    answer:
      "Collectible sovg‘alar Telegram ichidagi bozorda, Fragment yoki TON marketpleyslarida qayta sotilishi mumkin. @StarsPaymee_bot sovg‘a sotib olmaydi — uning NFT Market’i faqat xarid uchun.",
  },
  {
    question: "StarsPaymee orqali NFT olish mumkinmi?",
    answer:
      "Ha — NFT Market bo‘limida sotuvdagi kolleksion nusxani so‘mda, 300 000 so‘mgacha sotib olasiz; to‘lov karta yoki balans orqali.",
  },
  {
    question: "Stars kerakmi?",
    answer:
      "NFT Market’da Stars kerak emas — narx so‘mda. Telegram ichida sovg‘a olish yoki upgrade qilish uchun esa Stars kerak.",
  },
  { question: "Telegram Premium kerakmi?", answer: "NFT gift uchun shart emas; Premium boshqa imtiyozlar uchun." },
];

const FAQ_RU = [
  { question: "Что такое Telegram NFT Gift?", answer: "Коллекционный подарок Telegram с ограниченным тиражом." },
  {
    question: "Можно ли купить через StarsPaymee?",
    answer: "Да — в NFT Market бота, в сумах, до 300 000 сумов; оплата картой или с баланса.",
  },
  { question: "Это инвестиция?", answer: "Нет гарантии роста цены — только коллекционный интерес." },
];

function EnAnswer() {
  return (
    <p>
      A <strong>Telegram NFT Gift</strong> is a <strong>collectible</strong> digital gift inside Telegram: a capped
      run, a numbered copy and unique attributes, anchored on the TON blockchain. An ordinary gift only shows on a
      profile; a collectible can be transferred, listed and traded — which is why people call it an NFT gift.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What it is" },
          { href: "#farq", label: "Regular vs collectible" },
          { href: "#market", label: "The market" },
          { href: "#limited", label: "Limited Edition" },
          { href: "#xavf", label: "Safety" },
        ]}
      />
      <h2 id="nima">What a Telegram NFT Gift is</h2>
      <p>
        Telegram <strong>Gifts</strong> are digital presents sent for Stars. Some can later be raised to{" "}
        <strong>collectible</strong> status: a numbered copy (say 47 of 1000) with its own model, backdrop and
        symbol. Because the supply is capped and copies change hands on a secondary market, they are commonly
        called <strong>NFT gifts</strong>.
      </p>
      <KeyFacts label="The terms">
        <li>
          <b>Telegram Gift</b> — a profile gift, bought with Stars
        </li>
        <li>
          <b>Collectible / NFT Gift</b> — unique, transferable, with a market price
        </li>
        <li>
          <b>Gift Market</b> — where copies are listed and traded
        </li>
        <li>
          <b>Limited Edition</b> — released in a capped run
        </li>
      </KeyFacts>

      <h2 id="farq">Regular gift versus collectible</h2>
      <CompareTable
        headers={["Property", "Regular gift", "Collectible / NFT gift"]}
        rows={[
          ["Uniqueness", "Standard appearance", "A number plus unique attributes"],
          ["Resale", <No key="1" />, <Yes key="2" />],
          ["Market price", "Not applicable", "Moves with demand"],
          ["Limited Edition", "Rarely", "Often"],
        ]}
      />
      <p>
        How the upgrade works:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">the collectible upgrade guide</Link>.
      </p>

      <h2 id="market">What the market looks like</h2>
      <NftGiftMarketBoard locale="en" />
      <p>
        In @StarsPaymee_bot, listed copies are bought in the{" "}
        <Link href="/blog/starspaymee-nft-market">NFT Market</Link> for up to 300,000 so‘m (card transfer or
        balance), and a collectible can also be taken on{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">rental</Link> for a set term. Prices shift with demand, so
        treat any listing as a snapshot. What drives the differences is covered in{" "}
        <Link href="/blog/telegram-gift-price">why two similar gifts cost differently</Link>.
      </p>

      <h2 id="limited">Limited Edition</h2>
      <p>
        A capped run is what creates scarcity — but scarcity alone guarantees nothing. See{" "}
        <Link href="/blog/telegram-nft-gift-nima">Limited Edition gifts</Link> and, before treating any of
        this as an investment, <Link href="/blog/telegram-nft-investitsiya">the risks</Link>.
      </p>

      <InlineCta text="Need Stars to upgrade a gift that offers it? Buy them in so‘m." product={{ kind: "stars", amount: 100 }} />

      <h2 id="xavf">Safety</h2>
      <KeyFacts label="Before any deal">
        <li>Telegram never asks for a password or login code over a gift.</li>
        <li>A screenshot proves nothing — find the gift in Telegram yourself.</li>
        <li>&laquo;Send first, I pay after&raquo; is the most common scam in gift trading.</li>
        <li>A guarantor chosen by the seller is not a guarantor.</li>
      </KeyFacts>
      <p>
        The full checklist is in{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">checking a gift link before buying</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gifts documentation" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "telegram.org/blog", note: "the collectible gifts announcement" },
        ]}
      />
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqEn = [
  { question: "What is a Telegram NFT Gift?", answer: "A collectible gift with a capped run, a numbered copy and unique attributes, anchored on TON." },
  { question: "How does it differ from a regular gift?", answer: "A collectible can be transferred, listed and traded; a regular gift cannot." },
  {
    question: "How do I get one?",
    answer:
      "Buy a listed copy in the @StarsPaymee_bot NFT Market (in so‘m, up to 300,000 so‘m), rent one for a term, or upgrade a gift that offers it with Stars inside Telegram.",
  },
  { question: "Does rarity guarantee a price rise?", answer: "No. A capped supply helps only while demand holds; prices fall too." },
  { question: "Is Premium required?", answer: "No, Premium is not needed to own a collectible gift." },
  { question: "What is the biggest risk when buying?", answer: "Paying first outside the official flow. Always verify the gift inside Telegram yourself." },
];
export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-29",
  dateModified: "2026-10-06",
  keywords: [
    "telegram nft",
    "telegram nft gift",
    "limited edition telegram gifts",
    "telegram nft market",
    "telegram nft gifts kelajagi",
    "telegram gift",
    "nft gift",
    "telegram collectible",
    "telegram gift market",
    "limited gift",
    "telegram digital gift",
    "telegram marketplace",
    "telegram nft uzbekistan",
  ],
  locales: {
    uz: {
      title: "Telegram NFT Gift nima? Limited Edition sovg‘alar — to‘liq qo‘llanma",
      excerpt:
        "Telegram NFT Gift va collectible sovg‘alar: oddiy giftdan farqi, Gift Market (so‘m), Limited Edition, xavfsizlik va FAQ.",
      metaTitle: "Telegram NFT Gift nima? | Limited Edition 2026",
      metaDescription:
        "Telegram NFT Gift nima, qanday ishlaydi, qanday sotib olinadi va nima uchun qimmat? Gift Market so‘mda. Batafsil qo‘llanma va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "NFT sovg‘ani so‘mda oling",
      ctaBody: "@StarsPaymee_bot — NFT Market (kolleksion sovg‘a so‘mda, 300 000 so‘mgacha), NFT ijarasi, Stars va oddiy sovg‘alar.",
      faq: FAQ_UZ,
    },
    ru: {
      title: "Что такое Telegram NFT Gift? Полный гайд",
      excerpt: "Collectible подарки, Gift Market в сумах, Limited Edition.",
      metaTitle: "Telegram NFT Gift — что это? | 2026",
      metaDescription: "Что такое Telegram NFT Gift, как купить, Limited Edition и Gift Market в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "NFT-подарок в сумах",
      ctaBody: "@StarsPaymee_bot — NFT Market (коллекционный подарок в сумах, до 300 000 сумов), аренда NFT, Stars и обычные подарки.",
      faq: FAQ_RU,
    },
    en: {
      title: "What is a Telegram NFT Gift?",
      excerpt: "Collectibles explained: capped runs, numbered copies, how they differ from regular gifts and what to check before buying.",
      metaTitle: "What is a Telegram NFT Gift | 2026",
      metaDescription: "Telegram NFT gifts explained: collectible status, limited runs, how they differ from ordinary gifts, the market and safety checks.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get an NFT gift in so\u2018m",
      ctaBody: "@StarsPaymee_bot — NFT Market (collectible gifts in so\u2018m, up to 300,000 so\u2018m), NFT rental, Stars and regular gifts.",
      faq: faqEn,
    },
  },
};
