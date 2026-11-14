import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "spam-nft-hamyonda-telegram-sovga-xavfi";

/**
 * Spam NFT sovg‘alarimga xavflimi: hamyondagi gift, Stars va Premium
 *
 * Avtoblogyoz yasagan maqola (2026-11-14): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kolleksion Telegram sovg'asini TON hamyonga (Tonkeeper, Wallet) chiqargan yoki chiqarmoqchi bo'lgan foydalanuvchi hamyonga tushgan axlat NFT sovg'alari, Stars balansi va Premium'iga xavf soladimi, uni soxta sovg'adan qanday ajratishni bilmoqchi va «spam NFT sovg'alarimga xavflimi» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-14):
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
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
  return <p>Hamyonga kelib tushgan spam NFT TON’ga chiqarilgan Telegram sovg‘angizni o‘zicha boshqa manzilga ko‘chirmaydi. Stars balansi va Premium’ga u umuman yetib bormaydi, chunki ular hamyonda emas, Telegram akkauntida saqlanadi. Xavf NFT’ning kelib tushishida emas. Xavf siz ochgan havola, tasdiqlagan tranzaksiya yoki birovga aytgan zaxira so‘zlarida.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#spam-nft-hamyondagi-sovgani-ozicha", label: "Spam NFT hamyondagi sovg‘ani o‘zicha ko‘chira oladimi?" },
          { href: "#stars-premium-va-profildagi-sovgalar", label: "Stars, Premium va profildagi sovg‘alar qayerda saqlanadi?" },
          { href: "#chiqargan-sovgani-taqlid-nusxadan-qanday", label: "Chiqargan sovg‘ani taqlid nusxadan qanday farqlaysiz?" },
          { href: "#qaysi-bosish-va-imzolar-sovgani", label: "Qaysi bosish va imzolar sovg‘ani yo‘qotishga olib keladi?" },
          { href: "#sovgani-chiqarishdan-oldin-hamyonni-qanday", label: "Sovg‘ani chiqarishdan oldin hamyonni qanday tayyorlash kerak?" },
          { href: "#hamyon-ilovasi-ishlamay-qolsa-yoki", label: "Hamyon ilovasi ishlamay qolsa yoki sovg‘a ro‘yxatdan yo‘qolsa" },
          { href: "#spam-nftni-bahona-qilgan-xabarlarni", label: "Spam NFT’ni bahona qilgan xabarlarni qanday tanish mumkin?" },
          { href: "#sovgani-hamyonga-chiqarmasdan-saqlash-va", label: "Sovg‘ani hamyonga chiqarmasdan saqlash va so‘mda olish" },
        ]}
      />
      <h2 id="spam-nft-hamyondagi-sovgani-ozicha">Spam NFT hamyondagi sovg‘ani o‘zicha ko‘chira oladimi?</h2>
      <p>2025-yil yanvarida Telegram kolleksion sovg‘alarni TON blokcheyni orqali boshqa odamga o‘tkazish yoki auksionga qo‘yish mumkinligini e’lon qildi (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>). Sovg‘ani Tonkeeper yoki boshqa TON hamyonga chiqarsangiz, u hamyondagi boshqa NFT’lar bilan bitta ro‘yxatda ko‘rinadi. Notanish odam yuborgan NFT ham o‘sha ro‘yxatga tushadi. Natijada haqiqiy sovg‘a bilan axlat yonma-yon turib qoladi va ularni adashtirib yuborish oson.</p>
      <p>Hamyonga NFT kelishi uchun sizdan hech narsa so‘ralmaydi: manzilingizni bilgan har kim uni yuborishi mumkin. Spam yuboruvchilar odatda NFT’ning o‘zi bilan cheklanmaydi. Ular sizni biror harakatga undaydi: tavsifdagi havolani ochish, saytga hamyonni ulash yoki «tekshiruv» tranzaksiyasini tasdiqlash. Sovg‘a aynan shu bosqichda qo‘ldan ketishi mumkin.</p>
      <p>Telegram blogida yana shunday deyilgan: blokcheynga o‘tkazilgan sovg‘a egasi Telegram akkauntiga kira olmay qolsa yoki akkauntni o‘chirsa ham egasida qoladi. Bu yaxshi tomoni. Ammo endi sovg‘aning taqdiri Telegram parolingizga emas, hamyon kalitini qanchalik ehtiyot qilishingizga bog‘liq.</p>
      <p>Chatlarda «spam NFT’ga tegsang, hamyon bo‘shaydi» degan ogohlantirishlar uchrab turadi. Buni tasdiqlaydigan ham, rad etadigan ham rasmiy bayonot topmadik. Spam NFT’ni yoqish (burn) yoki boshqa manzilga yuborish xavfsizmi, bu savolga ham rasmiy manbalarda javob yo‘q. Shuning uchun bu maqolada eng ehtiyotkor yo‘l tavsiya qilinadi: noma’lum NFT bilan hech qanday amal qilmang.</p>
      <h2 id="stars-premium-va-profildagi-sovgalar">Stars, Premium va profildagi sovg‘alar qayerda saqlanadi?</h2>
      <p>Har bir aktiv qayerda turishini bilsangiz, qaysi biri spamdan zarar ko‘rishi mumkinligi ham aniq bo‘ladi.</p>
      <CompareTable
        headers={["Aktiv", "Qayerda turadi", "Spam NFT unga yetadimi", "Asl xavf manbai"]}
        rows={[
          ["Stars balansi", "Telegram akkauntida", "Yo‘q", "Akkauntga begona kirishi"],
          ["Telegram Premium", "Telegram akkauntida", "Yo‘q", "Akkauntga begona kirishi"],
          ["Profildagi, chiqarilmagan sovg‘a", "Telegram akkauntida", "To‘g‘ridan-to‘g‘ri yo‘q", "Akkaunt o‘g‘irlanishi, soxta havola"],
          ["TON hamyonga chiqarilgan sovg‘a", "Blokcheynda, egasi nazoratida", "Faqat siz biror amal qilsangiz", "Imzolangan tranzaksiya, zaxira so‘zlarini berish"],
          ["Hamyondagi Gram", "TON hamyonda", "Faqat siz biror amal qilsangiz", "Notanish saytga ulanish, zaxira so‘zlari"],
        ]}
      />
      <p>Jadvalning ikki qismi ikki xil himoya talab qiladi. Stars, Premium va profildagi sovg‘alarni 2FA paroli va faol seanslarni nazorat qilish himoya qiladi. Bu haqda <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkauntni 2FA bilan himoyalash maqolasida</Link> batafsil yozilgan. Hamyondagi narsalarni esa zaxira so‘zlari va qaysi saytga ulanganingiz hal qiladi. Hamyon ulanishining yulduz balansiga ta’siri <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">Fragment’dagi ulanish xavfi haqidagi maqolada</Link> alohida ko‘rib chiqilgan.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="chiqargan-sovgani-taqlid-nusxadan-qanday">Chiqargan sovg‘ani taqlid nusxadan qanday farqlaysiz?</h2>
      <p>Taqlid NFT ko‘pincha mashhur Telegram sovg‘asiga o‘xshatib yasaladi. Nomi, rasmi va «X/Y» ko‘rinishidagi raqami ham bir xil bo‘lishi mumkin. Shuning uchun faqat rasmga qarab xulosa chiqarmang.</p>
      <CompareTable
        headers={["Belgi", "O‘zingiz chiqargan sovg‘a", "Taqlid nusxa"]}
        rows={[
          ["Paydo bo‘lgan payt", "Siz o‘tkazishni tasdiqlagan payt", "Kutilmaganda, siz hech narsa qilmasdan"],
          ["Telegram’dagi holati", "Profilda u chiqarilgani ko‘rinadi", "Telegram’da bunday sovg‘a sizda bo‘lmagan"],
          ["Tavsif", "Odatda oddiy", "«Claim», «mukofotni oling», sayt havolasi"],
          ["Soni", "Har nusxa bittadan", "Bir xil nomdagi ikkinchi element"],
        ]}
      />
      <p>Tekshirishda quyidagilarga tayaning:</p>
      <ul>
        <li><b>O‘zingiz yozib olgan ma’lumot.</b> Chiqarishdan oldin sovg‘aning nomi, raqami, modeli va fonini yozib qo‘ying. Hamyondagi elementni shu yozuv bilan solishtiring.</li>
        <li><b>Eksplorerdagi kolleksiya.</b> NFT sahifasini TON eksplorerda ochsangiz, u qaysi kolleksiyaga tegishli ekani ko‘rinadi. Uni o‘zingiz chiqargan sovg‘aning kolleksiyasi bilan solishtiring. TON hujjatlaridagi rasmiy tekshiruv tartibini bu maqolada tasdiqlay olmadik, shuning uchun shubha qolsa, elementga tegmang.</li>
        <li><b>Havola.</b> Tavsifdagi havolani ochmasdan oldin <Link href="/blog/telegram-gift-havolasini-tekshirish">gift havolasini tekshirish qo‘llanmasiga</Link> qarang.</li>
      </ul>
      <p>Misol: Telegram’dan bitta «Plush Pepe» chiqargansiz, hamyonda esa shu nomdagi ikkita element ko‘rinadi. Bittasi kecha, siz hech narsa qilmagan kuni paydo bo‘lgan. Aynan o‘sha element taqlid nusxa. Uni sotish, yuborish yoki havolasini ochishga urinmang.</p>
      <h2 id="qaysi-bosish-va-imzolar-sovgani">Qaysi bosish va imzolar sovg‘ani yo‘qotishga olib keladi?</h2>
      <p>Telegram blogiga ko‘ra, TON hamyonga o‘tkazilgan sovg‘ani tashqi xizmatlarga ulash mumkin. Bu bozor va boshqa ilovalar bilan ishlash uchun qulay. Lekin firibgar sayt ham o‘zini xuddi shunday «xizmat» qilib ko‘rsatadi. Quyidagi harakatlar sovg‘ani xavf ostiga qo‘yadi:</p>
      <ul>
        <li><b>Spam NFT tavsifidagi saytga hamyonni ulash.</b> Sayt ulanishni so‘rasa, sahifani yoping.</li>
        <li><b>Mazmunini tushunmay tranzaksiyani tasdiqlash.</b> «Tekshirish», «tozalash» yoki «faollashtirish» deb berilgan imzo aslida aktivni boshqa manzilga yuborishga ruxsat bo‘lishi mumkin. Tasdiqlash oynasida nima va qayerga ketayotganini o‘qing.</li>
        <li><b>Zaxira so‘zlarini biror maydonga yozish.</b> Bahona qanday bo‘lmasin, halol tomon ularni so‘ramaydi.</li>
        <li><b>Oldindan to‘lov talab qilgan «xaridor»ga ishonish.</b> Kimdir sovg‘ani yoki spam NFT’ni yaxshi narxda olishga va’da berib, avval komissiya to‘lashni so‘rasa, savdoni to‘xtating.</li>
      </ul>
      <p>Spam element ro‘yxatda ko‘zga xalaqit bersa, hamyon ilovasida uni yashirish imkoni bor-yo‘qligini qarang. Bunday funksiya har ilovada har xil bo‘ladi.</p>
      <h2 id="sovgani-chiqarishdan-oldin-hamyonni-qanday">Sovg‘ani chiqarishdan oldin hamyonni qanday tayyorlash kerak?</h2>
      <p>Hali chiqarmagan bo‘lsangiz, quyidagi tartib keyin spam bilan chalkashlikni ham, xavfni ham kamaytiradi.</p>
      <Steps>
        <Step title={"Alohida hamyon"}>sovg‘alar uchun airdrop, o‘yin va noma’lum saytlarga hech qachon ulanmagan alohida hamyon oching. Gram bilan kundalik to‘lovlarni boshqa hamyondan qiling.</Step>
        <Step title={"Zaxira so‘zlari"}>ularni qog‘ozga yozib, oflayn saqlang, skrinshot qilmang. Kalit kimda turishi haqida <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">Gram hamyon zaxira so‘zlari maqolasida</Link> yozilgan.</Step>
        <Step title={"Telegram himoyasi"}>2FA parolini qo‘ying, «Qurilmalar» bo‘limida notanish seanslarni yoping.</Step>
        <Step title={"Sovg‘a ma’lumotlari"}>nomi, raqami, modeli va fonini yozib oling.</Step>
        <Step title={"O‘tkazish"}>sovg‘ani ilovadagi o‘tkazish menyusi orqali chiqaring. Aniq menyu yo‘li va narxini bu maqolada tasdiqlay olmadik, shuning uchun ilova ko‘rsatgan shartlarni tasdiqlashdan oldin diqqat bilan o‘qing. Jarayon <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani blokcheynga o‘tkazish qo‘llanmasida</Link> yoritilgan.</Step>
        <Step title={"Tekshiruv"}>sovg‘a hamyonga tushganini eksplorerda ko‘ring va 4-qadamdagi yozuv bilan solishtiring.</Step>
        <Step title={"Ulanishlar ro‘yxati"}>hamyon ulangan saytlarni vaqti-vaqti bilan ko‘rib chiqing, keraksizlarini uzing.</Step>
      </Steps>
      <Notice label={"Muhim"}>Blokcheynga chiqarilgan sovg‘ani yana Telegram ichiga qaytarish mumkinligi rasman tasdiqlanmagan. Chiqarishga qaror qilishdan oldin buni hisobga oling.</Notice>
      <h2 id="hamyon-ilovasi-ishlamay-qolsa-yoki">Hamyon ilovasi ishlamay qolsa yoki sovg‘a ro‘yxatdan yo‘qolsa</h2>
      <p>Hamyon ilovasi ba’zan sekin ochiladi yoki NFT ro‘yxatini ko‘rsatmay qo‘yadi. Spam kelgan kuni bu holat qo‘rqitishi mumkin, lekin ilova ishlamasligi hali sovg‘a ketganini bildirmaydi. Ilova faqat blokcheyndagi ma’lumotni ko‘rsatadi. Asl holatni ilovasiz ham tekshirsa bo‘ladi.</p>
      <Steps>
        <Step title={"Yangilash"}>hamyon ilovasini eng so‘nggi versiyaga yangilang.</Step>
        <Step title={"Kutish"}>biroz vaqtdan keyin ilovani qayta oching.</Step>
        <Step title={"Eksplorer"}>manzilingizni eksplorerda oching va sovg‘a hamda Gram joyidaligini ko‘ring. Tartib <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">eksplorerda tekshirish maqolasida</Link> yozilgan.</Step>
        <Step title={"«Tiklash» xizmatlari"}>zaxira so‘zlarini so‘raydigan sayt, bot yoki «support» akkauntiga murojaat qilmang. Ular hamyonni tiklamaydi, egallab oladi.</Step>
      </Steps>
      <p>Eksplorerda sovg‘a boshqa manzilga ketgani ko‘rinsa, chiqib ketgan tranzaksiya sanasini va siz o‘sha kuni nimani ochganingizni eslang. Odatda sabab shu yerda bo‘ladi.</p>
      <Notice label={"Muhim"}>Zaxira so‘zlarini biror saytga kiritgan yoki notanish tranzaksiyani tasdiqlagan bo‘lsangiz, yangi hamyon oching va qolgan aktivlarni darhol o‘sha yerga o‘tkazing. Eski hamyonni boshqa ishlatmang.</Notice>
      <h2 id="spam-nftni-bahona-qilgan-xabarlarni">Spam NFT’ni bahona qilgan xabarlarni qanday tanish mumkin?</h2>
      <p>Spam haqidagi gaplar tarqalgach, qo‘rqib qolgan egalarga shaxsiy xabarlar kela boshlaydi. Ko‘p uchraydigan shakllar:</p>
      <ul>
        <li><b>«Hamyoningizga zararli NFT tushdi, botimizda skanerlab bering».</b> Maqsad — hamyonni ulatish yoki imzo oldirish. Botni ochmang, manzilni eksplorerda o‘zingiz ko‘ring.</li>
        <li><b>«Sovg‘angiz muzlatiladi, uni zaxira manzilga o‘tkazing».</b> Bu sovg‘ani firibgarning manziliga yuborishga undash. Sovg‘a uchun sizning hamyoningizdan xavfsizroq «zaxira manzil» yo‘q.</li>
        <li><b>«Kolleksiyamizga spam NFT’ingiz kerak, avval tarmoq to‘lovini o‘tkazing».</b> Halol xaridor sotuvchidan oldindan pul so‘ramaydi.</li>
        <li><b>«Telegram xavfsizlik xizmati: sovg‘ani tasdiqlash uchun kelgan kodni yuboring».</b> Telegram’dan kelgan kirish kodi — akkauntga kirish kaliti. Uni hech kimga bermang, xabarni spam deb belgilab, yuboruvchini bloklang.</li>
      </ul>
      <p>Bu xabarlarning umumiy belgisi bitta: shoshiltiradi va sizdan harakat talab qiladi. Haqiqiy muammo bo‘lsa, uni o‘zingiz eksplorerda ko‘rasiz, notanish odamning xabari kerak bo‘lmaydi.</p>
      <h2 id="sovgani-hamyonga-chiqarmasdan-saqlash-va">Sovg‘ani hamyonga chiqarmasdan saqlash va so‘mda olish</h2>
      <p>Kolleksion sovg‘ani blokcheynga chiqarish majburiy emas. U Telegram profilingizda ham turaveradi, shunda hamyondagi spam muammosi umuman bo‘lmaydi. Hamyon faqat sovg‘ani blokcheynda saqlash yoki tashqi xizmatga ulash kerak bo‘lsa kerak.</p>
      <p>Tayyor kolleksion sovg‘ani <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>’dagi NFT Market’dan so‘mda olish mumkin. Batafsil: <Link href="/blog/starspaymee-nft-market">NFT Market haqida</Link> va <Link href="/gifts">sovg‘alar sahifasi</Link>. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi.</p>
      <p><Link href="/stars">Stars</Link> va <Link href="/premium">Premium</Link> faqat @username orqali beriladi. Parol, SMS kod, hamyon manzili yoki zaxira so‘zlari so‘ralmaydi. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</p>
      <CompareTable
        headers={["Mahsulot", "Narx"]}
        rows={[
          ["1 ta Stars — karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan", `${som(STARS_PER_UNIT_UZS, "uz")}`],
          ["1 ta Stars — Click, Payme, Uzum yoki Paynet orqali", `${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}`],
          ["Premium, 3 oy", `${som(premium(3), "uz")}`],
          ["Premium, 6 oy", `${som(premium(6), "uz")}`],
          ["Premium, 12 oy", `${som(premium(12), "uz")}`],
        ]}
      />
      <p>Stars uchun eng kam buyurtma — 50 ta. Premium narxi hamma to‘lov usulida bir xil. Akkauntda faol Premium bo‘lsa, bot yangi Premium buyurtmasini ochmaydi.</p>
      <p>StarsPaymee foydalanuvchilardan sovg‘a va Stars sotib olmaydi. Shuning uchun «StarsPaymee spam NFT’ingizni sotib oladi» degan xabar soxta. StarsPaymee Telegram’ga tegishli bo‘lmagan mustaqil xizmat. Savol tug‘ilsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Telegram blogi: Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More (24.01.2025)" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Hamyonda spam NFT bor, profilimdagi chiqarilmagan sovg‘alarim ham xavf ostidami?", answer: "Yo‘q. Chiqarilmagan sovg‘alar Telegram akkauntida turadi, hamyondagi narsalar ularga ta’sir qilmaydi. Ularni akkaunt himoyasi, ya’ni 2FA va seanslar nazorati asraydi." },
  { question: "Chiqargan sovg‘amning nomi bilan yana bitta element paydo bo‘ldi. Qaysi biri meniki?", answer: "Siz o‘tkazishni tasdiqlagan kuni kelgani va eksplorerda o‘zingiz yozib olgan ma’lumotga mos keladigani sizniki. Keyin kutilmaganda paydo bo‘lgan nusxaga tegmang." },
  { question: "Hamyonga axlat NFT kelgani uchun yulduzlarim kamayishi yoki Premium o‘chishi mumkinmi?", answer: "Yo‘q, Stars va Premium hamyonda emas, akkauntda hisoblanadi. Ular faqat kimdir akkauntingizga kirib olsa xavf ostida qoladi." },
  { question: "Spam elementni yoqib tashlasam, yonidagi haqiqiy sovg‘amga zarar yetadimi?", answer: "Bu harakat xavfsiz yoki xavfli ekani haqida rasmiy ma’lumot topilmadi. Qimmat sovg‘a turgan hamyonda notanish NFT bilan hech qanday tranzaksiya qilmaslik eng ehtiyotkor yo‘l." },
  { question: "Telegram akkauntim o‘chib ketsa, hamyonga chiqarilgan sovg‘a nima bo‘ladi?", answer: "Telegram blogiga ko‘ra, blokcheynga o‘tkazilgan sovg‘a bu holatda ham egasida qoladi. Faqat hamyon kaliti va zaxira so‘zlari sizda saqlangan bo‘lishi kerak." },
  { question: "Hamyondagi sovg‘ani keyin yana Telegram profilimga qaytarsam bo‘ladimi?", answer: "Bunday imkoniyat borligi rasman tasdiqlanmagan. Shu sabab sovg‘ani blokcheynda uzoq saqlashga tayyor bo‘lsangizgina chiqaring." },
  { question: "Sovg‘alar va Gram’ni bitta hamyonda saqlasam bo‘ladimi?", answer: "Bo‘ladi, lekin bitta xato imzo ikkalasini birdaniga xavf ostiga qo‘yadi. Qimmat sovg‘alar uchun saytlarga ulanmaydigan alohida hamyon ochish xavfsizroq." },
  { question: "Spam kelgach, kimdir «Telegram xavfsizlik xizmati»dan deb yozib, kod so‘radi. Nima qilay?", answer: "Kodni yubormang va xabardagi havolani ochmang. Yuboruvchini spam deb belgilab bloklang, keyin «Qurilmalar» bo‘limida notanish seans yo‘qligini tekshiring." },
  { question: "NFT Market’dan olgan sovg‘amni TON hamyonga chiqarishim shartmi?", answer: "Shart emas, u Telegram profilingizda ham turaveradi. Hamyon faqat sovg‘ani blokcheynga olib chiqmoqchi yoki tashqi xizmatga ulamoqchi bo‘lsangiz kerak." },
  { question: "Stars yoki Premium buyurtmasi uchun botga hamyon manzilini yozishim kerakmi?", answer: "Kerak emas, @StarsPaymee_bot faqat @username so‘raydi. Parol, SMS kod yoki zaxira so‘zlarini so‘rayotgan har qanday «yordamchi» firibgar." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Спам-NFT, который пришёл в кошелёк, не может сам перенести на другой адрес ваш подарок Telegram, выведенный в TON. До баланса Stars и Premium он вообще не дотягивается: они хранятся в аккаунте Telegram, а не в кошельке. Опасен не сам NFT. Опасны ссылка, которую вы откроете, транзакция, которую подтвердите, и сид-фраза, которую вы кому-то назовёте.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#spam-nft-hamyondagi-sovgani-ozicha", label: "Может ли спам-NFT сам увести подарок из кошелька?" },
          { href: "#stars-premium-va-profildagi-sovgalar", label: "Где хранятся Stars, Premium и подарки в профиле?" },
          { href: "#chiqargan-sovgani-taqlid-nusxadan-qanday", label: "Как отличить выведенный подарок от подделки?" },
          { href: "#qaysi-bosish-va-imzolar-sovgani", label: "Какие нажатия и подписи приводят к потере подарка?" },
          { href: "#sovgani-chiqarishdan-oldin-hamyonni-qanday", label: "Как подготовить кошелёк перед выводом подарка?" },
          { href: "#hamyon-ilovasi-ishlamay-qolsa-yoki", label: "Если приложение кошелька не работает или подарок пропал из списка" },
          { href: "#spam-nftni-bahona-qilgan-xabarlarni", label: "Как распознать сообщения, где спам-NFT — лишь предлог?" },
          { href: "#sovgani-hamyonga-chiqarmasdan-saqlash-va", label: "Как хранить подарок без вывода в кошелёк и купить его в сумах" },
        ]}
      />
      <h2 id="spam-nft-hamyondagi-sovgani-ozicha">Может ли спам-NFT сам увести подарок из кошелька?</h2>
      <p>В январе 2025 года Telegram объявил, что коллекционные подарки теперь можно передавать другим людям или выставлять на аукцион через блокчейн TON (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">блог Telegram</a>). Если вывести подарок в Tonkeeper или другой TON-кошелёк, он окажется в одном списке с остальными NFT. Туда же попадёт и NFT, присланный незнакомцем. Настоящий подарок и мусор лежат рядом, и перепутать их несложно.</p>
      <p>Чтобы NFT пришёл в кошелёк, от вас ничего не требуется: прислать его может любой, кто знает адрес. Рассыльщики спама обычно на этом не останавливаются. Им нужно, чтобы вы что-то сделали: открыли ссылку из описания, подключили кошелёк к сайту или подтвердили «проверочную» транзакцию. Именно на этом шаге подарок можно потерять.</p>
      <p>В блоге Telegram сказано и другое: подарок, переведённый в блокчейн, остаётся у владельца, даже если тот потерял доступ к аккаунту Telegram или удалил его. Это плюс. Но теперь судьба подарка зависит не от пароля Telegram, а от того, насколько бережно вы храните ключ от кошелька.</p>
      <p>В чатах встречаются предупреждения вида «тронешь спам-NFT — кошелёк опустеет». Официального заявления, которое бы это подтверждало или опровергало, мы не нашли. Безопасно ли сжечь (burn) спам-NFT или отправить его на другой адрес, официальные источники тоже не говорят. Поэтому здесь мы советуем самый осторожный путь: не совершайте с неизвестным NFT никаких действий.</p>
      <h2 id="stars-premium-va-profildagi-sovgalar">Где хранятся Stars, Premium и подарки в профиле?</h2>
      <p>Когда понятно, где лежит каждый актив, понятно и то, какой из них может пострадать от спама.</p>
      <CompareTable
        headers={["Актив", "Где хранится", "Достаёт ли до него спам-NFT", "Настоящий источник риска"]}
        rows={[
          ["Баланс Stars", "В аккаунте Telegram", "Нет", "Посторонний вход в аккаунт"],
          ["Telegram Premium", "В аккаунте Telegram", "Нет", "Посторонний вход в аккаунт"],
          ["Подарок в профиле, не выведенный", "В аккаунте Telegram", "Напрямую нет", "Угон аккаунта, фальшивая ссылка"],
          ["Подарок, выведенный в TON-кошелёк", "В блокчейне, под контролем владельца", "Только если вы сами что-то сделаете", "Подписанная транзакция, переданная сид-фраза"],
          ["Gram в кошельке", "В TON-кошельке", "Только если вы сами что-то сделаете", "Подключение к незнакомому сайту, сид-фраза"],
        ]}
      />
      <p>Две части таблицы требуют разной защиты. Stars, Premium и подарки в профиле защищают пароль 2FA и контроль активных сеансов — подробно об этом в <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">статье о защите аккаунта через 2FA</Link>. То, что лежит в кошельке, зависит от сид-фразы и от того, к каким сайтам вы подключаетесь. Как подключение кошелька влияет на баланс звёзд, отдельно разобрано в <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">статье о рисках подключения на Fragment</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="chiqargan-sovgani-taqlid-nusxadan-qanday">Как отличить выведенный подарок от подделки?</h2>
      <p>Поддельный NFT часто делают похожим на популярный подарок Telegram. Совпадать могут название, картинка и даже номер вида «X/Y». Поэтому не делайте выводов только по изображению.</p>
      <CompareTable
        headers={["Признак", "Подарок, который вывели вы", "Подделка"]}
        rows={[
          ["Когда появился", "В момент, когда вы подтвердили перевод", "Неожиданно, без ваших действий"],
          ["Статус в Telegram", "В профиле видно, что он выведен", "Такого подарка у вас в Telegram не было"],
          ["Описание", "Обычно простое", "«Claim», «заберите награду», ссылка на сайт"],
          ["Количество", "Каждый экземпляр в одном числе", "Второй элемент с тем же названием"],
        ]}
      />
      <p>При проверке опирайтесь на следующее:</p>
      <ul>
        <li><b>Свои записи.</b> Перед выводом запишите название, номер, модель и фон подарка. Сверяйте элемент в кошельке с этой записью.</li>
        <li><b>Коллекция в эксплорере.</b> Если открыть страницу NFT в TON-эксплорере, видно, к какой коллекции он относится. Сравните её с коллекцией подарка, который вывели вы. Официальный порядок проверки из документации TON в этой статье подтвердить не удалось, поэтому при малейшем сомнении элемент не трогайте.</li>
        <li><b>Ссылка.</b> Прежде чем открывать ссылку из описания, загляните в <Link href="/blog/telegram-gift-havolasini-tekshirish">инструкцию по проверке ссылок на gift</Link>.</li>
      </ul>
      <p>Пример: вы вывели из Telegram один «Plush Pepe», а в кошельке видите два элемента с таким названием. Один из них появился вчера, в день, когда вы ничего не делали. Это и есть подделка. Не пытайтесь её продать, отправить или открыть ссылку из неё.</p>
      <h2 id="qaysi-bosish-va-imzolar-sovgani">Какие нажатия и подписи приводят к потере подарка?</h2>
      <p>По данным блога Telegram, подарок, переведённый в TON-кошелёк, можно подключать к внешним сервисам. Это удобно для работы с маркетплейсами и другими приложениями. Но мошеннический сайт тоже выдаёт себя за такой «сервис». Под угрозу подарок ставят вот какие действия:</p>
      <ul>
        <li><b>Подключение кошелька к сайту из описания спам-NFT.</b> Если сайт просит подключиться — закройте страницу.</li>
        <li><b>Подтверждение транзакции, смысл которой непонятен.</b> Подпись под видом «проверки», «очистки» или «активации» на деле может оказаться разрешением отправить актив на чужой адрес. В окне подтверждения читайте, что и куда уходит.</li>
        <li><b>Ввод сид-фразы в какое-либо поле.</b> Какой бы ни был предлог, честная сторона её не попросит.</li>
        <li><b>Доверие «покупателю», который требует предоплату.</b> Если кто-то обещает хорошую цену за подарок или спам-NFT, но сначала просит оплатить комиссию — прекращайте сделку.</li>
      </ul>
      <p>Если спам-элемент мешает в списке, проверьте, можно ли скрыть его в приложении кошелька. В каждом приложении эта функция устроена по-своему.</p>
      <h2 id="sovgani-chiqarishdan-oldin-hamyonni-qanday">Как подготовить кошелёк перед выводом подарка?</h2>
      <p>Если вы ещё не выводили подарок, такой порядок снизит и путаницу со спамом, и риски.</p>
      <Steps>
        <Step title={"Отдельный кошелёк"}>заведите для подарков отдельный кошелёк, который никогда не подключался к аирдропам, играм и незнакомым сайтам. Повседневные платежи в Gram делайте с другого кошелька.</Step>
        <Step title={"Сид-фраза"}>запишите её на бумаге и храните офлайн, без скриншотов. О том, у кого хранится ключ, — в <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">статье о сид-фразе Gram-кошелька</Link>.</Step>
        <Step title={"Защита Telegram"}>установите пароль 2FA и закройте незнакомые сеансы в разделе «Устройства».</Step>
        <Step title={"Данные подарка"}>запишите название, номер, модель и фон.</Step>
        <Step title={"Перевод"}>выведите подарок через меню передачи в приложении. Точный путь в меню и стоимость в этой статье подтвердить не удалось, поэтому внимательно прочитайте условия, которые покажет приложение, прежде чем подтверждать. Сам процесс описан в <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">инструкции по выводу NFT-подарка в блокчейн</Link>.</Step>
        <Step title={"Проверка"}>убедитесь в эксплорере, что подарок пришёл в кошелёк, и сверьте его с записью из шага 4.</Step>
        <Step title={"Список подключений"}>время от времени просматривайте сайты, к которым подключён кошелёк, и отключайте лишние.</Step>
      </Steps>
      <Notice label={"Важно"}>Возможность вернуть выведенный в блокчейн подарок обратно в Telegram официально не подтверждена. Учтите это, прежде чем решаться на вывод.</Notice>
      <h2 id="hamyon-ilovasi-ishlamay-qolsa-yoki">Если приложение кошелька не работает или подарок пропал из списка</h2>
      <p>Приложение кошелька иногда долго открывается или перестаёт показывать список NFT. В день, когда пришёл спам, это может напугать, но сбой приложения ещё не значит, что подарок ушёл. Приложение лишь показывает данные из блокчейна, а реальное состояние можно проверить и без него.</p>
      <Steps>
        <Step title={"Обновление"}>обновите приложение кошелька до последней версии.</Step>
        <Step title={"Ожидание"}>через некоторое время откройте приложение снова.</Step>
        <Step title={"Эксплорер"}>откройте свой адрес в эксплорере и убедитесь, что подарок и Gram на месте. Порядок описан в <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">статье о проверке в эксплорере</Link>.</Step>
        <Step title={"Сервисы «восстановления»"}>не обращайтесь к сайтам, ботам и «саппортам», которые просят сид-фразу. Они не восстанавливают кошелёк, а забирают его.</Step>
      </Steps>
      <p>Если в эксплорере видно, что подарок ушёл на другой адрес, посмотрите дату исходящей транзакции и вспомните, что вы открывали в тот день. Обычно причина именно там.</p>
      <Notice label={"Важно"}>Если вы вводили сид-фразу на каком-то сайте или подтверждали незнакомую транзакцию, создайте новый кошелёк и сразу переведите туда оставшиеся активы. Старым кошельком больше не пользуйтесь.</Notice>
      <h2 id="spam-nftni-bahona-qilgan-xabarlarni">Как распознать сообщения, где спам-NFT — лишь предлог?</h2>
      <p>Когда разговоры о спаме расходятся, напуганным владельцам начинают писать в личку. Самые частые варианты:</p>
      <ul>
        <li><b>«В ваш кошелёк попал вредоносный NFT, просканируйте его в нашем боте».</b> Цель — заставить подключить кошелёк или получить подпись. Бот не открывайте, адрес проверьте в эксплорере сами.</li>
        <li><b>«Ваш подарок заморозят, переведите его на резервный адрес».</b> Это попытка заставить отправить подарок на адрес мошенника. Более надёжного «резервного адреса», чем ваш собственный кошелёк, для подарка не существует.</li>
        <li><b>«Нашей коллекции нужен ваш спам-NFT, сначала оплатите сетевую комиссию».</b> Честный покупатель не просит у продавца деньги вперёд.</li>
        <li><b>«Служба безопасности Telegram: пришлите код, чтобы подтвердить подарок».</b> Код входа от Telegram — это ключ к аккаунту. Никому его не сообщайте, отметьте сообщение как спам и заблокируйте отправителя.</li>
      </ul>
      <p>У всех этих сообщений один общий признак: они торопят и требуют от вас действий. Если проблема настоящая, вы увидите её в эксплорере сами, без сообщений от незнакомцев.</p>
      <h2 id="sovgani-hamyonga-chiqarmasdan-saqlash-va">Как хранить подарок без вывода в кошелёк и купить его в сумах</h2>
      <p>Выводить коллекционный подарок в блокчейн не обязательно. Он может оставаться в профиле Telegram — тогда проблемы со спамом в кошельке не возникает вовсе. Кошелёк нужен, только если вы хотите хранить подарок в блокчейне или подключить его к внешнему сервису.</p>
      <p>Готовый коллекционный подарок можно купить в сумах в NFT Market внутри <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Подробнее: <Link href="/blog/starspaymee-nft-market">об NFT Market</Link> и <Link href="/gifts">страница подарков</Link>. Лимитированные подарки, которые Telegram снял с продажи, боты отправлять не могут.</p>
      <p><Link href="/stars">Stars</Link> и <Link href="/premium">Premium</Link> оформляются только по @username. Пароль, SMS-код, адрес кошелька или сид-фразу никто не спрашивает. Заказ обычно доставляется автоматически за несколько секунд.</p>
      <CompareTable
        headers={["Товар", "Цена"]}
        rows={[
          ["1 Stars — переводом на карту (UzCard/HUMO) или с баланса бота", `${som(STARS_PER_UNIT_UZS, "ru")}`],
          ["1 Stars — через Click, Payme, Uzum или Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}`],
          ["Premium, 3 месяца", `${som(premium(3), "ru")}`],
          ["Premium, 6 месяцев", `${som(premium(6), "ru")}`],
          ["Premium, 12 месяцев", `${som(premium(12), "ru")}`],
        ]}
      />
      <p>Минимальный заказ Stars — 50 штук. Цена Premium одинакова при любом способе оплаты. Если в аккаунте уже есть активный Premium, бот не откроет новый заказ на Premium.</p>
      <p>StarsPaymee не покупает подарки и Stars у пользователей. Поэтому сообщение «StarsPaymee выкупит ваш спам-NFT» — фальшивка. StarsPaymee — независимый сервис, не принадлежащий Telegram. Если остались вопросы, пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Telegram blogi: Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More (24.01.2025)" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "В кошельке спам-NFT — под угрозой ли подарки в профиле, которые я не выводил?", answer: "Нет. Невыведенные подарки хранятся в аккаунте Telegram, и содержимое кошелька на них не влияет. Их защищает безопасность аккаунта — 2FA и контроль сеансов." },
  { question: "Появился ещё один элемент с названием моего выведенного подарка. Какой из них мой?", answer: "Ваш — тот, что пришёл в день, когда вы подтвердили перевод, и совпадает в эксплорере с вашими записями. Копию, возникшую позже без вашего участия, не трогайте." },
  { question: "Могут ли из-за мусорного NFT в кошельке уменьшиться звёзды или отключиться Premium?", answer: "Нет, Stars и Premium учитываются в аккаунте, а не в кошельке. Рисковать ими можно, только если кто-то получит доступ к вашему аккаунту." },
  { question: "Если сжечь спам-элемент, пострадает ли настоящий подарок рядом?", answer: "Официальных данных о том, безопасно это или нет, мы не нашли. Самый осторожный вариант — не проводить никаких транзакций с незнакомым NFT в кошельке, где лежит ценный подарок." },
  { question: "Что будет с выведенным в кошелёк подарком, если мой аккаунт Telegram удалят?", answer: "По данным блога Telegram, подарок в блокчейне и в этом случае остаётся у владельца. Главное, чтобы ключ от кошелька и сид-фраза были у вас." },
  { question: "Можно ли потом вернуть подарок из кошелька обратно в профиль Telegram?", answer: "Официально такая возможность не подтверждена. Поэтому выводите подарок, только если готовы долго хранить его в блокчейне." },
  { question: "Можно ли держать подарки и Gram в одном кошельке?", answer: "Можно, но одна неверная подпись поставит под удар и то и другое сразу. Для ценных подарков надёжнее отдельный кошелёк, который не подключается к сайтам." },
  { question: "После спама мне написали от «службы безопасности Telegram» и попросили код. Что делать?", answer: "Код не отправляйте и ссылку из сообщения не открывайте. Отметьте отправителя как спам, заблокируйте его и проверьте в разделе «Устройства», нет ли чужих сеансов." },
  { question: "Обязательно ли выводить в TON-кошелёк подарок, купленный в NFT Market?", answer: "Не обязательно, он может оставаться в профиле Telegram. Кошелёк нужен, только если вы хотите перенести подарок в блокчейн или подключить к внешнему сервису." },
  { question: "Нужно ли указывать боту адрес кошелька для заказа Stars или Premium?", answer: "Нет, @StarsPaymee_bot просит только @username. Любой «помощник», которому нужны пароль, SMS-код или сид-фраза, — мошенник." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>A spam NFT that lands in your wallet can’t move a Telegram gift you’ve withdrawn to TON by itself. It can’t reach your Stars balance or Premium either, because those are stored in your Telegram account, not in a wallet. The NFT arriving isn’t the danger. The danger is a link you open, a transaction you approve or a recovery phrase you share.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#spam-nft-hamyondagi-sovgani-ozicha", label: "Can a spam NFT move a gift out of my wallet by itself?" },
          { href: "#stars-premium-va-profildagi-sovgalar", label: "Where are Stars, Premium and profile gifts actually stored?" },
          { href: "#chiqargan-sovgani-taqlid-nusxadan-qanday", label: "How do you tell a gift you withdrew from a fake copy?" },
          { href: "#qaysi-bosish-va-imzolar-sovgani", label: "Which clicks and signatures can cost you a gift?" },
          { href: "#sovgani-chiqarishdan-oldin-hamyonni-qanday", label: "How should you prepare your wallet before withdrawing a gift?" },
          { href: "#hamyon-ilovasi-ishlamay-qolsa-yoki", label: "If your wallet app stops working or a gift disappears from the list" },
          { href: "#spam-nftni-bahona-qilgan-xabarlarni", label: "How do you recognise messages that use spam NFTs as bait?" },
          { href: "#sovgani-hamyonga-chiqarmasdan-saqlash-va", label: "Keeping gifts off the blockchain and buying in so‘m" },
        ]}
      />
      <h2 id="spam-nft-hamyondagi-sovgani-ozicha">Can a spam NFT move a gift out of my wallet by itself?</h2>
      <p>In January 2025, Telegram announced that collectible gifts can be transferred to other people or auctioned via the TON blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a>). If you withdraw a gift to Tonkeeper or another TON wallet, it shows up in the same list as every other NFT in that wallet. An NFT sent by a stranger lands in that list too. So your real gift ends up sitting right next to junk, and the two are easy to mix up.</p>
      <p>Nobody needs your permission to send an NFT to your wallet. Anyone who knows your address can do it. Spammers rarely stop at the NFT itself. They want you to do something: open a link in the description, connect your wallet to a website or approve a “verification” transaction. That’s the step where a gift can actually slip away.</p>
      <p>The Telegram blog also says that once a gift has been moved to the blockchain, it stays with its owner even if they lose access to their Telegram account or delete it. That’s the upside. The flip side is that the gift’s safety no longer depends on your Telegram password. It depends on how well you guard your wallet key.</p>
      <p>You’ll see warnings in chats like “touch a spam NFT and your wallet gets drained.” We found no official statement that confirms or denies this. Official sources also don’t say whether burning a spam NFT or sending it to another address is safe. So this article takes the most careful line: don’t do anything at all with an NFT you don’t recognise.</p>
      <h2 id="stars-premium-va-profildagi-sovgalar">Where are Stars, Premium and profile gifts actually stored?</h2>
      <p>Once you know where each asset is stored, it’s clear which ones spam can and can’t affect.</p>
      <CompareTable
        headers={["Asset", "Where it’s stored", "Can a spam NFT reach it?", "Real source of risk"]}
        rows={[
          ["Stars balance", "Your Telegram account", "No", "Someone else getting into your account"],
          ["Telegram Premium", "Your Telegram account", "No", "Someone else getting into your account"],
          ["Gift on your profile, not withdrawn", "Your Telegram account", "Not directly", "Account theft, fake links"],
          ["Gift withdrawn to a TON wallet", "On the blockchain, under the owner’s control", "Only if you take some action", "A signed transaction, handing over your recovery phrase"],
          ["Gram in your wallet", "Your TON wallet", "Only if you take some action", "Connecting to an unknown site, your recovery phrase"],
        ]}
      />
      <p>The two halves of this table need different protection. Stars, Premium and profile gifts are protected by a 2FA password and by keeping an eye on active sessions. Our <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">guide to protecting your account with 2FA</Link> covers this in detail. What’s in your wallet depends on your recovery phrase and on which sites you connect to. How a wallet connection affects your Stars balance is covered separately in our <Link href="/blog/fragment-hamyon-ulanishi-stars-xavfi">article on Fragment connection risks</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="chiqargan-sovgani-taqlid-nusxadan-qanday">How do you tell a gift you withdrew from a fake copy?</h2>
      <p>Fake NFTs are often made to look like popular Telegram gifts. The name, the image and even the “X/Y” number can match. So don’t judge by the picture alone.</p>
      <CompareTable
        headers={["Sign", "A gift you withdrew yourself", "A fake copy"]}
        rows={[
          ["When it appeared", "When you confirmed the transfer", "Out of the blue, without you doing anything"],
          ["Status in Telegram", "Your profile shows it was withdrawn", "You never had this gift in Telegram"],
          ["Description", "Usually plain", "“Claim”, “collect your reward”, a website link"],
          ["Count", "One of each item", "A second item with the same name"],
        ]}
      />
      <p>When you check, rely on these:</p>
      <ul>
        <li><b>Your own notes.</b> Before withdrawing, write down the gift’s name, number, model and backdrop. Compare the item in your wallet against those notes.</li>
        <li><b>The collection in an explorer.</b> Open the NFT’s page in a TON explorer and you’ll see which collection it belongs to. Compare it with the collection of the gift you withdrew. We couldn’t confirm the official verification procedure in TON’s documentation for this article, so if you still have doubts, leave the item alone.</li>
        <li><b>Links.</b> Before opening any link in a description, check our <Link href="/blog/telegram-gift-havolasini-tekshirish">guide to checking gift links</Link>.</li>
      </ul>
      <p>Example: you withdrew one “Plush Pepe” from Telegram, but your wallet shows two items with that name. One of them appeared yesterday, on a day you did nothing. That one is the fake. Don’t try to sell it, send it or open its link.</p>
      <h2 id="qaysi-bosish-va-imzolar-sovgani">Which clicks and signatures can cost you a gift?</h2>
      <p>According to the Telegram blog, moving a gift to a TON wallet lets you connect it to outside services. That’s handy for marketplaces and other apps. But a scam site will present itself as exactly that kind of “service.” These actions put your gift at risk:</p>
      <ul>
        <li><b>Connecting your wallet to a site from a spam NFT’s description.</b> If the site asks you to connect, close the page.</li>
        <li><b>Approving a transaction you don’t understand.</b> A signature labelled “verify”, “clean up” or “activate” may really be permission to send an asset to another address. On the confirmation screen, read what is being sent and where.</li>
        <li><b>Typing your recovery phrase into any field.</b> Whatever the excuse, no honest party will ever ask for it.</li>
        <li><b>Trusting a “buyer” who wants money up front.</b> If someone promises a good price for your gift or the spam NFT and asks you to pay a fee first, end the conversation.</li>
      </ul>
      <p>If a spam item clutters your list, see whether your wallet app lets you hide it. This works differently from app to app.</p>
      <h2 id="sovgani-chiqarishdan-oldin-hamyonni-qanday">How should you prepare your wallet before withdrawing a gift?</h2>
      <p>If you haven’t withdrawn yet, this routine cuts down on both confusion with spam later and actual risk.</p>
      <Steps>
        <Step title={"A separate wallet"}>create a wallet just for gifts, one that has never been connected to airdrops, games or unknown sites. Make everyday Gram payments from a different wallet.</Step>
        <Step title={"Recovery phrase"}>write it on paper and keep it offline. Don’t screenshot it. Who holds the key is explained in our <Link href="/blog/non-custodial-gram-hamyon-zaxira-sozlari">article on Gram wallet recovery phrases</Link>.</Step>
        <Step title={"Telegram security"}>set a 2FA password and close any unfamiliar sessions under “Devices.”</Step>
        <Step title={"Gift details"}>write down the name, number, model and backdrop.</Step>
        <Step title={"Transfer"}>withdraw the gift through the transfer menu in the app. We couldn’t confirm the exact menu path or cost for this article, so read the terms the app shows you carefully before confirming. The process is covered in our <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">guide to moving an NFT gift to the blockchain</Link>.</Step>
        <Step title={"Check"}>confirm in an explorer that the gift has arrived, and compare it with your notes from step 4.</Step>
        <Step title={"Connected sites"}>review the sites your wallet is connected to from time to time, and disconnect any you don’t need.</Step>
      </Steps>
      <Notice label={"Important"}>It hasn’t been officially confirmed that a gift withdrawn to the blockchain can be brought back into Telegram. Keep this in mind before you decide to withdraw.</Notice>
      <h2 id="hamyon-ilovasi-ishlamay-qolsa-yoki">If your wallet app stops working or a gift disappears from the list</h2>
      <p>Wallet apps sometimes open slowly or stop showing the NFT list. If this happens the same day spam arrives, it can be alarming. But an app glitch doesn’t mean your gift is gone. The app only displays what’s on the blockchain, and you can check the real state without it.</p>
      <Steps>
        <Step title={"Update"}>install the latest version of your wallet app.</Step>
        <Step title={"Wait"}>reopen the app after a little while.</Step>
        <Step title={"Explorer"}>open your address in an explorer and see whether the gift and your Gram are still there. The steps are in our <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">article on checking in an explorer</Link>.</Step>
        <Step title={"“Recovery” services"}>don’t contact any site, bot or “support” account that asks for your recovery phrase. They won’t restore your wallet. They’ll take it over.</Step>
      </Steps>
      <p>If the explorer shows the gift went to another address, note the date of that outgoing transaction and think back to what you opened that day. That’s usually where the cause is.</p>
      <Notice label={"Important"}>If you entered your recovery phrase on a website or approved an unfamiliar transaction, create a new wallet and move your remaining assets there right away. Stop using the old wallet.</Notice>
      <h2 id="spam-nftni-bahona-qilgan-xabarlarni">How do you recognise messages that use spam NFTs as bait?</h2>
      <p>Once talk about spam spreads, worried owners start getting private messages. The common versions:</p>
      <ul>
        <li><b>“A malicious NFT landed in your wallet, scan it with our bot.”</b> The goal is to get you to connect your wallet or sign something. Don’t open the bot. Check your address in an explorer yourself.</li>
        <li><b>“Your gift will be frozen, move it to a backup address.”</b> This is a push to send your gift to the scammer’s address. No “backup address” is safer for your gift than your own wallet.</li>
        <li><b>“Our collection needs your spam NFT, just pay the network fee first.”</b> A genuine buyer doesn’t ask the seller for money up front.</li>
        <li><b>“Telegram Security: send us the code you received to verify your gift.”</b> A login code from Telegram is the key to your account. Never give it to anyone. Report the message as spam and block the sender.</li>
      </ul>
      <p>All these messages share one trait: they rush you and want you to act. If something is really wrong, you’ll see it yourself in an explorer. You don’t need a message from a stranger.</p>
      <h2 id="sovgani-hamyonga-chiqarmasdan-saqlash-va">Keeping gifts off the blockchain and buying in so‘m</h2>
      <p>You don’t have to withdraw a collectible gift to the blockchain. It can stay on your Telegram profile, and then wallet spam isn’t an issue at all. You only need a wallet if you want to hold the gift on-chain or connect it to an outside service.</p>
      <p>You can buy ready-made collectible gifts in so‘m in the NFT Market inside <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. More details: <Link href="/blog/starspaymee-nft-market">about the NFT Market</Link> and the <Link href="/gifts">gifts page</Link>. Bots can’t send limited gifts that Telegram has taken off sale.</p>
      <p><Link href="/stars">Stars</Link> and <Link href="/premium">Premium</Link> are delivered using only your @username. No password, SMS code, wallet address or recovery phrase is requested. Orders are usually delivered automatically within a few seconds.</p>
      <CompareTable
        headers={["Product", "Price"]}
        rows={[
          ["1 Star, paid by card transfer (UzCard/HUMO) or from bot balance", `${som(STARS_PER_UNIT_UZS, "en")}`],
          ["1 Star, paid via Click, Payme, Uzum or Paynet", `${som(STARS_PER_UNIT_GATEWAY_UZS, "en")}`],
          ["Premium, 3 months", `${som(premium(3), "en")}`],
          ["Premium, 6 months", `${som(premium(6), "en")}`],
          ["Premium, 12 months", `${som(premium(12), "en")}`],
        ]}
      />
      <p>The minimum Stars order is 50. Premium costs the same with every payment method. If the account already has active Premium, the bot won’t open a new Premium order.</p>
      <p>StarsPaymee doesn’t buy gifts or Stars from users. So any message saying “StarsPaymee will buy your spam NFT” is fake. StarsPaymee is an independent service and isn’t part of Telegram. If you have questions, write to <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Telegram blogi: Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More (24.01.2025)" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "I have a spam NFT in my wallet. Are the gifts I haven’t withdrawn from my profile at risk too?", answer: "No. Gifts you haven’t withdrawn are stored in your Telegram account, and nothing in your wallet affects them. Account security protects them: 2FA and keeping an eye on your sessions." },
  { question: "A second item with the same name as my withdrawn gift showed up. Which one is mine?", answer: "Yours is the one that arrived on the day you confirmed the transfer and matches the details you wrote down when you check it in an explorer. Leave the copy that appeared unexpectedly alone." },
  { question: "Can junk NFTs in my wallet lower my Stars balance or switch off Premium?", answer: "No. Stars and Premium are tied to your account, not your wallet. They’re only at risk if someone gets into your Telegram account." },
  { question: "If I burn the spam item, could it damage the real gift next to it?", answer: "We found no official information on whether this is safe or risky. If your wallet holds a valuable gift, the most careful choice is not to make any transaction with an unknown NFT." },
  { question: "What happens to a withdrawn gift if my Telegram account gets deleted?", answer: "According to the Telegram blog, a gift moved to the blockchain stays with its owner even then. You just need to still have your wallet key and recovery phrase." },
  { question: "Can I move a gift from my wallet back to my Telegram profile later?", answer: "There’s no official confirmation that this is possible. Only withdraw a gift if you’re ready to keep it on the blockchain long-term." },
  { question: "Is it OK to keep gifts and Gram in the same wallet?", answer: "You can, but one bad signature puts both at risk at once. For valuable gifts, a separate wallet that never connects to websites is the safer choice." },
  { question: "After the spam arrived, someone claiming to be “Telegram Security” asked me for a code. What should I do?", answer: "Don’t send the code and don’t open any link in the message. Report the sender as spam, block them, then check “Devices” for any sessions you don’t recognise." },
  { question: "Do I have to withdraw a gift I bought in the NFT Market to a TON wallet?", answer: "No, it can stay on your Telegram profile. You only need a wallet if you want to take the gift on-chain or connect it to an outside service." },
  { question: "Do I need to give the bot my wallet address to order Stars or Premium?", answer: "No. @StarsPaymee_bot only asks for your @username. Any “helper” asking for your password, SMS code or recovery phrase is a scammer." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["spam NFT telegram sovgalarga xavflimi","hamyonga spam NFT keldi telegram sovga","tonkeeper spam nft xavfi","axlat NFT telegram gift","soxta NFT sovga qanday ajratish","telegram sovgani TON hamyonga chiqarish xavfsizmi","спам NFT в кошельке опасно","мусорные NFT Tonkeeper","спам NFT телеграм подарки","поддельный подарок телеграм NFT как отличить","NFT подарок в кошельке TON безопасность"],
  howToSteps: [
    { name: "Alohida hamyon", text: "sovg‘alar uchun airdrop, o‘yin va noma’lum saytlarga hech qachon ulanmagan alohida hamyon oching. Gram bilan kundalik to‘lovlarni boshqa hamyondan qiling." },
    { name: "Zaxira so‘zlari", text: "ularni qog‘ozga yozib, oflayn saqlang, skrinshot qilmang. Kalit kimda turishi haqida Gram hamyon zaxira so‘zlari maqolasida yozilgan." },
    { name: "Telegram himoyasi", text: "2FA parolini qo‘ying, «Qurilmalar» bo‘limida notanish seanslarni yoping." },
    { name: "Sovg‘a ma’lumotlari", text: "nomi, raqami, modeli va fonini yozib oling." },
    { name: "O‘tkazish", text: "sovg‘ani ilovadagi o‘tkazish menyusi orqali chiqaring. Aniq menyu yo‘li va narxini bu maqolada tasdiqlay olmadik, shuning uchun ilova ko‘rsatgan shartlarni tasdiqlashdan oldin diqqat bilan o‘qing. Jarayon NFT sovg‘ani blokcheynga o‘tkazish qo‘llanmasida yoritilgan." },
    { name: "Tekshiruv", text: "sovg‘a hamyonga tushganini eksplorerda ko‘ring va 4-qadamdagi yozuv bilan solishtiring." },
    { name: "Ulanishlar ro‘yxati", text: "hamyon ulangan saytlarni vaqti-vaqti bilan ko‘rib chiqing, keraksizlarini uzing." },
  ],
  locales: {
    uz: {
      title: "Spam NFT sovg‘alarimga xavflimi: hamyondagi gift, Stars va Premium",
      excerpt: "Yo‘q, spam NFT chiqarilgan sovg‘ani o‘zicha ko‘chirmaydi, Stars va Premium’ga esa umuman yetmaydi. Maqolada taqlid nusxani ajratish, xavfli bosishlar va hamyonni tayyorlash tartibi bor.",
      metaTitle: "Spam NFT sovg‘alarimga xavflimi",
      metaDescription: "Yo‘q, spam NFT chiqarilgan sovg‘ani o‘zicha ko‘chirmaydi, Stars va Premium’ga esa umuman yetmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Опасен ли спам-NFT для моих подарков: gift в кошельке, Stars и Premium",
      excerpt: "Нет: спам-NFT сам не переносит выведенный подарок, а до Stars и Premium вообще не дотягивается. Разбираем, как отличить подделку, какие нажатия опасны и как подготовить кошелёк.",
      metaTitle: "Опасен ли спам-NFT для моих подарков",
      metaDescription: "Нет: спам-NFT сам не переносит выведенный подарок, а до Stars и Premium вообще не дотягивается. Разбираем, как отличить подделку, какие нажатия опасны и как…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can a spam NFT put my Telegram gifts, Stars or Premium at risk?",
      excerpt: "No. A spam NFT can’t move a gift you withdrew to your wallet, and it never reaches Stars or Premium. This guide covers spotting fake copies, risky clicks and getting your wallet ready.",
      metaTitle: "Can a spam NFT put my Telegram gifts, Stars",
      metaDescription: "No. A spam NFT can’t move a gift you withdrew to your wallet, and it never reaches Stars or Premium.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
