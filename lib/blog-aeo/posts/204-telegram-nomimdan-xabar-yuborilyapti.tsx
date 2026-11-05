import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nomimdan-xabar-yuborilyapti";

/**
 * Telegram nomimdan xabar yuborilyapti: seans va botlarni tekshirish
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: «Bu xabar uchun bloklanasiz» havolasini ochib qo'ygan Telegram foydalanuvchisi do'stlariga o'z nomidan g'alati xabar ketganini ko'rib, «telegram nomimdan xabar yuborilyapti» kabi so'rov bilan buni qanday to'xtatish, faol seanslar va ulangan botlarni qanday tekshirish va akkauntni cheklovdan qanday saqlashni qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://telegram.org/faq_spam
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
  return <p>Do‘stlaringiz sizdan siz yozmagan xabar yoki havola olgan bo‘lsa, avval oqimni to‘xtating. Notanish qurilmalar seansini yoping, yaqinda ochilgan botlarni to‘xtating, parol va kirish himoyasini yangilang. Keyin yaqinlaringizni havolasiz ogohlantiring. Cheklov xabarning o‘zidan emas, «Report spam» shikoyatlarini moderatorlar ko‘rib chiqqanidan keyin qo‘yiladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#nomimdan-xabar-ketyapti-birinchi-daqiqalarda", label: "Nomimdan xabar ketyapti: birinchi daqiqalarda nima qilish kerak?" },
          { href: "#xabar-rostdan-mening-akkauntimdan-ketganmi", label: "Xabar rostdan mening akkauntimdan ketganmi yoki kimdir meni taqlid qilyaptimi?" },
          { href: "#faol-seanslar-va-ulangan-qurilmalarni", label: "Faol seanslar va ulangan qurilmalarni qayerdan tekshiraman?" },
          { href: "#ulangan-botlar-va-mini-applar", label: "Ulangan botlar va Mini App’lar nomimdan yoza oladimi?" },
          { href: "#havolani-ochganimning-ozi-xabar-yuborilishiga", label: "Havolani ochganimning o‘zi xabar yuborilishiga sabab bo‘lganmi?" },
          { href: "#dostlarimga-nima-deb-yozsam-vaziyatni", label: "Do‘stlarimga nima deb yozsam, vaziyatni yomonlashtirmayman?" },
          { href: "#dostlarim-report-spam-bossa-akkauntim", label: "Do‘stlarim «Report spam» bossa, akkauntim cheklanadimi va qancha muddatga?" },
          { href: "#cheklovni-nohaq-deb-bilsam-spambotga", label: "Cheklovni nohaq deb bilsam, @SpamBot’ga nima yozaman?" },
          { href: "#stars-yoki-premium-olayotganda-akkauntni", label: "Stars yoki Premium olayotganda akkauntni qanday xavfsiz saqlayman?" },
        ]}
      />
      <h2 id="nomimdan-xabar-ketyapti-birinchi-daqiqalarda">Nomimdan xabar ketyapti: birinchi daqiqalarda nima qilish kerak?</h2>
      <p>Avval xabar oqimini to‘xtating, sababni keyin qidirasiz. Nomingizdan ketgan har bir yangi xabar kimningdir «Report spam» tugmasini bosishiga sabab bo‘lishi mumkin.</p>
      <Steps>
        <Step title={"Yuborilgan xabarlarni ko‘ring"}>chatlaringizni oching va qaysi suhbatlarga qanday matn yoki havola ketganini yozib oling. Bu ro‘yxat do‘stlarni ogohlantirishda va murojaat yozishda kerak bo‘ladi.</Step>
        <Step title={"Notanish qurilmalarni yoping"}>faol seanslar ro‘yxatini tekshiring va tanimagan har bir qurilmani o‘chiring. Uni qayerdan topish quyida alohida bo‘limda yozilgan.</Step>
        <Step title={"Botlar va Mini App’larni ko‘rib chiqing"}>yaqinda ochgan, endi tanimaydigan botlarni to‘xtating va bloklang.</Step>
        <Step title={"Parol va kirish himoyasini yangilang"}>ikki bosqichli tekshiruv parolini qo‘ying yoki almashtiring. Batafsil: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya qo‘llanmasi</Link>.</Step>
        <Step title={"Do‘stlarni ogohlantiring"}>qisqa, havolasiz xabar yozing. Avval g‘alati xabar olgan odamlardan boshlang.</Step>
      </Steps>
      <Notice label={"Muhim"}>Telegram’ning seanslar va akkaunt buzilishi bo‘yicha rasmiy ko‘rsatmalari bu maqolada alohida tekshirilmagan. Menyu nomlari ilova versiyasi va qurilmaga qarab farq qilishi mumkin.</Notice>
      <h2 id="xabar-rostdan-mening-akkauntimdan-ketganmi">Xabar rostdan mening akkauntimdan ketganmi yoki kimdir meni taqlid qilyaptimi?</h2>
      <p>«Nomimdan xabar ketdi» degan gap ikki xil vaziyatni bildirishi mumkin. Birinchisida xabarni haqiqatan sizning akkauntingiz yuborgan. Ikkinchisida kimdir ismingiz va rasmingizni ko‘chirib, alohida akkaunt ochgan va do‘stlaringizga o‘shandan yozgan. Choralar har xil, shuning uchun avval qaysi biri ekanini aniqlang.</p>
      <CompareTable
        headers={["Belgi", "Nimani anglatishi mumkin", "Nima qilish kerak"]}
        rows={[
          ["Xabar sizning chatingizda yuborilgan sifatida turibdi", "Akkaunt yoki ochiq qolgan seans ishlatilgan", "Seanslarni yoping, parolni yangilang"],
          ["Do‘stingizga kelgan xabar boshqa username’dan", "Sizga taqlid qilayotgan alohida akkaunt", "Username’ni solishtiring, o‘sha profil ustidan shikoyat qiling"],
          ["Xabar faqat bitta guruhda paydo bo‘lgan", "Guruhdagi bot yoki kimgadir berilgan admin huquqi", "Guruh adminlari va botlar ro‘yxatini tekshiring"],
          ["Sizning chatlaringizda iz yo‘q, do‘stda esa bor", "Ko‘pincha taqlid akkaunti, lekin izlar o‘chirilgan bo‘lishi ham mumkin", "Seanslarni baribir tekshiring"],
        ]}
      />
      <p>Tekshirishning oddiy usuli bor. Do‘stingizdan xabar kelgan profilni ochib, undagi username’ni sizga yozib yuborishini so‘rang. Uni o‘zingiznikiga solishtiring: bitta harf farqi, qo‘shimcha nuqta yoki pastki chiziq taqlid belgisi. O‘z username’ingiz qayerda turishini bilmasangiz, <Link href="/blog/telegram-stars-username-qanday-topiladi">username qanday topiladi</Link> qo‘llanmasiga qarang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="faol-seanslar-va-ulangan-qurilmalarni">Faol seanslar va ulangan qurilmalarni qayerdan tekshiraman?</h2>
      <p>Akkauntingizga ulangan har bir telefon, kompyuter yoki brauzer alohida seans bo‘lib turadi. Odatda ular Sozlamalar ichidagi «Qurilmalar» (Devices) bo‘limida ko‘rinadi. Bo‘lim nomi va joyi versiyaga qarab boshqacha bo‘lishi mumkin.</p>
      <Steps>
        <Step title={"Bo‘limni oching"}>Sozlamalardan qurilmalar yoki faol seanslar ro‘yxatini toping.</Step>
        <Step title={"Ro‘yxatni ko‘zdan kechiring"}>quyidagilarga e’tibor bering: tanimaydigan qurilma modeli, siz bo‘lmagan shahar yoki mamlakat, anchadan beri ishlatilmagan eski kompyuter, siz ochmagan brauzer seansi.</Step>
        <Step title={"Dalilni saqlang"}>yopishdan oldin begona qurilma nomi va joylashuvini yozib oling yoki skrinshot qiling. Bu keyin murojaat yozishda asqatadi.</Step>
        <Step title={"Begonalarni yoping"}>bittasini aniq bilmasangiz ham, joriy qurilmadan boshqa barcha seanslarni yopish xavfsizroq.</Step>
        <Step title={"Qayta kirishga tayyorlaning"}>yopilgan o‘z qurilmalaringizga qaytadan kirasiz. Telefon raqamingiz qo‘lingizda ekanini va ikki bosqichli parolni eslashingizni oldindan tekshiring.</Step>
        <Step title={"Kuzating"}>yopgandan keyin do‘stlardan yana g‘alati xabar kelgan-kelmaganini so‘rang.</Step>
      </Steps>
      <p>Seanslar yopilgandan keyin ham xabarlar ketaversa, muammo boshqa joyda bo‘lishi mumkin: ulangan botda yoki sizni taqlid qilayotgan alohida akkauntda.</p>
      <h2 id="ulangan-botlar-va-mini-applar">Ulangan botlar va Mini App’lar nomimdan yoza oladimi?</h2>
      <p>Bot yoki Mini App qaysi ruxsat bilan nimaga qodirligi haqidagi texnik ma’lumot bu maqolada tasdiqlanmagan. Shuning uchun amaliy yondashuv tavsiya qilinadi: yaqinda ishonch bildirgan har bir notanish botni shubhali deb hisoblang va quyidagilarni ko‘rib chiqing.</p>
      <ul>
        <li><b>Bahona bilan ochilgan botlar</b> — «akkauntni tekshirish», «sovg‘a olish», «ovoz berish» yoki «bloklanishdan himoya» degan sabab bilan ishga tushirganlaringiz.</li>
        <li><b>Raqam yoki kod so‘ragan oynalar</b> — telefon raqamingizni ulashgan yoki kirish kodini kiritgan har qanday sahifa va Mini App.</li>
        <li><b>Keng ruxsat berilgan botlar</b> — biznes vositalari yoki chat boshqaruviga ulangan, endi eslamaydigan botlar.</li>
        <li><b>Guruh va kanallardagi botlar</b> — o‘zingiz admin bo‘lgan joylarga qo‘shilgan, vazifasi noma’lum botlar.</li>
      </ul>
      <p>Umumiy tartib oddiy. Shubhali bot chatini oching, uni to‘xtating va bloklang. So‘ng sozlamalarda unga berilgan ruxsat bo‘lsa, uni bekor qiling. Biror oynaga kirish kodi yoki parol kiritgan bo‘lsangiz, botni bloklash yetmaydi: seanslarni yopish va parolni almashtirish ham shart.</p>
      <p>Kirish paytida «Premium uchun to‘lang» yoki «SMS uchun pul» degan oynalar chiqsa, <Link href="/blog/telegramga-kirishda-premium-sms-tolov">alohida maqolani</Link> o‘qing. G‘alati xabar sovg‘a havolasi ko‘rinishida kelgan bo‘lsa, <Link href="/blog/telegram-gift-havolasini-tekshirish">gift havolasini tekshirish</Link> qo‘llanmasi yordam beradi.</p>
      <h2 id="havolani-ochganimning-ozi-xabar-yuborilishiga">Havolani ochganimning o‘zi xabar yuborilishiga sabab bo‘lganmi?</h2>
      <p>Ko‘p odam muammoni bitta havolani ochgan paytdan sanaydi. Lekin oddiy ochishning o‘zi nomingizdan avtomatik xabar yuborishini Telegram rasman tasdiqlamagan. Rad ham etmagan. Telegram buni yangi funksiya yoki yangilik sifatida e’lon qilgani ham bu maqolada tasdiqlanmagan.</p>
      <p>Amalda uch narsani o‘zingizdan so‘rang:</p>
      <ul>
        <li>Havoladan keyin biror oynaga telefon raqami, kod yoki parol kiritdimmi?</li>
        <li>Havola meni botga yoki Mini App’ga olib bordimi va u yerda «Start» yoki «Ruxsat berish» tugmasini bosdimmi?</li>
        <li>Shu kunlarda qurilmalar ro‘yxatida yangi seans paydo bo‘ldimi?</li>
      </ul>
      <p>Birortasiga javob «ha» bo‘lsa, yuqoridagi seans va bot tekshiruvini to‘liq bajaring. Hammasiga javob «yo‘q» bo‘lsa ham tekshiruvni o‘tkazib yubormang: bu bir necha daqiqa oladi, xotirjamlik esa uzoqroq saqlanadi. Shov-shuvli ogohlantirish eshitsangiz, uni <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> saytida tekshiring.</p>
      <h2 id="dostlarimga-nima-deb-yozsam-vaziyatni">Do‘stlarimga nima deb yozsam, vaziyatni yomonlashtirmayman?</h2>
      <p>Ogohlantirish ham xabar hisoblanadi. Telegram’ning <a href={"https://telegram.org/faq_spam"} target="_blank" rel="noopener noreferrer">Spam FAQ</a> sahifasiga ko‘ra, shikoyatga rasm, taklif havolasi yoki oddiy «salom» ham sabab bo‘lishi mumkin. O‘sha sahifada odamlar so‘ralmagan reklama, havolalar, guruh va kanallarga taklif havolalari hamda tasodifiy rasmlarni yoqtirmasligi aytilgan.</p>
      <p>Shunga ko‘ra:</p>
      <ul>
        <li>Avval g‘alati xabar ketgan yaqin kontaktlarga yozing.</li>
        <li>Matn qisqa va havolasiz bo‘lsin. Namuna: «Mendan kelgan havolani ochmang, akkauntimni tekshiryapman. Ochib qo‘ygan bo‘lsang, ayt.»</li>
        <li>Bir xil matnni notanishlarga va katta guruhlarga ko‘paytirib yubormang.</li>
        <li>Xabar guruhga ketgan bo‘lsa, admin bilan alohida gaplashing.</li>
      </ul>
      <Notice label={"Muhim"}>Ogohlantirishga hech qanday havola qo‘shmang, hatto foydali maqola havolasini ham. Notanish odamga u yana bir shubhali xabar bo‘lib ko‘rinadi.</Notice>
      <h2 id="dostlarim-report-spam-bossa-akkauntim">Do‘stlarim «Report spam» bossa, akkauntim cheklanadimi va qancha muddatga?</h2>
      <p>Rasmiy Spam FAQ jarayonni aniq tasvirlaydi. Foydalanuvchi chatda «Report spam» tugmasini bosganda xabarlar ko‘rib chiqish uchun moderatorlarga boradi. Moderatorlar xabarlarni bunga loyiq deb topsa, akkaunt vaqtinchalik cheklanadi.</p>
      <CompareTable
        headers={["Holat", "Rasmiy FAQ’da nima deyilgan"]}
        rows={[
          ["Kimdir «Report spam» bosdi", "Xabarlar moderatorlarga ko‘rib chiqish uchun yuboriladi"],
          ["Shikoyatni kim tekshiradi", "Barcha shikoyatlarni odam-moderatorlar ham tekshiradi"],
          ["Birinchi holat, sanoat miqyosidagi spamer emassiz", "Akkaunt ehtimol bir necha kunga cheklanadi"],
          ["Qoidabuzarlik takrorlansa", "Bloklash muddati uzayadi; notanishlarga keraksiz yozish davom etsa, bu imkoniyat butunlay yo‘qolishi mumkin"],
          ["Cheklov paytida kimga yoza olasiz", "Raqamingizni kontakt sifatida saqlaganlarga; sizga birinchi yozgan har kimga javob bera olasiz"],
        ]}
      />
      <p>Bundan amaliy xulosa chiqadi: nomingizdan ketgan har bir yangi xabar yangi shikoyatga sabab bo‘lishi mumkin. Shuning uchun birinchi bo‘limdagi qadamlarni kechiktirmang. Cheklov tushgan taqdirda ham oila va yaqinlaringiz bilan aloqa butunlay uzilmaydi.</p>
      <h2 id="cheklovni-nohaq-deb-bilsam-spambotga">Cheklovni nohaq deb bilsam, @SpamBot’ga nima yozaman?</h2>
      <p>Spam FAQ’ga ko‘ra, cheklov noto‘g‘ri qo‘yilganiga ishonchingiz komil bo‘lsa, @SpamBot’ga murojaat qilish kerak. Telegram eng yaxshi tizimlar, algoritmlar va yaxshi tayyorlangan odamlar ham ba’zan xato qilishini o‘zi tan oladi.</p>
      <p>Bir istisno bor. Agar xabarlarni haqiqatan sizning akkauntingiz yuborgan va bunga o‘zingiz sabab bo‘lgan bo‘lsangiz, rasmiy sahifaga ko‘ra cheklovni muddatidan oldin olib bo‘lmaydi. Akkaunt nazoratdan chiqqan holatni bu bilan chalkashtirmang. Murojaatda aynan nima bo‘lganini tushuntiring:</p>
      <ul>
        <li>akkaunt qachon nazoratdan chiqqanini va xabarlarni siz yozmaganingizni;</li>
        <li>qaysi begona qurilma topilgani, u yopilgani va parol yangilangani;</li>
        <li>shubhali bot to‘xtatilgani, agar shunday bo‘lgan bo‘lsa.</li>
      </ul>
      <p>Javob qachon kelishi yoki murojaat natija berishi haqida rasmiy ma’lumot yo‘q, shuning uchun buni hech kim va’da qila olmaydi.</p>
      <p>Yana bir nozik nuqta raqamning o‘ziga bog‘liq. Rasmiy FAQ’ga ko‘ra, ayrim raqamlar tizimning haddan tashqari qattiq javobiga sabab bo‘lishi mumkin. Bunga raqamning oldingi egasi faoliyati yoki uning muayyan virtual/VOIP raqam ekani sabab bo‘ladi. Raqamingiz yaqinda olingan bo‘lsa, buni murojaatda eslatib o‘ting.</p>
      <h2 id="stars-yoki-premium-olayotganda-akkauntni">Stars yoki Premium olayotganda akkauntni qanday xavfsiz saqlayman?</h2>
      <p>Stars va Premium xaridi akkaunt ma’lumotini so‘raydigan firibgarlar uchun ham qulay bahona. Quyidagi qoidalarni eslab qoling:</p>
      <ul>
        <li>Ishonchli xizmat parol, SMS kod yoki akkauntga kirishni so‘ramaydi. StarsPaymee’da buyurtma uchun faqat @username kerak.</li>
        <li>Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Kirish ma’lumotini hech kimga bermaysiz.</li>
        <li>Kimdir «StarsPaymee nomidan» kod yoki parol so‘rasa, bu firibgarlik belgisi. Yordam faqat <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali beriladi.</li>
        <li>Do‘stga yulduz yoki Premium yuborish uchun havola tarqatish shart emas. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>’da uning username’ini kiritasiz va so‘mda to‘laysiz.</li>
        <li>StarsPaymee — mustaqil xizmat, Telegram kompaniyasi emas.</li>
      </ul>
      <p>Stars narxi to‘lov usuliga bog‘liq. 1 ta Stars karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan to‘lansa {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma — 50 Stars. Premium narxi hamma usulda bir xil: 3 oyga {som(premium(3), "uz")}, 6 oyga {som(premium(6), "uz")}, 12 oyga {som(premium(12), "uz")}. Batafsil ma’lumot <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida. Xavf belgilari esa <Link href="/blog/telegram-stars-xavfsizmi">Stars xavfsizligi</Link> maqolasida yoritilgan.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq_spam", label: "Spam FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Telegram’da men yozmagan xabarlar ketyapti — parolni almashtirish yetarlimi?", answer: "Yo‘q, parol himoyaning faqat bir qismi. Begona seans ochiq qolsa yoki shubhali botga ruxsat berilgan bo‘lsa, xabarlar ketishda davom etishi mumkin. Shuning uchun qurilmalar ro‘yxati va botlarni ham tekshiring." },
  { question: "Barcha seanslarni yopsam, telefonimdagi chatlar o‘chib ketadimi?", answer: "Odatda boshqa seanslarni yopish joriy qurilmangizga tegmaydi, lekin bu maqolada rasmiy manba bilan tasdiqlanmagan. Yopilgan qurilmalarda qayta kirishingiz kerak bo‘ladi, shuning uchun raqam va ikki bosqichli parol qo‘lingizda bo‘lsin." },
  { question: "Do‘stim mendan kelgan havolani ochib qo‘ydi — unga nima maslahat beray?", answer: "U ham qurilmalar ro‘yxatini va yaqinda ochgan botlarini ko‘rib chiqsin. Biror oynaga kod yoki parol kiritgan bo‘lsa, begona seanslarni yopib, parolini yangilasin." },
  { question: "Cheklov tushsa, onam yoki akam bilan yozishuv to‘xtab qoladimi?", answer: "Yo‘q. Rasmiy FAQ’ga ko‘ra, raqamingizni kontaktga saqlagan odamlar bilan yozisha olasiz. Sizga birinchi yozgan har kimga javob qaytarish ham mumkin." },
  { question: "Nomimdan ketgan xabarlarni o‘chirib yuborsam, shikoyat bekor bo‘ladimi?", answer: "O‘chirish boshqalarning havolani ochib qo‘yishining oldini olishga yordam berishi mumkin. Ammo allaqachon yuborilgan shikoyatni bekor qilishi haqida rasmiy ma’lumot yo‘q." },
  { question: "Kimdir mening rasmim va ismim bilan akkaunt ochgan — nima qilaman?", answer: "O‘sha profilni ochib, Telegram’ning shikoyat imkoniyatidan foydalaning va do‘stlaringizdan ham shunday qilishni so‘rang. Yaqinlaringizga haqiqiy username’ingizni ayting, shunda ular soxtasini tez ajratadi." },
  { question: "Raqamim boshqa odamdan qolgan bo‘lsa, bu cheklovga ta’sir qiladimi?", answer: "Telegram buni istisno qilmaydi. Raqamning oldingi egasi faoliyati yoki virtual/VOIP raqam tizimning ortiqcha qattiq javobiga sabab bo‘lishi mumkin. Cheklov nohaq deb hisoblasangiz, bu holatni @SpamBot’ga yozing." },
  { question: "@SpamBot’ga yozdim, lekin cheklov qolgan — endi nima qilay?", answer: "Murojaat muddati va natijasi haqida rasmiy ma’lumot yo‘q. Birinchi holatda cheklov odatda bir necha kun davom etadi. Shu orada notanishlarga yozmang, chunki takroriy qoidabuzarlik muddatni uzaytiradi." },
  { question: "Stars yoki Premium sotib olish uchun bot SMS kod so‘rasa beraymi?", answer: "Yo‘q, kodni hech kimga bermang. StarsPaymee buyurtma uchun faqat @username so‘raydi. Kod yoki parol talab qilgan har qanday «yordamchi» firibgar hisoblanadi." },
  { question: "Cheklov paytida menga Premium yoki Stars sovg‘a qilish mumkinmi?", answer: "Spam cheklovi sovg‘a qabul qilishga ta’sir qilish-qilmasligi bu maqolada tekshirilmagan, shuning uchun buyurtmadan oldin @StarsPaymeeSupport’dan so‘rang. Shuni ham hisobga oling: faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если друзья получили от вас сообщение или ссылку, которых вы не писали, сначала остановите рассылку. Завершите сеансы на незнакомых устройствах, остановите недавно открытых ботов, обновите пароль и защиту входа. Затем предупредите близких, но без ссылок. Ограничение ставится не за само сообщение, а после того, как модераторы рассмотрят жалобы «Report spam».</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#nomimdan-xabar-ketyapti-birinchi-daqiqalarda", label: "От моего имени уходят сообщения: что делать в первые минуты?" },
          { href: "#xabar-rostdan-mening-akkauntimdan-ketganmi", label: "Сообщение правда ушло с моего аккаунта или кто-то выдаёт себя за меня?" },
          { href: "#faol-seanslar-va-ulangan-qurilmalarni", label: "Где проверить активные сеансы и подключённые устройства?" },
          { href: "#ulangan-botlar-va-mini-applar", label: "Могут ли подключённые боты и Mini App писать от моего имени?" },
          { href: "#havolani-ochganimning-ozi-xabar-yuborilishiga", label: "Могло ли само открытие ссылки привести к рассылке?" },
          { href: "#dostlarimga-nima-deb-yozsam-vaziyatni", label: "Что написать друзьям, чтобы не сделать хуже?" },
          { href: "#dostlarim-report-spam-bossa-akkauntim", label: "Если друзья нажмут «Report spam», мой аккаунт ограничат и на сколько?" },
          { href: "#cheklovni-nohaq-deb-bilsam-spambotga", label: "Считаю ограничение несправедливым: что написать в @SpamBot?" },
          { href: "#stars-yoki-premium-olayotganda-akkauntni", label: "Как сохранить аккаунт в безопасности при покупке Stars или Premium?" },
        ]}
      />
      <h2 id="nomimdan-xabar-ketyapti-birinchi-daqiqalarda">От моего имени уходят сообщения: что делать в первые минуты?</h2>
      <p>Сначала остановите поток сообщений, а причину ищите потом. Каждое новое сообщение от вашего имени может стать для кого-то поводом нажать «Report spam».</p>
      <Steps>
        <Step title={"Посмотрите отправленные сообщения"}>откройте чаты и запишите, в какие переписки и с каким текстом или ссылкой ушли сообщения. Этот список пригодится, когда будете предупреждать друзей и писать обращение.</Step>
        <Step title={"Завершите сеансы на незнакомых устройствах"}>проверьте список активных сеансов и удалите каждое устройство, которое не узнаёте. Где его найти, описано ниже в отдельном разделе.</Step>
        <Step title={"Проверьте ботов и Mini App"}>остановите и заблокируйте ботов, которых недавно запускали и которых теперь не узнаёте.</Step>
        <Step title={"Обновите пароль и защиту входа"}>установите или смените пароль двухэтапной проверки. Подробнее: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по защите аккаунта от взлома</Link>.</Step>
        <Step title={"Предупредите друзей"}>напишите короткое сообщение без ссылок. Начните с тех, кто уже получил странное сообщение.</Step>
      </Steps>
      <Notice label={"Важно"}>Официальные инструкции Telegram по сеансам и взлому аккаунта в этой статье отдельно не проверялись. Названия пунктов меню могут отличаться в зависимости от версии приложения и устройства.</Notice>
      <h2 id="xabar-rostdan-mening-akkauntimdan-ketganmi">Сообщение правда ушло с моего аккаунта или кто-то выдаёт себя за меня?</h2>
      <p>Фраза «от моего имени ушло сообщение» может описывать две разные ситуации. В первой сообщение действительно отправил ваш аккаунт. Во второй кто-то скопировал ваше имя и фото, завёл отдельный аккаунт и пишет с него вашим друзьям. Меры в этих случаях разные, поэтому сначала разберитесь, что именно произошло.</p>
      <CompareTable
        headers={["Признак", "Что это может значить", "Что делать"]}
        rows={[
          ["Сообщение видно в вашем чате как отправленное", "Использован аккаунт или оставшийся открытым сеанс", "Завершите сеансы, обновите пароль"],
          ["Сообщение пришло другу с другого username", "Отдельный аккаунт, который выдаёт себя за вас", "Сравните username, пожалуйтесь на этот профиль"],
          ["Сообщение появилось только в одной группе", "Бот в группе или кому-то выданы права администратора", "Проверьте список администраторов и ботов группы"],
          ["В ваших чатах следов нет, а у друга есть", "Чаще всего поддельный аккаунт, но следы могли и удалить", "Всё равно проверьте сеансы"],
        ]}
      />
      <p>Есть простой способ проверить. Попросите друга открыть профиль, с которого пришло сообщение, и прислать вам указанный там username. Сравните со своим: разница в одну букву, лишняя точка или подчёркивание выдают подделку. Если не знаете, где посмотреть собственный username, загляните в руководство <Link href="/blog/telegram-stars-username-qanday-topiladi">как найти username</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="faol-seanslar-va-ulangan-qurilmalarni">Где проверить активные сеансы и подключённые устройства?</h2>
      <p>Каждый телефон, компьютер или браузер, подключённый к аккаунту, — это отдельный сеанс. Обычно их видно в настройках, в разделе «Устройства» (Devices). Название и расположение раздела могут отличаться в зависимости от версии.</p>
      <Steps>
        <Step title={"Откройте раздел"}>найдите в настройках список устройств или активных сеансов.</Step>
        <Step title={"Просмотрите список"}>обратите внимание на незнакомую модель устройства, город или страну, где вас не было, старый компьютер, которым давно не пользуетесь, и сеанс в браузере, который вы не открывали.</Step>
        <Step title={"Сохраните доказательства"}>до завершения запишите название и местоположение чужого устройства или сделайте скриншот. Это пригодится при обращении.</Step>
        <Step title={"Завершите чужие сеансы"}>даже если насчёт одного из них вы не уверены, безопаснее завершить все сеансы, кроме текущего устройства.</Step>
        <Step title={"Подготовьтесь к повторному входу"}>на своих устройствах, сеансы которых вы закрыли, придётся войти заново. Заранее убедитесь, что номер телефона у вас под рукой и вы помните пароль двухэтапной проверки.</Step>
        <Step title={"Понаблюдайте"}>после завершения сеансов спросите друзей, не приходят ли им ещё странные сообщения.</Step>
      </Steps>
      <p>Если и после этого сообщения продолжают уходить, проблема может быть в другом: в подключённом боте или в отдельном аккаунте, который выдаёт себя за вас.</p>
      <h2 id="ulangan-botlar-va-mini-applar">Могут ли подключённые боты и Mini App писать от моего имени?</h2>
      <p>Технические сведения о том, что бот или Mini App может делать с теми или иными разрешениями, в этой статье не подтверждены. Поэтому разумен практический подход: считайте подозрительным каждого незнакомого бота, которому вы недавно доверились, и проверьте следующее.</p>
      <ul>
        <li><b>Боты, запущенные под предлогом</b> — те, что вы открыли ради «проверки аккаунта», «получения подарка», «голосования» или «защиты от блокировки».</li>
        <li><b>Окна, которые просили номер или код</b> — любая страница и Mini App, где вы поделились номером телефона или ввели код входа.</li>
        <li><b>Боты с широкими разрешениями</b> — подключённые к бизнес-инструментам или управлению чатами, о которых вы уже не помните.</li>
        <li><b>Боты в группах и каналах</b> — добавленные туда, где вы администратор, и непонятно чем занятые.</li>
      </ul>
      <p>Порядок действий простой. Откройте чат с подозрительным ботом, остановите и заблокируйте его. Затем, если в настройках у него остались разрешения, отзовите их. Если вы вводили в каком-то окне код входа или пароль, одной блокировки бота мало: обязательно завершите сеансы и смените пароль.</p>
      <p>Если при входе появляются окна вроде «Оплатите Premium» или «Деньги за SMS», прочитайте <Link href="/blog/telegramga-kirishda-premium-sms-tolov">отдельную статью</Link>. Если странное сообщение пришло в виде ссылки на подарок, поможет руководство по <Link href="/blog/telegram-gift-havolasini-tekshirish">проверке ссылки на gift</Link>.</p>
      <h2 id="havolani-ochganimning-ozi-xabar-yuborilishiga">Могло ли само открытие ссылки привести к рассылке?</h2>
      <p>Многие отсчитывают проблему с момента, когда открыли какую-то ссылку. Однако Telegram официально не подтверждал, что простое открытие ссылки автоматически отправляет сообщения от вашего имени. Но и не опровергал. То, что Telegram объявлял об этом как о новой функции или новости, в этой статье тоже не подтверждено.</p>
      <p>На практике задайте себе три вопроса:</p>
      <ul>
        <li>Вводил ли я после перехода по ссылке номер телефона, код или пароль в каком-либо окне?</li>
        <li>Привела ли ссылка в бота или Mini App, и нажимал ли я там «Start» или «Разрешить»?</li>
        <li>Появился ли в эти дни новый сеанс в списке устройств?</li>
      </ul>
      <p>Если хотя бы на один вопрос ответ «да», полностью пройдите проверку сеансов и ботов, описанную выше. Даже если на все вопросы ответ «нет», не пропускайте проверку: она займёт несколько минут, а спокойствие сохранится надолго. Услышали громкое предупреждение — сверьте его с сайтом <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</p>
      <h2 id="dostlarimga-nima-deb-yozsam-vaziyatni">Что написать друзьям, чтобы не сделать хуже?</h2>
      <p>Предупреждение — это тоже сообщение. Согласно странице <a href={"https://telegram.org/faq_spam"} target="_blank" rel="noopener noreferrer">Spam FAQ</a>, поводом для жалобы может стать фото, ссылка-приглашение или даже простое «привет». Там же сказано, что людям не нравится получать непрошеную рекламу, ссылки, приглашения в группы и каналы и случайные фото.</p>
      <p>Поэтому:</p>
      <ul>
        <li>Сначала напишите близким контактам, которым ушло странное сообщение.</li>
        <li>Текст должен быть коротким и без ссылок. Пример: «Не открывай ссылку, которая пришла от меня, проверяю аккаунт. Если уже открыл — скажи».</li>
        <li>Не рассылайте один и тот же текст незнакомым людям и в большие группы.</li>
        <li>Если сообщение ушло в группу, поговорите с администратором отдельно.</li>
      </ul>
      <Notice label={"Важно"}>Не добавляйте в предупреждение никаких ссылок, даже на полезную статью. Незнакомому человеку это покажется ещё одним подозрительным сообщением.</Notice>
      <h2 id="dostlarim-report-spam-bossa-akkauntim">Если друзья нажмут «Report spam», мой аккаунт ограничат и на сколько?</h2>
      <p>Официальный Spam FAQ описывает процесс чётко. Когда пользователь нажимает в чате «Report spam», сообщения отправляются модераторам на проверку. Если модераторы решат, что сообщения этого заслуживают, аккаунт временно ограничивается.</p>
      <CompareTable
        headers={["Ситуация", "Что сказано в официальном FAQ"]}
        rows={[
          ["Кто-то нажал «Report spam»", "Сообщения передаются модераторам на проверку"],
          ["Кто проверяет жалобы", "Все жалобы также проверяют модераторы-люди"],
          ["Первый случай, вы не спамер промышленного масштаба", "Скорее всего, аккаунт ограничат на несколько дней"],
          ["Нарушения повторяются", "Срок блокировки увеличивается; если продолжать писать незнакомым нежелательные сообщения, эту возможность можно потерять навсегда"],
          ["Кому можно писать во время ограничения", "Тем, у кого ваш номер сохранён в контактах; ответить можно любому, кто написал вам первым"],
        ]}
      />
      <p>Практический вывод: каждое новое сообщение от вашего имени может обернуться новой жалобой. Поэтому не откладывайте шаги из первого раздела. Даже если ограничение всё-таки наступит, связь с семьёй и близкими полностью не прервётся.</p>
      <h2 id="cheklovni-nohaq-deb-bilsam-spambotga">Считаю ограничение несправедливым: что написать в @SpamBot?</h2>
      <p>Согласно Spam FAQ, если вы уверены, что ограничение применено ошибочно, нужно обратиться в @SpamBot. Telegram сам признаёт, что даже лучшие системы, алгоритмы и хорошо обученные люди иногда ошибаются.</p>
      <p>Есть одно исключение. Если сообщения действительно отправлял ваш аккаунт и причиной были вы сами, снять ограничение досрочно, по данным официальной страницы, невозможно. Не путайте это с ситуацией, когда аккаунт вышел из-под контроля. В обращении объясните, что именно произошло:</p>
      <ul>
        <li>когда аккаунт вышел из-под вашего контроля и что сообщения писали не вы;</li>
        <li>какое чужое устройство обнаружено, что его сеанс завершён, а пароль обновлён;</li>
        <li>что подозрительный бот остановлен, если так и было.</li>
      </ul>
      <p>Официальных сведений о том, когда придёт ответ и поможет ли обращение, нет, поэтому пообещать результат не может никто.</p>
      <p>Ещё один тонкий момент связан с самим номером. Согласно официальному FAQ, некоторые номера могут вызывать чрезмерно жёсткую реакцию системы. Причина — действия прежнего владельца номера или то, что это определённый виртуальный/VOIP-номер. Если номер у вас недавно, упомяните это в обращении.</p>
      <h2 id="stars-yoki-premium-olayotganda-akkauntni">Как сохранить аккаунт в безопасности при покупке Stars или Premium?</h2>
      <p>Покупка Stars и Premium — удобный предлог и для мошенников, которые выманивают данные аккаунта. Запомните несколько правил:</p>
      <ul>
        <li>Надёжный сервис не просит пароль, SMS-код или доступ к аккаунту. В StarsPaymee для заказа нужен только @username.</li>
        <li>Premium подключается по username, через механизм подарков Telegram. Данные для входа вы никому не передаёте.</li>
        <li>Если кто-то «от имени StarsPaymee» просит код или пароль, это признак мошенничества. Поддержка работает только через <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</li>
        <li>Чтобы отправить другу звёзды или Premium, не нужно рассылать ссылки. В <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> вы вводите его username и платите в сумах.</li>
        <li>StarsPaymee — независимый сервис, а не компания Telegram.</li>
      </ul>
      <p>Цена Stars зависит от способа оплаты. 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")} при переводе с карты (UzCard/HUMO) или с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} при оплате через Click, Payme, Uzum или Paynet. Минимальный заказ — 50 Stars. Цена Premium одинакова при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Подробности — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. Признаки опасности разобраны в статье <Link href="/blog/telegram-stars-xavfsizmi">о безопасности Stars</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq_spam", label: "Spam FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "В Telegram уходят сообщения, которых я не писал, — хватит ли сменить пароль?", answer: "Нет, пароль — лишь часть защиты. Если чужой сеанс остаётся открытым или подозрительному боту выданы разрешения, рассылка может продолжиться. Поэтому проверьте ещё список устройств и ботов." },
  { question: "Если завершить все сеансы, удалятся ли чаты на моём телефоне?", answer: "Обычно завершение других сеансов не затрагивает текущее устройство, но в этой статье это не подтверждено официальным источником. На закрытых устройствах придётся войти заново, так что держите под рукой номер и пароль двухэтапной проверки." },
  { question: "Друг открыл ссылку, которая пришла от меня, — что ему посоветовать?", answer: "Пусть тоже проверит список устройств и недавно запущенных ботов. Если он вводил в каком-то окне код или пароль, ему стоит завершить чужие сеансы и обновить пароль." },
  { question: "Если меня ограничат, переписка с мамой или братом прекратится?", answer: "Нет. По официальному FAQ, вы сможете переписываться с людьми, у которых ваш номер сохранён в контактах. Ответить можно и любому, кто написал вам первым." },
  { question: "Если удалить сообщения, ушедшие от моего имени, жалоба отменится?", answer: "Удаление может помочь, чтобы другие не открыли ссылку. Но официальных сведений о том, что это отменяет уже отправленную жалобу, нет." },
  { question: "Кто-то завёл аккаунт с моим фото и именем — что делать?", answer: "Откройте этот профиль, воспользуйтесь функцией жалобы в Telegram и попросите друзей сделать то же самое. Сообщите близким свой настоящий username, чтобы они быстро отличали подделку." },
  { question: "Если номер раньше принадлежал другому человеку, это влияет на ограничение?", answer: "Telegram такое не исключает. Действия прежнего владельца номера или виртуальный/VOIP-номер могут вызвать излишне жёсткую реакцию системы. Если считаете ограничение несправедливым, напишите об этом в @SpamBot." },
  { question: "Я написал в @SpamBot, а ограничение осталось — что дальше?", answer: "Официальных данных о сроках и результате обращения нет. В первый раз ограничение обычно длится несколько дней. Пока оно действует, не пишите незнакомым: повторные нарушения продлевают срок." },
  { question: "Бот для покупки Stars или Premium просит SMS-код — давать?", answer: "Нет, никому не сообщайте код. StarsPaymee для заказа просит только @username. Любой «помощник», который требует код или пароль, — мошенник." },
  { question: "Можно ли подарить мне Premium или Stars, пока действует ограничение?", answer: "Влияет ли спам-ограничение на получение подарков, в этой статье не проверялось, поэтому перед заказом уточните в @StarsPaymeeSupport. Учтите также: на аккаунт с активной подпиской Premium бот новый заказ Premium не оформляет." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>If friends are getting messages or links you never sent, stop the flow first. Close sessions on devices you don’t recognize, stop bots you opened recently, and update your password and login protection. Then warn the people close to you, without any links. A limit doesn’t come from the message itself. It follows “Report spam” complaints that moderators have reviewed.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#nomimdan-xabar-ketyapti-birinchi-daqiqalarda", label: "Messages are going out in my name: what should I do in the first minutes?" },
          { href: "#xabar-rostdan-mening-akkauntimdan-ketganmi", label: "Did the message really come from my account, or is someone impersonating me?" },
          { href: "#faol-seanslar-va-ulangan-qurilmalarni", label: "Where do I check active sessions and connected devices?" },
          { href: "#ulangan-botlar-va-mini-applar", label: "Can connected bots and Mini Apps write in my name?" },
          { href: "#havolani-ochganimning-ozi-xabar-yuborilishiga", label: "Could simply opening a link have triggered the messages?" },
          { href: "#dostlarimga-nima-deb-yozsam-vaziyatni", label: "What should I tell my friends without making things worse?" },
          { href: "#dostlarim-report-spam-bossa-akkauntim", label: "If friends press “Report spam”, will my account be limited, and for how long?" },
          { href: "#cheklovni-nohaq-deb-bilsam-spambotga", label: "If I think the limit is unfair, what do I write to @SpamBot?" },
          { href: "#stars-yoki-premium-olayotganda-akkauntni", label: "How do I keep my account safe when buying Stars or Premium?" },
        ]}
      />
      <h2 id="nomimdan-xabar-ketyapti-birinchi-daqiqalarda">Messages are going out in my name: what should I do in the first minutes?</h2>
      <p>Stop the flow of messages first and look for the cause afterwards. Every new message sent in your name can lead someone to press “Report spam”.</p>
      <Steps>
        <Step title={"Review what was sent"}>open your chats and note which conversations got which text or link. You’ll need this list to warn friends and to write an appeal.</Step>
        <Step title={"Close unknown devices"}>check the list of active sessions and remove every device you don’t recognize. Where to find it is explained in its own section below.</Step>
        <Step title={"Go through bots and Mini Apps"}>stop and block any bots you opened recently and no longer recognize.</Step>
        <Step title={"Update your password and login protection"}>set or change your two-step verification password. More details: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">guide to protecting your account from theft</Link>.</Step>
        <Step title={"Warn your friends"}>write a short message with no links. Start with the people who already got the strange message.</Step>
      </Steps>
      <Notice label={"Important"}>Telegram’s official instructions on sessions and hacked accounts were not separately checked for this article. Menu names may differ depending on the app version and device.</Notice>
      <h2 id="xabar-rostdan-mening-akkauntimdan-ketganmi">Did the message really come from my account, or is someone impersonating me?</h2>
      <p>“Messages went out in my name” can describe two different situations. In the first, your own account really sent them. In the second, someone copied your name and photo, created a separate account and wrote to your friends from it. The fixes are different, so figure out which one it is first.</p>
      <CompareTable
        headers={["Sign", "What it may mean", "What to do"]}
        rows={[
          ["The message shows as sent in your own chat", "Your account or a session left open was used", "Close sessions, update your password"],
          ["The message your friend got came from a different username", "A separate account impersonating you", "Compare usernames, report that profile"],
          ["The message appeared in only one group", "A bot in the group or admin rights given to someone", "Check the group’s admins and bot list"],
          ["No trace in your chats, but your friend has it", "Usually an impersonator, though traces may have been deleted", "Check your sessions anyway"],
        ]}
      />
      <p>There’s a simple way to check. Ask your friend to open the profile the message came from and send you the username shown there. Compare it with yours: one different letter, an extra dot or an underscore is a sign of impersonation. If you’re not sure where your own username appears, see the guide on <Link href="/blog/telegram-stars-username-qanday-topiladi">how to find your username</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="faol-seanslar-va-ulangan-qurilmalarni">Where do I check active sessions and connected devices?</h2>
      <p>Every phone, computer or browser connected to your account appears as a separate session. They usually show up in the “Devices” section inside Settings. The section’s name and location may vary by version.</p>
      <Steps>
        <Step title={"Open the section"}>find the list of devices or active sessions in Settings.</Step>
        <Step title={"Look through the list"}>watch for a device model you don’t recognize, a city or country you weren’t in, an old computer you haven’t used in a long time, or a browser session you never opened.</Step>
        <Step title={"Save evidence"}>before closing, write down or screenshot the unknown device’s name and location. It will help when you write an appeal later.</Step>
        <Step title={"Close the strangers"}>even if you’re unsure about one of them, it’s safer to close every session except the current device.</Step>
        <Step title={"Prepare to log back in"}>you’ll have to sign in again on your own devices that got closed. Check in advance that you have your phone number at hand and remember your two-step password.</Step>
        <Step title={"Keep watching"}>after closing, ask friends whether any more strange messages have arrived.</Step>
      </Steps>
      <p>If messages keep going out after the sessions are closed, the problem may lie elsewhere: in a connected bot or in a separate account impersonating you.</p>
      <h2 id="ulangan-botlar-va-mini-applar">Can connected bots and Mini Apps write in my name?</h2>
      <p>Technical details about what a bot or Mini App can do with which permission are not confirmed in this article. So the practical approach is recommended: treat every unfamiliar bot you recently trusted as suspicious and review the following.</p>
      <ul>
        <li><b>Bots opened under a pretext</b> — ones you started to “verify your account”, “claim a gift”, “vote” or “protect against a ban”.</li>
        <li><b>Windows that asked for a number or code</b> — any page or Mini App where you shared your phone number or entered a login code.</li>
        <li><b>Bots with broad permissions</b> — bots connected to business tools or chat management that you no longer remember.</li>
        <li><b>Bots in groups and channels</b> — bots added to places where you’re an admin, with no clear purpose.</li>
      </ul>
      <p>The general routine is simple. Open the suspicious bot’s chat, stop it and block it. Then, if it was granted any permission in Settings, revoke it. If you entered a login code or password in any window, blocking the bot isn’t enough: you also need to close sessions and change your password.</p>
      <p>If windows like “Pay for Premium” or “Pay for SMS” appear when you log in, read <Link href="/blog/telegramga-kirishda-premium-sms-tolov">the separate article</Link>. If the strange message arrived as a gift link, the guide on <Link href="/blog/telegram-gift-havolasini-tekshirish">checking a gift link</Link> will help.</p>
      <h2 id="havolani-ochganimning-ozi-xabar-yuborilishiga">Could simply opening a link have triggered the messages?</h2>
      <p>Many people trace the problem back to the moment they opened a single link. But Telegram has not officially confirmed that just opening a link automatically sends messages in your name. It hasn’t denied it either. It is also not confirmed in this article that Telegram announced this as a new feature or piece of news.</p>
      <p>In practice, ask yourself three questions:</p>
      <ul>
        <li>After the link, did I enter a phone number, code or password in any window?</li>
        <li>Did the link take me to a bot or Mini App, and did I press “Start” or “Allow” there?</li>
        <li>Did a new session appear in the device list around that time?</li>
      </ul>
      <p>If any answer is “yes”, run the full session and bot check above. Even if every answer is “no”, don’t skip the check: it takes a few minutes, and the peace of mind lasts much longer. If you hear an alarming warning, verify it on <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>.</p>
      <h2 id="dostlarimga-nima-deb-yozsam-vaziyatni">What should I tell my friends without making things worse?</h2>
      <p>A warning is a message too. According to Telegram’s <a href={"https://telegram.org/faq_spam"} target="_blank" rel="noopener noreferrer">Spam FAQ</a>, a report can be triggered by a photo, an invite link or even a simple “hello”. The same page says people mind getting unsolicited advertisements, links, invite links to groups or channels, and random photos.</p>
      <p>So:</p>
      <ul>
        <li>Write first to the close contacts who received the strange message.</li>
        <li>Keep it short and link-free. Example: “Don’t open the link that came from me, I’m checking my account. If you already opened it, let me know.”</li>
        <li>Don’t mass-send the same text to strangers or large groups.</li>
        <li>If the message went to a group, talk to the admin separately.</li>
      </ul>
      <Notice label={"Important"}>Don’t add any link to your warning, not even a link to a helpful article. To someone who doesn’t know you, it will look like yet another suspicious message.</Notice>
      <h2 id="dostlarim-report-spam-bossa-akkauntim">If friends press “Report spam”, will my account be limited, and for how long?</h2>
      <p>The official Spam FAQ describes the process clearly. When a user presses “Report spam” in a chat, the messages are forwarded to moderators for review. If the moderators decide the messages deserved it, the account becomes limited temporarily.</p>
      <CompareTable
        headers={["Situation", "What the official FAQ says"]}
        rows={[
          ["Someone pressed “Report spam”", "The messages are forwarded to moderators for review"],
          ["Who checks the reports", "All reports are also checked by human moderators"],
          ["First time, and you’re not an industrial-scale spammer", "The account will most likely be limited for a few days"],
          ["Repeated offences", "Blocks get longer; if you keep writing unwanted messages to strangers, you may lose that ability for good"],
          ["Who you can message while limited", "People who saved your number as a contact; you can always reply to anyone who writes to you first"],
        ]}
      />
      <p>The practical takeaway: every new message sent in your name can lead to a new report. That’s why you shouldn’t delay the steps from the first section. Even if a limit is applied, contact with your family and close ones won’t be cut off completely.</p>
      <h2 id="cheklovni-nohaq-deb-bilsam-spambotga">If I think the limit is unfair, what do I write to @SpamBot?</h2>
      <p>According to the Spam FAQ, if you’re sure the limit was applied wrongly, you should contact @SpamBot. Telegram itself admits that even the best systems, algorithms and well-trained people sometimes make mistakes.</p>
      <p>There is one exception. If your account really sent the messages and you yourself were the cause, the official page says the limit can’t be lifted early. Don’t confuse this with a situation where you lost control of your account. In your appeal, explain exactly what happened:</p>
      <ul>
        <li>when the account got out of your control and that you didn’t write the messages;</li>
        <li>which unknown device was found, that it was closed and that the password was updated;</li>
        <li>that the suspicious bot was stopped, if that was the case.</li>
      </ul>
      <p>There is no official information on when a reply will arrive or whether an appeal will succeed, so nobody can promise that.</p>
      <p>One more subtle point concerns the number itself. According to the official FAQ, some numbers can trigger an overly harsh response from the system. This can be due to the previous owner’s activity or to the number being a certain virtual/VOIP number. If you got your number recently, mention this in your appeal.</p>
      <h2 id="stars-yoki-premium-olayotganda-akkauntni">How do I keep my account safe when buying Stars or Premium?</h2>
      <p>Buying Stars and Premium is also a handy pretext for scammers who want your account details. Remember these rules:</p>
      <ul>
        <li>A trustworthy service never asks for your password, SMS code or account access. At StarsPaymee, an order only needs your @username.</li>
        <li>Premium is activated through your username, using Telegram’s gifting mechanism. You don’t hand your login details to anyone.</li>
        <li>If someone asks for a code or password “on behalf of StarsPaymee”, that’s a sign of fraud. Support is provided only via <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</li>
        <li>You don’t need to share links to send Stars or Premium to a friend. In <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, you enter their username and pay in UZS.</li>
        <li>StarsPaymee is an independent service, not the Telegram company.</li>
      </ul>
      <p>The price of Stars depends on the payment method. One Star costs {som(STARS_PER_UNIT_UZS, "en")} when paid by card transfer (UzCard/HUMO) or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. Premium costs the same with every method: {som(premium(3), "en")} for 3 months, {som(premium(6), "en")} for 6 months, {som(premium(12), "en")} for 12 months. Details are on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages. Warning signs are covered in the article <Link href="/blog/telegram-stars-xavfsizmi">Is Telegram Stars safe?</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq_spam", label: "Spam FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Messages I didn’t write are going out on Telegram — is changing my password enough?", answer: "No, the password is only one layer of protection. If an unknown session stays open or a suspicious bot still has permissions, messages may keep going out. Check your device list and bots as well." },
  { question: "If I close all sessions, will the chats on my phone be deleted?", answer: "Closing other sessions usually doesn’t affect your current device, though this article hasn’t confirmed it with an official source. You’ll have to log in again on the closed devices, so keep your number and two-step password handy." },
  { question: "My friend opened a link that came from me — what should I tell them?", answer: "Have them review their own device list and any bots they opened recently. If they entered a code or password somewhere, they should close unknown sessions and update their password." },
  { question: "If my account gets limited, will I lose contact with my mum or brother?", answer: "No. Per the official FAQ, you can still message people who saved your number as a contact. You can also reply to anyone who writes to you first." },
  { question: "If I delete the messages sent in my name, will the reports be cancelled?", answer: "Deleting them may stop others from opening the link. However, there’s no official information that it cancels reports already submitted." },
  { question: "Someone made an account with my photo and name — what do I do?", answer: "Open that profile, use Telegram’s report option and ask your friends to do the same. Tell people close to you your real username so they can spot the fake quickly." },
  { question: "If my number previously belonged to someone else, can that affect a limit?", answer: "Telegram doesn’t rule it out. A previous owner’s activity or a virtual/VOIP number can trigger an overly harsh response from the system. If you believe the limit is unfair, mention this to @SpamBot." },
  { question: "I wrote to @SpamBot but the limit is still there — what now?", answer: "There’s no official information on appeal timing or outcomes. A first-time limit usually lasts a few days. Meanwhile, avoid messaging strangers, since repeated offences make it longer." },
  { question: "A bot asks for my SMS code to buy Stars or Premium — should I give it?", answer: "No, never share the code with anyone. StarsPaymee only asks for your @username to place an order. Any “helper” demanding a code or password should be treated as a scammer." },
  { question: "Can someone gift me Premium or Stars while my account is limited?", answer: "Whether a spam limit affects receiving gifts hasn’t been checked for this article, so ask @StarsPaymeeSupport before ordering. Also keep in mind that the bot won’t open a new Premium order for an account that already has an active Premium subscription." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram nomimdan xabar yuborilyapti","telegramdan men yozmagan xabar ketyapti","telegram akkaunt buzildi nima qilish","telegram faol seanslarni tekshirish","telegram spam cheklov","bu xabar uchun bloklanasiz havola","telegram spambot cheklovni olish","telegram отправляет сообщения от моего имени","телеграм рассылает спам с моего аккаунта","как проверить активные сеансы телеграм","телеграм аккаунт ограничен спам","взломали телеграм что делать"],
  howToSteps: [
    { name: "Yuborilgan xabarlarni ko‘ring", text: "chatlaringizni oching va qaysi suhbatlarga qanday matn yoki havola ketganini yozib oling. Bu ro‘yxat do‘stlarni ogohlantirishda va murojaat yozishda kerak bo‘ladi." },
    { name: "Notanish qurilmalarni yoping", text: "faol seanslar ro‘yxatini tekshiring va tanimagan har bir qurilmani o‘chiring. Uni qayerdan topish quyida alohida bo‘limda yozilgan." },
    { name: "Botlar va Mini App’larni ko‘rib chiqing", text: "yaqinda ochgan, endi tanimaydigan botlarni to‘xtating va bloklang." },
    { name: "Parol va kirish himoyasini yangilang", text: "ikki bosqichli tekshiruv parolini qo‘ying yoki almashtiring. Batafsil: akkauntni o‘g‘irlashdan himoya qo‘llanmasi." },
    { name: "Do‘stlarni ogohlantiring", text: "qisqa, havolasiz xabar yozing. Avval g‘alati xabar olgan odamlardan boshlang." },
  ],
  locales: {
    uz: {
      title: "Telegram nomimdan xabar yuborilyapti: seans va botlarni tekshirish",
      excerpt: "Avval oqimni to‘xtating: notanish seanslarni yoping, shubhali botlarni bloklang, parolni yangilang. Maqolada manbani aniqlash, do‘stlarni ogohlantirish va cheklov tushsa nima qilish bor.",
      metaTitle: "Telegram nomimdan xabar yuborilyapti",
      metaDescription: "Avval oqimni to‘xtating: notanish seanslarni yoping, shubhali botlarni bloklang, parolni yangilang.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "От моего имени в Telegram уходят сообщения: как проверить сеансы и ботов",
      excerpt: "Сначала остановите рассылку: завершите чужие сеансы, заблокируйте подозрительных ботов, смените пароль. Как найти источник, предупредить друзей и что делать при ограничении.",
      metaTitle: "От моего имени в Telegram уходят сообщения",
      metaDescription: "Сначала остановите рассылку: завершите чужие сеансы, заблокируйте подозрительных ботов, смените пароль.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Sending Messages in My Name? Check Sessions and Bots",
      excerpt: "How to stop messages you didn’t write: close unknown sessions, block suspicious bots, update your password. Also covers finding the source, warning friends and what to do if a limit kicks in.",
      metaTitle: "Telegram Sending Messages in My Name? Check Sessions",
      metaDescription: "How to stop messages you didn’t write: close unknown sessions, block suspicious bots, update your password.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
