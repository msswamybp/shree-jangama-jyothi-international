import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
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
  );
};

export default Navbar;
