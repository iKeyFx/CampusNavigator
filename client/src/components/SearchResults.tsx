import React from "react";
import { Location } from "@/data/locations";

interface SearchResultsProps {
  locations: Location[];
  onSelect: (location: Location) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ locations, onSelect }) => {
  // Group locations by category
  const groupedLocations: Record<string, Location[]> = {};
  
  locations.forEach(location => {
    if (!groupedLocations[location.category]) {
      groupedLocations[location.category] = [];
    }
    groupedLocations[location.category].push(location);
  });

  // If no search results, show message
  if (locations.length === 0) {
    return (
      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
        <div className="px-4 py-3 text-sm text-gray-500">
          No matching locations found
        </div>
      </div>
    );
  }

  return (
    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
      {Object.entries(groupedLocations).map(([category, locs]) => (
        <React.Fragment key={category}>
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {category}
          </div>
          {locs.map(location => (
            <a 
              key={location.id} 
              href="#" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                onSelect(location);
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                  <i className={`${location.icon} text-primary`}></i>
                </div>
                <div>
                  <div className="font-medium">{location.name}</div>
                  <div className="text-xs text-gray-500">
                    {location.campus === 'gidan-kwano' ? 'Gidan Kwano Campus' : 'Bosso Campus'}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SearchResults;
