import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "nft-sovgani-dostga-otkazish-tartibi";

/**
 * NFT sovg‘ani do‘stga o‘tkazish: tartib, Stars narxi va oluvchiga nima kerak
 *
 * Avtoblogyoz yasagan maqola (2026-11-13): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kolleksion NFT sovg‘ani bozordan sotib olib, Durov qilgandek do‘stiga hadya qilmoqchi bo‘lgan o‘zbek foydalanuvchisi «nft sovg‘ani do‘stga o‘tkazish» deb qidiradi. U o‘tkazish qanday qilinishini, qancha Stars turishini, oluvchiga nima kerakligini va so‘mda qanday olishni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-13):
 *   https://fragment.com/gift/plushpepe-834
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://telegram.org/blog/gift-marketplace-and-more
 *   https://core.telegram.org/api/gifts
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, upgrade qilingan kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazsa bo‘ladi. Telegram API hujjatiga ko‘ra, sovg‘ada o‘tkazish narxi belgilanmagan bo‘lsa, u to‘lovsiz o‘tishi mumkin. Narx belgilangan bo‘lsa, Stars to‘lanadi. Aniq summani ilova tasdiqlashdan oldin ko‘rsatadi. Do‘stingizga Telegram akkaunti va to‘g‘ri @username yetarli. Blokcheyn orqali o‘tkazilsa, TON hamyon ham kerak bo‘ladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#kolleksion-nft-sovgani-dostga-otkazsa", label: "Kolleksion NFT sovg‘ani do‘stga o‘tkazsa bo‘ladimi?" },
          { href: "#telegram-ichida-sovgani-dostga-qanday", label: "Telegram ichida sovg‘ani do‘stga qanday o‘tkazasiz?" },
          { href: "#otkazish-necha-stars-turadi-va", label: "O‘tkazish necha Stars turadi va bu qayerdan bilinadi?" },
          { href: "#uch-yol-yonma-yon-qaysi", label: "Uch yo‘l yonma-yon: qaysi biri sizga mos?" },
          { href: "#dostingizga-sovgani-qabul-qilish-uchun", label: "Do‘stingizga sovg‘ani qabul qilish uchun nima kerak?" },
          { href: "#sovgani-ton-hamyon-orqali-otkazish", label: "Sovg‘ani TON hamyon orqali o‘tkazish qachon kerak?" },
          { href: "#hadya-qilishdan-oldin-sotib-olayotgan", label: "Hadya qilishdan oldin sotib olayotgan nusxani qanday tekshirasiz?" },
          { href: "#nft-sovgani-somda-olib-dostga", label: "NFT sovg‘ani so‘mda olib, do‘stga yuborish tartibi" },
          { href: "#sovga-dostingizga-yetmasa-nima-qilasiz", label: "Sovg‘a do‘stingizga yetmasa nima qilasiz?" },
          { href: "#otkazishda-kop-uchraydigan-xatolar", label: "O‘tkazishda ko‘p uchraydigan xatolar" },
        ]}
      />
      <h2 id="kolleksion-nft-sovgani-dostga-otkazsa">Kolleksion NFT sovg‘ani do‘stga o‘tkazsa bo‘ladimi?</h2>
      <p>Bo‘ladi. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API hujjati</a>da kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazish mumkinligi to‘g‘ridan-to‘g‘ri yozilgan. Ayrim sovg‘alar to‘lovsiz o‘tadi, ayrimlari uchun Stars so‘raladi.</p>
      <p>Bu savol ko‘pincha «Durov Plush Pepe sovg‘a qildi» degan postdan keyin tug‘iladi. Lekin xaridni ham, sovg‘ani kim olganini ham rasmiy manba tasdiqlamaydi: <a href={"https://fragment.com/gift/plushpepe-834"} target="_blank" rel="noopener noreferrer">Fragment’dagi Plush Pepe #834 sahifasi</a>da egasi ism bilan emas, faqat TON hamyon manzili bilan ko‘rsatilgan. Shuning uchun bu yerda xabarning o‘zi tahlil qilinmaydi, sovg‘ani o‘zingiz qanday o‘tkazishingiz tushuntiriladi.</p>
      <p>Sovg‘ani do‘stga yetkazishning uch yo‘li bor:</p>
      <ul>
        <li>Telegram ichida, sizning profilingizdan uning profiliga;</li>
        <li>TON blokcheyni orqali, hamyondan hamyonga;</li>
        <li>tayyor sovg‘ani so‘mda sotib olib, do‘stga yuborish.</li>
      </ul>
      <Notice label={"Muhim"}>Gap faqat kolleksion (upgrade qilingan) sovg‘alar haqida. Oddiy gift uchun tartib boshqacha bo‘lishi mumkin. Hali sovg‘a turini tanlayotgan bo‘lsangiz, <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">tug‘ilgan kunga qaysi sovg‘a mos</Link> maqolasini o‘qing.</Notice>
      <h2 id="telegram-ichida-sovgani-dostga-qanday">Telegram ichida sovg‘ani do‘stga qanday o‘tkazasiz?</h2>
      <p>Sovg‘a allaqachon profilingizda turgan bo‘lsa, eng qisqa yo‘l shu. Tugma nomlari ilova versiyasi va tiliga qarab biroz farq qilishi mumkin, tartib esa bir xil.</p>
      <Steps>
        <Step title={"Profilni oching"}>«Sovg‘alar» bo‘limida o‘tkazmoqchi bo‘lgan kolleksion sovg‘ani bosing.</Step>
        <Step title={"O‘tkazish tugmasini tanlang"}>ilova kimga yuborishni so‘raydi.</Step>
        <Step title={"Do‘stni toping"}>chatlar ro‘yxatidan yoki @username bo‘yicha qidirib. Ism va profil rasmini solishtiring: bir harfi farq qiladigan soxta akkauntlar uchrab turadi.</Step>
        <Step title={"Narxga qarang"}>o‘tkazish pullik bo‘lsa, ilova Stars summasini tasdiqlashdan oldin ko‘rsatadi. Summani ko‘rmaguncha tasdiqlamang.</Step>
        <Step title={"Tasdiqlang va tekshiring"}>sovg‘a sizning ro‘yxatingizdan chiqib, do‘stingiz profilida paydo bo‘lishi kerak. Undan qisqa skrinshot so‘rasangiz, ikkalangiz ham xotirjam bo‘lasiz.</Step>
      </Steps>
      <Notice label={"Muhim"}>O‘tkazilgan sovg‘a oluvchining akkauntiga o‘tadi. O‘tkazishni bekor qilish tugmasi borligi rasmiy manbalarda tasdiqlanmagan. Adashib boshqa odamga ketsa, ishonchli yo‘l bitta: o‘sha odam sovg‘ani o‘zi sizga qayta o‘tkazadi. Shuning uchun 3-qadamda shoshilmang.</Notice>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="otkazish-necha-stars-turadi-va">O‘tkazish necha Stars turadi va bu qayerdan bilinadi?</h2>
      <p>Hamma sovg‘aga bitta tarif yo‘q. API hujjatida har bir kolleksion sovg‘aning o‘tkazish narxi alohida maydonda (transfer_stars) keladi. Maydon bo‘sh bo‘lsa, sovg‘a to‘lovsiz o‘tishi mumkin. To‘ldirilgan bo‘lsa, o‘sha miqdordagi Stars balansingizdan yechiladi.</p>
      <p>Amalda bundan uchta xulosa chiqadi:</p>
      <ul>
        <li>aniq summani faqat Telegram ilovasi, tasdiqlash oynasida ko‘rsatadi;</li>
        <li>ikki xil sovg‘ani o‘tkazish narxi turlicha bo‘lishi mumkin, shuning uchun boshqa birovning tajribasiga tayanmang;</li>
        <li>rasmiy manbada umumiy raqam berilmagan, shu sababli bu maqolada ham raqam yozilmaydi.</li>
      </ul>
      <p>Balansda Stars yetmasa, o‘tkazishni tasdiqlab bo‘lmaydi. Yetishmagan yulduzlarni so‘mda to‘ldirsa bo‘ladi: <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>da 1 ta Stars karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan to‘lansa {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali to‘lansa {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi. Eng kam buyurtma — 50 Stars. Batafsil ma’lumot <Link href="/stars">Stars sahifasi</Link>da.</p>
      <p>Misol: ilova o‘tkazish uchun Stars so‘rayapti, balansingizda esa kam. Avval o‘tkazish oynasidagi summani yozib oling. Keyin botda kamida shuncha (va 50 dan kam bo‘lmagan) Stars buyurtma qiling. Yulduzlar tushgach, o‘tkazishni qaytadan boshlang.</p>
      <Notice label={"Muhim"}>«O‘tkazish komissiyasini kartaga tashlang» yoki «tasdiqlash uchun SMS kodni yuboring» degan xabar kelsa, bu aldov. Telegram ichidagi o‘tkazish narxi ilovaning o‘zida ko‘rsatiladi va Stars bilan to‘lanadi.</Notice>
      <h2 id="uch-yol-yonma-yon-qaysi">Uch yo‘l yonma-yon: qaysi biri sizga mos?</h2>
      <CompareTable
        headers={["Yo‘l", "Nima kerak", "Narx qayerda ko‘rinadi", "Do‘stingiz nimani oladi", "Kimga mos"]}
        rows={[
          ["Telegram ichida", "Sovg‘a sizning profilingizda, do‘stning akkaunti", "Ilovaning tasdiqlash oynasida, ba’zan to‘lov yo‘q", "Sovg‘a uning profiliga tushadi", "Hamyoni yo‘q oddiy foydalanuvchi"],
          ["TON blokcheyni orqali", "Sovg‘ani NFT’ga aylantirish, ikkala tomonda TON hamyon", "Hamyon ilovasida, bu maqolada tekshirilmagan", "NFT uning hamyonida turadi", "Hamyon bilan ishlashni biladiganlar"],
          ["So‘mda olib yuborish", "@StarsPaymee_bot, so‘mdagi to‘lov, @username", "Botda, to‘lovdan oldin", "Siz tanlagan tayyor sovg‘a", "Stars ham, TON ham yo‘q xaridor"],
        ]}
      />
      <p>Do‘stingizda hamyon bo‘lmasa va sovg‘a allaqachon sizda bo‘lsa, Telegram ichidagi yo‘l eng sodda. Sovg‘a hali yo‘q bo‘lsa, uni avval sotib olish kerak: Telegram bozorida Stars bilan yoki botda so‘mda.</p>
      <h2 id="dostingizga-sovgani-qabul-qilish-uchun">Do‘stingizga sovg‘ani qabul qilish uchun nima kerak?</h2>
      <p>Oluvchidan ko‘p narsa talab qilinmaydi, lekin quyidagilarni oldindan aniqlab oling:</p>
      <ul>
        <li><b>Telegram akkaunti va @username.</b> Ilova ichida do‘stni chatdan tanlash mumkin, bot orqali buyurtmada esa username kerak. Username bo‘lmasa, do‘stingiz uni sozlamalarda o‘rnatib qo‘yishi mumkin.</li>
        <li><b>Sovg‘a qabul qilishga ruxsat.</b> Oluvchi maxfiylik sozlamalarida ayrim sovg‘alarni qabul qilishni cheklagan bo‘lishi mumkin. Kutilmagan sovg‘a rejalashtirsangiz ham, bu haqda ehtiyotkorlik bilan so‘rab qo‘ying. Mashhur akkauntlarga sovg‘a qanday borishi <Link href="/blog/durovga-telegram-sovga-yuborish">Durovga sovg‘a yuborish</Link> maqolasida yozilgan.</li>
        <li><b>TON hamyon manzili</b> — faqat blokcheyn yo‘lini tanlasangiz.</li>
        <li><b>Hech qanday maxfiy ma’lumot.</b> Oluvchidan parol, SMS kod yoki hamyon zaxira so‘zlari so‘ralmaydi. Kimdir «sovg‘ani qabul qilish uchun» shularni so‘rasa, suhbatni to‘xtating.</li>
      </ul>
      <p>Oluvchida Premium obunasi bo‘lishi shartmi, bunga rasmiy manbalardan tasdiq topilmadi. Biror cheklov bo‘lsa, u odatda o‘tkazish oynasida ko‘rinadi.</p>
      <h2 id="sovgani-ton-hamyon-orqali-otkazish">Sovg‘ani TON hamyon orqali o‘tkazish qachon kerak?</h2>
      <p>API hujjatiga ko‘ra, kolleksion sovg‘ani TON blokcheynidagi NFT’ga aylantirib, Fragment’ga import qilsa bo‘ladi. <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>da yozilishicha, shundan keyin sovg‘ani TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin. Hamyondagi sovg‘ani auksion saytlari kabi tashqi xizmatlarga ham ulasa bo‘ladi.</p>
      <p>Bu yo‘l quyidagi hollarda o‘zini oqlaydi:</p>
      <ul>
        <li>do‘stingiz sovg‘ani o‘z hamyonida saqlamoqchi;</li>
        <li>u keyinchalik sovg‘ani Telegram’dan tashqaridagi bozorga qo‘yish niyatida;</li>
        <li>ikkalangiz ham hamyon bilan ishlashga o‘rgangansiz.</li>
      </ul>
      <p>Oddiy hadya uchun bu ortiqcha qadamlar. Asosiy xavf — hamyon manzilidagi xato: blokcheyndagi o‘tkazmani ortga qaytarish oson emas. Manzilni qo‘lda yozmang, nusxa ko‘chirib qo‘ying, boshi va oxirini do‘stingiz bilan solishtiring. Tayyorgarlik va cheklovlar <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">sovg‘ani blokcheynga o‘tkazish</Link> maqolasida batafsil.</p>
      <h2 id="hadya-qilishdan-oldin-sotib-olayotgan">Hadya qilishdan oldin sotib olayotgan nusxani qanday tekshirasiz?</h2>
      <p>Qimmat sovg‘ani nusxasini ko‘rmasdan to‘lamang. To‘lovdan oldin to‘rt narsaga qarang:</p>
      <ul>
        <li><b>Alohida havola.</b> Telegram blogiga ko‘ra, har bir kolleksion sovg‘aning t.me/nft ko‘rinishidagi o‘z havolasi bor. Sotuvchidan aynan shu havolani so‘rang, skrinshot bilan kifoyalanmang.</li>
        <li><b>Atributlar.</b> Model, fon va belgi yonida foiz turadi. Masalan, Fragment’da Plush Pepe #834 uchun model Donatello (1%), fon Navy Blue (2%), belgi Bell Pepper (0.5%) deb yozilgan. Sotuvchi aytgan atributlar havoladagi bilan mos kelishini tekshiring.</li>
        <li><b>Egalik tarixi.</b> Tarixda o‘tkazma sanasi ko‘rinadi, lekin narx har doim ham yozilmaydi. #834 sahifasida oxirgi o‘tkazma 19-oktabrda bo‘lgan, sotuv narxi esa ko‘rsatilmagan.</li>
        <li><b>Taklif va sotuv farqi.</b> Fragment’dagi taklif kiritish oynasidagi raqam amalga oshgan sotuv emas. Sovg‘a qiymatini shu raqamga qarab baholamang.</li>
      </ul>
      <p>Qolgan tekshiruvlar <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">NFT sovg‘a tarixini tekshirish</Link> maqolasida.</p>
      <h2 id="nft-sovgani-somda-olib-dostga">NFT sovg‘ani so‘mda olib, do‘stga yuborish tartibi</h2>
      <p>Stars ham, TON ham yo‘q bo‘lsa, tayyor kolleksion sovg‘ani so‘mda olish mumkin. StarsPaymee — 1,5 yildan beri ishlayotgan, Telegram’dan mustaqil xizmat.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, NFT Market bo‘limi.</Step>
        <Step title={"Nusxani tanlang"}>model, fon, belgi va t.me/nft havolasini tekshiring.</Step>
        <Step title={"Oluvchini ko‘rsating"}>sovg‘ani to‘g‘ridan-to‘g‘ri do‘stning @username’iga yuborish mumkinmi yoki avval o‘zingizga olasizmi, buni botda tekshiring. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"So‘mda to‘lang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi orqali. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</Step>
        <Step title={"Yetkazilganini tekshiring"}>buyurtma odatda bir necha soniyada avtomatik bajariladi.</Step>
      </Steps>
      <p>Sovg‘a avval sizga kelsa, keyin uni yuqoridagi «Telegram ichida» tartibi bilan do‘stga o‘tkazasiz. Bitta cheklovni yodda tuting: Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi, shuning uchun tayyor kolleksion sovg‘ani botdagi NFT Market’dan tanlaysiz. Bozor qanday ishlashi <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> maqolasida, katalog esa <Link href="/gifts">sovg‘alar sahifasi</Link>da.</p>
      <h2 id="sovga-dostingizga-yetmasa-nima-qilasiz">Sovg‘a do‘stingizga yetmasa nima qilasiz?</h2>
      <p>Avval sovg‘a qayerda to‘xtaganini aniqlang. U hali sizning profilingizda tursa, o‘tkazish tasdiqlanmagan. Sababi ko‘pincha ikkitadan biri: balansdagi Stars yetmagan yoki oluvchi tomonda cheklov bor. Ilova xabarini diqqat bilan o‘qing — sabab o‘sha oynada ko‘rsatilishi mumkin.</p>
      <p>Sovg‘a sizdan chiqqan, lekin do‘stingiz uni ko‘rmayotgan bo‘lsa:</p>
      <ul>
        <li>do‘stingiz ilovani yangilab, profilidagi sovg‘alar ro‘yxatini qayta ochsin;</li>
        <li>o‘tkazishda tanlangan akkaunt aynan uniki ekanini username bo‘yicha qayta solishtiring;</li>
        <li>blokcheyn yo‘lida manzilni tranzaksiya yozuvi bilan solishtiring.</li>
      </ul>
      <p>Bot orqali olingan sovg‘a kelmasa, buyurtma ma’lumoti va to‘lov chekini olib <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing. Yordam xizmati ham sizdan parol yoki kod so‘ramaydi.</p>
      <h2 id="otkazishda-kop-uchraydigan-xatolar">O‘tkazishda ko‘p uchraydigan xatolar</h2>
      <CompareTable
        headers={["Xato", "Nima bo‘ladi", "Oldini olish"]}
        rows={[
          ["Username’da bitta harf xato", "Sovg‘a begona odamga ketadi", "Username’ni do‘stdan nusxa qilib oling, profil rasmini solishtiring"],
          ["Balansda Stars yetmaydi", "O‘tkazish tasdiqlanmaydi", "Narxni ilovada oldindan ko‘ring, yetmaganini so‘mda to‘ldiring"],
          ["Oluvchi sovg‘alarni cheklagan", "Sovg‘ani yuborib bo‘lmasligi mumkin", "Do‘stingizdan oldindan so‘rang"],
          ["Hamyon manzili xato", "Sovg‘ani qaytarish qiyin", "Manzilni nusxa ko‘chiring, ikki marta solishtiring"],
          ["«Durov ham shunday qildi, mana bu saytdan oling» degan post", "Soxta sayt orqali akkaunt yoki pul yo‘qoladi", "Faqat t.me/nft havolasi va ishonchli botdan foydalaning"],
        ]}
      />
      <p>Begona havolani ochishdan oldin uni <Link href="/blog/telegram-gift-havolasini-tekshirish">gift havolasini tekshirish</Link> qo‘llanmasidagi belgilar bilan solishtiring. Mashhur ism tilga olingan post firibgarlar uchun eng qulay niqob.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://fragment.com/gift/plushpepe-834", label: "Plush Pepe #834 (Fragment)" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain… (Telegram blog)" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once… (Telegram blog)" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts (API)" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Adashib boshqa odamga o‘tkazib yuborgan sovg‘amni qaytarsa bo‘ladimi?", answer: "O‘tkazishni bekor qilish imkoni rasmiy manbalarda tasdiqlanmagan. Sovg‘ani sizga faqat uni olgan odamning o‘zi qayta o‘tkaza oladi." },
  { question: "Nega bir sovg‘a to‘lovsiz o‘tadi, boshqasi uchun Stars so‘raladi?", answer: "O‘tkazish narxi har bir kolleksion sovg‘a uchun alohida belgilanadi. API’da bu qiymat berilmagan bo‘lsa, sovg‘a to‘lovsiz o‘tishi mumkin, berilgan bo‘lsa, ilova ko‘rsatgan Stars yechiladi." },
  { question: "Bitta kolleksion sovg‘ani ikki do‘stga bo‘lib bersa bo‘ladimi?", answer: "Har bir kolleksion sovg‘aning o‘z havolasi bor va u bitta akkauntga o‘tkaziladi. Ikki kishini xursand qilmoqchi bo‘lsangiz, ikki alohida nusxa kerak bo‘ladi." },
  { question: "Do‘stim sovg‘ani mendan kelganini qayerdan biladi?", answer: "Oluvchi tomonda yuboruvchi qanday ko‘rinishi bu maqolada tekshirilmagan. Ishonch uchun o‘tkazgach chatga qisqa tabrik yozib qo‘ying." },
  { question: "Bugun sotib olgan sovg‘ani shu zahoti do‘stimga o‘tkaza olamanmi?", answer: "Vaqt bo‘yicha cheklov borligi rasmiy manbalarda tasdiqlanmagan. O‘tkazish tugmasini bosib ko‘ring: cheklov bo‘lsa, ilova uni ko‘rsatadi." },
  { question: "Do‘stim sovg‘ani saqlamay, sotmoqchi bo‘lsa-chi?", answer: "U sovg‘ani profilida ochib, Telegram ichki bozorida Stars’da narx qo‘yishi mumkin. API hujjatida qayta sotish narxini nanogram’da belgilash imkoni ham tilga olingan." },
  { question: "O‘tkazish uchun Stars’ni qancha oldindan olib qo‘yay?", answer: "Avval ilovadagi tasdiqlash oynasida kerakli summani ko‘ring, keyin shuncha Stars oling. StarsPaymee botida eng kam buyurtma 50 Stars." },
  { question: "Botdan olingan sovg‘ani keyin do‘stga o‘tkazishda yana so‘m to‘laymanmi?", answer: "Botda faqat sovg‘aning o‘zi uchun so‘mda to‘laysiz. Keyin uni Telegram ichida o‘tkazsangiz va o‘tkazish pullik bo‘lsa, u ilova orqali Stars bilan to‘lanadi." },
  { question: "Bot orqali buyurtmada do‘stimning qaysi ma’lumoti kerak?", answer: "Faqat uning @username’i. Username bo‘lmasa, do‘stingiz uni Telegram sozlamalarida o‘rnatib qo‘yishi kerak, parol yoki kod esa hech qachon so‘ralmaydi." },
  { question: "StarsPaymee keraksiz NFT sovg‘amni sotib oladimi?", answer: "Yo‘q, xizmat foydalanuvchilardan Stars yoki sovg‘a sotib olmaydi. Botda faqat tayyor kolleksion sovg‘ani so‘mda xarid qilasiz." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, улучшенный коллекционный подарок можно передать другому пользователю. По документации Telegram API, если у подарка не задана цена передачи, он может перейти без оплаты. Если цена задана, платите в Stars. Точную сумму приложение покажет до подтверждения. Другу хватит аккаунта Telegram и верного @username. Для передачи через блокчейн понадобится ещё TON-кошелёк.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#kolleksion-nft-sovgani-dostga-otkazsa", label: "Можно ли передать коллекционный NFT-подарок другу?" },
          { href: "#telegram-ichida-sovgani-dostga-qanday", label: "Как передать подарок другу внутри Telegram?" },
          { href: "#otkazish-necha-stars-turadi-va", label: "Сколько Stars стоит передача и где это видно?" },
          { href: "#uch-yol-yonma-yon-qaysi", label: "Три способа рядом: какой подходит вам?" },
          { href: "#dostingizga-sovgani-qabul-qilish-uchun", label: "Что нужно другу, чтобы принять подарок?" },
          { href: "#sovgani-ton-hamyon-orqali-otkazish", label: "Когда стоит передавать подарок через TON-кошелёк?" },
          { href: "#hadya-qilishdan-oldin-sotib-olayotgan", label: "Как проверить экземпляр перед покупкой в подарок?" },
          { href: "#nft-sovgani-somda-olib-dostga", label: "Как купить NFT-подарок за сумы и отправить другу" },
          { href: "#sovga-dostingizga-yetmasa-nima-qilasiz", label: "Что делать, если подарок не дошёл до друга?" },
          { href: "#otkazishda-kop-uchraydigan-xatolar", label: "Частые ошибки при передаче" },
        ]}
      />
      <h2 id="kolleksion-nft-sovgani-dostga-otkazsa">Можно ли передать коллекционный NFT-подарок другу?</h2>
      <p>Можно. В <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram Gifts API</a> прямо сказано, что коллекционный подарок можно передать другому пользователю. Одни подарки передаются без оплаты, за другие списываются Stars.</p>
      <p>После того как по каналам разошёлся пост «Дуров подарил Plush Pepe», многие захотели сделать такой же подарок другу. Но ни покупку, ни получателя официальные источники не подтверждают. На <a href={"https://fragment.com/gift/plushpepe-834"} target="_blank" rel="noopener noreferrer">странице Plush Pepe #834 на Fragment</a> владелец указан не по имени, а только адресом TON-кошелька. Эта статья не про ту новость, а про то, как передать подарок самому.</p>
      <p>Доставить подарок другу можно тремя способами:</p>
      <ul>
        <li>внутри Telegram, из вашего профиля в его профиль;</li>
        <li>через блокчейн TON, из кошелька в кошелёк;</li>
        <li>купить готовый подарок за сумы и отправить его другу.</li>
      </ul>
      <Notice label={"Важно"}>Речь только о коллекционных (улучшенных) подарках. У обычного gift порядок может отличаться. Если вы ещё выбираете тип подарка, загляните в статью о том, <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">какой подарок подходит на день рождения</Link>.</Notice>
      <h2 id="telegram-ichida-sovgani-dostga-qanday">Как передать подарок другу внутри Telegram?</h2>
      <p>Если подарок уже лежит в вашем профиле, это самый короткий путь. Кнопки могут называться немного по-разному в зависимости от версии и языка приложения, но порядок один и тот же.</p>
      <Steps>
        <Step title={"Откройте профиль"}>в разделе «Подарки» нажмите на коллекционный подарок, который хотите передать.</Step>
        <Step title={"Выберите передачу"}>приложение спросит, кому отправить подарок.</Step>
        <Step title={"Найдите друга"}>в списке чатов или поиском по @username. Сверьте имя и фото профиля: встречаются поддельные аккаунты, у которых отличается одна буква.</Step>
        <Step title={"Посмотрите на цену"}>если передача платная, приложение покажет сумму в Stars до подтверждения. Не подтверждайте, пока не увидели сумму.</Step>
        <Step title={"Подтвердите и проверьте"}>подарок должен исчезнуть из вашего списка и появиться в профиле друга. Попросите у него короткий скриншот, так спокойнее обоим.</Step>
      </Steps>
      <Notice label={"Важно"}>Переданный подарок принадлежит получателю. Если он ушёл не тому человеку, подтверждённый способ вернуть его один: этот человек сам передаёт подарок обратно. Поэтому на шаге 3 не торопитесь.</Notice>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="otkazish-necha-stars-turadi-va">Сколько Stars стоит передача и где это видно?</h2>
      <p>Единого тарифа для всех подарков нет. В документации API цена передачи у каждого коллекционного подарка приходит в отдельном поле (transfer_stars). Если поле пустое, подарок может перейти без оплаты. Если заполнено, с баланса спишется указанное количество Stars.</p>
      <p>На практике из этого следуют три вывода:</p>
      <ul>
        <li>точную сумму показывает только приложение Telegram, в окне подтверждения;</li>
        <li>цена передачи у двух разных подарков может отличаться, поэтому не ориентируйтесь на чужой опыт;</li>
        <li>общей цифры в официальном источнике нет, поэтому её нет и в этой статье.</li>
      </ul>
      <p>Если Stars на балансе не хватает, передача не пройдёт. Недостающие звёзды можно докупить за сумы. В <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту (UzCard/HUMO) или оплате с баланса бота и {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} при оплате через Click, Payme, Uzum или Paynet. Минимальный заказ — 50 Stars. Подробности на <Link href="/stars">странице Stars</Link>.</p>
      <p>Пример: приложение просит Stars за передачу, а на балансе их мало. Сначала запишите сумму из окна передачи. Потом закажите в боте не меньше этого количества (и не меньше 50 Stars). Когда звёзды придут, начните передачу заново.</p>
      <Notice label={"Важно"}>Сообщение вроде «переведите комиссию за передачу на карту» или «пришлите SMS-код для подтверждения» — это обман. Цена передачи внутри Telegram указана в самом приложении и оплачивается в Stars.</Notice>
      <h2 id="uch-yol-yonma-yon-qaysi">Три способа рядом: какой подходит вам?</h2>
      <CompareTable
        headers={["Способ", "Что нужно", "Где видна цена", "Что получает друг", "Кому подходит"]}
        rows={[
          ["Внутри Telegram", "Подарок в вашем профиле, аккаунт друга", "В окне подтверждения в приложении, иногда без оплаты", "Подарок появляется в его профиле", "Обычному пользователю без кошелька"],
          ["Через блокчейн TON", "Превратить подарок в NFT, TON-кошелёк у обеих сторон", "В приложении кошелька, в этой статье не проверялось", "NFT лежит в его кошельке", "Тем, кто умеет работать с кошельком"],
          ["Купить за сумы и отправить", "@StarsPaymee_bot, оплата в сумах, @username", "В боте, до оплаты", "Выбранный вами готовый подарок", "Покупателю без Stars и без TON"],
        ]}
      />
      <p>Если у друга нет кошелька, а подарок уже у вас, проще всего передать его внутри Telegram. Если подарка ещё нет, его сначала нужно купить: на рынке Telegram за Stars или в боте за сумы.</p>
      <h2 id="dostingizga-sovgani-qabul-qilish-uchun">Что нужно другу, чтобы принять подарок?</h2>
      <p>От получателя требуется немного, но кое-что стоит уточнить заранее:</p>
      <ul>
        <li><b>Аккаунт Telegram и @username.</b> В приложении друга можно выбрать из чата, а для заказа через бот нужен username. Если username нет, друг может задать его в настройках.</li>
        <li><b>Разрешение принимать подарки.</b> Приём подарков в Telegram могут ограничивать настройки конфиденциальности. Даже если готовите сюрприз, аккуратно спросите об этом. Как подарки доходят до известных аккаунтов, рассказано в статье <Link href="/blog/durovga-telegram-sovga-yuborish">можно ли отправить подарок Дурову</Link>.</li>
        <li><b>Адрес TON-кошелька</b> — только если выбрали путь через блокчейн.</li>
        <li><b>Никаких секретных данных.</b> У получателя не спрашивают пароль, SMS-код или seed-фразу кошелька. Если кто-то просит их «для приёма подарка», прекращайте разговор.</li>
      </ul>
      <p>Нужна ли подписка Premium, официальные источники не подтверждают. Если какое-то ограничение есть, приложение покажет его перед передачей.</p>
      <h2 id="sovgani-ton-hamyon-orqali-otkazish">Когда стоит передавать подарок через TON-кошелёк?</h2>
      <p>По документации API коллекционный подарок можно превратить в NFT в блокчейне TON и импортировать на Fragment. В <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блоге Telegram</a> написано, что после этого подарок можно передавать или выставлять на аукцион через блокчейн TON. Подарок в кошельке можно подключать и к внешним сервисам, например к аукционным сайтам.</p>
      <p>Этот путь оправдан, если:</p>
      <ul>
        <li>друг хочет хранить подарок в своём кошельке;</li>
        <li>он собирается позже выставить подарок на рынок за пределами Telegram;</li>
        <li>вы оба привыкли работать с кошельками.</li>
      </ul>
      <p>Для обычного подарка это лишние шаги. Главный риск — ошибка в адресе кошелька: перепутаете один символ, и подарок уйдёт на чужой адрес. Не набирайте адрес вручную, а копируйте его и сверяйте начало и конец вместе с другом. Подготовка и ограничения подробно описаны в статье о том, <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">как вывести подарок в блокчейн</Link>.</p>
      <h2 id="hadya-qilishdan-oldin-sotib-olayotgan">Как проверить экземпляр перед покупкой в подарок?</h2>
      <p>Не платите за дорогой подарок, не посмотрев на сам экземпляр. Перед оплатой проверьте четыре вещи:</p>
      <ul>
        <li><b>Отдельная ссылка.</b> По данным блога Telegram, у каждого коллекционного подарка есть своя ссылка вида t.me/nft. Просите у продавца именно её, скриншота мало.</li>
        <li><b>Атрибуты.</b> Рядом с моделью, фоном и символом стоит процент. Например, у Plush Pepe #834 на Fragment указаны модель Donatello (1%), фон Navy Blue (2%) и символ Bell Pepper (0.5%). Сверьте атрибуты, которые называет продавец, с теми, что указаны по ссылке.</li>
        <li><b>История владения.</b> В истории видна дата передачи, но цена указана не всегда. На странице #834 последняя передача прошла 19 октября, а цена продажи не указана.</li>
        <li><b>Ставка и продажа — не одно и то же.</b> Цифра в окне ставки на Fragment не означает, что подарок за неё продан. Не оценивайте подарок по этой цифре.</li>
      </ul>
      <p>Остальные проверки собраны в статье о том, <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">как проверить историю NFT-подарка</Link>.</p>
      <h2 id="nft-sovgani-somda-olib-dostga">Как купить NFT-подарок за сумы и отправить другу</h2>
      <p>Если нет ни Stars, ни TON, готовый коллекционный подарок можно купить за сумы. StarsPaymee — независимый сервис, он работает уже 1,5 года и не заявляет об официальном партнёрстве с Telegram.</p>
      <Steps>
        <Step title={"Откройте бот"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, раздел NFT Market.</Step>
        <Step title={"Выберите экземпляр"}>проверьте модель, фон, символ и ссылку t.me/nft.</Step>
        <Step title={"Укажите получателя"}>проверьте в боте, можно ли сразу отправить подарок на @username друга или сначала нужно получить его самому. Пароль, SMS-код и вход в аккаунт не нужны.</Step>
        <Step title={"Оплатите в сумах"}>через Click, Payme, Uzum, Paynet (наличными в приложении или терминале), переводом на карту UzCard/HUMO или с баланса бота. Международная карта, криптокошелёк и VPN не нужны.</Step>
        <Step title={"Проверьте доставку"}>обычно заказ выполняется автоматически за несколько секунд.</Step>
      </Steps>
      <p>Если подарок пришёл сначала вам, передайте его другу по порядку из раздела «внутри Telegram» выше. Помните об одном ограничении: боты не могут отправлять limited-подарки, которые Telegram снял с продажи. Поэтому готовый коллекционный подарок выбирают в NFT Market в боте. Как устроен этот рынок, рассказано в статье <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>, а каталог есть на <Link href="/gifts">странице подарков</Link>.</p>
      <h2 id="sovga-dostingizga-yetmasa-nima-qilasiz">Что делать, если подарок не дошёл до друга?</h2>
      <p>Сначала выясните, где подарок остановился. Если он всё ещё в вашем профиле, передача не подтвердилась: не хватило Stars на балансе или у получателя стоит ограничение. Обычно приложение пишет причину в том же окне.</p>
      <p>Если у вас подарка уже нет, а друг его не видит:</p>
      <ul>
        <li>пусть друг обновит приложение и заново откроет список подарков в профиле;</li>
        <li>ещё раз сверьте по username, что при передаче выбран именно его аккаунт;</li>
        <li>при передаче через блокчейн сверьте адрес с записью о транзакции.</li>
      </ul>
      <p>Если не пришёл подарок, купленный через бот, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> и приложите данные заказа и чек об оплате. Поддержка и в этом случае не спросит у вас пароль или код.</p>
      <h2 id="otkazishda-kop-uchraydigan-xatolar">Частые ошибки при передаче</h2>
      <CompareTable
        headers={["Ошибка", "Что произойдёт", "Как избежать"]}
        rows={[
          ["Одна неверная буква в username", "Подарок уйдёт чужому человеку", "Скопируйте username у друга, сверьте фото профиля"],
          ["Не хватает Stars на балансе", "Передача не подтвердится", "Заранее посмотрите цену в приложении, недостающее докупите за сумы"],
          ["Получатель ограничил подарки", "Отправить подарок не получится", "Заранее спросите друга"],
          ["Неверный адрес кошелька", "Вернуть подарок будет трудно", "Копируйте адрес, сверяйте дважды"],
          ["Пост «Дуров сделал так же, покупайте на этом сайте»", "Через поддельный сайт теряют аккаунт или деньги", "Пользуйтесь только ссылкой t.me/nft и надёжным ботом"],
        ]}
      />
      <p>Прежде чем открывать незнакомую ссылку, сверьте её с признаками из инструкции <Link href="/blog/telegram-gift-havolasini-tekshirish">как проверить ссылку на gift</Link>. Пост с известным именем — самое удобное прикрытие для мошенников.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://fragment.com/gift/plushpepe-834", label: "Plush Pepe #834 (Fragment)" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain… (Telegram blog)" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once… (Telegram blog)" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts (API)" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Могу ли я сам забрать обратно подарок, который передал другу?", answer: "Нет, после передачи подарок принадлежит аккаунту друга. Вернуть его вам может только сам друг." },
  { question: "Почему один подарок передаётся без оплаты, а за другой просят Stars?", answer: "Цена передачи задаётся для каждого коллекционного подарка отдельно. Если в API это значение не указано, подарок может перейти без оплаты. Если указано, списываются Stars, которые показывает приложение." },
  { question: "Можно ли разделить один коллекционный подарок между двумя друзьями?", answer: "У каждого коллекционного подарка своя ссылка, и передаётся он на один аккаунт. Чтобы порадовать двоих, нужны два отдельных экземпляра." },
  { question: "Как друг узнает, что подарок от меня?", answer: "Как отправитель отображается в окне передачи, в этой статье не проверялось. Чтобы не было сомнений, после передачи напишите в чат короткое поздравление." },
  { question: "Можно ли передать другу подарок сразу после покупки?", answer: "Официальные источники не подтверждают, что есть ограничение по времени. Нажмите кнопку передачи: если ограничение есть, приложение его покажет." },
  { question: "Что если друг не хочет хранить подарок, а хочет его продать?", answer: "Он может открыть подарок в профиле и выставить цену в Stars на внутреннем рынке Telegram. В документации API упомянута и возможность указать цену перепродажи в нанограммах." },
  { question: "Сколько Stars купить заранее для передачи?", answer: "Сначала посмотрите нужную сумму в окне подтверждения в приложении, потом купите столько же Stars. Минимальный заказ в боте StarsPaymee — 50 Stars." },
  { question: "Придётся ли снова платить сумами, если передать другу подарок из бота?", answer: "В боте вы платите в сумах только за сам подарок. Если передача внутри Telegram платная, её цена оплачивается в Stars через приложение." },
  { question: "Какие данные друга нужны для заказа через бот?", answer: "Только его @username. Если username нет, друг должен задать его в настройках Telegram. Пароль или код не спросят никогда." },
  { question: "Купит ли StarsPaymee мой ненужный NFT-подарок?", answer: "Нет, сервис не покупает у пользователей ни Stars, ни подарки. В боте можно только купить готовый коллекционный подарок за сумы." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can transfer an upgraded collectible gift to another user. Telegram’s API documentation says a gift with no transfer price set may be transferred at no cost. If a price is set, you pay it in Stars. The app shows the exact amount before you confirm. Your friend only needs a Telegram account and the correct @username. A blockchain transfer also needs a TON wallet.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#kolleksion-nft-sovgani-dostga-otkazsa", label: "Can you transfer a collectible NFT gift to a friend?" },
          { href: "#telegram-ichida-sovgani-dostga-qanday", label: "How do you transfer a gift to a friend inside Telegram?" },
          { href: "#otkazish-necha-stars-turadi-va", label: "How many Stars does a transfer cost, and where do you see it?" },
          { href: "#uch-yol-yonma-yon-qaysi", label: "Three routes side by side: which one suits you?" },
          { href: "#dostingizga-sovgani-qabul-qilish-uchun", label: "What does your friend need to receive the gift?" },
          { href: "#sovgani-ton-hamyon-orqali-otkazish", label: "When should you transfer the gift via a TON wallet?" },
          { href: "#hadya-qilishdan-oldin-sotib-olayotgan", label: "How do you check the copy you’re buying before gifting it?" },
          { href: "#nft-sovgani-somda-olib-dostga", label: "How to buy an NFT gift in so‘m and send it to a friend" },
          { href: "#sovga-dostingizga-yetmasa-nima-qilasiz", label: "What if the gift doesn’t reach your friend?" },
          { href: "#otkazishda-kop-uchraydigan-xatolar", label: "Common transfer mistakes" },
        ]}
      />
      <h2 id="kolleksion-nft-sovgani-dostga-otkazsa">Can you transfer a collectible NFT gift to a friend?</h2>
      <p>Yes. The <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram Gifts API documentation</a> says plainly that a collectible gift may be transferred to another user. Some gifts transfer at no cost. Others ask for Stars.</p>
      <p>After channels shared a post claiming “Durov gifted a Plush Pepe,” many people wanted to try giving a gift like that to a friend. No official source confirms either the purchase or who received the gift. The <a href={"https://fragment.com/gift/plushpepe-834"} target="_blank" rel="noopener noreferrer">Plush Pepe #834 page on Fragment</a> shows the owner as a TON wallet address, not a name. This article isn’t about that story. It’s about how you transfer a gift yourself.</p>
      <p>There are three ways to get a gift to a friend:</p>
      <ul>
        <li>inside Telegram, from your profile to theirs;</li>
        <li>through the TON blockchain, from one wallet to another;</li>
        <li>by buying a ready-made gift in so‘m and sending it to your friend.</li>
      </ul>
      <Notice label={"Important"}>This applies only to collectible (upgraded) gifts. Regular gifts may work differently. If you’re still choosing what kind of gift to send, see <Link href="/blog/tugilgan-kunga-telegram-sovga-tanlash">which gift suits a birthday</Link>.</Notice>
      <h2 id="telegram-ichida-sovgani-dostga-qanday">How do you transfer a gift to a friend inside Telegram?</h2>
      <p>If the gift is already on your profile, this is the quickest way. Button names can differ a little depending on your app version and language, but the steps are the same.</p>
      <Steps>
        <Step title={"Open your profile"}>in the Gifts section, tap the collectible gift you want to transfer.</Step>
        <Step title={"Choose the transfer button"}>the app asks who to send it to.</Step>
        <Step title={"Find your friend"}>pick them from your chat list or search by @username. Check the name and profile picture. Fake accounts with a one-letter difference do turn up.</Step>
        <Step title={"Check the price"}>if the transfer isn’t free, the app shows the Stars amount before you confirm. Don’t confirm until you’ve seen it.</Step>
        <Step title={"Confirm and check"}>the gift should leave your list and show up on your friend’s profile. Ask them for a quick screenshot so you can both be sure.</Step>
      </Steps>
      <Notice label={"Important"}>Once a gift is transferred, it belongs to the recipient. If it goes to the wrong person, the only confirmed way to get it back is for that person to transfer it back to you. So take your time on step 3.</Notice>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="otkazish-necha-stars-turadi-va">How many Stars does a transfer cost, and where do you see it?</h2>
      <p>There’s no single rate for every gift. In the API documentation, each collectible gift has its own transfer price field (transfer_stars). If the field is empty, the gift may transfer at no cost. If it’s filled in, that many Stars come off your balance.</p>
      <p>In practice, this means three things:</p>
      <ul>
        <li>only the Telegram app shows the exact amount, in the confirmation window;</li>
        <li>two different gifts can cost different amounts to transfer, so don’t go by someone else’s experience;</li>
        <li>official sources give no general figure, so this article doesn’t give one either.</li>
      </ul>
      <p>If you don’t have enough Stars, the transfer won’t go through. You can top up the missing Stars in so‘m. On <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")} by card transfer (UzCard/HUMO) or from your bot balance. Through Click, Payme, Uzum or Paynet it costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. You’ll find more on the <Link href="/stars">Stars page</Link>.</p>
      <p>Example: the app asks for Stars to make the transfer, but your balance is too low. Note the amount in the transfer window. Then order at least that many Stars in the bot, and no fewer than 50. Once they arrive, start the transfer again.</p>
      <Notice label={"Important"}>If someone messages you saying “send the transfer fee to my card” or “send the SMS code to confirm,” it’s a scam. The transfer price for an in-app transfer is shown in the app itself and paid in Stars.</Notice>
      <h2 id="uch-yol-yonma-yon-qaysi">Three routes side by side: which one suits you?</h2>
      <CompareTable
        headers={["Route", "What you need", "Where you see the price", "What your friend gets", "Best for"]}
        rows={[
          ["Inside Telegram", "The gift on your profile, your friend’s account", "In the app’s confirmation window, sometimes free", "The gift lands on their profile", "Regular users without a wallet"],
          ["Through the TON blockchain", "Converting the gift to an NFT, a TON wallet on both sides", "In the wallet app, not checked in this article", "The NFT sits in their wallet", "People used to working with wallets"],
          ["Buy in so‘m and send", "@StarsPaymee_bot, payment in so‘m, @username", "In the bot, before payment", "The ready-made gift you picked", "Buyers with neither Stars nor TON"],
        ]}
      />
      <p>If your friend has no wallet and the gift is already yours, the in-app route is the simplest. If you don’t own the gift yet, you have to buy it first, either with Stars on Telegram’s marketplace or in so‘m through the bot.</p>
      <h2 id="dostingizga-sovgani-qabul-qilish-uchun">What does your friend need to receive the gift?</h2>
      <p>Your friend doesn’t need much, but sort out these points in advance:</p>
      <ul>
        <li><b>A Telegram account and @username.</b> In the app you can pick your friend from a chat. An order through the bot needs their username. If they don’t have one, they can set it in Settings.</li>
        <li><b>Permission to receive gifts.</b> Telegram privacy settings can limit who sends gifts. Even if you’re planning a surprise, ask about this tactfully. How gifts reach well-known accounts is covered in <Link href="/blog/durovga-telegram-sovga-yuborish">sending a gift to Durov</Link>.</li>
        <li><b>A TON wallet address</b> — only if you choose the blockchain route.</li>
        <li><b>No secret information.</b> The recipient is never asked for a password, SMS code or wallet recovery phrase. If anyone asks for these “to receive the gift,” end the conversation.</li>
      </ul>
      <p>We found no official confirmation on whether a Premium subscription is required. If there’s a restriction, the app will show it before the transfer.</p>
      <h2 id="sovgani-ton-hamyon-orqali-otkazish">When should you transfer the gift via a TON wallet?</h2>
      <p>According to the API documentation, a collectible gift can be converted into an NFT on the TON blockchain and imported to Fragment. The <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a> says gifts can then be transferred or auctioned via the TON blockchain. A gift in a wallet can also be connected to outside services, such as auction sites.</p>
      <p>This route makes sense when:</p>
      <ul>
        <li>your friend wants to keep the gift in their own wallet;</li>
        <li>they plan to list it later on a marketplace outside Telegram;</li>
        <li>you’re both comfortable using wallets.</li>
      </ul>
      <p>For an ordinary present, these are extra steps. The biggest risk is a wrong wallet address. One wrong character and the gift goes to a different address. Don’t type the address by hand. Copy and paste it, then compare the start and end with your friend. Preparation and limits are covered in detail in <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">moving a gift to the blockchain</Link>.</p>
      <h2 id="hadya-qilishdan-oldin-sotib-olayotgan">How do you check the copy you’re buying before gifting it?</h2>
      <p>Don’t pay for an expensive gift without seeing the exact copy. Check four things before you pay:</p>
      <ul>
        <li><b>Its own link.</b> According to the Telegram blog, every collectible gift has a unique link in the t.me/nft format. Ask the seller for that exact link. A screenshot isn’t enough.</li>
        <li><b>Attributes.</b> The model, backdrop and symbol each show a percentage. For example, Fragment lists Plush Pepe #834 with the model Donatello (1%), the backdrop Navy Blue (2%) and the symbol Bell Pepper (0.5%). Make sure the attributes the seller names match the ones on the link.</li>
        <li><b>Ownership history.</b> The history shows transfer dates, but not always a price. On the #834 page, the latest transfer was on October 19, and no sale price was shown.</li>
        <li><b>Bid versus sale.</b> The figure in Fragment’s bid window is not a completed sale. Don’t judge a gift’s value by that number.</li>
      </ul>
      <p>Other checks are covered in <Link href="/blog/nft-sovga-tarixini-xariddan-oldin-tekshirish">checking an NFT gift’s history</Link>.</p>
      <h2 id="nft-sovgani-somda-olib-dostga">How to buy an NFT gift in so‘m and send it to a friend</h2>
      <p>If you have neither Stars nor TON, you can buy a ready-made collectible gift in so‘m. StarsPaymee is an independent service that has been running for 1.5 years. It does not claim any official partnership with Telegram.</p>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, then the NFT Market section.</Step>
        <Step title={"Pick a copy"}>check the model, backdrop, symbol and t.me/nft link.</Step>
        <Step title={"Enter the recipient"}>check in the bot whether the gift can go straight to your friend’s @username or whether you get it first. No password, SMS code or account login is required.</Step>
        <Step title={"Pay in so‘m"}>via Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), card transfer to UzCard/HUMO, or your bot balance. You don’t need an international card, a crypto wallet or a VPN.</Step>
        <Step title={"Check delivery"}>orders are usually completed automatically within a few seconds.</Step>
      </Steps>
      <p>If the gift comes to you first, transfer it to your friend using the in-app steps above. Keep one limit in mind: bots can’t send limited gifts that Telegram has taken off sale. That’s why you choose a ready-made collectible gift from the bot’s NFT Market. How the market works is explained in <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>, and the catalog is on the <Link href="/gifts">gifts page</Link>.</p>
      <h2 id="sovga-dostingizga-yetmasa-nima-qilasiz">What if the gift doesn’t reach your friend?</h2>
      <p>First, find out where the gift stopped. If it’s still on your profile, the transfer wasn’t confirmed. Either you didn’t have enough Stars or something on the recipient’s side blocked it. The app usually gives the reason in the same window.</p>
      <p>If the gift has left your profile but your friend can’t see it:</p>
      <ul>
        <li>your friend should update the app and reopen the gift list on their profile;</li>
        <li>check again, by username, that the account you picked really is theirs;</li>
        <li>on the blockchain route, compare the address with the transaction record.</li>
      </ul>
      <p>If a gift bought through the bot doesn’t arrive, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> with your order details and payment receipt. Support won’t ask you for a password or code either.</p>
      <h2 id="otkazishda-kop-uchraydigan-xatolar">Common transfer mistakes</h2>
      <CompareTable
        headers={["Mistake", "What happens", "How to avoid it"]}
        rows={[
          ["One wrong letter in the username", "The gift goes to a stranger", "Copy the username from your friend and compare the profile picture"],
          ["Not enough Stars on your balance", "The transfer isn’t confirmed", "Check the price in the app first and top up the rest in so‘m"],
          ["The recipient restricts gifts", "The gift can’t be sent", "Ask your friend in advance"],
          ["Wrong wallet address", "The gift is hard to get back", "Copy the address and compare it twice"],
          ["A post saying “Durov did it too, buy from this site”", "A fake site costs you your account or money", "Use only the t.me/nft link and a trusted bot"],
        ]}
      />
      <p>Before opening an unfamiliar link, compare it with the signs in the <Link href="/blog/telegram-gift-havolasini-tekshirish">gift link checking</Link> guide. Posts that use a famous name are a favorite cover for scammers.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://fragment.com/gift/plushpepe-834", label: "Plush Pepe #834 (Fragment)" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain… (Telegram blog)" },
          { href: "https://telegram.org/blog/gift-marketplace-and-more", label: "Gift Marketplace, Posting Several Stories at Once… (Telegram blog)" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts (API)" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I take back a gift I’ve already transferred to a friend?", answer: "No. Once it’s transferred, the gift belongs to your friend’s account. Only your friend can transfer it back to you." },
  { question: "Why does one gift transfer for free while another asks for Stars?", answer: "Each collectible gift has its own transfer price. If the API has no value for it, the gift may transfer at no cost. If there is one, the app deducts the Stars amount it shows." },
  { question: "Can I split one collectible gift between two friends?", answer: "Every collectible gift has its own link, and it goes to a single account. To make two people happy, you need two separate copies." },
  { question: "How will my friend know the gift came from me?", answer: "This article didn’t check how the sender appears in the transfer. To be safe, send a short greeting in your chat after the transfer." },
  { question: "Can I transfer a gift to my friend right after buying it today?", answer: "Official sources don’t confirm any waiting period. Tap the transfer button. If there’s a restriction, the app will show it." },
  { question: "What if my friend would rather cash the gift in than keep it?", answer: "They can open it on their profile and set a price in Stars on Telegram’s marketplace. The API documentation also mentions setting the resale price in nanograms." },
  { question: "How many Stars should I buy ahead of the transfer?", answer: "First see the amount you need in the app’s confirmation window, then buy that many Stars. The minimum order in the StarsPaymee bot is 50 Stars." },
  { question: "If I buy a gift in the bot, do I pay in so‘m again to transfer it to a friend?", answer: "In the bot, you pay in so‘m only for the gift itself. If you then transfer it inside Telegram and there’s a transfer price, you pay it in Stars through the app." },
  { question: "What does the bot need from my friend for an order?", answer: "Just their @username. If they don’t have one, they need to set it in Telegram Settings. A password or code is never requested." },
  { question: "Will StarsPaymee buy an NFT gift I don’t want?", answer: "No. The service doesn’t buy Stars or gifts from users. In the bot you can only buy ready-made collectible gifts in so‘m." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["nft sovg'ani do'stga o'tkazish","telegram nft sovga otkazish","kolleksion sovg'ani boshqa odamga berish","telegram gift transfer","nft gift do'stga yuborish","sovg'a o'tkazish necha stars","передать nft подарок в телеграм","как передать подарок другу telegram","перевод коллекционного подарка telegram","стоимость передачи подарка telegram stars","nft подарок другу телеграм"],
  howToSteps: [
    { name: "Profilni oching", text: "«Sovg‘alar» bo‘limida o‘tkazmoqchi bo‘lgan kolleksion sovg‘ani bosing." },
    { name: "O‘tkazish tugmasini tanlang", text: "ilova kimga yuborishni so‘raydi." },
    { name: "Do‘stni toping", text: "chatlar ro‘yxatidan yoki @username bo‘yicha qidirib. Ism va profil rasmini solishtiring: bir harfi farq qiladigan soxta akkauntlar uchrab turadi." },
    { name: "Narxga qarang", text: "o‘tkazish pullik bo‘lsa, ilova Stars summasini tasdiqlashdan oldin ko‘rsatadi. Summani ko‘rmaguncha tasdiqlamang." },
    { name: "Tasdiqlang va tekshiring", text: "sovg‘a sizning ro‘yxatingizdan chiqib, do‘stingiz profilida paydo bo‘lishi kerak. Undan qisqa skrinshot so‘rasangiz, ikkalangiz ham xotirjam bo‘lasiz." },
  ],
  locales: {
    uz: {
      title: "NFT sovg‘ani do‘stga o‘tkazish: tartib, Stars narxi va oluvchiga nima kerak",
      excerpt: "Ha, kolleksion sovg‘ani do‘stga o‘tkazsa bo‘ladi, o‘tkazish narxini esa Telegram tasdiqlashdan oldin ko‘rsatadi. Bu yerda uch yo‘l, oluvchiga kerakli narsalar va sovg‘ani so‘mda olish tartibi bor.",
      metaTitle: "NFT sovg‘ani do‘stga o‘tkazish",
      metaDescription: "Ha, kolleksion sovg‘ani do‘stga o‘tkazsa bo‘ladi, o‘tkazish narxini esa Telegram tasdiqlashdan oldin ko‘rsatadi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как передать NFT-подарок другу в Telegram: цена в Stars и что нужно",
      excerpt: "Да, коллекционный подарок можно передать другу, а цену передачи Telegram показывает до подтверждения. В статье три способа, что нужно получателю и как купить подарок за сумы.",
      metaTitle: "Как передать NFT-подарок другу в Telegram",
      metaDescription: "Да, коллекционный подарок можно передать другу, а цену передачи Telegram показывает до подтверждения.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "How to Transfer an NFT Gift to a Friend: Stars Cost and What They Need",
      excerpt: "Yes, you can pass a collectible gift to a friend, and Telegram shows the transfer price before you confirm. This guide covers three routes, what the recipient needs and how to buy a gift in so‘m.",
      metaTitle: "How to Transfer an NFT Gift to a Friend",
      metaDescription: "Yes, you can pass a collectible gift to a friend, and Telegram shows the transfer price before you confirm.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
