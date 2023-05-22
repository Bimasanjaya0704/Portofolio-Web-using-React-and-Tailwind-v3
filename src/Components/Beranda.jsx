import React, { useEffect } from "react";
import { Link } from "react-scroll";
import imgberanda from "../Assets/imgberanda.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "animate.css";

const Beranda = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleDownload = () => {
    const fileURL =
      "https://drive.google.com/file/d/1Ej8Xn_l4qyoaL-J6BmILRfoP7KS7FDxn/view?usp=sharing"; // Ubah sesuai dengan path file CV Anda
    window.open(fileURL, "_blank");
  };

  return (
    <section id="home">
      <div>
        <div className=" pt-20 pb-5 bg-cpsecond">
          <div className="container">
            <div className="flex flex-wrap">
              <div
                className="w-full self-center px-4 lg:w-1/2"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
              >
                <h2 className="text-sm uppercase font-semibold text-white lg:text-lg">
                  Halo Semua, Saya
                </h2>
                <h1 className="font-bold uppercase text-cpyellow text-3xl mt-3 lg:text-5xl xl:text-6xl">
                  Bima Sanjaya
                </h1>
                <p className="font-medium text-cplight text-sm mb-5 md:text-base xl:text-lg animate__animated animate__flash animate__slower animate__infinite">
                  i'm a Front-End Developer
                </p>

                <p className="font-small text-cplight mb-10 leading-relaxed text-sm md:text-base lg:font-normal">
                  Transformasikan ide-ide Anda menjadi tampilan web yang memikat
                  dengan sentuhan desain yang
                  <span className="text-cpyellow"> kreatif</span>
                </p>
                <button
                  onClick={handleDownload}
                  className="text-sm font-semibold text-cpyellow bg-cpsecond border-2 border-cpyellow py-1 px-3  rounded-full hover:shadow-xl hover:bg-cplight hover:text-cpyellow hover:border-2 hover:border-white md:text-base md:py-2 md:px-5 animate__animated animate__headShake animate__slow animate__infinite"
                >
                  Download CV
                </button>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div
                  className="relative mt-10 lg:mt-9 lg:right-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={imgberanda}
                    alt="imgberanda"
                    className="max-w-full mx-auto object-cover animate__animated animate__pulse animate__slow animate__infinite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
