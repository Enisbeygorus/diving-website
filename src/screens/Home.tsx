import Hero from "./Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import WhySection from "../components/WhySection/WhySection";
import Services from "../components/ServicesSection/ServicesSection";
import GallerySection from "../components/GallerySection/GallerySection";
import ContactUsSection from "../components/ContactUsSection/ContactUsSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <WhySection />
      <Services />
      <GallerySection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
