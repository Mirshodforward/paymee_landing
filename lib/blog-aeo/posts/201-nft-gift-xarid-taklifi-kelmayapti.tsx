import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "nft-gift-xarid-taklifi-kelmayapti";

/**
 * Telegram gift xarid taklifi kelmayapti: sabab va xaridor topish yo‘llari
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Noyob kolleksion Telegram gift egasi Telegram egalarni yashirganidan keyin xarid takliflari kelmay qolgani uchun sababini va xaridorni xavfsiz topish yo'llarini «telegram gift xarid taklifi kelmayapti» kabi so'zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://core.telegram.org/api/gifts
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ko‘pincha sabab giftning o‘zida emas, uning ko‘rinishida. Xaridor sovg‘ani ko‘rsa-yu, egasiga qanday yozishni bilmasa, taklif kelmaydi. Gift kanallarida Telegram egalarni yashirgani aytilmoqda, lekin rasmiy manbada bu tasdiqlanmagan. Avval o‘z profilingizni tekshiring. Keyin xaridorni sotuv mexanizmlari orqali qidiring, nikka username yozishga shoshilmang.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#nega-noyob-giftimga-xarid-taklifi", label: "Nega noyob giftimga xarid taklifi kelmay qoldi?" },
          { href: "#sabab-sizdami-yoki-telegramdami-qanday", label: "Sabab sizdami yoki Telegram’dami: qanday ajratiladi?" },
          { href: "#giftim-boshqalarga-korinayotganini-qanday-tekshiraman", label: "Giftim boshqalarga ko‘rinayotganini qanday tekshiraman?" },
          { href: "#usernameni-nikka-qoyish-foydasi-bormi", label: "@username’ni nikka qo‘yish: foydasi bormi va qanday xavfi bor?" },
          { href: "#profilni-ochmasdan-xaridor-topishning-xavfsizroq", label: "Profilni ochmasdan xaridor topishning xavfsizroq yo‘llari qaysilar?" },
          { href: "#notanish-odam-ozi-yozib-taklif", label: "Notanish odam o‘zi yozib taklif bersa, qanday tekshirish kerak?" },
          { href: "#xaridor-sizni-qanday-qidiradi-va", label: "Xaridor sizni qanday qidiradi va gap qaysi «anonimlik» haqida?" },
          { href: "#giftni-sotmasdan-saqlab-qolish-yoki", label: "Giftni sotmasdan saqlab qolish yoki Stars’ga aylantirish qachon mantiqli?" },
          { href: "#kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan", label: "Kolleksiyani to‘ldirmoqchi bo‘lsangiz, so‘mda qayerdan olinadi?" },
        ]}
      />
      <h2 id="nega-noyob-giftimga-xarid-taklifi">Nega noyob giftimga xarid taklifi kelmay qoldi?</h2>
      <p>Kolleksion gift egasiga taklif ikki shart bajarilganda keladi:</p>
      <ul>
        <li>xaridor sovg‘ani ko‘radi;</li>
        <li>xaridor egasiga yetib bora oladi.</li>
      </ul>
      <p>Zanjirning bir halqasi uzilsa, eng chiroyli nusxa ham jim turadi.</p>
      <p>So‘nggi paytda gift kanallarida bir gap aylanmoqda: go‘yo Telegram kolleksion sovg‘a egalarini hamma uchun yashirgan va shundan keyin takliflar deyarli to‘xtagan. Bu kanal kuzatuvi, xolos. Telegram’ning ochiq hujjatlarida bunday majburiy o‘zgarish, uning sanasi yoki versiyasi bu maqola tayyorlanayotganda tasdiqlanmadi.</p>
      <p>Rasmiy <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts hujjatida</a> boshqa narsa aniq yozilgan: foydalanuvchi sovg‘ani profilida ko‘rsatishga qaror qilsa, uni barcha foydalanuvchilar ko‘ra oladi. Demak, gift ko‘rinishi ko‘p jihatdan egasining tanlovi va sozlamalariga bog‘liq.</p>
      <p>Shuning uchun «Telegram hammasini buzdi» degan xulosaga shoshilmang. Ko‘p holatda sabab oddiyroq bo‘ladi:</p>
      <ul>
        <li>gift profilga chiqmagan;</li>
        <li>gift Stars’ga aylantirilgan;</li>
        <li>narx bozordan ancha baland.</li>
      </ul>
      <h2 id="sabab-sizdami-yoki-telegramdami-qanday">Sabab sizdami yoki Telegram’dami: qanday ajratiladi?</h2>
      <p>Quyidagi jadval belgidan sababga borishga yordam beradi. Har bir qatorni o‘z profilingiz bilan solishtiring.</p>
      <CompareTable
        headers={["Belgi", "Ehtimoliy sabab", "Nima qilish kerak"]}
        rows={[
          ["Profildagi sovg‘alar bo‘limida gift yo‘q", "Gift saqlanmagan, ya’ni profilga mahkamlanmagan", "Giftni ochib, profilda ko‘rsatishni yoqing"],
          ["Yangi olingan gift profilga o‘zi chiqmadi", "Avtomatik ko‘rsatish maxfiylik sozlamasiga bog‘liq", "Maxfiylik bo‘limida sovg‘alarga oid bandni tekshiring"],
          ["Gift umuman ro‘yxatda yo‘q", "Stars’ga aylantirilgan bo‘lishi mumkin", "Stars tarixini ko‘ring va qachon nima qilinganini aniqlang"],
          ["Gift ko‘rinadi, lekin hech kim yozmaydi", "Narx o‘xshash nusxalardan baland yoki kolleksiyaga talab past", "Narxni model, fon va belgisi o‘xshash nusxalar bilan solishtiring"],
          ["Gift ko‘rinadi, sahifasida ismingiz chiqmaydi", "Sozlama yoki yangilanish bilan bog‘liq bo‘lishi mumkin", "Ilova sozlamalarini o‘zingiz tekshiring, rasmiy izoh topilmadi"],
        ]}
      />
      <p>Hujjat sovg‘alarni «saqlangan» va «saqlanmagan» turlarga ajratadi, ya’ni profilga mahkamlangan va mahkamlanmagan. Saqlanmagan gift akkauntingizda qoladi, lekin profilingizga kirgan begonaga ko‘rinmaydi. Olingan sovg‘ani profilga avtomatik chiqarish esa oluvchining maxfiylik sozlamasiga qarab ishlaydi.</p>
      <p>Jadvalning to‘rtinchi qatori ko‘rinish bilan bog‘liq emas. Bozor sust bo‘lsa, takliflar profil sozlamasidan qat’i nazar kamayadi. Narx va cheklovlar haqida batafsil — <Link href="/blog/telegram-gift-sotilmayapti">Telegram Gift sotilmayapti</Link> maqolasida.</p>
      <p>Ega ismini sovg‘a sahifasida qayta ko‘rsatadigan alohida sozlama bor-yo‘qligi bu maqolada tasdiqlanmagan. Ilovangiz versiyasida bunday band bo‘lsa, uni sozlamalardan topasiz. Bo‘lmasa, quyidagi tekshiruvdan o‘ting.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="giftim-boshqalarga-korinayotganini-qanday-tekshiraman">Giftim boshqalarga ko‘rinayotganini qanday tekshiraman?</h2>
      <p>O‘z profilingizni ochganingizda boshqalar ko‘rmaydigan narsalarni ham ko‘rasiz. Shuning uchun tekshiruv begona ko‘z bilan yakunlanishi kerak.</p>
      <Steps>
        <Step title={"Profilingizni oching"}>sovg‘alar bo‘limida kerakli gift turganini ko‘ring.</Step>
        <Step title={"Mahkamlanganini tekshiring"}>giftni bosib, u profilda ko‘rsatilayotganini aniqlang. Saqlanmagan gift begonalarga chiqmaydi.</Step>
        <Step title={"Maxfiylik sozlamasini oching"}>maxfiylik bo‘limida sovg‘alarga oid bandni toping. Band nomi ilova versiyasiga qarab farq qilishi mumkin.</Step>
        <Step title={"Begona ko‘z bilan qarang"}>kontaktlaringizda bo‘lmagan tanishingizdan profilingizni username orqali ochib ko‘rishni so‘rang. O‘zingiz olgan skrinshot bu vazifani bajarmaydi.</Step>
        <Step title={"Ega qatorini qayd eting"}>gift sahifasida ismingiz chiqmasa, buni yozib qo‘ying. Bu sozlama yoki yangilanish natijasi bo‘lishi mumkin, rasmiy tushuntirish topilmadi.</Step>
      </Steps>
      <p>Agar dastlabki to‘rt qadamda hammasi joyida bo‘lsa, sabab ko‘rinishda emas. Unda narx va bozor holatiga qarash kerak.</p>
      <h2 id="usernameni-nikka-qoyish-foydasi-bormi">@username’ni nikka qo‘yish: foydasi bormi va qanday xavfi bor?</h2>
      <p>Kanal kuzatuviga ko‘ra, ayrim egalar takliflar kamaygach @username’ini to‘g‘ridan-to‘g‘ri ismiga yozib qo‘ymoqda. Bu rasmiy tavsiya emas, foydalanuvchilar o‘zi topgan yo‘l. Shu yo‘lni tanlashdan oldin foydasi va xavfini solishtirib ko‘ring.</p>
      <ul>
        <li><b>Foydasi:</b> giftni ko‘rib qiziqqan odam sizga bir bosishda yozadi.</li>
        <li><b>Firibgarlar ham sizni oson topadi.</b> Soxta havola, «vositachi» taklifi va «avval sovg‘ani yuboring» talabi aynan ochiq profillarga yo‘naltiriladi.</li>
        <li><b>Ism hamma chatda ko‘rinadi.</b> Guruhdagi oddiy xabaringiz ham «qimmat gift egasi shu» degan belgiga aylanadi.</li>
        <li><b>Iz qoladi.</b> Ismni keyin o‘zgartirsangiz ham, eski skrinshot va forward’lar saqlanib qoladi.</li>
      </ul>
      <p>Baribir shu yo‘lni tanlasangiz, shaxsiy akkauntni emas, alohida savdo profilini ishlating. Ikki bosqichli parolni yoqing — qanday qilinishi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya</Link> maqolasida. Sotuv tugagach, ismni oddiy holiga qaytaring.</p>
      <h2 id="profilni-ochmasdan-xaridor-topishning-xavfsizroq">Profilni ochmasdan xaridor topishning xavfsizroq yo‘llari qaysilar?</h2>
      <p>Maqsad oddiy: xaridor giftni topsin, pul va sovg‘a almashinuvi esa sizning ishonchingizga emas, mexanizmga tayansin.</p>
      <ul>
        <li><b>Ilovadagi sotuvga qo‘yish.</b> Ilovangizda kolleksion giftni narx bilan sotuvga qo‘yish imkoni bo‘lsa, xaridor sizga yozmasdan sotib olishi mumkin. Shaxsiy yozishma qisqargani sari aldov uchun joy ham kamayadi. Komissiya, qayta sotish sanasi va narx chegarasi — <Link href="/blog/telegram-gift-sotish">collectible sovg‘ani sotish qo‘llanmasida</Link>.</li>
        <li><b>Fragment.</b> Fragment’da sotish shartlari va u yerda egasi qanday ko‘rinishi bu maqolada tasdiqlanmagan. Qaror qilishdan oldin <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> sahifasini o‘zingiz o‘qing.</li>
        <li><b>Ijaraga berish.</b> Sotishga shoshilmasangiz, noyob giftni muddatga berish bozori ham bor. Ijara bilan xaridning farqi — <Link href="/blog/telegram-nft-sovga-ijarasi">NFT sovg‘a ijarasi</Link> maqolasida.</li>
        <li><b>Narxni qayta ko‘rib chiqish.</b> Bir kolleksiyadagi nusxalar model, fon, belgi va raqamga qarab turlicha baholanadi. Floor price bilan sotilgan narx farqi — <Link href="/blog/telegram-gift-price">nega bir xil gift ikki xil narxda</Link> maqolasida.</li>
      </ul>
      <p>Ilovadagi sotuv eng kam muloqot talab qiladi. Ijarada gift o‘zingizda qoladi, lekin daromad sekinroq keladi. Nikka username yozish eng tez, ammo eng xavfli yo‘l.</p>
      <h2 id="notanish-odam-ozi-yozib-taklif">Notanish odam o‘zi yozib taklif bersa, qanday tekshirish kerak?</h2>
      <p>Ochiq profilga keladigan shubhali takliflar ko‘pincha bir xil ssenariy bo‘yicha boradi. Xaridor shoshiradi, bozordan baland narx aytadi va «tezroq bo‘lsin» deb o‘z yo‘lini taklif qiladi.</p>
      <p>Taklifni shu ketma-ketlikda tekshiring:</p>
      <ul>
        <li><b>Havola.</b> Uni ko‘rinadigan matniga qarab emas, haqiqiy manziliga qarab tekshiring. Tartibi — <Link href="/blog/telegram-gift-havolasini-tekshirish">Gift havolasini tekshirish</Link> maqolasida.</li>
        <li><b>Dalil.</b> «To‘lov qildim» degan skrinshot yoki chek dalil emas. Ularni bir daqiqada yasash mumkin.</li>
        <li><b>Pul tushgani.</b> Giftni o‘tkazishdan oldin pul hisobingizga tushganini ilovada o‘zingiz ko‘ring.</li>
        <li><b>Vositachi.</b> Notanish «vositachi bot» yoki «kafil» taklif qilinsa, savdoni to‘xtating.</li>
        <li><b>Narx.</b> Narx kolleksiyadagi o‘xshash nusxalardan sezilarli baland bo‘lsa, buni omad emas, xavf belgisi deb qabul qiling.</li>
        <li><b>Yozishma.</b> Kelishuvni chatda saqlang va xaridordan matnni o‘chirmaslikni so‘rang. Muammo chiqsa, bu yozishma kerak bo‘ladi.</li>
      </ul>
      <Notice label={"Muhim"}>Hech qanday xaridorga SMS kod, parol yoki ikki bosqichli parolni bermang. Kod so‘ragan «xaridor» giftni emas, akkauntingizni olmoqchi.</Notice>
      <h2 id="xaridor-sizni-qanday-qidiradi-va">Xaridor sizni qanday qidiradi va gap qaysi «anonimlik» haqida?</h2>
      <p>Chalkashlikning katta qismi ikki xil «anonimlik»ni aralashtirib yuborishdan kelib chiqadi.</p>
      <p><b>Birinchisi — yuboruvchi ismini yashirish.</b> Hujjatga ko‘ra, yuboruvchi buni yoqsa, oluvchi sovg‘ani profilda ko‘rsatganda yuboruvchining ismi boshqalarga chiqmaydi. Oluvchining o‘zi esa kim yuborganini baribir ko‘radi. Bu hujjatlashtirilgan mexanizm, u kolleksion gift egasining ko‘rinishiga taalluqli emas.</p>
      <p><b>Ikkinchisi — kolleksion gift egasining ko‘rinishi.</b> Kanallar aynan shu haqda gapirmoqda, ammo rasmiy hujjatda bunday qoida bu maqolada tasdiqlanmadi.</p>
      <p>Egasiga yetolmagan xaridor odatda narx ochiq turgan joyga boradi: kolleksiyani ochadi va sotuvdagi nusxalarni solishtiradi. Giftingiz u yerda bo‘lmasa, xaridor uning borligini bilmaydi. Shuning uchun sotuvchining asosiy ishi — narxni ko‘rinadigan joyga chiqarish, profilni ochish emas.</p>
      <p>Yana bir nozik jihat bor: ba’zi xaridorlar giftni o‘zi uchun emas, kimgadir sovg‘a qilish uchun oladi. Hujjatga ko‘ra, foydalanuvchi ayrim turdagi sovg‘alarni qabul qilishni maxfiylik sozlamalarida taqiqlashi mumkin. Savdo shu sababli to‘xtab qolmasligi uchun xaridordan oluvchi bunday sovg‘ani qabul qila olishini oldindan tekshirishni so‘rang.</p>
      <h2 id="giftni-sotmasdan-saqlab-qolish-yoki">Giftni sotmasdan saqlab qolish yoki Stars’ga aylantirish qachon mantiqli?</h2>
      <p>Rasmiy hujjatda sovg‘a olgan foydalanuvchi uni profilda ko‘rsatishi yoki Telegram Stars’ga aylantirishi mumkinligi yozilgan. Hujjat bularni ikki muqobil yo‘l sifatida tasvirlaydi. Shuning uchun aylantirishni qaytarib bo‘lmaydigan qadam deb hisoblang.</p>
      <p>Kolleksion, ya’ni upgrade qilingan gift uchun bu imkoniyat bor-yo‘qligini va qancha Stars taklif qilinishini ilovaning o‘zida tekshiring. Qaror qilishdan oldin o‘sha raqamni o‘xshash nusxalarning bozor narxi bilan solishtiring.</p>
      <p>Saqlab qolish quyidagi holatlarda mantiqli:</p>
      <ul>
        <li>giftni kolleksiya uchun olgansiz va pul hozir kerak emas;</li>
        <li>bozor sust, lekin nusxangizda noyob fon yoki belgi bor;</li>
        <li>yagona taklif shubhali kanaldan kelgan.</li>
      </ul>
      <p>Yana bir narsani oldindan bilib qo‘ying: StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi, ya’ni giftni bot orqali pulga aylantirib bo‘lmaydi. Sotish yo‘llari va strategiyasi — <Link href="/blog/telegram-gift-sotish">sotish qo‘llanmasida</Link>.</p>
      <h2 id="kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan">Kolleksiyani to‘ldirmoqchi bo‘lsangiz, so‘mda qayerdan olinadi?</h2>
      <p>Ba’zan sotuvchi xaridorga ham aylanadi: bir nusxa sotilishini kutib turib, kolleksiyaga boshqasini qo‘shmoqchi bo‘ladi. Bunday holatda StarsPaymee quyidagicha ishlaydi:</p>
      <ul>
        <li>Tayyor kolleksion (NFT) sovg‘alar <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> ichidagi NFT Market’da sotiladi, to‘lov so‘mda. Umumiy ma’lumot — <Link href="/gifts">sovg‘alar sahifasida</Link>.</li>
        <li>Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi.</li>
        <li>Buyurtma uchun faqat @username kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</li>
        <li>To‘lov usullari: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Har bir nusxaning narxi botda ko‘rsatiladi.</li>
        <li>StarsPaymee — Telegram’dan mustaqil xizmat.</li>
      </ul>
      <p>Savol tug‘ilsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga yozing.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Telegram rostdan ham kolleksion gift egalarini hamma uchun yashirdimi?", answer: "Bu gap gift kanallarida aylanmoqda, lekin bu maqola tayyorlanganda Telegram’ning ochiq hujjatlarida tasdiqlanmadi. Hujjatda faqat profilda ko‘rsatilgan sovg‘ani barcha foydalanuvchilar ko‘ra olishi yozilgan." },
  { question: "Giftim profilimda turibdi, lekin nega hech kim sotib olaman deb yozmayapti?", answer: "Gift ko‘rinib tursa, sabab ko‘pincha narxda yoki kolleksiyaga talab pastligida. Nusxangizni model, fon va belgisi o‘xshash boshqa nusxalar bilan solishtirib ko‘ring." },
  { question: "Giftni profilga mahkamlamasam, uni boshqalar ko‘radimi?", answer: "Yo‘q. Saqlanmagan sovg‘a akkauntingizda turadi, lekin profilingizga kirgan begona odam uni ko‘rmaydi." },
  { question: "Nikimga @username yozsam, akkauntim xavf ostida qoladimi?", answer: "Bu akkauntni o‘z-o‘zidan buzmaydi, lekin sizni firibgarlar uchun oson nishonga aylantiradi. Shu yo‘lni tanlasangiz, alohida savdo profili va ikki bosqichli parol bilan ishlang." },
  { question: "Xaridor «avval giftni yuboring, keyin to‘layman» desa nima qilish kerak?", answer: "Rad eting. Giftni faqat pul hisobingizga tushganini ilovada o‘zingiz ko‘rganingizdan keyin o‘tkazing yoki shaxsiy yozishmasiz ishlaydigan sotuv mexanizmidan foydalaning." },
  { question: "Pul kerak bo‘lsa, giftni Stars’ga aylantirish sotishdan yaxshimi?", answer: "Avval ilovada kolleksion gift uchun bu imkoniyat bor-yo‘qligini va qancha Stars taklif qilinishini ko‘ring, keyin o‘xshash nusxalarning bozor narxi bilan solishtiring. Aylantirishni ortga qaytarib bo‘lmaydigan qaror deb hisoblang." },
  { question: "StarsPaymee mening giftimni yoki Stars’imni sotib oladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Botda faqat Stars, Premium va sovg‘alarni so‘mda xarid qilish mumkin." },
  { question: "Xaridor giftni boshqa odamga sovg‘a qilmoqchi bo‘lsa, nimaga e’tibor berish kerak?", answer: "Foydalanuvchi ayrim sovg‘a turlarini maxfiylik sozlamalarida taqiqlashi mumkin, unda yuborish to‘xtab qolishi ehtimoli bor. Savdodan oldin xaridordan oluvchining sozlamasini tekshirishni so‘rang." },
  { question: "Fragment’da sotsam, xaridor mening kimligimni ko‘radimi?", answer: "Fragment’da sovg‘a egasi qanday ko‘rinishi bu maqolada tasdiqlanmagan. Sotishdan oldin fragment.com’dagi shartlarni o‘zingiz o‘qib chiqing." },
  { question: "Takliflar umuman yo‘q bo‘lsa, narxni tushirish kerakmi?", answer: "Avval gift begonalarga ko‘rinayotganini tekshiring, keyin narxni kolleksiyaning floor narxi va real sotuvlar bilan solishtiring. Narx bozor darajasida bo‘lsa-yu, taklif baribir kelmasa, ijaraga berish yoki kutish ham mumkin." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Чаще всего дело не в самом подарке, а в том, видят ли его другие. Если покупатель замечает подарок, но не понимает, как связаться с владельцем, предложения не будет. В гифт-каналах говорят, что Telegram скрыл владельцев, но официальные источники этого не подтверждают. Сначала проверьте свой профиль. Затем ищите покупателя через механизмы продажи и не спешите вписывать username в имя.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#nega-noyob-giftimga-xarid-taklifi", label: "Почему на мой редкий подарок перестали приходить предложения?" },
          { href: "#sabab-sizdami-yoki-telegramdami-qanday", label: "Причина во мне или в Telegram: как отличить?" },
          { href: "#giftim-boshqalarga-korinayotganini-qanday-tekshiraman", label: "Как проверить, видят ли другие мой подарок?" },
          { href: "#usernameni-nikka-qoyish-foydasi-bormi", label: "Вписать @username в имя: есть ли польза и какие риски?" },
          { href: "#profilni-ochmasdan-xaridor-topishning-xavfsizroq", label: "Какие есть более безопасные способы найти покупателя, не раскрывая профиль?" },
          { href: "#notanish-odam-ozi-yozib-taklif", label: "Незнакомец сам написал с предложением: как его проверить?" },
          { href: "#xaridor-sizni-qanday-qidiradi-va", label: "Как покупатель ищет владельца и о какой «анонимности» идёт речь?" },
          { href: "#giftni-sotmasdan-saqlab-qolish-yoki", label: "Когда разумно не продавать подарок, а оставить его или обменять на Stars?" },
          { href: "#kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan", label: "Хотите пополнить коллекцию: где купить за сумы?" },
        ]}
      />
      <h2 id="nega-noyob-giftimga-xarid-taklifi">Почему на мой редкий подарок перестали приходить предложения?</h2>
      <p>Владелец коллекционного подарка получает предложение, только когда выполнены два условия:</p>
      <ul>
        <li>покупатель видит подарок;</li>
        <li>покупатель может связаться с владельцем.</li>
      </ul>
      <p>Если рвётся хотя бы одно звено цепочки, даже самый красивый экземпляр будет лежать без внимания.</p>
      <p>В последнее время в гифт-каналах ходит слух: будто Telegram скрыл владельцев коллекционных подарков для всех, и после этого предложения почти прекратились. Это лишь наблюдение каналов. На момент подготовки статьи в открытой документации Telegram такое принудительное изменение, его дата или версия не подтверждены.</p>
      <p>В официальной <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts</a> прямо написано другое: если пользователь решает показать подарок в профиле, его могут увидеть все пользователи. Значит, видимость подарка во многом зависит от выбора владельца и его настроек.</p>
      <p>Поэтому не торопитесь с выводом «Telegram всё сломал». Обычно причина проще:</p>
      <ul>
        <li>подарок не выведен в профиль;</li>
        <li>подарок обменян на Stars;</li>
        <li>цена заметно выше рынка.</li>
      </ul>
      <h2 id="sabab-sizdami-yoki-telegramdami-qanday">Причина во мне или в Telegram: как отличить?</h2>
      <p>Таблица ниже помогает пройти путь от признака к причине. Сверьте каждую строку со своим профилем.</p>
      <CompareTable
        headers={["Признак", "Возможная причина", "Что делать"]}
        rows={[
          ["В разделе подарков профиля нет нужного подарка", "Подарок не сохранён, то есть не закреплён в профиле", "Откройте подарок и включите показ в профиле"],
          ["Новый подарок не появился в профиле сам", "Автоматический показ зависит от настройки конфиденциальности", "Проверьте пункт о подарках в разделе конфиденциальности"],
          ["Подарка вообще нет в списке", "Возможно, он обменян на Stars", "Посмотрите историю Stars и выясните, что и когда было сделано"],
          ["Подарок виден, но никто не пишет", "Цена выше похожих экземпляров или низкий спрос на коллекцию", "Сравните цену с экземплярами с похожими моделью, фоном и символом"],
          ["Подарок виден, но на его странице нет вашего имени", "Может быть связано с настройкой или обновлением", "Проверьте настройки приложения сами, официального объяснения не найдено"],
        ]}
      />
      <p>Документация делит подарки на «сохранённые» и «несохранённые», то есть закреплённые и не закреплённые в профиле. Несохранённый подарок остаётся в аккаунте, но посторонний, открывший ваш профиль, его не увидит. Автоматический вывод полученного подарка в профиль зависит от настройки конфиденциальности получателя.</p>
      <p>Четвёртая строка таблицы с видимостью не связана. Если рынок вялый, предложений становится меньше независимо от настроек профиля. Подробнее о цене и ограничениях — в статье <Link href="/blog/telegram-gift-sotilmayapti">Telegram-подарок не продаётся</Link>.</p>
      <p>Есть ли отдельная настройка, которая снова показывает имя владельца на странице подарка, в этой статье не подтверждено. Если такой пункт есть в вашей версии приложения, вы найдёте его в настройках. Если нет — пройдите проверку ниже.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="giftim-boshqalarga-korinayotganini-qanday-tekshiraman">Как проверить, видят ли другие мой подарок?</h2>
      <p>Открывая собственный профиль, вы видите и то, что скрыто от других. Поэтому проверку нужно завершить чужими глазами.</p>
      <Steps>
        <Step title={"Откройте профиль"}>убедитесь, что нужный подарок есть в разделе подарков.</Step>
        <Step title={"Проверьте закрепление"}>нажмите на подарок и посмотрите, показывается ли он в профиле. Несохранённый подарок посторонним не виден.</Step>
        <Step title={"Откройте настройки конфиденциальности"}>найдите пункт, относящийся к подаркам. Его название может отличаться в зависимости от версии приложения.</Step>
        <Step title={"Посмотрите чужими глазами"}>попросите знакомого, которого нет у вас в контактах, открыть ваш профиль по username. Ваш собственный скриншот эту задачу не решает.</Step>
        <Step title={"Зафиксируйте строку владельца"}>если на странице подарка нет вашего имени, отметьте это. Это может быть результатом настройки или обновления, официального объяснения не найдено.</Step>
      </Steps>
      <p>Если на первых четырёх шагах всё в порядке, дело не в видимости. Тогда стоит смотреть на цену и состояние рынка.</p>
      <h2 id="usernameni-nikka-qoyish-foydasi-bormi">Вписать @username в имя: есть ли польза и какие риски?</h2>
      <p>По наблюдениям каналов, некоторые владельцы после спада предложений вписывают свой @username прямо в имя. Это не официальная рекомендация, а способ, который придумали сами пользователи. Прежде чем пойти по этому пути, взвесьте плюсы и риски.</p>
      <ul>
        <li><b>Польза:</b> заинтересовавшийся подарком человек напишет вам в одно касание.</li>
        <li><b>Мошенникам вас тоже легко найти.</b> Поддельные ссылки, предложения «посредника» и требование «сначала отправьте подарок» нацелены именно на открытые профили.</li>
        <li><b>Имя видно во всех чатах.</b> Даже обычное сообщение в группе превращается в метку «вот владелец дорогого подарка».</li>
        <li><b>Остаётся след.</b> Даже если потом сменить имя, старые скриншоты и пересылки сохранятся.</li>
      </ul>
      <p>Если всё же выбираете этот путь, используйте не личный аккаунт, а отдельный торговый профиль. Включите двухэтапную аутентификацию — как это сделать, читайте в статье о <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защите аккаунта от взлома</Link>. После продажи верните имя в обычный вид.</p>
      <h2 id="profilni-ochmasdan-xaridor-topishning-xavfsizroq">Какие есть более безопасные способы найти покупателя, не раскрывая профиль?</h2>
      <p>Цель простая: покупатель находит подарок, а обмен денег на подарок опирается не на доверие к вам, а на механизм.</p>
      <ul>
        <li><b>Выставить на продажу в приложении.</b> Если ваше приложение позволяет выставить коллекционный подарок с ценой, покупатель может купить его, не написав вам. Чем меньше личной переписки, тем меньше места для обмана. Комиссия, дата повторной продажи и ценовые пределы — в <Link href="/blog/telegram-gift-sotish">руководстве по продаже коллекционного подарка</Link>.</li>
        <li><b>Fragment.</b> Условия продажи на Fragment и то, как там отображается владелец, в этой статье не подтверждены. Перед решением сами прочитайте страницу <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a>.</li>
        <li><b>Сдать в аренду.</b> Если не спешите продавать, есть и рынок, где редкие подарки отдают на срок. Чем аренда отличается от покупки — в статье об <Link href="/blog/telegram-nft-sovga-ijarasi">аренде NFT-подарков</Link>.</li>
        <li><b>Пересмотреть цену.</b> Экземпляры одной коллекции оцениваются по-разному в зависимости от модели, фона, символа и номера. Разница между floor price и ценой реальной продажи — в статье <Link href="/blog/telegram-gift-price">почему один и тот же подарок стоит по-разному</Link>.</li>
      </ul>
      <p>Продажа в приложении требует меньше всего общения. При аренде подарок остаётся у вас, но доход приходит медленнее. Username в имени — самый быстрый, но и самый рискованный путь.</p>
      <h2 id="notanish-odam-ozi-yozib-taklif">Незнакомец сам написал с предложением: как его проверить?</h2>
      <p>Подозрительные предложения на открытый профиль обычно идут по одному сценарию. Покупатель торопит, называет цену выше рынка и ради «скорости» предлагает свой способ сделки.</p>
      <p>Проверяйте предложение в таком порядке:</p>
      <ul>
        <li><b>Ссылка.</b> Смотрите не на видимый текст, а на настоящий адрес. Порядок проверки — в статье <Link href="/blog/telegram-gift-havolasini-tekshirish">как проверить ссылку на подарок</Link>.</li>
        <li><b>Доказательства.</b> Скриншот «я оплатил» или чек — не доказательство. Их можно сделать за минуту.</li>
        <li><b>Поступление денег.</b> Прежде чем передать подарок, сами убедитесь в приложении, что деньги пришли на ваш счёт.</li>
        <li><b>Посредник.</b> Если предлагают незнакомого «бота-посредника» или «гаранта», прекращайте сделку.</li>
        <li><b>Цена.</b> Если цена заметно выше похожих экземпляров коллекции, воспринимайте это не как удачу, а как сигнал опасности.</li>
        <li><b>Переписка.</b> Сохраняйте договорённость в чате и попросите покупателя не удалять сообщения. Если возникнет проблема, переписка понадобится.</li>
      </ul>
      <Notice label={"Важно"}>Никогда не сообщайте покупателю SMS-код, пароль или пароль двухэтапной аутентификации. «Покупатель», который просит код, хочет получить не подарок, а ваш аккаунт.</Notice>
      <h2 id="xaridor-sizni-qanday-qidiradi-va">Как покупатель ищет владельца и о какой «анонимности» идёт речь?</h2>
      <p>Большая часть путаницы возникает из-за того, что смешивают две разные «анонимности».</p>
      <p><b>Первая — скрытие имени отправителя.</b> По документации, если отправитель включает эту опцию, то при показе подарка в профиле получателя имя отправителя другим не видно. Сам получатель при этом всё равно видит, кто прислал подарок. Это задокументированный механизм, и к видимости владельца коллекционного подарка он отношения не имеет.</p>
      <p><b>Вторая — видимость владельца коллекционного подарка.</b> Именно о ней говорят каналы, но в официальной документации такое правило в рамках этой статьи не подтверждено.</p>
      <p>Покупатель, который не может связаться с владельцем, обычно идёт туда, где цена указана открыто: открывает коллекцию и сравнивает экземпляры на продаже. Если вашего подарка там нет, покупатель просто не знает о нём. Поэтому главная задача продавца — вывести цену туда, где её видно, а не открывать профиль.</p>
      <p>Есть ещё одна тонкость: некоторые покупают подарок не себе, а чтобы подарить кому-то. По документации, пользователь может запретить получение отдельных типов подарков в настройках конфиденциальности. Чтобы сделка не застряла из-за этого, попросите покупателя заранее проверить, может ли получатель принять такой подарок.</p>
      <h2 id="giftni-sotmasdan-saqlab-qolish-yoki">Когда разумно не продавать подарок, а оставить его или обменять на Stars?</h2>
      <p>В официальной документации сказано, что получатель подарка может показать его в профиле или обменять на Telegram Stars. Документация описывает это как два альтернативных пути. Поэтому считайте обмен необратимым шагом.</p>
      <p>Есть ли такая возможность для коллекционного, то есть улучшенного (upgrade), подарка и сколько Stars за него предлагают, проверьте в самом приложении. Перед решением сравните эту цифру с рыночной ценой похожих экземпляров.</p>
      <p>Оставить подарок себе имеет смысл, если:</p>
      <ul>
        <li>вы брали его для коллекции и деньги сейчас не нужны;</li>
        <li>рынок вялый, но у вашего экземпляра редкий фон или символ;</li>
        <li>единственное предложение пришло из сомнительного источника.</li>
      </ul>
      <p>И ещё одно стоит знать заранее: StarsPaymee не покупает у пользователей ни Stars, ни подарки, то есть превратить подарок в деньги через бота нельзя. Способы и стратегия продажи — в <Link href="/blog/telegram-gift-sotish">руководстве по продаже</Link>.</p>
      <h2 id="kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan">Хотите пополнить коллекцию: где купить за сумы?</h2>
      <p>Иногда продавец сам становится покупателем: пока один экземпляр ждёт покупателя, хочется добавить в коллекцию другой. В этом случае StarsPaymee работает так:</p>
      <ul>
        <li>Готовые коллекционные (NFT) подарки продаются в NFT Market внутри <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, оплата в сумах. Общая информация — на <Link href="/gifts">странице подарков</Link>.</li>
        <li>Лимитированные подарки, снятые Telegram с продажи, боты отправить не могут.</li>
        <li>Для заказа нужен только @username. Пароль, SMS-код или вход в аккаунт не запрашиваются.</li>
        <li>Способы оплаты: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота. Цена каждого экземпляра указана в боте.</li>
        <li>StarsPaymee — независимый от Telegram сервис.</li>
      </ul>
      <p>Если появились вопросы, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Telegram действительно скрыл владельцев коллекционных подарков для всех?", answer: "Такой слух ходит в гифт-каналах, но на момент подготовки статьи открытая документация Telegram его не подтверждает. В документации сказано лишь, что подарок, показанный в профиле, видят все пользователи." },
  { question: "Подарок есть в моём профиле, почему никто не пишет о покупке?", answer: "Если подарок виден, причина чаще всего в цене или слабом спросе на коллекцию. Сравните свой экземпляр с другими, у которых похожие модель, фон и символ." },
  { question: "Если не закреплять подарок в профиле, его увидят другие?", answer: "Нет. Несохранённый подарок остаётся в аккаунте, но посторонний человек, зашедший в ваш профиль, его не увидит." },
  { question: "Если вписать @username в имя, аккаунт окажется под угрозой?", answer: "Само по себе это аккаунт не взломает, но сделает вас удобной мишенью для мошенников. Если решитесь, используйте отдельный торговый профиль и включите двухэтапную аутентификацию." },
  { question: "Покупатель говорит: «Сначала отправьте подарок, потом заплачу». Что делать?", answer: "Отказаться. Передавайте подарок только после того, как сами увидели поступление денег в приложении, либо пользуйтесь механизмом продажи без личной переписки." },
  { question: "Если нужны деньги, выгоднее обменять подарок на Stars или продать?", answer: "Сначала проверьте в приложении, доступен ли обмен для коллекционного подарка и сколько Stars за него дают, затем сравните с рыночной ценой похожих экземпляров. Помните, что обмен отменить нельзя." },
  { question: "StarsPaymee купит мой подарок или мои Stars?", answer: "Нет, StarsPaymee не выкупает у пользователей ни Stars, ни подарки. В боте можно только купить Stars, Premium и подарки за сумы." },
  { question: "На что обратить внимание, если покупатель хочет подарить подарок другому человеку?", answer: "Пользователь может запретить отдельные типы подарков в настройках конфиденциальности, и тогда отправка может не пройти. Перед сделкой попросите покупателя уточнить настройки получателя." },
  { question: "Если продавать через Fragment, покупатель узнает, кто я?", answer: "Как на Fragment отображается владелец подарка, в этой статье не подтверждено. Перед продажей сами прочитайте условия на fragment.com." },
  { question: "Предложений нет совсем — снижать цену?", answer: "Сначала убедитесь, что подарок видят посторонние, затем сравните цену с floor price коллекции и реальными продажами. Если цена на уровне рынка, а предложений всё равно нет, можно сдать подарок в аренду или подождать." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>The problem is usually your gift’s visibility, not the gift itself. If a buyer sees the gift but can’t reach the owner, no offer arrives. Gift channels claim Telegram has hidden owners, but no official source confirms it. Check your own profile first. Then look for buyers through selling mechanisms, and don’t rush to add your username to your display name.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#nega-noyob-giftimga-xarid-taklifi", label: "Why did offers for my rare gift stop coming?" },
          { href: "#sabab-sizdami-yoki-telegramdami-qanday", label: "Is it you or Telegram? How to tell the difference" },
          { href: "#giftim-boshqalarga-korinayotganini-qanday-tekshiraman", label: "How do I check that others can see my gift?" },
          { href: "#usernameni-nikka-qoyish-foydasi-bormi", label: "Putting your @username in your display name: does it help, and what are the risks?" },
          { href: "#profilni-ochmasdan-xaridor-topishning-xavfsizroq", label: "What are safer ways to find a buyer without exposing your profile?" },
          { href: "#notanish-odam-ozi-yozib-taklif", label: "A stranger messages you with an offer: how do you check it?" },
          { href: "#xaridor-sizni-qanday-qidiradi-va", label: "How do buyers look for you, and which “anonymity” are people talking about?" },
          { href: "#giftni-sotmasdan-saqlab-qolish-yoki", label: "When does it make sense to keep the gift or convert it to Stars?" },
          { href: "#kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan", label: "Want to grow your collection? Where to buy in so‘m" },
        ]}
      />
      <h2 id="nega-noyob-giftimga-xarid-taklifi">Why did offers for my rare gift stop coming?</h2>
      <p>An offer reaches a collectible gift owner only when two conditions are met:</p>
      <ul>
        <li>the buyer can see the gift;</li>
        <li>the buyer can reach the owner.</li>
      </ul>
      <p>Break one link in that chain, and even the most beautiful copy sits in silence.</p>
      <p>Lately, a claim has been circulating in gift channels: supposedly Telegram has hidden collectible gift owners from everyone, and offers have almost stopped since then. This is a channel observation, nothing more. At the time this article was prepared, Telegram’s public documentation did not confirm any such forced change, its date or its version.</p>
      <p>The official <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts documentation</a> says something else clearly: if a user decides to display a gift on their profile, all users can see it. So a gift’s visibility depends largely on the owner’s own choices and settings.</p>
      <p>Don’t jump to the conclusion that “Telegram broke everything.” In many cases, the reason is simpler:</p>
      <ul>
        <li>the gift isn’t shown on the profile;</li>
        <li>the gift was converted to Stars;</li>
        <li>the price is well above the market.</li>
      </ul>
      <h2 id="sabab-sizdami-yoki-telegramdami-qanday">Is it you or Telegram? How to tell the difference</h2>
      <p>The table below takes you from the symptom to the likely cause. Compare each row with your own profile.</p>
      <CompareTable
        headers={["Symptom", "Likely cause", "What to do"]}
        rows={[
          ["The gift isn’t in the gifts section of your profile", "The gift is unsaved, meaning not pinned to the profile", "Open the gift and turn on display on your profile"],
          ["A newly received gift didn’t appear on the profile by itself", "Automatic display depends on your privacy settings", "Check the gift-related option in your privacy settings"],
          ["The gift isn’t in the list at all", "It may have been converted to Stars", "Review your Stars history to see what happened and when"],
          ["The gift is visible, but nobody writes", "The price is higher than similar copies or demand for the collection is low", "Compare the price with copies that have a similar model, backdrop and symbol"],
          ["The gift is visible, but your name doesn’t appear on its page", "This may relate to a setting or an update", "Check your app settings yourself; no official explanation was found"],
        ]}
      />
      <p>The documentation splits gifts into “saved” and “unsaved,” meaning pinned and not pinned to the profile. An unsaved gift stays in your account, but a stranger visiting your profile won’t see it. Automatic display of received gifts on the profile depends on the recipient’s privacy settings.</p>
      <p>The fourth row has nothing to do with visibility. When the market is slow, offers drop regardless of your profile settings. For more on pricing and restrictions, see <Link href="/blog/telegram-gift-sotilmayapti">Telegram Gift won’t sell</Link>.</p>
      <p>This article could not confirm whether a separate setting exists that shows the owner’s name on the gift page again. If your app version has such an option, you’ll find it in settings. If not, go through the check below.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="giftim-boshqalarga-korinayotganini-qanday-tekshiraman">How do I check that others can see my gift?</h2>
      <p>When you open your own profile, you see things others don’t. That’s why the check has to end with a stranger’s view.</p>
      <Steps>
        <Step title={"Open your profile"}>make sure the gift you want to sell is in the gifts section.</Step>
        <Step title={"Check that it’s pinned"}>tap the gift and confirm it’s displayed on your profile. An unsaved gift isn’t shown to others.</Step>
        <Step title={"Open your privacy settings"}>find the gift-related option. Its name may differ depending on your app version.</Step>
        <Step title={"Look through a stranger’s eyes"}>ask an acquaintance who isn’t in your contacts to open your profile by username. Your own screenshot won’t do this job.</Step>
        <Step title={"Note the owner line"}>if your name doesn’t appear on the gift page, write it down. It may be the result of a setting or an update; no official explanation was found.</Step>
      </Steps>
      <p>If the first four steps all check out, visibility isn’t the problem. Then it’s time to look at the price and the market.</p>
      <h2 id="usernameni-nikka-qoyish-foydasi-bormi">Putting your @username in your display name: does it help, and what are the risks?</h2>
      <p>According to channel observations, some owners have started writing their @username directly into their display name after offers dropped. This isn’t an official recommendation; it’s a workaround users came up with. Weigh the benefit against the risks before you try it.</p>
      <ul>
        <li><b>The upside:</b> anyone interested in your gift can message you in one tap.</li>
        <li><b>Scammers find you just as easily.</b> Fake links, “middleman” offers and “send the gift first” demands target exactly these open profiles.</li>
        <li><b>Your name shows in every chat.</b> Even an ordinary group message becomes a sign saying “this person owns an expensive gift.”</li>
        <li><b>It leaves a trail.</b> Even if you change your name later, old screenshots and forwards remain.</li>
      </ul>
      <p>If you still go this way, use a separate trading profile instead of your personal account. Turn on two-step verification — the guide on <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account from theft</Link> shows how. Once the sale is done, change your name back.</p>
      <h2 id="profilni-ochmasdan-xaridor-topishning-xavfsizroq">What are safer ways to find a buyer without exposing your profile?</h2>
      <p>The goal is simple: the buyer should be able to find the gift, and the exchange of money and gift should rely on a mechanism, not on your trust.</p>
      <ul>
        <li><b>Listing in the app.</b> If your app lets you list a collectible gift for sale at a set price, a buyer can purchase it without messaging you. The less private chatting, the less room for fraud. Commission, resale date and price limits are covered in the <Link href="/blog/telegram-gift-sotish">collectible gift selling guide</Link>.</li>
        <li><b>Fragment.</b> Selling terms on Fragment and how the owner appears there were not confirmed for this article. Read <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> yourself before deciding.</li>
        <li><b>Renting it out.</b> If you’re in no hurry to sell, there’s also a market for lending rare gifts for a set period. The difference between renting and buying is explained in <Link href="/blog/telegram-nft-sovga-ijarasi">NFT gift rental</Link>.</li>
        <li><b>Rethinking the price.</b> Copies in the same collection are valued differently by model, backdrop, symbol and number. Floor price versus actual sale price is explained in <Link href="/blog/telegram-gift-price">why the same gift has two different prices</Link>.</li>
      </ul>
      <p>Listing in the app requires the least communication. Renting keeps the gift with you, but income comes more slowly. Writing your username into your name is the fastest route, but also the riskiest.</p>
      <h2 id="notanish-odam-ozi-yozib-taklif">A stranger messages you with an offer: how do you check it?</h2>
      <p>Suspicious offers sent to open profiles tend to follow the same script. The buyer rushes you, names a price above the market and proposes their own method “to speed things up.”</p>
      <p>Check the offer in this order:</p>
      <ul>
        <li><b>The link.</b> Check its real destination, not its visible text. The steps are in <Link href="/blog/telegram-gift-havolasini-tekshirish">how to check a gift link</Link>.</li>
        <li><b>The proof.</b> A “payment sent” screenshot or receipt isn’t proof. Either can be faked in a minute.</li>
        <li><b>The money.</b> Before transferring the gift, see for yourself in the app that the money has arrived.</li>
        <li><b>The middleman.</b> If an unknown “escrow bot” or “guarantor” is suggested, stop the deal.</li>
        <li><b>The price.</b> If it’s noticeably higher than similar copies in the collection, treat it as a warning sign, not luck.</li>
        <li><b>The chat.</b> Keep the agreement in the chat and ask the buyer not to delete the messages. You’ll need them if something goes wrong.</li>
      </ul>
      <Notice label={"Important"}>Never give any buyer an SMS code, your password or your two-step verification password. A “buyer” asking for a code wants your account, not your gift.</Notice>
      <h2 id="xaridor-sizni-qanday-qidiradi-va">How do buyers look for you, and which “anonymity” are people talking about?</h2>
      <p>Much of the confusion comes from mixing up two different kinds of “anonymity.”</p>
      <p><b>The first is hiding the sender’s name.</b> According to the documentation, if the sender turns this on, their name isn’t shown to others when the recipient displays the gift on their profile. The recipient still sees who sent it. This is a documented mechanism, and it has nothing to do with the visibility of a collectible gift’s owner.</p>
      <p><b>The second is the visibility of a collectible gift’s owner.</b> This is what the channels are discussing, but this article could not confirm any such rule in the official documentation.</p>
      <p>A buyer who can’t reach the owner usually goes where prices are public: they open the collection and compare copies that are for sale. If your gift isn’t there, the buyer doesn’t know it exists. So a seller’s main job is to put the price where people can see it, not to open up the profile.</p>
      <p>There’s one more detail. Some buyers aren’t buying for themselves but to give the gift to someone else. According to the documentation, users can block receiving certain gift types in their privacy settings. To keep the deal from stalling for that reason, ask the buyer to confirm in advance that the recipient can accept this kind of gift.</p>
      <h2 id="giftni-sotmasdan-saqlab-qolish-yoki">When does it make sense to keep the gift or convert it to Stars?</h2>
      <p>The official documentation says a gift recipient can display it on their profile or convert it to Telegram Stars. It describes these as two alternatives, so treat conversion as an irreversible step.</p>
      <p>For a collectible (upgraded) gift, check in the app itself whether this option exists and how many Stars are offered. Before deciding, compare that number with the market price of similar copies.</p>
      <p>Keeping the gift makes sense when:</p>
      <ul>
        <li>you bought it for your collection and don’t need the money right now;</li>
        <li>the market is slow, but your copy has a rare backdrop or symbol;</li>
        <li>the only offer came from a suspicious source.</li>
      </ul>
      <p>One more thing to know upfront: StarsPaymee does not buy Stars or gifts from users, so you can’t turn a gift into money through the bot. Selling routes and strategy are in the <Link href="/blog/telegram-gift-sotish">selling guide</Link>.</p>
      <h2 id="kolleksiyani-toldirmoqchi-bolsangiz-somda-qayerdan">Want to grow your collection? Where to buy in so‘m</h2>
      <p>Sometimes a seller becomes a buyer: while waiting for one copy to sell, they want to add another to the collection. Here’s how StarsPaymee works in that case:</p>
      <ul>
        <li>Ready-made collectible (NFT) gifts are sold in the NFT Market inside <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, paid in so‘m. General information is on the <Link href="/gifts">gifts page</Link>.</li>
        <li>Bots can’t send limited gifts that Telegram has removed from sale.</li>
        <li>An order needs only your @username. No password, SMS code or account access is requested.</li>
        <li>Payment methods: Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or the bot balance. The price of each copy is shown in the bot.</li>
        <li>StarsPaymee is a service independent of Telegram.</li>
      </ul>
      <p>If you have questions, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Did Telegram really hide collectible gift owners from everyone?", answer: "The claim is circulating in gift channels, but Telegram’s public documentation didn’t confirm it when this article was prepared. The documentation only states that a gift displayed on a profile can be seen by all users." },
  { question: "My gift is on my profile, so why is nobody offering to buy it?", answer: "If the gift is visible, the cause is usually the price or weak demand for the collection. Compare your copy with others that share a similar model, backdrop and symbol." },
  { question: "If I don’t pin a gift to my profile, can others see it?", answer: "No. An unsaved gift remains in your account, but a stranger opening your profile won’t see it." },
  { question: "Will putting my @username in my name put my account at risk?", answer: "It doesn’t compromise the account by itself, but it makes you an easy target for scammers. If you do it, use a separate trading profile with two-step verification enabled." },
  { question: "A buyer says “send the gift first, I’ll pay after.” What should I do?", answer: "Refuse. Transfer the gift only after you’ve personally confirmed in the app that the money arrived, or use a selling mechanism that doesn’t require private chats." },
  { question: "If I need money, is converting the gift to Stars better than selling it?", answer: "First check in the app whether conversion is available for a collectible gift and how many Stars it offers, then compare that with market prices for similar copies. Treat conversion as a decision you can’t undo." },
  { question: "Will StarsPaymee buy my gift or my Stars?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. The bot only lets you purchase Stars, Premium and gifts in so‘m." },
  { question: "The buyer wants to give the gift to someone else. What should I watch for?", answer: "Users can block certain gift types in their privacy settings, which could stop the transfer. Before the deal, ask the buyer to check the recipient’s settings." },
  { question: "If I sell on Fragment, will the buyer see who I am?", answer: "How a gift owner appears on Fragment wasn’t confirmed for this article. Read the terms on fragment.com yourself before selling." },
  { question: "I’m getting no offers at all. Should I lower the price?", answer: "First make sure strangers can see the gift, then compare your price with the collection’s floor and real sales. If the price matches the market and offers still don’t come, renting it out or waiting are also options." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram gift xarid taklifi kelmayapti","nft gift sotib olish taklifi yo'q","telegram sovg'a egasi ko'rinmayapti","kolleksion gift xaridor topish","telegram gift sotish xavfsiz","nikka username yozish gift","не приходят предложения о покупке подарка telegram","телеграм скрыли владельцев подарков","как продать nft подарок telegram","офферы на гифт telegram","владелец подарка скрыт telegram"],
  howToSteps: [
    { name: "Profilingizni oching", text: "sovg‘alar bo‘limida kerakli gift turganini ko‘ring." },
    { name: "Mahkamlanganini tekshiring", text: "giftni bosib, u profilda ko‘rsatilayotganini aniqlang. Saqlanmagan gift begonalarga chiqmaydi." },
    { name: "Maxfiylik sozlamasini oching", text: "maxfiylik bo‘limida sovg‘alarga oid bandni toping. Band nomi ilova versiyasiga qarab farq qilishi mumkin." },
    { name: "Begona ko‘z bilan qarang", text: "kontaktlaringizda bo‘lmagan tanishingizdan profilingizni username orqali ochib ko‘rishni so‘rang. O‘zingiz olgan skrinshot bu vazifani bajarmaydi." },
    { name: "Ega qatorini qayd eting", text: "gift sahifasida ismingiz chiqmasa, buni yozib qo‘ying. Bu sozlama yoki yangilanish natijasi bo‘lishi mumkin, rasmiy tushuntirish topilmadi." },
  ],
  locales: {
    uz: {
      title: "Telegram gift xarid taklifi kelmayapti: sabab va xaridor topish yo‘llari",
      excerpt: "Takliflar ko‘pincha gift profilda ko‘rinmagani yoki narx bozordan balandligi sababli kelmaydi. Egalar majburan yashirilgani rasmiy tasdiqlanmagan. Tekshiruv jadvali va xavfsiz sotuv yo‘llari bor.",
      metaTitle: "Telegram gift xarid taklifi kelmayapti",
      metaDescription: "Takliflar ko‘pincha gift profilda ko‘rinmagani yoki narx bozordan balandligi sababli kelmaydi. Egalar majburan yashirilgani rasmiy tasdiqlanmagan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Нет предложений о покупке Telegram-подарка: причины и как найти покупателя",
      excerpt: "Чаще всего предложений нет, потому что подарок не виден в профиле или цена выше рыночной. Принудительное скрытие владельцев официально не подтверждено. Внутри — таблица проверки и безопасные способы продажи.",
      metaTitle: "Нет предложений о покупке Telegram-подарка",
      metaDescription: "Чаще всего предложений нет, потому что подарок не виден в профиле или цена выше рыночной. Принудительное скрытие владельцев официально не подтверждено.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "No Offers on Your Telegram Gift? Why Buyers Aren’t Writing and What to Do",
      excerpt: "Offers usually dry up because the gift isn’t visible on your profile or is priced above the market. Forced hiding of owners isn’t officially confirmed. Includes a check table and safer selling routes.",
      metaTitle: "No Offers on Your Telegram Gift? Why Buyers Aren’t Writing",
      metaDescription: "Offers usually dry up because the gift isn’t visible on your profile or is priced above the market. Forced hiding of owners isn’t officially confirmed.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
