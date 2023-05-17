import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages.jsx";
import AboutMain from "../images/hero/heroes-bg.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



function Donators() {
  return (
    <>
      <section className="about-page">
        <Navbar />
        <h1>Saubhagya</h1>
        <HeroPages name="Donators" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              
            />
            <div className="about-main__text">
              <h3>For food donors</h3>
              <h2>Food Donation at Saubhagya</h2>
              <p>
              Saubhagya provides a user-friendly digital platform to make a meaningful impact in the 
              fight against hunger and malnutrition in Sri Lanka. Through the platform, donors can easily make donations and 
              track their impact. 
              <br></br><br></br>Saubhagya also ensures transparency and accountability in the distribution of resources 
              by using GPS and Google Maps to track food collection and delivery. By donating through Saubhagya, individuals
               and organizations can help create a more efficient and transparent system for distributing food and resources to
                those in need.<br></br><br></br>
                Together, we can work towards a future where everyone has access to the resources they need to thrive.
              </p>
              <div className="hero-content__text__btns">
                <Link className="hero-content__text__btns__learn-more" to="/signup">
                  Donate Now &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link><br/>
                <Link className="hero-content__text__btns__learn-more" to="/on-going-food-donations">
                  View On Going Food Donations &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Donators;
