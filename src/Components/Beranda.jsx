import React, { useEffect, useState } from "react";
import imgberanda from "../Assets/imgberanda.webp";
import { IoIosDownload } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Beranda = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const toggleTextExpansion = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos");
      AOS.default.init({
        once: true,
      });
    };
    initAOS();
  }, []);

  const handleDownload = () => {
    const fileURL =
      "https://drive.google.com/file/d/1-TQaL-yDP7jTDcVW9d0-s4An9yaGePOz/view?usp=sharing";
    window.open(fileURL, "_blank");
  };

  return (
    <section id="home">
      <div>
        <div className="pt-28 md:pt-20 pb-5 bg-cpsecond">
          <div className="container">
            <div className="flex flex-wrap lg:mt-24">
              <div
                className="w-full self-center px-4 lg:w-1/2"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
              >
                <h2 className="text-sm font-semibold text-white lg:text-3xl">
                  Hello Buds
                </h2>
                <h1 className="font-bold text-cpyellow text-2xl mt-3 lg:text-5xl xl:text-6xl">
                  I am Bima Sanjaya
                </h1>
                <p className="font-medium text-cplight mt-2 text-sm mb-3 md:mb-5 md:text-base xl:text-lg">
                  i'm a{" "}
                  <span className="text-cpyellow font-bold">
                    Front-End Developer
                  </span>
                </p>
                <div>
                  <p
                    className={`font-small text-cplight leading-relaxed text-justify lg:mr-6 text-md md:text-lg lg:font-medium ${
                      isTextExpanded
                        ? ""
                        : "overflow-hidden line-clamp-3 lg:line-clamp-none"
                    }`}
                  >
                    As a final semester student majoring in Computer and
                    Information Technology Education, I specialize in front-end
                    development. In my role as a junior front-end developer, I
                    have gained substantial experience in designing and
                    developing responsive and engaging user interfaces (UI)
                    using HTML, CSS, and JavaScript. Additionally, I have
                    knowledge in utilizing frameworks such as React and Tailwind
                    to build interactive and responsive web applications.
                    Moreover, I am proficient in handling RESTful API operations
                    effectively to collaborate with the backend team and
                    familiar with the usage of Git.
                  </p>
                  {!isTextExpanded ? (
                    <span
                      onClick={toggleTextExpansion}
                      className="cursor-pointer text-sm lg:font-semibold font-semibold text-cpyellow hover:underline md:text-base md:hidden"
                    >
                      Read More...
                    </span>
                  ) : (
                    <span
                      onClick={toggleTextExpansion}
                      className="cursor-pointer text-sm lg:font-semibold font-semibold text-cpyellow hover:underline md:text-base"
                    >
                      Read Less
                    </span>
                  )}
                </div>

                <button
                  onClick={handleDownload}
                  className="text-sm lg:font-semibold font-semibold flex items-center text-black bg-cpyellow py-2 px-3 mt-10  rounded-md hover:shadow-xl hover:bg-cplight md:font-semibold md:text-lg md:py-2 md:px-5"
                >
                  <IoIosDownload className="mr-2 text-lg lg:text-2xl " />
                  Download CV
                </button>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div
                  className="mt-10 lg:mt-9 lg:right-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={imgberanda}
                    alt="imgberanda"
                    className="object-cover mx-auto"
                    width="400"
                    height="200"
                  />
                </div>
                <div
                  className="w-full flex items-center justify-center gap-3 md:flex-row md:justify-end md:items-center md:gap-8 mt-24 pb-12 md:pb-0"
                  data-aos="fade-up"
                >
                  <h3 className="font-semibold text-white pt-2 text-base max-w-md lg:text-xl">
                    Find Me On
                  </h3>
                  <div className="flex items-center gap-1.5 md:gap-6">
                    <a
                      href="https://github.com/Bimasanjaya0704"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare className="text-2xl md:text-4xl text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bimasanjaya/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-2xl md:text-4xl text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://www.instagram.com/bim.sanss"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagramSquare className="text-2xl md:text-4xl text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://facebook.com/bima.c.cetia.1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookSquare className="text-2xl md:text-4xl text-cplight hover:text-cpyellow" />
                    </a>
                  </div>
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
