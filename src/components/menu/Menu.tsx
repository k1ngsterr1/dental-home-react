import React from "react";

import "./styles/menu_styles.css";
import Hamburger from "hamburger-react";
// import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faMapPin, faChild } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const childIcon: string = require("../../assets/child-icon.svg").default;

interface MenuProps {
  isMenuOpen?: any;
  toggleMenu?: any;
  isMenuPcOpen?: any;
  togglePcMenu?: any;
}

const services: string = require("../../assets/services.svg").default;

const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  toggleMenu,
  isMenuPcOpen,
  togglePcMenu,
}) => {
  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu(); // Toggle the menu to close it
    }
  };

  const closePcMenu = () => {
    if (isMenuPcOpen) {
      togglePcMenu();
    }
  };

  function navigateToVk() {
    window.open("https://vk.com/dentalhomeclinik");
  }

  return (
    <div className={`menu-screen`}>
      <div className="menu-mob">
        <div className="divider-upper up"></div>
        <div className="menu-content">
          <div className="navigation-container">
            <div className="column-one">
              <Link to="/" className="golden-link">
                Главная
              </Link>
              <ScrollLink
                to="features-list-mob"
                smooth={true}
                className="golden-link l"
                onClick={closeMenu}
              >
                О клинике
              </ScrollLink>
              <ScrollLink
                to="doctors"
                smooth={true}
                className="golden-link l "
                onClick={closeMenu}
              >
                Врачи
              </ScrollLink>
              <Link to="/prices" className="golden-link l">
                Цены
              </Link>
            </div>
            <div className="column-two">
              {/* <a href="" className="golden-link">
                Работы
              </a>
              <a href="" className="golden-link l">
                Статьи
              </a> */}
              <ScrollLink
                to="review"
                smooth={true}
                className="golden-link l"
                onClick={closeMenu}
              >
                Отзывы
              </ScrollLink>
              <ScrollLink
                to="contacts"
                smooth={true}
                className="golden-link l"
                onClick={closeMenu}
              >
                Контакты
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="divider-upper"></div>
        <div className="geo-content">
          <div className="geo-row">
            <FontAwesomeIcon
              icon={faMapPin}
              className="geo-icon"
            ></FontAwesomeIcon>
            <span className="text">
              Московская область, г. Ивантеевка, Советский проспект 5
            </span>
          </div>
          <span className="dark schedule">Пн-Вс - 9:00-21:00</span>
          <span className="dark free">Бесплатная парковка</span>
          <a className="phone link" href="tel:+79252229022">
            +7 (925) 222-90-22
          </a>
          {/* <div className="geo-row second">
            <FontAwesomeIcon
              icon={faMapPin}
              className="geo-icon"
            ></FontAwesomeIcon>
            <span className="text">
              Московская область, г. Ивантеевка, Советский проспект 5
            </span>
          </div>
          <span className="dark schedule">Пн-Вс - 9:00-21:00</span>
          <span className="dark free">Бесплатная парковка</span>
          <a className="phone link" href="tel:">
            +7(925) 925 99 55
          </a> */}
          <div className="social-media">
            <FontAwesomeIcon
              icon={faVk}
              className="icon"
              onClick={navigateToVk}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="buttons">
          <div className="button">Записать на прием</div>
          <Link to="/child-dental" className="button child">
            Детская стоматология
          </Link>
        </div>
      </div>
      <div className="menu-pc">
        <div className="menu-content">
          <div className="column-one">
            <nav className="links">
              <Link to="/" className="golden-link">
                Главная
              </Link>
              <ScrollLink
                to="features-list-pc"
                smooth={true}
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                О клинике
              </ScrollLink>
              <ScrollLink
                to="doctors"
                style={{ cursor: "pointer" }}
                smooth={true}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Врачи
              </ScrollLink>
              <Link to="/prices" className="golden-link l">
                Цены
              </Link>

              <ScrollLink
                to="review"
                smooth={true}
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Отзывы{" "}
              </ScrollLink>
              <ScrollLink
                to="contacts"
                smooth={true}
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Контакты
              </ScrollLink>
              <div className="medias">
                <FontAwesomeIcon
                  icon={faVk}
                  className="icon vk"
                  onClick={navigateToVk}
                ></FontAwesomeIcon>
              </div>
            </nav>
          </div>
          <div className="column-two">
            <div className="adresses">
              <div className="adress-column one">
                <div className="adress-row">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Советский проспект 5
                  </span>
                </div>
                <span className="text">Пн-Вс - 9:00-21:00</span>
                <span className="text parking">Бесплатная парковка</span>
              </div>
              <div className="adress-column">
                <div className="adress-row ">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Советский проспект 5
                  </span>
                </div>
                <span className="text">Пн-Вс - 9:00-21:00</span>
                <span className="text parking">Бесплатная парковка</span>
              </div>
            </div>
            <div className="services-columnn">
              <span className="text">Услуги</span>
              <Link to="/services/teeth-healing" className="golden-link">
                Лечение зубов
              </Link>
              <a href="" className="golden-link l">
                Отбеливние
              </a>
              <a href="" className="golden-link l">
                Гигиена полости рта
              </a>
              <a href="" className="golden-link l">
                Лечение зубов во сне
              </a>
              <a href="" className="golden-link l">
                Виниры и коронки
              </a>
              <a href="" className="golden-link l">
                Лечение пародонта
              </a>
              <a href="" className="golden-link l">
                Протезирование зубов
              </a>
              <a href="" className="golden-link l">
                Диагностика
              </a>
              <a href="" className="golden-link l">
                Исправление прикуса
              </a>
              <a href="tel:+79252229022" className="phone-number">
                +7 (925) 222-90-22
              </a>
            </div>
          </div>
          <div className="column-three">
            <div className="btn-container">
              <Link to="/children-dental" className="child-button">
                <img className="icon" src={childIcon}></img>
              </Link>
              <span className="child-text">Детская стоматология</span>
            </div>
          </div>
        </div>
        <Link to="/services/teeth-healing">
          <img className="services" src={services} alt="services"></img>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
