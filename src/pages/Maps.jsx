// src/App.jsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Contoh posisi koordinat
const position = [51.505, -0.09];

function Maps() {
  return (
    <div>
      <div className="z-40 sticky">
        <Navbar />
      </div>
      <div className="mt-12 -z-40" style={{ height: "100vh" }}>
        <h1 className="text-center text-2xl font-bold mb-4">
          Peta dengan React Leaflet
        </h1>

        {/* Peta menggunakan MapContainer dari React Leaflet */}
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "700px", width: "100%" }}
        >
          {/* Lapisan peta menggunakan OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker dan Popup pada peta */}
          <Marker position={position}>
            <Popup>Area Hutan Milik Perhutani.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Maps;
