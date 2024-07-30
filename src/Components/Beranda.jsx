import React, { useEffect, useState } from "react";
import imgberanda from "../Assets/photo.webp";
import { IoIosDownload } from "react-icons/io";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      "https://drive.google.com/file/d/1HN9eLWCp05gDj5vurxvJ0izAIv1BWwjM/view?usp=sharing";
    window.open(fileURL, "_blank");
  };

  return (
    <section id="home">
      <div>
        <div className="pt-28 pb-5 bg-bglight dark:bg-cpsecond">
          <div className="container">
            <div className="flex flex-wrap">
              <div
                className="w-full self-center px-4 lg:w-1/2"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
              >
                <h1 className="text-sm font-semibold text-dark dark:text-cplight lg:text-3xl">
                  Hello Buds
                </h1>
                <h2 className="font-bold text-cpyellow text-2xl mt-3 lg:text-5xl xl:text-6xl">
                  I am Bima Sanjaya
                </h2>
                <p className="font-medium text-cpdark dark:text-cplight mt-2 text-sm mb-3 md:mb-5 md:text-base xl:text-lg">
                  I'm a{" "}
                  <span className="text-cpyellow font-bold">
                    Front-End Developer
                  </span>
                </p>
                <div>
                  <p
                    className={`font-small text-cpdark dark:text-cplight leading-relaxed text-justify lg:mr-6 text-md md:text-lg lg:font-medium ${
                      isTextExpanded
                        ? ""
                        : "overflow-hidden line-clamp-3 lg:line-clamp-none"
                    }`}
                  >
                   I am a recent graduate from Semarang State University with a Bachelor's degree in Computer and Information Technology Education. I specialize in front-end development and have experience in building responsive and engaging user interfaces (UI) using HTML, CSS, and JavaScript. I am proficient in using frameworks such as React and Tailwind CSS to create interactive and customizable web applications. My skills also include API integration, enabling smooth collaboration with backend teams, and version control with Git to ensure efficient and collaborative project development.
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
                  className="text-sm lg:font-semibold font-semibold flex items-center text-cplight dark:text-cpdark bg-cpyellow py-2 px-3 mt-10 rounded-md hover:shadow-xl hover:bg-cplight md:font-semibold md:text-lg md:py-2 md:px-5"
                >
                  <IoIosDownload className="mr-2 text-lg lg:text-2xl " />
                  Download CV
                </button>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div
                  className="mt-10 lg:right-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <LazyLoadImage
                    src={imgberanda}
                    alt="Bima Sanjaya"
                    className="max-w-full mx-auto object-cover"
                    width="400"
                    height="200"
                  />
                </div>
                <div
                  className="w-full flex items-center justify-center gap-3 md:flex-row md:justify-end md:items-center md:gap-8 mt-24 pb-12 md:pb-0"
                  data-aos="fade-up"
                >
                  <h2 className="font-semibold text-cpdark dark:text-cplight pt-2 text-base max-w-md lg:text-xl">
                    Find Me On
                  </h2>
                  <div className="flex items-center gap-1.5 md:gap-6">
                    <a
                      href="https://github.com/Bimasanjaya0704"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit my GitHub profile"
                    >
                      <FaGithubSquare className="text-2xl md:text-4xl text-cpdark dark:text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bimasanjaya/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Connect with me on LinkedIn"
                    >
                      <FaLinkedin className="text-2xl md:text-4xl text-cpdark dark:text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://www.instagram.com/bim.sanss"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Follow me on Instagram"
                    >
                      <FaInstagramSquare className="text-2xl md:text-4xl text-cpdark dark:text-cplight hover:text-cpyellow" />
                    </a>
                    <a
                      href="https://facebook.com/bima.c.cetia.1"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Connect with me on Facebook"
                    >
                      <FaFacebookSquare className="text-2xl md:text-4xl text-cpdark dark:text-cplight hover:text-cpyellow" />
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
