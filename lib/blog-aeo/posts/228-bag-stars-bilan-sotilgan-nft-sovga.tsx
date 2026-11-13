import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "bag-stars-bilan-sotilgan-nft-sovga";

/**
 * Bag Stars bilan sotilgan NFT sovg‘a: tushgan yulduzlar bekor bo‘ladimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-13): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: NFT sovg‘asini Telegram bozorida sotgan yoki sotmoqchi bo‘lgan foydalanuvchi bag orqali arzon olingan Stars bilan sovg‘alar sotib olingani haqidagi xabarni ko‘radi. U «bag stars bilan nft sovga sotish xavflimi» deb qidiradi: tushgan Stars bekor qilinadimi, sovg‘a qaytadimi va o‘zini qanday himoya qilishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-13):
 *   https://telegram.org/tos/stars
 *   https://fragment.com/stars/buy
 *   https://fragment.com/premium
 *   https://core.telegram.org/bug-bounty
 *   https://telegram.org/tos
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
  return <p>Xavf bor, lekin bunga siz aybdor emassiz va u hozircha faqat ehtimol. Telegram Stars shartlarida balansdagi yulduzlarni ushlab turish yoki yechib olish huquqi yozilgan. Sotilgan sovg‘a qaytarilishi haqida esa rasmiy gap yo‘q. Shuning uchun sovg‘ani faqat Telegram mexanizmi orqali soting va tushgan Stars’ni bir necha kun «yakuniy pul» deb hisoblamang.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#bag-haqidagi-xabar-sovga-sotuvchisiga", label: "Bag haqidagi xabar sovg‘a sotuvchisiga nega tegishli?" },
          { href: "#sotuvdan-tushgan-starsni-telegram-balansdan", label: "Sotuvdan tushgan Stars’ni Telegram balansdan yechib olishi mumkinmi?" },
          { href: "#sotilgan-nft-sovga-sizga-qaytib", label: "Sotilgan NFT sovg‘a sizga qaytib keladimi?" },
          { href: "#qaysi-sotuv-vaziyati-xavfliroq", label: "Qaysi sotuv vaziyati xavfliroq?" },
          { href: "#xaridorning-starsi-shubhali-arzon-ekanini", label: "Xaridorning Stars’i shubhali arzon ekanini qanday sezasiz?" },
          { href: "#sovgani-sotishdan-oldin-ozingizni-qanday", label: "Sovg‘ani sotishdan oldin o‘zingizni qanday himoya qilasiz?" },
          { href: "#sotib-bolgansiz-va-balans-kamaydi", label: "Sotib bo‘lgansiz va balans kamaydi: nima qilasiz?" },
          { href: "#sotuvchiga-bag-usuli-taklif-qilishsa", label: "Sotuvchiga «bag usuli» taklif qilishsa yoki xatoni o‘zingiz sezsangiz-chi?" },
          { href: "#stars-va-nft-sovgani-toza", label: "Stars va NFT sovg‘ani toza yo‘l bilan qayerdan olish mumkin?" },
        ]}
      />
      <h2 id="bag-haqidagi-xabar-sovga-sotuvchisiga">Bag haqidagi xabar sovg‘a sotuvchisiga nega tegishli?</h2>
      <p>Telegram kanallaridan birida post tarqaldi. Unda Telegram’da bag topilgani yozilgan: go‘yo u orqali bir yillik Premium’ni 0,25 dollarga, 100 000 Stars’ni esa 15 dollarga olish mumkin bo‘lgan. Postga ko‘ra, shu yo‘l bilan savdo maydonchalaridan yuz minglab Stars turadigan sovg‘alar sotib olingan.</p>
      <p>Bu rasmiy manba emas. Telegram xabarni tasdiqlamagan. Bag tuzatilgani yoki hali ishlayotgani haqida ham rasmiy ma’lumot topilmadi. Quyidagi hamma gap «post rost bo‘lsa» degan farazga tayanadi.</p>
      <p>Sotuvchi uchun postdagi eng muhim jumla — oxirgisi. Arzon yulduzlar sovg‘a xaridiga sarflangan bo‘lsa, ular bozorga NFT sovg‘a qo‘ygan oddiy odamlarning balansiga tushgan. Siz bagdan foydalanmagansiz, ammo zanjirning oxirida turibsiz. Shuning uchun sizning savolingiz boshqacha: «menga tushgan Stars’ga nima bo‘ladi va sovg‘am qaytadimi?»</p>
      <h2 id="sotuvdan-tushgan-starsni-telegram-balansdan">Sotuvdan tushgan Stars’ni Telegram balansdan yechib olishi mumkinmi?</h2>
      <p>Nazariy jihatdan mumkin. <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars shartlari</a>da yozilishicha, Telegram foydalanuvchi balansidagi Stars’ni vaqtincha ushlab turish yoki butunlay yechib olish huquqini o‘zida qoldiradi.</p>
      <p>Bu band umumiy. Unda bag, exploit yoki noto‘g‘ri yo‘l bilan olingan yulduzlar alohida tilga olinmagan. Bag orqali kelgan Stars aynan bekor qilinishi haqida rasmiy bayonot ham topilmadi. Shuning uchun «albatta yechib olinadi» degan gap ham, «hech narsa bo‘lmaydi» degan gap ham hozircha asossiz.</p>
      <Notice label={"Muhim"}>Bu rasmiy qoida emas, ehtiyot chorasi: sotuvdan tushgan summani bir necha kun «yakuniy pul» deb hisoblamang. Uni darhol katta xaridga, qarzni yopishga yoki boshqa odamga va’da qilingan to‘lovga rejalashtirmang.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="sotilgan-nft-sovga-sizga-qaytib">Sotilgan NFT sovg‘a sizga qaytib keladimi?</h2>
      <p>Bu haqda rasmiy ma’lumot yo‘q. Bag orqali sotib olingan sovg‘alar avvalgi egasiga qaytarilishi yoki qaytarilmasligi e’lon qilinmagan. Shuning uchun bu yerda hech qanday va’da berilmaydi.</p>
      <p>Mavjud qoidalar oddiy xaridor uchun yozilgan. Stars shartlariga ko‘ra, Stars savdolari yakuniy hisoblanadi: keraksiz yoki adashib qilingan xarid uchun pul qaytarilmaydi. <a href={"https://telegram.org/tos"} target="_blank" rel="noopener noreferrer">Telegram’ning umumiy shartlari</a>da ham xaridlar bo‘yicha to‘lovlar odatda qaytarilmasligi aytilgan. Bu qoidalar bag holatida qanday qo‘llanishi noma’lum.</p>
      <p>Sotuvchi uchun eng noqulay ssenariy shunday: Stars balansdan yechiladi, sovg‘a esa xaridorda qoladi. Bu fakt emas, ehtimol. Lekin pulni rejalashtirganda buni hisobga olgan ma’qul.</p>
      <p>Xaridorni topib «sovg‘ani qaytar» deb talab qilish odatda natija bermaydi. Bunday yozishmalarga firibgarlar ham qo‘shilishi mumkin. «Telegram xodimiman», «sovg‘angizni tiklab beraman» degan xabarlarni aynan shunday vaziyatda kutish kerak.</p>
      <h2 id="qaysi-sotuv-vaziyati-xavfliroq">Qaysi sotuv vaziyati xavfliroq?</h2>
      <p>Bitta sotuvga qarab uni xavfli yoki xavfsiz deb aytib bo‘lmaydi. Ammo ba’zi belgilarga e’tibor berish kerak. Jadvalda xavf raqam bilan emas, vaziyat tavsifi bilan berilgan.</p>
      <CompareTable
        headers={["Vaziyat", "Nimaga e’tibor berish kerak", "Nima qilish kerak"]}
        rows={[
          ["Telegram ichidagi bozorda belgilangan narxda sotuv", "Sotuv rasmiy mexanizmdan o‘tadi, lekin xaridor yulduzni qayerdan olganini ko‘rmaysiz", "Isbotni saqlang, tushgan Stars’ni darhol sarflamang"],
          ["Narx bozordan ancha baland, lekin taklif bir zumda qabul qilindi", "Xaridor yulduzni ayamayotgandek ko‘rinadi", "Sotuvni alohida belgilab qo‘ying, balansni bir necha kun kuzating"],
          ["Yangi yoki bo‘sh profilli xaridor bir kunda ko‘p sovg‘a olyapti", "Ommaviy xarid postda aytilgan sxemaga o‘xshaydi", "Qolgan sovg‘alaringizni shoshilmasdan soting"],
          ["Shaxsiy chatda «Stars’ni boshqa yo‘l bilan o‘tkazaman» degan kelishuv", "To‘lov umuman kelmasligi mumkin, hech qanday himoya yo‘q", "Rad eting, faqat Telegram mexanizmidan foydalaning"],
          ["Sotuvdan keyin «ortiqcha o‘tkazdim, farqini qaytar» degan xabar", "«Qaytim»ni o‘z mablag‘ingizdan to‘lab qo‘yishingiz mumkin", "Hech narsa qaytarmang, Telegram yordamiga murojaat qiling"],
          ["Telegram’dan tashqaridagi notanish saytda sotish", "Akkauntga kirish ma’lumoti yoki hamyon kalitlari so‘ralishi mumkin", "Kod va kalitni bermang, bunday saytdan voz keching"],
        ]}
      />
      <p>Sovg‘ani qayerda va qanday narxda sotish tartibi <Link href="/blog/telegram-gift-sotish">Telegram Gifts sotish qo‘llanmasi</Link>da batafsil yozilgan.</p>
      <h2 id="xaridorning-starsi-shubhali-arzon-ekanini">Xaridorning Stars’i shubhali arzon ekanini qanday sezasiz?</h2>
      <p>Sotuvchi xaridorning hamyoniga qaray olmaydi. Lekin postdagi raqamni rasmiy sahifa bilan solishtirsangiz, gap qanchalik g‘ayritabiiy ekani ko‘rinadi.</p>
      <p><a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Fragment’ning Stars sahifasi</a>da 50 Stars yonida 0,75, 1 000 Stars yonida 15 qiymati turadi: bitta Star taxminan 0,015 ga to‘g‘ri keladi. 100 000 Stars paketi yonida esa 1 500 va 1 304,85 qiymatlari ko‘rsatilgan. Sahifada valyuta aniq yozilmagan, shuning uchun bu raqamlarni dollar deb da’vo qilmaymiz.</p>
      <p>Solishtirish uchun valyutani bilish shart emas. Postda 100 000 Stars uchun 15 deyilgan, Fragment’da esa 15 qiymati atigi 1 000 Stars yonida turadi. Birliklar bir xil bo‘lsa, farq taxminan 100 baravar. Bunday farqni chegirma yoki aksiya bilan izohlab bo‘lmaydi.</p>
      <p>Sotuvchi uchun bundan amaliy xulosa chiqadi. Yulduzni deyarli tekinga olgan odam narx bilan savdolashmaydi: eng qimmat nusxalarni darhol, ko‘pincha bozordan balandroq narxda oladi. Sovg‘angizni bir necha soniyada, hech qanday savolsiz kutilmagan darajada qimmatga olishgan bo‘lsa, bu sotuvni alohida kuzatib boring.</p>
      <p>Sun’iy shoshilinch talabga qarab narxni ko‘tarishga ham shoshilmang. Shubhali xaridorlar oqimi to‘xtasa, bunday narxlar bozorda saqlanib qolmasligi mumkin.</p>
      <p>Postda 12 oylik Premium’ning odatiy narxi ham keltirilgan, lekin u rasmiy manbada tasdiqlanmadi, shuning uchun u bilan solishtirmaymiz.</p>
      <h2 id="sovgani-sotishdan-oldin-ozingizni-qanday">Sovg‘ani sotishdan oldin o‘zingizni qanday himoya qilasiz?</h2>
      <Steps>
        <Step title={"Faqat Telegram mexanizmi orqali soting"}>«avval sovg‘ani yubor, Stars’ni keyin o‘tkazaman» kabi chatdagi kelishuvlarga rozi bo‘lmang.</Step>
        <Step title={"Xaridor profilini ko‘ring"}>yangi ochilgan akkaunt, bo‘sh profil yoki shoshiltirish — ogohlantiruvchi belgilar.</Step>
        <Step title={"Narxni bozor bilan solishtiring"}>juda tez kelgan ortiqcha taklifning ham sababi bo‘lishi mumkin. Nusxani qanday tekshirish <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini tekshirish</Link> maqolasida yozilgan.</Step>
        <Step title={"Isbot saqlang"}>sotuv sanasi, sovg‘a havolasi, xaridor username’i va sotuvdan keyingi balans skrinshotini alohida papkaga qo‘ying.</Step>
        <Step title={"Hech kimga kod bermang"}>parol, SMS kod yoki ikki bosqichli tekshiruv parolini «tekshiruv» bahonasi bilan so‘raganlarga bermang.</Step>
        <Step title={"Tushgan Stars’ni darhol sarflamang"}>balans bir necha kun o‘zgarmay turishini kuting. Bu rasmiy talab emas, faqat ehtiyot maslahati.</Step>
      </Steps>
      <p>Nega bunchalik ehtiyot? Telegram shartlarini buzish vaqtincha yoki doimiy bloklashga olib kelishi mumkin. Bu Stars shartlarida ham, umumiy shartlarda ham yozilgan. Umumiy shartlar xizmatdan foydalanuvchilarni aldash uchun foydalanishni ham taqiqlaydi. Siz shubhali sxema ishtirokchisiga o‘xshab qolmasligingiz kerak.</p>
      <h2 id="sotib-bolgansiz-va-balans-kamaydi">Sotib bo‘lgansiz va balans kamaydi: nima qilasiz?</h2>
      <Steps>
        <Step title={"Balans tarixini oching"}>summa qaysi operatsiyadan keyin kamayganini aniqlang. Tarixni qayerdan ko‘rish <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasida bor.</Step>
        <Step title={"Telegram yordamiga yozing"}>ilova sozlamalaridagi yordam bo‘limidan foydalaning, sotuv sanasi va sovg‘a havolasini ilova qiling.</Step>
        <Step title={"«Qaytarib beramiz» deganlarga pul to‘lamang"}>Stars yoki sovg‘ani pul evaziga «tiklab beramiz» deydigan begona xizmatlar ko‘pincha firibgarlikka o‘xshaydi.</Step>
        <Step title={"Akkauntni vahimada o‘chirmang"}>Stars shartlariga ko‘ra, akkaunt o‘chirilsa yoki yo‘qotilsa, balansdagi qolgan Stars kuyib ketadi.</Step>
        <Step title={"Qaytarish qoidalarini tushunib oling"}>Stars savdolari yakuniy hisoblanadi. Qaysi hollarda nimani qaytarib olish mumkinligi <Link href="/blog/telegram-stars-qaytarib-olish">Stars’ni qaytarib olish</Link> maqolasida tushuntirilgan.</Step>
      </Steps>
      <p>Natija kafolatlanmaydi. Telegram bunday holatlarni qanday ko‘rib chiqishi rasman e’lon qilinmagan.</p>
      <h2 id="sotuvchiga-bag-usuli-taklif-qilishsa">Sotuvchiga «bag usuli» taklif qilishsa yoki xatoni o‘zingiz sezsangiz-chi?</h2>
      <ul>
        <li><b>«Usul»ga pul to‘lamang.</b> Sovg‘a sotuvchilari chatida «arzon Stars olishni o‘rgatamiz» degan reklamalar paydo bo‘lishi mumkin. Pul to‘lasangiz, uni yo‘qotishingiz mumkin. Usul ishlagan taqdirda ham shartlarni buzish akkaunt bloklanishiga olib kelishi mumkin.</li>
        <li><b>Rasmiy yo‘l bor.</b> <a href={"https://core.telegram.org/bug-bounty"} target="_blank" rel="noopener noreferrer">Telegram Bug Bounty</a> dasturida mukofot muammo jiddiyligiga qarab 100 dollardan 100 000 dollargacha va undan ham ko‘proq bo‘lishi mumkin.</li>
        <li><b>Xabar qayerga yuboriladi.</b> Zaiflik haqida security@telegram.org manziliga yoziladi. Tuzatilishidan oldin ommaga yoki uchinchi shaxslarga oshkor qilingan muammolar uchun mukofot berilmaydi. Demak, chatda tafsilot tarqatish hech kimga foyda bermaydi.</li>
        <li><b>Sinov chegarasi.</b> Dastur shartiga ko‘ra, sinov qonunni buzmasligi, xizmat ishini izdan chiqarmasligi va boshqa foydalanuvchilarga zarar yetkazmasligi kerak. Bag bilan sovg‘a sotib olish esa aynan sotuvchilarga zarar yetkazadi.</li>
      </ul>
      <h2 id="stars-va-nft-sovgani-toza">Stars va NFT sovg‘ani toza yo‘l bilan qayerdan olish mumkin?</h2>
      <p>O‘zingiz sovg‘a sotib olmoqchi yoki Stars to‘ldirmoqchi bo‘lsangiz, manbasi aniq yo‘llarni tanlang.</p>
      <CompareTable
        headers={["Yo‘l", "Qanday to‘lanadi", "Nimaga e’tibor berish kerak"]}
        rows={[
          ["Telegram ilovasi (iOS, Android)", "Ilova ichidagi xarid", "Stars shartlarida ko‘rsatilgan yo‘l"],
          ["Fragment", "Kriptohamyon orqali; Premium ham shu yerda olinadi", "Hamyon kerak, narx sahifada ko‘rinadi"],
          [<span key="r2c0"><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a></span>, "So‘mda: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi", "Faqat @username kerak, buyurtma odatda bir necha soniyada keladi"],
        ]}
      />
      <p>StarsPaymee’da 1 ta Stars narxi to‘lov usuliga bog‘liq: karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Batafsil ma’lumot <Link href="/stars">Stars sahifasi</Link>da. Premium hamma usulda bir xil narxda: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}.</p>
      <p>Tayyor kolleksion sovg‘alar botdagi NFT Market’da so‘mda sotiladi. U qanday ishlashi <Link href="/blog/starspaymee-nft-market">NFT Market haqidagi maqola</Link>da va <Link href="/gifts">sovg‘alar sahifasi</Link>da yozilgan. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi.</p>
      <p>Bir narsani oldindan bilib qo‘ying: StarsPaymee foydalanuvchilardan Stars va sovg‘a sotib olmaydi. Shuning uchun NFT sovg‘angizni botga sota olmaysiz. StarsPaymee mustaqil xizmat va Telegram nomidan ish yuritmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
          { href: "https://fragment.com/premium", label: "Fragment — Telegram Premium" },
          { href: "https://core.telegram.org/bug-bounty", label: "Telegram Bug Bounty Program" },
          { href: "https://telegram.org/tos", label: "Telegram Terms of Service" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Xaridor bag orqali olingan Stars bilan to‘laganini qanday bilsam bo‘ladi?", answer: "Sotuvchi buni aniq ko‘ra oladigan rasmiy belgi yo‘q. Faqat bilvosita belgilarga qarash mumkin: yangi profil, bir kunda juda ko‘p xarid, baland narxning savolsiz qabul qilinishi." },
  { question: "Sovg‘ani bag Stars’i bilan sotib olishgan bo‘lsa, mening akkauntim bloklanadimi?", answer: "Halol sotuvchi bloklanishi haqida rasmiy gap yo‘q. Bloklash qoidalari shartlarni buzganlarga qaratilgan. Shuning uchun shubhali chat kelishuvlaridan uzoq turing va sotuv isbotini saqlang." },
  { question: "Telegram shubhali Stars bilan bo‘lgan sotuvlarni bekor qilishini aytdimi?", answer: "Yo‘q, maqola yangilangan kungacha bunday e’lon topilmadi. Bagning o‘zi ham rasman tasdiqlanmagan, u haqda faqat kanal posti bor." },
  { question: "Sotuvdan tushgan Stars’ni Fragment orqali tezroq yechib olsam, xavf yo‘qoladimi?", answer: "Bunga rasmiy javob yo‘q. Shoshilib yechib olish muammoni hal qiladi deb hisoblamang: balans bo‘yicha Telegram huquqlari shartlarda umumiy tarzda yozilgan." },
  { question: "Xaridor «ortiqcha Stars yubordim, qaytarib ber» desa, nima qilaman?", answer: "Hech narsa o‘tkazmang, bu ko‘p uchraydigan aldov usuli. Balans tarixida farq bor-yo‘qligini o‘zingiz tekshiring, kerak bo‘lsa Telegram yordamiga yozing." },
  { question: "Qolgan sovg‘alarimni bozordan olib qo‘ysam, xavf kamayadimi?", answer: "Sotuvda turmagan sovg‘ani begona xaridor bozordan sotib ololmaydi, shuning uchun vaqtincha kutish o‘rinli bo‘lishi mumkin. Lekin bu shaxsiy chatdagi aldov takliflaridan himoya qilmaydi." },
  { question: "Bag Stars’i bilan sovg‘a olgan xaridorga nima bo‘ladi?", answer: "Aniq choralar e’lon qilinmagan. Umumiy qoidaga ko‘ra, shartlarni buzish va xizmatdan boshqalarni aldash uchun foydalanish vaqtincha yoki doimiy bloklashga olib kelishi mumkin." },
  { question: "NFT sovg‘amni StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Botdagi NFT Market faqat xarid qilish uchun." },
  { question: "Sovg‘a bozorida g‘alati xatoni sezsam, kimga aytaman?", answer: "Tafsilotlarni security@telegram.org manziliga yuboring va chatlarda tarqatmang. Tuzatilishidan oldin ochiq aytilgan muammo Bug Bounty mukofotiga loyiq bo‘lmaydi." },
  { question: "Telegram bag bo‘lgan sotuv uchun menga kompensatsiya beradimi?", answer: "Kompensatsiya haqida rasmiy ma’lumot topilmadi, shuning uchun unga tayanmang. Sotuv isbotini yig‘ib, ilova orqali Telegram yordamiga murojaat qilgan ma’qul." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Риск есть, но он не связан с вашими действиями, и пока это только вероятность. В условиях Telegram Stars есть право удерживать звёзды на балансе или списывать их. Официальных заявлений о возврате проданных подарков нет. Поэтому продавайте подарок только через механизм Telegram и несколько дней не считайте полученные Stars «окончательными деньгами».</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#bag-haqidagi-xabar-sovga-sotuvchisiga", label: "Почему новость о баге касается продавцов подарков?" },
          { href: "#sotuvdan-tushgan-starsni-telegram-balansdan", label: "Может ли Telegram списать с баланса Stars, полученные за продажу?" },
          { href: "#sotilgan-nft-sovga-sizga-qaytib", label: "Вернётся ли к вам проданный NFT-подарок?" },
          { href: "#qaysi-sotuv-vaziyati-xavfliroq", label: "Какие ситуации при продаже опаснее?" },
          { href: "#xaridorning-starsi-shubhali-arzon-ekanini", label: "Как понять, что покупатель получил Stars подозрительно дёшево?" },
          { href: "#sovgani-sotishdan-oldin-ozingizni-qanday", label: "Как защитить себя перед продажей подарка?" },
          { href: "#sotib-bolgansiz-va-balans-kamaydi", label: "Подарок уже продан, а баланс уменьшился: что делать?" },
          { href: "#sotuvchiga-bag-usuli-taklif-qilishsa", label: "Что делать, если вам предлагают «способ через баг» или вы сами нашли ошибку?" },
          { href: "#stars-va-nft-sovgani-toza", label: "Где честно купить Stars и NFT-подарки?" },
        ]}
      />
      <h2 id="bag-haqidagi-xabar-sovga-sotuvchisiga">Почему новость о баге касается продавцов подарков?</h2>
      <p>В одном из Telegram-каналов разошёлся пост о баге в Telegram. Якобы через него можно было купить годовой Premium за 0,25 доллара, а 100 000 Stars — за 15 долларов. Автор поста пишет, что так на торговых площадках скупали подарки стоимостью в сотни тысяч Stars.</p>
      <p>Это не официальный источник. Telegram эту информацию не подтверждал. Официальных данных о том, исправлен баг или ещё работает, тоже нет. Всё, что написано ниже, исходит из допущения «если пост правдив».</p>
      <p>Для продавца главное в посте — последняя фраза. Если дешёвые звёзды тратили на подарки, они попали на балансы обычных людей, которые выставили NFT-подарки на продажу. Вы баг не использовали, но оказались в конце цепочки. Поэтому ваш вопрос другой: «что будет с полученными Stars и вернётся ли мой подарок?»</p>
      <h2 id="sotuvdan-tushgan-starsni-telegram-balansdan">Может ли Telegram списать с баланса Stars, полученные за продажу?</h2>
      <p>Теоретически может. В <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">условиях Telegram Stars</a> сказано, что Telegram оставляет за собой право временно удерживать Stars на личном балансе пользователя или безвозвратно их списывать.</p>
      <p>Это общий пункт. Баги, эксплойты или звёзды, полученные нечестным путём, в нём отдельно не упомянуты. Официального заявления, что Stars, полученные через баг, будут аннулированы, тоже нет. Поэтому утверждения «точно спишут» и «ничего не будет» пока ничем не подкреплены.</p>
      <Notice label={"Важно"}>Это не официальное правило, а мера предосторожности. Несколько дней не считайте сумму от продажи «окончательными деньгами». Не планируйте сразу потратить её на крупную покупку, погашение долга или платёж, который вы кому-то обещали.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="sotilgan-nft-sovga-sizga-qaytib">Вернётся ли к вам проданный NFT-подарок?</h2>
      <p>Официальной информации нет. Telegram не сообщал, вернут ли подарки, купленные через баг, прежним владельцам. Поэтому никаких обещаний здесь не будет.</p>
      <p>Действующие правила написаны для обычного покупателя. По условиям Stars, продажи Stars окончательны: за ненужную или случайную покупку деньги не возвращают. В <a href={"https://telegram.org/tos"} target="_blank" rel="noopener noreferrer">общих условиях Telegram</a> тоже сказано, что платежи за покупки, как правило, не возвращаются. Как эти правила применят в случае бага, неизвестно.</p>
      <p>Худший сценарий для продавца: Stars списывают с баланса, а подарок остаётся у покупателя. Это не факт, а вероятность. Но планируя деньги, её лучше учитывать.</p>
      <p>Искать покупателя и требовать вернуть подарок обычно бесполезно. К такой переписке могут подключиться и мошенники. Именно в такой ситуации стоит ждать сообщений вроде «я сотрудник Telegram» или «помогу восстановить ваш подарок».</p>
      <h2 id="qaysi-sotuv-vaziyati-xavfliroq">Какие ситуации при продаже опаснее?</h2>
      <p>По одной продаже нельзя понять, опасна она или нет. Но некоторые признаки должны насторожить. В таблице риск описан не цифрой, а ситуацией.</p>
      <CompareTable
        headers={["Ситуация", "На что обратить внимание", "Что делать"]}
        rows={[
          ["Продажа по выставленной цене на рынке внутри Telegram", "Сделка идёт через официальный механизм, но откуда у покупателя звёзды, вы не видите", "Сохраните доказательства, не тратьте полученные Stars сразу"],
          ["Цена заметно выше рынка, а предложение приняли мгновенно", "Похоже, покупатель звёзд не жалеет", "Отметьте эту продажу и несколько дней следите за балансом"],
          ["Покупатель с новым или пустым профилем за день скупает много подарков", "Массовые покупки похожи на схему из поста", "Продавайте остальные подарки без спешки"],
          ["Договорённость в личке: «переведу Stars другим способом»", "Оплата может вообще не прийти, защиты никакой", "Откажитесь, пользуйтесь только механизмом Telegram"],
          ["После продажи пишут: «перевёл лишнее, верни разницу»", "Вы рискуете оплатить «сдачу» из своих денег", "Ничего не возвращайте, напишите в поддержку Telegram"],
          ["Продажа на незнакомом сайте вне Telegram", "Могут запросить данные для входа в аккаунт или ключи кошелька", "Не сообщайте коды и ключи, откажитесь от такого сайта"],
        ]}
      />
      <p>Где и по какой цене продавать подарок, подробно написано в <Link href="/blog/telegram-gift-sotish">руководстве по продаже Telegram Gifts</Link>.</p>
      <h2 id="xaridorning-starsi-shubhali-arzon-ekanini">Как понять, что покупатель получил Stars подозрительно дёшево?</h2>
      <p>Продавец не видит кошелёк покупателя. Но если сравнить цифры из поста с официальной страницей, становится видно, насколько они ненормальны.</p>
      <p>На <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">странице покупки Stars во Fragment</a> напротив 50 Stars указано 0,75, напротив 1 000 Stars — 15. Получается, одна звезда стоит примерно 0,015. Напротив пакета 100 000 Stars указаны значения 1 500 и 1 304,85. Валюта на странице прямо не указана, поэтому мы не утверждаем, что это доллары.</p>
      <p>Чтобы сравнить, валюта и не нужна. В посте за 100 000 Stars называют 15, а во Fragment 15 стоит напротив всего 1 000 Stars. Если единицы одни и те же, разница примерно в 100 раз. Скидкой или акцией это не объяснить.</p>
      <p>Вывод для продавца практический. Кто получил звёзды почти даром, тот не торгуется: он сразу берёт самые дорогие экземпляры, часто выше рынка. Если ваш подарок купили за пару секунд, без вопросов и неожиданно дорого, следите за этой продажей внимательнее.</p>
      <p>Не торопитесь и поднимать цены из-за искусственного ажиотажа. Если подозрительные покупатели исчезнут, такие цены на рынке могут не удержаться.</p>
      <p>В посте есть и обычная цена годового Premium, но в официальных источниках она не подтвердилась, поэтому с ней мы не сравниваем.</p>
      <h2 id="sovgani-sotishdan-oldin-ozingizni-qanday">Как защитить себя перед продажей подарка?</h2>
      <Steps>
        <Step title={"Продавайте только через механизм Telegram"}>не соглашайтесь на договорённости в чате вроде «сначала отправь подарок, Stars переведу потом».</Step>
        <Step title={"Посмотрите профиль покупателя"}>новый аккаунт, пустой профиль или попытки вас поторопить должны насторожить.</Step>
        <Step title={"Сравните цену с рынком"}>у слишком быстрого и щедрого предложения тоже может быть причина. Как проверить экземпляр, рассказано в статье <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">о проверке истории NFT-подарка</Link>.</Step>
        <Step title={"Сохраните доказательства"}>сложите в отдельную папку дату продажи, ссылку на подарок, username покупателя и скриншот баланса после продажи.</Step>
        <Step title={"Никому не сообщайте коды"}>не отдавайте пароль, SMS-код или пароль двухэтапной аутентификации тем, кто просит их «для проверки».</Step>
        <Step title={"Не тратьте полученные Stars сразу"}>подождите несколько дней и убедитесь, что баланс не меняется. Это не официальное требование, а совет для подстраховки.</Step>
      </Steps>
      <p>Зачем такая осторожность? За нарушение условий Telegram аккаунт могут заблокировать временно или навсегда. Это сказано и в условиях Stars, и в общих условиях. Общие условия ещё и запрещают использовать сервис, чтобы обманывать пользователей. Важно, чтобы вас не приняли за участника сомнительной схемы.</p>
      <h2 id="sotib-bolgansiz-va-balans-kamaydi">Подарок уже продан, а баланс уменьшился: что делать?</h2>
      <Steps>
        <Step title={"Откройте историю баланса"}>найдите операцию, после которой сумма уменьшилась. Где смотреть историю, рассказано в статье <Link href="/blog/telegram-stars-balansini-tekshirish">о проверке баланса Stars</Link>.</Step>
        <Step title={"Напишите в поддержку Telegram"}>через раздел помощи в настройках приложения. Приложите дату продажи и ссылку на подарок.</Step>
        <Step title={"Не платите тем, кто обещает всё «вернуть»"}>сторонние сервисы, которые за деньги «восстанавливают» Stars или подарки, чаще всего похожи на мошенников.</Step>
        <Step title={"Не удаляйте аккаунт в панике"}>по условиям Stars, если аккаунт удалён или утерян, Stars на балансе сгорают.</Step>
        <Step title={"Разберитесь в правилах возврата"}>продажи Stars окончательны. Что и в каких случаях можно вернуть, объясняется в статье <Link href="/blog/telegram-stars-qaytarib-olish">о возврате Stars</Link>.</Step>
      </Steps>
      <p>Результат никто не гарантирует. Как Telegram разбирает такие случаи, официально не сообщалось.</p>
      <h2 id="sotuvchiga-bag-usuli-taklif-qilishsa">Что делать, если вам предлагают «способ через баг» или вы сами нашли ошибку?</h2>
      <ul>
        <li><b>Не платите за «способ».</b> В чатах продавцов подарков может появиться реклама вроде «научим покупать Stars дёшево». Если заплатите, можете просто потерять деньги. А если способ и сработает, за нарушение условий могут заблокировать аккаунт.</li>
        <li><b>Есть официальный путь.</b> В программе <a href={"https://core.telegram.org/bug-bounty"} target="_blank" rel="noopener noreferrer">Telegram Bug Bounty</a> награда зависит от серьёзности проблемы: от 100 до 100 000 долларов и выше.</li>
        <li><b>Куда писать.</b> Об уязвимости сообщают на адрес security@telegram.org. Если проблему раскрыли публично или третьим лицам до исправления, награды не будет. Значит, рассказывать подробности в чатах невыгодно никому.</li>
        <li><b>Границы тестирования.</b> По правилам программы тестирование не должно нарушать закон, мешать работе сервиса или вредить другим пользователям. А покупка подарков через баг вредит как раз продавцам.</li>
      </ul>
      <h2 id="stars-va-nft-sovgani-toza">Где честно купить Stars и NFT-подарки?</h2>
      <p>Если вы сами хотите купить подарок или пополнить Stars, выбирайте способы, где понятно, откуда звёзды.</p>
      <CompareTable
        headers={["Способ", "Как платить", "На что обратить внимание"]}
        rows={[
          ["Приложение Telegram (iOS, Android)", "Покупка в приложении", "Этот способ указан в условиях Stars"],
          ["Fragment", "Через криптокошелёк, там же можно купить Premium", "Нужен кошелёк, цена указана на странице"],
          [<span key="r2c0"><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a></span>, "В сумах: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота", "Нужен только @username, заказ обычно приходит за несколько секунд"],
        ]}
      />
      <p>В StarsPaymee цена 1 Stars зависит от способа оплаты: {som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту (UzCard/HUMO) или оплате с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} через Click, Payme, Uzum или Paynet. Минимальный заказ — 50 Stars. Подробнее — на <Link href="/stars">странице Stars</Link>. Premium стоит одинаково при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}.</p>
      <p>Готовые коллекционные подарки продаются за сумы в NFT Market внутри бота. Как он устроен, рассказано в <Link href="/blog/starspaymee-nft-market">статье о NFT Market</Link> и на <Link href="/gifts">странице подарков</Link>. Лимитированные подарки, которые Telegram снял с продажи, боты отправлять не могут.</p>
      <p>Важно знать заранее: StarsPaymee не покупает у пользователей ни Stars, ни подарки. Поэтому продать боту свой NFT-подарок не получится. StarsPaymee — независимый сервис и не работает от имени Telegram.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
          { href: "https://fragment.com/premium", label: "Fragment — Telegram Premium" },
          { href: "https://core.telegram.org/bug-bounty", label: "Telegram Bug Bounty Program" },
          { href: "https://telegram.org/tos", label: "Telegram Terms of Service" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Как узнать, что покупатель заплатил мне Stars, полученными через баг?", answer: "Официального признака, по которому продавец мог бы это точно увидеть, нет. Остаются только косвенные: новый профиль, очень много покупок за день и высокая цена, принятая без вопросов." },
  { question: "Если мой подарок купили за «баговые» Stars, заблокируют ли мой аккаунт?", answer: "Официальных сообщений о блокировке честных продавцов нет. Правила о блокировке касаются тех, кто нарушает условия. Поэтому держитесь подальше от сомнительных договорённостей в чатах и сохраняйте доказательства продажи." },
  { question: "Telegram заявлял, что отменит продажи за подозрительные Stars?", answer: "Нет, на дату обновления статьи такого заявления нет. Сам баг тоже официально не подтверждён — о нём известно только из поста в канале." },
  { question: "Если быстро вывести Stars от продажи через Fragment, риск пропадёт?", answer: "Официального ответа на этот вопрос нет. Не рассчитывайте, что спешный вывод решит проблему: права Telegram в отношении баланса описаны в условиях в общем виде." },
  { question: "Покупатель пишет: «отправил лишние Stars, верни». Что делать?", answer: "Ничего не переводите — это распространённая схема обмана. Сами проверьте в истории баланса, есть ли разница, и при необходимости напишите в поддержку Telegram." },
  { question: "Стоит ли снять остальные подарки с продажи, чтобы снизить риск?", answer: "Подарок, который не выставлен на продажу, посторонний покупатель на рынке не купит, так что переждать может быть разумно. Но от мошеннических предложений в личных сообщениях это не защитит." },
  { question: "Что будет с покупателем, который купил подарок за «баговые» Stars?", answer: "Конкретных мер Telegram не объявлял. По общим правилам, за нарушение условий и использование сервиса для обмана других могут заблокировать временно или навсегда." },
  { question: "Можно ли продать свой NFT-подарок StarsPaymee?", answer: "Нет, StarsPaymee не покупает у пользователей ни Stars, ни подарки. NFT Market в боте работает только на продажу подарков пользователям." },
  { question: "Заметил странную ошибку на рынке подарков. Кому сообщить?", answer: "Отправьте подробности на security@telegram.org и не публикуйте их в чатах. Если о проблеме написали открыто до исправления, награду по Bug Bounty не дадут." },
  { question: "Даст ли Telegram компенсацию за продажу, которую испортил баг?", answer: "Официальной информации о компенсации нет, поэтому лучше на неё не рассчитывать. Соберите доказательства продажи и напишите в поддержку Telegram через приложение." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>There is some risk, but it isn’t your fault, and for now it’s only a possibility. Telegram’s Stars terms say it can withhold or debit Stars from a user’s balance. Nothing official says sold gifts will be returned. So sell only through Telegram’s own mechanism, and don’t treat the Stars you receive as “final money” for a few days.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#bag-haqidagi-xabar-sovga-sotuvchisiga", label: "Why does a bug report matter to gift sellers?" },
          { href: "#sotuvdan-tushgan-starsni-telegram-balansdan", label: "Can Telegram take Stars from a sale back off your balance?" },
          { href: "#sotilgan-nft-sovga-sizga-qaytib", label: "Will a sold NFT gift come back to you?" },
          { href: "#qaysi-sotuv-vaziyati-xavfliroq", label: "Which sales are riskier?" },
          { href: "#xaridorning-starsi-shubhali-arzon-ekanini", label: "How can you tell a buyer’s Stars were suspiciously cheap?" },
          { href: "#sovgani-sotishdan-oldin-ozingizni-qanday", label: "How do you protect yourself before selling a gift?" },
          { href: "#sotib-bolgansiz-va-balans-kamaydi", label: "You already sold and your balance dropped: what now?" },
          { href: "#sotuvchiga-bag-usuli-taklif-qilishsa", label: "What if someone offers you a “bug method,” or you spot a glitch yourself?" },
          { href: "#stars-va-nft-sovgani-toza", label: "Where can you get Stars and NFT gifts the clean way?" },
        ]}
      />
      <h2 id="bag-haqidagi-xabar-sovga-sotuvchisiga">Why does a bug report matter to gift sellers?</h2>
      <p>A post spread through one of the Telegram channels. It claimed someone had found a bug in Telegram that supposedly let people buy a year of Premium for $0.25 and 100 000 Stars for $15. According to the post, this method was used to buy gifts worth hundreds of thousands of Stars on marketplaces.</p>
      <p>This isn’t an official source. Telegram hasn’t confirmed the report. We also found no official information on whether the bug has been fixed or still works. Everything below assumes the post is true.</p>
      <p>For sellers, the key line is the last one. If cheap Stars were spent on gifts, they ended up on the balances of ordinary people who had listed NFT gifts for sale. You didn’t use the bug, but you’re at the end of the chain. So your question is different: “What happens to the Stars I received, and will my gift come back?”</p>
      <h2 id="sotuvdan-tushgan-starsni-telegram-balansdan">Can Telegram take Stars from a sale back off your balance?</h2>
      <p>In theory, yes. The <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars terms</a> say Telegram retains the right to temporarily withhold or permanently debit Stars from a user’s balance.</p>
      <p>That clause is general. It doesn’t specifically mention bugs, exploits or Stars obtained the wrong way. We also found no official statement saying Stars that came through the bug will be cancelled. So “they’ll definitely be taken” and “nothing will happen” are both unfounded claims for now.</p>
      <Notice label={"Important"}>This isn’t an official rule, just a precaution: don’t treat the amount from a sale as “final money” for a few days. Don’t plan it straight into a big purchase, paying off a debt or a payment you’ve promised someone.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="sotilgan-nft-sovga-sizga-qaytib">Will a sold NFT gift come back to you?</h2>
      <p>There’s no official information on this. Telegram hasn’t said whether gifts bought through the bug will go back to their previous owners. So no promises here.</p>
      <p>The existing rules were written with ordinary buyers in mind. Under the Stars terms, all sales of Stars are final: Telegram doesn’t refund unwanted or unintentional purchases. <a href={"https://telegram.org/tos"} target="_blank" rel="noopener noreferrer">Telegram’s general Terms of Service</a> also say payments for purchases are generally non-refundable. How these rules apply in a bug case is unknown.</p>
      <p>The worst case for a seller looks like this: the Stars are debited from your balance, and the gift stays with the buyer. That’s a possibility, not a fact. Still, it’s worth keeping in mind when you plan how to use the money.</p>
      <p>Tracking down the buyer and demanding the gift back usually goes nowhere. Scammers may also join conversations like this. Messages like “I’m a Telegram employee” or “I can restore your gift” are exactly what to expect in this situation.</p>
      <h2 id="qaysi-sotuv-vaziyati-xavfliroq">Which sales are riskier?</h2>
      <p>You can’t call a single sale risky or safe just by looking at it. But some signs deserve attention. The table describes situations rather than giving risk scores.</p>
      <CompareTable
        headers={["Situation", "What to watch for", "What to do"]}
        rows={[
          ["Sale at your listed price on Telegram’s in-app market", "The sale goes through the official mechanism, but you can’t see where the buyer got their Stars", "Keep proof and don’t spend the Stars right away"],
          ["Price well above market, yet the offer was accepted instantly", "The buyer seems not to care about spending Stars", "Flag this sale and watch your balance for a few days"],
          ["A new account or empty profile buys lots of gifts in a single day", "Mass buying matches the scheme described in the post", "Don’t rush to sell your remaining gifts"],
          ["A private chat deal like “I’ll send the Stars another way”", "Payment may never arrive, and you have no protection", "Refuse and use only Telegram’s mechanism"],
          ["After the sale: “I overpaid, send back the difference”", "You could end up paying the “change” out of your own funds", "Send nothing back and contact Telegram support"],
          ["Selling on an unfamiliar site outside Telegram", "It may ask for your login details or wallet keys", "Never share codes or keys, and stay away from the site"],
        ]}
      />
      <p>Where and at what price to sell a gift is covered in detail in our <Link href="/blog/telegram-gift-sotish">guide to selling Telegram Gifts</Link>.</p>
      <h2 id="xaridorning-starsi-shubhali-arzon-ekanini">How can you tell a buyer’s Stars were suspiciously cheap?</h2>
      <p>A seller can’t look into the buyer’s wallet. But compare the post’s numbers with the official page and you’ll see how abnormal the claim is.</p>
      <p>On <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Fragment’s Stars page</a>, 50 Stars show a value of 0.75 and 1 000 Stars show 15, which works out to roughly 0.015 per Star. The 100 000 Stars package shows 1 500 and 1 304.85. The page doesn’t state the currency clearly, so we won’t claim these are dollars.</p>
      <p>You don’t need the currency to compare. The post says 15 for 100 000 Stars, while on Fragment 15 sits next to just 1 000 Stars. If the units match, that’s roughly a 100-fold gap. No discount or promotion explains a gap like that.</p>
      <p>There’s a practical takeaway for sellers. Someone who got Stars almost for free doesn’t haggle: they snap up the most expensive items right away, often above market price. If your gift sold within seconds, no questions asked, at a surprisingly high price, keep an eye on that sale.</p>
      <p>Don’t rush to raise your prices because of this artificial demand, either. Once the flow of suspicious buyers stops, those prices may not hold.</p>
      <p>The post also quotes a usual price for 12-month Premium, but we couldn’t confirm it in an official source, so we don’t use it for comparison.</p>
      <h2 id="sovgani-sotishdan-oldin-ozingizni-qanday">How do you protect yourself before selling a gift?</h2>
      <Steps>
        <Step title={"Sell only through Telegram’s mechanism"}>don’t agree to chat deals like “send the gift first, I’ll transfer the Stars later.”</Step>
        <Step title={"Check the buyer’s profile"}>a freshly created account, an empty profile or pressure to hurry are warning signs.</Step>
        <Step title={"Compare the price with the market"}>an unusually generous offer that arrives very fast may have a reason behind it. How to check an item is covered in <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">checking an NFT gift’s history</Link>.</Step>
        <Step title={"Keep proof"}>save the sale date, the gift link, the buyer’s username and a screenshot of your balance after the sale in a separate folder.</Step>
        <Step title={"Don’t give anyone your codes"}>never share your password, SMS code or two-step verification password with someone who asks “for verification.”</Step>
        <Step title={"Don’t spend the Stars right away"}>wait until your balance has stayed unchanged for a few days. This isn’t an official requirement, just a precaution.</Step>
      </Steps>
      <p>Why so careful? Breaking Telegram’s terms can lead to a temporary or permanent ban. That’s stated both in the Stars terms and in the general terms. The general terms also prohibit using the service to defraud users. You don’t want to look like a participant in a shady scheme.</p>
      <h2 id="sotib-bolgansiz-va-balans-kamaydi">You already sold and your balance dropped: what now?</h2>
      <Steps>
        <Step title={"Open your balance history"}>find which transaction the amount dropped after. Where to see the history is explained in <Link href="/blog/telegram-stars-balansini-tekshirish">checking your Stars balance</Link>.</Step>
        <Step title={"Contact Telegram support"}>use the help section in the app settings and include the sale date and the gift link.</Step>
        <Step title={"Don’t pay anyone who promises a refund"}>outside services offering to “restore” Stars or gifts for a fee usually look like scams.</Step>
        <Step title={"Don’t delete your account in a panic"}>under the Stars terms, if your account is deleted or lost, your remaining Star balance is forfeited.</Step>
        <Step title={"Understand the refund rules"}>Stars sales are final. What can be refunded and when is explained in <Link href="/blog/telegram-stars-qaytarib-olish">getting Telegram Stars refunded</Link>.</Step>
      </Steps>
      <p>There’s no guaranteed outcome. Telegram hasn’t officially said how it will handle cases like these.</p>
      <h2 id="sotuvchiga-bag-usuli-taklif-qilishsa">What if someone offers you a “bug method,” or you spot a glitch yourself?</h2>
      <ul>
        <li><b>Don’t pay for a “method.”</b> Gift-seller chats may start showing ads like “we’ll teach you to get cheap Stars.” If you pay, you may lose the money. Even if the method works, breaking the terms can get your account banned.</li>
        <li><b>There’s an official route.</b> Through the <a href={"https://core.telegram.org/bug-bounty"} target="_blank" rel="noopener noreferrer">Telegram Bug Bounty</a> program, rewards range from $100 to $100 000 or more, depending on how serious the issue is.</li>
        <li><b>Where to report it.</b> Vulnerabilities go to security@telegram.org. Issues disclosed to the public or to third parties before they’re fixed aren’t eligible for a reward. So spreading details in chats helps no one.</li>
        <li><b>Testing limits.</b> Under the program’s rules, your testing must not break any law, disrupt Telegram’s services or harm other users. Buying gifts through a bug harms exactly those users: the sellers.</li>
      </ul>
      <h2 id="stars-va-nft-sovgani-toza">Where can you get Stars and NFT gifts the clean way?</h2>
      <p>If you want to buy a gift or top up Stars yourself, choose routes with a clear source.</p>
      <CompareTable
        headers={["Route", "How you pay", "What to watch for"]}
        rows={[
          ["Telegram app (iOS, Android)", "In-app purchase", "The route named in the Stars terms"],
          ["Fragment", "Via a crypto wallet; Premium is sold here too", "You need a wallet; prices are shown on the page"],
          [<span key="r2c0"><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a></span>, "In UZS: Click, Payme, Uzum, Paynet, UzCard/HUMO card transfer or bot balance", "Only your @username is needed; orders usually arrive within seconds"],
        ]}
      />
      <p>On StarsPaymee, the price of 1 Star depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. More details are on the <Link href="/stars">Stars page</Link>. Premium costs the same with every payment method: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}.</p>
      <p>Ready-made collectible gifts are sold in UZS in the bot’s NFT Market. How it works is explained in <Link href="/blog/starspaymee-nft-market">our NFT Market article</Link> and on the <Link href="/gifts">gifts page</Link>. Bots can’t send limited gifts that Telegram has taken off sale.</p>
      <p>One thing to know in advance: StarsPaymee doesn’t buy Stars or gifts from users, so you can’t sell your NFT gift to the bot. StarsPaymee is an independent service and doesn’t act on Telegram’s behalf.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
          { href: "https://fragment.com/premium", label: "Fragment — Telegram Premium" },
          { href: "https://core.telegram.org/bug-bounty", label: "Telegram Bug Bounty Program" },
          { href: "https://telegram.org/tos", label: "Telegram Terms of Service" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "How can I tell if a buyer paid me with Stars obtained through the bug?", answer: "There’s no official marker a seller can see. All you have are indirect signs: a new profile, lots of purchases in one day, a high price accepted without any questions." },
  { question: "If someone bought my gift with bug Stars, will my account get banned?", answer: "Nothing official says honest sellers will be banned. The ban rules target people who break the terms. Still, stay away from shady chat deals and keep proof of your sale." },
  { question: "Has Telegram said it will cancel sales made with suspicious Stars?", answer: "No. As of the date this article was last updated, we found no such announcement. The bug itself isn’t officially confirmed either; there’s only a channel post about it." },
  { question: "If I withdraw the Stars from a sale through Fragment quickly, does the risk go away?", answer: "There’s no official answer to that. Don’t assume a quick withdrawal solves anything: Telegram’s rights over your balance are written in general terms." },
  { question: "A buyer says “I sent too many Stars, give some back.” What should I do?", answer: "Don’t transfer anything. This is a common scam. Check your balance history yourself for any difference, and contact Telegram support if needed." },
  { question: "Will taking my remaining gifts off the market lower the risk?", answer: "A gift that isn’t listed can’t be bought by a stranger on the market, so waiting for a while can make sense. It won’t protect you from scam offers in private chats, though." },
  { question: "What happens to a buyer who bought gifts with bug Stars?", answer: "No specific measures have been announced. Under the general rules, breaking the terms or using the service to deceive others can lead to a temporary or permanent ban." },
  { question: "Can I sell my NFT gift to StarsPaymee?", answer: "No. StarsPaymee doesn’t buy Stars or gifts from users. The NFT Market in the bot is for buying only." },
  { question: "Who do I tell if I notice a strange glitch in the gift market?", answer: "Send the details to security@telegram.org and don’t share them in chats. An issue made public before it’s fixed won’t qualify for a Bug Bounty reward." },
  { question: "Will Telegram compensate me for a sale affected by the bug?", answer: "We found no official information about compensation, so don’t count on it. Your best move is to gather proof of the sale and contact Telegram support through the app." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["bag stars bilan nft sovga sotish","telegram bag arzon stars sovga","nft sovga sotdim stars yechib olindi","telegram sovga sotish xavfi","stars balansdan yechib olindi","telegram gift sotuvchi himoya","баг telegram stars подарки","продал nft подарок за stars баг","telegram stars списали с баланса","баг премиум 0.25 доллара подарки","продажа подарков telegram риск"],
  howToSteps: [
    { name: "Faqat Telegram mexanizmi orqali soting", text: "«avval sovg‘ani yubor, Stars’ni keyin o‘tkazaman» kabi chatdagi kelishuvlarga rozi bo‘lmang." },
    { name: "Xaridor profilini ko‘ring", text: "yangi ochilgan akkaunt, bo‘sh profil yoki shoshiltirish — ogohlantiruvchi belgilar." },
    { name: "Narxni bozor bilan solishtiring", text: "juda tez kelgan ortiqcha taklifning ham sababi bo‘lishi mumkin. Nusxani qanday tekshirish NFT sovg‘a tarixini tekshirish maqolasida yozilgan." },
    { name: "Isbot saqlang", text: "sotuv sanasi, sovg‘a havolasi, xaridor username’i va sotuvdan keyingi balans skrinshotini alohida papkaga qo‘ying." },
    { name: "Hech kimga kod bermang", text: "parol, SMS kod yoki ikki bosqichli tekshiruv parolini «tekshiruv» bahonasi bilan so‘raganlarga bermang." },
    { name: "Tushgan Stars’ni darhol sarflamang", text: "balans bir necha kun o‘zgarmay turishini kuting. Bu rasmiy talab emas, faqat ehtiyot maslahati." },
  ],
  locales: {
    uz: {
      title: "Bag Stars bilan sotilgan NFT sovg‘a: tushgan yulduzlar bekor bo‘ladimi?",
      excerpt: "Bag Stars’i bilan sotilgan sovg‘alar bekor qilinishi hozircha rasman e’lon qilinmagan, lekin Telegram balansdagi Stars’ni ushlab turish huquqiga ega. Maqolada xavfli vaziyatlar va himoya qadamlari bor.",
      metaTitle: "Bag Stars bilan sotilgan NFT sovg‘a",
      metaDescription: "Bag Stars’i bilan sotilgan sovg‘alar bekor qilinishi hozircha rasman e’lon qilinmagan, lekin Telegram balansdagi Stars’ni ushlab turish huquqiga ega.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "NFT-подарок купили за «баговые» Stars: могут ли списать звёзды?",
      excerpt: "Отмену продаж подарков за «баговые» Stars Telegram официально не объявлял, но по условиям он вправе удерживать Stars на балансе. В статье — опасные ситуации при продаже и шаги защиты.",
      metaTitle: "NFT-подарок купили за «баговые» Stars",
      metaDescription: "Отмену продаж подарков за «баговые» Stars Telegram официально не объявлял, но по условиям он вправе удерживать Stars на балансе.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Sold an NFT Gift for Bug-Bought Stars: Can Telegram Take Them Back?",
      excerpt: "Telegram hasn’t announced reversing gift sales paid with bug-obtained Stars, but its terms let it withhold Stars on your balance. This guide covers riskier sales and the steps that protect sellers.",
      metaTitle: "Sold an NFT Gift for Bug-Bought Stars",
      metaDescription: "Telegram hasn’t announced reversing gift sales paid with bug-obtained Stars, but its terms let it withhold Stars on your balance.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
