import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-proksi-ulash-xavfsizmi";

/**
 * Telegram proksi ulash: qo‘shish, o‘chirish va operator nimani ko‘radi
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: O'zbekistondagi Telegram foydalanuvchisi kanallarda «Telegram tamom, zudlik bilan proksiga ulaning» degan postlarni ko'rib «telegram proksi ulash» deb qidiradi. U proksini Telegram sozlamalarida qanday qo'shish va o'chirishni, MTProto va SOCKS5 farqini, begona proksi bot nimani ko'rishi va nimani ko'ra olmasligini hamda Stars yoki Premium buyurtmasi paytida proksi xavfsizmi ekanini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://core.telegram.org/proxy
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Proksi Telegram ilovasining o‘zida qo‘shiladi va o‘sha bo‘limda o‘chiriladi. Android’da yo‘l: Settings → Data and Storage → Proxy Settings. Telegram hujjatiga ko‘ra, MTProto proksi operatori chatlaringizni, username va akkaunt ID’ingizni ko‘ra olmaydi. Lekin u IP manzilingiz va ulanish vaqtlaringizni yozib olishi mumkin. Shuning uchun proksini faqat ishonchli manbadan oling.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#telegram-proksi-ulash-kerakmi-va", label: "Telegram proksi ulash kerakmi va «Telegram tamom» postlariga qanday qarash kerak?" },
          { href: "#mtproto-va-socks5-farqi-nimada", label: "MTProto va SOCKS5: farqi nimada?" },
          { href: "#proksini-telegram-sozlamalarida-qanday-qoshish", label: "Proksini Telegram sozlamalarida qanday qo‘shish mumkin?" },
          { href: "#proksini-qanday-ochirish-yoki-almashtirish", label: "Proksini qanday o‘chirish yoki almashtirish mumkin?" },
          { href: "#mtproto-proksi-egasiga-nima-ochiq", label: "MTProto proksi egasiga nima ochiq, nima yopiq?" },
          { href: "#proksi-beraman-degan-bot-raqam", label: "«Proksi beraman» degan bot raqam yoki kod so‘rasa, nima qilish kerak?" },
          { href: "#stars-yoki-premium-buyurtma-qilayotganda", label: "Stars yoki Premium buyurtma qilayotganda proksi yoqilgan bo‘lsa xavfsizmi?" },
          { href: "#ishonchli-proksini-qanday-tanlash-mumkin", label: "Ishonchli proksini qanday tanlash mumkin: tezkor tekshiruv ro‘yxati" },
        ]}
      />
      <h2 id="telegram-proksi-ulash-kerakmi-va">Telegram proksi ulash kerakmi va «Telegram tamom» postlariga qanday qarash kerak?</h2>
      <p>Proksi — qurilmangiz bilan Telegram serverlari o‘rtasida turadigan oraliq server. Telegram <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">MTProxy sahifasida</a> uning vazifasini aniq yozgan: ayrim hududlarda Telegramga kirishni cheklaydigan internet senzurasini chetlab o‘tish. Demak, proksi Telegram «tamom» bo‘lganda emas, unga kirish to‘silganda kerak bo‘ladi.</p>
      <p>«Telegram — TAMOM! Zudlik bilan ulaning» kabi postlar rasmiy manba emas. Odatda ularning ostida bitta bot havolasi turadi. Shunday postlardan birida tilga olingan proksi bot haqida rasmiy ma’lumot topilmadi. «Oq ro‘yxatlar bo‘lganda ham ishlaydi» degan da’voni Telegram hujjatlari tasdiqlamaydi. Telegram uzilish haqida rasmiy bayonot berganmi — bu maqolada tasdiqlanmagan.</p>
      <p>Shuning uchun avval vaziyatni baholang:</p>
      <ul>
        <li>Xabarlar ketyapti, kanallar yangilanyapti — demak, Telegram ishlayapti. Proksi qo‘shishga shoshilmang.</li>
        <li>Ilova uzoq vaqt «ulanmoqda» holatida tursa, avval internetni va boshqa ilovalarni tekshiring.</li>
        <li>Proksi rostdan kerak bo‘lsa ham, uni manbasini bilib qo‘shing.</li>
      </ul>
      <p>Vahimali chaqiriq odamni o‘ylamasdan bosishga undash uchun yoziladi. Proksi bir necha daqiqada qo‘shiladi, bir soat kechiksangiz ham hech narsa yo‘qotmaysiz.</p>
      <h2 id="mtproto-va-socks5-farqi-nimada">MTProto va SOCKS5: farqi nimada?</h2>
      <p>Telegram ilovalari odatda ikki turdagi proksini qo‘llaydi: SOCKS5 va MTProto. MTProto proksi Telegram hujjatlarida MTProxy deb ataladi. Istalgan foydalanuvchi mavjud MTProxy tuguniga ulanishi yoki o‘z tugunini ishga tushirishi mumkin. SOCKS5 haqida Telegram sahifasida operator nimani ko‘rishi yoki ko‘rmasligi aytilmagan.</p>
      <CompareTable
        headers={["Belgi", "MTProto (MTProxy)", "SOCKS5"]}
        rows={[
          ["Telegram ilovasida qo‘llanadimi", "Ha", "Ha"],
          ["Kim ishga tushiradi", "Istalgan odam o‘z tugunini ochishi mumkin", "Proksi egasi; Telegram sahifasida tafsilot yo‘q"],
          ["Chatlar ro‘yxatida homiy kanal", "Paydo bo‘lishi mumkin", "Telegram sahifasida aytilmagan"],
          ["Operator ko‘ra olmaydigan narsalar", "Username, akkaunt ID, chatlar va faoliyat", "Bu maqolada tasdiqlanmagan"],
          ["IP manzil va ulanish vaqtlari", "Yozib olinishi mumkin", "Bu maqolada tasdiqlanmagan"],
        ]}
      />
      <p>Oddiy foydalanuvchi uchun amaliy farq shu: MTProto bo‘yicha Telegram operatorga nima ochiq va nima yopiqligini ochiq yozgan. SOCKS5 uchun bunday rasmiy izoh yo‘q. Shu sababli quyidagi «ko‘radi / ko‘rmaydi» qoidalari faqat MTProto proksiga tegishli. Sizga SOCKS5 ma’lumoti berilgan bo‘lsa, uning egasiga ko‘proq ehtiyotkorlik bilan qarang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="proksini-telegram-sozlamalarida-qanday-qoshish">Proksini Telegram sozlamalarida qanday qo‘shish mumkin?</h2>
      <p>Telegram ma’lumotiga ko‘ra, barcha mobil va desktop ilovalari proksi orqali ulanishga imkon beradi. Android uchun yo‘l Telegram hujjatida aniq ko‘rsatilgan:</p>
      <Steps>
        <Step title={"Sozlamalarni oching"}>menyudan Settings (Sozlamalar) bandini tanlang.</Step>
        <Step title={"Data and Storage’ga kiring"}>ma’lumotlar va xotira bo‘limi.</Step>
        <Step title={"Proxy Settings’ni toping"}>u sahifaning eng pastida turadi.</Step>
        <Step title={"Proksi qo‘shishni tanlang"}>turini belgilang: SOCKS5 yoki MTProto. Tugma nomi ilova versiyasiga qarab farq qilishi mumkin.</Step>
        <Step title={"Ma’lumotlarni kiriting"}>proksi manbasi bergan ulanish ma’lumotlarini xatosiz yozing.</Step>
        <Step title={"Saqlang va yoqing"}>so‘ng chatlar ro‘yxatiga qayting.</Step>
      </Steps>
      <p>Ulanganingizni qalqon belgisidan bilasiz: Telegram hujjatiga ko‘ra, proksiga ulanganda u chatlar ro‘yxati tepasida paydo bo‘ladi. Qalqon bor-u, xabarlar ketmayotgan bo‘lsa, ehtimol shu proksi ishlamayapti va uni almashtirish kerak.</p>
      <Notice label={"Muhim"}>iPhone va Telegram Desktop’da menyu nomlari va joylashuvi farq qilishi mumkin; bu maqolada aniq yo‘l tasdiqlanmagan. Sozlamalarda ma’lumotlar yoki ulanish bilan bog‘liq bo‘limdan Proxy bandini qidiring.</Notice>
      <p>Ma’lumotlarni kimdandir olgan bo‘lsangiz ham, ularni sozlamaga o‘zingiz kiriting. Shunda nimani qo‘shayotganingizni ko‘rib turasiz va hech kimga akkauntingizga kirish imkonini bermaysiz.</p>
      <h2 id="proksini-qanday-ochirish-yoki-almashtirish">Proksini qanday o‘chirish yoki almashtirish mumkin?</h2>
      <p>O‘chirish uchun alohida joy izlash shart emas: proksi qo‘shilgan Proxy Settings bo‘limida odatda uni o‘chirib qo‘yish yoki ro‘yxatdan olib tashlash mumkin.</p>
      <Steps>
        <Step title={"Proxy Settings’ga qayting"}>Android’da Settings → Data and Storage, sahifa pastida.</Step>
        <Step title={"Proksidan foydalanishni o‘chiring"}>ilova to‘g‘ridan-to‘g‘ri ulanishga o‘tadi.</Step>
        <Step title={"Keraksiz proksini olib tashlang"}>endi ishlatmaydiganingizni ro‘yxatda qoldirmang.</Step>
        <Step title={"Qalqon belgisini tekshiring"}>u yo‘qolgan bo‘lsa, proksisiz ulanib turibsiz.</Step>
      </Steps>
      <p>Qaysi holatda nima qilish kerakligini belgiga qarab aniqlang:</p>
      <CompareTable
        headers={["Nima bo‘lyapti", "Ehtimoliy sabab", "Nima qilish kerak"]}
        rows={[
          ["Proksisiz ham Telegram odatdagidek ishlayapti", "Proksi kerak emas", "Proksini o‘chiring"],
          ["Qalqon bor, lekin xabarlar ketmayapti", "Proksi trafikni yetkazmayapti", "Boshqa ishonchli proksiga almashtiring"],
          ["Qalqon chiqmadi", "Proksi yoqilmagan yoki ma’lumot xato kiritilgan", "Sozlamani qayta tekshiring"],
          ["Chatlar ro‘yxatida notanish kanal chiqdi", "Proksi operatori o‘z kanalini reklama qilyapti", "Kanal kerak bo‘lmasa, boshqa proksini ko‘rib chiqing"],
        ]}
      />
      <p>Ishonchsiz proksi haqida Telegram o‘zi ogohlantiradi: bunday server trafikni yetkazmasligi mumkin. Homiy kanal esa operatorning reklamasi. Proksini almashtirgandan keyin u qanday ko‘rinishi bu maqolada tasdiqlanmagan.</p>
      <p>Ro‘yxatda ikki-uchta ishonchli proksini saqlab qo‘yish qulay. Biri ishlamay qolsa, boshqasini yoqasiz va kanallardan shoshilib yangisini qidirmaysiz.</p>
      <h2 id="mtproto-proksi-egasiga-nima-ochiq">MTProto proksi egasiga nima ochiq, nima yopiq?</h2>
      <p>Bu savolga Telegram <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">MTProxy sahifasida</a> to‘g‘ridan-to‘g‘ri javob beradi.</p>
      <CompareTable
        headers={["Operator yozib olishi yoki qilishi mumkin", "Operator ko‘ra olmaydi"]}
        rows={[
          ["Qaysi IP manzildan ulanayotganingiz", "Telegram username’ingiz"],
          ["Qaysi vaqtlarda ulanayotganingiz", "Akkaunt ID’ingiz"],
          ["Telegramdan foydalanishga urinayotganingiz faktining o‘zi", "Chatlar ro‘yxatingiz"],
          ["Ishonchsiz bo‘lsa — trafikni yetkazmay qo‘yish", "Telegramdagi faoliyatingiz"],
        ]}
      />
      <p>Demak, MTProto proksi xabarlaringizni o‘qiy olmaydi. Lekin u «shu IP manzildan, shu vaqtlarda Telegramga ulanilgan» degan iz qoldirishi mumkin. Maxfiylik siz uchun muhim bo‘lsa, Telegram MTProxy’ga qo‘shimcha ravishda ishonchli VPN ishlatishni ko‘rib chiqishni tavsiya qiladi.</p>
      <p>Bir narsani ajratib oling: bu chegaralar ilova sozlamasiga kiritilgan proksiga tegishli. Agar biror bot yoki sayt sizdan akkauntga kirish ma’lumotlarini olsa, bu endi proksi emas va yuqoridagi himoya bunga taalluqli emas.</p>
      <h2 id="proksi-beraman-degan-bot-raqam">«Proksi beraman» degan bot raqam yoki kod so‘rasa, nima qilish kerak?</h2>
      <p>Proksini sozlash uchun server ma’lumotlari kifoya. Telegram hujjatiga ko‘ra, MTProto operatori hatto username’ingizni ko‘rmaydi. Demak, proksi ishlashi uchun unga telefon raqamingiz, SMS kodingiz yoki parolingiz kerak emas. Shunday so‘rov chiqsa, katta ehtimol bilan bu akkauntni egallashga urinish.</p>
      <p>Proksi uchun hech qachon berilmaydigan narsalar:</p>
      <ul>
        <li>Telegram yuborgan kirish kodi — SMS’dagisi ham, ilova ichidagisi ham.</li>
        <li>Ikki bosqichli tekshiruv (2FA) paroli.</li>
        <li>Bank karta raqami, amal qilish muddati va SMS tasdiq kodi.</li>
        <li>«Akkauntingizga kirib, o‘zimiz sozlab beramiz» degan taklif.</li>
        <li>«Tasdiqlash uchun» telefon raqamini ulashish va undan keyin kelgan kod.</li>
      </ul>
      <p>Kodni berib qo‘ygan bo‘lsangiz, Telegram sozlamalaridagi faol seanslarni tekshiring va notanish qurilmalarni chiqarib yuboring. Akkauntni oldindan himoyalash uchun ikki bosqichli parolni yoqing — tartibi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">Telegram akkauntini o‘g‘irlashdan himoya qilish</Link> maqolasida. Kirish oynasida Premium yoki SMS uchun to‘lov so‘ralsa, bu alohida holat — <Link href="/blog/telegramga-kirishda-premium-sms-tolov">kirishda pul so‘ralishi haqida</Link> o‘qing. SMS kod kelmayotgan bo‘lsa ham, uni «yordam beraman» degan botga yubormang: nima qilish kerakligi <Link href="/blog/telegram-sms-kod-kelmayotganda">SMS kod kelmasa</Link> maqolasida yozilgan.</p>
      <h2 id="stars-yoki-premium-buyurtma-qilayotganda">Stars yoki Premium buyurtma qilayotganda proksi yoqilgan bo‘lsa xavfsizmi?</h2>
      <p>MTProto proksi yoqilgan paytda @StarsPaymee_bot bilan yozishmangiz operatorga ko‘rinmaydi: Telegram ma’lumotiga ko‘ra, u chatlaringizni va faoliyatingizni ko‘ra olmaydi, username va ID’ni ham bilmaydi. Buyurtmaning o‘zi esa proksiga bog‘liq bo‘lmagan qoidalar bilan ishlaydi:</p>
      <ul>
        <li>Bot faqat qabul qiluvchining @username’ini so‘raydi. Parol, SMS kod yoki akkauntga kirish kerak emas — proksi bilan ham, proksisiz ham.</li>
        <li>To‘lov so‘mda: Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Xalqaro karta, kripto hamyon yoki VPN talab qilinmaydi.</li>
        <li>Premium Telegram’ning sovg‘a mexanizmi orqali username’ga ulanadi. Faol obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi.</li>
        <li>Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</li>
      </ul>
      <Notice label={"Muhim"}>Proksi to‘lov paytida uzilib qolsa, qayta to‘lashga shoshilmang. Avval botdagi buyurtma holatiga qarang. Stars balansda ko‘rinmasa, <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Stars kelmasa nima qilish</Link> maqolasidagi tartibni bajaring. Uzilish paytidagi to‘lov qanday ko‘rib chiqilishi bu maqolada tasdiqlanmagan — savol bo‘lsa, buyurtma ma’lumoti bilan <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</Notice>
      <p>Yana bir xavf — homiy kanal. Proksi ulangach chiqqan notanish kanalda «yarim narxda yulduz» yoki «Premium’ni sovg‘aga beramiz» kabi postlar bo‘lishi mumkin. StarsPaymee buyurtmalari faqat <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali qabul qilinadi, narxlar esa <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida turadi. StarsPaymee mustaqil xizmat va Telegram nomidan ish yuritmaydi.</p>
      <h2 id="ishonchli-proksini-qanday-tanlash-mumkin">Ishonchli proksini qanday tanlash mumkin: tezkor tekshiruv ro‘yxati</h2>
      <p>Proksi qo‘shishdan oldin quyidagi savollarga javob bering:</p>
      <ul>
        <li><b>Manbani bilasizmi?</b> Eng yaxshisi — tanish odam bergan yoki o‘zingiz boshqaradigan server. Telegram bunga imkon beradi: istalgan odam o‘z MTProxy tugunini ochishi mumkin.</li>
        <li><b>Manba noma’lummi?</b> Unda IP manzilingiz va ulanish vaqtlaringiz yozib olinishi mumkin. Bunga rozimisiz — o‘zingiz hal qiling.</li>
        <li><b>Bosim bormi?</b> «Zudlik bilan», «Telegram tamom», «faqat bugun» kabi so‘zlar — to‘xtab o‘ylash uchun sabab.</li>
        <li><b>Nima so‘ralyapti?</b> Ulanish ma’lumotlaridan boshqa narsa — raqam, kod, parol — so‘ralsa, davom etmang.</li>
        <li><b>Qaysi tur?</b> MTProto bo‘yicha operator chegaralari rasmiy yozilgan; SOCKS5 uchun bunday izoh yo‘q.</li>
        <li><b>Homiy kanal chiqdimi?</b> Bu operatorning reklamasi. Undagi havolalarni tekshirmasdan bosmang.</li>
        <li><b>Maxfiylik muhimmi?</b> Ishonchli VPN qo‘shimcha himoya qatlami bo‘ladi.</li>
        <li><b>Kerak bo‘lmay qoldimi?</b> Proksini o‘chiring — keraksiz oraliq bo‘g‘inni saqlashning foydasi yo‘q.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/proxy", label: "Telegram MTProxy" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Proksi yoqqanimdan keyin Telegram sekinlashdi — bunga chidash kerakmi?", answer: "Ulanish oraliq server orqali o‘tadi, shuning uchun tezlik ko‘p jihatdan o‘sha serverga bog‘liq. Xabarlar juda kech ketsa, boshqa ishonchli proksini yoqing yoki Telegram proksisiz ishlasa, uni butunlay o‘chiring." },
  { question: "Chatlarim orasida o‘zim obuna bo‘lmagan kanal turibdi — bu qayerdan chiqdi?", answer: "Telegram hujjatiga ko‘ra, MTProto proksiga ulangach operator reklama qilayotgan kanal ro‘yxatda paydo bo‘lishi mumkin. U chatlaringizni ko‘rish imkonini bermaydi, lekin undagi havolalarga ehtiyot bo‘ling." },
  { question: "Qalqon belgisi ko‘rinmayapti — proksi ulanmadimi?", answer: "Qalqon proksiga ulanganda chatlar ro‘yxati tepasida chiqishi kerak. Ko‘rinmasa, Proxy Settings’da proksi yoqilganini va ma’lumotlar to‘g‘ri kiritilganini tekshiring, kerak bo‘lsa boshqasini sinang." },
  { question: "Proksi egasi kimga yozayotganimni bila oladimi?", answer: "MTProto proksi bo‘lsa — yo‘q: Telegram yozishicha, operator chatlar ro‘yxatingiz va faoliyatingizni ko‘ra olmaydi. Unga faqat IP manzil va ulanish vaqtlari kabi metama’lumotlar ochiq bo‘lishi mumkin." },
  { question: "Bitta proksini telefon va kompyuterda birga ishlatsa bo‘ladimi?", answer: "Telegram’ning barcha mobil va desktop ilovalari proksini qo‘llaydi, shuning uchun o‘sha ma’lumotni har bir qurilmaga kiritish mumkin. Har bir qurilmaning IP manzili operatorga ko‘rinishi mumkinligini hisobga oling." },
  { question: "Menga SOCKS5 berishdi, MTProto’dan yomonmi?", answer: "Ilova ikkalasini ham qo‘llaydi. Farqi shundaki, operator nimani ko‘ra olishi Telegram tomonidan faqat MTProto uchun ochiq yozilgan, SOCKS5 uchun esa bunday rasmiy izoh yo‘q." },
  { question: "Proksi yoqilganda @StarsPaymee_bot’da to‘lov qilsam, ma’lumotim proksiga chiqib ketadimi?", answer: "MTProto operatori bot bilan yozishmangizni ko‘ra olmaydi. Baribir karta raqami yoki SMS tasdiq kodini hech qaysi chatga yozmang — botga faqat qabul qiluvchining @username’i kerak." },
  { question: "Proksi orqali ulanib turib do‘stimga Premium olsam, u oladimi?", answer: "Premium do‘stingizning username’iga Telegram’ning sovg‘a mexanizmi orqali ulanadi, proksi esa faqat sizning qurilmangiz qaysi yo‘l bilan ulanishini o‘zgartiradi. Natijani botdagi buyurtma holatidan tekshiring; do‘stingizda faol Premium bo‘lsa, bot buyurtmani ochmaydi." },
  { question: "Proksi kanali «avval akkauntingizni tasdiqlang» deb kontaktimni so‘rayapti — bu odatiymi?", answer: "Yo‘q, proksi sozlamasiga faqat server ma’lumotlari kiritiladi. Raqamdan keyin kod ham so‘ralsa, bu akkauntni egallash urinishi bo‘lishi mumkin: kanalni tark eting va ikki bosqichli parolni yoqing." },
  { question: "Proksi bilan birga VPN’ni ham yoqish shartmi?", answer: "Shart emas. Telegram ko‘proq maxfiylik istaganlarga MTProxy bilan birga ishonchli VPN ishlatishni ko‘rib chiqishni maslahat beradi; oddiy ulanish uchun bittasi ham yetishi mumkin." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Прокси добавляется прямо в приложении Telegram и отключается там же. На Android путь такой: Settings → Data and Storage → Proxy Settings. По документации Telegram, оператор MTProto-прокси не видит ваши чаты, username и ID аккаунта. Но он может записать ваш IP-адрес и время подключений. Поэтому берите прокси только из надёжного источника.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#telegram-proksi-ulash-kerakmi-va", label: "Нужен ли прокси в Telegram и как относиться к постам «Telegram всё»?" },
          { href: "#mtproto-va-socks5-farqi-nimada", label: "MTProto и SOCKS5: в чём разница?" },
          { href: "#proksini-telegram-sozlamalarida-qanday-qoshish", label: "Как добавить прокси в настройках Telegram?" },
          { href: "#proksini-qanday-ochirish-yoki-almashtirish", label: "Как отключить или сменить прокси?" },
          { href: "#mtproto-proksi-egasiga-nima-ochiq", label: "Что открыто владельцу MTProto-прокси, а что нет?" },
          { href: "#proksi-beraman-degan-bot-raqam", label: "Что делать, если бот «с бесплатным прокси» просит номер или код?" },
          { href: "#stars-yoki-premium-buyurtma-qilayotganda", label: "Безопасно ли заказывать Stars или Premium с включённым прокси?" },
          { href: "#ishonchli-proksini-qanday-tanlash-mumkin", label: "Как выбрать надёжный прокси: короткий чек-лист" },
        ]}
      />
      <h2 id="telegram-proksi-ulash-kerakmi-va">Нужен ли прокси в Telegram и как относиться к постам «Telegram всё»?</h2>
      <p>Прокси — это промежуточный сервер между вашим устройством и серверами Telegram. На <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">странице MTProxy</a> Telegram прямо называет его задачу: обходить интернет-цензуру, которая в отдельных регионах ограничивает доступ к Telegram. То есть прокси нужен не тогда, когда Telegram «закончился», а когда доступ к нему заблокирован.</p>
      <p>Посты в духе «Telegram — ВСЁ! Срочно подключайтесь» — не официальный источник. Обычно под ними стоит ссылка на какой-нибудь бот. Об одном из прокси-ботов, упомянутых в таком посте, официальной информации найти не удалось. Утверждение «работает даже при белых списках» документация Telegram не подтверждает. Делал ли Telegram официальное заявление о сбое — в этой статье не подтверждено.</p>
      <p>Поэтому сначала оцените ситуацию:</p>
      <ul>
        <li>Сообщения уходят, каналы обновляются — значит, Telegram работает. С прокси можно не спешить.</li>
        <li>Если приложение долго висит в статусе «Соединение…», сначала проверьте интернет и другие приложения.</li>
        <li>Даже если прокси действительно нужен, добавляйте его, только зная источник.</li>
      </ul>
      <p>Паникёрские призывы пишут, чтобы человек нажал не раздумывая. Прокси добавляется за пару минут — подождёте час, ничего не потеряете.</p>
      <h2 id="mtproto-va-socks5-farqi-nimada">MTProto и SOCKS5: в чём разница?</h2>
      <p>Приложения Telegram обычно поддерживают два типа прокси: SOCKS5 и MTProto. В документации Telegram MTProto-прокси называется MTProxy. Любой пользователь может подключиться к уже существующему узлу MTProxy или запустить собственный. Что видит или не видит оператор SOCKS5, на странице Telegram не сказано.</p>
      <CompareTable
        headers={["Признак", "MTProto (MTProxy)", "SOCKS5"]}
        rows={[
          ["Поддерживается в приложении Telegram", "Да", "Да"],
          ["Кто запускает", "Любой может поднять свой узел", "Владелец прокси; на странице Telegram подробностей нет"],
          ["Спонсорский канал в списке чатов", "Может появиться", "На странице Telegram не сказано"],
          ["Что оператор не видит", "Username, ID аккаунта, чаты и активность", "В этой статье не подтверждено"],
          ["IP-адрес и время подключений", "Могут записываться", "В этой статье не подтверждено"],
        ]}
      />
      <p>Практическая разница для обычного пользователя такая: для MTProto Telegram открыто описал, что оператору доступно, а что нет. Для SOCKS5 такого официального пояснения нет. Поэтому правила «видит / не видит» ниже относятся только к MTProto-прокси. Если вам дали данные SOCKS5, относитесь к его владельцу с бо́льшей осторожностью.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="proksini-telegram-sozlamalarida-qanday-qoshish">Как добавить прокси в настройках Telegram?</h2>
      <p>По данным Telegram, все мобильные и десктопные приложения позволяют подключаться через прокси. Для Android путь прямо указан в документации Telegram:</p>
      <Steps>
        <Step title={"Откройте настройки"}>выберите в меню Settings (Настройки).</Step>
        <Step title={"Зайдите в Data and Storage"}>раздел данных и памяти.</Step>
        <Step title={"Найдите Proxy Settings"}>пункт находится в самом низу страницы.</Step>
        <Step title={"Выберите добавление прокси"}>укажите тип: SOCKS5 или MTProto. Название кнопки может отличаться в зависимости от версии приложения.</Step>
        <Step title={"Введите данные"}>без ошибок перепишите параметры подключения, которые дал источник прокси.</Step>
        <Step title={"Сохраните и включите"}>затем вернитесь к списку чатов.</Step>
      </Steps>
      <p>О подключении скажет значок щита: по документации Telegram, при работе через прокси он появляется над списком чатов. Если щит есть, а сообщения не уходят, скорее всего, этот прокси не работает и его стоит заменить.</p>
      <Notice label={"Важно"}>На iPhone и в Telegram Desktop названия и расположение пунктов могут отличаться; точный путь в этой статье не подтверждён. Ищите пункт Proxy в разделе настроек, связанном с данными или подключением.</Notice>
      <p>Даже если данные вам кто-то прислал, вводите их в настройки сами. Так вы видите, что именно добавляете, и никому не даёте доступа к своему аккаунту.</p>
      <h2 id="proksini-qanday-ochirish-yoki-almashtirish">Как отключить или сменить прокси?</h2>
      <p>Искать отдельное место не нужно: в том же разделе Proxy Settings, где прокси добавлялся, его обычно можно выключить или удалить из списка.</p>
      <Steps>
        <Step title={"Вернитесь в Proxy Settings"}>на Android это Settings → Data and Storage, внизу страницы.</Step>
        <Step title={"Выключите использование прокси"}>приложение перейдёт на прямое подключение.</Step>
        <Step title={"Удалите лишний прокси"}>не держите в списке тот, которым больше не пользуетесь.</Step>
        <Step title={"Проверьте значок щита"}>если он пропал, вы подключены без прокси.</Step>
      </Steps>
      <p>Что делать, подскажет симптом:</p>
      <CompareTable
        headers={["Что происходит", "Вероятная причина", "Что делать"]}
        rows={[
          ["Telegram нормально работает и без прокси", "Прокси не нужен", "Отключите прокси"],
          ["Щит есть, но сообщения не уходят", "Прокси не доставляет трафик", "Смените на другой надёжный прокси"],
          ["Щит не появился", "Прокси не включён или данные введены с ошибкой", "Перепроверьте настройку"],
          ["В списке чатов появился незнакомый канал", "Оператор прокси продвигает свой канал", "Если канал не нужен, подумайте о другом прокси"],
        ]}
      />
      <p>О ненадёжных прокси Telegram предупреждает сам: такой сервер может просто не доставлять трафик. А спонсорский канал — это реклама оператора. Как он ведёт себя после смены прокси, в этой статье не подтверждено.</p>
      <p>Удобно держать в списке два-три надёжных прокси. Если один перестанет работать, включите другой — и не придётся в спешке искать новый по каналам.</p>
      <h2 id="mtproto-proksi-egasiga-nima-ochiq">Что открыто владельцу MTProto-прокси, а что нет?</h2>
      <p>На этот вопрос Telegram прямо отвечает на <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">странице MTProxy</a>.</p>
      <CompareTable
        headers={["Оператор может записать или сделать", "Оператор не видит"]}
        rows={[
          ["С какого IP-адреса вы подключаетесь", "Ваш username в Telegram"],
          ["В какое время вы подключаетесь", "ID вашего аккаунта"],
          ["Сам факт, что вы пытаетесь пользоваться Telegram", "Ваш список чатов"],
          ["Если он ненадёжен — не доставлять трафик", "Вашу активность в Telegram"],
        ]}
      />
      <p>Итак, MTProto-прокси не может читать ваши сообщения. Но он способен оставить след: «с этого IP-адреса в такое-то время подключались к Telegram». Если приватность для вас важна, Telegram советует рассмотреть надёжный VPN в дополнение к MTProxy.</p>
      <p>Важное уточнение: эти границы касаются прокси, введённого в настройки приложения. Если какой-то бот или сайт получает от вас данные для входа в аккаунт, это уже не прокси, и описанная защита здесь не действует.</p>
      <h2 id="proksi-beraman-degan-bot-raqam">Что делать, если бот «с бесплатным прокси» просит номер или код?</h2>
      <p>Для настройки прокси достаточно данных сервера. По документации Telegram, оператор MTProto даже не видит ваш username. Значит, для работы прокси ему не нужны ни номер телефона, ни SMS-код, ни пароль. Если такой запрос появился, скорее всего, это попытка захватить аккаунт.</p>
      <p>Что никогда не отдают ради прокси:</p>
      <ul>
        <li>Код входа от Telegram — и из SMS, и внутри приложения.</li>
        <li>Пароль двухэтапной проверки (2FA).</li>
        <li>Номер банковской карты, срок действия и SMS-код подтверждения.</li>
        <li>Предложение «зайдём в ваш аккаунт и сами всё настроим».</li>
        <li>Номер телефона «для подтверждения» и код, который придёт после этого.</li>
      </ul>
      <p>Если код уже отдан, проверьте активные сеансы в настройках Telegram и завершите незнакомые устройства. Чтобы защитить аккаунт заранее, включите облачный пароль — порядок описан в статье <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">о защите Telegram-аккаунта от угона</Link>. Если при входе просят оплатить Premium или SMS, это отдельная ситуация — прочитайте, <Link href="/blog/telegramga-kirishda-premium-sms-tolov">почему при входе просят деньги</Link>. И даже если SMS-код не приходит, не отправляйте его боту, который «поможет»: что делать, написано в статье <Link href="/blog/telegram-sms-kod-kelmayotganda">если не приходит SMS-код</Link>.</p>
      <h2 id="stars-yoki-premium-buyurtma-qilayotganda">Безопасно ли заказывать Stars или Premium с включённым прокси?</h2>
      <p>Когда включён MTProto-прокси, ваша переписка с @StarsPaymee_bot оператору не видна: по данным Telegram, он не видит ни чаты, ни активность, не знает username и ID. А сам заказ работает по правилам, которые от прокси не зависят:</p>
      <ul>
        <li>Бот запрашивает только @username получателя. Пароль, SMS-код или вход в аккаунт не нужны — ни с прокси, ни без него.</li>
        <li>Оплата в сумах: Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота. Международная карта, криптокошелёк или VPN не требуются.</li>
        <li>Premium подключается на username через механизм подарков Telegram. Аккаунту с активной подпиской бот новый заказ Premium не откроет.</li>
        <li>Заказ обычно доставляется автоматически за несколько секунд.</li>
      </ul>
      <Notice label={"Важно"}>Если прокси отвалился во время оплаты, не спешите платить повторно. Сначала посмотрите статус заказа в боте. Если Stars не видно на балансе, действуйте по инструкции <Link href="/blog/telegram-stars-kelmadi-nima-qilish">если Stars не пришли</Link>. Как рассматривается платёж, сделанный во время сбоя, в этой статье не подтверждено — с вопросами пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>, приложив данные заказа.</Notice>
      <p>Ещё один риск — спонсорский канал. В незнакомом канале, появившемся после подключения прокси, могут быть посты вроде «звёзды за полцены» или «дарим Premium». Заказы StarsPaymee принимаются только через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, а цены указаны на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. StarsPaymee — независимый сервис и не действует от имени Telegram.</p>
      <h2 id="ishonchli-proksini-qanday-tanlash-mumkin">Как выбрать надёжный прокси: короткий чек-лист</h2>
      <p>Прежде чем добавлять прокси, ответьте на вопросы:</p>
      <ul>
        <li><b>Вы знаете источник?</b> Лучше всего — сервер от знакомого человека или ваш собственный. Telegram это позволяет: любой может запустить свой узел MTProxy.</li>
        <li><b>Источник неизвестен?</b> Тогда ваш IP-адрес и время подключений могут записываться. Согласны ли вы на это — решать вам.</li>
        <li><b>На вас давят?</b> Слова «срочно», «Telegram всё», «только сегодня» — повод остановиться и подумать.</li>
        <li><b>Что у вас просят?</b> Если кроме данных подключения просят что-то ещё — номер, код, пароль, — не продолжайте.</li>
        <li><b>Какой тип?</b> Для MTProto границы возможностей оператора описаны официально; для SOCKS5 такого пояснения нет.</li>
        <li><b>Появился спонсорский канал?</b> Это реклама оператора. Не переходите по ссылкам оттуда без проверки.</li>
        <li><b>Важна приватность?</b> Надёжный VPN станет дополнительным слоем защиты.</li>
        <li><b>Прокси больше не нужен?</b> Отключите его — держать лишнее промежуточное звено нет смысла.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/proxy", label: "Telegram MTProxy" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "После включения прокси Telegram стал тормозить — это нормально?", answer: "Соединение идёт через промежуточный сервер, поэтому скорость во многом зависит от него. Если сообщения уходят с большой задержкой, включите другой надёжный прокси или вовсе отключите его, если Telegram работает напрямую." },
  { question: "Среди чатов появился канал, на который я не подписывался. Откуда он?", answer: "По документации Telegram, после подключения к MTProto-прокси в списке может появиться канал, который продвигает оператор. Доступа к вашим чатам он не даёт, но к ссылкам в нём стоит относиться осторожно." },
  { question: "Значок щита не появляется — прокси не подключился?", answer: "При подключении через прокси щит должен быть над списком чатов. Если его нет, проверьте в Proxy Settings, что прокси включён и данные введены верно, при необходимости попробуйте другой." },
  { question: "Может ли владелец прокси узнать, с кем я переписываюсь?", answer: "Если это MTProto-прокси — нет: по словам Telegram, оператор не видит ни список чатов, ни вашу активность. Ему могут быть доступны только метаданные вроде IP-адреса и времени подключений." },
  { question: "Можно ли использовать один прокси и на телефоне, и на компьютере?", answer: "Все мобильные и десктопные приложения Telegram поддерживают прокси, так что одни и те же данные можно ввести на каждом устройстве. Учтите, что оператору может быть виден IP-адрес каждого из них." },
  { question: "Мне дали SOCKS5 — он хуже MTProto?", answer: "Приложение поддерживает оба типа. Разница в том, что Telegram официально описал возможности оператора только для MTProto, а для SOCKS5 такого пояснения нет." },
  { question: "Если я оплачиваю заказ в @StarsPaymee_bot с включённым прокси, мои данные утекут оператору?", answer: "Оператор MTProto не видит вашу переписку с ботом. И всё же не пишите номер карты или SMS-код подтверждения ни в один чат — боту нужен только @username получателя." },
  { question: "Если оформить Premium другу через прокси, он его получит?", answer: "Premium подключается на username друга через механизм подарков Telegram, а прокси меняет лишь способ, которым к сети подключается ваше устройство. Результат проверьте по статусу заказа в боте; если у друга уже активен Premium, бот заказ не откроет." },
  { question: "Прокси-канал просит «сначала подтвердить аккаунт» и поделиться контактом — так бывает?", answer: "Нет, в настройки прокси вводятся только данные сервера. Если после номера просят ещё и код, это может быть попытка угнать аккаунт: покиньте канал и включите облачный пароль." },
  { question: "Обязательно ли включать VPN вместе с прокси?", answer: "Не обязательно. Тем, кому важна приватность, Telegram советует рассмотреть надёжный VPN в дополнение к MTProxy; для обычного подключения может хватить и одного из них." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You add a proxy inside the Telegram app and remove it in the same place. On Android the path is Settings → Data and Storage → Proxy Settings. According to Telegram’s documentation, an MTProto proxy operator cannot see your chats, username or account ID. They can, however, log your IP address and connection times, so only use proxies you trust.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#telegram-proksi-ulash-kerakmi-va", label: "Do you actually need a Telegram proxy, and what about “Telegram is over” posts?" },
          { href: "#mtproto-va-socks5-farqi-nimada", label: "MTProto vs SOCKS5: what’s the difference?" },
          { href: "#proksini-telegram-sozlamalarida-qanday-qoshish", label: "How do you add a proxy in Telegram settings?" },
          { href: "#proksini-qanday-ochirish-yoki-almashtirish", label: "How do you turn off or switch a proxy?" },
          { href: "#mtproto-proksi-egasiga-nima-ochiq", label: "What can an MTProto proxy owner see, and what can’t they?" },
          { href: "#proksi-beraman-degan-bot-raqam", label: "What if a “free proxy” bot asks for your number or a code?" },
          { href: "#stars-yoki-premium-buyurtma-qilayotganda", label: "Is it safe to order Stars or Premium with a proxy turned on?" },
          { href: "#ishonchli-proksini-qanday-tanlash-mumkin", label: "How to pick a trustworthy proxy: a quick checklist" },
        ]}
      />
      <h2 id="telegram-proksi-ulash-kerakmi-va">Do you actually need a Telegram proxy, and what about “Telegram is over” posts?</h2>
      <p>A proxy is an intermediate server that sits between your device and Telegram’s servers. Telegram states its purpose clearly on the <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">MTProxy page</a>: to get around internet censorship that restricts access to Telegram in certain regions. In other words, you need a proxy when access to Telegram is blocked, not when someone claims Telegram is “over”.</p>
      <p>Posts like “Telegram is FINISHED! Connect right now” are not an official source. There is usually a single bot link underneath. For the proxy bot mentioned in one such post, no official information could be found. Telegram’s documentation does not confirm the claim that it “works even under whitelists”. Whether Telegram issued any official statement about an outage is not confirmed in this article.</p>
      <p>So assess the situation first:</p>
      <ul>
        <li>Messages are going through and channels are updating? Then Telegram is working. Don’t rush to add a proxy.</li>
        <li>If the app sits on “Connecting…” for a long time, check your internet connection and other apps first.</li>
        <li>If you really do need a proxy, add one only when you know where it came from.</li>
      </ul>
      <p>Alarmist calls to action are written to make people tap without thinking. Adding a proxy takes a few minutes, and waiting an hour costs you nothing.</p>
      <h2 id="mtproto-va-socks5-farqi-nimada">MTProto vs SOCKS5: what’s the difference?</h2>
      <p>Telegram apps generally support two types of proxy: SOCKS5 and MTProto. In Telegram’s documentation, an MTProto proxy is called MTProxy. Any user can connect to an existing MTProxy node or run their own. Telegram’s page does not say what a SOCKS5 operator can or cannot see.</p>
      <CompareTable
        headers={["Feature", "MTProto (MTProxy)", "SOCKS5"]}
        rows={[
          ["Supported in the Telegram app", "Yes", "Yes"],
          ["Who runs it", "Anyone can run their own node", "The proxy owner; no details on Telegram’s page"],
          ["Sponsored channel in your chat list", "May appear", "Not mentioned on Telegram’s page"],
          ["What the operator cannot see", "Username, account ID, chats and activity", "Not confirmed in this article"],
          ["IP address and connection times", "May be logged", "Not confirmed in this article"],
        ]}
      />
      <p>For an everyday user, the practical difference is this: for MTProto, Telegram has spelled out what is visible to the operator and what isn’t. There is no such official explanation for SOCKS5. That’s why the “can see / can’t see” rules below apply only to MTProto proxies. If you were given SOCKS5 details, be more careful about who runs that server.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="proksini-telegram-sozlamalarida-qanday-qoshish">How do you add a proxy in Telegram settings?</h2>
      <p>According to Telegram, all mobile and desktop apps let you connect through a proxy. The Android path is spelled out in Telegram’s documentation:</p>
      <Steps>
        <Step title={"Open Settings"}>pick Settings from the menu.</Step>
        <Step title={"Go to Data and Storage"}>the data and storage section.</Step>
        <Step title={"Find Proxy Settings"}>it’s at the very bottom of the page.</Step>
        <Step title={"Choose to add a proxy"}>select the type: SOCKS5 or MTProto. The button label may differ depending on your app version.</Step>
        <Step title={"Enter the details"}>type the connection details from your proxy source carefully, without typos.</Step>
        <Step title={"Save and turn it on"}>then go back to your chat list.</Step>
      </Steps>
      <p>You’ll know you’re connected by the shield icon: according to Telegram’s documentation, it appears at the top of your chat list when you’re connected to a proxy. If the shield is there but messages aren’t sending, that proxy probably isn’t working and you should switch to another one.</p>
      <Notice label={"Important"}>On iPhone and Telegram Desktop, menu names and locations may differ; the exact path is not confirmed in this article. Look for a Proxy item in the data or connection section of Settings.</Notice>
      <p>Even if you got the details from someone else, enter them into the settings yourself. That way you see exactly what you’re adding, and you never give anyone access to your account.</p>
      <h2 id="proksini-qanday-ochirish-yoki-almashtirish">How do you turn off or switch a proxy?</h2>
      <p>There’s no need to hunt for a separate menu: in the same Proxy Settings section where you added it, you can usually disable the proxy or remove it from the list.</p>
      <Steps>
        <Step title={"Go back to Proxy Settings"}>on Android, Settings → Data and Storage, at the bottom of the page.</Step>
        <Step title={"Turn off proxy use"}>the app switches back to a direct connection.</Step>
        <Step title={"Remove proxies you don’t need"}>don’t keep ones you no longer use in the list.</Step>
        <Step title={"Check the shield icon"}>if it’s gone, you’re connected without a proxy.</Step>
      </Steps>
      <p>Use the symptoms to decide what to do:</p>
      <CompareTable
        headers={["What’s happening", "Likely cause", "What to do"]}
        rows={[
          ["Telegram works normally without a proxy", "You don’t need one", "Turn the proxy off"],
          ["Shield is shown, but messages aren’t sending", "The proxy isn’t delivering traffic", "Switch to another trusted proxy"],
          ["No shield appears", "The proxy isn’t enabled or details were entered wrong", "Recheck the settings"],
          ["An unfamiliar channel shows up in your chat list", "The proxy operator is promoting their channel", "If you don’t want it, consider a different proxy"],
        ]}
      />
      <p>Telegram itself warns that an untrusted proxy may not deliver your traffic. The sponsored channel is the operator’s advertising. How it behaves after you switch proxies is not confirmed in this article.</p>
      <p>It’s handy to keep two or three trusted proxies in your list. If one stops working, you just turn on another instead of scrambling through channels for a new one.</p>
      <h2 id="mtproto-proksi-egasiga-nima-ochiq">What can an MTProto proxy owner see, and what can’t they?</h2>
      <p>Telegram answers this directly on its <a href={"https://core.telegram.org/proxy"} target="_blank" rel="noopener noreferrer">MTProxy page</a>.</p>
      <CompareTable
        headers={["The operator can log or do", "The operator cannot see"]}
        rows={[
          ["Which IP address you connect from", "Your Telegram username"],
          ["What times you connect", "Your account ID"],
          ["The simple fact that you’re trying to use Telegram", "Your chat list"],
          ["If untrusted — fail to deliver your traffic", "Your activity in Telegram"],
        ]}
      />
      <p>So an MTProto proxy cannot read your messages. But it can leave a trail saying “someone connected to Telegram from this IP at these times”. If privacy matters to you, Telegram recommends considering a trusted VPN in addition to MTProxy.</p>
      <p>Keep one distinction in mind: these limits apply to a proxy entered in the app settings. If a bot or website gets your account login details, that’s no longer a proxy, and none of the protection above applies.</p>
      <h2 id="proksi-beraman-degan-bot-raqam">What if a “free proxy” bot asks for your number or a code?</h2>
      <p>Server details are all you need to set up a proxy. According to Telegram’s documentation, an MTProto operator can’t even see your username. So a proxy doesn’t need your phone number, SMS code or password to work. If you see a request like that, it’s most likely an attempt to take over your account.</p>
      <p>Things you should never hand over for a proxy:</p>
      <ul>
        <li>A login code sent by Telegram — whether by SMS or inside the app.</li>
        <li>Your two-step verification (2FA) password.</li>
        <li>Your bank card number, expiry date or SMS confirmation code.</li>
        <li>An offer to “log into your account and set it up for you”.</li>
        <li>Sharing your phone number “for verification” and the code that arrives afterwards.</li>
      </ul>
      <p>If you’ve already given away a code, check active sessions in Telegram settings and terminate any devices you don’t recognise. To protect your account in advance, turn on a two-step password — the steps are in our guide on <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your Telegram account from theft</Link>. If the login screen asks you to pay for Premium or an SMS, that’s a separate case — read <Link href="/blog/telegramga-kirishda-premium-sms-tolov">why Telegram asks for payment at login</Link>. And if your SMS code isn’t arriving, don’t send it to a bot that “offers help” either: what to do is covered in <Link href="/blog/telegram-sms-kod-kelmayotganda">when the SMS code doesn’t arrive</Link>.</p>
      <h2 id="stars-yoki-premium-buyurtma-qilayotganda">Is it safe to order Stars or Premium with a proxy turned on?</h2>
      <p>While an MTProto proxy is on, your chat with @StarsPaymee_bot is not visible to the operator: according to Telegram, they can’t see your chats or activity and don’t know your username or ID. The order itself follows rules that have nothing to do with the proxy:</p>
      <ul>
        <li>The bot only asks for the recipient’s @username. No password, SMS code or account login is needed — with or without a proxy.</li>
        <li>Payment is in UZS: Click, Payme, Uzum, Paynet (in the app or in cash at a terminal), a transfer to an UzCard/HUMO card, or your bot balance. No international card, crypto wallet or VPN is required.</li>
        <li>Premium is linked to a username through Telegram’s gifting mechanism. The bot won’t open a new Premium order for an account that already has an active subscription.</li>
        <li>Orders are usually delivered automatically within a few seconds.</li>
      </ul>
      <Notice label={"Important"}>If the proxy drops during payment, don’t rush to pay again. Check the order status in the bot first. If the Stars don’t show up in your balance, follow the steps in <Link href="/blog/telegram-stars-kelmadi-nima-qilish">what to do if Stars didn’t arrive</Link>. How a payment made during a connection drop is handled is not confirmed in this article — if in doubt, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details.</Notice>
      <p>One more risk is the sponsored channel. An unfamiliar channel that appears after connecting to a proxy may carry posts like “Stars at half price” or “we’re giving away Premium”. StarsPaymee only accepts orders through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, and prices are listed on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages. StarsPaymee is an independent service and does not act on Telegram’s behalf.</p>
      <h2 id="ishonchli-proksini-qanday-tanlash-mumkin">How to pick a trustworthy proxy: a quick checklist</h2>
      <p>Before adding a proxy, answer these questions:</p>
      <ul>
        <li><b>Do you know the source?</b> Best of all is a server from someone you know or one you run yourself. Telegram allows this: anyone can run their own MTProxy node.</li>
        <li><b>Is the source unknown?</b> Then your IP address and connection times may be logged. Whether you’re fine with that is your call.</li>
        <li><b>Is there pressure?</b> Words like “urgent”, “Telegram is over” or “today only” are a reason to stop and think.</li>
        <li><b>What are they asking for?</b> If it’s anything beyond connection details — a number, a code, a password — stop.</li>
        <li><b>Which type is it?</b> For MTProto, the operator’s limits are officially documented; there’s no such explanation for SOCKS5.</li>
        <li><b>Did a sponsored channel appear?</b> That’s the operator’s advertising. Don’t tap its links without checking them.</li>
        <li><b>Does privacy matter to you?</b> A trusted VPN adds an extra layer of protection.</li>
        <li><b>Don’t need it anymore?</b> Turn the proxy off — there’s no benefit in keeping an unnecessary middleman.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/proxy", label: "Telegram MTProxy" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Telegram got slower after I turned on a proxy — do I just have to live with it?", answer: "Your connection now goes through an intermediate server, so speed depends largely on that server. If messages are very slow, switch to another trusted proxy, or turn it off entirely if Telegram works without one." },
  { question: "There’s a channel in my chats I never subscribed to — where did it come from?", answer: "According to Telegram’s documentation, after connecting to an MTProto proxy a channel promoted by the operator may appear in your list. It doesn’t give anyone access to your chats, but be careful with the links it posts." },
  { question: "I don’t see the shield icon — did the proxy fail to connect?", answer: "The shield should appear at the top of your chat list when you’re connected to a proxy. If it’s missing, check in Proxy Settings that the proxy is enabled and the details are correct, and try another one if needed." },
  { question: "Can the proxy owner find out who I’m messaging?", answer: "Not with an MTProto proxy: Telegram says the operator cannot see your chat list or activity. At most they may see metadata such as your IP address and connection times." },
  { question: "Can I use the same proxy on my phone and my computer?", answer: "All of Telegram’s mobile and desktop apps support proxies, so you can enter the same details on each device. Keep in mind that each device’s IP address may be visible to the operator." },
  { question: "I was given a SOCKS5 proxy — is it worse than MTProto?", answer: "The app supports both. The difference is that Telegram has only documented what the operator can see for MTProto; there’s no such official explanation for SOCKS5." },
  { question: "If I pay in @StarsPaymee_bot with a proxy on, does my data leak to the proxy?", answer: "An MTProto operator can’t see your conversation with the bot. Still, never type your card number or SMS confirmation code into any chat — the bot only needs the recipient’s @username." },
  { question: "If I buy Premium for a friend while connected through a proxy, will they get it?", answer: "Premium is linked to your friend’s username through Telegram’s gifting mechanism; the proxy only changes how your own device connects. Check the result in the order status in the bot — and if your friend already has active Premium, the bot won’t open the order." },
  { question: "A proxy channel says “verify your account first” and asks for my contact — is that normal?", answer: "No, a proxy only needs server details in the settings. If a code is requested after your number, it may be an attempt to hijack your account: leave the channel and turn on a two-step password." },
  { question: "Do I have to turn on a VPN as well as the proxy?", answer: "No. Telegram suggests that people who want more privacy consider a trusted VPN alongside MTProxy; for a basic connection, one of them may be enough." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram proksi ulash","telegram proxy sozlash","telegram proksi xavfsizmi","mtproto proksi nima","telegram socks5 proksi","telegram proksini o‘chirish","bepul proksi telegram","как подключить прокси в телеграм","прокси для телеграм","mtproto прокси безопасно ли","как отключить прокси в телеграм","socks5 или mtproto телеграм"],
  howToSteps: [
    { name: "Sozlamalarni oching", text: "menyudan Settings (Sozlamalar) bandini tanlang." },
    { name: "Data and Storage’ga kiring", text: "ma’lumotlar va xotira bo‘limi." },
    { name: "Proxy Settings’ni toping", text: "u sahifaning eng pastida turadi." },
    { name: "Proksi qo‘shishni tanlang", text: "turini belgilang: SOCKS5 yoki MTProto. Tugma nomi ilova versiyasiga qarab farq qilishi mumkin." },
    { name: "Ma’lumotlarni kiriting", text: "proksi manbasi bergan ulanish ma’lumotlarini xatosiz yozing." },
    { name: "Saqlang va yoqing", text: "so‘ng chatlar ro‘yxatiga qayting." },
  ],
  locales: {
    uz: {
      title: "Telegram proksi ulash: qo‘shish, o‘chirish va operator nimani ko‘radi",
      excerpt: "Telegram proksi ilova sozlamasidagi Proxy bo‘limida qo‘shiladi va o‘chiriladi. Maqolada MTProto va SOCKS5 farqi, operator nimani ko‘ra olishi va Stars yoki Premium xaridida proksi xavfsizligi yoritilgan.",
      metaTitle: "Telegram proksi ulash: qo‘shish, o‘chirish",
      metaDescription: "Telegram proksi ilova sozlamasidagi Proxy bo‘limida qo‘shiladi va o‘chiriladi. Maqolada MTProto va SOCKS5 farqi, operator nimani ko‘ra olishi va Stars yoki…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Прокси в Telegram: как подключить, отключить и что видит владелец",
      excerpt: "Прокси в Telegram добавляется и отключается в разделе Proxy настроек приложения. Разбираем разницу MTProto и SOCKS5, что видит оператор и насколько безопасна покупка Stars или Premium через прокси.",
      metaTitle: "Прокси в Telegram: как подключить, отключить",
      metaDescription: "Прокси в Telegram добавляется и отключается в разделе Proxy настроек приложения. Разбираем разницу MTProto и SOCKS5, что видит оператор и насколько безопасна…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "How to Set Up a Telegram Proxy: Add, Remove, and What the Operator Sees",
      excerpt: "A Telegram proxy is added and removed in the app’s Proxy settings. This guide covers MTProto vs SOCKS5, what a proxy operator can see, and proxy safety when buying Stars or Premium.",
      metaTitle: "How to Set Up a Telegram Proxy",
      metaDescription: "A Telegram proxy is added and removed in the app’s Proxy settings. This guide covers MTProto vs SOCKS5, what a proxy operator can see, and proxy safety when…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
