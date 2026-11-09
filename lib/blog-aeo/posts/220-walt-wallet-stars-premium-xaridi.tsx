import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "walt-wallet-stars-premium-xaridi";

/**
 * Walt Telegram Stars: @wallet o‘rniga Stars va Premium’ni so‘mda qanday olish
 *
 * Avtoblogyoz yasagan maqola (2026-11-09): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Ilgari Stars yoki Premium’ni @wallet orqali kripto bilan olgan yoki olmoqchi bo‘lgan o‘zbek foydalanuvchi «walt telegram stars» deb qidiradi; u Wallet’ning Walt’ga aylanishi Stars balansi, Premium xaridi va to‘lov yo‘liga ta’sir qiladimi, endi so‘mda qanday olishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-09):
 *   https://docs.ton.org/onboarding/wallet-apps/telegram
 *   https://docs.ton.org/contracts/standard/wallets/telegram/overview
 *   https://docs.ton.org/onboarding/wallet-apps/deep-links
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
  return <p>Stars balansi va faol Premium muddati hamyon ilovasining nomiga emas, Telegram akkauntingizga bog‘langan. «Wallet Walt’ga aylanmoqda» degan gap ularni o‘chirishi yoki to‘xtatishi haqida rasmiy ma’lumot yo‘q. Keyingi xarid uchun hamyon ham, kripto ham shart emas: Stars va Premium’ni so‘mda, faqat @username bilan olish mumkin.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#wallet-orqali-olgan-yulduzlaringiz-qayerda", label: "@wallet orqali olgan yulduzlaringiz qayerda turadi?" },
          { href: "#postdagi-gaplardan-qaysi-biri-xaridingizga", label: "Postdagi gaplardan qaysi biri xaridingizga tegishli?" },
          { href: "#kripto-bilan-qaysi-hamyondan-tolagan", label: "Kripto bilan qaysi hamyondan to‘lagan edingiz?" },
          { href: "#kriptodan-somga-otsangiz-qaysi-tolov", label: "Kriptodan so‘mga o‘tsangiz, qaysi to‘lov usullari bor?" },
          { href: "#somda-stars-yoki-premium-olish", label: "So‘mda Stars yoki Premium olish: 5 qadam" },
          { href: "#kripto-yoki-som-qaysi-yol", label: "Kripto yoki so‘m: qaysi yo‘l kimga qulay?" },
          { href: "#hamyonda-kripto-qolgan-bolsa-nima", label: "Hamyonda kripto qolgan bo‘lsa, nima qilasiz?" },
          { href: "#walt-bahonasidagi-aldovlarni-qanday-tanish", label: "«Walt» bahonasidagi aldovlarni qanday tanish mumkin?" },
          { href: "#bot-buyurtmani-yetkazmasa-tekshiruv-tartibi", label: "Bot buyurtmani yetkazmasa: tekshiruv tartibi" },
        ]}
      />
      <h2 id="wallet-orqali-olgan-yulduzlaringiz-qayerda">@wallet orqali olgan yulduzlaringiz qayerda turadi?</h2>
      <p>Kripto bilan to‘lagan bo‘lsangiz ham, xarid tugagach yulduzlar hamyonda qolmaydi. Ular Telegram akkauntingizning Stars balansiga tushadi. Premium esa akkauntga ulangan obuna, hamyon ilovasi qanday nomlanishiga bog‘liq emas.</p>
      <p>Boshqacha aytganda, hamyondagi tanga va Stars — ikki alohida balans. Biri kripto aktiv, ikkinchisi Telegram ichidagi to‘lov birligi. Batafsil farqlar <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida.</p>
      <p>Hozirgi holatni o‘zingiz bir daqiqada tekshirasiz:</p>
      <ul>
        <li><b>Stars balansi</b> — Telegram sozlamalaridagi Stars bo‘limida. Raqamni yozib yoki skrinshot qilib qo‘ying, keyin solishtirish oson bo‘ladi.</li>
        <li><b>Premium holati</b> — sozlamalardagi Premium bo‘limida. Obuna faol ko‘rinsa, hamyon atrofidagi gaplar unga tegmagan.</li>
      </ul>
      <h2 id="postdagi-gaplardan-qaysi-biri-xaridingizga">Postdagi gaplardan qaysi biri xaridingizga tegishli?</h2>
      <p>Mavzu bitta Telegram kanal postidan tarqaldi. Unda Wallet sozlamalardan yo‘qolgani, wallet.tg saytida esa «Wallet becomes Walt» yozuvi va yangi logotip paydo bo‘lgani aytiladi. Kanal posti rasmiy manba emas. Shu sababli har bir da’voni xaridor nuqtai nazaridan ko‘rib chiqdik.</p>
      <CompareTable
        headers={["Postdagi da’vo", "Rasmiy manbada", "Stars yoki Premium oluvchi uchun"]}
        rows={[
          ["Wallet nomi Walt bo‘lmoqda, logotip yangilangan", "telegram.org va ton.org’da tasdiq topilmadi", "Mish-mish sifatida qabul qiling"],
          ["Wallet sozlamalardan olib tashlangan", "telegram.org’da e’lon topilmadi", "So‘mdagi xaridga ta’sir qilmaydi"],
          ["Yangi nomning ishga tushish sanasi", "Rasmiy sana yo‘q", "Sanani rasmiy blogdan kuting"],
          ["Eski qoldiqlar taqdiri", "Rasmiy ma’lumot yo‘q", "Faqat ilovaning o‘z xabarlariga ishoning"],
        ]}
      />
      <p>ton.org hujjatlarida Telegram ichidagi hamyon <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">Telegram Money</a> deb ataladi va Gram uchun mo‘ljallangan. «Walt» so‘zi u yerda yo‘q. Shuning uchun postdagi Wallet bilan Telegram Money’ni bitta mahsulot deyishga asos yo‘q.</p>
      <Notice label={"Muhim"}>Rasmiy yangilikni <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> yoki <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a> sahifalarida qidiring. Boshqa kanallarda qayta yozilgan post va skrinshotlar tasdiq emas.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="kripto-bilan-qaysi-hamyondan-tolagan">Kripto bilan qaysi hamyondan to‘lagan edingiz?</h2>
      <p>«Hamyon» deganda ko‘pchilik bir nechta narsani aralashtiradi. Qaysi biridan foydalanganingizni bilsangiz, post sizga tegishli yoki tegishli emasligi aniq bo‘ladi.</p>
      <CompareTable
        headers={["Nima", "Qayerda ko‘rinadi", "Ma’lum bo‘lgan holat"]}
        rows={[
          ["@wallet boti", "Telegram’dagi alohida bot va mini ilova", "«Walt»ga aylanishi faqat postdagi da’vo"],
          ["Telegram Money", "Telegram Desktop asosiy menyusidagi «Money» bandi", "TON asosiy tarmog‘idagi hamyon: aktiv qabul qiladi, TON Connect orqali dApp’larga ulanadi"],
          ["Kanal TON balansi", "«tg://ton» havolasi ochadigan ekran", "Kanal monetizatsiyasiga bog‘liq alohida balans, Telegram Money emas"],
          ["Telegram Stars", "Sozlamalardagi Stars bo‘limi", "Akkaunt ichidagi balans; so‘mda olishda hamyon kerak emas"],
        ]}
      />
      <p>ton.org’ga ko‘ra Desktop’dagi «Money» bandi faqat Telegram akkauntingiz uchun hamyonni yoqqan bo‘lsa chiqadi. Uni ko‘rmasangiz, bu nosozlik emas va Stars xaridiga to‘sqinlik qilmaydi.</p>
      <p>Kompyuterda @wallet havolasi qanday oyna ochishi <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">Telegram Desktop’da @wallet havolasi</Link> maqolasida yozilgan. «Money» bandi va Gram hamyon haqidagi boshqa da’volarni <Link href="/blog/telegram-money-bolimi-gram-wallet">Telegram «Money» bo‘limi va GRAM Wallet</Link> maqolasida tekshirganmiz.</p>
      <h2 id="kriptodan-somga-otsangiz-qaysi-tolov">Kriptodan so‘mga o‘tsangiz, qaysi to‘lov usullari bor?</h2>
      <p>Hamyon ichidagi xarid hozir qanday shartlarda ishlashi bu maqolada tasdiqlanmagan. O‘sha yo‘lda davom etmoqchi bo‘lsangiz, shartlarni ilovaning o‘zida ko‘ring.</p>
      <p>So‘mdagi yo‘l uchun hamyon, kripto qoldig‘i, xalqaro karta yoki VPN kerak emas. StarsPaymee — O‘zbekistondagi mustaqil xizmat, Telegram kompaniyasiga tegishli emas. @StarsPaymee_bot’da quyidagi to‘lov usullari bor:</p>
      <ul>
        <li><b>Click, Payme yoki Uzum</b> — telefondagi ilovadan;</li>
        <li><b>Paynet</b> — ilovada yoki terminalda naqd pul bilan;</li>
        <li><b>UzCard yoki HUMO kartaga o‘tkazma</b>;</li>
        <li><b>bot balansi</b> — oldindan to‘ldirilgan bo‘lsa.</li>
      </ul>
      <p>Stars narxi to‘lov usuliga bog‘liq:</p>
      <ul>
        <li>karta o‘tkazmasi yoki bot balansidan — 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")};</li>
        <li>Click, Payme, Uzum yoki Paynet orqali — 1 ta Stars {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>Premium narxi hamma usulda bir xil, ustamasiz: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi. Joriy shartlar <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida jamlangan.</p>
      <h2 id="somda-stars-yoki-premium-olish">So‘mda Stars yoki Premium olish: 5 qadam</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini.</Step>
        <Step title={"Xizmatni tanlang"}>Stars (eng kami 50 dona) yoki Premium (1, 3, 6 yoki 12 oy).</Step>
        <Step title={"@username kiriting"}>o‘zingizniki yoki do‘stingizniki. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>yakuniy summa to‘lovdan oldin botda ko‘rinadi.</Step>
        <Step title={"To‘lang va tekshiring"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi.</Step>
      </Steps>
      <p>Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Masalan, ukangiz uchun 3 oylik Premium olmoqchi bo‘lsangiz, 3-qadamda uning @username’ini kiritasiz, qolgani o‘zgarmaydi.</p>
      <p>Username’ni qo‘lda terish xavfli. @aziz_dev o‘rniga @azizdev yozilsa, buyurtma boshqa odamga ketishi mumkin. Profildan nusxa olib qo‘yish ishonchliroq.</p>
      <p>Bitta istisno bor: akkauntda faol Premium bo‘lsa, bot yangi Premium buyurtmasini ochmaydi. Muddat faol obuna ustiga qo‘shilmaydi, tugashini kutish kerak. Bu holat <Link href="/blog/telegram-premium-muddatini-uzaytirish">Premium muddatini uzaytirish</Link> maqolasida batafsil.</p>
      <h2 id="kripto-yoki-som-qaysi-yol">Kripto yoki so‘m: qaysi yo‘l kimga qulay?</h2>
      <CompareTable
        headers={["Mezon", "Hamyon va kripto orqali", "StarsPaymee orqali so‘mda"]}
        rows={[
          ["Nima kerak", "Hamyon, kripto qoldig‘i, tarmoq to‘lovi uchun mablag‘", "Faqat @username"],
          ["To‘lov vositasi", "Kripto aktiv", "Click, Payme, Uzum, Paynet, UzCard/HUMO yoki bot balansi"],
          ["Narx qanday ko‘rinadi", "Kripto kursiga qarab o‘zgaradi", "Yakuniy summa botda so‘mda chiqadi"],
          ["Boshqa odamga yuborish", "Ilova shartlariga bog‘liq", "Uning @username’ini kiritish kifoya"],
          ["«Walt» gap-so‘ziga bog‘liqlik", "Hamyon ilovasidagi o‘zgarish ta’sir qilishi mumkin", "Hamyonga bog‘liq emas"],
          ["Kimga qulay", "Kriptosi bor va uni ishlatmoqchi bo‘lganga", "Kriptosi yo‘q yoki hisobini so‘mda yuritadiganga"],
        ]}
      />
      <p>Kripto yo‘lida narx kurs va tarmoq to‘loviga qarab o‘zgarib turadi, shuning uchun bu yerda raqam keltirmaymiz. Kanal reaksiyasi yoki kichik sovg‘a uchun vaqti-vaqti bilan oz miqdorda Stars kerak bo‘lsa, kripto sotib olib hamyonni to‘ldirish ortiqcha qadam. So‘mda 50 Stars’dan boshlab olish mumkin.</p>
      <h2 id="hamyonda-kripto-qolgan-bolsa-nima">Hamyonda kripto qolgan bo‘lsa, nima qilasiz?</h2>
      <p>Rasmiy e’lon yo‘q ekan, faqat post sababli qoldiqni shoshilib ko‘chirish, sotish yoki sarflashga hojat yo‘q. Shoshilinch harakat ko‘pincha manzil xatosiga yoki firibgarga olib keladi.</p>
      <p>Agar sizdagi hamyon aynan Telegram Money bo‘lsa, ton.org hujjatlarida quyidagilar yozilgan:</p>
      <ul>
        <li>joriy tiklash iborasi bilan hamyonni boshqa mos ilovaga ko‘chirish mumkin;</li>
        <li>bulutli zaxirani o‘chirish yoki manzilni o‘zgartirmasdan imzo kalitini almashtirish mumkin;</li>
        <li>shifrlangan bulutli zaxirada kalit uch qismga bo‘linib, uch qit‘adagi ma’lumot markazlarida saqlanadi;</li>
        <li>hamyon <a href={"https://docs.ton.org/contracts/standard/wallets/telegram/overview"} target="_blank" rel="noopener noreferrer">WalletTg</a> kontraktidan foydalanadi, uning yangilanishlari uchun validatorlar umumiy vaznining 75% dan ortig‘i kerak va buni Telegram ham chetlab o‘ta olmaydi;</li>
        <li>hamyon egasi bu yangilanishlardan voz kecha olmaydi.</li>
      </ul>
      <Notice label={"Muhim"}>Bu faktlar faqat Telegram Money’ga tegishli. Ularni @wallet botiga ko‘chirib bo‘lmaydi: u yerdagi mablag‘ bo‘yicha faqat ilovaning rasmiy xabarlariga tayaning.</Notice>
      <p>Hamyonda Toncoin o‘rniga Gram nomini ko‘rib hayron bo‘lgan bo‘lsangiz, bu mavzu <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasida.</p>
      <h2 id="walt-bahonasidagi-aldovlarni-qanday-tanish">«Walt» bahonasidagi aldovlarni qanday tanish mumkin?</h2>
      <p>Nom o‘zgarishi atrofidagi shov-shuv firibgarlarga qulay bahona beradi. Kutilishi mumkin bo‘lgan ssenariylar:</p>
      <ul>
        <li>«Hamyonni Walt’ga ko‘chirish uchun» tiklash iborasini so‘rash;</li>
        <li>«Stars balansini saqlab qolish uchun» noma’lum havolaga kirishni talab qilish;</li>
        <li>«Walt’da Premium yarim narxda» degan soxta bot yoki kanal;</li>
        <li>«Walt’ga o‘tishdan oldin yulduzlaringizni sotib olamiz» degan taklif.</li>
      </ul>
      <p>Himoyalanish yo‘llari:</p>
      <ul>
        <li><b>Iborani sir saqlang.</b> ton.org’ga ko‘ra tiklash iborasi hamyon va mablag‘lar ustidan nazorat beradi, uni ochiq matnda ulashmaslik kerak. Iborani so‘ragan har kim — xavf belgisi.</li>
        <li><b>O‘tkazma havolalarini tekshiring.</b> «t.me/sendgrams» havolasi «tg://sendgrams» bilan bir xil parametrlarni qabul qiladi. Bunday havola ochilsa, tasdiqlashdan oldin oluvchi va summani o‘zingiz ko‘ring.</li>
        <li><b>Kim nima so‘rashini biling.</b> StarsPaymee faqat @username so‘raydi, Stars va sovg‘alarni foydalanuvchidan sotib olmaydi. Uning nomidan yulduz sotib olish taklifi kelsa, bu aldov.</li>
        <li><b>Manzillarni bitta joydan oling.</b> Bot va yordam akkauntlarini <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> kanalidan tekshiring.</li>
      </ul>
      <h2 id="bot-buyurtmani-yetkazmasa-tekshiruv-tartibi">Bot buyurtmani yetkazmasa: tekshiruv tartibi</h2>
      <ul>
        <li>Kiritilgan @username’ni qayta ko‘ring: bitta harf xatosi ham yetarli.</li>
        <li>Botda to‘lov holatini tekshiring: to‘lov tasdiqlanmagan bo‘lsa, buyurtma hali bajarilmagan.</li>
        <li>Premium kelmasa, akkauntda avvaldan faol obuna bor-yo‘qligini aniqlang — bunday holatda bot yangi buyurtma ochmaydi.</li>
        <li>Stars ko‘rinmasa, Telegram’ni qayta ochib, balansni buyurtmadan oldingi raqam bilan solishtiring.</li>
      </ul>
      <Notice label={"Muhim"}>Muammo hal bo‘lmasa, to‘lov cheki va buyurtma ma’lumotini <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yuboring. Boshqa holatlar <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmasa nima qilish</Link> maqolasida.</Notice>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/contracts/standard/wallets/telegram/overview", label: "WalletTg: Telegram wallet contract" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Bir oy oldin kripto bilan olgan 500 Stars’im nom o‘zgarishi bilan kuyib ketmaydimi?", answer: "Yulduzlar hamyonda emas, akkauntingizning Stars balansida turadi. Nom o‘zgarishi ularga ta’sir qilishi haqida rasmiy ma’lumot yo‘q — raqamni sozlamalarda tekshirib qo‘ying." },
  { question: "Walt ichida Premium sotib olish imkoniyati bo‘ladimi?", answer: "Walt’ning o‘zi rasmiy manbalarda tasdiqlanmagan, imkoniyatlari ham noma’lum. Premium’ni so‘mda olish uchun esa hamyon kerak emas, @username kiritish yetadi." },
  { question: "Stars olish uchun avval Telegram Money hamyonini yoqishim kerakmi?", answer: "Yo‘q. @StarsPaymee_bot’da to‘lov Click, Payme, Uzum, Paynet, UzCard/HUMO o‘tkazmasi yoki bot balansi orqali so‘mda qilinadi." },
  { question: "Menyuda Wallet ham, Money ham ko‘rinmayapti. Premium ola olamanmi?", answer: "Ha. «Money» bandi faqat Telegram hamyonni yoqqan akkauntlarda chiqadi, Premium esa username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi." },
  { question: "Hamyondagi Gram qoldig‘imni StarsPaymee’ga sotib, evaziga Stars olsam bo‘ladimi?", answer: "Bunday xizmat yo‘q: xaridlar so‘mda to‘lanadi, StarsPaymee foydalanuvchidan Stars va sovg‘alarni ham sotib olmaydi. Shunday taklif bilan kelganlardan ehtiyot bo‘ling." },
  { question: "Payme bilan to‘lasam, kartadan o‘tkazgandagidan qimmatroq chiqadimi?", answer: `Stars uchun ha: onlayn to‘lovda 1 ta Stars ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}, karta o‘tkazmasi yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}. Premium narxi esa barcha usulda bir xil.` },
  { question: "Premium’im hali tugamagan, oldindan yana 12 oyni qo‘shib qo‘ysam bo‘ladimi?", answer: "Bo‘lmaydi: faol obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi. Obuna tugagach, kerakli muddatni tanlab qayta olasiz." },
  { question: "Kimdir o‘zini hamyon xodimi deb tanishtirib, 24 ta so‘zli iborani so‘rayapti. Nima qilay?", answer: "Hech narsa yubormang, bu aldov belgisi. Tiklash iborasini bilgan odam hamyon va undagi mablag‘ni boshqara oladi, shuning uchun suhbatdoshni bloklang." },
  { question: "Kompyuterdagi Telegram’dan buyurtma bersa ishlaydimi?", answer: "Ha, @StarsPaymee_bot Telegram Desktop’da ham ochiladi. Biror havola hamyon oynasini ochib yuborsa ham, so‘mdagi buyurtmaga bu xalaqit qilmaydi." },
  { question: "Walt haqidagi xabar rost chiqsa, buni qayerdan bilaman?", answer: "Rasmiy e’lonni telegram.org blogi yoki ton.org sahifalaridan kuting. Hozircha u yerda «Walt» haqida hech narsa topilmadi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Баланс Stars и срок действующего Premium привязаны к вашему аккаунту Telegram, а не к названию приложения-кошелька. Официальных данных о том, что «превращение Wallet в Walt» их обнулит или заморозит, нет. Для следующей покупки не нужны ни кошелёк, ни криптовалюта: Stars и Premium можно купить за сумы, указав только @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#wallet-orqali-olgan-yulduzlaringiz-qayerda", label: "Где хранятся звёзды, купленные через @wallet?" },
          { href: "#postdagi-gaplardan-qaysi-biri-xaridingizga", label: "Какие утверждения из поста касаются вашей покупки?" },
          { href: "#kripto-bilan-qaysi-hamyondan-tolagan", label: "Из какого кошелька вы платили криптой?" },
          { href: "#kriptodan-somga-otsangiz-qaysi-tolov", label: "Какие способы оплаты есть, если перейти с крипты на сумы?" },
          { href: "#somda-stars-yoki-premium-olish", label: "Как купить Stars или Premium за сумы: 5 шагов" },
          { href: "#kripto-yoki-som-qaysi-yol", label: "Крипта или сумы: какой путь кому удобнее?" },
          { href: "#hamyonda-kripto-qolgan-bolsa-nima", label: "Что делать, если в кошельке осталась крипта?" },
          { href: "#walt-bahonasidagi-aldovlarni-qanday-tanish", label: "Как распознать обман под предлогом «Walt»?" },
          { href: "#bot-buyurtmani-yetkazmasa-tekshiruv-tartibi", label: "Бот не доставил заказ: порядок проверки" },
        ]}
      />
      <h2 id="wallet-orqali-olgan-yulduzlaringiz-qayerda">Где хранятся звёзды, купленные через @wallet?</h2>
      <p>Даже если вы платили криптой, после покупки звёзды не остаются в кошельке. Они зачисляются на баланс Stars вашего аккаунта Telegram. Premium — это подписка, подключённая к аккаунту, и от названия приложения-кошелька она не зависит.</p>
      <p>Иначе говоря, монеты в кошельке и Stars — два разных баланса. Первое — криптоактив, второе — платёжная единица внутри Telegram. Подробно о различиях — в статье <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet и Stars: в чём разница</Link>.</p>
      <p>Текущее состояние можно проверить самостоятельно за минуту:</p>
      <ul>
        <li><b>Баланс Stars</b> — в разделе Stars в настройках Telegram. Запишите число или сделайте скриншот, чтобы потом было с чем сравнить.</li>
        <li><b>Статус Premium</b> — в разделе Premium в настройках. Если подписка отображается как активная, разговоры вокруг кошелька её не затронули.</li>
      </ul>
      <h2 id="postdagi-gaplardan-qaysi-biri-xaridingizga">Какие утверждения из поста касаются вашей покупки?</h2>
      <p>Тема разошлась из одного поста в Telegram-канале. В нём говорится, что Wallet пропал из настроек, а на сайте wallet.tg появились надпись «Wallet becomes Walt» и новый логотип. Пост в канале — не официальный источник. Поэтому мы разобрали каждое утверждение с точки зрения покупателя.</p>
      <CompareTable
        headers={["Утверждение из поста", "В официальных источниках", "Для того, кто покупает Stars или Premium"]}
        rows={[
          ["Wallet переименовывают в Walt, логотип обновлён", "На telegram.org и ton.org подтверждения не нашлось", "Воспринимайте как слух"],
          ["Wallet убрали из настроек", "На telegram.org объявления не нашлось", "На покупку за сумы не влияет"],
          ["Дата запуска нового названия", "Официальной даты нет", "Ждите дату в официальном блоге"],
          ["Судьба старых остатков", "Официальной информации нет", "Доверяйте только сообщениям самого приложения"],
        ]}
      />
      <p>В документации ton.org встроенный кошелёк Telegram называется <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">Telegram Money</a> и предназначен для Gram. Слова «Walt» там нет. Поэтому считать Wallet из поста и Telegram Money одним и тем же продуктом нет оснований.</p>
      <Notice label={"Важно"}>Официальные новости ищите в <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">блоге Telegram</a> или на страницах <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>. Пересказы поста и скриншоты в других каналах подтверждением не являются.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="kripto-bilan-qaysi-hamyondan-tolagan">Из какого кошелька вы платили криптой?</h2>
      <p>Под словом «кошелёк» многие смешивают сразу несколько вещей. Если понять, чем именно вы пользовались, станет ясно, касается вас этот пост или нет.</p>
      <CompareTable
        headers={["Что это", "Где отображается", "Что известно"]}
        rows={[
          ["Бот @wallet", "Отдельный бот и мини-приложение в Telegram", "Переименование в «Walt» — только утверждение из поста"],
          ["Telegram Money", "Пункт «Money» в главном меню Telegram Desktop", "Кошелёк в основной сети TON: принимает активы, подключается к dApp через TON Connect"],
          ["TON-баланс канала", "Экран, который открывает ссылка «tg://ton»", "Отдельный баланс, связанный с монетизацией канала, это не Telegram Money"],
          ["Telegram Stars", "Раздел Stars в настройках", "Баланс внутри аккаунта; для покупки за сумы кошелёк не нужен"],
        ]}
      />
      <p>По данным ton.org, пункт «Money» в Desktop появляется, только если Telegram включил доступ к кошельку для вашего аккаунта. Если вы его не видите, это не сбой, и покупке Stars это не мешает.</p>
      <p>Какое окно открывает ссылка @wallet на компьютере, разобрано в статье <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">Ссылка @wallet в Telegram Desktop</Link>. Другие утверждения о пункте «Money» и кошельке Gram мы проверили в материале <Link href="/blog/telegram-money-bolimi-gram-wallet">Раздел «Money» в Telegram и GRAM Wallet</Link>.</p>
      <h2 id="kriptodan-somga-otsangiz-qaysi-tolov">Какие способы оплаты есть, если перейти с крипты на сумы?</h2>
      <p>На каких условиях сейчас работают покупки внутри кошелька, в этой статье не подтверждено. Если хотите продолжать этим путём, смотрите условия в самом приложении.</p>
      <p>Для оплаты в сумах не нужны ни кошелёк, ни остаток в крипте, ни международная карта, ни VPN. StarsPaymee — независимый сервис в Узбекистане, компании Telegram он не принадлежит. В @StarsPaymee_bot доступны такие способы оплаты:</p>
      <ul>
        <li><b>Click, Payme или Uzum</b> — из приложения на телефоне;</li>
        <li><b>Paynet</b> — в приложении или наличными в терминале;</li>
        <li><b>перевод на карту UzCard или HUMO</b>;</li>
        <li><b>баланс бота</b> — если он пополнен заранее.</li>
      </ul>
      <p>Цена Stars зависит от способа оплаты:</p>
      <ul>
        <li>переводом на карту или с баланса бота — 1 Stars {som(STARS_PER_UNIT_UZS, "ru")};</li>
        <li>через Click, Payme, Uzum или Paynet — 1 Stars {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
      </ul>
      <p>Цена Premium одинакова при любом способе, без наценки: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена указана в боте. Актуальные условия собраны на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <h2 id="somda-stars-yoki-premium-olish">Как купить Stars или Premium за сумы: 5 шагов</h2>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите услугу"}>Stars (минимум 50 штук) или Premium (1, 3, 6 или 12 месяцев).</Step>
        <Step title={"Укажите @username"}>свой или друга. Пароль, SMS-код или вход в аккаунт не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>итоговая сумма видна в боте до оплаты.</Step>
        <Step title={"Оплатите и проверьте"}>заказ обычно доставляется автоматически за несколько секунд, примерно за 5 секунд.</Step>
      </Steps>
      <p>Premium подключается по username, через механизм подарков Telegram. Например, если хотите оформить брату Premium на 3 месяца, на 3-м шаге укажите его @username — остальное не меняется.</p>
      <p>Набирать username вручную рискованно. Если вместо @aziz_dev написать @azizdev, заказ может уйти другому человеку. Надёжнее скопировать имя из профиля.</p>
      <p>Есть одно исключение: если на аккаунте уже активен Premium, бот не откроет новый заказ Premium. Срок не добавляется поверх действующей подписки — нужно дождаться её окончания. Подробно эта ситуация разобрана в статье <Link href="/blog/telegram-premium-muddatini-uzaytirish">Можно ли продлить Telegram Premium</Link>.</p>
      <h2 id="kripto-yoki-som-qaysi-yol">Крипта или сумы: какой путь кому удобнее?</h2>
      <CompareTable
        headers={["Критерий", "Через кошелёк и крипту", "Через StarsPaymee за сумы"]}
        rows={[
          ["Что нужно", "Кошелёк, остаток в крипте, средства на комиссию сети", "Только @username"],
          ["Чем платите", "Криптоактив", "Click, Payme, Uzum, Paynet, UzCard/HUMO или баланс бота"],
          ["Как выглядит цена", "Меняется вместе с курсом крипты", "Итоговая сумма в сумах показывается в боте"],
          ["Отправка другому человеку", "Зависит от условий приложения", "Достаточно указать его @username"],
          ["Зависимость от слухов про «Walt»", "Изменения в приложении-кошельке могут повлиять", "От кошелька не зависит"],
          ["Кому удобно", "Тем, у кого есть крипта и кто хочет её потратить", "Тем, у кого нет крипты или кто считает расходы в сумах"],
        ]}
      />
      <p>В криптовалютном варианте цена колеблется вместе с курсом и комиссией сети, поэтому цифр здесь не приводим. Если Stars нужны время от времени и понемногу — на реакцию в канале или небольшой подарок, — покупать крипту ради пополнения кошелька — лишний шаг. За сумы можно взять от 50 Stars.</p>
      <h2 id="hamyonda-kripto-qolgan-bolsa-nima">Что делать, если в кошельке осталась крипта?</h2>
      <p>Пока официального объявления нет, торопиться переводить, продавать или тратить остаток из-за одного поста незачем. Спешка чаще всего заканчивается ошибкой в адресе или встречей с мошенником.</p>
      <p>Если ваш кошелёк — именно Telegram Money, в документации ton.org указано следующее:</p>
      <ul>
        <li>с текущей фразой восстановления кошелёк можно перенести в другое совместимое приложение;</li>
        <li>можно отключить облачную резервную копию или сменить ключ подписи, не меняя адрес кошелька;</li>
        <li>в зашифрованной облачной копии ключ делится на три части и хранится в дата-центрах на трёх континентах;</li>
        <li>кошелёк работает на контракте <a href={"https://docs.ton.org/contracts/standard/wallets/telegram/overview"} target="_blank" rel="noopener noreferrer">WalletTg</a>; для его обновлений требуется более 75% общего веса валидаторов, и обойти это не может даже Telegram;</li>
        <li>владелец кошелька не может отказаться от этих обновлений.</li>
      </ul>
      <Notice label={"Важно"}>Эти факты относятся только к Telegram Money. Переносить их на бот @wallet нельзя: по средствам в нём ориентируйтесь только на официальные сообщения самого приложения.</Notice>
      <p>Если вас удивило, что в кошельке вместо Toncoin теперь написано Gram, об этом — в статье <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.</p>
      <h2 id="walt-bahonasidagi-aldovlarni-qanday-tanish">Как распознать обман под предлогом «Walt»?</h2>
      <p>Шумиха вокруг переименования — удобный повод для мошенников. Вот сценарии, которых стоит ждать:</p>
      <ul>
        <li>просят фразу восстановления, чтобы «перенести кошелёк в Walt»;</li>
        <li>требуют перейти по неизвестной ссылке, чтобы «сохранить баланс Stars»;</li>
        <li>фейковый бот или канал с «Premium за полцены в Walt»;</li>
        <li>предлагают «выкупить ваши звёзды до перехода на Walt».</li>
      </ul>
      <p>Как защититься:</p>
      <ul>
        <li><b>Держите фразу в секрете.</b> По данным ton.org, фраза восстановления даёт контроль над кошельком и средствами, и делиться ею в открытом виде нельзя. Любой, кто её просит, — сигнал опасности.</li>
        <li><b>Проверяйте ссылки на перевод.</b> Ссылка «t.me/sendgrams» принимает те же параметры, что и «tg://sendgrams». Если такая ссылка открылась, перед подтверждением сами проверьте получателя и сумму.</li>
        <li><b>Знайте, кто что запрашивает.</b> StarsPaymee просит только @username и не покупает у пользователей Stars и подарки. Если от его имени предлагают выкупить звёзды — это обман.</li>
        <li><b>Берите адреса из одного места.</b> Аккаунты бота и поддержки сверяйте в канале <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a>.</li>
      </ul>
      <h2 id="bot-buyurtmani-yetkazmasa-tekshiruv-tartibi">Бот не доставил заказ: порядок проверки</h2>
      <ul>
        <li>Перепроверьте указанный @username: хватит ошибки даже в одной букве.</li>
        <li>Посмотрите статус оплаты в боте: если платёж не подтверждён, заказ ещё не выполнен.</li>
        <li>Если не пришёл Premium, выясните, не было ли на аккаунте уже активной подписки — в этом случае бот новый заказ не открывает.</li>
        <li>Если не видно Stars, перезапустите Telegram и сравните баланс с числом до заказа.</li>
      </ul>
      <Notice label={"Важно"}>Если проблема не решилась, отправьте чек об оплате и данные заказа в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Другие ситуации разобраны в статье <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Что делать, если не пришли Stars</Link>.</Notice>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/contracts/standard/wallets/telegram/overview", label: "WalletTg: Telegram wallet contract" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Не сгорят ли 500 Stars, которые я купил криптой месяц назад, если кошелёк переименуют?", answer: "Звёзды хранятся не в кошельке, а на балансе Stars вашего аккаунта. Официальных данных о том, что переименование на них повлияет, нет — просто сверьте число в настройках." },
  { question: "Можно будет купить Premium прямо внутри Walt?", answer: "Сам Walt официальными источниками не подтверждён, его возможности неизвестны. А чтобы купить Premium за сумы, кошелёк не нужен — достаточно указать @username." },
  { question: "Нужно ли сначала включить кошелёк Telegram Money, чтобы купить Stars?", answer: "Нет. В @StarsPaymee_bot оплата идёт в сумах — через Click, Payme, Uzum, Paynet, перевод на UzCard/HUMO или с баланса бота." },
  { question: "В меню нет ни Wallet, ни Money. Получится оформить Premium?", answer: "Да. Пункт «Money» появляется только на аккаунтах, где Telegram включил кошелёк, а Premium подключается по username через механизм подарков Telegram." },
  { question: "Можно продать StarsPaymee остаток Gram из кошелька и получить взамен Stars?", answer: "Такой услуги нет: покупки оплачиваются в сумах, а Stars и подарки StarsPaymee у пользователей не выкупает. Будьте осторожны с теми, кто предлагает подобное." },
  { question: "Если платить через Payme, выйдет дороже, чем переводом на карту?", answer: `Для Stars — да: при онлайн-оплате 1 Stars стоит ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}, переводом на карту или с баланса бота — ${som(STARS_PER_UNIT_UZS, "ru")}. Цена Premium при любом способе одинакова.` },
  { question: "Мой Premium ещё не закончился. Можно заранее докупить 12 месяцев?", answer: "Нельзя: на аккаунт с активной подпиской бот не открывает новый заказ Premium. Когда подписка закончится, выберите нужный срок и оформите заново." },
  { question: "Кто-то представляется сотрудником кошелька и просит фразу из 24 слов. Что делать?", answer: "Ничего не отправляйте — это признак мошенничества. Тот, кто знает фразу восстановления, может распоряжаться кошельком и деньгами в нём, поэтому собеседника лучше заблокировать." },
  { question: "Сработает ли заказ, если оформлять его из Telegram на компьютере?", answer: "Да, @StarsPaymee_bot открывается и в Telegram Desktop. Даже если какая-то ссылка открыла окно кошелька, заказу за сумы это не помешает." },
  { question: "Как узнать, если новость про Walt окажется правдой?", answer: "Ждите официального объявления в блоге telegram.org или на страницах ton.org. Пока там ничего о «Walt» не нашлось." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Your Stars balance and active Premium period belong to your Telegram account, not to whatever the wallet app is called. There is no official information that “Wallet is becoming Walt” will delete or pause either of them. You don’t need a wallet or crypto for your next purchase: Stars and Premium can be bought in UZS with just an @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#wallet-orqali-olgan-yulduzlaringiz-qayerda", label: "Where do Stars bought through @wallet actually live?" },
          { href: "#postdagi-gaplardan-qaysi-biri-xaridingizga", label: "Which claims in the post actually affect your purchase?" },
          { href: "#kripto-bilan-qaysi-hamyondan-tolagan", label: "Which wallet did you pay with crypto from?" },
          { href: "#kriptodan-somga-otsangiz-qaysi-tolov", label: "Switching from crypto to UZS: which payment methods are there?" },
          { href: "#somda-stars-yoki-premium-olish", label: "Buying Stars or Premium in UZS: 5 steps" },
          { href: "#kripto-yoki-som-qaysi-yol", label: "Crypto or UZS: which route suits whom?" },
          { href: "#hamyonda-kripto-qolgan-bolsa-nima", label: "What if you still have crypto in the wallet?" },
          { href: "#walt-bahonasidagi-aldovlarni-qanday-tanish", label: "How to spot scams using “Walt” as bait" },
          { href: "#bot-buyurtmani-yetkazmasa-tekshiruv-tartibi", label: "If the bot doesn’t deliver: what to check" },
        ]}
      />
      <h2 id="wallet-orqali-olgan-yulduzlaringiz-qayerda">Where do Stars bought through @wallet actually live?</h2>
      <p>Even if you paid with crypto, the Stars don’t stay in the wallet once the purchase is done. They land in your Telegram account’s Stars balance. Premium is a subscription attached to your account, and it doesn’t depend on what the wallet app is named.</p>
      <p>In other words, coins in a wallet and Stars are two separate balances. One is a crypto asset, the other is a payment unit inside Telegram. The full breakdown is in <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <p>You can check where you stand in about a minute:</p>
      <ul>
        <li><b>Stars balance</b> — in the Stars section of Telegram settings. Note the number or take a screenshot so you can compare later.</li>
        <li><b>Premium status</b> — in the Premium section of settings. If the subscription shows as active, the wallet chatter hasn’t touched it.</li>
      </ul>
      <h2 id="postdagi-gaplardan-qaysi-biri-xaridingizga">Which claims in the post actually affect your purchase?</h2>
      <p>The story spread from a single Telegram channel post. It says Wallet disappeared from settings and that the wallet.tg site now shows “Wallet becomes Walt” with a new logo. A channel post is not an official source, so we went through each claim from a buyer’s point of view.</p>
      <CompareTable
        headers={["Claim in the post", "Official sources", "What it means if you buy Stars or Premium"]}
        rows={[
          ["Wallet is being renamed Walt, logo updated", "No confirmation found on telegram.org or ton.org", "Treat it as a rumor"],
          ["Wallet was removed from settings", "No announcement found on telegram.org", "No effect on buying in UZS"],
          ["Launch date of the new name", "No official date", "Wait for a date on the official blog"],
          ["What happens to existing balances", "No official information", "Trust only messages inside the app itself"],
        ]}
      />
      <p>The ton.org documentation calls Telegram’s built-in wallet <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">Telegram Money</a> and describes it as a wallet for Gram. The word “Walt” doesn’t appear there. So there’s no basis for saying the Wallet in the post and Telegram Money are the same product.</p>
      <Notice label={"Important"}>Look for official news on the <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blog</a> or on <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>. Reposts and screenshots in other channels are not confirmation.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="kripto-bilan-qaysi-hamyondan-tolagan">Which wallet did you pay with crypto from?</h2>
      <p>When people say “wallet”, they often mix up several different things. Once you know which one you used, it’s clear whether the post concerns you.</p>
      <CompareTable
        headers={["What it is", "Where you see it", "What is known"]}
        rows={[
          ["@wallet bot", "A separate bot and mini app inside Telegram", "Turning into “Walt” is only a claim from the post"],
          ["Telegram Money", "The “Money” item in the Telegram Desktop main menu", "A wallet on TON mainnet: receives assets, connects to dApps via TON Connect"],
          ["Channel TON balance", "The screen opened by the “tg://ton” link", "A separate balance tied to channel monetization, not Telegram Money"],
          ["Telegram Stars", "The Stars section in settings", "An in-account balance; no wallet needed to buy in UZS"],
        ]}
      />
      <p>According to ton.org, the “Money” item in Desktop only appears if Telegram has enabled wallet access for your account. If you don’t see it, that’s not a bug, and it doesn’t block you from buying Stars.</p>
      <p>What window the @wallet link opens on a computer is covered in <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">the @wallet link in Telegram Desktop</Link>. We checked other claims about the “Money” item and the Gram wallet in <Link href="/blog/telegram-money-bolimi-gram-wallet">Telegram’s “Money” section and GRAM Wallet</Link>.</p>
      <h2 id="kriptodan-somga-otsangiz-qaysi-tolov">Switching from crypto to UZS: which payment methods are there?</h2>
      <p>The current terms for buying inside the wallet are not confirmed in this article. If you want to keep using that route, check the terms in the app itself.</p>
      <p>The UZS route needs no wallet, no crypto balance, no international card and no VPN. StarsPaymee is an independent service in Uzbekistan and is not owned by Telegram. @StarsPaymee_bot accepts:</p>
      <ul>
        <li><b>Click, Payme or Uzum</b> — from the app on your phone;</li>
        <li><b>Paynet</b> — in the app or with cash at a terminal;</li>
        <li><b>UzCard or HUMO card transfer</b>;</li>
        <li><b>bot balance</b> — if you’ve topped it up in advance.</li>
      </ul>
      <p>The Stars price depends on how you pay:</p>
      <ul>
        <li>card transfer or bot balance — 1 Star costs {som(STARS_PER_UNIT_UZS, "en")};</li>
        <li>Click, Payme, Uzum or Paynet — 1 Star costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
      </ul>
      <p>Premium costs the same with every method, with no markup: 3 months — {som(premium(3), "en")}, 6 months — {som(premium(6), "en")}, 12 months — {som(premium(12), "en")}. There’s also a 1-month plan; its price is shown in the bot. Current terms are collected on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <h2 id="somda-stars-yoki-premium-olish">Buying Stars or Premium in UZS: 5 steps</h2>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the product"}>Stars (minimum 50) or Premium (1, 3, 6 or 12 months).</Step>
        <Step title={"Enter the @username"}>yours or a friend’s. No password, SMS code or account login is requested.</Step>
        <Step title={"Pick a payment method"}>the final amount is shown in the bot before you pay.</Step>
        <Step title={"Pay and check"}>the order is usually delivered automatically within a few seconds, around 5.</Step>
      </Steps>
      <p>Premium is activated via username using Telegram’s gifting mechanism. For example, if you want 3 months of Premium for your younger brother, you enter his @username at step 3 and everything else stays the same.</p>
      <p>Typing a username by hand is risky. Write @azizdev instead of @aziz_dev and the order may go to someone else. Copying it from the profile is safer.</p>
      <p>There’s one exception: if the account already has active Premium, the bot won’t open a new Premium order. The period isn’t stacked on top of an active subscription, so you have to wait for it to end. Details are in <Link href="/blog/telegram-premium-muddatini-uzaytirish">extending your Premium period</Link>.</p>
      <h2 id="kripto-yoki-som-qaysi-yol">Crypto or UZS: which route suits whom?</h2>
      <CompareTable
        headers={["Criterion", "Via wallet and crypto", "Via StarsPaymee in UZS"]}
        rows={[
          ["What you need", "A wallet, a crypto balance, funds for network fees", "Just an @username"],
          ["Means of payment", "A crypto asset", "Click, Payme, Uzum, Paynet, UzCard/HUMO or bot balance"],
          ["How the price looks", "Changes with the crypto rate", "Final amount shown in UZS in the bot"],
          ["Sending to someone else", "Depends on the app’s terms", "Entering their @username is enough"],
          ["Exposure to the “Walt” rumor", "Changes to the wallet app may affect it", "Doesn’t depend on any wallet"],
          ["Best for", "People who hold crypto and want to use it", "People without crypto or who keep their budget in UZS"],
        ]}
      />
      <p>On the crypto route the price moves with the exchange rate and network fees, so we don’t quote numbers here. If you only need a few Stars now and then for a channel reaction or a small gift, buying crypto to fund a wallet is an extra step. In UZS you can start from 50 Stars.</p>
      <h2 id="hamyonda-kripto-qolgan-bolsa-nima">What if you still have crypto in the wallet?</h2>
      <p>With no official announcement, there’s no reason to rush moving, selling or spending your balance just because of a post. Hasty moves often end in a wrong address or a scammer.</p>
      <p>If your wallet is specifically Telegram Money, the ton.org documentation says:</p>
      <ul>
        <li>you can import the wallet into another compatible app using the current recovery phrase;</li>
        <li>you can disable cloud backup or rotate the signing key without changing the wallet address;</li>
        <li>in the encrypted cloud backup, the key is split into three parts stored in data centers on three continents;</li>
        <li>the wallet uses the <a href={"https://docs.ton.org/contracts/standard/wallets/telegram/overview"} target="_blank" rel="noopener noreferrer">WalletTg</a> contract, whose upgrades require more than 75% of total validator weight, and not even Telegram can bypass that;</li>
        <li>the wallet owner cannot opt out of these upgrades.</li>
      </ul>
      <Notice label={"Important"}>These facts apply only to Telegram Money. They can’t be carried over to the @wallet bot: for funds there, rely only on the app’s official messages.</Notice>
      <p>If you were surprised to see Gram instead of Toncoin in your wallet, that’s covered in <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</p>
      <h2 id="walt-bahonasidagi-aldovlarni-qanday-tanish">How to spot scams using “Walt” as bait</h2>
      <p>Buzz around a name change gives scammers a convenient excuse. Scenarios to expect:</p>
      <ul>
        <li>asking for your recovery phrase “to migrate the wallet to Walt”;</li>
        <li>demanding you open an unknown link “to keep your Stars balance”;</li>
        <li>a fake bot or channel offering “half-price Premium in Walt”;</li>
        <li>an offer to “buy your Stars before the switch to Walt”.</li>
      </ul>
      <p>How to protect yourself:</p>
      <ul>
        <li><b>Keep the phrase secret.</b> According to ton.org, the recovery phrase gives control of the wallet and funds and should never be shared in plain text. Anyone asking for it is a red flag.</li>
        <li><b>Check transfer links.</b> The “t.me/sendgrams” link accepts the same parameters as “tg://sendgrams”. If such a link opens, look at the recipient and amount yourself before confirming.</li>
        <li><b>Know who asks for what.</b> StarsPaymee only asks for an @username and does not buy Stars or gifts from users. An offer to buy your Stars in its name is a scam.</li>
        <li><b>Get addresses from one place.</b> Verify the bot and support accounts via the <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> channel.</li>
      </ul>
      <h2 id="bot-buyurtmani-yetkazmasa-tekshiruv-tartibi">If the bot doesn’t deliver: what to check</h2>
      <ul>
        <li>Re-read the @username you entered: a single typo is enough.</li>
        <li>Check the payment status in the bot: if the payment isn’t confirmed, the order hasn’t been processed yet.</li>
        <li>If Premium doesn’t arrive, find out whether the account already had an active subscription — in that case the bot doesn’t open a new order.</li>
        <li>If Stars don’t show up, reopen Telegram and compare the balance with the number you noted before ordering.</li>
      </ul>
      <Notice label={"Important"}>If that doesn’t solve it, send the payment receipt and order details to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Other cases are covered in <Link href="/blog/telegram-stars-kelmadi-nima-qilish">what to do if Stars didn’t arrive</Link>.</Notice>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/contracts/standard/wallets/telegram/overview", label: "WalletTg: Telegram wallet contract" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I bought 500 Stars with crypto a month ago. Will they vanish when the name changes?", answer: "Your Stars sit in your account’s Stars balance, not in the wallet. There’s no official information that a name change affects them — just check the number in settings." },
  { question: "Will I be able to buy Premium inside Walt?", answer: "Walt itself isn’t confirmed by official sources, so its features are unknown. To buy Premium in UZS you don’t need a wallet at all — an @username is enough." },
  { question: "Do I have to turn on the Telegram Money wallet before buying Stars?", answer: "No. In @StarsPaymee_bot you pay in UZS via Click, Payme, Uzum, Paynet, a UzCard/HUMO transfer or the bot balance." },
  { question: "I see neither Wallet nor Money in the menu. Can I still get Premium?", answer: "Yes. The “Money” item only appears on accounts where Telegram has enabled the wallet, while Premium is activated via username through Telegram’s gifting mechanism." },
  { question: "Can I sell my Gram balance to StarsPaymee and get Stars in return?", answer: "No such service exists: purchases are paid in UZS, and StarsPaymee doesn’t buy Stars or gifts from users either. Be wary of anyone offering this." },
  { question: "Is paying with Payme more expensive than a card transfer?", answer: `For Stars, yes: with online payment 1 Star costs ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}, via card transfer or bot balance ${som(STARS_PER_UNIT_UZS, "en")}. Premium costs the same with every method.` },
  { question: "My Premium hasn’t expired yet. Can I add another 12 months in advance?", answer: "No: the bot doesn’t open a new Premium order for an account with an active subscription. Once it ends, pick the period you want and buy again." },
  { question: "Someone claiming to be wallet staff is asking for my 24-word phrase. What should I do?", answer: "Send nothing — this is a scam sign. Whoever knows the recovery phrase can control the wallet and its funds, so block the person." },
  { question: "Does ordering from Telegram on a computer work?", answer: "Yes, @StarsPaymee_bot opens in Telegram Desktop too. Even if some link pops up a wallet window, it won’t interfere with an order paid in UZS." },
  { question: "If the Walt news turns out to be true, how will I find out?", answer: "Wait for an official announcement on the telegram.org blog or ton.org pages. So far nothing about “Walt” has been found there." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["walt telegram stars","wallet walt telegram","telegram walt nima","walt stars sotib olish","wallet o‘rniga walt premium","telegram stars so‘mda kriptosiz","walt телеграм старс","wallet стал walt","telegram wallet walt звезды","купить telegram stars без крипты узбекистан","telegram premium сумы без кошелька"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki uning Mini App’ini." },
    { name: "Xizmatni tanlang", text: "Stars (eng kami 50 dona) yoki Premium (1, 3, 6 yoki 12 oy)." },
    { name: "@username kiriting", text: "o‘zingizniki yoki do‘stingizniki. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi." },
    { name: "To‘lov usulini tanlang", text: "yakuniy summa to‘lovdan oldin botda ko‘rinadi." },
    { name: "To‘lang va tekshiring", text: "buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi." },
  ],
  locales: {
    uz: {
      title: "Walt Telegram Stars: @wallet o‘rniga Stars va Premium’ni so‘mda qanday olish",
      excerpt: "Stars balansi va Premium akkauntga bog‘langan, Walt haqidagi post esa rasman tasdiqlanmagan — xarid uchun hamyon shart emas. Maqolada so‘mda olish qadamlari, to‘lov usullari va aldov belgilari bor.",
      metaTitle: "Walt Telegram Stars: @wallet o‘rniga Stars",
      metaDescription: "Stars balansi va Premium akkauntga bog‘langan, Walt haqidagi post esa rasman tasdiqlanmagan — xarid uchun hamyon shart emas.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Walt вместо @wallet: как купить Telegram Stars и Premium за сумы",
      excerpt: "Баланс Stars и Premium привязаны к аккаунту, а пост про Walt официально не подтверждён — кошелёк для покупки не нужен. В статье: шаги покупки за сумы, способы оплаты и признаки обмана.",
      metaTitle: "Walt вместо @wallet: как купить Telegram Stars",
      metaDescription: "Баланс Stars и Premium привязаны к аккаунту, а пост про Walt официально не подтверждён — кошелёк для покупки не нужен.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Wallet becoming Walt? How to buy Telegram Stars and Premium in UZS instead",
      excerpt: "The Walt rumor is officially unconfirmed, and your Stars and Premium live in your Telegram account, not a wallet. This guide shows how to buy both in UZS, which payment methods work and how to spot scams.",
      metaTitle: "Wallet becoming Walt? How to buy Telegram Stars",
      metaDescription: "The Walt rumor is officially unconfirmed, and your Stars and Premium live in your Telegram account, not a wallet.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
