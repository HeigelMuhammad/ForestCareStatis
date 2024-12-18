import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

function TambahPolhut() {
  const [formPolhut, setFormPolhut] = useState({
    nip: "",
    nama: "",
    foto: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPolhut({
      ...formPolhut,
      [name]: value,
    });
  };

  const handleFotoChange = (e) => {
    setFormPolhut({
      ...formPolhut,
      foto: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nip, nama, foto } = formPolhut;

    if (!nip || !nama || !foto) {
      setErrorMessage("NIP, Nama, dan Foto wajib diisi.");
      return;
    }

    // Simulasi penyimpanan data
    const dummyDatabase = JSON.parse(localStorage.getItem("polhutData")) || [];
    const newEntry = { id: Date.now(), nip, nama, foto: foto.name };

    dummyDatabase.push(newEntry);
    localStorage.setItem("polhutData", JSON.stringify(dummyDatabase));

    setSuccessMessage("Data polisi hutan berhasil disimpan!");
    setErrorMessage("");
    setFormPolhut({ nip: "", nama: "", foto: null });

    setTimeout(() => {
      navigate("/Tabel-Polisi-Hutan"); // Arahkan ke halaman tabel
    }, 2000); // Arahkan setelah 2 detik
  };

  return (
    <div>
      <AdminNavbar />
      <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center mt-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center mt-28 mb-28">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Tambah Data Polisi Hutan
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="nip"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                NIP
              </label>
              <input
                type="text"
                name="nip"
                value={formPolhut.nip}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
                placeholder="Masukkan NIP"
                required
              />
            </div>

            <div>
              <label
                htmlFor="nama"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Nama
              </label>
              <input
                type="text"
                name="nama"
                value={formPolhut.nama}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
                placeholder="Masukkan Nama"
                required
              />
            </div>

            <div>
              <label
                htmlFor="foto"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Foto
              </label>
              <input
                type="file"
                name="foto"
                onChange={handleFotoChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Simpan Data
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TambahPolhut;
