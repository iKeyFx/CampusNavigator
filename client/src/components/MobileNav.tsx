import React from "react";

interface MobileNavProps {
  activeTab: "directions" | "places";
  setActiveTab: (tab: "directions" | "places") => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-20">
      <div className="grid grid-cols-3">
        <button 
          className={`flex flex-col items-center justify-center py-3 ${activeTab === 'directions' ? 'text-primary' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('directions')}
        >
          <i className="fas fa-directions text-lg"></i>
          <span className="text-xs mt-1">Directions</span>
        </button>
        <button 
          className={`flex flex-col items-center justify-center py-3 ${activeTab === 'places' ? 'text-primary' : 'text-gray-500'}`}
          onClick={() => setActiveTab('places')}
        >
          <i className="fas fa-map-marker-alt text-lg"></i>
          <span className="text-xs mt-1">Places</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 text-gray-500">
          <i className="fas fa-cog text-lg"></i>
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
