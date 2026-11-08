import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "nft-sovga-tarixini-xariddan-oldin-tekshirish";

/**
 * NFT sovg‘a tarixini xariddan oldin qanday tekshirish mumkin?
 *
 * Avtoblogyoz yasagan maqola (2026-11-08): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Tayyor kolleksion NFT sovg'ani so'mda yoki shaxsiy sotuvchidan olmoqchi bo'lgan o'zbek foydalanuvchi Stars refund firibgarligi haqidagi xabardan keyin sovg'aning kelib chiqishi va o'tkazmalar tarixini qanday tekshirishni, keyin sovg'a bloklanib qolmasligi uchun «nft sovga tarixini tekshirish» kabi so'zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-08):
 *   https://telegram.org/tos/stars
 *   https://core.telegram.org/bots/payments-stars
 *   https://core.telegram.org/bots/api
 *   https://telegram.org/tos/bot-developers
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://core.telegram.org/api/gifts
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, lekin qisman. Kolleksion sovg‘aning barcha oldingi egalarini har doim ham ko‘rib bo‘lmaydi. Xariddan oldin esa uch narsani aniqlash mumkin: t.me/nft havolasi haqiqiy sovg‘aga olib boradimi, sovg‘a hozir kimda turibdi va u TON hamyonda bo‘lsa, blokcheynda qanday iz qoldirgan. Qolgan xavfni sotuvchining xatti-harakati ko‘rsatadi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#tarixni-tekshirish-nima-uchun-kerak", label: "Tarixni tekshirish nima uchun kerak bo‘lib qoldi?" },
          { href: "#sotuvchi-bergan-havola-haqiqiy-sovgaga", label: "Sotuvchi bergan havola haqiqiy sovg‘aga olib boradimi?" },
          { href: "#sovga-hozir-kimda-akkauntdami-yoki", label: "Sovg‘a hozir kimda: akkauntdami yoki TON hamyondami?" },
          { href: "#xariddan-oldin-qanday-tartibda-tekshirasiz", label: "Xariddan oldin qanday tartibda tekshirasiz?" },
          { href: "#qaysi-belgilar-kelib-chiqish-shubhali", label: "Qaysi belgilar kelib chiqish shubhali ekanini ko‘rsatadi?" },
          { href: "#sovga-keyin-muammoga-uchrasa-kim", label: "Sovg‘a keyin muammoga uchrasa, kim javob beradi?" },
          { href: "#shaxsiy-sotuvchi-ton-bozori-yoki", label: "Shaxsiy sotuvchi, TON bozori yoki bot: qayerdan olish xavfsizroq?" },
          { href: "#starspaymeeda-tayyor-nft-sovgani-somda", label: "StarsPaymee’da tayyor NFT sovg‘ani so‘mda qanday olasiz?" },
          { href: "#sovgani-olgach-uni-qanday-himoya", label: "Sovg‘ani olgach, uni qanday himoya qilasiz?" },
        ]}
      />
      <h2 id="tarixni-tekshirish-nima-uchun-kerak">Tarixni tekshirish nima uchun kerak bo‘lib qoldi?</h2>
      <p>Yaqinda Telegram kanallarida katta Stars refund firibgarligi haqida post tarqaldi. Unda Stars to‘lovlari qaytarilgani, shu Stars bilan qimmat kolleksion sovg‘alar olingani va keyin ularni o‘tkazish bloklangani haqida gap boradi.</p>
      <p>Bu post rasmiy manba emas. Telegram’ning bu hodisa haqidagi bayonoti topilmadi. Summa, sxema qanday ishlagani va qaysi sovg‘alar bloklangani bu maqolada tasdiqlanmagan.</p>
      <p>Rasmiy hujjatlarda esa bir necha narsa aniq yozilgan:</p>
      <ul>
        <li><a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars shartlariga</a> ko‘ra, ilova ichidagi xaridlar qaytarilganda yoki qoidalar buzilganda Telegram shaxsiy balansdagi Stars’ni vaqtincha ushlab turishi yoki butunlay yechib olishi mumkin.</li>
        <li>Yechilgan Stars uchun ham, shu sabab yo‘qolgan raqamli tovar, xizmat va obunalar uchun ham kompensatsiya berilmaydi.</li>
        <li><a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjatiga</a> ko‘ra, xaridor Stars’ni olgan to‘lov provayderi (masalan, Apple yoki Google) orqali chargeback boshlasa, qaytarilgan Stars bot balansidan yechiladi.</li>
      </ul>
      <p>Oddiy xaridor qo‘lidagi kolleksion sovg‘a avtomatik bloklanadi degan aniq qoida topilmadi. Shuning uchun tekshiruvni kafolat deb emas, ehtiyot chorasi deb qabul qiling. Maqsad — kelib chiqishi noaniq nusxaga pul bermaslik.</p>
      <h2 id="sotuvchi-bergan-havola-haqiqiy-sovgaga">Sotuvchi bergan havola haqiqiy sovg‘aga olib boradimi?</h2>
      <p>Telegram’ning <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">rasmiy blogida</a> yozilishicha, har bir kolleksion sovg‘aning t.me/nft ko‘rinishidagi noyob havolasi bor. Tekshiruv shu havoladan boshlanadi.</p>
      <ul>
        <li><b>Skrinshot emas, havola so‘rang.</b> Rasmni tahrirlash oson, havola esa aniq bir nusxani ochadi.</li>
        <li><b>Havolani Telegram ichida oching.</b> Nom, nusxa raqami, model, fon va belgi e’londagi tavsif bilan bir xil bo‘lishi kerak. Bitta atribut farq qilsa ham, bu boshqa nusxa.</li>
        <li><b>Domenni harfma-harf o‘qing.</b> t.me o‘rniga o‘xshash domen yoki sizni noma’lum mini app’ga olib boradigan havola uchrashi mumkin. Bu haqda <Link href="/blog/telegram-gift-havolasini-tekshirish">gift havolasini tekshirish</Link> maqolasida ham yozilgan.</li>
        <li><b>Raqam va tirajni tushunib oling.</b> «X/Y» yozuvi nimani bildirishi <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">sovg‘a tiraji</Link> haqidagi maqolada tushuntirilgan.</li>
      </ul>
      <p>Havola ochilsa, bu faqat sovg‘a mavjudligini ko‘rsatadi. U sovg‘a «toza» ekanini yoki aynan shu sotuvchiga tegishli ekanini isbotlamaydi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="sovga-hozir-kimda-akkauntdami-yoki">Sovg‘a hozir kimda: akkauntdami yoki TON hamyondami?</h2>
      <p>Kolleksion sovg‘a ikki joyda turishi mumkin: Telegram akkauntida yoki blokcheynga chiqarilgan holda TON hamyonda. <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram API hujjatiga</a> ko‘ra, TON’dagi sovg‘ada egalik starGiftUnique.owner_address maydonida ko‘rsatilgan hamyonda qoladi. Demak, egasining manzilini ochiq blokcheyn ma’lumotlari orqali ko‘rish mumkin.</p>
      <CompareTable
        headers={["Savol", "Akkauntdagi sovg‘a", "TON hamyondagi sovg‘a"]}
        rows={[
          ["Egalik qayerda qayd etiladi", "Telegram akkauntida", "Hamyon manzilida"],
          ["Nimani tekshirsa bo‘ladi", "Havola, atributlar, sotuvchi profili", "Havola, atributlar, hamyon manzili va undagi yozuvlar"],
          ["Tarix qanchalik ko‘rinadi", "Ilova ko‘rsatgan darajada", "Hamyon tranzaksiyalari eksplorerda ochiq"],
          ["Sotuvchidan nima so‘raladi", "t.me/nft havola va sovg‘a profilda ko‘rinishi", "Havola va hamyon manzili"],
          ["Akkauntga kirish yo‘qolsa", "Sovg‘a taqdiri akkauntga kirish tiklanishiga bog‘liq", "Telegram ma’lumotiga ko‘ra, nazorat hamyon egasida qoladi"],
        ]}
      />
      <p>Telegram blokcheynga o‘tkazish egasiga akkauntiga kirolmay qolsa yoki uni o‘chirsa ham doimiy nazorat berishini aytadi. Lekin bu sovg‘aning qanday olinganini o‘zgartirmaydi: hamyondagi nusxa ham shubhali Stars bilan sotib olingan bo‘lishi mumkin.</p>
      <h2 id="xariddan-oldin-qanday-tartibda-tekshirasiz">Xariddan oldin qanday tartibda tekshirasiz?</h2>
      <Steps>
        <Step title={"Havolani oling"}>sotuvchidan t.me/nft havolasini so‘rang va Telegram ichida oching.</Step>
        <Step title={"Atributlarni solishtiring"}>model, fon, belgi va raqam e’londagi bilan mos kelishini tekshiring.</Step>
        <Step title={"Egasini aniqlang"}>sovg‘a sotuvchi profilida ko‘rinadimi yoki TON hamyonda turibdimi.</Step>
        <Step title={"Hamyon izini ko‘ring"}>sovg‘a TON’da bo‘lsa, manzilni eksplorerda ochib, kiruvchi va chiquvchi yozuvlarni qarang. Eksplorer bilan ishlash <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">Gram tushganini tekshirish</Link> maqolasida qadamma-qadam ko‘rsatilgan.</Step>
        <Step title={"Sotuvchini tekshiring"}>akkaunt qachondan beri faol, oldingi e’lonlari bormi, narxni tushuntira oladimi, savollaringizga to‘g‘ridan-to‘g‘ri javob beradimi.</Step>
        <Step title={"Narxni bozor bilan solishtiring"}>xuddi shu atributli nusxalar qanchaga sotilayotganini qarang.</Step>
        <Step title={"Yetkazish tartibini oldindan kelishing"}>kim birinchi to‘laydi, sovg‘a qaysi yo‘l bilan yuboriladi, uchinchi shaxs ishtirok etadimi.</Step>
      </Steps>
      <p>Birinchi misol: sizga havola yuborishdi, u ochildi va atributlar mos. Lekin sovg‘a sotuvchining profilida yo‘q, hamyon manzilini ham bermayapti. Bunday holda «egasi kim?» degan savol javobsiz qoladi va to‘lovni to‘xtatish oqilona.</p>
      <p>Ikkinchi misol: sotuvchi sovg‘a TON hamyonida ekanini aytdi va manzilni berdi. Eksplorerda ko‘rinishicha, nusxa shu manzilga bir necha kun oldin tushgan va o‘sha kuni boshqa manzillarga ham shunga o‘xshash yozuvlar ketgan. Bu o‘z-o‘zidan firibgarlik belgisi emas, lekin sotuvchidan sovg‘a qayerdan kelganini so‘rash uchun asos. Aniq javob bo‘lmasa, kutib turgan ma’qul.</p>
      <h2 id="qaysi-belgilar-kelib-chiqish-shubhali">Qaysi belgilar kelib chiqish shubhali ekanini ko‘rsatadi?</h2>
      <ul>
        <li>Narx bozordan keskin past va «bugun olmasangiz, boshqaga sotaman» deb shoshiltirishadi.</li>
        <li>Havola o‘rniga faqat skrinshot yuboriladi yoki to‘lov sotuvchining o‘z mini app’i orqali so‘raladi.</li>
        <li>Sovg‘a yaqinda olingan va darhol qayta sotilyapti, sotuvchi esa buni tushuntira olmaydi.</li>
        <li>Sovg‘a bilan birga «arzon Stars» taklif qilinadi. Stars shartlariga ko‘ra, shaxsiy balansdagi Stars’ni shartlarda ko‘rsatilmagan maqsadda sotish, o‘tkazish yoki yechib olish mumkin emas.</li>
        <li>Sizdan SMS kod, 2FA paroli yoki akkauntga kirish so‘raladi. Haqiqiy sovg‘a sotuvi uchun bular kerak emas.</li>
      </ul>
      <p>Bittadan ortiq belgi ko‘rinsa, xariddan voz kechgan ma’qul.</p>
      <h2 id="sovga-keyin-muammoga-uchrasa-kim">Sovg‘a keyin muammoga uchrasa, kim javob beradi?</h2>
      <p>Javob sovg‘ani qayerdan va qanday to‘lov bilan olganingizga bog‘liq.</p>
      <Notice label={"Muhim"}>Stars shartlariga ko‘ra, Stars xaridlari yakuniy hisoblanadi va Telegram keraksiz yoki tasodifiy xarid uchun pul qaytarmaydi.</Notice>
      <p>Telegram o‘zi pul qaytarmasa ham, bot orqali qilingan xaridda boshqa yo‘l bor. Agar Stars bilan bot yoki mini app’dan nimadir olgan bo‘lsangiz va xarid va’da qilinganidek, kelishilgan muddatda yetkazilmasa, dasturchi Stars’ni jarimasiz qaytarishi mumkin. Buning uchun botga /paysupport yuboriladi. Dasturchi asosli qaytarishdan bosh tortsa, Settings &gt; Your Stars bo‘limidan tranzaksiya ID’sini olib, shikoyat qilish mumkin. To‘liq tartib — <Link href="/blog/telegram-stars-qaytarib-olish">Stars’ni qaytarib olish</Link> maqolasida.</p>
      <p>Shaxsiy sotuvchi bilan karta yoki naqd orqali tuzilgan kelishuv boshqa holat. Yuqoridagi tartib bot va mini app xaridlari uchun yozilgan, shaxsiy bitimga qo‘llanishi tasdiqlanmagan. Amalda bunday kelishuvda pulingiz sotuvchining insofiga bog‘liq bo‘lib qoladi.</p>
      <p>Yana bir jihat: Telegram akkaunti bekor qilinsa, undagi Stars balansi butunlay yo‘qotilgan hisoblanadi va kompensatsiya berilmaydi. Akkauntini xavf ostiga qo‘ygan sotuvchi bilan ishlash sizni ham xavfga tortadi.</p>
      <h2 id="shaxsiy-sotuvchi-ton-bozori-yoki">Shaxsiy sotuvchi, TON bozori yoki bot: qayerdan olish xavfsizroq?</h2>
      <CompareTable
        headers={["Mezon", "Shaxsiy sotuvchi", "TON bozorlari", "StarsPaymee NFT Market"]}
        rows={[
          ["To‘lov", "Kelishuvga qarab: karta, Stars yoki kripto", "Platforma shartlariga qarab, ko‘pincha hamyon orqali", "So‘mda: Click, Payme, Uzum, Paynet, UzCard/HUMO yoki bot balansi"],
          ["Hamyon kerakmi", "Ba’zan", "Shartlarni platformaning o‘zida tekshiring", "Yo‘q"],
          ["Nimani tekshirasiz", "Faqat sotuvchi bergan havola", "Sovg‘a TON’da bo‘lsa, hamyon izi", "Sovg‘a ma’lumotlari botda, havolani alohida ochish mumkin"],
          ["Muammo bo‘lsa", "Sotuvchining insofiga bog‘liq", "Platforma qoidalariga ko‘ra", "@StarsPaymeeSupport orqali"],
          ["Siz beradigan ma’lumot", "Ko‘pincha ortiqcha narsa so‘raladi", "Hamyonni ulash", "Faqat @username"],
        ]}
      />
      <p>Bot orqali savdoning yana bir farqi bor. <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Bot dasturchilari shartlariga</a> ko‘ra, to‘lov bo‘yicha nizo xaridor foydasiga hal bo‘lsa, qaytariladigan mablag‘ sotuvchi dasturchi balansidan yechiladi. Foydalanuvchi refundlari yoki Bot Platformasini suiiste’mol qilish shubhasi bo‘lsa, Telegram dasturchi balansidagi Stars’ni ushlab turishi ham mumkin. Ya’ni bot savdosida javobgarlik aniq tomonga yuklanadi. Shaxsiy bitimda esa bunday mexanizm yo‘q.</p>
      <h2 id="starspaymeeda-tayyor-nft-sovgani-somda">StarsPaymee’da tayyor NFT sovg‘ani so‘mda qanday olasiz?</h2>
      <p>StarsPaymee — mustaqil xizmat, Telegram bilan rasmiy aloqasini da’vo qilmaydi. Tayyor kolleksion sovg‘alar @StarsPaymee_bot’dagi NFT Market bo‘limida sotiladi.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>’ga kirib, NFT Market bo‘limini tanlang.</Step>
        <Step title={"Sovg‘ani tanlang"}>model, fon va belgini ko‘ring. Narx so‘mda, to‘lovdan oldin ko‘rsatiladi.</Step>
        <Step title={"Havolani alohida tekshiring"}>sovg‘aning t.me/nft sahifasini oching va atributlarni solishtiring.</Step>
        <Step title={"Username’ni kiriting"}>faqat @username kerak, parol va SMS kod so‘ralmaydi.</Step>
        <Step title={"To‘lang"}>Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansidan. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</Step>
        <Step title={"Qabul qilinganini tekshiring"}>buyurtma odatda bir necha soniyada yetadi. Sovg‘ani profilingizdagi Gifts bo‘limida ko‘rasiz.</Step>
      </Steps>
      <p>Ikkita cheklovni oldindan biling. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi, shuning uchun tayyor kolleksion nusxalar NFT Market’da beriladi. StarsPaymee sovg‘alarni foydalanuvchidan sotib olmaydi, ya’ni keyin qayta sotish uchun boshqa yo‘l kerak bo‘ladi.</p>
      <p>Bo‘lim haqida batafsil — <Link href="/blog/starspaymee-nft-market">NFT Market</Link> maqolasida, sovg‘a turlari esa <Link href="/gifts">/gifts</Link> sahifasida.</p>
      <h2 id="sovgani-olgach-uni-qanday-himoya">Sovg‘ani olgach, uni qanday himoya qilasiz?</h2>
      <ul>
        <li><b>2FA parolini yoqing.</b> Kodni va parolni hech kimga aytmang, «sovg‘ani tasdiqlash uchun» so‘rashsa ham.</li>
        <li><b>Uzoq saqlash rejasi bo‘lsa, blokcheynni ko‘rib chiqing.</b> Yo‘l: My Profile &gt; Gifts &gt; sovg‘ani tanlang &gt; Transfer &gt; Send via Blockchain. Bu sizga hamyon orqali nazorat beradi, lekin sovg‘aning oldingi tarixini o‘zgartirmaydi. Tayyorgarlik va cheklovlar — <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">blokcheynga o‘tkazish</Link> maqolasida.</li>
        <li><b>Dalillarni saqlang.</b> t.me/nft havola, sotuvchi bilan yozishma, to‘lov cheki va buyurtma ID’si nizoda kerak bo‘ladi.</li>
        <li><b>Profilni vaqti-vaqti bilan tekshiring.</b> Sovg‘a joyida turganini va o‘tkazish tugmasi ishlashini ko‘rib turing. G‘alati holat bo‘lsa, sotuvchiga yoki xarid qilgan xizmatning yordam bo‘limiga darhol yozing.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Telegram ilovasida NFT sovg‘aning oldingi egalari ro‘yxati chiqadimi?", answer: "Ilova barcha oldingi egalarni ko‘rsatishi bu maqolada tasdiqlanmagan. Ishonchli tekshiriladigan narsalar — t.me/nft havolasi, sovg‘aning hozirgi holati va u TON’da bo‘lsa, hamyon yozuvlari." },
  { question: "t.me/nft havolasi ochilmasa, bu sovg‘a soxta deganimi?", answer: "Har doim ham emas: havolada xato harf yoki internet muammosi bo‘lishi mumkin. Ammo sotuvchi ishlaydigan havolani bera olmasa, to‘lov qilmang." },
  { question: "Sovg‘a TON hamyonda tursa, uning yo‘lini qayerdan kuzataman?", answer: "Egasining hamyon manzilini TON eksplorerlaridan birida ochib, kiruvchi va chiquvchi yozuvlarni ko‘rasiz. Manzilni sotuvchidan so‘rang — bermasa, bu ogohlantiruvchi belgi." },
  { question: "Qaytarilgan Stars bilan olingan nusxani sotib olsam, u keyin mendan ketadimi?", answer: "Oddiy xaridordagi sovg‘a avtomatik bloklanishi haqida aniq rasmiy qoida topilmadi. Aynan shu noaniqlik sababli kelib chiqishi tushunarsiz nusxadan voz kechgan ma’qul." },
  { question: "Mashhur kolleksiyadagi nusxani bozordagidan ancha arzonga berishyapti — olsam bo‘ladimi?", answer: "Keskin arzonlikning odatda sababi bo‘ladi: soxta havola, aldov yoki muammoli kelib chiqish. Atributlari bir xil nusxalar narxini solishtirmasdan pul o‘tkazmang." },
  { question: "Sotuvchi kafil (garant) orqali savdo qilishni taklif qildi — bu ishonchlimi?", answer: "Kafil Telegram mexanizmi emas, u ham uchinchi shaxs. Kafil akkauntining o‘zi ham soxta bo‘lishi mumkin, shuning uchun uni alohida tekshirib chiqing." },
  { question: "Shaxsiy sotuvchiga kartadan to‘ladim, sovg‘a kelmadi — /paysupport ishlaydimi?", answer: "/paysupport va Stars shikoyati bot va mini app xaridlari uchun mo‘ljallangan, shaxsiy karta o‘tkazmasiga qo‘llanishi tasdiqlanmagan. Yozishma va chekni saqlab, bankingizga murojaat qiling." },
  { question: "StarsPaymee NFT Market’da narx qayerda chiqadi va qanday to‘lanadi?", answer: "Narx so‘mda, @StarsPaymee_bot’dagi NFT Market bo‘limida to‘lovdan oldin ko‘rinadi. Click, Payme, Uzum, Paynet, UzCard/HUMO o‘tkazmasi yoki bot balansi bilan to‘lash mumkin." },
  { question: "Olgan NFT sovg‘amni keyin StarsPaymee’ga qayta sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan sovg‘a va Stars sotib olmaydi. Qayta sotish niyatingiz bo‘lsa, boshqa yo‘lni oldindan o‘ylab qo‘ying." },
  { question: "Hamyonga chiqarilgan sovg‘aning kelib chiqishi «tozalanib» qoladimi?", answer: "Yo‘q. Telegram hamyondagi sovg‘a ustidan nazorat egada qolishini aytadi, lekin bu sovg‘a qanday yo‘l bilan olinganini o‘zgartirmaydi va shubhali nusxani himoya qilishi rasman tasdiqlanmagan." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, но только частично. Всех прежних владельцев коллекционного подарка увидеть получается не всегда. Перед покупкой можно выяснить три вещи. Ведёт ли ссылка t.me/nft на настоящий подарок? У кого он сейчас? Если он в TON-кошельке, какой след остался в блокчейне? Об остальных рисках говорит поведение продавца.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#tarixni-tekshirish-nima-uchun-kerak", label: "Зачем вообще проверять историю подарка?" },
          { href: "#sotuvchi-bergan-havola-haqiqiy-sovgaga", label: "Ведёт ли ссылка продавца на настоящий подарок?" },
          { href: "#sovga-hozir-kimda-akkauntdami-yoki", label: "Где подарок сейчас: на аккаунте или в TON-кошельке?" },
          { href: "#xariddan-oldin-qanday-tartibda-tekshirasiz", label: "В каком порядке проверять перед покупкой?" },
          { href: "#qaysi-belgilar-kelib-chiqish-shubhali", label: "Какие признаки говорят о сомнительном происхождении?" },
          { href: "#sovga-keyin-muammoga-uchrasa-kim", label: "Кто отвечает, если с подарком потом возникнут проблемы?" },
          { href: "#shaxsiy-sotuvchi-ton-bozori-yoki", label: "Частный продавец, TON-маркетплейс или бот: где покупать безопаснее?" },
          { href: "#starspaymeeda-tayyor-nft-sovgani-somda", label: "Как купить готовый NFT-подарок за сумы в StarsPaymee?" },
          { href: "#sovgani-olgach-uni-qanday-himoya", label: "Как защитить подарок после покупки?" },
        ]}
      />
      <h2 id="tarixni-tekshirish-nima-uchun-kerak">Зачем вообще проверять историю подарка?</h2>
      <p>Недавно по Telegram-каналам разошёлся пост о крупной схеме с возвратом Stars. Сюжет такой: платежи в Stars отменяли, на эти Stars покупали дорогие коллекционные подарки, а потом передачу этих подарков заблокировали.</p>
      <p>Этот пост — не официальный источник. Заявления Telegram об этом случае найти не удалось. Сумма, механика схемы и список заблокированных подарков в этой статье не подтверждены.</p>
      <p>В официальных документах прямо написано следующее:</p>
      <ul>
        <li>По <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">условиям Telegram Stars</a> Telegram может временно удержать или полностью списать Stars с личного баланса. Так бывает при возврате встроенных покупок или нарушении правил.</li>
        <li>Компенсации нет ни за списанные Stars, ни за цифровые товары, услуги и подписки, потерянные из-за списания.</li>
        <li>По <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документации Bot API</a> покупатель может оформить chargeback у платёжного провайдера, через которого покупал Stars (например, Apple или Google). Тогда возвращённые Stars списываются с баланса бота.</li>
      </ul>
      <p>Чёткого правила, что подарок у обычного покупателя блокируется автоматически, найти не удалось. Поэтому относитесь к проверке как к мере предосторожности, а не как к гарантии. Её цель — не платить за экземпляр с непонятным происхождением.</p>
      <h2 id="sotuvchi-bergan-havola-haqiqiy-sovgaga">Ведёт ли ссылка продавца на настоящий подарок?</h2>
      <p>В <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">официальном блоге Telegram</a> сказано, что у каждого коллекционного подарка есть уникальная ссылка вида t.me/nft. С неё проверка и начинается.</p>
      <ul>
        <li><b>Просите ссылку, а не скриншот.</b> Картинку легко отредактировать. Ссылка же открывает конкретный экземпляр.</li>
        <li><b>Открывайте ссылку внутри Telegram.</b> Название, номер экземпляра, модель, фон и символ должны совпадать с описанием в объявлении. Если отличается хотя бы один атрибут, перед вами другой экземпляр.</li>
        <li><b>Читайте домен по буквам.</b> Вместо t.me может стоять похожий домен или ссылка на неизвестное мини-приложение. Подробнее — в статье о <Link href="/blog/telegram-gift-havolasini-tekshirish">проверке ссылки на подарок</Link>.</li>
        <li><b>Разберитесь с номером и тиражом.</b> Что значит запись «X/Y», объяснено в материале о <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">тираже подарков</Link>.</li>
      </ul>
      <p>Если ссылка открылась, это доказывает только то, что подарок существует. «Чистое» ли у него происхождение и принадлежит ли он именно этому продавцу, ссылка не показывает.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="sovga-hozir-kimda-akkauntdami-yoki">Где подарок сейчас: на аккаунте или в TON-кошельке?</h2>
      <p>Коллекционный подарок хранится в одном из двух мест. Либо на Telegram-аккаунте, либо в TON-кошельке после вывода в блокчейн. По <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации Telegram API</a> у подарка в TON владельцем считается кошелёк из поля starGiftUnique.owner_address. Значит, адрес владельца виден в открытых данных блокчейна.</p>
      <CompareTable
        headers={["Вопрос", "Подарок на аккаунте", "Подарок в TON-кошельке"]}
        rows={[
          ["Где фиксируется владение", "На Telegram-аккаунте", "На адресе кошелька"],
          ["Что можно проверить", "Ссылку, атрибуты, профиль продавца", "Ссылку, атрибуты, адрес кошелька и записи в нём"],
          ["Насколько видна история", "Настолько, насколько показывает приложение", "Транзакции кошелька открыты в эксплорере"],
          ["Что просить у продавца", "Ссылку t.me/nft и подарок, видимый в профиле", "Ссылку и адрес кошелька"],
          ["Если доступ к аккаунту потерян", "Судьба подарка зависит от восстановления доступа", "По данным Telegram, контроль остаётся у владельца кошелька"],
        ]}
      />
      <p>Telegram пишет, что вывод в блокчейн даёт владельцу постоянный контроль, даже если он потеряет доступ к аккаунту или удалит его. Но то, как подарок был получен, от этого не меняется. Экземпляр в кошельке тоже мог быть куплен на сомнительные Stars.</p>
      <h2 id="xariddan-oldin-qanday-tartibda-tekshirasiz">В каком порядке проверять перед покупкой?</h2>
      <Steps>
        <Step title={"Получите ссылку"}>попросите у продавца ссылку t.me/nft и откройте её в Telegram.</Step>
        <Step title={"Сверьте атрибуты"}>модель, фон, символ и номер должны совпадать с объявлением.</Step>
        <Step title={"Выясните, у кого подарок"}>виден ли он в профиле продавца или лежит в TON-кошельке.</Step>
        <Step title={"Посмотрите след кошелька"}>если подарок в TON, откройте адрес в эксплорере и изучите входящие и исходящие записи. Как работать с эксплорером, пошагово показано в статье о <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">проверке зачисления Gram</Link>.</Step>
        <Step title={"Проверьте продавца"}>давно ли активен аккаунт, были ли прошлые объявления, может ли он объяснить цену, прямо ли отвечает на вопросы.</Step>
        <Step title={"Сравните цену с рынком"}>посмотрите, за сколько продаются экземпляры с такими же атрибутами.</Step>
        <Step title={"Заранее договоритесь о передаче"}>кто платит первым, каким способом отправляется подарок, участвует ли третье лицо.</Step>
      </Steps>
      <p>Пример первый. Вам прислали ссылку, она открылась, атрибуты совпадают. Но в профиле продавца подарка нет, а адрес кошелька он не даёт. Вопрос «кто владелец?» остаётся без ответа, и разумно платёж остановить.</p>
      <p>Пример второй. Продавец говорит, что подарок в TON-кошельке, и даёт адрес. В эксплорере видно: экземпляр пришёл на этот адрес несколько дней назад. В тот же день похожие записи ушли и на другие адреса. Само по себе это не признак мошенничества. Но это повод спросить продавца, откуда подарок. Если внятного ответа нет, лучше подождать.</p>
      <h2 id="qaysi-belgilar-kelib-chiqish-shubhali">Какие признаки говорят о сомнительном происхождении?</h2>
      <ul>
        <li>Цена резко ниже рынка, и вас торопят: «не возьмёте сегодня — продам другому».</li>
        <li>Вместо ссылки присылают только скриншот или просят оплатить через собственное мини-приложение продавца.</li>
        <li>Подарок куплен недавно и сразу перепродаётся, а продавец не может это объяснить.</li>
        <li>Вместе с подарком предлагают «дешёвые Stars». По условиям Stars, Stars с личного баланса нельзя продавать, передавать или выводить в целях, которых нет в условиях.</li>
        <li>У вас просят SMS-код, пароль 2FA или доступ к аккаунту. Для настоящей продажи подарка всё это не нужно.</li>
      </ul>
      <p>Если признаков больше одного, от покупки лучше отказаться.</p>
      <h2 id="sovga-keyin-muammoga-uchrasa-kim">Кто отвечает, если с подарком потом возникнут проблемы?</h2>
      <p>Это зависит от того, где и каким способом вы платили.</p>
      <Notice label={"Важно"}>По условиям Stars все покупки Stars окончательны, и Telegram не возвращает деньги за ненужные или случайные покупки.</Notice>
      <p>Сам Telegram денег не возвращает, но при покупке через бота есть другой путь. Допустим, вы купили что-то за Stars в боте или мини-приложении, а покупку не доставили так, как было обещано, и в согласованный срок. Тогда разработчик может вернуть Stars без штрафа. Для этого боту отправляют команду /paysupport. Если разработчик отказывается от обоснованного возврата, возьмите ID транзакции в разделе Settings &gt; Your Stars и подайте жалобу. Полный порядок описан в статье о <Link href="/blog/telegram-stars-qaytarib-olish">возврате Stars</Link>.</p>
      <p>Сделка с частным продавцом по карте или за наличные — другая ситуация. Порядок выше написан для покупок в ботах и мини-приложениях, а для частных сделок он не подтверждён. На практике ваши деньги в такой сделке зависят от честности продавца.</p>
      <p>Ещё один момент. Если Telegram-аккаунт заблокируют, баланс Stars на нём считается безвозвратно утраченным, компенсации нет. Работать с продавцом, который рискует своим аккаунтом, значит рисковать и самому.</p>
      <h2 id="shaxsiy-sotuvchi-ton-bozori-yoki">Частный продавец, TON-маркетплейс или бот: где покупать безопаснее?</h2>
      <CompareTable
        headers={["Критерий", "Частный продавец", "TON-маркетплейсы", "StarsPaymee NFT Market"]}
        rows={[
          ["Оплата", "По договорённости: карта, Stars или крипта", "По правилам площадки, чаще через кошелёк", "В сумах: Click, Payme, Uzum, Paynet, UzCard/HUMO или баланс бота"],
          ["Нужен ли кошелёк", "Иногда", "Уточняйте условия на самой площадке", "Нет"],
          ["Что можно проверить", "Только ссылку от продавца", "След кошелька, если подарок в TON", "Данные подарка в боте, ссылку можно открыть отдельно"],
          ["Если возникла проблема", "Зависит от честности продавца", "По правилам площадки", "Через @StarsPaymeeSupport"],
          ["Какие данные вы отдаёте", "Часто просят лишнее", "Подключение кошелька", "Только @username"],
        ]}
      />
      <p>У продажи через бота есть ещё одно отличие. По <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">условиям для разработчиков ботов</a>, если платёжный спор решён в пользу покупателя, возвращаемые средства списываются с баланса разработчика-продавца. При возвратах пользователям или подозрении на злоупотребление Bot Platform Telegram также может удержать Stars на балансе разработчика. То есть в продаже через бота ответственность лежит на понятной стороне. В частной сделке такого механизма нет.</p>
      <h2 id="starspaymeeda-tayyor-nft-sovgani-somda">Как купить готовый NFT-подарок за сумы в StarsPaymee?</h2>
      <p>StarsPaymee — независимый сервис и не заявляет об официальной связи с Telegram. Готовые коллекционные подарки продаются в разделе NFT Market в @StarsPaymee_bot.</p>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> и выберите раздел NFT Market.</Step>
        <Step title={"Выберите подарок"}>посмотрите модель, фон и символ. Цена в сумах показывается до оплаты.</Step>
        <Step title={"Проверьте ссылку отдельно"}>откройте страницу подарка t.me/nft и сверьте атрибуты.</Step>
        <Step title={"Введите username"}>нужен только @username, пароль и SMS-код не запрашиваются.</Step>
        <Step title={"Оплатите"}>через Click, Payme, Uzum, Paynet, переводом на карту UzCard/HUMO или с баланса бота. Международная карта, криптокошелёк или VPN не нужны.</Step>
        <Step title={"Проверьте получение"}>заказ обычно приходит за несколько секунд. Подарок появится в разделе Gifts вашего профиля.</Step>
      </Steps>
      <p>Заранее учтите два ограничения. Боты не могут отправлять лимитированные подарки, которые Telegram снял с продажи, поэтому готовые коллекционные экземпляры продаются через NFT Market. Кроме того, StarsPaymee не выкупает подарки у пользователей, так что для перепродажи понадобится другой способ.</p>
      <p>Подробнее о разделе — в статье про <Link href="/blog/starspaymee-nft-market">NFT Market</Link>, а виды подарков собраны на странице <Link href="/gifts">/gifts</Link>.</p>
      <h2 id="sovgani-olgach-uni-qanday-himoya">Как защитить подарок после покупки?</h2>
      <ul>
        <li><b>Включите пароль 2FA.</b> Никому не сообщайте коды и пароль, даже если их просят «для подтверждения подарка».</li>
        <li><b>Если планируете хранить долго, подумайте о блокчейне.</b> Путь: My Profile &gt; Gifts &gt; выберите подарок &gt; Transfer &gt; Send via Blockchain. Так вы получите контроль через кошелёк, но прошлую историю подарка это не изменит. Подготовка и ограничения — в статье о <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">выводе в блокчейн</Link>.</li>
        <li><b>Сохраняйте доказательства.</b> Ссылка t.me/nft, переписка с продавцом, чек об оплате и ID заказа пригодятся в споре.</li>
        <li><b>Время от времени проверяйте профиль.</b> Убедитесь, что подарок на месте и кнопка передачи работает. Если что-то не так, сразу пишите продавцу или в поддержку сервиса, где покупали.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Показывает ли приложение Telegram список прежних владельцев NFT-подарка?", answer: "То, что приложение показывает всех прежних владельцев, в этой статье не подтверждено. Надёжно проверить можно ссылку t.me/nft, текущее состояние подарка и, если он в TON, записи кошелька." },
  { question: "Ссылка t.me/nft не открывается — значит, подарок поддельный?", answer: "Не всегда: в ссылке может быть опечатка или сбой интернета. Но если продавец не может дать рабочую ссылку, не платите." },
  { question: "Подарок лежит в TON-кошельке — где отследить его путь?", answer: "Откройте адрес кошелька владельца в одном из TON-эксплореров и посмотрите входящие и исходящие записи. Адрес попросите у продавца. Если он отказывается его дать, это тревожный сигнал." },
  { question: "Если я куплю экземпляр, оплаченный возвращёнными Stars, его у меня потом заберут?", answer: "Чёткого официального правила об автоматической блокировке подарка у обычного покупателя найти не удалось. Именно из-за этой неопределённости от экземпляра с непонятным происхождением лучше отказаться." },
  { question: "Экземпляр из популярной коллекции отдают намного дешевле рынка — брать?", answer: "У резкой скидки обычно есть причина: поддельная ссылка, обман или проблемное происхождение. Не переводите деньги, пока не сравните цены экземпляров с такими же атрибутами." },
  { question: "Продавец предлагает сделку через гаранта — это надёжно?", answer: "Гарант — не механизм Telegram, а ещё одно третье лицо. Его аккаунт тоже может оказаться поддельным, поэтому проверяйте его отдельно." },
  { question: "Я заплатил частному продавцу с карты, а подарок не пришёл. Поможет /paysupport?", answer: "/paysupport и жалоба по Stars рассчитаны на покупки в ботах и мини-приложениях, для частного перевода с карты это не подтверждено. Сохраните переписку и чек и обратитесь в свой банк." },
  { question: "Где в StarsPaymee NFT Market видна цена и как платить?", answer: "Цена в сумах видна до оплаты в разделе NFT Market в @StarsPaymee_bot. Оплатить можно через Click, Payme, Uzum, Paynet, переводом на UzCard/HUMO или с баланса бота." },
  { question: "Можно ли потом продать купленный NFT-подарок обратно StarsPaymee?", answer: "Нет, StarsPaymee не покупает подарки и Stars у пользователей. Если собираетесь перепродавать, продумайте другой путь заранее." },
  { question: "Если вывести подарок в кошелёк, его происхождение «очистится»?", answer: "Нет. По словам Telegram, контроль над подарком в кошельке остаётся у владельца, но то, как подарок был получен, от этого не меняется. Официально не подтверждено, что вывод защищает сомнительный экземпляр." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, but only partly. You can’t always see every previous owner of a collectible gift. Before paying, though, you can confirm three things: whether the t.me/nft link opens a real gift, who holds it right now, and, if it sits in a TON wallet, what trail it left on the blockchain. The seller’s behaviour covers the rest.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#tarixni-tekshirish-nima-uchun-kerak", label: "Why has checking a gift’s history become important?" },
          { href: "#sotuvchi-bergan-havola-haqiqiy-sovgaga", label: "Does the seller’s link lead to a real gift?" },
          { href: "#sovga-hozir-kimda-akkauntdami-yoki", label: "Who holds the gift now: a Telegram account or a TON wallet?" },
          { href: "#xariddan-oldin-qanday-tartibda-tekshirasiz", label: "In what order should you check before buying?" },
          { href: "#qaysi-belgilar-kelib-chiqish-shubhali", label: "Which signs point to a questionable origin?" },
          { href: "#sovga-keyin-muammoga-uchrasa-kim", label: "If the gift runs into trouble later, who is responsible?" },
          { href: "#shaxsiy-sotuvchi-ton-bozori-yoki", label: "Private seller, TON marketplace or bot: where is buying safer?" },
          { href: "#starspaymeeda-tayyor-nft-sovgani-somda", label: "How do you buy a ready NFT gift in UZS on StarsPaymee?" },
          { href: "#sovgani-olgach-uni-qanday-himoya", label: "How do you protect the gift once you have it?" },
        ]}
      />
      <h2 id="tarixni-tekshirish-nima-uchun-kerak">Why has checking a gift’s history become important?</h2>
      <p>A post about a large Stars refund scam recently spread across Telegram channels. It claims that Stars payments were refunded, the same Stars were used to buy expensive collectible gifts, and transfers of those gifts were later blocked.</p>
      <p>That post is not an official source. No statement from Telegram about the incident was found. The amount involved, how the scheme worked and which gifts were blocked are not confirmed in this article.</p>
      <p>Official documents, however, state a few things clearly:</p>
      <ul>
        <li>Under the <a href={"https://telegram.org/tos/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars Terms of Service</a>, Telegram can temporarily withhold or permanently debit Stars from a personal balance when in-app purchases are refunded or the terms are violated.</li>
        <li>No compensation is given for debited Stars or for digital goods, services and subscriptions lost as a result.</li>
        <li>According to the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a>, if a buyer starts a chargeback with the payment provider they bought Stars from (for example, Apple or Google), the refunded Stars are deducted from the bot’s balance.</li>
      </ul>
      <p>No clear rule was found saying a collectible gift held by an ordinary buyer gets blocked automatically. So treat these checks as a precaution, not a guarantee. The goal is simple: don’t pay for a copy whose origin is unclear.</p>
      <h2 id="sotuvchi-bergan-havola-haqiqiy-sovgaga">Does the seller’s link lead to a real gift?</h2>
      <p>Telegram’s <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">official blog</a> says every collectible gift has a unique link in the t.me/nft format. That link is where your check begins.</p>
      <ul>
        <li><b>Ask for a link, not a screenshot.</b> Images are easy to edit; a link opens one specific copy.</li>
        <li><b>Open the link inside Telegram.</b> The name, copy number, model, backdrop and symbol must match the listing. If even one attribute differs, it’s a different copy.</li>
        <li><b>Read the domain letter by letter.</b> Instead of t.me you may see a lookalike domain or a link that pushes you into an unknown mini app. More on this in the guide to <Link href="/blog/telegram-gift-havolasini-tekshirish">checking gift links</Link>.</li>
        <li><b>Understand the number and supply.</b> What “X/Y” means is explained in the article on <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">gift supply</Link>.</li>
      </ul>
      <p>If the link opens, that only proves the gift exists. It doesn’t prove the gift is “clean” or that it belongs to this particular seller.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="sovga-hozir-kimda-akkauntdami-yoki">Who holds the gift now: a Telegram account or a TON wallet?</h2>
      <p>A collectible gift can live in one of two places: on a Telegram account, or exported to the blockchain and held in a TON wallet. According to the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">Telegram API documentation</a>, for a gift on TON, ownership stays with the wallet listed in the starGiftUnique.owner_address field. In other words, the owner’s address can be seen through public blockchain data.</p>
      <CompareTable
        headers={["Question", "Gift on an account", "Gift in a TON wallet"]}
        rows={[
          ["Where ownership is recorded", "On the Telegram account", "At the wallet address"],
          ["What you can check", "Link, attributes, seller’s profile", "Link, attributes, wallet address and its records"],
          ["How much history is visible", "As much as the app shows", "Wallet transactions are public in an explorer"],
          ["What to ask the seller for", "The t.me/nft link and the gift shown on their profile", "The link and the wallet address"],
          ["If account access is lost", "The gift’s fate depends on regaining access", "Per Telegram, control stays with the wallet owner"],
        ]}
      />
      <p>Telegram says moving a gift to the blockchain gives the owner permanent control, even if they lose access to or delete their account. But that doesn’t change how the gift was obtained: a copy in a wallet may also have been bought with questionable Stars.</p>
      <h2 id="xariddan-oldin-qanday-tartibda-tekshirasiz">In what order should you check before buying?</h2>
      <Steps>
        <Step title={"Get the link"}>ask the seller for the t.me/nft link and open it inside Telegram.</Step>
        <Step title={"Compare the attributes"}>make sure the model, backdrop, symbol and number match the listing.</Step>
        <Step title={"Identify the holder"}>is the gift visible on the seller’s profile, or is it in a TON wallet?</Step>
        <Step title={"Look at the wallet trail"}>if the gift is on TON, open the address in an explorer and review incoming and outgoing records. Using an explorer is shown step by step in <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">how to check that Gram arrived</Link>.</Step>
        <Step title={"Check the seller"}>how long has the account been active, are there earlier listings, can they explain the price, do they answer your questions directly?</Step>
        <Step title={"Compare with the market"}>see what copies with the same attributes are selling for.</Step>
        <Step title={"Agree on delivery in advance"}>who pays first, how the gift will be sent, and whether a third party is involved.</Step>
      </Steps>
      <p>Example one: you receive a link, it opens and the attributes match. But the gift isn’t on the seller’s profile and they won’t share a wallet address. Here the question “who actually owns it?” stays unanswered, and stopping the payment is the sensible move.</p>
      <p>Example two: the seller says the gift is in a TON wallet and shares the address. The explorer shows the copy landed there a few days ago, and similar records went out to other addresses the same day. That alone isn’t proof of fraud, but it’s a reason to ask where the gift came from. Without a clear answer, it’s better to wait.</p>
      <h2 id="qaysi-belgilar-kelib-chiqish-shubhali">Which signs point to a questionable origin?</h2>
      <ul>
        <li>The price is far below market and you’re rushed: “If you don’t buy today, I’ll sell it to someone else.”</li>
        <li>You get only a screenshot instead of a link, or payment is requested through the seller’s own mini app.</li>
        <li>The gift was acquired recently and is being resold right away, and the seller can’t explain why.</li>
        <li>“Cheap Stars” are offered along with the gift. Under the Stars terms, Stars in a personal balance may not be sold, transferred or withdrawn for any purpose not set out in the terms.</li>
        <li>You’re asked for an SMS code, your 2FA password or account access. None of these are needed for a genuine gift sale.</li>
      </ul>
      <p>If you see more than one of these signs, walk away from the deal.</p>
      <h2 id="sovga-keyin-muammoga-uchrasa-kim">If the gift runs into trouble later, who is responsible?</h2>
      <p>That depends on where you bought the gift and how you paid.</p>
      <Notice label={"Important"}>Under the Stars terms, Stars purchases are final and Telegram does not refund unwanted or unintentional purchases.</Notice>
      <p>Even though Telegram itself doesn’t refund, purchases made through bots have another route. If you bought something from a bot or mini app with Stars and it wasn’t delivered as advertised within the agreed timeframe, the developer can refund your Stars at no penalty. To start, send /paysupport to the bot. If the developer refuses a legitimate refund, you can take the transaction ID from Settings &gt; Your Stars and file a report. The full process is in <Link href="/blog/telegram-stars-qaytarib-olish">getting Stars refunded</Link>.</p>
      <p>A private deal with an individual seller paid by card or cash is a different situation. The procedure above is written for bot and mini app purchases; it isn’t confirmed to apply to private deals. In practice, your money in such a deal depends on the seller’s honesty.</p>
      <p>One more point: if a Telegram account is terminated, its Stars balance is considered permanently forfeit and no compensation is given. Dealing with a seller who puts their account at risk drags you into that risk too.</p>
      <h2 id="shaxsiy-sotuvchi-ton-bozori-yoki">Private seller, TON marketplace or bot: where is buying safer?</h2>
      <CompareTable
        headers={["Criterion", "Private seller", "TON marketplaces", "StarsPaymee NFT Market"]}
        rows={[
          ["Payment", "Depends on the deal: card, Stars or crypto", "Depends on the platform’s terms, often via a wallet", "In UZS: Click, Payme, Uzum, Paynet, UzCard/HUMO or bot balance"],
          ["Wallet needed?", "Sometimes", "Check the platform’s own terms", "No"],
          ["What you can verify", "Only the link the seller gives you", "The wallet trail, if the gift is on TON", "Gift details in the bot; the link can be opened separately"],
          ["If something goes wrong", "Depends on the seller’s honesty", "Per the platform’s rules", "Via @StarsPaymeeSupport"],
          ["What you hand over", "Often more than necessary", "Connecting your wallet", "Only your @username"],
        ]}
      />
      <p>Selling through a bot has one more difference. Under the <a href={"https://telegram.org/tos/bot-developers"} target="_blank" rel="noopener noreferrer">Bot Platform Developer Terms</a>, if a payment dispute ends with a refund to the buyer, the returned funds are deducted from the selling developer’s balance. Telegram may also withhold Stars in a developer’s balance in response to user refunds or suspected abuse of the Bot Platform. So in bot sales, responsibility falls on a clearly defined party. A private deal has no such mechanism.</p>
      <h2 id="starspaymeeda-tayyor-nft-sovgani-somda">How do you buy a ready NFT gift in UZS on StarsPaymee?</h2>
      <p>StarsPaymee is an independent service and does not claim any official affiliation with Telegram. Ready-made collectible gifts are sold in the NFT Market section of @StarsPaymee_bot.</p>
      <Steps>
        <Step title={"Open the bot"}>go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> and choose NFT Market.</Step>
        <Step title={"Pick a gift"}>review the model, backdrop and symbol. The price is shown in UZS before you pay.</Step>
        <Step title={"Check the link separately"}>open the gift’s t.me/nft page and compare the attributes.</Step>
        <Step title={"Enter the username"}>only an @username is needed; no password or SMS code is requested.</Step>
        <Step title={"Pay"}>via Click, Payme, Uzum, Paynet, a transfer to an UzCard/HUMO card or your bot balance. No international card, crypto wallet or VPN is required.</Step>
        <Step title={"Confirm it arrived"}>orders usually arrive within a few seconds. You’ll see the gift in the Gifts section of your profile.</Step>
      </Steps>
      <p>Know two limits up front. Bots can’t send limited gifts that Telegram has taken off sale, which is why ready collectible copies are offered in the NFT Market. StarsPaymee also doesn’t buy gifts from users, so you’ll need another route if you plan to resell later.</p>
      <p>More on this section in the <Link href="/blog/starspaymee-nft-market">NFT Market</Link> article; gift types are listed on the <Link href="/gifts">/gifts</Link> page.</p>
      <h2 id="sovgani-olgach-uni-qanday-himoya">How do you protect the gift once you have it?</h2>
      <ul>
        <li><b>Turn on a 2FA password.</b> Never share codes or passwords, even if someone says it’s “to confirm the gift.”</li>
        <li><b>If you plan to hold long term, consider the blockchain.</b> Path: My Profile &gt; Gifts &gt; select the gift &gt; Transfer &gt; Send via Blockchain. This gives you control through your wallet, but it doesn’t change the gift’s previous history. Preparation and limits are covered in <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">moving a gift to the blockchain</Link>.</li>
        <li><b>Keep evidence.</b> The t.me/nft link, your chat with the seller, the payment receipt and the order ID will all matter in a dispute.</li>
        <li><b>Check your profile now and then.</b> Make sure the gift is still there and the transfer button works. If anything looks odd, contact the seller or the support team of the service you bought from right away.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "Bot Payments API for Digital Goods and Services" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://telegram.org/tos/bot-developers", label: "Telegram Bot Platform Developer Terms of Service" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Does the Telegram app show a list of an NFT gift’s previous owners?", answer: "This article could not confirm that the app shows every previous owner. What you can reliably check is the t.me/nft link, the gift’s current status and, if it’s on TON, the wallet records." },
  { question: "If a t.me/nft link won’t open, does that mean the gift is fake?", answer: "Not always: there could be a typo in the link or a connection problem. But if the seller can’t give you a working link, don’t pay." },
  { question: "Where can I trace the path of a gift that sits in a TON wallet?", answer: "Open the owner’s wallet address in a TON explorer and review incoming and outgoing records. Ask the seller for the address; refusing to share it is a warning sign." },
  { question: "If I buy a copy that was paid for with refunded Stars, can it be taken from me later?", answer: "No clear official rule was found about gifts held by ordinary buyers being blocked automatically. That uncertainty is exactly why it’s wiser to skip copies with an unexplained origin." },
  { question: "A copy from a popular collection is listed well below market. Should I buy it?", answer: "A steep discount usually has a reason: a fake link, a scam or a problematic origin. Don’t send money before comparing prices of copies with the same attributes." },
  { question: "The seller suggested using an escrow middleman. Is that safe?", answer: "An escrow middleman is not a Telegram mechanism; it’s just another third party. The middleman’s account could be fake too, so verify it separately." },
  { question: "I paid a private seller by card and the gift never came. Will /paysupport help?", answer: "/paysupport and Stars reports are meant for bot and mini app purchases; they aren’t confirmed to cover private card transfers. Keep the chat and receipt and contact your bank." },
  { question: "Where do I see the price in the StarsPaymee NFT Market and how do I pay?", answer: "The price is shown in UZS in the NFT Market section of @StarsPaymee_bot before you pay. You can pay with Click, Payme, Uzum, Paynet, an UzCard/HUMO transfer or your bot balance." },
  { question: "Can I sell my NFT gift back to StarsPaymee later?", answer: "No, StarsPaymee does not buy gifts or Stars from users. If you plan to resell, think about another route in advance." },
  { question: "Does moving a gift to a wallet “clean” its origin?", answer: "No. Telegram says control of a wallet-held gift stays with its owner, but that doesn’t change how the gift was obtained, and there’s no official confirmation it protects a questionable copy." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["nft sovga tarixini tekshirish","telegram nft sovga tekshirish","kolleksion sovga egasini bilish","nft gift sotib olishdan oldin","t.me/nft havola tekshirish","telegram gift refund xavfi","nft sovga sotib olish som","проверить историю nft подарка telegram","как проверить nft подарок перед покупкой","владелец коллекционного подарка telegram","возврат stars подарок заблокирован","купить nft подарок telegram безопасно"],
  howToSteps: [
    { name: "Havolani oling", text: "sotuvchidan t.me/nft havolasini so‘rang va Telegram ichida oching." },
    { name: "Atributlarni solishtiring", text: "model, fon, belgi va raqam e’londagi bilan mos kelishini tekshiring." },
    { name: "Egasini aniqlang", text: "sovg‘a sotuvchi profilida ko‘rinadimi yoki TON hamyonda turibdimi." },
    { name: "Hamyon izini ko‘ring", text: "sovg‘a TON’da bo‘lsa, manzilni eksplorerda ochib, kiruvchi va chiquvchi yozuvlarni qarang. Eksplorer bilan ishlash Gram tushganini tekshirish maqolasida qadamma-qadam ko‘rsatilgan." },
    { name: "Sotuvchini tekshiring", text: "akkaunt qachondan beri faol, oldingi e’lonlari bormi, narxni tushuntira oladimi, savollaringizga to‘g‘ridan-to‘g‘ri javob beradimi." },
    { name: "Narxni bozor bilan solishtiring", text: "xuddi shu atributli nusxalar qanchaga sotilayotganini qarang." },
    { name: "Yetkazish tartibini oldindan kelishing", text: "kim birinchi to‘laydi, sovg‘a qaysi yo‘l bilan yuboriladi, uchinchi shaxs ishtirok etadimi." },
  ],
  locales: {
    uz: {
      title: "NFT sovg‘a tarixini xariddan oldin qanday tekshirish mumkin?",
      excerpt: "Ha, qisman: havola, hozirgi egasi va TON hamyondagi izini tekshirsa bo‘ladi, ammo barcha oldingi egalar doim ko‘rinmaydi. Maqolada 7 qadam, shubhali belgilar va so‘mda xarid tartibi bor.",
      metaTitle: "NFT sovg‘a tarixini xariddan oldin qanday tekshirish mumkin?",
      metaDescription: "Ha, qisman: havola, hozirgi egasi va TON hamyondagi izini tekshirsa bo‘ladi, ammo barcha oldingi egalar doim ko‘rinmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Как проверить историю NFT-подарка в Telegram перед покупкой",
      excerpt: "Частично: можно проверить ссылку, текущего владельца и след в TON-кошельке, но всех прежних владельцев видно не всегда. В статье — 7 шагов проверки, тревожные признаки и покупка за сумы.",
      metaTitle: "Как проверить историю NFT-подарка в Telegram перед покупкой",
      metaDescription: "Частично: можно проверить ссылку, текущего владельца и след в TON-кошельке, но всех прежних владельцев видно не всегда.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "How to check an NFT gift’s history before you buy it on Telegram",
      excerpt: "Partly: you can verify the t.me/nft link, the current owner and the gift’s trail in a TON wallet, but not every past owner is visible. Covers 7 checks, red flags and buying in UZS.",
      metaTitle: "How to check an NFT gift’s history before you buy it on",
      metaDescription: "Partly: you can verify the t.me/nft link, the current owner and the gift’s trail in a TON wallet, but not every past owner is visible.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
