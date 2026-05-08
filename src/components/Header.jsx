import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

// Logo yolunu kontrol et: public klasöründeyse direkt "/logo.png" yazabilirsin
// src/assets içindeyse import logo from '../assets/logo.png' kullan.
import logo from '../assets/logo.png'; 

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerContainer}>
        
        {/* Logo Alanı */}
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="Bugu Ene Logo" className={styles.headerLogo} />
          <div className={styles.logoText}>
            <h1 className={styles.brandName}>БУГУ ЭНЕ</h1>
            <span className={styles.brandSub}>общественный фонд</span>
          </div>
        </Link>

        {/* Navigasyon Alanı */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.navMenu}>
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
          </div>

          {/* Aksiyon Butonu */}
          <Link to="/tickets" className={styles.ticketButton}>
            Билеты
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;