import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/pc_gallery_styles.css";

type Swiper = any;

interface PhotoSource {
  imageSrc: any;
}

const PcGallery: React.FC<PhotoSource> = ({ imageSrc }) => {
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
    <div className="pc-gallery">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon className="icon" icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation={false} // Disable Swiper navigation (we're using custom buttons)
        pagination={{ clickable: true }}
        direction="horizontal"
        className="mySwiper3"
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
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
      </Swiper>
    </div>
  );
};

export default PcGallery;