import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/BuyTicket.module.css';
import { FaArrowLeft, FaLock, FaTicketAlt, FaChild, FaUserShield, FaLeaf } from 'react-icons/fa';

const BuyTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTicket = location.state?.selectedTicket;

  const [count, setCount] = useState(1);
  
  // Bilet fiyatını sayıya çeviriyoruz
  const price = selectedTicket ? parseInt(selectedTicket.price) : 0;

  // İkonu kategori ismine göre render eden fonksiyon
  const getIcon = (category) => {
    switch (category) {
      case "Взрослый билет": return <FaTicketAlt />;
      case "Детский билет": return <FaChild />;
      case "Льготный билет": return <FaUserShield />;
      case "Бесплатный вход": return <FaLeaf />;
      default: return <FaTicketAlt />;
    }
  };

  if (!selectedTicket) {
    return (
      <div className={styles.errorWrapper}>
        <p>Билет не выбран. Пожалуйста, вернитесь назад.</p>
        <button onClick={() => navigate('/tickets')} className={styles.backBtn}>
          <FaArrowLeft /> Назад к билетам
        </button>
      </div>
    );
  }

  return (
    <div className={styles.buyWrapper}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>
        <FaArrowLeft /> Назад
      </button>

      <div className={styles.checkoutContainer}>
        {/* Sol Taraf: Form */}
        <div className={styles.formSection}>
          <h2>Оформление заказа</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Ваше Имя</label>
              <input type="text" placeholder="Иван Иванов" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email (для получения билета)</label>
              <input type="email" placeholder="example@mail.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Номер телефона</label>
              <input type="tel" placeholder="+996 --- --- ---" required />
            </div>

            <div className={styles.paymentSecurity}>
              <FaLock /> <span>Безопасная оплата через Elsom / Банковскую карту</span>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Перейти к оплате {price * count} сом
            </button>
          </form>
        </div>

        {/* Sağ Taraf: Özet */}
        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h3>Ваш заказ</h3>
            
            <div className={styles.ticketInfo}>
              <div className={styles.ticketIcon} style={{color: selectedTicket.color}}>
                {getIcon(selectedTicket.category)}
              </div>
              <div className={styles.ticketDetails}>
                <strong>{selectedTicket.category}</strong>
                <p>{selectedTicket.price} сом / чел</p>
              </div>
            </div>

            <div className={styles.counter}>
              <span>Количество:</span>
              <div className={styles.counterControls}>
                <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
                <span className={styles.countNumber}>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.totalRow}>
              <span>Итого:</span>
              <span className={styles.totalAmount}>{price * count} сом</span>
            </div>
            
            <p className={styles.footerNote}>
              * Билет будет отправлен на вашу почту после оплаты. Предъявите его на входе.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;