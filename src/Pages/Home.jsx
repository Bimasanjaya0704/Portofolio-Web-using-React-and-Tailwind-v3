import React from "react";
import NavBar from "../Components/Navbar";
import Beranda from "../Components/Beranda";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Portofolio from "../Components/Portofolio";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopBtn";

const Home = () => {
  return (
    <div className="font-montserrat">
      <NavBar />
      <Beranda />
      <Experience />
      <Skills />
      <Portofolio />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;
