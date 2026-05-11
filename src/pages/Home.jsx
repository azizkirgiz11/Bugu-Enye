import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';

// Görsel Importları (Kendi projendeki yollar)
import mapImg from '../assets/map.png';

// Swiper Stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // ZOO HAYVANLARI (Slider için)
  const animalsData = [
    { id: 1, name: "Снежный барс (Илбирс)", species: "Panthera uncia", img: "https://images.unsplash.com/photo-1689847190291-f8e0823f13ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Символ наших гор, занесен в Красную книгу." },
    { id: 2, name: "Тянь-Шаньский медведь", species: "Ursus arctos isabellinus", img: "https://images.unsplash.com/photo-1599948058230-78896e742f7e?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Редкий подвид бурого медведя." },
    { id: 3, name: "Благородный олень", species: "Cervus elaphus", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg", desc: "Гордость лесов Иссык-Куля." },
    { id: 4, name: "Серый волк", species: "Canis lupus", img: "https://i.pinimg.com/736x/e8/a8/45/e8a8459613902ce1631a5293c60f636e.jpg", desc: "Санитар леса и степей." },
    { id: 5, name: "Туркестанская рысь", species: "Lynx lynx", img: "https://i.pinimg.com/736x/a2/b3/27/a2b32713e16e6f629789482c7d33ec53.jpg", desc: "Грациозная и скрытная дикая кошка." },
    { id: 6, name: "Беркут", species: "Aquila chrysaetos", img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg", desc: "Величественный орел, символ свободы." },
    { id: 7, name: "Горный козел (Теке)", species: "Capra sibirica", img: "https://poknok.art/uploads/posts/2022-10/1666638724_1-poknok-art-p-gornii-kozel-1.jpg", desc: "Непревзойденный скалолаз." },
    { id: 8, name: "Двугорбый верблюд", species: "Camelus bactrianus", img: "https://baibolsyn.kz/media/original_images/3327ceb3a32c52a660c6e826c4f68fdc.jpg", desc: "Корабль пустыни, отлично переносит холод." },
    { id: 9, name: "Обыкновенная лисица", species: "Vulpes vulpes", img: "https://www.tursar.ru/image/img2081_0.jpg", desc: "Хитрый и умный обитатель наших краев." },
    { id: 10, name: "Як (Топоз)", species: "Bos mutus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Yak_Kailash.JPG/1280px-Yak_Kailash.JPG?utm_source=en.wiktionary.org&utm_campaign=index&utm_content=thumbnail", desc: "Могучее животное высокогорья." }
  ];

  // GÜNLÜK PLAN (Resimdeki stile bağlanmış gerçek veriler)
  const scheduleData = [
    { 
      time: "10:30", 
      title: "Завтрак копытных", 
      desc: "Кормление оленей и яков свежим сеном и овощами", 
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg", 
      position: "right" 
    },
    { 
      time: "12:00", 
      title: "Обед медведей", 
      desc: "Показательное кормление Тянь-Шаньских медведей", 
      img: "https://images.unsplash.com/photo-1599948058230-78896e742f7e?q=80&w=1082&auto=format&fit=crop", 
      position: "left" 
    },
    { 
      time: "14:30", 
      title: "Снежный барс", 
      desc: "Время активности и лекция от кураторов фонда", 
      img: "https://images.unsplash.com/photo-1689847190291-f8e0823f13ab?q=80&w=1170&auto=format&fit=crop", 
      position: "right" 
    },
    { 
      time: "16:00", 
      title: "Пернатые друзья", 
      desc: "Интерактив и кормление хищных птиц (Беркуты)", 
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg", 
      position: "left" 
    }
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

      {/* VERTICAL SCHEDULE SECTION (Resimdeki Stil) */}
      <section className={styles.scheduleSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Распорядок дня</h2>
          <p className={styles.sectionSubtitle}>Узнайте время кормления наших подопечных</p>
        </div>
        
        <div className={styles.verticalTimeline}>
          <div className={styles.timelineLine}></div>
          
          {scheduleData.map((item, index) => (
            <div key={index} className={`${styles.timelineItem} ${item.position === 'left' ? styles.left : styles.right}`}>
              <div className={styles.timelineDot}>
                <span className={styles.timeLabel}>{item.time}</span>
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.timelineCard}>
                  <div className={styles.cardInfo}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className={styles.cardImageWrapper}>
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className={styles.mapSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Карта зоопарка</h2>
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