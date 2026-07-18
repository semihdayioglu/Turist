import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Hesap Silme — Turist",
  description: "Turist uygulamasında hesabınızı ve verilerinizi nasıl silebileceğiniz.",
};

export default function HesapSilmePage() {
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
            Hesap Silme
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Hesabını ve Verilerini Sil
          </h1>

          <div className="prose prose-gray max-w-none text-gray-500 text-sm leading-relaxed space-y-6">
            <p>
              Turist uygulamasındaki hesabını, uygulama içinden birkaç adımda
              kalıcı olarak silebilirsin.
            </p>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Nasıl silinir
              </h2>
              <ol className="space-y-2 list-none pl-0">
                <li>1. Turist uygulamasını aç ve <strong>Profil</strong> sekmesine git</li>
                <li>2. <strong>Hesabımı Sil</strong> seçeneğine dokun</li>
                <li>
                  3. E-posta ile giriş yaptıysan şifreni gir; Google ile giriş
                  yaptıysan hesap seçim ekranından hesabını onayla
                </li>
                <li>4. Silme işlemini onayla</li>
              </ol>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Ne silinir
              </h2>
              <ul className="space-y-2 list-none pl-0">
                <li>• Hesap bilgilerin: ad, e-posta, telefon</li>
                <li>• Tercihlerin: bütçe, damak zevki, ilgi alanları</li>
                <li>• Kayıtlı rotaların ve favorilerin</li>
                <li>• Hesabın kendisi (giriş kimliği)</li>
              </ul>
              <p className="mt-3">
                Silme işlemi anında ve kalıcıdır; geri alınamaz. Herhangi bir
                veri sunucularımızda saklanmaz — anonim kullanım kaydı veya
                yedek dahil hiçbir veri tutulmaz.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 font-semibold text-base mb-3">
                Uygulamaya erişimin yoksa
              </h2>
              <p>
                Uygulamayı silmişsen veya hesabına giriş yapamıyorsan,{" "}
                <a
                  href="mailto:semihdayioglu.sd@gmail.com"
                  className="text-gray-900 underline underline-offset-2"
                >
                  semihdayioglu.sd@gmail.com
                </a>{" "}
                adresine hesabına kayıtlı e-posta adresinden yazarak silme
                talebinde bulunabilirsin; talebin en geç 30 gün içinde
                yerine getirilir.
              </p>
            </div>

            <p className="text-black/30 text-xs pt-4">
              Son güncelleme: Temmuz 2026
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
