import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-cream">
      <nav>
        <Navbar />
      </nav>

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-1">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4rem] font-semibold">
                Peduli Bumi
              </h2>
            </div>

            <div className="lg:py-24">
              <p className="mt-4 text-base sm:text-lg text-black">
                Bersama kita jaga kelestarian alam, demi masa depan yang lebih
                hijau dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative py-8 mx-4 sm:mx-10 lg:mx-40 -mt-32 xs:mt-56 overflow-hidden rounded-3xl">
        <img
          alt="Home Page"
          src="src/assets/HomePage.jpg"
          className="w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[500px] object-cover rounded-3xl"
        />
      </div>

      <section className="-mt-32">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24 pr-8">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
                Kenapa harus menggunakan Forest Care?
              </h2>
            </div>
            <div className="lg:py-24">
              <p className="mt-4 text-base sm:text-lg text-black">
                Setiap laporan yang kamu buat berkontribusi langsung dalam upaya
                pelestarian hutan. Laporanmu membantu pemerintah dan organisasi
                lingkungan untuk mengambil tindakan cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 sm:mx-10 lg:mx-32 -mt-8 items-center grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Deforestasi", "Reforestasi", "Berita Lain..."].map(
          (title, index) => {
            const images = [
              "src/assets/Deforestasi.jpg",
              "src/assets/Reforestasi.jpg",
              "src/assets/berita.jpg",
            ];
            return (
              <article
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer w-72 h-[300px] sm:h-[400px] lg:h-[450px]"
                onClick={() => (window.location.href = "#")}
              >
                <img
                  alt=""
                  src={images[index]}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/70 to-gray-900/25 pb-10 pt-24 sm:pt-32 lg:pt-48">
                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h3 className="mt-0.5 text-xl sm:text-2xl text-white">
                        {title}
                      </h3>
                    </a>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </section>

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="lg:py-24">
              <ul className="text-base sm:text-lg text-black space-y-4">
                <li>Pilih lokasi hutan yang ingin kamu laporkan di peta.</li>
                <li>
                  Isi formulir sederhana dengan detail aktivitas deforestasi
                  atau reforestasi.
                </li>
                <li>
                  Laporanmu akan diverifikasi oleh tim kami dan ditampilkan di
                  peta setelah validasi.
                </li>
              </ul>
              <br />
              <p className="text-base sm:text-lg text-black">
                Dengan melaporkan aktivitas deforestasi atau reforestasi, Anda
                membantu memantau kondisi hutan secara real-time, mencegah
                penebangan liar, dan mendukung pelestarian lingkungan.
              </p>
              <br />
              <p className="text-base sm:text-lg text-black">
                Laporan Anda berkontribusi pada tindakan nyata oleh pihak
                berwenang dan organisasi lingkungan, serta memastikan
                transparansi dalam upaya menjaga hutan untuk generasi mendatang.
              </p>
            </div>
            <div className="lg:py-24 flex justify-center">
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 w-full sm:w-80 md:w-[350px] lg:w-[400px] h-[400px] sm:h-[500px] cursor-pointer">
                <img
                  src="src/assets/HomePage.jpg"
                  alt="Forest Image"
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl bg-gradient-to-t from-gray-900/70 to-gray-900/25"
                />
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-white">Cara Kerja</h3>
                  <p className="mt-2 text-base sm:text-lg text-white">
                    Lapor, verifikasi, peta interaktif, pantau real-time, ambil
                    tindakan, lestarikan hutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
