import { Link } from "wouter";

const Navbar = () => {
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
            <Link href="/map" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition duration-150">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
