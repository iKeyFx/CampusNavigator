import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import DirectionsPanel from "./DirectionsPanel";
import PlacesPanel from "./PlacesPanel";
import { Location, locations } from "@/data/locations";

interface SidebarProps {
  activeTab: "directions" | "places";
  setActiveTab: (tab: "directions" | "places") => void;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  fromLocation: Location | null;
  setFromLocation: (location: Location | null) => void;
  toLocation: Location | null;
  setToLocation: (location: Location | null) => void;
  showRoute: boolean;
  setShowRoute: (show: boolean) => void;
  travelMode: "WALKING" | "DRIVING";
  setTravelMode: (mode: "WALKING" | "DRIVING") => void;
  activeCampus: "gidan-kwano" | "bosso";
  setActiveCampus: (campus: "gidan-kwano" | "bosso") => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedLocation,
  setSelectedLocation,
  fromLocation,
  setFromLocation,
  toLocation,
  setToLocation,
  showRoute,
  setShowRoute,
  travelMode,
  setTravelMode,
  activeCampus,
  setActiveCampus
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLocations([]);
      return;
    }

    const filtered = locations
      .filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        location.campus === activeCampus
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredLocations(filtered);
  }, [searchTerm, activeCampus]);

  const handleSearchFocus = () => {
    setShowSearchResults(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding to allow for location selection
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setSearchTerm(location.name);
    setShowSearchResults(false);
  };

  return (
    <div className="w-full md:w-96 bg-white shadow-md z-10 md:h-auto">
      <div className="p-4">
        {/* Campus Selector */}
        <div className="mb-4">
          <div className="inline-flex w-full rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className={`w-1/2 py-2 px-4 text-sm font-medium ${
                activeCampus === 'gidan-kwano' 
                  ? 'text-white bg-primary'
                  : 'text-primary bg-white'
              } rounded-l-md border border-primary`}
              onClick={() => setActiveCampus('gidan-kwano')}
            >
              Gidan Kwano
            </button>
            <button 
              type="button" 
              className={`w-1/2 py-2 px-4 text-sm font-medium ${
                activeCampus === 'bosso' 
                  ? 'text-white bg-primary'
                  : 'text-primary bg-white'
              } rounded-r-md border border-primary`}
              onClick={() => setActiveCampus('bosso')}
            >
              Bosso
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className="relative mb-4 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Search for a place (e.g. ICT)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          
          {/* Search Results */}
          {showSearchResults && (
            <SearchResults 
              locations={filteredLocations}
              onSelect={handleLocationSelect}
            />
          )}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            <button 
              onClick={() => setActiveTab('directions')} 
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'directions' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-directions mr-2"></i>
              Directions
            </button>
            <button 
              onClick={() => setActiveTab('places')} 
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'places' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className="fas fa-map-marker-alt mr-2"></i>
              Places
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'directions' ? (
          <DirectionsPanel 
            fromLocation={fromLocation}
            setFromLocation={setFromLocation}
            toLocation={toLocation}
            setToLocation={setToLocation}
            showRoute={showRoute}
            setShowRoute={setShowRoute}
            travelMode={travelMode}
            setTravelMode={setTravelMode}
            activeCampus={activeCampus}
          />
        ) : (
          <PlacesPanel 
            locations={locations} 
            activeCampus={activeCampus}
            onSelect={setSelectedLocation}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
