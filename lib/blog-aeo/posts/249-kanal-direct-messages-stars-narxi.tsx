import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "kanal-direct-messages-stars-narxi";

/**
 * Telegram kanalda direct messages: qanday yoqiladi va xabarga qancha Stars?
 *
 * Avtoblogyoz yasagan maqola (2026-11-24): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanal egasi yoki admini obunachilar kanalga yozishi uchun direct messages’ni qanday yoqishni va har xabar uchun qancha Stars narx qo‘yishni «telegram kanal direct messages stars» kabi so‘rov bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-24):
 *   https://telegram.org/blog/direct-to-channel-trim-voice-and-more
 *   https://telegram.org/faq
 *   https://core.telegram.org/api/monoforum
 *   https://telegram.org/blog/checklists-suggested-posts
 *   https://telegram.org/blog/superchannels-star-reactions-subscriptions
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Kanal egasi direct messages’ni Channel Settings &gt; Direct Messages bo‘limida yoqadi. Shundan keyin obunachilar kanalga shaxsiy xabar yoza oladi. Xohlasangiz, har bir xabar uchun Stars’da narx qo‘yasiz. Rasmiy manbalarda tavsiya qilingan narx yo‘q. Fikr yig‘ish uchun narxni past tuting, spamni to‘sish uchun ramziy narx qo‘ying, shaxsiy maslahat uchun esa yuqoriroq narx qo‘yish mumkin.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kanal-direct-messages-nima-va", label: "Kanal direct messages nima va u qachon chiqdi?" },
          { href: "#obunachi-kanalga-qayerdan-yozadi-va", label: "Obunachi kanalga qayerdan yozadi va xabar qayerga boradi?" },
          { href: "#direct-messagesni-kanal-sozlamalarida-qanday", label: "Direct messages’ni kanal sozlamalarida qanday yoqish mumkin?" },
          { href: "#har-xabarga-qancha-stars-qoygan", label: "Har xabarga qancha Stars qo‘ygan ma’qul?" },
          { href: "#reklama-sorovlarini-direct-messages-orqali", label: "Reklama so‘rovlarini direct messages orqali qanday qabul qilish kerak?" },
          { href: "#adminlar-obunachilarga-qanday-javob-beradi", label: "Adminlar obunachilarga qanday javob beradi?" },
          { href: "#obunachiga-yozishni-qanday-qulay-qilish", label: "Obunachiga yozishni qanday qulay qilish mumkin?" },
          { href: "#dm-star-reaksiyalari-va-pullik", label: "DM, Star reaksiyalari va pullik obuna: qaysi biri nima uchun?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "Ishlangan Stars bilan nima qilish mumkin?" },
        ]}
      />
      <h2 id="kanal-direct-messages-nima-va">Kanal direct messages nima va u qachon chiqdi?</h2>
      <p>Telegram bu imkoniyatni <a href={"https://telegram.org/blog/direct-to-channel-trim-voice-and-more"} target="_blank" rel="noopener noreferrer">2025-yil 3-iyundagi yangilanishda</a> e’lon qilgan. Obunachi kanalga shaxsiy xabar yuboradi va ega hamda adminlar bilan alohida chatda gaplashadi. Dasturchilar uchun yozilgan <a href={"https://core.telegram.org/api/monoforum"} target="_blank" rel="noopener noreferrer">texnik hujjatda</a> bu xabarlar bo‘limi «monoforum» deb ataladi.</p>
      <p>Ega xohlasa, har bir xabar uchun Stars’da to‘lov qo‘yadi. <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> sahifasida maqsad ochiq yozilgan: xabarlar qutisi boshqarib bo‘ladigan holda qolsin. Demak, narx daromad manbai ham, ortiqcha xabarlarni kamaytiradigan filtr ham bo‘lishi mumkin.</p>
      <p>Bu funksiya shaxsiy akkauntdagi pullik xabarlardan farq qiladi: u yerda Premium egasi kontaktida yo‘q odamlarning xabariga narx qo‘yadi, bu haqda <Link href="/blog/telegram-pulli-xabarlar-paid-messages">pullik xabarlar maqolasida</Link> yozilgan.</p>
      <Notice label={"Muhim"}>Bu maqola Telegram’ning 2025-yil iyun–iyul oylaridagi e’lonlariga tayanadi. Keyingi yangilanishlarda menyu nomlari yoki shartlar o‘zgargan bo‘lishi mumkin, shuning uchun ilovadagi sozlamani o‘zingiz ham ko‘rib chiqing.</Notice>
      <h2 id="obunachi-kanalga-qayerdan-yozadi-va">Obunachi kanalga qayerdan yozadi va xabar qayerga boradi?</h2>
      <p>Funksiya yoqilgandan keyin obunachi va ega uchun u quyidagicha ishlaydi:</p>
      <ul>
        <li><b>Yozish joyi.</b> Obunachi kanalning pastki panelidagi xabar pufakchasini bosadi.</li>
        <li><b>Qo‘shilish shart emas.</b> Texnik hujjatga ko‘ra, oddiy guruh yoki forumdan farqli ravishda monoforumga qo‘shilish kerak emas.</li>
        <li><b>Alohida bo‘lim.</b> Obunachilarning xabarlari egasining shaxsiy chatlaridan alohida, yangi soddalashtirilgan interfeysda chiqadi. Do‘stlar va oila bilan yozishmalaringiz obunachi savollari bilan aralashib ketmaydi.</li>
        <li><b>Har kimga alohida suhbat.</b> Har bir suhbat (mavzu) aynan bitta foydalanuvchiga bog‘langan va faqat u bilan yozishma tarixini saqlaydi. Ega uchun bu qulay: kim nima so‘raganini bitta ro‘yxatda emas, har bir odam bo‘yicha ko‘rasiz.</li>
        <li><b>Javob kanal nomidan.</b> Hujjatga ko‘ra javob monoforumga bog‘langan kanal nomidan yuboriladi. Ega yoki adminning shaxsiy profili boshqa yo‘llar bilan ko‘rinadimi yoki yo‘qmi, buni rasmiy manbalarda tasdiqlay olmadik. Shuning uchun sinov akkaunti bilan o‘zingiz tekshirib ko‘ring.</li>
      </ul>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="direct-messagesni-kanal-sozlamalarida-qanday">Direct messages’ni kanal sozlamalarida qanday yoqish mumkin?</h2>
      <p>Sozlama kanal egasi akkauntida bajariladi. Tartib quyidagicha:</p>
      <Steps>
        <Step title={"Kanalni oching"}>ega akkauntidan kirib, kanal nomini bosing.</Step>
        <Step title={"Sozlamalarga kiring"}>Channel Settings, keyin Direct Messages bo‘limini tanlang.</Step>
        <Step title={"Funksiyani yoqing"}>shundan keyin obunachilar kanalga shaxsiy xabar yoza oladi.</Step>
        <Step title={"Narxni tanlang"}>har bir xabar uchun necha Stars olinishini belgilang. Eng kam va eng ko‘p chegara, shuningdek narxsiz rejim bor-yo‘qligini bu maqolada tasdiqlamadik, shuning uchun ilovada ko‘ringan qiymatlarga qarang.</Step>
        <Step title={"Sinab ko‘ring"}>boshqa akkauntdan kanalga kirib, pastki paneldagi pufakcha orqali xabar yuboring. Xabar shaxsiy chatlarga emas, kanalning alohida bo‘limiga tushganini va javobingiz kanal nomidan borganini tekshiring.</Step>
      </Steps>
      <Notice label={"Muhim"}>Bo‘lim nomlari ilova tili va versiyasiga qarab farq qilishi mumkin. Boshqa tildagi interfeysda shu ma’nodagi bandni qidiring.</Notice>
      <h2 id="har-xabarga-qancha-stars-qoygan">Har xabarga qancha Stars qo‘ygan ma’qul?</h2>
      <p>Rasmiy manbalarda narx bo‘yicha tavsiya topilmadi. Quyidagi jadval muallif maslahati, qoida emas. Narxni kanalning hajmiga emas, xabarlar qutisidan nima kutayotganingizga qarab tanlang.</p>
      <CompareTable
        headers={["Maqsad", "Narx darajasi", "Nega shunday"]}
        rows={[
          ["Fikr va savol yig‘ish", "Narxsiz yoki eng past (ilova ruxsat bersa)", "Obunachi ikkilanmasdan yozadi, siz ko‘proq fikr olasiz"],
          ["Spamni to‘sish", "Ramziy narx", "Tasodifiy xabarlar kamayadi, jiddiy savol beruvchi esa to‘xtamaydi"],
          ["Shaxsiy maslahat yoki tahlil", "Yuqoriroq", "Vaqtingiz pullanadi, javobga ko‘proq e’tibor qaratasiz"],
          ["Reklama so‘rovlari", "Xabar narxi emas", "Buning uchun taklif qilingan post mexanizmi bor (pastda)"],
        ]}
      />
      <h3>Birinchi oy: past narx va kuzatuv</h3>
      <p>Boshida narxni past qo‘ying va bir oy davomida ikki narsani yozib boring: haftasiga nechta xabar kelyapti va ularga javob berishga qancha vaqt ketyapti. Xabarlar ko‘p bo‘lib, ko‘pi takroriy savol bo‘lsa, narxni oshiring yoki FAQ post qo‘ying. Xabarlar deyarli kelmasa, narx to‘siq bo‘lib qolgan, uni tushiring.</p>
      <h3>Ikki kanal misoli</h3>
      <p>Kichik ta’lim kanalida muallif har savolga o‘zi javob beradi va savollardan yangi post g‘oyalarini oladi. Unga past narx foydali, chunki har bir savol kontent uchun xomashyo.</p>
      <p>Yirik yangilik kanalida esa har kuni ko‘plab «bu rostmi?» xabarlari kelishi mumkin va jamoa hammasiga javob berolmaydi. Bu yerda ramziy narx qutini tozaroq saqlaydi. Muhim xabar beruvchilar uchun alohida aloqa yo‘lini pinlangan postda ko‘rsatish mumkin.</p>
      <h3>Narx qo‘yishda ko‘p uchraydigan xatolar</h3>
      <ul>
        <li><b>Javob bermaslik.</b> Obunachi pul to‘lab yozgan-u, javob kelmasa, ishonch tez yo‘qoladi. Javob berishga vaqtingiz bo‘lmasa, narxni oshirgandan ko‘ra javob muddatini ochiq yozgan ma’qul.</li>
        <li><b>Narxni yashirish.</b> Obunachi narxni faqat yozish paytida bilsa, ko‘pchilik ortga qaytadi. Uni pinlangan postda oldindan ko‘rsating.</li>
        <li><b>Hamma maqsadga bitta narx.</b> Savol, maslahat va reklama turli narsalar. Reklama uchun alohida yo‘l borligini eslatib qo‘ying.</li>
      </ul>
      <Notice label={"Muhim"}>Kanal direct messages’dan tushgan Stars’ning qancha qismi egaga qolishini rasmiy manbalarda kanal uchun aniq foiz bilan topmadik. Hisob-kitobni ilovadagi monetizatsiya ko‘rsatkichlariga qarab qiling.</Notice>
      <h2 id="reklama-sorovlarini-direct-messages-orqali">Reklama so‘rovlarini direct messages orqali qanday qabul qilish kerak?</h2>
      <p>Reklama beruvchidan xabar narxi orqali pul olishga urinish shart emas, chunki uning uchun alohida yo‘l bor. Texnik hujjatga ko‘ra, direct messages orqali kanal postlarini, jumladan pullik postlarni ham taklif qilish mumkin. <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">2025-yil 1-iyuldagi yangilanishda</a> aytilishicha, taklif qilingan postlar kanalga aynan direct messages orqali keladi.</p>
      <p>Taklif qiluvchi post chiqarilgani evaziga egaga Telegram Stars yoki Toncoin taklif qiladi. Ega mukofotni post chiqqanidan 24 soat o‘tib oladi. Post shu muddatdan oldin o‘chirilsa nima bo‘lishi bu maqoladagi manbalarda aytilmagan, shuning uchun kamida 24 soat unga tegmaslik xavfsizroq.</p>
      <p>Ikki to‘lov turining farqini kelishuv paytida hisobga oling:</p>
      <CompareTable
        headers={["To‘lov turi", "Qaytarish xavfi", "Ega uchun ma’nosi"]}
        rows={[
          ["Telegram Stars", "Stars Apple kabi uchinchi tomon provayderlari orqali olinadi, ular xaridorga 21 kun ichida pulni qaytarishi mumkin", "Katta summali reklamada bu xavfni yodda tuting"],
          ["Toncoin", "Xaridor to‘lovni qaytarib ololmaydi", "Hamyon va kripto bilan ishlashni bilish kerak"],
        ]}
      />
      <p>Stars qaytarilishining umumiy qoidalari <Link href="/blog/telegram-stars-qaytarib-olish">Stars qaytarish haqidagi maqolada</Link> yozilgan. Ega taklif narxini oldindan o‘zi belgilab qo‘ya oladimi yoki faqat kelgan taklifni qabul qiladimi, buni bu maqolada tasdiqlamadik.</p>
      <h2 id="adminlar-obunachilarga-qanday-javob-beradi">Adminlar obunachilarga qanday javob beradi?</h2>
      <p>Xabarlar qutisini bir kishi ko‘tara olmasa, adminlar yordam beradi. Tartibni oldindan kelishib oling:</p>
      <ul>
        <li><b>Huquq bering.</b> Texnik hujjatda manage_direct_messages huquqiga ega adminlar tilga olinadi. Ilovadagi admin huquqlari ro‘yxatida bu band qanday nomlanishini tasdiqlamadik, ma’nosi bo‘yicha qidiring. Huquqni faqat xabarlarga javob beradigan odamga bering.</li>
        <li><b>Bitta ovozda gapiring.</b> Javob kanal nomidan ketadi, shuning uchun obunachi kanalning o‘zi bilan gaplashyapti deb hisoblaydi. Murojaat ohangi («siz» yoki «sen»), imzo va emoji ishlatish bo‘yicha jamoada kelishib oling.</li>
        <li><b>Suhbatlarni bo‘lib oling.</b> Har bir obunachi bilan alohida suhbat ochiladi. Kim qaysi suhbatlarga javob berishini belgilang: masalan, bir admin texnik savollarga, ikkinchisi hamkorlik takliflariga.</li>
        <li><b>Javob muddatini belgilang.</b> «Ish kunlari ichida javob beramiz» degan qoida pul to‘lab yozgan obunachiga nimani kutishini aniq aytadi.</li>
        <li><b>Tayyor matnlar yozib qo‘ying.</b> Ko‘p takrorlanadigan savollarga qisqa javob shablonlari vaqtni tejaydi.</li>
      </ul>
      <p>Bu bo‘limdagi odatlar muallif tavsiyasi, Telegram qoidasi emas.</p>
      <h2 id="obunachiga-yozishni-qanday-qulay-qilish">Obunachiga yozishni qanday qulay qilish mumkin?</h2>
      <p>Obunachi pul to‘lab yozayotgan bo‘lsa, u nima olishini oldindan bilishi kerak. Bir nechta oddiy odat yordam beradi:</p>
      <ul>
        <li><b>Pinlangan post.</b> Unda xabar narxini, qaysi mavzularda yozish mumkinligini va javob muddatini ko‘rsating.</li>
        <li><b>FAQ post.</b> Eng ko‘p beriladigan savollarga bitta postda javob bering. Shunda obunachi oddiy savol uchun Stars sarflamaydi, siz esa takroriy xabarlarni kamroq olasiz.</li>
        <li><b>Narx o‘zgarsa, oldindan xabar bering.</b> Kutilmagan narx obunachining ishonchini pasaytiradi.</li>
      </ul>
      <p>Pinlangan post uchun namuna:</p>
      <Notice label={"Muhim"}>Kanalga shaxsiy xabar yozish mumkin. Xabar narxi: … Stars. Savollar: kurs, materiallar, hamkorlik. Javob: ish kunlari ichida. Reklama uchun post taklifi funksiyasidan foydalaning.</Notice>
      <p>Narx qo‘yilgan bo‘lsa, obunachida yetarli Stars bo‘lishi kerak. Balans yetmasa ilovada aynan nima chiqishini tasdiqlay olmadik, shuning uchun pinlangan postda «yozishdan oldin Stars balansingizni tekshiring» deb eslatib qo‘ygan ma’qul.</p>
      <p>O‘zbekistondagi obunachi Stars’ni so‘mda <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali oladi. Buning uchun faqat @username kerak, parol yoki SMS kod so‘ralmaydi, buyurtma odatda bir necha soniyada yetkaziladi. UzCard/HUMO kartaga o‘tkazma yoki bot balansidan 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali esa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma 50 Stars. Batafsil ma’lumot <Link href="/stars">Stars sahifasida</Link> va <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasida</Link>.</p>
      <p>Eslatma: StarsPaymee Stars’ni foydalanuvchidan sotib olmaydi. Kanalda ishlagan Stars’ingizni botga sotib bo‘lmaydi.</p>
      <h2 id="dm-star-reaksiyalari-va-pullik">DM, Star reaksiyalari va pullik obuna: qaysi biri nima uchun?</h2>
      <p>Kanalda Stars olishning bir necha yo‘li bor va ular bir-birining o‘rnini bosmaydi:</p>
      <CompareTable
        headers={["Vosita", "Kim nima uchun to‘laydi", "Ega uchun foyda"]}
        rows={[
          ["Kanal direct messages", "Obunachi egaga shaxsiy xabar yuborish uchun", "Savollar oqimini boshqarish va maslahatdan daromad"],
          ["Star reaksiyalari", "Obunachi yoqqan postni qo‘llab-quvvatlash uchun", "Qaysi post qadrlanayotgani ko‘rinadi"],
          ["Pullik obuna", "Obunachi oylik Stars to‘lovi evaziga kanalga kirish uchun", "Muntazam daromad, yopiq kontent"],
          ["Taklif qilingan post", "Reklama beruvchi kanalda post chiqarish uchun", "Reklamani bitta suhbatda kelishish"],
        ]}
      />
      <p>Reaksiyalar haqida <Link href="/blog/telegram-star-reaksiyalari">Star reaksiyalari maqolasida</Link>, yopiq kanal haqida <Link href="/blog/telegram-pullik-kanal-stars-obuna">pullik kanal obunasi maqolasida</Link> o‘qishingiz mumkin. Barcha yo‘llarni birga ko‘rish uchun <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanal monetizatsiyasi qo‘llanmasi</Link> bor.</p>
      <p>Bu vositalarni birga ishlatsa bo‘ladi. Masalan, ommaviy kanalda DM’ni spamga qarshi filtr sifatida qoldirib, chuqur materialni pullik obuna orqali berish mumkin.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">Ishlangan Stars bilan nima qilish mumkin?</h2>
      <p>Bu savolga ehtiyotkor javob kerak, chunki tekshirilgan ma’lumot asosan 2024-yilga tegishli.</p>
      <p><a href={"https://telegram.org/blog/superchannels-star-reactions-subscriptions"} target="_blank" rel="noopener noreferrer">2024-yilgi blogga</a> ko‘ra, Star reaksiyalari bo‘yicha kanal egalari Stars’ni Toncoin mukofotlariga yoki subsidiyali reklamaga aylantira olgan. O‘sha blogda Stars evaziga olingan reklamaga qo‘shimcha 30% chegirma berilishi ham aytilgan.</p>
      <Notice label={"Muhim"}>Bu 2024-yilgi ma’lumot. U hozir ham, aynan kanal direct messages’dan tushgan Stars uchun ham amal qilishini bu maqolada tekshirmadik.</Notice>
      <p>Fragment orqali yechish tartibini ham bu yerda tasdiqlay olmadik. To‘plangan Stars va mavjud amallarni ilovadagi kanal monetizatsiyasi bo‘limidan qidiring. Direct messages daromadining qancha qismi egaga qolishi haqida taxminiy foiz yozmaymiz.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/direct-to-channel-trim-voice-and-more", label: "Direct Messages for Channels, Voice Trimming, Topic Tabs and HD Photos" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/api/monoforum", label: "Direct messages to channels" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions", label: "Super Channels, Star Reactions and Subscriptions" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Kanalga direct message yozish uchun obunachi Premium olishi kerakmi?", answer: "Telegram blogi va FAQ sahifasida kanalga yozish uchun Premium sharti aytilmagan. Ega narx qo‘ygan bo‘lsa, obunachiga Stars kerak bo‘ladi. Premium shaxsiy akkauntda pullik xabarlarni yoqish uchun talab qilinadi." },
  { question: "Direct messages’ni yoqsam, shaxsiy chatlarim obunachi xabarlari bilan aralashib ketadimi?", answer: "Yo‘q. Telegram ma’lumotiga ko‘ra obunachi xabarlari alohida interfeysga tushadi, shaxsiy yozishmalaringiz ro‘yxatiga qo‘shilmaydi." },
  { question: "Obunachiga men javob bersam, u mening shaxsiy akkauntimni ko‘radimi?", answer: "Texnik hujjatga ko‘ra javob kanal nomidan ketadi. Profilingiz boshqa yo‘l bilan ko‘rinadimi yoki yo‘qmi, bu rasmiy manbalarda tasdiqlanmagan, shuning uchun ikkinchi akkauntdan sinab ko‘ring." },
  { question: "Kanal DM bilan shaxsiy akkauntdagi pullik xabarlar bir narsami?", answer: "Yo‘q. Birinchisida obunachi kanalga yozadi. Ikkinchisida esa kontaktingizda yo‘q odam shaxsiy profilingizga yozganda to‘lov olinadi va uni yoqish uchun Premium kerak." },
  { question: "Xabar narxini keyin o‘zgartirsa bo‘ladimi?", answer: "Narxni qayerda va qanday o‘zgartirish mumkinligi bu maqoladagi manbalarda alohida yozilmagan, shuning uchun avval kanalning Direct Messages sozlamasini oching. Narxni o‘zgartirsangiz, pinlangan postdagi narxni ham yangilang." },
  { question: "Adminlar ham obunachilarga javob bera oladimi?", answer: "Ha, texnik hujjatda direct messages’ni boshqarish huquqi bor adminlar tilga olinadi. Bu huquqni faqat javob berish vazifasi bor odamlarga bering." },
  { question: "Obunachi kanalga yozish uchun Stars’ni qayerdan so‘mda oladi?", answer: `@StarsPaymee_bot orqali, faqat @username bilan: karta o‘tkazmasi yoki bot balansidan 1 ta Stars ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma 50 Stars.` },
  { question: "Reklama beruvchi DM orqali post taklif qilsa, pulni qachon olaman?", answer: "Telegram’ning 2025-yil iyuldagi e’loniga ko‘ra mukofot post chiqqanidan 24 soat o‘tib keladi. Bu muddatda postga tegmaslik xavfsizroq." },
  { question: "Stars bilan to‘langan reklama to‘lovi qaytarilishi mumkinmi?", answer: "Mumkin: Stars Apple kabi provayderlar orqali sotib olinadi va ular xaridorga 21 kun ichida pulni qaytarishi mumkin. Toncoin bilan qilingan to‘lovni xaridor qaytarib ololmaydi." },
  { question: "Ishlangan Stars’ni StarsPaymee’ga sotsa bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars sotib olmaydi. To‘plangan Stars bilan qanday amallar mavjudligini ilovadagi kanal monetizatsiyasi bo‘limidan qidiring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Владелец канала включает личные сообщения в разделе Channel Settings &gt; Direct Messages. После этого подписчики могут писать каналу в личку. При желании за каждое сообщение назначается цена в Stars. Рекомендованной цены в официальных источниках нет. Для сбора отзывов держите цену низкой, против спама хватит символической, а за личную консультацию можно брать больше.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kanal-direct-messages-nima-va", label: "Что такое Direct Messages в канале и когда они появились?" },
          { href: "#obunachi-kanalga-qayerdan-yozadi-va", label: "Где подписчик пишет каналу и куда попадает сообщение?" },
          { href: "#direct-messagesni-kanal-sozlamalarida-qanday", label: "Как включить Direct Messages в настройках канала?" },
          { href: "#har-xabarga-qancha-stars-qoygan", label: "Сколько Stars ставить за одно сообщение?" },
          { href: "#reklama-sorovlarini-direct-messages-orqali", label: "Как принимать рекламные запросы через личные сообщения канала?" },
          { href: "#adminlar-obunachilarga-qanday-javob-beradi", label: "Как админы отвечают подписчикам?" },
          { href: "#obunachiga-yozishni-qanday-qulay-qilish", label: "Как сделать так, чтобы подписчику было удобно писать?" },
          { href: "#dm-star-reaksiyalari-va-pullik", label: "Личные сообщения, Star-реакции и платная подписка: что для чего?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "Что делать с заработанными Stars?" },
        ]}
      />
      <h2 id="kanal-direct-messages-nima-va">Что такое Direct Messages в канале и когда они появились?</h2>
      <p>Telegram объявил об этой возможности в <a href={"https://telegram.org/blog/direct-to-channel-trim-voice-and-more"} target="_blank" rel="noopener noreferrer">обновлении от 3 июня 2025 года</a>. Подписчик пишет каналу личное сообщение и общается с владельцем и админами в отдельном чате. В <a href={"https://core.telegram.org/api/monoforum"} target="_blank" rel="noopener noreferrer">технической документации</a> для разработчиков такой раздел сообщений называется «монофорумом».</p>
      <p>По желанию владелец берёт плату в Stars за каждое сообщение. В <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> цель названа прямо: чтобы входящие оставались управляемыми. Значит, цена может работать и как источник дохода, и как фильтр, который отсекает лишние сообщения.</p>
      <p>Не путайте эту функцию с платными сообщениями в личном аккаунте. Там владелец Premium ставит цену на сообщения от людей, которых нет в его контактах. Об этом есть <Link href="/blog/telegram-pulli-xabarlar-paid-messages">статья о платных сообщениях</Link>.</p>
      <Notice label={"Важно"}>Статья опирается на объявления Telegram за июнь–июль 2025 года. В более поздних обновлениях названия пунктов меню или условия могли измениться, поэтому сверьтесь с настройками в приложении.</Notice>
      <h2 id="obunachi-kanalga-qayerdan-yozadi-va">Где подписчик пишет каналу и куда попадает сообщение?</h2>
      <p>Когда функция включена, для подписчика и владельца всё работает так:</p>
      <ul>
        <li><b>Откуда писать.</b> Подписчик нажимает на значок сообщения в нижней панели канала.</li>
        <li><b>Вступать не нужно.</b> По технической документации, в монофорум не нужно вступать, в отличие от обычной группы или форума.</li>
        <li><b>Отдельный раздел.</b> Сообщения подписчиков приходят в новый упрощённый интерфейс, отдельно от личных чатов владельца. Переписка с друзьями и семьёй не смешивается с вопросами подписчиков.</li>
        <li><b>Свой диалог с каждым.</b> Каждый диалог (топик) привязан ровно к одному пользователю и хранит только переписку с ним. Владельцу так удобнее: вы видите, кто о чём спрашивал, не в общей ленте, а по каждому человеку отдельно.</li>
        <li><b>Ответ от имени канала.</b> По документации, ответ уходит от имени канала, к которому привязан монофорум. Виден ли как-то ещё личный профиль владельца или админа, мы по официальным источникам подтвердить не смогли. Проверьте это сами со второго аккаунта.</li>
      </ul>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="direct-messagesni-kanal-sozlamalarida-qanday">Как включить Direct Messages в настройках канала?</h2>
      <p>Всё делается с аккаунта владельца канала. Порядок такой:</p>
      <Steps>
        <Step title={"Откройте канал"}>зайдите с аккаунта владельца и нажмите на название канала.</Step>
        <Step title={"Перейдите в настройки"}>Channel Settings, затем раздел Direct Messages.</Step>
        <Step title={"Включите функцию"}>после этого подписчики смогут писать каналу в личку.</Step>
        <Step title={"Выберите цену"}>укажите, сколько Stars будет стоить одно сообщение. Минимальный и максимальный порог, а также наличие бесплатного режима в этой статье не подтверждены, поэтому ориентируйтесь на значения в приложении.</Step>
        <Step title={"Проверьте"}>зайдите в канал с другого аккаунта и отправьте сообщение через значок в нижней панели. Убедитесь, что оно попало не в личные чаты, а в отдельный раздел канала, и что ответ ушёл от имени канала.</Step>
      </Steps>
      <Notice label={"Важно"}>Названия разделов зависят от языка и версии приложения. В интерфейсе на другом языке ищите пункт с тем же смыслом.</Notice>
      <h2 id="har-xabarga-qancha-stars-qoygan">Сколько Stars ставить за одно сообщение?</h2>
      <p>Рекомендаций по цене в официальных источниках нет. Таблица ниже — совет автора, а не правило. Выбирайте цену не по размеру канала, а по тому, чего вы ждёте от входящих.</p>
      <CompareTable
        headers={["Цель", "Уровень цены", "Почему так"]}
        rows={[
          ["Сбор отзывов и вопросов", "Без цены или минимальная (если приложение позволяет)", "Подписчик пишет не раздумывая, вы получаете больше обратной связи"],
          ["Защита от спама", "Символическая", "Случайных сообщений меньше, а человека с серьёзным вопросом цена не остановит"],
          ["Личная консультация или разбор", "Выше", "Ваше время оплачено, на ответ можно потратить больше внимания"],
          ["Рекламные запросы", "Не через цену сообщения", "Для этого есть механизм предложенных постов (ниже)"],
        ]}
      />
      <h3>Первый месяц: низкая цена и наблюдение</h3>
      <p>Начните с низкой цены и месяц записывайте две вещи: сколько сообщений приходит в неделю и сколько времени уходит на ответы. Если сообщений много и большинство повторяются, поднимите цену или опубликуйте пост с ответами на частые вопросы. Если писать почти перестали, цена стала барьером — снизьте её.</p>
      <h3>Пример двух каналов</h3>
      <p>В небольшом образовательном канале автор сам отвечает на каждый вопрос и черпает из них идеи для новых постов. Ему выгодна низкая цена: каждый вопрос — сырьё для контента.</p>
      <p>В крупный новостной канал каждый день может приходить множество сообщений вида «это правда?», и команда не успевает ответить всем. Здесь символическая цена помогает держать входящие в чистоте. Для тех, у кого действительно важная информация, отдельный канал связи можно указать в закреплённом посте.</p>
      <h3>Частые ошибки при выборе цены</h3>
      <ul>
        <li><b>Нет ответа.</b> Подписчик заплатил за сообщение, а ответа не дождался — доверие уходит быстро. Если нет времени отвечать, лучше открыто написать срок ответа, чем просто поднимать цену.</li>
        <li><b>Скрытая цена.</b> Если подписчик узнаёт цену только в момент отправки, многие передумают. Укажите её заранее в закреплённом посте.</li>
        <li><b>Одна цена на всё.</b> Вопрос, консультация и реклама — разные вещи. Напомните, что для рекламы есть отдельный путь.</li>
      </ul>
      <Notice label={"Важно"}>Какая доля Stars из личных сообщений канала остаётся владельцу, мы в официальных источниках в виде точного процента для каналов не нашли. Считайте по показателям монетизации в приложении.</Notice>
      <h2 id="reklama-sorovlarini-direct-messages-orqali">Как принимать рекламные запросы через личные сообщения канала?</h2>
      <p>Брать деньги с рекламодателя через цену сообщения не обязательно: для него есть отдельный путь. По технической документации, через личные сообщения канала можно предлагать посты, в том числе платные. В <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">обновлении от 1 июля 2025 года</a> сказано, что предложенные посты приходят в канал именно через личные сообщения.</p>
      <p>Предлагающий может предложить владельцу Telegram Stars или Toncoin за публикацию поста. Владелец получает вознаграждение через 24 часа после публикации. Что будет, если удалить пост раньше, в источниках этой статьи не сказано, поэтому надёжнее не трогать его хотя бы 24 часа.</p>
      <p>Разницу между двумя видами оплаты учитывайте при договорённости:</p>
      <CompareTable
        headers={["Вид оплаты", "Риск возврата", "Что это значит для владельца"]}
        rows={[
          ["Telegram Stars", "Stars покупаются через сторонних провайдеров вроде Apple, а они могут вернуть покупателю деньги в течение 21 дня", "При крупной сумме за рекламу держите этот риск в уме"],
          ["Toncoin", "Покупатель не может вернуть платёж", "Нужно уметь работать с кошельком и криптовалютой"],
        ]}
      />
      <p>Общие правила возврата Stars описаны в <Link href="/blog/telegram-stars-qaytarib-olish">статье о возврате Stars</Link>. Может ли владелец заранее сам задать цену за предложенный пост или только принимает пришедшие предложения, в этой статье не подтверждено.</p>
      <h2 id="adminlar-obunachilarga-qanday-javob-beradi">Как админы отвечают подписчикам?</h2>
      <p>Если один человек не справляется с входящими, подключите админов. Договоритесь о правилах заранее:</p>
      <ul>
        <li><b>Выдайте право.</b> В технической документации упоминаются админы с правом manage_direct_messages. Как этот пункт называется в списке прав админа в приложении, мы не подтвердили — ищите по смыслу. Давайте это право только тем, кто будет отвечать на сообщения.</li>
        <li><b>Говорите одним голосом.</b> Ответ уходит от имени канала, и подписчик считает, что общается с самим каналом. Договоритесь в команде о форме обращения («вы» или «ты»), подписи и эмодзи.</li>
        <li><b>Распределите диалоги.</b> С каждым подписчиком открывается свой диалог. Решите, кто за какие отвечает: например, один админ — за технические вопросы, другой — за предложения о сотрудничестве.</li>
        <li><b>Назначьте срок ответа.</b> Правило «отвечаем в течение рабочего дня» сразу объясняет подписчику, который заплатил за сообщение, чего ему ждать.</li>
        <li><b>Заготовьте шаблоны.</b> Короткие готовые ответы на частые вопросы экономят время.</li>
      </ul>
      <p>Всё в этом разделе — рекомендации автора, а не правила Telegram.</p>
      <h2 id="obunachiga-yozishni-qanday-qulay-qilish">Как сделать так, чтобы подписчику было удобно писать?</h2>
      <p>Если подписчик платит за сообщение, он должен заранее понимать, что получит. Помогает несколько простых привычек:</p>
      <ul>
        <li><b>Закреплённый пост.</b> Укажите в нём цену сообщения, темы, по которым можно писать, и срок ответа.</li>
        <li><b>Пост с частыми вопросами.</b> Ответьте на самые популярные вопросы в одном посте. Тогда подписчик не тратит Stars на простой вопрос, а вам приходит меньше повторов.</li>
        <li><b>Предупреждайте о смене цены.</b> Неожиданная цена подрывает доверие.</li>
      </ul>
      <p>Пример закреплённого поста:</p>
      <Notice label={"Важно"}>Каналу можно написать в личные сообщения. Цена сообщения: … Stars. Темы: курс, материалы, сотрудничество. Ответ: в течение рабочего дня. Для рекламы используйте функцию предложения поста.</Notice>
      <p>Если цена назначена, у подписчика должно хватать Stars. Что именно покажет приложение при нехватке баланса, мы подтвердить не смогли, поэтому в закреплённом посте стоит напомнить: «перед отправкой проверьте баланс Stars».</p>
      <p>Подписчик из Узбекистана может купить Stars за сумы через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Нужен только @username — пароль и SMS-код не запрашиваются, заказ обычно приходит за несколько секунд. При переводе на карту UzCard/HUMO или оплате с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Подробности — на <Link href="/stars">странице Stars</Link> и в <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">руководстве по покупке Stars</Link>.</p>
      <p>Учтите: StarsPaymee не покупает Stars у пользователей. Продать боту Stars, заработанные в канале, не получится.</p>
      <h2 id="dm-star-reaksiyalari-va-pullik">Личные сообщения, Star-реакции и платная подписка: что для чего?</h2>
      <p>Получать Stars в канале можно несколькими способами, и они не заменяют друг друга:</p>
      <CompareTable
        headers={["Инструмент", "Кто и за что платит", "Польза для владельца"]}
        rows={[
          ["Личные сообщения канала", "Подписчик — за личное сообщение владельцу", "Управление потоком вопросов и доход от консультаций"],
          ["Star-реакции", "Подписчик — чтобы поддержать понравившийся пост", "Видно, какие посты ценят"],
          ["Платная подписка", "Подписчик — ежемесячно в Stars за доступ к каналу", "Регулярный доход, закрытый контент"],
          ["Предложенный пост", "Рекламодатель — за публикацию в канале", "Реклама согласуется в одном диалоге"],
        ]}
      />
      <p>О реакциях читайте в <Link href="/blog/telegram-star-reaksiyalari">статье про Star-реакции</Link>, о закрытом канале — в <Link href="/blog/telegram-pullik-kanal-stars-obuna">статье о платной подписке на канал</Link>. Все способы вместе собраны в <Link href="/blog/telegram-kanal-stars-monetizatsiya">руководстве по монетизации канала</Link>.</p>
      <p>Инструменты можно совмещать. Например, в публичном канале оставить личку как фильтр от спама, а глубокие материалы выдавать по платной подписке.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">Что делать с заработанными Stars?</h2>
      <p>Здесь нужен осторожный ответ: проверенные данные в основном относятся к 2024 году.</p>
      <p>Согласно <a href={"https://telegram.org/blog/superchannels-star-reactions-subscriptions"} target="_blank" rel="noopener noreferrer">блогу 2024 года</a>, владельцы каналов могли конвертировать Stars от Star-реакций в вознаграждения в Toncoin или в субсидированную рекламу. В том же блоге говорилось, что на рекламу, оплаченную Stars, даётся дополнительная скидка 30%.</p>
      <Notice label={"Важно"}>Это данные 2024 года. Действуют ли они сейчас, и в частности для Stars из личных сообщений канала, в этой статье не проверялось.</Notice>
      <p>Порядок вывода через Fragment здесь тоже не подтверждён. Накопленные Stars и доступные действия ищите в разделе монетизации канала в приложении. Примерный процент дохода от личных сообщений, который остаётся владельцу, мы не называем.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/direct-to-channel-trim-voice-and-more", label: "Direct Messages for Channels, Voice Trimming, Topic Tabs and HD Photos" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/api/monoforum", label: "Direct messages to channels" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions", label: "Super Channels, Star Reactions and Subscriptions" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Нужен ли подписчику Premium, чтобы написать каналу в личные сообщения?", answer: "Ни в блоге Telegram, ни в FAQ не сказано, что для сообщения каналу нужен Premium. Если владелец назначил цену, подписчику понадобятся Stars. Premium требуется, чтобы включить платные сообщения в личном аккаунте." },
  { question: "Если включить Direct Messages, сообщения подписчиков смешаются с моими личными чатами?", answer: "Нет. По данным Telegram, сообщения подписчиков попадают в отдельный интерфейс и не появляются в списке ваших личных переписок." },
  { question: "Если я отвечу подписчику, он увидит мой личный аккаунт?", answer: "По технической документации, ответ уходит от имени канала. Виден ли ваш профиль каким-то другим способом, официальные источники не подтверждают, так что проверьте со второго аккаунта." },
  { question: "Личные сообщения канала и платные сообщения в личном аккаунте — это одно и то же?", answer: "Нет. В первом случае подписчик пишет каналу. Во втором плату берут, когда в ваш личный профиль пишет человек не из контактов, и для включения нужен Premium." },
  { question: "Можно ли потом поменять цену сообщения?", answer: "Где и как меняется цена, в источниках этой статьи отдельно не описано, поэтому начните с настроек Direct Messages канала. Если поменяли цену, обновите её и в закреплённом посте." },
  { question: "Могут ли подписчикам отвечать админы?", answer: "Да, в технической документации упоминаются админы с правом управлять личными сообщениями канала. Выдавайте это право только тем, кто отвечает на сообщения." },
  { question: "Где подписчику купить Stars за сумы, чтобы написать каналу?", answer: `В @StarsPaymee_bot, нужен только @username: при переводе на карту или оплате с баланса бота 1 Stars стоит ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars.` },
  { question: "Рекламодатель предложил пост через личку канала — когда придут деньги?", answer: "По объявлению Telegram от июля 2025 года, вознаграждение приходит через 24 часа после публикации. Всё это время пост лучше не трогать." },
  { question: "Могут ли вернуть оплату за рекламу, если платили в Stars?", answer: "Могут: Stars покупают через провайдеров вроде Apple, а они вправе вернуть деньги покупателю в течение 21 дня. Платёж в Toncoin покупатель вернуть не может." },
  { question: "Можно ли продать заработанные Stars в StarsPaymee?", answer: "Нет, StarsPaymee не покупает Stars у пользователей. Что можно сделать с накопленными Stars, смотрите в разделе монетизации канала в приложении." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>A channel owner turns on direct messages under Channel Settings &gt; Direct Messages. Subscribers can then send the channel private messages. You can also charge a price in Stars for each message. Official sources don’t recommend a price. Our suggestion: keep it low if you want feedback, use a token price to block spam and charge more for personal advice.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kanal-direct-messages-nima-va", label: "What are channel direct messages, and when did they launch?" },
          { href: "#obunachi-kanalga-qayerdan-yozadi-va", label: "Where does a subscriber write to a channel, and where does the message go?" },
          { href: "#direct-messagesni-kanal-sozlamalarida-qanday", label: "How do you turn on direct messages in channel settings?" },
          { href: "#har-xabarga-qancha-stars-qoygan", label: "How many Stars should you charge per message?" },
          { href: "#reklama-sorovlarini-direct-messages-orqali", label: "How should you handle ad requests through direct messages?" },
          { href: "#adminlar-obunachilarga-qanday-javob-beradi", label: "How do admins reply to subscribers?" },
          { href: "#obunachiga-yozishni-qanday-qulay-qilish", label: "How can you make it easier for subscribers to write?" },
          { href: "#dm-star-reaksiyalari-va-pullik", label: "DMs, Star reactions or paid subscriptions: which one is for what?" },
          { href: "#ishlangan-stars-bilan-nima-qilish", label: "What can you do with the Stars you earn?" },
        ]}
      />
      <h2 id="kanal-direct-messages-nima-va">What are channel direct messages, and when did they launch?</h2>
      <p>Telegram announced the feature in its <a href={"https://telegram.org/blog/direct-to-channel-trim-voice-and-more"} target="_blank" rel="noopener noreferrer">June 3, 2025 update</a>. A subscriber sends a private message to the channel and talks with the owner and admins in a separate chat. The developer <a href={"https://core.telegram.org/api/monoforum"} target="_blank" rel="noopener noreferrer">technical documentation</a> calls this message section a “monoforum.”</p>
      <p>The owner can charge a fee in Stars for each message. The <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> gives the reason: to keep the inbox manageable. So a price can bring in income, and it can also cut down on unwanted messages.</p>
      <p>This isn’t the same as paid messages on a personal account. There, a Premium user sets a price for messages from people who aren’t in their contacts. Our <Link href="/blog/telegram-pulli-xabarlar-paid-messages">article on paid messages</Link> covers that feature.</p>
      <Notice label={"Important"}>This article is based on Telegram’s announcements from June and July 2025. Menu names or terms may have changed in later updates, so check the settings in your own app as well.</Notice>
      <h2 id="obunachi-kanalga-qayerdan-yozadi-va">Where does a subscriber write to a channel, and where does the message go?</h2>
      <p>Once the feature is on, here’s how it works for the subscriber and the owner:</p>
      <ul>
        <li><b>Where to write.</b> The subscriber taps the message bubble in the channel’s bottom bar.</li>
        <li><b>No need to join.</b> The technical documentation says that, unlike a regular group or forum, a monoforum doesn’t have to be joined.</li>
        <li><b>A separate section.</b> Subscriber messages show up in a new streamlined interface, apart from the owner’s personal chats. Your chats with friends and family won’t get mixed up with subscriber questions.</li>
        <li><b>One conversation per person.</b> Each conversation (topic) is tied to exactly one user and holds only that user’s message history. This makes things easier for the owner, because you see who asked what person by person, not in one long list.</li>
        <li><b>Replies come from the channel.</b> The documentation says replies are sent on behalf of the channel linked to the monoforum. We couldn’t confirm in official sources whether the owner’s or admin’s personal profile can be seen some other way. Check it yourself with a test account.</li>
      </ul>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="direct-messagesni-kanal-sozlamalarida-qanday">How do you turn on direct messages in channel settings?</h2>
      <p>You do this from the channel owner’s account. The steps:</p>
      <Steps>
        <Step title={"Open the channel"}>sign in as the owner and tap the channel name.</Step>
        <Step title={"Go to settings"}>choose Channel Settings, then Direct Messages.</Step>
        <Step title={"Turn the feature on"}>subscribers can now send the channel private messages.</Step>
        <Step title={"Set a price"}>choose how many Stars each message costs. We haven’t confirmed the minimum or maximum price, or whether a free option exists, so go by the values your app shows.</Step>
        <Step title={"Test it"}>open the channel from another account and send a message with the bubble in the bottom bar. Check that it lands in the channel’s own section, not in your personal chats, and that your reply goes out under the channel’s name.</Step>
      </Steps>
      <Notice label={"Important"}>Section names can differ by app language and version. In another interface language, look for the item that means the same thing.</Notice>
      <h2 id="har-xabarga-qancha-stars-qoygan">How many Stars should you charge per message?</h2>
      <p>We found no pricing advice in official sources. The table below is our suggestion, not a rule. Base the price on what you want from your inbox, not on how big the channel is.</p>
      <CompareTable
        headers={["Goal", "Price level", "Why"]}
        rows={[
          ["Collecting feedback and questions", "Free or the lowest price (if the app allows it)", "Subscribers write without thinking twice, and you get more feedback"],
          ["Blocking spam", "Token price", "Random messages drop off, but people with real questions still write"],
          ["Personal advice or analysis", "Higher", "Your time gets paid for, and you can give each reply more attention"],
          ["Ad requests", "Not the message price", "There’s a separate suggested post feature for this (see below)"],
        ]}
      />
      <h3>The first month: a low price and some tracking</h3>
      <p>Start with a low price and track two things for a month: how many messages arrive each week and how long replying takes. If you get a lot of messages and most are repeat questions, raise the price or publish a FAQ post. If almost nothing comes in, the price is putting people off, so lower it.</p>
      <h3>Two example channels</h3>
      <p>On a small education channel, the author answers every question personally and gets new post ideas from them. A low price makes sense here, since every question is raw material for content.</p>
      <p>A large news channel may get lots of “is this true?” messages every day, more than the team can answer. Here a token price keeps the inbox cleaner. You can list a separate contact for people with important tips in a pinned post.</p>
      <h3>Common pricing mistakes</h3>
      <ul>
        <li><b>Not replying.</b> If a subscriber paid to write and never hears back, trust goes fast. If you don’t have time to reply, it’s better to state your reply time openly than to raise the price.</li>
        <li><b>Hiding the price.</b> If subscribers only find out the price when they start typing, many will back out. Show it ahead of time in a pinned post.</li>
        <li><b>One price for everything.</b> Questions, advice and ads are different things. Remind people that ads have their own route.</li>
      </ul>
      <Notice label={"Important"}>We couldn’t find an exact percentage in official sources for how much of the Stars from channel direct messages goes to the owner. Base your numbers on the monetization stats in the app.</Notice>
      <h2 id="reklama-sorovlarini-direct-messages-orqali">How should you handle ad requests through direct messages?</h2>
      <p>You don’t need to charge advertisers through the message price, because there’s a separate route for them. The technical documentation says direct messages can also be used to suggest channel posts, including paid ones. The <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">July 1, 2025 update</a> says suggested posts reach the channel through direct messages.</p>
      <p>The person suggesting the post offers the owner Telegram Stars or Toncoin in exchange for publishing it. The owner gets the reward 24 hours after the post goes up. Our sources don’t say what happens if the post is deleted before then, so it’s safer to leave it alone for at least 24 hours.</p>
      <p>Keep the difference between the two payment types in mind when you agree on a deal:</p>
      <CompareTable
        headers={["Payment type", "Refund risk", "What it means for the owner"]}
        rows={[
          ["Telegram Stars", "Stars are bought through third-party providers like Apple, which may refund buyers within 21 days", "Keep this risk in mind for large ad deals"],
          ["Toncoin", "The buyer can’t refund the payment", "You need to know how to use a wallet and crypto"],
        ]}
      />
      <p>Our <Link href="/blog/telegram-stars-qaytarib-olish">article on Stars refunds</Link> covers the general refund rules. We haven’t confirmed whether the owner can set a suggested post price in advance or can only accept offers that come in.</p>
      <h2 id="adminlar-obunachilarga-qanday-javob-beradi">How do admins reply to subscribers?</h2>
      <p>If one person can’t keep up with the inbox, admins can help. Agree on how you’ll work ahead of time:</p>
      <ul>
        <li><b>Grant the right.</b> The technical documentation mentions admins with the manage_direct_messages right. We haven’t confirmed what this item is called in the app’s admin rights list, so look for the one with that meaning. Only give it to people who will be replying to messages.</li>
        <li><b>Speak with one voice.</b> Replies go out under the channel’s name, so subscribers feel they’re talking to the channel itself. Agree as a team on tone (formal or casual), sign-offs and emoji use.</li>
        <li><b>Split up the conversations.</b> Each subscriber gets their own conversation. Decide who covers which ones: for example, one admin takes technical questions and another takes partnership offers.</li>
        <li><b>Set a reply time.</b> A rule like “we reply within business days” tells a paying subscriber exactly what to expect.</li>
        <li><b>Prepare saved replies.</b> Short templates for frequent questions save time.</li>
      </ul>
      <p>The habits in this section are our suggestions, not Telegram rules.</p>
      <h2 id="obunachiga-yozishni-qanday-qulay-qilish">How can you make it easier for subscribers to write?</h2>
      <p>A subscriber who pays to write should know what they’ll get in advance. A few simple habits help:</p>
      <ul>
        <li><b>A pinned post.</b> State the message price, the topics people can write about and your reply time.</li>
        <li><b>A FAQ post.</b> Answer the most common questions in one post. Subscribers won’t spend Stars on simple questions, and you’ll get fewer repeat messages.</li>
        <li><b>Warn people before changing the price.</b> A surprise price makes subscribers trust you less.</li>
      </ul>
      <p>Sample pinned post:</p>
      <Notice label={"Important"}>You can send this channel a private message. Price per message: … Stars. Topics: the course, materials, partnerships. Replies: within business days. For ads, please use the suggested post feature.</Notice>
      <p>If you set a price, subscribers need enough Stars. We couldn’t confirm what the app shows when someone’s balance is too low, so it’s a good idea to add “check your Stars balance before writing” to the pinned post.</p>
      <p>Subscribers in Uzbekistan can buy Stars in sums through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. All you need is an @username. No password or SMS code is asked for, and orders usually arrive within a few seconds. One Star costs {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. More details are on the <Link href="/stars">Stars page</Link> and in the <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">guide to buying Stars</Link>.</p>
      <p>Note: StarsPaymee doesn’t buy Stars from users. You can’t sell the Stars your channel earned to the bot.</p>
      <h2 id="dm-star-reaksiyalari-va-pullik">DMs, Star reactions or paid subscriptions: which one is for what?</h2>
      <p>A channel can earn Stars in several ways, and they don’t replace each other:</p>
      <CompareTable
        headers={["Tool", "Who pays and for what", "What the owner gets"]}
        rows={[
          ["Channel direct messages", "A subscriber, to send the owner a private message", "Control over the flow of questions and income from advice"],
          ["Star reactions", "A subscriber, to support a post they liked", "A view of which posts people value"],
          ["Paid subscription", "A subscriber, paying monthly in Stars for access to the channel", "Steady income and members-only content"],
          ["Suggested post", "An advertiser, to get a post published on the channel", "Ads agreed on in a single conversation"],
        ]}
      />
      <p>Read about reactions in our <Link href="/blog/telegram-star-reaksiyalari">Star reactions article</Link> and about private channels in the <Link href="/blog/telegram-pullik-kanal-stars-obuna">paid channel subscription article</Link>. To see every option together, there’s a <Link href="/blog/telegram-kanal-stars-monetizatsiya">channel monetization guide</Link>.</p>
      <p>You can use these tools together. For example, a public channel might keep DMs as a spam filter and offer in-depth material through a paid subscription.</p>
      <h2 id="ishlangan-stars-bilan-nima-qilish">What can you do with the Stars you earn?</h2>
      <p>This one needs a careful answer, because most of the verified information dates from 2024.</p>
      <p>According to a <a href={"https://telegram.org/blog/superchannels-star-reactions-subscriptions"} target="_blank" rel="noopener noreferrer">2024 blog post</a>, channel owners could convert Stars from Star reactions into Toncoin rewards or subsidized ads. The same post said ads bought with Stars would get an extra 30% discount.</p>
      <Notice label={"Important"}>This is 2024 information. We haven’t checked whether it still applies, or whether it applies to Stars earned through channel direct messages.</Notice>
      <p>We also couldn’t confirm how withdrawal through Fragment works. Check your earned Stars and the available options in the app’s channel monetization section. We won’t guess at what share of direct message income the owner keeps.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/direct-to-channel-trim-voice-and-more", label: "Direct Messages for Channels, Voice Trimming, Topic Tabs and HD Photos" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/api/monoforum", label: "Direct messages to channels" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions", label: "Super Channels, Star Reactions and Subscriptions" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Does a subscriber need Premium to message a channel?", answer: "Neither Telegram’s blog nor its FAQ says Premium is needed to message a channel. If the owner has set a price, the subscriber needs Stars. Premium is only needed to turn on paid messages for a personal account." },
  { question: "If I turn on direct messages, will subscriber messages get mixed in with my personal chats?", answer: "No. Telegram says subscriber messages go to a separate interface and aren’t added to your personal chat list." },
  { question: "When I reply to a subscriber, can they see my personal account?", answer: "The technical documentation says replies go out under the channel’s name. Official sources don’t confirm whether your profile can be seen some other way, so test it from a second account." },
  { question: "Are channel DMs the same as paid messages on a personal account?", answer: "No. With channel DMs, subscribers write to the channel. With paid messages, you charge people outside your contacts who write to your personal profile, and turning that on requires Premium." },
  { question: "Can I change the message price later?", answer: "Our sources don’t say exactly where or how to change it, so open the channel’s Direct Messages settings first. If you change the price, update it in your pinned post too." },
  { question: "Can admins reply to subscribers as well?", answer: "Yes. The technical documentation mentions admins who have the right to manage direct messages. Only give that right to people whose job is to reply." },
  { question: "Where can a subscriber buy Stars in sums to message a channel?", answer: `Through @StarsPaymee_bot, using just an @username. One Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card transfer or from the bot balance, and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} through Click, Payme, Uzum or Paynet. The minimum order is 50 Stars.` },
  { question: "If an advertiser suggests a post by DM, when do I get paid?", answer: "Telegram’s July 2025 announcement says the reward arrives 24 hours after the post goes up. It’s safer not to touch the post during that time." },
  { question: "Can an ad payment made in Stars be refunded?", answer: "Yes. Stars are bought through providers like Apple, which may refund buyers within 21 days. A buyer can’t refund a payment made in Toncoin." },
  { question: "Can I sell the Stars I’ve earned to StarsPaymee?", answer: "No, StarsPaymee doesn’t buy Stars from users. Check the app’s channel monetization section to see what you can do with Stars you’ve earned." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  keywords: ["telegram kanal direct messages stars","kanalga shaxsiy xabar yozish telegram","telegram kanal xabar narxi stars","kanal direct messages yoqish","obunachilar kanalga yozishi","telegram kanal pullik xabar","taklif qilingan post telegram","личные сообщения в канал телеграм","платные сообщения канал telegram stars","как включить сообщения в канале телеграм","direct messages канал телеграм цена"],
  howToSteps: [
    { name: "Kanalni oching", text: "ega akkauntidan kirib, kanal nomini bosing." },
    { name: "Sozlamalarga kiring", text: "Channel Settings, keyin Direct Messages bo‘limini tanlang." },
    { name: "Funksiyani yoqing", text: "shundan keyin obunachilar kanalga shaxsiy xabar yoza oladi." },
    { name: "Narxni tanlang", text: "har bir xabar uchun necha Stars olinishini belgilang. Eng kam va eng ko‘p chegara, shuningdek narxsiz rejim bor-yo‘qligini bu maqolada tasdiqlamadik, shuning uchun ilovada ko‘ringan qiymatlarga qarang." },
    { name: "Sinab ko‘ring", text: "boshqa akkauntdan kanalga kirib, pastki paneldagi pufakcha orqali xabar yuboring. Xabar shaxsiy chatlarga emas, kanalning alohida bo‘limiga tushganini va javobingiz kanal nomidan borganini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Telegram kanalda direct messages: qanday yoqiladi va xabarga qancha Stars?",
      excerpt: "Direct messages kanal sozlamalaridagi Direct Messages bo‘limida yoqiladi, har xabar narxini esa ega Stars’da o‘zi tanlaydi. Maqolada narx tanlash jadvali, adminlar ishi va DM orqali keladigan post takliflari bor.",
      metaTitle: "Telegram kanalda direct messages",
      metaDescription: "Direct messages kanal sozlamalaridagi Direct Messages bo‘limida yoqiladi, har xabar narxini esa ega Stars’da o‘zi tanlaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Direct Messages в канале Telegram: как включить и сколько ставить Stars",
      excerpt: "Direct Messages включаются в настройках канала, а цену в Stars за каждое сообщение владелец выбирает сам. В статье — таблица выбора цены, работа админов и предложения постов через личку канала.",
      metaTitle: "Direct Messages в канале Telegram",
      metaDescription: "Direct Messages включаются в настройках канала, а цену в Stars за каждое сообщение владелец выбирает сам.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram channel direct messages: how to enable them and set a Stars price",
      excerpt: "Owners turn on direct messages in the channel’s Direct Messages settings and choose a Stars price for each message. Covers a pricing table, how admins handle replies and paid post offers that arrive by DM.",
      metaTitle: "Telegram channel direct messages",
      metaDescription: "Owners turn on direct messages in the channel’s Direct Messages settings and choose a Stars price for each message.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
