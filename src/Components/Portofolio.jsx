import React from "react";
import Porto1 from "../Assets/porto1.png";
import Porto2 from "../Assets/porto2.png";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div className="pt-36 pb-32 bg-cplight">
        <div className="container">
          <div className="max-w-5xl px-14 mx-auto text-center mb-8 " data-aos="fade-up"  data-aos-duration="1500">
            <h4 className="font-bold text-sm uppercase text-cpyellow mb-2 lg:text-base">
              Portofolio
            </h4>
            <h2 className="font-semibold text-xl text-cpdark uppercase lg:text-3xl ">
              Project terbaru saya{" "}
            </h2>
            <p className="font-normal text-sm text-center text-secondary mt-2 lg:text-base">
              Berikut adalah beberapa projek yang telah saya selesaikan dan saya
              kan terus belajar lagi agar saya dapat mengembangkan skills saya
              pada bidang ini
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-5 p-4 md:w-1/2" > 
              <div className="rounded-md shadow-md overflow-hidden"  data-aos="zoom-in" data-aos-duration="1200">
                <img src={Porto1} alt="Web Movies" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl" data-aos="fade-up"  data-aos-duration="2000">
                Web Movies
              </h3>
              <p className="font-normal text-sm text-secondary text-justify lg:text-base" data-aos="fade-up"  data-aos-duration="2000">
                Mengembangkan aplikasi Web API Movie yang memungkinkan pengguna
                untuk mencari informasi film seperti judul, gambar, dan rating.
                Pengguna dapat melakukan pencarian film berdasarkan judul dan
                mendapatkan hasil yang akurat dan informatif. Projek ini dibuat
                menggunakan React JS dan Tailwind, kemudian untuk API mengambil
                dari "themoviedb"
              </p>
            </div>
            <div className="mb-15 p-4 md:w-1/2" >
              <div className="rounded-md shadow-md overflow-hidden" data-aos="zoom-in" data-aos-duration="1200"> 
                <img src={Porto2} alt="Todo-List" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl" data-aos="fade-up"  data-aos-duration="2000">
                Todo-List
              </h3>
              <p className="font-normal text-sm text-secondary text-justify lg:text-base" data-aos="fade-up"  data-aos-duration="2000">
                Membangun aplikasi Todolist yang membantu pengguna mengatur dan
                mengelola tugas sehari-hari mereka. Dengan menggunakan teknologi
                seperti HTML, CSS, dan JavaScript, Aplikasi ini membantu
                pengguna untuk tetap terorganisir dan efisien dalam menjalani
                aktivitas sehari-hari mereka.
              </p>
            </div>
            <div className="mb-5 p-4 md:w-1/2" >
              <div className="rounded-md shadow-md overflow-hidden" data-aos="zoom-in" data-aos-duration="1200">
                <img src={Porto2} alt="Web Movies" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl" data-aos="fade-up"  data-aos-duration="2000">
                Text Summaryzation
              </h3>
              <p className="font-normal text-sm text-secondary text-justify lg:text-base" data-aos="fade-up"  data-aos-duration="2000">
                Mengembangkan algoritma text summarization yang dapat merangkum
                teks panjang menjadi ringkasan yang padat dan informatif. Projek
                ini dapat bermanfaat dalam mengolah teks berita, artikel, atau
                dokumen lainnya untuk memperoleh informasi penting dengan lebih
                efisien.
              </p>
            </div>
            <div className="mb-5 p-4 md:w-1/2" >
              <div className="rounded-md shadow-md overflow-hidden" data-aos="zoom-in" data-aos-duration="1200">
                <img src={Porto2} alt="Todo-List" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl" data-aos="fade-up"  data-aos-duration="2000">
                Sistem pencarian kalimat utama
              </h3>
              <p className="font-normal text-sm text-secondary text-justify lg:text-base" data-aos="fade-up"  data-aos-duration="2000">
                Sistem Pencarian Kalimat Utama yang menggunakan metode TF-IDF
                (Term Frequency-Inverse Document Frequency) dan MMR (Maximal
                Marginal Relevance). Dengan menggunakan teknik ini, sistem dapat
                mengidentifikasi dan menyoroti kalimat-kalimat utama dalam teks,
                sehingga memudahkan pengguna dalam memahami informasi secara
                cepat dan efektif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
