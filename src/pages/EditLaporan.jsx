import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

function EditLaporan() {
  const { id } = useParams(); // ID laporan dari URL
  const navigate = useNavigate();
  const [laporan, setLaporan] = useState(null); // Data laporan
  const [status, setStatus] = useState(""); // Status laporan
  const [polisiHutan, setPolisiHutan] = useState([]); // Data polisi hutan dari dummy
  const [selectedNip, setSelectedNip] = useState(""); // NIP polisi hutan yang dipilih
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch data laporan berdasarkan ID (dummy data)
    const laporanDummy = {
      id: id,
      tanggalKirim: "2024-11-28",
      namaPelapor: "Budi Santoso",
      noTelepon: "08123456789",
      jenisAktivitas: "Penebangan Liar",
      lokasi: {
        provinsi: "Jawa Tengah",
        kabupaten: "Karanganyar",
        kecamatan: "Tawangmangu",
        desa: "Sidoharjo",
      },
      tanggalKejadian: "2024-11-20",
      deskripsi: "Penebangan liar di area hutan lindung.",
      fotoBukti: "https://via.placeholder.com/150",
      status: "Pending",
    };

    const polisiHutanDummy = [
      { nip: "123456789", nama: "Polisi Hutan A" },
      { nip: "987654321", nama: "Polisi Hutan B" },
    ];

    setLaporan(laporanDummy);
    setStatus(laporanDummy.status);
    setPolisiHutan(polisiHutanDummy);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!status) {
      setErrorMessage("Status laporan wajib diisi.");
      return;
    }

    if (!selectedNip) {
      setErrorMessage("Pilih polisi hutan yang akan menangani laporan.");
      return;
    }

    setErrorMessage("");
    alert(`Laporan berhasil diperbarui!\n\nStatus: ${status}\nPolisi Hutan: ${selectedNip}`);
    navigate("/AdminDashboard"); // Kembali ke dashboard
  };

  if (!laporan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdminNavbar />
      <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center mt-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center mt-28 mb-28">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Edit Laporan #{id}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Data Laporan */}
            <div>
              <h3 className="text-lg font-bold mb-2">Detail Laporan</h3>
              <p>
                <strong>Tanggal Dikirim:</strong> {laporan.tanggalKirim}
              </p>
              <p>
                <strong>Nama Pelapor:</strong> {laporan.namaPelapor}
              </p>
              <p>
                <strong>No. Telepon:</strong> {laporan.noTelepon}
              </p>
              <p>
                <strong>Jenis Aktivitas:</strong> {laporan.jenisAktivitas}
              </p>
              <p>
                <strong>Lokasi:</strong>{" "}
                {`${laporan.lokasi.desa}, ${laporan.lokasi.kecamatan}, ${laporan.lokasi.kabupaten}, ${laporan.lokasi.provinsi}`}
              </p>
              <p>
                <strong>Tanggal Kejadian:</strong> {laporan.tanggalKejadian}
              </p>
              <p>
                <strong>Deskripsi:</strong> {laporan.deskripsi}
              </p>
              <div>
                <strong>Foto Bukti:</strong>
                <img
                  src={laporan.fotoBukti}
                  alt="Foto Bukti"
                  className="mt-2 rounded-lg w-full max-w-xs"
                />
              </div>
            </div>

            {/* Edit Status Laporan */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Status Laporan
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Tambah Polisi Hutan */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Polisi Hutan yang Menangani
              </label>
              <select
                value={selectedNip}
                onChange={(e) => setSelectedNip(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              >
                <option value="">Pilih Polisi Hutan</option>
                {polisiHutan.map((polhut) => (
                  <option key={polhut.nip} value={polhut.nip}>
                    {polhut.nama} ({polhut.nip})
                  </option>
                ))}
              </select>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditLaporan;
