import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css"; // Create this CSS file for styles

function Contact() {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help. Get in touch with us anytime!</p>
      </div>
      <div className="contact-grid">
        {/* Email Us */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email Us</h2>
          <p>
            For inquiries, please email us at{" "}
            <a href="mailto:msswamybp@gmail.com">
              info@shreejangamajyothi.com
            </a>
          </p>
        </div>

        {/* Call Us */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2>Call Us</h2>
          <p>
            Call us directly at{" "}
            <a href="tel:+916362315374">+91-6362315374</a>. Our team is
            available during business hours.
          </p>
        </div>

        {/* Visit Us */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Visit Us</h2>
          <p>
           Garje, kadur(T), Chikkamagalore(Dist), Karnataka(state),India 577140
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
