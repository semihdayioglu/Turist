import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Lisans Sözleşmesi — Turist",
  description: "Turist uygulaması kullanım şartları ve lisans sözleşmesi.",
};

export default function LisansPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8 inline-block"
          >
            ← Ana sayfa
          </Link>

          <p className="text-xs text-black/30 tracking-widest uppercase mb-3">
            Kullanım Şartları
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Lisans Sözleşmesi
          </h1>

          <div className="prose prose-gray max-w-none text-gray-500 text-sm leading-relaxed space-y-6">
            <p>
              Turist uygulamasını indirerek veya kullanarak aşağıdaki
              şartları kabul etmiş sayılırsınız.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Kullanım hakkı
              </h2>
              <p>
                Turist, size uygulamayı kişisel, ticari olmayan amaçlarla
                kullanmanız için sınırlı, geri alınabilir ve devredilemez bir
                lisans verir. Uygulamanın kaynak kodu, tasarımı, logosu ve
                içeriği Turist&apos;e aittir ve izinsiz kopyalanamaz,
                dağıtılamaz veya tersine mühendislik yapılamaz.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Hesap ve kullanıcı sorumluluğu
              </h2>
              <ul className="space-y-2 list-none pl-0">
                <li>• Hesap bilgilerinizin güvenliğinden siz sorumlusunuz</li>
                <li>• Uygulamayı yasa dışı veya kötüye kullanım amacıyla kullanamazsınız</li>
                <li>• Yorum ve değerlendirmelerde yanıltıcı veya saldırgan içerik paylaşamazsınız</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Mekan bilgileri ve yapay zeka asistanı
              </h2>
              <p>
                Mekan adresleri, çalışma saatleri, fiyat bilgileri ve yapay
                zeka asistanının verdiği öneriler bilgilendirme amaçlıdır;
                gerçek zamanlı doğruluğu garanti edilmez. Bir mekana gitmeden
                önce güncel bilgiyi mekanla teyit etmenizi öneririz.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Ücretli paketler
              </h2>
              <p>
                Yapay zeka asistanı ve rota önerileri Ücretsiz, Lite ve Pro
                paketleriyle sunulur; her paketin aylık kullanım limiti
                uygulama içinde belirtilir. Ücretli paketler uygulama içi
                satın alma ile başlatılır ve ilgili mağazanın (Google Play)
                iptal/iade koşullarına tabidir.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Sorumluluk sınırı
              </h2>
              <p>
                Turist, uygulama üzerinden erişilen üçüncü taraf hizmetlerin
                (Google Haritalar, Google Places, yapay zeka sağlayıcısı)
                kesintisiz veya hatasız çalışacağını garanti etmez. Uygulama
                &quot;olduğu gibi&quot; sunulur.
              </p>
            </div>

            <p>
              Bu şartlarla ilgili sorularınız için{" "}
              <a
                href="mailto:semihdayioglu.sd@gmail.com"
                className="text-gray-900 underline underline-offset-2"
              >
                semihdayioglu.sd@gmail.com
              </a>{" "}
              adresine yazabilirsiniz.
            </p>

            <p className="text-black/30 text-xs pt-4">
              Son güncelleme: Temmuz 2026
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
