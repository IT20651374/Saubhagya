import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact/store", formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="contact-page">
        <Navbar />
        <h1>Saubhagya</h1>
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                At Saubhagya, we believe that no one should go hungry. By
                providing a platform for individuals and organizations to
                donate and distribute food, we're working towards a future
                where everyone has access to the resources they need to
                thrive.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                info@saubhagya.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Malabe, Sri
                Lanka
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder='E.g: "John Perera"'
                  value={formData.fullName}
                  onChange={handleInputChange}
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <label>
                  Message <b>*</b>
                </label>
                <textarea
                  name="message"
                  placeholder="Write Here.."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
