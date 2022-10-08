import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/styles.css";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Join from "../pages/Apply.jsx";
import Current from "../pages/Current.jsx";
import Tutoring from "../pages/Tutoring.jsx";
import FAQ from "../pages/FAQ.jsx";
import Contact from "../pages/Contact.jsx";
import OutsideOpportunities from "../pages/OutsideOpportunities.jsx";

export default function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<Join />} />
      <Route path="/current" element={<Current />} />
      <Route path="/outsideopportunities" element={<OutsideOpportunities />} />
      <Route path="/tutoring" element={<Tutoring />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer/>
    </>
  );
}
