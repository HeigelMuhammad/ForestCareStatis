import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi

function NavbarAdmin() {
  const navigate = useNavigate(); // Inisialisasi hook untuk navigasi

  return (
    <div>
      <div className="bg-hijau fixed w-full h-7 z-20 top-0 start-0"></div>
      <nav className="bg-cream fixed w-full z-10 top-0 start-0 pt-7 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Perbaikan: Tag <img> dibuat self-closing */}
            <img
              src="src/assets/logoforest.svg"
              className="h-7"
              alt=""
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
              Forest
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Care
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-orange hover:bg-black font-normal rounded-full text-sm px-4 py-2 text-center "
              onClick={() => navigate("/AdminLogin")} // Fungsi untuk navigasi ke halaman Register
            >
              Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-sm rounded-full  md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  aria-current="page"
                  onClick={() => navigate("#")}
                >
                  Infografis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/AdminDashboard")}
                >
                  Pelapor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/AdminPengguna")}
                >
                  Pengguna
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black rounded-full bg-hijaugel px-5 py-2 hover:bg-hijau active:bg-black active:text-white transition-all duration-200 ease-in-out"
                  onClick={() => navigate("/Tabel-Polisi-Hutan")}
                >
                  Polisi Hutan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
