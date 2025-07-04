import React, { useState } from 'react';
import './Header.css'; // <-- Add custom CSS for styling
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
      const { t, i18n } = useTranslation();
    
      const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
      };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/images/logo.png" alt="sjj Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" style={{ margin: '0 10px' }}>{t('header.home')}</Link>
              <Link to="/about" style={{ margin: '0 10px' }}>{t('header.about')}</Link>
              <Link to="/products" style={{ margin: '0 10px' }}>{t('header.products')}</Link>
              <Link to="/contact" style={{ margin: '0 10px' }}>{t('header.contact')}</Link>
              
              <select onChange={changeLanguage} value={i18n.language} style={{ marginLeft: '20px' }}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="kn">Kannada</option>
                <option value="id">Indonesian</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ar">Arabic</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="fr">French</option>
              </select>
        </nav>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
