import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import AboutMain from "../images/about/about-main.jpg";
import Navbar from "../components/Navbar";


function About() {
  return (
    <>
      <section className="about-page">
        <Navbar />
        <h1>Saubhagya</h1>
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              
            />
            <div className="about-main__text">
              <h3>About Saubhagya</h3>
              <h2>A Digital Platform for Ending Hunger in Sri Lanka</h2>
              <p>
              With Saubhagya, we're empowering individuals to make a meaningful impact in the fight against hunger and malnutrition. 
              By connecting donors, organizations, and volunteers through a user-friendly digital platform, we're creating a more efficient 
              and transparent system for distributing food and resources to those in need.
              <br></br><br></br>By using GPS and Google Maps to track food collection and delivery, we're creating a more transparent and accountable system 
                for distributing resources. This not only helps to ensure that donations are delivered to the right places, but it also promotes 
                trust and communication between donors and recipients.<br></br><br></br>
                At Saubhagya, we believe that no one should go hungry. By providing a platform for individuals and organizations to donate and 
                distribute food, we're working towards a future where everyone has access to the resources they need to thrive.
              </p>
              
              
            </div>
          </div>
          
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default About;
