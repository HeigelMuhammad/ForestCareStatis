import { useState } from "react"; // useState - This is a React Hook
import Navbar from "../components/AdminNavbar";
import axios from "axios";

function TambahAdmin() {
  // useState Hook - used for managing form input states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage(""); // Clears error message
    alert(` ${username} Telah ditambahkan sebagai admin`);
  };

  return (
    <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center mt-10">
      <Navbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Tambah admin</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {" "}
          {/* Event handler for submit */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username Admin
            </label>
            <input
              type="text"
              name="username"
              value={username} // useState - input value controlled by useState
              onChange={(e) => setUsername(e.target.value)} // Event handler - updates state on input change
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Tambahkan username admin"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Admin
            </label>
            <input
              type="email"
              name="email"
              value={email} // useState - input value controlled by useState
              onChange={(e) => setEmail(e.target.value)} // Event handler - updates state on input change
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Tambahkan email admin"
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
              value={password} // useState - input value controlled by useState
              onChange={(e) => setPassword(e.target.value)} // Event handler - updates state on input change
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your password"
              required
            />
          </div>
          
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p> // useState - displays error message if set
          )}
          <button
            type="submit"
            className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Tambahkan Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default TambahAdmin;
