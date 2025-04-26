import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

const LandingPage = () => {
  const [, setLocation] = useLocation();
  
  const handleStartNavigating = () => {
    setLocation("/map");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <Hero /> */}
      <Hero onStartNavigating={handleStartNavigating} />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
