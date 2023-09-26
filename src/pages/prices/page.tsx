"use client";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import "../prices/styles/prices_styles.css";

interface PriceTabProps {
  tabHeadign: any;
  paragraphOne: any;
  priceOne: any;
  paragraphTwo: any;
  priceTwo: any;
  paragraphThree?: any;
  priceThree?: any;
  paragraphFour?: any;
  priceFour?: any;
  paragraphFive?: any;
  priceFive?: any;
  paragraphSix?: any;
  priceSix?: any;
}

const PriceTab: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab">
      <h4 className="price-heading">{props.tabHeadign}</h4>
      <p className="price-p">{props.paragraphOne}</p>
      <span className="price">{props.priceOne}</span>
      <p className="price-p-two">{props.paragraphTwo}</p>
      <span className="price-two">{props.priceTwo}</span>
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PriceTabLong: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab-long">
      <h4 className="price-heading">{props.tabHeadign}</h4>
      <p className="price-p">{props.paragraphOne}</p>
      <span className="price">{props.priceOne}</span>
      <p className="price-p-two">{props.paragraphTwo}</p>
      <span className="price-two">{props.priceTwo}</span>
      <p className="price-p-three">{props.paragraphThree}</p>
      <span className="price-three">{props.priceThree}</span>
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PricesPage = () => {
  const [heading, setHeading] = useState("Лечение зубов");

  const [serviceName, setServiceName] = useState("Художественные реставрации");
  const [serviceNameTwo, setServiceNameTwo] = useState("Лечение кариеса");
  const [serviceNameThree, setServiceNameThree] = useState("Лечение кариеса");
  const [serviceNameFour, setServiceNameFour] = useState(
    "Художественные реставрации"
  );
  const [serviceNameFive, setServiceNameFive] = useState(
    "Художественные реставрации"
  );
  const [serviceNameSix, setServiceNameSix] = useState(
    "Художественные реставрации"
  );

  const [serviceParagraph, setServiceParagraph] = useState(
    "Восстановление зуба композитом, лечение кариеса (художественная реставрация с повышенными эстетическим показателями 1 категории) / А16.07.002.011"
  );

  const [serviceParagraphTwo, setServiceParagraphTwo] = useState(
    "Восстановление зуба композитом, лечение кариеса (художественная реставрация с повышенными эстетическим показателями 2 категории) / А16.07.002.010"
  );

  const [serviceParagraphThree, setServiceParagraphThree] = useState(
    "Восстановление зуба пломбой, лечение кариеса IV класс по Блэку, МОД / А16.07.002.006"
  );

  const [serviceParagraphFour, setServiceParagraphFour] = useState(
    "Восстановление зуба пломбой, лечение кариеса  I,V класс по Блэку / А16.07.002.004"
  );

  const [serviceParagraphFive, setServiceParagraphFive] = useState(
    "Восстановление зуба пломбой, лечение кариеса II,III класс по Блэку / А16.07.002.005"
  );

  const [serviceParagraphSix, setServiceParagraphSix] = useState("");

  const [price, setPrice] = useState("27500₽");
  const [priceTwo, setPriceTwo] = useState("33000₽");
  const [priceThree, setPriceThree] = useState("22500₽");
  const [priceFour, setPriceFour] = useState("17600₽");
  const [priceFive, setPriceFive] = useState("20900₽");

  const [isToothHealingOpened, setToothHealingOpen] = useState(true);
  const [isWhiteningOpened, setWhiteningOpen] = useState(false);
  const [isMouthHygieneOpened, setMouthHygieneOpen] = useState(false);
  const [isHealingInSleepOpened, setHealingInSleepOpen] = useState(false);
  const [isVinirsOpened, setVinirsOpen] = useState(false);
  const [isParodontHealingOpened, setParodontHealingOpen] = useState(false);
  const [isProthesisOpened, setProthesisOpen] = useState(false);
  const [isDiagnosisOpened, setDiagnosisOpen] = useState(false);

  const toothHealingExpansion = () => {
    setToothHealingOpen(!isToothHealingOpened);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setVinirsOpen(false);
    setProthesisOpen(false);
    setDiagnosisOpen(false);
    setHeading("Лечение зубов");
    setServiceName("Художественная реставрация");
    setServiceNameTwo("Лечение кариеса");
    setServiceParagraph(
      "Восстановление зуба композитом, лечение кариеса (художественная реставрация с повышенными эстетическим показателями 1 категории) / А16.07.002.011"
    );
    setServiceParagraphTwo(
      "Восстановление зуба композитом, лечение кариеса (художественная реставрация с повышенными эстетическим показателями 2 категории) / А16.07.002.010"
    );
    setServiceParagraphThree(
      "Восстановление зуба пломбой, лечение кариеса  I,V класс по Блэку / А16.07.002.004"
    );
    setServiceParagraphFour(
      "Восстановление зуба пломбой, лечение кариеса II,III класс по Блэку / А16.07.002.005"
    );
    setServiceParagraphFive(
      "Восстановление зуба пломбой, лечение кариеса II,III класс по Блэку / А16.07.002.005"
    );

    setPrice("27500₽");
    setPriceTwo("33000₽");
    setPriceThree("22500₽");
    setPriceFour("17600₽");
    setPriceFive("20900₽");
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
    setHeading("Отбеливание");
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
    setHeading("Гигиена полости рта");
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
    setHeading("Лечение пародонта");
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
    setHeading("Виниры и коронки");
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
    setHeading("Диагонстика");
  };

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
    <div className="screen">
      <div className="content">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        <main className="main-content">
          <div className="bread-dots">
            <Link to="/" className="main-link">
              Главная
            </Link>
            <div className="circle"></div>
            <Link to="/prices" className="prices-link">
              Цены
            </Link>
          </div>
          <h1 className="heading">Цены</h1>
          <div className="divider-container">
            <div className="divider"></div>
            <div className="row">
              <span className="text">Направления</span>
              <span className="text">Цена</span>
            </div>
          </div>
        </main>
        <div className="services-content">
          <div className="buttons">
            <div className="row">
              <button
                className={isToothHealingOpened ? "button-active" : "button"}
                onClick={toothHealingExpansion}
              >
                Лечение зубов
              </button>
              <button
                className={isWhiteningOpened ? "button-active" : "button"}
                onClick={whiteningExpansion}
              >
                Отбеливание
              </button>
            </div>
            <div className="row two">
              <button
                className={isMouthHygieneOpened ? "button-active" : "button"}
                onClick={mouthHygieneExpansion}
              >
                Гигиена полости рта
              </button>
              <button
                className={isVinirsOpened ? "button-active" : "button"}
                onClick={vinirExpansion}
              >
                Виниры и коронки
              </button>
            </div>
            <div className="row two">
              <button
                className={isParodontHealingOpened ? "button-active" : "button"}
                onClick={parodontHealthExpansion}
              >
                Лечение пародонта
              </button>
              <button
                className={isDiagnosisOpened ? "button-active" : "button"}
                onClick={diagnosisExpansion}
              >
                Диагностика
              </button>
            </div>
          </div>
          <div className="heading-container">
            <h2 className="heading">{heading}</h2>
          </div>
          <div className="cards">
            <PriceTab
              tabHeadign={serviceName}
              paragraphOne={serviceParagraph}
              priceOne={price}
              paragraphTwo={serviceParagraphTwo}
              priceTwo={priceTwo}
            ></PriceTab>
            <PriceTabLong
              tabHeadign={serviceNameTwo}
              paragraphOne={serviceParagraphThree}
              priceOne={priceThree}
              paragraphTwo={serviceParagraphFour}
              priceTwo={priceFour}
              paragraphThree={serviceParagraphFive}
              priceThree={priceFive}
            ></PriceTabLong>
            <PriceTab
              tabHeadign={serviceName}
              paragraphOne={serviceParagraph}
              priceOne={price}
              paragraphTwo={serviceParagraphTwo}
              priceTwo={priceTwo}
            ></PriceTab>
            <PriceTabLong
              tabHeadign={serviceNameTwo}
              paragraphOne={serviceParagraphThree}
              priceOne={priceThree}
              paragraphTwo={serviceParagraphFour}
              priceTwo={priceFour}
              paragraphThree={serviceParagraphFive}
              priceThree={priceFive}
            ></PriceTabLong>
          </div>
        </div>
      </div>
      <div className="pc-content">
        <main className="main-content">
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
              <Link className="link-prices" to="/prices">
                Цены
              </Link>
            </div>
            <div className="heading-container">
              <h1 className="heading">Цены</h1>
            </div>
            <div className="divider-container">
              <div className="divider"></div>
              <div className="row-container">
                <span className="text">Услуги</span>
                <span className="text">Направления</span>
              </div>
            </div>
          </div>
          <div className="services-content">
            <div className="services-list">
              <button
                className={isToothHealingOpened ? "button-active" : "button"}
                onClick={toothHealingExpansion}
              >
                Лечение зубов
              </button>
              <button
                className={isWhiteningOpened ? "button-active" : "button"}
                onClick={whiteningExpansion}
              >
                Отбеливание
              </button>
              <button
                className={isMouthHygieneOpened ? "button-active" : "button"}
                onClick={mouthHygieneExpansion}
              >
                Гигиена полости рта
              </button>
              <button
                className={isVinirsOpened ? "button-active" : "button"}
                onClick={vinirExpansion}
              >
                Виниры и коронки
              </button>
              <button
                className={isParodontHealingOpened ? "button-active" : "button"}
                onClick={parodontHealthExpansion}
              >
                Лечение пародонта
              </button>
              <button
                className={isDiagnosisOpened ? "button-active" : "button"}
                onClick={diagnosisExpansion}
              >
                Диагностика
              </button>
              {/* <button className="button">Имплантация и хирургия</button>
              <button className="button">Исправление прикуса</button> */}
            </div>
            <div className="cards-list">
              <h2 className="heading">{heading}</h2>
              <PriceTab
                tabHeadign={serviceName}
                paragraphOne={serviceParagraph}
                priceOne={price}
                paragraphTwo={serviceParagraphTwo}
                priceTwo={priceTwo}
              ></PriceTab>
              <PriceTabLong
                tabHeadign={serviceNameTwo}
                paragraphOne={serviceParagraphThree}
                priceOne={priceThree}
                paragraphTwo={serviceParagraphFour}
                priceTwo={priceFour}
                paragraphThree={serviceParagraphFive}
                priceThree={priceFive}
              ></PriceTabLong>
              <PriceTab
                tabHeadign={serviceName}
                paragraphOne={serviceParagraph}
                priceOne={price}
                paragraphTwo={serviceParagraphTwo}
                priceTwo={priceTwo}
              ></PriceTab>
              <PriceTabLong
                tabHeadign={serviceNameTwo}
                paragraphOne={serviceParagraphThree}
                priceOne={priceThree}
                paragraphTwo={serviceParagraphFour}
                priceTwo={priceFour}
                paragraphThree={serviceParagraphFive}
                priceThree={priceFive}
              ></PriceTabLong>
              <PriceTab
                tabHeadign={serviceName}
                paragraphOne={serviceParagraph}
                priceOne={price}
                paragraphTwo={serviceParagraphTwo}
                priceTwo={priceTwo}
              ></PriceTab>
              <PriceTabLong
                tabHeadign={serviceNameTwo}
                paragraphOne={serviceParagraphThree}
                priceOne={priceThree}
                paragraphTwo={serviceParagraphFour}
                priceTwo={priceFour}
                paragraphThree={serviceParagraphFive}
                priceThree={priceFive}
              ></PriceTabLong>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PricesPage;
