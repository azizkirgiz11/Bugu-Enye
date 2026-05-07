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
    { id: 1, name: "Снежный барс (Илбирс)", species: "Panthera uncia", img: "https://caravan-info.kg/netcat_files/generated/17/27/1000x500/17601/cf10b2b8ca679d5ef79776490c2a18f3.jpg?crop=0%3A0%3A0%3A0&hash=240a529b6b2cb45213eeb061393802ed&resize_mode=1&wm_m=0", desc: "Символ наших гор, занесен в Красную книгу." },
    { id: 2, name: "Тянь-Шаньский медведь", species: "Ursus arctos isabellinus", img: "https://avatars.mds.yandex.net/i?id=9dd91c28722887208f93a29d3af04944b07de266-4599985-images-thumbs&n=13", desc: "Редкий подвид бурого медведя." },
    { id: 3, name: "Благородный олень", species: "Cervus elaphus", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg", desc: "Гордость лесов Иссык-Куля." },
    { id: 4, name: "Серый волк", species: "Canis lupus", img: "https://s0.bloknot-volgodonsk.ru/thumb/850x0xcut/upload/iblock/ca6/volk.jpg", desc: "Санитар леса и степей." },
    { id: 5, name: "Туркестанская рысь", species: "Lynx lynx", img: "https://yujanka.kz/wp-content/uploads/2019/11/f86dbe2d590697d839ecb6edb6c1c7d9.jpg", desc: "Грациозная и скрытная дикая кошка." },
    { id: 6, name: "Беркут", species: "Aquila chrysaetos", img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg", desc: "Величественный орел, символ свободы." },
    { id: 7, name: "Горный козел (Теке)", species: "Capra sibirica", img: "https://poknok.art/uploads/posts/2022-10/1666638724_1-poknok-art-p-gornii-kozel-1.jpg", desc: "Непревзойденный скалолаз." },
    { id: 8, name: "Двугорбый верблюд", species: "Camelus bactrianus", img: "https://baibolsyn.kz/media/original_images/3327ceb3a32c52a660c6e826c4f68fdc.jpg", desc: "Корабль пустыни, отлично переносит холод." },
    { id: 9, name: "Обыкновенная лисица", species: "Vulpes vulpes", img: "https://www.tursar.ru/image/img2081_0.jpg", desc: "Хитрый и умный обитатель наших краев." },
    { id: 10, name: "Як (Топоз)", species: "Bos mutus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Yak_Kailash.JPG/1280px-Yak_Kailash.JPG?utm_source=en.wiktionary.org&utm_campaign=index&utm_content=thumbnail", desc: "Могучее животное высокогорья." }
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
          <h2 className={styles.sectionTitle}>Карта зоопаркa</h2>
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