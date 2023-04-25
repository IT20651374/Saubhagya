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
import NeedyPeople from "./Pages/NeedyPeople";

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
        <Route path="/needypeopleManage" element={<NeedyPeople />} />
       
       

        
      </Routes>
      
      {["/", "/about", "/contact","/login","/signup"].includes(window.location.pathname) && <Navbar />}
     
    </>
    
  );
}

export default App;
