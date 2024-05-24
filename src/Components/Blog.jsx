import React, { useEffect, useState } from "react";

const Blog = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="experience">
      <div className="pb-12  md:py-12 bg-white dark:bg-cpdark">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-3xl mx-auto text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
                Experience
              </h4>
              <p className="font-normal text-sm text-justify md:text-center text-cpdark  dark:text-cplight mt-1 md-font-medium md:text-lg">
                As a dedicated professional in the field, I bring a wealth of
                experience and expertise to every project. My journey in the
                industry has equipped me with valuable skills and insights,
                allowing me to thrive in dynamic environments.
              </p>
            </div>
          </div>

          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-1.5 dark:bg-green-600 h-16 dark:hover:bg-green-400 bg-green-400 hover:bg-green-600 transition-colors "></div>
                <h5 className="font-bold text-lg text-cpdark dark:text-cpyellow mb-2 ml-4">
                  PRAKALIGHT - Semarang, Indonesia
                </h5>
              </div>
              <p className="font-normal text-md text-cpdark dark:text-cplight mb-2">
                <span className="font-bold">Front-End Developer</span> | Jan
                2023 - Present
              </p>
              <p className="list-disc list-inside mb-4 font-normal text-sm  text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg text-justify">
                As a website interface developer, my role involves contributing
                to the development of website interfaces tailored to meet
                clients' needs. This entails collaborating closely with the
                backend team to ensure seamless alignment between the interface
                and server functions. My primary focus is on creating interfaces
                that are not only visually appealing but also functionally
                optimized to enhance user experience. To achieve this, I
                leverage my expertise in HTML, CSS, and JavaScript to craft
                responsive and immersive interfaces that effectively engage and
                retain users.
              </p>
            </div>
          </div>

          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 bg-neutral-800 h-16 hover:bg-green-600 transition-colors"></div>
                {isSmallScreen ? (
                  <h5 className="font-bold text-lg text-cpdark dark:text-cpyellow mb-2 ml-4">
                    DISKOMINFO KOTA SEMARANG - Semarang, Indonesia
                  </h5>
                ) : (
                  <h5 className="font-bold text-lg text-cpdark dark:text-cpyellow mb-2 ml-4">
                    DINAS KOMUNIKASI, INFORMATIKA, STATISTIK & PERSANDIAN KOTA
                    SEMARANG - Semarang, Indonesia
                  </h5>
                )}
              </div>
              <p className="font-normal text-md text-cpdark dark:text-cplight mb-2">
                <span className="font-bold">Web Developer - Internship</span> |
                Nov 2021 - Jan 2022
              </p>
              <p className="list-disc list-inside mb-4 font-normal text-sm text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg text-justify">
                In my role as a member of the development team, I actively
                assist in the development of our company's website, ensuring its
                ongoing improvement and functionality. Collaborating closely
                with my team, I help identify and address technical issues that
                may arise during the development process, ensuring smooth
                progress and timely resolution. Additionally, I take
                responsibility for managing and maintaining company data, which
                includes tasks such meticulous data entry to ensure accuracy and
                accessibility.
              </p>
            </div>
          </div>

          <div
            className="w-full px-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-1.5 bg-neutral-800 h-16 hover:bg-green-600 transition-colors"></div>
                <h5 className="font-bold text-lg text-cpdark dark:text-cpyellow mb-2 ml-4">
                  TONEC VISION - Semarang, Indonesia
                </h5>
              </div>
              <p className="font-normal text-md text-cpdark dark:text-cplight mb-2">
                <span className="font-bold">
                  Foto & Videographer - Internship
                </span>{" "}
                | Mar 2018 to Apr 2018
              </p>
              <p className="list-disc list-inside mb-4 font-normal text-sm text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg text-justify">
                In my role, I engage in a diverse range of tasks that contribute
                to our creative endeavors. This includes conducting photo and
                video shoots to capture compelling visual content. Following the
                shoot, I take charge of editing both photos and videos, ensuring
                they meet the client's specifications and uphold our quality
                standards. Effective communication with clients is paramount, as
                I strive to understand their vision and preferences, fostering
                strong collaborative relationships throughout the project
                lifecycle. Additionally, I am continuously expanding my skill
                set by learning to create 3D designs using Photoshop, enhancing
                our capabilities and offering innovative solutions to our
                clients. Collaboration with my team is integral to our success,
                as we work together to brainstorm ideas, provide feedback, and
                execute projects seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
