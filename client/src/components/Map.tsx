import React, { useState, useEffect, useRef } from "react";
import InfoWindow from "./InfoWindow";
import { Location } from "@/data/locations";
import useGoogleMaps from "@/hooks/useGoogleMaps";

interface MapProps {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  fromLocation: Location | null;
  toLocation: Location | null;
  showRoute: boolean;
  travelMode: "WALKING" | "DRIVING";
  activeCampus: "gidan-kwano" | "bosso";
}

const Map: React.FC<MapProps> = ({
  selectedLocation,
  setSelectedLocation,
  fromLocation,
  toLocation,
  showRoute,
  travelMode,
  activeCampus
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [displayedLocation, setDisplayedLocation] = useState<Location | null>(null);
  
  const { isLoaded, loadError } = useGoogleMaps();

  // Center coordinates for each campus
  const campusCoordinates = {
    'gidan-kwano': { lat: 9.5236, lng: 6.4500 }, // Gidan Kwano campus coordinates
    'bosso': { lat: 9.6766, lng: 6.5464 }  // Bosso campus coordinates
  };

  // Initialize map
  useEffect(() => {
    if (!isLoaded || loadError || !mapRef.current) return;

    const initialCenter = campusCoordinates[activeCampus];
    
    const mapOptions: google.maps.MapOptions = {
      zoom: 16,
      center: initialCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    };

    const newMap = new google.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);

    // Create InfoWindow instance
    const newInfoWindow = new google.maps.InfoWindow({
      maxWidth: 320
    });
    setInfoWindow(newInfoWindow);

    // Create directions renderer
    const newDirectionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#4F46E5",
        strokeWeight: 5,
        strokeOpacity: 0.7
      }
    });
    newDirectionsRenderer.setMap(newMap);
    setDirectionsRenderer(newDirectionsRenderer);

    return () => {
      // Clean up (if needed)
    };
  }, [isLoaded, loadError, activeCampus]);

  // Update map center when campus changes
  useEffect(() => {
    if (!map) return;
    
    map.setCenter(campusCoordinates[activeCampus]);
    map.setZoom(16);
  }, [activeCampus, map]);

  // Handle selected location (from search or places panel)
  useEffect(() => {
    if (!map || !selectedLocation) return;
    
    setDisplayedLocation(selectedLocation);
    
    map.setCenter({
      lat: selectedLocation.lat,
      lng: selectedLocation.lng
    });
    map.setZoom(18);
  }, [selectedLocation, map]);

  // Close InfoWindow when displayed location changes
  useEffect(() => {
    if (infoWindow) {
      infoWindow.close();
    }
  }, [displayedLocation, infoWindow]);

  // Draw route when fromLocation and toLocation are set and showRoute is true
  useEffect(() => {
    if (!map || !directionsRenderer || !fromLocation || !toLocation || !showRoute) return;
    
    const directionsService = new google.maps.DirectionsService();
    
    directionsService.route({
      origin: { lat: fromLocation.lat, lng: fromLocation.lng },
      destination: { lat: toLocation.lat, lng: toLocation.lng },
      travelMode: travelMode === 'WALKING' ? google.maps.TravelMode.WALKING : google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        directionsRenderer.setDirections(result);
        
        // Fit bounds to show the entire route
        const bounds = new google.maps.LatLngBounds();
        bounds.extend({ lat: fromLocation.lat, lng: fromLocation.lng });
        bounds.extend({ lat: toLocation.lat, lng: toLocation.lng });
        map.fitBounds(bounds);
      }
    });
    
    // Clean up function
    return () => {
      directionsRenderer.setDirections({ routes: [] } as google.maps.DirectionsResult);
    };
  }, [fromLocation, toLocation, showRoute, travelMode, map, directionsRenderer]);

  // Handle location selection for directions
  const handleGetDirections = (location: Location) => {
    setSelectedLocation(null);
    setToLocation(location);
    
    // If fromLocation is not set, set it to "Your location"
    if (!fromLocation) {
      // Find the main gate or another default location as the starting point
      const mainGate = { id: "your-location", name: "Your Location", lat: location.lat - 0.001, lng: location.lng - 0.001 } as Location;
      setFromLocation(mainGate);
    }
    
    setShowRoute(true);
  };

  return (
    <div className="flex-grow relative">
      <div className="map-container relative">
        {!isLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-xl text-gray-600">Loading map...</div>
          </div>
        )}
        
        {loadError && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="max-w-md text-center p-8">
              <div className="text-2xl text-red-500 mb-4">
                <i className="fas fa-exclamation-triangle text-4xl mb-4 block"></i>
                Map Loading Error
              </div>
              <p className="text-gray-700 mb-4">
                We're having trouble loading Google Maps. This may be due to:
              </p>
              <ul className="text-left text-gray-600 mb-4 space-y-2">
                <li><i className="fas fa-check-circle text-primary mr-2"></i> Billing not being enabled for this API key</li>
                <li><i className="fas fa-check-circle text-primary mr-2"></i> API restrictions on the Google Cloud Console</li>
                <li><i className="fas fa-check-circle text-primary mr-2"></i> Network connectivity issues</li>
              </ul>
              <p className="text-gray-700">
                Please check your Google Cloud Console settings to ensure Maps JavaScript API is enabled and billing is properly configured.
              </p>
            </div>
          </div>
        )}
        
        <div id="map" ref={mapRef} className="w-full h-full bg-gray-200"></div>
        
        {/* Map controls */}
        {isLoaded && !loadError && (
          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <button 
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
              onClick={() => {
                if (map) {
                  map.setCenter(campusCoordinates[activeCampus]);
                  map.setZoom(16);
                }
              }}
            >
              <i className="fas fa-location-arrow text-gray-600"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
