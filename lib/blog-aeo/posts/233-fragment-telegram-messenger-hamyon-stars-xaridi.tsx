import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "fragment-telegram-messenger-hamyon-stars-xaridi";

/**
 * Fragment’dagi «Telegram Messenger» hamyoni: Stars uchun qaysini tanlaysiz?
 *
 * Avtoblogyoz yasagan maqola (2026-11-15): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Fragment’da Stars’ni TON bilan olmoqchi bo‘lgan o‘zbekistonlik foydalanuvchi TON Connect ro‘yxatida yangi «Telegram Messenger» yozuvini ko‘radi va «Fragment Telegram Messenger hamyoni Stars olish» deb qidiradi. U to‘lov uchun qaysi yozuvni tanlashni, bu yozuv xaridni o‘zgartiradimi-yo‘qmi va Stars’ni hamyonsiz so‘mda olish oddiyroq emasmi — shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-15):
 *   https://fragment.com/about
 *   https://core.telegram.org/bots/blockchain-guidelines
 *   https://core.telegram.org/bots/api-changelog
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Fragment’da Stars’ni TON bilan to‘lasangiz, ro‘yxatdagi yozuv nomiga qaramang. TON qaysi ilovada turgan bo‘lsa, o‘shani tanlang. Kanal postida tilga olingan yangi «Telegram Messenger» yozuvi rasman tasdiqlanmagan. Hamyon tanlovi Stars narxini ham, Stars qaysi akkauntga tushishini ham o‘zgartirmaydi. TON hamyoningiz bo‘lmasa, Stars’ni @username bilan so‘mda olish oddiyroq.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#fragmentda-stars-tolash-uchun-royxatdan", label: "Fragment’da Stars to‘lash uchun ro‘yxatdan qaysi yozuvni tanlaysiz?" },
          { href: "#kanal-posti-nimani-davo-qiladi", label: "Kanal posti nimani da’vo qiladi va rasman nima tasdiqlangan?" },
          { href: "#yozuv-nomi-stars-narxini-miqdorini", label: "Yozuv nomi Stars narxini, miqdorini yoki yetkazilishini o‘zgartiradimi?" },
          { href: "#fragmentda-ton-bilan-stars-tolash", label: "Fragment’da TON bilan Stars to‘lash tartibi qanday?" },
          { href: "#notogri-hamyonni-ulab-qoysangiz-yoki", label: "Noto‘g‘ri hamyonni ulab qo‘ysangiz yoki kalitni yo‘qotsangiz nima bo‘ladi?" },
          { href: "#fragment-va-somdagi-bot-ikki", label: "Fragment va so‘mdagi bot: ikki yo‘lning har biri nimani talab qiladi?" },
          { href: "#fragment-va-bot-narxini-qanday", label: "Fragment va bot narxini qanday solishtirasiz?" },
          { href: "#starsni-hamyonsiz-somda-qanday-olasiz", label: "Stars’ni hamyonsiz, so‘mda qanday olasiz?" },
          { href: "#telegram-messenger-nomi-bilan-keladigan", label: "«Telegram Messenger» nomi bilan keladigan qaysi xabarlar firibgarlik belgisi?" },
        ]}
      />
      <h2 id="fragmentda-stars-tolash-uchun-royxatdan">Fragment’da Stars to‘lash uchun ro‘yxatdan qaysi yozuvni tanlaysiz?</h2>
      <p>Fragment’da hamyon sahifaning yuqori o‘ng burchagidagi «Connect TON» tugmasi orqali ulanadi. Bu <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment qo‘llanmasida</a> yozilgan. Tugmani bossangiz, TON Connect oynasida hamyonlar ro‘yxati chiqadi.</p>
      <p>Tanlov qoidasi bitta: TON qaysi ilovada turgan bo‘lsa, ro‘yxatdan o‘sha ilovani bosasiz. Yozuvning nomi, ikonkasi va ro‘yxatdagi o‘rni bunda hech narsani hal qilmaydi.</p>
      <ul>
        <li><b>TON Tonkeeper’da bo‘lsa</b> — Tonkeeper’ni tanlang.</li>
        <li><b>TON MyTonWallet’da bo‘lsa</b> — MyTonWallet’ni tanlang.</li>
        <li><b>TON Telegram ichidagi hamyonda bo‘lsa</b> — Telegram nomli yozuvni bosing. Ochilgan oynadagi balans va manzil sizniki ekanini albatta tekshiring.</li>
        <li><b>TON umuman yo‘q bo‘lsa</b> — Fragment yo‘li sizga mos emas. So‘mda olish yo‘li pastroqda.</li>
      </ul>
      <p>Misol. Aziz TON’ni Tonkeeper’da saqlaydi. Ro‘yxatda tanish «Telegram» so‘zini ko‘rib, o‘shani bosadi. Ulanish o‘tadi, ammo tasdiqlash so‘rovi TON’i yo‘q boshqa hamyonda ochiladi va to‘lovni imzolab bo‘lmaydi. Aziz ulanishni yopib, Tonkeeper’ni qaytadan ulaydi. Bu safar balansi bor hamyon chiqadi.</p>
      <p>Ulangandan keyin Fragment to‘g‘ri hamyon ulanganini qayta tekshirishni tavsiya qiladi. Buning oson usuli bor: Fragment ko‘rsatgan manzilning oxirgi bir necha belgisini hamyon ilovasidagi manzil bilan solishtiring. Mos kelmasa, davom etmang.</p>
      <p>Yangi «Telegram Messenger» yozuvi ro‘yxatda bor-yo‘qligi va bosilganda qayerga olib borishi haqida faqat Telegram kanal postida aytilgan. Bu maqola uchun buni tasdiqlab bo‘lmadi. Yozuvni bosganingizda @wallet ochilsa, ekranda nima chiqishini <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">Telegram Desktop’dagi @wallet havolasi haqidagi maqolada</Link> o‘qing.</p>
      <h2 id="kanal-posti-nimani-davo-qiladi">Kanal posti nimani da’vo qiladi va rasman nima tasdiqlangan?</h2>
      <p>Mavzu kanal postidan chiqqan, ammo kanal posti rasmiy manba emas. Postdagi da’volarni Telegram hujjatlari bilan birma-bir solishtirdik.</p>
      <CompareTable
        headers={["Da’vo", "Manba", "Holati"]}
        rows={[
          ["Fragment’ning TON Connect ro‘yxatida alohida «Telegram Messenger» yozuvi paydo bo‘lgan", "Telegram kanal posti", "Rasmiy tasdiq topilmadi"],
          ["Yangi yozuvning ikonkasi boshqacha, u ro‘yxat oxirida turadi, «Wallet in Telegram» esa boshida", "Telegram kanal posti", "Tasdiqlanmagan"],
          ["Yangi yozuv bosilganda hozircha @wallet ochiladi", "Telegram kanal posti", "Tekshirilmagan"],
          ["Hamyonlar reyestrida ikkita alohida yozuv bor, yangisining o‘z tg:// havolasi va ko‘prigi bor", "Telegram kanal posti", "Tekshirilmagan"],
          ["Bot API’ga TonWalletCard, TonWalletCardSticker, TonNft, TonNftAttribute klasslari va ton_wallet_card maydoni qo‘shilgan", <span key="r4c1"><a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a></span>, "Tasdiqlangan"],
          ["Message klassiga TonWalletTransfer klassi va ton_wallet_transfer maydoni qo‘shilgan", "Bot API changelog", "Tasdiqlangan"],
          ["Botga keladigan so‘rovda foydalanuvchining TON hamyon kartasi va hamyonda imzolangan ma’lumot bo‘lishi mumkin", "Bot API changelog", "Tasdiqlangan"],
        ]}
      />
      <p>Rasmiy hujjatlardan bitta narsa aniq: Telegram botlarning TON hamyon bilan ishlash imkoniyatini kengaytiryapti. Fragment ro‘yxatidagi aniq yozuv, uning nomi va qayerga olib borishi haqida esa rasmiy ma’lumot yo‘q. Stars xaridori uchun amaliy xulosa shu: postga emas, TON Connect oynasida ko‘rinib turgan narsaga qarang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="yozuv-nomi-stars-narxini-miqdorini">Yozuv nomi Stars narxini, miqdorini yoki yetkazilishini o‘zgartiradimi?</h2>
      <p>Hamyon nomi narxga ta’sir qilishi haqida rasmiy ma’lumot yo‘q. Telegram qoidalarida TON Connect ilova ichida tranzaksiyani imzolash vositasi sifatida tilga olinadi (<a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">Blockchain Guidelines</a>). Narxni Fragment sahifasi ko‘rsatadi, hamyon esa faqat to‘lovni tasdiqlaydi.</p>
      <p>Shu qoidalarda TON Connect’da hamyon tanlovini cheklash taqiqlangan. Hamyonni ro‘yxatdan faqat kerakli funksiyani qo‘llab-quvvatlamasa chiqarib tashlash mumkin. Bu qoidalar Telegram ichidagi Mini App va botlar uchun yozilgan, ammo mantiq bir xil: ilova sizni bitta hamyon nomiga majburan bog‘lab qo‘ymasligi kerak.</p>
      <p>Stars hamyonga emas, Telegram akkauntiga tushadi. Qaysi hamyondan to‘laganingiz Stars kimga borishini o‘zgartirmaydi, buni xaridda kiritilgan @username hal qiladi. Hamyon ulanishi Stars balansiga qanchalik xavfli ekani <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">alohida maqolada</Link> yozilgan. Hamyondagi tanga bilan yulduzlar nega ikki xil balans ekanini <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasidan o‘qing.</p>
      <p>Guruhlarda «yangi yozuvni tanlasang, chegirma bor» degan gaplar ham uchraydi. Buni tasdiqlaydigan manba yo‘q. To‘lanadigan aniq summani imzolash oynasi ko‘rsatadi.</p>
      <h2 id="fragmentda-ton-bilan-stars-tolash">Fragment’da TON bilan Stars to‘lash tartibi qanday?</h2>
      <Steps>
        <Step title={"Hamyon tayyorlang"}>TON hamyon o‘rnating. Fragment misol sifatida TonKeeper va MyTonWallet’ni keltiradi, Telegram qoidalarida esa Wallet, Tonkeeper va MyTonWallet tilga olingan.</Step>
        <Step title={"Balansni tekshiring"}>hamyonda xarid summasidan biroz ko‘proq TON bo‘lsin, chunki tarmoq komissiyasi ham olinishi mumkin. Aniq summani imzolash oynasi ko‘rsatadi.</Step>
        <Step title={"Hamyonni ulang"}>Fragment’da «Connect TON» tugmasini bosing va ro‘yxatdan TON turgan ilovani tanlang.</Step>
        <Step title={"Manzilni solishtiring"}>Fragment ko‘rsatgan manzil hamyon ilovasidagi manzil bilan bir xilmi, tekshiring.</Step>
        <Step title={"Qabul qiluvchini kiriting"}>@username’ni xatosiz yozing. Bitta harf xato bo‘lsa, Stars boshqa odamga ketishi mumkin.</Step>
        <Step title={"Imzolang"}>hamyonda summa va manzilni ko‘rib chiqing, keyin tranzaksiyani tasdiqlang.</Step>
      </Steps>
      <Notice label={"Muhim"}>Fragment sahifalarining ko‘rinishi vaqt o‘tishi bilan o‘zgarishi mumkin. Tugma yoki bo‘lim nomi bu yerdagidan farq qilsa, ekrandagi ko‘rsatmaga amal qiling.</Notice>
      <h2 id="notogri-hamyonni-ulab-qoysangiz-yoki">Noto‘g‘ri hamyonni ulab qo‘ysangiz yoki kalitni yo‘qotsangiz nima bo‘ladi?</h2>
      <p>Noto‘g‘ri hamyon ulanganini payqasangiz, to‘lovni imzolamang. Fragment’da ulanishni yoping, to‘g‘ri ilovani qayta ulang va manzilni yana solishtiring. Siz tasdiqlamagan to‘lov amalga oshmaydi.</p>
      <p>Kalitni yo‘qotish ancha jiddiy. Fragment maxfiy kalitlarni hech qachon saqlamaydi va ularga tegmaydi, shuning uchun hamyonni tiklab bera olmaydi. Mablag‘ kalitlari faqat egasining qo‘lida bo‘ladi. Demak, zaxira so‘zlar yo‘qolsa, hamyondagi TON’ga ham kira olmay qolasiz. Zaxira so‘zlarni qanday saqlash va yo‘qolsa nima bo‘lishi haqida <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Gram hamyon zaxira so‘zlari maqolasida</Link> yozilgan.</p>
      <Notice label={"Muhim"}>Fragment yoki Telegram nomidan yozib «hamyoningizni tiklab beramiz» deganlar firibgar. Fragment buni qila olmasligini o‘z sahifasida ochiq yozgan.</Notice>
      <h2 id="fragment-va-somdagi-bot-ikki">Fragment va so‘mdagi bot: ikki yo‘lning har biri nimani talab qiladi?</h2>
      <CompareTable
        headers={["Mezon", "Fragment + TON", "@StarsPaymee_bot"]}
        rows={[
          ["Xarid uchun nima kerak", "TON hamyon va unda TON", "Faqat @username"],
          ["To‘lov valyutasi", "TON", "So‘m: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi"],
          ["1 dona Stars narxi", "TON kursiga bog‘liq, imzolash oynasida ko‘rinadi", `Karta o‘tkazmasi yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Eng kam buyurtma", "Fragment ekranida ko‘ring", "50 Stars"],
          ["Xalqaro karta, kripto hamyon, VPN", "TON hamyon shart", "Kerak emas"],
          ["Kalit uchun kim javob beradi", "Zaxira so‘zlar sizda, yo‘qolsa tiklanmaydi", "Hamyon yo‘q, parol va SMS kod so‘ralmaydi"],
          ["Kimga qulay", "Hamyonida TON allaqachon borga", "So‘mda to‘lamoqchi bo‘lganga"],
        ]}
      />
      <p>Hamyoningizda TON bor va u bilan ishlashni bilsangiz, Fragment yo‘li o‘zini oqlaydi. Agar TON’ni faqat Stars uchun birinchi marta sotib olmoqchi bo‘lsangiz, ish ko‘payadi: hamyon ochish, TON almashtirish, zaxira so‘zlarni saqlash. Bunday holda so‘mdagi yo‘l qisqaroq. Barcha usullar <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasida</Link> jamlangan.</p>
      <h2 id="fragment-va-bot-narxini-qanday">Fragment va bot narxini qanday solishtirasiz?</h2>
      <p>Ikki yo‘lni bir xil valyutada solishtirish kerak. Aks holda «TON’da arzonroq» degan taassurot chalg‘itadi.</p>
      <Steps>
        <Step title={"Bir xil miqdorni oling"}>masalan, ikkala joyda ham bir xil sondagi Stars uchun summani ko‘ring.</Step>
        <Step title={"TON summasini yozib oling"}>imzolash oynasida ko‘ringan yakuniy summani oling, faqat sahifadagi narxni emas.</Step>
        <Step title={"So‘mga aylantiring"}>o‘sha TON’ni o‘zingiz sotib olgan yoki hozir sotib oladigan kurs bo‘yicha hisoblang.</Step>
        <Step title={"Bot summasi bilan solishtiring"}>@StarsPaymee_bot’da to‘lov usulini tanlang, yakuniy summa to‘lovdan oldin chiqadi.</Step>
      </Steps>
      <p>TON hali qo‘lingizda bo‘lmasa, uni olish xarajatini ham hisobga qo‘shing. Kurs har kuni o‘zgaradi, shuning uchun kechagi hisob bugun to‘g‘ri chiqmasligi mumkin.</p>
      <h2 id="starsni-hamyonsiz-somda-qanday-olasiz">Stars’ni hamyonsiz, so‘mda qanday olasiz?</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini ishga tushiring.</Step>
        <Step title={"Stars bo‘limini tanlang"}>kerakli miqdorni kiriting, eng kami 50 Stars.</Step>
        <Step title={"@username yozing"}>o‘zingiznikini yoki Stars olib bermoqchi bo‘lgan odamnikini. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>karta o‘tkazmasi yoki bot balansidan 1 dona {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Paynet ilovasi yoki terminalida naqd to‘lash ham mumkin.</Step>
        <Step title={"Yetkazilishini kuting"}>buyurtma odatda bir necha soniyada (~5 soniya) avtomatik tushadi. Kelmasa, buyurtma ma’lumoti bilan <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</Step>
      </Steps>
      <p>Narxlar va paketlarni <Link href="/stars">Stars sahifasida</Link> ham ko‘rishingiz mumkin. StarsPaymee — mustaqil xizmat, u 1,5 yildan beri ishlaydi.</p>
      <h2 id="telegram-messenger-nomi-bilan-keladigan">«Telegram Messenger» nomi bilan keladigan qaysi xabarlar firibgarlik belgisi?</h2>
      <p>Yangi yozuv haqidagi gap-so‘zlar firibgarlar uchun qulay bahona. Quyidagi belgilardan birini ko‘rsangiz, to‘xtang:</p>
      <ul>
        <li><b>Zaxira so‘zlar yoki maxfiy kalit so‘ralyapti.</b> Fragment kalitlarga umuman tegmaydi, halol xizmat ularni so‘ramaydi.</li>
        <li><b>«Telegram’ning yangi hamyonini ulasangiz, yulduzlar bonus bilan keladi» degan havola.</b> Hamyon tanlovi Stars narxini ham, miqdorini ham o‘zgartirmaydi.</li>
        <li><b>Fragment’ga o‘xshash, lekin boshqa domendagi sayt.</b> Brauzer manzil satrida aynan fragment.com turganini tekshiring.</li>
        <li><b>Mini App hamyonni TON Connect’siz ulashni so‘raydi.</b> Telegram qoidalariga ko‘ra Mini App’lar kripto hamyon bilan faqat TON Connect SDK orqali ishlay oladi.</li>
        <li><b>Imzolash oynasidagi summa yoki manzil kutganingizdan boshqacha.</b> Bunday tranzaksiyani rad eting.</li>
        <li><b>Shoshiltirish.</b> «Bu yozuv faqat bugun ishlaydi» kabi gaplar bilan bosim o‘tkaziladi.</li>
      </ul>
      <p>Akkauntning o‘zini ham himoyalang, chunki Stars o‘sha yerda saqlanadi. Ikki bosqichli parolni yoqish tartibi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA haqidagi maqolada</Link> bor.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Fragment ro‘yxatida «Telegram Messenger»ni bossam, Stars uchun TON qayerdan yechiladi?", answer: "TON faqat ochilgan hamyondan va faqat siz imzolaganingizdan keyin yechiladi. Bu yozuv @wallet’ni ochishi tasdiqlanmagan, shuning uchun ochilgan oynadagi manzil va balansga qarang. TON boshqa ilovada bo‘lsa, ortga qayting." },
  { question: "Stars’ni Fragment’dan TON bilan olish so‘mdagi botdan arzonroqmi?", answer: "Bu savolga hamma uchun bitta javob yo‘q: Fragment’dagi narx TON kursiga, botdagi narx esa to‘lov usuliga bog‘liq. Xulosani faqat ikkala yakuniy summani so‘mda yonma-yon qo‘yganingizdan keyin chiqaring." },
  { question: "Tonkeeper’dagi TON bilan Fragment’da Stars olsam bo‘ladimi?", answer: "Ha, Fragment Tonkeeper’ni TON hamyon misoli sifatida o‘zi keltiradi. TON Connect oynasida Telegram nomli yozuvni emas, Tonkeeper’ni bosing." },
  { question: "Fragment’da boshqa odamga Stars olib bersam, unga hamyon kerakmi?", answer: "Yo‘q, hamyon faqat to‘lovchiga kerak. Oluvchiga to‘g‘ri yozilgan @username yetarli, Stars uning Telegram akkauntiga tushadi." },
  { question: "Imzolash oynasida summa boshqacha chiqdi — davom etaveraymi?", answer: "Yo‘q, tranzaksiyani rad eting. Sahifani yangilab, miqdor va qabul qiluvchini qayta tekshiring. Summa yana mos kelmasa, brauzerdagi manzil fragment.com ekanini tekshiring." },
  { question: "Hamyonni ulab qo‘ydim, lekin xarid qilmadim. Uni Fragment’dan qanday uzaman?", answer: "Fragment’dagi hamyon menyusidan ulanishni yopish bandini toping. Tugma nomi interfeysga qarab farq qilishi mumkin. Siz tasdiqlamagan to‘lov baribir o‘tmaydi." },
  { question: "Fragment’da TON bilan olingan Stars qaysi akkauntga tushadi?", answer: "Xaridda yozilgan @username egasining akkauntiga tushadi. Ulangan hamyonga Stars tushmaydi." },
  { question: "Botda Stars olish uchun TON hamyon ulash shartmi?", answer: "Shart emas. @StarsPaymee_bot faqat @username so‘raydi, to‘lov so‘mda qilinadi. Xalqaro karta, kripto hamyon va VPN kerak emas." },
  { question: "Telegram ichki hamyoni O‘zbekistonda Fragment bilan ishlaydimi?", answer: "Bu haqda rasmiy ma’lumot topilmadi, shuning uchun ilovada o‘zingiz sinab ko‘ring. Ishlamasa, Tonkeeper yoki MyTonWallet’dan foydalaning yoki Stars’ni so‘mda oling." },
  { question: "Fragment’da Stars olish uchun VPN kerakmi?", answer: "Fragment bo‘yicha bu maqolada tasdiqlangan ma’lumot yo‘q, sayt ochilishini o‘zingiz tekshirib ko‘ring. Bot orqali so‘mda olishda VPN kerak emas." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если вы платите за Stars во Fragment в TON, не ориентируйтесь на название записи в списке. Выбирайте приложение, в котором лежат ваши TON. Новую запись «Telegram Messenger», о которой писали в Telegram-канале, официально не подтвердили. От выбора кошелька не зависят ни цена Stars, ни аккаунт, на который они придут. Если TON-кошелька нет, проще купить Stars в сумах по @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#fragmentda-stars-tolash-uchun-royxatdan", label: "Какую запись выбрать в списке Fragment для оплаты Stars?" },
          { href: "#kanal-posti-nimani-davo-qiladi", label: "Что утверждает пост в канале и что подтверждено официально?" },
          { href: "#yozuv-nomi-stars-narxini-miqdorini", label: "Меняет ли название записи цену, количество или доставку Stars?" },
          { href: "#fragmentda-ton-bilan-stars-tolash", label: "Как оплатить Stars в TON во Fragment: порядок действий" },
          { href: "#notogri-hamyonni-ulab-qoysangiz-yoki", label: "Что будет, если подключить не тот кошелёк или потерять ключи?" },
          { href: "#fragment-va-somdagi-bot-ikki", label: "Fragment или бот в сумах: что нужно для каждого пути?" },
          { href: "#fragment-va-bot-narxini-qanday", label: "Как сравнить цену во Fragment и в боте?" },
          { href: "#starsni-hamyonsiz-somda-qanday-olasiz", label: "Как купить Stars без кошелька, в сумах?" },
          { href: "#telegram-messenger-nomi-bilan-keladigan", label: "Какие сообщения от имени «Telegram Messenger» — признак мошенничества?" },
        ]}
      />
      <h2 id="fragmentda-stars-tolash-uchun-royxatdan">Какую запись выбрать в списке Fragment для оплаты Stars?</h2>
      <p>Кошелёк во Fragment подключают кнопкой «Connect TON» в правом верхнем углу страницы. Так написано в <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">справке Fragment</a>. После нажатия открывается окно TON Connect со списком кошельков.</p>
      <p>Правило выбора одно: нажимайте на то приложение, в котором лежат ваши TON. Название записи, её иконка и место в списке ничего не решают.</p>
      <ul>
        <li><b>TON в Tonkeeper</b> — выбирайте Tonkeeper.</li>
        <li><b>TON в MyTonWallet</b> — выбирайте MyTonWallet.</li>
        <li><b>TON во встроенном кошельке Telegram</b> — нажимайте запись с названием Telegram. Обязательно проверьте, что баланс и адрес в открывшемся окне ваши.</li>
        <li><b>TON нет совсем</b> — путь через Fragment вам не подходит. Как купить в сумах, написано ниже.</li>
      </ul>
      <p>Пример. Азиз хранит TON в Tonkeeper. Он видит в списке знакомое слово «Telegram» и нажимает на него. Подключение проходит, но запрос на подтверждение открывается в другом кошельке, где TON нет, и подписать платёж не получается. Азиз отключает этот кошелёк и подключает Tonkeeper заново. Теперь открывается кошелёк с балансом.</p>
      <p>После подключения Fragment советует ещё раз проверить, тот ли кошелёк вы подключили. Сделать это просто: сравните последние несколько символов адреса во Fragment с адресом в приложении кошелька. Если они не совпадают, дальше не идите.</p>
      <p>Есть ли в списке новая запись «Telegram Messenger» и куда она ведёт, сообщал только пост в Telegram-канале. Для этой статьи подтвердить это не удалось. Если после нажатия на запись у вас откроется @wallet, о том, что будет на экране, читайте в <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">статье про ссылку @wallet в Telegram Desktop</Link>.</p>
      <h2 id="kanal-posti-nimani-davo-qiladi">Что утверждает пост в канале и что подтверждено официально?</h2>
      <p>Тема пошла из поста в канале, а канал — не официальный источник. Мы сверили каждое утверждение из поста с документацией Telegram.</p>
      <CompareTable
        headers={["Утверждение", "Источник", "Статус"]}
        rows={[
          ["В списке TON Connect во Fragment появилась отдельная запись «Telegram Messenger»", "Пост в Telegram-канале", "Официального подтверждения не нашли"],
          ["У новой записи другая иконка, она стоит в конце списка, а «Wallet in Telegram» — в начале", "Пост в Telegram-канале", "Не подтверждено"],
          ["Пока что новая запись открывает @wallet", "Пост в Telegram-канале", "Не проверено"],
          ["В реестре кошельков две отдельные записи, у новой своя ссылка tg:// и свой мост", "Пост в Telegram-канале", "Не проверено"],
          ["В Bot API добавлены классы TonWalletCard, TonWalletCardSticker, TonNft, TonNftAttribute и поле ton_wallet_card", <span key="r4c1"><a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a></span>, "Подтверждено"],
          ["В класс Message добавлены класс TonWalletTransfer и поле ton_wallet_transfer", "Bot API changelog", "Подтверждено"],
          ["Запрос, который получает бот, может содержать карточку TON-кошелька пользователя и данные, подписанные в кошельке", "Bot API changelog", "Подтверждено"],
        ]}
      />
      <p>Официальные документы однозначно показывают одно: Telegram даёт ботам больше возможностей для работы с TON-кошельком. А вот о конкретной записи в списке Fragment, её названии и о том, куда она ведёт, официальных данных нет. Отсюда практический вывод для покупателя Stars: смотрите не в пост, а в окно TON Connect.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="yozuv-nomi-stars-narxini-miqdorini">Меняет ли название записи цену, количество или доставку Stars?</h2>
      <p>Официальных данных о том, что название кошелька влияет на цену, нет. В правилах Telegram TON Connect упоминается как способ подписать транзакцию внутри приложения (<a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">Blockchain Guidelines</a>). Цену показывает страница Fragment, а кошелёк только подтверждает платёж.</p>
      <p>В тех же правилах запрещено ограничивать выбор кошельков в TON Connect. Убрать кошелёк из списка можно, только если он не поддерживает нужную функцию. Правила написаны для Mini App и ботов внутри Telegram, но логика та же: приложение не должно привязывать вас к одному конкретному кошельку.</p>
      <p>Stars зачисляются не на кошелёк, а на Telegram-аккаунт. С какого кошелька вы платите, не влияет на то, кому придут Stars: это определяет @username, введённый при покупке. Насколько подключение кошелька опасно для баланса Stars, разобрано в <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">отдельной статье</Link>. Почему монеты в кошельке и звёзды — два разных баланса, объясняет статья <Link href="/blog/telegram-wallet-va-stars-farqi">о разнице между Telegram Wallet и Stars</Link>.</p>
      <p>В чатах встречаются и разговоры вроде «выберешь новую запись — получишь скидку». Источника, который бы это подтверждал, нет. Точную сумму к оплате показывает окно подписи.</p>
      <h2 id="fragmentda-ton-bilan-stars-tolash">Как оплатить Stars в TON во Fragment: порядок действий</h2>
      <Steps>
        <Step title={"Подготовьте кошелёк"}>установите TON-кошелёк. Fragment приводит в пример TonKeeper и MyTonWallet, а в правилах Telegram упомянуты Wallet, Tonkeeper и MyTonWallet.</Step>
        <Step title={"Проверьте баланс"}>TON в кошельке должно быть чуть больше суммы покупки: может списаться и комиссия сети. Точную сумму покажет окно подписи.</Step>
        <Step title={"Подключите кошелёк"}>нажмите во Fragment «Connect TON» и выберите в списке приложение, где лежат TON.</Step>
        <Step title={"Сверьте адрес"}>убедитесь, что адрес во Fragment совпадает с адресом в приложении кошелька.</Step>
        <Step title={"Укажите получателя"}>введите @username без ошибок. Если ошибиться хотя бы в одной букве, Stars могут уйти другому человеку.</Step>
        <Step title={"Подпишите"}>посмотрите в кошельке сумму и адрес, затем подтвердите транзакцию.</Step>
      </Steps>
      <Notice label={"Важно"}>Внешний вид страниц Fragment со временем может меняться. Если кнопка или раздел называются иначе, чем здесь, следуйте подсказкам на экране.</Notice>
      <h2 id="notogri-hamyonni-ulab-qoysangiz-yoki">Что будет, если подключить не тот кошелёк или потерять ключи?</h2>
      <p>Если заметили, что подключён не тот кошелёк, не подписывайте платёж. Отключите кошелёк во Fragment, подключите нужное приложение и снова сверьте адрес. Платёж, который вы не подтвердили, не пройдёт.</p>
      <p>Потеря ключей — намного серьёзнее. Fragment никогда не хранит приватные ключи и не имеет к ним доступа, поэтому восстановить кошелёк он не может. Ключи от средств есть только у владельца. Если потеряете сид-фразу, потеряете и доступ к TON в кошельке. Как хранить сид-фразу и что будет при её потере, рассказано в <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">статье о сид-фразе Gram-кошелька</Link>.</p>
      <Notice label={"Важно"}>Те, кто пишет от имени Fragment или Telegram и обещает «восстановить ваш кошелёк», — мошенники. Fragment прямо пишет на своей странице, что сделать этого не может.</Notice>
      <h2 id="fragment-va-somdagi-bot-ikki">Fragment или бот в сумах: что нужно для каждого пути?</h2>
      <CompareTable
        headers={["Критерий", "Fragment + TON", "@StarsPaymee_bot"]}
        rows={[
          ["Что нужно для покупки", "TON-кошелёк и TON на нём", "Только @username"],
          ["Валюта оплаты", "TON", "Сумы: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота"],
          ["Цена 1 Stars", "Зависит от курса TON, видна в окне подписи", `${som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту или с баланса бота, ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} через Click, Payme, Uzum или Paynet`],
          ["Минимальный заказ", "Смотрите на экране Fragment", "50 Stars"],
          ["Зарубежная карта, криптокошелёк, VPN", "Нужен TON-кошелёк", "Не нужны"],
          ["Кто отвечает за ключи", "Сид-фраза у вас, при потере не восстанавливается", "Кошелька нет, пароль и SMS-код не запрашиваются"],
          ["Кому удобно", "Тем, у кого TON уже есть", "Тем, кто хочет платить в сумах"],
        ]}
      />
      <p>Если TON у вас уже есть и вы умеете с ним обращаться, путь через Fragment себя оправдывает. Если же вы собираетесь покупать TON впервые и только ради Stars, хлопот прибавится: открыть кошелёк, обменять TON, сохранить сид-фразу. В таком случае путь в сумах короче. Все способы собраны в <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">руководстве по покупке Stars</Link>.</p>
      <h2 id="fragment-va-bot-narxini-qanday">Как сравнить цену во Fragment и в боте?</h2>
      <p>Сравнивать два пути нужно в одной валюте. Иначе впечатление «в TON дешевле» может обмануть.</p>
      <Steps>
        <Step title={"Возьмите одинаковое количество"}>посмотрите сумму за одно и то же число Stars в обоих местах.</Step>
        <Step title={"Запишите сумму в TON"}>берите итоговую сумму из окна подписи, а не только цену на странице.</Step>
        <Step title={"Переведите в сумы"}>посчитайте по курсу, по которому вы купили TON или купите сейчас.</Step>
        <Step title={"Сравните с суммой в боте"}>выберите способ оплаты в @StarsPaymee_bot: итоговая сумма появится до оплаты.</Step>
      </Steps>
      <p>Если TON у вас пока нет, добавьте к расчёту и расходы на его покупку. Курс меняется каждый день, так что вчерашний расчёт сегодня может оказаться неверным.</p>
      <h2 id="starsni-hamyonsiz-somda-qanday-olasiz">Как купить Stars без кошелька, в сумах?</h2>
      <Steps>
        <Step title={"Откройте бота"}>запустите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите раздел Stars"}>укажите нужное количество, минимум 50 Stars.</Step>
        <Step title={"Введите @username"}>свой или того, кому покупаете Stars. Пароль, SMS-код и вход в аккаунт не нужны.</Step>
        <Step title={"Выберите способ оплаты"}>при переводе на карту или с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Можно заплатить и наличными в приложении или терминале Paynet.</Step>
        <Step title={"Дождитесь зачисления"}>заказ обычно приходит автоматически за несколько секунд (~5 секунд). Если Stars не пришли, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> и приложите данные заказа.</Step>
      </Steps>
      <p>Цены и пакеты можно посмотреть и на <Link href="/stars">странице Stars</Link>. StarsPaymee — независимый сервис, он работает уже 1,5 года.</p>
      <h2 id="telegram-messenger-nomi-bilan-keladigan">Какие сообщения от имени «Telegram Messenger» — признак мошенничества?</h2>
      <p>Разговоры о новой записи — удобный повод для мошенников. Остановитесь, если заметили хотя бы один из этих признаков:</p>
      <ul>
        <li><b>Просят сид-фразу или приватный ключ.</b> Fragment вообще не имеет дела с ключами, а честный сервис их не спрашивает.</li>
        <li><b>Ссылка с обещанием «подключите новый кошелёк Telegram — получите звёзды с бонусом».</b> Выбор кошелька не меняет ни цену, ни количество Stars.</li>
        <li><b>Сайт похож на Fragment, но домен другой.</b> Проверьте, что в адресной строке браузера именно fragment.com.</li>
        <li><b>Mini App просит подключить кошелёк в обход TON Connect.</b> По правилам Telegram Mini App могут работать с криптокошельками только через TON Connect SDK.</li>
        <li><b>Сумма или адрес в окне подписи не те, что вы ожидали.</b> Отклоните такую транзакцию.</li>
        <li><b>Вас торопят.</b> Давят фразами вроде «эта запись работает только сегодня».</li>
      </ul>
      <p>Защитите и сам аккаунт: Stars хранятся именно там. Как включить двухэтапную проверку, описано в <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">статье о 2FA</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если нажать «Telegram Messenger» в списке Fragment, откуда спишутся TON за Stars?", answer: "TON спишутся только с того кошелька, который откроется, и только после вашей подписи. Что эта запись открывает @wallet, не подтверждено, поэтому смотрите на адрес и баланс в открывшемся окне. Если TON лежат в другом приложении, вернитесь назад." },
  { question: "Покупать Stars во Fragment за TON дешевле, чем в боте за сумы?", answer: "Единого ответа нет: цена во Fragment зависит от курса TON, а в боте — от способа оплаты. Делайте вывод, только когда поставите обе итоговые суммы в сумах рядом." },
  { question: "Можно ли купить Stars во Fragment за TON из Tonkeeper?", answer: "Да, Fragment сам приводит Tonkeeper как пример TON-кошелька. В окне TON Connect нажимайте Tonkeeper, а не запись с названием Telegram." },
  { question: "Если покупаю Stars другому человеку во Fragment, нужен ли ему кошелёк?", answer: "Нет, кошелёк нужен только тому, кто платит. Получателю достаточно правильно указанного @username: Stars придут на его Telegram-аккаунт." },
  { question: "В окне подписи сумма отличается — продолжать?", answer: "Нет, отклоните транзакцию. Обновите страницу и заново проверьте количество и получателя. Если сумма снова не совпадает, убедитесь, что в адресной строке браузера fragment.com." },
  { question: "Я подключил кошелёк, но ничего не купил. Как отключить его от Fragment?", answer: "Найдите пункт отключения в меню кошелька во Fragment. Название кнопки может отличаться в зависимости от интерфейса. Платёж, который вы не подтвердили, всё равно не пройдёт." },
  { question: "На какой аккаунт придут Stars, купленные во Fragment за TON?", answer: "На аккаунт владельца @username, указанного при покупке. На подключённый кошелёк Stars не зачисляются." },
  { question: "Нужно ли подключать TON-кошелёк, чтобы купить Stars в боте?", answer: "Не нужно. @StarsPaymee_bot спрашивает только @username, оплата — в сумах. Зарубежная карта, криптокошелёк и VPN не нужны." },
  { question: "Работает ли встроенный кошелёк Telegram с Fragment в Узбекистане?", answer: "Официальных данных об этом мы не нашли, так что проверьте сами в приложении. Если не заработает, используйте Tonkeeper или MyTonWallet либо купите Stars в сумах." },
  { question: "Нужен ли VPN, чтобы купить Stars во Fragment?", answer: "Подтверждённых данных о Fragment по этому вопросу в статье нет, проверьте сами, открывается ли сайт. Для покупки через бота в сумах VPN не нужен." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>When you pay for Stars on Fragment with TON, ignore what the entry in the wallet list is called. Pick the app that actually holds your TON. A channel post mentions a new “Telegram Messenger” entry, but it hasn’t been officially confirmed. Your choice of wallet doesn’t change the Stars price or the account they go to. If you have no TON wallet, buying Stars in soums with an @username is simpler.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#fragmentda-stars-tolash-uchun-royxatdan", label: "Which entry in Fragment’s list should you pick to pay for Stars?" },
          { href: "#kanal-posti-nimani-davo-qiladi", label: "What does the channel post claim, and what is officially confirmed?" },
          { href: "#yozuv-nomi-stars-narxini-miqdorini", label: "Does the entry’s name change the Stars price, amount or delivery?" },
          { href: "#fragmentda-ton-bilan-stars-tolash", label: "How do you pay for Stars with TON on Fragment?" },
          { href: "#notogri-hamyonni-ulab-qoysangiz-yoki", label: "What happens if you connect the wrong wallet or lose your keys?" },
          { href: "#fragment-va-somdagi-bot-ikki", label: "Fragment vs a soum-based bot: what does each route need?" },
          { href: "#fragment-va-bot-narxini-qanday", label: "How do you compare Fragment’s price with the bot’s?" },
          { href: "#starsni-hamyonsiz-somda-qanday-olasiz", label: "How do you buy Stars in soums without a wallet?" },
          { href: "#telegram-messenger-nomi-bilan-keladigan", label: "Which “Telegram Messenger” messages are signs of a scam?" },
        ]}
      />
      <h2 id="fragmentda-stars-tolash-uchun-royxatdan">Which entry in Fragment’s list should you pick to pay for Stars?</h2>
      <p>On Fragment, you connect a wallet with the “Connect TON” button in the top-right corner of the page. The <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment guide</a> says so. Press it and a TON Connect window opens with a list of wallets.</p>
      <p>There’s only one rule: pick the app that holds your TON. The entry’s name, its icon and its place in the list don’t matter.</p>
      <ul>
        <li><b>If your TON is in Tonkeeper</b>, pick Tonkeeper.</li>
        <li><b>If your TON is in MyTonWallet</b>, pick MyTonWallet.</li>
        <li><b>If your TON is in the wallet inside Telegram</b>, tap the entry with Telegram in its name. Then check that the balance and address in the window that opens are yours.</li>
        <li><b>If you have no TON</b>, the Fragment route isn’t for you. The soum option is further down.</li>
      </ul>
      <p>Here’s an example. Aziz keeps his TON in Tonkeeper. He sees the familiar word “Telegram” in the list and taps it. The connection goes through, but the confirmation request opens in a different wallet with no TON in it, so he can’t sign the payment. Aziz disconnects and connects Tonkeeper again. This time the wallet with his balance shows up.</p>
      <p>Once you’re connected, Fragment recommends double-checking that you connected the right wallet. Here’s a simple way to do it: compare the last few characters of the address Fragment shows with the address in your wallet app. If they don’t match, stop.</p>
      <p>Only a Telegram channel post says the new “Telegram Messenger” entry is in the list and describes where it leads. We couldn’t confirm this for this article. If tapping the entry opens @wallet, read our <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">article on the @wallet link in Telegram Desktop</Link> to see what appears on screen.</p>
      <h2 id="kanal-posti-nimani-davo-qiladi">What does the channel post claim, and what is officially confirmed?</h2>
      <p>The topic started with a channel post, and a channel post isn’t an official source. We checked each claim against Telegram’s documentation.</p>
      <CompareTable
        headers={["Claim", "Source", "Status"]}
        rows={[
          ["A separate “Telegram Messenger” entry has appeared in Fragment’s TON Connect list", "Telegram channel post", "No official confirmation found"],
          ["The new entry has a different icon and sits at the bottom of the list, with “Wallet in Telegram” at the top", "Telegram channel post", "Not confirmed"],
          ["For now, tapping the new entry opens @wallet", "Telegram channel post", "Not verified"],
          ["The wallet registry has two separate entries, and the new one has its own tg:// link and bridge", "Telegram channel post", "Not verified"],
          ["The Bot API added the classes TonWalletCard, TonWalletCardSticker, TonNft and TonNftAttribute, plus the field ton_wallet_card", <span key="r4c1"><a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a></span>, "Confirmed"],
          ["The Message class gained the TonWalletTransfer class and the ton_wallet_transfer field", "Bot API changelog", "Confirmed"],
          ["A query sent to a bot can contain the user’s TON wallet card and data signed by the user’s wallet", "Bot API changelog", "Confirmed"],
        ]}
      />
      <p>The official documents make one thing clear: Telegram is giving bots more ways to work with TON wallets. There’s no official information about the specific entry in Fragment’s list, its name or where it leads. If you’re buying Stars, the practical takeaway is to go by what the TON Connect window shows you, not by the post.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="yozuv-nomi-stars-narxini-miqdorini">Does the entry’s name change the Stars price, amount or delivery?</h2>
      <p>There’s no official information that the wallet’s name affects the price. Telegram’s rules describe TON Connect as a way to sign a transaction inside an app (<a href={"https://core.telegram.org/bots/blockchain-guidelines"} target="_blank" rel="noopener noreferrer">Blockchain Guidelines</a>). The Fragment page shows the price. The wallet only approves the payment.</p>
      <p>The same rules prohibit limiting which wallets you can pick in TON Connect. An app may leave a wallet off the list only if that wallet doesn’t support a feature the app needs. These rules were written for Mini Apps and bots inside Telegram, but the principle is the same: an app shouldn’t force you to use one particular wallet.</p>
      <p>Stars go to a Telegram account, not to a wallet. The wallet you pay from doesn’t affect who gets the Stars. The @username entered at checkout decides that. How risky a wallet connection is for your Stars balance is covered in a <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">separate article</Link>. To see why wallet coins and Stars are two separate balances, read <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <p>Some group chats claim you get a discount if you pick the new entry. No source supports this. The signing window shows the exact amount you’ll pay.</p>
      <h2 id="fragmentda-ton-bilan-stars-tolash">How do you pay for Stars with TON on Fragment?</h2>
      <Steps>
        <Step title={"Set up a wallet"}>install a TON wallet. Fragment gives TonKeeper and MyTonWallet as examples, and Telegram’s guidelines mention Wallet, Tonkeeper and MyTonWallet.</Step>
        <Step title={"Check your balance"}>keep a bit more TON than the purchase amount, because there may be a network fee too. The signing window shows the exact amount.</Step>
        <Step title={"Connect the wallet"}>on Fragment, press “Connect TON” and pick the app that holds your TON.</Step>
        <Step title={"Compare the address"}>check that the address Fragment shows is the same as the one in your wallet app.</Step>
        <Step title={"Enter the recipient"}>type the @username carefully. One wrong letter and the Stars could go to someone else.</Step>
        <Step title={"Sign"}>review the amount and address in your wallet, then confirm the transaction.</Step>
      </Steps>
      <Notice label={"Important"}>Fragment’s pages can look different over time. If a button or section has a different name than described here, follow what’s on your screen.</Notice>
      <h2 id="notogri-hamyonni-ulab-qoysangiz-yoki">What happens if you connect the wrong wallet or lose your keys?</h2>
      <p>If you notice the wrong wallet is connected, don’t sign the payment. Disconnect it on Fragment, connect the right app and compare the address again. A payment you haven’t approved won’t go through.</p>
      <p>Losing your keys is much more serious. Fragment never stores or touches private keys, so it can’t restore your wallet. Only the owner holds the keys to the funds. If you lose your recovery phrase, you lose access to the TON in that wallet as well. Our <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">article on Gram wallet recovery phrases</Link> explains how to store the phrase and what happens if you lose it.</p>
      <Notice label={"Important"}>Anyone who writes in the name of Fragment or Telegram offering to “restore your wallet” is a scammer. Fragment states openly on its own page that it can’t do this.</Notice>
      <h2 id="fragment-va-somdagi-bot-ikki">Fragment vs a soum-based bot: what does each route need?</h2>
      <CompareTable
        headers={["Criterion", "Fragment + TON", "@StarsPaymee_bot"]}
        rows={[
          ["What you need to buy", "A TON wallet with TON in it", "Just an @username"],
          ["Payment currency", "TON", "Soums: Click, Payme, Uzum, Paynet, UzCard/HUMO card transfer or bot balance"],
          ["Price of 1 Star", "Depends on the TON rate, shown in the signing window", `${som(STARS_PER_UNIT_UZS, "en")} by card transfer or bot balance, ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet`],
          ["Minimum order", "Check the Fragment screen", "50 Stars"],
          ["International card, crypto wallet, VPN", "A TON wallet is required", "Not needed"],
          ["Who is responsible for the keys", "You hold the recovery phrase, and it can’t be restored if lost", "No wallet; no password or SMS code is requested"],
          ["Best for", "People who already hold TON", "People who want to pay in soums"],
        ]}
      />
      <p>If you already have TON in a wallet and know how to use it, the Fragment route makes sense. If you’d be buying TON for the first time just to get Stars, there’s more to do: open a wallet, exchange for TON and keep the recovery phrase safe. In that case the soum route is shorter. All the options are in our <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Stars</Link>.</p>
      <h2 id="fragment-va-bot-narxini-qanday">How do you compare Fragment’s price with the bot’s?</h2>
      <p>Compare both routes in the same currency. Otherwise the impression that “TON is cheaper” can mislead you.</p>
      <Steps>
        <Step title={"Use the same quantity"}>for example, check the total for the same number of Stars in both places.</Step>
        <Step title={"Note the TON amount"}>use the final total shown in the signing window, not only the price on the page.</Step>
        <Step title={"Convert to soums"}>calculate it at the rate you paid for that TON or would pay now.</Step>
        <Step title={"Compare with the bot’s total"}>in @StarsPaymee_bot, pick a payment method. The final amount appears before you pay.</Step>
      </Steps>
      <p>If you don’t have TON yet, include the cost of getting it. The rate changes every day, so yesterday’s calculation may not be right today.</p>
      <h2 id="starsni-hamyonsiz-somda-qanday-olasiz">How do you buy Stars in soums without a wallet?</h2>
      <Steps>
        <Step title={"Open the bot"}>start <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the Stars section"}>enter the amount you need. The minimum is 50 Stars.</Step>
        <Step title={"Enter an @username"}>your own or that of the person you’re buying Stars for. No password, SMS code or account access is requested.</Step>
        <Step title={"Choose a payment method"}>1 Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer or from the bot balance, or {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. You can also pay cash through the Paynet app or a Paynet terminal.</Step>
        <Step title={"Wait for delivery"}>orders usually arrive automatically within a few seconds (about 5 seconds). If yours doesn’t, contact <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details.</Step>
      </Steps>
      <p>You can also see prices and packages on the <Link href="/stars">Stars page</Link>. StarsPaymee is an independent service and has been running for 1.5 years.</p>
      <h2 id="telegram-messenger-nomi-bilan-keladigan">Which “Telegram Messenger” messages are signs of a scam?</h2>
      <p>The talk about a new entry gives scammers a handy pretext. Stop if you see any of these signs:</p>
      <ul>
        <li><b>You’re asked for your recovery phrase or private key.</b> Fragment never touches keys, and an honest service won’t ask for them.</li>
        <li><b>A link promising “bonus Stars if you connect Telegram’s new wallet.”</b> Your choice of wallet doesn’t change the price or the amount of Stars.</li>
        <li><b>A site that looks like Fragment but is on a different domain.</b> Check that the browser’s address bar shows exactly fragment.com.</li>
        <li><b>A Mini App asks you to connect a wallet without TON Connect.</b> Under Telegram’s rules, Mini Apps may work with crypto wallets only through the TON Connect SDK.</li>
        <li><b>The amount or address in the signing window isn’t what you expected.</b> Reject the transaction.</li>
        <li><b>Pressure to hurry.</b> Lines like “this entry only works today” are meant to rush you.</li>
      </ul>
      <p>Protect the account itself too, because that’s where your Stars are kept. Our <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA article</Link> explains how to turn on two-step verification.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/bots/blockchain-guidelines", label: "Blockchain Guidelines" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If I tap “Telegram Messenger” in Fragment’s list, where is the TON for Stars taken from?", answer: "TON comes only from the wallet that opens, and only after you sign. It isn’t confirmed that this entry opens @wallet, so check the address and balance in the window that appears. If your TON is in another app, go back." },
  { question: "Is buying Stars on Fragment with TON cheaper than using a soum bot?", answer: "It depends: Fragment’s price follows the TON rate, while the bot’s price depends on how you pay. Only decide after you’ve put both final totals side by side in soums." },
  { question: "Can I buy Stars on Fragment with TON from Tonkeeper?", answer: "Yes. Fragment itself lists Tonkeeper as an example TON wallet. In the TON Connect window, tap Tonkeeper, not the entry with Telegram in its name." },
  { question: "If I buy Stars for someone else on Fragment, do they need a wallet?", answer: "No, only the person paying needs a wallet. The recipient just needs a correctly spelled @username, and the Stars go to their Telegram account." },
  { question: "The amount in the signing window looks different. Should I go ahead?", answer: "No, reject the transaction. Refresh the page and check the quantity and recipient again. If the amount still doesn’t match, make sure the browser address is fragment.com." },
  { question: "I connected a wallet but didn’t buy anything. How do I disconnect it from Fragment?", answer: "Look for a disconnect option in Fragment’s wallet menu. The button name may differ depending on the interface. Any payment you haven’t approved won’t go through anyway." },
  { question: "Which account do Stars bought with TON on Fragment go to?", answer: "They go to the account of the @username entered at checkout. The connected wallet doesn’t receive any Stars." },
  { question: "Do I need to connect a TON wallet to buy Stars in the bot?", answer: "No. @StarsPaymee_bot only asks for an @username, and you pay in soums. You don’t need an international card, a crypto wallet or a VPN." },
  { question: "Does Telegram’s built-in wallet work with Fragment in Uzbekistan?", answer: "We found no official information on this, so try it in the app yourself. If it doesn’t work, use Tonkeeper or MyTonWallet, or buy Stars in soums." },
  { question: "Do I need a VPN to buy Stars on Fragment?", answer: "This article has no confirmed information on that for Fragment, so check whether the site opens for you. You don’t need a VPN to buy Stars in soums through the bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  keywords: ["Fragment Telegram Messenger hamyoni Stars olish","Fragment TON Connect Telegram Messenger","Fragment orqali Stars sotib olish TON","Fragment Connect TON hamyon tanlash","Telegram Stars hamyonsiz so‘mda","Fragment Stars TON bilan to‘lash","Telegram Messenger кошелек Fragment","купить Telegram Stars на Fragment за TON","TON Connect Fragment какой кошелек выбрать","Telegram Stars без кошелька Узбекистан","Wallet in Telegram Fragment Stars"],
  howToSteps: [
    { name: "Hamyon tayyorlang", text: "TON hamyon o‘rnating. Fragment misol sifatida TonKeeper va MyTonWallet’ni keltiradi, Telegram qoidalarida esa Wallet, Tonkeeper va MyTonWallet tilga olingan." },
    { name: "Balansni tekshiring", text: "hamyonda xarid summasidan biroz ko‘proq TON bo‘lsin, chunki tarmoq komissiyasi ham olinishi mumkin. Aniq summani imzolash oynasi ko‘rsatadi." },
    { name: "Hamyonni ulang", text: "Fragment’da «Connect TON» tugmasini bosing va ro‘yxatdan TON turgan ilovani tanlang." },
    { name: "Manzilni solishtiring", text: "Fragment ko‘rsatgan manzil hamyon ilovasidagi manzil bilan bir xilmi, tekshiring." },
    { name: "Qabul qiluvchini kiriting", text: "@username’ni xatosiz yozing. Bitta harf xato bo‘lsa, Stars boshqa odamga ketishi mumkin." },
    { name: "Imzolang", text: "hamyonda summa va manzilni ko‘rib chiqing, keyin tranzaksiyani tasdiqlang." },
  ],
  locales: {
    uz: {
      title: "Fragment’dagi «Telegram Messenger» hamyoni: Stars uchun qaysini tanlaysiz?",
      excerpt: "Fragment’da TON qaysi ilovada turgan bo‘lsa, o‘shani tanlang: yangi yozuv nomi Stars narxini ham, oluvchini ham o‘zgartirmaydi. Maqolada post tekshiruvi, to‘lov qadamlari va so‘mdagi muqobil yo‘l bor.",
      metaTitle: "Fragment’dagi «Telegram Messenger» hamyoni",
      metaDescription: "Fragment’da TON qaysi ilovada turgan bo‘lsa, o‘shani tanlang: yangi yozuv nomi Stars narxini ham, oluvchini ham o‘zgartirmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Кошелёк «Telegram Messenger» во Fragment: какой выбрать для оплаты Stars?",
      excerpt: "Как выбрать кошелёк во Fragment для оплаты Stars в TON, что из поста о записи «Telegram Messenger» подтверждено официально, как оплатить по шагам и как купить Stars в сумах без кошелька.",
      metaTitle: "Кошелёк «Telegram Messenger» во Fragment",
      metaDescription: "Как выбрать кошелёк во Fragment для оплаты Stars в TON, что из поста о записи «Telegram Messenger» подтверждено официально, как оплатить по шагам и как купить…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Fragment’s “Telegram Messenger” wallet: which one to pick for Stars?",
      excerpt: "This guide checks the channel post about Fragment’s new wallet entry against official sources. It covers the TON payment steps and how this route compares with buying Stars in soums using only an @username.",
      metaTitle: "Fragment’s “Telegram Messenger” wallet",
      metaDescription: "This guide checks the channel post about Fragment’s new wallet entry against official sources. It covers the TON payment steps and how this route compares…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
