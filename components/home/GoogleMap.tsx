"use client"
import React, { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface Location {
  name: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { name: 'Dhaka, Bangladesh', lat: 23.8103, lng: 90.4125 },
  { name: 'Chittagong, Bangladesh', lat: 22.3569, lng: 91.7832 },
  { name: 'Sylhet, Bangladesh', lat: 24.8949, lng: 91.8687 },
  { name: 'Rajshahi, Bangladesh', lat: 24.3745, lng: 88.6042 },
];

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapComponent: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const center = useMemo(() => ({
    lat: selectedLocation.lat,
    lng: selectedLocation.lng
  }), [selectedLocation]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      {/* Dropdown Menu */}
      <div className="mb-4 w-full max-w-xs">
        <label htmlFor="locationSelect" className="block mb-2 text-sm font-medium text-gray-700">
          Select Location
        </label>
        <select
          id="locationSelect"
          value={selectedLocation.name}
          onChange={(e) =>
            setSelectedLocation(locations.find(loc => loc.name === e.target.value)!)
          }
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          {locations.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
