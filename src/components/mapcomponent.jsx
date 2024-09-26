import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/map-images/marker-icon-2x.png'),
  iconUrl: require('../assets/map-images/marker-icon.png'),
  shadowUrl: require('../assets/map-images/marker-shadow.png'),
});

// Component to update the map view when coordinates change
const UpdateMapCenter = ({ coordinates }) => {
  const map = useMap();
  
  useEffect(() => {
    if (coordinates && coordinates.length > 0) {
      map.setView(coordinates[0]); // Center the map on the first coordinate
    }
  }, [coordinates, map]);
  return null;
};

const Mapcomponent = ({
  locations = [
    { address: 'No.4, Maha Close, Barnawa Kaduna', lat: '10.47661', lng: '7.43039' },
    { address: 'No.5, Wuse II, Abuja', lat: '9.072264', lng: '7.491302' },
    { address: 'No.6, Lekki Phase 1, Lagos', lat: '6.4315', lng: '3.4408' },
    { address: 'No.6, Lekki Phase 1, Lagos', lat: '6.9999', lng: '3.7879' },
  ],
  mapHeight = '700px',
  mapWidth = '100%',
}) => {
  const [coordinates, setCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const locationCoordinates = await Promise.all(
          locations.map(async (location) => {
            if (location.lat && location.lng) {
              // If latitude and longitude are directly provided, use them
              return { lat: location.lat, lng: location.lng, address: location.address };
            } else {
              // If only an address is provided, fetch lat/lng from the API
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${location.address}&key=${process.env.REACT_APP_APIKEY}`
              );
              if (response.data.results && response.data.results.length > 0) {
                const { lat, lng } = response.data.results[0].geometry;
                return { lat, lng, address: location.address };
              }
            }
            return null; // In case of error, return null
          })
        );
        setCoordinates(locationCoordinates.filter(Boolean)); // Filter out any failed results
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching coordinates: ', error);
        setError('Error fetching coordinates.');
        setLoading(false);
      }
    };

    // Only fetch coordinates if the locations array is provided
    if (locations && locations.length > 0) {
      fetchCoordinates();
    }
  }, [locations]);

  return (
    <div style={{ width: mapWidth, height: mapHeight }}>
      {loading ? (
        <p>Loading map...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        coordinates.length > 0 && (
          <MapContainer center={[coordinates[0].lat, coordinates[0].lng]} zoom={13} className="h-full w-full" maxZoom={18} minZoom={3}>
            <UpdateMapCenter coordinates={coordinates.map(coord => [coord.lat, coord.lng])} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {coordinates.map((coord, index) => (
              <Marker key={index} position={[coord.lat, coord.lng]}>
                <Popup>{coord.address}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )
      )}
    </div>
  );
};

export default Mapcomponent;
