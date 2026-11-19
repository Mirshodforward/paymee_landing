import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "gram-wallet-mytonwallet-stars-premium-xaridi";

/**
 * Gram Wallet chiqdi: Stars va Premium uchun MyTonWallet’dan ko‘chish kerakmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-19): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Fragment'da Stars yoki Premium uchun MyTonWallet'dagi TON bilan to'laydigan foydalanuvchi App Store'da Gram Wallet chiqqanini ko'rib, «gram wallet stars sotib olish» deb qidiradi: xarid uchun yangi ilovaga o'tishi kerakmi, «nomi o'zgaradi» degan gap xaridiga ta'sir qiladimi, yoki hamyonsiz so'mda olgani qulaymi — shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-19):
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://core.telegram.org/api/gifts
 *   https://fragment.com/about
 *   https://ton.org/media
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
  return <p>Stars yoki Premium olish uchun yangi Gram Wallet ilovasini o‘rnatish shart emas. Fragment’da MyTonWallet’dagi TON bilan avvalgidek to‘layverasiz. Yulduzlar va obuna hamyonga emas, Telegram akkauntiga tushadi. TON bilan ovora bo‘lishni istamasangiz, ikkalasini hamyonsiz ham olasiz: so‘mda to‘laysiz, faqat @username kiritasiz.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#stars-yoki-premium-uchun-gram", label: "Stars yoki Premium uchun Gram Wallet’ga o‘tish kerakmi?" },
          { href: "#postdagi-davolarning-qaysi-biri-xaridingizga", label: "Postdagi da’volarning qaysi biri xaridingizga tegadi?" },
          { href: "#nomi-ozgaradi-degan-gap-fragmentdagi", label: "«Nomi o‘zgaradi» degan gap Fragment’dagi to‘lovga ta’sir qiladimi?" },
          { href: "#yangi-hamyon-ilovasini-sinamoqchi-bolsangiz", label: "Yangi hamyon ilovasini sinamoqchi bo‘lsangiz, qanday tartibda ish ko‘rasiz?" },
          { href: "#ton-hamyon-orqali-yoki-somda", label: "TON hamyon orqali yoki so‘mda: Stars va Premium uchun qaysi yo‘l qulay?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "Hamyonsiz, so‘mda Stars yoki Premium qanday olinadi?" },
          { href: "#hamyon-baribir-qachon-kerak-boladi", label: "Hamyon baribir qachon kerak bo‘ladi?" },
          { href: "#gram-walletga-oting-stars-arzonlashadi", label: "«Gram Wallet’ga o‘ting, Stars arzonlashadi» degan xabarga qanday qarash kerak?" },
        ]}
      />
      <h2 id="stars-yoki-premium-uchun-gram">Stars yoki Premium uchun Gram Wallet’ga o‘tish kerakmi?</h2>
      <p>Fragment o‘z sahifasida TON hamyonga misol qilib TonKeeper va MyTonWallet’ni keltiradi (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment qanday ishlaydi</a>). Shu paytgacha MyTonWallet bilan to‘lab kelgan bo‘lsangiz, hech narsani almashtirmay davom etaverasiz.</p>
      <p>Gram Wallet haqidagi gap Telegram kanallarida tarqalgan bir postdan boshlangan. Unda App Store’da shu nomli ilova chiqqani yozilgan. Ammo ilovani kim va nima uchun chiqargani rasmiy manbada tasdiqlanmagan. Xaridni bunday ilovaga bog‘lashga asos yo‘q.</p>
      <p>Ikki ishni bir-biridan ajrating:</p>
      <ul>
        <li><b>Bugungi xarid.</b> Stars yoki Premium hozir kerak. To‘lovni ishlab turgan hamyon bilan qilasiz.</li>
        <li><b>Yangi ilovani sinash.</b> Bu ixtiyoriy. Uni shoshilmay, xariddan alohida qilasiz.</li>
      </ul>
      <p>Masalan, ertaga ukangizning tug‘ilgan kuni va unga Premium sovg‘a qilmoqchisiz. Notanish ilovani o‘rnatib, unga mablag‘ ko‘chirish uchun aynan shu kun eng noqulay vaqt. Fragment’da qaysi hamyonni tanlash haqida alohida maqola bor: <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">Fragment’dagi hamyon tanlovi</Link>.</p>
      <h2 id="postdagi-davolarning-qaysi-biri-xaridingizga">Postdagi da’volarning qaysi biri xaridingizga tegadi?</h2>
      <p>Postda kuzatuv bilan taxmin aralashib ketgan. Har birini alohida olsak, hech biri Stars yoki Premium xaridini o‘zgartirmaydi.</p>
      <CompareTable
        headers={["Da’vo", "Holati", "Xaridingizga ta’siri"]}
        rows={[
          ["App Store’da «Gram Wallet» ilovasi paydo bo‘ldi", "Post kuzatuvi. Ilova sahifasini do‘konda o‘zingiz ko‘rasiz, ishlab chiquvchisi rasman tasdiqlanmagan", "Yo‘q"],
          ["MyTonWallet yaqinda nomini o‘zgartiradi", "Post muallifining taxmini. MyTonWallet’ning rasmiy e’loni topilmadi", "Yo‘q"],
          ["Gram Wallet faqat TON ekotizimi uchun qoladi", "Taxmin, tasdiqlanmagan", "Yo‘q"],
          ["Gram Wallet’da Telegram orqali ikki bosqichli himoya bor", "Tasdiqlanmagan", "Yo‘q. Telegram kodi va 2FA parolini baribir begona ilovaga bermang"],
          ["«Gram» nomi TON bilan bog‘liq", "ton.org’da Gram tokenining standart belgisi ko‘rsatilgan: ko‘k olmos ustida oq yulduz", "Stars va Premium oluvchisiga aloqasi yo‘q"],
        ]}
      />
      <p>Belgi haqidagi ma’lumot <a href={"https://ton.org/media"} target="_blank" rel="noopener noreferrer">TON media sahifasida</a> bor. Undan boshqa xulosa chiqarmang.</p>
      <p>Telegram’ning o‘z 2FA paroli rasmiy hujjatda kolleksion sovg‘ani blokcheynga chiqarish bilan bog‘liq holda tilga olinadi (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Bu Telegram akkauntingiz paroli, uchinchi tomon hamyonining himoyasi emas.</p>
      <p>Ilovani kim ishlab chiqqani haqida manbalar turlicha yozadi, shuning uchun bu maqolada kimniki ekani aytilmaydi. Uni pastdagi qadamlar bo‘yicha o‘zingiz tekshirasiz.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="nomi-ozgaradi-degan-gap-fragmentdagi">«Nomi o‘zgaradi» degan gap Fragment’dagi to‘lovga ta’sir qiladimi?</h2>
      <p>Nom o‘zgarishi hozircha faqat taxmin. Rost bo‘lib chiqsa ham, Stars yoki Premium xaridiga to‘sqinlik qilishi haqida hech qanday ma’lumot yo‘q.</p>
      <p>Fragment yozishicha, TonKeeper yoki MyTonWallet kabi non-custodial hamyonlarda mablag‘ kaliti sizdan boshqa hech kimda bo‘lmaydi. Ya’ni TON ilova nomiga emas, sizdagi kalitga bog‘langan. Ilova qanday nomlanishidan qat’i nazar, zaxira so‘zlaringiz qo‘lingizda bo‘lsa, hamyonga kirish imkoni saqlanadi.</p>
      <p>Stars va Premium uchun hamyon nomi umuman ahamiyatsiz. Oluvchi Telegram akkaunti bo‘yicha belgilanadi, yulduz va obuna akkauntga tushadi.</p>
      <p>Asl xavf boshqa joyda. Nom o‘zgarishi mavzusidan foydalanib, «yangi versiyaga o‘ting» yoki «hamyonni migratsiya qiling» degan havolalar va do‘konda nusxa ilovalar chiqishi mumkin. Zaxira so‘zlarini sayt, chat yoki bot oynasiga kiritishni so‘raydigan har qanday «migratsiya» — aldov belgisi.</p>
      <p>Fragment kalit ma’lumotlarining zaxira nusxasini saqlashni maslahat beradi. Uni mish-mishlar tinchimasidan oldin tekshirib qo‘ying. Zaxira so‘zlari haqida batafsil: <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">kalitni kim saqlaydi va yo‘qolsa nima bo‘ladi</Link>.</p>
      <h3>Fragment’da to‘lashdan oldin nimani tekshirasiz?</h3>
      <ul>
        <li>Brauzer manzil satrida aynan fragment.com ochilganini.</li>
        <li>Oluvchi @username’i bir harfgacha to‘g‘ri yozilganini.</li>
        <li>Hamyon ilovasida tasdiqlash oynasidagi summa Fragment ko‘rsatgan summaga mos kelishini.</li>
        <li>Hamyonni ulash so‘rovi chatdagi havoladan emas, Fragment sahifasining o‘zidan kelganini.</li>
      </ul>
      <h2 id="yangi-hamyon-ilovasini-sinamoqchi-bolsangiz">Yangi hamyon ilovasini sinamoqchi bo‘lsangiz, qanday tartibda ish ko‘rasiz?</h2>
      <p>Sinashni hech kim man qilmaydi. Faqat asosiy mablag‘ni xavfga qo‘ymang.</p>
      <Steps>
        <Step title={"Zaxirani tekshiring"}>MyTonWallet’ning zaxira so‘zlari qog‘ozda, to‘g‘ri tartibda yozilganiga ishonch hosil qiling.</Step>
        <Step title={"Ilovani do‘konning o‘zidan qidiring"}>chat yoki kanaldagi havolani bosmang. App Store qidiruvidan topib, ishlab chiquvchi nomi, sharhlar va oxirgi yangilanish sanasiga qarang.</Step>
        <Step title={"Asosiy hamyon kalitini kiritmang"}>sinov uchun yangi, bo‘sh hamyon oching. Eski zaxira so‘zlarini import qilmang.</Step>
        <Step title={"Kichik summa bilan sinang"}>yo‘qotsangiz achinmaydigan miqdorni o‘tkazib ko‘ring. Asosiy mablag‘ni ko‘chirishga shoshilmang.</Step>
        <Step title={"Telegram kodini va 2FA parolini hech qayerga yozmang"}>ularni faqat Telegram ilovasining o‘ziga kiritasiz.</Step>
        <Step title={"Fragment’da xaridni odatdagi hamyon bilan qiling"}>sinov tugamaguncha to‘lov hamyonini almashtirmang.</Step>
      </Steps>
      <p>Ilova biror bosqichda zaxira so‘zlarini veb-sahifaga kiritishni so‘rasa yoki Telegram kodini talab qilsa, sinovni to‘xtating va ilovani o‘chiring.</p>
      <h2 id="ton-hamyon-orqali-yoki-somda">TON hamyon orqali yoki so‘mda: Stars va Premium uchun qaysi yo‘l qulay?</h2>
      <p>Ikki yo‘l ham ishlaydi. Farqi qo‘lingizda nima borligida.</p>
      <CompareTable
        headers={["Mezon", "Fragment + TON hamyon", "@StarsPaymee_bot (so‘mda)"]}
        rows={[
          ["Nima kerak", "TON hamyon va unda TON", "Faqat oluvchining @username’i"],
          ["To‘lov", "TON", "Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi"],
          ["1 ta Stars narxi", "TON’da; so‘mdagi qiymati kursga qarab o‘zgaradi", `Karta o‘tkazmasi yoki balansdan ${som(STARS_PER_UNIT_UZS, "uz")}, Click/Payme/Uzum/Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Eng kam buyurtma", "Fragment sahifasida ko‘ring", "50 Stars"],
          ["Premium", "TON’da", `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}, hamma usulda bir xil; 1 oylik narxi botda`],
          ["Qo‘shimcha talab", "Hamyon ilovasi va zaxira so‘zlarini saqlash", "Xalqaro karta, kripto hamyon yoki VPN kerak emas"],
          ["Yetkazish", "Bu maqolada o‘lchanmagan", "Odatda bir necha soniya (~5 soniya), avtomatik"],
        ]}
      />
      <p><b>TON yo‘li qachon mantiqli?</b> TON allaqachon hamyoningizda bo‘lsa va uni boshqa ishga ishlatmoqchi bo‘lmasangiz.</p>
      <p><b>So‘mdagi yo‘l qachon qulay?</b> TON sotib olish, kursni kuzatish va hamyonni saqlash bilan ovora bo‘lishni istamasangiz. Hamyoni yo‘q odamga sovg‘a olib bermoqchi bo‘lsangiz ham shu yo‘l oson.</p>
      <p>Misol: Click’da pul turibdi, ammo kartadan o‘tkazma qilish ham mumkin. Stars uchun usulni tanlashdan oldin ikki narxni solishtiring: karta o‘tkazmasi yoki balansdan {som(STARS_PER_UNIT_UZS, "uz")}, onlayn to‘lovda {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Premium’da esa farq yo‘q, qaysi usul qulay bo‘lsa, o‘shani tanlaysiz.</p>
      <p>Narxlar <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida jamlangan. Telegram ichidagi hamyondagi Gram bilan solishtirish uchun: <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">Gram bilan olaymi yoki so‘mda</Link>.</p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">Hamyonsiz, so‘mda Stars yoki Premium qanday olinadi?</h2>
      <p>StarsPaymee — mustaqil xizmat, 1,5 yildan beri ishlaydi. Butun jarayon Telegram ichida o‘tadi.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’i.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 ta) yoki Premium muddati.</Step>
        <Step title={"@username kiriting"}>o‘zingizning yoki do‘stingizning. Parol, SMS kod va hamyon so‘ralmaydi.</Step>
        <Step title={"To‘lov usulini tanlang"}>Stars narxi usulga bog‘liq: {som(STARS_PER_UNIT_UZS, "uz")} yoki {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Yakuniy summa to‘lovdan oldin ko‘rsatiladi.</Step>
        <Step title={"To‘lang va kuting"}>buyurtma odatda bir necha soniyada keladi. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi.</Step>
      </Steps>
      <p><b>Istisno:</b> oluvchida Premium obunasi faol bo‘lsa, bot yangi Premium buyurtmasini ochmaydi. Yangi muddat faol obuna ustiga qo‘shilmaydi, shuning uchun eskisi tugashini kuting. Batafsil: <Link href="/blog/telegram-premium-muddatini-uzaytirish">Premium muddatini uzaytirish</Link>.</p>
      <p>Ko‘p uchraydigan xato — username’ni xotiradan yozish. Do‘stingiz profilini Telegram’da ochib, @ belgisidan keyingi nomni nusxa oling. Pastki chiziq, nuqta yoki o‘xshash harflar (l va I) adashtirilsa, buyurtma boshqa odamga ketishi mumkin.</p>
      <p>Muammo chiqsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing. To‘liq qo‘llanma: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">O‘zbekistonda Stars sotib olish</Link>.</p>
      <h2 id="hamyon-baribir-qachon-kerak-boladi">Hamyon baribir qachon kerak bo‘ladi?</h2>
      <p>Stars va Premium uchun hamyon kerak emas. Kolleksion sovg‘alar bilan ishlaganda esa ba’zi holatlarda hamyonsiz ish bitmaydi.</p>
      <ul>
        <li><b>Sovg‘ani blokcheynga chiqarish.</b> Yo‘li: profil → Sovg‘alar → sovg‘a → Transfer → Send via Blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</li>
        <li><b>2FA parol.</b> Chiqarishda Telegram’ning o‘z 2FA paroli kerak. Natijada NFT’ni Fragment’ga import qilish uchun havola beriladi.</li>
        <li><b>Sana cheklovi.</b> Ba’zi sovg‘alarni faqat belgilangan sanadan keyin chiqarish mumkin.</li>
        <li><b>Telegram ichida o‘tkazish.</b> Kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazsa bo‘ladi, ba’zan to‘lovsiz, ba’zan Stars evaziga. Buning uchun hamyon shart emas.</li>
        <li><b>Blokcheynda o‘tkazish.</b> Blokcheyndagi buyumni hamyon ilovasi orqali boshqa odamga yoki hamyonga o‘tkazish mumkin. Fragment misol qilib Tonkeeper’dagi «NFT» bo‘limini keltiradi.</li>
      </ul>
      <p>Gram Wallet NFT yoki Telegram sovg‘alarini qo‘llashi rasman tasdiqlanmagan. Sovg‘alar uchun aynan shu ilovani tanlashga asos yo‘q.</p>
      <p>Tayyor NFT sovg‘ani hamyonsiz, so‘mda botdagi NFT Market’dan olish mumkin: <Link href="/gifts">Sovg‘alar</Link>.</p>
      <h2 id="gram-walletga-oting-stars-arzonlashadi">«Gram Wallet’ga o‘ting, Stars arzonlashadi» degan xabarga qanday qarash kerak?</h2>
      <p>Yangi ilova nomi atrofida «Gram Wallet’ga o‘ting, Stars arzon» yoki «hamyonni ulang, bonus olasiz» kabi xabarlar chiqishi mumkin. Ular rasmiy manbada tasdiqlanmagan va’dalarga tayanadi.</p>
      <p>Shubhali belgilar:</p>
      <ul>
        <li>zaxira so‘zlarini «tekshirish uchun» so‘rashadi;</li>
        <li>Telegram’ga kirish kodi yoki 2FA parolini so‘rashadi;</li>
        <li>«hamyonni ulab tasdiqlang» degan notanish havola yuborishadi;</li>
        <li>«faqat bugun» yoki «oxirgi joy» deb shoshirishadi;</li>
        <li>ilovani App Store’dan emas, tashqi havoladan yuklashni taklif qilishadi.</li>
      </ul>
      <Notice label={"Muhim"}>Stars sotib olish uchun faqat @username kerak. StarsPaymee parol, SMS kod yoki akkauntga kirishni so‘ramaydi. Xizmat mustaqil, Telegram bilan hamkorlik da’vo qilmaydi. Stars va sovg‘alarni foydalanuvchilardan sotib olmaydi — «yulduzlaringizni sotib olamiz, hamyonni ulang» degan xabar bizdan emas.</Notice>
      <p>Hamyonni akkauntga bog‘lash qachon kerakligi haqida: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">hamyonni Telegram akkauntga bog‘lash</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://ton.org/media", label: "TON Media Assets" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "MyTonWallet’dagi TON bilan Fragment’da Stars olishni davom ettirsam bo‘ladimi?", answer: "Ha. Fragment MyTonWallet’ni tavsiya qilinadigan TON hamyonlar qatorida keltiradi, yangi ilova chiqqani bu yo‘lni yopmaydi." },
  { question: "Gram Wallet o‘rnatmasam, keyinchalik Fragment’da to‘lay olmay qolamanmi?", answer: "Bunday cheklov haqida rasmiy e’lon yo‘q. Ishlab turgan hamyon bilan to‘layverasiz, o‘zgarish bo‘lsa, uni fragment.com’ning o‘zidan kuzating." },
  { question: "MyTonWallet nomi o‘zgarsa, zaxira so‘zlarim yaroqsiz bo‘lib qoladimi?", answer: "Nom o‘zgarishi hozircha taxmin. Non-custodial hamyonda kalit sizda turadi, shuning uchun zaxira so‘zlarini qog‘ozda saqlang va hech qanday «migratsiya» sahifasiga kiritmang." },
  { question: "Gram Wallet’ni Telegram ichidagi hamyon deb o‘ylab, unga TON o‘tkazsam bo‘ladimi?", answer: "Shoshilmang: ilovani kim chiqargani rasman tasdiqlanmagan, manbalar bir-biriga zid. Asosiy mablag‘ni ko‘chirmasdan oldin uni bo‘sh hamyon va kichik summa bilan sinang." },
  { question: "Yangi ilova Telegram 2FA parolimni so‘rasa, Stars xaridi uchun kiritish kerakmi?", answer: "Yo‘q. Stars yoki Premium xaridi uchun 2FA parol kerak emas. Rasmiy hujjatda u kolleksion sovg‘ani blokcheynga chiqarishda so‘ralishi aytilgan va Telegram’ning o‘zida kiritiladi." },
  { question: "TON’im yo‘q bo‘lsa, Premium’ni qanday olaman?", answer: `@StarsPaymee_bot’da @username kiritib, so‘mda to‘laysiz. 3, 6 va 12 oylik tariflar hamma usulda bir xil: ${som(premium(3), "uz")}, ${som(premium(6), "uz")}, ${som(premium(12), "uz")}.` },
  { question: "Do‘stimga Stars yubormoqchiman, unda hamyon bo‘lishi kerakmi?", answer: "Yo‘q, yulduzlar uning Telegram akkauntiga tushadi. Buyurtmada uning @username’ini profilidan nusxa olib yozsangiz kifoya." },
  { question: "Botda Stars narxi nega to‘lov usuliga qarab farq qiladi?", answer: `Narx to‘lov usuliga qarab belgilangan: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan bir dona ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Aniq summa to‘lovdan oldin ekranda chiqadi.` },
  { question: "Kolleksion sovg‘ani blokcheynga chiqarish uchun Gram Wallet kerakmi?", answer: "Bunday talab rasman aytilmagan. Telegram hujjatiga ko‘ra chiqarishdan keyin NFT’ni Fragment’ga import qilish havolasi beriladi, Fragment esa TonKeeper va MyTonWallet’ni misol qiladi." },
  { question: "Kimdir «Gram Wallet’ni ulang, Stars’ingizni sotib olamiz» desa, nima qilaman?", answer: "Havolani bosmang, kod va zaxira so‘zlarini bermang. StarsPaymee foydalanuvchilardan Stars va sovg‘a sotib olmaydi; shubha bo‘lsa, @StarsPaymeeSupport’dan so‘rang." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Устанавливать новое приложение Gram Wallet ради Stars или Premium не нужно. На Fragment можно, как и раньше, платить TON из MyTonWallet. Звёзды и подписка приходят не на кошелёк, а на аккаунт Telegram. Если возиться с TON не хочется, можно купить и то и другое без кошелька: платите в сумах и вводите только @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#stars-yoki-premium-uchun-gram", label: "Нужно ли переходить на Gram Wallet ради Stars или Premium?" },
          { href: "#postdagi-davolarning-qaysi-biri-xaridingizga", label: "Какие заявления из поста касаются вашей покупки?" },
          { href: "#nomi-ozgaradi-degan-gap-fragmentdagi", label: "Повлияет ли «смена названия» на оплату на Fragment?" },
          { href: "#yangi-hamyon-ilovasini-sinamoqchi-bolsangiz", label: "Как попробовать новый кошелёк и не рисковать деньгами?" },
          { href: "#ton-hamyon-orqali-yoki-somda", label: "TON-кошелёк или сумы: как удобнее купить Stars и Premium?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "Как купить Stars или Premium без кошелька, в сумах?" },
          { href: "#hamyon-baribir-qachon-kerak-boladi", label: "Когда кошелёк всё-таки понадобится?" },
          { href: "#gram-walletga-oting-stars-arzonlashadi", label: "Как относиться к сообщениям «Переходите на Gram Wallet — Stars подешевеют»?" },
        ]}
      />
      <h2 id="stars-yoki-premium-uchun-gram">Нужно ли переходить на Gram Wallet ради Stars или Premium?</h2>
      <p>На своей странице Fragment приводит TonKeeper и MyTonWallet как примеры TON-кошельков (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">как работает Fragment</a>). Если вы до сих пор платили через MyTonWallet, менять ничего не нужно.</p>
      <p>Разговоры о Gram Wallet начались с поста, который разошёлся по Telegram-каналам. В нём говорилось, что в App Store появилось приложение с таким названием. Кто его выпустил и зачем, официальные источники не подтверждают. Поэтому нет причин привязывать к нему свои покупки.</p>
      <p>Это два отдельных дела:</p>
      <ul>
        <li><b>Покупка сегодня.</b> Stars или Premium нужны прямо сейчас. Платите кошельком, который уже работает.</li>
        <li><b>Проба нового приложения.</b> Это по желанию. Делайте это без спешки и не одновременно с покупкой.</li>
      </ul>
      <p>Например, завтра у младшего брата день рождения, и вы хотите подарить ему Premium. Ставить в этот день незнакомое приложение и переводить туда деньги — не лучшая идея. О том, какой кошелёк выбрать на Fragment, есть отдельная статья: <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">выбор кошелька на Fragment</Link>.</p>
      <h2 id="postdagi-davolarning-qaysi-biri-xaridingizga">Какие заявления из поста касаются вашей покупки?</h2>
      <p>В посте наблюдения смешаны с догадками. Если разобрать их по одному, ни одно не меняет покупку Stars или Premium.</p>
      <CompareTable
        headers={["Заявление", "Статус", "Влияние на покупку"]}
        rows={[
          ["В App Store появилось приложение «Gram Wallet»", "Наблюдение из поста. Страницу приложения в магазине можно увидеть самому, но разработчик официально не подтверждён", "Нет"],
          ["MyTonWallet скоро сменит название", "Догадка автора поста. Официального объявления MyTonWallet не нашлось", "Нет"],
          ["Gram Wallet будет работать только с экосистемой TON", "Догадка, не подтверждено", "Нет"],
          ["В Gram Wallet есть двухэтапная защита через Telegram", "Не подтверждено", "Нет. Код Telegram и пароль 2FA в любом случае не вводите в чужие приложения"],
          ["Название «Gram» связано с TON", "На ton.org показан стандартный значок токена Gram: белая звезда на синем ромбе", "К получателю Stars и Premium отношения не имеет"],
        ]}
      />
      <p>Сведения о значке есть на <a href={"https://ton.org/media"} target="_blank" rel="noopener noreferrer">медиастранице TON</a>. Других выводов из них делать не стоит.</p>
      <p>Собственный пароль 2FA от Telegram официальная документация упоминает только в связи с выводом коллекционного подарка в блокчейн (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). Это пароль вашего аккаунта Telegram, а не защита стороннего кошелька.</p>
      <p>Кто разработал приложение, источники пишут по-разному, поэтому здесь мы этого не утверждаем. Проверить можно самостоятельно по шагам ниже.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="nomi-ozgaradi-degan-gap-fragmentdagi">Повлияет ли «смена названия» на оплату на Fragment?</h2>
      <p>Смена названия пока только догадка. Но даже если это правда, нет никаких данных, что она помешает покупке Stars или Premium.</p>
      <p>По словам Fragment, в некастодиальных кошельках вроде TonKeeper или MyTonWallet ключи от средств есть только у вас. То есть TON привязаны не к названию приложения, а к вашему ключу. Как бы ни называлось приложение, доступ к кошельку сохраняется, пока у вас есть сид-фраза.</p>
      <p>Для Stars и Premium название кошелька вообще не важно. Получатель определяется по аккаунту Telegram, и звёзды с подпиской зачисляются на аккаунт.</p>
      <p>Настоящий риск в другом. На волне новостей о переименовании могут появиться ссылки «перейдите на новую версию» или «мигрируйте кошелёк», а в магазине — приложения-клоны. Если «миграция» просит ввести сид-фразу на сайте, в чате или в окне бота, это признак обмана.</p>
      <p>Fragment советует хранить резервную копию данных для доступа к кошельку. Проверьте её, пока слухи не улеглись. Подробнее о сид-фразе: <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">кто хранит ключ и что будет, если его потерять</Link>.</p>
      <h3>Что проверить перед оплатой на Fragment?</h3>
      <ul>
        <li>В адресной строке браузера открыт именно fragment.com.</li>
        <li>@username получателя написан правильно, до последней буквы.</li>
        <li>Сумма в окне подтверждения кошелька совпадает с суммой на Fragment.</li>
        <li>Запрос на подключение кошелька пришёл со страницы Fragment, а не по ссылке из чата.</li>
      </ul>
      <h2 id="yangi-hamyon-ilovasini-sinamoqchi-bolsangiz">Как попробовать новый кошелёк и не рисковать деньгами?</h2>
      <p>Пробовать вам никто не запрещает. Главное — не ставить под удар основные средства.</p>
      <Steps>
        <Step title={"Проверьте резервную копию"}>убедитесь, что сид-фраза MyTonWallet записана на бумаге и слова стоят в правильном порядке.</Step>
        <Step title={"Ищите приложение в самом магазине"}>не переходите по ссылкам из чатов и каналов. Найдите приложение через поиск App Store и посмотрите на разработчика, отзывы и дату последнего обновления.</Step>
        <Step title={"Не вводите ключ основного кошелька"}>для теста создайте новый пустой кошелёк. Старую сид-фразу не импортируйте.</Step>
        <Step title={"Начните с небольшой суммы"}>переведите столько, сколько не жалко потерять. С основными средствами не спешите.</Step>
        <Step title={"Нигде не вводите код Telegram и пароль 2FA"}>они вводятся только в самом приложении Telegram.</Step>
        <Step title={"Покупайте на Fragment привычным кошельком"}>не меняйте кошелёк для оплаты, пока не закончите тест.</Step>
      </Steps>
      <p>Если на каком-то этапе приложение просит ввести сид-фразу на веб-странице или требует код Telegram, прекратите тест и удалите приложение.</p>
      <h2 id="ton-hamyon-orqali-yoki-somda">TON-кошелёк или сумы: как удобнее купить Stars и Premium?</h2>
      <p>Работают оба способа. Разница в том, что у вас уже есть.</p>
      <CompareTable
        headers={["Критерий", "Fragment + TON-кошелёк", "@StarsPaymee_bot (в сумах)"]}
        rows={[
          ["Что нужно", "TON-кошелёк с TON на балансе", "Только @username получателя"],
          ["Оплата", "TON", "Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота"],
          ["Цена 1 Stars", "В TON; в сумах зависит от курса", `Переводом на карту или с баланса — ${som(STARS_PER_UNIT_UZS, "ru")}, через Click/Payme/Uzum/Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Минимальный заказ", "Смотрите на странице Fragment", "50 Stars"],
          ["Premium", "В TON", `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}, одинаково при любой оплате; цена за 1 месяц — в боте`],
          ["Дополнительно", "Приложение кошелька и хранение сид-фразы", "Не нужны зарубежная карта, криптокошелёк и VPN"],
          ["Доставка", "В этой статье не замерялась", "Обычно за несколько секунд (~5 секунд), автоматически"],
        ]}
      />
      <p><b>Когда разумен путь через TON?</b> Если TON уже лежат в кошельке и вы не планируете тратить их на что-то другое.</p>
      <p><b>Когда удобнее платить в сумах?</b> Если не хочется покупать TON, следить за курсом и хранить кошелёк. И если вы покупаете подарок человеку, у которого кошелька нет.</p>
      <p>Пример: деньги лежат в Click, но можно сделать и перевод с карты. Прежде чем выбирать способ оплаты Stars, сравните цены: переводом на карту или с баланса — {som(STARS_PER_UNIT_UZS, "ru")}, онлайн-оплатой — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. С Premium такой разницы нет: выбирайте любой удобный способ.</p>
      <p>Все цены собраны на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>. Если хотите сравнить с оплатой Gram из кошелька внутри Telegram: <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">купить за Gram или в сумах</Link>.</p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">Как купить Stars или Premium без кошелька, в сумах?</h2>
      <p>StarsPaymee — независимый сервис, он работает уже полтора года. Покупка целиком проходит внутри Telegram.</p>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук) или срок Premium.</Step>
        <Step title={"Введите @username"}>свой или друга. Пароль, SMS-код и кошелёк не нужны.</Step>
        <Step title={"Выберите способ оплаты"}>цена Stars от него зависит: {som(STARS_PER_UNIT_UZS, "ru")} или {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Итоговую сумму вы увидите до оплаты.</Step>
        <Step title={"Оплатите и подождите"}>заказ обычно приходит за несколько секунд. Premium подключается через механизм подарков Telegram.</Step>
      </Steps>
      <p><b>Исключение:</b> если у получателя уже действует подписка Premium, бот не примет новый заказ на Premium. Новый срок не добавляется к действующей подписке, так что дождитесь, пока она закончится. Подробнее: <Link href="/blog/telegram-premium-muddatini-uzaytirish">как продлить Premium</Link>.</p>
      <p>Частая ошибка — вводить username по памяти. Откройте профиль друга в Telegram и скопируйте имя после символа @. Если перепутать нижнее подчёркивание, точку или похожие буквы (l и I), заказ может уйти другому человеку.</p>
      <p>Если что-то пошло не так, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Полная инструкция: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">как купить Stars в Узбекистане</Link>.</p>
      <h2 id="hamyon-baribir-qachon-kerak-boladi">Когда кошелёк всё-таки понадобится?</h2>
      <p>Для Stars и Premium кошелёк не нужен. С коллекционными подарками иногда без него не обойтись.</p>
      <ul>
        <li><b>Вывод подарка в блокчейн.</b> Путь: профиль → Подарки → подарок → Transfer → Send via Blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</li>
        <li><b>Пароль 2FA.</b> Для вывода нужен собственный пароль 2FA от Telegram. После вывода вы получите ссылку для импорта NFT на Fragment.</li>
        <li><b>Ограничение по дате.</b> Некоторые подарки можно вывести только после определённой даты.</li>
        <li><b>Передача внутри Telegram.</b> Коллекционный подарок можно передать другому пользователю: иногда бесплатно, иногда за Stars. Кошелёк для этого не нужен.</li>
        <li><b>Передача в блокчейне.</b> Предмет, который уже в блокчейне, можно бесплатно отправить другому человеку или на другой кошелёк через приложение кошелька. Fragment приводит в пример вкладку «NFT» в Tonkeeper.</li>
      </ul>
      <p>Официально не подтверждено, что Gram Wallet поддерживает NFT или подарки Telegram. Поэтому нет причин выбирать для подарков именно его.</p>
      <p>Готовый NFT-подарок можно купить без кошелька, в сумах, в NFT Market внутри бота: <Link href="/gifts">Подарки</Link>.</p>
      <h2 id="gram-walletga-oting-stars-arzonlashadi">Как относиться к сообщениям «Переходите на Gram Wallet — Stars подешевеют»?</h2>
      <p>На волне новостей о новом приложении могут появиться сообщения вроде «переходите на Gram Wallet — Stars дешевле» или «подключите кошелёк и получите бонус». Они опираются на обещания, которых нет в официальных источниках.</p>
      <p>Тревожные признаки:</p>
      <ul>
        <li>просят сид-фразу «для проверки»;</li>
        <li>просят код входа в Telegram или пароль 2FA;</li>
        <li>присылают незнакомую ссылку «подтвердите подключение кошелька»;</li>
        <li>торопят: «только сегодня», «осталось последнее место»;</li>
        <li>предлагают скачать приложение не из App Store, а по сторонней ссылке.</li>
      </ul>
      <Notice label={"Важно"}>Чтобы купить Stars, нужен только @username. StarsPaymee не спрашивает пароль, SMS-код и не просит доступ к аккаунту. Сервис независимый и не заявляет о партнёрстве с Telegram. Stars и подарки у пользователей мы не покупаем — сообщение «выкупим ваши звёзды, подключите кошелёк» пришло не от нас.</Notice>
      <p>Когда кошелёк действительно нужно привязать к аккаунту, читайте здесь: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">привязка кошелька к аккаунту Telegram</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://ton.org/media", label: "TON Media Assets" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли и дальше покупать Stars на Fragment за TON из MyTonWallet?", answer: "Да. Fragment называет MyTonWallet среди рекомендуемых TON-кошельков, и выход нового приложения этот способ не отменяет." },
  { question: "Если не установить Gram Wallet, смогу ли я потом платить на Fragment?", answer: "Официально о таком ограничении не объявляли. Платите кошельком, который уже работает, а изменения отслеживайте на самом fragment.com." },
  { question: "Если MyTonWallet переименуют, моя сид-фраза перестанет работать?", answer: "Переименование пока лишь догадка. В некастодиальном кошельке ключ хранится у вас, поэтому держите сид-фразу на бумаге и не вводите её ни на каких страницах «миграции»." },
  { question: "Gram Wallet — это кошелёк внутри Telegram? Можно перевести туда TON?", answer: "Не торопитесь: кто выпустил приложение, официально не подтверждено, а источники противоречат друг другу. Прежде чем переносить основные средства, проверьте его на пустом кошельке с небольшой суммой." },
  { question: "Новое приложение просит пароль 2FA от Telegram. Он нужен для покупки Stars?", answer: "Нет, для покупки Stars или Premium пароль 2FA не нужен. По официальной документации его запрашивают при выводе коллекционного подарка в блокчейн, и вводится он в самом Telegram." },
  { question: "У меня нет TON. Как купить Premium?", answer: `Введите @username в @StarsPaymee_bot и оплатите в сумах. Тарифы на 3, 6 и 12 месяцев стоят одинаково при любой оплате: ${som(premium(3), "ru")}, ${som(premium(6), "ru")}, ${som(premium(12), "ru")}.` },
  { question: "Хочу отправить Stars другу. Ему нужен кошелёк?", answer: "Нет, звёзды придут на его аккаунт Telegram. Достаточно скопировать @username из его профиля и указать в заказе." },
  { question: "Почему цена Stars в боте зависит от способа оплаты?", answer: `Цена установлена отдельно для каждого способа: переводом на карту UzCard/HUMO или с баланса бота одна звезда стоит ${som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Точная сумма появится на экране до оплаты.` },
  { question: "Нужен ли Gram Wallet, чтобы вывести коллекционный подарок в блокчейн?", answer: "Официально такого требования нет. По документации Telegram после вывода выдаётся ссылка для импорта NFT на Fragment, а Fragment в качестве примеров называет TonKeeper и MyTonWallet." },
  { question: "Мне пишут: «Подключите Gram Wallet, мы выкупим ваши Stars». Что делать?", answer: "Не переходите по ссылке и никому не сообщайте коды и сид-фразу. StarsPaymee не покупает Stars и подарки у пользователей. Если есть сомнения, спросите в @StarsPaymeeSupport." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>You don’t need to install the new Gram Wallet app to buy Stars or Premium. On Fragment, you can keep paying with the TON in your MyTonWallet, just as before. Stars and subscriptions go to a Telegram account, not to a wallet. If you’d rather not deal with TON at all, you can get both without a wallet: pay in soums and enter only an @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#stars-yoki-premium-uchun-gram", label: "Do you need to switch to Gram Wallet for Stars or Premium?" },
          { href: "#postdagi-davolarning-qaysi-biri-xaridingizga", label: "Which of the post’s claims actually affect your purchase?" },
          { href: "#nomi-ozgaradi-degan-gap-fragmentdagi", label: "Would a name change affect payments on Fragment?" },
          { href: "#yangi-hamyon-ilovasini-sinamoqchi-bolsangiz", label: "Want to try a new wallet app? Here’s the safe order" },
          { href: "#ton-hamyon-orqali-yoki-somda", label: "TON wallet or soums: which is easier for Stars and Premium?" },
          { href: "#hamyonsiz-somda-stars-yoki-premium", label: "How to get Stars or Premium in soums without a wallet" },
          { href: "#hamyon-baribir-qachon-kerak-boladi", label: "When do you actually need a wallet?" },
          { href: "#gram-walletga-oting-stars-arzonlashadi", label: "How should you treat “Switch to Gram Wallet and get cheaper Stars” messages?" },
        ]}
      />
      <h2 id="stars-yoki-premium-uchun-gram">Do you need to switch to Gram Wallet for Stars or Premium?</h2>
      <p>Fragment’s own page names TonKeeper and MyTonWallet as examples of TON wallets (<a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">How Fragment works</a>). If you’ve been paying with MyTonWallet, you can keep going without changing anything.</p>
      <p>The talk about Gram Wallet started with a post that spread across Telegram channels. It said an app with that name had appeared in the App Store. No official source confirms who released the app or why, so there’s no reason to tie your purchases to it.</p>
      <p>Treat these as two separate tasks:</p>
      <ul>
        <li><b>Today’s purchase.</b> You need Stars or Premium now, so you pay with the wallet that already works.</li>
        <li><b>Trying a new app.</b> This is optional. Take your time, and do it separately from any purchase.</li>
      </ul>
      <p>Say your younger brother’s birthday is tomorrow and you want to gift him Premium. That’s the worst day to install an unfamiliar app and move money into it. For help choosing a wallet on Fragment, see this guide: <Link href="/blog/fragment-telegram-messenger-hamyon-stars-xaridi">Choosing a wallet on Fragment</Link>.</p>
      <h2 id="postdagi-davolarning-qaysi-biri-xaridingizga">Which of the post’s claims actually affect your purchase?</h2>
      <p>The post mixes things people actually saw with guesses. Taken one by one, none of them changes how you buy Stars or Premium.</p>
      <CompareTable
        headers={["Claim", "Status", "Effect on your purchase"]}
        rows={[
          ["A “Gram Wallet” app appeared in the App Store", "Something the post’s author saw. You can check the store listing yourself. The developer isn’t officially confirmed", "None"],
          ["MyTonWallet will soon change its name", "The post author’s guess. We found no official MyTonWallet announcement", "None"],
          ["Gram Wallet will stay limited to the TON ecosystem", "A guess, not confirmed", "None"],
          ["Gram Wallet has two-step protection through Telegram", "Not confirmed", "None. Never give your Telegram code or 2FA password to a third-party app anyway"],
          ["The “Gram” name is linked to TON", "ton.org shows the default icon of the Gram token: a white star on a blue diamond", "Has nothing to do with who receives Stars or Premium"],
        ]}
      />
      <p>The icon detail is on the <a href={"https://ton.org/media"} target="_blank" rel="noopener noreferrer">TON media page</a>. Don’t read anything more into it.</p>
      <p>Telegram’s official documentation mentions your Telegram 2FA password in connection with exporting a collectible gift to the blockchain (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts</a>). That’s the password for your Telegram account. It has nothing to do with a third-party wallet’s security.</p>
      <p>Sources disagree on who built the app, so this article doesn’t name a developer. You can check it yourself using the steps below.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="nomi-ozgaradi-degan-gap-fragmentdagi">Would a name change affect payments on Fragment?</h2>
      <p>So far the name change is only a guess. Even if it happens, nothing suggests it would get in the way of buying Stars or Premium.</p>
      <p>According to Fragment, in non-custodial wallets like TonKeeper or MyTonWallet, nobody holds the keys to your funds but you. Your TON depends on the key you hold, not on what the app is called. Whatever the app ends up being called, you can still get into your wallet as long as you have your recovery phrase.</p>
      <p>For Stars and Premium, the wallet’s name doesn’t matter at all. The recipient is identified by their Telegram account, and the Stars or subscription go to that account.</p>
      <p>The real risk is somewhere else. Scammers may use the rename story to push “update to the new version” or “migrate your wallet” links, or put copycat apps in the store. Any “migration” that asks you to type your recovery phrase into a website, chat or bot window is a scam.</p>
      <p>Fragment recommends backing up your credentials. Check your backup now, before the rumours die down. More on recovery phrases: <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Who holds the key and what happens if you lose it</Link>.</p>
      <h3>What to check before paying on Fragment</h3>
      <ul>
        <li>The address bar shows exactly fragment.com.</li>
        <li>The recipient’s @username is spelled correctly, down to the last letter.</li>
        <li>The amount in your wallet app’s confirmation screen matches what Fragment shows.</li>
        <li>The request to connect your wallet came from the Fragment page itself, not from a link in a chat.</li>
      </ul>
      <h2 id="yangi-hamyon-ilovasini-sinamoqchi-bolsangiz">Want to try a new wallet app? Here’s the safe order</h2>
      <p>Nobody’s stopping you from trying it. Just don’t put your main funds at risk.</p>
      <Steps>
        <Step title={"Check your backup"}>Make sure your MyTonWallet recovery phrase is written on paper, in the right order.</Step>
        <Step title={"Find the app in the store yourself"}>Don’t tap links from chats or channels. Search the App Store, then check the developer name, reviews and the date of the last update.</Step>
        <Step title={"Don’t enter your main wallet’s key"}>Create a new, empty wallet for testing. Don’t import your old recovery phrase.</Step>
        <Step title={"Test with a small amount"}>Send only what you could afford to lose. Don’t rush to move your main funds.</Step>
        <Step title={"Never type your Telegram code or 2FA password anywhere else"}>Enter them only in the Telegram app itself.</Step>
        <Step title={"Keep buying on Fragment with your usual wallet"}>Don’t switch payment wallets until you’ve finished testing.</Step>
      </Steps>
      <p>If at any point the app asks you to enter your recovery phrase on a web page or asks for your Telegram code, stop the test and delete the app.</p>
      <h2 id="ton-hamyon-orqali-yoki-somda">TON wallet or soums: which is easier for Stars and Premium?</h2>
      <p>Both routes work. The difference is what you already have.</p>
      <CompareTable
        headers={["Criterion", "Fragment + TON wallet", "@StarsPaymee_bot (soums)"]}
        rows={[
          ["What you need", "A TON wallet with TON in it", "Just the recipient’s @username"],
          ["Payment", "TON", "Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), a card transfer to UzCard/HUMO, or bot balance"],
          ["Price of 1 Star", "In TON; the soum value moves with the exchange rate", `${som(STARS_PER_UNIT_UZS, "en")} by card transfer or from balance, ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click/Payme/Uzum/Paynet`],
          ["Minimum order", "See the Fragment page", "50 Stars"],
          ["Premium", "In TON", `3 months ${som(premium(3), "en")}, 6 months ${som(premium(6), "en")}, 12 months ${som(premium(12), "en")}, the same with every method; 1-month price in the bot`],
          ["Extra requirements", "A wallet app and a safely stored recovery phrase", "No international card, crypto wallet or VPN"],
          ["Delivery", "Not measured in this article", "Usually a few seconds (~5 seconds), automatic"],
        ]}
      />
      <p><b>When does the TON route make sense?</b> When you already have TON in your wallet and don’t plan to use it for anything else.</p>
      <p><b>When is paying in soums easier?</b> When you don’t want to bother buying TON, watching the rate and looking after a wallet. It’s also the simpler choice when you’re buying a gift for someone who has no wallet.</p>
      <p>Say you have money in Click but could also send a card transfer. Before choosing how to pay for Stars, compare the two prices: {som(STARS_PER_UNIT_UZS, "en")} by card transfer or from balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} with online payment. Premium costs the same either way, so use whatever method is easiest.</p>
      <p>All prices are on the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages. If you’re weighing this against Gram in Telegram’s built-in wallet, see <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">Pay with Gram or in soums?</Link></p>
      <h2 id="hamyonsiz-somda-stars-yoki-premium">How to get Stars or Premium in soums without a wallet</h2>
      <p>StarsPaymee is an independent service that has been running for 1.5 years. Everything happens inside Telegram.</p>
      <Steps>
        <Step title={"Open the bot"}>Use <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Pick a product"}>Choose Stars (50 minimum) or a Premium plan.</Step>
        <Step title={"Enter the @username"}>It can be yours or a friend’s. Nobody asks for a password, SMS code or wallet.</Step>
        <Step title={"Choose how to pay"}>The price of Stars depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} or {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. You see the final total before paying.</Step>
        <Step title={"Pay and wait"}>Orders usually arrive within seconds. Premium is activated through Telegram’s gifting mechanism.</Step>
      </Steps>
      <p><b>Exception:</b> if the recipient already has an active Premium subscription, the bot won’t open a new Premium order. The new plan isn’t added on top of an active subscription, so wait for the current one to end. Details: <Link href="/blog/telegram-premium-muddatini-uzaytirish">Extending Premium</Link>.</p>
      <p>A common mistake is typing the username from memory. Open your friend’s profile in Telegram and copy the name after the @. If you confuse an underscore, a dot or lookalike letters (l and I), the order can go to someone else.</p>
      <p>If something goes wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>. Full guide: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Buying Stars in Uzbekistan</Link>.</p>
      <h2 id="hamyon-baribir-qachon-kerak-boladi">When do you actually need a wallet?</h2>
      <p>You don’t need a wallet for Stars or Premium. With collectible gifts, though, a few things can’t be done without one.</p>
      <ul>
        <li><b>Exporting a gift to the blockchain.</b> The path is: Profile → Gifts → the gift → Transfer → Send via Blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li><b>2FA password.</b> Exporting requires your Telegram 2FA password. You then get a link to import the NFT on Fragment.</li>
        <li><b>Date restriction.</b> Some gifts can only be exported after a set date.</li>
        <li><b>Transfers inside Telegram.</b> You can transfer a collectible gift to another user, sometimes at no cost and sometimes for Stars. No wallet is needed for this.</li>
        <li><b>Transfers on the blockchain.</b> Once an item is on the blockchain, you can send it to another person or wallet through your wallet app. As an example, Fragment points to the “NFT” tab in Tonkeeper.</li>
      </ul>
      <p>Nothing official says Gram Wallet supports NFTs or Telegram gifts. There’s no reason to pick this particular app for gifts.</p>
      <p>You can buy a ready-made NFT gift in soums without a wallet in the bot’s NFT Market: <Link href="/gifts">Gifts</Link>.</p>
      <h2 id="gram-walletga-oting-stars-arzonlashadi">How should you treat “Switch to Gram Wallet and get cheaper Stars” messages?</h2>
      <p>Messages like “Switch to Gram Wallet for cheap Stars” or “Connect your wallet and get a bonus” may start appearing around the new app’s name. They rest on promises that no official source confirms.</p>
      <p>Warning signs:</p>
      <ul>
        <li>they ask for your recovery phrase “for verification”;</li>
        <li>they ask for your Telegram login code or 2FA password;</li>
        <li>they send an unfamiliar “connect your wallet to confirm” link;</li>
        <li>they rush you with “today only” or “last spots left”;</li>
        <li>they offer to download the app from an outside link instead of the App Store.</li>
      </ul>
      <Notice label={"Important"}>To buy Stars, all you need is an @username. StarsPaymee never asks for a password, SMS code or access to your account. The service is independent and doesn’t claim any partnership with Telegram. It doesn’t buy Stars or gifts from users, so a message saying “we’ll buy your Stars, just connect your wallet” isn’t from us.</Notice>
      <p>On when it makes sense to link a wallet to your account: <Link href="/blog/hamyonni-telegram-akkauntga-boglash-username">Linking a wallet to your Telegram account</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://ton.org/media", label: "TON Media Assets" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I keep buying Stars on Fragment with TON from MyTonWallet?", answer: "Yes. Fragment names MyTonWallet as one of its example TON wallets, and a new app showing up doesn’t change that." },
  { question: "If I don’t install Gram Wallet, will I lose the ability to pay on Fragment later?", answer: "Nothing official says so. Keep paying with the wallet you use now, and check fragment.com itself for any changes." },
  { question: "If MyTonWallet changes its name, will my recovery phrase stop working?", answer: "The rename is still just a guess. In a non-custodial wallet, only you hold the key, so keep your recovery phrase on paper and never type it into any “migration” page." },
  { question: "Gram Wallet looks like Telegram’s own wallet. Can I move my TON into it?", answer: "Don’t rush. It isn’t officially confirmed who released the app, and sources contradict each other. Try it with an empty wallet and a small amount before moving your main funds." },
  { question: "The new app asks for my Telegram 2FA password. Do I need to enter it to buy Stars?", answer: "No. Buying Stars or Premium doesn’t require your 2FA password. According to the official docs, it’s needed to export a collectible gift to the blockchain, and you enter it in Telegram itself." },
  { question: "I don’t have any TON. How do I get Premium?", answer: `Enter the @username in @StarsPaymee_bot and pay in soums. The 3-, 6- and 12-month plans cost the same with every payment method: ${som(premium(3), "en")}, ${som(premium(6), "en")}, ${som(premium(12), "en")}.` },
  { question: "I want to send Stars to a friend. Do they need a wallet?", answer: "No. The Stars go to their Telegram account. Just copy their @username from their profile and paste it into the order." },
  { question: "Why does the bot’s Stars price depend on how I pay?", answer: `Prices are set per payment method: one Star costs ${som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. You see the exact total before you pay.` },
  { question: "Do I need Gram Wallet to export a collectible gift to the blockchain?", answer: "No official source says so. Telegram’s docs say that after export you get a link to import the NFT on Fragment, and Fragment gives TonKeeper and MyTonWallet as example wallets." },
  { question: "Someone says “Connect Gram Wallet and we’ll buy your Stars.” What should I do?", answer: "Don’t tap the link, and don’t share your codes or recovery phrase. StarsPaymee doesn’t buy Stars or gifts from users. If you’re unsure, ask @StarsPaymeeSupport." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  keywords: ["gram wallet stars sotib olish","gram wallet premium olish","mytonwallet stars sotib olish","gram wallet nima","fragment ton bilan stars olish","hamyonsiz stars sotib olish","stars so‘mda sotib olish","mytonwallet gram wallet","gram wallet купить звезды","купить telegram stars через mytonwallet","gram wallet что это","купить звезды телеграм без кошелька"],
  howToSteps: [
    { name: "Zaxirani tekshiring", text: "MyTonWallet’ning zaxira so‘zlari qog‘ozda, to‘g‘ri tartibda yozilganiga ishonch hosil qiling." },
    { name: "Ilovani do‘konning o‘zidan qidiring", text: "chat yoki kanaldagi havolani bosmang. App Store qidiruvidan topib, ishlab chiquvchi nomi, sharhlar va oxirgi yangilanish sanasiga qarang." },
    { name: "Asosiy hamyon kalitini kiritmang", text: "sinov uchun yangi, bo‘sh hamyon oching. Eski zaxira so‘zlarini import qilmang." },
    { name: "Kichik summa bilan sinang", text: "yo‘qotsangiz achinmaydigan miqdorni o‘tkazib ko‘ring. Asosiy mablag‘ni ko‘chirishga shoshilmang." },
    { name: "Telegram kodini va 2FA parolini hech qayerga yozmang", text: "ularni faqat Telegram ilovasining o‘ziga kiritasiz." },
    { name: "Fragment’da xaridni odatdagi hamyon bilan qiling", text: "sinov tugamaguncha to‘lov hamyonini almashtirmang." },
  ],
  locales: {
    uz: {
      title: "Gram Wallet chiqdi: Stars va Premium uchun MyTonWallet’dan ko‘chish kerakmi?",
      excerpt: "Yo‘q, Stars yoki Premium uchun Gram Wallet’ga o‘tish shart emas: MyTonWallet bilan to‘layverasiz yoki hamyonsiz so‘mda olasiz. Maqolada post da’volari tekshirilgan va ikki yo‘l taqqoslangan.",
      metaTitle: "Gram Wallet chiqdi: Stars va Premium uchun MyTonWallet’dan",
      metaDescription: "Yo‘q, Stars yoki Premium uchun Gram Wallet’ga o‘tish shart emas: MyTonWallet bilan to‘layverasiz yoki hamyonsiz so‘mda olasiz.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Вышел Gram Wallet: нужно ли уходить с MyTonWallet ради Stars и Premium?",
      excerpt: "Нет, ради Stars или Premium переходить на Gram Wallet не нужно: платите через MyTonWallet или покупайте без кошелька в сумах. В статье разобраны заявления из поста и сравнены оба способа.",
      metaTitle: "Вышел Gram Wallet: нужно ли уходить с MyTonWallet ради",
      metaDescription: "Нет, ради Stars или Premium переходить на Gram Wallet не нужно: платите через MyTonWallet или покупайте без кошелька в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Gram Wallet is out: should you leave MyTonWallet for Stars and Premium?",
      excerpt: "No, you don’t need Gram Wallet to buy Stars or Premium. Keep paying with MyTonWallet, or buy in soums with no wallet at all. Below we check the post’s claims and compare both options.",
      metaTitle: "Gram Wallet is out: should you leave MyTonWallet for Stars",
      metaDescription: "No, you don’t need Gram Wallet to buy Stars or Premium. Keep paying with MyTonWallet, or buy in soums with no wallet at all.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
