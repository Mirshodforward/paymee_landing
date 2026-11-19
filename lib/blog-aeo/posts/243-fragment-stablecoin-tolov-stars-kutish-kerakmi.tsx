import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "fragment-stablecoin-tolov-stars-kutish-kerakmi";

/**
 * Fragment’da stablecoin to‘lov: Stars va Premium uchun kutish kerakmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-19): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Fragment'da USDT/USDC (ETH, Base, Polygon) to'lovi paydo bo'lib, keyin yo'qolgani haqida eshitgan o'zbekistonlik Stars yoki Premium xaridori «fragment stablecoin to'lov» deb qidiradi. U bu usul rasman ishga tushishini kutishi kerakmi yoki hozir so'mda olgani ma'qulmi, shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-19):
 *   https://fragment.com/stars/buy
 *   https://fragment.com/premium/gift
 *   https://core.telegram.org/api/stars
 *   https://telegram.org/tos/third-party-payments
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
  return <p>Kutish shart emas. 2026-yil 19-noyabrdagi tekshiruvda Fragment’ning Stars va Premium sahifalarida USDT va USDC bilan to‘lov allaqachon ko‘rinib turgan edi. Hamyonida stablecoin bor odam bu usuldan hozir foydalanishi mumkin. Kriptosi yo‘q xaridor uchun bu yangilik deyarli hech narsani o‘zgartirmaydi: Stars va Premium’ni <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali so‘mda, faqat @username bilan olasiz.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#fragmentda-usdt-va-usdc-tolovi", label: "Fragment’da USDT va USDC to‘lovi hozir ishlayaptimi?" },
          { href: "#paydo-boldi-yoqoldi-qaytdi-postdagi", label: "«Paydo bo‘ldi, yo‘qoldi, qaytdi»: postdagi gapning qaysi qismi tasdiqlangan?" },
          { href: "#stablecoin-bilan-tolash-uchun-somdan", label: "Stablecoin bilan to‘lash uchun so‘mdan qaysi bosqichlardan o‘tasiz?" },
          { href: "#kim-uchun-fragmentdagi-usdt-usdc", label: "Kim uchun Fragment’dagi USDT/USDC yo‘li haqiqatan qulay?" },
          { href: "#fragment-narxi-bilan-somdagi-narxni", label: "Fragment narxi bilan so‘mdagi narxni qanday solishtirasiz?" },
          { href: "#kripto-bilan-tolaganda-qayerda-pul", label: "Kripto bilan to‘laganda qayerda pul yo‘qotish mumkin?" },
          { href: "#fragment-reseler-va-bot-starsni", label: "Fragment, reseler va bot: Stars’ni aslida kimdan sotib olasiz?" },
          { href: "#kutmasdan-somda-stars-yoki-premium", label: "Kutmasdan, so‘mda Stars yoki Premium qanday olinadi?" },
          { href: "#fragmentda-usdt-beta-ochildi-deb", label: "«Fragment’da USDT beta ochildi» deb yozishsa, qanday tekshirasiz?" },
        ]}
      />
      <h2 id="fragmentda-usdt-va-usdc-tolovi">Fragment’da USDT va USDC to‘lovi hozir ishlayaptimi?</h2>
      <p>Tekshiruv paytida ishlayotgan edi. <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Stars xaridi sahifasida</a> GRAM (TON) bilan birga ikkita stablecoin ko‘rsatilgan:</p>
      <ul>
        <li><b>USDT</b> — ETH, TON, POL, BSC va TRX tarmoqlarida;</li>
        <li><b>USDC</b> — ETH, Base va POL tarmoqlarida.</li>
      </ul>
      <p><a href={"https://fragment.com/premium/gift"} target="_blank" rel="noopener noreferrer">Premium sahifasida</a> ham USDT va USDC bilan to‘lasa bo‘ladi. Sayt yangilanganda tarmoqlar ro‘yxati o‘zgarishi mumkin, shuning uchun uni to‘lov oynasining o‘zida tekshiring.</p>
      <p>Usul aynan qachon ishga tushgani rasmiy manbalarda yozilmagan. Shu sababli «rasman ochilishini kutish» degan savolning o‘zi noaniq. Amalda bitta narsa hal qiladi: to‘lov qilayotgan kuningiz sahifada nima turgani.</p>
      <p>Fragment Telegram’ga begona sayt emas. Telegram’ning <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Stars bo‘yicha API hujjatida</a> u Stars uchun to‘lov yo‘llaridan biri sifatida keltirilgan va unda katta hajmdagi xaridlar ham qilinishi aytilgan. Lekin sayt ichidagi to‘lov usullari ro‘yxati o‘zgarib turishi mumkin.</p>
      <p>Xulosa shu: kriptoda to‘lamoqchi bo‘lgan odam hech narsani kutmaydi, sahifani ochib tekshiradi. Kriptosi yo‘q odamning xarid yo‘li esa avvalgidek qoladi.</p>
      <h2 id="paydo-boldi-yoqoldi-qaytdi-postdagi">«Paydo bo‘ldi, yo‘qoldi, qaytdi»: postdagi gapning qaysi qismi tasdiqlangan?</h2>
      <p>Mavzu Telegram kanallarida tarqalgan xabardan chiqqan. Bir kanal postida yangi to‘lov usullari avval test saytda paydo bo‘lgani, tezda olib tashlangani va keyin yana qaytarilgani aytilgan. Postdagi da’volarni rasmiy manbalar bilan solishtirdik:</p>
      <CompareTable
        headers={["Da’vo", "Rasmiy manbada nima bor", "Holat"]}
        rows={[
          ["Stars va Premium uchun stablecoin to‘lovi qo‘shildi", "Fragment sahifalarida USDT va USDC ko‘rinadi", "Tasdiqlangan (19-noyabr holatiga)"],
          ["Test saytda qo‘shilib, olib tashlandi, keyin qaytarildi", "Rasmiy e’lon topilmadi", "Tasdiqlanmagan"],
          ["Usul qachondan rasman ishlaydi", "Sana ko‘rsatilmagan", "Noma’lum"],
          ["Noto‘g‘ri tarmoq va pul qaytarish qoidalari", "Rasmiy qo‘llanma topilmadi", "Bu maqolada tasdiqlanmagan"],
        ]}
      />
      <p>Test saytda nima bo‘lgani xaridorga deyarli ta’sir qilmaydi. Muhimi — to‘lov kuni Fragment sahifasida qaysi usullar turgani. Postdagi tarmoqlar ro‘yxati ham sahifadagidan farq qilishi mumkin, shuning uchun skrinshotga emas, saytning o‘ziga qarang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stablecoin-bilan-tolash-uchun-somdan">Stablecoin bilan to‘lash uchun so‘mdan qaysi bosqichlardan o‘tasiz?</h2>
      <p>Hamyoningizda stablecoin bo‘lmasa, so‘mdan Fragment’gacha yo‘l taxminan shunday bo‘ladi:</p>
      <Steps>
        <Step title={"So‘mni stablecoin’ga almashtirish"}>buning uchun alohida almashuv xizmati kerak, kurs va komissiyani o‘sha xizmat belgilaydi.</Step>
        <Step title={"Hamyon tayyorlash"}>tanlangan tarmoqni qo‘llaydigan kripto hamyon kerak.</Step>
        <Step title={"Tarmoqni tanlash"}>Fragment ro‘yxatidagi tarmoqlardan biri. Hamyondagi aktiv aynan shu tarmoqda turishi kerak.</Step>
        <Step title={"Oluvchini ko‘rsatish"}>o‘zingiz yoki boshqa odam: Fragment do‘st va hamkasblar uchun xarid qilishga ham ruxsat beradi.</Step>
        <Step title={"Tarmoq to‘lovini hisobga olish"}>tekshiruv paytida Stars sahifasida $2.71 ko‘rsatilgan, bu summa o‘zgarib turadi.</Step>
        <Step title={"Tranzaksiyani tasdiqlash"}>hamyonda tasdiqlab, Stars yoki Premium tushishini kutasiz.</Step>
      </Steps>
      <p>Har bosqichning o‘z xarajati bor: almashuv kursidagi farq, tarmoq to‘lovi, tarmoqni adashtirish xavfi. Tarmoq to‘lovi xarid hajmiga qarab kamaymaydi. Shuning uchun u 50 Stars’lik kichik buyurtmada umumiy summaning sezilarli qismini egallashi mumkin, katta xaridda esa ulushi kichrayadi.</p>
      <p>So‘mdagi yo‘lda esa uchta harakat bor: botga @username yozasiz, to‘lov usulini tanlaysiz va to‘laysiz.</p>
      <h2 id="kim-uchun-fragmentdagi-usdt-usdc">Kim uchun Fragment’dagi USDT/USDC yo‘li haqiqatan qulay?</h2>
      <p>Bu yo‘l quyidagilarga mos:</p>
      <ul>
        <li><b>Hamyonida stablecoin turgan odam.</b> Masalan, chet eldagi buyurtmachidan haqini Base tarmog‘ida USDC bilan oladigan frilanser. USDC Base Fragment ro‘yxatida bor, ya’ni u pulni so‘mga aylantirmasdan Stars yoki Premium olishi mumkin.</li>
        <li><b>Ko‘p Stars oladigan kanal yoki bot egasi.</b> Telegram hujjatida Fragment katta xaridlar uchun ham yo‘l sifatida ko‘rsatilgan, tarmoq to‘lovi esa katta summada unchalik sezilmaydi.</li>
        <li><b>Chet eldagi hamkasbiga Premium olib bermoqchi bo‘lgan odam,</b> agar ular o‘rtasidagi hisob-kitob baribir kriptoda bo‘lsa.</li>
      </ul>
      <p>Bu yo‘l quyidagilarga mos emas:</p>
      <ul>
        <li><b>Kriptosi yo‘q, oyida bir-ikki marta kichik xarid qiladigan odam.</b> Masalan, 50 Stars olmoqchi bo‘lgan talaba uchun almashuv, hamyon va tarmoq to‘lovi ortiqcha ovoragarchilik.</li>
        <li><b>Faqat UzCard/HUMO yoki Click, Payme ishlatadigan xaridor.</b> Unga stablecoin yo‘li qo‘shimcha bosqichlardan boshqa hech narsa bermaydi.</li>
      </ul>
      <p>TON hamyon bilan ishlayotgan bo‘lsangiz va ilovani almashtirish kerakmi deb o‘ylayotgan bo‘lsangiz, <Link href="/blog/gram-wallet-mytonwallet-stars-premium-xaridi">Gram Wallet va MyTonWallet taqqosini</Link> o‘qing.</p>
      <h2 id="fragment-narxi-bilan-somdagi-narxni">Fragment narxi bilan so‘mdagi narxni qanday solishtirasiz?</h2>
      <p>Fragment Premium narxini dollarda ko‘rsatadi, StarsPaymee esa so‘mda. Tekshiruv kuni narxlar bunday edi:</p>
      <CompareTable
        headers={["Muddat", "Fragment’da (sahifa ochilgan paytda)", "StarsPaymee’da so‘mda"]}
        rows={[
          ["3 oy", "$11.99", `${som(premium(3), "uz")}`],
          ["6 oy", "$15.99", `${som(premium(6), "uz")}`],
          ["12 oy", "$28.99", `${som(premium(12), "uz")}`],
        ]}
      />
      <p>Ikki ustunni to‘g‘ridan-to‘g‘ri solishtirib bo‘lmaydi. Fragment summasiga tarmoq to‘lovi qo‘shiladi, stablecoin’ni qaysi kursda olganingiz ham hisobga kiradi. Qaysi yo‘l arzonligini o‘z kursingiz bilan hisoblang:</p>
      <Steps>
        <Step title={"Fragment summasini yozing"}>tanlangan muddat yoki Stars soni bo‘yicha.</Step>
        <Step title={"Tarmoq to‘lovini qo‘shing"}>u tasdiqlashdan oldin ko‘rsatiladi.</Step>
        <Step title={"Almashuv farqini qo‘shing"}>so‘mni stablecoin’ga qanday kursda almashtirganingizga qarab.</Step>
        <Step title={"Natijani so‘mga o‘giring"}>va botdagi yakuniy summa bilan solishtiring.</Step>
      </Steps>
      <p>Stars’da botdagi dona narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Fragment’dagi Stars narxi o‘zgarib turadi, uni sahifaning o‘zida ko‘ring. Narx qanday shakllanishi haqida: <Link href="/blog/telegram-stars-narxi">Telegram Stars narxi</Link>.</p>
      <h2 id="kripto-bilan-tolaganda-qayerda-pul">Kripto bilan to‘laganda qayerda pul yo‘qotish mumkin?</h2>
      <p>Eng ko‘p uchraydigan xavf — tarmoqni adashtirish. Masalan, USDT hamyonda TRX tarmog‘ida turibdi, Fragment’da esa ETH tanlangan. Bunday holatda pul qaytadimi, qancha vaqtda tushadi — bu bo‘yicha rasmiy qo‘llanma topilmadi. Shuning uchun pul qaytadi deb hisob qilmang.</p>
      <p>Boshqa xatolar:</p>
      <ul>
        <li><b>Oluvchini xato yozish.</b> Fragment boshqa odam uchun ham xarid qiladi, shuning uchun bitta harf xatosi Stars’ni begona akkauntga yuborishi mumkin.</li>
        <li><b>Tarmoq to‘lovini ko‘rmasdan tasdiqlash.</b> U xariddan oldin ko‘rsatiladi: avval summaga qarang, keyin tasdiqlang.</li>
        <li><b>Shoshilish.</b> «Usul yana yopilib qolmasin» degan xavotir bilan tekshiruvsiz to‘lash ko‘pincha xatoga olib keladi.</li>
      </ul>
      <Notice label={"Muhim"}>Birinchi marta kripto bilan to‘layotgan bo‘lsangiz, katta summani bir urinishda yubormang. Avval kichik xarid bilan tarmoq va oluvchi to‘g‘ri tanlanganini tekshirib oling.</Notice>
      <h2 id="fragment-reseler-va-bot-starsni">Fragment, reseler va bot: Stars’ni aslida kimdan sotib olasiz?</h2>
      <p>Telegram’ning <a href={"https://telegram.org/tos/third-party-payments"} target="_blank" rel="noopener noreferrer">uchinchi tomon to‘lovlari haqidagi shartlarida</a> ba’zi to‘lovlarda sotuvchi Telegram litsenziyasi asosida o‘z nomidan ishlaydigan vakolatli reseler bo‘lishi mumkinligi yozilgan. Bunday bitimlarda Telegram tomon hisoblanmaydi.</p>
      <p>Amalda bu oddiy: muammo chiqsa, kimdan sotib olgan bo‘lsangiz, avval o‘sha tomonga murojaat qilasiz.</p>
      <p>StarsPaymee — mustaqil xizmat: u Telegram nomidan ish yuritmaydi va Telegram’ning o‘zi ham emas. Buyurtma bo‘yicha savol bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozasiz.</p>
      <p>Qaysi yo‘ldan olsangiz ham, natija bir joyga tushadi: Stars akkaunt balansiga, Premium esa akkauntning o‘ziga. Qaysi mahsulot uchun hamyon kerakligi haqida — <Link href="/blog/ton-org-telegram-mahsulotlari-hamyon-kerakmi">ton.org’dagi Telegram mahsulotlari va hamyon</Link>.</p>
      <h2 id="kutmasdan-somda-stars-yoki-premium">Kutmasdan, so‘mda Stars yoki Premium qanday olinadi?</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’i.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (eng kami 50 dona) yoki 3, 6, 12 oylik Premium. 1 oylik tarif ham bor, narxi botda.</Step>
        <Step title={"@username’ni kiriting"}>o‘zingizniki yoki oluvchiniki. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Yakuniy summa to‘lovdan oldin ko‘rinadi.</Step>
        <Step title={"To‘lang va tekshiring"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi.</Step>
      </Steps>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Premium narxi qaysi to‘lov usulini tanlasangiz ham bir xil. Boshqa odamga olayotganda ham tartib o‘zgarmaydi: 3-qadamda uning @username’ini yozasiz, xolos.</p>
      <p>Bitta istisno bor: faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi, muddat faol obuna ustiga qo‘shilmaydi. Bu holatda nima qilish mumkinligi haqida — <Link href="/blog/premium-bor-odamga-premium-sovga">Premium bor odamga Premium sovg‘a</Link>.</p>
      <p>Tariflar: <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalari. Umumiy qo‘llanma: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">O‘zbekistonda Telegram Stars sotib olish</Link>.</p>
      <h2 id="fragmentda-usdt-beta-ochildi-deb">«Fragment’da USDT beta ochildi» deb yozishsa, qanday tekshirasiz?</h2>
      <p>Yangilik atrofida aldov tez paydo bo‘ladi: «yangi USDT to‘lovi», «test chegirmasi», «faqat bugun» kabi xabarlar. Tekshirish tartibi:</p>
      <ul>
        <li><b>Manzil satriga qarang.</b> Sayt aynan <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> bo‘lishi kerak. Havola shaxsiy xabarda yoki notanish kanalda kelgan bo‘lsa, uni bosmang — saytni o‘zingiz oching.</li>
        <li><b>Nima so‘ralayotganiga qarang.</b> Zaxira so‘zlar, SMS kod yoki Telegram parolini halol tomon hech qachon so‘ramaydi. So‘rashsa, bu aldov.</li>
        <li><b>«Kriptoni menga o‘tkazing, xaridni o‘zim qilib beraman» degan shaxsiy taklifdan qoching.</b> Bitimning tomoni noma’lum, pulni qaytarish yo‘li yo‘q.</li>
        <li><b>Chegirma va’dasiga ishonmang.</b> Stablecoin to‘lovi Stars yoki Premium narxini pasaytirgani haqida rasmiy ma’lumot yo‘q.</li>
      </ul>
      <p>Fragment’ga hamyon ulayotganda qaysi birini tanlash haqida — <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">Fragment’dagi «Telegram Messenger» hamyoni</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/stars/buy", label: "Fragment (Buy Telegram Stars)" },
          { href: "https://fragment.com/premium/gift", label: "Buy Telegram Premium" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://telegram.org/tos/third-party-payments", label: "Third-Party Payments and Authorized Resellers" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Fragment’dagi stablecoin to‘lovi vaqtinchalikmi, yana yo‘qolib qolishi mumkinmi?", answer: "19-noyabrdagi tekshiruvda USDT va USDC Stars va Premium sahifalarida oddiy to‘lov usuli sifatida turgan edi. Ishga tushirilgan sana yoki alohida e’lon topilmadi, shuning uchun har gal to‘lashdan oldin ro‘yxatni saytning o‘zida ko‘ring." },
  { question: "Stablecoin to‘lovi qo‘shilgani Stars narxini arzonlashtiradimi?", answer: "Bunday ma’lumot yo‘q. So‘mdan boshlasangiz, aksincha, almashuv farqi va tarmoq to‘lovi ustiga qo‘shiladi." },
  { question: "Fragment’da USDC bilan 50 Stars olsam, tarmoq to‘lovi qancha bo‘ladi?", answer: "Aniq summani Fragment tasdiqlashdan oldin ko‘rsatadi. Tekshiruv kuni Stars sahifasida $2.71 turgan edi, lekin bu raqam o‘zgarib turadi va kichik xaridda katta ulush bo‘lishi mumkin." },
  { question: "Hamyonimda USDC Base tarmog‘ida bor — undan Fragment’da foydalansam bo‘ladimi?", answer: "Ha, Base tarmog‘idagi USDC Fragment ro‘yxatida bor. To‘lov oynasida ham aynan Base tanlanganiga ishonch hosil qiling." },
  { question: "Hamyondagi USDT TRX tarmog‘ida, Fragment’da esa ETH tanlab qo‘ydim — nima bo‘ladi?", answer: "Tarmoqlar mos kelmasa, pul qaytishi haqida rasmiy qoida topilmadi, shuning uchun bunga umid bog‘lamang. Hali tasdiqlamagan bo‘lsangiz, to‘xtating: USDT TRX ro‘yxatda bor, shuni tanlab, keyin to‘lang." },
  { question: "StarsPaymee botida USDT yoki USDC bilan to‘lasa bo‘ladimi?", answer: "Yo‘q, bot to‘lovni so‘mda qabul qiladi: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Kripto hamyon umuman kerak emas." },
  { question: "Qaysi biri arzonroq chiqishini qanday aniqlayman: Fragment yoki bot?", answer: "Fragment’dagi dollar summasiga tarmoq to‘lovini qo‘shing va stablecoin’ni qaysi kursda olganingizga qarab so‘mga o‘giring. Chiqqan raqamni botda to‘lovdan oldin ko‘rinadigan yakuniy summa bilan solishtiring." },
  { question: "Fragment orqali o‘zbekistonlik do‘stimga Premium olsam bo‘ladimi?", answer: "Ha, Fragment do‘st va hamkasblar uchun xarid qilishga ruxsat beradi, to‘lovni esa o‘zingiz qilasiz. So‘mda olmoqchi bo‘lsangiz, botga do‘stingizning @username’ini yozish kifoya." },
  { question: "Premium hali tugamagan bo‘lsa, so‘mda yangi muddat qo‘sha olamanmi?", answer: "Botda bunday qilib bo‘lmaydi: faol obunasi bor akkauntga yangi Premium buyurtmasi ochilmaydi. Obuna tugaganidan keyin buyurtma bering yoki savolingizni @StarsPaymeeSupport’ga yozing." },
  { question: "Stablecoin to‘lovi rasman e’lon qilinishini kutib, Stars xaridini kechiktirish kerakmi?", answer: "Kechiktirishga sabab ko‘rinmaydi. Kriptosi bor odam bu usulni hozir ham sahifada ko‘ra oladi, kriptosi yo‘q odam uchun esa so‘mdagi yo‘l avvalgidek ishlayveradi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Ждать не нужно. При проверке 19 ноября 2026 года на страницах Stars и Premium в Fragment уже была видна оплата в USDT и USDC. Если стейблкоины у вас в кошельке, этим способом можно пользоваться сейчас. Покупателю без криптовалюты новость почти ничего не меняет: Stars и Premium можно купить через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> в сумах, указав только @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#fragmentda-usdt-va-usdc-tolovi", label: "Работает ли сейчас оплата USDT и USDC на Fragment?" },
          { href: "#paydo-boldi-yoqoldi-qaytdi-postdagi", label: "«Появилась, пропала, вернулась»: что из поста подтверждено?" },
          { href: "#stablecoin-bilan-tolash-uchun-somdan", label: "Какие шаги нужно пройти от сумов до оплаты стейблкоином?" },
          { href: "#kim-uchun-fragmentdagi-usdt-usdc", label: "Кому оплата USDT/USDC на Fragment действительно удобна?" },
          { href: "#fragment-narxi-bilan-somdagi-narxni", label: "Как сравнить цену Fragment с ценой в сумах?" },
          { href: "#kripto-bilan-tolaganda-qayerda-pul", label: "Где можно потерять деньги при оплате криптовалютой?" },
          { href: "#fragment-reseler-va-bot-starsni", label: "Fragment, реселлер и бот: у кого вы на самом деле покупаете Stars?" },
          { href: "#kutmasdan-somda-stars-yoki-premium", label: "Как купить Stars или Premium в сумах, ничего не дожидаясь?" },
          { href: "#fragmentda-usdt-beta-ochildi-deb", label: "Пишут «на Fragment открыли бету USDT» — как это проверить?" },
        ]}
      />
      <h2 id="fragmentda-usdt-va-usdc-tolovi">Работает ли сейчас оплата USDT и USDC на Fragment?</h2>
      <p>На момент проверки — да. На <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">странице покупки Stars</a> кроме GRAM (TON) указаны два стейблкоина:</p>
      <ul>
        <li><b>USDT</b> — в сетях ETH, TON, POL, BSC и TRX;</li>
        <li><b>USDC</b> — в сетях ETH, Base и POL.</li>
      </ul>
      <p>На <a href={"https://fragment.com/premium/gift"} target="_blank" rel="noopener noreferrer">странице Premium</a> тоже можно платить USDT и USDC. После обновлений сайта список сетей может поменяться, поэтому проверяйте его прямо в окне оплаты.</p>
      <p>Когда именно запустили этот способ, в официальных источниках не сказано. Поэтому сам вопрос «ждать ли официального запуска» размыт. На практике решает одно: что стоит на странице в день, когда вы платите.</p>
      <p>Fragment — не посторонний для Telegram сайт. В <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">документации Telegram по Stars API</a> он назван одним из способов оплаты Stars, и там же сказано, что через него можно делать и крупные покупки. Но список способов оплаты внутри сайта может меняться.</p>
      <p>Получается так: тому, кто хочет платить криптовалютой, ждать нечего — достаточно открыть страницу и проверить. У того, у кого криптовалюты нет, путь покупки остаётся прежним.</p>
      <h2 id="paydo-boldi-yoqoldi-qaytdi-postdagi">«Появилась, пропала, вернулась»: что из поста подтверждено?</h2>
      <p>Тема пошла от сообщения, которое разошлось по Telegram-каналам. В одном посте утверждалось, что новые способы оплаты сначала появились на тестовом сайте, быстро исчезли, а потом вернулись. Мы сверили утверждения из поста с официальными источниками:</p>
      <CompareTable
        headers={["Утверждение", "Что есть в официальном источнике", "Статус"]}
        rows={[
          ["Для Stars и Premium добавили оплату стейблкоинами", "На страницах Fragment видны USDT и USDC", "Подтверждено (на 19 ноября)"],
          ["На тестовом сайте способ добавили, убрали, затем вернули", "Официального объявления не найдено", "Не подтверждено"],
          ["С какой даты способ работает официально", "Дата не указана", "Неизвестно"],
          ["Правила для ошибочной сети и возврата денег", "Официальной инструкции не найдено", "В этой статье не подтверждено"],
        ]}
      />
      <p>Что происходило на тестовом сайте, покупателя почти не касается. Важно другое — какие способы видны на странице Fragment в день оплаты. Список сетей в посте тоже может отличаться от того, что на сайте, поэтому ориентируйтесь не на скриншот, а на сам сайт.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stablecoin-bilan-tolash-uchun-somdan">Какие шаги нужно пройти от сумов до оплаты стейблкоином?</h2>
      <p>Если стейблкоинов в кошельке нет, путь от сумов до Fragment выглядит примерно так:</p>
      <Steps>
        <Step title={"Обменять сумы на стейблкоин"}>для этого нужен отдельный обменный сервис, курс и комиссию устанавливает он.</Step>
        <Step title={"Подготовить кошелёк"}>нужен криптокошелёк, который поддерживает выбранную сеть.</Step>
        <Step title={"Выбрать сеть"}>одну из списка Fragment. Актив в кошельке должен лежать именно в этой сети.</Step>
        <Step title={"Указать получателя"}>себя или другого человека: Fragment позволяет покупать и для друзей, и для коллег.</Step>
        <Step title={"Учесть сетевую комиссию"}>при проверке на странице Stars она составляла $2,71, сумма меняется.</Step>
        <Step title={"Подтвердить транзакцию"}>подтверждаете в кошельке и ждёте, когда придут Stars или Premium.</Step>
      </Steps>
      <p>У каждого шага своя цена: разница в курсе обмена, сетевая комиссия, риск перепутать сеть. Сетевая комиссия не уменьшается вместе с объёмом покупки. Поэтому в маленьком заказе на 50 Stars она может занять заметную часть суммы, а в крупной покупке её доля становится меньше.</p>
      <p>В сумах действий всего три: пишете боту @username, выбираете способ оплаты и платите.</p>
      <h2 id="kim-uchun-fragmentdagi-usdt-usdc">Кому оплата USDT/USDC на Fragment действительно удобна?</h2>
      <p>Этот путь подходит:</p>
      <ul>
        <li><b>Тем, у кого в кошельке уже лежат стейблкоины.</b> Например, фрилансеру, которому зарубежный заказчик платит в USDC в сети Base. USDC Base есть в списке Fragment, так что он может купить Stars или Premium, не переводя деньги в сумы.</li>
        <li><b>Владельцу канала или бота, который покупает много Stars.</b> В документации Telegram Fragment указан как способ и для крупных покупок, а сетевая комиссия на большой сумме почти не ощущается.</li>
        <li><b>Тому, кто хочет оформить Premium коллеге за границей,</b> если расчёты между ними всё равно идут в криптовалюте.</li>
      </ul>
      <p>Этот путь не подходит:</p>
      <ul>
        <li><b>Тому, у кого нет криптовалюты и кто делает небольшие покупки раз-два в месяц.</b> Студенту, который хочет 50 Stars, обмен, кошелёк и сетевая комиссия — лишняя возня.</li>
        <li><b>Покупателю, который пользуется только UzCard/HUMO или Click, Payme.</b> Ему путь через стейблкоины не даёт ничего, кроме лишних шагов.</li>
      </ul>
      <p>Если вы работаете с TON-кошельком и думаете, не сменить ли приложение, прочитайте <Link href="/blog/gram-wallet-mytonwallet-stars-premium-xaridi">сравнение Gram Wallet и MyTonWallet</Link>.</p>
      <h2 id="fragment-narxi-bilan-somdagi-narxni">Как сравнить цену Fragment с ценой в сумах?</h2>
      <p>Fragment показывает цену Premium в долларах, StarsPaymee — в сумах. В день проверки цены были такими:</p>
      <CompareTable
        headers={["Срок", "На Fragment (на момент открытия страницы)", "В StarsPaymee в сумах"]}
        rows={[
          ["3 месяца", "$11,99", `${som(premium(3), "ru")}`],
          ["6 месяцев", "$15,99", `${som(premium(6), "ru")}`],
          ["12 месяцев", "$28,99", `${som(premium(12), "ru")}`],
        ]}
      />
      <p>Сравнивать столбцы напрямую нельзя. К сумме на Fragment добавляется сетевая комиссия, а ещё важно, по какому курсу вы купили стейблкоин. Посчитайте, какой путь дешевле, по своему курсу:</p>
      <Steps>
        <Step title={"Запишите сумму на Fragment"}>для нужного срока или количества Stars.</Step>
        <Step title={"Прибавьте сетевую комиссию"}>её показывают до подтверждения.</Step>
        <Step title={"Прибавьте разницу при обмене"}>в зависимости от курса, по которому вы меняли сумы на стейблкоин.</Step>
        <Step title={"Переведите результат в сумы"}>и сравните с итоговой суммой в боте.</Step>
      </Steps>
      <p>Цена одной звезды в боте зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Цена Stars на Fragment меняется, смотрите её прямо на странице. Как складывается цена, читайте в статье <Link href="/blog/telegram-stars-narxi">о цене Telegram Stars</Link>.</p>
      <h2 id="kripto-bilan-tolaganda-qayerda-pul">Где можно потерять деньги при оплате криптовалютой?</h2>
      <p>Самый частый риск — перепутать сеть. Например, USDT лежит в кошельке в сети TRX, а на Fragment выбрана ETH. Вернутся ли деньги в таком случае и за какой срок, — официальной инструкции на этот счёт не нашлось. Поэтому не стоит рассчитывать на возврат.</p>
      <p>Другие ошибки:</p>
      <ul>
        <li><b>Опечатка в получателе.</b> Fragment покупает и для других людей, поэтому одна неверная буква может отправить Stars на чужой аккаунт.</li>
        <li><b>Подтверждение без взгляда на сетевую комиссию.</b> Её показывают до покупки: сначала посмотрите на сумму, потом подтверждайте.</li>
        <li><b>Спешка.</b> Оплата без проверки из страха «вдруг способ опять закроют» часто заканчивается ошибкой.</li>
      </ul>
      <Notice label={"Важно"}>Если платите криптовалютой впервые, не отправляйте крупную сумму одной транзакцией. Сначала небольшой покупкой проверьте, что сеть и получатель выбраны правильно.</Notice>
      <h2 id="fragment-reseler-va-bot-starsni">Fragment, реселлер и бот: у кого вы на самом деле покупаете Stars?</h2>
      <p>В <a href={"https://telegram.org/tos/third-party-payments"} target="_blank" rel="noopener noreferrer">условиях Telegram о сторонних платежах</a> сказано, что в некоторых платежах продавцом может быть авторизованный реселлер, который действует от своего имени по лицензии Telegram. В таких сделках Telegram стороной не является.</p>
      <p>На практике всё просто: если возникла проблема, сначала обращаетесь к тому, у кого покупали.</p>
      <p>StarsPaymee — независимый сервис: он не действует от имени Telegram и не является самим Telegram. Если есть вопрос по заказу, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <p>Каким бы путём вы ни покупали, результат попадает в одно место: Stars — на баланс аккаунта, Premium — на сам аккаунт. Для каких продуктов нужен кошелёк, разобрано в статье <Link href="/blog/ton-org-telegram-mahsulotlari-hamyon-kerakmi">о продуктах Telegram на ton.org и кошельке</Link>.</p>
      <h2 id="kutmasdan-somda-stars-yoki-premium">Как купить Stars или Premium в сумах, ничего не дожидаясь?</h2>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите продукт"}>Stars (минимум 50 штук) или Premium на 3, 6, 12 месяцев. Есть и тариф на 1 месяц, его цена — в боте.</Step>
        <Step title={"Введите @username"}>свой или получателя. Пароль, SMS-код или вход в аккаунт не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота. Итоговая сумма видна до оплаты.</Step>
        <Step title={"Оплатите и проверьте"}>заказ обычно доставляется автоматически за несколько секунд, примерно за 5.</Step>
      </Steps>
      <p>Зарубежная карта, криптокошелёк или VPN не нужны. Premium подключается по username через механизм подарков Telegram. Цена Premium одинакова при любом способе оплаты. Если покупаете другому человеку, порядок тот же: на 3-м шаге просто укажите его @username.</p>
      <p>Есть одно исключение: на аккаунт с действующей подпиской Premium бот новый заказ Premium не оформит — срок поверх активной подписки не добавляется. Что делать в этом случае, читайте в статье <Link href="/blog/premium-bor-odamga-premium-sovga">о подарке Premium тому, у кого он уже есть</Link>.</p>
      <p>Тарифы — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. Общее руководство: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">как купить Telegram Stars в Узбекистане</Link>.</p>
      <h2 id="fragmentda-usdt-beta-ochildi-deb">Пишут «на Fragment открыли бету USDT» — как это проверить?</h2>
      <p>Вокруг любой новости быстро появляется обман: «новая оплата в USDT», «тестовая скидка», «только сегодня». Как проверять:</p>
      <ul>
        <li><b>Смотрите на адресную строку.</b> Сайт должен быть именно <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a>. Если ссылка пришла в личные сообщения или из незнакомого канала, не нажимайте её — откройте сайт сами.</li>
        <li><b>Смотрите, что у вас просят.</b> Сид-фразу, SMS-код или пароль от Telegram честная сторона никогда не попросит. Если просят — это обман.</li>
        <li><b>Избегайте личных предложений «переведите мне крипту, я сам всё куплю».</b> Кто сторона сделки — неизвестно, способа вернуть деньги нет.</li>
        <li><b>Не верьте обещаниям скидок.</b> Официальных данных о том, что оплата стейблкоинами снижает цену Stars или Premium, нет.</li>
      </ul>
      <p>Какой кошелёк выбрать при подключении к Fragment, читайте в статье <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">о кошельке «Telegram Messenger» на Fragment</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/stars/buy", label: "Fragment (Buy Telegram Stars)" },
          { href: "https://fragment.com/premium/gift", label: "Buy Telegram Premium" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://telegram.org/tos/third-party-payments", label: "Third-Party Payments and Authorized Resellers" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Оплата стейблкоинами на Fragment временная, может ли она снова пропасть?", answer: "При проверке 19 ноября USDT и USDC стояли на страницах Stars и Premium как обычный способ оплаты. Даты запуска или отдельного объявления не нашлось, поэтому перед каждой оплатой сверяйте список на самом сайте." },
  { question: "Становятся ли Stars дешевле благодаря оплате стейблкоинами?", answer: "Таких данных нет. Если вы начинаете с сумов, наоборот, сверху добавятся разница при обмене и сетевая комиссия." },
  { question: "Какая будет сетевая комиссия, если купить 50 Stars на Fragment за USDC?", answer: "Точную сумму Fragment покажет до подтверждения. В день проверки на странице Stars было $2,71, но цифра меняется и в маленькой покупке может составить большую долю." },
  { question: "У меня USDC в сети Base — можно ли им платить на Fragment?", answer: "Да, USDC в сети Base есть в списке Fragment. Убедитесь, что и в окне оплаты выбрана именно Base." },
  { question: "USDT у меня в сети TRX, а на Fragment я выбрал ETH — что будет?", answer: "Официальных правил о возврате при несовпадении сетей не нашлось, так что на него лучше не надеяться. Если вы ещё не подтвердили платёж, остановитесь: USDT TRX есть в списке, выберите её и только потом платите." },
  { question: "Можно ли платить в боте StarsPaymee через USDT или USDC?", answer: "Нет, бот принимает оплату в сумах: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота. Криптокошелёк вообще не нужен." },
  { question: "Как понять, что выйдет дешевле — Fragment или бот?", answer: "К долларовой сумме на Fragment прибавьте сетевую комиссию и переведите в сумы по курсу, по которому вы купили стейблкоин. Полученную цифру сравните с итоговой суммой, которую бот показывает до оплаты." },
  { question: "Можно ли через Fragment купить Premium другу из Узбекистана?", answer: "Да, Fragment позволяет покупать для друзей и коллег, а платите вы сами. Если хотите оплатить в сумах, достаточно написать боту @username друга." },
  { question: "Premium ещё не закончился — можно ли докупить новый срок в сумах?", answer: "В боте так не получится: на аккаунт с действующей подпиской новый заказ Premium не оформляется. Оформите заказ после окончания подписки или напишите свой вопрос в @StarsPaymeeSupport." },
  { question: "Стоит ли откладывать покупку Stars до официального объявления об оплате стейблкоинами?", answer: "Причин откладывать не видно. У кого есть криптовалюта, тот уже сейчас видит этот способ на странице, а для остальных путь в сумах работает как прежде." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You don’t need to wait. When we checked on November 19, 2026, Fragment’s Stars and Premium pages already accepted USDT and USDC. If you have stablecoins in your wallet, you can use this method today. If you don’t own crypto, the news changes almost nothing for you: you can still buy Stars and Premium in Uzbek som through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, with nothing but an @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#fragmentda-usdt-va-usdc-tolovi", label: "Do USDT and USDC payments work on Fragment right now?" },
          { href: "#paydo-boldi-yoqoldi-qaytdi-postdagi", label: "“Added, removed, back again”: which parts of the post are confirmed?" },
          { href: "#stablecoin-bilan-tolash-uchun-somdan", label: "What steps get you from som to a stablecoin payment?" },
          { href: "#kim-uchun-fragmentdagi-usdt-usdc", label: "Who actually benefits from paying with USDT or USDC on Fragment?" },
          { href: "#fragment-narxi-bilan-somdagi-narxni", label: "How do Fragment’s prices compare with prices in som?" },
          { href: "#kripto-bilan-tolaganda-qayerda-pul", label: "Where can you lose money when paying with crypto?" },
          { href: "#fragment-reseler-va-bot-starsni", label: "Fragment, resellers and bots: who are you actually buying Stars from?" },
          { href: "#kutmasdan-somda-stars-yoki-premium", label: "How do you get Stars or Premium in som without waiting?" },
          { href: "#fragmentda-usdt-beta-ochildi-deb", label: "How do you check a message saying “Fragment opened a USDT beta”?" },
        ]}
      />
      <h2 id="fragmentda-usdt-va-usdc-tolovi">Do USDT and USDC payments work on Fragment right now?</h2>
      <p>They did when we checked. Alongside GRAM (TON), the <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Stars purchase page</a> lists two stablecoins:</p>
      <ul>
        <li><b>USDT</b> on the ETH, TON, POL, BSC and TRX networks;</li>
        <li><b>USDC</b> on the ETH, Base and POL networks.</li>
      </ul>
      <p>You can also pay with USDT and USDC on the <a href={"https://fragment.com/premium/gift"} target="_blank" rel="noopener noreferrer">Premium page</a>. The list of networks may change when the site is updated, so check it in the payment window itself.</p>
      <p>Official sources don’t say exactly when the method went live. That makes “waiting for the official launch” a vague idea in the first place. In practice, only one thing matters: what the page shows on the day you pay.</p>
      <p>Fragment isn’t some site with no link to Telegram. Telegram’s <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Stars API documentation</a> names it as one of the ways to pay for Stars and says it also allows larger purchases. Still, the payment methods available on the site can change.</p>
      <p>So if you want to pay in crypto, you don’t need to wait. Just open the page and check. If you have no crypto, you buy the same way you always have.</p>
      <h2 id="paydo-boldi-yoqoldi-qaytdi-postdagi">“Added, removed, back again”: which parts of the post are confirmed?</h2>
      <p>The topic comes from a message shared in Telegram channels. One channel post said the new payment methods first appeared on a test site, were quickly removed and then came back. We compared the post’s claims with official sources:</p>
      <CompareTable
        headers={["Claim", "What official sources show", "Status"]}
        rows={[
          ["Stablecoin payments were added for Stars and Premium", "USDT and USDC appear on Fragment’s pages", "Confirmed (as of November 19)"],
          ["Added on a test site, removed, then restored", "No official announcement found", "Unconfirmed"],
          ["Official start date for the method", "No date given", "Unknown"],
          ["Rules for wrong networks and refunds", "No official guide found", "Not confirmed in this article"],
        ]}
      />
      <p>What happened on the test site has almost no effect on buyers. What matters is which methods are on Fragment’s page on the day you pay. The list of networks in the post may also differ from the site. Trust the site, not a screenshot.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stablecoin-bilan-tolash-uchun-somdan">What steps get you from som to a stablecoin payment?</h2>
      <p>If your wallet has no stablecoins, the route from som to Fragment looks roughly like this:</p>
      <Steps>
        <Step title={"Convert som to a stablecoin"}>you need a separate exchange service for this, and that service sets the rate and fee.</Step>
        <Step title={"Set up a wallet"}>you need a crypto wallet that supports the network you plan to use.</Step>
        <Step title={"Pick a network"}>choose one from Fragment’s list. The coins in your wallet must sit on that exact network.</Step>
        <Step title={"Enter the recipient"}>this can be you or someone else. Fragment lets you buy for friends and colleagues too.</Step>
        <Step title={"Account for the network fee"}>when we checked, the Stars page showed $2.71. This amount changes.</Step>
        <Step title={"Confirm the transaction"}>approve it in your wallet and wait for the Stars or Premium to arrive.</Step>
      </Steps>
      <p>Each step adds its own cost: the spread on the exchange rate, the network fee and the risk of choosing the wrong network. The network fee doesn’t shrink when you buy less. On a small 50 Stars order it can be a big part of the total. On a large purchase it matters much less.</p>
      <p>The som route takes three actions: enter the @username in the bot, pick a payment method and pay.</p>
      <h2 id="kim-uchun-fragmentdagi-usdt-usdc">Who actually benefits from paying with USDT or USDC on Fragment?</h2>
      <p>This route suits:</p>
      <ul>
        <li><b>People who already hold stablecoins.</b> Take a freelancer whose overseas client pays in USDC on the Base network. Fragment lists USDC on Base, so they can buy Stars or Premium without converting to som.</li>
        <li><b>Channel or bot owners who buy Stars in bulk.</b> Telegram’s documentation describes Fragment as a way to make larger purchases, and on a big order the network fee barely matters.</li>
        <li><b>Someone buying Premium for a colleague abroad</b>, if the two already settle up in crypto.</li>
      </ul>
      <p>This route doesn’t suit:</p>
      <ul>
        <li><b>People without crypto who make one or two small purchases a month.</b> For a student who wants 50 Stars, the exchange, the wallet and the network fee are a lot of extra hassle.</li>
        <li><b>Buyers who only use UzCard/HUMO, Click or Payme.</b> For them, the stablecoin route just adds steps.</li>
      </ul>
      <p>If you use a TON wallet and wonder whether to switch apps, see our <Link href="/blog/gram-wallet-mytonwallet-stars-premium-xaridi">Gram Wallet vs MyTonWallet comparison</Link>.</p>
      <h2 id="fragment-narxi-bilan-somdagi-narxni">How do Fragment’s prices compare with prices in som?</h2>
      <p>Fragment shows Premium prices in US dollars. StarsPaymee shows them in som. Here’s how they looked on the day we checked:</p>
      <CompareTable
        headers={["Plan", "On Fragment (when the page was opened)", "On StarsPaymee in som"]}
        rows={[
          ["3 months", "$11.99", `${som(premium(3), "en")}`],
          ["6 months", "$15.99", `${som(premium(6), "en")}`],
          ["12 months", "$28.99", `${som(premium(12), "en")}`],
        ]}
      />
      <p>You can’t compare the two columns directly. The network fee is added to Fragment’s price, and the rate you paid for your stablecoins also counts. Work out which route is cheaper with your own numbers:</p>
      <Steps>
        <Step title={"Note Fragment’s price"}>for the plan or number of Stars you want.</Step>
        <Step title={"Add the network fee"}>it appears before you confirm.</Step>
        <Step title={"Add the exchange spread"}>this depends on the rate you got when converting som to stablecoins.</Step>
        <Step title={"Convert the total to som"}>and compare it with the final amount the bot shows.</Step>
      </Steps>
      <p>The bot’s per-Star price depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. Fragment’s Stars price changes, so check it on the page itself. For more on how prices are set, see <Link href="/blog/telegram-stars-narxi">Telegram Stars price</Link>.</p>
      <h2 id="kripto-bilan-tolaganda-qayerda-pul">Where can you lose money when paying with crypto?</h2>
      <p>The most common risk is choosing the wrong network. For example, your USDT is on the TRX network but you selected ETH on Fragment. We found no official guide on whether the money comes back in that case or how long it would take. So don’t assume you’ll get a refund.</p>
      <p>Other mistakes:</p>
      <ul>
        <li><b>Typing the wrong recipient.</b> Fragment also lets you buy for other people, so one wrong letter can send your Stars to a stranger’s account.</li>
        <li><b>Confirming without looking at the network fee.</b> The fee appears before you buy. Check the amount, then confirm.</li>
        <li><b>Rushing.</b> Paying without checking because you’re afraid “the option might disappear again” is a common way to make mistakes.</li>
      </ul>
      <Notice label={"Important"}>If this is your first crypto payment, don’t send a large amount in one go. Make a small purchase first to check that the network and recipient are right.</Notice>
      <h2 id="fragment-reseler-va-bot-starsni">Fragment, resellers and bots: who are you actually buying Stars from?</h2>
      <p>Telegram’s <a href={"https://telegram.org/tos/third-party-payments"} target="_blank" rel="noopener noreferrer">terms for third-party payments</a> say that for some payments, the seller may be an authorized reseller acting in its own name under license from Telegram. Telegram is not a party to those transactions.</p>
      <p>In practice it’s simple: if something goes wrong, you contact whoever sold to you first.</p>
      <p>StarsPaymee is an independent service. It doesn’t act on Telegram’s behalf and it isn’t Telegram. If you have a question about an order, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <p>Whichever route you choose, you end up in the same place: Stars go to your account balance and Premium is applied to the account itself. To see which products actually need a wallet, read <Link href="/blog/ton-org-telegram-mahsulotlari-hamyon-kerakmi">Telegram products on ton.org and wallets</Link>.</p>
      <h2 id="kutmasdan-somda-stars-yoki-premium">How do you get Stars or Premium in som without waiting?</h2>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose a product"}>Stars (minimum 50) or Premium for 3, 6 or 12 months. There’s also a 1-month plan, and the bot shows its price.</Step>
        <Step title={"Enter the @username"}>yours or the recipient’s. You won’t be asked for a password, SMS code or account access.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (in the app or in cash at a terminal), a UzCard/HUMO card transfer or your bot balance. You see the final amount before paying.</Step>
        <Step title={"Pay and check"}>orders usually arrive automatically within a few seconds, around 5.</Step>
      </Steps>
      <p>You don’t need an international card, a crypto wallet or a VPN. Premium is activated by username through Telegram’s gifting system. The Premium price is the same whichever payment method you choose. The steps don’t change when you buy for someone else either: just enter their @username in step 3.</p>
      <p>There’s one exception. The bot won’t open a new Premium order for an account that already has an active subscription, because extra time isn’t added on top of an active plan. For what you can do in that case, see <Link href="/blog/premium-bor-odamga-premium-sovga">gifting Premium to someone who already has it</Link>.</p>
      <p>Plans and prices: the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages. Full guide: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">buying Telegram Stars in Uzbekistan</Link>.</p>
      <h2 id="fragmentda-usdt-beta-ochildi-deb">How do you check a message saying “Fragment opened a USDT beta”?</h2>
      <p>Scams show up quickly around any news: “new USDT payment,” “test discount,” “today only.” Here’s how to check:</p>
      <ul>
        <li><b>Look at the address bar.</b> The site must be exactly <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a>. If the link came in a private message or from a channel you don’t know, don’t click it. Open the site yourself.</li>
        <li><b>Look at what they’re asking for.</b> No legitimate service will ever ask for your seed phrase, an SMS code or your Telegram password. If someone asks, it’s a scam.</li>
        <li><b>Avoid private offers like “send me the crypto and I’ll make the purchase for you.”</b> You don’t know who you’re dealing with, and you have no way to get your money back.</li>
        <li><b>Don’t believe promises of discounts.</b> There’s no official information that stablecoin payments lower the price of Stars or Premium.</li>
      </ul>
      <p>For help choosing a wallet when you connect one to Fragment, see <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">the “Telegram Messenger” wallet on Fragment</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/stars/buy", label: "Fragment (Buy Telegram Stars)" },
          { href: "https://fragment.com/premium/gift", label: "Buy Telegram Premium" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://telegram.org/tos/third-party-payments", label: "Third-Party Payments and Authorized Resellers" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Is stablecoin payment on Fragment temporary? Could it disappear again?", answer: "When we checked on November 19, USDT and USDC were listed on the Stars and Premium pages as ordinary payment options. We found no launch date or separate announcement, so check the list on the site every time before you pay." },
  { question: "Does paying with stablecoins make Stars cheaper?", answer: "There’s no information saying so. If you start with som, it actually costs more, because the exchange spread and network fee are added on top." },
  { question: "What’s the network fee if I buy 50 Stars with USDC on Fragment?", answer: "Fragment shows the exact amount before you confirm. On the day we checked, the Stars page showed $2.71, but the fee changes and can be a large part of a small purchase." },
  { question: "My wallet holds USDC on the Base network. Can I use it on Fragment?", answer: "Yes, Fragment lists USDC on Base. Make sure Base is also the network selected in the payment window." },
  { question: "My USDT is on TRX but I selected ETH on Fragment. What happens?", answer: "We found no official rule on refunds when the networks don’t match, so don’t count on getting the money back. If you haven’t confirmed yet, stop, select USDT TRX, which is on the list, and then pay." },
  { question: "Can I pay with USDT or USDC in the StarsPaymee bot?", answer: "No. The bot takes payment in som through Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. You don’t need a crypto wallet at all." },
  { question: "How do I tell which is cheaper, Fragment or the bot?", answer: "Take Fragment’s dollar price, add the network fee and convert the total to som at the rate you paid for your stablecoins. Compare that with the final amount the bot shows before you pay." },
  { question: "Can I buy Premium on Fragment for a friend in Uzbekistan?", answer: "Yes. Fragment lets you buy for friends and colleagues, and you make the payment yourself. If you’d rather pay in som, just enter your friend’s @username in the bot." },
  { question: "Can I add more time in som if my Premium hasn’t expired yet?", answer: "Not through the bot. It won’t open a new Premium order for an account with an active subscription. Order after the current plan ends, or ask @StarsPaymeeSupport." },
  { question: "Should I wait for an official stablecoin announcement before buying Stars?", answer: "There’s no reason to wait. If you have crypto, you can already see the option on the page. If you don’t, the som route works just as before." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  keywords: ["fragment stablecoin to'lov","fragment usdc to'lov","fragment usdt stars","fragment usdt premium","stars usdt bilan sotib olish","telegram stars so'mda","fragment kripto to'lov tarmoq","fragment оплата usdt","fragment usdc base оплата","купить telegram stars за usdt","fragment стейблкоины stars premium","telegram premium usdt fragment"],
  howToSteps: [
    { name: "So‘mni stablecoin’ga almashtirish", text: "buning uchun alohida almashuv xizmati kerak, kurs va komissiyani o‘sha xizmat belgilaydi." },
    { name: "Hamyon tayyorlash", text: "tanlangan tarmoqni qo‘llaydigan kripto hamyon kerak." },
    { name: "Tarmoqni tanlash", text: "Fragment ro‘yxatidagi tarmoqlardan biri. Hamyondagi aktiv aynan shu tarmoqda turishi kerak." },
    { name: "Oluvchini ko‘rsatish", text: "o‘zingiz yoki boshqa odam: Fragment do‘st va hamkasblar uchun xarid qilishga ham ruxsat beradi." },
    { name: "Tarmoq to‘lovini hisobga olish", text: "tekshiruv paytida Stars sahifasida $2.71 ko‘rsatilgan, bu summa o‘zgarib turadi." },
    { name: "Tranzaksiyani tasdiqlash", text: "hamyonda tasdiqlab, Stars yoki Premium tushishini kutasiz." },
  ],
  locales: {
    uz: {
      title: "Fragment’da stablecoin to‘lov: Stars va Premium uchun kutish kerakmi?",
      excerpt: "Kutish shart emas: USDT va USDC Fragment sahifalarida allaqachon bor, kriptosiz xaridorga esa so‘mdagi yo‘l qulayroq. Ichida post tekshiruvi, tarmoqlar, xarajat hisobi va xavflar bor.",
      metaTitle: "Fragment’da stablecoin to‘lov",
      metaDescription: "Kutish shart emas: USDT va USDC Fragment sahifalarida allaqachon bor, kriptosiz xaridorga esa so‘mdagi yo‘l qulayroq.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Оплата USDT и USDC на Fragment: ждать ли запуска для Stars и Premium?",
      excerpt: "Ждать не нужно: USDT и USDC уже есть на страницах Fragment, а без криптовалюты удобнее покупать в сумах. Внутри — проверка поста, сети, расчёт расходов и риски.",
      metaTitle: "Оплата USDT и USDC на Fragment",
      metaDescription: "Ждать не нужно: USDT и USDC уже есть на страницах Fragment, а без криптовалюты удобнее покупать в сумах. Внутри — проверка поста, сети, расчёт расходов и риски.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Fragment USDT and USDC Payments: Should You Wait to Buy Stars and Premium?",
      excerpt: "No need to wait: USDT and USDC payments already show on Fragment’s pages, and buyers without crypto can pay in UZS. Inside: a check of the post’s claims, supported networks, the real costs and the risks.",
      metaTitle: "Fragment USDT and USDC Payments",
      metaDescription: "No need to wait: USDT and USDC payments already show on Fragment’s pages, and buyers without crypto can pay in UZS.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
