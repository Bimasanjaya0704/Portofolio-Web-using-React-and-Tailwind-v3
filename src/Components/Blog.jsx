import React from "react";

const Blog = () => {
  return (
    <section id="blog">
      <div className="pt-36 pb-32 bg-cplight">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-4xl mx-auto text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="font-bold text-sm uppercase text-cpyellow mb-2 lg:text-base">
                Blog
              </h4>
              <h2 className="font-semibold text-xl text-cpdark uppercase lg:text-3xl">
                Tulisan saya
              </h2>
              <p className="font-normal text-sm text-center text-cpsecond mt-1 lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                nihil accusantium ipsam rerum similique dolorem laudantium animi
                odio, odit rem unde nesciunt neque earum possimus!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="bg-cpdark rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-cpyellow">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="https://portofolio-bimasanjaya.netlify.app/"
                      className="font-semibold text-base text-white mb-3 block hover:text-cpyellow truncate"
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-cplight mt-1 lg:text-base mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor molestiae soluta mollitia. Similique, illum nulla.
                  </p>
                  <a
                    href="https://portofolio-bimasanjaya.netlify.app/"
                    className="font-normal text-sm text-white rounded-lg bg-cpyellow py-2 px-4 hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="bg-cpdark rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-cpyellow">
                <img
                  src="https://source.unsplash.com/360x200?data-scients"
                  alt="data scients"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="https://portofolio-bimasanjaya.netlify.app/"
                      className="font-semibold text-base text-white mb-3 block hover:text-cpyellow truncate"
                    >
                      Tips Belajar Data Scients
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-cplight mt-1 lg:text-base mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor molestiae soluta mollitia. Similique, illum nulla.
                  </p>
                  <a
                    href="https://portofolio-bimasanjaya.netlify.app/"
                    className="font-normal text-sm text-white rounded-lg bg-cpyellow py-2 px-4 hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="bg-cpdark rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-cpyellow">
                <img
                  src="https://source.unsplash.com/360x200?laravel"
                  alt="laravel"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="https://portofolio-bimasanjaya.netlify.app/"
                      className="font-semibold text-base text-white mb-3 block hover:text-cpyellow truncate"
                    >
                      Tips Belajar Laravel
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-cplight mt-1 lg:text-base mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor molestiae soluta mollitia. Similique, illum nullaa.
                  </p>
                  <a
                    href="#"
                    className="font-normal text-sm text-white rounded-lg bg-cpyellow py-2 px-4 hover:opacity-80"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4" data-aos="zoom-in" data-aos-duration="2000">
              <div className="bg-cpdark rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-cpyellow">
                <img
                  src="https://source.unsplash.com/360x200?design"
                  alt="desain grafis"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="https://portofolio-bimasanjaya.netlify.app/"
                      className="font-semibold text-base text-white mb-3 block hover:text-cpyellow truncate"
                    >
                      Tips Belajar Desain Grafis
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-cplight mt-1 lg:text-base mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor molestiae soluta mollitia. Similique, illum nulla.
                  </p>
                  <a
                    href="https://portofolio-bimasanjaya.netlify.app/"
                    className="font-normal text-sm text-white rounded-lg bg-cpyellow py-2 px-4 hover:opacity-80"
                  >
                    Baca Selengkapnya
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

export default Blog;
