import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login status

  useEffect(() => {
    // Cek status login saat komponen dimuat
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        if (token) {
          // Simulasi pengecekan token melalui API
          const response = await axios.get("http://127.0.0.1:8000/auth/login", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.status === 200) {
            setIsLoggedIn(true);
          }
        }
      } catch (err) {
        console.error("Gagal memeriksa status login:", err);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignUp = () => {
    navigate("/Register"); // Arahkan ke halaman Sign Up
  };

  const handleLogin = () => {
    navigate("/Login"); // Arahkan ke halaman Login
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      if (token) {
        await axios.post(
          "http://127.0.0.1:8000/auth/logout",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        localStorage.removeItem("auth_token");
        setIsLoggedIn(false);
        navigate("/"); // Arahkan ke halaman Home
      }
    } catch (err) {
      console.error("Gagal logout:", err);
    }
  };

  return (
    <div className="z-50">
      <div className="bg-hijau fixed w-full h-7 z-20 top-0 start-0"></div>
      <nav className="bg-cream fixed w-full z-10 top-0 start-0 pt-7 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="assets/logoforest.svg"
              className="h-7"
              alt="Forest Care Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
              Forest
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Care
            </span>
          </a>
          <div className="flex md:order-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-black font-normal rounded-full text-sm px-4 py-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="text-white bg-orange hover:bg-black font-normal rounded-full text-sm px-4 py-2"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="text-white bg-black hover:bg-black font-normal rounded-full text-sm px-4 py-2"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-sm rounded-full md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/Reforestasi")}
                >
                  Reforestasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/Deforestasi")}
                >
                  Deforestasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/Pelaporan")}
                >
                  Pelaporan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/RiwayatLaporan")}
                >
                  Riwayat Pelaporan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/Maps")}
                >
                  Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
