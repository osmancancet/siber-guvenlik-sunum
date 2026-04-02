# Siber Güvenlik Farkındalık Etkinliği — Konuşma Metni

> **Toplam süre:** ~100 dakika (34 slide × ~3 dk)
> **Hedef kitle:** 350 üniversite öğrencisi (Simav MYO)
> **Sunum adresi:** https://sunum-nu.vercel.app

---

## AÇILIŞ

### Slide 1: Kapak (~3 dk)

"Herkese merhaba, hoş geldiniz. Ben Osman Can Çetlenbik, Simav Meslek Yüksekokulu'nda öğretim görevlisiyim. Bilgisayar mühendisiyim ve bugün sizinle çok kritik bir konuyu konuşacağız — siber güvenlik farkındalığı.

Şunu en baştan söyleyeyim: Bu sunum sizi 'hacker' yapmak için değil, 'hacklenmeyen' bireyler yapmak için buradayız. Bugün öğreneceğiniz bilgiler sadece sizin değil, ailelerinizin, arkadaşlarınızın da parasını, kimliğini ve güvenliğini koruyacak.

Size bir sorum var — kaçınız bugüne kadar hiç şüpheli bir SMS aldı? Sahte kargo, sahte banka mesajı? Hemen hemen herkes değil mi? İşte bunların arkasında ne olduğunu bugün birlikte göreceğiz."

---

### Slide 2: İstatistikler (~3 dk)

"Şimdi rakamlarla başlayalım — ve bu rakamlar sizi şaşırtacak.

Türkiye'de günde 1.2 milyon siber saldırı girişimi yapılıyor. Günde! Bu odada oturduğunuz sürede bile yüzlerce saldırı gerçekleşti.

Kaspersky'nin 2025 raporuna göre, Türkiye'deki kullanıcıların yüzde 26'sı çevrimiçi tehditlerle karşılaşıyor — bu oran bölgenin en yükseği.

Şubat 2026'da tek bir veri sızıntısında — IDMerit olayında — 49 milyon Türk vatandaşının kimlik bilgileri açığa çıktı. 49 milyon! Bu odadaki herkesin bilgileri muhtemelen zaten sızdırılmış durumda.

Ve deepfake vakaları — yapay zekayla üretilen sahte ses ve görüntüler — yıllık yüzde 900 arttı. Bu neredeyse 10 kat demek.

Bu rakamlar korkutucu, biliyorum. Ama korkutucu olan asıl şey, bunları bilmemek."

---

### Slide 3: Açılış Sözü (~2 dk)

"Kevin Mitnick diye bir isim duymuşsunuzdur belki. Dünyanın en ünlü hackerlarından biriydi. FBI tarafından en çok aranan listesindeydi bir zamanlar. Yakalandıktan sonra güvenlik danışmanı oldu ve bir şey söyledi:

'En güçlü güvenlik duvarı bile, içerideki biri kapıyı açarsa işe yaramaz.'

Bu cümle bugünkü sunumun özeti. Saldırganlar sistemi değil, sizi hedef alıyor. Çünkü insan, güncellenemeyen tek zafiyettir. Yazılımı güncellersiniz, ama insanın korkusunu, açgözlülüğünü, merakını güncelleyemezsiniz."

---

## BÖLÜM 1: OLTALAMA SALDIRILARI

### Slide 4: Bölüm Kapağı — Oltalama (~1 dk)

"Şimdi en yaygın siber saldırı türüyle başlıyoruz — oltalama. İngilizce 'phishing' deniyor.

Neden buradan başlıyoruz? Çünkü bu odadaki herkes — evet herkes — en az bir kez oltalama saldırısıyla karşılaşmıştır. SMS, e-posta, telefon araması... Saldırganların en sevdiği silah budur."

---

### Slide 5: Oltalama Türleri (~3 dk)

"Dört ana oltalama türü var:

Birincisi, e-posta oltalama. CEO'dan geliyormuş gibi görünen sahte e-postalar. 'Acil ödeme yapın, kimseye söylemeyin.' Korku ve aciliyet yaratarak sizi düşünmeden hareket ettirmeye çalışıyorlar.

İkincisi, smishing — SMS ile oltalama. 'Kargonuz bekliyor, linke tıklayın.' Bu en yaygın olanı. Birazdan gerçek bir örneğini göreceğiz.

Üçüncüsü, typosquatting — alan adı sahteciliği. garantibbva.com.tr yerine garanti-bbva-giris.com yazıyorlar. Gözle farkı göremezsiniz.

Dördüncüsü, vishing — telefon ile oltalama. Sahte polis, sahte savcı, sahte banka müdürü. Bu Türkiye'de en çok para kaybettiren yöntem."

---

### Slide 6: Sahte Mesaj Örnekleri (~3 dk)

"Şimdi gerçek örneklere bakalım.

Soldaki, sahte bir CEO e-postası. Gönderen adresine bakın: 'ceo@hoIding-onay.xyz'. Bu şirketin gerçek domaini değil. Ve dikkat edin — 'beni sakın aramayın' diyor. Neden? Çünkü ararsanız gerçek CEO'nun haberi olmadığını anlarsınız. Teyit almayı engelliyor.

Sağdaki, sahte kargo SMS'i. 'Kargonuz gümrükte, 24.90 TL ödeyin.' Link'e tıklarsanız birebir PTT'ye benzeyen sahte bir siteye yönlendirilirsiniz. Kart bilgilerinizi girersiniz... ve 24 TL yerine 24.000 TL çekilir.

Kural basit: Kargo firmaları SMS ile ödeme linki göndermez. Gerçek PTT sitesi ptt.gov.tr'dir — başka hiçbir adres değil."

---

### Slide 7: Sahte Banka Sayfası (~3 dk)

"Bu ekranda gördüğünüz, gerçek bir bankanın internet bankacılığı sayfasının birebir kopyası.

Adres çubuğuna bakın: 'garanti-bbva-giris.com'. Yeşil kilit simgesi bile var — çünkü SSL sertifikası almak bedava. Kilit simgesi sitenin güvenli olduğu anlamına gelmiyor, sadece bağlantının şifreli olduğu anlamına geliyor.

TC Kimlik numaranızı ve şifrenizi buraya girerseniz, o bilgiler doğrudan saldırganın sunucusuna gider. Gerçek banka sitesi 'garantibbva.com.tr'dir.

Altın kural: Banka sitesine her zaman kendiniz yazarak girin. SMS'teki linke asla tıklamayın. Uygulamayı kullanın."

---

### Slide 8: QR Kod Tuzağı Deneyi (~5 dk)

"Şimdi bir deney yapacağız. Telefonlarınızı çıkarın.

Ekrandaki QR kodu tarayın. Evet, herkes tarasın — 350 kişi aynı anda. Merak etmeyin, güvenli... ya da öyle mi?

[Öğrenciler QR'ı tarıyor — telefonlarında sahte 'cihazınız ele geçirildi' ekranı beliriyor, terminal animasyonu oynuyor, kuru kafa çıkıyor, geri sayım başlıyor...]

Bakın telefonlarınıza — ne görüyorsunuz? 'Cihazınız ele geçirildi!' 'Tüm verileriniz çalındı!' Panik yaptınız mı?

[Geri sayım bittikten sonra 'RAHAT OLUN — bu bir farkındalık deneyiydi' ekranı çıkıyor]

İşte tam da bu! Az önce yaşadığınız o 10 saniyelik panik — dolandırıcıların istediği tam olarak bu. Sizi düşünmeden hareket ettirmek. Bir QR kodu taradınız ve ne olacağını bilmeden tıkladınız.

2025'te QR kodlu oltalama saldırıları 5 kat arttı. Restoranlarda, otoparklarda, duraklarda — gerçek QR'ın üzerine sahte sticker yapıştırılıyor. Bu yüzden QR taramadan önce URL'yi mutlaka kontrol edin."

---

### Slide 9: Quiz (~3 dk)

"Şimdi sizi test ediyorum. Ekrandaki 4 e-posta adresinden hangisi sahte?

[5 saniye bekleme — sonra otomatik cevap gösterilir]

Cevap C — guvenlik@garanti-bbva-destek.com. Gerçek Garanti adresi garantibbva.com.tr'dir. Saldırganlar güvenilir görünen ama gerçek olmayan domain'ler kullanır.

Dikkat edin: destek@garanti.com.tr ile garanti-bbva-destek.com arasındaki fark sadece birkaç harf. Ama bu birkaç harf, hesabınızın boşaltılıp boşaltılmaması arasındaki fark."

---

### Slide 10: Kargo SMS Simülasyonu (~3 dk)

"Şimdi ekranda bir simülasyon izleyeceksiniz — sahte kargo SMS tuzağının nasıl çalıştığını adım adım göreceksiniz.

[Simülasyon otomatik oynuyor]

Bakın — önce SMS geldi: 'Kargonuz teslim edilemedi, 24 TL ödeyin.' Masum görünüyor değil mi?

Şimdi linke tıklandı — birebir MNG Kargo'ya benzeyen sahte site açıldı. 'Borç: 24 TL.' Ödeme yap butonuna basıldı.

Ve işte tuzak! 3D Secure SMS'i geldi ama bakın — SMS'te '24 TL' değil, '24.500 TL' yazıyor! Onay kodunu okumadan girdiniz ve 24 bin 500 TL çekildi.

Ders çok basit: Bankadan gelen onay SMS'indeki TUTARI mutlaka okuyun. Sadece şifreye bakmayın, tutara bakın."

---

## BÖLÜM 2: ŞİFRE GÜVENLİĞİ

### Slide 11: Bölüm Kapağı — Şifreler (~1 dk)

"Şimdi şifre güvenliğine geçiyoruz. Bir soruyla başlayalım — kaçınız birden fazla hesapta aynı şifreyi kullanıyor? Dürüst olun.

Tek şifre kullanmak domino etkisi yaratır. Bir site hacklenirse, o şifreyle girebildiğiniz tüm hesaplar düşer — e-posta, banka, sosyal medya, e-Devlet."

---

### Slide 12: Şifre Kırma Simülasyonu (~3 dk)

"Ekranda bir brute-force — kaba kuvvet — saldırı simülasyonu izleyeceksiniz. Saldırgan şifrenizi kırmaya çalışıyor.

[Simülasyon otomatik oynuyor — 123456 anında kırılıyor, ankara06 0.3 saniyede, Kalem42! 7 dakikada...]

Bakın — '123456' anında kırıldı. Bu Türkiye'de en çok kullanılan şifre. 'ankara06' 0.3 saniyede gitti. 'Kalem42!' 7 dakika sürdü — yani kahve molası kadar.

Ama bakın — 12 karakterli karışık şifre? 3.000 yıl! Ve cümle şifre — 'BenSimavdaYasiyorum!' — sonsuz!

Çözüm: 12+ karakter, harf-rakam-sembol karışık. Ya da daha iyisi — cümle şifre kullanın. Hatırlaması kolay, kırılması imkansız."

---

### Slide 13: İki Faktörlü Doğrulama (~3 dk)

"Güçlü şifre yetmez. İki faktörlü doğrulama — 2FA — şart.

Ama dikkat: SMS ile 2FA riskli. Neden? SIM Swap saldırısı. Saldırgan sizin TC bilgilerinizle operatöre gidip yeni SIM çıkartıyor. Artık SMS'leriniz ona gidiyor. Banka onay kodunuz dahil.

Güvenli olan Authenticator uygulaması — Google Authenticator veya Microsoft Authenticator. Kod cihazınızdan çıkmaz. SIM Swap'a karşı bağışık. 30 saniyede değişiyor.

Bu akşam — evet bugün akşam — tüm hesaplarınıza Authenticator uygulaması kurun. E-posta, sosyal medya, banka... hepsi."

---

## BÖLÜM 3: SOSYAL MÜHENDİSLİK

### Slide 14: Bölüm Kapağı — Sosyal Mühendislik (~1 dk)

"Sosyal mühendislik — bu terim kulağa teknik geliyor ama aslında çok basit: İnsanları kandırma sanatı.

Saldırganlar sistemi hacklemez. Sizi hackler. Çünkü en zayıf halka her zaman insandır. Ve insanın korkusu, açgözlülüğü, merakı — bunlar 'güncellenemeyen zafiyet'lerdir."

---

### Slide 15: Saldırganın Silahları (~3 dk)

"Sosyal mühendisliğin 4 ana silahı var:

Otorite baskısı: 'Ben komiserim, hesabınız terör soruşturmasında.' Kim bir komisere 'hayır' diyebilir? Ama gerçek komiser sizi telefonda para transferi yapmaya zorlamaz.

Aciliyet: 'Son 15 dakika! Hemen işlem yapın!' Aciliyet mantığınızı devre dışı bırakır. Düşünmenize fırsat vermezler.

Korku: 'Eşiniz tutuklanacak, derhal parayı poşete koyun.' Korku beyninizin 'otopilot' modunu tetikler — düşünmeden hareket edersiniz.

Açgözlülük: 'Tebrikler! 50.000 TL kazandınız!' Bedava bir şey yok. Kazandığınızı iddia eden her mesaj tuzaktır.

Bu 4 silahı tanıyın — tanıdığınız an etkisiz hale gelirler."

---

### Slide 16: Altın Kural (~2 dk)

"Bu cümleyi lütfen bir yere yazın. Telefonunuzun notlarına, masanıza, buzdolabınıza:

DEVLET ASLA TELEFONDA PARA, ALTIN VEYA ŞİFRE İSTEMEZ.

Bu kadar basit. Savcı aramaz ve para istemez. Komiser aramaz ve altınlarınızı poşete koymanızı söylemez. Banka müdürü aramaz ve kart bilginizi istemez.

Bu cümleyi ailelerinize de öğretin. Özellikle annelerinize, babalarınıza, büyükannelerinize. Bu cümle hayat kurtarır — gerçekten, kelimenin tam anlamıyla hayat kurtarır. Mart 2026'da Gaziantep'te bir vatandaş sahte savcıya 6 milyon TL değerinde altın ve mücevher verdi."

---

### Slide 17: Güncel Örnekler (~3 dk)

"Bunlar hayal ürünü değil — bunlar son birkaç aydaki gerçek olaylar:

Mart 2026, Gaziantep: Sahte savcı, 'adınız terör soruşturmasına karıştı' diyerek 6 milyon TL değerinde altın ve mücevher aldı. Otorite baskısı + korku kombinasyonu.

Aralık 2025, Sakarya: Telefonda polis ve savcı rolü yapan dolandırıcılar 3.5 milyon TL çekti. Tek bir günde, tek bir şehirde.

Deepfake ses klonlama vakaları yüzde 900 arttı. Artık 3 saniyelik bir ses kaydıyla — mesela Instagram hikayenizden — sesiniz birebir kopyalanabiliyor.

Ve Şubat 2026'da IDMerit veri sızıntısı — 49 milyon kişinin TC kimlik bilgileri açığa çıktı. Muhtemelen sizinki de dahil."

---

## BÖLÜM 4: YAPAY ZEKA TEHDİTLERİ

### Slide 18: Bölüm Kapağı — Yapay Zeka (~1 dk)

"Yapay zeka devrimi sadece ChatGPT'den ibaret değil. Saldırganlar da yapay zekayı kullanıyor — ve çok etkili kullanıyor.

Deepfake, ses klonlama, kişiye özel otomatik dolandırıcılık mesajları... Artık 'yazım hatası varsa sahtedir' kuralı geçersiz. Yapay zeka kusursuz Türkçe yazıyor."

---

### Slide 19: WhatsApp Dolandırıcılığı Simülasyonu (~3 dk)

"Ekranda bir WhatsApp dolandırıcılık simülasyonu izleyeceksiniz.

[Simülasyon otomatik oynuyor — mesajlar tek tek beliriyor]

Bakın — yabancı bir numaradan mesaj geliyor: 'Google şirketinden arıyoruz, video beğenerek para kazanın.' Kulağa güzel geliyor değil mi? İlk görev ücretsiz.

Mesajlaşma devam ediyor... ve 250 TL 'kazandınız.' Ama çekmek için 5.000 TL teminat isteniyor.

Ve bakın — linke tıklandığı an GhostPairing saldırısı! WhatsApp hesabınız ele geçirildi. Şifre bile gerekmedi.

WhatsApp 2025'in ilk 6 ayında 6.8 milyon dolandırıcılık hesabını kapattı. Yabancı numaralardan gelen mesajlara asla yanıt vermeyin."

---

## BÖLÜM 5: BAHİS & VERİ PANELLERİ

### Slide 20: Bölüm Kapağı — Bahis (~1 dk)

"Bu bölüm özellikle sizin yaş grubunuz için çok önemli. Üniversitelilerin yüzde 40'ı yasadışı bahis sitelerini kullanıyor. Bu rakam gerçek ve çok üzücü.

'Kolay para' vaadi — her zaman pahalı bir dersle sonuçlanır."

---

### Slide 21: Yasadışı Bahis ve Kripto (~3 dk)

"Instagram ve TikTok'ta 'garantili kupon', 'bedava bonus' reklamları görüyorsunuz. Bunların hepsi tuzak.

İlk başta kazandırırlar — ufak miktarlar. Güveninizi kazanmak için. Sonra büyük miktarlar yatırmanızı isterler. Ve kazandığınızı çekemezsiniz. Sahte bonuslar, çekim engelleri, hesap dondurma.

Mart 2026'da Gaziantep'te sahte yatırım sitesiyle 2.3 milyar TL'lik vurgun yapıldı. 2.3 milyar!

Ve IBAN kiralama — 'hesabınızı kiraya verin, 500 TL kazanın' diyen teklifler. Bunu yaparsanız kara para aklama suçunun faili SİZ olursunuz. 3-7 yıl hapis cezası.

2025'te tek bir yasadışı bahis altyapısında 26 milyar TL ciro tespit edildi. Bu para kripto ile yurt dışına aktarılıyor."

---

### Slide 22: Bahis İstatistikleri (~2 dk)

"Rakamlar konuşsun:

Tek bir operasyonda 26 milyar TL ciro tespit edildi. Bu Türkiye'nin bazı şehirlerinin yıllık bütçesinden fazla.

Uzun vadede bahis oynayanların yüzde 94'ü kaybeder. Yüzde 94! Kasa her zaman kazanır — bu matematiksel bir gerçek.

Hapis cezası: 7258 sayılı kanuna göre 3 ila 7 yıl. Sadece oynamak bile suç.

Ve üniversitelilerde yaygınlık yüzde 40. Bu odada 350 kişi var — istatistiksel olarak 140'ınız en az bir kere denemiş."

---

### Slide 23: Veri Panelleri (~3 dk)

"Veri sorgulama panelleri — bunlar Telegram gruplarında aylık abonelikle satılıyor. TC kimlik numaranızı giriyorsunuz, karşınıza isim, adres, telefon, aile bilgileri çıkıyor.

Bu veriler nereden geliyor? Veri sızıntılarından. 2026'da IDMerit'ten 49 milyon, Şikayetvar'dan 212 bin, Baydöner'den 1.5 milyon, TurkNet'ten 2.8 milyon kayıt sızdırıldı.

Bu bilgiler nasıl kullanılıyor? Sahte polis sizi arar ve adınızı, adresinizi, eşinizin adını bilir. 'Vay, bilgilerimi biliyor, gerçek olmalı' diye düşünürsünüz. HAYIR! Bu bilgiler panellerden alınmış.

Bilgilerinizi bilen biri sizi arıyorsa — bu onun gerçek olduğu anlamına gelmez. Bu bilgiler herkesin satın alabileceği panellerden alınmıştır."

---

### Slide 24: Ponzi Simülasyonu (~3 dk)

"Ekranda görev dolandırıcılığının nasıl çalıştığını izleyeceksiniz.

[Simülasyon otomatik oynuyor]

Bakın — WhatsApp'tan 'video beğenerek para kazan' teklifi geldi. Katıldınız.

Bakiye yükseliyor — 50, 100, 150, 200, 250 TL. Gerçekten kazanıyorsunuz gibi görünüyor!

Ve tuzak: '250 TL kazandınız! Çekmek için 20.000 TL teminat yatırın.'

Bu klasik Ponzi tuzağı. İlk 250 TL 'olta yemi'dir. Asıl hedef sizden 20.000 TL almak. İş veren para istemez — öder! Bu cümleyi unutmayın."

---

## BÖLÜM 6: SİBER ZORBALIK

### Slide 25: Bölüm Kapağı — Siber Zorbalık (~1 dk)

"Şimdi çok önemli ve hassas bir konuya geçiyoruz — siber zorbalık.

Ekranın arkasında da gerçek insanlar var. Yazdığınız her kelime, paylaştığınız her görsel, bir insanın hayatını etkileyebilir."

---

### Slide 26: Siber Zorbalık İstatistikleri (~2 dk)

"TÜBİTAK destekli TAÇEP araştırmasına göre — bu Türkiye çapında 5 bin çocuk ve ergenle yapılan bir araştırma:

Her 2 çocuktan biri zorbalık yapıyor. Her 4 çocuktan 3'ü zorbalığa uğruyor.

7/24 devam ediyor. Eskiden zorbalık okul çıkışında biterdi. Şimdi evde bile devam ediyor — sosyal medya, WhatsApp grupları, oyun içi chat.

Ve hapis cezası: 5 yıl ve üzeri. İzinsiz fotoğraf paylaşmak, sürekli taciz mesajları göndermek, sahte hesapla karalama kampanyası yürütmek — bunların hepsi suç."

---

### Slide 27: Ne Yapmalı? (~3 dk)

"İki senaryo var — ya mağdursunuz ya tanıksınız.

Mağdursanız: İlk iş ekran görüntüsü alın. Bu delildir. Sonra engelleyin ve platforma şikayet edin. ALO 182'yi arayın — Siber Suç İhbar hattı. Ve psikolojik destek almaktan çekinmeyin. Bu bir zayıflık değil, güçtür.

Tanıksanız: Sessiz kalmayın. Sessizlik onay demektir. Mağdura destek olun. Zorbalığı paylaşmayın, beğenmeyin — paylaşmak zorbalığı büyütmek demektir. Ve yetkiliye bildirin.

Unutmayın — bir gün siz de mağdur olabilirsiniz. Bugün sessiz kalırsanız, yarın sizin için de kimse konuşmaz."

---

## BÖLÜM 7: KENDİNİZİ KORUYUN

### Slide 28: Bölüm Kapağı — Korunma (~1 dk)

"Son bölümümüz — ve en önemlisi. Çünkü bilmek yetmez, uygulamak lazım.

Bugün uygulayabileceğiniz, 5 dakikanızı alacak somut adımlar vereceğim."

---

### Slide 29: Wi-Fi ve SIM Swap (~3 dk)

"İki büyük tehlike:

Birincisi, halka açık Wi-Fi. Kafe, otel, havaalanı — bu ağlara bağlanınca tüm trafiğiniz izlenebilir. 'Şeytani İkiz' saldırısı deniyor — saldırgan 'Starbucks_WiFi' adında sahte bir ağ kuruyor. Bağlanıyorsunuz ve şifreleriniz çalınıyor.

Halka açık ağda banka uygulaması açmak demek, kredi kartı bilgilerinizi teslim etmek demektir.

İkincisi, SIM Swap. Telefonunuz aniden 'SIM kayıtlı değil' derse — alarm verin! Bu, saldırganın sizin TC bilgilerinizle operatörden yeni SIM çıkardığı anlamına gelir. Artık SMS'leriniz ona gidiyor.

Çözüm: VPN kullanın. Hassas işlemleri mobil veriyle yapın. SMS yerine Authenticator kullanın."

---

### Slide 30: Cihaz Kontrolü (~3 dk)

"Şimdi telefonlarınızı çıkarın — gerçekten çıkarın.

Sol tarafta: Konum geçmişinize bakın. iPhone'da Ayarlar → Gizlilik → Konum Servisleri → Önemli Konumlar. Android'de Google Maps → Zaman Tüneli.

Ne görüyorsunuz? Google ve Apple son 2 yılda gittiğiniz her yeri kaydediyor. Her restoran, her ev, her otel. Bu veri sızarsa, saldırgan sizi tanıdığınızdan daha iyi tanır.

Sağ tarafta: Uygulama izinlerine bakın. Fener uygulamanız kameraya, mikrofona, konuma erişiyor mu? Neden?! Hesap makineniz rehberinizi ve SMS'lerinizi okuyor mu? Bu casus yazılım!

Ayarlar → Uygulamalar → İzinler. Şimdi, hemen bakın."

---

### Slide 31: 5 Dakikada 5 Adım (~3 dk)

"Bu akşam — evet, bugün akşam — yapmanız gereken 5 şey:

Bir: Tüm hesaplarınıza 2FA açın. Google Authenticator indirin, e-posta, Instagram, banka — hepsini bağlayın.

İki: Aynı şifreyi kullanan hesapları değiştirin. Bitwarden veya KeePass gibi ücretsiz bir şifre yöneticisi kurun.

Üç: e-Devlet'e girin — turkiye.gov.tr — adınıza açılmış şirket veya telefon hattı var mı kontrol edin. IDMerit sızıntısından sonra çok kişinin adına şirket açıldı.

Dört: Sosyal medya gizliliğinizi 'Private' yapın. Konum paylaşımını kapatın.

Beş: Ailenize bir güvenlik parolası belirleyin. Telefonda para isteyen biri ararsa — 'parolamız ne?' diye sorun. Gerçekten ailenizse bilir. Değilse... o parolayı bilemez."

---

### Slide 32: 3 Saniye Kuralı (~2 dk)

"Bugünkü sunumun en önemli mesajı bu:

3 SANİYE KURALI.

Bir link tıklamadan önce, bir bilgi vermeden önce, bir QR taramadan önce — 3 saniye durun ve kendinize şunu sorun:

'Bu benim düşüncem mi, yoksa birisi bana bunu düşündürtüyor mu?'

Aciliyet mi hissediyorum? Kim yarattı bu aciliyeti? Korku mu hissediyorum? Kim yarattı bu korkuyu? Heyecan mı hissediyorum? Bu heyecan gerçek mi?

3 saniye. Sadece 3 saniye. Bu kadar basit. Ama bu 3 saniye, binlerce lira, kimliğiniz ve güvenliğiniz arasındaki farktır."

---

## KAPANIŞ

### Slide 33: Simülasyonları Deneyin (~3 dk)

"Ekrandaki QR kodu tarayın. Bu sizi 30 interaktif dolandırıcılık simülasyonuna götürecek — hackleme-sanati.vercel.app.

Sahte banka sayfaları, e-Devlet tuzakları, kargo dolandırıcılığı, QR kod tuzakları... hepsini güvenli bir ortamda deneyimleyebilirsiniz.

Her senaryonun sonunda size 'nereye dikkat etmelisiniz' ve 'nasıl korunursunuz' bilgisi veriliyor.

Bunu arkadaşlarınızla, ailelerinizle paylaşın. Özellikle büyüklerinizle — anneanneniz, dedeniz. Onlar en savunmasız hedefler."

---

### Slide 34: Teşekkürler ve Kapanış (~3 dk)

"Bugün çok şey konuştuk — oltalama, şifre güvenliği, sosyal mühendislik, yapay zeka tehditleri, yasadışı bahis, siber zorbalık ve korunma yöntemleri.

En önemli 3 şeyi tekrar edeyim:
1. Devlet asla telefonda para istemez.
2. Her hesaba farklı şifre + Authenticator 2FA.
3. 3 saniye kuralı — dur, düşün, sonra tıkla.

QR kodları tarayarak beni LinkedIn ve Instagram'dan takip edebilirsiniz. Simülasyonlar sitesini de mutlaka deneyin.

Sorularınız varsa hazırım. Teşekkür ederim!"

---

## NOTLAR

### Zamanlama İpuçları
- **Açılış (Slide 1-3):** ~8 dk — enerjik başla, göz teması kur
- **Oltalama (Slide 4-10):** ~25 dk — en uzun bölüm, QR deneyi burada
- **Şifreler (Slide 11-13):** ~7 dk — pratik ve hızlı
- **Sosyal Müh. (Slide 14-17):** ~9 dk — hikaye anlatımı ağırlıklı
- **Yapay Zeka (Slide 18-19):** ~4 dk — kısa ve çarpıcı
- **Bahis (Slide 20-24):** ~12 dk — öğrencilere en yakın konu
- **Zorbalık (Slide 25-27):** ~6 dk — hassas, empati ile
- **Korunma (Slide 28-32):** ~12 dk — aksiyona yönelik
- **Kapanış (Slide 33-34):** ~6 dk — QR taratma + soru-cevap
- **Toplam:** ~89 dk + 10 dk soru-cevap = ~100 dk

### Sunum Teknikleri
- **QR Tuzağı (Slide 8):** En etkili an — 350 kişi aynı anda tarasın, panik anını kullanın
- **Simülasyonlar:** Otomatik oynuyor — sadece anlatın, tıklamaya gerek yok
- **İstatistikler:** Rakamları yavaş söyleyin, etkisini hissettirin
- **Altın Kural (Slide 16):** Hep bir ağızdan tekrar ettirin
- **5 Adım (Slide 31):** "Bu akşam" vurgusunu sık yapın
- **Kapanış:** Enerjiyi düşürmeyin, son cümle güçlü olsun
