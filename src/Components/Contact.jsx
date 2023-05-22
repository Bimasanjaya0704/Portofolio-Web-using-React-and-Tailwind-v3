import React from "react";

const Contact = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <section id="contact">
      <div className="pt-36 pb-32 bg-slate-50">
        <div className="container">
          <div className="w-full px-4">
            <div
              className=" max-w-4xl mx-auto text-center mb-8"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 className="font-bold text-sm text-cpyellow uppercase mb-2 lg:text-base">
                Contact
              </h2>
              <h4 className="font-semibold text-xl text-cpdark uppercase mb-2 md:text-2xl lg:text-3xl">
                Hubungi Saya
              </h4>
              <p className="font-normal text-sm text-cpsecond mb-5 lg:text-base">
                Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan,
                silakan hubungi saya melalui salah satu cara di bawah ini:
              </p>
            </div>
            <div className="w-full max-w-3xl mx-auto">
              <form
                action="/"
                method="post"
                className=" pb-20 pt-10 px-10 shadow-lg"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="text-left">
                  <label
                    for="name"
                    className="font-semibold text-base text-cpsecond mb-1"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    className="bg-cplight rounded-md w-full py-2 px-3 mb-5 text-cpsecond focus:outline-none focus:ring-cpyellow focus:ring-1 focus:border-cpyellow focus:bg-white"
                  />
                </div>
                <div className="text-left">
                  <label
                    for="email"
                    className="font-semibold text-base text-cpsecond mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-cplight rounded-md w-full py-2 px-3 mb-5 text-cpsecond focus:outline-none focus:ring-cpyellow focus:ring-1 focus:border-cpyellow focus:bg-white"
                  />
                </div>
                <div className="text-left">
                  <label
                    for="pesan"
                    className="font-semibold text-base text-cpsecond mb-1"
                  >
                    Pesan
                  </label>
                  <textarea
                    name="pesan"
                    id="pesan"
                    className="w-full bg-cplight rounded-md py-2 px-3 mb-5 text-cpsecond focus:outline-none focus:ring-cpyellow focus:ring-1 focus:border-cpyellow focus:bg-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="w-full font-semibold text-base text-white bg-cpyellow py-2 px-4 rounded-full hover:opacity-90 transition duration-300 lg:mt-2"
                  >
                    Kirim
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
