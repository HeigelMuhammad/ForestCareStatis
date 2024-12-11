import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";

function AdminLogin() {
  const [nama, setNama] = useState(""); //useState

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selamat datang  ${nama}`);
  };

  return (
    <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center">
      <AdminNavbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              value={nama}
              onChange={(e) => setNama(e.target.value)} //EventHandler
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Belum memiliki akun?{" "}
          <a href="#" className="text-black font-semibold">
            Buat akun
          </a>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
