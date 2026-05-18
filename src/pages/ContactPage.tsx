import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#242424]">
      <Navbar />
      <Contact />
    </div>
  );
};

export default ContactPage;
