import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "macos-telegram-hamyoni-stars-gram-yoki-som";

/**
 * macOS Telegram hamyonidagi Gram bilan Stars olaymi yoki so‘mda olgan qulaymi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-12): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram’ning macOS beta’sida ichki TON hamyoni va chatdagi manzil oynasini ko‘rgan foydalanuvchi Stars yoki Premium’ni shu hamyondagi Gram bilan olish kerakmi yoki so‘mda olish qulaymi, buni «macOS Telegram hamyon Stars Gram bilan sotib olish» kabi so‘zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-12):
 *   https://core.telegram.org/bots/api-changelog
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
  return <p>Yo‘q, Mac’dagi yangi hamyon Stars yoki Premium olish uchun shart emas. Stars balansi Telegram akkauntingizga yoziladi, hamyondagi Gram esa alohida aktiv. Biz ko‘rgan rasmiy hujjatlarda Stars’ni Gram bilan to‘lash imkoni tasdiqlanmagan. So‘mda olish oson: @StarsPaymee_bot’da faqat @username kiritasiz, karta, Click, Payme, Uzum yoki Paynet bilan to‘laysiz, yulduzlar odatda bir necha soniyada keladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#macdagi-hamyon-stars-xarid-qilish", label: "Mac’dagi hamyon Stars xarid qilish tartibini o‘zgartiradimi?" },
          { href: "#ichki-hamyon-haqida-nima-rasman", label: "Ichki hamyon haqida nima rasman tasdiqlangan?" },
          { href: "#gram-bilan-yoki-somda-ikki", label: "Gram bilan yoki so‘mda: ikki yo‘l yonma-yon" },
          { href: "#ilovada-gram-bilan-tolash-tugmasi", label: "Ilovada Gram bilan to‘lash tugmasi chiqsa, narxni qanday solishtirasiz?" },
          { href: "#qachon-somdagi-yol-maqulroq", label: "Qachon so‘mdagi yo‘l ma’qulroq?" },
          { href: "#macdan-starsni-somda-olish-5", label: "Mac’dan Stars’ni so‘mda olish: 5 qadam" },
          { href: "#premiumni-ham-hamyonsiz-olsa-boladimi", label: "Premium’ni ham hamyonsiz olsa bo‘ladimi?" },
          { href: "#gramda-tolasangiz-arzonroq-degan-taklif", label: "«Gram’da to‘lasangiz arzonroq» degan taklif kelsa nima qilasiz?" },
          { href: "#xariddan-keyin-macda-stars-yoki", label: "Xariddan keyin Mac’da Stars yoki Premium ko‘rinmasa" },
        ]}
      />
      <h2 id="macdagi-hamyon-stars-xarid-qilish">Mac’dagi hamyon Stars xarid qilish tartibini o‘zgartiradimi?</h2>
      <p>Yo‘q. Telegram ichida TON hamyoniga oid elementlar ko‘payayotgani rost, lekin bu Stars qanday sotib olinishiga ta’sir qilmaydi.</p>
      <p>Ikkalasi ikki xil narsa:</p>
      <ul>
        <li><b>Stars</b> — Telegram akkauntidagi ichki balans. U reaksiya, sovg‘a, bot va kanallardagi to‘lovlar uchun ishlatiladi.</li>
        <li><b>Gram</b> — blokcheyndagi hamyon manzilida turadigan tanga. Uni Telegram akkauntidagi balans deb bo‘lmaydi.</li>
      </ul>
      <p>Hamyonni Telegram oynasida ko‘rish ular bir-biriga ulanganini anglatmaydi. Gram hamyonda tursa ham, Stars balansingiz o‘zgarmaydi. Teskarisi ham shunday. Ikki balansning farqi <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida batafsil yozilgan.</p>
      <p>Demak, Mac’da beta versiya o‘rnatgan bo‘lsangiz ham, o‘rnatmagan bo‘lsangiz ham, Stars olish tartibi bir xil qoladi.</p>
      <h2 id="ichki-hamyon-haqida-nima-rasman">Ichki hamyon haqida nima rasman tasdiqlangan?</h2>
      <p>Telegram kanallarida macOS beta’dagi hamyon oynasi haqida turli gaplar yuribdi. Ularni <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API o‘zgarishlar ro‘yxati</a> va <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjati</a> bilan solishtirdik. Natija quyidagicha:</p>
      <CompareTable
        headers={["Da’vo", "Holati", "Qayerda yozilgan"]}
        rows={[
          ["Xabardagi TON manzil alohida obyekt sifatida ajratiladi", "Tasdiqlangan", "Bot API 10.4, «ton_address» turi"],
          ["RichMessage ichidagi TON manzil uchun alohida klass bor", "Tasdiqlangan", "Bot API 10.4, RichTextTonAddress"],
          ["Hamyon kartasi va NFT uchun klasslar qo‘shilgan", "Tasdiqlangan", "Bot API 10.4, TonWalletCard, TonNft"],
          ["Shaxsiy chatda foydalanuvchining hamyon kartasi profil sahifasida ko‘rinadi", "Tasdiqlangan", "Bot API, ton_wallet_card maydoni"],
          ["Hamyon o‘tkazmasi haqida xizmat xabari bor", "Tasdiqlangan", "Bot API 10.4, TonWalletTransfer"],
          ["macOS’da manzil bosilsa alohida oyna ochiladi", "Tasdiqlanmagan", "Faqat kanal postlari"],
          ["Oynadan hamyon egasini ko‘rish, eksplorerni ochish yoki pul yuborish mumkin", "Tasdiqlanmagan", "Faqat kanal postlari"],
          ["Funksiya qaysi versiyada va qachon chiqqani", "Topilmagan", "—"],
          ["Stars’ni Gram bilan to‘lash", "Ko‘rilgan hujjatlarda yo‘q", "—"],
        ]}
      />
      <p>Bot API klasslari Telegram’da shunday obyektlar borligini ko‘rsatadi. Lekin ular macOS ilovasida qanday ko‘rinishi va qaysi tugmalar chiqishi haqida hech narsa aytmaydi. Xaridni rejalashtirayotganda «tasdiqlanmagan» qatorlarga tayanmang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="gram-bilan-yoki-somda-ikki">Gram bilan yoki so‘mda: ikki yo‘l yonma-yon</h2>
      <p>Hamyonda Gram turgan bo‘lsa, Stars’ni shu bilan olish xayolga kelishi tabiiy. Ammo bu yo‘lning shartlari rasmiy manbada topilmadi. Shuning uchun Gram ustunidagi ko‘p kataklar ochiq qoldirildi.</p>
      <CompareTable
        headers={["Mezon", "Hamyondagi Gram", "So‘mda, @StarsPaymee_bot"]}
        rows={[
          ["Nima kerak", "Hamyon va unda yetarli Gram", "Faqat @username"],
          ["1 ta Stars narxi", "Ilovada chiqsa, o‘sha yerda tekshiring", `Karta o‘tkazmasi yoki balansdan ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum, Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Xarajatni so‘mda bilish", "Gram kursiga qarab hisoblaysiz", "Yakuniy summa to‘lovdan oldin so‘mda chiqadi"],
          ["Kripto, xalqaro karta, VPN", "Kripto hamyon kerak", "Kerak emas"],
          ["Eng kam miqdor", "Bu maqolada tasdiqlanmagan", "50 Stars"],
          ["Yetkazish", "Bu maqolada tasdiqlanmagan", "Odatda bir necha soniya (taxminan 5 soniya)"],
          ["Boshqa odamga olish", "Bu maqolada tasdiqlanmagan", "Oluvchining @username’i yetarli"],
        ]}
      />
      <p>Narxlar va to‘lov usullari <Link href="/stars">Stars sahifasida</Link> bir joyga yig‘ilgan. Umumiy yo‘riqnoma <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">O‘zbekistonda Telegram Stars sotib olish</Link> maqolasida.</p>
      <h2 id="ilovada-gram-bilan-tolash-tugmasi">Ilovada Gram bilan to‘lash tugmasi chiqsa, narxni qanday solishtirasiz?</h2>
      <p>Kelajakda ilovada shunday tugma paydo bo‘lishi mumkin. Unda shoshilmay, ikkala narxni bir valyutada solishtiring.</p>
      <Steps>
        <Step title={"Gram summasini yozib oling"}>kerakli miqdordagi Stars uchun ilova so‘ragan Gram’ni yozing.</Step>
        <Step title={"So‘mga aylantiring"}>Gram’ni o‘sha kundagi kurs bo‘yicha so‘mga hisoblang. Gram’ni yaqinda sotib olgan bo‘lsangiz, aslida qanchaga olganingizni ham hisobga oling.</Step>
        <Step title={"Botdagi summani ko‘ring"}>@StarsPaymee_bot’da o‘sha miqdorni tanlab, yakuniy summani ko‘ring. Buning uchun to‘lash shart emas.</Step>
        <Step title={"Taqqoslang"}>qaysi raqam kichik chiqsa, o‘sha yo‘l arzonroq.</Step>
      </Steps>
      <p>Misol: sizga 1 000 Stars kerak. Botda karta o‘tkazmasi bilan to‘lasangiz, bitta yulduz {som(STARS_PER_UNIT_UZS, "uz")} turadi, ya’ni jami shuning 1 000 baravari. Click yoki Payme bilan dona narxi {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} bo‘ladi. Shu ikki summani ilovadagi Gram narxining so‘mdagi qiymati bilan solishtiring.</p>
      <p>Yana bir narsani unutmang: hamyonda Gram bo‘lmasa, uni avval qayerdandir olishingiz kerak. Bu qo‘shimcha qadam va ko‘pincha qo‘shimcha xarajat demak. Uni ham hisob-kitobga qo‘shing.</p>
      <h2 id="qachon-somdagi-yol-maqulroq">Qachon so‘mdagi yo‘l ma’qulroq?</h2>
      <p>Quyidagi vaziyatlarda so‘mda olish ancha qulay:</p>
      <ul>
        <li><b>Gram kam yoki umuman yo‘q.</b> Hamyonni to‘ldirish yulduz olishdan ko‘ra ko‘proq vaqt oladi.</li>
        <li><b>Byudjetni oldindan bilmoqchisiz.</b> Botda summa to‘lovdan oldin so‘mda chiqadi, kursni o‘zingiz hisoblashingiz kerak emas.</li>
        <li><b>Ozgina yulduz kerak.</b> Botda eng kam buyurtma — 50 Stars, ko‘p miqdor olish majburiyati yo‘q.</li>
        <li><b>Boshqa odamga olib bermoqchisiz.</b> Uning hamyon manzili kerak emas, faqat @username’i. Batafsil: <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">boshqa odamga Stars sotib olish</Link>.</li>
        <li><b>Mac’da beta versiya yo‘q.</b> Botdagi xarid ilova versiyasiga bog‘liq emas.</li>
        <li><b>Gram’ni boshqa maqsadga saqlayapsiz.</b> Uni Stars’ga sarflamasdan ham yulduz olasiz. Gram va Toncoin aloqasi <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasida.</li>
      </ul>
      <h2 id="macdan-starsni-somda-olish-5">Mac’dan Stars’ni so‘mda olish: 5 qadam</h2>
      <p>Mac’dagi oddiy Telegram yetarli: beta versiya ham, hamyon ham kerak emas.</p>
      <Steps>
        <Step title={"Botni oching"}>Telegram qidiruviga @StarsPaymee_bot deb yozing yoki <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">shu havola</a> orqali kiring. Mini App ham ishlaydi.</Step>
        <Step title={"Username kiriting"}>o‘zingizning yoki yulduz oladigan odamning @username’ini yozing. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"Miqdorni tanlang"}>kamida 50 Stars.</Step>
        <Step title={"To‘lov usulini belgilang"}>UzCard/HUMO kartaga o‘tkazma yoki bot balansi (dona narxi {som(STARS_PER_UNIT_UZS, "uz")}) yoxud Click, Payme, Uzum, Paynet (dona narxi {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}). Paynet’da ilova yoki terminal orqali naqd pul bilan ham to‘lash mumkin.</Step>
        <Step title={"To‘lang va balansni tekshiring"}>yulduzlar odatda bir necha soniyada keladi. Balansni qayerdan ko‘rish <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasida yozilgan.</Step>
      </Steps>
      <p>Kompyuterda ba’zan bot o‘rniga hamyon oynasi ochilib qoladi va odam adashadi. Bu oynalarni qanday farqlash <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">Telegram Desktop’da @wallet havolasi hamyon ochsa</Link> maqolasida tushuntirilgan.</p>
      <h2 id="premiumni-ham-hamyonsiz-olsa-boladimi">Premium’ni ham hamyonsiz olsa bo‘ladimi?</h2>
      <p>Ha. Premium @username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Botga Gram, hamyon manzili yoki karta ma’lumotini berishingiz shart emas.</p>
      <p>Narx hamma to‘lov usulida bir xil, ustamasiz:</p>
      <ul>
        <li>3 oy — {som(premium(3), "uz")};</li>
        <li>6 oy — {som(premium(6), "uz")};</li>
        <li>12 oy — {som(premium(12), "uz")}.</li>
      </ul>
      <p>1 oylik tarif ham bor, uning narxi botda ko‘rsatiladi.</p>
      <p>Bitta cheklovni oldindan biling. Akkauntda faol Premium obunasi bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat joriy obuna ustiga qo‘shilmaydi. Bunday holda obuna tugashini kuting yoki Premium’ni boshqa odamga sovg‘a qiling. Tariflar <Link href="/premium">Premium sahifasida</Link>.</p>
      <h2 id="gramda-tolasangiz-arzonroq-degan-taklif">«Gram’da to‘lasangiz arzonroq» degan taklif kelsa nima qilasiz?</h2>
      <p>Telegram’da hamyon ko‘proq ko‘zga tashlangani sari «Stars’ni Gram’ga sotaman» degan shaxsiy xabarlar ham ko‘payishi mumkin. Ular odatda shunday yoziladi:</p>
      <ul>
        <li>«Botdagidan arzon beraman, faqat Gram’da to‘lang»;</li>
        <li>«StarsPaymee’danman, to‘lovingiz o‘tmadi, Gram’da qayta yuboring»;</li>
        <li>«Stars’ingizni Gram’ga sotib olamiz, avval sinov uchun ozgina tashlang».</li>
      </ul>
      <p>Bunday xabarni ko‘rsangiz, quyidagilarni yodda tuting.</p>
      <p>Birinchidan, Telegram xabardagi manzilni alohida ajratib ko‘rsatishi uni ishonchli qilmaydi. Hujjatga ko‘ra, «ton_address» bor-yo‘g‘i xabardagi manzil turi. Bu sotuvchi tekshirilgani degani emas.</p>
      <p>Ikkinchidan, Stars sotuvchisiga sizning hamyoningiz kerak emas. Yulduz akkauntga @username orqali keladi. Kimdir hamyon manzili, kod yoki «sinov to‘lovi» so‘rasa, suhbatni to‘xtating.</p>
      <p>Uchinchidan, notanish manzilga ketgan Gram’ni qaytarib olish yo‘li bu maqolada tasdiqlanmagan. Shuning uchun yulduz uchun notanish odamga oldindan Gram yubormang.</p>
      <Notice label={"Muhim"}>StarsPaymee to‘lovni faqat so‘mda qabul qiladi: Click, Payme, Uzum, Paynet, UzCard/HUMO o‘tkazma yoki bot balansi. U TON manzilga o‘tkazma so‘ramaydi va foydalanuvchidan Stars yoki sovg‘a sotib olmaydi. Uning nomidan shunday taklif kelsa, bu aldov belgisi. Shubha tug‘ilsa, faqat <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> bilan bog‘laning.</Notice>
      <h2 id="xariddan-keyin-macda-stars-yoki">Xariddan keyin Mac’da Stars yoki Premium ko‘rinmasa</h2>
      <p>To‘lov qildingiz, lekin Mac’da hech narsa o‘zgarmadimi? Quyidagilarni tartib bilan tekshiring:</p>
      <ul>
        <li><b>Username.</b> Buyurtmadagi @username sizning akkauntingiznikimi? Bitta harf xato bo‘lsa, yulduz boshqa odamga ketadi.</li>
        <li><b>Ilova.</b> Telegram’ni yopib, qayta oching. Shu akkaunt telefonda ham ochiq bo‘lsa, balansni o‘sha yerda ham tekshiring. Stars qurilmaga emas, akkauntga yoziladi.</li>
        <li><b>Beta interfeysi.</b> Beta versiyada menyular joyi o‘zgargan bo‘lishi mumkin. Balans ko‘rinmasa, oddiy versiyada yoki telefonda tekshiring.</li>
        <li><b>Premium.</b> Ilovada obuna faollashgani ko‘rinadimi? Agar akkauntda Premium allaqachon faol bo‘lgan bo‘lsa, bot yangi buyurtmani ochmagan bo‘ladi.</li>
        <li><b>Chek.</b> Buyurtma ID va to‘lov chekini saqlang, keyin ularni @StarsPaymeeSupport’ga yuboring.</li>
      </ul>
      <p>Boshqa holatlar va ularning yechimi <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Telegram Stars kelmadi: nima qilish kerak</Link> maqolasida.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Telegram Stars’ni hamyondagi Gram bilan to‘g‘ridan-to‘g‘ri to‘lasa bo‘ladimi?", answer: "Biz ko‘rib chiqqan Bot API hujjatlarida bunday to‘lov tasvirlanmagan. Ilovada shunday tugma chiqsa, avval Gram summasini so‘mga aylantirib, botdagi narx bilan solishtiring." },
  { question: "Hamyondagi Gram va Stars balansi bitta hisobmi?", answer: "Yo‘q. Gram blokcheyndagi manzilda, Stars esa Telegram akkauntida turadi. Biri ikkinchisiga o‘z-o‘zidan aylanmaydi." },
  { question: "So‘mda Stars olish uchun Mac’ga beta versiyani o‘rnatishim kerakmi?", answer: "Kerak emas. @StarsPaymee_bot oddiy Telegram’da ishlaydi, hamyon ham, yangi versiya ham talab qilinmaydi." },
  { question: "Karta o‘tkazmasi bilan Click’ning narxi bir xilmi?", answer: `Yo‘q, farq qiladi: UzCard/HUMO o‘tkazma yoki bot balansidan bitta yulduz ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Jami summa to‘lov oynasidan oldin chiqadi.` },
  { question: "Botda eng kam nechta Stars olsa bo‘ladi?", answer: "Eng kam buyurtma — 50 Stars. Undan ko‘pini istagan miqdorda tanlaysiz, narx shunga qarab hisoblanadi." },
  { question: "StarsPaymee Gram qabul qilib, evaziga Stars beradimi?", answer: "Yo‘q, xizmat to‘lovni faqat so‘mda oladi. Uning nomidan Gram so‘rab yozgan odam firibgar bo‘lishi mumkin. Bunday xabarni support’ga ko‘rsating." },
  { question: "Mac’da olgan Stars’im telefondagi Telegram’da ham bo‘ladimi?", answer: "Ha. Balans akkauntga bog‘langan, shu akkaunt ochilgan har bir qurilmada bir xil ko‘rinadi." },
  { question: "Do‘stimga Premium’ni Mac’dan, hamyonsiz sovg‘a qilsam bo‘ladimi?", answer: "Bo‘ladi: botda do‘stingizning @username’ini yozib, so‘mda to‘laysiz. Faqat unda faol Premium bo‘lmasligi kerak, aks holda buyurtma ochilmaydi." },
  { question: "So‘mda olgan Stars’imni keyin StarsPaymee’ga qaytib sota olamanmi?", answer: "Yo‘q, StarsPaymee foydalanuvchidan Stars yoki sovg‘a sotib olmaydi. Shuning uchun keraklicha miqdorni oling." },
  { question: "Chatda kimdir «Gram’da arzonroq» deb Stars taklif qilsa, ishonsam bo‘ladimi?", answer: "Ehtiyot bo‘ling. Stars @username orqali keladi, sizdan hamyon yoki oldindan Gram so‘rashlariga hojat yo‘q. Notanish manzilga ketgan pulni qaytarish yo‘li tasdiqlanmagan." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, новый кошелёк на Mac не нужен, чтобы купить Stars или Premium. Баланс Stars записывается на ваш аккаунт Telegram, а Gram в кошельке — это отдельный актив. В официальных документах, которые мы проверили, оплата Stars через Gram не описана. В сумах проще: в @StarsPaymee_bot вы вводите только @username и платите картой, через Click, Payme, Uzum или Paynet. Звёзды обычно приходят за несколько секунд.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#macdagi-hamyon-stars-xarid-qilish", label: "Меняет ли кошелёк на Mac порядок покупки Stars?" },
          { href: "#ichki-hamyon-haqida-nima-rasman", label: "Что о встроенном кошельке подтверждено официально?" },
          { href: "#gram-bilan-yoki-somda-ikki", label: "Gram или сумы: два способа рядом" },
          { href: "#ilovada-gram-bilan-tolash-tugmasi", label: "Если в приложении появится кнопка оплаты в Gram, как сравнить цены?" },
          { href: "#qachon-somdagi-yol-maqulroq", label: "Когда выгоднее покупать в сумах?" },
          { href: "#macdan-starsni-somda-olish-5", label: "Как купить Stars в сумах с Mac: 5 шагов" },
          { href: "#premiumni-ham-hamyonsiz-olsa-boladimi", label: "Можно ли так же без кошелька получить Premium?" },
          { href: "#gramda-tolasangiz-arzonroq-degan-taklif", label: "Что делать, если предлагают «дешевле за Gram»?" },
          { href: "#xariddan-keyin-macda-stars-yoki", label: "Stars или Premium не видны на Mac после покупки" },
        ]}
      />
      <h2 id="macdagi-hamyon-stars-xarid-qilish">Меняет ли кошелёк на Mac порядок покупки Stars?</h2>
      <p>Нет. Элементов, связанных с кошельком TON, внутри Telegram действительно становится больше. Но на то, как покупаются Stars, это не влияет.</p>
      <p>Это разные вещи:</p>
      <ul>
        <li><b>Stars</b> — внутренний баланс аккаунта Telegram. Звёздами оплачивают реакции, подарки, ботов и платный контент в каналах.</li>
        <li><b>Gram</b> — монета, которая хранится на адресе кошелька в блокчейне. Балансом аккаунта Telegram её не назовёшь.</li>
      </ul>
      <p>Если кошелёк виден в окне Telegram, это ещё не значит, что он связан со Stars. Gram может лежать в кошельке, а баланс Stars от этого не изменится. Обратное тоже верно. Разница между двумя балансами подробно разобрана в статье <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet и Stars: в чём разница</Link>.</p>
      <p>Поэтому неважно, стоит у вас бета-версия на Mac или нет: Stars покупаются одинаково.</p>
      <h2 id="ichki-hamyon-haqida-nima-rasman">Что о встроенном кошельке подтверждено официально?</h2>
      <p>В Telegram-каналах ходят разные слухи об окне кошелька в бета-версии для macOS. Мы сверили их со <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">списком изменений Bot API</a> и <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документацией Bot API</a>. Вот что получилось:</p>
      <CompareTable
        headers={["Утверждение", "Статус", "Где написано"]}
        rows={[
          ["TON-адрес в сообщении выделяется как отдельный объект", "Подтверждено", "Bot API 10.4, тип «ton_address»"],
          ["Для TON-адреса внутри RichMessage есть отдельный класс", "Подтверждено", "Bot API 10.4, RichTextTonAddress"],
          ["Добавлены классы для карточки кошелька и NFT", "Подтверждено", "Bot API 10.4, TonWalletCard, TonNft"],
          ["В личном чате карточка кошелька пользователя показывается на странице его профиля", "Подтверждено", "Bot API, поле ton_wallet_card"],
          ["Есть служебное сообщение о переводе из кошелька", "Подтверждено", "Bot API 10.4, TonWalletTransfer"],
          ["На macOS по нажатию на адрес открывается отдельное окно", "Не подтверждено", "Только посты в каналах"],
          ["Из окна можно увидеть владельца кошелька, открыть эксплорер или отправить деньги", "Не подтверждено", "Только посты в каналах"],
          ["В какой версии и когда появилась функция", "Не найдено", "—"],
          ["Оплата Stars через Gram", "В изученных документах нет", "—"],
        ]}
      />
      <p>Классы Bot API лишь показывают, что такие объекты в Telegram есть. Как они выглядят в приложении для macOS и какие кнопки там будут, из них не понять. Когда планируете покупку, не опирайтесь на строки со статусом «не подтверждено».</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="gram-bilan-yoki-somda-ikki">Gram или сумы: два способа рядом</h2>
      <p>Если в кошельке есть Gram, мысль купить Stars на них вполне естественна. Но условий такой покупки в официальных источниках мы не нашли, поэтому во многих ячейках столбца Gram пусто.</p>
      <CompareTable
        headers={["Критерий", "Gram из кошелька", "В сумах, @StarsPaymee_bot"]}
        rows={[
          ["Что нужно", "Кошелёк и достаточно Gram на нём", "Только @username"],
          ["Цена 1 Stars", "Если появится в приложении, проверяйте там", `Перевод на карту или с баланса бота — ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum, Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Сколько выйдет в сумах", "Считаете сами по курсу Gram", "Итоговая сумма в сумах видна до оплаты"],
          ["Крипта, зарубежная карта, VPN", "Нужен криптокошелёк", "Не нужны"],
          ["Минимальный объём", "В этой статье не подтверждено", "50 Stars"],
          ["Доставка", "В этой статье не подтверждено", "Обычно несколько секунд (около 5 секунд)"],
          ["Покупка другому человеку", "В этой статье не подтверждено", "Хватит @username получателя"],
        ]}
      />
      <p>Цены и способы оплаты собраны на <Link href="/stars">странице Stars</Link>. Общая инструкция есть в статье <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Как купить Telegram Stars в Узбекистане</Link>.</p>
      <h2 id="ilovada-gram-bilan-tolash-tugmasi">Если в приложении появится кнопка оплаты в Gram, как сравнить цены?</h2>
      <p>Такая кнопка может появиться в будущем. Тогда не торопитесь и сравните обе цены в одной валюте.</p>
      <Steps>
        <Step title={"Запишите сумму в Gram"}>сколько Gram приложение просит за нужное количество Stars.</Step>
        <Step title={"Переведите в сумы"}>пересчитайте Gram по курсу на этот день. Если купили Gram недавно, учтите, во сколько они вам обошлись на самом деле.</Step>
        <Step title={"Посмотрите сумму в боте"}>выберите то же количество в @StarsPaymee_bot и посмотрите итог. Платить для этого не нужно.</Step>
        <Step title={"Сравните"}>где цифра меньше, тот способ и дешевле.</Step>
      </Steps>
      <p>Пример: вам нужно 1 000 Stars. При оплате переводом на карту в боте одна звезда стоит {som(STARS_PER_UNIT_UZS, "ru")}, значит, всего — в 1 000 раз больше. Через Click или Payme цена за штуку — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Сравните обе суммы с ценой в Gram, пересчитанной в сумы.</p>
      <p>И ещё момент: если Gram в кошельке нет, их сначала придётся где-то купить. Это лишний шаг и часто лишние расходы — включите их в расчёт.</p>
      <h2 id="qachon-somdagi-yol-maqulroq">Когда выгоднее покупать в сумах?</h2>
      <p>Вот случаи, когда сумы заметно удобнее:</p>
      <ul>
        <li><b>Gram мало или нет совсем.</b> Пополнение кошелька займёт больше времени, чем сама покупка звёзд.</li>
        <li><b>Хотите знать бюджет заранее.</b> В боте сумма в сумах видна до оплаты, курс считать не нужно.</li>
        <li><b>Нужно немного звёзд.</b> Минимальный заказ в боте — 50 Stars, брать много не обязательно.</li>
        <li><b>Покупаете кому-то другому.</b> Адрес его кошелька не нужен, достаточно @username. Подробнее: <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">как купить Stars другому человеку</Link>.</li>
        <li><b>На Mac нет бета-версии.</b> Покупка через бота не зависит от версии приложения.</li>
        <li><b>Gram отложены на другое.</b> Звёзды можно получить, не тратя Gram. О связи Gram и Toncoin — в статье <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.</li>
      </ul>
      <h2 id="macdan-starsni-somda-olish-5">Как купить Stars в сумах с Mac: 5 шагов</h2>
      <p>Хватит обычного Telegram на Mac: ни бета-версия, ни кошелёк не нужны.</p>
      <Steps>
        <Step title={"Откройте бота"}>наберите @StarsPaymee_bot в поиске Telegram или перейдите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">по этой ссылке</a>. Mini App тоже работает.</Step>
        <Step title={"Введите username"}>свой @username или @username человека, который получит звёзды. Пароль, SMS-код и вход в аккаунт не запрашиваются.</Step>
        <Step title={"Выберите количество"}>от 50 Stars.</Step>
        <Step title={"Выберите способ оплаты"}>перевод на карту UzCard/HUMO или баланс бота (цена за штуку {som(STARS_PER_UNIT_UZS, "ru")}) либо Click, Payme, Uzum, Paynet (цена за штуку {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}). Через Paynet можно заплатить и наличными — в приложении или в терминале.</Step>
        <Step title={"Оплатите и проверьте баланс"}>звёзды обычно приходят за несколько секунд. Где смотреть баланс, рассказано в статье <Link href="/blog/telegram-stars-balansini-tekshirish">Как проверить баланс Stars</Link>.</Step>
      </Steps>
      <p>На компьютере вместо бота иногда открывается окно кошелька, и люди путаются. Как отличить одно от другого, объясняем в статье <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">Ссылка @wallet в Telegram Desktop открывает кошелёк</Link>.</p>
      <h2 id="premiumni-ham-hamyonsiz-olsa-boladimi">Можно ли так же без кошелька получить Premium?</h2>
      <p>Да. Premium подключается по @username через механизм подарков Telegram. Ни Gram, ни адрес кошелька, ни данные карты боту передавать не нужно.</p>
      <p>Цена одинакова при любом способе оплаты, без наценки:</p>
      <ul>
        <li>3 месяца — {som(premium(3), "ru")};</li>
        <li>6 месяцев — {som(premium(6), "ru")};</li>
        <li>12 месяцев — {som(premium(12), "ru")}.</li>
      </ul>
      <p>Есть и тариф на 1 месяц, его цена указана в боте.</p>
      <p>Одно ограничение лучше знать заранее. Если на аккаунте уже действует Premium, бот не откроет новый заказ: срок не добавляется к текущей подписке. В этом случае дождитесь окончания подписки или подарите Premium другому человеку. Тарифы — на <Link href="/premium">странице Premium</Link>.</p>
      <h2 id="gramda-tolasangiz-arzonroq-degan-taklif">Что делать, если предлагают «дешевле за Gram»?</h2>
      <p>Чем заметнее кошелёк в Telegram, тем больше может стать личных сообщений вроде «продам Stars за Gram». Обычно они звучат так:</p>
      <ul>
        <li>«Отдам дешевле, чем в боте, только оплата в Gram»;</li>
        <li>«Я из StarsPaymee, ваш платёж не прошёл, отправьте повторно в Gram»;</li>
        <li>«Купим ваши Stars за Gram, сначала скиньте немного для проверки».</li>
      </ul>
      <p>Если пришло такое сообщение, помните следующее.</p>
      <p>Во-первых, то, что Telegram выделяет адрес в сообщении, не делает его надёжным. По документации, «ton_address» — просто тип адреса в тексте. Это не значит, что продавца кто-то проверил.</p>
      <p>Во-вторых, продавцу Stars ваш кошелёк не нужен. Звёзды приходят на аккаунт по @username. Если просят адрес кошелька, код или «тестовый платёж», прекращайте разговор.</p>
      <p>В-третьих, способ вернуть Gram, ушедшие на незнакомый адрес, в этой статье не подтверждён. Поэтому не отправляйте Gram незнакомцам за звёзды заранее.</p>
      <Notice label={"Важно"}>StarsPaymee принимает оплату только в сумах: Click, Payme, Uzum, Paynet, перевод на UzCard/HUMO или баланс бота. Сервис не просит переводов на TON-адрес и не покупает у пользователей Stars или подарки. Если такое предложение приходит от его имени, это признак обмана. При малейших сомнениях пишите только в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <h2 id="xariddan-keyin-macda-stars-yoki">Stars или Premium не видны на Mac после покупки</h2>
      <p>Оплатили, а на Mac ничего не изменилось? Проверьте по порядку:</p>
      <ul>
        <li><b>Username.</b> Тот ли @username указан в заказе? Ошибка в одной букве — и звёзды уйдут другому человеку.</li>
        <li><b>Приложение.</b> Закройте Telegram и откройте снова. Если этот аккаунт открыт и на телефоне, проверьте баланс там. Stars записываются на аккаунт, а не на устройство.</li>
        <li><b>Интерфейс беты.</b> В бета-версии меню могут быть в другом месте. Если баланс не виден, проверьте в обычной версии или на телефоне.</li>
        <li><b>Premium.</b> Видно ли в приложении, что подписка активна? Если Premium на аккаунте уже был, бот новый заказ не открыл бы.</li>
        <li><b>Чек.</b> Сохраните ID заказа и чек об оплате и отправьте их в @StarsPaymeeSupport.</li>
      </ul>
      <p>Другие ситуации и что с ними делать — в статье <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Не пришли Telegram Stars: что делать</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли оплатить Telegram Stars напрямую Gram из кошелька?", answer: "В документации Bot API, которую мы изучили, такой оплаты нет. Если кнопка появится в приложении, сначала пересчитайте сумму в Gram на сумы и сравните с ценой в боте." },
  { question: "Gram в кошельке и баланс Stars — это один счёт?", answer: "Нет. Gram хранятся на адресе в блокчейне, а Stars — на аккаунте Telegram. Сами по себе одни в другие не превращаются." },
  { question: "Нужно ли ставить бету на Mac, чтобы купить Stars в сумах?", answer: "Не нужно. @StarsPaymee_bot работает в обычном Telegram, ни кошелёк, ни новая версия не требуются." },
  { question: "Цена при переводе на карту и через Click одинаковая?", answer: `Нет, отличается: при переводе на UzCard/HUMO или с баланса бота одна звезда стоит ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Общая сумма показывается до окна оплаты.` },
  { question: "Какой минимум Stars можно купить в боте?", answer: "Минимальный заказ — 50 Stars. Больше можно взять в любом количестве, цена пересчитается под него." },
  { question: "Принимает ли StarsPaymee Gram в обмен на Stars?", answer: "Нет, сервис берёт оплату только в сумах. Тот, кто от его имени просит Gram, скорее всего мошенник. Покажите такое сообщение в поддержке." },
  { question: "Звёзды, купленные на Mac, будут и в Telegram на телефоне?", answer: "Да. Баланс привязан к аккаунту и одинаково виден на любом устройстве, где этот аккаунт открыт." },
  { question: "Можно подарить другу Premium с Mac без кошелька?", answer: "Можно: укажите в боте @username друга и оплатите в сумах. Главное, чтобы у него не было активного Premium, иначе заказ не откроется." },
  { question: "Смогу ли я потом продать купленные Stars обратно StarsPaymee?", answer: "Нет, StarsPaymee не покупает у пользователей Stars и подарки. Поэтому берите столько, сколько нужно." },
  { question: "В чате предлагают Stars «дешевле за Gram» — стоит доверять?", answer: "Будьте осторожны. Stars приходят по @username, кошелёк или предоплата в Gram для этого не нужны. Как вернуть деньги, ушедшие на незнакомый адрес, не подтверждено." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, you don’t need the new wallet on your Mac to buy Stars or Premium. Stars are credited to your Telegram account, and Gram in a wallet is a separate asset. The official documents we checked say nothing about paying for Stars with Gram. Paying in som is simpler. Enter a @username in @StarsPaymee_bot and pay by card, Click, Payme, Uzum or Paynet.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#macdagi-hamyon-stars-xarid-qilish", label: "Does the Mac wallet change how you buy Stars?" },
          { href: "#ichki-hamyon-haqida-nima-rasman", label: "What has been officially confirmed about the in-app wallet?" },
          { href: "#gram-bilan-yoki-somda-ikki", label: "Gram or som: the two options side by side" },
          { href: "#ilovada-gram-bilan-tolash-tugmasi", label: "If a “pay with Gram” button appears, how do you compare prices?" },
          { href: "#qachon-somdagi-yol-maqulroq", label: "When is paying in som the better choice?" },
          { href: "#macdan-starsni-somda-olish-5", label: "How to buy Stars in som on a Mac: 5 steps" },
          { href: "#premiumni-ham-hamyonsiz-olsa-boladimi", label: "Can you get Premium without a wallet too?" },
          { href: "#gramda-tolasangiz-arzonroq-degan-taklif", label: "What to do if someone says it’s cheaper in Gram" },
          { href: "#xariddan-keyin-macda-stars-yoki", label: "Stars or Premium not showing on your Mac after purchase" },
        ]}
      />
      <h2 id="macdagi-hamyon-stars-xarid-qilish">Does the Mac wallet change how you buy Stars?</h2>
      <p>No. Telegram is adding more TON wallet elements to the app, but that doesn’t change how you buy Stars.</p>
      <p>The two are different things:</p>
      <ul>
        <li><b>Stars</b> are an internal balance on your Telegram account. You spend them on reactions, gifts, bots and channel payments.</li>
        <li><b>Gram</b> is a coin held at a wallet address on the blockchain. It isn’t a balance on your Telegram account.</li>
      </ul>
      <p>Seeing a wallet inside the Telegram window doesn’t mean the two are linked. Holding Gram in a wallet doesn’t change your Stars balance, and spending Stars doesn’t touch your Gram. For a fuller explanation of the two balances, see <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <p>So buying Stars works the same way whether or not you have the beta version installed on your Mac.</p>
      <h2 id="ichki-hamyon-haqida-nima-rasman">What has been officially confirmed about the in-app wallet?</h2>
      <p>Telegram channels are full of claims about a wallet window in the macOS beta. We checked them against the <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> and the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a>. Here’s what we found:</p>
      <CompareTable
        headers={["Claim", "Status", "Where it’s documented"]}
        rows={[
          ["A TON address in a message is recognized as a separate entity", "Confirmed", "Bot API 10.4, “ton_address” type"],
          ["There’s a dedicated class for a TON address inside a RichMessage", "Confirmed", "Bot API 10.4, RichTextTonAddress"],
          ["Classes for wallet cards and NFTs have been added", "Confirmed", "Bot API 10.4, TonWalletCard, TonNft"],
          ["In private chats, the user’s wallet card appears on their profile page", "Confirmed", "Bot API, ton_wallet_card field"],
          ["There’s a service message for wallet transfers", "Confirmed", "Bot API 10.4, TonWalletTransfer"],
          ["Clicking an address on macOS opens a separate window", "Unconfirmed", "Channel posts only"],
          ["That window lets you see the wallet owner, open an explorer or send money", "Unconfirmed", "Channel posts only"],
          ["Which version introduced the feature, and when", "Not found", "—"],
          ["Paying for Stars with Gram", "Not in the documents we reviewed", "—"],
        ]}
      />
      <p>The Bot API classes show that these objects exist in Telegram. They don’t say how the macOS app displays them or which buttons it shows. Don’t plan a purchase around anything marked “unconfirmed.”</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="gram-bilan-yoki-somda-ikki">Gram or som: the two options side by side</h2>
      <p>If you have Gram in a wallet, you might want to buy Stars with it. We couldn’t find the terms for doing that in any official source, so several cells in the Gram column are left open.</p>
      <CompareTable
        headers={["Criterion", "Gram from your wallet", "Som via @StarsPaymee_bot"]}
        rows={[
          ["What you need", "A wallet with enough Gram", "Just a @username"],
          ["Price of 1 Star", "If the app shows it, check there", `${som(STARS_PER_UNIT_UZS, "en")} by card transfer or bot balance, ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet`],
          ["Knowing the cost in som", "You work it out from the Gram rate", "The final total is shown in som before you pay"],
          ["Crypto, foreign card, VPN", "Crypto wallet required", "None needed"],
          ["Minimum amount", "Not confirmed in this article", "50 Stars"],
          ["Delivery", "Not confirmed in this article", "Usually a few seconds (about 5)"],
          ["Buying for someone else", "Not confirmed in this article", "The recipient’s @username is enough"],
        ]}
      />
      <p>All prices and payment methods are on the <Link href="/stars">Stars page</Link>. For the full guide, see <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Buying Telegram Stars in Uzbekistan</Link>.</p>
      <h2 id="ilovada-gram-bilan-tolash-tugmasi">If a “pay with Gram” button appears, how do you compare prices?</h2>
      <p>A button like that might show up in the app someday. If it does, don’t rush. Compare both prices in the same currency.</p>
      <Steps>
        <Step title={"Write down the Gram amount"}>note how much Gram the app asks for the number of Stars you need.</Step>
        <Step title={"Convert it to som"}>use that day’s rate. If you bought the Gram recently, also count what you actually paid for it.</Step>
        <Step title={"Check the total in the bot"}>choose the same amount in @StarsPaymee_bot and look at the final total. You don’t have to pay to see it.</Step>
        <Step title={"Compare"}>the smaller number is the cheaper option.</Step>
      </Steps>
      <p>Example: you need 1 000 Stars. With a card transfer in the bot, each Star costs {som(STARS_PER_UNIT_UZS, "en")}, so the total is 1 000 times that. With Click or Payme, each Star costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. Compare those two totals with the som value of the Gram price in the app.</p>
      <p>Also keep this in mind: if your wallet has no Gram, you’ll have to buy some first. That’s an extra step and often an extra cost, so include it in your calculation.</p>
      <h2 id="qachon-somdagi-yol-maqulroq">When is paying in som the better choice?</h2>
      <p>Paying in som is much more convenient if:</p>
      <ul>
        <li><b>You have little or no Gram.</b> Topping up a wallet takes longer than buying the Stars.</li>
        <li><b>You want to know the cost upfront.</b> The bot shows the total in som before you pay, so you don’t have to work out exchange rates.</li>
        <li><b>You only need a few Stars.</b> The minimum order in the bot is 50 Stars, and you don’t have to buy a large amount.</li>
        <li><b>You’re buying for someone else.</b> You only need their @username, not their wallet address. Details: <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">Buying Stars for another person</Link>.</li>
        <li><b>You don’t have the beta on your Mac.</b> Buying through the bot works with any app version.</li>
        <li><b>You’re saving your Gram for something else.</b> You can get Stars without spending it. For how Gram relates to Toncoin, see <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</li>
      </ul>
      <h2 id="macdan-starsni-somda-olish-5">How to buy Stars in som on a Mac: 5 steps</h2>
      <p>The regular Telegram app on your Mac is all you need. You don’t need the beta or a wallet.</p>
      <Steps>
        <Step title={"Open the bot"}>type @StarsPaymee_bot in Telegram search or open it via <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">this link</a>. The Mini App works too.</Step>
        <Step title={"Enter a username"}>type your own @username or the @username of the person receiving the Stars. You won’t be asked for a password, an SMS code or access to the account.</Step>
        <Step title={"Choose the amount"}>50 Stars minimum.</Step>
        <Step title={"Pick a payment method"}>UzCard/HUMO card transfer or bot balance ({som(STARS_PER_UNIT_UZS, "en")} per Star), or Click, Payme, Uzum or Paynet ({som(STARS_PER_UNIT_GATEWAY_UZS, "en")} per Star). With Paynet, you can also pay cash through the app or a terminal.</Step>
        <Step title={"Pay and check your balance"}>Stars usually arrive within a few seconds. To find your balance, see <Link href="/blog/telegram-stars-balansini-tekshirish">Checking your Stars balance</Link>.</Step>
      </Steps>
      <p>On desktop, a wallet window sometimes opens instead of the bot, which can be confusing. For how to tell the two windows apart, see <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">When an @wallet link opens a wallet in Telegram Desktop</Link>.</p>
      <h2 id="premiumni-ham-hamyonsiz-olsa-boladimi">Can you get Premium without a wallet too?</h2>
      <p>Yes. Premium is activated by @username through Telegram’s gifting feature. You don’t give the bot any Gram, wallet address or card details.</p>
      <p>The price is the same for every payment method, with no markup:</p>
      <ul>
        <li>3 months — {som(premium(3), "en")};</li>
        <li>6 months — {som(premium(6), "en")};</li>
        <li>12 months — {som(premium(12), "en")}.</li>
      </ul>
      <p>There’s also a 1-month plan. Its price is shown in the bot.</p>
      <p>There’s one limitation. If the account already has an active Premium subscription, the bot won’t open a new order, because the new period isn’t added on top of the current one. In that case, wait for the subscription to end or gift Premium to someone else. Plans are listed on the <Link href="/premium">Premium page</Link>.</p>
      <h2 id="gramda-tolasangiz-arzonroq-degan-taklif">What to do if someone says it’s cheaper in Gram</h2>
      <p>As the wallet becomes more visible in Telegram, you may get more private messages offering to sell you Stars for Gram. They usually look like this:</p>
      <ul>
        <li>“I’ll sell cheaper than the bot, just pay in Gram”;</li>
        <li>“I’m from StarsPaymee, your payment didn’t go through, send it again in Gram”;</li>
        <li>“We’ll buy your Stars for Gram, just send a small test amount first.”</li>
      </ul>
      <p>If you get a message like this, keep the following in mind.</p>
      <p>First, Telegram highlighting an address in a message doesn’t make it trustworthy. According to the documentation, “ton_address” is just a type of address in a message. It doesn’t mean anyone has checked the seller.</p>
      <p>Second, someone selling you Stars doesn’t need your wallet. Stars reach your account through your @username. If someone asks for a wallet address, a code or a “test payment,” stop the conversation.</p>
      <p>Third, this article can’t confirm any way to get back Gram sent to an unknown address. So never send Gram upfront to a stranger in exchange for Stars.</p>
      <Notice label={"Important"}>StarsPaymee only accepts payment in som: Click, Payme, Uzum, Paynet, UzCard/HUMO transfer or bot balance. It never asks for transfers to a TON address, and it doesn’t buy Stars or gifts from users. If you get an offer like that in its name, it’s a scam. If in doubt, contact only <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <h2 id="xariddan-keyin-macda-stars-yoki">Stars or Premium not showing on your Mac after purchase</h2>
      <p>Paid, but nothing changed on your Mac? Check these in order:</p>
      <ul>
        <li><b>Username.</b> Is the @username in the order really yours? One wrong letter and the Stars go to someone else.</li>
        <li><b>App.</b> Quit Telegram and reopen it. If the same account is open on your phone, check the balance there too. Stars belong to the account, not to the device.</li>
        <li><b>Beta interface.</b> Menus may have moved in the beta. If you can’t see your balance, check in the regular version or on your phone.</li>
        <li><b>Premium.</b> Does the app show the subscription as active? If the account already had active Premium, the bot won’t have opened the new order.</li>
        <li><b>Receipt.</b> Keep the order ID and payment receipt and send them to @StarsPaymeeSupport.</li>
      </ul>
      <p>For other cases and how to fix them, see <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Telegram Stars didn’t arrive: what to do</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I pay for Telegram Stars directly with Gram from my wallet?", answer: "The Bot API documents we reviewed don’t describe that kind of payment. If the app ever shows such a button, convert the Gram amount to som first and compare it with the bot’s price." },
  { question: "Are Gram in my wallet and my Stars balance the same account?", answer: "No. Gram sits at a blockchain address, while Stars live on your Telegram account. Neither turns into the other automatically." },
  { question: "Do I need to install the Mac beta to buy Stars in som?", answer: "No. @StarsPaymee_bot works in the regular Telegram app and needs neither a wallet nor a new version." },
  { question: "Is the price the same for a card transfer and Click?", answer: `No, they differ: one Star costs ${som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO transfer or bot balance, and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. You’ll see the full total before the payment screen.` },
  { question: "What’s the smallest number of Stars I can buy in the bot?", answer: "The minimum order is 50 Stars. Above that you can pick any amount, and the price is calculated to match." },
  { question: "Does StarsPaymee accept Gram in exchange for Stars?", answer: "No, the service only takes payment in som. Anyone asking for Gram in its name may be a scammer, so show the message to support." },
  { question: "Will Stars I buy on my Mac also show up in Telegram on my phone?", answer: "Yes. The balance is tied to your account, so it’s the same on every device where that account is signed in." },
  { question: "Can I gift Premium to a friend from my Mac without a wallet?", answer: "Yes: enter your friend’s @username in the bot and pay in som. Just make sure they don’t already have active Premium, or the order won’t open." },
  { question: "Can I sell Stars I bought in som back to StarsPaymee later?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. So only buy as many as you actually need." },
  { question: "Someone in a chat says Stars are cheaper in Gram. Should I trust them?", answer: "Be careful. Stars arrive by @username, so there’s no reason for anyone to ask for your wallet or Gram upfront. There’s no confirmed way to recover money sent to an unknown address." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["macos telegram hamyon stars sotib olish","telegram mac hamyon gram stars","stars gram bilan sotib olish","telegram stars somda olish mac","telegram ichki ton hamyoni macos","telegram premium gram bilan olish","telegram stars kriptosiz sotib olish","купить telegram stars на macos","кошелёк telegram macos бета","telegram stars за gram","купить звёзды телеграм за сумы","встроенный ton кошелёк telegram"],
  howToSteps: [
    { name: "Gram summasini yozib oling", text: "kerakli miqdordagi Stars uchun ilova so‘ragan Gram’ni yozing." },
    { name: "So‘mga aylantiring", text: "Gram’ni o‘sha kundagi kurs bo‘yicha so‘mga hisoblang. Gram’ni yaqinda sotib olgan bo‘lsangiz, aslida qanchaga olganingizni ham hisobga oling." },
    { name: "Botdagi summani ko‘ring", text: "@StarsPaymee_bot’da o‘sha miqdorni tanlab, yakuniy summani ko‘ring. Buning uchun to‘lash shart emas." },
    { name: "Taqqoslang", text: "qaysi raqam kichik chiqsa, o‘sha yo‘l arzonroq." },
  ],
  locales: {
    uz: {
      title: "macOS Telegram hamyonidagi Gram bilan Stars olaymi yoki so‘mda olgan qulaymi?",
      excerpt: "Gram bilan to‘lash shart emas: Stars va Premium’ni so‘mda, faqat @username bilan olasiz. Maqolada ichki hamyon haqida nima tasdiqlangani, ikki yo‘l taqqosi, narxni solishtirish qadamlari va aldov belgilari bor.",
      metaTitle: "macOS Telegram hamyonidagi Gram bilan Stars olaymi",
      metaDescription: "Gram bilan to‘lash shart emas: Stars va Premium’ni so‘mda, faqat @username bilan olasiz. Maqolada ichki hamyon haqida nima tasdiqlangani, ikki yo‘l taqqosi…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Stars за Gram из кошелька в Telegram на Mac или за сумы: что удобнее?",
      excerpt: "Gram для оплаты не нужен: Stars и Premium покупаются в сумах, нужен только @username. Ниже: что официально известно о встроенном кошельке, сравнение двух способов, как сверить цену и признаки обмана.",
      metaTitle: "Stars за Gram из кошелька в Telegram на Mac или за сумы",
      metaDescription: "Gram для оплаты не нужен: Stars и Premium покупаются в сумах, нужен только @username. Ниже: что официально известно о встроенном кошельке, сравнение двух…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram wallet on Mac: pay for Stars with Gram or buy them in som?",
      excerpt: "You don’t need Gram to buy Stars or Premium. You can pay in som with just a @username. This article covers what’s confirmed about the in-app wallet, compares both options and lists common scam signs.",
      metaTitle: "Telegram wallet on Mac: pay for Stars with Gram",
      metaDescription: "You don’t need Gram to buy Stars or Premium. You can pay in som with just a @username. This article covers what’s confirmed about the in-app wallet, compares…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
