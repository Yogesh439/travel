import { EmblaCarousel } from "@/components/emblaCrousel";
import AboutUs from "@/app/aboutUs/aboutUs";
import TravelInfo from "@/app/travelInfo/travelInfo";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <AboutUs />
      <TravelInfo />
    </main>
  );
}


