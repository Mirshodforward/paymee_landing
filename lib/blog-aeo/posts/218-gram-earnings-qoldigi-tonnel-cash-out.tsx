import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "gram-earnings-qoldigi-tonnel-cash-out";

/**
 * Tonnel Cash Out 80 foiz: kanal qoldig‘ini rasmiy yechishdan foydalimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-09): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kanalidan Gram Earnings daromadi qolgan O‘zbekistondagi kanal egasi qoldiqni Tonnel Cash Out orqali 80% bilan chiqarish rasmiy yechish yoki reklamaga sarflashdan foydalimi va xavfsizmi, buni «Gram Earnings qoldig‘i Tonnel» yoki «Tonnel Cash Out 80 foiz» so‘zlari bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-09):
 *   https://telegram.org/tos/content-creator-rewards
 *   https://fragment.com/terms
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
  return <p>Ko‘p hollarda yo‘q. Hamyoningiz bo‘lsa va qoldiq yechishga ochilgan bo‘lsa, Fragment orqali rasmiy yechish foydaliroq: summaning beshdan biri boshqa tomonga ketmaydi, jarayon esa Telegram shartlariga tayanadi. Tonnel Cash Out’ning «80%» sharti faqat Telegram kanal postida uchraydi va rasman tasdiqlanmagan. Kanalni o‘stirish rejangiz bo‘lsa, qoldiqni reklamaga sarflash ham mumkin.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#tonnel-cash-outning-80-foizli", label: "Tonnel Cash Out’ning 80 foizli taklifi nimani va’da qiladi?" },
          { href: "#statistikadagi-raqam-qachon-sizning-mablagingizga", label: "Statistikadagi raqam qachon sizning mablag‘ingizga aylanadi?" },
          { href: "#fragment-reklama-va-tonnel-kanal", label: "Fragment, reklama va Tonnel: kanal egasi uchun taqqoslash jadvali" },
          { href: "#80-foiz-kichik-va-katta", label: "80 foiz kichik va katta qoldiqda qancha farq qiladi?" },
          { href: "#qaror-oldidan-qaysi-raqamlarni-yozib", label: "Qaror oldidan qaysi raqamlarni yozib qo‘yish kerak?" },
          { href: "#qaysi-holatda-qaysi-yol-maqul", label: "Qaysi holatda qaysi yo‘l ma’qul?" },
          { href: "#rasmiy-yol-bilan-qoldiqni-qanday", label: "Rasmiy yo‘l bilan qoldiqni qanday chiqaraman?" },
          { href: "#uchinchi-tomon-botiga-qoldiq-berishdan", label: "Uchinchi tomon botiga qoldiq berishdan oldin nimani bilish kerak?" },
          { href: "#kanal-uchun-stars-yoki-premium", label: "Kanal uchun Stars yoki Premium kerak bo‘lsa, qoldiqqa tegish shartmi?" },
        ]}
      />
      <h2 id="tonnel-cash-outning-80-foizli">Tonnel Cash Out’ning 80 foizli taklifi nimani va’da qiladi?</h2>
      <p>Taklif Telegram kanalidagi postda tarqalgan. Unda kanal egasiga quyidagicha yo‘l ko‘rsatiladi: kanaldagi Gram qoldig‘ini Tonnel hisobiga o‘tkazing va uning 80% ini oling. Shu bilan rasmiy yechish bosqichlari va hamyon bilan ishlashdan qutulish mumkindek tuyuladi.</p>
      <p>Tekshiruv natijasi esa boshqacha:</p>
      <ul>
        <li>Tonnel, Tonnel Marketplace yoki Tonnel Cash Out haqida telegram.org, core.telegram.org va fragment.com’da ma’lumot topilmadi. Xizmatning ishonchliligi tasdiqlanmagan, lekin rad ham etilmagan.</li>
        <li>«80%» sharti rasmiy manbalarda yo‘q. U faqat post muallifining so‘zlari.</li>
        <li>Qolgan 20% kimga va qanday asosda ketishi rasmiy hujjatlarda yozilmagan.</li>
      </ul>
      <p>Atamaga ham e’tibor bering. «Gram Earnings» nomi Telegram’ning rasmiy sahifalarida uchramaydi. Rasmiy hujjatlarda bu <b>Content Creator Rewards</b> deb ataladi: kanalda yig‘ilgan Gram va Star balansi asosida beriladigan mukofot. Telegram bu mukofotlarni qayta ishlashni Fragment’ga topshirgan (<a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Content Creator shartlari</a>). Mukofot miqdori va uni yechish usulini Telegram o‘z ixtiyori bilan belgilaydi. Shu sababli rasmiy yo‘lni Telegram va Fragment shartlaridan bilish kerak, kanal postidan emas.</p>
      <h2 id="statistikadagi-raqam-qachon-sizning-mablagingizga">Statistikadagi raqam qachon sizning mablag‘ingizga aylanadi?</h2>
      <p>Kanal statistikasidagi summani ko‘pchilik allaqachon cho‘ntakdagi pul deb hisoblaydi. Shartlarda esa boshqacha yozilgan. Kanalda ko‘rinadigan kutilayotgan balans egasining mablag‘i bo‘lishi uchun quyidagilardan biri bajarilishi kerak:</p>
      <ul>
        <li>yechish so‘ralib, mablag‘ muvaffaqiyatli o‘tkazilgan bo‘lishi;</li>
        <li>balans mukofot olishga ishlatilgan bo‘lishi;</li>
        <li>balans reklama joylashtirishga sarflangan bo‘lishi.</li>
      </ul>
      <p>Demak, «qoldiqni Tonnel hisobingizga o‘tkazing» degan gap rasmiy jarayonni tasvirlamaydi. Rasmiy yo‘lda Gram faqat siz Fragment’ga ulagan hamyonga chiqadi. Uchinchi tomon bu zanjirga qanday ulanishi uning o‘z shartlariga bog‘liq, ularni esa hech qanday rasmiy manba tasdiqlamagan.</p>
      <Notice label={"Muhim"}>Gram mukofoti hisoblanganidan 2 kun keyin, Star mukofoti esa 21 kundan keyin yechishga ochiladi. Telegram yechilmagan mukofotlarga o‘z ixtiyori bilan muddat qo‘yishi mumkin. Muddat o‘tgach, ular yo‘qotilgan hisoblanadi. Shuning uchun qoldiqni oylab ushlab turish ham xavfsiz emas.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragment-reklama-va-tonnel-kanal">Fragment, reklama va Tonnel: kanal egasi uchun taqqoslash jadvali</h2>
      <CompareTable
        headers={["Mezon", "Fragment orqali yechish", "Reklamaga sarflash", "Tonnel Cash Out"]}
        rows={[
          ["Qo‘lga nima tegadi", "Gram, siz ulagan hamyonga", "Pul emas, kanal uchun reklama", "Post bo‘yicha qoldiqning 80% i"],
          ["Hisob-kitob asosi", "CoinMarketCap kursi, taxminan har 5 daqiqada yangilanadi", "Shartlarda balansni reklamaga ishlatish imkoni tilga olingan", "Shart faqat kanal postida"],
          ["Hamyon kerakmi", "Ha", "Rasmiy matnda hamyon sharti tilga olinmagan", "Xizmat shartiga bog‘liq"],
          ["Qaysi hujjat tartibga soladi", "Telegram va Fragment shartlari", "Telegram shartlari, tafsilotini reklama kabinetida ko‘ring", "Faqat xizmatning o‘z shartlari"],
          ["Xato bo‘lsa qaytadimi", "Yo‘q, noto‘g‘ri hamyonda ham", "Bu maqolada tasdiqlanmagan", "Tasdiqlanmagan"],
        ]}
      />
      <p>Rasmiy qatorlarning manbasi: yechish va kurs uchun <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment shartlari</a>, qaytarilmaslik va hamyon javobgarligi uchun Content Creator shartlari. Telegram foydalanuvchi daromadini chiqaradigan kripto hamyonlar uchun javobgar emas va ularni nazorat qilmaydi. Uchinchi tomon ishlab chiquvchilarining botlari esa Telegram’ning asosiy interfeysi qismi emas (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Reklama yo‘li qanday ishlashi Stars misolida alohida yoritilgan: <Link href="/blog/telegram-ads-stars-sarflash">kanal topgan Stars’ni Telegram Ads’ga sarflash</Link>.</p>
      <h2 id="80-foiz-kichik-va-katta">80 foiz kichik va katta qoldiqda qancha farq qiladi?</h2>
      <p>20% ulush qoldiqqa nisbatan olinadi. Summa oshgani sari yo‘qotish ham oshadi. Quyidagi raqamlar shartli, ular kurs emas, faqat hisobni ko‘rsatadi:</p>
      <CompareTable
        headers={["Kanaldagi qoldiq", "Post shartiga ko‘ra sizga", "Sizdan ketadigan qism"]}
        rows={[
          ["5 Gram", "4 Gram", "1 Gram"],
          ["8 Gram", "6,4 Gram", "1,6 Gram"],
          ["50 Gram", "40 Gram", "10 Gram"],
          ["200 Gram", "160 Gram", "40 Gram"],
        ]}
      />
      <p>Rasmiy yechishda qo‘shimcha xarajat bor-yo‘qligi va uning miqdori bu maqolada tasdiqlanmagan. Yakuniy summani Fragment’dagi yechish oynasida ko‘ring va jadvaldagi 80% bilan solishtiring.</p>
      <p>Kurs ham hisobni o‘zgartiradi. Fragment mukofotning Gramdagi qiymatini bozor kursi bo‘yicha hisoblaydi, kurs esa taxminan har 5 daqiqada yangilanadi. Kurs yuqoriga ham, pastga ham o‘zgarishi mumkin. Shu sababli «yaxshi kursni» kutib qoldiqni uzoq ushlab turish yechilmagan mukofotga muddat qo‘yilishi xavfi bilan qo‘shiladi.</p>
      <p>Toncoin nomi Gram’ga o‘zgargani va bu hamyonlarda qanday ko‘rinishi haqida: <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>.</p>
      <h2 id="qaror-oldidan-qaysi-raqamlarni-yozib">Qaror oldidan qaysi raqamlarni yozib qo‘yish kerak?</h2>
      <p>Qaror kayfiyatga qarab emas, raqamlarga qarab qabul qilinsin. Qog‘ozga yoki eslatmaga quyidagilarni yozing:</p>
      <ul>
        <li><b>Qoldiq turi.</b> Gram balansimi yoki Star balansimi. Ularning yechishga ochilish muddati har xil.</li>
        <li><b>Hisoblangan sana.</b> Gram uchun 2 kun o‘tganmi? O‘tmagan bo‘lsa, hech qanday yo‘l hozircha mos emas.</li>
        <li><b>Hamyon holati.</b> Fragment’ga ulash uchun o‘zingiz nazorat qiladigan hamyon bormi? Yo‘q bo‘lsa, uni ochish qanchalik qiyin?</li>
        <li><b>Rasmiy summa.</b> Yechish oynasida ko‘rsatilgan yakuniy Gram miqdori.</li>
        <li><b>Tonnel summasi.</b> Qoldiqning 80% i. Bot shartida boshqa raqam chiqsa, aynan o‘sha raqamni yozing.</li>
        <li><b>Maqsad.</b> Pul kerakmi, kanal reklamasi kerakmi yoki kanal uchun Stars va Premium kerakmi?</li>
      </ul>
      <p>Rasmiy summa Tonnel summasidan katta bo‘lsa va hamyoningiz bo‘lsa, tanlov aniq. Maqsadingiz kanalni o‘stirish bo‘lsa, pulni chiqarib qaytadan reklamaga sarflashdan ko‘ra balansni to‘g‘ridan-to‘g‘ri reklamaga yo‘naltirish qisqaroq yo‘l.</p>
      <h2 id="qaysi-holatda-qaysi-yol-maqul">Qaysi holatda qaysi yo‘l ma’qul?</h2>
      <ul>
        <li><b>Hamyon bor, qoldiq ochilgan.</b> Rasmiy yechish ustun: zanjirda faqat Telegram, Fragment va sizning hamyoningiz bor.</li>
        <li><b>Kanalni o‘stirish rejasi bor.</b> Reklamaga sarflashni ko‘rib chiqing. Pul qo‘lingizga chiqmaydi, lekin balans kanal reklamasiga ishlaydi. Natija reklama sifatiga bog‘liq, obunachi soni kafolatlanmaydi.</li>
        <li><b>Hamyon yo‘q va ochishni istamaysiz.</b> Tonnel kabi xizmatlar qulay ko‘rinadi. Ammo ular rasmiy jarayonning qismi emas. Telegram bunday xizmatlar va kripto hamyonlar uchun javobgarlikni o‘z zimmasiga olmaydi.</li>
        <li><b>Qoldiq kichik.</b> Muddat qo‘yilishi mumkinligini unutmang. Rasmiy oynadagi summani tekshiring yoki qoldiqni reklamaga yo‘naltiring, lekin cheksiz kechiktirmang.</li>
        <li><b>Mukofot boshqa shaklda taklif qilinsa.</b> Fragment ba’zi davlatlarda mukofotni stablecoin yoki boshqa to‘lov usulida berishi mumkin. O‘zbekistonda qaysi variant ochiqligini Fragment’ning o‘zida tekshiring.</li>
      </ul>
      <p>Kanal daromadi umuman qanday shakllanishi haqida: <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanalni Stars bilan monetizatsiya qilish</Link>.</p>
      <h2 id="rasmiy-yol-bilan-qoldiqni-qanday">Rasmiy yo‘l bilan qoldiqni qanday chiqaraman?</h2>
      <Steps>
        <Step title={"Muddatni tekshiring"}>Gram mukofoti hisoblangan kundan 2 kun o‘tganiga ishonch hosil qiling. Yangi tushgan summa hali yechishga ochilmagan bo‘lishi mumkin.</Step>
        <Step title={"Akkauntni himoyalang"}>ikki bosqichli tasdiqlashni yoqing va faqat rasmiy Telegram ilovalaridan foydalaning. Shartlarda bu kanal egasining majburiyati sifatida yozilgan. Sozlash tartibi: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya va 2FA</Link>.</Step>
        <Step title={"Hamyon ulang"}>Fragment’ga o‘zingiz nazorat qiladigan hamyonni ulang. Mukofot sukut bo‘yicha Gram ko‘rinishida beriladi va shu hamyonga chiqadi.</Step>
        <Step title={"Manzilni solishtiring"}>yechishni tasdiqlashdan oldin hamyon manzilining boshi va oxirini tekshiring. Noto‘g‘ri hamyonga ketgan yechim bekor qilinmaydi va qaytarilmaydi.</Step>
        <Step title={"Tushganini tekshiring"}>eksplorerda hamyoningizdagi kiruvchi yozuvni toping. Qanday qilish kerakligi bu yerda ko‘rsatilgan: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">eksplorerda Gram tushganini ko‘rish</Link>.</Step>
      </Steps>
      <p>Qoidalarning to‘liq matni: <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment shartlari</a> va <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Content Creator Rewards shartlari</a>.</p>
      <h2 id="uchinchi-tomon-botiga-qoldiq-berishdan">Uchinchi tomon botiga qoldiq berishdan oldin nimani bilish kerak?</h2>
      <p>Ba’zi kanal egalari hamyon bilan ovora bo‘lmaslik uchun uchinchi tomonni tanlaydi. Bu sizning qaroringiz. Lekin xavflarni oldindan biling:</p>
      <ul>
        <li><b>Akkaunt xavfi.</b> Shartlarda faqat rasmiy ilovalardan foydalanish kanal egasining majburiyati sifatida sanalgan. Biror vosita kanal yoki akkauntga kirish huquqini so‘rasa, darhol to‘xtang.</li>
        <li><b>Javobgarlik bo‘shlig‘i.</b> Uchinchi tomon botlari Telegram’ning asosiy interfeysi qismi emas. Mablag‘ yo‘qolsa, Telegram’dan qaytarishni kutishga rasmiy asos yo‘q.</li>
        <li><b>Shartlar faqat postda.</b> 80% raqamini post emas, xizmatning o‘zi yozma ko‘rsatsin. Bot ichidagi shartni o‘qing va skrinshot qilib qo‘ying.</li>
        <li><b>Maxfiy ma’lumot.</b> 2FA paroli, SMS kod yoki kanal egaligini hech kimga topshirmang. Bular ishlatilsa, qoldiqdan ham, kanaldan ham ayrilish mumkin.</li>
        <li><b>Kichik sinov.</b> Qoldiq katta bo‘lsa, avval eng kichik summa bilan jarayonni sinab ko‘ring.</li>
        <li><b>Bosim belgilari.</b> «Tezroq o‘tkazing, taklif tugaydi» degan shoshiltirish, kurs bo‘yicha va’dalar va asl nomga o‘xshatilgan bot username’lari xavf belgisi.</li>
      </ul>
      <h2 id="kanal-uchun-stars-yoki-premium">Kanal uchun Stars yoki Premium kerak bo‘lsa, qoldiqqa tegish shartmi?</h2>
      <p>Shart emas. Ba’zi kanal egalari qoldiqni Stars yoki Premium olish uchun yechmoqchi bo‘ladi. Bunda zanjir uzayadi: Gram, kurs, foizli ulush va hamyon. Kanal ehtiyoji uchun Stars yoki Premium kerak bo‘lsa, ularni to‘g‘ridan-to‘g‘ri so‘mda olish mumkin.</p>
      <p><Link href="/stars">Telegram Stars</Link> uchun @StarsPaymee_bot faqat @username so‘raydi, parol yoki SMS kod so‘ramaydi. 1 ta Stars narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</p>
      <p>Premium obunachilar kanalga boost bera oladi. Darajalar nimani ochishi haqida: <Link href="/blog/telegram-boost-darajalari">boost darajalari</Link>. <Link href="/premium">Telegram Premium</Link> narxi hamma to‘lov usulida bir xil: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Akkauntda faol Premium bo‘lsa, bot yangi Premium buyurtmasini ochmaydi: muddat faol obuna ustiga qo‘shilmaydi.</p>
      <p>StarsPaymee mustaqil xizmat. U foydalanuvchidan Gram qoldig‘ini ham, Stars yoki sovg‘ani ham sotib olmaydi. Shu sababli kanal balansini chiqarishda u vositachi bo‘la olmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Tonnel Cash Out’ni Telegram yoki Fragment tavsiya qiladimi?", answer: "Yo‘q, bunday tavsiya topilmadi: rasmiy domenlarda Tonnel umuman tilga olinmagan. Telegram shartlariga ko‘ra kanal mukofotlarini Fragment qayta ishlaydi." },
  { question: "80 foizdan tashqari qism kimga tushadi?", answer: "Bu rasmiy manbalarda ham, tekshirilgan boshqa joylarda ham yozilmagan. Taqsimot haqida faqat xizmatning o‘z yozma shartlari javob bera oladi, ularni bot ichida o‘qing." },
  { question: "Star balansim ham Gram kabi tez ochiladimi?", answer: "Yo‘q. Gram mukofoti 2 kundan keyin yechishga ochiladi, Star mukofoti esa 21 kun kutadi. Shuning uchun ikki balansni alohida rejalashtiring." },
  { question: "Qoldiqni bir necha oy yechmasam, keyin ham olaman deb ishonsam bo‘ladimi?", answer: "Kafolat yo‘q. Telegram yechilmagan mukofotlarga muddat qo‘yish huquqini saqlab qolgan, muddat o‘tsa mukofot kuyib ketadi." },
  { question: "Kanal qoldig‘ini to‘g‘ridan-to‘g‘ri Click yoki Payme kartamga tushirsa bo‘ladimi?", answer: "Rasmiy shartlarda bunday yo‘l ko‘rsatilmagan. Sukut bo‘yicha mukofot Gram ko‘rinishida Fragment’ga ulangan hamyonga chiqadi." },
  { question: "Uchinchi tomon botini ishlatsam kanalimga cheklov qo‘yiladimi?", answer: "Faqat botdan foydalangani uchun jazo borligi tasdiqlanmagan. Ammo shartlar kanal egasidan faqat rasmiy ilovalarni ishlatishni talab qiladi, shuning uchun akkauntga kirish so‘raydigan vositalardan saqlaning." },
  { question: "Qoldiqni reklamaga yo‘naltirsam, kurs tebranishi meni qiynaydimi?", answer: "Reklama uchun konvertatsiya qanday ishlashi bu maqolada tasdiqlanmagan, aniq qiymatni reklama kabinetida ko‘ring. Rasmiy hujjatdagi kurs qoidasi Gramdagi mukofot qiymatiga tegishli." },
  { question: "Hamyon manzilida bitta belgi xato bo‘lsa, Fragment yechimni to‘xtatadimi?", answer: "Bunga ishonmang: shartlarga ko‘ra yechim bekor qilinmaydi va qaytarilmaydi, xato hamyon ishlatilgan holatda ham. Manzilni nusxa olib qo‘yib, tasdiqlashdan oldin solishtiring." },
  { question: "Tonnel botida parol yoki SMS kod so‘ralsa nima qilay?", answer: "Jarayonni darhol to‘xtating va hech narsa kiritmang. Parol yoki kod boshqa odamda bo‘lsa, akkaunt va kanalni yo‘qotish xavfi tug‘iladi." },
  { question: "StarsPaymee kanalimdagi Gram qoldig‘ini so‘mga almashtirib beradimi?", answer: "Yo‘q. StarsPaymee foydalanuvchidan Gram, Stars yoki sovg‘a sotib olmaydi, u faqat Stars, Premium va boshqa xizmatlarni so‘mda sotadi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Чаще всего нет. Если у вас есть кошелёк, а баланс уже открыт для вывода, официальный вывод через Fragment выгоднее. Пятая часть суммы не уходит посреднику, а сам процесс опирается на условия Telegram. Условие «80%» от Tonnel Cash Out встречается только в посте Telegram-канала и официально не подтверждено. Если вы планируете развивать канал, баланс можно потратить и на рекламу.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#tonnel-cash-outning-80-foizli", label: "Что обещает Tonnel Cash Out с условием «80%»?" },
          { href: "#statistikadagi-raqam-qachon-sizning-mablagingizga", label: "Когда цифра в статистике становится вашими деньгами?" },
          { href: "#fragment-reklama-va-tonnel-kanal", label: "Fragment, реклама и Tonnel: сравнение для владельца канала" },
          { href: "#80-foiz-kichik-va-katta", label: "Сколько теряется при 80% на маленьком и большом балансе?" },
          { href: "#qaror-oldidan-qaysi-raqamlarni-yozib", label: "Какие цифры записать перед тем, как решать?" },
          { href: "#qaysi-holatda-qaysi-yol-maqul", label: "Какой путь подходит в вашей ситуации?" },
          { href: "#rasmiy-yol-bilan-qoldiqni-qanday", label: "Как вывести баланс официальным способом?" },
          { href: "#uchinchi-tomon-botiga-qoldiq-berishdan", label: "Что знать, прежде чем отдавать баланс стороннему боту?" },
          { href: "#kanal-uchun-stars-yoki-premium", label: "Нужно ли трогать баланс, если каналу нужны Stars или Premium?" },
        ]}
      />
      <h2 id="tonnel-cash-outning-80-foizli">Что обещает Tonnel Cash Out с условием «80%»?</h2>
      <p>Предложение разошлось через пост в Telegram-канале. Владельцу канала предлагают простой путь: перевести Gram-баланс канала на счёт Tonnel и получить 80% от него. Кажется, что так можно обойтись без официального вывода и возни с кошельком.</p>
      <p>Проверка показывает другое:</p>
      <ul>
        <li>На telegram.org, core.telegram.org и fragment.com нет сведений о Tonnel, Tonnel Marketplace или Tonnel Cash Out. Надёжность сервиса не подтверждена, но и не опровергнута.</li>
        <li>Условия «80%» в официальных источниках нет. Это лишь слова автора поста.</li>
        <li>Кому и на каком основании уходят оставшиеся 20%, официальные документы не говорят.</li>
      </ul>
      <p>Обратите внимание и на термины. Название «Gram Earnings» на официальных страницах Telegram не встречается. В документах это называется <b>Content Creator Rewards</b> — вознаграждение, которое начисляется на основе Gram- и Star-баланса, накопленного в канале. Обработку этих вознаграждений Telegram передал Fragment (<a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">условия для авторов контента</a>). Размер вознаграждения и способ вывода Telegram определяет по своему усмотрению. Поэтому об официальном пути стоит узнавать из условий Telegram и Fragment, а не из поста в канале.</p>
      <h2 id="statistikadagi-raqam-qachon-sizning-mablagingizga">Когда цифра в статистике становится вашими деньгами?</h2>
      <p>Многие считают сумму в статистике канала деньгами, которые уже лежат в кармане. В условиях написано иначе. Ожидающий баланс, который показан в канале, становится средствами владельца только в одном из случаев:</p>
      <ul>
        <li>вывод запрошен и средства успешно переведены;</li>
        <li>баланс использован для получения вознаграждения;</li>
        <li>баланс потрачен на размещение рекламы.</li>
      </ul>
      <p>Значит, фраза «переведите баланс на счёт Tonnel» не описывает официальный процесс. По официальному пути Gram выводится только на кошелёк, который вы подключили к Fragment. Как сторонний сервис встраивается в эту цепочку, зависит от его собственных условий, а их не подтверждает ни один официальный источник.</p>
      <Notice label={"Важно"}>Вознаграждение в Gram открывается для вывода через 2 дня после начисления, в Stars — через 21 день. Telegram может по своему усмотрению установить срок для невыведенных вознаграждений. После этого срока они считаются утраченными. Поэтому держать баланс месяцами тоже небезопасно.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragment-reklama-va-tonnel-kanal">Fragment, реклама и Tonnel: сравнение для владельца канала</h2>
      <CompareTable
        headers={["Критерий", "Вывод через Fragment", "Трата на рекламу", "Tonnel Cash Out"]}
        rows={[
          ["Что вы получаете", "Gram на подключённый вами кошелёк", "Не деньги, а рекламу для канала", "По словам поста — 80% баланса"],
          ["Основа расчёта", "Курс CoinMarketCap, обновляется примерно каждые 5 минут", "В условиях упомянута возможность тратить баланс на рекламу", "Условие есть только в посте канала"],
          ["Нужен ли кошелёк", "Да", "В официальном тексте требование кошелька не упомянуто", "Зависит от условий сервиса"],
          ["Какой документ регулирует", "Условия Telegram и Fragment", "Условия Telegram, подробности — в рекламном кабинете", "Только собственные условия сервиса"],
          ["Вернут ли при ошибке", "Нет, даже при неверном кошельке", "В этой статье не подтверждено", "Не подтверждено"],
        ]}
      />
      <p>Источники официальных строк: по выводу и курсу — <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">условия Fragment</a>, по невозвратности и ответственности за кошелёк — условия для авторов контента. Telegram не отвечает за криптокошельки, на которые пользователь выводит заработок, и не контролирует их. Боты сторонних разработчиков при этом не входят в основной интерфейс Telegram (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>Как работает рекламный путь, отдельно разобрано на примере Stars: <Link href="/blog/telegram-ads-stars-sarflash">как потратить заработанные каналом Stars на Telegram Ads</Link>.</p>
      <h2 id="80-foiz-kichik-va-katta">Сколько теряется при 80% на маленьком и большом балансе?</h2>
      <p>Доля в 20% берётся от всего баланса. Чем больше сумма, тем больше потеря. Цифры ниже условные: это не курс, а только иллюстрация расчёта.</p>
      <CompareTable
        headers={["Баланс в канале", "Вам по условию поста", "Уходит посреднику"]}
        rows={[
          ["5 Gram", "4 Gram", "1 Gram"],
          ["8 Gram", "6,4 Gram", "1,6 Gram"],
          ["50 Gram", "40 Gram", "10 Gram"],
          ["200 Gram", "160 Gram", "40 Gram"],
        ]}
      />
      <p>Есть ли дополнительные расходы при официальном выводе и каковы они, в этой статье не подтверждено. Итоговую сумму смотрите в окне вывода на Fragment и сравнивайте с 80% из таблицы.</p>
      <p>На расчёт влияет и курс. Fragment пересчитывает вознаграждение в Gram по рыночному курсу, который обновляется примерно каждые 5 минут. Курс может как вырасти, так и упасть. Поэтому, ожидая «хорошего курса» и долго не выводя баланс, вы добавляете к курсовому риску ещё и риск, что для невыведенного вознаграждения установят срок.</p>
      <p>О переименовании Toncoin в Gram и о том, как это выглядит в кошельках: <Link href="/blog/toncoin-endi-gram">Toncoin теперь называется Gram</Link>.</p>
      <h2 id="qaror-oldidan-qaysi-raqamlarni-yozib">Какие цифры записать перед тем, как решать?</h2>
      <p>Решение лучше принимать по цифрам, а не по настроению. Запишите на бумаге или в заметках:</p>
      <ul>
        <li><b>Тип баланса.</b> Gram или Stars. Сроки открытия для вывода у них разные.</li>
        <li><b>Дата начисления.</b> Прошло ли 2 дня для Gram? Если нет, пока не подходит ни один путь.</li>
        <li><b>Кошелёк.</b> Есть ли у вас кошелёк под вашим контролем, чтобы подключить его к Fragment? Если нет, насколько сложно его завести?</li>
        <li><b>Официальная сумма.</b> Итоговое количество Gram в окне вывода.</li>
        <li><b>Сумма от Tonnel.</b> 80% баланса. Если в условиях бота указана другая цифра, записывайте именно её.</li>
        <li><b>Цель.</b> Вам нужны деньги, реклама канала или Stars и Premium для канала?</li>
      </ul>
      <p>Если официальная сумма больше суммы от Tonnel и кошелёк у вас есть, выбор очевиден. Если цель — рост канала, направить баланс прямо на рекламу короче, чем выводить деньги и потом снова тратить их на продвижение.</p>
      <h2 id="qaysi-holatda-qaysi-yol-maqul">Какой путь подходит в вашей ситуации?</h2>
      <ul>
        <li><b>Кошелёк есть, баланс открыт.</b> Официальный вывод в приоритете: в цепочке только Telegram, Fragment и ваш кошелёк.</li>
        <li><b>Есть план развивать канал.</b> Присмотритесь к трате на рекламу. Деньги на руки не выйдут, зато баланс поработает на продвижение. Результат зависит от качества рекламы, число подписчиков никто не гарантирует.</li>
        <li><b>Кошелька нет, и заводить его не хочется.</b> Сервисы вроде Tonnel выглядят удобно. Но они не часть официального процесса. Telegram не берёт на себя ответственность за такие сервисы и криптокошельки.</li>
        <li><b>Баланс небольшой.</b> Помните, что для него могут установить срок. Проверьте сумму в официальном окне или направьте баланс на рекламу, но не откладывайте бесконечно.</li>
        <li><b>Вознаграждение предлагают в другой форме.</b> В некоторых странах Fragment по своему усмотрению может выплачивать вознаграждение в стейблкоинах или другими способами. Какие варианты доступны в Узбекистане, проверяйте на самом Fragment.</li>
      </ul>
      <p>Как вообще складывается доход канала: <Link href="/blog/telegram-kanal-stars-monetizatsiya">монетизация канала через Stars</Link>.</p>
      <h2 id="rasmiy-yol-bilan-qoldiqni-qanday">Как вывести баланс официальным способом?</h2>
      <Steps>
        <Step title={"Проверьте срок"}>убедитесь, что с начисления вознаграждения в Gram прошло 2 дня. Только что поступившая сумма может быть ещё не открыта для вывода.</Step>
        <Step title={"Защитите аккаунт"}>включите двухэтапную аутентификацию и пользуйтесь только официальными приложениями Telegram. В условиях это прописано как обязанность владельца канала. Как настроить: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита аккаунта от угона и 2FA</Link>.</Step>
        <Step title={"Подключите кошелёк"}>привяжите к Fragment кошелёк, который контролируете вы. По умолчанию вознаграждение выдаётся в Gram и выводится именно на него.</Step>
        <Step title={"Сверьте адрес"}>перед подтверждением проверьте начало и конец адреса кошелька. Вывод на неверный кошелёк не отменяется и не возвращается.</Step>
        <Step title={"Убедитесь в поступлении"}>найдите входящую транзакцию на свой кошелёк в эксплорере. Как это сделать: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">как увидеть поступление Gram в эксплорере</Link>.</Step>
      </Steps>
      <p>Полный текст правил: <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">условия Fragment</a> и <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">условия Content Creator Rewards</a>.</p>
      <h2 id="uchinchi-tomon-botiga-qoldiq-berishdan">Что знать, прежде чем отдавать баланс стороннему боту?</h2>
      <p>Некоторые владельцы каналов выбирают сторонний сервис, чтобы не возиться с кошельком. Это ваше решение. Но о рисках лучше знать заранее:</p>
      <ul>
        <li><b>Риск для аккаунта.</b> В условиях использование только официальных приложений названо обязанностью владельца канала. Если какой-то инструмент просит доступ к каналу или аккаунту, сразу остановитесь.</li>
        <li><b>Пробел в ответственности.</b> Сторонние боты не входят в основной интерфейс Telegram. Если средства пропадут, официальных оснований ждать возврата от Telegram нет.</li>
        <li><b>Условия только в посте.</b> Пусть цифру 80% письменно укажет сам сервис, а не автор поста. Прочитайте условия внутри бота и сохраните скриншот.</li>
        <li><b>Конфиденциальные данные.</b> Никому не передавайте пароль 2FA, SMS-код или права владельца канала. Если ими воспользуются, можно лишиться и баланса, и канала.</li>
        <li><b>Пробный перевод.</b> Если баланс крупный, сначала проверьте процесс на минимальной сумме.</li>
        <li><b>Признаки давления.</b> Спешка в духе «переводите скорее, предложение заканчивается», обещания по курсу и username ботов, похожие на оригинальное название, — тревожные сигналы.</li>
      </ul>
      <h2 id="kanal-uchun-stars-yoki-premium">Нужно ли трогать баланс, если каналу нужны Stars или Premium?</h2>
      <p>Не обязательно. Некоторые владельцы каналов хотят вывести баланс, чтобы купить Stars или Premium. Цепочка при этом удлиняется: Gram, курс, процент посредника и кошелёк. Если Stars или Premium нужны для канала, их можно купить напрямую в сумах.</p>
      <p>Для покупки <Link href="/stars">Telegram Stars</Link> @StarsPaymee_bot запрашивает только @username — ни пароль, ни SMS-код не нужны. Цена 1 Stars зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Обычно заказ доставляется автоматически за несколько секунд.</p>
      <p>Подписчики с Premium могут бустить канал. Что открывает каждый уровень: <Link href="/blog/telegram-boost-darajalari">уровни буста</Link>. Цена <Link href="/premium">Telegram Premium</Link> одинакова при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Если на аккаунте уже активен Premium, бот не откроет новый заказ: срок не добавляется поверх действующей подписки.</p>
      <p>StarsPaymee — независимый сервис. Он не покупает у пользователей ни Gram-баланс, ни Stars, ни подарки. Поэтому выступать посредником при выводе баланса канала он не может.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Telegram или Fragment рекомендуют Tonnel Cash Out?", answer: "Нет, такой рекомендации не нашлось: на официальных доменах Tonnel вообще не упоминается. По условиям Telegram вознаграждения каналов обрабатывает Fragment." },
  { question: "Кому достаются оставшиеся 20%?", answer: "Этого не сказано ни в официальных источниках, ни в других проверенных местах. Ответить на вопрос о распределении могут только письменные условия самого сервиса — читайте их внутри бота." },
  { question: "Star-баланс открывается для вывода так же быстро, как Gram?", answer: "Нет. Вознаграждение в Gram доступно через 2 дня, а в Stars придётся ждать 21 день. Поэтому планируйте вывод двух балансов по отдельности." },
  { question: "Если не выводить баланс несколько месяцев, он точно сохранится?", answer: "Гарантий нет. Telegram оставил за собой право установить срок для невыведенных вознаграждений, после которого они сгорают." },
  { question: "Можно вывести баланс канала сразу на карту через Click или Payme?", answer: "Официальные условия такой возможности не описывают. По умолчанию вознаграждение выплачивается в Gram на кошелёк, подключённый к Fragment." },
  { question: "Ограничат ли мой канал, если я воспользуюсь сторонним ботом?", answer: "Что наказывают за само использование бота, не подтверждено. Но условия требуют от владельца канала пользоваться только официальными приложениями, так что избегайте инструментов, которые просят доступ к аккаунту." },
  { question: "Если направить баланс на рекламу, будут ли меня волновать колебания курса?", answer: "Как работает конвертация для рекламы, в этой статье не подтверждено — точную сумму смотрите в рекламном кабинете. Правило о курсе в официальном документе касается стоимости вознаграждения в Gram." },
  { question: "Остановит ли Fragment вывод, если в адресе кошелька ошибка в одном символе?", answer: "Не рассчитывайте на это: по условиям вывод не отменяется и не возвращается даже при неверном кошельке. Скопируйте адрес и сверьте его перед подтверждением." },
  { question: "Что делать, если бот Tonnel просит пароль или SMS-код?", answer: "Сразу прекратите процесс и ничего не вводите. Если пароль или код окажется у постороннего, вы рискуете потерять и аккаунт, и канал." },
  { question: "Может ли StarsPaymee обменять Gram-баланс моего канала на сумы?", answer: "Нет. StarsPaymee не покупает у пользователей ни Gram, ни Stars, ни подарки — сервис только продаёт Stars, Premium и другие услуги за сумы." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>In most cases, no. If you have a wallet and your balance is already open for withdrawal, the official Fragment route leaves you with more. A fifth of the amount doesn’t go to anyone else, and the process follows Telegram’s own terms. Tonnel Cash Out’s “80%” condition appears only in a Telegram channel post and has not been officially confirmed. If you plan to grow the channel, you can also spend the balance on ads.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#tonnel-cash-outning-80-foizli", label: "What does Tonnel Cash Out’s 80% offer promise?" },
          { href: "#statistikadagi-raqam-qachon-sizning-mablagingizga", label: "When does the number in your stats become your money?" },
          { href: "#fragment-reklama-va-tonnel-kanal", label: "Fragment, ads or Tonnel: a comparison table for channel owners" },
          { href: "#80-foiz-kichik-va-katta", label: "How much does the 80% cost on small and large balances?" },
          { href: "#qaror-oldidan-qaysi-raqamlarni-yozib", label: "Which numbers should you write down before deciding?" },
          { href: "#qaysi-holatda-qaysi-yol-maqul", label: "Which route fits which situation?" },
          { href: "#rasmiy-yol-bilan-qoldiqni-qanday", label: "How do I withdraw the balance the official way?" },
          { href: "#uchinchi-tomon-botiga-qoldiq-berishdan", label: "What should you know before handing your balance to a third-party bot?" },
          { href: "#kanal-uchun-stars-yoki-premium", label: "Need Stars or Premium for the channel: do you have to touch the balance?" },
        ]}
      />
      <h2 id="tonnel-cash-outning-80-foizli">What does Tonnel Cash Out’s 80% offer promise?</h2>
      <p>The offer spread through a post in a Telegram channel. It tells channel owners to move the channel’s Gram balance to a Tonnel account and receive 80% of it. That seems to skip the official withdrawal steps and any work with a wallet.</p>
      <p>Checking it against official sources gives a different picture:</p>
      <ul>
        <li>No information about Tonnel, Tonnel Marketplace or Tonnel Cash Out was found on telegram.org, core.telegram.org or fragment.com. The service’s reliability is not confirmed, but it isn’t disproved either.</li>
        <li>The “80%” condition does not appear in any official source. It comes only from the post’s author.</li>
        <li>Official documents say nothing about who gets the remaining 20% or on what basis.</li>
      </ul>
      <p>The wording matters too. The name “Gram Earnings” does not appear on Telegram’s official pages. In official documents this is called <b>Content Creator Rewards</b>: a reward based on the Gram and Star balances accrued in your channel. Telegram has outsourced the processing of these rewards to Fragment (<a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Content Creator terms</a>). Telegram decides the reward amount and the withdrawal method at its sole discretion. So the official route should be learned from Telegram’s and Fragment’s terms, not from a channel post.</p>
      <h2 id="statistikadagi-raqam-qachon-sizning-mablagingizga">When does the number in your stats become your money?</h2>
      <p>Many owners treat the amount in channel statistics as money already in their pocket. The terms say otherwise. The pending balance shown in your channel becomes funds you own only after one of these happens:</p>
      <ul>
        <li>a withdrawal has been requested and the funds have been successfully transferred;</li>
        <li>the balance has been used to receive rewards;</li>
        <li>the balance has been spent on placing ads.</li>
      </ul>
      <p>That means “transfer your balance to your Tonnel account” doesn’t describe the official process. On the official route, Gram goes only to the wallet you connected to Fragment. How a third party fits into that chain depends on its own terms, and no official source has confirmed them.</p>
      <Notice label={"Important"}>Gram rewards become available for withdrawal 2 days after they accrue, Star rewards after 21 days. Telegram may set an expiration date on unredeemed rewards at its own discretion. Once it passes, they are considered forfeit. So sitting on the balance for months isn’t safe either.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragment-reklama-va-tonnel-kanal">Fragment, ads or Tonnel: a comparison table for channel owners</h2>
      <CompareTable
        headers={["Criterion", "Withdrawal via Fragment", "Spending on ads", "Tonnel Cash Out"]}
        rows={[
          ["What you get", "Gram, sent to the wallet you connected", "Not money, but ads for your channel", "80% of the balance, according to the post"],
          ["Basis for the calculation", "CoinMarketCap rate, updated roughly every 5 minutes", "The terms mention using the balance to place ads", "Condition exists only in a channel post"],
          ["Wallet needed", "Yes", "No wallet requirement mentioned in the official text", "Depends on the service’s terms"],
          ["Governing document", "Telegram and Fragment terms", "Telegram terms; check details in the ads dashboard", "Only the service’s own terms"],
          ["Reversible if you make a mistake", "No, not even with a wrong wallet", "Not confirmed in this article", "Not confirmed"],
        ]}
      />
      <p>Sources for the official rows: <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment terms</a> for withdrawal and the rate, and the Content Creator terms for irreversibility and wallet liability. Telegram has no liability for or control over the crypto wallets you withdraw earnings to. Bots by third-party developers are not part of Telegram’s core interface (<a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>).</p>
      <p>How the ads route works is covered separately using Stars as the example: <Link href="/blog/telegram-ads-stars-sarflash">spending channel-earned Stars on Telegram Ads</Link>.</p>
      <h2 id="80-foiz-kichik-va-katta">How much does the 80% cost on small and large balances?</h2>
      <p>The 20% share is taken from the balance, so the bigger the amount, the more you lose. The figures below are illustrative, not exchange rates. They only show the math:</p>
      <CompareTable
        headers={["Channel balance", "You receive under the post’s terms", "Portion you give up"]}
        rows={[
          ["5 Gram", "4 Gram", "1 Gram"],
          ["8 Gram", "6.4 Gram", "1.6 Gram"],
          ["50 Gram", "40 Gram", "10 Gram"],
          ["200 Gram", "160 Gram", "40 Gram"],
        ]}
      />
      <p>Whether the official withdrawal has any extra cost, and how much, is not confirmed in this article. Check the final amount in Fragment’s withdrawal window and compare it with the 80% in the table.</p>
      <p>The rate also changes the math. Fragment calculates the Gram value of your reward at the market rate, which updates roughly every 5 minutes. It can move up or down. Holding the balance while you wait for a “good rate” adds to the risk that an expiration date gets set on unredeemed rewards.</p>
      <p>For how Toncoin was renamed Gram and how that shows up in wallets, see <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</p>
      <h2 id="qaror-oldidan-qaysi-raqamlarni-yozib">Which numbers should you write down before deciding?</h2>
      <p>Decide on numbers, not on mood. Write these down on paper or in a note:</p>
      <ul>
        <li><b>Balance type.</b> Gram balance or Star balance? They unlock for withdrawal on different schedules.</li>
        <li><b>Accrual date.</b> Have 2 days passed for Gram? If not, no route works yet.</li>
        <li><b>Wallet status.</b> Do you have a wallet you control to connect to Fragment? If not, how hard would it be to set one up?</li>
        <li><b>Official amount.</b> The final Gram figure shown in the withdrawal window.</li>
        <li><b>Tonnel amount.</b> 80% of the balance. If the bot’s terms show a different number, write down that one.</li>
        <li><b>Goal.</b> Do you need cash, channel ads, or Stars and Premium for the channel?</li>
      </ul>
      <p>If the official amount is higher than the Tonnel amount and you have a wallet, the choice is clear. If your goal is channel growth, sending the balance straight to ads is shorter than withdrawing it and then paying for ads again.</p>
      <h2 id="qaysi-holatda-qaysi-yol-maqul">Which route fits which situation?</h2>
      <ul>
        <li><b>You have a wallet and the balance is unlocked.</b> The official withdrawal wins: the chain contains only Telegram, Fragment and your own wallet.</li>
        <li><b>You plan to grow the channel.</b> Consider spending on ads. The money doesn’t reach you, but the balance works for your channel’s promotion. Results depend on ad quality; subscriber numbers aren’t guaranteed.</li>
        <li><b>No wallet, and you don’t want one.</b> Services like Tonnel look convenient, but they aren’t part of the official process. Telegram takes no responsibility for such services or for crypto wallets.</li>
        <li><b>The balance is small.</b> Remember that an expiration date can be set. Check the amount in the official window or send the balance to ads, but don’t postpone indefinitely.</li>
        <li><b>The reward is offered in another form.</b> In some countries Fragment may pay rewards in stablecoins or other payment methods. Check on Fragment itself which options are available in Uzbekistan.</li>
      </ul>
      <p>For how channel income is formed in general, see <Link href="/blog/telegram-kanal-stars-monetizatsiya">monetizing a channel with Stars</Link>.</p>
      <h2 id="rasmiy-yol-bilan-qoldiqni-qanday">How do I withdraw the balance the official way?</h2>
      <Steps>
        <Step title={"Check the timing"}>make sure 2 days have passed since the Gram reward accrued. A freshly credited amount may not be open for withdrawal yet.</Step>
        <Step title={"Secure the account"}>turn on Two-Step Verification and use only official Telegram apps. The terms list this as a channel owner’s obligation. Setup guide: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account from theft with 2FA</Link>.</Step>
        <Step title={"Connect a wallet"}>link a wallet you control to Fragment. By default the reward is issued in Gram and sent to that wallet.</Step>
        <Step title={"Compare the address"}>before confirming, check the beginning and end of the wallet address. A withdrawal sent to the wrong wallet can’t be cancelled or refunded.</Step>
        <Step title={"Confirm it arrived"}>find the incoming entry for your wallet in an explorer. Here’s how: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">checking that Gram arrived in the explorer</Link>.</Step>
      </Steps>
      <p>Full text of the rules: <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment terms</a> and <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Content Creator Rewards terms</a>.</p>
      <h2 id="uchinchi-tomon-botiga-qoldiq-berishdan">What should you know before handing your balance to a third-party bot?</h2>
      <p>Some channel owners pick a third party to avoid dealing with a wallet. That’s your call, but know the risks first:</p>
      <ul>
        <li><b>Account risk.</b> The terms list using only official apps as a channel owner’s obligation. If any tool asks for access to your channel or account, stop immediately.</li>
        <li><b>Liability gap.</b> Third-party bots aren’t part of Telegram’s core interface. If funds are lost, there’s no official basis to expect Telegram to return them.</li>
        <li><b>Terms only in a post.</b> Make the service itself state the 80% figure in writing, not just a post. Read the terms inside the bot and take a screenshot.</li>
        <li><b>Sensitive data.</b> Never hand over your 2FA password, SMS code or channel ownership. If someone uses them, you can lose both the balance and the channel.</li>
        <li><b>Small test first.</b> If the balance is large, try the process with the smallest possible amount.</li>
        <li><b>Pressure signs.</b> “Transfer now, the offer is ending” urgency, promises about the rate, and bot usernames imitating the original are red flags.</li>
      </ul>
      <h2 id="kanal-uchun-stars-yoki-premium">Need Stars or Premium for the channel: do you have to touch the balance?</h2>
      <p>No. Some channel owners want to withdraw the balance just to buy Stars or Premium. That lengthens the chain: Gram, the rate, a percentage cut and a wallet. If the channel needs Stars or Premium, you can buy them directly in so‘m.</p>
      <p>For <Link href="/stars">Telegram Stars</Link>, @StarsPaymee_bot asks only for your @username, never a password or SMS code. The price of 1 Star depends on the payment method: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from the bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars. Orders are usually delivered automatically within a few seconds.</p>
      <p>Premium subscribers can boost a channel. What each level unlocks: <Link href="/blog/telegram-boost-darajalari">boost levels</Link>. <Link href="/premium">Telegram Premium</Link> costs the same with every payment method: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. If the account already has active Premium, the bot won’t open a new Premium order: the term isn’t added on top of an active subscription.</p>
      <p>StarsPaymee is an independent service. It doesn’t buy Gram balances, Stars or gifts from users, so it can’t act as an intermediary for withdrawing your channel balance.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://fragment.com/terms", label: "Terms of Service" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Do Telegram or Fragment recommend Tonnel Cash Out?", answer: "No such recommendation was found: Tonnel isn’t mentioned at all on the official domains. Under Telegram’s terms, channel rewards are processed by Fragment." },
  { question: "Who gets the part beyond the 80%?", answer: "Neither official sources nor anything else we checked says. Only the service’s own written terms can answer that, so read them inside the bot." },
  { question: "Does my Star balance unlock as fast as Gram?", answer: "No. Gram rewards open for withdrawal after 2 days, while Star rewards take 21 days. Plan the two balances separately." },
  { question: "If I leave the balance for a few months, can I count on getting it later?", answer: "There’s no guarantee. Telegram reserves the right to set an expiration date on unredeemed rewards, and once it passes the reward is forfeited." },
  { question: "Can I send the channel balance straight to my Click or Payme card?", answer: "The official terms describe no such route. By default the reward is paid in Gram to the wallet connected to Fragment." },
  { question: "Will my channel be restricted if I use a third-party bot?", answer: "A penalty just for using a bot isn’t confirmed. But the terms require channel owners to use only official apps, so avoid any tool that asks for access to your account." },
  { question: "If I put the balance into ads, will rate swings hurt me?", answer: "How conversion works for ads isn’t confirmed in this article, so check the exact value in the ads dashboard. The rate rule in the official document applies to the Gram value of rewards." },
  { question: "Will Fragment stop the withdrawal if one character in the wallet address is wrong?", answer: "Don’t count on it: under the terms, withdrawals can’t be reversed or refunded, even when a wrong wallet is used. Paste the address and compare it before confirming." },
  { question: "What should I do if the Tonnel bot asks for my password or SMS code?", answer: "Stop right away and don’t enter anything. If someone else gets your password or code, you risk losing both the account and the channel." },
  { question: "Can StarsPaymee convert my channel’s Gram balance into so‘m?", answer: "No. StarsPaymee doesn’t buy Gram, Stars or gifts from users; it only sells Stars, Premium and other services for so‘m." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["Gram Earnings qoldig‘i Tonnel","Tonnel Cash Out 80 foiz","Gram Earnings yechish","kanal Gram balansini yechish","Tonnel Cash Out xavfsizmi","Content Creator Rewards yechish","Fragment orqali Gram yechish","остаток Gram Earnings Tonnel","Tonnel Cash Out 80%","как вывести Gram Earnings","вывод Gram с канала Fragment"],
  howToSteps: [
    { name: "Muddatni tekshiring", text: "Gram mukofoti hisoblangan kundan 2 kun o‘tganiga ishonch hosil qiling. Yangi tushgan summa hali yechishga ochilmagan bo‘lishi mumkin." },
    { name: "Akkauntni himoyalang", text: "ikki bosqichli tasdiqlashni yoqing va faqat rasmiy Telegram ilovalaridan foydalaning. Shartlarda bu kanal egasining majburiyati sifatida yozilgan. Sozlash tartibi: akkauntni o‘g‘irlashdan himoya va 2FA." },
    { name: "Hamyon ulang", text: "Fragment’ga o‘zingiz nazorat qiladigan hamyonni ulang. Mukofot sukut bo‘yicha Gram ko‘rinishida beriladi va shu hamyonga chiqadi." },
    { name: "Manzilni solishtiring", text: "yechishni tasdiqlashdan oldin hamyon manzilining boshi va oxirini tekshiring. Noto‘g‘ri hamyonga ketgan yechim bekor qilinmaydi va qaytarilmaydi." },
    { name: "Tushganini tekshiring", text: "eksplorerda hamyoningizdagi kiruvchi yozuvni toping. Qanday qilish kerakligi bu yerda ko‘rsatilgan: eksplorerda Gram tushganini ko‘rish." },
  ],
  locales: {
    uz: {
      title: "Tonnel Cash Out 80 foiz: kanal qoldig‘ini rasmiy yechishdan foydalimi?",
      excerpt: "Ko‘p hollarda yo‘q: hamyon bor va qoldiq ochilgan bo‘lsa, Fragment orqali rasmiy yechish foydaliroq. Quyida 80% hisobi, reklama varianti, xavflar va qadamlar bor.",
      metaTitle: "Tonnel Cash Out 80 foiz: kanal qoldig‘ini rasmiy yechishdan",
      metaDescription: "Ko‘p hollarda yo‘q: hamyon bor va qoldiq ochilgan bo‘lsa, Fragment orqali rasmiy yechish foydaliroq.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Tonnel Cash Out 80%: выгоднее ли он официального вывода баланса канала?",
      excerpt: "Чаще всего нет: если у вас есть кошелёк и баланс открыт для вывода, официальный вывод через Fragment выгоднее. Ниже — расчёт 80%, вариант с рекламой, риски и пошаговая инструкция.",
      metaTitle: "Tonnel Cash Out 80%: выгоднее ли он официального вывода",
      metaDescription: "Чаще всего нет: если у вас есть кошелёк и баланс открыт для вывода, официальный вывод через Fragment выгоднее.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Tonnel Cash Out 80%: Is It Better Than an Official Channel Withdrawal?",
      excerpt: "Usually not: with a wallet and an unlocked balance, withdrawing through Fragment keeps more of your money. Covers the 80% math, the ads option, third-party risks and the official withdrawal steps.",
      metaTitle: "Tonnel Cash Out 80%: Is It Better Than an Official Channel",
      metaDescription: "Usually not: with a wallet and an unlocked balance, withdrawing through Fragment keeps more of your money.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
