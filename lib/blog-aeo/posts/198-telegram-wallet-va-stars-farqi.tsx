import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-wallet-va-stars-farqi";

/**
 * Telegram Wallet va Stars farqi: hamyondagi Gram va yulduzlar bir balansmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Wallet haqidagi shov-shuvni ko‘rgan O‘zbekistondagi Telegram foydalanuvchisi «telegram wallet va stars farqi» kabi so‘zlar bilan qidiradi. U Wallet’dagi Gram bilan Stars balansi bir narsami yoki yo‘qligini, Stars olish uchun hamyon kerakmi va ular o‘zaro qanday bog‘lanishini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://core.telegram.org/bots/blockchain-guidelines
 *   https://telegram.org/faq
 *   https://telegram.org/blog
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
  return <p>Yo‘q, bular ikki xil narsa. Telegram Wallet — TON blokcheynidagi aktivlar uchun hamyon. Stars esa Telegram ichidagi raqamli xaridlar uchun to‘lov birligi. Ular alohida balansda turadi va biridan ikkinchisiga o‘z-o‘zidan o‘tmaydi. Stars olish uchun hamyon, TON yoki kripto kerak emas: yulduzlarni so‘mda, faqat @username bilan olish mumkin.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#walletdagi-gram-va-stars-balansi", label: "Wallet’dagi Gram va Stars balansi bir narsami?" },
          { href: "#nega-hozir-hamma-wallet-haqida", label: "Nega hozir hamma Wallet haqida gapiryapti?" },
          { href: "#wallet-va-stars-bitta-jadvalda", label: "Wallet va Stars: bitta jadvalda farqi" },
          { href: "#stars-olish-uchun-wallet-yoki", label: "Stars olish uchun Wallet yoki TON kerakmi?" },
          { href: "#hamyonsiz-stars-qanday-olinadi-qadamlar", label: "Hamyonsiz Stars qanday olinadi: qadamlar" },
          { href: "#wallet-va-stars-qayerda-kesishadi", label: "Wallet va Stars qayerda kesishadi?" },
          { href: "#ikki-balansni-adashtirish-qanday-xatolarga", label: "Ikki balansni adashtirish qanday xatolarga olib keladi?" },
          { href: "#wallet-nomidan-keladigan-aldovni-qanday", label: "Wallet nomidan keladigan aldovni qanday tanish mumkin?" },
          { href: "#sizga-qaysi-biri-kerak-wallet", label: "Sizga qaysi biri kerak: Wallet, Stars yoki ikkalasi?" },
        ]}
      />
      <h2 id="walletdagi-gram-va-stars-balansi">Wallet’dagi Gram va Stars balansi bir narsami?</h2>
      <p>Yo‘q. Ikkalasi ham Telegram ichida ko‘rinadi, shuning uchun ularni adashtirish oson. Lekin vazifasi boshqa-boshqa.</p>
      <p><b>Wallet</b> — kripto hamyon. U TON blokcheynidagi aktivlarni boshqarish uchun xizmat qiladi. Telegram mini ilovalar uchun yozgan <a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">blokcheyn qoidalarida</a> Wallet TON blokcheynidagi hamyonlar qatorida, Tonkeeper va MyTonWallet bilan birga tilga olinadi. Demak, hujjat uni boshqa TON hamyonlar bilan bir toifaga qo‘yadi.</p>
      <p><b>Stars</b> — Telegram’ning ichki to‘lov birligi. Yulduzlar hamyonda emas, Telegram’ning o‘zidagi Stars bo‘limida turadi. Ular bilan botlarda xarid qilinadi, kanalga reaksiya bosiladi va sovg‘a yuboriladi. Balans aynan qayerda ko‘rinishi <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasida bosqichma-bosqich ko‘rsatilgan.</p>
      <p>Tanga nomi haqida alohida aytib o‘tamiz. Wallet’dagi asosiy tanga ayrim kanal va yangiliklarda «Gram» deb atalmoqda. Biz tekshirgan rasmiy sahifalarda bu nom o‘zgarishi tasdiqlanmadi, shuning uchun bu xabarga ehtiyot bo‘lib qarang. Mavzuga oid <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasi ham bor. Tanga qanday nomlanishidan qat’i nazar, u Stars emas va Stars balansida ko‘rinmaydi.</p>
      <h3>Ikki balansni yonma-yon tekshirib ko‘ring</h3>
      <p>Farqni o‘zingiz ko‘rishingiz mumkin. Telegram’dagi Stars bo‘limini oching va u yerdagi sonni eslab qoling. Keyin hamyon oynasini oching. Ikki joyda ikki xil son va ikki xil birlik chiqadi. Biri oshganda ikkinchisi o‘zgarmaydi.</p>
      <h2 id="nega-hozir-hamma-wallet-haqida">Nega hozir hamma Wallet haqida gapiryapti?</h2>
      <p>Telegram kanallarida Wallet’da yangi hamyonlar ko‘payayotgani va hamyonni faollashtirish sharti o‘zgargani haqida postlar tarqaldi. Shundan keyin ko‘pchilik «Stars ham endi Wallet’ga o‘tdimi?» deb so‘ray boshladi.</p>
      <Notice label={"Muhim"}>Kanal postlaridagi hamyonlar soni va faollashtirish shartlari rasmiy manbada tasdiqlanmagan. Shu sababli bu maqolada ular raqam bilan keltirilmaydi.</Notice>
      <p>Yangilikni Telegram’ning o‘z sahifalaridan tekshiring. Telegram doim yangi funksiyalar qo‘shib boradi. Shuning uchun <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> sahifasining o‘zida undagi ma’lumot eskirgan bo‘lishi mumkinligi haqida ogohlantirish bor. Bitta sahifani o‘qib, xulosani shoshib chiqarmang.</p>
      <p>Stars xaridori uchun bundan chiqadigan xulosa: Wallet haqidagi yangiliklar yulduz sotib olish tartibiga to‘g‘ridan-to‘g‘ri ta’sir qilmaydi. Buyurtma avvalgidek username va so‘mdagi to‘lov bilan amalga oshadi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="wallet-va-stars-bitta-jadvalda">Wallet va Stars: bitta jadvalda farqi</h2>
      <CompareTable
        headers={["Mezon", "Telegram Wallet", "Telegram Stars"]}
        rows={[
          ["Bu nima", "TON blokcheynidagi kripto hamyon", "Telegram ichidagi to‘lov birligi"],
          ["Qayerda ko‘rinadi", "Hamyonning o‘z oynasida", "Telegram’dagi Stars bo‘limida"],
          ["Nimaga ishlatiladi", "Blokcheyn aktivlari, mini ilovalarga TON Connect orqali ulanish", "Bot xaridlari, reaksiyalar, sovg‘alar, obunalar"],
          ["Nimaga bog‘langan", "Hamyonga", "Telegram akkauntiga"],
          ["Qanday to‘ldiriladi", "So‘mda to‘ldirish yo‘llari bu maqolada tekshirilmagan", "So‘mda, @StarsPaymee_bot orqali"],
          ["Narx va komissiya", "Hamyon komissiyalari bu maqolada tekshirilmagan", `1 ta yulduz: ${som(STARS_PER_UNIT_UZS, "uz")} (karta o‘tkazmasi yoki bot balansi), ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} (Click, Payme, Uzum, Paynet)`],
          ["Kimga kerak", "Kripto bilan ataylab ishlaydiganlarga", "Telegram’da pullik amal qiladigan har kimga"],
        ]}
      />
      <p>Kundalik hayotda eng ko‘p farqni oxirgi qator beradi. Kanalga yulduz reaksiyasi bosish, botda xarid qilish yoki do‘stga sovg‘a yuborish uchun faqat Stars kerak. Wallet bu amallarning birortasida qatnashmaydi.</p>
      <h2 id="stars-olish-uchun-wallet-yoki">Stars olish uchun Wallet yoki TON kerakmi?</h2>
      <p>Kerak emas. Stars hamyonga emas, Telegram akkauntiga tushadi. Shuning uchun xarid uchun bitta ma’lumot yetadi — @username.</p>
      <p>StarsPaymee’da buyurtma shunday ishlaydi:</p>
      <ul>
        <li>faqat @username so‘raladi; parol, SMS kod yoki akkauntga kirish so‘ralmaydi;</li>
        <li>to‘lov so‘mda: Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi;</li>
        <li>xalqaro karta, kripto hamyon yoki VPN kerak emas.</li>
      </ul>
      <p>Misol: buvingiz kanaldagi postga yulduz reaksiyasi bosmoqchi. U Wallet’ni hech qachon ochmagan va TON nimaligini bilmaydi. Siz uning username’ini botga yozib, unga 100 Stars olib berasiz. Yulduzlar uning Telegram’idagi Stars bo‘limida paydo bo‘ladi va u reaksiya bosa oladi. Hamyon bu jarayonning hech bir bosqichida kerak bo‘lmaydi.</p>
      <p>Kartangiz bo‘lmasa yoki naqd to‘lamoqchi bo‘lsangiz, <Link href="/blog/telegram-stars-kartasiz-sotib-olish">Stars’ni kartasiz sotib olish</Link> maqolasida yo‘llar batafsil yozilgan. Paketlar <Link href="/stars">Stars sahifasida</Link> jamlangan.</p>
      <h2 id="hamyonsiz-stars-qanday-olinadi-qadamlar">Hamyonsiz Stars qanday olinadi: qadamlar</h2>
      <Steps>
        <Step title={"Botni oching"}>@StarsPaymee_bot’ga yoki uning Mini App’iga kiring.</Step>
        <Step title={"Username kiriting"}>o‘zingizniki yoki boshqa odamniki bo‘lishi mumkin. Profildagi ism emas, @ bilan boshlanadigan username kerak.</Step>
        <Step title={"Miqdorni tanlang"}>eng kam buyurtma 50 Stars.</Step>
        <Step title={"To‘lov usulini tanlang"}>narx usulga bog‘liq: karta o‘tkazmasi yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</Step>
        <Step title={"To‘lang"}>buyurtma odatda bir necha soniyada (~5 soniya) avtomatik yetkaziladi.</Step>
        <Step title={"Balansni tekshiring"}>yulduzlarni hamyondan emas, Telegram’dagi Stars bo‘limidan qidiring.</Step>
      </Steps>
      <p>Ikkinchi qadamda xato ko‘p uchraydi. Username’da bitta harf yoki pastki chiziq tushib qolsa, yulduz boshqa akkauntga ketishi mumkin. Do‘stingizdan username’ni ovoz bilan aytishni emas, nusxa olib yuborishni so‘rang.</p>
      <h2 id="wallet-va-stars-qayerda-kesishadi">Wallet va Stars qayerda kesishadi?</h2>
      <p>Ikki tizim alohida bo‘lsa ham, ular bir-biriga yaqinlashadigan joylar bor.</p>
      <h3>Kolleksion sovg‘alar</h3>
      <p><a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> 2025-yil 24-yanvarda kolleksion sovg‘alarni blokcheynga ko‘chirish haqida post e’lon qilingan. Sovg‘ani blokcheynga chiqarmoqchi bo‘lsangiz, TON hamyon kerak bo‘lishi mumkin. Sovg‘ani Telegram ichida olish yoki ko‘rsatish uchun hamyonga murojaat qilish shart emas. Tayyor kolleksion sovg‘ani so‘mda olish uchun @StarsPaymee_bot’dagi NFT Market bor — batafsil <Link href="/blog/starspaymee-nft-market">NFT Market haqidagi maqolada</Link>.</p>
      <h3>Kripto mini ilovalar</h3>
      <p><a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">Telegram qoidalariga</a> ko‘ra, kripto mini ilovalar token va blokcheyn aktivlari uchun faqat TON blokcheynidan foydalanishi shart. Hamyonlar bilan ham faqat TON Connect orqali ishlashi kerak. Boshqa blokcheynlarda ishlagan ilovalar 2025-yil 21-fevralgacha TON’ga o‘tishi kerak edi.</p>
      <p>Mini ilova sizdan hamyon ulashni so‘rasa, bu Stars’ga emas, TON tomoniga tegishli amal. Ulashdan oldin uch narsani o‘ylab ko‘ring:</p>
      <ul>
        <li>bu ilova sizga nima uchun kerak va uni qayerdan topdingiz;</li>
        <li>hamyon ulamasdan ham kerakli ishni qilish mumkinmi;</li>
        <li>ilova seed-ibora yoki parol so‘rayaptimi — so‘rasa, darhol yoping.</li>
      </ul>
      <h3>Kanal daromadi</h3>
      <p>Kanal egasi Star reaksiyalari yoki pullik postlardan yulduz to‘plashi mumkin. Ularni yechib olish yoki boshqa narsaga aylantirish shartlari bu maqolada tekshirilmagan. Umumiy mexanizm <Link href="/blog/telegram-stars-qanday-ishlaydi">Stars qanday ishlaydi</Link> maqolasida tushuntirilgan.</p>
      <h2 id="ikki-balansni-adashtirish-qanday-xatolarga">Ikki balansni adashtirish qanday xatolarga olib keladi?</h2>
      <ul>
        <li><b>Stars’ni hamyondan qidirish.</b> Xariddan keyin «yulduz tushmadi» deb xavotirlanishdan oldin to‘g‘ri joyga qarang. Stars faqat Telegram’ning Stars bo‘limida ko‘rinadi.</li>
        <li><b>Buyurtmaga hamyon manzilini yozish.</b> Ba’zilar username o‘rniga uzun hamyon manzilini yoki profil ismini yozadi. Botga faqat @username kerak, boshqa ma’lumot buyurtmani chalkashtiradi.</li>
        <li><b>Qoidalar sahifasini yo‘riqnoma deb o‘ylash.</b> Telegram qoidalaridagi hamyon bo‘limi oddiy foydalanuvchi uchun qo‘llanma emas. Sahifaning o‘zida u asosan kripto hamyon vazifasini bajaradigan mini ilovalar uchun misollar ekani aytilgan.</li>
        <li><b>«Almashtirib beramiz» takliflariga ishonish.</b> StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi. Uning nomidan kelgan «Stars’ingizni Gram’ga almashtiramiz» degan taklifning xizmatga aloqasi yo‘q.</li>
      </ul>
      <h2 id="wallet-nomidan-keladigan-aldovni-qanday">Wallet nomidan keladigan aldovni qanday tanish mumkin?</h2>
      <p>Shov-shuvli yangilik chiqqanda firibgarlar ham faollashadi. Ularning xabarlarida ko‘pincha shunday iboralar uchraydi:</p>
      <ul>
        <li>«Hamyoningizni faollashtirish uchun TON yuboring»;</li>
        <li>«Stars’ingizni Wallet’ga o‘tkazib beramiz»;</li>
        <li>«Xavfsizlik uchun seed-iborani tasdiqlang»;</li>
        <li>«Bonus olish uchun hamyonni shu havola orqali ulang».</li>
      </ul>
      <Notice label={"Muhim"}>Seed-ibora, parol va SMS kodni hech kimga bermang. Stars yoki Premium xaridi uchun bunday ma’lumot umuman kerak emas.</Notice>
      <p>Bunday xabar kelsa, javob bermang va havolani ochmang. Wallet bo‘yicha qoida yoki yangilikni telegram.org va core.telegram.org kabi rasmiy sahifalardan tekshiring. Kanal postidagi skrinshot dalil emas. Buyurtma bo‘yicha savol tug‘ilsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali yozing. StarsPaymee — mustaqil xizmat, Telegram nomidan ish yuritmaydi.</p>
      <h2 id="sizga-qaysi-biri-kerak-wallet">Sizga qaysi biri kerak: Wallet, Stars yoki ikkalasi?</h2>
      <p>Vaziyatingizga qarab tanlang:</p>
      <ul>
        <li>kanalga reaksiya, botdagi xarid, sovg‘a yoki obuna uchun — faqat Stars;</li>
        <li>kripto mini ilova yoki blokcheyn aktivi bilan ishlash uchun — TON hamyon;</li>
        <li>kolleksion sovg‘ani blokcheynga chiqarish uchun — hamyon kerak bo‘lishi mumkin;</li>
        <li>Telegram Premium uchun — hamyon shart emas.</li>
      </ul>
      <p>Premium ham username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil. Akkauntda Premium hali faol bo‘lsa, bot yangi buyurtma ochmaydi. Tariflar <Link href="/premium">Premium sahifasida</Link>.</p>
      <p>Telegram’dan kundalik foydalanadiganlarning ko‘piga Stars yetadi. Wallet esa kripto bilan ataylab ishlaydigan va bu yo‘lning xavflarini tushunadigan odam uchun.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Wallet’dagi Gram’ni Stars balansiga o‘tkazsa bo‘ladimi?", answer: "Ikki balans o‘rtasida avtomatik ko‘prik yo‘q: tanga blokcheynda, yulduzlar Telegram akkauntida turadi. Rasmiy almashtirish yo‘li bu maqolada tasdiqlanmagan, shuning uchun «o‘tkazib beramiz» degan vositachilardan uzoq turing." },
  { question: "Stars sotib olsam, ular Telegram Wallet’da ko‘rinadimi?", answer: "Ko‘rinmaydi. Yulduzlar Telegram’ning Stars bo‘limiga tushadi, hamyon oynasida ularni topa olmaysiz." },
  { question: "Wallet ochmagan bo‘lsam, do‘stim menga Stars olib bera oladimi?", answer: "Ha, hamyon bo‘lishi shart emas. Do‘stingiz botga sizning @username’ingizni kiritsa, yulduzlar akkauntingizga keladi." },
  { question: "Stars’ni TON hamyon manziliga yuborib bo‘ladimi?", answer: "Yo‘q, buyurtma faqat username bo‘yicha ishlaydi. Hamyon manzilini yozsangiz, bot qabul qiluvchini aniqlay olmaydi." },
  { question: "Stars’ni so‘mda olish arzonmi yoki kripto orqali?", answer: `Kripto yo‘lining narxi bu maqolada solishtirilmagan. So‘mda narx oldindan ko‘rinadi: karta o‘tkazmasida ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}, hamyon ochish esa talab qilinmaydi.` },
  { question: "Wallet bilan Tonkeeper’ning Stars’ga aloqasi bormi?", answer: "Telegram qoidalari ikkalasini ham TON blokcheynidagi hamyon deb ko‘rsatadi. Ular kripto aktivlar uchun, Stars xaridi esa ularning ishtirokisiz o‘tadi." },
  { question: "Kanalim to‘plagan Stars’ni Wallet’ga chiqarsa bo‘ladimi?", answer: "Yechib olish shartlari bu maqolada tekshirilmagan. Daromad qanday hisoblanishini «Stars qanday ishlaydi» maqolasidan o‘qing va joriy qoidalarni Telegram sahifalarida ko‘ring." },
  { question: "Kolleksion sovg‘ani so‘mda olsam, u Wallet’da paydo bo‘ladimi?", answer: "Sovg‘a Telegram ichida, akkauntingizda turadi. Uni blokcheynga ko‘chirish alohida amal va shu bosqichda TON hamyon kerak bo‘lishi mumkin." },
  { question: "Kimdir Stars’imni Gram’ga almashtirib berishni taklif qilyapti — ishonsam bo‘ladimi?", answer: "Bunday takliflar odatda seed-ibora, kod yoki oldindan pul so‘rash bilan tugaydi. StarsPaymee yulduzlarni foydalanuvchidan sotib olmaydi, uning nomidan kelgan almashtirish taklifi soxta." },
  { question: "Wallet haqidagi yangiliklar Stars narxini o‘zgartiradimi?", answer: "Botda Stars so‘mda sotiladi va narx tanlangan to‘lov usuliga qarab ko‘rsatiladi. Xarid uchun tanga kursini hisoblab o‘tirish shart emas." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, это разные вещи. Telegram Wallet — кошелёк для активов в блокчейне TON. Stars — платёжная единица для цифровых покупок внутри Telegram. Они хранятся на разных балансах и сами по себе друг в друга не переходят. Для покупки Stars не нужны ни кошелёк, ни TON, ни крипта: звёзды можно купить в сумах, указав только @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#walletdagi-gram-va-stars-balansi", label: "Gram в Wallet и баланс Stars — это одно и то же?" },
          { href: "#nega-hozir-hamma-wallet-haqida", label: "Почему сейчас все говорят о Wallet?" },
          { href: "#wallet-va-stars-bitta-jadvalda", label: "Wallet и Stars: разница в одной таблице" },
          { href: "#stars-olish-uchun-wallet-yoki", label: "Нужен ли Wallet или TON, чтобы купить Stars?" },
          { href: "#hamyonsiz-stars-qanday-olinadi-qadamlar", label: "Как купить Stars без кошелька: пошагово" },
          { href: "#wallet-va-stars-qayerda-kesishadi", label: "Где пересекаются Wallet и Stars?" },
          { href: "#ikki-balansni-adashtirish-qanday-xatolarga", label: "К каким ошибкам приводит путаница двух балансов?" },
          { href: "#wallet-nomidan-keladigan-aldovni-qanday", label: "Как распознать обман от имени Wallet?" },
          { href: "#sizga-qaysi-biri-kerak-wallet", label: "Что нужно именно вам: Wallet, Stars или оба?" },
        ]}
      />
      <h2 id="walletdagi-gram-va-stars-balansi">Gram в Wallet и баланс Stars — это одно и то же?</h2>
      <p>Нет. Оба баланса видны внутри Telegram, поэтому их легко перепутать. Но задачи у них разные.</p>
      <p><b>Wallet</b> — криптокошелёк. Он нужен для управления активами в блокчейне TON. В <a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">правилах для блокчейн-приложений</a>, которые Telegram написал для мини-приложений, Wallet упоминается среди кошельков на TON — рядом с Tonkeeper и MyTonWallet. То есть документ ставит его в один ряд с другими TON-кошельками.</p>
      <p><b>Stars</b> — внутренняя платёжная единица Telegram. Звёзды лежат не в кошельке, а в разделе Stars самого Telegram. Ими платят в ботах, ставят реакции в каналах и отправляют подарки. Где именно виден баланс, пошагово показано в статье <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</p>
      <p>Отдельно о названии монеты. В некоторых каналах и новостях основную монету Wallet называют «Gram». На официальных страницах, которые мы проверили, это переименование не подтверждено, так что относитесь к такой информации осторожно. На эту тему есть и статья <Link href="/blog/toncoin-endi-gram">«Toncoin теперь Gram»</Link>. Как бы ни называлась монета, это не Stars, и на балансе Stars она не отображается.</p>
      <h3>Сравните два баланса сами</h3>
      <p>Разницу легко увидеть своими глазами. Откройте раздел Stars в Telegram и запомните число. Потом откройте окно кошелька. Там будет другое число и другая единица. Когда растёт один баланс, второй не меняется.</p>
      <h2 id="nega-hozir-hamma-wallet-haqida">Почему сейчас все говорят о Wallet?</h2>
      <p>В Telegram-каналах разошлись посты о том, что новых кошельков в Wallet становится больше, а условия активации кошелька изменились. После этого многие начали спрашивать: «Stars теперь тоже переехали в Wallet?»</p>
      <Notice label={"Важно"}>Количество кошельков и условия активации из постов в каналах официальными источниками не подтверждены. Поэтому в этой статье цифр по ним нет.</Notice>
      <p>Проверяйте новости на страницах самого Telegram. Мессенджер постоянно добавляет новые функции, и на странице <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> прямо предупреждают, что информация там может быть устаревшей. Не делайте поспешных выводов по одной странице.</p>
      <p>Вывод для покупателя Stars простой: новости о Wallet напрямую не влияют на порядок покупки звёзд. Заказ, как и раньше, оформляется по username с оплатой в сумах.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="wallet-va-stars-bitta-jadvalda">Wallet и Stars: разница в одной таблице</h2>
      <CompareTable
        headers={["Критерий", "Telegram Wallet", "Telegram Stars"]}
        rows={[
          ["Что это", "Криптокошелёк в блокчейне TON", "Платёжная единица внутри Telegram"],
          ["Где отображается", "В собственном окне кошелька", "В разделе Stars в Telegram"],
          ["Для чего", "Блокчейн-активы, подключение к мини-приложениям через TON Connect", "Покупки в ботах, реакции, подарки, подписки"],
          ["К чему привязан", "К кошельку", "К аккаунту Telegram"],
          ["Как пополнить", "Способы пополнения в сумах в этой статье не проверялись", "В сумах через @StarsPaymee_bot"],
          ["Цена и комиссия", "Комиссии кошелька в этой статье не проверялись", `1 звезда: ${som(STARS_PER_UNIT_UZS, "ru")} (перевод на карту или баланс бота), ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} (Click, Payme, Uzum, Paynet)`],
          ["Кому нужен", "Тем, кто осознанно работает с криптой", "Всем, кто совершает платные действия в Telegram"],
        ]}
      />
      <p>В повседневной жизни главную разницу даёт последняя строка. Чтобы поставить звёздную реакцию в канале, купить что-то в боте или отправить подарок другу, нужны только Stars. Wallet ни в одном из этих действий не участвует.</p>
      <h2 id="stars-olish-uchun-wallet-yoki">Нужен ли Wallet или TON, чтобы купить Stars?</h2>
      <p>Не нужен. Stars зачисляются не на кошелёк, а на аккаунт Telegram. Поэтому для покупки достаточно одного — @username.</p>
      <p>В StarsPaymee заказ устроен так:</p>
      <ul>
        <li>нужен только @username; пароль, SMS-код или вход в аккаунт не запрашиваются;</li>
        <li>оплата в сумах: Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота;</li>
        <li>международная карта, криптокошелёк или VPN не нужны.</li>
      </ul>
      <p>Пример: бабушка хочет поставить звёздную реакцию под постом в канале. Она ни разу не открывала Wallet и не знает, что такое TON. Вы вводите её username в боте и покупаете ей 100 Stars. Звёзды появляются в разделе Stars её Telegram, и она может ставить реакцию. Кошелёк не понадобился ни на одном этапе.</p>
      <p>Если карты нет или хочется заплатить наличными, способы подробно описаны в статье <Link href="/blog/telegram-stars-kartasiz-sotib-olish">как купить Stars без карты</Link>. Все пакеты собраны на <Link href="/stars">странице Stars</Link>.</p>
      <h2 id="hamyonsiz-stars-qanday-olinadi-qadamlar">Как купить Stars без кошелька: пошагово</h2>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в @StarsPaymee_bot или в его Mini App.</Step>
        <Step title={"Введите username"}>свой или чужой. Нужно не имя в профиле, а username, который начинается с @.</Step>
        <Step title={"Выберите количество"}>минимальный заказ 50 Stars.</Step>
        <Step title={"Выберите способ оплаты"}>цена зависит от способа: при переводе на карту или с баланса бота {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</Step>
        <Step title={"Оплатите"}>заказ обычно доставляется автоматически за несколько секунд (~5 секунд).</Step>
        <Step title={"Проверьте баланс"}>ищите звёзды не в кошельке, а в разделе Stars в Telegram.</Step>
      </Steps>
      <p>Чаще всего ошибаются на втором шаге. Если в username пропущена одна буква или нижнее подчёркивание, звёзды могут уйти на чужой аккаунт. Попросите друга не диктовать username голосом, а скопировать и прислать его.</p>
      <h2 id="wallet-va-stars-qayerda-kesishadi">Где пересекаются Wallet и Stars?</h2>
      <p>Хотя системы раздельные, есть места, где они сближаются.</p>
      <h3>Коллекционные подарки</h3>
      <p>В <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">блоге Telegram</a> 24 января 2025 года вышел пост о переносе коллекционных подарков в блокчейн. Если вы захотите вывести подарок в блокчейн, может понадобиться TON-кошелёк. Чтобы получить подарок или показывать его внутри Telegram, обращаться к кошельку не нужно. Готовый коллекционный подарок можно купить в сумах в NFT Market внутри @StarsPaymee_bot — подробнее в <Link href="/blog/starspaymee-nft-market">статье о NFT Market</Link>.</p>
      <h3>Криптовалютные мини-приложения</h3>
      <p>По <a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">правилам Telegram</a> криптовалютные мини-приложения должны использовать для токенов и блокчейн-активов только блокчейн TON. С кошельками они тоже должны работать исключительно через TON Connect. Приложения на других блокчейнах должны были перейти на TON до 21 февраля 2025 года.</p>
      <p>Если мини-приложение просит подключить кошелёк, это действие относится к TON, а не к Stars. Прежде чем подключать, подумайте о трёх вещах:</p>
      <ul>
        <li>зачем вам это приложение и где вы его нашли;</li>
        <li>можно ли сделать нужное без подключения кошелька;</li>
        <li>не просит ли приложение seed-фразу или пароль — если просит, сразу закрывайте.</li>
      </ul>
      <h3>Доход канала</h3>
      <p>Владелец канала может собирать звёзды с Star-реакций или платных постов. Условия их вывода или обмена на что-то другое в этой статье не проверялись. Общий механизм объяснён в статье <Link href="/blog/telegram-stars-qanday-ishlaydi">как работают Stars</Link>.</p>
      <h2 id="ikki-balansni-adashtirish-qanday-xatolarga">К каким ошибкам приводит путаница двух балансов?</h2>
      <ul>
        <li><b>Искать Stars в кошельке.</b> Прежде чем волноваться, что «звёзды не пришли», посмотрите в правильное место. Stars видны только в разделе Stars в Telegram.</li>
        <li><b>Указывать в заказе адрес кошелька.</b> Некоторые вместо username пишут длинный адрес кошелька или имя профиля. Боту нужен только @username, остальное лишь запутывает заказ.</li>
        <li><b>Принимать правила за инструкцию.</b> Раздел о кошельках в правилах Telegram — не руководство для обычного пользователя. На самой странице сказано, что это примеры прежде всего для мини-приложений, которые работают как криптокошелёк.</li>
        <li><b>Верить предложениям «обменяем».</b> StarsPaymee не выкупает у пользователей Stars и подарки. Предложение «обменяем ваши Stars на Gram» от его имени к сервису отношения не имеет.</li>
      </ul>
      <h2 id="wallet-nomidan-keladigan-aldovni-qanday">Как распознать обман от имени Wallet?</h2>
      <p>Когда выходит громкая новость, активизируются и мошенники. В их сообщениях часто встречаются такие фразы:</p>
      <ul>
        <li>«Чтобы активировать кошелёк, отправьте TON»;</li>
        <li>«Переведём ваши Stars в Wallet»;</li>
        <li>«Подтвердите seed-фразу для безопасности»;</li>
        <li>«Подключите кошелёк по этой ссылке, чтобы получить бонус».</li>
      </ul>
      <Notice label={"Важно"}>Никому не сообщайте seed-фразу, пароль и SMS-код. Для покупки Stars или Premium такие данные вообще не нужны.</Notice>
      <p>Если пришло такое сообщение, не отвечайте и не открывайте ссылку. Правила и новости о Wallet проверяйте на официальных страницах — telegram.org и core.telegram.org. Скриншот из поста в канале — не доказательство. Если есть вопрос по заказу, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. StarsPaymee — независимый сервис и не действует от имени Telegram.</p>
      <h2 id="sizga-qaysi-biri-kerak-wallet">Что нужно именно вам: Wallet, Stars или оба?</h2>
      <p>Выбирайте по ситуации:</p>
      <ul>
        <li>реакция в канале, покупка в боте, подарок или подписка — только Stars;</li>
        <li>работа с криптовалютным мини-приложением или блокчейн-активом — TON-кошелёк;</li>
        <li>вывод коллекционного подарка в блокчейн — кошелёк может понадобиться;</li>
        <li>Telegram Premium — кошелёк не обязателен.</li>
      </ul>
      <p>Premium тоже подключается по username, через механизм подарков Telegram: 3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")}. Цена одинаковая при любом способе оплаты. Если на аккаунте Premium ещё активен, бот не откроет новый заказ. Тарифы — на <Link href="/premium">странице Premium</Link>.</p>
      <p>Большинству тех, кто пользуется Telegram каждый день, хватит Stars. Wallet — для тех, кто осознанно работает с криптой и понимает риски этого пути.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли перевести Gram из Wallet на баланс Stars?", answer: "Автоматического моста между балансами нет: монета хранится в блокчейне, а звёзды — на аккаунте Telegram. Официальный способ обмена в этой статье не подтверждён, поэтому держитесь подальше от посредников, которые предлагают «перевести»." },
  { question: "Если я куплю Stars, они появятся в Telegram Wallet?", answer: "Не появятся. Звёзды зачисляются в раздел Stars в Telegram, в окне кошелька вы их не найдёте." },
  { question: "У меня нет Wallet — может ли друг купить мне Stars?", answer: "Да, кошелёк не обязателен. Если друг введёт в боте ваш @username, звёзды придут на ваш аккаунт." },
  { question: "Можно ли отправить Stars на адрес TON-кошелька?", answer: "Нет, заказ работает только по username. Если указать адрес кошелька, бот не сможет определить получателя." },
  { question: "Что дешевле: купить Stars в сумах или через крипту?", answer: `Стоимость пути через крипту в этой статье не сравнивалась. В сумах цена видна заранее: при переводе на карту ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}, и открывать кошелёк не требуется.` },
  { question: "Связаны ли Wallet и Tonkeeper со Stars?", answer: "Правила Telegram называют оба кошелька TON-кошельками. Они предназначены для криптоактивов, а покупка Stars проходит без их участия." },
  { question: "Можно ли вывести Stars, которые собрал мой канал, в Wallet?", answer: "Условия вывода в этой статье не проверялись. Как начисляется доход, читайте в статье «Как работают Stars», а действующие правила смотрите на страницах Telegram." },
  { question: "Если купить коллекционный подарок в сумах, он появится в Wallet?", answer: "Подарок хранится внутри Telegram, на вашем аккаунте. Перенос в блокчейн — отдельное действие, и на этом этапе может понадобиться TON-кошелёк." },
  { question: "Мне предлагают обменять мои Stars на Gram — можно доверять?", answer: "Такие предложения обычно заканчиваются просьбой прислать seed-фразу, код или деньги вперёд. StarsPaymee не выкупает звёзды у пользователей, так что предложение обмена от его имени — подделка." },
  { question: "Влияют ли новости о Wallet на цену Stars?", answer: "В боте Stars продаются в сумах, а цена показывается в зависимости от выбранного способа оплаты. Пересчитывать курс монеты для покупки не нужно." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, they are two different things. Telegram Wallet is a wallet for assets on the TON blockchain. Stars are a payment unit for digital purchases inside Telegram. Each has its own balance, and nothing moves between them automatically. You don’t need a wallet, TON or any crypto to get Stars. You can buy them in soum with just an @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#walletdagi-gram-va-stars-balansi", label: "Are Gram in Wallet and your Stars balance the same thing?" },
          { href: "#nega-hozir-hamma-wallet-haqida", label: "Why is everyone talking about Wallet right now?" },
          { href: "#wallet-va-stars-bitta-jadvalda", label: "Wallet vs Stars: the differences in one table" },
          { href: "#stars-olish-uchun-wallet-yoki", label: "Do you need Wallet or TON to buy Stars?" },
          { href: "#hamyonsiz-stars-qanday-olinadi-qadamlar", label: "How to buy Stars without a wallet: step by step" },
          { href: "#wallet-va-stars-qayerda-kesishadi", label: "Where do Wallet and Stars overlap?" },
          { href: "#ikki-balansni-adashtirish-qanday-xatolarga", label: "What mistakes come from mixing up the two balances?" },
          { href: "#wallet-nomidan-keladigan-aldovni-qanday", label: "How to spot scams using the Wallet name" },
          { href: "#sizga-qaysi-biri-kerak-wallet", label: "Which one do you need: Wallet, Stars or both?" },
        ]}
      />
      <h2 id="walletdagi-gram-va-stars-balansi">Are Gram in Wallet and your Stars balance the same thing?</h2>
      <p>No. Both appear inside Telegram, so they are easy to confuse. Their jobs are completely different.</p>
      <p><b>Wallet</b> is a crypto wallet. It manages assets on the TON blockchain. Telegram’s <a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">blockchain guidelines</a> for mini apps list Wallet among TON-based wallets, alongside Tonkeeper and MyTonWallet. In other words, the document puts it in the same category as other TON wallets.</p>
      <p><b>Stars</b> are Telegram’s internal payment unit. Stars are not kept in a wallet. They sit in the Stars section of Telegram itself. You use them to pay in bots, send reactions in channels and send gifts. Our guide on <Link href="/blog/telegram-stars-balansini-tekshirish">how to check your Stars balance</Link> shows step by step where the balance appears.</p>
      <p>The coin’s name needs its own note. Some channels and news posts now call the main coin in Wallet “Gram”. The official pages we checked do not confirm this rename, so treat that claim with caution. We also have a separate article, <Link href="/blog/toncoin-endi-gram">Toncoin is now called Gram</Link>. Whatever the coin is called, it is not Stars and it does not show up in your Stars balance.</p>
      <h3>Check both balances side by side</h3>
      <p>You can see the difference yourself. Open the Stars section in Telegram and note the number there. Then open the wallet screen. You’ll see two different numbers in two different units. When one goes up, the other stays the same.</p>
      <h2 id="nega-hozir-hamma-wallet-haqida">Why is everyone talking about Wallet right now?</h2>
      <p>Telegram channels have been sharing posts saying that more new wallets are being opened and that the activation requirement has changed. After that, many people started asking: “Have Stars moved to Wallet too?”</p>
      <Notice label={"Important"}>Official sources do not confirm the wallet counts or the activation terms mentioned in channel posts. For that reason, this article gives no figures for them.</Notice>
      <p>Check news against Telegram’s own pages. Telegram keeps adding new features. Even the <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> warns that it may contain outdated information. Don’t jump to conclusions after reading a single page.</p>
      <p>What this means for someone buying Stars: news about Wallet does not directly change how you buy Stars. Orders still work the same way, with a username and a payment in soum.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="wallet-va-stars-bitta-jadvalda">Wallet vs Stars: the differences in one table</h2>
      <CompareTable
        headers={["Criterion", "Telegram Wallet", "Telegram Stars"]}
        rows={[
          ["What it is", "A crypto wallet on the TON blockchain", "A payment unit inside Telegram"],
          ["Where you see it", "In the wallet’s own screen", "In the Stars section of Telegram"],
          ["What it’s used for", "Blockchain assets, connecting to mini apps via TON Connect", "Bot purchases, reactions, gifts, subscriptions"],
          ["What it’s tied to", "The wallet", "Your Telegram account"],
          ["How to top it up", "Ways to fund it in soum were not checked for this article", "In soum, via @StarsPaymee_bot"],
          ["Price and fees", "Wallet fees were not checked for this article", `1 Star: ${som(STARS_PER_UNIT_UZS, "en")} (card transfer or bot balance), ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} (Click, Payme, Uzum, Paynet)`],
          ["Who needs it", "People who deliberately work with crypto", "Anyone who pays for things inside Telegram"],
        ]}
      />
      <p>In everyday use, the last row matters most. To send a Star reaction to a channel, buy something in a bot or send a friend a gift, you only need Stars. Wallet plays no part in any of these.</p>
      <h2 id="stars-olish-uchun-wallet-yoki">Do you need Wallet or TON to buy Stars?</h2>
      <p>No. Stars go to your Telegram account, not to a wallet. So one piece of information is enough to make a purchase: an @username.</p>
      <p>Here’s how an order works at StarsPaymee:</p>
      <ul>
        <li>only an @username is required; no password, SMS code or account access is ever requested;</li>
        <li>you pay in soum: Click, Payme, Uzum, Paynet (in the app or with cash at a terminal), a transfer to an UzCard/HUMO card, or your bot balance;</li>
        <li>no international card, crypto wallet or VPN is needed.</li>
      </ul>
      <p>An example: your grandmother wants to send a Star reaction to a channel post. She has never opened Wallet and has no idea what TON is. You enter her username in the bot and buy her 100 Stars. The Stars appear in the Stars section of her Telegram, and she can send the reaction. At no point does anyone need a wallet.</p>
      <p>If you don’t have a card or want to pay in cash, the options are explained in our guide on <Link href="/blog/telegram-stars-kartasiz-sotib-olish">buying Stars without a card</Link>. All packages are on the <Link href="/stars">Stars page</Link>.</p>
      <h2 id="hamyonsiz-stars-qanday-olinadi-qadamlar">How to buy Stars without a wallet: step by step</h2>
      <Steps>
        <Step title={"Open the bot"}>Go to @StarsPaymee_bot or its Mini App.</Step>
        <Step title={"Enter the username"}>It can be yours or someone else’s. You need the username that starts with @, not the display name on the profile.</Step>
        <Step title={"Choose the amount"}>The minimum order is 50 Stars.</Step>
        <Step title={"Choose a payment method"}>The price depends on the method: {som(STARS_PER_UNIT_UZS, "en")} by card transfer or from your bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet.</Step>
        <Step title={"Pay"}>The order is usually delivered automatically within a few seconds (~5 seconds).</Step>
        <Step title={"Check the balance"}>Look for the Stars in the Stars section of Telegram, not in a wallet.</Step>
      </Steps>
      <p>Step two is where most mistakes happen. If a single letter or an underscore is missing from the username, the Stars may go to another account. Ask your friend to copy and send you their username rather than read it out loud.</p>
      <h2 id="wallet-va-stars-qayerda-kesishadi">Where do Wallet and Stars overlap?</h2>
      <p>The two systems are separate, but there are a few places where they come close.</p>
      <h3>Collectible gifts</h3>
      <p>On 24 January 2025, the <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blog</a> published a post about moving collectible gifts to the blockchain. If you want to move a gift onto the blockchain, you may need a TON wallet. You don’t need a wallet to receive a gift or display it inside Telegram. To buy a ready-made collectible gift in soum, use the NFT Market in @StarsPaymee_bot. Our <Link href="/blog/starspaymee-nft-market">NFT Market article</Link> explains how it works.</p>
      <h3>Crypto mini apps</h3>
      <p>Under <a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">Telegram’s rules</a>, crypto mini apps must use only the TON blockchain for tokens and blockchain assets. They also have to connect to wallets only through TON Connect. Apps running on other blockchains had to move to TON by 21 February 2025.</p>
      <p>If a mini app asks you to connect a wallet, that is a TON action, not a Stars one. Before connecting, consider three things:</p>
      <ul>
        <li>why you need this app and where you found it;</li>
        <li>whether you can do what you need without connecting a wallet;</li>
        <li>whether the app is asking for a seed phrase or password. If it is, close it immediately.</li>
      </ul>
      <h3>Channel earnings</h3>
      <p>Channel owners can collect Stars from Star reactions or paid posts. We have not checked the rules for withdrawing them or converting them into anything else. The general mechanics are explained in <Link href="/blog/telegram-stars-qanday-ishlaydi">how Telegram Stars work</Link>.</p>
      <h2 id="ikki-balansni-adashtirish-qanday-xatolarga">What mistakes come from mixing up the two balances?</h2>
      <ul>
        <li><b>Looking for Stars in the wallet.</b> Before you worry that your Stars “didn’t arrive”, check the right place. Stars only appear in Telegram’s Stars section.</li>
        <li><b>Entering a wallet address in the order.</b> Some people type a long wallet address or their profile name instead of a username. The bot only needs an @username. Anything else gets the order mixed up.</li>
        <li><b>Treating the rules page as a how-to guide.</b> The wallet section of Telegram’s guidelines is not a manual for ordinary users. The page itself says it contains examples for mini apps that mainly work as a crypto wallet.</li>
        <li><b>Trusting “we’ll swap it for you” offers.</b> StarsPaymee does not buy Stars or gifts from users. Any offer to “swap your Stars for Gram” in its name has nothing to do with the service.</li>
      </ul>
      <h2 id="wallet-nomidan-keladigan-aldovni-qanday">How to spot scams using the Wallet name</h2>
      <p>Whenever big news breaks, scammers get busy too. Their messages often include lines like these:</p>
      <ul>
        <li>“Send TON to activate your wallet”;</li>
        <li>“We’ll move your Stars to Wallet for you”;</li>
        <li>“Confirm your seed phrase for security”;</li>
        <li>“Connect your wallet through this link to get a bonus”.</li>
      </ul>
      <Notice label={"Important"}>Never give your seed phrase, password or SMS code to anyone. Buying Stars or Premium never requires this kind of information.</Notice>
      <p>If you get a message like this, don’t reply and don’t open the link. Check any Wallet rule or news on official pages such as telegram.org and core.telegram.org. A screenshot in a channel post is not proof. If you have a question about an order, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. StarsPaymee is an independent service and does not act on behalf of Telegram.</p>
      <h2 id="sizga-qaysi-biri-kerak-wallet">Which one do you need: Wallet, Stars or both?</h2>
      <p>Choose based on what you want to do:</p>
      <ul>
        <li>channel reactions, bot purchases, gifts or subscriptions: Stars only;</li>
        <li>crypto mini apps or blockchain assets: a TON wallet;</li>
        <li>moving a collectible gift onto the blockchain: you may need a wallet;</li>
        <li>Telegram Premium: no wallet needed.</li>
      </ul>
      <p>Premium is also activated by username, through Telegram’s gifting mechanism: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. The price is the same for every payment method. If Premium is still active on the account, the bot won’t open a new order. Plans are listed on the <Link href="/premium">Premium page</Link>.</p>
      <p>For most people who use Telegram every day, Stars are enough. Wallet is for those who choose to work with crypto and understand the risks that come with it.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I move Gram from Wallet to my Stars balance?", answer: "There is no automatic link between the two balances: coins live on the blockchain, Stars live in your Telegram account. We have not confirmed any official conversion route, so stay away from middlemen who offer to “transfer” them for you." },
  { question: "If I buy Stars, will they show up in Telegram Wallet?", answer: "No. Stars land in Telegram’s Stars section. You won’t find them on the wallet screen." },
  { question: "I’ve never opened Wallet. Can a friend still buy Stars for me?", answer: "Yes, you don’t need a wallet at all. If your friend enters your @username in the bot, the Stars go straight to your account." },
  { question: "Can Stars be sent to a TON wallet address?", answer: "No, orders only work by username. If you enter a wallet address, the bot can’t identify the recipient." },
  { question: "Is it cheaper to buy Stars in soum or with crypto?", answer: `This article doesn’t compare the cost of the crypto route. In soum, you see the price upfront: ${som(STARS_PER_UNIT_UZS, "en")} by card transfer, ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet, and no wallet is required.` },
  { question: "Do Wallet and Tonkeeper have anything to do with Stars?", answer: "Telegram’s rules describe both as wallets on the TON blockchain. They are for crypto assets, while buying Stars doesn’t involve either of them." },
  { question: "Can I withdraw the Stars my channel earned to Wallet?", answer: "We haven’t checked the withdrawal terms for this article. Read “How Telegram Stars work” to see how earnings are calculated, and check the current rules on Telegram’s own pages." },
  { question: "If I buy a collectible gift in soum, will it appear in Wallet?", answer: "The gift stays inside Telegram, on your account. Moving it to the blockchain is a separate step, and that’s when you may need a TON wallet." },
  { question: "Someone is offering to swap my Stars for Gram. Should I trust them?", answer: "Offers like this usually end with a request for your seed phrase, a code or money upfront. StarsPaymee doesn’t buy Stars from users, so any swap offer in its name is fake." },
  { question: "Does Wallet news change the price of Stars?", answer: "The bot sells Stars in soum, and the price shown depends on the payment method you pick. You don’t need to work out any coin exchange rate to make a purchase." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram wallet va stars farqi","telegram wallet nima","telegram stars nima","wallet gram stars","stars olish uchun hamyon kerakmi","telegram stars hamyonsiz sotib olish","telegram wallet stars balansi","разница telegram wallet и stars","telegram wallet и звезды","нужен ли кошелек для telegram stars","звезды телеграм без кошелька","telegram wallet gram что это"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot’ga yoki uning Mini App’iga kiring." },
    { name: "Username kiriting", text: "o‘zingizniki yoki boshqa odamniki bo‘lishi mumkin. Profildagi ism emas, @ bilan boshlanadigan username kerak." },
    { name: "Miqdorni tanlang", text: "eng kam buyurtma 50 Stars." },
    { name: "To‘lov usulini tanlang", text: `narx usulga bog‘liq: karta o‘tkazmasi yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.` },
    { name: "To‘lang", text: "buyurtma odatda bir necha soniyada (~5 soniya) avtomatik yetkaziladi." },
    { name: "Balansni tekshiring", text: "yulduzlarni hamyondan emas, Telegram’dagi Stars bo‘limidan qidiring." },
  ],
  locales: {
    uz: {
      title: "Telegram Wallet va Stars farqi: hamyondagi Gram va yulduzlar bir balansmi?",
      excerpt: "Yo‘q, Wallet’dagi tanga va Telegram Stars — ikki alohida balans, Stars olish uchun hamyon kerak emas. Maqolada farqlar jadvali, ular kesishadigan joylar, hamyonsiz xarid qadamlari va aldov belgilari bor.",
      metaTitle: "Telegram Wallet va Stars farqi",
      metaDescription: "Yo‘q, Wallet’dagi tanga va Telegram Stars — ikki alohida balans, Stars olish uchun hamyon kerak emas.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Telegram Wallet и Stars: Gram в кошельке и звёзды — это один баланс?",
      excerpt: "Нет: монеты в Wallet и Telegram Stars — два отдельных баланса, и кошелёк для покупки звёзд не нужен. В статье — таблица различий, точки пересечения, шаги покупки без кошелька и признаки обмана.",
      metaTitle: "Telegram Wallet и Stars: Gram в кошельке",
      metaDescription: "Нет: монеты в Wallet и Telegram Stars — два отдельных баланса, и кошелёк для покупки звёзд не нужен.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Wallet vs Stars: Are Gram and Stars the Same Balance?",
      excerpt: "No. Coins in Wallet and Telegram Stars are two separate balances, and you don’t need a wallet to buy Stars. This guide compares them, shows where they overlap, and covers wallet-free buying steps and scam signs.",
      metaTitle: "Telegram Wallet vs Stars: Are Gram",
      metaDescription: "No. Coins in Wallet and Telegram Stars are two separate balances, and you don’t need a wallet to buy Stars.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
