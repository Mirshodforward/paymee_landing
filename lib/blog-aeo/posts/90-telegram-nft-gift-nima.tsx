import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { CompareTable, InlineCta, KeyFacts, Sources, Toc, Yes, No } from "@/components/blog/aeo-blocks";
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
        <Link href="/blog/telegram-sovgani-collectible-upgrade">collectible upgrade</Link>. Kolleksiya mavzusi:{" "}
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
      <InlineCta text="Gift Marketni oching — @StarsPaymee_bot, to‘lov so‘mda." />

      <h2 id="limited">Limited Edition nima?</h2>
      <p>
        <strong>Limited Edition Telegram Gifts</strong> — ma’lum miqdorda chiqarilgan sovg‘a seriyasi. Tiraj tugagach
        yangi nusxa olish qiyinlashadi, shuning uchun narx o‘sishi mumkin (kafolat emas). Batafsil:{" "}
        <Link href="/blog/limited-edition-telegram-gifts">Limited Edition maqolasi</Link>.
      </p>

      <h2 id="xavf">Xavfsizlik va realistik kutish</h2>
      <p>
        Har qanday <strong>Telegram digital collectible</strong> bozori beqaror bo‘lishi mumkin. Faqat ishonchli bot
        va rasmiy Telegram qoidalariga amal qiling. Stars kerak bo‘lsa:{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">Stars qayerdan olish</Link>, sovg‘a yuborish:{" "}
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
        <Link href="/blog/telegram-sovgani-collectible-upgrade">upgrade</Link>. Примеры цен в сумах — на доске ниже.
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

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: [
    "telegram nft",
    "telegram nft gift",
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
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — kolleksion NFT giftlar, narxlar so‘mda.",
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
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot",
      faq: FAQ_RU,
    },
  },
};
