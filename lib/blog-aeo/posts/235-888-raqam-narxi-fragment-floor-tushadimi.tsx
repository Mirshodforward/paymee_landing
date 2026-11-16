import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "888-raqam-narxi-fragment-floor-tushadimi";

/**
 * +888 raqam narxi tushadimi: Fragment’da floor va sotuvlarni o‘qish
 *
 * Avtoblogyoz yasagan maqola (2026-11-16): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: +888 raqami bor yoki uni olmoqchi bo‘lgan foydalanuvchi o‘g‘irlangan 200 ta raqam floordan arzon sotilgani haqidagi xabardan keyin «+888 raqam narxi tushadimi» deb qidiradi; u Fragment’da floor va sotuvlarni qanday o‘qishni, hozir sotish yoki olish kerakligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-16):
 *   https://fragment.com/about
 *   https://fragment.com/numbers
 *   https://telegram.org/blog/ultimate-privacy-topics-2-0
 *   https://telegram.org/faq
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
  return <p>+888 raqam narxi bitta kanal posti sababli o‘z-o‘zidan tushmaydi. 200 ta o‘g‘irlangan raqam floordan arzon sotilgani haqidagi da’vo rasmiy manbalarda tasdiqlanmagan. Narxni Fragment’dagi eng arzon e’lonlar va haqiqatan yopilgan bitimlar ko‘rsatadi. Shuning uchun sotish, olish yoki kutish qarorini postga emas, shu ma’lumotga qarab qiling.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#200-ta-raqam-arzon-sotildi", label: "«200 ta raqam arzon sotildi» posti narxga qanday ta’sir qiladi?" },
          { href: "#888-raqam-nima-uchun-pul", label: "+888 raqam nima uchun pul turadi?" },
          { href: "#fragmentdagi-floor-nimani-korsatadi-va", label: "Fragment’dagi «floor» nimani ko‘rsatadi va nimani ko‘rsatmaydi?" },
          { href: "#narx-tushganini-fragmentda-qanday-tekshiraman", label: "Narx tushganini Fragment’da qanday tekshiraman?" },
          { href: "#raqamim-bor-hozir-sotaymi-yoki", label: "Raqamim bor: hozir sotaymi yoki kutaymi?" },
          { href: "#raqam-olmoqchiman-arzon-elonni-qanday", label: "Raqam olmoqchiman: arzon e’lonni qanday baholayman?" },
          { href: "#har-bir-vaziyatda-nima-qilish", label: "Har bir vaziyatda nima qilish kerak?" },
          { href: "#sotuv-yoki-xarid-paytida-raqamni", label: "Sotuv yoki xarid paytida raqamni qanday yo‘qotmaslik kerak?" },
          { href: "#stars-premium-yoki-sovga-uchun", label: "Stars, Premium yoki sovg‘a uchun +888 raqam kerakmi?" },
        ]}
      />
      <h2 id="200-ta-raqam-arzon-sotildi">«200 ta raqam arzon sotildi» posti narxga qanday ta’sir qiladi?</h2>
      <p>Telegram kanallarida shunday xabar tarqaldi: 200 ta +888 raqam egasidan tahdid bilan tortib olingan va floordan arzon sotib yuborilgan. Bu da’voni Telegram ham, Fragment ham tasdiqlamagan. Shuning uchun biz uni na haqiqat, na yolg‘on deb yozamiz — faqat tekshirilmagan xabar sifatida qaraymiz.</p>
      <p>Bunday xabarni bozorning o‘zi tekshirib beradi. Agar 200 ta raqam qisqa vaqtda arzon sotilgan bo‘lsa, Fragment’dagi sotuvlar tarixida iz qolishi kutiladi. Biz buni alohida tekshirmadik — quyidagi qadamlar bilan o‘zingiz ko‘rishingiz mumkin.</p>
      <p>Kontekst uchun: Fragment ma’lumotiga ko‘ra, jami 136 566 ta raqam 2022-yil dekabrida sotilib tugagan, hozir esa ularni faqat mavjud egalaridan olish mumkin (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment Numbers</a>). 200 ta raqam bu sonning kichik bir qismi.</p>
      <p>Ammo narx umumiy songa emas, ayni paytda sotuvda turgan takliflarga va xaridorlar qancha to‘layotganiga bog‘liq. Bitta sotuvchi ko‘p raqamni birdaniga arzon qo‘ysa, eng past e’lonlar vaqtincha pastlashi mumkin. Xaridorlar ularni tez olib ketsa, ro‘yxat avvalgi holatiga qaytadi. Ertaga narx qayoqqa ketishini hech kim oldindan ayta olmaydi: post ham, bu maqola ham prognoz emas.</p>
      <h2 id="888-raqam-nima-uchun-pul">+888 raqam nima uchun pul turadi?</h2>
      <p>Raqamning qiymati nimaga tayanishini bilsangiz, mish-mish sizga kamroq ta’sir qiladi. Rasmiy manbalarda quyidagilar aytilgan:</p>
      <ul>
        <li><b>Cheklangan kolleksiya.</b> Telegram 2022-yil oxirida virtual raqamlarni TON blokcheynida cheklangan miqdorda, kolleksiya buyumi sifatida chiqargan (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>). Endi raqamlar egalar o‘rtasida aylanadi.</li>
        <li><b>SIM-kartasiz akkaunt.</b> Telegram blogida ular blokcheynga asoslangan anonim raqamlar deb atalgan: ular bilan SIM-kartasiz ro‘yxatdan o‘tish mumkin (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</li>
        <li><b>Kod Fragment’da keladi.</b> Kirish kodi SMS orqali emas, Fragment’da olinadi. Buning uchun hamyon Fragment’ga ulanadi.</li>
        <li><b>Faqat Telegram uchun.</b> Raqam oddiy SMS va qo‘ng‘iroqni qabul qilmaydi. Boshqa xizmatlarda ro‘yxatdan o‘tishga yaramagani xaridorlar doirasini toraytiradi.</li>
        <li><b>Oson o‘tkaziladi.</b> Ega raqamni akkauntiga istalgan vaqtda qo‘shib, olib tashlay oladi. Fragment’ga ko‘ra, uni TON blokcheyni orqali boshqa odamga bepul o‘tkazsa ham bo‘ladi. Shu sabab halol sotuv ham, shubhali qayta sotuv ham tez amalga oshadi.</li>
      </ul>
      <p>Raqamning ko‘rinishiga qarab so‘ralgan narx farq qilishi mumkin. Buni taxmin qilmang — sahifada bir xil turdagi raqamlarni yonma-yon qo‘yib solishtiring.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragmentdagi-floor-nimani-korsatadi-va">Fragment’dagi «floor» nimani ko‘rsatadi va nimani ko‘rsatmaydi?</h2>
      <p>Fragment +888 raqamlar uchun rasmiy floor narxini e’lon qilmaydi. Savdogarlar «floor» deganda odatda ayni paytda sotuvga qo‘yilgan eng arzon raqamni nazarda tutadi. Bu jargon, rasmiy ko‘rsatkich emas.</p>
      <p>Yana bir farq: e’lon narxi — sotuvchi so‘ragan summa, bitim narxi — haqiqatan to‘langan summa. Post «floordan arzon sotildi» desa, qaysi biri nazarda tutilgani noma’lum. Narxlar doim o‘zgarib turgani uchun bu yerda aniq summa yozmaymiz.</p>
      <CompareTable
        headers={["Ko‘rsatkich", "Nimani bildiradi", "Qanday chalg‘itishi mumkin"]}
        rows={[
          ["Eng arzon e’lon", "Hozir kimdir qancha so‘rayotgani", "Bitta shoshilgan sotuvchi butun bozorni arzon qilib ko‘rsatadi"],
          ["Oxirgi bitimlar", "Xaridor haqiqatan qancha to‘lagani", "Bir-ikki bitim trend emas, raqam turi ham har xil bo‘lishi mumkin"],
          ["Raqam sahifasidagi tarix", "Aynan shu raqam bilan nima bo‘lgani", "Butun bozor haqida xulosa bermaydi"],
          ["Kanal skrinshoti", "Muallif ko‘rsatmoqchi bo‘lgan bir lahza", "Sana, kontekst va tahrirni tekshirib bo‘lmaydi"],
          ["Chatdagi «shoshilinch, arzon» taklif", "Fragment’dan tashqaridagi kelishuv", "Bozor narxi emas, ko‘pincha aldov belgisi"],
        ]}
      />
      <p>Kolleksion buyum narxini nusxa bo‘yicha o‘qish mantig‘i sovg‘alarda ham shunday. Bu haqda <Link href="/blog/telegram-gift-price">bir xil gift nega ikki xil narxda turadi</Link> maqolasida yozilgan.</p>
      <h2 id="narx-tushganini-fragmentda-qanday-tekshiraman">Narx tushganini Fragment’da qanday tekshiraman?</h2>
      <p>Sahifani o‘zingiz ochib, quyidagi tartibda qarang. Interfeys va tugma nomlari o‘zgarishi mumkin, aniq nomlarni sahifaning o‘zida ko‘ring.</p>
      <Steps>
        <Step title={"Raqamlar sahifasini oching"}><a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">fragment.com/numbers</a>. Domenni tekshiring, chatdagi o‘xshash havolalarni bosmang.</Step>
        <Step title={"Sotuvdagilarni narx bo‘yicha saralang"}>eng arzon 5–10 ta e’lonni yozib oling.</Step>
        <Step title={"Sotilganlarni oching"}>oxirgi bitimlarning narxi va sanasiga qarang, e’lon narxi bilan solishtiring.</Step>
        <Step title={"Bir necha kun kuzating"}>bir kunlik sakrash trend emas. Eng arzon e’lonlar qayerga siljiganini har kuni bir xil vaqtda qayd eting.</Step>
        <Step title={"Faqat bir xil turdagi raqamlarni solishtiring"}>chiroyli raqamni oddiy raqam bilan aralashtirsangiz, noto‘g‘ri xulosaga kelasiz.</Step>
        <Step title={"Postdagi da’voni tarixda qidiring"}>ko‘p raqam birdaniga arzon sotilgan bo‘lsa, bir xil vaqt oralig‘ida ko‘plab bitim ko‘rinishi kerak edi. Iz topilmasa, da’vo tasdiqlanmagan bo‘lib qoladi.</Step>
      </Steps>
      <p>Natijani qanday o‘qish mumkin? Masalan, yozib olgan o‘nta e’longizdan to‘qqiztasi bir-biriga yaqin, bittasi esa ancha past. Bu bozor tushgani emas, bitta sotuvchining qarori. Agar esa bir necha kun davomida e’lonlar ham, bitimlar ham birga pastga siljisa — bu allaqachon pasayish belgisi.</p>
      <h2 id="raqamim-bor-hozir-sotaymi-yoki">Raqamim bor: hozir sotaymi yoki kutaymi?</h2>
      <p>Tasdiqlanmagan post shoshilib sotishga sabab emas. Avval raqam sizga nima uchun kerakligini aniqlang: asosiy akkauntingizga ulanganmi, anonim kirish uchun ishlatyapsizmi yoki shunchaki saqlab qo‘yganmisiz?</p>
      <p>Raqam akkauntga ulangan bo‘lsa, sotishdan oldin reja tuzing. Raqamni akkauntga qo‘shish va olib tashlash egasining ixtiyorida (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>). Akkauntni avval boshqa raqamga ko‘chirmasangiz, raqam bilan birga kirish yo‘lini ham boy berishingiz mumkin. Yangi ega raqamni ulaganda nima bo‘lishi haqida <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">sotib olingan raqamda eski akkaunt chiqsa</Link> maqolasida o‘qing.</p>
      <p>Arzon e’lonlarga ergashib, raqamingizni ulardan ham pastga qo‘ymang. «Hamma arzonga sotib yubordi» degan vahima ko‘pincha o‘zi narxni pasaytiradi. Pul zudlik bilan kerak bo‘lmasa, bir necha kun kuzatib, keyin qaror qilish xotirjamroq yo‘l.</p>
      <h2 id="raqam-olmoqchiman-arzon-elonni-qanday">Raqam olmoqchiman: arzon e’lonni qanday baholayman?</h2>
      <p>Xaridor uchun narxning o‘zidan ko‘ra taklif qayerdan kelgani muhimroq.</p>
      <ul>
        <li><b>Fragment’dagi e’lon.</b> Sotuvchi shunchaki shoshilayotgan bo‘lishi mumkin. Narxni shu turdagi boshqa e’lonlar va oxirgi bitimlar bilan solishtiring.</li>
        <li><b>Fragment’dan tashqaridagi taklif.</b> Raqamni istalgan ega erkin o‘tkaza olgani uchun shubhali raqam ham tez qayta sotiladi, sotuvchi esa g‘oyib bo‘ladi.</li>
        <li><b>Qaytarish yo‘li noma’lum.</b> O‘g‘irlangan raqamni qaytarish yoki shikoyat qilish tartibi haqida rasmiy ma’lumot topilmadi. Pulni qaytarish imkoni bor deb hisoblamang.</li>
        <li><b>Bosim.</b> «Hozir olmasang, kech bo‘ladi» degan ohang — to‘xtab o‘ylash uchun signal. Vaziyat <Link href="/blog/plush-pepe-kit-xaridi-narx-oshadimi">Plush Pepe narxi haqidagi postlar</Link>ga o‘xshaydi: post narxni kafolatlamaydi.</li>
      </ul>
      <p>Maqsadingiz ikkinchi akkaunt yoki SMS qabul qiladigan raqam bo‘lsa, +888 to‘g‘ri kelmaydi — u oddiy SMS qabul qilmaydi. Bunday holat uchun <Link href="/blog/telegram-raqam-sotib-olish">virtual raqam haqidagi qo‘llanma</Link>ni ko‘ring, narx va shartlar botda ko‘rsatiladi.</p>
      <h2 id="har-bir-vaziyatda-nima-qilish">Har bir vaziyatda nima qilish kerak?</h2>
      <p>Jadval narx kafolati emas, faqat mantiqiy yo‘nalish. Qaror o‘z hisobingizga.</p>
      <CompareTable
        headers={["Vaziyat", "Mantiqiy harakat", "Nima qilmaslik kerak"]}
        rows={[
          ["Raqam akkauntingizda ishlab turibdi", "Post sababli hech narsa qilmang, himoyani tekshiring", "Vahimaga tushib sotuvga qo‘yish"],
          ["Raqamni qayta sotish uchun olgansiz", "Bir necha kun e’lon va bitimlarni kuzating", "Eng arzon e’londan ham pastga tushish"],
          ["Fragment’da arzon e’lon ko‘rdingiz", "Raqam turi va bitimlar tarixini solishtiring", "Bitta e’longa qarab «narx tushdi» deyish"],
          ["Chatda arzon taklif keldi", "Sotuvchidan Fragment’da e’lon qo‘yishni so‘rang yoki rad eting", "Oldindan to‘lov, kod yoki hamyon ma’lumotini berish"],
          ["Kimdir tahdid bilan raqam talab qilyapti", "Hech narsa o‘tkazmang, yozishmalarni saqlang", "Kod, hamyon yoki raqamni berish"],
        ]}
      />
      <p>Kolleksion username bozori ham shu tamoyilda ishlaydi: e’lon va haqiqiy sotuv bir narsa emas. Taqqoslash uchun <Link href="/blog/telegram-username-sotib-olish">Fragment’da username sotib olish</Link> maqolasini ko‘ring.</p>
      <h2 id="sotuv-yoki-xarid-paytida-raqamni">Sotuv yoki xarid paytida raqamni qanday yo‘qotmaslik kerak?</h2>
      <p>Bitim paytida eng ko‘p xato kod va hamyon atrofida bo‘ladi. Shu lahzaga oid qoidalar:</p>
      <ul>
        <li><b>Kod faqat sizga.</b> «Xaridor topdim, tekshirish uchun kodni yubor» degan xabar — aldov belgisi. Telegram hech qachon tasdiqlash kodi yoki 2FA parolini so‘ramaydi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</li>
        <li><b>Hamyonni begona saytga ulamang.</b> +888 raqamga kirish kodi hamyon ulanganda Fragment’da chiqadi. Hamyonga kirish ma’lumotlarini hech kimga bermang.</li>
        <li><b>Xariddan keyin tartib.</b> Raqam o‘z hamyoningizda ko‘ringandan keyingina uni akkauntga ulang. Kodni sotuvchidan emas, Fragment’da o‘z hamyoningiz orqali oling.</li>
        <li><b>2FA va tiklash emaili.</b> Settings &gt; Privacy and Security &gt; 2-Step Verification. Yoqilgach, kirishda koddan tashqari parol ham so‘raladi. Tiklash emaili ham kuchli parol bilan himoyalangan bo‘lsin.</li>
        <li><b>Sessiyalar.</b> Bitimdan keyin Settings &gt; Devices bo‘limida tanimagan qurilmalarni tugating.</li>
      </ul>
      <p>Hujum namunalari va batafsil sozlash <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">+888 akkauntga kirish urinishlari</Link> maqolasida.</p>
      <h2 id="stars-premium-yoki-sovga-uchun">Stars, Premium yoki sovg‘a uchun +888 raqam kerakmi?</h2>
      <p>Kerak emas. Stars, Premium va sovg‘alar oddiy raqamli akkauntga ham @username orqali keladi.</p>
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> so‘mda ishlaydi va faqat @username so‘raydi: parol, SMS kod yoki akkauntga kirish talab qilinmaydi. Stars narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars.</p>
      <p>Premium 3 oyga {som(premium(3), "uz")}, 6 oyga {som(premium(6), "uz")}, 12 oyga {som(premium(12), "uz")} turadi, hamma to‘lov usulida narx bir xil. 1 oylik tarif ham bor, uning narxi botda. Akkauntda faol Premium bo‘lsa, bot yangi Premium buyurtmasini ochmaydi. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</p>
      <Notice label={"Muhim"}>StarsPaymee — mustaqil xizmat, Telegram bilan rasmiy aloqa da’vo qilmaydi. Bot Stars va sovg‘alarni foydalanuvchidan sotib olmaydi, +888 raqamlar esa Fragment’da savdo qilinadi.</Notice>
      <p>Batafsil ma’lumot <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Yangi +888 raqamlar chiqadimi yoki faqat eskilari sotiladimi?", answer: "Fragment’ga ko‘ra, raqamlarning hammasi 2022-yil dekabrida sotilib bo‘lgan va endi ularni faqat hozirgi egalaridan olish mumkin. Yangi partiya haqida bu maqolada tasdiqlangan ma’lumot yo‘q." },
  { question: "Bitta raqam arzon ketgan bo‘lsa, meniki ham arzonlashadimi?", answer: "Shart emas. Bitta bitim faqat o‘sha raqamning taqdirini ko‘rsatadi; umumiy pasayish haqida e’lonlar ham, bitimlar ham bir necha kun birga pastlagandagina gapirsa bo‘ladi." },
  { question: "E’lon narxi va bitim narxidan qaysi biriga ko‘proq ishonish kerak?", answer: "Bitim narxiga: u kimdir haqiqatan to‘lagan summa. E’lon esa faqat sotuvchining istagi, u uzoq vaqt sotilmay turishi mumkin." },
  { question: "Kanaldagi skrinshotdagi sotuvni qanday tekshiraman?", answer: "Skrinshotdagi raqamni Fragment qidiruviga kiriting va uning sahifasidagi tarixni oching. Raqam topilmasa yoki sana va narx mos kelmasa, skrinshotni dalil deb hisoblamang." },
  { question: "Narx tushdimi yoki yo‘qmi, bilish uchun qancha kuzatish kerak?", answer: "Aniq qoida yo‘q, lekin bir kunlik o‘zgarishga qarab xulosa qilmang. Bir necha kun ketma-ket bir xil vaqtda eng arzon e’lonlar va oxirgi bitimlarni yozib boring." },
  { question: "Raqamni sotsam, unga ulangan akkauntim nima bo‘ladi?", answer: "Akkauntni oldindan boshqa raqamga o‘tkazib olgan ma’qul. Aks holda kirish kodi yangi egasining hamyoni orqali chiqadi va siz shu raqam bilan akkauntga kira olmay qolishingiz mumkin." },
  { question: "Xaridor raqamni tekshirish uchun kirish kodini so‘rasa-chi?", answer: "Bermang va suhbatni to‘xtating. Halol bitim Fragment’da yopiladi, kodni esa hech kimga, hatto «Telegram xodimi»ga ham aytish kerak emas." },
  { question: "O‘g‘irlangan raqamni bilmasdan olsam, uni mendan qaytarib olishlari mumkinmi?", answer: "Bu borada rasmiy tartib topilmadi, shuning uchun aniq javob yo‘q. Shu sababli pulni qaytarish yo‘li ham noma’lum — xavfni xariddan oldin hisoblang." },
  { question: "+888 raqamni jamg‘arma o‘rnida saqlash ma’nolimi?", answer: "Raqamlar soni cheklangan, lekin bu narx o‘sishini kafolatlamaydi. Yo‘qotishga tayyor bo‘lmagan pulni bunday buyumga qo‘ymang." },
  { question: "Oddiy raqamli akkauntga Stars yoki Premium olsa bo‘ladimi?", answer: "Ha, raqam turi ahamiyatsiz: @StarsPaymee_bot’da @username kiritib, so‘mda to‘laysiz. Faqat faol Premium bor akkauntga bot yangi Premium buyurtmasini ochmaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Цена номера +888 не падает сама по себе из-за одного поста в канале. Заявление о том, что 200 украденных номеров продали ниже floor, официальными источниками не подтверждено. Цену показывают самые дешёвые объявления и реально закрытые сделки на Fragment. Поэтому решение продавать, покупать или ждать принимайте по этим данным, а не по посту.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#200-ta-raqam-arzon-sotildi", label: "Как пост «200 номеров продали дёшево» влияет на цену?" },
          { href: "#888-raqam-nima-uchun-pul", label: "Почему номер +888 вообще стоит денег?" },
          { href: "#fragmentdagi-floor-nimani-korsatadi-va", label: "Что показывает «floor» на Fragment, а что — нет?" },
          { href: "#narx-tushganini-fragmentda-qanday-tekshiraman", label: "Как проверить на Fragment, упала ли цена?" },
          { href: "#raqamim-bor-hozir-sotaymi-yoki", label: "У меня есть номер: продавать сейчас или подождать?" },
          { href: "#raqam-olmoqchiman-arzon-elonni-qanday", label: "Хочу купить номер: как оценить дешёвое объявление?" },
          { href: "#har-bir-vaziyatda-nima-qilish", label: "Что делать в каждой ситуации?" },
          { href: "#sotuv-yoki-xarid-paytida-raqamni", label: "Как не потерять номер при продаже или покупке?" },
          { href: "#stars-premium-yoki-sovga-uchun", label: "Нужен ли номер +888 для Stars, Premium или подарков?" },
        ]}
      />
      <h2 id="200-ta-raqam-arzon-sotildi">Как пост «200 номеров продали дёшево» влияет на цену?</h2>
      <p>По Telegram-каналам разошлось сообщение: у владельцев под угрозами отобрали 200 номеров +888 и продали их ниже floor. Ни Telegram, ни Fragment этого не подтверждали. Поэтому мы не называем это ни правдой, ни ложью — для нас это просто непроверенная информация.</p>
      <p>Такие сообщения проверяет сам рынок. Если 200 номеров за короткое время ушли дёшево, в истории продаж на Fragment должен остаться след. Мы это отдельно не проверяли — вы можете посмотреть сами по шагам ниже.</p>
      <p>Для контекста: по данным Fragment, все 136 566 номеров были распроданы в декабре 2022 года, а сейчас купить их можно только у действующих владельцев (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment Numbers</a>). 200 номеров — малая доля от этого количества.</p>
      <p>Но цена зависит не от общего числа номеров, а от того, какие предложения висят на продаже прямо сейчас и сколько готовы платить покупатели. Если один продавец разом выставит много номеров дёшево, нижние объявления могут на время просесть. Если покупатели быстро их разберут, список вернётся к прежнему виду. Куда пойдёт цена завтра, заранее не скажет никто: ни пост, ни эта статья не являются прогнозом.</p>
      <h2 id="888-raqam-nima-uchun-pul">Почему номер +888 вообще стоит денег?</h2>
      <p>Когда понимаешь, на чём держится ценность номера, слухи действуют слабее. Вот что сказано в официальных источниках:</p>
      <ul>
        <li><b>Ограниченная коллекция.</b> В конце 2022 года Telegram выпустил ограниченный тираж виртуальных номеров как коллекционные предметы в блокчейне TON (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>). Теперь номера переходят от владельца к владельцу.</li>
        <li><b>Аккаунт без SIM-карты.</b> В блоге Telegram их называют анонимными номерами на базе блокчейна: с ними можно зарегистрироваться без SIM-карты (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</li>
        <li><b>Код приходит на Fragment.</b> Код для входа приходит не по SMS, а на Fragment. Для этого к Fragment подключается кошелёк.</li>
        <li><b>Только для Telegram.</b> Номер не принимает обычные SMS и звонки. Для регистрации в других сервисах он не годится, и это сужает круг покупателей.</li>
        <li><b>Легко передаётся.</b> Владелец может в любой момент привязать номер к аккаунту или отвязать его. По данным Fragment, передать его другому человеку через блокчейн TON можно бесплатно. Поэтому и честная продажа, и сомнительная перепродажа проходят быстро.</li>
      </ul>
      <p>Запрашиваемая цена может зависеть от того, как выглядит сам номер. Не гадайте — сравнивайте на странице номера одного типа рядом друг с другом.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragmentdagi-floor-nimani-korsatadi-va">Что показывает «floor» на Fragment, а что — нет?</h2>
      <p>Официальной floor-цены для номеров +888 Fragment не публикует. Под «floor» трейдеры обычно имеют в виду самый дешёвый номер, выставленный на продажу прямо сейчас. Это жаргон, а не официальный показатель.</p>
      <p>Ещё одно различие: цена объявления — это сумма, которую просит продавец, а цена сделки — сумма, которую реально заплатили. Когда в посте пишут «продали ниже floor», непонятно, что именно имеется в виду. Цены постоянно меняются, поэтому конкретных сумм мы здесь не приводим.</p>
      <CompareTable
        headers={["Показатель", "Что он означает", "Чем может ввести в заблуждение"]}
        rows={[
          ["Самое дешёвое объявление", "Сколько кто-то просит прямо сейчас", "Один торопливый продавец создаёт видимость дешёвого рынка"],
          ["Последние сделки", "Сколько покупатель реально заплатил", "Одна-две сделки — не тренд, к тому же номера могут быть разного типа"],
          ["История на странице номера", "Что происходило именно с этим номером", "О рынке в целом выводов не даёт"],
          ["Скриншот из канала", "Один момент, который хотел показать автор", "Дату, контекст и правки проверить нельзя"],
          ["«Срочно, дёшево» в чате", "Договорённость вне Fragment", "Это не рыночная цена, а часто признак обмана"],
        ]}
      />
      <p>С коллекционными подарками логика та же: цену читают по конкретному экземпляру. Подробнее — в статье <Link href="/blog/telegram-gift-price">почему один и тот же gift стоит по-разному</Link>.</p>
      <h2 id="narx-tushganini-fragmentda-qanday-tekshiraman">Как проверить на Fragment, упала ли цена?</h2>
      <p>Откройте страницу сами и смотрите в таком порядке. Интерфейс и названия кнопок могут меняться, точные названия сверяйте на самой странице.</p>
      <Steps>
        <Step title={"Откройте страницу номеров"}><a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">fragment.com/numbers</a>. Проверьте домен и не переходите по похожим ссылкам из чатов.</Step>
        <Step title={"Отсортируйте выставленные на продажу по цене"}>запишите 5–10 самых дешёвых объявлений.</Step>
        <Step title={"Откройте проданные"}>посмотрите цены и даты последних сделок, сравните их с ценами объявлений.</Step>
        <Step title={"Понаблюдайте несколько дней"}>однодневный скачок не тренд. Каждый день в одно и то же время отмечайте, куда сместились самые дешёвые объявления.</Step>
        <Step title={"Сравнивайте только номера одного типа"}>если смешать красивый номер с обычным, вывод будет ошибочным.</Step>
        <Step title={"Поищите заявление из поста в истории"}>если много номеров разом продали дёшево, в одном временном промежутке должно быть видно много сделок. Нет следа — заявление остаётся неподтверждённым.</Step>
      </Steps>
      <p>Как читать результат? Например, из десяти записанных объявлений девять близки друг к другу, а одно заметно ниже. Это не падение рынка, а решение одного продавца. А вот если несколько дней подряд вниз вместе ползут и объявления, и сделки — это уже признак снижения.</p>
      <h2 id="raqamim-bor-hozir-sotaymi-yoki">У меня есть номер: продавать сейчас или подождать?</h2>
      <p>Непроверенный пост — не повод продавать в спешке. Сначала решите, зачем вам номер: привязан ли он к основному аккаунту, используете ли вы его для анонимного входа или просто держите.</p>
      <p>Если номер привязан к аккаунту, составьте план до продажи. Привязывать и отвязывать номер владелец может по своему усмотрению (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>). Если заранее не перевести аккаунт на другой номер, вместе с номером можно потерять и способ входа. Что происходит, когда новый владелец привязывает номер, читайте в статье <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">на купленном номере оказался старый аккаунт</Link>.</p>
      <p>Не гонитесь за дешёвыми объявлениями и не ставьте свой номер ещё ниже. Паника в духе «все уже сбросили дёшево» часто сама и опускает цену. Если деньги не нужны срочно, спокойнее понаблюдать несколько дней и потом решить.</p>
      <h2 id="raqam-olmoqchiman-arzon-elonni-qanday">Хочу купить номер: как оценить дешёвое объявление?</h2>
      <p>Покупателю важнее не сама цена, а то, откуда пришло предложение.</p>
      <ul>
        <li><b>Объявление на Fragment.</b> Продавец может просто торопиться. Сравните цену с другими объявлениями того же типа и с последними сделками.</li>
        <li><b>Предложение вне Fragment.</b> Любой владелец может свободно передать номер, поэтому и сомнительный номер быстро перепродаётся, а продавец исчезает.</li>
        <li><b>Путь возврата неизвестен.</b> Официальной информации о порядке возврата украденного номера или подачи жалобы найти не удалось. Не рассчитывайте, что деньги можно будет вернуть.</li>
        <li><b>Давление.</b> Тон «не купишь сейчас — будет поздно» — сигнал остановиться и подумать. Ситуация похожа на <Link href="/blog/plush-pepe-kit-xaridi-narx-oshadimi">посты о цене Plush Pepe</Link>: пост цену не гарантирует.</li>
      </ul>
      <p>Если вам нужен второй аккаунт или номер, принимающий SMS, +888 не подойдёт — обычные SMS он не принимает. Для такого случая смотрите <Link href="/blog/telegram-raqam-sotib-olish">руководство по виртуальным номерам</Link>, цена и условия указаны в боте.</p>
      <h2 id="har-bir-vaziyatda-nima-qilish">Что делать в каждой ситуации?</h2>
      <p>Таблица — не гарантия цены, а лишь логичное направление. Решение вы принимаете на свой риск.</p>
      <CompareTable
        headers={["Ситуация", "Разумное действие", "Чего не делать"]}
        rows={[
          ["Номер работает на вашем аккаунте", "Из-за поста ничего не делайте, проверьте защиту", "Выставлять на продажу в панике"],
          ["Вы купили номер для перепродажи", "Несколько дней наблюдайте за объявлениями и сделками", "Опускаться ниже самого дешёвого объявления"],
          ["Увидели дешёвое объявление на Fragment", "Сравните тип номера и историю сделок", "Говорить «цена упала» по одному объявлению"],
          ["В чате пришло дешёвое предложение", "Попросите продавца выставить номер на Fragment или откажитесь", "Платить вперёд, сообщать код или данные кошелька"],
          ["Кто-то с угрозами требует номер", "Ничего не передавайте, сохраните переписку", "Отдавать код, кошелёк или номер"],
        ]}
      />
      <p>Рынок коллекционных username работает по тому же принципу: объявление и реальная продажа — не одно и то же. Для сравнения прочитайте статью <Link href="/blog/telegram-username-sotib-olish">как купить username на Fragment</Link>.</p>
      <h2 id="sotuv-yoki-xarid-paytida-raqamni">Как не потерять номер при продаже или покупке?</h2>
      <p>Больше всего ошибок во время сделки случается вокруг кода и кошелька. Правила именно для этого момента:</p>
      <ul>
        <li><b>Код — только вам.</b> Сообщение «нашёл покупателя, пришли код для проверки» — признак обмана. Telegram никогда не просит код подтверждения или пароль двухэтапной проверки (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</li>
        <li><b>Не подключайте кошелёк к чужим сайтам.</b> Код для входа по номеру +888 появляется на Fragment после подключения кошелька. Никому не давайте доступ к кошельку.</li>
        <li><b>Порядок после покупки.</b> Привязывайте номер к аккаунту только после того, как он появился в вашем кошельке. Код берите не у продавца, а на Fragment через свой кошелёк.</li>
        <li><b>2FA и почта для восстановления.</b> Settings &gt; Privacy and Security &gt; 2-Step Verification. После включения для входа, кроме кода, понадобится и пароль. Почта для восстановления тоже должна быть защищена надёжным паролем.</li>
        <li><b>Сеансы.</b> После сделки завершите незнакомые устройства в разделе Settings &gt; Devices.</li>
      </ul>
      <p>Примеры атак и подробная настройка — в статье <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">попытки входа в аккаунт +888</Link>.</p>
      <h2 id="stars-premium-yoki-sovga-uchun">Нужен ли номер +888 для Stars, Premium или подарков?</h2>
      <p>Не нужен. Stars, Premium и подарки приходят по @username и на аккаунт с обычным номером.</p>
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> работает в сумах и просит только @username: пароль, SMS-код или вход в аккаунт не нужны. Цена Stars зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars.</p>
      <p>Premium на 3 месяца стоит {som(premium(3), "ru")}, на 6 месяцев — {som(premium(6), "ru")}, на 12 месяцев — {som(premium(12), "ru")}, цена одинакова при любом способе оплаты. Есть и тариф на 1 месяц, его цена указана в боте. Если на аккаунте активен Premium, бот не откроет новый заказ Premium. Заказ обычно доставляется автоматически за несколько секунд.</p>
      <Notice label={"Важно"}>StarsPaymee — независимый сервис и не заявляет об официальной связи с Telegram. Бот не покупает Stars и подарки у пользователей, а номера +888 продаются на Fragment.</Notice>
      <p>Подробнее — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Будут ли новые номера +888 или продаются только старые?", answer: "По данным Fragment, все номера были распроданы ещё в декабре 2022 года, и теперь купить их можно только у нынешних владельцев. Подтверждённой информации о новой партии в этой статье нет." },
  { question: "Если один номер ушёл дёшево, подешевеет ли мой?", answer: "Не обязательно. Одна сделка говорит только о судьбе этого номера; об общем снижении можно говорить, лишь когда несколько дней подряд вниз идут и объявления, и сделки." },
  { question: "Чему верить больше: цене объявления или цене сделки?", answer: "Цене сделки: это сумма, которую кто-то действительно заплатил. Объявление — лишь желание продавца, и оно может долго висеть непроданным." },
  { question: "Как проверить продажу со скриншота из канала?", answer: "Введите номер со скриншота в поиск Fragment и откройте историю на его странице. Если номер не находится или дата и цена не совпадают, не считайте скриншот доказательством." },
  { question: "Сколько нужно наблюдать, чтобы понять, упала ли цена?", answer: "Жёсткого правила нет, но по изменению за один день выводы не делайте. Несколько дней подряд в одно и то же время записывайте самые дешёвые объявления и последние сделки." },
  { question: "Что будет с аккаунтом, если я продам привязанный к нему номер?", answer: "Аккаунт лучше заранее перевести на другой номер. Иначе код для входа будет приходить через кошелёк нового владельца, и войти по этому номеру вы уже не сможете." },
  { question: "А если покупатель просит код входа, чтобы проверить номер?", answer: "Не давайте и прекратите разговор. Честная сделка закрывается на Fragment, а код никому сообщать не нужно — даже «сотруднику Telegram»." },
  { question: "Если я по незнанию куплю украденный номер, могут ли его у меня забрать?", answer: "Официального порядка на этот счёт найти не удалось, поэтому точного ответа нет. По той же причине неизвестно и как вернуть деньги — оценивайте риск до покупки." },
  { question: "Есть ли смысл держать номер +888 как сбережения?", answer: "Количество номеров ограничено, но рост цены это не гарантирует. Не вкладывайте в такие вещи деньги, потерю которых вы не готовы пережить." },
  { question: "Можно ли купить Stars или Premium на аккаунт с обычным номером?", answer: "Да, тип номера не важен: в @StarsPaymee_bot вы вводите @username и платите в сумах. Только на аккаунт с активным Premium бот не откроет новый заказ Premium." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>A single channel post won’t make +888 number prices fall. No official source has confirmed the claim that 200 stolen numbers sold below the floor. Prices come from the cheapest listings on Fragment and from deals that actually closed there. Decide whether to sell, buy or wait based on that data, not on a post.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#200-ta-raqam-arzon-sotildi", label: "How does a “200 numbers sold cheap” post affect prices?" },
          { href: "#888-raqam-nima-uchun-pul", label: "Why is a +888 number worth money at all?" },
          { href: "#fragmentdagi-floor-nimani-korsatadi-va", label: "What does the Fragment “floor” show, and what doesn’t it show?" },
          { href: "#narx-tushganini-fragmentda-qanday-tekshiraman", label: "How do I check on Fragment whether prices have dropped?" },
          { href: "#raqamim-bor-hozir-sotaymi-yoki", label: "I own a number: should I sell now or wait?" },
          { href: "#raqam-olmoqchiman-arzon-elonni-qanday", label: "I want to buy one: how do I judge a cheap listing?" },
          { href: "#har-bir-vaziyatda-nima-qilish", label: "What should I do in each situation?" },
          { href: "#sotuv-yoki-xarid-paytida-raqamni", label: "How do I avoid losing the number during a sale or purchase?" },
          { href: "#stars-premium-yoki-sovga-uchun", label: "Do I need a +888 number for Stars, Premium or gifts?" },
        ]}
      />
      <h2 id="200-ta-raqam-arzon-sotildi">How does a “200 numbers sold cheap” post affect prices?</h2>
      <p>A message has been going around Telegram channels. It says 200 +888 numbers were taken from their owners under threat and then sold below the floor. Neither Telegram nor Fragment has confirmed this. We don’t call it true or false. We treat it as an unverified report.</p>
      <p>The market can test a claim like this. If 200 numbers really sold cheaply in a short window, you’d expect it to show up in Fragment’s sales history. We didn’t check that ourselves, but the steps below let you look for it.</p>
      <p>Some context: according to Fragment, all 136 566 numbers sold out in December 2022, and now you can only buy from an existing owner (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment Numbers</a>). Two hundred numbers would be a small slice of that total.</p>
      <p>The total supply doesn’t set the price, though. What sets it is what’s for sale right now and what buyers will actually pay. If one seller lists a lot of numbers cheaply at once, the lowest listings can dip for a while. If buyers snap them up quickly, the list goes back to where it was. Nobody can tell you where the price goes tomorrow. The post isn’t a forecast, and neither is this article.</p>
      <h2 id="888-raqam-nima-uchun-pul">Why is a +888 number worth money at all?</h2>
      <p>If you know what a number’s value rests on, rumours have less pull on you. Official sources say the following:</p>
      <ul>
        <li><b>A limited collection.</b> In late 2022, Telegram released a limited run of virtual numbers on the TON blockchain as collectibles (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About Fragment</a>). Since then they have only changed hands between owners.</li>
        <li><b>An account without a SIM card.</b> Telegram’s blog calls them blockchain-powered anonymous numbers. You can sign up with one without a SIM card (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li><b>The code arrives on Fragment.</b> You get the login code on Fragment, not by SMS. To see it, you connect your wallet to Fragment.</li>
        <li><b>Telegram only.</b> The number can’t receive regular SMS or phone calls. You can’t use it to sign up for other services, so fewer people want to buy one.</li>
        <li><b>Easy to transfer.</b> The owner can add the number to an account or remove it at any time. Fragment says any owner can also transfer it to someone else for free via the TON blockchain. That’s why honest sales and dubious resales both happen fast.</li>
      </ul>
      <p>How a number looks can affect its asking price. Don’t guess at this. Put numbers of the same kind side by side on the page and compare them.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragmentdagi-floor-nimani-korsatadi-va">What does the Fragment “floor” show, and what doesn’t it show?</h2>
      <p>Fragment doesn’t publish an official floor price for +888 numbers. When traders say “floor”, they usually mean the cheapest number listed for sale right now. It’s trader slang, not an official figure.</p>
      <p>There’s another difference to keep in mind. A listing price is what the seller asks. A deal price is what someone actually paid. When a post says something “sold below the floor”, you can’t tell which of the two it means. Prices keep changing, so we don’t quote specific amounts here.</p>
      <CompareTable
        headers={["Indicator", "What it tells you", "How it can mislead"]}
        rows={[
          ["Cheapest listing", "What someone is asking right now", "One seller in a hurry can make the whole market look cheap"],
          ["Recent deals", "What a buyer actually paid", "One or two deals aren’t a trend, and the numbers may be of different kinds"],
          ["History on a number’s page", "What happened to that exact number", "It tells you nothing about the market as a whole"],
          ["Channel screenshot", "One moment the author chose to show", "You can’t verify the date, the context or whether it was edited"],
          ["“Urgent, cheap” offer in a chat", "A deal made outside Fragment", "Not a market price, and often a sign of a scam"],
        ]}
      />
      <p>Gifts work the same way: you price a collectible by the individual item. We explain this in <Link href="/blog/telegram-gift-price">why the same gift can have two different prices</Link>.</p>
      <h2 id="narx-tushganini-fragmentda-qanday-tekshiraman">How do I check on Fragment whether prices have dropped?</h2>
      <p>Open the page yourself and work through it in this order. The interface and button names may change, so go by what the page shows.</p>
      <Steps>
        <Step title={"Open the numbers page"}><a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">fragment.com/numbers</a>. Check the domain, and don’t click lookalike links people send you in chats.</Step>
        <Step title={"Sort the numbers for sale by price"}>Write down the 5–10 cheapest listings.</Step>
        <Step title={"Open the sold numbers"}>Look at the price and date of recent deals and compare them with the listing prices.</Step>
        <Step title={"Watch for a few days"}>A jump on one day isn’t a trend. Each day, at the same time, note where the cheapest listings have moved.</Step>
        <Step title={"Compare only numbers of the same kind"}>If you mix a pretty number with an ordinary one, you’ll draw the wrong conclusion.</Step>
        <Step title={"Look for the post’s claim in the history"}>If lots of numbers sold cheaply at once, you’d expect to see many deals in the same time window. If there’s no trace, the claim stays unverified.</Step>
      </Steps>
      <p>How do you read the result? Say nine of the ten listings you noted are close to each other and one is much lower. That isn’t the market falling. It’s one seller’s choice. But if listings and deals both slide down together over several days, prices really are falling.</p>
      <h2 id="raqamim-bor-hozir-sotaymi-yoki">I own a number: should I sell now or wait?</h2>
      <p>An unverified post is no reason to rush a sale. First work out what the number is doing for you. Is it linked to your main account, do you use it for anonymous logins, or are you just holding it?</p>
      <p>If the number is linked to an account, plan before you sell. Adding the number to an account or removing it is up to the owner (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About Fragment</a>). If you don’t move the account to another number first, you could lose your way into it along with the number. To see what happens when a new owner connects the number, read <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">what to do if a bought number comes with an old account</Link>.</p>
      <p>Don’t follow cheap listings by pricing your number even lower. Panic along the lines of “everyone dumped theirs” often pushes prices down by itself. If you don’t need the money urgently, the calmer option is to watch for a few days and then decide.</p>
      <h2 id="raqam-olmoqchiman-arzon-elonni-qanday">I want to buy one: how do I judge a cheap listing?</h2>
      <p>For a buyer, where an offer comes from matters more than the price.</p>
      <ul>
        <li><b>A listing on Fragment.</b> The seller may just be in a hurry. Compare the price with other listings of the same kind and with recent deals.</li>
        <li><b>An offer outside Fragment.</b> Any owner can transfer a number freely, so a dubious number can be resold quickly before the seller disappears.</li>
        <li><b>No known way back.</b> We found no official information on how to recover a stolen number or file a complaint. Don’t count on getting your money back.</li>
        <li><b>Pressure.</b> A tone like “buy now or it’ll be too late” is a signal to stop and think. It’s much like the <Link href="/blog/plush-pepe-kit-xaridi-narx-oshadimi">posts about Plush Pepe prices</Link>: a post doesn’t guarantee a price.</li>
      </ul>
      <p>If what you really need is a second account or a number that receives SMS, +888 is the wrong choice because it can’t receive regular SMS. For that, see the <Link href="/blog/telegram-raqam-sotib-olish">guide to virtual numbers</Link>. Prices and terms are shown in the bot.</p>
      <h2 id="har-bir-vaziyatda-nima-qilish">What should I do in each situation?</h2>
      <p>This table doesn’t guarantee any price. It only suggests sensible moves, and the decision is yours.</p>
      <CompareTable
        headers={["Situation", "Sensible move", "What not to do"]}
        rows={[
          ["The number works on your account", "Do nothing because of the post, and check your security", "List it in a panic"],
          ["You bought the number to resell", "Watch listings and deals for a few days", "Undercut even the cheapest listing"],
          ["You saw a cheap listing on Fragment", "Compare the number type and the deal history", "Decide prices have fallen because of one listing"],
          ["Someone offered a cheap number in a chat", "Ask the seller to list it on Fragment, or say no", "Pay upfront or share a code or wallet details"],
          ["Someone is demanding your number with threats", "Don’t transfer anything, and keep the messages", "Hand over a code, wallet access or the number"],
        ]}
      />
      <p>Collectible usernames work on the same principle: a listing and a real sale aren’t the same thing. For comparison, see <Link href="/blog/telegram-username-sotib-olish">buying a username on Fragment</Link>.</p>
      <h2 id="sotuv-yoki-xarid-paytida-raqamni">How do I avoid losing the number during a sale or purchase?</h2>
      <p>Most mistakes during a deal involve the code and the wallet. These rules cover that moment:</p>
      <ul>
        <li><b>The code is for you only.</b> A message like “I found a buyer, send me the code so they can check” is a sign of a scam. Telegram will never ask for a verification code or your 2-Step Verification password (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</li>
        <li><b>Don’t connect your wallet to unfamiliar sites.</b> The login code for a +888 number appears on Fragment once your wallet is connected. Never give anyone access to your wallet.</li>
        <li><b>After you buy.</b> Link the number to an account only once it shows up in your own wallet. Get the code on Fragment through your own wallet, never from the seller.</li>
        <li><b>2FA and a recovery email.</b> Go to Settings &gt; Privacy and Security &gt; 2-Step Verification. Once it’s on, you’ll need a password as well as the code to log in. Protect the recovery email with a strong password too.</li>
        <li><b>Sessions.</b> After the deal, go to Settings &gt; Devices and end any sessions on devices you don’t recognise.</li>
      </ul>
      <p>You’ll find real attack examples and detailed setup steps in <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">attempts to log into a +888 account</Link>.</p>
      <h2 id="stars-premium-yoki-sovga-uchun">Do I need a +888 number for Stars, Premium or gifts?</h2>
      <p>No. Stars, Premium and gifts reach an account with an ordinary phone number too, through its @username.</p>
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> takes payment in Uzbek som and only asks for your @username. It doesn’t need a password, an SMS code or access to your account. The price of Stars depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars.</p>
      <p>Premium costs {som(premium(3), "en")} for 3 months, {som(premium(6), "en")} for 6 months and {som(premium(12), "en")} for 12 months, and the price is the same for every payment method. There’s also a 1-month plan, priced in the bot. If the account already has an active Premium subscription, the bot won’t open a new Premium order. Orders are usually delivered automatically within a few seconds.</p>
      <Notice label={"Important"}>StarsPaymee is an independent service and doesn’t claim any official link to Telegram. The bot doesn’t buy Stars or gifts from users, and +888 numbers are traded on Fragment.</Notice>
      <p>For more details, see the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Will new +888 numbers be released, or are only existing ones sold?", answer: "Fragment says all the numbers sold out in December 2022, and now you can only buy them from their current owners. This article has no confirmed information about a new batch." },
  { question: "If one number sold cheap, will mine lose value too?", answer: "Not necessarily. One deal only tells you what happened to that number. You can only talk about a general decline when listings and deals both go down together for several days." },
  { question: "Should I trust the listing price or the deal price more?", answer: "Trust the deal price, because it’s what someone actually paid. A listing is only what the seller wants, and it can sit unsold for a long time." },
  { question: "How do I check a sale shown in a channel screenshot?", answer: "Type the number from the screenshot into Fragment’s search and open the history on its page. If the number doesn’t come up, or the date and price don’t match, don’t count the screenshot as proof." },
  { question: "How long should I watch to know whether prices have dropped?", answer: "There’s no fixed rule, but don’t judge by a single day’s change. For several days in a row, at the same time each day, note the cheapest listings and the latest deals." },
  { question: "If I sell my number, what happens to the account linked to it?", answer: "Move the account to another number before you sell. If you don’t, the login code will go to the new owner’s wallet, and you may be unable to log in with that number." },
  { question: "What if a buyer asks for the login code to “check” the number?", answer: "Don’t give it, and end the conversation. An honest deal closes on Fragment, and you never need to share the code with anyone, not even a so-called “Telegram employee”." },
  { question: "If I unknowingly buy a stolen number, can it be taken back from me?", answer: "We found no official procedure for this, so there’s no clear answer. That also means there’s no known way to get your money back, so weigh the risk before you buy." },
  { question: "Does it make sense to hold a +888 number as savings?", answer: "The supply is limited, but that doesn’t guarantee prices will rise. Don’t put money you can’t afford to lose into an item like this." },
  { question: "Can I get Stars or Premium on an account with an ordinary number?", answer: "Yes. The type of number doesn’t matter: you enter your @username in @StarsPaymee_bot and pay in som. The only catch is that the bot won’t open a new Premium order for an account that already has active Premium." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["+888 raqam narxi tushadimi","+888 raqam narxi","fragment +888 floor","anonim raqam narxi fragment","+888 raqam sotish","+888 raqam sotib olish arzon","fragment raqamlar bozori","цена номера +888","упадет ли цена +888","флор номеров +888 fragment","анонимный номер +888 купить","продать номер +888 fragment"],
  howToSteps: [
    { name: "Raqamlar sahifasini oching", text: "fragment.com/numbers. Domenni tekshiring, chatdagi o‘xshash havolalarni bosmang." },
    { name: "Sotuvdagilarni narx bo‘yicha saralang", text: "eng arzon 5–10 ta e’lonni yozib oling." },
    { name: "Sotilganlarni oching", text: "oxirgi bitimlarning narxi va sanasiga qarang, e’lon narxi bilan solishtiring." },
    { name: "Bir necha kun kuzating", text: "bir kunlik sakrash trend emas. Eng arzon e’lonlar qayerga siljiganini har kuni bir xil vaqtda qayd eting." },
    { name: "Faqat bir xil turdagi raqamlarni solishtiring", text: "chiroyli raqamni oddiy raqam bilan aralashtirsangiz, noto‘g‘ri xulosaga kelasiz." },
    { name: "Postdagi da’voni tarixda qidiring", text: "ko‘p raqam birdaniga arzon sotilgan bo‘lsa, bir xil vaqt oralig‘ida ko‘plab bitim ko‘rinishi kerak edi. Iz topilmasa, da’vo tasdiqlanmagan bo‘lib qoladi." },
  ],
  locales: {
    uz: {
      title: "+888 raqam narxi tushadimi: Fragment’da floor va sotuvlarni o‘qish",
      excerpt: "Tasdiqlanmagan post +888 raqam narxini o‘zicha tushirmaydi — qarorni Fragment’dagi e’lon va bitimlarga qarab qiling. Ichida floor’ni o‘qish, 6 qadamli tekshiruv va sotuvchi hamda xaridor uchun jadval.",
      metaTitle: "+888 raqam narxi tushadimi",
      metaDescription: "Tasdiqlanmagan post +888 raqam narxini o‘zicha tushirmaydi — qarorni Fragment’dagi e’lon va bitimlarga qarab qiling.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Упадёт ли цена номера +888: как читать floor и продажи на Fragment",
      excerpt: "Непроверенный пост сам по себе не обрушит цену номера +888 — решайте по объявлениям и сделкам на Fragment. Внутри: как читать floor, проверка в 6 шагов и таблица для продавца и покупателя.",
      metaTitle: "Упадёт ли цена номера +888",
      metaDescription: "Непроверенный пост сам по себе не обрушит цену номера +888 — решайте по объявлениям и сделкам на Fragment.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Will +888 number prices drop? Reading Fragment’s floor and sales",
      excerpt: "An unverified post won’t push +888 number prices down on its own. Base your decision on Fragment listings and closed deals. Inside: how to read the “floor”, a 6-step check and a table for sellers and buyers.",
      metaTitle: "Will +888 number prices drop? Reading Fragment’s floor",
      metaDescription: "An unverified post won’t push +888 number prices down on its own. Base your decision on Fragment listings and closed deals.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
