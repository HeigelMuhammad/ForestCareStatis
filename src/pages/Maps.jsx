// src/App.jsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Contoh posisi koordinat hutan di Jawa Timur dengan jenisnya
const forests = [
  { name: "Hutan Alas Purwo", position: [-8.469325, 114.361916], type: "Hutan Konservasi" },
  { name: "Hutan Baluran", position: [-7.841900, 114.387960], type: "Hutan Konservasi" },
  { name: "Hutan Bromo Tengger Semeru", position: [-7.941187, 112.953018], type: "Hutan Lindung" },
  { name: "Hutan Gunung Wilis", position: [-7.771858, 111.705307], type: "Hutan Lindung" },
  { name: "Hutan Gunung Arjuno", position: [-7.746016, 112.580666], type: "Hutan Lindung" },
  { name: "Hutan Gunung Kelud", position: [-7.936268, 112.312451], type: "Hutan Lindung" },
  { name: "Hutan Gunung Lawu", position: [-7.628013, 111.199956], type: "Hutan Lindung" },
  { name: "Hutan Wonosalam", position: [-7.715856, 112.332872], type: "Hutan Lindung" },
  { name: "Hutan Mangrove Wonorejo", position: [-7.348877, 112.799390], type: "Hutan Mangrove" },
  { name: "Hutan Mangrove Probolinggo", position: [-7.729924, 113.244484], type: "Hutan Mangrove" },
  { name: "Hutan Mangrove Jenu Tuban", position: [-6.886124, 112.094706], type: "Hutan Mangrove" },
  { name: "Hutan Mangrove Sidoarjo", position: [-7.408963, 112.726623], type: "Hutan Mangrove" },
  { name: "Hutan Mangrove Blitar", position: [-8.102788, 112.149566], type: "Hutan Mangrove" },
  { name: "Hutan Mangrove Banyuwangi", position: [-8.219675, 114.374146], type: "Hutan Mangrove" },
  { name: "Hutan Produksi Ngawi", position: [-7.446906, 111.430926], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bojonegoro", position: [-7.285618, 111.890353], type: "Hutan Produksi" },
  { name: "Hutan Produksi Lamongan", position: [-7.122014, 112.416572], type: "Hutan Produksi" },
  { name: "Hutan Produksi Situbondo", position: [-7.729285, 114.126456], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bondowoso", position: [-7.917185, 113.885583], type: "Hutan Produksi" },
  { name: "Hutan Produksi Pasuruan", position: [-7.635571, 112.902729], type: "Hutan Produksi" },
  { name: "Hutan Produksi Malang", position: [-8.006364, 112.620442], type: "Hutan Produksi" },
  { name: "Hutan Produksi Trenggalek", position: [-8.091376, 111.709383], type: "Hutan Produksi" },
  { name: "Hutan Produksi Pacitan", position: [-8.187152, 111.198972], type: "Hutan Produksi" },
  { name: "Hutan Produksi Kediri", position: [-7.833918, 112.025503], type: "Hutan Produksi" },
  { name: "Hutan Produksi Tulungagung", position: [-8.083021, 111.901085], type: "Hutan Produksi" },
  { name: "Hutan Produksi Madiun", position: [-7.636186, 111.533861], type: "Hutan Produksi" },
  { name: "Hutan Produksi Ponorogo", position: [-7.870640, 111.490008], type: "Hutan Produksi" },
  { name: "Hutan Produksi Jember", position: [-8.184485, 113.668078], type: "Hutan Produksi" },
  { name: "Hutan Produksi Lumajang", position: [-8.093870, 113.236820], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bondowoso", position: [-7.992850, 113.922755], type: "Hutan Produksi" },
  { name: "Hutan Produksi Banyuwangi", position: [-8.351199, 114.331345], type: "Hutan Produksi" },
  { name: "Hutan Produksi Mojokerto", position: [-7.589037, 112.438845], type: "Hutan Produksi" },
  { name: "Hutan Produksi Surabaya", position: [-7.257472, 112.752088], type: "Hutan Produksi" },
  { name: "Hutan Produksi Gresik", position: [-7.163898, 112.655381], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bangkalan", position: [-7.036344, 112.806911], type: "Hutan Produksi" },
  { name: "Hutan Produksi Sumenep", position: [-7.023879, 113.849713], type: "Hutan Produksi" },
  { name: "Hutan Produksi Probolinggo", position: [-7.749235, 113.214933], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bondowoso", position: [-7.913706, 113.919585], type: "Hutan Produksi" },
  { name: "Hutan Produksi Blitar", position: [-8.094365, 112.161563], type: "Hutan Produksi" },
  { name: "Hutan Produksi Magetan", position: [-7.649788, 111.348709], type: "Hutan Produksi" },
  { name: "Hutan Produksi Pacitan", position: [-8.223958, 111.091303], type: "Hutan Produksi" },
  { name: "Hutan Produksi Tulungagung", position: [-8.062495, 111.899401], type: "Hutan Produksi" },
  { name: "Hutan Produksi Ngawi", position: [-7.401434, 111.443236], type: "Hutan Produksi" },
  { name: "Hutan Produksi Trenggalek", position: [-8.043850, 111.664037], type: "Hutan Produksi" },
  { name: "Hutan Produksi Bojonegoro", position: [-7.226239, 111.881093], type: "Hutan Produksi" },
  { name: "Hutan Produksi Lumajang", position: [-8.143658, 113.224698], type: "Hutan Produksi" },
  { name: "Hutan Produksi Jember", position: [-8.171611, 113.647689], type: "Hutan Produksi" },
];

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
          center={[-7.536064, 112.238401]} // Pusat peta di Jawa Timur
          zoom={7}
          style={{ height: "700px", width: "100%" }}
        >
          {/* Lapisan peta menggunakan OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker untuk setiap lokasi hutan */}
          {forests.map((forest, index) => (
            <Marker key={index} position={forest.position}>
              <Popup>
                <strong>{forest.name}</strong>
                <br />
                Jenis: {forest.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Maps;
