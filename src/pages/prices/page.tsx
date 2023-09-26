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
  paragraphSeven?: any;
  priceSeven?: any;
  paragraphEight?: any;
  priceEight?: any;
  paragraphNine?: any;
  priceNine?: any;
  paragraphTen?: any;
  priceTen?: any;
  paragraph11?: any;
  price11?: any;
  paragraph12?: any;
  price12?: any;
  paragraph13?: any;
  price13?: any;
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
      <p className="price-p-three">{props.paragraphFour}</p>
      <span className="price-three">{props.priceFour}</span>
      <p className="price-p-three">{props.paragraphFive}</p>
      <span className="price-three">{props.priceFive}</span>
      <p className="price-p-three">{props.paragraphSix}</p>
      <span className="price-three">{props.priceSix}</span>
      <p className="price-p-three">{props.paragraphSeven}</p>
      <span className="price-three">{props.priceSeven}</span>
      <p className="price-p-three">{props.paragraphEight}</p>
      <span className="price-three">{props.priceEight}</span>
      <p className="price-p-three">{props.paragraphNine}</p>
      <span className="price-three">{props.priceNine}</span>
      <p className="price-p-three">{props.paragraphTen}</p>
      <span className="price-three">{props.priceTen}</span>
      <p className="price-p-three">{props.paragraph11}</p>
      <span className="price-three">{props.price11}</span>
      <p className="price-p-three">{props.paragraph12}</p>
      <span className="price-three">{props.price12}</span>
      <p className="price-p-three">{props.paragraph13}</p>
      <span className="price-three">{props.price13}</span>
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PricesPage = () => {
  const [heading, setHeading] = useState("Ортопедия");

  const [serviceName, setServiceName] = useState("Ортопедия");
  const [serviceNameTwo, setServiceNameTwo] = useState("Ортопедия");
  const [serviceNameThree, setServiceNameThree] = useState("Ортопедия");
  const [serviceNameFour, setServiceNameFour] = useState("Ортопедия");
  const [serviceNameFive, setServiceNameFive] = useState("Ортопедия");
  const [serviceNameSix, setServiceNameSix] = useState("Ортопедия");
  const [serviceNameSeven, setServiceNameSeven] = useState("Ортопедия");
  const [serviceNameEight, setServiceNameEight] = useState("Ортопедия");
  const [serviceNameNine, setServiceNameNine] = useState("Ортопедия");
  const [serviceNameTen, setServiceNameTen] = useState("Ортопедия");
  const [serviceName11, setServiceName11] = useState("Ортопедия");

  const [serviceParagraph, setServiceParagraph] = useState(
    "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций"
  );

  const [serviceParagraphTwo, setServiceParagraphTwo] = useState(
    "Фиксация на RELYX Luting несъемных ортопедических конструкций 2 000Р"
  );

  const [serviceParagraphThree, setServiceParagraphThree] = useState(
    "Фиксация несъемных ортопедических конструкций на временный цемент Temp bond"
  );

  const [serviceParagraphFour, setServiceParagraphFour] = useState(
    "Снятие несъемной ортопедической конструкции (1 единица) "
  );

  const [serviceParagraphFive, setServiceParagraphFive] =
    useState("Удаление вкладки");

  const [serviceParagraphSix, setServiceParagraphSix] = useState(
    "Коррекция протеза, изготовленного в другой клинике"
  );

  const [serviceParagraphSeven, setServiceParagraphSeven] = useState(
    "Коррекция протеза, изготовленного в другой клинике"
  );

  const [serviceParagraphEight, setServiceParagraphEight] = useState(
    "Коррекция протеза, изготовленного в другой клинике"
  );

  const [serviceParagraphNine, setServiceParagraphNine] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 9"
  );

  const [serviceParagraphTen, setServiceParagraphTen] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 10"
  );

  const [serviceParagraph11, setServiceParagraph11] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 11"
  );

  const [serviceParagraph12, setServiceParagraph12] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 12"
  );

  const [serviceParagraph13, setServiceParagraph13] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 13"
  );

  const [serviceParagraph14, setServiceParagraph14] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 14"
  );

  const [serviceParagraph15, setServiceParagraph15] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 15"
  );

  const [serviceParagraph16, setServiceParagraph16] = useState(
    "Коррекция протеза, изготовленного в другой клинике - 16"
  );

  const [price, setPrice] = useState("1500₽");
  const [priceTwo, setPriceTwo] = useState("2000₽");
  const [priceThree, setPriceThree] = useState("700₽");
  const [priceFour, setPriceFour] = useState("1000₽");
  const [priceFive, setPriceFive] = useState("4000₽");
  const [priceSix, setPriceSix] = useState("1500₽");
  const [priceSeven, setPriceSeven] = useState("5500₽");
  const [priceEight, setPriceEight] = useState("5500₽");
  const [priceNine, setPriceNine] = useState("5500₽");
  const [priceTen, setPriceTen] = useState("5500₽");
  const [price11, setPrice11] = useState("5000₽");
  const [price12, setPrice12] = useState("1500₽");
  const [price13, setPrice13] = useState("20000₽");
  const [price14, setPrice14] = useState("5000₽");
  const [price15, setPrice15] = useState("5000₽");

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
    setHeading("Ортопедия");
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
    setServiceParagraphSix(
      "Коррекция протеза, изготовленного в другой клинике"
    );
    setServiceParagraphSeven(
      "Починка (перебазировка) съемного протеза лабораторным методом"
    );
    setServiceParagraphEight("Приварка 1 кламмера ");
    setServiceParagraphNine("Приварка 1 зуба ");
    setServiceParagraphTen("Замена матрицы на бюгельном протезе (1 протез)");
    setServiceParagraph11("Изготовление каппы для депрограмирования мышц");
    setServiceParagraph12(
      "Коррекция съемного протеза изготовленного в другой клинике"
    );
    setServiceParagraph13("Каппа для стабилизации прикуса (Ортотик) ");
    setPrice("27500₽");
    setPriceTwo("33000₽");
    setPriceThree("22500₽");
    setPriceFour("17600₽");
    setPriceFive("20900₽");
    setPriceSix("5500₽");
    setPriceSeven("5500₽");
    setPriceEight("5500₽");
    setPriceNine("5500₽");
    setPriceTen("5000₽");
    setPrice11("1500₽");
    setPrice12("20000₽");
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
                Ортопедия
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
            {/* <PriceTab
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
            ></PriceTabLong> */}
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
                Ортопедия
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
              {/* <PriceTab
                tabHeadign={serviceName}
                paragraphOne={serviceParagraph}
                priceOne={price}
                paragraphTwo={serviceParagraphTwo}
                priceTwo={priceTwo}
              ></PriceTab> */}
              <PriceTabLong
                tabHeadign={serviceNameTwo}
                paragraphOne={serviceParagraph}
                priceOne={price}
                paragraphTwo={serviceParagraphTwo}
                priceTwo={priceTwo}
                paragraphThree={serviceParagraphThree}
                priceThree={priceThree}
                paragraphFour={serviceParagraphFour}
                priceFour={priceFour}
                paragraphFive={serviceNameFive}
                priceFive={priceFive}
                paragraphSix={serviceNameSix}
                priceSix={priceSix}
                paragraphSeven={serviceParagraphSeven}
              ></PriceTabLong>
              {/* <PriceTab
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
              ></PriceTabLong> */}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PricesPage;
