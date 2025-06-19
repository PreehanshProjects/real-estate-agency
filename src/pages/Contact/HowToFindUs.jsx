import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaPhone, FaEnvelope, FaHome, FaClock } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

function ForceResizeMap() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200); // delay ensures container is fully sized
  }, [map]);

  return null;
}

export default function HowToFindUs() {
  const position = [-20.309606, 57.484902];

  return (
    <section className="max-w-4xl mx-auto my-16 p-8 bg-white/90 rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        How To Find Us
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 space-y-6 text-gray-800">
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <a href="tel:+53333444">54444444 / 53333333</a>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:contact@real-estate.mu">contact@real-estate.mu</a>
          </div>
          <div className="flex items-start gap-3">
            <FaHome className="text-blue-600 mt-1" />
            <address className="not-italic">
              Royal-Road, Main-Street near Park
              <br />
              101010 New-York, USA
            </address>
          </div>

          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
            Opening Hours
          </h3>
          <div className="space-y-2">
            {["Mon–Fri: 08:00–15:00", "Sat: Closed", "Sun: Closed"].map(
              (line) => (
                <div key={line} className="flex items-center gap-3">
                  <FaClock className="text-blue-600" />
                  <span>{line}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>Our Location</Popup>
            </Marker>
            <ForceResizeMap />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
