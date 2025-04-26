import { useState, useEffect } from "react";

// Declare google type to fix TypeScript errors
declare global {
  interface Window {
    google: any;
  }
}

// In Vite, we use import.meta.env instead of process.env
// For this example, we'll use a placeholder that should be replaced with an actual API key
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY";
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&v=weekly`;

// const GOOGLE_MAPS_URL = `https://www.google.com/maps/embed/v1/place?q=NIGER&key=${API_KEY}`;

// Helper function to load scripts
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.head.appendChild(script);
  });
};

const useGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if the Google Maps API is already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Load the Google Maps API
    loadScript(GOOGLE_MAPS_URL)
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        setLoadError(error);
        console.error("Error loading Google Maps API:", error);
      });
  }, []);

  return { isLoaded, loadError };
};

export default useGoogleMaps;
