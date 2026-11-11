import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "fragment-hamyon-ulanishi-stars-xavfi";

/**
 * Fragment’dagi hamyon ulanishi Stars balansiga xavf tug‘diradimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-11): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Stars yoki Premium olish uchun kompyuterda Telegram Wallet’ni Fragment’ga ulagan foydalanuvchi bu ulanish telefonga ham o‘tishi rostligini, Stars balansi va xaridlari xavf ostida qolish-qolmasligini va hamyon ulamasdan xarid qilish yo‘lini «fragment hamyon ulanishi stars xavfi» kabi so‘zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-11):
 *   https://core.telegram.org/api/gifts
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://fragment.com/terms
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
  return <p>Stars balansi va Premium obunasi TON hamyonda emas, Telegram akkauntida turadi. Ularni avvalo akkauntga kirish va 2FA paroli himoya qiladi. Wallet kompyuterdagi Fragment ulanishini telefonga ham ko‘chiradi degan gap esa hozircha faqat kanal postida bor. Keyingi xarid uchun hamyon kerak emas: Stars va Premium’ni @username orqali so‘mda olsa bo‘ladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#wallet-ulanishni-telefonga-ham-kochiradi", label: "Wallet ulanishni telefonga ham ko‘chiradi degan gap qayerdan chiqdi?" },
          { href: "#stars-premium-va-sovgalar-qayerda", label: "Stars, Premium va sovg‘alar qayerda turadi: akkauntdami yoki hamyondami?" },
          { href: "#hamyonga-begona-odam-kirsa-nimadan", label: "Hamyonga begona odam kirsa, nimadan ayrilish mumkin?" },
          { href: "#stars-yoki-premium-uchun-hamyonni", label: "Stars yoki Premium uchun hamyonni Fragment’ga ulash shartmi?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "Hamyonsiz, so‘mda Stars yoki Premium qanday olinadi?" },
          { href: "#noutbukda-ochiq-qolgan-ulanishni-qanday", label: "Noutbukda ochiq qolgan ulanishni qanday yopish kerak?" },
          { href: "#nft-sovgani-blokcheynga-chiqarish-bu", label: "NFT sovg‘ani blokcheynga chiqarish bu xavfni oshiradimi?" },
          { href: "#yangi-walletga-oting-kabi-xabarlarni", label: "«Yangi Wallet’ga o‘ting» kabi xabarlarni qanday ajratish mumkin?" },
          { href: "#hamyondan-siz-yubormagan-otkazma-chiqsa", label: "Hamyondan siz yubormagan o‘tkazma chiqsa, nima qilasiz?" },
        ]}
      />
      <h2 id="wallet-ulanishni-telefonga-ham-kochiradi">Wallet ulanishni telefonga ham ko‘chiradi degan gap qayerdan chiqdi?</h2>
      <p>Gap bitta Telegram kanalidagi postdan tarqaldi. Unda yozilishicha, yangi Telegram Wallet saytlarga berilgan ulanishlarni qurilmalar o‘rtasida sinxronlaydi. Ya’ni hamyonni kompyuterda Fragment’ga ulasangiz, xuddi shu ulanish telefonda ham ko‘rinadi. Muallif bunga «bitta sessiya o‘g‘irlansa, hammasiga kirish olinadi» degan xavotirni ham qo‘shgan.</p>
      <p>Tekshiruv paytida bu funksiya haqida telegram.org, core.telegram.org, fragment.com yoki ton.org’da tasdiq topilmadi. «Bitta sessiya — hamma narsaga kirish» degani ham rasmiy bayonot emas, postning taxmini.</p>
      <p>Ko‘pincha vaziyat shunday bo‘ladi. Odam ishxonadagi noutbukda Fragment’ni ochadi, Premium yoki Stars uchun hamyonni ulaydi, lekin to‘lovni oxiriga yetkazmaydi. Bir necha kundan keyin postni o‘qib, «endi bu ulanish telefonimda ham turibdimi, yulduzlarim xavf ostidami?» deb so‘raydi.</p>
      <p>Amaliy jihatdan sinxronlash bor-yo‘qligi muhim emas. Ulanishni bitta qurilmaga emas, hamyonning o‘ziga berilgan ruxsat deb qarang. Shunda asosiy savol boshqacha bo‘ladi: hamyonda nima bor va uning kaliti kimda?</p>
      <h2 id="stars-premium-va-sovgalar-qayerda">Stars, Premium va sovg‘alar qayerda turadi: akkauntdami yoki hamyondami?</h2>
      <p>Xavfni baholashdan oldin nimangiz qayerda turganini ajratib oling. Bir qismi Telegram akkauntiga, bir qismi TON hamyonga bog‘langan. Ikki balans farqi <Link href="/blog/telegram-wallet-va-stars-farqi">Wallet va Stars farqi</Link> maqolasida batafsil yozilgan.</p>
      <CompareTable
        headers={["Nima", "Qayerda turadi", "Nima himoya qiladi", "Muammo bo‘lsa"]}
        rows={[
          ["Stars balansi", "Telegram akkauntida", "Akkauntga kirish, 2FA paroli", "Hamyon ulanishiga bog‘liqligi rasmiy hujjatlarda aytilmagan; asosiy xavf — akkaunt o‘g‘irlanishi"],
          ["Premium obunasi", "Telegram akkauntida", "Akkauntga kirish, 2FA paroli", "Akkaunt kimda bo‘lsa, obunadan o‘sha foydalanadi"],
          ["Telegram ichidagi kolleksion sovg‘a", "Telegram akkauntida", "Akkaunt xavfsizligi", "Uni boshqa foydalanuvchiga o‘tkazish mumkin, shuning uchun akkaunt bilan birga xavf ostida"],
          ["Blokcheynga chiqarilgan NFT sovg‘a", "TON hamyonida; profilga bog‘lansa ham egalik hamyonda qoladi", "Hamyon kaliti, seed phrase", "Akkaunt yo‘qolsa ham sizda qoladi, kalit yo‘qolsa — Fragment tiklay olmaydi"],
          ["Fragment kolleksiyalari (masalan, username yoki raqam)", "Egasining TON hamyoniga bog‘langan", "Hamyon kaliti", "Fragment hamyonni ham, kolleksiyani ham tiklay olmaydi"],
          ["TON tangalar", "Hamyonda", "Hamyon kaliti", "Blokcheyndagi o‘tkazma qaytarilmaydi"],
        ]}
      />
      <p>Sovg‘alar haqidagi qatorlar <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API hujjatiga</a>, Fragment haqidagilar esa <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment foydalanish shartlariga</a> tayanadi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="hamyonga-begona-odam-kirsa-nimadan">Hamyonga begona odam kirsa, nimadan ayrilish mumkin?</h2>
      <p>Jadvalning pastki qismi xavf aynan qayerda ekanini ko‘rsatadi:</p>
      <ul>
        <li><b>TON tangalar.</b> Fragment shartlariga ko‘ra, TON blokcheynidagi tranzaksiyani orqaga qaytarib bo‘lmaydi.</li>
        <li><b>Blokcheyndagi NFT sovg‘alar.</b> Ular hamyonda turadi. Profilga bog‘langan bo‘lsa ham, egalik hamyonda qoladi.</li>
        <li><b>Fragment kolleksiyalari.</b> Sotib olingan kolleksiyalar egasining TON hamyoniga bog‘lanadi.</li>
      </ul>
      <p>Fragment kirish ma’lumotlari yo‘qolsa, hamyonni ham, undagi kolleksiyalarni ham tiklay olmasligini ochiq yozgan. Kalit, qurilma va zaxira nusxani saqlash uchun faqat foydalanuvchi javob beradi.</p>
      <p>Hamyon ulanishi bilan Telegram akkauntiga kirish — ikki xil narsa. Akkauntga kirish kod va 2FA paroli bilan alohida himoyalanadi. Shuning uchun Stars balansi va Premium’ga xavf, eng avvalo, akkaunt o‘g‘irlanishidan keladi.</p>
      <p>Ko‘p xaridorning hamyoni bo‘sh, unda NFT ham yo‘q: ular Fragment’ni faqat narxni ko‘rish uchun ochgan. Bunday holatda yo‘qotadigan narsa deyarli bo‘lmaydi. Baribir keraksiz ulanishni qoldirmang: keyinroq hamyonga mablag‘ tushsa, eski ruxsat haqida esingizdan chiqqan bo‘lishi mumkin.</p>
      <h2 id="stars-yoki-premium-uchun-hamyonni">Stars yoki Premium uchun hamyonni Fragment’ga ulash shartmi?</h2>
      <p>Yo‘q. Fragment — TON hamyon orqali ishlaydigan platforma, undagi xaridlar egasining hamyoniga bog‘lanadi. Shartlarida yozilishicha, pul yechishdan oldin to‘g‘ri hamyon ulanganini tekshirish ham foydalanuvchining o‘z vazifasi. Kriptoga aloqasi yo‘q odam uchun bu ortiqcha qadam va ortiqcha xavf.</p>
      <p>@StarsPaymee_bot orqali to‘lov so‘mda qilinadi va faqat @username kerak bo‘ladi. TON hamyon, kripto, xalqaro karta yoki VPN talab qilinmaydi.</p>
      <p>Narxlar:</p>
      <ul>
        <li><b>Stars</b> — 1 donasi UzCard/HUMO kartaga o‘tkazma yoki bot balansidan to‘lansa {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars.</li>
        <li><b>Premium</b> — 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Narx barcha to‘lov usullarida bir xil. 1 oylik tarif narxini botda ko‘rasiz.</li>
      </ul>
      <p>Batafsil ma’lumot <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida. Telegram Desktop’da ishlayotgan bo‘lsangiz, <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">kompyuterdan buyurtma berish</Link> haqidagi maqolani ham o‘qing. StarsPaymee — mustaqil xizmat, Telegram nomidan ish yuritmaydi.</p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">Hamyonsiz, so‘mda Stars yoki Premium qanday olinadi?</h2>
      <Steps>
        <Step title={"Botni oching"}>kompyuter yoki telefonda @StarsPaymee_bot’ga kiring.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 dona) yoki Premium muddatini belgilang.</Step>
        <Step title={"@username’ni kiriting"}>o‘zingiznikini yoki do‘stingiznikini. Parol va SMS kod so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Stars narxi usulga qarab farq qiladi.</Step>
        <Step title={"Yakuniy summani tekshirib, to‘lang"}>buyurtma odatda bir necha soniyada (taxminan 5 soniya) avtomatik yetkaziladi.</Step>
        <Step title={"Natijani tekshiring"}>ilovada Stars balansini yoki Premium belgisini oching. Muammo bo‘lsa, @StarsPaymeeSupport’ga yozing.</Step>
      </Steps>
      <Notice label={"Muhim"}>Faol Premium obunasi bor akkauntga bot yangi Premium buyurtmasini ochmaydi: muddat amaldagi obuna ustiga qo‘shilmaydi. Buyurtmadan oldin obuna qachon tugashini ko‘rib oling.</Notice>
      <h2 id="noutbukda-ochiq-qolgan-ulanishni-qanday">Noutbukda ochiq qolgan ulanishni qanday yopish kerak?</h2>
      <p>Fragment’ni kompyuterda ochgan bo‘lsangiz, quyidagilarni bir o‘tirishda bajaring:</p>
      <Steps>
        <Step title={"Telegram seanslarini ko‘ring"}>sozlamalardagi qurilmalar ro‘yxatida notanish yoki endi kerak bo‘lmagan kompyuter seansini yoping.</Step>
        <Step title={"2FA parolini yoqing yoki yangilang"}>tartibi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA bilan akkauntni himoyalash</Link> maqolasida bor.</Step>
        <Step title={"Hamyonda ulangan saytlar ro‘yxatini toping"}>keraksiz ulanishni uzing. Menyu nomi ilova versiyasiga qarab o‘zgaradi, uzish tartibi bu maqolada rasmiy manba bilan tasdiqlanmagan.</Step>
        <Step title={"Brauzerda Fragment’dan chiqing"}>ayniqsa noutbukdan boshqalar ham foydalansa.</Step>
        <Step title={"Seed phrase va zaxira nusxani tekshiring"}>ular faqat sizda bo‘lsin. Yo‘qolsa, Fragment tiklab bermaydi.</Step>
        <Step title={"Hamyonlarni vazifaga qarab ajrating"}>saytlarga ulanish uchun deyarli bo‘sh hamyon, NFT va jamg‘arma uchun alohida hamyon tuting.</Step>
      </Steps>
      <p>Telegram’da kompyuter seansini yopsangiz, o‘sha kompyuterdan akkauntga kirish to‘xtaydi. Lekin bu hamyonning saytlarga bergan ruxsatini ham avtomatik bekor qilishi rasman tasdiqlanmagan. Shuning uchun 1- va 3-qadamni alohida bajaring.</p>
      <h2 id="nft-sovgani-blokcheynga-chiqarish-bu">NFT sovg‘ani blokcheynga chiqarish bu xavfni oshiradimi?</h2>
      <p><a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a> hujjatiga ko‘ra, kolleksion sovg‘ani TON blokcheynida NFT’ga aylantirish mumkin. Bunda Telegram uni Fragment’ga import qilish uchun havola beradi. Buning uchun amaldagi 2FA paroli kerak. Ba’zi sovg‘alarni esa faqat belgilangan sanadan keyin chiqarsa bo‘ladi.</p>
      <p><a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> 2025-yil 24-yanvarda yozilishicha, sovg‘alarni TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin. Blokcheynga chiqarilgan sovg‘a esa akkauntga kirish yo‘qolganda yoki akkaunt o‘chirilganda ham egasida qoladi.</p>
      <p>Demak, chiqarishning foydasi ham, narxi ham bor:</p>
      <ul>
        <li><b>Foydasi</b> — sovg‘a Telegram akkauntiga bog‘liq bo‘lmay qoladi.</li>
        <li><b>Narxi</b> — endi u hamyon bilan birga xavf ostida bo‘ladi, o‘tkazmani esa qaytarib bo‘lmaydi.</li>
      </ul>
      <p>Hamyonni turli saytlarga tez-tez ulasangiz, sovg‘ani Telegram ichida qoldirish xavfsizroq bo‘lishi mumkin. Chiqarish tartibi <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani TON hamyonga chiqarish</Link> maqolasida yozilgan. Tayyor kolleksion sovg‘ani hamyonsiz olmoqchi bo‘lsangiz, u botdagi NFT Market’da so‘mda sotiladi. Tafsilotlar <Link href="/gifts">sovg‘alar sahifasida</Link>.</p>
      <h2 id="yangi-walletga-oting-kabi-xabarlarni">«Yangi Wallet’ga o‘ting» kabi xabarlarni qanday ajratish mumkin?</h2>
      <p>Yangi funksiya haqidagi har qanday mish-mish firibgarlarga bahona bo‘ladi. Shu mavzuda kelishi mumkin bo‘lgan xabarlar va ularning asl maqsadi:</p>
      <CompareTable
        headers={["Xabar matni", "Aslida nima kerak", "Nima qilish kerak"]}
        rows={[
          ["«Ulanishlarni birlashtirish uchun shu havoladan hamyoningizni qayta ulang»", "Hamyoningizga o‘z saytidan ruxsat olish", "Havolani ochmang, manzilni tekshiring"],
          ["«Yangi formatga o‘tkazish uchun 12 yoki 24 so‘zni yuboring»", "Seed phrase, ya’ni hamyonning to‘liq kaliti", "Hech kimga yubormang"],
          ["«Faollashtirish uchun kichik summa TON yuboring, keyin qaytaramiz»", "Pulning o‘zi", "Yubormang: o‘tkazma qaytarilmaydi"],
          ["«Arzon Stars — faqat hamyoningizni saytimizga ulang»", "Hamyonga kirish", "Stars’ni hamyonsiz, @username orqali oling"],
          ["«Akkauntingizni tasdiqlash uchun SMS kodni yozing»", "Telegram akkauntingiz", "Kodni hech kimga bermang"],
        ]}
      />
      <p>Shubhali xabarni quyidagi belgilardan tanisa bo‘ladi:</p>
      <ul>
        <li>seed phrase, 2FA paroli yoki SMS kod so‘raladi;</li>
        <li>«10 daqiqada ulanmasangiz, hamyon bloklanadi» kabi shoshiltirish bor;</li>
        <li>havola telegram.org yoki fragment.com emas, ularga o‘xshatib yasalgan domen.</li>
      </ul>
      <p>StarsPaymee faqat @username so‘raydi, parol va SMS kod so‘ramaydi. Xizmat foydalanuvchilardan Stars va sovg‘a sotib olmaydi. Shuning uchun uning nomidan kelgan «Stars’ingizni sotib olamiz» degan xabar aldovdir. Akkauntga kirishga urinishlardan himoyalanish haqida <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">+888 akkaunt himoyasi</Link> maqolasida yozilgan.</p>
      <h2 id="hamyondan-siz-yubormagan-otkazma-chiqsa">Hamyondan siz yubormagan o‘tkazma chiqsa, nima qilasiz?</h2>
      <p>Bu kalit sizdan boshqa odamda ham bo‘lishi mumkinligini bildiradi. Kechiktirmang:</p>
      <Steps>
        <Step title={"Yangi hamyon oching"}>o‘zingiz, ishonchli ilovada. Yangi seed phrase’ni hech kimga ko‘rsatmang.</Step>
        <Step title={"Qolgan aktivlarni ko‘chiring"}>TON va NFT sovg‘alarni yangi hamyonga o‘tkazing. Eski hamyonni boshqa hech qayerga ulamang.</Step>
        <Step title={"Telegram akkauntini tekshiring"}>begona seanslarni yoping, 2FA parolini yangilang, Stars balansi va Premium holatini ilovada ko‘ring.</Step>
      </Steps>
      <Notice label={"Muhim"}>Yuborilgan TON yoki NFT’ni blokcheynda qaytarib bo‘lmaydi, Fragment ham hamyonni tiklamaydi. «Pulingizni qaytarib beramiz» deb yozadigan «yordamchilar» ko‘pincha ikkinchi aldov bo‘ladi.</Notice>
      <p>Botdagi buyurtma bo‘yicha savolingiz bo‘lsa, @StarsPaymeeSupport’ga yozing. Tashqi hamyondagi o‘tkazmalarni esa xizmat ko‘ra olmaydi va qaytara olmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://fragment.com/terms", label: "Terms of Service – Fragment" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Noutbukda hamyonni Fragment’ga ulagandim, telefonda esa hech narsa ko‘rinmayapti. Shunday bo‘lishi kerakmi?", answer: "Ulanish telefonga ham o‘tadi degan gap hozircha rasmiy tasdiqlanmagan, shuning uchun telefonda ko‘rinmasligi g‘alati emas. Baribir noutbukdagi keraksiz ulanishni uzib qo‘ying." },
  { question: "Ulanishlar qurilmalar o‘rtasida sinxronlanishini Telegram rasman e’lon qilganmi?", answer: "Tekshiruv paytida telegram.org, core.telegram.org, fragment.com va ton.org’da bunday e’lon topilmadi. Rasmiy manbada chiqmaguncha buni tasdiqlanmagan gap deb hisoblang." },
  { question: "Kimdir hamyonimga kirsa, Stars balansim ham ketadimi?", answer: "Stars hamyonda emas, Telegram akkauntida saqlanadi. Hamyon ulanishining Stars’ga ta’siri rasmiy hujjatlarda aytilmagan. Yulduzlar uchun asosiy xavf — akkaunt o‘g‘irlanishi, shuning uchun 2FA’ni yoqing." },
  { question: "Premium’ni TON hamyonsiz olishning yo‘li bormi?", answer: "Bor: @StarsPaymee_bot’da Premium @username orqali so‘mda rasmiylashtiriladi. Click, Payme, Uzum, Paynet yoki UzCard/HUMO bilan to‘lanadi, kripto kerak emas." },
  { question: "Do‘stimga Stars olib bermoqchiman. Uning hamyoni yoki Fragment akkaunti kerakmi?", answer: "Yo‘q, faqat do‘stingizning @username’ini bilsangiz bas. Yulduzlar to‘g‘ridan-to‘g‘ri uning Telegram akkauntiga tushadi." },
  { question: "Qurilmalar ro‘yxatidan noutbukni o‘chirdim. Hamyonning Fragment’ga bergan ruxsati ham bekor bo‘ldimi?", answer: "Bunga rasmiy tasdiq yo‘q. Telegram seansi va hamyon ruxsati ikki xil narsa, shuning uchun hamyon ilovasida ulangan saytlarni alohida tekshiring." },
  { question: "Seed phrase yo‘qolsa, Fragment hamyonimni tiklab beradimi?", answer: "Yo‘q. Fragment shartlarida aytilishicha, kirish ma’lumotlari yo‘qolsa, u hamyonni ham, undagi kolleksiyalarni ham tiklay olmaydi. Zaxira nusxani o‘zingiz saqlaysiz." },
  { question: "«Yangi Wallet’ni faollashtirish uchun» TON yuborishni so‘rashyapti. Yuboraymi?", answer: "Yubormang. Rasmiy manbalarda bunday talab yo‘q, blokcheyndagi o‘tkazmani esa qaytarib bo‘lmaydi." },
  { question: "Do‘stimning Premium’i hali tugamagan. Unga hozir Premium sovg‘a qilsam bo‘ladimi?", answer: "Bot faol obunasi bor akkauntga yangi Premium buyurtmasini ochmaydi: muddat amaldagi obunaga qo‘shilmaydi. Obunasi tugaganidan keyin buyurtma bering yoki unga Stars sovg‘a qiling." },
  { question: "StarsPaymee boti hamyonimni ulashni yoki parolni so‘raydimi?", answer: "Yo‘q. Bot faqat @username so‘raydi. Parol, SMS kod, seed phrase yoki hamyon ulash talab qilinmaydi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Баланс Stars и подписка Premium хранятся в аккаунте Telegram, а не в TON-кошельке. Защищают их прежде всего доступ к аккаунту и пароль 2FA. О том, что Wallet переносит подключение к Fragment с компьютера на телефон, пока пишут только в посте одного канала. Для следующей покупки кошелёк не нужен: Stars и Premium можно оформить в сумах по @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#wallet-ulanishni-telefonga-ham-kochiradi", label: "Откуда взялся слух, что Wallet переносит подключение на телефон?" },
          { href: "#stars-premium-va-sovgalar-qayerda", label: "Где хранятся Stars, Premium и подарки: в аккаунте или в кошельке?" },
          { href: "#hamyonga-begona-odam-kirsa-nimadan", label: "Что можно потерять, если в кошелёк попадёт посторонний?" },
          { href: "#stars-yoki-premium-uchun-hamyonni", label: "Нужно ли подключать кошелёк к Fragment ради Stars или Premium?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "Как купить Stars или Premium в сумах без кошелька?" },
          { href: "#noutbukda-ochiq-qolgan-ulanishni-qanday", label: "Как закрыть подключение, оставшееся на ноутбуке?" },
          { href: "#nft-sovgani-blokcheynga-chiqarish-bu", label: "Повышает ли этот риск вывод NFT-подарка в блокчейн?" },
          { href: "#yangi-walletga-oting-kabi-xabarlarni", label: "Как распознать сообщения вроде «Перейдите на новый Wallet»?" },
          { href: "#hamyondan-siz-yubormagan-otkazma-chiqsa", label: "Что делать, если из кошелька ушёл перевод, который вы не отправляли?" },
        ]}
      />
      <h2 id="wallet-ulanishni-telefonga-ham-kochiradi">Откуда взялся слух, что Wallet переносит подключение на телефон?</h2>
      <p>Слух разошёлся из поста в одном Telegram-канале. Автор пишет, что новый Telegram Wallet синхронизирует между устройствами подключения к сайтам. Если подключить кошелёк к Fragment на компьютере, это же подключение появится и на телефоне. Автор добавляет опасение: «украдут одну сессию — получат доступ ко всему».</p>
      <p>Мы проверили telegram.org, core.telegram.org, fragment.com и ton.org и не нашли подтверждения этой функции. Фраза «одна сессия — доступ ко всему» тоже не официальное заявление, а догадка автора поста.</p>
      <p>Обычно всё выглядит так. Человек открывает Fragment на рабочем ноутбуке и подключает кошелёк, чтобы купить Premium или Stars, но не доводит оплату до конца. Через несколько дней он читает пост и задумывается: «Это подключение теперь висит и на телефоне? Мои звёзды под угрозой?»</p>
      <p>На практике неважно, есть синхронизация или нет. Считайте подключение разрешением, которое выдано самому кошельку, а не одному устройству. Тогда главный вопрос другой: что лежит в кошельке и у кого от него ключ?</p>
      <h2 id="stars-premium-va-sovgalar-qayerda">Где хранятся Stars, Premium и подарки: в аккаунте или в кошельке?</h2>
      <p>Прежде чем оценивать риск, разберитесь, что у вас где лежит. Часть активов привязана к аккаунту Telegram, часть — к TON-кошельку. Чем различаются эти два баланса, подробно описано в статье <Link href="/blog/telegram-wallet-va-stars-farqi">о разнице между Wallet и Stars</Link>.</p>
      <CompareTable
        headers={["Что", "Где хранится", "Что защищает", "Если что-то пошло не так"]}
        rows={[
          ["Баланс Stars", "В аккаунте Telegram", "Доступ к аккаунту, пароль 2FA", "Официальные документы не связывают его с подключением кошелька; главный риск — угон аккаунта"],
          ["Подписка Premium", "В аккаунте Telegram", "Доступ к аккаунту, пароль 2FA", "Подпиской пользуется тот, у кого аккаунт"],
          ["Коллекционный подарок внутри Telegram", "В аккаунте Telegram", "Безопасность аккаунта", "Его можно передать другому пользователю, поэтому он рискует вместе с аккаунтом"],
          ["NFT-подарок, выведенный в блокчейн", "В TON-кошельке; даже если он привязан к профилю, владение остаётся за кошельком", "Ключ от кошелька, seed-фраза", "Останется у вас, даже если пропадёт аккаунт. Если пропадёт ключ, Fragment его не восстановит"],
          ["Коллекционные предметы Fragment (например, username или номер)", "Привязаны к TON-кошельку владельца", "Ключ от кошелька", "Fragment не восстановит ни кошелёк, ни коллекцию"],
          ["Монеты TON", "В кошельке", "Ключ от кошелька", "Перевод в блокчейне нельзя отменить"],
        ]}
      />
      <p>Строки о подарках основаны на <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts API</a>, строки о Fragment — на <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">условиях использования Fragment</a>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="hamyonga-begona-odam-kirsa-nimadan">Что можно потерять, если в кошелёк попадёт посторонний?</h2>
      <p>Нижняя часть таблицы показывает, где именно риск:</p>
      <ul>
        <li><b>Монеты TON.</b> По условиям Fragment, транзакцию в блокчейне TON нельзя отменить.</li>
        <li><b>NFT-подарки в блокчейне.</b> Они хранятся в кошельке. Даже если подарок привязан к профилю, владение остаётся за кошельком.</li>
        <li><b>Коллекционные предметы Fragment.</b> Купленные предметы привязываются к TON-кошельку владельца.</li>
      </ul>
      <p>Fragment прямо пишет: если данные для входа утеряны, он не сможет восстановить ни кошелёк, ни предметы в нём. За хранение ключей, устройства и резервных копий отвечает только пользователь.</p>
      <p>Подключение кошелька и вход в аккаунт Telegram — разные вещи. Вход в аккаунт отдельно защищён кодом и паролем 2FA. Поэтому балансу Stars и Premium угрожает прежде всего угон аккаунта.</p>
      <p>У многих покупателей кошелёк пустой и NFT в нём нет: Fragment открывали только посмотреть цены. В таком случае терять почти нечего. И всё же не оставляйте ненужное подключение. Если позже на кошелёк поступят деньги, вы можете уже не помнить о старом разрешении.</p>
      <h2 id="stars-yoki-premium-uchun-hamyonni">Нужно ли подключать кошелёк к Fragment ради Stars или Premium?</h2>
      <p>Нет. Fragment работает через TON-кошелёк, и покупки на нём привязываются к кошельку владельца. В его условиях также сказано, что перед выводом средств пользователь сам проверяет, тот ли кошелёк подключён. Человеку, далёкому от криптовалют, это лишний шаг и лишний риск.</p>
      <p>В @StarsPaymee_bot оплата идёт в сумах, а нужен только @username. TON-кошелёк, криптовалюта, иностранная карта и VPN не нужны.</p>
      <p>Цены:</p>
      <ul>
        <li><b>Stars</b> — {som(STARS_PER_UNIT_UZS, "ru")} за штуку при переводе на карту UzCard/HUMO или оплате с баланса бота, {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} за штуку при оплате через Click, Payme, Uzum или Paynet. Минимальный заказ — 50 Stars.</li>
        <li><b>Premium</b> — 3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")}. Цена одинакова при любом способе оплаты. Цену месячного тарифа смотрите в боте.</li>
      </ul>
      <p>Подробности — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. Если вы сидите в Telegram Desktop, прочитайте также статью о том, <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">как заказать с компьютера</Link>. StarsPaymee — независимый сервис и не действует от имени Telegram.</p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">Как купить Stars или Premium в сумах без кошелька?</h2>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в @StarsPaymee_bot с компьютера или телефона.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук) или срок Premium.</Step>
        <Step title={"Введите @username"}>свой или друга. Пароль и SMS-код не нужны.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота. Цена Stars зависит от способа.</Step>
        <Step title={"Проверьте итоговую сумму и оплатите"}>заказ обычно приходит автоматически за несколько секунд (примерно за 5 секунд).</Step>
        <Step title={"Проверьте результат"}>откройте в приложении баланс Stars или значок Premium. Если что-то не так, напишите в @StarsPaymeeSupport.</Step>
      </Steps>
      <Notice label={"Важно"}>Если на аккаунте уже действует Premium, бот не откроет новый заказ Premium: срок не добавляется к текущей подписке. Перед заказом проверьте, когда она заканчивается.</Notice>
      <h2 id="noutbukda-ochiq-qolgan-ulanishni-qanday">Как закрыть подключение, оставшееся на ноутбуке?</h2>
      <p>Если вы открывали Fragment на компьютере, сделайте всё за один раз:</p>
      <Steps>
        <Step title={"Проверьте сеансы Telegram"}>в списке устройств в настройках завершите незнакомые или больше не нужные сеансы на компьютерах.</Step>
        <Step title={"Включите или смените пароль 2FA"}>как это сделать, описано в статье <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">о защите аккаунта с помощью 2FA</Link>.</Step>
        <Step title={"Найдите в кошельке список подключённых сайтов"}>отключите ненужное. Название меню зависит от версии приложения, а порядок отключения в этой статье официальными источниками не подтверждён.</Step>
        <Step title={"Выйдите из Fragment в браузере"}>особенно если ноутбуком пользуется кто-то ещё.</Step>
        <Step title={"Проверьте seed-фразу и резервную копию"}>они должны быть только у вас. Если они пропадут, Fragment ничего не восстановит.</Step>
        <Step title={"Разделите кошельки по задачам"}>для подключения к сайтам держите почти пустой кошелёк, а для NFT и накоплений — отдельный.</Step>
      </Steps>
      <p>Если завершить сеанс компьютера в Telegram, с этого компьютера больше нельзя будет войти в аккаунт. Но официально не подтверждено, что при этом отзываются и разрешения, которые кошелёк выдал сайтам. Поэтому шаги 1 и 3 выполняйте отдельно.</p>
      <h2 id="nft-sovgani-blokcheynga-chiqarish-bu">Повышает ли этот риск вывод NFT-подарка в блокчейн?</h2>
      <p>Согласно документации <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>, коллекционный подарок можно превратить в NFT в блокчейне TON. Telegram при этом выдаёт ссылку для импорта на Fragment. Для этого нужен действующий пароль 2FA. Некоторые подарки можно вывести только после определённой даты.</p>
      <p>В <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блоге Telegram</a> 24 января 2025 года написали, что подарки можно передавать или выставлять на аукцион через блокчейн TON. Выведенный в блокчейн подарок остаётся у владельца, даже если тот потерял доступ к аккаунту или удалил его.</p>
      <p>У вывода есть и плюс, и цена:</p>
      <ul>
        <li><b>Плюс</b> — подарок больше не зависит от аккаунта Telegram.</li>
        <li><b>Цена</b> — теперь он рискует вместе с кошельком, а перевод нельзя отменить.</li>
      </ul>
      <p>Если вы часто подключаете кошелёк к разным сайтам, надёжнее, возможно, оставить подарок внутри Telegram. Как выводить, описано в статье <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">о выводе NFT-подарка в TON-кошелёк</Link>. Готовый коллекционный подарок можно купить без кошелька, за сумы, в NFT Market в боте. Подробности — на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="yangi-walletga-oting-kabi-xabarlarni">Как распознать сообщения вроде «Перейдите на новый Wallet»?</h2>
      <p>Любой слух о новой функции мошенники используют как повод. Вот какие сообщения могут прийти на эту тему и чего на самом деле хотят их авторы:</p>
      <CompareTable
        headers={["Текст сообщения", "Что им нужно на самом деле", "Что делать"]}
        rows={[
          ["«Переподключите кошелёк по этой ссылке, чтобы объединить подключения»", "Доступ к вашему кошельку со своего сайта", "Не открывайте ссылку, проверьте адрес"],
          ["«Пришлите 12 или 24 слова для перехода на новый формат»", "Seed-фраза, то есть полный ключ от кошелька", "Никому не отправляйте"],
          ["«Отправьте немного TON для активации, потом вернём»", "Сами деньги", "Не отправляйте: перевод не вернуть"],
          ["«Дешёвые Stars — только подключите кошелёк к нашему сайту»", "Доступ к кошельку", "Покупайте Stars без кошелька, по @username"],
          ["«Напишите SMS-код, чтобы подтвердить аккаунт»", "Ваш аккаунт Telegram", "Никому не сообщайте код"],
        ]}
      />
      <p>Признаки подозрительного сообщения:</p>
      <ul>
        <li>просят seed-фразу, пароль 2FA или SMS-код;</li>
        <li>торопят: «не подключитесь за 10 минут — кошелёк заблокируют»;</li>
        <li>ссылка ведёт не на telegram.org или fragment.com, а на похожий на них домен.</li>
      </ul>
      <p>StarsPaymee спрашивает только @username, пароль и SMS-код не запрашивает. Сервис не покупает Stars и подарки у пользователей. Поэтому сообщение от его имени с предложением «выкупить ваши Stars» — обман. О защите от попыток войти в аккаунт читайте в статье <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">о защите аккаунта на +888</Link>.</p>
      <h2 id="hamyondan-siz-yubormagan-otkazma-chiqsa">Что делать, если из кошелька ушёл перевод, который вы не отправляли?</h2>
      <p>Это значит, что ключ может быть не только у вас. Действуйте сразу:</p>
      <Steps>
        <Step title={"Создайте новый кошелёк"}>сами, в надёжном приложении. Новую seed-фразу никому не показывайте.</Step>
        <Step title={"Перенесите оставшиеся активы"}>переведите TON и NFT-подарки на новый кошелёк. Старый больше никуда не подключайте.</Step>
        <Step title={"Проверьте аккаунт Telegram"}>завершите чужие сеансы, смените пароль 2FA, посмотрите в приложении баланс Stars и статус Premium.</Step>
      </Steps>
      <Notice label={"Важно"}>Отправленные TON или NFT в блокчейне не вернуть, и Fragment кошелёк не восстановит. «Помощники», которые обещают «вернуть ваши деньги», часто оказываются вторым обманом.</Notice>
      <p>Если есть вопрос по заказу в боте, напишите в @StarsPaymeeSupport. Переводы во внешнем кошельке сервис не видит и вернуть их не может.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://fragment.com/terms", label: "Terms of Service – Fragment" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Я подключил кошелёк к Fragment на ноутбуке, а на телефоне ничего не видно. Так и должно быть?", answer: "Официально не подтверждено, что подключение переносится на телефон, так что в этом нет ничего странного. Но лишнее подключение на ноутбуке всё равно стоит отключить." },
  { question: "Telegram официально объявлял о синхронизации подключений между устройствами?", answer: "На момент проверки такого объявления не было ни на telegram.org, ни на core.telegram.org, ни на fragment.com, ни на ton.org. Пока об этом не напишет официальный источник, считайте это неподтверждённым слухом." },
  { question: "Если кто-то получит доступ к моему кошельку, баланс Stars тоже пропадёт?", answer: "Stars хранятся в аккаунте Telegram, а не в кошельке. Официальные документы не говорят, что подключение кошелька как-то влияет на Stars. Главный риск для звёзд — угон аккаунта, поэтому включите 2FA." },
  { question: "Можно ли получить Premium без TON-кошелька?", answer: "Можно: в @StarsPaymee_bot Premium оформляется в сумах по @username. Оплатить можно через Click, Payme, Uzum, Paynet или картой UzCard/HUMO, криптовалюта не нужна." },
  { question: "Хочу купить Stars другу. Нужен его кошелёк или аккаунт на Fragment?", answer: "Нет, достаточно знать @username друга. Звёзды придут прямо в его аккаунт Telegram." },
  { question: "Я удалил ноутбук из списка устройств. Разрешение кошелька для Fragment тоже отозвалось?", answer: "Официального подтверждения этому нет. Сеанс Telegram и разрешение кошелька — разные вещи, поэтому подключённые сайты проверьте отдельно в приложении кошелька." },
  { question: "Если я потеряю seed-фразу, Fragment восстановит кошелёк?", answer: "Нет. По условиям Fragment, при потере данных для входа он не может восстановить ни кошелёк, ни коллекционные предметы в нём. Резервную копию храните сами." },
  { question: "Просят отправить TON «для активации нового Wallet». Отправлять?", answer: "Не отправляйте. В официальных источниках такого требования нет, а перевод в блокчейне не отменить." },
  { question: "У друга ещё не закончился Premium. Можно подарить ему Premium прямо сейчас?", answer: "Бот не откроет новый заказ Premium для аккаунта с действующей подпиской: срок к ней не добавляется. Закажите после окончания подписки или подарите другу Stars." },
  { question: "Бот StarsPaymee попросит подключить кошелёк или ввести пароль?", answer: "Нет. Боту нужен только @username. Пароль, SMS-код, seed-фраза и подключение кошелька не требуются." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Your Stars balance and Premium subscription are stored on your Telegram account, not in a TON wallet. What protects them is access to that account and your 2FA password. So far, the claim that Wallet copies a desktop Fragment connection to your phone appears only in a channel post. You don’t need a wallet to buy more: you can get Stars and Premium in soums with just a @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#wallet-ulanishni-telefonga-ham-kochiradi", label: "Where did the claim about Wallet syncing connections to your phone come from?" },
          { href: "#stars-premium-va-sovgalar-qayerda", label: "Where are Stars, Premium and gifts stored: on your account or in your wallet?" },
          { href: "#hamyonga-begona-odam-kirsa-nimadan", label: "What could you lose if a stranger gets into your wallet?" },
          { href: "#stars-yoki-premium-uchun-hamyonni", label: "Do you need to connect a wallet to Fragment to buy Stars or Premium?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "How to buy Stars or Premium in soums without a wallet" },
          { href: "#noutbukda-ochiq-qolgan-ulanishni-qanday", label: "How to close a connection left open on a laptop" },
          { href: "#nft-sovgani-blokcheynga-chiqarish-bu", label: "Does moving an NFT gift to the blockchain increase the risk?" },
          { href: "#yangi-walletga-oting-kabi-xabarlarni", label: "How to spot “switch to the new Wallet” messages" },
          { href: "#hamyondan-siz-yubormagan-otkazma-chiqsa", label: "What to do if a transfer you didn’t make leaves your wallet" },
        ]}
      />
      <h2 id="wallet-ulanishni-telefonga-ham-kochiradi">Where did the claim about Wallet syncing connections to your phone come from?</h2>
      <p>The claim started in a post on one Telegram channel. It says the new Telegram Wallet syncs website connections across your devices. So if you connect your wallet to Fragment on a computer, the same connection would also appear on your phone. The author added a warning: “if one session is stolen, they get access to everything.”</p>
      <p>When we checked, we couldn’t find this feature confirmed on telegram.org, core.telegram.org, fragment.com or ton.org. The “one session gives access to everything” line isn’t an official statement either. It’s the post author’s guess.</p>
      <p>A typical case looks like this. Someone opens Fragment on a work laptop and connects a wallet to buy Premium or Stars, but never finishes paying. A few days later they read the post and ask: “Is that connection on my phone now too? Are my Stars at risk?”</p>
      <p>For practical purposes, it doesn’t matter whether syncing exists. Think of a connection as permission given to the wallet itself, not to one device. Then the real question changes: what is in the wallet, and who has the key?</p>
      <h2 id="stars-premium-va-sovgalar-qayerda">Where are Stars, Premium and gifts stored: on your account or in your wallet?</h2>
      <p>Before you judge the risk, check where each of your assets is stored. Some are tied to your Telegram account and some to a TON wallet. Our article on the <Link href="/blog/telegram-wallet-va-stars-farqi">difference between Wallet and Stars</Link> explains the two balances in detail.</p>
      <CompareTable
        headers={["Asset", "Where it’s stored", "What protects it", "If something goes wrong"]}
        rows={[
          ["Stars balance", "Your Telegram account", "Account access, 2FA password", "Official docs don’t link it to wallet connections. The main risk is account theft"],
          ["Premium subscription", "Your Telegram account", "Account access, 2FA password", "Whoever has the account gets the subscription"],
          ["Collectible gift inside Telegram", "Your Telegram account", "Account security", "It can be transferred to another user, so it’s at risk if the account is"],
          ["NFT gift moved to the blockchain", "TON wallet. Even when linked to a profile, the wallet stays the owner", "Wallet key, seed phrase", "Stays yours if you lose the account. If you lose the key, Fragment can’t restore it"],
          ["Fragment collectibles (e.g. usernames or numbers)", "Tied to the owner’s TON wallet", "Wallet key", "Fragment can restore neither the wallet nor the collectible"],
          ["TON coins", "The wallet", "Wallet key", "Blockchain transfers can’t be reversed"],
        ]}
      />
      <p>The gift rows are based on the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API documentation</a>. The Fragment rows are based on the <a href={"https://fragment.com/terms"} target="_blank" rel="noopener noreferrer">Fragment Terms of Service</a>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="hamyonga-begona-odam-kirsa-nimadan">What could you lose if a stranger gets into your wallet?</h2>
      <p>The bottom half of the table shows where the risk is:</p>
      <ul>
        <li><b>TON coins.</b> Under Fragment’s terms, transactions on the TON blockchain can’t be reversed.</li>
        <li><b>NFT gifts on the blockchain.</b> They’re kept in the wallet. Even if one is linked to your profile, the wallet stays the owner.</li>
        <li><b>Fragment collectibles.</b> Anything you buy there is tied to the owner’s TON wallet.</li>
      </ul>
      <p>Fragment says plainly that if you lose your credentials, it can’t restore the wallet or any collectibles in it. You alone are responsible for keeping your keys, devices and backups safe.</p>
      <p>A wallet connection and access to your Telegram account are different things. Your account has its own protection: a login code and a 2FA password. So the main risk to your Stars balance and Premium is account theft.</p>
      <p>Many buyers have an empty wallet with no NFTs in it. They only opened Fragment to check prices. In that case there’s almost nothing to lose. Still, don’t leave connections you don’t need. If money lands in the wallet later, you may have forgotten about the old permission.</p>
      <h2 id="stars-yoki-premium-uchun-hamyonni">Do you need to connect a wallet to Fragment to buy Stars or Premium?</h2>
      <p>No. Fragment runs on TON wallets, and anything you buy there is tied to the owner’s wallet. Its terms also say that checking you’ve connected the right wallet before a withdrawal is your job. If you don’t use crypto, that’s an extra step and an extra risk.</p>
      <p>Through @StarsPaymee_bot you pay in soums and only need a @username. You don’t need a TON wallet, crypto, an international card or a VPN.</p>
      <p>Prices:</p>
      <ul>
        <li><b>Stars</b>: one Star costs {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. The minimum order is 50 Stars.</li>
        <li><b>Premium</b>: {som(premium(3), "en")} for 3 months, {som(premium(6), "en")} for 6 months, {som(premium(12), "en")} for 12 months. The price is the same for every payment method. The bot shows the price of the 1-month plan.</li>
      </ul>
      <p>See the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages for details. If you use Telegram Desktop, see our article on <Link href="/blog/telegram-desktop-wallet-havolasi-ichki-hamyon">ordering from a computer</Link>. StarsPaymee is an independent service and doesn’t act on Telegram’s behalf.</p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">How to buy Stars or Premium in soums without a wallet</h2>
      <Steps>
        <Step title={"Open the bot"}>go to @StarsPaymee_bot on your computer or phone.</Step>
        <Step title={"Pick a product"}>Stars (50 or more) or a Premium plan.</Step>
        <Step title={"Enter the @username"}>yours or a friend’s. You won’t be asked for a password or SMS code.</Step>
        <Step title={"Choose how to pay"}>Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), UzCard/HUMO card transfer, or bot balance. The price of Stars depends on the method.</Step>
        <Step title={"Check the total and pay"}>orders usually arrive automatically within a few seconds (about 5).</Step>
        <Step title={"Check the result"}>open your Stars balance or look for the Premium badge in the app. If something’s wrong, write to @StarsPaymeeSupport.</Step>
      </Steps>
      <Notice label={"Important"}>The bot won’t open a new Premium order for an account that already has an active subscription, because the new time isn’t added on top of the current plan. Check when the subscription ends before you order.</Notice>
      <h2 id="noutbukda-ochiq-qolgan-ulanishni-qanday">How to close a connection left open on a laptop</h2>
      <p>If you opened Fragment on a computer, do all of this in one go:</p>
      <Steps>
        <Step title={"Review your Telegram sessions"}>in the devices list in Settings, end any session from a computer you don’t recognize or no longer use.</Step>
        <Step title={"Turn on or update your 2FA password"}>our guide to <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account with 2FA</Link> walks you through it.</Step>
        <Step title={"Find the list of connected sites in your wallet"}>disconnect the ones you don’t need. The menu name depends on the app version. This article doesn’t confirm the exact disconnect steps from an official source.</Step>
        <Step title={"Log out of Fragment in the browser"}>especially if other people use the laptop.</Step>
        <Step title={"Check your seed phrase and backup"}>only you should have them. If you lose them, Fragment won’t restore them.</Step>
        <Step title={"Use separate wallets for separate jobs"}>keep a nearly empty wallet for connecting to sites, and a different one for NFTs and savings.</Step>
      </Steps>
      <p>Ending a computer session in Telegram stops that computer from accessing your account. But there’s no official confirmation that it also cancels the permissions your wallet gave to websites. Do steps 1 and 3 separately.</p>
      <h2 id="nft-sovgani-blokcheynga-chiqarish-bu">Does moving an NFT gift to the blockchain increase the risk?</h2>
      <p>According to the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a> docs, you can turn a collectible gift into an NFT on the TON blockchain. Telegram then gives you a link to import it on Fragment. You need your current 2FA password to do this. Some gifts can only be exported after a set date.</p>
      <p>On January 24, 2025, the <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a> announced that gifts can be transferred or auctioned via the TON blockchain. A gift moved to the blockchain stays with its owner even if they lose access to their account or delete it.</p>
      <p>So moving a gift has a benefit and a cost:</p>
      <ul>
        <li><b>The benefit</b>: the gift no longer depends on your Telegram account.</li>
        <li><b>The cost</b>: it now shares your wallet’s risks, and transfers can’t be reversed.</li>
      </ul>
      <p>If you often connect your wallet to different sites, keeping the gift inside Telegram may be safer. Our article on <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">moving an NFT gift to a TON wallet</Link> explains the process. If you want a ready-made collectible gift without a wallet, the NFT Market in the bot sells them in soums. See the <Link href="/gifts">gifts page</Link> for details.</p>
      <h2 id="yangi-walletga-oting-kabi-xabarlarni">How to spot “switch to the new Wallet” messages</h2>
      <p>Scammers use every rumor about a new feature as an excuse. Here are messages you might get on this topic and what they’re really after:</p>
      <CompareTable
        headers={["What the message says", "What they actually want", "What to do"]}
        rows={[
          ["“Reconnect your wallet through this link to merge your connections”", "Your wallet’s permission for their own site", "Don’t open the link. Check the address"],
          ["“Send your 12 or 24 words to upgrade to the new format”", "Your seed phrase, which is the full key to your wallet", "Never send it to anyone"],
          ["“Send a small amount of TON to activate, we’ll refund it”", "Your money", "Don’t send it. Transfers can’t be reversed"],
          ["“Cheap Stars, just connect your wallet to our site”", "Access to your wallet", "Buy Stars without a wallet, using your @username"],
          ["“Enter the SMS code to verify your account”", "Your Telegram account", "Never share the code"],
        ]}
      />
      <p>Signs that a message is suspicious:</p>
      <ul>
        <li>it asks for your seed phrase, 2FA password or SMS code;</li>
        <li>it rushes you, e.g. “connect within 10 minutes or your wallet will be blocked”;</li>
        <li>the link isn’t telegram.org or fragment.com but a lookalike domain.</li>
      </ul>
      <p>StarsPaymee only asks for a @username, never a password or SMS code. The service doesn’t buy Stars or gifts from users. So any “we’ll buy your Stars” message sent in its name is a scam. Our article on <Link href="/blog/888-akkauntga-kirish-urinishlari-himoya">protecting +888 accounts</Link> covers how to block attempts to log in to your account.</p>
      <h2 id="hamyondan-siz-yubormagan-otkazma-chiqsa">What to do if a transfer you didn’t make leaves your wallet</h2>
      <p>It means someone else may also have your key. Act right away:</p>
      <Steps>
        <Step title={"Create a new wallet"}>do it yourself, in a trusted app. Don’t show the new seed phrase to anyone.</Step>
        <Step title={"Move what’s left"}>transfer your TON and NFT gifts to the new wallet. Don’t connect the old wallet anywhere again.</Step>
        <Step title={"Check your Telegram account"}>end unknown sessions, update your 2FA password, and check your Stars balance and Premium status in the app.</Step>
      </Steps>
      <Notice label={"Important"}>Sent TON or NFTs can’t be reversed on the blockchain, and Fragment won’t restore your wallet. “Helpers” who offer to get your money back are often running a second scam.</Notice>
      <p>If you have a question about a bot order, write to @StarsPaymeeSupport. The service can’t see or reverse transfers made from external wallets.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://fragment.com/terms", label: "Terms of Service – Fragment" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I connected my wallet to Fragment on my laptop, but nothing shows up on my phone. Is that normal?", answer: "Yes. The claim that connections carry over to your phone hasn’t been officially confirmed, so seeing nothing there is normal. Still, disconnect the laptop connection if you no longer need it." },
  { question: "Has Telegram officially announced that connections sync across devices?", answer: "When we checked, there was no such announcement on telegram.org, core.telegram.org, fragment.com or ton.org. Treat it as unconfirmed until an official source says otherwise." },
  { question: "If someone gets into my wallet, will my Stars balance be gone too?", answer: "Stars are stored on your Telegram account, not in a wallet. Official docs don’t say a wallet connection affects Stars at all. The real threat to your Stars is account theft, so turn on 2FA." },
  { question: "Can I get Premium without a TON wallet?", answer: "Yes. @StarsPaymee_bot gives Premium to a @username, and you pay in soums. Pay with Click, Payme, Uzum, Paynet or UzCard/HUMO. No crypto needed." },
  { question: "I want to buy Stars for a friend. Do I need their wallet or Fragment account?", answer: "No. All you need is your friend’s @username. The Stars go straight to their Telegram account." },
  { question: "I removed my laptop from the devices list. Does that also cancel my wallet’s permission on Fragment?", answer: "There’s no official confirmation of that. A Telegram session and a wallet permission are separate things, so check connected sites in your wallet app separately." },
  { question: "If I lose my seed phrase, can Fragment restore my wallet?", answer: "No. Fragment’s terms say that if you lose your credentials, it can restore neither the wallet nor the collectibles in it. Keeping the backup safe is up to you." },
  { question: "Someone is asking me to send TON “to activate the new Wallet.” Should I?", answer: "No. Official sources mention no such requirement, and blockchain transfers can’t be reversed." },
  { question: "My friend’s Premium hasn’t expired yet. Can I gift them Premium now?", answer: "The bot won’t open a new Premium order for an account with an active subscription, because the extra time isn’t added to the current plan. Order after it ends, or gift them Stars instead." },
  { question: "Will the StarsPaymee bot ask me to connect my wallet or enter a password?", answer: "No. The bot only asks for a @username. It never asks for a password, SMS code or seed phrase, or for you to connect a wallet." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  keywords: ["fragment hamyon ulanishi stars xavfi","fragmentga hamyon ulash xavfsizmi","telegram wallet sinxronlash kompyuter telefon","hamyonsiz stars sotib olish","fragmentsiz premium olish so‘mda","ton hamyon sessiya o‘g‘irlanishi","telegram stars balansi xavfsizligi","подключение кошелька к fragment опасно","telegram wallet синхронизация сессий","купить звезды без кошелька","fragment сессия кошелька украли"],
  howToSteps: [
    { name: "Botni oching", text: "kompyuter yoki telefonda @StarsPaymee_bot’ga kiring." },
    { name: "Mahsulotni tanlang", text: "Stars (kamida 50 dona) yoki Premium muddatini belgilang." },
    { name: "@username’ni kiriting", text: "o‘zingiznikini yoki do‘stingiznikini. Parol va SMS kod so‘ralmaydi." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi. Stars narxi usulga qarab farq qiladi." },
    { name: "Yakuniy summani tekshirib, to‘lang", text: "buyurtma odatda bir necha soniyada (taxminan 5 soniya) avtomatik yetkaziladi." },
    { name: "Natijani tekshiring", text: "ilovada Stars balansini yoki Premium belgisini oching. Muammo bo‘lsa, @StarsPaymeeSupport’ga yozing." },
  ],
  locales: {
    uz: {
      title: "Fragment’dagi hamyon ulanishi Stars balansiga xavf tug‘diradimi?",
      excerpt: "Stars va Premium Telegram akkauntida turadi, shuning uchun ular uchun asosiy xavf hamyon ulanishi emas, akkaunt o‘g‘irlanishi. Maqolada aktivlar jadvali, ulanishni yopish va hamyonsiz xarid qadamlari bor.",
      metaTitle: "Fragment’dagi hamyon ulanishi Stars balansiga xavf",
      metaDescription: "Stars va Premium Telegram akkauntida turadi, shuning uchun ular uchun asosiy xavf hamyon ulanishi emas, akkaunt o‘g‘irlanishi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Подключение кошелька к Fragment: угрожает ли это балансу Stars?",
      excerpt: "Stars и Premium хранятся в аккаунте Telegram, поэтому главный риск для них — угон аккаунта, а не подключение кошелька. В статье: таблица активов, отключение доступа и покупка без кошелька.",
      metaTitle: "Подключение кошелька к Fragment",
      metaDescription: "Stars и Premium хранятся в аккаунте Telegram, поэтому главный риск для них — угон аккаунта, а не подключение кошелька.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Does connecting a wallet to Fragment put your Telegram Stars at risk?",
      excerpt: "The main risk to Stars and Premium is someone taking over your Telegram account, not a wallet connection. This guide shows where each asset is stored, how to close old connections and how to buy without a wallet.",
      metaTitle: "Does connecting a wallet to Fragment put your Telegram",
      metaDescription: "The main risk to Stars and Premium is someone taking over your Telegram account, not a wallet connection.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
