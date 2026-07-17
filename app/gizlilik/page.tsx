import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gizlilik Politikası — Turist",
  description: "Turist uygulaması gizlilik politikası.",
};

export default function GizlilikPage() {
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
            Gizlilik
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-gray max-w-none text-gray-500 text-sm leading-relaxed space-y-6">
            <p>
              Turist; hesap, konum, tercih ve kullanım verilerinizi uygulamanın
              çalışması için işler.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Toplanan veriler
              </h2>
              <ul className="space-y-2 list-none pl-0">
                <li>• Hesap: ad, e-posta, telefon (isteğe bağlı)</li>
                <li>• Konum: yakındaki mekanlar ve rota önerileri</li>
                <li>• Tercihler: şehir, bütçe, damak zevki, ilgi alanları</li>
                <li>• AI sohbet geçmişi: cihazınızda saklanır</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Hizmet sağlayıcılar
              </h2>
              <ul className="space-y-2 list-none pl-0">
                <li>• Google Firebase (kimlik doğrulama ve veritabanı)</li>
                <li>• Google Maps / Places (harita, rota, mekan bilgisi)</li>
                <li>• OpenRouter (yapay zeka asistanı yanıtları)</li>
              </ul>
            </div>

            <p>
              Verileriniz reklam amacıyla satılmaz. Konum yalnızca siz izin
              verdiğinizde kullanılır. Hesabınızı silmek veya verileriniz
              hakkında bilgi almak için{" "}
              <a
                href="mailto:semihdayioglu.sd@gmail.com"
                className="text-gray-900 underline underline-offset-2"
              >
                semihdayioglu.sd@gmail.com
              </a>{" "}
              adresine yazabilirsiniz.
            </p>

            <p className="text-black/30 text-xs pt-4">
              Son güncelleme: Haziran 2026
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
