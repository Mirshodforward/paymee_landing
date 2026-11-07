import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "gram-hamyon-kartasi-nft-sovga-dizayn";

/**
 * Gram hamyon kartasini bezash: NFT sovg‘ani hozir hamyonga chiqarish kerakmi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-07): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kolleksion NFT sovg‘asi bor yoki uni so‘mda olmoqchi bo‘lgan foydalanuvchi kanalda Gram hamyon kartasini sovg‘a bilan bezash konseptini ko‘rib, «gram hamyon kartasini bezash» deb qidiradi. U sovg‘asi hamyon kartasida ko‘rinishi uchun uni hozir hamyonga chiqarishi yoki boshqa narsa qilishi kerakmi, buni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-07):
 *   https://ton.org/
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://telegram.org/blog/profile-music-gift-themes
 *   https://telegram.org/blog/welcome-messages-buttons-TG-13
 */

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Yo‘q, kolleksion sovg‘ani Gram hamyon kartasida ko‘rinsin deb hozir TON hamyonga chiqarishga sabab yo‘q. Kartani sovg‘a bilan bezash g‘oyasi Telegram kanalidagi postda eskiz sifatida chiqdi. Telegram yoki TON tomonidan bu haqda rasmiy e’lon topilmadi. Sovg‘angiz bugun profil statusi va shaxsiy chat fonini bezaydi. Buning uchun uni Telegram’da qoldirishning o‘zi yetadi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#sovga-hamyon-kartasida-chiqishi-uchun", label: "Sovg‘a hamyon kartasida chiqishi uchun hozir nima qilish kerak?" },
          { href: "#telegramda-qoldirish-va-ton-hamyonga", label: "Telegram’da qoldirish va TON hamyonga chiqarish nimasi bilan farq qiladi?" },
          { href: "#gram-wallet-gram-tangasi-va", label: "Gram Wallet, Gram tangasi va sovg‘angiz qayerda kesishadi?" },
          { href: "#sovgangiz-hozir-rasman-nimani-ozgartira", label: "Sovg‘angiz hozir rasman nimani o‘zgartira oladi?" },
          { href: "#status-va-chat-foni-uchun", label: "Status va chat foni uchun nusxani qanday baholash kerak?" },
          { href: "#kolleksion-sovgani-starssiz-somda-qanday", label: "Kolleksion sovg‘ani Stars’siz, so‘mda qanday olasiz?" },
          { href: "#chiqarishdan-oldingi-tekshiruv-royxati", label: "Chiqarishdan oldingi tekshiruv ro‘yxati" },
          { href: "#sovgani-allaqachon-hamyonga-chiqargan-bolsangiz", label: "Sovg‘ani allaqachon hamyonga chiqargan bo‘lsangiz-chi?" },
          { href: "#erta-kirish-va-bezakni-yoqish", label: "«Erta kirish» va «bezakni yoqish» takliflarida qaysi belgilar xavfli?" },
          { href: "#elon-chiqqanini-qayerdan-bilasiz-va", label: "E’lon chiqqanini qayerdan bilasiz va qarorni qachon qilasiz?" },
        ]}
      />
      <h2 id="sovga-hamyon-kartasida-chiqishi-uchun">Sovg‘a hamyon kartasida chiqishi uchun hozir nima qilish kerak?</h2>
      <p>Hech narsa qilish shart emas. Gram Wallet kartasining rangi yoki naqshini sovg‘a bilan o‘zgartirish haqida Telegram blogida ham, ton.org’da ham e’lon yo‘q. G‘oya kanal postidan tarqaldi. Postning o‘zida ham bu tayyor funksiya emas, eskiz ekani aytilgan.</p>
      <p>Eskiz ikki savolga javob bermaydi:</p>
      <ul>
        <li>funksiya umuman ishga tushadimi;</li>
        <li>ishga tushsa, sovg‘a qayerda turishi kerak bo‘ladi — Telegram profilidami yoki blockchain hamyondami.</li>
      </ul>
      <p>Postda tilga olingan «Tuberg» kimligi va uning Telegram nomidan gapirishi tasdiqlanmagan. Chiqish sanasi haqida ham rasmiy ma’lumot yo‘q.</p>
      <p>Shu sababli karta bezagini ko‘zlab:</p>
      <ul>
        <li>sovg‘ani faqat shu maqsadda TON hamyonga chiqarmang;</li>
        <li>bor nusxani sotib, «kartaga mosroq» boshqasini olishga shoshilmang;</li>
        <li>bezak umidida qimmat nusxani zaxiraga olmang.</li>
      </ul>
      <p>Misol: Dilshod bugun sovg‘asini hamyonga chiqardi. Bir necha oydan keyin karta bezagi haqiqatan chiqdi, lekin u sovg‘a profilda turgan holatda ishlashi ma’lum bo‘ldi. Natijada qilingan qadam foyda bermadi, ortga qaytarish esa qo‘shimcha vaqt va e’tibor talab qildi. Shartlar e’lon qilinguncha kutish xavfsizroq.</p>
      <h2 id="telegramda-qoldirish-va-ton-hamyonga">Telegram’da qoldirish va TON hamyonga chiqarish nimasi bilan farq qiladi?</h2>
      <p><a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> saytida yozilishicha, Telegram sovg‘alarini TON asosidagi NFT’ga aylantirish mumkin. Telegram blogidagi <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">e’longa</a> ko‘ra, kolleksion sovg‘ani TON blockchaini orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin. Ikki holat ikki xil maqsadga xizmat qiladi.</p>
      <CompareTable
        headers={["Mezon", "Telegram’da qoldirish", "TON hamyonga chiqarish"]}
        rows={[
          ["Asosiy maqsad", "Profil statusi va shaxsiy chat foni", "Blockchain orqali o‘tkazish yoki auksion"],
          ["Qayerda ko‘rinadi", "Profilda, sovg‘alar ro‘yxatida, chat fonida", "Blockchain hamyonda NFT sifatida"],
          ["Nima kerak", "Sovg‘a profilingizga tushgan bo‘lsa yetarli", "TON hamyon va ilova ko‘rsatgan shartlar"],
          ["Nimaga e’tibor berish kerak", "Akkaunt himoyasi: 2FA, faol seanslar", "Kalit so‘zlar, soxta hamyon va havolalar"],
          ["Karta bezagiga ta’siri", "Tasdiqlanmagan", "Tasdiqlanmagan"],
        ]}
      />
      <p>Jadvalning oxirgi qatori asosiy fikrni ko‘rsatadi: karta bezagi nuqtayi nazaridan ikki yo‘l o‘rtasida hozircha farq yo‘q, chunki funksiyaning o‘zi tasdiqlanmagan.</p>
      <p>Chiqarilgan sovg‘ani keyin status yoki chat foni qilib qo‘yish mumkinmi — bu maqolada tasdiqlanmagan. Rejangiz shunga bog‘liq bo‘lsa, ilovaning o‘zida tekshiring. Chiqarish qadamlari va cheklovlari <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">NFT sovg‘ani blokcheynga o‘tkazish</Link> maqolasida yozilgan.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="gram-wallet-gram-tangasi-va">Gram Wallet, Gram tangasi va sovg‘angiz qayerda kesishadi?</h2>
      <p><a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a> ma’lumotiga ko‘ra, Telegram jamoasi yaratgan Gram Wallet messenjer interfeysiga o‘rnatilgan. Hamyon non-custodial, ya’ni uni foydalanuvchining o‘zi boshqaradi. Uning yordamida foydalanuvchilar bir-biriga mablag‘ o‘tkazadi, botlar va mini-ilovalar bilan ishlaydi.</p>
      <p>Gram — TON blockchainining asosiy tangasi, ilgari u Toncoin deb ham atalgan. Nom almashishi oddiy foydalanuvchi uchun nimani anglatishi <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasida tushuntirilgan.</p>
      <p>Sovg‘a hamyon bilan bitta nuqtada kesishadi: TON asosidagi NFT’ga aylantirilganda. Lekin bundan hamyon kartasining dizayni sovg‘aga bog‘liq degan xulosa chiqmaydi.</p>
      <p>Uch narsani aralashtirmang:</p>
      <ul>
        <li><b>Stars balansi</b> — Telegram ichidagi xizmat va kontent uchun yulduzlar;</li>
        <li><b>Gram</b> — hamyondagi tanga;</li>
        <li><b>kolleksion sovg‘a</b> — profilingizdagi noyob nusxa. Xohlasangiz, uni TON asosidagi NFT’ga aylantirish mumkin.</li>
      </ul>
      <p>Ular bir balans emas va bir-birining o‘rnini bosmaydi. Batafsil: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link>.</p>
      <h2 id="sovgangiz-hozir-rasman-nimani-ozgartira">Sovg‘angiz hozir rasman nimani o‘zgartira oladi?</h2>
      <p>Tasdiqlangan bezak yo‘llari profil va chatlarga tegishli, hamyonga emas.</p>
      <ul>
        <li><b>Profil statusi.</b> Telegram <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">e’loniga</a> ko‘ra, sovg‘a status qilib qo‘yilsa, unga yaltiroq yulduz effekti qo‘shiladi. Profil ko‘rinishi esa sovg‘aning fon rangi va belgisiga moslashadi. Qadamlar <Link href="/blog/telegram-sovgani-profilga-qoyish">sovg‘ani profilga qo‘yish</Link> maqolasida yozilgan.</li>
        <li><b>Shaxsiy chat foni.</b> Sovg‘a egasi uning asosida yasalgan dinamik fon rasmini istalgan shaxsiy chatda mavzu sifatida o‘rnata oladi (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">Telegram blogi</a>).</li>
        <li><b>Bir sovg‘a — bir chat.</b> Bitta sovg‘a bitta chat uchun bitta mavzuni ochadi. Onangiz, opangiz va hamkasbingiz bilan chatlarni bezash uchun uchta sovg‘a kerak bo‘ladi.</li>
        <li><b>Imzoli sovg‘a.</b> Telegram Marketplace orqali sovg‘a yuborishda izoh qo‘shish mumkin, bu Signed Gifts deb ataladi (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">yangilanish e’loni</a>). Bu bezak emas, lekin sovg‘aga shaxsiy so‘z qo‘shadi.</li>
      </ul>
      <p>Bularning hech biri uchun hamyon ochish shart emas: sovg‘a profilingizda turgani yetarli.</p>
      <h2 id="status-va-chat-foni-uchun">Status va chat foni uchun nusxani qanday baholash kerak?</h2>
      <p>Chat mavzusi sovg‘aning modeli va fon rangidan yasaladi. Status esa profilni fon va belgiga moslaydi. Shuning uchun bezak maqsadida nusxa tanlayotganda avval atributlarga, keyin narxga qarang.</p>
      <ul>
        <li><b>Fon</b> — statusda ham, chat mavzusida ham ishtirok etadi. Eng ko‘p ko‘zga tashlanadigan qism shu.</li>
        <li><b>Belgi</b> — status qo‘yilganda profil ko‘rinishiga ta’sir qiladi.</li>
        <li><b>Model</b> — chat mavzusining markaziy tasviri.</li>
      </ul>
      <p>Birinchi misol: profil rasmingiz qora-oq bo‘lsa, yorqin fonli nusxa statusda yaxshiroq ajralib turadi. Ikkinchi misol: sovg‘ani faqat bitta chat foni uchun olayotgan bo‘lsangiz, belgidan ko‘ra sizga yoqadigan model muhimroq.</p>
      <p>Nusxa raqami va kolleksiya tiraji narxga ta’sir qilishi mumkin, ammo mavzu faqat model va fondan yasaladi. Bu haqda <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">Telegram sovg‘a tiraji</Link> maqolasida o‘qing.</p>
      <p>Karta bezagi chiqib qolar degan umidda nusxa tanlash taxminga tayanadi: funksiyaning o‘zi ham, u qaysi atributni ishlatishi ham noma’lum.</p>
      <h2 id="kolleksion-sovgani-starssiz-somda-qanday">Kolleksion sovg‘ani Stars’siz, so‘mda qanday olasiz?</h2>
      <p>Stars bilan emas, so‘mda to‘lamoqchi bo‘lsangiz, tayyor kolleksion nusxani <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> ichidagi NFT Market’dan tanlash mumkin.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>ga kiring va NFT Market bo‘limini tanlang.</Step>
        <Step title={"Nusxani tanlang"}>model, fon va belgini ko‘ring. Status yoki chat fonida qanday ko‘rinishini oldindan tasavvur qiling.</Step>
        <Step title={"Qabul qiluvchini kiriting"}>faqat @username kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</Step>
        <Step title={"So‘mda to‘lang"}>Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi orqali. Xalqaro karta, kripto hamyon yoki VPN kerak emas.</Step>
        <Step title={"Profilda tekshiring"}>sovg‘a tushgach, uni status qilib qo‘ying yoki kerakli chatga fon sifatida o‘rnating.</Step>
      </Steps>
      <p>Nusxa narxi botda ko‘rsatiladi. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</p>
      <Notice label={"Muhim"}>Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi. Tayyor kolleksion (NFT) sovg‘alar esa botdagi NFT Market’da. Batafsil: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> va <Link href="/gifts">sovg‘alar sahifasi</Link>.</Notice>
      <h2 id="chiqarishdan-oldingi-tekshiruv-royxati">Chiqarishdan oldingi tekshiruv ro‘yxati</h2>
      <p>Ba’zan chiqarish o‘rinli bo‘ladi: masalan, sovg‘ani blockchain orqali boshqa egaga o‘tkazmoqchi yoki auksionga qo‘ymoqchisiz. Qaror qilishdan oldin to‘rt narsani tekshiring.</p>
      <ul>
        <li><b>Maqsad.</b> O‘tkazish va auksion rasman tasdiqlangan yo‘llar. «Karta bezagi uchun» degan sabab hozircha asossiz.</li>
        <li><b>Kalit so‘zlar.</b> Hamyon non-custodial, boshqaruv faqat sizda. Kalit so‘zlarni hech kimga ko‘rsatmang, skrinshot qilib telefonda saqlamang.</li>
        <li><b>Bezak imkoniyatlari.</b> Chiqarilgandan keyin status va chat foni ishlaydimi — ilovada tekshiring, bu maqolada tasdiqlanmagan.</li>
        <li><b>Shartlar manbasi.</b> Talab va to‘lovlarni faqat Telegram ilovasi ko‘rsatgan oynadan o‘qing. Begona bot yoki kanal yo‘riqnomasiga tayanmang.</li>
      </ul>
      <h2 id="sovgani-allaqachon-hamyonga-chiqargan-bolsangiz">Sovg‘ani allaqachon hamyonga chiqargan bo‘lsangiz-chi?</h2>
      <p>Xavotirga asos yo‘q. Karta bezagi tasdiqlanmagan, demak, «noto‘g‘ri joyda turgan» sovg‘a ham yo‘q. Siz rasman tasdiqlangan yo‘ldan foydalandingiz.</p>
      <p>Hozir quyidagilarga e’tibor bering:</p>
      <ul>
        <li>kalit so‘zlar oflayn, faqat sizga ma’lum joyda saqlanganini tekshiring;</li>
        <li>sovg‘ani Telegram’ga qaytarish yoki status qilib qo‘yish mumkinligini faqat ilovaning o‘zida ko‘ring;</li>
        <li>«sovg‘ani profilga qaytarib beramiz» yoki «kartaga ulab beramiz» degan bot va odamlarga ishonmang.</li>
      </ul>
      <p>Agar keyinchalik karta bezagi e’lon qilinsa, uning shartlariga qarab qaror qilasiz. Hozir qo‘shimcha harakat kerak emas.</p>
      <h2 id="erta-kirish-va-bezakni-yoqish">«Erta kirish» va «bezakni yoqish» takliflarida qaysi belgilar xavfli?</h2>
      <p>Yangi konsept atrofida tez orada «beta-test», «erta kirish», «kartani hozir bezash» degan bot va havolalar paydo bo‘lishi mumkin. Ularning ko‘pchiligi kalit so‘z yoki sovg‘ani qo‘lga kiritishga qaratilgan.</p>
      <p>Xavfli belgilar:</p>
      <ul>
        <li>kalit so‘zlar (seed-fraza), SMS kod yoki parol so‘raladi;</li>
        <li>sovg‘ani «tekshiruv uchun» boshqa akkaunt yoki hamyonga o‘tkazish talab qilinadi;</li>
        <li><a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org</a> yoki <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>da tilga olinmagan funksiya va’da qilinadi;</li>
        <li>shoshiltirish bor: «faqat bugun», «joylar cheklangan».</li>
      </ul>
      <Notice label={"Muhim"}>Telegram’ning yangi funksiyasi ilova yangilanishi bilan keladi. Uchinchi tomon uni sizga alohida «yoqib bera olmaydi».</Notice>
      <p>StarsPaymee foydalanuvchidan Stars va sovg‘alarni sotib olmaydi. Shu nomdan bunday taklif kelsa, u soxta. Shubha tug‘ilsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing.</p>
      <h2 id="elon-chiqqanini-qayerdan-bilasiz-va">E’lon chiqqanini qayerdan bilasiz va qarorni qachon qilasiz?</h2>
      <p>Tasdiqni ikki manbadan izlang: <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blogi</a> va <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. Kanal postlari mavzudan xabardor bo‘lish uchun foydali, lekin ular tasdiq hisoblanmaydi.</p>
      <p>Karta bezagi haqiqatan chiqsa, e’londa uning shartlari bo‘ladi: sovg‘a Telegram’da turishi kerakmi yoki hamyonda, qaysi atributlar ishlatiladi. Chiqarish yoki qoldirish haqidagi qarorni o‘shanda, aniq shartlarni o‘qib qabul qilasiz.</p>
      <p>Ungacha sovg‘ani Telegram’da qoldirib, status va chat foni sifatida ishlatish mumkin. Yangiliklarni <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> kanalida ham kuzatsangiz bo‘ladi, ammo yakuniy tasdiqni rasmiy manbadan tekshiring.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Kanalda ko‘rgan rasmdagidek hamyon kartamga sovg‘a naqshini qo‘ya olamanmi?", answer: "Hozircha yo‘q: bu rasm eskiz, Telegram yoki TON uni funksiya sifatida e’lon qilmagan. Sovg‘a bilan tasdiqlangan bezak faqat profil statusi va shaxsiy chat foniga tegishli." },
  { question: "Hamyonga chiqarilgan NFT sovg‘ani yana status qilib qo‘ysa bo‘ladimi?", answer: "Bu maqolada tasdiqlanmagan. Chiqarishdan oldin Telegram ilovasi qanday shartlarni ko‘rsatayotganini o‘qing va shunga qarab qaror qiling." },
  { question: "Sovg‘am profilda tursa, karta bezagi chiqqanda undan foydalana olmay qolmaymanmi?", answer: "Bunga hozir hech kim aniq javob bera olmaydi, chunki funksiya ham, uning shartlari ham e’lon qilinmagan. Taxmin bilan chiqarishdan ko‘ra rasmiy shartlarni kutish ishonchliroq." },
  { question: "Oddiy sovg‘am bor. U ham status yoki chat foni bo‘la oladimi?", answer: "Telegram e’lonlarida status va chat foni kolleksion sovg‘alar misolida, ularning model, fon va belgisi asosida tasvirlangan. Oddiy sovg‘angiz uchun bu imkoniyat bor-yo‘qligini ilovaning o‘zida tekshiring." },
  { question: "Uch xil chatga uch xil fon qo‘ymoqchiman. Bitta sovg‘a yetadimi?", answer: "Yetmaydi: Telegram qoidasiga ko‘ra, bitta sovg‘a bitta chat uchun bitta mavzuni ochadi. Uch chat uchun uchta kolleksion sovg‘a kerak." },
  { question: "Kripto hamyonim yo‘q. NFT sovg‘ani so‘mda olsam bo‘ladimi?", answer: "Bo‘ladi. @StarsPaymee_bot’dagi NFT Market’da to‘lov so‘mda qilinadi va faqat qabul qiluvchining @username’i so‘raladi." },
  { question: "Botdan olingan kolleksion sovg‘ani qayerdan topaman?", answer: "U buyurtmada yozilgan @username egasining Telegram profiliga, sovg‘alar ro‘yxatiga tushadi. Shu yerdan uni status qilish yoki chat foniga qo‘yish mumkin." },
  { question: "Hamyondagi Gram bilan Stars’ni bir-biriga almashtirib bo‘ladimi?", answer: "Ular alohida narsalar: Gram — TON blockchainidagi tanga, Stars — Telegram ichidagi yulduzlar. Biri ikkinchisining balansi hisoblanmaydi, Stars olish uchun hamyon kerak emas." },
  { question: "Karta bezagi uchun mos keladi deb noyob nusxa sotib olsam, foyda qilamanmi?", answer: "Buni oldindan bilib bo‘lmaydi: funksiya tasdiqlanmagan, u qaysi atributga qarashi ham noma’lum. Nusxani bugun status va chat fonida sizga yoqqani uchun tanlash xavfsizroq." },
  { question: "Kimdir «kartangizni beta-testga ulab beraman» deb seed-frazani so‘rayapti. Bersam bo‘ladimi?", answer: "Yo‘q. Seed-frazani olgan odam hamyonni to‘liq boshqara oladi, shuning uchun hech narsa yubormang va akkauntni bloklang. Telegram’ning yangi funksiyasi ilova yangilanishi bilan keladi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, выводить коллекционный подарок в TON-кошелёк ради того, чтобы он появился на карте Gram Wallet, сейчас незачем. Идея украсить карту подарком появилась в посте Telegram-канала и была подана как эскиз. Официального объявления от Telegram или TON нет. Сегодня подарок украшает статус профиля и фон личного чата, и для этого достаточно оставить его в Telegram.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#sovga-hamyon-kartasida-chiqishi-uchun", label: "Что нужно сделать сейчас, чтобы подарок появился на карте кошелька?" },
          { href: "#telegramda-qoldirish-va-ton-hamyonga", label: "Чем отличается: оставить подарок в Telegram или вывести в TON-кошелёк?" },
          { href: "#gram-wallet-gram-tangasi-va", label: "Где пересекаются Gram Wallet, монета Gram и ваш подарок?" },
          { href: "#sovgangiz-hozir-rasman-nimani-ozgartira", label: "Что подарок официально может изменить уже сейчас?" },
          { href: "#status-va-chat-foni-uchun", label: "Как оценивать экземпляр для статуса и фона чата?" },
          { href: "#kolleksion-sovgani-starssiz-somda-qanday", label: "Как купить коллекционный подарок без Stars, за сумы?" },
          { href: "#chiqarishdan-oldingi-tekshiruv-royxati", label: "Чек-лист перед выводом" },
          { href: "#sovgani-allaqachon-hamyonga-chiqargan-bolsangiz", label: "Что, если вы уже вывели подарок в кошелёк?" },
          { href: "#erta-kirish-va-bezakni-yoqish", label: "Какие признаки опасны в предложениях «раннего доступа» и «включения оформления»?" },
          { href: "#elon-chiqqanini-qayerdan-bilasiz-va", label: "Как узнать о выходе объявления и когда принимать решение?" },
        ]}
      />
      <h2 id="sovga-hamyon-kartasida-chiqishi-uchun">Что нужно сделать сейчас, чтобы подарок появился на карте кошелька?</h2>
      <p>Ничего. Ни в блоге Telegram, ни на ton.org нет объявления о том, что цвет или узор карты Gram Wallet можно поменять с помощью подарка. Идея пошла из поста в канале, и сам пост называет её эскизом, а не готовой функцией.</p>
      <p>На два вопроса эскиз не отвечает:</p>
      <ul>
        <li>появится ли функция вообще;</li>
        <li>если появится, где должен находиться подарок: в профиле Telegram или в блокчейн-кошельке.</li>
      </ul>
      <p>Кто такой упомянутый в посте «Tuberg» и говорит ли он от имени Telegram, не подтверждено. Официальной даты выхода тоже нет.</p>
      <p>Поэтому ради оформления карты:</p>
      <ul>
        <li>не выводите подарок в TON-кошелёк только с этой целью;</li>
        <li>не продавайте имеющийся экземпляр, чтобы купить другой, «лучше подходящий для карты»;</li>
        <li>не скупайте дорогие экземпляры впрок в надежде на оформление.</li>
      </ul>
      <p>Пример: Дильшод сегодня вывел подарок в кошелёк. Через несколько месяцев оформление карты действительно вышло, но оказалось, что оно работает, когда подарок лежит в профиле. Шаг ничего не дал, а возврат потребовал лишнего времени и внимания. Надёжнее подождать, пока объявят условия.</p>
      <h2 id="telegramda-qoldirish-va-ton-hamyonga">Чем отличается: оставить подарок в Telegram или вывести в TON-кошелёк?</h2>
      <p>Как сказано на <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, подарки Telegram можно превращать в NFT на базе TON. Согласно <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">объявлению</a> в блоге Telegram, коллекционный подарок можно передать другому владельцу или выставить на аукцион через блокчейн TON. Это два варианта для разных задач.</p>
      <CompareTable
        headers={["Критерий", "Оставить в Telegram", "Вывести в TON-кошелёк"]}
        rows={[
          ["Основная цель", "Статус профиля и фон личного чата", "Передача или аукцион через блокчейн"],
          ["Где виден", "В профиле, в списке подарков, на фоне чата", "В блокчейн-кошельке как NFT"],
          ["Что нужно", "Достаточно, чтобы подарок был в вашем профиле", "TON-кошелёк и условия, которые покажет приложение"],
          ["На что обратить внимание", "Защита аккаунта: 2FA, активные сеансы", "Секретная фраза, поддельные кошельки и ссылки"],
          ["Влияние на оформление карты", "Не подтверждено", "Не подтверждено"],
        ]}
      />
      <p>Последняя строка таблицы — главный вывод: с точки зрения оформления карты разницы между вариантами пока нет, потому что сама функция не подтверждена.</p>
      <p>Можно ли после вывода поставить подарок в статус или на фон чата, в этой статье не подтверждено. Если ваши планы от этого зависят, проверьте в самом приложении. Шаги и ограничения вывода описаны в статье <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">о переносе NFT-подарка в блокчейн</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="gram-wallet-gram-tangasi-va">Где пересекаются Gram Wallet, монета Gram и ваш подарок?</h2>
      <p>По данным <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, Gram Wallet от команды Telegram встроен в интерфейс мессенджера. Кошелёк некастодиальный: управляет им сам пользователь. С его помощью можно переводить средства друг другу и работать с ботами и мини-приложениями.</p>
      <p>Gram — основная монета блокчейна TON, раньше она называлась также Toncoin. Что смена названия значит для обычного пользователя, разобрано в статье <Link href="/blog/toncoin-endi-gram">«Toncoin теперь Gram»</Link>.</p>
      <p>Подарок пересекается с кошельком в одной точке — когда его превращают в NFT на базе TON. Но из этого не следует, что дизайн карты кошелька зависит от подарка.</p>
      <p>Не путайте три вещи:</p>
      <ul>
        <li><b>баланс Stars</b> — звёзды для сервисов и контента внутри Telegram;</li>
        <li><b>Gram</b> — монета в кошельке;</li>
        <li><b>коллекционный подарок</b> — уникальный экземпляр в вашем профиле. По желанию его можно превратить в NFT на базе TON.</li>
      </ul>
      <p>Это не один баланс, и одно не заменяет другое. Подробнее: <Link href="/blog/telegram-wallet-va-stars-farqi">разница между Telegram Wallet и Stars</Link>.</p>
      <h2 id="sovgangiz-hozir-rasman-nimani-ozgartira">Что подарок официально может изменить уже сейчас?</h2>
      <p>Подтверждённые способы оформления касаются профиля и чатов, а не кошелька.</p>
      <ul>
        <li><b>Статус профиля.</b> Согласно <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">объявлению</a> Telegram, подарок, поставленный в статус, получает эффект сверкающей звезды, а профиль меняет вид под фон и символ подарка. Шаги — в статье о том, <Link href="/blog/telegram-sovgani-profilga-qoyish">как поставить подарок в профиль</Link>.</li>
        <li><b>Фон личного чата.</b> Владелец подарка может установить созданные на его основе динамические обои как тему в любом личном чате (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">блог Telegram</a>).</li>
        <li><b>Один подарок — один чат.</b> Один подарок открывает одну тему для одного чата. Чтобы оформить чаты с мамой, сестрой и коллегой, понадобятся три подарка.</li>
        <li><b>Подписанный подарок.</b> При отправке через Telegram Marketplace можно добавить комментарий — это называется Signed Gifts (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">объявление обновления</a>). Это не оформление, но подарок получает личные слова.</li>
      </ul>
      <p>Ни для одного из этих вариантов кошелёк не нужен: достаточно, чтобы подарок был в вашем профиле.</p>
      <h2 id="status-va-chat-foni-uchun">Как оценивать экземпляр для статуса и фона чата?</h2>
      <p>Тема чата строится из модели и фона подарка, а статус подстраивает профиль под фон и символ. Поэтому, выбирая экземпляр для оформления, сначала смотрите на атрибуты, а уже потом на цену.</p>
      <ul>
        <li><b>Фон</b> — участвует и в статусе, и в теме чата. Это самая заметная часть.</li>
        <li><b>Символ</b> — влияет на вид профиля, когда подарок стоит в статусе.</li>
        <li><b>Модель</b> — центральное изображение темы чата.</li>
      </ul>
      <p>Пример первый: если аватар у вас чёрно-белый, экземпляр с ярким фоном будет заметнее в статусе. Пример второй: если подарок нужен только для фона одного чата, модель, которая вам нравится, важнее символа.</p>
      <p>Номер экземпляра и тираж коллекции могут влиять на цену, но тема строится только из модели и фона. Об этом — в статье <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">про тираж подарков Telegram</Link>.</p>
      <p>Выбирать экземпляр в расчёте на будущее оформление карты — значит гадать: неизвестна ни сама функция, ни то, какие атрибуты она будет использовать.</p>
      <h2 id="kolleksion-sovgani-starssiz-somda-qanday">Как купить коллекционный подарок без Stars, за сумы?</h2>
      <p>Если хотите платить не звёздами, а в сумах, готовый коллекционный экземпляр можно выбрать в NFT Market внутри <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</p>
      <Steps>
        <Step title={"Откройте бота"}>зайдите в <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> и выберите раздел NFT Market.</Step>
        <Step title={"Выберите экземпляр"}>посмотрите модель, фон и символ. Заранее представьте, как он будет смотреться в статусе или на фоне чата.</Step>
        <Step title={"Укажите получателя"}>нужен только @username. Пароль, SMS-код или доступ к аккаунту не запрашиваются.</Step>
        <Step title={"Оплатите в сумах"}>через Click, Payme, Uzum, Paynet (в приложении или наличными в терминале), переводом на карту UzCard/HUMO или с баланса бота. Международная карта, криптокошелёк или VPN не нужны.</Step>
        <Step title={"Проверьте профиль"}>когда подарок придёт, поставьте его в статус или установите фоном в нужном чате.</Step>
      </Steps>
      <p>Цена экземпляра указана в боте. Заказ обычно доставляется автоматически за несколько секунд.</p>
      <Notice label={"Важно"}>Лимитированные подарки, которые Telegram снял с продажи, боты отправить не могут. Готовые коллекционные (NFT) подарки — в NFT Market бота. Подробнее: <Link href="/blog/starspaymee-nft-market">NFT Market StarsPaymee</Link> и <Link href="/gifts">страница подарков</Link>.</Notice>
      <h2 id="chiqarishdan-oldingi-tekshiruv-royxati">Чек-лист перед выводом</h2>
      <p>Иногда вывод оправдан: например, вы хотите передать подарок другому владельцу через блокчейн или выставить его на аукцион. Перед решением проверьте четыре вещи.</p>
      <ul>
        <li><b>Цель.</b> Передача и аукцион — официально подтверждённые сценарии. Причина «ради оформления карты» пока ничем не обоснована.</li>
        <li><b>Секретная фраза.</b> Кошелёк некастодиальный, управление только у вас. Никому не показывайте секретную фразу и не храните её скриншотом в телефоне.</li>
        <li><b>Возможности оформления.</b> Работают ли после вывода статус и фон чата, проверьте в приложении — в этой статье это не подтверждено.</li>
        <li><b>Источник условий.</b> Требования и платежи читайте только в окне, которое показывает приложение Telegram. Не полагайтесь на инструкции сторонних ботов и каналов.</li>
      </ul>
      <h2 id="sovgani-allaqachon-hamyonga-chiqargan-bolsangiz">Что, если вы уже вывели подарок в кошелёк?</h2>
      <p>Поводов для беспокойства нет. Оформление карты не подтверждено, а значит, подарка «не в том месте» тоже не бывает. Вы воспользовались официально подтверждённым сценарием.</p>
      <p>Сейчас обратите внимание на следующее:</p>
      <ul>
        <li>убедитесь, что секретная фраза хранится офлайн, в месте, известном только вам;</li>
        <li>можно ли вернуть подарок в Telegram или поставить его в статус, смотрите только в самом приложении;</li>
        <li>не доверяйте ботам и людям, которые обещают «вернуть подарок в профиль» или «привязать его к карте».</li>
      </ul>
      <p>Если оформление карты когда-нибудь объявят, решение примете по его условиям. Сейчас никаких дополнительных действий не нужно.</p>
      <h2 id="erta-kirish-va-bezakni-yoqish">Какие признаки опасны в предложениях «раннего доступа» и «включения оформления»?</h2>
      <p>Вокруг нового концепта скоро могут появиться боты и ссылки с «бета-тестом», «ранним доступом» и «оформлением карты прямо сейчас». Большинство из них нацелены на то, чтобы заполучить секретную фразу или подарок.</p>
      <p>Опасные признаки:</p>
      <ul>
        <li>просят секретную фразу (seed-фразу), SMS-код или пароль;</li>
        <li>требуют перевести подарок на другой аккаунт или кошелёк «для проверки»;</li>
        <li>обещают функцию, которой нет на <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org</a> или <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>;</li>
        <li>торопят: «только сегодня», «мест мало».</li>
      </ul>
      <Notice label={"Важно"}>Новые функции Telegram приходят с обновлением приложения. Третья сторона не может «включить» их вам отдельно.</Notice>
      <p>StarsPaymee не покупает у пользователей Stars и подарки. Если такое предложение пришло от этого имени, оно поддельное. При сомнениях пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="elon-chiqqanini-qayerdan-bilasiz-va">Как узнать о выходе объявления и когда принимать решение?</h2>
      <p>Подтверждение ищите в двух источниках: <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">блог Telegram</a> и <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. Посты в каналах полезны, чтобы быть в курсе, но подтверждением не считаются.</p>
      <p>Если оформление карты действительно выйдет, в объявлении будут условия: где должен находиться подарок — в Telegram или в кошельке, какие атрибуты используются. Решение, выводить подарок или оставить, примете тогда, прочитав точные условия.</p>
      <p>А до тех пор подарок можно держать в Telegram и использовать как статус и фон чата. Новости можно следить и в канале <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a>, но окончательное подтверждение проверяйте в официальном источнике.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли поставить узор подарка на карту кошелька, как на картинке из канала?", answer: "Пока нет: картинка — это эскиз, Telegram и TON не объявляли такую функцию. Подтверждённое оформление подарком касается только статуса профиля и фона личного чата." },
  { question: "Можно ли снова поставить в статус NFT-подарок, выведенный в кошелёк?", answer: "В этой статье это не подтверждено. Перед выводом прочитайте условия, которые показывает приложение Telegram, и решайте исходя из них." },
  { question: "Если подарок останется в профиле, не окажусь ли я без оформления карты, когда оно выйдет?", answer: "Точно ответить сейчас не может никто: ни функция, ни её условия не объявлены. Надёжнее дождаться официальных условий, чем выводить подарок наугад." },
  { question: "У меня обычный подарок. Он тоже может стать статусом или фоном чата?", answer: "В объявлениях Telegram статус и фон чата описаны на примере коллекционных подарков — по их модели, фону и символу. Есть ли такая возможность для вашего обычного подарка, проверьте в приложении." },
  { question: "Хочу три разных фона для трёх чатов. Хватит одного подарка?", answer: "Не хватит: по правилам Telegram один подарок открывает одну тему для одного чата. Для трёх чатов нужны три коллекционных подарка." },
  { question: "У меня нет криптокошелька. Можно купить NFT-подарок за сумы?", answer: "Можно. В NFT Market бота @StarsPaymee_bot оплата идёт в сумах, а от вас нужен только @username получателя." },
  { question: "Где найти коллекционный подарок, купленный через бота?", answer: "Он придёт в профиль Telegram владельца указанного в заказе @username, в список подарков. Оттуда его можно поставить в статус или на фон чата." },
  { question: "Можно ли обменять Gram из кошелька на Stars и наоборот?", answer: "Это разные вещи: Gram — монета блокчейна TON, Stars — звёзды внутри Telegram. Одно не является балансом другого, и для покупки Stars кошелёк не нужен." },
  { question: "Если куплю редкий экземпляр, который подойдёт для оформления карты, заработаю на этом?", answer: "Заранее это не узнать: функция не подтверждена, и неизвестно, на какие атрибуты она будет смотреть. Безопаснее выбирать экземпляр за то, как он нравится вам в статусе и на фоне чата уже сегодня." },
  { question: "Мне предлагают «подключить карту к бета-тесту» и просят seed-фразу. Отдавать?", answer: "Нет. Тот, кто получит seed-фразу, полностью распоряжается кошельком, поэтому ничего не отправляйте и заблокируйте аккаунт. Новые функции Telegram приходят с обновлением приложения." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, there’s no reason to move a collectible gift to a TON wallet right now just so it shows up on your Gram Wallet card. The idea of decorating the card with a gift first appeared as a sketch in a Telegram channel post. No official announcement from Telegram or TON has been found. Today your gift decorates your profile status and private chat backgrounds, and for that it only needs to stay in Telegram.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#sovga-hamyon-kartasida-chiqishi-uchun", label: "What do you need to do now for a gift to appear on your wallet card?" },
          { href: "#telegramda-qoldirish-va-ton-hamyonga", label: "Keeping a gift in Telegram vs. moving it to a TON wallet: what’s the difference?" },
          { href: "#gram-wallet-gram-tangasi-va", label: "Where do Gram Wallet, the Gram coin and your gift overlap?" },
          { href: "#sovgangiz-hozir-rasman-nimani-ozgartira", label: "What can your gift officially change right now?" },
          { href: "#status-va-chat-foni-uchun", label: "How to judge a collectible for status and chat backgrounds" },
          { href: "#kolleksion-sovgani-starssiz-somda-qanday", label: "How to buy a collectible gift in soums, without Stars" },
          { href: "#chiqarishdan-oldingi-tekshiruv-royxati", label: "Checklist before moving a gift out" },
          { href: "#sovgani-allaqachon-hamyonga-chiqargan-bolsangiz", label: "What if you’ve already moved your gift to a wallet?" },
          { href: "#erta-kirish-va-bezakni-yoqish", label: "Which signs are dangerous in “early access” and “enable the design” offers?" },
          { href: "#elon-chiqqanini-qayerdan-bilasiz-va", label: "How will you know an announcement is out, and when should you decide?" },
        ]}
      />
      <h2 id="sovga-hamyon-kartasida-chiqishi-uchun">What do you need to do now for a gift to appear on your wallet card?</h2>
      <p>Nothing. Neither the Telegram blog nor ton.org has announced any way to change the color or pattern of a Gram Wallet card with a gift. The idea spread from a channel post, and the post itself calls it a sketch, not a finished feature.</p>
      <p>A sketch leaves two questions unanswered:</p>
      <ul>
        <li>whether the feature will launch at all;</li>
        <li>if it does, where the gift will need to be — in your Telegram profile or in a blockchain wallet.</li>
      </ul>
      <p>It hasn’t been confirmed who “Tuberg,” mentioned in the post, is or whether he speaks for Telegram. There’s also no official release date.</p>
      <p>So if card decoration is your goal:</p>
      <ul>
        <li>don’t move a gift to a TON wallet for that reason alone;</li>
        <li>don’t rush to sell the one you have and buy another that might “suit the card better”;</li>
        <li>don’t stock up on expensive collectibles in the hope of future card designs.</li>
      </ul>
      <p>An example: Dilshod moves his gift to a wallet today. A few months later, card decoration really does launch — but it turns out it works while the gift sits in the profile. The step he took brought him nothing, and reversing it cost extra time and attention. Waiting until the rules are published is the safer choice.</p>
      <h2 id="telegramda-qoldirish-va-ton-hamyonga">Keeping a gift in Telegram vs. moving it to a TON wallet: what’s the difference?</h2>
      <p>According to <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, Telegram gifts can be converted into TON-based NFTs. According to an <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">announcement</a> on the Telegram blog, collectible gifts can be transferred to another owner or auctioned via the TON blockchain. The two options serve different purposes.</p>
      <CompareTable
        headers={["Criterion", "Keep it in Telegram", "Move it to a TON wallet"]}
        rows={[
          ["Main purpose", "Profile status and private chat backgrounds", "Transfer or auction via the blockchain"],
          ["Where it’s visible", "In your profile, gift list and chat backgrounds", "As an NFT in a blockchain wallet"],
          ["What you need", "Just have the gift in your profile", "A TON wallet and the conditions shown in the app"],
          ["What to watch out for", "Account security: 2FA, active sessions", "Recovery phrase, fake wallets and links"],
          ["Effect on card decoration", "Unconfirmed", "Unconfirmed"],
        ]}
      />
      <p>The last row sums it up: when it comes to card decoration, there’s currently no difference between the two paths, because the feature itself is unconfirmed.</p>
      <p>Whether a gift moved out to a wallet can still be used as a status or chat background is not confirmed in this article. If your plans depend on it, check in the app itself. The steps and limits of moving a gift out are covered in <Link href="/blog/nft-sovgani-blokcheynga-otkazish-fragmentsiz">moving an NFT gift to the blockchain</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="gram-wallet-gram-tangasi-va">Where do Gram Wallet, the Gram coin and your gift overlap?</h2>
      <p>According to <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>, Gram Wallet, built by the Telegram team, is integrated directly into the messenger interface. It’s non-custodial, meaning the user controls it. With it, people send funds to each other and interact with bots and mini apps.</p>
      <p>Gram is the native coin of the TON blockchain; it was previously also known as Toncoin. What the rename means for everyday users is explained in <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.</p>
      <p>Your gift meets the wallet at exactly one point: when it’s converted into a TON-based NFT. That doesn’t mean the wallet card’s design depends on your gift.</p>
      <p>Don’t mix up three things:</p>
      <ul>
        <li><b>Stars balance</b> — stars for services and content inside Telegram;</li>
        <li><b>Gram</b> — the coin in your wallet;</li>
        <li><b>collectible gift</b> — a unique item in your profile. If you like, it can be converted into a TON-based NFT.</li>
      </ul>
      <p>They aren’t one balance and can’t stand in for each other. More detail: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs. Stars</Link>.</p>
      <h2 id="sovgangiz-hozir-rasman-nimani-ozgartira">What can your gift officially change right now?</h2>
      <p>The confirmed ways to decorate with a gift apply to your profile and chats, not your wallet.</p>
      <ul>
        <li><b>Profile status.</b> Per Telegram’s <a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">announcement</a>, using a gift as your status adds a glittering star effect, and your profile’s look changes to match the gift’s backdrop and symbol. Steps are in <Link href="/blog/telegram-sovgani-profilga-qoyish">putting a gift on your profile</Link>.</li>
        <li><b>Private chat background.</b> A gift’s owner can set a dynamic wallpaper based on it as a custom theme in any private chat (<a href={"https://telegram.org/blog/profile-music-gift-themes"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li><b>One gift, one chat.</b> One gift unlocks one theme for one chat. To decorate your chats with your mom, your sister and a colleague, you’ll need three gifts.</li>
        <li><b>Signed gifts.</b> When sending a gift through the Telegram Marketplace, you can add a comment — this is called Signed Gifts (<a href={"https://telegram.org/blog/welcome-messages-buttons-TG-13"} target="_blank" rel="noopener noreferrer">update announcement</a>). It’s not decoration, but it adds a personal note.</li>
      </ul>
      <p>None of this requires opening a wallet: the gift just needs to be in your profile.</p>
      <h2 id="status-va-chat-foni-uchun">How to judge a collectible for status and chat backgrounds</h2>
      <p>A chat theme is built from the gift’s model and backdrop. A status matches your profile to the backdrop and symbol. So when choosing a collectible for decoration, look at the attributes first and the price second.</p>
      <ul>
        <li><b>Backdrop</b> — used in both the status and the chat theme. It’s the most eye-catching part.</li>
        <li><b>Symbol</b> — affects your profile’s look when set as status.</li>
        <li><b>Model</b> — the central image of the chat theme.</li>
      </ul>
      <p>Example one: if your profile photo is black and white, a gift with a bright backdrop will stand out better as a status. Example two: if you’re buying a gift for a single chat background, a model you actually like matters more than the symbol.</p>
      <p>The item number and collection supply can affect the price, but the theme is built only from the model and backdrop. Read more in <Link href="/blog/telegram-sovga-tiraji-nechta-chiqarilgan">Telegram gift supply explained</Link>.</p>
      <p>Picking a collectible in the hope that card decoration might launch is guesswork: both the feature and the attributes it would use are unknown.</p>
      <h2 id="kolleksion-sovgani-starssiz-somda-qanday">How to buy a collectible gift in soums, without Stars</h2>
      <p>If you’d rather pay in soums than in Stars, you can pick a ready-made collectible in the NFT Market inside <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.</p>
      <Steps>
        <Step title={"Open the bot"}>go to <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> and choose the NFT Market section.</Step>
        <Step title={"Pick a collectible"}>check the model, backdrop and symbol. Picture how it will look as a status or chat background.</Step>
        <Step title={"Enter the recipient"}>only an @username is needed. No password, SMS code or account access is requested.</Step>
        <Step title={"Pay in soums"}>via Click, Payme, Uzum, Paynet (including cash in the app or at a terminal), a transfer to an UzCard/HUMO card, or your bot balance. No international card, crypto wallet or VPN needed.</Step>
        <Step title={"Check your profile"}>once the gift arrives, set it as your status or as the background in the chat you want.</Step>
      </Steps>
      <p>The price of each item is shown in the bot. Orders are usually delivered automatically within a few seconds.</p>
      <Notice label={"Important"}>Bots can’t send limited gifts that Telegram has removed from sale. Ready-made collectible (NFT) gifts are available in the bot’s NFT Market. More: <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> and the <Link href="/gifts">gifts page</Link>.</Notice>
      <h2 id="chiqarishdan-oldingi-tekshiruv-royxati">Checklist before moving a gift out</h2>
      <p>Sometimes moving a gift out makes sense — for example, when you want to transfer it to another owner via the blockchain or put it up for auction. Before deciding, check four things.</p>
      <ul>
        <li><b>Purpose.</b> Transfers and auctions are officially confirmed uses. “For card decoration” isn’t a valid reason yet.</li>
        <li><b>Recovery phrase.</b> The wallet is non-custodial, so you alone are in control. Never show your recovery phrase to anyone, and don’t store it as a screenshot on your phone.</li>
        <li><b>Decoration options.</b> Whether status and chat backgrounds still work after moving out — check in the app; this article doesn’t confirm it.</li>
        <li><b>Source of the terms.</b> Read requirements and fees only in the window the Telegram app shows you. Don’t rely on instructions from random bots or channels.</li>
      </ul>
      <h2 id="sovgani-allaqachon-hamyonga-chiqargan-bolsangiz">What if you’ve already moved your gift to a wallet?</h2>
      <p>There’s no reason to worry. Card decoration isn’t confirmed, so there’s no such thing as a gift “in the wrong place.” You used an officially supported path.</p>
      <p>For now, pay attention to the following:</p>
      <ul>
        <li>make sure your recovery phrase is stored offline, somewhere only you know;</li>
        <li>check whether you can return the gift to Telegram or set it as a status only in the app itself;</li>
        <li>don’t trust bots or people offering to “return your gift to your profile” or “link it to your card.”</li>
      </ul>
      <p>If card decoration is announced later, you’ll decide based on its terms. No extra action is needed now.</p>
      <h2 id="erta-kirish-va-bezakni-yoqish">Which signs are dangerous in “early access” and “enable the design” offers?</h2>
      <p>Around any new concept, bots and links promising a “beta test,” “early access” or “decorate your card now” can pop up quickly. Most of them are after your recovery phrase or your gift.</p>
      <p>Red flags:</p>
      <ul>
        <li>you’re asked for a recovery phrase (seed phrase), SMS code or password;</li>
        <li>you’re told to transfer the gift to another account or wallet “for verification”;</li>
        <li>they promise a feature not mentioned on <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org</a> or <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>;</li>
        <li>there’s pressure: “today only,” “limited spots.”</li>
      </ul>
      <Notice label={"Important"}>New Telegram features arrive with app updates. No third party can “switch one on” for you separately.</Notice>
      <p>StarsPaymee doesn’t buy Stars or gifts from users. If such an offer comes in its name, it’s fake. If something seems off, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <h2 id="elon-chiqqanini-qayerdan-bilasiz-va">How will you know an announcement is out, and when should you decide?</h2>
      <p>Look for confirmation in two places: the <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blog</a> and <a href={"https://ton.org/"} target="_blank" rel="noopener noreferrer">ton.org</a>. Channel posts are useful for keeping up with the topic, but they don’t count as confirmation.</p>
      <p>If card decoration really launches, the announcement will spell out the terms: whether the gift needs to be in Telegram or in a wallet, and which attributes are used. That’s when you decide whether to move it out or keep it, based on the actual terms.</p>
      <p>Until then, you can keep your gift in Telegram and use it as a status and chat background. You can also follow news on the <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> channel, but always verify the final word with an official source.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://ton.org/", label: "TON — The Leading L1 Blockchain" },
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://telegram.org/blog/profile-music-gift-themes", label: "Music on Profiles, Stickers Mini App, New Profiles, and More" },
          { href: "https://telegram.org/blog/welcome-messages-buttons-TG-13", label: "Welcome Messages, Buttons in Messages and Signed Gifts" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I put a gift pattern on my wallet card like in the image I saw in a channel?", answer: "Not for now: that image is a sketch, and neither Telegram nor TON has announced it as a feature. Confirmed gift decoration only covers your profile status and private chat backgrounds." },
  { question: "Can an NFT gift moved to a wallet still be set as my status?", answer: "That isn’t confirmed in this article. Before moving a gift out, read the conditions the Telegram app shows you and decide based on them." },
  { question: "If my gift stays in my profile, will I miss out when card decoration launches?", answer: "Nobody can say for sure right now, because neither the feature nor its terms have been announced. Waiting for the official rules is more reliable than moving a gift out on a guess." },
  { question: "I have a regular gift. Can it be used as a status or chat background too?", answer: "Telegram’s announcements describe status and chat backgrounds using collectible gifts, built from their model, backdrop and symbol. Check in the app whether this works for your regular gift." },
  { question: "I want different backgrounds in three chats. Is one gift enough?", answer: "No. Under Telegram’s rules, one gift unlocks one theme for one chat, so three chats need three collectible gifts." },
  { question: "I don’t have a crypto wallet. Can I buy an NFT gift in soums?", answer: "Yes. In the NFT Market of @StarsPaymee_bot you pay in soums, and only the recipient’s @username is required." },
  { question: "Where will I find a collectible gift bought through the bot?", answer: "It lands in the gift list of the Telegram profile whose @username was entered in the order. From there you can set it as your status or as a chat background." },
  { question: "Can I swap the Gram in my wallet for Stars and vice versa?", answer: "They’re separate things: Gram is a coin on the TON blockchain, and Stars are stars used inside Telegram. Neither is a balance of the other, and you don’t need a wallet to get Stars." },
  { question: "If I buy a rare collectible that might suit card decoration, will I profit?", answer: "There’s no way to know in advance: the feature is unconfirmed, and so is which attributes it would use. It’s safer to choose a collectible because you like how it looks as a status or chat background today." },
  { question: "Someone offers to add my card to a “beta test” and asks for my seed phrase. Should I share it?", answer: "No. Whoever has your seed phrase gets full control of the wallet, so send nothing and block the account. New Telegram features arrive through app updates." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["gram hamyon kartasini bezash","gram wallet karta dizayni","nft sovga hamyonga chiqarish","telegram sovga bilan profilni bezash","kolleksion sovga status qilish","telegram nft sovga chat mavzusi","украсить кошелек подарками telegram","кастомизация gram кошелька","карточка кошелька подарок telegram","вывести подарок в ton кошелек","nft подарок статус профиль"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_botga kiring va NFT Market bo‘limini tanlang." },
    { name: "Nusxani tanlang", text: "model, fon va belgini ko‘ring. Status yoki chat fonida qanday ko‘rinishini oldindan tasavvur qiling." },
    { name: "Qabul qiluvchini kiriting", text: "faqat @username kerak. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi." },
    { name: "So‘mda to‘lang", text: "Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd ham), UzCard/HUMO kartaga o‘tkazma yoki bot balansi orqali. Xalqaro karta, kripto hamyon yoki VPN kerak emas." },
    { name: "Profilda tekshiring", text: "sovg‘a tushgach, uni status qilib qo‘ying yoki kerakli chatga fon sifatida o‘rnating." },
  ],
  locales: {
    uz: {
      title: "Gram hamyon kartasini bezash: NFT sovg‘ani hozir hamyonga chiqarish kerakmi?",
      excerpt: "Yo‘q, Gram hamyon kartasini sovg‘a bilan bezash hali rasmiy funksiya emas, shuning uchun NFT sovg‘ani hozir chiqarish shart emas. Maqolada bugungi bezak yo‘llari va so‘mda xarid tartibi bor.",
      metaTitle: "Gram hamyon kartasini bezash",
      metaDescription: "Yo‘q, Gram hamyon kartasini sovg‘a bilan bezash hali rasmiy funksiya emas, shuning uchun NFT sovg‘ani hozir chiqarish shart emas.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Подарок на карте Gram Wallet: нужно ли сейчас выводить NFT в кошелёк?",
      excerpt: "Нет, оформление карты Gram-кошелька подарком пока не официальная функция, поэтому выводить NFT-подарок сейчас не нужно. В статье — рабочие способы украсить профиль и покупка подарка за сумы.",
      metaTitle: "Подарок на карте Gram Wallet",
      metaDescription: "Нет, оформление карты Gram-кошелька подарком пока не официальная функция, поэтому выводить NFT-подарок сейчас не нужно.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Decorating Your Gram Wallet Card: Should You Move an NFT Gift There Now?",
      excerpt: "Gift-themed Gram Wallet cards are only a sketch so far. Here’s what a collectible can officially decorate today, when moving it to TON makes sense, and how to buy one in soums.",
      metaTitle: "Decorating Your Gram Wallet Card",
      metaDescription: "Gift-themed Gram Wallet cards are only a sketch so far. Here’s what a collectible can officially decorate today, when moving it to TON makes sense, and how to…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
