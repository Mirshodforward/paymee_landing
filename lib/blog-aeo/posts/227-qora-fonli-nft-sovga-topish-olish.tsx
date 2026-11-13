import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "qora-fonli-nft-sovga-topish-olish";

/**
 * Qora fonli NFT sovg‘a: Black fonni topish, narxini baholash va so‘mda olish
 *
 * Avtoblogyoz yasagan maqola (2026-11-13): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Qora fonli Plush Pepe sotilgani haqidagi xabarni ko‘rgan foydalanuvchi «qora fonli nft sovg‘a» deb qidiradi. U Black fon qanchalik kam uchrashini, uni ilova va bozorda qanday filtrlab topishni, narxni faqat fon emas, model va belgi ham belgilashini va bunday nusxani so‘mda xavfsiz qanday olishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-13):
 *   https://telegram.org/faq
 *   https://telegram.org/blog/collectible-gifts-and-more
 *   https://core.telegram.org/api/gifts
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Telegram’dagi sovg‘a bozorida kolleksiyani ochib, fonlar ro‘yxatidan qorasini tanlasangiz, qora fonli nusxalar ajralib chiqadi. Qora fon nusxani o‘zi qimmat qilib qo‘ymaydi: narxga model, belgi va raqam ham qo‘shilib ta’sir qiladi, shuning uchun har nusxani alohida ko‘rib chiqing. So‘mda olish uchun @StarsPaymee_bot’dagi NFT Market bor, yoki so‘mga olingan Stars bilan ilovaning o‘zidan sotib olasiz.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#fon-kolleksion-sovganing-qaysi-qismi", label: "Fon kolleksion sovg‘aning qaysi qismi va uni kim tanlaydi?" },
          { href: "#qora-fonli-plush-pepe-sotildi", label: "«Qora fonli Plush Pepe sotildi» xabarini qanday o‘qish kerak?" },
          { href: "#black-fon-qanchalik-kam-uchrashini", label: "Black fon qanchalik kam uchrashini qayerdan ko‘rasiz?" },
          { href: "#sovga-bozorida-fon-boyicha-filtr", label: "Sovg‘a bozorida fon bo‘yicha filtr: 6 qadam" },
          { href: "#fonlari-bir-xil-ikki-nusxa", label: "Fonlari bir xil ikki nusxa nega turlicha narxda?" },
          { href: "#value-soralgan-narx-va-sotilgan", label: "Value, so‘ralgan narx va sotilgan narx: qaysi biriga tayanish kerak?" },
          { href: "#qora-fonli-nusxani-somda-olishning", label: "Qora fonli nusxani so‘mda olishning uch yo‘li" },
          { href: "#qora-pepe-taklif-qilgan-sotuvchini", label: "Qora Pepe taklif qilgan sotuvchini qanday tekshirasiz?" },
          { href: "#xariddan-keyin-profilga-taqish-saqlash", label: "Xariddan keyin: profilga taqish, saqlash va himoya" },
        ]}
      />
      <h2 id="fon-kolleksion-sovganing-qaysi-qismi">Fon kolleksion sovg‘aning qaysi qismi va uni kim tanlaydi?</h2>
      <p><a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>da yozilishicha, oddiy sovg‘a kolleksion sovg‘aga yangilanganda (upgrade) o‘ziga xos ko‘rinish oladi. Bu ko‘rinishni uchta atribut va bitta raqam tashkil qiladi:</p>
      <ul>
        <li><b>Model</b> — figuraning o‘zi, sovg‘aning asosiy tasviri.</li>
        <li><b>Fon</b> (backdrop) — figura orqasidagi rangli qatlam. Qora fon shu atributning bir varianti.</li>
        <li><b>Belgi</b> (symbol) — fonda takrorlanadigan kichik tasvir.</li>
        <li><b>Raqam</b> — nusxaning tartib raqami.</li>
      </ul>
      <p>Model, fon va belgini Telegram rassomlari chizgan. Fonni siz tanlamaysiz: u sovg‘a yangilanganda tushadi. Yangilashni sovg‘ani olgan odam ham, yuboruvchi oldindan ham qilishi mumkin. Buning uchun oz miqdorda Stars to‘lanadi, bu Stars esa blokcheyn to‘lovlarini qoplashga ketadi (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Tayyor nusxaning fonini keyin almashtirish imkoni rasmiy manbalarda ko‘rsatilmagan.</p>
      <p>Ko‘p odam qora fonni profil uchun qidiradi. Kolleksion sovg‘ani profilga taqsangiz, profil ko‘rinishi sovg‘aning foni va belgisiga moslashadi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Qora fonli nusxada profil ham shu rangga yaqin, to‘q ko‘rinish oladi.</p>
      <h2 id="qora-fonli-plush-pepe-sotildi">«Qora fonli Plush Pepe sotildi» xabarini qanday o‘qish kerak?</h2>
      <Notice label={"Muhim"}>Telegram kanallarida qora fonli Birmingham Plush Pepe #940 31 500 💎 ga (taxminan $55 000) sotilgani haqida post tarqaldi. Bu kanal posti, xolos: rasmiy manba buni tasdiqlamagan. Summa, xaridor va TON qaysi kurs bilan dollarga o‘girilgani bu maqolada tekshirilmagan.</Notice>
      <p>Post to‘g‘ri chiqsa ham, undan «qora fonli hamma nusxa qimmat» degan xulosa chiqmaydi. Telegram faqat ayrim kombinatsiyalar boshqalaridan noyobroq ekanini aytadi. O‘sha #940 narxiga qora fon bilan birga model, belgi va raqam ham ta’sir qilgan bo‘lishi mumkin. Qaysi biri qanchalik ta’sir qilganini tashqaridan bilib bo‘lmaydi.</p>
      <p>Shu sabab bunday postni bozor yangiligi sifatida o‘qing. O‘zingiz olmoqchi bo‘lgan nusxaning narxini keyingi bo‘limlardagi tartib bilan alohida tekshiring.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="black-fon-qanchalik-kam-uchrashini">Black fon qanchalik kam uchrashini qayerdan ko‘rasiz?</h2>
      <p>Rasmiy manbalarda qora fon boshqa fonlardan noyobroq yoki qimmatroq ekani aytilmagan. Har bir kolleksion sovg‘a o‘ziga xos ekani va ayrimlari boshqalaridan noyobroq bo‘lishi aytilgan, xolos.</p>
      <p>Aniq raqamni o‘zingiz bilib olishingiz mumkin. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram API hujjatlari</a>da yozilishicha, har bir atributda uning tushish ehtimolini ko‘rsatuvchi noyoblik ko‘rsatkichi bor. U promilleda, ya’ni «1 000 tadan nechtasi» ko‘rinishida beriladi. Masalan, 1 000 tadan 15 ta degan fon 1 000 tadan 40 ta degan fondan kamroq uchraydi.</p>
      <p>Bu ko‘rsatkichga qarab xulosa chiqarishdan oldin quyidagilarni hisobga oling:</p>
      <ul>
        <li>Har bir kolleksiyaning o‘z fonlari bor. Bir to‘plamda qora fon kam uchrashi, boshqasida esa ko‘proq bo‘lishi, yoki umuman bo‘lmasligi mumkin.</li>
        <li>Fon kam uchrasa-yu, model keng tarqalgan bo‘lsa, nusxa umuman noyob hisoblanmasligi mumkin.</li>
        <li>Plush Pepe to‘plamida jami nechta nusxa borligi va atributlarning aniq ulushi bu maqolada tasdiqlanmagan. Ularni sovg‘a kartasidan o‘zingiz tekshiring.</li>
        <li>Ilovada fon nomi «Black» deb chiqishi ham tasdiqlanmagan: til va versiyaga qarab nomi boshqacha bo‘lishi mumkin. Shu sabab nomiga emas, rangiga va ko‘rsatkichiga qarang.</li>
      </ul>
      <p>Sovg‘adagi «X/Y» yozuvi va tiraj nimani bildirishi alohida maqolada tushuntirilgan: <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">Telegram sovg‘a tiraji</Link>.</p>
      <h2 id="sovga-bozorida-fon-boyicha-filtr">Sovg‘a bozorida fon bo‘yicha filtr: 6 qadam</h2>
      <p>Telegram FAQ’ga ko‘ra, sovg‘alarni filtr bilan model, fon yoki belgi bo‘yicha qidirish mumkin. Qora fonli nusxani shunday topasiz:</p>
      <Steps>
        <Step title={"Kolleksiyani tanlang"}>sovg‘a bozorida kerakli turni, masalan Plush Pepe’ni oching.</Step>
        <Step title={"Fon filtrini oching"}>ro‘yxatdan qora fonni belgilang. Faqat shu fonli nusxalar qoladi.</Step>
        <Step title={"Byudjetga qarab toraytiring"}>kerak bo‘lsa, model yoki belgi bo‘yicha ham filtr qo‘shing.</Step>
        <Step title={"Har nusxa kartasini oching"}>model, fon va belgining noyoblik ko‘rsatkichini yozib oling.</Step>
        <Step title={"Value maydonini ko‘ring"}>u nusxaning taxminiy qayta sotish narxini ko‘rsatadi.</Step>
        <Step title={"Uch-to‘rtta nusxani taqqoslang"}>keyingi bo‘limdagi jadvaldan foydalaning.</Step>
      </Steps>
      <p>Filtrdan keyin hech narsa chiqmasa, bu kolleksiyada qora fon yo‘qligini yoki hozir hech kim sotmayotganini bildiradi. Bir necha kundan keyin qaytadan tekshiring yoki qora fon bor boshqa kolleksiyani ko‘ring.</p>
      <h2 id="fonlari-bir-xil-ikki-nusxa">Fonlari bir xil ikki nusxa nega turlicha narxda?</h2>
      <p>Ikki nusxaning foni bir xil qora bo‘lsa ham, model va belgisi farq qiladi. Sotuvchilar narxni odatda butun birikmaga qarab qo‘yadi.</p>
      <CompareTable
        headers={["Atribut", "Nimani tekshirasiz", "Narxga qanday ta’sir qilishi mumkin"]}
        rows={[
          ["Model", "Promilledagi ko‘rsatkich qanchalik past", "Kam uchraydigan model nusxani ko‘pincha qimmatlashtiradi"],
          ["Fon", "Qora fonning shu kolleksiyadagi ulushi", "Ulushi kam bo‘lsa qiziqish oshadi, lekin narxni yolg‘iz fon hal qilmaydi"],
          ["Belgi", "Ko‘rsatkichi va qora fonda qanday ko‘rinishi", "Kam uchraydigan belgi birikmani kuchaytirishi mumkin"],
          ["Raqam", "Kichik yoki eslab qolish oson raqam", "Ayrim xaridorlar uchun ahamiyatli bo‘lishi mumkin, ammo bu qoida emas"],
          ["Value", "Tizim bergan taxminiy qayta sotish narxi", "Mo‘ljal beradi, kafolat bermaydi"],
        ]}
      />
      <p>Misol. A nusxada qora fon va keng tarqalgan model bor. B nusxada noyob model, oddiy fon va kam uchraydigan belgi bor. Kimdir faqat qora profil istasa, A ni tanlaydi. Kolleksioner esa B ga ko‘proq to‘lashga tayyor bo‘lishi mumkin. Shuning uchun «qaysi biri qimmatroq» degan savolga ko‘rsatkichlarni yonma-yon qo‘ymaguncha javob berib bo‘lmaydi. Narx mantig‘i batafsil: <Link href="/blog/telegram-gift-price">Nega bir xil Telegram Gift ikki xil narxda turadi?</Link></p>
      <h2 id="value-soralgan-narx-va-sotilgan">Value, so‘ralgan narx va sotilgan narx: qaysi biriga tayanish kerak?</h2>
      <p>Telegram FAQ’ga ko‘ra, «Value» maydoni sovg‘aning taxminiy qayta sotish narxini ko‘rsatadi. Bu raqam sotuvchining narxi ham, kafolatlangan summa ham emas.</p>
      <p>API’da kolleksion sovg‘aning qiymatini olish uchun alohida metod bor, uning maydonlari orasida dollardagi qiymat ham bor. Dollardagi raqam ham baho, bitimning o‘zi emas.</p>
      <p>Bozorda uch xil raqam uchraydi:</p>
      <ul>
        <li><b>Value</b> — tizimning taxminiy bahosi.</li>
        <li><b>So‘ralgan narx</b> — sotuvchi o‘zi qo‘ygan narx. Qora fonli nusxalarda u Value’dan ancha baland bo‘lishi mumkin.</li>
        <li><b>Sotilgan narx</b> — nusxa haqiqatda qanchaga sotilgani.</li>
      </ul>
      <p>Amalda: so‘ralgan narx Value’dan bir necha barobar baland bo‘lsa, shoshilmang. Xuddi shu modelli va fonli boshqa nusxalarni filtrda ko‘ring. Sovg‘ani keyin sotmoqchi bo‘lsangiz, qo‘lingizga qancha tushishini sotuv oynasida ilova ko‘rsatgan yakuniy summadan biling: ushlanmalar bu maqolada tasdiqlanmagan.</p>
      <h2 id="qora-fonli-nusxani-somda-olishning">Qora fonli nusxani so‘mda olishning uch yo‘li</h2>
      <CompareTable
        headers={["Yo‘l", "Nima kerak", "Kimga qulay"]}
        rows={[
          ["Telegram ichida Stars bilan", "Yetarli Stars balansi", "Filtr bilan o‘zi tanlamoqchi bo‘lganga"],
          ["TON blokcheyni orqali", "TON hamyon va tashqi auksion sayti", "Hamyon bilan ishlashni biladiganga"],
          ["@StarsPaymee_bot’dagi NFT Market", "Faqat @username va so‘mda to‘lov", "Hamyonsiz, tayyor nusxa olmoqchi bo‘lganga"],
        ]}
      />
      <p>Ilova ichida sotuvchi sovg‘ani profilida ochib, «Sell» tugmasi orqali Stars’da narx qo‘yadi. TON hamyonga chiqarilgan sovg‘ani esa boshqa egaga o‘tkazish va auksionga qo‘yish mumkin (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</p>
      <h3>Stars’ni so‘mda to‘ldirish</h3>
      <p>Ilova ichidan olish uchun Stars kerak. StarsPaymee’da 1 ta Stars narxi to‘lov usuliga qarab o‘zgaradi: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars, buyurtma odatda bir necha soniyada avtomatik keladi. Batafsil: <Link href="/stars">Stars sahifasi</Link>.</p>
      <h3>NFT Market orqali xarid</h3>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>ni ishga tushiring.</Step>
        <Step title={"NFT Market’ga kiring"}>mavjud kolleksion sovg‘alarni ko‘rib chiqing.</Step>
        <Step title={"Atributlarni solishtiring"}>fon qora ekanini, model va belgi sizga to‘g‘ri kelishini tekshiring.</Step>
        <Step title={"@username yozing"}>sovg‘a qaysi akkauntga borishini ko‘rsating. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"So‘mda to‘lang"}>botda ko‘rsatilgan usullardan birini tanlang: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</Step>
      </Steps>
      <p>Market’da hozir qanday nusxalar borligi o‘zgarib turadi, qora fonli nusxa bor-yo‘qligini botda tekshiring. Kerakli nusxa bo‘lmasa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>dan so‘rash yoki Stars olib, ilovadagi bozordan izlash mumkin. Market haqida: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> va <Link href="/gifts">sovg‘alar sahifasi</Link>.</p>
      <p>Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Tayyor kolleksion (NFT) nusxalar esa NFT Market’da sotiladi.</p>
      <h2 id="qora-pepe-taklif-qilgan-sotuvchini">Qora Pepe taklif qilgan sotuvchini qanday tekshirasiz?</h2>
      <p>Qimmat sotuvlar haqida post tarqalgach, shaxsiy xabarda «arzonga qora Pepe» taklif qiladiganlar paydo bo‘ladi. Pul o‘tkazishdan oldin quyidagilarni tekshiring:</p>
      <ul>
        <li><b>Sovg‘a havolasini Telegram’da oching.</b> Model, fon, belgi va raqamni sotuvchining rasmidan emas, Telegram’dagi kartadan ko‘ring.</li>
        <li><b>Skrinshotga ishonmang.</b> Rasmdagi fonni tahrirlab qo‘yish bir daqiqalik ish.</li>
        <li><b>Ishni oldindan to‘lovdan boshlamang.</b> Shaxsiy kelishuvda pul ketsa, uni qaytarish juda qiyin bo‘lishi mumkin. Ilova ichidagi sotuv orqali olish xavfsizroq.</li>
        <li><b>Zaxira so‘zlari, parol yoki SMS kod so‘ralsa — suhbatni to‘xtating.</b> Sovg‘a sotish uchun bularning hech biri kerak emas.</li>
        <li><b>Narxni filtrdagi boshqa nusxalar bilan solishtiring.</b> Xuddi shunday atributli nusxalardan ancha arzon bo‘lsa, bu jiddiy ogohlantirish.</li>
      </ul>
      <p>Nusxaning oldingi egalari va TON’dagi izini qanday ko‘rish mumkinligi: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini xariddan oldin tekshirish</Link>.</p>
      <h2 id="xariddan-keyin-profilga-taqish-saqlash">Xariddan keyin: profilga taqish, saqlash va himoya</h2>
      <p>Sovg‘a akkauntingizga kelgach, uni profilga taqishingiz mumkin. Shunda profil ko‘rinishi sovg‘aning qora foni va belgisiga moslashadi.</p>
      <p>Uzoq saqlamoqchi bo‘lsangiz, kolleksion sovg‘ani TON blokcheynidagi NFT’ga aylantirish mumkin. Telegram FAQ’ga ko‘ra, blokcheynga o‘tkazilgan sovg‘a Telegram akkaunti o‘chirilsa ham egasida qoladi. Qadamlar alohida maqolada: <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani blokcheynga o‘tkazish</Link>.</p>
      <p>Keyinchalik sotmoqchi bo‘lsangiz, ikki yo‘l bor: profilda sovg‘ani ochib, «Sell» orqali Stars’da narx qo‘yish yoki TON hamyonga chiqarib, auksionga qo‘yish.</p>
      <p>Sovg‘a Telegram’da tursa, uning xavfsizligi akkauntingiz xavfsizligiga bog‘liq. Ikki bosqichli tekshiruv (2FA) parolini yoqing va faol seanslar ro‘yxatini vaqti-vaqti bilan ko‘rib turing. Akkaunt boshqa odam qo‘liga o‘tsa, undagi sovg‘ani ham yo‘qotishingiz mumkin.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain…" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Har qanday kolleksiyada qora fonli nusxa uchraydimi?", answer: "Yo‘q deb hisoblang: fonlar to‘plami har kolleksiyada o‘zicha. Fon filtrida qora rang chiqmasa, boshqa kolleksiyaga o‘ting." },
  { question: "Ilovada fonning nomi aynan «Black» deb yoziladimi?", answer: "Bu tasdiqlanmagan, nom interfeys tiliga qarab boshqacha chiqishi mumkin. Ishonchli yo‘l — sovg‘a kartasini ochib, rangni va noyoblik ko‘rsatkichini ko‘rish." },
  { question: "Upgrade qilayotganda qora fonni o‘zim tanlay olamanmi?", answer: "Rasmiy manbalarda bunday imkoniyat ko‘rsatilmagan. Atributlar ma’lum ehtimol bilan tushadi, natijani oldindan bilib bo‘lmaydi." },
  { question: "Crafting qora fon tushish ehtimolini oshiradimi?", answer: "Crafting ba’zi sovg‘alardan 4 tagachasini birlashtirib, Uncommon, Rare, Epic yoki Legendary versiyasiga urinish imkonini beradi. Fonga ta’siri haqida rasmiy ma’lumot yo‘q." },
  { question: "Sotuvchi qora fonli Pepe rasmini yubordi, shu yetarlimi?", answer: "Yetarli emas, chunki rasmni tahrirlash oson. Sovg‘a havolasini Telegram’da ochib, kartadagi atributlar va raqam aytilganiga mosligini tekshiring." },
  { question: "Value dollarda bo‘lsa, so‘mdagi narxni qanday chamalayman?", answer: "Kunlik kurs bilan taxminiy mo‘ljal olsa bo‘ladi, lekin Value bitim narxi emas, baho. Aniq so‘mdagi summa NFT Market’da nusxa yonida yoziladi." },
  { question: "NFT Market’da qora fonli nusxa hozir yo‘q bo‘lsa-chi?", answer: "Keyinroq qayta ko‘ring yoki @StarsPaymeeSupport’dan so‘rang. Shoshilinch bo‘lsa, Stars’ni so‘mda olib, ilovadagi bozordan filtr bilan izlang." },
  { question: "Xarid paytida mendan qanday ma’lumot so‘raladi?", answer: "Faqat sovg‘a boradigan @username so‘raladi. Parol, SMS kod yoki akkauntga kirish talab qilinmaydi." },
  { question: "Olgan sovg‘amni keyin StarsPaymee’ga sota olamanmi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan sovg‘a va Stars sotib olmaydi. Sotish uchun ilovadagi «Sell» tugmasidan yoki TON hamyon orqali auksiondan foydalaning." },
  { question: "Qora fonli sovg‘ani taqsam, profilim qanday ko‘rinadi?", answer: "Profil sovg‘aning foni va belgisiga moslashadi, ya’ni qora fonga yaqin to‘q tusga kiradi. Sovg‘ani yechsangiz, oldingi ko‘rinish qaytadi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Откройте коллекцию в маркете подарков Telegram и выберите в списке фонов чёрный — останутся только экземпляры с чёрным фоном. Сам по себе чёрный фон подарок дорогим не делает: на цену вместе влияют модель, узор и номер, поэтому каждый экземпляр стоит смотреть отдельно. В сумах подарок можно купить в NFT Market в @StarsPaymee_bot или в самом приложении за Stars, оплаченные в сумах.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#fon-kolleksion-sovganing-qaysi-qismi", label: "Что такое фон коллекционного подарка и кто его выбирает?" },
          { href: "#qora-fonli-plush-pepe-sotildi", label: "Как понимать новости вроде «Продан Plush Pepe с чёрным фоном»?" },
          { href: "#black-fon-qanchalik-kam-uchrashini", label: "Где посмотреть, насколько редко встречается чёрный фон?" },
          { href: "#sovga-bozorida-fon-boyicha-filtr", label: "Фильтр по фону в маркете подарков: 6 шагов" },
          { href: "#fonlari-bir-xil-ikki-nusxa", label: "Почему два экземпляра с одинаковым фоном стоят по-разному?" },
          { href: "#value-soralgan-narx-va-sotilgan", label: "Value, цена продавца и цена продажи: на что опираться?" },
          { href: "#qora-fonli-nusxani-somda-olishning", label: "Три способа купить экземпляр с чёрным фоном в сумах" },
          { href: "#qora-pepe-taklif-qilgan-sotuvchini", label: "Как проверить продавца, который предлагает чёрного Pepe?" },
          { href: "#xariddan-keyin-profilga-taqish-saqlash", label: "После покупки: как надеть, хранить и защитить подарок" },
        ]}
      />
      <h2 id="fon-kolleksion-sovganing-qaysi-qismi">Что такое фон коллекционного подарка и кто его выбирает?</h2>
      <p>В <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> сказано, что после улучшения (upgrade) обычный подарок становится коллекционным и получает собственный облик. Этот облик складывается из трёх атрибутов и номера:</p>
      <ul>
        <li><b>Модель</b> — сама фигурка, основное изображение подарка.</li>
        <li><b>Фон</b> (backdrop) — цветной слой за фигуркой. Чёрный фон — один из вариантов этого атрибута.</li>
        <li><b>Узор</b> (symbol) — маленькое изображение, которое повторяется на фоне.</li>
        <li><b>Номер</b> — порядковый номер экземпляра.</li>
      </ul>
      <p>Модель, фон и узор нарисовали художники Telegram. Фон вы не выбираете: он выпадает при улучшении. Улучшить подарок может и получатель, и отправитель — заранее. За это платят небольшое количество Stars, и эти Stars идут на покрытие блокчейн-комиссий (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). Возможность поменять фон у готового экземпляра в официальных источниках не упоминается.</p>
      <p>Многие ищут чёрный фон ради профиля. Если надеть коллекционный подарок, оформление профиля подстраивается под его фон и узор (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). С чёрным фоном профиль тоже становится тёмным, близким к этому цвету.</p>
      <h2 id="qora-fonli-plush-pepe-sotildi">Как понимать новости вроде «Продан Plush Pepe с чёрным фоном»?</h2>
      <Notice label={"Важно"}>В Telegram-каналах разошёлся пост о том, что Birmingham Plush Pepe #940 с чёрным фоном продали за 31 500 💎 (около $55 000). Это лишь пост в канале: официальные источники его не подтверждали. Сумма, покупатель и курс, по которому TON пересчитали в доллары, в этой статье не проверялись.</Notice>
      <p>Даже если пост правдив, из него не следует, что «все экземпляры с чёрным фоном дорогие». Telegram говорит только о том, что одни комбинации встречаются реже других. На цену #940 помимо чёрного фона могли повлиять модель, узор и номер. Насколько повлиял каждый из них, со стороны не понять.</p>
      <p>Поэтому воспринимайте такие посты как рыночные новости. Цену экземпляра, который хотите купить, проверяйте отдельно — по порядку из следующих разделов.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="black-fon-qanchalik-kam-uchrashini">Где посмотреть, насколько редко встречается чёрный фон?</h2>
      <p>В официальных источниках не сказано, что чёрный фон реже или дороже других. Сказано только, что каждый коллекционный подарок уникален, а некоторые из них встречаются реже остальных.</p>
      <p>Точную цифру можно узнать самому. Согласно <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram API</a>, у каждого атрибута есть показатель редкости — шанс, что он выпадет. Его указывают в промилле, то есть «сколько из 1 000». Например, фон с показателем 15 из 1 000 встречается реже, чем фон с показателем 40 из 1 000.</p>
      <p>Прежде чем делать выводы по этому показателю, учтите:</p>
      <ul>
        <li>У каждой коллекции свой набор фонов. В одной чёрный может быть редким, в другой — встречаться чаще, а в третьей его может не быть вовсе.</li>
        <li>Если фон редкий, а модель распространённая, экземпляр может вообще не считаться редким.</li>
        <li>Общее число экземпляров в коллекции Plush Pepe и точные доли атрибутов в этой статье не подтверждены. Проверяйте их в карточке подарка.</li>
        <li>Не подтверждено и то, что в приложении фон называется именно «Black»: название может зависеть от языка и версии. Смотрите на цвет и показатель, а не на название.</li>
      </ul>
      <p>Что означает надпись «X/Y» на подарке и что такое тираж, объясняем в отдельной статье: <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">тираж подарков Telegram</Link>.</p>
      <h2 id="sovga-bozorida-fon-boyicha-filtr">Фильтр по фону в маркете подарков: 6 шагов</h2>
      <p>По данным Telegram FAQ, фильтры позволяют искать подарки по модели, фону или узору. Экземпляр с чёрным фоном находится так:</p>
      <Steps>
        <Step title={"Выберите коллекцию"}>откройте в маркете подарков нужный тип, например Plush Pepe.</Step>
        <Step title={"Откройте фильтр по фону"}>отметьте в списке чёрный. Останутся только экземпляры с этим фоном.</Step>
        <Step title={"Сузьте выбор под бюджет"}>при необходимости добавьте фильтр по модели или узору.</Step>
        <Step title={"Откройте карточку каждого экземпляра"}>запишите показатели редкости модели, фона и узора.</Step>
        <Step title={"Посмотрите поле Value"}>оно показывает примерную цену перепродажи экземпляра.</Step>
        <Step title={"Сравните три-четыре экземпляра"}>по таблице из следующего раздела.</Step>
      </Steps>
      <p>Если после фильтра ничего не нашлось, значит, в этой коллекции нет чёрного фона или сейчас такие экземпляры никто не продаёт. Загляните снова через несколько дней или посмотрите другую коллекцию, где чёрный фон есть.</p>
      <h2 id="fonlari-bir-xil-ikki-nusxa">Почему два экземпляра с одинаковым фоном стоят по-разному?</h2>
      <p>Даже если у двух экземпляров одинаковый чёрный фон, модель и узор у них разные. Продавцы обычно ставят цену, глядя на сочетание целиком.</p>
      <CompareTable
        headers={["Атрибут", "Что проверить", "Как может влиять на цену"]}
        rows={[
          ["Модель", "Насколько низкий показатель в промилле", "Редкая модель часто делает экземпляр дороже"],
          ["Фон", "Доля чёрного фона в этой коллекции", "При низкой доле интерес выше, но цену не определяет один фон"],
          ["Узор", "Показатель и то, как он смотрится на чёрном", "Редкий узор может усилить сочетание"],
          ["Номер", "Маленький или легко запоминающийся номер", "Для части покупателей важен, но это не правило"],
          ["Value", "Примерная цена перепродажи от системы", "Даёт ориентир, но не гарантию"],
        ]}
      />
      <p>Пример. У экземпляра A чёрный фон и распространённая модель. У экземпляра B редкая модель, обычный фон и редкий узор. Тот, кому нужен просто тёмный профиль, выберет A. А коллекционер может быть готов заплатить больше за B. Поэтому на вопрос «какой дороже» не ответить, пока не положишь показатели рядом. Подробнее о логике цен: <Link href="/blog/telegram-gift-price">Почему один и тот же Telegram Gift стоит по-разному?</Link></p>
      <h2 id="value-soralgan-narx-va-sotilgan">Value, цена продавца и цена продажи: на что опираться?</h2>
      <p>По данным Telegram FAQ, поле «Value» показывает примерную цену перепродажи подарка. Это не цена продавца и не гарантированная сумма.</p>
      <p>В API есть отдельный метод для получения стоимости коллекционного подарка, и среди его полей есть стоимость в долларах. Долларовая цифра — тоже оценка, а не сама сделка.</p>
      <p>На рынке встречаются три разных числа:</p>
      <ul>
        <li><b>Value</b> — примерная оценка системы.</li>
        <li><b>Цена продавца</b> — сумма, которую выставил сам продавец. У экземпляров с чёрным фоном она может быть намного выше Value.</li>
        <li><b>Цена продажи</b> — сумма, за которую экземпляр действительно ушёл.</li>
      </ul>
      <p>На практике: если продавец просит в несколько раз больше Value, не торопитесь. Посмотрите через фильтр другие экземпляры с той же моделью и фоном. Если потом собираетесь продать подарок, сумму на руки смотрите в итоговой цифре, которую приложение показывает в окне продажи: удержания в этой статье не подтверждены.</p>
      <h2 id="qora-fonli-nusxani-somda-olishning">Три способа купить экземпляр с чёрным фоном в сумах</h2>
      <CompareTable
        headers={["Способ", "Что нужно", "Кому удобно"]}
        rows={[
          ["Внутри Telegram за Stars", "Достаточный баланс Stars", "Тем, кто хочет сам выбрать экземпляр через фильтр"],
          ["Через блокчейн TON", "TON-кошелёк и внешний аукционный сайт", "Тем, кто умеет работать с кошельком"],
          ["NFT Market в @StarsPaymee_bot", "Только @username и оплата в сумах", "Тем, кто хочет готовый экземпляр без кошелька"],
        ]}
      />
      <p>В приложении продавец открывает подарок в своём профиле и через кнопку «Sell» ставит цену в Stars. Подарок, выведенный в TON-кошелёк, можно передать другому владельцу или выставить на аукцион (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</p>
      <h3>Пополнение Stars в сумах</h3>
      <p>Для покупки внутри приложения нужны Stars. В StarsPaymee цена 1 Stars зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars, обычно он приходит автоматически за несколько секунд. Подробнее: <Link href="/stars">страница Stars</Link>.</p>
      <h3>Покупка через NFT Market</h3>
      <Steps>
        <Step title={"Откройте бота"}>запустите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Зайдите в NFT Market"}>посмотрите доступные коллекционные подарки.</Step>
        <Step title={"Сравните атрибуты"}>убедитесь, что фон чёрный, а модель и узор вам подходят.</Step>
        <Step title={"Укажите @username"}>аккаунт, на который придёт подарок. Пароль, SMS-код или вход в аккаунт не запрашиваются.</Step>
        <Step title={"Оплатите в сумах"}>выберите один из способов в боте: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота.</Step>
      </Steps>
      <p>Ассортимент Market постоянно меняется, поэтому наличие экземпляров с чёрным фоном проверяйте в боте. Если нужного нет, можно спросить в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> или купить Stars и поискать в маркете приложения. О маркете: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> и <Link href="/gifts">страница подарков</Link>.</p>
      <p>Лимитированные подарки, которые Telegram снял с продажи, боты отправлять не могут. А готовые коллекционные (NFT) экземпляры продаются в NFT Market.</p>
      <h2 id="qora-pepe-taklif-qilgan-sotuvchini">Как проверить продавца, который предлагает чёрного Pepe?</h2>
      <p>Когда расходятся посты о дорогих продажах, в личке появляются предложения «чёрного Pepe по дешёвке». Перед переводом денег проверьте:</p>
      <ul>
        <li><b>Откройте ссылку на подарок в Telegram.</b> Модель, фон, узор и номер смотрите в карточке Telegram, а не на картинке от продавца.</li>
        <li><b>Не верьте скриншотам.</b> Отредактировать фон на картинке — дело одной минуты.</li>
        <li><b>Не начинайте с предоплаты.</b> Если при личной договорённости деньги ушли, вернуть их может быть очень сложно. Покупать через продажу внутри приложения надёжнее.</li>
        <li><b>Просят сид-фразу, пароль или SMS-код — прекращайте разговор.</b> Для продажи подарка ничего из этого не нужно.</li>
        <li><b>Сравните цену с другими экземплярами в фильтре.</b> Если она намного ниже, чем у экземпляров с такими же атрибутами, это серьёзный тревожный сигнал.</li>
      </ul>
      <p>Как посмотреть прошлых владельцев экземпляра и его след в TON: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">проверка истории NFT-подарка перед покупкой</Link>.</p>
      <h2 id="xariddan-keyin-profilga-taqish-saqlash">После покупки: как надеть, хранить и защитить подарок</h2>
      <p>Когда подарок придёт на аккаунт, его можно надеть в профиле. Оформление профиля подстроится под чёрный фон и узор подарка.</p>
      <p>Если собираетесь хранить долго, коллекционный подарок можно превратить в NFT в блокчейне TON. По данным Telegram FAQ, подарок, выведенный в блокчейн, остаётся у владельца, даже если удалить аккаунт Telegram. Пошагово — в отдельной статье: <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">вывод NFT-подарка в блокчейн</Link>.</p>
      <p>Если позже решите продать, способов два: открыть подарок в профиле и через «Sell» поставить цену в Stars или вывести его в TON-кошелёк и выставить на аукцион.</p>
      <p>Пока подарок лежит в Telegram, его безопасность зависит от безопасности аккаунта. Включите пароль двухэтапной проверки (2FA) и время от времени просматривайте список активных сеансов. Если аккаунт окажется в чужих руках, можно лишиться и подарка.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain…" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "В любой ли коллекции есть экземпляры с чёрным фоном?", answer: "Лучше считать, что нет: набор фонов у каждой коллекции свой. Если в фильтре по фону чёрного цвета нет, переходите к другой коллекции." },
  { question: "Фон в приложении называется именно «Black»?", answer: "Это не подтверждено: название может меняться в зависимости от языка интерфейса. Надёжнее открыть карточку подарка и посмотреть цвет и показатель редкости." },
  { question: "Можно ли самому выбрать чёрный фон при улучшении подарка?", answer: "В официальных источниках такая возможность не упоминается. Атрибуты выпадают с определённой вероятностью, и результат заранее не известен." },
  { question: "Повышает ли крафт шанс получить чёрный фон?", answer: "Крафт позволяет объединить до 4 некоторых подарков и попытаться получить версию Uncommon, Rare, Epic или Legendary. О влиянии на фон официальных данных нет." },
  { question: "Продавец прислал фото Pepe с чёрным фоном — этого достаточно?", answer: "Нет, картинку легко отредактировать. Откройте ссылку на подарок в Telegram и сверьте атрибуты и номер в карточке с тем, что обещал продавец." },
  { question: "Value указана в долларах — как прикинуть цену в сумах?", answer: "По дневному курсу можно получить примерный ориентир, но Value — это оценка, а не цена сделки. Точная сумма в сумах указана рядом с экземпляром в NFT Market." },
  { question: "Что делать, если в NFT Market сейчас нет экземпляров с чёрным фоном?", answer: "Загляните позже или спросите в @StarsPaymeeSupport. Если срочно, купите Stars в сумах и поищите через фильтр в маркете приложения." },
  { question: "Какие данные у меня спросят при покупке?", answer: "Только @username, на который отправится подарок. Пароль, SMS-код и вход в аккаунт не нужны." },
  { question: "Смогу ли я потом продать подарок StarsPaymee?", answer: "Нет, StarsPaymee не выкупает у пользователей подарки и Stars. Для продажи используйте кнопку «Sell» в приложении или аукцион через TON-кошелёк." },
  { question: "Как будет выглядеть профиль, если надеть подарок с чёрным фоном?", answer: "Профиль подстроится под фон и узор подарка, то есть станет тёмным, близким к чёрному. Если снять подарок, вернётся прежнее оформление." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Open a collection in Telegram’s gift market and pick black in the backdrop filter. Only black-backdrop copies will stay on screen. The backdrop alone doesn’t make a copy expensive, because the model, symbol and number also affect the price, so check each copy on its own. To pay in soums, use the NFT Market in @StarsPaymee_bot, or buy Stars in soums and shop inside the app.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#fon-kolleksion-sovganing-qaysi-qismi", label: "What is the backdrop of a collectible gift, and who picks it?" },
          { href: "#qora-fonli-plush-pepe-sotildi", label: "How to read “a black-backdrop Plush Pepe just sold” posts" },
          { href: "#black-fon-qanchalik-kam-uchrashini", label: "How rare is a black backdrop, and where can you check?" },
          { href: "#sovga-bozorida-fon-boyicha-filtr", label: "Filtering the gift market by backdrop: 6 steps" },
          { href: "#fonlari-bir-xil-ikki-nusxa", label: "Why do two copies with the same backdrop cost different amounts?" },
          { href: "#value-soralgan-narx-va-sotilgan", label: "Value, asking price and sale price: which one should you trust?" },
          { href: "#qora-fonli-nusxani-somda-olishning", label: "Three ways to buy a black-backdrop copy with soums" },
          { href: "#qora-pepe-taklif-qilgan-sotuvchini", label: "How to vet a seller offering a black Pepe" },
          { href: "#xariddan-keyin-profilga-taqish-saqlash", label: "After the purchase: wearing, storing and protecting the gift" },
        ]}
      />
      <h2 id="fon-kolleksion-sovganing-qaysi-qismi">What is the backdrop of a collectible gift, and who picks it?</h2>
      <p>The <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> says that a regular gift gets its own unique look when it is upgraded to a collectible. That look has three attributes and a number:</p>
      <ul>
        <li><b>Model</b>: the figure itself, the main image of the gift.</li>
        <li><b>Backdrop</b>: the coloured layer behind the figure. Black is one version of this attribute.</li>
        <li><b>Symbol</b>: a small repeating image on the backdrop.</li>
        <li><b>Number</b>: the serial number of the copy.</li>
      </ul>
      <p>Telegram artists drew the model, backdrop and symbol. You don’t choose the backdrop. It is assigned when the gift is upgraded. The upgrade can be done by the person who received the gift, or by the sender in advance. It costs a small number of Stars, and those Stars cover blockchain fees (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). Official sources don’t mention any way to change the backdrop of an existing copy later.</p>
      <p>Many people want a black backdrop for their profile. When you wear a collectible gift, your profile changes to match the gift’s backdrop and symbol (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). With a black-backdrop copy, your profile takes on a similar dark look.</p>
      <h2 id="qora-fonli-plush-pepe-sotildi">How to read “a black-backdrop Plush Pepe just sold” posts</h2>
      <Notice label={"Important"}>A post went around Telegram channels saying a black-backdrop Birmingham Plush Pepe #940 sold for 31 500 💎 (about $55 000). It is only a channel post, and no official source has confirmed it. This article has not verified the amount, the buyer or the TON-to-dollar rate used.</Notice>
      <p>Even if the post is accurate, it doesn’t mean every black-backdrop copy is expensive. All Telegram says is that some combinations are rarer than others. The price of #940 may have depended on its model, symbol and number as much as on the black backdrop. From the outside, you can’t tell how much each part counted.</p>
      <p>So treat posts like this as market news. For the copy you actually want to buy, check the price yourself using the steps in the sections below.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="black-fon-qanchalik-kam-uchrashini">How rare is a black backdrop, and where can you check?</h2>
      <p>Official sources don’t say that a black backdrop is rarer or more valuable than other backdrops. They only say that each collectible gift is unique and that some are rarer than others.</p>
      <p>You can find the exact figure yourself. The <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram API documentation</a> says each attribute has a rarity value showing the chance of getting it. The value is given in per mille, meaning “how many out of 1 000.” For example, a backdrop rated 15 out of 1 000 is less common than one rated 40 out of 1 000.</p>
      <p>Before you draw conclusions from that number, keep these points in mind:</p>
      <ul>
        <li>Each collection has its own set of backdrops. Black may be scarce in one collection, more common in another and missing from a third.</li>
        <li>A rare backdrop paired with a common model may not make the copy rare overall.</li>
        <li>This article has not confirmed the total number of Plush Pepe copies or the exact share of each attribute. Check them yourself on the gift card.</li>
        <li>It is also unconfirmed that the app labels the backdrop “Black.” The name may differ depending on language and app version, so go by the colour and the rarity value, not the label.</li>
      </ul>
      <p>What the “X/Y” on a gift means and how supply works is explained in a separate article: <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">Telegram gift supply</Link>.</p>
      <h2 id="sovga-bozorida-fon-boyicha-filtr">Filtering the gift market by backdrop: 6 steps</h2>
      <p>According to the Telegram FAQ, filters let you search gifts by model, backdrop or symbol. Here is how to find a black-backdrop copy:</p>
      <Steps>
        <Step title={"Pick a collection"}>open the gift type you want in the gift market, for example Plush Pepe.</Step>
        <Step title={"Open the backdrop filter"}>select black from the list. Only copies with that backdrop will remain.</Step>
        <Step title={"Narrow it down to your budget"}>add a model or symbol filter if you need to.</Step>
        <Step title={"Open each copy’s card"}>write down the rarity values for the model, backdrop and symbol.</Step>
        <Step title={"Check the Value field"}>it shows the approximate resale price of the copy.</Step>
        <Step title={"Compare three or four copies"}>use the table in the next section.</Step>
      </Steps>
      <p>If the filter shows nothing, either the collection has no black backdrop or nobody is selling one right now. Check again in a few days, or try another collection that has a black backdrop.</p>
      <h2 id="fonlari-bir-xil-ikki-nusxa">Why do two copies with the same backdrop cost different amounts?</h2>
      <p>Two copies can both have a black backdrop and still have different models and symbols. Sellers usually price the whole combination.</p>
      <CompareTable
        headers={["Attribute", "What to check", "How it may affect the price"]}
        rows={[
          ["Model", "How low its per-mille value is", "A rare model often makes a copy more expensive"],
          ["Backdrop", "How common black is in this collection", "A low share raises interest, but the backdrop alone doesn’t set the price"],
          ["Symbol", "Its rarity value and how it looks on black", "A rare symbol can strengthen the combination"],
          ["Number", "A low or easy-to-remember number", "Some buyers care about it, but this isn’t a rule"],
          ["Value", "The approximate resale price the system shows", "A reference point, not a guarantee"],
        ]}
      />
      <p>Here’s an example. Copy A has a black backdrop and a common model. Copy B has a rare model, an ordinary backdrop and a rare symbol. Someone who just wants a black profile will pick A, while a collector may be willing to pay more for B. That’s why you can’t say which one is “worth more” until you put their rarity values side by side. The pricing logic is covered in more detail here: <Link href="/blog/telegram-gift-price">Why does the same Telegram gift sell at two different prices?</Link></p>
      <h2 id="value-soralgan-narx-va-sotilgan">Value, asking price and sale price: which one should you trust?</h2>
      <p>According to the Telegram FAQ, the “Value” field shows a gift’s approximate resale price. It isn’t the seller’s price, and it isn’t a guaranteed amount.</p>
      <p>The API has a separate method for getting the value of a collectible gift, and its fields include a value in US dollars. The dollar figure is also an estimate, not an actual deal.</p>
      <p>You will see three kinds of numbers in the market:</p>
      <ul>
        <li><b>Value</b>: the system’s approximate estimate.</li>
        <li><b>Asking price</b>: the price the seller set. On black-backdrop copies it can be far above the Value.</li>
        <li><b>Sale price</b>: what a copy actually sold for.</li>
      </ul>
      <p>If the asking price is several times the Value, take your time. Use the filter to look at other copies with the same model and backdrop. If you plan to resell the gift later, the amount you’ll receive is the final figure the app shows in the sale window. This article has not confirmed what fees are deducted.</p>
      <h2 id="qora-fonli-nusxani-somda-olishning">Three ways to buy a black-backdrop copy with soums</h2>
      <CompareTable
        headers={["Option", "What you need", "Best for"]}
        rows={[
          ["Inside Telegram with Stars", "Enough Stars on your balance", "People who want to pick a copy themselves with filters"],
          ["Through the TON blockchain", "A TON wallet and an outside auction site", "People comfortable using a wallet"],
          ["NFT Market in @StarsPaymee_bot", "Just an @username and a payment in soums", "People who want a ready copy without a wallet"],
        ]}
      />
      <p>Inside the app, the seller opens the gift on their profile, taps “Sell” and sets a price in Stars. A gift moved to a TON wallet can be transferred to another owner or put up for auction (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</p>
      <h3>Topping up Stars in soums</h3>
      <p>You need Stars to buy inside the app. At StarsPaymee, the price of 1 Star depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. The minimum order is 50 Stars, and orders usually arrive automatically within a few seconds. More details: <Link href="/stars">Stars page</Link>.</p>
      <h3>Buying through the NFT Market</h3>
      <Steps>
        <Step title={"Open the bot"}>start <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Go to the NFT Market"}>browse the collectible gifts on offer.</Step>
        <Step title={"Compare attributes"}>confirm the backdrop is black and that the model and symbol suit you.</Step>
        <Step title={"Enter the @username"}>tell the bot which account should get the gift. You won’t be asked for a password, SMS code or account access.</Step>
        <Step title={"Pay in soums"}>choose one of the methods shown in the bot: Click, Payme, Uzum, Paynet, UzCard/HUMO card transfer or your bot balance.</Step>
      </Steps>
      <p>The copies listed in the Market change over time, so check the bot to see whether a black-backdrop copy is available. If the one you want isn’t there, ask <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>, or buy Stars and search the in-app market. More about the Market: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> and the <Link href="/gifts">gifts page</Link>.</p>
      <p>Bots can’t send limited gifts that Telegram has taken off sale. Ready collectible (NFT) copies are sold in the NFT Market.</p>
      <h2 id="qora-pepe-taklif-qilgan-sotuvchini">How to vet a seller offering a black Pepe</h2>
      <p>After posts about big sales spread, people start sending private messages offering a “cheap black Pepe.” Before you send any money, check the following:</p>
      <ul>
        <li><b>Open the gift link in Telegram.</b> Check the model, backdrop, symbol and number on the Telegram card, not in the seller’s picture.</li>
        <li><b>Don’t trust screenshots.</b> Editing the backdrop in an image takes a minute.</li>
        <li><b>Don’t pay upfront.</b> If money goes out in a private deal, getting it back can be very hard. Buying through the in-app sale is safer.</li>
        <li><b>Stop the conversation if anyone asks for recovery phrases, a password or an SMS code.</b> None of these are needed to sell a gift.</li>
        <li><b>Compare the price with other filtered copies.</b> If it’s far cheaper than copies with the same attributes, treat that as a serious warning sign.</li>
      </ul>
      <p>How to see a copy’s previous owners and its trail on TON: <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">Checking an NFT gift’s history before you buy</Link>.</p>
      <h2 id="xariddan-keyin-profilga-taqish-saqlash">After the purchase: wearing, storing and protecting the gift</h2>
      <p>Once the gift reaches your account, you can wear it on your profile. Your profile will then match the gift’s black backdrop and symbol.</p>
      <p>If you want to keep it long term, you can convert the collectible gift into an NFT on the TON blockchain. According to the Telegram FAQ, a gift moved to the blockchain stays yours even if you delete your Telegram account. The steps are in a separate article: <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">Moving an NFT gift to the blockchain</Link>.</p>
      <p>If you decide to sell later, you have two options. You can open the gift on your profile, tap “Sell” and set a price in Stars, or you can move it to a TON wallet and put it up for auction.</p>
      <p>While the gift stays in Telegram, it is only as safe as your account. Turn on a two-step verification (2FA) password and check your active sessions now and then. If someone else takes over your account, you could lose the gift too.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain…" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Does every collection have black-backdrop copies?", answer: "It’s safer to assume not, because each collection has its own set of backdrops. If black doesn’t show up in the backdrop filter, try another collection." },
  { question: "Is the backdrop actually called “Black” in the app?", answer: "That isn’t confirmed, and the name may change with the interface language. The reliable way is to open the gift card and look at the colour and the rarity value." },
  { question: "Can I choose a black backdrop when I upgrade a gift?", answer: "Official sources don’t mention that option. Attributes are assigned with set probabilities, so you can’t know the result in advance." },
  { question: "Does crafting improve my chances of getting a black backdrop?", answer: "Crafting lets you combine up to 4 of certain gifts to try for an Uncommon, Rare, Epic or Legendary version. There’s no official information on whether it affects the backdrop." },
  { question: "The seller sent me a picture of a black-backdrop Pepe. Is that enough?", answer: "No, because images are easy to edit. Open the gift link in Telegram and make sure the attributes and number on the card match what the seller described." },
  { question: "If the Value is in dollars, how do I estimate the price in soums?", answer: "You can get a rough estimate with the day’s exchange rate, but Value is an estimate, not a deal price. The exact amount in soums is listed next to each copy in the NFT Market." },
  { question: "What if the NFT Market has no black-backdrop copy right now?", answer: "Check back later or ask @StarsPaymeeSupport. If you’re in a hurry, buy Stars in soums and search the in-app market using the filter." },
  { question: "What information will I be asked for when I buy?", answer: "Only the @username that should receive the gift. You won’t be asked for a password, SMS code or account access." },
  { question: "Can I sell the gift back to StarsPaymee later?", answer: "No, StarsPaymee doesn’t buy gifts or Stars from users. To sell, use the “Sell” button in the app or auction it through a TON wallet." },
  { question: "What will my profile look like if I wear a black-backdrop gift?", answer: "Your profile matches the gift’s backdrop and symbol, so it takes on a dark tone close to the black backdrop. If you take the gift off, your previous look comes back." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["qora fonli nft sovga","qora fonli gift","black fon telegram sovga","nft sovga fon filtri","qora fonli plush pepe","telegram gift backdrop black","nft sovga so'mda sotib olish","черный фон подарок телеграм","nft подарок с черным фоном","фон black telegram gift","купить nft подарок телеграм"],
  howToSteps: [
    { name: "Kolleksiyani tanlang", text: "sovg‘a bozorida kerakli turni, masalan Plush Pepe’ni oching." },
    { name: "Fon filtrini oching", text: "ro‘yxatdan qora fonni belgilang. Faqat shu fonli nusxalar qoladi." },
    { name: "Byudjetga qarab toraytiring", text: "kerak bo‘lsa, model yoki belgi bo‘yicha ham filtr qo‘shing." },
    { name: "Har nusxa kartasini oching", text: "model, fon va belgining noyoblik ko‘rsatkichini yozib oling." },
    { name: "Value maydonini ko‘ring", text: "u nusxaning taxminiy qayta sotish narxini ko‘rsatadi." },
    { name: "Uch-to‘rtta nusxani taqqoslang", text: "keyingi bo‘limdagi jadvaldan foydalaning." },
  ],
  locales: {
    uz: {
      title: "Qora fonli NFT sovg‘a: Black fonni topish, narxini baholash va so‘mda olish",
      excerpt: "Qora fonli NFT sovg‘ani Telegram sovg‘a bozorida fon filtri bilan topasiz, narxini esa model va belgi bilan birga baholaysiz. Ichida filtr qadamlari, taqqoslash jadvali va so‘mda xavfsiz xarid tartibi bor.",
      metaTitle: "Qora fonli NFT sovg‘a: Black fonni topish",
      metaDescription: "Qora fonli NFT sovg‘ani Telegram sovg‘a bozorida fon filtri bilan topasiz, narxini esa model va belgi bilan birga baholaysiz.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "NFT-подарок с чёрным фоном в Telegram: как найти, оценить и купить в сумах",
      excerpt: "Как отыскать NFT-подарок с чёрным фоном через фильтр в маркете Telegram, оценить его цену вместе с моделью и узором и безопасно купить в сумах. Внутри шаги, сравнительная таблица и проверка продавца.",
      metaTitle: "NFT-подарок с чёрным фоном в Telegram",
      metaDescription: "Как отыскать NFT-подарок с чёрным фоном через фильтр в маркете Telegram, оценить его цену вместе с моделью и узором и безопасно купить в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Black Backdrop Telegram NFT Gift: How to Find, Value and Buy One in UZS",
      excerpt: "Use the backdrop filter in Telegram’s gift market to find black-backdrop NFT gifts, then price them by model and symbol as well. This guide covers the filter steps, a comparison table and a safe way to pay in soums.",
      metaTitle: "Black Backdrop Telegram NFT Gift",
      metaDescription: "Use the backdrop filter in Telegram’s gift market to find black-backdrop NFT gifts, then price them by model and symbol as well.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
