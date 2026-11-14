import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "plush-pepe-kit-xaridi-narx-oshadimi";

/**
 * Plush Pepe narxi oshadimi: «kit qaytdi» postidan keyin hozir olish kerakmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-14): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanalda «yirik kit qaytdi, Plush Pepe sotib olinyapti» degan postni ko'rgan va NFT sovg'ani so'mda olishni o'ylayotgan Telegram foydalanuvchisi «plush pepe narxi oshadimi» deb qidiradi: u signal nimani anglatishini va hozir xarid qilish to'g'ri-noto'g'riligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-14):
 *   https://telegram.org/faq
 *   https://telegram.org/blog/gift-marketplace-and-more
 *   https://core.telegram.org/api/gifts
 *   https://fragment.com/about
 *   https://fragment.com/gifts/plushpepe
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Buni oldindan bilib bo‘lmaydi: rasmiy manbalarda sovg‘a narxi bo‘yicha bashorat yo‘q. «Yirik kit qaytdi» posti, nari borsa, kimdir sotib olayotgan bo‘lishi mumkinligini bildiradi. Narx o‘sishini u isbotlamaydi. Har bir Plush Pepe nusxasi o‘z atributlariga qarab baholanadi. Shuning uchun xariddan oldin sotuvdagi narxlarni va oxirgi bitimlarni o‘zingiz solishtiring.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kanaldagi-kit-qaytdi-xabariga-qanchalik", label: "Kanaldagi «kit qaytdi» xabariga qanchalik ishonish mumkin?" },
          { href: "#bir-plush-pepe-boshqasidan-nega", label: "Bir Plush Pepe boshqasidan nega qimmatroq turadi?" },
          { href: "#fragmentdagi-sotuv-yozuvlarini-qanday-oqish", label: "Fragment’dagi sotuv yozuvlarini qanday o‘qish kerak?" },
          { href: "#katta-xaridor-bozorga-kirsa-narx", label: "Katta xaridor bozorga kirsa, narx bilan nima bo‘lishi mumkin?" },
          { href: "#xarid-qilishdan-oldin-signalni-ozingiz", label: "Xarid qilishdan oldin signalni o‘zingiz qanday sinab ko‘rasiz?" },
          { href: "#qayta-sotish-rejasi-bolsa-qaysi", label: "Qayta sotish rejasi bo‘lsa, qaysi xarajat va cheklovlarni hisoblash kerak?" },
          { href: "#hozir-olish-kimga-maqul-kimga", label: "Hozir olish kimga ma’qul, kimga emas?" },
          { href: "#plush-pepe-yoki-boshqa-nft", label: "Plush Pepe yoki boshqa NFT sovg‘ani so‘mda qanday olasiz?" },
          { href: "#shov-shuv-kunlarida-qaysi-aldovlarga", label: "Shov-shuv kunlarida qaysi aldovlarga duch kelasiz?" },
        ]}
      />
      <h2 id="kanaldagi-kit-qaytdi-xabariga-qanchalik">Kanaldagi «kit qaytdi» xabariga qanchalik ishonish mumkin?</h2>
      <p>Bunday xabar odatda oddiy Telegram kanalida chiqadi va rasmiy manba hisoblanmaydi. Postning oxiriga e’tibor bering: ko‘pincha u yerda muallifning boti yoki xizmati reklama qilinadi. Demak, muallif sovg‘alarga qiziqish oshishidan manfaatdor bo‘lishi mumkin. Bu postni yolg‘onga chiqarmaydi, lekin uni xolis tahlil deb ham bo‘lmaydi.</p>
      <p>Postda aytilgan aniq gaplar ham bu maqolada tasdiqlanmagan. Masalan, ma’lum bir kolleksioner o‘nlab Plush Pepe va Heart Locket olgani yoki «xitoylik kitlar» xaridni boshlagani. Skrinshot ham kam narsani ko‘rsatadi: u qachon olingani va sovg‘alar hozir kimda ekani noma’lum.</p>
      <p><a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>, <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> va ton.org sahifalarida sovg‘alar qimmatlashishi haqida birorta ham bashorat yo‘q. «Giftlarda o‘sish boshlanyaptimi?» degan savolga rasmiy javob topilmaydi.</p>
      <p>Postni dalil deb emas, tekshirib ko‘rish kerak bo‘lgan taxmin deb qabul qiling. Uni bozor ma’lumotlari bilan solishtirmaguningizcha, xarid qilishga sabab qilmang.</p>
      <h2 id="bir-plush-pepe-boshqasidan-nega">Bir Plush Pepe boshqasidan nega qimmatroq turadi?</h2>
      <p>Plush Pepe — kolleksion sovg‘a. Telegram tushuntirishicha, har bir kolleksion nusxaning ko‘rinishi takrorlanmaydi. Unda Telegram rassomlari chizgan model, fon va belgi hamda tartib raqami bor. Ba’zi birikmalar boshqalaridan noyobroq (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Shuning uchun «Plush Pepe narxi» degan yagona raqam yo‘q. Bitta kolleksiyaning ichida ham narx katta farq qilishi mumkin. Ko‘p uchraydigan model oddiy fonda bo‘lsa bir narxda, kam uchraydigan birikma esa ancha qimmatroq sotiladi. Atributlar narxga qanday ta’sir qilishini <Link href="/blog/telegram-gift-price">bir xil gift nega ikki xil narxda turishi</Link> haqidagi maqolada o‘qing.</p>
      <p>Narxni foydalanuvchilarning o‘zaro savdosi belgilaydi: sotuvchi narxni o‘zi qo‘yadi, xaridor esa rozi bo‘ladi yoki bo‘lmaydi. Telegram 2025-yil 8-mayda kolleksion sovg‘alar bozorini e’lon qilgan. U yerda boshqa foydalanuvchilarning noyob sovg‘alari Stars bilan sotib olinadi (<a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</p>
      <p>Sovg‘a kartasidagi «Value» maydoni sovg‘aning taxminiy qayta sotish narxini ko‘rsatadi. Texnik hujjatga ko‘ra, sizga taklif kelganda ilova taklif summasi shu taxminiy qiymatga qanchalik yaqinligini ko‘rsatishi kerak (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). Lekin «Value» hech kimni o‘sha summani to‘lashga majbur qilmaydi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragmentdagi-sotuv-yozuvlarini-qanday-oqish">Fragment’dagi sotuv yozuvlarini qanday o‘qish kerak?</h2>
      <p>Fragment — foydalanuvchilar kolleksion buyumlarni o‘zaro sotadigan platforma. U ishlaydigan TON blokcheynini dastlab Telegram ishlab chiqqan (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment haqida</a>). <a href={"https://fragment.com/gifts/plushpepe"} target="_blank" rel="noopener noreferrer">Plush Pepe kolleksiyasi sahifasida</a> sotilgan nusxalar ko‘rinadi. Tekshirilgan paytda u yerda quyidagilar bor edi:</p>
      <CompareTable
        headers={["Nima", "Sana", "Raqam", "Izoh"]}
        rows={[
          ["Plush Pepe #1515 sotuvi", "2025-yil 18-avgust", "48 000", "Valyuta sahifada ko‘rsatilmagan"],
          ["Plush Pepe #1821 sotuvi", "Sahifada yilsiz «Feb 5»", "88 888", "Valyuta sahifada ko‘rsatilmagan"],
          ["Kolleksiyadagi nusxalar", "Tekshirilgan payt", "2 485 dona", "Vaqt o‘tishi bilan o‘zgarishi mumkin"],
        ]}
      />
      <p>Bu jadvalni o‘qishda uchta xato ko‘p uchraydi:</p>
      <ul>
        <li><b>Valyutani o‘zingiz qo‘shib qo‘yish.</b> Sahifada valyuta yozilmagan. Summani TON yoki Stars deb hisoblamang va dollarga aylantirmang.</li>
        <li><b>Ikki nuqtadan chiziq chizish.</b> #1515 va #1821 boshqa-boshqa nusxalar, atributlari ham har xil. 48 000 dan 88 888 ga o‘tishni «o‘sish» deb o‘qib bo‘lmaydi.</li>
        <li><b>O‘tgan bitimni va’da deb tushunish.</b> Sotuv yozuvi bitta xaridor bir paytda shuncha to‘lashga rozi bo‘lganini ko‘rsatadi, xolos.</li>
      </ul>
      <h2 id="katta-xaridor-bozorga-kirsa-narx">Katta xaridor bozorga kirsa, narx bilan nima bo‘lishi mumkin?</h2>
      <p>Yirik xaridorning ta’siri ikki tomonga ketishi mumkin. Qaysi biri bo‘lishini postdan bilib bo‘lmaydi.</p>
      <ul>
        <li><b>Narx ko‘tariladi.</b> Arzon nusxalar sotib olinsa, sotuvda qimmatroqlari qoladi. Bu yangi sotuvchilar chiqquncha davom etadi.</li>
        <li><b>Narx tushadi.</b> Ko‘p nusxasi bor ega ularni bir vaqtda sotuvga qo‘ysa, narx pasayadi. «Kit qaytdi» deb ko‘rsatilgan faollik sotuvga tayyorlanish ham bo‘lishi mumkin.</li>
        <li><b>To‘lqin keladi va qaytadi.</b> Bir xil post o‘nlab kanalda tarqalsa, ko‘p odam bir kunda bozorga kiradi. Kech qolgan xaridor eng yuqori narxda olib, keyin arzonroqqa sotishga majbur bo‘lishi mumkin.</li>
        <li><b>Hech narsa o‘zgarmaydi.</b> Post keng tarqalmasa, bozor uni sezmasligi ham mumkin.</li>
      </ul>
      <p>Plush Pepe’ning hozirgi eng past narxi (floor) va sotuvdagi nusxalar soni bu maqolada tasdiqlanmagan. Ularni xarid kuni bozorning o‘zida ko‘ring. Sovg‘aga pul tikishning umumiy xavflari haqida: <Link href="/blog/telegram-nft-investitsiya">Telegram NFT investitsiya qilish mumkinmi</Link>.</p>
      <h2 id="xarid-qilishdan-oldin-signalni-ozingiz">Xarid qilishdan oldin signalni o‘zingiz qanday sinab ko‘rasiz?</h2>
      <p>Tekshiruv bir necha kun oladi, lekin shoshilib xarid qilishdan asraydi.</p>
      <Steps>
        <Step title={"Bozordagi narxlarni yozib oling"}>Telegram’dagi sovg‘a bozorida Plush Pepe’ni toping, sotuvdagi nusxalarning narxlarini ko‘rib chiqing. Eng pasti va o‘rtachasini qog‘ozga yozing.</Step>
        <Step title={"Bitimlar sanasini ko‘ring"}>Fragment’dagi kolleksiya sahifasida «Sold» yozuvlariga qarang. Post chiqqandan keyin sotuvlar rostdan ko‘payganmi?</Step>
        <Step title={"O‘xshash nusxa bilan solishtiring"}>siz ko‘zlagan nusxaning modeli, foni va belgisi yaqinda sotilganlarnikiga yaqinmi? Noyob nusxani oddiysi bilan taqqoslasangiz, xulosa noto‘g‘ri chiqadi.</Step>
        <Step title={"«Value» bilan taqqoslang"}>so‘ralgan narx taxminiy qiymatdan qanchalik uzoq? Farq juda katta bo‘lsa, boshqa nusxa qidiring.</Step>
        <Step title={"Nusxa tarixini tekshiring"}>havolasini, hozirgi egasini va blokcheyndagi izini ko‘ring. Batafsil: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini xariddan oldin tekshirish</Link>.</Step>
        <Step title={"Bir necha kun kuzating"}>yozib olgan raqamlaringizni har kuni yangilang. Narx sakrab, keyin oldingi joyiga qaytdimi?</Step>
      </Steps>
      <p>Narx bir necha kun bir joyda tursa va sotuvlar davom etsa, signal hech bo‘lmasa quruq gap emas. Agar narx sakrab, keyin tushsa, siz o‘tkinchi to‘lqinni ko‘rgansiz.</p>
      <h2 id="qayta-sotish-rejasi-bolsa-qaysi">Qayta sotish rejasi bo‘lsa, qaysi xarajat va cheklovlarni hisoblash kerak?</h2>
      <p>Qimmatlashadi deb olayotgan bo‘lsangiz, keyin qanday sotishingizni ham oldindan rejalang.</p>
      <CompareTable
        headers={["Qayerda", "Qanday sotiladi", "Xarajat va cheklov"]}
        rows={[
          ["Telegram ichidagi bozor", "Profilda sovg‘ani ochib «Sell»ni bosasiz va narxni Stars’da qo‘yasiz. Sovg‘aga «Sale» belgisi chiqadi, «Unlist» bilan sotuvni bekor qilasiz", "Sotuvchi narxning Telegram sozlamasiga bog‘liq qismini oladi. Foizi hujjatda raqam bilan yozilmagan"],
          ["Fragment", "Kolleksion buyumlar foydalanuvchilar o‘rtasida sotiladi. Sovg‘ani TON blokcheyniga chiqarish tartibini Fragment’da tekshiring", "Har sotuvdan 5% platforma to‘lovi olinadi"],
          ["Taklif orqali", "Xaridor taklif yuboradi, siz qabul qilasiz yoki rad etasiz", "Xaridorning to‘lovi band qilinadi. Rad etilsa yoki muddati o‘tsa, unga avtomatik qaytadi"],
        ]}
      />
      <p>Yana uchta narsa:</p>
      <ul>
        <li>5% to‘lov faqat Fragment’ga tegishli. Bu raqamni Telegram ichidagi bozorga qo‘llamang.</li>
        <li>Ba’zi sovg‘alarni sotuvga qo‘yish va blokcheynga chiqarish faqat belgilangan sanadan keyin mumkin bo‘ladi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). Xarid qilgan kuningiz sota olmasligingiz mumkin.</li>
        <li>StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Qayta sotish faqat bozorlar orqali bo‘ladi: <Link href="/blog/telegram-gift-sotish">Telegram Gifts sotish qo‘llanmasi</Link>.</li>
      </ul>
      <h2 id="hozir-olish-kimga-maqul-kimga">Hozir olish kimga ma’qul, kimga emas?</h2>
      <CompareTable
        headers={["Maqsadingiz", "Mosmi", "Nimaga qarash kerak"]}
        rows={[
          ["Kolleksiya yig‘ish yoki profilni bezash", "Mos", "Sovg‘a profildagi «Gifts» bo‘limida ko‘rinadi. O‘zingizga yoqqan atributni tanlang"],
          ["Yaqin odamga sovg‘a qilish", "Mos", "Kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazish mumkin"],
          ["Bir necha kunda qayta sotib foyda olish", "Xavfli", "Narx bashorati yo‘q, sotuvga qo‘yish sanasi cheklangan bo‘lishi mumkin"],
          ["Oxirgi pul yoki qarz bilan xarid", "Mos emas", "Narx tushsa, zararni qoplash qiyin"],
        ]}
      />
      <p>Plush Pepe’ga faqat butunlay yo‘qotsangiz ham qiynalmaydigan summani ajrating. Maqsadingiz faqat profilni bezash bo‘lsa, boshqa kolleksiyalarni ham ko‘rib chiqing: ular orasida sizga yoqadigan va narxi boshqacha nusxalar bo‘lishi mumkin.</p>
      <h2 id="plush-pepe-yoki-boshqa-nft">Plush Pepe yoki boshqa NFT sovg‘ani so‘mda qanday olasiz?</h2>
      <p>Ikki yo‘l bor: Telegram bozorida Stars bilan sotib olish yoki @StarsPaymee_bot’dagi NFT Market’dan tayyor kolleksion sovg‘ani so‘mda olish. Botdagi tartib:</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>ga kirib, NFT Market bo‘limini tanlang. Bo‘lim haqida: <Link href="/blog/starspaymee-nft-market">NFT Market qanday ishlaydi</Link>.</Step>
        <Step title={"Nusxani tanlang"}>atributlari va narxini yuqoridagi tekshiruv natijalari bilan solishtiring. Aynan Plush Pepe sotuvda bo‘lmasligi mumkin, borligini botda tekshiring.</Step>
        <Step title={"@username kiriting"}>sovg‘a qaysi akkauntga borishini ko‘rsatasiz. Parol yoki SMS kod so‘ralmaydi, kripto hamyon ham kerak emas.</Step>
        <Step title={"So‘mda to‘lang"}>Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi orqali. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</Step>
      </Steps>
      <p>Sovg‘ani Telegram bozoridan o‘zingiz olmoqchi bo‘lsangiz, avval Stars kerak. Karta o‘tkazmasi yoki bot balansidan to‘lasangiz, 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")} turadi. Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma — 50 Stars. Qancha kerakligini tanlagan nusxangiz narxiga qarab hisoblang. Batafsil: <Link href="/stars">Stars sahifasi</Link>.</p>
      <p>Xariddan keyin sovg‘ani TON blokcheynida NFT’ga aylantirish mumkin. Blokcheynga chiqarilgan sovg‘a Telegram akkauntingiz o‘chirilsa ham sizda qoladi (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <h2 id="shov-shuv-kunlarida-qaysi-aldovlarga">Shov-shuv kunlarida qaysi aldovlarga duch kelasiz?</h2>
      <p>Post tarqalgan kunlari firibgarlar ham ko‘payadi. Quyidagilardan birini ko‘rsangiz, to‘xtang:</p>
      <ul>
        <li><b>«Narx ko‘tarilmasdan sizga arzonroq beraman».</b> Odam oldindan kartasiga pul tashlashni so‘raydi. Notanish sotuvchiga to‘g‘ridan-to‘g‘ri pul o‘tkazmang: Telegram bozorida to‘lov ilovaning o‘zida, Stars bilan bo‘ladi.</li>
        <li><b>Bozorga o‘xshatilgan sahifa.</b> Havola sizni hamyon ulashga yoki zaxira so‘zlarini kiritishga undaydi. Havolani qanday tekshirish: <Link href="/blog/telegram-gift-havolasini-tekshirish">Telegram gift havolasini tekshirish</Link>.</li>
        <li><b>Rasmdagi «sotildi» summasi.</b> Skrinshotni tahrirlash oson. Bitimni Fragment’dagi kolleksiya sahifasidan o‘zingiz toping.</li>
        <li><b>«Ertaga ikki barobar bo‘ladi» degan va’da.</b> Rasmiy manbalarda bunday bashorat yo‘q. Bunday va’dadan sotuvchi yoki reklama beruvchi foyda ko‘radi.</li>
      </ul>
      <Notice label={"Muhim"}>StarsPaymee buyurtma uchun faqat @username so‘raydi. Parol, SMS kod yoki hamyon zaxira so‘zlarini so‘ragan har qanday odam — firibgar.</Notice>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/gifts/plushpepe", label: "Plush Pepes" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Post muallifi aytgan kolleksioner rostdan o‘nlab Plush Pepe olganmi?", answer: "Bu gap kanal postidan olingan, rasmiy manbalarda esa tasdiq topilmadi. Rost bo‘lsa ham, bitta xaridorning harakati narx qayerga ketishini hal qilmaydi." },
  { question: "Kit bozorga kirgan bo‘lsa, narx necha kunda ko‘tariladi?", answer: "Bunga hech kim muddat bera olmaydi, chunki rasmiy bashorat yo‘q. Katta xarid narxni ko‘tarishi ham mumkin, keyingi ommaviy sotuv bilan uni tushirishi ham." },
  { question: "Plush Pepe hozir qanchadan sotilayotganini qayerdan bilaman?", answer: "Sotuvdagi nusxalar narxi Telegram ichidagi sovg‘a bozorida ko‘rinadi. Yakunlangan bitimlarni Fragment’dagi kolleksiya sahifasidagi «Sold» yozuvlaridan ko‘rasiz." },
  { question: "Olgan kunimoq qayta sotuvga qo‘ysam bo‘ladimi?", answer: "Har doim ham emas. Ayrim sovg‘alarni sotuvga qo‘yish va blokcheynga chiqarish faqat belgilangan sanadan keyin ochiladi, buni xariddan oldin aniqlang." },
  { question: "So‘mga olib, Stars’ga sotsam, pulimni qaytara olamanmi?", answer: "Bunga kafolat yo‘q: sotuv narxi xarid narxidan past chiqishi, ustiga komissiya ham ushlanishi mumkin. Qo‘lingizga tushgan Stars’ni StarsPaymee orqali so‘mga aylantirib bo‘lmaydi." },
  { question: "Sovg‘amni StarsPaymee’ning o‘ziga sotsam bo‘ladimi?", answer: "Yo‘q, xizmat foydalanuvchilardan sovg‘a ham, Stars ham sotib olmaydi. Buning uchun Telegram ichidagi bozor yoki Fragment kerak." },
  { question: "Botdan NFT sovg‘a olsam, kripto hamyon ochishga to‘g‘ri keladimi?", answer: "NFT Market’dan xarid qilish uchun @username yetadi, hamyon so‘ralmaydi. Hamyon masalasi faqat sovg‘ani keyinchalik TON blokcheyniga chiqarmoqchi bo‘lsangiz paydo bo‘ladi." },
  { question: "«Value»da yozilgan summa — sovg‘amning aniq narximi?", answer: "Yo‘q, bu taxminiy qayta sotish narxi. Haqiqiy narx xaridor qancha to‘lashga rozi bo‘lishiga bog‘liq." },
  { question: "Ikki Plush Pepe orasidagi katta narx farqi nimadan?", answer: "Nusxalarning modeli, foni, belgisi va raqami har xil bo‘ladi, ayrim birikmalar esa kam uchraydi. Kam uchraydigan birikma uchun xaridorlar odatda ko‘proq to‘laydi." },
  { question: "Kanaldagi «giftlar qimmatlayapti» degan postdan keyin nima qilay?", answer: "Darhol sotib olmang: bir necha kun narxlar va bitimlarni kuzating. Postda muallifning boti reklama qilinsa, u sovg‘alarga qiziqish oshishidan manfaatdor ekanini ham hisobga oling." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Заранее этого не знает никто. В официальных источниках прогнозов цен на подарки нет. Пост «вернулся крупный кит» в лучшем случае говорит, что кто-то, возможно, скупает подарки. Рост цены он не доказывает. Каждый экземпляр Plush Pepe оценивается по своим атрибутам. Поэтому перед покупкой сами сравните цены на продаже и последние сделки.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kanaldagi-kit-qaytdi-xabariga-qanchalik", label: "Насколько можно верить посту «кит вернулся»?" },
          { href: "#bir-plush-pepe-boshqasidan-nega", label: "Почему один Plush Pepe стоит дороже другого?" },
          { href: "#fragmentdagi-sotuv-yozuvlarini-qanday-oqish", label: "Как читать записи о продажах на Fragment?" },
          { href: "#katta-xaridor-bozorga-kirsa-narx", label: "Что будет с ценой, если на рынок зайдёт крупный покупатель?" },
          { href: "#xarid-qilishdan-oldin-signalni-ozingiz", label: "Как самому проверить сигнал перед покупкой?" },
          { href: "#qayta-sotish-rejasi-bolsa-qaysi", label: "Какие расходы и ограничения учесть, если планируете перепродажу?" },
          { href: "#hozir-olish-kimga-maqul-kimga", label: "Кому стоит покупать сейчас, а кому нет?" },
          { href: "#plush-pepe-yoki-boshqa-nft", label: "Как купить Plush Pepe или другой NFT-подарок за сумы?" },
          { href: "#shov-shuv-kunlarida-qaysi-aldovlarga", label: "С какими уловками вы столкнётесь в дни ажиотажа?" },
        ]}
      />
      <h2 id="kanaldagi-kit-qaytdi-xabariga-qanchalik">Насколько можно верить посту «кит вернулся»?</h2>
      <p>Такие новости обычно выходят в обычных Telegram-каналах, а не в официальных источниках. Посмотрите на конец поста: часто там рекламируют бота или сервис автора. Значит, автору может быть выгоден рост интереса к подаркам. Пост от этого не становится ложью, но и непредвзятым анализом его назвать нельзя.</p>
      <p>Конкретные утверждения из таких постов здесь тоже не подтверждены. Например, что некий коллекционер купил десятки Plush Pepe и Heart Locket или что за покупки взялись «китайские киты». Скриншот тоже мало что доказывает: неизвестно, когда его сделали и у кого подарки сейчас.</p>
      <p>На страницах <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>, <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> и ton.org нет ни одного прогноза о подорожании подарков. Официального ответа на вопрос «начинается ли рост гифтов?» не найти.</p>
      <p>Считайте пост не доказательством, а предположением, которое нужно проверить. Пока не сверили его с данными рынка, не делайте его поводом для покупки.</p>
      <h2 id="bir-plush-pepe-boshqasidan-nega">Почему один Plush Pepe стоит дороже другого?</h2>
      <p>Plush Pepe — коллекционный подарок. По объяснению Telegram, внешний вид у каждого коллекционного экземпляра свой. У него есть модель, фон и символ, нарисованные художниками Telegram, а ещё порядковый номер. Некоторые сочетания встречаются реже других (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Поэтому единой «цены Plush Pepe» нет. Даже внутри одной коллекции цены сильно различаются. Частая модель на обычном фоне продаётся по одной цене, редкое сочетание — заметно дороже. Как атрибуты влияют на цену, читайте в статье о том, <Link href="/blog/telegram-gift-price">почему одинаковый гифт стоит по-разному</Link>.</p>
      <p>Цену определяет торговля между самими пользователями: продавец назначает цену, покупатель соглашается или нет. 8 мая 2025 года Telegram объявил о запуске маркетплейса коллекционных подарков. Там редкие подарки других пользователей покупают за Stars (<a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</p>
      <p>Поле «Value» в карточке подарка показывает примерную цену перепродажи. По технической документации, когда вам приходит предложение, приложение должно показать, насколько сумма близка к этой оценке (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). Но платить именно столько «Value» никого не обязывает.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragmentdagi-sotuv-yozuvlarini-qanday-oqish">Как читать записи о продажах на Fragment?</h2>
      <p>Fragment — платформа, где пользователи продают друг другу коллекционные предметы. Блокчейн TON, на котором она работает, изначально разработал Telegram (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">о Fragment</a>). На <a href={"https://fragment.com/gifts/plushpepe"} target="_blank" rel="noopener noreferrer">странице коллекции Plush Pepe</a> видны проданные экземпляры. На момент проверки там было следующее:</p>
      <CompareTable
        headers={["Что", "Дата", "Число", "Примечание"]}
        rows={[
          ["Продажа Plush Pepe #1515", "18 августа 2025 года", "48 000", "Валюта на странице не указана"],
          ["Продажа Plush Pepe #1821", "«Feb 5» без года", "88 888", "Валюта на странице не указана"],
          ["Экземпляров в коллекции", "На момент проверки", "2 485 шт.", "Со временем может меняться"],
        ]}
      />
      <p>При чтении этой таблицы чаще всего ошибаются в трёх местах:</p>
      <ul>
        <li><b>Сами подставляют валюту.</b> На странице валюта не указана. Не считайте сумму в TON или Stars и не пересчитывайте её в доллары.</li>
        <li><b>Проводят линию через две точки.</b> #1515 и #1821 — разные экземпляры с разными атрибутами. Переход от 48 000 к 88 888 нельзя читать как «рост».</li>
        <li><b>Принимают прошлую сделку за обещание.</b> Запись о продаже показывает лишь то, что один покупатель в какой-то момент согласился заплатить столько.</li>
      </ul>
      <h2 id="katta-xaridor-bozorga-kirsa-narx">Что будет с ценой, если на рынок зайдёт крупный покупатель?</h2>
      <p>Влияние крупного покупателя может пойти в обе стороны. Из поста не понять, в какую.</p>
      <ul>
        <li><b>Цена растёт.</b> Если скупают дешёвые экземпляры, на продаже остаются дорогие. Так продолжается, пока не появятся новые продавцы.</li>
        <li><b>Цена падает.</b> Если владелец множества экземпляров выставит их разом, цена снизится. Активность, которую выдают за «возвращение кита», может оказаться подготовкой к продаже.</li>
        <li><b>Приходит волна и откатывается.</b> Когда один и тот же пост расходится по десяткам каналов, много людей заходит на рынок в один день. Опоздавший покупатель может купить на пике, а потом продать дешевле.</li>
        <li><b>Ничего не меняется.</b> Если пост не разойдётся широко, рынок может его просто не заметить.</li>
      </ul>
      <p>Текущая минимальная цена (floor) Plush Pepe и количество экземпляров на продаже в этой статье не подтверждены. Смотрите их на самом рынке в день покупки. Об общих рисках вложений в подарки — в статье <Link href="/blog/telegram-nft-investitsiya">можно ли инвестировать в NFT Telegram</Link>.</p>
      <h2 id="xarid-qilishdan-oldin-signalni-ozingiz">Как самому проверить сигнал перед покупкой?</h2>
      <p>Проверка займёт несколько дней, зато убережёт от спешной покупки.</p>
      <Steps>
        <Step title={"Запишите цены на рынке"}>найдите Plush Pepe на маркетплейсе подарков в Telegram и просмотрите цены экземпляров на продаже. Запишите минимальную и среднюю.</Step>
        <Step title={"Посмотрите даты сделок"}>на странице коллекции на Fragment изучите записи «Sold». Стало ли продаж действительно больше после выхода поста?</Step>
        <Step title={"Сравните с похожим экземпляром"}>близки ли модель, фон и символ присмотренного экземпляра к недавно проданным? Если сравнивать редкий экземпляр с обычным, вывод получится неверным.</Step>
        <Step title={"Сверьте с «Value»"}>насколько запрошенная цена далека от оценочной? Если разница очень большая, ищите другой экземпляр.</Step>
        <Step title={"Проверьте историю экземпляра"}>ссылку, текущего владельца и след в блокчейне. Подробно: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">как проверить историю NFT-подарка перед покупкой</Link>.</Step>
        <Step title={"Понаблюдайте несколько дней"}>обновляйте записанные цифры каждый день. Цена подпрыгнула и вернулась на прежний уровень?</Step>
      </Steps>
      <p>Если цена несколько дней держится на одном уровне, а продажи продолжаются, сигнал хотя бы не пустой. Если цена подскочила, а потом упала, вы видели мимолётную волну.</p>
      <h2 id="qayta-sotish-rejasi-bolsa-qaysi">Какие расходы и ограничения учесть, если планируете перепродажу?</h2>
      <p>Если покупаете в расчёте на подорожание, заранее продумайте, как будете продавать.</p>
      <CompareTable
        headers={["Где", "Как продаётся", "Расходы и ограничения"]}
        rows={[
          ["Маркетплейс внутри Telegram", "Открываете подарок в профиле, нажимаете «Sell» и назначаете цену в Stars. На подарке появляется метка «Sale», отменить продажу можно кнопкой «Unlist»", "Продавец получает часть цены, которая зависит от настройки Telegram. Процент в документации числом не указан"],
          ["Fragment", "Коллекционные предметы продаются между пользователями. Порядок вывода подарка в блокчейн TON уточняйте на Fragment", "С каждой продажи берётся комиссия платформы 5%"],
          ["Через предложение", "Покупатель присылает предложение, вы принимаете или отклоняете", "Оплата покупателя резервируется. При отказе или истечении срока она автоматически возвращается"],
        ]}
      />
      <p>И ещё три момента:</p>
      <ul>
        <li>Комиссия 5% относится только к Fragment. Не переносите эту цифру на маркетплейс внутри Telegram.</li>
        <li>Некоторые подарки можно выставить на продажу и вывести в блокчейн только после определённой даты (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). Продать в день покупки может не получиться.</li>
        <li>StarsPaymee не покупает у пользователей ни Stars, ни подарки. Перепродажа возможна только через маркетплейсы: <Link href="/blog/telegram-gift-sotish">руководство по продаже Telegram Gifts</Link>.</li>
      </ul>
      <h2 id="hozir-olish-kimga-maqul-kimga">Кому стоит покупать сейчас, а кому нет?</h2>
      <CompareTable
        headers={["Ваша цель", "Подходит ли", "На что смотреть"]}
        rows={[
          ["Собирать коллекцию или украсить профиль", "Подходит", "Подарок виден во вкладке «Gifts» профиля. Выбирайте атрибуты, которые нравятся вам"],
          ["Подарить близкому человеку", "Подходит", "Коллекционный подарок можно передать другому пользователю"],
          ["Перепродать с прибылью через пару дней", "Рискованно", "Прогнозов цены нет, дата выставления на продажу может быть ограничена"],
          ["Покупка на последние или заёмные деньги", "Не подходит", "Если цена упадёт, убыток будет трудно покрыть"],
        ]}
      />
      <p>Выделяйте на Plush Pepe только ту сумму, потерю которой переживёте спокойно. Если цель — просто украсить профиль, посмотрите и другие коллекции: там могут найтись экземпляры, которые понравятся вам, по другой цене.</p>
      <h2 id="plush-pepe-yoki-boshqa-nft">Как купить Plush Pepe или другой NFT-подарок за сумы?</h2>
      <p>Есть два пути: купить на маркетплейсе Telegram за Stars или взять готовый коллекционный подарок за сумы в NFT Market в @StarsPaymee_bot. Порядок в боте:</p>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> и выберите раздел NFT Market. Подробнее о разделе: <Link href="/blog/starspaymee-nft-market">как работает NFT Market</Link>.</Step>
        <Step title={"Выберите экземпляр"}>сравните его атрибуты и цену с результатами проверки выше. Именно Plush Pepe может не оказаться в продаже — наличие уточняйте в боте.</Step>
        <Step title={"Укажите @username"}>так вы указываете, на какой аккаунт придёт подарок. Пароль и SMS-код не нужны, криптокошелёк тоже.</Step>
        <Step title={"Оплатите в сумах"}>через Click, Payme, Uzum, Paynet, переводом на карту UzCard/HUMO или с баланса бота. Заказ обычно доставляется автоматически за несколько секунд.</Step>
      </Steps>
      <p>Если хотите купить подарок на маркетплейсе Telegram сами, сначала понадобятся Stars. При переводе на карту или оплате с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}. Через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Сколько нужно, считайте по цене выбранного экземпляра. Подробнее: <Link href="/stars">страница Stars</Link>.</p>
      <p>После покупки подарок можно превратить в NFT в блокчейне TON. Выведенный в блокчейн подарок остаётся у вас, даже если вы удалите аккаунт Telegram (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <h2 id="shov-shuv-kunlarida-qaysi-aldovlarga">С какими уловками вы столкнётесь в дни ажиотажа?</h2>
      <p>Когда пост расходится по каналам, активизируются и мошенники. Увидели что-то из этого — остановитесь:</p>
      <ul>
        <li><b>«Отдам дешевле, пока цена не выросла».</b> Человек просит заранее перевести деньги ему на карту. Не переводите деньги незнакомому продавцу напрямую: на маркетплейсе Telegram оплата проходит в самом приложении, в Stars.</li>
        <li><b>Страница под видом маркетплейса.</b> Ссылка подталкивает подключить кошелёк или ввести сид-фразу. Как проверить ссылку: <Link href="/blog/telegram-gift-havolasini-tekshirish">проверка ссылки на Telegram-подарок</Link>.</li>
        <li><b>Сумма «продано» на картинке.</b> Скриншот легко отредактировать. Найдите сделку сами на странице коллекции на Fragment.</li>
        <li><b>Обещание «завтра будет вдвое дороже».</b> В официальных источниках таких прогнозов нет. Выгоду от таких обещаний получает продавец или рекламодатель.</li>
      </ul>
      <Notice label={"Важно"}>StarsPaymee для заказа просит только @username. Любой, кто спрашивает пароль, SMS-код или сид-фразу кошелька, — мошенник.</Notice>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/gifts/plushpepe", label: "Plush Pepes" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Тот коллекционер из поста правда купил десятки Plush Pepe?", answer: "Это утверждение взято из поста в канале, в официальных источниках подтверждения нет. Даже если это правда, действия одного покупателя не решают, куда пойдёт цена." },
  { question: "Если кит зашёл на рынок, через сколько дней вырастет цена?", answer: "Сроков никто назвать не может: официальных прогнозов нет. Крупная покупка может поднять цену, а последующая массовая распродажа — обвалить её." },
  { question: "Где узнать, почём сейчас продаётся Plush Pepe?", answer: "Цены выставленных экземпляров видны на маркетплейсе подарков внутри Telegram. Завершённые сделки смотрите в записях «Sold» на странице коллекции на Fragment." },
  { question: "Можно выставить подарок на продажу в день покупки?", answer: "Не всегда. Для некоторых подарков продажа и вывод в блокчейн открываются только после определённой даты — выясните это до покупки." },
  { question: "Если куплю за сумы и продам за Stars, верну свои деньги?", answer: "Гарантии нет: цена продажи может оказаться ниже цены покупки, а сверху ещё удержат комиссию. Вырученные Stars через StarsPaymee в сумы не обменять." },
  { question: "Можно продать подарок самому StarsPaymee?", answer: "Нет, сервис не покупает у пользователей ни подарки, ни Stars. Для продажи нужен маркетплейс внутри Telegram или Fragment." },
  { question: "Если куплю NFT-подарок в боте, придётся заводить криптокошелёк?", answer: "Для покупки в NFT Market достаточно @username, кошелёк не запрашивается. Он понадобится, только если позже захотите вывести подарок в блокчейн TON." },
  { question: "Сумма в поле «Value» — это точная цена моего подарка?", answer: "Нет, это примерная цена перепродажи. Реальная цена зависит от того, сколько готов заплатить покупатель." },
  { question: "Откуда такая разница в цене между двумя Plush Pepe?", answer: "У экземпляров разные модель, фон, символ и номер, а некоторые сочетания встречаются редко. За редкое сочетание покупатели обычно платят больше." },
  { question: "Что делать после поста в канале «гифты дорожают»?", answer: "Не покупайте сразу: несколько дней понаблюдайте за ценами и сделками. Если в посте рекламируется бот автора, учтите, что ему выгоден рост интереса к подаркам." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You can’t know in advance. Official sources make no forecasts about gift prices. At most, a “big whale is back” post suggests that someone may be buying. It doesn’t prove prices will rise. Each Plush Pepe is valued on its own attributes, so compare current listings and recent sales yourself before you buy.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kanaldagi-kit-qaytdi-xabariga-qanchalik", label: "How much can you trust a channel’s “the whale is back” post?" },
          { href: "#bir-plush-pepe-boshqasidan-nega", label: "Why does one Plush Pepe cost more than another?" },
          { href: "#fragmentdagi-sotuv-yozuvlarini-qanday-oqish", label: "How do you read Fragment’s sales records?" },
          { href: "#katta-xaridor-bozorga-kirsa-narx", label: "What can happen to prices when a big buyer enters the market?" },
          { href: "#xarid-qilishdan-oldin-signalni-ozingiz", label: "How can you test the signal yourself before buying?" },
          { href: "#qayta-sotish-rejasi-bolsa-qaysi", label: "Planning to resell? Which costs and limits should you count?" },
          { href: "#hozir-olish-kimga-maqul-kimga", label: "Who should buy now, and who shouldn’t?" },
          { href: "#plush-pepe-yoki-boshqa-nft", label: "How do you buy a Plush Pepe or another NFT gift in so‘m?" },
          { href: "#shov-shuv-kunlarida-qaysi-aldovlarga", label: "What scams show up on hype days?" },
        ]}
      />
      <h2 id="kanaldagi-kit-qaytdi-xabariga-qanchalik">How much can you trust a channel’s “the whale is back” post?</h2>
      <p>Posts like this usually come from an ordinary Telegram channel, not an official source. Look at the end of the post. Often it promotes the author’s own bot or service, so the author may benefit if people get more interested in gifts. That doesn’t make the post false. It does mean you shouldn’t treat it as neutral analysis.</p>
      <p>The specific claims in these posts aren’t confirmed in this article either. Examples include a particular collector buying dozens of Plush Pepes and Heart Lockets, or “Chinese whales” starting to buy. A screenshot doesn’t prove much on its own. You can’t tell when it was taken or who owns those gifts now.</p>
      <p>The <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>, <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> and ton.org make no predictions about gifts going up in value. If you’re asking “Is a gift rally starting?”, no official source will answer that.</p>
      <p>Treat the post as a guess to check, not as evidence. Don’t let it drive a purchase until you’ve compared it with real market data.</p>
      <h2 id="bir-plush-pepe-boshqasidan-nega">Why does one Plush Pepe cost more than another?</h2>
      <p>Plush Pepe is a collectible gift. Telegram says every collectible gets its own look: a model, a backdrop and a symbol drawn by Telegram artists, plus a number. Some combinations are rarer than others (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>So there’s no single “Plush Pepe price.” Prices can vary widely inside the same collection. A common model on a plain backdrop sells at one level, and a rare combination can sell for much more. To see how attributes affect price, read <Link href="/blog/telegram-gift-price">why the same gift can have two different prices</Link>.</p>
      <p>Prices come from trading between users. The seller sets a price, and buyers either take it or don’t. On May 8, 2025, Telegram announced a marketplace for collectible gifts, where you can buy rare gifts from other users with Stars (<a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</p>
      <p>The “Value” field on a gift card shows its approximate resale price. According to the technical docs, when you receive an offer, the app should show how close the offer is to that estimated value (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). Still, “Value” doesn’t oblige anyone to pay that amount.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragmentdagi-sotuv-yozuvlarini-qanday-oqish">How do you read Fragment’s sales records?</h2>
      <p>Fragment is a platform where users trade collectibles with each other. It runs on TON, a blockchain technology Telegram originally developed (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">About Fragment</a>). The <a href={"https://fragment.com/gifts/plushpepe"} target="_blank" rel="noopener noreferrer">Plush Pepe collection page</a> lists sold items. Here’s what it showed when we checked:</p>
      <CompareTable
        headers={["What", "Date", "Figure", "Note"]}
        rows={[
          ["Sale of Plush Pepe #1515", "August 18, 2025", "48 000", "Currency not shown on the page"],
          ["Sale of Plush Pepe #1821", "“Feb 5” on the page, no year given", "88 888", "Currency not shown on the page"],
          ["Items in the collection", "At time of checking", "2 485", "May change over time"],
        ]}
      />
      <p>People often make three mistakes when reading this table:</p>
      <ul>
        <li><b>Filling in the currency yourself.</b> The page doesn’t say which currency these figures are in. Don’t assume they’re TON or Stars, and don’t convert them to dollars.</li>
        <li><b>Drawing a trend line through two points.</b> #1515 and #1821 are different items with different attributes. Going from 48 000 to 88 888 isn’t “growth.”</li>
        <li><b>Taking a past sale as a promise.</b> A sale record shows that one buyer agreed to pay that much at one moment. That’s all it shows.</li>
      </ul>
      <h2 id="katta-xaridor-bozorga-kirsa-narx">What can happen to prices when a big buyer enters the market?</h2>
      <p>A large buyer can push prices either way, and the post can’t tell you which.</p>
      <ul>
        <li><b>Prices go up.</b> If the cheap items get bought, only pricier ones stay listed. That lasts until new sellers show up.</li>
        <li><b>Prices go down.</b> If someone holding many items lists them all at once, prices drop. The activity behind “the whale is back” could even be preparation to sell.</li>
        <li><b>A wave comes and goes.</b> When the same post spreads across dozens of channels, lots of people jump in on the same day. Latecomers can buy at the peak and then have to sell for less.</li>
        <li><b>Nothing changes.</b> If the post doesn’t spread widely, the market may not react at all.</li>
      </ul>
      <p>This article hasn’t confirmed Plush Pepe’s current floor price or how many items are listed. Check both in the market on the day you buy. For the general risks of putting money into gifts, read <Link href="/blog/telegram-nft-investitsiya">Can you invest in Telegram NFTs?</Link></p>
      <h2 id="xarid-qilishdan-oldin-signalni-ozingiz">How can you test the signal yourself before buying?</h2>
      <p>The check takes a few days, but it keeps you from buying in a rush.</p>
      <Steps>
        <Step title={"Note market prices"}>Find Plush Pepe in Telegram’s gift marketplace and look through the listed items. Write down the lowest price and a typical price.</Step>
        <Step title={"Check sale dates"}>Look at the “Sold” entries on Fragment’s collection page. Did sales actually pick up after the post came out?</Step>
        <Step title={"Compare like with like"}>Is the model, backdrop and symbol of the item you want close to recently sold ones? If you compare a rare item with a common one, you’ll reach the wrong conclusion.</Step>
        <Step title={"Compare with “Value”"}>How far is the asking price from the estimated value? If the gap is very large, look for another item.</Step>
        <Step title={"Check the item’s history"}>Look at its link, current owner and on-chain trail. Details: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">checking an NFT gift’s history before buying</Link>.</Step>
        <Step title={"Watch for a few days"}>Update your notes every day. Did the price jump and then slide back?</Step>
      </Steps>
      <p>If the price holds steady for several days while sales continue, the signal is at least more than empty talk. If the price spikes and then falls, you’ve watched a short-lived wave.</p>
      <h2 id="qayta-sotish-rejasi-bolsa-qaysi">Planning to resell? Which costs and limits should you count?</h2>
      <p>If you’re buying because you expect the price to rise, plan how you’ll sell before you buy.</p>
      <CompareTable
        headers={["Where", "How it sells", "Costs and limits"]}
        rows={[
          ["Telegram’s built-in marketplace", "Open the gift on your profile, tap “Sell” and set a price in Stars. The gift gets a “Sale” label. Tap “Unlist” to cancel", "The seller receives a share of the price that depends on a Telegram setting. The docs don’t give the percentage"],
          ["Fragment", "Users trade collectibles with each other. Check on Fragment how to move a gift to the TON blockchain", "5% platform fee on each sale"],
          ["Via an offer", "A buyer sends an offer, and you accept or decline", "The buyer’s payment is reserved. If you decline or the offer expires, it’s refunded to them automatically"],
        ]}
      />
      <p>Three more things to know:</p>
      <ul>
        <li>The 5% fee applies only to Fragment. Don’t apply that figure to Telegram’s built-in marketplace.</li>
        <li>Some gifts can only be listed for sale or moved to the blockchain after a set date (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API</a>). You may not be able to sell on the day you buy.</li>
        <li>StarsPaymee doesn’t buy Stars or gifts from users. You can only resell through marketplaces: <Link href="/blog/telegram-gift-sotish">how to sell Telegram Gifts</Link>.</li>
      </ul>
      <h2 id="hozir-olish-kimga-maqul-kimga">Who should buy now, and who shouldn’t?</h2>
      <CompareTable
        headers={["Your goal", "Good fit?", "What to look at"]}
        rows={[
          ["Collecting or decorating your profile", "Yes", "The gift shows in the “Gifts” tab of your profile. Pick attributes you like"],
          ["Giving it to someone close", "Yes", "A collectible gift can be transferred to another user"],
          ["Flipping it for profit in a few days", "Risky", "There’s no price forecast, and listing may be locked until a set date"],
          ["Buying with your last money or a loan", "No", "If the price falls, the loss is hard to recover"],
        ]}
      />
      <p>Only put into Plush Pepe an amount you could lose completely without hardship. If you only want to decorate your profile, look at other collections too. You may find items you like just as much at a different price.</p>
      <h2 id="plush-pepe-yoki-boshqa-nft">How do you buy a Plush Pepe or another NFT gift in so‘m?</h2>
      <p>You have two options: buy with Stars in Telegram’s marketplace, or get a ready collectible gift in Uzbek so‘m from the NFT Market in @StarsPaymee_bot. Here’s how the bot works:</p>
      <Steps>
        <Step title={"Open the bot"}>Go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> and choose the NFT Market section. More about it: <Link href="/blog/starspaymee-nft-market">how the NFT Market works</Link>.</Step>
        <Step title={"Pick an item"}>Compare its attributes and price with the results of your check above. Plush Pepe itself may not be listed, so check the bot to see what’s available.</Step>
        <Step title={"Enter the @username"}>This tells the bot which account gets the gift. You won’t be asked for a password or SMS code, and you don’t need a crypto wallet.</Step>
        <Step title={"Pay in so‘m"}>Use Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. Orders are usually delivered automatically within a few seconds.</Step>
      </Steps>
      <p>If you’d rather buy the gift yourself in Telegram’s marketplace, you’ll need Stars first. Paying by card transfer or from your bot balance, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")}. Through Click, Payme, Uzum or Paynet, it costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. Work out how many you need from the price of the item you picked. More on the <Link href="/stars">Stars page</Link>.</p>
      <p>After buying, you can turn the gift into an NFT on the TON blockchain. A gift moved to the blockchain stays yours even if you delete your Telegram account (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <h2 id="shov-shuv-kunlarida-qaysi-aldovlarga">What scams show up on hype days?</h2>
      <p>Scammers get busier while a post is spreading. Stop if you see any of these:</p>
      <ul>
        <li><b>“I’ll sell it to you cheaper before the price goes up.”</b> The person asks you to send money to their card first. Don’t pay unknown sellers directly. In Telegram’s marketplace, you pay with Stars inside the app.</li>
        <li><b>A page made to look like a marketplace.</b> The link pushes you to connect a wallet or enter your recovery phrase. How to check links: <Link href="/blog/telegram-gift-havolasini-tekshirish">checking a Telegram gift link</Link>.</li>
        <li><b>A “sold” price in a picture.</b> Screenshots are easy to edit. Find the sale yourself on Fragment’s collection page.</li>
        <li><b>“It’ll double tomorrow.”</b> Official sources make no such forecast. The seller or advertiser gains from that kind of promise.</li>
      </ul>
      <Notice label={"Important"}>StarsPaymee only asks for your @username to place an order. Anyone who asks for your password, SMS code or wallet recovery phrase is a scammer.</Notice>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/gifts/plushpepe", label: "Plush Pepes" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Did the collector mentioned in the post really buy dozens of Plush Pepes?", answer: "That claim comes from a channel post, and we found nothing in official sources to confirm it. Even if it’s true, one buyer can’t decide which way the price goes." },
  { question: "If a whale has entered the market, how many days until prices rise?", answer: "Nobody can give you a timeline, because there’s no official forecast. A big purchase can lift prices, and a later wave of selling can push them down." },
  { question: "Where can I see what Plush Pepes are selling for right now?", answer: "You can see current asking prices in Telegram’s built-in gift marketplace. For completed deals, check the “Sold” entries on the collection page on Fragment." },
  { question: "Can I list it for resale on the same day I buy it?", answer: "Not always. Listing some gifts for sale or moving them to the blockchain only opens after a set date, so check this before you buy." },
  { question: "If I buy in so‘m and sell for Stars, will I get my money back?", answer: "There’s no guarantee. The sale price may come in below what you paid, and a fee may also be taken. You can’t turn the Stars you receive back into so‘m through StarsPaymee." },
  { question: "Can I sell my gift to StarsPaymee?", answer: "No. The service doesn’t buy gifts or Stars from users. To sell, use Telegram’s built-in marketplace or Fragment." },
  { question: "Do I need a crypto wallet to buy an NFT gift from the bot?", answer: "No, a @username is enough to buy from the NFT Market. You’d only need a wallet if you later want to move the gift to the TON blockchain." },
  { question: "Is the amount in the “Value” field the exact price of my gift?", answer: "No, it’s an approximate resale price. The real price depends on what a buyer agrees to pay." },
  { question: "Why is there such a big price gap between two Plush Pepes?", answer: "Each one has a different model, backdrop, symbol and number, and some combinations are rare. Buyers usually pay more for rarer combinations." },
  { question: "A channel says “gifts are getting pricier.” What should I do?", answer: "Don’t buy straight away. Watch prices and completed sales for a few days. If the post promotes the author’s own bot, the author gains when interest in gifts goes up." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["plush pepe narxi oshadimi","plush pepe narxi","plush pepe sotib olish","plush pepe so'mda","telegram nft sovg'a narxi oshadimi","kit plush pepe xarid","plush pepe nft telegram","цена plush pepe","plush pepe telegram подарок цена","вырастет ли цена plush pepe","купить plush pepe","киты скупают plush pepe"],
  howToSteps: [
    { name: "Bozordagi narxlarni yozib oling", text: "Telegram’dagi sovg‘a bozorida Plush Pepe’ni toping, sotuvdagi nusxalarning narxlarini ko‘rib chiqing. Eng pasti va o‘rtachasini qog‘ozga yozing." },
    { name: "Bitimlar sanasini ko‘ring", text: "Fragment’dagi kolleksiya sahifasida «Sold» yozuvlariga qarang. Post chiqqandan keyin sotuvlar rostdan ko‘payganmi?" },
    { name: "O‘xshash nusxa bilan solishtiring", text: "siz ko‘zlagan nusxaning modeli, foni va belgisi yaqinda sotilganlarnikiga yaqinmi? Noyob nusxani oddiysi bilan taqqoslasangiz, xulosa noto‘g‘ri chiqadi." },
    { name: "«Value» bilan taqqoslang", text: "so‘ralgan narx taxminiy qiymatdan qanchalik uzoq? Farq juda katta bo‘lsa, boshqa nusxa qidiring." },
    { name: "Nusxa tarixini tekshiring", text: "havolasini, hozirgi egasini va blokcheyndagi izini ko‘ring. Batafsil: NFT sovg‘a tarixini xariddan oldin tekshirish." },
    { name: "Bir necha kun kuzating", text: "yozib olgan raqamlaringizni har kuni yangilang. Narx sakrab, keyin oldingi joyiga qaytdimi?" },
  ],
  locales: {
    uz: {
      title: "Plush Pepe narxi oshadimi: «kit qaytdi» postidan keyin hozir olish kerakmi?",
      excerpt: "Plush Pepe narxi oshishini hech kim kafolatlay olmaydi, «kit qaytdi» posti ham buni isbotlamaydi. Ichida Fragment sotuvlarini o‘qish, 6 qadamli tekshiruv va NFT sovg‘ani so‘mda olish tartibi bor.",
      metaTitle: "Plush Pepe narxi oshadimi",
      metaDescription: "Plush Pepe narxi oshishini hech kim kafolatlay olmaydi, «kit qaytdi» posti ham buni isbotlamaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Вырастет ли цена Plush Pepe: покупать ли после поста «кит вернулся»?",
      excerpt: "Рост цены Plush Pepe никто не гарантирует, и пост «кит вернулся» его не доказывает. Внутри: как читать продажи на Fragment, проверка в 6 шагов и покупка NFT-подарка за сумы.",
      metaTitle: "Вырастет ли цена Plush Pepe",
      metaDescription: "Рост цены Plush Pepe никто не гарантирует, и пост «кит вернулся» его не доказывает. Внутри: как читать продажи на Fragment, проверка в 6 шагов и покупка…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Will Plush Pepe prices rise after the “whale is back” post? Buy now or wait?",
      excerpt: "Nobody can promise Plush Pepe prices will rise, and a “whale is back” post doesn’t prove it. Here’s how to read Fragment sales, run a 6-step check and buy an NFT gift in Uzbek so‘m.",
      metaTitle: "Will Plush Pepe prices rise after the “whale is back” post?",
      metaDescription: "Nobody can promise Plush Pepe prices will rise, and a “whale is back” post doesn’t prove it. Here’s how to read Fragment sales, run a 6-step check and buy an…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
