import React, { useState } from 'react';
import './Header.css'; // <-- Custom CSS
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/images/logo.png" alt="sjj Logo" />
        </div>

        {/* Desktop & Mobile Nav */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className="nav-link">
            {t('header.home')}
          </NavLink>
          <NavLink to="/about" className="nav-link">
            {t('header.about')}
          </NavLink>
          <NavLink to="/products" className="nav-link">
            {t('header.products')}
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            {t('header.contact')}
          </NavLink>

          {/* Language Selector */}
          <select onChange={changeLanguage} value={i18n.language} className="lang-select">
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

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
