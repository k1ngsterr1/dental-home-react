"use client";
import React, { useState, useEffect } from "react";

import "./styles/header_styles.css";
import Menu from "../menu/Menu";

import Hamburger from "hamburger-react";
import { Fade, Zoom } from "react-awesome-reveal";

interface HeaderProps {
  isMenuOpen?: any;
  isMenuPcOpen?: any;
  toggleMenu?: any;
  togglePcMenu?: any;
}

const logo: string = require("../../assets/logo_mob.svg").default;

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  isMenuPcOpen,
  togglePcMenu,
}) => {
  if (isMenuOpen || isMenuPcOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  useEffect(() => {
    if (isMenuOpen || isMenuPcOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = ""; // Reset when the component unmounts
    };
  }, [isMenuOpen, isMenuPcOpen]);

  // {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
  return (
    <header className="header">
      <div className="header-mob">
        <img src={logo} alt="logotype" className="logo"></img>
        <Hamburger
          color={isMenuOpen ? "#E6C96B" : "#202637"}
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
        {isMenuOpen && (
          <Fade delay={300}>
            <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />{" "}
          </Fade>
        )}
      </div>
      <div className="header-pc">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="header-content">
          <a href="tel:+7(925) 925 99 55" className="tel-link">
            +7(925) 925 99 55
          </a>
          <button className="header-btn">Записаться на прием</button>
          <Hamburger
            onToggle={togglePcMenu}
            toggled={isMenuPcOpen ? true : false}
            color={isMenuPcOpen ? "#E6C96B" : "#202637"}
          ></Hamburger>
          {isMenuPcOpen && (
            <Fade>
              <Menu isMenuPcOpen={isMenuPcOpen} togglePcMenu={togglePcMenu} />
            </Fade>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
