"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

export function AdminPengguna() {
  // Dummy data untuk menampilkan tabel
  const [data] = useState([
    {
      nama: "Zakaria Zidan",
      role: "Admin",
      tanggal_buat: "2024-01-01",
      deskripsi: "Admin",
      edit: "Hapus",
    },
    {
      nama: "Heigel Muhammad",
      role: "Admin",
      tanggal_buat: "2024-02-01",
      deskripsi: "Admin",
      edit: "Hapus",
    },
    // Tambahkan data dummy lainnya untuk demonstrasi
  ]);

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Hitung total halaman berdasarkan jumlah data
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Tentukan data yang ditampilkan sesuai dengan halaman aktif
  const displayedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="w-full overflow-x-auto bg-[#FFF6E4] font-poppins min-h-screen">
        <AdminNavbar />
        <main className="flex flex-col items-center mt-40">
          <div className="w-11/12 flex justify-between items-center py-4 px-8 mb-6">
            {/* Search Input on the left */}
            <input
              type="search"
              placeholder="Cari admin..."
              className="border border-gray-300 rounded-xl py-2 px-4 w-1/2 focus:outline-none focus:border-[#A1A890]"
            />
            {/* If you want to add a button, you can place it here */}
            <button
              onClick={() => navigate("/tambah-admin")}
              className="py-2.5 px-6 w-52 bg-orange text-white rounded-full hover:bg-black"
            >
              Tambah Admin
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Buat
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-gray-50 border-b"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.nama}
                    </td>
                    <td className="px-6 py-4">{item.role}</td>
                    <td className="px-6 py-4">{item.tanggal_buat}</td>
                    <td className="px-6 py-4">{item.role}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {item.edit}
                      </a>
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
              className={`py-2 px-4 rounded-full ${
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
              className={`py-2 px-4 rounded-full ${
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminPengguna;
