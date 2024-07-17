import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { PiGithubLogoFill } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import portfolioData from "./_utils/Portofolio";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for blur effect

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div className="py-8 md:py-12 bg-white dark:bg-cpdark">
        <div className="container">
          <div
            className="max-w-5xl mx-auto text-center mb-8 md:px-14"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
              My Project
            </h1>
            <p className="font-normal text-sm text-center text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg">
              Explore some of my notable projects and contributions in the field
              of web development.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {portfolioData.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="mb-5 p-4 bg-white shadow-lg dark:bg-zinc-700 flex flex-col md:flex-row gap-8 rounded-md"
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  className="mb-0 md:mb-0 md:w-1/2"
                >
                  <LazyLoadImage
                    src={project.image}
                    alt={project.name}
                    effect="blur" // Optional effect
                    className="w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 data-aos="fade-up" data-aos-duration="2000">
                    <div className="font-bold text-base text-cpdark dark:text-cplight mb-1 lg:text-2xl">
                      {project.name}
                    </div>
                  </h2>
                  <p
                    className="font-normal pr-4 text-sm text-cpdark dark:text-cplight text-secondary text-justify lg:text-base lg:font-medium mt-3"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {project.description}
                  </p>
                  <div
                    className="flex items-center mt-4 gap-2"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <a
                      href={project.linkWeb}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cpyellow text-cplight dark:text-cpdark px-3 text-sm md:px-4 py-2 rounded-md md:text-base font-semibold dark:hover:bg-cpdark dark:hover:text-cpyellow hover:bg-cplight hover:text-cpyellow"
                    >
                      <CgArrowTopRightR />
                      Visit
                    </a>
                    {project.linkRepo && (
                      <a
                        href={project.linkRepo}
                        className="flex items-center gap-2 bg-cpyellow text-cplight dark:text-cpdark px-3 text-sm md:px-4 py-2 rounded-md md:text-base font-semibold dark:hover:bg-cpdark dark:hover:text-cpyellow hover:bg-cplight hover:text-cpyellow"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <PiGithubLogoFill />
                        Go to Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
