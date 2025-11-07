
import "./App.css";
import "./Utils/i18n/i18n"; // Initialize i18n
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import HeroSection from "./componants/HeroSection";
import FeaturesSection from "./componants/FeaturesSection";
import TestimonialsSection from "./componants/TestimonialsSection";
import heroImage from "./assets/img/sahir-Eau-de-Parfum.jpg";
import MainSection from "./componants/MainSection";
import AnimatedBackground from "./componants/AnimatedBackground";
import ContactUs from "./componants/ContactUs";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="app">
      <Analytics />
      <AnimatedBackground />
      <Header />
      <HeroSection heroImage={heroImage} />
      <MainSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
