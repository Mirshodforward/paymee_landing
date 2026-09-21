import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { KeyFacts, Notice, Step, Steps } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-sotish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Sotish faqat <strong>collectible</strong> darajasiga ko‘tarilgan sovg‘alarga tegishli: ular noyob raqam va
      atributga ega bo‘lgani uchun boshqa foydalanuvchiga uzatiladi. Savdo Telegramning o‘z bozorida yoki Fragment’da,
      odatda <strong>TON</strong> evaziga kechadi. Oddiy sovg‘a sotilmaydi — uni faqat Stars’ga qaytarish mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Xizmat holati — yangilandi 2026-yil sentabr">
        @StarsPaymee_bot orqali sotuvdan tugagan kolleksion sovg‘alar yetkazilmaydi, demak bot sotuvchi balansini
        ham yuritmaydi. Sotish Telegram ichidagi bozorda yoki Fragment’da amalga oshiriladi. Batafsil:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">nima o‘zgardi</Link>.
      </Notice>

      <h2 id="qaysi">Qaysi sovg‘ani sotish mumkin?</h2>
      <p>
        Sotuv imkoniyati <b>upgrade qilingan (collectible)</b> sovg‘alarga tegishli — ular noyob raqam va
        atributlarga ega, shuning uchun boshqa akkauntga uzatilishi mumkin. Oddiy sovg‘ani to‘g‘ridan-to‘g‘ri sotish
        odatiy emas: uni Stars’ga qaytarish (convert) mumkin — farqi{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Gift’ni Stars’ga aylantirish»</Link> maqolasida.
        Sovg‘ani collectible darajasiga qanday ko‘tarish esa{" "}
        upgrade qo‘llanmasida.
      </p>

      <h2 id="qayerda">Qayerda sotiladi?</h2>
      <p>
        Collectible sovg‘alar uchun asosiy savdo maydoni — <b>Fragment</b>, Telegramning TON asosidagi rasmiy
        platformasi, hamda Telegram ichidagi gift bozori. U yerda sovg‘ani ro‘yxatga qo‘yasiz, narx belgilaysiz va
        xaridor topilganda TON hamyoningizga tushadi.
      </p>

      <h2 id="bosqichlar">Sotish bosqichlari</h2>
      <Steps>
        <Step title="1. Collectible ekanini tekshiring">
          Faqat upgrade qilingan sovg‘a sotuvga qo‘yiladi — buni sovg‘a kartochkasidan ko‘rasiz.
        </Step>
        <Step title="2. Sanani tekshiring">
          Ba’zi sovg‘alarda eng erta qayta sotish sanasi bo‘ladi; u ham kartochkada ko‘rsatiladi.
        </Step>
        <Step title="3. Bozorni oching">Fragment yoki Telegram ichidagi gift bozoriga o‘ting.</Step>
        <Step title="4. Narx belgilang">
          Bir xil model, fon va belgiga ega nusxalarning joriy narxiga qarab summani kiriting.
        </Step>
        <Step title="5. Komissiyani hisobga oling">
          Qayta sotishda platforma haqi ushlanadi, ya’ni qo‘lga tegadigan summa ro‘yxatdagi narxdan past bo‘ladi.
        </Step>
      </Steps>

      <h2 id="narx">Narxni qanday belgilash kerak?</h2>
      <KeyFacts label="Uch mezon">
        <li>
          <b>O‘xshash nusxalarni solishtiring</b> — bir xil turdagi collectible’larning joriy bozor narxi asosiy
          mo‘ljal.
        </li>
        <li>
          <b>Raqam va noyoblik</b> — past raqamli yoki kam uchraydigan atribut kombinatsiyasi qimmatroq turadi.
        </li>
        <li>
          <b>Bozor holati</b> — TON kursi va umumiy talab narxga bevosita ta’sir qiladi.
        </li>
      </KeyFacts>
      <p>
        Nega bir xil ko‘ringan ikki sovg‘a turli narxda turishi{" "}
        <Link href="/blog/telegram-gift-price">alohida maqolada</Link> yozilgan. Sotuvga qo‘yib bo‘lmasa yoki
        xaridor chiqmasa — sabablari{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">«Gift sotilmayapti»</Link> maqolasida.
      </p>

      <h2 id="xavf">E’tiborga olish kerak bo‘lgan risklar</h2>
      <ul>
        <li>Narx beqaror: raqamli kolleksiya bozori tez o‘zgaradi, bu investitsiya kafolati emas.</li>
        <li>TON hamyoni kerak — sotuvdan tushgan mablag‘ o‘sha yerga keladi.</li>
        <li>Faqat rasmiy bozordan foydalaning: shaxsiy yozishmadagi «xaridor»lar ko‘pincha firibgar bo‘ladi.</li>
      </ul>

      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Продавать можно только подарки, поднятые до уровня <strong>collectible</strong>: у них есть номер и атрибуты,
      поэтому они передаются другому аккаунту. Сделка проходит на внутреннем рынке Telegram или на Fragment, обычно
      за <strong>TON</strong>. Обычный подарок не продаётся — его можно только вернуть в Stars.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Notice label="Статус услуги — обновлено в сентябре 2026">
        Через @StarsPaymee_bot коллекционные подарки больше не доставляются, поэтому бот не ведёт и баланс продавца.
        Продажа происходит на рынке внутри Telegram или на Fragment. Подробнее:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">что изменилось</Link>.
      </Notice>

      <h2 id="qaysi">Какой подарок можно продать?</h2>
      <p>
        Продажа возможна для <b>улучшенных (collectible)</b> подарков — у них есть номер и атрибуты, поэтому их можно
        передать другому аккаунту. Обычный подарок напрямую не продают: его можно конвертировать обратно в Stars —
        разница описана в{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Конвертация подарка в Stars»</Link>. Как поднять
        подарок до collectible — в{" "}
        руководстве по upgrade.
      </p>

      <h2 id="qayerda">Где продают?</h2>
      <p>
        Основная площадка для коллекционных подарков — <b>Fragment</b>, официальная платформа Telegram на TON, а
        также рынок подарков внутри Telegram. Там подарок выставляют, назначают цену, и при покупке средства
        поступают в TON-кошелёк.
      </p>

      <h2 id="bosqichlar">Шаги продажи</h2>
      <Steps>
        <Step title="1. Проверьте, что подарок collectible">
          К продаже принимаются только улучшенные подарки — это видно на карточке подарка.
        </Step>
        <Step title="2. Проверьте дату">
          У части подарков есть самая ранняя дата перепродажи; она тоже указана на карточке.
        </Step>
        <Step title="3. Откройте рынок">Перейдите на Fragment или во внутренний рынок подарков Telegram.</Step>
        <Step title="4. Назначьте цену">
          Ориентируйтесь на текущие цены копий с той же моделью, фоном и символом.
        </Step>
        <Step title="5. Учтите комиссию">
          При перепродаже удерживается комиссия площадки, поэтому на руки приходит меньше указанной цены.
        </Step>
      </Steps>

      <h2 id="narx">Как назначить цену?</h2>
      <KeyFacts label="Три критерия">
        <li>
          <b>Сравните похожие копии</b> — текущая рыночная цена таких же collectible и есть главный ориентир.
        </li>
        <li>
          <b>Номер и редкость</b> — низкий номер или редкое сочетание атрибутов стоят дороже.
        </li>
        <li>
          <b>Состояние рынка</b> — курс TON и общий спрос напрямую влияют на цену.
        </li>
      </KeyFacts>
      <p>
        Почему два внешне похожих подарка стоят по-разному —{" "}
        <Link href="/blog/telegram-gift-price">в отдельной статье</Link>. Если выставить не получается или покупателя
        нет — причины в{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">«Подарок не продаётся»</Link>.
      </p>

      <h2 id="xavf">Риски, о которых стоит знать</h2>
      <ul>
        <li>Цена нестабильна: рынок цифровых коллекций быстро меняется, это не гарантия дохода.</li>
        <li>Нужен TON-кошелёк — деньги от продажи приходят туда.</li>
        <li>Пользуйтесь только официальной площадкой: «покупатели» из личных сообщений часто оказываются мошенниками.</li>
      </ul>

      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Selling applies only to gifts upgraded to <strong>collectible</strong>: they carry a number and attributes, so
      they can be transferred to another account. The trade happens on Telegram&rsquo;s own market or on Fragment,
      usually for <strong>TON</strong>. An ordinary gift cannot be resold — it can only be converted back to Stars.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Notice label="Service status — updated September 2026">
        @StarsPaymee_bot no longer delivers sold-out collectible gifts, so it does not keep a seller balance either.
        Selling happens on the market inside Telegram or on Fragment. More:{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">what changed</Link>.
      </Notice>

      <h2 id="qaysi">Which gifts can be sold?</h2>
      <p>
        Only <b>upgraded (collectible)</b> gifts can be sold — they carry a number and attributes, so they can move
        to another account. Ordinary gifts are not resold; they can be converted back into Stars, as described in{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">converting a gift to Stars</Link>. Upgrading is covered
        in the upgrade guide.
      </p>

      <h2 id="bosqichlar">How to sell</h2>
      <Steps>
        <Step title="1. Check it is collectible">Ordinary gifts cannot be transferred or resold.</Step>
        <Step title="2. Check the dates">Some gifts carry an earliest resale date — it is shown on the gift card.</Step>
        <Step title="3. Open the market">Go to Fragment or the gift market inside Telegram.</Step>
        <Step title="4. Set a price">Compare with copies that share the same model, backdrop and symbol.</Step>
        <Step title="5. Account for commission">Resale carries a fee, so your net is below the listed price.</Step>
      </Steps>

      <h2 id="xavf">Risks worth knowing</h2>
      <ul>
        <li>Prices are volatile — a digital collectibles market is not an income guarantee.</li>
        <li>You need a TON wallet: proceeds land there.</li>
        <li>Use the official market only; “buyers” in direct messages are frequently scammers.</li>
      </ul>
      <p>
        If the listing does not go through, or nobody buys, the causes are covered in{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">why a gift is not selling</Link>. See also{" "}
        <Link href="/blog/telegram-gift-price">what a gift&rsquo;s price depends on</Link>.
      </p>

      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  {
    question: "Har qanday Telegram sovg‘asini sotsa bo‘ladimi?",
    answer:
      "Yo‘q. Faqat collectible darajasiga ko‘tarilgan sovg‘alar uzatiladi va sotiladi. Oddiy sovg‘ani esa Stars’ga qaytarish mumkin.",
  },
  {
    question: "Sovg‘ani qayerda sotaman?",
    answer:
      "Fragment’da yoki Telegram ichidagi gift bozorida. @StarsPaymee_bot kolleksion sovg‘a savdosini yuritmaydi.",
  },
  {
    question: "Pul qanday ko‘rinishda keladi?",
    answer: "Odatda TON’da, TON hamyoningizga. Shuning uchun sotishdan oldin hamyon tayyor bo‘lishi kerak.",
  },
  {
    question: "Narxni qanday belgilayman?",
    answer:
      "Bir xil model, fon va belgiga ega nusxalarning joriy narxiga qarang; raqam va noyoblik narxni oshiradi.",
  },
  { question: "Komissiya bormi?", answer: "Ha, qayta sotishda platforma haqi ushlanadi — qo‘lga kamroq tegadi." },
  {
    question: "Nega sovg‘amni sotuvga qo‘ya olmayapman?",
    answer: "Sovg‘a collectible bo‘lmasligi yoki eng erta qayta sotish sanasi hali kelmagan bo‘lishi mumkin.",
  },
];

const faqRu = [
  {
    question: "Любой ли подарок Telegram можно продать?",
    answer:
      "Нет. Передаются и продаются только подарки уровня collectible. Обычный подарок можно лишь конвертировать в Stars.",
  },
  {
    question: "Где продать подарок?",
    answer: "На Fragment или на рынке подарков внутри Telegram. @StarsPaymee_bot продажу коллекционных подарков не ведёт.",
  },
  { question: "В чём приходят деньги?", answer: "Обычно в TON, на ваш TON-кошелёк — его стоит завести заранее." },
  {
    question: "Как назначить цену?",
    answer: "Смотрите на текущие цены копий с той же моделью, фоном и символом; номер и редкость повышают цену.",
  },
  { question: "Есть ли комиссия?", answer: "Да, площадка удерживает комиссию, поэтому на руки приходит меньше." },
  {
    question: "Почему не получается выставить подарок?",
    answer: "Подарок может быть не collectible либо ещё не наступила самая ранняя дата перепродажи.",
  },
];

const faqEn = [
  { question: "How do I sell a gift?", answer: "List the collectible on a gift market, or transfer it over TON." },
  { question: "Can ordinary gifts be sold?", answer: "No. They can only be converted back into Stars." },
  { question: "Is there a commission?", answer: "Yes, resale carries a fee, so you receive less than the listed price." },
  { question: "Why can I not list my gift?", answer: "There may be an earliest resale date, or a price limit — check the gift card." },
  { question: "How fast will it sell?", answer: "Nobody can promise that. It depends on demand and on your price." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-26",
  dateModified: "2026-09-18",
  keywords: [
    "telegram gift sell",
    "telegram nft sell",
    "telegram gift marketplace",
    "telegram sovgani sotish",
    "collectible gift sotish",
    "gift narx belgilash",
  ],
  locales: {
    uz: {
      title: "Telegram Gifts sotish — collectible sovg‘ani sotish qo‘llanmasi",
      excerpt:
        "Qaysi sovg‘a sotiladi, qayerda sotiladi, narx qanday belgilanadi va qanday risklar bor — collectible sovg‘alar uchun to‘liq qo‘llanma.",
      metaTitle: "Telegram Gift sotish — qo‘llanma 2026",
      metaDescription:
        "Telegram sovg‘asini sotish: faqat collectible uzatiladi, savdo Fragment yoki Telegram bozorida TON evaziga. Narx belgilash mezonlari va risklar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yangi sovg‘a uchun yulduz kerakmi?",
      ctaBody: "@StarsPaymee_bot — Stars so‘mda, 10 soniyada; sovg‘ani o‘zingiz collectible’ga ko‘tarasiz.",
      faq: faqUz,
    },
    ru: {
      title: "Продажа Telegram Gift — руководство по коллекционным подаркам",
      excerpt:
        "Какой подарок можно продать, где продают, как назначить цену и какие есть риски — полное руководство по collectible.",
      metaTitle: "Продать Telegram Gift — руководство 2026",
      metaDescription:
        "Продажа подарка Telegram: передаются только collectible, сделка на Fragment или рынке Telegram за TON. Критерии цены и риски.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны звёзды для нового подарка?",
      ctaBody: "@StarsPaymee_bot — Stars в сумах за 10 секунд; поднять подарок до collectible вы сможете сами.",
      faq: faqRu,
    },
    en: {
      title: "Selling a Telegram gift — the market guide",
      excerpt: "What can be sold, the resale rules, commission and how to price a copy.",
      metaTitle: "Sell a Telegram Gift | Market 2026",
      metaDescription:
        "How to sell a Telegram gift: collectibles only, resale dates, commission and pricing against comparable copies.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars for a new gift?",
      ctaBody: "@StarsPaymee_bot — Stars in so‘m in 10 seconds; you upgrade the gift to collectible yourself.",
      faq: faqEn,
    },
  },
};
