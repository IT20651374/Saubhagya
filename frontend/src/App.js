import React from "react";
import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./Pages/Contact";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GenerateReport from "./Pages/GenerateReport";
import NeedyPeopleReport from "./Pages/GenerateReport/NeedyPeopleReport";

import NeedyPeopleHome from "./Pages/NeedyPeople/Home";
import NeedyPeopleCreate from "./Pages/NeedyPeople/Create";
import NeedyPeopleUpdate from "./Pages/NeedyPeople/Update";
import NeedyPeopleView from "./Pages/NeedyPeople/View";
import FeaturedNeedy from "./Pages/FeaturedNeedy";




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

        <Route path="/generate-report" element={<GenerateReport/>}  />

        <Route path="/needy-people" element={<NeedyPeopleHome />} />
        <Route path="/create-needy-people" element={<NeedyPeopleCreate />} />
        <Route path="/update-needy-people/:id" element={<NeedyPeopleUpdate />} />
        <Route path="/view-needy-people/:id" element={<NeedyPeopleView />} />
        <Route path="/needy-people-report" element={<NeedyPeopleReport />} />



        
       
       

        
      </Routes>
      
      {["/", "/about", "/contact","/login","/signup"].includes(window.location.pathname) && <Navbar />}
     
    </>
    
  );
}

export default App;
