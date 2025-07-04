import React from 'react';
import logo from '../assets/sree logo.jpg'
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Left: Logo */}
        <div style={styles.column}>
          <img
            src={logo} // <-- Replace with your logo path
            alt=" Logo"
            style={styles.logo}
          />
        </div>

        {/* Center: Useful Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>USEFUL LINKS</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/products" style={styles.link}>Products</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div style={styles.column}>
          <h4 style={{ ...styles.heading, color: '#0077FF' }}>CONTACT US</h4>
          <p style={styles.contactText}>
            Address: Garje,Kadur,Chikkamagalore-dist Karnataka, India 577140
          </p>
          <p style={styles.contactText}>Email: msswamybp@gmail.com</p>
          <p style={styles.contactText}>Phone: +91 6362315374</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={styles.bottomBar}>
        © Copyright 2025, Design & Developed by <span style={{ fontWeight: 'bold' }}>Shree Jangama Jyothi international</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px 0',
    fontFamily: 'sans-serif'
  },
  footerContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  column: {
    flex: '1 1 250px',
    margin: '10px'
  },
  logo: {
    height: '160px',
    marginBottom: '10px'
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    borderBottom: '2px solid #8bc34a',
    display: 'inline-block'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    margin: '5px 0'
  },
  contactText: {
    color: '#555',
    fontSize: '14px',
    margin: '5px 0'
  },
  bottomBar: {
    backgroundColor: '#8bc34a',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '14px'
  }
};

export default Footer;
