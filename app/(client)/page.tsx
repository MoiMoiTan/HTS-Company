import HomeBanner from "@/components/HomeBanner";
import VisionSection from "@/components/VisionSection";
import EcosystemSection from "@/components/EcosystemSection";
import NewsSection from "@/components/NewsSection";
import SustainableSection from "@/components/SustainableSection";
import JoinUsSection from "@/components/JoinUsSection";
import HomeTabbar from "@/components/HomeTabbar";
import MadeByHiloSection from "@/components/MadeByHiloSection";
import InvestorSection from "@/components/InvestorSection";

export default function Home() {
  return (
    <>
      <main>
        <HomeBanner />
        <HomeTabbar />
        <MadeByHiloSection />
        <VisionSection />
        <EcosystemSection />
        <NewsSection />
        <SustainableSection />
        <InvestorSection />
        <JoinUsSection />
      </main>
    </>
  );
}
