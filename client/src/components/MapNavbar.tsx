import { Link } from "wouter";

const MapNavbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                FUT
              </div>
              <span className="ml-2 font-semibold text-gray-900">FUTMINNA Navigator</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span className="sr-only">View notifications</span>
                <i className="far fa-bell text-xl"></i>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <i className="fas fa-user text-gray-600"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MapNavbar;
