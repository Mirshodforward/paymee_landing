import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "fragment-verifikatsiya-shartmi-akkaunt-ulash";

/**
 * Fragment’da verifikatsiya endi shart emasmi va nechta akkaunt ulash mumkin?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Fragment'dan Stars, Premium, username yoki sovg'a bilan ishlamoqchi bo'lgan o'zbekistonlik Telegram foydalanuvchisi kanalda KYC bekor qilingani haqida o'qib, «fragment verifikatsiya shartmi, bir nechta akkaunt ulasa bo'ladimi» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://fragment.com/terms
 *   https://fragment.com/privacy
 *   https://fragment.com/about
 *   https://fragment.com/premium
 *   https://telegram.org/tos/content-creator-rewards
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
  return <p>Fragment’ning amaldagi qoidalariga ko‘ra, verifikatsiya shart emas: pasport, selfi yoki boshqa hujjat so‘ralmaydi. Saytga Telegram akkaunt va TON hamyon bilan kirasiz. Bir nechta akkauntdan foydalanish ham mumkin, lekin bir vaqtda emas: bittasining sessiyasini o‘chirasiz, keyin ikkinchisini ulaysiz. «KYC bekor qilindi» degan rasmiy e’lon esa topilmadi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#verifikatsiya-shart-emasligi-qayerda-yozilgan", label: "Verifikatsiya shart emasligi qayerda yozilgan?" },
          { href: "#kanaldagi-davolar-va-rasmiy-matn", label: "Kanaldagi da’volar va rasmiy matn: solishtirish jadvali" },
          { href: "#fragmentga-kirish-uchun-aslida-nima", label: "Fragment’ga kirish uchun aslida nima kerak?" },
          { href: "#shaxsiy-ish-va-oila-akkauntlari", label: "Shaxsiy, ish va oila akkauntlari: Fragment’da qanday navbatlashadi?" },
          { href: "#akkauntni-almashtirish-telefonda-yetti-qadam", label: "Akkauntni almashtirish: telefonda yetti qadam" },
          { href: "#maqsadga-qarab-tayyorgarlik-premium-username", label: "Maqsadga qarab tayyorgarlik: Premium, username, Stars, kanal daromadi" },
          { href: "#xarid-otmasa-hujjatdan-boshqa-sabablar", label: "Xarid o‘tmasa: hujjatdan boshqa sabablar" },
          { href: "#kop-akkauntli-foydalanuvchi-uchun-xavfsizlik", label: "Ko‘p akkauntli foydalanuvchi uchun xavfsizlik qoidalari" },
          { href: "#hamyon-va-sessiyasiz-yol-username", label: "Hamyon va sessiyasiz yo‘l: @username bilan so‘mda buyurtma" },
        ]}
      />
      <h2 id="verifikatsiya-shart-emasligi-qayerda-yozilgan">Verifikatsiya shart emasligi qayerda yozilgan?</h2>
      <p>Buni kanaldagi postdan emas, Fragment’ning o‘z hujjatlaridan bilish mumkin. <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Xizmat shartlarida</a> platforma har kimga raqamli kolleksiya obyektlarini xavfsiz va anonim sotib olish imkonini berishi yozilgan. Xuddi shu yerda Telegram Premium xarid qilish yoki sovg‘a qilish ham tilga olingan.</p>
      <p><a href={"https://fragment.com/privacy"} target="_blank" rel="noopener noreferrer">Maxfiylik siyosatida</a> Fragment’da alohida ro‘yxatdan o‘tish usuli yo‘qligi aytiladi. Kirish Telegram va/yoki TON hamyon orqali bo‘ladi. Elektron pochta, alohida login yoki hujjat yuklash bosqichi hech qayerda ko‘rsatilmagan.</p>
      <p>Shu bilan birga, bitta nozik joy bor. Rasmiy sahifalarda KYC so‘zi umuman uchramaydi. Ilgari joriy qilingani ham, endi olib tashlangani ham yozilmagan. Shuning uchun «bekor qilindi» degan da’vo bu maqolada tasdiqlanmagan.</p>
      <p>Amaliy javob esa o‘zgarmaydi. Bugungi shartlarda hujjat bilan tasdiqlash talabi yo‘q.</p>
      <h2 id="kanaldagi-davolar-va-rasmiy-matn">Kanaldagi da’volar va rasmiy matn: solishtirish jadvali</h2>
      <p>Kanallarda Fragment haqida bir nechta qisqa da’vo aylanyapti. Har birini Fragment sahifalaridagi matn bilan alohida taqqosladik.</p>
      <CompareTable
        headers={["Kanaldagi da’vo", "Fragment sahifalarida nima bor", "Xulosa"]}
        rows={[
          ["KYC bekor qilindi", "/terms va /privacy’da KYC haqida ham, uning o‘zgargani haqida ham yozuv yo‘q", "Tasdiqlanmagan"],
          ["Verifikatsiya endi shart emas", "Ro‘yxatdan o‘tish yo‘q, kirish Telegram va hamyon orqali, xarid «anonim» deb yozilgan", "Amaldagi shartlarga mos"],
          ["Shaxsiy ma’lumot berish shart emas", "Fragment zarur bo‘lmagan shaxsiy ma’lumotni yig‘maslikni va uni saqlamaslikni aytadi", "Mos"],
          ["Istagancha akkauntdan ulaning", "Sessiyani o‘chirib, boshqa akkauntni ulash tartibi bor; son haqida gap yo‘q", "Qisman to‘g‘ri"],
          ["O‘zbekistondan ham bemalol ishlaydi", "Fragment davlat va xizmatlarni ogohlantirishsiz cheklashi mumkin", "Noma’lum"],
        ]}
      />
      <Notice label={"Muhim"}>Post — e’tibor qaratish uchun signal, xolos. Xarid qilishdan oldin fragment.com’dagi shartlarni o‘zingiz oching.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragmentga-kirish-uchun-aslida-nima">Fragment’ga kirish uchun aslida nima kerak?</h2>
      <p>Hujjat so‘ralmaydi, lekin texnik talablar bor. <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida sahifasida</a> taklif berish yoki xarid qilish uchun Telegram akkaunt va TON hamyonni ulash so‘raladi. Shartlarda ham platforma aynan shu ikki ulanishni taklif qilishi yozilgan.</p>
      <p>Tayyor turishi kerak:</p>
      <ul>
        <li><b>Telegram akkaunt</b> — Fragment’ga shu akkaunt orqali kirasiz.</li>
        <li><b>2FA paroli</b> — ikki bosqichli parol bo‘lmasa yoki yaqinda qo‘yilgan bo‘lsa, Fragment buni to‘siq sifatida ko‘rsatadi. Bu shaxsni tasdiqlash emas, akkaunt himoyasiga oid talab.</li>
        <li><b>TON hamyon</b> — xarid va taklif shu hamyon orqali amalga oshadi.</li>
      </ul>
      <p>So‘ralmaydi:</p>
      <ul>
        <li>pasport yoki ID karta;</li>
        <li>selfi yoki video;</li>
        <li>Fragment uchun alohida login va parol.</li>
      </ul>
      <p>Maxfiylik haqida ham ikki narsa yozilgan. Birinchidan, Fragment ikki kirish usulini IP manzilingizga, brauzer yoki qurilmaga bog‘laydigan ma’lumotni saqlamaydi. Ularni bir-biriga bog‘laydigan ma’lumotni ham saqlamaydi. Ikkinchidan, Fragment hamyonga kirish huquqiga ega emas. Hamyonni sizning shaxsingiz yoki akkauntlaringizga bog‘laydigan ma’lumotni ham saqlamaydi.</p>
      <h2 id="shaxsiy-ish-va-oila-akkauntlari">Shaxsiy, ish va oila akkauntlari: Fragment’da qanday navbatlashadi?</h2>
      <p>Hujjat talab qilinmagani uchun bitta odam Fragment’dan bir nechta Telegram akkaunt bilan foydalana oladi. «Istagancha akkauntdan ulaning» degan gapning asosli qismi shu.</p>
      <p>Lekin tartib navbatma-navbat ishlaydi. Fragment’ga ayni paytda bitta akkaunt ulangan bo‘ladi. Boshqasiga o‘tish uchun Telegram ilovasida Fragment sessiyasini o‘chirasiz, so‘ng saytni qayta ochib, yangi akkauntni ulaysiz. Fragment buni akkauntni to‘liq uzib, boshqa telefon raqami bilan kirish deb tasvirlaydi.</p>
      <p>Akkauntlar soni bo‘yicha limit rasmiy sahifalarda e’lon qilinmagan. Ammo «cheksiz» degan va’da ham yo‘q. Limit yozilmaganini kafolat deb tushunmang.</p>
      <p>Misol. Sizda uchta akkaunt bor: shaxsiy, onlayn do‘kon kanalini yuritadigan ish akkaunti va onangizniki. Shaxsiy akkauntda kolleksiya username’larini ko‘rib chiqasiz. Kanal uchun username olish kerak bo‘lsa, sessiyani o‘chirib, ish akkauntiga o‘tasiz. Onangizga Premium sovg‘a qilish uchun esa uning akkauntiga kirish shart emas. Premium sahifasida boshqa foydalanuvchi uchun xarid qilish bandi bor.</p>
      <p>Hamyonga ham e’tibor bering. Fragment hamyonni akkauntlaringizga bog‘lab saqlamaydi. Shuning uchun har o‘tishda qaysi hamyon ulanganini o‘zingiz tekshirasiz. Fragment ham to‘g‘ri hamyon ulanganini qayta tekshirishni tavsiya qiladi.</p>
      <h2 id="akkauntni-almashtirish-telefonda-yetti-qadam">Akkauntni almashtirish: telefonda yetti qadam</h2>
      <p>Tartib Fragment’ning <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">rasmiy sahifasidagi</a> yo‘riqnomaga asoslangan. Menyu nomlari ingliz tilidagi interfeys bo‘yicha berilgan.</p>
      <Steps>
        <Step title={"Hozirgi akkauntni aniqlang"}>Telegram’da Fragment’ga ulangan akkauntni oching.</Step>
        <Step title={"Android bo‘lsa"}>Settings &gt; Privacy &amp; Security &gt; Bots and websites &gt; Logged in with Telegram bo‘limiga kiring.</Step>
        <Step title={"iOS bo‘lsa"}>Settings &gt; Privacy &amp; Security &gt; Active Websites &gt; Logged in with Telegram bo‘limiga kiring.</Step>
        <Step title={"Sessiyani o‘chiring"}>ro‘yxatdan Fragment’ni topib, sessiyani yakunlang.</Step>
        <Step title={"Kerakli akkauntga o‘ting"}>Telegram’da ikkinchi akkauntni oching va unda 2FA paroli borligini tekshiring.</Step>
        <Step title={"Fragment’ni qayta oching"}>manzilni o‘zingiz terib kiring va yangi akkauntni ulang.</Step>
        <Step title={"Hamyonni solishtiring"}>xariddan oldin aynan kerakli hamyon ulanganiga ishonch hosil qiling.</Step>
      </Steps>
      <p>Telegram Desktop uchun yo‘l rasmiy sahifada berilmagan. Shu sababli kompyuterdagi menyu nomlarini bu yerda keltirmaymiz. Telefon orqali almashtirish ishonchliroq.</p>
      <h2 id="maqsadga-qarab-tayyorgarlik-premium-username">Maqsadga qarab tayyorgarlik: Premium, username, Stars, kanal daromadi</h2>
      <p>Kirish hamma uchun bir xil. Lekin har bir maqsadning o‘ziga xos sharti bor.</p>
      <CompareTable
        headers={["Nima qilmoqchisiz", "Fragment’da nima kerak", "E’tibor beradigan joy"]}
        rows={[
          ["Premium o‘zingizga yoki boshqa odamga", "«Buy Premium for a User» bandi, kriptohamyon", "Xarid Telegram va Telegram Premium shartlariga bo‘ysunadi"],
          ["Kolleksiya username", "Ulangan Telegram akkaunt va hamyon", "Narx va auksion tartibi alohida"],
          ["Stars", "Fragment’dagi Stars sahifasi tekshirilmagan", "Tartib bu maqolada tasdiqlanmagan"],
          ["Kanal mualliflari mukofoti", "Telegram bu mukofotlarni Fragment orqali qayta ishlaydi", "Ba’zi foydalanuvchi yoki davlatlarga mukofot berilmasligi mumkin"],
          ["Telegram’da reklama xaridi", "Fragment orqali", "Ba’zi davlatlar foydalanuvchilari uchun cheklangan bo‘lishi mumkin"],
        ]}
      />
      <p>Premium bo‘yicha: <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">Fragment’ning Premium sahifasida</a> obunani o‘zingiz yoki do‘stlaringiz uchun kriptohamyon orqali olish taklif qilinadi.</p>
      <p>Username narxi, komissiyasi va auksion bosqichlari <Link href="/blog/telegram-username-sotib-olish">Fragment’da username sotib olish</Link> maqolasida yoritilgan.</p>
      <p>Kanal daromadi bo‘yicha: <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">mualliflar uchun shartlarda</a> Fragment tartibga solish va boshqa omillar sabab ayrim foydalanuvchi yoki davlatlarga mukofot bera olmasligi mumkinligi aytilgan. Kanalda Stars topish yo‘llari <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanal monetizatsiyasi haqidagi maqolada</Link> bor.</p>
      <p>Hamyondagi valyuta nomi chalkashtirsa, <Link href="/blog/toncoin-endi-gram">shu mavzudagi tushuntirish</Link> yordam beradi.</p>
      <h2 id="xarid-otmasa-hujjatdan-boshqa-sabablar">Xarid o‘tmasa: hujjatdan boshqa sabablar</h2>
      <p>Verifikatsiya yo‘qligi har bir xarid albatta o‘tadi degani emas. Tez-tez uchraydigan sabablar:</p>
      <ul>
        <li><b>2FA paroli</b> — parol yo‘q yoki endigina qo‘yilgan bo‘lsa, Fragment buni to‘siq deb ko‘rsatadi. Parolni xarid kuni emas, oldindan qo‘ying. Qancha kutish kerakligi rasmiy sahifada yozilmagan.</li>
        <li><b>Davlat bo‘yicha cheklov</b> — shartlarga ko‘ra Fragment qaysi davlatlarda ishlashini va qaysi xizmatlari mavjudligini istalgan vaqtda, ogohlantirishsiz cheklashi mumkin. O‘zbekiston bunday cheklovga tushgan-tushmagani noma’lum.</li>
        <li><b>Eski hamyon</b> — oldingi sessiyadan boshqa hamyon ulangan qolgan bo‘lishi mumkin.</li>
        <li><b>Kutilmagan akkaunt</b> — almashtirishdan keyin xarid boshqa akkauntdan rasmiylashib ketishi mumkin. Har safar qaysi akkaunt ulanganini ko‘ring.</li>
        <li><b>Reklama va mukofot</b> — bu ikki xizmatda alohida davlat cheklovlari bo‘lishi mumkin.</li>
        <li><b>Soliq va qonun</b> — shartlarga ko‘ra soliq, to‘lovlar va mahalliy qonunlarga rioya qilish foydalanuvchining o‘z zimmasida.</li>
      </ul>
      <h2 id="kop-akkauntli-foydalanuvchi-uchun-xavfsizlik">Ko‘p akkauntli foydalanuvchi uchun xavfsizlik qoidalari</h2>
      <p>Akkauntlar qancha ko‘p bo‘lsa, adashish va aldanish xavfi shuncha ortadi. Bir necha oddiy qoida:</p>
      <ul>
        <li><b>Har akkauntga alohida 2FA paroli</b> — bu ham Fragment talabi, ham o‘g‘irlikdan himoya. Parolni qanday qo‘yish <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA bo‘yicha qo‘llanmada</Link> yozilgan.</li>
        <li><b>Sessiyani faqat o‘zingiz o‘chiring</b> — «ulab beraman» degan begona odamga akkauntingizni topshirmang.</li>
        <li><b>Hamyonning maxfiy so‘zlari faqat sizda qolsin</b> — Fragment hamyonga kirish huquqiga ega emas. Bu so‘zlarni so‘ragan «yordamchi» Fragment nomidan gapira olmaydi.</li>
        <li><b>«Verifikatsiyasiz kirish» havolalarini bosmang</b> — Fragment’da ro‘yxatdan o‘tish umuman yo‘q, maxsus havola kerak emas. Manzilni o‘zingiz yozing.</li>
        <li><b>Akkauntlarni belgilab qo‘ying</b> — qaysi akkauntda qaysi hamyon ishlatilishini o‘zingiz uchun yozib qo‘ysangiz, xato xarid ehtimoli kamayadi.</li>
      </ul>
      <Notice label={"Muhim"}>Fragment hujjat so‘ramaydi. Pasport, selfi yoki Telegram kirish kodini so‘ragan sahifa — Fragment emas.</Notice>
      <h2 id="hamyon-va-sessiyasiz-yol-username">Hamyon va sessiyasiz yo‘l: @username bilan so‘mda buyurtma</h2>
      <p>Fragment’da kriptohamyon kerak. Hamyon ochish, valyuta sotib olish va akkaunt almashtirishni xohlamasangiz, <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali so‘mda buyurtma berish mumkin. StarsPaymee — mustaqil xizmat, Telegram bilan rasmiy aloqasi yo‘q.</p>
      <p>Botda faqat @username kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi.</p>
      <p>Bir nechta akkaunt bo‘lsa, bu yo‘l soddaroq. Sessiya almashtirish yo‘q, har buyurtmada kerakli @username’ni yozasiz. Masalan, shaxsiy akkauntga Stars, onangizning akkauntiga Premium — ikki alohida buyurtma. Username’ni qayerdan topish va xatosiz kiritish <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasida</Link> ko‘rsatilgan.</p>
      <p>To‘lov usullari: Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</p>
      <CompareTable
        headers={["Mahsulot", "Narx"]}
        rows={[
          ["1 Star — karta o‘tkazmasi yoki bot balansi", `${som(STARS_PER_UNIT_UZS, "uz")}`],
          ["1 Star — Click, Payme, Uzum yoki Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Premium 3 oy", `${som(premium(3), "uz")}`],
          ["Premium 6 oy", `${som(premium(6), "uz")}`],
          ["Premium 12 oy", `${som(premium(12), "uz")}`],
        ]}
      />
      <p>Stars bo‘yicha eng kam buyurtma — 50 ta. Premium narxi barcha to‘lov usulida bir xil. 1 oylik tarif ham bor, narxini botda ko‘ring.</p>
      <p>Bitta cheklovni oldindan biling. Faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi, muddat ustiga qo‘shilmaydi. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Tariflar <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida jamlangan.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/privacy", label: "Privacy" },
          { href: "https://fragment.com/about", label: "https://fragment.com/about" },
          { href: "https://fragment.com/premium", label: "Buy Telegram Premium" },
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Fragment’dan foydalanish uchun pasportimni yoki ID kartamni ko‘rsatishim kerakmi?", answer: "Yo‘q. Amaldagi shartlarda hujjat yuklash bosqichi yo‘q, kirish Telegram akkaunt va TON hamyon orqali bo‘ladi." },
  { question: "Kanalda «KYC bekor qilindi» deb yozishdi. Buni qayerdan tekshirsam bo‘ladi?", answer: "Eng ishonchli joy — fragment.com/terms va fragment.com/privacy sahifalari. Ularda KYC so‘zi umuman yo‘q, demak bekor qilingani ham rasman e’lon qilinmagan. Lekin hujjat talab qilinmasligi shartlardan ko‘rinib turibdi." },
  { question: "Telefon raqamim O‘zbekistonniki. Fragment boshqa davlat raqamini talab qiladimi?", answer: "Fragment sahifalarida raqam davlati bo‘yicha talab yozilmagan. Ammo platforma ayrim davlatlarda xizmatlarini cheklashi mumkin, O‘zbekistonga bu taalluqli-taalluqli emasligi esa noma’lum." },
  { question: "Fragment’da nechta Telegram akkauntdan foydalanish mumkin?", answer: "Aniq son e’lon qilinmagan, «cheksiz» degan va’da ham yo‘q. Akkauntlar faqat navbat bilan ulanadi: bittasining sessiyasini o‘chirib, keyingisini ulaysiz." },
  { question: "Ikki xil akkauntdan kirganda bitta TON hamyonni ishlatsam bo‘ladimi?", answer: "Rasmiy sahifalarda bunga taqiq yozilmagan. Fragment hamyonni akkauntlaringizga bog‘lab saqlamaydi, shuning uchun har o‘tishda qaysi hamyon ulanganini o‘zingiz tekshiring." },
  { question: "Telegram’dagi Fragment sessiyasini o‘chirsam, akkauntimga zarar yetadimi?", answer: "Bu amal faqat akkauntingizni Fragment saytidan uzadi. Fragment uni boshqa akkauntga o‘tishdan oldingi qadam sifatida ko‘rsatadi. Keyin saytni qayta ochib, xohlagan akkauntni ulashingiz mumkin." },
  { question: "2FA paroli qo‘yilgan, lekin Fragment baribir xaridga ruxsat bermayapti. Nimani tekshiray?", answer: "Parol yaqinda qo‘yilgan bo‘lsa, Fragment uni hali to‘siq deb ko‘rsatishi mumkin. Qaysi akkaunt va qaysi hamyon ulanganini ham, xizmat davlatingizda cheklanmaganini ham tekshiring." },
  { question: "Oilamdagi kishining akkauntiga kirmasdan, unga Fragment orqali Premium olsam bo‘ladimi?", answer: "Ha. Fragment’ning Premium sahifasida boshqa foydalanuvchi uchun xarid qilish bandi bor. To‘lov sizga ulangan kriptohamyondan qilinadi." },
  { question: "Hujjat endi talab qilinmasa, kelajakda ham shunday qoladimi?", answer: "Buni oldindan aytib bo‘lmaydi. Shartlarga ko‘ra Fragment davlatlar va xizmatlar bo‘yicha cheklovni ogohlantirishsiz kiritishi mumkin, shuning uchun muhim xariddan oldin amaldagi shartlarni qayta ko‘ring." },
  { question: "StarsPaymee’da uch xil akkauntga Stars olish uchun har biriga kirishim kerakmi?", answer: "Kerak emas. Har buyurtmada qabul qiluvchining @username’ini yozasiz, bot parol yoki kod so‘ramaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>По действующим правилам Fragment верификация не нужна: паспорт, селфи и другие документы не запрашиваются. На сайт входят через Telegram-аккаунт и TON-кошелёк. Пользоваться несколькими аккаунтами можно, но не одновременно: удаляете сессию одного и подключаете другой. Официального объявления «KYC отменён» при этом найти не удалось.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#verifikatsiya-shart-emasligi-qayerda-yozilgan", label: "Где написано, что верификация не нужна?" },
          { href: "#kanaldagi-davolar-va-rasmiy-matn", label: "Заявления из каналов и официальный текст: сравнительная таблица" },
          { href: "#fragmentga-kirish-uchun-aslida-nima", label: "Что на самом деле нужно для входа на Fragment?" },
          { href: "#shaxsiy-ish-va-oila-akkauntlari", label: "Личный, рабочий и семейный аккаунты: как они чередуются на Fragment" },
          { href: "#akkauntni-almashtirish-telefonda-yetti-qadam", label: "Смена аккаунта: семь шагов на телефоне" },
          { href: "#maqsadga-qarab-tayyorgarlik-premium-username", label: "Подготовка под задачу: Premium, username, Stars, доход канала" },
          { href: "#xarid-otmasa-hujjatdan-boshqa-sabablar", label: "Покупка не проходит: причины помимо документов" },
          { href: "#kop-akkauntli-foydalanuvchi-uchun-xavfsizlik", label: "Правила безопасности для тех, у кого несколько аккаунтов" },
          { href: "#hamyon-va-sessiyasiz-yol-username", label: "Путь без кошелька и сессий: заказ по @username в сумах" },
        ]}
      />
      <h2 id="verifikatsiya-shart-emasligi-qayerda-yozilgan">Где написано, что верификация не нужна?</h2>
      <p>Это видно не из поста в канале, а из документов самого Fragment. В <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">условиях использования</a> сказано, что платформа позволяет любому человеку безопасно и анонимно покупать цифровые коллекционные объекты. Там же упомянута покупка Telegram Premium и его отправка в подарок.</p>
      <p>В <a href={"https://fragment.com/privacy"} target="_blank" rel="noopener noreferrer">политике конфиденциальности</a> указано, что отдельного способа регистрации на Fragment нет. Вход выполняется через Telegram и/или TON-кошелёк. Электронная почта, отдельный логин или загрузка документов нигде не упоминаются.</p>
      <p>Есть одна тонкость. На официальных страницах слово KYC не встречается вообще. Не написано ни что его когда-то вводили, ни что теперь убрали. Поэтому утверждение «KYC отменён» в этой статье не подтверждено.</p>
      <p>Практический ответ от этого не меняется. По сегодняшним условиям подтверждать личность документами не требуется.</p>
      <h2 id="kanaldagi-davolar-va-rasmiy-matn">Заявления из каналов и официальный текст: сравнительная таблица</h2>
      <p>В каналах о Fragment ходит несколько коротких утверждений. Мы сверили каждое с текстом на страницах Fragment.</p>
      <CompareTable
        headers={["Утверждение в канале", "Что есть на страницах Fragment", "Вывод"]}
        rows={[
          ["KYC отменили", "В /terms и /privacy нет записей ни о KYC, ни о его изменении", "Не подтверждено"],
          ["Верификация больше не нужна", "Регистрации нет, вход через Telegram и кошелёк, покупка названа «анонимной»", "Соответствует действующим условиям"],
          ["Личные данные давать не нужно", "Fragment обещает не собирать лишние персональные данные и не хранить их", "Соответствует"],
          ["Подключайтесь с любого числа аккаунтов", "Описан порядок: удалить сессию и подключить другой аккаунт; о количестве ни слова", "Частично верно"],
          ["Из Узбекистана тоже всё работает", "Fragment может ограничивать страны и сервисы без предупреждения", "Неизвестно"],
        ]}
      />
      <Notice label={"Важно"}>Пост — лишь повод обратить внимание. Перед покупкой откройте условия на fragment.com сами.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragmentga-kirish-uchun-aslida-nima">Что на самом деле нужно для входа на Fragment?</h2>
      <p>Документы не нужны, но технические требования есть. На странице <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a> для ставки или покупки предлагается подключить Telegram-аккаунт и TON-кошелёк. В условиях тоже сказано, что платформа предлагает именно эти два подключения.</p>
      <p>Что подготовить:</p>
      <ul>
        <li><b>Telegram-аккаунт</b> — через него вы входите на Fragment.</li>
        <li><b>Пароль 2FA</b> — если облачного пароля нет или он установлен недавно, Fragment показывает это как препятствие. Это не подтверждение личности, а требование к защите аккаунта.</li>
        <li><b>TON-кошелёк</b> — через него проходят покупки и ставки.</li>
      </ul>
      <p>Что не запрашивается:</p>
      <ul>
        <li>паспорт или ID-карта;</li>
        <li>селфи или видео;</li>
        <li>отдельный логин и пароль для Fragment.</li>
      </ul>
      <p>О приватности написано ещё две вещи. Во-первых, Fragment не хранит данные, связывающие два способа входа с вашим IP-адресом, браузером или устройством, а также данные, связывающие их друг с другом. Во-вторых, у Fragment нет доступа к кошельку, и он не хранит информацию, по которой кошелёк можно связать с вами лично или с вашими аккаунтами.</p>
      <h2 id="shaxsiy-ish-va-oila-akkauntlari">Личный, рабочий и семейный аккаунты: как они чередуются на Fragment</h2>
      <p>Поскольку документы не требуются, один человек может пользоваться Fragment с нескольких Telegram-аккаунтов. В этом и состоит обоснованная часть фразы «подключайтесь с любого числа аккаунтов».</p>
      <p>Но работает это по очереди. В каждый момент к Fragment подключён один аккаунт. Чтобы перейти на другой, вы удаляете сессию Fragment в приложении Telegram, затем заново открываете сайт и подключаете новый аккаунт. Сам Fragment описывает это как полное отключение аккаунта и вход с другим номером телефона.</p>
      <p>Лимит на число аккаунтов на официальных страницах не объявлен. Но и обещания «без ограничений» нет. Не принимайте отсутствие лимита в тексте за гарантию.</p>
      <p>Пример. У вас три аккаунта: личный, рабочий, с которого вы ведёте канал интернет-магазина, и мамин. С личного вы смотрите коллекционные username. Если нужно купить username для канала, удаляете сессию и переключаетесь на рабочий. А чтобы подарить маме Premium, входить в её аккаунт не нужно: на странице Premium есть пункт покупки для другого пользователя.</p>
      <p>Обратите внимание и на кошелёк. Fragment не хранит привязку кошелька к вашим аккаунтам, поэтому при каждом переключении проверяйте сами, какой кошелёк подключён. Fragment тоже рекомендует перепроверять, что подключён правильный кошелёк.</p>
      <h2 id="akkauntni-almashtirish-telefonda-yetti-qadam">Смена аккаунта: семь шагов на телефоне</h2>
      <p>Порядок основан на инструкции с <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">официальной страницы</a> Fragment. Названия пунктов меню даны по англоязычному интерфейсу.</p>
      <Steps>
        <Step title={"Определите текущий аккаунт"}>откройте в Telegram аккаунт, который подключён к Fragment.</Step>
        <Step title={"Если у вас Android"}>зайдите в Settings &gt; Privacy &amp; Security &gt; Bots and websites &gt; Logged in with Telegram.</Step>
        <Step title={"Если у вас iOS"}>зайдите в Settings &gt; Privacy &amp; Security &gt; Active Websites &gt; Logged in with Telegram.</Step>
        <Step title={"Удалите сессию"}>найдите в списке Fragment и завершите сессию.</Step>
        <Step title={"Переключитесь на нужный аккаунт"}>откройте второй аккаунт в Telegram и проверьте, что в нём установлен пароль 2FA.</Step>
        <Step title={"Снова откройте Fragment"}>наберите адрес вручную и подключите новый аккаунт.</Step>
        <Step title={"Сверьте кошелёк"}>перед покупкой убедитесь, что подключён именно нужный кошелёк.</Step>
      </Steps>
      <p>Путь для Telegram Desktop на официальной странице не описан, поэтому названия пунктов меню на компьютере мы здесь не приводим. Переключаться через телефон надёжнее.</p>
      <h2 id="maqsadga-qarab-tayyorgarlik-premium-username">Подготовка под задачу: Premium, username, Stars, доход канала</h2>
      <p>Вход у всех одинаковый, но у каждой задачи свои условия.</p>
      <CompareTable
        headers={["Что вы хотите сделать", "Что нужно на Fragment", "На что обратить внимание"]}
        rows={[
          ["Premium себе или другому человеку", "Пункт «Buy Premium for a User», криптокошелёк", "Покупка подчиняется условиям Telegram и Telegram Premium"],
          ["Коллекционный username", "Подключённые Telegram-аккаунт и кошелёк", "Цена и порядок аукциона — отдельная тема"],
          ["Stars", "Страница Stars на Fragment не проверялась", "Порядок в этой статье не подтверждён"],
          ["Вознаграждения авторов каналов", "Telegram обрабатывает эти выплаты через Fragment", "Некоторым пользователям или странам выплаты могут быть недоступны"],
          ["Покупка рекламы в Telegram", "Через Fragment", "Для пользователей из некоторых стран может быть ограничена"],
        ]}
      />
      <p>По Premium: на <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">странице Premium на Fragment</a> предлагается оформить подписку для себя или друзей через криптокошелёк.</p>
      <p>Цены, комиссии и этапы аукциона разобраны в статье <Link href="/blog/telegram-username-sotib-olish">о покупке username на Fragment</Link>.</p>
      <p>По доходу канала: в <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">условиях для авторов</a> сказано, что Fragment может не выплачивать вознаграждения отдельным пользователям или в отдельных странах из-за регулирования и других факторов. Способы зарабатывать Stars на канале описаны в <Link href="/blog/telegram-kanal-stars-monetizatsiya">статье о монетизации канала</Link>.</p>
      <p>Если путает название валюты в кошельке, поможет <Link href="/blog/toncoin-endi-gram">разбор этой темы</Link>.</p>
      <h2 id="xarid-otmasa-hujjatdan-boshqa-sabablar">Покупка не проходит: причины помимо документов</h2>
      <p>Отсутствие верификации не значит, что любая покупка обязательно пройдёт. Частые причины:</p>
      <ul>
        <li><b>Пароль 2FA</b> — если пароля нет или он только что установлен, Fragment показывает это как препятствие. Ставьте пароль заранее, а не в день покупки. Сколько ждать, на официальной странице не указано.</li>
        <li><b>Ограничение по стране</b> — по условиям Fragment может в любой момент и без предупреждения ограничить страны, где работает, и доступные в них сервисы. Попадает ли под такое ограничение Узбекистан, неизвестно.</li>
        <li><b>Старый кошелёк</b> — после прошлой сессии мог остаться подключённым другой кошелёк.</li>
        <li><b>Не тот аккаунт</b> — после переключения покупка может оформиться с другого аккаунта. Каждый раз смотрите, какой аккаунт подключён.</li>
        <li><b>Реклама и вознаграждения</b> — у этих двух сервисов могут быть свои ограничения по странам.</li>
        <li><b>Налоги и законы</b> — по условиям ответственность за налоги, сборы и соблюдение местного законодательства лежит на пользователе.</li>
      </ul>
      <h2 id="kop-akkauntli-foydalanuvchi-uchun-xavfsizlik">Правила безопасности для тех, у кого несколько аккаунтов</h2>
      <p>Чем больше аккаунтов, тем выше риск ошибиться или попасться на обман. Несколько простых правил:</p>
      <ul>
        <li><b>Отдельный пароль 2FA на каждом аккаунте</b> — это и требование Fragment, и защита от кражи. Как его установить, описано в <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">инструкции по 2FA</Link>.</li>
        <li><b>Удаляйте сессию только сами</b> — не передавайте аккаунт посторонним, которые предлагают «всё подключить».</li>
        <li><b>Секретная фраза кошелька — только у вас</b> — у Fragment нет доступа к кошельку. «Помощник», который её просит, не может говорить от имени Fragment.</li>
        <li><b>Не переходите по ссылкам «вход без верификации»</b> — регистрации на Fragment нет вообще, особая ссылка не нужна. Вводите адрес сами.</li>
        <li><b>Подпишите аккаунты</b> — если записать для себя, какой кошелёк используется с каким аккаунтом, шанс ошибочной покупки снизится.</li>
      </ul>
      <Notice label={"Важно"}>Fragment не просит документы. Страница, которая требует паспорт, селфи или код входа в Telegram, — это не Fragment.</Notice>
      <h2 id="hamyon-va-sessiyasiz-yol-username">Путь без кошелька и сессий: заказ по @username в сумах</h2>
      <p>На Fragment нужен криптокошелёк. Если не хочется заводить кошелёк, покупать валюту и переключать аккаунты, можно оформить заказ в сумах через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. StarsPaymee — независимый сервис, официально с Telegram не связан.</p>
      <p>Боту нужен только @username. Пароль, SMS-код или вход в аккаунт не запрашиваются. Premium подключается через механизм подарков Telegram.</p>
      <p>Если аккаунтов несколько, этот путь проще: никаких переключений сессий, в каждом заказе вы указываете нужный @username. Например, Stars на личный аккаунт и Premium на мамин — это два отдельных заказа. Где найти username и как ввести его без ошибок, показано в <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">инструкции по покупке Stars</Link>.</p>
      <p>Способы оплаты: Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота. Зарубежная карта, криптокошелёк или VPN не нужны.</p>
      <CompareTable
        headers={["Товар", "Цена"]}
        rows={[
          ["1 Star — перевод на карту или баланс бота", `${som(STARS_PER_UNIT_UZS, "ru")}`],
          ["1 Star — Click, Payme, Uzum или Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Premium на 3 месяца", `${som(premium(3), "ru")}`],
          ["Premium на 6 месяцев", `${som(premium(6), "ru")}`],
          ["Premium на 12 месяцев", `${som(premium(12), "ru")}`],
        ]}
      />
      <p>Минимальный заказ Stars — 50 штук. Цена Premium одинакова при любом способе оплаты. Есть и тариф на 1 месяц — цену смотрите в боте.</p>
      <p>Одно ограничение стоит знать заранее. На аккаунт с активной подпиской Premium бот новый заказ Premium не откроет — срок поверх действующей подписки не добавляется. Обычно заказ доставляется автоматически за несколько секунд. Все тарифы собраны на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/privacy", label: "Privacy" },
          { href: "https://fragment.com/about", label: "https://fragment.com/about" },
          { href: "https://fragment.com/premium", label: "Buy Telegram Premium" },
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Нужно ли показывать паспорт или ID-карту, чтобы пользоваться Fragment?", answer: "Нет. В действующих условиях нет этапа загрузки документов: вход выполняется через Telegram-аккаунт и TON-кошелёк." },
  { question: "В канале написали «KYC отменили». Где это проверить?", answer: "Надёжнее всего — страницы fragment.com/terms и fragment.com/privacy. Слова KYC там нет вовсе, значит, и об отмене официально не объявляли. Но то, что документы не требуются, из условий видно." },
  { question: "У меня узбекский номер телефона. Fragment потребует номер другой страны?", answer: "На страницах Fragment требований к стране номера нет. Однако платформа может ограничивать сервисы в отдельных странах, и касается ли это Узбекистана, неизвестно." },
  { question: "Со скольких Telegram-аккаунтов можно пользоваться Fragment?", answer: "Точное число не объявлено, обещания «без ограничений» тоже нет. Аккаунты подключаются только по очереди: удаляете сессию одного и подключаете следующий." },
  { question: "Можно ли использовать один TON-кошелёк при входе с двух разных аккаунтов?", answer: "Запрета на официальных страницах нет. Fragment не хранит привязку кошелька к аккаунтам, поэтому при каждом переключении сами проверяйте, какой кошелёк подключён." },
  { question: "Если удалить сессию Fragment в Telegram, аккаунт не пострадает?", answer: "Это действие лишь отключает аккаунт от сайта Fragment. Fragment описывает его как шаг перед переходом на другой аккаунт, после чего можно снова открыть сайт и подключить любой аккаунт." },
  { question: "Пароль 2FA стоит, но Fragment всё равно не пускает к покупке. Что проверить?", answer: "Если пароль установлен недавно, Fragment может пока считать это препятствием. Проверьте также, какой аккаунт и какой кошелёк подключены и не ограничен ли сервис в вашей стране." },
  { question: "Можно ли купить Premium родственнику через Fragment, не заходя в его аккаунт?", answer: "Да. На странице Premium на Fragment есть пункт покупки для другого пользователя, а оплата идёт с вашего подключённого криптокошелька." },
  { question: "Если документы сейчас не нужны, так будет и дальше?", answer: "Заранее сказать нельзя. По условиям Fragment может без предупреждения вводить ограничения по странам и сервисам, поэтому перед крупной покупкой перечитайте действующие правила." },
  { question: "Чтобы купить Stars на три разных аккаунта в StarsPaymee, нужно входить в каждый?", answer: "Не нужно. В каждом заказе вы указываете @username получателя, а бот не запрашивает ни пароль, ни код." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Under Fragment’s current rules, you don’t need to verify your identity. No passport, selfie or other document is requested. You log in with a Telegram account and a TON wallet. You can use more than one account, but only one at a time: end one session, then connect the next. No official announcement that “KYC was removed” could be found.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#verifikatsiya-shart-emasligi-qayerda-yozilgan", label: "Where does it say verification isn’t required?" },
          { href: "#kanaldagi-davolar-va-rasmiy-matn", label: "Channel claims vs. official text: a comparison table" },
          { href: "#fragmentga-kirish-uchun-aslida-nima", label: "What do you actually need to log in to Fragment?" },
          { href: "#shaxsiy-ish-va-oila-akkauntlari", label: "Personal, work and family accounts: how do they take turns on Fragment?" },
          { href: "#akkauntni-almashtirish-telefonda-yetti-qadam", label: "Switching accounts: seven steps on your phone" },
          { href: "#maqsadga-qarab-tayyorgarlik-premium-username", label: "Preparing by goal: Premium, usernames, Stars, channel earnings" },
          { href: "#xarid-otmasa-hujjatdan-boshqa-sabablar", label: "When a purchase fails: reasons other than documents" },
          { href: "#kop-akkauntli-foydalanuvchi-uchun-xavfsizlik", label: "Security rules for people with several accounts" },
          { href: "#hamyon-va-sessiyasiz-yol-username", label: "A route without wallets or sessions: order in so‘m with your @username" },
        ]}
      />
      <h2 id="verifikatsiya-shart-emasligi-qayerda-yozilgan">Where does it say verification isn’t required?</h2>
      <p>The answer comes from Fragment’s own documents, not from channel posts. The <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Terms of Service</a> say the platform allows anyone to securely and anonymously purchase digital collectibles. The same passage mentions buying or gifting Telegram Premium.</p>
      <p>The <a href={"https://fragment.com/privacy"} target="_blank" rel="noopener noreferrer">Privacy Policy</a> states that Fragment has no dedicated registration method. You log in via Telegram and/or a TON wallet. There is no mention of email, a separate login or a document upload step anywhere.</p>
      <p>There is one subtle point. The word KYC doesn’t appear on the official pages at all. They don’t say it was ever introduced, and they don’t say it was dropped. So the claim that it was “removed” is not confirmed in this article.</p>
      <p>The practical answer stays the same. Under today’s terms, there is no document verification requirement.</p>
      <h2 id="kanaldagi-davolar-va-rasmiy-matn">Channel claims vs. official text: a comparison table</h2>
      <p>Several short claims about Fragment are circulating in Telegram channels. We checked each one against the text on Fragment’s pages.</p>
      <CompareTable
        headers={["Channel claim", "What Fragment’s pages say", "Verdict"]}
        rows={[
          ["KYC has been removed", "/terms and /privacy say nothing about KYC or about it changing", "Not confirmed"],
          ["Verification is no longer needed", "No registration; login via Telegram and wallet; purchases described as “anonymous”", "Matches current terms"],
          ["You don’t have to share personal data", "Fragment says it doesn’t collect unnecessary personal data and doesn’t store it", "Matches"],
          ["Connect as many accounts as you like", "There’s a procedure for ending a session and connecting another account; no number is mentioned", "Partly true"],
          ["Works fine from Uzbekistan too", "Fragment may restrict countries and services without notice", "Unknown"],
        ]}
      />
      <Notice label={"Important"}>A post is only a signal worth checking. Before you buy, open the terms on fragment.com yourself.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragmentga-kirish-uchun-aslida-nima">What do you actually need to log in to Fragment?</h2>
      <p>No documents, but there are technical requirements. The <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About page</a> asks you to connect a Telegram account and a TON wallet before bidding or buying. The Terms also describe the platform as offering exactly these two connections.</p>
      <p>Have these ready:</p>
      <ul>
        <li><b>Telegram account</b> — this is how you log in to Fragment.</li>
        <li><b>2FA password</b> — if you have no two-step password, or set it up too recently, Fragment shows this as a blocker. It’s not identity verification; it’s an account security requirement.</li>
        <li><b>TON wallet</b> — purchases and bids go through this wallet.</li>
      </ul>
      <p>Not required:</p>
      <ul>
        <li>a passport or ID card;</li>
        <li>a selfie or video;</li>
        <li>a separate Fragment username and password.</li>
      </ul>
      <p>The privacy documents also make two points. First, Fragment doesn’t store data linking the two login methods to your IP address, browser or device, or linking them to each other. Second, Fragment has no access to your wallet and doesn’t store anything that could trace it back to you or your accounts.</p>
      <h2 id="shaxsiy-ish-va-oila-akkauntlari">Personal, work and family accounts: how do they take turns on Fragment?</h2>
      <p>Since no documents are required, one person can use Fragment with several Telegram accounts. That’s the part of the “connect as many accounts as you like” claim that holds up.</p>
      <p>But it works one account at a time. Only one account is connected to Fragment at any moment. To switch, you end the Fragment session in the Telegram app, reopen the site and connect the new account. Fragment describes this as fully disconnecting your account and logging in with another phone number.</p>
      <p>The official pages don’t announce any limit on the number of accounts. Nor do they promise “unlimited.” Don’t treat the absence of a stated limit as a guarantee.</p>
      <p>Example. You have three accounts: your personal one, a work account that runs your online store’s channel, and your mother’s. On your personal account you browse collectible usernames. When you need a username for the channel, you end the session and switch to the work account. To gift Premium to your mother, you don’t need to log in to her account at all. The Premium page has an option to buy for another user.</p>
      <p>Pay attention to the wallet too. Fragment doesn’t store your wallet linked to your accounts, so each time you switch, check which wallet is connected. Fragment itself recommends double-checking that you connected the correct wallet.</p>
      <h2 id="akkauntni-almashtirish-telefonda-yetti-qadam">Switching accounts: seven steps on your phone</h2>
      <p>The steps follow the instructions on Fragment’s <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">official page</a>. Menu names are given as they appear in the English interface.</p>
      <Steps>
        <Step title={"Identify the current account"}>open the Telegram account that is connected to Fragment.</Step>
        <Step title={"On Android"}>go to Settings &gt; Privacy &amp; Security &gt; Bots and websites &gt; Logged in with Telegram.</Step>
        <Step title={"On iOS"}>go to Settings &gt; Privacy &amp; Security &gt; Active Websites &gt; Logged in with Telegram.</Step>
        <Step title={"End the session"}>find Fragment in the list and remove the session.</Step>
        <Step title={"Switch to the account you need"}>open the other account in Telegram and make sure it has a 2FA password.</Step>
        <Step title={"Reopen Fragment"}>type the address yourself and connect the new account.</Step>
        <Step title={"Check the wallet"}>before buying, make sure the right wallet is connected.</Step>
      </Steps>
      <p>The official page doesn’t describe the path for Telegram Desktop, so we don’t list desktop menu names here. Switching on your phone is more reliable.</p>
      <h2 id="maqsadga-qarab-tayyorgarlik-premium-username">Preparing by goal: Premium, usernames, Stars, channel earnings</h2>
      <p>Logging in works the same for everyone. Each goal, however, has its own conditions.</p>
      <CompareTable
        headers={["What you want to do", "What you need on Fragment", "What to watch for"]}
        rows={[
          ["Premium for yourself or someone else", "“Buy Premium for a User” option, a crypto wallet", "The purchase is bound by the Telegram and Telegram Premium terms"],
          ["Collectible username", "A connected Telegram account and wallet", "Pricing and auction rules are separate"],
          ["Stars", "Fragment’s Stars page was not checked", "The process is not confirmed in this article"],
          ["Channel creator rewards", "Telegram processes these rewards through Fragment", "Rewards may not be issued to some users or countries"],
          ["Buying ads on Telegram", "Through Fragment", "May be restricted for users from certain countries"],
        ]}
      />
      <p>On Premium: <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">Fragment’s Premium page</a> offers the subscription for yourself or your friends, paid with a crypto wallet.</p>
      <p>Username prices, fees and auction steps are covered in our guide to <Link href="/blog/telegram-username-sotib-olish">buying a username on Fragment</Link>.</p>
      <p>On channel earnings: the <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">creator terms</a> say Fragment may be unable to issue rewards to certain users or countries due to regulatory and other factors. Ways to earn Stars with a channel are in our <Link href="/blog/telegram-kanal-stars-monetizatsiya">channel monetization article</Link>.</p>
      <p>If the currency name in your wallet is confusing, <Link href="/blog/toncoin-endi-gram">this explainer</Link> will help.</p>
      <h2 id="xarid-otmasa-hujjatdan-boshqa-sabablar">When a purchase fails: reasons other than documents</h2>
      <p>No verification doesn’t mean every purchase will go through. Common causes:</p>
      <ul>
        <li><b>2FA password</b> — if you have none or just set it, Fragment flags this as a blocker. Set the password in advance, not on the day you buy. The official page doesn’t say how long you need to wait.</li>
        <li><b>Country restrictions</b> — under the Terms, Fragment may limit which countries it operates in and which services are available, at any time and without notice. Whether Uzbekistan is affected is unknown.</li>
        <li><b>Old wallet</b> — a different wallet may still be connected from a previous session.</li>
        <li><b>Wrong account</b> — after switching, a purchase may end up on another account. Check which account is connected every time.</li>
        <li><b>Ads and rewards</b> — these two services may have their own country restrictions.</li>
        <li><b>Taxes and law</b> — under the Terms, taxes, fees and compliance with local law are solely the user’s responsibility.</li>
      </ul>
      <h2 id="kop-akkauntli-foydalanuvchi-uchun-xavfsizlik">Security rules for people with several accounts</h2>
      <p>The more accounts you have, the easier it is to get confused or scammed. A few simple rules:</p>
      <ul>
        <li><b>A separate 2FA password for each account</b> — it’s both a Fragment requirement and protection against theft. How to set one up is in our <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA guide</Link>.</li>
        <li><b>End sessions yourself</b> — don’t hand your account to a stranger who offers to “connect it for you.”</li>
        <li><b>Keep your wallet’s secret words to yourself</b> — Fragment has no access to your wallet. A “helper” asking for those words cannot be speaking for Fragment.</li>
        <li><b>Don’t click “login without verification” links</b> — Fragment has no registration at all, so no special link is needed. Type the address yourself.</li>
        <li><b>Label your accounts</b> — noting which wallet goes with which account lowers the chance of a mistaken purchase.</li>
      </ul>
      <Notice label={"Important"}>Fragment doesn’t ask for documents. Any page asking for your passport, a selfie or your Telegram login code is not Fragment.</Notice>
      <h2 id="hamyon-va-sessiyasiz-yol-username">A route without wallets or sessions: order in so‘m with your @username</h2>
      <p>Fragment requires a crypto wallet. If you’d rather not open a wallet, buy crypto and switch accounts, you can order in so‘m through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. StarsPaymee is an independent service with no official affiliation with Telegram.</p>
      <p>The bot only needs your @username. It never asks for a password, SMS code or access to your account. Premium is activated through Telegram’s gift mechanism.</p>
      <p>With several accounts, this route is simpler. There’s no session switching: you just enter the right @username for each order. For example, Stars for your personal account and Premium for your mother’s are two separate orders. Where to find a username and how to enter it correctly is shown in our <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Stars</Link>.</p>
      <p>Payment methods: Click, Payme, Uzum, Paynet (including cash in the app or at a terminal), a UzCard/HUMO card transfer, or your bot balance. No international card, crypto wallet or VPN is needed.</p>
      <CompareTable
        headers={["Product", "Price"]}
        rows={[
          ["1 Star — card transfer or bot balance", `${som(STARS_PER_UNIT_UZS, "en")}`],
          ["1 Star — Click, Payme, Uzum or Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Premium, 3 months", `${som(premium(3), "en")}`],
          ["Premium, 6 months", `${som(premium(6), "en")}`],
          ["Premium, 12 months", `${som(premium(12), "en")}`],
        ]}
      />
      <p>The minimum Stars order is 50. Premium costs the same with every payment method. There’s also a 1-month plan; check its price in the bot.</p>
      <p>One limitation to know in advance: the bot won’t open a new Premium order for an account that already has an active subscription, and time isn’t added on top. Orders are usually delivered automatically within a few seconds. All plans are listed on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://fragment.com/privacy", label: "Privacy" },
          { href: "https://fragment.com/about", label: "https://fragment.com/about" },
          { href: "https://fragment.com/premium", label: "Buy Telegram Premium" },
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Do I need to show my passport or ID card to use Fragment?", answer: "No. The current terms have no document upload step; you log in with a Telegram account and a TON wallet." },
  { question: "A channel posted that “KYC has been removed.” Where can I check this?", answer: "The most reliable sources are fragment.com/terms and fragment.com/privacy. They don’t mention KYC at all, so its removal hasn’t been officially announced either, but the terms make clear that documents aren’t required." },
  { question: "My phone number is from Uzbekistan. Does Fragment require a number from another country?", answer: "Fragment’s pages don’t list any requirement about the number’s country. However, the platform may restrict services in some countries, and it’s unknown whether that applies to Uzbekistan." },
  { question: "How many Telegram accounts can I use on Fragment?", answer: "No exact number has been published, and there’s no promise of “unlimited.” Accounts connect one at a time: you end one session, then connect the next." },
  { question: "Can I use the same TON wallet when logging in from two different accounts?", answer: "The official pages don’t prohibit it. Fragment doesn’t store your wallet linked to your accounts, so verify which wallet is connected each time you switch." },
  { question: "Will ending the Fragment session in Telegram harm my account?", answer: "It only disconnects your account from the Fragment website. Fragment presents it as the step before switching accounts, after which you can reopen the site and connect whichever account you want." },
  { question: "I have a 2FA password, but Fragment still won’t let me buy. What should I check?", answer: "If the password was set recently, Fragment may still treat it as a blocker. Also check which account and wallet are connected, and whether the service is restricted in your country." },
  { question: "Can I buy Premium on Fragment for a family member without logging in to their account?", answer: "Yes. Fragment’s Premium page has an option to buy for another user, and you pay from the crypto wallet connected on your side." },
  { question: "If documents aren’t required now, will it stay that way?", answer: "There’s no way to know in advance. The terms let Fragment introduce country and service restrictions without notice, so review the current terms before any important purchase." },
  { question: "To buy Stars for three different accounts on StarsPaymee, do I need to log in to each one?", answer: "No. For each order you enter the recipient’s @username, and the bot never asks for a password or code." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["fragment verifikatsiya shartmi","fragment kyc bekor qilindi","fragment bir nechta akkaunt ulash","fragment akkaunt almashtirish","fragment hujjatsiz kirish","fragment sessiyasini o‘chirish","fragment верификация нужна ли","fragment kyc отменили","fragment несколько аккаунтов","как сменить аккаунт на fragment","fragment без верификации","fragment 2fa пароль"],
  howToSteps: [
    { name: "Hozirgi akkauntni aniqlang", text: "Telegram’da Fragment’ga ulangan akkauntni oching." },
    { name: "Android bo‘lsa", text: "Settings > Privacy & Security > Bots and websites > Logged in with Telegram bo‘limiga kiring." },
    { name: "iOS bo‘lsa", text: "Settings > Privacy & Security > Active Websites > Logged in with Telegram bo‘limiga kiring." },
    { name: "Sessiyani o‘chiring", text: "ro‘yxatdan Fragment’ni topib, sessiyani yakunlang." },
    { name: "Kerakli akkauntga o‘ting", text: "Telegram’da ikkinchi akkauntni oching va unda 2FA paroli borligini tekshiring." },
    { name: "Fragment’ni qayta oching", text: "manzilni o‘zingiz terib kiring va yangi akkauntni ulang." },
    { name: "Hamyonni solishtiring", text: "xariddan oldin aynan kerakli hamyon ulanganiga ishonch hosil qiling." },
  ],
  locales: {
    uz: {
      title: "Fragment’da verifikatsiya endi shart emasmi va nechta akkaunt ulash mumkin?",
      excerpt: "Fragment’ning amaldagi shartlarida hujjat bilan shaxsni tasdiqlash talab qilinmaydi, akkauntlarni esa navbat bilan almashtirib ulash mumkin. Maqolada almashtirish qadamlari, 2FA va hamyon talablari bor.",
      metaTitle: "Fragment’da verifikatsiya endi shart emasmi",
      metaDescription: "Fragment’ning amaldagi shartlarida hujjat bilan shaxsni tasdiqlash talab qilinmaydi, akkauntlarni esa navbat bilan almashtirib ulash mumkin.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Нужна ли верификация на Fragment и сколько аккаунтов можно подключить?",
      excerpt: "Действующие условия Fragment не требуют подтверждать личность документами, а аккаунты можно подключать поочерёдно. В статье: шаги смены аккаунта, требования к 2FA и кошельку.",
      metaTitle: "Нужна ли верификация на Fragment",
      metaDescription: "Действующие условия Fragment не требуют подтверждать личность документами, а аккаунты можно подключать поочерёдно.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Does Fragment Require Verification? KYC and Using Multiple Accounts",
      excerpt: "How Fragment’s current terms handle identity checks, how to switch between several Telegram accounts step by step, and which 2FA and wallet requirements can still block a purchase.",
      metaTitle: "Does Fragment Require Verification? KYC",
      metaDescription: "How Fragment’s current terms handle identity checks, how to switch between several Telegram accounts step by step, and which 2FA and wallet requirements can…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
