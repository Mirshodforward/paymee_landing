import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { CompareTable, InfoCard, InfoGrid, KeyFacts, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-price";

/**
 * Solishtirish varaqasi.
 *
 * MUHIM: bu yerda o‘ylab topilgan «Gift A / Gift B» narxlari berilmaydi.
 * Tasdiqlanmagan raqamni misol sifatida chop etish o‘quvchini chalg‘itadi va
 * bir necha haftada eskiradi. Buning o‘rniga — o‘quvchi o‘zi ko‘rib turgan
 * ikkita e’lonni to‘ldiradigan mezonlar ro‘yxati.
 */
function CompareSheet({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Taqqoslanadigan jihat", "Qayerdan olinadi", "Nega muhim"],
      rows: [
        ["Kolleksiya nomi", "Sovg‘a sahifasining sarlavhasi", "Turli kolleksiyani solishtirish ma’nosiz"],
        ["Model", "Sovg‘a xususiyatlari ro‘yxati", "Bir kolleksiya ichida modellar har xil qadrlanadi"],
        ["Fon (backdrop)", "Xususiyatlar ro‘yxati", "Kam uchraydigan fon narxni sezilarli oshiradi"],
        ["Belgi (symbol)", "Xususiyatlar ro‘yxati", "Noyob belgi — asosiy farqlovchi omillardan biri"],
        ["Nusxa raqami", "Sovg‘a nomi yonidagi raqam", "Kichik va «chiroyli» raqamlar alohida qadrlanadi"],
        ["E’lon narxi va sanasi", "Sotuvdagi ro‘yxat", "Narx sanasiz ma’nosiz — bozor tez o‘zgaradi"],
        ["Amalga oshgan savdo", "Faqat dalil bo‘lsa", "So‘ralgan narx emas, sotilgan narx haqiqiy ko‘rsatkich"],
      ],
    },
    ru: {
      headers: ["Что сравниваем", "Откуда берём", "Почему это важно"],
      rows: [
        ["Название коллекции", "Заголовок страницы подарка", "Сравнивать разные коллекции бессмысленно"],
        ["Модель", "Список свойств подарка", "Внутри одной коллекции модели ценятся по-разному"],
        ["Фон (backdrop)", "Список свойств", "Редкий фон заметно поднимает цену"],
        ["Символ", "Список свойств", "Редкий символ — один из главных отличий"],
        ["Номер экземпляра", "Число рядом с названием", "Маленькие и «красивые» номера ценятся отдельно"],
        ["Цена объявления и дата", "Список продающихся", "Цена без даты бессмысленна — рынок быстро меняется"],
        ["Состоявшаяся сделка", "Только при наличии подтверждения", "Показателен не запрос, а фактическая продажа"],
      ],
    },
    en: {
      headers: ["What to compare", "Where to find it", "Why it matters"],
      rows: [
        ["Collection name", "The gift page heading", "Comparing different collections is meaningless"],
        ["Model", "The gift's attribute list", "Models are valued differently within one collection"],
        ["Backdrop", "The attribute list", "A rare backdrop lifts the price noticeably"],
        ["Symbol", "The attribute list", "A rare symbol is one of the main differentiators"],
        ["Copy number", "The number beside the name", "Low and «pretty» numbers carry their own premium"],
        ["Listing price and date", "The for-sale list", "A price without a date is meaningless — the market moves fast"],
        ["Completed sale", "Only where there is proof", "The asking price is not the market; a sale is"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Bir xil ko‘rinadigan ikki sovg‘a har xil narxda turishi normal holat: narx <b>kolleksiya</b>ga emas,{" "}
      <b>aynan shu nusxa</b>ga bog‘liq. Model, fon, belgi va nusxa raqami — asosiy farqlovchi omillar. Shuning
      uchun solishtirishdan oldin ikkala e’londa ham shu to‘rt xususiyatni tekshirish kerak.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#kolleksiya", label: "Bir kolleksiya — bir xil narx emas" },
          { href: "#xususiyat", label: "Model, fon, belgi va raqam" },
          { href: "#varaqa", label: "Solishtirish varaqasi" },
          { href: "#sorlagan", label: "So‘ralgan va sotilgan narx" },
          { href: "#floor", label: "Floor price nima" },
          { href: "#xarid", label: "Xarid paytida nimani taqqoslash kerak" },
        ]}
      />

      <h2 id="kolleksiya">Bir kolleksiya degani bir xil sovg‘a deganimi?</h2>
      <p>
        Yo‘q. Kolleksiya — bu umumiy nom, ichidagi nusxalar esa bir-biridan farq qiladi. Ikki sovg‘a ekranda
        deyarli bir xil ko‘rinishi, lekin xususiyatlari boshqa bo‘lishi mumkin — narx farqi aynan shundan
        kelib chiqadi.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔢" title="Past raqam">
          Kichik seriya raqami alohida qadrlanadi.
        </InfoCard>
        <InfoCard emoji="⏳" title="Kam tiraj">
          Cheklangan chiqarilgan kolleksiyalar.
        </InfoCard>
        <InfoCard emoji="🎨" title="Noyob xususiyat">
          Kam uchraydigan model, fon yoki belgi.
        </InfoCard>
        <InfoCard emoji="💱" title="Joriy talab">
          Bozor kayfiyati va Gift Market talabi.
        </InfoCard>
      </InfoGrid>
      <p>
        Shu bilan birga: <b>noyoblik avtomatik foyda kafolati emas</b>. Talab pasaysa, kam tirajli nusxaning
        narxi ham tushadi.
      </p>

      <h2 id="xususiyat">Model, fon, belgi va raqamni qayerdan ko‘ramiz</h2>
      <p>
        Kolleksion sovg‘aning sahifasida uning xususiyatlari ro‘yxati bo‘ladi. Aynan shu ro‘yxat ikkita nusxani
        farqlaydi:
      </p>
      <KeyFacts label="To‘rt xususiyat">
        <li>
          <b>Model</b> — sovg‘aning asosiy ko‘rinishi; bir kolleksiya ichida bir necha model bo‘lishi mumkin.
        </li>
        <li>
          <b>Fon (backdrop)</b> — orqa fon varianti; kam uchraydiganlari qimmatroq.
        </li>
        <li>
          <b>Belgi (symbol)</b> — sovg‘a ustidagi naqsh yoki belgi.
        </li>
        <li>
          <b>Raqam</b> — nusxaning seriyadagi tartibi, masalan #7/1000.
        </li>
      </KeyFacts>

      <h2 id="varaqa">Solishtirish varaqasi: ikkita e’lonni yonma-yon qo‘ying</h2>
      <p>
        Quyidagi jadval — tayyor javob emas, <b>o‘zingiz to‘ldiradigan varaqa</b>. Ko‘rib turgan ikkita e’lonni
        oching va har bir qator bo‘yicha ularni solishtiring. Biz bu yerda o‘ylab topilgan narx misollarini
        keltirmaymiz: tasdiqlanmagan raqam bir necha haftada eskiradi va noto‘g‘ri qarorga olib keladi.
      </p>
      <CompareSheet locale="uz" />
      <Steps>
        <Step title="1. Ikkala sahifani oching">Har biri uchun kolleksiya va xususiyatlar ro‘yxatini toping.</Step>
        <Step title="2. Qatorma-qator to‘ldiring">Farq qilgan qatorlarni belgilab qo‘ying.</Step>
        <Step title="3. Farqni narx bilan solishtiring">
          Narx farqi qaysi xususiyat bilan izohlanadi? Izoh topilmasa, yuqori narx asossiz bo‘lishi mumkin.
        </Step>
        <Step title="4. Sanani yozib qo‘ying">Narxni har doim ko‘rgan sanangiz bilan birga eslab qoling.</Step>
      </Steps>

      <h2 id="sorlagan">Sotuvchi so‘ragan narx va amalga oshgan savdo — bir xil emas</h2>
      <p>
        E’londagi raqam — bu faqat <b>taklif</b>. U sovg‘a shu narxga sotilishini bildirmaydi. Haqiqiy
        ko‘rsatkich — kimdir shu narxni to‘lab olgan savdo.
      </p>
      <KeyFacts label="Farqni yodda tuting">
        <li>Yuqori so‘ralgan narx bozor narxini oshirmaydi.</li>
        <li>O‘z sovg‘angizni baholashda so‘ralgan narxlarga emas, sotilganlarga tayaning.</li>
        <li>Sotilgan narx haqida dalil bo‘lmasa, uni fakt sifatida qabul qilmang.</li>
      </KeyFacts>

      <h2 id="floor">Floor price nima va uni qanday tushunish kerak</h2>
      <p>
        Floor price — kolleksiyadagi <b>eng past e’lon narxi</b>. Bu o‘rtacha narx ham, «adolatli» narx ham
        emas — shunchaki hozirgi eng arzon taklif.
      </p>
      <InfoGrid>
        <InfoCard emoji="⬇️" title="Bu pastki chegara">
          Kolleksiyaning eng arzon nusxasi, odatda eng oddiy xususiyatlar bilan.
        </InfoCard>
        <InfoCard emoji="⚖️" title="Bu o‘rtacha emas">
          Noyob xususiyatli nusxalar floordan ancha yuqori turishi mumkin.
        </InfoCard>
        <InfoCard emoji="🔄" title="Tez o‘zgaradi">
          Bitta e’lon qo‘shilishi bilan floor ham o‘zgaradi.
        </InfoCard>
        <InfoCard emoji="🎯" title="Qachon foydali">
          O‘z nusxangiz floordan qanchalik yuqori turishini baholash uchun.
        </InfoCard>
      </InfoGrid>

      <h2 id="xarid">Xarid paytida nimalarni taqqoslash kerak</h2>
      <Steps>
        <Step title="1. Kolleksiyani tasdiqlang">Aynan siz izlagan kolleksiyami?</Step>
        <Step title="2. To‘rt xususiyatni o‘qing">Model, fon, belgi va raqam — ular narxni belgilaydi.</Step>
        <Step title="3. Floor bilan solishtiring">
          Narx eng past e’londan qanchalik yuqori va buni nima oqlaydi?
        </Step>
        <Step title="4. Sotuvchini tekshiring">
          Havola va egalikni{" "}
          <Link href="/blog/telegram-gift-havolasini-tekshirish">tekshirish qo‘llanmasi</Link> bo‘yicha ko‘ring.
        </Step>
      </Steps>
      <p>
        Sotishga urinayotgan bo‘lsangiz —{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">«Gift sotilmayapti»</Link> maqolasida komissiya va narx
        chegaralari ham bor. Investitsiya nuqtai nazari —{" "}
        <Link href="/blog/telegram-nft-investitsiya">alohida maqolada</Link>;{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">noyob sovg‘alar ro‘yxati</Link> ham foydali.
      </p>

      <NftGiftSeriesNav locale="uz" />

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "sovg‘a xususiyatlari va qayta sotish" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      То, что два внешне похожих подарка стоят по-разному, — нормально: цена зависит не от <b>коллекции</b>, а от{" "}
      <b>конкретного экземпляра</b>. Модель, фон, символ и номер — главные отличия. Поэтому перед сравнением
      проверьте эти четыре свойства в обоих объявлениях.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#kolleksiya", label: "Одна коллекция — не одна цена" },
          { href: "#xususiyat", label: "Модель, фон, символ, номер" },
          { href: "#varaqa", label: "Лист сравнения" },
          { href: "#sorlagan", label: "Запрошенная и сделочная цена" },
          { href: "#floor", label: "Что такое floor price" },
          { href: "#xarid", label: "Что сравнивать при покупке" },
        ]}
      />

      <h2 id="kolleksiya">Одна коллекция — значит одинаковый подарок?</h2>
      <p>
        Нет. Коллекция — это общее название, а экземпляры внутри неё различаются. Два подарка могут выглядеть на
        экране почти одинаково, но иметь разные свойства — отсюда и разница в цене.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔢" title="Низкий номер">
          Маленький порядковый номер ценится отдельно.
        </InfoCard>
        <InfoCard emoji="⏳" title="Малый тираж">
          Коллекции ограниченного выпуска.
        </InfoCard>
        <InfoCard emoji="🎨" title="Редкое свойство">
          Редко встречающиеся модель, фон или символ.
        </InfoCard>
        <InfoCard emoji="💱" title="Текущий спрос">
          Настроение рынка и спрос на Gift Market.
        </InfoCard>
      </InfoGrid>
      <p>
        При этом: <b>редкость не гарантирует прибыль</b>. Если спрос падает, дешевеет и малотиражный экземпляр.
      </p>

      <h2 id="xususiyat">Где посмотреть модель, фон, символ и номер</h2>
      <p>
        На странице коллекционного подарка есть список его свойств. Именно он и отличает два экземпляра:
      </p>
      <KeyFacts label="Четыре свойства">
        <li>
          <b>Модель</b> — основной вид подарка; внутри коллекции моделей может быть несколько.
        </li>
        <li>
          <b>Фон (backdrop)</b> — вариант фона; редкие стоят дороже.
        </li>
        <li>
          <b>Символ</b> — узор или знак на подарке.
        </li>
        <li>
          <b>Номер</b> — порядок экземпляра в серии, например #7/1000.
        </li>
      </KeyFacts>

      <h2 id="varaqa">Лист сравнения: положите два объявления рядом</h2>
      <p>
        Таблица ниже — не готовый ответ, а <b>лист, который вы заполняете сами</b>. Откройте два объявления,
        которые сравниваете, и пройдите по строкам. Придуманных примеров цен мы здесь не приводим:
        неподтверждённая цифра устаревает за пару недель и ведёт к неверному решению.
      </p>
      <CompareSheet locale="ru" />
      <Steps>
        <Step title="1. Откройте обе страницы">Найдите коллекцию и список свойств для каждой.</Step>
        <Step title="2. Заполните построчно">Отметьте строки, где есть различия.</Step>
        <Step title="3. Сопоставьте разницу с ценой">
          Каким свойством объясняется разница? Если объяснения нет, высокая цена может быть необоснованной.
        </Step>
        <Step title="4. Запишите дату">Цену всегда запоминайте вместе с датой, когда вы её видели.</Step>
      </Steps>

      <h2 id="sorlagan">Запрошенная цена и состоявшаяся сделка — не одно и то же</h2>
      <p>
        Цифра в объявлении — это только <b>предложение</b>. Она не означает, что подарок продаётся по этой цене.
        Показательна сделка, за которую кто-то действительно заплатил.
      </p>
      <KeyFacts label="Помните о разнице">
        <li>Высокая запрошенная цена не поднимает рыночную.</li>
        <li>Оценивая свой подарок, опирайтесь на состоявшиеся продажи, а не на объявления.</li>
        <li>Если подтверждения сделки нет, не принимайте её цену за факт.</li>
      </KeyFacts>

      <h2 id="floor">Что такое floor price и как его понимать</h2>
      <p>
        Floor price — это <b>самая низкая цена объявления</b> в коллекции. Это не средняя и не «справедливая»
        цена, а просто самое дешёвое предложение прямо сейчас.
      </p>
      <InfoGrid>
        <InfoCard emoji="⬇️" title="Это нижняя граница">
          Самый дешёвый экземпляр коллекции, обычно с самыми обычными свойствами.
        </InfoCard>
        <InfoCard emoji="⚖️" title="Это не среднее">
          Экземпляры с редкими свойствами могут стоить намного выше floor.
        </InfoCard>
        <InfoCard emoji="🔄" title="Меняется быстро">
          Достаточно одного нового объявления, чтобы floor изменился.
        </InfoCard>
        <InfoCard emoji="🎯" title="Когда полезен">
          Чтобы оценить, насколько ваш экземпляр выше нижней границы.
        </InfoCard>
      </InfoGrid>

      <h2 id="xarid">Что сравнивать при покупке</h2>
      <Steps>
        <Step title="1. Подтвердите коллекцию">Это именно та коллекция, которую вы искали?</Step>
        <Step title="2. Прочитайте четыре свойства">Модель, фон, символ и номер — они и задают цену.</Step>
        <Step title="3. Сравните с floor">
          Насколько цена выше минимального объявления и чем это объясняется?
        </Step>
        <Step title="4. Проверьте продавца">
          Ссылку и владение — по{" "}
          <Link href="/blog/telegram-gift-havolasini-tekshirish">руководству по проверке</Link>.
        </Step>
      </Steps>
      <p>
        Если вы пытаетесь продать — в статье{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">«Подарок не продаётся»</Link> разобраны комиссия и границы
        цены. Инвестиционный взгляд —{" "}
        <Link href="/blog/telegram-nft-investitsiya">в отдельной статье</Link>; пригодится и{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">список редких подарков</Link>.
      </p>

      <NftGiftSeriesNav locale="ru" />

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "свойства подарков и перепродажа" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Nega bir xil ko‘rinadigan ikki Gift har xil narxda turadi?",
    answer:
      "Narx kolleksiyaga emas, aynan shu nusxaga bog‘liq: model, fon, belgi va nusxa raqami har xil bo‘lishi mumkin.",
  },
  {
    question: "Xususiyatlarni qayerdan ko‘raman?",
    answer: "Kolleksion sovg‘a sahifasida xususiyatlar ro‘yxati bo‘ladi — model, fon, belgi va raqam o‘sha yerda.",
  },
  {
    question: "Floor price nima?",
    answer:
      "Kolleksiyadagi eng past e’lon narxi. Bu o‘rtacha narx emas, balki hozirgi eng arzon taklif; u tez o‘zgaradi.",
  },
  {
    question: "E’londagi narx bozor narximi?",
    answer: "Yo‘q. E’londagi raqam — faqat taklif; haqiqiy ko‘rsatkich amalga oshgan savdo narxi.",
  },
  {
    question: "Kam tirajli sovg‘a albatta qimmatlashadimi?",
    answer:
      "Yo‘q. Noyoblik foyda kafolati emas — talab pasaysa, kam tirajli nusxaning ham narxi tushadi.",
  },
  {
    question: "Narxni qanday to‘g‘ri solishtiraman?",
    answer:
      "Bir kolleksiya ichida, bir xil model, fon, belgi va o‘xshash raqamdagi nusxalar bilan; narxni ko‘rgan sanangiz bilan yozib qo‘ying.",
  },
];

const faqRu = [
  {
    question: "Почему два похожих Gift стоят по-разному?",
    answer:
      "Цена зависит не от коллекции, а от конкретного экземпляра: модель, фон, символ и номер могут отличаться.",
  },
  {
    question: "Где посмотреть свойства?",
    answer: "На странице коллекционного подарка есть список свойств — модель, фон, символ и номер указаны там.",
  },
  {
    question: "Что такое floor price?",
    answer:
      "Самая низкая цена объявления в коллекции. Это не средняя цена, а самое дешёвое предложение сейчас; оно быстро меняется.",
  },
  {
    question: "Цена в объявлении — это рыночная цена?",
    answer: "Нет. Цифра в объявлении — только предложение; показательна цена состоявшейся сделки.",
  },
  {
    question: "Малотиражный подарок обязательно подорожает?",
    answer: "Нет. Редкость не гарантирует прибыль — при падении спроса дешевеет и малотиражный экземпляр.",
  },
  {
    question: "Как сравнивать цену правильно?",
    answer:
      "Внутри одной коллекции, с той же моделью, фоном, символом и близким номером; цену записывайте вместе с датой.",
  },
];

function EnAnswer() {
  return (
    <p>
      Two gifts that look alike carrying different prices is normal: the price follows the{" "}
      <b>individual copy</b>, not the <b>collection</b>. Model, backdrop, symbol and copy number are the main
      differentiators — so check those four in both listings before comparing anything else.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#kolleksiya", label: "One collection is not one price" },
          { href: "#xususiyat", label: "Model, backdrop, symbol, number" },
          { href: "#varaqa", label: "The comparison sheet" },
          { href: "#sorlagan", label: "Asking price vs sold price" },
          { href: "#floor", label: "What floor price means" },
          { href: "#xarid", label: "What to compare when buying" },
        ]}
      />

      <h2 id="kolleksiya">Does one collection mean one gift?</h2>
      <p>
        No. A collection is an umbrella name, and the copies inside it differ. Two gifts can look almost identical on
        screen while carrying different attributes — and that is exactly where the price gap comes from.
      </p>
      <InfoGrid>
        <InfoCard emoji="🔢" title="A low number">A small serial number is valued in its own right.</InfoCard>
        <InfoCard emoji="⏳" title="A small run">Limited-release collections.</InfoCard>
        <InfoCard emoji="🎨" title="A rare attribute">An uncommon model, backdrop or symbol.</InfoCard>
        <InfoCard emoji="💱" title="Current demand">Market mood and what buyers are chasing.</InfoCard>
      </InfoGrid>
      <p>
        At the same time: <b>rarity is not an automatic profit guarantee</b>. When demand falls, a small-run copy
        gets cheaper too.
      </p>

      <h2 id="xususiyat">Where to find model, backdrop, symbol and number</h2>
      <p>A collectible&rsquo;s page lists its attributes. That list is what separates two copies:</p>
      <KeyFacts label="The four attributes">
        <li>
          <b>Model</b> — the gift&rsquo;s main appearance; a collection can hold several.
        </li>
        <li>
          <b>Backdrop</b> — the background variant; uncommon ones cost more.
        </li>
        <li>
          <b>Symbol</b> — the pattern or mark on the gift.
        </li>
        <li>
          <b>Number</b> — the copy&rsquo;s position in the series, for example #7/1000.
        </li>
      </KeyFacts>

      <h2 id="varaqa">A comparison sheet: put two listings side by side</h2>
      <p>
        The table below is not a ready answer — it is <b>a sheet you fill in yourself</b>. Open the two listings you
        are comparing and work down the rows. We deliberately publish no invented price examples: an unverified
        figure goes stale within weeks and leads to a bad decision.
      </p>
      <CompareSheet locale="en" />
      <Steps>
        <Step title="1. Open both pages">Find the collection and the attribute list for each.</Step>
        <Step title="2. Fill it in row by row">Mark the rows where they differ.</Step>
        <Step title="3. Match the difference to the price">
          Which attribute explains the gap? If nothing does, the higher price may be unjustified.
        </Step>
        <Step title="4. Write down the date">Always remember a price together with the day you saw it.</Step>
      </Steps>

      <h2 id="sorlagan">The asking price and a completed sale are not the same</h2>
      <p>
        A figure in a listing is only an <b>offer</b>. It does not mean the gift sells at that price. What is
        meaningful is a sale someone actually paid for.
      </p>
      <KeyFacts label="Keep the difference in mind">
        <li>A high asking price does not raise the market price.</li>
        <li>Value your own gift against completed sales, not against listings.</li>
        <li>Without evidence of a sale, do not treat its price as fact.</li>
      </KeyFacts>

      <h2 id="floor">What floor price means, and how to read it</h2>
      <p>
        The floor price is the <b>lowest listing</b> in a collection. It is neither an average nor a &laquo;fair&raquo;
        price — just the cheapest offer at this moment.
      </p>
      <InfoGrid>
        <InfoCard emoji="⬇️" title="It is the lower bound">
          The cheapest copy, usually with the plainest attributes.
        </InfoCard>
        <InfoCard emoji="⚖️" title="It is not the average">
          Copies with rare attributes can sit far above it.
        </InfoCard>
        <InfoCard emoji="🔄" title="It moves fast">One new listing is enough to change it.</InfoCard>
        <InfoCard emoji="🎯" title="When it helps">To judge how far above the bottom your copy sits.</InfoCard>
      </InfoGrid>

      <h2 id="xarid">What to compare when buying</h2>
      <Steps>
        <Step title="1. Confirm the collection">Is it the one you were actually looking for?</Step>
        <Step title="2. Read the four attributes">Model, backdrop, symbol and number set the price.</Step>
        <Step title="3. Compare against the floor">
          How far above the lowest listing is it, and what justifies that?
        </Step>
        <Step title="4. Check the seller">
          Verify the link and ownership using{" "}
          <Link href="/blog/telegram-gift-havolasini-tekshirish">the verification guide</Link>.
        </Step>
      </Steps>
      <p>
        Trying to sell instead? Why a gift is not selling covers
        commission and price limits. The investment view is in{" "}
        <Link href="/blog/telegram-nft-investitsiya">NFT gifts as an investment</Link>.
      </p>

      <NftGiftSeriesNav locale="en" />

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gift attributes and resale" },
        ]}
      />
    </>
  );
}

const faqEn = [
  {
    question: "Why do two similar gifts cost differently?",
    answer: "The price follows the individual copy, not the collection: model, backdrop, symbol and number all differ.",
  },
  { question: "Where do I see the attributes?", answer: "On the collectible's page — model, backdrop, symbol and number are listed there." },
  {
    question: "What is floor price?",
    answer: "The lowest listing in a collection. Not an average and not a fair price — just the cheapest offer right now, and it moves fast.",
  },
  { question: "Is the listing price the market price?", answer: "No. A listing is only an offer; a completed sale is what counts." },
  { question: "Will a small-run gift always appreciate?", answer: "No. Rarity guarantees nothing — when demand falls, small-run copies fall too." },
  {
    question: "How do I compare prices properly?",
    answer: "Within one collection, against copies with the same model, backdrop, symbol and a similar number — and note the date.",
  },
];
export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-27",
  dateModified: "2026-09-08",
  keywords: [
    "telegram gift narxi nimaga bog‘liq",
    "bir xil gift narxi har xil",
    "telegram gift model fon farqi",
    "gift rarity nima",
    "telegram gift floor price nima",
    "telegram gift raqami narxga ta’siri",
    "telegram nft narxi",
  ],
  locales: {
    uz: {
      title: "Nega bir xil Telegram Gift ikki xil narxda turadi?",
      excerpt:
        "Narx kolleksiyaga emas, nusxaga bog‘liq: model, fon, belgi va raqam. Solishtirish varaqasi, floor price ma’nosi va so‘ralgan hamda sotilgan narx farqi.",
      metaTitle: "Nega bir xil Telegram Gift har xil narxda?",
      metaDescription:
        "Telegram Gift narxi nimaga bog‘liq: model, fon, belgi va nusxa raqami, floor price nima, e’lon narxi bilan sotilgan narx farqi va solishtirish varaqasi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Joriy narxlar",
      ctaBody: "@StarsPaymee_bot → Gift Market — katalog va so‘mdagi narx.",
      faq: faqUz,
    },
    ru: {
      title: "Почему одинаковые Telegram Gift стоят по-разному?",
      excerpt:
        "Цена зависит не от коллекции, а от экземпляра: модель, фон, символ и номер. Лист сравнения, смысл floor price и разница запрошенной и сделочной цены.",
      metaTitle: "Почему одинаковые Telegram Gift стоят по-разному?",
      metaDescription:
        "От чего зависит цена Telegram Gift: модель, фон, символ и номер, что такое floor price, чем запрошенная цена отличается от сделочной, лист сравнения.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Актуальные цены",
      ctaBody: "@StarsPaymee_bot → Gift Market — каталог и цена в сумах.",
      faq: faqRu,
    },
    en: {
      title: "Why do identical Telegram Gifts cost different amounts?",
      excerpt: "Price follows the copy, not the collection: model, backdrop, symbol and number. Plus a comparison sheet, floor price and asking vs sold.",
      metaTitle: "Why identical Telegram Gifts differ in price",
      metaDescription: "What a Telegram Gift's price depends on: model, backdrop, symbol and copy number, what floor price means and how asking differs from sold.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Current prices",
      ctaBody: "@StarsPaymee_bot → Gift Market — the catalogue, priced in so\u2018m.",
      faq: faqEn,
    },
  },
};
