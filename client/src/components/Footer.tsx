import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold">
                <MapPin size={20} />
              </div>
              <span className="ml-2 font-semibold">Campus Navigator</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Federal University of Technology, Minna</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
