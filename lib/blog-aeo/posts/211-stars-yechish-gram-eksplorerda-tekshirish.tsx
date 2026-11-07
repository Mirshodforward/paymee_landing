import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-yechish-gram-eksplorerda-tekshirish";

/**
 * Stars yechib oldim: gram.org eksplorerda Gram tushganini qanday ko‘raman?
 *
 * Avtoblogyoz yasagan maqola (2026-11-07): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanal yoki bot orqali Stars topgan o‘zbek muallif Fragment’da Stars’ni yechib olgach, «Stars yechib olish tranzaksiyasini gram.org eksplorerda qanday tekshiraman, Gram hamyonga tushdimi» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-07):
 *   https://docs.ton.org/onboarding/explorers
 *   https://ton.org/
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;
const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.priceUzs ?? 0;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Gram tushganini gram.org yoki boshqa TON eksplorerda tekshirasiz, lekin u yerda Stars’ni emas, hamyoningizga kelgan kiruvchi o‘tkazmani qidirasiz. Eng tez yo‘l — hamyon ilovasidagi tranzaksiya havolasi. Havola bo‘lmasa, o‘z manzilingizni qidiruvga qo‘ying va History bo‘limidan yozuvni vaqt va summa bo‘yicha toping. Yozuv sizning manzilingizda bo‘lsa va bounce chiqmasa, mablag‘ yetib kelgan.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#yechilgan-stars-eksplorerda-qaysi-korinishda", label: "Yechilgan Stars eksplorerda qaysi ko‘rinishda chiqadi?" },
          { href: "#qidiruvdan-oldin-qolingizda-nima-bolishi", label: "Qidiruvdan oldin qo‘lingizda nima bo‘lishi kerak?" },
          { href: "#fragment-tolovini-eksplorerda-topish-6", label: "Fragment to‘lovini eksplorerda topish: 6 qadam" },
          { href: "#eksplorerdagi-natijani-qanday-oqish-kerak", label: "Eksplorerdagi natijani qanday o‘qish kerak?" },
          { href: "#yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi", label: "Yechish yakunlanganini qaysi belgilar tasdiqlaydi?" },
          { href: "#gram-orgdan-foydalansa-boladimi-va", label: "gram.org’dan foydalansa bo‘ladimi va uning maqomi qanday?" },
          { href: "#yozuv-topilmadi-yoki-summa-kam", label: "Yozuv topilmadi yoki summa kam: tekshiruv tartibi" },
          { href: "#yechish-ortidan-keladigan-aldov-xabarlarini", label: "Yechish ortidan keladigan aldov xabarlarini qanday tanish mumkin?" },
          { href: "#gram-hamyonda-keyingi-qadamlar-va", label: "Gram hamyonda: keyingi qadamlar va so‘mdagi alternativa" },
        ]}
      />
      <h2 id="yechilgan-stars-eksplorerda-qaysi-korinishda">Yechilgan Stars eksplorerda qaysi ko‘rinishda chiqadi?</h2>
      <p>Telegram Stars — messenjer ichidagi balans. Eksplorerda «Stars» degan yozuvni topa olmaysiz.</p>
      <p>TON rasmiy hujjatlariga ko‘ra, eksplorerlar hisob balanslari, Gram va token o‘tkazmalari, tranzaksiyalar va xabarlarni ko‘rsatadi. Demak, sizga kerakli narsa — yechishdan keyin hamyon manzilingizga kelgan kiruvchi o‘tkazma.</p>
      <p>Gram — TON blokcheynining asosiy tangasi, u Toncoin nomi bilan ham tanilgan (<a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>). Eski qo‘llanma, skrinshot yoki ilovaning eski versiyasida shu tanga «Toncoin» yoki «TON» deb yozilgan bo‘lishi mumkin. Bu boshqa pul emas. Nom almashinuvi haqida: <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>.</p>
      <p>Telegram’dagi Stars balansi va hamyondagi tanga — ikki alohida hisob, biri ikkinchisida aks etmaydi. Farqlar jadvali: <Link href="/blog/telegram-wallet-va-stars-farqi">Wallet va Stars farqi</Link>.</p>
      <p>Yechish sharti, kurs va o‘tkazma qancha vaqtda kelishi bu maqolada tasdiqlanmagan. Bularni Fragment’ning o‘zidagi yechish sahifasida ko‘ring (<a href={"https://fragment.com/"} target="_blank" rel="noopener noreferrer">fragment.com</a>). Hali Stars yig‘ish bosqichida bo‘lsangiz, <Link href="/blog/telegram-pullik-kanal-stars-obuna">pullik kanal va Stars obunasi</Link> haqidagi maqoladan boshlang.</p>
      <h2 id="qidiruvdan-oldin-qolingizda-nima-bolishi">Qidiruvdan oldin qo‘lingizda nima bo‘lishi kerak?</h2>
      <p>Eksplorer aniq ma’lumot bilan tez ishlaydi. Oldindan quyidagilarni yozib qo‘ying:</p>
      <ul>
        <li><b>Qabul qiluvchi manzil.</b> Fragment’ga qaysi hamyon ulanganini tekshiring. Ikkita hamyoni bor mualliflar ko‘pincha shu yerda adashadi: pul bir hamyonga tushgan, qidiruv esa boshqasida.</li>
        <li><b>Taxminiy vaqt va kutilgan summa.</b> History bo‘limida yozuv aynan vaqt, kontragent va summa bo‘yicha topiladi.</li>
        <li><b>Tranzaksiya havolasi.</b> Hamyon ilovasida o‘tkazma yozuvi chiqqan bo‘lsa, unda eksplorer havolasi bo‘lishi mumkin.</li>
        <li><b>Tranzaksiya xeshi.</b> Ilova logi yoki API javobida xesh ko‘rsatilgan bo‘lsa, uni to‘g‘ridan-to‘g‘ri qidiruvga qo‘yish mumkin.</li>
        <li><b>Yuboruvchi manzil.</b> Yordam berishi mumkin, lekin Fragment qaysi manzildan to‘lashi bu maqolada tasdiqlanmagan. Asosiy tayanch — o‘z manzilingiz.</li>
      </ul>
      <p>Misol: bot muallifi Jasur Telegram ichidagi hamyon va telefonidagi alohida ilovadan foydalanadi. Yechishdan keyin u ilovadagi hamyonni ochadi va hech narsa topmaydi. Fragment’dagi ulangan manzilni solishtirgach ma’lum bo‘ladi: o‘tkazma ikkinchi hamyonga ketgan va u yerda yozuv joyida turibdi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="fragment-tolovini-eksplorerda-topish-6">Fragment to‘lovini eksplorerda topish: 6 qadam</h2>
      <Steps>
        <Step title={"Hamyondagi havolani oching"}>o‘tkazma yozuvida eksplorer havolasi bo‘lsa, u kerakli tranzaksiyani darhol ochadi.</Step>
        <Step title={"Havola bo‘lmasa, o‘z manzilingizni qidiring"}>qabul qiluvchi manzilni nusxalab, eksplorer qidiruv maydoniga qo‘ying. Qo‘lda terish xatoga olib keladi.</Step>
        <Step title={"Xesh bo‘lsa, uni ishlating"}>xesh bo‘yicha qidiruv bitta aniq tranzaksiyani ochadi.</Step>
        <Step title={"Manzil va tarmoqni tekshiring"}>natija sahifasidagi manzil siznikiga harfma-harf mosmi va kerakli tarmoq ochilganmi (masalan, test tarmog‘i emasmi).</Step>
        <Step title={"History bo‘limini oching"}>yozuvni yechish vaqtiga yaqin vaqt, kutilgan summa va kontragent bo‘yicha toping. Gram emas, token kelgan bo‘lsa, Tokens bo‘limiga qarang.</Step>
        <Step title={"Topilmasa, biroz kutib qayta qidiring"}>yaqindagi faollik eksplorerda darhol chiqmasligi mumkin.</Step>
      </Steps>
      <p>Bir kunda bir necha marta yechgan bo‘lsangiz, History’da bir-biriga o‘xshash yozuvlar chiqadi. Ularni summa va vaqt bo‘yicha ajrating: har bir yechish so‘rovingizni Fragment’dagi summa bilan alohida solishtiring.</p>
      <p>Ikkinchi misol: kanal muallifi Dilnoza hamyon ilovasidan tranzaksiya xeshini nusxalab, qidiruvga qo‘yadi. Sahifa bitta tranzaksiyani ochadi, u manzil va summani tekshiradi — History’ni varaqlash shart bo‘lmaydi.</p>
      <p>TON hujjatlariga ko‘ra, eksplorerlar ma’lumotni TON Center API v2 va v3 orqali oladi. Shuning uchun bir eksplorerda yozuv chiqib, boshqasida hali ko‘rinmasa, bu ko‘pincha yangilanish tezligi bilan bog‘liq bo‘ladi.</p>
      <h2 id="eksplorerdagi-natijani-qanday-oqish-kerak">Eksplorerdagi natijani qanday o‘qish kerak?</h2>
      <CompareTable
        headers={["Ko‘rgan holatingiz", "Ma’nosi", "Keyingi qadam"]}
        rows={[
          ["Yuboruvchi tomonda «muvaffaqiyatli», sizning manzilingizda yozuv yo‘q", "Faqat xabar jo‘natilgani ko‘rinadi", "Qabul qiluvchi tranzaksiyasini alohida qidiring"],
          ["Kiruvchi yozuvdan keyin bounce yoki refund chiqqan", "O‘tkazma qaytgan bo‘lishi mumkin", "Qaytish izini oxirigacha kuzating, hali «tushdi» demang"],
          ["Hech narsa yo‘q, yechish hozirgina so‘ralgan", "Eksplorer kechikayotgan bo‘lishi mumkin", "Biroz kutib, qayta qidiring"],
          ["Gram o‘rniga token (jetton) kelgan", "Boshqa aktiv o‘tkazilgan", "Tokens bo‘limida jetton master manzilini kutilgan token bilan solishtiring"],
          ["Summa kutilganidan juda oz farq qiladi", "Tarmoq to‘lovi bo‘lishi mumkin", "Gram o‘tkazmasi taxminan 0,00039 Gram turishini hisobga oling"],
          ["Summa sezilarli kam", "Komissiya bilan izohlanmaydi", "Fragment’dagi yechish shartlari va kursini qayta ko‘ring"],
          ["Yozuv boshqa manzilda turibdi", "Pul boshqa hamyonga ketgan", "Fragment’ga ulangan manzilni tekshiring"],
        ]}
      />
      <p>Komissiya bo‘yicha raqam <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> ma’lumotidan olingan. Bu juda kichik summa, shuning uchun sezilarli kamomadni tarmoq to‘lovi bilan izohlab bo‘lmaydi.</p>
      <p>Ba’zi eksplorerlar bloklar, validatorlar faolligi, gaz sarfi va komissiyalar kabi qo‘shimcha ma’lumotlarni ham ko‘rsatadi. Yechishni tekshirish uchun ular kerak emas: manzil, summa, vaqt va bounce yetarli.</p>
      <h2 id="yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi">Yechish yakunlanganini qaysi belgilar tasdiqlaydi?</h2>
      <p>To‘rt shart birga bajarilsa, o‘tkazmani yetib keldi deb hisoblash mumkin:</p>
      <ul>
        <li>O‘z manzilingizda kiruvchi tranzaksiya yozuvi bor.</li>
        <li>Summa va vaqt yechish so‘rovingizga mos.</li>
        <li>Natija to‘g‘ri tarmoqda ochilgan.</li>
        <li>Shu yozuvdan keyin bounce yoki refund ko‘rinmaydi.</li>
      </ul>
      <Notice label={"Muhim"}>Yuboruvchi tomondagi «muvaffaqiyatli» belgisi yetarli dalil emas. U faqat xabar jo‘natilganini ko‘rsatadi, qabul qilinganini emas.</Notice>
      <p>Hamyon ilovasidagi balans ham eksplorerga mos kelishi kerak. Mos kelmasa, avval manzillarni solishtiring, keyin kechikishni hisobga oling.</p>
      <p>Skrinshot o‘rniga tranzaksiya havolasini saqlang. Kerak bo‘lsa supportga yoki hamkoringizga aynan shu havolani yuborasiz: har kim uni o‘zi ochib, ma’lumotni blokcheyndan tekshira oladi. Skrinshotni esa tahrirlash oson.</p>
      <h2 id="gram-orgdan-foydalansa-boladimi-va">gram.org’dan foydalansa bo‘ladimi va uning maqomi qanday?</h2>
      <p>Telegram kanallarida gram.org manzilida TON uchun yangi eksplorer ochilgani haqida xabar tarqaldi. Bu maqolani tayyorlashda buni tasdiqlaydigan rasmiy manba topilmadi, sayt kimga tegishli ekani ham aniq emas.</p>
      <p>Postlardagi boshqa tafsilotlar — domen tarixi, egasi, ishga tushgan sanasi, narx va statistika bo‘limlari — ham tasdiqlanmagan. Ularni fakt sifatida qabul qilmang.</p>
      <p>TON hujjatlarida esa Actonscan smart-kontrakt ishlab chiquvchilari uchun rasmiy ochiq kodli eksplorer sifatida ko‘rsatilgan. Oddiy foydalanuvchi uchun yagona rasmiy eksplorer bor-yo‘qligi haqida aniq ma’lumot topilmadi.</p>
      <p>Amalda quyidagiga amal qiling:</p>
      <ul>
        <li>Eksplorer manzilini qo‘lda yozing yoki hamyon ilovasidagi havoladan kiring.</li>
        <li>Qidiruv tizimidagi o‘xshash nomli domenlarga va reklama havolalariga ishonmang.</li>
        <li>Qaysi eksplorerni tanlasangiz ham, tekshiruv tartibi bir xil: manzil, tarmoq, History.</li>
      </ul>
      <h2 id="yozuv-topilmadi-yoki-summa-kam">Yozuv topilmadi yoki summa kam: tekshiruv tartibi</h2>
      <p>Quyidagi ketma-ketlikda harakat qiling:</p>
      <ul>
        <li><b>Kuting va qayta qidiring.</b> Yangi faollik eksplorerda kechikib chiqishi mumkin.</li>
        <li><b>Manzilni solishtiring.</b> Qidirgan manzilingiz Fragment’ga ulangan hamyon bilan bir xilmi? Boshqa hamyonni qidirish — eng ko‘p uchraydigan xato.</li>
        <li><b>Tarmoqni tekshiring.</b> Natijada boshqa tarmoq ochilgan bo‘lsa, yozuv chiqmaydi.</li>
        <li><b>Bounce va refundni kuzating.</b> Qaytgan o‘tkazma ham History’da iz qoldiradi.</li>
        <li><b>Fragment’dagi holatni ko‘ring.</b> Yechish so‘rovi qaysi bosqichda ekanini Fragment’ning o‘zida tekshiring. Ichki muddatlar bu maqolada tasdiqlanmagan.</li>
        <li><b>Supportga yozing.</b> Muammo hal bo‘lmasa, tranzaksiya havolasi yoki manzil bilan tegishli rasmiy supportga murojaat qiling.</li>
      </ul>
      <Notice label={"Muhim"}>Seed-frazani hech kimga bermang. Support xodimi ham, «yordamchi» ham uni so‘ramaydi.</Notice>
      <h2 id="yechish-ortidan-keladigan-aldov-xabarlarini">Yechish ortidan keladigan aldov xabarlarini qanday tanish mumkin?</h2>
      <p>Eksplorer faqat ochiq ma’lumotni ko‘rsatadi. O‘tkazmani ko‘rish uchun seed-fraza, parol yoki hamyon ulash kerak emas. Shu sababli biror sayt «tekshirish» uchun hamyon ulashni talab qilsa, to‘xtang.</p>
      <p>Shubhali belgilar:</p>
      <ul>
        <li>«Yechish muzlatildi, chiqarish uchun hamyonni ulang».</li>
        <li>«Stars’ingizni qimmat narxda sotib olamiz».</li>
        <li>«O‘tkazma ochilishi uchun komissiyani oldindan to‘lang».</li>
        <li>Eksplorerga o‘xshash, lekin bir-ikki harfi farq qiladigan havola.</li>
      </ul>
      <p>StarsPaymee foydalanuvchilardan Stars yoki sovg‘ani sotib olmaydi. Uning nomidan shunday taklif kelsa, bu yolg‘on.</p>
      <p>Shubhali havolani ochmang. Eksplorerni o‘zingiz oching va manzilingizni o‘zingiz kiriting. Xavfsizlik bo‘yicha batafsil: <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link>.</p>
      <h2 id="gram-hamyonda-keyingi-qadamlar-va">Gram hamyonda: keyingi qadamlar va so‘mdagi alternativa</h2>
      <p><a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> ma’lumotiga ko‘ra, Telegram jamoasining kastodial bo‘lmagan Gram Wallet hamyoni messenjer interfeysiga o‘rnatilgan. Kastodial bo‘lmagani — kalitlar sizda ekanini bildiradi, ularni yo‘qotmaslik ham sizning zimmangizda.</p>
      <p>O‘sha manba kriptohamyon orqali o‘zingiz yoki do‘stingiz uchun Telegram Premium olish mumkinligini yozadi.</p>
      <p>Stars’ni umuman yechmasdan, kanal reklamasiga sarflash ham mumkin. Qaysi biri foydaliroq ekanini <Link href="/blog/telegram-ads-stars-sarflash">Stars’ni Telegram Ads’ga sarflash</Link> maqolasida solishtirganmiz.</p>
      <p>Kanalingiz yoki botingiz uchun Stars so‘mda kerak bo‘lsa, kripto shart emas. @StarsPaymee_bot faqat @username so‘raydi va buyurtmani odatda bir necha soniyada yetkazadi. Narx to‘lov usuliga bog‘liq: karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Batafsil: <Link href="/stars">Stars sahifasi</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://docs.ton.org/onboarding/explorers", label: "TON blockchain explorers" },
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Fragment’dan yechgan Stars’im eksplorerda Stars bo‘lib ko‘rinadimi yoki Gram bo‘lib?", answer: "Stars eksplorerda chiqmaydi, chunki u Telegram ichidagi balans. Siz faqat hamyon manzilingizga kelgan blokcheyn o‘tkazmasini ko‘rasiz: Gram bo‘lsa History’da, token bo‘lsa Tokens bo‘limida." },
  { question: "Hamyon ilovasida xesh ham, havola ham yo‘q — yozuvni nima bilan qidiraman?", answer: "O‘z hamyon manzilingiz kifoya. Uni qidiruvga qo‘yib, History ichidan yechish vaqtiga yaqin va kutilgan summadagi kiruvchi yozuvni tanlang." },
  { question: "Eksplorerda yozuv bor, lekin Telegram’dagi hamyonimda balans o‘zgarmagan — sababi nima?", answer: "Ko‘pincha eksplorerda boshqa manzil ochilgan bo‘ladi, shuning uchun avval ikkala manzilni harfma-harf solishtiring. Manzil bir xil bo‘lsa, ilovani yangilab biroz kuting." },
  { question: "Yuboruvchi tomonda «success» yozilgan, bu pul menga yetdi deganimi?", answer: "Yo‘q, bu faqat jo‘natma chiqqanini bildiradi. O‘z manzilingizda kiruvchi tranzaksiya borligini va undan keyin bounce yo‘qligini alohida tekshiring." },
  { question: "Yozuv yonida bounce belgisi turibdi — yechish bekor bo‘ldimi?", answer: "Bounce o‘tkazma qabul qilinmay qaytganini ko‘rsatishi mumkin. Qaytish izini oxirigacha kuzating va so‘rov holatini Fragment’da ko‘ring; shu paytgacha pulni tushgan deb hisoblamang." },
  { question: "gram.org va boshqa TON eksplorerlarida ma’lumot farq qilishi mumkinmi?", answer: "Yangi yozuvlar turli eksplorerlarda turli vaqtda chiqishi mumkin, shuning uchun biroz kutib solishtiring. gram.org’ning rasmiy maqomi bu maqolada tasdiqlanmagan." },
  { question: "Yechilgan summa kutilganidan oz keldi — komissiya qancha bo‘ladi?", answer: "ton.org ma’lumotiga ko‘ra Gram o‘tkazmasi taxminan 0,00039 Gram turadi. Farq sezilarli bo‘lsa, sababni Fragment’dagi yechish shartlari va kursidan qidiring." },
  { question: "Eksplorerda o‘z manzilimni qidirish xavfsizmi, boshqalar balansimni ko‘radimi?", answer: "Qidirish uchun hamyon ulash yoki seed-fraza kerak emas. Lekin ma’lumot ochiq: manzilingizni bilgan har kim balans va o‘tkazmalarni ko‘ra oladi." },
  { question: "Stars’ni yechib olmay, StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars yoki sovg‘ani sotib olmaydi. Uning nomidan bunday taklif kelsa, bu firibgarlik belgisi." },
  { question: "Yechilgan Gram bilan do‘stimga Premium olsam bo‘ladimi?", answer: `Ha, ton.org kriptohamyon orqali do‘stga ham Premium olish mumkinligini yozadi. Kripto ishlatmasangiz, @StarsPaymee_bot’da do‘stning @username’i bilan so‘mda olasiz: 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}; faol Premium bo‘lsa, bot yangi buyurtma ochmaydi.` },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Проверить, что Gram пришли, можно на gram.org или в другом эксплорере TON. Искать там нужно не Stars, а входящий перевод на ваш кошелёк. Быстрее всего открыть ссылку на транзакцию из приложения кошелька. Если ссылки нет, вставьте в поиск свой адрес и найдите запись в разделе History по времени и сумме. Если запись есть на вашем адресе и за ней нет bounce, средства дошли.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#yechilgan-stars-eksplorerda-qaysi-korinishda", label: "Как выведенные Stars выглядят в эксплорере?" },
          { href: "#qidiruvdan-oldin-qolingizda-nima-bolishi", label: "Что подготовить перед поиском?" },
          { href: "#fragment-tolovini-eksplorerda-topish-6", label: "Как найти выплату Fragment в эксплорере: 6 шагов" },
          { href: "#eksplorerdagi-natijani-qanday-oqish-kerak", label: "Как читать результат в эксплорере?" },
          { href: "#yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi", label: "Какие признаки подтверждают, что вывод завершён?" },
          { href: "#gram-orgdan-foydalansa-boladimi-va", label: "Можно ли пользоваться gram.org и какой у него статус?" },
          { href: "#yozuv-topilmadi-yoki-summa-kam", label: "Записи нет или сумма меньше: порядок проверки" },
          { href: "#yechish-ortidan-keladigan-aldov-xabarlarini", label: "Как распознать мошеннические сообщения после вывода?" },
          { href: "#gram-hamyonda-keyingi-qadamlar-va", label: "Gram в кошельке: что дальше и альтернатива в сумах" },
        ]}
      />
      <h2 id="yechilgan-stars-eksplorerda-qaysi-korinishda">Как выведенные Stars выглядят в эксплорере?</h2>
      <p>Telegram Stars — это баланс внутри мессенджера. Записи с надписью «Stars» в эксплорере вы не найдёте.</p>
      <p>По официальной документации TON, эксплореры показывают балансы аккаунтов, переводы Gram и токенов, транзакции и сообщения. Значит, вам нужен входящий перевод, который пришёл на адрес кошелька после вывода.</p>
      <p>Gram — основная монета блокчейна TON, она также известна как Toncoin (<a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>). В старых инструкциях, на скриншотах или в старой версии приложения та же монета может называться «Toncoin» или «TON». Это не другие деньги. О смене названия: <Link href="/blog/toncoin-endi-gram">Toncoin теперь называется Gram</Link>.</p>
      <p>Баланс Stars в Telegram и монеты в кошельке — два отдельных счёта. Один не отображается в другом. Таблица различий: <Link href="/blog/telegram-wallet-va-stars-farqi">чем Wallet отличается от Stars</Link>.</p>
      <p>Условия вывода, курс и срок поступления перевода в этой статье не подтверждены. Смотрите их на странице вывода в самом Fragment (<a href={"https://fragment.com/"} target="_blank" rel="noopener noreferrer">fragment.com</a>). Если вы пока только собираете Stars, начните со статьи о <Link href="/blog/telegram-pullik-kanal-stars-obuna">платном канале с подпиской за Stars</Link>.</p>
      <h2 id="qidiruvdan-oldin-qolingizda-nima-bolishi">Что подготовить перед поиском?</h2>
      <p>С точными данными эксплорер работает быстрее. Заранее запишите:</p>
      <ul>
        <li><b>Адрес получателя.</b> Проверьте, какой кошелёк подключён к Fragment. Авторы с двумя кошельками чаще всего ошибаются именно здесь: деньги пришли на один кошелёк, а ищут их в другом.</li>
        <li><b>Примерное время и ожидаемую сумму.</b> В разделе History запись находят как раз по времени, контрагенту и сумме.</li>
        <li><b>Ссылку на транзакцию.</b> Если в приложении кошелька появилась запись о переводе, в ней может быть ссылка на эксплорер.</li>
        <li><b>Хеш транзакции.</b> Если хеш указан в логах приложения или в ответе API, его можно сразу вставить в поиск.</li>
        <li><b>Адрес отправителя.</b> Может помочь, но с какого адреса платит Fragment, в этой статье не подтверждено. Главная опора — ваш собственный адрес.</li>
      </ul>
      <p>Пример: автор бота Жасур пользуется кошельком внутри Telegram и отдельным приложением на телефоне. После вывода он открывает кошелёк в приложении и ничего не находит. Сверив адрес, подключённый к Fragment, он понимает: перевод ушёл на второй кошелёк, и запись там на месте.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="fragment-tolovini-eksplorerda-topish-6">Как найти выплату Fragment в эксплорере: 6 шагов</h2>
      <Steps>
        <Step title={"Откройте ссылку из кошелька"}>если в записи о переводе есть ссылка на эксплорер, она сразу откроет нужную транзакцию.</Step>
        <Step title={"Нет ссылки — ищите свой адрес"}>скопируйте адрес получателя и вставьте его в поле поиска эксплорера. Набор вручную приводит к ошибкам.</Step>
        <Step title={"Есть хеш — используйте его"}>поиск по хешу открывает одну конкретную транзакцию.</Step>
        <Step title={"Проверьте адрес и сеть"}>совпадает ли адрес на странице результата с вашим буква в букву и открыта ли нужная сеть (например, не тестовая).</Step>
        <Step title={"Откройте раздел History"}>найдите запись по времени, близкому к выводу, ожидаемой сумме и контрагенту. Если пришёл не Gram, а токен, загляните в раздел Tokens.</Step>
        <Step title={"Не нашли — подождите и повторите поиск"}>недавняя активность может появиться в эксплорере не сразу.</Step>
      </Steps>
      <p>Если вы выводили несколько раз за день, в History будут похожие друг на друга записи. Различайте их по сумме и времени: сверяйте каждый запрос на вывод с суммой во Fragment отдельно.</p>
      <p>Второй пример: автор канала Дильноза копирует хеш транзакции из приложения кошелька и вставляет его в поиск. Открывается одна транзакция, она проверяет адрес и сумму — листать History не приходится.</p>
      <p>По документации TON, эксплореры получают данные через TON Center API v2 и v3. Поэтому если запись уже видна в одном эксплорере, а в другом ещё нет, обычно дело в скорости обновления.</p>
      <h2 id="eksplorerdagi-natijani-qanday-oqish-kerak">Как читать результат в эксплорере?</h2>
      <CompareTable
        headers={["Что вы видите", "Что это значит", "Что делать дальше"]}
        rows={[
          ["У отправителя «успешно», на вашем адресе записи нет", "Видно только, что сообщение отправлено", "Отдельно найдите транзакцию получателя"],
          ["После входящей записи появился bounce или refund", "Перевод мог вернуться", "Проследите возврат до конца, пока не считайте, что деньги пришли"],
          ["Ничего нет, вывод запрошен только что", "Эксплорер может отставать", "Подождите и повторите поиск"],
          ["Вместо Gram пришёл токен (жеттон)", "Переведён другой актив", "В разделе Tokens сравните master-адрес жеттона с ожидаемым токеном"],
          ["Сумма совсем немного отличается от ожидаемой", "Возможно, это комиссия сети", "Учтите, что перевод Gram стоит около 0,00039 Gram"],
          ["Сумма заметно меньше", "Комиссией это не объяснить", "Перепроверьте условия и курс вывода во Fragment"],
          ["Запись стоит на другом адресе", "Деньги ушли на другой кошелёк", "Проверьте адрес, подключённый к Fragment"],
        ]}
      />
      <p>Цифра по комиссии взята с <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. Это очень маленькая сумма, поэтому заметную недостачу комиссией сети объяснить нельзя.</p>
      <p>Некоторые эксплореры показывают и дополнительные данные: блоки, активность валидаторов, расход газа и комиссии. Для проверки вывода они не нужны — достаточно адреса, суммы, времени и отсутствия bounce.</p>
      <h2 id="yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi">Какие признаки подтверждают, что вывод завершён?</h2>
      <p>Перевод можно считать дошедшим, если выполнены все четыре условия:</p>
      <ul>
        <li>На вашем адресе есть входящая транзакция.</li>
        <li>Сумма и время совпадают с вашим запросом на вывод.</li>
        <li>Результат открыт в правильной сети.</li>
        <li>После этой записи нет bounce или refund.</li>
      </ul>
      <Notice label={"Важно"}>Отметка «успешно» на стороне отправителя — недостаточное доказательство. Она показывает только, что сообщение отправлено, а не что оно получено.</Notice>
      <p>Баланс в приложении кошелька тоже должен совпадать с эксплорером. Если не совпадает, сначала сверьте адреса, затем учтите возможную задержку.</p>
      <p>Сохраняйте не скриншот, а ссылку на транзакцию. Если понадобится, отправьте в поддержку или партнёру именно её: любой сможет открыть ссылку и проверить данные в блокчейне сам. Скриншот же легко отредактировать.</p>
      <h2 id="gram-orgdan-foydalansa-boladimi-va">Можно ли пользоваться gram.org и какой у него статус?</h2>
      <p>В Telegram-каналах разошлась новость, что на gram.org открылся новый эксплорер для TON. При подготовке статьи официального источника, который бы это подтверждал, не нашлось. Кому принадлежит сайт, тоже неясно.</p>
      <p>Другие подробности из постов — история домена, владелец, дата запуска, разделы с ценами и статистикой — также не подтверждены. Не принимайте их за факты.</p>
      <p>В документации TON официальным эксплорером с открытым кодом для разработчиков смарт-контрактов назван Actonscan. Есть ли единый официальный эксплорер для обычных пользователей, точных данных нет.</p>
      <p>На практике придерживайтесь простых правил:</p>
      <ul>
        <li>Вводите адрес эксплорера вручную или переходите по ссылке из приложения кошелька.</li>
        <li>Не доверяйте похожим доменам в поисковике и рекламным ссылкам.</li>
        <li>Какой бы эксплорер вы ни выбрали, порядок проверки один: адрес, сеть, History.</li>
      </ul>
      <h2 id="yozuv-topilmadi-yoki-summa-kam">Записи нет или сумма меньше: порядок проверки</h2>
      <p>Действуйте в такой последовательности:</p>
      <ul>
        <li><b>Подождите и повторите поиск.</b> Новая активность может появиться в эксплорере с задержкой.</li>
        <li><b>Сверьте адрес.</b> Совпадает ли адрес, который вы ищете, с кошельком, подключённым к Fragment? Поиск не в том кошельке — самая частая ошибка.</li>
        <li><b>Проверьте сеть.</b> Если в результате открыта другая сеть, записи там не будет.</li>
        <li><b>Проследите bounce и refund.</b> Вернувшийся перевод тоже оставляет след в History.</li>
        <li><b>Посмотрите статус во Fragment.</b> На каком этапе запрос на вывод, проверяйте в самом Fragment. Внутренние сроки в этой статье не подтверждены.</li>
        <li><b>Напишите в поддержку.</b> Если проблема не решилась, обратитесь в соответствующую официальную поддержку со ссылкой на транзакцию или адресом.</li>
      </ul>
      <Notice label={"Важно"}>Никому не сообщайте seed-фразу. Её не попросит ни сотрудник поддержки, ни «помощник».</Notice>
      <h2 id="yechish-ortidan-keladigan-aldov-xabarlarini">Как распознать мошеннические сообщения после вывода?</h2>
      <p>Эксплорер показывает только открытые данные. Чтобы увидеть перевод, не нужны seed-фраза, пароль или подключение кошелька. Поэтому если сайт требует подключить кошелёк «для проверки», остановитесь.</p>
      <p>Подозрительные признаки:</p>
      <ul>
        <li>«Вывод заморожен, подключите кошелёк, чтобы его разблокировать».</li>
        <li>«Выкупим ваши Stars по высокой цене».</li>
        <li>«Оплатите комиссию заранее, чтобы перевод разблокировали».</li>
        <li>Ссылка, похожая на эксплорер, но отличающаяся одной-двумя буквами.</li>
      </ul>
      <p>StarsPaymee не покупает Stars и подарки у пользователей. Если такое предложение пришло от его имени, это обман.</p>
      <p>Не открывайте подозрительные ссылки. Открывайте эксплорер сами и вводите свой адрес сами. Подробнее о безопасности: <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Telegram Stars</Link>.</p>
      <h2 id="gram-hamyonda-keyingi-qadamlar-va">Gram в кошельке: что дальше и альтернатива в сумах</h2>
      <p>По данным <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, некастодиальный кошелёк Gram Wallet от команды Telegram встроен в интерфейс мессенджера. Некастодиальный — значит, ключи у вас, и ответственность за их сохранность тоже на вас.</p>
      <p>Тот же источник пишет, что через криптокошелёк можно оформить Telegram Premium себе или другу.</p>
      <p>Stars можно и вовсе не выводить, а потратить на рекламу канала. Что выгоднее, мы сравнили в статье <Link href="/blog/telegram-ads-stars-sarflash">как потратить Stars на Telegram Ads</Link>.</p>
      <p>Если Stars для канала или бота нужны за сумы, крипта не обязательна. @StarsPaymee_bot просит только @username и обычно выполняет заказ за несколько секунд. Цена зависит от способа оплаты: переводом на карту (UzCard/HUMO) или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Подробнее: <Link href="/stars">страница Stars</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://docs.ton.org/onboarding/explorers", label: "TON blockchain explorers" },
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Выведенные с Fragment Stars видны в эксплорере как Stars или как Gram?", answer: "Stars в эксплорере не отображаются — это баланс внутри Telegram. Вы увидите только блокчейн-перевод на свой адрес: Gram — в History, токен — в разделе Tokens." },
  { question: "В приложении кошелька нет ни хеша, ни ссылки — по чему искать запись?", answer: "Достаточно адреса вашего кошелька. Вставьте его в поиск и выберите в History входящую запись со временем, близким к выводу, и ожидаемой суммой." },
  { question: "В эксплорере запись есть, а баланс кошелька в Telegram не изменился — почему?", answer: "Чаще всего в эксплорере открыт другой адрес, поэтому сначала сверьте оба адреса буква в букву. Если адрес тот же, обновите приложение и немного подождите." },
  { question: "У отправителя написано «success» — значит, деньги до меня дошли?", answer: "Нет, это значит лишь, что отправление ушло. Отдельно проверьте, что на вашем адресе есть входящая транзакция и после неё нет bounce." },
  { question: "Рядом с записью стоит bounce — вывод отменился?", answer: "Bounce может означать, что перевод не был принят и вернулся. Проследите возврат до конца и посмотрите статус запроса во Fragment, а до тех пор не считайте деньги полученными." },
  { question: "Могут ли данные на gram.org и в других эксплорерах TON отличаться?", answer: "Новые записи могут появляться в разных эксплорерах в разное время, так что подождите и сравните. Официальный статус gram.org в этой статье не подтверждён." },
  { question: "Выведенная сумма пришла меньше ожидаемой — сколько берёт комиссия?", answer: "По данным ton.org, перевод Gram стоит около 0,00039 Gram. Если разница заметная, причину ищите в условиях и курсе вывода во Fragment." },
  { question: "Безопасно ли искать свой адрес в эксплорере, увидят ли другие мой баланс?", answer: "Для поиска не нужно подключать кошелёк или вводить seed-фразу. Но данные открытые: любой, кто знает ваш адрес, видит баланс и переводы." },
  { question: "Можно не выводить Stars, а продать их StarsPaymee?", answer: "Нет, StarsPaymee не покупает Stars и подарки у пользователей. Если от его имени пришло такое предложение, это признак мошенничества." },
  { question: "Можно ли на выведенные Gram купить Premium другу?", answer: `Да, ton.org пишет, что через криптокошелёк Premium можно оформить и другу. Без крипты — в @StarsPaymee_bot по @username друга за сумы: 3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}; при активном Premium бот новый заказ не откроет.` },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You can confirm that Gram arrived on gram.org or any other TON explorer. You won’t find Stars there, though. You’re looking for the incoming transfer to your wallet. The fastest route is the transaction link in your wallet app. With no link, paste your own address into the search and find the entry in History by time and amount. If the entry sits on your address and shows no bounce, the funds arrived.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#yechilgan-stars-eksplorerda-qaysi-korinishda", label: "How do withdrawn Stars show up in an explorer?" },
          { href: "#qidiruvdan-oldin-qolingizda-nima-bolishi", label: "What do you need before you search?" },
          { href: "#fragment-tolovini-eksplorerda-topish-6", label: "Finding a Fragment payout in an explorer: 6 steps" },
          { href: "#eksplorerdagi-natijani-qanday-oqish-kerak", label: "How do you read the result in an explorer?" },
          { href: "#yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi", label: "Which signs confirm the withdrawal is complete?" },
          { href: "#gram-orgdan-foydalansa-boladimi-va", label: "Can you use gram.org, and what is its status?" },
          { href: "#yozuv-topilmadi-yoki-summa-kam", label: "No entry found or amount too low: what to check" },
          { href: "#yechish-ortidan-keladigan-aldov-xabarlarini", label: "How do you spot scam messages that follow a withdrawal?" },
          { href: "#gram-hamyonda-keyingi-qadamlar-va", label: "Gram is in your wallet: next steps and a UZS alternative" },
        ]}
      />
      <h2 id="yechilgan-stars-eksplorerda-qaysi-korinishda">How do withdrawn Stars show up in an explorer?</h2>
      <p>Telegram Stars are a balance inside the messenger. You won’t find an entry labelled “Stars” in an explorer.</p>
      <p>According to the official TON documentation, explorers display account balances, Gram and token transfers, transactions and messages. So you are looking for the incoming transfer that reached your wallet address after the withdrawal.</p>
      <p>Gram is the native coin of the TON blockchain, and it was also known as Toncoin (<a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>). Older guides, screenshots or older app versions may call the same coin “Toncoin” or “TON”. It isn’t a different currency. More on the name change: <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</p>
      <p>Your Stars balance in Telegram and the coins in your wallet are two separate accounts. Neither one shows up in the other. For a comparison table, see <Link href="/blog/telegram-wallet-va-stars-farqi">Wallet vs Stars</Link>.</p>
      <p>This article doesn’t confirm the withdrawal conditions, the rate or how long the transfer takes. Check those on Fragment’s own withdrawal page (<a href={"https://fragment.com/"} target="_blank" rel="noopener noreferrer">fragment.com</a>). If you’re still at the stage of earning Stars, start with our guide to <Link href="/blog/telegram-pullik-kanal-stars-obuna">paid channels and Stars subscriptions</Link>.</p>
      <h2 id="qidiruvdan-oldin-qolingizda-nima-bolishi">What do you need before you search?</h2>
      <p>An explorer works fastest when you give it precise data. Note these down first:</p>
      <ul>
        <li><b>The receiving address.</b> Check which wallet is connected to Fragment. Creators with two wallets often slip up here: the money landed in one wallet, but they search the other.</li>
        <li><b>Approximate time and expected amount.</b> In the History section, you find the entry by time, counterparty and amount.</li>
        <li><b>The transaction link.</b> If the transfer appears in your wallet app, the entry may include an explorer link.</li>
        <li><b>The transaction hash.</b> If an app log or API response shows a hash, you can paste it straight into the search.</li>
        <li><b>The sender address.</b> It can help, but this article doesn’t confirm which address Fragment pays from. Your own address is the main thing to rely on.</li>
      </ul>
      <p>Example: Jasur, a bot creator, uses the wallet inside Telegram and a separate app on his phone. After withdrawing, he opens the app wallet and finds nothing. Once he compares it with the address connected to Fragment, it’s clear: the transfer went to the other wallet, and the entry is sitting right there.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="fragment-tolovini-eksplorerda-topish-6">Finding a Fragment payout in an explorer: 6 steps</h2>
      <Steps>
        <Step title={"Open the link in your wallet"}>if the transfer entry has an explorer link, it takes you straight to the right transaction.</Step>
        <Step title={"No link? Search your own address"}>copy the receiving address and paste it into the explorer’s search field. Typing it by hand invites mistakes.</Step>
        <Step title={"Have a hash? Use it"}>searching by hash opens one exact transaction.</Step>
        <Step title={"Check the address and network"}>does the address on the results page match yours character for character, and is the right network open (not a test network, for example)?</Step>
        <Step title={"Open History"}>find the entry by a time close to your withdrawal, the expected amount and the counterparty. If a token arrived instead of Gram, look in the Tokens section.</Step>
        <Step title={"Nothing there? Wait a bit and search again"}>recent activity may not appear in an explorer right away.</Step>
      </Steps>
      <p>If you withdrew several times in one day, History will show entries that look alike. Tell them apart by amount and time: match each withdrawal request against its amount on Fragment separately.</p>
      <p>Second example: Dilnoza, a channel owner, copies the transaction hash from her wallet app and pastes it into the search. The page opens a single transaction. She checks the address and amount, and she doesn’t have to scroll through History at all.</p>
      <p>According to the TON docs, explorers take their data from TON Center API v2 and v3. So if an entry appears in one explorer but not yet in another, it’s usually a matter of update speed.</p>
      <h2 id="eksplorerdagi-natijani-qanday-oqish-kerak">How do you read the result in an explorer?</h2>
      <CompareTable
        headers={["What you see", "What it means", "Next step"]}
        rows={[
          ["“Success” on the sender side, no entry on your address", "It only shows a message was sent", "Search for the receiving transaction separately"],
          ["A bounce or refund after the incoming entry", "The transfer may have been returned", "Follow the return trail to the end; don’t call it “arrived” yet"],
          ["Nothing at all, withdrawal just requested", "The explorer may be lagging", "Wait a bit and search again"],
          ["A token (jetton) arrived instead of Gram", "A different asset was transferred", "In Tokens, compare the jetton master address with the token you expected"],
          ["Amount differs very slightly from expected", "Could be the network fee", "Keep in mind a Gram transfer costs about 0.00039 Gram"],
          ["Amount is noticeably lower", "The fee doesn’t explain it", "Recheck Fragment’s withdrawal terms and rate"],
          ["The entry is on a different address", "The money went to another wallet", "Check which address is connected to Fragment"],
        ]}
      />
      <p>The fee figure comes from <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. It’s a tiny amount, so a noticeable shortfall can’t be put down to the network fee.</p>
      <p>Some explorers also show extra details such as blocks, validator activity, gas usage and fees. You don’t need them to check a withdrawal: address, amount, time and bounce status are enough.</p>
      <h2 id="yechish-yakunlanganini-qaysi-belgilar-tasdiqlaydi">Which signs confirm the withdrawal is complete?</h2>
      <p>You can treat the transfer as arrived when all four conditions are met:</p>
      <ul>
        <li>There is an incoming transaction entry on your own address.</li>
        <li>The amount and time match your withdrawal request.</li>
        <li>The result is open on the correct network.</li>
        <li>No bounce or refund appears after that entry.</li>
      </ul>
      <Notice label={"Important"}>A “success” mark on the sender side is not proof on its own. It shows the message was sent, not that it was received.</Notice>
      <p>The balance in your wallet app should also match the explorer. If it doesn’t, compare the addresses first, then allow for a delay.</p>
      <p>Save the transaction link instead of a screenshot. If you need to, send that exact link to support or a partner. Anyone can open it and verify the data on the blockchain themselves. A screenshot, on the other hand, is easy to edit.</p>
      <h2 id="gram-orgdan-foydalansa-boladimi-va">Can you use gram.org, and what is its status?</h2>
      <p>Telegram channels have been sharing news that a new TON explorer launched at gram.org. While preparing this article, we found no official source confirming this, and it isn’t clear who owns the site.</p>
      <p>Other details from those posts aren’t confirmed either: the domain’s history, its owner, the launch date, the price and statistics sections. Don’t treat them as fact.</p>
      <p>The TON documentation, meanwhile, lists Actonscan as the official open-source explorer for smart-contract developers. We found no clear information on whether there is a single official explorer for everyday users.</p>
      <p>In practice, stick to this:</p>
      <ul>
        <li>Type the explorer address by hand or get there through the link in your wallet app.</li>
        <li>Don’t trust look-alike domains in search results or ad links.</li>
        <li>Whichever explorer you choose, the check is the same: address, network, History.</li>
      </ul>
      <h2 id="yozuv-topilmadi-yoki-summa-kam">No entry found or amount too low: what to check</h2>
      <p>Work through this order:</p>
      <ul>
        <li><b>Wait and search again.</b> New activity can show up in an explorer with a delay.</li>
        <li><b>Compare the address.</b> Is the address you searched the same as the wallet connected to Fragment? Searching the wrong wallet is the most common mistake.</li>
        <li><b>Check the network.</b> If a different network is open, the entry won’t appear.</li>
        <li><b>Follow any bounce or refund.</b> A returned transfer also leaves a trace in History.</li>
        <li><b>Look at the status on Fragment.</b> Check which stage your withdrawal request is at on Fragment itself. Internal timeframes aren’t confirmed in this article.</li>
        <li><b>Contact support.</b> If the issue isn’t resolved, reach out to the relevant official support with the transaction link or your address.</li>
      </ul>
      <Notice label={"Important"}>Never give your seed phrase to anyone. Neither a support agent nor a “helper” will ask for it.</Notice>
      <h2 id="yechish-ortidan-keladigan-aldov-xabarlarini">How do you spot scam messages that follow a withdrawal?</h2>
      <p>An explorer only shows public data. You don’t need a seed phrase, a password or a wallet connection to see a transfer. So if a site asks you to connect your wallet to “verify” something, stop.</p>
      <p>Warning signs:</p>
      <ul>
        <li>“Your withdrawal is frozen, connect your wallet to release it.”</li>
        <li>“We’ll buy your Stars at a premium price.”</li>
        <li>“Pay the fee upfront to unlock the transfer.”</li>
        <li>A link that looks like an explorer but differs by a letter or two.</li>
      </ul>
      <p>StarsPaymee does not buy Stars or gifts from users. If such an offer arrives in its name, it’s a lie.</p>
      <p>Don’t open suspicious links. Open the explorer yourself and enter your address yourself. More on safety: <Link href="/blog/telegram-stars-xavfsizmi">Are Telegram Stars safe</Link>.</p>
      <h2 id="gram-hamyonda-keyingi-qadamlar-va">Gram is in your wallet: next steps and a UZS alternative</h2>
      <p>According to <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, the non-custodial Gram Wallet from the Telegram team is built natively into the messenger interface. Non-custodial means the keys are with you, and keeping them safe is also your responsibility.</p>
      <p>The same source says you can use a crypto wallet to get Telegram Premium for yourself or your friends.</p>
      <p>You can also skip withdrawing altogether and spend your Stars on channel ads. We compare which option pays off better in <Link href="/blog/telegram-ads-stars-sarflash">Spending Stars on Telegram Ads</Link>.</p>
      <p>If you need Stars in UZS for your channel or bot, you don’t need crypto. @StarsPaymee_bot only asks for an @username and usually delivers the order within a few seconds. The price depends on the payment method: by card transfer (UzCard/HUMO) or from the bot balance — {som(STARS_PER_UNIT_UZS, "en")}; via Click, Payme, Uzum or Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. Details: <Link href="/stars">Stars page</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://docs.ton.org/onboarding/explorers", label: "TON blockchain explorers" },
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Will the Stars I withdrew from Fragment show up in an explorer as Stars or as Gram?", answer: "Stars never appear in an explorer, because they’re a balance inside Telegram. You’ll only see the blockchain transfer that reached your wallet address: in History if it’s Gram, in Tokens if it’s a token." },
  { question: "My wallet app shows no hash and no link — what do I search with?", answer: "Your own wallet address is enough. Paste it into the search and pick the incoming entry in History that’s close to your withdrawal time and matches the expected amount." },
  { question: "The explorer shows the entry, but my Telegram wallet balance hasn’t changed — why?", answer: "Usually the explorer has a different address open, so compare both addresses character by character first. If they match, refresh the app and give it a little time." },
  { question: "The sender side says “success” — does that mean the money reached me?", answer: "No, it only means the transfer went out. Separately check that there’s an incoming transaction on your own address and no bounce after it." },
  { question: "There’s a bounce mark next to the entry — was my withdrawal cancelled?", answer: "A bounce can mean the transfer wasn’t accepted and came back. Follow the return trail to the end and check the request status on Fragment; until then, don’t count the money as received." },
  { question: "Can data on gram.org differ from other TON explorers?", answer: "New entries can appear in different explorers at different times, so wait a little and compare. The official status of gram.org isn’t confirmed in this article." },
  { question: "The withdrawn amount is lower than expected — how much is the fee?", answer: "According to ton.org, a Gram transfer costs about 0.00039 Gram. If the gap is noticeable, look for the reason in Fragment’s withdrawal terms and rate." },
  { question: "Is it safe to search my address in an explorer? Can others see my balance?", answer: "Searching doesn’t require connecting a wallet or a seed phrase. But the data is public: anyone who knows your address can see its balance and transfers." },
  { question: "Instead of withdrawing, can I sell my Stars to StarsPaymee?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. If you get such an offer in its name, treat it as a sign of fraud." },
  { question: "Can I use the withdrawn Gram to get Premium for a friend?", answer: `Yes, ton.org says a crypto wallet can be used to get Premium for friends too. Without crypto, you can buy it in UZS via @StarsPaymee_bot with your friend’s @username: 3 months ${som(premium(3), "en")}, 6 months ${som(premium(6), "en")}, 12 months ${som(premium(12), "en")}; if they already have active Premium, the bot won’t open a new order.` },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["Stars yechib olishni eksplorerda tekshirish","Fragment Stars yechish tranzaksiya","Gram hamyonga tushdimi","gram.org eksplorer tranzaksiya","TON eksplorerda tranzaksiya qidirish","Stars yechib olish Gram","вывод Stars Fragment проверить транзакцию","проверить транзакцию в эксплорере TON","gram.org эксплорер","вывод звезд Telegram на кошелек","не пришли Gram после вывода Stars"],
  howToSteps: [
    { name: "Hamyondagi havolani oching", text: "o‘tkazma yozuvida eksplorer havolasi bo‘lsa, u kerakli tranzaksiyani darhol ochadi." },
    { name: "Havola bo‘lmasa, o‘z manzilingizni qidiring", text: "qabul qiluvchi manzilni nusxalab, eksplorer qidiruv maydoniga qo‘ying. Qo‘lda terish xatoga olib keladi." },
    { name: "Xesh bo‘lsa, uni ishlating", text: "xesh bo‘yicha qidiruv bitta aniq tranzaksiyani ochadi." },
    { name: "Manzil va tarmoqni tekshiring", text: "natija sahifasidagi manzil siznikiga harfma-harf mosmi va kerakli tarmoq ochilganmi (masalan, test tarmog‘i emasmi)." },
    { name: "History bo‘limini oching", text: "yozuvni yechish vaqtiga yaqin vaqt, kutilgan summa va kontragent bo‘yicha toping. Gram emas, token kelgan bo‘lsa, Tokens bo‘limiga qarang." },
    { name: "Topilmasa, biroz kutib qayta qidiring", text: "yaqindagi faollik eksplorerda darhol chiqmasligi mumkin." },
  ],
  locales: {
    uz: {
      title: "Stars yechib oldim: gram.org eksplorerda Gram tushganini qanday ko‘raman?",
      excerpt: "Ha, tekshirsa bo‘ladi: TON eksplorerda o‘z hamyon manzilingizni yoki tranzaksiya havolasini oching, kiruvchi yozuv bo‘lsa va bounce chiqmasa, Gram tushgan. Maqolada qadamlar va natija jadvali bor.",
      metaTitle: "Stars yechib oldim: gram.org eksplorerda Gram tushganini",
      metaDescription: "Ha, tekshirsa bo‘ladi: TON eksplorerda o‘z hamyon manzilingizni yoki tranzaksiya havolasini oching, kiruvchi yozuv bo‘lsa va bounce chiqmasa, Gram tushgan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Вывел Stars: как проверить в эксплорере gram.org, что Gram пришли?",
      excerpt: "Да, это можно проверить: откройте в эксплорере TON свой адрес кошелька или ссылку на транзакцию. Если есть входящая запись и за ней нет bounce, Gram пришли. В статье — шаги и таблица результатов.",
      metaTitle: "Вывел Stars: как проверить в эксплорере gram.org",
      metaDescription: "Да, это можно проверить: откройте в эксплорере TON свой адрес кошелька или ссылку на транзакцию. Если есть входящая запись и за ней нет bounce, Gram пришли.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Withdrew Stars: how to check Gram arrived on gram.org or a TON explorer",
      excerpt: "Yes, you can check it: open your wallet address or the transaction link in a TON explorer. If there’s an incoming entry and no bounce, the Gram arrived. The guide covers the steps and a results table.",
      metaTitle: "Withdrew Stars: how to check Gram arrived on gram.org",
      metaDescription: "Yes, you can check it: open your wallet address or the transaction link in a TON explorer. If there’s an incoming entry and no bounce, the Gram arrived.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
