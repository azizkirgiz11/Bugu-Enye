// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // İsmini logo.jpg yaptığını varsayıyorum
import styles from '../styles/Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerContainer}>
        
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.headerLogo} />
          <div className={styles.logoText}>
            <span className={styles.brandName}>БУГУ ЭНЕ</span>
            <span className={styles.brandSub}>общественный фонд</span>
          </div>
        </Link>

        <nav className={styles.navMenu}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}
          >
            О нас
          </Link>
          <Link to="/tickets" className={styles.ticketButton}>
            Билеты
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;