import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DetailLaporan() {
  const { id } = useParams();

  const laporan = {
    id: id,
    jenisAktivitas: "Penebangan Liar",
    tanggal: "2024-11-28",
    deskripsi: "Penebangan liar di kawasan hutan lindung.",
    status: "Diproses",
    polisiHutan: {
      nip: "12345678",
      nama: "Budi Santoso",
      foto: "https://via.placeholder.com/150",
    },
    buktiPenanganan: "https://via.placeholder.com/300",
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-20 bg-[#FFF6E4] font-poppins py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Detail Laporan
        </h2>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">
            {laporan.jenisAktivitas}
          </h3>
          <p className="text-gray-600 mb-2">Tanggal: {laporan.tanggal}</p>
          <p className="text-gray-600 mb-4">{laporan.deskripsi}</p>
          <p className={`mt-2 text-sm ${
            laporan.status === "Selesai" ? "text-green-600" : "text-yellow-600"
          }`}>
            Status: {laporan.status}
          </p>
          <h4 className="text-lg font-bold mt-6">Polisi Hutan</h4>
          <div className="flex items-center mt-2">
            <img
              src={laporan.polisiHutan.foto}
              alt="Polisi Hutan"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{laporan.polisiHutan.nama}</p>
              <p className="text-sm text-gray-600">NIP: {laporan.polisiHutan.nip}</p>
            </div>
          </div>
          <h4 className="text-lg font-bold mt-6">Bukti Penanganan</h4>
          <a
            href={laporan.buktiPenanganan}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 block"
          >
            Lihat Bukti Penanganan
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailLaporan;
