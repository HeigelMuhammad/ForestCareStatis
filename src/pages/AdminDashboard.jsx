"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); // State untuk menyimpan daftar laporan
  const [loading, setLoading] = useState(true); // Status loading
  const [error] = useState(null); // Status error

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Data dummy
  const dummyData = [
    {
      id: 1,
      jenis_aktivitas: "Penebangan Liar",
      kecamatan: "Kepanjen",
      tanggal_kejadian: "2024-12-15",
      status: "Diproses",
    },
    {
      id: 2,
      jenis_aktivitas: "Perburuan Liar",
      kecamatan: "Cileunyi",
      tanggal_kejadian: "2024-12-12",
      status: "Selesai",
    },
    {
      id: 3,
      jenis_aktivitas: "Pembuangan Limbah",
      kecamatan: "Wonokromo",
      tanggal_kejadian: "2024-12-10",
      status: "Menunggu",
    },
    // Tambahkan lebih banyak data dummy sesuai kebutuhan
  ];

  useEffect(() => {
    // Simulasi fetching data menggunakan data dummy
    setLoading(true);
    setTimeout(() => {
      setItems(dummyData);
      setLoading(false);
    }, 1000); // Simulasi waktu loading
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleEdit = (id) => {
    navigate(`/edit-laporan-admin/${id}`); // Navigasi ke halaman edit laporan
  };

  const handleDetail = (id) => {
    navigate(`/DetailLaporanAdmin/${id}`); // Navigasi ke halaman detail laporan
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus laporan ini?")) {
      setItems(items.filter((item) => item.id !== id));
      alert("Laporan berhasil dihapus.");
    }
  };

  const totalPages = Math.ceil(items.length / rowsPerPage);
  const displayedData = items.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="w-full overflow-x-auto bg-[#FFF6E4] font-poppins min-h-screen">
        <AdminNavbar />
        <main className="flex flex-col items-center mt-40">
          <input
            type="search"
            placeholder="Cari aktivitas..."
            className="border border-gray-300 rounded-xl py-2 px-4 mb-6 w-1/2 focus:outline-none focus:border-[#A1A890]"
          />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Jenis Aktivitas
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((item) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white even:bg-gray-50 border-b"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.jenis_aktivitas}
                    </td>
                    <td className="px-6 py-4">{item.kecamatan}</td>
                    <td className="px-6 py-4">{item.tanggal_kejadian}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4 gap-1">
                      <button
                        onClick={() => handleDetail(item.id)}
                        className="py-2 px-4 bg-orange text-white rounded-full hover:bg-orange-600"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-700"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4 w-11/12">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`py-2 px-4 border rounded-full ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500"
                  : "bg-[#F79E1B] text-white hover:bg-orange-600"
              }`}
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`py-2 px-4 border rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500"
                  : "bg-[#F79E1B] text-white hover:bg-orange-600"
              }`}
            >
              Next
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
