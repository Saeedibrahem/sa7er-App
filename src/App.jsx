
import "./App.css";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import HeroSection from "./componants/HeroSection";
import SkillsSection from "./componants/SkillsSection";
import TestimonialsSection from "./componants/TestimonialsSection";
import heroImage from "./assets/img/Sauvage-Eau-de-Parfum.jpg";
import MainSection from "./componants/MainSection";
import AnimatedBackground from "./componants/AnimatedBackground";

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <HeroSection heroImage={heroImage} />
      <SkillsSection />
      <MainSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
