import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages.jsx";
import AboutMain from "../images/hero/delivery.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



function DeliveryAgents() {
  return (
    <>
      <section className="about-page">
        <Navbar />
        <h1>Saubhagya</h1>
        <HeroPages name="Delivery Agents" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              
            />
            <div className="about-main__text">
              <h3>For delivery agents</h3>
              <h2>Pickup & Deliver Food Donations at Saubhagya</h2>
              <p>
              Saubhagya relies on the hard work of delivery agents to ensure that food and resources are delivered efficiently and effectively to those in need. As a delivery agent for Saubhagya, you will play a critical role in the fight against hunger and malnutrition in Sri Lanka.
              <br></br><br></br>Through our user-friendly digital platform, you will receive real-time updates on food collection and delivery, allowing you to easily track your progress and impact. By using GPS and Google Maps, Saubhagya ensures that you have all the information you need to make timely and accurate deliveries.
              <br></br><br></br>
              Your work as a delivery agent for Saubhagya is crucial in creating a more transparent and accountable system for distributing resources. By joining our team, you will be helping to create a future where everyone has access to the resources they need to thrive.
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

export default DeliveryAgents;
