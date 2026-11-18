import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-bot-bloklanishi-stars-qoidasi";

/**
 * Telegram bot bloklanishi: «faqat Stars» qoidasi va endi qanday to‘lanadi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-18): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: O‘zbekistondagi Telegram foydalanuvchisi va kichik bot egasi Telegramning dasturchilarga yuborgan ogohlantirishi hamda Durovning 17-noyabrdagi postini ko‘rib, «Telegram bot bloklanishi: endi faqat Stars qoidasi nimani anglatadi, Durov nima qilmoqchi va men qanday to‘layman» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-18):
 *   https://core.telegram.org/bots/payments-stars
 *   https://telegram.org/tos/bot-developers
 *   https://core.telegram.org/api/stars
 *   https://fragment.com/terms
 *   https://fragment.com/stars/buy
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Yo‘q, Telegram barcha botlarni yopmayapti. Tekshiruv obuna, AI kreditlari kabi raqamli narsalar uchun karta, tashqi havola yoki boshqa yo‘l bilan pul yig‘ayotgan bot va mini-ilovalarga qaratilgan. Hech narsa sotmaydigan botlar xabarda umuman tilga olinmagan. Siz uchun o‘zgarish bitta: botdagi raqamli xizmatga endi Telegram Stars bilan to‘laysiz.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#ishlatayotgan-botimga-bu-qoida-tegadimi", label: "Ishlatayotgan botimga bu qoida tegadimi?" },
          { href: "#17-18-noyabrda-nima-boldi", label: "17–18-noyabrda nima bo‘ldi: Telegram va Durov aynan nima yozdi?" },
          { href: "#nima-raqamli-xizmat-hisoblanadi-va", label: "Nima raqamli xizmat hisoblanadi va nima jismoniy tovar?" },
          { href: "#stars-nima-uchun-tanlangan-app", label: "Stars nima uchun tanlangan: App Store va Google Play talabi" },
          { href: "#durov-nima-qilmoqchi-postdagi-tort", label: "Durov nima qilmoqchi: postdagi to‘rt gapni o‘qish" },
          { href: "#tekshiruv-haftasi-nima-malum-va", label: "Tekshiruv haftasi: nima ma’lum va nima hali ochiq savol" },
          { href: "#bot-ichida-raqamli-xizmatga-endi", label: "Bot ichida raqamli xizmatga endi qanday to‘laysiz?" },
          { href: "#kichik-bot-egasiman-tolovni-starsga", label: "Kichik bot egasiman: to‘lovni Stars’ga qanday o‘tkazaman va daromadni yechaman?" },
          { href: "#botingiz-yopiladi-degan-soxta-ogohlantirishni", label: "«Botingiz yopiladi» degan soxta ogohlantirishni qanday ajratasiz?" },
        ]}
      />
      <h2 id="ishlatayotgan-botimga-bu-qoida-tegadimi">Ishlatayotgan botimga bu qoida tegadimi?</h2>
      <p>Avval bot nimani sotishini aniqlang. Muhimi botning turi emas, balki u nima uchun va qanday yo‘l bilan pul olishi.</p>
      <CompareTable
        headers={["Bot nima qiladi", "To‘lov qanday olinishi kerak", "Bu qayerda yozilgan"]}
        rows={[
          ["Obuna, AI krediti yoki token sotadi", "Faqat Telegram Stars (XTR valyutasi)", "Rasmiy hujjat va Telegram xabari"],
          ["Gul, kiyim, ovqat yetkazadi yoki taksi chaqiradi", "Boshqa valyuta va provayder bo‘lishi mumkin, bunday to‘lovni Telegram o‘zi o‘tkazmaydi", "Rasmiy hujjat va dasturchilar shartlari"],
          ["Pul olmaydi (ob-havo, tarjima, fayl yuklash)", "Xabarda gap yo‘q", "—"],
          ["Kripto bilan ishlaydi", "Saqlash, almashtirish va swap’dan boshqa amallarda faqat GRAM", "Telegram xabari"],
          ["VPN xizmati", "Avtoritar mamlakatlardagi VPN botlarga istisno qilingan", "Durovning shaxsiy posti"],
        ]}
      />
      <p>Birinchi ikki qator <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">rasmiy to‘lov sahifasi</a> va <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">bot dasturchilari shartlariga</a> tayanadi. Oxirgi ikki qator esa faqat Telegram xabari va Durov postidan olingan. Botingiz jadvaldagi birorta qatorga to‘g‘ri kelmasa, taxmin qilmang: shu ikki sahifani o‘qing yoki bot egasidan so‘rang.</p>
      <Notice label={"Muhim"}>Jadval birorta bot, jumladan StarsPaymee boti ham bloklanmaydi degani emas. U faqat qoida kimga qaratilganini ko‘rsatadi.</Notice>
      <h2 id="17-18-noyabrda-nima-boldi">17–18-noyabrda nima bo‘ldi: Telegram va Durov aynan nima yozdi?</h2>
      <p>Bot egalari Telegram’dan «Payments for digital goods and services» («Raqamli tovar va xizmatlar uchun to‘lovlar») sarlavhali xabar olishdi. Telegram xabarida yozilishicha, bot va mini-ilovalarda «digital goods can only be sold for Telegram Stars», ya’ni raqamli tovarlar faqat Telegram Stars evaziga sotiladi. Qoidani buzgan bot yoki mini-ilova esa «may be blocked at any time, without warning», ya’ni istalgan vaqtda ogohlantirishsiz bloklanishi mumkin.</p>
      <p>Durov 17-noyabr kuni o‘z kanalida qisqa post yozdi: «Telegram bots and mini apps can accept only Stars (*Grams) for digital services». O‘zbekchasi: Telegram botlari va mini-ilovalari raqamli xizmatlar uchun faqat Stars qabul qila oladi.</p>
      <p>Bu ikki matn telegram.org yoki core.telegram.org saytlarida alohida e’lon qilinmagan. Shuning uchun ular nusxadan keltirildi va har bir gap kimga tegishli ekani ko‘rsatildi.</p>
      <p>Qoidaning o‘zi esa avvaldan bor. Rasmiy hujjatga ko‘ra, bot va mini-ilovalar orqali raqamli tovar va xizmat uchun to‘lovlar faqat Telegram Stars bilan qilinadi. Dasturchilar shartlarida bunday to‘lovlarni uchinchi tomon provayderlari orqali o‘tkazib bo‘lmasligi va bitim faqat Stars almashinuvi orqali bajarilishi yozilgan. Yangi narsa ikkita: qoidaga amal qilinishi tekshirilmoqda va bloklash haqida ochiq ogohlantirish berildi. Telegram nega asta-sekin Stars’ga o‘tayotgani haqida <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">alohida maqola</Link> bor.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="nima-raqamli-xizmat-hisoblanadi-va">Nima raqamli xizmat hisoblanadi va nima jismoniy tovar?</h2>
      <p>Telegram xabarida raqamli xizmatga to‘rtta misol keltirilgan:</p>
      <ul>
        <li>botning o‘ziga obuna;</li>
        <li>botning Telegram integratsiyasiga qurilgan pullik vosita;</li>
        <li>uchinchi tomon AI modellaridan foydalanish;</li>
        <li>shularning har biri uchun kredit va tokenlar.</li>
      </ul>
      <p>Bu ro‘yxat faqat xabarda bor, rasmiy hujjat sahifalarida bunday sanab o‘tilmagan. Rasmiy shartlarda esa Telegram raqamli tovar va xizmat nima ekanini Apple va Google ta’riflariga qarab belgilashi yozilgan.</p>
      <p>Jismoniy tovar boshqacha. Rasmiy sahifaga ko‘ra, jismoniy tovar yoki xizmat sotganda boshqa valyuta va to‘lov provayderlaridan foydalanish mumkin. Invoysdagi provider_token parametri ham faqat shunday savdoda kerak. Dasturchilar shartlarida aytilishicha, Telegram bunday to‘lovlarni o‘zi o‘tkazmaydi.</p>
      <p>Oddiy tekshiruv: to‘lagan narsangiz ekranda ochiladimi yoki eshigingizga keladimi?</p>
      <ul>
        <li>Neyrotarmoqqa 100 ta so‘rov, botning kengaytirilgan rejimi yoki yopiq kanalga kirish ekranda ochiladi, demak bular raqamli xizmat.</li>
        <li>Pitsa yetkazish, taksi yoki do‘kondan buyurtma qilingan krossovka hayotda keladi, demak bular jismoniy tovar yoki xizmat.</li>
        <li>Aralash holatni (masalan, onlayn kurs bosma kitob bilan birga sotilsa) o‘zingiz hal qilmang, bot egasidan so‘rang.</li>
      </ul>
      <h2 id="stars-nima-uchun-tanlangan-app">Stars nima uchun tanlangan: App Store va Google Play talabi</h2>
      <p>Telegram xabarida tushuntirilishicha, Apple va Google ilova ichida sotiladigan raqamli tovarlar o‘zlarining in-app purchase tizimi (ilova ichidagi xarid) orqali to‘lanishini talab qiladi. Xabarda Apple App Review Guidelines’ning 3.1.1 va 4.7 bandlari hamda Google Play to‘lov siyosati tilga olingan. Bu hujjatlarning asl matni maqola uchun tekshirilmagan.</p>
      <p>Mantiq quyidagicha: Stars aynan ilova ichidagi xarid orqali sotiladi. Botdagi raqamli tovar Stars’ga sotilsa, do‘konlar talabi bajarilgan bo‘ladi. Telegram’ning rasmiy dasturchilar shartlarida ham Apple va Google ta’riflariga amal qilish kerakligi yozilgan.</p>
      <p>Foydalanuvchi uchun Stars’ning o‘zi o‘zgarmagan. Faqat bir narsa aniqlashdi: bot egasi raqamli xizmat uchun pulni karta yoki tashqi sahifa orqali olsa, bu qoidaga zid, Telegram esa endi buni faol tekshiryapti.</p>
      <h2 id="durov-nima-qilmoqchi-postdagi-tort">Durov nima qilmoqchi: postdagi to‘rt gapni o‘qish</h2>
      <p>Durov postida reja yoki muddat yo‘q. Unda to‘rtta qisqa fikr bor, shuning uchun quyida ulardan tashqariga chiqilmaydi:</p>
      <ul>
        <li><b>Qoida.</b> Bot va mini-ilovalar raqamli xizmat uchun faqat Stars oladi. Yonida «(*Grams)» belgisi bor, lekin u nimani anglatishi postda tushuntirilmagan. Shuning uchun uni «Stars endi Gram deb ataladi» deb talqin qilish to‘g‘ri bo‘lmaydi.</li>
        <li><b>Sabab.</b> «Apple and Google rules require Stars», ya’ni Stars’ni Apple va Google qoidalari talab qiladi.</li>
        <li><b>Muqobil yo‘l.</b> Postga ko‘ra, Stars’ni Fragment’da Gram bilan sotib olish mumkin. Fragment’ning <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Stars sahifasida</a> balansni o‘zingiz yoki do‘stlaringiz uchun to‘ldirish mumkinligi yozilgan.</li>
        <li><b>Istisno.</b> «VPN bots in authoritarian countries are exempt», ya’ni avtoritar mamlakatlardagi VPN botlar istalgan to‘lovni olishi mumkin. Bu gap rasmiy hujjatlarda yo‘q va qaysi mamlakatlar nazarda tutilgani aytilmagan.</li>
      </ul>
      <p>Postda yangi funksiya, sana yoki keyingi qadam e’lon qilinmagan. «Durov keyin buni ham qiladi» degan gaplarga ishonmang: ular uning postida yo‘q.</p>
      <h2 id="tekshiruv-haftasi-nima-malum-va">Tekshiruv haftasi: nima ma’lum va nima hali ochiq savol</h2>
      <p>Telegram xabarida yozilishicha, shu hafta barcha bot va mini-ilovalardagi to‘lovlar faol tahlil qilinmoqda. Raqamli mahsulot uchun pulni Stars’ni chetlab o‘tib olayotgan loyiha istalgan vaqtda bloklanishi mumkin. Xabar boshqa ogohlantirish bo‘lmaydi degan gap bilan tugaydi.</p>
      <p>Rasmiy sahifalarda hozircha javobi yo‘q savollar:</p>
      <ul>
        <li>tekshiruv qachon tugaydi;</li>
        <li>qaysi botlar bloklangan yoki ro‘yxatga tushgan;</li>
        <li>bloklangan bot foydalanuvchiga qanday ko‘rinadi;</li>
        <li>oldin to‘langan obunalar nima bo‘ladi.</li>
      </ul>
      <p>Bot birdan ishlamay qolsa, sababini o‘zingiz taxmin qilmang. Bot egasining kanali yoki supportiga yozing va bot qayta ishlamaguncha unga yangi to‘lov qilmang.</p>
      <Notice label={"Muhim"}>Pul olmaydigan botlar (ob-havo, tarjima, fayl yuklash, eslatma botlari) haqida Telegram xabarida bir og‘iz ham gap yo‘q. Ularni o‘chirish yoki tark etishga asos yo‘q.</Notice>
      <h2 id="bot-ichida-raqamli-xizmatga-endi">Bot ichida raqamli xizmatga endi qanday to‘laysiz?</h2>
      <p>Qoidaga amal qiladigan bot raqamli xizmat uchun karta raqamini emas, Stars invoysini ko‘rsatadi. To‘lash tartibi:</p>
      <Steps>
        <Step title={"To‘lov oynasini ko‘ring"}>obuna, AI krediti yoki token narxi Stars’da ko‘rsatilishi kerak.</Step>
        <Step title={"Balansni tekshiring"}>qancha Stars borligini qanday ko‘rish <Link href="/blog/telegram-stars-balansini-tekshirish">balansni tekshirish qo‘llanmasida</Link> yozilgan.</Step>
        <Step title={"Yetmasa, Stars oling"}>Fragment’da Gram bilan yoki so‘mda <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali.</Step>
        <Step title={"Narxni hisoblang"}>eng kam buyurtma 50 Stars. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan to‘lansa 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi.</Step>
        <Step title={"Faqat @username kiriting"}>parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Buyurtma odatda bir necha soniyada avtomatik keladi.</Step>
        <Step title={"Botdagi invoysni tasdiqlang"}>Stars balansdan yechiladi, xizmatni bot beradi.</Step>
      </Steps>
      <p>So‘mda to‘lashning barcha usullari <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasida</Link> va <Link href="/stars">/stars</Link> sahifasida yozilgan. StarsPaymee buyurtmasi bo‘yicha savol bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</p>
      <p>To‘lagan xizmatingiz ishlamasa, avval bot egasiga murojaat qiling. Rasmiy hujjatga ko‘ra, raqamli tovar uchun to‘langan Stars’ni bot egasi refundStarPayment metodi orqali qaytara oladi.</p>
      <p>Ehtiyot bo‘ling: AI bot yoki obuna uchun kartaga pul o‘tkazishni so‘rasa, bu Telegram xabaridagi qoidaga zid. Bunday botga oldindan katta summa to‘lamang.</p>
      <h2 id="kichik-bot-egasiman-tolovni-starsga">Kichik bot egasiman: to‘lovni Stars’ga qanday o‘tkazaman va daromadni yechaman?</h2>
      <p>Botingiz raqamli xizmat sotsa-yu, pulni hozircha karta yoki tashqi havola orqali olsa, Stars’ga o‘tishni kechiktirmang. Quyidagi qadamlar <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">rasmiy to‘lov hujjati</a> va <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Stars API</a> sahifalariga asoslangan:</p>
      <Steps>
        <Step title={"Pullik funksiyalarni ajrating"}>raqamli xizmatlarni bir ro‘yxatga, jismoniy tovar va xizmatlarni boshqasiga yozing.</Step>
        <Step title={"Invoysda XTR ko‘rsating"}>raqamli tovar invoysida currency maydoniga XTR yoziladi.</Step>
        <Step title={"provider_token’ni raqamli tovarda ishlatmang"}>bu parametr faqat jismoniy tovar sotishda kerak.</Step>
        <Step title={"Tashqi to‘lovlarni olib tashlang"}>raqamli xizmat uchun karta raqami, tashqi to‘lov sahifasi yoki kripto havola qolmasin, chunki bunday to‘lovni uchinchi tomon provayderi orqali o‘tkazib bo‘lmaydi.</Step>
        <Step title={"Qaytarishni tayyorlang"}>mijozga pulni qaytarishda refundStarPayment metodidan foydalaning.</Step>
        <Step title={"Yechishni sozlang"}>maxsus metod noyob Fragment sahifasi havolasini qaytaradi. Yechish uchun balans stars_revenue_withdrawal_min qiymatidan kam bo‘lmasligi kerak.</Step>
      </Steps>
      <p>Daromad haqida bilishingiz kerak bo‘lgan narsalar:</p>
      <ul>
        <li>Dasturchilar shartlariga ko‘ra, har bir Star uchun 0,013 USD ga teng mukofot olish mumkin.</li>
        <li>Bot balansidagi Stars Telegram’ga tegishli va o‘z-o‘zidan qiymatga ega emas.</li>
        <li>Mukofot <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment</a> orqali olinadi. Buning uchun Telegram akkaunt va TON hamyon ulanadi. Mukofot qaysi kriptovalyutada berilishini Fragment o‘zi hal qiladi.</li>
        <li>Mukofot olingach, tranzaksiya blokcheynda qoladi va uni bekor qilib bo‘lmaydi. Fragment mukofot olish imkonini vaqtincha yoki butunlay cheklashi mumkin.</li>
        <li>Eng kam yechish miqdori hujjatda raqam bilan emas, parametr sifatida berilgan. Shuning uchun bu yerda aniq raqam yozilmadi.</li>
      </ul>
      <p>Bot kripto bilan ishlasa: Telegram xabariga ko‘ra, saqlash, almashtirish va swap’dan boshqa kripto amallarida faqat GRAM ishlatish mumkin. Bu gap xabardan olingan, shuning uchun loyihangizni dasturchilar shartlari bilan ham solishtiring.</p>
      <p>Kod tomoni <Link href="/blog/telegram-botga-stars-tolovini-ulash">botga Stars to‘lovini ulash</Link> va <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API’ga ulanish</Link> maqolalarida batafsil yozilgan.</p>
      <h2 id="botingiz-yopiladi-degan-soxta-ogohlantirishni">«Botingiz yopiladi» degan soxta ogohlantirishni qanday ajratasiz?</h2>
      <p>Shov-shuvli yangilik firibgarlarga qo‘l keladi: bot egalariga «Telegram nomidan» xabar yozib, vahimaga solishga urinishadi. Yuqorida keltirilgan Telegram xabarida pul, parol, kod yoki havola bosish talab qilinmagan. Quyidagilardan birini ko‘rsangiz, bu xabar soxta:</p>
      <ul>
        <li>«blokdan chiqarish uchun Stars yoki pul yuboring» degan talab;</li>
        <li>«tasdiqlash uchun SMS kodni ayting» degan iltimos;</li>
        <li>bot tokenini begona saytga kiritishni so‘rash;</li>
        <li>«bir soat ichida» kabi shoshiltiruvchi muddat;</li>
        <li>o‘zini «Telegram xodimi» deb tanishtirgan odam shaxsiy chatga yozishi.</li>
      </ul>
      <p>Qoidalarni faqat <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">rasmiy to‘lov sahifasi</a> va <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">dasturchilar shartlaridan</a> tekshiring. Akkauntingiz qo‘ldan ketmasligi uchun <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">ikki bosqichli himoyani</Link> yoqib qo‘ying.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars API" },
          { href: "https://fragment.com/terms", label: "Fragment Terms of Service" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Men bot egasi emasman — mendan nima talab qilinadi?", answer: "Hech narsa. Botda obuna yoki AI kredit olsangiz, Stars bilan to‘laysiz, shuning uchun to‘lovdan oldin balansda yetarli Stars borligini tekshiring." },
  { question: "Ob-havo yoki yuklab olish botim pul olmaydi — u ham tekshiruvga tushadimi?", answer: "Telegram xabari to‘lov olayotgan loyihalar haqida. Hech narsa sotmaydigan botlar haqida unda gap yo‘q, ulardan voz kechishga sabab yo‘q." },
  { question: "AI botda tokenlarni avval karta bilan olardim, endi qanday olaman?", answer: "Qoidaga amal qiladigan AI bot token paketini Stars invoysi orqali sotadi. Stars’ni Fragment’da Gram bilan yoki @StarsPaymee_bot orqali so‘mda olib, invoysni balansdan to‘laysiz." },
  { question: "Taksi yoki ovqat yetkazish botida ham Stars bilan to‘lashim kerakmi?", answer: "Yo‘q. Rasmiy hujjatga ko‘ra, jismoniy tovar va xizmatlar uchun bot boshqa valyuta va to‘lov provayderidan foydalanishi mumkin." },
  { question: "Gram yoki kripto hamyonim yo‘q — Stars’ni qanday olaman?", answer: "@StarsPaymee_bot’da so‘mda olishingiz mumkin: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi orqali. Faqat @username kerak bo‘ladi." },
  { question: "StarsPaymee orqali olingan Stars bot ichidagi to‘lovga yaraydimi?", answer: "Ha, Stars @username’ingizdagi akkaunt balansiga tushadi va bot invoysi shu balansdan to‘lanadi. Faqat botning o‘zi narxni Stars invoysi bilan ko‘rsatishi kerak." },
  { question: "Durov aytgan VPN istisnosi O‘zbekistondagi VPN botlarga ham tegishlimi?", answer: "Buni aniq aytib bo‘lmaydi: postda qaysi mamlakatlar nazarda tutilgani yozilmagan. Rasmiy hujjatlarda esa bunday istisno umuman yo‘q." },
  { question: "Xizmat ishlamasa, bot egasi Stars’ni menga qaytara oladimi?", answer: "Texnik jihatdan qaytara oladi: buning uchun Bot API’da refundStarPayment metodi bor. Qaytarish-qaytarmaslikni bot egasi hal qiladi, shuning uchun avval unga yozing." },
  { question: "Kichik bot egasi Stars daromadini so‘mda ola oladimi?", answer: "Rasmiy yo‘l so‘mda emas: mukofot Fragment orqali kriptovalyutada, ulangan TON hamyonga beriladi. StarsPaymee esa foydalanuvchilardan Stars sotib olmaydi." },
  { question: "Oylik obunani endi to‘lagan edim, bot yopilsa pul nima bo‘ladi?", answer: "Telegram xabarida bu haqda hech narsa yo‘q. Javobni faqat bot egasi bera oladi, shuning uchun uning kanali yoki supportiga yozing." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, Telegram не закрывает все боты подряд. Проверка касается ботов и мини-приложений, которые берут деньги за цифровое — подписки, AI-кредиты и т. п. — картой, по внешней ссылке или другим способом. Боты, которые ничего не продают, в сообщении вообще не упоминаются. Для вас меняется одно: цифровую услугу в боте теперь оплачиваете в Telegram Stars.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#ishlatayotgan-botimga-bu-qoida-tegadimi", label: "Касается ли это правило бота, которым я пользуюсь?" },
          { href: "#17-18-noyabrda-nima-boldi", label: "Что произошло 17–18 ноября: что именно написали Telegram и Дуров" },
          { href: "#nima-raqamli-xizmat-hisoblanadi-va", label: "Что считается цифровой услугой, а что — физическим товаром" },
          { href: "#stars-nima-uchun-tanlangan-app", label: "Почему именно Stars: требование App Store и Google Play" },
          { href: "#durov-nima-qilmoqchi-postdagi-tort", label: "Чего хочет Дуров: разбираем четыре тезиса поста" },
          { href: "#tekshiruv-haftasi-nima-malum-va", label: "Неделя проверки: что известно и какие вопросы пока открыты" },
          { href: "#bot-ichida-raqamli-xizmatga-endi", label: "Как теперь платить за цифровую услугу внутри бота" },
          { href: "#kichik-bot-egasiman-tolovni-starsga", label: "У меня небольшой бот: как перевести оплату на Stars и вывести доход" },
          { href: "#botingiz-yopiladi-degan-soxta-ogohlantirishni", label: "Как распознать фальшивое предупреждение «ваш бот закроют»" },
        ]}
      />
      <h2 id="ishlatayotgan-botimga-bu-qoida-tegadimi">Касается ли это правило бота, которым я пользуюсь?</h2>
      <p>Сначала разберитесь, что продаёт бот. Важен не тип бота, а то, за что и каким способом он берёт деньги.</p>
      <CompareTable
        headers={["Что делает бот", "Как он должен принимать оплату", "Где это написано"]}
        rows={[
          ["Продаёт подписку, AI-кредиты или токены", "Только Telegram Stars (валюта XTR)", "Официальная документация и сообщение Telegram"],
          ["Доставляет цветы, одежду, еду или вызывает такси", "Можно другую валюту и другого провайдера, такие платежи Telegram сам не проводит", "Официальная документация и условия для разработчиков"],
          ["Не берёт денег (погода, перевод, загрузка файлов)", "В сообщении об этом ничего нет", "—"],
          ["Работает с криптовалютой", "Для всех операций, кроме хранения, обмена и свопа, — только GRAM", "Сообщение Telegram"],
          ["VPN-сервис", "Для VPN-ботов в авторитарных странах сделано исключение", "Личный пост Дурова"],
        ]}
      />
      <p>Первые две строки опираются на <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">официальную страницу о платежах</a> и <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условия для разработчиков ботов</a>. Последние две взяты только из сообщения Telegram и поста Дурова. Если ваш бот не подходит ни под одну строку, не гадайте: прочитайте эти две страницы или спросите владельца бота.</p>
      <Notice label={"Важно"}>Таблица не означает, что какой-то бот, в том числе бот StarsPaymee, точно не будет заблокирован. Она лишь показывает, на кого направлено правило.</Notice>
      <h2 id="17-18-noyabrda-nima-boldi">Что произошло 17–18 ноября: что именно написали Telegram и Дуров</h2>
      <p>Владельцы ботов получили от Telegram сообщение с заголовком «Payments for digital goods and services» («Платежи за цифровые товары и услуги»). В нём сказано, что в ботах и мини-приложениях «digital goods can only be sold for Telegram Stars», то есть цифровые товары продаются только за Telegram Stars. А бот или мини-приложение, нарушившие правило, «may be blocked at any time, without warning» — могут быть заблокированы в любой момент без предупреждения.</p>
      <p>17 ноября Дуров опубликовал в своём канале короткий пост: «Telegram bots and mini apps can accept only Stars (*Grams) for digital services». По-русски: боты и мини-приложения Telegram могут принимать за цифровые услуги только Stars.</p>
      <p>Отдельно на telegram.org или core.telegram.org эти два текста не публиковались. Поэтому они приведены по копии, и у каждой фразы указано, кому она принадлежит.</p>
      <p>Само правило при этом существует давно. Согласно официальной документации, оплата цифровых товаров и услуг через ботов и мини-приложения проходит только в Telegram Stars. В условиях для разработчиков написано, что такие платежи нельзя проводить через сторонних провайдеров, а сделка выполняется исключительно через обмен Stars. Нового здесь два момента: соблюдение правила начали проверять и открыто предупредили о блокировке. Почему Telegram постепенно переводит всё на Stars, разобрано в <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">отдельной статье</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="nima-raqamli-xizmat-hisoblanadi-va">Что считается цифровой услугой, а что — физическим товаром</h2>
      <p>В сообщении Telegram приведены четыре примера цифровых услуг:</p>
      <ul>
        <li>подписка на сам бот;</li>
        <li>платный инструмент, построенный на интеграции бота с Telegram;</li>
        <li>доступ к сторонним AI-моделям;</li>
        <li>кредиты и токены для любого из перечисленного.</li>
      </ul>
      <p>Этот список есть только в сообщении, на страницах официальной документации он так не расписан. В официальных условиях сказано другое: что считать цифровыми товарами и услугами, Telegram определяет по формулировкам Apple и Google.</p>
      <p>С физическими товарами иначе. По официальной странице, при продаже физического товара или услуги можно использовать другие валюты и платёжных провайдеров. Параметр provider_token в инвойсе тоже нужен только для таких продаж. А в условиях для разработчиков сказано, что такие платежи Telegram сам не проводит.</p>
      <p>Простая проверка: то, за что вы заплатили, открывается на экране или приезжает к вашей двери?</p>
      <ul>
        <li>100 запросов к нейросети, расширенный режим бота или доступ в закрытый канал открываются на экране — значит, это цифровые услуги.</li>
        <li>Доставка пиццы, такси или кроссовки из магазина приходят в реальной жизни — значит, это физический товар или услуга.</li>
        <li>Смешанный случай (например, онлайн-курс продают вместе с печатной книгой) не решайте сами — спросите владельца бота.</li>
      </ul>
      <h2 id="stars-nima-uchun-tanlangan-app">Почему именно Stars: требование App Store и Google Play</h2>
      <p>Telegram в сообщении объясняет: Apple и Google требуют, чтобы цифровые товары внутри приложения оплачивались через их систему in-app purchase (встроенные покупки). В сообщении упомянуты пункты 3.1.1 и 4.7 Apple App Review Guidelines и платёжная политика Google Play. Оригинальный текст этих документов для статьи не проверялся.</p>
      <p>Логика такая: Stars продаются как раз через встроенные покупки. Если цифровой товар в боте продаётся за Stars, требование магазинов выполнено. В официальных условиях Telegram для разработчиков тоже написано, что нужно придерживаться определений Apple и Google.</p>
      <p>Для пользователя сами Stars не изменились. Прояснилось только одно: если владелец бота берёт деньги за цифровую услугу картой или через внешнюю страницу, это нарушает правило, и теперь Telegram это активно проверяет.</p>
      <h2 id="durov-nima-qilmoqchi-postdagi-tort">Чего хочет Дуров: разбираем четыре тезиса поста</h2>
      <p>В посте Дурова нет ни плана, ни сроков. В нём четыре коротких мысли, и ниже мы не выходим за их рамки:</p>
      <ul>
        <li><b>Правило.</b> Боты и мини-приложения принимают за цифровые услуги только Stars. Рядом стоит пометка «(*Grams)», но что она значит, в посте не объяснено. Поэтому толковать её как «Stars теперь называются Gram» неправильно.</li>
        <li><b>Причина.</b> «Apple and Google rules require Stars» — Stars требуют правила Apple и Google.</li>
        <li><b>Альтернатива.</b> Согласно посту, Stars можно купить на Fragment за Gram. На <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">странице Stars на Fragment</a> указано, что баланс можно пополнить себе или друзьям.</li>
        <li><b>Исключение.</b> «VPN bots in authoritarian countries are exempt» — VPN-боты в авторитарных странах могут принимать любую оплату. В официальной документации этого нет, и какие страны имеются в виду, не сказано.</li>
      </ul>
      <p>Новых функций, дат или следующих шагов в посте не объявлено. Не верьте разговорам вроде «потом Дуров сделает ещё и это»: в его посте такого нет.</p>
      <h2 id="tekshiruv-haftasi-nima-malum-va">Неделя проверки: что известно и какие вопросы пока открыты</h2>
      <p>По словам Telegram, на этой неделе платежи во всех ботах и мини-приложениях активно анализируются. Проект, который берёт деньги за цифровой продукт в обход Stars, может быть заблокирован в любой момент. Сообщение заканчивается фразой о том, что других предупреждений не будет.</p>
      <p>Вопросы, на которые на официальных страницах пока нет ответа:</p>
      <ul>
        <li>когда закончится проверка;</li>
        <li>какие боты уже заблокированы или попали в список;</li>
        <li>как заблокированный бот выглядит для пользователя;</li>
        <li>что будет с уже оплаченными подписками.</li>
      </ul>
      <p>Если бот вдруг перестал работать, не гадайте о причине. Напишите в канал или поддержку владельца бота и не платите ему повторно, пока бот снова не заработает.</p>
      <Notice label={"Важно"}>О ботах, которые не берут денег (погода, перевод, загрузка файлов, напоминания), в сообщении Telegram нет ни слова. Удалять их или отказываться от них нет причин.</Notice>
      <h2 id="bot-ichida-raqamli-xizmatga-endi">Как теперь платить за цифровую услугу внутри бота</h2>
      <p>Бот, который соблюдает правило, за цифровую услугу показывает не номер карты, а инвойс в Stars. Порядок оплаты:</p>
      <Steps>
        <Step title={"Посмотрите окно оплаты"}>цена подписки, AI-кредитов или токенов должна быть указана в Stars.</Step>
        <Step title={"Проверьте баланс"}>как узнать, сколько у вас Stars, описано в <Link href="/blog/telegram-stars-balansini-tekshirish">инструкции по проверке баланса</Link>.</Step>
        <Step title={"Если не хватает, купите Stars"}>на Fragment за Gram или в сумах через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Посчитайте сумму"}>минимальный заказ 50 Stars. При переводе на карту UzCard/HUMO или оплате с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</Step>
        <Step title={"Укажите только @username"}>пароль, SMS-код или вход в аккаунт не нужны. Заказ обычно приходит автоматически за несколько секунд.</Step>
        <Step title={"Подтвердите инвойс в боте"}>Stars спишутся с баланса, а услугу предоставит бот.</Step>
      </Steps>
      <p>Все способы оплаты в сумах описаны в <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">инструкции по покупке Stars</Link> и на странице <Link href="/stars">/stars</Link>. По вопросам о заказе в StarsPaymee пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <p>Если оплаченная услуга не работает, сначала обратитесь к владельцу бота. Согласно официальной документации, Stars, потраченные на цифровой товар, владелец бота может вернуть методом refundStarPayment.</p>
      <p>Будьте осторожны: если AI-бот или сервис подписки просит перевести деньги на карту, это противоречит правилу из сообщения Telegram. Не платите такому боту крупную сумму вперёд.</p>
      <h2 id="kichik-bot-egasiman-tolovni-starsga">У меня небольшой бот: как перевести оплату на Stars и вывести доход</h2>
      <p>Если ваш бот продаёт цифровые услуги, а деньги пока принимает картой или по внешней ссылке, не откладывайте переход на Stars. Шаги ниже основаны на <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">официальной документации по платежам</a> и странице <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Stars API</a>:</p>
      <Steps>
        <Step title={"Разделите платные функции"}>цифровые услуги в один список, физические товары и услуги — в другой.</Step>
        <Step title={"Укажите XTR в инвойсе"}>в инвойсе за цифровой товар в поле currency пишется XTR.</Step>
        <Step title={"Не используйте provider_token для цифровых товаров"}>этот параметр нужен только при продаже физических товаров.</Step>
        <Step title={"Уберите внешние платежи"}>для цифровых услуг не должно остаться номера карты, внешней платёжной страницы или крипто-ссылки: такие платежи нельзя проводить через стороннего провайдера.</Step>
        <Step title={"Подготовьте возвраты"}>для возврата денег клиенту используйте метод refundStarPayment.</Step>
        <Step title={"Настройте вывод"}>специальный метод возвращает ссылку на уникальную страницу Fragment. Вывести можно, только если баланс не меньше значения stars_revenue_withdrawal_min.</Step>
      </Steps>
      <p>Что нужно знать о доходе:</p>
      <ul>
        <li>По условиям для разработчиков за каждую Star можно получить вознаграждение, эквивалентное 0,013 USD.</li>
        <li>Stars на балансе бота принадлежат Telegram и сами по себе ценности не имеют.</li>
        <li>Вознаграждение получают через <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment</a>. Для этого подключают аккаунт Telegram и TON-кошелёк. В какой криптовалюте выплатить вознаграждение, Fragment решает сам.</li>
        <li>После получения вознаграждения транзакция остаётся в блокчейне, отменить её нельзя. Fragment может временно или навсегда ограничить возможность получать вознаграждения.</li>
        <li>Минимальная сумма вывода в документации задана не числом, а параметром. Поэтому точную цифру мы здесь не приводим.</li>
      </ul>
      <p>Если бот работает с криптовалютой: по сообщению Telegram, для всех крипто-операций, кроме хранения, обмена и свопа, можно использовать только GRAM. Эта фраза взята из сообщения, поэтому сверьте проект и с условиями для разработчиков.</p>
      <p>Техническая часть подробно разобрана в статьях о <Link href="/blog/telegram-botga-stars-tolovini-ulash">подключении оплаты Stars к боту</Link> и о <Link href="/blog/telegram-stars-api-nima-ulanish">подключении к Stars API</Link>.</p>
      <h2 id="botingiz-yopiladi-degan-soxta-ogohlantirishni">Как распознать фальшивое предупреждение «ваш бот закроют»</h2>
      <p>Громкая новость на руку мошенникам: они пишут владельцам ботов «от имени Telegram» и пытаются напугать. В сообщении Telegram, о котором шла речь выше, не требуется ни денег, ни пароля, ни кода, ни перехода по ссылке. Если видите хоть что-то из списка ниже, сообщение поддельное:</p>
      <ul>
        <li>требование «пришлите Stars или деньги, чтобы снять блокировку»;</li>
        <li>просьба «назовите SMS-код для подтверждения»;</li>
        <li>просьба ввести токен бота на постороннем сайте;</li>
        <li>срочный дедлайн вроде «в течение часа»;</li>
        <li>человек, назвавшийся «сотрудником Telegram», пишет в личный чат.</li>
      </ul>
      <p>Проверяйте правила только по <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">официальной странице о платежах</a> и <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условиям для разработчиков</a>. Чтобы не потерять аккаунт, включите <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">двухэтапную защиту</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars API" },
          { href: "https://fragment.com/terms", label: "Fragment Terms of Service" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Я не владелец бота — что требуется от меня?", answer: "Ничего. Если берёте в боте подписку или AI-кредиты, оплата идёт в Stars, так что перед покупкой убедитесь, что на балансе их достаточно." },
  { question: "Мой бот погоды или загрузок не берёт денег — его тоже проверят?", answer: "Сообщение Telegram касается проектов, которые принимают оплату. О ботах, которые ничего не продают, там не сказано, и отказываться от них незачем." },
  { question: "Раньше я покупал токены в AI-боте картой. Как теперь?", answer: "AI-бот, соблюдающий правило, продаёт пакеты токенов через инвойс в Stars. Купите Stars на Fragment за Gram или в сумах через @StarsPaymee_bot и оплатите инвойс с баланса." },
  { question: "В боте такси или доставки еды тоже надо платить Stars?", answer: "Нет. По официальной документации за физические товары и услуги бот может принимать оплату в другой валюте и через другого провайдера." },
  { question: "У меня нет Gram и криптокошелька — как купить Stars?", answer: "В @StarsPaymee_bot можно купить их в сумах: через Click, Payme, Uzum, Paynet, переводом на карту UzCard/HUMO или с баланса бота. Понадобится только @username." },
  { question: "Подойдут ли Stars, купленные через StarsPaymee, для оплаты внутри бота?", answer: "Да, Stars зачисляются на баланс аккаунта с вашим @username, и инвойс бота оплачивается с этого баланса. Главное, чтобы сам бот выставлял цену инвойсом в Stars." },
  { question: "Исключение для VPN, о котором писал Дуров, распространяется на VPN-боты в Узбекистане?", answer: "Точно сказать нельзя: в посте не уточняется, какие страны имеются в виду. В официальной документации такого исключения нет вовсе." },
  { question: "Если услуга не работает, может ли владелец бота вернуть мне Stars?", answer: "Технически может — для этого в Bot API есть метод refundStarPayment. Возвращать или нет, решает владелец бота, так что сначала напишите ему." },
  { question: "Может ли владелец небольшого бота получить доход от Stars в сумах?", answer: "Официальный путь — не в сумах: вознаграждение выплачивается через Fragment в криптовалюте на подключённый TON-кошелёк. StarsPaymee при этом не покупает Stars у пользователей." },
  { question: "Я только что оплатил месячную подписку — что будет с деньгами, если бот закроют?", answer: "В сообщении Telegram об этом ничего нет. Ответить может только владелец бота, поэтому напишите в его канал или поддержку." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, Telegram is not shutting down every bot. The review targets bots and mini apps that charge for digital items like subscriptions or AI credits through a card, an external link or some other route. Bots that sell nothing aren’t mentioned in the notice at all. The only change for you: digital services inside bots are now paid for in Telegram Stars.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#ishlatayotgan-botimga-bu-qoida-tegadimi", label: "Does this rule affect the bot I use?" },
          { href: "#17-18-noyabrda-nima-boldi", label: "What happened on November 17–18: what did Telegram and Durov actually say?" },
          { href: "#nima-raqamli-xizmat-hisoblanadi-va", label: "What counts as a digital service, and what counts as physical goods?" },
          { href: "#stars-nima-uchun-tanlangan-app", label: "Why Stars: the App Store and Google Play requirement" },
          { href: "#durov-nima-qilmoqchi-postdagi-tort", label: "What Durov intends: reading the four points in his post" },
          { href: "#tekshiruv-haftasi-nima-malum-va", label: "Review week: what we know and what’s still unclear" },
          { href: "#bot-ichida-raqamli-xizmatga-endi", label: "How do you pay for a digital service inside a bot now?" },
          { href: "#kichik-bot-egasiman-tolovni-starsga", label: "I run a small bot: how do I switch payments to Stars and withdraw earnings?" },
          { href: "#botingiz-yopiladi-degan-soxta-ogohlantirishni", label: "How to spot a fake “your bot will be shut down” warning" },
        ]}
      />
      <h2 id="ishlatayotgan-botimga-bu-qoida-tegadimi">Does this rule affect the bot I use?</h2>
      <p>Start by working out what the bot sells. The type of bot doesn’t matter here. What matters is what it charges for and how it collects the money.</p>
      <CompareTable
        headers={["What the bot does", "How payment must be collected", "Where this is stated"]}
        rows={[
          ["Sells subscriptions, AI credits or tokens", "Telegram Stars only (XTR currency)", "Official documentation and the Telegram notice"],
          ["Delivers flowers, clothes or food, or books taxis", "Other currencies and providers are allowed, and Telegram does not process these payments itself", "Official documentation and the developer terms"],
          ["Takes no payments (weather, translation, file downloads)", "Not mentioned in the notice", "—"],
          ["Works with crypto", "GRAM only for anything other than storing, exchanging and swapping", "Telegram notice"],
          ["VPN service", "VPN bots in authoritarian countries are exempt", "Durov’s personal post"],
        ]}
      />
      <p>The first two rows are based on the <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">official payments page</a> and the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">bot developer terms</a>. The last two rows come only from the Telegram notice and Durov’s post. If your bot doesn’t match any row, don’t guess. Read those two pages or ask the bot’s owner.</p>
      <Notice label={"Important"}>The table doesn’t promise that any bot, StarsPaymee’s included, won’t be blocked. It only shows who the rule is aimed at.</Notice>
      <h2 id="17-18-noyabrda-nima-boldi">What happened on November 17–18: what did Telegram and Durov actually say?</h2>
      <p>Bot owners got a message from Telegram titled “Payments for digital goods and services”. The message says that in bots and mini apps, “digital goods can only be sold for Telegram Stars”. It also warns that any bot or mini app breaking the rule “may be blocked at any time, without warning”.</p>
      <p>On November 17, Durov published a short post on his channel: “Telegram bots and mini apps can accept only Stars (*Grams) for digital services”.</p>
      <p>Neither text appears as a separate announcement on telegram.org or core.telegram.org. That’s why we quote them from copies and say who wrote each statement.</p>
      <p>The rule itself isn’t new. According to the official documentation, payments for digital goods and services made through bots and mini apps must use Telegram Stars only. The developer terms say these payments can’t go through third-party payment providers, and that such transactions must be completed entirely by exchanging Stars. Two things are new: Telegram is now checking whether bots follow the rule, and it has openly warned that bots can be blocked. We explain why Telegram is gradually moving to Stars in <Link href="/blog/nega-telegram-hammasini-stars-ga-otkazmoqda">a separate article</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="nima-raqamli-xizmat-hisoblanadi-va">What counts as a digital service, and what counts as physical goods?</h2>
      <p>The Telegram notice gives four examples of digital services:</p>
      <ul>
        <li>a subscription to the bot itself;</li>
        <li>a paid tool built on the bot’s Telegram integration;</li>
        <li>access to third-party AI models;</li>
        <li>credits and tokens for any of the above.</li>
      </ul>
      <p>This list only appears in the notice. The official documentation pages don’t spell it out like this. What the official terms do say is that Telegram decides what counts as digital goods and services based on Apple’s and Google’s definitions.</p>
      <p>Physical goods are a different case. The official page says that if you sell physical goods or services, you can use other currencies and payment providers. The provider_token parameter in an invoice is only needed for that kind of sale. The developer terms state that Telegram does not process these payments itself.</p>
      <p>A quick test: does the thing you paid for open on your screen, or arrive at your door?</p>
      <ul>
        <li>100 requests to a neural network, a bot’s advanced mode or access to a private channel all open on screen, so they’re digital services.</li>
        <li>Pizza delivery, a taxi or sneakers ordered from a shop arrive in the real world, so they’re physical goods or services.</li>
        <li>For mixed cases, like an online course sold together with a printed book, don’t decide on your own. Ask the bot’s owner.</li>
      </ul>
      <h2 id="stars-nima-uchun-tanlangan-app">Why Stars: the App Store and Google Play requirement</h2>
      <p>According to the Telegram notice, Apple and Google require digital goods sold inside an app to be paid for through their own in-app purchase systems. The notice cites sections 3.1.1 and 4.7 of Apple’s App Review Guidelines and Google Play’s payments policy. We haven’t checked the original wording of those documents for this article.</p>
      <p>The reasoning works like this. Stars are sold through in-app purchases, so when a bot sells digital goods for Stars, the stores’ rules are met. Telegram’s official developer terms also say it has to follow Apple’s and Google’s definitions.</p>
      <p>Nothing about Stars has changed for users. One thing is now clear, though: if a bot owner collects money for a digital service by card or through an external page, that breaks the rule, and Telegram is now actively checking for it.</p>
      <h2 id="durov-nima-qilmoqchi-postdagi-tort">What Durov intends: reading the four points in his post</h2>
      <p>Durov’s post has no plan and no deadline. It makes four short points, and we don’t go beyond them:</p>
      <ul>
        <li><b>The rule.</b> Bots and mini apps accept only Stars for digital services. There’s a “(*Grams)” note next to it, but the post doesn’t explain what it means. So it would be wrong to read it as “Stars are now called Grams”.</li>
        <li><b>The reason.</b> “Apple and Google rules require Stars”.</li>
        <li><b>The alternative.</b> According to the post, you can buy Stars with Gram on Fragment. Fragment’s <a href={"https://fragment.com/stars/buy"} target="_blank" rel="noopener noreferrer">Stars page</a> says you can top up a Stars balance for yourself or for friends and colleagues.</li>
        <li><b>The exception.</b> “VPN bots in authoritarian countries are exempt”, which means they can accept any kind of payment. This exception isn’t in the official documentation, and the post doesn’t say which countries it covers.</li>
      </ul>
      <p>The post doesn’t announce any new feature, date or next step. Ignore claims like “Durov will do this next”. They aren’t in his post.</p>
      <h2 id="tekshiruv-haftasi-nima-malum-va">Review week: what we know and what’s still unclear</h2>
      <p>According to the Telegram notice, payments in all bots and mini apps are being actively reviewed this week. Any project that takes money for digital products while bypassing Stars can be blocked at any time. The notice ends by saying there will be no further warnings.</p>
      <p>Questions the official pages don’t answer yet:</p>
      <ul>
        <li>when the review ends;</li>
        <li>which bots have been blocked or flagged;</li>
        <li>what a blocked bot looks like to users;</li>
        <li>what happens to subscriptions that were already paid for.</li>
      </ul>
      <p>If a bot suddenly stops working, don’t guess why. Contact the bot owner through their channel or support, and don’t make any new payments until the bot is working again.</p>
      <Notice label={"Important"}>The Telegram notice says nothing at all about bots that don’t take payments, such as weather, translation, download or reminder bots. You have no reason to delete or leave them.</Notice>
      <h2 id="bot-ichida-raqamli-xizmatga-endi">How do you pay for a digital service inside a bot now?</h2>
      <p>A bot that follows the rule shows a Stars invoice for digital services instead of a card number. Here’s how to pay:</p>
      <Steps>
        <Step title={"Check the payment screen"}>the price of the subscription, AI credits or tokens should be shown in Stars.</Step>
        <Step title={"Check your balance"}>our <Link href="/blog/telegram-stars-balansini-tekshirish">balance guide</Link> shows how to see how many Stars you have.</Step>
        <Step title={"Top up if you’re short"}>buy Stars with Gram on Fragment, or in soums through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Work out the price"}>the minimum order is 50 Stars. One Star costs {som(STARS_PER_UNIT_UZS, "en")} if you pay by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet.</Step>
        <Step title={"Enter only your @username"}>nobody will ask for your password, SMS code or account access. Orders usually arrive automatically within a few seconds.</Step>
        <Step title={"Confirm the invoice in the bot"}>the Stars come off your balance and the bot provides the service.</Step>
      </Steps>
      <p>All the ways to pay in soums are covered in our <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Stars</Link> and on the <Link href="/stars">/stars</Link> page. For questions about a StarsPaymee order, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <p>If a service you paid for doesn’t work, contact the bot owner first. The official documentation says the owner can refund Stars paid for digital goods using the refundStarPayment method.</p>
      <p>Watch out: if an AI bot or subscription service asks you to transfer money to a card, that breaks the rule described in the Telegram notice. Don’t pay such a bot a large amount upfront.</p>
      <h2 id="kichik-bot-egasiman-tolovni-starsga">I run a small bot: how do I switch payments to Stars and withdraw earnings?</h2>
      <p>If your bot sells a digital service but still takes payment by card or external link, switch to Stars now. These steps are based on the <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">official payments documentation</a> and the <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Stars API</a> page:</p>
      <Steps>
        <Step title={"Sort your paid features"}>put digital services in one list and physical goods and services in another.</Step>
        <Step title={"Set XTR on invoices"}>invoices for digital goods must have XTR in the currency field.</Step>
        <Step title={"Leave provider_token out of digital sales"}>this parameter is only needed when selling physical goods.</Step>
        <Step title={"Remove external payments"}>no card numbers, external payment pages or crypto links should remain for digital services, because these payments can’t go through third-party providers.</Step>
        <Step title={"Prepare for refunds"}>use the refundStarPayment method to give customers their money back.</Step>
        <Step title={"Set up withdrawals"}>a dedicated method returns a unique link to a Fragment page. You can only withdraw once your balance is at least the stars_revenue_withdrawal_min value.</Step>
      </Steps>
      <p>What you need to know about earnings:</p>
      <ul>
        <li>Under the developer terms, you can receive rewards worth the equivalent of 0.013 USD for each Star.</li>
        <li>Stars on a bot’s balance belong to Telegram and have no value in themselves.</li>
        <li>Rewards are claimed through <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment</a>, which requires connecting your Telegram account and a TON wallet. Fragment alone decides which cryptocurrency the reward is paid in.</li>
        <li>Once a reward is claimed, the transaction is recorded on the blockchain and can’t be reversed. Fragment can temporarily or permanently remove your ability to receive rewards.</li>
        <li>The minimum withdrawal amount is given as a parameter in the documentation, not as a number, so we don’t quote a figure here.</li>
      </ul>
      <p>If your bot works with crypto: according to the Telegram notice, only GRAM may be used for crypto operations other than storing, exchanging and swapping. This comes from the notice, so also check your project against the developer terms.</p>
      <p>The coding side is covered in detail in our articles on <Link href="/blog/telegram-botga-stars-tolovini-ulash">adding Stars payments to a bot</Link> and <Link href="/blog/telegram-stars-api-nima-ulanish">connecting to the Stars API</Link>.</p>
      <h2 id="botingiz-yopiladi-degan-soxta-ogohlantirishni">How to spot a fake “your bot will be shut down” warning</h2>
      <p>Big news is useful to scammers. They message bot owners “on behalf of Telegram” to scare them. The Telegram notice quoted above doesn’t ask for money, passwords, codes or clicking a link. If you see any of the following, the message is fake:</p>
      <ul>
        <li>a demand to “send Stars or money to get unblocked”;</li>
        <li>a request to “share your SMS code for verification”;</li>
        <li>a request to enter your bot token on an unknown website;</li>
        <li>an urgent deadline such as “within one hour”;</li>
        <li>someone calling themselves a “Telegram employee” messaging you in a private chat.</li>
      </ul>
      <p>Check the rules only on the <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">official payments page</a> and in the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">developer terms</a>. To keep your account safe, turn on <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">two-step verification</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars API" },
          { href: "https://fragment.com/terms", label: "Fragment Terms of Service" },
          { href: "https://fragment.com/stars/buy", label: "Fragment — Buy Stars" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I don’t own a bot. Do I need to do anything?", answer: "No. If you buy a subscription or AI credits in a bot, you’ll pay in Stars, so check that you have enough Stars on your balance before paying." },
  { question: "My weather or download bot doesn’t charge anything. Will it be reviewed too?", answer: "The Telegram notice is about projects that take payments. It doesn’t mention bots that sell nothing, so there’s no reason to stop using them." },
  { question: "I used to buy tokens in an AI bot by card. How do I buy them now?", answer: "An AI bot that follows the rule sells token packs through a Stars invoice. Get Stars with Gram on Fragment or in soums through @StarsPaymee_bot, then pay the invoice from your balance." },
  { question: "Do I have to pay in Stars in a taxi or food delivery bot as well?", answer: "No. The official documentation says bots can use other currencies and payment providers for physical goods and services." },
  { question: "I don’t have Gram or a crypto wallet. How can I get Stars?", answer: "You can buy them in soums in @StarsPaymee_bot using Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. All you need is your @username." },
  { question: "Can Stars bought through StarsPaymee be used to pay inside a bot?", answer: "Yes. The Stars go to the balance of the account linked to your @username, and bot invoices are paid from that balance. The bot just has to show its price as a Stars invoice." },
  { question: "Does the VPN exemption Durov mentioned cover VPN bots in Uzbekistan?", answer: "There’s no clear answer: the post doesn’t say which countries it means. The official documentation doesn’t include any such exemption at all." },
  { question: "If the service doesn’t work, can the bot owner give my Stars back?", answer: "Technically yes, using the refundStarPayment method in the Bot API. Whether to refund is up to the owner, so contact them first." },
  { question: "Can a small bot owner get Stars earnings in soums?", answer: "Not through the official route: rewards are paid in cryptocurrency through Fragment to a connected TON wallet. StarsPaymee doesn’t buy Stars from users." },
  { question: "I just paid for a monthly subscription. What happens to my money if the bot is blocked?", answer: "The Telegram notice doesn’t cover this. Only the bot owner can answer, so contact them through their channel or support." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["telegram bot bloklanishi stars qoidasi","telegram bot bloklanadimi","botlarda faqat stars bilan to'lov","durov stars post 17 noyabr","telegram raqamli xizmat stars","mini app to'lov stars xtr","telegram stars so'mda sotib olish","блокировка телеграм ботов только stars","телеграм боты оплата только звёздами","дуров stars боты цифровые товары","telegram mini app оплата stars блокировка"],
  howToSteps: [
    { name: "To‘lov oynasini ko‘ring", text: "obuna, AI krediti yoki token narxi Stars’da ko‘rsatilishi kerak." },
    { name: "Balansni tekshiring", text: "qancha Stars borligini qanday ko‘rish balansni tekshirish qo‘llanmasida yozilgan." },
    { name: "Yetmasa, Stars oling", text: "Fragment’da Gram bilan yoki so‘mda @StarsPaymee_bot orqali." },
    { name: "Narxni hisoblang", text: `eng kam buyurtma 50 Stars. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan to‘lansa 1 ta Stars ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi.` },
    { name: "Faqat @username kiriting", text: "parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Buyurtma odatda bir necha soniyada avtomatik keladi." },
    { name: "Botdagi invoysni tasdiqlang", text: "Stars balansdan yechiladi, xizmatni bot beradi." },
  ],
  locales: {
    uz: {
      title: "Telegram bot bloklanishi: «faqat Stars» qoidasi va endi qanday to‘lanadi?",
      excerpt: "Hech narsa sotmaydigan oddiy botlarga xavf yo‘q: tekshiruv raqamli xizmatni Stars’siz sotayotganlarga qaratilgan. Ichida Telegram xabari va Durov posti tahlili, to‘lov qadamlari va bot egasi uchun reja bor.",
      metaTitle: "Telegram bot bloklanishi: «faqat Stars» qoidasi",
      metaDescription: "Hech narsa sotmaydigan oddiy botlarga xavf yo‘q: tekshiruv raqamli xizmatni Stars’siz sotayotganlarga qaratilgan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Блокировка ботов в Telegram: правило «только Stars» и как теперь платить",
      excerpt: "Ботам, которые ничего не продают, ничего не грозит: проверка касается тех, кто продаёт цифровые услуги в обход Stars. Внутри — разбор сообщения Telegram и поста Дурова, шаги оплаты и план для владельца бота.",
      metaTitle: "Блокировка ботов в Telegram",
      metaDescription: "Ботам, которые ничего не продают, ничего не грозит: проверка касается тех, кто продаёт цифровые услуги в обход Stars.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram bot blocking: the Stars-only rule and how you pay now",
      excerpt: "Bots that sell nothing are not at risk: the review targets digital services sold without Stars. We cover the Telegram notice, Durov’s post, how to pay now and what bot owners should do.",
      metaTitle: "Telegram bot blocking: the Stars-only rule",
      metaDescription: "Bots that sell nothing are not at risk: the review targets digital services sold without Stars. We cover the Telegram notice, Durov’s post, how to pay now and…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
