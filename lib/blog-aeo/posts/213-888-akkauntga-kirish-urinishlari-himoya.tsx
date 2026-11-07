import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "888-akkauntga-kirish-urinishlari-himoya";

/**
 * +888 akkauntga kirishga urinishyapti: Stars va Premium’ni qanday asrayman
 *
 * Avtoblogyoz yasagan maqola (2026-11-07): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: +888 anonim raqamli Telegram akkaunti egasi ommaviy avtorizatsiya so‘rovlari va brutfors haqida eshitib, «+888 akkauntga kirishga urinishyapti, Stars balansim va Premium’imni qanday saqlayman» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-07):
 *   https://fragment.com/about
 *   https://fragment.com/numbers
 *   https://telegram.org/blog/ultimate-privacy-topics-2-0
 *   https://telegram.org/faq
 *   https://telegram.org/blog/sessions-and-2-step-verification
 *   https://core.telegram.org/api/auth
 *   https://telegram.org/blog/collectible-gifts-and-more
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
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
  return <p>Ha, Stars balansi va Premium’ni asrab qolsa bo‘ladi. Buning uchun ikki bosqichli tekshiruv parolini yoqing va Fragment’ga ulangan hamyonni hech kimga ishonib topshirmang. +888 raqamga kirish kodi SMS bilan kelmaydi, Fragment orqali olinadi, demak hamyon akkauntning kaliti. @StarsPaymee_bot’dan Stars yoki Premium olishda kod, parol yoki hamyon so‘ralmaydi, faqat @username kerak bo‘ladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#ommaviy-kirish-sorovlari-haqidagi-gaplar", label: "Ommaviy kirish so‘rovlari haqidagi gaplar qanchalik asosli?" },
          { href: "#akkaunt-begona-qolga-otsa-balans", label: "Akkaunt begona qo‘lga o‘tsa, balans, obuna va sovg‘alar bilan nima bo‘ladi?" },
          { href: "#fragmentda-kod-olish-tartibi-xavfni", label: "Fragment’da kod olish tartibi xavfni qayerga ko‘chiradi?" },
          { href: "#2fa-888-akkauntga-ikkinchi-qulfni", label: "2FA: +888 akkauntga ikkinchi qulfni qanday qo‘yish mumkin?" },
          { href: "#stars-zaxirasini-qanday-kichik-ushlash", label: "Stars zaxirasini qanday kichik ushlash va Premium muddatini qanday tanlash kerak?" },
          { href: "#kutilmagan-kirish-sorovidan-keyin-nimalarni", label: "Kutilmagan kirish so‘rovidan keyin nimalarni tekshirish kerak?" },
          { href: "#qaysi-xabarlar-akkauntni-olish-uchun", label: "Qaysi xabarlar akkauntni olish uchun yozilgan bo‘ladi?" },
          { href: "#starspaymeedan-xarid-qilganda-888-kodingiz", label: "StarsPaymee’dan xarid qilganda +888 kodingiz nega kerak bo‘lmaydi?" },
          { href: "#akkauntni-boshqa-odam-boshqarayotganini-sezsangiz", label: "Akkauntni boshqa odam boshqarayotganini sezsangiz, nima qilish kerak?" },
        ]}
      />
      <h2 id="ommaviy-kirish-sorovlari-haqidagi-gaplar">Ommaviy kirish so‘rovlari haqidagi gaplar qanchalik asosli?</h2>
      <p>Ba’zi Telegram kanallarida +888 egalariga ommaviy avtorizatsiya so‘rovlari yuborilayotgani haqida post tarqaldi. Unda «fermalar» orqali brutfors qilinayotgani va jabrlanganlar borligi aytiladi. Bu da’volar rasmiy tasdiqlanmagan: Telegram yoki Fragment bunday hujumlar haqida bayonot bermagan.</p>
      <p>Rasmiy manbalarda +888 raqamlar haqida mana bular bor:</p>
      <ul>
        <li>Telegram 2022-yil oxirida TON blokcheynida cheklangan miqdorda virtual raqamlarni kolleksiya obyekti sifatida chiqargan (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>).</li>
        <li>136 566 ta raqamning barchasi 2022-yil dekabrida sotilib bo‘lgan. Hozir ularni faqat mavjud egasidan olish mumkin (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment: raqamlar</a>).</li>
        <li>Bunday raqam bilan Telegram akkauntini SIM kartasiz ochish mumkin (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</li>
      </ul>
      <p>Post rost bo‘lsin yoki mubolag‘a, himoya choralari bir xil. Ularni hujum haqidagi yangilikni kutmasdan bugun sozlab qo‘ygan ma’qul.</p>
      <Notice label={"Muhim"}>Postdagi «avtorizatsiya kodlarini qabul qilishni o‘chiring» maslahatini rasmiy manbalar tasdiqlamaydi. Bunday tugmani izlab vaqt sarflamang. Quyidagi tasdiqlangan qadamlardan boshlang.</Notice>
      <h2 id="akkaunt-begona-qolga-otsa-balans">Akkaunt begona qo‘lga o‘tsa, balans, obuna va sovg‘alar bilan nima bo‘ladi?</h2>
      <p>Akkauntga kirib olgan odam ilovada siz bajaradigan amallarni bajara oladi. Qancha zarar ko‘rishingiz qaysi narsa qayerda turganiga bog‘liq.</p>
      <CompareTable
        headers={["Nima", "Xavf darajasi", "Sababi", "Oldindan nima qilish"]}
        rows={[
          ["Stars balansi", "Yuqori", "Balans akkauntda turadi, kirgan odam uni sarflashi mumkin", "Balansda kerakli miqdorni ushlash, 2FA"],
          ["Akkauntdagi kolleksion sovg‘alar", "Yuqori", "Ularni boshqa foydalanuvchiga o‘tkazish yoki NFT marketplace’da auksionga qo‘yish mumkin", "Eng qimmatini blokcheynga chiqarish"],
          ["Blokcheynga chiqarilgan sovg‘a", "Past", "Egalik akkauntga emas, TON hamyonga bog‘liq", "Hamyon tiklash so‘zlarini xavfsiz saqlash"],
          ["Premium obunasi", "O‘rta", "Obuna akkauntga ulangan, akkaunt qaytsa obuna ham shu yerda bo‘ladi", "2FA va himoyalangan tiklash email’i"],
          ["Chatlar va kontaktlar", "O‘rta", "Kirgan odam nomingizdan yozishi mumkin", "Yaqinlarni «kod va pul so‘ramayman» deb ogohlantirish"],
        ]}
      />
      <p>Kolleksion sovg‘alarni o‘tkazish va auksionga qo‘yish imkoni <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> qayd etilgan. Shuning uchun ular akkauntdagi eng zaif aktiv. Stars balansini akkauntdan alohida qulflaydigan rasmiy funksiya topilmadi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragmentda-kod-olish-tartibi-xavfni">Fragment’da kod olish tartibi xavfni qayerga ko‘chiradi?</h2>
      <p>Oddiy raqamda kirish kodi uyali operator orqali SMS bilan keladi. +888 egasi esa kodni SMS orqali emas, Fragment’ning o‘zida oladi. Kod so‘ralganda hamyonni Fragment’ga ulab, kerakli sahifaga o‘tish kerak (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>).</p>
      <p>Demak, xavf SIM kartadan hamyonga ko‘chadi. Hamyon kimning qo‘lida bo‘lsa, kirish kodini ham o‘sha ko‘radi. Misol: NFT bozorida tanishgan odam «hamyoningiz toza ekanini tekshiramiz» deb sayt yuboradi va u yerda tiklash so‘zlari so‘raladi. So‘zlarni kiritgan odam hamyon bilan birga Telegram akkauntini ham boy beradi.</p>
      <p>Yana bir faktni bilib qo‘ying: kolleksion raqam faqat Telegram’da ishlaydi. U bilan qo‘ng‘iroq qilib, SMS yuborib yoki boshqa xizmatlarda ro‘yxatdan o‘tib bo‘lmaydi. «Raqamingizga SMS kelgan bo‘lishi kerak» degan har qanday gap shuning o‘zi bilan fosh bo‘ladi.</p>
      <p>Hamyonga oid amaliy qoidalar:</p>
      <ul>
        <li>tiklash so‘zlarini qog‘ozda, internetga ulanmagan joyda saqlang, ekran suratiga olmang;</li>
        <li>+888 raqam turgan hamyonni airdrop, o‘yin va notanish dApp’larga ulamang;</li>
        <li>kundalik savdo uchun alohida hamyon oching, raqam turgan hamyonni faqat kod olishda ishlating.</li>
      </ul>
      <p>Raqamni yaqinda boshqa egadan olgan bo‘lsangiz, avval <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">auksiondan olingan raqamdagi eski akkaunt</Link> haqidagi maqolani ko‘rib chiqing.</p>
      <h2 id="2fa-888-akkauntga-ikkinchi-qulfni">2FA: +888 akkauntga ikkinchi qulfni qanday qo‘yish mumkin?</h2>
      <p>Hamyon himoyalangan bo‘lsa ham, ikkinchi qulf kerak. Ikki bosqichli tekshiruv yoqilgan akkauntga kirishda server alohida parol talab qiladi (<a href={"https://core.telegram.org/api/auth"} target="_blank" rel="noopener noreferrer">Telegram API hujjati</a>). Shunda faqat raqamning o‘zi kirish uchun yetarli bo‘lmaydi.</p>
      <Steps>
        <Step title={"Bo‘limni toping"}>Sozlamalar &gt; Maxfiylik va xavfsizlik &gt; Ikki bosqichli tekshiruv (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Parol tuzing"}>uzun bo‘lsin va boshqa hech qayerda ishlatilmagan bo‘lsin. Bir-biriga bog‘lanmagan 4–5 so‘zdan tuzilgan ibora qisqa va murakkab paroldan oson eslab qolinadi.</Step>
        <Step title={"Maslahat (hint) yozing"}>parolning o‘zini yoki uni ochib beradigan ishorani yozmang.</Step>
        <Step title={"Tiklash email’ini ulang"}>bu pochta ham kuchli parol va iloji bo‘lsa ikki bosqichli tekshiruv bilan himoyalangan bo‘lsin.</Step>
        <Step title={"Parolni saqlang"}>uni unutsangiz, boshqa qurilmalardan xabarlaringizga kira olmaysiz (<a href={"https://telegram.org/blog/sessions-and-2-step-verification"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</Step>
      </Steps>
      <p>Sozlangandan keyin parol har safar yangi qurilmadan kirilganda so‘raladi. Uni hech kimga aytmang: o‘zini Telegram, Fragment yoki bot yordamchisi deb tanishtirgan odamga ham. Batafsil: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA bilan akkauntni himoya qilish</Link>.</p>
      <h2 id="stars-zaxirasini-qanday-kichik-ushlash">Stars zaxirasini qanday kichik ushlash va Premium muddatini qanday tanlash kerak?</h2>
      <p>Stars’ni akkauntdan alohida himoyalash bo‘yicha rasmiy tavsiya yo‘q: balans akkaunt bilan birga turadi. Shuning uchun eng amaliy usul — balansni kichik ushlash. Yulduzni kerak bo‘lganda oling.</p>
      <p>Masalan, har hafta sevimli kanallaringizga <Link href="/blog/telegram-star-reaksiyalari">Star reaksiya</Link> qo‘yasiz deylik. Bunda bir oylik zaxira o‘rniga shu haftaga yetadigan miqdorni oling. Akkauntga kimdir kirib qolsa ham, oz miqdor xavf ostida qoladi. Bot buyurtmani odatda bir necha soniyada yetkazadi, eng kam buyurtma — 50 Stars. Narx to‘lov usuliga bog‘liq: karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</p>
      <p>Premium’ni zaxiraga olib bo‘lmaydi: faol obunasi bor akkauntga bot yangi buyurtma ochmaydi. Obuna tugaganidan keyin muddatni tanlang: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Qachon tugashini bilish uchun: <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">Premium tugash sanasini tekshirish</Link>.</p>
      <h3>Kolleksion sovg‘alar uchun qo‘shimcha yo‘l</h3>
      <p>Sovg‘ani blokcheynga ko‘chirish egasiga doimiy nazorat beradi, hatto u akkauntga kirishni yo‘qotsa yoki uni o‘chirsa ham. Buning uchun My Profile &gt; Gifts bo‘limida sovg‘ani tanlab, Transfer &gt; Send via Blockchain bosiladi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Shundan keyin egalik TON hamyonda qoladi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts hujjati</a>).</p>
      <p>Ikki narsani hisobga oling. Ba’zan sovg‘ani darhol o‘tkazib bo‘lmaydi va bir necha soniya yoki ko‘proq kutishga to‘g‘ri keladi. Ko‘chirilgandan keyin esa butun xavf hamyonga o‘tadi. Stars uchun bunday yo‘l yo‘q. Sovg‘alarni so‘mda olish haqida — <Link href="/gifts">sovg‘alar sahifasi</Link>.</p>
      <h2 id="kutilmagan-kirish-sorovidan-keyin-nimalarni">Kutilmagan kirish so‘rovidan keyin nimalarni tekshirish kerak?</h2>
      <p>Siz so‘ramagan kirish urinishini sezsangiz, bir necha daqiqa ajratib quyidagilarni ko‘rib chiqing:</p>
      <ul>
        <li>Stars balansi kutilmaganda kamaymaganmi? Balans qayerda ko‘rinishi haqida: <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link>.</li>
        <li>Premium belgisi profilingizda hali turibdimi?</li>
        <li>Profildagi sovg‘alar ro‘yxati to‘liqmi, siz qilmagan o‘tkazma yo‘qmi?</li>
        <li>Do‘stlaringizga nomingizdan g‘alati xabar ketmaganmi?</li>
        <li>Sozlamalardagi qurilmalar bo‘limida notanish qurilma ko‘rinmayaptimi? Bo‘limning aniq nomi ilova versiyasiga qarab farq qilishi mumkin.</li>
        <li>Raqam turgan hamyon qaysi sayt va dApp’larga ulangan?</li>
      </ul>
      <p>Hammasi joyida va 2FA yoqilgan bo‘lsa, vahimaga sabab kam. Kod so‘ralishining o‘zi kimdir akkauntga kirib bo‘lganini anglatmasligi mumkin, lekin parol va hamyon qulfi turgani ma’qul.</p>
      <h2 id="qaysi-xabarlar-akkauntni-olish-uchun">Qaysi xabarlar akkauntni olish uchun yozilgan bo‘ladi?</h2>
      <p>Hujum ko‘pincha texnik yo‘l bilan emas, suhbat orqali boshlanadi. Mana bir nechta namuna va ular nega yolg‘on:</p>
      <ul>
        <li><b>«+888 raqamingizga SMS kod yubordik, uni bizga ayting»</b> — kolleksion raqamga SMS kelmaydi, kod Fragment’da olinadi.</li>
        <li><b>«Fragment xavfsizlik bo‘limi: hamyoningizni qayta tasdiqlang»</b> havolasi bilan — tiklash so‘zlari so‘ralgan joy firibgarlarniki.</li>
        <li><b>«StarsPaymee yulduz va sovg‘alaringizni so‘mga sotib oladi, faqat kodni yuboring»</b> — StarsPaymee foydalanuvchidan Stars va sovg‘alarni sotib olmaydi.</li>
        <li><b>«Sizga Premium sovg‘a qildik, faollashtirish uchun kodni yuboring»</b> — Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi, kod kerak emas.</li>
        <li><b>Do‘st nomidan «shu havolada menga ovoz berib yubor»</b> — do‘stingiz akkauntini allaqachon yo‘qotgan bo‘lishi mumkin. Unga boshqa yo‘l bilan qo‘ng‘iroq qilib aniqlang.</li>
      </ul>
      <p>Nomingizdan xabar ketganini sezsangiz, <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">nomimdan xabar yuborilyapti</Link> maqolasidagi tartib yordam beradi.</p>
      <h2 id="starspaymeedan-xarid-qilganda-888-kodingiz">StarsPaymee’dan xarid qilganda +888 kodingiz nega kerak bo‘lmaydi?</h2>
      <p>@StarsPaymee_bot buyurtma uchun faqat @username so‘raydi. Parol, kirish kodi, Fragment hamyoni yoki akkauntga kirish talab qilinmaydi.</p>
      <ul>
        <li>Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. +888 raqam bu jarayonda ishtirok etmaydi.</li>
        <li>To‘lov so‘mda: Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</li>
        <li>Faol Premium bor akkauntga yangi buyurtma ochilmaydi, muddat faol obuna ustiga qo‘shilmaydi.</li>
      </ul>
      <Notice label={"Muhim"}>Sizdan «tasdiqlash kodi» so‘ragan har qanday «sotuvchi» firibgardir. Yordam faqat <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali beriladi. Narx va buyurtma: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link>.</Notice>
      <p>StarsPaymee mustaqil xizmat, Telegram bilan hamkorlikni da’vo qilmaydi. Bot va support username’ini har safar harfma-harf solishtiring: firibgarlar bir harfi farq qiladigan nomlar ochadi.</p>
      <h2 id="akkauntni-boshqa-odam-boshqarayotganini-sezsangiz">Akkauntni boshqa odam boshqarayotganini sezsangiz, nima qilish kerak?</h2>
      <Steps>
        <Step title={"Hamyonga kiring"}>boshqa, ishonchli qurilmadan hamyonni oching. U sizda bo‘lsa, Fragment orqali yangi kod oling va akkauntga qayta kiring.</Step>
        <Step title={"Parolni almashtiring"}>ikki bosqichli parolni yangilang. Agar u hali yoqilmagan bo‘lsa, kirishingiz bilan yoqing.</Step>
        <Step title={"Begona qurilmalarni chiqaring"}>sozlamalardagi qurilmalar bo‘limida sizniki bo‘lmagan seanslarni yoping.</Step>
        <Step title={"Qolgan qimmat sovg‘ani himoyalang"}>uni hamyonga chiqarishni ko‘rib chiqing.</Step>
        <Step title={"Yaqinlarni ogohlantiring"}>nomingizdan pul, kod yoki Stars so‘ralsa, javob bermasliklarini ayting.</Step>
      </Steps>
      <p>Begona odam akkaunt ichida sarflagan Stars bot xaridining nosozligi hisoblanmaydi, bu Telegram ichidagi amal. Qaytarish bo‘yicha umumiy qoidalar <Link href="/blog/telegram-stars-qaytarib-olish">Stars qaytarish</Link> maqolasida. Aniq holatingizni support’da so‘rang.</p>
      <p>Hamyon ham qo‘ldan ketgan bo‘lsa, vaziyat jiddiy: kalit begona odamda. Bunda 2FA paroli va himoyalangan tiklash email’i oxirgi to‘siq bo‘lib qoladi. Ularni hujumdan oldin sozlash kerakligi ham shundan.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/sessions-and-2-step-verification", label: "Active Sessions and Two-Step Verification" },
          { href: "https://core.telegram.org/api/auth", label: "User Authorization" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Kirish so‘rovlari to‘xtamayapti. +888 raqamdan voz kechishim kerakmi?", answer: "Bunga shoshilmang. Hamyon sizda bo‘lsa va 2FA paroli yoqilgan bo‘lsa, faqat so‘rovning o‘zi bilan akkauntga kirib bo‘lmaydi." },
  { question: "2FA yoqqanimdan keyin ham kodni Fragment’dan olaveramanmi?", answer: "Ha, kod olish tartibi o‘zgarmaydi. Yangi qurilmadan kirishda kodga qo‘shimcha ravishda siz o‘ylab topgan parol ham so‘raladi." },
  { question: "Fragment’ga ulangan hamyonni yo‘qotsam, akkauntga qayta kira olamanmi?", answer: "Avval hamyonni tiklash so‘zlari bilan qayta oching va hozir ochiq turgan seansdan chiqmang. Hamyonsiz kirishning boshqa yo‘li bu maqolada tasdiqlanmagan." },
  { question: "Akkauntimga kirgan odam Stars balansim bilan nima qila oladi?", answer: "U siz bajaradigan amallarni bajarib, yulduzlarni sarflashi mumkin. Balansni alohida qulflash funksiyasi topilmagani uchun oz miqdor saqlash xavfni kamaytiradi." },
  { question: "Akkaunt o‘g‘irlansa, Premium obunam ham ketadimi?", answer: "Obuna akkauntga ulangan, akkauntni qaytarsangiz Premium ham o‘sha yerda bo‘ladi. Uni boshqa akkauntga ko‘chirish yo‘li bu maqolada tasdiqlanmagan." },
  { question: "Bir martada ko‘p Stars olib qo‘ysam yomonmi?", answer: "2FA yoqilmagan bo‘lsa, butun zaxira bir vaqtda xavf ostida qoladi. Botda 50 Stars’dan boshlab kerakli paytda olish mumkin, shuning uchun katta zaxira shart emas." },
  { question: "Botga username’imni berdim. Kimdir u orqali akkauntimga kira oladimi?", answer: "Yo‘q. Username ochiq ma’lumot, kirish uchun esa Fragment’dagi kod va 2FA paroli kerak bo‘ladi." },
  { question: "2FA parolini qayerda saqlagan ma’qul?", answer: "Telefondagi ochiq eslatmada emas, parol menejerida yoki qog‘ozda, xavfsiz joyda saqlang. Unutilgan parol boshqa qurilmadan xabarlarga kirishni yopib qo‘yadi." },
  { question: "Kompyuterdagi Telegram’dan chiqib ketsam, qayta kirishda nima so‘raladi?", answer: "Fragment’da olinadigan kirish kodi so‘raladi, 2FA yoqilgan bo‘lsa — parol ham. Shuning uchun chiqishdan oldin hamyonga kira olishingizni tekshirib qo‘ying." },
  { question: "O‘zini StarsPaymee yordamchisi deb tanishtirgan odam kod so‘rayapti. Nima qilay?", answer: "Hech narsa yubormang va suhbatni bloklang. Haqiqiy yordam faqat @StarsPaymeeSupport’da beriladi, buyurtma uchun esa @username’dan boshqa narsa so‘ralmaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, баланс Stars и Premium можно сохранить. Для этого включите двухэтапную аутентификацию (облачный пароль) и никому не доверяйте кошелёк, подключённый к Fragment. Код входа для номера +888 приходит не по SMS, а через Fragment, поэтому кошелёк — это ключ от аккаунта. При покупке Stars или Premium в @StarsPaymee_bot не нужны ни код, ни пароль, ни кошелёк — только @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#ommaviy-kirish-sorovlari-haqidagi-gaplar", label: "Насколько обоснованы разговоры о массовых попытках входа?" },
          { href: "#akkaunt-begona-qolga-otsa-balans", label: "Что будет с балансом, подпиской и подарками, если аккаунт попадёт в чужие руки?" },
          { href: "#fragmentda-kod-olish-tartibi-xavfni", label: "Куда смещается риск из-за получения кода через Fragment?" },
          { href: "#2fa-888-akkauntga-ikkinchi-qulfni", label: "2FA: как поставить второй замок на аккаунт +888?" },
          { href: "#stars-zaxirasini-qanday-kichik-ushlash", label: "Как держать запас Stars небольшим и какой срок Premium выбрать?" },
          { href: "#kutilmagan-kirish-sorovidan-keyin-nimalarni", label: "Что проверить после неожиданного запроса на вход?" },
          { href: "#qaysi-xabarlar-akkauntni-olish-uchun", label: "Какие сообщения пишут, чтобы увести аккаунт?" },
          { href: "#starspaymeedan-xarid-qilganda-888-kodingiz", label: "Почему при покупке в StarsPaymee ваш код +888 не нужен?" },
          { href: "#akkauntni-boshqa-odam-boshqarayotganini-sezsangiz", label: "Что делать, если аккаунтом управляет кто-то другой?" },
        ]}
      />
      <h2 id="ommaviy-kirish-sorovlari-haqidagi-gaplar">Насколько обоснованы разговоры о массовых попытках входа?</h2>
      <p>В некоторых Telegram-каналах разошёлся пост о том, что владельцам +888 массово приходят запросы на авторизацию. В нём говорится о переборе кодов через «фермы» и о пострадавших. Официального подтверждения этому нет: ни Telegram, ни Fragment заявлений о таких атаках не делали.</p>
      <p>О номерах +888 в официальных источниках сказано следующее:</p>
      <ul>
        <li>В конце 2022 года Telegram выпустил ограниченную серию виртуальных номеров как коллекционные объекты в блокчейне TON (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>).</li>
        <li>Все 136 566 номеров были распроданы в декабре 2022 года. Сейчас купить их можно только у действующего владельца (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment: номера</a>).</li>
        <li>С таким номером можно завести аккаунт Telegram без SIM-карты (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</li>
      </ul>
      <p>Правдив пост или преувеличен, меры защиты одни и те же. Лучше настроить их сегодня, не дожидаясь новостей об атаке.</p>
      <Notice label={"Важно"}>Совет из поста «отключите приём кодов авторизации» официальными источниками не подтверждается. Не тратьте время на поиски такой кнопки — начните с проверенных шагов ниже.</Notice>
      <h2 id="akkaunt-begona-qolga-otsa-balans">Что будет с балансом, подпиской и подарками, если аккаунт попадёт в чужие руки?</h2>
      <p>Тот, кто вошёл в аккаунт, может делать в приложении всё то же, что и вы. Размер ущерба зависит от того, что и где у вас хранится.</p>
      <CompareTable
        headers={["Что", "Уровень риска", "Почему", "Что сделать заранее"]}
        rows={[
          ["Баланс Stars", "Высокий", "Баланс хранится в аккаунте, вошедший может его потратить", "Держать на балансе только нужное, включить 2FA"],
          ["Коллекционные подарки в аккаунте", "Высокий", "Их можно передать другому пользователю или выставить на аукцион на NFT-маркетплейсе", "Самые ценные вывести в блокчейн"],
          ["Подарок, выведенный в блокчейн", "Низкий", "Владение привязано не к аккаунту, а к TON-кошельку", "Надёжно хранить фразу восстановления кошелька"],
          ["Подписка Premium", "Средний", "Подписка привязана к аккаунту: вернёте аккаунт — вернётся и она", "2FA и защищённая почта для восстановления"],
          ["Чаты и контакты", "Средний", "Злоумышленник может писать от вашего имени", "Предупредить близких: «я не прошу коды и деньги»"],
        ]}
      />
      <p>Возможность передавать коллекционные подарки и выставлять их на аукцион описана в <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">блоге Telegram</a>. Поэтому они — самый уязвимый актив в аккаунте. Официальной функции, которая отдельно блокирует баланс Stars, найти не удалось.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragmentda-kod-olish-tartibi-xavfni">Куда смещается риск из-за получения кода через Fragment?</h2>
      <p>На обычный номер код входа приходит по SMS через мобильного оператора. Владелец +888 получает код не по SMS, а прямо на Fragment. Когда приложение запрашивает код, нужно подключить кошелёк к Fragment и открыть соответствующую страницу (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>).</p>
      <p>То есть риск переходит с SIM-карты на кошелёк. У кого кошелёк, тот и видит код входа. Пример: знакомый с NFT-рынка присылает сайт «проверить, что кошелёк чистый», а там просят фразу восстановления. Кто её введёт, потеряет и кошелёк, и аккаунт Telegram.</p>
      <p>Ещё один факт: коллекционный номер работает только в Telegram. С него нельзя звонить, отправлять SMS или регистрироваться в других сервисах. Любая фраза вроде «вам должно было прийти SMS на номер» разоблачает себя сама.</p>
      <p>Практические правила для кошелька:</p>
      <ul>
        <li>храните фразу восстановления на бумаге, вне интернета, не делайте скриншотов;</li>
        <li>не подключайте кошелёк с номером +888 к аирдропам, играм и незнакомым dApp;</li>
        <li>для повседневной торговли заведите отдельный кошелёк, а кошелёк с номером используйте только для получения кода.</li>
      </ul>
      <p>Если вы недавно купили номер у другого владельца, сначала прочитайте статью о <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">старом аккаунте на номере с аукциона</Link>.</p>
      <h2 id="2fa-888-akkauntga-ikkinchi-qulfni">2FA: как поставить второй замок на аккаунт +888?</h2>
      <p>Даже при защищённом кошельке нужен второй замок. Если включена двухэтапная аутентификация, сервер при входе требует отдельный пароль (<a href={"https://core.telegram.org/api/auth"} target="_blank" rel="noopener noreferrer">документация Telegram API</a>). Тогда одного номера для входа недостаточно.</p>
      <Steps>
        <Step title={"Найдите раздел"}>Настройки &gt; Конфиденциальность &gt; Облачный пароль; в английском интерфейсе — Settings &gt; Privacy and Security &gt; 2-Step Verification (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Придумайте пароль"}>длинный и нигде больше не используемый. Фразу из 4–5 не связанных между собой слов запомнить проще, чем короткий сложный пароль.</Step>
        <Step title={"Добавьте подсказку"}>не пишите в ней сам пароль или намёк, который его выдаёт.</Step>
        <Step title={"Привяжите почту для восстановления"}>она тоже должна быть защищена надёжным паролем и, по возможности, двухэтапной проверкой.</Step>
        <Step title={"Сохраните пароль"}>если забудете его, не сможете открыть свои сообщения с других устройств (<a href={"https://telegram.org/blog/sessions-and-2-step-verification"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</Step>
      </Steps>
      <p>После настройки пароль будут спрашивать при каждом входе с нового устройства. Никому его не сообщайте — даже тем, кто представляется сотрудником Telegram, Fragment или поддержки бота. Подробнее: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита аккаунта с помощью 2FA</Link>.</p>
      <h2 id="stars-zaxirasini-qanday-kichik-ushlash">Как держать запас Stars небольшим и какой срок Premium выбрать?</h2>
      <p>Официальных рекомендаций по отдельной защите Stars нет: баланс живёт вместе с аккаунтом. Поэтому самый практичный способ — держать баланс небольшим и покупать звёзды по мере надобности.</p>
      <p>Допустим, каждую неделю вы ставите <Link href="/blog/telegram-star-reaksiyalari">Star-реакции</Link> любимым каналам. Вместо запаса на месяц берите объём на текущую неделю. Даже если кто-то попадёт в аккаунт, под угрозой окажется немного. Бот обычно выполняет заказ за несколько секунд, минимальный заказ — 50 Stars. Цена зависит от способа оплаты: переводом на карту (UzCard/HUMO) или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</p>
      <p>Premium впрок не купишь: на аккаунт с активной подпиской бот новый заказ не откроет. Срок выбирайте после окончания подписки: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Когда она заканчивается, подскажет статья <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">как проверить дату окончания Premium</Link>.</p>
      <h3>Дополнительный вариант для коллекционных подарков</h3>
      <p>Перенос подарка в блокчейн даёт владельцу постоянный контроль — даже если он потеряет доступ к аккаунту или удалит его. Для этого в разделе My Profile &gt; Gifts выберите подарок и нажмите Transfer &gt; Send via Blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). После этого владение остаётся за TON-кошельком (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документация Telegram Gifts</a>).</p>
      <p>Учтите две вещи. Иногда подарок нельзя передать сразу — придётся подождать несколько секунд или дольше. А после переноса весь риск переходит на кошелёк. Для Stars такого пути нет. О покупке подарков за сумы — на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="kutilmagan-kirish-sorovidan-keyin-nimalarni">Что проверить после неожиданного запроса на вход?</h2>
      <p>Если заметили попытку входа, которую не инициировали, уделите несколько минут проверке:</p>
      <ul>
        <li>Не уменьшился ли неожиданно баланс Stars? Где его смотреть: <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</li>
        <li>На месте ли значок Premium в профиле?</li>
        <li>Полон ли список подарков в профиле, нет ли передач, которых вы не делали?</li>
        <li>Не уходили ли друзьям странные сообщения от вашего имени?</li>
        <li>Нет ли незнакомых устройств в соответствующем разделе настроек? Точное название раздела может отличаться в зависимости от версии приложения.</li>
        <li>К каким сайтам и dApp подключён кошелёк с номером?</li>
      </ul>
      <p>Если всё в порядке и 2FA включена, поводов для паники мало. Сам по себе запрос кода может и не означать, что кто-то уже вошёл, но пароль и защищённый кошелёк лучше иметь в любом случае.</p>
      <h2 id="qaysi-xabarlar-akkauntni-olish-uchun">Какие сообщения пишут, чтобы увести аккаунт?</h2>
      <p>Атака часто начинается не с техники, а с переписки. Несколько примеров и почему они лживы:</p>
      <ul>
        <li><b>«Мы отправили SMS-код на ваш +888, назовите его нам»</b> — на коллекционный номер SMS не приходят, код получают на Fragment.</li>
        <li><b>«Служба безопасности Fragment: подтвердите кошелёк повторно»</b> со ссылкой — место, где просят фразу восстановления, принадлежит мошенникам.</li>
        <li><b>«StarsPaymee купит ваши звёзды и подарки за сумы, пришлите только код»</b> — StarsPaymee не покупает Stars и подарки у пользователей.</li>
        <li><b>«Мы подарили вам Premium, для активации пришлите код»</b> — Premium подключается по username через механизм подарков Telegram, код не нужен.</li>
        <li><b>От имени друга: «проголосуй за меня по этой ссылке»</b> — возможно, друг уже потерял аккаунт. Позвоните ему другим способом и уточните.</li>
      </ul>
      <p>Если заметили, что от вашего имени уходят сообщения, поможет порядок действий из статьи <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">от моего имени отправляются сообщения</Link>.</p>
      <h2 id="starspaymeedan-xarid-qilganda-888-kodingiz">Почему при покупке в StarsPaymee ваш код +888 не нужен?</h2>
      <p>Для заказа @StarsPaymee_bot запрашивает только @username. Пароль, код входа, кошелёк Fragment или доступ к аккаунту не требуются.</p>
      <ul>
        <li>Premium подключается по username через механизм подарков Telegram. Номер +888 в этом процессе не участвует.</li>
        <li>Оплата в сумах: Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота. Международная карта, криптокошелёк или VPN не нужны.</li>
        <li>На аккаунт с активным Premium новый заказ не открывается, срок поверх действующей подписки не добавляется.</li>
      </ul>
      <Notice label={"Важно"}>Любой «продавец», который просит у вас «код подтверждения», — мошенник. Помощь оказывается только через <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Цены и заказ: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link>.</Notice>
      <p>StarsPaymee — независимый сервис и не заявляет о партнёрстве с Telegram. Каждый раз сверяйте username бота и поддержки буква в букву: мошенники создают аккаунты с именами, отличающимися одним символом.</p>
      <h2 id="akkauntni-boshqa-odam-boshqarayotganini-sezsangiz">Что делать, если аккаунтом управляет кто-то другой?</h2>
      <Steps>
        <Step title={"Откройте кошелёк"}>зайдите в него с другого, надёжного устройства. Если доступ у вас, получите новый код через Fragment и снова войдите в аккаунт.</Step>
        <Step title={"Смените пароль"}>обновите облачный пароль. Если он ещё не был включён, включите сразу после входа.</Step>
        <Step title={"Завершите чужие сеансы"}>в разделе устройств в настройках закройте сеансы, которые вам не принадлежат.</Step>
        <Step title={"Защитите оставшиеся ценные подарки"}>подумайте о выводе их в кошелёк.</Step>
        <Step title={"Предупредите близких"}>если от вашего имени просят деньги, коды или Stars, пусть не отвечают.</Step>
      </Steps>
      <p>Stars, которые посторонний потратил внутри аккаунта, не считаются сбоем покупки в боте — это действие внутри Telegram. Общие правила возврата — в статье <Link href="/blog/telegram-stars-qaytarib-olish">возврат Stars</Link>. О вашем конкретном случае спросите в поддержке.</p>
      <p>Если потерян и кошелёк, ситуация серьёзная: ключ у постороннего. Тогда последним барьером остаются облачный пароль и защищённая почта для восстановления. Именно поэтому их нужно настроить до атаки.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/sessions-and-2-step-verification", label: "Active Sessions and Two-Step Verification" },
          { href: "https://core.telegram.org/api/auth", label: "User Authorization" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Запросы на вход не прекращаются. Может, отказаться от номера +888?", answer: "Не торопитесь. Если кошелёк у вас и облачный пароль включён, один лишь запрос не позволит войти в аккаунт." },
  { question: "После включения 2FA код всё так же получать на Fragment?", answer: "Да, порядок получения кода не меняется. При входе с нового устройства к коду добавится ещё и придуманный вами пароль." },
  { question: "Если потеряю кошелёк, подключённый к Fragment, смогу снова войти в аккаунт?", answer: "Сначала восстановите кошелёк по фразе восстановления и не выходите из текущего открытого сеанса. Другой способ входа без кошелька в этой статье не подтверждён." },
  { question: "Что сможет сделать с моим балансом Stars тот, кто вошёл в аккаунт?", answer: "Он может выполнять те же действия, что и вы, и потратить звёзды. Отдельной блокировки баланса не нашлось, поэтому небольшой запас снижает риск." },
  { question: "Если аккаунт украдут, пропадёт ли подписка Premium?", answer: "Подписка привязана к аккаунту: вернёте его — Premium будет там же. Способ перенести её на другой аккаунт в этой статье не подтверждён." },
  { question: "Плохо ли покупать много Stars за раз?", answer: "Без 2FA весь запас разом оказывается под угрозой. В боте можно брать от 50 Stars в нужный момент, так что большой запас не обязателен." },
  { question: "Я дал боту свой username. Можно ли через него войти в мой аккаунт?", answer: "Нет. Username — открытая информация, а для входа нужны код с Fragment и облачный пароль." },
  { question: "Где лучше хранить облачный пароль?", answer: "Не в открытой заметке на телефоне, а в менеджере паролей или на бумаге в надёжном месте. Забытый пароль закроет доступ к сообщениям с других устройств." },
  { question: "Если выйду из Telegram на компьютере, что спросят при повторном входе?", answer: "Код входа с Fragment, а при включённой 2FA — ещё и пароль. Поэтому перед выходом убедитесь, что у вас есть доступ к кошельку." },
  { question: "Человек представляется помощником StarsPaymee и просит код. Что делать?", answer: "Ничего не отправляйте и заблокируйте собеседника. Настоящая помощь — только в @StarsPaymeeSupport, а для заказа не просят ничего, кроме @username." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can keep your Stars balance and Premium safe. Turn on a Two-Step Verification password and never trust anyone with the wallet connected to Fragment. Login codes for a +888 number don’t arrive by SMS. You get them on Fragment, so the wallet is the key to your account. Buying Stars or Premium from @StarsPaymee_bot never requires a code, password or wallet, only your @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#ommaviy-kirish-sorovlari-haqidagi-gaplar", label: "How credible are the reports of mass login requests?" },
          { href: "#akkaunt-begona-qolga-otsa-balans", label: "What happens to your balance, subscription and gifts if someone takes over the account?" },
          { href: "#fragmentda-kod-olish-tartibi-xavfni", label: "How does getting codes on Fragment shift the risk?" },
          { href: "#2fa-888-akkauntga-ikkinchi-qulfni", label: "2FA: how do you add a second lock to a +888 account?" },
          { href: "#stars-zaxirasini-qanday-kichik-ushlash", label: "How do you keep a small Stars reserve and pick the right Premium term?" },
          { href: "#kutilmagan-kirish-sorovidan-keyin-nimalarni", label: "What should you check after an unexpected login request?" },
          { href: "#qaysi-xabarlar-akkauntni-olish-uchun", label: "Which messages are written to steal your account?" },
          { href: "#starspaymeedan-xarid-qilganda-888-kodingiz", label: "Why doesn’t StarsPaymee need your +888 code when you buy?" },
          { href: "#akkauntni-boshqa-odam-boshqarayotganini-sezsangiz", label: "What should you do if you suspect someone else is controlling your account?" },
        ]}
      />
      <h2 id="ommaviy-kirish-sorovlari-haqidagi-gaplar">How credible are the reports of mass login requests?</h2>
      <p>A post has been circulating in some Telegram channels claiming that +888 owners are receiving mass authorization requests. It says “farms” are brute-forcing accounts and that some people have already been hit. These claims are not officially confirmed: neither Telegram nor Fragment has made any statement about such attacks.</p>
      <p>Here is what official sources do say about +888 numbers:</p>
      <ul>
        <li>In late 2022, Telegram released a limited run of virtual phone numbers as collectibles on the TON blockchain (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About Fragment</a>).</li>
        <li>All 136 566 numbers sold out in December 2022. Today you can only buy one from an existing owner (<a href={"https://fragment.com/numbers"} target="_blank" rel="noopener noreferrer">Fragment: numbers</a>).</li>
        <li>With such a number you can open a Telegram account without a SIM card (<a href={"https://telegram.org/blog/ultimate-privacy-topics-2-0"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
      </ul>
      <p>Whether the post is true or exaggerated, the protective steps are the same. It makes sense to set them up today rather than wait for news of an attack.</p>
      <Notice label={"Important"}>The post’s advice to “turn off receiving authorization codes” is not confirmed by official sources. Don’t waste time hunting for such a switch. Start with the verified steps below.</Notice>
      <h2 id="akkaunt-begona-qolga-otsa-balans">What happens to your balance, subscription and gifts if someone takes over the account?</h2>
      <p>Anyone who gets into your account can do everything you can do in the app. How much you stand to lose depends on what is stored where.</p>
      <CompareTable
        headers={["What", "Risk level", "Why", "What to do in advance"]}
        rows={[
          ["Stars balance", "High", "The balance lives in the account, and whoever logs in can spend it", "Keep only what you need, enable 2FA"],
          ["Collectible gifts in the account", "High", "They can be transferred to another user or auctioned on NFT marketplaces", "Move the most valuable ones to the blockchain"],
          ["Gift moved to the blockchain", "Low", "Ownership is tied to a TON wallet, not the account", "Store the wallet’s recovery phrase safely"],
          ["Premium subscription", "Medium", "The subscription is tied to the account; if you get the account back, Premium is still there", "2FA and a protected recovery email"],
          ["Chats and contacts", "Medium", "The intruder can message people in your name", "Tell family and friends “I never ask for codes or money”"],
        ]}
      />
      <p>The ability to transfer and auction collectible gifts is described on the <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>. That makes them the most exposed asset in the account. No official feature was found that locks the Stars balance separately from the account.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragmentda-kod-olish-tartibi-xavfni">How does getting codes on Fragment shift the risk?</h2>
      <p>With a regular number, the login code arrives by SMS through your mobile carrier. A +888 owner gets the code on Fragment itself, not via SMS. When a code is requested, you connect your wallet to Fragment and open the relevant page (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About Fragment</a>).</p>
      <p>So the risk moves from the SIM card to the wallet. Whoever controls the wallet sees the login code. Example: someone you met on an NFT marketplace sends a site to “check that your wallet is clean”, and that site asks for your recovery phrase. Enter it, and you lose the Telegram account along with the wallet.</p>
      <p>One more fact worth knowing: a collectible number only works on Telegram. You can’t make calls, send SMS or sign up for other services with it. That alone exposes any message claiming “you should have received an SMS on your number”.</p>
      <p>Practical wallet rules:</p>
      <ul>
        <li>keep the recovery phrase on paper, somewhere offline, and never screenshot it;</li>
        <li>don’t connect the wallet holding your +888 number to airdrops, games or unfamiliar dApps;</li>
        <li>open a separate wallet for everyday trading and use the one holding the number only to receive codes.</li>
      </ul>
      <p>If you recently bought the number from another owner, first read our article on <Link href="/blog/auksiondan-olingan-raqamda-telegram-akkaunt">an old account tied to a number bought at auction</Link>.</p>
      <h2 id="2fa-888-akkauntga-ikkinchi-qulfni">2FA: how do you add a second lock to a +888 account?</h2>
      <p>Even with a well-protected wallet, you need a second lock. When Two-Step Verification is on, the server asks for a separate password at login (<a href={"https://core.telegram.org/api/auth"} target="_blank" rel="noopener noreferrer">Telegram API docs</a>). That way the number alone is not enough to get in.</p>
      <Steps>
        <Step title={"Find the setting"}>Settings &gt; Privacy and Security &gt; 2-Step Verification (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</Step>
        <Step title={"Create a password"}>make it long and unused anywhere else. A phrase of 4–5 unrelated words is easier to remember than a short, complex password.</Step>
        <Step title={"Write a hint"}>don’t write the password itself or anything that gives it away.</Step>
        <Step title={"Add a recovery email"}>that mailbox should also have a strong password and, where possible, Two-Step Verification.</Step>
        <Step title={"Keep the password safe"}>if you forget it, you won’t be able to access your messages from other devices (<a href={"https://telegram.org/blog/sessions-and-2-step-verification"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</Step>
      </Steps>
      <p>Once set up, the password is required every time you log in from a new device. Never share it, not even with someone who claims to be Telegram, Fragment or bot support. More details: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account with 2FA</Link>.</p>
      <h2 id="stars-zaxirasini-qanday-kichik-ushlash">How do you keep a small Stars reserve and pick the right Premium term?</h2>
      <p>There is no official advice on protecting Stars separately from the account: the balance sits with the account. So the most practical approach is to keep the balance small and buy Stars when you need them.</p>
      <p>Say you leave <Link href="/blog/telegram-star-reaksiyalari">Star reactions</Link> on your favourite channels every week. Instead of a month’s supply, buy just enough for that week. If someone does get into the account, only a small amount is at risk. The bot usually delivers an order within a few seconds, and the minimum order is 50 Stars. The price depends on the payment method: {som(STARS_PER_UNIT_UZS, "en")} by card transfer (UzCard/HUMO) or from your bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet.</p>
      <p>Premium can’t be stocked up: the bot won’t open a new order for an account with an active subscription. Choose your term once the current one ends: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. To find out when yours expires, see <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">checking your Premium end date</Link>.</p>
      <h3>An extra option for collectible gifts</h3>
      <p>Moving a gift to the blockchain gives its owner permanent control, even if they lose access to or delete their Telegram account. To do it, go to My Profile &gt; Gifts, tap the gift and select Transfer &gt; Send via Blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). After that, ownership stays with the TON wallet (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts docs</a>).</p>
      <p>Keep two things in mind. Sometimes a gift can’t be transferred right away, and you’ll have to wait a few seconds or longer. And once it’s moved, all the risk shifts to the wallet. There’s no equivalent option for Stars. To buy gifts in so‘m, see the <Link href="/gifts">gifts page</Link>.</p>
      <h2 id="kutilmagan-kirish-sorovidan-keyin-nimalarni">What should you check after an unexpected login request?</h2>
      <p>If you notice a login attempt you didn’t make, take a few minutes to go through this list:</p>
      <ul>
        <li>Has your Stars balance dropped unexpectedly? Where to find it: <Link href="/blog/telegram-stars-balansini-tekshirish">checking your Stars balance</Link>.</li>
        <li>Is the Premium badge still on your profile?</li>
        <li>Is your gift list complete, with no transfers you didn’t make?</li>
        <li>Have any strange messages gone out to friends in your name?</li>
        <li>Is there an unfamiliar device in the devices section of Settings? The exact name of this section may differ depending on the app version.</li>
        <li>Which sites and dApps is the wallet holding your number connected to?</li>
      </ul>
      <p>If everything looks fine and 2FA is on, there is little reason to panic. A code request on its own may not mean anyone has actually got in, but it’s better to have both the password and the wallet lock in place.</p>
      <h2 id="qaysi-xabarlar-akkauntni-olish-uchun">Which messages are written to steal your account?</h2>
      <p>Attacks usually start with a conversation, not a technical exploit. Here are some examples and why they’re false:</p>
      <ul>
        <li><b>“We sent an SMS code to your +888 number, tell us what it is”</b> — collectible numbers don’t receive SMS; the code is obtained on Fragment.</li>
        <li><b>“Fragment security team: please re-verify your wallet”</b> with a link — any page asking for your recovery phrase belongs to scammers.</li>
        <li><b>“StarsPaymee will buy your Stars and gifts for so‘m, just send the code”</b> — StarsPaymee does not buy Stars or gifts from users.</li>
        <li><b>“We gifted you Premium, send the code to activate it”</b> — Premium is activated via your username through Telegram’s gift mechanism; no code is needed.</li>
        <li><b>A friend writes “vote for me at this link”</b> — your friend may have already lost their account. Call them some other way to check.</li>
      </ul>
      <p>If you notice messages going out in your name, the steps in <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">someone is sending messages from my account</Link> will help.</p>
      <h2 id="starspaymeedan-xarid-qilganda-888-kodingiz">Why doesn’t StarsPaymee need your +888 code when you buy?</h2>
      <p>@StarsPaymee_bot asks only for an @username to place an order. No password, login code, Fragment wallet or account access is required.</p>
      <ul>
        <li>Premium is activated via your username through Telegram’s gift mechanism. The +888 number plays no part in the process.</li>
        <li>Payment is in so‘m: Click, Payme, Uzum, Paynet (in the app or with cash at a terminal), card transfer to UzCard/HUMO, or your bot balance. No international card, crypto wallet or VPN needed.</li>
        <li>No new order is opened for an account with active Premium, and the term is not added on top of an active subscription.</li>
      </ul>
      <Notice label={"Important"}>Any “seller” who asks you for a “verification code” is a scammer. Support is provided only through <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Prices and orders: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link>.</Notice>
      <p>StarsPaymee is an independent service and does not claim any partnership with Telegram. Check the bot and support usernames letter by letter every time: scammers create names that differ by a single character.</p>
      <h2 id="akkauntni-boshqa-odam-boshqarayotganini-sezsangiz">What should you do if you suspect someone else is controlling your account?</h2>
      <Steps>
        <Step title={"Open your wallet"}>use a different, trusted device. If the wallet is still yours, get a new code via Fragment and log back into the account.</Step>
        <Step title={"Change the password"}>update your Two-Step Verification password. If it wasn’t enabled yet, turn it on as soon as you’re back in.</Step>
        <Step title={"Remove unknown devices"}>in the devices section of Settings, end any sessions that aren’t yours.</Step>
        <Step title={"Secure your remaining valuable gifts"}>consider moving them to your wallet.</Step>
        <Step title={"Warn people close to you"}>tell them not to respond if someone asks for money, codes or Stars in your name.</Step>
      </Steps>
      <p>Stars spent by an intruder inside your account don’t count as a fault with a bot purchase; it’s an action within Telegram. General refund rules are covered in <Link href="/blog/telegram-stars-qaytarib-olish">getting Stars refunded</Link>. Ask support about your specific case.</p>
      <p>If the wallet is also gone, the situation is serious: the key is in someone else’s hands. At that point, the 2FA password and a protected recovery email are your last line of defence. That’s exactly why they need to be set up before any attack.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/numbers", label: "Buy and Sell Collectible Numbers" },
          { href: "https://telegram.org/blog/ultimate-privacy-topics-2-0", label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/sessions-and-2-step-verification", label: "Active Sessions and Two-Step Verification" },
          { href: "https://core.telegram.org/api/auth", label: "User Authorization" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "The login requests won’t stop. Should I give up my +888 number?", answer: "Don’t rush. As long as the wallet is yours and the 2FA password is on, a request by itself can’t get anyone into the account." },
  { question: "Will I still get my code from Fragment after turning on 2FA?", answer: "Yes, the way you receive codes stays the same. When logging in from a new device, you’ll also be asked for the password you created, on top of the code." },
  { question: "If I lose the wallet connected to Fragment, can I get back into my account?", answer: "First restore the wallet with its recovery phrase, and don’t log out of any session that’s currently open. Any other way in without the wallet is not confirmed in this article." },
  { question: "What can someone who gets into my account do with my Stars?", answer: "They can do anything you can, including spending your Stars. Since no feature to lock the balance separately was found, keeping only a small amount reduces the risk." },
  { question: "If my account is stolen, do I lose my Premium subscription too?", answer: "The subscription is tied to the account, so if you recover the account, Premium will still be there. A way to move it to another account is not confirmed in this article." },
  { question: "Is it a bad idea to buy a lot of Stars at once?", answer: "Without 2FA, your whole reserve is exposed at the same moment. The bot lets you buy from 50 Stars whenever you need them, so a large stockpile isn’t necessary." },
  { question: "I gave my username to the bot. Can someone use it to get into my account?", answer: "No. A username is public information, while logging in requires the code from Fragment and your 2FA password." },
  { question: "Where is the best place to keep my 2FA password?", answer: "Not in an open note on your phone. Use a password manager or a piece of paper kept somewhere safe, because a forgotten password locks you out of your messages on other devices." },
  { question: "If I log out of Telegram on my computer, what will I need to log back in?", answer: "You’ll need the login code from Fragment and, if 2FA is on, your password as well. So make sure you can access your wallet before logging out." },
  { question: "Someone claiming to be StarsPaymee support is asking for my code. What should I do?", answer: "Send nothing and block the chat. Real support is only available at @StarsPaymeeSupport, and orders never require anything beyond your @username." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["+888 akkauntga kirish urinishlari","+888 akkaunt himoyasi","+888 raqam brutfors","anonim raqam Telegram xavfsizlik","Stars balansini himoya qilish","Telegram ikki bosqichli parol +888","Fragment kirish kodi","попытки входа +888 аккаунт","брутфорс анонимных номеров Telegram","как защитить аккаунт +888","облачный пароль Telegram анонимный номер","защита звёзд и Premium Telegram"],
  howToSteps: [
    { name: "Bo‘limni toping", text: "Sozlamalar > Maxfiylik va xavfsizlik > Ikki bosqichli tekshiruv (Telegram FAQ)." },
    { name: "Parol tuzing", text: "uzun bo‘lsin va boshqa hech qayerda ishlatilmagan bo‘lsin. Bir-biriga bog‘lanmagan 4–5 so‘zdan tuzilgan ibora qisqa va murakkab paroldan oson eslab qolinadi." },
    { name: "Maslahat (hint) yozing", text: "parolning o‘zini yoki uni ochib beradigan ishorani yozmang." },
    { name: "Tiklash email’ini ulang", text: "bu pochta ham kuchli parol va iloji bo‘lsa ikki bosqichli tekshiruv bilan himoyalangan bo‘lsin." },
    { name: "Parolni saqlang", text: "uni unutsangiz, boshqa qurilmalardan xabarlaringizga kira olmaysiz (Telegram blogi)." },
  ],
  locales: {
    uz: {
      title: "+888 akkauntga kirishga urinishyapti: Stars va Premium’ni qanday asrayman",
      excerpt: "Stars balansi va Premium’ni +888 akkauntda asrashning asosi — 2FA paroli va Fragment hamyonini hech kimga bermaslik. Maqolada xavf jadvali, sozlash qadamlari, firibgar xabar namunalari va tiklash tartibi bor.",
      metaTitle: "+888 akkauntga kirishga urinishyapti",
      metaDescription: "Stars balansi va Premium’ni +888 akkauntda asrashning asosi — 2FA paroli va Fragment hamyonini hech kimga bermaslik.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Пытаются войти в аккаунт +888: как сохранить Stars и Premium",
      excerpt: "Как защитить баланс Stars, Premium и коллекционные подарки на аккаунте с номером +888: таблица рисков, настройка облачного пароля, примеры мошеннических сообщений и порядок действий при взломе.",
      metaTitle: "Пытаются войти в аккаунт +888: как сохранить Stars и Premium",
      metaDescription: "Как защитить баланс Stars, Premium и коллекционные подарки на аккаунте с номером +888: таблица рисков, настройка облачного пароля, примеры мошеннических…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "+888 login attempts: how to protect your Telegram Stars and Premium",
      excerpt: "Protecting Stars and Premium on a +888 account comes down to a 2FA password and a Fragment wallet you never hand over. Inside: a risk table, setup steps, scam message examples and a recovery plan.",
      metaTitle: "+888 login attempts: how to protect your Telegram Stars",
      metaDescription: "Protecting Stars and Premium on a +888 account comes down to a 2FA password and a Fragment wallet you never hand over.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
