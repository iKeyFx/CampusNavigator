import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface HeroProps {
  onStartNavigating: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartNavigating }) => {
  return (

    <div className="hero flex-grow flex items-center justify-center text-white px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center slide-in">
        <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6">Smart Campus Navigation – FUTMINNA</h1>
        <p className="text-xl md:text-2xl mb-8">Find your way around campus with ease.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={onStartNavigating}
            className="bg-white text-primary text-lg px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-primary transition duration-300 ease-in-out pulse shadow-lg"
          >
            Start Navigating <ArrowRight className="ml-2 inline-block" size={20} />
          </button>
          <a 
            href="#features" 
            className="bg-transparent border-2 border-white text-white text-lg px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
