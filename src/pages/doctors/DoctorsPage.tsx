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

import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/Footer";

import "./styles/doctors_styles.css";

const DoctorOnePc = require("../../assets/1.webp");
const DoctorTwoPc = require("../../assets/2.webp");
const DoctorThreePc = require("../../assets/3.webp");
const DoctorFourPc = require("../../assets/4.webp");
const DoctorFivePc = require("../../assets/5.webp");
const DoctorSixPc = require("../../assets/6.webp");
const DoctorSevenPc = require("../../assets/7.webp");
const DoctorEightPc = require("../../assets/8.webp");
const DoctorNinePc = require("../../assets/9.webp");

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/04.webp");
const doctorFiveMob = require("../../assets/05.webp");
const doctorSixMob = require("../../assets/06.webp");
const doctorSevenMob = require("../../assets/07.webp");
const doctorEightMob = require("../../assets/08.webp");
const doctorNineMob = require("../../assets/09.webp");

const logoMobile: string = require("../../assets/logo_mob.svg").default;

const DoctorsPage = () => {
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
          <div className="content">
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
            <main className="main-content">
              <div className="bread-dots">
                <Link to="/" className="main-link">
                  Главная
                </Link>
                <div className="circle"></div>
                <Link to="/doctors" className="prices-link">
                  Врачи
                </Link>
              </div>
              <h1 className="heading">Врачи</h1>
              <div className="divider-container">
                <div className="divider"></div>
              </div>
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
                  <Link className="link-prices" to="/doctors">
                    Врачи
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Врачи</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div className="doctors-container">
                <div className="doctors-row">
                  <div className="doctor">
                    <img className="img" src={DoctorOnePc}></img>
                    <span className="name">Аманова Альфия Камиловна</span>
                    <span className="who">Врач стоматолог-терапевт</span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorTwoPc}></img>
                    <span className="name">Таха Дана Юрьевна</span>
                    <span className="who">Управляющий</span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorThreePc}></img>
                    <span className="name">Тамаров Павел Сергеевич</span>
                    <span className="who">
                      Главный врач, врач-ортопед, врач-хирург, имплантолог
                    </span>
                  </div>
                </div>
                <div className="doctors-row two">
                  <div className="doctor">
                    <img className="img" src={DoctorFourPc}></img>
                    <span className="name">Пятаев Ислам Рушанович</span>
                    <span className="who">
                      Стоматолог терапевт-микроскопист
                    </span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorFivePc}></img>
                    <span className="name">Терехова Елена Юрьевна</span>
                    <span className="who">Стоматолог-терапевт</span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorSixPc}></img>
                    <span className="name">Врач</span>
                    <span className="who">Стоматолог</span>
                  </div>
                </div>
                <div className="doctors-row two">
                  <div className="doctor">
                    <img className="img" src={DoctorSevenPc}></img>
                    <span className="name">Врач</span>
                    <span className="who">Стоматолог</span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorEightPc}></img>
                    <span className="name">Врач</span>
                    <span className="who">Стоматолог</span>
                  </div>
                  <div className="doctor">
                    <img className="img" src={DoctorNinePc}></img>
                    <span className="name">Юлия</span>
                    <span className="who">Администратор</span>
                  </div>
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

export default DoctorsPage;
