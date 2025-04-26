const Features = () => {
  return (
    <div id="features" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Find Your Way Around Campus</h2>
          <p className="mt-4 text-lg text-gray-600">Our smart navigation system helps you discover and navigate to any location within FUTMINNA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-150">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-map-marked-alt text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
            <p className="text-gray-600">Explore both Bosso and Gidan Kwano campuses with our interactive map interface.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-150">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-search-location text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
            <p className="text-gray-600">Quickly find any location with our smart search and autocomplete functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-150">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-directions text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Turn-by-Turn Directions</h3>
            <p className="text-gray-600">Get detailed directions between any two points on campus, with time and distance estimates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
