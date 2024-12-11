import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Deforestasi() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1, // trigger animation when 10% of the section is visible
      }
    );

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-poppins">
      <nav>
        <Navbar />
      </nav>
      <article className="mt-24 bg-cream">
        {/* Introduction Section */}
        <section
          className="bg-cream opacity-0 translate-y-10 transition duration-500"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16">
            <div className="place-self-center">
              <h1 className="text-4xl font-semibold leading-none mb-4 md:text-5xl xl:text-6xl text-black">
                Apa Itu Deforestasi?
              </h1>
              <p className="font-normal text-black text-base md:text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl">
                Deforestasi adalah proses penggundulan atau penghancuran hutan
                secara permanen, di mana lahan hutan diubah menjadi area
                non-hutan seperti perkebunan, perumahan, atau industri. Di
                Indonesia, deforestasi menjadi salah satu masalah lingkungan
                terbesar, karena hutan tropis yang luas dan kaya akan
                keanekaragaman hayati terus berkurang secara signifikan dari
                waktu ke waktu.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="src/assets/DeforestasiPage.jpg"
                alt="Reforest"
                className="h-96 w-3/4 rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Mengapa Reforestasi Penting Section */}
        <section
          className="opacity-0 translate-y-10 transition duration-500"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24 pr-8">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
                  Penyebab Utama Deforestasi{" "}
                </h2>
              </div>
              <div className="lg:py-24">
                <p className="mt-4 text-base sm:text-lg text-black">
                  Ada beberapa faktor yang menyebabkan deforestasi di Indonesia,
                  di antaranya:
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section
          className="mb-16 px-4 opacity-0 translate-y-10 transition duration-500"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
            {[
              {
                title: "Pembukaan Lahan untuk Pertanian",
                image: "src/assets/lahan-pertanian.jpg",
              },
              {
                title: "Pembangunan Infrastruktur",
                image: "src/assets/infrastruktur.jpg",
              },
              {
                title: "Pertambangan",
                image: "src/assets/pertambangan.jpg",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card bg-hijau shadow-xl pb-16 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <figure className="">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full object-cover rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center pt-6">
                  <h2 className="card-title font-semibold text-lg text-black">
                    {card.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upaya Reforestasi di Indonesia Section */}
        <section
          className="opacity-0 translate-y-10 transition duration-500"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-24 pr-8">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
                  Dampak Deforestasi{" "}
                </h2>
              </div>
              <div className="lg:py-24">
                <p className="mt-4 text-base sm:text-lg text-black">
                  Indonesia telah menghadapi tantangan besar dalam hal
                  deforestasi selama beberapa dekade terakhir. Namun, berbagai
                  upaya reforestasi telah dilakukan oleh pemerintah, lembaga
                  non-pemerintah, serta komunitas lokal untuk membalikkan tren
                  tersebut.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section
          className="mb-16 px-4 opacity-0 translate-y-10 transition duration-500"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
            {[
              {
                title: "Perubahan Iklim",
                image: "src/assets/iklim.jpg",
              },
              {
                title: "Hilangnya Keanekaragaman Hayati",
                image: "src/assets/hilang-anekaragam.jpg",
              },
              {
                title: "Gangguan pada Siklus Air",
                image: "src/assets/gangguan-air.jpg",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card bg-hijau shadow-xl pb-16 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <figure className="">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full object-cover rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center pt-6">
                  <h2 className="card-title font-semibold text-lg text-black">
                    {card.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Deforestasi;
