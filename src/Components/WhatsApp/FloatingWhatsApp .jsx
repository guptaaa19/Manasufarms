import React from "react";
import whatsappIcon from "../../assets/whatsapp.png";
import "./FloatingWhatsApp.css";

const phone = "99804 63512"; 
const message = "Hello! I'm interested in your products."; // Your template message

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsApp;