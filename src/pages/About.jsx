import React from 'react';
import { FiHeart, FiShield, FiSun, FiEye } from 'react-icons/fi';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.parallaxBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Дикая <br/> Свобода</h1>
          <p className={styles.heroText}>Фонд «Бугу-Эне» — защита и реабилитация диких животных в Кыргызстане</p>
        </div>
      </section>

      {/* EDITORIAL SECTION */}
      <section className={styles.editorialSection}>
        <div className={styles.imageGrid}>
          {/* Ayı görseli - Ana görsel */}
          <img 
            src="https://i.pinimg.com/736x/e7/d9/6c/e7d96c4a2c6715aabb9e2231ae0fc709.jpg" 
            alt="Медведь" 
            className={styles.mainImg} 
          />
          {/* Leopar görseli - Tamamlayıcı küçük görsel */}
          <img 
            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000" 
            alt="Снежный леопард" 
            className={styles.secondaryImg} 
          />
        </div>

        <div className={styles.textContent}>
          <h2>Больше, чем <br/> просто зоопарк</h2>
          <p>
            Каракольский зоологический парк, основанный в <strong>1987 году</strong>, — единственный в своем роде в стране. 
            Мы не просто содержим животных, мы создаем для них шанс на новую жизнь.
          </p>
          <p>
            Сегодня это дом для 150 особей. Наша цель — спасение раненых животных, 
            пострадавших от браконьеров или оставшихся без родителей в суровых горах Тянь-Шаня.
          </p>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoItem} ${styles.dark}`}>
            <FiHeart size={40} className={styles.bentoIcon} />
            <h3>Спасение</h3>
            <p>Реабилитация тех, кто не выживет в дикой природе самостоятельно.</p>
          </div>

          <div className={styles.bentoItem}>
            <FiShield size={40} color="var(--gold)" />
            <h3>Защита</h3>
            <p>Борьба с браконьерством и охрана редких видов нашей фауны.</p>
          </div>

          <div className={`${styles.bentoItem} ${styles.gold}`}>
            <FiSun size={40} />
            <h3>Экология</h3>
            <p>Восстановление лесов и сохранение флоры Кыргызстана.</p>
          </div>
          
          <div style={{gridColumn: 'span 2'}} className={styles.bentoItem}>
            <FiEye size={40} color="var(--accent)" />
            <h3>Просвещение</h3>
            <p>
              Ваш визит помогает нам финансировать операции и питание. 
              Мы учим новое поколение уважать и беречь наш общий дом.
            </p>
          </div>

          <div className={styles.bentoItem}>
            <h3>1770 м</h3>
            <p>Высота, где природа и забота встречаются воедино.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;