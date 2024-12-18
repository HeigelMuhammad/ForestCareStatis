import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Data pengguna dummy
  const dummyUser = {
    email: "test@example.com",
    password: "password123",
    username: "JohnDoe",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // Simulasi proses login
    setTimeout(() => {
      if (
        formLogin.email === dummyUser.email &&
        formLogin.password === dummyUser.password
      ) {
        // Simpan data pengguna di localStorage
        localStorage.setItem("auth_token", "dummyToken123"); // Token dummy
        localStorage.setItem(
          "user_data",
          JSON.stringify({
            username: dummyUser.username,
            email: dummyUser.email,
          })
        );

        alert(`Selamat datang, ${dummyUser.username}`);
        setFormLogin({
          email: "",
          password: "",
        });

        navigate("/"); // Redirect ke halaman dashboard setelah login
      } else {
        setErrorMessage("Email atau password salah.");
      }
      setLoading(false);
    }, 1000); // Simulasi waktu tunggu
  };

  return (
    <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center">
      <Navbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

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
              name="email"
              value={formLogin.email}
              onChange={handleChange}
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
              value={formLogin.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Belum memiliki akun?{" "}
          <a href="/register" className="text-black font-semibold">
            Buat akun
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
