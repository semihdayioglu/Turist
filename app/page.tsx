import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExplodedPhoneScroll from "@/components/exploded-phone/ExplodedPhoneScroll";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExplodedPhoneScroll />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
