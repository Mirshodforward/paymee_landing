import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "durovga-telegram-sovga-yuborish";

/**
 * Durovga sovg‘a yuborish mumkinmi: mashhur akkauntga gift qanday boradi
 *
 * Avtoblogyoz yasagan maqola (2026-11-08): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: O‘zbekistondagi Telegram foydalanuvchisi «Durovga sovg‘a yuborish» deb qidiradi: u Pavel Durov yoki boshqa mashhur akkauntga gift yuborish mumkinmi, u sovg‘a qabul qilishini qanday bilish va so‘mda sovg‘ani qanday yuborishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-08):
 *   https://core.telegram.org/api/privacy
 *   https://core.telegram.org/constructor/globalPrivacySettings
 *   https://core.telegram.org/api/gifts
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, Pavel Durovga ham Telegram sovg‘asini yuborish mumkin. Asosiy shart: u o‘sha turdagi sovg‘ani maxfiylik sozlamasida taqiqlamagan bo‘lishi kerak. Ayrim sovg‘alarni esa faqat Premium obunasi borlar yubora oladi. Qoidalar mashhur akkauntga ham, oddiy foydalanuvchiga ham bir xil. Holat istalgan payt o‘zgarishi mumkin, shuning uchun yuborishdan oldin uni tekshiring. So‘mda yuborish uchun @StarsPaymee_bot bor.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#durovga-telegram-sovga-yuborsa-boladimi", label: "Durovga Telegram sovg‘a yuborsa bo‘ladimi?" },
          { href: "#mashhur-akkaunt-sovga-qabul-qilishini", label: "Mashhur akkaunt sovg‘a qabul qilishini qanday bilaman?" },
          { href: "#tolovdan-keyin-sovga-ketmadi-belgiga", label: "To‘lovdan keyin sovg‘a ketmadi: belgiga qarab sabab" },
          { href: "#shaxsiy-akkaunt-orniga-kanalga-yuborsa", label: "Shaxsiy akkaunt o‘rniga kanalga yuborsa bo‘ladimi?" },
          { href: "#durov-sovgani-olgandan-keyin-nima", label: "Durov sovg‘ani olgandan keyin nima bo‘ladi?" },
          { href: "#ismimni-yashirsam-durov-kimdan-kelganini", label: "Ismimni yashirsam, Durov kimdan kelganini biladimi?" },
          { href: "#durovga-qaysi-sovgani-tanlash-mantiqli", label: "Durovga qaysi sovg‘ani tanlash mantiqli?" },
          { href: "#durovga-sovgani-somda-qanday-yuborish", label: "Durovga sovg‘ani so‘mda qanday yuborish mumkin?" },
          { href: "#durov-sovgangizni-oldi-javob-uchun", label: "«Durov sovg‘angizni oldi, javob uchun to‘lang» degan xabarga ishonsa bo‘ladimi?" },
        ]}
      />
      <h2 id="durovga-telegram-sovga-yuborsa-boladimi">Durovga Telegram sovg‘a yuborsa bo‘ladimi?</h2>
      <p>Telegram har bir foydalanuvchiga kim u bilan qanday muloqot qila olishini batafsil belgilash imkonini beradi. Bu <a href={"https://core.telegram.org/api/privacy"} target="_blank" rel="noopener noreferrer">Telegram’ning maxfiylik sozlamalari hujjatida</a> yozilgan. Sovg‘alar ham shu sozlamalarga kiradi: umumiy maxfiylik sozlamalarida muayyan turdagi sovg‘alarni qabul qilishni taqiqlash mumkin (<a href={"https://core.telegram.org/constructor/globalPrivacySettings"} target="_blank" rel="noopener noreferrer">globalPrivacySettings</a>).</p>
      <p>Durov uchun alohida qoida yo‘q. U biror turni yopgan bo‘lsa, shu turdagi sovg‘a unga yetmaydi. Ochiq bo‘lsa, sovg‘a boshqa har qanday odamga yuborilgandek boradi.</p>
      <p>Mavzu bitta Telegram kanalidagi postdan keyin ko‘tarildi. Postda Durov sovg‘alarni avval yopib, keyin qayta ochgani aytilgan. Bu gap rasmiy manbada tasdiqlanmagan. Shuning uchun do‘stingiz yoki kanal «ochiq ekan» deganiga emas, aynan yuborayotgan paytingizdagi holatga qarang.</p>
      <p><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts hujjatiga</a> ko‘ra, foydalanuvchi qaysi sovg‘a turlarini qabul qilmasligi boshqa foydalanuvchilarga ko‘rinadi. Demak, sovg‘ani ko‘r-ko‘rona yuborish shart emas: ilova cheklovni oldindan ko‘rsata oladi.</p>
      <h2 id="mashhur-akkaunt-sovga-qabul-qilishini">Mashhur akkaunt sovg‘a qabul qilishini qanday bilaman?</h2>
      <p>To‘lovdan oldin to‘rt narsani tekshiring:</p>
      <ul>
        <li><b>Chatdagi sovg‘a tugmasi.</b> API hujjatiga ko‘ra, sizda ham, oluvchida ham sovg‘a tugmasi bayrog‘i yoqilgan bo‘lsa, shaxsiy chatning matn maydonida sovg‘a tugmasi doim chiqishi kerak. Tugma ko‘rinsa, bu yaxshi belgi.</li>
        <li><b>Tugma yo‘qligi hali taqiq degani emas.</b> Ishlab chiquvchilarga berilgan ko‘rsatmaga ko‘ra, sovg‘a oynasi sozlamalardagi «Send a Gift» kabi band orqali ham doim ochilishi kerak. Bu dasturchilar uchun yo‘riqnoma. Ilovangizdagi menyu nomi boshqacha bo‘lishi mumkin.</li>
        <li><b>Cheklangan turlar.</b> Oluvchi taqiqlagan turdagi sovg‘a unga ketmaydi. Aynan qaysi turlarni cheklash mumkinligi bu maqolada tasdiqlanmagan. Sovg‘a oynasi sizga nimani taklif qilayotganiga qarang.</li>
        <li><b>Akkaunt haqiqiymi.</b> Mashhur ismli o‘xshash akkauntlar ko‘p. Username’ni qidiruvdagi birinchi natijadan emas, o‘zingiz uzoq vaqt kuzatib kelgan ishonchli manbadan oling.</li>
      </ul>
      <p>Oluvchi maxfiylik sozlamasini o‘zgartirsa, yangilanish uning kirib turgan barcha seanslariga yuboriladi. Ya’ni sozlama telefon va kompyuterda alohida-alohida turmaydi. Lekin bu uning keyingi qarorini oldindan bilish imkonini bermaydi: bugun ochiq sozlama ertaga yopilishi mumkin.</p>
      <h3>Ikki misol</h3>
      <p><b>Birinchi holat.</b> Samarqandlik Aziz Durovning shaxsiy chatini ochdi va matn maydonida sovg‘a tugmasini ko‘rdi. Oynada oddiy sovg‘alar taklif qilinmoqda. U bittasini tanlab yuborishi mumkin. Shoshilmasa, avval Stars olib, o‘zi Telegram ichidan yuboradi.</p>
      <p><b>Ikkinchi holat.</b> Nilufar kerakli sovg‘ani oynada topa olmadi. Boshqa turdagilar esa ko‘rinib turibdi. Bu oluvchi aynan shu turni cheklaganini bildirishi mumkin. Nilufar boshqa tur tanlaydi yoki keyinroq qayta tekshiradi. Oluvchidan sozlamani ochishni so‘rash mashhur akkaunt bilan amalda ish bermaydi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="tolovdan-keyin-sovga-ketmadi-belgiga">To‘lovdan keyin sovg‘a ketmadi: belgiga qarab sabab</h2>
      <p>Mashhur akkauntga sovg‘a ketmasa, xato ko‘pincha yuboruvchida emas, sozlamalarda bo‘ladi. Quyidagi jadvalda nimani ko‘rganingizdan boshlang.</p>
      <CompareTable
        headers={["Ko‘rgan narsangiz", "Ehtimoliy sabab", "Keyingi qadam"]}
        rows={[
          ["Kerakli tur oynada yo‘q yoki yuborish rad etiladi", "Oluvchi bu turni taqiqlagan", "Boshqa tur tanlang yoki keyinroq tekshiring"],
          ["Sovg‘ani tanlaganda Premium so‘raladi", "Bu sovg‘a faqat Premium obunachilar uchun", "Premium oling yoki boshqa sovg‘a tanlang"],
          ["Kanalga sovg‘a yuborib bo‘lmayapti", "Kanalda sovg‘alar yoqilmagan", "Shaxsiy akkauntga yuborishni ko‘rib chiqing"],
          ["Ilovangizda sovg‘alar bo‘limi umuman yo‘q", "Ilova konfiguratsiyasida sovg‘alar o‘chirilgan bo‘lishi mumkin", "Bu oluvchiga bog‘liq emas; bot orqali yuborishni sinang"],
          ["Sovg‘a ketdi, lekin boshqa akkauntga", "Username’da xato yoki soxta akkaunt", "Keyingi safar username’ni harfma-harf solishtiring"],
        ]}
      />
      <p>To‘rtinchi qator haqida: Telegram hujjatiga ko‘ra, ilova konfiguratsiyasida stargifts_blocked bayrog‘i yoqilgan bo‘lsa, sovg‘alar funksiyasi o‘chirilishi shart. Bunda sovg‘a oynasi sizda umuman chiqmaydi.</p>
      <p>Oddiy do‘stlarga yuborishdagi umumiy holatlar <Link href="/blog/telegram-gift-yuborilmayapti">Telegram gift yuborilmayapti</Link> maqolasida yoritilgan.</p>
      <h2 id="shaxsiy-akkaunt-orniga-kanalga-yuborsa">Shaxsiy akkaunt o‘rniga kanalga yuborsa bo‘ladimi?</h2>
      <p>Telegram sovg‘ani foydalanuvchiga ham, kanalga ham yuborishga ruxsat beradi. Kanalga esa faqat unda sovg‘alar yoqilgan bo‘lsa yuboriladi.</p>
      <p>Mashhur odamning kanaliga yuborishdan oldin uchta narsani hisobga oling:</p>
      <ul>
        <li>kanal haqiqatan o‘sha odamniki ekanini tekshiring, chunki nusxa kanallar ham ko‘p;</li>
        <li>kanal oynasida sovg‘a tanlovi chiqmasa, u yerda sovg‘alar yoqilmagan;</li>
        <li>kanal sovg‘asini shaxsiy tabrik deb qabul qilmang: uni kanal ma’muriyati boshqaradi.</li>
      </ul>
      <p>Shaxsiy akkaunt yopiq, kanal esa ochiq bo‘lsa, kanal yagona yo‘l bo‘lib qolishi mumkin. Ikkalasida ham ruxsat bo‘lmasa, sovg‘ani yuborib bo‘lmaydi.</p>
      <h2 id="durov-sovgani-olgandan-keyin-nima">Durov sovg‘ani olgandan keyin nima bo‘ladi?</h2>
      <p>Sovg‘a yetib borgach, u bilan nima qilishni oluvchi hal qiladi. Telegram qoidasiga ko‘ra, u sovg‘ani profilida ko‘rsatishi yoki Telegram Stars’ga aylantirishi mumkin.</p>
      <p>Ayrim sovg‘alar oluvchining maxfiylik sozlamasiga qarab profilda avtomatik paydo bo‘lishi ham mumkin. Demak, sovg‘angiz Durov profilida ko‘rinishi kafolatlanmagan.</p>
      <p>Stars’ga aylantirishning cheklovlari:</p>
      <ul>
        <li>buni faqat sovg‘a olingandan keyingi belgilangan muddat ichida qilish mumkin;</li>
        <li>aylantirilganda olinadigan Stars sovg‘aning xarid narxidan kam bo‘ladi;</li>
        <li>kolleksion sovg‘alar auksionida olingan sovg‘ani Stars’ga umuman aylantirib bo‘lmaydi.</li>
      </ul>
      <p>Yuboruvchi uchun xulosa oddiy: sovg‘a jo‘natilgandan keyin uning taqdiri sizga bog‘liq emas. Mashhur akkauntga sovg‘alar ko‘p keladi. Sovg‘a javob, rahmat yoki alohida e’tibor olish huquqini bermaydi. Uni tabrik belgisi deb qabul qiling.</p>
      <h2 id="ismimni-yashirsam-durov-kimdan-kelganini">Ismimni yashirsam, Durov kimdan kelganini biladimi?</h2>
      <p>Yuborishda ismingizni yashirish mumkin. Oluvchi sovg‘ani profilida ko‘rsatsa, boshqalar ismingizni ko‘rmaydi. Lekin oluvchining o‘zi kim yuborganini baribir ko‘radi. Bu qoida <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts hujjatida</a> yozilgan.</p>
      <p>Ya’ni yashirin rejim sizni ommadan yashiradi, oluvchidan emas. Sovg‘ani bot orqali yuborsangiz, yuboruvchi qanday ko‘rinishini buyurtmadan oldin botda aniqlab oling.</p>
      <Notice label={"Muhim"}>Tabrik matniga telefon raqami, karta raqami, manzil yoki boshqa shaxsiy ma’lumot yozmang. Sovg‘a ommaviy profilda ko‘rsatilsa, matnni begona odamlar ham o‘qishi mumkin.</Notice>
      <h2 id="durovga-qaysi-sovgani-tanlash-mantiqli">Durovga qaysi sovg‘ani tanlash mantiqli?</h2>
      <p>Mashhur odamga sovg‘a sarmoya emas, e’tibor belgisi. Shuning uchun qimmat variantni tanlash shart emas. Quyida asosiy turlar taqqoslangan.</p>
      <CompareTable
        headers={["Sovg‘a turi", "Kim yubora oladi", "Stars’ga aylanadimi", "Kimga mos"]}
        rows={[
          ["Oddiy gift", "Har qanday foydalanuvchi, agar oluvchi bu turni yopmagan bo‘lsa", "Ha, belgilangan muddat ichida, xarid narxidan kamroqqa", "Ramziy tabrik yubormoqchi bo‘lganga"],
          ["Premium talab qiladigan gift", "Faqat Premium obunasi bor foydalanuvchi", "Umumiy qoida: muddat ichida, kamroqqa", "Premium’i borlarga kengroq tanlov"],
          ["Kolleksion (NFT) sovg‘a", "Tayyor nusxa botdagi NFT Market’da sotiladi", "Auksionda olingan bo‘lsa yo‘q; boshqa holat bu maqolada tasdiqlanmagan", "O‘ziga xos nusxa qidirganga"],
        ]}
      />
      <p>Amaliy eslatmalar:</p>
      <ul>
        <li>Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Tayyor kolleksion sovg‘alarni botdagi <Link href="/blog/starspaymee-nft-market">NFT Market’da</Link> so‘mda olish mumkin. Uni boshqa odamga qanday yetkazish mumkinligini xariddan oldin botda tekshiring.</li>
        <li>Premium sovg‘a qilmoqchi bo‘lsangiz, bitta qoidani biling: oluvchida faol Premium bo‘lsa, @StarsPaymee_bot yangi buyurtma ochmaydi. Muddat faol obuna ustiga qo‘shilmaydi.</li>
        <li>Kanal postida Durovning tug‘ilgan kuni yaqinligi aytilgan, ammo sana bu maqolada rasmiy manba bilan tasdiqlanmagan. Tabrik g‘oyalari uchun <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">tug‘ilgan kunga Telegram sovg‘a tanlash</Link> maqolasini ko‘ring.</li>
      </ul>
      <p>Sovg‘alar katalogi <Link href="/gifts">Sovg‘alar sahifasida</Link> jamlangan.</p>
      <h2 id="durovga-sovgani-somda-qanday-yuborish">Durovga sovg‘ani so‘mda qanday yuborish mumkin?</h2>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Bot orqali yuborish tartibi:</p>
      <Steps>
        <Step title={"Username’ni tekshiring"}>u siz kuzatib kelgan haqiqiy akkauntga tegishli ekanini ishonchli manbadan solishtiring.</Step>
        <Step title={"Qabul holatini ko‘ring"}>chatda sovg‘a tugmasi bor-yo‘qligiga qarang, cheklangan turlarni hisobga oling.</Step>
        <Step title={"@StarsPaymee_bot’ni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">botga kiring</a> va sovg‘alar bo‘limiga o‘ting.</Step>
        <Step title={"Oluvchining username’ini kiriting"}>boshqa ma’lumot kerak emas: parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</Step>
        <Step title={"Natijani tekshiring"}>buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Muammo bo‘lsa, botdagi buyurtma holatiga qarang va <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</Step>
      </Steps>
      <p>Ikkinchi yo‘l: avval Stars olasiz, keyin sovg‘ani Telegram ichidan o‘zingiz yuborasiz. Bunda yuborish oynasidagi barcha tanlovlar, jumladan ismni yashirish ham, sizning qo‘lingizda bo‘ladi. Stars narxi to‘lov usuliga bog‘liq: karta o‘tkazmasi yoki bot balansidan 1 tasi {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Batafsil ma’lumot <Link href="/stars">Stars sahifasida</Link>.</p>
      <p>Ikkala yo‘l bosqichma-bosqich <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">Telegram Gifts qanday yuboriladi</Link> qo‘llanmasida yoritilgan. Oluvchining username’i bo‘lmasa, <Link href="/blog/telegram-id-orqali-sovga-yuborish">Telegram ID orqali sovg‘a yuborish</Link> maqolasiga qarang.</p>
      <h2 id="durov-sovgangizni-oldi-javob-uchun">«Durov sovg‘angizni oldi, javob uchun to‘lang» degan xabarga ishonsa bo‘ladimi?</h2>
      <p>Yo‘q. Mashhur ism atrofida firibgarlar doim faol. Durov haqida yangilik tarqalgan kunlarda bunday xabarlar ko‘payadi. Sovg‘a Telegram ichida yoki bot orqali yuboriladi. Bu jarayonda begona odamga oldindan pul o‘tkazish talab qilinmaydi.</p>
      <p>Shubhali xabarning belgilari:</p>
      <ul>
        <li>yozuvchining username’i haqiqiy akkauntnikiga o‘xshaydi, lekin bitta harf yoki belgi bilan farq qiladi;</li>
        <li>«sovg‘a qabulini ochish», «javob olish» yoki «shaxsiy suhbat» uchun to‘lov so‘raladi;</li>
        <li>«faqat bugun», «10 daqiqa qoldi» kabi shoshirish bor;</li>
        <li>Telegram’dan tashqaridagi notanish saytga havola beriladi;</li>
        <li>SMS kod, 2FA paroli yoki Fragment hamyon ma’lumoti so‘raladi.</li>
      </ul>
      <p>Bu ma’lumotlarni hech kimga bermang. StarsPaymee ham ularni so‘ramaydi: buyurtma uchun faqat @username kerak. StarsPaymee mustaqil xizmat, Telegram nomidan hech qanday va’da bermaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/privacy", label: "Privacy settings" },
          { href: "https://core.telegram.org/constructor/globalPrivacySettings", label: "globalPrivacySettings" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Durovga sovg‘a yuborsam, u menga javob yozadimi?", answer: "Bunga umid bog‘lamang. Sovg‘a muloqot yoki e’tibor olish huquqini bermaydi, mashhur akkauntga esa har kuni ko‘p xabar va sovg‘a keladi." },
  { question: "Durov sovg‘alarni yopib qo‘yganini qayerdan bilaman?", answer: "Telegram hujjatiga ko‘ra, cheklangan sovg‘a turlari boshqalarga ko‘rinadi. Amalda uning chatini ochib, sovg‘a oynasida qaysi turlar chiqayotganiga qarang." },
  { question: "Durovga sovg‘a yuborish uchun Telegram Premium kerakmi?", answer: "Hamma sovg‘a uchun emas. Premium faqat ayrim sovg‘alar uchun talab qilinadi va ilova buni tanlov paytida o‘zi so‘raydi." },
  { question: "Soxta «Durov» akkauntini qanday ajrataman?", answer: "Username’ni uzoq vaqt kuzatib kelgan ishonchli manbangiz bilan harfma-harf solishtiring. Pul, kod yoki parol so‘ragan «Durov» — firibgarlik belgisi." },
  { question: "Durov sovg‘ani Stars’ga aylantirsa, menga biror narsa qaytadimi?", answer: "Yo‘q, Stars oluvchining balansiga tushadi. Uning o‘zi ham sovg‘a narxidan kamroq Stars oladi." },
  { question: "Durovga kolleksion NFT sovg‘a yuborsa bo‘ladimi?", answer: "Tayyor kolleksion sovg‘ani @StarsPaymee_bot’dagi NFT Market’da so‘mda olish mumkin. Uni boshqa akkauntga yetkazish tartibini xariddan oldin botda aniqlang. Oluvchi bu turni cheklagan bo‘lishi ham mumkin." },
  { question: "Durovning kanaliga sovg‘a yuborsa bo‘ladimi?", answer: "Faqat kanalda sovg‘alar yoqilgan bo‘lsa. Kanal oynasida sovg‘a tanlovi chiqmasa, u yerga yuborib bo‘lmaydi." },
  { question: "Botda to‘ladim, sovg‘a yetkazilmadi — endi nima qilaman?", answer: "Avval botdagi buyurtma holatini ko‘ring. Keyin buyurtma ma’lumotlari bilan @StarsPaymeeSupport’ga murojaat qiling." },
  { question: "Anonim yuborsam, sovg‘am Durov profilida ko‘rinadimi?", answer: "Buni oluvchining qarori yoki sozlamasi belgilaydi. Profilda chiqsa ham, boshqalar ismingizni ko‘rmaydi, oluvchining o‘zi esa sizni taniydi." },
  { question: "Boshqa mashhur blogerlarga ham sovg‘a shu tartibda yuboriladimi?", answer: "Ha, qoidalar hamma akkaunt uchun bir xil va hamma narsa oluvchining sozlamasiga bog‘liq. Username va qabul holatini tekshirgach, @StarsPaymee_bot orqali so‘mda yuborasiz." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, Павлу Дурову тоже можно отправить подарок в Telegram. Главное условие — он не запретил этот тип подарков в настройках конфиденциальности. Некоторые подарки могут отправлять только владельцы Premium. Правила для известного аккаунта и для обычного пользователя одинаковые. Настройки могут поменяться в любой момент, поэтому проверяйте их перед отправкой. Отправить подарок за сумы можно через @StarsPaymee_bot.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#durovga-telegram-sovga-yuborsa-boladimi", label: "Можно ли отправить Дурову подарок в Telegram?" },
          { href: "#mashhur-akkaunt-sovga-qabul-qilishini", label: "Как понять, принимает ли известный аккаунт подарки?" },
          { href: "#tolovdan-keyin-sovga-ketmadi-belgiga", label: "Подарок не ушёл после оплаты: причина по признакам" },
          { href: "#shaxsiy-akkaunt-orniga-kanalga-yuborsa", label: "Можно ли отправить подарок в канал вместо личного аккаунта?" },
          { href: "#durov-sovgani-olgandan-keyin-nima", label: "Что происходит после того, как Дуров получил подарок?" },
          { href: "#ismimni-yashirsam-durov-kimdan-kelganini", label: "Если скрыть имя, узнает ли Дуров, от кого подарок?" },
          { href: "#durovga-qaysi-sovgani-tanlash-mantiqli", label: "Какой подарок разумно выбрать для Дурова?" },
          { href: "#durovga-sovgani-somda-qanday-yuborish", label: "Как отправить подарок Дурову за сумы?" },
          { href: "#durov-sovgangizni-oldi-javob-uchun", label: "Можно ли верить сообщению «Дуров получил ваш подарок, заплатите за ответ»?" },
        ]}
      />
      <h2 id="durovga-telegram-sovga-yuborsa-boladimi">Можно ли отправить Дурову подарок в Telegram?</h2>
      <p>Telegram позволяет каждому пользователю подробно настроить, кто и как может с ним взаимодействовать. Это описано в <a href={"https://core.telegram.org/api/privacy"} target="_blank" rel="noopener noreferrer">документации Telegram о настройках конфиденциальности</a>. Подарки входят в эти настройки: в общих параметрах конфиденциальности можно запретить получение подарков определённых типов (<a href={"https://core.telegram.org/constructor/globalPrivacySettings"} target="_blank" rel="noopener noreferrer">globalPrivacySettings</a>).</p>
      <p>Отдельного правила для Дурова нет. Если он закрыл какой-то тип, подарок этого типа до него не дойдёт. Если тип открыт, подарок уйдёт так же, как любому другому человеку.</p>
      <p>Тема всплыла после поста в одном Telegram-канале. В нём говорилось, что Дуров сначала закрыл подарки, а потом снова открыл. В официальных источниках это не подтверждено. Поэтому ориентируйтесь не на слова друга или канала «вроде открыто», а на то, что видите сами в момент отправки.</p>
      <p>По <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts</a>, то, какие типы подарков пользователь не принимает, видно другим пользователям. Значит, отправлять вслепую не нужно: приложение может заранее показать ограничение.</p>
      <h2 id="mashhur-akkaunt-sovga-qabul-qilishini">Как понять, принимает ли известный аккаунт подарки?</h2>
      <p>Перед оплатой проверьте четыре вещи:</p>
      <ul>
        <li><b>Кнопка подарка в чате.</b> По документации API, если флаг кнопки подарков включён и у вас, и у получателя, в поле ввода личного чата всегда должна показываться кнопка подарка. Если кнопка видна — это хороший знак.</li>
        <li><b>Нет кнопки — ещё не значит запрет.</b> По инструкции для разработчиков, окно подарков должно всегда открываться и через пункт вроде «Send a Gift» в настройках. Это руководство для программистов, в вашем приложении пункт меню может называться иначе.</li>
        <li><b>Ограниченные типы.</b> Подарок того типа, который получатель запретил, к нему не уйдёт. Какие именно типы можно ограничить, в этой статье не подтверждено. Смотрите, что предлагает вам окно подарков.</li>
        <li><b>Настоящий ли аккаунт.</b> Похожих аккаунтов с известными именами много. Берите username не из первого результата поиска, а из надёжного источника, за которым вы давно следите.</li>
      </ul>
      <p>Когда получатель меняет настройки конфиденциальности, обновление приходит во все его активные сеансы. То есть настройка не живёт отдельно на телефоне и на компьютере. Но предсказать его следующее решение это не помогает: открытое сегодня завтра может закрыться.</p>
      <h3>Два примера</h3>
      <p><b>Первый случай.</b> Азиз из Самарканда открыл личный чат с Дуровым и увидел кнопку подарка в поле ввода. В окне предлагаются обычные подарки. Он может выбрать один и отправить. Если не торопится — сначала покупает Stars и отправляет подарок сам внутри Telegram.</p>
      <p><b>Второй случай.</b> Нилуфар не нашла в окне нужный подарок, хотя подарки других типов видны. Это может означать, что получатель ограничил именно этот тип. Нилуфар выбирает другой тип или проверяет позже. Просить известный аккаунт открыть настройку на практике бесполезно.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="tolovdan-keyin-sovga-ketmadi-belgiga">Подарок не ушёл после оплаты: причина по признакам</h2>
      <p>Если подарок известному аккаунту не дошёл, дело чаще всего не в отправителе, а в настройках. Начните с того, что видите, — по таблице ниже.</p>
      <CompareTable
        headers={["Что вы видите", "Вероятная причина", "Что делать"]}
        rows={[
          ["Нужного типа нет в окне или отправка отклоняется", "Получатель запретил этот тип", "Выберите другой тип или проверьте позже"],
          ["При выборе подарка требуется Premium", "Подарок доступен только подписчикам Premium", "Оформите Premium или выберите другой подарок"],
          ["Подарок в канал не отправляется", "В канале подарки не включены", "Рассмотрите отправку на личный аккаунт"],
          ["В вашем приложении вообще нет раздела подарков", "Подарки могут быть отключены в конфигурации приложения", "От получателя это не зависит; попробуйте отправить через бот"],
          ["Подарок ушёл, но на другой аккаунт", "Ошибка в username или поддельный аккаунт", "В следующий раз сверяйте username по буквам"],
        ]}
      />
      <p>О четвёртой строке: по документации Telegram, если в конфигурации приложения включён флаг stargifts_blocked, функция подарков должна быть отключена. Тогда окно подарков у вас просто не появится.</p>
      <p>Общие случаи при отправке обычным друзьям разобраны в статье <Link href="/blog/telegram-gift-yuborilmayapti">Telegram gift yuborilmayapti</Link>.</p>
      <h2 id="shaxsiy-akkaunt-orniga-kanalga-yuborsa">Можно ли отправить подарок в канал вместо личного аккаунта?</h2>
      <p>Telegram разрешает отправлять подарки и пользователю, и каналу. Но в канал — только если в нём включены подарки.</p>
      <p>Прежде чем отправлять подарок в канал известного человека, учтите три вещи:</p>
      <ul>
        <li>убедитесь, что канал действительно принадлежит этому человеку — каналов-копий тоже много;</li>
        <li>если в окне канала нет выбора подарков, значит, подарки там не включены;</li>
        <li>не воспринимайте подарок каналу как личное поздравление: им распоряжается администрация канала.</li>
      </ul>
      <p>Если личный аккаунт закрыт, а канал открыт, канал может оказаться единственным вариантом. Если закрыты оба, отправить подарок не получится.</p>
      <h2 id="durov-sovgani-olgandan-keyin-nima">Что происходит после того, как Дуров получил подарок?</h2>
      <p>Когда подарок дошёл, решать его судьбу будет получатель. По правилам Telegram, он может показать подарок в профиле или превратить его в Telegram Stars.</p>
      <p>Некоторые подарки могут появляться в профиле автоматически — это зависит от настроек конфиденциальности получателя. Так что появление вашего подарка в профиле Дурова не гарантировано.</p>
      <p>Ограничения при конвертации в Stars:</p>
      <ul>
        <li>это можно сделать только в течение установленного срока после получения;</li>
        <li>при конвертации получатель получает меньше Stars, чем стоил подарок;</li>
        <li>подарок, купленный на аукционе коллекционных подарков, в Stars не конвертируется вообще.</li>
      </ul>
      <p>Вывод для отправителя простой: после отправки судьба подарка от вас не зависит. Известным аккаунтам подарков приходит много. Подарок не даёт права на ответ, благодарность или особое внимание. Воспринимайте его как знак поздравления.</p>
      <h2 id="ismimni-yashirsam-durov-kimdan-kelganini">Если скрыть имя, узнает ли Дуров, от кого подарок?</h2>
      <p>При отправке имя можно скрыть. Если получатель выставит подарок в профиле, остальные вашего имени не увидят. Но сам получатель всё равно видит, кто отправил. Это правило записано в <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts</a>.</p>
      <p>То есть скрытый режим прячет вас от публики, но не от получателя. Если отправляете через бот, уточните в боте до заказа, как будет отображаться отправитель.</p>
      <Notice label={"Важно"}>Не пишите в тексте поздравления номер телефона, номер карты, адрес и другие личные данные. Если подарок покажут в публичном профиле, текст смогут прочитать посторонние.</Notice>
      <h2 id="durovga-qaysi-sovgani-tanlash-mantiqli">Какой подарок разумно выбрать для Дурова?</h2>
      <p>Подарок знаменитости — не вложение, а знак внимания. Поэтому дорогой вариант брать не обязательно. Ниже сравнение основных типов.</p>
      <CompareTable
        headers={["Тип подарка", "Кто может отправить", "Конвертируется в Stars", "Кому подходит"]}
        rows={[
          ["Обычный подарок", "Любой пользователь, если получатель не закрыл этот тип", "Да, в установленный срок и дешевле цены покупки", "Тем, кто хочет символически поздравить"],
          ["Подарок, требующий Premium", "Только пользователь с подпиской Premium", "По общему правилу: в срок и дешевле", "Владельцам Premium — более широкий выбор"],
          ["Коллекционный (NFT) подарок", "Готовые экземпляры продаются в NFT Market в боте", "Если куплен на аукционе — нет; остальные случаи в статье не подтверждены", "Тем, кто ищет особый экземпляр"],
        ]}
      />
      <p>Практические замечания:</p>
      <ul>
        <li>Боты не могут отправлять лимитированные подарки, которые Telegram снял с продажи. Готовые коллекционные подарки можно купить за сумы в <Link href="/blog/starspaymee-nft-market">NFT Market бота</Link>. Как передать такой подарок другому человеку, уточните в боте до покупки.</li>
        <li>Если хотите подарить Premium, знайте одно правило: если у получателя активна подписка Premium, @StarsPaymee_bot не откроет новый заказ. Срок поверх активной подписки не добавляется.</li>
        <li>В посте канала упоминалось, что у Дурова скоро день рождения, но дата в этой статье официальным источником не подтверждена. Идеи для поздравления — в статье <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">о выборе подарка в Telegram на день рождения</Link>.</li>
      </ul>
      <p>Каталог подарков собран на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="durovga-sovgani-somda-qanday-yuborish">Как отправить подарок Дурову за сумы?</h2>
      <p>Международная карта, криптокошелёк или VPN не нужны. Порядок отправки через бот:</p>
      <Steps>
        <Step title={"Проверьте username"}>сверьте по надёжному источнику, что он принадлежит настоящему аккаунту, за которым вы следите.</Step>
        <Step title={"Посмотрите, принимает ли получатель подарки"}>есть ли кнопка подарка в чате, учтите ограниченные типы.</Step>
        <Step title={"Откройте @StarsPaymee_bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">перейдите в бот</a> и зайдите в раздел подарков.</Step>
        <Step title={"Введите username получателя"}>больше ничего не нужно: пароль, SMS-код или доступ к аккаунту не запрашиваются.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота.</Step>
        <Step title={"Проверьте результат"}>обычно заказ доставляется автоматически за несколько секунд. Если что-то пошло не так, посмотрите статус заказа в боте и напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>Второй путь: сначала купить Stars, а потом отправить подарок самому внутри Telegram. Тогда все настройки окна отправки, включая скрытие имени, будут в ваших руках. Цена Stars зависит от способа оплаты: при переводе на карту или с баланса бота 1 звезда стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Подробности — на <Link href="/stars">странице Stars</Link>.</p>
      <p>Оба пути пошагово описаны в инструкции <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">как отправить Telegram Gifts</Link>. Если у получателя нет username, загляните в статью <Link href="/blog/telegram-id-orqali-sovga-yuborish">об отправке подарка по Telegram ID</Link>.</p>
      <h2 id="durov-sovgangizni-oldi-javob-uchun">Можно ли верить сообщению «Дуров получил ваш подарок, заплатите за ответ»?</h2>
      <p>Нет. Вокруг громких имён мошенники активны всегда, а в дни, когда о Дурове расходятся новости, таких сообщений становится больше. Подарок отправляется внутри Telegram или через бот. Платить заранее постороннему человеку в этом процессе не требуется.</p>
      <p>Признаки подозрительного сообщения:</p>
      <ul>
        <li>username отправителя похож на настоящий, но отличается одной буквой или символом;</li>
        <li>просят оплату за «открытие приёма подарков», «получение ответа» или «личную беседу»;</li>
        <li>торопят: «только сегодня», «осталось 10 минут»;</li>
        <li>дают ссылку на незнакомый сайт за пределами Telegram;</li>
        <li>просят SMS-код, пароль 2FA или данные кошелька Fragment.</li>
      </ul>
      <p>Никому не передавайте эти данные. StarsPaymee их тоже не запрашивает: для заказа нужен только @username. StarsPaymee — независимый сервис и не даёт никаких обещаний от имени Telegram.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/privacy", label: "Privacy settings" },
          { href: "https://core.telegram.org/constructor/globalPrivacySettings", label: "globalPrivacySettings" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если я отправлю Дурову подарок, он мне ответит?", answer: "Не рассчитывайте на это. Подарок не даёт права на общение или внимание, а известному аккаунту каждый день приходит множество сообщений и подарков." },
  { question: "Как узнать, закрыл ли Дуров подарки?", answer: "По документации Telegram ограниченные типы подарков видны другим пользователям. На практике откройте его чат и посмотрите, какие типы появляются в окне подарков." },
  { question: "Нужен ли Telegram Premium, чтобы отправить подарок Дурову?", answer: "Не для всех подарков. Premium требуется только для некоторых из них, и приложение само попросит его при выборе." },
  { question: "Как отличить поддельный аккаунт «Дурова»?", answer: "Сравните username по буквам с надёжным источником, за которым давно следите. «Дуров», который просит деньги, код или пароль, — явный признак мошенничества." },
  { question: "Если Дуров превратит подарок в Stars, мне что-то вернётся?", answer: "Нет, звёзды зачисляются на баланс получателя. Причём он сам получит меньше Stars, чем стоил подарок." },
  { question: "Можно ли подарить Дурову коллекционный NFT-подарок?", answer: "Готовый коллекционный подарок можно купить за сумы в NFT Market в @StarsPaymee_bot. Как передать его на другой аккаунт, уточните в боте до покупки; учтите, что получатель мог ограничить этот тип." },
  { question: "Можно ли отправить подарок в канал Дурова?", answer: "Только если в канале включены подарки. Если в окне канала нет выбора подарков, отправить туда ничего не получится." },
  { question: "Я оплатил в боте, а подарок не доставлен — что делать?", answer: "Сначала проверьте статус заказа в боте. Затем напишите в @StarsPaymeeSupport и приложите данные заказа." },
  { question: "Если отправить анонимно, будет ли подарок виден в профиле Дурова?", answer: "Это зависит от решения или настроек получателя. Даже если подарок появится в профиле, другие не увидят вашего имени, но сам получатель будет знать, кто отправил." },
  { question: "Другим известным блогерам подарки отправляются так же?", answer: "Да, правила одинаковы для всех аккаунтов, и всё решают настройки получателя. Проверьте username и приём подарков, а затем отправьте подарок за сумы через @StarsPaymee_bot." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can send Pavel Durov a Telegram gift. The main condition is that he hasn’t blocked that gift type in his privacy settings. Some gifts can only be sent by Premium subscribers. The rules are the same for famous accounts and ordinary users. Settings can change anytime, so check right before sending. To pay in soums, use @StarsPaymee_bot.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#durovga-telegram-sovga-yuborsa-boladimi", label: "Can you send Durov a Telegram gift?" },
          { href: "#mashhur-akkaunt-sovga-qabul-qilishini", label: "How do I know a famous account accepts gifts?" },
          { href: "#tolovdan-keyin-sovga-ketmadi-belgiga", label: "Paid but the gift didn’t go through: find the cause by symptom" },
          { href: "#shaxsiy-akkaunt-orniga-kanalga-yuborsa", label: "Can you send a gift to a channel instead of a personal account?" },
          { href: "#durov-sovgani-olgandan-keyin-nima", label: "What happens after Durov receives the gift?" },
          { href: "#ismimni-yashirsam-durov-kimdan-kelganini", label: "If I hide my name, will Durov know who sent it?" },
          { href: "#durovga-qaysi-sovgani-tanlash-mantiqli", label: "Which gift makes sense for Durov?" },
          { href: "#durovga-sovgani-somda-qanday-yuborish", label: "How to send Durov a gift paying in soums" },
          { href: "#durov-sovgangizni-oldi-javob-uchun", label: "“Durov got your gift, pay to get a reply” — can you trust that message?" },
        ]}
      />
      <h2 id="durovga-telegram-sovga-yuborsa-boladimi">Can you send Durov a Telegram gift?</h2>
      <p>Telegram lets every user decide in detail who can interact with them and how. This is described in <a href={"https://core.telegram.org/api/privacy"} target="_blank" rel="noopener noreferrer">Telegram’s privacy settings documentation</a>. Gifts are part of these settings: the global privacy settings include an option to refuse specific gift types (<a href={"https://core.telegram.org/constructor/globalPrivacySettings"} target="_blank" rel="noopener noreferrer">globalPrivacySettings</a>).</p>
      <p>There is no special rule for Durov. If he has closed a gift type, gifts of that type won’t reach him. If it’s open, your gift arrives the same way it would for anyone else.</p>
      <p>The topic came up after a post in one Telegram channel. The post claimed that Durov first closed gifts and then opened them again. This has not been confirmed by any official source. So don’t rely on a friend or a channel saying “it’s open” — look at the actual status at the moment you send.</p>
      <p>According to the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts documentation</a>, the gift types a user refuses are visible to other users. In other words, you don’t have to send blindly: the app can show the restriction in advance.</p>
      <h2 id="mashhur-akkaunt-sovga-qabul-qilishini">How do I know a famous account accepts gifts?</h2>
      <p>Check four things before you pay:</p>
      <ul>
        <li><b>The gift button in the chat.</b> According to the API documentation, if both you and the recipient have the gift button flag enabled, a gift button should always appear in the text field of your private chat. If you see it, that’s a good sign.</li>
        <li><b>No button doesn’t automatically mean a ban.</b> Developer guidelines say the gift window should also always be reachable through an entry like “Send a Gift” in the app’s settings. That’s guidance for app developers. The menu name in your app may be different.</li>
        <li><b>Restricted types.</b> A gift type the recipient has blocked won’t go through. Exactly which types can be restricted is not confirmed in this article. Look at what the gift window actually offers you.</li>
        <li><b>Is the account real?</b> There are plenty of lookalike accounts with famous names. Take the username from a trusted source you’ve followed for a long time, not from the first search result.</li>
      </ul>
      <p>When a recipient changes their privacy settings, the update is sent to all of their logged-in sessions. So the setting isn’t stored separately on phone and computer. But that doesn’t let you predict their next decision: a setting that’s open today may be closed tomorrow.</p>
      <h3>Two examples</h3>
      <p><b>Case one.</b> Aziz from Samarkand opened Durov’s private chat and saw the gift button in the text field. The window offers regular gifts. He can pick one and send it. If he isn’t in a hurry, he can buy Stars first and send the gift himself inside Telegram.</p>
      <p><b>Case two.</b> Nilufar couldn’t find the gift she wanted in the window, although other types were visible. This may mean the recipient restricted that particular type. Nilufar picks a different type or checks again later. Asking a famous account to open the setting doesn’t work in practice.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="tolovdan-keyin-sovga-ketmadi-belgiga">Paid but the gift didn’t go through: find the cause by symptom</h2>
      <p>When a gift to a famous account fails, the problem is usually in the settings, not with the sender. Start from what you see in the table below.</p>
      <CompareTable
        headers={["What you see", "Likely cause", "Next step"]}
        rows={[
          ["The type you want isn’t in the window, or sending is refused", "The recipient has blocked this type", "Choose another type or check later"],
          ["Premium is requested when you pick the gift", "This gift is for Premium subscribers only", "Get Premium or choose another gift"],
          ["You can’t send a gift to the channel", "Gifts aren’t enabled in the channel", "Consider sending to the personal account"],
          ["Your app has no gifts section at all", "Gifts may be disabled in the app configuration", "This has nothing to do with the recipient; try sending via the bot"],
          ["The gift went through, but to a different account", "Typo in the username or a fake account", "Next time, compare the username letter by letter"],
        ]}
      />
      <p>About the fourth row: according to Telegram’s documentation, if the stargifts_blocked flag is set in the app configuration, the gifts feature must be disabled. In that case the gift window won’t appear for you at all.</p>
      <p>Common issues when sending to regular friends are covered in <Link href="/blog/telegram-gift-yuborilmayapti">Telegram gift not sending</Link>.</p>
      <h2 id="shaxsiy-akkaunt-orniga-kanalga-yuborsa">Can you send a gift to a channel instead of a personal account?</h2>
      <p>Telegram allows gifts to both users and channels. A channel can only receive a gift if gifts are enabled there.</p>
      <p>Before sending to a famous person’s channel, keep three things in mind:</p>
      <ul>
        <li>make sure the channel really belongs to that person, since copycat channels are common;</li>
        <li>if no gift options appear in the channel window, gifts aren’t enabled there;</li>
        <li>don’t treat a channel gift as a personal greeting: the channel’s admins manage it.</li>
      </ul>
      <p>If the personal account is closed but the channel is open, the channel may be your only option. If neither allows gifts, you can’t send one.</p>
      <h2 id="durov-sovgani-olgandan-keyin-nima">What happens after Durov receives the gift?</h2>
      <p>Once the gift arrives, the recipient decides what to do with it. Under Telegram’s rules, they can display it on their profile or convert it into Telegram Stars.</p>
      <p>Some gifts may also appear on the profile automatically, depending on the recipient’s privacy settings. So there’s no guarantee your gift will be visible on Durov’s profile.</p>
      <p>Limits on converting to Stars:</p>
      <ul>
        <li>it can only be done within a set period after the gift is received;</li>
        <li>the Stars received on conversion are fewer than the gift’s purchase price;</li>
        <li>a gift acquired at a collectible gift auction can’t be converted into Stars at all.</li>
      </ul>
      <p>For the sender, the takeaway is simple: once the gift is sent, its fate is out of your hands. Famous accounts receive many gifts. A gift doesn’t entitle you to a reply, a thank-you or special attention. Think of it as a gesture of congratulations.</p>
      <h2 id="ismimni-yashirsam-durov-kimdan-kelganini">If I hide my name, will Durov know who sent it?</h2>
      <p>You can hide your name when sending. If the recipient displays the gift on their profile, other people won’t see your name. But the recipient still sees who sent it. This rule is in the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts documentation</a>.</p>
      <p>So hidden mode hides you from the public, not from the recipient. If you send the gift through a bot, check in the bot how the sender will appear before you order.</p>
      <Notice label={"Important"}>Don’t put a phone number, card number, address or other personal details in the greeting text. If the gift is displayed on a public profile, strangers can read the message too.</Notice>
      <h2 id="durovga-qaysi-sovgani-tanlash-mantiqli">Which gift makes sense for Durov?</h2>
      <p>A gift to a famous person is a gesture, not an investment. There’s no need to pick an expensive option. The main types are compared below.</p>
      <CompareTable
        headers={["Gift type", "Who can send it", "Converts to Stars?", "Best for"]}
        rows={[
          ["Regular gift", "Any user, unless the recipient has closed this type", "Yes, within the set period, for less than the purchase price", "Someone who wants to send a symbolic greeting"],
          ["Gift that requires Premium", "Only users with a Premium subscription", "General rule: within the period, for less", "Premium users who want more choice"],
          ["Collectible (NFT) gift", "Ready-made items are sold in the bot’s NFT Market", "Not if bought at auction; other cases not confirmed in this article", "Someone looking for a one-of-a-kind item"],
        ]}
      />
      <p>Practical notes:</p>
      <ul>
        <li>Bots can’t send limited gifts that Telegram has removed from sale. Ready-made collectible gifts can be bought in soums in the bot’s <Link href="/blog/starspaymee-nft-market">NFT Market</Link>. Check in the bot how it can be delivered to another person before you buy.</li>
        <li>If you want to gift Premium, know one rule: if the recipient already has active Premium, @StarsPaymee_bot won’t open a new order. The term isn’t added on top of an active subscription.</li>
        <li>The channel post mentioned that Durov’s birthday is coming up, but the date hasn’t been confirmed by an official source in this article. For greeting ideas, see <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">choosing a Telegram birthday gift</Link>.</li>
      </ul>
      <p>The full gift catalog is on the <Link href="/gifts">Gifts page</Link>.</p>
      <h2 id="durovga-sovgani-somda-qanday-yuborish">How to send Durov a gift paying in soums</h2>
      <p>You don’t need an international card, a crypto wallet or a VPN. Here’s how to send through the bot:</p>
      <Steps>
        <Step title={"Check the username"}>compare it against a trusted source to make sure it belongs to the real account you’ve been following.</Step>
        <Step title={"Check whether gifts are accepted"}>see if the gift button is in the chat and keep restricted types in mind.</Step>
        <Step title={"Open @StarsPaymee_bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">go to the bot</a> and open the gifts section.</Step>
        <Step title={"Enter the recipient’s username"}>nothing else is needed: no password, SMS code or account access is requested.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (app or cash at a terminal), a UzCard/HUMO card transfer or the bot balance.</Step>
        <Step title={"Check the result"}>orders are usually delivered automatically within a few seconds. If something goes wrong, check the order status in the bot and message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>The second route: buy Stars first, then send the gift yourself inside Telegram. That way every option in the sending window, including hiding your name, stays in your hands. The Stars price depends on the payment method: one Star costs {som(STARS_PER_UNIT_UZS, "en")} via card transfer or bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. Details are on the <Link href="/stars">Stars page</Link>.</p>
      <p>Both routes are explained step by step in <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">how to send Telegram Gifts</Link>. If the recipient has no username, see <Link href="/blog/telegram-id-orqali-sovga-yuborish">sending a gift by Telegram ID</Link>.</p>
      <h2 id="durov-sovgangizni-oldi-javob-uchun">“Durov got your gift, pay to get a reply” — can you trust that message?</h2>
      <p>No. Scammers are always active around famous names, and these messages multiply on days when Durov is in the news. Gifts are sent inside Telegram or through a bot. Nothing in that process requires you to pay a stranger upfront.</p>
      <p>Signs of a suspicious message:</p>
      <ul>
        <li>the sender’s username looks like the real account but differs by one letter or character;</li>
        <li>you’re asked to pay to “unlock gift acceptance”, “get a reply” or “have a private chat”;</li>
        <li>there’s pressure like “today only” or “10 minutes left”;</li>
        <li>you get a link to an unfamiliar site outside Telegram;</li>
        <li>you’re asked for an SMS code, 2FA password or Fragment wallet details.</li>
      </ul>
      <p>Never share this information with anyone. StarsPaymee doesn’t ask for it either: an order only needs an @username. StarsPaymee is an independent service and makes no promises on Telegram’s behalf.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/privacy", label: "Privacy settings" },
          { href: "https://core.telegram.org/constructor/globalPrivacySettings", label: "globalPrivacySettings" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If I send Durov a gift, will he reply to me?", answer: "Don’t count on it. A gift doesn’t buy a conversation or attention, and a famous account gets lots of messages and gifts every day." },
  { question: "How can I tell whether Durov has closed gifts?", answer: "Telegram’s documentation says restricted gift types are visible to others. In practice, open his chat and see which types show up in the gift window." },
  { question: "Do I need Telegram Premium to send Durov a gift?", answer: "Not for every gift. Premium is only required for certain gifts, and the app will ask for it when you pick one." },
  { question: "How do I spot a fake “Durov” account?", answer: "Compare the username letter by letter with a trusted source you’ve followed for a long time. A “Durov” asking for money, codes or passwords is a scam sign." },
  { question: "If Durov converts my gift into Stars, do I get anything back?", answer: "No, the Stars go to the recipient’s balance. Even they receive fewer Stars than the gift cost." },
  { question: "Can I send Durov a collectible NFT gift?", answer: "You can buy a ready-made collectible gift in soums in the NFT Market inside @StarsPaymee_bot. Check in the bot how it’s delivered to another account before buying, and keep in mind the recipient may have restricted this type." },
  { question: "Can I send a gift to Durov’s channel?", answer: "Only if gifts are enabled in that channel. If no gift options appear in the channel window, you can’t send one there." },
  { question: "I paid in the bot but the gift wasn’t delivered — what now?", answer: "First check the order status in the bot. Then contact @StarsPaymeeSupport with your order details." },
  { question: "If I send anonymously, will my gift show on Durov’s profile?", answer: "That depends on the recipient’s choice or settings. Even if it’s displayed, others won’t see your name, but the recipient will know it was you." },
  { question: "Does the same process work for other famous bloggers?", answer: "Yes, the rules are the same for every account and everything depends on the recipient’s settings. Once you’ve checked the username and whether gifts are accepted, you can send in soums via @StarsPaymee_bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["durovga sovg'a yuborish","pavel durovga sovg'a","durovga gift yuborish","telegram mashhur akkauntga sovg'a","durov sovg'a qabul qiladimi","telegram sovg'a so'mda yuborish","подарок дурову телеграм","отправить подарок дурову","как отправить подарок павлу дурову","дуров открыл подарки","подарки телеграм дуров день рождения"],
  howToSteps: [
    { name: "Username’ni tekshiring", text: "u siz kuzatib kelgan haqiqiy akkauntga tegishli ekanini ishonchli manbadan solishtiring." },
    { name: "Qabul holatini ko‘ring", text: "chatda sovg‘a tugmasi bor-yo‘qligiga qarang, cheklangan turlarni hisobga oling." },
    { name: "@StarsPaymee_bot’ni oching", text: "botga kiring va sovg‘alar bo‘limiga o‘ting." },
    { name: "Oluvchining username’ini kiriting", text: "boshqa ma’lumot kerak emas: parol, SMS kod yoki akkauntga kirish so‘ralmaydi." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi." },
    { name: "Natijani tekshiring", text: "buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Muammo bo‘lsa, botdagi buyurtma holatiga qarang va @StarsPaymeeSupport’ga yozing." },
  ],
  locales: {
    uz: {
      title: "Durovga sovg‘a yuborish mumkinmi: mashhur akkauntga gift qanday boradi",
      excerpt: "Mumkin: Durov ham sovg‘ani boshqa foydalanuvchilar kabi oladi, agar o‘sha gift turini maxfiylik sozlamasida taqiqlamagan bo‘lsa. Ichida tekshiruv belgilari, sovg‘a taqdiri va so‘mda yuborish qadamlari.",
      metaTitle: "Durovga sovg‘a yuborish mumkinmi",
      metaDescription: "Mumkin: Durov ham sovg‘ani boshqa foydalanuvchilar kabi oladi, agar o‘sha gift turini maxfiylik sozlamasida taqiqlamagan bo‘lsa.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Можно ли отправить подарок Дурову в Telegram и как он доходит",
      excerpt: "Можно: Дуров получает подарки так же, как любой пользователь, если не запретил этот тип подарков в настройках конфиденциальности. Внутри — как проверить, что будет с подарком и как отправить его за сумы.",
      metaTitle: "Можно ли отправить подарок Дурову в Telegram",
      metaDescription: "Можно: Дуров получает подарки так же, как любой пользователь, если не запретил этот тип подарков в настройках конфиденциальности.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can You Send Pavel Durov a Telegram Gift? How Gifts Reach Famous Accounts",
      excerpt: "Yes, Durov receives gifts like any other user unless he has blocked that gift type in his privacy settings. This guide covers what to check first, what happens to the gift, and how to send it paying in soums.",
      metaTitle: "Can You Send Pavel Durov a Telegram Gift? How Gifts Reach",
      metaDescription: "Yes, Durov receives gifts like any other user unless he has blocked that gift type in his privacy settings.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
