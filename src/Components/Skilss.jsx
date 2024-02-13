import React from "react";
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaLaravel,
  FaGitSquare,
  FaCss3,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiPhp,
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiNpm,
  SiEslint,
  SiGitlab,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="py-8 md:py-12 bg-cpdark">
        <div className="container">
          <div
            className="w-full mx-auto text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
              Skilss & Tools
            </h4>
            <p className="font-normal text-sm text-center text-cplight mt-1 md-font-medium md:text-lg">
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
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                Languages
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <RiJavascriptFill className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">
                      Javascript
                    </h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiPhp className="text-xl md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">PHP</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaPython className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Python</h9>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                Framework
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaReact className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">React JS</h9>
                  </div>
                </div>

                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiFlask className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Flask</h9>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                Front-End Stack
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaHtml5 className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">HTML</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaCss3 className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">CSS</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiTailwindcss className="text-xl md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Tailwind</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaBootstrap className="text-xl md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Bootsrap</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiPostman className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Postman</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiNpm className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">NPM</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaGitSquare className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">GIT</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiEslint className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Eslint</h9>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                SoftWare & Tools
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <TbBrandVscode className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">VS Code</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaGithub className="text-xl md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Github</h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiGitlab className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Gitlab</h9>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                Agile methodologies and coding principles
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <h9 className="text-sm md:text-sm font-medium">Gitflow</h9>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <h9 className="text-sm md:text-sm font-medium">Clean Code</h9>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm md:text-base font-medium text-cplight">
                Currently or interest in learning...
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <SiTypescript className="text-base md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">
                      Typescript
                    </h9>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 md:px-6 md:py-3 bg-zinc-700 text-cplight cursor-progress">
                  <div className="flex items-center gap-2 ">
                    <FaLaravel className="text-xl md:text-2xl" />
                    <h9 className="text-sm md:text-sm font-medium">Laravel</h9>
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

export default Skills;
