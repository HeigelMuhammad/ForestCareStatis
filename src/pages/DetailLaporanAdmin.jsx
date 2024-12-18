import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

function DetailLaporanAdmin() {
  const { id } = useParams(); // ID laporan dari URL
  const [pelaporan, setPelaporan] = useState(null); // Data laporan
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Error handling

  // Data dummy
  const dummyData = {
    1: {
      jenis_aktivitas: "Penebangan Liar",
      nomor_telepon: "081234567890",
      provinsi: "Jawa Timur",
      kabupaten: "Malang",
      kecamatan: "Kepanjen",
      kelurahan: "Ngadilangkung",
      tanggal_kejadian: "2024-12-15",
      deskripsi: "Ada aktivitas penebangan liar di hutan daerah Ngadilangkung.",
      status: "Diproses",
      file_path: "contoh-foto.jpg",
    },
    2: {
      jenis_aktivitas: "Perburuan Liar",
      nomor_telepon: "082134567890",
      provinsi: "Jawa Barat",
      kabupaten: "Bandung",
      kecamatan: "Cileunyi",
      kelurahan: "Cibiru",
      tanggal_kejadian: "2024-12-12",
      deskripsi: "Perburuan liar terjadi di sekitar hutan lindung Bandung.",
      status: "Selesai",
      file_path: null,
    },
  };

  useEffect(() => {
    // Simulasi fetching data dari server menggunakan ID
    setLoading(true);
    setTimeout(() => {
      const laporan = dummyData[id];
      if (laporan) {
        setPelaporan(laporan);
        setError(null);
      } else {
        setError("Laporan tidak ditemukan!");
      }
      setLoading(false);
    }, 1000); // Simulasi waktu loading
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <AdminNavbar />
      <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center mt-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center mt-28 mb-28">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Detail Laporan {id}
          </h2>

          {/* Data Laporan */}
          <div>
            <h3 className="text-lg font-bold mb-2">Detail Laporan</h3>
            <p>
              <strong>Jenis Aktivitas:</strong> {pelaporan?.jenis_aktivitas || "N/A"}
            </p>
            <p>
              <strong>No. Telepon:</strong> {pelaporan?.nomor_telepon || "N/A"}
            </p>
            <p>
              <strong>Provinsi:</strong> {pelaporan?.provinsi || "N/A"}
            </p>
            <p>
              <strong>Kabupaten:</strong> {pelaporan?.kabupaten || "N/A"}
            </p>
            <p>
              <strong>Kecamatan:</strong> {pelaporan?.kecamatan || "N/A"}
            </p>
            <p>
              <strong>Kelurahan:</strong> {pelaporan?.kelurahan || "N/A"}
            </p>
            <p>
              <strong>Tanggal Kejadian:</strong> {pelaporan?.tanggal_kejadian || "N/A"}
            </p>
            <p>
              <strong>Deskripsi:</strong> {pelaporan?.deskripsi || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {pelaporan?.status || "N/A"}
            </p>
            <div>
              <strong>Foto Bukti:</strong>
              {pelaporan?.file_path ? (
                <img
                  src={`http://127.0.0.1:8000/storage/pelaporan_files/${pelaporan.file_path}`}
                  alt="Foto Bukti"
                  className="mt-2 rounded-lg w-full max-w-xs"
                />
              ) : (
                <p>Tidak ada foto bukti</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailLaporanAdmin;
