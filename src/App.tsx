import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import img from "next/image";
import Header from "./components/header/header";
import Popup from "reactjs-popup";
import "swiper/css";
import "swiper/css/navigation";
import { MDBCheckbox } from "mdb-react-ui-kit";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import Gallery from "./components/gallery/gallery";
import ClinicGalleryOne from "./components/clinic_gallery_1/clinicGalleryOne";
import ClinicGalleryTwo from "./components/clinic_gallery_2/clinicGalleryTwo";
// import Review from "./components/reviews/Review";
import Footer from "./components/footer/Footer";
import PcGallery from "./components/gallery/pc_gallery";
import ReviewGallery from "./components/reviews/ReviewGallery";
// import GalleryExample from "./components/GalleryExample";
import ReviewGalleryDesktop from "./components/reviews/ReviewGalleryDesktop";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import "./styles/global.css";
import "./styles/main/main.css";

// import { link } from "fs";

interface Tabprops {
  number: string;
  text: string;
  goldText?: string;
}

interface ExpandedService {
  service_text: string;
  link_text: string;
  link_text_2?: string;
  link_text_3?: string;
  link_text_4?: string;
  href: string;
  href_2?: string;
  href_3?: string;
  href_4?: string;
}

interface ReviewTabProps {
  date: string;
  name: string;
  paragraph: string;
}

// Page Photos
const mainPhoto = require("./assets/main_photo.webp");
const mainPC = require("./assets/main_pc.webp");
const pavel = require("./assets/pavel.webp");
const pavelPC = require("./assets/pavel_pc.png");
const bulb: string = require("./assets/bulb.svg").default;
const featuresPhoto = require("./assets/features_photo.png");
const featuresPhotoPc = require("./assets/features_image.webp");
const toothIcon: string = require("./assets/tooth_icon.svg").default;
const chairIcon: string = require("./assets/chairs_icon.svg").default;
const galleryOnePic = require("./assets/gallery_one_pic.webp");
const galleryTwoPic = require("./assets/gallery_two_pic.webp");
const logoMobile: string = require("./assets/logo_mob.svg").default;
// Gallery Photos
const galleryOne = require("./assets/gallery01.webp");
const galleryTwo = require("./assets/gallery02.webp");
const galleryThree = require("./assets/gallery03.webp");
const galleryFour = require("./assets/gallery04.webp");
const galleryFive = require("./assets/gallery05.webp");

const formImage = require("./assets/form_image.png");
const pavelGallery = require("./assets/pavel_gallery.webp");
const modalImage = require("./assets/example_modal.webp");
const pavelGalleryPc = require("./assets/pavel_pc.webp");

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

const ExpandedTab: React.FC<ExpandedService> = (props) => {
  return (
    <div className="expanded-container">
      <div className="text_divider">
        <div className="divider"></div>
        <div className="row_text">
          <span className="paragraph">Описание</span>
          <a className="golden-link">Цены</a>
        </div>
      </div>
      <button className="golden-button">Запись на прием</button>
      <div className="text_divider">
        <div className="divider"></div>
        <div className="row_text">
          <span className="paragraph">{props.service_text}</span>
        </div>
      </div>
      <div className="links-container">
        <a href={props.href} className="golden-link">
          {props.link_text}
        </a>
        <a href={props.href} className="golden-link">
          {props.link_text}
        </a>
        <a href={props.href} className="golden-link">
          {props.link_text}
        </a>
        <a href={props.href} className="golden-link">
          {props.link_text}
        </a>
      </div>
    </div>
  );
};

const FeatureTab: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab">
      <span className="number">{props.number}</span>
      <p className="paragraph">{props.text}</p>
      <p className="gold-text">{props.goldText}</p>
    </div>
  );
};

const FeatureLong: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab-long">
      <span className="number">{props.number}</span>
      <p
        className="paragraph-goldz"
        style={{
          color: "#E8CB6C",
          marginLeft: "clamp(8px,3.73824vw,32px)",
          marginTop: "clamp(13px,6.07464vw,52px)",
          fontSize: "clamp(8px,3.73824vw,32px)",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

type Swiper = any;

export default function HomePage() {
  const [isToothHealingOpened, setToothHealingOpen] = useState(true);
  const [isWhiteningOpened, setWhiteningOpen] = useState(false);
  const [isMouthHygieneOpened, setMouthHygieneOpen] = useState(false);
  const [isHealingInSleepOpened, setHealingInSleepOpen] = useState(false);
  const [isVinirsOpened, setVinirsOpen] = useState(false);
  const [isParodontHealingOpened, setParodontHealingOpen] = useState(false);
  const [isProthesisOpened, setProthesisOpen] = useState(false);
  const [isDiagnosisOpened, setDiagnosisOpen] = useState(false);

  const swiperRef = React.useRef<Swiper | null>(null);

  // interface Service {
  //   slug: string;
  //   name: string;
  // }

  // const services: Service[] = [
  //   { slug: "teeth-healing", name: "Teeth Healing Service" },
  //   // Add more services here
  // ];

  const toothHealingExpansion = () => {
    setToothHealingOpen(true);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const whiteningExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(!isWhiteningOpened);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const mouthHygieneExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(!isMouthHygieneOpened);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const healingInSleepExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(!isHealingInSleepOpened);
    setParodontHealingOpen(false);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const parodontHealthExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(!isParodontHealingOpened);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const vinirExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setVinirsOpen(!isVinirsOpened);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
  };

  const prothesisExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setProthesisOpen(!isProthesisOpened);
    setDiagnosisOpen(false);
  };

  const diagnosisExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(!isDiagnosisOpened);
  };

  // Scrolling Effect
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollPhotoY, setScrollPhotoY] = useState<number>(0);
  const [bgColor, setBgColor] = useState("#F4F4F4");

  // Menu Function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  useEffect(() => {
    let previousScrollY = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Background Color Transition
      const targetScrollPosition = 800;

      // Gallery Scrolling
      const targetGalleryScrollPosition = 1200;
      let galleryScrollDirection = 0;
      let slowedScroll = scrollPosition;

      // Features Photo Scrolling
      const targetPhotoScrollPosition = 2000;
      let photoScrollDirection = 0;
      let photoSlowedScroll = scrollPosition;

      // Gallery
      if (scrollPosition > previousScrollY) {
        // Scrolling down
        galleryScrollDirection = 1;
        photoScrollDirection = 1;
      } else if (scrollPosition < previousScrollY) {
        // Scrolling up
        galleryScrollDirection = -1;
        photoScrollDirection = -1;
      }

      // Background Color Transition
      if (scrollPosition >= targetScrollPosition) {
        setBgColor("#202637");
      } else {
        setBgColor("#F4F4F4");
      }

      // Setting slowedScroll
      if (scrollPosition >= targetGalleryScrollPosition) {
        slowedScroll = scrollPosition + galleryScrollDirection / 800;
        setScrollX(slowedScroll);
      }

      if (scrollPosition >= targetPhotoScrollPosition) {
        photoSlowedScroll = scrollPosition + photoScrollDirection;
        setScrollPhotoY(photoSlowedScroll);
      }

      previousScrollY = scrollPosition;
    };

    if (typeof window !== "undefined") {
      console.log(document.title);
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 7000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="screen">
      <section className="content">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        <div className="heading-container">
          <Fade direction="up">
            <h1 className="dental">Dental</h1>
            <h1 className="home">Home</h1>
          </Fade>
        </div>
        <img className="main_image" src={mainPhoto} alt="main_image"></img>
      </section>
      <section className="pc-content">
        <div className="white-content">
          <div className="header-container">
            <Header
              isMenuPcOpen={isMenuPcOpen}
              togglePcMenu={togglePcMenu}
            ></Header>
          </div>
          <div className="heading-container">
            <Fade direction="up" triggerOnce={true}>
              <h1 className="dental">Dental</h1>
              <h1 className="home">Home</h1>
            </Fade>
          </div>
          <div
            className="blue-content"
            style={{
              backgroundColor: bgColor,
              transition: " background-color 0.5s ease-in-out",
            }}
            id="changeColorSection"
          >
            <div className="photos">
              <Fade direction="left" delay={400} triggerOnce={true}>
                <img className="main_image" src={mainPC} alt="main"></img>
              </Fade>
              <Fade triggerOnce={true} delay={200}>
                <div className="photo-container">
                  <img className="bulb" src={bulb} alt="bulb"></img>
                  <img src={pavelPC} alt="pavel" className="pavel"></img>
                  <div className="doctor-names">
                    <span className="name">Главный врач</span>
                    <span className="under-text">Тамаров Павел Сергеевич</span>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <div className="gallery-content" id="gallery">
        <div
          className="pictures-div"
          style={{ transform: `translateX(-${scrollX / 13}px)` }}
        >
          <img
            className="gallery-05"
            src={galleryFive}
            alt="gallery-picture-05"
          ></img>
          <img
            className="gallery-04"
            src={galleryFour}
            alt="gallery-picture-04"
          ></img>
          <img
            className="gallery-03"
            src={galleryThree}
            alt="gallery-picture-03"
          ></img>
          <img
            className="gallery-02"
            src={galleryTwo}
            alt="gallery-picture-02"
          ></img>
          <img
            className="gallery-01"
            src={galleryOne}
            alt="gallery-picture-01"
          ></img>
        </div>
      </div>
      <div className="features-screen" id="features-list-mob">
        <section className="doctor-container">
          <div className="content">
            <div className="image-container">
              <img className="bulb" src={bulb} alt="bulb"></img>
              <img className="image" src={pavel} alt="pavel"></img>
              <div className="main_doctor">Главный врач</div>
              <div className="name">Тамаров Павел Сергеевич</div>
            </div>
          </div>
        </section>
        <section className="features-container">
          <img
            className="features-photo"
            src={featuresPhoto}
            alt="features-photo"
          ></img>
          <div className="features">
            <div className="divider"></div>
            <FeatureTab
              number="01"
              text="Современная клиника с самым передовым оборудованием"
            />
            <div className="divider"></div>
            <FeatureTab
              number="02"
              text="Тщательно соблюдаем требование санитарии и гигиены, что обеспечиваем и контролируем с помощью автоклавов последнего поколения"
            />
            <div className="divider"></div>
            <FeatureTab
              number="03"
              text="Используем только качественные и надёжные материалы, подтверждённые российскими и международными сертификатами"
            />
            <div className="divider"></div>
            <FeatureTab
              number="04"
              text="Индивидуальный подход к каждому клиенту"
              goldText="Мы используем самые эффективные и безопасные обезболивающие методики при протезировании лечении зубов."
            />
            <div className="divider"></div>
            <FeatureTab
              number="06"
              text="Медицинское учреждениепремиум-класса"
              goldText="У нас Вы можете воспользоваться широким спектром самых востребованных в современной стоматологии услуг."
            ></FeatureTab>
            <div className="text_divider">
              <div className="divider"></div>
              <div className="row_text">
                <span className="paragraph">Наши преимущества</span>
                <span className="number">07</span>
              </div>
            </div>
            <FeatureLong number="01" text="Удобное расположение"></FeatureLong>
            <FeatureLong number="02" text="Домашняя атмосфера"></FeatureLong>
            <FeatureLong
              number="03"
              text="Все стоматологические процедуры"
            ></FeatureLong>
            <FeatureLong
              number="04"
              text="Современное обородувоние"
            ></FeatureLong>
          </div>
          <button className="golden-button">Записаться на прием</button>
        </section>
      </div>
      <div className="pc-features-screen" id="features-list-pc">
        <section className="features-content">
          <Fade triggerOnce={true} direction="left">
            <img
              className="features-image"
              src={featuresPhotoPc}
              style={{
                // transform: `translateY(${topPosition}px)`,
                position: "sticky",
                top: "128px",
              }}
              alt="features-photo-pc"
            ></img>
          </Fade>
          <div className="features-list">
            <Fade triggerOnce={true} direction="right" delay={100}>
              <h2 className="features-heading">Преимущества</h2>
            </Fade>
            <div className="list-content">
              <Fade triggerOnce={true} direction="right" delay={200}>
                <div className="list-01">
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">01</span>
                  </div>
                  <Fade
                    triggerOnce={true}
                    direction="right"
                    delay={300}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <p className="list-p">
                      Современная клиника с самым передовым оборудованием
                    </p>
                  </Fade>
                </div>
              </Fade>
              <div className="list-02">
                <Fade triggerOnce={true} direction="right" delay={400}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">02</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={500}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p l">
                    Тщательно соблюдаем требование санитарии и гигиены, что
                    обеспечиваем и контролируем с помощью автоклавов последнего
                    поколения
                  </p>
                </Fade>
              </div>
              <div className="list-02">
                <Fade triggerOnce={true} direction="right" delay={600}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">03</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={700}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p l">
                    Используем только качественные и надёжные материалы,
                    подтверждённые российскими и международными сертификатами{" "}
                  </p>
                </Fade>
              </div>
              <div className="list-02">
                <Fade triggerOnce={true} direction="right" delay={800}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">04</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={900}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p">
                    Индивидуальный подход к каждому клиенту{" "}
                  </p>
                </Fade>
              </div>
              <div className="list-02">
                <Fade triggerOnce={true} direction="right" delay={1000}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">05</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={1100}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p l">
                    Каждый кабинет оснащен современным оборудованием лучших
                    мировых производителей.
                  </p>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={1200}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p-gold">
                    Мы используем самые эффективные и безопасные обезболивающие
                    методики при протезировании лечении зубов.
                  </p>
                </Fade>
              </div>
              <div className="list-02">
                <Fade triggerOnce={true} direction="right" delay={1300}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">06</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={800}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p l">
                    Медицинское учреждениепремиум-класса
                  </p>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={800}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p-gold">
                    У нас Вы можете воспользоваться широким спектром самых
                    востребованных в современной стоматологии услуг.
                  </p>
                </Fade>
              </div>
              <div className="list-02 squares">
                <Fade triggerOnce={true} direction="right" delay={800}>
                  <div className="divider-container">
                    <div className="divider"></div>
                    <span className="number">07</span>
                  </div>
                </Fade>
                <Fade
                  triggerOnce={true}
                  direction="right"
                  delay={800}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <p className="list-p">Наши преимущества</p>
                </Fade>
                <Fade triggerOnce={true} direction="right" delay={800}>
                  <div className="square-row first">
                    <div className="square">
                      <span className="number">01</span>
                      <span className="gold-p">Удобное расположение</span>
                    </div>
                    <div className="square left">
                      <span className="number">02</span>
                      <span className="gold-p">Домашняя атмосфера</span>
                    </div>
                  </div>
                </Fade>
                <Fade triggerOnce={true} direction="right" delay={800}>
                  <div className="square-row second">
                    <div className="square ">
                      <span className="number">03</span>
                      <span className="gold-p">
                        Все стоматологические процедуры
                      </span>
                    </div>
                    <div className="square left">
                      <span className="number">04</span>
                      <span className="gold-p">Современное обородувоние</span>
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade triggerOnce={true} direction="right" delay={800}>
                <button className="golden-btn">Записаться на прием</button>
              </Fade>
            </div>
          </div>
        </section>
      </div>
      <div className="service-screen" id="services">
        <section className="content">
          <div className="service-heading-container">
            <h2 className="services-heading">
              Услуги <span className="golden">Dental Home</span>
            </h2>
          </div>
          <div className="text_divider">
            <div
              className="divider"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.30)" }}
            ></div>
            <div className="row_text">
              <span className="paragraph">Наши преимущества</span>
            </div>
          </div>
          <div className="services-buttons">
            <button onClick={toothHealingExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isToothHealingOpened ? "text-active" : "text-inactive"
                  }
                >
                  Лечение зубов
                </span>
                <FontAwesomeIcon
                  icon={isToothHealingOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isToothHealingOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={whiteningExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isWhiteningOpened ? "text-active" : "text-inactive"
                  }
                >
                  Отбеливание
                </span>
                <FontAwesomeIcon
                  icon={isWhiteningOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isWhiteningOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={mouthHygieneExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isMouthHygieneOpened ? "text-active" : "text-inactive"
                  }
                >
                  Гигиена полости рта
                </span>
                <FontAwesomeIcon
                  icon={isMouthHygieneOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isMouthHygieneOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={healingInSleepExpansion} className="btn">
              {" "}
              <div className="btn-content">
                <span
                  className={
                    isHealingInSleepOpened ? "text-active" : "text-inactive"
                  }
                >
                  Лечение зубов во сне
                </span>
                <FontAwesomeIcon
                  icon={isHealingInSleepOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isHealingInSleepOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={vinirExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={isVinirsOpened ? "text-active" : "text-inactive"}
                >
                  Виниры и коронки
                </span>
                <FontAwesomeIcon
                  icon={isVinirsOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isVinirsOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={parodontHealthExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isParodontHealingOpened ? "text-active" : "text-inactive"
                  }
                >
                  Лечение пародонта
                </span>
                <FontAwesomeIcon
                  icon={isParodontHealingOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isParodontHealingOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={prothesisExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isProthesisOpened ? "text-active" : "text-inactive"
                  }
                >
                  Протезирование зубов
                </span>
                <FontAwesomeIcon
                  icon={isProthesisOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isProthesisOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
            <button onClick={diagnosisExpansion} className="btn">
              <div className="btn-content">
                <span
                  className={
                    isDiagnosisOpened ? "text-active" : "text-inactive"
                  }
                >
                  Диагностика
                </span>
                <FontAwesomeIcon
                  icon={isDiagnosisOpened ? faMinus : faPlus}
                  className="golden-icon"
                />
              </div>
            </button>
            {isDiagnosisOpened && (
              <ExpandedTab
                service_text="Лечение зубов во сне"
                link_text="Удаление зуба под седацией"
                link_text_2="Удаление зуба под общим наркозом"
                link_text_3="Лечение зубов под седацией"
                link_text_4="Лечение зубов под наркозом у взрослых"
                href=""
                href_2=""
                href_3=""
                href_4=""
              />
            )}
          </div>
          <div className="link-container">
            <a className="golden-link">Страница всех услуг</a>
          </div>
        </section>
      </div>
      <div className="pc-service-screen" id="services">
        <section className="content">
          <div className="heading-container">
            <h3 className="heading">
              Услуги <span className="gold">Dental Home</span>
            </h3>
          </div>
          <div className="rows">
            <div className="row-one-c">
              <div className="row"></div>
              <span className="text">Название услуги</span>
            </div>
            <div className="row-one-c two ">
              <div className="row"></div>
              <span className="text">Описание</span>
            </div>
          </div>
          <div className="services-list-content">
            <div className="services-list">
              <button onMouseEnter={toothHealingExpansion} className="btn">
                <div className="btn-content">
                  <Link
                    to="/services/teeth-healing"
                    className={
                      isToothHealingOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Лечение зубов
                  </Link>
                </div>
              </button>
              <button onMouseEnter={whiteningExpansion} className="btn one">
                <div className="btn-content">
                  <span
                    className={
                      isWhiteningOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Отбеливание
                  </span>
                </div>
              </button>
              <button onMouseEnter={mouthHygieneExpansion} className="btn one">
                <div className="btn-content">
                  <span
                    className={
                      isMouthHygieneOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Гигиена полости рта
                  </span>
                </div>
              </button>
              <button
                onMouseEnter={healingInSleepExpansion}
                className="btn one"
              >
                <div className="btn-content">
                  <span
                    className={
                      isHealingInSleepOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Лечение зубов во сне
                  </span>
                </div>
              </button>
              <button onMouseEnter={vinirExpansion} className="btn one">
                <div className="btn-content">
                  <span
                    className={isVinirsOpened ? "text-active" : "text-inactive"}
                  >
                    Виниры и коронки
                  </span>
                </div>
              </button>
              <button
                onMouseEnter={parodontHealthExpansion}
                className="btn one"
              >
                <div className="btn-content">
                  <span
                    className={
                      isParodontHealingOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Лечение пародонта
                  </span>
                </div>
              </button>
              <button onMouseEnter={prothesisExpansion} className="btn one">
                <div className="btn-content">
                  <span
                    className={
                      isProthesisOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Протезирование зубов
                  </span>
                </div>
              </button>
              <button
                onMouseEnter={diagnosisExpansion}
                className="btn one bottom"
              >
                <div className="btn-content">
                  <span
                    className={
                      isDiagnosisOpened ? "text-active" : "text-inactive"
                    }
                  >
                    Диагностика
                  </span>
                </div>
              </button>
            </div>
            {isToothHealingOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text one">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text two">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text two">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text two">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isWhiteningOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isMouthHygieneOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isHealingInSleepOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isVinirsOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isParodontHealingOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isProthesisOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
            {isDiagnosisOpened && (
              <Fade direction="right">
                <div className="expanded-tab">
                  <button className="golden-btn">Запись на прием</button>
                  <div className="row"></div>
                  <span className="row-text">Лечение зубов во сне</span>
                  <a href="" className="gold-text">
                    Удаление зуба под седацией
                  </a>
                  <a href="" className="gold-text">
                    Удаление зуба под общим наркозом
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под седацией
                  </a>
                  <a href="" className="gold-text">
                    Лечение зубов под наркозом у взрослых
                  </a>
                </div>
              </Fade>
            )}
          </div>
        </section>
      </div>
      <div className="doctors-gallery-screen" id="doctors">
        <section className="content">
          <div className="heading-container-gallery">
            <h2 className="heading">Наши Специалисты</h2>
          </div>
          <div className="divider"></div>
          <Gallery
            imageSrc={pavelGallery}
            imageSrcTwo={pavelGallery}
            imageSrcThree={pavelGallery}
            imageSrcFour={pavelGallery}
          />
        </section>
      </div>
      <div className="doctors-gallery-screen-pc" id="doctors">
        <section className="content">
          <div className="heading-container">
            <h3 className="heading">Наши специалисты</h3>
          </div>
          <div className="divider"></div>
          <PcGallery imageSrc={pavelGalleryPc} />
          <div
            className="divider"
            style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
          ></div>
        </section>
      </div>
      <div className="free-form-pc">
        <section className="content">
          <div className="form-container">
            <div className="free-form-content">
              <div className="input-content">
                <h4 className="heading">
                  Что вас ждёт на бесплатном осмотре у стоматолога:
                </h4>
                <div className="text-container two">
                  <img className="tooth-icon" src={toothIcon} alt="tooth"></img>
                  <p className="paragraph tooth">
                    Осмотрим полость рта и составим фотопротокол
                  </p>
                </div>
                <div className="text-container">
                  <img className="chair-icon" src={chairIcon} alt="chair"></img>
                  <p className="paragraph">
                    После тщательного осмотра, составим план лечения
                  </p>
                </div>
                <span className="text-span">
                  Звоните с 9:00 до 21:00 <strong>8 (925) 925-99-55</strong> или
                  оставьте заявку, мы вам перезвоним
                </span>
                <div className="input-container">
                  <input
                    type="tel"
                    className="telephone-input"
                    placeholder="+7 (925) 222-90-22"
                  />
                  <button className="form-btn">Записать на осмотр</button>
                </div>
              </div>
              <img className="form-image" src={formImage} alt="image"></img>
            </div>
          </div>
        </section>
      </div>
      <div className="dental-home-gallery-pc">
        <section className="content">
          <div className="heading-container">
            <h4 className="heading">Клиники Dental Home </h4>
          </div>
          <div className="galleries-container">
            <div className="gallery-one">
              <h6 className="g-heading">Первая клиника Dental Home</h6>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                style={
                  {
                    "--swiper-pagination-color": "#E8CB6C",
                    "--swiper-navigation-color": "#E8CB6C",
                  } as React.CSSProperties
                }
                className="mySwiper4"
              >
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryOnePic}
                    alt="image"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryOnePic}
                    alt="image"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryOnePic}
                    alt="image"
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="gallery-two">
              <h6 className="g-heading">Вторая клиника Dental Home</h6>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                style={
                  {
                    "--swiper-pagination-color": "#E8CB6C",
                    "--swiper-navigation-color": "#E8CB6C",
                  } as React.CSSProperties
                }
                className="mySwiper5"
              >
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryTwoPic}
                    alt="image"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryTwoPic}
                    alt="image"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="swiper-image"
                    src={galleryTwoPic}
                    alt="image"
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="btn-container">
            <button className="gold-btn">Записаться на прием</button>
          </div>
        </section>
      </div>
      <div className="dental-home-gallery">
        <section className="content">
          <div className="gallery-heading-container">
            <h3 className="gallery-heading">Клиники Dental Home</h3>
          </div>
          <div className="divider"></div>
          <div className="galleries">
            <div className="gallery-one">
              <h4 className="gallery-heading">Первая клиника Dental Home</h4>
              <ClinicGalleryOne></ClinicGalleryOne>
            </div>
            <div className="gallery-two">
              <h4 className="gallery-heading-two">
                Вторая клиника Dental Home
              </h4>
              <ClinicGalleryTwo></ClinicGalleryTwo>
            </div>
          </div>
        </section>
      </div>
      <div className="review-pc-screen" id="review">
        <section className="content">
          <div className="heading-container">
            <h5 className="heading">Отзывы</h5>
          </div>
          <div className="divider"></div>
          <ReviewGalleryDesktop />
          <div className="all-reviews-container">
            {/* <a className="blue-link">Все отзывы</a> */}
          </div>
        </section>
      </div>
      <div className="form-pc-screen">
        <section className="content">
          <div className="heading-container">
            <h5 className="heading">Записаться На Прием</h5>
          </div>
          <div className="divider"></div>
          <form action="" className="form-content">
            <div className="row-c">
              <div className="input-container">
                <span className="text">Имя*</span>
                <input
                  type="text"
                  className="input-c"
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="input-container">
                <span className="text">Телефон*</span>
                <input
                  type="text"
                  className="input-c"
                  placeholder="+7 (925) 222-90-22"
                />
              </div>
            </div>
            <div className="row-c">
              <div className="input-container services">
                <span className="text">Услуга</span>
                <input
                  type="text"
                  placeholder="Выберите Услугу"
                  className="input-s"
                />
              </div>
            </div>
            <div className="row-c">
              <div className="input-container services">
                <span className="text">Направление</span>
                <input
                  type="text"
                  placeholder="Выберите Направление"
                  className="input-s"
                />
              </div>
            </div>
            <div className="row-c">
              <div className="input-container services">
                <span className="text">Врач</span>
                <input
                  type="text"
                  placeholder="Выберите Врача"
                  className="input-s"
                />
              </div>
            </div>
            <div className="row-c">
              <div className="input-container services">
                <span className="text">Комментарий</span>
                <textarea className="comment" />
              </div>
            </div>
            <div className="checkbox-container">
              <div className="check-row">
                <input type="checkbox" className="checkbox" />
                <span className="text">
                  Ознакомлен с Условиями обработки персональных данных
                </span>
              </div>
              <button className="golden-btn">Записаться на прием</button>
            </div>
          </form>
        </section>
      </div>
      <div className="review-screen" id="review">
        <section className="content">
          <div className="review-heading-container">
            <h3 className="reviews-heading">Отзывы</h3>
          </div>
          <div className="divider"></div>
          <ReviewGallery />
          <div className="link-blue-container">
            <a href="" className="blue-link">
              Все отзывы
            </a>
          </div>
        </section>
      </div>
      <div className="form-screen">
        <section className="content">
          <div className="form-heading-container">
            <h3 className="form-heading">Записаться На Прием</h3>
          </div>
          <div className="divider"></div>
          <form action="" className="form">
            <div className="input-container">
              <label htmlFor="name" className="la">
                Имя*
              </label>
              <input
                type="text"
                name="name"
                className="input-text"
                placeholder="Иван Иванов"
              />
            </div>
            <div className="input-container">
              <label htmlFor="phone" className="la">
                Номер телефона*
              </label>
              <input
                type="tel"
                name="phone"
                className="input-text"
                placeholder="+7 (925) 222-90-22"
              />
            </div>
            <div className="input-container">
              <label htmlFor="service" className="la">
                Услуга
              </label>
              <input
                type="text"
                name="service"
                placeholder="Выберите Услугу"
                className="input-text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="direction" className="la">
                Направление
              </label>
              <input
                type="text"
                name="direction"
                placeholder="Выберите Направление"
                className="input-text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="doctor" className="la">
                Врач
              </label>
              <input
                type="text"
                name="doctor"
                placeholder="Выберите Врача"
                className="input-text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="comment" className="la">
                Комментарий
              </label>
              <textarea name="comment" className="comment"></textarea>
            </div>
            <div className="checkbox-container">
              <div className="checkbox-container-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="Ознакомлен с Условиями обработки персональных данных"
                  defaultChecked
                />
              </div>
            </div>
            <button className="form-button">Записаться на прием</button>
          </form>
        </section>
      </div>
      <Footer></Footer>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        modal
        nested
        className="popup-container"
        position="center center"
      >
        <div className="modal">
          <img className="modal-img" src={modalImage} alt="modal-picture"></img>
          <div className="modal-content">
            <img className="logo" src={logoMobile} alt="logotype"></img>
            <span className="text">
              Хотите получить бесплатную консультацию?
            </span>
            <span className="additional-text">
              Оставьте свой номер и мы перезвоним вам
            </span>
            <div className="input-container">
              <label htmlFor="phone-number-input" className="label">
                Ваш номер телефона*
              </label>
              <input
                type="tel"
                name="phone-number-input"
                className="phone-number-input"
                placeholder="+7 (925) 222-90-22"
                style={{ textAlign: "center" }}
                id=""
              />
              <button className="phone-btn">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                ></FontAwesomeIcon>
                Хорошо жду звонка
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
