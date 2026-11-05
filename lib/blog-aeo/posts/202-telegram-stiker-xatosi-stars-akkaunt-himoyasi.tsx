import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stiker-xatosi-stars-akkaunt-himoyasi";

/**
 * Telegram stiker xatosi: Stars balansi, Premium va sovg‘alarga xavf bormi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Akkauntida Stars balansi, Premium yoki kolleksion sovg‘alari bor O‘zbekistondagi Telegram foydalanuvchisi stiker zaifligi haqidagi ogohlantirishni ko‘rib, «telegram stiker xatosi» deb qidiradi. U bu xato akkaunti va Stars’iga xavf soladimi, ilovani qanday yangilashni va «patch» yoki «tekshiruv» niqobidagi firibgarlikdan qanday saqlanishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://core.telegram.org/api/stickers
 *   https://bugs.telegram.org/c/65400/7
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
  return <p>Rasmiy manbalarda Stars balansi, Premium yoki sovg‘alar yo‘qolgani qayd etilmagan. Telegram’ning xatoliklar sahifasida faqat iOS ilovasining muayyan stiker sabab qayta-qayta yopilishi yozilgan. Sahifa maqomiga ko‘ra, xato 12.9.4 versiyada tuzatilgan. Hozir eng aniq xavf boshqa joyda: vahimadan foydalanib kod, Stars yoki sovg‘a so‘raydigan firibgarlar.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#stiker-xatosi-stars-balansim-premium", label: "Stiker xatosi Stars balansim, Premium va sovg‘alarimga xavf soladimi?" },
          { href: "#kanal-postidagi-gaplarning-qaysi-biri", label: "Kanal postidagi gaplarning qaysi biri rasmiy manbada bor?" },
          { href: "#xavotir-bolsa-stars-premium-va", label: "Xavotir bo‘lsa, Stars, Premium va sovg‘alarim joyida ekanini qanday tekshiraman?" },
          { href: "#telegramni-qanday-yangilash-va-versiya", label: "Telegram’ni qanday yangilash va versiya 12.9.4 dan yangi ekanini bilish mumkin?" },
          { href: "#telegram-ochilishi-bilan-yopilib-qolsa", label: "Telegram ochilishi bilan yopilib qolsa, akkauntni yo‘qotmaslik uchun nima qilish kerak?" },
          { href: "#patch-tekshiruv-yoki-balansni-himoyalash", label: "«Patch», «tekshiruv» yoki «balansni himoyalash» niqobidagi firibgarlik qanday ko‘rinadi?" },
          { href: "#firibgarga-kod-yoki-sovga-berib", label: "Firibgarga kod yoki sovg‘a berib qo‘ygan bo‘lsangiz nima qilinadi?" },
          { href: "#shu-kunlarda-stars-yoki-premium", label: "Shu kunlarda Stars yoki Premium sotib olish xavfsizmi?" },
          { href: "#keyingi-zaiflik-xabarigacha-akkauntni-qanday", label: "Keyingi «zaiflik» xabarigacha akkauntni qanday mustahkamlash mumkin?" },
        ]}
      />
      <h2 id="stiker-xatosi-stars-balansim-premium">Stiker xatosi Stars balansim, Premium va sovg‘alarimga xavf soladimi?</h2>
      <p>Rasmiy manbada bunday xavf haqida gap yo‘q. Telegram’ning xatoliklar sahifasidagi <a href={"https://bugs.telegram.org/c/65400/7"} target="_blank" rel="noopener noreferrer">hisobotda</a> bitta holat tasvirlangan. Foydalanuvchi iOS ilovasi har safar ishdan chiqishini yozgan. Xato jurnallarida rlottie va LOTPolystarItem nomlari bor stek SIGABRT signali bilan tugagan. Sahifa moderatori sabab qandaydir stiker ekanini yozgan.</p>
      <p>Hisobotda akkaunt egallab olingani, Stars balansi kamaygani yoki sovg‘a boshqa odamga o‘tib ketgani haqida bir og‘iz ham so‘z yo‘q. U yerda faqat ilovaning yopilishi tasvirlangan.</p>
      <p>Nega aynan stiker? Telegram hujjatlariga ko‘ra, animatsiyali stikerlar Lottie vektor animatsiyalaridir. Ular .tgs formatida saqlanadi va rlottie kutubxonasi orqali ijro etiladi (<a href={"https://core.telegram.org/api/stickers"} target="_blank" rel="noopener noreferrer">Stickers and masks</a>). Ya’ni xato stikerni ekranda chizadigan qismda. Hisobot sarlavhasiga ko‘ra, ilova chatlarni ochganda yoki xabar yuborganda yopilgan.</p>
      <p>Kanal postlaridagi «hujumchi o‘z kodini ishga tushiradi» degan gap rasmiy bayonot yoki xavfsizlik e’lonida topilmadi. Bu maqolada u tasdiqlanmagan. Shu bilan birga «hech qanday xavf yo‘q» deb va’da ham bermaymiz: tekshiruv ochiq sahifalar bilan cheklangan.</p>
      <p>Amaliy xulosa oddiy: ilovani yangilang va qiymatli narsalaringizni vahimadan foydalanadiganlardan himoya qiling.</p>
      <h2 id="kanal-postidagi-gaplarning-qaysi-biri">Kanal postidagi gaplarning qaysi biri rasmiy manbada bor?</h2>
      <p>Tarmoqda tarqalgan ogohlantirish bir nechta da’vodan iborat. Quyidagi jadvalda ular rasmiy sahifalar bilan solishtirilgan.</p>
      <CompareTable
        headers={["Postdagi da’vo", "Rasmiy manbada", "Holat"]}
        rows={[
          ["Muayyan stiker ilovani ishdan chiqaradi", "iOS hisobotida har safar takrorlanadigan yopilish, moderator sababni stiker deb yozgan", "Hisobotda bor"],
          ["Xato rlottie kutubxonasi bilan bog‘liq", "Jurnallarda rlottie/LOTPolystarItem steki, SIGABRT", "Hisobotda bor"],
          ["Tuzatish chiqarilgan", "Maqom: oxirgi marta 12.9.3.34622 da takrorlangan, 12.9.4 da tuzatilgan", "Hisobotda bor (iOS)"],
          ["Stiker server tekshiruvidan o‘tib ketadi", "Server tekshiruvi tavsifi yo‘q", "Tasdiqlanmagan"],
          ["Xotira shikastlanadi, hujumchi kod ishga tushiradi", "Xavfsizlik e’loni topilmadi", "Tasdiqlanmagan"],
          ["Telegram tlottie kutubxonasiga o‘tmoqda", "Rasmiy manba topilmadi", "Tasdiqlanmagan"],
          ["Yangilanish bosqichma-bosqich tarqatiladi", "Ma’lumot yo‘q", "Tasdiqlanmagan"],
          ["Hamma qurilmaga tegishli", "Sahifa faqat iOS haqida", "Android va Desktop bo‘yicha ma’lumot yo‘q"],
        ]}
      />
      <p>Ko‘lam masalasi alohida. Rasmiy hisobot faqat iOS ilovasi haqida, Android va Telegram Desktop bo‘yicha ma’lumot yo‘q. Shuning uchun «hamma qurilmada xavfli» deb ham, «Android’da muammo yo‘q» deb ham bo‘lmaydi. Har qanday qurilmada eng so‘nggi versiyani o‘rnatish — eng to‘g‘ri yo‘l.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="xavotir-bolsa-stars-premium-va">Xavotir bo‘lsa, Stars, Premium va sovg‘alarim joyida ekanini qanday tekshiraman?</h2>
      <p>Buning uchun tashqi bot, «skaner» yoki sayt kerak emas. Hammasi Telegram’ning o‘zida ko‘rinadi.</p>
      <Steps>
        <Step title={"Stars balansi"}>sozlamalardagi Stars bo‘limini oching va oxirgi tranzaksiyalarni ko‘zdan kechiring. Siz qilmagan sarf bormi? Batafsil: <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link>.</Step>
        <Step title={"Premium holati"}>Premium sahifasida obuna faolligini va muddatini ko‘ring. Sanani aniqlash bo‘yicha: <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">Premium qachon tugashini bilish</Link>.</Step>
        <Step title={"Kolleksion sovg‘alar"}>profilingizdagi sovg‘alar ro‘yxatini oching. Notanish o‘tkazma yoki siz qo‘ymagan sotuv e’loni yo‘qligini tekshiring.</Step>
        <Step title={"Faol seanslar"}>Sozlamalar ichidagi Qurilmalar bo‘limida ro‘yxatni ko‘ring. Tanimagan qurilma bo‘lsa, seansni yakunlang.</Step>
        <Step title={"Shubha qolsa"}>hech kimga kod yubormasdan ikki bosqichli tekshiruv parolini o‘zgartiring.</Step>
      </Steps>
      <p>Hammasi joyida bo‘lsa, boshqa harakat shart emas. Stars, Premium yoki sovg‘ani «xavfsiz joyga ko‘chirish» Telegram’ning rasmiy sahifalarida tilga olinmagan. Bunday maslahat bergan odamdan ehtiyot bo‘ling.</p>
      <h2 id="telegramni-qanday-yangilash-va-versiya">Telegram’ni qanday yangilash va versiya 12.9.4 dan yangi ekanini bilish mumkin?</h2>
      <p>Xatoliklar sahifasining maqomiga ko‘ra, muammo oxirgi marta 12.9.3.34622 versiyada takrorlangan va 12.9.4 da tuzatilgan. Bu raqamlar iOS hisobotiga tegishli.</p>
      <Steps>
        <Step title={"App Store’ni oching"}>qidiruvda Telegram’ni toping. «Yangilash» tugmasi bo‘lsa, uni bosing.</Step>
        <Step title={"Versiyani ko‘ring"}>Telegram sozlamalarini eng pastigacha suring, versiya raqami o‘sha yerda yozilgan.</Step>
        <Step title={"Raqamni solishtiring"}>iPhone’da 12.9.4 yoki undan yangi bo‘lsa, hisobotdagi tuzatish sizda bor.</Step>
        <Step title={"Android va kompyuter"}>bu qurilmalar uchun aniq versiya rasmiy manbada ko‘rsatilmagan. Google Play’dan yoki <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> saytidan eng so‘nggisini o‘rnating.</Step>
        <Step title={"Avtomatik yangilanish"}>do‘kon sozlamalarida yoqib qo‘ying, keyingi tuzatish o‘zi kelsin.</Step>
      </Steps>
      <p>Do‘konda «Yangilash» o‘rniga «Ochish» tugmasi turgan bo‘lsa, sizda do‘kon taklif qilayotgan eng yangi versiya o‘rnatilgan. Telefon xotirasi to‘lib qolsa, yangilanish yuklanmasligi mumkin — avval joy bo‘shating.</p>
      <p>Yangilanish faqat App Store, Google Play yoki telegram.org orqali keladi. Chatga tashlangan fayl, APK yoki «yangi versiya» havolasi yangilanish emas.</p>
      <h2 id="telegram-ochilishi-bilan-yopilib-qolsa">Telegram ochilishi bilan yopilib qolsa, akkauntni yo‘qotmaslik uchun nima qilish kerak?</h2>
      <p>Hisobotdagi belgi aniq: ilova belgisini bosgan zahoti yopiladi va bu har safar takrorlanadi. Sahifa moderatori vaqtinchalik yechim sifatida muammoli stikerni Telegram Desktop orqali o‘chirishni taklif qilgan. U xato keyingi yangilanishda tuzatilishini ham yozgan. Moderatorning Telegram xodimi yoki ko‘ngilli ekani tasdiqlanmagan.</p>
      <p>Tartib taxminan shunday. Avval do‘konda yangilanish bor-yo‘qligini tekshiring. Yangilanish bo‘lmasa, o‘zingizning yoki ishonchli kompyuterdagi Telegram Desktop’dan o‘sha chatni topib, stikerli xabarni o‘chiring. Begona kompyuterdan foydalansangiz, ishni tugatgach seansdan chiqing.</p>
      <Notice label={"Muhim"}>Ilovani o‘chirib qayta o‘rnatishdan oldin ikki narsani tekshiring: ikki bosqichli tekshiruv parolini eslaysizmi va kirish kodi keladigan raqam qo‘lingizdami. Ikkalasidan biri bo‘lmasa, qayta kirishda qiynalishingiz mumkin.</Notice>
      <p>Ilova ochilmasa ham Stars, Premium yoki sovg‘ani «saqlab qolish» uchun kimgadir o‘tkazish shart emas. Hisobotda ilovaning yopilishi balansga ta’sir qilgani haqida gap yo‘q.</p>
      <h2 id="patch-tekshiruv-yoki-balansni-himoyalash">«Patch», «tekshiruv» yoki «balansni himoyalash» niqobidagi firibgarlik qanday ko‘rinadi?</h2>
      <p>Shov-shuvli ogohlantirishdan keyin firibgarlar tayyor ssenariy bilan yozadi. Odatda xabar shunday boshlanadi: «Akkauntingizga zararli stiker yuborildi. 24 soat ichida tasdiqlamasangiz, Stars va sovg‘alar bloklanadi». Shoshiltirish — birinchi belgi. Eng ko‘p uchraydigan ko‘rinishlar:</p>
      <ul>
        <li><b>«Telegram patchi» fayli</b> — chatda APK, arxiv yoki «tuzatish» degan fayl. Haqiqiy yangilanish do‘kondan keladi, shaxsiy xabardan emas.</li>
        <li><b>«Akkauntingiz stiker orqali buzilgan» xabari</b> — ortidan «tasdiqlash kodini yuboring» degan talab. Kirish oqimida qanday soxta oynalar uchrashi haqida: <Link href="/blog/telegramga-kirishda-premium-sms-tolov">kirishda pul yoki SMS so‘ralsa</Link>.</li>
        <li><b>«Stars’ingizni xavfsiz hamyonga o‘tkazing»</b> yoki <b>«sovg‘angizni vaqtincha bizga bering, tekshirib qaytaramiz»</b> — o‘tkazilgan narsani qaytarishga hech kim majbur emas.</li>
        <li><b>«Tekshiruv boti» va soxta support</b> — profil rasmi Telegram logotipiga o‘xshaydi, nomida «Security» yoki «Support» bor, lekin bu oddiy akkaunt.</li>
        <li><b>NFT sovg‘a uchun soxta havola</b> — «sovg‘angiz xavf ostida, shu sahifada tasdiqlang». Havolani tekshirish tartibi: <Link href="/blog/telegram-gift-havolasini-tekshirish">Gift havolasini tekshirish</Link>.</li>
      </ul>
      <p>Umumiy qoida: haqiqiy yangilanish sizdan kod, parol, Stars yoki sovg‘a so‘ramaydi.</p>
      <h2 id="firibgarga-kod-yoki-sovga-berib">Firibgarga kod yoki sovg‘a berib qo‘ygan bo‘lsangiz nima qilinadi?</h2>
      <p>Xato qilgan bo‘lsangiz, vaqtni yo‘qotmang. Tartib quyidagicha:</p>
      <Steps>
        <Step title={"Boshqa seanslarni yakunlang"}>Qurilmalar bo‘limida o‘zingizning telefoningizdan boshqa hamma seansni tugating.</Step>
        <Step title={"Ikki bosqichli parolni almashtiring"}>yoqilmagan bo‘lsa, hozir yoqing. Tiklash uchun o‘zingizga tegishli pochtani ko‘rsating.</Step>
        <Step title={"Firibgar akkauntiga shikoyat qiling"}>chat ichidan spam yoki firibgarlik deb belgilang va bloklang.</Step>
        <Step title={"Yaqinlaringizni ogohlantiring"}>akkauntingizdan ularga ham «yordam» so‘rab xabar ketgan bo‘lishi mumkin.</Step>
        <Step title={"Tranzaksiyalarni qayta tekshiring"}>Stars bo‘limida va sovg‘alar ro‘yxatida nima o‘zgarganini yozib oling.</Step>
      </Steps>
      <p>Stars bot xaridiga sarflangan bo‘lsa, qaysi holatlarda qaytarish so‘ralishi mumkinligi haqida: <Link href="/blog/telegram-stars-qaytarib-olish">Stars’ni qaytarib olish</Link>. Boshqa odamga o‘tkazilgan sovg‘a yoki Stars qaytishiga kafolat yo‘q. Shuning uchun asosiy himoya — oldindan hech narsani bermaslik.</p>
      <h2 id="shu-kunlarda-stars-yoki-premium">Shu kunlarda Stars yoki Premium sotib olish xavfsizmi?</h2>
      <p>StarsPaymee — mustaqil xizmat, Telegram bilan hamkorlik da’vo qilmaydi. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> buyurtma uchun faqat @username so‘raydi. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Faol Premium bor akkauntga bot yangi Premium buyurtmasini ochmaydi.</p>
      <p>StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi. «StarsPaymee nomidan sovg‘angizni sotib olamiz» yoki «balansingizni tekshirib beramiz» degan xabar kelsa, bu firibgarlik.</p>
      <CompareTable
        headers={["Mahsulot", "Narx"]}
        rows={[
          ["1 ta Stars — UzCard/HUMO karta o‘tkazmasi yoki bot balansi", `${som(STARS_PER_UNIT_UZS, "uz")}`],
          ["1 ta Stars — Click, Payme, Uzum yoki Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Premium, 3 oy", `${som(premium(3), "uz")}`],
          ["Premium, 6 oy", `${som(premium(6), "uz")}`],
          ["Premium, 12 oy", `${som(premium(12), "uz")}`],
        ]}
      />
      <p>Eng kam Stars buyurtmasi — 50 ta. Premium narxi hamma to‘lov usulida bir xil, 1 oylik tarif narxi botda ko‘rsatiladi. To‘lov so‘mda, Paynet ilovasi yoki terminalida naqd ham bo‘ladi. Xalqaro karta yoki VPN kerak emas. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Batafsil: <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalari. Savol bo‘lsa — <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="keyingi-zaiflik-xabarigacha-akkauntni-qanday">Keyingi «zaiflik» xabarigacha akkauntni qanday mustahkamlash mumkin?</h2>
      <p>Bunday ogohlantirishlar vaqti-vaqti bilan qaytadi. Oldindan tayyor turish uchun:</p>
      <ul>
        <li><b>Ikki bosqichli parol</b> — yoqing va hech kimga aytmang. Batafsil: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA bilan himoya</Link>.</li>
        <li><b>Seanslar ro‘yxati</b> — oyida bir marta Qurilmalar bo‘limini ko‘zdan kechiring.</li>
        <li><b>Yangilanish</b> — avtomatik rejimda va faqat rasmiy do‘kondan.</li>
        <li><b>Manbani tekshirish</b> — ogohlantirish postini ko‘rsangiz, avval telegram.org, core.telegram.org yoki xatoliklar sahifasida tasdiq bor-yo‘qligini qidiring, keyin ulashing.</li>
        <li><b>Qiymatli narsalar ro‘yxati</b> — qaysi kolleksion sovg‘alaringiz borligini va Stars balansingizni bilib yuring, shunda o‘zgarishni darhol sezasiz.</li>
      </ul>
      <p>Kod, parol yoki sovg‘a so‘ragan har qanday «yordamchi»ga javob bermaslik har qanday yangi xatodan ham ishonchliroq himoya qiladi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/stickers", label: "Stickers and masks" },
          { href: "https://bugs.telegram.org/c/65400/7", label: "Telegram crashes when opening Chats or sending messages" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Stiker xatosi sabab Stars balansim yo‘qolib qolishi mumkinmi?", answer: "Rasmiy hisobotda faqat iOS ilovasining yopilishi bor, balans o‘zgarishi haqida hech narsa yozilmagan. Xavotir bo‘lsa, Stars bo‘limidagi tranzaksiyalar tarixini o‘zingiz ko‘rib chiqing." },
  { question: "Kolleksion NFT sovg‘alarimni stiker orqali o‘g‘irlashlari haqida rasmiy ma’lumot bormi?", answer: "Yo‘q, stiker xatosini sovg‘a o‘g‘irlanishi bilan bog‘laydigan rasmiy ma’lumot topilmadi. Sovg‘alar ko‘pincha soxta havola yoki «vaqtincha berib turing» degan iltimos orqali yo‘qotiladi." },
  { question: "Samsung’da Telegram ishlataman — yangilash shartmi?", answer: "Rasmiy hisobot faqat iOS ilovasi haqida, Android bo‘yicha ma’lumot berilmagan. Baribir Google Play’dagi eng yangi versiyani o‘rnatib qo‘yish ortiqcha bo‘lmaydi." },
  { question: "Postda texnik nomlar va raqamlar ko‘p — ularga ishonsam bo‘ladimi?", answer: "Texnik atamalar ko‘pligi postni rasmiy qilmaydi. Masalan, «tlottie»ga o‘tish yoki CVE raqami haqida biz tekshirgan rasmiy sahifalarda tasdiq topilmadi, shuning uchun har bir da’voni telegram.org yoki core.telegram.org bilan solishtiring." },
  { question: "«Telegram xavfsizlik xizmati» kod so‘rab yozdi — javob beraymi?", answer: "Javob bermang va kodni hech kimga yubormang. Xabarni firibgarlik deb belgilab, akkauntni bloklang, keyin faol seanslar ro‘yxatini tekshiring." },
  { question: "Vahima o‘tguncha sovg‘alarimni sotib yuborganim ma’qulmi?", answer: "Rasmiy ma’lumot bunday qadamga asos bermaydi, shoshilib arzon sotish esa haqiqiy yo‘qotishga aylanadi. «Sovg‘angizni zudlik bilan sotib olamiz» degan takliflarga ayniqsa ehtiyot bo‘ling." },
  { question: "Hozir menga Premium sovg‘a qilinsa, uni qabul qilish xavfsizmi?", answer: "Premium sovg‘asi Telegram’ning o‘z mexanizmi orqali keladi, uni ulash uchun sizdan kod yoki parol talab qilinmaydi. «Faollashtirish uchun kodni yuboring» deyishsa, bu firibgarlik." },
  { question: "Botdan Stars olayotganimda ilova yopilib qolsa, yulduzlar yetib keladimi?", answer: "Buyurtma telefondagi ilovaga emas, ko‘rsatilgan @username’ga bajariladi. Ilova qayta ochilgach balansni tekshiring, savol qolsa buyurtma ma’lumoti bilan @StarsPaymeeSupport’ga yozing." },
  { question: "iPhone’da Telegram ochilmayapti, Desktop ham o‘rnatilmagan — qayerdan boshlay?", answer: "Avval App Store’da yangilanish bor-yo‘qligini ko‘ring, chunki sahifa maqomiga ko‘ra tuzatish 12.9.4 versiyada chiqqan. Yangilanish bo‘lmasa, moderator taklif qilgan yo‘l — muammoli stikerni Telegram Desktop orqali o‘chirish." },
  { question: "StarsPaymee boti mendan parol yoki SMS kod so‘raydimi?", answer: "Yo‘q, @StarsPaymee_bot faqat qabul qiluvchining @username’ini so‘raydi. Bot nomidan parol yoki kod so‘ralsa, @StarsPaymeeSupport orqali xabar bering." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>В официальных источниках не зафиксировано, что пропадали баланс Stars, Premium или подарки. На странице ошибок Telegram описан только один случай: приложение на iOS раз за разом закрывалось из-за определённого стикера. Судя по статусу страницы, ошибку исправили в версии 12.9.4. Реальная угроза сейчас в другом — мошенники, которые на волне паники выпрашивают коды, Stars и подарки.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#stiker-xatosi-stars-balansim-premium", label: "Угрожает ли баг со стикером балансу Stars, Premium и подаркам?" },
          { href: "#kanal-postidagi-gaplarning-qaysi-biri", label: "Что из поста в каналах подтверждает официальный источник?" },
          { href: "#xavotir-bolsa-stars-premium-va", label: "Как проверить, что Stars, Premium и подарки на месте?" },
          { href: "#telegramni-qanday-yangilash-va-versiya", label: "Как обновить Telegram и узнать, что версия не ниже 12.9.4?" },
          { href: "#telegram-ochilishi-bilan-yopilib-qolsa", label: "Telegram закрывается сразу при запуске: что делать, чтобы не потерять аккаунт?" },
          { href: "#patch-tekshiruv-yoki-balansni-himoyalash", label: "Как выглядит мошенничество под видом «патча», «проверки» или «защиты баланса»?" },
          { href: "#firibgarga-kod-yoki-sovga-berib", label: "Что делать, если вы уже отдали мошеннику код или подарок?" },
          { href: "#shu-kunlarda-stars-yoki-premium", label: "Безопасно ли сейчас покупать Stars или Premium?" },
          { href: "#keyingi-zaiflik-xabarigacha-akkauntni-qanday", label: "Как укрепить аккаунт до следующей новости об «уязвимости»?" },
        ]}
      />
      <h2 id="stiker-xatosi-stars-balansim-premium">Угрожает ли баг со стикером балансу Stars, Premium и подаркам?</h2>
      <p>Официальный источник о такой угрозе не говорит. В <a href={"https://bugs.telegram.org/c/65400/7"} target="_blank" rel="noopener noreferrer">отчёте</a> на странице ошибок Telegram описан один случай. Пользователь написал, что приложение на iOS вылетает каждый раз. В журналах сбоев был стек с именами rlottie и LOTPolystarItem, который заканчивался сигналом SIGABRT. Модератор страницы ответил, что причина — какой-то стикер.</p>
      <p>В отчёте нет ни слова о том, что аккаунт кто-то захватил, баланс Stars уменьшился или подарок ушёл другому человеку. Там описано только закрытие приложения.</p>
      <p>Почему именно стикер? По документации Telegram, анимированные стикеры — это векторные анимации Lottie. Они хранятся в формате .tgs и воспроизводятся через библиотеку rlottie (<a href={"https://core.telegram.org/api/stickers"} target="_blank" rel="noopener noreferrer">Stickers and masks</a>). То есть сбой — в той части приложения, которая отрисовывает стикер на экране. Судя по заголовку отчёта, приложение закрывалось при открытии чатов или отправке сообщения.</p>
      <p>Фразу из постов в каналах о том, что «злоумышленник может запустить свой код», мы не нашли ни в официальном заявлении, ни в бюллетене безопасности. В этой статье она не подтверждена. При этом мы и не обещаем, что «никакой угрозы нет»: проверка ограничена открытыми страницами.</p>
      <p>Практический вывод простой: обновите приложение и защитите ценное от тех, кто пользуется паникой.</p>
      <h2 id="kanal-postidagi-gaplarning-qaysi-biri">Что из поста в каналах подтверждает официальный источник?</h2>
      <p>Предупреждение, которое разошлось по каналам, состоит из нескольких утверждений. В таблице они сверены с официальными страницами.</p>
      <CompareTable
        headers={["Утверждение из поста", "Что в официальном источнике", "Статус"]}
        rows={[
          ["Определённый стикер роняет приложение", "В отчёте по iOS — вылет, который повторяется каждый раз; модератор назвал причиной стикер", "Есть в отчёте"],
          ["Ошибка связана с библиотекой rlottie", "В журналах стек rlottie/LOTPolystarItem, SIGABRT", "Есть в отчёте"],
          ["Исправление выпущено", "Статус: последний раз воспроизводилось в 12.9.3.34622, исправлено в 12.9.4", "Есть в отчёте (iOS)"],
          ["Стикер проходит проверку на сервере", "Описания серверной проверки нет", "Не подтверждено"],
          ["Повреждается память, злоумышленник запускает код", "Бюллетень безопасности не найден", "Не подтверждено"],
          ["Telegram переходит на библиотеку tlottie", "Официальный источник не найден", "Не подтверждено"],
          ["Обновление раскатывают поэтапно", "Информации нет", "Не подтверждено"],
          ["Касается всех устройств", "Страница говорит только об iOS", "Данных по Android и Desktop нет"],
        ]}
      />
      <p>Отдельно — вопрос масштаба. Официальный отчёт касается только приложения для iOS, по Android и Telegram Desktop данных нет. Поэтому нельзя сказать ни «опасно на всех устройствах», ни «на Android проблем нет». Самый разумный шаг на любом устройстве — поставить последнюю версию.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="xavotir-bolsa-stars-premium-va">Как проверить, что Stars, Premium и подарки на месте?</h2>
      <p>Для этого не нужны сторонние боты, «сканеры» или сайты. Всё видно в самом Telegram.</p>
      <Steps>
        <Step title={"Баланс Stars"}>откройте раздел Stars в настройках и просмотрите последние транзакции. Есть списания, которых вы не делали? Подробнее: <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</Step>
        <Step title={"Статус Premium"}>на странице Premium посмотрите, активна ли подписка и до какого числа. Как определить дату: <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">когда заканчивается Premium</Link>.</Step>
        <Step title={"Коллекционные подарки"}>откройте список подарков в профиле. Убедитесь, что нет незнакомых передач и объявлений о продаже, которые вы не выставляли.</Step>
        <Step title={"Активные сеансы"}>в настройках, в разделе «Устройства», просмотрите список. Если есть незнакомое устройство, завершите сеанс.</Step>
        <Step title={"Если сомнения остались"}>смените пароль двухэтапной аутентификации, никому не отправляя коды.</Step>
      </Steps>
      <p>Если всё на месте, больше ничего делать не нужно. О том, чтобы «переносить Stars, Premium или подарки в безопасное место», на официальных страницах Telegram не говорится. Осторожнее с теми, кто такое советует.</p>
      <h2 id="telegramni-qanday-yangilash-va-versiya">Как обновить Telegram и узнать, что версия не ниже 12.9.4?</h2>
      <p>Судя по статусу на странице ошибок, проблема последний раз воспроизводилась в версии 12.9.3.34622 и исправлена в 12.9.4. Эти номера относятся к отчёту по iOS.</p>
      <Steps>
        <Step title={"Откройте App Store"}>найдите Telegram через поиск. Если есть кнопка «Обновить», нажмите её.</Step>
        <Step title={"Посмотрите версию"}>прокрутите настройки Telegram до самого низа, номер версии указан там.</Step>
        <Step title={"Сравните номер"}>если на iPhone стоит 12.9.4 или новее, исправление из отчёта у вас уже есть.</Step>
        <Step title={"Android и компьютер"}>для этих устройств точная версия в официальном источнике не указана. Установите самую свежую из Google Play или с сайта <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</Step>
        <Step title={"Автообновление"}>включите его в настройках магазина, чтобы следующее исправление пришло само.</Step>
      </Steps>
      <p>Если в магазине вместо «Обновить» видна кнопка «Открыть», у вас уже стоит последняя версия, которую предлагает магазин. Когда память телефона заполнена, обновление может не загрузиться — сначала освободите место.</p>
      <p>Обновления приходят только через App Store, Google Play или telegram.org. Файл в чате, APK или ссылка на «новую версию» — это не обновление.</p>
      <h2 id="telegram-ochilishi-bilan-yopilib-qolsa">Telegram закрывается сразу при запуске: что делать, чтобы не потерять аккаунт?</h2>
      <p>Признак из отчёта однозначный: приложение закрывается сразу после нажатия на иконку, и так каждый раз. Модератор страницы в качестве временного решения предложил удалить проблемный стикер через Telegram Desktop. Он также написал, что ошибку исправят в следующем обновлении. Является ли модератор сотрудником Telegram или волонтёром — не подтверждено.</p>
      <p>Порядок примерно такой. Сначала проверьте, нет ли обновления в магазине. Если обновления нет, найдите нужный чат в Telegram Desktop на своём или надёжном компьютере и удалите сообщение со стикером. Если пользуетесь чужим компьютером, после работы выйдите из сеанса.</p>
      <Notice label={"Важно"}>Прежде чем удалять и переустанавливать приложение, проверьте две вещи: помните ли вы пароль двухэтапной аутентификации и под рукой ли номер, на который приходит код входа. Если чего-то из этого нет, при повторном входе могут быть сложности.</Notice>
      <p>Даже если приложение не открывается, переводить Stars, Premium или подарки кому-то «на сохранение» не нужно. В отчёте нет ни слова о том, что вылеты повлияли на баланс.</p>
      <h2 id="patch-tekshiruv-yoki-balansni-himoyalash">Как выглядит мошенничество под видом «патча», «проверки» или «защиты баланса»?</h2>
      <p>После громкого предупреждения мошенники приходят с готовым сценарием. Обычно сообщение начинается так: «На ваш аккаунт отправлен вредоносный стикер. Если не подтвердите в течение 24 часов, Stars и подарки будут заблокированы». Спешка — первый тревожный знак. Самые частые варианты:</p>
      <ul>
        <li><b>Файл «патча Telegram»</b> — в чате приходит APK, архив или файл с названием вроде «исправление». Настоящее обновление приходит из магазина, а не в личных сообщениях.</li>
        <li><b>Сообщение «ваш аккаунт взломан через стикер»</b> — а следом просьба «отправить код подтверждения». Какие поддельные окна встречаются при входе: <Link href="/blog/telegramga-kirishda-premium-sms-tolov">если при входе просят деньги или SMS</Link>.</li>
        <li><b>«Переведите Stars в безопасный кошелёк»</b> или <b>«передайте нам подарок на время, проверим и вернём»</b> — вернуть переданное никто не обязан.</li>
        <li><b>«Бот проверки» и фальшивая поддержка</b> — аватар похож на логотип Telegram, в имени есть Security или Support, но это обычный аккаунт.</li>
        <li><b>Поддельная ссылка для NFT-подарка</b> — «ваш подарок под угрозой, подтвердите на этой странице». Как проверить ссылку: <Link href="/blog/telegram-gift-havolasini-tekshirish">проверка ссылки на Gift</Link>.</li>
      </ul>
      <p>Общее правило: настоящее обновление не просит у вас код, пароль, Stars или подарки.</p>
      <h2 id="firibgarga-kod-yoki-sovga-berib">Что делать, если вы уже отдали мошеннику код или подарок?</h2>
      <p>Если ошибка уже случилась, не теряйте времени. Порядок такой:</p>
      <Steps>
        <Step title={"Завершите чужие сеансы"}>в разделе «Устройства» закройте все сеансы, кроме своего телефона.</Step>
        <Step title={"Смените пароль двухэтапной аутентификации"}>если он не был включён, включите сейчас. Для восстановления укажите почту, к которой есть доступ только у вас.</Step>
        <Step title={"Пожалуйтесь на аккаунт мошенника"}>прямо из чата отметьте его как спам или мошенничество и заблокируйте.</Step>
        <Step title={"Предупредите близких"}>с вашего аккаунта им тоже могли написать с просьбой «помочь».</Step>
        <Step title={"Ещё раз проверьте транзакции"}>запишите, что изменилось в разделе Stars и в списке подарков.</Step>
      </Steps>
      <p>Если Stars потрачены на покупку в боте, о случаях, когда можно запросить возврат: <Link href="/blog/telegram-stars-qaytarib-olish">как вернуть Stars</Link>. Гарантии, что переданные другому человеку подарок или Stars вернутся, нет. Поэтому главная защита — ничего не отдавать заранее.</p>
      <h2 id="shu-kunlarda-stars-yoki-premium">Безопасно ли сейчас покупать Stars или Premium?</h2>
      <p>StarsPaymee — независимый сервис и не заявляет о партнёрстве с Telegram. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> для заказа просит только @username. Пароль, SMS-код или доступ к аккаунту не запрашиваются. Premium подключается по username через механизм подарков Telegram. На аккаунт с активным Premium бот новый заказ Premium не оформляет.</p>
      <p>StarsPaymee не покупает Stars и подарки у пользователей. Если пишут «выкупим ваш подарок от имени StarsPaymee» или «проверим ваш баланс», это мошенничество.</p>
      <CompareTable
        headers={["Товар", "Цена"]}
        rows={[
          ["1 Stars — перевод с карты UzCard/HUMO или с баланса бота", `${som(STARS_PER_UNIT_UZS, "ru")}`],
          ["1 Stars — Click, Payme, Uzum или Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Premium, 3 месяца", `${som(premium(3), "ru")}`],
          ["Premium, 6 месяцев", `${som(premium(6), "ru")}`],
          ["Premium, 12 месяцев", `${som(premium(12), "ru")}`],
        ]}
      />
      <p>Минимальный заказ Stars — 50 штук. Цена Premium одинакова при любом способе оплаты, цена тарифа на 1 месяц указана в боте. Оплата в сумах, можно и наличными в приложении или терминале Paynet. Международная карта или VPN не нужны. Заказ обычно доставляется автоматически за несколько секунд. Подробнее — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. Если есть вопросы — <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="keyingi-zaiflik-xabarigacha-akkauntni-qanday">Как укрепить аккаунт до следующей новости об «уязвимости»?</h2>
      <p>Такие предупреждения время от времени возвращаются. Чтобы встретить следующее подготовленным:</p>
      <ul>
        <li><b>Пароль двухэтапной аутентификации</b> — включите и никому не сообщайте. Подробнее: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита с помощью 2FA</Link>.</li>
        <li><b>Список сеансов</b> — раз в месяц просматривайте раздел «Устройства».</li>
        <li><b>Обновления</b> — автоматически и только из официального магазина.</li>
        <li><b>Проверка источника</b> — увидели пост-предупреждение, сначала поищите подтверждение на telegram.org, core.telegram.org или на странице ошибок, а уже потом пересылайте.</li>
        <li><b>Список ценного</b> — знайте, какие коллекционные подарки у вас есть и сколько Stars на балансе, тогда любое изменение заметите сразу.</li>
      </ul>
      <p>Привычка не отвечать «помощникам», которые просят код, пароль или подарок, защищает надёжнее, чем исправление любой новой ошибки.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/stickers", label: "Stickers and masks" },
          { href: "https://bugs.telegram.org/c/65400/7", label: "Telegram crashes when opening Chats or sending messages" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Могут ли из-за бага со стикером пропасть мои Stars?", answer: "В официальном отчёте описано только закрытие приложения на iOS, об изменении баланса там ничего нет. Если тревожно, сами просмотрите историю транзакций в разделе Stars." },
  { question: "Есть ли официальные данные, что через стикер крадут коллекционные NFT-подарки?", answer: "Нет, официальных данных, связывающих баг со стикером с кражей подарков, не нашлось. Подарки чаще всего теряют из-за поддельных ссылок или просьб «дать на время»." },
  { question: "У меня Telegram на Samsung — обязательно обновляться?", answer: "Официальный отчёт касается только приложения для iOS, по Android данных нет. Но поставить последнюю версию из Google Play всё равно не помешает." },
  { question: "В посте много технических названий и цифр — можно ему верить?", answer: "Обилие терминов не делает пост официальным. Например, переход на «tlottie» или номер CVE на проверенных нами официальных страницах не подтвердились, поэтому сверяйте каждое утверждение с telegram.org или core.telegram.org." },
  { question: "Мне написала «служба безопасности Telegram» и просит код — отвечать?", answer: "Не отвечайте и никому не отправляйте код. Отметьте сообщение как мошенничество, заблокируйте аккаунт и затем проверьте список активных сеансов." },
  { question: "Может, продать подарки, пока паника не утихла?", answer: "Официальные данные не дают повода для такого шага, а спешная продажа по низкой цене превращается в настоящую потерю. Особенно осторожно относитесь к предложениям «срочно выкупим ваш подарок»." },
  { question: "Если мне сейчас подарят Premium, безопасно ли его принять?", answer: "Подарочный Premium приходит через собственный механизм Telegram, и для подключения от вас не требуют код или пароль. Если говорят «пришлите код для активации», это мошенничество." },
  { question: "Если во время покупки Stars в боте приложение закроется, звёзды дойдут?", answer: "Заказ выполняется не на приложение в телефоне, а на указанный @username. Когда приложение снова откроется, проверьте баланс, а если вопрос останется, напишите в @StarsPaymeeSupport с данными заказа." },
  { question: "На iPhone Telegram не открывается, а Desktop не установлен — с чего начать?", answer: "Сначала проверьте, нет ли обновления в App Store: судя по статусу страницы, исправление вышло в версии 12.9.4. Если обновления нет, модератор предлагал удалить проблемный стикер через Telegram Desktop." },
  { question: "Бот StarsPaymee попросит у меня пароль или SMS-код?", answer: "Нет, @StarsPaymee_bot просит только @username получателя. Если от имени бота просят пароль или код, сообщите об этом через @StarsPaymeeSupport." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Official sources don’t record any lost Stars balances, Premium subscriptions or gifts. Telegram’s bug tracker describes only one problem: the iOS app crashing again and again because of a specific sticker. According to the page status, the bug was fixed in version 12.9.4. The clearer risk right now is scammers who use the panic to ask for codes, Stars or gifts.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#stiker-xatosi-stars-balansim-premium", label: "Does the sticker bug put my Stars balance, Premium and gifts at risk?" },
          { href: "#kanal-postidagi-gaplarning-qaysi-biri", label: "Which claims in the channel post are backed by official sources?" },
          { href: "#xavotir-bolsa-stars-premium-va", label: "Worried? How do I check that my Stars, Premium and gifts are still there?" },
          { href: "#telegramni-qanday-yangilash-va-versiya", label: "How do I update Telegram and confirm my version is 12.9.4 or newer?" },
          { href: "#telegram-ochilishi-bilan-yopilib-qolsa", label: "What should I do if Telegram crashes as soon as it opens, so I don’t lose my account?" },
          { href: "#patch-tekshiruv-yoki-balansni-himoyalash", label: "What do scams disguised as a “patch”, “check” or “balance protection” look like?" },
          { href: "#firibgarga-kod-yoki-sovga-berib", label: "What if you’ve already given a scammer a code or a gift?" },
          { href: "#shu-kunlarda-stars-yoki-premium", label: "Is it safe to buy Stars or Premium right now?" },
          { href: "#keyingi-zaiflik-xabarigacha-akkauntni-qanday", label: "How can I harden my account before the next “vulnerability” scare?" },
        ]}
      />
      <h2 id="stiker-xatosi-stars-balansim-premium">Does the sticker bug put my Stars balance, Premium and gifts at risk?</h2>
      <p>The official source says nothing about such a risk. The <a href={"https://bugs.telegram.org/c/65400/7"} target="_blank" rel="noopener noreferrer">report</a> on Telegram’s bug tracker describes one case. A user wrote that the iOS app crashed every time. The crash logs contained a stack with the names rlottie and LOTPolystarItem, ending in a SIGABRT signal. The page moderator wrote that the cause was a particular sticker.</p>
      <p>The report doesn’t mention a hijacked account, a shrinking Stars balance or a gift moving to someone else. It describes only the app crashing.</p>
      <p>Why a sticker? According to Telegram’s documentation, animated stickers are Lottie vector animations. They’re stored in the .tgs format and played using the rlottie library (<a href={"https://core.telegram.org/api/stickers"} target="_blank" rel="noopener noreferrer">Stickers and masks</a>). In other words, the bug sits in the part of the app that draws the sticker on screen. According to the report title, the app crashed when opening chats or sending messages.</p>
      <p>The claim in channel posts that “an attacker can run their own code” was not found in any official statement or security advisory. This article doesn’t confirm it. We also won’t promise that “there’s no risk at all”: our check was limited to publicly available pages.</p>
      <p>The practical takeaway is simple. Update the app, and protect your valuable items from people who exploit the panic.</p>
      <h2 id="kanal-postidagi-gaplarning-qaysi-biri">Which claims in the channel post are backed by official sources?</h2>
      <p>The warning circulating online is made up of several claims. The table below compares them with the official pages.</p>
      <CompareTable
        headers={["Claim in the post", "In the official source", "Status"]}
        rows={[
          ["A specific sticker crashes the app", "The iOS report describes a crash that happens every time; the moderator named a sticker as the cause", "In the report"],
          ["The bug is linked to the rlottie library", "rlottie/LOTPolystarItem stack in the logs, SIGABRT", "In the report"],
          ["A fix has been released", "Status: last reproduced in 12.9.3.34622, fixed in 12.9.4", "In the report (iOS)"],
          ["The sticker slips past server checks", "No description of server-side checks", "Not confirmed"],
          ["Memory gets corrupted and an attacker runs code", "No security advisory found", "Not confirmed"],
          ["Telegram is switching to a tlottie library", "No official source found", "Not confirmed"],
          ["The update is being rolled out gradually", "No information", "Not confirmed"],
          ["It affects every device", "The page covers iOS only", "No information on Android or Desktop"],
        ]}
      />
      <p>Scope is a separate question. The official report covers only the iOS app, and there’s no information on Android or Telegram Desktop. So you can’t say “it’s dangerous on every device”, and you can’t say “Android is fine” either. Installing the latest version on whatever device you use is the sensible approach.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="xavotir-bolsa-stars-premium-va">Worried? How do I check that my Stars, Premium and gifts are still there?</h2>
      <p>You don’t need any third-party bot, “scanner” or website for this. Everything is visible inside Telegram itself.</p>
      <Steps>
        <Step title={"Stars balance"}>open the Stars section in Settings and look through your recent transactions. Is there any spending you didn’t make? More detail: <Link href="/blog/telegram-stars-balansini-tekshirish">checking your Stars balance</Link>.</Step>
        <Step title={"Premium status"}>on the Premium page, check that your subscription is active and see its term. For finding the exact date: <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">when does Premium expire</Link>.</Step>
        <Step title={"Collectible gifts"}>open the gift list on your profile. Make sure there are no unfamiliar transfers or sale listings you didn’t create.</Step>
        <Step title={"Active sessions"}>check the list under Devices in Settings. If you see a device you don’t recognize, terminate that session.</Step>
        <Step title={"Still unsure"}>change your two-step verification password, without sending a code to anyone.</Step>
      </Steps>
      <p>If everything looks fine, you don’t need to do anything else. Telegram’s official pages say nothing about “moving Stars, Premium or gifts somewhere safe”. Be wary of anyone who gives you that advice.</p>
      <h2 id="telegramni-qanday-yangilash-va-versiya">How do I update Telegram and confirm my version is 12.9.4 or newer?</h2>
      <p>According to the bug tracker status, the problem was last reproduced in version 12.9.3.34622 and fixed in 12.9.4. These numbers apply to the iOS report.</p>
      <Steps>
        <Step title={"Open the App Store"}>search for Telegram. If there’s an “Update” button, tap it.</Step>
        <Step title={"Check the version"}>scroll to the very bottom of Telegram’s settings, where the version number is shown.</Step>
        <Step title={"Compare the number"}>if your iPhone shows 12.9.4 or later, you have the fix from the report.</Step>
        <Step title={"Android and computers"}>the official source doesn’t list a specific version for these. Install the latest one from Google Play or <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</Step>
        <Step title={"Automatic updates"}>turn them on in your store settings so the next fix arrives on its own.</Step>
      </Steps>
      <p>If the store shows “Open” instead of “Update”, you already have the newest version the store offers. If your phone’s storage is full, the update may fail to download, so free up some space first.</p>
      <p>Updates only come through the App Store, Google Play or telegram.org. A file, APK or “new version” link dropped into a chat is not an update.</p>
      <h2 id="telegram-ochilishi-bilan-yopilib-qolsa">What should I do if Telegram crashes as soon as it opens, so I don’t lose my account?</h2>
      <p>The symptom in the report is clear: the app crashes the moment you tap its icon, and it happens every time. As a temporary workaround, the page moderator suggested removing the faulty sticker using Telegram Desktop. They also wrote that the bug would be fixed in the next update. Whether the moderator is a Telegram employee or a volunteer is not confirmed.</p>
      <p>The order goes roughly like this. First, check the store for an update. If there isn’t one, open Telegram Desktop on your own or a trusted computer, find that chat and delete the message with the sticker. If you use someone else’s computer, log out of the session when you’re done.</p>
      <Notice label={"Important"}>Before deleting and reinstalling the app, check two things: do you remember your two-step verification password, and do you have the phone number that receives your login code? If either is missing, logging back in may be difficult.</Notice>
      <p>Even if the app won’t open, there’s no need to transfer Stars, Premium or gifts to anyone to “save” them. The report says nothing about the crash affecting balances.</p>
      <h2 id="patch-tekshiruv-yoki-balansni-himoyalash">What do scams disguised as a “patch”, “check” or “balance protection” look like?</h2>
      <p>After a high-profile warning, scammers show up with a ready-made script. The message usually opens like this: “A malicious sticker was sent to your account. If you don’t confirm within 24 hours, your Stars and gifts will be blocked.” Pressure to hurry is the first red flag. The most common versions:</p>
      <ul>
        <li><b>A “Telegram patch” file</b> — an APK, archive or “fix” file in a chat. Real updates come from the store, not from a private message.</li>
        <li><b>“Your account was hacked via a sticker”</b> — followed by a demand to “send your confirmation code”. On the fake screens that show up in the login flow: <Link href="/blog/telegramga-kirishda-premium-sms-tolov">when Telegram asks for money or SMS at login</Link>.</li>
        <li><b>“Move your Stars to a safe wallet”</b> or <b>“give us your gift temporarily, we’ll check it and send it back”</b> — nobody is obliged to return anything you transfer.</li>
        <li><b>A “verification bot” or fake support</b> — the profile picture looks like the Telegram logo and the name includes “Security” or “Support”, but it’s an ordinary account.</li>
        <li><b>A fake link for an NFT gift</b> — “your gift is at risk, confirm on this page”. How to check a link: <Link href="/blog/telegram-gift-havolasini-tekshirish">verifying a gift link</Link>.</li>
      </ul>
      <p>The general rule: a real update never asks you for a code, password, Stars or gifts.</p>
      <h2 id="firibgarga-kod-yoki-sovga-berib">What if you’ve already given a scammer a code or a gift?</h2>
      <p>If you’ve made a mistake, don’t waste time. Here’s what to do:</p>
      <Steps>
        <Step title={"End other sessions"}>in the Devices section, terminate every session except your own phone.</Step>
        <Step title={"Change your two-step password"}>if it isn’t enabled, turn it on now. Use an email address that belongs to you for recovery.</Step>
        <Step title={"Report the scammer’s account"}>mark it as spam or fraud from inside the chat, then block it.</Step>
        <Step title={"Warn people close to you"}>messages asking them for “help” may have been sent from your account.</Step>
        <Step title={"Recheck your transactions"}>note down what has changed in the Stars section and your gift list.</Step>
      </Steps>
      <p>If Stars were spent on a bot purchase, here’s when you may be able to request a refund: <Link href="/blog/telegram-stars-qaytarib-olish">getting Stars refunded</Link>. There’s no guarantee that a gift or Stars sent to another person will come back. That’s why the main protection is never handing anything over in the first place.</p>
      <h2 id="shu-kunlarda-stars-yoki-premium">Is it safe to buy Stars or Premium right now?</h2>
      <p>StarsPaymee is an independent service and does not claim any partnership with Telegram. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> asks only for a @username to place an order. It never asks for your password, SMS code or account access. Premium is activated via username, using Telegram’s own gifting mechanism. The bot won’t open a new Premium order for an account that already has an active Premium subscription.</p>
      <p>StarsPaymee does not buy Stars or gifts from users. If you get a message saying “we’ll buy your gift on behalf of StarsPaymee” or “we’ll check your balance for you”, it’s a scam.</p>
      <CompareTable
        headers={["Product", "Price"]}
        rows={[
          ["1 Star — UzCard/HUMO card transfer or bot balance", `${som(STARS_PER_UNIT_UZS, "en")}`],
          ["1 Star — Click, Payme, Uzum or Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Premium, 3 months", `${som(premium(3), "en")}`],
          ["Premium, 6 months", `${som(premium(6), "en")}`],
          ["Premium, 12 months", `${som(premium(12), "en")}`],
        ]}
      />
      <p>The minimum Stars order is 50. Premium costs the same with every payment method, and the 1-month plan price is shown in the bot. Payment is in Uzbek som, including cash via the Paynet app or terminal. You don’t need an international card or a VPN. Orders are usually delivered automatically within a few seconds. More on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages. Questions? Contact <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="keyingi-zaiflik-xabarigacha-akkauntni-qanday">How can I harden my account before the next “vulnerability” scare?</h2>
      <p>Warnings like this come back from time to time. To be ready in advance:</p>
      <ul>
        <li><b>Two-step password</b> — turn it on and never share it. More detail: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account with 2FA</Link>.</li>
        <li><b>Session list</b> — review the Devices section once a month.</li>
        <li><b>Updates</b> — keep them automatic, and only from the official store.</li>
        <li><b>Check the source</b> — when you see a warning post, first look for confirmation on telegram.org, core.telegram.org or the bug tracker, then share it.</li>
        <li><b>Know your valuables</b> — keep track of which collectible gifts you own and what your Stars balance is, so you notice any change right away.</li>
      </ul>
      <p>Refusing to reply to any “helper” who asks for a code, password or gift protects you better than any patch for the next bug.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/stickers", label: "Stickers and masks" },
          { href: "https://bugs.telegram.org/c/65400/7", label: "Telegram crashes when opening Chats or sending messages" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can the sticker bug make my Stars balance disappear?", answer: "The official report only describes the iOS app crashing and says nothing about balance changes. If you’re worried, look through the transaction history in the Stars section yourself." },
  { question: "Is there any official information about collectible NFT gifts being stolen through a sticker?", answer: "No, we found no official information linking the sticker bug to gift theft. Gifts are usually lost through fake links or requests to “lend it to us for a while”." },
  { question: "I use Telegram on a Samsung phone. Do I need to update?", answer: "The official report covers only the iOS app and gives no information about Android. Still, installing the latest version from Google Play doesn’t hurt." },
  { question: "The post is full of technical terms and numbers. Can I trust it?", answer: "Lots of jargon doesn’t make a post official. For example, we found no confirmation of a switch to “tlottie” or a CVE number on the official pages we checked, so compare each claim against telegram.org or core.telegram.org." },
  { question: "“Telegram Security” messaged me asking for a code. Should I reply?", answer: "Don’t reply, and don’t send the code to anyone. Report the message as fraud, block the account, then check your list of active sessions." },
  { question: "Should I sell my gifts until the panic dies down?", answer: "Nothing in the official information justifies that, and a rushed cheap sale turns into a real loss. Be especially careful with offers like “we’ll buy your gift right now”." },
  { question: "If someone gifts me Premium right now, is it safe to accept?", answer: "A Premium gift arrives through Telegram’s own mechanism, and activating it doesn’t require a code or password from you. If someone says “send the code to activate it”, it’s a scam." },
  { question: "If the app crashes while I’m buying Stars from the bot, will they still arrive?", answer: "The order is fulfilled to the @username you entered, not to the app on your phone. Check your balance once the app opens again, and if anything is unclear, message @StarsPaymeeSupport with your order details." },
  { question: "Telegram won’t open on my iPhone and I don’t have Desktop installed. Where do I start?", answer: "First check the App Store for an update, since the page status says the fix shipped in version 12.9.4. If there’s no update, the moderator’s suggested workaround is removing the faulty sticker through Telegram Desktop." },
  { question: "Will the StarsPaymee bot ask me for a password or SMS code?", answer: "No, @StarsPaymee_bot only asks for the recipient’s @username. If anyone asks for a password or code in the bot’s name, report it to @StarsPaymeeSupport." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram stiker xatosi","telegram stiker xatosi stars","telegram stiker virus rostmi","telegram yangilash 12.9.4","telegram ochilmayapti stiker","telegram stars akkaunt himoyasi","rlottie xatosi telegram","ошибка стикера telegram","уязвимость стикеров телеграм","телеграм вылетает при открытии","обновить telegram 12.9.4","стикер взлом аккаунта telegram"],
  howToSteps: [
    { name: "Stars balansi", text: "sozlamalardagi Stars bo‘limini oching va oxirgi tranzaksiyalarni ko‘zdan kechiring. Siz qilmagan sarf bormi? Batafsil: Stars balansini tekshirish." },
    { name: "Premium holati", text: "Premium sahifasida obuna faolligini va muddatini ko‘ring. Sanani aniqlash bo‘yicha: Premium qachon tugashini bilish." },
    { name: "Kolleksion sovg‘alar", text: "profilingizdagi sovg‘alar ro‘yxatini oching. Notanish o‘tkazma yoki siz qo‘ymagan sotuv e’loni yo‘qligini tekshiring." },
    { name: "Faol seanslar", text: "Sozlamalar ichidagi Qurilmalar bo‘limida ro‘yxatni ko‘ring. Tanimagan qurilma bo‘lsa, seansni yakunlang." },
    { name: "Shubha qolsa", text: "hech kimga kod yubormasdan ikki bosqichli tekshiruv parolini o‘zgartiring." },
  ],
  locales: {
    uz: {
      title: "Telegram stiker xatosi: Stars balansi, Premium va sovg‘alarga xavf bormi?",
      excerpt: "Rasmiy hisobotda stiker xatosi faqat iOS ilovasini yopib qo‘ygani qayd etilgan, Stars, Premium yoki sovg‘a yo‘qolgani haqida gap yo‘q. Quyida tekshirish, yangilash va firibgarlikdan himoya.",
      metaTitle: "Telegram stiker xatosi: Stars balansi, Premium",
      metaDescription: "Rasmiy hisobotda stiker xatosi faqat iOS ilovasini yopib qo‘ygani qayd etilgan, Stars, Premium yoki sovg‘a yo‘qolgani haqida gap yo‘q.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Баг со стикером в Telegram: грозит ли он Stars, Premium и подаркам?",
      excerpt: "В официальном отчёте баг со стикером только закрывал приложение на iOS — о пропаже Stars, Premium или подарков там ни слова. Ниже: как проверить аккаунт, обновиться и не попасться мошенникам.",
      metaTitle: "Баг со стикером в Telegram",
      metaDescription: "В официальном отчёте баг со стикером только закрывал приложение на iOS — о пропаже Stars, Premium или подарков там ни слова.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram sticker crash bug: are your Stars, Premium and gifts at risk?",
      excerpt: "The official bug report says the sticker bug only crashed the iOS app and mentions no lost Stars, Premium or gifts. This guide covers how to check your account, update the app and avoid scams.",
      metaTitle: "Telegram sticker crash bug",
      metaDescription: "The official bug report says the sticker bug only crashed the iOS app and mentions no lost Stars, Premium or gifts.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
