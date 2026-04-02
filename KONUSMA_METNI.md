# Siber Güvenlik Farkındalık Etkinliği — Konuşma Metni

> **Toplam:** ~110 dk (37 slide × ~3 dk)
> **Sunum:** https://sunum-nu.vercel.app
> **Navigasyon:** Sağ ok / Space = ileri, Sol ok = geri, F = tam ekran, 1-9 = bölüme atla

---

## AÇILIŞ

### Slide 1 — Kapak

Herkese merhaba, hoş geldiniz. Ben Osman Can Çetlenbik. Manisa Celal Bayar Üniversitesi Teknik Bilimler Meslek Yüksekokulu'nda öğretim görevlisiyim. Bilgisayar mühendisiyim.

Bugün sizinle çok kritik bir konuyu konuşacağız: siber güvenlik farkındalığı. Bu sunum sizi hacker yapmak için değil, hacklenmeyen bireyler yapmak için hazırlandı. Bugün öğreneceğiniz bilgiler sadece sizin değil, ailelerinizin de parasını, kimliğini ve güvenliğini koruyacak.

Bir sorum var — kaçınız bugüne kadar şüpheli bir SMS aldı? Sahte kargo, sahte banka mesajı? Hemen hemen herkes. İşte bunların arkasında ne olduğunu birlikte göreceğiz.

---

### Slide 2 — İstatistikler

Rakamlarla başlayalım.

Türkiye'de günde 1 milyon 200 bin siber saldırı girişimi yapılıyor. Günde! Bu salonda oturduğunuz sürede bile yüzlerce saldırı gerçekleşti.

Kaspersky'nin 2025 raporuna göre Türkiye'deki kullanıcıların yüzde 26'sı çevrimiçi tehditlerle karşılaşıyor. Bu oran Orta Doğu ve Afrika bölgesinin en yükseği.

Şubat 2026'da IDMerit veri sızıntısında 49 milyon Türk vatandaşının kimlik bilgileri açığa çıktı. Bu salondaki herkesin bilgileri muhtemelen zaten sızdırılmış durumda.

Ve deepfake vakaları — yapay zekayla üretilen sahte ses ve görüntüler — yıllık yüzde 900 arttı.

---

### Slide 3 — Açılış Sözü

"En güçlü güvenlik duvarı bile, içerideki biri kapıyı açarsa işe yaramaz."

Bu cümle bugünkü sunumun özeti. Saldırganlar sistemi değil, sizi hedef alıyor. Çünkü insan güncellenemeyen tek zafiyettir. Yazılımı güncellersiniz ama insanın korkusunu, açgözlülüğünü, merakını güncelleyemezsiniz.

---

## BÖLÜM 1: OLTALAMA

### Slide 4 — Bölüm Kapağı

En yaygın siber saldırı türüyle başlıyoruz: oltalama, İngilizce phishing. Neden buradan başlıyoruz? Çünkü bu salondaki herkes en az bir kez oltalama saldırısıyla karşılaşmıştır.

---

### Slide 5 — Oltalama Türleri

Dört ana tür var.

E-posta oltalama: CEO'dan geliyormuş gibi sahte e-postalar. Acil ödeme yapın, kimseye söylemeyin.

Smishing: SMS ile oltalama. Kargonuz bekliyor, linke tıklayın. En yaygın olanı.

Typosquatting: Alan adı sahteciliği. garantibbva.com.tr yerine garanti-bbva-giris.com. Gözle farkı göremezsiniz.

Vishing: Telefon ile oltalama. Sahte polis, sahte savcı. Türkiye'de en çok para kaybettiren yöntem.

---

### Slide 6 — Sahte Mesaj Örnekleri

Solda sahte CEO e-postası. Gönderen adresi "ceo@hoIding-onay.xyz" — şirketin gerçek domaini değil. "Beni sakın aramayın" diyor çünkü ararsanız gerçek CEO'nun haberi olmadığını anlarsınız.

Sağda sahte kargo SMS'i. 24.90 TL gümrük vergisi. Linke tıklarsanız birebir PTT'ye benzeyen sahte siteye gidersiniz. Kart bilgilerinizi girersiniz, 24 TL yerine 24 bin TL çekilir.

Kural basit: Kargo firmaları SMS ile ödeme linki göndermez.

---

### Slide 7 — Sahte Banka Sayfası

Gördüğünüz sayfa gerçek bankanın birebir kopyası. Adres çubuğundaki "garanti-bbva-giris.com" sahte. Yeşil kilit simgesi bile var çünkü SSL sertifikası almak bedava. Kilit sitenin güvenli olduğu anlamına gelmez.

Altın kural: Banka sitesine her zaman kendiniz yazarak girin. SMS'teki linke asla tıklamayın.

---

### Slide 8 — Canlı Deney

Şimdi bir deney yapacağız. Telefonlarınızı çıkarın. Bir sonraki ekranda bir QR kod göreceksiniz. Hepiniz tarayın. Bakalım ne olacak...

---

### Slide 9 — QR Tam Ekran

[Sessizce bekleyin. 350 öğrenci QR'ı tarıyor. Telefonlarında sahte "cihazınız ele geçirildi" ekranı beliriyor, terminal animasyonu, kuru kafa, geri sayım...]

Bakın telefonlarınıza! Ne görüyorsunuz? "Cihazınız ele geçirildi, tüm verileriniz çalındı!" Panik yaptınız mı?

[Geri sayım bittikten sonra "RAHAT OLUN" ekranı çıkıyor]

İşte tam da bu! O 10 saniyelik panik, dolandırıcıların istediği şey. Bir QR taradınız, ne olacağını bilmeden tıkladınız. 2025'te QR kodlu oltalama 5 kat arttı. Restoranlarda, otoparklarda gerçek QR'ın üzerine sahte sticker yapıştırılıyor.

---

### Slide 10 — Quiz

Dört e-posta adresinden hangisi sahte?

[5 saniye bekleyin, cevap otomatik gösterilir]

Cevap C: guvenlik@garanti-bbva-destek.com. Gerçek adres garantibbva.com.tr'dir. Birkaç harf fark — ama bu fark hesabınızın boşaltılması demek.

---

### Slide 11 — Kargo SMS Simülasyonu

[Simülasyon otomatik oynuyor]

Bakın: SMS geldi, 24 TL kargo borcu. Linke tıklandı, sahte site açıldı. Ödeme yapılıyor... Ama 3D Secure SMS'inde "24 TL" değil "24.500 TL" yazıyor! Onay kodunu okumadan girildi ve 24 bin 500 TL çekildi.

Ders: Bankadan gelen onay SMS'indeki tutarı mutlaka okuyun.

---

## BÖLÜM 2: ŞİFRE GÜVENLİĞİ

### Slide 12 — Bölüm Kapağı

Kaçınız birden fazla hesapta aynı şifreyi kullanıyor? Dürüst olun. Tek şifre domino etkisi yaratır. Bir site hacklenirse tüm hesaplarınız düşer.

---

### Slide 13 — Şifre Kırma Simülasyonu

[Simülasyon otomatik oynuyor — şifreler sırayla test ediliyor]

"123456" anında kırıldı. Türkiye'de en çok kullanılan şifre. "ankara06" yarım saniye. "Kalem42!" 7 dakika — kahve molası kadar.

Ama 12 karakterli karışık şifre? 3 bin yıl! Cümle şifre — "BenSimavdaYasiyorum!" — sonsuz!

12 karakter üstü, harf-rakam-sembol karışık. Ya da cümle şifre: hatırlaması kolay, kırılması imkansız.

---

### Slide 14 — İki Faktörlü Doğrulama

Güçlü şifre yetmez, 2FA şart. Ama SMS ile 2FA riskli. SIM Swap saldırısında saldırgan TC bilgilerinizle operatörden yeni SIM çıkartıyor, SMS'leriniz ona gidiyor.

Güvenli olan Authenticator uygulaması. Google veya Microsoft Authenticator. Kod cihazdan çıkmaz, 30 saniyede değişir.

Bu akşam tüm hesaplarınıza Authenticator kurun.

---

## BÖLÜM 3: SOSYAL MÜHENDİSLİK

### Slide 15 — Bölüm Kapağı

Sosyal mühendislik: insanları kandırma sanatı. Saldırganlar sistemi değil, sizi hackler. Çünkü en zayıf halka her zaman insandır.

---

### Slide 16 — Saldırganın Silahları

Dört silah var.

Otorite: "Ben komiserim, hesabınız terör soruşturmasında." Gerçek komiser telefonda para transferi yaptırmaz.

Aciliyet: "Son 15 dakika!" Düşünmenize fırsat vermezler.

Korku: "Eşiniz tutuklanacak!" Beyninizi otopilota alır.

Açgözlülük: "50 bin TL kazandınız!" Bedava bir şey yok.

Bu dört silahı tanıyın, tanıdığınız an etkisiz olurlar.

---

### Slide 17 — Altın Kural

Bu cümleyi telefonunuzun notlarına yazın:

DEVLET ASLA TELEFONDA PARA, ALTIN VEYA ŞİFRE İSTEMEZ.

Savcı aramaz ve para istemez. Komiser altınlarınızı poşete koymanızı söylemez. Banka müdürü kart bilginizi istemez.

Ailenize öğretin. Mart 2026'da Gaziantep'te bir vatandaş sahte savcıya 6 milyon TL değerinde altın verdi.

---

### Slide 18 — Güncel Örnekler

Bunlar son ayların gerçek olayları.

Mart 2026, Gaziantep: Sahte savcı 6 milyon TL değerinde altın ve mücevher aldı.

Aralık 2025, Sakarya: Sahte polis ve savcı 3.5 milyon TL çekti. Tek günde.

Deepfake ses klonlama yüzde 900 arttı. 3 saniyelik ses kaydıyla sesiniz birebir kopyalanıyor.

Şubat 2026: 49 milyon kişinin kimlik bilgileri sızdırıldı.

---

## BÖLÜM 4: YAPAY ZEKA TEHDİTLERİ

### Slide 19 — Bölüm Kapağı

Yapay zeka devrimi sadece ChatGPT değil. Saldırganlar da kullanıyor. Deepfake, ses klonlama, kişiye özel otomatik dolandırıcılık mesajları. Artık "yazım hatası varsa sahtedir" kuralı geçersiz.

---

### Slide 20 — WhatsApp Simülasyonu

[Simülasyon otomatik oynuyor — WhatsApp mesajları tek tek beliriyor]

Yabancı numaradan mesaj: "Google'da çalış, para kazan." İlk görev ücretsiz. 250 TL "kazandınız." Ama çekmek için 5 bin TL teminat isteniyor. Linke tıklandığı an hesabınız ele geçiriliyor — GhostPairing saldırısı.

WhatsApp 2025'te 6.8 milyon dolandırıcılık hesabı kapattı. Yabancı numaralardan gelen mesajlara yanıt vermeyin.

---

## BÖLÜM 5: BAHİS VE VERİ PANELLERİ

### Slide 21 — Bölüm Kapağı

Bu bölüm özellikle sizin yaş grubunuz için çok önemli. Üniversitelilerin yüzde 40'ı yasadışı bahis sitelerini kullanıyor. "Kolay para" vaadi her zaman pahalı dersle biter.

---

### Slide 22 — Yasadışı Bahis ve Kripto

Instagram ve TikTok'ta "garantili kupon", "bedava bonus" — hepsi tuzak. İlk başta kazandırırlar, güveninizi kazanırlar. Sonra büyük miktarlar isterler. Kazandığınızı çekemezsiniz.

IBAN kiralama: "Hesabını ver, 500 TL kazan." Bunu yaparsanız kara para aklama suçunun faili SİZ olursunuz. 3-7 yıl hapis.

2025'te tek bir bahis altyapısında 26 milyar TL ciro tespit edildi.

---

### Slide 23 — Bahis İstatistikleri

Tek operasyonda 26 milyar TL. Uzun vadede oynayanların yüzde 94'ü kaybeder. Hapis cezası 3-7 yıl. Üniversitelilerde yaygınlık yüzde 40.

Bu salonda 350 kişi var. İstatistiksel olarak 140'ınız en az bir kere denemiş.

---

### Slide 24 — Veri Panelleri

Telegram'da aylık abonelikle satılan paneller var. TC numaranızı giriyorsunuz, isim, adres, telefon, aile bilgileri çıkıyor. Veriler sızıntılardan geliyor: IDMerit 49 milyon, Şikayetvar 212 bin, Baydöner 1.5 milyon, TurkNet 2.8 milyon.

Sizi arayan biri bilgilerinizi biliyorsa bu onun gerçek olduğu anlamına gelmez. Bu bilgiler panellerden alınmış.

---

### Slide 25 — Ponzi Simülasyonu

[Simülasyon otomatik oynuyor]

WhatsApp'tan "video beğen, para kazan" teklifi. Katıldınız. Bakiye yükseliyor: 50, 100, 150, 200, 250 TL. Gerçekten kazanıyor gibisiniz!

Tuzak: "250 TL kazandınız! Çekmek için 20 bin TL teminat yatırın."

Klasik Ponzi. İlk 250 TL olta yemidir. İş veren para istemez, öder.

---

## BÖLÜM 6: SİBER ZORBALIK

### Slide 26 — Bölüm Kapağı

Hassas ve önemli bir konu. Ekranın arkasında gerçek insanlar var. Yazdığınız her kelime bir insanın hayatını etkileyebilir.

---

### Slide 27 — İstatistikler

TÜBİTAK araştırmasına göre her 2 çocuktan biri zorbalık yapıyor, her 4 çocuktan 3'ü zorbalığa uğruyor. 7/24 devam ediyor, evde bile. Hapis cezası 5 yıl ve üzeri.

---

### Slide 28 — Ne Yapmalı?

Mağdursanız: Ekran görüntüsü alın, engelleyin, ALO 182'yi arayın. Psikolojik destek almaktan çekinmeyin, bu zayıflık değil güçtür.

Tanıksanız: Sessiz kalmayın. Sessizlik onay demektir. Zorbalığı paylaşmayın, beğenmeyin. Yetkiliye bildirin.

---

## BÖLÜM 7: KENDİNİZİ KORUYUN

### Slide 29 — Bölüm Kapağı

Son bölüm ve en önemlisi. Bilmek yetmez, uygulamak lazım.

---

### Slide 30 — Wi-Fi ve SIM Swap

İki tehlike. Birincisi halka açık Wi-Fi. Kafe, otel, havaalanı. "Şeytani İkiz" saldırısı: saldırgan sahte "Starbucks_WiFi" kuruyor, bağlanıyorsunuz, şifreleriniz çalınıyor.

İkincisi SIM Swap. Telefonunuz "SIM kayıtlı değil" derse alarm verin. Saldırgan TC bilgilerinizle yeni SIM çıkarmış demek.

Çözüm: VPN kullanın, hassas işlemleri mobil veriyle yapın, SMS yerine Authenticator kullanın.

---

### Slide 31 — Cihaz Kontrolü

Telefonlarınızı çıkarın.

Konum geçmişinize bakın. iPhone: Ayarlar, Gizlilik, Konum, Önemli Konumlar. Android: Google Maps, Zaman Tüneli. Google son 2 yılda gittiğiniz her yeri kaydetmiş.

Uygulama izinlerini kontrol edin. Fener uygulaması kameraya erişiyor mu? Hesap makinesi rehberinizi okuyor mu? Bunlar casus yazılım belirtisi.

---

### Slide 32 — 5 Dakikada 5 Adım

Bu akşam yapmanız gereken 5 şey:

Bir: Tüm hesaplara 2FA açın, Authenticator indirin.
İki: Aynı şifreyi kullanan hesapları değiştirin, Bitwarden kurun.
Üç: e-Devlet'e girin, adınıza açılmış şirket veya hat var mı kontrol edin.
Dört: Sosyal medya gizliliğini Private yapın, konum kapatın.
Beş: Ailenize güvenlik parolası belirleyin.

---

### Slide 33 — 3 Saniye Kuralı

Bugünün en önemli mesajı:

Bir link tıklamadan, bir bilgi vermeden, bir QR taramadan önce 3 saniye durun ve sorun: "Bu benim düşüncem mi, yoksa birisi bana bunu düşündürtüyor mu?"

Aciliyet mi hissediyorum? Kim yarattı? Korku mu? Kim yarattı? 3 saniye. Bu kadar basit. Ama bu 3 saniye binlerce lira ile kimliğiniz arasındaki farktır.

---

## KAPANIŞ

### Slide 34 — Simülasyonlar Tanıtım

Sizin için 30 tane interaktif dolandırıcılık simülasyonu hazırladım. Sahte banka, e-Devlet, kargo, QR tuzakları... Hepsini güvenli ortamda deneyimleyebilirsiniz. Bir sonraki ekrandaki QR'ı tarayın.

---

### Slide 35 — Simülasyonlar QR

[Sessiz bekleyin, öğrenciler tarasın]

Bu QR sizi hackleme-sanati.vercel.app adresine götürecek. 30 simülasyonun hepsini orada deneyebilirsiniz. Arkadaşlarınızla, ailelerinizle paylaşın.

---

### Slide 36 — Teşekkürler

Bugün oltalama, şifre güvenliği, sosyal mühendislik, yapay zeka tehditleri, yasadışı bahis, siber zorbalık ve korunma yöntemlerini konuştuk.

En önemli 3 şey: Devlet telefonda para istemez. Her hesaba farklı şifre artı Authenticator. 3 saniye kuralı.

Beni takip etmek için son ekrandaki QR kodları tarayın.

---

### Slide 37 — Takip QR'ları

[QR kodları gösterin, öğrenciler tarasın]

LinkedIn, Instagram ve simülasyonlar sitesi. Sorularınız varsa hazırım. Teşekkür ederim!

---

## ZAMANLAMA REHBERİ

| Bölüm | Slide'lar | Süre |
|-------|-----------|------|
| Açılış | 1-3 | 8 dk |
| Oltalama | 4-11 | 25 dk |
| Şifreler | 12-14 | 9 dk |
| Sosyal Mühendislik | 15-18 | 10 dk |
| Yapay Zeka | 19-20 | 5 dk |
| Bahis ve Veri | 21-25 | 14 dk |
| Siber Zorbalık | 26-28 | 7 dk |
| Korunma | 29-33 | 14 dk |
| Kapanış | 34-37 | 8 dk |
| **Toplam** | **37** | **~100 dk** |

## SUNUM İPUÇLARI

- **Slide 8-9 (QR Tuzağı):** En etkili an. "Telefonlarınızı çıkarın" deyin, sonraki slide'a geçin, sessizce bekleyin. Panik anını izleyin, sonra açıklayın.
- **Slide 17 (Altın Kural):** Hep bir ağızdan tekrar ettirin: "DEVLET ASLA TELEFONDA PARA İSTEMEZ."
- **Slide 32 (5 Adım):** "Bu akşam" vurgusunu her maddede tekrarlayın.
- **Simülasyonlar:** Otomatik oynuyor, tıklamaya gerek yok. Sadece anlatın.
- **İstatistikler:** Rakamları yavaş söyleyin, sindirin.
- **Soru-cevap:** Son 10 dakikayı ayırın.
- **Keyboard:** F tuşu tam ekran yapar, 1-9 bölümlere atlar.
