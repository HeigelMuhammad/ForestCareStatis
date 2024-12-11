import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formLogin;
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const { username } = response.data; // Assuming the API returns a username
        alert(`Selamat datang, ${username}`);

        setFormLogin({
          email: "",
          password: "",
        });

        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrorMessage(
          err.response.data.errors.general || "Terjadi kesalahan saat login"
        );
      } else {
        setErrorMessage("Gagal menghubungi server. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center">
      <Navbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center">
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

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

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
          <a href="#" className="text-black font-semibold">
            Buat akun
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
