import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-reyting-stars-sarfi-hisoblash";

/**
 * Stars bilan Telegram reytingi qanday oshadi: to‘ldirish, Premium va refund
 *
 * Avtoblogyoz yasagan maqola (2026-11-09): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Stars'ni so'mda sotib olib sarflaydigan o'zbek Telegram foydalanuvchisi «reyting qayta hisoblandi» degan xabarni ko'rib, «Telegram reytingi Stars bilan qanday oshadi» deb qidiradi. U balansni to'ldirish, Stars'ni sarflash, Premium xaridi va refund reytingga qanday yozilishini hamda kanaldagi xabar rostligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-09):
 *   https://telegram.org/blog/post-search-story-albums-and-more
 *   https://core.telegram.org/api/stars
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
  return <p>Rasmiy manbalarga ko‘ra, Telegram reytingi Stars’ni sarflaganda oshadi. Hisobga olinadigan amallar — sovg‘a xaridi, pullik xabar va Suggested Posts’ni moliyalashtirish. Stars xaridini qaytarish va sovg‘ani Stars’ga aylantirish reytingni tushiradi. Balansni so‘mda to‘ldirish yoki Premium olish reytingga yozilishi rasmiy matnda aytilmagan.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#balansni-toldirdim-lekin-reyting-qimirlamadi", label: "Balansni to‘ldirdim, lekin reyting qimirlamadi: nega?" },
          { href: "#xaridor-amallari-jadvali-qaysi-biri", label: "Xaridor amallari jadvali: qaysi biri hisobga olinadi?" },
          { href: "#bot-orqali-somda-sovga-yuborsam", label: "Bot orqali so‘mda sovg‘a yuborsam, reyting kimga yoziladi?" },
          { href: "#premiumni-somda-olish-reytingga-yoziladimi", label: "Premium’ni so‘mda olish reytingga yoziladimi?" },
          { href: "#xato-xarid-va-refund-reytingdan", label: "Xato xarid va refund: reytingdan nima ketadi?" },
          { href: "#olingan-sovgani-yulduzga-almashtirishdan-oldin", label: "Olingan sovg‘ani yulduzga almashtirishdan oldin nimani o‘ylash kerak?" },
          { href: "#reyting-qayta-hisoblandi-posti-tekshirish", label: "«Reyting qayta hisoblandi» posti: tekshirish tartibi" },
          { href: "#oz-reytingimni-qanday-kuzataman", label: "O‘z reytingimni qanday kuzataman?" },
          { href: "#reyting-kimga-foyda-beradi-va", label: "Reyting kimga foyda beradi va qayerda keraksiz?" },
          { href: "#starsni-somda-olish-reytingni-xatosiz", label: "Stars’ni so‘mda olish: reytingni xatosiz saqlash tartibi" },
        ]}
      />
      <h2 id="balansni-toldirdim-lekin-reyting-qimirlamadi">Balansni to‘ldirdim, lekin reyting qimirlamadi: nega?</h2>
      <p>Telegram profildagi reyting nishonini e’lon qilganda uni Stars bilan qilingan muvaffaqiyatli tranzaksiyalarning umumiy hajmiga bog‘lagan (<a href={"https://telegram.org/blog/post-search-story-albums-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). O‘sha e’londa reytingni ko‘taradigan uch amal aniq sanalgan: sovg‘a sotib olish, pullik xabar yuborish va Suggested Posts’ni Stars bilan moliyalashtirish.</p>
      <p>Balansni to‘ldirish bu ro‘yxatda yo‘q. Masalan, Dilnoza botdan 500 Stars oldi va ularni hali hech narsaga ishlatmadi. Rasmiy matnga tayansak, uning reytingi o‘zgarishini kutishga asos yo‘q. Yulduzlar hisobda turibdi, xolos.</p>
      <p>Shuning uchun «Stars olsam, reytingim shuncha ko‘tariladi» degan hisob ishonchsiz. Bir Star necha ball berishi ham e’lon qilinmagan. Tizimning umumiy ishlash tartibi <Link href="/blog/telegram-stars-qanday-ishlaydi">Stars qanday ishlashi haqidagi maqolada</Link> yozilgan.</p>
      <h2 id="xaridor-amallari-jadvali-qaysi-biri">Xaridor amallari jadvali: qaysi biri hisobga olinadi?</h2>
      <p>Jadvalda so‘mda Stars olib, keyin ularni ishlatadigan odamning odatiy amallari rasmiy manbalar bilan solishtirilgan.</p>
      <CompareTable
        headers={["Amal", "Reytingga ta’siri", "Qayerda aytilgan"]}
        rows={[
          ["Telegram ichida Stars bilan sovg‘a sotib olish", "Oshiradi", "Telegram blogi"],
          ["Pullik xabar (Paid Messages) yuborish", "Oshiradi", "Telegram blogi"],
          ["Suggested Posts’ni Stars bilan moliyalashtirish", "Oshiradi", "Telegram blogi"],
          ["Stars xaridini qaytarish (refund)", "Kamaytiradi", "Texnik hujjat"],
          ["Sovg‘ani Stars’ga aylantirish", "Kamaytiradi", "Texnik hujjat"],
          ["Balansni so‘mda to‘ldirish", "Aniq emas", "Rasmiy ro‘yxatda yo‘q"],
          ["Bot orqali so‘mda sovg‘a yuborish", "Aniq emas", "Tasdiqlanmagan"],
          ["Premium’ni so‘mda username orqali olish", "Aniq emas", "Tasdiqlanmagan"],
          ["Kolleksion sovg‘ani bozorda sotish", "Aniq emas", "Tasdiqlanmagan"],
        ]}
      />
      <p>«Aniq emas» qatorlari uchun taxmin qilmang. Kamaytiruvchi amallar <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars texnik sahifasida</a> keltirilgan.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="bot-orqali-somda-sovga-yuborsam">Bot orqali so‘mda sovg‘a yuborsam, reyting kimga yoziladi?</h2>
      <p>Bu savol ko‘p chalkashlik tug‘diradi. Telegram «sovg‘a sotib olish reytingni oshiradi» deydi. Lekin gap Stars bilan qilingan xarid haqida ketyapti.</p>
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali sovg‘a buyurtma qilsangiz, to‘lov so‘mda bo‘ladi va sizning Stars balansingiz ishlatilmaydi. Bunday xarid sizning reytingingizga yozilishi rasmiy manbada aytilmagan, shuning uchun bu maqolada tasdiqlanmagan.</p>
      <p>Ikki yo‘lni solishtiring:</p>
      <ul>
        <li><b>So‘mda bot orqali sovg‘a</b> — tez va qulay, lekin reytingga ta’siri noma’lum.</li>
        <li><b>Avval Stars olib, sovg‘ani Telegram ichidan o‘zingiz yuborish</b> — bu rasman sanalgan «Stars bilan sovg‘a sotib olish» amaliga mos keladi.</li>
      </ul>
      <p>Reyting siz uchun muhim bo‘lsa, ikkinchi yo‘l rasmiy matnga yaqinroq. Yana bir cheklov: Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Tayyor kolleksion sovg‘alar botdagi NFT Market’da sotiladi, tafsilotlari <Link href="/gifts">sovg‘alar sahifasida</Link>.</p>
      <h2 id="premiumni-somda-olish-reytingga-yoziladimi">Premium’ni so‘mda olish reytingga yoziladimi?</h2>
      <p>StarsPaymee’da Premium Telegram’ning sovg‘a mexanizmi orqali, faqat @username bilan ulanadi. To‘lov so‘mda bo‘ladi, Stars balansingizdan hech narsa yechilmaydi.</p>
      <p>Rasmiy manba reytingni Stars tranzaksiyalariga bog‘laydi. So‘mdagi Premium xaridi u yerda tilga olinmagan. Demak, Premium olish reytingingizni o‘zgartirishi bu maqolada tasdiqlanmagan. Premium’ni o‘z imkoniyatlari uchun olgan ma’qul.</p>
      <p>Narxlar hamma to‘lov usulida bir xil, ustamasiz:</p>
      <ul>
        <li>3 oy — {som(premium(3), "uz")}</li>
        <li>6 oy — {som(premium(6), "uz")}</li>
        <li>12 oy — {som(premium(12), "uz")}</li>
      </ul>
      <p>1 oylik tarif ham bor, narxi botda ko‘rsatiladi. Akkauntda faol Premium bo‘lsa, bot yangi buyurtma ochmaydi — muddat mavjud obuna ustiga qo‘shilmaydi. Tariflar <Link href="/premium">Premium sahifasida</Link>.</p>
      <h2 id="xato-xarid-va-refund-reytingdan">Xato xarid va refund: reytingdan nima ketadi?</h2>
      <Notice label={"Muhim"}>Stars xaridini qaytarsangiz, reyting kamayadi. Bu Telegram’ning texnik hujjatida to‘g‘ridan-to‘g‘ri yozilgan.</Notice>
      <p>Hujjatga ko‘ra, reyting daraja bilan ifodalanadi va manfiy bo‘lishi mumkin. Ma’lum chegaralarga yetganda daraja ko‘tariladi yoki pasayadi. Bitta refund necha ball olib ketishi va chegaralar qayerda turishi e’lon qilinmagan.</p>
      <p>Refund ko‘pincha shoshilishdan keyin kerak bo‘ladi. Odatiy holatlar:</p>
      <ul>
        <li>username’dagi bitta harf xato yozilib, yulduz boshqa akkauntga ketgan;</li>
        <li>ismi o‘xshash, lekin boshqa odam tanlangan;</li>
        <li>bir xarid ikki marta tasdiqlangan.</li>
      </ul>
      <p>Bularning oldini olish refunddan osonroq: xariddan oldin oluvchining username’ini tekshiring. Usuli <Link href="/blog/telegram-stars-username-qanday-topiladi">username qo‘llanmasida</Link>, qaytarish qoidalari esa <Link href="/blog/telegram-stars-qaytarib-olish">refund haqidagi maqolada</Link> yozilgan.</p>
      <p>StarsPaymee Stars’ni foydalanuvchidan sotib olmaydi. Ortiqcha yulduzni qayta sotib, hisobni «tozalash» yo‘li bu yerda yo‘q.</p>
      <h2 id="olingan-sovgani-yulduzga-almashtirishdan-oldin">Olingan sovg‘ani yulduzga almashtirishdan oldin nimani o‘ylash kerak?</h2>
      <p>Rasmiy manbada sovg‘a bilan bog‘liq ikki amal turlicha yoritilgan:</p>
      <ul>
        <li><b>Stars’ga aylantirish</b> — sovg‘a yo‘qoladi, balansga Stars tushadi. Texnik hujjatga ko‘ra, bu reytingni kamaytiradi.</li>
        <li><b>Bozorda sotish</b> — kolleksion sovg‘a boshqa egaga o‘tadi. Reytingga ta’siri rasmiy manbada aytilmagan.</li>
      </ul>
      <p>Kanallarda «siz bergan sovg‘ani oluvchi sotsa, sizga minus yozilmaydi» degan gap ham yuradi. U tasdiqlanmagan.</p>
      <p>Aylantirish tugmasini bosishdan oldin o‘zingizga savol bering: sovg‘ani profilda qoldirish mumkinmi? Stars sizga hozir rostdan kerakmi? Javob «yo‘q» bo‘lsa, sovg‘ani saqlab turish reyting uchun xavfsizroq. Tartib va oqibatlar <Link href="/blog/telegram-gift-stars-ga-aylantirish">alohida maqolada</Link>.</p>
      <h2 id="reyting-qayta-hisoblandi-posti-tekshirish">«Reyting qayta hisoblandi» posti: tekshirish tartibi</h2>
      <p>Kanallarda «Telegram sarflangan yulduzlarni qayta hisobladi, ko‘pchilikning reytingi oshdi» degan xabarlar tarqaldi. Bunday postni o‘qiganda uchta narsani tekshiring.</p>
      <ul>
        <li><b>Rasmiy havola bormi?</b> telegram.org va core.telegram.org’da qayta hisoblash yoki formula o‘zgargani haqida e’lon topilmadi.</li>
        <li><b>Refund minuslari haqida nima deyilgan?</b> Ular qayta ko‘rilgani haqida rasmiy ma’lumot yo‘q.</li>
        <li><b>Post ostida nima turibdi?</b> Ko‘pincha «reytingni oshirib beramiz» degan begona botlar.</li>
      </ul>
      <p>Raqam bir kunda o‘zgargandek ko‘rinishining bitta mumkin bo‘lgan izohi bor. Texnik hujjatga ko‘ra, kutilayotgan (pending) reyting belgilangan sanada qo‘llanadi. Ya’ni bir necha kunlik xaridlar birdaniga ko‘rinishi mumkin. Bu taxmin, tasdiq emas.</p>
      <p>Reytingni sotib olish xizmati rasmiy ro‘yxatda yo‘q. Parol, SMS kod yoki akkauntga kirishni so‘ragan botga hech narsa bermang.</p>
      <h2 id="oz-reytingimni-qanday-kuzataman">O‘z reytingimni qanday kuzataman?</h2>
      <Steps>
        <Step title={"Ilovani yangilang"}>eski versiyada nishon ko‘rinmasligi mumkin.</Step>
        <Step title={"Profilingizni oching"}>Telegram reyting nishonini profilda ko‘rsatadi.</Step>
        <Step title={"Nishon tafsilotini ko‘ring"}>oynaning ko‘rinishi va menyu nomlari platformaga qarab farq qilishi mumkin.</Step>
        <Step title={"Kutilayotgan o‘zgarishni qidiring"}>texnik hujjatga ko‘ra, uni faqat akkaunt egasi ko‘radi va u belgilangan sanada kuchga kiradi; ilovada qayerda chiqishi bu maqolada tasdiqlanmagan.</Step>
        <Step title={"Oxirgi amallarni solishtiring"}>sovg‘a xaridi, pullik xabar, refund yoki aylantirish bo‘lganmi.</Step>
      </Steps>
      <p>Yulduzlar qoldig‘i va tarixini ko‘rish <Link href="/blog/telegram-stars-balansini-tekshirish">balansni tekshirish qo‘llanmasida</Link> yozilgan.</p>
      <h2 id="reyting-kimga-foyda-beradi-va">Reyting kimga foyda beradi va qayerda keraksiz?</h2>
      <p>Telegram blogiga ko‘ra, reyting Telegram’dagi darajangizni ko‘rsatadi va kanal egalariga Suggested Posts hamda boshqa so‘rovlarda sizga ishonsa bo‘lishini bildiradi.</p>
      <p>Bu ko‘proq quyidagilarga kerak:</p>
      <ul>
        <li>kanallarga post taklif qiladiganlarga;</li>
        <li>notanish odamlarga pullik xabar yozadiganlarga;</li>
        <li>sovg‘alar bilan faol almashadiganlarga, chunki nishon profilda turadi.</li>
      </ul>
      <p>Faqat do‘stlar bilan yozishadigan odam uchun reyting maqsad emas. Stars’ni raqam uchun emas, kerakli narsaga sarflang. Variantlar <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">Stars qayerda ishlatiladi</Link> maqolasida.</p>
      <h2 id="starsni-somda-olish-reytingni-xatosiz">Stars’ni so‘mda olish: reytingni xatosiz saqlash tartibi</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> ga kiring.</Step>
        <Step title={"Username kiriting"}>faqat @username kerak, parol yoki SMS kod so‘ralmaydi.</Step>
        <Step title={"Miqdorni tanlang"}>eng kam buyurtma 50 Stars.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</Step>
        <Step title={"Yetkazilganini tekshiring"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik keladi.</Step>
      </Steps>
      <p>Dona narxi to‘lov usuliga bog‘liq:</p>
      <CompareTable
        headers={["To‘lov usuli", "1 Star narxi"]}
        rows={[
          ["Karta o‘tkazmasi (UzCard/HUMO) yoki bot balansi", `${som(STARS_PER_UNIT_UZS, "uz")}`],
          ["Click, Payme, Uzum yoki Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
        ]}
      />
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Reytingni asrash uchun ikki odatni saqlang: username’ni to‘lovdan oldin qayta o‘qing, olingan sovg‘ani esa shoshib yulduzga almashtirmang. Barcha paketlar <Link href="/stars">Stars sahifasida</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/post-search-story-albums-and-more", label: "Public Post Search, Story Albums, Gift Collections and More" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Botdan yulduz olib, hech narsaga sarflamasam, nishondagi raqam o‘zgaradimi?", answer: "Rasmiy matnda balansni to‘ldirish reytingni o‘zgartiradigan amal sifatida ko‘rsatilmagan. Telegram ko‘tarilish manbai qilib faqat Stars sarflanadigan amallarni sanagan." },
  { question: "Bir Star reytingga necha ball qo‘shadi?", answer: "Bu e’lon qilinmagan, darajalar orasidagi chegaralar ham ochiq emas. Internetdagi «shuncha Stars — shuncha daraja» jadvallari taxmin." },
  { question: "Kanal muallifiga pullik xabar yozsam, bu hisobga olinadimi?", answer: "Ha. Telegram Paid Messages yuborishni reytingni ko‘taradigan amallar qatoriga kiritgan." },
  { question: "Xato xaridni qaytarsam, reyting noldan pastga tushishi mumkinmi?", answer: "Mumkin: texnik hujjatda reyting manfiy qiymatga ega bo‘lishi mumkinligi yozilgan. Bitta qaytarishning aniq «narxi» esa aytilmagan." },
  { question: "Kutilayotgan reyting qachon haqiqiysiga aylanadi?", answer: "Texnik hujjatga ko‘ra, u belgilangan sanada qo‘llanadi va gacha faqat akkaunt egasiga ko‘rinadi. Aniq sana har bir foydalanuvchida alohida ko‘rsatiladi." },
  { question: "Botda so‘mga sovg‘a buyurtma qilsam, bu menga Stars xaridi kabi yoziladimi?", answer: "Bu tasdiqlanmagan, chunki to‘lov so‘mda bo‘ladi va sizning yulduzlaringiz ishlatilmaydi. Rasman sanalgan amal — Telegram ichida Stars bilan sovg‘a olish." },
  { question: "Premium obunasi bilan reyting o‘rtasida bog‘liqlik bormi?", answer: "Rasmiy manbada Premium reytingga ta’sir qiluvchi omil sifatida tilga olinmagan. Premium’ni o‘z imkoniyatlari uchun tanlang." },
  { question: "Kolleksion sovg‘amni boshqa odamga sotsam, nima bo‘ladi?", answer: "Telegram faqat sovg‘ani Stars’ga aylantirish reytingni tushirishini aytgan. Bozorda sotishning ta’siri rasmiy manbada yoritilmagan." },
  { question: "«Reytingingizni ko‘tarib beramiz» degan xabar kelsa, nima qilay?", answer: "E’tibor bermang: reyting o‘z tranzaksiyalaringizdan yig‘iladi va uni sotadigan rasmiy xizmat yo‘q. Kod yoki parol so‘ralsa, bu aniq xavf belgisi." },
  { question: "Reytingi past odamning post taklifini kanal egasi qabul qilmasligi mumkinmi?", answer: "Telegram reytingni kanal egalariga ishonch belgisi sifatida ko‘rsatadi. Manfiy reyting uchun rasmiy cheklov aytilmagan, lekin qaror kanal egasining o‘zida qoladi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>По официальным источникам, рейтинг в Telegram растёт, когда вы тратите Stars. В зачёт идут покупка подарков, платные сообщения и финансирование Suggested Posts. Возврат покупки Stars и обмен подарка на Stars рейтинг снижают. Пополнение баланса в сумах или покупка Premium в официальном тексте как источник рейтинга не упоминаются.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#balansni-toldirdim-lekin-reyting-qimirlamadi", label: "Пополнил баланс, а рейтинг не изменился: почему?" },
          { href: "#xaridor-amallari-jadvali-qaysi-biri", label: "Таблица действий покупателя: что учитывается?" },
          { href: "#bot-orqali-somda-sovga-yuborsam", label: "Отправил подарок через бота за сумы: кому засчитается рейтинг?" },
          { href: "#premiumni-somda-olish-reytingga-yoziladimi", label: "Засчитывается ли в рейтинг Premium, купленный в сумах?" },
          { href: "#xato-xarid-va-refund-reytingdan", label: "Ошибочная покупка и возврат: что теряет рейтинг?" },
          { href: "#olingan-sovgani-yulduzga-almashtirishdan-oldin", label: "О чём подумать, прежде чем обменять полученный подарок на звёзды?" },
          { href: "#reyting-qayta-hisoblandi-posti-tekshirish", label: "Пост «рейтинг пересчитали»: как проверить" },
          { href: "#oz-reytingimni-qanday-kuzataman", label: "Как следить за своим рейтингом?" },
          { href: "#reyting-kimga-foyda-beradi-va", label: "Кому рейтинг полезен, а где он не нужен?" },
          { href: "#starsni-somda-olish-reytingni-xatosiz", label: "Покупка Stars в сумах: как не навредить рейтингу" },
        ]}
      />
      <h2 id="balansni-toldirdim-lekin-reyting-qimirlamadi">Пополнил баланс, а рейтинг не изменился: почему?</h2>
      <p>Когда Telegram объявил о значке рейтинга в профиле, он привязал его к общему объёму успешных транзакций со Stars (<a href={"https://telegram.org/blog/post-search-story-albums-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). В том же анонсе прямо перечислены три действия, которые поднимают рейтинг: покупка подарков, отправка платных сообщений и финансирование Suggested Posts за Stars.</p>
      <p>Пополнения баланса в этом списке нет. Пример: Дилноза купила в боте 500 Stars и пока ни на что их не потратила. Если опираться на официальный текст, оснований ждать изменения её рейтинга нет. Звёзды просто лежат на счёте.</p>
      <p>Поэтому расчёт «куплю Stars — и рейтинг вырастет на столько-то» ненадёжен. Сколько баллов даёт одна звезда, тоже не объявлено. Как устроена система в целом, описано в <Link href="/blog/telegram-stars-qanday-ishlaydi">статье о том, как работают Stars</Link>.</p>
      <h2 id="xaridor-amallari-jadvali-qaysi-biri">Таблица действий покупателя: что учитывается?</h2>
      <p>В таблице обычные действия человека, который покупает Stars в сумах и потом их тратит, сверены с официальными источниками.</p>
      <CompareTable
        headers={["Действие", "Влияние на рейтинг", "Где сказано"]}
        rows={[
          ["Покупка подарка за Stars внутри Telegram", "Повышает", "Блог Telegram"],
          ["Отправка платного сообщения (Paid Messages)", "Повышает", "Блог Telegram"],
          ["Финансирование Suggested Posts за Stars", "Повышает", "Блог Telegram"],
          ["Возврат покупки Stars (refund)", "Понижает", "Техническая документация"],
          ["Обмен подарка на Stars", "Понижает", "Техническая документация"],
          ["Пополнение баланса в сумах", "Неясно", "Нет в официальном списке"],
          ["Отправка подарка через бота за сумы", "Неясно", "Не подтверждено"],
          ["Покупка Premium в сумах по username", "Неясно", "Не подтверждено"],
          ["Продажа коллекционного подарка на маркете", "Неясно", "Не подтверждено"],
        ]}
      />
      <p>По строкам «Неясно» не стройте догадок. Понижающие действия приведены на <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">технической странице Telegram Stars</a>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="bot-orqali-somda-sovga-yuborsam">Отправил подарок через бота за сумы: кому засчитается рейтинг?</h2>
      <p>Этот вопрос путает многих. Telegram пишет, что «покупка подарков повышает рейтинг». Но речь идёт о покупке за Stars.</p>
      <p>Если вы заказываете подарок через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, оплата идёт в сумах, а ваш баланс Stars не используется. Засчитывается ли такая покупка в ваш рейтинг, официальный источник не говорит, поэтому в этой статье это не подтверждено.</p>
      <p>Сравните два пути:</p>
      <ul>
        <li><b>Подарок через бота за сумы</b> — быстро и удобно, но влияние на рейтинг неизвестно.</li>
        <li><b>Сначала купить Stars и отправить подарок самому внутри Telegram</b> — это совпадает с официально названным действием «покупка подарка за Stars».</li>
      </ul>
      <p>Если рейтинг для вас важен, второй путь ближе к официальному тексту. Ещё одно ограничение: лимитированные подарки, снятые Telegram с продажи, боты отправить не могут. Готовые коллекционные подарки продаются в NFT Market внутри бота, подробности — на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="premiumni-somda-olish-reytingga-yoziladimi">Засчитывается ли в рейтинг Premium, купленный в сумах?</h2>
      <p>В StarsPaymee Premium подключается через механизм подарков Telegram, только по @username. Оплата в сумах, с вашего баланса Stars ничего не списывается.</p>
      <p>Официальный источник связывает рейтинг с транзакциями Stars. Покупка Premium в сумах там не упоминается. Значит, то, что Premium меняет ваш рейтинг, в этой статье не подтверждено. Premium разумнее брать ради его собственных возможностей.</p>
      <p>Цены одинаковы для всех способов оплаты, без наценки:</p>
      <ul>
        <li>3 месяца — {som(premium(3), "ru")}</li>
        <li>6 месяцев — {som(premium(6), "ru")}</li>
        <li>12 месяцев — {som(premium(12), "ru")}</li>
      </ul>
      <p>Есть и тариф на 1 месяц, цена указана в боте. Если на аккаунте уже активен Premium, бот не откроет новый заказ — срок не добавляется поверх действующей подписки. Тарифы — на <Link href="/premium">странице Premium</Link>.</p>
      <h2 id="xato-xarid-va-refund-reytingdan">Ошибочная покупка и возврат: что теряет рейтинг?</h2>
      <Notice label={"Важно"}>Если вернуть покупку Stars, рейтинг снизится. Это прямо написано в технической документации Telegram.</Notice>
      <p>По документации, рейтинг выражается уровнем и может быть отрицательным. При достижении определённых порогов уровень повышается или понижается. Сколько баллов забирает один возврат и где проходят пороги, не объявлено.</p>
      <p>Возврат чаще всего нужен после спешки. Типичные случаи:</p>
      <ul>
        <li>в username ошиблись на одну букву, и звёзды ушли на другой аккаунт;</li>
        <li>выбрали человека с похожим именем, но не того;</li>
        <li>одну покупку подтвердили дважды.</li>
      </ul>
      <p>Предотвратить это проще, чем потом оформлять возврат: перед покупкой проверьте username получателя. Как это сделать — в <Link href="/blog/telegram-stars-username-qanday-topiladi">инструкции по username</Link>, правила возврата — в <Link href="/blog/telegram-stars-qaytarib-olish">статье о refund</Link>.</p>
      <p>StarsPaymee не выкупает Stars у пользователей. Способа «почистить» счёт, перепродав лишние звёзды, здесь нет.</p>
      <h2 id="olingan-sovgani-yulduzga-almashtirishdan-oldin">О чём подумать, прежде чем обменять полученный подарок на звёзды?</h2>
      <p>В официальном источнике два действия с подарком описаны по-разному:</p>
      <ul>
        <li><b>Обмен на Stars</b> — подарок исчезает, на баланс приходят Stars. По технической документации, это снижает рейтинг.</li>
        <li><b>Продажа на маркете</b> — коллекционный подарок переходит к другому владельцу. Влияние на рейтинг в официальном источнике не указано.</li>
      </ul>
      <p>В каналах ходит и такое утверждение: «если получатель продаст ваш подарок, вам минус не запишут». Оно не подтверждено.</p>
      <p>Прежде чем нажать кнопку обмена, спросите себя: можно ли оставить подарок в профиле? Действительно ли Stars нужны прямо сейчас? Если ответ «нет», для рейтинга безопаснее подарок сохранить. Порядок и последствия — в <Link href="/blog/telegram-gift-stars-ga-aylantirish">отдельной статье</Link>.</p>
      <h2 id="reyting-qayta-hisoblandi-posti-tekshirish">Пост «рейтинг пересчитали»: как проверить</h2>
      <p>В каналах разошлись сообщения вроде «Telegram пересчитал потраченные звёзды, у многих вырос рейтинг». Читая такой пост, проверьте три вещи.</p>
      <ul>
        <li><b>Есть ли официальная ссылка?</b> На telegram.org и core.telegram.org объявлений о пересчёте или изменении формулы не найдено.</li>
        <li><b>Что сказано о минусах за возвраты?</b> Официальной информации о том, что их пересмотрели, нет.</li>
        <li><b>Что стоит под постом?</b> Часто — сторонние боты с обещанием «поднимем рейтинг».</li>
      </ul>
      <p>У того, что цифра будто бы изменилась за один день, есть одно возможное объяснение. По технической документации, ожидающий (pending) рейтинг применяется в назначенную дату. То есть покупки за несколько дней могут отразиться разом. Это предположение, а не подтверждение.</p>
      <p>Услуги покупки рейтинга в официальном списке нет. Боту, который просит пароль, SMS-код или вход в аккаунт, ничего не давайте.</p>
      <h2 id="oz-reytingimni-qanday-kuzataman">Как следить за своим рейтингом?</h2>
      <Steps>
        <Step title={"Обновите приложение"}>в старой версии значок может не отображаться.</Step>
        <Step title={"Откройте свой профиль"}>Telegram показывает значок рейтинга в профиле.</Step>
        <Step title={"Посмотрите подробности значка"}>вид окна и названия пунктов меню могут отличаться в зависимости от платформы.</Step>
        <Step title={"Найдите ожидающее изменение"}>по технической документации, его видит только владелец аккаунта, и оно вступает в силу в назначенную дату; где именно оно показывается в приложении, в этой статье не подтверждено.</Step>
        <Step title={"Сверьте последние действия"}>была ли покупка подарка, платное сообщение, возврат или обмен.</Step>
      </Steps>
      <p>Как посмотреть остаток и историю звёзд, описано в <Link href="/blog/telegram-stars-balansini-tekshirish">инструкции по проверке баланса</Link>.</p>
      <h2 id="reyting-kimga-foyda-beradi-va">Кому рейтинг полезен, а где он не нужен?</h2>
      <p>По блогу Telegram, рейтинг показывает ваш уровень в Telegram и даёт владельцам каналов понять, что вам можно доверять в Suggested Posts и других запросах.</p>
      <p>Он нужнее всего тем, кто:</p>
      <ul>
        <li>предлагает посты в каналы;</li>
        <li>пишет платные сообщения незнакомым людям;</li>
        <li>активно обменивается подарками, ведь значок виден в профиле.</li>
      </ul>
      <p>Для того, кто переписывается только с друзьями, рейтинг — не цель. Тратьте Stars на то, что действительно нужно, а не ради цифры. Варианты — в статье <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">на что тратить Stars</Link>.</p>
      <h2 id="starsni-somda-olish-reytingni-xatosiz">Покупка Stars в сумах: как не навредить рейтингу</h2>
      <Steps>
        <Step title={"Откройте бота"}>перейдите в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Введите username"}>нужен только @username, пароль или SMS-код не запрашиваются.</Step>
        <Step title={"Выберите количество"}>минимальный заказ 50 Stars.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота.</Step>
        <Step title={"Проверьте зачисление"}>заказ обычно приходит автоматически за несколько секунд, примерно за 5 секунд.</Step>
      </Steps>
      <p>Цена за штуку зависит от способа оплаты:</p>
      <CompareTable
        headers={["Способ оплаты", "Цена 1 Star"]}
        rows={[
          ["Перевод на карту (UzCard/HUMO) или баланс бота", `${som(STARS_PER_UNIT_UZS, "ru")}`],
          ["Click, Payme, Uzum или Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
        ]}
      />
      <p>Международная карта, криптокошелёк или VPN не нужны. Чтобы сберечь рейтинг, держитесь двух привычек: перечитывайте username до оплаты и не спешите обменивать полученные подарки на звёзды. Все пакеты — на <Link href="/stars">странице Stars</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/post-search-story-albums-and-more", label: "Public Post Search, Story Albums, Gift Collections and More" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если купить звёзды в боте и ничего не тратить, цифра на значке изменится?", answer: "В официальном тексте пополнение баланса не названо действием, которое влияет на рейтинг. Telegram указал источниками роста только действия, где Stars тратятся." },
  { question: "Сколько баллов рейтинга даёт одна звезда?", answer: "Это не объявлено, пороги между уровнями тоже не раскрыты. Таблицы в интернете вида «столько Stars — такой уровень» — догадки." },
  { question: "Если написать платное сообщение автору канала, это засчитается?", answer: "Да. Telegram включил отправку Paid Messages в число действий, которые поднимают рейтинг." },
  { question: "Может ли рейтинг уйти ниже нуля после возврата ошибочной покупки?", answer: "Может: в технической документации сказано, что рейтинг способен принимать отрицательное значение. А вот точная «цена» одного возврата не названа." },
  { question: "Когда ожидающий рейтинг становится настоящим?", answer: "По технической документации, он применяется в назначенную дату и до этого виден только владельцу аккаунта. Конкретная дата показывается каждому пользователю отдельно." },
  { question: "Если заказать подарок в боте за сумы, мне это засчитают как покупку за Stars?", answer: "Это не подтверждено: оплата идёт в сумах, ваши звёзды не расходуются. Официально учитываемое действие — покупка подарка за Stars внутри Telegram." },
  { question: "Есть ли связь между подпиской Premium и рейтингом?", answer: "В официальном источнике Premium не упоминается как фактор рейтинга. Выбирайте Premium ради его собственных функций." },
  { question: "Что будет, если продать свой коллекционный подарок другому человеку?", answer: "Telegram говорит только о том, что рейтинг снижает обмен подарка на Stars. Как влияет продажа на маркете, в официальном источнике не раскрыто." },
  { question: "Пришло сообщение «поднимем ваш рейтинг» — что делать?", answer: "Игнорируйте: рейтинг складывается из ваших собственных транзакций, официальной услуги по его продаже нет. Если просят код или пароль — это явный признак опасности." },
  { question: "Может ли владелец канала отклонить предложенный пост из-за низкого рейтинга?", answer: "Telegram показывает рейтинг владельцам каналов как знак доверия. Официальных ограничений для отрицательного рейтинга не названо, но решение остаётся за владельцем канала." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>According to official sources, your Telegram rating goes up when you spend Stars. Three actions count: buying gifts, sending paid messages and funding Suggested Posts. Refunding a Stars purchase or converting a gift to Stars pulls it down. The official text does not say that topping up your balance in UZS or buying Premium counts toward the rating.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#balansni-toldirdim-lekin-reyting-qimirlamadi", label: "I topped up my balance, but my rating didn’t move: why?" },
          { href: "#xaridor-amallari-jadvali-qaysi-biri", label: "Buyer actions table: which ones count?" },
          { href: "#bot-orqali-somda-sovga-yuborsam", label: "If I send a gift through a bot in UZS, whose rating does it count toward?" },
          { href: "#premiumni-somda-olish-reytingga-yoziladimi", label: "Does buying Premium in UZS count toward the rating?" },
          { href: "#xato-xarid-va-refund-reytingdan", label: "Mistaken purchases and refunds: what does the rating lose?" },
          { href: "#olingan-sovgani-yulduzga-almashtirishdan-oldin", label: "What to consider before converting a received gift to Stars" },
          { href: "#reyting-qayta-hisoblandi-posti-tekshirish", label: "The “rating recalculated” post: how to check it" },
          { href: "#oz-reytingimni-qanday-kuzataman", label: "How do I track my own rating?" },
          { href: "#reyting-kimga-foyda-beradi-va", label: "Who benefits from the rating and where it doesn’t matter" },
          { href: "#starsni-somda-olish-reytingni-xatosiz", label: "Buying Stars in UZS: keeping your rating error-free" },
        ]}
      />
      <h2 id="balansni-toldirdim-lekin-reyting-qimirlamadi">I topped up my balance, but my rating didn’t move: why?</h2>
      <p>When Telegram announced the rating badge on profiles, it tied it to the total volume of successful transactions made with Stars (<a href={"https://telegram.org/blog/post-search-story-albums-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). The same announcement names three actions that raise the rating: purchasing gifts, sending Paid Messages and funding Suggested Posts with Stars.</p>
      <p>Topping up your balance is not on that list. Say Dilnoza bought 500 Stars from a bot and hasn’t spent them yet. Based on the official wording, there’s no reason to expect her rating to change. The Stars are simply sitting in her account.</p>
      <p>That’s why calculations like “if I buy this many Stars, my rating will rise by that much” don’t hold up. Telegram hasn’t published how many points one Star is worth either. For how the system works in general, see <Link href="/blog/telegram-stars-qanday-ishlaydi">our guide to how Stars work</Link>.</p>
      <h2 id="xaridor-amallari-jadvali-qaysi-biri">Buyer actions table: which ones count?</h2>
      <p>The table compares what a typical person does after buying Stars in UZS with what official sources actually say.</p>
      <CompareTable
        headers={["Action", "Effect on rating", "Source"]}
        rows={[
          ["Buying a gift with Stars inside Telegram", "Increases", "Telegram blog"],
          ["Sending a Paid Message", "Increases", "Telegram blog"],
          ["Funding Suggested Posts with Stars", "Increases", "Telegram blog"],
          ["Refunding a Stars purchase", "Decreases", "Technical docs"],
          ["Converting a gift to Stars", "Decreases", "Technical docs"],
          ["Topping up the balance in UZS", "Unclear", "Not in the official list"],
          ["Sending a gift via a bot, paid in UZS", "Unclear", "Unconfirmed"],
          ["Getting Premium in UZS by username", "Unclear", "Unconfirmed"],
          ["Selling a collectible gift on the market", "Unclear", "Unconfirmed"],
        ]}
      />
      <p>Don’t guess on the “Unclear” rows. The actions that lower the rating are listed on the <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars technical page</a>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="bot-orqali-somda-sovga-yuborsam">If I send a gift through a bot in UZS, whose rating does it count toward?</h2>
      <p>This one causes a lot of confusion. Telegram says “purchasing gifts increases your rating.” But it’s talking about purchases made with Stars.</p>
      <p>When you order a gift through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, you pay in UZS and your own Stars balance isn’t touched. Official sources don’t say such a purchase counts toward your rating, so it is unconfirmed in this article.</p>
      <p>Compare the two routes:</p>
      <ul>
        <li><b>Gift via the bot, paid in UZS</b> — fast and convenient, but the effect on your rating is unknown.</li>
        <li><b>Buy Stars first, then send the gift yourself inside Telegram</b> — this matches the officially listed action “purchasing gifts with Stars.”</li>
      </ul>
      <p>If the rating matters to you, the second route sticks closer to the official wording. One more limitation: bots can’t send limited gifts that Telegram has removed from sale. Ready-made collectible gifts are sold in the bot’s NFT Market — details on the <Link href="/gifts">gifts page</Link>.</p>
      <h2 id="premiumni-somda-olish-reytingga-yoziladimi">Does buying Premium in UZS count toward the rating?</h2>
      <p>At StarsPaymee, Premium is activated through Telegram’s gifting mechanism using only your @username. You pay in UZS, and nothing is deducted from your Stars balance.</p>
      <p>The official source links the rating to Stars transactions. Premium bought in UZS isn’t mentioned there. So whether Premium changes your rating is unconfirmed in this article. Buy Premium for its features, not for the badge.</p>
      <p>Prices are the same for every payment method, with no markup:</p>
      <ul>
        <li>3 months — {som(premium(3), "en")}</li>
        <li>6 months — {som(premium(6), "en")}</li>
        <li>12 months — {som(premium(12), "en")}</li>
      </ul>
      <p>There’s also a 1-month plan; its price is shown in the bot. If the account already has active Premium, the bot won’t open a new order — the new period isn’t stacked on top of the current subscription. All plans are on the <Link href="/premium">Premium page</Link>.</p>
      <h2 id="xato-xarid-va-refund-reytingdan">Mistaken purchases and refunds: what does the rating lose?</h2>
      <Notice label={"Important"}>If you refund a Stars purchase, your rating goes down. Telegram’s technical documentation says this directly.</Notice>
      <p>According to the docs, the rating is expressed as a level and can be negative. When certain thresholds are reached, you level up or level down. How many points a single refund costs, and where the thresholds sit, hasn’t been published.</p>
      <p>Refunds usually follow a rushed purchase. Common cases:</p>
      <ul>
        <li>one letter in the username was wrong, and the Stars went to someone else;</li>
        <li>a person with a similar name was picked by mistake;</li>
        <li>the same purchase was confirmed twice.</li>
      </ul>
      <p>Preventing these is easier than fixing them: check the recipient’s username before you pay. Here’s <Link href="/blog/telegram-stars-username-qanday-topiladi">how to find and check a username</Link>, and the refund rules are in <Link href="/blog/telegram-stars-qaytarib-olish">our article on getting Stars back</Link>.</p>
      <p>StarsPaymee doesn’t buy Stars back from users. There’s no option here to resell extra Stars to “clean up” your account.</p>
      <h2 id="olingan-sovgani-yulduzga-almashtirishdan-oldin">What to consider before converting a received gift to Stars</h2>
      <p>Official sources treat two gift-related actions differently:</p>
      <ul>
        <li><b>Converting to Stars</b> — the gift disappears and Stars land on your balance. According to the technical docs, this lowers your rating.</li>
        <li><b>Selling on the market</b> — the collectible gift passes to a new owner. The official source says nothing about its effect on the rating.</li>
      </ul>
      <p>There’s also a claim going around channels: “if the person you gifted sells it, you won’t get a minus.” It’s unconfirmed.</p>
      <p>Before tapping the convert button, ask yourself: can I just keep the gift on my profile? Do I really need the Stars right now? If the answer is “no,” keeping the gift is the safer choice for your rating. The process and its consequences are covered in <Link href="/blog/telegram-gift-stars-ga-aylantirish">a separate article</Link>.</p>
      <h2 id="reyting-qayta-hisoblandi-posti-tekshirish">The “rating recalculated” post: how to check it</h2>
      <p>Posts have been spreading in channels saying “Telegram recalculated spent Stars and many people’s ratings went up.” When you see one, check three things.</p>
      <ul>
        <li><b>Is there an official link?</b> No announcement about a recalculation or a formula change was found on telegram.org or core.telegram.org.</li>
        <li><b>What does it say about refund penalties?</b> There’s no official information that they were reviewed.</li>
        <li><b>What’s under the post?</b> Often it’s third-party bots offering to “boost your rating.”</li>
      </ul>
      <p>There is one possible explanation for a number seeming to jump overnight. According to the technical docs, a pending rating is applied on a set date. So purchases from several days may show up all at once. That’s a guess, not a confirmation.</p>
      <p>No service that sells rating appears in any official list. Don’t give anything to a bot that asks for your password, SMS code or account access.</p>
      <h2 id="oz-reytingimni-qanday-kuzataman">How do I track my own rating?</h2>
      <Steps>
        <Step title={"Update the app"}>older versions may not show the badge.</Step>
        <Step title={"Open your profile"}>Telegram displays the rating badge there.</Step>
        <Step title={"Tap the badge for details"}>the window layout and menu names may differ by platform.</Step>
        <Step title={"Look for a pending change"}>per the technical docs, only the account owner sees it, and it takes effect on a set date; where exactly it appears in the app is unconfirmed in this article.</Step>
        <Step title={"Compare with your recent actions"}>check whether you bought a gift, sent a paid message, got a refund or converted a gift.</Step>
      </Steps>
      <p>To see your Stars balance and history, use <Link href="/blog/telegram-stars-balansini-tekshirish">our balance-check guide</Link>.</p>
      <h2 id="reyting-kimga-foyda-beradi-va">Who benefits from the rating and where it doesn’t matter</h2>
      <p>According to the Telegram blog, the rating highlights your Telegram level and shows channel owners that you can be trusted for Suggested Posts and other requests.</p>
      <p>It matters most for:</p>
      <ul>
        <li>people who suggest posts to channels;</li>
        <li>people who send paid messages to strangers;</li>
        <li>active gift traders, since the badge sits right on the profile.</li>
      </ul>
      <p>If you only chat with friends, the rating isn’t a goal. Spend Stars on things you actually need, not on a number. Ideas are in <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">what Telegram Stars are used for</Link>.</p>
      <h2 id="starsni-somda-olish-reytingni-xatosiz">Buying Stars in UZS: keeping your rating error-free</h2>
      <Steps>
        <Step title={"Open the bot"}>go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Enter the username"}>only the @username is needed; no password or SMS code is requested.</Step>
        <Step title={"Choose the amount"}>the minimum order is 50 Stars.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (in the app or with cash at a terminal), a UzCard/HUMO card transfer or your bot balance.</Step>
        <Step title={"Check delivery"}>orders usually arrive automatically within a few seconds, about 5 seconds.</Step>
      </Steps>
      <p>The price per Star depends on the payment method:</p>
      <CompareTable
        headers={["Payment method", "Price per Star"]}
        rows={[
          ["Card transfer (UzCard/HUMO) or bot balance", `${som(STARS_PER_UNIT_UZS, "en")}`],
          ["Click, Payme, Uzum or Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
        ]}
      />
      <p>No international card, crypto wallet or VPN is needed. Two habits protect your rating: reread the username before paying, and don’t rush to convert received gifts into Stars. All packages are on the <Link href="/stars">Stars page</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/post-search-story-albums-and-more", label: "Public Post Search, Story Albums, Gift Collections and More" },
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If I buy Stars from a bot and don’t spend them, will the number on my badge change?", answer: "The official text doesn’t list topping up your balance as something that changes the rating. Telegram only names actions where Stars are spent as sources of growth." },
  { question: "How many rating points is one Star worth?", answer: "That hasn’t been published, and the thresholds between levels aren’t public either. Online tables claiming “this many Stars equals this level” are guesswork." },
  { question: "If I send a paid message to a channel author, does it count?", answer: "Yes. Telegram includes sending Paid Messages among the actions that raise your rating." },
  { question: "Can a refund for a mistaken purchase push my rating below zero?", answer: "It can: the technical docs state that the rating may have a negative value. The exact “cost” of a single refund isn’t specified." },
  { question: "When does a pending rating become my actual rating?", answer: "According to the technical docs, it’s applied on a set date and until then only the account owner can see it. The exact date is shown individually for each user." },
  { question: "If I order a gift in the bot and pay in UZS, does it count like a Stars purchase for me?", answer: "That’s unconfirmed, because you pay in UZS and your own Stars aren’t used. The officially listed action is buying a gift with Stars inside Telegram." },
  { question: "Is there any link between a Premium subscription and the rating?", answer: "Official sources don’t mention Premium as a factor affecting the rating. Choose Premium for what it offers." },
  { question: "What happens if I sell my collectible gift to someone else?", answer: "Telegram has only said that converting a gift to Stars lowers the rating. The effect of selling on the market isn’t covered in official sources." },
  { question: "What should I do if someone messages me offering to “boost my rating”?", answer: "Ignore it: the rating builds up from your own transactions, and there’s no official service that sells it. A request for a code or password is a clear red flag." },
  { question: "Can a channel owner reject a post suggestion from someone with a low rating?", answer: "Telegram presents the rating to channel owners as a trust signal. No official restriction for negative ratings has been announced, but the decision stays with the channel owner." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["telegram reytingi stars bilan oshadimi","telegram reyting qanday oshiriladi","telegram stars reyting","telegram profil reytingi","stars sarfi reyting","telegram reyting refund","telegram reyting qayta hisoblandi","рейтинг телеграм звезды","как повысить рейтинг в телеграм","рейтинг за потраченные звёзды","пересчитали рейтинг telegram","рефанд звёзд рейтинг"],
  howToSteps: [
    { name: "Ilovani yangilang", text: "eski versiyada nishon ko‘rinmasligi mumkin." },
    { name: "Profilingizni oching", text: "Telegram reyting nishonini profilda ko‘rsatadi." },
    { name: "Nishon tafsilotini ko‘ring", text: "oynaning ko‘rinishi va menyu nomlari platformaga qarab farq qilishi mumkin." },
    { name: "Kutilayotgan o‘zgarishni qidiring", text: "texnik hujjatga ko‘ra, uni faqat akkaunt egasi ko‘radi va u belgilangan sanada kuchga kiradi; ilovada qayerda chiqishi bu maqolada tasdiqlanmagan." },
    { name: "Oxirgi amallarni solishtiring", text: "sovg‘a xaridi, pullik xabar, refund yoki aylantirish bo‘lganmi." },
  ],
  locales: {
    uz: {
      title: "Stars bilan Telegram reytingi qanday oshadi: to‘ldirish, Premium va refund",
      excerpt: "Telegram reytingi Stars sarflanganda oshadi, refund va sovg‘ani yulduzga almashtirish esa uni tushiradi. Quyida to‘ldirish, Premium, bot orqali sovg‘a va «qayta hisoblandi» posti tekshirilgan.",
      metaTitle: "Stars bilan Telegram reytingi qanday oshadi",
      metaDescription: "Telegram reytingi Stars sarflanganda oshadi, refund va sovg‘ani yulduzga almashtirish esa uni tushiradi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как растёт рейтинг Telegram за Stars: пополнение, Premium и возврат",
      excerpt: "Разбираем, какие действия со Stars поднимают рейтинг в профиле Telegram, а какие его снижают. Отдельно проверены пополнение баланса, Premium в сумах, подарки через бота и посты о «пересчёте» рейтинга.",
      metaTitle: "Как растёт рейтинг Telegram за Stars",
      metaDescription: "Разбираем, какие действия со Stars поднимают рейтинг в профиле Telegram, а какие его снижают. Отдельно проверены пополнение баланса, Premium в сумах, подарки…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "How Does Your Telegram Stars Rating Grow? Top-Ups, Premium and Refunds",
      excerpt: "Your Telegram rating rises when you spend Stars, while refunds and converting gifts to Stars lower it. This guide checks top-ups, Premium, gifts sent via bots and the “recalculated” rumor.",
      metaTitle: "How Does Your Telegram Stars Rating Grow? Top-Ups",
      metaDescription: "Your Telegram rating rises when you spend Stars, while refunds and converting gifts to Stars lower it.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
