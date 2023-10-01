import React, { useState, useEffect, useRef, RefObject } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import "./styles/children_styles.css";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";

import { Reveal } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const childIllustration = require("../../assets/child_illustration.webp");

const Child01 = require("../../assets/child01.webp");
const Child02 = require("../../assets/child02.webp");
const Child03 = require("../../assets/child03.webp");
const Child04 = require("../../assets/child04.webp");
const Child05 = require("../../assets/child05.webp");
const Child06 = require("../../assets/child06.webp");
const modalImage = require("../../assets/example_modal.webp");

const logoMobile: string = require("../../assets/logo_mob.svg").default;

const ChildDental = () => {
  // Menu Function
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

  function openPopupWindow() {
    setOpen(true);
  }

  function sendPhoneRequest(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_rgnaux5",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const openModal = () => {
    console.log("Opening modal");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="div">
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
        <div className="screen-children">
          <div className="mob-screen">
            <Header
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
              openModal={openModal}
            ></Header>

            <div className="heading-content">
              <h1 className="heading">Dental Home - Детская стоматология</h1>
            </div>
            <img
              className="illustration"
              src={childIllustration}
              alt="illustration"
            ></img>
            <button className="golden-button">Записаться на прием</button>
            <div className="services">
              <h2 className="service-heading">Наши услуги</h2>

              <div className="service-squares">
                <div className="service-square">Исправление прикуса</div>
                <div className="service-square">Хирургия</div>
                <div className="service-square">Лечение зубов</div>
                <div className="service-square">Диагностика</div>
              </div>
            </div>
          </div>
          <div className="pc-screen">
            <Header
              togglePcMenu={togglePcMenu}
              isMenuPcOpen={isMenuPcOpen}
              openModal={openModal}
            ></Header>
            <div className="content-container">
              <div className="heading-container">
                <h1 className="heading">Dental Home - Детская стоматология</h1>
                <div className="button-row">
                  <button className="golden-button">Запись на прием</button>
                  <button className="square-video">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPlay}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
              <img className="image" src={childIllustration} alt="image"></img>
            </div>
            <div className="service-container">
              <div className="heading-container">
                <h2 className="services-heading">Наши Услуги</h2>
                <button className="button">Прайс лист</button>
              </div>
              <div className="squares-container">
                <div className="row">
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-bite-correction")}
                  >
                    <img src={Child01} className="square" alt="child"></img>
                    <span className="text">Исправление прикуса</span>
                  </div>
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-surgery")}
                  >
                    <img src={Child02} className="square" alt="child"></img>
                    <span className="text">Хирургия</span>
                  </div>
                  <div className="square-cont">
                    <img src={Child03} className="square" alt="child"></img>
                    <span className="text">Лечение зубов</span>
                  </div>
                </div>
                <div className="row two">
                  <div className="square-cont">
                    <img src={Child04} className="square" alt="child"></img>
                    <span className="text">Детская гигиена полости рта</span>
                  </div>
                  <div className="square-cont">
                    <img src={Child05} className="square" alt="child"></img>
                    <span className="text">Лечение во сне</span>
                  </div>
                  <div className="square-cont">
                    <img src={Child06} className="square" alt="child"></img>
                    <span className="text">Гигиена полости рта</span>
                  </div>
                </div>
              </div>
            </div>
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
              <img
                className="modal-img"
                src={modalImage}
                alt="modal-picture"
              ></img>
              <div className="modal-content">
                <img className="logo" src={logoMobile} alt="logotype"></img>
                <span className="text">
                  Хотите получить бесплатную консультацию?
                </span>
                <span className="additional-text">
                  Оставьте свой номер и мы перезвоним вам
                </span>
                <form className="input-container" onSubmit={sendPhoneRequest}>
                  <label htmlFor="phone-number-input" className="label">
                    Ваш номер телефона*
                  </label>
                  <input
                    type="tel"
                    name="phone-number-input"
                    className="phone-number-input"
                    placeholder="+7 (925) 222-90-22"
                    required={true}
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    style={{ textAlign: "center" }}
                    id=""
                  />
                  <button className="phone-btn" value="Send">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="icon"
                    ></FontAwesomeIcon>
                    Хорошо жду звонка
                  </button>
                </form>
              </div>
            </div>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default ChildDental;
