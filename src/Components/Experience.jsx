import React from "react";
import experience from "./_utils/Experience";

const Experience = () => {
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
            {experience.map((myExperience, index) => (
              <div className="max-w-4xl mx-auto" key={index}>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-1.5 h-16 transition-colors ${
                      index === 0
                        ? "bg-green-600 hover:bg-green-400"
                        : "bg-slate-500 hover:bg-gray-600"
                    }`}
                  ></div>
                  <h5 className="font-bold text-lg text-cpdark dark:text-cpyellow mb-2 ml-4">
                    {myExperience.name} - {myExperience.location}
                  </h5>
                </div>
                <p className="font-normal text-md text-cpdark dark:text-cplight mb-2">
                  <span className="font-bold">{myExperience.position}</span> |{" "}
                  {myExperience.year}
                </p>
                <p className="list-disc list-inside mb-4 font-normal text-sm text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg text-justify">
                  {myExperience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
