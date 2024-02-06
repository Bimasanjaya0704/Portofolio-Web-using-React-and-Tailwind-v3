import React from "react";
import Porto1 from "../Assets/bimovies.png";
import Porto2 from "../Assets/porto2.png";
import Porto3 from "../Assets/lesyuk.png";
import Porto5 from "../Assets/prakalight.png";
import Porto4 from "../Assets/peringkas teks.png";
import Porto6 from "../Assets/wawasanedukasi.png";
import { CgArrowTopRightR } from "react-icons/cg";
import { PiGithubLogoFill } from "react-icons/pi";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div className="py-8 md:py-12 bg-cpdark">
        <div className="container">
          <div
            className="max-w-5xl mx-auto text-center mb-8 md:px-14"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
              My Project
            </h4>
            <p className="font-normal text-sm text-center text-cplight mt-1 md-font-medium md:text-lg">
              Explore some of my notable projects and contributions in the field
              of web development.
            </p>
          </div>
          <div className="w-full">
            {/* Project 1 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img src={Porto1} alt="Web Movies" className="w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    BIMovies
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Developing a Web API Movie application that allows users to
                  search for movie information such as title, images, and
                  ratings. Users can search for movies based on the title and
                  receive accurate and informative results. This project is
                  built using React JS and Tailwind, with the API sourced from
                  "themoviedb."
                </p>
                <div
                  className="flex items-center mt-12 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://webmovies-bimovies.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <CgArrowTopRightR />
                    Visit
                  </a>
                  <a
                    href="https://github.com/Bimasanjaya0704/Web-movies-using-ReactJS-and-Tailwind-with-TMDB-API"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PiGithubLogoFill />
                    Go to Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img src={Porto2} alt="TodoList" className="w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    TodoList
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  The TodoList project is a web application designed to help
                  users manage their tasks efficiently. It provides a
                  user-friendly interface for creating, editing, and deleting
                  tasks. Users can organize their activities. The application is
                  built using modern web technologies, including React JS for
                  the frontend and state management, ensuring a dynamic and
                  responsive user experience.
                </p>
                <div
                  className="flex items-center mt-4 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://github.com/Bimasanjaya0704/Todo-list-with-ReactJS"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <PiGithubLogoFill />
                    Go to Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img src={Porto5} alt="Prakalight" className="w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    Prakalight
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Shining a light on innovative tech. 🌟 Transforming
                  possibilities into realities. ✨ Embrace the brilliance of
                  Prakalight. 💡 Prakalight is a dynamic and innovative project
                  that focuses on providing comprehensive information about
                  website development services. It is designed to serve as a
                  centralized platform for users seeking professional assistance
                  in creating and enhancing their online presence through
                  well-crafted websites.
                </p>
                <div
                  className="flex items-center mt-4 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://prakalight.live/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <CgArrowTopRightR />
                    Visit
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img src={Porto6} alt="wawasan edukasi" className="w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    Wawasan Edukasi
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Wawasan Edukasi is a website dedicated to providing
                  educational news and insights to a diverse audience. Built
                  using WordPress, this platform serves as a centralized hub for
                  valuable information, news articles, and educational
                  resources, aiming to keep users informed about the latest
                  developments in the field of education.
                </p>
                <div
                  className="flex items-center mt-4 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://staging.wawasanedukasi.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <CgArrowTopRightR />
                    Visit
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img src={Porto3} alt="Lesyuk" className="w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    Lesyuk
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  The LesYuk project is an innovative web application designed
                  to streamline the process of finding the perfect tutor for
                  students. This platform serves as a bridge between students
                  seeking academic assistance and qualified tutors available for
                  various subjects. With LesYuk, the goal is to provide a
                  seamless and efficient way for students to connect with tutors
                  who match their specific learning needs.
                </p>
                <div
                  className="flex items-center mt-4 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://lesyuk.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <CgArrowTopRightR />
                    Visit
                  </a>
                  <a
                    href="https://github.com/Bimasanjaya0704/lesyuk_fe"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <PiGithubLogoFill />
                    Go to Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mb-5 p-4 bg-cplight flex flex-col md:flex-row gap-8 rounded-md"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-0 md:mb-0 md:w-1/2"
              >
                <img
                  src={Porto4}
                  alt="Website Peringkas Teks"
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  <div className="font-bold text-base text-cpdark mb-1 lg:text-2xl">
                    Website Peringkas Teks
                  </div>
                </h3>
                <p
                  className="font-normal pr-4 text-sm text-secondary text-justify lg:text-base lg:font-medium mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  RingkasAJA is a text summarization project using the Maximum
                  Marginal Relevance (MMR) method. Its focus is on providing
                  users with concise and relevant summaries while eliminating
                  unnecessary details. The project enhances reading efficiency
                  by delivering condensed versions of texts across various
                  domains.
                </p>
                <div
                  className="flex items-center mt-8 gap-2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <a
                    href="https://github.com/Bimasanjaya0704/peringkas_teks_otomatis_MMR"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cpyellow text-cpdark px-4 py-2 rounded-md text-base font-semibold hover:bg-cpdark hover:text-cpyellow"
                  >
                    <PiGithubLogoFill />
                    Go to Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
