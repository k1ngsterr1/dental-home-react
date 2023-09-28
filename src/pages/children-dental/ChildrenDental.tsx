import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import "./styles/children_styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";

const childIllustration = require("../../assets/child_illustration.webp");

const ChildDental = () => {
  // Menu Function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="screen-children">
      <div className="mob-screen">
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}></Header>\
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
        <Header toggleMenu={togglePcMenu} isMenuOpen={isMenuPcOpen}></Header>
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
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="row two">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="row two">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChildDental;
