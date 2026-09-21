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
      savdo qilish imkonini beradi. O‘zbekistonda <strong>@StarsPaymee_bot Gift Market</strong>da narxlar{" "}
      <strong>so‘mda</strong> ko‘rsatiladi.
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
          { href: "#market", label: "Gift Market (so‘m)" },
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
          <b>Gift Market</b> — sotib olish/sotish interfeysi (StarsPaymee’da so‘mda)
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
        collectible upgrade. Kolleksiya mavzusi:{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">rare sovg‘alar</Link>.
      </p>

      <h2 id="market">Gift Market qanday ko‘rinadi? (so‘mda)</h2>
      <p>
        StarsPaymee Mini App ichidagi <strong>Gift Market</strong>da kolleksiyalar (masalan, LibertyFigure, MoodPack),
        «Yangi / Arzon / Qimmat / Sotuvda» saralash va <strong>so‘mdagi narx</strong> ko‘rsatiladi. Masalan, tanlangan
        Liberty Figure atrofida <strong>220 000 so‘m</strong>, backpack modellari <strong>194 000–195 000 so‘m</strong>{" "}
        atrofida bo‘lishi mumkin — joriy ro‘yxat botda yangilanadi.
      </p>
      <NftGiftMarketBoard locale="uz" />
      <InlineCta text="Yulduz oling va sovg‘ani o‘zingiz collectible darajasiga ko‘taring." product={{ kind: "stars", amount: 100 }} />

      <h2 id="limited">Limited Edition nima?</h2>
      <p>
        <strong>Limited Edition Telegram Gifts</strong> — ma’lum miqdorda chiqarilgan sovg‘a seriyasi. Tiraj tugagach
        yangi nusxa olish qiyinlashadi, shuning uchun narx o‘sishi mumkin (kafolat emas). Batafsil:{" "}
        <Link href="/blog/telegram-nft-gift-nima">Limited Edition maqolasi</Link>.
      </p>

      <h2 id="holat">Hozir kolleksion sovg‘a qanday olinadi?</h2>
      <p>
        Bu yerda aniq bo‘lish muhim: <b>@StarsPaymee_bot orqali sotuvdan tugagan kolleksion sovg‘alar
        yetkazilmaydi</b>. Botda oddiy sovg‘alar, yulduzlar va Premium avvalgidek ishlaydi. Kolleksion sovg‘aga
        ega bo‘lishning ishlaydigan yo‘li ikki qadamli: botdan yulduz olasiz, keyin Telegram ichida oddiy sovg‘ani
        collectible darajasiga ko‘tarasiz. Batafsil —{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">nima o‘zgardi</Link> va{" "}
        upgrade qo‘llanmasi.
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
      возможностью перепродажи на Gift Market. В <strong>@StarsPaymee_bot</strong> цены указаны в <strong>сумах</strong>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2>Что это такое?</h2>
      <p>
        Отличие обычного подарка и collectible — в{" "}
        upgrade. Примеры цен в сумах — на доске ниже.
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
  { question: "Telegram NFT qanday olinadi?", answer: "Stars bilan gift olish, upgrade yoki Gift Marketdan sotib olish — botda so‘mda." },
  { question: "Limited Edition nima?", answer: "Cheklangan sonli chiqarilgan sovg‘a seriyasi — tiraj tugasa qimmatlashishi mumkin." },
  { question: "Telegram NFT ni sotish mumkinmi?", answer: "Collectible sovg‘alar Gift Market yoki TON bozorlarida qayta sotilishi mumkin." },
  { question: "StarsPaymee orqali NFT olish mumkinmi?", answer: "Ha — Gift Market bo‘limida kolleksion giftlar so‘mda ro‘yxatda." },
  { question: "Stars kerakmi?", answer: "Telegram ichida asl xarid ko‘pincha Stars bilan; market balansi botda so‘m bo‘lishi mumkin." },
  { question: "Telegram Premium kerakmi?", answer: "NFT gift uchun shart emas; Premium boshqa imtiyozlar uchun." },
];

const FAQ_RU = [
  { question: "Что такое Telegram NFT Gift?", answer: "Коллекционный подарок Telegram с ограниченным тиражом." },
  { question: "Можно ли купить через StarsPaymee?", answer: "Да, в Gift Market в сумах." },
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
        the collectible upgrade guide. On collecting:{" "}
        rare gifts.
      </p>

      <h2 id="market">What the market looks like</h2>
      <NftGiftMarketBoard locale="en" />
      <p>
        Prices shift with demand, so treat any listing as a snapshot. What drives the differences is covered in{" "}
        <Link href="/blog/telegram-gift-price">why two similar gifts cost differently</Link>.
      </p>

      <h2 id="limited">Limited Edition</h2>
      <p>
        A capped run is what creates scarcity — but scarcity alone guarantees nothing. See{" "}
        <Link href="/blog/telegram-nft-gift-nima">Limited Edition gifts</Link> and, before treating any of
        this as an investment, <Link href="/blog/telegram-nft-investitsiya">the risks</Link>.
      </p>

      <InlineCta text="Buy Stars in so\u2018m and upgrade a gift yourself." product={{ kind: "stars", amount: 100 }} />

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
  { question: "How do I get one?", answer: "Upgrade a regular gift with Stars inside Telegram, or buy a copy listed for resale." },
  { question: "Does rarity guarantee a price rise?", answer: "No. A capped supply helps only while demand holds; prices fall too." },
  { question: "Is Premium required?", answer: "No, Premium is not needed to own a collectible gift." },
  { question: "What is the biggest risk when buying?", answer: "Paying first outside the official flow. Always verify the gift inside Telegram yourself." },
];
export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
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
      ctaHeading: "Yulduzdan boshlang",
      ctaBody: "@StarsPaymee_bot — Stars va oddiy sovg‘alar so‘mda; kolleksion nusxani Telegram ichida upgrade bilan olasiz.",
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
      ctaHeading: "Начните со звёзд",
      ctaBody: "@StarsPaymee_bot — Stars и обычные подарки в сумах; коллекционный экземпляр делается через upgrade в Telegram.",
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
      ctaHeading: "Start with Stars",
      ctaBody: "@StarsPaymee_bot — Stars and gifts, paid in so\u2018m.",
      faq: faqEn,
    },
  },
};
