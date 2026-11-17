import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "guruhga-spam-akkauntlar-kirishini-toxtatish";

/**
 * Guruhga spam akkauntlar kirishini to‘xtatish: AI qo‘riqchimi yoki Stars?
 *
 * Avtoblogyoz yasagan maqola (2026-11-17): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram guruh yoki jamoa egasi spam va bot akkauntlar kirishini to‘xtatmoqchi. U AI bot kirish arizalarini tekshiradigan qo‘riqchi rejimni Stars bilan pullik kirish yoki pullik xabarlar bilan solishtiradi va «guruhga spam akkauntlar kirishini to‘xtatish» kabi so‘zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-17):
 *   https://telegram.org/blog/watch-apps-and-more
 *   https://telegram.org/faq
 *   https://core.telegram.org/bots/api-changelog
 *   https://core.telegram.org/bots/api
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Spam akkauntlarni guruh eshigi oldida to‘xtatishning eng ishonchli yo‘li — havola orqali kirishni arizali qilish va arizalarni admin yoki AI qo‘riqchi botga tekshirtirish. Telegram 2026-yil iyunida bu vazifani botlarga topshirish imkonini qo‘shdi. Stars bilan pullik kirish va pullik xabarlar esa asosiy qulf emas. Ular shu qulf ustidan qo‘yiladigan qo‘shimcha filtr.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#guruhga-spam-akkauntlar-kirishini-qaysi", label: "Guruhga spam akkauntlar kirishini qaysi yo‘llar bilan to‘xtatsa bo‘ladi?" },
          { href: "#ai-qoriqchi-pullik-kirish-va", label: "AI qo‘riqchi, pullik kirish va pullik xabarlar: qaysi biri nimani to‘sadi?" },
          { href: "#ai-qoriqchi-spamga-qarshi-qayerda", label: "AI qo‘riqchi spamga qarshi qayerda kuchli va qayerda ojiz?" },
          { href: "#guruhda-arizali-kirish-va-qoriqchi", label: "Guruhda arizali kirish va qo‘riqchi botni qanday ulash mumkin?" },
          { href: "#guruh-eshigini-begona-botga-topshirishdan", label: "Guruh eshigini begona botga topshirishdan oldin nimani bilish kerak?" },
          { href: "#kirish-testiga-qanday-savollar-qoysa", label: "Kirish testiga qanday savollar qo‘ysa bo‘ladi: ish jamoasi va hamjamiyat misollari" },
          { href: "#qoriqchi-xato-qaror-chiqarsa-admin", label: "Qo‘riqchi xato qaror chiqarsa, admin nima qiladi?" },
          { href: "#stars-bilan-pullik-tosiq-qachon", label: "Stars bilan pullik to‘siq qachon ma’qul va yulduzni so‘mda qanday olish mumkin?" },
          { href: "#spam-kirib-bolgan-bolsa-guruh", label: "Spam kirib bo‘lgan bo‘lsa, guruh va admin akkauntini qanday himoyalash kerak?" },
        ]}
      />
      <h2 id="guruhga-spam-akkauntlar-kirishini-qaysi">Guruhga spam akkauntlar kirishini qaysi yo‘llar bilan to‘xtatsa bo‘ladi?</h2>
      <p>Guruh egasida uchta asosiy to‘siq bor:</p>
      <ul>
        <li><b>Arizali kirish va admin tasdig‘i.</b> Havola orqali kelgan kishi darhol a’zo bo‘lmaydi, avval ariza qoldiradi. <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>ga ko‘ra, havola orqali qo‘shiladigan har bir kishi uchun admin tasdig‘ini majburiy qilish mumkin.</li>
        <li><b>AI qo‘riqchi bot.</b> O‘sha arizalarni sun’iy intellektli bot ko‘rib chiqadi. Siz uni admin qilib qo‘yasiz, u esa yangi kelganlarni tekshiradi.</li>
        <li><b>Pulli to‘siq.</b> Kirish Stars bilan pullik qilinadi yoki guruhda yozish pullik xabarga aylanadi. Bular haqida alohida maqolalar bor: <Link href="/blog/telegram-pullik-kanal-stars-obuna">Stars bilan pullik obuna</Link> va <Link href="/blog/telegram-pulli-xabarlar-paid-messages">pullik xabarlar</Link>.</li>
      </ul>
      <p>Ikkinchi yo‘l yangi. Telegram uni 2026-yil 11-iyundagi <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">blog postida</a> «AI Guardians», ya’ni guruhlar uchun AI qo‘riqchilar nomi bilan e’lon qilgan. Blogda yozilishicha, AI botlarni admin qilib, kirish arizalarini ko‘rib chiqishni ularga topshirish mumkin.</p>
      <p>Telegram kanallarida «endi chatlarga kirish uchun IQ-test paydo bo‘ldi» degan xabar tarqaldi. Bu to‘liq to‘g‘ri emas. Blogda IQ-test faqat hazilomuz misol sifatida tilga olingan va u guruhga kirishga emas, izoh yozishga bog‘langan. Telegram tayyor test bermaydi: savollarni qo‘riqchi botning muallifi o‘zi tuzadi.</p>
      <h2 id="ai-qoriqchi-pullik-kirish-va">AI qo‘riqchi, pullik kirish va pullik xabarlar: qaysi biri nimani to‘sadi?</h2>
      <CompareTable
        headers={["Usul", "Nimani to‘sadi", "Halol a’zoga noqulayligi", "Admin vaqti", "Kimga mos"]}
        rows={[
          ["Arizali kirish, qo‘lda tasdiq", "Har bir yangi kishini admin o‘zi ko‘radi", "Admin javobini kutadi", "Ko‘p: har bir arizani o‘zingiz ochasiz", "Kichik, yopiq guruh"],
          ["Arizali kirish va AI qo‘riqchi", "Bot arizani qabul qiladi, rad etadi yoki adminga qoldiradi, mini-ilovada tekshiradi", "Qisqa savol yoki testdan o‘tadi", "Kam: faqat navbatga qolgan arizalar", "O‘rta va katta ochiq jamoa"],
          ["Stars bilan pullik kirish", "Ommaviy ochilgan akkauntlar uchun pul to‘sig‘i", "To‘lamaydigan halol odam ham kira olmaydi", "Kam, lekin to‘lov bo‘yicha savollar chiqadi", "Pullik kurs, yopiq hamjamiyat"],
          ["Pullik xabarlar", "Kirishni emas, yozishni qimmatlashtiradi", "Har bir xabar uchun to‘laydi", "Kam", "Kirishni emas, yozishni cheklamoqchi bo‘lgan guruh"],
        ]}
      />
      <p>Pullik kirish va pullik xabarlarning shartlari, narxi va egasiga tushadigan ulush bu maqolada tekshirilmagan. Ularni Telegram ilovasida va yuqoridagi maqolalarda ko‘ring.</p>
      <p>Qisqa tavsiya: tekin, ochiq jamoa guruhi uchun asosiy himoya — arizali kirish va AI qo‘riqchi. Yopiq pullik hamjamiyatda pul to‘sig‘i ham o‘rinli. Pul ommaviy akkauntlarni qaytaradi, qo‘riqchi bot esa egasi ruxsat bersa, chat ichidagi qoidabuzarlarga ham chora ko‘radi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="ai-qoriqchi-spamga-qarshi-qayerda">AI qo‘riqchi spamga qarshi qayerda kuchli va qayerda ojiz?</h2>
      <h3>Kuchli tomonlari</h3>
      <ul>
        <li>Kirish arizalarini ko‘rib chiqadi — buni Telegram FAQ ham tasdiqlaydi.</li>
        <li>Arizachiga mini-ilova ochib, savol yoki kichik test beradi.</li>
        <li>Har bir ariza bo‘yicha uch xil qaror chiqaradi: qabul qiladi, rad etadi yoki qarorni boshqa adminlarga qoldiradi. <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a>da bular «approve», «decline» va «queue» deb ataladi.</li>
        <li>Egasi xohlasa, chatga qoidabuzar xabar yozganlarga ham chora ko‘radi.</li>
      </ul>
      <h3>Cheklovlari va tasdiqlanmagan joylari</h3>
      <ul>
        <li>Telegram tayyor test yoki savollar to‘plamini bermaydi — himoya sifati bot muallifi tuzgan savollarga bog‘liq.</li>
        <li>Har qanday bot qo‘riqchi bo‘la olmaydi. Bot API’ga ko‘ra, bu vazifaga faqat kirish arizalari so‘rovlarini qo‘llaydigan bot tayinlanadi.</li>
        <li>Funksiya pullikmi yoki Telegram Premium talab qiladimi — rasmiy manbalarda topilmadi, bu maqolada tasdiqlanmagan.</li>
      </ul>
      <p>Qo‘riqchi botni guruhning oddiy a’zolari ko‘rmaydi. Chat ma’lumotidagi guard_bot maydoni faqat adminlarga ochiq.</p>
      <h2 id="guruhda-arizali-kirish-va-qoriqchi">Guruhda arizali kirish va qo‘riqchi botni qanday ulash mumkin?</h2>
      <Notice label={"Muhim"}>Ilovadagi aniq menyu va tugma nomlari rasmiy manbalarda e’lon qilinmagan. Ular telefon va kompyuter versiyalarida farq qilishi mumkin, shuning uchun nomlarni o‘z ilovangizda tekshiring.</Notice>
      <Steps>
        <Step title={"Arizali kirishni yoqing"}>guruhning taklif havolasi uchun admin tasdig‘ini talab qiling. Shunda havolani bosgan kishi darhol a’zo bo‘lmaydi, ariza qoldiradi.</Step>
        <Step title={"Mos botni tanlang"}>bot kirish arizalari so‘rovlarini qo‘llashini muallifidan yoki hujjatidan aniqlang.</Step>
        <Step title={"Botni admin qiling"}>unga foydalanuvchi qo‘shish huquqini (can_invite_users) bering. Bot API’ga ko‘ra, busiz bot arizalar haqida xabar ham olmaydi, ularni qabul yoki rad ham eta olmaydi.</Step>
        <Step title={"Qo‘riqchi sifatida tayinlang"}>keyin chat ma’lumotida qaysi bot qo‘riqchi ekanini admin sifatida tekshiring.</Step>
        <Step title={"Sinab ko‘ring"}>ikkinchi akkauntdan yoki tanishingiz orqali ariza yuboring. Mini-ilova ochiladimi, qaror to‘g‘ri chiqadimi — o‘zingiz ko‘ring.</Step>
        <Step title={"Ortiqcha huquq bermang"}>xabar o‘chirish yoki a’zoni chiqarish huquqini botga faqat chatni ham tozalatmoqchi bo‘lsangiz bering.</Step>
      </Steps>
      <h2 id="guruh-eshigini-begona-botga-topshirishdan">Guruh eshigini begona botga topshirishdan oldin nimani bilish kerak?</h2>
      <p>Bot guruhingiz eshigini boshqaradi, shuning uchun uni tanlashda shoshilmang.</p>
      <ul>
        <li><b>Vazifani qo‘llashi.</b> Bot API’da bot bu vazifaga yaroqli ekani getMe javobida ko‘rinadi. Dasturchi bo‘lmasangiz, bot muallifidan to‘g‘ridan-to‘g‘ri so‘rang.</li>
        <li><b>So‘raydigan huquqlar.</b> Arizalar uchun foydalanuvchi qo‘shish huquqi yetadi. Bot guruh egaligini yoki keraksiz huquqlarni talab qilsa, bu shubha belgisi.</li>
        <li><b>Arizachidan nima so‘raladi.</b> Mini-ilova telefon raqami, SMS kod, parol, Stars yoki sovg‘a so‘ramasligi kerak. Aks holda bot halol a’zolaringizni ham xavf ostiga qo‘yadi.</li>
        <li><b>Muallif va yordam.</b> Botni kim yuritadi, arizachilarning javoblari qayerda saqlanadi, muammo bo‘lsa kimga yoziladi — bularni oldindan bilib oling.</li>
        <li><b>O‘z botingizni yozsangiz.</b> Bot API 10.1 da answerChatJoinRequestQuery va sendChatJoinRequestWebApp usullari, ChatFullInfo’dagi guard_bot hamda ChatJoinRequest’dagi query_id maydonlari qo‘shilgan. Tafsilotlar — <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API o‘zgarishlar ro‘yxati</a>da. Botga nom tanlash bo‘yicha: <Link href="/blog/telegram-ai-bot-nomi-qoshimcha-tanlash">AI bot nomi va qo‘shimchasini tanlash</Link>.</li>
      </ul>
      <h2 id="kirish-testiga-qanday-savollar-qoysa">Kirish testiga qanday savollar qo‘ysa bo‘ladi: ish jamoasi va hamjamiyat misollari</h2>
      <p>Yaxshi test halol odam uchun oson bo‘ladi, avtomatik ochilgan akkaunt uchun esa noqulay. Bir nechta misol:</p>
      <ul>
        <li><b>Ofis jamoasi guruhi:</b> «Qaysi bo‘limda ishlaysiz va sizni kim taklif qildi?»</li>
        <li><b>O‘quv kursi guruhi:</b> «Kurs nomi va oqim raqamini yozing.»</li>
        <li><b>Mahalla yoki uy guruhi:</b> «Qaysi uy va xonadonda yashaysiz?»</li>
        <li><b>Mutaxassislar hamjamiyati:</b> «Guruh qoidalaridan birini o‘z so‘zingiz bilan yozing.»</li>
      </ul>
      <p>Bot akkauntlarni ajratish uchun ko‘pincha bitta savol yetadi. U guruh mavzusiga oid bo‘lsin va javobini internetdan tez topib bo‘lmasin. Mini-ilova bunday savolni qulay shaklda ko‘rsatish imkonini beradi.</p>
      <p>Testda quyidagilar so‘ralmaydi:</p>
      <ul>
        <li>parol, SMS yoki kirish kodi;</li>
        <li>karta raqami va boshqa to‘lov ma’lumoti;</li>
        <li>Stars, sovg‘a yoki test ichidagi «kirish to‘lovi».</li>
      </ul>
      <p>Pul olmoqchi bo‘lsangiz, uni testga qo‘shmang — alohida pullik kirish sharti qiling. Juda murakkab «IQ-test» ham yaxshi g‘oya emas. U botlardan ko‘ra halol a’zolarni ko‘proq qaytaradi.</p>
      <h2 id="qoriqchi-xato-qaror-chiqarsa-admin">Qo‘riqchi xato qaror chiqarsa, admin nima qiladi?</h2>
      <p>Qarorni bot chiqaradi, lekin guruhni boshqarish baribir sizning qo‘lingizda.</p>
      <Notice label={"Muhim"}>Bot API’da «queue» qarori bor: bot ishonchi komil bo‘lmagan arizani boshqa adminlarga qoldiradi. Sizning botingiz shubhali holatda shunday qila oladimi — muallifidan so‘rang.</Notice>
      <ul>
        <li>Guruh tavsifida admin bilan bog‘lanish yo‘lini qoldiring. Rad etilgan halol odam yozib, vaziyatni tushuntira oladi.</li>
        <li>Bunday odamni qanday qilib qayta kiritish mumkinligini (qayta ariza, alohida taklif) o‘z guruhingizda oldindan sinab ko‘ring.</li>
        <li>Botning javob berish tezligi kabi texnik cheklovlar rasman tasdiqlanmagan. Shuning uchun ishga tushirgandan keyin botni bir necha kun kuzating.</li>
        <li>Haftada bir marta kim kirganini va kim rad etilganini ko‘zdan kechiring. Spam baribir o‘tayotgan bo‘lsa, test savolini almashtiring.</li>
      </ul>
      <h2 id="stars-bilan-pullik-tosiq-qachon">Stars bilan pullik to‘siq qachon ma’qul va yulduzni so‘mda qanday olish mumkin?</h2>
      <p>Pullik kirish yoki pullik xabarlar ommaviy spam uchun qimmat to‘siq. Minglab akkaunt ochgan spamchi har biri uchun to‘lashni xohlamaydi. Lekin bu to‘siq halol, ammo to‘lamaydigan odamlarni ham qaytaradi.</p>
      <p>Pulli to‘siq ma’qul bo‘ladigan holatlar: yopiq pullik hamjamiyat, kurs yoki maslahat guruhi. Noqulay bo‘ladigan holatlar: tekin ochiq jamoa, mahalla yoki ish guruhi. Ularda AI qo‘riqchining o‘zi yetarli.</p>
      <p>Guruhingizga kirish yoki unda yozish Stars talab qilsa, a’zolar yulduzni so‘mda <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali olishi mumkin. Faqat @username kerak: parol va SMS kod so‘ralmaydi.</p>
      <ul>
        <li>1 ta Stars UzCard/HUMO kartaga o‘tkazma yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")}.</li>
        <li>1 ta Stars Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
        <li>Eng kam buyurtma — 50 Stars, buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</li>
      </ul>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. StarsPaymee — mustaqil xizmat: u Telegram’ga tegishli emas va uning nomidan ish yuritmaydi. Narx va to‘lov usullari <Link href="/stars">Stars sahifasi</Link>da.</p>
      <h2 id="spam-kirib-bolgan-bolsa-guruh">Spam kirib bo‘lgan bo‘lsa, guruh va admin akkauntini qanday himoyalash kerak?</h2>
      <Steps>
        <Step title={"Taklif havolasini yangilang"}>eski ochiq havolani bekor qilib, arizali yangisini yarating. Eski havola spam ro‘yxatlarida aylanib yurgan bo‘lishi mumkin. Yangi havolani faqat kerakli joylarga qo‘ying.</Step>
        <Step title={"Shubhali a’zolarni chiqaring"}>keyin qo‘riqchi botga chatni tozalash vakolatini berishni o‘ylab ko‘ring.</Step>
        <Step title={"Adminlar ro‘yxatini tekshiring"}>begona yoki endi keraksiz adminlar va botlarni olib tashlang.</Step>
        <Step title={"Admin akkauntlarida 2FA yoqing"}>guruhni egallash ko‘pincha admin akkauntini o‘g‘irlashdan boshlanadi. Batafsil: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni 2FA bilan himoyalash</Link>.</Step>
        <Step title={"A’zolarni ogohlantiring"}>guruh nomidan shaxsiy chatga yozib Stars, sovg‘a yoki kod so‘raydiganlarga javob bermaslikni eslating.</Step>
      </Steps>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Qo‘riqchi botni ulab qo‘ydim, lekin u arizalarni ko‘rmayapti. Nima sababdan?", answer: "Ko‘pincha botda foydalanuvchi qo‘shish huquqi (can_invite_users) bo‘lmaydi: busiz arizalar haqidagi yangilanishlar unga kelmaydi. Shuningdek, bot arizalarni qayta ishlashni umuman qo‘llaydimi — muallifidan aniqlang." },
  { question: "Arizali kirishni yoqdim, ammo bot qo‘ymadim. Arizalar nima bo‘ladi?", answer: "Ular adminlardan birortasi ko‘rib chiqmaguncha kutib turadi. Kichik guruh uchun bu yetarli, arizalar ko‘paysa qo‘riqchi bot yukni yengillashtiradi." },
  { question: "AI qo‘riqchi ulash uchun Telegram mendan haq oladimi?", answer: "Telegram e’loni va FAQ’da to‘lov yoki Premium sharti tilga olinmagan, lekin buni aniq inkor etuvchi ma’lumot ham topilmadi. Uchinchi tomon boti o‘z shartlarini qo‘yishi mumkin, shuni oldindan so‘rang." },
  { question: "Qo‘riqchi bot guruhga kirib olgan spamchilarning xabarlarini ham tozalaydimi?", answer: "Telegram blogiga ko‘ra, egasi xohlasa, bunday bot chatdagi qoidabuzarlarga ham chora ko‘radi. Buning uchun unga tegishli admin huquqlarini alohida berishingiz kerak." },
  { question: "Test savollarini keyin o‘zim o‘zgartira olamanmi?", answer: "Savollarni Telegram emas, bot belgilaydi, shuning uchun bu aynan sizning botingiz imkoniyatiga bog‘liq. O‘z botingizni yozsangiz, mini-ilova mazmunini to‘liq o‘zingiz boshqarasiz." },
  { question: "Bot rad etgan halol odam nima qilishi kerak?", answer: "U guruh tavsifida ko‘rsatilgan admin bilan bog‘lanishi kerak. Admin vaziyatni tekshirib, uni qanday qayta kiritishni hal qiladi — bu jarayonni oldindan sinab qo‘ygan ma’qul." },
  { question: "Arizachidan telefon raqam so‘rasam, spam kamayadimi?", answer: "Bu shart emas va ortiqcha shaxsiy ma’lumot yig‘ishga olib keladi. Bot akkauntni guruh mavzusiga oid bitta savol ham yaxshi ajratadi, kod yoki parol esa umuman so‘ralmaydi." },
  { question: "Oddiy moderator botni qo‘riqchi qilib tayinlay oladimi?", answer: "Buning uchun qaysi admin huquqi kerakligi rasmiy manbalarda aniq yozilmagan. Xavfsizroq yo‘l — botni guruh egasining o‘zi ulashi va sozlashi." },
  { question: "Kirishni Stars bilan pullik qilsam, qo‘riqchi bot keraksiz bo‘ladimi?", answer: "Yo‘q. Pul ommaviy bot akkauntlarni qaytaradi, lekin to‘lab kirgan odam ham spam yozishi mumkin. Shuning uchun chat ichidagi nazorat va adminlardagi 2FA baribir kerak." },
  { question: "A’zolar guruh uchun kerakli Stars’ni so‘mda qayerdan oladi?", answer: `@StarsPaymee_bot orqali, faqat @username bilan: karta o‘tkazmasi yoki bot balansidan 1 tasi ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma 50 Stars, yetkazish odatda bir necha soniya oladi.` },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Надёжнее всего останавливать спам-аккаунты у входа в группу так: включить вступление по заявкам для ссылки-приглашения и поручить проверку администратору или боту — ИИ-стражу. Такую возможность Telegram добавил в июне 2026 года. Платный вход за Stars и платные сообщения — не главный замок. Это дополнительный фильтр поверх него.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#guruhga-spam-akkauntlar-kirishini-qaysi", label: "Какими способами можно не пустить спам-аккаунты в группу?" },
          { href: "#ai-qoriqchi-pullik-kirish-va", label: "ИИ-страж, платный вход и платные сообщения: что от чего защищает?" },
          { href: "#ai-qoriqchi-spamga-qarshi-qayerda", label: "В чём сила ИИ-стража против спама и где его слабые места?" },
          { href: "#guruhda-arizali-kirish-va-qoriqchi", label: "Как включить вход по заявкам и подключить бота-стража?" },
          { href: "#guruh-eshigini-begona-botga-topshirishdan", label: "Что нужно знать, прежде чем доверить вход в группу чужому боту?" },
          { href: "#kirish-testiga-qanday-savollar-qoysa", label: "Какие вопросы задать во вступительном тесте: примеры для рабочих чатов и сообществ" },
          { href: "#qoriqchi-xato-qaror-chiqarsa-admin", label: "Что делать админу, если страж ошибся?" },
          { href: "#stars-bilan-pullik-tosiq-qachon", label: "Когда оправдан платный барьер в Stars и как купить звёзды за сумы?" },
          { href: "#spam-kirib-bolgan-bolsa-guruh", label: "Спам уже проник: как защитить группу и аккаунты админов?" },
        ]}
      />
      <h2 id="guruhga-spam-akkauntlar-kirishini-qaysi">Какими способами можно не пустить спам-аккаунты в группу?</h2>
      <p>У владельца группы есть три основных барьера:</p>
      <ul>
        <li><b>Вступление по заявке с одобрением админа.</b> Человек, пришедший по ссылке, не становится участником сразу, а сначала оставляет заявку. Согласно <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>, одобрение администратора можно сделать обязательным для всех, кто вступает по ссылке.</li>
        <li><b>Бот — ИИ-страж.</b> Эти заявки разбирает бот с искусственным интеллектом. Вы назначаете его администратором, и он проверяет новичков.</li>
        <li><b>Платный барьер.</b> Вход в группу становится платным в Stars, или за каждое сообщение в группе нужно платить. Об этом есть отдельные статьи: <Link href="/blog/telegram-pullik-kanal-stars-obuna">платная подписка за Stars</Link> и <Link href="/blog/telegram-pulli-xabarlar-paid-messages">платные сообщения</Link>.</li>
      </ul>
      <p>Второй способ появился недавно. Telegram объявил его 11 июня 2026 года в <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">записи в блоге</a> под названием «AI Guardians» — ИИ-стражи для групп. Как сказано в блоге, ИИ-ботов можно назначить администраторами и поручить им рассмотрение заявок на вступление.</p>
      <p>По Telegram-каналам разошлось сообщение: «теперь для входа в чаты появились IQ-тесты». Это не совсем так. В блоге IQ-тест упомянут лишь как шутливый пример, и речь там не о входе в группу, а о праве оставлять комментарии. Готового теста Telegram не даёт: вопросы составляет автор бота-стража.</p>
      <h2 id="ai-qoriqchi-pullik-kirish-va">ИИ-страж, платный вход и платные сообщения: что от чего защищает?</h2>
      <CompareTable
        headers={["Способ", "Что блокирует", "Неудобство для честного участника", "Время админа", "Кому подходит"]}
        rows={[
          ["Вход по заявке, ручное одобрение", "Каждого новичка админ смотрит сам", "Ждёт ответа админа", "Много: каждую заявку открываете вы", "Небольшая закрытая группа"],
          ["Вход по заявке и ИИ-страж", "Бот одобряет, отклоняет или передаёт заявку админам, проверяет через мини-приложение", "Проходит короткий вопрос или тест", "Мало: только заявки, оставленные в очереди", "Средние и крупные открытые сообщества"],
          ["Платный вход за Stars", "Денежный барьер для массово созданных аккаунтов", "Честный человек, не желающий платить, тоже не войдёт", "Мало, но появятся вопросы по оплате", "Платные курсы, закрытые сообщества"],
          ["Платные сообщения", "Дорожает не вход, а возможность писать", "Платит за каждое сообщение", "Мало", "Группы, где нужно ограничить не вход, а сообщения"],
        ]}
      />
      <p>Условия платного входа и платных сообщений, их цена и доля, которая достаётся владельцу, в этой статье не проверялись. Смотрите их в приложении Telegram и в статьях по ссылкам выше.</p>
      <p>Коротко: для бесплатного открытого сообщества основная защита — вход по заявкам и ИИ-страж. В закрытом платном сообществе уместен и денежный барьер. Деньги отсекают массовые аккаунты, а бот-страж, если владелец разрешит, разбирается и с нарушителями внутри чата.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="ai-qoriqchi-spamga-qarshi-qayerda">В чём сила ИИ-стража против спама и где его слабые места?</h2>
      <h3>Сильные стороны</h3>
      <ul>
        <li>Рассматривает заявки на вступление — это подтверждает и Telegram FAQ.</li>
        <li>Открывает заявителю мини-приложение с вопросом или небольшим тестом.</li>
        <li>По каждой заявке принимает одно из трёх решений: одобрить, отклонить или оставить решение другим администраторам. В <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a> они называются «approve», «decline» и «queue».</li>
        <li>Если владелец захочет, бот наказывает и тех, кто пишет в чат с нарушением правил.</li>
      </ul>
      <h3>Ограничения и неподтверждённые моменты</h3>
      <ul>
        <li>Готового теста или набора вопросов Telegram не предоставляет — качество защиты зависит от вопросов, которые придумал автор бота.</li>
        <li>Стражем может стать не любой бот. По Bot API, на эту роль назначается только бот, поддерживающий запросы по заявкам на вступление.</li>
        <li>Платная ли функция и нужен ли для неё Telegram Premium, в официальных источниках не найдено — в этой статье это не подтверждено.</li>
      </ul>
      <p>Обычные участники группы бота-стража не видят. Поле guard_bot в информации о чате доступно только администраторам.</p>
      <h2 id="guruhda-arizali-kirish-va-qoriqchi">Как включить вход по заявкам и подключить бота-стража?</h2>
      <Notice label={"Важно"}>Точные названия меню и кнопок в приложении официально не опубликованы. В мобильной и десктопной версиях они могут отличаться, поэтому сверяйтесь со своим приложением.</Notice>
      <Steps>
        <Step title={"Включите вход по заявкам"}>потребуйте одобрения администратора для ссылки-приглашения группы. Тогда человек, нажавший на ссылку, не станет участником сразу, а оставит заявку.</Step>
        <Step title={"Выберите подходящего бота"}>уточните у автора или в документации, поддерживает ли бот запросы по заявкам на вступление.</Step>
        <Step title={"Назначьте бота администратором"}>дайте ему право приглашать пользователей (can_invite_users). По Bot API, без него бот не получает уведомлений о заявках и не может ни одобрить, ни отклонить их.</Step>
        <Step title={"Назначьте его стражем"}>затем как администратор проверьте в информации о чате, какой бот указан стражем.</Step>
        <Step title={"Проверьте в деле"}>отправьте заявку со второго аккаунта или попросите знакомого. Посмотрите сами, открывается ли мини-приложение и правильно ли бот принимает решение.</Step>
        <Step title={"Не давайте лишних прав"}>право удалять сообщения или исключать участников выдавайте боту, только если хотите, чтобы он чистил и сам чат.</Step>
      </Steps>
      <h2 id="guruh-eshigini-begona-botga-topshirishdan">Что нужно знать, прежде чем доверить вход в группу чужому боту?</h2>
      <p>Бот будет управлять входом в вашу группу, поэтому выбирайте его без спешки.</p>
      <ul>
        <li><b>Поддержка нужной функции.</b> В Bot API пригодность бота для этой роли видна в ответе getMe. Если вы не разработчик, спросите об этом автора бота напрямую.</li>
        <li><b>Запрашиваемые права.</b> Для работы с заявками достаточно права приглашать пользователей. Если бот требует права владельца или лишние полномочия — это тревожный признак.</li>
        <li><b>Что спрашивают у заявителя.</b> Мини-приложение не должно запрашивать номер телефона, SMS-код, пароль, Stars или подарки. Иначе бот подвергнет риску и ваших честных участников.</li>
        <li><b>Автор и поддержка.</b> Заранее выясните, кто ведёт бота, где хранятся ответы заявителей и куда писать при проблемах.</li>
        <li><b>Если пишете своего бота.</b> В Bot API 10.1 добавлены методы answerChatJoinRequestQuery и sendChatJoinRequestWebApp, поле guard_bot в ChatFullInfo и поле query_id в ChatJoinRequest. Подробности — в <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">списке изменений Bot API</a>. О выборе имени для бота: <Link href="/blog/telegram-ai-bot-nomi-qoshimcha-tanlash">как выбрать имя и суффикс для ИИ-бота</Link>.</li>
      </ul>
      <h2 id="kirish-testiga-qanday-savollar-qoysa">Какие вопросы задать во вступительном тесте: примеры для рабочих чатов и сообществ</h2>
      <p>Хороший тест прост для честного человека и неудобен для автоматически созданного аккаунта. Несколько примеров:</p>
      <ul>
        <li><b>Чат рабочей команды:</b> «В каком отделе вы работаете и кто вас пригласил?»</li>
        <li><b>Группа учебного курса:</b> «Напишите название курса и номер потока».</li>
        <li><b>Группа махалли или дома:</b> «В каком доме и какой квартире вы живёте?»</li>
        <li><b>Профессиональное сообщество:</b> «Перескажите своими словами одно из правил группы».</li>
      </ul>
      <p>Чтобы отсеять бот-аккаунты, часто хватает одного вопроса. Пусть он касается темы группы, а ответ на него нельзя быстро найти в интернете. Мини-приложение позволяет показать такой вопрос в удобной форме.</p>
      <p>В тесте нельзя спрашивать:</p>
      <ul>
        <li>пароль, SMS или код входа;</li>
        <li>номер карты и другие платёжные данные;</li>
        <li>Stars, подарки или «плату за вход» внутри теста.</li>
      </ul>
      <p>Если хотите брать деньги, не встраивайте это в тест — сделайте отдельное условие платного входа. Слишком сложный «IQ-тест» тоже плохая идея: он отпугнёт скорее честных участников, чем ботов.</p>
      <h2 id="qoriqchi-xato-qaror-chiqarsa-admin">Что делать админу, если страж ошибся?</h2>
      <p>Решение принимает бот, но управление группой всё равно остаётся за вами.</p>
      <Notice label={"Важно"}>В Bot API есть решение «queue»: бот оставляет заявку, в которой не уверен, другим администраторам. Спросите у автора, умеет ли ваш бот так поступать в спорных случаях.</Notice>
      <ul>
        <li>Оставьте в описании группы способ связаться с админом. Честный человек, получивший отказ, сможет написать и объяснить ситуацию.</li>
        <li>Заранее проверьте в своей группе, как такого человека можно впустить повторно (новая заявка, отдельное приглашение).</li>
        <li>Технические ограничения вроде скорости ответа бота официально не подтверждены. Поэтому после запуска понаблюдайте за ботом несколько дней.</li>
        <li>Раз в неделю просматривайте, кто вступил и кому отказано. Если спам всё равно проходит, смените вопрос теста.</li>
      </ul>
      <h2 id="stars-bilan-pullik-tosiq-qachon">Когда оправдан платный барьер в Stars и как купить звёзды за сумы?</h2>
      <p>Платный вход или платные сообщения — дорогое препятствие для массового спама. Спамер с тысячами аккаунтов не захочет платить за каждый. Но этот барьер отсекает и честных людей, которые не готовы платить.</p>
      <p>Платный барьер уместен в закрытом платном сообществе, группе курса или консультаций. Неудобен он в бесплатном открытом сообществе, чате махалли или рабочей группе — там достаточно одного ИИ-стража.</p>
      <p>Если для входа в вашу группу или для сообщений в ней нужны Stars, участники могут купить звёзды за сумы через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Нужен только @username: пароль и SMS-код не запрашиваются.</p>
      <ul>
        <li>1 Stars при переводе на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}.</li>
        <li>1 Stars через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
        <li>Минимальный заказ — 50 Stars, обычно он доставляется автоматически за несколько секунд.</li>
      </ul>
      <p>Международная карта, криптокошелёк или VPN не нужны. StarsPaymee — независимый сервис: он не принадлежит Telegram и не действует от его имени. Цены и способы оплаты — на <Link href="/stars">странице Stars</Link>.</p>
      <h2 id="spam-kirib-bolgan-bolsa-guruh">Спам уже проник: как защитить группу и аккаунты админов?</h2>
      <Steps>
        <Step title={"Обновите ссылку-приглашение"}>отзовите старую открытую ссылку и создайте новую, с заявками. Старая ссылка могла попасть в спам-списки. Новую размещайте только там, где она действительно нужна.</Step>
        <Step title={"Удалите подозрительных участников"}>затем подумайте, не дать ли боту-стражу полномочия чистить чат.</Step>
        <Step title={"Проверьте список администраторов"}>уберите посторонних и уже ненужных админов и ботов.</Step>
        <Step title={"Включите 2FA у админов"}>захват группы часто начинается с кражи аккаунта администратора. Подробнее: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защита аккаунта с помощью 2FA</Link>.</Step>
        <Step title={"Предупредите участников"}>напомните не отвечать тем, кто пишет в личку от имени группы и просит Stars, подарки или коды.</Step>
      </Steps>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Я подключил бота-стража, но он не видит заявки. В чём причина?", answer: "Чаще всего у бота нет права приглашать пользователей (can_invite_users): без него уведомления о заявках до него не доходят. Также уточните у автора, умеет ли бот вообще обрабатывать заявки." },
  { question: "Я включил вход по заявкам, но бота не ставил. Что будет с заявками?", answer: "Они будут ждать, пока их не рассмотрит кто-то из администраторов. Для маленькой группы этого достаточно, а когда заявок станет много, нагрузку снимет бот-страж." },
  { question: "Берёт ли Telegram плату за подключение ИИ-стража?", answer: "В анонсе Telegram и в FAQ плата или условие Premium не упоминаются, но и прямого опровержения не найдено. Сторонний бот может ставить собственные условия — уточните их заранее." },
  { question: "Удаляет ли бот-страж сообщения спамеров, которые уже попали в группу?", answer: "По блогу Telegram, если владелец захочет, такой бот может наказывать нарушителей и в чате. Для этого ему нужно отдельно выдать соответствующие права администратора." },
  { question: "Смогу ли я потом сам изменить вопросы теста?", answer: "Вопросы задаёт не Telegram, а бот, поэтому всё зависит от возможностей конкретного бота. Если пишете своего, содержимое мини-приложения полностью под вашим контролем." },
  { question: "Что делать честному человеку, которому бот отказал?", answer: "Связаться с администратором, указанным в описании группы. Админ разберётся и решит, как впустить его повторно, — этот порядок лучше отработать заранее." },
  { question: "Если спрашивать у заявителя номер телефона, спама станет меньше?", answer: "Это не обязательно и ведёт к сбору лишних личных данных. Бот-аккаунт неплохо отсеивает и один вопрос по теме группы, а коды и пароли не запрашивают вообще никогда." },
  { question: "Может ли обычный модератор назначить бота стражем?", answer: "Какое именно право администратора для этого нужно, в официальных источниках чётко не сказано. Безопаснее, если бота подключает и настраивает сам владелец группы." },
  { question: "Если сделать вход платным за Stars, бот-страж больше не нужен?", answer: "Нужен. Деньги отсекают массовые бот-аккаунты, но и заплативший за вход может спамить. Поэтому контроль внутри чата и 2FA у админов всё равно необходимы." },
  { question: "Где участникам купить Stars для группы за сумы?", answer: `Через @StarsPaymee_bot, нужен только @username: при переводе на карту или с баланса бота 1 Stars стоит ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars, доставка обычно занимает несколько секунд.` },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>The most reliable way to stop spam accounts before they get into your group is to require join requests for invite links. An admin or an AI guardian bot then reviews each request. Telegram made it possible to hand this job to bots in June 2026. Paid entry and paid messages with Stars are not the main lock. They are an extra filter you add on top of it.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#guruhga-spam-akkauntlar-kirishini-qaysi", label: "What are the ways to keep spam accounts out of a Telegram group?" },
          { href: "#ai-qoriqchi-pullik-kirish-va", label: "AI guardian, paid entry or paid messages: what does each one block?" },
          { href: "#ai-qoriqchi-spamga-qarshi-qayerda", label: "Where is an AI guardian strong against spam, and where is it weak?" },
          { href: "#guruhda-arizali-kirish-va-qoriqchi", label: "How do you turn on join requests and connect a guardian bot?" },
          { href: "#guruh-eshigini-begona-botga-topshirishdan", label: "What should you check before handing your group’s door to a third-party bot?" },
          { href: "#kirish-testiga-qanday-savollar-qoysa", label: "What questions work in an entry test? Examples for work teams and communities" },
          { href: "#qoriqchi-xato-qaror-chiqarsa-admin", label: "What should an admin do when the guardian makes the wrong call?" },
          { href: "#stars-bilan-pullik-tosiq-qachon", label: "When does a Stars barrier make sense, and how do you get Stars in UZS?" },
          { href: "#spam-kirib-bolgan-bolsa-guruh", label: "Spam is already inside: how do you protect the group and admin accounts?" },
        ]}
      />
      <h2 id="guruhga-spam-akkauntlar-kirishini-qaysi">What are the ways to keep spam accounts out of a Telegram group?</h2>
      <p>A group owner has three main barriers:</p>
      <ul>
        <li><b>Join requests with admin approval.</b> Someone who arrives through a link doesn’t become a member straight away. They submit a request first. According to the <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>, you can require admin approval for everyone who joins through a link.</li>
        <li><b>An AI guardian bot.</b> A bot with artificial intelligence reviews those requests. You make it an admin, and it screens newcomers.</li>
        <li><b>A paid barrier.</b> You charge Stars for entry, or you turn posting in the group into paid messages. We cover these in separate articles: <Link href="/blog/telegram-pullik-kanal-stars-obuna">paid subscriptions with Stars</Link> and <Link href="/blog/telegram-pulli-xabarlar-paid-messages">paid messages</Link>.</li>
      </ul>
      <p>The second option is new. Telegram announced it as “AI Guardians” for groups in a <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">blog post</a> on 11 June 2026. The post says you can add AI bots as admins and let them process join requests.</p>
      <p>A message going around Telegram channels claims that “chats now have IQ tests for joining”. That isn’t quite right. The blog mentions an IQ test only as a joke example, and it’s about posting comments, not joining a group. Telegram doesn’t provide a ready-made test. Whoever builds the guardian bot writes the questions.</p>
      <h2 id="ai-qoriqchi-pullik-kirish-va">AI guardian, paid entry or paid messages: what does each one block?</h2>
      <CompareTable
        headers={["Method", "What it blocks", "Hassle for honest members", "Admin time", "Best for"]}
        rows={[
          ["Join requests, manual approval", "An admin reviews every newcomer", "They wait for an admin to respond", "High: you open every request yourself", "Small, closed groups"],
          ["Join requests plus an AI guardian", "The bot approves, declines or leaves the request to admins, and can screen people in a mini app", "They answer a short question or test", "Low: only the requests left in the queue", "Medium and large open communities"],
          ["Paid entry with Stars", "Puts a price on mass-created accounts", "Honest people who won’t pay can’t get in either", "Low, though you’ll get payment questions", "Paid courses, closed communities"],
          ["Paid messages", "Makes posting expensive, not joining", "They pay for every message", "Low", "Groups that want to limit posting, not entry"],
        ]}
      />
      <p>This article hasn’t checked the terms, prices or owner’s share for paid entry and paid messages. Look them up in the Telegram app and in the articles linked above.</p>
      <p>Quick advice: for a free, open community group, your main protection is join requests plus an AI guardian. In a closed paid community, a money barrier also makes sense. Money turns away mass accounts. A guardian bot can also act on rule-breakers inside the chat, if the owner allows it.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="ai-qoriqchi-spamga-qarshi-qayerda">Where is an AI guardian strong against spam, and where is it weak?</h2>
      <h3>Strengths</h3>
      <ul>
        <li>It reviews join requests. The Telegram FAQ confirms this too.</li>
        <li>It can open a mini app for the applicant and show them a question or a short test.</li>
        <li>It makes one of three decisions on each request: approve it, decline it, or leave the decision to other admins. In the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API</a> these are called “approve”, “decline” and “queue”.</li>
        <li>If the owner wants, it can also act on people who post rule-breaking messages in the chat.</li>
      </ul>
      <h3>Limits and unconfirmed points</h3>
      <ul>
        <li>Telegram doesn’t supply a ready-made test or question set. How well it protects you depends on the questions the bot’s author wrote.</li>
        <li>Not every bot can be a guardian. According to the Bot API, only bots that support join request queries can be assigned this job.</li>
        <li>Whether the feature costs money or needs Telegram Premium isn’t stated in official sources. This article can’t confirm it either way.</li>
      </ul>
      <p>Regular group members can’t see the guardian bot. The guard_bot field in the chat info is visible only to admins.</p>
      <h2 id="guruhda-arizali-kirish-va-qoriqchi">How do you turn on join requests and connect a guardian bot?</h2>
      <Notice label={"Important"}>Telegram hasn’t published the exact menu and button names in the app. They may also differ between the phone and desktop versions, so check the names in your own app.</Notice>
      <Steps>
        <Step title={"Turn on join requests"}>Require admin approval for your group’s invite link. People who tap the link then submit a request instead of joining straight away.</Step>
        <Step title={"Pick a suitable bot"}>Check with the bot’s author or its documentation that it supports join request queries.</Step>
        <Step title={"Make the bot an admin"}>Give it the right to add users (can_invite_users). According to the Bot API, without this right the bot won’t even receive updates about requests, and it can’t approve or decline them.</Step>
        <Step title={"Assign it as the guardian"}>Then, as an admin, check the chat info to see which bot is set as the guardian.</Step>
        <Step title={"Test it"}>Send a request from a second account or ask a friend to. See for yourself whether the mini app opens and the decision comes out right.</Step>
        <Step title={"Don’t give extra rights"}>Only let the bot delete messages or remove members if you also want it to clean up the chat.</Step>
      </Steps>
      <h2 id="guruh-eshigini-begona-botga-topshirishdan">What should you check before handing your group’s door to a third-party bot?</h2>
      <p>The bot will control who gets into your group, so take your time choosing it.</p>
      <ul>
        <li><b>Does it support the job?</b> In the Bot API, the getMe response shows whether a bot can be assigned this role. If you’re not a developer, ask the bot’s author directly.</li>
        <li><b>What rights does it ask for?</b> The right to add users is enough for handling requests. If a bot asks for group ownership or rights it doesn’t need, treat that as a red flag.</li>
        <li><b>What does it ask applicants for?</b> The mini app should never ask for a phone number, SMS code, password, Stars or gifts. Otherwise the bot puts your honest members at risk too.</li>
        <li><b>Who runs it, and where do you get help?</b> Find out in advance who runs the bot, where applicants’ answers are stored, and who to contact if something goes wrong.</li>
        <li><b>Building your own bot?</b> Bot API 10.1 added the answerChatJoinRequestQuery and sendChatJoinRequestWebApp methods, the guard_bot field in ChatFullInfo and the query_id field in ChatJoinRequest. The details are in the <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>. For help naming your bot, see <Link href="/blog/telegram-ai-bot-nomi-qoshimcha-tanlash">choosing an AI bot name and suffix</Link>.</li>
      </ul>
      <h2 id="kirish-testiga-qanday-savollar-qoysa">What questions work in an entry test? Examples for work teams and communities</h2>
      <p>A good test is easy for an honest person and awkward for an auto-created account. A few examples:</p>
      <ul>
        <li><b>Office team group:</b> “Which department do you work in, and who invited you?”</li>
        <li><b>Course group:</b> “Write the course name and your cohort number.”</li>
        <li><b>Neighbourhood or building group:</b> “Which building and flat do you live in?”</li>
        <li><b>Professional community:</b> “Describe one of the group rules in your own words.”</li>
      </ul>
      <p>One question is often enough to filter out bot accounts. Make it about the group’s topic, and make sure the answer can’t be found quickly online. The mini app lets you show such a question in a clear format.</p>
      <p>Never ask for any of the following in a test:</p>
      <ul>
        <li>a password, SMS or login code;</li>
        <li>a card number or other payment details;</li>
        <li>Stars, gifts or an “entry fee” built into the test.</li>
      </ul>
      <p>If you want to charge people, don’t put it inside the test. Set up paid entry as a separate condition instead. A very hard “IQ test” is a bad idea too. It turns away more honest members than bots.</p>
      <h2 id="qoriqchi-xato-qaror-chiqarsa-admin">What should an admin do when the guardian makes the wrong call?</h2>
      <p>The bot makes the decisions, but you still run the group.</p>
      <Notice label={"Important"}>The Bot API has a “queue” decision, which lets a bot pass a request it isn’t sure about to other admins. Ask the bot’s author whether your bot does this in doubtful cases.</Notice>
      <ul>
        <li>Put a way to contact an admin in the group description. An honest person who gets declined can then write in and explain.</li>
        <li>Test in your own group beforehand how you’d let such a person back in, for example with a new request or a personal invite.</li>
        <li>Technical limits, such as how fast the bot has to respond, aren’t officially confirmed. So watch the bot closely for the first few days after you turn it on.</li>
        <li>Once a week, look over who joined and who was declined. If spam still gets through, change the test question.</li>
      </ul>
      <h2 id="stars-bilan-pullik-tosiq-qachon">When does a Stars barrier make sense, and how do you get Stars in UZS?</h2>
      <p>Paid entry and paid messages make mass spam expensive. A spammer running thousands of accounts won’t want to pay for each one. But this barrier also stops honest people who don’t want to pay.</p>
      <p>A paid barrier works well for a closed paid community, a course or a consulting group. It’s a poor fit for a free open community, a neighbourhood group or a work chat. In those, an AI guardian is enough on its own.</p>
      <p>If your group charges Stars for joining or posting, members can buy Stars in UZS through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Only an @username is needed. The bot never asks for a password or SMS code.</p>
      <ul>
        <li>1 Star paid by UzCard/HUMO card transfer or from the bot balance costs {som(STARS_PER_UNIT_UZS, "en")}.</li>
        <li>1 Star paid through Click, Payme, Uzum or Paynet costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
        <li>The minimum order is 50 Stars. Orders usually arrive automatically within a few seconds.</li>
      </ul>
      <p>You don’t need an international card, a crypto wallet or a VPN. StarsPaymee is an independent service. It doesn’t belong to Telegram and doesn’t act on its behalf. Prices and payment methods are on the <Link href="/stars">Stars page</Link>.</p>
      <h2 id="spam-kirib-bolgan-bolsa-guruh">Spam is already inside: how do you protect the group and admin accounts?</h2>
      <Steps>
        <Step title={"Replace the invite link"}>Revoke the old open link and create a new one that requires join requests. The old link may already be circulating on spam lists. Post the new link only where it’s needed.</Step>
        <Step title={"Remove suspicious members"}>Then think about giving the guardian bot permission to clean up the chat.</Step>
        <Step title={"Check the admin list"}>Remove admins and bots you don’t recognise or no longer need.</Step>
        <Step title={"Turn on 2FA for admin accounts"}>Group takeovers often start with a stolen admin account. More detail: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account with 2FA</Link>.</Step>
        <Step title={"Warn your members"}>Remind them not to reply to anyone who messages them privately in the group’s name asking for Stars, gifts or codes.</Step>
      </Steps>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I connected a guardian bot, but it doesn’t see any join requests. Why?", answer: "Usually the bot doesn’t have the right to add users (can_invite_users). Without it, updates about requests never reach the bot. Also ask the author whether the bot supports processing join requests at all." },
  { question: "I turned on join requests but didn’t add a bot. What happens to the requests?", answer: "They wait until an admin reviews them. That works fine for a small group. Once requests pile up, a guardian bot takes the load off." },
  { question: "Does Telegram charge me for connecting an AI guardian?", answer: "Neither Telegram’s announcement nor the FAQ mentions a fee or a Premium requirement, but we found nothing that rules one out either. A third-party bot may set its own terms, so ask before you connect it." },
  { question: "Will the guardian bot also clean up messages from spammers who already got in?", answer: "Telegram’s blog says such a bot can act on rule-breakers in the chat if the owner wants it to. You have to give it the matching admin rights separately." },
  { question: "Can I change the test questions myself later?", answer: "The bot sets the questions, not Telegram, so this depends on what your bot can do. If you build your own bot, you control the mini app’s content completely." },
  { question: "What should an honest person do if the bot declines them?", answer: "They should contact the admin listed in the group description. The admin checks what happened and decides how to let them in. It’s best to test that process in advance." },
  { question: "Will asking applicants for their phone number cut down spam?", answer: "You don’t need it, and it means collecting personal data you shouldn’t have. One question about the group’s topic filters bot accounts well. Never ask for codes or passwords." },
  { question: "Can a regular moderator assign a bot as the guardian?", answer: "Official sources don’t say exactly which admin right this needs. To be safe, have the group owner connect and set up the bot." },
  { question: "If I make entry paid with Stars, do I still need a guardian bot?", answer: "Yes. Payment turns away mass bot accounts, but someone who paid to join can still post spam. You still need moderation inside the chat and 2FA on admin accounts." },
  { question: "Where can members buy the Stars a group needs, paying in UZS?", answer: `Through @StarsPaymee_bot, using only an @username. One Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card transfer or from the bot balance, or ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars, and delivery usually takes a few seconds.` },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  keywords: ["guruhga spam akkauntlar kirishini to‘xtatish","telegram guruhni spamdan himoya qilish","telegram guruhga kirish arizasi bot","AI qo‘riqchi bot telegram","telegram guruhga bot akkauntlar kirmasligi","telegram arizali kirish yoqish","stars bilan pullik guruh","как защитить группу telegram от спама","заявки на вступление в группу telegram бот","AI guardian telegram группа","антиспам бот для группы telegram","платный вход в группу telegram stars"],
  howToSteps: [
    { name: "Arizali kirishni yoqing", text: "guruhning taklif havolasi uchun admin tasdig‘ini talab qiling. Shunda havolani bosgan kishi darhol a’zo bo‘lmaydi, ariza qoldiradi." },
    { name: "Mos botni tanlang", text: "bot kirish arizalari so‘rovlarini qo‘llashini muallifidan yoki hujjatidan aniqlang." },
    { name: "Botni admin qiling", text: "unga foydalanuvchi qo‘shish huquqini (can_invite_users) bering. Bot API’ga ko‘ra, busiz bot arizalar haqida xabar ham olmaydi, ularni qabul yoki rad ham eta olmaydi." },
    { name: "Qo‘riqchi sifatida tayinlang", text: "keyin chat ma’lumotida qaysi bot qo‘riqchi ekanini admin sifatida tekshiring." },
    { name: "Sinab ko‘ring", text: "ikkinchi akkauntdan yoki tanishingiz orqali ariza yuboring. Mini-ilova ochiladimi, qaror to‘g‘ri chiqadimi — o‘zingiz ko‘ring." },
    { name: "Ortiqcha huquq bermang", text: "xabar o‘chirish yoki a’zoni chiqarish huquqini botga faqat chatni ham tozalatmoqchi bo‘lsangiz bering." },
  ],
  locales: {
    uz: {
      title: "Guruhga spam akkauntlar kirishini to‘xtatish: AI qo‘riqchimi yoki Stars?",
      excerpt: "Spamni eshikda to‘xtatishning asosiy yo‘li — kirishni arizali qilib, arizalarni AI qo‘riqchi botga tekshirtirish, Stars to‘sig‘i esa qo‘shimcha filtr. Ichida taqqoslash jadvali, ulash qadamlari va test misollari bor.",
      metaTitle: "Guruhga spam akkauntlar kirishini to‘xtatish",
      metaDescription: "Spamni eshikda to‘xtatishning asosiy yo‘li — kirishni arizali qilib, arizalarni AI qo‘riqchi botga tekshirtirish, Stars to‘sig‘i esa qo‘shimcha filtr.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как не пустить спам-аккаунты в группу Telegram: ИИ-страж или Stars?",
      excerpt: "Основная защита от спама на входе — вступление по заявкам и проверка заявок ИИ-стражем. Плата в Stars — только дополнительный фильтр. Внутри: сравнительная таблица, шаги подключения и примеры вопросов для теста.",
      metaTitle: "Как не пустить спам-аккаунты в группу Telegram",
      metaDescription: "Основная защита от спама на входе — вступление по заявкам и проверка заявок ИИ-стражем. Плата в Stars — только дополнительный фильтр.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Stop Spam Accounts Joining Your Telegram Group: AI Guardian or Stars?",
      excerpt: "The main way to stop spam at the door is to require join requests and let an AI guardian bot screen them. Stars barriers are an extra filter. Inside: a comparison table, setup steps and test examples.",
      metaTitle: "Stop Spam Accounts Joining Your Telegram Group",
      metaDescription: "The main way to stop spam at the door is to require join requests and let an AI guardian bot screen them. Stars barriers are an extra filter.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
