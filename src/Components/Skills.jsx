import React from "react";
import skills from "./_utils/skills";

const Skills = () => {
  return (
    <section id="skills">
      <div className="py-8 md:py-12 bg-white dark:bg-cpdark">
        <div className="container">
          <div
            className="w-full mx-auto text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
              Skilss & Tools
            </h4>
            <p className="font-normal text-sm text-center text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg">
              As a developer, I bring a diverse skill set to the table,
              enhancing project success. Since 2020, I've dedicated myself to
              frontend development, refining my expertise in:
            </p>
          </div>
          <div
            className="w-full px-4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            {skills.map((skillCategory, index) => (
              <div className="mb-4" key={index}>
                <h2 className="text-sm mb-2 md:text-base font-medium text-cpdark dark:text-cplight">
                  {skillCategory.category}
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {skillCategory.items.map((skill, idx) => (
                      <div
                        className="inline-block px-2 py-1 md:px-6 md:py-3 bg-cplight text-zinc-700 dark:bg-zinc-700 dark:text-cplight cursor-progress"
                        key={idx}
                      >
                        <div className="flex items-center gap-2">
                          {skill.icon && (
                            <div className="text-base md:text-2xl">
                              {skill.icon}
                            </div>
                          )}
                          <div className="text-sm md:text-sm font-medium">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Skills;
