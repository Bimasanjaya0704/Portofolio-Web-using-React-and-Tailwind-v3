// portfolioData.js
import Porto1 from "../../Assets/bimovies.webp";
import Porto2 from "../../Assets/porto2.webp";
import Porto3 from "../../Assets/lesyuk.webp";
import Porto4 from "../../Assets/peringkas teks.webp";
import Porto5 from "../../Assets/prakalight.webp";
import Porto6 from "../../Assets/wawasanedukasi.webp";
import porto7 from "../../Assets/todolistapp.webp";

const portfolioData = [
  {
    name: "Website Peringkas Teks",
    image: Porto4,
    description:
      "RingkasAJA is a text summarization project using the Maximum Marginal Relevance (MMR) method. Its focus is on providing users with concise and relevant summaries while eliminating unnecessary details.",
    linkWeb: "https://github.com/Bimasanjaya0704/peringkas_teks_otomatis_MMR",
    linkRepo: "https://github.com/Bimasanjaya0704/peringkas_teks_otomatis_MMR",
  },
  {
    name: "Lesyuk",
    image: Porto3,
    description:
      "The LesYuk project is an innovative web application designed to streamline the process of finding the perfect tutor for students.",
    linkWeb: "https://lesyuk.netlify.app/",
    linkRepo: null,
  },
  {
    name: "Todolist using Laravel 10",
    image: porto7,
    description:
      "The Todolist App I developed using Laravel 10 and Bootstrap is a modern solution for users who want to efficiently manage their tasks. By combining the power of Laravel in web development with the responsive design of Bootstrap, this application offers an intuitive and enjoyable user experience.",
    linkWeb: "https://todolistajayuk.000webhostapp.com/todolist",
    linkRepo: "https://github.com/Bimasanjaya0704/Todolist-Laravel",
  },
  {
    name: "BIMovies",
    image: Porto1,
    description:
      "Developing a Web API Movie application that allows users to search for movie information such as title, images, and ratings.",
    linkWeb: "https://webmovies-bimovies.netlify.app/",
    linkRepo:
      "https://github.com/Bimasanjaya0704/Web-movies-using-ReactJS-and-Tailwind-with-TMDB-API",
  },
  {
    name: "TodoList",
    image: Porto2,
    description:
      "The TodoList project is a web application designed to help users manage their tasks efficiently.",
    linkWeb: "https://github.com/Bimasanjaya0704/Todo-list-with-ReactJS",
    linkRepo: "https://github.com/Bimasanjaya0704/Todo-list-with-ReactJS",
  },
  {
    name: "Prakalight",
    image: Porto5,
    description:
      "Prakalight is a dynamic project that focuses on providing comprehensive information about website development services.",
    linkWeb: "https://prakalight.live/",
    linkRepo: null,
  },
  {
    name: "Wawasan Edukasi",
    image: Porto6,
    description:
      "Wawasan Edukasi is a website dedicated to providing educational news and insights to a diverse audience.",
    linkWeb: "https://staging.wawasanedukasi.com/",
    linkRepo: null,
  },
];

export default portfolioData;
