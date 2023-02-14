import Hero from "./Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import WhySection from "../components/WhySection/WhySection";
import Services from "../components/Services/Services";
import GallerySection from "../components/GallerySection/GallerySection";
const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <WhySection />
      <Services />
      <GallerySection />
    </div>
  );
};

export default Home;
