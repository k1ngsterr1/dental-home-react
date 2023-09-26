import React from "react";
import { YMaps, Map } from "react-yandex-maps";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faV } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

import "../footer/styles/footer_styles.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="content">
        <YMaps>
          <Map
            defaultState={{
              center: [55.751574, 37.573856], // Your initial latitude and longitude
              zoom: 9,
            }}
            width="90%"
            height="345px"
          />
        </YMaps>
        <a href="" className="map-link">
          Показать на карте
        </a>
        <div className="icons">
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon insta"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faVk} className="icon"></FontAwesomeIcon>
        </div>
        <div className="informations-container">
          <h5 className="information">Информация</h5>
          <div className="links-container">
            <div className="link-column-one">
              <a href="" className="l">
                Услуги
              </a>
              <a href="" className="l two">
                О клинике
              </a>
              <a href="" className="l two">
                Врачи
              </a>
              <a href="" className="l two">
                Цены
              </a>
            </div>
            <div className="link-column-two">
              <a href="" className="l">
                Работы
              </a>
              <a href="" className="l two">
                Статьи
              </a>
              <a href="" className="l two">
                Отзывы
              </a>
              <a href="" className="l two">
                Контакты
              </a>
            </div>
          </div>
        </div>
        <div className="contacts-container">
          <h5 className="contacts">Контакты</h5>
          <a href="tel:+79252229022" className="contact-text">
            +7 (925) 222-90-22
          </a>
          <span className="contact-text two">
            Россия, Московская область, г. Ивантеевка, Советский проспект 5
          </span>
          <span className="contact-text two">
            Россия, Московская область, г. Ивантеевка, Рощинская 9
          </span>
          <span className="contact-text two">Пн-Вс - 9:00-21:00</span>
          <span className="contact-text two">Бесплатная парковка</span>
          <div className="policy-row">
            <a href="" className="policy-text">
              Политика конфиденциальности
            </a>
            <a href="" className="policy-text">
              Политика обработки ПД
            </a>
          </div>
        </div>
      </div>
      <div className="pc-content">
        <div className="map-social-c column">
          <YMaps>
            <Map
              defaultState={{
                center: [55.751574, 37.573856], // Your initial latitude and longitude
                zoom: 9,
              }}
              width="clamp(196.5px,20.46744vw,786px)"
              height="clamp(172.5px,17.9676vw,690px)"
            />
          </YMaps>
          <a href="" className="white-link">
            Показать на карте
          </a>
          <div className="social-m-row">
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon"
            ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faVk} className="icon vk"></FontAwesomeIcon>
          </div>
        </div>
        <div className="column">
          <h6 className="information">Информация</h6>
          <a className="link-nav" href="">
            Услуги
          </a>
          <a className="link-nav" href="">
            О клинике
          </a>
          <a className="link-nav" href="">
            Врачи
          </a>
          <a className="link-nav" href="">
            Цены
          </a>
          <a className="link-nav" href="">
            Работы
          </a>
          <a className="link-nav" href="">
            Статьи
          </a>
          <a className="link-nav" href="">
            Отзывы
          </a>
          <a className="link-nav" href="">
            Контакты
          </a>
        </div>
        <div className="column">
          <h6 className="information">Контакты</h6>
          <p className="p-nav mob">+7(925) 925 99 55</p>
          <p className="p-nav">
            Россия, Московская область, г. Ивантеевка, Советский проспект 5
          </p>
          <p className="p-nav">
            Россия, Московская область, г. Ивантеевка, Рощинская 9
          </p>
          <p className="p-nav">Пн-Вс - 9:00-21:00</p>
          <p className="p-nav">Бесплатная парковка</p>
          <div className="links-conditional">
            <a href="" className="conditional">
              Политика конфиденциальности
            </a>
            <a href="" className="conditional cond">
              Политика обработки ПД
            </a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </footer>
  );
};

export default Footer;
