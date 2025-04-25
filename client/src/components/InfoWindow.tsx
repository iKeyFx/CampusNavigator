import React from "react";
import { Location } from "@/data/locations";

interface InfoWindowProps {
  location: Location;
  onClose: () => void;
  onGetDirections: (location: Location) => void;
}

const InfoWindow: React.FC<InfoWindowProps> = ({ location, onClose, onGetDirections }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs">
      <div className="flex items-start">
        <div className="mr-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <i className={`${location.icon} text-primary`}></i>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-900">{location.name}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">{location.description}</p>
          <div className="flex items-center mt-2">
            <i className="fas fa-directions text-primary mr-1 text-xs"></i>
            <button 
              className="text-xs text-primary font-medium"
              onClick={() => onGetDirections(location)}
            >
              Directions
            </button>
          </div>
        </div>
      </div>
      {/* Arrow pointing down */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white"></div>
    </div>
  );
};

export default InfoWindow;
