import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "yashirilgan-telegram-sovgani-sotib-olish";

/**
 * Sotuvdan yashirilgan Telegram sovg‘ani sotib olsa bo‘ladimi: o‘rniga nima?
 *
 * Avtoblogyoz yasagan maqola (2026-11-16): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Sotuvdan yashirilgan eski Telegram sovg‘asini olmoqchi bo‘lgan foydalanuvchi «sotuvdan yashirilgan telegram sovg‘ani sotib olish mumkinmi» deb qidiradi. U STARGIFT_INVALID chiqqach, bu sovg‘ani endi qayerdan va qanday xavfsiz olishni yoki o‘rniga so‘mda nima olishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-16):
 *   https://telegram.org/blog/gifts-verification-platform
 *   https://core.telegram.org/api/gifts
 *   https://core.telegram.org/method/payments.getStarGifts
 *   https://core.telegram.org/method/payments.getPaymentForm
 *   https://core.telegram.org/constructor/starGift
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
  return <p>Yo‘q, rasmiy yo‘l bilan sotib olib bo‘lmaydi. Telegram ilovasi do‘kon ro‘yxatida turgan va sotuvi tugamagan sovg‘ani sotadi. Ro‘yxatdan olib tashlangan eski dizaynni ilova ichida xarid qilib bo‘lmaydi. Ikki yo‘l qoladi: shu dizaynning tayyor kolleksion nusxasini egasidan sotib olish yoki uning o‘rniga so‘mda boshqa sovg‘a, Premium yoki Stars berish.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#sotuvdan-yashirilgan-sovgani-bugun-rasmiy", label: "Sotuvdan yashirilgan sovg‘ani bugun rasmiy yo‘l bilan olsa bo‘ladimi?" },
          { href: "#dokondagi-sovgani-ham-har-doim", label: "Do‘kondagi sovg‘ani ham har doim olib bo‘lmaydimi? Cheklovlar jadvali" },
          { href: "#xarid-paytida-stargift-invalid-chiqsa", label: "Xarid paytida STARGIFT_INVALID chiqsa, pul va akkaunt uchun bu nimani anglatadi?" },
          { href: "#pul-tolashdan-oldin-sovgani-qanday", label: "Pul to‘lashdan oldin sovg‘ani qanday tekshiraman?" },
          { href: "#eski-dizaynni-maxsus-yol-bilan", label: "Eski dizaynni «maxsus yo‘l bilan» sotayotganlar qanday aldaydi?" },
          { href: "#shu-dizaynning-kolleksion-nft-nusxasini", label: "Shu dizaynning kolleksion (NFT) nusxasini olsa bo‘ladimi?" },
          { href: "#uch-vaziyat-qaysi-yol-sizga", label: "Uch vaziyat: qaysi yo‘l sizga to‘g‘ri keladi?" },
          { href: "#yashirilgan-sovga-orniga-somda-nima", label: "Yashirilgan sovg‘a o‘rniga so‘mda nima olsa bo‘ladi?" },
          { href: "#starspaymee-botida-muqobil-sovgani-qanday", label: "StarsPaymee botida muqobil sovg‘ani qanday olaman?" },
        ]}
      />
      <h2 id="sotuvdan-yashirilgan-sovgani-bugun-rasmiy">Sotuvdan yashirilgan sovg‘ani bugun rasmiy yo‘l bilan olsa bo‘ladimi?</h2>
      <p>Telegram ilovasi sovg‘alar oynasini serverdan keladigan ro‘yxat bo‘yicha ko‘rsatadi. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Sovg‘alar bo‘yicha texnik hujjatda</a> yozilishicha, mavjud sovg‘alarning to‘liq ro‘yxati payments.getStarGifts metodi orqali olinadi. <a href={"https://core.telegram.org/method/payments.getStarGifts"} target="_blank" rel="noopener noreferrer">Metodning o‘z sahifasida</a> ham u mavjud sovg‘alar ro‘yxatini qaytarishi yozilgan.</p>
      <p>Xaridor uchun buning ma’nosi oddiy: shu ro‘yxatda ko‘rgan sovg‘angizni tanlay olasiz. Dizayn ro‘yxatda bo‘lmasa, uni ilova ichida pulga olib bo‘lmaydi.</p>
      <p>Hujjatda yana bir shart bor. Foydalanuvchi faqat yuborish mumkin bo‘lgan va sold_out holatida bo‘lmagan sovg‘ani Stars’ga sotib oladi. <a href={"https://core.telegram.org/constructor/starGift"} target="_blank" rel="noopener noreferrer">starGift obyekti tavsifiga</a> ko‘ra, sotilib tugagan sovg‘ani endi sotib olib bo‘lmaydi.</p>
      <Notice label={"Muhim"}>Telegram kanallarida «Telegram yashirilgan cheksiz sovg‘alarni yuborishni o‘chirib qo‘ydi» degan postlar tarqaldi. Bu gap hozircha faqat norasmiy manbalarda bor. telegram.org va core.telegram.org’da bu haqda e’lon ham, sababini tushuntiradigan izoh ham topilmadi.</Notice>
      <p>Shuning uchun kimdir sizga eski dizaynni taklif qilsa, pul to‘lashdan oldin u do‘konda bor-yo‘qligini o‘zingiz tekshiring. Bu bir daqiqa vaqt oladi, tartibi quyida berilgan.</p>
      <h2 id="dokondagi-sovgani-ham-har-doim">Do‘kondagi sovg‘ani ham har doim olib bo‘lmaydimi? Cheklovlar jadvali</h2>
      <p>Sovg‘a ro‘yxatda turgan bo‘lsa ham, uni sotib olish yopiq bo‘lishi mumkin. Telegram hujjatlarida xaridga ta’sir qiladigan bir nechta belgi bor:</p>
      <CompareTable
        headers={["Cheklov", "Hujjatda nima deyilgan", "Xaridor nima qiladi"]}
        rows={[
          ["Sotilib tugagan (sold_out)", "Sovg‘ani endi sotib olib bo‘lmaydi", "Kolleksion nusxa yoki boshqa sovg‘a qidiradi"],
          ["Cheklangan tiraj", "Yana nechta nusxa sotib olish mumkinligi ko‘rsatiladi", "Qoldiqni ko‘rib, xaridni rejalaydi"],
          ["Bir kishiga limit (limited_per_user)", "per_user_remains 0 ga tushsa, joriy foydalanuvchi ortiq ololmaydi", "Boshqa dizayn tanlaydi"],
          ["Sanagacha yopiq", "Ko‘rsatilgan sanagacha yuborib bo‘lmasligi mumkin", "Sanani kutadi yoki boshqa sovg‘a oladi"],
          ["Faqat Premium uchun", "Faqat Premium obunasi borlar sotib oladi", "Avval obunasini tekshiradi"],
          ["«Yashirilgan»", "Bu holat uchun alohida belgi topilmadi", "Ro‘yxatga qaraydi, mish-mishga emas"],
        ]}
      />
      <p>Oxirgi qatorga e’tibor bering. «Yashirilgan sovg‘a» degan maxsus holat Telegram hujjatlarida alohida belgi sifatida yozilmagan. Xaridor o‘zi tekshira oladigan narsa bitta: sovg‘a do‘kon ro‘yxatida bormi yoki yo‘qmi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="xarid-paytida-stargift-invalid-chiqsa">Xarid paytida STARGIFT_INVALID chiqsa, pul va akkaunt uchun bu nimani anglatadi?</h2>
      <p>Sovg‘a xaridi payments.getPaymentForm chaqiruvidan boshlanadi. Ilova unga inputInvoiceStarGift beradi va to‘lov formasini so‘raydi. STARGIFT_INVALID aynan shu <a href={"https://core.telegram.org/method/payments.getPaymentForm"} target="_blank" rel="noopener noreferrer">metod hujjatida</a> sanab o‘tilgan. Demak, xato to‘lov formasini olish bosqichida chiqadi.</p>
      <p>Hujjatdagi tavsif umumiy: «berilgan sovg‘a yaroqsiz». Bu xato aynan yashirilgan sovg‘alarda chiqishi rasman tasdiqlanmagan. O‘sha sahifada sovg‘a topilmagani haqida alohida xato ham bor. Ya’ni «yaroqsiz» va «topilmadi» — ikki xil holat.</p>
      <p>Tavsifda gap akkaunt haqida emas, uzatilgan sovg‘a haqida ketadi. Bunday xatodan keyin hech kimga akkaunt ma’lumotlarini berishga hojat yo‘q.</p>
      <Notice label={"Muhim"}>Xato to‘lov formasi bosqichida chiqqani uchun xarid odatda tasdiqlanmagan bo‘ladi. Shunga qaramay, Stars balansini bir ko‘rib qo‘ying: <Link href="/blog/telegram-stars-balansini-tekshirish">balansni ko‘rish tartibi</Link>.</Notice>
      <h2 id="pul-tolashdan-oldin-sovgani-qanday">Pul to‘lashdan oldin sovg‘ani qanday tekshiraman?</h2>
      <p>Sotuvchi yoki tanish «bu sovg‘ani hali olsa bo‘ladi» desa, buni o‘zingiz ilovada tekshiring:</p>
      <Steps>
        <Step title={"Profilni oching"}>oluvchining profilida ⋮ yoki ⋯ tugmasini bosib, Send a Gift bandini tanlang. Bu yo‘l <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> tasvirlangan.</Step>
        <Step title={"Ro‘yxatdan qidiring"}>kerakli dizayn ro‘yxatda bo‘lmasa, uni rasmiy yo‘l bilan sotib olib bo‘lmaydi.</Step>
        <Step title={"Tirajga qarang"}>cheklangan sovg‘ada nechta nusxa qolganini ko‘ring.</Step>
        <Step title={"Shaxsiy limitni tekshiring"}>bu sovg‘ani avval olgan bo‘lsangiz, sizga ajratilgan son tugagan bo‘lishi mumkin.</Step>
        <Step title={"Sana va Premium shartini ko‘ring"}>sovg‘ada sana cheklovi bor-yo‘qligini tekshiring. U faqat Premium uchun bo‘lsa, obunangiz faolligiga ishonch hosil qiling.</Step>
        <Step title={"Natijaga qarab yo‘l tanlang"}>sovg‘a ro‘yxatda topilmasa, kolleksion nusxani qidiring yoki muqobil sovg‘a tanlang.</Step>
      </Steps>
      <p>Xatoning boshqa sabablari va ularni bir-biridan ajratish tartibi bu yerda: <Link href="/blog/telegram-gift-yuborilmayapti">Telegram sovg‘a yuborilmayapti</Link>.</p>
      <h2 id="eski-dizaynni-maxsus-yol-bilan">Eski dizaynni «maxsus yo‘l bilan» sotayotganlar qanday aldaydi?</h2>
      <p>Rasmiy do‘konda yo‘q narsani «yopiq kanal», «ichki kirish» yoki «tanish admin» orqali olib berish va’dasi — eng ko‘p uchraydigan bahona. Xaridor eski dizaynni juda xohlagani uchun shoshadi, firibgar esa shundan foydalanadi. Quyidagi belgilardan biri bo‘lsa, to‘xtang:</p>
      <ul>
        <li>To‘liq summani oldindan so‘rash va sovg‘ani «keyin» yuborishni aytish.</li>
        <li>Telegram do‘konini «chetlab o‘tib» eski dizaynni ochib berish va’dasi.</li>
        <li>Akkauntga kirish, parol yoki SMS kodni so‘rash.</li>
        <li>«Sovg‘ani qabul qilish» uchun noma’lum havola yoki Mini App’ni ochishni so‘rash.</li>
        <li>Sotuvdan olingan eski dizaynni «bot orqali yuboramiz» degan va’da.</li>
      </ul>
      <p>Oxirgi belgining sababi bor: Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Bu cheklov StarsPaymee’ga ham tegishli. Batafsil: <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">kolleksion gift nega bot orqali olinmaydi</Link>.</p>
      <p>StarsPaymee buyurtma uchun faqat @username so‘raydi. Parol, SMS kod yoki akkauntga kirish talab qilinmaydi. Kimdir shu nom bilan sizdan kod so‘rasa, bu StarsPaymee emas.</p>
      <h2 id="shu-dizaynning-kolleksion-nft-nusxasini">Shu dizaynning kolleksion (NFT) nusxasini olsa bo‘ladimi?</h2>
      <p>Ba’zi hollarda bo‘ladi. Kerakli dizaynning tayyor kolleksion nusxasi bozorda sotuvda tursa, uni hozirgi egasidan sotib olish mumkin. Bu yo‘l do‘kon ro‘yxatiga bog‘liq emas. Lekin har bir yashirilgan sovg‘aning NFT nusxasi bozorda bor, deb bo‘lmaydi.</p>
      <p>Tayyor kolleksion sovg‘alarni @StarsPaymee_bot’dagi NFT Market’da so‘mda olsa bo‘ladi. Bozor qanday ishlashi haqida — <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> maqolasida, sovg‘alar ro‘yxati esa <Link href="/gifts">/gifts</Link> sahifasida.</p>
      <p>Kolleksion sovg‘a xaridida ikki narsaga qarang:</p>
      <ul>
        <li><b>Tarix va egasi.</b> Xariddan oldin sovg‘a havolasini, hozirgi egasini va oldingi izini tekshiring: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini tekshirish</Link>.</li>
        <li><b>Narx.</b> Bir kolleksiyadagi nusxalar har xil narxda turishi mumkin. Bitta taklifga ishonib qolmang, kamida bir nechta nusxani solishtiring.</li>
      </ul>
      <h2 id="uch-vaziyat-qaysi-yol-sizga">Uch vaziyat: qaysi yo‘l sizga to‘g‘ri keladi?</h2>
      <p>Bir xil xato turli odamda turli qarorga olib keladi. Quyidagi misollar o‘zingizga yaqin vaziyatni topishga yordam beradi.</p>
      <h3>Kolleksiyada bitta eski dizayn yetishmaydi</h3>
      <p>Siz ilgari chiqqan sovg‘alarni yig‘asiz va bittasi yetishmaydi. Do‘konda u yo‘q, xarid tugmasi xato beradi. Bu holatda yagona real yo‘l — kolleksion nusxa. NFT Market’da shu dizaynni qidiring va tarixini tekshiring. Topilmasa, kuting: shaxsiy xabarda «hozir to‘la, ertaga beraman» deganlarga pul o‘tkazmang.</p>
      <h3>Kanal tanlovida g‘olibga eski sovg‘a va’da qilingan</h3>
      <p>Siz kanalda tanlov e’lon qilgansiz, sovg‘a esa do‘kondan yo‘qolgan. G‘olibga vaziyatni ochiq ayting va tanlov bering: do‘kondagi boshqa sovg‘a, Stars yoki Premium. Stars yuborsangiz, g‘olib o‘ziga yoqqan ochiq sovg‘ani o‘zi tanlaydi. Bir nechta g‘olib bo‘lsa, har biriga buyurtmani alohida @username bilan rasmiylashtiring.</p>
      <h3>Sovg‘a ro‘yxatda bor, lekin baribir sotib olinmayapti</h3>
      <p>Bu «yashirilgan» holat emas. Sabab jadvaldagi cheklovlardan birida bo‘lishi mumkin: shaxsiy limit tugagan, sana hali kelmagan yoki sovg‘a faqat Premium obunachilari uchun. Avval shu uchtasini tekshiring, keyin boshqa sabab qidiring.</p>
      <h2 id="yashirilgan-sovga-orniga-somda-nima">Yashirilgan sovg‘a o‘rniga so‘mda nima olsa bo‘ladi?</h2>
      <p>Ko‘pincha aynan eski dizayn emas, munosib tabrik kerak bo‘ladi. Shunday paytda quyidagi variantlarni solishtiring:</p>
      <CompareTable
        headers={["Variant", "Kimga mos", "Narx (so‘mda)", "Qanday yetkaziladi"]}
        rows={[
          ["Do‘kondagi oddiy sovg‘a", "Tez tabrik uchun", "Botda ko‘rsatiladi", "@username bo‘yicha"],
          ["Kolleksion NFT sovg‘a", "Noyob dizayn izlayotgan kolleksioner uchun", "NFT Market’da ko‘rsatiladi", "Botdagi NFT Market orqali"],
          ["Telegram Premium", "Telegram’dan har kuni foydalanadigan odam uchun", `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`, "Username orqali, Telegram’ning sovg‘a mexanizmi bilan"],
          ["Telegram Stars", "Sovg‘ani o‘zi tanlashni xohlaydigan odam uchun", `UzCard/HUMO o‘tkazma yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}, Click/Payme/Uzum/Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} (1 dona)`, "@username bo‘yicha, kamida 50 Stars"],
        ]}
      />
      <p>Premium narxi hamma to‘lov usulida bir xil. Faqat oluvchida faol Premium obunasi bo‘lsa, bot yangi buyurtma ochmaydi: muddat faol obuna ustiga qo‘shilmaydi. Premium tariflari haqida batafsil — <Link href="/premium">/premium</Link>, Stars haqida — <Link href="/stars">/stars</Link>.</p>
      <p>Oddiy sovg‘aning yana bir qulayligi bor. <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">Telegram blogiga</a> ko‘ra, sovg‘ani olgan kishi undan voz kechib, uning Stars’ining bir qismini boshqa narsaga sarflashi mumkin. Dizayn yoqmasa ham sovg‘a qiymatining bir qismi oluvchida qoladi.</p>
      <p>Oddiy va kolleksion sovg‘alarning farqi va so‘mdagi to‘lov yo‘llari: <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">Telegram sovg‘alari va NFT sovg‘alarni so‘mda olish</Link>.</p>
      <h2 id="starspaymee-botida-muqobil-sovgani-qanday">StarsPaymee botida muqobil sovg‘ani qanday olaman?</h2>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. To‘lov so‘mda qilinadi:</p>
      <Steps>
        <Step title={"Botni oching"}>Telegram’da <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini oching.</Step>
        <Step title={"Bo‘limni tanlang"}>oddiy sovg‘a, NFT Market, Premium yoki Stars.</Step>
        <Step title={"@username kiriting"}>oluvchining username’ini yozing. Parol yoki kod so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Stars narxi usulga qarab farq qiladi.</Step>
        <Step title={"Summani tekshirib to‘lang"}>buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</Step>
        <Step title={"Muammo bo‘lsa"}>buyurtma ma’lumoti bilan <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</Step>
      </Steps>
      <Notice label={"Muhim"}>StarsPaymee — mustaqil xizmat. U foydalanuvchilardan Stars yoki sovg‘a sotib olmaydi, Telegram do‘konidan olib tashlangan limited sovg‘ani ham yubora olmaydi.</Notice>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/gifts-verification-platform", label: "Gifts, Verification Platform and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/method/payments.getStarGifts", label: "payments.getStarGifts" },
          { href: "https://core.telegram.org/method/payments.getPaymentForm", label: "payments.getPaymentForm" },
          { href: "https://core.telegram.org/constructor/starGift", label: "starGift" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Olib tashlangan dizayn yana sotuvga chiqsa, buni qayerdan bilaman?", answer: "Telegram bu haqda hech qanday reja e’lon qilmagan. Ishonchli belgi bitta: dizayn ilovadagi Send a Gift oynasida yana paydo bo‘ladi, shuning uchun kanallardagi «qaytdi» postlarini shu oynada tekshiring." },
  { question: "Yashirin sovg‘alar o‘chirilgani haqida Telegram’ning rasmiy xabari bormi?", answer: "Yo‘q, telegram.org va core.telegram.org’da bunday e’lon topilmadi. Bu gap hozircha norasmiy kanallardan tarqalmoqda." },
  { question: "STARGIFT_INVALID chiqdi, lekin balansim kamaygandek tuyulyapti. Nima qilay?", answer: "Xato to‘lov formasi bosqichida chiqadi, shuning uchun odatda Stars yechilmaydi. Ilovadagi Stars tarixini ochib, shu daqiqadagi yozuvni qidiring va boshqa xarid bilan adashtirmaganingizni tekshiring." },
  { question: "Do‘stimda yashirilgan sovg‘a bor: uni undan sotib olsam bo‘ladimi?", answer: "Oddiy sovg‘ani bir akkauntdan boshqasiga sotish yo‘li bu maqolada tasdiqlanmagan. Sovg‘a kolleksion nusxaga aylantirilgan bo‘lsa, uni bozor orqali olish mumkin, ammo pulni oldindan bermang." },
  { question: "Premium obunam yo‘q, sovg‘a esa faqat obunachilar uchun. Nima qilay?", answer: "Telegram hujjatiga ko‘ra, bunday sovg‘ani obunasiz sotib olib bo‘lmaydi. Avval o‘z username’ingizga Premium oling yoki shartsiz boshqa sovg‘a tanlang." },
  { question: "Nega bir xil sovg‘ani ikkinchi marta sotib ololmayapman?", answer: "Sovg‘ada bir kishiga limit bo‘lishi va sizning ulushingiz tugagan bo‘lishi mumkin. Yana bir sabab — tiraj tugab, sovg‘a sold_out holatiga o‘tgan." },
  { question: "Yashirilgan dizaynning NFT versiyasi qancha turadi?", answer: "Belgilangan narx yo‘q: har bir nusxaning narxini sotuvchi o‘zi qo‘yadi va narxlar keskin farq qilishi mumkin. Bir nechta nusxani solishtiring, so‘mdagi narxni esa botdagi NFT Market’da ko‘rasiz." },
  { question: "StarsPaymee orqali sotuvdan olingan limited sovg‘ani yuborsa bo‘ladimi?", answer: "Yo‘q, Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Botda faqat tayyor kolleksion nusxalarni NFT Market’dan olish mumkin." },
  { question: "Sovg‘a o‘rniga Stars yuborsam, do‘stim u bilan o‘zi sovg‘a tanlay oladimi?", answer: "Ha, do‘kondagi ochiq sovg‘alardan birini o‘zi tanlab olishi mumkin, agar o‘sha sovg‘ada limit yoki Premium sharti bo‘lmasa. Eng kam buyurtma 50 Stars, narx to‘lov usuliga bog‘liq." },
  { question: "Sotuvchi «yashirin gift»ni topish uchun akkauntimga kirishni so‘rasa nima qilay?", answer: "Rad eting va suhbatni to‘xtating: sovg‘a xaridi uchun akkauntga kirish yoki SMS kod kerak emas. Bunday talab akkauntni o‘g‘irlashga urinishning aniq belgisi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, официально его не купить. Приложение Telegram продаёт только те подарки, которые есть в списке магазина и ещё не распроданы. Старый дизайн, который убрали из списка, внутри приложения купить нельзя. Остаётся два пути: купить готовую коллекционную копию этого дизайна у владельца или подарить вместо него другой подарок, Premium или Stars с оплатой в сумах.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#sotuvdan-yashirilgan-sovgani-bugun-rasmiy", label: "Можно ли сейчас официально купить подарок, который убрали из продажи?" },
          { href: "#dokondagi-sovgani-ham-har-doim", label: "Подарок есть в магазине, но купить его не получается? Таблица ограничений" },
          { href: "#xarid-paytida-stargift-invalid-chiqsa", label: "Ошибка STARGIFT_INVALID при покупке: что она значит для денег и аккаунта?" },
          { href: "#pul-tolashdan-oldin-sovgani-qanday", label: "Как проверить подарок перед оплатой?" },
          { href: "#eski-dizaynni-maxsus-yol-bilan", label: "Как обманывают те, кто продаёт старый дизайн «особым путём»?" },
          { href: "#shu-dizaynning-kolleksion-nft-nusxasini", label: "Можно ли купить коллекционную (NFT) копию этого дизайна?" },
          { href: "#uch-vaziyat-qaysi-yol-sizga", label: "Три ситуации: какой путь подходит вам?" },
          { href: "#yashirilgan-sovga-orniga-somda-nima", label: "Что подарить в сумах вместо скрытого подарка?" },
          { href: "#starspaymee-botida-muqobil-sovgani-qanday", label: "Как купить замену в боте StarsPaymee?" },
        ]}
      />
      <h2 id="sotuvdan-yashirilgan-sovgani-bugun-rasmiy">Можно ли сейчас официально купить подарок, который убрали из продажи?</h2>
      <p>Окно подарков в приложении Telegram строится по списку, который присылает сервер. В <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">технической документации по подаркам</a> сказано, что полный список доступных подарков приложение получает методом payments.getStarGifts. На <a href={"https://core.telegram.org/method/payments.getStarGifts"} target="_blank" rel="noopener noreferrer">странице самого метода</a> тоже указано, что он возвращает список доступных подарков.</p>
      <p>Для покупателя вывод простой: выбрать можно только то, что вы видите в этом списке. Если дизайна в списке нет, за деньги в приложении его не купить.</p>
      <p>В документации есть ещё одно условие. Пользователь может купить за Stars только подарок, который можно отправить и который не находится в статусе sold_out. По <a href={"https://core.telegram.org/constructor/starGift"} target="_blank" rel="noopener noreferrer">описанию объекта starGift</a> распроданный подарок больше не продаётся.</p>
      <Notice label={"Важно"}>В Telegram-каналах ходят посты о том, что «Telegram отключил отправку скрытых безлимитных подарков». Пока об этом пишут только неофициальные источники. На telegram.org и core.telegram.org нет ни объявления, ни объяснения причин.</Notice>
      <p>Поэтому, если вам предлагают старый дизайн, сначала сами проверьте, есть ли он в магазине, и только потом платите. На это уйдёт минута, порядок проверки описан ниже.</p>
      <h2 id="dokondagi-sovgani-ham-har-doim">Подарок есть в магазине, но купить его не получается? Таблица ограничений</h2>
      <p>Даже если подарок стоит в списке, покупка может быть закрыта. В документации Telegram есть несколько флагов, которые на неё влияют:</p>
      <CompareTable
        headers={["Ограничение", "Что сказано в документации", "Что делать покупателю"]}
        rows={[
          ["Распродан (sold_out)", "Подарок больше нельзя купить", "Искать коллекционную копию или другой подарок"],
          ["Ограниченный тираж", "Показано, сколько копий ещё можно купить", "Посмотреть остаток и спланировать покупку"],
          ["Лимит на человека (limited_per_user)", "Когда per_user_remains доходит до 0, текущий пользователь больше купить не может", "Выбрать другой дизайн"],
          ["Закрыт до даты", "Отправить подарок, возможно, не получится до указанной даты", "Дождаться даты или выбрать другой подарок"],
          ["Только для Premium", "Купить могут только пользователи с подпиской Premium", "Сначала проверить свою подписку"],
          ["«Скрытый»", "Отдельного флага для такого статуса нет", "Смотреть в список магазина, а не верить слухам"],
        ]}
      />
      <p>Обратите внимание на последнюю строку. Особого статуса «скрытый подарок» в документации Telegram как отдельного флага нет. Покупатель может сам проверить только одно: есть подарок в списке магазина или нет.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="xarid-paytida-stargift-invalid-chiqsa">Ошибка STARGIFT_INVALID при покупке: что она значит для денег и аккаунта?</h2>
      <p>Покупка подарка начинается с вызова payments.getPaymentForm. Приложение передаёт в него inputInvoiceStarGift и запрашивает форму оплаты. STARGIFT_INVALID указана именно в <a href={"https://core.telegram.org/method/payments.getPaymentForm"} target="_blank" rel="noopener noreferrer">документации этого метода</a>. Значит, ошибка появляется, когда приложение запрашивает форму оплаты.</p>
      <p>Описание у неё общее: «переданный подарок недействителен». Официально не подтверждено, что эта ошибка возникает именно со скрытыми подарками. На той же странице есть и отдельная ошибка о том, что подарок не найден. То есть «недействителен» и «не найден» — два разных случая.</p>
      <p>В описании речь идёт о переданном подарке, а не об аккаунте. После такой ошибки никому не нужно сообщать данные своего аккаунта.</p>
      <Notice label={"Важно"}>Ошибка возникает на этапе формы оплаты, поэтому обычно до подтверждения покупка не доходит. Всё же загляните в баланс Stars: <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс</Link>.</Notice>
      <h2 id="pul-tolashdan-oldin-sovgani-qanday">Как проверить подарок перед оплатой?</h2>
      <p>Если продавец или знакомый уверяет, что «этот подарок ещё можно купить», проверьте сами в приложении:</p>
      <Steps>
        <Step title={"Откройте профиль"}>в профиле получателя нажмите ⋮ или ⋯ и выберите Send a Gift. Этот способ описан в <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">блоге Telegram</a>.</Step>
        <Step title={"Найдите дизайн в списке"}>если его там нет, официально его не купить.</Step>
        <Step title={"Посмотрите на тираж"}>у ограниченного подарка видно, сколько копий осталось.</Step>
        <Step title={"Проверьте личный лимит"}>если вы уже покупали этот подарок, ваш лимит мог закончиться.</Step>
        <Step title={"Посмотрите на дату и условие Premium"}>проверьте, нет ли у подарка ограничения по дате. Если он только для Premium, убедитесь, что ваша подписка активна.</Step>
        <Step title={"Выберите путь по результату"}>если подарка в списке нет, ищите коллекционную копию или выберите другой подарок.</Step>
      </Steps>
      <p>Другие причины ошибки и то, как их различить: <Link href="/blog/telegram-gift-yuborilmayapti">подарок в Telegram не отправляется</Link>.</p>
      <h2 id="eski-dizaynni-maxsus-yol-bilan">Как обманывают те, кто продаёт старый дизайн «особым путём»?</h2>
      <p>Самая частая уловка — пообещать достать то, чего нет в официальном магазине, через «закрытый канал», «внутренний доступ» или «знакомого админа». Покупатель очень хочет старый дизайн и торопится, а мошенник этим пользуется. Остановитесь, если заметили хотя бы один из признаков:</p>
      <ul>
        <li>Просят всю сумму вперёд, а подарок обещают отправить «потом».</li>
        <li>Обещают открыть старый дизайн «в обход» магазина Telegram.</li>
        <li>Просят вход в аккаунт, пароль или код из SMS.</li>
        <li>Просят открыть незнакомую ссылку или Mini App, чтобы «принять подарок».</li>
        <li>Обещают «отправить через бота» старый дизайн, снятый с продажи.</li>
      </ul>
      <p>У последнего признака есть причина: лимитированные подарки, которые Telegram убрал из продажи, боты отправить не могут. Это касается и StarsPaymee. Подробнее: <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">почему коллекционный подарок не купить через бота</Link>.</p>
      <p>Для заказа StarsPaymee нужен только @username. Пароль, код из SMS или вход в аккаунт не нужны. Если кто-то от имени StarsPaymee просит у вас код, это не StarsPaymee.</p>
      <h2 id="shu-dizaynning-kolleksion-nft-nusxasini">Можно ли купить коллекционную (NFT) копию этого дизайна?</h2>
      <p>Иногда можно. Если готовая коллекционная копия нужного дизайна выставлена на продажу, её можно купить у нынешнего владельца. Этот путь не зависит от списка магазина. Но нельзя рассчитывать, что NFT-копия есть на рынке у каждого скрытого подарка.</p>
      <p>Готовые коллекционные подарки можно купить в сумах в NFT Market внутри @StarsPaymee_bot. Как устроен маркет, мы объясняем в статье <Link href="/blog/starspaymee-nft-market">NFT Market StarsPaymee</Link>, а список подарков есть на странице <Link href="/gifts">/gifts</Link>.</p>
      <p>При покупке коллекционного подарка смотрите на две вещи:</p>
      <ul>
        <li><b>История и владелец.</b> Перед покупкой проверьте ссылку на подарок, нынешнего владельца и прошлых: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">как проверить историю NFT-подарка</Link>.</li>
        <li><b>Цена.</b> Копии из одной коллекции могут стоить по-разному. Не соглашайтесь на первое же предложение, сравните хотя бы несколько копий.</li>
      </ul>
      <h2 id="uch-vaziyat-qaysi-yol-sizga">Три ситуации: какой путь подходит вам?</h2>
      <p>Одна и та же ошибка приводит разных людей к разным решениям. Примеры ниже помогут найти ситуацию, похожую на вашу.</p>
      <h3>В коллекции не хватает одного старого дизайна</h3>
      <p>Вы собираете выходившие подарки, и одного не хватает. В магазине его нет, кнопка покупки выдаёт ошибку. Здесь реальный путь один — коллекционная копия. Поищите этот дизайн в NFT Market и проверьте его историю. Если не нашли, подождите и не переводите деньги тем, кто пишет в личку «плати сейчас, отдам завтра».</p>
      <h3>Победителю конкурса в канале обещали старый подарок</h3>
      <p>Вы объявили конкурс в канале, а подарок пропал из магазина. Честно объясните победителю ситуацию и дайте выбор: другой подарок из магазина, Stars или Premium. Если отправите Stars, победитель сам выберет открытый подарок по вкусу. Если победителей несколько, оформите отдельный заказ на @username каждого.</p>
      <h3>Подарок есть в списке, но всё равно не покупается</h3>
      <p>Это не «скрытый» подарок. Причина может быть в одном из ограничений из таблицы: закончился личный лимит, ещё не наступила дата или подарок только для подписчиков Premium. Сначала проверьте эти три пункта, потом ищите другую причину.</p>
      <h2 id="yashirilgan-sovga-orniga-somda-nima">Что подарить в сумах вместо скрытого подарка?</h2>
      <p>Часто нужен не именно старый дизайн, а достойное поздравление. В таком случае сравните варианты:</p>
      <CompareTable
        headers={["Вариант", "Кому подойдёт", "Цена (в сумах)", "Как доставляется"]}
        rows={[
          ["Обычный подарок из магазина", "Для быстрого поздравления", "Указана в боте", "По @username"],
          ["Коллекционный NFT-подарок", "Коллекционеру, который ищет редкий дизайн", "Указана в NFT Market", "Через NFT Market в боте"],
          ["Telegram Premium", "Тому, кто пользуется Telegram каждый день", `3 мес. ${som(premium(3), "ru")}, 6 мес. ${som(premium(6), "ru")}, 12 мес. ${som(premium(12), "ru")}`, "По username, через механизм подарков Telegram"],
          ["Telegram Stars", "Тому, кто хочет выбрать подарок сам", `Переводом на UzCard/HUMO или с баланса бота ${som(STARS_PER_UNIT_UZS, "ru")}, через Click/Payme/Uzum/Paynet ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} (за 1 шт.)`, "По @username, от 50 Stars"],
        ]}
      />
      <p>Цена Premium одинакова при любом способе оплаты. Но если у получателя уже есть активная подписка Premium, бот не откроет новый заказ: срок не добавляется к действующей подписке. Подробнее о тарифах Premium — на странице <Link href="/premium">/premium</Link>, о Stars — на <Link href="/stars">/stars</Link>.</p>
      <p>У обычного подарка есть ещё один плюс. По данным <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">блога Telegram</a>, получатель может отказаться от подарка и получить часть его Stars, чтобы потратить их на что-то другое. Даже если дизайн не понравился, часть стоимости останется у получателя.</p>
      <p>Чем обычные подарки отличаются от коллекционных и как оплатить их в сумах: <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">подарки и NFT-подарки Telegram за сумы</Link>.</p>
      <h2 id="starspaymee-botida-muqobil-sovgani-qanday">Как купить замену в боте StarsPaymee?</h2>
      <p>Международная карта, криптокошелёк или VPN не нужны. Оплата в сумах:</p>
      <Steps>
        <Step title={"Откройте бота"}>в Telegram откройте <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите раздел"}>обычный подарок, NFT Market, Premium или Stars.</Step>
        <Step title={"Введите @username"}>укажите username получателя. Пароль и код не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в том числе наличными через приложение или терминал), перевод на карту UzCard/HUMO или баланс бота. Цена Stars зависит от способа оплаты.</Step>
        <Step title={"Проверьте сумму и оплатите"}>заказ обычно доставляется автоматически за несколько секунд.</Step>
        <Step title={"Если что-то пошло не так"}>напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> и приложите данные заказа.</Step>
      </Steps>
      <Notice label={"Важно"}>StarsPaymee — независимый сервис. Он не покупает Stars и подарки у пользователей и не может отправить лимитированный подарок, убранный из магазина Telegram.</Notice>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/gifts-verification-platform", label: "Gifts, Verification Platform and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/method/payments.getStarGifts", label: "payments.getStarGifts" },
          { href: "https://core.telegram.org/method/payments.getPaymentForm", label: "payments.getPaymentForm" },
          { href: "https://core.telegram.org/constructor/starGift", label: "starGift" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Как узнать, что убранный дизайн снова вернули в продажу?", answer: "Telegram никаких планов на этот счёт не объявлял. Надёжный признак один: дизайн снова появляется в окне Send a Gift в приложении, так что посты «он вернулся» в каналах проверяйте именно там." },
  { question: "Есть ли официальное сообщение Telegram о том, что скрытые подарки отключили?", answer: "Нет, на telegram.org и core.telegram.org такого объявления нет. Пока эту новость распространяют только неофициальные каналы." },
  { question: "Появилась ошибка STARGIFT_INVALID, но мне кажется, что баланс уменьшился. Что делать?", answer: "Ошибка возникает на этапе формы оплаты, поэтому Stars обычно не списываются. Откройте историю Stars в приложении, найдите запись за эту минуту и убедитесь, что не путаете её с другой покупкой." },
  { question: "У друга есть скрытый подарок: можно купить его у него?", answer: "Способ продать обычный подарок с одного аккаунта на другой в этой статье не подтверждён. Если подарок превращён в коллекционную копию, его можно купить через маркет, но деньги вперёд не отдавайте." },
  { question: "У меня нет Premium, а подарок только для подписчиков. Как быть?", answer: "По документации Telegram без подписки такой подарок не купить. Сначала оформите Premium на свой username или выберите другой подарок без этого условия." },
  { question: "Почему не получается купить тот же подарок второй раз?", answer: "У подарка может быть лимит на одного человека, и ваша доля уже исчерпана. Другая возможная причина — тираж закончился, и подарок перешёл в статус sold_out." },
  { question: "Сколько стоит NFT-версия скрытого дизайна?", answer: "Фиксированной цены нет: цену каждой копии назначает продавец, и разброс бывает большим. Сравните несколько копий, а цену в сумах смотрите в NFT Market в боте." },
  { question: "Можно ли через StarsPaymee отправить лимитированный подарок, снятый с продажи?", answer: "Нет, лимитированные подарки, которые Telegram убрал из продажи, боты отправлять не могут. В боте можно купить только готовые коллекционные копии в NFT Market." },
  { question: "Если я отправлю Stars вместо подарка, друг сможет сам выбрать подарок?", answer: "Да, он сможет купить любой открытый подарок из магазина, если у него нет лимита или условия Premium. Минимальный заказ — 50 Stars, цена зависит от способа оплаты." },
  { question: "Продавец просит доступ к моему аккаунту, чтобы найти «скрытый гифт». Что делать?", answer: "Откажите и прекратите переписку: для покупки подарка не нужны ни вход в аккаунт, ни код из SMS. Такая просьба — явный признак попытки угнать аккаунт." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, not officially. The Telegram app only sells gifts that are on the store list and haven’t sold out. Once an old design is removed from that list, you can’t buy it in the app. That leaves two options. You can buy a ready collectible copy of the design from its current owner, or give another gift, Premium or Stars paid in so‘m.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#sotuvdan-yashirilgan-sovgani-bugun-rasmiy", label: "Can you still buy a gift that was removed from sale?" },
          { href: "#dokondagi-sovgani-ham-har-doim", label: "Can a gift in the store still be unavailable? Restrictions table" },
          { href: "#xarid-paytida-stargift-invalid-chiqsa", label: "What does STARGIFT_INVALID at checkout mean for your money and account?" },
          { href: "#pul-tolashdan-oldin-sovgani-qanday", label: "How do I check a gift before paying?" },
          { href: "#eski-dizaynni-maxsus-yol-bilan", label: "How do sellers of “special access” old designs scam people?" },
          { href: "#shu-dizaynning-kolleksion-nft-nusxasini", label: "Can you buy a collectible (NFT) copy of the same design?" },
          { href: "#uch-vaziyat-qaysi-yol-sizga", label: "Three scenarios: which route fits you?" },
          { href: "#yashirilgan-sovga-orniga-somda-nima", label: "What can you get in so‘m instead of a hidden gift?" },
          { href: "#starspaymee-botida-muqobil-sovgani-qanday", label: "How do I get an alternative gift through the StarsPaymee bot?" },
        ]}
      />
      <h2 id="sotuvdan-yashirilgan-sovgani-bugun-rasmiy">Can you still buy a gift that was removed from sale?</h2>
      <p>The Telegram app builds its gift screen from a list sent by the server. The <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">technical documentation on gifts</a> says the full list of available gifts comes from the payments.getStarGifts method. The <a href={"https://core.telegram.org/method/payments.getStarGifts"} target="_blank" rel="noopener noreferrer">method’s own page</a> also describes it as returning the list of available gifts.</p>
      <p>For a buyer, that means one simple thing: you can choose from the gifts you see on that list. If a design isn’t on it, you can’t pay for it inside the app.</p>
      <p>The documentation adds one more condition. You can only spend Stars on a gift that can be sent and isn’t in the sold_out state. According to the <a href={"https://core.telegram.org/constructor/starGift"} target="_blank" rel="noopener noreferrer">starGift object description</a>, a gift that has sold out can’t be bought anymore.</p>
      <Notice label={"Important"}>Telegram channels have been sharing posts saying “Telegram has disabled sending hidden unlimited gifts.” So far, this claim only comes from unofficial sources. We found no announcement on telegram.org or core.telegram.org, and no official explanation of why such a change would have been made.</Notice>
      <p>So if someone offers you an old design, check for yourself whether it’s in the store before you pay. It takes about a minute, and the steps are below.</p>
      <h2 id="dokondagi-sovgani-ham-har-doim">Can a gift in the store still be unavailable? Restrictions table</h2>
      <p>A gift can be on the list and still be closed to you. Telegram’s documentation lists several flags that affect whether you can buy it:</p>
      <CompareTable
        headers={["Restriction", "What the documentation says", "What the buyer should do"]}
        rows={[
          ["Sold out (sold_out)", "The gift can no longer be bought", "Look for a collectible copy or a different gift"],
          ["Limited supply", "Shows how many copies can still be bought", "Check how many are left and plan the purchase"],
          ["Per-user limit (limited_per_user)", "Once per_user_remains hits 0, the current user can’t buy more", "Pick a different design"],
          ["Locked until a date", "The gift may not be sendable until the specified date", "Wait for the date or buy something else"],
          ["Premium only", "Only users with a Premium subscription can buy it", "Check your subscription first"],
          ["“Hidden”", "No separate flag for this state was found", "Trust the list, not rumours"],
        ]}
      />
      <p>Note the last row. Telegram’s documentation doesn’t describe a “hidden gift” as a separate flag. The only thing a buyer can check is whether the gift is on the store list.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="xarid-paytida-stargift-invalid-chiqsa">What does STARGIFT_INVALID at checkout mean for your money and account?</h2>
      <p>A gift purchase starts with a payments.getPaymentForm call. The app passes an inputInvoiceStarGift to it and asks for a payment form. STARGIFT_INVALID is listed in the <a href={"https://core.telegram.org/method/payments.getPaymentForm"} target="_blank" rel="noopener noreferrer">documentation for that same method</a>. In other words, the error shows up when the payment form is requested.</p>
      <p>The description is vague: “the passed gift is invalid.” Telegram has never confirmed that this error is specific to hidden gifts. The same page also lists a separate error for when the gift was not found. So “invalid” and “not found” are two different situations.</p>
      <p>The description is about the gift that was passed, not about your account. After this error, you don’t need to give anyone your account details.</p>
      <Notice label={"Important"}>Because the error appears at the payment form stage, the purchase usually isn’t confirmed. Still, it’s worth looking at your Stars balance: <Link href="/blog/telegram-stars-balansini-tekshirish">how to check your balance</Link>.</Notice>
      <h2 id="pul-tolashdan-oldin-sovgani-qanday">How do I check a gift before paying?</h2>
      <p>If a seller or a friend says “you can still get this gift,” check in the app yourself:</p>
      <Steps>
        <Step title={"Open the profile"}>on the recipient’s profile, tap ⋮ or ⋯ and choose Send a Gift. This path is described on the <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">Telegram blog</a>.</Step>
        <Step title={"Look for it in the list"}>if the design isn’t there, you can’t buy it officially.</Step>
        <Step title={"Check the supply"}>for a limited gift, see how many copies are left.</Step>
        <Step title={"Check your personal limit"}>if you’ve bought this gift before, you may have used up your allowance.</Step>
        <Step title={"Check the date and Premium requirement"}>see whether the gift is locked until a date. If it’s Premium-only, make sure your subscription is active.</Step>
        <Step title={"Pick a route based on the result"}>if the gift isn’t on the list, look for a collectible copy or choose an alternative.</Step>
      </Steps>
      <p>Other causes of the error, and how to tell them apart: <Link href="/blog/telegram-gift-yuborilmayapti">Telegram gift not sending</Link>.</p>
      <h2 id="eski-dizaynni-maxsus-yol-bilan">How do sellers of “special access” old designs scam people?</h2>
      <p>The most common pitch is a promise to get you something the official store no longer sells through a “private channel,” “insider access” or “an admin I know.” Buyers who really want an old design tend to rush, and scammers count on that. Stop if you see any of these signs:</p>
      <ul>
        <li>They ask for the full amount upfront and say the gift will come “later.”</li>
        <li>They promise to unlock an old design by “bypassing” the Telegram store.</li>
        <li>They ask to log in to your account or ask for your password or SMS code.</li>
        <li>They ask you to open an unknown link or Mini App to “claim the gift.”</li>
        <li>They promise to send a removed old design “through a bot.”</li>
      </ul>
      <p>There’s a reason the last one is a warning sign: bots can’t send limited gifts that Telegram has removed from sale. That applies to StarsPaymee too. More detail: <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">why collectible gifts can’t be bought through a bot</Link>.</p>
      <p>StarsPaymee only asks for an @username to place an order. You’re never asked for a password, an SMS code or access to your account. If someone using that name asks you for a code, it isn’t StarsPaymee.</p>
      <h2 id="shu-dizaynning-kolleksion-nft-nusxasini">Can you buy a collectible (NFT) copy of the same design?</h2>
      <p>Sometimes. If a ready collectible copy of the design you want is up for sale on the market, you can buy it from its current owner. This doesn’t depend on the store list. But not every hidden gift has an NFT copy on the market.</p>
      <p>You can buy ready collectible gifts in so‘m on the NFT Market inside @StarsPaymee_bot. Our <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> article explains how the market works, and the gift list is on the <Link href="/gifts">/gifts</Link> page.</p>
      <p>When buying a collectible gift, check two things:</p>
      <ul>
        <li><b>History and owner.</b> Before paying, check the gift link, its current owner and its earlier history: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">checking an NFT gift’s history</Link>.</li>
        <li><b>Price.</b> Copies from the same collection can sell for very different prices. Don’t take the first offer you see; compare at least a few copies.</li>
      </ul>
      <h2 id="uch-vaziyat-qaysi-yol-sizga">Three scenarios: which route fits you?</h2>
      <p>The same error can call for different decisions depending on who’s buying. These examples should help you find the one closest to your situation.</p>
      <h3>One old design is missing from your collection</h3>
      <p>You collect gifts from past releases and you’re missing one. It’s not in the store, and the buy button returns an error. Your only realistic option here is a collectible copy. Search the NFT Market for that design and check its history. If there’s none for sale, wait. Don’t send money to anyone in DMs who says “pay now, I’ll deliver tomorrow.”</p>
      <h3>You promised an old gift to a channel giveaway winner</h3>
      <p>You announced a giveaway in your channel, and the gift has since disappeared from the store. Be upfront with the winner and give them a choice: another gift from the store, Stars or Premium. If you send Stars, the winner can pick any available gift they like. If there are several winners, place a separate order for each one’s @username.</p>
      <h3>The gift is on the list but still won’t go through</h3>
      <p>This isn’t a “hidden” gift. The cause is probably one of the restrictions in the table: your personal limit is used up, the unlock date hasn’t arrived, or the gift is for Premium subscribers only. Rule out those three first, then look for other causes.</p>
      <h2 id="yashirilgan-sovga-orniga-somda-nima">What can you get in so‘m instead of a hidden gift?</h2>
      <p>Often what you need isn’t that exact old design but a proper way to congratulate someone. If so, compare these options:</p>
      <CompareTable
        headers={["Option", "Best for", "Price (so‘m)", "How it’s delivered"]}
        rows={[
          ["Regular gift from the store", "A quick greeting", "Shown in the bot", "By @username"],
          ["Collectible NFT gift", "Collectors looking for a rare design", "Shown on the NFT Market", "Through the NFT Market in the bot"],
          ["Telegram Premium", "Someone who uses Telegram every day", `3 months ${som(premium(3), "en")}, 6 months ${som(premium(6), "en")}, 12 months ${som(premium(12), "en")}`, "By username, through Telegram’s gift mechanism"],
          ["Telegram Stars", "Someone who’d rather choose a gift themselves", `${som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO transfer or bot balance, ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click/Payme/Uzum/Paynet (per Star)`, "By @username, minimum 50 Stars"],
        ]}
      />
      <p>Premium costs the same with every payment method. One catch: if the recipient already has an active Premium subscription, the bot won’t open a new order, because time isn’t added on top of an active subscription. More on Premium plans at <Link href="/premium">/premium</Link>, and on Stars at <Link href="/stars">/stars</Link>.</p>
      <p>Regular gifts have one more advantage. According to the <a href={"https://telegram.org/blog/gifts-verification-platform"} target="_blank" rel="noopener noreferrer">Telegram blog</a>, the recipient can discard a gift and get some of its Stars back to spend on something else. Even if they don’t like the design, they keep part of its value.</p>
      <p>For the difference between regular and collectible gifts and ways to pay in so‘m, see <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">buying Telegram gifts and NFT gifts in so‘m</Link>.</p>
      <h2 id="starspaymee-botida-muqobil-sovgani-qanday">How do I get an alternative gift through the StarsPaymee bot?</h2>
      <p>You don’t need an international card, a crypto wallet or a VPN. You pay in so‘m:</p>
      <Steps>
        <Step title={"Open the bot"}>in Telegram, open <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose a section"}>regular gift, NFT Market, Premium or Stars.</Step>
        <Step title={"Enter the @username"}>type the recipient’s username. You won’t be asked for a password or code.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (including cash via the app or a terminal), UzCard/HUMO card transfer or bot balance. The price of Stars depends on the method.</Step>
        <Step title={"Check the total and pay"}>orders are usually delivered automatically within a few seconds.</Step>
        <Step title={"If something goes wrong"}>message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details.</Step>
      </Steps>
      <Notice label={"Important"}>StarsPaymee is an independent service. It doesn’t buy Stars or gifts from users, and it can’t send limited gifts that have been removed from the Telegram store.</Notice>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/gifts-verification-platform", label: "Gifts, Verification Platform and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/method/payments.getStarGifts", label: "payments.getStarGifts" },
          { href: "https://core.telegram.org/method/payments.getPaymentForm", label: "payments.getPaymentForm" },
          { href: "https://core.telegram.org/constructor/starGift", label: "starGift" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If a removed design goes back on sale, how will I know?", answer: "Telegram hasn’t announced any plans like that. The only reliable sign is the design showing up again in the app’s Send a Gift screen. So if a channel says it’s “back,” check that screen." },
  { question: "Has Telegram officially announced that hidden gifts were disabled?", answer: "No. We found no such announcement on telegram.org or core.telegram.org. For now, the claim is only spreading through unofficial channels." },
  { question: "I got STARGIFT_INVALID, but my balance seems lower. What should I do?", answer: "The error appears at the payment form stage, so Stars usually aren’t deducted. Open your Stars history in the app, find the entry from that time, and make sure you’re not confusing it with another purchase." },
  { question: "My friend has a hidden gift. Can I buy it from them?", answer: "This article can’t confirm any way to sell a regular gift from one account to another. If the gift has been turned into a collectible, you can buy it through the market, but don’t pay anything upfront." },
  { question: "I don’t have Premium, and the gift is for subscribers only. What can I do?", answer: "Telegram’s documentation says you can’t buy that kind of gift without a subscription. Either get Premium for your own username first or pick a gift that doesn’t have that requirement." },
  { question: "Why can’t I buy the same gift a second time?", answer: "The gift may have a per-user limit that you’ve already used up. It may also have run out of supply and switched to sold_out." },
  { question: "How much does an NFT version of a hidden design cost?", answer: "There’s no fixed price. Each seller sets their own price, and prices can vary a lot. Compare several copies; you can see prices in so‘m on the NFT Market in the bot." },
  { question: "Can I send a removed limited gift through StarsPaymee?", answer: "No. Bots can’t send limited gifts that Telegram has removed from sale. In the bot, you can only buy ready collectible copies from the NFT Market." },
  { question: "If I send Stars instead of a gift, can my friend pick a gift themselves?", answer: "Yes, they can pick any available gift from the store, as long as it has no limit or Premium requirement that blocks them. The minimum order is 50 Stars, and the price depends on the payment method." },
  { question: "What if a seller wants to log in to my account to “find a hidden gift”?", answer: "Say no and end the conversation. Buying a gift never requires access to your account or an SMS code. A request like that is a clear sign someone is trying to take over your account." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["sotuvdan yashirilgan telegram sovg'ani sotib olish","yashirin telegram sovg'a sotib olish","sotuvdan olingan telegram gift","eski telegram sovg'ani qayerdan olish","STARGIFT_INVALID xatosi","telegram gift sold out","telegram sovg'a so'mda","купить скрытый подарок Telegram","подарок снят с продажи Telegram","STARGIFT_INVALID ошибка подарок","старый подарок Telegram купить","скрытые подарки Telegram отключили"],
  howToSteps: [
    { name: "Profilni oching", text: "oluvchining profilida ⋮ yoki ⋯ tugmasini bosib, Send a Gift bandini tanlang. Bu yo‘l Telegram blogida tasvirlangan." },
    { name: "Ro‘yxatdan qidiring", text: "kerakli dizayn ro‘yxatda bo‘lmasa, uni rasmiy yo‘l bilan sotib olib bo‘lmaydi." },
    { name: "Tirajga qarang", text: "cheklangan sovg‘ada nechta nusxa qolganini ko‘ring." },
    { name: "Shaxsiy limitni tekshiring", text: "bu sovg‘ani avval olgan bo‘lsangiz, sizga ajratilgan son tugagan bo‘lishi mumkin." },
    { name: "Sana va Premium shartini ko‘ring", text: "sovg‘ada sana cheklovi bor-yo‘qligini tekshiring. U faqat Premium uchun bo‘lsa, obunangiz faolligiga ishonch hosil qiling." },
    { name: "Natijaga qarab yo‘l tanlang", text: "sovg‘a ro‘yxatda topilmasa, kolleksion nusxani qidiring yoki muqobil sovg‘a tanlang." },
  ],
  locales: {
    uz: {
      title: "Sotuvdan yashirilgan Telegram sovg‘ani sotib olsa bo‘ladimi: o‘rniga nima?",
      excerpt: "Telegram do‘konidan olib tashlangan eski sovg‘ani ilova ichida endi sotib olib bo‘lmaydi. Maqolada cheklovlar jadvali, xariddan oldingi tekshiruv, aldov belgilari va so‘mdagi muqobillar bor.",
      metaTitle: "Sotuvdan yashirilgan Telegram sovg‘ani sotib olsa bo‘ladimi",
      metaDescription: "Telegram do‘konidan olib tashlangan eski sovg‘ani ilova ichida endi sotib olib bo‘lmaydi. Maqolada cheklovlar jadvali, xariddan oldingi tekshiruv, aldov…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Можно ли купить подарок Telegram, снятый с продажи, и что взять вместо",
      excerpt: "Старый подарок, убранный из магазина Telegram, в приложении больше не купить. Разбираем ограничения в таблице, проверку перед оплатой, признаки обмана и замену в сумах.",
      metaTitle: "Можно ли купить подарок Telegram, снятый с продажи",
      metaDescription: "Старый подарок, убранный из магазина Telegram, в приложении больше не купить. Разбираем ограничения в таблице, проверку перед оплатой, признаки обмана и…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can You Buy a Telegram Gift Removed From Sale? What to Get Instead",
      excerpt: "You can’t buy an old gift inside the Telegram app once it’s removed from the store. This guide covers the restrictions table, checks to run before paying, scam warning signs and alternatives paid in so‘m.",
      metaTitle: "Can You Buy a Telegram Gift Removed From Sale? What to Get",
      metaDescription: "You can’t buy an old gift inside the Telegram app once it’s removed from the store. This guide covers the restrictions table, checks to run before paying…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
