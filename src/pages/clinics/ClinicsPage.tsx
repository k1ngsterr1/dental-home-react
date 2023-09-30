import React, { useState, useEffect, useRef, RefObject } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MDBCheckbox } from "mdb-react-ui-kit";

import emailjs from "@emailjs/browser";

import ReviewGallery from "../../components/reviews/ReviewGallery";
import ServiceGallery from "../../components/gallery/services_gallery";
import Gallery from "../../components/gallery/gallery";
import ClinicGalleryOne from "../../components/clinic_gallery_1/clinicGalleryOne";
import ClinicGalleryTwo from "../../components/clinic_gallery_2/clinicGalleryTwo";
import Footer from "../../components/footer/Footer";

// import "./styles/works_styles.css";

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/04.webp");
const doctorFiveMob = require("../../assets/05.webp");
const doctorSixMob = require("../../assets/06.webp");
const doctorSevenMob = require("../../assets/07.webp");
const doctorEightMob = require("../../assets/08.webp");
const doctorNineMob = require("../../assets/09.webp");

const serviceOneMob = require("../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../assets/service_mob_03.webp");
const serviceFourMob = require("../../assets/service_mob_04.webp");

interface Tabprops {
  number: string;
  text: string;
  goldText?: string;
}

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

const pavel = require("../../assets/pavel.webp");
const featuresPhoto = require("../../assets/features_photo.png");
const logoMobile: string = require("../../assets/logo_mob.svg").default;
const bulb: string = require("../../assets/bulb.svg");

const ClinicsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  const customAnimation = keyframes`
    from {
      opacity: 1;
      transform: translate3d(0px, 0px, 0);
    }
    
    to {
      opacity: 0;
      transform: translate3d(-2000, 0, 0);
    }
    `;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

  const form: RefObject<HTMLDivElement> = useRef(null);

  function sendEmail(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");
    setServiceName("");
    setDoctorName("");
    setServiceName("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_5kdc5wu",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  return (
    <div>
      {isLoading ? (
        <Reveal keyframes={customAnimation} delay={1000}>
          <div className={`loader ${isLoading ? "" : "hidden"}`}>
            <div className="loader-container">
              <img className="logo" src={logoMobile} alt="logo"></img>
              <h1 className="loading-heading">
                Клиника Эстетической Стоматологии
              </h1>
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="screen">
          <div className="content" style={{ width: "100%" }}>
            <div
              className="headercontainer"
              style={{ width: "90%", margin: "auto" }}
            >
              <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
            </div>
            <main className="main-content">
              <div
                className="heading-content-container"
                style={{ width: "90%", margin: "auto" }}
              >
                <div className="bread-dots">
                  <Link to="/" className="main-link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/clinics" className="prices-link">
                    О клиниках
                  </Link>
                </div>
                <h1 className="heading">О клиниках</h1>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div className="dental-home-gallery" style={{ marginTop: "0px" }}>
                <section className="content">
                  <div className="galleries">
                    <div className="gallery-one">
                      <h4 className="gallery-heading">
                        Клиника на Советском проспекте, 5
                      </h4>
                      <ClinicGalleryOne></ClinicGalleryOne>
                    </div>
                    <div className="gallery-two">
                      <h4 className="gallery-heading-two">
                        Клиника на Рощинской, 9
                      </h4>
                      <ClinicGalleryTwo></ClinicGalleryTwo>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="features-screen"
                id="features-list-mob"
                style={{
                  marginTop: "clamp(32px,14.95296vw,128px)",
                  marginBottom: "clamp(32px,14.95296vw,128px)",
                }}
              >
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
                    <FeatureLong
                      number="01"
                      text="Удобное расположение"
                    ></FeatureLong>
                    <FeatureLong
                      number="02"
                      text="Домашняя атмосфера"
                    ></FeatureLong>
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
              <div
                className="gallery-screen"
                style={{
                  borderTop: "1px solid #8A8D95",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <Gallery
                  imageSrc={doctorOneMob}
                  imageSrcTwo={doctorTwoMob}
                  imageSrcThree={doctorThreeMob}
                  imageSrcFour={doctorFourMob}
                  imageSrcFive={doctorFiveMob}
                  imageSrcSix={doctorSixMob}
                  imageSrcSeven={doctorSevenMob}
                  imageSrcEight={doctorEightMob}
                  imageSrcNine={doctorNineMob}
                />
              </div>
              <div
                className="review-screen"
                style={{
                  width: "90%",
                  margin: "auto",
                  marginTop: "clamp(16px,7.47648vw,64px)",
                  borderTop: "1px solid #8A8D95",
                }}
              >
                <ReviewGallery></ReviewGallery>
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
                        required={true}
                        value={fullName}
                        name="fullName"
                        onChange={(event) => setFullName(event.target.value)}
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
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        name="phoneNumber"
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
                        value={serviceName}
                        onChange={(event) => setServiceName(event.target.value)}
                        name="serviceName"
                        placeholder="Выберите Услугу"
                        className="input-text"
                      />
                    </div>

                    <div className="input-container">
                      <label htmlFor="doctor" className="la">
                        Врач
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        value={doctorName}
                        onChange={(event) => setDoctorName(event.target.value)}
                        placeholder="Выберите Врача"
                        className="input-text"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="comment" className="la">
                        Комментарий
                      </label>
                      <textarea
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        className="comment"
                      ></textarea>
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
                    <button className="form-button" onClick={sendEmail}>
                      Записаться на прием
                      <FontAwesomeIcon
                        className="icon"
                        icon={faChevronRight}
                        style={{
                          fontSize: "clamp(7px,3.2709599999999996vw,28px",
                          marginLeft: "clamp(4px,1.86912vw,16px)",
                        }}
                      ></FontAwesomeIcon>
                    </button>
                  </form>
                </section>
              </div>
            </main>
          </div>
          <div className="pc-content-c">
            <main className="main-content">
              {" "}
              <Header
                isMenuPcOpen={isMenuPcOpen}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Главная
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/works">
                    Работы
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Работы</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div
                className="form-pc-screen"
                ref={form}
                onSubmit={sendEmail}
                style={{
                  borderTop: "none",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                  marginBottom: "clamp(64px,6.666666666666667vw,256px)",
                }}
              >
                <section className="content" style={{ borderTop: "none" }}>
                  <form action="" className="form-content">
                    <div className="row-c">
                      <div className="input-container">
                        <span className="text">Имя*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={fullName}
                          name="fullName"
                          onChange={(event) => setFullName(event.target.value)}
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="input-container">
                        <span className="text">Телефон*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={phoneNumber}
                          name="phoneNumber"
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
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
                          required={true}
                          value={serviceName}
                          name="serviceName"
                          onChange={(event) =>
                            setServiceName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c"></div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Врач</span>
                        <input
                          type="text"
                          placeholder="Выберите Врача"
                          required={true}
                          value={doctorName}
                          name="doctorName"
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Комментарий</span>
                        <textarea
                          className="comment"
                          name="comment"
                          value={comment}
                          onChange={(event) => setComment(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="check-row">
                        <input type="checkbox" className="checkbox" />
                        <span className="text">
                          Ознакомлен с Условиями обработки персональных данных
                        </span>
                      </div>
                      <button
                        className="golden-btn"
                        value="Send"
                        onClick={() => console.log(form)}
                      >
                        Записаться на прием
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="icon"
                          style={{
                            fontSize: "clamp(6px,0.62496vw,24px)",
                            marginLeft: "clamp(4px,0.41664vw,16px)",
                          }}
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </main>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default ClinicsPage;
