import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="py-8 md:py-12 bg-white dark:bg-cpdark">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-4xl mx-auto text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h4 className="font-bold text-xl uppercase text-cpyellow mb-2 lg:text-2xl">
                Contact Me
              </h4>
              <p className="font-normal text-sm text-center text-cpdark dark:text-cplight mt-1 md-font-medium md:text-lg">
                If you are interested in collaborating or have any questions,
                please contact me through one of the methods below:
              </p>
            </div>
            <div className="w-full max-w-3xl mx-auto">
              <form
                action="https://formspree.io/f/xayredbr"
                method="post"
                className="pb-20 pt-10 px-10 shadow-lg"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="font-semibold text-base text-cpdark dark:text-cpyellow mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-cplight rounded-md w-full py-2 px-3 mb-5 text-cpdark focus:outline-none focus:ring-cpdark focus:ring-1 focus:border-cpyellow focus:bg-white"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="font-semibold text-base text-cpdark dark:text-cpyellow mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-cplight rounded-md w-full py-2 px-3 mb-5 text-cpdark focus:outline-none focus:ring-cpdark focus:ring-1 focus:border-cpyellow focus:bg-white"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="message"
                    className="font-semibold text-base text-cpdark dark:text-cpyellow mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-cplight rounded-md py-2 px-3 mb-5 text-cpdark focus:outline-none focus:ring-cpdark focus:ring-1 focus:border-cpyellow focus:bg-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full font-semibold text-base text-white bg-cpyellow py-2 px-4 rounded-full hover:opacity-90 transition duration-300 lg:mt-2"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
