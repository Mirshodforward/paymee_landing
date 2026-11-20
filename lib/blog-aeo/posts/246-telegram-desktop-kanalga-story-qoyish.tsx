import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-desktop-kanalga-story-qoyish";

/**
 * Telegram Desktop orqali story qo‘yish: kanal admini hozir nima qila oladi
 *
 * Avtoblogyoz yasagan maqola (2026-11-20): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanal yoki kichik biznes sahifasini kompyuterdan yuritadigan o‘zbek admin «telegram desktop orqali story qo‘yish» deb qidiradi. U Canary yangilanishi haqidagi xabardan keyin kanaliga Desktop’dan story joylash mumkinmi, buning uchun qaysi versiya, boost darajasi yoki Premium kerakligini va hozir ishlaydigan yo‘lni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-20):
 *   https://telegram.org/tour/stories
 *   https://telegram.org/faq
 *   https://telegram.org/blog/stories
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
  return <p>Rasmiy Telegram yo‘riqnomasida story yaratish faqat iOS va Android ilovalari uchun tasvirlangan, Telegram Desktop esa unda umuman tilga olinmagan. Kanal admini uchun hozir ishonchli yo‘l shunday: banner yoki videoni kompyuterda tayyorlaysiz, kanal nomidan esa telefondan joylaysiz. Kanal story’sining yana bir sharti bor: kanal yetarlicha boost to‘plagan bo‘lishi kerak.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kompyuterdagi-telegramdan-kanalga-story-chiqarsa", label: "Kompyuterdagi Telegram’dan kanalga story chiqarsa bo‘ladimi?" },
          { href: "#canary-113-haqidagi-post-nima", label: "«Canary #113» haqidagi post: nima tasdiqlangan, nima yo‘q" },
          { href: "#kanal-storysi-qaysi-shartlarda-ochiladi", label: "Kanal story’si qaysi shartlarda ochiladi?" },
          { href: "#kompyuterda-tayyorlangan-banner-yoki-videoni", label: "Kompyuterda tayyorlangan banner yoki videoni kanal story’siga chiqarish" },
          { href: "#jamoada-kim-joylagani-nega-muhim", label: "Jamoada kim joylagani nega muhim: tahrirlash qoidasi" },
          { href: "#kompyuter-va-telefon-ortasida-ish", label: "Kompyuter va telefon o‘rtasida ish taqsimoti" },
          { href: "#boost-yetmasa-kichik-kanal-storyni", label: "Boost yetmasa, kichik kanal story’ni qanday ochadi?" },
          { href: "#jamoa-adminiga-premium-kerak-bolsa", label: "Jamoa adminiga Premium kerak bo‘lsa, kompyuterdan qanday olinadi?" },
        ]}
      />
      <h2 id="kompyuterdagi-telegramdan-kanalga-story-chiqarsa">Kompyuterdagi Telegram’dan kanalga story chiqarsa bo‘ladimi?</h2>
      <p><a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">Telegram Stories tur sahifasida</a> aytilishicha, har qanday foydalanuvchi story ko‘rishi, joylashi va ularga munosabat bildirishi mumkin. Lekin story qanday yaratilishi faqat ikki platforma uchun yozilgan: iOS’da chatlar ro‘yxatidagi [+] tugmasi, Android’da kamera belgisi. Kompyuter versiyasi bu yo‘riqnomada yo‘q.</p>
      <p>Kanalni kompyuterdan yuritadigan admin uchun bundan uchta xulosa chiqadi:</p>
      <ul>
        <li>Kontent rejasini Desktop’dagi story tugmasiga bog‘lamang. Versiyangizda shunday tugma paydo bo‘lsa ham, u rasmiy yo‘riqnomada hali tasvirlanmagan.</li>
        <li>Kanal nomidan story chiqarish uchun alohida shart bor. <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>da yozilishicha, kanal va guruhlar yetarlicha boost to‘plagandan keyin story joylay oladi.</li>
        <li>Ishni ikkiga bo‘lish qulay: dizayn, montaj va matn — kompyuterda, joylash — telefonda.</li>
      </ul>
      <p>Ko‘p kichik biznes sahifalari aynan shunday ishlaydi. Banner dizayn dasturida yig‘iladi, video montaj dasturida kesiladi, keyin tayyor fayl telefonga o‘tkazilib, u yerdan joylanadi.</p>
      <h2 id="canary-113-haqidagi-post-nima">«Canary #113» haqidagi post: nima tasdiqlangan, nima yo‘q</h2>
      <p>Telegram kanallarida tarqalgan bir postda Telegram Desktop’ning «Canary #113» yig‘ilishiga story joylash qo‘shilgani yozilgan. Postga ko‘ra, Desktop avval story’larni faqat ko‘rsatgan, joylashga esa imkon bermagan.</p>
      <p>Bu maqola tayyorlangan paytda ikkala da’vo ham rasmiy manbalarda tasdiqlanmadi:</p>
      <ul>
        <li>«Canary #113» versiyasi ham, unda story joylash paydo bo‘lgani ham rasmiy sahifalarda topilmadi.</li>
        <li>«Desktop faqat ko‘rishni qo‘llab-quvvatlagan» degan gap ham tekshiruvdan o‘tmadi.</li>
      </ul>
      <p>«Canary» nomi odatda barqaror relizdan oldingi sinov yig‘ilishlariga beriladi. Bunday yig‘ilishdagi funksiya o‘zgarishi, kechikishi yoki barqaror versiyaga umuman o‘tmasligi mumkin. Mijozlar bilan ishlaydigan kanalning kontent rejasini bunday asosga qurmagan ma’qul.</p>
      <p>O‘zingiz tekshirmoqchi bo‘lsangiz:</p>
      <ul>
        <li>Desktop sozlamalarida o‘rnatilgan versiya ma’lumotini ko‘ring.</li>
        <li>Yangi funksiyalar e’lonini <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> kuzating.</li>
        <li><a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">Tur sahifasida</a> story yaratish bo‘yicha kompyuter uchun ham ko‘rsatma paydo bo‘lgan-bo‘lmaganini qarang.</li>
      </ul>
      <Notice label={"Muhim"}>Chatlarda «story qo‘yadigan maxsus Desktop» degan fayllar tarqalishi mumkin. Ularni o‘rnatmang: begona o‘rnatuvchi akkauntga kirish ma’lumotlarini o‘g‘irlashi mumkin. Himoya choralari: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya va 2FA</Link>.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="kanal-storysi-qaysi-shartlarda-ochiladi">Kanal story’si qaysi shartlarda ochiladi?</h2>
      <p>Shaxsiy story’ni har qanday foydalanuvchi joylay oladi. Kanal story’siga esa kanalning o‘ziga qo‘yiladigan shart bor. Joylashdan oldin to‘rt narsani tekshiring.</p>
      <CompareTable
        headers={["Shart", "Nima uchun kerak", "Qayerda tekshiriladi"]}
        rows={[
          ["Yetarli boost", <span key="r0c1">FAQ’ga ko‘ra, kanal boost to‘plagach story joylay oladi. Bu imkoniyat <a href={"https://telegram.org/blog/stories"} target="_blank" rel="noopener noreferrer">Stories e’lonida</a> boost tizimi bilan birga taqdim etilgan</span>, "Telefondagi kanal profilining boost bo‘limi"],
          ["Admin huquqi", "Kanal nomidan joylovchi kanal boshqaruvchilari qatorida bo‘lishi kerak", "Kanal egasi admin ro‘yxatida sizga berilgan huquqlarni ko‘radi"],
          ["Premium", "Shaxsiy story uchun shart emas", "Kanal story’si uchun Premium talabi rasmiy manbalarda ko‘rsatilmagan"],
          ["Qurilma", "Yaratish yo‘riqnomasi faqat iOS va Android uchun", "Telefondagi Telegram ilovasi"],
        ]}
      />
      <p>Story uchun aniq nechta boost kerakligi bu maqolada yozilmaydi: talab kanalingiz sozlamalarida ko‘rsatiladi va uni o‘sha yerdan tekshirgan ma’qul. Darajalar qanday ochilishi haqida — <Link href="/blog/telegram-boost-darajalari">Telegram boost darajalari</Link>, tizimning ishlash tartibi haqida — <Link href="/blog/telegram-kanal-boost-nima">kanal boost nima</Link>.</p>
      <p>Huquqlar bo‘yicha amaliy maslahat: story’ni SMM mutaxassis joylasa, kanal egasi unga faqat ishiga kerak bo‘lgan ruxsatlarni bersin. Story joylash uchun kanalni o‘chirish yoki yangi admin qo‘shish huquqi kerak emas.</p>
      <h2 id="kompyuterda-tayyorlangan-banner-yoki-videoni">Kompyuterda tayyorlangan banner yoki videoni kanal story’siga chiqarish</h2>
      <p>Misol: Toshkentdagi gul do‘koni egasi bayram aksiyasi uchun banner tayyorladi. Kanalni u kompyuterdan yuritadi, story’ni esa telefondan chiqaradi:</p>
      <Steps>
        <Step title={"Faylni kompyuterda tayyorlang"}>vertikal format, aksiya matni, logotip va aloqa ma’lumotlari. Muhim matnni ekran chetiga yaqin qo‘ymang: story ko‘rinishida tugmalar va sarlavha yuqori hamda pastki qismni qisman yopishi mumkin.</Step>
        <Step title={"Telefonga o‘tkazing"}>faylni Desktop’dan o‘zingizning «Saqlangan xabarlar»ingizga yuboring, keyin telefonda galereyaga saqlang. Sifat pasayib ketmasligi uchun rasm emas, fayl sifatida yuborib ko‘ring.</Step>
        <Step title={"Telegram’ni telefonda oching"}>ilova eng so‘nggi versiyada ekanini do‘kondan tekshiring.</Step>
        <Step title={"Story yaratishni boshlang"}>rasmiy yo‘riqnomaga ko‘ra, iOS’da [+] tugmasi, Android’da kamera belgisi orqali. Kanal shartlarga javob bersa, kanal nomidan joylash tanlovi chiqadi.</Step>
        <Step title={"Kim ko‘rishini tanlang"}>shaxsiy story’da hamma, kontaktlar, yaqin do‘stlar yoki o‘zingiz tanlagan ro‘yxat bor. Kanal story’sida qaysi variantlar chiqishini ilovaning o‘zida ko‘ring.</Step>
        <Step title={"Joylang va natijani kuzating"}>ko‘rishlar va reaksiyalarni telefondan, Desktop’da story ko‘rinsa, kompyuterdan ham kuzatasiz.</Step>
      </Steps>
      <p>Kanal nomidan joylash tanlovi chiqmasa, uchta sababni tekshiring: boost talab qilingandan kam, sizda kerakli admin huquqi yo‘q yoki ilova eskirgan. Ilovani yangilang va huquqlaringizni kanal egasidan so‘rang.</p>
      <p>Joylashdan oldingi qisqa tekshiruv:</p>
      <ul>
        <li>narx va sana to‘g‘ri yozilganmi;</li>
        <li>telefon raqami yoki manzil kesilib qolmaganmi;</li>
        <li>story shaxsiy profildan emas, kanal nomidan chiqyaptimi.</li>
      </ul>
      <p>Oxirgi band ayniqsa muhim: shaxsiy story’ga ketib qolgan aksiya bannerini kanal obunachilari ko‘rmaydi.</p>
      <h2 id="jamoada-kim-joylagani-nega-muhim">Jamoada kim joylagani nega muhim: tahrirlash qoidasi</h2>
      <p>Tur sahifasidagi bitta qoida jamoa ishiga bevosita ta’sir qiladi: story’ni faqat u joylangan qurilmada tahrirlash mumkin.</p>
      <p>Misol. Kanalni ikki kishi yuritadi: egasi kompyuterda ishlaydi, SMM mutaxassis esa story’larni o‘z telefonidan qo‘yadi. Mutaxassis aksiya story’sini joyladi, lekin yetkazib berish sanasini xato yozdi. Egasi xatoni bir soatdan keyin ko‘rdi. U story’ni na Desktop’dan, na o‘z telefonidan tahrirlay oladi — buni faqat mutaxassis o‘z qurilmasidan qila oladi. Mutaxassis dam olishda bo‘lsa, yagona chora story’ni olib tashlab, to‘g‘ri variantni qayta joylash bo‘ladi.</p>
      <p>Bunday holatning oldini olish uchun:</p>
      <ul>
        <li>Kanal story’larini bitta «ish telefoni»dan joylang.</li>
        <li>Bir nechta odam joylasa, qaysi story’ni kim qo‘yganini umumiy chatda qayd eting.</li>
        <li>Narx, sana va manzilni joylashdan oldin ikkinchi odamga ko‘rsating.</li>
      </ul>
      <p>Istisno ham bor: story faol turgan paytda uni kim ko‘rishini istalgan qurilmangizdan o‘zgartirish mumkin. Tur sahifasida bu qoida shaxsiy story uchun yozilgan, kanal story’sida bu sozlama qanday ishlashini ilovada tekshiring.</p>
      <h2 id="kompyuter-va-telefon-ortasida-ish">Kompyuter va telefon o‘rtasida ish taqsimoti</h2>
      <p>Jadval rasmiy yo‘riqnomaga tayanadi. Desktop haqida rasmiy tafsilot bo‘lmagan joylar alohida belgilangan.</p>
      <CompareTable
        headers={["Amal", "Kompyuter (Desktop)", "Telefon (iOS/Android)"]}
        rows={[
          ["Story ko‘rish", "Har qanday foydalanuvchi ko‘ra oladi, Desktop uchun alohida rasmiy tavsif yo‘q", "Ha"],
          ["Story yaratish va joylash", "Rasmiy yo‘riqnomada tasvirlanmagan", "Ha, [+] tugmasi yoki kamera belgisi orqali"],
          ["Joylangan story’ni tahrirlash", "Faqat story shu qurilmadan joylangan bo‘lsa", "Faqat story shu qurilmadan joylangan bo‘lsa"],
          ["Kim ko‘rishini o‘zgartirish", "Story faol paytda istalgan qurilmadan mumkin", "Ha"],
          ["Banner va video tayyorlash", "Qulayroq: katta ekran, dizayn dasturlari", "Mumkin, lekin noqulayroq"],
        ]}
      />
      <p>Amalda kompyuter tayyorlash va kuzatish uchun, telefon esa joylash va tahrirlash uchun ishlatiladi.</p>
      <p>Ofisda faqat kompyuter bo‘lsa, kanal uchun alohida ish telefonini ajratgan qulay. Shunda story kimning shaxsiy qurilmasiga bog‘lanib qolmaydi va xatoni istalgan xodim tuzata oladi.</p>
      <h2 id="boost-yetmasa-kichik-kanal-storyni">Boost yetmasa, kichik kanal story’ni qanday ochadi?</h2>
      <p>Yangi kanal yoki kichik do‘kon sahifasida boost odatda kam bo‘ladi. Bir necha yo‘l bor:</p>
      <ul>
        <li><b>Obunachilardan so‘rang.</b> Kanalni boost qilishni taklif qiling va sababini ochiq yozing, masalan: «yangi mahsulotlarni story’da ko‘rsatmoqchimiz».</li>
        <li><b>Do‘stona sahifalar bilan kelishing.</b> Yaqin mavzudagi kanallar adminlari bir-birini boost qilishi mumkin.</li>
        <li><b>Boost ijarasi.</b> StarsPaymee botida kanal boost ijarasi xizmati bor. Narx va muddat <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>da ko‘rsatiladi, tafsilotlar — <Link href="/blog/telegram-kanalga-boost-sotib-olish">kanalga boost sotib olish</Link> maqolasida. Ijara vaqtinchalik: muddat tugagach boost soni kamayadi, story imkoniyati ham shunga bog‘liq bo‘lib qoladi.</li>
        <li><b>Darajani kuzating.</b> Boost darajasi va kanal reytingi qanday bog‘langani haqida: <Link href="/blog/telegram-kanal-reytingi">kanal reytingi va level</Link>.</li>
      </ul>
      <p>Qaysi yo‘lni tanlasangiz ham, story ochilishiga kafolat yo‘q. Avval kanal sozlamalarida talab qilingan boost sonini ko‘ring, keyin yetishmaganini qanday to‘ldirishni hal qiling.</p>
      <h2 id="jamoa-adminiga-premium-kerak-bolsa">Jamoa adminiga Premium kerak bo‘lsa, kompyuterdan qanday olinadi?</h2>
      <p>Shaxsiy story joylash uchun Premium shart emas. Lekin admin Premium’ning boshqa imkoniyatlari uchun obunani xohlashi mumkin. Uni Desktop’dan chiqmasdan olsa bo‘ladi:</p>
      <Steps>
        <Step title={"Username’ni nusxalang"}>Premium kimga ulansa, o‘sha odamning @username’i. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"Botni oching"}>Desktop’da <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>ni ishga tushiring.</Step>
        <Step title={"Muddatni tanlang"}>3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda.</Step>
        <Step title={"So‘mda to‘lang"}>Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Premium narxi hamma usulda bir xil, xalqaro karta va VPN kerak emas.</Step>
        <Step title={"Faollashuvni tekshiring"}>Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi, buyurtma odatda bir necha soniyada yetkaziladi.</Step>
      </Steps>
      <p>Bitta istisno bor: faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi, muddat faol obuna ustiga qo‘shilmaydi. Tariflar <Link href="/premium">/premium</Link> sahifasida, kompyuterdan xarid tafsilotlari <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">Premium’ni kompyuterdan sotib olish</Link> maqolasida. Savol chiqsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing. StarsPaymee — Telegram’dan alohida ishlaydigan mustaqil xizmat.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/tour/stories", label: "Telegram Stories" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/stories", label: "Stories and 10 Years of Telegram" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Ofisda faqat kompyuter bor, telefonda kanal ochilmagan. Story’ni kim joylaydi?", answer: "Rasmiy tasvirlangan yo‘l telefon orqali, shuning uchun kanal admini bo‘lgan xodimlardan biri ilovada joylashi kerak. Kanal uchun alohida ish telefoni ajratsangiz, tahrirlash bir qurilmada qoladi." },
  { question: "Desktop’imda story tugmasi chiqib qolsa, ishlataveraymi?", answer: "Bu imkoniyat rasmiy yo‘riqnomada hali tasvirlanmagan, shuning uchun muhim aksiyani unga ishonib qoldirmang. Sinab ko‘rsangiz ham, keyin story’ni faqat o‘sha kompyuterdan tahrirlay olishingizni yodda tuting." },
  { question: "Kanal story’si uchun aniq nechta boost yig‘ishim kerak?", answer: "Telegram FAQ’da faqat «yetarlicha boost» deyilgan, bu maqolada aniq son berilmaydi. Joriy talab telefondagi kanal profilining boost bo‘limida ko‘rinadi." },
  { question: "SMM mutaxassis o‘z telefonidan qo‘ygan story’dagi xatoni kompyuterimdan tuzata olamanmi?", answer: "Yo‘q, story’ni faqat u joylangan qurilmadan tahrirlasa bo‘ladi. Xatoni mutaxassisning o‘zi tuzatadi yoki story olib tashlanib, to‘g‘ri variant qayta joylanadi." },
  { question: "Story chiqib bo‘lgach, uni faqat kontaktlarimga ko‘rinadigan qilsam bo‘ladimi?", answer: "Shaxsiy story faol turgan paytda kim ko‘rishini istalgan qurilmangizdan o‘zgartirish mumkin. Kanal story’sida qaysi variantlar borligini ilovaning o‘zida tekshiring." },
  { question: "Sinov yig‘ilishini asosiy ish kompyuterimga o‘rnatsam bo‘ladimi?", answer: "Undagi story funksiyasi rasman tasdiqlanmagan, sinov yig‘ilishlari esa barqaror relizdan oldin chiqadi. Kanal yuritiladigan kompyuterda barqaror versiyada qolgan xavfsizroq." },
  { question: "Oddiy akkauntim bilan shaxsiy profilimga story qo‘ya olamanmi?", answer: "Ha, Telegram story’ni har qanday foydalanuvchi joylay olishini aytadi. Premium story uchun emas, qo‘shimcha imkoniyatlar uchun kerak bo‘ladi." },
  { question: "Boost ijarasini olsam, kanal story’si o‘sha zahoti ochiladimi?", answer: "Boost soni talab qilinganga yetsa, imkoniyat ochilishi kerak, lekin bunga kafolat yo‘q. Ijara muddati tugagach boost kamayishini ham hisobga oling." },
  { question: "Story’ni kompyuterdan oldindan rejalashtirib qo‘ysa bo‘ladimi?", answer: "Rasmiy yo‘riqnomada story’ni rejalashtirish haqida ma’lumot yo‘q. Faylni oldindan kompyuterda tayyorlab qo‘ying va kerakli vaqtda telefondan qo‘lda joylang." },
  { question: "Hamkasbimga Premium olib bermoqchiman. Uning parolini so‘rashim kerakmi?", answer: "Yo‘q, @StarsPaymee_bot’da faqat uning @username’i kerak, parol yoki SMS kod so‘ralmaydi. Kimdir sizdan shunday ma’lumot so‘rasa, bu aldov belgisi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>В официальной инструкции Telegram создание сторис описано только для приложений iOS и Android, а Telegram Desktop там вообще не упоминается. Поэтому надёжная схема для админа канала сейчас такая: баннер или видео готовите на компьютере, а публикуете от имени канала с телефона. Есть и второе условие: канал должен набрать достаточно бустов.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kompyuterdagi-telegramdan-kanalga-story-chiqarsa", label: "Можно ли выложить сторис в канал из Telegram на компьютере?" },
          { href: "#canary-113-haqidagi-post-nima", label: "Пост про «Canary #113»: что подтверждено, а что нет" },
          { href: "#kanal-storysi-qaysi-shartlarda-ochiladi", label: "При каких условиях открываются сторис канала?" },
          { href: "#kompyuterda-tayyorlangan-banner-yoki-videoni", label: "Как выложить в сторис канала баннер или видео, сделанные на компьютере" },
          { href: "#jamoada-kim-joylagani-nega-muhim", label: "Почему в команде важно, кто публикует: правило редактирования" },
          { href: "#kompyuter-va-telefon-ortasida-ish", label: "Как разделить работу между компьютером и телефоном" },
          { href: "#boost-yetmasa-kichik-kanal-storyni", label: "Бустов не хватает: как маленькому каналу открыть сторис?" },
          { href: "#jamoa-adminiga-premium-kerak-bolsa", label: "Если админу команды нужен Premium: как оформить с компьютера" },
        ]}
      />
      <h2 id="kompyuterdagi-telegramdan-kanalga-story-chiqarsa">Можно ли выложить сторис в канал из Telegram на компьютере?</h2>
      <p>На <a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">странице-туре Telegram Stories</a> сказано, что любой пользователь может смотреть сторис, публиковать их и реагировать на них. Но порядок создания сторис описан только для двух платформ: на iOS — кнопка [+] в списке чатов, на Android — значок камеры. Компьютерной версии в этой инструкции нет.</p>
      <p>Для админа, который ведёт канал с компьютера, отсюда следуют три вывода:</p>
      <ul>
        <li>Не привязывайте контент-план к кнопке сторис в Desktop. Даже если такая кнопка появилась в вашей версии, официальная инструкция её пока не описывает.</li>
        <li>Для публикации от имени канала есть отдельное условие. В <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> написано, что каналы и группы могут выкладывать сторис, когда наберут достаточно бустов.</li>
        <li>Работу удобно разделить: дизайн, монтаж и текст — на компьютере, публикация — с телефона.</li>
      </ul>
      <p>Так работают многие страницы малого бизнеса. Баннер собирают в графическом редакторе, видео режут в программе для монтажа, потом готовый файл переносят на телефон и публикуют оттуда.</p>
      <h2 id="canary-113-haqidagi-post-nima">Пост про «Canary #113»: что подтверждено, а что нет</h2>
      <p>В одном посте, который разошёлся по Telegram-каналам, говорится, что в сборку Telegram Desktop «Canary #113» добавили публикацию сторис. По словам автора, раньше Desktop только показывал сторис, а выкладывать их не позволял.</p>
      <p>На момент подготовки статьи ни одно из этих утверждений не подтвердилось официальными источниками:</p>
      <ul>
        <li>На официальных страницах не нашлось ни версии «Canary #113», ни упоминания о том, что в ней появилась публикация сторис.</li>
        <li>Слова о том, что Desktop «поддерживал только просмотр», тоже не прошли проверку.</li>
      </ul>
      <p>Название «Canary» обычно дают тестовым сборкам, которые выходят до стабильного релиза. Функция в такой сборке может измениться, задержаться или вовсе не попасть в стабильную версию. Строить на этом контент-план канала, который работает с клиентами, не стоит.</p>
      <p>Если хотите проверить сами:</p>
      <ul>
        <li>Посмотрите сведения об установленной версии в настройках Desktop.</li>
        <li>Следите за анонсами новых функций в <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">блоге Telegram</a>.</li>
        <li>Загляните на <a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">страницу-тур</a>: не появилась ли там инструкция по созданию сторис и для компьютера.</li>
      </ul>
      <Notice label={"Важно"}>В чатах могут ходить файлы вроде «особого Desktop с публикацией сторис». Не устанавливайте их: сторонний установщик способен украсть данные для входа в аккаунт. Как защититься — в статье <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">о защите аккаунта от кражи и 2FA</Link>.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="kanal-storysi-qaysi-shartlarda-ochiladi">При каких условиях открываются сторис канала?</h2>
      <p>Личную сторис может выложить любой пользователь. А для сторис канала есть условие, которое касается самого канала. Перед публикацией проверьте четыре вещи.</p>
      <CompareTable
        headers={["Условие", "Зачем нужно", "Где проверить"]}
        rows={[
          ["Достаточно бустов", <span key="r0c1">По FAQ канал может выкладывать сторис, когда наберёт бусты. Эта возможность появилась вместе с системой бустов, о чём сказано в <a href={"https://telegram.org/blog/stories"} target="_blank" rel="noopener noreferrer">анонсе Stories</a></span>, "Раздел бустов в профиле канала на телефоне"],
          ["Права администратора", "Тот, кто публикует от имени канала, должен быть среди его администраторов", "Владелец канала видит выданные вам права в списке админов"],
          ["Premium", "Для личной сторис не нужен", "Требование Premium для сторис канала в официальных источниках не указано"],
          ["Устройство", "Инструкция по созданию есть только для iOS и Android", "Приложение Telegram на телефоне"],
        ]}
      />
      <p>Точное число бустов для сторис в этой статье не приводится: требование показано в настройках вашего канала, там его и стоит проверить. Как открываются уровни — в статье <Link href="/blog/telegram-boost-darajalari">об уровнях бустов в Telegram</Link>, как устроена сама система — в материале <Link href="/blog/telegram-kanal-boost-nima">что такое буст канала</Link>.</p>
      <p>Практический совет по правам: если сторис выкладывает SMM-специалист, пусть владелец канала выдаст ему только те разрешения, которые нужны для работы. Для публикации сторис не требуется право удалять канал или добавлять новых админов.</p>
      <h2 id="kompyuterda-tayyorlangan-banner-yoki-videoni">Как выложить в сторис канала баннер или видео, сделанные на компьютере</h2>
      <p>Пример: владелец цветочного магазина в Ташкенте подготовил баннер к праздничной акции. Канал он ведёт с компьютера, а сторис публикует с телефона:</p>
      <Steps>
        <Step title={"Подготовьте файл на компьютере"}>вертикальный формат, текст акции, логотип и контакты. Не ставьте важный текст близко к краям: в режиме просмотра сторис кнопки и заголовок могут частично перекрывать верх и низ.</Step>
        <Step title={"Перенесите на телефон"}>отправьте файл из Desktop в своё «Избранное», затем на телефоне сохраните его в галерею. Чтобы не терялось качество, попробуйте отправить картинку файлом, а не как фото.</Step>
        <Step title={"Откройте Telegram на телефоне"}>проверьте в магазине приложений, что стоит последняя версия.</Step>
        <Step title={"Начните создание сторис"}>по официальной инструкции: на iOS через кнопку [+], на Android через значок камеры. Если канал соответствует условиям, появится выбор публикации от имени канала.</Step>
        <Step title={"Выберите, кто увидит"}>для личной сторис доступны варианты: все, контакты, близкие друзья или выбранный вами список. Какие варианты есть для сторис канала, смотрите в самом приложении.</Step>
        <Step title={"Опубликуйте и следите за результатом"}>просмотры и реакции видны на телефоне, а если сторис отображаются в Desktop, то и на компьютере.</Step>
      </Steps>
      <p>Если выбора публикации от имени канала нет, проверьте три причины: бустов меньше требуемого, у вас нет нужных прав администратора или приложение устарело. Обновите приложение и уточните права у владельца канала.</p>
      <p>Короткая проверка перед публикацией:</p>
      <ul>
        <li>правильно ли указаны цена и дата;</li>
        <li>не обрезались ли номер телефона или адрес;</li>
        <li>выходит ли сторис от имени канала, а не из личного профиля.</li>
      </ul>
      <p>Последний пункт особенно важен: баннер акции, случайно опубликованный в личной сторис, подписчики канала не увидят.</p>
      <h2 id="jamoada-kim-joylagani-nega-muhim">Почему в команде важно, кто публикует: правило редактирования</h2>
      <p>Одно правило со страницы-тура напрямую влияет на работу команды: отредактировать сторис можно только на том устройстве, с которого её опубликовали.</p>
      <p>Пример. Канал ведут двое: владелец работает на компьютере, а SMM-специалист выкладывает сторис со своего телефона. Специалист опубликовал сторис с акцией, но ошибся в дате доставки. Владелец заметил ошибку через час. Исправить её он не может ни из Desktop, ни со своего телефона — это под силу только специалисту с его устройства. Если специалист в отпуске, остаётся одно: удалить сторис и выложить правильный вариант заново.</p>
      <p>Чтобы такого не случалось:</p>
      <ul>
        <li>Публикуйте сторис канала с одного «рабочего телефона».</li>
        <li>Если выкладывают несколько человек, отмечайте в общем чате, кто какую сторис опубликовал.</li>
        <li>Перед публикацией показывайте цену, дату и адрес второму человеку.</li>
      </ul>
      <p>Есть и исключение: пока сторис активна, круг тех, кто её видит, можно изменить с любого вашего устройства. На странице-туре это правило описано для личных сторис — как эта настройка работает для сторис канала, проверьте в приложении.</p>
      <h2 id="kompyuter-va-telefon-ortasida-ish">Как разделить работу между компьютером и телефоном</h2>
      <p>Таблица опирается на официальную инструкцию. Места, где официальных данных о Desktop нет, отмечены отдельно.</p>
      <CompareTable
        headers={["Действие", "Компьютер (Desktop)", "Телефон (iOS/Android)"]}
        rows={[
          ["Просмотр сторис", "Смотреть может любой пользователь, отдельного официального описания для Desktop нет", "Да"],
          ["Создание и публикация сторис", "В официальной инструкции не описано", "Да, через кнопку [+] или значок камеры"],
          ["Редактирование опубликованной сторис", "Только если сторис опубликована с этого устройства", "Только если сторис опубликована с этого устройства"],
          ["Изменение круга зрителей", "Пока сторис активна, можно с любого устройства", "Да"],
          ["Подготовка баннера и видео", "Удобнее: большой экран, графические программы", "Возможно, но менее удобно"],
        ]}
      />
      <p>На практике компьютер служит для подготовки и наблюдения, а телефон — для публикации и правок.</p>
      <p>Если в офисе есть только компьютеры, удобно выделить под канал отдельный рабочий телефон. Тогда сторис не окажется привязанной к чьему-то личному устройству, и ошибку сможет исправить любой сотрудник.</p>
      <h2 id="boost-yetmasa-kichik-kanal-storyni">Бустов не хватает: как маленькому каналу открыть сторис?</h2>
      <p>У нового канала или страницы небольшого магазина бустов обычно мало. Вариантов несколько:</p>
      <ul>
        <li><b>Попросите подписчиков.</b> Предложите забустить канал и честно объясните зачем, например: «хотим показывать новинки в сторис».</li>
        <li><b>Договоритесь с дружественными страницами.</b> Админы каналов на близкие темы могут бустить друг друга.</li>
        <li><b>Аренда бустов.</b> В боте StarsPaymee есть услуга аренды бустов для канала. Цена и срок указаны в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, подробности — в статье <Link href="/blog/telegram-kanalga-boost-sotib-olish">о покупке бустов для канала</Link>. Аренда временная: когда срок закончится, бустов станет меньше, и возможность публиковать сторис тоже будет от этого зависеть.</li>
        <li><b>Следите за уровнем.</b> Как связаны уровень бустов и рейтинг канала — в материале <Link href="/blog/telegram-kanal-reytingi">о рейтинге и уровне канала</Link>.</li>
      </ul>
      <p>Какой бы путь вы ни выбрали, гарантии, что сторис откроются, нет. Сначала посмотрите в настройках канала, сколько бустов требуется, а потом решайте, как добрать недостающее.</p>
      <h2 id="jamoa-adminiga-premium-kerak-bolsa">Если админу команды нужен Premium: как оформить с компьютера</h2>
      <p>Для публикации личных сторис Premium не нужен. Но админу подписка может понадобиться ради других возможностей Premium. Оформить её можно, не выходя из Desktop:</p>
      <Steps>
        <Step title={"Скопируйте username"}>@username того, кому подключается Premium. Пароль, SMS-код или вход в аккаунт не нужны.</Step>
        <Step title={"Откройте бота"}>запустите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> в Desktop.</Step>
        <Step title={"Выберите срок"}>3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена указана в боте.</Step>
        <Step title={"Оплатите в сумах"}>Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота. Цена Premium одинакова при любом способе оплаты, международная карта и VPN не нужны.</Step>
        <Step title={"Проверьте активацию"}>Premium подключается через механизм подарков Telegram, заказ обычно доставляется за несколько секунд.</Step>
      </Steps>
      <p>Есть одно исключение: на аккаунт с активной подпиской Premium бот новый заказ Premium не оформит — срок не добавляется поверх действующей подписки. Тарифы — на странице <Link href="/premium">/premium</Link>, подробности о покупке с компьютера — в статье <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">как купить Premium с компьютера</Link>. Если возникнут вопросы, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. StarsPaymee — независимый сервис, работающий отдельно от Telegram.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/tour/stories", label: "Telegram Stories" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/stories", label: "Stories and 10 Years of Telegram" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "В офисе только компьютер, на телефоне канал не открыт. Кто будет выкладывать сторис?", answer: "Официально описанный путь — через телефон, поэтому публиковать должен кто-то из сотрудников с правами админа канала в мобильном приложении. Если выделить под канал отдельный рабочий телефон, редактирование останется на одном устройстве." },
  { question: "Если в моём Desktop появилась кнопка сторис, можно ею пользоваться?", answer: "Официальная инструкция эту возможность пока не описывает, так что важную акцию ей не доверяйте. Даже если попробуете, помните: потом править сторис получится только с этого же компьютера." },
  { question: "Сколько точно бустов нужно собрать для сторис канала?", answer: "В Telegram FAQ сказано лишь «достаточно бустов», точное число в этой статье не приводится. Актуальное требование видно в разделе бустов профиля канала на телефоне." },
  { question: "Можно ли с моего компьютера исправить ошибку в сторис, которую SMM-специалист выложил со своего телефона?", answer: "Нет, сторис редактируется только с устройства, с которого её опубликовали. Ошибку исправляет сам специалист, либо сторис удаляют и выкладывают правильный вариант заново." },
  { question: "Сторис уже вышла — можно сделать так, чтобы её видели только мои контакты?", answer: "Пока личная сторис активна, круг зрителей меняется с любого вашего устройства. Какие варианты доступны для сторис канала, проверьте в самом приложении." },
  { question: "Стоит ли ставить тестовую сборку на основной рабочий компьютер?", answer: "Функция сторис в ней официально не подтверждена, а тестовые сборки выходят раньше стабильного релиза. На компьютере, с которого ведётся канал, безопаснее оставаться на стабильной версии." },
  { question: "Могу ли я с обычным аккаунтом выложить сторис в личный профиль?", answer: "Да, по словам Telegram, сторис может публиковать любой пользователь. Premium нужен не для сторис, а для дополнительных возможностей." },
  { question: "Если арендовать бусты, сторис канала откроются сразу?", answer: "Когда число бустов дойдёт до требуемого, возможность должна появиться, но гарантии нет. Учитывайте и то, что после окончания аренды бустов станет меньше." },
  { question: "Можно ли запланировать сторис заранее с компьютера?", answer: "В официальной инструкции об отложенной публикации сторис ничего нет. Подготовьте файл на компьютере заранее и выложите его вручную с телефона в нужное время." },
  { question: "Хочу оформить Premium коллеге. Нужно спрашивать у него пароль?", answer: "Нет, в @StarsPaymee_bot нужен только его @username — пароль и SMS-код не запрашиваются. Если кто-то просит у вас такие данные, это признак обмана." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Telegram’s official guide explains how to create a story only in the iOS and Android apps. Telegram Desktop isn’t mentioned at all. For a channel admin, the reliable workflow today is to make the banner or video on your computer and post it from your phone under the channel’s name. Channel stories have one more requirement: the channel needs enough boosts.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kompyuterdagi-telegramdan-kanalga-story-chiqarsa", label: "Can you post a channel story from Telegram on your computer?" },
          { href: "#canary-113-haqidagi-post-nima", label: "The “Canary #113” post: what’s confirmed and what isn’t" },
          { href: "#kanal-storysi-qaysi-shartlarda-ochiladi", label: "What does a channel need before it can post stories?" },
          { href: "#kompyuterda-tayyorlangan-banner-yoki-videoni", label: "Posting a banner or video made on your computer as a channel story" },
          { href: "#jamoada-kim-joylagani-nega-muhim", label: "Why it matters who posts: the editing rule for teams" },
          { href: "#kompyuter-va-telefon-ortasida-ish", label: "Splitting the work between computer and phone" },
          { href: "#boost-yetmasa-kichik-kanal-storyni", label: "Not enough boosts: how can a small channel unlock stories?" },
          { href: "#jamoa-adminiga-premium-kerak-bolsa", label: "How to get Premium for a team admin from your computer" },
        ]}
      />
      <h2 id="kompyuterdagi-telegramdan-kanalga-story-chiqarsa">Can you post a channel story from Telegram on your computer?</h2>
      <p>According to the <a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">Telegram Stories tour page</a>, any Telegram user can view and post stories and interact with them. But the page only explains how to create a story on two platforms: the [+] button in the chat list on iOS, and the camera icon on Android. The desktop app isn’t part of these instructions.</p>
      <p>If you run a channel from a computer, that leads to three practical points:</p>
      <ul>
        <li>Don’t build your content plan around a story button in Desktop. Even if one appears in your version, the official guide doesn’t describe it yet.</li>
        <li>Posting as a channel has its own requirement. The <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> says channels and groups can post stories once they have enough boosts.</li>
        <li>It’s easiest to split the work: design, editing and copy on the computer, publishing on the phone.</li>
      </ul>
      <p>Many small business pages already work this way. They make the banner in a design tool and cut the video in an editor. Then they move the finished file to a phone and post it from there.</p>
      <h2 id="canary-113-haqidagi-post-nima">The “Canary #113” post: what’s confirmed and what isn’t</h2>
      <p>A post shared on Telegram channels claimed that the “Canary #113” build of Telegram Desktop added story posting. It also said Desktop used to show stories but didn’t let you post them.</p>
      <p>When this article was written, official sources didn’t confirm either claim:</p>
      <ul>
        <li>We couldn’t find “Canary #113” or any mention of story posting in that build on official pages.</li>
        <li>We also couldn’t verify that Desktop “used to support viewing only”.</li>
      </ul>
      <p>“Canary” is usually the name for test builds released before a stable version. A feature in a build like that can change, arrive late or never reach the stable release. Don’t base the content plan of a customer-facing channel on it.</p>
      <p>If you want to check for yourself:</p>
      <ul>
        <li>See which version you have installed in Desktop settings.</li>
        <li>Follow feature announcements on the <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blog</a>.</li>
        <li>Check whether the <a href={"https://telegram.org/tour/stories"} target="_blank" rel="noopener noreferrer">tour page</a> has added story-creation instructions for computers.</li>
      </ul>
      <Notice label={"Important"}>Chats may pass around files that claim to be a “special Desktop that can post stories”. Don’t install them. An unofficial installer can steal your account login details. How to protect yourself: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">account theft protection and 2FA</Link>.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="kanal-storysi-qaysi-shartlarda-ochiladi">What does a channel need before it can post stories?</h2>
      <p>Any user can post a personal story. Channel stories come with a requirement for the channel itself. Check these four things before you post.</p>
      <CompareTable
        headers={["Requirement", "Why it matters", "Where to check"]}
        rows={[
          ["Enough boosts", <span key="r0c1">According to the FAQ, a channel can post stories once it has collected enough boosts. The feature launched together with the boost system in the <a href={"https://telegram.org/blog/stories"} target="_blank" rel="noopener noreferrer">Stories announcement</a></span>, "The boost section of the channel profile on your phone"],
          ["Admin rights", "Whoever posts as the channel must be one of its admins", "The channel owner can see your rights in the admin list"],
          ["Premium", "Not required for personal stories", "Official sources don’t list Premium as a requirement for channel stories"],
          ["Device", "Creation instructions only cover iOS and Android", "The Telegram app on your phone"],
        ]}
      />
      <p>This article doesn’t give an exact number of boosts. Your channel settings show the current requirement, so check it there. To learn how levels unlock, see <Link href="/blog/telegram-boost-darajalari">Telegram boost levels</Link>. For how the system works, read <Link href="/blog/telegram-kanal-boost-nima">what a channel boost is</Link>.</p>
      <p>A practical tip on rights: if an SMM specialist posts your stories, the channel owner should grant only the permissions they actually need. Posting a story doesn’t require the right to delete the channel or add new admins.</p>
      <h2 id="kompyuterda-tayyorlangan-banner-yoki-videoni">Posting a banner or video made on your computer as a channel story</h2>
      <p>Example: a flower shop owner in Tashkent has made a holiday sale banner. She runs the channel from her computer but posts stories from her phone:</p>
      <Steps>
        <Step title={"Make the file on your computer"}>vertical format, with the offer, logo and contact details. Keep important text away from the edges, because buttons and the header in story view can cover parts of the top and bottom.</Step>
        <Step title={"Move it to your phone"}>send the file from Desktop to your own “Saved Messages”, then save it to your phone’s gallery. To avoid losing quality, try sending it as a file instead of a photo.</Step>
        <Step title={"Open Telegram on your phone"}>check your app store to make sure the app is up to date.</Step>
        <Step title={"Start a new story"}>according to the official guide, tap the [+] button on iOS or the camera icon on Android. If the channel meets the requirements, you’ll get the option to post as the channel.</Step>
        <Step title={"Choose who can see it"}>personal stories can go to Everyone, My Contacts, Close Friends or a list of people you pick. Check in the app which options appear for a channel story.</Step>
        <Step title={"Post it and watch the results"}>track views and reactions on your phone. If Desktop shows the story, you can follow them there too.</Step>
      </Steps>
      <p>If the option to post as the channel doesn’t appear, check three things: the channel has fewer boosts than required, you lack the right admin permissions, or your app is outdated. Update the app and ask the channel owner about your permissions.</p>
      <p>A quick check before posting:</p>
      <ul>
        <li>Are the price and date correct?</li>
        <li>Is the phone number or address cut off?</li>
        <li>Is the story going out as the channel, not from your personal profile?</li>
      </ul>
      <p>The last point matters most. If a sale banner ends up as a personal story, the channel’s subscribers won’t see it.</p>
      <h2 id="jamoada-kim-joylagani-nega-muhim">Why it matters who posts: the editing rule for teams</h2>
      <p>One rule on the tour page directly affects how teams work: you can edit a story only on the device you posted it from.</p>
      <p>Example: two people run a channel. The owner works on a computer, and an SMM specialist posts stories from her own phone. She posts a sale story with the wrong delivery date. The owner spots the mistake an hour later, but he can’t edit the story from Desktop or from his own phone. Only the specialist can, from her device. If she’s on holiday, the only fix is to delete the story and post a corrected one.</p>
      <p>To avoid this:</p>
      <ul>
        <li>Post channel stories from a single “work phone”.</li>
        <li>If several people post, note who posted which story in a shared chat.</li>
        <li>Have a second person check prices, dates and addresses before anything goes live.</li>
      </ul>
      <p>There is one exception. While a story is active, you can change who can see it from any of your devices. The tour page describes this rule for personal stories, so check in the app how the setting works for channel stories.</p>
      <h2 id="kompyuter-va-telefon-ortasida-ish">Splitting the work between computer and phone</h2>
      <p>This table is based on the official guide. Rows where Desktop has no official details are marked as such.</p>
      <CompareTable
        headers={["Action", "Computer (Desktop)", "Phone (iOS/Android)"]}
        rows={[
          ["Viewing stories", "Any user can view them, but there’s no separate official description for Desktop", "Yes"],
          ["Creating and posting a story", "Not covered in the official guide", "Yes, with the [+] button or camera icon"],
          ["Editing a posted story", "Only if it was posted from this device", "Only if it was posted from this device"],
          ["Changing who can see it", "Possible from any device while the story is active", "Yes"],
          ["Making banners and videos", "Easier: bigger screen, design software", "Possible, but less convenient"],
        ]}
      />
      <p>In practice, the computer is for preparing content and tracking results. The phone is for posting and editing.</p>
      <p>If your office only has computers, it’s worth setting aside a dedicated work phone for the channel. That way stories aren’t tied to anyone’s personal device, and any team member can fix a mistake.</p>
      <h2 id="boost-yetmasa-kichik-kanal-storyni">Not enough boosts: how can a small channel unlock stories?</h2>
      <p>A new channel or small shop page usually has few boosts. You have several options:</p>
      <ul>
        <li><b>Ask your subscribers.</b> Invite them to boost the channel and say why, for example: “we want to show new products in stories”.</li>
        <li><b>Team up with friendly pages.</b> Admins of channels on similar topics can boost each other.</li>
        <li><b>Rent boosts.</b> The StarsPaymee bot offers channel boost rentals. Prices and periods are shown in <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. For details, see <Link href="/blog/telegram-kanalga-boost-sotib-olish">buying boosts for a channel</Link>. Rentals are temporary. When the period ends, the boost count drops, and story access depends on that count.</li>
        <li><b>Watch your level.</b> For how boost levels relate to channel rating, see <Link href="/blog/telegram-kanal-reytingi">channel rating and levels</Link>.</li>
      </ul>
      <p>None of these options guarantees that stories will unlock. First check how many boosts your channel settings require, then decide how to make up the difference.</p>
      <h2 id="jamoa-adminiga-premium-kerak-bolsa">How to get Premium for a team admin from your computer</h2>
      <p>You don’t need Premium to post personal stories. An admin might still want a subscription for Premium’s other features. You can buy one without leaving Desktop:</p>
      <Steps>
        <Step title={"Copy the username"}>the @username of the person who should get Premium. You won’t be asked for a password, SMS code or account access.</Step>
        <Step title={"Open the bot"}>launch <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> in Desktop.</Step>
        <Step title={"Choose a plan"}>3 months for {som(premium(3), "en")}, 6 months for {som(premium(6), "en")}, 12 months for {som(premium(12), "en")}. There’s also a 1-month plan; see the bot for its price.</Step>
        <Step title={"Pay in soums"}>use Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. Premium costs the same with every method. You don’t need an international card or a VPN.</Step>
        <Step title={"Check that it’s active"}>Premium arrives through Telegram’s gift mechanism, and orders usually go through within a few seconds.</Step>
      </Steps>
      <p>One exception: the bot won’t open a new Premium order for an account that already has an active Premium subscription. Extra time isn’t added on top of an active subscription. Plans are on the <Link href="/premium">/premium</Link> page, and the steps for buying from a computer are in <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">buying Premium from a computer</Link>. If you have questions, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. StarsPaymee is an independent service, not part of Telegram.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/tour/stories", label: "Telegram Stories" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/stories", label: "Stories and 10 Years of Telegram" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Our office only has computers and nobody has the channel on their phone. Who posts the story?", answer: "The officially documented method uses a phone, so one of the employees with admin rights needs to post from the app. If you set aside a work phone for the channel, all editing stays on one device." },
  { question: "A story button showed up in my Desktop app. Should I use it?", answer: "The official guide doesn’t describe this feature yet, so don’t trust it with an important promotion. If you do try it, remember you’ll only be able to edit that story from the same computer." },
  { question: "Exactly how many boosts does a channel need for stories?", answer: "The Telegram FAQ only says “enough boosts”, and this article doesn’t give a number. You’ll see the current requirement in the boost section of the channel profile on your phone." },
  { question: "Can I fix a mistake in a story our SMM specialist posted from her phone, using my computer?", answer: "No. A story can only be edited on the device it was posted from. Either the specialist fixes it, or you delete the story and post a corrected one." },
  { question: "After a story is live, can I make it visible only to my contacts?", answer: "While a personal story is active, you can change who can see it from any of your devices. Check in the app which options exist for channel stories." },
  { question: "Is it safe to install a test build on my main work computer?", answer: "The story feature in that build hasn’t been officially confirmed, and test builds come out before stable releases. It’s safer to keep the computer you run your channel on on the stable version." },
  { question: "Can I post a story to my personal profile with a regular account?", answer: "Yes. Telegram says any user can post stories. Premium is for extra features, not for posting stories in the first place." },
  { question: "If I rent boosts, will channel stories unlock right away?", answer: "They should unlock once your boost count reaches the requirement, but that isn’t guaranteed. Also remember the boosts drop when the rental period ends." },
  { question: "Can I schedule a story in advance from my computer?", answer: "The official guide says nothing about scheduling stories. Make the file on your computer ahead of time, then post it manually from your phone at the right moment." },
  { question: "I want to buy Premium for a colleague. Do I need their password?", answer: "No. @StarsPaymee_bot only needs their @username, and it never asks for a password or SMS code. If someone asks you for those details, it’s a sign of a scam." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["telegram desktop orqali story qo'yish","kompyuterdan kanalga story joylash","telegram kanalga story qo'yish","telegram desktop stories","telegram canary story","kanal story boost","как выложить историю в телеграм с компьютера","telegram desktop истории канала","сторис в канал телеграм с пк","telegram desktop canary истории","сколько бустов нужно для сторис канала"],
  howToSteps: [
    { name: "Faylni kompyuterda tayyorlang", text: "vertikal format, aksiya matni, logotip va aloqa ma’lumotlari. Muhim matnni ekran chetiga yaqin qo‘ymang: story ko‘rinishida tugmalar va sarlavha yuqori hamda pastki qismni qisman yopishi mumkin." },
    { name: "Telefonga o‘tkazing", text: "faylni Desktop’dan o‘zingizning «Saqlangan xabarlar»ingizga yuboring, keyin telefonda galereyaga saqlang. Sifat pasayib ketmasligi uchun rasm emas, fayl sifatida yuborib ko‘ring." },
    { name: "Telegram’ni telefonda oching", text: "ilova eng so‘nggi versiyada ekanini do‘kondan tekshiring." },
    { name: "Story yaratishni boshlang", text: "rasmiy yo‘riqnomaga ko‘ra, iOS’da [+] tugmasi, Android’da kamera belgisi orqali. Kanal shartlarga javob bersa, kanal nomidan joylash tanlovi chiqadi." },
    { name: "Kim ko‘rishini tanlang", text: "shaxsiy story’da hamma, kontaktlar, yaqin do‘stlar yoki o‘zingiz tanlagan ro‘yxat bor. Kanal story’sida qaysi variantlar chiqishini ilovaning o‘zida ko‘ring." },
    { name: "Joylang va natijani kuzating", text: "ko‘rishlar va reaksiyalarni telefondan, Desktop’da story ko‘rinsa, kompyuterdan ham kuzatasiz." },
  ],
  locales: {
    uz: {
      title: "Telegram Desktop orqali story qo‘yish: kanal admini hozir nima qila oladi",
      excerpt: "Hozircha rasmiy yo‘riqnomada story faqat telefondan joylanadi, kanal story’si uchun esa yetarli boost kerak. Maqolada Canary xabari tekshiruvi, kanal shartlari va kompyuter bilan telefonni birga ishlatish yo‘li bor.",
      metaTitle: "Telegram Desktop orqali story qo‘yish",
      metaDescription: "Hozircha rasmiy yo‘riqnomada story faqat telefondan joylanadi, kanal story’si uchun esa yetarli boost kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как выложить сторис через Telegram Desktop: что сейчас может админ канала",
      excerpt: "Пока в официальной инструкции сторис публикуют только с телефона, а для сторис канала нужны бусты. Разбираем пост про Canary, условия для канала и связку компьютера с телефоном.",
      metaTitle: "Как выложить сторис через Telegram Desktop",
      metaDescription: "Пока в официальной инструкции сторис публикуют только с телефона, а для сторис канала нужны бусты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Posting a Telegram story from Desktop: what channel admins can do now",
      excerpt: "Telegram’s official guide only covers posting stories from a phone, and channels also need enough boosts. Here we check the Canary claim, list channel requirements and show how to split work between PC and phone.",
      metaTitle: "Posting a Telegram story from Desktop",
      metaDescription: "Telegram’s official guide only covers posting stories from a phone, and channels also need enough boosts.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
