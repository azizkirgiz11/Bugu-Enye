import React from 'react';
import { FaHistory, FaBullseye, FaHandHoldingHeart, FaInfoCircle } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from 'react-icons/md';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. БОЛЬШОЙ ИММЕРСИВНЫЙ ХИРО-БЛОК */}
      <section className={styles.heroSection}>
        <div className={styles.parallaxBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>Основан в 1987 году</span>
          <h1 className={styles.mainTitle}>Сохраняя дикую <br/> природу Кыргызстана</h1>
          <p className={styles.mainLead}>
            Мы не просто зоопарк. Мы — убежище для тех, кто остался один на один с бедой в диких горах Тянь-Шаня.
          </p>
          <div className={styles.scrollDown}></div>
        </div>
      </section>

      {/* 2. БЛОК "НАША ИСТОРИЯ" С ИЗОБРАЖЕНИЕМ */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1581262177000-813d944a9517?q=80&w=1200&auto=format&fit=crop" 
                alt="Природа Каракола" 
                className={styles.storyImg} 
              />
              <div className={styles.imgBadge}>Каракол, 1770 м</div>
            </div>
            <div className={styles.storyText}>
              <div className={styles.sectionHeader}>
                <FaHistory className={styles.sectionIcon} />
                <span>Путь фонда</span>
              </div>
              <h2>От грани закрытия до <br/> символа спасения</h2>
              <p>
                Каракольский зоологический парк — единственный в стране. После 2001 года, когда экономика была в упадке, парк едва не исчез. Но благодаря воле спонсоров и партнеров, сегодня это дом для **150 особей 34 видов**.
              </p>
              <p>
                Сегодня фонд <strong>«Бугу-Эне»</strong> — это кыргызская неправительственная организация, работающая в тесном контакте с госорганами и полицией для защиты флоры и фауны нашей Республики.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. КАРТОЧКИ ЦЕЛЕЙ С КУЛЬТУРНЫМ АКЦЕНТОМ */}
      <section className={styles.goalsSection}>
        <div className={styles.container}>
          <div className={styles.centeredHeader}>
            <h2>Миссия Bugu-Enye</h2>
            <p>Название в честь легендарной Матери-Оленихи обязывает нас оберегать жизнь в каждом ее проявлении.</p>
          </div>
          <div className={styles.goalsGrid}>
            {[
              { title: "Спасение", desc: "Помощь раненым птицам и зверям, которые не выживут на воле.", icon: <FaHandHoldingHeart /> },
              { title: "Защита", desc: "Борьба с браконьерством и незаконным отловом в горах.", icon: <FaBullseye /> },
              { title: "Образование", desc: "Обучение молодежи ответственному отношению к экологии.", icon: <FaInfoCircle /> }
            ].map((goal, i) => (
              <div key={i} className={styles.goalCard}>
                <div className={styles.goalIcon}>{goal.icon}</div>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. БЛОК ПОДДЕРЖКИ (ФИНАНСОВАЯ ПРОЗРАЧНОСТЬ) */}
      <section className={styles.donateSection}>
        <div className={styles.donateContainer}>
          <div className={styles.donateInfo}>
            <h2>Ваша поддержка — это жизнь</h2>
            <p>Мы существуем благодаря входным билетам и добровольным пожертвованиям. Каждая копейка идет на научно обоснованный рацион питания (по методике Московского зоопарка).</p>
          </div>
          <div className={styles.bankCard}>
            <h3>Банковские реквизиты</h3>
            <div className={styles.bankRow}><span>Банк:</span> <strong>ОАО «Оптима Банк»</strong></div>
            <div className={styles.bankRow}><span>БИК:</span> <strong>109018</strong></div>
            <div className={styles.bankRow}><span>Счет (мультивалютный):</span> <strong>1091820239920161</strong></div>
            <div className={styles.elsomBadge}>Элсом: 0553634238</div>
          </div>
        </div>
      </section>

      {/* 5. ФУТЕР-КОНТАКТЫ */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Свяжитесь с нами</h3>
            <div className={styles.contactLine}><MdLocationOn /> г. Каракол, ул. Коенкозова / Парковая</div>
            <div className={styles.contactLine}><MdPhone /> 0559 934239</div>
            <div className={styles.contactLine}><MdEmail /> seitova23@mail.ru</div>
            <div className={styles.contactLine}><MdLanguage /> www.buguenye.info</div>
          </div>
          <div className={styles.visitBox}>
            <h4>Визит в парк</h4>
            <p>Пн-Сб: 9:00 — 17:00</p>
            <div className={styles.priceTag}>50 сом</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;