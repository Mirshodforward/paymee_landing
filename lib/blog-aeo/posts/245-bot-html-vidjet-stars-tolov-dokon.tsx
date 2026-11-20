import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "bot-html-vidjet-stars-tolov-dokon";

/**
 * Bot vidjetida Stars to‘lov olsa bo‘ladimi: vitrina, invoice va TON so‘rovi
 *
 * Avtoblogyoz yasagan maqola (2026-11-20): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegramda raqamli xizmat sotadigan bot egasi Bot API 10.4 haqidagi xabarni ko‘radi va «bot vidjet stars to‘lov» deb qidiradi. U xabar ichidagi HTML-vidjetni do‘kon vitrinasi qilib ishlatish mumkinmi, to‘lov uchun hamon Stars invoice kerakmi va TON hamyon so‘rovi bot qoidalariga qanday ta’sir qilishini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-20):
 *   https://core.telegram.org/bots/api-changelog
 *   https://core.telegram.org/bots/widgets
 *   https://core.telegram.org/bots/api
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
  return <p>Ha, Bot API 10.4 dagi HTML-vidjetda paketni tanlatib, narxini ko‘rsatish mumkin, ya’ni u vitrina vazifasini bajaradi. Lekin vidjet faqat tanlov oynasi. Rasmiy hujjatga ko‘ra, u to‘lov yoki imzoni Telegram’ning ichki hamyoni orqali so‘raydi. Stars invoice’ni vidjet ichida ochish hujjatda tasvirlanmagan. Shuning uchun Stars’ni bot yuboradigan alohida invoice bilan olish ishonchliroq.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#bot-html-vidjetini-dokon-vitrinasi", label: "Bot HTML-vidjetini do‘kon vitrinasi qilsa bo‘ladimi?" },
          { href: "#vitrina-uchun-vidjet-nimaga-yaraydi", label: "Vitrina uchun vidjet nimaga yaraydi va qayerda to‘sib qo‘yadi?" },
          { href: "#narx-va-mavjudlik-vitrinada-qanday", label: "Narx va mavjudlik vitrinada qanday yangilanadi?" },
          { href: "#stars-tolovini-vidjetdan-olasizmi-yoki", label: "Stars to‘lovini vidjetdan olasizmi yoki invoice’dan?" },
          { href: "#vidjet-ton-hamyon-sorasa-bot", label: "Vidjet TON hamyon so‘rasa, bot xaridordan nimani oladi?" },
          { href: "#hamyon-sorovi-xaridor-ishonchini-qanday", label: "Hamyon so‘rovi xaridor ishonchini qanday buzishi mumkin?" },
          { href: "#vitrinani-ishga-tushirishdan-oldin-nimani", label: "Vitrinani ishga tushirishdan oldin nimani tekshirish kerak?" },
          { href: "#yangilanish-haqidagi-xabarlarda-nimani-notogri", label: "Yangilanish haqidagi xabarlarda nimani noto‘g‘ri tushunish oson?" },
          { href: "#sinov-xaridi-uchun-stars-yoki", label: "Sinov xaridi uchun Stars yoki Premium’ni so‘mda qanday olasiz?" },
        ]}
      />
      <h2 id="bot-html-vidjetini-dokon-vitrinasi">Bot HTML-vidjetini do‘kon vitrinasi qilsa bo‘ladimi?</h2>
      <p>Bot API 10.4 2026-yil 9-noyabrda chiqqan (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>). Unga sendWidget usuli qo‘shildi: endi bot HTML-vidjetli xabar yubora oladi. <a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">Widgets sahifasida</a> vidjet xabarning o‘zida chiziladigan kichik interaktiv blok deb ta’riflangan.</p>
      <p>Do‘kon egasi uchun buning ma’nosi: Mini App’ni ochtirmasdan, chatning o‘zida tanlov oynasini ko‘rsatish mumkin. Masalan, «Stars paketlari» kartochkasida 50, 100 va 500 tugmalari bo‘ladi, pastida esa tanlangan paketning narxi turadi. Xaridor tugmani bossa, narx yangilanadi. «To‘lash» tugmasi botga so‘rov yuboradi, bot esa javob sifatida chatga alohida to‘lov xabarini jo‘natadi.</p>
      <p>Vidjet ichida Stars invoice ochish haqida rasmiy hujjatlarda ma’lumot topmadik. Bu yo‘l bu maqolada tasdiqlanmagan, shuning uchun uni ishonchli sxema sifatida tavsiya qilmaymiz.</p>
      <h2 id="vitrina-uchun-vidjet-nimaga-yaraydi">Vitrina uchun vidjet nimaga yaraydi va qayerda to‘sib qo‘yadi?</h2>
      <p>Vidjet Mini App emas. U xabarning bir qismi: chatni aylantirganda ham ko‘rinib turadi va internetga chiqa olmaydi. Uning JavaScript’i WebView yoki brauzerda emas, QuickJS degan kichik dvigatelda ishlaydi. Shu sababli Mini App uchun yozilgan odatiy kutubxonalar o‘zgartirilmasdan ishlamasligi mumkin.</p>
      <CompareTable
        headers={["Do‘kon ehtiyoji", "Vidjetda bormi", "Izoh"]}
        rows={[
          ["Mahsulot kartochkasi: nom, narx, tugmalar", "Ha", "HTML ichida chiziladi"],
          ["Serverdan rasm, shrift yoki stil yuklash", "Yo‘q", "Tashqi resurslar umuman yuklanmaydi"],
          ["Vidjetning o‘zi narxni saytdan olishi", "Yo‘q", "fetch, XMLHttpRequest, WebSocket NetworkDisabledError beradi, narxni bot yuboradi"],
          ["Boshqa sahifaga o‘tish", "Yo‘q", "Vidjet navigatsiya qila olmaydi"],
          ["Guruhdagi vitrina", "Hozircha yo‘q", "Production’da faqat shaxsiy chatlar"],
          ["copyMessage bilan boshqa chatga nusxalash", "Yo‘q", "copyMessage va copyMessages vidjetni rad etadi"],
          ["Bitta narx ro‘yxatini ko‘p xabarda ishlatish", "Ha", "Umumiy (shared) vidjet orqali"],
          ["Katta katalog", "Cheklangan", "32 768 bayt UTF-8 HTML, zlib bilan siqilgandan keyin 4 096 bayt"],
        ]}
      />
      <p>Hajm chegarasi qattiq. Yuzlab tovarli katalog bunga sig‘maydi, shuning uchun vitrinada faqat eng ko‘p so‘raladigan pozitsiyalarni qoldiring, qolganini bot menyusiga chiqaring. Tashqi rasm yuklanmagani uchun ko‘rinishni emoji, rang va qisqa matn bilan yasash qulayroq.</p>
      <p>Umumiy vidjet so‘rovnomaga o‘xshaydi: bitta obyekt bo‘ladi va unga istalgancha xabar bog‘lanadi. Narx ro‘yxati uchun aynan shu kerak.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="narx-va-mavjudlik-vitrinada-qanday">Narx va mavjudlik vitrinada qanday yangilanadi?</h2>
      <Steps>
        <Step title={"So‘rovlarga ruxsat bering"}>vidjetni yuborishda allow_queries’ni yoqing. Aks holda vidjetdan keladigan har qanday so‘rov hamma joyda rad etiladi.</Step>
        <Step title={"Xaridor bosadi"}>vidjet so‘rovi faqat bosilganda ketadi, fonda hech qachon yuborilmaydi. Bot uni <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a> dagi Update ichida oladi.</Step>
        <Step title={"Bot javob beradi"}>answerWidgetQuery orqali narxni, qoldiqni yoki «tugagan» belgisini qaytaradi.</Step>
        <Step title={"Kartochka yangilanadi"}>editMessageWidgetData bilan vidjet ma’lumotini almashtirasiz, yangi xabar yuborish shart emas.</Step>
        <Step title={"Bitta prays — ko‘p chat"}>sendSharedWidget bot yaratgan umumiy vidjetni qayta yuboradi, editSharedWidgetData esa uning ommaviy ma’lumotini bir joyda o‘zgartiradi.</Step>
      </Steps>
      <p>Misol: vitrina umumiy vidjet sifatida 300 ta xaridorning chatida turibdi. Narx o‘zgarsa, 300 ta xabarni bittalab tahrirlash shart emas: hamma xabar bitta obyektga tayanadi, ommaviy ma’lumotni bir marta o‘zgartirish kifoya. Faqat ommaviy maydonga xaridorning shaxsiy savati yoki buyurtmasini yozmang — u hamma chatda ko‘rinadi.</p>
      <p>Yana bir amaliy qoida: vidjetdagi narx xaridor uni bosgan paytdagi holat. To‘lov xabarini yuborishdan oldin bot narxni o‘z bazasidan qayta tekshirsin, eski kartochkadagi raqamga ishonmasin.</p>
      <h2 id="stars-tolovini-vidjetdan-olasizmi-yoki">Stars to‘lovini vidjetdan olasizmi yoki invoice’dan?</h2>
      <Notice label={"Muhim"}>Widgets hujjatida vidjet foydalanuvchidan Telegram’ning ichki hamyoni orqali to‘lov yoki imzo so‘ray olishi aytilgan. Stars invoice’ni vidjet ichida chiqarish haqida unda gap yo‘q.</Notice>
      <p>Raqamli xizmat sotadigan bot uchun amaliy sxema:</p>
      <ul>
        <li><b>Vidjet</b> — xaridor paket va miqdorni tanlaydi.</li>
        <li><b>Bot</b> — chatga alohida Stars invoice xabarini yuboradi.</li>
        <li><b>To‘lov tasdiqlangach</b> — bot xizmatni yetkazadi va editMessageWidgetData orqali vidjetda «to‘landi» holatini ko‘rsatadi.</li>
        <li><b>Hisob-kitob</b> — vitrinadagi «to‘landi» yozuviga emas, botga kelgan to‘lov xabariga tayaning.</li>
      </ul>
      <p>Invoice’ni texnik jihatdan ulash qadamlari <Link href="/blog/telegram-botga-stars-tolovini-ulash">botga Stars to‘lovini ulash</Link> maqolasida bor. Katalog bilan invoice’ni bir zanjirga bog‘lash <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">rich xabarda Stars to‘lov</Link> maqolasida ko‘rib chiqilgan.</p>
      <p>Bot qoidalari haqida alohida gap. Raqamli xizmatni Stars’siz sotayotgan botlar tekshirilishi haqida <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">«faqat Stars» qoidasi</Link> maqolasida yozganmiz. Raqamli tovarni vidjetdagi TON to‘lovi orqali sotish qoidalarga mos keladimi — bu maqolada tasdiqlanmagan. Bunday sxemani ishga tushirishdan oldin Telegram qoidalarini o‘zingiz tekshiring.</p>
      <h2 id="vidjet-ton-hamyon-sorasa-bot">Vidjet TON hamyon so‘rasa, bot xaridordan nimani oladi?</h2>
      <ul>
        <li><b>Hamyon kartasi</b> — hamyon chaqiruvida bot foydalanuvchi profilidagi TonWalletCard’ni, uning manzili va balansini oladi. Bot API sahifasiga ko‘ra, shaxsiy chatlarda profilda ko‘rsatiladigan TON hamyon kartasi ham beriladi.</li>
        <li><b>Yangi hamyon</b> — hamyoni yo‘q foydalanuvchiga hamyon shu paytning o‘zida yaratiladi. Faqat Stars olishga kelgan odam uchun bu kutilmagan qadam bo‘lishi mumkin.</li>
        <li><b>Tasdiq oynasi</b> — to‘lov yoki imzo oynasida bot, summalar va qabul qiluvchilar ko‘rsatiladi, foydalanuvchi ularni tasdiqlaydi.</li>
        <li><b>Rad etish</b> — xaridor oynada rad etsa, bot REJECTED xatosini oladi.</li>
        <li><b>Imzo domeni</b> — imzo «bot» so‘zi va botingiz ID raqamidan tuzilgan domen uchun qo‘yiladi. Hujjat imzoni hamyonning public_key’i bilan tekshirishni va kalitni blokcheyndagi hamyon manziliga bog‘lashni tavsiya qiladi.</li>
        <li><b>Yangi sinflar</b> — changelog’ga WidgetQueryType va uning turlari, TonWalletCard bilan bog‘liq sinflar, TonWalletTransfer hamda Message’dagi ton_wallet_transfer maydoni qo‘shilgan.</li>
      </ul>
      <p>Ikki narsa bu maqolada tasdiqlanmagan. Birinchisi — hamyon kartasini botga berish uchun foydalanuvchidan alohida rozilik so‘ralishi. Ikkinchisi — maxfiy kalitlar botga hech qachon berilmasligi haqidagi aniq qoida. Xaridorlarga bularni va’da qilmang.</p>
      <h2 id="hamyon-sorovi-xaridor-ishonchini-qanday">Hamyon so‘rovi xaridor ishonchini qanday buzishi mumkin?</h2>
      <ul>
        <li><b>Keraksiz so‘rov</b> — Stars yoki Premium olayotgan odamga hamyon kerak emas, ularni so‘mda, @username bilan olish mumkin. Batafsil: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">hamyonni akkauntga bog‘lash</Link>.</li>
        <li><b>Maqsadsiz imzo</b> — imzoni faqat aniq sabab bo‘lsa so‘rang, masalan NFT bilan bog‘liq xizmatda egalikni tasdiqlash uchun. Oddiy Stars paketi uchun imzo so‘ramang.</li>
        <li><b>Summalar mos kelmasligi</b> — hamyon oynasidagi summa va qabul qiluvchi vitrinadagi yozuv bilan bir xil bo‘lsin. Farqni ko‘rgan xaridor firibgarlikdan shubhalanadi.</li>
        <li><b>Rad etishga tayyorgarlik yo‘qligi</b> — REJECTED kelsa, muqobil yo‘lni darhol taklif qiling, masalan Stars invoice.</li>
        <li><b>Balansdan foydalanish</b> — bot balansni ko‘rishini maxfiylik siyosatida ochiq yozing va narxni balansga qarab o‘zgartirmang.</li>
        <li><b>Taqlidchilar</b> — firibgarlar sizning vitrinangizga o‘xshash vidjet yasab, imzo so‘rashi mumkin. Rasmiy bot username’ingizni kanalingizda aniq e’lon qilib boring.</li>
      </ul>
      <h2 id="vitrinani-ishga-tushirishdan-oldin-nimani">Vitrinani ishga tushirishdan oldin nimani tekshirish kerak?</h2>
      <Steps>
        <Step title={"Hajm"}>HTML hajmi va siqilgan hajmni 32 768 hamda 4 096 baytlik chegaralar bilan solishtiring.</Step>
        <Step title={"Oflayn ko‘rinish"}>tashqi rasm va shriftsiz vitrina tushunarli ko‘rinishini sinab ko‘ring.</Step>
        <Step title={"Chat turi"}>production’da vitrina faqat shaxsiy chatda ishlaydi. Guruhda oddiy tugma va unga vaqtinchalik javob ishlating: javobni faqat tugmani bosgan foydalanuvchi ko‘radi.</Step>
        <Step title={"Zaxira yo‘l"}>vidjetlar bosqichma-bosqich joriy qilinmoqda. Vidjet hali yetib bormagan xaridorlar uchun oddiy tugmali menyuni qoldiring.</Step>
        <Step title={"To‘lov"}>invoice orqali o‘z akkauntingizdan haqiqiy sinov xaridi qiling.</Step>
        <Step title={"So‘rovlar"}>allow_queries yoqilganini va bot answerWidgetQuery’ga javob berayotganini tekshiring.</Step>
        <Step title={"Narx tekshiruvi"}>invoice summasi bot bazasidagi joriy narx bilan mosligini sinang.</Step>
      </Steps>
      <h2 id="yangilanish-haqidagi-xabarlarda-nimani-notogri">Yangilanish haqidagi xabarlarda nimani noto‘g‘ri tushunish oson?</h2>
      <p>Bot API 10.4 haqidagi xabar Telegram kanallarida tarqaldi. Reja tuzayotganda esa rasmiy changelog va Widgets sahifasiga tayaning.</p>
      <ul>
        <li><b>Vaqtinchalik xabarlar</b> — ular 10.4 da paydo bo‘lmagan: changelog bo‘yicha Bot API 10.2 da kiritilgan. 10.4 da callback so‘rovlariga vaqtinchalik javobni istalgan chatda yuborish mumkin bo‘ldi, kanalning direct messages chatlari bundan mustasno.</li>
        <li><b>Iqtibos</b> — ReplyParameters’ga quote_rich_texts maydoni qo‘shilgan, endi bot rich xabarlardan iqtibos keltira oladi.</li>
        <li><b>«O‘yinlar»</b> — o‘yin vidjetga misol sifatida rasmiy manbada tasdiqlanmagan.</li>
        <li><b>«Beta» maqomi</b> — changelog’da bunday so‘z yo‘q, rejani unga tayanib tuzmang.</li>
        <li><b>Guruh va inline rejim</b> — production’da vidjetlar hozircha faqat shaxsiy chatlarga yuboriladi.</li>
      </ul>
      <h2 id="sinov-xaridi-uchun-stars-yoki">Sinov xaridi uchun Stars yoki Premium’ni so‘mda qanday olasiz?</h2>
      <p>Invoice’ni sinash uchun o‘z akkauntingizda Stars bo‘lishi kerak. Ularni @StarsPaymee_bot orqali so‘mda, faqat @username bilan olasiz. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Parol, SMS kod, xalqaro karta, kripto hamyon yoki VPN kerak emas.</p>
      <p>Bir dona Stars narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Tafsilotlar <Link href="/stars">Stars sahifasida</Link>.</p>
      <p>O‘z akkauntingiz uchun Premium kerak bo‘lsa, narxlar: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil. Akkauntda faol Premium bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi. Batafsil: <Link href="/premium">Premium sahifasi</Link>.</p>
      <p>Kanal va bot egalari uchun qo‘shimcha xizmatlar <Link href="/business">biznes sahifasida</Link>. StarsPaymee mustaqil xizmat va Telegram bilan rasmiy aloqasi borligini da’vo qilmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Vidjet ichiga «Stars bilan to‘lash» tugmasini qo‘ysam, to‘lov o‘sha yerda ochiladimi?", answer: "Hujjatda vidjet to‘lov yoki imzoni Telegram’ning ichki hamyoni orqali so‘rashi aytilgan, Stars invoice haqida gap yo‘q. Tugma botga so‘rov yuborib, invoice’ni bot alohida xabar qilib jo‘natgani ishonchliroq." },
  { question: "Vitrinaga mahsulot rasmlarini serverimdan yuklasam bo‘ladimi?", answer: "Yo‘q. Vidjet tashqi rasm, shrift va stillarni yuklamaydi, tarmoq so‘rovlari esa xato beradi. Ko‘rinishni emoji, rang va qisqa yozuvlar bilan yasang." },
  { question: "Do‘konim guruhida vitrina vidjetini joylay olmayapman, nega?", answer: "Production muhitida vidjetlar hozircha faqat shaxsiy chatlarga boradi. Guruhda oddiy tugma qo‘ying va unga vaqtinchalik javob bering — uni faqat bosgan odam ko‘radi." },
  { question: "Narxni o‘zgartirsam, ilgari yuborilgan barcha vidjetlarni bittalab tahrirlashim kerakmi?", answer: "Vitrina umumiy vidjet bo‘lsa, kerak emas: editSharedWidgetData bilan ommaviy ma’lumotni bir marta o‘zgartirasiz. Oddiy vidjetda esa har bir xabar uchun editMessageWidgetData chaqiriladi." },
  { question: "Xaridor vidjetni bosmasa ham vidjet botga fonda so‘rov yuboradimi?", answer: "Yo‘q, vidjetning so‘rovlari faqat bosilganda ketadi. Biroq bot o‘zi editMessageWidgetData orqali vidjet ma’lumotini xohlagan payt yangilashi mumkin." },
  { question: "Vidjet orqali xaridorning TON balansini ko‘rib, unga mos taklif chiqarsam bo‘ladimi?", answer: "Hamyon chaqiruvida bot profil kartasidagi manzil va balansni oladi, lekin narxni balansga qarab o‘zgartirish xaridor ishonchini yo‘qotadi. Balans ko‘rinishini maxfiylik siyosatida ochiq yozing." },
  { question: "Xaridor hamyon oynasida «rad etish»ni bossa, bot nimani oladi?", answer: "Bot REJECTED xatosini oladi. Shu holat uchun javobni oldindan tayyorlang, masalan Stars invoice orqali to‘lashni taklif qiling." },
  { question: "Vitrinani raqobatchi nusxalab o‘z botida ishlatishi mumkinmi?", answer: "Telegram vositalari bilan emas: copyMessage va copyMessages vidjetni rad etadi. Ammo dizaynni qo‘lda qayta yasash mumkin, shuning uchun rasmiy bot username’ingizni kanalda doim e’lon qilib boring." },
  { question: "Xaridorlarimning bir qismida vidjet yo‘q, ular qanday buyurtma beradi?", answer: "Vidjetlar bosqichma-bosqich joriy qilinmoqda, shuning uchun hammaga birdaniga yetib bormasligi mumkin. Vitrina yonida oddiy tugmali menyuni zaxira sifatida qoldiring." },
  { question: "Bot egasi sinov uchun Stars’ni xalqaro kartasiz qanday oladi?", answer: "@StarsPaymee_bot orqali UzCard/HUMO, Click, Payme, Uzum yoki Paynet bilan so‘mda olasiz, buning uchun faqat @username kerak. Eng kam buyurtma — 50 Stars, kripto hamyon yoki VPN shart emas." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, в HTML-виджете из Bot API 10.4 можно дать покупателю выбрать пакет и показать цену, то есть виджет работает как витрина. Но это только окно выбора. По официальной документации, оплату или подпись виджет запрашивает через встроенный кошелёк Telegram. Открытие Stars-инвойса внутри виджета там не описано. Поэтому Stars надёжнее принимать отдельным инвойсом, который присылает бот.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#bot-html-vidjetini-dokon-vitrinasi", label: "Можно ли сделать из HTML-виджета бота витрину магазина?" },
          { href: "#vitrina-uchun-vidjet-nimaga-yaraydi", label: "Чем виджет полезен для витрины и где он ограничивает?" },
          { href: "#narx-va-mavjudlik-vitrinada-qanday", label: "Как на витрине обновляются цена и наличие?" },
          { href: "#stars-tolovini-vidjetdan-olasizmi-yoki", label: "Принимать Stars через виджет или через инвойс?" },
          { href: "#vidjet-ton-hamyon-sorasa-bot", label: "Что бот получает от покупателя, если виджет запрашивает TON-кошелёк?" },
          { href: "#hamyon-sorovi-xaridor-ishonchini-qanday", label: "Как запрос кошелька может подорвать доверие покупателя?" },
          { href: "#vitrinani-ishga-tushirishdan-oldin-nimani", label: "Что проверить перед запуском витрины?" },
          { href: "#yangilanish-haqidagi-xabarlarda-nimani-notogri", label: "Что легко понять неправильно в сообщениях об обновлении?" },
          { href: "#sinov-xaridi-uchun-stars-yoki", label: "Как купить Stars или Premium в сумах для тестовой покупки?" },
        ]}
      />
      <h2 id="bot-html-vidjetini-dokon-vitrinasi">Можно ли сделать из HTML-виджета бота витрину магазина?</h2>
      <p>Bot API 10.4 вышел 9 ноября 2026 года (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>). В нём появился метод sendWidget: бот может отправить сообщение с HTML-виджетом. На <a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">странице Widgets</a> виджет описан как небольшой интерактивный блок, который отрисовывается прямо внутри сообщения.</p>
      <p>Для владельца магазина это значит, что окно выбора можно показать прямо в чате, без открытия Mini App. Например, в карточке «Пакеты Stars» есть кнопки 50, 100 и 500, а под ними — цена выбранного пакета. Покупатель нажимает кнопку, и цена обновляется. Кнопка «Оплатить» отправляет боту запрос, а бот в ответ присылает в чат отдельное сообщение для оплаты.</p>
      <p>Сведений о том, что Stars-инвойс можно открыть внутри виджета, в официальной документации мы не нашли. В этой статье такой вариант не подтверждён, поэтому как надёжную схему мы его не советуем.</p>
      <h2 id="vitrina-uchun-vidjet-nimaga-yaraydi">Чем виджет полезен для витрины и где он ограничивает?</h2>
      <p>Виджет — это не Mini App. Он часть сообщения: остаётся на виду, когда чат прокручивают, и не имеет доступа к сети. Его JavaScript работает не в WebView и не в браузере, а в маленьком движке QuickJS. Поэтому обычные библиотеки, написанные для Mini App, без доработки могут не заработать.</p>
      <CompareTable
        headers={["Задача магазина", "Есть в виджете", "Комментарий"]}
        rows={[
          ["Карточка товара: название, цена, кнопки", "Да", "Отрисовывается в HTML"],
          ["Загрузка картинок, шрифтов или стилей с сервера", "Нет", "Внешние ресурсы не загружаются вообще"],
          ["Виджет сам берёт цену с сайта", "Нет", "fetch, XMLHttpRequest, WebSocket выдают NetworkDisabledError, цену передаёт бот"],
          ["Переход на другую страницу", "Нет", "Виджет не умеет навигацию"],
          ["Витрина в группе", "Пока нет", "В production — только личные чаты"],
          ["Копирование в другой чат через copyMessage", "Нет", "copyMessage и copyMessages отклоняют виджеты"],
          ["Один прайс-лист во многих сообщениях", "Да", "Через общий (shared) виджет"],
          ["Большой каталог", "Ограниченно", "32 768 байт HTML в UTF-8 и 4 096 байт после сжатия zlib"],
        ]}
      />
      <p>Лимит размера жёсткий. Каталог на сотни товаров в него не влезет, поэтому на витрине оставьте самые ходовые позиции, а остальное вынесите в меню бота. Внешние картинки не загружаются, так что оформлять удобнее эмодзи, цветом и коротким текстом.</p>
      <p>Общий виджет похож на опрос: это один объект, на который может ссылаться сколько угодно сообщений. Для прайс-листа нужно именно это.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="narx-va-mavjudlik-vitrinada-qanday">Как на витрине обновляются цена и наличие?</h2>
      <Steps>
        <Step title={"Разрешите запросы"}>при отправке виджета включите allow_queries. Иначе любой запрос из виджета будет отклонён везде.</Step>
        <Step title={"Покупатель нажимает"}>запрос из виджета уходит только по нажатию и никогда не отправляется в фоне. Бот получает его внутри Update из <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a>.</Step>
        <Step title={"Бот отвечает"}>через answerWidgetQuery возвращает цену, остаток или пометку «нет в наличии».</Step>
        <Step title={"Карточка обновляется"}>данные виджета меняются через editMessageWidgetData, новое сообщение отправлять не нужно.</Step>
        <Step title={"Один прайс — много чатов"}>sendSharedWidget повторно отправляет общий виджет, созданный ботом, а editSharedWidgetData меняет его публичные данные в одном месте.</Step>
      </Steps>
      <p>Пример: витрина в виде общего виджета стоит в чатах у 300 покупателей. Если цена изменилась, не нужно править 300 сообщений по одному: все они опираются на один объект, и публичные данные достаточно изменить один раз. Только не записывайте в публичное поле личную корзину или заказ покупателя — это увидят во всех чатах.</p>
      <p>Ещё одно практическое правило: цена в виджете — это состояние на момент нажатия. Перед отправкой сообщения для оплаты бот должен перепроверить цену по своей базе, а не верить цифре из старой карточки.</p>
      <h2 id="stars-tolovini-vidjetdan-olasizmi-yoki">Принимать Stars через виджет или через инвойс?</h2>
      <Notice label={"Важно"}>В документации Widgets сказано, что виджет может запросить у пользователя оплату или подпись через встроенный кошелёк Telegram. О выставлении Stars-инвойса внутри виджета там ничего нет.</Notice>
      <p>Практичная схема для бота, который продаёт цифровые услуги:</p>
      <ul>
        <li><b>Виджет</b> — покупатель выбирает пакет и количество.</li>
        <li><b>Бот</b> — отправляет в чат отдельное сообщение со Stars-инвойсом.</li>
        <li><b>После подтверждения оплаты</b> — бот выдаёт услугу и через editMessageWidgetData показывает в виджете статус «оплачено».</li>
        <li><b>Учёт</b> — опирайтесь на сообщение об оплате, которое пришло боту, а не на надпись «оплачено» на витрине.</li>
      </ul>
      <p>Как технически подключить инвойс, рассказано в статье <Link href="/blog/telegram-botga-stars-tolovini-ulash">о подключении оплаты Stars в боте</Link>. Как связать каталог и инвойс в одну цепочку — в материале <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">об оплате Stars в rich-сообщении</Link>.</p>
      <p>Отдельно о правилах для ботов. О проверках ботов, которые продают цифровые услуги без Stars, мы писали в статье <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">о правиле «только Stars»</Link>. Соответствует ли правилам продажа цифровых товаров через TON-оплату в виджете — в этой статье не подтверждено. Прежде чем запускать такую схему, сами проверьте правила Telegram.</p>
      <h2 id="vidjet-ton-hamyon-sorasa-bot">Что бот получает от покупателя, если виджет запрашивает TON-кошелёк?</h2>
      <ul>
        <li><b>Карточка кошелька</b> — при вызове кошелька бот получает TonWalletCard из профиля пользователя, её адрес и баланс. Согласно странице Bot API, в личных чатах передаётся и карточка TON-кошелька, которая показывается в профиле.</li>
        <li><b>Новый кошелёк</b> — если кошелька у пользователя нет, он создаётся прямо в этот момент. Для человека, который пришёл только за Stars, это может стать неожиданностью.</li>
        <li><b>Окно подтверждения</b> — в окне оплаты или подписи показываются бот, суммы и получатели, и пользователь их подтверждает.</li>
        <li><b>Отказ</b> — если покупатель отказался в окне, бот получает ошибку REJECTED.</li>
        <li><b>Домен подписи</b> — подпись ставится для домена из слова «bot» и ID вашего бота. Документация советует проверять подпись по public_key кошелька и привязывать ключ к адресу кошелька в блокчейне.</li>
        <li><b>Новые классы</b> — в changelog добавлены WidgetQueryType и его типы, классы, связанные с TonWalletCard, TonWalletTransfer и поле ton_wallet_transfer в Message.</li>
      </ul>
      <p>Две вещи в этой статье не подтверждены. Первая — что у пользователя спрашивают отдельное согласие на передачу карточки кошелька боту. Вторая — чёткое правило, что приватные ключи никогда не попадают к боту. Не обещайте этого покупателям.</p>
      <h2 id="hamyon-sorovi-xaridor-ishonchini-qanday">Как запрос кошелька может подорвать доверие покупателя?</h2>
      <ul>
        <li><b>Лишний запрос</b> — тому, кто покупает Stars или Premium, кошелёк не нужен: их можно получить в сумах по @username. Подробнее — в статье <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">о привязке кошелька к аккаунту</Link>.</li>
        <li><b>Подпись без цели</b> — просите подпись только при понятной причине, например для подтверждения владения в сервисе, связанном с NFT. Для обычного пакета Stars подпись не запрашивайте.</li>
        <li><b>Расхождение сумм</b> — сумма и получатель в окне кошелька должны совпадать с тем, что написано на витрине. Заметив разницу, покупатель заподозрит мошенничество.</li>
        <li><b>Нет плана на отказ</b> — если пришёл REJECTED, сразу предложите другой путь, например Stars-инвойс.</li>
        <li><b>Использование баланса</b> — прямо напишите в политике конфиденциальности, что бот видит баланс, и не меняйте цену в зависимости от него.</li>
        <li><b>Подражатели</b> — мошенники могут сделать виджет, похожий на вашу витрину, и попросить подпись. Регулярно публикуйте в своём канале официальный username бота.</li>
      </ul>
      <h2 id="vitrinani-ishga-tushirishdan-oldin-nimani">Что проверить перед запуском витрины?</h2>
      <Steps>
        <Step title={"Размер"}>сравните объём HTML и сжатый объём с лимитами 32 768 и 4 096 байт.</Step>
        <Step title={"Вид без сети"}>убедитесь, что витрина понятна без внешних картинок и шрифтов.</Step>
        <Step title={"Тип чата"}>в production витрина работает только в личном чате. В группе используйте обычную кнопку и эфемерный ответ на неё: его видит только тот, кто нажал.</Step>
        <Step title={"Запасной путь"}>виджеты внедряются поэтапно. Для покупателей, до которых они ещё не дошли, оставьте обычное меню с кнопками.</Step>
        <Step title={"Оплата"}>сделайте реальную тестовую покупку через инвойс со своего аккаунта.</Step>
        <Step title={"Запросы"}>проверьте, что allow_queries включён и бот отвечает через answerWidgetQuery.</Step>
        <Step title={"Сверка цены"}>убедитесь, что сумма в инвойсе совпадает с текущей ценой в базе бота.</Step>
      </Steps>
      <h2 id="yangilanish-haqidagi-xabarlarda-nimani-notogri">Что легко понять неправильно в сообщениях об обновлении?</h2>
      <p>Новость о Bot API 10.4 разошлась по Telegram-каналам. Но при планировании опирайтесь на официальный changelog и страницу Widgets.</p>
      <ul>
        <li><b>Эфемерные сообщения</b> — они появились не в 10.4: по changelog их ввели в Bot API 10.2. В 10.4 эфемерные ответы на callback-запросы стало можно отправлять в любом чате, кроме чатов direct messages каналов.</li>
        <li><b>Цитирование</b> — в ReplyParameters добавлено поле quote_rich_texts, теперь бот может цитировать rich-сообщения.</li>
        <li><b>«Игры»</b> — игра как пример виджета в официальных источниках не подтверждена.</li>
        <li><b>Статус «бета»</b> — в changelog такого слова нет, не стройте на нём планы.</li>
        <li><b>Группы и inline-режим</b> — в production виджеты пока отправляются только в личные чаты.</li>
      </ul>
      <h2 id="sinov-xaridi-uchun-stars-yoki">Как купить Stars или Premium в сумах для тестовой покупки?</h2>
      <p>Чтобы проверить инвойс, на вашем аккаунте должны быть Stars. Их можно купить в сумах через @StarsPaymee_bot, указав только @username. Заказ обычно доставляется автоматически за несколько секунд. Пароль, SMS-код, иностранная карта, криптокошелёк или VPN не нужны.</p>
      <p>Цена одной звезды зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Подробности — на <Link href="/stars">странице Stars</Link>.</p>
      <p>Если Premium нужен для вашего аккаунта, цены такие: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Цена одинакова при любом способе оплаты. Если на аккаунте уже есть активный Premium, бот не откроет новый заказ: срок не добавляется поверх действующей подписки. Подробнее — на <Link href="/premium">странице Premium</Link>.</p>
      <p>Дополнительные услуги для владельцев каналов и ботов — на <Link href="/business">странице для бизнеса</Link>. StarsPaymee — независимый сервис и не заявляет об официальной связи с Telegram.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если поставить в виджет кнопку «Оплатить Stars», оплата откроется прямо там?", answer: "В документации сказано, что виджет запрашивает оплату или подпись через встроенный кошелёк Telegram, о Stars-инвойсе там ни слова. Надёжнее, чтобы кнопка отправляла боту запрос, а инвойс бот присылал отдельным сообщением." },
  { question: "Можно ли подгружать на витрину фото товаров с моего сервера?", answer: "Нет. Виджет не загружает внешние картинки, шрифты и стили, а сетевые запросы завершаются ошибкой. Оформляйте карточки эмодзи, цветом и короткими подписями." },
  { question: "Почему не получается разместить виджет-витрину в группе магазина?", answer: "В production-среде виджеты пока доходят только до личных чатов. В группе поставьте обычную кнопку и отвечайте на неё эфемерным сообщением — его увидит только нажавший." },
  { question: "Если я поменяю цену, придётся править все ранее отправленные виджеты по одному?", answer: "Если витрина сделана как общий виджет — нет: публичные данные меняются один раз через editSharedWidgetData. Для обычного виджета editMessageWidgetData вызывается для каждого сообщения." },
  { question: "Отправляет ли виджет запросы боту в фоне, если покупатель ничего не нажимал?", answer: "Нет, запросы из виджета уходят только по нажатию. При этом бот сам может в любой момент обновить данные виджета через editMessageWidgetData." },
  { question: "Можно ли через виджет посмотреть TON-баланс покупателя и подстроить под него предложение?", answer: "При вызове кошелька бот получает адрес и баланс из карточки профиля, но цена, зависящая от баланса, подорвёт доверие покупателя. О том, что бот видит баланс, честно напишите в политике конфиденциальности." },
  { question: "Что получит бот, если покупатель нажмёт «отклонить» в окне кошелька?", answer: "Бот получит ошибку REJECTED. Заранее продумайте ответ на этот случай — например, предложите оплатить через Stars-инвойс." },
  { question: "Может ли конкурент скопировать мою витрину и использовать в своём боте?", answer: "Средствами Telegram — нет: copyMessage и copyMessages отклоняют виджеты. Но дизайн можно воссоздать вручную, поэтому регулярно публикуйте в канале официальный username своего бота." },
  { question: "У части покупателей виджет не отображается — как им сделать заказ?", answer: "Виджеты внедряются поэтапно, так что до всех они могут дойти не сразу. Оставьте рядом с витриной обычное меню с кнопками как запасной вариант." },
  { question: "Как владельцу бота купить Stars для теста без иностранной карты?", answer: "Через @StarsPaymee_bot в сумах — с UzCard/HUMO, Click, Payme, Uzum или Paynet, нужен только @username. Минимальный заказ — 50 Stars, криптокошелёк и VPN не требуются." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes. An HTML widget from Bot API 10.4 can let buyers pick a package and see its price, so it can work as a storefront. But a widget only handles the selection. According to the official docs, it can ask for a payment or a signature through Telegram’s built-in wallet. The docs don’t describe opening a Stars invoice inside a widget. A separate invoice sent by the bot is the more reliable way to collect Stars.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#bot-html-vidjetini-dokon-vitrinasi", label: "Can a bot’s HTML widget work as a shop storefront?" },
          { href: "#vitrina-uchun-vidjet-nimaga-yaraydi", label: "What can a widget do for a storefront, and what can’t it do?" },
          { href: "#narx-va-mavjudlik-vitrinada-qanday", label: "How do you update prices and stock in the storefront?" },
          { href: "#stars-tolovini-vidjetdan-olasizmi-yoki", label: "Should you collect Stars through the widget or an invoice?" },
          { href: "#vidjet-ton-hamyon-sorasa-bot", label: "When a widget asks for a TON wallet, what does the bot get?" },
          { href: "#hamyon-sorovi-xaridor-ishonchini-qanday", label: "How can a wallet request hurt buyer trust?" },
          { href: "#vitrinani-ishga-tushirishdan-oldin-nimani", label: "What should you check before launching the storefront?" },
          { href: "#yangilanish-haqidagi-xabarlarda-nimani-notogri", label: "What do posts about the update often get wrong?" },
          { href: "#sinov-xaridi-uchun-stars-yoki", label: "How can you get Stars or Premium in som for a test purchase?" },
        ]}
      />
      <h2 id="bot-html-vidjetini-dokon-vitrinasi">Can a bot’s HTML widget work as a shop storefront?</h2>
      <p>Bot API 10.4 was released on November 9, 2026 (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>). It added the sendWidget method, so bots can now send messages with HTML widgets. The <a href={"https://core.telegram.org/bots/widgets"} target="_blank" rel="noopener noreferrer">Widgets page</a> defines a widget as a small interactive block drawn right inside a message.</p>
      <p>For a shop owner, this means you can show a selection screen in the chat itself, with no Mini App to open. For example, a “Stars packages” card could have 50, 100 and 500 buttons, with the price of the selected package shown below. When the buyer taps a button, the price updates. A “Pay” button sends a query to the bot, and the bot replies by sending a separate payment message to the chat.</p>
      <p>We found nothing in the official docs about opening a Stars invoice inside a widget. This article can’t confirm that it works, so we don’t recommend relying on it.</p>
      <h2 id="vitrina-uchun-vidjet-nimaga-yaraydi">What can a widget do for a storefront, and what can’t it do?</h2>
      <p>A widget is not a Mini App. It’s part of the message, stays visible as the chat scrolls and can’t reach the network. Its JavaScript doesn’t run in a WebView or a browser. It runs in QuickJS, a small JavaScript engine. Because of that, the libraries you’re used to from Mini Apps may not work unless you change them.</p>
      <CompareTable
        headers={["What the shop needs", "Available in a widget?", "Notes"]}
        rows={[
          ["Product card with name, price and buttons", "Yes", "Drawn in HTML"],
          ["Images, fonts or styles loaded from your server", "No", "External resources are never loaded"],
          ["Widget fetching prices from your website itself", "No", "fetch, XMLHttpRequest and WebSocket throw NetworkDisabledError, so the bot has to send the price"],
          ["Navigating to another page", "No", "Widgets can’t navigate"],
          ["Storefront inside a group", "Not yet", "Only private chats in production"],
          ["Copying to another chat with copyMessage", "No", "copyMessage and copyMessages refuse widgets"],
          ["One price list reused in many messages", "Yes", "Through a shared widget"],
          ["Large catalog", "Limited", "32 768 bytes of UTF-8 HTML, and 4 096 bytes after zlib compression"],
        ]}
      />
      <p>The size limit is strict, and a catalog with hundreds of items won’t fit. Keep only your best-selling items in the storefront and put the rest in the bot’s menu. External images don’t load, so build the design from emoji, colour and short text.</p>
      <p>A shared widget works like a poll: it’s one object, and any number of messages can point to it. That’s what a price list needs.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="narx-va-mavjudlik-vitrinada-qanday">How do you update prices and stock in the storefront?</h2>
      <Steps>
        <Step title={"Allow queries"}>turn on allow_queries when you send the widget. If it’s off, every request from the widget is refused everywhere.</Step>
        <Step title={"The buyer taps"}>a widget sends a query only on a tap, never in the background. The bot receives it inside an Update, as described in the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a>.</Step>
        <Step title={"The bot answers"}>with answerWidgetQuery, it returns the price, the stock left or an “out of stock” flag.</Step>
        <Step title={"The card updates"}>use editMessageWidgetData to replace the widget’s data. You don’t need to send a new message.</Step>
        <Step title={"One price list, many chats"}>sendSharedWidget sends a shared widget the bot created again, and editSharedWidgetData changes its public data in one place.</Step>
      </Steps>
      <p>For example, say your storefront is a shared widget sitting in 300 buyers’ chats. When a price changes, you don’t edit 300 messages one by one. They all point to one object, so you change the public data once. Never put a buyer’s personal cart or order in a public field, because everyone will see it.</p>
      <p>Another practical rule: the price on a widget shows what it was when the buyer tapped. Before sending the payment message, have the bot check the price in its own database again. Don’t trust the number on an old card.</p>
      <h2 id="stars-tolovini-vidjetdan-olasizmi-yoki">Should you collect Stars through the widget or an invoice?</h2>
      <Notice label={"Important"}>The Widgets docs say a widget can ask the user to pay or sign through Telegram’s built-in wallet. They say nothing about showing a Stars invoice inside a widget.</Notice>
      <p>A workable setup for a bot that sells digital services:</p>
      <ul>
        <li><b>Widget</b>: the buyer picks a package and quantity.</li>
        <li><b>Bot</b>: sends a separate Stars invoice message to the chat.</li>
        <li><b>After payment is confirmed</b>: the bot delivers the service and uses editMessageWidgetData to show a “paid” status in the widget.</li>
        <li><b>Accounting</b>: rely on the payment message the bot receives, not on the “paid” label in the storefront.</li>
      </ul>
      <p>For the technical steps of connecting an invoice, see <Link href="/blog/telegram-botga-stars-tolovini-ulash">how to add Stars payments to a bot</Link>. For linking a catalog and an invoice in one flow, see <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">Stars payments in rich messages</Link>.</p>
      <p>Bot rules are a separate question. We covered checks on bots that sell digital services without Stars in our article on the <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">“Stars only” rule</Link>. This article can’t confirm whether selling digital goods for TON through a widget follows the rules. Check Telegram’s rules yourself before you launch a setup like that.</p>
      <h2 id="vidjet-ton-hamyon-sorasa-bot">When a widget asks for a TON wallet, what does the bot get?</h2>
      <ul>
        <li><b>Wallet card</b>: in a wallet call, the bot gets the TonWalletCard from the user’s profile, along with its address and balance. The Bot API page says that in private chats the bot also gets the TON wallet card shown on the user’s profile page.</li>
        <li><b>New wallet</b>: if the user has no wallet, one is created right then. For someone who only came to buy Stars, that can be a surprise.</li>
        <li><b>Confirmation window</b>: the payment or signature window shows the bot, the amounts and the recipients, and the user confirms them.</li>
        <li><b>Declining</b>: if the buyer declines in that window, the bot gets a REJECTED error.</li>
        <li><b>Signature domain</b>: the signature is made for a domain built from the word “bot” and your bot’s ID. The docs recommend checking the signature against the wallet’s public_key and linking that key to the wallet’s address on the blockchain.</li>
        <li><b>New classes</b>: the changelog adds WidgetQueryType and its subtypes, the TonWalletCard-related classes, TonWalletTransfer and a ton_wallet_transfer field on Message.</li>
      </ul>
      <p>We couldn’t confirm two things. First, whether users are asked for separate consent before their wallet card goes to the bot. Second, whether there’s an explicit rule that private keys never reach the bot. Don’t promise buyers either one.</p>
      <h2 id="hamyon-sorovi-xaridor-ishonchini-qanday">How can a wallet request hurt buyer trust?</h2>
      <ul>
        <li><b>Requests with no reason</b>: people buying Stars or Premium don’t need a wallet. They can buy in som with just an @username. More on this: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">linking a wallet to your account</Link>.</li>
        <li><b>Signatures with no clear purpose</b>: ask for a signature only when you have a specific reason, such as proving ownership in an NFT-related service. Don’t ask for one on a plain Stars package.</li>
        <li><b>Mismatched amounts</b>: the amount and recipient in the wallet window must match what the storefront shows. A buyer who spots a difference will suspect a scam.</li>
        <li><b>No plan for a decline</b>: if you get REJECTED, offer another way to pay right away, such as a Stars invoice.</li>
        <li><b>Using the balance</b>: say clearly in your privacy policy that the bot sees the balance, and never change prices based on it.</li>
        <li><b>Copycats</b>: scammers may build a widget that looks like your storefront and ask for a signature. Keep announcing your official bot username in your channel.</li>
      </ul>
      <h2 id="vitrinani-ishga-tushirishdan-oldin-nimani">What should you check before launching the storefront?</h2>
      <Steps>
        <Step title={"Size"}>compare the HTML size and the compressed size against the 32 768 and 4 096 byte limits.</Step>
        <Step title={"Offline look"}>make sure the storefront still makes sense without external images or fonts.</Step>
        <Step title={"Chat type"}>in production, the storefront works only in private chats. In groups, use a regular button with an ephemeral reply, which only the person who tapped the button sees.</Step>
        <Step title={"Fallback"}>widgets are rolling out in stages. Keep a regular button menu for buyers who don’t have them yet.</Step>
        <Step title={"Payment"}>make a real test purchase through the invoice from your own account.</Step>
        <Step title={"Queries"}>check that allow_queries is on and that the bot responds to answerWidgetQuery.</Step>
        <Step title={"Price check"}>test that the invoice amount matches the current price in the bot’s database.</Step>
      </Steps>
      <h2 id="yangilanish-haqidagi-xabarlarda-nimani-notogri">What do posts about the update often get wrong?</h2>
      <p>News about Bot API 10.4 has been circulating in Telegram channels. When you plan, go by the official changelog and the Widgets page.</p>
      <ul>
        <li><b>Ephemeral messages</b>: these didn’t arrive in 10.4. The changelog says they came in Bot API 10.2. Version 10.4 lets bots send ephemeral replies to callback queries in any chat except channel direct messages chats.</li>
        <li><b>Quotes</b>: ReplyParameters gained a quote_rich_texts field, so bots can now quote rich messages.</li>
        <li><b>“Games”</b>: no official source confirms games as an example widget.</li>
        <li><b>“Beta” status</b>: the changelog doesn’t use that word, so don’t base your plans on it.</li>
        <li><b>Groups and inline mode</b>: in production, widgets can only be sent to private chats for now.</li>
      </ul>
      <h2 id="sinov-xaridi-uchun-stars-yoki">How can you get Stars or Premium in som for a test purchase?</h2>
      <p>To test an invoice, you need Stars on your own account. You can buy them in som through @StarsPaymee_bot with just your @username. Orders are usually delivered automatically within a few seconds. You don’t need a password, SMS code, international card, crypto wallet or VPN.</p>
      <p>The price per Star depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. See the <Link href="/stars">Stars page</Link> for details.</p>
      <p>If you need Premium on your own account, it costs {som(premium(3), "en")} for 3 months, {som(premium(6), "en")} for 6 months and {som(premium(12), "en")} for 12 months. The price is the same for every payment method. If your account already has active Premium, the bot won’t open a new order, because time isn’t added on top of an active subscription. More on the <Link href="/premium">Premium page</Link>.</p>
      <p>Extra services for channel and bot owners are on the <Link href="/business">business page</Link>. StarsPaymee is an independent service and doesn’t claim any official link to Telegram.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/widgets", label: "Telegram Widgets" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If I put a “Pay with Stars” button inside the widget, will the payment open right there?", answer: "The docs say a widget asks for payment or a signature through Telegram’s built-in wallet, and they don’t mention Stars invoices. It’s more reliable to have the button send a query to the bot and have the bot send the invoice as its own message." },
  { question: "Can my storefront load product images from my server?", answer: "No. Widgets don’t load external images, fonts or stylesheets, and network requests throw an error. Build the design from emoji, colour and short labels." },
  { question: "Why can’t I post my storefront widget in my shop’s group?", answer: "In production, widgets can only be sent to private chats for now. In a group, use a regular button and answer it with an ephemeral reply that only the person who tapped sees." },
  { question: "If I change a price, do I have to edit every widget I’ve already sent?", answer: "Not if your storefront is a shared widget. You change its public data once with editSharedWidgetData. With a regular widget, you call editMessageWidgetData for each message." },
  { question: "Does a widget send queries to the bot in the background if the buyer doesn’t tap it?", answer: "No. Widget queries go out only on a tap. The bot can still update the widget’s data whenever it wants with editMessageWidgetData." },
  { question: "Can I look at a buyer’s TON balance through the widget and tailor my offer to it?", answer: "In a wallet call, the bot gets the address and balance from the user’s profile card. Changing prices based on that balance will cost you buyers’ trust, though. State clearly in your privacy policy that the bot can see the balance." },
  { question: "What does the bot get if the buyer taps “Decline” in the wallet window?", answer: "The bot receives a REJECTED error. Plan your response in advance, for example by offering to take payment through a Stars invoice." },
  { question: "Can a competitor copy my storefront into their own bot?", answer: "Not with Telegram’s tools, because copyMessage and copyMessages refuse widgets. Someone could still rebuild the design by hand, so keep announcing your official bot username in your channel." },
  { question: "Some of my buyers don’t see widgets yet. How do they order?", answer: "Widgets are rolling out in stages, so not everyone has them yet. Keep a regular button menu next to the storefront as a fallback." },
  { question: "How can a bot owner get Stars for testing without an international card?", answer: "Buy them in som through @StarsPaymee_bot with UzCard/HUMO, Click, Payme, Uzum or Paynet. You only need your @username. The minimum order is 50 Stars, and you don’t need a crypto wallet or VPN." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["bot vidjet stars to'lov","telegram bot html vidjet do'kon","bot api 10.4 vidjet","telegram bot vitrina stars invoice","sendWidget stars to'lov","bot vidjet ton hamyon so'rovi","telegram bot raqamli xizmat sotish","виджет бота оплата stars","Bot API 10.4 HTML-виджеты","sendWidget Telegram бот магазин","виджет бота TON кошелек подпись"],
  howToSteps: [
    { name: "So‘rovlarga ruxsat bering", text: "vidjetni yuborishda allow_queries’ni yoqing. Aks holda vidjetdan keladigan har qanday so‘rov hamma joyda rad etiladi." },
    { name: "Xaridor bosadi", text: "vidjet so‘rovi faqat bosilganda ketadi, fonda hech qachon yuborilmaydi. Bot uni Bot API dagi Update ichida oladi." },
    { name: "Bot javob beradi", text: "answerWidgetQuery orqali narxni, qoldiqni yoki «tugagan» belgisini qaytaradi." },
    { name: "Kartochka yangilanadi", text: "editMessageWidgetData bilan vidjet ma’lumotini almashtirasiz, yangi xabar yuborish shart emas." },
    { name: "Bitta prays — ko‘p chat", text: "sendSharedWidget bot yaratgan umumiy vidjetni qayta yuboradi, editSharedWidgetData esa uning ommaviy ma’lumotini bir joyda o‘zgartiradi." },
  ],
  locales: {
    uz: {
      title: "Bot vidjetida Stars to‘lov olsa bo‘ladimi: vitrina, invoice va TON so‘rovi",
      excerpt: "Vidjet vitrina bo‘la oladi, lekin Stars’ni alohida invoice bilan olgan ma’qul. Maqolada vidjet chegaralari, narxni yangilash qadamlari va TON hamyon so‘rovining xaridor ishonchiga ta’siri bor.",
      metaTitle: "Bot vidjetida Stars to‘lov olsa bo‘ladimi",
      metaDescription: "Vidjet vitrina bo‘la oladi, lekin Stars’ni alohida invoice bilan olgan ma’qul. Maqolada vidjet chegaralari, narxni yangilash qadamlari va TON hamyon…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Можно ли принимать Stars в виджете бота: витрина, инвойс и запрос TON",
      excerpt: "Виджет подойдёт как витрина, но Stars надёжнее принимать отдельным инвойсом. В статье — ограничения виджета, шаги обновления цены и то, как запрос TON-кошелька влияет на доверие покупателя.",
      metaTitle: "Можно ли принимать Stars в виджете бота",
      metaDescription: "Виджет подойдёт как витрина, но Stars надёжнее принимать отдельным инвойсом. В статье — ограничения виджета, шаги обновления цены и то, как запрос…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can a Bot Widget Take Stars Payments? Storefront, Invoice and TON Requests",
      excerpt: "A widget can serve as a storefront, but a separate invoice is the better way to collect Stars. This article covers widget limits, steps for updating prices and how a TON wallet request affects buyer trust.",
      metaTitle: "Can a Bot Widget Take Stars Payments? Storefront",
      metaDescription: "A widget can serve as a storefront, but a separate invoice is the better way to collect Stars. This article covers widget limits, steps for updating prices…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
