import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "tg-domen-investitsiya-arziydimi";

/**
 * .tg domenga pul tikish arziydimi: qayta sotib foyda qilsa bo‘ladimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-12): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: «prem.tg 1 900 GRAM'ga sotildi» postini ko'rgan, Stars va Premium'ni so'mda oladigan foydalanuvchi «.tg domenga pul tikish arziydimi, qayta sotib foyda qilsa bo'ladimi» deb qidiradi. U .tg domenni investitsiya sifatida kolleksion username va NFT sovg'a bilan solishtirmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-12):
 *   https://fragment.com/about
 *   https://core.telegram.org/api/fragment
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
  return <p>Hozircha .tg domenni investitsiya deb hisoblashga asos kam. Bitta qimmat bitim haqidagi post bozor borligini isbotlamaydi. .tg zonasi esa Telegram yoki TON’ning rasmiy manbalarida tasdiqlanmagan. Nomni qayta sotib foyda ko‘rish mumkindir, lekin xaridor topilishi, sotuv xarajati va GRAM kursi oldindan noma’lum. Rasman tasdiqlangan muqobili esa kolleksion username.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#prem-tg-1-900-gramga", label: "«prem.tg 1 900 GRAM’ga sotildi» — bu .tg domendan foyda qilsa bo‘lishini isbotlaydimi?" },
          { href: "#tg-domen-telegram-ichida-aslida", label: ".tg domen Telegram ichida aslida nima beradi?" },
          { href: "#tg-domen-kolleksion-username-va", label: ".tg domen, kolleksion username va NFT sovg‘a: investitsiya sifatida qaysi biri qanday?" },
          { href: "#qayta-sotsangiz-qolingizda-qancha-qoladi", label: "Qayta sotsangiz, qo‘lingizda qancha qoladi?" },
          { href: "#nom-sotilmay-qolsa-nima-boladi", label: "Nom sotilmay qolsa nima bo‘ladi?" },
          { href: "#pul-tikishdan-oldin-nimalarni-tekshirish", label: "Pul tikishdan oldin nimalarni tekshirish kerak?" },
          { href: "#hamyon-va-kalitlar-bilan-qayerda", label: "Hamyon va kalitlar bilan qayerda pul yo‘qotish mumkin?" },
          { href: "#kimga-tg-domen-yoki-kolleksion", label: "Kimga .tg domen yoki kolleksion nom mantiqli, kimga yo‘q?" },
          { href: "#stars-premium-va-sovgani-somda", label: "Stars, Premium va sovg‘ani so‘mda olish investitsiyaga qanday aloqador?" },
        ]}
      />
      <h2 id="prem-tg-1-900-gramga">«prem.tg 1 900 GRAM’ga sotildi» — bu .tg domendan foyda qilsa bo‘lishini isbotlaydimi?</h2>
      <p>Yo‘q. Postda aytilishicha, prem.tg Getgems’da 1 900 GRAM’ga sotilgan. Bu summa ham, Getgems’dagi sahifa ham bu maqolada mustaqil tekshirilmagan. Aniq aytish mumkin bo‘lgani shu: nom <b>sotilgan deb e’lon qilingan</b>.</p>
      <p>Bunday xabarni ko‘pincha nomlarni tarqatayotgan loyihaning o‘zi yoki unga yaqin kanallar yoyadi. Ular uchun qimmat bitim — eng yaxshi reklama. Investorga esa bitta rekorddan ko‘ra boshqa savollarning javobi kerak:</p>
      <ul>
        <li>nechta nom umuman sotilmay qolgan;</li>
        <li>o‘rtacha nom amalda necha pulga sotilyapti;</li>
        <li>xaridor nomni ishlatish uchun oldimi yoki o‘zi ham qayta sotish uchunmi.</li>
      </ul>
      <p>prem.tg kabi qisqa, ma’noli nom bitta. Undan keyin chiqqan yuzlab oddiy nomlarning narxi haqida bu bitim hech narsa demaydi. «Mintgacha ulguring», «ertaga narx oshadi» kabi iboralar ham narxga dalil emas, shoshiltirish usuli. Shoshilib olingan aktivga keyin xaridor topish odatda qiyinroq bo‘ladi.</p>
      <h2 id="tg-domen-telegram-ichida-aslida">.tg domen Telegram ichida aslida nima beradi?</h2>
      <p>Bu savolga rasmiy javob yo‘q. telegram.org, core.telegram.org, fragment.com va ton.org’da .tg domen zonasi Telegram yoki TON loyihasi ekani haqida tasdiq topilmadi. Bunday nomlarni taklif qilayotgan sayt va botlar ham bu manbalarda uchramaydi.</p>
      <p>Chalkashlik ko‘pincha bitta so‘zdan chiqadi. Telegram’ning <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">Fragment haqidagi texnik hujjatida</a> «Telegram domains» iborasi bor. Lekin u .tg zonasini emas, kolleksion username’larni bildiradi. Shu hujjatga ko‘ra kolleksion username oddiy @username kabi ishlaydi va global qidiruvda chiqadi. Uning egaligini TON blokcheyni ta’minlaydi.</p>
      <Notice label={"Muhim"}>Aktivning narxi oxir-oqibat uni nimaga ishlatish mumkinligiga bog‘liq. Kolleksion username’ning Telegram’dagi vazifasi hujjatda yozilgan. .tg nomning vazifasi esa tasdiqlanmagan, shuning uchun uning qiymatini baholashga ham tayanch yo‘q.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="tg-domen-kolleksion-username-va">.tg domen, kolleksion username va NFT sovg‘a: investitsiya sifatida qaysi biri qanday?</h2>
      <CompareTable
        headers={["Mezon", ".tg domen", "Kolleksion username", "NFT sovg‘a"]}
        rows={[
          ["Kim chiqaradi", "Uchinchi tomon loyihasi, rasmiy tasdiq yo‘q", "Telegram, savdosi Fragment orqali", "Telegram"],
          ["Egalik qayerda qayd etiladi", "Bu maqolada tasdiqlanmagan", "Ochiq TON blokcheynida", "Telegram ilovasida ko‘rinadi"],
          ["Qayerda sotiladi", "Postlarda Getgems tilga olinadi, tekshirilmagan", "Fragment", "Sotish shartlari ilovada ko‘rsatiladi"],
          ["Sotuv xarajati", "Noma’lum", "5% komissiya va ~1 Gram blokcheyn to‘lovi", "Maydonga bog‘liq"],
          ["Telegram ichida nima beradi", "Tasdiqlanmagan", "Kanal yoki profil manzili, global qidiruv", "Profil bezagi, kolleksiya"],
          ["Ma’lumot manbasi", "Faqat kanal postlari", "core.telegram.org va fragment.com", "Telegram ilovasi"],
        ]}
      />
      <p>Fragment o‘zini <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">foydalanuvchilar o‘rtasida kolleksiya buyumlari savdosini yo‘lga qo‘yadigan bepul platforma</a> deb ta’riflaydi. Unda username’lar savdosi va Telegram TON blokcheynida cheklangan miqdorda chiqargan virtual raqamlar bor. Har bir buyum ochiq TON blokcheynida manzil egasining mulki sifatida doimiy qayd etiladi.</p>
      <p>Username qanday sotib olinishi va auksion qanday o‘tishi <Link href="/blog/telegram-username-sotib-olish">kolleksion username xaridi bo‘yicha qo‘llanmada</Link> yozilgan. NFT sovg‘a narxi o‘sishiga tikishdagi xavflar <Link href="/blog/telegram-nft-investitsiya">NFT investitsiya maqolasida</Link> ko‘rib chiqilgan.</p>
      <h2 id="qayta-sotsangiz-qolingizda-qancha-qoladi">Qayta sotsangiz, qo‘lingizda qancha qoladi?</h2>
      <p>Faraz qilaylik, kolleksion nomni 100 GRAM’ga olib, 150 GRAM’ga sotdingiz. Raqamlar shartli, bozor narxi emas. Fragment’da <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">har bir sotuvdan 5% komissiya olinadi, bundan tashqari taxminan 1 Gram blokcheyn to‘lovi bor</a>. 150 GRAM’dan 7,5 GRAM komissiya va ~1 GRAM to‘lov ketadi, qo‘lingizda taxminan 141,5 GRAM qoladi. Qog‘ozdagi 50 GRAM foyda amalda 41,5 GRAM’ga tushadi.</p>
      <p>Endi kursni qo‘shing. Sotguningizcha GRAM’ning so‘mdagi qiymati 30% tushdi, deylik (bu ham shartli misol). Unda 141,5 GRAM so‘mda xarid kunidagi taxminan 99 GRAM qiymatiga teng bo‘ladi. GRAM’da foyda ko‘rinsa ham, so‘mda zarar chiqadi.</p>
      <p>Hisobni har safar shu tartibda qiling:</p>
      <Steps>
        <Step title={"Xarid narxini yozing"}>GRAM’da va o‘sha kundagi so‘m qiymatida.</Step>
        <Step title={"Sotuv komissiyasini ayiring"}>Fragment’da 5%, boshqa maydonda o‘sha maydon shartlariga qarab.</Step>
        <Step title={"Tarmoq to‘lovini ayiring"}>Fragment’da sotuvda taxminan 1 Gram; hamyonlar orasidagi boshqa o‘tkazmalarda ham to‘lov bo‘lishi mumkin.</Step>
        <Step title={"So‘mga qayta o‘giring"}>sotuv kunidagi kurs bo‘yicha va xarid kunidagi summa bilan solishtiring.</Step>
        <Step title={"Kutish muddatini hisobga oling"}>xaridor topilguncha pulingiz band turadi va boshqa ishga ketmaydi.</Step>
      </Steps>
      <p>.tg nomlar uchun sotuv komissiyasi, ro‘yxatdan o‘tkazish va uzaytirish to‘lovlari rasmiy manbada yo‘q. Shuning uchun sotuvchi aytgan raqamlarga emas, o‘zingiz tekshirgan shartlarga tayaning. Narxlar nega endi GRAM’da yozilishi <Link href="/blog/toncoin-endi-gram">GRAM haqidagi maqolada</Link> tushuntirilgan.</p>
      <h2 id="nom-sotilmay-qolsa-nima-boladi">Nom sotilmay qolsa nima bo‘ladi?</h2>
      <p>Har qanday kolleksion aktivda asosiy xavf — likvidlik: sotuvga qo‘yilgan narx hali sotilgan narx emas. .tg nomlarda bu xavf kuchliroq:</p>
      <ul>
        <li>talab qisqa va ma’noli nomlarga bor, oddiy nom ko‘pincha xaridorsiz qoladi;</li>
        <li>bozor yangi, solishtirish uchun narx tarixi deyarli yo‘q;</li>
        <li>loyiha to‘xtab qolsa, nomning ishlatilishi ham qolmasligi mumkin;</li>
        <li>xaridor bilan to‘g‘ridan-to‘g‘ri kelishuvda kafil bo‘ladigan tomon yo‘q.</li>
      </ul>
      <p>Kolleksion username yoki NFT sovg‘ada ham taklif kelmay qolishi bo‘ladi. Sabablari va xaridor topish yo‘llari <Link href="/blog/nft-gift-xarid-taklifi-kelmayapti">gift xarid taklifi kelmayotgani haqidagi maqolada</Link> yozilgan. NFT sovg‘alar uchun qaysi bozorlar ishlashi <Link href="/blog/getgems-muqobili-nft-sovga-bozori">Getgems muqobillari ro‘yxatida</Link> bor.</p>
      <p>Xarid qilishdan oldin uchta savolga javob tayyorlang: qayerda sotaman, kimga sotaman va qancha kutishga tayyorman. Javob bo‘lmasa, bu investitsiya emas, taxmin.</p>
      <h2 id="pul-tikishdan-oldin-nimalarni-tekshirish">Pul tikishdan oldin nimalarni tekshirish kerak?</h2>
      <Steps>
        <Step title={"Loyiha kimga tegishli ekanini aniqlang"}>u telegram.org, core.telegram.org, fragment.com yoki ton.org’da tilga olinganmi. .tg uchun hozircha bunday tasdiq yo‘q.</Step>
        <Step title={"Nom nimaga yarashini bilib oling"}>Telegram ichida manzil bo‘lib ishlaydimi yoki shunchaki egalik yozuvimi.</Step>
        <Step title={"Mustaqil sotuvlarni izlang"}>loyiha kanalidagi bitta bitimga ishonmang, boshqa egalarning sotuvlarini ko‘ring.</Step>
        <Step title={"Barcha to‘lovlarni yozma so‘rang"}>ro‘yxatdan o‘tkazish, uzaytirish, sotuv komissiyasi. Rasmiy hujjatda yo‘q shart — xavf belgisi.</Step>
        <Step title={"Yo‘qotishga tayyor summani belgilang"}>oylik Stars yoki Premium uchun ajratgan pulni bunga ishlatmang.</Step>
        <Step title={"Hamyonni oldindan sozlang"}>seed-iborani xavfsiz joyda saqlang, keyingi bo‘limga qarang.</Step>
      </Steps>
      <p>Taklifdan voz kechish uchun quyidagilardan bittasi yetarli:</p>
      <ul>
        <li>sotuvchi «bugun olmasang, ertaga narx ikki barobar» deydi;</li>
        <li>dalil sifatida faqat skrinshot yoki boshqa kanaldagi post tashlanadi;</li>
        <li>nomni «sizga yozdirish» uchun hamyon kaliti, seed-ibora yoki Telegram kodi so‘raladi;</li>
        <li>oldindan «band qilish» uchun GRAM yuborishni talab qilishadi.</li>
      </ul>
      <h2 id="hamyon-va-kalitlar-bilan-qayerda">Hamyon va kalitlar bilan qayerda pul yo‘qotish mumkin?</h2>
      <p>Fragment <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">maxfiy kalitlarni saqlamaydi va hamyonni tiklay olmaydi</a>. Buyum blokcheynda manzil egasiga yozilgani uchun seed-ibora yo‘qolsa, amalda unga bog‘langan username yoki boshqa buyum ham qo‘ldan ketadi. .tg loyihasida bunday holatda nima bo‘lishi rasmiy manbada yozilmagan.</p>
      <p>Fragment ma’lumotiga ko‘ra, ega kolleksiya buyumini TON blokcheyni orqali boshqa odamga bepul o‘tkaza oladi. Kimdir «o‘tkazish haqi» yoki «tasdiqlash uchun GRAM yuboring» desa, bu shubhali belgi.</p>
      <Notice label={"Muhim"}>Seed-ibora, Telegram SMS kodi va 2FA parolini hech kimga bermang — «sotuvchi», «garant» yoki «support»ga ham. Hamyon ulanishi va akkaunt himoyasi <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">Fragment hamyoni haqidagi maqolada</Link> batafsil yozilgan.</Notice>
      <p>Uchinchi tomon .tg reyestrlari haqida Telegram, TON yoki Fragment’dan rasmiy ogohlantirish topilmadi. Bu xavf yo‘q degani emas: shunchaki bu loyihalar haqida rasmiy baho yo‘q.</p>
      <h2 id="kimga-tg-domen-yoki-kolleksion">Kimga .tg domen yoki kolleksion nom mantiqli, kimga yo‘q?</h2>
      <p>Mantiqli bo‘lishi mumkin:</p>
      <ul>
        <li>aniq loyiha uchun nom kerak, pulni yo‘qotishga tayyor va GRAM bilan ishlashni biladigan odamga;</li>
        <li>kanal yoki profil uchun chiroyli manzil izlayotganga — bunda rasman ishlaydigan yo‘l kolleksion username.</li>
      </ul>
      <p>Mantiqsiz:</p>
      <ul>
        <li>«bir haftada qayta sotaman» deb olayotganga;</li>
        <li>oylik byudjetini tikayotganga;</li>
        <li>hamyonini hali sozlamagan va seed-iborani qayerda saqlashni bilmaydiganga.</li>
      </ul>
      <p>NFT sovg‘a dizayni yoqsa, uni kolleksiya uchun olish mumkin, lekin narxi oshishiga tayanmang. Kanal uchun oddiy bo‘sh @username yetarli bo‘lsa, uchala aktiv ham shart emas.</p>
      <h2 id="stars-premium-va-sovgani-somda">Stars, Premium va sovg‘ani so‘mda olish investitsiyaga qanday aloqador?</h2>
      <p>Hech qanday. Stars va Premium iste’mol uchun: ular akkauntga tushadi va sarflanadi. StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi, shuning uchun ularni «keyin sotaman» deb olmang.</p>
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali <Link href="/stars">Stars</Link> narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. <Link href="/premium">Premium</Link> narxi har qanday usulda bir xil: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Faol Premium obunasi bor akkauntga bot yangi buyurtma ochmaydi.</p>
      <p>Buyurtma uchun faqat @username kerak. Parol yoki SMS kod so‘ralmaydi, kripto hamyon, xalqaro karta va VPN kerak emas. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Tayyor kolleksion sovg‘ani botdagi NFT Market’dan so‘mda olsa bo‘ladi — <Link href="/gifts">sovg‘alar sahifasi</Link>. StarsPaymee mustaqil xizmat, uning xizmatlari orasida .tg domen yo‘q.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "prem.tg haqiqatan 1 900 GRAM’ga sotilganmi?", answer: "Bu raqam faqat postlarda uchraydi, mustaqil tasdiq topilmadi. Getgems sahifasi bu maqolada tekshirilmagan, shuning uchun summani dalil emas, da’vo deb qabul qiling." },
  { question: "Bitta nom qimmat sotilgan bo‘lsa, menikiga ham xaridor chiqadimi?", answer: "Bunga asos yo‘q. Qisqa va ma’noli nom kam uchraydi, oddiy nomlarning narxi esa bunday bitimdan bilinmaydi. Avval boshqa egalarning real sotuvlarini qidiring." },
  { question: "Mintdan oldin arzon .tg nom olib, keyin qimmatga sotsam bo‘ladimi?", answer: "Foyda kafolatlanmagan. Xaridor, sotuv xarajati va loyihaning kelajagi noma’lum, «ulguring» degan chaqiriqlar esa shoshiltirish usuli." },
  { question: "Kolleksion username’ni 200 GRAM’ga sotsam, qo‘limga qancha tushadi?", answer: "Fragment’da 5% komissiya, ya’ni 10 GRAM, va taxminan 1 Gram blokcheyn to‘lovi ketadi. Qo‘lingizda taxminan 189 GRAM qoladi, so‘mdagi qiymati esa kursga bog‘liq." },
  { question: "GRAM kursi tushsa, domendan olgan foydam nima bo‘ladi?", answer: "GRAM’da foyda ko‘rsangiz ham, so‘mga o‘girganda zarar chiqishi mumkin. Xarid va sotuv kunidagi so‘m qiymatini alohida yozib boring." },
  { question: "Investitsiya uchun qaysi biri ishonchliroq: .tg nom, kolleksion username yoki NFT sovg‘a?", answer: "Rasmiy manbalarda vazifasi va savdo shartlari yozilgani — kolleksion username. NFT sovg‘ani Telegram chiqaradi, lekin narx o‘sishi kafolatlanmagan. .tg nom esa rasman tasdiqlanmagan." },
  { question: "Sotuvchi nomni o‘tkazish uchun GRAM to‘lashni so‘rayapti. Bu normalmi?", answer: "Fragment ma’lumotiga ko‘ra, kolleksiya buyumini TON blokcheyni orqali o‘tkazish bepul. Alohida «o‘tkazish haqi» yoki «tasdiqlash to‘lovi» so‘ralsa, ehtiyot bo‘ling." },
  { question: "Stars yoki NFT sovg‘ani keyin StarsPaymee’ga sotib bersam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Botda faqat xarid qilinadi." },
  { question: "Seed-iborani yo‘qotsam, investitsiya qilgan pulim nima bo‘ladi?", answer: "Fragment kalitlarni saqlamaydi va hamyonni tiklab bera olmaydi, shuning uchun hamyondagi buyumga yo‘l yopiladi. .tg nomlar bo‘yicha bunday holat qoidalari rasmiy manbada yo‘q." },
  { question: "Investitsiya qilmay, shunchaki kanal uchun chiroyli manzil kerak bo‘lsa nima qilay?", answer: "Avval bo‘sh oddiy @username’ni tekshiring, kerak bo‘lsa Fragment’dagi kolleksion username’ni ko‘ring. Kanalni bezash uchun Premium yoki sovg‘ani @StarsPaymee_bot’da so‘mda, hamyonsiz olsa bo‘ladi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Пока поводов считать домен .tg инвестицией мало. Пост об одной дорогой сделке ещё не доказывает, что рынок существует. Саму зону .tg официальные источники Telegram и TON не подтверждают. Перепродать имя с прибылью, может быть, и выйдет. Но найдётся ли покупатель, сколько уйдёт на продажу и каким будет курс GRAM, заранее неизвестно. Официально подтверждённая альтернатива — коллекционный username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#prem-tg-1-900-gramga", label: "«prem.tg продан за 1 900 GRAM» — значит, на доменах .tg можно заработать?" },
          { href: "#tg-domen-telegram-ichida-aslida", label: "Что домен .tg на самом деле даёт внутри Telegram?" },
          { href: "#tg-domen-kolleksion-username-va", label: "Домен .tg, коллекционный username и NFT-подарок: что из них как инвестиция?" },
          { href: "#qayta-sotsangiz-qolingizda-qancha-qoladi", label: "Сколько останется на руках при перепродаже?" },
          { href: "#nom-sotilmay-qolsa-nima-boladi", label: "Что будет, если имя не продастся?" },
          { href: "#pul-tikishdan-oldin-nimalarni-tekshirish", label: "Что проверить, прежде чем вкладывать деньги?" },
          { href: "#hamyon-va-kalitlar-bilan-qayerda", label: "Где можно потерять деньги с кошельком и ключами?" },
          { href: "#kimga-tg-domen-yoki-kolleksion", label: "Кому домен .tg или коллекционное имя имеет смысл, а кому нет?" },
          { href: "#stars-premium-va-sovgani-somda", label: "Как покупка Stars, Premium и подарков в сумах связана с инвестициями?" },
        ]}
      />
      <h2 id="prem-tg-1-900-gramga">«prem.tg продан за 1 900 GRAM» — значит, на доменах .tg можно заработать?</h2>
      <p>Нет. В посте говорится, что prem.tg продали на Getgems за 1 900 GRAM. Ни сумму, ни страницу на Getgems мы в этой статье самостоятельно не проверяли. Точно известно одно: о продаже имени <b>объявили</b>.</p>
      <p>Такие новости обычно распространяет сам проект, который раздаёт имена, или близкие к нему каналы. Для них дорогая сделка — лучшая реклама. Инвестору же важнее ответы на другие вопросы:</p>
      <ul>
        <li>сколько имён вообще остались непроданными;</li>
        <li>за сколько на деле продаётся обычное имя;</li>
        <li>купил ли покупатель имя, чтобы им пользоваться, или тоже ради перепродажи.</li>
      </ul>
      <p>Короткое и осмысленное имя вроде prem.tg одно. О цене сотен обычных имён, вышедших после него, эта сделка ничего не говорит. Фразы вроде «успей до минта» и «завтра цена вырастет» тоже не подтверждают цену, а просто подгоняют. Для актива, купленного в спешке, потом обычно сложнее найти покупателя.</p>
      <h2 id="tg-domen-telegram-ichida-aslida">Что домен .tg на самом деле даёт внутри Telegram?</h2>
      <p>Официального ответа на этот вопрос нет. На telegram.org, core.telegram.org, fragment.com и ton.org не нашлось подтверждения, что зона .tg — проект Telegram или TON. Сайты и боты, которые предлагают такие имена, в этих источниках тоже не упоминаются.</p>
      <p>Путаница часто идёт от одного слова. В <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">технической документации Telegram о Fragment</a> есть выражение «Telegram domains». Только речь там о коллекционных username, а не о зоне .tg. По этой документации коллекционный username работает как обычный @username и показывается в глобальном поиске. Право владения им обеспечивает блокчейн TON.</p>
      <Notice label={"Важно"}>В итоге цена актива зависит от того, как его можно использовать. Роль коллекционного username в Telegram описана в документации. Роль имени .tg не подтверждена, поэтому и оценить его стоимость не на что.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="tg-domen-kolleksion-username-va">Домен .tg, коллекционный username и NFT-подарок: что из них как инвестиция?</h2>
      <CompareTable
        headers={["Критерий", "Домен .tg", "Коллекционный username", "NFT-подарок"]}
        rows={[
          ["Кто выпускает", "Сторонний проект, официального подтверждения нет", "Telegram, торговля через Fragment", "Telegram"],
          ["Где фиксируется владение", "В этой статье не подтверждено", "В открытом блокчейне TON", "Видно в приложении Telegram"],
          ["Где продаётся", "В постах упоминается Getgems, не проверено", "Fragment", "Условия продажи показаны в приложении"],
          ["Расходы на продажу", "Неизвестны", "Комиссия 5% и ~1 Gram сбора блокчейна", "Зависят от площадки"],
          ["Что даёт внутри Telegram", "Не подтверждено", "Адрес канала или профиля, глобальный поиск", "Украшение профиля, коллекция"],
          ["Источник информации", "Только посты в каналах", "core.telegram.org и fragment.com", "Приложение Telegram"],
        ]}
      />
      <p>Fragment называет себя <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">бесплатной платформой, на которой пользователи торгуют коллекционными предметами</a>. Там продаются username и виртуальные номера, которые Telegram выпустил ограниченным тиражом в блокчейне TON. Каждый предмет навсегда записан в открытом блокчейне TON как собственность владельца адреса.</p>
      <p>Как купить username и как проходит аукцион, описано в <Link href="/blog/telegram-username-sotib-olish">руководстве по покупке коллекционного username</Link>. Чем рискует тот, кто ставит на рост цены NFT-подарка, разобрано в <Link href="/blog/telegram-nft-investitsiya">статье об NFT-инвестициях</Link>.</p>
      <h2 id="qayta-sotsangiz-qolingizda-qancha-qoladi">Сколько останется на руках при перепродаже?</h2>
      <p>Допустим, вы купили коллекционное имя за 100 GRAM и продали за 150 GRAM. Цифры условные, это не рыночные цены. На Fragment <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">с каждой продажи берут комиссию 5% и ещё примерно 1 Gram сбора блокчейна</a>. Из 150 GRAM уйдут 7,5 GRAM комиссии и около 1 GRAM сбора, на руках будет примерно 141,5 GRAM. Прибыль в 50 GRAM на бумаге на деле превращается в 41,5 GRAM.</p>
      <p>Теперь добавьте курс. Допустим, пока вы продавали, GRAM подешевел в сумах на 30% (это тоже условный пример). Тогда 141,5 GRAM в сумах будут стоить примерно как 99 GRAM на день покупки. В GRAM вы в плюсе, а в сумах получился убыток.</p>
      <p>Каждый раз считайте в таком порядке:</p>
      <Steps>
        <Step title={"Запишите цену покупки"}>в GRAM и в сумах по курсу того дня.</Step>
        <Step title={"Вычтите комиссию за продажу"}>на Fragment это 5%, на другой площадке смотрите её условия.</Step>
        <Step title={"Вычтите сбор сети"}>при продаже на Fragment это примерно 1 Gram. За другие переводы между кошельками тоже может быть сбор.</Step>
        <Step title={"Переведите обратно в сумы"}>по курсу на день продажи, и сравните с суммой на день покупки.</Step>
        <Step title={"Учтите время ожидания"}>пока ищется покупатель, деньги заморожены и не работают на другое.</Step>
      </Steps>
      <p>Комиссий за продажу, регистрацию и продление имён .tg в официальных источниках нет. Поэтому опирайтесь не на цифры продавца, а на условия, которые проверили сами. Почему цены теперь пишут в GRAM, объясняет <Link href="/blog/toncoin-endi-gram">статья о GRAM</Link>.</p>
      <h2 id="nom-sotilmay-qolsa-nima-boladi">Что будет, если имя не продастся?</h2>
      <p>У любого коллекционного актива главный риск — ликвидность: цена в объявлении ещё не цена продажи. У имён .tg этот риск выше:</p>
      <ul>
        <li>спрос есть на короткие и осмысленные имена, а обычное имя часто остаётся без покупателя;</li>
        <li>рынок новый, истории цен для сравнения почти нет;</li>
        <li>если проект закроется, пользоваться именем может стать негде;</li>
        <li>при прямой сделке с покупателем нет стороны, которая выступила бы гарантом.</li>
      </ul>
      <p>С коллекционным username или NFT-подарком тоже бывает, что предложений нет. Причины и способы найти покупателя описаны в <Link href="/blog/nft-gift-xarid-taklifi-kelmayapti">статье о том, почему не приходят предложения о покупке подарка</Link>. Какие площадки работают с NFT-подарками, смотрите в <Link href="/blog/getgems-muqobili-nft-sovga-bozori">списке альтернатив Getgems</Link>.</p>
      <p>До покупки ответьте себе на три вопроса: где продам, кому продам и сколько готов ждать. Если ответов нет, это не инвестиция, а догадка.</p>
      <h2 id="pul-tikishdan-oldin-nimalarni-tekshirish">Что проверить, прежде чем вкладывать деньги?</h2>
      <Steps>
        <Step title={"Выясните, чей это проект"}>упоминается ли он на telegram.org, core.telegram.org, fragment.com или ton.org. Для .tg такого подтверждения пока нет.</Step>
        <Step title={"Узнайте, зачем нужно имя"}>работает ли оно как адрес внутри Telegram или это просто запись о владении.</Step>
        <Step title={"Найдите независимые продажи"}>не верьте одной сделке из канала проекта, смотрите продажи других владельцев.</Step>
        <Step title={"Попросите все платежи письменно"}>регистрация, продление, комиссия за продажу. Условие, которого нет в официальной документации, — повод насторожиться.</Step>
        <Step title={"Определите сумму, которую не жалко потерять"}>не берите на это деньги, отложенные на Stars или Premium на месяц.</Step>
        <Step title={"Настройте кошелёк заранее"}>храните seed-фразу в надёжном месте, подробнее в следующем разделе.</Step>
      </Steps>
      <p>Чтобы отказаться от предложения, хватит любого из этих признаков:</p>
      <ul>
        <li>продавец говорит: «Не купишь сегодня — завтра цена удвоится»;</li>
        <li>в качестве доказательства присылают только скриншот или пост из другого канала;</li>
        <li>чтобы «записать имя на вас», просят ключ кошелька, seed-фразу или код Telegram;</li>
        <li>требуют заранее отправить GRAM за «бронь».</li>
      </ul>
      <h2 id="hamyon-va-kalitlar-bilan-qayerda">Где можно потерять деньги с кошельком и ключами?</h2>
      <p>Fragment <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">не хранит приватные ключи и не может восстановить кошелёк</a>. Предмет в блокчейне закреплён за владельцем адреса. Если seed-фраза потеряна, на деле теряются и username или другие предметы, привязанные к этому кошельку. Что происходит в такой ситуации с проектом .tg, официальные источники не сообщают.</p>
      <p>По данным Fragment, владелец может бесплатно передать коллекционный предмет другому человеку через блокчейн TON. Если кто-то просит «плату за передачу» или «отправить GRAM для подтверждения», это подозрительно.</p>
      <Notice label={"Важно"}>Никому не сообщайте seed-фразу, SMS-код Telegram и пароль 2FA — ни «продавцу», ни «гаранту», ни «поддержке». Подключение кошелька и защита аккаунта подробно описаны в <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">статье о кошельке Fragment</Link>.</Notice>
      <p>Официальных предупреждений от Telegram, TON или Fragment о сторонних реестрах .tg мы не нашли. Это не значит, что риска нет. Просто официальной оценки этих проектов нет.</p>
      <h2 id="kimga-tg-domen-yoki-kolleksion">Кому домен .tg или коллекционное имя имеет смысл, а кому нет?</h2>
      <p>Может иметь смысл:</p>
      <ul>
        <li>тому, кому имя нужно для конкретного проекта, кто готов потерять деньги и умеет обращаться с GRAM;</li>
        <li>тому, кто ищет красивый адрес для канала или профиля. Официально работающий вариант здесь — коллекционный username.</li>
      </ul>
      <p>Не имеет смысла:</p>
      <ul>
        <li>тому, кто берёт с мыслью «перепродам через неделю»;</li>
        <li>тому, кто ставит месячный бюджет;</li>
        <li>тому, кто ещё не настроил кошелёк и не знает, где хранить seed-фразу.</li>
      </ul>
      <p>Если нравится дизайн NFT-подарка, его можно купить в коллекцию, но рассчитывать на рост цены не стоит. Если каналу хватит обычного свободного @username, ни один из трёх активов не нужен.</p>
      <h2 id="stars-premium-va-sovgani-somda">Как покупка Stars, Premium и подарков в сумах связана с инвестициями?</h2>
      <p>Никак. Stars и Premium покупают, чтобы пользоваться: они зачисляются на аккаунт и тратятся. StarsPaymee не выкупает Stars и подарки у пользователей, поэтому не берите их в расчёте «потом продам».</p>
      <p>Цена <Link href="/stars">Stars</Link> в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> зависит от способа оплаты. Переводом на карту UzCard/HUMO или с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Цена <Link href="/premium">Premium</Link> одинакова при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Если на аккаунте уже действует Premium, бот новый заказ не откроет.</p>
      <p>Для заказа нужен только @username. Пароль и SMS-код не нужны, криптокошелёк, иностранная карта и VPN тоже. Заказ обычно доставляется автоматически за несколько секунд. Готовый коллекционный подарок можно купить в сумах в NFT Market внутри бота — на <Link href="/gifts">странице подарков</Link>. StarsPaymee — независимый сервис, доменов .tg среди его услуг нет.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "prem.tg правда продали за 1 900 GRAM?", answer: "Эта цифра есть только в постах, независимого подтверждения мы не нашли. Страницу на Getgems в этой статье не проверяли, так что считайте сумму заявлением, а не доказательством." },
  { question: "Если одно имя продали дорого, найдётся ли покупатель на моё?", answer: "Оснований так думать нет. Короткие осмысленные имена редки, а цену обычных имён по такой сделке не понять. Сначала найдите реальные продажи других владельцев." },
  { question: "Можно купить дешёвое имя .tg до минта и потом продать дороже?", answer: "Прибыль никто не гарантирует. Покупатель, расходы на продажу и будущее проекта неизвестны, а призывы «успей» — способ поторопить." },
  { question: "Сколько я получу, если продам коллекционный username за 200 GRAM?", answer: "На Fragment уйдёт комиссия 5%, то есть 10 GRAM, и около 1 Gram сбора блокчейна. Останется примерно 189 GRAM, а сколько это в сумах, зависит от курса." },
  { question: "Что будет с прибылью от домена, если курс GRAM упадёт?", answer: "Даже с плюсом в GRAM при переводе в сумы может выйти минус. Записывайте стоимость в сумах отдельно на день покупки и на день продажи." },
  { question: "Что надёжнее для вложений: имя .tg, коллекционный username или NFT-подарок?", answer: "Назначение и условия торговли описаны в официальных источниках только у коллекционного username. NFT-подарок выпускает Telegram, но рост его цены не гарантирован. Имя .tg официально не подтверждено." },
  { question: "Продавец просит заплатить GRAM за передачу имени. Это нормально?", answer: "По данным Fragment, передача коллекционного предмета через блокчейн TON бесплатна. Если просят отдельную «плату за передачу» или «платёж для подтверждения», будьте осторожны." },
  { question: "Можно потом продать Stars или NFT-подарок StarsPaymee?", answer: "Нет, StarsPaymee не выкупает у пользователей ни Stars, ни подарки. В боте можно только покупать." },
  { question: "Что будет с вложенными деньгами, если я потеряю seed-фразу?", answer: "Fragment не хранит ключи и не может восстановить кошелёк, поэтому доступ к предмету на этом кошельке пропадёт. Как это работает для имён .tg, официальные источники не пишут." },
  { question: "Мне не нужны инвестиции, просто нужен красивый адрес канала. Что делать?", answer: "Сначала проверьте, свободен ли обычный @username, а если нужно, посмотрите коллекционные username на Fragment. Premium или подарок для оформления канала можно купить в @StarsPaymee_bot в сумах, без кошелька." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>There’s little reason yet to treat a .tg domain as an investment. One expensive sale mentioned in a channel post doesn’t prove there’s a market. The .tg zone also isn’t confirmed in official Telegram or TON sources. You might resell a name at a profit, but you can’t know in advance whether a buyer will appear, what selling will cost or where the GRAM rate will go. The officially documented alternative is a collectible username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#prem-tg-1-900-gramga", label: "“prem.tg sold for 1 900 GRAM”: does that prove .tg domains make money?" },
          { href: "#tg-domen-telegram-ichida-aslida", label: "What does a .tg domain actually do inside Telegram?" },
          { href: "#tg-domen-kolleksion-username-va", label: ".tg domain vs collectible username vs NFT gift: which works as an investment?" },
          { href: "#qayta-sotsangiz-qolingizda-qancha-qoladi", label: "If you resell, how much do you actually keep?" },
          { href: "#nom-sotilmay-qolsa-nima-boladi", label: "What happens if the name doesn’t sell?" },
          { href: "#pul-tikishdan-oldin-nimalarni-tekshirish", label: "What should you check before putting money in?" },
          { href: "#hamyon-va-kalitlar-bilan-qayerda", label: "Where can you lose money with wallets and keys?" },
          { href: "#kimga-tg-domen-yoki-kolleksion", label: "Who might a .tg domain or collectible name make sense for, and who should skip it?" },
          { href: "#stars-premium-va-sovgani-somda", label: "What does buying Stars, Premium or gifts in soums have to do with investing?" },
        ]}
      />
      <h2 id="prem-tg-1-900-gramga">“prem.tg sold for 1 900 GRAM”: does that prove .tg domains make money?</h2>
      <p>No. According to the post, prem.tg sold on Getgems for 1 900 GRAM. We haven’t independently checked the amount or the Getgems page for this article. All we can say for sure is that the name was <b>announced as sold</b>.</p>
      <p>News like this often comes from the project selling the names, or from channels close to it. For them, an expensive sale is the best advertising there is. An investor needs answers to other questions:</p>
      <ul>
        <li>how many names never sold at all;</li>
        <li>what a typical name actually sells for;</li>
        <li>whether the buyer wanted to use the name or just resell it.</li>
      </ul>
      <p>A short, meaningful name like prem.tg is one of a kind. That sale tells you nothing about what the hundreds of ordinary names released after it are worth. Phrases like “get in before the mint” or “the price goes up tomorrow” aren’t evidence about price either. They’re a way to rush you, and a rushed purchase is usually harder to sell later.</p>
      <h2 id="tg-domen-telegram-ichida-aslida">What does a .tg domain actually do inside Telegram?</h2>
      <p>There’s no official answer. We found nothing on telegram.org, core.telegram.org, fragment.com or ton.org confirming that a .tg domain zone is a Telegram or TON project. The websites and bots selling these names don’t appear in those sources either.</p>
      <p>The confusion often comes from a single phrase. Telegram’s <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">technical documentation on Fragment</a> mentions “Telegram domains”. That phrase means collectible usernames, not a .tg zone. The same document says a collectible username works just like a regular @username and shows up in global search. Its ownership is secured by the TON blockchain.</p>
      <Notice label={"Important"}>In the end, an asset’s price depends on what you can do with it. Telegram’s documentation says what a collectible username does. Nothing official says what a .tg name does, so there’s nothing to base its value on.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="tg-domen-kolleksion-username-va">.tg domain vs collectible username vs NFT gift: which works as an investment?</h2>
      <CompareTable
        headers={["Criterion", ".tg domain", "Collectible username", "NFT gift"]}
        rows={[
          ["Who issues it", "A third-party project, no official confirmation", "Telegram, traded via Fragment", "Telegram"],
          ["Where ownership is recorded", "Not confirmed in this article", "On the public TON blockchain", "Visible in the Telegram app"],
          ["Where it’s sold", "Posts mention Getgems, not verified", "Fragment", "The app shows the selling terms"],
          ["Cost of selling", "Unknown", "5% fee plus a ~1 Gram blockchain fee", "Depends on the marketplace"],
          ["What it does in Telegram", "Not confirmed", "Channel or profile address, global search", "Profile decoration, collection"],
          ["Source of information", "Channel posts only", "core.telegram.org and fragment.com", "Telegram app"],
        ]}
      />
      <p>Fragment calls itself <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">a free platform which facilitates the transaction of collectibles between users</a>. It handles sales of usernames and of the virtual phone numbers Telegram released on the TON blockchain in a limited run. Each item is permanently recorded on the public TON blockchain as the property of whoever holds the matching address.</p>
      <p>How to buy a username and how the auction works are covered in the <Link href="/blog/telegram-username-sotib-olish">guide to buying collectible usernames</Link>. The risks of betting on NFT gift prices are covered in the <Link href="/blog/telegram-nft-investitsiya">article on NFT investing</Link>.</p>
      <h2 id="qayta-sotsangiz-qolingizda-qancha-qoladi">If you resell, how much do you actually keep?</h2>
      <p>Say you bought a collectible name for 100 GRAM and sold it for 150 GRAM. These figures are made up for the example, not market prices. Fragment takes <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">a 5% platform fee on each sale, plus a blockchain fee of about 1 Gram</a>. Of the 150 GRAM, 7.5 GRAM goes to the fee and ~1 GRAM to the network, so you keep about 141.5 GRAM. Your 50 GRAM profit on paper is really 41.5 GRAM.</p>
      <p>Now add the exchange rate. Suppose GRAM falls 30% against the soum before you sell (again, just an example). Your 141.5 GRAM is then worth about what 99 GRAM was worth on the day you bought. You made a profit in GRAM but lost money in soums.</p>
      <p>Run the numbers in this order every time:</p>
      <Steps>
        <Step title={"Write down the purchase price"}>in GRAM and in soums on that day.</Step>
        <Step title={"Subtract the sales fee"}>5% on Fragment, or whatever another marketplace charges.</Step>
        <Step title={"Subtract the network fee"}>about 1 Gram per sale on Fragment. Other transfers between wallets may also cost something.</Step>
        <Step title={"Convert back to soums"}>at the rate on the day you sell, then compare with what you paid.</Step>
        <Step title={"Count the waiting time"}>until a buyer turns up, your money is tied up and can’t be used for anything else.</Step>
      </Steps>
      <p>No official source lists the sales fees, registration costs or renewal costs for .tg names. So rely on terms you’ve checked yourself, not on figures the seller gives you. Why prices are now quoted in GRAM is explained in the <Link href="/blog/toncoin-endi-gram">article on GRAM</Link>.</p>
      <h2 id="nom-sotilmay-qolsa-nima-boladi">What happens if the name doesn’t sell?</h2>
      <p>The main risk with any collectible is liquidity: the price on a listing isn’t the price it sells for. The risk is higher with .tg names:</p>
      <ul>
        <li>buyers want short, meaningful names, and ordinary ones often get no offers;</li>
        <li>the market is new, so there’s almost no price history to compare against;</li>
        <li>if the project shuts down, the name may stop being useful;</li>
        <li>in a direct deal with a buyer, nobody stands behind the deal.</li>
      </ul>
      <p>Collectible usernames and NFT gifts can go without offers too. The reasons, and ways to find a buyer, are in the <Link href="/blog/nft-gift-xarid-taklifi-kelmayapti">article on why gift offers aren’t coming in</Link>. Marketplaces that work for NFT gifts are listed in the <Link href="/blog/getgems-muqobili-nft-sovga-bozori">roundup of Getgems alternatives</Link>.</p>
      <p>Before you buy, answer three questions: where will I sell it, who will I sell it to, and how long am I willing to wait? Without answers, you’re guessing, not investing.</p>
      <h2 id="pul-tikishdan-oldin-nimalarni-tekshirish">What should you check before putting money in?</h2>
      <Steps>
        <Step title={"Find out who runs the project"}>is it mentioned on telegram.org, core.telegram.org, fragment.com or ton.org? There’s no such confirmation for .tg so far.</Step>
        <Step title={"Learn what the name is for"}>does it work as an address inside Telegram, or is it just an ownership record?</Step>
        <Step title={"Look for independent sales"}>don’t trust a single deal in the project’s own channel. Look at sales by other owners.</Step>
        <Step title={"Ask for every fee in writing"}>registration, renewal, sales fee. A condition that isn’t in any official document is a warning sign.</Step>
        <Step title={"Set an amount you can afford to lose"}>don’t use the money you set aside for Stars or Premium each month.</Step>
        <Step title={"Set up your wallet in advance"}>store your seed phrase safely (see the next section).</Step>
      </Steps>
      <p>Any one of these is enough reason to walk away:</p>
      <ul>
        <li>the seller says “buy today, tomorrow it’s double”;</li>
        <li>the only proof is a screenshot or a post from some other channel;</li>
        <li>you’re asked for a wallet key, seed phrase or Telegram code to “register the name to you”;</li>
        <li>you’re asked to send GRAM upfront to “reserve” the name.</li>
      </ul>
      <h2 id="hamyon-va-kalitlar-bilan-qayerda">Where can you lose money with wallets and keys?</h2>
      <p>Fragment <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">never stores private keys and can’t restore wallets</a>. Items are recorded on the blockchain to the address holder, so if you lose your seed phrase, you effectively lose the username or other item tied to it. No official source says what happens in that case with a .tg project.</p>
      <p>According to Fragment, any owner can transfer a collectible to someone else for free via the TON blockchain. If someone asks for a “transfer fee” or tells you to “send GRAM for verification”, be suspicious.</p>
      <Notice label={"Important"}>Never give your seed phrase, Telegram SMS code or 2FA password to anyone, including a “seller”, “escrow agent” or “support”. Wallet connections and account protection are covered in detail in the <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">article on Fragment wallets</Link>.</Notice>
      <p>We found no official warning from Telegram, TON or Fragment about third-party .tg registries. That doesn’t mean there’s no risk. It only means no official body has assessed these projects.</p>
      <h2 id="kimga-tg-domen-yoki-kolleksion">Who might a .tg domain or collectible name make sense for, and who should skip it?</h2>
      <p>It might make sense for:</p>
      <ul>
        <li>someone who needs a name for a specific project, can afford to lose the money and knows how to handle GRAM;</li>
        <li>someone looking for a nice address for a channel or profile. Here the option that officially works is a collectible username.</li>
      </ul>
      <p>It doesn’t make sense for:</p>
      <ul>
        <li>someone buying to “flip it within a week”;</li>
        <li>someone putting in their monthly budget;</li>
        <li>someone who hasn’t set up a wallet yet and doesn’t know where to keep a seed phrase.</li>
      </ul>
      <p>If you like an NFT gift’s design, you can buy it for your collection, just don’t count on its price going up. If a free regular @username is enough for your channel, you don’t need any of the three.</p>
      <h2 id="stars-premium-va-sovgani-somda">What does buying Stars, Premium or gifts in soums have to do with investing?</h2>
      <p>Nothing. Stars and Premium are for using: they land on your account and get spent. StarsPaymee doesn’t buy Stars or gifts back from users, so don’t buy them planning to “sell later”.</p>
      <p>Through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, the price of <Link href="/stars">Stars</Link> depends on how you pay. By UzCard/HUMO card transfer or from your bot balance, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")}. Via Click, Payme, Uzum or Paynet, it costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. <Link href="/premium">Premium</Link> costs the same whatever the payment method: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. The bot won’t open a new order for an account that already has an active Premium subscription.</p>
      <p>All you need to order is an @username. You won’t be asked for a password or SMS code, and you don’t need a crypto wallet, an international card or a VPN. Orders are usually delivered automatically within a few seconds. Ready-made collectible gifts are available in soums in the bot’s NFT Market (see the <Link href="/gifts">gifts page</Link>). StarsPaymee is an independent service and doesn’t sell .tg domains.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Did prem.tg really sell for 1 900 GRAM?", answer: "That figure only appears in posts, and we found no independent confirmation. We didn’t check the Getgems page for this article, so treat the amount as a claim, not proof." },
  { question: "If one name sold for a lot, will mine find a buyer too?", answer: "There’s no reason to expect that. Short, meaningful names are rare, and one deal like that says nothing about what ordinary names are worth. Look for real sales by other owners first." },
  { question: "Can I buy a cheap .tg name before the mint and sell it for more later?", answer: "Nothing guarantees a profit. The buyer, the cost of selling and the project’s future are all unknown, and “get in now” calls are a way to rush you." },
  { question: "If I sell a collectible username for 200 GRAM, how much do I get?", answer: "Fragment keeps a 5% fee, which is 10 GRAM, and there’s a blockchain fee of about 1 Gram. You’re left with roughly 189 GRAM. What that’s worth in soums depends on the exchange rate." },
  { question: "What happens to my domain profit if the GRAM rate drops?", answer: "You can come out ahead in GRAM and still lose money once you convert to soums. Keep a separate note of the soum value on the day you buy and the day you sell." },
  { question: "Which is more reliable as an investment: a .tg name, a collectible username or an NFT gift?", answer: "Only the collectible username has its purpose and trading terms written down in official sources. NFT gifts are issued by Telegram, but nothing guarantees their price will rise. The .tg name isn’t officially confirmed at all." },
  { question: "The seller wants me to pay GRAM to transfer the name. Is that normal?", answer: "According to Fragment, transferring a collectible through the TON blockchain is free. If someone asks for a separate “transfer fee” or “verification payment”, be careful." },
  { question: "Can I sell my Stars or NFT gift back to StarsPaymee later?", answer: "No. StarsPaymee doesn’t buy Stars or gifts from users. The bot only sells." },
  { question: "If I lose my seed phrase, what happens to the money I invested?", answer: "Fragment doesn’t store keys and can’t restore your wallet, so you lose access to whatever is in it. No official source sets out rules for this situation with .tg names." },
  { question: "I don’t want to invest, I just want a nice address for my channel. What should I do?", answer: "First check whether a free regular @username is available. If not, look at collectible usernames on Fragment. For decorating your channel, you can buy Premium or gifts in soums from @StarsPaymee_bot without a crypto wallet." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["tg domen investitsiya",".tg domen sotib olish arziydimi","tg domen qayta sotish foyda","prem.tg sotildi","GDomains tg domen","kolleksion username investitsiya","telegram nft sovga investitsiya","домен .tg инвестиция","стоит ли покупать домен .tg","prem.tg продан 1900 GRAM","GDomains Getgems .tg","коллекционный юзернейм Fragment перепродажа"],
  howToSteps: [
    { name: "Xarid narxini yozing", text: "GRAM’da va o‘sha kundagi so‘m qiymatida." },
    { name: "Sotuv komissiyasini ayiring", text: "Fragment’da 5%, boshqa maydonda o‘sha maydon shartlariga qarab." },
    { name: "Tarmoq to‘lovini ayiring", text: "Fragment’da sotuvda taxminan 1 Gram; hamyonlar orasidagi boshqa o‘tkazmalarda ham to‘lov bo‘lishi mumkin." },
    { name: "So‘mga qayta o‘giring", text: "sotuv kunidagi kurs bo‘yicha va xarid kunidagi summa bilan solishtiring." },
    { name: "Kutish muddatini hisobga oling", text: "xaridor topilguncha pulingiz band turadi va boshqa ishga ketmaydi." },
  ],
  locales: {
    uz: {
      title: ".tg domenga pul tikish arziydimi: qayta sotib foyda qilsa bo‘ladimi?",
      excerpt: "Hozircha .tg domenga foyda uchun pul tikishga asos kam: zona ham, bozor ham rasman tasdiqlanmagan. Maqolada username va NFT sovg‘a bilan taqqos, sotuv xarajati hisobi va xavflar bor.",
      metaTitle: ".tg domenga pul tikish arziydimi",
      metaDescription: "Hozircha .tg domenga foyda uchun pul tikishga asos kam: zona ham, bozor ham rasman tasdiqlanmagan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Стоит ли вкладываться в домен .tg и можно ли заработать на перепродаже?",
      excerpt: "Пока вкладываться в домен .tg ради прибыли почти не на что опереться: ни зона, ни рынок официально не подтверждены. В статье: сравнение с username и NFT-подарком, расчёт расходов на продажу и риски.",
      metaTitle: "Стоит ли вкладываться в домен .tg",
      metaDescription: "Пока вкладываться в домен .tg ради прибыли почти не на что опереться: ни зона, ни рынок официально не подтверждены.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Is a .tg domain worth investing in? Can you resell it for a profit?",
      excerpt: "This guide checks whether a .tg domain holds up as an investment. It compares .tg names with collectible usernames and NFT gifts, works through resale costs and lists the risks to check before you buy.",
      metaTitle: "Is a .tg domain worth investing in? Can you resell it for a",
      metaDescription: "This guide checks whether a .tg domain holds up as an investment. It compares .tg names with collectible usernames and NFT gifts, works through resale costs…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
