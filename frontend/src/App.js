import React from "react";
import "./dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Donators from "./Pages/Donators";
import Partners from "./Pages/Partners";
import DeliveryAgents from "./Pages/DeliveryAgents";
import GenerateReport from "./Pages/GenerateReport";
import NeedyPeopleReport from "./Pages/GenerateReport/NeedyPeopleReport";
import FoodDonationReport from "./Pages/GenerateReport/FoodDonationReport";
import FoodDeliveryReport from "./Pages/GenerateReport/FoodDeliveryReport";
import GeneralInquiries from "./Pages/Inquire/index";


import NeedyPeopleHome from "./Pages/NeedyPeople/Home";
import NeedyPeopleCreate from "./Pages/NeedyPeople/Create";
import NeedyPeopleUpdate from "./Pages/NeedyPeople/Update";
import NeedyPeopleView from "./Pages/NeedyPeople/View";
import FeaturedNeedy from "./Pages/FeaturedNeedy";


import DonationsHome from "./Pages/Donations/Home";
import DonationsCreate from "./Pages/Donations/Create";
import DonationsUpdate from "./Pages/Donations/Update";
import OnGoingDonations from "./Pages/Donations/View";


import DeliveryHome from "./Pages/Delivery/Home";
import DeliveryCreate from "./Pages/Delivery/Create";
import DeliveryUpdate from "./Pages/Delivery/Update";
import ViewDeliveryStatus from "./Pages/Delivery/View";

import PartnerHome from "./Pages/Partner/Home";
import PartnerCreate from "./Pages/Partner/Create";
import PartnerUpdate from "./Pages/Partner/Update";
import PartnerView from "./Pages/Partner/View";
import PartnershipReport from "./Pages/GenerateReport/PartnerReport";





function App() {
  const user = localStorage.getItem("token");

  return (
    <>
   
      <Routes>
        {user && <Route path="/main" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/needyPeople" element={<FeaturedNeedy />} />
        <Route path="/on-going-food-donations" element={<OnGoingDonations />} />
        <Route path="/food-donations-delivery-status" element={<ViewDeliveryStatus />} />
        <Route path="/donators" element={<Donators />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/deliveryagents" element={<DeliveryAgents />} />

        <Route path="/reports-&-inquiries" element={<GenerateReport/>}  />
        <Route path="/general-inquiries" element={<GeneralInquiries/>}  />

        <Route path="/needy-people" element={<NeedyPeopleHome />} />
        <Route path="/create-needy-people" element={<NeedyPeopleCreate />} />
        <Route path="/update-needy-people/:id" element={<NeedyPeopleUpdate />} />
        <Route path="/view-needy-people/:id" element={<NeedyPeopleView />} />
        <Route path="/needy-people-report" element={<NeedyPeopleReport />} />


        <Route path="/donations" element={<DonationsHome />} />
        <Route path="/create-donation" element={<DonationsCreate />} />
        <Route path="/update-donation/:id" element={<DonationsUpdate />} />
        <Route path="/food-donations-report" element={<FoodDonationReport />} />

        <Route path="/food-delivery" element={<DeliveryHome />} />
        <Route path="/create-delivery" element={<DeliveryCreate />} />
        <Route path="/update-delivery/:id" element={<DeliveryUpdate />} />
        <Route path="/food-donation-delivery-report" element={<FoodDeliveryReport />} />

        <Route path="/donation-partner" element={<PartnerHome />} />
        <Route path="/create-donation-partner" element={<PartnerCreate />} />
        <Route path="/update-donation-partner/:id" element={<PartnerUpdate />} />
        <Route path="/view-donation-partner/:id" element={<PartnerView />} />
        <Route path="/donar-partner-report" element={<PartnershipReport />} />


      
      </Routes>
      
      {["/", "/about", "/contact","/login","/signup"].includes(window.location.pathname) && <Navbar />}
     
    </>
    
  );
}

export default App;
