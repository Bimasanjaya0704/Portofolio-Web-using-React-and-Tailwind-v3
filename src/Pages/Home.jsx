import React from 'react';
import Navbar from "../Components/Navbar"
import Beranda from "../Components/Beranda"
import About from "../Components/About"
import Portofolio from "../Components/Portofolio"
import Skills from "../Components/Skilss"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

const Home = () => {

    return(
        <>
        <Navbar/>
        <Beranda/>
        <About/>
        <Portofolio/>
        <Skills/>
        <Blog/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home