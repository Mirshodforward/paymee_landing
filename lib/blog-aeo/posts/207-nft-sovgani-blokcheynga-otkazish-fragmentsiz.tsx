import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "nft-sovgani-blokcheynga-otkazish-fragmentsiz";

/**
 * NFT sovg‘ani blokcheynga o‘tkazish: TON hamyonga chiqarish mumkinmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kolleksion NFT sovg‘asi bor yoki uni so‘mda sotib olmoqchi bo‘lgan Telegram foydalanuvchisi sovg‘ani Fragment’siz TON blokcheyniga, ya’ni o‘z hamyoniga chiqarish mumkinmi, buning uchun nima kerak va qanday cheklovlar borligini «nft sovgani blokcheynga otkazish» so‘zi bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://telegram.org/blog/welcome-messages-buttons-TG-13
 *   https://core.telegram.org/bots/api-changelog#august-24-2026
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, kolleksion (NFT) sovg‘ani TON blokcheyniga, ya’ni o‘zingiz boshqaradigan hamyonga chiqarish mumkin. Bu imkoniyat yangi emas: Telegram uni 2025-yil 24-yanvardagi yangilanishda e’lon qilgan. Kolleksion sovg‘alarni TON orqali o‘tkazish va auksionga qo‘yish shundan beri bor. Oddiy sovg‘alar uchun bunday yo‘l tasdiqlanmagan. Aniq tugma va shartlarni ilovadagi sovg‘a oynasi ko‘rsatadi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kolleksion-sovgani-oz-ton-hamyoningizga", label: "Kolleksion sovg‘ani o‘z TON hamyoningizga chiqarish mumkinmi?" },
          { href: "#qaysi-sovga-blokcheynga-chiqadi-qaysi", label: "Qaysi sovg‘a blokcheynga chiqadi, qaysi biri chiqmaydi?" },
          { href: "#fragmentsiz-degan-xabarga-qanchalik-ishonish", label: "«Fragment’siz» degan xabarga qanchalik ishonish mumkin?" },
          { href: "#chiqarishdan-oldin-nima-tayyorlab-qoyish", label: "Chiqarishdan oldin nima tayyorlab qo‘yish kerak?" },
          { href: "#sovgani-hamyonga-chiqarish-qadamlari-qanday", label: "Sovg‘ani hamyonga chiqarish qadamlari qanday?" },
          { href: "#hamyonga-chiqqan-sovga-bilan-keyin", label: "Hamyonga chiqqan sovg‘a bilan keyin nima bo‘ladi?" },
          { href: "#hamyonga-chiqarish-kerakmi-yoki-telegramda", label: "Hamyonga chiqarish kerakmi yoki Telegram’da qoldirgan ma’qulmi?" },
          { href: "#somda-olingan-nft-sovgani-keyin", label: "So‘mda olingan NFT sovg‘ani keyin hamyonga chiqarsa bo‘ladimi?" },
          { href: "#blokcheynga-chiqarishda-qanday-xato-va", label: "Blokcheynga chiqarishda qanday xato va firibgarlik uchraydi?" },
        ]}
      />
      <h2 id="kolleksion-sovgani-oz-ton-hamyoningizga">Kolleksion sovg‘ani o‘z TON hamyoningizga chiqarish mumkinmi?</h2>
      <p>Mumkin. Telegram’ning rasmiy blogidagi <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">2025-yil yanvar e’lonida</a> shunday deyilgan: «gifts can now be transferred or auctioned via the TON blockchain». Ma’nosi: sovg‘alarni endi TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin.</p>
      <p>Upgrade qilingan sovg‘a faqat profildagi bezak emas. Uni blokcheyndagi aktiv sifatida o‘z hamyoningizga olib chiqish yo‘li bor.</p>
      <p>Amalda hammasi ilovadan boshlanadi. Telegram’ni yangilang va sovg‘a oynasini oching. Qaysi tugma borligini, qanday shart va to‘lov so‘ralayotganini shu oyna ko‘rsatadi, kanaldagi skrinshot emas.</p>
      <p>Masalan, do‘stingiz sizga upgrade qilingan sovg‘a yuborgan bo‘lsa, avval uni profilingizdagi sovg‘alar ro‘yxatidan toping. Uning kolleksion nusxa ekanini ham tekshiring: odatda bunday sovg‘ada o‘ziga xos belgilar va nusxa raqami ko‘rinadi. Hamyon haqida shundan keyingina o‘ylagan ma’qul.</p>
      <h2 id="qaysi-sovga-blokcheynga-chiqadi-qaysi">Qaysi sovg‘a blokcheynga chiqadi, qaysi biri chiqmaydi?</h2>
      <p>Rasmiy blog blokcheyn orqali o‘tkazishni faqat kolleksion sovg‘alar haqida aytadi. Boshqa turlar uchun quyidagi jadvalda ehtiyotkor baho berilgan.</p>
      <CompareTable
        headers={["Sovg‘a turi", "Blokcheynga chiqadimi", "Izoh"]}
        rows={[
          ["Oddiy (limitlanmagan) sovg‘a", "Tasdiqlanmagan", "Rasmiy blogda bunday imkoniyat haqida gap yo‘q"],
          ["Limited sovg‘a, upgrade qilinmagan", "Bevosita — tasdiqlanmagan", "Avval kolleksion holga keltirish talab qilinishi mumkin, shartni ilovada ko‘ring"],
          ["Kolleksion (upgrade qilingan) sovg‘a", "Ha", "2025-yil 24-yanvardan beri TON orqali o‘tkazish va auksion"],
          ["Bozordan olingan tayyor kolleksion sovg‘a", "Kolleksion sovg‘a kabi", "Akkauntga tushgach, sovg‘a oynasidagi amallarni tekshiring"],
        ]}
      />
      <p>Oddiy va kolleksion sovg‘a farqi hamda upgrade nima berishi haqida: <Link href="/blog/telegram-nft-gift-nima">Telegram NFT Gift nima?</Link></p>
      <p>Profilingizda limited sovg‘a turgan bo‘lsa-yu, blokcheyn tugmasi chiqmasa, bu nosozlik bo‘lmasligi mumkin. Ko‘pincha sabab — sovg‘a hali upgrade qilinmagan.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="fragmentsiz-degan-xabarga-qanchalik-ishonish">«Fragment’siz» degan xabarga qanchalik ishonish mumkin?</h2>
      <p>Mavzuga qiziqish bir Telegram kanalidagi postdan keyin kuchaydi. Unda «endi NFT’ni Fragment’siz blokcheynga o‘tkazish mumkin» deyilgan. Kanal posti rasmiy manba emas, shuning uchun da’voni Telegram’ning o‘z sahifalari bilan solishtirdik.</p>
      <ul>
        <li><b>Blokcheynga o‘tkazishning o‘zi</b> 2025-yil yanvaridan beri rasmiy blogda bor. Demak, bu yangi funksiya emas.</li>
        <li><b>Fragment’ning o‘rni.</b> Jarayonda Fragment qanday ishtirok etishi va bu o‘zgarganmi-yo‘qmi, rasmiy manbada aniq yozilmagan. Shu sabab «Fragment’siz» iborasini tasdiqlangan deb bo‘lmaydi.</li>
        <li><b>2026-yil 25-avgustdagi blog posti.</b> Undagi sovg‘alarga oid yangilik boshqa narsa haqida: Marketplace’dan sotib olingan sovg‘aga imzo va izoh qo‘shish (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">manba</a>).</li>
        <li><b>Bot API.</b> <a href={"https://core.telegram.org/bots/api-changelog#august-24-2026"} target="_blank" rel="noopener noreferrer">O‘zgarishlar ro‘yxatida</a> 2026-yil 26-oktabr holatiga eng so‘nggi yozuv 24-avgustdagi Bot API 10.3 edi.</li>
      </ul>
      <p>Yangi yangilanish chiqqan-chiqmaganini o‘zingiz tekshirish uchun <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a> sahifasini va ilova do‘konidagi o‘zgarishlar ro‘yxatini ko‘ring. Kanal postidagi boshqa va’dalarni rasmiy tasdiqsiz amalda sinab ko‘rmang.</p>
      <h2 id="chiqarishdan-oldin-nima-tayyorlab-qoyish">Chiqarishdan oldin nima tayyorlab qo‘yish kerak?</h2>
      <ul>
        <li><b>Telegram’ning so‘nggi versiyasi.</b> Eski ilovada sovg‘a oynasidagi yangi tugmalar chiqmasligi mumkin.</li>
        <li><b>O‘zingizga tegishli TON hamyon.</b> Tiklash so‘zlari (seed fraza) faqat sizda saqlansin. Birovning hamyoni yoki birja hisobidagi manzil emas, aynan siz boshqaradigan manzil bo‘lsin.</li>
        <li><b>Manzilni tekshirish odati.</b> Manzilni qo‘lda yozmang. Nusxalang va boshi hamda oxiridagi bir necha belgini hamyondagi bilan solishtiring.</li>
        <li><b>To‘lov va shartlar.</b> Komissiya, kutish muddati yoki qo‘shimcha talab bo‘lsa, ilova ularni tasdiqlashdan oldin ko‘rsatadi. Aniq summa rasmiy manbada tekshirilmagani uchun bu yerda keltirilmaydi.</li>
        <li><b>Tanga nomi.</b> Hamyon ilovasida TON tangasi boshqa nom bilan ko‘rinishi mumkin. Bu haqda <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram deb ataladi</Link> maqolasida yozilgan.</li>
        <li><b>Akkaunt himoyasi.</b> Sovg‘a qimmatli bo‘lsa, Telegram akkauntida ikki bosqichli parol yoqilganini tekshiring. Yo‘riqnoma: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni o‘g‘irlashdan himoya</Link>.</li>
      </ul>
      <p>Hamyonni hali ochmagan bo‘lsangiz, TON ekotizimi haqidagi umumiy ma’lumotni <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a> saytidan oling. Hamyon ilovasini faqat rasmiy ilova do‘konidan o‘rnating.</p>
      <h2 id="sovgani-hamyonga-chiqarish-qadamlari-qanday">Sovg‘ani hamyonga chiqarish qadamlari qanday?</h2>
      <p>Tugma nomlari ilova versiyasi va tiliga qarab farq qilishi mumkin. Quyidagi tartib umumiy yo‘l-yo‘riq.</p>
      <Steps>
        <Step title={"Profilni oching"}>sovg‘alar bo‘limidan chiqarmoqchi bo‘lgan kolleksion sovg‘ani tanlang.</Step>
        <Step title={"Amallar ro‘yxatini ko‘ring"}>sovg‘a oynasida blokcheynga o‘tkazish yoki shunga o‘xshash nomli tugmani toping.</Step>
        <Step title={"Hamyon manzilini kiriting"}>faqat o‘zingiz nazorat qiladigan TON manzilni nusxalab qo‘ying.</Step>
        <Step title={"Shartlarni o‘qing"}>ilova ko‘rsatgan to‘lov, ogohlantirish va tasdiq so‘rovlarini oxirigacha ko‘rib chiqing.</Step>
        <Step title={"Tasdiqlang va tekshiring"}>jarayon tugagach, sovg‘a hamyoningizdagi NFT’lar ro‘yxatida paydo bo‘lganini ko‘ring.</Step>
      </Steps>
      <p>Jarayonda uch xil muammo ko‘p uchraydi:</p>
      <ul>
        <li><b>Tugma umuman yo‘q.</b> Sovg‘a kolleksion emas yoki ilova eskirgan bo‘lishi mumkin.</li>
        <li><b>Manzil qabul qilinmayapti.</b> Nusxalashda ortiqcha bo‘shliq yoki belgi qo‘shilib ketmaganini tekshiring. Manzil TON hamyoniga tegishli ekaniga ham ishonch hosil qiling.</li>
        <li><b>Sovg‘a hamyonda darhol ko‘rinmayapti.</b> Shoshilib qayta urinmang. Avval ilovadagi sovg‘a holatini, keyin hamyonni yangilab ko‘ring. Birinchi so‘rov qaysi holatda ekanini bilmasdan ikkinchisini yubormang.</li>
      </ul>
      <h2 id="hamyonga-chiqqan-sovga-bilan-keyin">Hamyonga chiqqan sovg‘a bilan keyin nima bo‘ladi?</h2>
      <p>Rasmiy manbada ikki imkoniyat aniq aytilgan: sovg‘ani blokcheyn orqali o‘tkazish va auksionga qo‘yish. Ya’ni hamyondagi kolleksion sovg‘ani boshqa manzilga yuborish yoki sotuvga chiqarish yo‘li bor.</p>
      <p>Quyidagilar esa bu maqolada tasdiqlanmagan:</p>
      <ul>
        <li>hamyonga chiqqan sovg‘a Telegram profilingizda ko‘rinishda qoladimi;</li>
        <li>uni qayta Telegram akkauntiga qaytarish qanday tartibda bo‘ladi;</li>
        <li>qaytarishda to‘lov yoki kutish bormi.</li>
      </ul>
      <p>Bu savollarga javobni ilovadagi sovg‘a oynasi va ogohlantirish matnlaridan qidiring. Ularni o‘qimasdan tasdiqlamang.</p>
      <p>Blokcheyndagi o‘tkazmalarni odatda ortga qaytarib bo‘lmaydi. Noto‘g‘ri manzilga ketgan NFT’ni qaytarishga hech kim va’da bera olmaydi.</p>
      <p>Sovg‘ani sotishni rejalashtirsangiz, narx, xaridor va risklar haqida <Link href="/blog/telegram-gift-sotish">Telegram Gifts sotish</Link> qo‘llanmasini o‘qing. StarsPaymee Stars va sovg‘alarni foydalanuvchilardan sotib olmaydi, shuning uchun hamyondagi NFT’ni botga sotib bo‘lmaydi.</p>
      <h2 id="hamyonga-chiqarish-kerakmi-yoki-telegramda">Hamyonga chiqarish kerakmi yoki Telegram’da qoldirgan ma’qulmi?</h2>
      <p>Chiqarish majburiy emas. Ko‘p egalar uchun sovg‘a profilda turgani yetarli. Qaror sovg‘a bilan nima qilmoqchi ekaningizga bog‘liq.</p>
      <CompareTable
        headers={["Maqsadingiz", "Mantiqli yo‘l", "Nimaga e’tibor bering"]}
        rows={[
          ["Sovg‘ani profilda ko‘rsatish yoki Telegram ichida do‘stga berish", "Telegram’da qoldirish", "Hamyonga chiqarish bunga qanday ta’sir qilishi tasdiqlanmagan"],
          ["TON auksionida sotish", "Blokcheyn orqali harakat qilish", "Narx va komissiyani ilova hamda bozor sahifasida tekshiring"],
          ["Sovg‘ani o‘z hamyoningizda saqlash", "Hamyonga chiqarish", "Seed frazani yo‘qotsangiz, hamyonga kirish ham odatda yo‘qoladi"],
          ["Hali qaror qilmagansiz", "Shoshilmaslik", "Avval ilovadagi ogohlantirishlarni o‘qib chiqing"],
        ]}
      />
      <p>Misol: Dilnoza do‘stining tug‘ilgan kuniga kolleksion sovg‘a oldi. U sovg‘ani Telegram’da yuboradi va do‘sti uni profilida ko‘rsatadi — bu yerda hamyon umuman kerak emas. Boshqa holat: Jasur sovg‘asini TON auksioniga qo‘ymoqchi. Unga o‘z hamyoni, manzilni tekshirish odati va ilova ko‘rsatgan shartlarni o‘qib chiqish kerak bo‘ladi.</p>
      <p>Hamyonga chiqargan zahotingiz xavfsizlik ham ikkiga bo‘linadi. Telegram akkaunti uchun — ikki bosqichli parol, hamyon uchun — seed frazani hech kimga bermaslik va internetda saqlamaslik.</p>
      <h2 id="somda-olingan-nft-sovgani-keyin">So‘mda olingan NFT sovg‘ani keyin hamyonga chiqarsa bo‘ladimi?</h2>
      <p>Kolleksion sovg‘angiz hali yo‘q bo‘lsa, tayyor nusxani @StarsPaymee_bot ichidagi NFT Market’da so‘mda olish mumkin. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</p>
      <ul>
        <li><b>To‘lov:</b> Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</li>
        <li><b>Kerakli ma’lumot:</b> faqat @username. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</li>
        <li><b>Yetkazish:</b> odatda bir necha soniyada, avtomatik.</li>
      </ul>
      <p>Sovg‘a akkauntingizga tushgach, Telegram ilovasi ruxsat bergan amallarni o‘zingiz bajarasiz. Bunga kolleksion sovg‘alar uchun ochiq bo‘lgan blokcheyn orqali o‘tkazish ham kiradi. StarsPaymee bu bosqichda ishtirok etmaydi va hamyoningizga hech narsa yubormaydi.</p>
      <p>Ikki cheklovni bilib qo‘ying:</p>
      <ul>
        <li>Botlar Telegram sotuvdan olib tashlagan limited sovg‘alarni yubora olmaydi. Tayyor kolleksion nusxalar aynan NFT Market’da turadi.</li>
        <li>25-avgust e’lonidagi imzo va izoh qo‘shish Marketplace xaridlariga tegishli. Bot orqali olingan sovg‘ada bu imkoniyat borligi tasdiqlanmagan.</li>
      </ul>
      <p>Bozor qanday ishlashi haqida: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>. Barcha sovg‘a turlari: <Link href="/gifts">sovg‘alar sahifasi</Link>.</p>
      <h2 id="blokcheynga-chiqarishda-qanday-xato-va">Blokcheynga chiqarishda qanday xato va firibgarlik uchraydi?</h2>
      <p>Kolleksion sovg‘a pulga teng aktiv bo‘lgani uchun uning atrofida firibgarlar ham ko‘p. Eng ko‘p uchraydigan holatlar:</p>
      <ul>
        <li><b>«Fragment’siz o‘tkazib beramiz» xizmati.</b> Seed fraza, Telegram paroli yoki SMS kod so‘ragan bot yoki «yordamchi» — firibgar. Sovg‘ani chiqarish uchun bularning hech biri begonaga kerak emas.</li>
        <li><b>Soxta Fragment va hamyon saytlari.</b> Manzilni faqat <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> va <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a> orqali tekshiring, chatdagi havolani bosmang.</li>
        <li><b>Begona manzil.</b> Chatda «mana mening hamyonim» deb tashlangan manzilni ko‘r-ko‘rona nusxalamang. Manzilni xotiradan yozish ham xato.</li>
        <li><b>«Tekshirish uchun» yuborish.</b> Sovg‘a haqiqiyligini tekshirish bahonasida uni boshqa akkaunt yoki manzilga yuborishni so‘rashadi. Bunday yuborilgan sovg‘a odatda qaytmaydi.</li>
        <li><b>Soxta «qo‘llab-quvvatlash».</b> Telegram yoki hamyon xodimi nomidan yozib, sovg‘ani «muzlatishdan qutqarish» uchun uni ko‘chirishni so‘rashadi. Rasmiy xizmatlar bunday yozmaydi.</li>
        <li><b>Shoshiltirish.</b> «Taklif 10 daqiqada tugaydi» kabi bosim — o‘ylab ko‘rishga vaqt bermaslik usuli.</li>
      </ul>
      <Notice label={"Muhim"}>StarsPaymee hech qachon parol, SMS kod yoki seed fraza so‘ramaydi. Bot nomidan shunday so‘rov kelsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</Notice>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
          { href: "https://core.telegram.org/bots/api-changelog#august-24-2026", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Sovg‘ani hamyonga chiqarish uchun Fragment kerakmi?", answer: "Rasmiy blogda blokcheyn orqali o‘tkazish Telegram imkoniyati sifatida tasvirlangan, ammo Fragment’ning bu jarayondagi o‘rni aniq yozilmagan. Qaysi qadam talab qilinishini sovg‘a oynasining o‘zidan bilasiz." },
  { question: "Upgrade qilinmagan oddiy sovg‘ani TON hamyonga yuborsa bo‘ladimi?", answer: "Bunday imkoniyat tasdiqlanmagan: rasmiy e’lon faqat kolleksion sovg‘alar haqida. Oddiy sovg‘a profilda yoki Telegram ichida qoladi deb hisoblang." },
  { question: "Sovg‘a oynasida blokcheyn tugmasi yo‘q, nima qilay?", answer: "Telegram’ni so‘nggi versiyaga yangilang va sovg‘a kolleksion ekanini tekshiring. Upgrade qilinmagan limited sovg‘ada bu tugma chiqmasligi mumkin." },
  { question: "Manzilda bitta belgi xato bo‘lsa, sovg‘ani qaytarib olaman mi?", answer: "Bunga umid qilmang: blokcheyndagi o‘tkazmalarni odatda bekor qilib bo‘lmaydi. Shuning uchun manzilni nusxalang va tasdiqlashdan oldin boshi va oxirini solishtiring." },
  { question: "Hamyonga chiqargan sovg‘am profilimda qoladimi?", answer: "Bu savolga rasmiy manbalarda aniq javob topilmadi. Tasdiqlash oynasidagi ogohlantirish matnini o‘qib, keyin qaror qiling." },
  { question: "Botdan so‘mda olgan NFT sovg‘amni keyin hamyonga chiqara olamanmi?", answer: "Sovg‘a akkauntingizga tushgach, uni boshqa kolleksion sovg‘alar kabi o‘zingiz boshqarasiz. Blokcheyn amali ilova orqali bajariladi, bot bu bosqichga aralashmaydi." },
  { question: "Chiqarish uchun Stars yoki TON to‘lash kerakmi?", answer: "To‘lov turi va summasi rasmiy manbada tekshirilmadi. Agar to‘lov bo‘lsa, ilova uni tasdiqlashdan oldin ko‘rsatadi." },
  { question: "Hamyonga chiqqan NFT sovg‘ani StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Sotish usullari va risklari alohida qo‘llanmada yoritilgan." },
  { question: "Seed frazamni yo‘qotsam, hamyondagi sovg‘a nima bo‘ladi?", answer: "Odatda tiklash so‘zlarisiz hamyonga kirish imkoni yo‘qoladi, demak sovg‘aga ham. Frazani qog‘ozda, xavfsiz joyda saqlang va hech kimga ko‘rsatmang." },
  { question: "«Fragment’siz o‘tkazib beraman» degan odam seed fraza so‘rayapti — bersam bo‘ladimi?", answer: "Yo‘q, darhol suhbatni to‘xtating. Seed frazani bilgan odam hamyoningizdagi hamma narsani olib ketishi mumkin." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, коллекционный (NFT) подарок можно вывести в блокчейн TON, то есть на кошелёк, которым вы управляете сами. Функция не новая: Telegram объявил о ней в обновлении от 24 января 2025 года. С тех пор коллекционные подарки можно передавать и выставлять на аукцион через TON. Для обычных подарков такой путь не подтверждён. Точные кнопки и условия показывает окно подарка в приложении.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kolleksion-sovgani-oz-ton-hamyoningizga", label: "Можно ли вывести коллекционный подарок на свой TON-кошелёк?" },
          { href: "#qaysi-sovga-blokcheynga-chiqadi-qaysi", label: "Какие подарки выводятся в блокчейн, а какие нет?" },
          { href: "#fragmentsiz-degan-xabarga-qanchalik-ishonish", label: "Насколько можно верить сообщению «без Fragment»?" },
          { href: "#chiqarishdan-oldin-nima-tayyorlab-qoyish", label: "Что подготовить перед выводом?" },
          { href: "#sovgani-hamyonga-chiqarish-qadamlari-qanday", label: "Как вывести подарок на кошелёк: пошагово" },
          { href: "#hamyonga-chiqqan-sovga-bilan-keyin", label: "Что происходит с подарком после вывода на кошелёк?" },
          { href: "#hamyonga-chiqarish-kerakmi-yoki-telegramda", label: "Выводить на кошелёк или оставить в Telegram?" },
          { href: "#somda-olingan-nft-sovgani-keyin", label: "Можно ли вывести на кошелёк NFT-подарок, купленный в сумах?" },
          { href: "#blokcheynga-chiqarishda-qanday-xato-va", label: "Какие ошибки и мошенничество встречаются при выводе в блокчейн?" },
        ]}
      />
      <h2 id="kolleksion-sovgani-oz-ton-hamyoningizga">Можно ли вывести коллекционный подарок на свой TON-кошелёк?</h2>
      <p>Можно. В <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">январском объявлении 2025 года</a> в официальном блоге Telegram сказано: «gifts can now be transferred or auctioned via the TON blockchain». То есть подарки теперь можно передавать или выставлять на аукцион через блокчейн TON.</p>
      <p>Улучшенный подарок — это не только украшение профиля. Его можно вывести на собственный кошелёк как актив в блокчейне.</p>
      <p>На практике всё начинается в приложении. Обновите Telegram и откройте окно подарка. Какие кнопки доступны, какие условия и оплата требуются, показывает именно это окно, а не скриншот из канала.</p>
      <p>Например, друг прислал вам улучшенный подарок. Сначала найдите его в списке подарков в своём профиле. Убедитесь, что это коллекционный экземпляр: обычно у такого подарка видны уникальные атрибуты и номер экземпляра. И только после этого стоит думать о кошельке.</p>
      <h2 id="qaysi-sovga-blokcheynga-chiqadi-qaysi">Какие подарки выводятся в блокчейн, а какие нет?</h2>
      <p>Официальный блог говорит о передаче через блокчейн только применительно к коллекционным подаркам. Для остальных типов в таблице ниже дана осторожная оценка.</p>
      <CompareTable
        headers={["Тип подарка", "Выводится в блокчейн", "Комментарий"]}
        rows={[
          ["Обычный (нелимитированный) подарок", "Не подтверждено", "В официальном блоге о такой возможности не говорится"],
          ["Лимитированный подарок без улучшения", "Напрямую — не подтверждено", "Возможно, сначала его нужно сделать коллекционным; условие смотрите в приложении"],
          ["Коллекционный (улучшенный) подарок", "Да", "Передача через TON и аукцион — с 24 января 2025 года"],
          ["Готовый коллекционный подарок с маркета", "Как и любой коллекционный", "После зачисления на аккаунт проверьте действия в окне подарка"],
        ]}
      />
      <p>Чем обычный подарок отличается от коллекционного и что даёт улучшение — в статье <Link href="/blog/telegram-nft-gift-nima">Что такое Telegram NFT Gift</Link>.</p>
      <p>Если в профиле есть лимитированный подарок, а кнопки блокчейна нет, это не обязательно сбой. Чаще всего причина в том, что подарок ещё не улучшен.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="fragmentsiz-degan-xabarga-qanchalik-ishonish">Насколько можно верить сообщению «без Fragment»?</h2>
      <p>Интерес к теме вырос после поста в одном Telegram-канале. Там утверждалось, что «теперь NFT можно переводить в блокчейн без Fragment». Пост в канале — не официальный источник, поэтому мы сверили заявление с собственными страницами Telegram.</p>
      <ul>
        <li><b>Сам вывод в блокчейн</b> есть в официальном блоге с января 2025 года. Значит, это не новая функция.</li>
        <li><b>Роль Fragment.</b> Как Fragment участвует в процессе и изменилось ли это, в официальном источнике прямо не сказано. Поэтому формулировку «без Fragment» нельзя считать подтверждённой.</li>
        <li><b>Пост в блоге от 25 августа 2026 года.</b> Новость о подарках в нём про другое: к подаркам, купленным на Marketplace, можно добавить подпись и комментарий (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">источник</a>).</li>
        <li><b>Bot API.</b> В <a href={"https://core.telegram.org/bots/api-changelog#august-24-2026"} target="_blank" rel="noopener noreferrer">списке изменений</a> по состоянию на 26 октября 2026 года последней записью была Bot API 10.3 от 24 августа.</li>
      </ul>
      <p>Чтобы самостоятельно проверить, вышло ли новое обновление, загляните на <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a> и в список изменений в магазине приложений. Другие обещания из поста не проверяйте на практике без официального подтверждения.</p>
      <h2 id="chiqarishdan-oldin-nima-tayyorlab-qoyish">Что подготовить перед выводом?</h2>
      <ul>
        <li><b>Последняя версия Telegram.</b> В старом приложении новые кнопки в окне подарка могут не появиться.</li>
        <li><b>Собственный TON-кошелёк.</b> Фраза восстановления (seed-фраза) должна быть только у вас. Нужен адрес, которым управляете именно вы, а не чужой кошелёк или адрес на бирже.</li>
        <li><b>Привычка проверять адрес.</b> Не вводите адрес вручную. Копируйте его и сверяйте несколько первых и последних символов с адресом в кошельке.</li>
        <li><b>Оплата и условия.</b> Если есть комиссия, срок ожидания или дополнительные требования, приложение покажет их до подтверждения. Точная сумма в официальном источнике не проверена, поэтому здесь не приводится.</li>
        <li><b>Название монеты.</b> В приложении кошелька монета TON может отображаться под другим именем. Подробнее — в статье <Link href="/blog/toncoin-endi-gram">Toncoin теперь называется Gram</Link>.</li>
        <li><b>Защита аккаунта.</b> Если подарок ценный, проверьте, что в Telegram включён облачный пароль (двухэтапная аутентификация). Инструкция: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">как защитить аккаунт от угона</Link>.</li>
      </ul>
      <p>Если кошелька у вас ещё нет, общую информацию об экосистеме TON берите на <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>. Приложение кошелька устанавливайте только из официального магазина приложений.</p>
      <h2 id="sovgani-hamyonga-chiqarish-qadamlari-qanday">Как вывести подарок на кошелёк: пошагово</h2>
      <p>Названия кнопок могут отличаться в зависимости от версии и языка приложения. Ниже — общий порядок действий.</p>
      <Steps>
        <Step title={"Откройте профиль"}>в разделе подарков выберите коллекционный подарок, который хотите вывести.</Step>
        <Step title={"Посмотрите список действий"}>в окне подарка найдите кнопку перевода в блокчейн или похожую по смыслу.</Step>
        <Step title={"Укажите адрес кошелька"}>вставьте скопированный TON-адрес, который контролируете только вы.</Step>
        <Step title={"Прочитайте условия"}>до конца изучите оплату, предупреждения и запросы подтверждения, которые показывает приложение.</Step>
        <Step title={"Подтвердите и проверьте"}>после завершения убедитесь, что подарок появился в списке NFT в вашем кошельке.</Step>
      </Steps>
      <p>Чаще всего встречаются три проблемы:</p>
      <ul>
        <li><b>Кнопки нет совсем.</b> Подарок может быть не коллекционным, или приложение устарело.</li>
        <li><b>Адрес не принимается.</b> Проверьте, не добавились ли при копировании лишние пробелы или символы. Убедитесь, что адрес действительно принадлежит TON-кошельку.</li>
        <li><b>Подарок не сразу виден в кошельке.</b> Не спешите повторять попытку. Сначала проверьте статус подарка в приложении, затем обновите кошелёк. Не отправляйте второй запрос, пока не знаете, в каком состоянии первый.</li>
      </ul>
      <h2 id="hamyonga-chiqqan-sovga-bilan-keyin">Что происходит с подарком после вывода на кошелёк?</h2>
      <p>В официальном источнике прямо названы две возможности: передать подарок через блокчейн и выставить его на аукцион. То есть коллекционный подарок из кошелька можно отправить на другой адрес или выставить на продажу.</p>
      <p>А вот это в данной статье не подтверждено:</p>
      <ul>
        <li>остаётся ли выведенный подарок видимым в вашем профиле Telegram;</li>
        <li>как именно вернуть его обратно на аккаунт Telegram;</li>
        <li>есть ли при возврате плата или ожидание.</li>
      </ul>
      <p>Ответы на эти вопросы ищите в окне подарка и текстах предупреждений в приложении. Не подтверждайте действие, не прочитав их.</p>
      <p>Переводы в блокчейне обычно нельзя отменить. Вернуть NFT, ушедший на неверный адрес, не может пообещать никто.</p>
      <p>Если планируете продавать подарок, про цену, покупателей и риски читайте в руководстве <Link href="/blog/telegram-gift-sotish">Как продать Telegram Gifts</Link>. StarsPaymee не покупает Stars и подарки у пользователей, поэтому продать NFT из кошелька боту не получится.</p>
      <h2 id="hamyonga-chiqarish-kerakmi-yoki-telegramda">Выводить на кошелёк или оставить в Telegram?</h2>
      <p>Выводить не обязательно. Многим владельцам достаточно, что подарок стоит в профиле. Решение зависит от того, что вы собираетесь с ним делать.</p>
      <CompareTable
        headers={["Ваша цель", "Логичный путь", "На что обратить внимание"]}
        rows={[
          ["Показывать подарок в профиле или подарить другу внутри Telegram", "Оставить в Telegram", "Как на это повлияет вывод на кошелёк, не подтверждено"],
          ["Продать на аукционе TON", "Действовать через блокчейн", "Цену и комиссию проверьте в приложении и на странице маркета"],
          ["Хранить подарок на своём кошельке", "Вывести на кошелёк", "Потеряете seed-фразу — обычно потеряете и доступ к кошельку"],
          ["Вы ещё не решили", "Не спешить", "Сначала прочитайте предупреждения в приложении"],
        ]}
      />
      <p>Пример: Дилноза купила коллекционный подарок другу на день рождения. Она отправляет его в Telegram, а друг показывает его в профиле — кошелёк здесь вообще не нужен. Другая ситуация: Жасур хочет выставить свой подарок на аукцион TON. Ему понадобятся собственный кошелёк, привычка проверять адрес и внимательное чтение условий, которые показывает приложение.</p>
      <p>Как только подарок выведен на кошелёк, безопасность тоже делится на две части. Для аккаунта Telegram — облачный пароль, для кошелька — никому не сообщать seed-фразу и не хранить её в интернете.</p>
      <h2 id="somda-olingan-nft-sovgani-keyin">Можно ли вывести на кошелёк NFT-подарок, купленный в сумах?</h2>
      <p>Если коллекционного подарка у вас пока нет, готовый экземпляр можно купить в сумах в NFT Market внутри @StarsPaymee_bot. Международная карта, криптокошелёк или VPN не нужны.</p>
      <ul>
        <li><b>Оплата:</b> Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), перевод на карту UzCard/HUMO или баланс бота.</li>
        <li><b>Что нужно указать:</b> только @username. Пароль, SMS-код или вход в аккаунт не запрашиваются.</li>
        <li><b>Доставка:</b> обычно за несколько секунд, автоматически.</li>
      </ul>
      <p>Когда подарок поступит на аккаунт, вы сами выполняете действия, которые разрешает приложение Telegram. Сюда входит и передача через блокчейн, доступная для коллекционных подарков. StarsPaymee на этом этапе не участвует и ничего на ваш кошелёк не отправляет.</p>
      <p>Учтите два ограничения:</p>
      <ul>
        <li>Боты не могут отправлять лимитированные подарки, которые Telegram снял с продажи. Готовые коллекционные экземпляры как раз и продаются в NFT Market.</li>
        <li>Подпись и комментарий из объявления от 25 августа относятся к покупкам на Marketplace. Есть ли такая возможность у подарка, купленного через бота, не подтверждено.</li>
      </ul>
      <p>Как устроен маркет: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>. Все виды подарков — на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="blokcheynga-chiqarishda-qanday-xato-va">Какие ошибки и мошенничество встречаются при выводе в блокчейн?</h2>
      <p>Коллекционный подарок — актив с денежной ценностью, поэтому вокруг него много мошенников. Самые частые ситуации:</p>
      <ul>
        <li><b>Сервис «переведём без Fragment».</b> Бот или «помощник», который просит seed-фразу, пароль Telegram или SMS-код, — мошенник. Для вывода подарка постороннему ничего из этого не нужно.</li>
        <li><b>Поддельные сайты Fragment и кошельков.</b> Проверяйте адрес только через <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> и <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>, не переходите по ссылкам из чата.</li>
        <li><b>Чужой адрес.</b> Не копируйте вслепую адрес, брошенный в чат со словами «вот мой кошелёк». Набирать адрес по памяти — тоже ошибка.</li>
        <li><b>Отправка «на проверку».</b> Под предлогом проверки подлинности просят переслать подарок на другой аккаунт или адрес. Отправленный так подарок обычно не возвращается.</li>
        <li><b>Фальшивая «поддержка».</b> Пишут от имени сотрудника Telegram или кошелька и просят перенести подарок, чтобы «спасти от заморозки». Официальные службы так не пишут.</li>
        <li><b>Давление по времени.</b> Фразы вроде «предложение действует 10 минут» нужны, чтобы не дать вам подумать.</li>
      </ul>
      <Notice label={"Важно"}>StarsPaymee никогда не просит пароль, SMS-код или seed-фразу. Если такой запрос пришёл от имени бота, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
          { href: "https://core.telegram.org/bots/api-changelog#august-24-2026", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Нужен ли Fragment, чтобы вывести подарок на кошелёк?", answer: "В официальном блоге передача через блокчейн описана как функция Telegram, но роль Fragment в этом процессе прямо не указана. Какой шаг потребуется, покажет само окно подарка." },
  { question: "Можно ли отправить на TON-кошелёк обычный подарок без улучшения?", answer: "Такая возможность не подтверждена: официальное объявление касается только коллекционных подарков. Считайте, что обычный подарок остаётся в профиле или внутри Telegram." },
  { question: "В окне подарка нет кнопки блокчейна — что делать?", answer: "Обновите Telegram до последней версии и проверьте, что подарок коллекционный. У лимитированного подарка без улучшения этой кнопки может не быть." },
  { question: "Если в адресе ошибка в одном символе, я верну подарок?", answer: "Не рассчитывайте на это: переводы в блокчейне обычно отменить нельзя. Поэтому копируйте адрес и перед подтверждением сверяйте его начало и конец." },
  { question: "Останется ли выведенный на кошелёк подарок в моём профиле?", answer: "Чёткого ответа на этот вопрос в официальных источниках не нашлось. Прочитайте текст предупреждения в окне подтверждения и только потом решайте." },
  { question: "Смогу ли я потом вывести на кошелёк NFT-подарок, купленный у бота в сумах?", answer: "После зачисления на аккаунт вы управляете им так же, как любым другим коллекционным подарком. Операция с блокчейном выполняется через приложение, бот в этот этап не вмешивается." },
  { question: "Нужно ли платить Stars или TON за вывод?", answer: "Вид и сумма оплаты в официальном источнике не проверены. Если плата есть, приложение покажет её до подтверждения." },
  { question: "Можно ли продать выведенный NFT-подарок StarsPaymee?", answer: "Нет, StarsPaymee не покупает у пользователей ни Stars, ни подарки. Способы продажи и риски разобраны в отдельном руководстве." },
  { question: "Что будет с подарком на кошельке, если я потеряю seed-фразу?", answer: "Как правило, без фразы восстановления пропадает доступ к кошельку, а значит, и к подарку. Храните фразу на бумаге в надёжном месте и никому её не показывайте." },
  { question: "Человек обещает перевести подарок «без Fragment» и просит seed-фразу — можно дать?", answer: "Нет, сразу прекращайте разговор. Тот, кто знает вашу seed-фразу, может вывести с кошелька всё, что там есть." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can move a collectible (NFT) gift to the TON blockchain, into a wallet you control yourself. This isn’t new: Telegram announced it in its January 24, 2025 update, and collectible gifts have been transferable and auctionable via TON ever since. No such option is confirmed for regular gifts. The gift screen in the app shows the exact button and conditions.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kolleksion-sovgani-oz-ton-hamyoningizga", label: "Can you move a collectible gift to your own TON wallet?" },
          { href: "#qaysi-sovga-blokcheynga-chiqadi-qaysi", label: "Which gifts can go on-chain and which can’t?" },
          { href: "#fragmentsiz-degan-xabarga-qanchalik-ishonish", label: "How much should you trust the “without Fragment” news?" },
          { href: "#chiqarishdan-oldin-nima-tayyorlab-qoyish", label: "What should you prepare before moving a gift?" },
          { href: "#sovgani-hamyonga-chiqarish-qadamlari-qanday", label: "What are the steps to move a gift to your wallet?" },
          { href: "#hamyonga-chiqqan-sovga-bilan-keyin", label: "What happens to the gift once it’s in your wallet?" },
          { href: "#hamyonga-chiqarish-kerakmi-yoki-telegramda", label: "Should you move it to a wallet or keep it in Telegram?" },
          { href: "#somda-olingan-nft-sovgani-keyin", label: "Can an NFT gift bought in UZS be moved to a wallet later?" },
          { href: "#blokcheynga-chiqarishda-qanday-xato-va", label: "What mistakes and scams come with moving gifts on-chain?" },
        ]}
      />
      <h2 id="kolleksion-sovgani-oz-ton-hamyoningizga">Can you move a collectible gift to your own TON wallet?</h2>
      <p>Yes. Telegram’s official blog post from <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">January 2025</a> says it directly: “gifts can now be transferred or auctioned via the TON blockchain.”</p>
      <p>An upgraded gift is more than a profile decoration. It can be taken out to your own wallet as an on-chain asset.</p>
      <p>In practice, everything starts in the app. Update Telegram and open the gift screen. That screen, not a screenshot from some channel, tells you which button is available and what conditions or fees apply.</p>
      <p>Say a friend sent you an upgraded gift. First, find it in the gifts list on your profile. Then check that it really is a collectible: these gifts usually show distinctive attributes and a copy number. Only after that does it make sense to think about a wallet.</p>
      <h2 id="qaysi-sovga-blokcheynga-chiqadi-qaysi">Which gifts can go on-chain and which can’t?</h2>
      <p>The official blog mentions blockchain transfers only for collectible gifts. The table below gives a cautious assessment for the other types.</p>
      <CompareTable
        headers={["Gift type", "Can it go on-chain?", "Notes"]}
        rows={[
          ["Regular (unlimited) gift", "Not confirmed", "The official blog says nothing about this option"],
          ["Limited gift, not upgraded", "Directly — not confirmed", "It may need to be turned into a collectible first; check the conditions in the app"],
          ["Collectible (upgraded) gift", "Yes", "Transfer and auction via TON since January 24, 2025"],
          ["Ready-made collectible bought on a market", "Same as any collectible", "Once it lands in your account, check the actions on the gift screen"],
        ]}
      />
      <p>For the difference between regular and collectible gifts and what an upgrade gives you, see <Link href="/blog/telegram-nft-gift-nima">What is a Telegram NFT Gift?</Link></p>
      <p>If a limited gift sits on your profile but there’s no blockchain button, it may not be a bug. Often the reason is simply that the gift hasn’t been upgraded yet.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="fragmentsiz-degan-xabarga-qanchalik-ishonish">How much should you trust the “without Fragment” news?</h2>
      <p>Interest in the topic jumped after a post in a Telegram channel claiming that “you can now move NFTs to the blockchain without Fragment.” A channel post isn’t an official source, so we compared the claim against Telegram’s own pages.</p>
      <ul>
        <li><b>The on-chain transfer itself</b> has been on the official blog since January 2025. So it isn’t a new feature.</li>
        <li><b>Fragment’s role.</b> Official sources don’t clearly describe how Fragment is involved in the process or whether that has changed. So the “without Fragment” wording can’t be treated as confirmed.</li>
        <li><b>The August 25, 2026 blog post.</b> Its only gift-related news is something else: adding a signature and a comment to gifts bought on the Marketplace (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">source</a>).</li>
        <li><b>Bot API.</b> As of October 26, 2026, the latest entry in the <a href={"https://core.telegram.org/bots/api-changelog#august-24-2026"} target="_blank" rel="noopener noreferrer">changelog</a> was Bot API 10.3 from August 24.</li>
      </ul>
      <p>To check for yourself whether a new update has come out, look at <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a> and the release notes in your app store. Don’t try out other promises from that channel post without official confirmation.</p>
      <h2 id="chiqarishdan-oldin-nima-tayyorlab-qoyish">What should you prepare before moving a gift?</h2>
      <ul>
        <li><b>The latest version of Telegram.</b> An older app may not show the newer buttons on the gift screen.</li>
        <li><b>A TON wallet that’s yours.</b> The recovery words (seed phrase) should be stored only by you. Use an address you control, not someone else’s wallet or an exchange account address.</li>
        <li><b>A habit of checking addresses.</b> Don’t type the address by hand. Copy it and compare the first and last few characters with what your wallet shows.</li>
        <li><b>Fees and conditions.</b> If there’s a fee, waiting period or extra requirement, the app shows it before you confirm. The exact amount wasn’t verified in official sources, so it isn’t listed here.</li>
        <li><b>The coin’s name.</b> In your wallet app, the TON coin may appear under a different name. More on that in <Link href="/blog/toncoin-endi-gram">Toncoin is now called Gram</Link>.</li>
        <li><b>Account security.</b> If the gift is valuable, make sure two-step verification is turned on for your Telegram account. Guide: <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account from theft</Link>.</li>
      </ul>
      <p>If you don’t have a wallet yet, get general information about the TON ecosystem from <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>. Install wallet apps only from official app stores.</p>
      <h2 id="sovgani-hamyonga-chiqarish-qadamlari-qanday">What are the steps to move a gift to your wallet?</h2>
      <p>Button names can vary with the app version and language. The order below is a general guide.</p>
      <Steps>
        <Step title={"Open your profile"}>in the gifts section, pick the collectible you want to move.</Step>
        <Step title={"Check the available actions"}>on the gift screen, find the button for moving it to the blockchain or something with a similar name.</Step>
        <Step title={"Enter your wallet address"}>paste a TON address that only you control.</Step>
        <Step title={"Read the conditions"}>go through every fee, warning and confirmation prompt the app shows.</Step>
        <Step title={"Confirm and verify"}>once it’s done, check that the gift appears in your wallet’s NFT list.</Step>
      </Steps>
      <p>Three problems come up most often:</p>
      <ul>
        <li><b>There’s no button at all.</b> The gift may not be a collectible, or your app may be outdated.</li>
        <li><b>The address isn’t accepted.</b> Make sure no extra spaces or characters slipped in when copying. Also confirm the address really belongs to a TON wallet.</li>
        <li><b>The gift doesn’t show up in the wallet right away.</b> Don’t rush to retry. First check the gift’s status in the app, then refresh the wallet. Don’t send a second request until you know what happened to the first one.</li>
      </ul>
      <h2 id="hamyonga-chiqqan-sovga-bilan-keyin">What happens to the gift once it’s in your wallet?</h2>
      <p>The official source clearly names two options: transferring the gift via the blockchain and putting it up for auction. In other words, you can send a collectible from your wallet to another address or list it for sale.</p>
      <p>The following are not confirmed in this article:</p>
      <ul>
        <li>whether a gift moved to a wallet stays visible on your Telegram profile;</li>
        <li>how you bring it back to a Telegram account;</li>
        <li>whether returning it involves a fee or a wait.</li>
      </ul>
      <p>Look for the answers in the gift screen and the warning texts in the app. Don’t confirm anything without reading them.</p>
      <p>Blockchain transfers usually can’t be reversed. Nobody can promise to recover an NFT sent to the wrong address.</p>
      <p>If you plan to sell the gift, read the <Link href="/blog/telegram-gift-sotish">Telegram Gifts selling guide</Link> on pricing, buyers and risks. StarsPaymee does not buy Stars or gifts from users, so you can’t sell an NFT from your wallet to the bot.</p>
      <h2 id="hamyonga-chiqarish-kerakmi-yoki-telegramda">Should you move it to a wallet or keep it in Telegram?</h2>
      <p>Moving it isn’t required. For many owners, having the gift on their profile is enough. The decision depends on what you want to do with it.</p>
      <CompareTable
        headers={["Your goal", "Sensible path", "What to watch for"]}
        rows={[
          ["Display the gift on your profile or give it to a friend inside Telegram", "Keep it in Telegram", "How moving to a wallet affects this is not confirmed"],
          ["Sell it at a TON auction", "Act via the blockchain", "Check price and fees in the app and on the marketplace page"],
          ["Hold the gift in your own wallet", "Move it to the wallet", "Lose the seed phrase and you usually lose access to the wallet too"],
          ["Not decided yet", "Don’t rush", "Read the in-app warnings first"],
        ]}
      />
      <p>Example: Dilnoza bought a collectible gift for a friend’s birthday. She sends it in Telegram and her friend shows it off on their profile — no wallet needed at all. A different case: Jasur wants to put his gift up at a TON auction. He needs his own wallet, a habit of checking addresses, and to read every condition the app shows.</p>
      <p>The moment you move a gift to a wallet, security splits in two. For your Telegram account, use two-step verification. For the wallet, never share your seed phrase and never store it online.</p>
      <h2 id="somda-olingan-nft-sovgani-keyin">Can an NFT gift bought in UZS be moved to a wallet later?</h2>
      <p>If you don’t own a collectible gift yet, you can buy a ready-made one in UZS in the NFT Market inside @StarsPaymee_bot. No international card, crypto wallet or VPN needed.</p>
      <ul>
        <li><b>Payment:</b> Click, Payme, Uzum, Paynet (in the app or in cash at a terminal), a transfer to a UzCard/HUMO card, or the bot balance.</li>
        <li><b>What you provide:</b> only your @username. No password, SMS code or account access is ever requested.</li>
        <li><b>Delivery:</b> usually within a few seconds, automatically.</li>
      </ul>
      <p>Once the gift is in your account, you carry out whatever actions the Telegram app allows yourself. That includes the blockchain transfer available for collectible gifts. StarsPaymee takes no part in this step and sends nothing to your wallet.</p>
      <p>Two limits worth knowing:</p>
      <ul>
        <li>Bots can’t send limited gifts that Telegram has taken off sale. Ready-made collectible copies are exactly what the NFT Market offers.</li>
        <li>The signature and comment feature from the August 25 announcement applies to Marketplace purchases. It isn’t confirmed for gifts bought through the bot.</li>
      </ul>
      <p>How the market works: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>. All gift types: <Link href="/gifts">gifts page</Link>.</p>
      <h2 id="blokcheynga-chiqarishda-qanday-xato-va">What mistakes and scams come with moving gifts on-chain?</h2>
      <p>A collectible gift is an asset worth money, so scammers gather around it. The most common cases:</p>
      <ul>
        <li><b>“We’ll move it for you without Fragment” services.</b> Any bot or “helper” asking for your seed phrase, Telegram password or SMS code is a scammer. Nobody else needs any of these to move a gift.</li>
        <li><b>Fake Fragment and wallet sites.</b> Check addresses only via <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> and <a href={"https://ton.org"} target="_blank" rel="noopener noreferrer">ton.org</a>; don’t click links from chats.</li>
        <li><b>Someone else’s address.</b> Don’t blindly copy an address dropped in a chat as “here’s my wallet.” Typing an address from memory is a mistake too.</li>
        <li><b>Sending it “for verification.”</b> Scammers ask you to send the gift to another account or address to “check it’s genuine.” A gift sent this way usually doesn’t come back.</li>
        <li><b>Fake “support.”</b> Someone writes as Telegram or wallet staff and asks you to move the gift to “save it from being frozen.” Official services don’t message like that.</li>
        <li><b>Pressure to hurry.</b> “The offer ends in 10 minutes” is a way to stop you thinking it through.</li>
      </ul>
      <Notice label={"Important"}>StarsPaymee never asks for a password, SMS code or seed phrase. If you get such a request in the bot’s name, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Notice>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
          { href: "https://core.telegram.org/bots/api-changelog#august-24-2026", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Do I need Fragment to move a gift to my wallet?", answer: "The official blog describes on-chain transfers as a Telegram feature, but it doesn’t spell out Fragment’s role in the process. The gift screen itself shows which steps are required." },
  { question: "Can I send a regular, non-upgraded gift to a TON wallet?", answer: "That’s not confirmed: the official announcement only covers collectible gifts. Assume a regular gift stays on your profile or inside Telegram." },
  { question: "There’s no blockchain button on the gift screen. What should I do?", answer: "Update Telegram to the latest version and check that the gift is a collectible. A limited gift that hasn’t been upgraded may not show this button." },
  { question: "If one character in the address is wrong, can I get the gift back?", answer: "Don’t count on it: blockchain transfers usually can’t be undone. That’s why you should paste the address and compare its start and end before confirming." },
  { question: "Will a gift moved to my wallet stay on my profile?", answer: "Official sources don’t give a clear answer to this. Read the warning on the confirmation screen before you decide." },
  { question: "Can I move an NFT gift I bought from the bot in UZS to my wallet later?", answer: "Once the gift reaches your account, you manage it like any other collectible. The blockchain action is done in the app, and the bot isn’t involved in that step." },
  { question: "Do I have to pay Stars or TON to move a gift?", answer: "The type and amount of any fee weren’t verified in official sources. If there is a fee, the app shows it before you confirm." },
  { question: "Can I sell an NFT gift from my wallet to StarsPaymee?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. Ways to sell and the risks involved are covered in a separate guide." },
  { question: "What happens to the gift in my wallet if I lose my seed phrase?", answer: "Without the recovery words you usually lose access to the wallet, and with it the gift. Keep the phrase on paper in a safe place and never show it to anyone." },
  { question: "Someone offering to move my gift “without Fragment” wants my seed phrase. Should I give it?", answer: "No, end the conversation right away. Anyone who knows your seed phrase can take everything in your wallet." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["nft sovgani blokcheynga otkazish","telegram nft sovga ton hamyonga","kolleksion sovgani hamyonga chiqarish","telegram gift fragmentsiz otkazish","telegram sovga blokcheyn","nft gift ton wallet otkazish","перевести nft подарок в блокчейн","вывести подарок telegram в ton кошелек","перевод nft подарка без fragment","telegram подарки блокчейн ton","как вывести nft gift на кошелек"],
  howToSteps: [
    { name: "Profilni oching", text: "sovg‘alar bo‘limidan chiqarmoqchi bo‘lgan kolleksion sovg‘ani tanlang." },
    { name: "Amallar ro‘yxatini ko‘ring", text: "sovg‘a oynasida blokcheynga o‘tkazish yoki shunga o‘xshash nomli tugmani toping." },
    { name: "Hamyon manzilini kiriting", text: "faqat o‘zingiz nazorat qiladigan TON manzilni nusxalab qo‘ying." },
    { name: "Shartlarni o‘qing", text: "ilova ko‘rsatgan to‘lov, ogohlantirish va tasdiq so‘rovlarini oxirigacha ko‘rib chiqing." },
    { name: "Tasdiqlang va tekshiring", text: "jarayon tugagach, sovg‘a hamyoningizdagi NFT’lar ro‘yxatida paydo bo‘lganini ko‘ring." },
  ],
  locales: {
    uz: {
      title: "NFT sovg‘ani blokcheynga o‘tkazish: TON hamyonga chiqarish mumkinmi?",
      excerpt: "Ha, upgrade qilingan kolleksion sovg‘ani 2025-yil yanvaridan beri TON hamyonga chiqarish mumkin. Maqolada tayyorgarlik, qadamlar, cheklovlar va «Fragment’siz» da’vosi tekshirilgan.",
      metaTitle: "NFT sovg‘ani blokcheynga o‘tkazish",
      metaDescription: "Ha, upgrade qilingan kolleksion sovg‘ani 2025-yil yanvaridan beri TON hamyonga chiqarish mumkin.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "NFT-подарок Telegram в блокчейн: можно ли вывести его на TON-кошелёк?",
      excerpt: "Да, улучшенный коллекционный подарок можно вывести на TON-кошелёк с января 2025 года. В статье — подготовка, шаги, ограничения и проверка заявления «без Fragment».",
      metaTitle: "NFT-подарок Telegram в блокчейн",
      metaDescription: "Да, улучшенный коллекционный подарок можно вывести на TON-кошелёк с января 2025 года. В статье — подготовка, шаги, ограничения и проверка заявления «без…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can You Move a Telegram NFT Gift to the Blockchain and a TON Wallet?",
      excerpt: "Yes: since January 2025, upgraded collectible gifts can be moved to a TON wallet. This guide covers preparation, steps and limits, and checks the “without Fragment” claim.",
      metaTitle: "Can You Move a Telegram NFT Gift to the Blockchain",
      metaDescription: "Yes: since January 2025, upgraded collectible gifts can be moved to a TON wallet. This guide covers preparation, steps and limits, and checks the “without…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
