import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Tickets.module.css';
import { FaTicketAlt, FaChild, FaUserShield, FaLeaf } from 'react-icons/fa';

const Tickets = () => {
  const navigate = useNavigate();

  const tickets = [
    {
      id: 1,
      category: "Взрослый билет",
      price: "250",
      description: "Для посетителей от 12 лет и старше",
      icon: <FaTicketAlt />,
      color: "#556b2f"
    },
    {
      id: 2,
      category: "Детский билет",
      price: "150",
      description: "Для детей от 5 до 11 лет включительно",
      icon: <FaChild />,
      color: "#6b8e23"
    },
    {
      id: 3,
      category: "Льготный билет",
      price: "150",
      description: "Для пенсионеров (при предъявлении удостоверения)",
      icon: <FaUserShield />,
      color: "#8fa171"
    },
    {
      id: 4,
      category: "Бесплатный вход",
      price: "0",
      description: "Дети до 5 лет и лица с ограниченными возможностями",
      icon: <FaLeaf />,
      color: "#a3b18a"
    }
  ];

  const handleBuyClick = (ticket) => {
    // İkonu objeden ayırıyoruz çünkü ikon "clone" edilemez (hata sebebi budur)
    const { icon, ...ticketDataWithoutIcon } = ticket;
    // Gönderirken 'ticket' değil, 'ticketDataWithoutIcon' gönderiyoruz!
    navigate('/buy-ticket', { state: { selectedTicket: ticketDataWithoutIcon } });
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Билеты и Цены</h1>
          <p>Посетите единственный зоопарк в Кыргызстане, помогая дикой природе</p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.grid}>
          {tickets.map((ticket) => (
            <div key={ticket.id} className={styles.card}>
              <div className={styles.iconWrapper} style={{ color: ticket.color }}>
                {ticket.icon}
              </div>
              <h3>{ticket.category}</h3>
              <p className={styles.desc}>{ticket.description}</p>
              
              <div className={styles.priceTag}>
                {ticket.price === "0" ? (
                  <span className={styles.free}>Бесплатно</span>
                ) : (
                  <>
                    <span className={styles.amount}>{ticket.price}</span>
                    <span className={styles.currency}> сом</span>
                  </>
                )}
              </div>

              <button 
                className={styles.buyButton} 
                onClick={() => handleBuyClick(ticket)}
              >
                {ticket.price === "0" ? "Получить" : "Купить"}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>График работы кассы</h4>
            <p>Касса закрывается за 30 минут до окончания работы зоопарка.</p>
            <ul>
              <li>Летнее время: до 19:00</li>
              <li>Зимнее время: до 16:30</li>
            </ul>
          </div>
          <div className={styles.infoBox}>
            <h4>Важная информация</h4>
            <p>Ваш визит помогает фонду «Бугу-Эне» заботиться о более чем 200 животных.</p>
            <p className={styles.smallNote}>* Пожалуйста, имейте при себе документы для подтверждения льгот.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;