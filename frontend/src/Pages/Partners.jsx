import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages.jsx";
import AboutMain from "../images/hero/partner.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



function Partners() {
  return (
    <>
      <section className="about-page">
        <Navbar />
        <h1>Saubhagya</h1>
        <HeroPages name="Donor Partners" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              
            />
            <div className="about-main__text">
              <h3>For donor partners</h3>
              <h2>Partnership with Donors at Saubhagya</h2>
              <p>
              As a donor partner of Saubhagya, you can make a significant impact in the fight against hunger and malnutrition in Sri Lanka. By utilizing Saubhagya's user-friendly digital platform, you can easily make donations and track the impact of your contributions.
              <br></br><br></br>Saubhagya's use of GPS and Google Maps to track food collection and delivery ensures transparency and accountability in the distribution of resources. By partnering with Saubhagya, you can help create a more efficient and transparent system for distributing food and resources to those in need.
              <br></br><br></br>
              Your donations and partnership with Saubhagya will enable us to work towards a future where everyone in Sri Lanka has access to the resources they need to thrive. Together, we can make a meaningful impact in the fight against hunger and malnutrition.
              </p>
              <div className="hero-content__text__btns">
                <Link className="hero-content__text__btns__learn-more" to="/signup">
                  Register &nbsp; <i className="fa-solid fa-angle-right"></i>
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

export default Partners;
