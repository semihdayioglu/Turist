# Turist — Akıllı Şehir Rehberi

Turist mobil uygulamasının tanıtım web sitesi. Next.js ile geliştirilmiş, tek sayfalık, App Store ve Google Play indirme bağlantılarına yönlendiren bir landing page.

## Özellikler

- **Exploded phone scroll** — kaydırma ile senkronize, GSAP ScrollTrigger tabanlı ürün turu. Kullanıcı kaydırdıkça telefon açılır ve uygulamanın altı ana ekranı (kilit, ana sayfa, plan, AI asistan, favoriler, profil) sırayla tanıtılır.
- **SEO ve paylaşım meta verileri** — Open Graph / Twitter Card görselleri, `robots.txt`, `sitemap.xml` ve `MobileApplication` tipinde JSON-LD yapılandırılmış veri Next.js'in native metadata dosya kurallarıyla otomatik üretilir.
- **Cihaz bazlı mağaza yönlendirmesi** — "Uygulamayı İndir" bağlantıları, kullanıcının cihazına göre (iOS/Android) doğru mağazaya yönlendirir.
- **Duyarlı tasarım** — mobil tarayıcılarda adres çubuğu davranışına dayanıklı `dvh` tabanlı düzen.

## Teknoloji

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) (ScrollTrigger)
- TypeScript

## Geliştirme

```bash
npm install
npm run dev
```

Ardından [http://localhost:3000](http://localhost:3000) adresini aç. Kod değişiklikleri anında yansır (hot reload).

### Diğer komutlar

| Komut             | Açıklama                                   |
| ----------------- | ------------------------------------------- |
| `npm run build`   | Production derlemesi oluşturur              |
| `npm run start`   | `build`'den sonra production modunda çalıştırır |
| `npm run lint`    | ESLint ile kod kontrolü yapar               |

## Proje yapısı

```
app/                  Sayfa rotaları, layout, metadata (robots, sitemap, OG görseli)
components/            UI bileşenleri
  exploded-phone/      Kaydırma ile senkronize telefon animasyonu
  ui/                  Küçük paylaşılan bileşenler
lib/                   Sabitler ve yardımcı fonksiyonlar (mağaza linkleri, site config)
public/                Statik varlıklar (ekran görüntüleri, rozetler, logo)
```

## Ortam değişkenleri

| Değişken               | Açıklama                                                                 |
| ----------------------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Sitenin canlı adresi. Sitemap, robots.txt ve OG meta verilerinde kullanılır. Ayarlanmazsa `https://turisturkiye.vercel.app` varsayılan olarak kullanılır. |

## Dağıtım (Deployment)

Proje [Vercel](https://vercel.com) üzerinde barındırılmak üzere yapılandırılmıştır. `main` branch'e yapılan push'lar otomatik olarak deploy edilir.

## Lisans

Bu proje özel (private) bir projedir; tüm hakları saklıdır.
