import React from "react";
import NavBar from "../Components/Navbar";
import Beranda from "../Components/Beranda";
import Blog from "../Components/Blog";
import Skills from "../Components/Skilss";
import Portofolio from "../Components/Portofolio";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="font-montserrat">
      <NavBar />
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
