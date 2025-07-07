import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/mpk-transparent-1536x735.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/programi">Programi</Link></li>
        <li><Link to="/o-nama">O nama</Link></li>
        <li><Link to="/kampus">Kampus</Link></li>
        <li><Link to="/#utisci">Utisci</Link></li>
        <li><Link to="/#kontakt" className="btn">Kontakt</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
