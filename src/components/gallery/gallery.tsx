import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/gallery_styles.css";

const pavel = require("../../assets/pavel_gallery.png");

type Swiper = any;

SwiperCore.use([Navigation, Pagination]);

interface PhotoSource {
  imageSrc: any;
  imageSrcTwo?: any;
  imageSrcThree?: any;
  imageSrcFour?: any;
  imageSrcFive?: any;
  imageSrcSix?: any;
  imageSrcSeven?: any;
  openModal?: any;
}

const Gallery: React.FC<PhotoSource> = ({
  imageSrc,
  imageSrcTwo,
  imageSrcThree,
  imageSrcFour,
  imageSrcFive,
  imageSrcSix,
  imageSrcSeven,
  openModal,
}) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        spaceBetween={-60}
        slidesPerView={1}
        threshold={0.5}
        navigation={false} // Disable Swiper navigation (we're using custom buttons)
        pagination={{ clickable: true }}
        direction="horizontal"
        className="mySwiper2"
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Тамаров Павел Сергеевич</h3>
            <p className="doctor-position">
              Главный врач, врач-ортопед, врач-хирург,имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrcTwo} alt="Doctor 2" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Тамаров Павел Сергеевич</h3>
            <p className="doctor-position">
              Главный врач, врач-ортопед, врач-хирург,имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img
                src={imageSrcThree}
                alt="Doctor 3"
                className="doctor-image"
              />
            </div>
            <h3 className="doctor-name">Тамаров Павел Сергеевич</h3>
            <p className="doctor-position">
              Главный врач, врач-ортопед, врач-хирург,имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="link-container">
        {/* <a href="" className="blue-link">
          Все Врачи
        </a> */}
      </div>
    </div>
  );
};

export default Gallery;
