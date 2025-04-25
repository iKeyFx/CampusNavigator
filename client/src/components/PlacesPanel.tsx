import React, { useState } from "react";
import { Location } from "@/data/locations";

interface PlacesPanelProps {
  locations: Location[];
  activeCampus: "gidan-kwano" | "bosso";
  onSelect: (location: Location) => void;
}

const PlacesPanel: React.FC<PlacesPanelProps> = ({ locations, activeCampus, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Get unique categories
  const categories = ["All", ...new Set(locations.map(location => location.category))];
  
  // Filter locations by campus and category
  const filteredLocations = locations.filter(location => {
    const matchesCampus = location.campus === activeCampus;
    const matchesCategory = activeCategory === "All" || location.category === activeCategory;
    return matchesCampus && matchesCategory;
  });

  return (
    <div className="py-4">
      <div className="space-y-2">
        <div className="flex justify-between mb-2">
          <div className="text-sm font-medium text-gray-900">Categories</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button 
              key={category}
              className={`${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              } px-3 py-1 rounded-full text-xs font-medium`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {filteredLocations.length === 0 ? (
          <div className="text-gray-500 text-center py-4">
            No locations found in this category
          </div>
        ) : (
          filteredLocations.map(location => (
            <button
              key={location.id}
              className="block w-full bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition duration-150 text-left"
              onClick={() => onSelect(location)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <i className={`${location.icon} text-primary`}></i>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{location.name}</div>
                  <div className="text-xs text-gray-500">
                    {location.category} • {location.campus === 'gidan-kwano' ? 'Gidan Kwano' : 'Bosso'}
                  </div>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default PlacesPanel;
