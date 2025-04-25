import { Link } from "wouter";

const Hero = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 slide-up">
              Smart Campus Navigation – FUTMINNA
            </h1>
            <p className="text-xl text-gray-600 mb-8 slide-up" style={{animationDelay: "0.1s"}}>
              Easily find lecture halls, hostels, departments, and more across Bosso and Gidan Kwano campuses.
            </p>
            <Link href="/map" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition duration-150 slide-up"
              style={{animationDelay: "0.2s"}}>
              Enter Map
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="lg:w-1/2 fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gray-300 w-full h-96 rounded-lg relative">
                <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-md">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-white text-sm"></i>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">School of Engineering</p>
                        <p className="text-xs text-gray-500">Gidan Kwano Campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
