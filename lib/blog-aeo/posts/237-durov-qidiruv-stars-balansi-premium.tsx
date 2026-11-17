import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "durov-qidiruv-stars-balansi-premium";

/**
 * «Durov qidiruvda» xabari: Stars balansi va Premium’ni saqlaymi yoki sarflaymi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-17): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Akkauntida Stars balansi yoki faol Premium obunasi bor o'zbekistonlik foydalanuvchi «Durov qidiruvga qo'yildi» xabarini ko'radi. U yulduzlarni hozir sarflash yoki saqlash kerakmi, Stars va Premium'ni so'mda olishni kechiktirish kerakmi, deb «Durov qidiruv Stars balansi» so'rovi bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-17):
 *   https://telegram.org/moderation
 *   https://telegram.org/press
 *   https://telegram.org/faq
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
  return <p>Shoshilmang: yulduzlarni bugunoq sarflab yuborish ham, notanish odamga sotish ham shart emas. Durov haqidagi xabarni Telegram’ning rasmiy sahifalari tasdiqlamagan. Stars balansi yoki Premium obunasiga ta’siri haqida ham hech qanday bayonot yo‘q. Balans va obuna akkauntingizda turadi, shuning uchun asosiy xavf yangilikning o‘zida emas, akkauntni yo‘qotishda. Rejadagi xaridni qiling, vahima bilan xarid qilmang.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi", label: "Yulduzlarni bugunoq ishlatib yuborish kerakmi?" },
          { href: "#telegramning-rasmiy-sahifalari-bu-xabar", label: "Telegram’ning rasmiy sahifalari bu xabar haqida nima deydi?" },
          { href: "#stars-balansi-va-premium-muddati", label: "Stars balansi va Premium muddati aslida qayerda turadi?" },
          { href: "#zaxiradagi-yulduzlar-bilan-nima-qilgan", label: "Zaxiradagi yulduzlar bilan nima qilgan ma’qul?" },
          { href: "#premium-faol-bolsa-uzaytirishni-kechiktirish", label: "Premium faol bo‘lsa, uzaytirishni kechiktirish kerakmi?" },
          { href: "#yangi-stars-xaridini-keyinga-surish", label: "Yangi Stars xaridini keyinga surish kerakmi?" },
          { href: "#durov-mavzusidagi-qaysi-xabarlar-balansni", label: "Durov mavzusidagi qaysi xabarlar balansni o‘g‘irlashga urinadi?" },
          { href: "#balansni-ogirlanishdan-saqlash-uchun-nimani", label: "Balansni o‘g‘irlanishdan saqlash uchun nimani sozlash kerak?" },
          { href: "#stars-yoki-premiumni-somda-qanday", label: "Stars yoki Premium’ni so‘mda qanday xavfsiz olasiz?" },
        ]}
      />
      <h2 id="yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi">Yulduzlarni bugunoq ishlatib yuborish kerakmi?</h2>
      <p>Telegram kanallarida tarqalgan xabarga ko‘ra, Rossiya FSB’si Pavel Durovni «terrorizmga yordam berish»da ayblab, xalqaro qidiruvga qo‘ygan. Telegram’ning rasmiy sahifalarida biz bu da’voning na tasdig‘ini, na raddiyasini topdik. Shuning uchun uni hozircha fakt emas, tarqalayotgan xabar deb qabul qiling.</p>
      <p>Stars egasi uchun boshqa savol muhimroq. Bunday ayblov oddiy foydalanuvchining balansiga yoki Premium obunasiga ta’sir qilishi haqida Telegram’dan rasmiy bayonot topilmadi. Bayonot yo‘qligi «hech narsa o‘zgarmaydi» degan va’da emas. Ammo bu yulduzlarni bugunoq biror narsaga aylantirib tashlashga ham sabab bo‘lmaydi.</p>
      <p>Amalda bitta oddiy qoidaga amal qiling:</p>
      <ul>
        <li>oldindan rejalashtirgan sarfingizni odatdagidek qiling;</li>
        <li>rejada yo‘q sarfni faqat yangilik tufayli qilmang;</li>
        <li>yulduz, sovg‘a yoki akkaunt haqidagi har qanday «shoshilinch» taklifga shubha bilan qarang.</li>
      </ul>
      <h2 id="telegramning-rasmiy-sahifalari-bu-xabar">Telegram’ning rasmiy sahifalari bu xabar haqida nima deydi?</h2>
      <p>Xabardagi gaplarni Telegram’ning moderatsiya, matbuot va FAQ sahifalari bilan solishtirdik. Natijalar 2026-yil 17-noyabr holatiga ko‘ra.</p>
      <CompareTable
        headers={["Da’vo yoki fakt", "Holati", "Stars va Premium egasiga aloqasi"]}
        rows={[
          ["FSB Durovni «terrorizmga yordam berish»da ayblab, xalqaro qidiruvga qo‘ygan", "Rasmiy sahifalarda tasdiqlanmagan, rad ham etilmagan", "Balans yoki obuna haqida gap yo‘q"],
          ["Ukraina razvedkasiga tegishli botlar va kanallar bloklanmagan", "Tekshirilmagan", "Oddiy foydalanuvchi hisobiga aloqasi ko‘rsatilmagan"],
          ["Durov ayblovga X’da surat bilan javob bergan", "Rasmiy manbalarda topilmadi", "Ta’siri yo‘q"],
          ["Fransiyadagi ish davom etmoqda", "2026-yildagi holati topilmadi", "Balansga oid ma’lumot yo‘q"],
          ["Telegram terrorchilik targ‘ibotiga platformada joy yo‘qligini aytadi", "Moderatsiya sahifasida yozilgan", "Platforma qoidasi, balansga tegishli emas"],
          ["2026-yilda 30 403 376 ta guruh va kanal bloklangan", "Moderatsiya sahifasida e’lon qilingan", "Qoidani buzgan jamoalarga tegishli"],
          ["2026-yilda terrorizmga aloqador 199 452 ta jamoa bloklangan", "Moderatsiya sahifasida e’lon qilingan", "Qoidani buzgan jamoalarga tegishli"],
          ["Durov BAA va Fransiya fuqarosi, ishlab chiqish jamoasi Dubayda", "Matbuot va FAQ sahifalarida yozilgan", "Faqat kontekst uchun"],
        ]}
      />
      <p>Telegram’ning <a href={"https://telegram.org/moderation"} target="_blank" rel="noopener noreferrer">moderatsiya sahifasida</a> yana bir nechta gap bor. Kompaniya 2016-yildan beri terrorchilik kontentini o‘chirish bo‘yicha har kuni hisobot e’lon qiladi. ETIDAL bilan birga 200 milliondan ortiq terrorchilik kontentini o‘chirganini aytadi, bu ishni esa Europol e’tirof etgan. Durovning fuqaroligi <a href={"https://telegram.org/press"} target="_blank" rel="noopener noreferrer">matbuot sahifasida</a>, jamoa qayerda ishlashi <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ sahifasida</a> yozilgan.</p>
      <p>Tasdiqlangan faktlarning birortasi ham sizning yulduzlaringiz yoki obunangiz haqida emas.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stars-balansi-va-premium-muddati">Stars balansi va Premium muddati aslida qayerda turadi?</h2>
      <p>Stars ham, Premium ham telefon xotirasida yoki TON hamyonda emas, Telegram akkauntingizda hisoblanadi. Boshqa qurilmadan shu akkauntga kirsangiz, ular ham o‘sha yerda ko‘rinadi. Demak, kimdir akkauntingizga kirib olsa, balans ham uning qo‘liga o‘tadi.</p>
      <CompareTable
        headers={["Aktiv", "Nimaga bog‘langan", "Nimaga bog‘liq", "Real xavf"]}
        rows={[
          ["Stars balansi", "Telegram akkauntingiz", "Akkauntga kirish huquqi", "Akkaunt o‘g‘irlanishi, firibgarga yulduz yoki sovg‘a yuborib qo‘yish"],
          ["Faol Premium", "Akkaunt va obuna muddati", "Akkauntga kirish huquqi", "Akkauntni yo‘qotish, «muzlatish» bahonasidagi aldov"],
          ["Profildagi oddiy sovg‘a", "Akkaunt", "Sizning qaroringiz", "Vahima bilan yulduzga almashtirib yuborish"],
          ["NFT sovg‘a", "Akkaunt, hamyonga chiqarilgan bo‘lsa — hamyon", "Akkaunt yoki hamyon kaliti", "Soxta «saqlash» havolalari, zaxira so‘zlarni so‘rash"],
        ]}
      />
      <p>Telegram bulutdagi chat ma’lumotlari dunyo bo‘ylab bir nechta ma’lumot markazida saqlanishini, shifr kalitlari esa qismlarga bo‘linganini yozadi. Bu gap chatlar haqida, uni balans uchun alohida va’da deb tushunmang.</p>
      <p>Balans joyida ekanini qanday ko‘rish <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasida yozilgan. Kolleksion sovg‘ani hamyonga chiqarish alohida qaror, uni bu yangilik tufayli qilishga hojat yo‘q.</p>
      <h2 id="zaxiradagi-yulduzlar-bilan-nima-qilgan">Zaxiradagi yulduzlar bilan nima qilgan ma’qul?</h2>
      <p>Javob yulduzlarni nima uchun olganingizga bog‘liq.</p>
      <ul>
        <li><b>Rejadagi sarf bor bo‘lsa.</b> Kanal obunasi, bot ichidagi xarid yoki do‘stga sovg‘a oldindan rejalashtirilgan bo‘lsa, odatdagidek qiling. Yangilik bu rejani o‘zgartirmaydi.</li>
        <li><b>Yulduzlar zaxirada turgan bo‘lsa.</b> Ularni darhol biror narsaga aylantirishga sabab yo‘q. Balansni bugun «xavfsizroq» joyga ko‘chiradigan tasdiqlangan usul yo‘q.</li>
        <li><b>Sovg‘ani yulduzga almashtirmoqchi bo‘lsangiz.</b> Buni vahima tufayli qilmang. Almashtirishdan oldin ilova tasdiqlash oynasida nima bo‘lishini ko‘rsatadi — uni oxirigacha o‘qing va keyin qaror qiling.</li>
        <li><b>Chatda xaridor chiqsa.</b> Yulduzni notanish odamga «arzon» sotmang. StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi, shuning uchun uning nomidan kelgan bunday taklif firibgarlik belgisi.</li>
        <li><b>Pulni qaytarib olmoqchi bo‘lsangiz.</b> Refund vahimaga qarshi vosita emas. Qachon ishlashini <Link href="/blog/telegram-stars-qaytarib-olish">Stars qaytarib olish</Link> maqolasidan bilib oling.</li>
      </ul>
      <h2 id="premium-faol-bolsa-uzaytirishni-kechiktirish">Premium faol bo‘lsa, uzaytirishni kechiktirish kerakmi?</h2>
      <p>Faol obunani yangilik sabab bekor qilishga ham, shoshib uzaytirishga ham asos yo‘q.</p>
      <p>StarsPaymee qoidasini ham hisobga oling: obunasi faol akkauntga bot yangi Premium buyurtmasini ochmaydi, muddat faol obuna ustiga qo‘shilmaydi. Shuning uchun avval obuna qachon tugashini bilib oling — bu <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">Premium tugash sanasini tekshirish</Link> maqolasida ko‘rsatilgan. Sanani kalendarga yozib, eslatma qo‘ying.</p>
      <p>Obuna tugagach qaysi imkoniyatlar o‘chishi va qaysilari qolishi <Link href="/blog/telegram-premium-tugasa-nima-boladi">Premium tugasa nima bo‘ladi</Link> maqolasida yozilgan. Undan qaysi funksiyalarsiz bir-ikki kun qiynalmasligingizni oldindan bilib olasiz.</p>
      <p>Muddat tanlash vaqti kelganda narxlar quyidagicha:</p>
      <CompareTable
        headers={["Muddat", "Narx"]}
        rows={[
          ["3 oy", `${som(premium(3), "uz")}`],
          ["6 oy", `${som(premium(6), "uz")}`],
          ["12 oy", `${som(premium(12), "uz")}`],
        ]}
      />
      <p>Bu narxlar hamma to‘lov usulida bir xil. 1 oylik tarif ham bor, uning narxi botda ko‘rsatiladi. Vaziyat sizga noaniq tuyulsa, uzun muddatni tanlashga shoshilmang: qisqa tarif bilan boshlab, keyin qaror qilsangiz ham bo‘ladi.</p>
      <h2 id="yangi-stars-xaridini-keyinga-surish">Yangi Stars xaridini keyinga surish kerakmi?</h2>
      <p>Yangilik Stars narxiga qanday ta’sir qilishi noma’lum. Narx oshadi yoki tushadi degan har qanday gap taxmin xolos. Shuning uchun qarorni yangilikka emas, ehtiyojingizga qarab qiling.</p>
      <CompareTable
        headers={["Vaziyat", "Nima qilish kerak"]}
        rows={[
          ["Ertaga kanal obunasi yoki bot ichidagi xarid uchun Stars kerak", "Kerakli miqdorni hozir oling"],
          ["Do‘stga sovg‘a yuborish rejalashtirilgan", "Odatdagidek yuboring"],
          ["«Har ehtimolga qarshi» katta zaxira yig‘moqchisiz", "Ko‘p olmang, ehtiyojga qarab bo‘lib oling"],
          ["Narx tushishini kutyapsiz", "Prognoz yo‘q: ehtiyoj bo‘lsa oling, bo‘lmasa kutish ham zarar qilmaydi"],
          ["Chatda «yangilik sabab arzon Stars» taklifi keldi", "Rad eting, hech qanday to‘lov qilmang"],
        ]}
      />
      <p>Ehtiyojni hisoblash oddiy. Masalan, bir oyda ikkita kanal obunasi va bitta sovg‘a uchun yulduz kerak bo‘lsa, shu summani qo‘shing va faqat shuncha oling. Eng kam buyurtma 50 Stars, shuning uchun katta paket olishga majbur emassiz.</p>
      <p>Bir dona yulduz narxi to‘lov usuliga bog‘liq. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan to‘lasangiz — {som(STARS_PER_UNIT_UZS, "uz")}. Click, Payme, Uzum yoki Paynet orqali to‘lasangiz — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Yakuniy summa to‘lovdan oldin botda ko‘rsatiladi.</p>
      <h2 id="durov-mavzusidagi-qaysi-xabarlar-balansni">Durov mavzusidagi qaysi xabarlar balansni o‘g‘irlashga urinadi?</h2>
      <p>Mashhur odam haqida xabar tarqalsa, firibgarlar odamlarning xavotiridan foydalanadi. Bunday yozishmalar odatda shunga o‘xshaydi:</p>
      <ul>
        <li>«Durov ishi sabab balanslar tekshiriladi — yulduzlaringizni hamyonga ko‘chiring, havola pastda»;</li>
        <li>«Balansni saqlash boti: kirish uchun kodni yuboring»;</li>
        <li>«Premium’ingizni muzlatib turamiz, SMS kodni ayting»;</li>
        <li>«Sovg‘alaringizni vaqtincha bizga o‘tkazing, hammasi tinchigach qaytaramiz»;</li>
        <li>«Ma’lumotlaringiz sizib chiqdi, akkauntni tasdiqlang».</li>
      </ul>
      <p>Ularning hammasida bitta umumiy belgi bor: SMS kod, 2FA paroli yoki hamyonning zaxira so‘zlari so‘raladi. StarsPaymee bularning birortasini so‘ramaydi, unga faqat @username kerak.</p>
      <p>Telegram <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ sahifasida</a> foydalanuvchi xabarlaridan 0 bayt ham uchinchi tomonlarga, jumladan hukumatlarga berilmaganini aytadi. Bu gap xabarlar haqida, balans haqida emas. Lekin «ma’lumotlaringiz allaqachon tarqalib ketdi» degan qo‘rqituvga shoshib ishonmaslik uchun yaxshi dalil.</p>
      <p>Soxta havola va botlarni ajratish yo‘llari <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link> maqolasida batafsil yozilgan.</p>
      <h2 id="balansni-ogirlanishdan-saqlash-uchun-nimani">Balansni o‘g‘irlanishdan saqlash uchun nimani sozlash kerak?</h2>
      <p>Bu qadamlar bir necha daqiqa oladi va balansingizni har qanday yangilikdan ko‘ra yaxshiroq himoya qiladi.</p>
      <Steps>
        <Step title={"2FA’ni yoqing"}>Telegram’ga ko‘ra, ikki bosqichli tekshiruv yoqilgach, akkauntga kirish uchun SMS kod ham, parol ham kerak bo‘ladi. Sozlash tartibi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya</Link> maqolasida bor.</Step>
        <Step title={"Faol seanslarni ko‘ring"}>sozlamalardagi qurilmalar ro‘yxatini oching va tanimagan seanslarni yoping.</Step>
        <Step title={"Balans va Premium sanasini qayd eting"}>Stars balansi va obuna tugash sanasining skrinshotini oling. Keyin biror narsa o‘zgarsa, solishtirish oson bo‘ladi.</Step>
        <Step title={"Kodlarni hech kimga bermang"}>«yordam», «ko‘chirish» yoki «muzlatish» bahonasi bo‘lsa ham.</Step>
        <Step title={"Faqat tanish botdan xarid qiling"}>bot nomini harfma-harf tekshiring, chunki bitta harfi farq qiladigan nusxalar ham uchraydi.</Step>
      </Steps>
      <h2 id="stars-yoki-premiumni-somda-qanday">Stars yoki Premium’ni so‘mda qanday xavfsiz olasiz?</h2>
      <p>Xarid kerak bo‘lsa, StarsPaymee boti orqali so‘mda olishingiz mumkin:</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 dona) yoki Premium muddati.</Step>
        <Step title={"@username’ni kiriting"}>o‘zingizni yoki do‘stingizni. Parol va SMS kod so‘ralmaydi, Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</Step>
        <Step title={"Natijani tekshiring"}>buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Muammo bo‘lsa, buyurtma ma’lumotlari bilan <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing.</Step>
      </Steps>
      <p>StarsPaymee mustaqil xizmat va 1,5 yildan beri ishlaydi; u Telegram nomidan gapirmaydi. Narxlar va tariflar <Link href="/stars">Stars</Link> hamda <Link href="/premium">Premium</Link> sahifalarida jamlangan.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/moderation", label: "Telegram Moderation Overview" },
          { href: "https://telegram.org/press", label: "Telegram Press Info" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Durov ayblansa, Telegram mening yulduzlarimni muzlatib qo‘yishi mumkinmi?", answer: "Bunday chora haqida Telegram hech narsa e’lon qilmagan, xabarda ham oddiy foydalanuvchilarning balansi tilga olinmagan. Hozir balansga real xavf soladigan narsa — akkauntga begona odam kirib olishi." },
  { question: "Stars’ni hozir TON yoki Gram’ga aylantirib qo‘ysam xavfsizroq bo‘ladimi?", answer: "Bu balansni xavfsizroq qilmaydi, faqat hamyon va uning kalitini saqlash vazifasini qo‘shadi. Bu yo‘l kimga ochiqligi va shartlari bu maqolada tasdiqlanmagan, shuning uchun rejangizda bo‘lmasa, vahima tufayli qilmang." },
  { question: "Yangilikdan keyin Stars narxi oshadimi yoki tushadimi?", answer: "Buni hech kim aniq ayta olmaydi, bu borada tasdiqlangan ma’lumot yo‘q. StarsPaymee’dagi joriy dona narxi to‘lov usuliga bog‘liq va to‘lovdan oldin botda ko‘rinadi." },
  { question: "Premium’im bor, narx o‘zgarmasidan oldin yana 12 oylik olib qo‘yaymi?", answer: "Narx bo‘yicha prognoz yo‘q, shuning uchun bu yangilik oldindan olishga asos bo‘lmaydi. Obuna tugaydigan sanaga eslatma qo‘ying va o‘sha kunga yaqin qaror qiling." },
  { question: "Faol Premium ustiga StarsPaymee orqali muddat qo‘sha olamanmi?", answer: "Yo‘q, obunasi faol akkaunt uchun bot yangi Premium buyurtmasini ochmaydi. Joriy obuna tugagach, kerakli muddatni @username orqali alohida rasmiylashtirasiz." },
  { question: "Kimdir «Durov ishi tufayli yulduzlaringizni arzonga olib qolaman» desa, ishonsa bo‘ladimi?", answer: "Yo‘q, bu xavotirdan foydalanadigan odatiy aldov: «xaridor» avval yulduz yoki sovg‘a o‘tkazishni yoxud kod yuborishni so‘raydi. StarsPaymee esa foydalanuvchidan Stars ham, sovg‘a ham sotib olmaydi." },
  { question: "Ilovaga bir muddat kira olmasam, balansim saqlanib qoladimi?", answer: "Bunday holat haqida Telegram rasmiy bayonot bermagan. Ma’lumki, Stars va Premium telefonda emas, akkauntda hisoblanadi, shuning uchun 2FA paroli va akkauntga kirish huquqini asrash eng muhimi." },
  { question: "StarsPaymee bilan Durov yoki Telegram o‘rtasida aloqa bormi?", answer: "StarsPaymee mustaqil xizmat va Telegram nomidan ish yuritmaydi. U Stars va Premium’ni so‘mda, faqat @username orqali yetkazib beradi." },
  { question: "Balansim kamayib qolganini qanday bilaman?", answer: "Bugun balansning skrinshotini olib qo‘ying va keyin ilovadagi ko‘rsatkich bilan solishtiring. Balansni qayerdan ko‘rish alohida maqolada qadamma-qadam ko‘rsatilgan." },
  { question: "Bot xarid uchun SMS kod so‘rasa nima qilishim kerak?", answer: "Kodni bermang va suhbatni to‘xtating — Stars yoki Premium olish uchun faqat @username kerak. Shubhangiz bo‘lsa, @StarsPaymeeSupport orqali bot haqiqiy ekanini tekshiring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Не спешите: тратить звёзды сегодня же или продавать их незнакомцу не нужно. Официальные страницы Telegram новость о Дурове не подтверждают. Заявлений о влиянии на баланс Stars или подписку Premium тоже нет. Звёзды и подписка привязаны к вашему аккаунту, поэтому главный риск — не сама новость, а потеря аккаунта. Совершайте запланированные покупки, а не покупки на панике.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi", label: "Нужно ли тратить звёзды прямо сегодня?" },
          { href: "#telegramning-rasmiy-sahifalari-bu-xabar", label: "Что говорят официальные страницы Telegram об этой новости?" },
          { href: "#stars-balansi-va-premium-muddati", label: "Где на самом деле хранятся баланс Stars и срок Premium?" },
          { href: "#zaxiradagi-yulduzlar-bilan-nima-qilgan", label: "Что делать со звёздами, которые лежат в запасе?" },
          { href: "#premium-faol-bolsa-uzaytirishni-kechiktirish", label: "Premium активен — стоит ли откладывать продление?" },
          { href: "#yangi-stars-xaridini-keyinga-surish", label: "Стоит ли отложить новую покупку Stars?" },
          { href: "#durov-mavzusidagi-qaysi-xabarlar-balansni", label: "Какие сообщения на тему Дурова пытаются украсть баланс?" },
          { href: "#balansni-ogirlanishdan-saqlash-uchun-nimani", label: "Что настроить, чтобы баланс не украли?" },
          { href: "#stars-yoki-premiumni-somda-qanday", label: "Как безопасно купить Stars или Premium за сумы?" },
        ]}
      />
      <h2 id="yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi">Нужно ли тратить звёзды прямо сегодня?</h2>
      <p>Telegram-каналы распространяют новость, что ФСБ России якобы обвинила Павла Дурова в «содействии терроризму» и объявила его в международный розыск. На официальных страницах Telegram мы не нашли ни подтверждения, ни опровержения. Пока это слух, а не установленный факт.</p>
      <p>Владельцу Stars важнее другое. Официальных заявлений Telegram о том, что такое обвинение повлияет на баланс или подписку Premium обычного пользователя, нет. Отсутствие заявления — ещё не обещание, что «ничего не изменится». Но и повода срочно на что-то менять звёзды тоже нет.</p>
      <p>На практике достаточно одного простого правила:</p>
      <ul>
        <li>запланированные траты делайте как обычно;</li>
        <li>не тратьте звёзды на то, чего не было в планах, только из-за новости;</li>
        <li>к любым «срочным» предложениям насчёт звёзд, подарков или аккаунта относитесь с подозрением.</li>
      </ul>
      <h2 id="telegramning-rasmiy-sahifalari-bu-xabar">Что говорят официальные страницы Telegram об этой новости?</h2>
      <p>Мы сверили утверждения из новости со страницами Telegram о модерации, для прессы и FAQ. Данные актуальны на 17 ноября 2026 года.</p>
      <CompareTable
        headers={["Утверждение или факт", "Статус", "Касается ли владельца Stars и Premium"]}
        rows={[
          ["ФСБ обвинила Дурова в «содействии терроризму» и объявила в международный розыск", "На официальных страницах не подтверждено и не опровергнуто", "О балансе и подписке ничего не сказано"],
          ["Боты и каналы украинской разведки не блокируются", "Не проверено", "Связь со счетами обычных пользователей не указана"],
          ["Дуров ответил на обвинение фотографией в X", "В официальных источниках не найдено", "Не влияет"],
          ["Дело во Франции продолжается", "Статус на 2026 год не найден", "Данных о балансах нет"],
          ["Telegram заявляет, что террористической пропаганде на платформе не место", "Указано на странице модерации", "Правило платформы, к балансу не относится"],
          ["В 2026 году заблокировано 30 403 376 групп и каналов", "Опубликовано на странице модерации", "Касается сообществ, нарушивших правила"],
          ["В 2026 году заблокировано 199 452 сообщества, связанных с терроризмом", "Опубликовано на странице модерации", "Касается сообществ, нарушивших правила"],
          ["У Дурова гражданство ОАЭ и Франции, команда разработчиков работает в Дубае", "Указано на страницах для прессы и в FAQ", "Только для контекста"],
        ]}
      />
      <p>На <a href={"https://telegram.org/moderation"} target="_blank" rel="noopener noreferrer">странице модерации</a> есть ещё несколько заявлений. С 2016 года компания ежедневно публикует отчёты об удалении террористического контента. Вместе с ETIDAL она удалила более 200 миллионов единиц такого контента, а эту работу отметил Европол. О гражданстве Дурова сказано на <a href={"https://telegram.org/press"} target="_blank" rel="noopener noreferrer">странице для прессы</a>, о том, где работает команда, — в <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ</a>.</p>
      <p>Ни один подтверждённый факт не касается ваших звёзд или подписки.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stars-balansi-va-premium-muddati">Где на самом деле хранятся баланс Stars и срок Premium?</h2>
      <p>И Stars, и Premium хранятся в вашем аккаунте Telegram, а не в памяти телефона и не в TON-кошельке. Войдёте в аккаунт с другого устройства — увидите там то же самое. Значит, если в аккаунт войдёт посторонний, баланс достанется ему.</p>
      <CompareTable
        headers={["Актив", "К чему привязан", "От чего зависит", "Реальный риск"]}
        rows={[
          ["Баланс Stars", "Ваш аккаунт Telegram", "Доступ к аккаунту", "Угон аккаунта, отправка звёзд или подарка мошеннику"],
          ["Активный Premium", "Аккаунт и срок подписки", "Доступ к аккаунту", "Потеря аккаунта, обман под предлогом «заморозки»"],
          ["Обычный подарок в профиле", "Аккаунт", "Ваше решение", "Обмен на звёзды в панике"],
          ["NFT-подарок", "Аккаунт, а после вывода — кошелёк", "Аккаунт или ключ кошелька", "Фальшивые ссылки «для сохранения», запрос сид-фразы"],
        ]}
      />
      <p>Telegram пишет, что данные облачных чатов хранятся в нескольких дата-центрах по всему миру, а ключи шифрования разделены на части. Это сказано о чатах — не считайте это отдельной гарантией для баланса.</p>
      <p>Как проверить, что баланс на месте, рассказано в статье <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>. Вывод коллекционного подарка в кошелёк — отдельное решение, и из-за этой новости принимать его не нужно.</p>
      <h2 id="zaxiradagi-yulduzlar-bilan-nima-qilgan">Что делать со звёздами, которые лежат в запасе?</h2>
      <p>Всё зависит от того, зачем вы их покупали.</p>
      <ul>
        <li><b>Есть запланированные траты.</b> Если вы собирались оплатить подписку на канал, покупку в боте или подарок другу — делайте это как обычно. Новость планов не меняет.</li>
        <li><b>Звёзды лежат про запас.</b> Срочно их на что-то менять незачем. Подтверждённого способа сегодня перенести баланс в «более безопасное» место нет.</li>
        <li><b>Хотите обменять подарок на звёзды.</b> Не делайте этого на панике. Перед обменом приложение показывает в окне подтверждения, что произойдёт, — дочитайте его до конца и только потом решайте.</li>
        <li><b>В чате объявился покупатель.</b> Не продавайте звёзды незнакомцу «по дешёвке». StarsPaymee не покупает у пользователей ни Stars, ни подарки, так что такое предложение от его имени — признак мошенничества.</li>
        <li><b>Хотите вернуть деньги.</b> Возврат — не средство против паники. Когда он работает, читайте в статье <Link href="/blog/telegram-stars-qaytarib-olish">как вернуть Stars</Link>.</li>
      </ul>
      <h2 id="premium-faol-bolsa-uzaytirishni-kechiktirish">Premium активен — стоит ли откладывать продление?</h2>
      <p>Ни отменять активную подписку из-за новости, ни срочно её продлевать нет причин.</p>
      <p>Учтите правило StarsPaymee: на аккаунт с активной подпиской бот не оформляет новый заказ Premium, и срок поверх действующей подписки не добавляется. Поэтому сначала узнайте, когда подписка закончится, — как это сделать, показано в статье <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">как проверить дату окончания Premium</Link>. Запишите дату в календарь и поставьте напоминание.</p>
      <p>Какие возможности отключатся после окончания подписки, а какие останутся, описано в статье <Link href="/blog/telegram-premium-tugasa-nima-boladi">что будет, когда закончится Premium</Link>. Так вы заранее поймёте, без чего легко проживёте день-другой.</p>
      <p>Когда придёт время выбирать срок, цены такие:</p>
      <CompareTable
        headers={["Срок", "Цена"]}
        rows={[
          ["3 месяца", `${som(premium(3), "ru")}`],
          ["6 месяцев", `${som(premium(6), "ru")}`],
          ["12 месяцев", `${som(premium(12), "ru")}`],
        ]}
      />
      <p>Цены одинаковы при любом способе оплаты. Есть и тариф на 1 месяц — его цена указана в боте. Если ситуация кажется вам неясной, не торопитесь брать длинный срок: можно начать с короткого тарифа и решить позже.</p>
      <h2 id="yangi-stars-xaridini-keyinga-surish">Стоит ли отложить новую покупку Stars?</h2>
      <p>Как новость повлияет на цену Stars, неизвестно. Любые разговоры о том, что цена вырастет или упадёт, — догадки. Поэтому решайте, исходя из своих потребностей, а не из новостей.</p>
      <CompareTable
        headers={["Ситуация", "Что делать"]}
        rows={[
          ["Завтра нужны Stars на подписку канала или покупку в боте", "Купите нужное количество сейчас"],
          ["Запланирован подарок другу", "Отправляйте как обычно"],
          ["Хочется набрать большой запас «на всякий случай»", "Не берите много, покупайте частями по мере надобности"],
          ["Ждёте, что цена упадёт", "Прогноза нет: нужно — покупайте, не нужно — подождать тоже не страшно"],
          ["В чате предлагают «дешёвые Stars из-за новости»", "Откажитесь и ничего не оплачивайте"],
        ]}
      />
      <p>Посчитать потребность просто. Например, если за месяц нужны звёзды на две подписки и один подарок, сложите суммы и купите ровно столько. Минимальный заказ — 50 Stars, так что брать большой пакет не обязательно.</p>
      <p>Цена одной звезды зависит от способа оплаты. Переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}. Через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Итоговая сумма показывается в боте до оплаты.</p>
      <h2 id="durov-mavzusidagi-qaysi-xabarlar-balansni">Какие сообщения на тему Дурова пытаются украсть баланс?</h2>
      <p>Когда о знаменитости расходится новость, мошенники играют на тревоге людей. Обычно такие сообщения выглядят так:</p>
      <ul>
        <li>«Из-за дела Дурова балансы будут проверять — переведите звёзды в кошелёк, ссылка ниже»;</li>
        <li>«Бот для сохранения баланса: пришлите код для входа»;</li>
        <li>«Мы временно заморозим ваш Premium, назовите код из SMS»;</li>
        <li>«Переведите подарки нам на время, вернём, когда всё утихнет»;</li>
        <li>«Ваши данные утекли, подтвердите аккаунт».</li>
      </ul>
      <p>У всех один общий признак: просят код из SMS, пароль 2FA или сид-фразу кошелька. StarsPaymee ничего из этого не запрашивает — ему нужен только @username.</p>
      <p>В <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ</a> Telegram заявляет, что не передал третьим лицам, включая правительства, ни одного байта (0 байт) пользовательских сообщений. Это сказано о сообщениях, а не о балансе. Но это хороший довод, чтобы не поддаваться запугиваниям вроде «ваши данные уже утекли».</p>
      <p>Как отличить фальшивые ссылки и ботов, подробно разобрано в статье <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Telegram Stars</Link>.</p>
      <h2 id="balansni-ogirlanishdan-saqlash-uchun-nimani">Что настроить, чтобы баланс не украли?</h2>
      <p>Эти шаги займут несколько минут и защитят баланс лучше, чем любые новости.</p>
      <Steps>
        <Step title={"Включите 2FA"}>по данным Telegram, после включения двухэтапной проверки для входа в аккаунт понадобятся и код из SMS, и пароль. Порядок настройки — в статье <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита аккаунта от угона</Link>.</Step>
        <Step title={"Проверьте активные сеансы"}>откройте список устройств в настройках и завершите незнакомые сеансы.</Step>
        <Step title={"Зафиксируйте баланс и дату Premium"}>сделайте скриншот баланса Stars и даты окончания подписки. Если что-то изменится, будет с чем сравнить.</Step>
        <Step title={"Никому не сообщайте коды"}>даже под предлогом «помощи», «переноса» или «заморозки».</Step>
        <Step title={"Покупайте только у знакомого бота"}>сверяйте имя бота буква в букву: встречаются копии, отличающиеся одним символом.</Step>
      </Steps>
      <h2 id="stars-yoki-premiumni-somda-qanday">Как безопасно купить Stars или Premium за сумы?</h2>
      <p>Если покупка нужна, её можно оформить за сумы через бот StarsPaymee:</p>
      <Steps>
        <Step title={"Откройте бот"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук) или срок Premium.</Step>
        <Step title={"Введите @username"}>свой или друга. Пароль и код из SMS не нужны, Premium подключается через механизм подарков Telegram.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота. Зарубежная карта, криптокошелёк или VPN не нужны.</Step>
        <Step title={"Проверьте результат"}>заказ обычно доставляется автоматически за несколько секунд. Если что-то пошло не так, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> и укажите данные заказа.</Step>
      </Steps>
      <p>StarsPaymee — независимый сервис, работает уже 1,5 года и не выступает от имени Telegram. Цены и тарифы собраны на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/moderation", label: "Telegram Moderation Overview" },
          { href: "https://telegram.org/press", label: "Telegram Press Info" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если Дурова обвинят, может ли Telegram заморозить мои звёзды?", answer: "Telegram ни о каких таких мерах не объявлял, да и в самой новости о балансах обычных пользователей ничего нет. Сейчас балансу реально угрожает только одно — вход постороннего в ваш аккаунт." },
  { question: "Будет ли надёжнее перевести Stars в TON или Gram прямо сейчас?", answer: "Безопаснее баланс от этого не станет, просто придётся ещё хранить кошелёк и его ключ. Кому доступен такой путь и на каких условиях, в этой статье не подтверждено, так что без плана и на панике этого делать не стоит." },
  { question: "Вырастет или упадёт цена Stars после этой новости?", answer: "Точно этого не скажет никто, подтверждённых данных нет. Текущая цена за штуку в StarsPaymee зависит от способа оплаты и видна в боте до оплаты." },
  { question: "У меня есть Premium — взять ещё 12 месяцев, пока цена не изменилась?", answer: "Прогноза по цене нет, так что новость — не повод покупать заранее. Поставьте напоминание на дату окончания подписки и решите ближе к этому дню." },
  { question: "Можно ли через StarsPaymee добавить срок к активному Premium?", answer: "Нет, для аккаунта с действующей подпиской бот новый заказ Premium не оформляет. Когда текущая подписка закончится, нужный срок оформляется отдельно по @username." },
  { question: "Мне пишут: «Из-за дела Дурова выкуплю ваши звёзды дёшево». Можно верить?", answer: "Нет, это типичный обман на волне тревоги: «покупатель» сначала просит перевести звёзды или подарок либо прислать код. StarsPaymee вообще не покупает у пользователей ни Stars, ни подарки." },
  { question: "Сохранится ли баланс, если я какое-то время не смогу зайти в приложение?", answer: "Официальных заявлений на этот счёт Telegram не делал. Известно, что Stars и Premium хранятся в аккаунте, а не на телефоне, поэтому главное — беречь пароль 2FA и доступ к аккаунту." },
  { question: "Связан ли StarsPaymee с Дуровым или Telegram?", answer: "StarsPaymee — независимый сервис и не действует от имени Telegram. Он доставляет Stars и Premium за сумы, используя только @username." },
  { question: "Как понять, что баланс уменьшился?", answer: "Сделайте скриншот баланса сегодня и потом сравните с цифрой в приложении. Где смотреть баланс, пошагово показано в отдельной статье." },
  { question: "Что делать, если бот просит код из SMS для покупки?", answer: "Код не сообщайте и прекратите переписку: для покупки Stars или Premium нужен только @username. Если сомневаетесь, проверьте подлинность бота через @StarsPaymeeSupport." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Don’t rush. You don’t need to spend your Stars today or sell them to a stranger. Telegram’s official pages haven’t confirmed the news about Durov, and Telegram hasn’t said anything about Stars balances or Premium subscriptions. Both are tied to your account, so the real risk is losing access to that account, not the news itself. Buy what you planned to buy, and don’t buy out of panic.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi", label: "Should you spend your Stars today?" },
          { href: "#telegramning-rasmiy-sahifalari-bu-xabar", label: "What do Telegram’s official pages say about this news?" },
          { href: "#stars-balansi-va-premium-muddati", label: "Where do your Stars balance and Premium term actually live?" },
          { href: "#zaxiradagi-yulduzlar-bilan-nima-qilgan", label: "What should you do with Stars you’ve saved up?" },
          { href: "#premium-faol-bolsa-uzaytirishni-kechiktirish", label: "Should you delay renewing an active Premium?" },
          { href: "#yangi-stars-xaridini-keyinga-surish", label: "Should you put off buying new Stars?" },
          { href: "#durov-mavzusidagi-qaysi-xabarlar-balansni", label: "Which Durov-themed messages try to steal your balance?" },
          { href: "#balansni-ogirlanishdan-saqlash-uchun-nimani", label: "What should you set up to protect your balance from theft?" },
          { href: "#stars-yoki-premiumni-somda-qanday", label: "How do you buy Stars or Premium safely in soum?" },
        ]}
      />
      <h2 id="yulduzlarni-bugunoq-ishlatib-yuborish-kerakmi">Should you spend your Stars today?</h2>
      <p>According to a message circulating on Telegram channels, Russia’s FSB has charged Pavel Durov with “aiding terrorism” and put him on an international wanted list. We found nothing on Telegram’s official pages that confirms or denies this. For now, treat it as a circulating report, not a fact.</p>
      <p>If you hold Stars, the more useful question is whether a charge like this affects your balance or your Premium subscription. We found no official statement from Telegram on that. No statement doesn’t mean a promise that “nothing will change.” It also doesn’t mean you should turn your Stars into something else today.</p>
      <p>In practice, follow one simple rule:</p>
      <ul>
        <li>go ahead with spending you had already planned;</li>
        <li>don’t make unplanned purchases just because of the news;</li>
        <li>be suspicious of any “urgent” offer involving Stars, gifts or your account.</li>
      </ul>
      <h2 id="telegramning-rasmiy-sahifalari-bu-xabar">What do Telegram’s official pages say about this news?</h2>
      <p>We compared the claims in the message with Telegram’s moderation, press and FAQ pages. Results are as of 17 November 2026.</p>
      <CompareTable
        headers={["Claim or fact", "Status", "What it means for Stars and Premium holders"]}
        rows={[
          ["The FSB charged Durov with “aiding terrorism” and put him on an international wanted list", "Neither confirmed nor denied on official pages", "Nothing is said about balances or subscriptions"],
          ["Bots and channels linked to Ukrainian intelligence were not blocked", "Not verified", "No link to ordinary users’ accounts shown"],
          ["Durov replied to the charge with a picture on X", "Not found in official sources", "No effect"],
          ["The case in France is ongoing", "Its 2026 status was not found", "No information about balances"],
          ["Telegram says terrorist propaganda has no place on the platform", "Stated on the moderation page", "A platform rule, unrelated to balances"],
          ["30 403 376 groups and channels blocked in 2026", "Published on the moderation page", "Applies to communities that broke the rules"],
          ["199 452 terrorist-related communities blocked in 2026", "Published on the moderation page", "Applies to communities that broke the rules"],
          ["Durov is a UAE and French citizen; the development team is in Dubai", "Stated on the press and FAQ pages", "Background only"],
        ]}
      />
      <p>Telegram’s <a href={"https://telegram.org/moderation"} target="_blank" rel="noopener noreferrer">moderation page</a> says a few more things. Since 2016, the company has published daily reports on removing terrorist content. It says that, together with ETIDAL, it has removed over 200 million pieces of terrorist content, and that Europol has recognized this work. Durov’s citizenship is listed on the <a href={"https://telegram.org/press"} target="_blank" rel="noopener noreferrer">press page</a>, and the team’s location is given in the <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ</a>.</p>
      <p>None of these confirmed facts are about your Stars or your subscription.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} product={{ kind: "stars", amount: 100 }} />
      <h2 id="stars-balansi-va-premium-muddati">Where do your Stars balance and Premium term actually live?</h2>
      <p>Stars and Premium aren’t stored on your phone or in a TON wallet. They’re tied to your Telegram account. If you log in to that account on another device, you’ll see them there too. That also means anyone who takes over your account takes your balance with it.</p>
      <CompareTable
        headers={["Asset", "Tied to", "Depends on", "Real risk"]}
        rows={[
          ["Stars balance", "Your Telegram account", "Access to the account", "Account theft, sending Stars or gifts to a scammer"],
          ["Active Premium", "Account and subscription term", "Access to the account", "Losing the account, scams about “freezing” Premium"],
          ["Regular gift on your profile", "Account", "Your own decision", "Converting it to Stars in a panic"],
          ["NFT gift", "Account, or the wallet if it was withdrawn", "Account or wallet key", "Fake “safekeeping” links, requests for seed phrases"],
        ]}
      />
      <p>Telegram says cloud chat data is stored in multiple data centers around the world and that the decryption keys are split into parts. That statement is about chats. Don’t read it as a separate promise about your balance.</p>
      <p>To confirm your balance is where it should be, see <Link href="/blog/telegram-stars-balansini-tekshirish">how to check your Stars balance</Link>. Withdrawing a collectible gift to a wallet is a separate decision. This news is no reason to do it.</p>
      <h2 id="zaxiradagi-yulduzlar-bilan-nima-qilgan">What should you do with Stars you’ve saved up?</h2>
      <p>The answer depends on why you bought them.</p>
      <ul>
        <li><b>You have planned spending.</b> If you had already planned a channel subscription, an in-bot purchase or a gift for a friend, go ahead. The news doesn’t change that plan.</li>
        <li><b>Your Stars are a reserve.</b> There’s no reason to convert them into something right away. No confirmed method moves your balance somewhere “safer” today.</li>
        <li><b>You want to convert a gift to Stars.</b> Don’t do it out of panic. Before converting, the app shows what will happen in a confirmation window. Read it to the end, then decide.</li>
        <li><b>A buyer shows up in your chats.</b> Don’t sell Stars “cheap” to a stranger. StarsPaymee doesn’t buy Stars or gifts from users, so any such offer made in its name is a sign of fraud.</li>
        <li><b>You want your money back.</b> A refund won’t protect you from bad news. Find out when it actually works in <Link href="/blog/telegram-stars-qaytarib-olish">how to get a Stars refund</Link>.</li>
      </ul>
      <h2 id="premium-faol-bolsa-uzaytirishni-kechiktirish">Should you delay renewing an active Premium?</h2>
      <p>The news is no reason to cancel an active subscription or to rush a renewal.</p>
      <p>Keep StarsPaymee’s rule in mind: the bot won’t open a new Premium order for an account that already has an active subscription, and the new term isn’t added on top of the current one. So first find out when your subscription ends. <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">How to check when Premium expires</Link> shows you where to look. Put the date in your calendar and set a reminder.</p>
      <p><Link href="/blog/telegram-premium-tugasa-nima-boladi">What happens when Premium expires</Link> explains which features switch off and which stay. That tells you ahead of time which features you can manage without for a day or two.</p>
      <p>When it’s time to choose a term, prices are:</p>
      <CompareTable
        headers={["Term", "Price"]}
        rows={[
          ["3 months", `${som(premium(3), "en")}`],
          ["6 months", `${som(premium(6), "en")}`],
          ["12 months", `${som(premium(12), "en")}`],
        ]}
      />
      <p>These prices are the same for every payment method. There’s also a 1-month plan, and its price is shown in the bot. If things feel uncertain to you, you don’t have to commit to a long term: start with a shorter plan and decide later.</p>
      <h2 id="yangi-stars-xaridini-keyinga-surish">Should you put off buying new Stars?</h2>
      <p>Nobody knows how this news will affect the price of Stars. Any claim that prices will rise or fall is a guess. So base your decision on what you need, not on the headlines.</p>
      <CompareTable
        headers={["Situation", "What to do"]}
        rows={[
          ["You need Stars tomorrow for a channel subscription or in-bot purchase", "Buy the amount you need now"],
          ["You planned to send a friend a gift", "Send it as usual"],
          ["You want a big “just in case” reserve", "Don’t overbuy; buy in smaller amounts as you need them"],
          ["You’re waiting for the price to drop", "There’s no forecast: buy if you need Stars, and waiting does no harm if you don’t"],
          ["Someone in a chat offers “cheap Stars because of the news”", "Decline and don’t pay anything"],
        ]}
      />
      <p>Working out what you need is simple. Say you need Stars for two channel subscriptions and one gift this month. Add those up and buy exactly that amount. The minimum order is 50 Stars, so you don’t have to buy a big package.</p>
      <p>The price per Star depends on how you pay. A UzCard/HUMO card transfer or payment from your bot balance costs {som(STARS_PER_UNIT_UZS, "en")}. Click, Payme, Uzum or Paynet costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The bot shows the final amount before you pay.</p>
      <h2 id="durov-mavzusidagi-qaysi-xabarlar-balansni">Which Durov-themed messages try to steal your balance?</h2>
      <p>When news about a famous person spreads, scammers use people’s worry. Their messages usually look something like this:</p>
      <ul>
        <li>“Balances will be checked because of the Durov case. Move your Stars to a wallet, link below.”</li>
        <li>“Balance protection bot: send your code to log in.”</li>
        <li>“We’ll freeze your Premium for now. Tell us the SMS code.”</li>
        <li>“Transfer your gifts to us temporarily, and we’ll return them once things calm down.”</li>
        <li>“Your data has leaked. Verify your account.”</li>
      </ul>
      <p>All of them share one sign: they ask for an SMS code, your 2FA password or your wallet’s seed phrase. StarsPaymee never asks for any of these. All it needs is your @username.</p>
      <p>In its <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">FAQ</a>, Telegram says it has disclosed 0 bytes of user messages to third parties, including governments. That statement is about messages, not balances. It’s still a good reason not to fall for “your data has already leaked” scare tactics.</p>
      <p>How to recognize fake links and bots is covered in detail in <Link href="/blog/telegram-stars-xavfsizmi">Are Telegram Stars safe?</Link>.</p>
      <h2 id="balansni-ogirlanishdan-saqlash-uchun-nimani">What should you set up to protect your balance from theft?</h2>
      <p>These steps take a few minutes, and they protect your balance far better than worrying about the news.</p>
      <Steps>
        <Step title={"Turn on 2FA"}>Telegram says that once two-step verification is on, you need both an SMS code and a password to log in. Setup steps are in <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account from theft</Link>.</Step>
        <Step title={"Review active sessions"}>open the device list in Settings and end any sessions you don’t recognize.</Step>
        <Step title={"Record your balance and Premium date"}>take a screenshot of your Stars balance and your subscription end date. If anything changes later, it’ll be easy to compare.</Step>
        <Step title={"Never share codes"}>not even if someone says it’s for “help,” a “transfer” or a “freeze.”</Step>
        <Step title={"Buy only from a bot you know"}>check the bot’s name letter by letter, because lookalikes that differ by one character do exist.</Step>
      </Steps>
      <h2 id="stars-yoki-premiumni-somda-qanday">How do you buy Stars or Premium safely in soum?</h2>
      <p>If you need to buy, you can pay in soum through the StarsPaymee bot:</p>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Choose a product"}>Stars (at least 50) or a Premium term.</Step>
        <Step title={"Enter the @username"}>your own or a friend’s. No password or SMS code is needed, and Premium is activated through Telegram’s gifting mechanism.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (in the app or with cash at a terminal), a UzCard/HUMO card transfer or your bot balance. You don’t need an international card, a crypto wallet or a VPN.</Step>
        <Step title={"Check the result"}>orders are usually delivered automatically within a few seconds. If something goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details.</Step>
      </Steps>
      <p>StarsPaymee is an independent service that has been running for 1.5 years. It doesn’t speak on Telegram’s behalf. All prices and plans are on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/moderation", label: "Telegram Moderation Overview" },
          { href: "https://telegram.org/press", label: "Telegram Press Info" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If Durov is charged, could Telegram freeze my Stars?", answer: "Telegram hasn’t announced anything like that, and the circulating report doesn’t mention ordinary users’ balances. The real threat to your balance right now is a stranger getting into your account." },
  { question: "Would converting my Stars to TON or Gram now make them safer?", answer: "It doesn’t make your balance safer. It just adds a wallet and a key you have to protect. Who can use this route, and on what terms, isn’t confirmed in this article, so if it wasn’t already your plan, don’t do it out of panic." },
  { question: "Will Stars prices go up or down after this news?", answer: "No one can say for sure, and there’s no confirmed information either way. StarsPaymee’s current per-Star price depends on how you pay and is shown in the bot before you pay." },
  { question: "I have Premium. Should I grab another 12 months before prices change?", answer: "There’s no price forecast, so the news isn’t a reason to buy early. Set a reminder for your subscription’s end date and decide closer to that day." },
  { question: "Can I add time on top of an active Premium through StarsPaymee?", answer: "No. The bot won’t open a new Premium order for an account with an active subscription. Once your current plan ends, you order the term you want separately using your @username." },
  { question: "Someone offers to buy my Stars cheap “because of the Durov case.” Is it legit?", answer: "No. It’s a typical scam that plays on people’s worry: the “buyer” first asks you to transfer Stars or gifts, or to send a code. StarsPaymee doesn’t buy Stars or gifts from users at all." },
  { question: "If I can’t open the app for a while, will my balance still be there?", answer: "Telegram hasn’t issued an official statement about that scenario. What is known is that Stars and Premium are tied to your account, not stored on your phone, so the most important thing is keeping your 2FA password and account access safe." },
  { question: "Is StarsPaymee connected to Durov or Telegram?", answer: "StarsPaymee is an independent service and doesn’t act on Telegram’s behalf. It delivers Stars and Premium for soum using only your @username." },
  { question: "How will I know if my balance has gone down?", answer: "Take a screenshot of your balance today and compare it with what the app shows later. A separate guide walks you through where to find your balance step by step." },
  { question: "What should I do if a bot asks for my SMS code to complete a purchase?", answer: "Don’t share the code and stop the conversation. Buying Stars or Premium only requires your @username. If you’re unsure, check with @StarsPaymeeSupport whether the bot is genuine." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  keywords: ["Durov qidiruv Stars balansi","Durov xalqaro qidiruv Telegram Stars","Durov qidiruvga qo‘yildi Premium","Stars balansini saqlash kerakmi","Telegram yopiladimi Stars","Stars sarflash yoki saqlash","Premium obunani kechiktirish","Дуров розыск Telegram Stars","Дуров в розыске что будет с Telegram Premium","что будет со звёздами Telegram","Дуров ФСБ розыск Telegram баланс"],
  howToSteps: [
    { name: "2FA’ni yoqing", text: "Telegram’ga ko‘ra, ikki bosqichli tekshiruv yoqilgach, akkauntga kirish uchun SMS kod ham, parol ham kerak bo‘ladi. Sozlash tartibi akkauntni o‘g‘irlashdan himoya maqolasida bor." },
    { name: "Faol seanslarni ko‘ring", text: "sozlamalardagi qurilmalar ro‘yxatini oching va tanimagan seanslarni yoping." },
    { name: "Balans va Premium sanasini qayd eting", text: "Stars balansi va obuna tugash sanasining skrinshotini oling. Keyin biror narsa o‘zgarsa, solishtirish oson bo‘ladi." },
    { name: "Kodlarni hech kimga bermang", text: "«yordam», «ko‘chirish» yoki «muzlatish» bahonasi bo‘lsa ham." },
    { name: "Faqat tanish botdan xarid qiling", text: "bot nomini harfma-harf tekshiring, chunki bitta harfi farq qiladigan nusxalar ham uchraydi." },
  ],
  locales: {
    uz: {
      title: "«Durov qidiruvda» xabari: Stars balansi va Premium’ni saqlaymi yoki sarflaymi?",
      excerpt: "Yulduzlarni shoshib sarflash yoki Premium xaridini kechiktirishga asos yo‘q: xabar rasman tasdiqlanmagan, balansga ta’siri e’lon qilinmagan. Ichida da’volar tekshiruvi, firibgar xabarlar va so‘mda xarid tartibi bor.",
      metaTitle: "«Durov qidiruvda» xabari: Stars balansi",
      metaDescription: "Yulduzlarni shoshib sarflash yoki Premium xaridini kechiktirishga asos yo‘q: xabar rasman tasdiqlanmagan, balansga ta’siri e’lon qilinmagan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "«Дуров в розыске»: тратить звёзды и продлевать Premium или подождать?",
      excerpt: "Разбираем, что известно о новости про Дурова и что делать с балансом Stars и подпиской Premium: какие заявления подтверждены, какие сообщения пишут мошенники и как безопасно купить звёзды за сумы.",
      metaTitle: "«Дуров в розыске»: тратить звёзды и продлевать Premium",
      metaDescription: "Разбираем, что известно о новости про Дурова и что делать с балансом Stars и подпиской Premium: какие заявления подтверждены, какие сообщения пишут мошенники…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "“Durov wanted” news: should you keep or spend your Stars and Premium?",
      excerpt: "This news is no reason to rush spending Stars or to delay buying Premium. We check what is confirmed and what isn’t, show scam messages to watch for, and explain how to buy Stars and Premium safely in soum.",
      metaTitle: "“Durov wanted” news: should you keep or spend your Stars",
      metaDescription: "This news is no reason to rush spending Stars or to delay buying Premium. We check what is confirmed and what isn’t, show scam messages to watch for, and…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
