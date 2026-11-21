import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "bepul-telegram-va-premium-farqi";

/**
 * Bepul Telegram va Premium farqi: nima doim bepul, nima faqat obunada?
 *
 * Avtoblogyoz yasagan maqola (2026-11-21): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Premium’siz Telegram foydalanuvchisi «Premium bo‘lmasa nima ishlaydi» yoki «bepul Telegram va Premium farqi» deb qidiradi: qaysi funksiyalar doim bepul qolishini, qaysilari faqat obunada ekanini va Premium’li do‘stlari bilan yozishishda cheklov bor-yo‘qligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-21):
 *   https://telegram.org/faq_premium
 *   https://telegram.org/blog/700-million-and-premium
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
  return <p>Telegram obunasiz ham to‘liq ishlaydi. Rasmiy FAQ’ga ko‘ra, Premium paydo bo‘lishidan oldin bor bo‘lgan hamma funksiya bepul qoladi: bulut xotirasi, katta guruhlar, qo‘ng‘iroqlar, bir nechta akkaunt. Premium bularning ustiga kengaytirilgan limitlar, 4 GB fayl yuborish, tezroq yuklab olish va ifoda vositalarini qo‘shadi. Premium’li do‘stlar bilan yozishishda cheklov yo‘q.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#premiumsiz-telegram-toliq-ishlaydimi-yoki", label: "Premium’siz Telegram to‘liq ishlaydimi yoki «yarim Telegram»mi?" },
          { href: "#obunasiz-qaysi-funksiyalar-doim-bepul", label: "Obunasiz qaysi funksiyalar doim bepul qoladi?" },
          { href: "#faqat-premiumda-nima-bor-funksiyalar", label: "Faqat Premium’da nima bor: funksiyalar jadvali" },
          { href: "#ikki-baravar-limitlar-ishga-tushirilganda", label: "Ikki baravar limitlar: ishga tushirilganda qanday raqamlar e’lon qilingan?" },
          { href: "#premiumli-dostim-bilan-yozishsam-men", label: "Premium’li do‘stim bilan yozishsam, men nimani ko‘raman?" },
          { href: "#premium-foydalanuvchi-menga-yozishni-cheklay", label: "Premium foydalanuvchi menga yozishni cheklay oladimi?" },
          { href: "#premium-reklamani-butunlay-ochiradimi", label: "Premium reklamani butunlay o‘chiradimi?" },
          { href: "#premium-tugasa-bepul-versiyaga-qanday", label: "Premium tugasa, bepul versiyaga qanday qaytiladi?" },
          { href: "#menga-premium-kerakmi-yoki-bepul", label: "Menga Premium kerakmi yoki bepul versiya yetadimi?" },
        ]}
      />
      <h2 id="premiumsiz-telegram-toliq-ishlaydimi-yoki">Premium’siz Telegram to‘liq ishlaydimi yoki «yarim Telegram»mi?</h2>
      <p>To‘liq ishlaydi. Telegram’ning <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">Premium bo‘yicha FAQ sahifasi</a>da aniq yozilgan: Premium joriy qilinishidan oldin mavjud bo‘lgan barcha funksiyalardan bepul foydalanish mumkin. 2022-yilda Premium ishga tushirilganda chiqqan <a href={"https://telegram.org/blog/700-million-and-premium"} target="_blank" rel="noopener noreferrer">blog postida</a> ham shunday va’da bor: foydalanuvchilar deyarli o‘n yil davomida o‘rganib qolgan va tayanadigan funksiyalar bepul qoladi.</p>
      <p>Yangiliklar ham faqat obunachilar uchun emas. FAQ’ga ko‘ra, obuna bo‘lmaganlar ham ko‘plab yangi funksiyalar olishda davom etadi.</p>
      <p>Premium’ni alohida messenjer deb emas, ustiga qo‘yiladigan qatlam deb tushunish osonroq. Masalan, siz har kuni oila guruhida yozishasiz, ish kanallarini o‘qiysiz, onangizga video qo‘ng‘iroq qilasiz. Bularning birortasi ham obunaga bog‘liq emas. Premium limitlar yetmay qolganda yoki qo‘shimcha qulaylik kerak bo‘lganda seziladi.</p>
      <h2 id="obunasiz-qaysi-funksiyalar-doim-bepul">Obunasiz qaysi funksiyalar doim bepul qoladi?</h2>
      <p>FAQ bepul qoladigan narsalarni misol tariqasida sanab o‘tadi. Har biri kundalik hayotda nimani anglatadi:</p>
      <ul>
        <li><b>Cheksiz bulut xotirasi.</b> Chat tarixi, rasm va fayllar Telegram bulutida turadi. Telefonda keshni tozalasangiz ham yozishmalar yo‘qolmaydi, kerakli faylni qayta ochasiz.</li>
        <li><b>Katta guruh va kanallar.</b> Kanal ochish, guruh yuritish va obunachi to‘plash obunasiz ham mumkin.</li>
        <li><b>Ovozli va video qo‘ng‘iroqlar.</b> Qo‘ng‘iroq qilish uchun obuna kerak emas.</li>
        <li><b>Bir nechta qurilma va akkaunt.</b> Bitta akkauntga telefon va kompyuterdan birga kirasiz, bitta ilovada bir nechta akkaunt ochasiz.</li>
        <li><b>O‘n minglab stikerlar.</b> Oddiy stiker to‘plamlarini hamma qo‘shadi va yuboradi.</li>
      </ul>
      <Notice label={"Muhim"}>Oddiy foydalanuvchi uchun fayl hajmining aniq chegarasi bu maqolada tasdiqlanmagan. Katta fayl yuborishdan oldin ilovaning o‘zida tekshirib ko‘ring.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "premium", months: 3 }} />
      <h2 id="faqat-premiumda-nima-bor-funksiyalar">Faqat Premium’da nima bor: funksiyalar jadvali</h2>
      <p>Quyidagi jadvalda funksiyalar FAQ’dagi rasmiy nomi bilan berilgan. Oxirgi ustunda obunasiz akkauntda nima bo‘lishi ko‘rsatilgan.</p>
      <CompareTable
        headers={["Guruh", "Funksiya (FAQ’dagi nomi)", "Premium’siz holat"]}
        rows={[
          ["Limitlar", "Doubled Limits — ikki baravar limitlar", "Oddiy limitlar amal qiladi"],
          ["Fayllar", "4 GB File Uploads — 4 GB fayl yuborish", "Bunday faylni yubora olmaysiz, lekin yuklab olasiz"],
          ["Tezlik", "Faster Download Speed — tezroq yuklab olish", "Oddiy tezlik"],
          ["Ovoz va matn", "Voice-to-Text Conversion, Voice-to-Text for Video Messages", "Ovozli va video xabarni tinglab yoki ko‘rib chiqasiz"],
          ["Tarjima", "Real-time Chat and Channel Translation", "Obunada"],
          ["Ifoda", "Premium Stickers, Unique Reactions", "Animatsiyani ko‘rasiz, qo‘yilgan reaksiyani bosasiz"],
          ["Profil", "Emoji Statuses, Animated Profile Pictures", "Obunada"],
          ["Boshqaruv", "Advanced Chat Management, Voice Message Privacy Settings", "Obunada"],
          ["Ko‘rinish", "Profile Badges, Premium App Icons", "Nishon va maxsus ikonkalar yo‘q"],
        ]}
      />
      <p>Tezlik haqida bir aniqlik. FAQ’ga ko‘ra, obuna <b>Telegram tomonidagi</b> media yuklab olish tezligi cheklovlarini olib tashlaydi, blogda esa obunachilar fayllarni eng yuqori tezlikda yuklab olishi aytilgan. Ya’ni internetingiz sekin bo‘lsa, Premium uni tezlashtirmaydi.</p>
      <p>Premium nishoni FAQ’ga ko‘ra hozircha barcha obunachilar ismi yonida ko‘rinadi. Shu sababli suhbatdoshingizda Premium bor-yo‘qligini ko‘pincha ismi yonidagi belgidan bilasiz.</p>
      <p>Tarjima, Advanced Chat Management, Voice Message Privacy Settings va ikki baravar limitlar uchun FAQ’da faqat sarlavha bor, batafsil izoh topilmadi. Ular aynan qanday ishlashini ilovada sinab ko‘ring. Kam e’tibor beriladigan imkoniyatlar haqida: <Link href="/blog/telegram-premium-yashirin-funksiyalari">Premium’ning yashirin funksiyalari</Link>.</p>
      <h2 id="ikki-baravar-limitlar-ishga-tushirilganda">Ikki baravar limitlar: ishga tushirilganda qanday raqamlar e’lon qilingan?</h2>
      <p>Aniq raqamlar FAQ’da emas, 2022-yilgi blog postida keltirilgan. Shuning uchun quyidagilarni joriy limit deb emas, <b>e’lon qilingan paytdagi</b> raqam deb qabul qiling: ular keyin o‘zgargan bo‘lishi mumkin.</p>
      <CompareTable
        headers={["Nima", "Premium’da (2022-yilda e’lon qilingan)", "Premium’siz"]}
        rows={[
          ["Kanallarga a’zolik", "1 000 tagacha", "Ilovada tekshiring"],
          ["Chat papkalari", "20 tagacha", "Premium tugaganda birinchi 10 tasi ishlaydi"],
          ["Bitta papkadagi chatlar", "200 tagacha", "Ilovada tekshiring"],
          ["Asosiy ro‘yxatdagi pinlar", "10 ta", "Premium tugaganda birinchi 5 tasi qoladi"],
          ["Ilovadagi akkauntlar", "To‘rtinchi akkaunt qo‘shish", "Ilovada tekshiring"],
          ["Sevimli stikerlar", "10 tagacha", "Ilovada tekshiring"],
          ["Sevimli GIF", "400 tagacha", "Premium tugaganda 200 tadan keyingilari yashiriladi"],
          ["Ommaviy t.me havolalar", "20 tagacha", "Ilovada tekshiring"],
        ]}
      />
      <p>«Premium’siz» ustunidagi raqamlar FAQ’ning obuna tugashi haqidagi bo‘limidan olingan. Qolgan bepul limitlar bu maqolada tasdiqlanmagan, ularni ilovaning o‘zida ko‘rgan ma’qul.</p>
      <p>Bu jadval kimga kerak? Agar 15 ta papka yoki 8 ta pin ishlatayotgan bo‘lsangiz, limitlar farqini darhol sezasiz. Uchta chatda yozishib, ikkita kanal o‘qiydigan odam esa bu chegaralarga deyarli yetmaydi.</p>
      <h2 id="premiumli-dostim-bilan-yozishsam-men">Premium’li do‘stim bilan yozishsam, men nimani ko‘raman?</h2>
      <p>Blogda ochiq yozilgan: obuna bo‘lmaganlar ham Premium’ning ayrim afzalliklaridan bahramand bo‘ladi. FAQ ularni aniq sanaydi:</p>
      <ul>
        <li><b>4 GB fayllarni yuklab olasiz.</b> Premium obunachi yuklagan katta fayllarni istalgan kishi yuklab ola oladi. Blog ham bu juda katta hujjatlarni barcha Telegram foydalanuvchilari yuklab olishini tasdiqlaydi.</li>
        <li><b>Premium stikerlar animatsiyasini ko‘rasiz.</b> Do‘stingiz yuborgan Premium stiker sizda ham harakatlanadi.</li>
        <li><b>Noyob reaksiyani bosasiz.</b> Premium obunachi postga qo‘ygan noyob reaksiya ustiga bosib, uning sonini oshira olasiz. FAQ aynan «allaqachon qo‘yilgan» reaksiya haqida gapiradi, ya’ni yangi noyob reaksiyani o‘zingiz tanlab qo‘ya olmaysiz.</li>
      </ul>
      <p>Amaliy misol: do‘stingiz oilaviy guruhga to‘y videosining 3 GB’lik to‘liq nusxasini tashladi. Siz uni obunasiz ham yuklab olasiz. Faqat Premium’dagi tezlik afzalligi sizda yo‘q, shuning uchun katta fayl ko‘proq vaqt olishi mumkin. Telefonda bo‘sh joy yetarliligini oldindan tekshiring va yuklab olishni Wi-Fi’da boshlang. Ovozli xabarlar esa siz uchun matnga aylanmaydi, ularni tinglab chiqasiz.</p>
      <h2 id="premium-foydalanuvchi-menga-yozishni-cheklay">Premium foydalanuvchi menga yozishni cheklay oladimi?</h2>
      <p>Umumiy qoida FAQ’da aniq: Premium va bepul foydalanuvchilar o‘rtasida muloqot cheklovi yo‘q. Siz Premium’li odamga yozasiz, u sizga javob beradi, guruhda birga gaplashasiz.</p>
      <p>Bitta istisno bor. Premium obunachi kim u bilan <b>chat boshlay olishini</b> cheklay oladi. Lekin bu sozlama ikki holatda sizga ta’sir qilmaydi:</p>
      <ul>
        <li>siz uning kontaktlari orasida bo‘lsangiz;</li>
        <li>u sizga birinchi bo‘lib yozgan bo‘lsa.</li>
      </ul>
      <Notice label={"Muhim"}>Notanish Premium foydalanuvchiga yoza olmayapsizmi? Bu albatta bloklash degani emas, uning maxfiylik sozlamasi bo‘lishi mumkin. Umumiy tanish orqali undan sizga birinchi yozishini yoki sizni kontaktga qo‘shishini so‘rang.</Notice>
      <h2 id="premium-reklamani-butunlay-ochiradimi">Premium reklamani butunlay o‘chiradimi?</h2>
      <p>Yo‘q, faqat bir turini o‘chiradi. FAQ’ga ko‘ra, Telegram homiylik xabarlarini obunachisi ko‘p bo‘lgan ayrim katta ommaviy kanallarda ko‘rsatishi mumkin. Premium obunachilarida bu xabarlar yashiriladi.</p>
      <p>Kanal adminlari o‘zi joylagan reklama postlari esa boshqa masala. FAQ ularni Telegram nazoratidan tashqarida deydi va bunday postlar Premium’da ham ko‘rinishini yozadi. Masalan, yangiliklar kanalida «homiy» belgisi bilan chiqqan blok yo‘qoladi, lekin admin oddiy post qilib joylagan do‘kon reklamasi joyida qoladi.</p>
      <p>Homiylik xabari kanal necha obunachiga yetgandan keyin chiqishi rasmiy manbada aytilmagan. Reklamani kamaytirishning boshqa yo‘llari: <Link href="/blog/telegramda-reklamani-ochirish">Telegram’da reklamani o‘chirish</Link>.</p>
      <h2 id="premium-tugasa-bepul-versiyaga-qanday">Premium tugasa, bepul versiyaga qanday qaytiladi?</h2>
      <p>Obuna to‘xtaganda ham joriy to‘lov davri oxirigacha barcha Premium funksiyalari ishlab turadi. Keyin akkaunt bepul holatga qaytadi, bepul funksiyalar esa obunadan oldin qanday bo‘lsa, shundayligicha qoladi.</p>
      <CompareTable
        headers={["Nima", "Premium tugagandan keyin"]}
        rows={[
          ["Pin qilingan chatlar", "Birinchi 5 tasi qoladi, qolganlari pindan olinadi"],
          ["Papkalar", "Birinchi 10 tasi ishlaydi, qolganlari qulflanadi"],
          ["Sevimli GIF", "200 tadan keyingilari yashiriladi"],
          ["Bio", "Birinchi 70 belgisi ko‘rinadi, qolgani qayta obunagacha yashiriladi"],
          ["Username’lar", "Yaratilganlari saqlanadi, yangi ommaviy username yaratib bo‘lmaydi"],
          ["Yuklab olish", "Oddiy tezlikda"],
          ["Premium nishoni", "Yo‘qoladi"],
        ]}
      />
      <p>E’tibor bering: FAQ bu yerda «o‘chiriladi» emas, «yashiriladi» va «qulflanadi» deydi. Bio haqida esa qolgan qismi qayta obuna bo‘lguncha yashirilishi to‘g‘ridan-to‘g‘ri yozilgan. Muhim chatlarni obuna tugashidan oldin birinchi 5 ta pin qatoriga, kerakli papkalarni esa birinchi 10 tasi qatoriga surib qo‘ysangiz, keyin hech narsa izlab yurmaysiz. Batafsil: <Link href="/blog/telegram-premium-tugasa-nima-boladi">Premium tugasa nima bo‘ladi</Link>.</p>
      <h2 id="menga-premium-kerakmi-yoki-bepul">Menga Premium kerakmi yoki bepul versiya yetadimi?</h2>
      <p>Qaror uchun quyidagi tartibda o‘zingizni tekshiring:</p>
      <Steps>
        <Step title={"Odatingizni yozing"}>faqat chatlarda yozishib, kanallar o‘qisangiz, bepul versiya yetarli: bu funksiyalar obunasiz qoladi.</Step>
        <Step title={"Limitlarga urilyapsizmi, tekshiring"}>papka, pin yoki kanallar soni yetmay qolsa, kengaytirilgan limitlar birinchi bo‘lib seziladi.</Step>
        <Step title={"Fayl hajmini baholang"}>4 GB fayl <b>yuborish</b> kerak bo‘lsa, obuna kerak. Faqat yuklab olsangiz, obunasiz ham bo‘ladi.</Step>
        <Step title={"Ovozli xabarlar va tillarni hisobga oling"}>ko‘p ovozli xabar oladigan yoki ko‘p tilli chatlarda o‘tiradigan odamga Voice-to-Text va tarjima qulay bo‘lishi mumkin. Avval ular sizning tilingizda qanday ishlashini sinab ko‘ring.</Step>
        <Step title={"Akkauntlar sonini sanang"}>FAQ’ga ko‘ra har bir akkauntga alohida obuna kerak. Ish va shaxsiy akkauntingiz bo‘lsa, Premium faqat ulangan akkauntda ishlaydi.</Step>
        <Step title={"Muddatni tanlang"}>StarsPaymee’da 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil, ustamasiz. 1 oylik tarif ham bor, uning narxi botda.</Step>
        <Step title={"@StarsPaymee_bot orqali oling"}>faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi va buyurtma odatda bir necha soniyada yetkaziladi.</Step>
      </Steps>
      <p>To‘lov so‘mda: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas. Bitta cheklovni yodda tuting: akkauntda Premium hali faol bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi.</p>
      <p>Chuqurroq hisob-kitob uchun <Link href="/blog/telegram-premium-arziydimi-foydalari">Premium arziydimi</Link> va <Link href="/blog/telegram-premium-kerak">Premium kimga kerak</Link> maqolalarini o‘qing. Barcha tariflar <Link href="/premium">Premium sahifasida</Link>. StarsPaymee mustaqil xizmat va Telegram nomidan ish ko‘rmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/700-million-and-premium", label: "Telegram blog: 700 Million Users and Telegram Premium" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Premium bo‘lmasa, do‘stimning Premium stikerlari animatsiyasini ko‘ramanmi?", answer: "Ha, ko‘rasiz. FAQ’ga ko‘ra Premium stiker animatsiyasi hammaga ko‘rinadi, faqat bunday stikerni o‘zingiz yubora olmaysiz." },
  { question: "Premium foydalanuvchi qo‘ygan noyob reaksiyani bosa olamanmi?", answer: "Bosa olasiz: postda allaqachon turgan noyob reaksiya ustiga bossangiz, hisobi bittaga oshadi. Yangi noyob reaksiyani ro‘yxatdan tanlab qo‘yish esa obunachilarga qoladi." },
  { question: "Premium do‘stim yuborgan 4 GB videoni yuklab olsam bo‘ladimi?", answer: "Bo‘ladi, Telegram bunday katta fayllarni barcha foydalanuvchilarga ochadi. Faqat obunasiz yuklab olish tezligi oddiy bo‘ladi." },
  { question: "Premium foydalanuvchiga nega yoza olmayapman?", answer: "Ehtimol, u o‘ziga kim chat boshlay olishini sozlamada cheklagan. Siz uning kontaktida bo‘lsangiz yoki u sizga avval yozgan bo‘lsa, bu cheklov ishlamaydi." },
  { question: "Telegram bir kun kelib bepul funksiyalarni pullik qilib qo‘yadimi?", answer: "Rasmiy FAQ va 2022-yilgi blog Premium’dan oldin bor bo‘lgan funksiyalar bepul qolishini va’da qiladi. Bulut, guruhlar, qo‘ng‘iroqlar va bir nechta akkaunt shu ro‘yxatga kiradi." },
  { question: "Premium olsam, kanallardagi barcha reklama yo‘qoladimi?", answer: "Faqat Telegram’ning o‘zi katta ommaviy kanallarda ko‘rsatadigan homiylik xabarlari yashiriladi. Admin o‘zi joylagan reklama postlari Premium’da ham ko‘rinadi." },
  { question: "Ikki akkauntim bor — bitta Premium ikkalasiga ham ishlaydimi?", answer: "Yo‘q, Telegram har bir akkaunt uchun alohida obuna talab qiladi. Ikkinchi akkauntga ham Premium kerak bo‘lsa, uning @username’i uchun alohida buyurtma qilinadi." },
  { question: "Premium tugasa, papka va pinlarim o‘chib ketadimi?", answer: "O‘chmaydi: birinchi 10 ta papka va 5 ta pin ishlab turadi, ortiqchalari qulflanadi yoki pindan olinadi. Bio’ning yashirilgan qismi esa FAQ’ga ko‘ra qayta obuna bo‘lganda yana ko‘rinadi." },
  { question: "Bepul foydalanuvchiga yangi funksiyalar qo‘shiladimi?", answer: "Ha, FAQ’da obuna bo‘lmaganlar ham ko‘plab yangi funksiyalar olishda davom etishi yozilgan. Hammasi Premium’ga tushavermaydi." },
  { question: "Premium’ni so‘mda olish uchun parol yoki SMS kod kerakmi?", answer: "Kerak emas. @StarsPaymee_bot faqat @username so‘raydi va Premium’ni Telegram’ning sovg‘a mexanizmi orqali ulaydi, to‘lovni esa Click, Payme, Uzum, Paynet yoki UzCard/HUMO bilan qilasiz." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Telegram полностью работает без подписки. По официальному FAQ всё, что было в Telegram до появления Premium, осталось бесплатным: облачное хранилище, большие группы, звонки, несколько аккаунтов. Premium добавляет к этому расширенные лимиты, отправку файлов до 4 ГБ, более быструю загрузку и новые способы самовыражения. Переписываться с друзьями, у которых есть Premium, можно без ограничений.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#premiumsiz-telegram-toliq-ishlaydimi-yoki", label: "Telegram без Premium — полноценный мессенджер или «урезанная версия»?" },
          { href: "#obunasiz-qaysi-funksiyalar-doim-bepul", label: "Какие функции остаются бесплатными без подписки?" },
          { href: "#faqat-premiumda-nima-bor-funksiyalar", label: "Что есть только в Premium: таблица функций" },
          { href: "#ikki-baravar-limitlar-ishga-tushirilganda", label: "Удвоенные лимиты: какие цифры объявили при запуске?" },
          { href: "#premiumli-dostim-bilan-yozishsam-men", label: "Что я увижу, переписываясь с другом, у которого есть Premium?" },
          { href: "#premium-foydalanuvchi-menga-yozishni-cheklay", label: "Может ли пользователь Premium запретить мне писать?" },
          { href: "#premium-reklamani-butunlay-ochiradimi", label: "Убирает ли Premium всю рекламу?" },
          { href: "#premium-tugasa-bepul-versiyaga-qanday", label: "Как аккаунт возвращается к бесплатной версии, когда Premium заканчивается?" },
          { href: "#menga-premium-kerakmi-yoki-bepul", label: "Нужен ли мне Premium или хватит бесплатной версии?" },
        ]}
      />
      <h2 id="premiumsiz-telegram-toliq-ishlaydimi-yoki">Telegram без Premium — полноценный мессенджер или «урезанная версия»?</h2>
      <p>Полноценный. На <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">странице FAQ о Premium</a> Telegram прямо пишет, что все функции, которые были до появления Premium, остаются бесплатными. Это же обещание есть в <a href={"https://telegram.org/blog/700-million-and-premium"} target="_blank" rel="noopener noreferrer">блог-посте</a> 2022 года о запуске Premium: всё, к чему пользователи привыкли почти за десять лет, останется бесплатным.</p>
      <p>Новые функции получают не только подписчики. По FAQ пользователи без подписки тоже будут и дальше получать много новых возможностей.</p>
      <p>Premium проще считать надстройкой над обычным Telegram, а не отдельным мессенджером. Допустим, вы каждый день пишете в семейный чат, читаете рабочие каналы и созваниваетесь с мамой по видео. Подписка не нужна ни для чего из этого. Разницу замечаешь, когда перестаёт хватать лимитов или хочется дополнительных удобств.</p>
      <h2 id="obunasiz-qaysi-funksiyalar-doim-bepul">Какие функции остаются бесплатными без подписки?</h2>
      <p>В FAQ бесплатные функции перечислены как примеры. Вот что каждая из них значит на практике:</p>
      <ul>
        <li><b>Безлимитное облачное хранилище.</b> История чатов, фото и файлы хранятся в облаке Telegram. Если очистить кэш на телефоне, переписка останется, а нужный файл можно открыть снова.</li>
        <li><b>Большие группы и каналы.</b> Создавать канал, вести группу и набирать подписчиков можно без подписки.</li>
        <li><b>Голосовые и видеозвонки.</b> Звонить можно без подписки.</li>
        <li><b>Несколько устройств и аккаунтов.</b> В один аккаунт можно заходить с телефона и компьютера одновременно, а в одном приложении можно держать несколько аккаунтов.</li>
        <li><b>Десятки тысяч стикеров.</b> Обычные стикерпаки может добавлять и отправлять каждый.</li>
      </ul>
      <Notice label={"Важно"}>Точный лимит на размер файла для обычного пользователя в этой статье не подтверждён. Прежде чем отправлять большой файл, проверьте лимит в самом приложении.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "premium", months: 3 }} />
      <h2 id="faqat-premiumda-nima-bor-funksiyalar">Что есть только в Premium: таблица функций</h2>
      <p>В таблице функции подписаны так, как они названы в FAQ. В последнем столбце — как обстоят дела в аккаунте без подписки.</p>
      <CompareTable
        headers={["Группа", "Функция (название в FAQ)", "Без Premium"]}
        rows={[
          ["Лимиты", "Doubled Limits — удвоенные лимиты", "Действуют обычные лимиты"],
          ["Файлы", "4 GB File Uploads — отправка файлов до 4 ГБ", "Отправить такой файл нельзя, но скачать можно"],
          ["Скорость", "Faster Download Speed — ускоренная загрузка", "Обычная скорость"],
          ["Голос и текст", "Voice-to-Text Conversion, Voice-to-Text for Video Messages", "Голосовые и видеосообщения нужно слушать или смотреть"],
          ["Перевод", "Real-time Chat and Channel Translation", "Только по подписке"],
          ["Самовыражение", "Premium Stickers, Unique Reactions", "Анимации видны, на поставленную реакцию можно нажать"],
          ["Профиль", "Emoji Statuses, Animated Profile Pictures", "Только по подписке"],
          ["Управление", "Advanced Chat Management, Voice Message Privacy Settings", "Только по подписке"],
          ["Оформление", "Profile Badges, Premium App Icons", "Нет значка и особых иконок"],
        ]}
      />
      <p>Про скорость есть важная оговорка. По FAQ подписка снимает ограничения скорости загрузки медиа <b>на стороне Telegram</b>, а в блоге сказано, что подписчики скачивают файлы на максимально возможной скорости. То есть медленный интернет Premium не ускорит.</p>
      <p>Значок Premium, по FAQ, сейчас показывается рядом с именем каждого подписчика. Так что есть ли у собеседника Premium, обычно видно по значку возле имени.</p>
      <p>Про перевод, Advanced Chat Management, Voice Message Privacy Settings и удвоенные лимиты в FAQ есть только заголовки, подробных описаний нет. Как именно они работают, лучше проверить в приложении. О возможностях, которые часто пропускают, — в статье <Link href="/blog/telegram-premium-yashirin-funksiyalari">о скрытых функциях Premium</Link>.</p>
      <h2 id="ikki-baravar-limitlar-ishga-tushirilganda">Удвоенные лимиты: какие цифры объявили при запуске?</h2>
      <p>Точных цифр в FAQ нет, они приведены в блог-посте 2022 года. Поэтому цифры ниже — это лимиты <b>на момент запуска</b>, а не текущие: с тех пор они могли измениться.</p>
      <CompareTable
        headers={["Что", "В Premium (объявлено в 2022 году)", "Без Premium"]}
        rows={[
          ["Подписки на каналы", "До 1 000", "Проверьте в приложении"],
          ["Папки с чатами", "До 20", "После окончания Premium работают первые 10"],
          ["Чатов в одной папке", "До 200", "Проверьте в приложении"],
          ["Закреплённые чаты в основном списке", "10", "После окончания Premium остаются первые 5"],
          ["Аккаунты в приложении", "Можно добавить четвёртый", "Проверьте в приложении"],
          ["Избранные стикеры", "До 10", "Проверьте в приложении"],
          ["Избранные GIF", "До 400", "После окончания Premium всё сверх 200 скрывается"],
          ["Публичные ссылки t.me", "До 20", "Проверьте в приложении"],
        ]}
      />
      <p>Цифры в столбце «Без Premium» взяты из раздела FAQ об окончании подписки. Остальные бесплатные лимиты в этой статье не подтверждены — их стоит посмотреть в самом приложении.</p>
      <p>Кому пригодится эта таблица? Если у вас 15 папок или 8 закреплённых чатов, разницу в лимитах вы почувствуете сразу. Тот, кто переписывается в трёх чатах и читает два канала, до этих границ, скорее всего, не дойдёт.</p>
      <h2 id="premiumli-dostim-bilan-yozishsam-men">Что я увижу, переписываясь с другом, у которого есть Premium?</h2>
      <p>В блоге прямо сказано: пользователи без подписки тоже получат часть преимуществ Premium. В FAQ они перечислены:</p>
      <ul>
        <li><b>Вы скачаете файлы по 4 ГБ.</b> Большие файлы, которые загрузил подписчик Premium, может скачать кто угодно. В блоге это тоже подтверждают: такие огромные документы могут скачивать все пользователи Telegram.</li>
        <li><b>Вы увидите анимацию Premium-стикеров.</b> Стикер, который прислал друг, будет анимированным и у вас.</li>
        <li><b>Вы сможете нажать на эксклюзивную реакцию.</b> Если подписчик Premium поставил её под постом, нажатие увеличит её счётчик. В FAQ речь именно об «уже поставленных» реакциях: выбрать и поставить новую эксклюзивную реакцию самостоятельно не получится.</li>
      </ul>
      <p>Пример из жизни: друг выложил в семейную группу полную запись свадьбы на 3 ГБ. Вы скачаете её и без подписки. Только ускоренной загрузки, как в Premium, у вас не будет, поэтому большой файл может качаться дольше. Заранее проверьте, хватит ли места на телефоне, и качайте по Wi-Fi. Голосовые сообщения при этом в текст не превратятся — их придётся слушать.</p>
      <h2 id="premium-foydalanuvchi-menga-yozishni-cheklay">Может ли пользователь Premium запретить мне писать?</h2>
      <p>Общее правило в FAQ однозначное: ограничений на общение между пользователями с Premium и без него нет. Вы пишете человеку с подпиской, он вам отвечает, вы вместе общаетесь в группах.</p>
      <p>Есть одно исключение. Подписчик Premium может ограничить, кто вправе <b>начать с ним чат</b>. Но в двух случаях эта настройка на вас не действует:</p>
      <ul>
        <li>вы есть у него в контактах;</li>
        <li>он написал вам первым.</li>
      </ul>
      <Notice label={"Важно"}>Не получается написать незнакомому пользователю с Premium? Это не обязательно блокировка — возможно, так настроена его приватность. Попросите общего знакомого передать, чтобы он написал вам первым или добавил вас в контакты.</Notice>
      <h2 id="premium-reklamani-butunlay-ochiradimi">Убирает ли Premium всю рекламу?</h2>
      <p>Нет, только один её вид. По FAQ Telegram может показывать спонсорские сообщения в некоторых крупных публичных каналах с большим числом подписчиков. У подписчиков Premium эти сообщения скрыты.</p>
      <p>Рекламные посты, которые публикуют сами админы канала, — другое дело. В FAQ сказано, что Telegram их не контролирует и подписчики Premium их тоже видят. Например, блок с пометкой «спонсорское» в новостном канале исчезнет, а реклама магазина, которую админ выложил обычным постом, останется.</p>
      <p>С какого числа подписчиков в канале начинают показываться спонсорские сообщения, официальные источники не сообщают. Другие способы сократить рекламу — в статье <Link href="/blog/telegramda-reklamani-ochirish">как отключить рекламу в Telegram</Link>.</p>
      <h2 id="premium-tugasa-bepul-versiyaga-qanday">Как аккаунт возвращается к бесплатной версии, когда Premium заканчивается?</h2>
      <p>Даже если вы отменили подписку, все функции Premium работают до конца оплаченного периода. Потом аккаунт переходит на бесплатную версию, а бесплатные функции остаются в точности такими же, как были до подписки.</p>
      <CompareTable
        headers={["Что", "После окончания Premium"]}
        rows={[
          ["Закреплённые чаты", "Первые 5 остаются, остальные открепляются"],
          ["Папки", "Первые 10 работают, остальные блокируются"],
          ["Избранные GIF", "Всё сверх 200 скрывается"],
          ["Био", "Видны первые 70 символов, остальное скрыто до повторной подписки"],
          ["Юзернеймы", "Созданные сохраняются, новые публичные создать нельзя"],
          ["Загрузка", "С обычной скоростью"],
          ["Значок Premium", "Исчезает"],
        ]}
      />
      <p>Обратите внимание: FAQ здесь говорит не «удаляются», а «скрываются» и «блокируются». А про био прямо сказано, что остальная часть скрыта до повторной подписки. Если до конца подписки поднять важные чаты в первые 5 закреплённых, а нужные папки — в первые 10, потом ничего не придётся искать. Подробнее — в статье <Link href="/blog/telegram-premium-tugasa-nima-boladi">что будет, когда закончится Premium</Link>.</p>
      <h2 id="menga-premium-kerakmi-yoki-bepul">Нужен ли мне Premium или хватит бесплатной версии?</h2>
      <p>Чтобы решить, пройдите по шагам:</p>
      <Steps>
        <Step title={"Опишите свои привычки"}>если вы только переписываетесь в чатах и читаете каналы, бесплатной версии хватит: всё это остаётся без подписки.</Step>
        <Step title={"Проверьте, упираетесь ли вы в лимиты"}>когда не хватает папок, закреплённых чатов или подписок на каналы, расширенные лимиты заметнее всего.</Step>
        <Step title={"Оцените размер файлов"}>если нужно <b>отправлять</b> файлы до 4 ГБ, без подписки не обойтись. Если вы их только скачиваете, хватит и бесплатной версии.</Step>
        <Step title={"Учтите голосовые и языки"}>тем, кто получает много голосовых или сидит в многоязычных чатах, могут пригодиться Voice-to-Text и перевод. Сначала проверьте, как они работают с вашим языком.</Step>
        <Step title={"Посчитайте аккаунты"}>по FAQ каждому аккаунту нужна своя подписка. Если у вас рабочий и личный аккаунт, Premium будет работать только на том, где он подключён.</Step>
        <Step title={"Выберите срок"}>в StarsPaymee 3 месяца стоят {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Цена одинаковая при любом способе оплаты, без наценки. Есть и тариф на 1 месяц, его цена — в боте.</Step>
        <Step title={"Оформите через @StarsPaymee_bot"}>нужен только @username, пароль и SMS-код бот не спрашивает. Premium подключается через механизм подарков Telegram, заказ обычно приходит за несколько секунд.</Step>
      </Steps>
      <p>Оплата в сумах: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота. Международная карта, криптокошелёк и VPN не нужны. Одно ограничение: пока на аккаунте действует Premium, бот не откроет новый заказ — новый срок к действующей подписке не добавляется.</p>
      <p>Если хотите посчитать подробнее, прочитайте статьи <Link href="/blog/telegram-premium-arziydimi-foydalari">стоит ли брать Premium</Link> и <Link href="/blog/telegram-premium-kerak">кому нужен Premium</Link>. Все тарифы — на <Link href="/premium">странице Premium</Link>. StarsPaymee — независимый сервис и не действует от имени Telegram.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/700-million-and-premium", label: "Telegram blog: 700 Million Users and Telegram Premium" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Увижу ли я анимацию Premium-стикеров друга без подписки?", answer: "Да. По FAQ анимация Premium-стикеров видна всем, а вот отправлять такие стикеры без подписки нельзя." },
  { question: "Можно ли нажать на эксклюзивную реакцию, которую поставил пользователь Premium?", answer: "Можно: если такая реакция уже стоит под постом, нажатие увеличит её счётчик на один. Выбрать новую эксклюзивную реакцию из списка могут только подписчики." },
  { question: "Смогу ли я скачать видео на 4 ГБ, которое прислал друг с Premium?", answer: "Сможете: такие большие файлы Telegram открывает для всех пользователей. Просто без подписки они скачиваются с обычной скоростью." },
  { question: "Почему я не могу написать пользователю с Premium?", answer: "Скорее всего, он ограничил в настройках, кто может начинать с ним чат. Если вы есть у него в контактах или он писал вам первым, это ограничение не действует." },
  { question: "Не сделает ли Telegram когда-нибудь бесплатные функции платными?", answer: "Официальный FAQ и блог 2022 года обещают, что функции, существовавшие до Premium, останутся бесплатными. Среди них облако, группы, звонки и несколько аккаунтов." },
  { question: "Если взять Premium, исчезнет ли вся реклама в каналах?", answer: "Скроются только спонсорские сообщения, которые Telegram сам показывает в крупных публичных каналах. Рекламные посты, опубликованные админом, подписчики Premium тоже видят." },
  { question: "У меня два аккаунта — один Premium будет работать на обоих?", answer: "Нет, Telegram требует отдельную подписку для каждого аккаунта. Если Premium нужен и на втором, оформите отдельный заказ на его @username." },
  { question: "Удалятся ли мои папки и закреплённые чаты, когда закончится Premium?", answer: "Нет: первые 10 папок и 5 закреплённых чатов продолжат работать, лишние заблокируются или открепятся. А скрытая часть био, по FAQ, снова появится после повторной подписки." },
  { question: "Добавляют ли новые функции для бесплатных пользователей?", answer: "Да, в FAQ сказано, что пользователи без подписки тоже продолжат получать много новых функций. Не всё новое уходит в Premium." },
  { question: "Нужен ли пароль или SMS-код, чтобы купить Premium за сумы?", answer: "Нет. @StarsPaymee_bot спрашивает только @username и подключает Premium через механизм подарков Telegram, а заплатить можно через Click, Payme, Uzum, Paynet или картой UzCard/HUMO." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Telegram works fully without a subscription. The official FAQ says that every feature that existed before Premium launched stays free. That includes cloud storage, large groups, calls and multiple accounts. Premium adds higher limits, 4 GB uploads, faster downloads and more ways to express yourself. You can still message Premium friends without any restrictions.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#premiumsiz-telegram-toliq-ishlaydimi-yoki", label: "Is Telegram without Premium the full app or a “lite” version?" },
          { href: "#obunasiz-qaysi-funksiyalar-doim-bepul", label: "Which features stay free without a subscription?" },
          { href: "#faqat-premiumda-nima-bor-funksiyalar", label: "What’s Premium-only: the feature table" },
          { href: "#ikki-baravar-limitlar-ishga-tushirilganda", label: "Doubled limits: what numbers were announced at launch?" },
          { href: "#premiumli-dostim-bilan-yozishsam-men", label: "What do I see when I chat with a friend who has Premium?" },
          { href: "#premium-foydalanuvchi-menga-yozishni-cheklay", label: "Can a Premium user stop me from messaging them?" },
          { href: "#premium-reklamani-butunlay-ochiradimi", label: "Does Premium remove all ads?" },
          { href: "#premium-tugasa-bepul-versiyaga-qanday", label: "What happens when Premium ends and you go back to free?" },
          { href: "#menga-premium-kerakmi-yoki-bepul", label: "Do I need Premium, or is the free version enough?" },
        ]}
      />
      <h2 id="premiumsiz-telegram-toliq-ishlaydimi-yoki">Is Telegram without Premium the full app or a “lite” version?</h2>
      <p>It’s the full app. Telegram’s <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">Premium FAQ page</a> says it plainly: every feature that existed before Premium was introduced can still be used for free. The <a href={"https://telegram.org/blog/700-million-and-premium"} target="_blank" rel="noopener noreferrer">blog post</a> from Premium’s 2022 launch makes the same promise. The features people have relied on for nearly a decade stay free.</p>
      <p>Free users keep getting new features too. According to the FAQ, people who don’t subscribe will continue to receive many new features.</p>
      <p>It helps to see Premium as an extra layer on top of the same app, not as a separate messenger. Say you chat in a family group every day, read work channels and video-call your mom. None of that depends on a subscription. You only notice Premium when you run out of room under the free limits or want some extra convenience.</p>
      <h2 id="obunasiz-qaysi-funksiyalar-doim-bepul">Which features stay free without a subscription?</h2>
      <p>The FAQ gives examples of what stays free. Here’s what each one means in daily use:</p>
      <ul>
        <li><b>Unlimited cloud storage.</b> Your chat history, photos and files live in Telegram’s cloud. If you clear the cache on your phone, your conversations are still there and you can open any file again.</li>
        <li><b>Large groups and channels.</b> You can start a channel, run a group and build an audience without paying.</li>
        <li><b>Voice and video calls.</b> Calls don’t need a subscription.</li>
        <li><b>Multiple devices and accounts.</b> You can use one account on your phone and computer at the same time, and add several accounts to one app.</li>
        <li><b>Tens of thousands of stickers.</b> Anyone can add and send regular sticker packs.</li>
      </ul>
      <Notice label={"Important"}>This article doesn’t confirm the exact file size limit for free users. Check it in the app before you try to send a very large file.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "premium", months: 3 }} />
      <h2 id="faqat-premiumda-nima-bor-funksiyalar">What’s Premium-only: the feature table</h2>
      <p>The table below uses the feature names from the FAQ. The last column shows what you get on an account without a subscription.</p>
      <CompareTable
        headers={["Group", "Feature (FAQ name)", "Without Premium"]}
        rows={[
          ["Limits", "Doubled Limits", "Standard limits apply"],
          ["Files", "4 GB File Uploads", "You can’t send files this large, but you can download them"],
          ["Speed", "Faster Download Speed", "Standard speed"],
          ["Voice and text", "Voice-to-Text Conversion, Voice-to-Text for Video Messages", "You listen to or watch the message yourself"],
          ["Translation", "Real-time Chat and Channel Translation", "Subscribers only"],
          ["Expression", "Premium Stickers, Unique Reactions", "You see the animations and can tap reactions others added"],
          ["Profile", "Emoji Statuses, Animated Profile Pictures", "Subscribers only"],
          ["Management", "Advanced Chat Management, Voice Message Privacy Settings", "Subscribers only"],
          ["Appearance", "Profile Badges, Premium App Icons", "No badge or special icons"],
        ]}
      />
      <p>A quick note on speed. The FAQ says a subscription lifts media download speed limits <b>on Telegram’s side</b>. The blog says subscribers download files at the fastest possible speed. In other words, Premium won’t make a slow internet connection any faster.</p>
      <p>According to the FAQ, the Premium badge currently shows next to the names of all subscribers. So you can usually tell whether someone has Premium by the icon next to their name.</p>
      <p>For translation, Advanced Chat Management, Voice Message Privacy Settings and Doubled Limits, the FAQ only gives a heading with no detailed explanation. Try them in the app to see exactly how they work. For features people tend to overlook, see <Link href="/blog/telegram-premium-yashirin-funksiyalari">Premium’s hidden features</Link>.</p>
      <h2 id="ikki-baravar-limitlar-ishga-tushirilganda">Doubled limits: what numbers were announced at launch?</h2>
      <p>The exact numbers come from the 2022 blog post, not the FAQ. Read them as figures <b>announced at launch</b>, not as current limits, because they may have changed since.</p>
      <CompareTable
        headers={["What", "With Premium (announced in 2022)", "Without Premium"]}
        rows={[
          ["Channels you can join", "Up to 1 000", "Check in the app"],
          ["Chat folders", "Up to 20", "First 10 keep working after Premium ends"],
          ["Chats per folder", "Up to 200", "Check in the app"],
          ["Pinned chats in the main list", "10", "First 5 stay pinned after Premium ends"],
          ["Accounts in the app", "A fourth account", "Check in the app"],
          ["Favorite stickers", "Up to 10", "Check in the app"],
          ["Favorite GIFs", "Up to 400", "GIFs past 200 are hidden after Premium ends"],
          ["Public t.me links", "Up to 20", "Check in the app"],
        ]}
      />
      <p>The numbers in the “Without Premium” column come from the FAQ section on what happens when a subscription ends. This article doesn’t confirm the other free limits, so check them in the app.</p>
      <p>Who needs this table? If you use 15 folders or 8 pinned chats, you’ll feel the difference in limits right away. If you chat in three conversations and read two channels, you’ll hardly ever reach these limits.</p>
      <h2 id="premiumli-dostim-bilan-yozishsam-men">What do I see when I chat with a friend who has Premium?</h2>
      <p>The blog says it openly: non-subscribers get to enjoy some Premium benefits. The FAQ lists them:</p>
      <ul>
        <li><b>You can download 4 GB files.</b> Anyone can download large files uploaded by Premium subscribers. The blog also confirms that all Telegram users can download these extra-large documents.</li>
        <li><b>You see Premium sticker animations.</b> A Premium sticker your friend sends will animate on your screen too.</li>
        <li><b>You can tap unique reactions.</b> If a Premium subscriber adds a unique reaction to a post, you can tap it to increase the count. The FAQ specifically talks about reactions that are “already added,” so you can’t pick a new unique reaction yourself.</li>
      </ul>
      <p>A real-life example: your friend posts the full 3 GB wedding video in the family group. You can download it without a subscription. You just don’t get Premium’s speed advantage, so a big file may take longer. Make sure your phone has enough free space and start the download on Wi-Fi. Voice messages won’t turn into text for you, so you’ll have to listen to them.</p>
      <h2 id="premium-foydalanuvchi-menga-yozishni-cheklay">Can a Premium user stop me from messaging them?</h2>
      <p>The general rule in the FAQ is clear: there are no restrictions on communication between Premium and free users. You can message someone with Premium, they can reply, and you can talk in groups together.</p>
      <p>There’s one exception. A Premium subscriber can limit who is able to <b>start a chat</b> with them. But this setting doesn’t apply to you in two cases:</p>
      <ul>
        <li>you’re one of their contacts;</li>
        <li>they messaged you first.</li>
      </ul>
      <Notice label={"Important"}>Can’t message a Premium user you don’t know? That doesn’t necessarily mean they blocked you. It may be their privacy setting. Ask a mutual friend to have them message you first or add you as a contact.</Notice>
      <h2 id="premium-reklamani-butunlay-ochiradimi">Does Premium remove all ads?</h2>
      <p>No, only one type. According to the FAQ, Telegram may show sponsored messages in some large public channels with many subscribers. Premium subscribers don’t see these messages.</p>
      <p>Promotional posts that channel admins publish themselves are a different story. The FAQ says these are outside Telegram’s control and still appear for Premium users. For example, in a news channel the block marked “sponsored” disappears. But a store ad the admin posted as a regular post stays put.</p>
      <p>Official sources don’t say how many subscribers a channel needs before sponsored messages start showing. For other ways to cut down on ads, see <Link href="/blog/telegramda-reklamani-ochirish">how to turn off ads in Telegram</Link>.</p>
      <h2 id="premium-tugasa-bepul-versiyaga-qanday">What happens when Premium ends and you go back to free?</h2>
      <p>Even after you stop your subscription, all Premium features keep working until the end of the current billing period. After that, your account goes back to the free version. All free features stay exactly as they were before you subscribed.</p>
      <CompareTable
        headers={["What", "After Premium ends"]}
        rows={[
          ["Pinned chats", "First 5 stay, the rest are unpinned"],
          ["Folders", "First 10 keep working, the rest are locked"],
          ["Favorite GIFs", "Any past 200 are hidden"],
          ["Bio", "First 70 characters stay visible, the rest is hidden until you resubscribe"],
          ["Usernames", "You keep the ones you created but can’t create new public usernames"],
          ["Downloads", "Standard speed"],
          ["Premium badge", "Disappears"],
        ]}
      />
      <p>Notice the FAQ’s wording here. It says “hidden” and “locked,” not “deleted.” For the bio, it states directly that the rest stays hidden until you resubscribe. Before your subscription ends, move your most important chats into the first 5 pins and your key folders into the first 10. That way you won’t have to go looking for anything later. More details: <Link href="/blog/telegram-premium-tugasa-nima-boladi">what happens when Premium ends</Link>.</p>
      <h2 id="menga-premium-kerakmi-yoki-bepul">Do I need Premium, or is the free version enough?</h2>
      <p>Go through these checks in order:</p>
      <Steps>
        <Step title={"Look at your habits"}>If you mostly chat and read channels, the free version is enough. Those features stay free.</Step>
        <Step title={"Check whether you’re hitting limits"}>If you’re running out of folders, pins or channel slots, the higher limits are the first thing you’ll notice.</Step>
        <Step title={"Think about file sizes"}>If you need to <b>send</b> 4 GB files, you need a subscription. If you only download them, you can do that without one.</Step>
        <Step title={"Consider voice messages and languages"}>If you get lots of voice messages or sit in multilingual chats, Voice-to-Text and translation could be handy. Try them in your own language first.</Step>
        <Step title={"Count your accounts"}>The FAQ says each account needs its own subscription. If you have a work account and a personal one, Premium only works on the account it’s activated for.</Step>
        <Step title={"Pick a term"}>On StarsPaymee, 3 months is {som(premium(3), "en")}, 6 months is {som(premium(6), "en")} and 12 months is {som(premium(12), "en")}. The price is the same for every payment method, with no markup. There’s also a 1-month plan, and you can see its price in the bot.</Step>
        <Step title={"Order through @StarsPaymee_bot"}>All you need is your @username. Nobody asks for a password or SMS code. Premium is activated through Telegram’s gifting mechanism, and orders usually arrive within a few seconds.</Step>
      </Steps>
      <p>You pay in UZS through Click, Payme, Uzum, Paynet, a transfer to an UzCard/HUMO card, or your bot balance. You don’t need an international card, a crypto wallet or a VPN. Keep one rule in mind: if the account still has active Premium, the bot won’t open a new order. A new term isn’t added on top of an active subscription.</p>
      <p>To weigh the costs and benefits in more detail, read <Link href="/blog/telegram-premium-arziydimi-foydalari">is Premium worth it</Link> and <Link href="/blog/telegram-premium-kerak">who needs Premium</Link>. All plans are on the <Link href="/premium">Premium page</Link>. StarsPaymee is an independent service and doesn’t act on Telegram’s behalf.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/700-million-and-premium", label: "Telegram blog: 700 Million Users and Telegram Premium" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I see my friend’s Premium sticker animations if I don’t have Premium?", answer: "Yes, you can. The FAQ says everyone can see Premium sticker animations. You just can’t send those stickers yourself." },
  { question: "Can I tap a unique reaction that a Premium user added?", answer: "Yes. If a unique reaction is already on a post, tapping it raises the count by one. Picking a new unique reaction from the list is for subscribers only." },
  { question: "Can I download a 4 GB video my Premium friend sent?", answer: "Yes, Telegram lets all users download these extra-large files. Without a subscription, it just downloads at standard speed." },
  { question: "Why can’t I message a Premium user?", answer: "They’ve probably used a setting that limits who can start a chat with them. It doesn’t apply if you’re in their contacts or if they messaged you first." },
  { question: "Will Telegram ever start charging for free features?", answer: "The official FAQ and the 2022 blog post both promise that features from before Premium will stay free. That covers the cloud, groups, calls and multiple accounts." },
  { question: "Will Premium remove all ads from channels?", answer: "Only the sponsored messages Telegram itself shows in large public channels are hidden. Promotional posts that admins publish themselves still appear for Premium users." },
  { question: "I have two accounts. Does one Premium cover both?", answer: "No, Telegram requires a separate subscription for each account. If your second account needs Premium too, you place a separate order for its @username." },
  { question: "Will my folders and pins be deleted when Premium ends?", answer: "No. Your first 10 folders and 5 pins keep working, and the rest are locked or unpinned. According to the FAQ, the hidden part of your bio shows up again if you resubscribe." },
  { question: "Do free users still get new features?", answer: "Yes. The FAQ says people who don’t subscribe will keep getting many new features. Not everything new goes behind Premium." },
  { question: "Do I need a password or SMS code to buy Premium in UZS?", answer: "No. @StarsPaymee_bot only asks for your @username and activates Premium through Telegram’s gifting mechanism. You pay with Click, Payme, Uzum, Paynet or UzCard/HUMO." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  keywords: ["bepul telegram va premium farqi","telegram premium nima beradi","premiumsiz telegram","telegram premium bo'lmasa nima ishlaydi","telegram premium funksiyalari","telegram premium limitlari","premium foydalanuvchiga yozish","чем отличается telegram premium от обычного","telegram premium что даёт","бесплатный telegram и premium разница","telegram premium лимиты","что останется бесплатным в telegram"],
  howToSteps: [
    { name: "Odatingizni yozing", text: "faqat chatlarda yozishib, kanallar o‘qisangiz, bepul versiya yetarli: bu funksiyalar obunasiz qoladi." },
    { name: "Limitlarga urilyapsizmi, tekshiring", text: "papka, pin yoki kanallar soni yetmay qolsa, kengaytirilgan limitlar birinchi bo‘lib seziladi." },
    { name: "Fayl hajmini baholang", text: "4 GB fayl yuborish kerak bo‘lsa, obuna kerak. Faqat yuklab olsangiz, obunasiz ham bo‘ladi." },
    { name: "Ovozli xabarlar va tillarni hisobga oling", text: "ko‘p ovozli xabar oladigan yoki ko‘p tilli chatlarda o‘tiradigan odamga Voice-to-Text va tarjima qulay bo‘lishi mumkin. Avval ular sizning tilingizda qanday ishlashini sinab ko‘ring." },
    { name: "Akkauntlar sonini sanang", text: "FAQ’ga ko‘ra har bir akkauntga alohida obuna kerak. Ish va shaxsiy akkauntingiz bo‘lsa, Premium faqat ulangan akkauntda ishlaydi." },
    { name: "Muddatni tanlang", text: `StarsPaymee’da 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil, ustamasiz. 1 oylik tarif ham bor, uning narxi botda.` },
    { name: "@StarsPaymee_bot orqali oling", text: "faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi va buyurtma odatda bir necha soniyada yetkaziladi." },
  ],
  locales: {
    uz: {
      title: "Bepul Telegram va Premium farqi: nima doim bepul, nima faqat obunada?",
      excerpt: "Premium chiqishidan oldingi barcha funksiyalar bepul qoladi, obuna esa limit, 4 GB fayl va tezlik qo‘shadi. Ichida rasmiy FAQ bo‘yicha jadval, Premium’li do‘st bilan yozishish va obuna tugashi bor.",
      metaTitle: "Bepul Telegram va Premium farqi",
      metaDescription: "Premium chiqishidan oldingi barcha funksiyalar bepul qoladi, obuna esa limit, 4 GB fayl va tezlik qo‘shadi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Бесплатный Telegram и Premium: что доступно всем, а что только по подписке?",
      excerpt: "Всё, что было в Telegram до Premium, осталось бесплатным, а подписка добавляет лимиты, файлы до 4 ГБ и скорость. Внутри — таблица по официальному FAQ, переписка с другом с Premium и конец подписки.",
      metaTitle: "Бесплатный Telegram и Premium",
      metaDescription: "Всё, что было в Telegram до Premium, осталось бесплатным, а подписка добавляет лимиты, файлы до 4 ГБ и скорость.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Free Telegram vs Premium: What Stays Free and What Needs a Subscription?",
      excerpt: "Everything Telegram had before Premium stays free. A subscription adds higher limits, 4 GB uploads and faster downloads. Inside: an official-FAQ feature table, chatting with Premium friends and what happens when it ends.",
      metaTitle: "Free Telegram vs Premium: What Stays Free",
      metaDescription: "Everything Telegram had before Premium stays free. A subscription adds higher limits, 4 GB uploads and faster downloads.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
