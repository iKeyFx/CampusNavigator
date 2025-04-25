import { useState } from "react";
import MapNavbar from "@/components/MapNavbar";
import Sidebar from "@/components/Sidebar";
import Map from "@/components/Map";
import MobileNav from "@/components/MobileNav";
import { Location } from "@/data/locations";

const MapPage = () => {
  const [activeTab, setActiveTab] = useState<"directions" | "places">("directions");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [fromLocation, setFromLocation] = useState<Location | null>(null);
  const [toLocation, setToLocation] = useState<Location | null>(null);
  const [showRoute, setShowRoute] = useState(false);
  const [travelMode, setTravelMode] = useState<"WALKING" | "DRIVING">("WALKING");
  const [activeCampus, setActiveCampus] = useState<"gidan-kwano" | "bosso">("gidan-kwano");

  return (
    <div className="min-h-screen flex flex-col">
      <MapNavbar />
      
      <div className="flex-grow flex flex-col md:flex-row">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          fromLocation={fromLocation}
          setFromLocation={setFromLocation}
          toLocation={toLocation}
          setToLocation={setToLocation}
          showRoute={showRoute}
          setShowRoute={setShowRoute}
          travelMode={travelMode}
          setTravelMode={setTravelMode}
          activeCampus={activeCampus}
          setActiveCampus={setActiveCampus}
        />
        
        <Map 
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          fromLocation={fromLocation}
          toLocation={toLocation}
          showRoute={showRoute}
          travelMode={travelMode}
          activeCampus={activeCampus}
        />
      </div>
      
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MapPage;
