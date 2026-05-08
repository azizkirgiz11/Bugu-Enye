import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import qrCode from '../assets/qr.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Hakkımızda Bölümü */}
        <div className={styles.section}>
          <h4>О фонде</h4>
          <p>
            Друзья, на нашем попечении находятся около 200 животных и птиц, и
            каждый из них нуждается в особом уходе и качественном питании.
          </p>
          <div className={styles.qrContainer}>
            <img src={qrCode} alt="QR Code" className={styles.qrImage} />
          </div>
        </div>

        {/* Bağış Bilgileri Bölümü */}
        <div className={styles.section}>
          <h4>Помощь</h4>
          <div className={styles.donationBox}>
            <p className={styles.bankTitle}>Optima Bank</p>
            <p>
              <strong>P/c:</strong> 1091820239920161 (multicurrency)
            </p>
            <p>
              <strong>ВІС/БИК:</strong> 109018
            </p>
            <p>
              <strong>SWIFT:</strong> ENEJKG22
            </p>
            <p>
              <strong>Получатель:</strong> Общественный Фонд «БУГУ-ЭНЕ»
              (BUGU-ENYE Foundation)
            </p>
          </div>
        </div>

        {/* İletişim ve Sosyal Medya Bölümü */}
        <div className={styles.section}>
          <h4>Контакты</h4>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <a
              href="https://wa.me/996553634238"
              target="_blank"
              rel="noopener noreferrer"
            >
              +996 553 634 238 (W/A)
            </a>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href="mailto:saltanatseitova.buguenye@gmail.com">
              saltanatseitova.buguenye@gmail.com
            </a>
          </div>

          <p className={styles.address}>г. Каракол, ул. Айтматов, 1/2</p>

          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/buguenye_fund/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@buguenye_fund"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/watch?v=6FHnaZatu-E"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} Общественный Фонд «БУГУ-ЭНЕ». Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
