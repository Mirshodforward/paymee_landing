import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "hamyonni-telegram-akkauntga-boglash-username";

/**
 * Hamyonni Telegram akkauntga bog‘lash: Stars va Premium olish uchun kerakmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-12): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Stars yoki Premium’ni so‘mda oladigan Telegram foydalanuvchisi «hamyonni telegram akkauntga bog'lash» deb qidiradi. U betadagi «username bo‘yicha Gram o‘tkazma» gapi rostmi, bu @username bilan Stars yoki Premium olishdan nimasi bilan farq qiladi, xarid uchun hamyonni bog‘lash kerakmi va bog‘lasa xavfi bormi, shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-12):
 *   https://core.telegram.org/bots/api
 *   https://fragment.com/about
 *   https://fragment.com/username/resolved
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
  return <p>Yo‘q, Stars yoki Premium olish uchun hamyonni Telegram akkauntga bog‘lash shart emas. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> faqat @username so‘raydi, to‘lov so‘mda qilinadi. Username bo‘yicha Gram yuborish haqidagi gap hozircha kanal postlarida aylanib yuribdi. Rasmiy hujjatda esa faqat profilda ko‘rinadigan TON hamyon kartasi bor, username bo‘yicha pul yuborish tartibi yozilmagan.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#beta-haqidagi-post-nimani-davo", label: "Beta haqidagi post nimani da’vo qiladi va nimasi tasdiqlangan?" },
          { href: "#dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga", label: "Dasturchilar hujjatidagi yangiliklar: Stars xaridoriga qaysi biri tegishli?" },
          { href: "#username-boyicha-gram-va-username", label: "Username bo‘yicha Gram va @username bilan Stars xaridi qanday farqlanadi?" },
          { href: "#bot-hamyon-soraydimi-somda-xarid", label: "Bot hamyon so‘raydimi: so‘mda xarid qilganda nima kerak bo‘ladi?" },
          { href: "#hamyonni-profilga-boglash-qanday-xavf", label: "Hamyonni profilga bog‘lash qanday xavf tug‘dirishi mumkin?" },
          { href: "#hamyon-kartasini-profilga-chiqarishdan-oldin", label: "Hamyon kartasini profilga chiqarishdan oldin nimani tekshirish kerak?" },
          { href: "#botga-hamyon-manzili-yoki-fragment", label: "Botga hamyon manzili yoki Fragment nomini yozib qo‘ysangiz nima bo‘ladi?" },
          { href: "#xarid-paytida-hamyon-soralsa-qaysi", label: "Xarid paytida hamyon so‘ralsa: qaysi xabarlar aldov belgisi?" },
          { href: "#hamyonsiz-faqat-username-bilan-stars", label: "Hamyonsiz, faqat @username bilan Stars yoki Premium qanday olinadi?" },
        ]}
      />
      <h2 id="beta-haqidagi-post-nimani-davo">Beta haqidagi post nimani da’vo qiladi va nimasi tasdiqlangan?</h2>
      <p>Telegram kanallarida yangi beta-versiya haqida post tarqaldi. Unda uchta gap bor:</p>
      <ul>
        <li>Gram hamyon manzilini Telegram akkauntga bog‘lash mumkin bo‘ladi;</li>
        <li>shundan keyin uzun manzilni qo‘lda kiritmasdan, mablag‘ni username bo‘yicha yuborsa bo‘ladi;</li>
        <li>hamyon manzilini uzoq bosganda alohida amallar chiqadi.</li>
      </ul>
      <p>Bularning hammasi post muallifining gapi, rasmiy ma’lumot emas.</p>
      <p><b>Tasdiqlangani.</b> <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjatida</a> yozilishicha, 10.4 versiyada shaxsiy chatlar uchun ChatFullInfo.ton_wallet_card maydoni qo‘shilgan. Hujjat uni foydalanuvchining profil sahifasida ko‘rinadigan TON hamyon kartasi deb ta’riflaydi. Shu versiyada TonWalletCard, TonWalletCardSticker, TonNft va TonNftAttribute klasslari ham qo‘shilgan. StoryAreaPosition klassining nomi AreaPosition’ga o‘zgargan, chunki endi u hamyon kartasidagi stikerlar joylashuvini ham tavsiflaydi. Demak, kartani stiker bilan bezash imkoni rejalashtirilgan bo‘lishi mumkin, lekin bu faqat taxmin.</p>
      <p><b>Tasdiqlanmagani.</b> Quyidagilarning birortasi rasmiy manbada topilmadi: username bo‘yicha pul yuborish, beta-versiyaning o‘zi, uzoq bosganda chiqadigan menyu va bog‘lash majburiy yoki ixtiyoriy ekani. Telegram rasman e’lon qilmaguncha bular gap-so‘zligicha qoladi.</p>
      <h2 id="dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga">Dasturchilar hujjatidagi yangiliklar: Stars xaridoriga qaysi biri tegishli?</h2>
      <p>Bot API — dasturchilar uchun yozilgan hujjat. Unda yangi maydon paydo bo‘lgani funksiya ilovaga qachon va qanday ko‘rinishda chiqishini anglatmaydi. Quyida har bir yangilik oddiy xaridorga ta’sir qiladimi-yo‘qmi, shu ko‘rsatilgan.</p>
      <CompareTable
        headers={["Element", "Hujjatda nima deyilgan", "So‘mdagi xaridga ta’siri"]}
        rows={[
          ["ton_wallet_card", "Profil sahifasida ko‘rinadigan TON hamyon kartasi", "Yo‘q, faqat profil ko‘rinishiga oid"],
          ["TonWalletCardSticker va AreaPosition", "Kartadagi stikerlar va ularning joylashuvi", "Yo‘q, bezak masalasi"],
          ["TonNft, TonNftAttribute", "NFT va uning atributlari uchun klasslar", "Yo‘q, lekin NFT egalari uchun maxfiylik savoli tug‘iladi"],
          ["ton_wallet_transfer", "Xizmat xabari: TON hamyoni bilan o‘tkazma", "Yo‘q, bu Gram o‘tkazmasiga oid"],
          ["RichTextTonAddress", "Xabar ichidagi TON blokcheyni manzili", "Yo‘q, manzil matnda alohida element bo‘lib chiqishi mumkin"],
        ]}
      />
      <Notice label={"Muhim"}>Ilovada nima, qachon va kimga ko‘rinishi bu maqolada tasdiqlanmagan. Klasslarning to‘liq tavsifi ham ko‘rib chiqilmagan.</Notice>
      <p>Jadvalda «username bo‘yicha yuborish» degan qator yo‘q. Profilda karta ko‘rinishi bir narsa, pulni username orqali jo‘natish esa butunlay boshqa narsa.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="username-boyicha-gram-va-username">Username bo‘yicha Gram va @username bilan Stars xaridi qanday farqlanadi?</h2>
      <p>Ikkalasida ham @username manzil vazifasini bajaradi, shuning uchun ular tez-tez adashtiriladi. Aslida har birida boshqa narsa boshqa joyga boradi.</p>
      <CompareTable
        headers={["Savol", "Username bo‘yicha Gram (postdagi da’vo)", "@username bilan Stars yoki Premium"]}
        rows={[
          ["Nima o‘tadi", "Gram (TON) tangasi", "Stars yoki Premium obunasi"],
          ["Qayerda saqlanadi", "Blokcheyndagi hamyonda", "Telegram akkauntida"],
          ["Nima kerak", "Hamyon va unga bog‘langan manzil", "Faqat @username"],
          ["Qanday to‘lanadi", "Gram bilan", "So‘mda: karta, Click, Payme, Uzum, Paynet"],
          ["Hamyon ochish kerakmi", "Ha", "Yo‘q"],
          ["Hozirgi holati", "Rasman tasdiqlanmagan", "Botda ishlaydi"],
        ]}
      />
      <p>StarsPaymee’da @username faqat buyurtma kimga borishini ko‘rsatadi. Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi. Wallet’dagi tangalar nega Stars balansidan alohida turishini <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida o‘qing.</p>
      <h2 id="bot-hamyon-soraydimi-somda-xarid">Bot hamyon so‘raydimi: so‘mda xarid qilganda nima kerak bo‘ladi?</h2>
      <p>Bot hamyon manzilini so‘ramaydi. Hamyonni bog‘lash funksiyasi chiqadimi-yo‘qmi, so‘mdagi xarid tartibi o‘zgarmaydi. Buyurtma uchun ikki narsa kerak: to‘g‘ri @username va to‘lov usuli.</p>
      <p>To‘lov usullari:</p>
      <ul>
        <li>Click, Payme, Uzum yoki Paynet (Paynet ilovasida yoki terminalida naqd pul bilan ham to‘lasa bo‘ladi);</li>
        <li>UzCard yoki HUMO kartaga o‘tkazma;</li>
        <li>bot balansi.</li>
      </ul>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas.</p>
      <p>Stars narxi to‘lov usuliga qarab o‘zgaradi. Karta o‘tkazmasi yoki bot balansidan to‘lasangiz, 1 dona {som(STARS_PER_UNIT_UZS, "uz")} turadi. Click, Payme, Uzum yoki Paynet orqali 1 dona {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Premium narxi hamma usulda bir xil: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. 1 oylik tarif ham bor, uning narxini botda ko‘rasiz. Batafsil ma’lumot <Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> sahifalarida.</p>
      <Notice label={"Muhim"}>«Hamyonni bog‘lamasangiz Stars kelmaydi» degan gapga ishonmang, bunday shart yo‘q. Shunday talab qo‘yilsa, to‘lovni to‘xtating.</Notice>
      <p>Hamyoningizda Gram bo‘lsa va qaysi yo‘l qulayroq ekanini bilmasangiz, <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">Gram yoki so‘m taqqosi</Link> maqolasini o‘qing.</p>
      <h2 id="hamyonni-profilga-boglash-qanday-xavf">Hamyonni profilga bog‘lash qanday xavf tug‘dirishi mumkin?</h2>
      <p>Funksiya ilovaga chiqsa, asosiy o‘zgarish ko‘rinishga oid bo‘ladi. Pulingizni olish osonlashmaydi, lekin u haqda bilish osonlashadi.</p>
      <ul>
        <li><b>Hamyon egasi ma’lum bo‘ladi.</b> Karta profil sahifasida tursa, username’ingizni bilgan odam hamyoningizni ham ko‘radi. Shu hamyon tarixini eksplorerda ochib, uni profilingiz bilan bog‘lab qo‘yishi mumkin.</li>
        <li><b>NFT ko‘zga tashlanadi.</b> Bot API’da kartada NFT va uning atributlarini ko‘rsatish uchun klasslar bor. Qimmat kolleksion sovg‘a ko‘rinib tursa, firibgarlarning e’tiborini tortishi mumkin.</li>
        <li><b>Fragment boshqa xizmat.</b> <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> hamyonni Telegram akkauntiga bog‘laydigan ma’lumotni saqlamasligini yozadi. Lekin u yerda taklifni qaysi hamyon bergani hammaga ko‘rinadi. Profil kartasi va Fragment qoidalari alohida narsa, ularni aralashtirmang.</li>
        <li><b>Username kalit emas.</b> Username’ingizni bilgan odam hamyoningizdan pul yecha olmaydi. Pul tiklash so‘zlari yoki hamyon paroli begona qo‘lga o‘tganda, yoki akkaunt o‘g‘irlanganda yo‘qoladi.</li>
      </ul>
      <p>Fragment’ga ulangan hamyon Stars uchun qanchalik xavfli ekani <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">Fragment’dagi hamyon ulanishi va Stars xavfi</Link> maqolasida tushuntirilgan. Profilda paydo bo‘lishi kutilayotgan boshqa tugmalar haqida <Link href="/blog/telegram-profil-balans-tugmasi-qr-kod">balans tugmasi va QR-kod</Link> maqolasida yozilgan.</p>
      <h2 id="hamyon-kartasini-profilga-chiqarishdan-oldin">Hamyon kartasini profilga chiqarishdan oldin nimani tekshirish kerak?</h2>
      <p>Funksiya hammaga ochilsa, quyidagi tartibda harakat qiling.</p>
      <Steps>
        <Step title={"Manbani tekshiring"}>telegram.org yoki core.telegram.org’da e’lon bor-yo‘qligini ko‘ring. Kanal posti yoki skrinshot dalil bo‘la olmaydi.</Step>
        <Step title={"Faqat ilovaning o‘zida sozlang"}>kartani bot, sayt yoki chatdagi havola orqali emas, Telegram sozlamalaridan yoqing.</Step>
        <Step title={"Alohida hamyon tanlang"}>katta mablag‘ yoki qimmat NFT turgan hamyonni ochiq profilga ulamang. Kundalik ishlatiladigan kichik hamyon yetarli.</Step>
        <Step title={"Ko‘rinishni tekshiring"}>boshqa akkauntdan kirib ko‘ring yoki do‘stingizdan so‘rang: profilingiz begona odamga qanday ko‘rinadi?</Step>
        <Step title={"Himoyani yoqing"}>ikki bosqichli parol (2FA) yoqilganini tekshiring. Tiklash so‘zlarini hech kimga, o‘zini «support» deb tanishtirgan odamga ham bermang.</Step>
        <Step title={"Bosim qilsa, to‘xtang"}>bog‘lash majburiy yoki ixtiyoriy ekani rasman ma’lum emas. Kimdir shoshiltirsa yoki bog‘lashni talab qilsa, hech narsa qilmang.</Step>
      </Steps>
      <h2 id="botga-hamyon-manzili-yoki-fragment">Botga hamyon manzili yoki Fragment nomini yozib qo‘ysangiz nima bo‘ladi?</h2>
      <p>Yangi boshlaganlar ba’zan bot @username so‘ragan joyga boshqa narsani yozib qo‘yadi. Ko‘p uchraydigan xatolar va ularning oqibati:</p>
      <CompareTable
        headers={["Xato yozuv", "Nima bo‘ladi", "To‘g‘ri qilish"]}
        rows={[
          ["Hamyon manzili (uzun harf-raqamli qator)", "Bu akkaunt nomi emas, buyurtma uni oluvchi sifatida tanimaydi", "Profildagi @username’ni nusxalang"],
          ["resolved.t.me kabi TON Web 3.0 manzil", "Bu Fragment sahifasidagi manzil, akkaunt nomi emas", "@ belgisi bilan username’ning o‘zini yozing"],
          ["Bitta harfi xato username", "Buyurtma boshqa odamga ketishi mumkin", "Qo‘lda yozmang, profildan nusxalang"],
          ["Kanal yoki botning username’i", "Stars yoki Premium o‘sha akkauntga yo‘naltiriladi", "Shaxsiy profil username’ini kiriting"],
        ]}
      />
      <p>Masalan, Fragment’dagi <a href={"https://fragment.com/username/resolved"} target="_blank" rel="noopener noreferrer">@resolved sahifasida</a> TON Web 3.0 manzili sifatida resolved.t.me ko‘rsatilgan. Botga esa resolved.t.me emas, @resolved yoziladi.</p>
      <p>Kolleksion username — alohida holat. <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> yozishicha, uning egaligi xaridda ishlatilgan TON hamyoniga o‘tadi. Demak, bunday username bilan hamyon o‘rtasida aloqa allaqachon bor, lekin bu profildagi hamyon kartasi degani emas. Kolleksion nom akkauntingizga ulangan bo‘lsa, buyurtmada oddiy @username kabi ishlatiladi. Bunday nom qanday olinishi <Link href="/blog/telegram-username-sotib-olish">Telegram username sotib olish</Link> maqolasida tushuntirilgan.</p>
      <p>Yana bir misol: @aziz_uz o‘rniga @azizuz yozilsa, bu boshqa akkaunt. Pastki chiziq, nuqta va o‘xshash harflar (l va I, 0 va o) eng ko‘p chalkashtiriladi.</p>
      <h2 id="xarid-paytida-hamyon-soralsa-qaysi">Xarid paytida hamyon so‘ralsa: qaysi xabarlar aldov belgisi?</h2>
      <p>Firibgarlar yangi funksiya haqidagi shov-shuvdan bahona sifatida foydalanadi. Stars yoki Premium olayotganda quyidagi gaplarni eshitsangiz, ehtiyot bo‘ling:</p>
      <ul>
        <li><b>«Stars tushishi uchun hamyonni botga ulang».</b> So‘mda xarid qilganda hamyon kerak emas. Bunday bot hamyoningizdan foydalanish ruxsatini olishga urinayotgan bo‘lishi mumkin.</li>
        <li><b>«Yangi funksiya betada, mana yoqish havolasi».</b> Soxta Mini App yoki sayt avval hamyonni ulatib, keyin undagi mablag‘ni o‘g‘irlashga urinadi. Sozlamani faqat Telegram ilovasining o‘zidan qidiring.</li>
        <li><b>«To‘lovingiz keldi» degan skrinshot.</b> TON hamyoni bilan o‘tkazma chatda xizmat xabari bo‘lib ko‘rinadi, rasm esa xizmat xabari emas. Pul tushgan-tushmaganini o‘z hamyoningizdan yoki eksplorerdan tekshiring.</li>
        <li><b>«Premium’ni faollashtirish uchun SMS kodni ayting».</b> StarsPaymee parol ham, kod ham so‘ramaydi. Kod so‘ragan odam akkauntingizni egallamoqchi.</li>
        <li><b>«Stars’ni men sotaman, pulini username’im orqali Gram’da to‘lang».</b> Username bo‘yicha o‘tkazma tasdiqlanmagan. Notanish sotuvchiga oldindan yuborilgan pulni qaytarib bo‘lmasligi mumkin.</li>
        <li><b>«Tiklash so‘zlaringizni yuboring, hamyon bog‘lanishini tekshirib beramiz».</b> Tiklash so‘zlarini bilgan odam hamyoningizni to‘liq boshqaradi. Bunday tekshiruv yo‘q.</li>
      </ul>
      <p>«Yangi bo‘lim» haqidagi postlarni qanday tekshirish kerakligi <Link href="/blog/telegram-money-bolimi-gram-wallet">Telegram «Money» bo‘limi va GRAM Wallet</Link> maqolasida ko‘rsatilgan. Shubhali xabar kelsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali yordamga yozing.</p>
      <h2 id="hamyonsiz-faqat-username-bilan-stars">Hamyonsiz, faqat @username bilan Stars yoki Premium qanday olinadi?</h2>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’i.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 dona) yoki Premium muddati.</Step>
        <Step title={"@username kiriting"}>o‘zingizniki yoki do‘stingizniki. Profildan nusxalab, harflarini yana bir bor solishtiring.</Step>
        <Step title={"To‘lov usulini tanlang"}>karta o‘tkazmasi, bot balansi, Click, Payme, Uzum yoki Paynet. Stars narxi usulga qarab farq qiladi, shuning uchun to‘lashdan oldin summani tekshiring.</Step>
        <Step title={"Yetib kelganini tekshiring"}>buyurtma odatda bir necha soniyada (taxminan 5 soniyada) avtomatik yetkaziladi. Kelmasa, buyurtma ma’lumotlari bilan supportga yozing.</Step>
      </Steps>
      <p>Premium’da bitta istisno bor: akkauntda faol obuna bo‘lsa, bot yangi buyurtma ochmaydi, chunki yangi muddat faol obuna ustiga qo‘shilmaydi. Do‘stingizga sovg‘a qilmoqchi bo‘lsangiz, avval undan Premium’i bor-yo‘qligini so‘rang.</p>
      <p>StarsPaymee — Telegram’dan mustaqil xizmat, 1,5 yildan beri ishlaydi va Telegram nomidan gapirmaydi.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/username/resolved", label: "resolved (Fragment)" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Hamyonni Telegram akkauntga bog‘lash funksiyasi hozir hammaga ochiqmi?", answer: "Bu haqda rasmiy e’lon topilmadi. Bot API’da faqat profilda ko‘rinadigan hamyon kartasi maydoni bor, ilovada qachon va kimga chiqishi esa noma’lum." },
  { question: "Hamyonim bog‘lanmagan bo‘lsa, do‘stim menga username orqali Gram yubora oladimi?", answer: "Username bo‘yicha Gram yuborish rasmiy manbada tasdiqlanmagan. Hozircha ishonchli yo‘l — hamyon manzilini o‘zingiz yuborish, do‘stingiz esa uni qo‘ygach boshi va oxiridagi belgilarni solishtirib chiqsin." },
  { question: "Stars balansim hamyonga qo‘shilib ketmaydimi?", answer: "Yo‘q. Stars Telegram akkauntida hisoblanadi, Gram esa blokcheyndagi hamyonda turadi. Profilga hamyon kartasi chiqqan taqdirda ham Stars xaridi avvalgidek ishlaydi." },
  { question: "Profilimdagi hamyon kartasini keyin olib tashlasa bo‘ladimi?", answer: "Kartani yashirish yoki o‘chirish qanday ishlashi hali rasman ma’lum emas. Funksiya chiqqanda Telegram ilovasining maxfiylik sozlamalarini tekshiring." },
  { question: "Fragment’dan olgan username’im hamyonimni profilimda oshkor qiladimi?", answer: "Fragment hamyonni akkauntga bog‘laydigan ma’lumotni saqlamasligini aytadi. Biroq kolleksion username egaligi xaridda ishlatilgan hamyonga o‘tadi va takliflar hammaga ochiq, ya’ni blokcheynda iz baribir qoladi." },
  { question: "Do‘stimga Premium tug‘ilgan kun sovg‘asi qilmoqchiman. Uning TON manzilini so‘rashim kerakmi?", answer: "Kerak emas: Premium Telegram’ning sovg‘a mexanizmi bilan ulanadi, buning uchun @username’ning o‘zi yetadi. Faqat do‘stingizda faol obuna yo‘qligini oldindan bilib oling." },
  { question: "Hamyonni bog‘lasam, NFT sovg‘alarim hammaga ko‘rinadimi?", answer: "Bot API’da kartada NFT va uning atributlarini ko‘rsatish uchun klasslar bor, demak bunday bo‘lishi ehtimoldan xoli emas. Aniq nima ko‘rinishini funksiya chiqqanda boshqa akkauntdan kirib tekshiring." },
  { question: "Bot «hamyonni ulang, keyin Stars beramiz» desa, nima qilay?", answer: "Hamyonni ulamang va bu botdan chiqib keting: so‘mda xarid qilganda hamyon kerak bo‘lmaydi. StarsPaymee faqat @username so‘raydi, shubha bo‘lsa @StarsPaymeeSupport’ga yozing." },
  { question: "Stars’ni Gram bilan olgan arzonmi yoki so‘mda?", answer: `Gram bilan to‘langanda narx Gram kursiga bog‘liq, shuning uchun hammaga mos bitta javob yo‘q. So‘mda narx oldindan ma’lum: karta yoki balansdan 1 dona ${som(STARS_PER_UNIT_UZS, "uz")}, onlayn usullarda ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Ikkalasini bir kunning o‘zida solishtiring.` },
  { question: "Akkauntim o‘g‘irlansa, unga bog‘langan hamyondagi pul ham xavf ostida qoladimi?", answer: "Bu hamyon turiga bog‘liq, buni hamyon ilovasining qoidalaridan bilib oling. Har qanday holatda 2FA’ni yoqing, tiklash so‘zlarini hech kimga bermang, katta mablag‘ni esa profilga ulanmagan alohida hamyonda saqlang." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, для покупки Stars или Premium привязывать кошелёк к аккаунту Telegram не нужно. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> спрашивает только @username, а оплата идёт в сумах. Про отправку Gram по юзернейму пока пишут только в постах каналов. В официальной документации есть лишь карточка TON-кошелька, которая видна в профиле. Как отправлять деньги по юзернейму, там не сказано.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#beta-haqidagi-post-nimani-davo", label: "Что говорится в посте о бете и что из этого подтверждено?" },
          { href: "#dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga", label: "Что новинки Bot API про кошельки значат для обычного пользователя?" },
          { href: "#username-boyicha-gram-va-username", label: "Чем Gram по юзернейму отличается от покупки Stars по @username?" },
          { href: "#bot-hamyon-soraydimi-somda-xarid", label: "Просит ли бот кошелёк и что нужно для покупки за сумы?" },
          { href: "#hamyonni-profilga-boglash-qanday-xavf", label: "Кто и что увидит, если карточка кошелька появится в профиле?" },
          { href: "#hamyon-kartasini-profilga-chiqarishdan-oldin", label: "Что проверить, прежде чем выводить карточку кошелька в профиль?" },
          { href: "#botga-hamyon-manzili-yoki-fragment", label: "Что вписывать в форму заказа: @username, адрес кошелька или имя .t.me?" },
          { href: "#xarid-paytida-hamyon-soralsa-qaysi", label: "Если при покупке просят кошелёк: какие сообщения выдают обман?" },
          { href: "#hamyonsiz-faqat-username-bilan-stars", label: "Как купить Stars или Premium без кошелька, только по @username?" },
        ]}
      />
      <h2 id="beta-haqidagi-post-nimani-davo">Что говорится в посте о бете и что из этого подтверждено?</h2>
      <p>По Telegram-каналам разошёлся пост о том, что в новой бета-версии можно будет привязать адрес Gram-кошелька к аккаунту. Тогда длинный адрес не придётся вводить вручную: деньги можно будет отправлять по юзернейму. Ещё автор пишет, что при долгом нажатии на адрес кошелька появится отдельное меню действий.</p>
      <p>Всё это слова автора поста, а не официальная информация. Сверим их с документацией самого Telegram.</p>
      <p><b>Что подтверждено.</b> В <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документации Bot API</a> сказано, что в версии 10.4 для личных чатов добавили поле ChatFullInfo.ton_wallet_card. Документация описывает его как карточку TON-кошелька, которая показывается на странице профиля пользователя. В той же версии появились классы TonWalletCard, TonWalletCardSticker, TonNft и TonNftAttribute. Класс StoryAreaPosition переименовали в AreaPosition: теперь он описывает ещё и положение стикеров на карточке кошелька. Можно предположить, что карточку разрешат украшать стикерами. Но это только догадка.</p>
      <p><b>Что не подтверждено.</b> В официальных источниках нет ни отправки денег по юзернейму, ни самой бета-версии, ни меню по долгому нажатию. Не сказано и о том, обязательна привязка или нет. Пока Telegram не объявит об этом официально, всё это остаётся слухами.</p>
      <h2 id="dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga">Что новинки Bot API про кошельки значат для обычного пользователя?</h2>
      <p>Bot API — документация для разработчиков. Новое поле в ней не говорит, когда и в каком виде функция появится в приложении. Зато по нему видно, в какую сторону движется Telegram.</p>
      <CompareTable
        headers={["Элемент", "Что сказано в документации", "Что это может значить для вас"]}
        rows={[
          ["ton_wallet_card", "Карточка TON-кошелька на странице профиля (10.4)", "В профиле может появиться карточка кошелька"],
          ["TonWalletCardSticker и AreaPosition", "Стикеры на карточке и их расположение", "Карточку, возможно, разрешат украшать стикерами"],
          ["TonNft, TonNftAttribute", "Классы для NFT и их атрибутов (10.4)", "На карточке могут показываться NFT"],
          ["ton_wallet_transfer", "Служебное сообщение: перевод через TON-кошелёк", "Перевод появится в чате отдельным сообщением, а не обычным текстом"],
          ["RichTextTonAddress", "Адрес в блокчейне TON внутри сообщения (10.4)", "Адрес в тексте может выделяться как отдельный элемент"],
        ]}
      />
      <Notice label={"Важно"}>Третий столбец — предположения. Что, когда и кому будет видно в приложении, в этой статье не подтверждено. Полное описание классов тоже не изучалось.</Notice>
      <p>Строки «отправка по юзернейму» в таблице нет. Показать карточку в профиле и переводить деньги по юзернейму — это разные вещи.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="username-boyicha-gram-va-username">Чем Gram по юзернейму отличается от покупки Stars по @username?</h2>
      <p>В обоих случаях адресом служит @username, поэтому их часто путают. Но переводится разное, и попадает оно в разные места.</p>
      <CompareTable
        headers={["Вопрос", "Gram по юзернейму (заявление из поста)", "Stars или Premium по @username"]}
        rows={[
          ["Что передаётся", "Монета Gram (TON)", "Stars или подписка Premium"],
          ["Где хранится", "В кошельке в блокчейне", "В аккаунте Telegram"],
          ["Что нужно", "Кошелёк и привязанный к нему адрес", "Только @username"],
          ["Чем платить", "Gram", "Сумами: карта, Click, Payme, Uzum, Paynet"],
          ["Нужен ли кошелёк", "Да", "Нет"],
          ["Текущий статус", "Официально не подтверждено", "Работает в боте"],
        ]}
      />
      <p>В StarsPaymee @username нужен только для того, чтобы указать, кому отправить заказ. Premium подключается по юзернейму через механизм подарков Telegram. Пароль, SMS-код и вход в аккаунт не требуются. Почему монеты в Wallet хранятся отдельно от баланса Stars, объясняем в статье <Link href="/blog/telegram-wallet-va-stars-farqi">о разнице между Telegram Wallet и Stars</Link>.</p>
      <h2 id="bot-hamyon-soraydimi-somda-xarid">Просит ли бот кошелёк и что нужно для покупки за сумы?</h2>
      <p>Бот не просит адрес кошелька. Выйдет функция привязки или нет, покупка за сумы будет проходить так же. Для заказа нужны две вещи: правильный @username и способ оплаты.</p>
      <p>Способы оплаты:</p>
      <ul>
        <li>Click, Payme, Uzum или Paynet (через приложение или терминал Paynet можно заплатить и наличными);</li>
        <li>перевод на карту UzCard или HUMO;</li>
        <li>баланс бота.</li>
      </ul>
      <p>Международная карта, криптокошелёк и VPN не нужны.</p>
      <p>Цена Stars зависит от способа оплаты. При переводе на карту или оплате с баланса бота 1 звезда стоит {som(STARS_PER_UNIT_UZS, "ru")}. Через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} за штуку. Минимальный заказ — 50 Stars. Premium стоит одинаково при любом способе оплаты: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Есть и тариф на 1 месяц, его цена указана в боте. Подробности — на страницах <Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link>.</p>
      <Notice label={"Важно"}>Если вам говорят «без привязки кошелька Stars не придут», не верьте: такого условия нет. Увидели такое требование — не платите.</Notice>
      <p>Если у вас в кошельке есть Gram и вы не знаете, какой способ удобнее, прочитайте <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">сравнение оплаты в Gram и в сумах</Link>.</p>
      <h2 id="hamyonni-profilga-boglash-qanday-xavf">Кто и что увидит, если карточка кошелька появится в профиле?</h2>
      <p>Если функция выйдет, изменится в первую очередь то, что видят другие. Забрать ваши деньги проще не станет, а вот узнать о них — станет.</p>
      <ul>
        <li><b>Станет известно, чей кошелёк.</b> Если карточка стоит в профиле, любой, кто знает ваш юзернейм, увидит и кошелёк. Переводы в блокчейне открыты, поэтому баланс и история переводов могут оказаться связаны с вашим профилем.</li>
        <li><b>NFT будут на виду.</b> В Bot API есть классы, чтобы показывать на карточке NFT и их атрибуты. Дорогой коллекционный подарок на виду может привлечь мошенников.</li>
        <li><b>Fragment — отдельный сервис.</b> <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> пишет, что не хранит данных, по которым кошелёк можно связать с аккаунтом Telegram. При этом там всем видно, с какого кошелька сделано предложение. Карточка в профиле и правила Fragment — разные вещи, их не стоит смешивать.</li>
        <li><b>Юзернейм — не ключ.</b> Зная ваш юзернейм, вывести деньги из кошелька нельзя. Деньги теряют, когда сид-фраза или пароль кошелька попадают в чужие руки или когда угоняют аккаунт.</li>
      </ul>
      <p>Чем опасен для Stars кошелёк, подключённый к Fragment, разбираем в статье <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">о подключении кошелька к Fragment и рисках для Stars</Link>. О других кнопках, которые ожидают в профиле, читайте в материале <Link href="/blog/telegram-profil-balans-tugmasi-qr-kod">о кнопке баланса и QR-коде</Link>.</p>
      <h2 id="hamyon-kartasini-profilga-chiqarishdan-oldin">Что проверить, прежде чем выводить карточку кошелька в профиль?</h2>
      <p>Если функцию откроют для всех, действуйте так:</p>
      <Steps>
        <Step title={"Проверьте источник"}>посмотрите, есть ли объявление на telegram.org или core.telegram.org. Пост в канале или скриншот доказательством не считаются.</Step>
        <Step title={"Настраивайте только в самом приложении"}>включайте карточку в настройках Telegram, а не через бота, сайт или ссылку из чата.</Step>
        <Step title={"Выберите отдельный кошелёк"}>не подключайте к открытому профилю кошелёк с крупной суммой или дорогими NFT. Хватит небольшого кошелька для повседневных трат.</Step>
        <Step title={"Проверьте, что видно другим"}>зайдите с другого аккаунта или попросите друга посмотреть, как ваш профиль выглядит для постороннего.</Step>
        <Step title={"Включите защиту"}>убедитесь, что включён облачный пароль (2FA). Никому не сообщайте сид-фразу, даже тому, кто называет себя «поддержкой».</Step>
        <Step title={"Если торопят — остановитесь"}>официально неизвестно, обязательна привязка или нет. Если кто-то вас подгоняет или требует привязать кошелёк, ничего не делайте.</Step>
      </Steps>
      <h2 id="botga-hamyon-manzili-yoki-fragment">Что вписывать в форму заказа: @username, адрес кошелька или имя .t.me?</h2>
      <p>Новички иногда вписывают туда, где бот просит юзернейм, адрес кошелька или имя с Fragment. Что для чего нужно — в таблице.</p>
      <CompareTable
        headers={["Запись", "Как выглядит", "Где нужна", "Подходит для заказа Stars или Premium"]}
        rows={[
          ["Обычный @username", "@имя", "Найти человека или канал в Telegram", "Да, вписывают именно его"],
          ["Адрес кошелька", "Длинная строка из букв и цифр", "Получать Gram (TON)", "Нет"],
          ["Коллекционный юзернейм", "@имя с Fragment", "Владение переходит к TON-кошельку, которым оплатили покупку", "Если привязан к аккаунту, используется как обычный @username"],
          ["Адрес TON Web 3.0", "resolved.t.me", "Указан на странице юзернейма на Fragment", "Нет"],
        ]}
      />
      <p>Например, на <a href={"https://fragment.com/username/resolved"} target="_blank" rel="noopener noreferrer">странице @resolved</a> на Fragment адресом TON Web 3.0 указан resolved.t.me. Сам <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> пишет, что владение коллекционным юзернеймом переходит к кошельку, которым оплатили покупку. Значит, такой юзернейм уже связан с кошельком, но это не карточка кошелька в профиле. Как получить такое имя, рассказано в статье <Link href="/blog/telegram-username-sotib-olish">о покупке юзернейма в Telegram</Link>.</p>
      <p>Из-за одной неверной буквы заказ может уйти другому человеку. Например, @azizuz вместо @aziz_uz — это уже другой аккаунт. Поэтому не набирайте юзернейм вручную, а копируйте его из профиля.</p>
      <h2 id="xarid-paytida-hamyon-soralsa-qaysi">Если при покупке просят кошелёк: какие сообщения выдают обман?</h2>
      <p>Шумиху вокруг новой функции используют мошенники. Будьте осторожны, если при покупке Stars или Premium вам пишут:</p>
      <ul>
        <li><b>«Подключите кошелёк к боту, чтобы пришли Stars».</b> Для покупки за сумы кошелёк не нужен. Такой бот, скорее всего, хочет получить доступ к вашему кошельку.</li>
        <li><b>«Новая функция в бете, вот ссылка для включения».</b> Поддельный Mini App или сайт сначала просит подключить кошелёк, а потом пытается вывести с него деньги. Ищите настройку только в самом приложении Telegram.</li>
        <li><b>Скриншот «ваш платёж поступил».</b> Перевод через TON-кошелёк показывается в чате служебным сообщением, а картинка — это просто картинка. Пришли ли деньги, проверяйте в своём кошельке или в эксплорере.</li>
        <li><b>«Назовите SMS-код, чтобы активировать Premium».</b> StarsPaymee не спрашивает ни пароль, ни код. Тот, кто просит код, хочет забрать ваш аккаунт.</li>
        <li><b>«Продам Stars, оплатите в Gram по моему юзернейму».</b> Переводы по юзернейму не подтверждены. Деньги, отправленные незнакомому продавцу заранее, можно не вернуть.</li>
        <li><b>«Пришлите сид-фразу, проверим привязку кошелька».</b> Тот, у кого ваша сид-фраза, полностью управляет кошельком. Никакой такой проверки не существует.</li>
      </ul>
      <p>Как проверять посты про «новый раздел», показано в статье <Link href="/blog/telegram-money-bolimi-gram-wallet">о разделе «Money» и GRAM Wallet</Link>. Если пришло подозрительное сообщение, напишите в поддержку <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="hamyonsiz-faqat-username-bilan-stars">Как купить Stars или Premium без кошелька, только по @username?</h2>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук) или срок Premium.</Step>
        <Step title={"Укажите @username"}>свой или друга. Скопируйте его из профиля и ещё раз сверьте буквы.</Step>
        <Step title={"Выберите способ оплаты"}>перевод на карту, баланс бота, Click, Payme, Uzum или Paynet. Цена Stars зависит от способа, поэтому перед оплатой проверьте сумму.</Step>
        <Step title={"Проверьте зачисление"}>заказ обычно доставляется автоматически за несколько секунд (примерно за 5). Если ничего не пришло, напишите в поддержку и укажите данные заказа.</Step>
      </Steps>
      <p>С Premium есть одно исключение. Если на аккаунте уже действует подписка, бот не откроет новый заказ: новый срок не добавляется к действующей подписке. Если хотите подарить Premium другу, сначала спросите, нет ли он у него уже.</p>
      <p>StarsPaymee — независимый сервис, он работает уже 1,5 года. Официального партнёрства с Telegram у него нет.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/username/resolved", label: "resolved (Fragment)" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Функция привязки кошелька к аккаунту Telegram уже доступна всем?", answer: "Официального объявления нет. В Bot API есть только поле для карточки кошелька в профиле. Когда и для кого она появится в приложении, неизвестно." },
  { question: "Если мой кошелёк не привязан, сможет ли друг отправить мне Gram по юзернейму?", answer: "Отправка Gram по юзернейму в официальных источниках не подтверждена. Пока надёжнее прислать адрес кошелька самому. После вставки другу стоит сверить символы в начале и в конце адреса." },
  { question: "Не смешается ли мой баланс Stars с кошельком?", answer: "Нет. Stars учитываются в аккаунте Telegram, а Gram хранится в кошельке в блокчейне. Даже если в профиле появится карточка кошелька, Stars будут покупаться как раньше." },
  { question: "Можно будет потом убрать карточку кошелька из профиля?", answer: "Как её будут скрывать или удалять, официально пока неизвестно. Когда функция выйдет, загляните в настройки конфиденциальности Telegram." },
  { question: "Раскрывает ли юзернейм, купленный на Fragment, мой кошелёк в профиле?", answer: "Fragment пишет, что не хранит данных, по которым кошелёк можно связать с аккаунтом. Но владение коллекционным юзернеймом переходит к кошельку, которым его оплатили, а предложения видны всем. Так что след в блокчейне остаётся в любом случае." },
  { question: "Нужен ли адрес кошелька друга, чтобы подарить ему Premium?", answer: "Нет, достаточно его @username: Premium подключается через механизм подарков Telegram. Только заранее убедитесь, что у друга нет действующей подписки." },
  { question: "Если я привяжу кошелёк, все увидят мои NFT-подарки?", answer: "В Bot API есть классы для показа NFT и их атрибутов на карточке, так что такое возможно. Что именно будет видно, проверьте с другого аккаунта, когда функция выйдет." },
  { question: "Бот пишет «подключите кошелёк, потом пришлём Stars». Что делать?", answer: "Не подключайте кошелёк и уходите из этого бота: для покупки за сумы кошелёк не нужен. StarsPaymee просит только @username. Если сомневаетесь, напишите в @StarsPaymeeSupport." },
  { question: "Что дешевле: покупать Stars за Gram или за сумы?", answer: `При оплате в Gram цена зависит от курса Gram, поэтому однозначного ответа нет. В сумах цена известна заранее: ${som(STARS_PER_UNIT_UZS, "ru")} за штуку с карты или баланса, ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} при онлайн-оплате. Сравнивайте оба варианта в один и тот же день.` },
  { question: "Если угонят аккаунт, под угрозой окажутся и деньги в привязанном кошельке?", answer: "Это зависит от типа кошелька, уточните в правилах его приложения. В любом случае включите 2FA и никому не сообщайте сид-фразу. Крупные суммы храните в отдельном кошельке, не связанном с профилем." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, you don’t need to link a wallet to your Telegram account to buy Stars or Premium. <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> asks only for an @username, and you pay in UZS. The claim that you can send Gram by username comes only from channel posts so far. The official documentation mentions only a TON wallet card shown on the profile. It says nothing about sending money by username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#beta-haqidagi-post-nimani-davo", label: "What does the beta post claim, and what is actually confirmed?" },
          { href: "#dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga", label: "What do the Bot API wallet changes mean for a regular user?" },
          { href: "#username-boyicha-gram-va-username", label: "Gram by username vs. Stars by @username: what’s the difference?" },
          { href: "#bot-hamyon-soraydimi-somda-xarid", label: "Does the bot ask for a wallet? What you need to pay in UZS" },
          { href: "#hamyonni-profilga-boglash-qanday-xavf", label: "If a wallet card sits on your profile, who sees what?" },
          { href: "#hamyon-kartasini-profilga-chiqarishdan-oldin", label: "What to check before showing a wallet card on your profile" },
          { href: "#botga-hamyon-manzili-yoki-fragment", label: "What goes in the order form: @username, wallet address or .t.me name?" },
          { href: "#xarid-paytida-hamyon-soralsa-qaysi", label: "Asked for a wallet during purchase? Messages that signal a scam" },
          { href: "#hamyonsiz-faqat-username-bilan-stars", label: "How to buy Stars or Premium with just an @username, no wallet" },
        ]}
      />
      <h2 id="beta-haqidagi-post-nimani-davo">What does the beta post claim, and what is actually confirmed?</h2>
      <p>A post has been spreading across Telegram channels. It says a new beta version lets you link a Gram wallet address to your account. According to the post, you could then send funds by username instead of typing a long address by hand. It also claims that a long press on a wallet address opens a separate set of actions.</p>
      <p>All of this comes from the post’s author. None of it is official. Here’s how it compares with Telegram’s own documentation.</p>
      <p><b>What’s confirmed.</b> The <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a> says version 10.4 added a ChatFullInfo.ton_wallet_card field for private chats. The documentation describes it as the user’s TON wallet card, which is shown on their profile page. The same version added the TonWalletCard, TonWalletCardSticker, TonNft and TonNftAttribute classes. The StoryAreaPosition class was renamed to AreaPosition because it now also describes where stickers sit on TON wallet cards. That suggests you may be able to decorate the card with stickers, but this is only a guess.</p>
      <p><b>What’s not confirmed.</b> We found no official source for any of the following: sending money by username, the beta version itself, the long-press menu, or whether linking a wallet will be required or optional. Until Telegram announces them, these are rumors.</p>
      <h2 id="dasturchilar-hujjatidagi-yangiliklar-stars-xaridoriga">What do the Bot API wallet changes mean for a regular user?</h2>
      <p>The Bot API is documentation written for developers. A new field there doesn’t tell you when a feature will reach the app or what it will look like. It does hint at what Telegram is working on.</p>
      <CompareTable
        headers={["Element", "What the documentation says", "What it might mean for you"]}
        rows={[
          ["ton_wallet_card", "TON wallet card shown on the profile page (10.4)", "A wallet card may appear on your profile"],
          ["TonWalletCardSticker and AreaPosition", "Stickers on the card and where they’re placed", "You may be able to decorate the card with stickers"],
          ["TonNft, TonNftAttribute", "Classes for an NFT and its attributes (10.4)", "The card may display NFTs"],
          ["ton_wallet_transfer", "Service message: a transfer with a TON wallet", "A transfer shows up in chat as its own message, not as plain text"],
          ["RichTextTonAddress", "A TON blockchain address inside a message (10.4)", "Addresses may appear as a separate element in message text"],
        ]}
      />
      <Notice label={"Important"}>The third column is a guess. This article doesn’t confirm what will appear in the app, when, or for whom. We also haven’t reviewed the full class definitions.</Notice>
      <p>There’s no “send by username” row in this table. Showing a card on a profile is one thing. Sending money to a username is a different feature.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="username-boyicha-gram-va-username">Gram by username vs. Stars by @username: what’s the difference?</h2>
      <p>People often mix these up because in both cases the @username works like an address. In practice, each one sends something different to a different place.</p>
      <CompareTable
        headers={["Question", "Gram by username (the post’s claim)", "Stars or Premium by @username"]}
        rows={[
          ["What gets sent", "Gram (TON) coins", "Stars or a Premium subscription"],
          ["Where it’s held", "In a blockchain wallet", "In your Telegram account"],
          ["What you need", "A wallet with a linked address", "Just an @username"],
          ["How you pay", "In Gram", "In UZS: card, Click, Payme, Uzum, Paynet"],
          ["Do you need to open a wallet?", "Yes", "No"],
          ["Current status", "Not officially confirmed", "Already works in the bot"],
        ]}
      />
      <p>At StarsPaymee, the @username only shows who the order is for. Premium is activated by username through Telegram’s gifting mechanism. You’re never asked for a password, an SMS code or access to your account. To see why Wallet coins are kept apart from your Stars balance, read <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs. Stars</Link>.</p>
      <h2 id="bot-hamyon-soraydimi-somda-xarid">Does the bot ask for a wallet? What you need to pay in UZS</h2>
      <p>The bot doesn’t ask for a wallet address. Buying in UZS will work the same way whether wallet linking launches or not. You need two things to place an order: the correct @username and a payment method.</p>
      <p>Payment methods:</p>
      <ul>
        <li>Click, Payme, Uzum or Paynet (you can also pay cash through the Paynet app or at a Paynet terminal)</li>
        <li>a transfer to an UzCard or HUMO card</li>
        <li>your bot balance</li>
      </ul>
      <p>You don’t need an international card, a crypto wallet or a VPN.</p>
      <p>The price of Stars depends on how you pay. With a card transfer or your bot balance, one Star costs {som(STARS_PER_UNIT_UZS, "en")}. Through Click, Payme, Uzum or Paynet, one Star costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. Premium costs the same with every payment method: 3 months for {som(premium(3), "en")}, 6 months for {som(premium(6), "en")} and 12 months for {som(premium(12), "en")}. There’s also a 1-month plan, and the bot shows its price. For full details, see the <Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> pages.</p>
      <Notice label={"Important"}>If someone says “your Stars won’t arrive unless you link a wallet,” don’t believe them. There’s no such requirement. If you see a demand like this, stop the payment.</Notice>
      <p>If your wallet holds Gram and you’re not sure which option works better for you, read our <Link href="/blog/macos-telegram-hamyoni-stars-gram-yoki-som">Gram vs. UZS comparison</Link>.</p>
      <h2 id="hamyonni-profilga-boglash-qanday-xavf">If a wallet card sits on your profile, who sees what?</h2>
      <p>If this feature reaches the app, the main change will be visibility. Getting to your money won’t be any easier, but finding out about it will be.</p>
      <ul>
        <li><b>People can see who owns the wallet.</b> If the card sits on your profile page, anyone who knows your username will also see your wallet. Blockchain transfers are public, so your balance and transfers could become tied to your profile.</li>
        <li><b>Your NFTs stand out.</b> The Bot API includes classes for showing an NFT and its attributes on the card. An expensive collectible gift on display can draw scammers’ attention.</li>
        <li><b>Fragment is a separate service.</b> <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> says it doesn’t store any information that could tie your wallet to your Telegram account. But on Fragment, everyone can see which wallet made an offer. The profile card and Fragment’s rules are separate things, so keep them apart.</li>
        <li><b>A username isn’t a key.</b> Knowing your username doesn’t let anyone take money from your wallet. Funds are lost when your recovery phrase or wallet password falls into the wrong hands, or when your account is stolen.</li>
      </ul>
      <p>Our article on <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">Fragment wallet connections and Stars risk</Link> explains whether a wallet connected to Fragment puts your Stars at risk. Other profile buttons that may be coming are covered in <Link href="/blog/telegram-profil-balans-tugmasi-qr-kod">the balance button and QR code</Link>.</p>
      <h2 id="hamyon-kartasini-profilga-chiqarishdan-oldin">What to check before showing a wallet card on your profile</h2>
      <p>If the feature becomes available to everyone, follow these steps.</p>
      <Steps>
        <Step title={"Check the source"}>See whether there’s an announcement on telegram.org or core.telegram.org. A channel post or a screenshot doesn’t count as proof.</Step>
        <Step title={"Set it up only inside the app"}>Turn the card on from Telegram’s own settings, not through a bot, a website or a link in a chat.</Step>
        <Step title={"Use a separate wallet"}>Don’t link a wallet that holds large sums or valuable NFTs to a public profile. A small wallet for everyday use is enough.</Step>
        <Step title={"Check what others see"}>Open your profile from another account or ask a friend how it looks to a stranger.</Step>
        <Step title={"Turn on protection"}>Make sure two-step verification (2FA) is on. Never share your recovery phrase with anyone, including someone who says they’re “support.”</Step>
        <Step title={"Stop if someone pressures you"}>Nobody has officially said whether linking is required or optional. If someone rushes you or insists that you link a wallet, do nothing.</Step>
      </Steps>
      <h2 id="botga-hamyon-manzili-yoki-fragment">What goes in the order form: @username, wallet address or .t.me name?</h2>
      <p>Newcomers sometimes type a wallet address or a Fragment name where the bot asks for a username. The table below shows what each one is for.</p>
      <CompareTable
        headers={["Entry", "What it looks like", "Where it’s used", "Works for a Stars or Premium order?"]}
        rows={[
          ["Regular @username", "@name", "Finding a person or channel on Telegram", "Yes, this is exactly what you enter"],
          ["Wallet address", "A long string of letters and numbers", "Receiving Gram (TON)", "No"],
          ["Collectible username", "@name on Fragment", "Ownership goes to the TON wallet used to buy it", "If it’s attached to an account, it works like a regular @username"],
          ["TON Web 3.0 address", "resolved.t.me", "Shown on the username’s Fragment page", "No"],
        ]}
      />
      <p>For example, the <a href={"https://fragment.com/username/resolved"} target="_blank" rel="noopener noreferrer">@resolved page</a> on Fragment lists resolved.t.me as its TON Web 3.0 address. <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment</a> also says that ownership of a collectible username goes to the wallet used for the purchase. So a username like this is already tied to a wallet, but that’s not the same as a wallet card on your profile. To learn how to get one, see <Link href="/blog/telegram-username-sotib-olish">buying a Telegram username</Link>.</p>
      <p>A single wrong letter in the username can send your order to someone else. For example, @azizuz instead of @aziz_uz is a different account. That’s why you should copy the username from the profile instead of typing it.</p>
      <h2 id="xarid-paytida-hamyon-soralsa-qaysi">Asked for a wallet during purchase? Messages that signal a scam</h2>
      <p>Scammers use buzz about new features as cover. Be careful if you hear any of these while buying Stars or Premium:</p>
      <ul>
        <li><b>“Connect your wallet to the bot so your Stars can arrive.”</b> You don’t need a wallet to buy in UZS. A bot that says this may be trying to get permissions over your wallet.</li>
        <li><b>“The new feature is in beta — here’s the link to turn it on.”</b> A fake Mini App or website will get you to connect your wallet first and then try to drain it. Look for settings only inside the Telegram app.</li>
        <li><b>A screenshot saying “Your payment has arrived.”</b> A real TON wallet transfer appears in chat as a service message, and a picture isn’t a service message. Confirm the payment in your own wallet or in a blockchain explorer.</li>
        <li><b>“Tell me the SMS code to activate Premium.”</b> StarsPaymee never asks for a password or a code. Anyone who asks for the code wants to take over your account.</li>
        <li><b>“I’ll sell you Stars, just pay me in Gram via my username.”</b> Transfers by username aren’t confirmed. If you send money upfront to a stranger, you may not get it back.</li>
        <li><b>“Send us your recovery phrase so we can check your wallet link.”</b> Whoever has your recovery phrase has full control of your wallet. No such check exists.</li>
      </ul>
      <p>Our article on <Link href="/blog/telegram-money-bolimi-gram-wallet">Telegram’s “Money” section and GRAM Wallet</Link> shows how to fact-check posts about a “new section.” If you get a suspicious message, contact <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> for help.</p>
      <h2 id="hamyonsiz-faqat-username-bilan-stars">How to buy Stars or Premium with just an @username, no wallet</h2>
      <Steps>
        <Step title={"Open the bot"}>Go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose a product"}>Pick Stars (50 minimum) or a Premium plan.</Step>
        <Step title={"Enter the @username"}>Use yours or a friend’s. Copy it from the profile and check the spelling once more.</Step>
        <Step title={"Choose a payment method"}>You can pay by card transfer, bot balance, Click, Payme, Uzum or Paynet. The Stars price depends on the method, so check the total before you pay.</Step>
        <Step title={"Check that it arrived"}>Orders are usually delivered automatically within a few seconds (about 5 seconds). If nothing arrives, message support with your order details.</Step>
      </Steps>
      <p>There’s one exception for Premium: if the account already has an active subscription, the bot won’t open a new order, because new time isn’t added on top of an active subscription. If you’re gifting Premium to a friend, ask first whether they already have it.</p>
      <p>StarsPaymee is an independent service that has been running for 1.5 years. It isn’t officially affiliated with Telegram.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://fragment.com/username/resolved", label: "resolved (Fragment)" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can everyone link a wallet to their Telegram account right now?", answer: "We found no official announcement about this. The Bot API has a field for a wallet card shown on the profile, but it’s unknown when the feature will reach the app or who will get it." },
  { question: "If my wallet isn’t linked, can a friend send me Gram by username?", answer: "No official source confirms that Gram can be sent by username. For now, the reliable method is to send your wallet address yourself. After your friend pastes it, they should compare the first and last characters." },
  { question: "Will my Stars balance get merged with my wallet?", answer: "No. Stars are counted in your Telegram account, while Gram sits in a blockchain wallet. Buying Stars will work as before even if a wallet card appears on your profile." },
  { question: "Can I remove the wallet card from my profile later?", answer: "It isn’t officially known yet how hiding or removing the card will work. When the feature launches, check the privacy settings in the Telegram app." },
  { question: "Does a username I bought on Fragment reveal my wallet on my profile?", answer: "Fragment says it doesn’t store data that could tie your wallet to your account. Still, ownership of a collectible username goes to the wallet used for the purchase, and offers are public, so a trail remains on the blockchain." },
  { question: "Do I need my friend’s wallet address to gift them Premium?", answer: "No. Their @username is enough, since Premium is activated through Telegram’s gifting mechanism. Just make sure beforehand that your friend doesn’t already have an active subscription." },
  { question: "If I link a wallet, will everyone see my NFT gifts?", answer: "The Bot API includes classes for showing an NFT and its attributes on the card, so it’s possible. When the feature launches, open your profile from another account to see exactly what’s visible." },
  { question: "A bot says “connect your wallet and we’ll send your Stars.” What should I do?", answer: "Don’t connect your wallet. Leave that bot, because you don’t need a wallet to buy in UZS. StarsPaymee asks only for an @username, and if anything seems off, you can message @StarsPaymeeSupport." },
  { question: "Is it cheaper to buy Stars with Gram or in UZS?", answer: `With Gram, the price depends on the Gram exchange rate, so the answer changes. In UZS, you know the price upfront: one Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card or bot balance and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} with online payment methods. Compare both on the same day.` },
  { question: "If my account is stolen, is the money in a linked wallet at risk too?", answer: "That depends on the type of wallet, so check the rules of your wallet app. Either way, turn on 2FA, never share your recovery phrase, and keep large sums in a separate wallet that isn’t linked to your profile." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["hamyonni telegram akkauntga bog'lash","telegram hamyon bog'lash","gram hamyon telegram akkaunt","username bo'yicha gram yuborish","telegram ton hamyon kartasi","telegram hamyonsiz stars olish","привязать кошелек к telegram аккаунту","перевод по юзернейму telegram","Gram кошелек telegram бета","TON кошелек в профиле telegram","купить звезды telegram без кошелька"],
  howToSteps: [
    { name: "Manbani tekshiring", text: "telegram.org yoki core.telegram.org’da e’lon bor-yo‘qligini ko‘ring. Kanal posti yoki skrinshot dalil bo‘la olmaydi." },
    { name: "Faqat ilovaning o‘zida sozlang", text: "kartani bot, sayt yoki chatdagi havola orqali emas, Telegram sozlamalaridan yoqing." },
    { name: "Alohida hamyon tanlang", text: "katta mablag‘ yoki qimmat NFT turgan hamyonni ochiq profilga ulamang. Kundalik ishlatiladigan kichik hamyon yetarli." },
    { name: "Ko‘rinishni tekshiring", text: "boshqa akkauntdan kirib ko‘ring yoki do‘stingizdan so‘rang: profilingiz begona odamga qanday ko‘rinadi?" },
    { name: "Himoyani yoqing", text: "ikki bosqichli parol (2FA) yoqilganini tekshiring. Tiklash so‘zlarini hech kimga, o‘zini «support» deb tanishtirgan odamga ham bermang." },
    { name: "Bosim qilsa, to‘xtang", text: "bog‘lash majburiy yoki ixtiyoriy ekani rasman ma’lum emas. Kimdir shoshiltirsa yoki bog‘lashni talab qilsa, hech narsa qilmang." },
  ],
  locales: {
    uz: {
      title: "Hamyonni Telegram akkauntga bog‘lash: Stars va Premium olish uchun kerakmi?",
      excerpt: "Stars yoki Premium’ni so‘mda olishda hamyon bog‘lanmaydi — @username yetadi. Maqolada «username bo‘yicha Gram» posti, Bot API’dagi hamyon kartasi, bog‘lash xavflari va aldov belgilari tekshirilgan.",
      metaTitle: "Hamyonni Telegram akkauntga bog‘lash",
      metaDescription: "Stars yoki Premium’ni so‘mda olishda hamyon bog‘lanmaydi — @username yetadi. Maqolada «username bo‘yicha Gram» posti, Bot API’dagi hamyon kartasi, bog‘lash…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Привязка кошелька к Telegram: нужна ли она для покупки Stars и Premium?",
      excerpt: "Нет, для покупки Stars или Premium за сумы привязывать кошелёк не нужно — хватит @username. В статье разобраны слухи о Gram по юзернейму, карточка кошелька в Bot API и риски привязки.",
      metaTitle: "Привязка кошелька к Telegram",
      metaDescription: "Нет, для покупки Stars или Premium за сумы привязывать кошелёк не нужно — хватит @username. В статье разобраны слухи о Gram по юзернейму, карточка кошелька в…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Do You Need to Link a Wallet to Telegram to Buy Stars or Premium?",
      excerpt: "No. To buy Stars or Premium in UZS, you only need an @username, not a linked wallet. This article checks the “send Gram by username” claim, explains the Bot API wallet card and covers the risks of linking a wallet.",
      metaTitle: "Do You Need to Link a Wallet to Telegram to Buy Stars",
      metaDescription: "No. To buy Stars or Premium in UZS, you only need an @username, not a linked wallet. This article checks the “send Gram by username” claim, explains the Bot…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
