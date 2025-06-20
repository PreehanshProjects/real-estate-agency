import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Property types
const PROPERTY_TYPES = [
  "Residential Land",
  "Commercial Building",
  "Apartment",
  "House",
  "Villa",
];

// Dummy property data
const DUMMY_PROPERTIES = [
  { id: 1, type: "Residential Land", lat: -20.31, lng: 57.49 },
  { id: 2, type: "Villa", lat: -20.308, lng: 57.486 },
  { id: 3, type: "Apartment", lat: -20.309, lng: 57.488 },
  { id: 4, type: "Commercial Building", lat: -20.3075, lng: 57.4875 },
  { id: 5, type: "House", lat: -20.3085, lng: 57.4855 },
];

// Fix Leaflet default icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Define bounding box for Mauritius
const MAURITIUS_BOUNDS = [
  [-20.6, 57.2], // Southwest
  [-19.8, 57.9], // Northeast
];

export default function Map() {
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0]);
  const navigate = useNavigate();

  const filtered = DUMMY_PROPERTIES.filter((p) => p.type === selectedType);

  return (
    <div className="max-w-5xl mx-auto my-16">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {PROPERTY_TYPES.map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-full ${
              selectedType === t
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } transition`}
            onClick={() => setSelectedType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Leaflet Map */}
      <MapContainer
        center={[-20.3, 57.5]}
        zoom={10} // Zoomed out to show more of the island
        minZoom={10}
        maxZoom={18}
        scrollWheelZoom={true}
        className="w-full rounded-lg shadow-lg z-0"
        style={{ height: "600px" }} // Taller map container
        maxBounds={MAURITIUS_BOUNDS}
        maxBoundsViscosity={1.0} // Prevent panning outside bounds
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {filtered.map(({ id, lat, lng, type }) => (
          <Marker
            key={id}
            position={[lat, lng]}
            eventHandlers={{
              click: () => navigate(`/property/${id}`),
            }}
          >
            <Popup>
              {type} (#{id})<br />
              Click to view
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
