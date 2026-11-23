import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "bot-mini-ilova-stars-obuna-biznes-model";

/**
 * Bot uchun Stars obuna: qanday tarif, narx va muddat qo‘yiladi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-23): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Bot yoki mini ilova egasi Telegram Stars obunasi bilan oylik daromad qilmoqchi: «bot uchun Stars obuna» deb qidirib, qanday tarif, narx va muddat qo'yishni, obunachini qanday ushlab qolishni va ishlangan Stars bilan nima qilishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-23):
 *   https://core.telegram.org/bots/payments-stars
 *   https://telegram.org/tos/bot-developers
 *   https://core.telegram.org/bots/api
 *   https://telegram.org/blog/fullscreen-miniapps-and-more
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Bot yoki mini ilovadagi Stars obunasi har 30 kunda takrorlanadigan to‘lov. Foydalanuvchi birinchi to‘lovda obunaga rozi bo‘ladi, keyingi to‘lovlar o‘zi takrorlanadi. Daromad barqaror bo‘lishi uchun obunaga har oy yangilanadigan qiymat qo‘ying, tariflarni alohida havolalarga ajrating va tugash sanasini kuzatib boring. Ishlangan Stars’ni reklamaga sarflang yoki Fragment orqali mukofotga almashtiring.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#bot-yoki-mini-ilovada-stars", label: "Bot yoki mini ilovada Stars obunasi qanday ishlaydi va nega aynan Stars?" },
          { href: "#qaysi-xizmat-obunaga-mos-qaysi", label: "Qaysi xizmat obunaga mos, qaysi biri bir martalik to‘lovda qolgani ma’qul?" },
          { href: "#bot-api-obuna-uchun-nimani", label: "Bot API obuna uchun nimani qat’iy belgilagan?" },
          { href: "#tariflarni-qanday-qurish-kerak-bir", label: "Tariflarni qanday qurish kerak: bir nechta daraja va alohida havolalar" },
          { href: "#obuna-narxini-qanday-belgilash-obunachi", label: "Obuna narxini qanday belgilash: obunachi nima to‘laydi, siz nima olasiz?" },
          { href: "#obunachini-qanday-ushlab-qolish-mumkin", label: "Obunachini qanday ushlab qolish mumkin?" },
          { href: "#obuna-bekor-qilinsa-yoki-pul", label: "Obuna bekor qilinsa yoki pul qaytarish so‘ralsa, bot nima qila oladi?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "Ishlangan Stars bilan nima qilish mumkin va qachon ishlatsa bo‘ladi?" },
          { href: "#obunachilaringiz-starsni-somda-qayerdan-oladi", label: "Obunachilaringiz Stars’ni so‘mda qayerdan oladi?" },
          { href: "#stars-obunasini-yolga-qoyishda-qanday", label: "Stars obunasini yo‘lga qo‘yishda qanday xatolar ko‘p uchraydi?" },
        ]}
      />
      <h2 id="bot-yoki-mini-ilovada-stars">Bot yoki mini ilovada Stars obunasi qanday ishlaydi va nega aynan Stars?</h2>
      <p>Bot yoki mini ilova raqamli tovar yoki xizmat sotsa, to‘lov faqat Telegram Stars bilan olinadi. Bu talab <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">Stars to‘lovlari sahifasida</a> ham, <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">dasturchilar shartlarining</a> 6.2-bo‘limida ham yozilgan. Qoida tafsilotlari va uni buzish oqibatlari <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">«faqat Stars» qoidasi tahlilida</Link> yoritilgan. Bu yerda boshqa savol ko‘riladi: shu qoida doirasida oylik daromadni qanday qurish mumkin.</p>
      <p>Obunada har oy yangi sotuv qilish shart emas — mavjud obunachini saqlab qolish kifoya. Shuning uchun asosiy ish to‘lov sahifasida emas, obunachiga har oy beriladigan qiymatda.</p>
      <p>Mini ilova uchun ham model o‘zgarmaydi. Telegram’ning <a href={"https://telegram.org/blog/fullscreen-miniapps-and-more"} target="_blank" rel="noopener noreferrer">2024-yil noyabrdagi blog yozuviga</a> ko‘ra, dasturchilar mini ilovaga ham Stars bilan obuna taklif qila oladi. Quyidagi qarorlar ikkala formatga ham tegishli.</p>
      <p>Bu kod qo‘llanmasi emas. Invoice yaratish, webhook va to‘lovni tasdiqlash <Link href="/blog/botga-tolov-api-ulash-qollanma">botga to‘lov API ulash</Link> hamda <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API nima</Link> maqolalarida yozilgan.</p>
      <h2 id="qaysi-xizmat-obunaga-mos-qaysi">Qaysi xizmat obunaga mos, qaysi biri bir martalik to‘lovda qolgani ma’qul?</h2>
      <p>Bu bo‘lim rasmiy qoida emas, muallifning tahlili. Mezon bitta: obunachi har oy «nega yana to‘layapman?» degan savolga javob topa olishi kerak. Har oy yangilanadigan qiymat bo‘lmasa, obuna tez bekor qilinadi.</p>
      <CompareTable
        headers={["Xizmat turi", "Obunaga mosmi", "Sababi"]}
        rows={[
          ["AI so‘rovlar paketi", "Mos", "Limit har oy yangilanadi, foydalanuvchi undan yana foydalanadi"],
          ["Yangi kontent: darslar, signallar, tahlillar", "Mos", "Har oy yangi material chiqadi"],
          ["Oshirilgan limitlar: fayl hajmi, so‘rovlar soni", "Mos", "Faol foydalanuvchi farqni har kuni sezadi"],
          ["Reklamasiz rejim", "Bot tez-tez ishlatilsa, mos", "Qiymati botdan qanchalik ko‘p foydalanilishiga bog‘liq"],
          ["Bitta fayl konvertatsiyasi", "Kam mos", "Ish bir marta bajarilib, tugaydi"],
          ["Bitta hisobot yoki shablon", "Kam mos", "Olgandan keyin qaytishga sabab qolmaydi"],
          ["Bir marta ochiladigan doimiy funksiya", "Kam mos", "Foydalanuvchi bir marta to‘lashni kutadi"],
        ]}
      />
      <p>Bir martalik foydani obuna qilib sotsangiz, zarari tez ko‘rinadi. Foydalanuvchi kerakli fayl yoki hisobotni oladi va birinchi davr tugamasidan obunani bekor qiladi. Sizga bitta to‘lov qoladi, bot haqida esa «pulni o‘zi yechib oladi» degan yomon taassurot.</p>
      <p>Ko‘p botlarga aralash usul to‘g‘ri keladi. Asosiy qiymat, masalan, oylik AI so‘rovlar limiti obunaga kiradi. Limiti tugaganlarga qo‘shimcha paket alohida, bir martalik invoice bilan sotiladi. Shunda obuna arzonligicha qoladi, botdan ko‘p foydalanadigan odam esa ko‘proq to‘laydi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="bot-api-obuna-uchun-nimani">Bot API obuna uchun nimani qat’iy belgilagan?</h2>
      <p>Tarif tuzishdan oldin texnik chegaralarni bilib oling: ular biznes modelni ham cheklaydi. Jadvaldagi ma’lumotlar <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjatidan</a> olingan.</p>
      <CompareTable
        headers={["Parametr yoki maydon", "Nima qiladi", "Biznes uchun ma’nosi"]}
        rows={[
          ["subscription_period", "createInvoiceLink’da obuna davrini belgilaydi", "Bu parametr bo‘lsa, valyuta faqat XTR, ya’ni Stars bo‘ladi"],
          ["Davr qiymati", "Hozircha har doim 2 592 000 soniya, ya’ni 30 kun", "7 kunlik sinov yoki yillik obunani bu usulda qilib bo‘lmaydi"],
          ["is_first_recurring", "To‘lov obunaning birinchi to‘lovi ekanini bildiradi", "Yangi obunachini qayta to‘laganlardan ajratasiz"],
          ["is_recurring", "To‘lov obuna uchun takroriy to‘lov ekanini bildiradi", "Qancha obunachi qayta to‘layotganini sanaysiz"],
          ["subscription_expiration_date", "Obuna tugash sanasi, Unix vaqtida; faqat takroriy to‘lovlarda keladi", "Eslatmalarni shu sanaga qarab rejalashtirasiz"],
          ["TransactionPartnerUser", "Pullik obuna muddatini faqat invoice_payment turidagi tranzaksiyalarda ko‘rsatadi", "Hisobotda obuna to‘lovlarini boshqa tushumlardan ajratasiz"],
          ["editUserStarSubscription", "Obuna uzaytirilishini bekor qiladi yoki qayta yoqadi; user_id va telegram_payment_charge_id bilan ishlaydi", "Har bir to‘lov ID’sini saqlab qo‘yish shart"],
          ["BotSubscriptionUpdated", "Bot API 10.2 (2026-yil 14-iyul) bilan qo‘shilgan yangilanish: foydalanuvchi obunasidagi o‘zgarish haqida", "Obuna holati o‘zgarganini bot alohida yangilanish orqali biladi"],
        ]}
      />
      <p>Biznes uchun eng katta cheklov — davr. Obuna hozircha faqat 30 kunlik, shuning uchun haftalik, choraklik yoki yillik tariflarni boshqa yo‘l bilan qurishga to‘g‘ri keladi.</p>
      <p>Obuna narxining yuqori chegarasi bu maqolada aniq raqam bilan tasdiqlanmagan. Tarif narxini qo‘yishdan oldin createInvoiceLink tavsifidagi amaldagi qoidani o‘zingiz tekshiring.</p>
      <h2 id="tariflarni-qanday-qurish-kerak-bir">Tariflarni qanday qurish kerak: bir nechta daraja va alohida havolalar</h2>
      <p>Hujjatda bitta botda bir vaqtning o‘zida istalgancha obuna faol bo‘lishi mumkinligi yozilgan. Lekin bitta foydalanuvchi bitta botda bir vaqtda bir nechta obunaga ega bo‘la oladimi, bu maqolada aniq tasdiqlanmagan. Shuning uchun xavfsizroq yo‘lni tanlang: har bir foydalanuvchida bitta faol daraja bo‘lsin.</p>
      <Steps>
        <Step title={"Darajalarni aniqlang"}>ular 2–3 tadan oshmasin. Har birining oylik qiymati bitta gapda tushunarli bo‘lsin: «oyiga N ta so‘rov», «hamma darslar ochiq», «reklamasiz».</Step>
        <Step title={"Har bir daraja uchun alohida havola yarating"}>createInvoiceLink orqali, XTR valyutasi va 30 kunlik davr bilan. Havolalar alohida bo‘lsa, statistikani har bir daraja bo‘yicha yuritish oson.</Step>
        <Step title={"Daraja almashtirish tartibini oldindan belgilang"}>yuqori darajaga o‘tayotgan foydalanuvchining eski obunasini editUserStarSubscription bilan to‘xtating va unga yangi daraja havolasini yuboring. Eski obuna qachongacha ishlashini hujjatdan tekshiring va foydalanuvchiga aniq yozib bering.</Step>
        <Step title={"Uzoq muddatli paketni bir martalik to‘lov qiling"}>«3 oylik paket» yoki «yillik kirish»ni oddiy invoice bilan soting, muddatini esa bot o‘zi hisoblab borsin.</Step>
        <Step title={"Tariflar sahifasini bot menyusiga joylang"}>unda Stars’dagi narx, har bir darajaga nimalar kirishi va imkoniyatlar qachon yangilanishi ko‘rsatilsin. Narx jadvalini katalog ko‘rinishida berish usuli <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">bot rich xabarida Stars to‘lov</Link> maqolasida bor.</Step>
      </Steps>
      <h2 id="obuna-narxini-qanday-belgilash-obunachi">Obuna narxini qanday belgilash: obunachi nima to‘laydi, siz nima olasiz?</h2>
      <p>Narxga ikki tomondan qarang. Obunachi Stars’ni so‘mga sotib oladi, siz esa yig‘ilgan Stars’ni mukofotga almashtirasiz. <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Dasturchi shartlariga</a> ko‘ra, har bir Star uchun 0,013 USD ekvivalentida mukofot olish mumkin.</p>
      <p>O‘zbekistondagi obunachi Stars’ni @StarsPaymee_bot orqali so‘mga olishi mumkin. U yerda 1 Star karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan to‘lansa {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi.</p>
      <p>Quyidagi misol narx tavsiyasi emas, faqat hisoblash usulini ko‘rsatadi. Obuna oyiga 100 Stars bo‘lsin:</p>
      <CompareTable
        headers={["Ko‘rsatkich", "Hisob"]}
        rows={[
          ["Obunachining oylik xarajati, karta o‘tkazmasi bilan", `100 × ${som(STARS_PER_UNIT_UZS, "uz")}`],
          ["Obunachining oylik xarajati, Click, Payme, Uzum yoki Paynet bilan", `100 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Sizga tushadigan mukofot", "100 × 0,013 = 1,3 USD ekvivalenti"],
          ["Mukofotga yechish mumkin bo‘ladigan payt", "Stars kelgandan keyin 21 kungacha kutish bo‘lishi mumkin"],
        ]}
      />
      <p>Hisobdan chiqadigan amaliy xulosalar:</p>
      <ul>
        <li>Obunachining so‘mdagi xarajatini shu soha xizmatlarining bir martalik narxlari bilan solishtiring. Obuna qimmatroq ko‘rinsa, har oy qo‘shimcha nima berilishini aniq yozing.</li>
        <li>StarsPaymee’da eng kam buyurtma 50 Stars. Obuna narxi bundan arzon bo‘lsa, obunachi baribir kamida 50 Stars oladi va ortgani balansida keyingi oyga qoladi. Buni tarif sahifasida yozib qo‘ysangiz, foydalanuvchi chalg‘imaydi.</li>
        <li>Daromadni rejalashtirganda kutish muddatini hisobga oling: shu oyda kelgan Stars shu oyning o‘zida pulga aylanmasligi mumkin.</li>
      </ul>
      <h2 id="obunachini-qanday-ushlab-qolish-mumkin">Obunachini qanday ushlab qolish mumkin?</h2>
      <p>Quyidagi qadamlarning bir qismi rasmiy talab, qolgani muallifning tavsiyasi — har birida ko‘rsatilgan.</p>
      <Steps>
        <Step title={"Birinchi to‘lovni alohida kuzating"}>is_first_recurring belgisi yangi obunachini ko‘rsatadi. Unga salomlashuv xabari va qisqa yo‘riqnoma yuboring: obuna nimalarni ochdi va ularni qayerdan topish mumkin (tavsiya).</Step>
        <Step title={"Tugash sanasini saqlab qo‘ying"}>subscription_expiration_date asosida muddat tugashidan bir necha kun oldin eslatma yuboring. Bu rasmiy talab emas, lekin to‘lov kutilmaganda yechilgandek tuyulmasligi uchun foydali (tavsiya).</Step>
        <Step title={"Obuna holatidagi o‘zgarishni kuzating"}>BotSubscriptionUpdated yangilanishi kelganda obunachiga bitta savol yuboring: nima yoqmadi yoki nima yetishmadi (tavsiya).</Step>
        <Step title={"Qaytish yo‘lini ochiq qoldiring"}>obunani bot bekor qilgan bo‘lsa, editUserStarSubscription’ni is_canceled=False bilan chaqirib, foydalanuvchiga uni qayta yoqish imkonini berasiz. Foydalanuvchi o‘zi bekor qilgan obuna uchun alohida rasmiy qoida topilmadi, shuning uchun unga tarifning yangi havolasini taklif qiling.</Step>
        <Step title={"/paysupport’ga tayyor turing"}>bot bu buyruqqa javob bera olishi va to‘lovga oid murojaatlarni ko‘rib chiqishi shart (rasmiy talab). Javob berish muddati hujjatlarda topilmadi, imkon qadar tez javob bering.</Step>
        <Step title={"Har oy nima yangilanganini ko‘rsating"}>oy davomida qo‘shilgan imkoniyatlar ro‘yxatini yuboring, obunachi nimaga to‘layotganini ko‘rib tursin (tavsiya).</Step>
      </Steps>
      <h2 id="obuna-bekor-qilinsa-yoki-pul">Obuna bekor qilinsa yoki pul qaytarish so‘ralsa, bot nima qila oladi?</h2>
      <p>Bot obunaning uzaytirilishini bekor qilishi ham, qayta yoqishi ham mumkin. Buning uchun foydalanuvchi ID’si va to‘lovning telegram_payment_charge_id identifikatori kerak. Har bir obuna to‘lovini ID’si bilan bazaga yozib boring, aks holda keyin obunani tahrirlay olmaysiz.</p>
      <p>Raqamli xizmat uchun olingan to‘lov refundStarPayment metodi bilan qaytariladi. Dasturchi shartlariga ko‘ra, bot Stars’ni xaridorga tegishli Bot API metodi orqali jarimasiz va to‘liq qaytara oladi. Demak, nizo chiqqanda «qaytarib bo‘lmaydi» degan javob to‘g‘ri emas: qaytarish yo‘li bor.</p>
      <Notice label={"Muhim"}>Bot bekor qilgan obuna joriy davr oxirigacha ishlab turishi bu maqolada tasdiqlanmagan. Foydalanuvchiga «oy oxirigacha foydalanaverasiz» deb va’da berishdan oldin Bot API’dagi editUserStarSubscription tavsifini tekshiring.</Notice>
      <Notice label={"Muhim"}>Telegram balansdagi Stars’ni vaqtincha ushlab qolish yoki butunlay yechib olish huquqini saqlab qoladi. To‘lov murojaatlari va shubhali obunalarni e’tiborsiz qoldirmang.</Notice>
      <p>Bot emas, yopiq kanal obunasini sotsangiz, tartib boshqacha. Bu haqda <Link href="/blog/telegram-pullik-kanal-stars-obuna">pullik kanal obunasi</Link> maqolasida yozilgan.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">Ishlangan Stars bilan nima qilish mumkin va qachon ishlatsa bo‘ladi?</h2>
      <p>Obunadan tushgan Stars bot balansida yig‘iladi. Rasmiy hujjatlarda ularni ishlatishning ikki yo‘li ko‘rsatilgan, yana bitta qo‘shimcha daromad manbai bor.</p>
      <CompareTable
        headers={["Yo‘l", "Nima beradi", "Nimaga e’tibor berish kerak"]}
        rows={[
          ["Telegram Ads", "Stars bilan bot yoki mini ilovangizni reklama qilasiz, ya’ni ularni yangi obunachi topishga sarflaysiz", "Kelgan Stars 21 kungacha reklama krediti uchun ishlatib bo‘lmasligi mumkin"],
          ["Fragment orqali mukofot", "Har bir Star uchun 0,013 USD ekvivalenti; mukofotni hozircha Fragment rasmiylashtiradi", "Eng kam yechish miqdori bu maqolada tasdiqlanmagan, Fragment’da tekshiring"],
          ["Bot va mini ilovadagi reklamadan mukofot", "Telegram blogiga ko‘ra dasturchi o‘z bot yoki mini ilovasidagi Telegram Ads’dan ham mukofot olishi mumkin", "Bu obunadan alohida, qo‘shimcha daromad manbai"],
        ]}
      />
      <p>Reklama byudjetini rejalashtirganda 21 kungacha kechikishni hisobga oling: bu oy tushgan Stars’ni darhol reklamaga yo‘naltira olmasligingiz mumkin. Reklamaga Stars sarflash tafsilotlari <Link href="/blog/telegram-ads-stars-sarflash">Telegram Ads’ga Stars sarflash</Link> maqolasida bor.</p>
      <p>Ishlangan Stars’ning amal qilish muddati bu maqolada tasdiqlanmagan. Balansni uzoq vaqt yechmasdan saqlamoqchi bo‘lsangiz, <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">dasturchi shartlarini</a> o‘zingiz o‘qib chiqing.</p>
      <p>StarsPaymee Stars’ni foydalanuvchilardan sotib olmaydi, shuning uchun ishlangan Stars’ni unga sotib bo‘lmaydi. Ular reklama yoki Fragment mukofoti orqali ishlatiladi.</p>
      <h2 id="obunachilaringiz-starsni-somda-qayerdan-oladi">Obunachilaringiz Stars’ni so‘mda qayerdan oladi?</h2>
      <p>Balansida Stars bo‘lmasa, obunachi to‘lay olmaydi. Muallifning tavsiyasi: tariflar sahifasida Stars qayerdan olinishini ham ko‘rsating. Shunda foydalanuvchi to‘lov oynasiga kelib, ortiga qaytib ketmaydi.</p>
      <p>O‘zbekistondagi foydalanuvchilar Stars’ni <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali so‘mda olishi mumkin:</p>
      <ul>
        <li>Faqat @username kerak, parol yoki SMS kod so‘ralmaydi.</li>
        <li>To‘lov so‘mda: Click, Payme, Uzum, Paynet (ilovadan yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</li>
        <li>Xalqaro karta, kripto hamyon yoki VPN kerak emas.</li>
        <li>Buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi.</li>
        <li>Eng kam buyurtma 50 Stars. 1 Star narxi karta o‘tkazmasi yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, onlayn to‘lovda {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>StarsPaymee mustaqil xizmat, Telegram bilan rasmiy aloqasi yo‘q. Buyurtma bo‘yicha savollar <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali qabul qilinadi. Narxlar va to‘lov usullari <Link href="/stars">Stars sahifasida</Link> jamlangan.</p>
      <h2 id="stars-obunasini-yolga-qoyishda-qanday">Stars obunasini yo‘lga qo‘yishda qanday xatolar ko‘p uchraydi?</h2>
      <ul>
        <li><b>Bir martalik foydani oylik obunaga o‘rash.</b> Foydalanuvchi keragini oladi-da, birinchi oydan keyin obunani bekor qiladi (muallif tahlili).</li>
        <li><b>30 kundan boshqa davrni rejalashtirish.</b> Haftalik yoki yillik obuna bu usulda ishlamaydi — uzoq muddatni bir martalik invoice bilan soting.</li>
        <li><b>To‘lov ID’sini saqlamaslik.</b> Usiz obunani tahrirlay olmaysiz va pulni qaytarishda qiynalasiz.</li>
        <li><b>/paysupport buyrug‘ini ulamaslik.</b> Bu dasturchi shartlarini buzish hisoblanadi.</li>
        <li><b>Ishlangan Stars’ni darhol ishlatishga ishonish.</b> Kutish tufayli reklama byudjeti kechikadi.</li>
        <li><b>Raqamli xizmatni Stars’dan boshqa usulda sotish.</b> Bu Telegram qoidasiga zid.</li>
        <li><b>Bekor qilish shartlari haqida noaniq va’dalar.</b> Bot bekor qilgan obuna qachongacha ishlashini hujjatdan tekshirmay, foydalanuvchiga muddat va’da qilmang.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Telegram Stars (Bot Payments for Digital Goods and Services)" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Developer Terms of Service" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API — createInvoiceLink" },
          { href: "https://telegram.org/blog/fullscreen-miniapps-and-more", label: "Mini Apps 2.0: Full-Screen Mode, Home Screen Icons, Geolocation and 10 more features" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Botimda Stars obunasini 7 kunlik yoki yillik qilsam bo‘ladimi?", answer: "Stars obunasi orqali bo‘lmaydi: Bot API hozircha faqat 30 kunlik davrga ruxsat beradi. Sinov haftasi yoki yillik kirishni oddiy invoice bilan sotib, muddatini bot o‘zi hisoblab borishi mumkin." },
  { question: "Bot obunasi uchun qancha Stars narx qo‘yish mumkin, yuqori chegara bormi?", answer: "Yuqori chegaraning aniq raqami bu maqolada tasdiqlanmagan. Narxni qo‘yishdan oldin Bot API’dagi createInvoiceLink tavsifini oching, keyin narx obunachiga so‘mda qanchaga tushishini hisoblab ko‘ring." },
  { question: "Bitta foydalanuvchi botimda ikkita tarifga birdaniga obuna bo‘la oladimi?", answer: "Hujjatda faqat botda istalgancha obuna faol bo‘lishi mumkinligi aytilgan, bitta foydalanuvchi uchun aniq qoida topilmadi. Xavfsizroq yo‘l — har bir foydalanuvchida bitta faol daraja bo‘lishi." },
  { question: "Obunachi bekor qilib keyin qaytmoqchi bo‘lsa nima qilaman?", answer: "Obunani bot bekor qilgan bo‘lsa, editUserStarSubscription’ni is_canceled=False bilan chaqirib, qayta yoqishga ruxsat berasiz. Foydalanuvchi o‘zi bekor qilgan bo‘lsa, unga tarifning yangi havolasini yuboring." },
  { question: "Obuna uchun olgan Stars’ni qachon pulga aylantira olaman?", answer: "Dasturchi shartlariga ko‘ra, kelgan Stars 21 kungacha mukofot yoki reklama krediti uchun yopiq turishi mumkin. Mukofotni hozircha Fragment rasmiylashtiradi." },
  { question: "1 ta Star uchun dasturchi qancha mukofot oladi?", answer: "Shartlarda har bir Star uchun 0,013 USD ekvivalenti ko‘rsatilgan. Masalan, 1 000 Stars uchun 13 USD ekvivalentida mukofot chiqadi." },
  { question: "Obunachi pulini qaytarishni so‘rasa, rad etsam bo‘ladimi?", answer: "Bot /paysupport orqali kelgan to‘lov murojaatlarini ko‘rib chiqishi shart, refundStarPayment esa Stars’ni jarimasiz to‘liq qaytarish imkonini beradi. Telegram balansdagi Stars’ni ushlab qolish huquqini saqlab qolgani uchun murojaatni javobsiz qoldirmang." },
  { question: "Mini ilovada obuna bot obunasidan farq qiladimi?", answer: "Biznes jihatidan farq qilmaydi: Telegram’ning 2024-yil noyabr blogiga ko‘ra, mini ilova ham Stars bilan obuna taklif qila oladi. To‘lovlar bir xil Stars qoidalariga bo‘ysunadi." },
  { question: "Ishlangan Stars’ni StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Ishlangan Stars’ni reklamaga sarflashingiz yoki Fragment orqali mukofotga almashtirishingiz mumkin." },
  { question: "Obunachilarim xalqaro kartasiz Stars’ni qanday oladi?", answer: "@StarsPaymee_bot orqali so‘mda: Click, Payme, Uzum, Paynet yoki UzCard/HUMO kartaga o‘tkazma bilan, faqat @username kerak bo‘ladi. Eng kam buyurtma 50 Stars." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Подписка на Stars в боте или мини-приложении — это платёж, который повторяется каждые 30 дней. Пользователь соглашается на подписку при первой оплате, дальше списания идут сами. Чтобы доход был стабильным, привяжите подписку к ценности, которая обновляется каждый месяц, разведите тарифы по отдельным ссылкам и следите за датой окончания. Заработанные Stars тратьте на рекламу или обменивайте на вознаграждение через Fragment.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#bot-yoki-mini-ilovada-stars", label: "Как работает подписка на Stars в боте или мини-приложении и почему именно Stars?" },
          { href: "#qaysi-xizmat-obunaga-mos-qaysi", label: "Какую услугу продавать по подписке, а какую — разовым платежом?" },
          { href: "#bot-api-obuna-uchun-nimani", label: "Что Bot API жёстко задаёт для подписки?" },
          { href: "#tariflarni-qanday-qurish-kerak-bir", label: "Как выстроить тарифы: несколько уровней и отдельные ссылки" },
          { href: "#obuna-narxini-qanday-belgilash-obunachi", label: "Как назначить цену подписки: что платит подписчик и что получаете вы?" },
          { href: "#obunachini-qanday-ushlab-qolish-mumkin", label: "Как удержать подписчика?" },
          { href: "#obuna-bekor-qilinsa-yoki-pul", label: "Что бот может сделать, если подписку отменили или просят вернуть деньги?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "Что делать с заработанными Stars и когда их можно использовать?" },
          { href: "#obunachilaringiz-starsni-somda-qayerdan-oladi", label: "Где ваши подписчики купят Stars за сумы?" },
          { href: "#stars-obunasini-yolga-qoyishda-qanday", label: "Какие ошибки чаще всего встречаются при запуске подписки на Stars?" },
        ]}
      />
      <h2 id="bot-yoki-mini-ilovada-stars">Как работает подписка на Stars в боте или мини-приложении и почему именно Stars?</h2>
      <p>Если бот или мини-приложение продаёт цифровой товар или услугу, оплата принимается только в Telegram Stars. Это требование есть и на <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">странице о платежах в Stars</a>, и в разделе 6.2 <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условий для разработчиков</a>. Подробности правила и последствия его нарушения разобраны в <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">статье о правиле «только Stars»</Link>. Здесь вопрос другой: как в рамках этого правила выстроить ежемесячный доход.</p>
      <p>При подписке не нужно каждый месяц продавать заново — достаточно удержать того, кто уже подписан. Поэтому главная работа не на странице оплаты, а в той ценности, которую подписчик получает каждый месяц.</p>
      <p>Для мини-приложений модель та же. Согласно <a href={"https://telegram.org/blog/fullscreen-miniapps-and-more"} target="_blank" rel="noopener noreferrer">записи в блоге Telegram от ноября 2024 года</a>, разработчики могут предлагать подписку за Stars и в мини-приложениях. Всё, что описано ниже, относится к обоим форматам.</p>
      <p>Это не руководство по коду. Создание инвойса, вебхуки и подтверждение оплаты описаны в статьях <Link href="/blog/botga-tolov-api-ulash-qollanma">как подключить платёжный API к боту</Link> и <Link href="/blog/telegram-stars-api-nima-ulanish">что такое Stars API</Link>.</p>
      <h2 id="qaysi-xizmat-obunaga-mos-qaysi">Какую услугу продавать по подписке, а какую — разовым платежом?</h2>
      <p>Этот раздел — не официальное правило, а авторский разбор. Критерий один: каждый месяц у подписчика должен быть ответ на вопрос «за что я снова плачу?». Если ценность не обновляется, подписку быстро отменяют.</p>
      <CompareTable
        headers={["Тип услуги", "Подходит для подписки", "Почему"]}
        rows={[
          ["Пакет AI-запросов", "Подходит", "Лимит обновляется каждый месяц, и пользователь снова им пользуется"],
          ["Новый контент: уроки, сигналы, аналитика", "Подходит", "Каждый месяц выходит свежий материал"],
          ["Повышенные лимиты: размер файлов, число запросов", "Подходит", "Активный пользователь ощущает разницу каждый день"],
          ["Режим без рекламы", "Подходит, если ботом пользуются часто", "Ценность зависит от того, насколько активно используется бот"],
          ["Конвертация одного файла", "Подходит слабо", "Задача решается один раз и заканчивается"],
          ["Один отчёт или шаблон", "Подходит слабо", "Получив его, человеку незачем возвращаться"],
          ["Постоянная функция, которая открывается один раз", "Подходит слабо", "Пользователь ожидает заплатить один раз"],
        ]}
      />
      <p>Если продавать разовую выгоду как подписку, вред проявится быстро. Человек получит нужный файл или отчёт и отменит подписку ещё до конца первого периода. У вас останется один платёж, а у бота — репутация «сам списывает деньги».</p>
      <p>Многим ботам подходит смешанная схема. Основная ценность, например месячный лимит AI-запросов, входит в подписку. Тем, у кого лимит закончился, дополнительный пакет продаётся отдельно, разовым инвойсом. Так подписка остаётся недорогой, а тот, кто пользуется ботом активно, платит больше.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="bot-api-obuna-uchun-nimani">Что Bot API жёстко задаёт для подписки?</h2>
      <p>Прежде чем составлять тарифы, разберитесь с техническими рамками: они ограничивают и бизнес-модель. Данные в таблице взяты из <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документации Bot API</a>.</p>
      <CompareTable
        headers={["Параметр или поле", "Что делает", "Что это значит для бизнеса"]}
        rows={[
          ["subscription_period", "Задаёт период подписки в createInvoiceLink", "Если параметр указан, валюта — только XTR, то есть Stars"],
          ["Значение периода", "Пока всегда 2 592 000 секунд, то есть 30 дней", "Пробную неделю или годовую подписку так не сделать"],
          ["is_first_recurring", "Показывает, что это первый платёж по подписке", "Новых подписчиков можно отделить от продливших"],
          ["is_recurring", "Показывает, что это повторный платёж по подписке", "Можно считать, сколько подписчиков продлевают"],
          ["subscription_expiration_date", "Дата окончания подписки в Unix-времени; приходит только в повторяющихся платежах", "По этой дате планируются напоминания"],
          ["TransactionPartnerUser", "Показывает срок платной подписки только в транзакциях типа invoice_payment", "В отчётах подписочные платежи отделяются от прочих поступлений"],
          ["editUserStarSubscription", "Отменяет или снова включает продление подписки; работает с user_id и telegram_payment_charge_id", "ID каждого платежа обязательно нужно сохранять"],
          ["BotSubscriptionUpdated", "Обновление, добавленное в Bot API 10.2 (14 июля 2026 года): сообщает об изменениях в подписке пользователя", "Бот узнаёт о смене статуса подписки через отдельное обновление"],
        ]}
      />
      <p>Самое серьёзное ограничение для бизнеса — период. Пока подписка бывает только на 30 дней, поэтому недельные, квартальные или годовые тарифы придётся строить иначе.</p>
      <p>Верхний предел цены подписки в этой статье конкретной цифрой не подтверждён. Перед тем как назначать цену, сами проверьте действующее правило в описании createInvoiceLink.</p>
      <h2 id="tariflarni-qanday-qurish-kerak-bir">Как выстроить тарифы: несколько уровней и отдельные ссылки</h2>
      <p>В документации сказано, что у одного бота одновременно может быть активно сколько угодно подписок. А вот может ли один пользователь держать в одном боте несколько подписок сразу, в этой статье точно не подтверждено. Поэтому выбирайте более безопасный вариант: у каждого пользователя — один активный уровень.</p>
      <Steps>
        <Step title={"Определите уровни"}>не больше 2–3. Месячная ценность каждого должна умещаться в одну фразу: «N запросов в месяц», «все уроки открыты», «без рекламы».</Step>
        <Step title={"Создайте отдельную ссылку для каждого уровня"}>через createInvoiceLink, с валютой XTR и периодом 30 дней. Когда ссылки раздельные, статистику легко вести по каждому уровню.</Step>
        <Step title={"Заранее продумайте смену уровня"}>при переходе на уровень выше остановите старую подписку через editUserStarSubscription и отправьте пользователю ссылку на новый уровень. До какого момента работает старая подписка, проверьте в документации и прямо напишите об этом пользователю.</Step>
        <Step title={"Длинный пакет продавайте разовым платежом"}>«пакет на 3 месяца» или «годовой доступ» оформляйте обычным инвойсом, а срок пусть отсчитывает сам бот.</Step>
        <Step title={"Разместите страницу тарифов в меню бота"}>укажите цену в Stars, что входит в каждый уровень и когда обновляются возможности. Как оформить прайс в виде каталога, рассказано в статье <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">об оплате Stars в rich-сообщении бота</Link>.</Step>
      </Steps>
      <h2 id="obuna-narxini-qanday-belgilash-obunachi">Как назначить цену подписки: что платит подписчик и что получаете вы?</h2>
      <p>Смотрите на цену с двух сторон. Подписчик покупает Stars за сумы, а вы обмениваете накопленные Stars на вознаграждение. Согласно <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условиям для разработчиков</a>, за каждую Star можно получить вознаграждение, эквивалентное 0,013 USD.</p>
      <p>Подписчик из Узбекистана может купить Stars за сумы через @StarsPaymee_bot. Там 1 Star стоит {som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту (UzCard/HUMO) или оплате с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} при оплате через Click, Payme, Uzum или Paynet.</p>
      <p>Пример ниже — не рекомендация по цене, он лишь показывает способ расчёта. Допустим, подписка стоит 100 Stars в месяц:</p>
      <CompareTable
        headers={["Показатель", "Расчёт"]}
        rows={[
          ["Расход подписчика в месяц при переводе на карту", `100 × ${som(STARS_PER_UNIT_UZS, "ru")}`],
          ["Расход подписчика в месяц через Click, Payme, Uzum или Paynet", `100 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Ваше вознаграждение", "100 × 0,013 = эквивалент 1,3 USD"],
          ["Когда можно вывести в вознаграждение", "После поступления Stars ожидание может длиться до 21 дня"],
        ]}
      />
      <p>Практические выводы из расчёта:</p>
      <ul>
        <li>Сравните расход подписчика в сумах с разовыми ценами на похожие услуги. Если подписка выглядит дороже, чётко напишите, что дополнительно человек получает каждый месяц.</li>
        <li>Минимальный заказ в StarsPaymee — 50 Stars. Если подписка дешевле, подписчик всё равно купит минимум 50 Stars, а остаток останется на балансе до следующего месяца. Укажите это на странице тарифов, чтобы не запутать пользователя.</li>
        <li>Учитывайте ожидание при планировании дохода: Stars, пришедшие в этом месяце, могут не превратиться в деньги в этом же месяце.</li>
      </ul>
      <h2 id="obunachini-qanday-ushlab-qolish-mumkin">Как удержать подписчика?</h2>
      <p>Часть шагов ниже — официальные требования, остальное — авторские рекомендации; у каждого шага это указано.</p>
      <Steps>
        <Step title={"Отслеживайте первый платёж отдельно"}>флаг is_first_recurring показывает нового подписчика. Отправьте ему приветствие и короткую инструкцию: что открыла подписка и где это найти (рекомендация).</Step>
        <Step title={"Сохраняйте дату окончания"}>по subscription_expiration_date отправляйте напоминание за несколько дней до конца срока. Это не официальное требование, но так списание не покажется неожиданным (рекомендация).</Step>
        <Step title={"Следите за изменением статуса подписки"}>когда приходит обновление BotSubscriptionUpdated, задайте подписчику один вопрос: что не понравилось или чего не хватило (рекомендация).</Step>
        <Step title={"Оставляйте путь назад"}>если подписку отменил бот, вызовите editUserStarSubscription с is_canceled=False, и пользователь сможет снова её включить. Отдельного официального правила для подписки, которую пользователь отменил сам, не нашлось, поэтому предложите ему новую ссылку на тариф.</Step>
        <Step title={"Будьте готовы к /paysupport"}>бот обязан отвечать на эту команду и разбирать обращения по платежам (официальное требование). Срок ответа в документах не найден, отвечайте как можно быстрее.</Step>
        <Step title={"Показывайте, что обновилось за месяц"}>присылайте список возможностей, добавленных за месяц, чтобы подписчик видел, за что платит (рекомендация).</Step>
      </Steps>
      <h2 id="obuna-bekor-qilinsa-yoki-pul">Что бот может сделать, если подписку отменили или просят вернуть деньги?</h2>
      <p>Бот может как отменить продление подписки, так и снова его включить. Для этого нужны ID пользователя и идентификатор платежа telegram_payment_charge_id. Записывайте каждый подписочный платёж с его ID в базу, иначе потом не сможете отредактировать подписку.</p>
      <p>Оплату за цифровую услугу возвращают методом refundStarPayment. По условиям для разработчиков бот может вернуть покупателю Stars полностью и без штрафа через соответствующий метод Bot API. Значит, ответ «вернуть невозможно» в споре неверен: способ вернуть есть.</p>
      <Notice label={"Важно"}>То, что отменённая ботом подписка продолжает работать до конца текущего периода, в этой статье не подтверждено. Прежде чем обещать пользователю «пользуйтесь до конца месяца», проверьте описание editUserStarSubscription в Bot API.</Notice>
      <Notice label={"Важно"}>Telegram оставляет за собой право временно удерживать Stars на балансе или списывать их окончательно. Не игнорируйте обращения по платежам и подозрительные подписки.</Notice>
      <p>Если вы продаёте подписку не на бота, а на закрытый канал, порядок другой. Об этом — в статье <Link href="/blog/telegram-pullik-kanal-stars-obuna">о платной подписке на канал</Link>.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">Что делать с заработанными Stars и когда их можно использовать?</h2>
      <p>Stars от подписок копятся на балансе бота. В официальных документах указаны два способа их использовать, и есть ещё один дополнительный источник дохода.</p>
      <CompareTable
        headers={["Способ", "Что даёт", "На что обратить внимание"]}
        rows={[
          ["Telegram Ads", "Вы продвигаете бота или мини-приложение за Stars, то есть тратите их на привлечение новых подписчиков", "Поступившие Stars могут быть недоступны для рекламных кредитов до 21 дня"],
          ["Вознаграждение через Fragment", "Эквивалент 0,013 USD за каждую Star; вознаграждение пока оформляет Fragment", "Минимальная сумма вывода в этой статье не подтверждена, проверьте на Fragment"],
          ["Вознаграждение от рекламы в боте и мини-приложении", "По данным блога Telegram, разработчик может получать вознаграждение и от Telegram Ads в своём боте или мини-приложении", "Это отдельный от подписки, дополнительный источник дохода"],
        ]}
      />
      <p>Планируя рекламный бюджет, закладывайте задержку до 21 дня: Stars этого месяца, возможно, не получится сразу направить на рекламу. Подробнее о расходе Stars на продвижение — в статье <Link href="/blog/telegram-ads-stars-sarflash">как тратить Stars на Telegram Ads</Link>.</p>
      <p>Срок действия заработанных Stars в этой статье не подтверждён. Если собираетесь долго держать баланс без вывода, прочитайте <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условия для разработчиков</a> самостоятельно.</p>
      <p>StarsPaymee не покупает Stars у пользователей, поэтому продать ему заработанные Stars нельзя. Их используют через рекламу или вознаграждение на Fragment.</p>
      <h2 id="obunachilaringiz-starsni-somda-qayerdan-oladi">Где ваши подписчики купят Stars за сумы?</h2>
      <p>Если на балансе нет Stars, подписчик не сможет заплатить. Совет автора: на странице тарифов укажите и то, где взять Stars. Тогда пользователь, дойдя до окна оплаты, не уйдёт обратно.</p>
      <p>Пользователи из Узбекистана могут купить Stars за сумы через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>Нужен только @username — пароль и SMS-код не запрашиваются.</li>
        <li>Оплата в сумах: Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота.</li>
        <li>Зарубежная карта, криптокошелёк или VPN не нужны.</li>
        <li>Заказ обычно доставляется автоматически за несколько секунд, примерно за 5.</li>
        <li>Минимальный заказ — 50 Stars. Цена 1 Star — {som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту или с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} при онлайн-оплате.</li>
      </ul>
      <p>StarsPaymee — независимый сервис, официальной связи с Telegram у него нет. Вопросы по заказам принимает <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Цены и способы оплаты собраны на <Link href="/stars">странице Stars</Link>.</p>
      <h2 id="stars-obunasini-yolga-qoyishda-qanday">Какие ошибки чаще всего встречаются при запуске подписки на Stars?</h2>
      <ul>
        <li><b>Упаковка разовой выгоды в ежемесячную подписку.</b> Пользователь получает нужное и отменяет подписку после первого месяца (авторский разбор).</li>
        <li><b>Планирование периода, отличного от 30 дней.</b> Недельная или годовая подписка так не работает — длинный срок продавайте разовым инвойсом.</li>
        <li><b>ID платежа не сохраняется.</b> Без него не получится отредактировать подписку, а с возвратом будут сложности.</li>
        <li><b>Команда /paysupport не подключена.</b> Это нарушение условий для разработчиков.</li>
        <li><b>Расчёт на то, что заработанные Stars можно потратить сразу.</b> Из-за ожидания рекламный бюджет запаздывает.</li>
        <li><b>Продажа цифровой услуги не за Stars.</b> Это противоречит правилам Telegram.</li>
        <li><b>Расплывчатые обещания об условиях отмены.</b> Не обещайте пользователю срок, пока не проверили в документации, до какого момента работает отменённая ботом подписка.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Telegram Stars (Bot Payments for Digital Goods and Services)" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Developer Terms of Service" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API — createInvoiceLink" },
          { href: "https://telegram.org/blog/fullscreen-miniapps-and-more", label: "Mini Apps 2.0: Full-Screen Mode, Home Screen Icons, Geolocation and 10 more features" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли сделать подписку на Stars в боте на 7 дней или на год?", answer: "Через подписку на Stars — нет: Bot API пока разрешает только 30-дневный период. Пробную неделю или годовой доступ можно продать обычным инвойсом, а срок пусть отсчитывает сам бот." },
  { question: "Какую цену в Stars можно поставить на подписку в боте, есть ли верхний предел?", answer: "Точная цифра верхнего предела в этой статье не подтверждена. Перед тем как назначать цену, откройте описание createInvoiceLink в Bot API, а затем посчитайте, во сколько подписка обойдётся подписчику в сумах." },
  { question: "Может ли один пользователь подписаться в моём боте сразу на два тарифа?", answer: "В документации сказано лишь, что у бота может быть активно сколько угодно подписок, а точного правила для одного пользователя не нашлось. Надёжнее, чтобы у каждого пользователя был один активный уровень." },
  { question: "Что делать, если подписчик отменил подписку, а потом хочет вернуться?", answer: "Если отменил бот, вызовите editUserStarSubscription с is_canceled=False — пользователь сможет снова включить подписку. Если человек отменил сам, отправьте ему новую ссылку на тариф." },
  { question: "Когда Stars, полученные за подписку, можно превратить в деньги?", answer: "По условиям для разработчиков поступившие Stars могут быть недоступны для вознаграждения или рекламных кредитов до 21 дня. Вознаграждение сейчас оформляется через Fragment." },
  { question: "Сколько разработчик получает за 1 Star?", answer: "В условиях указан эквивалент 0,013 USD за каждую Star. Например, за 1 000 Stars выходит вознаграждение, эквивалентное 13 USD." },
  { question: "Можно ли отказать подписчику, если он просит вернуть деньги?", answer: "Бот обязан разбирать обращения по платежам через /paysupport, а метод refundStarPayment позволяет вернуть Stars полностью и без штрафа. Telegram может удерживать Stars на балансе, так что обращения без ответа лучше не оставлять." },
  { question: "Отличается ли подписка в мини-приложении от подписки в боте?", answer: "С точки зрения бизнеса — нет: согласно блогу Telegram за ноябрь 2024 года, мини-приложение тоже может предлагать подписку за Stars. Платежи подчиняются тем же правилам Stars." },
  { question: "Можно ли продать заработанные Stars в StarsPaymee?", answer: "Нет, StarsPaymee не выкупает у пользователей ни Stars, ни подарки. Заработанные Stars можно потратить на рекламу или обменять на вознаграждение через Fragment." },
  { question: "Как моим подписчикам купить Stars без зарубежной карты?", answer: "Через @StarsPaymee_bot за сумы: Click, Payme, Uzum, Paynet или перевод на карту UzCard/HUMO, нужен только @username. Минимальный заказ — 50 Stars." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>A Stars subscription in a bot or mini app is a payment that repeats every 30 days. The user agrees on the first payment, and later charges repeat automatically. For steady revenue, tie the subscription to value that renews monthly, give each tier its own link and track the expiration date. Spend earned Stars on ads or exchange them for rewards through Fragment.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#bot-yoki-mini-ilovada-stars", label: "How does a Stars subscription work in a bot or mini app, and why Stars?" },
          { href: "#qaysi-xizmat-obunaga-mos-qaysi", label: "Which services suit a subscription, and which are better as one-time payments?" },
          { href: "#bot-api-obuna-uchun-nimani", label: "What does the Bot API fix in place for subscriptions?" },
          { href: "#tariflarni-qanday-qurish-kerak-bir", label: "How should you build tiers: several levels and separate links" },
          { href: "#obuna-narxini-qanday-belgilash-obunachi", label: "How should you price a subscription: what the subscriber pays and what you get" },
          { href: "#obunachini-qanday-ushlab-qolish-mumkin", label: "How can you keep subscribers?" },
          { href: "#obuna-bekor-qilinsa-yoki-pul", label: "What can the bot do if a subscription is canceled or a refund is requested?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "What can you do with earned Stars, and when can you use them?" },
          { href: "#obunachilaringiz-starsni-somda-qayerdan-oladi", label: "Where can your subscribers buy Stars in som?" },
          { href: "#stars-obunasini-yolga-qoyishda-qanday", label: "What mistakes are common when launching Stars subscriptions?" },
        ]}
      />
      <h2 id="bot-yoki-mini-ilovada-stars">How does a Stars subscription work in a bot or mini app, and why Stars?</h2>
      <p>When a bot or mini app sells digital goods or services, it can only take payment in Telegram Stars. This rule appears on the <a href={"https://core.telegram.org/bots/payments-stars"} target="_blank" rel="noopener noreferrer">Stars payments page</a> and in section 6.2 of the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Bot Developer Terms</a>. The details of the rule and what happens if you break it are covered in our <Link href="/blog/telegram-bot-bloklanishi-stars-qoidasi">breakdown of the “Stars only” rule</Link>. This article asks a different question: how do you build monthly revenue within that rule?</p>
      <p>A subscription means you don’t need a new sale every month. You only need to keep the subscribers you already have. So the real work isn’t the payment screen. It’s the value a subscriber gets each month.</p>
      <p>The model is the same for mini apps. Telegram’s <a href={"https://telegram.org/blog/fullscreen-miniapps-and-more"} target="_blank" rel="noopener noreferrer">November 2024 blog post</a> says developers can offer subscriptions to their mini apps using Stars. Everything below applies to both formats.</p>
      <p>This isn’t a coding guide. Creating invoices, webhooks and payment confirmation are covered in <Link href="/blog/botga-tolov-api-ulash-qollanma">connecting a payment API to your bot</Link> and <Link href="/blog/telegram-stars-api-nima-ulanish">what the Stars API is</Link>.</p>
      <h2 id="qaysi-xizmat-obunaga-mos-qaysi">Which services suit a subscription, and which are better as one-time payments?</h2>
      <p>This section is the author’s analysis, not an official rule. There’s one test: every month, a subscriber should have a clear answer to “Why am I paying again?” Without value that renews each month, people cancel quickly.</p>
      <CompareTable
        headers={["Service type", "Good fit for a subscription?", "Why"]}
        rows={[
          ["AI request bundle", "Yes", "The limit resets monthly and the user keeps coming back to it"],
          ["Fresh content: lessons, signals, analysis", "Yes", "New material comes out every month"],
          ["Higher limits: file size, number of requests", "Yes", "Active users feel the difference every day"],
          ["Ad-free mode", "Yes, if the bot is used often", "Its value depends on how much the bot gets used"],
          ["A single file conversion", "Poor fit", "The job is done once and that’s it"],
          ["A single report or template", "Poor fit", "Once they have it, there’s no reason to come back"],
          ["A permanent feature unlocked once", "Poor fit", "Users expect to pay for it once"],
        ]}
      />
      <p>If you sell a one-time benefit as a subscription, the damage shows up fast. The user gets the file or report they needed and cancels before the first period ends. You keep a single payment, and the bot gets a bad name: “it takes money on its own.”</p>
      <p>A mixed approach works for many bots. The core value, such as a monthly AI request limit, goes into the subscription. Users who run out buy an extra bundle through a separate one-time invoice. The subscription stays affordable, and heavy users pay more.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="bot-api-obuna-uchun-nimani">What does the Bot API fix in place for subscriptions?</h2>
      <p>Learn the technical limits before you design tiers, because they shape your business model too. The table is based on the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a>.</p>
      <CompareTable
        headers={["Parameter or field", "What it does", "What it means for your business"]}
        rows={[
          ["subscription_period", "Sets the subscription period in createInvoiceLink", "If it’s used, the currency must be XTR, i.e. Stars"],
          ["Period value", "Currently always 2 592 000 seconds, i.e. 30 days", "A 7-day trial or an annual subscription isn’t possible this way"],
          ["is_first_recurring", "Shows the payment is the first one for a subscription", "You can tell new subscribers apart from renewals"],
          ["is_recurring", "Shows the payment is a recurring subscription payment", "You can count how many subscribers renew"],
          ["subscription_expiration_date", "Subscription expiration date in Unix time; sent for recurring payments only", "You schedule reminders based on this date"],
          ["TransactionPartnerUser", "Shows the paid subscription duration, only for invoice_payment transactions", "You can separate subscription income from other income in reports"],
          ["editUserStarSubscription", "Cancels or re-enables subscription renewal; takes user_id and telegram_payment_charge_id", "You must store every payment ID"],
          ["BotSubscriptionUpdated", "Update added in Bot API 10.2 (July 14, 2026) about changes to a user’s subscription", "The bot learns about status changes through a dedicated update"],
        ]}
      />
      <p>For your business, the biggest limit is the period. Subscriptions run on 30 days only for now, so weekly, quarterly or annual plans have to be built another way.</p>
      <p>This article doesn’t confirm an exact upper price limit for subscriptions. Before setting a tier price, check the current rule in the createInvoiceLink description yourself.</p>
      <h2 id="tariflarni-qanday-qurish-kerak-bir">How should you build tiers: several levels and separate links</h2>
      <p>The documentation says any number of subscriptions can be active for a bot at the same time. It isn’t clearly confirmed here whether one user can hold several subscriptions to the same bot at once. So take the safer route: one active tier per user.</p>
      <Steps>
        <Step title={"Define your tiers"}>no more than 2–3. Each tier’s monthly value should fit in one sentence: “N requests a month,” “all lessons unlocked,” “no ads.”</Step>
        <Step title={"Create a separate link for each tier"}>via createInvoiceLink, with XTR currency and a 30-day period. Separate links make per-tier stats easy to track.</Step>
        <Step title={"Plan tier switching in advance"}>when a user upgrades, stop the old subscription with editUserStarSubscription and send the new tier link. Check the documentation for how long the old subscription keeps working, and tell the user clearly.</Step>
        <Step title={"Sell long-term access as a one-time payment"}>offer a “3-month pack” or “annual access” through a regular invoice, and let the bot track the term itself.</Step>
        <Step title={"Put a pricing page in the bot menu"}>show the price in Stars, what each tier includes and when features refresh. One way to present a price table as a catalog is described in <Link href="/blog/bot-rich-xabar-stars-tolov-katalog">Stars payments in bot rich messages</Link>.</Step>
      </Steps>
      <h2 id="obuna-narxini-qanday-belgilash-obunachi">How should you price a subscription: what the subscriber pays and what you get</h2>
      <p>Look at price from both sides. The subscriber buys Stars with som, and you exchange the Stars you collect for rewards. Under the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Bot Developer Terms</a>, developers can receive the equivalent of 0.013 USD in rewards for each Star.</p>
      <p>A subscriber in Uzbekistan can buy Stars in som through @StarsPaymee_bot. There, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer (UzCard/HUMO) or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet.</p>
      <p>The example below isn’t a pricing recommendation. It only shows how to do the math. Say the subscription is 100 Stars a month:</p>
      <CompareTable
        headers={["Metric", "Calculation"]}
        rows={[
          ["Subscriber’s monthly cost, by card transfer", `100 × ${som(STARS_PER_UNIT_UZS, "en")}`],
          ["Subscriber’s monthly cost, via Click, Payme, Uzum or Paynet", `100 × ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Your reward", "100 × 0.013 = 1.3 USD equivalent"],
          ["When you can withdraw as a reward", "There may be a wait of up to 21 days after the Stars arrive"],
        ]}
      />
      <p>What the numbers tell you:</p>
      <ul>
        <li>Compare the subscriber’s cost in som with one-time prices for similar services in your niche. If the subscription looks more expensive, spell out what extra value comes each month.</li>
        <li>The minimum order on StarsPaymee is 50 Stars. If your subscription costs less, the subscriber still buys at least 50 Stars, and the rest stays on their balance for next month. Mention this on your pricing page so users aren’t confused.</li>
        <li>Factor in the wait when planning revenue: Stars received this month may not turn into money this month.</li>
      </ul>
      <h2 id="obunachini-qanday-ushlab-qolish-mumkin">How can you keep subscribers?</h2>
      <p>Some of these steps are official requirements and others are the author’s recommendations. Each one is labeled.</p>
      <Steps>
        <Step title={"Track the first payment separately"}>the is_first_recurring flag identifies a new subscriber. Send a welcome message and a short guide: what the subscription unlocks and where to find it (recommendation).</Step>
        <Step title={"Store the expiration date"}>use subscription_expiration_date to send a reminder a few days before the term ends. It isn’t required, but it helps the charge not feel like a surprise (recommendation).</Step>
        <Step title={"Watch for status changes"}>when a BotSubscriptionUpdated update arrives, ask the subscriber one question: what didn’t they like, or what was missing (recommendation).</Step>
        <Step title={"Leave the door open"}>if the bot canceled the subscription, call editUserStarSubscription with is_canceled=False to let the user re-enable it. No official rule was found for subscriptions the user canceled themselves, so offer them a fresh tier link.</Step>
        <Step title={"Be ready for /paysupport"}>the bot must respond to this command and handle payment requests (official requirement). No response deadline was found in the documentation, so reply as quickly as you can.</Step>
        <Step title={"Show what’s new every month"}>send a list of features added during the month so subscribers can see what they’re paying for (recommendation).</Step>
      </Steps>
      <h2 id="obuna-bekor-qilinsa-yoki-pul">What can the bot do if a subscription is canceled or a refund is requested?</h2>
      <p>The bot can both cancel and re-enable subscription renewal. It needs the user’s ID and the payment’s telegram_payment_charge_id. Save every subscription payment with its ID in your database. Without it, you can’t edit the subscription later.</p>
      <p>Payments for digital services are refunded with the refundStarPayment method. Under the Bot Developer Terms, a bot can return Stars to the buyer in full, with no penalty, through the relevant Bot API method. So when a dispute comes up, “refunds aren’t possible” is the wrong answer. There is a way to refund.</p>
      <Notice label={"Important"}>This article doesn’t confirm that a subscription canceled by the bot stays active until the end of the current period. Before promising a user “you can keep using it until the end of the month,” check the editUserStarSubscription description in the Bot API.</Notice>
      <Notice label={"Important"}>Telegram keeps the right to temporarily withhold or permanently debit Stars from your balance. Don’t ignore payment requests or suspicious subscriptions.</Notice>
      <p>If you sell access to a private channel rather than a bot, the process is different. See <Link href="/blog/telegram-pullik-kanal-stars-obuna">paid channel subscriptions</Link>.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">What can you do with earned Stars, and when can you use them?</h2>
      <p>Stars from subscriptions build up on the bot’s balance. The official documents describe two ways to use them, and there’s one more source of extra income.</p>
      <CompareTable
        headers={["Option", "What you get", "What to watch"]}
        rows={[
          ["Telegram Ads", "You advertise your bot or mini app with Stars, spending them to find new subscribers", "Incoming Stars may not be usable for ad credits for up to 21 days"],
          ["Rewards via Fragment", "0.013 USD equivalent per Star; Fragment currently processes rewards", "The minimum withdrawal isn’t confirmed in this article; check on Fragment"],
          ["Rewards from ads in bots and mini apps", "According to Telegram’s blog, developers can also earn rewards from Telegram Ads shown in their bot or mini app", "Separate from subscriptions, an extra income source"],
        ]}
      />
      <p>Allow for a delay of up to 21 days when planning your ad budget. You may not be able to put this month’s Stars into ads right away. Details on spending Stars on ads are in <Link href="/blog/telegram-ads-stars-sarflash">spending Stars on Telegram Ads</Link>.</p>
      <p>How long earned Stars remain valid isn’t confirmed in this article. If you plan to keep a balance without withdrawing for a long time, read the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Bot Developer Terms</a> yourself.</p>
      <p>StarsPaymee doesn’t buy Stars from users, so you can’t sell earned Stars to it. Use them for ads or Fragment rewards.</p>
      <h2 id="obunachilaringiz-starsni-somda-qayerdan-oladi">Where can your subscribers buy Stars in som?</h2>
      <p>A subscriber with no Stars on their balance can’t pay. The author’s recommendation: say on your pricing page where to get Stars. That way users who reach the payment screen don’t turn back.</p>
      <p>Users in Uzbekistan can buy Stars in som through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>Only an @username is needed. No password or SMS code is requested.</li>
        <li>Payment in som: Click, Payme, Uzum, Paynet (in the app or in cash at a terminal), UzCard/HUMO card transfer or bot balance.</li>
        <li>No international card, crypto wallet or VPN needed.</li>
        <li>Orders are usually delivered automatically within a few seconds, about 5 seconds.</li>
        <li>The minimum order is 50 Stars. 1 Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} with online payment.</li>
      </ul>
      <p>StarsPaymee is an independent service with no official link to Telegram. Order questions go to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Prices and payment methods are collected on the <Link href="/stars">Stars page</Link>.</p>
      <h2 id="stars-obunasini-yolga-qoyishda-qanday">What mistakes are common when launching Stars subscriptions?</h2>
      <ul>
        <li><b>Wrapping a one-time benefit in a monthly subscription.</b> The user gets what they need and cancels after the first month (author’s analysis).</li>
        <li><b>Planning a period other than 30 days.</b> Weekly or annual subscriptions don’t work this way. Sell longer terms with a one-time invoice.</li>
        <li><b>Not saving the payment ID.</b> Without it you can’t edit the subscription, and refunds get harder.</li>
        <li><b>Not setting up /paysupport.</b> That breaks the Bot Developer Terms.</li>
        <li><b>Counting on using earned Stars right away.</b> The waiting period delays your ad budget.</li>
        <li><b>Selling digital services for anything other than Stars.</b> That goes against Telegram’s rules.</li>
        <li><b>Vague promises about cancellation terms.</b> Don’t promise users a time frame until you’ve checked in the documentation how long a bot-canceled subscription keeps working.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "Telegram Stars (Bot Payments for Digital Goods and Services)" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Developer Terms of Service" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API — createInvoiceLink" },
          { href: "https://telegram.org/blog/fullscreen-miniapps-and-more", label: "Mini Apps 2.0: Full-Screen Mode, Home Screen Icons, Geolocation and 10 more features" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I make my bot’s Stars subscription 7 days long, or yearly?", answer: "Not as a Stars subscription: the Bot API currently allows only a 30-day period. You can sell a trial week or annual access through a regular invoice and have the bot track the term." },
  { question: "How many Stars can I charge for a bot subscription? Is there a maximum?", answer: "This article doesn’t confirm an exact maximum. Before setting a price, open the createInvoiceLink description in the Bot API, then work out what the subscriber will pay in som." },
  { question: "Can one user subscribe to two tiers in my bot at the same time?", answer: "The documentation only says a bot can have any number of active subscriptions. No clear rule was found for a single user. The safer route is one active tier per user." },
  { question: "What do I do if a subscriber cancels and later wants to come back?", answer: "If the bot canceled the subscription, call editUserStarSubscription with is_canceled=False so the user can turn it back on. If the user canceled it themselves, send them a fresh tier link." },
  { question: "When can I cash out the Stars I earned from subscriptions?", answer: "Under the Bot Developer Terms, incoming Stars may stay locked for rewards or ad credits for up to 21 days. Fragment currently processes the rewards." },
  { question: "How much does a developer get per Star?", answer: "The terms list the equivalent of 0.013 USD per Star. For example, 1 000 Stars works out to a 13 USD equivalent in rewards." },
  { question: "If a subscriber asks for a refund, can I refuse?", answer: "The bot must handle payment requests that come in through /paysupport, and refundStarPayment lets you return Stars in full with no penalty. Telegram can also withhold Stars from your balance, so never leave a request unanswered." },
  { question: "Do mini app subscriptions work differently from bot subscriptions?", answer: "Not from a business point of view. According to Telegram’s November 2024 blog post, mini apps can also offer Stars subscriptions, and the same Stars payment rules apply." },
  { question: "Can I sell my earned Stars to StarsPaymee?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. You can spend earned Stars on ads or exchange them for rewards through Fragment." },
  { question: "How can my subscribers get Stars without an international card?", answer: "Through @StarsPaymee_bot, paying in som with Click, Payme, Uzum, Paynet or a UzCard/HUMO card transfer. Only an @username is needed, and the minimum order is 50 Stars." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  keywords: ["bot uchun stars obuna","telegram bot obuna stars","mini ilova stars obuna","telegram botdan daromad","stars obuna narxi bot","subscription_period telegram","bot monetizatsiya stars","подписка за звезды в боте telegram","telegram stars подписка мини-приложение","монетизация бота telegram stars","вывод stars fragment разработчик"],
  howToSteps: [
    { name: "Darajalarni aniqlang", text: "ular 2–3 tadan oshmasin. Har birining oylik qiymati bitta gapda tushunarli bo‘lsin: «oyiga N ta so‘rov», «hamma darslar ochiq», «reklamasiz»." },
    { name: "Har bir daraja uchun alohida havola yarating", text: "createInvoiceLink orqali, XTR valyutasi va 30 kunlik davr bilan. Havolalar alohida bo‘lsa, statistikani har bir daraja bo‘yicha yuritish oson." },
    { name: "Daraja almashtirish tartibini oldindan belgilang", text: "yuqori darajaga o‘tayotgan foydalanuvchining eski obunasini editUserStarSubscription bilan to‘xtating va unga yangi daraja havolasini yuboring. Eski obuna qachongacha ishlashini hujjatdan tekshiring va foydalanuvchiga aniq yozib bering." },
    { name: "Uzoq muddatli paketni bir martalik to‘lov qiling", text: "«3 oylik paket» yoki «yillik kirish»ni oddiy invoice bilan soting, muddatini esa bot o‘zi hisoblab borsin." },
    { name: "Tariflar sahifasini bot menyusiga joylang", text: "unda Stars’dagi narx, har bir darajaga nimalar kirishi va imkoniyatlar qachon yangilanishi ko‘rsatilsin. Narx jadvalini katalog ko‘rinishida berish usuli bot rich xabarida Stars to‘lov maqolasida bor." },
  ],
  locales: {
    uz: {
      title: "Bot uchun Stars obuna: qanday tarif, narx va muddat qo‘yiladi?",
      excerpt: "Bot uchun Stars obunasi hozircha faqat 30 kunlik davr bilan ishlaydi va har oy yangilanadigan qiymatga mos keladi. Maqolada tariflar, narx hisobi, obunachini ushlab qolish va ishlangan Stars yo‘llari bor.",
      metaTitle: "Bot uchun Stars obuna: qanday tarif, narx",
      metaDescription: "Bot uchun Stars obunasi hozircha faqat 30 kunlik davr bilan ishlaydi va har oy yangilanadigan qiymatga mos keladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Подписка на Stars в боте: какой тариф, цену и срок поставить?",
      excerpt: "Подписка на Stars в боте пока работает только с 30-дневным периодом и подходит для ценности, которая обновляется каждый месяц. Внутри — тарифы, расчёт цены, удержание подписчиков и что делать с заработанными Stars.",
      metaTitle: "Подписка на Stars в боте: какой тариф, цену",
      metaDescription: "Подписка на Stars в боте пока работает только с 30-дневным периодом и подходит для ценности, которая обновляется каждый месяц.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Stars subscriptions for bots: tiers, pricing and billing period",
      excerpt: "Stars subscriptions for bots currently run only on a 30-day cycle and work best for value that renews monthly. This guide covers tiers, price math, keeping subscribers and ways to use earned Stars.",
      metaTitle: "Telegram Stars subscriptions for bots",
      metaDescription: "Stars subscriptions for bots currently run only on a 30-day cycle and work best for value that renews monthly.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
