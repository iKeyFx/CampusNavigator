import React, { useState, useEffect } from "react";
import { Location } from "@/data/locations";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

// Fix icon issues by creating our own icon for the markers
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapProps {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  fromLocation: Location | null;
  setFromLocation: (location: Location | null) => void;
  toLocation: Location | null;
  setToLocation: (location: Location | null) => void;
  showRoute: boolean;
  travelMode: "WALKING" | "DRIVING";
  activeCampus: "gidan-kwano" | "bosso";
}

// A component to recenter the map when active campus changes
const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1 });
  }, [center, zoom, map]);
  return null;
};

const Map: React.FC<MapProps> = ({
  selectedLocation,
  setSelectedLocation,
  fromLocation,
  setFromLocation,
  toLocation,
  setToLocation,
  showRoute,
  travelMode,
  activeCampus
}) => {
  // Center coordinates for each campus
  const campusCoordinates = {
    'gidan-kwano': [9.53325, 6.44691] as [number, number], // Gidan Kwano campus coordinates
    'bosso': [9.654821, 6.525493] as [number, number]  // Bosso campus coordinates
  };
  // Create a basic straight-line route for demonstration
  const routePoints = (fromLocation && toLocation) ? [
    [fromLocation.lat, fromLocation.lng], 
    [toLocation.lat, toLocation.lng]
  ] : [];

  // Get all locations for the active campus from props
  // This would normally come from locations.ts
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);

  // Custom marker icons based on location category
  const getCategoryIcon = (category: string) => {
    let iconUrl;
    let iconColor = '#4F46E5'; // primary color
    
    switch(category) {
      case 'Academic Building':
        return L.divIcon({
          html: `<i class="fas fa-building" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
      case 'Hostel':
        return L.divIcon({
          html: `<i class="fas fa-bed" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
      case 'Food':
        return L.divIcon({
          html: `<i class="fas fa-utensils" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
      case 'Services':
        return L.divIcon({
          html: `<i class="fas fa-concierge-bell" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
      case 'Administrative':
        return L.divIcon({
          html: `<i class="fas fa-landmark" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
      default:
        return L.divIcon({
          html: `<i class="fas fa-map-marker-alt" style="color: ${iconColor}; font-size: 18px;"></i>`,
          className: 'custom-div-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
    }
  };

  // Filter locations based on active campus
  useEffect(() => {
    import("@/data/locations").then(module => {
      const locations = module.locations;
      setFilteredLocations(locations.filter(loc => loc.campus === activeCampus));
    });
  }, [activeCampus]);

  // Focus the map on selected location
  const [mapCenter, setMapCenter] = useState<[number, number]>(campusCoordinates[activeCampus]);
  const [mapZoom, setMapZoom] = useState(16);

  useEffect(() => {
    setMapCenter(campusCoordinates[activeCampus]);
    setMapZoom(16);
  }, [activeCampus]);

  useEffect(() => {
    if (selectedLocation) {
      setMapCenter([selectedLocation.lat, selectedLocation.lng]);
      setMapZoom(18);
    }
  }, [selectedLocation]);

  return (
    <div className="flex-grow relative h-full">
      <div className="w-full h-full">
        <MapContainer 
          center={mapCenter as LatLngExpression} 
          zoom={mapZoom} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          className="z-0"
        >
          <ChangeView center={mapCenter} zoom={mapZoom} />
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Leaflet built-in zoom controls - simpler approach */}
          
          {/* Display markers for all filtered locations */}
          {filteredLocations.map(location => (
            <Marker 
              key={location.id}
              position={[location.lat, location.lng] as LatLngExpression}
              icon={getCategoryIcon(location.category)}
              eventHandlers={{
                click: () => setSelectedLocation(location)
              }}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-medium text-base">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.description}</p>
                  <div className="mt-2">
                    <button 
                      className="text-primary text-sm font-medium flex items-center"
                      onClick={() => {
                        // Handle directions
                        if (fromLocation) {
                          // Set as destination
                          setSelectedLocation(null);
                          setToLocation(location);
                        } else {
                          // First selection, set as starting point
                          setFromLocation(location);
                        }
                      }}
                    >
                      <i className="fas fa-directions mr-1"></i> Directions
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          
          {/* Draw route line if showRoute is true */}
          {showRoute && fromLocation && toLocation && (
            <Polyline 
              positions={[
                [fromLocation.lat, fromLocation.lng] as LatLngExpression, 
                [toLocation.lat, toLocation.lng] as LatLngExpression
              ]} 
              pathOptions={{ color: "#4F46E5", weight: 5, opacity: 0.7 }}
            />
          )}
        </MapContainer>
      </div>
      
      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-[1000]">
        <button 
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
          onClick={() => {
            setMapCenter(campusCoordinates[activeCampus]);
            setMapZoom(16);
          }}
        >
          <i className="fas fa-location-arrow text-gray-600"></i>
        </button>
      </div>
    </div>
  );
};

export default Map;
