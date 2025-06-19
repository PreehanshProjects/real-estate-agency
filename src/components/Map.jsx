import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Map() {
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0]);
  const navigate = useNavigate();

  const filtered = DUMMY_PROPERTIES.filter((p) => p.type === selectedType);

  // Converts lat/lng to percentage positions on 100% scaled map iframe
  const toPct = (val, min, max) => ((val - min) / (max - min)) * 100;
  const latMin = -20.315,
    latMax = -20.305;
  const lngMin = 57.484,
    lngMax = 57.49;

  return (
    <div className="max-w-3xl mx-auto my-16">
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

      {/* Map & Markers Container */}
      <div className="relative w-full aspect-video border rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Mauritius property map"
          // Replace YOUR_API_KEY with your actual Google Maps Embed API key
          src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=-20.309606,57.484902&zoom=15&maptype=roadmap`}
          className="w-full h-full"
          allowFullScreen
        />

        {/* Overlayed markers */}
        {filtered.map(({ id, lat, lng, type }) => {
          const top = `${toPct(lat, latMin, latMax)}%`;
          const left = `${toPct(lng, lngMin, lngMax)}%`;
          return (
            <div
              key={id}
              onClick={() => navigate(`/property/${id}`)}
              title={`${type} (#${id})`}
              className="absolute bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer transform hover:scale-125 transition"
              style={{
                top,
                left,
                transform: "translate(-50%, -50%)",
              }}
            >
              P
            </div>
          );
        })}
      </div>
    </div>
  );
}
