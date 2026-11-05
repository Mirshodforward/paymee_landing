import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "nft-sovgadan-imzoni-olib-tashlash";

/**
 * Sotishdan oldin NFT sovg‘adan imzoni olib tashlash: kim qiladi, necha Stars?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Qo'lidagi kolleksion NFT sovg'ani sotmoqchi yoki boshqaga o'tkazmoqchi bo'lgan Telegram foydalanuvchisi undagi yuboruvchi imzosi va izohini qanday olib tashlash va bu necha yulduz turishini «nft sovg'adan imzoni olib tashlash» kabi so'zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://core.telegram.org/type/InputInvoice
 *   https://core.telegram.org/api/gifts
 *   https://core.telegram.org/constructor/savedStarGift
 *   https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html
 *   https://core.telegram.org/constructor/starGiftAttributeOriginalDetails
 *   https://core.telegram.org/constructor/starsTransaction
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, olib tashlasa bo‘ladi. Telegram’da kolleksion sovg‘adagi asl ma’lumotlarni — yuboruvchi, qabul qiluvchi va tabrik matnini — olib tashlash uchun alohida pullik amal bor. To‘lov Stars bilan, Telegram serveri ko‘rsatgan summada qilinadi. Bu huquq sovg‘ani yuborgan odamda emas, uni qabul qilgan egasida. Shuning uchun tozalashni sovg‘a qo‘lingizdan chiqmasdan oldin bajaring.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#sotuvga-qoyishdan-oldin-sovgadagi-imzoni", label: "Sotuvga qo‘yishdan oldin sovg‘adagi imzoni olib tashlasa bo‘ladimi?" },
          { href: "#kolleksion-sovgada-aslida-nima-yozilgan", label: "Kolleksion sovg‘ada aslida nima yozilgan bo‘ladi?" },
          { href: "#tozalash-huquqi-kimda-va-qachon", label: "Tozalash huquqi kimda va qachon bu imkoniyat chiqmaydi?" },
          { href: "#tozalash-summasini-qayerdan-bilasiz", label: "Tozalash summasini qayerdan bilasiz?" },
          { href: "#sovgani-topshirishdan-oldin-qanday-ketma", label: "Sovg‘ani topshirishdan oldin qanday ketma-ketlikda ishlash kerak?" },
          { href: "#kimga-topshirasiz-shunga-qarab-qaror", label: "Kimga topshirasiz — shunga qarab qaror qiling" },
          { href: "#yulduz-yetmasa-balansni-somda-qanday", label: "Yulduz yetmasa, balansni so‘mda qanday to‘ldirasiz?" },
          { href: "#tozalash-bajarilganini-qanday-tasdiqlaysiz", label: "Tozalash bajarilganini qanday tasdiqlaysiz?" },
          { href: "#kimdir-sovgangizni-tozalab-beraman-desa", label: "Kimdir «sovg‘angizni tozalab beraman» desa" },
        ]}
      />
      <h2 id="sotuvga-qoyishdan-oldin-sovgadagi-imzoni">Sotuvga qo‘yishdan oldin sovg‘adagi imzoni olib tashlasa bo‘ladimi?</h2>
      <p>Bo‘ladi. Telegram’dagi to‘lov turlari orasida aynan kolleksion sovg‘adagi asl ma’lumotlarni olib tashlash uchun mo‘ljallangan alohida turi bor. U <a href={"https://core.telegram.org/type/InputInvoice"} target="_blank" rel="noopener noreferrer">InputInvoice hujjatida</a> tasvirlangan.</p>
      <p>Chatlarda bu narsani ko‘pincha «imzo» deyishadi. Telegram hujjatlarida esa u «original details», ya’ni <b>asl ma’lumotlar</b> deb nomlangan. Gap bitta narsa haqida: sovg‘a kimdan kimga va qanday tabrik bilan kelgani haqidagi yozuv.</p>
      <p>Tozalashni sovg‘ani olgan zahoti qilish shart emas. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts sahifasida</a> bu ma’lumot keyinroq alohida to‘lov bilan olib tashlanishi mumkinligi yozilgan. Muhimi — sovg‘ani sotuvga qo‘yish yoki boshqaga o‘tkazishdan oldin bu ishni tugatib qo‘yish.</p>
      <p>Misol: tug‘ilgan kuningizda do‘stingiz «Aziz, 25 yoshing bilan!» deb yozib yuborgan sovg‘ani keyinchalik upgrade qilgansiz. Endi uni bozorga qo‘ysangiz, ismingiz, do‘stingizning ismi va shu tabrik notanish xaridorga ham ko‘rinishi mumkin.</p>
      <h2 id="kolleksion-sovgada-aslida-nima-yozilgan">Kolleksion sovg‘ada aslida nima yozilgan bo‘ladi?</h2>
      <p>Oddiy sovg‘a kolleksionga aylantirilganda (upgrade qilinganda) asl matn, yuboruvchi va qabul qiluvchi yangi sovg‘ada alohida atribut sifatida saqlab qolinishi mumkin (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Saqlanmagan bo‘lsa, olib tashlaydigan narsaning o‘zi bo‘lmaydi.</p>
      <CompareTable
        headers={["Element", "Asl ma’lumotlar tarkibida", "Manba"]}
        rows={[
          ["Yuboruvchi", "Ha, upgrade paytida saqlab qolingan bo‘lsa", <span key="r0c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Qabul qiluvchi", "Ha, upgrade paytida saqlab qolingan bo‘lsa", <span key="r1c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Sovg‘a bilan kelgan xabar", "Ha, xabar yozilgan bo‘lsa", <span key="r2c2"><a href={"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"} target="_blank" rel="noopener noreferrer">starGiftAttributeOriginalDetails</a></span>],
          ["Model, fon, belgi", "Bular sovg‘aning boshqa xususiyatlari, asl ma’lumotlar qatoriga kirmaydi", "—"],
        ]}
      />
      <p>Sana va boshqa mayda tafsilotlar asl ma’lumotlarga aniq qanday kirishi bu maqolada tasdiqlanmagan. Sovg‘angizda nima ko‘rinayotganini kartochkani ochib o‘zingiz tekshiring.</p>
      <p>Hujjatdagi pullik amal faqat asl ma’lumotlar atributini olib tashlashga tegishli. Sovg‘aning qiymatini belgilaydigan model, fon va belgi haqida — <Link href="/blog/telegram-gift-price">nega bir xil sovg‘a ikki xil narxda turadi</Link> maqolasida. Kolleksion sovg‘a o‘zi nima ekanini eslab olmoqchi bo‘lsangiz, <Link href="/blog/telegram-nft-gift-nima">Telegram NFT Gift nima</Link> qo‘llanmasi yordam beradi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="tozalash-huquqi-kimda-va-qachon">Tozalash huquqi kimda va qachon bu imkoniyat chiqmaydi?</h2>
      <p>TDLib hujjatida bu imkoniyat <b>faqat sovg‘a qabul qiluvchisi uchun</b> ekani yozilgan. Imkoniyat bo‘lmasa, narx o‘rnida 0 turadi (<a href={"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html"} target="_blank" rel="noopener noreferrer">TDLib hujjati</a>). Boshqa hujjatda ham shu mantiq bor: Stars summasi ko‘rsatilgan sovg‘adagina asl ma’lumotlarni olib tashlash mumkin (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">savedStarGift</a>).</p>
      <p>Sotuvchi uchun bu quyidagicha ko‘rinadi:</p>
      <ul>
        <li><b>Sovg‘a sizga kelgan</b> — kartochkada olib tashlash taklifi va Stars summasi bor-yo‘qligini qarang.</li>
        <li><b>Sovg‘ani o‘zingiz boshqaga yuborgansiz</b> — qaror endi oluvchida, siz uni o‘zgartira olmaysiz.</li>
        <li><b>Sovg‘ani bozordan sotib olgansiz</b> — bu holatda imkoniyat qanday ishlashi bu maqolada tasdiqlanmagan. Ilova nimani ko‘rsatsa, o‘shanga tayaning.</li>
        <li><b>Upgrade paytida asl ma’lumotlar saqlanmagan</b> — tozalash taklifi chiqmasligi tabiiy, chunki kartochkada ism va tabrik yo‘q.</li>
      </ul>
      <Notice label={"Muhim"}>Narx o‘rnidagi 0 «tekin tozalash» degani emas. U shu sovg‘ada bu amal sizga ochiq emasligini bildiradi.</Notice>
      <h2 id="tozalash-summasini-qayerdan-bilasiz">Tozalash summasini qayerdan bilasiz?</h2>
      <p>Summani Telegram serveri belgilaydi. Hujjatga ko‘ra, u serverdan keladigan alohida maydonda ko‘rsatiladi va aynan shu miqdordagi Stars to‘lanadi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Rasmiy hujjatga aniq raqam yozib qo‘yilmagan, demak u o‘zgarishi mumkin.</p>
      <p>Kanal va chatlarda uchraydigan aniq raqamlar rasmiy manbada tasdiqlanmagan. Ularga qarab oldindan Stars olmang: avval kartochkadagi summani ko‘ring, keyin balansni shunga qarab to‘ldiring.</p>
      <p>Sovg‘ani sotmoqchi bo‘lsangiz, bu summani sotish xarajatlari qatoriga qo‘shib hisoblang. U kichik bo‘lishi mumkin, lekin to‘lov paytida balansingizda yetarli Stars bo‘lishi shart.</p>
      <h2 id="sovgani-topshirishdan-oldin-qanday-ketma">Sovg‘ani topshirishdan oldin qanday ketma-ketlikda ishlash kerak?</h2>
      <p>Ilovadagi tugma va menyular bo‘yicha rasmiy qadamma-qadam yo‘riqnoma topilmadi. Quyidagi ro‘yxat tugma nomlari emas, balki sotuvchi bajaradigan tekshiruv tartibi.</p>
      <Steps>
        <Step title={"Sovg‘ani tanlang"}>profilingizdagi sovg‘alar orasidan sotmoqchi yoki o‘tkazmoqchi bo‘lgan kolleksion sovg‘ani oching.</Step>
        <Step title={"Kartochkani o‘qing"}>yuboruvchi, oluvchi va tabrik matni ko‘rinayotganini tekshiring.</Step>
        <Step title={"Summani aniqlang"}>olib tashlash taklifi va Stars summasi chiqqanini ko‘ring. Chiqmasa, bu sovg‘ada imkoniyat sizda yo‘q.</Step>
        <Step title={"Balansni solishtiring"}>yulduz yetmasa, avval to‘ldiring, keyin sovg‘aga qayting.</Step>
        <Step title={"To‘lovni tasdiqlang"}>server ko‘rsatgan summa Stars balansingizdan yechiladi.</Step>
        <Step title={"Natijani tekshiring"}>kartochkada ism va tabrik yo‘qolganini, Stars tarixida to‘lov yozuvi paydo bo‘lganini ko‘ring.</Step>
        <Step title={"Endi sotuvga qo‘ying yoki o‘tkazing"}>narx belgilash va xavflar haqida <Link href="/blog/telegram-gift-sotish">collectible sovg‘ani sotish qo‘llanmasini</Link> o‘qing.</Step>
      </Steps>
      <p>Tartibni almashtirmang. Sovg‘a boshqa profilga o‘tib ketgach, undagi yozuv ustidan nazorat sizda qolmaydi.</p>
      <h2 id="kimga-topshirasiz-shunga-qarab-qaror">Kimga topshirasiz — shunga qarab qaror qiling</h2>
      <p>Asl ma’lumotlarni olib tashlash majburiy emas. Qaror sovg‘a kimga va nima uchun ketayotganiga bog‘liq.</p>
      <CompareTable
        headers={["Vaziyat", "Tavsiya", "Nega"]}
        rows={[
          ["Bozorda notanish xaridorga sotish", "Sotuvga qo‘yishdan oldin tozalang", "Ism va shaxsiy tabrik begona odamga ko‘rinmaydi"],
          ["Oila a’zosiga o‘tkazish", "O‘zingiz hal qiling", "Birinchi tabrik esdalik sifatida qolishi mumkin"],
          ["Do‘stga qayta sovg‘a qilish", "Ko‘pincha tozalagan ma’qul", "Sizga yozilgan eski tabrik yangi egaga g‘alati ko‘rinadi"],
          ["Hozircha o‘zingizda saqlash", "Shoshilmang", "Hujjatga ko‘ra, olib tashlashni keyinroq ham qilish mumkin"],
        ]}
      />
      <p>Tabrikda telefon raqam, to‘liq ism yoki ish joyi kabi sizni tanitadigan tafsilot bo‘lsa, uni notanish odamga topshirishdan oldin albatta tozalang.</p>
      <p>Asl ma’lumotlar sovg‘aning bozordagi narxini oshiradi yoki tushiradi degan da’volar tasdiqlanmagan. Bu yerda gap faqat shaxsiy qulaylik haqida, foyda va’da qilinmaydi.</p>
      <h2 id="yulduz-yetmasa-balansni-somda-qanday">Yulduz yetmasa, balansni so‘mda qanday to‘ldirasiz?</h2>
      <p>Stars’ni O‘zbekistonda so‘mda <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali olish mumkin. Bir dona Stars narxi to‘lov usuliga bog‘liq:</p>
      <ul>
        <li>karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")};</li>
        <li>Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>Botdagi eng kam buyurtma — <b>50 Stars</b>. Tozalash uchun sizga bir nechta yulduz yetmayotgan bo‘lsa ham, buyurtma 50 tadan boshlanadi. Ortib qolgan yulduzlar Telegram balansingizda turadi va keyingi xaridlarga ishlatiladi.</p>
      <p>Buyurtmada sovg‘a turgan akkauntning @username’ini kiriting: yulduz aynan o‘sha balansga tushishi kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Stars odatda bir necha soniyada avtomatik yetkaziladi. Xalqaro karta, kripto hamyon yoki VPN kerak emas; Paynet ilovasi yoki terminalida naqd to‘lash ham mumkin.</p>
      <p>Narx va to‘lov usullari <Link href="/stars">Stars sahifasida</Link> jamlangan, xaridning to‘liq tartibi esa <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">O‘zbekistonda Telegram Stars sotib olish</Link> qo‘llanmasida.</p>
      <h2 id="tozalash-bajarilganini-qanday-tasdiqlaysiz">Tozalash bajarilganini qanday tasdiqlaysiz?</h2>
      <p>Asl ma’lumotlarni olib tashlash uchun to‘lov Stars tranzaksiyalari tarixida alohida turdagi yozuv sifatida chiqadi (<a href={"https://core.telegram.org/constructor/starsTransaction"} target="_blank" rel="noopener noreferrer">starsTransaction</a>). U reaksiya yoki sovg‘a xaridlari bilan aralashib ketmaydi, shuning uchun nima uchun yechilgani ko‘rinib turadi.</p>
      <p>Stars tarixi Telegram’ning qaysi bo‘limida turishini bilmasangiz, <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> maqolasiga qarang.</p>
      <p>Muammo chiqsa, avval uning turini aniqlang:</p>
      <ul>
        <li><b>Stars yechilgan, ammo kartochkada ism yoki tabrik qolgan</b> — ilovani yangilang va sovg‘ani qayta oching. O‘zgarmasa, Telegram yordamiga yozing: amal Telegram ichida bajarilgan.</li>
        <li><b>Botdan olingan Stars balansga tushmagan</b> — buyurtma ma’lumotlari bilan <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali yordamga murojaat qiling.</li>
      </ul>
      <h2 id="kimdir-sovgangizni-tozalab-beraman-desa">Kimdir «sovg‘angizni tozalab beraman» desa</h2>
      <p>Tozalash faqat sovg‘ani qabul qilgan odamning o‘z akkauntida bajariladi. Begona odam buni siz uchun qilishi uchun akkauntingizga kirishi yoki sovg‘ani o‘ziga olishi kerak. Ikkalasi ham sovg‘ani yo‘qotishga olib kelishi mumkin.</p>
      <p>Quyidagilarni ko‘rsangiz, suhbatni to‘xtating:</p>
      <ul>
        <li>Telegram’ga kirish kodi, SMS kod yoki ikki bosqichli parol so‘ralsa.</li>
        <li>Sovg‘ani «tozalash uchun vaqtincha» ularga o‘tkazish so‘ralsa.</li>
        <li>Telegram oynasidan tashqarida, kartaga «xizmat haqi» to‘lash taklif qilinsa.</li>
      </ul>
      <Notice label={"Muhim"}>Tozalash summasi faqat Telegram’ning o‘z to‘lov oynasida, sizning akkauntingizda tasdiqlanadi. Boshqa joyga to‘lanadigan pul bu amalga aloqador emas.</Notice>
      <p>StarsPaymee foydalanuvchilardan Stars va sovg‘alarni sotib olmaydi. Shu nomdan «sovg‘angizni sotib olaman» yoki «tozalab beraman» degan xabar kelsa, u soxta. O‘zingizga tayyor kolleksion sovg‘a kerak bo‘lsa, botda so‘mda ishlaydigan NFT Market bor — batafsil <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> maqolasida.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/type/InputInvoice", label: "InputInvoice" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html", label: "TDLib: messageUpgradedGift Class Reference" },
          { href: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails", label: "starGiftAttributeOriginalDetails" },
          { href: "https://core.telegram.org/constructor/starsTransaction", label: "starsTransaction" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Sovg‘ani sotib bo‘lgach, eski tabrikni olib tashlash mumkinmi?", answer: "Tozalash sovg‘a egasining akkauntida qilinadi. Sovg‘a profilingizdan chiqib ketgach, bu qaror sizga bog‘liq bo‘lmay qoladi, shuning uchun uni sotuvga qo‘yishdan oldin bajaring." },
  { question: "Xaridor sovg‘ani olgach, men yozgan tabrikni o‘zi olib tashlay oladimi?", answer: "Hujjatda imkoniyat sovg‘a qabul qiluvchisiga berilishi yozilgan, lekin bozor orqali sotilgan sovg‘ada bu qanday ishlashi bu maqolada tasdiqlanmagan. Ismingiz begonaga ko‘rinmasligi muhim bo‘lsa, buni xaridorga qoldirmang." },
  { question: "Sovg‘ani o‘zim yuborganman — oluvchidan ismimni olib tashlashni so‘rasam bo‘ladimi?", answer: "So‘rash mumkin, lekin amalni faqat oluvchi o‘z akkauntida bajara oladi va Stars ham uning balansidan yechiladi. Siz yuboruvchi sifatida bu yozuvni o‘zgartira olmaysiz." },
  { question: "Bir kolleksiyadagi ikki sovg‘amdan birida tozalash taklifi bor, ikkinchisida yo‘q — nega?", answer: "Imkoniyat har bir nusxaga alohida bog‘liq. Ehtimol, ikkinchisida upgrade paytida asl ma’lumotlar saqlanmagan yoki u sizga qabul qiluvchi sifatida kelmagan." },
  { question: "Do‘stim tozalash uchun qancha to‘laganini aytdi — menda ham shuncha bo‘ladimi?", answer: "Bunga tayanmang: summani Telegram serveri belgilaydi va rasmiy hujjatda qat’iy raqam yo‘q. O‘z sovg‘angiz kartochkasida ko‘rsatilgan summaga qarang." },
  { question: "Tozalashdan keyin fikrimdan qaytsam, tabrikni qayta qo‘yib bo‘ladimi?", answer: "Biz ko‘rgan rasmiy hujjat sahifalarida faqat olib tashlash tasvirlangan, qayta tiklash yo‘li yo‘q. To‘lovni tasdiqlashdan oldin buni orqaga qaytmaydigan qadam deb hisoblang." },
  { question: "Tozalash uchun StarsPaymee’dan necha dona Stars olishim kerak?", answer: "Botda eng kam buyurtma 50 Stars, hatto sizga bir nechtasi yetmayotgan bo‘lsa ham. Ortgani Telegram balansingizda qoladi va boshqa xaridlarga sarflanadi." },
  { question: "Sovg‘a ikkinchi akkauntimda turibdi — Stars’ni qaysi username’ga olay?", answer: "Sovg‘a turgan akkauntning username’ini kiriting, chunki to‘lov o‘sha akkaunt balansidan yechiladi. Boshqa akkauntga tushgan yulduzni tozalash uchun ishlata olmaysiz." },
  { question: "StarsPaymee mening NFT sovg‘amni sotib oladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan sovg‘a ham, Stars ham sotib olmaydi. Botdagi NFT Market faqat tayyor kolleksion sovg‘ani so‘mda xarid qilish uchun." },
  { question: "Stars yechildi, ammo ism hamon ko‘rinyapti — kimga yozaman?", answer: "Ilovani yangilab, sovg‘ani qayta oching va Stars tarixidagi yozuvni tekshiring. Holat o‘zgarmasa, Telegram yordamiga yozing; agar muammo botdan olingan yulduz tushmagani bo‘lsa — @StarsPaymeeSupport’ga." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, убрать можно. В Telegram есть отдельное платное действие, которое удаляет с коллекционного подарка исходные данные: отправителя, получателя и текст поздравления. Оплата идёт в Stars, в сумме, которую показывает сервер Telegram. Это право есть не у отправителя, а у получателя-владельца. Поэтому очистку нужно сделать до того, как подарок уйдёт из ваших рук.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#sotuvga-qoyishdan-oldin-sovgadagi-imzoni", label: "Можно ли убрать подпись с подарка перед продажей?" },
          { href: "#kolleksion-sovgada-aslida-nima-yozilgan", label: "Что на самом деле записано в коллекционном подарке?" },
          { href: "#tozalash-huquqi-kimda-va-qachon", label: "У кого есть право на очистку и когда эта опция не появляется?" },
          { href: "#tozalash-summasini-qayerdan-bilasiz", label: "Где узнать стоимость очистки?" },
          { href: "#sovgani-topshirishdan-oldin-qanday-ketma", label: "В каком порядке действовать перед передачей подарка?" },
          { href: "#kimga-topshirasiz-shunga-qarab-qaror", label: "Решайте в зависимости от того, кому отдаёте" },
          { href: "#yulduz-yetmasa-balansni-somda-qanday", label: "Не хватает звёзд — как пополнить баланс в сумах?" },
          { href: "#tozalash-bajarilganini-qanday-tasdiqlaysiz", label: "Как убедиться, что очистка прошла?" },
          { href: "#kimdir-sovgangizni-tozalab-beraman-desa", label: "Если кто-то предлагает «почистить ваш подарок»" },
        ]}
      />
      <h2 id="sotuvga-qoyishdan-oldin-sovgadagi-imzoni">Можно ли убрать подпись с подарка перед продажей?</h2>
      <p>Можно. Среди типов платежей в Telegram есть отдельный, предназначенный именно для удаления исходных данных с коллекционного подарка. Он описан в <a href={"https://core.telegram.org/type/InputInvoice"} target="_blank" rel="noopener noreferrer">документации InputInvoice</a>.</p>
      <p>В чатах это обычно называют «подписью». В документации Telegram используется термин «original details», то есть <b>исходные данные</b>. Речь об одном и том же: о записи, от кого, кому и с каким поздравлением пришёл подарок.</p>
      <p>Делать очистку сразу после получения подарка не обязательно. На <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">странице Telegram Gifts</a> сказано, что эти данные можно удалить позже отдельным платежом. Главное — закончить с этим до того, как выставите подарок на продажу или передадите его другому человеку.</p>
      <p>Пример: на день рождения друг прислал вам подарок с подписью «Азиз, с 25-летием!», а позже вы сделали его коллекционным (upgrade). Если теперь выставить его на маркет, ваше имя, имя друга и само поздравление может увидеть незнакомый покупатель.</p>
      <h2 id="kolleksion-sovgada-aslida-nima-yozilgan">Что на самом деле записано в коллекционном подарке?</h2>
      <p>Когда обычный подарок превращают в коллекционный (делают upgrade), исходный текст, отправитель и получатель могут сохраниться в новом подарке как отдельный атрибут (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Если их не сохранили, удалять просто нечего.</p>
      <CompareTable
        headers={["Элемент", "Входит в исходные данные", "Источник"]}
        rows={[
          ["Отправитель", "Да, если был сохранён при upgrade", <span key="r0c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Получатель", "Да, если был сохранён при upgrade", <span key="r1c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Сообщение, пришедшее с подарком", "Да, если оно было написано", <span key="r2c2"><a href={"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"} target="_blank" rel="noopener noreferrer">starGiftAttributeOriginalDetails</a></span>],
          ["Модель, фон, символ", "Это другие характеристики подарка, к исходным данным они не относятся", "—"],
        ]}
      />
      <p>Как именно в исходные данные попадают дата и другие мелочи, в этой статье не подтверждено. Что видно на вашем подарке, проверьте сами, открыв его карточку.</p>
      <p>Платное действие из документации касается только атрибута исходных данных. О модели, фоне и символе, от которых зависит ценность подарка, — в статье <Link href="/blog/telegram-gift-price">почему один и тот же подарок стоит по-разному</Link>. А если хотите вспомнить, что такое коллекционный подарок вообще, поможет руководство <Link href="/blog/telegram-nft-gift-nima">что такое NFT-подарок в Telegram</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="tozalash-huquqi-kimda-va-qachon">У кого есть право на очистку и когда эта опция не появляется?</h2>
      <p>В документации TDLib сказано, что эта возможность есть <b>только у получателя подарка</b>. Если она недоступна, вместо цены стоит 0 (<a href={"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html"} target="_blank" rel="noopener noreferrer">документация TDLib</a>). В другом разделе документации та же логика: исходные данные можно удалить только у подарка, для которого указана сумма в Stars (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">savedStarGift</a>).</p>
      <p>Для продавца это выглядит так:</p>
      <ul>
        <li><b>Подарок пришёл вам</b> — посмотрите, есть ли в карточке предложение удалить данные и сумма в Stars.</li>
        <li><b>Вы сами отправили подарок другому</b> — решение теперь за получателем, вы ничего изменить не можете.</li>
        <li><b>Вы купили подарок на маркете</b> — как работает опция в этом случае, в статье не подтверждено. Ориентируйтесь на то, что показывает приложение.</li>
        <li><b>При upgrade исходные данные не сохранили</b> — предложения очистить не будет, и это нормально: в карточке нет ни имени, ни поздравления.</li>
      </ul>
      <Notice label={"Важно"}>0 вместо цены не означает «бесплатную очистку». Это значит, что для этого подарка действие вам недоступно.</Notice>
      <h2 id="tozalash-summasini-qayerdan-bilasiz">Где узнать стоимость очистки?</h2>
      <p>Сумму определяет сервер Telegram. Согласно документации, она приходит с сервера в отдельном поле, и оплачивается ровно это количество Stars (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Конкретной цифры в официальной документации нет, значит, она может меняться.</p>
      <p>Точные цифры, которые встречаются в каналах и чатах, официальным источником не подтверждены. Не покупайте Stars заранее по ним: сначала посмотрите сумму в карточке, а потом пополняйте баланс под неё.</p>
      <p>Если собираетесь продавать подарок, заложите эту сумму в расходы на продажу. Она может быть небольшой, но в момент оплаты на балансе должно хватать Stars.</p>
      <h2 id="sovgani-topshirishdan-oldin-qanday-ketma">В каком порядке действовать перед передачей подарка?</h2>
      <p>Официальной пошаговой инструкции по кнопкам и меню приложения найти не удалось. Ниже — не названия кнопок, а порядок проверки, который выполняет продавец.</p>
      <Steps>
        <Step title={"Выберите подарок"}>откройте в профиле тот коллекционный подарок, который хотите продать или передать.</Step>
        <Step title={"Изучите карточку"}>проверьте, видны ли отправитель, получатель и текст поздравления.</Step>
        <Step title={"Узнайте сумму"}>посмотрите, появилось ли предложение удалить данные и сумма в Stars. Если нет — для этого подарка у вас такой возможности нет.</Step>
        <Step title={"Сверьте баланс"}>если звёзд не хватает, сначала пополните его, затем вернитесь к подарку.</Step>
        <Step title={"Подтвердите оплату"}>сумма, указанная сервером, спишется с вашего баланса Stars.</Step>
        <Step title={"Проверьте результат"}>убедитесь, что имя и поздравление исчезли из карточки, а в истории Stars появилась запись о платеже.</Step>
        <Step title={"Теперь выставляйте на продажу или передавайте"}>про установку цены и риски читайте в <Link href="/blog/telegram-gift-sotish">руководстве по продаже коллекционного подарка</Link>.</Step>
      </Steps>
      <p>Не меняйте порядок. Когда подарок перешёл в другой профиль, контроль над записью на нём у вас уже не остаётся.</p>
      <h2 id="kimga-topshirasiz-shunga-qarab-qaror">Решайте в зависимости от того, кому отдаёте</h2>
      <p>Удалять исходные данные не обязательно. Решение зависит от того, кому и зачем уходит подарок.</p>
      <CompareTable
        headers={["Ситуация", "Рекомендация", "Почему"]}
        rows={[
          ["Продажа незнакомцу на маркете", "Очистите до выставления на продажу", "Имя и личное поздравление не увидит посторонний"],
          ["Передача члену семьи", "Решайте сами", "Первое поздравление может остаться на память"],
          ["Передарить другу", "Чаще лучше очистить", "Старое поздравление, адресованное вам, будет странно смотреться у нового владельца"],
          ["Пока оставляете себе", "Не торопитесь", "По документации удалить данные можно и позже"],
        ]}
      />
      <p>Если в поздравлении есть то, что вас выдаёт, — номер телефона, полное имя или место работы, — обязательно очистите подарок, прежде чем отдавать его незнакомому человеку.</p>
      <p>Утверждения, что исходные данные повышают или снижают рыночную цену подарка, не подтверждены. Здесь речь только о личном удобстве, никакой выгоды не обещаем.</p>
      <h2 id="yulduz-yetmasa-balansni-somda-qanday">Не хватает звёзд — как пополнить баланс в сумах?</h2>
      <p>Stars в Узбекистане можно купить за сумы через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Цена одной звезды зависит от способа оплаты:</p>
      <ul>
        <li>переводом на карту (UzCard/HUMO) или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")};</li>
        <li>через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
      </ul>
      <p>Минимальный заказ в боте — <b>50 Stars</b>. Даже если для очистки не хватает всего нескольких звёзд, заказ начинается с 50. Оставшиеся звёзды лежат на вашем балансе в Telegram и пригодятся для следующих покупок.</p>
      <p>В заказе укажите @username аккаунта, на котором лежит подарок: звёзды должны прийти именно на этот баланс. Пароль, SMS-код или доступ к аккаунту не нужны. Stars обычно доставляются автоматически за несколько секунд. Зарубежная карта, криптокошелёк или VPN не нужны; можно заплатить и наличными через приложение или терминал Paynet.</p>
      <p>Цены и способы оплаты собраны на <Link href="/stars">странице Stars</Link>, а полный порядок покупки — в руководстве <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">как купить Telegram Stars в Узбекистане</Link>.</p>
      <h2 id="tozalash-bajarilganini-qanday-tasdiqlaysiz">Как убедиться, что очистка прошла?</h2>
      <p>Платёж за удаление исходных данных появляется в истории транзакций Stars как запись отдельного типа (<a href={"https://core.telegram.org/constructor/starsTransaction"} target="_blank" rel="noopener noreferrer">starsTransaction</a>). Он не смешивается с реакциями или покупкой подарков, поэтому видно, за что списаны звёзды.</p>
      <p>Если не знаете, в каком разделе Telegram находится история Stars, загляните в статью <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</p>
      <p>Если что-то пошло не так, сначала определите тип проблемы:</p>
      <ul>
        <li><b>Stars списались, но имя или поздравление остались в карточке</b> — обновите приложение и откройте подарок заново. Если ничего не изменилось, пишите в поддержку Telegram: действие выполнялось внутри Telegram.</li>
        <li><b>Stars, купленные в боте, не пришли на баланс</b> — обратитесь в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> с данными заказа.</li>
      </ul>
      <h2 id="kimdir-sovgangizni-tozalab-beraman-desa">Если кто-то предлагает «почистить ваш подарок»</h2>
      <p>Очистка выполняется только в аккаунте того, кто получил подарок. Чтобы посторонний сделал это за вас, ему придётся зайти в ваш аккаунт или забрать подарок себе. И то и другое может закончиться потерей подарка.</p>
      <p>Прекращайте разговор, если видите следующее:</p>
      <ul>
        <li>просят код входа в Telegram, SMS-код или пароль двухэтапной проверки;</li>
        <li>просят передать им подарок «временно, для очистки»;</li>
        <li>предлагают оплатить «услугу» переводом на карту, вне окна Telegram.</li>
      </ul>
      <Notice label={"Важно"}>Сумма за очистку подтверждается только в собственном платёжном окне Telegram, в вашем аккаунте. Деньги, которые платятся куда-то ещё, к этому действию отношения не имеют.</Notice>
      <p>StarsPaymee не покупает у пользователей Stars и подарки. Если от этого имени приходит сообщение «куплю ваш подарок» или «почищу его», это подделка. Если вам самим нужен готовый коллекционный подарок, в боте есть NFT Market с оплатой в сумах — подробнее в статье <Link href="/blog/starspaymee-nft-market">NFT Market в StarsPaymee</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/type/InputInvoice", label: "InputInvoice" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html", label: "TDLib: messageUpgradedGift Class Reference" },
          { href: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails", label: "starGiftAttributeOriginalDetails" },
          { href: "https://core.telegram.org/constructor/starsTransaction", label: "starsTransaction" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли убрать старое поздравление, когда подарок уже продан?", answer: "Очистка делается в аккаунте владельца подарка. Как только подарок ушёл из вашего профиля, решение уже не за вами, поэтому делайте это до выставления на продажу." },
  { question: "Сможет ли покупатель сам удалить моё поздравление, когда получит подарок?", answer: "В документации сказано, что возможность даётся получателю подарка, но как это работает для подарка, проданного через маркет, в статье не подтверждено. Если важно, чтобы ваше имя не видели посторонние, не оставляйте это покупателю." },
  { question: "Подарок отправлял я — можно попросить получателя убрать моё имя?", answer: "Попросить можно, но выполнить действие может только получатель в своём аккаунте, и Stars спишутся с его баланса. Как отправитель вы эту запись изменить не можете." },
  { question: "У двух моих подарков из одной коллекции предложение очистки есть только у одного — почему?", answer: "Возможность привязана к каждому экземпляру отдельно. Скорее всего, у второго при upgrade не сохранили исходные данные или он пришёл к вам не как к получателю." },
  { question: "Друг сказал, сколько заплатил за очистку, — у меня будет столько же?", answer: "Не рассчитывайте на это: сумму определяет сервер Telegram, фиксированной цифры в официальной документации нет. Смотрите на сумму в карточке своего подарка." },
  { question: "Если передумаю после очистки, можно вернуть поздравление?", answer: "На страницах официальной документации, которые мы видели, описано только удаление, способа восстановить данные нет. Считайте этот шаг необратимым ещё до подтверждения оплаты." },
  { question: "Сколько Stars нужно купить в StarsPaymee для очистки?", answer: "Минимальный заказ в боте — 50 Stars, даже если вам не хватает всего нескольких. Остаток останется на вашем балансе в Telegram и пойдёт на другие покупки." },
  { question: "Подарок лежит на втором аккаунте — на какой username покупать Stars?", answer: "Указывайте username аккаунта, где лежит подарок, ведь оплата спишется с его баланса. Звёзды, пришедшие на другой аккаунт, для очистки использовать не получится." },
  { question: "Купит ли StarsPaymee мой NFT-подарок?", answer: "Нет, StarsPaymee не покупает у пользователей ни подарки, ни Stars. NFT Market в боте нужен только для покупки готовых коллекционных подарков за сумы." },
  { question: "Stars списались, а имя всё ещё видно — куда писать?", answer: "Обновите приложение, откройте подарок заново и проверьте запись в истории Stars. Если ничего не изменилось, пишите в поддержку Telegram, а если не пришли звёзды, купленные в боте, — в @StarsPaymeeSupport." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can remove it. Telegram has a separate paid action that strips a collectible gift’s original details: the sender, the recipient and the greeting text. You pay in Stars, in the amount Telegram’s server shows. The right belongs to the owner who received the gift, not the person who sent it. Clean the gift up before it leaves your hands.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#sotuvga-qoyishdan-oldin-sovgadagi-imzoni", label: "Can you remove the signature from a gift before listing it for sale?" },
          { href: "#kolleksion-sovgada-aslida-nima-yozilgan", label: "What is actually written on a collectible gift?" },
          { href: "#tozalash-huquqi-kimda-va-qachon", label: "Who can remove it, and when does the option not appear?" },
          { href: "#tozalash-summasini-qayerdan-bilasiz", label: "Where do you find the removal price?" },
          { href: "#sovgani-topshirishdan-oldin-qanday-ketma", label: "In what order should you work before handing the gift over?" },
          { href: "#kimga-topshirasiz-shunga-qarab-qaror", label: "Decide based on who gets the gift" },
          { href: "#yulduz-yetmasa-balansni-somda-qanday", label: "Not enough Stars? How to top up in soums" },
          { href: "#tozalash-bajarilganini-qanday-tasdiqlaysiz", label: "How to confirm the removal went through" },
          { href: "#kimdir-sovgangizni-tozalab-beraman-desa", label: "When someone offers to “clean your gift”" },
        ]}
      />
      <h2 id="sotuvga-qoyishdan-oldin-sovgadagi-imzoni">Can you remove the signature from a gift before listing it for sale?</h2>
      <p>Yes. Among Telegram’s payment types, one exists specifically to remove the original details from a collectible gift. It is described in the <a href={"https://core.telegram.org/type/InputInvoice"} target="_blank" rel="noopener noreferrer">InputInvoice documentation</a>.</p>
      <p>In chats, people often call this the “signature.” Telegram’s documentation calls it the <b>original details</b>. Both terms mean the same record: who sent the gift to whom, and with what message.</p>
      <p>You don’t have to remove it the moment you receive the gift. The <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts page</a> says this information can be removed later with a separate payment. What matters is finishing the job before you list the gift for sale or transfer it to someone else.</p>
      <p>An example: on your birthday a friend sent you a gift with the note “Aziz, happy 25th!”, and you later upgraded it. If you put it on the market now, your name, your friend’s name and that greeting may be visible to a stranger who buys it.</p>
      <h2 id="kolleksion-sovgada-aslida-nima-yozilgan">What is actually written on a collectible gift?</h2>
      <p>When a regular gift is turned into a collectible (upgraded), the original text, sender and receiver can be kept in the new gift as a separate attribute (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). If they weren’t kept, there is nothing to remove.</p>
      <CompareTable
        headers={["Element", "Part of the original details?", "Source"]}
        rows={[
          ["Sender", "Yes, if it was kept during the upgrade", <span key="r0c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Receiver", "Yes, if it was kept during the upgrade", <span key="r1c2"><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a></span>],
          ["Message attached to the gift", "Yes, if a message was written", <span key="r2c2"><a href={"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"} target="_blank" rel="noopener noreferrer">starGiftAttributeOriginalDetails</a></span>],
          ["Model, backdrop, symbol", "No. These are separate properties of the gift, not part of the original details", "—"],
        ]}
      />
      <p>This article has not confirmed exactly how the date and other small details fit into the original details. Open the gift card and check for yourself what your gift shows.</p>
      <p>The paid action in the documentation applies only to removing the original details attribute. For the model, backdrop and symbol that drive a gift’s value, see <Link href="/blog/telegram-gift-price">why the same gift sells at two different prices</Link>. If you want a refresher on what a collectible gift is, the <Link href="/blog/telegram-nft-gift-nima">What is a Telegram NFT Gift</Link> guide will help.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="tozalash-huquqi-kimda-va-qachon">Who can remove it, and when does the option not appear?</h2>
      <p>The TDLib documentation states that this option is <b>only for the receiver of the gift</b>. If it isn’t available, the price shows as 0 (<a href={"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html"} target="_blank" rel="noopener noreferrer">TDLib documentation</a>). Another document follows the same logic: the original details can be removed only on a gift that has a Stars amount specified (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">savedStarGift</a>).</p>
      <p>For a seller, it works out like this:</p>
      <ul>
        <li><b>The gift was sent to you.</b> Check the gift card for a removal offer and a Stars amount.</li>
        <li><b>You sent the gift to someone else.</b> The decision is now the recipient’s, and you can’t change it.</li>
        <li><b>You bought the gift on the market.</b> This article hasn’t confirmed how the option works in that case. Go by what the app shows you.</li>
        <li><b>The original details weren’t kept during the upgrade.</b> No removal offer will appear, because there is no name or greeting on the card.</li>
      </ul>
      <Notice label={"Important"}>A 0 in the price field doesn’t mean the removal costs nothing. It means the action isn’t available to you on this gift.</Notice>
      <h2 id="tozalash-summasini-qayerdan-bilasiz">Where do you find the removal price?</h2>
      <p>Telegram’s server sets the price. According to the documentation, it arrives in a separate field from the server, and you pay exactly that number of Stars (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). The official documentation doesn’t fix a specific number, so the price may change.</p>
      <p>The specific figures you see in channels and chats have not been confirmed by an official source. Don’t buy Stars in advance based on them. Check the amount on the gift card first, then top up your balance to match.</p>
      <p>If you plan to sell the gift, count this amount as part of your selling costs. It may be small, but you need enough Stars on your balance when you pay.</p>
      <h2 id="sovgani-topshirishdan-oldin-qanday-ketma">In what order should you work before handing the gift over?</h2>
      <p>No official step-by-step guide to the app’s buttons and menus was found. The list below is a seller’s checking routine. It does not name the actual buttons.</p>
      <Steps>
        <Step title={"Pick the gift"}>open the collectible gift you want to sell or transfer from the gifts on your profile.</Step>
        <Step title={"Read the card"}>check whether the sender, the recipient and the greeting text are visible.</Step>
        <Step title={"Find the price"}>see whether a removal offer and a Stars amount appear. If they don’t, the option isn’t yours on this gift.</Step>
        <Step title={"Compare with your balance"}>if you’re short on Stars, top up first, then come back to the gift.</Step>
        <Step title={"Confirm the payment"}>the amount shown by the server is deducted from your Stars balance.</Step>
        <Step title={"Check the result"}>make sure the name and greeting are gone from the card and a payment entry appears in your Stars history.</Step>
        <Step title={"Now list or transfer it"}>for pricing and risks, read the <Link href="/blog/telegram-gift-sotish">guide to selling a collectible gift</Link>.</Step>
      </Steps>
      <p>Don’t change the order. Once the gift moves to another profile, you no longer control what’s written on it.</p>
      <h2 id="kimga-topshirasiz-shunga-qarab-qaror">Decide based on who gets the gift</h2>
      <p>Removing the original details is optional. The right call depends on who the gift is going to and why.</p>
      <CompareTable
        headers={["Situation", "Recommendation", "Why"]}
        rows={[
          ["Selling to a stranger on the market", "Remove before listing", "Your name and personal greeting stay hidden from a stranger"],
          ["Transferring to a family member", "Your choice", "The original greeting can stay as a keepsake"],
          ["Re-gifting to a friend", "Usually better to remove", "An old greeting addressed to you looks odd to the new owner"],
          ["Keeping it for now", "No rush", "According to the documentation, you can remove the details later"],
        ]}
      />
      <p>If the greeting contains anything that identifies you, such as a phone number, full name or workplace, always remove it before handing the gift to someone you don’t know.</p>
      <p>Claims that the original details raise or lower a gift’s market price are unconfirmed. Removing them is about privacy, with no promise of profit.</p>
      <h2 id="yulduz-yetmasa-balansni-somda-qanday">Not enough Stars? How to top up in soums</h2>
      <p>In Uzbekistan you can buy Stars in soums through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. The price per Star depends on the payment method:</p>
      <ul>
        <li>card transfer (UzCard/HUMO) or bot balance — {som(STARS_PER_UNIT_UZS, "en")};</li>
        <li>Click, Payme, Uzum or Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
      </ul>
      <p>The minimum order in the bot is <b>50 Stars</b>. Even if you’re only a few Stars short for the removal, orders start at 50. Leftover Stars stay on your Telegram balance for future purchases.</p>
      <p>In the order, enter the @username of the account that holds the gift, because the Stars need to land on that balance. You won’t be asked for a password, SMS code or account access. Stars are usually delivered automatically within a few seconds. You don’t need an international card, a crypto wallet or a VPN, and you can also pay in cash through the Paynet app or a Paynet terminal.</p>
      <p>Prices and payment methods are collected on the <Link href="/stars">Stars page</Link>, and the full buying process is in the <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Telegram Stars in Uzbekistan</Link>.</p>
      <h2 id="tozalash-bajarilganini-qanday-tasdiqlaysiz">How to confirm the removal went through</h2>
      <p>The payment for removing the original details shows up in your Stars transaction history as its own entry type (<a href={"https://core.telegram.org/constructor/starsTransaction"} target="_blank" rel="noopener noreferrer">starsTransaction</a>). It doesn’t blend in with reactions or gift purchases, so you can see what the Stars were spent on.</p>
      <p>If you’re not sure where Telegram keeps your Stars history, see <Link href="/blog/telegram-stars-balansini-tekshirish">how to check your Stars balance</Link>.</p>
      <p>If something goes wrong, first figure out what kind of problem it is:</p>
      <ul>
        <li><b>Stars were deducted, but the name or greeting is still on the card.</b> Update the app and reopen the gift. If nothing changes, contact Telegram support, since the action took place inside Telegram.</li>
        <li><b>Stars bought from the bot didn’t arrive.</b> Contact <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details.</li>
      </ul>
      <h2 id="kimdir-sovgangizni-tozalab-beraman-desa">When someone offers to “clean your gift”</h2>
      <p>The removal can only be done in the account of the person who received the gift. For a stranger to do it for you, they would have to log into your account or take the gift themselves. Either way, you could lose the gift.</p>
      <p>End the conversation if you see any of these:</p>
      <ul>
        <li>They ask for your Telegram login code, SMS code or two-step verification password.</li>
        <li>They ask you to transfer the gift to them “temporarily, for cleaning.”</li>
        <li>They offer to take a “service fee” by card, outside the Telegram window.</li>
      </ul>
      <Notice label={"Important"}>The removal price is confirmed only in Telegram’s own payment window, in your account. Money paid anywhere else has nothing to do with this action.</Notice>
      <p>StarsPaymee doesn’t buy Stars or gifts from users. If you get a message in its name saying “I’ll buy your gift” or “I’ll clean it for you,” it’s fake. If you want a ready-made collectible gift for yourself, the bot has an NFT Market that works in soums. See <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> for details.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/type/InputInvoice", label: "InputInvoice" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html", label: "TDLib: messageUpgradedGift Class Reference" },
          { href: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails", label: "starGiftAttributeOriginalDetails" },
          { href: "https://core.telegram.org/constructor/starsTransaction", label: "starsTransaction" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I remove the old greeting after I’ve already sold the gift?", answer: "Removal happens in the gift owner’s account. Once the gift has left your profile, the decision is no longer yours, so do it before you list the gift." },
  { question: "Once the buyer has the gift, can they remove the greeting I wrote themselves?", answer: "The documentation says the option goes to the gift’s receiver, but this article hasn’t confirmed how that works for a gift sold on the market. If you don’t want strangers to see your name, don’t leave it to the buyer." },
  { question: "I sent the gift myself. Can I ask the recipient to remove my name?", answer: "You can ask. Only the recipient can perform the action in their own account, and the Stars come off their balance. As the sender, you can’t change that record." },
  { question: "I have two gifts from the same collection, and only one shows a removal offer. Why?", answer: "The option depends on each individual copy. The second one probably didn’t keep its original details during the upgrade, or it didn’t come to you as the receiver." },
  { question: "A friend told me how much he paid for removal. Will it cost me the same?", answer: "Don’t count on it. Telegram’s server sets the amount, and the official documentation gives no fixed number. Go by the amount shown on your own gift card." },
  { question: "If I change my mind after removal, can I put the greeting back?", answer: "The official documentation pages we reviewed describe only removal, with no way to restore the details. Treat confirming the payment as a step you can’t undo." },
  { question: "How many Stars should I buy from StarsPaymee for the removal?", answer: "The minimum order in the bot is 50 Stars, even if you only need a few. The rest stays on your Telegram balance and can be spent on other purchases." },
  { question: "The gift is on my second account. Which username should I buy Stars for?", answer: "Enter the username of the account that holds the gift, since the payment comes from that account’s balance. Stars sent to a different account can’t be used for the removal." },
  { question: "Will StarsPaymee buy my NFT gift?", answer: "No, StarsPaymee doesn’t buy gifts or Stars from users. The NFT Market in the bot is only for buying ready-made collectible gifts in soums." },
  { question: "Stars were deducted but the name still shows. Who do I contact?", answer: "Update the app, reopen the gift and check the entry in your Stars history. If nothing changes, contact Telegram support. If the problem is that Stars bought from the bot never arrived, contact @StarsPaymeeSupport." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["nft sovg'adan imzoni olib tashlash","nft sovg'a asl ma'lumotlarini o'chirish","telegram gift imzo o'chirish","kolleksion sovg'a tabrikni olib tashlash","nft sovg'ani sotishdan oldin","telegram nft gift izoh o'chirish stars","удалить подпись с nft подарка telegram","удаление подписи nft подарок","убрать подпись с подарка телеграм","original details подарок telegram","сколько звезд удалить подпись подарка"],
  howToSteps: [
    { name: "Sovg‘ani tanlang", text: "profilingizdagi sovg‘alar orasidan sotmoqchi yoki o‘tkazmoqchi bo‘lgan kolleksion sovg‘ani oching." },
    { name: "Kartochkani o‘qing", text: "yuboruvchi, oluvchi va tabrik matni ko‘rinayotganini tekshiring." },
    { name: "Summani aniqlang", text: "olib tashlash taklifi va Stars summasi chiqqanini ko‘ring. Chiqmasa, bu sovg‘ada imkoniyat sizda yo‘q." },
    { name: "Balansni solishtiring", text: "yulduz yetmasa, avval to‘ldiring, keyin sovg‘aga qayting." },
    { name: "To‘lovni tasdiqlang", text: "server ko‘rsatgan summa Stars balansingizdan yechiladi." },
    { name: "Natijani tekshiring", text: "kartochkada ism va tabrik yo‘qolganini, Stars tarixida to‘lov yozuvi paydo bo‘lganini ko‘ring." },
    { name: "Endi sotuvga qo‘ying yoki o‘tkazing", text: "narx belgilash va xavflar haqida collectible sovg‘ani sotish qo‘llanmasini o‘qing." },
  ],
  locales: {
    uz: {
      title: "Sotishdan oldin NFT sovg‘adan imzoni olib tashlash: kim qiladi, necha Stars?",
      excerpt: "Ha, kolleksion sovg‘adagi ism va tabrikni Stars to‘lab olib tashlash mumkin, lekin buni faqat sovg‘ani qabul qilgan egasi qila oladi. Aniq summani Telegram ilovada ko‘rsatadi.",
      metaTitle: "Sotishdan oldin NFT sovg‘adan imzoni olib tashlash",
      metaDescription: "Ha, kolleksion sovg‘adagi ism va tabrikni Stars to‘lab olib tashlash mumkin, lekin buni faqat sovg‘ani qabul qilgan egasi qila oladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как убрать подпись с NFT-подарка в Telegram перед продажей и за сколько Stars",
      excerpt: "Да, имя и поздравление на коллекционном подарке можно удалить за Stars, но сделать это может только получатель подарка. Точную сумму показывает само приложение Telegram.",
      metaTitle: "Как убрать подпись с NFT-подарка в Telegram перед продажей",
      metaDescription: "Да, имя и поздравление на коллекционном подарке можно удалить за Stars, но сделать это может только получатель подарка.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can You Remove the Signature From an NFT Gift Before Selling It?",
      excerpt: "Yes. The name and greeting on a collectible gift can be removed for Stars, but only the owner who received the gift can do it. Telegram shows the exact price in the app.",
      metaTitle: "Can You Remove the Signature From an NFT Gift Before",
      metaDescription: "Yes. The name and greeting on a collectible gift can be removed for Stars, but only the owner who received the gift can do it.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
