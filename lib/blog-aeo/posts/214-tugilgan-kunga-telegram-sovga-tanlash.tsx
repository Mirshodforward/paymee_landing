import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "tugilgan-kunga-telegram-sovga-tanlash";

/**
 * Tug‘ilgan kunga Telegram sovg‘a: gift, NFT, Premium yoki Stars tanlash
 *
 * Avtoblogyoz yasagan maqola (2026-11-08): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: O‘zbekistondagi Telegram foydalanuvchisi do‘sti yoki yaqinining tug‘ilgan kunini Telegram’da tabriklamoqchi va «tug‘ilgan kunga telegram sovga» deb qidiradi; u gift, NFT sovg‘a, Premium yoki Stars’dan qaysi birini tanlashni, uni so‘mda olib, o‘z vaqtida yuborishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-08):
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
  return <p>Tug‘ilgan kunga Telegram sovg‘a tanlashning oddiy qoidasi bor. Tabrik ko‘zga ko‘rinsin desangiz — gift, har kungi qulaylik bo‘lsin desangiz — Premium. Kanal va botlarda ishlatadigan odamga Stars, kolleksionerga NFT sovg‘a mos. To‘rttasini ham @StarsPaymee_bot orqali so‘mda, faqat do‘stingizning @username’i bilan olasiz. Buyurtma odatda bir necha soniyada yetadi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#tugilgan-kunga-telegramda-qanday-sovga", label: "Tug‘ilgan kunga Telegram’da qanday sovg‘a qilish mumkin?" },
          { href: "#kimga-qaysi-sovga-mos-keladi", label: "Kimga qaysi sovg‘a mos keladi?" },
          { href: "#premium-sovga-qilmoqchiman-avval-nimani", label: "Premium sovg‘a qilmoqchiman: avval nimani tekshirish kerak?" },
          { href: "#stars-sovga-qilsam-nechta-olish", label: "Stars sovg‘a qilsam, nechta olish kerak va qancha turadi?" },
          { href: "#oddiy-gift-yoki-nft-sovga", label: "Oddiy gift yoki NFT sovg‘a: qimmat kolleksion sovg‘a shartmi?" },
          { href: "#starspaymee-orqali-tugilgan-kun-sovgasini", label: "StarsPaymee orqali tug‘ilgan kun sovg‘asini so‘mda qanday yuborish mumkin?" },
          { href: "#tabrik-aynan-tugilgan-kuni-yetishi", label: "Tabrik aynan tug‘ilgan kuni yetishi uchun nima qilish kerak?" },
          { href: "#sovga-tanlashda-qanday-xatolar-kop", label: "Sovg‘a tanlashda qanday xatolar ko‘p uchraydi?" },
        ]}
      />
      <h2 id="tugilgan-kunga-telegramda-qanday-sovga">Tug‘ilgan kunga Telegram’da qanday sovg‘a qilish mumkin?</h2>
      <p>Telegram ichida tug‘ilgan kun uchun to‘rt xil sovg‘a bor. Ular oluvchiga turli narsa beradi, turli joyda ko‘rinadi va har birining o‘z cheklovi bor. Tanlashdan oldin farqni bitta jadvalda ko‘ring.</p>
      <CompareTable
        headers={["Sovg‘a", "Oluvchi nima oladi", "Qayerda ko‘rinadi", "Narx (so‘mda)", "Qachon yubora olmaysiz"]}
        rows={[
          ["Oddiy gift", "Bezakli sovg‘a va tabrik", "Chatda, xohlasa profilida", "Botdagi ro‘yxatda", "Telegram limited sovg‘ani sotuvdan olib tashlagan bo‘lsa"],
          ["Kolleksion NFT sovg‘a", "Raqamlangan noyob nusxa", "Profilida, sovg‘alar kolleksiyasida", "Har nusxa narxi NFT Market’da", "Kerakli nusxa NFT Market’da bo‘lmasa"],
          ["Premium obuna", "Akkaunt uchun qo‘shimcha imkoniyatlar", "Akkauntning o‘zida", `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`, "Oluvchida faol Premium bo‘lsa"],
          ["Stars", "Yulduzlar balansi", "Telegram’dagi Stars balansida", `Dona: karta yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`, "50 tadan kam olinsa"],
        ]}
      />
      <p>Har bir yo‘nalish bo‘yicha batafsil ma’lumot saytdagi alohida sahifalarda: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> va <Link href="/gifts">sovg‘alar</Link>.</p>
      <h2 id="kimga-qaysi-sovga-mos-keladi">Kimga qaysi sovg‘a mos keladi?</h2>
      <p>Sovg‘aning qiymati narxida emas, oluvchi uni ishlatishida. Shuning uchun avval o‘sha odam Telegram’dan qanday foydalanishini o‘ylab ko‘ring.</p>
      <ul>
        <li><b>Kursdosh yoki yaqin do‘st</b> — oddiy gift. U tabrik bilan birga keladi. Do‘stingiz uni profilida qoldirsa, tug‘ilgan kun o‘tgandan keyin ham ko‘rinib turadi.</li>
        <li><b>Telegram’da ko‘p o‘tiradigan ota-ona, aka yoki opa</b> — Premium. Bu bir martalik bezak emas, oylar davomida ishlatiladigan qulaylik.</li>
        <li><b>Kanal yuritadigan tanish yoki ijodkor</b> — Stars. Yulduzlarni qayerga sarflashni oluvchining o‘zi hal qiladi, masalan, kimgadir sovg‘a yuborishga yoki botdagi xaridga.</li>
        <li><b>Kolleksioner do‘st</b> — NFT sovg‘a. Bunday odam uchun aynan qaysi nusxa ekani muhim, shuning uchun uning didini bilsangiz tanlang.</li>
        <li><b>Hamkasb yoki rahbar</b> — rasmiyroq variant: oddiy gift yoki 3 oylik Premium.</li>
        <li><b>Bola yoki o‘smir</b> — Stars olishdan oldin ota-onasi bilan kelishib oling: yulduzlar o‘yin va botlarda tez sarflanib ketishi mumkin.</li>
      </ul>
      <h3>Byudjetga qarab yo‘nalish</h3>
      <ul>
        <li><b>Kichik summa</b> — oddiy gift yoki 50 va undan ortiq Stars.</li>
        <li><b>O‘rtacha summa</b> — 3 oylik Premium ({som(premium(3), "uz")}).</li>
        <li><b>Katta summa</b> — 12 oylik Premium ({som(premium(12), "uz")}) yoki NFT Market’dagi kolleksion nusxa.</li>
      </ul>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="premium-sovga-qilmoqchiman-avval-nimani">Premium sovg‘a qilmoqchiman: avval nimani tekshirish kerak?</h2>
      <p>Premium sovg‘asida bir nechta oddiy xato bor. To‘lashdan oldin uch narsani aniqlab oling.</p>
      <ul>
        <li><b>Oluvchida faol obuna bormi.</b> Premium hali tugamagan akkauntga bot yangi buyurtma ochmaydi: yangi muddat mavjud obuna ustiga qo‘shilmaydi. Do‘stingizdan bilvosita so‘rab oling yoki buyurtma paytida bot javobiga qarang.</li>
        <li><b>Qaysi muddat.</b> 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. 1 oylik tarif ham bor, uning narxi botda. Narx hamma to‘lov usulida bir xil, ustamasiz.</li>
        <li><b>Username to‘g‘rimi.</b> Premium aynan siz yozgan @username egasiga ulanadi. Bitta harf xatosi sovg‘ani boshqa odamga jo‘natib yuboradi.</li>
      </ul>
      <Notice label={"Muhim"}>Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi. Sizdan ham, do‘stingizdan ham parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Kimdir shularni so‘rasa, u StarsPaymee emas.</Notice>
      <p>Do‘stingizda Premium allaqachon bo‘lsa, tug‘ilgan kun uchun gift yoki Stars tanlang. Bu holat <Link href="/blog/premium-bor-odamga-premium-sovga">Premium bor odamga sovg‘a</Link> maqolasida alohida ko‘rilgan. Username’ni tekshirishdan yetkazilganini tasdiqlashgacha bo‘lgan to‘liq tartib <Link href="/blog/telegram-premium-sovga-username-orqali">Premium’ni username orqali sovg‘a qilish</Link> qo‘llanmasida.</p>
      <h2 id="stars-sovga-qilsam-nechta-olish">Stars sovg‘a qilsam, nechta olish kerak va qancha turadi?</h2>
      <p>StarsPaymee’da eng kam buyurtma — 50 Stars. Undan ko‘p olish mumkin, yuqori chegarani o‘zingiz byudjetga qarab belgilaysiz.</p>
      <p>Bir dona yulduz narxi to‘lov usuliga bog‘liq:</p>
      <ul>
        <li>UzCard yoki HUMO kartaga o‘tkazma yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")};</li>
        <li>Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>Umumiy summani hisoblash oson: kerakli yulduzlar sonini tanlagan usuldagi dona narxiga ko‘paytiring. Bot to‘lovdan oldin yakuniy summani ko‘rsatadi, shuning uchun ikki usulni solishtirib olishingiz mumkin.</p>
      <p>Nechta olishni oluvchi nima qilishiga qarab tanlang. Do‘stingiz o‘zi kimgadir gift yubormoqchi bo‘lsa, o‘sha sovg‘a necha Stars turishini oldindan bilib oling. Kanal egasi uchun esa aniq son unchalik muhim emas — har qanday miqdor qo‘llab-quvvatlash bo‘ladi.</p>
      <p>Boshqa odamga yulduz olishda narx o‘zingizga olgandagidek bo‘ladi, faqat qabul qiluvchi sifatida uning username’i yoziladi. Tafsilotlar <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">boshqa odamga Stars sotib olish</Link> maqolasida.</p>
      <h2 id="oddiy-gift-yoki-nft-sovga">Oddiy gift yoki NFT sovg‘a: qimmat kolleksion sovg‘a shartmi?</h2>
      <p>Kanallarda vaqti-vaqti bilan mashhur odamlarga qimmat kolleksion sovg‘a qilingani haqida postlar chiqadi. Ulardagi summa va tafsilotlar ko‘pincha rasmiy manbada tasdiqlanmagan bo‘ladi, shuning uchun ularni o‘z tanlovingizga mezon qilmang. Oddiy tug‘ilgan kun uchun o‘ylab tanlangan gift ham yetarli.</p>
      <p>NFT sovg‘ani quyidagi hollarda tanlash o‘rinli:</p>
      <ul>
        <li>oluvchi sovg‘alar yig‘ib boradi va kolleksiyasini profilida ko‘rsatadi;</li>
        <li>uzoq esda qoladigan sana, masalan, 18, 30 yoki 50 yosh;</li>
        <li>sovg‘a bir necha kishidan umumiy bo‘lib, kattaroq summa yig‘ilgan.</li>
      </ul>
      <p>Ikki cheklovni bilib qo‘ying. Birinchidan, Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Ikkinchidan, tayyor kolleksion nusxalar @StarsPaymee_bot’dagi NFT Market’da sotiladi, har birining narxi o‘sha yerda ko‘rsatiladi. Bitta kolleksiyadagi ikki nusxa turli narxda bo‘lishi mumkin. Buning sababi <Link href="/blog/telegram-gift-price">bir xil gift nega ikki xil narxda turadi</Link> maqolasida tushuntirilgan.</p>
      <h2 id="starspaymee-orqali-tugilgan-kun-sovgasini">StarsPaymee orqali tug‘ilgan kun sovg‘asini so‘mda qanday yuborish mumkin?</h2>
      <p>Jarayon to‘rt sovg‘a turi uchun ham bir xil, faqat uchinchi qadamda tanlov o‘zgaradi.</p>
      <Steps>
        <Step title={"Username’ni aniqlang"}>do‘stingiz profilidagi @username’ni nusxa oling. Ism va username — boshqa-boshqa narsa, ismni yozmang.</Step>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini ishga tushiring.</Step>
        <Step title={"Sovg‘a turini tanlang"}>gift, NFT Market’dagi kolleksion nusxa, Premium yoki Stars.</Step>
        <Step title={"Qabul qiluvchini kiriting"}>o‘zingizni emas, do‘stingizning @username’ini yozing. Bot uni tekshiradi. Ko‘rsatilgan akkaunt to‘g‘riligiga yana bir bor qarang.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Stars’da dona narxi usulga qarab farq qiladi, Premium narxi esa hamma usulda bir xil.</Step>
        <Step title={"Yetkazilganini tekshiring"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetadi. Do‘stingizdan sovg‘a kelganini so‘rang. Muammo bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</Step>
      </Steps>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Sovg‘ani Telegram ichidan Stars bilan yuborish yo‘li ham bor. Ikki usulning farqi <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">Telegram Gifts qanday yuboriladi</Link> qo‘llanmasida.</p>
      <h2 id="tabrik-aynan-tugilgan-kuni-yetishi">Tabrik aynan tug‘ilgan kuni yetishi uchun nima qilish kerak?</h2>
      <p>Tug‘ilgan kun sovg‘asida vaqt ham muhim. Kun oxirida kelgan tabrik ham yoqimli, lekin kun boshida kelgani ko‘proq esda qoladi.</p>
      <ul>
        <li><b>Bir kun oldin tayyorlaning.</b> Username’ni aniqlab qo‘ying. Premium tanlagan bo‘lsangiz, do‘stingizda faol obuna yo‘qligini ham bilib oling. Tabrik paytida bunga vaqt ketmasin.</li>
        <li><b>Pulni oldindan hal qiling.</b> To‘lov usullari orasida bot balansi ham bor. Uni oldinroq to‘ldirib qo‘ysangiz, kerakli daqiqada faqat buyurtma berasiz. Balansni to‘ldirish tartibini botda ko‘ring.</li>
        <li><b>Buyurtmani o‘zingiz kerakli vaqtda bering.</b> Yetkazish bir necha soniya oladi. Shuning uchun soat 00:00 da yoki ertalab berilgan buyurtma deyarli darhol yetadi.</li>
        <li><b>Shaxsiy so‘z qo‘shing.</b> Sovg‘adan keyin o‘zingiz qisqa tabrik yozing. Shunda kimdan kelgani va nega aynan shu sovg‘a tanlangani aniq bo‘ladi.</li>
        <li><b>Guruh bo‘lib sovg‘a qilsangiz, bitta odam buyurtma bersin.</b> Ayniqsa Premium’da: ikkinchi buyurtma baribir ochilmaydi, faqat vaqt ketadi.</li>
      </ul>
      <p>Sovg‘ani oldindan belgilangan vaqtga rejalashtirish <Link href="/blog/taymer-bilan-sovga-yuborish">taymer bilan sovg‘a yuborish</Link> maqolasida alohida yoritilgan.</p>
      <h2 id="sovga-tanlashda-qanday-xatolar-kop">Sovg‘a tanlashda qanday xatolar ko‘p uchraydi?</h2>
      <p>Quyidagi xatolar ko‘pincha shoshilib qilinadi va bayram kayfiyatini buzadi.</p>
      <ul>
        <li><b>Ismni yoki o‘xshash username’ni yozish.</b> «aziz_2000» va «aziz2000» ikki xil odam bo‘lishi mumkin. Username’ni qo‘lda yozgandan ko‘ra nusxa olib qo‘yish ishonchliroq.</li>
        <li><b>Faol Premium bor odamga Premium olishga urinish.</b> Bot buyurtma ochmaydi, muddat ham qo‘shilmaydi. Bunday do‘stga gift yoki Stars tanlang.</li>
        <li><b>Sotuvdan olingan limited sovg‘ani bot orqali qidirish.</b> Botlar uni yubora olmaydi. O‘xshash narsa kerak bo‘lsa, NFT Market’dagi tayyor kolleksion nusxalarga qarang.</li>
        <li><b>«Bayram munosabati bilan tekin yulduz» xabariga ishonish.</b> Bunday xabar parol yoki SMS kod so‘rasa, bu aldov. StarsPaymee faqat @username so‘raydi.</li>
        <li><b>«Sovg‘angizni sotib olamiz» xabariga javob berish.</b> StarsPaymee foydalanuvchilardan Stars va sovg‘alarni sotib olmaydi. Bunday takliflar uning nomidan emas.</li>
        <li><b>Stars uchun to‘lov usulini solishtirmaslik.</b> Dona narxi karta o‘tkazmasi va onlayn to‘lovda farq qiladi. To‘lovdan oldin bot ko‘rsatgan summaga qarang.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Tug‘ilgan kunga eng arzon Telegram sovg‘a qaysi?", answer: "Kichik byudjet uchun oddiy gift yoki eng kam buyurtma bo‘lgan 50 Stars mos keladi. Giftlarning aniq narxi botdagi ro‘yxatda turadi. Stars’da esa to‘lov usuli ham summaga ta’sir qiladi." },
  { question: "Do‘stimning username’i yo‘q bo‘lsa, unga sovg‘a yubora olamanmi?", answer: "StarsPaymee boti qabul qiluvchini @username orqali topadi, shuning uchun do‘stingizdan sozlamalarda username qo‘yib olishini so‘rang. Telegram ilovasining o‘zidan Stars bilan yuborish yo‘li ham bor." },
  { question: "Premium sovg‘a qilsam, do‘stim parolini berishi kerakmi?", answer: "Yo‘q. Premium Telegram’ning sovg‘a mexanizmi bilan username orqali ulanadi. Parol, SMS kod yoki akkauntga kirish hech kimdan so‘ralmaydi." },
  { question: "Do‘stimda Premium bor, unga nima sovg‘a qilsam bo‘ladi?", answer: "Gift, Stars yoki NFT Market’dagi kolleksion nusxa tanlang. Premium’ni esa obunasi tugagandan keyin sovg‘a qilish mumkin, chunki faol obuna ustiga yangi muddat qo‘shilmaydi." },
  { question: "Stars sovg‘a qilish uchun eng kami nechta olish kerak?", answer: "Botda eng kam buyurtma — 50 Stars. Undan ko‘pini ham olish mumkin, summa siz tanlagan to‘lov usulidagi dona narxiga qarab hisoblanadi." },
  { question: "Sovg‘a kimdan kelgani oluvchiga ko‘rinadimi?", answer: "Bot orqali yuborilgan sovg‘ada yuboruvchi qanday ko‘rsatilishi bu maqolada tasdiqlanmagan, aniq holatni @StarsPaymeeSupport’dan so‘rang. Eng ishonchli yo‘l — sovg‘adan keyin do‘stingizga o‘zingiz tabrik yozish." },
  { question: "Sovg‘ani naqd pul bilan to‘lasam bo‘ladimi?", answer: "Ha, Paynet ilovasi yoki Paynet terminali orqali naqd to‘lash mumkin. Click, Payme, Uzum, UzCard/HUMO kartaga o‘tkazma va bot balansi ham bor." },
  { question: "Sovg‘a yetmasa yoki xato akkauntga ketsa nima qilaman?", answer: "Buyurtma ma’lumotlari bilan darhol @StarsPaymeeSupport’ga yozing. Boshqa odamga yetkazilgan sovg‘ani qaytarish imkoni bu maqolada tasdiqlanmagan, shuning uchun username’ni to‘lovdan oldin tekshiring." },
  { question: "Limited sovg‘ani bot orqali nega ololmayapman?", answer: "Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Bunday holda @StarsPaymee_bot’dagi NFT Market’da tayyor kolleksion nusxalarni ko‘rib chiqing." },
  { question: "Tug‘ilgan kun sovg‘asini oldindan to‘lab, keyin yuborsa bo‘ladimi?", answer: "Buyurtma to‘lovdan keyin bir necha soniyada avtomatik yetkaziladi, shuning uchun uni kerakli daqiqada bergan ma’qul. Pulni esa oldindan bot balansiga tayyorlab qo‘yish mumkin, to‘ldirish tartibi botda." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Для выбора подарка на день рождения в Telegram есть простое правило. Хотите, чтобы поздравление было на виду, — дарите gift. Нужна польза на каждый день — Premium. Тому, кто пользуется каналами и ботами, подойдут Stars, коллекционеру — NFT-подарок. Все четыре варианта можно оформить в @StarsPaymee_bot в сумах, зная только @username друга. Заказ обычно приходит за несколько секунд.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#tugilgan-kunga-telegramda-qanday-sovga", label: "Что можно подарить в Telegram на день рождения?" },
          { href: "#kimga-qaysi-sovga-mos-keladi", label: "Кому какой подарок подойдёт?" },
          { href: "#premium-sovga-qilmoqchiman-avval-nimani", label: "Хочу подарить Premium: что проверить заранее?" },
          { href: "#stars-sovga-qilsam-nechta-olish", label: "Сколько Stars подарить и сколько это стоит?" },
          { href: "#oddiy-gift-yoki-nft-sovga", label: "Обычный gift или NFT-подарок: нужен ли дорогой коллекционный?" },
          { href: "#starspaymee-orqali-tugilgan-kun-sovgasini", label: "Как отправить подарок на день рождения через StarsPaymee в сумах?" },
          { href: "#tabrik-aynan-tugilgan-kuni-yetishi", label: "Как сделать, чтобы поздравление пришло точно в день рождения?" },
          { href: "#sovga-tanlashda-qanday-xatolar-kop", label: "Какие ошибки чаще всего допускают при выборе подарка?" },
        ]}
      />
      <h2 id="tugilgan-kunga-telegramda-qanday-sovga">Что можно подарить в Telegram на день рождения?</h2>
      <p>Внутри Telegram есть четыре вида подарков на день рождения. Каждый даёт получателю своё, отображается в своём месте и имеет свои ограничения. Прежде чем выбирать, сравните их в одной таблице.</p>
      <CompareTable
        headers={["Подарок", "Что получает именинник", "Где это видно", "Цена (в сумах)", "Когда отправить не получится"]}
        rows={[
          ["Обычный gift", "Оформленный подарок с поздравлением", "В чате, по желанию — в профиле", "В списке в боте", "Если Telegram снял limited-подарок с продажи"],
          ["Коллекционный NFT-подарок", "Пронумерованный уникальный экземпляр", "В профиле, в коллекции подарков", "Цена каждого экземпляра — в NFT Market", "Если нужного экземпляра нет в NFT Market"],
          ["Подписка Premium", "Дополнительные возможности для аккаунта", "В самом аккаунте", `3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}`, "Если у получателя уже активен Premium"],
          ["Stars", "Баланс звёзд", "В балансе Stars в Telegram", `За штуку: картой или с баланса бота ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`, "Если заказ меньше 50 штук"],
        ]}
      />
      <p>Подробнее о каждом направлении — на отдельных страницах сайта: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> и <Link href="/gifts">подарки</Link>.</p>
      <h2 id="kimga-qaysi-sovga-mos-keladi">Кому какой подарок подойдёт?</h2>
      <p>Ценность подарка — не в цене, а в том, будет ли человек им пользоваться. Поэтому сначала подумайте, как именинник использует Telegram.</p>
      <ul>
        <li><b>Однокурсник или близкий друг</b> — обычный gift. Он приходит вместе с поздравлением. Если друг оставит его в профиле, подарок будет виден и после праздника.</li>
        <li><b>Родители, брат или сестра, которые много сидят в Telegram</b> — Premium. Это не разовое украшение, а удобство, которым пользуются месяцами.</li>
        <li><b>Знакомый автор канала или творческий человек</b> — Stars. Куда потратить звёзды, получатель решит сам: например, отправит кому-то подарок или оплатит покупку в боте.</li>
        <li><b>Друг-коллекционер</b> — NFT-подарок. Для такого человека важно, какой именно это экземпляр, так что выбирайте, если знаете его вкус.</li>
        <li><b>Коллега или руководитель</b> — вариант посдержаннее: обычный gift или Premium на 3 месяца.</li>
        <li><b>Ребёнок или подросток</b> — прежде чем дарить Stars, договоритесь с родителями: звёзды быстро уходят на игры и ботов.</li>
      </ul>
      <h3>Ориентир по бюджету</h3>
      <ul>
        <li><b>Небольшая сумма</b> — обычный gift или от 50 Stars.</li>
        <li><b>Средняя сумма</b> — Premium на 3 месяца ({som(premium(3), "ru")}).</li>
        <li><b>Крупная сумма</b> — Premium на 12 месяцев ({som(premium(12), "ru")}) или коллекционный экземпляр из NFT Market.</li>
      </ul>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="premium-sovga-qilmoqchiman-avval-nimani">Хочу подарить Premium: что проверить заранее?</h2>
      <p>В подарке Premium есть несколько типичных ошибок. До оплаты уточните три вещи.</p>
      <ul>
        <li><b>Есть ли у получателя активная подписка.</b> На аккаунт, где Premium ещё не закончился, бот не откроет новый заказ: новый срок не добавляется к действующей подписке. Аккуратно расспросите друга или посмотрите на ответ бота при оформлении.</li>
        <li><b>Какой срок.</b> 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена — в боте. Цена одинакова при любом способе оплаты, без наценки.</li>
        <li><b>Правильный ли username.</b> Premium подключается именно владельцу того @username, который вы указали. Одна опечатка — и подарок уйдёт другому человеку.</li>
      </ul>
      <Notice label={"Важно"}>Premium подключается через механизм подарков Telegram. Ни у вас, ни у друга не спрашивают пароль, SMS-код или доступ к аккаунту. Если кто-то это просит — это не StarsPaymee.</Notice>
      <p>Если у друга уже есть Premium, выберите на день рождения gift или Stars. Эта ситуация отдельно разобрана в статье <Link href="/blog/premium-bor-odamga-premium-sovga">подарок тому, у кого уже есть Premium</Link>. Полный порядок — от проверки username до подтверждения доставки — в инструкции <Link href="/blog/telegram-premium-sovga-username-orqali">как подарить Premium по username</Link>.</p>
      <h2 id="stars-sovga-qilsam-nechta-olish">Сколько Stars подарить и сколько это стоит?</h2>
      <p>Минимальный заказ в StarsPaymee — 50 Stars. Можно взять больше, верхнюю границу вы определяете сами под свой бюджет.</p>
      <p>Цена одной звезды зависит от способа оплаты:</p>
      <ul>
        <li>переводом на карту UzCard или HUMO либо с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")};</li>
        <li>через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
      </ul>
      <p>Итог посчитать просто: умножьте нужное количество звёзд на цену за штуку в выбранном способе. Бот показывает итоговую сумму до оплаты, так что два способа можно сравнить.</p>
      <p>Количество выбирайте исходя из того, что получатель будет делать со звёздами. Если друг сам хочет кому-то отправить gift, заранее узнайте, сколько Stars стоит этот подарок. Для владельца канала точное число не так важно — любая сумма будет поддержкой.</p>
      <p>Если покупаете звёзды другому человеку, цена та же, что и для себя, — просто в качестве получателя указывается его username. Подробности — в статье <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">как купить Stars другому человеку</Link>.</p>
      <h2 id="oddiy-gift-yoki-nft-sovga">Обычный gift или NFT-подарок: нужен ли дорогой коллекционный?</h2>
      <p>В каналах время от времени появляются посты о том, как знаменитостям дарят дорогие коллекционные подарки. Суммы и детали в них часто не подтверждены официальными источниками, поэтому не ориентируйтесь на них. Для обычного дня рождения достаточно продуманного gift.</p>
      <p>NFT-подарок уместен, если:</p>
      <ul>
        <li>получатель собирает подарки и показывает коллекцию в профиле;</li>
        <li>дата запоминающаяся, например 18, 30 или 50 лет;</li>
        <li>подарок общий от нескольких человек и собрана сумма побольше.</li>
      </ul>
      <p>Учтите два ограничения. Во-первых, limited-подарки, снятые Telegram с продажи, боты отправить не могут. Во-вторых, готовые коллекционные экземпляры продаются в NFT Market в @StarsPaymee_bot, цена каждого указана там же. Два экземпляра из одной коллекции могут стоить по-разному. Почему так, объясняется в статье <Link href="/blog/telegram-gift-price">почему одинаковый gift стоит по-разному</Link>.</p>
      <h2 id="starspaymee-orqali-tugilgan-kun-sovgasini">Как отправить подарок на день рождения через StarsPaymee в сумах?</h2>
      <p>Процесс одинаков для всех четырёх видов подарков, меняется только выбор на третьем шаге.</p>
      <Steps>
        <Step title={"Узнайте username"}>скопируйте @username из профиля друга. Имя и username — разные вещи, имя не подойдёт.</Step>
        <Step title={"Откройте бота"}>запустите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите вид подарка"}>gift, коллекционный экземпляр из NFT Market, Premium или Stars.</Step>
        <Step title={"Укажите получателя"}>впишите @username друга, а не свой. Бот его проверит. Ещё раз убедитесь, что показан нужный аккаунт.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота. У Stars цена за штуку зависит от способа, у Premium — одинакова везде.</Step>
        <Step title={"Проверьте доставку"}>заказ обычно приходит автоматически за несколько секунд, примерно за 5. Спросите друга, получил ли он подарок. Если что-то пошло не так, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>Международная карта, криптокошелёк или VPN не нужны. Отправить подарок можно и внутри Telegram за Stars. Чем отличаются эти два способа, рассказано в инструкции <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">как отправить Telegram Gifts</Link>.</p>
      <h2 id="tabrik-aynan-tugilgan-kuni-yetishi">Как сделать, чтобы поздравление пришло точно в день рождения?</h2>
      <p>В подарке на день рождения важно и время. Поздравление вечером тоже приятно, но то, что пришло с утра, запоминается сильнее.</p>
      <ul>
        <li><b>Подготовьтесь накануне.</b> Заранее узнайте username. Если выбрали Premium, выясните, нет ли у друга активной подписки. Пусть в момент поздравления на это не уходит время.</li>
        <li><b>Решите вопрос с деньгами заранее.</b> Среди способов оплаты есть баланс бота. Если пополнить его заранее, в нужный момент останется только оформить заказ. Порядок пополнения смотрите в боте.</li>
        <li><b>Оформите заказ сами в нужное время.</b> Доставка занимает несколько секунд, поэтому заказ, сделанный в 00:00 или утром, приходит почти сразу.</li>
        <li><b>Добавьте личные слова.</b> После подарка напишите короткое поздравление от себя. Так будет ясно, от кого он и почему выбран именно этот подарок.</li>
        <li><b>Если дарите компанией, пусть заказ оформит один человек.</b> Особенно в случае с Premium: второй заказ всё равно не откроется, только время потеряете.</li>
      </ul>
      <p>Как запланировать подарок на заранее выбранное время, отдельно разобрано в статье <Link href="/blog/taymer-bilan-sovga-yuborish">отправка подарка с таймером</Link>.</p>
      <h2 id="sovga-tanlashda-qanday-xatolar-kop">Какие ошибки чаще всего допускают при выборе подарка?</h2>
      <p>Эти ошибки обычно делают в спешке, и они портят праздничное настроение.</p>
      <ul>
        <li><b>Указать имя или похожий username.</b> «aziz_2000» и «aziz2000» могут оказаться разными людьми. Надёжнее скопировать username, чем набирать вручную.</li>
        <li><b>Пытаться подарить Premium тому, у кого он уже активен.</b> Бот не откроет заказ, срок не добавится. Такому другу выберите gift или Stars.</li>
        <li><b>Искать через бота limited-подарок, снятый с продажи.</b> Боты не могут его отправить. Если нужно что-то похожее, посмотрите готовые коллекционные экземпляры в NFT Market.</li>
        <li><b>Верить сообщениям «бесплатные звёзды к празднику».</b> Если такое сообщение просит пароль или SMS-код, это обман. StarsPaymee спрашивает только @username.</li>
        <li><b>Отвечать на сообщения «купим ваш подарок».</b> StarsPaymee не покупает у пользователей Stars и подарки. Такие предложения приходят не от его имени.</li>
        <li><b>Не сравнивать способы оплаты для Stars.</b> Цена за штуку при переводе на карту и при онлайн-оплате различается. Перед оплатой смотрите сумму, которую показывает бот.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Какой самый недорогой подарок в Telegram на день рождения?", answer: "Для небольшого бюджета подойдёт обычный gift или минимальный заказ — 50 Stars. Точные цены на gift есть в списке в боте, а у Stars на сумму влияет ещё и способ оплаты." },
  { question: "Можно ли отправить подарок другу, у которого нет username?", answer: "Бот StarsPaymee находит получателя по @username, поэтому попросите друга задать его в настройках. Кроме того, отправить подарок за Stars можно прямо из приложения Telegram." },
  { question: "Если я дарю Premium, другу нужно сообщать свой пароль?", answer: "Нет. Premium подключается по username через механизм подарков Telegram. Ни пароль, ни SMS-код, ни доступ к аккаунту ни у кого не запрашиваются." },
  { question: "У друга уже есть Premium — что ему подарить?", answer: "Выберите gift, Stars или коллекционный экземпляр из NFT Market. Premium можно подарить, когда текущая подписка закончится: к активной новый срок не добавляется." },
  { question: "Сколько Stars минимум нужно купить в подарок?", answer: "Минимальный заказ в боте — 50 Stars. Можно взять и больше, сумма считается по цене за штуку в выбранном способе оплаты." },
  { question: "Увидит ли получатель, от кого подарок?", answer: "Как отображается отправитель у подарка через бота, в этой статье не подтверждено — уточните в @StarsPaymeeSupport. Самый надёжный вариант — написать другу поздравление от себя сразу после подарка." },
  { question: "Можно ли оплатить подарок наличными?", answer: "Да, наличными можно заплатить через приложение или терминал Paynet. Также доступны Click, Payme, Uzum, перевод на карту UzCard/HUMO и баланс бота." },
  { question: "Что делать, если подарок не пришёл или ушёл не на тот аккаунт?", answer: "Сразу напишите в @StarsPaymeeSupport и приложите данные заказа. Возможность вернуть подарок, доставленный другому человеку, в этой статье не подтверждена, поэтому проверяйте username до оплаты." },
  { question: "Почему не получается купить limited-подарок через бота?", answer: "Limited-подарки, которые Telegram снял с продажи, боты отправлять не могут. В этом случае посмотрите готовые коллекционные экземпляры в NFT Market в @StarsPaymee_bot." },
  { question: "Можно ли оплатить подарок заранее, а отправить позже?", answer: "Заказ доставляется автоматически через несколько секунд после оплаты, поэтому оформлять его лучше в нужный момент. А деньги можно заранее положить на баланс бота — как пополнить, показано в боте." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Picking a Telegram birthday gift comes down to one simple rule. If you want the greeting to be seen, send a gift. If you want everyday convenience, choose Premium. Stars suit someone active in channels and bots, and an NFT gift suits a collector. All four are available in soums via @StarsPaymee_bot with just your friend’s @username, usually delivered within seconds.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#tugilgan-kunga-telegramda-qanday-sovga", label: "What birthday gifts can you send on Telegram?" },
          { href: "#kimga-qaysi-sovga-mos-keladi", label: "Which gift suits whom?" },
          { href: "#premium-sovga-qilmoqchiman-avval-nimani", label: "Gifting Premium: what should you check first?" },
          { href: "#stars-sovga-qilsam-nechta-olish", label: "Gifting Stars: how many to buy and what does it cost?" },
          { href: "#oddiy-gift-yoki-nft-sovga", label: "Regular gift or NFT gift: do you need an expensive collectible?" },
          { href: "#starspaymee-orqali-tugilgan-kun-sovgasini", label: "How to send a birthday gift in soums through StarsPaymee" },
          { href: "#tabrik-aynan-tugilgan-kuni-yetishi", label: "How to make sure the greeting arrives on the birthday itself" },
          { href: "#sovga-tanlashda-qanday-xatolar-kop", label: "What mistakes do people make when choosing a gift?" },
        ]}
      />
      <h2 id="tugilgan-kunga-telegramda-qanday-sovga">What birthday gifts can you send on Telegram?</h2>
      <p>Telegram offers four kinds of birthday gifts. Each gives the recipient something different, appears in a different place and has its own limits. Compare them in one table before you choose.</p>
      <CompareTable
        headers={["Gift", "What the recipient gets", "Where it shows", "Price (in soums)", "When you can’t send it"]}
        rows={[
          ["Regular gift", "A decorative gift with a message", "In the chat, and on their profile if they choose", "Listed in the bot", "If Telegram has pulled that limited gift from sale"],
          ["Collectible NFT gift", "A numbered, unique copy", "On their profile, in their gift collection", "Each copy is priced in the NFT Market", "If the copy you want isn’t in the NFT Market"],
          ["Premium subscription", "Extra features for their account", "In the account itself", `3 months ${som(premium(3), "en")}, 6 months ${som(premium(6), "en")}, 12 months ${som(premium(12), "en")}`, "If the recipient already has active Premium"],
          ["Stars", "A Stars balance", "In their Telegram Stars balance", `Per Star: card transfer or bot balance ${som(STARS_PER_UNIT_UZS, "en")}, Click, Payme, Uzum or Paynet ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`, "If you order fewer than 50"],
        ]}
      />
      <p>Each option has its own page on the site with more detail: <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> and <Link href="/gifts">gifts</Link>.</p>
      <h2 id="kimga-qaysi-sovga-mos-keladi">Which gift suits whom?</h2>
      <p>A gift’s value isn’t in its price but in whether the person will use it. So start by thinking about how they actually use Telegram.</p>
      <ul>
        <li><b>A classmate or close friend</b> — a regular gift. It comes with a message, and if your friend keeps it on their profile, it stays visible long after the birthday.</li>
        <li><b>A parent or older sibling who spends a lot of time on Telegram</b> — Premium. It isn’t a one-off decoration but a convenience they’ll use for months.</li>
        <li><b>A friend or creator who runs a channel</b> — Stars. The recipient decides where to spend them, for example on sending someone a gift or buying something in a bot.</li>
        <li><b>A collector friend</b> — an NFT gift. For them, the specific copy matters, so only pick one if you know their taste.</li>
        <li><b>A colleague or manager</b> — something more formal: a regular gift or 3 months of Premium.</li>
        <li><b>A child or teenager</b> — check with their parents before buying Stars: they can disappear quickly in games and bots.</li>
      </ul>
      <h3>Matching the gift to your budget</h3>
      <ul>
        <li><b>Small budget</b> — a regular gift or 50 or more Stars.</li>
        <li><b>Medium budget</b> — 3 months of Premium ({som(premium(3), "en")}).</li>
        <li><b>Larger budget</b> — 12 months of Premium ({som(premium(12), "en")}) or a collectible copy from the NFT Market.</li>
      </ul>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="premium-sovga-qilmoqchiman-avval-nimani">Gifting Premium: what should you check first?</h2>
      <p>A few easy mistakes come up with Premium gifts. Confirm three things before you pay.</p>
      <ul>
        <li><b>Does the recipient already have an active subscription?</b> The bot won’t open a new order for an account whose Premium hasn’t expired: a new term isn’t added on top of an existing one. Ask your friend casually, or watch the bot’s response when you place the order.</li>
        <li><b>Which term?</b> 3 months — {som(premium(3), "en")}, 6 months — {som(premium(6), "en")}, 12 months — {som(premium(12), "en")}. There’s also a 1-month plan; its price is shown in the bot. The price is the same for every payment method, with no markup.</li>
        <li><b>Is the username correct?</b> Premium goes to whoever owns the exact @username you enter. One wrong letter sends the gift to someone else.</li>
      </ul>
      <Notice label={"Important"}>Premium is activated through Telegram’s own gifting mechanism. Neither you nor your friend will be asked for a password, SMS code or account access. If someone asks for these, it isn’t StarsPaymee.</Notice>
      <p>If your friend already has Premium, choose a gift or Stars for their birthday instead. That situation is covered separately in <Link href="/blog/premium-bor-odamga-premium-sovga">gifting to someone who already has Premium</Link>. The full process, from checking the username to confirming delivery, is in the guide to <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium by username</Link>.</p>
      <h2 id="stars-sovga-qilsam-nechta-olish">Gifting Stars: how many to buy and what does it cost?</h2>
      <p>The minimum order at StarsPaymee is 50 Stars. You can buy more; the upper limit is up to you and your budget.</p>
      <p>The price of one Star depends on how you pay:</p>
      <ul>
        <li>UzCard or HUMO card transfer, or bot balance — {som(STARS_PER_UNIT_UZS, "en")};</li>
        <li>Click, Payme, Uzum or Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
      </ul>
      <p>Working out the total is easy: multiply the number of Stars by the per-Star price for your payment method. The bot shows the final amount before you pay, so you can compare the two options.</p>
      <p>Choose the amount based on what the recipient will do with it. If your friend wants to send someone a gift themselves, find out in advance how many Stars that gift costs. For a channel owner, the exact number matters less — any amount is support.</p>
      <p>Buying Stars for someone else costs the same as buying them for yourself; you just enter their username as the recipient. Details are in <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">buying Telegram Stars for someone else</Link>.</p>
      <h2 id="oddiy-gift-yoki-nft-sovga">Regular gift or NFT gift: do you need an expensive collectible?</h2>
      <p>Channels regularly post stories about expensive collectible gifts given to famous people. The amounts and details in those posts often aren’t confirmed by any official source, so don’t treat them as a benchmark for your own choice. For an ordinary birthday, a thoughtfully chosen regular gift is plenty.</p>
      <p>An NFT gift makes sense when:</p>
      <ul>
        <li>the recipient collects gifts and shows off their collection on their profile;</li>
        <li>it’s a milestone birthday, such as 18, 30 or 50;</li>
        <li>several people are chipping in and the pooled budget is larger.</li>
      </ul>
      <p>Keep two limits in mind. First, bots can’t send limited gifts that Telegram has removed from sale. Second, ready-made collectible copies are sold in the NFT Market inside @StarsPaymee_bot, with each copy’s price shown there. Two copies from the same collection can cost different amounts — the reason is explained in <Link href="/blog/telegram-gift-price">why the same gift has two different prices</Link>.</p>
      <h2 id="starspaymee-orqali-tugilgan-kun-sovgasini">How to send a birthday gift in soums through StarsPaymee</h2>
      <p>The process is the same for all four gift types; only the third step changes.</p>
      <Steps>
        <Step title={"Find the username"}>copy the @username from your friend’s profile. A display name and a username are different things, so don’t enter the name.</Step>
        <Step title={"Open the bot"}>launch <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the gift type"}>a gift, a collectible copy from the NFT Market, Premium or Stars.</Step>
        <Step title={"Enter the recipient"}>type your friend’s @username, not your own. The bot checks it; take one more look to make sure the account shown is the right one.</Step>
        <Step title={"Choose a payment method"}>Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), UzCard/HUMO card transfer or bot balance. For Stars the per-Star price depends on the method; Premium costs the same with every method.</Step>
        <Step title={"Confirm delivery"}>orders are usually delivered automatically within a few seconds, around 5. Ask your friend whether the gift arrived. If anything goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>You don’t need an international card, a crypto wallet or a VPN. You can also send gifts from inside Telegram using Stars; the difference between the two routes is explained in <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">how to send Telegram Gifts</Link>.</p>
      <h2 id="tabrik-aynan-tugilgan-kuni-yetishi">How to make sure the greeting arrives on the birthday itself</h2>
      <p>Timing matters with birthday gifts. A greeting at the end of the day is still nice, but one first thing in the morning is more memorable.</p>
      <ul>
        <li><b>Prepare a day ahead.</b> Have the username ready. If you’re giving Premium, also confirm your friend has no active subscription, so none of this eats into the moment.</li>
        <li><b>Sort out the money in advance.</b> Bot balance is one of the payment options. Top it up beforehand and you’ll only need to place the order when the time comes. See the bot for how to top up.</li>
        <li><b>Place the order yourself at the right moment.</b> Delivery takes a few seconds, so an order placed at 00:00 or in the morning arrives almost instantly.</li>
        <li><b>Add a personal note.</b> Write a short message after the gift so it’s clear who it’s from and why you picked it.</li>
        <li><b>For a group gift, have one person place the order.</b> Especially with Premium: a second order won’t open anyway, and you’ll just lose time.</li>
      </ul>
      <p>Scheduling a gift for a set time is covered separately in <Link href="/blog/taymer-bilan-sovga-yuborish">sending a gift with a timer</Link>.</p>
      <h2 id="sovga-tanlashda-qanday-xatolar-kop">What mistakes do people make when choosing a gift?</h2>
      <p>These mistakes usually happen in a rush and can spoil the celebration.</p>
      <ul>
        <li><b>Entering a name or a similar-looking username.</b> “aziz_2000” and “aziz2000” can be two different people. Copying the username is safer than typing it.</li>
        <li><b>Trying to buy Premium for someone who already has it.</b> The bot won’t open the order and no time is added. Pick a gift or Stars for that friend.</li>
        <li><b>Looking for a limited gift that’s been pulled from sale.</b> Bots can’t send it. If you want something similar, browse the ready-made collectible copies in the NFT Market.</li>
        <li><b>Believing “free Stars for your birthday” messages.</b> If a message like that asks for a password or SMS code, it’s a scam. StarsPaymee only asks for a @username.</li>
        <li><b>Replying to “we’ll buy your gift” offers.</b> StarsPaymee doesn’t buy Stars or gifts from users. Such offers aren’t made on its behalf.</li>
        <li><b>Not comparing payment methods for Stars.</b> The per-Star price differs between card transfer and online payment. Check the amount the bot shows before paying.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "What’s the cheapest Telegram birthday gift?", answer: "On a small budget, a regular gift or 50 Stars (the minimum order) works well. Exact gift prices are listed in the bot, and for Stars the payment method also affects the total." },
  { question: "Can I send a gift to a friend who doesn’t have a username?", answer: "The StarsPaymee bot finds recipients by @username, so ask your friend to set one in their settings. You can also send a gift with Stars directly from the Telegram app." },
  { question: "If I gift Premium, does my friend need to give me their password?", answer: "No. Premium is activated by username through Telegram’s gifting mechanism. Nobody is asked for a password, SMS code or account access." },
  { question: "My friend already has Premium. What else can I give them?", answer: "Choose a gift, Stars or a collectible copy from the NFT Market. You can gift Premium once their subscription ends, since a new term isn’t stacked on an active one." },
  { question: "What’s the minimum number of Stars I can gift?", answer: "The bot’s minimum order is 50 Stars. You can buy more, and the total depends on the per-Star price of the payment method you choose." },
  { question: "Will the recipient see who the gift is from?", answer: "How the sender is shown for gifts sent via the bot isn’t confirmed in this article, so check with @StarsPaymeeSupport. The surest way is to message your friend yourself right after the gift arrives." },
  { question: "Can I pay for a gift in cash?", answer: "Yes, you can pay cash through the Paynet app or a Paynet terminal. Click, Payme, Uzum, UzCard/HUMO card transfer and bot balance are also available." },
  { question: "What if the gift doesn’t arrive or goes to the wrong account?", answer: "Contact @StarsPaymeeSupport right away with your order details. Whether a gift delivered to someone else can be returned isn’t confirmed here, so double-check the username before paying." },
  { question: "Why can’t I get a limited gift through the bot?", answer: "Bots can’t send limited gifts that Telegram has removed from sale. In that case, browse the ready-made collectible copies in the NFT Market inside @StarsPaymee_bot." },
  { question: "Can I pay for a birthday gift early and send it later?", answer: "Orders are delivered automatically within seconds of payment, so it’s best to place yours at the moment you want. You can still set the money aside in advance by topping up your bot balance — the bot explains how." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["tug‘ilgan kunga telegram sovga","telegram sovga tug‘ilgan kun","do‘stga telegram gift yuborish","tug‘ilgan kunga premium sovga qilish","telegram stars sovga qilish","telegram nft sovga tug‘ilgan kun","telegram sovga so‘mda","подарок на день рождения в телеграм","подарить telegram premium на день рождения","подарок другу в телеграме","telegram gift на день рождения"],
  howToSteps: [
    { name: "Username’ni aniqlang", text: "do‘stingiz profilidagi @username’ni nusxa oling. Ism va username — boshqa-boshqa narsa, ismni yozmang." },
    { name: "Botni oching", text: "@StarsPaymee_bot yoki uning Mini App’ini ishga tushiring." },
    { name: "Sovg‘a turini tanlang", text: "gift, NFT Market’dagi kolleksion nusxa, Premium yoki Stars." },
    { name: "Qabul qiluvchini kiriting", text: "o‘zingizni emas, do‘stingizning @username’ini yozing. Bot uni tekshiradi. Ko‘rsatilgan akkaunt to‘g‘riligiga yana bir bor qarang." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Stars’da dona narxi usulga qarab farq qiladi, Premium narxi esa hamma usulda bir xil." },
    { name: "Yetkazilganini tekshiring", text: "buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetadi. Do‘stingizdan sovg‘a kelganini so‘rang. Muammo bo‘lsa, @StarsPaymeeSupport’ga yozing." },
  ],
  locales: {
    uz: {
      title: "Tug‘ilgan kunga Telegram sovg‘a: gift, NFT, Premium yoki Stars tanlash",
      excerpt: "Tug‘ilgan kunga Telegram’da gift, NFT sovg‘a, Premium yoki Stars berish mumkin — tanlov oluvchiga bog‘liq. Maqolada kimga qaysi biri mos, so‘mdagi narxi va tabrikni o‘z vaqtida yuborish tartibi bor.",
      metaTitle: "Tug‘ilgan kunga Telegram sovg‘a",
      metaDescription: "Tug‘ilgan kunga Telegram’da gift, NFT sovg‘a, Premium yoki Stars berish mumkin — tanlov oluvchiga bog‘liq.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Подарок на день рождения в Telegram: gift, NFT, Premium или Stars",
      excerpt: "Разбираем, что подарить на день рождения в Telegram: gift, NFT-подарок, Premium или Stars. Кому что подходит, сколько это стоит в сумах и как отправить поздравление точно в срок.",
      metaTitle: "Подарок на день рождения в Telegram",
      metaDescription: "Разбираем, что подарить на день рождения в Telegram: gift, NFT-подарок, Premium или Stars. Кому что подходит, сколько это стоит в сумах и как отправить…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Birthday Gift Ideas: Gift, NFT, Premium or Stars?",
      excerpt: "For a birthday on Telegram you can give a gift, a collectible NFT gift, Premium or Stars. This guide covers who each one suits, prices in soums and how to time the greeting.",
      metaTitle: "Telegram Birthday Gift Ideas: Gift, NFT, Premium or Stars?",
      metaDescription: "For a birthday on Telegram you can give a gift, a collectible NFT gift, Premium or Stars. This guide covers who each one suits, prices in soums and how to…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
