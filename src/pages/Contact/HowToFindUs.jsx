import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaPhone, FaEnvelope, FaHome, FaClock } from "react-icons/fa";
import { useEffect } from "react";

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

export default function HowToFindUs() {
  // Coordinates for the location (Port Louis, Mauritius example)
  const position = [-20.1619, 57.4983];

  return (
    <section className="max-w-4xl mx-auto my-16 p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        How To Find Us
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Details */}
        <div className="flex-1 space-y-6 text-gray-800">
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <a href="tel:+53333444" className="hover:text-blue-800 transition">
              5 444 4444 / 5 333 3333
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <a
              href="mailto:contact@real-estate.mu"
              className="hover:text-blue-800 transition"
            >
              contact@real-estate.mu
            </a>
          </div>

          <div className="flex items-start gap-3">
            <FaHome className="text-blue-600 mt-1" />
            <address className="not-italic">
              Royal Road,
              <br />
              Main street near park
              <br />
              101010 New York, USA
            </address>
          </div>

          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
            Opening Hours
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span>
                Monday - Friday: <strong>08:00 - 15:00</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span>
                Saturday: <strong>Closed</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span>
                Sunday: <strong>Closed</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-[500px] rounded-xl overflow-hidden shadow-lg border border-white/40">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Our Location — Royal Road</Popup>
            </Marker>
            <ResizeMap />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
