import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "biznes-uchun-stars-kop-miqdorda-tarqatish";

/**
 * Biznes uchun Telegram Stars ko‘p miqdorda: byudjetdan hisobotgacha
 *
 * Avtoblogyoz yasagan maqola (2026-11-23): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kompaniya, agentlik, kanal yoki bot egasi konkurs g'oliblari, xodimlar yoki marketing uchun ko'p odamga Telegram Stars tarqatmoqchi. U «biznes uchun Stars ko'p miqdorda olish», «konkurs g'oliblariga Stars qanday beraman» yoki «ko'p miqdorda Stars olish» deb qidiradi. Byudjetdan hisobotgacha bo'lgan rejali jarayonni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-23):
 *   https://core.telegram.org/api/giveaways
 *   https://telegram.org/blog/giveaways
 *   https://telegram.org/faq_premium
 *   https://fragment.com/premium
 *   https://telegram.org/blog/star-giveaways-iv-in-browser
 *   https://telegram.org/tos/stars
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
  return <p>Ko‘p odamga Stars berishning ikki yo‘li bor. Oluvchilarni Telegram o‘zi aniqlashiga rozi bo‘lsangiz, kanaldagi give-away yetadi. Aniq odamlarni — xodim, mijoz yoki hakamlar tanlagan g‘olibni — taqdirlash kerak bo‘lsa, har birining @username’iga alohida buyurtma qilinadi: so‘mda, <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali. Stars’ni firma akkauntiga yig‘ib, keyin bo‘lib berib bo‘lmaydi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kimga-berasiz-tanlangan-odamlargami-yoki", label: "Kimga berasiz: tanlangan odamlargami yoki obunachilar orasida qur’agami?" },
          { href: "#firma-akkauntidagi-starsni-xodimlarga-otkazsa", label: "Firma akkauntidagi Stars’ni xodimlarga o‘tkazsa bo‘ladimi?" },
          { href: "#byudjetni-somda-qanday-hisoblaysiz", label: "Byudjetni so‘mda qanday hisoblaysiz?" },
          { href: "#username-royxatidagi-xatolarni-tolovdan-oldin", label: "@username ro‘yxatidagi xatolarni to‘lovdan oldin qanday topasiz?" },
          { href: "#starspaymee-botda-onlab-buyurtmani-tartib", label: "@StarsPaymee_bot’da o‘nlab buyurtmani tartib bilan qanday berasiz?" },
          { href: "#kanal-give-awayini-sozlash-bosqichlar", label: "Kanal give-away’ini sozlash: bosqichlar va cheklovlar" },
          { href: "#xodim-va-mijozlarga-nima-mos", label: "Xodim va mijozlarga nima mos: Stars, Premium yoki sovg‘a?" },
          { href: "#marketingda-stars-qaysi-foydalanish-xavfsiz", label: "Marketingda Stars: qaysi foydalanish xavfsiz, qaysi biri qoidaga zid?" },
          { href: "#buxgalteriya-va-rahbariyatga-hisobotni-qanday", label: "Buxgalteriya va rahbariyatga hisobotni qanday tayyorlaysiz?" },
          { href: "#oluvchi-stars-kelmadi-desa-yoki", label: "Oluvchi «Stars kelmadi» desa yoki username xato chiqsa nima qilasiz?" },
        ]}
      />
      <h2 id="kimga-berasiz-tanlangan-odamlargami-yoki">Kimga berasiz: tanlangan odamlargami yoki obunachilar orasida qur’agami?</h2>
      <p>Bu ikki yo‘l bir-birining o‘rnini bosmaydi. Birida oluvchini Telegram aniqlaydi, ikkinchisida ro‘yxatni o‘zingiz tuzasiz.</p>
      <CompareTable
        headers={["Mezon", "Kanaldagi Stars give-away", "@username bo‘yicha buyurtma"]}
        rows={[
          ["G‘olibni kim aniqlaydi", "Telegram", "Siz o‘zingiz"],
          ["Kim o‘tkaza oladi", "Kanal yoki guruh egasi", "Istalgan xaridor, kanali bo‘lmasa ham"],
          ["To‘lov", "Oldindan, Telegram ichida", "So‘mda, har bir buyurtma alohida"],
          ["Stars qanday yetib boradi", "Telegram g‘oliblarga avtomatik tarqatadi", "Bot oluvchining akkauntiga yuboradi"],
          ["Qachon mos", "Obunachilar orasida o‘yin", "Xodim, hamkor, hakamlar aniqlagan g‘olib"],
        ]}
      />
      <p>Telegram blogida yozilishicha, Stars give-away’ni <a href={"https://telegram.org/blog/star-giveaways-iv-in-browser"} target="_blank" rel="noopener noreferrer">kanal va guruh egalari o‘tkaza oladi</a> va u oldindan to‘lanadi. <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">Give-away hujjatiga</a> ko‘ra, Stars’ni g‘oliblar orasida Telegram o‘zi avtomatik tarqatadi. Hujjatda yana bir holat bor: muayyan sharoitda tarqatilmay qolgan Stars tashkilotchiga qaytariladi. Bu sharoitni give-away boshlashdan oldin rasmiy hujjatda o‘qib chiqing.</p>
      <p>@username bo‘yicha buyurtmada faqat oluvchining username’i kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</p>
      <p>Misol: 3 000 obunachisi bor do‘kon kanali «obunachilar orasidan 10 kishi» shartini qo‘ysa, give-away qulay. Shu kanal «oy davomida eng ko‘p xarid qilgan 5 mijoz»ni taqdirlamoqchi bo‘lsa, ularni give-away aniqlay olmaydi. Bunday holatda har biriga alohida buyurtma qilinadi.</p>
      <h2 id="firma-akkauntidagi-starsni-xodimlarga-otkazsa">Firma akkauntidagi Stars’ni xodimlarga o‘tkazsa bo‘ladimi?</h2>
      <p>Ko‘p kompaniyaning birinchi rejasi shunday bo‘ladi: firma akkauntiga 5 000 Stars olinadi, keyin xodimlarga taqsimlanadi. Telegram qoidalari bunga yo‘l qo‘ymaydi.</p>
      <p><a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars shartlarida</a> shaxsiy balansdagi Stars’ni sotish, yechib olish yoki boshqa akkauntga o‘tkazish mumkin emasligi yozilgan. Stars’ni sotishga yoki qayta tarqatishga urinish ham alohida taqiqlangan.</p>
      <p>Amalda bu shuni anglatadi: Stars firma balansiga emas, to‘g‘ridan-to‘g‘ri har bir oluvchining @username’iga olinadi. Har bir odam — alohida buyurtma.</p>
      <Notice label={"Muhim"}>Stars xaridi qaytarilmaydi: shartlarda barcha savdolar yakuniy deb yozilgan. Ro‘yxatni yuborishdan oldin ikki marta tekshiring. Uchinchi tomon orqali olingan Stars bo‘yicha to‘lov masalalari o‘sha tomon bilan hal qilinadi. StarsPaymee buyurtmalari bo‘yicha savollarni <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="byudjetni-somda-qanday-hisoblaysiz">Byudjetni so‘mda qanday hisoblaysiz?</h2>
      <p>Formula oddiy: <b>oluvchilar soni × har biriga beriladigan Stars × bitta Stars narxi</b>.</p>
      <p>Bitta Stars narxi to‘lov usuliga bog‘liq. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan to‘lasangiz — {som(STARS_PER_UNIT_UZS, "uz")}. Click, Payme, Uzum yoki Paynet orqali to‘lasangiz — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Bitta buyurtma eng kami 50 Stars, shuning uchun rejada bir odamga bundan kam miqdor qo‘ymang.</p>
      <CompareTable
        headers={["Ssenariy", "Oluvchilar", "Har biriga", "Jami Stars", "Karta yoki balans bilan", "Click, Payme, Uzum, Paynet bilan"]}
        rows={[
          ["Konkurs g‘oliblari", "10", "50", "500", `500 × ${som(STARS_PER_UNIT_UZS, "uz")}`, `500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Bayramda xodimlarga", "20", "100", "2 000", `2 000 × ${som(STARS_PER_UNIT_UZS, "uz")}`, `2 000 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Eng faol mijozlarga", "5", "500", "2 500", `2 500 × ${som(STARS_PER_UNIT_UZS, "uz")}`, `2 500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
        ]}
      />
      <p>Rejaga Premium ham kirsa, uning narxi to‘lov usuliga qarab o‘zgarmaydi: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. 1 oylik tarif ham bor, uning narxi botda ko‘rsatiladi.</p>
      <p>Bu maqolada ulgurji chegirma yoki kompaniya nomiga hisob-faktura va’da qilinmaydi. Yakuniy summa botda to‘lovdan oldin ko‘rinadi. Joriy narxlar <Link href="/stars">Stars sahifasida</Link> ham bor.</p>
      <p>Byudjetga bir-ikki oluvchiga yetadigan zaxira qo‘shing. Kechikib aniqlangan g‘olib yoki tuzatilgan ro‘yxat uchun qo‘shimcha pul so‘rab yurmaysiz. Bitta oluvchiga buyurtma qilish tartibi <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">Stars’ni boshqa odamga olish</Link> maqolasida batafsil yozilgan.</p>
      <h2 id="username-royxatidagi-xatolarni-tolovdan-oldin">@username ro‘yxatidagi xatolarni to‘lovdan oldin qanday topasiz?</h2>
      <p>Ko‘p buyurtmada eng ko‘p uchraydigan xato — noto‘g‘ri @username. Bitta harf adashsa, Stars boshqa odamga ketishi mumkin. Shuning uchun ro‘yxat pul to‘lanishidan oldin tozalanadi:</p>
      <ul>
        <li><b>Username’ni egasining o‘zidan yozma oling.</b> Ovozli xabar yoki skrinshotdan qayta termang, matnni nusxalab qo‘ying.</li>
        <li><b>Kirill harflarini qidiring.</b> Lotin «o» bilan kirill «о», lotin «a» bilan kirill «а» ko‘rinishda bir xil, lekin username boshqa bo‘lib chiqadi.</li>
        <li><b>Ortiqcha belgilarni olib tashlang:</b> bo‘sh joy, nuqta, oxiridagi vergul, ikki marta yozilgan @.</li>
        <li><b>Har bir username’ni Telegram qidiruvida oching.</b> Ism va avatar ro‘yxatdagi odamga mos kelishini solishtiring.</li>
        <li><b>Shaxsiy akkaunt ekanini tekshiring.</b> Ba’zi g‘oliblar o‘z kanali yoki botining username’ini yuboradi.</li>
        <li><b>Eski username’ga ehtiyot bo‘ling.</b> Odam nomini yaqinda o‘zgartirgan bo‘lsa, eski nom boshqa egaga o‘tgan bo‘lishi mumkin.</li>
        <li><b>Username’i yo‘q odamdan uni qo‘yishni so‘rang.</b> Qayerdan topish va qanday qo‘yish <Link href="/blog/telegram-stars-username-qanday-topiladi">username qanday topiladi</Link> maqolasida bor.</li>
        <li><b>Ro‘yxatni ikkinchi odam mustaqil tekshirsin.</b> Stars qaytarilmagani uchun bu besh daqiqalik tekshiruv o‘zini oqlaydi.</li>
      </ul>
      <p>Ish jadvali uchun beshta ustun yetadi: tartib raqami, @username, ism, Stars miqdori va holat («tekshirildi», «yuborildi», «tasdiqlandi»).</p>
      <h2 id="starspaymee-botda-onlab-buyurtmani-tartib">@StarsPaymee_bot’da o‘nlab buyurtmani tartib bilan qanday berasiz?</h2>
      <Steps>
        <Step title={"Jadvalni oching"}>ikki kishi tekshirgan ro‘yxat ko‘z oldingizda tursin.</Step>
        <Step title={"Botga kiring"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’i.</Step>
        <Step title={"Oluvchi va miqdorni kiriting"}>jadvaldan bitta @username’ni nusxalab qo‘ying va kamida 50 Stars tanlang.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</Step>
        <Step title={"Yetkazilganini belgilang"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetadi. Buyurtma raqamini jadvalga yozing, holatni «yuborildi» qiling.</Step>
        <Step title={"Keyingi qatorga o‘ting"}>oldingi buyurtma yopilmaguncha yangisini boshlamang.</Step>
      </Steps>
      <p>Bitta buyurtmaga nechta oluvchi sig‘ishi bu maqolada tasdiqlanmagan, buni botda tekshiring. Eng xavfsiz tartib: bitta qator — bitta buyurtma.</p>
      <p>Ro‘yxat uzun bo‘lsa, buyurtmalarni bot balansidan to‘lash qulay bo‘lishi mumkin: balansdan to‘lovda bitta Stars {som(STARS_PER_UNIT_UZS, "uz")} turadi. Balans qanday to‘ldirilishini botda ko‘ring.</p>
      <h2 id="kanal-give-awayini-sozlash-bosqichlar">Kanal give-away’ini sozlash: bosqichlar va cheklovlar</h2>
      <p><a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">Give-away hujjatiga</a> ko‘ra, kanal yoki superguruh admini qanday huquqlarga ega bo‘lishidan qat’i nazar give-away boshlay oladi. Asosiy bosqichlar:</p>
      <Steps>
        <Step title={"Sovrinni belgilang"}>Premium give-away’da obunalar soni va muddati, Stars give-away’da tarqatiladigan Stars miqdori ko‘rsatiladi.</Step>
        <Step title={"Oldindan to‘lang"}>Telegram blogida Premium give-away uchun <a href={"https://telegram.org/blog/giveaways"} target="_blank" rel="noopener noreferrer">oldindan to‘lanishi</a>, Stars give-away ham oldindan to‘lanishi yozilgan. <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">Fragment’da</a> kanal obunachilariga Premium sovg‘a qilish imkoni ham bor.</Step>
        <Step title={"Ishtirokchilarni cheklang"}>kerak bo‘lsa, mamlakatlar ro‘yxatini kiriting yoki faqat give-away boshlangandan keyin obuna bo‘lganlarni qatnashtiring.</Step>
        <Step title={"Qo‘shimcha shart qo‘shing"}>ishtirokchidan boshqa kanal yoki guruhga ham a’zo bo‘lishni talab qilish mumkin.</Step>
        <Step title={"Tugash sanasini qo‘ying"}>bu majburiy maydon.</Step>
        <Step title={"Natijani kuting"}>Premium give-away’da g‘oliblarni Telegram tasodifiy tanlaydi va ular sovg‘a kodi yozilgan havola oladi. Stars give-away’da Stars g‘oliblarga avtomatik tarqatiladi.</Step>
      </Steps>
      <p>Kanal egasi uchun qo‘shimcha foyda bor. <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">Premium FAQ’ga</a> ko‘ra, give-away o‘tkazgan kanal 4 ta boostning hammasini darhol oladi. Telegram blogida kattaroq Stars give-away’ni arzonroq narxda yaratish mumkinligi aytilgan. G‘oliblar olgan Stars’ni pullik media va kanallardagi eksklyuziv obunalarga sarflashi mumkin.</p>
      <p>Cheklovi ham bor: g‘olibni o‘zingiz tayinlay olmaysiz. Hakamlar tanlagan yoki ishi uchun taqdirlanadigan odamga sovrin bermoqchi bo‘lsangiz, @username bo‘yicha buyurtmaga qayting.</p>
      <h2 id="xodim-va-mijozlarga-nima-mos">Xodim va mijozlarga nima mos: Stars, Premium yoki sovg‘a?</h2>
      <CompareTable
        headers={["Mezon", "Stars", "Premium", "Telegram sovg‘asi"]}
        rows={[
          ["Qachon mos", "Konkurs sovrini, bir martalik rag‘bat", "Telegram’dan ko‘p foydalanadigan jamoa a’zosi", "Bayram tabrigi, esdalik"],
          ["Narx", "To‘lov usuliga bog‘liq", "3, 6, 12 oy — hamma usulda bir xil", "Botda ko‘rsatiladi"],
          ["Bot orqali cheklov", "Bitta buyurtma kamida 50 Stars", "Faol obunasi bor akkauntga ochilmaydi", "Sotuvdan olingan limited sovg‘alar yuborilmaydi"],
          ["Batafsil", <span key="r3c1"><Link href="/stars">Stars</Link></span>, <span key="r3c2"><Link href="/premium">Premium</Link></span>, <span key="r3c3"><Link href="/gifts">Sovg‘alar</Link></span>],
        ]}
      />
      <p>Premium FAQ’ga ko‘ra, Premium 3, 6 yoki 12 oyga sovg‘a qilinadi. Sovg‘a obunalar global narxda hisoblangani uchun istalgan mamlakatdagi odamga yuboriladi — chet eldagi hamkorga ham.</p>
      <p>Premium bo‘yicha bitta istisno bor: faol obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi, muddat eski obuna ustiga qo‘shilmaydi. Ro‘yxatda shunday xodim bo‘lsa, unga Stars yoki sovg‘a rejalang.</p>
      <p>Sovg‘alarda ham cheklov bor: Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Tayyor kolleksion (NFT) sovg‘alar botdagi NFT Market’da turadi.</p>
      <h2 id="marketingda-stars-qaysi-foydalanish-xavfsiz">Marketingda Stars: qaysi foydalanish xavfsiz, qaysi biri qoidaga zid?</h2>
      <p>Marketingda Stars’ni ikki xil xavfsiz ishlatish mumkin. Birinchisi — kanal give-away’i: obunachilar orasida o‘yin o‘tkazasiz, kanal esa boost oladi. Ikkinchisi — sodiq mijozlar yoki hamkorlarni @username bo‘yicha alohida taqdirlash: masalan, chorak oxirida eng faol 5 mijozga 500 Stars’dan.</p>
      <p>Stars bilan reklama yoki taklif qilingan postlar haqida bu maqolada tasdiqlangan ma’lumot yo‘q. Bunday kampaniyani rejalashdan oldin Telegram’ning rasmiy sahifalarini tekshiring.</p>
      <p>Qayta sotish masalasi aniq. Telegram Stars shartlari Stars’ni sotish va qayta tarqatishni taqiqlaydi, balansdan boshqa akkauntga o‘tkazishni ham man qiladi. Shuning uchun o‘z botingizda «Stars sotish» modelini qurishni tavsiya qilmaymiz.</p>
      <p>Bot egasi Stars’ni o‘z mahsuloti yoki xizmati uchun to‘lov sifatida qabul qilishi — alohida mavzu. U qanday ulanishi <Link href="/blog/telegram-stars-api-nima-ulanish">Telegram Stars API nima</Link> maqolasida yoritilgan, shartlarini esa <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">core.telegram.org</a> va Telegram hujjatlarida tekshiring.</p>
      <Notice label={"Muhim"}>StarsPaymee bo‘yicha API, ulgurji shartlar yoki maxsus kelishuv bu maqolada va’da qilinmaydi. Savol bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing. Kompaniya profilini tayyorlash uchun <Link href="/blog/telegram-biznes-akkaunt-ochish">Telegram biznes akkaunti</Link> qo‘llanmasini ko‘ring.</Notice>
      <h2 id="buxgalteriya-va-rahbariyatga-hisobotni-qanday">Buxgalteriya va rahbariyatga hisobotni qanday tayyorlaysiz?</h2>
      <p>Tarqatish tugagach, «kimga, qachon, qancha?» degan savol albatta chiqadi. Har bir buyurtma bo‘yicha quyidagilarni yozib boring:</p>
      <CompareTable
        headers={["Maydon", "Nima yoziladi", "Nega kerak"]}
        rows={[
          ["Buyurtma raqami", "Botdagi buyurtma ID’si", "Muammo bo‘lsa supportga birinchi shu beriladi"],
          ["Sana va vaqt", "Buyurtma qilingan payt", "Oluvchi bilan solishtirish uchun"],
          ["Oluvchi", "@username va ism", "Kimga ketganini ko‘rsatadi"],
          ["Miqdor", "Stars soni yoki Premium muddati", "Byudjet bilan solishtirish"],
          ["To‘lov", "Usul va summa", "Qaysi narx qo‘llanganini ko‘rsatadi"],
          ["Chek", "Ilova cheki yoki skrinshot", "Xarajatni tasdiqlaydi"],
          ["Mas’ul", "Buyurtma qilgan xodim", "Savol kimga berilishi aniq bo‘ladi"],
        ]}
      />
      <p>Give-away bo‘lsa, e’lon posti havolasini, tugash sanasini va natijalar postini ham saqlang.</p>
      <p>Oxirida bir sahifalik jamlanma tuzing: rejalangan va haqiqatda sarflangan summa, Stars olgan oluvchilar soni, olmay qolganlar va sababi. Keyingi konkursda byudjetni shu jamlanmaga qarab aniqroq rejalaysiz.</p>
      <h2 id="oluvchi-stars-kelmadi-desa-yoki">Oluvchi «Stars kelmadi» desa yoki username xato chiqsa nima qilasiz?</h2>
      <ul>
        <li><b>Avval oluvchining balansini tekshirtiring.</b> Ba’zan Stars kelgan bo‘ladi, odam uni qayerdan ko‘rishni bilmaydi. Tartib <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmasa nima qilish</Link> maqolasida bor.</li>
        <li><b>Buyurtma raqami va chek bilan supportga yozing:</b> <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Jadvaldagi qatorni ham ilova qiling.</li>
        <li><b>Xato, lekin mavjud username’ga ketgan Stars’ni qaytarish kafolatlanmaydi.</b> Telegram shartlariga ko‘ra Stars xaridi qaytarilmaydi, balansdan boshqa akkauntga o‘tkazib ham bo‘lmaydi.</li>
        <li><b>Yo‘qotishni zaxiradan qoplang.</b> Shu sababli byudjetga zaxira qo‘yiladi. Keyingi safar ro‘yxatni ikki kishi tekshirsin, username esa faqat nusxalab qo‘yilsin.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/giveaways", label: "Giveaways and gifts" },
          { href: "https://telegram.org/blog/giveaways", label: "Giveaways in Channels and Free Premium" },
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://fragment.com/premium", label: "Fragment – Telegram Premium" },
          { href: "https://telegram.org/blog/star-giveaways-iv-in-browser", label: "Star Giveaways and More" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Kompaniya akkauntiga Stars yig‘ib, xodimlarga keyinroq taqsimlasak bo‘ladimi?", answer: "Yo‘q. Telegram shartlari shaxsiy balansdagi Stars’ni boshqa akkauntga o‘tkazishni taqiqlaydi. Har bir xodimning @username’iga alohida buyurtma qiling." },
  { question: "1 000 Stars’ni 40 kishiga 25 tadan bo‘lsak bo‘ladimi?", answer: "Botda bitta buyurtma kamida 50 Stars bo‘ladi, shuning uchun 1 000 Stars ko‘pi bilan 20 kishiga yetadi. 40 kishiga har biriga 50 tadan berish uchun 2 000 Stars rejalang." },
  { question: "Ko‘p buyurtma uchun alohida chegirma bormi?", answer: `Ulgurji chegirma e’lon qilinmagan. Narx to‘lov usuliga qarab belgilanadi: karta o‘tkazmasi yoki balansdan ${som(STARS_PER_UNIT_UZS, "uz")}, onlayn to‘lovda ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.` },
  { question: "Xodimga Stars yuborish uchun uning telefon raqami yoki paroli kerakmi?", answer: "Kerak emas, faqat @username yetadi. Kimdir sovrin bahonasida SMS kod yoki parol so‘rasa, bu aldov belgisi." },
  { question: "Hakamlar tanlagan g‘olibni kanal give-away’i orqali taqdirlasa bo‘ladimi?", answer: "Yo‘q, give-away g‘oliblarini Telegram aniqlaydi. Aniq odamni taqdirlash uchun uning @username’iga alohida buyurtma qiling." },
  { question: "Give-away’ni faqat O‘zbekistondagi obunachilar uchun qilsa bo‘ladimi?", answer: "Ha, ishtirokchilarni mamlakatlar ro‘yxati bilan cheklash mumkin. Ro‘yxatga nechta mamlakat sig‘ishi hujjatda aniq son bilan berilmagan." },
  { question: "Xodimda Premium allaqachon bor bo‘lsa, unga nima yuborgan ma’qul?", answer: "Faol obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi. Unga Stars yoki Telegram sovg‘asi bering yoki obunasi tugagach Premium yuboring." },
  { question: "Paynet terminalida naqd pul bilan to‘lasam bo‘ladimi?", answer: `Ha, Paynet ilovasi yoki terminali orqali naqd to‘lash mumkin. Bunda bitta Stars ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi, chekni hisobot uchun saqlang.` },
  { question: "Buxgalteriya uchun qaysi hujjatni saqlab qo‘yish kerak?", answer: "Buyurtma raqami, sanasi, oluvchisi, summasi va to‘lov cheki yetarli. Kompaniya nomiga hisob-faktura berilishi tasdiqlanmagan, bu haqda supportdan oldindan so‘rang." },
  { question: "O‘z botimda Stars sotib, StarsPaymee’dan to‘ldirib tursam bo‘ladimi?", answer: "Tavsiya qilmaymiz: Telegram Stars shartlari Stars’ni sotish va qayta tarqatishni taqiqlaydi. Botda o‘z xizmatingiz uchun Stars qabul qilish alohida mavzu, uning shartlarini Telegram hujjatlarida tekshiring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Раздать Stars многим людям можно двумя способами. Если вас устраивает, что получателей выберет сам Telegram, хватит розыгрыша в канале. Если нужно наградить конкретных людей — сотрудников, клиентов или победителя, выбранного жюри, — на @username каждого оформляется отдельный заказ в сумах через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Собрать Stars на аккаунте фирмы и потом раздать их нельзя.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kimga-berasiz-tanlangan-odamlargami-yoki", label: "Кому дарите: выбранным людям или случайным подписчикам?" },
          { href: "#firma-akkauntidagi-starsni-xodimlarga-otkazsa", label: "Можно ли перевести Stars с аккаунта фирмы сотрудникам?" },
          { href: "#byudjetni-somda-qanday-hisoblaysiz", label: "Как посчитать бюджет в сумах?" },
          { href: "#username-royxatidagi-xatolarni-tolovdan-oldin", label: "Как найти ошибки в списке @username до оплаты?" },
          { href: "#starspaymee-botda-onlab-buyurtmani-tartib", label: "Как по порядку оформить десятки заказов в @StarsPaymee_bot?" },
          { href: "#kanal-give-awayini-sozlash-bosqichlar", label: "Настройка розыгрыша в канале: этапы и ограничения" },
          { href: "#xodim-va-mijozlarga-nima-mos", label: "Что подойдёт сотрудникам и клиентам: Stars, Premium или подарок?" },
          { href: "#marketingda-stars-qaysi-foydalanish-xavfsiz", label: "Stars в маркетинге: что безопасно, а что нарушает правила?" },
          { href: "#buxgalteriya-va-rahbariyatga-hisobotni-qanday", label: "Как подготовить отчёт для бухгалтерии и руководства?" },
          { href: "#oluvchi-stars-kelmadi-desa-yoki", label: "Что делать, если получатель говорит «Stars не пришли» или username оказался ошибочным?" },
        ]}
      />
      <h2 id="kimga-berasiz-tanlangan-odamlargami-yoki">Кому дарите: выбранным людям или случайным подписчикам?</h2>
      <p>Эти способы не заменяют друг друга. В первом случае получателя определяет Telegram, во втором список составляете вы сами.</p>
      <CompareTable
        headers={["Критерий", "Розыгрыш Stars в канале", "Заказ по @username"]}
        rows={[
          ["Кто определяет победителя", "Telegram", "Вы сами"],
          ["Кто может провести", "Владелец канала или группы", "Любой покупатель, даже без канала"],
          ["Оплата", "Заранее, внутри Telegram", "В сумах, за каждый заказ отдельно"],
          ["Как Stars доходят до получателя", "Telegram автоматически распределяет их между победителями", "Бот отправляет их на аккаунт получателя"],
          ["Когда подходит", "Конкурс среди подписчиков", "Сотрудник, партнёр, победитель по решению жюри"],
        ]}
      />
      <p>В блоге Telegram сказано, что розыгрыш Stars могут проводить <a href={"https://telegram.org/blog/star-giveaways-iv-in-browser"} target="_blank" rel="noopener noreferrer">владельцы каналов и групп</a> и оплачивается он заранее. По <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">документации о розыгрышах</a>, Telegram сам автоматически распределяет Stars между победителями. Там же описан ещё один случай: при определённых условиях нераспределённые Stars возвращаются организатору. Прочитайте эти условия в официальной документации до запуска розыгрыша.</p>
      <p>Для заказа по @username нужен только username получателя. Пароль, код из SMS и доступ к аккаунту не запрашиваются.</p>
      <p>Пример: у канала магазина 3 000 подписчиков. Если условие звучит как «10 человек среди подписчиков», удобен розыгрыш. Если же магазин хочет наградить «5 клиентов, которые больше всех купили за месяц», розыгрыш их не определит. Тогда каждому оформляется отдельный заказ.</p>
      <h2 id="firma-akkauntidagi-starsni-xodimlarga-otkazsa">Можно ли перевести Stars с аккаунта фирмы сотрудникам?</h2>
      <p>Первый план многих компаний выглядит так: купить 5 000 Stars на аккаунт фирмы, а потом раздать сотрудникам. Правила Telegram этого не позволяют.</p>
      <p>В <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">условиях Telegram Stars</a> написано, что Stars с личного баланса нельзя продавать, выводить или переводить на другой аккаунт. Отдельно запрещены и попытки продавать или перераспределять Stars.</p>
      <p>На практике это значит, что Stars покупаются не на баланс фирмы, а сразу на @username каждого получателя. Один человек — один заказ.</p>
      <Notice label={"Важно"}>Покупка Stars не возвращается: в условиях все продажи названы окончательными. Перед отправкой проверьте список дважды. Вопросы по оплате Stars, купленных через третью сторону, решаются с этой стороной. По заказам StarsPaymee пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="byudjetni-somda-qanday-hisoblaysiz">Как посчитать бюджет в сумах?</h2>
      <p>Формула простая: <b>число получателей × Stars на каждого × цена одной Stars</b>.</p>
      <p>Цена одной Stars зависит от способа оплаты. Переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}. Через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars, поэтому не закладывайте одному человеку меньше.</p>
      <CompareTable
        headers={["Сценарий", "Получателей", "Каждому", "Всего Stars", "Картой или с баланса", "Через Click, Payme, Uzum, Paynet"]}
        rows={[
          ["Победители конкурса", "10", "50", "500", `500 × ${som(STARS_PER_UNIT_UZS, "ru")}`, `500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Сотрудникам к празднику", "20", "100", "2 000", `2 000 × ${som(STARS_PER_UNIT_UZS, "ru")}`, `2 000 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Самым активным клиентам", "5", "500", "2 500", `2 500 × ${som(STARS_PER_UNIT_UZS, "ru")}`, `2 500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
        ]}
      />
      <p>Если в план входит Premium, его цена от способа оплаты не зависит: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена указана в боте.</p>
      <p>Оптовых скидок и счёта-фактуры на компанию эта статья не обещает. Итоговая сумма видна в боте до оплаты. Актуальные цены есть и на <Link href="/stars">странице Stars</Link>.</p>
      <p>Добавьте в бюджет запас на одного-двух получателей. Тогда не придётся заново согласовывать деньги ради победителя, определённого с опозданием, или исправленного списка. Как оформить заказ на одного получателя, подробно описано в статье <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">как купить Stars другому человеку</Link>.</p>
      <h2 id="username-royxatidagi-xatolarni-tolovdan-oldin">Как найти ошибки в списке @username до оплаты?</h2>
      <p>Самая частая ошибка при большом числе заказов — неверный @username. Одна неправильная буква — и Stars могут уйти другому человеку. Поэтому список вычищают до того, как платить:</p>
      <ul>
        <li><b>Берите username у владельца в письменном виде.</b> Не перепечатывайте его с голосового сообщения или скриншота — копируйте текст.</li>
        <li><b>Ищите кириллицу.</b> Латинская «o» и кириллическая «о», латинская «a» и кириллическая «а» выглядят одинаково, но username получается другим.</li>
        <li><b>Убирайте лишние символы:</b> пробелы, точки, запятую в конце, двойной @.</li>
        <li><b>Открывайте каждый username в поиске Telegram.</b> Сверьте имя и аватар с человеком из списка.</li>
        <li><b>Проверяйте, что это личный аккаунт.</b> Некоторые победители присылают username своего канала или бота.</li>
        <li><b>Осторожнее со старыми username.</b> Если человек недавно сменил имя, старое могло перейти к другому владельцу.</li>
        <li><b>Попросите человека без username его завести.</b> Где его найти и как установить — в статье <Link href="/blog/telegram-stars-username-qanday-topiladi">как узнать свой username</Link>.</li>
        <li><b>Пусть список независимо проверит второй человек.</b> Stars не возвращаются, так что пять минут на проверку себя окупают.</li>
      </ul>
      <p>Для рабочей таблицы хватит пяти столбцов: порядковый номер, @username, имя, количество Stars и статус («проверено», «отправлено», «подтверждено»).</p>
      <h2 id="starspaymee-botda-onlab-buyurtmani-tartib">Как по порядку оформить десятки заказов в @StarsPaymee_bot?</h2>
      <Steps>
        <Step title={"Откройте таблицу"}>список, проверенный двумя людьми, должен быть перед глазами.</Step>
        <Step title={"Зайдите в бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Укажите получателя и количество"}>скопируйте из таблицы один @username и выберите не меньше 50 Stars.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота. Зарубежная карта, криптокошелёк и VPN не нужны.</Step>
        <Step title={"Отметьте доставку"}>заказ обычно приходит автоматически за несколько секунд, примерно за 5. Запишите номер заказа в таблицу и поставьте статус «отправлено».</Step>
        <Step title={"Переходите к следующей строке"}>не начинайте новый заказ, пока не закрыт предыдущий.</Step>
      </Steps>
      <p>Сколько получателей помещается в один заказ, в этой статье не подтверждено — проверьте в боте. Самый безопасный порядок: одна строка — один заказ.</p>
      <p>Если список длинный, заказы может быть удобно оплачивать с баланса бота: при оплате с баланса одна Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}. Как пополнить баланс, смотрите в боте.</p>
      <h2 id="kanal-give-awayini-sozlash-bosqichlar">Настройка розыгрыша в канале: этапы и ограничения</h2>
      <p>По <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">документации о розыгрышах</a>, запустить розыгрыш может администратор канала или супергруппы с любым набором прав. Основные этапы:</p>
      <Steps>
        <Step title={"Определите приз"}>в розыгрыше Premium указываются количество и срок подписок, в розыгрыше Stars — сколько Stars будет распределено.</Step>
        <Step title={"Оплатите заранее"}>в блоге Telegram сказано, что розыгрыш Premium <a href={"https://telegram.org/blog/giveaways"} target="_blank" rel="noopener noreferrer">оплачивается заранее</a>; розыгрыш Stars тоже предоплаченный. На <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">Fragment</a> также можно подарить Premium подписчикам канала.</Step>
        <Step title={"Ограничьте участников"}>при необходимости задайте список стран или допустите только тех, кто подписался после старта розыгрыша.</Step>
        <Step title={"Добавьте условие"}>можно потребовать от участника подписаться и на другие каналы или группы.</Step>
        <Step title={"Укажите дату окончания"}>это обязательное поле.</Step>
        <Step title={"Дождитесь итогов"}>в розыгрыше Premium победителей случайно выбирает Telegram, и они получают ссылку с подарочным кодом. В розыгрыше Stars звёзды распределяются между победителями автоматически.</Step>
      </Steps>
      <p>Для владельца канала есть дополнительная выгода. Согласно <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">FAQ по Premium</a>, канал, который провёл розыгрыш, сразу получает все 4 буста. В блоге Telegram сказано, что более крупный розыгрыш Stars можно создать по более низкой цене. Полученные Stars победители могут тратить на платный медиаконтент и эксклюзивные подписки в каналах.</p>
      <p>Есть и ограничение: назначить победителя самостоятельно нельзя. Если приз должен получить человек, выбранный жюри или награждаемый за работу, возвращайтесь к заказу по @username.</p>
      <h2 id="xodim-va-mijozlarga-nima-mos">Что подойдёт сотрудникам и клиентам: Stars, Premium или подарок?</h2>
      <CompareTable
        headers={["Критерий", "Stars", "Premium", "Подарок Telegram"]}
        rows={[
          ["Когда подходит", "Приз конкурса, разовое поощрение", "Член команды, который много пользуется Telegram", "Поздравление с праздником, памятный знак"],
          ["Цена", "Зависит от способа оплаты", "3, 6, 12 месяцев — одинаково при любом способе", "Указана в боте"],
          ["Ограничение при заказе через бот", "Минимум 50 Stars в заказе", "Не оформляется на аккаунт с активной подпиской", "Снятые с продажи лимитированные подарки не отправляются"],
          ["Подробнее", <span key="r3c1"><Link href="/stars">Stars</Link></span>, <span key="r3c2"><Link href="/premium">Premium</Link></span>, <span key="r3c3"><Link href="/gifts">Подарки</Link></span>],
        ]}
      />
      <p>Согласно FAQ по Premium, подписку дарят на 3, 6 или 12 месяцев. Подарочные подписки считаются по глобальному тарифу, поэтому их можно отправить человеку в любой стране — в том числе партнёру за рубежом.</p>
      <p>С Premium есть одно исключение: на аккаунт с активной подпиской бот не оформляет новый заказ Premium, и срок не прибавляется к текущей подписке. Если в списке есть такой сотрудник, запланируйте для него Stars или подарок.</p>
      <p>С подарками тоже есть ограничение: лимитированные подарки, снятые Telegram с продажи, боты отправлять не могут. Готовые коллекционные (NFT) подарки — в NFT Market внутри бота.</p>
      <h2 id="marketingda-stars-qaysi-foydalanish-xavfsiz">Stars в маркетинге: что безопасно, а что нарушает правила?</h2>
      <p>В маркетинге Stars можно безопасно использовать двумя способами. Первый — розыгрыш в канале: вы проводите конкурс среди подписчиков, а канал получает бусты. Второй — отдельно награждать лояльных клиентов или партнёров по @username: например, по 500 Stars пяти самым активным клиентам в конце квартала.</p>
      <p>Подтверждённых данных о рекламе или продвигаемых постах за Stars в этой статье нет. Прежде чем планировать такую кампанию, проверьте официальные страницы Telegram.</p>
      <p>С перепродажей всё однозначно. Условия Telegram Stars запрещают продавать и перераспределять Stars, а также переводить их с баланса на другой аккаунт. Поэтому строить в своём боте модель «продажи Stars» мы не советуем.</p>
      <p>Приём Stars владельцем бота в качестве оплаты за собственный товар или услугу — отдельная тема. Как это подключается, описано в статье <Link href="/blog/telegram-stars-api-nima-ulanish">что такое Telegram Stars API</Link>, а условия проверяйте на <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">core.telegram.org</a> и в документации Telegram.</p>
      <Notice label={"Важно"}>API, оптовые условия или индивидуальные договорённости со StarsPaymee в этой статье не обещаются. Если есть вопросы, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Чтобы подготовить профиль компании, загляните в руководство по <Link href="/blog/telegram-biznes-akkaunt-ochish">бизнес-аккаунту в Telegram</Link>.</Notice>
      <h2 id="buxgalteriya-va-rahbariyatga-hisobotni-qanday">Как подготовить отчёт для бухгалтерии и руководства?</h2>
      <p>Когда раздача закончится, обязательно возникнет вопрос «кому, когда и сколько?». По каждому заказу записывайте следующее:</p>
      <CompareTable
        headers={["Поле", "Что записать", "Зачем"]}
        rows={[
          ["Номер заказа", "ID заказа в боте", "При проблеме его первым передают в поддержку"],
          ["Дата и время", "Момент оформления заказа", "Для сверки с получателем"],
          ["Получатель", "@username и имя", "Показывает, кому ушло"],
          ["Количество", "Число Stars или срок Premium", "Сверка с бюджетом"],
          ["Оплата", "Способ и сумма", "Показывает, какая цена применилась"],
          ["Чек", "Чек из приложения или скриншот", "Подтверждает расход"],
          ["Ответственный", "Сотрудник, оформивший заказ", "Понятно, кому задавать вопросы"],
        ]}
      />
      <p>Если был розыгрыш, сохраните также ссылку на пост с анонсом, дату окончания и пост с итогами.</p>
      <p>В конце составьте сводку на одну страницу: запланированная и фактически потраченная сумма, сколько получателей получили Stars, кто не получил и почему. По этой сводке следующий конкурс вы спланируете точнее.</p>
      <h2 id="oluvchi-stars-kelmadi-desa-yoki">Что делать, если получатель говорит «Stars не пришли» или username оказался ошибочным?</h2>
      <ul>
        <li><b>Сначала попросите получателя проверить баланс.</b> Иногда Stars уже пришли, просто человек не знает, где их посмотреть. Порядок действий — в статье <Link href="/blog/telegram-stars-kelmadi-nima-qilish">что делать, если Stars не пришли</Link>.</li>
        <li><b>Напишите в поддержку с номером заказа и чеком:</b> <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Приложите и строку из таблицы.</li>
        <li><b>Возврат Stars, ушедших на ошибочный, но существующий username, не гарантируется.</b> По условиям Telegram покупка Stars не возвращается, а перевести их с баланса на другой аккаунт нельзя.</li>
        <li><b>Покройте потерю из запаса.</b> Именно для этого в бюджет закладывается резерв. В следующий раз пусть список проверяют двое, а username только копируется.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/giveaways", label: "Giveaways and gifts" },
          { href: "https://telegram.org/blog/giveaways", label: "Giveaways in Channels and Free Premium" },
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://fragment.com/premium", label: "Fragment – Telegram Premium" },
          { href: "https://telegram.org/blog/star-giveaways-iv-in-browser", label: "Star Giveaways and More" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли собрать Stars на аккаунте компании и раздать сотрудникам позже?", answer: "Нет. Условия Telegram запрещают переводить Stars с личного баланса на другой аккаунт. Оформляйте отдельный заказ на @username каждого сотрудника." },
  { question: "Можно ли разделить 1 000 Stars на 40 человек по 25 штук?", answer: "В боте один заказ — минимум 50 Stars, поэтому 1 000 Stars хватит максимум на 20 человек. Чтобы дать 40 людям по 50 штук, закладывайте 2 000 Stars." },
  { question: "Есть ли отдельная скидка на большое количество заказов?", answer: `Оптовая скидка не объявлена. Цена зависит от способа оплаты: переводом на карту или с баланса — ${som(STARS_PER_UNIT_UZS, "ru")}, онлайн-оплатой — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.` },
  { question: "Нужен ли номер телефона или пароль сотрудника, чтобы отправить ему Stars?", answer: "Не нужен, достаточно @username. Если кто-то под предлогом приза просит код из SMS или пароль, это признак мошенничества." },
  { question: "Можно ли наградить победителя, выбранного жюри, через розыгрыш в канале?", answer: "Нет, победителей розыгрыша определяет Telegram. Чтобы наградить конкретного человека, оформите отдельный заказ на его @username." },
  { question: "Можно ли провести розыгрыш только для подписчиков из Узбекистана?", answer: "Да, участников можно ограничить списком стран. Сколько стран помещается в список, в документации точным числом не указано." },
  { question: "Что лучше подарить сотруднику, у которого уже есть Premium?", answer: "На аккаунт с активной подпиской бот новый заказ Premium не оформляет. Подарите ему Stars или подарок Telegram либо отправьте Premium, когда подписка закончится." },
  { question: "Можно ли заплатить наличными через терминал Paynet?", answer: `Да, наличными можно оплатить через приложение или терминал Paynet. В этом случае одна Stars стоит ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}, а чек стоит сохранить для отчёта.` },
  { question: "Какие документы сохранить для бухгалтерии?", answer: "Достаточно номера заказа, даты, получателя, суммы и чека об оплате. Выдача счёта-фактуры на компанию не подтверждена — уточните это в поддержке заранее." },
  { question: "Можно ли продавать Stars в своём боте и пополнять запас через StarsPaymee?", answer: "Не советуем: условия Telegram Stars запрещают продавать и перераспределять Stars. Приём Stars за собственные услуги в боте — отдельная тема, её условия проверяйте в документации Telegram." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You can give Stars to many people in two ways. If Telegram can pick the recipients for you, a channel giveaway is enough. If you’re rewarding specific people, such as employees, customers or a winner chosen by judges, place a separate order for each @username. You pay in som through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. You can’t collect Stars on a company account and hand them out later.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kimga-berasiz-tanlangan-odamlargami-yoki", label: "Who gets the Stars: people you choose, or a draw among subscribers?" },
          { href: "#firma-akkauntidagi-starsni-xodimlarga-otkazsa", label: "Can you move Stars from a company account to employees?" },
          { href: "#byudjetni-somda-qanday-hisoblaysiz", label: "How do you work out the budget in som?" },
          { href: "#username-royxatidagi-xatolarni-tolovdan-oldin", label: "How do you catch @username mistakes before you pay?" },
          { href: "#starspaymee-botda-onlab-buyurtmani-tartib", label: "How do you place dozens of orders in @StarsPaymee_bot without mix-ups?" },
          { href: "#kanal-give-awayini-sozlash-bosqichlar", label: "Setting up a channel giveaway: steps and limits" },
          { href: "#xodim-va-mijozlarga-nima-mos", label: "What suits staff and customers best: Stars, Premium or a gift?" },
          { href: "#marketingda-stars-qaysi-foydalanish-xavfsiz", label: "Stars in marketing: what’s safe, and what breaks the rules?" },
          { href: "#buxgalteriya-va-rahbariyatga-hisobotni-qanday", label: "How do you prepare a report for accounting and management?" },
          { href: "#oluvchi-stars-kelmadi-desa-yoki", label: "What if a recipient says “the Stars didn’t arrive,” or a username was wrong?" },
        ]}
      />
      <h2 id="kimga-berasiz-tanlangan-odamlargami-yoki">Who gets the Stars: people you choose, or a draw among subscribers?</h2>
      <p>These two methods do different jobs. With one, Telegram decides who receives the Stars. With the other, you make the list yourself.</p>
      <CompareTable
        headers={["Criterion", "Stars giveaway in a channel", "Order by @username"]}
        rows={[
          ["Who picks the winner", "Telegram", "You"],
          ["Who can run it", "A channel or group owner", "Any buyer, even without a channel"],
          ["Payment", "Paid in advance, inside Telegram", "In som, each order paid separately"],
          ["How the Stars arrive", "Telegram sends them to winners automatically", "The bot sends them to the recipient’s account"],
          ["Best for", "A draw among subscribers", "Staff, partners, winners chosen by judges"],
        ]}
      />
      <p>Telegram’s blog says that <a href={"https://telegram.org/blog/star-giveaways-iv-in-browser"} target="_blank" rel="noopener noreferrer">channel and group owners can host Stars giveaways</a> and that these giveaways are paid in advance. The <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">giveaway documentation</a> says Telegram shares out the Stars among the winners automatically. It also says that in certain conditions, Stars that weren’t given out go back to the organiser. Read those conditions in the official documentation before you start a giveaway.</p>
      <p>An order by @username needs only the recipient’s username. Nobody asks for a password, an SMS code or access to the account.</p>
      <p>Here’s an example. A shop channel with 3 000 subscribers announces “10 winners from among our subscribers.” A giveaway works well for that. Now say the same channel wants to reward “the 5 customers who bought the most this month.” A giveaway can’t pick those people, so each of them gets a separate order.</p>
      <h2 id="firma-akkauntidagi-starsni-xodimlarga-otkazsa">Can you move Stars from a company account to employees?</h2>
      <p>Many companies start with the same plan: buy 5 000 Stars on the company account and share them out among staff. Telegram’s rules don’t allow this.</p>
      <p>The <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars Terms of Service</a> say you can’t sell or withdraw Stars from your personal balance, or transfer them to another account. Trying to sell or redistribute Stars is also banned outright.</p>
      <p>So in practice, the Stars don’t go to a company balance first. They’re bought straight to each recipient’s @username, and each person is a separate order.</p>
      <Notice label={"Important"}>Stars purchases can’t be refunded: the terms say all sales are final. Check your list twice before you send anything. If you buy Stars through a third party, payment questions go to that third party. For StarsPaymee orders, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="byudjetni-somda-qanday-hisoblaysiz">How do you work out the budget in som?</h2>
      <p>The formula is simple: <b>number of recipients × Stars per person × price of one Star</b>.</p>
      <p>The price of one Star depends on how you pay. With a UzCard/HUMO card transfer or from your bot balance, it’s {som(STARS_PER_UNIT_UZS, "en")}. With Click, Payme, Uzum or Paynet, it’s {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The smallest order is 50 Stars, so don’t plan less than that for any one person.</p>
      <CompareTable
        headers={["Scenario", "Recipients", "Per person", "Total Stars", "Card or balance", "Click, Payme, Uzum, Paynet"]}
        rows={[
          ["Contest winners", "10", "50", "500", `500 × ${som(STARS_PER_UNIT_UZS, "en")}`, `500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Holiday bonus for staff", "20", "100", "2 000", `2 000 × ${som(STARS_PER_UNIT_UZS, "en")}`, `2 000 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Most active customers", "5", "500", "2 500", `2 500 × ${som(STARS_PER_UNIT_UZS, "en")}`, `2 500 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
        ]}
      />
      <p>If your plan includes Premium, its price is the same for every payment method: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. There’s also a 1-month plan, and the bot shows its price.</p>
      <p>This guide doesn’t promise a bulk discount or an invoice in your company’s name. The bot shows the final amount before you pay. You’ll also find current prices on the <Link href="/stars">Stars page</Link>.</p>
      <p>Add a reserve to the budget that covers one or two extra recipients. Then a late winner or a fixed list won’t mean asking for more money. To see how one order for another person works, read <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">buying Stars for someone else</Link>.</p>
      <h2 id="username-royxatidagi-xatolarni-tolovdan-oldin">How do you catch @username mistakes before you pay?</h2>
      <p>In large batches, the most common mistake is a wrong @username. Get one letter wrong and the Stars may go to a stranger. So clean up the list before any money moves:</p>
      <ul>
        <li><b>Get the username in writing from its owner.</b> Don’t retype it from a voice message or a screenshot. Copy and paste the text.</li>
        <li><b>Look for Cyrillic letters.</b> Latin “o” and Cyrillic “о,” or Latin “a” and Cyrillic “а,” look the same but make a different username.</li>
        <li><b>Remove extra characters</b>, such as spaces, dots, a comma at the end or a double @.</li>
        <li><b>Open each username in Telegram search.</b> Check that the name and profile picture match the person on your list.</li>
        <li><b>Make sure it’s a personal account.</b> Some winners send the username of their channel or bot by mistake.</li>
        <li><b>Be careful with old usernames.</b> If someone recently changed their username, another person may now have the old one.</li>
        <li><b>Ask people without a username to set one.</b> <Link href="/blog/telegram-stars-username-qanday-topiladi">How to find your username</Link> explains where to find it and how to set it.</li>
        <li><b>Have a second person check the list on their own.</b> Stars aren’t refundable, so this five-minute check is worth it.</li>
      </ul>
      <p>Your working sheet needs only five columns: row number, @username, name, number of Stars and status (“checked,” “sent,” “confirmed”).</p>
      <h2 id="starspaymee-botda-onlab-buyurtmani-tartib">How do you place dozens of orders in @StarsPaymee_bot without mix-ups?</h2>
      <Steps>
        <Step title={"Open your sheet"}>keep the list that two people have checked in front of you.</Step>
        <Step title={"Open the bot"}>go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Enter the recipient and amount"}>copy one @username from the sheet, paste it in and choose at least 50 Stars.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. You don’t need an international card, a crypto wallet or a VPN.</Step>
        <Step title={"Mark the delivery"}>an order usually arrives automatically within a few seconds, about 5. Write the order number in your sheet and change the status to “sent.”</Step>
        <Step title={"Move to the next row"}>don’t start a new order until the last one is finished.</Step>
      </Steps>
      <p>This guide hasn’t confirmed how many recipients one order can include, so check that in the bot. The safest method is one row per order.</p>
      <p>For a long list, paying from your bot balance may be easier. When you pay from the balance, one Star costs {som(STARS_PER_UNIT_UZS, "en")}. The bot shows how to top up the balance.</p>
      <h2 id="kanal-give-awayini-sozlash-bosqichlar">Setting up a channel giveaway: steps and limits</h2>
      <p>The <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">giveaway documentation</a> says any channel or supergroup admin can launch a giveaway, whatever rights they have. Here are the main steps:</p>
      <Steps>
        <Step title={"Choose the prize"}>for a Premium giveaway, set the number and length of the subscriptions. For a Stars giveaway, set how many Stars will be given out.</Step>
        <Step title={"Pay in advance"}>Telegram’s blog says Premium giveaways are <a href={"https://telegram.org/blog/giveaways"} target="_blank" rel="noopener noreferrer">paid in advance</a>, and Stars giveaways are prepaid too. <a href={"https://fragment.com/premium"} target="_blank" rel="noopener noreferrer">Fragment</a> also lets you gift Premium to your channel’s subscribers.</Step>
        <Step title={"Limit who can take part"}>if you need to, add a list of countries, or let only people who subscribe after the giveaway starts take part.</Step>
        <Step title={"Add extra conditions"}>you can require entrants to join other channels or groups too.</Step>
        <Step title={"Set an end date"}>this field is required.</Step>
        <Step title={"Wait for the results"}>in a Premium giveaway, Telegram picks the winners at random and sends them a link with a gift code. In a Stars giveaway, Telegram sends the Stars to the winners automatically.</Step>
      </Steps>
      <p>There’s an extra benefit for the channel owner. The <a href={"https://telegram.org/faq_premium"} target="_blank" rel="noopener noreferrer">Premium FAQ</a> says a channel that hosts a giveaway immediately receives all 4 boosts. Telegram’s blog also says you can create larger Stars giveaways at a lower cost. Winners can spend their Stars on paid media and exclusive subscriptions in channels.</p>
      <p>There is one limit: you can’t choose the winner yourself. If you want to reward someone the judges chose, or someone who earned it with their work, use an order by @username instead.</p>
      <h2 id="xodim-va-mijozlarga-nima-mos">What suits staff and customers best: Stars, Premium or a gift?</h2>
      <CompareTable
        headers={["Criterion", "Stars", "Premium", "Telegram gift"]}
        rows={[
          ["Best for", "Contest prizes, one-off rewards", "Team members who use Telegram a lot", "Holiday greetings, keepsakes"],
          ["Price", "Depends on payment method", "3, 6, 12 months — the same for every method", "Shown in the bot"],
          ["Bot limitation", "Minimum 50 Stars per order", "Not available for an account with an active subscription", "Limited gifts removed from sale can’t be sent"],
          ["Learn more", <span key="r3c1"><Link href="/stars">Stars</Link></span>, <span key="r3c2"><Link href="/premium">Premium</Link></span>, <span key="r3c3"><Link href="/gifts">Gifts</Link></span>],
        ]}
      />
      <p>The Premium FAQ says Premium can be gifted for 3, 6 or 12 months. Gifted subscriptions use a global rate, so you can send them to someone in any country, including a partner abroad.</p>
      <p>There’s one exception for Premium. If an account already has an active subscription, the bot won’t open a new Premium order for it, and the new time isn’t added to the old subscription. If someone on your list already has Premium, give them Stars or a gift instead.</p>
      <p>Gifts have a limit too: bots can’t send limited gifts that Telegram has removed from sale. Ready-made collectible (NFT) gifts are available in the bot’s NFT Market.</p>
      <h2 id="marketingda-stars-qaysi-foydalanish-xavfsiz">Stars in marketing: what’s safe, and what breaks the rules?</h2>
      <p>There are two safe ways to use Stars in marketing. The first is a channel giveaway: you run a draw among subscribers, and the channel gets boosts. The second is rewarding loyal customers or partners one by one through their @username. For example, at the end of a quarter you could send 500 Stars each to your 5 most active customers.</p>
      <p>This guide has no confirmed information about ads or sponsored posts paid with Stars. Check Telegram’s official pages before you plan a campaign like that.</p>
      <p>Reselling is clear: it isn’t allowed. The Telegram Stars terms ban selling and redistributing Stars, and you can’t transfer them from your balance to another account. So we don’t recommend building a “sell Stars” model in your own bot.</p>
      <p>A bot owner accepting Stars as payment for their own product or service is a different topic. <Link href="/blog/telegram-stars-api-nima-ulanish">What the Telegram Stars API is</Link> explains how to connect it. Check the conditions on <a href={"https://core.telegram.org/api/giveaways"} target="_blank" rel="noopener noreferrer">core.telegram.org</a> and in Telegram’s other documentation.</p>
      <Notice label={"Important"}>This guide doesn’t promise an API, bulk terms or a special deal from StarsPaymee. If you have questions, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. To set up a company profile, see the guide to <Link href="/blog/telegram-biznes-akkaunt-ochish">opening a Telegram business account</Link>.</Notice>
      <h2 id="buxgalteriya-va-rahbariyatga-hisobotni-qanday">How do you prepare a report for accounting and management?</h2>
      <p>When the handout is over, someone will ask: “Who got what, and when?” Record these details for every order:</p>
      <CompareTable
        headers={["Field", "What to record", "Why it matters"]}
        rows={[
          ["Order number", "The order ID from the bot", "It’s the first thing support will ask for if there’s a problem"],
          ["Date and time", "When the order was placed", "To check against what the recipient says"],
          ["Recipient", "@username and name", "Shows who got it"],
          ["Amount", "Number of Stars or Premium length", "To compare with the budget"],
          ["Payment", "Method and amount", "Shows which price applied"],
          ["Receipt", "App receipt or screenshot", "Proves the expense"],
          ["Responsible person", "The employee who placed the order", "Makes it clear who to ask"],
        ]}
      />
      <p>For a giveaway, also save the link to the announcement post, the end date and the results post.</p>
      <p>At the end, write a one-page summary: the planned amount and the amount you actually spent, how many people received Stars, and who didn’t and why. Use this summary to plan the budget for your next contest more accurately.</p>
      <h2 id="oluvchi-stars-kelmadi-desa-yoki">What if a recipient says “the Stars didn’t arrive,” or a username was wrong?</h2>
      <ul>
        <li><b>First, ask the recipient to check their balance.</b> Sometimes the Stars have arrived and the person doesn’t know where to look. <Link href="/blog/telegram-stars-kelmadi-nima-qilish">What to do if Stars don’t arrive</Link> explains how to check.</li>
        <li><b>Contact support with the order number and receipt</b> at <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Include the row from your sheet as well.</li>
        <li><b>Stars sent to a wrong username that belongs to someone else may not come back.</b> Telegram’s terms say Stars purchases aren’t refunded, and Stars can’t be moved from one balance to another account.</li>
        <li><b>Cover the loss from your reserve.</b> That’s why the budget has one. Next time, have two people check the list, and always copy and paste usernames instead of typing them.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/giveaways", label: "Giveaways and gifts" },
          { href: "https://telegram.org/blog/giveaways", label: "Giveaways in Channels and Free Premium" },
          { href: "https://telegram.org/faq_premium", label: "Telegram Premium FAQ" },
          { href: "https://fragment.com/premium", label: "Fragment – Telegram Premium" },
          { href: "https://telegram.org/blog/star-giveaways-iv-in-browser", label: "Star Giveaways and More" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can we collect Stars on a company account and share them out to employees later?", answer: "No. Telegram’s terms don’t let you transfer Stars from a personal balance to another account. Place a separate order for each employee’s @username." },
  { question: "Can we split 1 000 Stars into 25 each for 40 people?", answer: "No. Each order in the bot must be at least 50 Stars, so 1 000 Stars covers 20 people at most. To give 40 people 50 Stars each, budget for 2 000 Stars." },
  { question: "Is there a discount for bulk orders?", answer: `No bulk discount has been announced. The price depends on how you pay: ${som(STARS_PER_UNIT_UZS, "en")} with a card transfer or from your bot balance, and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} with online payment.` },
  { question: "Do I need an employee’s phone number or password to send them Stars?", answer: "No, their @username is all you need. If anyone asks for an SMS code or password as part of a “prize,” it’s a scam." },
  { question: "Can a channel giveaway reward a winner chosen by judges?", answer: "No. Telegram picks giveaway winners itself. To reward a specific person, order Stars to their @username separately." },
  { question: "Can a giveaway be open only to subscribers in Uzbekistan?", answer: "Yes, you can limit entrants to a list of countries. The documentation doesn’t give an exact number for how many countries the list can include." },
  { question: "An employee already has Premium. What should I send them?", answer: "The bot won’t open a new Premium order for an account with an active subscription. Send them Stars or a Telegram gift, or gift Premium after their current subscription ends." },
  { question: "Can I pay in cash at a Paynet terminal?", answer: `Yes, you can pay in cash through the Paynet app or a Paynet terminal. With this method one Star costs ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. Keep the receipt for your records.` },
  { question: "What documents should I keep for accounting?", answer: "Keep the order number, date, recipient, amount and payment receipt for each order. An invoice in your company’s name hasn’t been confirmed, so ask support about it first." },
  { question: "Can I sell Stars in my own bot and refill them through StarsPaymee?", answer: "We don’t recommend it: the Telegram Stars terms ban selling and redistributing Stars. Accepting Stars as payment for your own service in a bot is a different matter, and you should check its conditions in Telegram’s documentation." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  keywords: ["biznes uchun telegram stars ko'p miqdorda olish","ko'p miqdorda stars olish","konkurs g'oliblariga stars berish","xodimlarga telegram stars sovg'a","telegram stars give-away o'tkazish","stars tarqatish kanalda","telegram stars optom","купить много telegram stars для бизнеса","раздать telegram stars победителям конкурса","розыгрыш звёзд telegram в канале","telegram stars оптом узбекистан"],
  howToSteps: [
    { name: "Jadvalni oching", text: "ikki kishi tekshirgan ro‘yxat ko‘z oldingizda tursin." },
    { name: "Botga kiring", text: "@StarsPaymee_bot yoki uning Mini App’i." },
    { name: "Oluvchi va miqdorni kiriting", text: "jadvaldan bitta @username’ni nusxalab qo‘ying va kamida 50 Stars tanlang." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN kerak emas." },
    { name: "Yetkazilganini belgilang", text: "buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetadi. Buyurtma raqamini jadvalga yozing, holatni «yuborildi» qiling." },
    { name: "Keyingi qatorga o‘ting", text: "oldingi buyurtma yopilmaguncha yangisini boshlamang." },
  ],
  locales: {
    uz: {
      title: "Biznes uchun Telegram Stars ko‘p miqdorda: byudjetdan hisobotgacha",
      excerpt: "Ko‘p odamga Stars ikki yo‘l bilan beriladi: har bir @username’ga alohida buyurtma yoki kanal give-away’i. Maqolada so‘mdagi byudjet, ro‘yxat tekshiruvi, yuborish qadamlari va hisobot tartibi bor.",
      metaTitle: "Biznes uchun Telegram Stars ko‘p miqdorda",
      metaDescription: "Ko‘p odamga Stars ikki yo‘l bilan beriladi: har bir @username’ga alohida buyurtma yoki kanal give-away’i.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как раздать Telegram Stars сотрудникам и клиентам: от бюджета до отчёта",
      excerpt: "Раздать Stars многим людям можно двумя способами: отдельный заказ на каждый @username или розыгрыш в канале. В статье — бюджет в сумах, проверка списка, порядок отправки и отчёт.",
      metaTitle: "Как раздать Telegram Stars сотрудникам и клиентам",
      metaDescription: "Раздать Stars многим людям можно двумя способами: отдельный заказ на каждый @username или розыгрыш в канале.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Stars in bulk for a business: budget, sending and reporting",
      excerpt: "You can give Stars to many people in two ways: a separate order for each @username or a channel giveaway. This guide covers the budget in som, list checks, sending steps and reporting.",
      metaTitle: "Telegram Stars in bulk for a business",
      metaDescription: "You can give Stars to many people in two ways: a separate order for each @username or a channel giveaway.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
