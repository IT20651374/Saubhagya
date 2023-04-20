import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
