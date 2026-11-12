import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "non-custodial-gram-hamyon-zaxira-sozlari";

/**
 * Gram hamyon zaxira so‘zlari: kalitni kim saqlaydi va yo‘qolsa nima bo‘ladi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-12): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanalda «har bir Telegram foydalanuvchisiga non-custodial Gram hamyon» degan xabarni o'qigan O'zbekistondagi foydalanuvchi «gram hamyon zaxira so'zlari» deb qidiradi. U kalitni kim saqlashini, telefon yoki so'zlar yo'qolsa mablag' va Stars nima bo'lishini, firibgarlar so'zlarni qanday so'rab olishini va Stars/Premium'ni hamyonsiz so'mda xavfsiz olish yo'lini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-12):
 *   https://ton.org/
 *   https://core.telegram.org/bots/widgets
 *   https://core.telegram.org/bots/api-changelog
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
  return <p>Non-custodial tamoyiliga ko‘ra Gram hamyon kaliti Telegram’da emas, sizning qurilmangizda turadi. Shuning uchun zaxira so‘zlarini ham, kalitni ham hech kimga bermang — o‘zini «support» deb tanishtirgan akkauntga ham. Telegram Stars va Premium esa akkauntga bog‘langan. Ularni olish yoki saqlash uchun bu so‘zlar umuman kerak emas.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#gram-hamyonda-kalitni-kim-saqlaydi", label: "Gram hamyonda kalitni kim saqlaydi: Telegrammi yoki siz?" },
          { href: "#zaxira-sozlari-kalit-va-zaxira", label: "Zaxira so‘zlari, kalit va zaxira nusxa: nimasi nima?" },
          { href: "#telefon-yoqolsa-yoki-sozlar-esdan", label: "Telefon yo‘qolsa yoki so‘zlar esdan chiqsa, Gram nima bo‘ladi?" },
          { href: "#stars-balansi-va-premium-hamyonga", label: "Stars balansi va Premium hamyonga bog‘liqmi?" },
          { href: "#firibgarlar-zaxira-sozlarini-qanday-sorab", label: "Firibgarlar zaxira so‘zlarini qanday so‘rab oladi?" },
          { href: "#imzo-yoki-tolov-oynasi-chiqsa", label: "Imzo yoki to‘lov oynasi chiqsa, nimani tekshirish kerak?" },
          { href: "#hamyon-umuman-korinmasa-bu-nimani", label: "Hamyon umuman ko‘rinmasa: bu nimani bildiradi va nima qilmaslik kerak?" },
          { href: "#stars-va-premiumni-zaxira-sozlarisiz", label: "Stars va Premium’ni zaxira so‘zlarisiz, so‘mda qanday olish mumkin?" },
        ]}
      />
      <h2 id="gram-hamyonda-kalitni-kim-saqlaydi">Gram hamyonda kalitni kim saqlaydi: Telegrammi yoki siz?</h2>
      <p><a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">TON rasmiy saytida</a> yozilishicha, Telegram jamoasining non-custodial Gram hamyoni messenger interfeysiga o‘rnatilgan. Gram — TON blokcheynining asosiy tangasi. Unda tarmoq komissiyasi to‘lanadi, u validatsiya va ovoz berishda ham ishlatiladi.</p>
      <p>«Non-custodial» hamyon turini bildiradi: kalit xizmatda emas, foydalanuvchining o‘zida saqlanadi. Bank kartangiz yo‘qolsa, bank uni bloklab, yangisini chiqaradi. Non-custodial hamyonda bunday «bank» yo‘q. Kalit kimning qo‘lida bo‘lsa, mablag‘ ham o‘shaniki.</p>
      <p><a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">Telegram hujjatiga</a> ko‘ra, to‘lovni foydalanuvchi qurilmasidagi hamyon amalga oshiradi. Demak, xavf ham asosan o‘sha qurilmaga bog‘liq: telefon kimning qo‘lida, ekran qulfi bormi, unga qanday ilovalar o‘rnatilgan.</p>
      <p>Kanallarda «bu yoz», «insoniyat tarixidagi eng yirik» va «milliarddan ortiq foydalanuvchi» degan gaplar tarqaldi. Ularni telegram.org’da rasmiy e’lon sifatida topa olmadik. Bu gaplarni reklama da’vosi deb qabul qiling: ulardan sana yoki qamrov haqida xulosa chiqarmang.</p>
      <h2 id="zaxira-sozlari-kalit-va-zaxira">Zaxira so‘zlari, kalit va zaxira nusxa: nimasi nima?</h2>
      <p>Bu tushunchalar ko‘p aralashtiriladi, lekin ularning har biri boshqa-boshqa narsa.</p>
      <CompareTable
        headers={["Tushuncha", "Nima", "Kimda turadi", "Yo‘qolsa nima bo‘ladi"]}
        rows={[
          ["Hamyon kaliti", "Mablag‘ni boshqarish huquqi", "Foydalanuvchining qurilmasida", "Kalitsiz hamyonni boshqarib bo‘lmaydi"],
          ["Zaxira so‘zlari", "Hamyonni tiklash uchun so‘zlar ketma-ketligi (kripto hamyonlarda keng tarqalgan usul)", "Faqat sizda", "Begonaga tushsa, mablag‘ni o‘sha odam boshqara oladi"],
          ["Qurilmadagi hamyon", "To‘lovni amalga oshiradigan hamyon", "Telefon yoki kompyuterda", "Zaxira o‘chiq bo‘lsa, qurilma bilan birga yo‘qolishi mumkin"],
          ["Zaxira nusxa (backup)", "Ilovadagi sozlama", "Ilova sozlamalarida", "O‘chiq bo‘lsa, har qurilmada alohida kalit bo‘ladi"],
          ["Profildagi hamyon kartasi", "Hamyonning profildagi ko‘rinishi", "Profilda", "Kalit emas, uni ko‘rgan odam mablag‘ni boshqara olmaydi"],
          ["Telegram akkaunti", "Stars balansi va Premium", "Telegram akkauntida", "Akkauntga qayta kirsangiz, o‘z joyida qoladi"],
        ]}
      />
      <p>Ikki narsaga alohida e’tibor bering. Birinchisi — zaxira nusxa. Telegram hujjatiga ko‘ra, zaxira o‘chiq bo‘lsa, har bir qurilmada alohida kalit va alohida hamyon bo‘ladi. Telefonda bitta hamyon, kompyuterda boshqasi chiqishining odatdagi sababi shu.</p>
      <p>Ikkinchisi — profildagi karta. To‘lov qiladigan hamyon profilda ko‘rsatilgan kartadan farq qilishi mumkin. <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API o‘zgarishlar ro‘yxatida</a> TonWalletCard kabi klasslar qo‘shilgani yozilgan. Lekin kartaning ko‘rinishi kalit qayerdaligini ko‘rsatmaydi.</p>
      <Notice label={"Muhim"}>Telegram ichidagi hamyonda tiklash iborasi necha so‘zdan iboratligi, bulutga zaxira qanday ishlashi va so‘zlarni boshqa hamyonga ko‘chirish mumkinligi bu maqolada tasdiqlanmagan. Internetdagi «yo‘riqnomalar»ga emas, ilova ekranida ko‘rsatilgan tartibga amal qiling.</Notice>
      <h3>So‘zlarni qayerda saqlamaslik kerak</h3>
      <p>Ilova sizga tiklash so‘zlarini ko‘rsatsa, ularni internetga chiqadigan joyda saqlamang:</p>
      <ul>
        <li>telefon galereyasidagi skrinshot;</li>
        <li>zametka ilovasi yoki bulutga sinxronlanadigan hujjat;</li>
        <li>o‘zingizga yuborilgan xabar, shu jumladan Telegram’dagi «Saqlanganlar»;</li>
        <li>elektron pochtadagi qoralama.</li>
      </ul>
      <p>Qog‘ozga yozib, faqat o‘zingiz biladigan joyda saqlash ancha xavfsiz. Qog‘ozni suratga olmang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="telefon-yoqolsa-yoki-sozlar-esdan">Telefon yo‘qolsa yoki so‘zlar esdan chiqsa, Gram nima bo‘ladi?</h2>
      <p>Natija zaxira sozlamasiga va so‘zlar kimda qolganiga bog‘liq. Uch holat bo‘lishi mumkin:</p>
      <ul>
        <li><b>Telefon yo‘qoldi, zaxira yoqilgan edi.</b> Yangi qurilmada Telegram’ga kiring va ilova hamyonni tiklashni taklif qiladimi, ko‘ring. Aniq tartibni ilovaning o‘zi ko‘rsatadi.</li>
        <li><b>Telefon yo‘qoldi, zaxira o‘chiq edi.</b> Kalit faqat o‘sha telefonda turgan. Yangi qurilmada boshqa hamyon paydo bo‘ladi, eski mablag‘ unda ko‘rinmasligi mumkin. Non-custodial hamyonda kalitsiz mablag‘ni xizmat tiklab berishi kutilmaydi. Telegram buni qila olishi haqida ham rasmiy tasdiq yo‘q.</li>
        <li><b>So‘zlar begonaga tushib qoldi.</b> Mablag‘ni darhol o‘zingiz yaratgan yangi hamyonga o‘tkazing va eski hamyonni boshqa ishlatmang. O‘tkazmada tarmoq komissiyasi ushlanadi. <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> ma’lumotiga ko‘ra, Gram o‘tkazmasi taxminan 0,00039 Gram, USDt o‘tkazmasi taxminan 0,001 Gram turadi. Komissiya qat’iy belgilangan va tarmoq yuklamasiga bog‘liq emas.</li>
      </ul>
      <p>Amaliy qoida: hamyonda katta summa saqlashdan oldin zaxira sozlamasini tekshiring. Avval kichik summani o‘tkazib ko‘ring. Ikkinchi qurilmangiz bo‘lsa, unda ham xuddi shu hamyon ochilishini tekshiring. Kompyuter va telefonda manzil har xil chiqsa, mablag‘ni qaysi biriga tushirayotganingizni aniq biling — keyin «pul yo‘qoldi» degan vahima bo‘lmaydi.</p>
      <h2 id="stars-balansi-va-premium-hamyonga">Stars balansi va Premium hamyonga bog‘liqmi?</h2>
      <p>Yo‘q. Stars va Premium hamyon kalitida emas, Telegram akkauntida turadi. Misol: Dilshod telefonini taksida qoldirib ketdi. U yangi telefondan akkauntiga qayta kirdi — Stars balansi va Premium obunasi o‘z joyida edi. Hamyonda zaxirasiz turgan Gram esa uning uchun yo‘qolgan bo‘lishi mumkin.</p>
      <p>Demak, Stars va Premium uchun asosiy xavf hamyon emas, akkauntning o‘g‘irlanishi. Bunga qarshi asosiy himoya — 2FA paroli. Uni qanday sozlash haqida: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">Telegram akkauntini o‘g‘irlashdan himoya</Link>.</p>
      <p>TON saytida Telegram Stars’ni Gram bilan sotib olish mumkinligi yozilgan. Lekin bu yagona yo‘l emas: so‘mda olishda hamyon umuman ishtirok etmaydi. Ikki balans qanday farq qilishi haqida: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link>.</p>
      <p>Kanal egalari uchun bitta qo‘shimcha gap. Telegram reklama daromadi Gram’da to‘lanishi mumkin. Daromad hamyonga tushsa, zaxira so‘zlarining xavfsizligi endi daromad xavfsizligi masalasi ham bo‘ladi.</p>
      <h2 id="firibgarlar-zaxira-sozlarini-qanday-sorab">Firibgarlar zaxira so‘zlarini qanday so‘rab oladi?</h2>
      <p>Ko‘pincha bevosita so‘ramaydi: avval vahima uyg‘otadi yoki foyda va’da qiladi. O‘zbek tilida uchraydigan namunalar:</p>
      <ul>
        <li><b>«Bloklash» qo‘rquvi:</b> «Hamyoningiz shubhali faoliyat sabab muzlatildi. Tasdiqlash uchun 24 soat ichida zaxira so‘zlaringizni yuboring.»</li>
        <li><b>Soxta airdrop:</b> «Gram airdrop boshlandi! Ulushingizni olish uchun hamyonni sinxronlang» — havola esa so‘zlarni kiritish sahifasiga olib boradi.</li>
        <li><b>Soxta yordam:</b> Telegram logotipi qo‘yilgan, nomida «Support» so‘zi bor akkaunt o‘zi birinchi yozadi va «muammoni hal qilish» uchun so‘zlarni so‘raydi.</li>
        <li><b>«Arzon Stars»:</b> «Stars’ni yarim narxda beraman, faqat hamyoningizni ulab, so‘zlarni ko‘rsating.»</li>
        <li><b>«Tiklovchi» bot:</b> «Yo‘qolgan hamyonni 5 daqiqada qaytaramiz» deydi va avval so‘zlarni, keyin «xizmat haqi»ni so‘raydi.</li>
      </ul>
      <p>Asosiy qoida oddiy: zaxira so‘zlarini hech qanday halol bot, sayt yoki odam so‘ramaydi. So‘ragan har qanday tomonni firibgar deb hisoblang.</p>
      <p>O‘rnatilgan hamyonda bot to‘lov yoki imzo so‘rashi mumkin. Bunda oynada bot, summa va qabul qiluvchi ko‘rsatiladi, tasdiqni esa o‘zingiz berasiz. Imzolash uchun so‘zlarni yozish kerak emas. Shuning uchun so‘z so‘ralishining o‘zi aldov belgisi.</p>
      <p>Mini-ilovalar hamyonga TON Connect va deeplink orqali ulanadi. Ulanish oynasida nima so‘ralayotganini o‘qimasdan tasdiqlamang. Bu haqda batafsil: <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">Fragment’dagi hamyon ulanishi xavfi</Link>.</p>
      <h2 id="imzo-yoki-tolov-oynasi-chiqsa">Imzo yoki to‘lov oynasi chiqsa, nimani tekshirish kerak?</h2>
      <p>Tasdiqlash tugmasini bosishdan oldin oynadagi uch narsani o‘qib chiqing va o‘zingizga bitta savol bering:</p>
      <Steps>
        <Step title={"Botni tekshiring"}>oynada qaysi bot so‘rayotgani ko‘rsatiladi. Uning username’ini siz ochgan bot bilan harfma-harf solishtiring: «l» o‘rnida «I», ortiqcha pastki chiziq bo‘lmasin.</Step>
        <Step title={"Summani o‘qing"}>u siz kutgan summa bilan bir xil bo‘lishi kerak. Nol ortiqcha bo‘lsa, to‘xtang.</Step>
        <Step title={"Qabul qiluvchini ko‘ring"}>mablag‘ kimga ketayotganini tekshiring. Manzil notanish bo‘lsa, tasdiqlamang.</Step>
        <Step title={"Imzo nima uchunligini o‘zingizdan so‘rang"}>nimaga imzo chekayotganingizni tushunmasangiz, tasdiqlamang.</Step>
        <Step title={"So‘z so‘ralsa, to‘xtang"}>oynani yoping, botni bloklang va shikoyat qiling.</Step>
      </Steps>
      <p>Yana bir nozik holat bor. Telegram hujjatiga ko‘ra, hamyoni yo‘q foydalanuvchiga hamyon birinchi marta kerak bo‘lganda yaratiladi. Kutilmaganda «hamyon yaratildi» degan xabar chiqsa, hamyonni qaysi bot so‘raganini eslang va ilovadagi zaxira sozlamasini darhol ko‘rib chiqing.</p>
      <h2 id="hamyon-umuman-korinmasa-bu-nimani">Hamyon umuman ko‘rinmasa: bu nimani bildiradi va nima qilmaslik kerak?</h2>
      <p>Telegram hujjatiga ko‘ra, ilovaning eski versiyalarida va hamyon mavjud bo‘lmagan mamlakatlarda hamyon bo‘lmaydi. O‘zbekistonda u mavjudmi yoki yo‘qmi, rasmiy manbada aytilmagan.</p>
      <p>Hamyon ko‘rinmasa, avval Telegram’ni yangilang va sozlamalarni qayta ko‘ring. Shunda ham ko‘rinmasa, kuting: bu akkauntingizda muammo borligini bildirmaydi. Stars balansingiz va Premium’ingiz bunga bog‘liq emas.</p>
      <Notice label={"Muhim"}>«Hamyonni ochib beramiz», «VPN bilan ulab beramiz» deb SMS kod, parol yoki zaxira so‘zlarini so‘raydigan bot va odamlar — xavfli. Bunday «yordam» oxiri akkaunt yoki mablag‘ni yo‘qotish bilan tugaydi. Hamyonni akkauntga bog‘lash kerakmi, degan savolga javob: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">Hamyonni Telegram akkauntga bog‘lash</Link>.</Notice>
      <h2 id="stars-va-premiumni-zaxira-sozlarisiz">Stars va Premium’ni zaxira so‘zlarisiz, so‘mda qanday olish mumkin?</h2>
      <p>Hamyon ochish, Gram sotib olish yoki so‘zlarni saqlash shart emas. StarsPaymee boti orqali tartib quyidagicha:</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (eng kam buyurtma 50 dona) yoki Premium: 3, 6 yoki 12 oy. 1 oylik tarif ham bor, uning narxini botda ko‘ring.</Step>
        <Step title={"@username kiriting"}>o‘zingizniki yoki sovg‘a oluvchiniki. Parol, SMS kod, hamyon yoki zaxira so‘zi so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Stars narxi usulga bog‘liq: karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan dona narxi {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Premium narxi hamma usulda bir xil: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}.</Step>
        <Step title={"Yetkazilishini tekshiring"}>buyurtma odatda bir necha soniyada (~5 soniya) avtomatik keladi. Muammo bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing.</Step>
      </Steps>
      <p>Faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi: muddat faol obuna ustiga qo‘shilmaydi. To‘lov uchun xalqaro karta, kripto hamyon yoki VPN kerak emas. StarsPaymee mustaqil xizmat: Telegram’dan alohida ishlaydi va uning nomidan gapirmaydi. Narxlar va tariflar <Link href="/stars">Stars</Link> hamda <Link href="/premium">Premium</Link> sahifalarida.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Telegram qo‘llab-quvvatlash xizmati Gram hamyonimning zaxira so‘zlarini so‘rashi mumkinmi?", answer: "Yo‘q. Non-custodial hamyonda kalit faqat sizda bo‘ladi, so‘zlarni so‘ragan har qanday «support» — firibgar. Bunday akkauntni bloklang va unga hech narsa yubormang." },
  { question: "Zaxira so‘zlarini telefondagi zametkaga yoki skrinshotga saqlasam xavflimi?", answer: "Ha, xavfli: telefon o‘g‘irlansa yoki zararli ilova galereya va zametkalarga kirsa, so‘zlar begonaga o‘tadi. Ularni qog‘ozga yozib, internetga ulanmagan joyda saqlang." },
  { question: "Eski telefondagi Gram yangi telefonda ko‘rinmayapti — pul yo‘qoldimi?", answer: "Shart emas. Zaxira o‘chiq bo‘lgan bo‘lsa, yangi qurilmada alohida hamyon ochiladi, mablag‘ esa eski qurilmadagi hamyonda qoladi. Eski telefon qo‘lingizda bo‘lsa, Gram’ni o‘sha yerdan kerakli manzilga o‘tkazing." },
  { question: "Telegram akkauntimdan chiqib ketsam, Stars balansim hamyon bilan birga yo‘qoladimi?", answer: "Stars balansi va Premium akkauntda turadi, qayta kirganingizda joyida bo‘ladi. Hamyonning taqdiri esa zaxira sozlamasiga bog‘liq, shuning uchun chiqishdan oldin uni tekshiring." },
  { question: "Bot imzo so‘rayapti — bu zaxira so‘zlarini berish bilan bir xilmi?", answer: "Yo‘q. Imzolashda oynada bot, summa va qabul qiluvchi ko‘rinadi va siz faqat tasdiqlaysiz — so‘z yozish kerak emas. Biroq tushunmagan imzoga rozilik bermang." },
  { question: "Chatga «hamyonni sinxronlang, bonus Gram beriladi» degan havola keldi — nima qilay?", answer: "Havolani ochmang va yuborgan akkauntni bloklang. Bonus va’da qilib so‘z kiritishni so‘raydigan sahifa hamyonni bo‘shatish uchun tuzilgan bo‘ladi." },
  { question: "Zaxira so‘zlarim begonaga tushgan bo‘lsa, birinchi nima qilaman?", answer: "O‘zingiz yaratgan yangi hamyonga mablag‘ni darhol o‘tkazing, o‘tkazmada kichik tarmoq komissiyasi ushlanadi. Eski hamyonni boshqa ishlatmang va unga pul tushirmang." },
  { question: "Stars yoki Premium olish uchun Gram hamyon ochishim shartmi?", answer: "Shart emas. @StarsPaymee_bot’da so‘mda to‘laysiz va faqat @username kiritasiz — hamyon, Gram va zaxira so‘zlari bu jarayonda qatnashmaydi." },
  { question: "Do‘stim uchun Premium olsam, uning hamyoni yoki so‘zlari kerak bo‘ladimi?", answer: "Yo‘q, faqat uning @username’i kerak. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi, lekin do‘stingizda faol obuna bo‘lsa, bot yangi buyurtma ochmaydi." },
  { question: "Gram hamyon menda ko‘rinmayapti — bu akkauntim bloklanganini bildiradimi?", answer: "Yo‘q. Telegram hujjatiga ko‘ra, ilova versiyasi eski bo‘lsa yoki hamyon ishlamaydigan mamlakatda bo‘lsangiz, hamyon ko‘rinmaydi. Telegram’ni yangilang va uni «ochib beraman» degan odamlardan uzoqroq yuring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Gram-кошелёк — non-custodial, поэтому его ключ хранится не у Telegram, а на вашем устройстве. Никому не передавайте ни резервные слова, ни сам ключ, даже аккаунту, который называет себя «поддержкой». Telegram Stars и Premium привязаны к аккаунту. Чтобы купить их или сохранить, эти слова вообще не нужны.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#gram-hamyonda-kalitni-kim-saqlaydi", label: "Кто хранит ключ в Gram-кошельке: Telegram или вы?" },
          { href: "#zaxira-sozlari-kalit-va-zaxira", label: "Резервные слова, ключ и резервная копия: что есть что?" },
          { href: "#telefon-yoqolsa-yoki-sozlar-esdan", label: "Телефон потерян или слова забыты: что будет с Gram?" },
          { href: "#stars-balansi-va-premium-hamyonga", label: "Зависят ли баланс Stars и Premium от кошелька?" },
          { href: "#firibgarlar-zaxira-sozlarini-qanday-sorab", label: "Как мошенники выманивают резервные слова?" },
          { href: "#imzo-yoki-tolov-oynasi-chiqsa", label: "Появилось окно подписи или оплаты: что проверить?" },
          { href: "#hamyon-umuman-korinmasa-bu-nimani", label: "Кошелёк вообще не виден: что это значит и чего не делать?" },
          { href: "#stars-va-premiumni-zaxira-sozlarisiz", label: "Как купить Stars и Premium в сумах без резервных слов?" },
        ]}
      />
      <h2 id="gram-hamyonda-kalitni-kim-saqlaydi">Кто хранит ключ в Gram-кошельке: Telegram или вы?</h2>
      <p>На <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">официальном сайте TON</a> написано, что non-custodial Gram-кошелёк от команды Telegram встроен в интерфейс мессенджера. Gram — основная монета блокчейна TON. Ею оплачивают сетевые комиссии, её используют для валидации и голосования.</p>
      <p>Слово «non-custodial» описывает тип кошелька: ключ хранится у самого пользователя, а не у сервиса. Если вы потеряете банковскую карту, банк её заблокирует и выпустит новую. У non-custodial кошелька такого «банка» нет. У кого ключ, тому и принадлежат средства.</p>
      <p>Согласно <a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">документации Telegram</a>, платёж проводит кошелёк на устройстве пользователя. Поэтому риск в основном связан с самим устройством: в чьих руках телефон, стоит ли блокировка экрана, какие приложения на нём установлены.</p>
      <p>По каналам разошлись фразы «этим летом», «крупнейший в истории человечества» и «больше миллиарда пользователей». Официального объявления с ними на telegram.org мы не нашли. Это рекламные заявления, и делать по ним выводы о сроках или охвате не стоит.</p>
      <h2 id="zaxira-sozlari-kalit-va-zaxira">Резервные слова, ключ и резервная копия: что есть что?</h2>
      <p>Эти понятия часто путают, хотя каждое означает своё.</p>
      <CompareTable
        headers={["Понятие", "Что это", "Где находится", "Что будет при потере"]}
        rows={[
          ["Ключ кошелька", "Право распоряжаться средствами", "На устройстве пользователя", "Без ключа кошельком управлять нельзя"],
          ["Резервные слова (сид-фраза)", "Набор слов для восстановления кошелька (распространённый способ в криптокошельках)", "Только у вас", "Если они попали к постороннему, он сможет распоряжаться средствами"],
          ["Кошелёк на устройстве", "Кошелёк, который проводит платёж", "На телефоне или компьютере", "Если копия выключена, может пропасть вместе с устройством"],
          ["Резервная копия (backup)", "Настройка в приложении", "В настройках приложения", "Если выключена, на каждом устройстве свой ключ"],
          ["Карточка кошелька в профиле", "Как кошелёк выглядит в профиле", "В профиле", "Это не ключ: тот, кто её видит, не может распоряжаться средствами"],
          ["Аккаунт Telegram", "Баланс Stars и Premium", "В аккаунте Telegram", "После повторного входа всё остаётся на месте"],
        ]}
      />
      <p>Отдельно обратите внимание на две вещи. Первая — резервная копия. По документации Telegram, если она выключена, на каждом устройстве будет свой ключ и свой кошелёк. Обычно именно поэтому на телефоне один кошелёк, а на компьютере другой.</p>
      <p>Вторая — карточка в профиле. Кошелёк, который проводит платёж, может отличаться от карточки, показанной в профиле. В <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">списке изменений Bot API</a> упомянуто, что добавлены классы вроде TonWalletCard. Но по внешнему виду карточки нельзя понять, где находится ключ.</p>
      <Notice label={"Важно"}>Эта статья не подтверждает, из скольких слов состоит фраза восстановления во встроенном кошельке Telegram, как работает облачная копия и можно ли перенести слова в другой кошелёк. Следуйте тому, что показывает экран приложения, а не «инструкциям» из интернета.</Notice>
      <h3>Где не стоит хранить слова</h3>
      <p>Если приложение покажет вам слова восстановления, не храните их там, где есть выход в интернет:</p>
      <ul>
        <li>скриншот в галерее телефона;</li>
        <li>приложение заметок или документ, который синхронизируется с облаком;</li>
        <li>сообщение самому себе, в том числе в «Избранном» Telegram;</li>
        <li>черновик в электронной почте.</li>
      </ul>
      <p>Надёжнее записать слова на бумагу и хранить в месте, о котором знаете только вы. Бумагу не фотографируйте.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="telefon-yoqolsa-yoki-sozlar-esdan">Телефон потерян или слова забыты: что будет с Gram?</h2>
      <p>Это зависит от настройки резервной копии и от того, у кого остались слова. Возможны три ситуации:</p>
      <ul>
        <li><b>Телефон потерян, копия была включена.</b> Войдите в Telegram на новом устройстве и посмотрите, предложит ли приложение восстановить кошелёк. Точный порядок покажет само приложение.</li>
        <li><b>Телефон потерян, копия была выключена.</b> Ключ был только на том телефоне. На новом устройстве появится другой кошелёк, и старых средств в нём может не оказаться. Сервис не восстанавливает средства non-custodial кошелька без ключа. Официального подтверждения, что это может сделать Telegram, тоже нет.</li>
        <li><b>Слова попали к постороннему.</b> Сразу переведите средства в новый кошелёк, который вы создали сами, и больше не пользуйтесь старым. С перевода спишется сетевая комиссия. По данным <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, перевод Gram стоит около 0,00039 Gram, перевод USDt — около 0,001 Gram. Комиссия фиксированная и не зависит от загрузки сети.</li>
      </ul>
      <p>Практическое правило: прежде чем держать в кошельке крупную сумму, проверьте настройку резервной копии. Сначала переведите небольшую сумму на пробу. Если у вас есть второе устройство, проверьте, открывается ли на нём тот же кошелёк. Если адреса на компьютере и телефоне разные, знайте точно, на какой из них приходят средства. Тогда паники «деньги пропали» не будет.</p>
      <h2 id="stars-balansi-va-premium-hamyonga">Зависят ли баланс Stars и Premium от кошелька?</h2>
      <p>Нет. Stars и Premium хранятся в аккаунте Telegram, а не в ключе кошелька. Пример: Дильшод забыл телефон в такси. Он вошёл в аккаунт с нового телефона, и баланс Stars с подпиской Premium оказались на месте. А Gram, который лежал в кошельке без резервной копии, для него мог пропасть.</p>
      <p>Значит, главная угроза для Stars и Premium — не кошелёк, а угон аккаунта. Основная защита от него — пароль двухэтапной проверки (2FA). Как его настроить: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита аккаунта Telegram от угона</Link>.</p>
      <p>На сайте TON написано, что Telegram Stars можно купить за Gram. Но это не единственный способ: при покупке в сумах кошелёк вообще не участвует. Чем отличаются эти два баланса, читайте в статье <Link href="/blog/telegram-wallet-va-stars-farqi">о разнице между Telegram Wallet и Stars</Link>.</p>
      <p>Ещё одно замечание для владельцев каналов. Доход от рекламы в Telegram может выплачиваться в Gram. Если он поступает на кошелёк, то безопасность резервных слов становится и безопасностью вашего дохода.</p>
      <h2 id="firibgarlar-zaxira-sozlarini-qanday-sorab">Как мошенники выманивают резервные слова?</h2>
      <p>Прямо просят редко. Чаще сначала пугают или обещают выгоду. Типичные примеры из чатов:</p>
      <ul>
        <li><b>Страх блокировки:</b> «Ваш кошелёк заморожен из-за подозрительной активности. Для подтверждения пришлите резервные слова в течение 24 часов».</li>
        <li><b>Фальшивый airdrop:</b> «Стартовал airdrop Gram! Чтобы получить свою долю, синхронизируйте кошелёк». Ссылка ведёт на страницу, где просят ввести слова.</li>
        <li><b>Фальшивая поддержка:</b> аккаунт с логотипом Telegram и словом «Support» в имени пишет первым и просит слова, чтобы «решить проблему».</li>
        <li><b>«Дешёвые Stars»:</b> «Продам Stars за полцены, только подключите кошелёк и покажите слова».</li>
        <li><b>Бот-«восстановитель»:</b> «Вернём потерянный кошелёк за 5 минут». Сначала просит слова, потом «плату за услугу».</li>
      </ul>
      <p>Правило простое: честный бот, сайт или человек никогда не просит резервные слова. Любого, кто их просит, считайте мошенником.</p>
      <p>Через встроенный кошелёк бот может запросить оплату или подпись. В окне при этом указаны бот, сумма и получатель, а подтверждаете вы сами. Для подписи слова вводить не нужно, поэтому уже сама просьба их ввести — признак обмана.</p>
      <p>Мини-приложения подключаются к кошельку через TON Connect и deeplink. Не подтверждайте подключение, не прочитав, что именно запрашивается. Подробнее — в статье <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">о рисках подключения кошелька на Fragment</Link>.</p>
      <h2 id="imzo-yoki-tolov-oynasi-chiqsa">Появилось окно подписи или оплаты: что проверить?</h2>
      <p>Прежде чем нажать кнопку подтверждения, прочитайте в окне три вещи и задайте себе один вопрос:</p>
      <Steps>
        <Step title={"Проверьте бота"}>в окне указано, какой бот делает запрос. Сверьте его username с тем ботом, которого вы открывали, буква в букву: нет ли «I» вместо «l», лишнего подчёркивания.</Step>
        <Step title={"Прочитайте сумму"}>она должна совпадать с той, которую вы ожидали. Если в ней лишний ноль, остановитесь.</Step>
        <Step title={"Посмотрите получателя"}>проверьте, кому уходят средства. Если адрес незнакомый, не подтверждайте.</Step>
        <Step title={"Спросите себя, зачем эта подпись"}>если не понимаете, под чем подписываетесь, не подтверждайте.</Step>
        <Step title={"Просят слова — остановитесь"}>закройте окно, заблокируйте бота и пожалуйтесь на него.</Step>
      </Steps>
      <p>Есть ещё одна тонкость. По документации Telegram, если у пользователя нет кошелька, он создаётся в тот момент, когда понадобится впервые. Если неожиданно появилось сообщение «кошелёк создан», вспомните, какой бот его запросил, и сразу проверьте настройку резервной копии в приложении.</p>
      <h2 id="hamyon-umuman-korinmasa-bu-nimani">Кошелёк вообще не виден: что это значит и чего не делать?</h2>
      <p>По документации Telegram, кошелька нет в старых версиях приложения и в странах, где он недоступен. Доступен ли он в Узбекистане, официальный источник не сообщает.</p>
      <p>Если кошелёк не виден, сначала обновите Telegram и заново проверьте настройки. Если и после этого его нет, подождите. Проблем с аккаунтом это не означает, а баланс Stars и Premium от этого не зависят.</p>
      <Notice label={"Важно"}>Опасны боты и люди, которые обещают «откроем кошелёк» или «подключим через VPN» и просят SMS-код, пароль или резервные слова. Такая «помощь» заканчивается потерей аккаунта или средств. Нужно ли вообще привязывать кошелёк к аккаунту, разобрано в статье <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">о привязке кошелька к аккаунту Telegram</Link>.</Notice>
      <h2 id="stars-va-premiumni-zaxira-sozlarisiz">Как купить Stars и Premium в сумах без резервных слов?</h2>
      <p>Открывать кошелёк, покупать Gram и хранить слова не нужно. Через бот StarsPaymee это делается так:</p>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите товар"}>Stars (минимальный заказ — 50 штук) или Premium на 3, 6 или 12 месяцев. Есть и тариф на 1 месяц, его цену смотрите в боте.</Step>
        <Step title={"Введите @username"}>свой или того, кому дарите. Пароль, SMS-код, кошелёк и резервные слова не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>цена Stars зависит от способа: при переводе на карту (UzCard/HUMO) или оплате с баланса бота одна звезда стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Цена Premium одинакова при любом способе: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}.</Step>
        <Step title={"Проверьте доставку"}>заказ обычно приходит автоматически за несколько секунд (~5 секунд). Если что-то пошло не так, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>Если на аккаунте уже есть активная подписка Premium, бот не откроет новый заказ Premium: срок не добавляется поверх действующей подписки. Для оплаты не нужны зарубежная карта, криптокошелёк или VPN. StarsPaymee — независимый сервис: он работает отдельно от Telegram и не говорит от его имени. Цены и тарифы — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Может ли поддержка Telegram попросить резервные слова от моего Gram-кошелька?", answer: "Нет. Ключ от non-custodial кошелька есть только у вас, так что любая «поддержка», которая просит слова, — мошенник. Заблокируйте такой аккаунт и ничего ему не отправляйте." },
  { question: "Опасно ли хранить резервные слова в заметках или на скриншоте в телефоне?", answer: "Да. Если телефон украдут или вредоносное приложение получит доступ к галерее и заметкам, слова окажутся у чужого человека. Запишите их на бумагу и храните там, где нет интернета." },
  { question: "На новом телефоне не видно Gram со старого — деньги пропали?", answer: "Не обязательно. Если резервная копия была выключена, на новом устройстве открывается отдельный кошелёк, а средства лежат в кошельке на старом. Если старый телефон у вас, переведите Gram оттуда на нужный адрес." },
  { question: "Если я выйду из аккаунта Telegram, баланс Stars пропадёт вместе с кошельком?", answer: "Баланс Stars и Premium хранятся в аккаунте и после повторного входа будут на месте. А что будет с кошельком, зависит от настройки резервной копии, поэтому проверьте её до выхода." },
  { question: "Бот просит подпись — это то же самое, что отдать резервные слова?", answer: "Нет. При подписи в окне видны бот, сумма и получатель, и вы только подтверждаете — вводить слова не нужно. Но не соглашайтесь на подпись, смысл которой вам непонятен." },
  { question: "В чат пришла ссылка «синхронизируйте кошелёк и получите бонусные Gram» — что делать?", answer: "Не открывайте ссылку и заблокируйте отправителя. Страница, которая обещает бонус и просит ввести слова, сделана, чтобы опустошить кошелёк." },
  { question: "Резервные слова попали к постороннему — что делать в первую очередь?", answer: "Сразу переведите средства в новый кошелёк, который вы создали сами. С перевода спишется небольшая сетевая комиссия. Старым кошельком больше не пользуйтесь и деньги на него не отправляйте." },
  { question: "Нужно ли открывать Gram-кошелёк, чтобы купить Stars или Premium?", answer: "Нет. В @StarsPaymee_bot вы платите в сумах и указываете только @username, а кошелёк, Gram и резервные слова в покупке не участвуют." },
  { question: "Если я покупаю Premium другу, понадобятся его кошелёк или слова?", answer: "Нет, нужен только его @username. Premium подключается через механизм подарков Telegram. Но если у друга уже есть активная подписка, бот новый заказ не откроет." },
  { question: "У меня не отображается Gram-кошелёк — значит, аккаунт заблокирован?", answer: "Нет. По документации Telegram, кошелька не видно в старой версии приложения или в стране, где он недоступен. Обновите Telegram и держитесь подальше от тех, кто обещает его «открыть»." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Under the non-custodial model, your Gram wallet key is stored on your own device, not by Telegram. So never give your recovery phrase or key to anyone, including an account that calls itself “support.” Telegram Stars and Premium are tied to your Telegram account. You don’t need these words to buy them or keep them.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#gram-hamyonda-kalitni-kim-saqlaydi", label: "Who holds the key in the Gram wallet: Telegram or you?" },
          { href: "#zaxira-sozlari-kalit-va-zaxira", label: "Recovery phrase, key and backup: what’s what?" },
          { href: "#telefon-yoqolsa-yoki-sozlar-esdan", label: "If your phone is lost or you forget the words, what happens to your Gram?" },
          { href: "#stars-balansi-va-premium-hamyonga", label: "Do your Stars balance and Premium depend on the wallet?" },
          { href: "#firibgarlar-zaxira-sozlarini-qanday-sorab", label: "How do scammers trick people into giving up their recovery phrase?" },
          { href: "#imzo-yoki-tolov-oynasi-chiqsa", label: "A signature or payment window popped up: what should you check?" },
          { href: "#hamyon-umuman-korinmasa-bu-nimani", label: "The wallet doesn’t show up at all: what does that mean and what not to do?" },
          { href: "#stars-va-premiumni-zaxira-sozlarisiz", label: "How to get Stars and Premium in UZS without any recovery phrase" },
        ]}
      />
      <h2 id="gram-hamyonda-kalitni-kim-saqlaydi">Who holds the key in the Gram wallet: Telegram or you?</h2>
      <p>According to the <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">official TON website</a>, the Telegram team’s non-custodial Gram wallet is built into the messenger interface. Gram is the native coin of the TON blockchain. It pays network fees and is also used for validation and voting.</p>
      <p>“Non-custodial” describes a type of wallet. The key stays with the user, not with the service. If you lose your bank card, the bank blocks it and issues a new one. A non-custodial wallet has no bank to do that. Whoever holds the key controls the funds.</p>
      <p><a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">Telegram’s documentation</a> says payments are made by the wallet on the user’s device. That means most of the risk sits with that device: who has the phone, whether it has a screen lock and what apps are installed on it.</p>
      <p>Channels have been sharing claims like “this summer,” “the largest in human history” and “over a billion users.” We couldn’t find any of these as an official announcement on telegram.org. Treat them as marketing. Don’t use them to draw conclusions about launch dates or coverage.</p>
      <h2 id="zaxira-sozlari-kalit-va-zaxira">Recovery phrase, key and backup: what’s what?</h2>
      <p>People often mix up these terms, but each one means something different.</p>
      <CompareTable
        headers={["Term", "What it is", "Where it lives", "What happens if it’s lost"]}
        rows={[
          ["Wallet key", "The right to control the funds", "On the user’s device", "Without the key, you can’t control the wallet"],
          ["Recovery phrase", "A sequence of words used to restore a wallet (a common method in crypto wallets)", "Only with you", "If a stranger gets it, they can control the funds"],
          ["Wallet on the device", "The wallet that makes payments", "On your phone or computer", "With backup off, it can be lost along with the device"],
          ["Backup", "A setting in the app", "In the app’s settings", "When it’s off, each device has its own key"],
          ["Wallet card on the profile", "How the wallet appears on your profile", "On your profile", "It isn’t a key. Seeing it doesn’t let anyone move your funds"],
          ["Telegram account", "Holds your Stars balance and Premium", "In your Telegram account", "Log back in and they’re still there"],
        ]}
      />
      <p>Two of these deserve extra attention. The first is the backup. According to Telegram’s documentation, if backup is turned off, each device keeps its own key and its own wallet. That’s the usual reason one wallet shows up on your phone and a different one on your computer.</p>
      <p>The second is the profile card. The wallet that pays can be a different wallet from the card shown on your profile. The <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> records new classes such as TonWalletCard. But the card doesn’t tell you where the key is.</p>
      <Notice label={"Important"}>This article hasn’t confirmed how many words the recovery phrase in Telegram’s built-in wallet has, how cloud backup works or whether the words can be moved to another wallet. Follow the steps the app shows you on screen, not “guides” found online.</Notice>
      <h3>Where not to store the words</h3>
      <p>If the app shows you recovery words, don’t keep them anywhere that connects to the internet:</p>
      <ul>
        <li>a screenshot in your phone’s gallery;</li>
        <li>a notes app or a document that syncs to the cloud;</li>
        <li>a message to yourself, including Telegram’s Saved Messages;</li>
        <li>an email draft.</li>
      </ul>
      <p>Writing them on paper and keeping it somewhere only you know about is much safer. Don’t take a photo of the paper.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="telefon-yoqolsa-yoki-sozlar-esdan">If your phone is lost or you forget the words, what happens to your Gram?</h2>
      <p>It depends on your backup setting and on who has the words. There are three possible situations:</p>
      <ul>
        <li><b>Phone lost, backup was on.</b> Log in to Telegram on a new device and see whether the app offers to restore the wallet. The app itself will show you the steps.</li>
        <li><b>Phone lost, backup was off.</b> The key existed only on that phone. A different wallet will appear on the new device, and your old funds may not show up there. With a non-custodial wallet, you shouldn’t expect any service to recover funds without the key. Nothing official confirms that Telegram can do it either.</li>
        <li><b>A stranger got your words.</b> Move the funds right away to a new wallet you created yourself, and stop using the old one. The transfer costs a network fee. According to <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, a Gram transfer costs about 0.00039 Gram and a USDt transfer about 0.001 Gram. Fees are fixed and don’t depend on network load.</li>
      </ul>
      <p>A practical rule: before keeping a large amount in the wallet, check your backup setting. Send a small amount first as a test. If you use a second device, check that the same wallet opens there too. If the address on your computer and on your phone is different, be sure which one you’re sending funds to. That saves you a “my money vanished” panic later.</p>
      <h2 id="stars-balansi-va-premium-hamyonga">Do your Stars balance and Premium depend on the wallet?</h2>
      <p>No. Stars and Premium are held in your Telegram account, not in the wallet key. For example, Dilshod left his phone in a taxi. He logged back in to his account from a new phone, and his Stars balance and Premium subscription were still there. Gram he had kept in the wallet with no backup, though, may be gone for good.</p>
      <p>So for Stars and Premium, the main risk isn’t the wallet. It’s someone taking over your account. The main defense is a two-step verification (2FA) password. Here’s how to set it up: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your Telegram account from theft</Link>.</p>
      <p>The TON website says Telegram Stars can be bought with Gram. That isn’t the only option, though. When you pay in UZS, no wallet is involved at all. For how the two balances differ, see <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs. Stars</Link>.</p>
      <p>One more note for channel owners. Telegram ad revenue can be paid out in Gram. Once your earnings go into the wallet, keeping your recovery phrase safe also means keeping your income safe.</p>
      <h2 id="firibgarlar-zaxira-sozlarini-qanday-sorab">How do scammers trick people into giving up their recovery phrase?</h2>
      <p>They rarely ask outright. First they cause panic or promise a reward. Here are some common examples:</p>
      <ul>
        <li><b>The “account frozen” scare:</b> “Your wallet has been frozen due to suspicious activity. Send your recovery phrase within 24 hours to verify.”</li>
        <li><b>The fake airdrop:</b> “The Gram airdrop has started! Sync your wallet to claim your share.” The link goes to a page that asks you to type in your words.</li>
        <li><b>The fake helpdesk:</b> an account with a Telegram logo and “Support” in its name messages you first and asks for your words to “fix the issue.”</li>
        <li><b>“Cheap Stars”:</b> “I’ll sell you Stars at half price. Just connect your wallet and show me your words.”</li>
        <li><b>The “recovery” bot:</b> it claims “We’ll restore your lost wallet in 5 minutes,” then asks for your words, followed by a “service fee.”</li>
      </ul>
      <p>The core rule is simple: no honest bot, website or person will ever ask for your recovery phrase. Anyone who asks for it is a scammer.</p>
      <p>With the built-in wallet, a bot can ask you to pay or to sign. The window shows the bot, the amount and the recipient, and you confirm it yourself. You don’t need to type any words to sign. A request for your words is a sign of fraud on its own.</p>
      <p>Mini apps connect to the wallet through TON Connect and deeplinks. Don’t approve a connection window until you’ve read what it’s asking for. More on this: <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">the risks of connecting a wallet on Fragment</Link>.</p>
      <h2 id="imzo-yoki-tolov-oynasi-chiqsa">A signature or payment window popped up: what should you check?</h2>
      <p>Before you tap confirm, read three things in the window and ask yourself one question:</p>
      <Steps>
        <Step title={"Check the bot"}>the window shows which bot is making the request. Compare its username letter by letter with the bot you opened. Look out for a capital “I” in place of “l” or an extra underscore.</Step>
        <Step title={"Read the amount"}>it should match exactly what you expected. If there’s an extra zero, stop.</Step>
        <Step title={"Look at the recipient"}>check where the funds are going. If you don’t recognize the address, don’t confirm.</Step>
        <Step title={"Ask yourself what the signature is for"}>if you don’t understand what you’re signing, don’t confirm.</Step>
        <Step title={"Stop if you’re asked for your words"}>close the window, block the bot and report it.</Step>
      </Steps>
      <p>There’s one more subtle case. Telegram’s documentation says a user without a wallet gets one created the first time a wallet is needed. If you suddenly see a “wallet created” message, think about which bot requested it and check the backup setting in the app right away.</p>
      <h2 id="hamyon-umuman-korinmasa-bu-nimani">The wallet doesn’t show up at all: what does that mean and what not to do?</h2>
      <p>According to Telegram’s documentation, there’s no wallet in older versions of the app or in countries where the wallet is unavailable. No official source says whether it’s available in Uzbekistan.</p>
      <p>If you don’t see the wallet, update Telegram first and check the settings again. If it still isn’t there, just wait. It doesn’t mean anything is wrong with your account. Your Stars balance and Premium don’t depend on it.</p>
      <Notice label={"Important"}>Bots and people who say “we’ll unlock the wallet for you” or “we’ll connect it via VPN” and ask for your SMS code, password or recovery phrase are dangerous. That kind of “help” ends with a lost account or lost funds. Wondering whether you need to link a wallet to your account at all? See <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">linking a wallet to your Telegram account</Link>.</Notice>
      <h2 id="stars-va-premiumni-zaxira-sozlarisiz">How to get Stars and Premium in UZS without any recovery phrase</h2>
      <p>You don’t need to open a wallet, buy Gram or keep any recovery words. With the StarsPaymee bot, it works like this:</p>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the product"}>Stars (minimum order: 50) or Premium for 3, 6 or 12 months. There’s also a 1-month plan. Check its price in the bot.</Step>
        <Step title={"Enter the @username"}>yours or the gift recipient’s. You won’t be asked for a password, SMS code, wallet or recovery phrase.</Step>
        <Step title={"Pick a payment method"}>the Stars price depends on how you pay: by card transfer (UzCard/HUMO) or from your bot balance it’s {som(STARS_PER_UNIT_UZS, "en")} per Star, and via Click, Payme, Uzum or Paynet it’s {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. Premium costs the same with every method: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}.</Step>
        <Step title={"Check that it arrived"}>orders are usually delivered automatically within a few seconds (about 5). If something goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>If an account already has an active Premium subscription, the bot won’t open a new Premium order, because the new period isn’t added on top of an active one. You don’t need an international card, a crypto wallet or a VPN to pay. StarsPaymee is an independent service. It isn’t part of Telegram and doesn’t speak for Telegram. You’ll find prices and plans on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can Telegram support ask for my Gram wallet recovery phrase?", answer: "No. In a non-custodial wallet, only you hold the key, so any “support” asking for your words is a scammer. Block that account and don’t send it anything." },
  { question: "Is it risky to save my recovery phrase in a phone note or a screenshot?", answer: "Yes. If your phone is stolen or a malicious app gets into your gallery or notes, a stranger gets the words. Write them on paper and keep it somewhere that isn’t connected to the internet." },
  { question: "The Gram from my old phone doesn’t show on my new one. Is the money gone?", answer: "Not necessarily. If backup was off, the new device opens a separate wallet and your funds stay in the old device’s wallet. If you still have the old phone, send the Gram from there to the address you want." },
  { question: "If I log out of Telegram, will my Stars balance disappear along with the wallet?", answer: "Your Stars balance and Premium are stored in your account and will be there when you log back in. What happens to the wallet depends on your backup setting, so check it before you log out." },
  { question: "A bot is asking me to sign something. Is that the same as giving away my recovery phrase?", answer: "No. When you sign, the window shows the bot, the amount and the recipient, and you just confirm. You never type any words. Still, don’t approve a signature you don’t understand." },
  { question: "I got a link saying “sync your wallet to receive bonus Gram.” What should I do?", answer: "Don’t open it, and block the account that sent it. A page that promises a bonus and asks you to enter your words is built to empty your wallet." },
  { question: "A stranger got hold of my recovery phrase. What should I do first?", answer: "Move your funds right away to a new wallet you created yourself. A small network fee is deducted from the transfer. Stop using the old wallet and don’t send any money to it." },
  { question: "Do I need to open a Gram wallet to buy Stars or Premium?", answer: "No. In @StarsPaymee_bot you pay in UZS and only enter an @username. No wallet, Gram or recovery phrase is involved." },
  { question: "If I buy Premium for a friend, do I need their wallet or recovery phrase?", answer: "No, just their @username. Premium is activated through Telegram’s gifting mechanism. If your friend already has an active subscription, though, the bot won’t open a new order." },
  { question: "I can’t see the Gram wallet. Does that mean my account is blocked?", answer: "No. Telegram’s documentation says the wallet doesn’t appear in older app versions or in countries where it isn’t available. Update Telegram, and steer clear of anyone who offers to “unlock” it for you." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["gram hamyon zaxira so'zlari","gram hamyon tiklash","non-custodial gram hamyon","telegram hamyon kalit so'zlari","seed fraza telegram","telegram hamyon yo'qolsa","сид фраза gram кошелек","восстановить кошелек gram telegram","non-custodial кошелек telegram","секретная фраза кошелька телеграм","мошенники просят сид фразу","telegram hamyon firibgarlik"],
  howToSteps: [
    { name: "Botni tekshiring", text: "oynada qaysi bot so‘rayotgani ko‘rsatiladi. Uning username’ini siz ochgan bot bilan harfma-harf solishtiring: «l» o‘rnida «I», ortiqcha pastki chiziq bo‘lmasin." },
    { name: "Summani o‘qing", text: "u siz kutgan summa bilan bir xil bo‘lishi kerak. Nol ortiqcha bo‘lsa, to‘xtang." },
    { name: "Qabul qiluvchini ko‘ring", text: "mablag‘ kimga ketayotganini tekshiring. Manzil notanish bo‘lsa, tasdiqlamang." },
    { name: "Imzo nima uchunligini o‘zingizdan so‘rang", text: "nimaga imzo chekayotganingizni tushunmasangiz, tasdiqlamang." },
    { name: "So‘z so‘ralsa, to‘xtang", text: "oynani yoping, botni bloklang va shikoyat qiling." },
  ],
  locales: {
    uz: {
      title: "Gram hamyon zaxira so‘zlari: kalitni kim saqlaydi va yo‘qolsa nima bo‘ladi?",
      excerpt: "Gram hamyon kaliti Telegram’da emas, qurilmangizda turadi, zaxira so‘zlarini esa halol tomon hech qachon so‘ramaydi. Maqolada yo‘qotish holatlari, aldov namunalari va Stars bilan Premium’ni so‘mda olish tartibi bor.",
      metaTitle: "Gram hamyon zaxira so‘zlari",
      metaDescription: "Gram hamyon kaliti Telegram’da emas, qurilmangizda turadi, zaxira so‘zlarini esa halol tomon hech qachon so‘ramaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Сид-фраза Gram-кошелька: кто хранит ключ и что будет при её потере?",
      excerpt: "Ключ Gram-кошелька хранится не в Telegram, а на вашем устройстве, и честная сторона никогда не попросит резервные слова. В статье — случаи потери, примеры обмана и покупка Stars и Premium в сумах.",
      metaTitle: "Сид-фраза Gram-кошелька: кто хранит ключ",
      metaDescription: "Ключ Gram-кошелька хранится не в Telegram, а на вашем устройстве, и честная сторона никогда не попросит резервные слова.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Gram wallet recovery phrase: who holds the key, and what if it’s lost?",
      excerpt: "The Gram wallet key is stored on your device, not by Telegram, and no honest party will ever ask for your recovery phrase. Covers loss scenarios, scam examples and how to buy Stars and Premium in UZS.",
      metaTitle: "Gram wallet recovery phrase",
      metaDescription: "The Gram wallet key is stored on your device, not by Telegram, and no honest party will ever ask for your recovery phrase.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
