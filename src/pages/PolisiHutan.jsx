"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";

export function PolisiHutan() {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Data fetched from API
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/polhut/read");
        setData(response.data.data);
      } catch (err) {
        setError("Failed to load items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleEdit = (nip) => {
    navigate(`/edit-polhut/${nip}`); // Navigate to edit report page
  };

  const handleDelete = async (nip) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/polhut/delete/${nip}`); // Correct API endpoint for deletion
        setData(data.filter((item) => item.nip !== nip));
        alert("Item deleted successfully");
      } catch (err) {
        alert("Failed to delete item");
      }
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
          <div className="w-11/12 flex justify-between items-center py-4 px-8 mb-6">
            {/* Search Input on the left */}
            <input
              type="search"
              placeholder="Cari aktivitas..."
              className="border border-gray-300 w-96 rounded-xl py-2 px-8 focus:outline-none focus:border-[#A1A890]"
            />

            {/* Tombol Tambah Polisi Hutan on the right */}
            <button
              onClick={() => navigate("/TambahPolhut")}
              className="py-2.5 px-6 w-52 bg-orange-500 text-white rounded-full hover:bg-orange-600"
            >
              Tambah Polisi Hutan
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
                    NIP
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Foto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((item) => (
                  <tr
                    key={item.nip}
                    className="odd:bg-white even:bg-gray-50 border-b"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.nama}
                    </td>
                    <td className="px-6 py-4">{item.nip}</td>
                    <td className="px-6 py-4">
                      <img
                        src={`http://127.0.0.1:8000/storage/${item.foto}`}
                        alt={`Foto ${item.nama}`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 flex space-x-4">
                      <button
                        onClick={() => handleEdit(item.nip)}
                        className="py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.nip)}
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

export default PolisiHutan;
