import React from "react";

const Blog = () => {
  return (
    <section id="blog">
      <div className="py-8 md:py-12 bg-cpdark">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-4xl mx-auto text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
                Experience
              </h4>
              <p className="font-normal text-sm text-center text-cplight mt-1 md-font-medium md:text-lg">
                As a dedicated professional in the field, I bring a wealth of
                experience and expertise to every project. My journey in the
                industry has equipped me with valuable skills and insights,
                allowing me to thrive in dynamic environments.
              </p>
            </div>
          </div>

          <div
            className="w-full px-4 "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <h5 className="font-bold text-lg text-cpyellow mb-2">
              PRAKALIGHT - Semarang, Indonesia
            </h5>
            <p className="font-normal text-md text-cplight mb-2">
              <span className="font-bold">Front-End Developer</span> | Jan 2023
              - Present
            </p>
            <ul className="list-disc list-inside mb-4 font-normal text-sm  text-cplight mt-1 md-font-medium md:text-lg">
              <li>
                Contribute to the development of website interfaces for clients.
              </li>
              <li>
                Collaborate with the backend team to align the interface with
                server functions.
              </li>
              <li>
                Focus on creating visually appealing and functionally optimized
                interfaces.
              </li>
              <li>
                Utilize expertise in HTML, CSS, and JavaScript to craft
                responsive and immersive user experiences.
              </li>
            </ul>

            <h5 className="font-bold text-lg text-cpyellow mb-2">
              DINAS KOMUNIKASI, INFORMATIKA, STATISTIK & PERSANDIAN KOTA
              SEMARANG - Semarang, Indonesia
            </h5>
            <p className="font-normal text-md text-cplight mb-2">
              <span className="font-bold">Web Developer - Internship</span> |
              Nov 2021 - Jan 2022
            </p>
            <ul className="list-disc list-inside mb-4 font-normal text-sm text-cplight mt-1 md-font-medium md:text-lg">
              <li>Assisting in the development of the company's website.</li>
              <li>
                Collaborating with the development team to identify and resolve
                technical issues.
              </li>
              <li>
                Managing and maintaining company data, including database design
                and data entry.
              </li>
              <li>Conducting quality assurance testing and bug fixes.</li>
            </ul>

            <h5 className="font-bold text-lg text-cpyellow mb-2">
              TONEC VISION - Semarang, Indonesia
            </h5>
            <p className="font-normal text-md text-cplight mb-2">
              <span className="font-bold">Foto&Videographer - Internship</span>{" "}
              | Mar 2018 to Apr 2018
            </p>
            <ul className="list-disc list-inside mb-4 font-normal text-sm  text-cplight mt-1 md-font-medium md:text-lg">
              <li>Conducting photo and video shoots.</li>
              <li>Editing photos and videos.</li>
              <li>Communicating with clients.</li>
              <li>Learning to create 3D designs using Photoshop.</li>
              <li>Collaborating with the team.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
