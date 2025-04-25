import React from "react";
import { Location, locations } from "@/data/locations";

interface DirectionsPanelProps {
  fromLocation: Location | null;
  setFromLocation: (location: Location | null) => void;
  toLocation: Location | null;
  setToLocation: (location: Location | null) => void;
  showRoute: boolean;
  setShowRoute: (show: boolean) => void;
  travelMode: "WALKING" | "DRIVING";
  setTravelMode: (mode: "WALKING" | "DRIVING") => void;
  activeCampus: "gidan-kwano" | "bosso";
}

const DirectionsPanel: React.FC<DirectionsPanelProps> = ({
  fromLocation,
  setFromLocation,
  toLocation,
  setToLocation,
  showRoute,
  setShowRoute,
  travelMode,
  setTravelMode,
  activeCampus
}) => {
  const filteredLocations = locations.filter(location => location.campus === activeCampus);

  const handleGetDirections = () => {
    if (fromLocation && toLocation && fromLocation.id !== toLocation.id) {
      setShowRoute(true);
    }
  };

  return (
    <div className="py-4">
      <div className="mb-4">
        <label htmlFor="from-location" className="block text-sm font-medium text-gray-700 mb-1">From</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-map-marker-alt text-gray-400"></i>
          </div>
          <select
            id="from-location"
            name="from-location"
            className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            value={fromLocation?.id || ""}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selected = selectedId 
                ? locations.find(loc => loc.id === selectedId) || null 
                : null;
              setFromLocation(selected);
            }}
          >
            <option value="">Your location</option>
            {filteredLocations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="to-location" className="block text-sm font-medium text-gray-700 mb-1">To</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-map-marker-alt text-gray-400"></i>
          </div>
          <select
            id="to-location"
            name="to-location"
            className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            value={toLocation?.id || ""}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selected = selectedId 
                ? locations.find(loc => loc.id === selectedId) || null 
                : null;
              setToLocation(selected);
            }}
          >
            <option value="">Choose destination</option>
            {filteredLocations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Mode</label>
        <div className="flex space-x-2">
          <button 
            className={`flex-1 py-2 ${travelMode === 'WALKING' ? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-300'} rounded-md flex items-center justify-center text-sm font-medium`}
            onClick={() => setTravelMode('WALKING')}
          >
            <i className="fas fa-walking mr-2"></i>
            Walking
          </button>
          <button 
            className={`flex-1 py-2 ${travelMode === 'DRIVING' ? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-300'} rounded-md flex items-center justify-center text-sm font-medium`}
            onClick={() => setTravelMode('DRIVING')}
          >
            <i className="fas fa-car mr-2"></i>
            Driving
          </button>
        </div>
      </div>
      
      <button 
        onClick={handleGetDirections} 
        className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition duration-150 flex items-center justify-center"
        disabled={!fromLocation || !toLocation || fromLocation.id === toLocation.id}
      >
        <i className="fas fa-route mr-2"></i>
        Get Directions
      </button>

      {/* Route Information */}
      {showRoute && fromLocation && toLocation && (
        <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-900">
              {fromLocation.name} to {toLocation.name}
            </div>
            <div className="text-sm text-gray-500">
              {Math.round(Math.random() * 500 + 300)}m
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <i className="fas fa-clock mr-2"></i>
            <span>{Math.round(Math.random() * 10 + 5)} mins {travelMode === 'WALKING' ? 'walking' : 'driving'}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Start at {fromLocation.name}</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-gray-300"></div>
              </div>
              <div className="ml-5">
                <div className="text-sm text-gray-500">Walk straight for {Math.round(Math.random() * 200 + 100)}m</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div className="ml-4">
                <div className="text-sm text-gray-500">Turn right at the junction</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-gray-300"></div>
              </div>
              <div className="ml-5">
                <div className="text-sm text-gray-500">Walk for {Math.round(Math.random() * 200 + 100)}m</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Arrive at {toLocation.name}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectionsPanel;
