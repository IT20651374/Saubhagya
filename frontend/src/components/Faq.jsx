import React from "react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
             
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What is Saubhagya?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Saubhagya is an online web application that provides a platform for social assistance. 
                  It allows individuals to donate food and groceries to needy organizations such as blind, 
                  deaf, orphanages.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How does Saubhagya work?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Saubhagya works by connecting four user groups: food donators, needy organizations, partners, and food collection agents. 
                  Users can register under any of these groups and use the platform to donate, receive, or facilitate the collection and delivery 
                  of food donations.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Who can use Saubhagya?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Anyone can use Saubhagya, including individuals, organizations, and volunteers who want to help combat hunger and malnutrition 
                  in Sri Lanka.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. Can I volunteer to collect and deliver food donations?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  Yes, users can register as food collection agents on Saubhagya and volunteer to collect and 
                  deliver food donations to needy organizations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
