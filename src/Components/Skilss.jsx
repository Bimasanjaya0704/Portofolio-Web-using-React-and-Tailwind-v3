import React from "react";
import s1 from "../Assets/s1.png";
import s2 from "../Assets/s2.png";
import s3 from "../Assets/s3.png";
import s4 from "../Assets/s4.png";
import s5 from "../Assets/s5.png";
import s6 from "../Assets/s6.png";
import s7 from "../Assets/s7.png";
import s8 from "../Assets/s8.png";
import s9 from "../Assets/s9.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="pt-36 pb-32 bg-cpdark">
        <div className="container">
          <div
            className="mx-auto text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="font-bold text-sm uppercase text-cpyellow mb-2 lg:text-base">
              Skilss
            </h4>
            <h2 className="font-semibold text-xl text-white uppercase lg:text-3xl">
              Beberapa Skills yang saya miliki
            </h2>
          </div>
          <div
            className="w-full px-4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="3000"
          >
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[130px] xl:max-w-[150px] xl:mx-8"
              >
                <img src={s1} alt="HTML5" />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[110px] xl:mx-8"
              >
                <img src={s2} alt="Css" />
              </a>
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
              >
                <img src={s3} alt="Javascript" />
              </a>
              <a
                href="https://tailwindui.com/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
              >
                <img src={s4} alt="Tailwind" />
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
              >
                <img src={s5} alt="Bootstrap5" />
              </a>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
              >
                <img src={s6} alt="React Js" />
              </a>
              <a
                href="https://www.php.net/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[100px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[120px] xl:max-w-[130px] xl:mx-8"
              >
                <img src={s7} alt="PHP" />
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[80px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
              >
                <img src={s8} alt="Python" />
              </a>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer"
                className="max-w-[100px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[120px] xl:max-w-[140px] xl:mx-8"
              >
                <img src={s9} alt="MYSQL" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
