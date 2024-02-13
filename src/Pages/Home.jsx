import React from "react";
import Navbar from "../Components/Navbar";
import Beranda from "../Components/Beranda";
import Portofolio from "../Components/Portofolio";
import Skills from "../Components/Skilss";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Beranda />
      <Blog />
      <Skills />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
