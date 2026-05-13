import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../styles/BackToTop.module.css'; // Stil dosyasını oluşturacağız

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showTopBtn) return null;

  return (
    <div className={styles.backToTop} onClick={goToTop}>
      <FaArrowUp />
    </div>
  );
};

export default BackToTop;