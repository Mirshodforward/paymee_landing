import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ton-org-telegram-mahsulotlari-hamyon-kerakmi";

/**
 * ton.org Telegram mahsulotlari: qaysi biriga TON hamyon kerak?
 *
 * Avtoblogyoz yasagan maqola (2026-11-14): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: ton.org yangilangani haqidagi xabarni ko'rgan, Stars, Premium yoki sovg'ani so'mda olmoqchi bo'lgan O'zbekistondagi Telegram foydalanuvchisi «ton.org Telegram mahsulotlari» deb qidiradi. U ro'yxatdagi mahsulotlardan qaysi biriga TON yoki Gram hamyon kerakligini, qaysi biri hamyonsiz, so'mda olinishini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-14):
 *   https://ton.org/
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://core.telegram.org/api/gifts
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
  return <p>ton.org ro‘yxatidagi Telegram mahsulotlarining ko‘pini Gram bilan to‘lash mumkin, lekin bu majburiy emas. Stars, Premium va sovg‘alarni hamyonsiz, faqat @username bilan so‘mda olasiz. TON hamyon blokcheyn bilan to‘g‘ridan-to‘g‘ri ishlaydigan amallardagina kerak bo‘ladi: sovg‘ani NFT qilib chiqarish, kolleksion username yoki raqam olish va reklama daromadini yechish.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#ton-org-royxatida-telegramning-qaysi", label: "ton.org ro‘yxatida Telegram’ning qaysi mahsulotlari sanalgan?" },
          { href: "#qaysi-mahsulotga-hamyon-shart-qaysi", label: "Qaysi mahsulotga hamyon shart, qaysi biri so‘mda olinadi?" },
          { href: "#ton-orgdagi-katta-raqamlar-xaridorga", label: "ton.org’dagi katta raqamlar xaridorga nimani aytadi?" },
          { href: "#stars-yoki-premium-kerak-bolsa", label: "Stars yoki Premium kerak bo‘lsa: Gram yo‘li bilan so‘m yo‘li qanchalik farq qiladi?" },
          { href: "#sovgada-hamyon-qaysi-bosqichda-kerak", label: "Sovg‘ada hamyon qaysi bosqichda kerak bo‘ladi?" },
          { href: "#kolleksion-username-raqam-va-reklama", label: "Kolleksion username, raqam va reklama daromadi: hamyonsiz iloji bormi?" },
          { href: "#stars-premium-yoki-sovgani-hamyonsiz", label: "Stars, Premium yoki sovg‘ani hamyonsiz, so‘mda qanday olasiz?" },
          { href: "#gram-wallet-telegram-ichida-turibdi", label: "Gram Wallet Telegram ichida turibdi: uni ochish yoki ulash shartmi?" },
        ]}
      />
      <h2 id="ton-org-royxatida-telegramning-qaysi">ton.org ro‘yxatida Telegram’ning qaysi mahsulotlari sanalgan?</h2>
      <p>Kanallarda ton.org yangilangani va unda Telegram mahsulotlari ro‘yxati chiqqani haqida xabar tarqaldi. Kanal posti rasmiy manba emas, shuning uchun quyidagi faktlarni to‘g‘ridan-to‘g‘ri <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> sahifasidan tekshirdik. Sayt qachon yangilangani sahifada ko‘rsatilmagan.</p>
      <p>ton.org TON’ni Telegram ichiga qurilgan blokcheyn ekotizimi deb tanishtiradi. Sayt yozishicha, bu ekotizim to‘lovlar, raqamli aktivlar va mini-ilovalarni bir-biriga bog‘laydi. Sahifada sanalgan mahsulotlar:</p>
      <ul>
        <li><b>Gram Wallet</b> — Telegram jamoasining non-custodial hamyoni, messenjer interfeysiga o‘rnatilgan.</li>
        <li><b>Botlar va Mini App’lar</b> — dasturchilar Telegram ichida ishlaydigan botlar va veb mini-ilovalar yaratadi.</li>
        <li><b>Sovg‘alar</b> — Telegram sovg‘alarini TON asosidagi NFT’ga aylantirish mumkin.</li>
        <li><b>Username’lar</b> — nomni TON blokcheyni orqali band qilib, akkaunt, kanal yoki guruhga havola qilib biriktirsa bo‘ladi.</li>
        <li><b>Kolleksion raqamlar</b> — SIM-kartaga bog‘lanmagan raqamlar. Ularni sotib-sotish va TON hisobi orqali Telegram’ga kirish mumkin.</li>
        <li><b>Stars</b> — Gram bilan sotib olinadi va Telegram ichidagi raqamli tovar, kontent va xizmatlarga sarflanadi.</li>
        <li><b>Premium</b> — kripto hamyon orqali o‘zingizga yoki do‘stingizga obuna olish mumkin.</li>
        <li><b>Giveaway’lar</b> — Stars va Premium giveaway’larini Gram bilan oldindan to‘lasa bo‘ladi.</li>
        <li><b>Reklama daromadi</b> — Telegram reklamasidan tushgan pulni Gram’da olish mumkin.</li>
        <li><b>Brauzer</b> — Telegram’ning ichki brauzeri barcha mobil va rasmiy desktop ilovalarda TON tarmog‘idagi markazlashmagan saytlarni ochadi.</li>
      </ul>
      <p>Ro‘yxatda stikerlar yo‘q. Ularni TON’ga ulash rejasi haqida rasmiy ma’lumot topilmadi, shuning uchun bu mavzuda hech narsa deb bo‘lmaydi.</p>
      <h2 id="qaysi-mahsulotga-hamyon-shart-qaysi">Qaysi mahsulotga hamyon shart, qaysi biri so‘mda olinadi?</h2>
      <p>Ro‘yxatni xaridor sifatida o‘qisangiz, mahsulotlar uch guruhga bo‘linadi. Birinchi guruhga hamyon umuman kerak emas. Ikkinchisida hamyon bir nechta to‘lov usulidan biri, xolos. Uchinchi guruh esa hamyonsiz ishlamaydi.</p>
      <CompareTable
        headers={["Mahsulot", "ton.org nima deydi", "Hamyon kerakmi", "So‘mda olish yo‘li"]}
        rows={[
          ["Telegram Stars", "Gram bilan sotib olsa bo‘ladi", "Shart emas", <span key="r0c3">@StarsPaymee_bot, <Link href="/stars">Stars sahifasi</Link></span>],
          ["Telegram Premium", "Kripto hamyon bilan olsa bo‘ladi", "Shart emas", <span key="r1c3">Bot orqali, username bo‘yicha sovg‘a mexanizmi bilan: <Link href="/premium">Premium sahifasi</Link></span>],
          ["Oddiy va kolleksion sovg‘a", "NFT’ga aylantirsa bo‘ladi", "Olish va yuborishda shart emas", <span key="r2c3">Bot va NFT Market: <Link href="/gifts">Sovg‘alar sahifasi</Link></span>],
          ["Sovg‘ani blokcheynga chiqarish", "TON’da NFT bo‘ladi", "Shart, 2FA paroli ham kerak", "Sotib olinmaydi, Telegram ichida bajariladi"],
          ["Kolleksion username", "TON blokcheyni orqali band qilinadi", "Shart", "Bu maqolada so‘mda olish yo‘li yo‘q"],
          ["SIM-kartasiz kolleksion raqam", "TON hisobi bilan ishlaydi", "Shart", "Bu maqolada so‘mda olish yo‘li yo‘q"],
          ["Reklama daromadi", "Gram’da to‘lanishi mumkin", "Yechish uchun shart", "—"],
          ["Giveaway’ni oldindan to‘lash", "Gram bilan to‘lasa bo‘ladi", "Faqat shu usul uchun", "—"],
          ["Mini App va TON saytlari", "Telegram ichida ishlaydi", "Ilovaga bog‘liq", "—"],
        ]}
      />
      <p>Jadvalda bir narsani unutmang: «Gram bilan olsa bo‘ladi» degani «faqat Gram bilan olinadi» degani emas. ton.org bitta to‘lov yo‘lini ko‘rsatadi, boshqalarini inkor qilmaydi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="ton-orgdagi-katta-raqamlar-xaridorga">ton.org’dagi katta raqamlar xaridorga nimani aytadi?</h2>
      <p>Sahifadagi «1B+» raqamidan ko‘pchilik «Telegram’da hamma TON ishlatadi» degan xulosa chiqaradi. Aslida ton.org bu raqamni Telegram’ning faol foydalanuvchilari haqida ishlatadi: integratsiya blokcheynga shuncha katta auditoriyaga yo‘l ochadi, demoqchi.</p>
      <p>Hamyonlar soni boshqacha. ton.org’ning o‘zida oylik faol hamyonlar 3,3 mln deb ko‘rsatilgan, bu Telegram auditoriyasining kichik qismi.</p>
      <p>Saytda Jetton va NFT’lar «milliard foydalanuvchiga cheklovsiz ochiq» deb yozilgan. Bu ham hozirgi foydalanuvchilar sonini emas, tarmoqning texnik imkoniyatini bildiradi.</p>
      <Notice label={"Muhim"}>Xaridor uchun ma’nosi: TON hamyoni bor odamlar Telegram foydalanuvchilarining ozchiligini tashkil qiladi. Stars, Premium va sovg‘alar hamyoni yo‘q odamlarda ham to‘liq ishlaydi.</Notice>
      <h2 id="stars-yoki-premium-kerak-bolsa">Stars yoki Premium kerak bo‘lsa: Gram yo‘li bilan so‘m yo‘li qanchalik farq qiladi?</h2>
      <p>Gram — TON blokcheynining o‘z tangasi, ilgari Toncoin nomi bilan ham tanilgan. Nom almashgani haqida <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasida yozganmiz.</p>
      <h3>Gram orqali</h3>
      <ul>
        <li>Avval tanga sotib olasiz va hamyonni to‘ldirasiz.</li>
        <li>Keyin Stars yoki Premium’ni hamyondan to‘laysiz.</li>
        <li>Oxirgi summa to‘lov paytidagi tanga kursiga bog‘liq, tanga sotib olish va o‘tkazishda qo‘shimcha xarajat chiqishi ham mumkin. Shuning uchun bu yerda aniq summa yozmaymiz.</li>
      </ul>
      <h3>So‘mda</h3>
      <ul>
        <li>Stars narxi to‘lov usuliga bog‘liq. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan 1 dona {som(STARS_PER_UNIT_UZS, "uz")} turadi. Click, Payme, Uzum yoki Paynet orqali 1 dona {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma — 50 Stars.</li>
        <li>Premium narxi hamma usulda bir xil: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi.</li>
        <li>Xalqaro karta, kripto hamyon yoki VPN kerak emas.</li>
      </ul>
      <p>Misol: kanalingizdagi postga yulduzli reaksiya qo‘yish uchun 500 Stars kerak. Gram yo‘lida tanga topasiz, hamyonni to‘ldirasiz, keyin to‘laysiz, shu orada kurs ham o‘zgarib qolishi mumkin. So‘m yo‘lida botga username’ingizni yozasiz va Click yoki karta orqali to‘laysiz.</p>
      <p>Oxirida ikkala yo‘l bir joyga olib keladi: Stars akkauntingizga tushadi, Premium akkauntga ulanadi. Hamyondagi tanga bilan Stars balansi esa alohida-alohida turadi. Bu farq <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida batafsil yozilgan.</p>
      <h2 id="sovgada-hamyon-qaysi-bosqichda-kerak">Sovg‘ada hamyon qaysi bosqichda kerak bo‘ladi?</h2>
      <p>Sovg‘a uch bosqichdan o‘tadi, hamyon esa faqat oxirgisida kerak:</p>
      <ul>
        <li><b>Oddiy sovg‘a</b> — olasiz, yuborasiz, profilga qo‘yasiz. Hamyon kerak emas.</li>
        <li><b>Kolleksion sovg‘a</b> — upgrade qilingan sovg‘ada t.me/nft formatidagi noyob havola bo‘ladi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Sovg‘a bu bosqichda ham Telegram akkauntingiz ichida turadi.</li>
        <li><b>Blokcheyndagi NFT</b> — kolleksion sovg‘ani TON’da NFT’ga aylantirish mumkin. Eksport qilinganda NFT’ni Fragment’ga import qilish uchun havola beriladi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). Hamyon aynan shu bosqichda kerak bo‘ladi.</li>
      </ul>
      <p>Chiqarishning ikki sharti bor. Birinchisi — akkauntda 2FA paroli bo‘lishi kerak. Ikkinchisi — ba’zi sovg‘alarni faqat belgilangan sanadan keyin chiqarsa bo‘ladi.</p>
      <p>Blokcheynga chiqqan sovg‘ani kolleksion username va raqamlar kabi TON orqali o‘tkazish yoki auksionga qo‘yish mumkin. Telegram blogiga ko‘ra, akkauntga kirish yo‘qolsa yoki akkaunt o‘chirilsa ham sovg‘a ustidan nazorat egasida qoladi.</p>
      <p>StarsPaymee’da oddiy sovg‘alarni botdan, tayyor kolleksion sovg‘alarni esa botdagi NFT Market’dan so‘mda olasiz. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Sovg‘ani chiqarish tartibi <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani blokcheynga o‘tkazish</Link> maqolasida qadamma-qadam yozilgan.</p>
      <h2 id="kolleksion-username-raqam-va-reklama">Kolleksion username, raqam va reklama daromadi: hamyonsiz iloji bormi?</h2>
      <p>Bu guruhda javob ko‘pincha «yo‘q».</p>
      <ul>
        <li><b>Kolleksion username</b> TON blokcheyni orqali band qilinadi va akkaunt, kanal yoki guruhga biriktiriladi. Bu jarayon hamyonsiz bo‘lmaydi. Bosqichlari <Link href="/blog/telegram-username-sotib-olish">Telegram username sotib olish</Link> maqolasida bor.</li>
        <li><b>SIM-kartasiz kolleksion raqamlar</b> TON hisobi bilan ishlaydi. Ularni sotib-sotish va ular bilan kirish uchun ham hamyon kerak.</li>
        <li><b>StarsPaymee’dagi virtual raqam</b> boshqa xizmat, u kolleksion raqam emas. Ikkisini adashtirmang, virtual raqam shartlarini botda tekshiring.</li>
        <li><b>Reklama daromadi</b> — kanal egasi uni Gram’da olishi mumkin, yechish uchun esa hamyon kerak.</li>
        <li><b>Giveaway’ni Gram bilan oldindan to‘lash</b> — kanal egasi uchun usullardan biri, majburiy emas.</li>
      </ul>
      <h2 id="stars-premium-yoki-sovgani-hamyonsiz">Stars, Premium yoki sovg‘ani hamyonsiz, so‘mda qanday olasiz?</h2>
      <Steps>
        <Step title={"Username’ni tekshiring"}>o‘zingiznikini yoki oluvchinikini. U Telegram sozlamalarida, profil bo‘limida turadi.</Step>
        <Step title={"Botni oching"}>@StarsPaymee_bot yoki uning Mini App’ini.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 dona), Premium muddati, sovg‘a yoki NFT Market’dagi kolleksion sovg‘a.</Step>
        <Step title={"@username kiriting"}>parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO o‘tkazmasi yoki bot balansi. Stars narxi tanlangan usulga qarab o‘zgaradi.</Step>
        <Step title={"Natijani tekshiring"}>buyurtma odatda bir necha soniyada (~5 soniya) avtomatik yetkaziladi. Muammo chiqsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</Step>
      </Steps>
      <Notice label={"Muhim"}>Istisno: akkauntda faol Premium bo‘lsa, bot yangi Premium buyurtmasini ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi.</Notice>
      <p>StarsPaymee mustaqil xizmat: u Telegram’dan alohida ishlaydi va uning nomidan gapirmaydi.</p>
      <h2 id="gram-wallet-telegram-ichida-turibdi">Gram Wallet Telegram ichida turibdi: uni ochish yoki ulash shartmi?</h2>
      <p>Shart emas. ton.org’ga ko‘ra, Gram Wallet messenjer ichiga o‘rnatilgan non-custodial hamyon. Non-custodial degani mablag‘ni o‘zingiz boshqarasiz, kalitni saqlash ham sizning zimmangizda. Zaxira so‘zlari haqida <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Gram hamyon zaxira so‘zlari</Link> maqolasida o‘qing.</p>
      <p>Ilovada hamyon ko‘rinib turishi so‘mdagi xaridga ta’sir qilmaydi. Uni akkauntga bog‘lash kerakmi degan savolga <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">hamyonni Telegram akkauntga bog‘lash</Link> maqolasida javob berilgan.</p>
      <p>Mini App’lar Telegram ichida ishlaydi. Biror Mini App hamyon ulashni so‘rasa, bu o‘sha ilovaning o‘z to‘lovlari uchun. Stars yoki Premium xaridiga buning aloqasi yo‘q. Ulashdan oldin ilovani kim chiqarganini va undan aslida nima kerakligini o‘ylab ko‘ring: o‘yin yoki do‘kon ichidagi to‘lov uchun hamyon ulashni so‘rashi normal, lekin zaxira so‘zlarini so‘rashi normal emas.</p>
      <p>Aldovni quyidagi belgilardan taniysiz:</p>
      <ul>
        <li>«Stars olish uchun hamyoningizni ulang» degan xabar.</li>
        <li>Zaxira so‘zlari, 2FA paroli yoki SMS kod so‘ralishi.</li>
        <li>«Tekshiruv uchun oldin kichik summa yuboring» degan talab.</li>
        <li>«ton.org yangilandi, sovg‘angizni oling» kabi havolalar, ayniqsa domen ton.org yoki telegram.org bo‘lmasa.</li>
      </ul>
      <p>Halol xizmat Stars yoki Premium uchun zaxira so‘zlari, parol yoki kod so‘ramaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "ton.org Telegram’ning rasmiy saytimi?", answer: "ton.org — TON blokcheynining sayti, u TON’ni Telegram ichiga qurilgan ekotizim deb tanishtiradi. Telegram o‘z yangiliklari va qoidalarini telegram.org’da e’lon qiladi." },
  { question: "ton.org ro‘yxatidagi mahsulotlardan foydalanish uchun alohida ro‘yxatdan o‘tish kerakmi?", answer: "Stars, Premium va sovg‘alar uchun kerak emas, Telegram akkaunti va username yetadi. Hamyon kolleksion username, raqam yoki sovg‘ani blokcheynga chiqarish kabi amallardagina kerak bo‘ladi." },
  { question: "Stars’ni Gram bilan olsam arzonroq tushadimi?", answer: "Bunga bitta javob yo‘q, chunki Gram yo‘lida narx tanga kursiga qarab o‘zgaradi. Hamyonda chiqqan yakuniy summani botdagi so‘mdagi narx bilan solishtirib ko‘ring." },
  { question: "Akamga Premium olib bermoqchiman, u kripto bilan umuman ishlamaydi. Bo‘ladimi?", answer: "Bo‘ladi: uning @username’i yetadi, obuna Telegram’ning sovg‘a mexanizmi orqali ulanadi. Faqat unda faol Premium bo‘lsa, bot yangi buyurtmani qabul qilmaydi." },
  { question: "NFT Market’dan olingan kolleksion sovg‘ani keyin o‘zim blokcheynga chiqara olamanmi?", answer: "Sovg‘a akkauntingizga kolleksion sovg‘a bo‘lib tushadi, chiqarish esa Telegram shartlari bo‘yicha bo‘ladi: 2FA paroli va hamyon kerak. Ba’zi sovg‘alarni faqat ma’lum sanadan keyin chiqarsa bo‘ladi." },
  { question: "Sovg‘ani blokcheynga chiqarishda nega 2FA paroli so‘raladi?", answer: "Telegram’ning eksport metodi akkauntning joriy 2FA parolini talab qiladi, shunda chiqarishni egasining o‘zi tasdiqlaydi. Bu parolni hech kimga, «yordam beraman» deganlarga ham aytmang." },
  { question: "Kanalimning reklama daromadini so‘mda olsa bo‘ladimi?", answer: "ton.org daromadni Gram’da olish yo‘lini ko‘rsatadi, uni yechish uchun hamyon kerak. Daromadni to‘g‘ridan-to‘g‘ri so‘mga o‘tkazish yo‘li bu maqolada tasdiqlanmagan, StarsPaymee’da ham bunday xizmat yo‘q." },
  { question: "Hamyonimda Gram bor, uni StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q. StarsPaymee foydalanuvchilardan Stars va sovg‘a sotib olmaydi, Gram sotib olish ham xizmatlari orasida yo‘q. Bot faqat sotadi va to‘lovni so‘mda qabul qiladi." },
  { question: "Botdagi virtual raqam ton.org’da aytilgan kolleksion raqam bilan bir narsami?", answer: "Yo‘q. ton.org aytgan kolleksion raqamlar SIM-kartaga bog‘lanmagan va TON hisobi bilan ishlaydi, botdagi virtual raqam esa alohida xizmat. Uning shartlarini botning o‘zida tekshiring." },
  { question: "ton.org yangilangani haqidagi xabardan keyin «sovg‘a tarqatilyapti» degan havola keldi. Ochsam bo‘ladimi?", answer: "Ochmang: rasmiy manbalarda bunday aksiya haqida ma’lumot topilmadi. Bunday havolalar odatda hamyonni ulatish yoki kod va zaxira so‘zlarini qo‘lga kiritish uchun yuboriladi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Многие продукты Telegram из списка на ton.org можно оплатить в Gram, но это не обязательно. Stars, Premium и подарки можно купить без кошелька: в сумах, по одному @username. TON-кошелёк понадобится, только если вы работаете с блокчейном напрямую. Это вывод подарка в NFT, покупка коллекционного username или номера и вывод дохода от рекламы.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#ton-org-royxatida-telegramning-qaysi", label: "Какие продукты Telegram перечислены на ton.org?" },
          { href: "#qaysi-mahsulotga-hamyon-shart-qaysi", label: "Для чего кошелёк обязателен, а что можно купить в сумах?" },
          { href: "#ton-orgdagi-katta-raqamlar-xaridorga", label: "Что большие цифры на ton.org говорят покупателю?" },
          { href: "#stars-yoki-premium-kerak-bolsa", label: "Нужны Stars или Premium: чем путь через Gram отличается от оплаты в сумах?" },
          { href: "#sovgada-hamyon-qaysi-bosqichda-kerak", label: "На каком этапе кошелёк нужен для подарка?" },
          { href: "#kolleksion-username-raqam-va-reklama", label: "Коллекционный username, номер и доход от рекламы: можно ли без кошелька?" },
          { href: "#stars-premium-yoki-sovgani-hamyonsiz", label: "Как купить Stars, Premium или подарок в сумах без кошелька?" },
          { href: "#gram-wallet-telegram-ichida-turibdi", label: "Gram Wallet встроен в Telegram: нужно ли его открывать или подключать?" },
        ]}
      />
      <h2 id="ton-org-royxatida-telegramning-qaysi">Какие продукты Telegram перечислены на ton.org?</h2>
      <p>По каналам разошлась новость: ton.org обновился, и на нём появился список продуктов Telegram. Пост в канале не считается официальным источником, поэтому мы проверили факты ниже прямо на странице <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. Когда сайт обновили, на странице не указано.</p>
      <p>ton.org называет TON блокчейн-экосистемой, встроенной в Telegram. По словам сайта, эта экосистема объединяет платежи, цифровые активы и мини-приложения. На странице перечислены такие продукты:</p>
      <ul>
        <li><b>Gram Wallet</b> — некастодиальный кошелёк от команды Telegram, встроенный в интерфейс мессенджера.</li>
        <li><b>Боты и мини-приложения</b> — разработчики создают ботов и веб-приложения, которые работают внутри Telegram.</li>
        <li><b>Подарки</b> — подарки Telegram можно превратить в NFT на базе TON.</li>
        <li><b>Username</b> — имя можно закрепить за собой через блокчейн TON и привязать как ссылку к аккаунту, каналу или группе.</li>
        <li><b>Коллекционные номера</b> — номера, не привязанные к SIM-карте. Их можно покупать и продавать, а через аккаунт TON входить по ним в Telegram.</li>
        <li><b>Stars</b> — их можно купить за Gram и тратить на цифровые товары, контент и услуги внутри Telegram.</li>
        <li><b>Premium</b> — через криптокошелёк можно оформить подписку себе или другу.</li>
        <li><b>Розыгрыши</b> — розыгрыши Stars и Premium можно заранее оплатить в Gram.</li>
        <li><b>Доход от рекламы</b> — деньги от рекламы в Telegram можно получать в Gram.</li>
        <li><b>Браузер</b> — встроенный браузер Telegram открывает децентрализованные сайты в сети TON во всех мобильных и официальных десктопных приложениях.</li>
      </ul>
      <p>Стикеров в списке нет. Официальных данных о планах подключить их к TON мы не нашли, так что ничего определённого на эту тему сказать нельзя.</p>
      <h2 id="qaysi-mahsulotga-hamyon-shart-qaysi">Для чего кошелёк обязателен, а что можно купить в сумах?</h2>
      <p>Если читать список глазами покупателя, продукты делятся на три группы. Первой группе кошелёк не нужен совсем. Во второй он лишь один из нескольких способов оплаты. Третья без кошелька не работает.</p>
      <CompareTable
        headers={["Продукт", "Что говорит ton.org", "Нужен ли кошелёк", "Как купить в сумах"]}
        rows={[
          ["Telegram Stars", "Можно купить за Gram", "Не обязателен", <span key="r0c3">@StarsPaymee_bot, <Link href="/stars">страница Stars</Link></span>],
          ["Telegram Premium", "Можно оформить через криптокошелёк", "Не обязателен", <span key="r1c3">Через бот, по username, с помощью механизма подарков: <Link href="/premium">страница Premium</Link></span>],
          ["Обычный и коллекционный подарок", "Можно превратить в NFT", "Для покупки и отправки не нужен", <span key="r2c3">Бот и NFT Market: <Link href="/gifts">страница подарков</Link></span>],
          ["Вывод подарка в блокчейн", "Подарок становится NFT в TON", "Обязателен, плюс пароль 2FA", "Не покупается, делается внутри Telegram"],
          ["Коллекционный username", "Закрепляется через блокчейн TON", "Обязателен", "В этой статье способа купить в сумах нет"],
          ["Коллекционный номер без SIM-карты", "Работает с аккаунтом TON", "Обязателен", "В этой статье способа купить в сумах нет"],
          ["Доход от рекламы", "Может выплачиваться в Gram", "Нужен для вывода", "—"],
          ["Предоплата розыгрыша", "Можно оплатить в Gram", "Только для этого способа", "—"],
          ["Мини-приложения и сайты TON", "Работают внутри Telegram", "Зависит от приложения", "—"],
        ]}
      />
      <p>Учтите одну деталь: «можно купить за Gram» не значит «можно купить только за Gram». ton.org показывает один из способов оплаты и не исключает другие.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="ton-orgdagi-katta-raqamlar-xaridorga">Что большие цифры на ton.org говорят покупателю?</h2>
      <p>Увидев на странице «1B+», многие решают, что в Telegram TON пользуются все. На самом деле ton.org приводит эту цифру о числе активных пользователей Telegram. Мысль такая: интеграция открывает блокчейну доступ к огромной аудитории.</p>
      <p>С кошельками картина другая. На том же ton.org указано 3,3 млн активных кошельков в месяц, а это небольшая часть аудитории Telegram.</p>
      <p>Там же сказано, что Jetton и NFT «доступны миллиарду пользователей без ограничений». Речь снова о технических возможностях сети, а не о нынешнем числе пользователей.</p>
      <Notice label={"Важно"}>Что это значит для покупателя: TON-кошелёк есть у меньшинства пользователей Telegram. Stars, Premium и подарки полностью работают и у тех, у кого кошелька нет.</Notice>
      <h2 id="stars-yoki-premium-kerak-bolsa">Нужны Stars или Premium: чем путь через Gram отличается от оплаты в сумах?</h2>
      <p>Gram — собственная монета блокчейна TON, раньше она была известна и как Toncoin. О смене названия мы писали в статье <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.</p>
      <h3>Через Gram</h3>
      <ul>
        <li>Сначала покупаете монеты и пополняете кошелёк.</li>
        <li>Потом оплачиваете из кошелька Stars или Premium.</li>
        <li>Итоговая сумма зависит от курса монеты в момент оплаты, а при покупке и переводе монет могут добавиться расходы. Поэтому точной суммы здесь не приводим.</li>
      </ul>
      <h3>В сумах</h3>
      <ul>
        <li>Цена Stars зависит от способа оплаты. Переводом на карту UzCard/HUMO или с баланса бота 1 звезда стоит {som(STARS_PER_UNIT_UZS, "ru")}. Через Click, Payme, Uzum или Paynet 1 звезда стоит {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars.</li>
        <li>Цена Premium одинакова при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена указана в боте.</li>
        <li>Международная карта, криптокошелёк и VPN не нужны.</li>
      </ul>
      <p>Пример: вам нужно 500 Stars, чтобы поставить звёздную реакцию под постом в канале. Через Gram вы ищете, где купить монеты, пополняете кошелёк и только потом платите. Курс за это время может измениться. В сумах вы пишете боту свой username и платите через Click или картой.</p>
      <p>Оба пути приводят к одному результату: Stars зачисляются на аккаунт, Premium подключается к аккаунту. При этом монеты в кошельке и баланс Stars хранятся раздельно. Подробно эта разница разобрана в статье <Link href="/blog/telegram-wallet-va-stars-farqi">Чем Telegram Wallet отличается от Stars</Link>.</p>
      <h2 id="sovgada-hamyon-qaysi-bosqichda-kerak">На каком этапе кошелёк нужен для подарка?</h2>
      <p>Подарок проходит три стадии, и кошелёк нужен только на последней:</p>
      <ul>
        <li><b>Обычный подарок.</b> Получаете, отправляете, ставите в профиль. Кошелёк не нужен.</li>
        <li><b>Коллекционный подарок.</b> После улучшения у подарка появляется уникальная ссылка вида t.me/nft (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). На этой стадии подарок всё ещё хранится в вашем аккаунте Telegram.</li>
        <li><b>NFT в блокчейне.</b> Коллекционный подарок можно превратить в NFT в сети TON. При экспорте выдаётся ссылка для импорта NFT на Fragment (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). Кошелёк нужен именно здесь.</li>
      </ul>
      <p>Для вывода есть два условия. Первое: на аккаунте должен стоять пароль 2FA. Второе: некоторые подарки можно вывести только после определённой даты.</p>
      <p>Подарок, выведенный в блокчейн, можно передавать или выставлять на аукцион через TON, так же как коллекционные username и номера. Как пишет блог Telegram, контроль над подарком остаётся у владельца, даже если он потеряет доступ к аккаунту или удалит его.</p>
      <p>В StarsPaymee обычные подарки покупают в боте, а готовые коллекционные — в NFT Market внутри бота, в сумах. Лимитированные подарки, которые Telegram снял с продажи, боты отправлять не могут. Как вывести подарок, пошагово рассказано в статье <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">Как перевести NFT-подарок в блокчейн</Link>.</p>
      <h2 id="kolleksion-username-raqam-va-reklama">Коллекционный username, номер и доход от рекламы: можно ли без кошелька?</h2>
      <p>В этой группе ответ чаще всего «нет».</p>
      <ul>
        <li><b>Коллекционный username</b> закрепляется через блокчейн TON и привязывается к аккаунту, каналу или группе. Без кошелька этого не сделать. Порядок действий описан в статье <Link href="/blog/telegram-username-sotib-olish">Как купить username в Telegram</Link>.</li>
        <li><b>Коллекционные номера без SIM-карты</b> работают с аккаунтом TON. Кошелёк нужен и чтобы их покупать и продавать, и чтобы входить по ним.</li>
        <li><b>Виртуальный номер в StarsPaymee</b> — другая услуга, а не коллекционный номер. Не путайте их. Условия виртуального номера проверьте в боте.</li>
        <li><b>Доход от рекламы.</b> Владелец канала может получать его в Gram, но для вывода нужен кошелёк.</li>
        <li><b>Предоплата розыгрыша в Gram</b> — один из способов для владельца канала, а не обязательное условие.</li>
      </ul>
      <h2 id="stars-premium-yoki-sovgani-hamyonsiz">Как купить Stars, Premium или подарок в сумах без кошелька?</h2>
      <Steps>
        <Step title={"Проверьте username"}>, свой или получателя. Он указан в настройках Telegram, в разделе профиля.</Step>
        <Step title={"Откройте бота"}>@StarsPaymee_bot или его мини-приложение.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук), срок Premium, подарок или коллекционный подарок из NFT Market.</Step>
        <Step title={"Введите @username"}>Пароль, SMS-код и доступ к аккаунту не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на UzCard/HUMO или баланс бота. Цена Stars зависит от выбранного способа.</Step>
        <Step title={"Проверьте результат"}>Обычно заказ доставляется автоматически за несколько секунд (~5 секунд). Если что-то пошло не так, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <Notice label={"Важно"}>Исключение: если на аккаунте уже действует Premium, бот не откроет новый заказ на Premium. Новый срок не добавляется поверх активной подписки.</Notice>
      <p>StarsPaymee — независимый сервис. Он работает отдельно от Telegram и не выступает от его имени.</p>
      <h2 id="gram-wallet-telegram-ichida-turibdi">Gram Wallet встроен в Telegram: нужно ли его открывать или подключать?</h2>
      <p>Нет. По данным ton.org, Gram Wallet — некастодиальный кошелёк, встроенный в мессенджер. «Некастодиальный» значит, что средствами управляете вы сами, и ключи тоже храните сами. О секретной фразе читайте в статье <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Секретная фраза Gram-кошелька</Link>.</p>
      <p>Кошелёк в приложении никак не влияет на покупку в сумах. Нужно ли привязывать его к аккаунту, разобрано в статье <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">Привязка кошелька к аккаунту Telegram</Link>.</p>
      <p>Мини-приложения работают внутри Telegram. Если какое-то из них просит подключить кошелёк, это нужно для его собственных платежей. К покупке Stars или Premium это не относится. Перед подключением проверьте, кто выпустил приложение и что ему на самом деле нужно. Игра или магазин вполне могут попросить кошелёк для оплаты внутри приложения. Но если просят секретную фразу, это уже ненормально.</p>
      <p>Признаки обмана:</p>
      <ul>
        <li>Сообщение «Подключите кошелёк, чтобы получить Stars».</li>
        <li>Просят секретную фразу, пароль 2FA или SMS-код.</li>
        <li>Требуют «сначала отправить небольшую сумму для проверки».</li>
        <li>Ссылки вроде «ton.org обновился, заберите подарок», особенно если домен не ton.org и не telegram.org.</li>
      </ul>
      <p>Честный сервис не просит секретную фразу, пароль или код ни для Stars, ни для Premium.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "ton.org — это официальный сайт Telegram?", answer: "ton.org — сайт блокчейна TON. Он называет TON экосистемой, встроенной в Telegram. Свои новости и правила Telegram публикует на telegram.org." },
  { question: "Нужно ли отдельно регистрироваться, чтобы пользоваться продуктами из списка ton.org?", answer: "Для Stars, Premium и подарков — нет: хватит аккаунта Telegram и username. Кошелёк нужен только для коллекционного username, номера или вывода подарка в блокчейн." },
  { question: "Выйдет ли дешевле купить Stars за Gram?", answer: "Однозначного ответа нет: при оплате в Gram цена зависит от курса монеты. Сравните итоговую сумму в кошельке с ценой в сумах в боте." },
  { question: "Хочу подарить Premium старшему брату, а он вообще не пользуется криптой. Получится?", answer: "Да. Нужен только его @username, подписка подключится через механизм подарков Telegram. Если у него уже действует Premium, бот новый заказ не примет." },
  { question: "Смогу ли я потом сам вывести в блокчейн коллекционный подарок из NFT Market?", answer: "Подарок придёт на аккаунт как коллекционный, а вывод идёт по правилам Telegram: нужны пароль 2FA и кошелёк. Некоторые подарки можно вывести только после определённой даты." },
  { question: "Почему при выводе подарка в блокчейн спрашивают пароль 2FA?", answer: "Метод экспорта в Telegram требует текущий пароль 2FA, чтобы вывод подтвердил сам владелец. Никому не сообщайте этот пароль, даже тем, кто предлагает «помочь»." },
  { question: "Можно ли получать доход от рекламы в канале в сумах?", answer: "ton.org описывает получение дохода в Gram, а для вывода нужен кошелёк. Способ сразу перевести доход в сумы в этой статье не подтверждён, в StarsPaymee такой услуги тоже нет." },
  { question: "У меня в кошельке есть Gram. Можно продать его StarsPaymee?", answer: "Нет. StarsPaymee не покупает у пользователей Stars и подарки, покупки Gram тоже нет среди услуг. Бот только продаёт и принимает оплату в сумах." },
  { question: "Виртуальный номер в боте — это то же, что коллекционный номер с ton.org?", answer: "Нет. Коллекционные номера, о которых пишет ton.org, не привязаны к SIM-карте и работают с аккаунтом TON. Виртуальный номер в боте — отдельная услуга, её условия смотрите в самом боте." },
  { question: "После новости об обновлении ton.org пришла ссылка «раздаём подарки». Открывать?", answer: "Не открывайте: в официальных источниках такой акции нет. Обычно такие ссылки рассылают, чтобы заставить подключить кошелёк или выманить коды и секретную фразу." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You can pay for most Telegram products listed on ton.org with Gram, but you don’t have to. Stars, Premium and gifts can all be bought in soums with nothing more than an @username. You only need a TON wallet when you’re working with the blockchain directly: exporting a gift as an NFT, getting a collectible username or number, or withdrawing ad revenue.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#ton-org-royxatida-telegramning-qaysi", label: "Which Telegram products does ton.org list?" },
          { href: "#qaysi-mahsulotga-hamyon-shart-qaysi", label: "Which products need a wallet, and which can you buy in soums?" },
          { href: "#ton-orgdagi-katta-raqamlar-xaridorga", label: "What do the big numbers on ton.org mean for a buyer?" },
          { href: "#stars-yoki-premium-kerak-bolsa", label: "Buying Stars or Premium: how does the Gram route compare with paying in soums?" },
          { href: "#sovgada-hamyon-qaysi-bosqichda-kerak", label: "At what point does a gift need a wallet?" },
          { href: "#kolleksion-username-raqam-va-reklama", label: "Collectible usernames, numbers and ad revenue: can you manage without a wallet?" },
          { href: "#stars-premium-yoki-sovgani-hamyonsiz", label: "How do you buy Stars, Premium or gifts in soums without a wallet?" },
          { href: "#gram-wallet-telegram-ichida-turibdi", label: "Gram Wallet is built into Telegram: do you have to open or connect it?" },
        ]}
      />
      <h2 id="ton-org-royxatida-telegramning-qaysi">Which Telegram products does ton.org list?</h2>
      <p>Telegram channels have been passing around posts saying ton.org was updated with a list of Telegram products. A channel post isn’t an official source, so we checked everything below against the <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> page itself. The page doesn’t say when it was last updated.</p>
      <p>ton.org calls TON a blockchain ecosystem built into Telegram. According to the site, it brings payments, digital assets and mini apps together. These are the products it lists:</p>
      <ul>
        <li><b>Gram Wallet</b>: a non-custodial wallet from the Telegram team, built into the messenger interface.</li>
        <li><b>Bots and Mini Apps</b>: developers can build bots and web mini apps that run inside Telegram.</li>
        <li><b>Gifts</b>: Telegram gifts can be converted into TON-based NFTs.</li>
        <li><b>Usernames</b>: you can secure a name on the TON blockchain and assign it as a link to your account, channel or group.</li>
        <li><b>Collectible numbers</b>: numbers that aren’t tied to a SIM card. You can trade them and use them to log into Telegram with your TON account.</li>
        <li><b>Stars</b>: can be bought with Gram and spent on digital goods, content and services inside Telegram.</li>
        <li><b>Premium</b>: you can use a crypto wallet to get a subscription for yourself or a friend.</li>
        <li><b>Giveaways</b>: Stars and Premium giveaways can be prepaid with Gram.</li>
        <li><b>Ad revenue</b>: money earned from Telegram ads can be paid out in Gram.</li>
        <li><b>Browser</b>: Telegram’s built-in browser opens decentralized websites on the TON network in all mobile apps and the official desktop apps.</li>
      </ul>
      <p>Stickers aren’t on the list. We found no official information about plans to connect them to TON, so there’s nothing to say about that yet.</p>
      <h2 id="qaysi-mahsulotga-hamyon-shart-qaysi">Which products need a wallet, and which can you buy in soums?</h2>
      <p>From a buyer’s point of view, the list splits into three groups. Some products don’t need a wallet at all. For others, a wallet is just one of several ways to pay. And a few won’t work without one.</p>
      <CompareTable
        headers={["Product", "What ton.org says", "Wallet needed?", "How to get it in soums"]}
        rows={[
          ["Telegram Stars", "Can be bought with Gram", "No", <span key="r0c3">@StarsPaymee_bot, <Link href="/stars">Stars page</Link></span>],
          ["Telegram Premium", "Can be bought with a crypto wallet", "No", <span key="r1c3">Via the bot, using the gift-by-username mechanism: <Link href="/premium">Premium page</Link></span>],
          ["Regular and collectible gifts", "Can be converted into NFTs", "Not to receive or send them", <span key="r2c3">Bot and NFT Market: <Link href="/gifts">Gifts page</Link></span>],
          ["Exporting a gift to the blockchain", "Becomes an NFT on TON", "Yes, plus a 2FA password", "Not something you buy; done inside Telegram"],
          ["Collectible username", "Secured via the TON blockchain", "Yes", "No soum option covered in this article"],
          ["SIM-free collectible number", "Works with a TON account", "Yes", "No soum option covered in this article"],
          ["Ad revenue", "Can be paid out in Gram", "Yes, to withdraw", "—"],
          ["Prepaying a giveaway", "Can be paid with Gram", "Only for that payment method", "—"],
          ["Mini Apps and TON sites", "Run inside Telegram", "Depends on the app", "—"],
        ]}
      />
      <p>When ton.org says something “can be bought with Gram”, it doesn’t mean Gram is the only way to buy it. The site describes one way to pay. It doesn’t say other ways are ruled out.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="ton-orgdagi-katta-raqamlar-xaridorga">What do the big numbers on ton.org mean for a buyer?</h2>
      <p>Many people see the “1B+” figure on the page and assume everyone on Telegram uses TON. In fact, ton.org uses that number for Telegram’s active users. Its point is that the integration puts the blockchain in front of a huge audience.</p>
      <p>The wallet count is a different matter. ton.org itself puts monthly active wallets at 3.3 million, which is a small part of Telegram’s audience.</p>
      <p>The site also says Jettons and NFTs are “accessible to a billion users without bottlenecks.” That describes what the network can technically handle. It isn’t a count of current users.</p>
      <Notice label={"Important"}>What this means for you: people with a TON wallet are a minority of Telegram users. Stars, Premium and gifts work fully for everyone else too.</Notice>
      <h2 id="stars-yoki-premium-kerak-bolsa">Buying Stars or Premium: how does the Gram route compare with paying in soums?</h2>
      <p>Gram is the native coin of the TON blockchain, previously also known as Toncoin. We covered the name change in <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</p>
      <h3>Paying with Gram</h3>
      <ul>
        <li>First, you buy the coin and top up your wallet.</li>
        <li>Then you pay for Stars or Premium from the wallet.</li>
        <li>What you end up paying depends on the coin’s rate at that moment, and buying or transferring the coin may cost extra. That’s why we don’t give an exact amount here.</li>
      </ul>
      <h3>Paying in soums</h3>
      <ul>
        <li>The price of Stars depends on how you pay. With a UzCard/HUMO card transfer or the bot balance, one Star costs {som(STARS_PER_UNIT_UZS, "en")}. With Click, Payme, Uzum or Paynet, one Star costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars.</li>
        <li>Premium costs the same with every payment method: 3 months is {som(premium(3), "en")}, 6 months is {som(premium(6), "en")} and 12 months is {som(premium(12), "en")}. There’s also a 1-month plan, with the price shown in the bot.</li>
        <li>You don’t need an international card, a crypto wallet or a VPN.</li>
      </ul>
      <p>Say you need 500 Stars to leave star reactions on posts in your channel. With Gram, you find the coin, top up the wallet and then pay, and the rate may move in the meantime. With soums, you send your username to the bot and pay with Click or a card.</p>
      <p>You end up in the same place either way: the Stars arrive in your account, or Premium is activated on it. The coins in a wallet and your Stars balance are kept separately, though. We explain the difference in detail in <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <h2 id="sovgada-hamyon-qaysi-bosqichda-kerak">At what point does a gift need a wallet?</h2>
      <p>A gift goes through three stages, and a wallet only matters at the last one:</p>
      <ul>
        <li><b>Regular gift</b>: you receive it, send it and display it on your profile. No wallet needed.</li>
        <li><b>Collectible gift</b>: an upgraded gift gets a unique link in the t.me/nft format (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). It still lives inside your Telegram account.</li>
        <li><b>NFT on the blockchain</b>: a collectible gift can be converted into an NFT on TON. When you export it, you get a link for importing the NFT on Fragment (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>). This is the stage where you need a wallet.</li>
      </ul>
      <p>Exporting has two conditions. First, your account must have a 2FA password. Second, some gifts can only be exported from a set date onward.</p>
      <p>Once a gift is on the blockchain, it can be transferred or auctioned via TON, the same way as collectible usernames and numbers. According to the Telegram blog, the owner keeps control of the gift even after losing access to their account or deleting it.</p>
      <p>On StarsPaymee, you can buy regular gifts in the bot and ready-made collectible gifts in the bot’s NFT Market, all in soums. Bots can’t send limited gifts that Telegram has taken off sale. For the export process step by step, see <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">Moving an NFT gift to the blockchain</Link>.</p>
      <h2 id="kolleksion-username-raqam-va-reklama">Collectible usernames, numbers and ad revenue: can you manage without a wallet?</h2>
      <p>In this group, the answer is usually no.</p>
      <ul>
        <li><b>Collectible usernames</b> are secured via the TON blockchain and assigned to an account, channel or group. You can’t do this without a wallet. The steps are in <Link href="/blog/telegram-username-sotib-olish">Buying a Telegram username</Link>.</li>
        <li><b>SIM-free collectible numbers</b> work with a TON account. Trading them or logging in with them also requires a wallet.</li>
        <li><b>StarsPaymee’s virtual numbers</b> are a separate service and aren’t collectible numbers. Don’t mix them up. Check the terms for virtual numbers in the bot.</li>
        <li><b>Ad revenue</b>: a channel owner can receive it in Gram, but needs a wallet to withdraw it.</li>
        <li><b>Prepaying a giveaway with Gram</b> is one option for channel owners, not a requirement.</li>
      </ul>
      <h2 id="stars-premium-yoki-sovgani-hamyonsiz">How do you buy Stars, Premium or gifts in soums without a wallet?</h2>
      <Steps>
        <Step title={"Check the username"}>yours or the recipient’s. It’s shown in Telegram settings, in the profile section.</Step>
        <Step title={"Open the bot"}>@StarsPaymee_bot or its Mini App.</Step>
        <Step title={"Choose a product"}>Stars (at least 50), a Premium term, a gift, or a collectible gift from the NFT Market.</Step>
        <Step title={"Enter the @username"}>you won’t be asked for a password, an SMS code or access to the account.</Step>
        <Step title={"Choose how to pay"}>Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), a UzCard/HUMO transfer or the bot balance. The price of Stars depends on which method you pick.</Step>
        <Step title={"Check the result"}>orders are usually delivered automatically within a few seconds (about 5). If something goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <Notice label={"Important"}>One exception: if the account already has active Premium, the bot won’t open a new Premium order, because the new term can’t be added on top of an active subscription.</Notice>
      <p>StarsPaymee is an independent service. It operates separately from Telegram and doesn’t speak on Telegram’s behalf.</p>
      <h2 id="gram-wallet-telegram-ichida-turibdi">Gram Wallet is built into Telegram: do you have to open or connect it?</h2>
      <p>No. According to ton.org, Gram Wallet is a non-custodial wallet built into the messenger. Non-custodial means you control the funds yourself, so keeping the keys safe is also up to you. For more on recovery phrases, read <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Gram wallet recovery phrases</Link>.</p>
      <p>Seeing a wallet in the app doesn’t change anything when you buy in soums. Whether you need to link it to your account is covered in <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">Linking a wallet to your Telegram account</Link>.</p>
      <p>Mini Apps run inside Telegram. If a Mini App asks you to connect a wallet, that’s for its own payments. It has nothing to do with buying Stars or Premium. Before connecting, think about who made the app and what it really needs from you. A game or shop asking for a wallet connection to take in-app payments is normal. Asking for your recovery phrase is not.</p>
      <p>Here’s how to spot a scam:</p>
      <ul>
        <li>A message saying “connect your wallet to get Stars.”</li>
        <li>Requests for your recovery phrase, 2FA password or SMS code.</li>
        <li>A request to “send a small amount first for verification.”</li>
        <li>Links like “ton.org has been updated, claim your gift,” especially if the domain isn’t ton.org or telegram.org.</li>
      </ul>
      <p>A legitimate service will never ask for your recovery phrase, password or code to sell you Stars or Premium.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Is ton.org Telegram’s official website?", answer: "ton.org is the website of the TON blockchain, and it describes TON as an ecosystem built into Telegram. Telegram posts its own news and rules on telegram.org." },
  { question: "Do I need to register separately to use the products listed on ton.org?", answer: "Not for Stars, Premium or gifts. A Telegram account and a username are enough. You only need a wallet for things like collectible usernames, numbers or exporting a gift to the blockchain." },
  { question: "Is it cheaper to buy Stars with Gram?", answer: "There’s no single answer, because the Gram price changes with the coin’s rate. Compare the final amount your wallet shows with the soum price in the bot." },
  { question: "I want to buy Premium for my brother, but he never uses crypto. Is that possible?", answer: "Yes. His @username is all you need, and the subscription is activated through Telegram’s gift mechanism. The only catch: if he already has active Premium, the bot won’t accept a new order." },
  { question: "Can I export a collectible gift from the NFT Market to the blockchain myself later?", answer: "The gift arrives in your account as a collectible gift, and exporting it follows Telegram’s rules: you need a 2FA password and a wallet. Some gifts can only be exported after a certain date." },
  { question: "Why does exporting a gift to the blockchain ask for my 2FA password?", answer: "Telegram’s export method requires the account’s current 2FA password, so the export is confirmed by the owner. Never share that password, not even with someone who says they’re “helping.”" },
  { question: "Can I receive my channel’s ad revenue in soums?", answer: "ton.org describes receiving the revenue in Gram, which needs a wallet to withdraw. This article hasn’t confirmed a way to convert it straight into soums, and StarsPaymee doesn’t offer such a service." },
  { question: "I have Gram in my wallet. Can I sell it to StarsPaymee?", answer: "No. StarsPaymee doesn’t buy Stars or gifts from users, and buying Gram isn’t one of its services either. The bot only sells and accepts payment in soums." },
  { question: "Is the virtual number in the bot the same as the collectible numbers on ton.org?", answer: "No. The collectible numbers ton.org mentions aren’t tied to a SIM card and work with a TON account, while the bot’s virtual number is a separate service. Check its terms in the bot itself." },
  { question: "After the news about the ton.org update, I got a link saying “gifts are being handed out.” Should I open it?", answer: "Don’t open it. We found no information about any such giveaway in official sources. Links like this are usually sent to get you to connect a wallet or to steal your codes and recovery phrase." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["ton.org telegram mahsulotlari","ton.org nima","telegram ton hamyon kerakmi","gram hamyonsiz stars olish","telegram premium hamyonsiz so'mda","telegramga integratsiya qilingan ton","gram wallet telegram","ton.org продукты telegram","интегрировано в telegram ton","нужен ли ton кошелек для telegram stars","купить telegram stars без кошелька узбекистан"],
  howToSteps: [
    { name: "Username’ni tekshiring", text: "o‘zingiznikini yoki oluvchinikini. U Telegram sozlamalarida, profil bo‘limida turadi." },
    { name: "Botni oching", text: "@StarsPaymee_bot yoki uning Mini App’ini." },
    { name: "Mahsulotni tanlang", text: "Stars (kamida 50 dona), Premium muddati, sovg‘a yoki NFT Market’dagi kolleksion sovg‘a." },
    { name: "@username kiriting", text: "parol, SMS kod yoki akkauntga kirish so‘ralmaydi." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO o‘tkazmasi yoki bot balansi. Stars narxi tanlangan usulga qarab o‘zgaradi." },
    { name: "Natijani tekshiring", text: "buyurtma odatda bir necha soniyada (~5 soniya) avtomatik yetkaziladi. Muammo chiqsa, @StarsPaymeeSupport ga yozing." },
  ],
  locales: {
    uz: {
      title: "ton.org Telegram mahsulotlari: qaysi biriga TON hamyon kerak?",
      excerpt: "Stars, Premium va sovg‘alar uchun TON hamyon shart emas: ularni @username bilan so‘mda olasiz. Hamyon faqat sovg‘ani NFT qilib chiqarishda, kolleksion username yoki raqam olishda kerak bo‘ladi.",
      metaTitle: "ton.org Telegram mahsulotlari",
      metaDescription: "Stars, Premium va sovg‘alar uchun TON hamyon shart emas: ularni @username bilan so‘mda olasiz. Hamyon faqat sovg‘ani NFT qilib chiqarishda, kolleksion…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Продукты Telegram на ton.org: для каких нужен TON-кошелёк?",
      excerpt: "Для Stars, Premium и подарков TON-кошелёк не нужен: их покупают в сумах по @username. Кошелёк понадобится, чтобы вывести подарок в NFT или купить коллекционный username либо номер.",
      metaTitle: "Продукты Telegram на ton.org: для каких нужен TON-кошелёк?",
      metaDescription: "Для Stars, Premium и подарков TON-кошелёк не нужен: их покупают в сумах по @username. Кошелёк понадобится, чтобы вывести подарок в NFT или купить…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram products on ton.org: which ones actually need a TON wallet?",
      excerpt: "You don’t need a TON wallet for Stars, Premium or gifts; you can buy them in soums with just an @username. A wallet only comes in for exporting gifts as NFTs, collectible usernames and numbers.",
      metaTitle: "Telegram products on ton.org",
      metaDescription: "You don’t need a TON wallet for Stars, Premium or gifts; you can buy them in soums with just an @username.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
