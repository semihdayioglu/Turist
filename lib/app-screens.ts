export type AppScreen = {
  id: string;
  name: string;
  description: string;
  file: string;
  color: string;
  label?: {
    side: "left" | "right";
    top: string;
  };
};

/**
 * Scroll: Kilit → Ana Sayfa → Plan → AI → Favoriler → Profil
 * Dosyalar: public/screens/<file>
 */
export const APP_SCREENS: AppScreen[] = [
  {
    id: "lock",
    name: "Kilit Ekranı",
    description: "Aşağı kaydır — telefon açılır.",
    file: "kilit.png",
    color: "#1c1917",
  },
  {
    id: "home",
    name: "Ana Sayfa",
    description: "Kişisel öneriler ve günün rotası tek bakışta.",
    file: "ana-sayfa.png",
    color: "#f5f5f0",
    label: { side: "right", top: "24%" },
  },
  {
    id: "plan",
    name: "Tur Planı",
    description: "Günlük rotalar oluştur ve adım adım takip et.",
    file: "plan.png",
    color: "#ebe6de",
    label: { side: "left", top: "38%" },
  },
  {
    id: "ai",
    name: "AI Asistan",
    description: "Şehir ve mekan hakkında sor, anında yanıt al.",
    file: "ai-asistan.png",
    color: "#e2e4e8",
    label: { side: "right", top: "52%" },
  },
  {
    id: "favorites",
    name: "Favoriler",
    description: "Beğendiğin mekanları kaydet, sonra geri dön.",
    file: "favoriler.png",
    color: "#e4e8ec",
    label: { side: "left", top: "66%" },
  },
  {
    id: "profile",
    name: "Profil",
    description: "Hesabın, tercihlerin ve uygulama ayarların.",
    file: "profil.png",
    color: "#e8e4dc",
    label: { side: "right", top: "80%" },
  },
];

export function screenSrc(file: string) {
  return `/screens/${file}`;
}
