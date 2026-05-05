import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineAccessTime, MdOutlinePets } from 'react-icons/md';
import { GiMeat, GiFruitBowl, GiNestBirds } from 'react-icons/gi';

// Görsel Importları
import mapImg from '../assets/map.png';

// Swiper Stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // PROFESYONEL MASSİV (Resim linkleri yenilendi)
  const animalsData = [
    { id: 1, name: "Снежный барс (Илбирс)", species: "Panthera uncia", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop", desc: "Символ наших гор, занесен в Красную книгу." },
    { id: 2, name: "Тянь-Шаньский медведь", species: "Ursus arctos isabellinus", img: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1600&auto=format&fit=crop", desc: "Редкий подвид бурого медведя." },
    { id: 3, name: "Благородный олень", species: "Cervus elaphus", img: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?q=80&w=1600&auto=format&fit=crop", desc: "Гордость лесов Иссык-Куля." },
    { id: 4, name: "Серый волк", species: "Canis lupus", img: "https://images.unsplash.com/photo-1590226466361-b51c3ee72ce7?q=80&w=1600&auto=format&fit=crop", desc: "Санитар леса и степей." },
    { id: 5, name: "Туркестанская рысь", species: "Lynx lynx", img: "https://images.unsplash.com/photo-1634731791152-3269b0c74d6b?q=80&w=1600&auto=format&fit=crop", desc: "Грациозная и скрытная дикая кошка." },
    { id: 6, name: "Беркут", species: "Aquila chrysaetos", img: "https://images.unsplash.com/photo-1611003184650-7f28edb6dd1b?q=80&w=1600&auto=format&fit=crop", desc: "Величественный орел, символ свободы." },
    { id: 7, name: "Горный козел (Теке)", species: "Capra sibirica", img: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1600&auto=format&fit=crop", desc: "Непревзойденный скалолаз." },
    { id: 8, name: "Двугорбый верблюд", species: "Camelus bactrianus", img: "https://images.unsplash.com/photo-1523906630133-f753f060744c?q=80&w=1600&auto=format&fit=crop", desc: "Корабль пустыни, отлично переносит холод." },
    { id: 9, name: "Обыкновенная лисица", species: "Vulpes vulpes", img: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=1600&auto=format&fit=crop", desc: "Хитрый и умный обитатель наших краев." },
    { id: 10, name: "Як (Топоз)", species: "Bos mutus", img: "https://images.unsplash.com/photo-1628151016064-038198bb3604?q=80&w=1600&auto=format&fit=crop", desc: "Могучее животное высокогорья." }
  ];

  const scheduleData = [
    { time: "09:00", title: "Открытие", desc: "Зоопарк открывает свои двери", icon: <MdOutlineAccessTime /> },
    { time: "10:30", title: "Завтрак", desc: "Кормление свежими фруктами", icon: <GiFruitBowl /> },
    { time: "14:00", title: "Обед хищников", desc: "Показательное кормление", icon: <GiMeat /> },
    { time: "16:00", title: "Пернатые друзья", desc: "Интерактив с птицами", icon: <GiNestBirds /> },
    { time: "18:00", title: "Закрытие", desc: "Подготовка животных ко сну", icon: <MdOutlinePets /> }
  ];

  const filteredAnimals = animalsData.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.homeContainer}>
      
      {/* HERO SLIDER */}
      <section className={styles.heroSection}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className={styles.mainSlider}
        >
          {filteredAnimals.map((animal) => (
            <SwiperSlide key={animal.id}>
              <div className={styles.slideWrapper}>
                <div className={styles.imageOverlay}></div>
                <img src={animal.img} alt={animal.name} className={styles.slideImage} />
                <div className={styles.slideInfo}>
                  <span className={styles.speciesTag}>{animal.species}</span>
                  <h1 className={styles.animalName}>{animal.name}</h1>
                  <p className={styles.animalDesc}>{animal.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SEARCH BAR */}
        <div className={styles.searchGlass}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Поиск животных..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* SCHEDULE SECTION (HORIZONTAL ROW) */}
      <section className={styles.scheduleSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Распорядок дня</h2>
          <p className={styles.sectionSubtitle}>График кормления и мероприятий</p>
        </div>
        
        <div className={styles.timelineRow}>
          {scheduleData.map((item, index) => (
            <div key={index} className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div className={styles.timeCircle}>{item.time}</div>
                <div className={styles.iconBox}>{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION (USING ASSET MAP.PNG) */}
      <section className={styles.mapSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Карта зоопарka</h2>
          <p className={styles.sectionSubtitle}>Ваш путеводитель по миру животных</p>
        </div>

        <div className={styles.mapFrame}>
          <img 
            src={mapImg} 
            alt="Zoo Map" 
            className={styles.mapImage}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;