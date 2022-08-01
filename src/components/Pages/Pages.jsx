import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Pages;
