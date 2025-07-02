function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="map">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=..." 
          width="100%" 
          height="300" 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
