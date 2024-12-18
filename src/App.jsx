import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminNavbar from "./components/AdminNavbar";
import Maps from "./pages/Maps";
import Pelaporan from "./pages/Pelaporan";
import AdminPengguna from "./pages/AdminPengguna";
import Reforestasi from "./pages/Reforestasi";
import Deforestasi from "./pages/Deforestasi";
import TambahPolhut from "./pages/TambahPolhut";
import RiwayatLaporan from "./pages/RiwayatLaporan";
import DetailLaporan from "./pages/DetailLaporan";
import EditLaporan from "./pages/EditLaporan";
import PolisiHutan from "./pages/PolisiHutan";
import EditPolhut from "./pages/EditPolhut";
import TambahAdmin from "./pages/TambahAdmin";
import DetailLaporanAdmin from "./pages/DetailLaporanAdmin";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminNav" element={<AdminNavbar />} />
            <Route path="/Maps" element={<Maps />} />
            <Route path="/Pelaporan" element={<Pelaporan />} />
            <Route path="/AdminPengguna" element={<AdminPengguna />} />
            <Route path="/Reforestasi" element={<Reforestasi />} />
            <Route path="/Deforestasi" element={<Deforestasi />} />
            <Route path="/TambahPolhut" element={<TambahPolhut />} />
            <Route path="/RiwayatLaporan" element={<RiwayatLaporan />} />
            <Route path="/riwayat-laporan/:id" element={<DetailLaporan />} />
            <Route path="/edit-laporan-admin" element={<EditLaporan />} />
            <Route path="/Tabel-Polisi-Hutan" element={<PolisiHutan />} />
            <Route path="/edit-polhut" element={<EditPolhut />} />
            <Route path="/tambah-admin" element={<TambahAdmin />} />
            <Route path="/DetailLaporanAdmin" element={<DetailLaporanAdmin />} />
            {/* Route for viewing item details */}
            <Route path="/pelaporan/detail/:id" element={<DetailLaporanAdmin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
