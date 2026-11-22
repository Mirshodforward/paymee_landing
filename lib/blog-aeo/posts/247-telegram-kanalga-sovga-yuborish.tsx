import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-kanalga-sovga-yuborish";

/**
 * Telegram kanalga sovg‘a yuborish: tugma qayerda, ismni yashirish va upgrade
 *
 * Avtoblogyoz yasagan maqola (2026-11-22): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Sevimli kanalini tabriklamoqchi bo'lgan obunachi yoki kanalga kelgan sovg'alardan foydalanmoqchi bo'lgan kanal egasi «telegram kanalga sovg'a yuborish» deb qidiradi va sovg'a tugmasi qayerdaligi, ismni yashirish, upgrade hamda sovg'ani boshqarish tartibini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-22):
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://core.telegram.org/api/gifts
 *   https://core.telegram.org/constructor/channelFull
 *   https://core.telegram.org/method/payments.transferStarGift
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
  return <p>Ha, Telegram kanalga sovg‘a yuborsa bo‘ladi. Kanal sahifasini oching, pastki burchakdagi 🎁 belgisini bosing, sovg‘ani tanlang va Stars bilan to‘lang. Kanal sovg‘ani ko‘rsatishni tanlasa, u kanal profilida turadi. Yuborishdan oldin sovg‘ani upgrade qilish, ismingizni yashirish va qisqa tabrik qo‘shish mumkin. Kanal egasi esa kelgan sovg‘alarni saralaydi, qadab qo‘yadi, kolleksiya sovg‘asini esa boshqa joyga o‘tkaza oladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#telegram-kanalga-sovga-yuborsa-boladimi", label: "Telegram kanalga sovg‘a yuborsa bo‘ladimi va u qayerda ko‘rinadi?" },
          { href: "#kanalga-sovga-qanday-yuboriladi-obunachi", label: "Kanalga sovg‘a qanday yuboriladi: obunachi uchun qadamlar" },
          { href: "#sovga-tugmasi-korinmasa-nima-sabab", label: "Sovg‘a tugmasi ko‘rinmasa nima sabab bo‘lishi mumkin?" },
          { href: "#yuborishdan-oldin-uchta-qaror-upgrade", label: "Yuborishdan oldin uchta qaror: upgrade, ism va xabar" },
          { href: "#sovga-uchun-stars-yetmasa-somda", label: "Sovg‘a uchun Stars yetmasa, so‘mda qanday to‘ldiriladi?" },
          { href: "#kanal-egasi-kelgan-sovgalarni-qayerda", label: "Kanal egasi kelgan sovg‘alarni qayerda ko‘radi va qanday saralaydi?" },
          { href: "#kanal-sovgani-otkazishi-blokcheynga-chiqarishi", label: "Kanal sovg‘ani o‘tkazishi, blokcheynga chiqarishi yoki Stars’ga almashtirishi mumkinmi?" },
          { href: "#xayriya-yoki-loyiha-uchun-sovga", label: "Xayriya yoki loyiha uchun sovg‘a yig‘ishni qanday ochiq tashkil qilish mumkin?" },
          { href: "#kanal-sovgasi-bilan-bogliq-qanday", label: "Kanal sovg‘asi bilan bog‘liq qanday aldovlardan ehtiyot bo‘lish kerak?" },
          { href: "#sovgadan-tashqari-kanalni-yana-qanday", label: "Sovg‘adan tashqari kanalni yana qanday qo‘llab-quvvatlash mumkin?" },
        ]}
      />
      <h2 id="telegram-kanalga-sovga-yuborsa-boladimi">Telegram kanalga sovg‘a yuborsa bo‘ladimi va u qayerda ko‘rinadi?</h2>
      <p>Kanallarga sovg‘a yuborish imkoniyatini Telegram 2025-yil 24-yanvarda <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">rasmiy blogida</a> e’lon qilgan. Obunachi kanalni sovg‘a bilan tabriklaydi, sovg‘a esa kanal profilida ko‘rinadi.</p>
      <p>Bu jarayonda ikki tomon bor:</p>
      <ul>
        <li><b>Obunachi</b> sovg‘ani tanlaydi, qo‘shimchalarni belgilaydi va Stars bilan to‘laydi.</li>
        <li><b>Kanal egasi va adminlar</b> kelgan sovg‘ani ko‘radi, profilga chiqaradi va saralaydi. Sovg‘a kolleksiya sovg‘asi bo‘lsa, uni o‘tkazish yoki blokcheynga chiqarish ham mumkin.</li>
      </ul>
      <p>Avval yuboruvchi uchun, keyin kanal egasi uchun yozilgan. Do‘st yoki yaqiningizga oddiy sovg‘a yuborish tartibi kerak bo‘lsa, <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">Telegram Gifts qanday yuboriladi</Link> qo‘llanmasini o‘qing.</p>
      <h2 id="kanalga-sovga-qanday-yuboriladi-obunachi">Kanalga sovg‘a qanday yuboriladi: obunachi uchun qadamlar</h2>
      <p>Masalan, har kuni o‘qiydigan retsept kanalingiz 5 yoshga to‘ldi va uni tabriklamoqchisiz. Tartib quyidagicha:</p>
      <Steps>
        <Step title={"Kanalni oching"}>obuna bo‘lgan yoki ochiq kanal sahifasiga kiring.</Step>
        <Step title={"🎁 belgisini toping"}>Telegram ta’rifiga ko‘ra, u kanalning pastki burchagida turadi.</Step>
        <Step title={"Sovg‘ani tanlang"}>har bir sovg‘aning Stars’dagi narxi ilovaning o‘zida ko‘rsatiladi. Rasmiy manbada aniq narxlar ro‘yxati yo‘q, shuning uchun ularni bu yerda keltirmaymiz.</Step>
        <Step title={"Qo‘shimchalarni belgilang"}>xohlasangiz qisqa xabar yozing, sovg‘ani upgrade qiling yoki ismingizni yashiring. Bu tugmalar ilovaning qayerida turishi haqida rasmiy foydalanuvchi qo‘llanmasi yo‘q, shuning uchun sovg‘ani tanlagandan keyin ochiladigan oynani diqqat bilan ko‘zdan kechiring.</Step>
        <Step title={"Stars bilan to‘lang"}>balans yetmasa, pastdagi so‘mda to‘ldirish bo‘limiga o‘ting.</Step>
        <Step title={"Natijani tekshiring"}>sovg‘ani profilda ko‘rsatish-ko‘rsatmaslikni kanal hal qiladi. Darhol chiqmasa, bu xato degani emas.</Step>
      </Steps>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="sovga-tugmasi-korinmasa-nima-sabab">Sovg‘a tugmasi ko‘rinmasa nima sabab bo‘lishi mumkin?</h2>
      <p>Ba’zi kanallarda 🎁 belgisi umuman ko‘rinmaydi. Rasmiy manbalarda buning ikki izohi bor:</p>
      <ul>
        <li><b>Bosqichma-bosqich joriy qilish.</b> Telegram kanal sovg‘alari asta-sekin ishga tushirilishini va hamma joyda birdaniga ishlamasligi mumkinligini oldindan aytgan.</li>
        <li><b>Kanal hozir sovg‘a qabul qilmayapti.</b> <a href={"https://core.telegram.org/constructor/channelFull"} target="_blank" rel="noopener noreferrer">API hujjatiga</a> ko‘ra, kanalga sovg‘a faqat uning ma’lumotlarida sovg‘a qabul qilish belgisi yoqilgan bo‘lsa yuboriladi.</li>
      </ul>
      <p>Kanal egasi bu imkoniyatni ilovadagi qaysi sozlama bilan yoqishi yoki o‘chirishi rasmiy yo‘riqnomada yozilmagan, shuning uchun bu haqda taxmin qilmaymiz.</p>
      <p>Amalda quyidagilarni qiling:</p>
      <ul>
        <li>Telegram ilovasini so‘nggi versiyaga yangilang.</li>
        <li>Boshqa kanalda tugma bor-yo‘qligini solishtiring. Boshqasida bo‘lsa, ilovangizda muammo yo‘q.</li>
        <li>Kanal adminidan sovg‘a qabul qilish yoqilganmi, so‘rang.</li>
      </ul>
      <p>Agar kimdir «tugma ishlamayapti, sovg‘ani mana bu botga yuboring» deb yozsa, to‘xtang. Bunday xabarlar haqida pastdagi xavfsizlik bo‘limida yozilgan.</p>
      <h2 id="yuborishdan-oldin-uchta-qaror-upgrade">Yuborishdan oldin uchta qaror: upgrade, ism va xabar</h2>
      <p>To‘lashdan oldin uchta narsani hal qilasiz. Har biri kanal keyin sovg‘a bilan nima qila olishiga yoki sizni kim ko‘rishiga ta’sir qiladi.</p>
      <CompareTable
        headers={["Qaror", "Nima beradi", "Kim to‘laydi", "Nimani bilish kerak"]}
        rows={[
          ["Upgrade", "Kanal sovg‘ani noyob kolleksiya sovg‘asiga aylantira oladi", "Yuboruvchi, Stars bilan", "Qabul qiluvchi aylantirish uchun hech narsa to‘lamaydi. Upgrade narxi ilovada ko‘rinadi"],
          ["Ismni yashirish", "Kanal sovg‘ani profilga chiqarsa, boshqalar ismingizni ko‘rmaydi", "—", "Qabul qiluvchi kim yuborganini baribir ko‘radi"],
          ["Xabar", "Sovg‘aga tabrik matni qo‘shiladi", "—", "Ixtiyoriy. Masalan: «5 yil davomida foydali retseptlar uchun rahmat!»"],
        ]}
      />
      <p><b>Upgrade</b> kanal biror loyiha yoki xayriya uchun sovg‘a yig‘ayotganda ayniqsa o‘rinli. Oddiy sovg‘a bilan kolleksiya sovg‘asining farqi shunday:</p>
      <CompareTable
        headers={["Imkoniyat", "Oddiy sovg‘a", "Kolleksiya sovg‘asi"]}
        rows={[
          ["Kanal profilida ko‘rsatish", "Ha", "Ha"],
          ["Boshqa foydalanuvchi yoki kanalga o‘tkazish", "Yo‘q, API xato qaytaradi", "Ha, ayrim hollarda kutish bilan"],
          ["TON blokcheynida NFT’ga aylantirish", "Yo‘q", "Ha"],
          ["Noyob emoji status sifatida ishlatish", "Yo‘q", "Ha, shaxsiy profilda"],
          ["Alohida havola", "Yo‘q", "Ha, har birida o‘z havolasi bor"],
        ]}
      />
      <p><b>Ismni yashirish</b> to‘liq anonimlik bermaydi. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts hujjatida</a> aniq yozilgan: ism profilda yashiriladi, lekin qabul qiluvchi sovg‘ani kim yuborganini ko‘radi. Kanal ichida buni aynan ega ko‘radimi yoki qaysidir admin, hujjatda aniqlanmagan.</p>
      <p><b>Xabar</b> ixtiyoriy. Qisqa va aniq yozing: nima uchun minnatdorsiz yoki qaysi sana munosabati bilan tabriklayapsiz.</p>
      <h2 id="sovga-uchun-stars-yetmasa-somda">Sovg‘a uchun Stars yetmasa, so‘mda qanday to‘ldiriladi?</h2>
      <p>Kanalga yuboriladigan sovg‘a Stars bilan to‘lanadi. Balansni StarsPaymee boti orqali so‘mda to‘ldirish mumkin. Faqat @username kerak bo‘ladi: parol, SMS kod yoki akkauntga kirish so‘ralmaydi. StarsPaymee mustaqil xizmat va Telegram bilan hamkorlik da’vo qilmaydi.</p>
      <p>Bir dona Stars narxi to‘lov usuliga bog‘liq:</p>
      <ul>
        <li>UzCard yoki HUMO kartaga o‘tkazma yoki bot balansidan to‘lasangiz — {som(STARS_PER_UNIT_UZS, "uz")};</li>
        <li>Click, Payme, Uzum yoki Paynet orqali to‘lasangiz — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>Eng kam buyurtma — 50 Stars.</p>
      <Steps>
        <Step title={"Telegram’da narxni ko‘ring"}>avval kanaldagi 🎁 oynasida sovg‘a va kerak bo‘lsa upgrade narxini aniqlang.</Step>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Stars xizmatini tanlang"}>buyurtmani Stars uchun oching.</Step>
        <Step title={"@username kiriting"}>sovg‘ani o‘zingiz yuborasiz, shuning uchun o‘z username’ingizni yozing.</Step>
        <Step title={"Miqdor va to‘lov usulini tanlang"}>sovg‘aga yetadigan miqdorni belgilang, keyin Click, Payme, Uzum, Paynet, kartaga o‘tkazma yoki bot balansini tanlang.</Step>
        <Step title={"Balansni tekshiring"}>Stars odatda bir necha soniyada avtomatik keladi. Keyin kanalga qaytib, sovg‘ani yuborasiz.</Step>
      </Steps>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Pulingiz naqd bo‘lsa, Paynet terminalida ham to‘lashingiz mumkin.</p>
      <p>Bot sovg‘ani to‘g‘ridan-to‘g‘ri kanalga yubora oladimi, buni botning o‘zida tekshiring: bu maqolada tasdiqlanmagan. Eng ishonchli yo‘l — Stars olib, sovg‘ani kanal sahifasidagi tugma orqali Telegram ichidan yuborish. Narxlar <Link href="/stars">/stars</Link> sahifasida, batafsil tartib esa <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasida</Link> bor.</p>
      <h2 id="kanal-egasi-kelgan-sovgalarni-qayerda">Kanal egasi kelgan sovg‘alarni qayerda ko‘radi va qanday saralaydi?</h2>
      <p>Kanalga kelgan sovg‘alar kanal profilidagi <b>Gifts</b> tabida to‘planadi. Sovg‘a ko‘paygani sari quyidagi imkoniyatlar asqotadi:</p>
      <CompareTable
        headers={["Imkoniyat", "Qayerda", "Nimaga kerak"]}
        rows={[
          ["Filtrlar: qiymat, kolleksiya holati, olingan sana, cheklangan yoki cheklanmagan to‘plam", "Kanalning Gifts tabi", "Ko‘p sovg‘a orasidan qimmatini yoki kolleksiya sovg‘alarini tez topish"],
          ["Bildirishnomalar", "Gifts tabi, adminlar yoqadi", "Yangi kelgan sovg‘ani o‘tkazib yubormaslik"],
          ["Qadab qo‘yish", "Kanal profilining tepasi", "Eng qadrli yoki birinchi sovg‘ani ko‘zga tashlanadigan qilish"],
          ["Gift collections", "API’da tasvirlangan alohida funksiya; ilovadagi joyi bu maqolada tasdiqlanmagan", "Bir nechta kolleksiya sovg‘asini bitta guruhga jamlash"],
        ]}
      />
      <p>Yangi sovg‘alarni kuzatish uchun admin kanal profilidagi Gifts tabini ochib, shu yerdan bildirishnomalarni yoqadi. Sovg‘ani profil tepasiga qadash tartibi <Link href="/blog/telegram-sovgani-profilga-qoyish">sovg‘ani profilga qo‘yish</Link> maqolasida yozilgan.</p>
      <h3>Sovg‘alarni kim boshqaradi</h3>
      <p>API hujjatiga ko‘ra, kanal sovg‘alarini boshqarish metodlarini faqat xabar joylash (post_messages) huquqi bor adminlar chaqira oladi. Kanalga jami nechta sovg‘a kelganini ham shu adminlar ko‘radi. Qolganlar faqat profilga qo‘yilgan sovg‘alar sonini ko‘radi.</p>
      <p>Amaliy xulosa: post joylash huquqi sovg‘alarni boshqarish imkoni bilan bog‘liq. Bu huquqni yangi adminga berishdan oldin sovg‘alarni unga ishonish-ishonmasligingizni o‘ylab ko‘ring.</p>
      <h2 id="kanal-sovgani-otkazishi-blokcheynga-chiqarishi">Kanal sovg‘ani o‘tkazishi, blokcheynga chiqarishi yoki Stars’ga almashtirishi mumkinmi?</h2>
      <p>Telegram blogiga ko‘ra, kanal egalari sovg‘alarni boshqa foydalanuvchi yoki kanalga o‘tkazishi yoki TON blokcheynida auksionga qo‘yishi mumkin. Amalda buning shartlari bor.</p>
      <h3>O‘tkazish</h3>
      <p><a href={"https://core.telegram.org/method/payments.transferStarGift"} target="_blank" rel="noopener noreferrer">O‘tkazish metodi hujjatida</a> quyidagilar aytilgan:</p>
      <ul>
        <li>faqat kolleksiya sovg‘asi o‘tkaziladi, oddiy sovg‘ani o‘tkazmoqchi bo‘lsangiz, xato qaytadi;</li>
        <li>bu metod faqat o‘tkazish uchun haq olinmaydigan holatda ishlaydi;</li>
        <li>ba’zan sovg‘ani darhol o‘tkazib bo‘lmaydi va kutish vaqti ko‘rsatiladi.</li>
      </ul>
      <p>Demak, kanal sovg‘ani keyinchalik boshqa joyga bermoqchi bo‘lsa, sovg‘a avval kolleksiyaga aylantirilgan bo‘lishi kerak. Qadamlar <Link href="/blog/nft-sovgani-dostga-otkazish-tartibi">NFT sovg‘ani o‘tkazish tartibi</Link> maqolasida bor.</p>
      <h3>Blokcheynga chiqarish</h3>
      <p>Kolleksiya sovg‘asini TON blokcheynida NFT’ga aylantirish mumkin. TON hamyonga o‘tkazilgan sovg‘ani tashqi xizmatlarga ham ulasa bo‘ladi. Shaxsiy profil uchun yo‘l: My Profile &gt; Gifts &gt; sovg‘a &gt; Transfer &gt; Send via Blockchain. Kanal uchun aynan qaysi menyu yo‘li ishlashi rasmiy blogda ko‘rsatilmagan, auksion qanday o‘tishi ham batafsil yoritilmagan. Boshlashdan oldin ilovadagi variantlarni o‘zingiz tekshiring.</p>
      <h3>Stars’ga almashtirish</h3>
      <p>Hujjatga ko‘ra, sovg‘ani Stars’ga almashtirsangiz, u butunlay yo‘q qilinadi. Bu qaytarib bo‘lmaydigan qadam, ayniqsa sovg‘alar xayriya uchun yig‘ilgan bo‘lsa, yuboruvchilarga oldindan aytib qo‘ying.</p>
      <h3>Emoji status</h3>
      <p>Kolleksiyaga aylantirilgan sovg‘ani noyob emoji status sifatida ishlatish mumkin. Shaxsiy profilda bu My Profile &gt; Gifts &gt; sovg‘a &gt; Wear yo‘li bilan qilinadi. Bu imkoniyat kanallarda ham ishlashi rasmiy manbada tasdiqlanmagan.</p>
      <h2 id="xayriya-yoki-loyiha-uchun-sovga">Xayriya yoki loyiha uchun sovg‘a yig‘ishni qanday ochiq tashkil qilish mumkin?</h2>
      <p>Telegram ijodkorlar va xayriya tashkilotlari bu funksiya orqali maxsus loyihalar va muhim maqsadlar uchun mablag‘ yig‘ishi mumkinligini o‘zi aytgan. Obunachilar ishonishi uchun yig‘im ochiq tartibda o‘tgani yaxshi:</p>
      <ul>
        <li><b>Maqsadni aniq yozing.</b> «Kanalni qo‘llab-quvvatlang» deb emas, «studiya mikrofoni uchun» yoki «bolalar uyiga qishki kiyim uchun» deb yozing.</li>
        <li><b>Muddat belgilang.</b> Masalan: «Yig‘im oy oxirigacha davom etadi». Obunachi qachon natija kutishni biladi.</li>
        <li><b>Upgrade haqida oldindan ayting.</b> Kanal sovg‘ani o‘tkazmoqchi yoki blokcheynga chiqarmoqchi bo‘lsa, obunachilardan upgrade bilan yuborishni so‘rang.</li>
        <li><b>Hisobot bering.</b> Gifts tabidagi sana filtri bilan aksiya davrida kelgan sovg‘alarni ajratib olasiz.</li>
        <li><b>Rahmatni to‘g‘ri ayting.</b> Postda faqat ismini yashirmaganlarni tilga oling. Ismini yashirganlarning tanlovini hurmat qiling.</li>
      </ul>
      <p>«Sovg‘a kuni»ni kanal uchun muhim sanaga bog‘lash qulay: kanal yubileyi, 10 000 obunachiga yetgan kun yoki yil yakuni.</p>
      <p>Sovg‘a kelajakda qimmatlashishini hech kim kafolatlay olmaydi. Obunachilarga «sovg‘a narxi oshadi» deb va’da bermang.</p>
      <h2 id="kanal-sovgasi-bilan-bogliq-qanday">Kanal sovg‘asi bilan bog‘liq qanday aldovlardan ehtiyot bo‘lish kerak?</h2>
      <Notice label={"Muhim"}>Haqiqiy sovg‘a faqat kanal sahifasidagi 🎁 tugmasi orqali yuboriladi. «Admin»dan kelgan «sovg‘ani shu botga yuboring» yoki «hamyoningizni ulang» degan xabarlar shubhali.</Notice>
      <ul>
        <li>Har bir kolleksiya sovg‘asining Telegram domenidagi nft bo‘limiga olib boradigan alohida havolasi bor. Boshqacha ko‘rinishdagi «sovg‘a havolasi»ni ochishdan oldin tekshiring: tartibi <Link href="/blog/telegram-gift-havolasini-tekshirish">sovg‘a havolasini tekshirish</Link> maqolasida.</li>
        <li>Stars sotadigan halol xizmat parol, SMS kod yoki zaxira so‘zlarni so‘ramaydi. StarsPaymee faqat @username so‘raydi.</li>
        <li>Kanal egalari uchun: sovg‘ani o‘tkazish yoki blokcheynga chiqarishda «yordam beraman» degan begonaga akkauntingizni ham, admin huquqini ham bermang.</li>
        <li>Post joylash huquqini faqat kerakli adminlarga bering, chunki u sovg‘alarni boshqarish bilan bog‘liq.</li>
      </ul>
      <p>Stars yoki sovg‘a buyurtmasida savol chiqsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</p>
      <h2 id="sovgadan-tashqari-kanalni-yana-qanday">Sovg‘adan tashqari kanalni yana qanday qo‘llab-quvvatlash mumkin?</h2>
      <CompareTable
        headers={["Usul", "Nima beradi", "Qachon mos"]}
        rows={[
          ["Sovg‘a", "Kanal profilida ko‘rinadi, upgrade qilinsa kolleksiyaga aylanishi mumkin", "Bir martalik tabrik: yubiley, bayram"],
          ["Star reaksiyasi", "Postga pullik reaksiya. Kanal bu imkoniyatni yoqqan bo‘lsa ishlaydi", "Yoqqan postlarni muntazam qo‘llab-quvvatlash"],
          ["Boost", "Kanalni boost qilish; ijarasi botda bor", "Kanalga qo‘shimcha imkoniyatlar ochishga yordam berish"],
          ["Premium sovg‘asi", "Kanal egasiga shaxsan, uning @username’i orqali beriladi", "Muallifning o‘ziga minnatdorlik"],
        ]}
      />
      <p>Star reaksiyalari qanday ishlashi <Link href="/blog/telegram-star-reaksiyalari">Star reaksiyalari</Link> maqolasida yozilgan. Kanal boost ijarasi <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>’da bor.</p>
      <p>Premium’ni kanal muallifiga sovg‘a qilsangiz, narxlar hamma to‘lov usulida bir xil: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. Muallifda faol Premium obunasi bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi. Tariflar <Link href="/premium">/premium</Link> sahifasida, sovg‘alar va NFT Market esa <Link href="/gifts">/gifts</Link> sahifasida.</p>
      <p>Bir martalik tabrik uchun sovg‘a, postlarni muntazam qo‘llab-quvvatlash uchun reaksiya mos. Muallifning o‘ziga minnatdorlik bildirmoqchi bo‘lsangiz, Premium sovg‘a qiling.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/channelFull", label: "channelFull" },
          { href: "https://core.telegram.org/method/payments.transferStarGift", label: "payments.transferStarGift" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Har qanday Telegram kanalga sovg‘a yuborsa bo‘ladimi?", answer: "Yo‘q. Sovg‘ani faqat sovg‘a qabul qilish yoqilgan kanalga yuborish mumkin, funksiya ham bosqichma-bosqich ishga tushirilgan. Kanalda 🎁 tugmasi bo‘lmasa, adminidan so‘rab ko‘ring." },
  { question: "Kanalga sovg‘a yuborsam, ismimni boshqa obunachilar ko‘radimi?", answer: "Ismni yashirishni belgilamagan bo‘lsangiz, kanal sovg‘ani profilga chiqarganda ismingiz ko‘rinishi mumkin. Belgilagan bo‘lsangiz, profilda u boshqalardan yashiriladi." },
  { question: "Ismimni yashirsam ham kanal admini kim yuborganini biladimi?", answer: "Qabul qiluvchi tomon sovg‘ani kim yuborganini baribir ko‘radi. Kanal ichida buni aynan ega yoki qaysi admin ko‘rishi hujjatda aniqlanmagan." },
  { question: "Upgrade qilingan sovg‘a uchun kanal yana pul to‘laydimi?", answer: "Yo‘q. Upgrade haqini yuboruvchi Stars bilan to‘laydi, kanal esa sovg‘ani kolleksiyaga aylantirishda hech narsa to‘lamaydi." },
  { question: "Kanalga yuborilgan oddiy sovg‘ani kanal boshqa odamga o‘tkaza oladimi?", answer: "Telegram API bo‘yicha oddiy sovg‘ani o‘tkazib bo‘lmaydi, faqat kolleksiya sovg‘asi o‘tkaziladi. Kanalga bunday imkon kerak bo‘lsa, sovg‘ani yuborishdan oldin upgrade qiling." },
  { question: "Sovg‘a yuborganimdan keyin u kanal profilida chiqmasa, nima bo‘ldi?", answer: "Sovg‘ani profilga chiqarish-chiqarmaslikni kanal o‘zi hal qiladi, shuning uchun u ko‘rinmasligi xato degani emas. Stars yechilgan bo‘lsa, adminga yozib, sovg‘a yetib borganini so‘rang." },
  { question: "Kanal admini sovg‘alarni boshqara olmayapti — sababi nima?", answer: "Ko‘pincha sabab huquqda: API hujjatiga ko‘ra, sovg‘alarni boshqarish post joylash huquqi bor adminlarga ochiq. Bunday huquqi yo‘q admin faqat profilga qo‘yilgan sovg‘alar sonini ko‘radi." },
  { question: "Kanal sovg‘ani Stars’ga almashtirsa, sovg‘a qayerga ketadi?", answer: "Hech qayerga o‘tmaydi — almashtirilgan sovg‘a butunlay yo‘q qilinadi va uni qaytarib bo‘lmaydi. Xayriya uchun yig‘ilgan sovg‘alarda bu qarorni yuboruvchilarga oldindan aytgan ma’qul." },
  { question: "Kanalga sovg‘a yuborish uchun Stars’ni so‘mda qanday olaman?", answer: `@StarsPaymee_bot’da Stars buyurtmasini ochib, o‘z @username’ingizni kiritasiz. Bir dona Stars kartaga o‘tkazma yoki bot balansidan ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}; eng kam buyurtma — 50 Stars.` },
  { question: "Kanalga kelgan sovg‘a haqida xabarnoma olish mumkinmi?", answer: "Ha. Admin kanal profilidagi Gifts tabidan bildirishnomalarni yoqadi va yangi sovg‘a kelganini o‘tkazib yubormaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, подарок каналу в Telegram отправить можно. Откройте страницу канала, нажмите значок 🎁 в нижнем углу, выберите подарок и оплатите его в Stars. Если канал решит показывать подарок, он появится в профиле. Перед отправкой подарок можно улучшить, скрыть своё имя и добавить короткое поздравление. Владелец канала сортирует подарки и закрепляет их, а коллекционные может передать дальше.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#telegram-kanalga-sovga-yuborsa-boladimi", label: "Можно ли отправить подарок каналу в Telegram и где его видно?" },
          { href: "#kanalga-sovga-qanday-yuboriladi-obunachi", label: "Как отправить подарок каналу: шаги для подписчика" },
          { href: "#sovga-tugmasi-korinmasa-nima-sabab", label: "Почему не видно кнопки подарка?" },
          { href: "#yuborishdan-oldin-uchta-qaror-upgrade", label: "Три решения перед отправкой: улучшение, имя и сообщение" },
          { href: "#sovga-uchun-stars-yetmasa-somda", label: "Не хватает Stars на подарок: как пополнить в сумах?" },
          { href: "#kanal-egasi-kelgan-sovgalarni-qayerda", label: "Где владелец канала видит подарки и как их сортировать?" },
          { href: "#kanal-sovgani-otkazishi-blokcheynga-chiqarishi", label: "Может ли канал передать подарок, вывести в блокчейн или обменять на Stars?" },
          { href: "#xayriya-yoki-loyiha-uchun-sovga", label: "Как открыто организовать сбор подарков на благотворительность или проект?" },
          { href: "#kanal-sovgasi-bilan-bogliq-qanday", label: "Каких обманов с подарками каналам стоит остерегаться?" },
          { href: "#sovgadan-tashqari-kanalni-yana-qanday", label: "Как ещё можно поддержать канал, кроме подарка?" },
        ]}
      />
      <h2 id="telegram-kanalga-sovga-yuborsa-boladimi">Можно ли отправить подарок каналу в Telegram и где его видно?</h2>
      <p>Telegram объявил о подарках каналам 24 января 2025 года в <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">официальном блоге</a>. Подписчик поздравляет канал подарком, и подарок отображается в профиле канала.</p>
      <p>В процессе участвуют две стороны:</p>
      <ul>
        <li><b>Подписчик</b> выбирает подарок, отмечает дополнительные опции и платит в Stars.</li>
        <li><b>Владелец и админы канала</b> видят пришедший подарок, выводят его в профиль и сортируют. Если подарок коллекционный, его можно передать или вывести в блокчейн.</li>
      </ul>
      <p>Сначала разберём всё для отправителя, потом для владельца канала. Если нужно отправить обычный подарок другу или близкому, читайте инструкцию <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">как отправлять Telegram Gifts</Link>.</p>
      <h2 id="kanalga-sovga-qanday-yuboriladi-obunachi">Как отправить подарок каналу: шаги для подписчика</h2>
      <p>Допустим, вашему любимому каналу с рецептами, который вы читаете каждый день, исполнилось 5 лет, и вы хотите его поздравить. Порядок такой:</p>
      <Steps>
        <Step title={"Откройте канал"}>зайдите на страницу канала, на который подписаны, или любого открытого канала.</Step>
        <Step title={"Найдите значок 🎁"}>по описанию Telegram, он находится в нижнем углу канала.</Step>
        <Step title={"Выберите подарок"}>цена каждого подарка в Stars показана прямо в приложении. Официального списка цен в источниках нет, поэтому мы их здесь не приводим.</Step>
        <Step title={"Отметьте опции"}>при желании напишите короткое сообщение, улучшите подарок или скройте имя. Официальной инструкции для пользователей о том, где именно в приложении находятся эти кнопки, нет, так что внимательно посмотрите окно, которое откроется после выбора подарка.</Step>
        <Step title={"Оплатите в Stars"}>если баланса не хватает, перейдите к разделу ниже о пополнении в сумах.</Step>
        <Step title={"Проверьте результат"}>показывать подарок в профиле или нет, решает канал. Если он не появился сразу, это ещё не ошибка.</Step>
      </Steps>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="sovga-tugmasi-korinmasa-nima-sabab">Почему не видно кнопки подарка?</h2>
      <p>На некоторых каналах значка 🎁 нет совсем. В официальных источниках есть два объяснения:</p>
      <ul>
        <li><b>Постепенный запуск.</b> Telegram заранее предупредил, что подарки каналам включаются постепенно и могут быть доступны не везде сразу.</li>
        <li><b>Канал сейчас не принимает подарки.</b> Согласно <a href={"https://core.telegram.org/constructor/channelFull"} target="_blank" rel="noopener noreferrer">документации API</a>, подарок каналу можно отправить, только если в данных канала включён признак приёма подарков.</li>
      </ul>
      <p>Какой настройкой в приложении владелец канала включает или выключает эту возможность, в официальной инструкции не описано, поэтому гадать мы не будем.</p>
      <p>Что можно сделать на практике:</p>
      <ul>
        <li>Обновите Telegram до последней версии.</li>
        <li>Проверьте, есть ли кнопка на другом канале. Если там есть — с вашим приложением всё в порядке.</li>
        <li>Спросите админа, включён ли у канала приём подарков.</li>
      </ul>
      <p>Если кто-то пишет «кнопка не работает, отправьте подарок вот этому боту» — остановитесь. О таких сообщениях — в разделе о безопасности ниже.</p>
      <h2 id="yuborishdan-oldin-uchta-qaror-upgrade">Три решения перед отправкой: улучшение, имя и сообщение</h2>
      <p>До оплаты нужно решить три вещи. Каждая влияет на то, что канал сможет потом сделать с подарком, или на то, кто увидит ваше имя.</p>
      <CompareTable
        headers={["Решение", "Что даёт", "Кто платит", "Что важно знать"]}
        rows={[
          ["Улучшение (upgrade)", "Канал сможет превратить подарок в уникальный коллекционный", "Отправитель, в Stars", "Получатель ничего не платит за превращение. Стоимость улучшения видна в приложении"],
          ["Скрыть имя", "Если канал выведет подарок в профиль, другие не увидят вашего имени", "—", "Получатель всё равно видит, кто отправил подарок"],
          ["Сообщение", "К подарку добавляется текст поздравления", "—", "По желанию. Например: «Спасибо за полезные рецепты все эти 5 лет!»"],
        ]}
      />
      <p><b>Улучшение</b> особенно уместно, когда канал собирает подарки на проект или благотворительность. Вот чем обычный подарок отличается от коллекционного:</p>
      <CompareTable
        headers={["Возможность", "Обычный подарок", "Коллекционный подарок"]}
        rows={[
          ["Показ в профиле канала", "Да", "Да"],
          ["Передача другому пользователю или каналу", "Нет, API возвращает ошибку", "Да, иногда с ожиданием"],
          ["Превращение в NFT в блокчейне TON", "Нет", "Да"],
          ["Использование как уникального эмодзи-статуса", "Нет", "Да, в личном профиле"],
          ["Отдельная ссылка", "Нет", "Да, у каждого своя"],
        ]}
      />
      <p><b>Скрытие имени</b> не даёт полной анонимности. В <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts</a> сказано прямо: имя скрывается в профиле, но получатель видит, кто отправил подарок. Кто именно внутри канала это видит — владелец или кто-то из админов, — в документации не уточняется.</p>
      <p><b>Сообщение</b> добавлять не обязательно. Пишите коротко и по делу: за что благодарите или с какой датой поздравляете.</p>
      <h2 id="sovga-uchun-stars-yetmasa-somda">Не хватает Stars на подарок: как пополнить в сумах?</h2>
      <p>Подарок каналу оплачивается в Stars. Баланс можно пополнить в сумах через бот StarsPaymee. Нужен только @username: пароль, SMS-код или вход в аккаунт не запрашиваются. StarsPaymee — независимый сервис и не заявляет о партнёрстве с Telegram.</p>
      <p>Цена одной звезды зависит от способа оплаты:</p>
      <ul>
        <li>переводом на карту UzCard или HUMO либо с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")};</li>
        <li>через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
      </ul>
      <p>Минимальный заказ — 50 Stars.</p>
      <Steps>
        <Step title={"Узнайте цену в Telegram"}>сначала в окне 🎁 на канале посмотрите стоимость подарка и, если нужно, улучшения.</Step>
        <Step title={"Откройте бот"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Выберите услугу Stars"}>оформите заказ на звёзды.</Step>
        <Step title={"Введите @username"}>подарок вы отправляете сами, поэтому укажите свой username.</Step>
        <Step title={"Выберите количество и способ оплаты"}>укажите сумму, которой хватит на подарок, затем Click, Payme, Uzum, Paynet, перевод на карту или баланс бота.</Step>
        <Step title={"Проверьте баланс"}>звёзды обычно приходят автоматически за несколько секунд. После этого возвращайтесь на канал и отправляйте подарок.</Step>
      </Steps>
      <p>Международная карта, криптокошелёк или VPN не нужны. Если у вас наличные, можно оплатить и в терминале Paynet.</p>
      <p>Может ли бот отправить подарок прямо на канал, уточняйте в самом боте: в этой статье это не подтверждено. Самый надёжный путь — купить Stars и отправить подарок внутри Telegram через кнопку на странице канала. Цены — на странице <Link href="/stars">/stars</Link>, подробный порядок — в <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">руководстве по покупке Stars</Link>.</p>
      <h2 id="kanal-egasi-kelgan-sovgalarni-qayerda">Где владелец канала видит подарки и как их сортировать?</h2>
      <p>Подарки, пришедшие каналу, собираются во вкладке <b>Gifts</b> («Подарки») в профиле канала. Когда подарков становится много, пригодятся такие возможности:</p>
      <CompareTable
        headers={["Возможность", "Где", "Зачем"]}
        rows={[
          ["Фильтры: стоимость, коллекционный статус, дата получения, лимитированная или нелимитированная коллекция", "Вкладка Gifts канала", "Быстро найти самые дорогие или коллекционные подарки среди множества"],
          ["Уведомления", "Вкладка Gifts, включают админы", "Не пропустить новый подарок"],
          ["Закрепление", "Верх профиля канала", "Сделать заметным самый ценный или первый подарок"],
          ["Gift collections", "Отдельная функция, описанная в API; где она в приложении, в этой статье не подтверждено", "Объединить несколько коллекционных подарков в одну группу"],
        ]}
      />
      <p>Чтобы следить за новыми подарками, админ открывает вкладку Gifts в профиле канала и включает там уведомления. Как закрепить подарок наверху профиля, описано в статье <Link href="/blog/telegram-sovgani-profilga-qoyish">как поставить подарок в профиль</Link>.</p>
      <h3>Кто управляет подарками</h3>
      <p>По документации API, методы управления подарками канала доступны только админам с правом публикации сообщений (post_messages). Эти же админы видят, сколько всего подарков получил канал. Остальные видят только число подарков, выставленных в профиль.</p>
      <p>Практический вывод: право публиковать посты связано с возможностью управлять подарками. Прежде чем выдать его новому админу, подумайте, готовы ли вы доверить ему подарки.</p>
      <h2 id="kanal-sovgani-otkazishi-blokcheynga-chiqarishi">Может ли канал передать подарок, вывести в блокчейн или обменять на Stars?</h2>
      <p>Согласно блогу Telegram, владельцы каналов могут передавать подарки другим пользователям и каналам или выставлять их на аукцион в блокчейне TON. На практике здесь есть условия.</p>
      <h3>Передача</h3>
      <p>В <a href={"https://core.telegram.org/method/payments.transferStarGift"} target="_blank" rel="noopener noreferrer">документации метода передачи</a> сказано:</p>
      <ul>
        <li>передать можно только коллекционный подарок, при попытке передать обычный вернётся ошибка;</li>
        <li>этот метод работает только тогда, когда за передачу не берут плату;</li>
        <li>иногда подарок нельзя передать сразу — показывается время ожидания.</li>
      </ul>
      <p>Значит, если канал захочет потом отдать подарок дальше, подарок сначала должен стать коллекционным. Шаги — в статье <Link href="/blog/nft-sovgani-dostga-otkazish-tartibi">как передать NFT-подарок</Link>.</p>
      <h3>Вывод в блокчейн</h3>
      <p>Коллекционный подарок можно превратить в NFT в блокчейне TON. Подарок, переведённый на TON-кошелёк, можно подключать и к внешним сервисам. Путь для личного профиля: My Profile &gt; Gifts &gt; подарок &gt; Transfer &gt; Send via Blockchain. Какой путь в меню работает именно для канала, в официальном блоге не указано, как проходит аукцион — тоже подробно не описано. Прежде чем начинать, проверьте варианты в приложении сами.</p>
      <h3>Обмен на Stars</h3>
      <p>По документации, если обменять подарок на Stars, он уничтожается безвозвратно. Шаг необратимый, поэтому предупредите отправителей заранее — особенно если подарки собирались на благотворительность.</p>
      <h3>Эмодзи-статус</h3>
      <p>Коллекционный подарок можно использовать как уникальный эмодзи-статус. В личном профиле это делается так: My Profile &gt; Gifts &gt; подарок &gt; Wear. Работает ли это для каналов, официальные источники не подтверждают.</p>
      <h2 id="xayriya-yoki-loyiha-uchun-sovga">Как открыто организовать сбор подарков на благотворительность или проект?</h2>
      <p>Telegram сам говорит, что авторы и благотворительные организации могут собирать с помощью этой функции средства на особые проекты и важные цели. Чтобы подписчики доверяли, сбор лучше вести открыто:</p>
      <ul>
        <li><b>Чётко назовите цель.</b> Не «поддержите канал», а «на студийный микрофон» или «на зимнюю одежду для детского дома».</li>
        <li><b>Обозначьте срок.</b> Например: «Сбор идёт до конца месяца». Подписчик понимает, когда ждать результата.</li>
        <li><b>Заранее скажите об улучшении.</b> Если канал собирается передавать подарки или выводить их в блокчейн, попросите подписчиков отправлять подарки с улучшением.</li>
        <li><b>Отчитайтесь.</b> Фильтр по дате во вкладке Gifts поможет выделить подарки, пришедшие за время акции.</li>
        <li><b>Благодарите корректно.</b> В посте упоминайте только тех, кто не скрыл имя. Уважайте выбор тех, кто его скрыл.</li>
      </ul>
      <p>«День подарков» удобно привязать к важной для канала дате: юбилею, дню, когда набралось 10 000 подписчиков, или итогам года.</p>
      <p>Никто не может гарантировать, что подарок со временем подорожает. Не обещайте подписчикам, что «цена подарка вырастет».</p>
      <h2 id="kanal-sovgasi-bilan-bogliq-qanday">Каких обманов с подарками каналам стоит остерегаться?</h2>
      <Notice label={"Важно"}>Настоящий подарок отправляется только через кнопку 🎁 на странице канала. Сообщения от «админа» в духе «отправьте подарок этому боту» или «подключите кошелёк» — повод насторожиться.</Notice>
      <ul>
        <li>У каждого коллекционного подарка есть отдельная ссылка, ведущая в раздел nft на домене Telegram. «Ссылку на подарок» другого вида проверьте до открытия — как это сделать, описано в статье <Link href="/blog/telegram-gift-havolasini-tekshirish">как проверить ссылку на подарок</Link>.</li>
        <li>Честный сервис по продаже Stars не просит пароль, SMS-код или seed-фразу. StarsPaymee запрашивает только @username.</li>
        <li>Владельцам каналов: не давайте ни аккаунт, ни права админа незнакомцу, который «поможет» передать подарок или вывести его в блокчейн.</li>
        <li>Право публикации выдавайте только нужным админам — оно связано с управлением подарками.</li>
      </ul>
      <p>Если по заказу Stars или подарка возник вопрос, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="sovgadan-tashqari-kanalni-yana-qanday">Как ещё можно поддержать канал, кроме подарка?</h2>
      <CompareTable
        headers={["Способ", "Что даёт", "Когда подходит"]}
        rows={[
          ["Подарок", "Виден в профиле канала, после улучшения может стать коллекционным", "Разовое поздравление: юбилей, праздник"],
          ["Звёздная реакция", "Платная реакция на пост. Работает, если канал включил эту возможность", "Регулярная поддержка понравившихся постов"],
          ["Буст", "Буст канала; аренда доступна в боте", "Помочь каналу открыть дополнительные возможности"],
          ["Подарок Premium", "Вручается лично владельцу канала по его @username", "Благодарность самому автору"],
        ]}
      />
      <p>Как работают звёздные реакции, рассказано в статье <Link href="/blog/telegram-star-reaksiyalari">о Star-реакциях</Link>. Аренда бустов для канала есть в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</p>
      <p>Если дарите Premium автору канала, цены одинаковы при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Если у автора уже активна подписка Premium, бот не откроет новый заказ: срок не добавляется поверх действующей подписки. Тарифы — на странице <Link href="/premium">/premium</Link>, подарки и NFT Market — на странице <Link href="/gifts">/gifts</Link>.</p>
      <p>Для разового поздравления подойдёт подарок, для регулярной поддержки постов — реакции. А если хотите поблагодарить лично автора, подарите ему Premium.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/channelFull", label: "channelFull" },
          { href: "https://core.telegram.org/method/payments.transferStarGift", label: "payments.transferStarGift" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли отправить подарок любому каналу в Telegram?", answer: "Нет. Подарок можно отправить только каналу, у которого включён приём подарков, к тому же функцию запускали постепенно. Если на канале нет кнопки 🎁, спросите у админа." },
  { question: "Увидят ли другие подписчики моё имя, если я подарю подарок каналу?", answer: "Если вы не отметили скрытие имени, оно может отображаться, когда канал выведет подарок в профиль. Если отметили — для остальных оно в профиле будет скрыто." },
  { question: "Если я скрою имя, узнает ли админ канала, кто отправил подарок?", answer: "Сторона-получатель всё равно видит отправителя. Кто именно внутри канала это видит — владелец или конкретный админ, — в документации не уточняется." },
  { question: "Платит ли канал ещё что-то за улучшенный подарок?", answer: "Нет. Улучшение оплачивает отправитель в Stars, а канал превращает подарок в коллекционный, ничего не доплачивая." },
  { question: "Может ли канал передать обычный подарок другому человеку?", answer: "По API Telegram обычный подарок передать нельзя, передаются только коллекционные. Если каналу нужна такая возможность, улучшите подарок до отправки." },
  { question: "Я отправил подарок, а в профиле канала его нет. Что случилось?", answer: "Канал сам решает, выводить подарок в профиль или нет, так что его отсутствие не означает ошибку. Если звёзды списались, напишите админу и уточните, дошёл ли подарок." },
  { question: "Админ канала не может управлять подарками — почему?", answer: "Чаще всего дело в правах: по документации API управление подарками доступно админам с правом публикации постов. Админ без этого права видит только число подарков, выставленных в профиль." },
  { question: "Куда девается подарок, если канал обменяет его на Stars?", answer: "Никуда не переходит — обменянный подарок уничтожается насовсем, вернуть его нельзя. Если подарки собирались на благотворительность, лучше заранее сообщить об этом решении отправителям." },
  { question: "Как купить Stars в сумах, чтобы отправить подарок каналу?", answer: `Оформите заказ Stars в @StarsPaymee_bot и введите свой @username. Одна звезда стоит ${som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту или с баланса бота и ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} через Click, Payme, Uzum или Paynet; минимальный заказ — 50 Stars.` },
  { question: "Можно ли получать уведомления о подарках каналу?", answer: "Да. Админ включает уведомления во вкладке Gifts в профиле канала — так новые подарки не останутся незамеченными." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can send a gift to a Telegram channel. Open the channel, tap the 🎁 icon in the bottom corner, pick a gift and pay with Stars. If the channel chooses to display it, the gift shows up on the channel’s profile. Before you pay, you can upgrade the gift, hide your name and add a short message. Owners can sort and pin the gifts they get, and they can transfer collectible gifts.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#telegram-kanalga-sovga-yuborsa-boladimi", label: "Can you send a gift to a Telegram channel, and where does it show up?" },
          { href: "#kanalga-sovga-qanday-yuboriladi-obunachi", label: "How to send a gift to a channel: steps for subscribers" },
          { href: "#sovga-tugmasi-korinmasa-nima-sabab", label: "Why might the gift button be missing?" },
          { href: "#yuborishdan-oldin-uchta-qaror-upgrade", label: "Three choices before you send: upgrade, name and message" },
          { href: "#sovga-uchun-stars-yetmasa-somda", label: "Not enough Stars for the gift? How to top up in soums" },
          { href: "#kanal-egasi-kelgan-sovgalarni-qayerda", label: "Where can a channel owner see incoming gifts, and how are they sorted?" },
          { href: "#kanal-sovgani-otkazishi-blokcheynga-chiqarishi", label: "Can a channel transfer a gift, move it to the blockchain or convert it to Stars?" },
          { href: "#xayriya-yoki-loyiha-uchun-sovga", label: "How do you run an open gift drive for a charity or project?" },
          { href: "#kanal-sovgasi-bilan-bogliq-qanday", label: "Which channel gift scams should you watch out for?" },
          { href: "#sovgadan-tashqari-kanalni-yana-qanday", label: "Other ways to support a channel besides gifts" },
        ]}
      />
      <h2 id="telegram-kanalga-sovga-yuborsa-boladimi">Can you send a gift to a Telegram channel, and where does it show up?</h2>
      <p>Telegram announced gifts to channels on January 24, 2025, on its <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">official blog</a>. A subscriber can congratulate a channel with a gift, and the gift is displayed on the channel’s profile.</p>
      <p>There are two sides to this:</p>
      <ul>
        <li><b>The subscriber</b> picks a gift, chooses any extras and pays in Stars.</li>
        <li><b>The channel owner and admins</b> see the gift when it arrives, display it on the profile and sort it. If it’s a collectible gift, they can also transfer it or move it to the blockchain.</li>
      </ul>
      <p>The first part of this guide is for the sender. The second part is for the channel owner. To send a regular gift to a friend or relative, see the guide <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">How to send Telegram Gifts</Link>.</p>
      <h2 id="kanalga-sovga-qanday-yuboriladi-obunachi">How to send a gift to a channel: steps for subscribers</h2>
      <p>Say the recipe channel you read every day just turned 5 and you want to congratulate it. Here’s how:</p>
      <Steps>
        <Step title={"Open the channel"}>go to a channel you’re subscribed to or any public channel.</Step>
        <Step title={"Find the 🎁 icon"}>Telegram says it sits in the bottom corner of the channel.</Step>
        <Step title={"Pick a gift"}>the app shows the price of each gift in Stars. Official sources don’t publish a full price list, so we don’t give prices here.</Step>
        <Step title={"Choose the extras"}>you can add a short message, upgrade the gift or hide your name. There’s no official user guide showing where these options are, so look through the screen that opens after you pick a gift.</Step>
        <Step title={"Pay with Stars"}>if you don’t have enough, see the section below on topping up in soums.</Step>
        <Step title={"Check the result"}>the channel decides whether the gift goes on its profile. If you don’t see it right away, that doesn’t mean something went wrong.</Step>
      </Steps>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="sovga-tugmasi-korinmasa-nima-sabab">Why might the gift button be missing?</h2>
      <p>Some channels don’t show the 🎁 icon at all. Official sources give two possible reasons:</p>
      <ul>
        <li><b>Gradual rollout.</b> Telegram said from the start that channel gifts would roll out gradually and might not work everywhere at once.</li>
        <li><b>The channel isn’t taking gifts right now.</b> According to the <a href={"https://core.telegram.org/constructor/channelFull"} target="_blank" rel="noopener noreferrer">API documentation</a>, you can only send a gift to a channel whose settings have gift receiving turned on.</li>
      </ul>
      <p>The official docs don’t say which setting in the app a channel owner uses to turn this on or off, so we won’t guess.</p>
      <p>What you can try:</p>
      <ul>
        <li>Update Telegram to the latest version.</li>
        <li>Look for the button on another channel. If it’s there, your app is fine.</li>
        <li>Ask the channel admin whether gifts are turned on.</li>
      </ul>
      <p>If someone writes to you saying “the button is broken, send the gift to this bot instead,” stop. The security section below covers messages like this.</p>
      <h2 id="yuborishdan-oldin-uchta-qaror-upgrade">Three choices before you send: upgrade, name and message</h2>
      <p>You make three choices before you pay. Each one affects what the channel can do with the gift later, or who can see that it came from you.</p>
      <CompareTable
        headers={["Choice", "What it does", "Who pays", "What to know"]}
        rows={[
          ["Upgrade", "Lets the channel turn the gift into a unique collectible", "The sender, in Stars", "The recipient pays nothing to convert it. The app shows the upgrade price"],
          ["Hide name", "If the channel displays the gift on its profile, other people won’t see your name", "—", "The recipient still sees who sent it"],
          ["Message", "Adds a note to the gift", "—", "Optional. For example: “Thanks for 5 years of great recipes!”"],
        ]}
      />
      <p>An <b>upgrade</b> is especially useful when a channel is collecting gifts for a project or a charity. Here’s how a regular gift compares with a collectible one:</p>
      <CompareTable
        headers={["Feature", "Regular gift", "Collectible gift"]}
        rows={[
          ["Shown on the channel profile", "Yes", "Yes"],
          ["Can be transferred to another user or channel", "No, the API returns an error", "Yes, sometimes after a waiting period"],
          ["Can become an NFT on the TON blockchain", "No", "Yes"],
          ["Can be used as a unique emoji status", "No", "Yes, on a personal profile"],
          ["Has its own link", "No", "Yes, each one has its own link"],
        ]}
      />
      <p><b>Hiding your name</b> doesn’t make you fully anonymous. The <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts documentation</a> says your name is hidden on the profile, but the recipient still sees who sent the gift. It doesn’t say whether, inside a channel, that means the owner or a particular admin.</p>
      <p><b>The message</b> is optional. Keep it short: say what you’re thankful for or what occasion you’re marking.</p>
      <h2 id="sovga-uchun-stars-yetmasa-somda">Not enough Stars for the gift? How to top up in soums</h2>
      <p>Gifts to channels are paid for in Stars. You can top up your balance in soums through the StarsPaymee bot. All it needs is your @username. It never asks for your password, an SMS code or access to your account. StarsPaymee is an independent service and doesn’t claim any partnership with Telegram.</p>
      <p>The price per Star depends on how you pay:</p>
      <ul>
        <li>by transfer to a UzCard or HUMO card, or from your bot balance: {som(STARS_PER_UNIT_UZS, "en")};</li>
        <li>through Click, Payme, Uzum or Paynet: {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
      </ul>
      <p>The minimum order is 50 Stars.</p>
      <Steps>
        <Step title={"Check the price in Telegram"}>first open the 🎁 screen on the channel and note the gift price, plus the upgrade price if you want one.</Step>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</Step>
        <Step title={"Choose Stars"}>start a Stars order.</Step>
        <Step title={"Enter your @username"}>you’re sending the gift yourself, so enter your own username.</Step>
        <Step title={"Choose the amount and payment method"}>pick enough Stars for the gift, then pay with Click, Payme, Uzum, Paynet, a card transfer or your bot balance.</Step>
        <Step title={"Check your balance"}>Stars usually arrive automatically within a few seconds. Then go back to the channel and send the gift.</Step>
      </Steps>
      <p>You don’t need an international card, a crypto wallet or a VPN. If you have cash, you can also pay at a Paynet terminal.</p>
      <p>Check in the bot itself whether it can send a gift straight to a channel. This article doesn’t confirm that. The most reliable way is to buy Stars and then send the gift inside Telegram with the button on the channel page. Prices are on the <Link href="/stars">/stars</Link> page, and the full process is in the <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Stars</Link>.</p>
      <h2 id="kanal-egasi-kelgan-sovgalarni-qayerda">Where can a channel owner see incoming gifts, and how are they sorted?</h2>
      <p>Gifts sent to a channel end up in the <b>Gifts</b> tab on the channel’s profile. These tools help once you have a lot of them:</p>
      <CompareTable
        headers={["Feature", "Where", "Why it helps"]}
        rows={[
          ["Filters: value, collectible status, date received, limited or unlimited collection", "The channel’s Gifts tab", "Quickly find the most valuable or collectible gifts"],
          ["Notifications", "Gifts tab, turned on by admins", "Don’t miss a new gift"],
          ["Pinning", "Top of the channel profile", "Feature your most valuable or first gift"],
          ["Gift collections", "A separate feature described in the API. This article doesn’t confirm where it is in the app", "Group several collectible gifts together"],
        ]}
      />
      <p>To keep track of new gifts, an admin opens the Gifts tab on the channel profile and turns on notifications there. To learn how to pin a gift to the top of a profile, see <Link href="/blog/telegram-sovgani-profilga-qoyish">putting a gift on your profile</Link>.</p>
      <h3>Who manages the gifts</h3>
      <p>The API documentation says only admins with the right to post messages (post_messages) can use the methods for managing channel gifts. Only those admins see the total number of gifts the channel has received. Everyone else sees only the number of gifts displayed on the profile.</p>
      <p>In practice, this means the right to post goes together with the ability to manage gifts. Before you give it to a new admin, ask yourself whether you trust them with the channel’s gifts.</p>
      <h2 id="kanal-sovgani-otkazishi-blokcheynga-chiqarishi">Can a channel transfer a gift, move it to the blockchain or convert it to Stars?</h2>
      <p>Telegram’s blog says channel owners can transfer gifts to other users or channels, or auction them on the TON blockchain. In practice, there are conditions.</p>
      <h3>Transferring</h3>
      <p>The <a href={"https://core.telegram.org/method/payments.transferStarGift"} target="_blank" rel="noopener noreferrer">transfer method documentation</a> says:</p>
      <ul>
        <li>only collectible gifts can be transferred. If you try with a regular gift, you get an error;</li>
        <li>this method only works when the transfer is free;</li>
        <li>sometimes you can’t transfer a gift right away, and you’re shown how long to wait.</li>
      </ul>
      <p>So if a channel might want to pass a gift on later, the gift has to be a collectible first. The steps are in <Link href="/blog/nft-sovgani-dostga-otkazish-tartibi">how to transfer an NFT gift</Link>.</p>
      <h3>Moving to the blockchain</h3>
      <p>A collectible gift can be turned into an NFT on the TON blockchain. Once it’s in a TON wallet, you can also use it with outside services. On a personal profile, the path is My Profile &gt; Gifts &gt; gift &gt; Transfer &gt; Send via Blockchain. The official blog doesn’t say which menu path works for channels or explain how auctions work. Check the options in your app before you start.</p>
      <h3>Converting to Stars</h3>
      <p>The documentation says that converting a gift to Stars destroys it permanently. You can’t undo this. If the gifts were collected for charity, tell the people who sent them before you do it.</p>
      <h3>Emoji status</h3>
      <p>A gift that has been upgraded to a collectible can be used as a unique emoji status. On a personal profile, go to My Profile &gt; Gifts &gt; gift &gt; Wear. Official sources don’t confirm that this works for channels.</p>
      <h2 id="xayriya-yoki-loyiha-uchun-sovga">How do you run an open gift drive for a charity or project?</h2>
      <p>Telegram itself says creators and charities can use this feature to raise funds for special projects and important causes. Subscribers will trust the drive more if you run it openly:</p>
      <ul>
        <li><b>State a clear goal.</b> Instead of “Support the channel,” write “For a studio microphone” or “Winter clothes for the orphanage.”</li>
        <li><b>Set a deadline.</b> For example: “The drive runs until the end of the month.” Subscribers then know when to expect results.</li>
        <li><b>Mention upgrades up front.</b> If the channel plans to transfer gifts or move them to the blockchain, ask subscribers to send them upgraded.</li>
        <li><b>Report back.</b> Use the date filter in the Gifts tab to pull up the gifts that came in during the drive.</li>
        <li><b>Thank people the right way.</b> In your posts, only name people who didn’t hide their names. Respect the choice of those who did.</li>
      </ul>
      <p>It helps to tie a “gift day” to a date that matters to the channel: its anniversary, the day it hit 10 000 subscribers or the end of the year.</p>
      <p>Nobody can guarantee that a gift will be worth more in the future. Don’t promise subscribers that “the gift will go up in value.”</p>
      <h2 id="kanal-sovgasi-bilan-bogliq-qanday">Which channel gift scams should you watch out for?</h2>
      <Notice label={"Important"}>A real gift is sent only through the 🎁 button on the channel page. Be suspicious of messages from an “admin” telling you to “send the gift to this bot” or “connect your wallet.”</Notice>
      <ul>
        <li>Every collectible gift has its own link, which points to the nft section of Telegram’s own domain. Check any “gift link” that looks different before you open it. Here’s how: <Link href="/blog/telegram-gift-havolasini-tekshirish">checking a gift link</Link>.</li>
        <li>An honest Stars seller never asks for your password, SMS code or recovery phrase. StarsPaymee only asks for your @username.</li>
        <li>For channel owners: don’t hand your account or admin rights to a stranger who offers to “help” you transfer gifts or move them to the blockchain.</li>
        <li>Give the right to post only to admins who need it, because it comes with the ability to manage gifts.</li>
      </ul>
      <p>If you have a question about a Stars or gift order, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="sovgadan-tashqari-kanalni-yana-qanday">Other ways to support a channel besides gifts</h2>
      <CompareTable
        headers={["Option", "What it does", "Best for"]}
        rows={[
          ["Gift", "Shows up on the channel profile. If upgraded, it can become a collectible", "A one-off occasion: an anniversary or a holiday"],
          ["Star reaction", "A paid reaction on a post. Works only if the channel has turned it on", "Regularly supporting posts you like"],
          ["Boost", "Boosts the channel. Boost rental is available in the bot", "Helping the channel unlock extra features"],
          ["Premium gift", "Goes to the channel owner personally, through their @username", "Thanking the creator directly"],
        ]}
      />
      <p>To learn how Star reactions work, see <Link href="/blog/telegram-star-reaksiyalari">Star reactions</Link>. Channel boost rental is available in <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</p>
      <p>If you give Premium to the channel’s creator, the price is the same for every payment method: 3 months for {som(premium(3), "en")}, 6 months for {som(premium(6), "en")}, 12 months for {som(premium(12), "en")}. If the creator already has an active Premium subscription, the bot won’t open a new order, because the new term isn’t added on top of an active one. Plans are on the <Link href="/premium">/premium</Link> page, and gifts and the NFT Market are on the <Link href="/gifts">/gifts</Link> page.</p>
      <p>For a one-off occasion, send a gift. To support posts regularly, use reactions. To thank the creator personally, give them Premium.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/channelFull", label: "channelFull" },
          { href: "https://core.telegram.org/method/payments.transferStarGift", label: "payments.transferStarGift" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I send a gift to any Telegram channel?", answer: "No. You can only send gifts to channels that accept them, and Telegram rolled out the feature gradually. If a channel has no 🎁 button, try asking its admin." },
  { question: "If I send a gift to a channel, will other subscribers see my name?", answer: "If you don’t choose to hide your name, it may be visible when the channel displays the gift on its profile. If you do hide it, other people won’t see it on the profile." },
  { question: "If I hide my name, will the channel admin still know it was me?", answer: "Yes. The receiving side still sees who sent the gift. The documentation doesn’t say whether that means the owner or a specific admin." },
  { question: "Does the channel have to pay anything for an upgraded gift?", answer: "No. The sender pays for the upgrade in Stars, and the channel pays nothing to turn the gift into a collectible." },
  { question: "Can a channel pass a regular gift on to someone else?", answer: "Not according to the Telegram API. Only collectible gifts can be transferred. If you want the channel to have that option, upgrade the gift before you send it." },
  { question: "I sent a gift but it’s not on the channel’s profile. What happened?", answer: "The channel decides whether to display gifts on its profile, so not seeing it doesn’t mean something went wrong. If the Stars were taken from your balance, ask the admin to confirm the gift arrived." },
  { question: "Why can’t a channel admin manage gifts?", answer: "Usually it’s about permissions. The API docs say gift management is limited to admins who can post messages. Admins without that right only see how many gifts are displayed on the profile." },
  { question: "Where does a gift go when a channel converts it to Stars?", answer: "Nowhere. A converted gift is permanently destroyed and can’t be brought back. For gifts collected for charity, it’s best to tell the senders before doing this." },
  { question: "How do I buy Stars in soums to send a gift to a channel?", answer: `Start a Stars order in @StarsPaymee_bot and enter your own @username. One Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card transfer or from your bot balance, or ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. The minimum order is 50 Stars.` },
  { question: "Can I get notified when a channel receives a gift?", answer: "Yes. An admin can turn on notifications in the Gifts tab on the channel profile so new gifts don’t go unnoticed." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  keywords: ["telegram kanalga sovg'a yuborish","telegram kanalga gift yuborish","kanalga sovg'a qanday yuboriladi","telegram kanal sovg'alari","kanal sovg'asini upgrade qilish","sovg'ada ismni yashirish telegram","kanal gifts tabi","как отправить подарок каналу в телеграм","подарки каналам telegram","подарок каналу telegram анонимно","улучшить подарок перед отправкой каналу"],
  howToSteps: [
    { name: "Kanalni oching", text: "obuna bo‘lgan yoki ochiq kanal sahifasiga kiring." },
    { name: "🎁 belgisini toping", text: "Telegram ta’rifiga ko‘ra, u kanalning pastki burchagida turadi." },
    { name: "Sovg‘ani tanlang", text: "har bir sovg‘aning Stars’dagi narxi ilovaning o‘zida ko‘rsatiladi. Rasmiy manbada aniq narxlar ro‘yxati yo‘q, shuning uchun ularni bu yerda keltirmaymiz." },
    { name: "Qo‘shimchalarni belgilang", text: "xohlasangiz qisqa xabar yozing, sovg‘ani upgrade qiling yoki ismingizni yashiring. Bu tugmalar ilovaning qayerida turishi haqida rasmiy foydalanuvchi qo‘llanmasi yo‘q, shuning uchun sovg‘ani tanlagandan keyin ochiladigan oynani diqqat bilan ko‘zdan kechiring." },
    { name: "Stars bilan to‘lang", text: "balans yetmasa, pastdagi so‘mda to‘ldirish bo‘limiga o‘ting." },
    { name: "Natijani tekshiring", text: "sovg‘ani profilda ko‘rsatish-ko‘rsatmaslikni kanal hal qiladi. Darhol chiqmasa, bu xato degani emas." },
  ],
  locales: {
    uz: {
      title: "Telegram kanalga sovg‘a yuborish: tugma qayerda, ismni yashirish va upgrade",
      excerpt: "Kanalga sovg‘a kanal sahifasining pastki burchagidagi 🎁 tugmasi bilan Stars’da yuboriladi. Ismni yashirish, upgrade va kanal egasi sovg‘alarni qanday boshqarishi ham shu yerda.",
      metaTitle: "Telegram kanalga sovg‘a yuborish",
      metaDescription: "Kanalga sovg‘a kanal sahifasining pastki burchagidagi 🎁 tugmasi bilan Stars’da yuboriladi. Ismni yashirish, upgrade va kanal egasi sovg‘alarni qanday…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как отправить подарок каналу в Telegram: кнопка, скрытие имени и улучшение",
      excerpt: "Подарок каналу отправляют за Stars через кнопку 🎁 в нижнем углу страницы канала. В статье: как скрыть имя, зачем улучшать подарок и как владелец канала управляет подарками.",
      metaTitle: "Как отправить подарок каналу в Telegram",
      metaDescription: "Подарок каналу отправляют за Stars через кнопку 🎁 в нижнем углу страницы канала. В статье: как скрыть имя, зачем улучшать подарок и как владелец канала…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "How to send a gift to a Telegram channel: button, hidden name, upgrade",
      excerpt: "This guide covers finding the 🎁 button on a channel, the upgrade, hidden-name and message options, buying Stars in soums, and what channel owners can do with the gifts they get.",
      metaTitle: "How to send a gift to a Telegram channel",
      metaDescription: "This guide covers finding the 🎁 button on a channel, the upgrade, hidden-name and message options, buying Stars in soums, and what channel owners can do with…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
