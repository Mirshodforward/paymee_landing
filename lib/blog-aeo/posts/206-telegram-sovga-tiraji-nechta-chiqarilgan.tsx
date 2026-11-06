import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-sovga-tiraji-nechta-chiqarilgan";

/**
 * Telegram sovg‘a tiraji: «X/Y» nimani bildiradi va qayerda tekshiriladi
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kolleksion yoki limited sovg'a olmoqchi bo'lgan Telegram foydalanuvchisi sovg'a kartasidagi «X/Y» yozuvini ko'rib, «telegram sovga tiraji» deb qidiradi. U sovg'adan nechta chiqarilgani, qanchasi qolgani, nusxa raqami narx va noyoblikka qanday ta'sir qilishini va bu ma'lumotni qayerdan tekshirishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://telegram.org/blog/gift-marketplace-and-more
 *   https://telegram.org/blog/profile-music-gift-themes
 *   https://core.telegram.org/api/gifts
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://telegram.org/blog/collectible-gifts-and-more
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Sovg‘a kartasidagi «X/Y» yozuvi odatda shunday o‘qiladi: chapdagi son — aynan shu nusxaning tartib raqami, o‘ngdagisi — kolleksiyadagi nusxalar soni, ya’ni tiraj. Telegram bu hisob qoidasini rasmiy tushuntirmagan, shuning uchun aniq ma’nosini kartaning o‘zidan tekshiring. Narxga raqamdan tashqari nusxa atributlari va xaridor talabi ham ta’sir qiladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#sovga-kartasidagi-x-y-yozuvi", label: "Sovg‘a kartasidagi «X/Y» yozuvi nimani bildiradi?" },
          { href: "#oddiy-limited-va-kolleksion-sovga", label: "Oddiy, limited va kolleksion sovg‘a: tiraj qaysi birida ahamiyatli?" },
          { href: "#nusxa-raqami-va-tiraj-narxga", label: "Nusxa raqami va tiraj narxga qanday ta’sir qiladi?" },
          { href: "#tiraj-raqam-va-narxni-qayerda", label: "Tiraj, raqam va narxni qayerda tekshirish mumkin?" },
          { href: "#kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa", label: "Kanallardagi umumiy sovg‘alar statistikasiga ishonsa bo‘ladimi?" },
          { href: "#kichik-tirajli-kolleksion-sovgani-qayerdan", label: "Kichik tirajli kolleksion sovg‘ani qayerdan olish mumkin?" },
          { href: "#noyob-raqamli-sovgani-olishdan-oldin", label: "Noyob raqamli sovg‘ani olishdan oldin nimalarni tekshirish kerak?" },
          { href: "#tirajli-sovgani-keyin-sotish-raqam", label: "Tirajli sovg‘ani keyin sotish: raqam xaridorga nima ko‘rsatadi?" },
        ]}
      />
      <h2 id="sovga-kartasidagi-x-y-yozuvi">Sovg‘a kartasidagi «X/Y» yozuvi nimani bildiradi?</h2>
      <p>Kolleksion yoki limited sovg‘ani ochsangiz, kartada kasrga o‘xshash yozuvni ko‘rasiz. Uni ikki qismga ajratib o‘qish qulay:</p>
      <ul>
        <li><b>Y — tiraj.</b> Bu son kolleksiyaga tegishli va shu turdagi sovg‘adan qancha nusxa borligini ko‘rsatadi.</li>
        <li><b>X — nusxa raqami.</b> Bu son aynan siz ko‘rib turgan sovg‘aga tegishli va uning kolleksiya ichidagi o‘rnini bildiradi.</li>
      </ul>
      <p>Misol. Ikki do‘st bitta kolleksiyani ko‘rib o‘tiribdi. Birining ekranida raqami kichik nusxa, ikkinchisinikida raqami ancha katta nusxa. Kolleksiya bitta bo‘lgani uchun tiraj ikkalasida bir xil. Farq faqat nusxada: har birining o‘z raqami, o‘z ko‘rinishi va o‘z egasi bor.</p>
      <p>Bir cheklovni yodda tuting. Telegram blogida bu raqamlarni hisoblash qoidasi tushuntirilmagan. Masalan, Y dastlab chiqarilgan sonmi yoki hozir mavjud nusxalar sonimi — bu maqolada tasdiqlanmagan. Shuning uchun taxminga emas, ilovadagi kartaga va undagi izohlarga tayaning.</p>
      <h3>Kartada raqam ko‘rinmasa-chi?</h3>
      <p>Har bir sovg‘ada ham kasr yozuvi bo‘lavermaydi. Oddiy sovg‘ada u bo‘lmasligi mumkin, chunki bunday sovg‘a alohida nusxa sifatida sotilmaydi. Kolleksion deb aytilgan sovg‘ada raqam ko‘rinmasa, uni sotuvchining so‘ziga ishonib olmang: avval sovg‘aning turi va egasini ilovada aniqlang.</p>
      <h2 id="oddiy-limited-va-kolleksion-sovga">Oddiy, limited va kolleksion sovg‘a: tiraj qaysi birida ahamiyatli?</h2>
      <p>Tiraj haqida o‘ylashdan oldin sovg‘a turini aniqlab oling. Uch tur ishlatilishi bilan bir-biridan farq qiladi.</p>
      <CompareTable
        headers={["Tur", "Kartada tiraj", "Boshqa odamga o‘tkazish", "Bozorda sotish", "Qayerdan olinadi"]}
        rows={[
          ["Oddiy sovg‘a", "Ilovada tekshiring", "Ilovada tekshiring", "Bozor kolleksion sovg‘alar uchun ishlaydi", "Telegram ichida Stars bilan yoki botda so‘mda"],
          ["Limited sovg‘a", "Kartada son bo‘lsa, shu — tiraj", "Ilovada tekshiring", "Ilovada tekshiring", "Telegram sotayotgan paytda. Sotuvdan olinganini botlar yubora olmaydi"],
          ["Kolleksion sovg‘a", "Nusxa raqami va atributlar bilan", "Mumkin", "Mumkin, ichki bozorda Stars evaziga", "Ichki bozor, sovg‘a takliflari, @StarsPaymee_bot’dagi NFT Market"],
        ]}
      />
      <p>Kolleksion sovg‘alarning maxsus atributlari bor. Ularni boshqa foydalanuvchiga o‘tkazish yoki NFT marketpleyslarida auksionga qo‘yish mumkin — bu <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> yozilgan. Tirajning ma’nosi aynan shu turda bilinadi: nusxalar egadan egaga o‘tadi, raqam esa har bir nusxani boshqalaridan ajratib turadi.</p>
      <p>Limited sovg‘ada vaziyat boshqacha. Telegram uni sotuvdan olib tashlagach, botlar bunday sovg‘ani yubora olmaydi. Kartada «tugadi» degan holatni ko‘rsangiz, yangi nusxa kutmang. Tayyor kolleksion nusxani boshqa egadan qidirish mantiqiyroq. Turlar orasidagi farq batafsil: <Link href="/blog/telegram-nft-gift-nima">Telegram NFT Gift nima</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="nusxa-raqami-va-tiraj-narxga">Nusxa raqami va tiraj narxga qanday ta’sir qiladi?</h2>
      <p>Narx faqat tirajga bog‘liq emas. Bitta kolleksiya ichida ham nusxalar atributlari bilan farq qiladi, masalan, modeli yoki foni bilan. Ularning ilovadagi aniq nomlarini kartadan ko‘ring. Shu sababli bir xil nomdagi ikki sovg‘a ikki xil narxda turishi mumkin. Bu mavzu alohida maqolada: <Link href="/blog/telegram-gift-price">Nega bir xil Telegram Gift ikki xil narxda turadi?</Link></p>
      <p>Mo‘ljal olish uchun Telegram atributlar oynasiga «Value» maydonini qo‘shgan. U sovg‘aning taxminiy qayta sotish narxini ko‘rsatadi (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Bu narx sotuv va’dasi emas, taxmin. Haqiqiy narxni xaridor va sotuvchi o‘zaro belgilaydi.</p>
      <p>Kichik raqam haqida. Xaridorlar orasida birinchi nusxalar, kichik yoki chiroyli takrorlanuvchi raqamlar qimmatroq turadi, degan qarash uchraydi. Bunday qoida rasmiy manbalarda tasdiqlanmagan. Bu xaridorlarning didiga bog‘liq bo‘lishi mumkin, lekin narxni kafolatli oshiradigan omil emas.</p>
      <p>Shartli misol:</p>
      <ul>
        <li><b>A nusxa:</b> raqami kichik, atributlari kolleksiyada ko‘p uchraydi. «Value» o‘rtacha, sotuvchi esa raqam uchun ancha yuqori narx so‘rayapti.</li>
        <li><b>B nusxa:</b> raqami katta, lekin modeli kam uchraydi. «Value» A’nikidan yuqori, so‘ralgan narx esa unga yaqin.</li>
      </ul>
      <p>Bu holatda A uchun to‘lanadigan ortiqcha summa faqat raqamga ketadi. Raqamning o‘zi sizga qadrli bo‘lsa — bu shaxsiy tanlov. Qayta sotishni rejalashtirsangiz, «Value» va bozordagi o‘xshash nusxalar narxi aniqroq mo‘ljal beradi.</p>
      <h3>Tiraj kichikligi har doim ustunlikmi?</h3>
      <p>Kichik tiraj nusxa kamligini bildiradi, lekin xaridor ko‘pligini bildirmaydi. Kolleksiya kam odamga qiziq bo‘lsa, kichik tirajli nusxa ham uzoq vaqt sotilmay turishi mumkin. Shuning uchun bozorda shu kolleksiyadan nechta e’lon turganiga va narxlar qanchalik farq qilishiga qarang.</p>
      <h2 id="tiraj-raqam-va-narxni-qayerda">Tiraj, raqam va narxni qayerda tekshirish mumkin?</h2>
      <p>Tekshiruv uchun tashqi sayt yoki skrinshot shart emas — kerakli ma’lumot ilovaning o‘zida bor.</p>
      <Steps>
        <Step title={"Sovg‘ani oching"}>profil yoki bozordagi sovg‘ani bosing va kartani oxirigacha ko‘ring: nomi, «X/Y» yozuvi va egasi.</Step>
        <Step title={"Atributlarni ko‘ring"}>har bir atributni, so‘ng «Value» maydonini o‘qing.</Step>
        <Step title={"Ichki bozorda solishtiring"}>Telegram ichidagi <a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">sovg‘alar bozorida</a> shu kolleksiyaning boshqa nusxalarini toping va narxlarni taqqoslang.</Step>
        <Step title={"«Sale» belgisini tekshiring"}>sotuvga qo‘yilgan sovg‘a bozorda paydo bo‘ladi va egasining profilida «Sale» belgisini oladi. Sotuvchi «sotyapman» desa-yu, belgi bo‘lmasa, sababini so‘rang.</Step>
        <Step title={"Rasmga emas, kartaga qarang"}>raqam va tirajni chatdagi rasmdan emas, ilovadagi kartadan tekshiring. Rasmni tahrirlash oson.</Step>
      </Steps>
      <p>Kolleksiyalar va noyob nusxalarni izlash bo‘yicha qo‘shimcha maslahatlar: <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Rare sovg‘alarni qanday topish mumkin</Link>.</p>
      <h2 id="kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa">Kanallardagi umumiy sovg‘alar statistikasiga ishonsa bo‘ladimi?</h2>
      <p>Telegram kanallarida vaqti-vaqti bilan «jami shuncha million sovg‘a chiqarildi» yoki «marketpleyslarda shuncha sovg‘a turibdi, umumiy qiymati falon» kabi postlar tarqaladi. Bunday raqamlar telegram.org, core.telegram.org, fragment.com yoki ton.org’da tasdiqlanmagan, shuning uchun bu maqolada keltirilmaydi.</p>
      <Notice label={"Muhim"}>Bunday postlarda ko‘pincha tashqi marketpleysning referal havolasi turadi. Uni reklama deb qabul qiling: muallif siz ro‘yxatdan o‘tsangiz foyda olishi mumkin.</Notice>
      <p>Bundan tashqari, umumiy statistika aniq bir sovg‘a haqida hech narsa aytmaydi. Siz ko‘rayotgan nusxaning tiraji va raqamini bilish uchun Telegram’dagi barcha sovg‘alar soni emas, sovg‘a kartasining o‘zi kerak.</p>
      <h2 id="kichik-tirajli-kolleksion-sovgani-qayerdan">Kichik tirajli kolleksion sovg‘ani qayerdan olish mumkin?</h2>
      <p>Kolleksion sovg‘aga bir necha yo‘l bilan ega bo‘lish mumkin. Ular xavfsizlik va to‘lov usuli bo‘yicha farq qiladi.</p>
      <ul>
        <li><b>Telegram ichidagi bozor.</b> Boshqa foydalanuvchilardan kolleksion sovg‘ani Stars evaziga sotib olasiz. Stars yetmasa, ularni <Link href="/stars">so‘mda olish mumkin</Link>.</li>
        <li><b>Sovg‘a takliflari.</b> Texnik hujjatga ko‘ra, bu Telegram himoyalagan to‘g‘ridan-to‘g‘ri sotuv usuli: xaridor ham, ega ham firibgarlikdan saqlanadi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li><b>TON blokcheyni.</b> Sovg‘alarni blokcheyn orqali o‘tkazish va auksionga qo‘yish mumkin. TON hamyon auksion saytlari kabi tashqi servislarga ulanish imkonini beradi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Bu servislarning xavfsizligi haqida Telegram hech qanday kafolat bermagan.</li>
        <li><b>Blokcheyndagi sovg‘a egaligi.</b> Sovg‘a profilda ko‘rinib tursa ham, egalik TON hamyonda qolishi mumkin. Xarid qilishda sovg‘a qaysi hamyonga va qaysi profilga tegishli ekanini farqlang.</li>
        <li><b>Stars’siz, so‘mda.</b> Tayyor kolleksion sovg‘ani <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>’dagi NFT Market’dan so‘mda olish mumkin. Faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Batafsil: <Link href="/blog/starspaymee-nft-market">NFT Market qanday ishlaydi</Link> va <Link href="/gifts">sovg‘alar sahifasi</Link>.</li>
      </ul>
      <p>Yo‘lni tanlashda bitta savol yordam beradi: to‘lov va sovg‘aning o‘tishi bitta mexanizm ichida bo‘ladimi? Ichki bozor va takliflarda shunday. Chatda kelishib, alohida pul o‘tkazilsa — yo‘q.</p>
      <h2 id="noyob-raqamli-sovgani-olishdan-oldin">Noyob raqamli sovg‘ani olishdan oldin nimalarni tekshirish kerak?</h2>
      <p>Kichik raqam yoki kam tiraj sotuvchi uchun narxni ko‘tarishga qulay dalil. Pul to‘lashdan oldin quyidagilarni ko‘zdan kechiring:</p>
      <ul>
        <li><b>Raqam va tirajni o‘zingiz ko‘ring.</b> Sotuvchi yuborgan rasm emas, ilovadagi karta hisobga olinadi.</li>
        <li><b>So‘ralgan narxni «Value» bilan solishtiring.</b> Farq katta bo‘lsa, nima uchun ekanini so‘rang: kam uchraydigan atributmi yoki faqat raqammi?</li>
        <li><b>Qayta sotish sanasini hisobga oling.</b> Texnik hujjatga ko‘ra, ba’zi sovg‘alarni faqat ko‘rsatilgan sanadan boshlab sotuvga qo‘yish mumkin. Olgan sovg‘ani tez sotmoqchi bo‘lsangiz, buni oldindan biling.</li>
        <li><b>Hisob-kitob ilovada bo‘lsin.</b> Shaxsiy chatda «avval pul, keyin sovg‘a» degan kelishuvga rozi bo‘lmang. Himoyalangan sovg‘a taklifini yoki ichki bozorni so‘rang.</li>
        <li><b>Akkaunt ma’lumotini bermang.</b> Parol, SMS kod yoki akkauntga kirishni so‘ragan «sotuvchi» firibgar bo‘lishi mumkin. StarsPaymee buyurtma uchun faqat @username so‘raydi.</li>
      </ul>
      <h2 id="tirajli-sovgani-keyin-sotish-raqam">Tirajli sovg‘ani keyin sotish: raqam xaridorga nima ko‘rsatadi?</h2>
      <p>Raqam va tiraj sovg‘a kartasida qoladi va keyingi xaridor ularni ko‘radi. Ular e’loningizni boshqalaridan ajratib ko‘rsatishi mumkin, lekin narxni o‘z-o‘zidan oshirmaydi.</p>
      <p><a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogidagi</a> tartibga ko‘ra, ichki bozorda sovg‘a quyidagicha sotuvga qo‘yiladi: sovg‘ani profilda ochasiz, «Sell» tugmasini bosasiz va narxni Stars’da belgilaysiz. Fikringiz o‘zgarsa, «Unlist» tugmasi bilan e’lonni olib tashlaysiz.</p>
      <p>Qo‘lingizga tushadigan summa siz qo‘ygan narxning o‘zi emas. Texnik hujjatga ko‘ra, sotuvchi komissiya koeffitsienti bilan hisoblangan ulushni oladi. Aniq foiz bu maqolada tasdiqlanmagan, shuning uchun e’lon berishda ilova ko‘rsatgan hisobni tekshiring. Hujjatda qayta sotish narxi uchun eng kam va eng yuqori chegaralar borligi ham aytilgan.</p>
      <p>Kichik raqamli nusxaga ustama qo‘ymoqchi bo‘lsangiz, xaridor uni «Value» va shu kolleksiyaning boshqa e’lonlari bilan solishtirishini unutmang. Ustama asossiz katta bo‘lsa, sovg‘a uzoq turib qolishi mumkin. Sotuv sekin ketsa, nima qilish kerakligi haqida: <Link href="/blog/telegram-gift-sotish">Telegram Gifts sotish</Link>.</p>
      <p>StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi. Sotish uchun Telegram ichidagi bozor yoki sovg‘a takliflaridan foydalaning.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Sovg‘adagi raqam qancha kichik bo‘lsa, shuncha qimmat bo‘ladimi?", answer: "Shart emas. Bunday qoida rasmiy tasdiqlanmagan. Narxga nusxa atributlari va xaridorlar qiziqishi ham ta’sir qiladi, shuning uchun «Value» va o‘xshash e’lonlarga qarang." },
  { question: "Tiraji tugagan sovg‘ani hali ham sotib olsa bo‘ladimi?", answer: "Telegram sotuvdan olib tashlagan limited sovg‘ani botlar yubora olmaydi. Kolleksion nusxalar esa egadan egaga o‘tadi, ularni ichki bozorda yoki @StarsPaymee_bot’dagi NFT Market’da izlash mumkin." },
  { question: "Bir kolleksiyadagi ikki nusxa nega har xil narxda turadi?", answer: "Har bir nusxaning atributlari o‘ziga xos, narxni esa har bir sotuvchi o‘zi qo‘yadi. Kam uchraydigan atribut nusxani raqamidan qat’i nazar qimmatlashtirishi mumkin." },
  { question: "«Value» maydonidagi narxga sotishim aniqmi?", answer: "Yo‘q. Telegram bu maydonni taxminiy qayta sotish narxi deb ta’riflaydi. Sovg‘a qanchaga ketishini shu narxga rozi bo‘lgan xaridor hal qiladi." },
  { question: "Limited sovg‘ani bot orqali so‘mda olsa bo‘ladimi?", answer: "Telegram hali sotayotgan bo‘lsa, ro‘yxatni @StarsPaymee_bot’da ko‘ring. Sotuvdan olib tashlangan bo‘lsa, botlar uni yubora olmaydi. Bu holda NFT Market’dagi tayyor kolleksion nusxalarga qarang." },
  { question: "Sovg‘a TON hamyonga o‘tkazilsa, uning raqami va tiraji o‘zgaradimi?", answer: "Rasmiy manbalarda bu haqda alohida gap yo‘q. Ma’lumi shuki, blokcheyndagi sovg‘a profilda ko‘rinib tursa ham, egalik TON hamyonda qoladi. O‘tkazgandan keyin kartani ilovada qayta ko‘ring." },
  { question: "Kanallardagi «millionlab sovg‘a» haqidagi raqamlar rasmiymi?", answer: "Bunday umumiy raqamlar Telegram va TON saytlarida topilmadi. Ular ko‘pincha marketpleys reklamasi bilan birga keladi, shuning uchun ularni mustaqil ma’lumot deb hisoblamang." },
  { question: "Yangi olgan kolleksion sovg‘amda «Sell» tugmasi nega yo‘q?", answer: "Ba’zi sovg‘alar uchun qayta sotishga ruxsat beriladigan sana belgilanadi. Sana kelguncha sotuvga qo‘yib bo‘lmasligi mumkin, holatni sovg‘a kartasida tekshiring." },
  { question: "Kolleksion sovg‘ani Stars yig‘masdan, to‘g‘ridan-to‘g‘ri so‘mda olsa bo‘ladimi?", answer: "Ha, @StarsPaymee_bot’dagi NFT Market’da Click, Payme, Uzum, Paynet, UzCard/HUMO o‘tkazmasi yoki bot balansi orqali to‘lash mumkin. Ichki bozorni afzal ko‘rsangiz, avval Stars’ni so‘mda oling." },
  { question: "Sotuvchi tiraj raqamini skrinshot bilan yubordi — bunga ishonsa bo‘ladimi?", answer: "Rasm dalil bo‘lolmaydi, uni o‘zgartirish oson. Sovg‘ani ilovada o‘zingiz oching, raqam va «Sale» belgisini ko‘ring, to‘lovni esa himoyalangan taklif orqali qiling." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Запись «X/Y» на карточке подарка обычно читается так. Левое число — порядковый номер именно этого экземпляра. Правое — сколько экземпляров в коллекции, то есть тираж. Telegram официально не объяснял правило подсчёта, поэтому точный смысл сверяйте с самой карточкой. На цену, кроме номера, влияют атрибуты экземпляра и спрос покупателей.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#sovga-kartasidagi-x-y-yozuvi", label: "Что означает запись «X/Y» на карточке подарка?" },
          { href: "#oddiy-limited-va-kolleksion-sovga", label: "Обычный, лимитированный и коллекционный подарок: где важен тираж?" },
          { href: "#nusxa-raqami-va-tiraj-narxga", label: "Как номер экземпляра и тираж влияют на цену?" },
          { href: "#tiraj-raqam-va-narxni-qayerda", label: "Где проверить тираж, номер и цену?" },
          { href: "#kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa", label: "Можно ли верить общей статистике подарков из каналов?" },
          { href: "#kichik-tirajli-kolleksion-sovgani-qayerdan", label: "Где взять коллекционный подарок с малым тиражом?" },
          { href: "#noyob-raqamli-sovgani-olishdan-oldin", label: "Что проверить перед покупкой подарка с редким номером?" },
          { href: "#tirajli-sovgani-keyin-sotish-raqam", label: "Перепродажа подарка с тиражом: что номер покажет покупателю?" },
        ]}
      />
      <h2 id="sovga-kartasidagi-x-y-yozuvi">Что означает запись «X/Y» на карточке подарка?</h2>
      <p>Откройте коллекционный или лимитированный подарок — на карточке будет запись, похожая на дробь. Её удобно читать по частям:</p>
      <ul>
        <li><b>Y — тираж.</b> Это число относится к коллекции. Оно показывает, сколько экземпляров такого подарка существует.</li>
        <li><b>X — номер экземпляра.</b> Это число относится к подарку, который вы сейчас видите. Оно показывает его место внутри коллекции.</li>
      </ul>
      <p>Пример. Двое друзей смотрят одну и ту же коллекцию. У одного на экране экземпляр с маленьким номером, у другого — с намного бо́льшим. Коллекция одна, поэтому тираж у обоих одинаковый. Разница только в экземпляре: у каждого свой номер, свой внешний вид и свой владелец.</p>
      <p>Учтите одно ограничение. В блоге Telegram правило подсчёта этих чисел не описано. Например, это изначально выпущенное количество или число экземпляров, которые существуют сейчас? В этой статье это не подтверждено. Поэтому опирайтесь не на догадки, а на карточку в приложении и пояснения в ней.</p>
      <h3>А если номера на карточке нет?</h3>
      <p>Дробь есть не у каждого подарка. У обычного её может не быть: такой подарок не продаётся как отдельный экземпляр. Бывает, что подарок называют коллекционным, а номера не видно. Не покупайте такой подарок на слово продавца. Сначала выясните в приложении его тип и владельца.</p>
      <h2 id="oddiy-limited-va-kolleksion-sovga">Обычный, лимитированный и коллекционный подарок: где важен тираж?</h2>
      <p>Прежде чем думать о тираже, определите тип подарка. Три типа различаются тем, что с ними можно делать.</p>
      <CompareTable
        headers={["Тип", "Тираж на карточке", "Передача другому человеку", "Продажа на маркетплейсе", "Где взять"]}
        rows={[
          ["Обычный подарок", "Проверьте в приложении", "Проверьте в приложении", "Маркетплейс работает для коллекционных подарков", "В Telegram за Stars или в боте за сумы"],
          ["Лимитированный подарок", "Если на карточке есть число — это тираж", "Проверьте в приложении", "Проверьте в приложении", "Пока Telegram его продаёт. Снятый с продажи боты отправить не могут"],
          ["Коллекционный подарок", "С номером экземпляра и атрибутами", "Можно", "Можно, на внутреннем маркетплейсе за Stars", "Внутренний маркетплейс, предложения о покупке, NFT Market в @StarsPaymee_bot"],
        ]}
      />
      <p>У коллекционных подарков есть особые атрибуты. Их можно передать другому пользователю или выставить на аукцион на NFT-маркетплейсах — об этом написано в <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">блоге Telegram</a>. Именно у этого типа тираж имеет смысл. Экземпляры переходят от владельца к владельцу, а номер отличает каждый из них от остальных.</p>
      <p>С лимитированным подарком всё иначе. Когда Telegram снимает его с продажи, боты больше не могут его отправить. Видите на карточке статус «распродано» — не ждите новых экземпляров. Логичнее искать готовый коллекционный экземпляр у другого владельца. Подробнее о разнице между типами: <Link href="/blog/telegram-nft-gift-nima">Что такое NFT-подарок в Telegram</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="nusxa-raqami-va-tiraj-narxga">Как номер экземпляра и тираж влияют на цену?</h2>
      <p>Цена зависит не только от тиража. Даже внутри одной коллекции экземпляры различаются атрибутами, например моделью или фоном. Их точные названия смотрите на карточке в приложении. Поэтому два подарка с одинаковым названием могут стоить по-разному. Этой теме посвящена отдельная статья: <Link href="/blog/telegram-gift-price">Почему один и тот же Telegram Gift стоит по-разному</Link>.</p>
      <p>Для ориентира Telegram добавил в окно атрибутов поле «Value». Оно показывает примерную цену перепродажи подарка (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). Это оценка, а не обещание продажи. Реальную цену определяют покупатель и продавец.</p>
      <p>О маленьких номерах. Среди покупателей встречается мнение, что первые экземпляры, маленькие или красивые повторяющиеся номера стоят дороже. В официальных источниках такое правило не подтверждено. Всё зависит от вкуса покупателей, и гарантированно повысить цену номер не может.</p>
      <p>Условный пример:</p>
      <ul>
        <li><b>Экземпляр А:</b> номер маленький, атрибуты в коллекции встречаются часто. «Value» средняя, а продавец просит за номер заметно больше.</li>
        <li><b>Экземпляр Б:</b> номер большой, зато модель редкая. «Value» выше, чем у А, а запрошенная цена близка к ней.</li>
      </ul>
      <p>В этом случае переплата за А уходит только за номер. Если сам номер для вас ценен — это личный выбор. Если планируете перепродать, точнее ориентироваться на «Value» и цены похожих экземпляров на маркетплейсе.</p>
      <h3>Маленький тираж — это всегда преимущество?</h3>
      <p>Маленький тираж означает, что экземпляров мало, но не означает, что покупателей много. Если коллекция интересна немногим, даже экземпляр с малым тиражом может долго не продаваться. Поэтому смотрите, сколько объявлений из этой коллекции висит на маркетплейсе и насколько разнятся цены.</p>
      <h2 id="tiraj-raqam-va-narxni-qayerda">Где проверить тираж, номер и цену?</h2>
      <p>Для проверки не нужны сторонние сайты или скриншоты — всё необходимое есть в самом приложении.</p>
      <Steps>
        <Step title={"Откройте подарок"}>нажмите на подарок в профиле или на маркетплейсе и пролистайте карточку до конца: название, запись «X/Y» и владелец.</Step>
        <Step title={"Посмотрите атрибуты"}>прочитайте каждый атрибут, затем поле «Value».</Step>
        <Step title={"Сравните на внутреннем маркетплейсе"}>найдите на <a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">рынке подарков</a> внутри Telegram другие экземпляры этой коллекции и сравните цены.</Step>
        <Step title={"Проверьте метку «Sale»"}>выставленный на продажу подарок появляется на маркетплейсе и получает метку «Sale» в профиле владельца. Продавец говорит «продаю», а метки нет? Спросите почему.</Step>
        <Step title={"Смотрите на карточку, а не на картинку"}>номер и тираж проверяйте в карточке в приложении, а не на изображении из чата. Картинку легко отредактировать.</Step>
      </Steps>
      <p>Дополнительные советы по поиску коллекций и редких экземпляров: <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Как найти редкие подарки</Link>.</p>
      <h2 id="kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa">Можно ли верить общей статистике подарков из каналов?</h2>
      <p>В Telegram-каналах время от времени появляются посты вроде «всего выпущено столько-то миллионов подарков» или «на маркетплейсах лежит столько-то подарков на такую-то сумму». Эти цифры не подтверждены на telegram.org, core.telegram.org, fragment.com или ton.org, поэтому в статье их нет.</p>
      <Notice label={"Важно"}>В таких постах часто стоит реферальная ссылка на сторонний маркетплейс. Воспринимайте её как рекламу: автор может получить выгоду, если вы зарегистрируетесь.</Notice>
      <p>К тому же общая статистика ничего не говорит о конкретном подарке. Чтобы узнать тираж и номер экземпляра, нужна не общая цифра по Telegram, а карточка самого подарка.</p>
      <h2 id="kichik-tirajli-kolleksion-sovgani-qayerdan">Где взять коллекционный подарок с малым тиражом?</h2>
      <p>Стать владельцем коллекционного подарка можно несколькими способами. Они различаются безопасностью и способом оплаты.</p>
      <ul>
        <li><b>Внутренний маркетплейс Telegram.</b> Вы покупаете коллекционный подарок у других пользователей за Stars. Если Stars не хватает, их можно <Link href="/stars">купить за сумы</Link>.</li>
        <li><b>Предложения о покупке подарка.</b> По технической документации, это защищённый Telegram способ прямой продажи: от мошенничества защищены и покупатель, и владелец (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li><b>Блокчейн TON.</b> Подарки можно передавать и выставлять на аукцион через блокчейн. TON-кошелёк позволяет подключаться к сторонним сервисам, например к аукционным сайтам (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). Никаких гарантий безопасности этих сервисов Telegram не даёт.</li>
        <li><b>Владение подарком в блокчейне.</b> Подарок может отображаться в профиле, а право собственности при этом остаётся у TON-кошелька. При покупке различайте, какому кошельку и какому профилю принадлежит подарок.</li>
        <li><b>Без Stars, за сумы.</b> Готовый коллекционный подарок можно купить за сумы в NFT Market в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Нужен только @username, пароль или SMS-код не запрашиваются. Подробнее: <Link href="/blog/starspaymee-nft-market">как работает NFT Market</Link> и <Link href="/gifts">страница подарков</Link>.</li>
      </ul>
      <p>При выборе способа помогает один вопрос: проходят ли оплата и передача подарка внутри одного механизма? На внутреннем маркетплейсе и в предложениях — да. Если договорились в чате и деньги переводятся отдельно — нет.</p>
      <h2 id="noyob-raqamli-sovgani-olishdan-oldin">Что проверить перед покупкой подарка с редким номером?</h2>
      <p>Маленький номер или малый тираж — удобный для продавца довод поднять цену. Прежде чем платить, проверьте следующее:</p>
      <ul>
        <li><b>Сами посмотрите номер и тираж.</b> Значение имеет карточка в приложении, а не картинка от продавца.</li>
        <li><b>Сравните запрошенную цену с «Value».</b> Если разница большая, спросите, за что: за редкий атрибут или только за номер?</li>
        <li><b>Учтите дату перепродажи.</b> Согласно технической документации, некоторые подарки можно выставить на продажу только начиная с указанной даты. Если планируете быстро перепродать, узнайте это заранее.</li>
        <li><b>Расчёт — в приложении.</b> Не соглашайтесь в личном чате на схему «сначала деньги, потом подарок». Просите защищённое предложение о покупке или внутренний маркетплейс.</li>
        <li><b>Не давайте данные аккаунта.</b> «Продавец», который просит пароль, SMS-код или доступ к аккаунту, может оказаться мошенником. StarsPaymee для заказа запрашивает только @username.</li>
      </ul>
      <h2 id="tirajli-sovgani-keyin-sotish-raqam">Перепродажа подарка с тиражом: что номер покажет покупателю?</h2>
      <p>Номер и тираж остаются на карточке подарка, и следующий покупатель их увидит. Они могут выделить ваше объявление среди других, но сами по себе цену не поднимают.</p>
      <p>По порядку из <a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">блога Telegram</a> подарок выставляется на внутреннем маркетплейсе так: откройте его в профиле, нажмите кнопку «Sell» и укажите цену в Stars. Передумали — снимите объявление кнопкой «Unlist».</p>
      <p>Сумма, которую вы получите, — не равна выставленной цене. Согласно технической документации, продавец получает долю, рассчитанную с учётом коэффициента комиссии. Точный процент в этой статье не подтверждён, поэтому при размещении проверяйте расчёт, который показывает приложение. В документации также сказано, что для цены перепродажи есть минимальный и максимальный пределы.</p>
      <p>Хотите сделать наценку за маленький номер? Помните, что покупатель сравнит её с «Value» и другими объявлениями из этой коллекции. Если наценка необоснованно велика, подарок может долго провисеть. Что делать, если продажа идёт медленно: <Link href="/blog/telegram-gift-sotish">Как продать Telegram Gifts</Link>.</p>
      <p>StarsPaymee не покупает Stars и подарки у пользователей. Для продажи используйте внутренний маркетплейс Telegram или предложения о покупке подарка.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Чем меньше номер подарка, тем он дороже?", answer: "Не обязательно. Официально такое правило не подтверждено. На цену влияют атрибуты экземпляра и интерес покупателей, поэтому ориентируйтесь на «Value» и похожие объявления." },
  { question: "Можно ли ещё купить подарок, тираж которого закончился?", answer: "Лимитированный подарок, снятый Telegram с продажи, боты отправить не могут. Коллекционные экземпляры переходят от владельца к владельцу — их можно искать на внутреннем маркетплейсе или в NFT Market в @StarsPaymee_bot." },
  { question: "Почему два экземпляра из одной коллекции стоят по-разному?", answer: "У каждого экземпляра свои атрибуты, а цену каждый продавец назначает сам. Редкий атрибут может сделать экземпляр дороже независимо от его номера." },
  { question: "Продам ли я подарок точно по цене из поля «Value»?", answer: "Нет. Telegram описывает это поле как примерную цену перепродажи. За сколько уйдёт подарок, решает покупатель, который согласится на вашу цену." },
  { question: "Можно ли купить лимитированный подарок через бот за сумы?", answer: "Если Telegram ещё продаёт его, смотрите список в @StarsPaymee_bot. Если подарок снят с продажи, боты его отправить не могут — тогда присмотритесь к готовым коллекционным экземплярам в NFT Market." },
  { question: "Меняются ли номер и тираж, если перевести подарок в TON-кошелёк?", answer: "Отдельно об этом в официальных источниках не говорится. Известно, что подарок в блокчейне может отображаться в профиле, а право собственности остаётся у TON-кошелька. После перевода откройте карточку в приложении ещё раз." },
  { question: "Цифры о «миллионах подарков» из каналов — официальные?", answer: "На сайтах Telegram и TON таких общих цифр не нашлось. Они часто идут вместе с рекламой маркетплейсов, так что не считайте их независимыми данными." },
  { question: "Почему у только что полученного коллекционного подарка нет кнопки «Sell»?", answer: "Для некоторых подарков задаётся дата, с которой разрешена перепродажа. До неё выставить подарок на продажу может быть нельзя — статус смотрите в карточке подарка." },
  { question: "Можно ли купить коллекционный подарок сразу за сумы, не накапливая Stars?", answer: "Да, в NFT Market в @StarsPaymee_bot можно оплатить через Click, Payme, Uzum, Paynet, переводом на UzCard/HUMO или с баланса бота. Если удобнее внутренний маркетплейс, сначала купите Stars за сумы." },
  { question: "Продавец прислал скриншот с номером тиража — можно верить?", answer: "Картинка не доказательство, её легко подделать. Откройте подарок в приложении сами, проверьте номер и метку «Sale», а оплату проводите через защищённое предложение о покупке." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>The “X/Y” line on a gift card usually reads like this: the left number is this copy’s serial number, and the right one is how many copies the collection has, its supply. Telegram hasn’t explained the counting rule, so check the exact meaning on the card itself. Price also depends on the copy’s attributes and buyer demand, not just the number.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#sovga-kartasidagi-x-y-yozuvi", label: "What does “X/Y” on a gift card mean?" },
          { href: "#oddiy-limited-va-kolleksion-sovga", label: "Regular, limited and collectible gifts: when does supply matter?" },
          { href: "#nusxa-raqami-va-tiraj-narxga", label: "How do the serial number and supply affect price?" },
          { href: "#tiraj-raqam-va-narxni-qayerda", label: "Where can you check supply, number and price?" },
          { href: "#kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa", label: "Can you trust gift statistics posted in channels?" },
          { href: "#kichik-tirajli-kolleksion-sovgani-qayerdan", label: "Where can you get a low-supply collectible gift?" },
          { href: "#noyob-raqamli-sovgani-olishdan-oldin", label: "What should you check before buying a rare-numbered gift?" },
          { href: "#tirajli-sovgani-keyin-sotish-raqam", label: "Reselling a numbered gift: what does the number show a buyer?" },
        ]}
      />
      <h2 id="sovga-kartasidagi-x-y-yozuvi">What does “X/Y” on a gift card mean?</h2>
      <p>Open a collectible or limited gift and you’ll see something that looks like a fraction on the card. It’s easiest to read it in two parts:</p>
      <ul>
        <li><b>Y is the supply.</b> This number belongs to the collection. It shows how many copies of this gift type exist.</li>
        <li><b>X is the serial number.</b> This number belongs to the exact gift you’re looking at. It shows that copy’s place within the collection.</li>
      </ul>
      <p>An example. Two friends are browsing the same collection. One sees a copy with a low number, the other sees one with a much higher number. The supply is the same for both, because it’s one collection. The only difference is the copy: each has its own number, its own look and its own owner.</p>
      <p>Keep one limitation in mind. The Telegram blog doesn’t explain how these numbers are counted. For example, whether Y is the number originally issued or the number of copies that exist right now is not confirmed in this article. So rely on the card in the app and any notes on it, not on guesses.</p>
      <h3>What if there’s no number on the card?</h3>
      <p>Not every gift shows a fraction. A regular gift may not have one, because it isn’t sold as an individual copy. If a gift is described as collectible but shows no number, don’t buy it on the seller’s word. First confirm the gift type and its owner in the app.</p>
      <h2 id="oddiy-limited-va-kolleksion-sovga">Regular, limited and collectible gifts: when does supply matter?</h2>
      <p>Before thinking about supply, work out what kind of gift you’re dealing with. The three types are used differently.</p>
      <CompareTable
        headers={["Type", "Supply on the card", "Transfer to another user", "Sell on the marketplace", "Where to get it"]}
        rows={[
          ["Regular gift", "Check in the app", "Check in the app", "The marketplace is for collectible gifts", "Inside Telegram with Stars, or in the bot in so‘m"],
          ["Limited gift", "If there’s a number, that’s the supply", "Check in the app", "Check in the app", "While Telegram is selling it. Bots can’t send ones that have been pulled from sale"],
          ["Collectible gift", "With a serial number and attributes", "Possible", "Possible, on the built-in marketplace for Stars", "Built-in marketplace, gift offers, NFT Market in @StarsPaymee_bot"],
        ]}
      />
      <p>Collectible gifts have special attributes. They can be transferred to other users or auctioned on NFT marketplaces, as the <a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a> puts it. This is the type where supply actually means something: copies move from owner to owner, and the number sets each copy apart from the rest.</p>
      <p>Limited gifts work differently. Once Telegram removes one from sale, bots can’t send it. If the card shows it as sold out, don’t wait for new copies. It makes more sense to look for a ready collectible copy from another owner. The difference between types in more detail: <Link href="/blog/telegram-nft-gift-nima">What is a Telegram NFT Gift</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="nusxa-raqami-va-tiraj-narxga">How do the serial number and supply affect price?</h2>
      <p>Price isn’t only about supply. Even within one collection, copies differ by attributes, such as the model or the backdrop. Check their exact names on the card in the app. That’s why two gifts with the same name can sell at two different prices. There’s a separate article on this: <Link href="/blog/telegram-gift-price">Why does the same Telegram Gift come at two different prices?</Link></p>
      <p>As a reference point, Telegram added a “Value” field to the attributes view. It shows the gift’s approximate resale price (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). That’s an estimate, not a promise of a sale. The real price is agreed between buyer and seller.</p>
      <p>A word on low numbers. Some buyers believe first copies, low numbers or neat repeating numbers are worth more. No official source confirms such a rule. It may reflect buyer taste, but it isn’t a factor that reliably raises the price.</p>
      <p>A hypothetical example:</p>
      <ul>
        <li><b>Copy A:</b> low number, but its attributes are common in the collection. “Value” is average, while the seller asks a much higher price because of the number.</li>
        <li><b>Copy B:</b> high number, but a rare model. “Value” is higher than A’s, and the asking price is close to it.</li>
      </ul>
      <p>Here, the extra you’d pay for A goes purely to the number. If the number matters to you personally, that’s your call. If you plan to resell, “Value” and the prices of similar copies on the marketplace give you a clearer guide.</p>
      <h3>Is a small supply always an advantage?</h3>
      <p>A small supply means fewer copies, not more buyers. If few people care about a collection, even a low-supply copy can sit unsold for a long time. So look at how many listings from that collection are live and how widely their prices vary.</p>
      <h2 id="tiraj-raqam-va-narxni-qayerda">Where can you check supply, number and price?</h2>
      <p>You don’t need an outside website or screenshots. Everything you need is in the app.</p>
      <Steps>
        <Step title={"Open the gift"}>tap the gift on a profile or on the marketplace and scroll through the whole card: name, the “X/Y” line and the owner.</Step>
        <Step title={"Look at the attributes"}>read each attribute, then the “Value” field.</Step>
        <Step title={"Compare on the built-in marketplace"}>find other copies from the same collection on Telegram’s <a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">gift marketplace</a> and compare prices.</Step>
        <Step title={"Check for the “Sale” label"}>a gift listed for sale appears on the marketplace and gets a “Sale” label on the owner’s profile. If a seller says it’s for sale but there’s no label, ask why.</Step>
        <Step title={"Trust the card, not the image"}>check the number and supply on the card in the app, not on a picture sent in chat. Images are easy to edit.</Step>
      </Steps>
      <p>More tips on browsing collections and hunting for rare copies: <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">How to find rare gifts</Link>.</p>
      <h2 id="kanallardagi-umumiy-sovgalar-statistikasiga-ishonsa">Can you trust gift statistics posted in channels?</h2>
      <p>Telegram channels regularly share posts like “this many million gifts have been issued” or “this many gifts are listed on marketplaces, worth such-and-such in total”. Figures like these aren’t confirmed on telegram.org, core.telegram.org, fragment.com or ton.org, so this article doesn’t repeat them.</p>
      <Notice label={"Important"}>Such posts often carry a referral link to an outside marketplace. Treat it as an ad: the author may earn something if you sign up.</Notice>
      <p>Overall statistics also tell you nothing about a specific gift. To know the supply and number of the copy in front of you, you need its card, not the total count of gifts on Telegram.</p>
      <h2 id="kichik-tirajli-kolleksion-sovgani-qayerdan">Where can you get a low-supply collectible gift?</h2>
      <p>There are several ways to get a collectible gift. They differ in safety and payment method.</p>
      <ul>
        <li><b>Telegram’s built-in marketplace.</b> You buy collectible gifts from other users for Stars. If you’re short on Stars, you can <Link href="/stars">buy them in so‘m</Link>.</li>
        <li><b>Gift offers.</b> According to the technical docs, this is a direct sale method protected by Telegram that keeps both buyer and owner safe from scams (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li><b>The TON blockchain.</b> Gifts can be transferred and auctioned via the blockchain. A TON wallet lets you connect to outside services such as auction sites (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). Telegram gives no safety guarantee for those services.</li>
        <li><b>Ownership of on-chain gifts.</b> A gift can be shown on a profile while ownership stays with a TON wallet. When buying, be clear about which wallet and which profile the gift belongs to.</li>
        <li><b>No Stars, pay in so‘m.</b> You can buy a ready collectible gift in so‘m on the NFT Market in <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Only your @username is needed; no password or SMS code is asked for. More: <Link href="/blog/starspaymee-nft-market">How the NFT Market works</Link> and the <Link href="/gifts">gifts page</Link>.</li>
      </ul>
      <p>One question helps you choose: do the payment and the gift transfer happen inside the same mechanism? On the built-in marketplace and with gift offers, they do. If you agree in chat and send money separately, they don’t.</p>
      <h2 id="noyob-raqamli-sovgani-olishdan-oldin">What should you check before buying a rare-numbered gift?</h2>
      <p>A low number or a small supply is a handy argument for a seller to push the price up. Before you pay, go through this list:</p>
      <ul>
        <li><b>See the number and supply yourself.</b> What counts is the card in the app, not an image from the seller.</li>
        <li><b>Compare the asking price with “Value”.</b> If the gap is big, ask why: is it a rare attribute, or just the number?</li>
        <li><b>Mind the resale date.</b> According to the technical docs, some gifts can only be listed for sale from a specified date. If you plan to flip a gift quickly, know this in advance.</li>
        <li><b>Keep the deal inside the app.</b> Don’t agree to “money first, gift later” in a private chat. Ask for a protected gift offer or use the built-in marketplace.</li>
        <li><b>Don’t share account details.</b> A “seller” who asks for your password, SMS code or account access may be a scammer. StarsPaymee asks only for your @username to place an order.</li>
      </ul>
      <h2 id="tirajli-sovgani-keyin-sotish-raqam">Reselling a numbered gift: what does the number show a buyer?</h2>
      <p>The number and supply stay on the gift card, and the next buyer will see them. They can make your listing stand out, but they don’t raise the price on their own.</p>
      <p>According to the <a href={"https://telegram.org/blog/gift-marketplace-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>, listing a gift on the built-in marketplace works like this: open the gift on your profile, tap “Sell” and set your price in Stars. If you change your mind, tap “Unlist” to remove the listing.</p>
      <p>What you receive isn’t the full price you set. According to the technical docs, the seller gets a share calculated with a commission coefficient. The exact percentage isn’t confirmed in this article, so check the figure the app shows when you list. The docs also mention minimum and maximum limits for the resale price.</p>
      <p>If you want to add a premium for a low-numbered copy, remember that buyers will compare it with “Value” and other listings from the same collection. If the markup is unjustified, the gift may sit for a long time. If it’s selling slowly, see: <Link href="/blog/telegram-gift-sotish">Selling Telegram Gifts</Link>.</p>
      <p>StarsPaymee doesn’t buy Stars or gifts from users. To sell, use Telegram’s built-in marketplace or gift offers.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Is a gift with a lower number always more expensive?", answer: "Not necessarily. No official source confirms that rule. Attributes and buyer interest matter too, so look at “Value” and similar listings." },
  { question: "Can I still buy a gift whose supply has run out?", answer: "Bots can’t send a limited gift that Telegram has pulled from sale. Collectible copies, however, change hands between owners, so you can look for them on the built-in marketplace or the NFT Market in @StarsPaymee_bot." },
  { question: "Why are two copies from the same collection priced differently?", answer: "Each copy has its own attributes, and every seller sets their own price. A rare attribute can make a copy more expensive regardless of its number." },
  { question: "Will my gift definitely sell for the price shown in “Value”?", answer: "No. Telegram describes that field as an approximate resale price. The final price depends on a buyer willing to pay it." },
  { question: "Can I buy a limited gift in so‘m through a bot?", answer: "If Telegram is still selling it, check the list in @StarsPaymee_bot. If it’s been removed from sale, bots can’t send it, so look at ready collectible copies on the NFT Market instead." },
  { question: "Does moving a gift to a TON wallet change its number or supply?", answer: "Official sources don’t address this directly. What is known is that an on-chain gift can appear on a profile while ownership stays with the TON wallet. Re-check the card in the app after the transfer." },
  { question: "Are the “millions of gifts” figures shared in channels official?", answer: "Such totals weren’t found on Telegram or TON websites. They often come bundled with marketplace ads, so don’t treat them as independent data." },
  { question: "Why don’t I see a “Sell” button on a collectible gift I just got?", answer: "Some gifts have a date before which resale isn’t allowed. Until then you may not be able to list it, so check the status on the gift card." },
  { question: "Can I buy a collectible gift directly in so‘m without collecting Stars?", answer: "Yes, the NFT Market in @StarsPaymee_bot accepts Click, Payme, Uzum, Paynet, UzCard/HUMO transfers or bot balance. If you prefer the built-in marketplace, buy Stars in so‘m first." },
  { question: "A seller sent a screenshot of the gift number — can I trust it?", answer: "An image isn’t proof, since it’s easy to edit. Open the gift in the app yourself, check the number and the “Sale” label, and pay through a protected offer." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram sovga tiraji","telegram sovg‘a nechta chiqarilgan","telegram gift raqami nima","kolleksion sovg‘a tiraji","limited sovg‘a qancha qoldi","telegram nft sovga noyobligi","тираж подарков телеграм","сколько выпущено подарков telegram","номер подарка телеграм","редкость подарка telegram","лимитированные подарки телеграм сколько осталось"],
  howToSteps: [
    { name: "Sovg‘ani oching", text: "profil yoki bozordagi sovg‘ani bosing va kartani oxirigacha ko‘ring: nomi, «X/Y» yozuvi va egasi." },
    { name: "Atributlarni ko‘ring", text: "har bir atributni, so‘ng «Value» maydonini o‘qing." },
    { name: "Ichki bozorda solishtiring", text: "Telegram ichidagi sovg‘alar bozorida shu kolleksiyaning boshqa nusxalarini toping va narxlarni taqqoslang." },
    { name: "«Sale» belgisini tekshiring", text: "sotuvga qo‘yilgan sovg‘a bozorda paydo bo‘ladi va egasining profilida «Sale» belgisini oladi. Sotuvchi «sotyapman» desa-yu, belgi bo‘lmasa, sababini so‘rang." },
    { name: "Rasmga emas, kartaga qarang", text: "raqam va tirajni chatdagi rasmdan emas, ilovadagi kartadan tekshiring. Rasmni tahrirlash oson." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘a tiraji: «X/Y» nimani bildiradi va qayerda tekshiriladi",
      excerpt: "«X/Y»da odatda X — nusxa raqami, Y — kolleksiya tiraji, narxga esa atributlar ham ta’sir qiladi. Maqolada ilovada tekshirish qadamlari va noyob nusxani xavfsiz olish yo‘llari bor.",
      metaTitle: "Telegram sovg‘a tiraji: «X/Y» nimani bildiradi",
      metaDescription: "«X/Y»da odatda X — nusxa raqami, Y — kolleksiya tiraji, narxga esa atributlar ham ta’sir qiladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Что значит «X/Y» на подарке в Telegram: тираж, номер и где проверить",
      excerpt: "Что означают числа «X/Y» на карточке подарка Telegram, почему тираж — не единственный фактор цены, как проверить номер и «Value» в приложении и где безопасно купить редкий экземпляр.",
      metaTitle: "Что значит «X/Y» на подарке в Telegram",
      metaDescription: "Что означают числа «X/Y» на карточке подарка Telegram, почему тираж — не единственный фактор цены, как проверить номер и «Value» в приложении и где безопасно…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram gift supply: what “X/Y” on a gift means and where to check it",
      excerpt: "In “X/Y”, X is usually the copy’s serial number and Y the collection’s supply, but attributes also drive price. This guide shows how to check it in the app and buy a rare copy safely.",
      metaTitle: "Telegram gift supply: what “X/Y” on a gift means",
      metaDescription: "In “X/Y”, X is usually the copy’s serial number and Y the collection’s supply, but attributes also drive price.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
