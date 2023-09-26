import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/reviews_gallery.css";
import "swiper/css";

interface ReviewTabProps {
  date: string;
  name: string;
  paragraph: string;
}

const ReviewTab: React.FC<ReviewTabProps> = (props) => {
  return (
    <div className="review-tab">
      <div className="review-content">
        <div className="review-date">
          <span className="date">{props.date}</span>
          <div className="screenshot-container">
            <span className="screenshot">Скриншот</span>
          </div>
        </div>
        <div className="main-content">
          <h5 className="review-name">{props.name}</h5>
          <p className="review-paragraph">{props.paragraph}</p>
          <a href="" className="full">
            Читать полностью
          </a>
        </div>
      </div>
    </div>
  );
};

type Swiper = any;

const ReviewGallery = () => {
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
    <div className="review-gallery">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        direction="horizontal"
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewTab
            date="06.09.2023"
            name="Сергей К."
            paragraph="Боли не было, были только неприятные ощущения. Операция была сложная, но прошла очень быстро, сразу удалил нижний и верхний зуб..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="06.09.2023"
            name="Сергей К."
            paragraph="Боли не было, были только неприятные ощущения. Операция была сложная, но прошла очень быстро, сразу удалил нижний и верхний зуб..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="06.09.2023"
            name="Сергей К."
            paragraph="Боли не было, были только неприятные ощущения. Операция была сложная, но прошла очень быстро, сразу удалил нижний и верхний зуб..."
          ></ReviewTab>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewGallery;
