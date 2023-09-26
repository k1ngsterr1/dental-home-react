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
  style?: any;
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
    <div className="price-tab-long" style={{ display: `${props.style}` }}>
      <h4 className="price-heading">{props.tabHeadign}</h4>
      {props.paragraphOne && (
        <>
          <p className="price-p">{props.paragraphOne}</p>
          <span className="price">{props.priceOne}</span>
        </>
      )}
      {props.paragraphTwo && (
        <>
          <p className="price-p-two">{props.paragraphTwo}</p>
          <span className="price-two">{props.priceTwo}</span>
        </>
      )}
      {props.paragraphThree && (
        <>
          <p className="price-p-three">{props.paragraphThree}</p>
          <span className="price-three">{props.priceThree}</span>
        </>
      )}
      {props.paragraphFour && (
        <>
          <p className="price-p-three">{props.paragraphFour}</p>
          <span className="price-three">{props.priceFour}</span>
        </>
      )}
      {props.paragraphFive && (
        <>
          <p className="price-p-three">{props.paragraphFive}</p>
          <span className="price-three">{props.priceFive}</span>
        </>
      )}
      {props.paragraphSix && (
        <>
          <p className="price-p-three">{props.paragraphSix}</p>
          <span className="price-three">{props.priceSix}</span>
        </>
      )}
      {props.paragraphSeven && (
        <>
          <p className="price-p-three">{props.paragraphSeven}</p>
          <span className="price-three">{props.priceSeven}</span>
        </>
      )}
      {props.paragraphEight && (
        <>
          <p className="price-p-three">{props.paragraphEight}</p>
          <span className="price-three">{props.priceEight}</span>
        </>
      )}
      {props.paragraphNine && (
        <>
          <p className="price-p-three">{props.paragraphNine}</p>
          <span className="price-three">{props.priceNine}</span>
        </>
      )}
      {props.paragraphTen && (
        <>
          <p className="price-p-three">{props.paragraphTen}</p>
          <span className="price-three">{props.priceTen}</span>
        </>
      )}
      {props.paragraph11 && (
        <>
          <p className="price-p-three">{props.paragraph11}</p>
          <span className="price-three">{props.price11}</span>
        </>
      )}
      {props.paragraph12 && (
        <>
          <p className="price-p-three">{props.paragraph12}</p>
          <span className="price-three">{props.price12}</span>
        </>
      )}
      {props.paragraph13 && (
        <>
          <p className="price-p-three">{props.paragraph13}</p>
          <span className="price-three">{props.price13}</span>
        </>
      )}
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PricesPage = () => {
  const [displayNone, setDisplayNone] = useState("");

  const [heading, setHeading] = useState("Ортопедия");

  const [serviceName, setServiceName] = useState("Ортопедия");
  const [serviceNameTwo, setServiceNameTwo] = useState("Оттиски");
  const [serviceNameThree, setServiceNameThree] = useState("Вкладки");
  const [serviceNameFour, setServiceNameFour] = useState("Коронки");
  const [serviceNameFive, setServiceNameFive] = useState(
    "Восстановление зуба виниром E-max"
  );
  const [serviceNameSix, setServiceNameSix] = useState(
    "Съемные, бюгельные протезы"
  );
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
    "Снятие оттиска с одной челюсти альгинатными массами"
  );

  const [serviceParagraph15, setServiceParagraph15] = useState(
    "Снятие оттиска с одной челюсти массой из С-силикона"
  );

  const [serviceParagraph16, setServiceParagraph16] = useState(
    "Снятие оттиска с одной челюсти массой из А-силикона"
  );

  const [serviceParagraph17, setServiceParagraph17] =
    useState("Прикусной блок ");

  const [serviceParagraph18, setServiceParagraph18] = useState(
    "Изготовление прикусного шаблона и индивидуальной ложки"
  );

  const [serviceParagraph19, setServiceParagraph19] = useState(
    "Снятие оттиска с одной челюсти для изготовления силиконового ключа"
  );

  const [serviceParagraph20, setServiceParagraph20] = useState(
    "Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки "
  );

  const [serviceParagraph21, setServiceParagraph21] = useState(
    "Wax up восковое моделирование"
  );

  const [serviceParagraph22, setServiceParagraph22] = useState(
    "Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
  );

  const [serviceParagraph23, setServiceParagraph23] = useState(
    "Восстановление зуба с использованием керамической вкладки (накладки) Emax"
  );

  const [serviceParagraph24, setServiceParagraph24] = useState(
    "Восстановление зуба с использованием цельнолитой культевой вкладки"
  );

  const [serviceParagraph25, setServiceParagraph25] = useState(
    "Восстановление зуба с использованием культевой вкладки из диоксида циркония"
  );

  const [serviceParagraph26, setServiceParagraph26] = useState(
    "Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
  );

  const [serviceParagraph27, setServiceParagraph27] = useState(
    "Восстановление зуба коронкой временной прямым методом"
  );

  const [serviceParagraph28, setServiceParagraph28] = useState(
    "Восстановление зуба коронкой временной лабораторным способом "
  );

  const [serviceParagraph29, setServiceParagraph29] = useState(
    "Восстановление зуба коронкой металлокерамической класса `стандарт`"
  );

  const [serviceParagraph30, setServiceParagraph30] = useState(
    "Восстановление зуба коронкой металлокерамической класса `премиум`"
  );

  const [serviceParagraph31, setServiceParagraph31] = useState(
    "Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
  );

  const [serviceParagraph32, setServiceParagraph32] = useState(
    "Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
  );

  const [serviceParagraph33, setServiceParagraph33] = useState(
    "Восстановление зуба коронкой из диоксида циркония класса `премиум`"
  );
  const [serviceParagraph34, setServiceParagraph34] = useState(
    "Восстановление зуба коронкой металлокерамической класса `стандарт`"
  );

  const [serviceParagraph35, setServiceParagraph35] = useState(
    "Восстановление зуба виниром E-max класса `стандарт`"
  );

  const [serviceParagraph36, setServiceParagraph36] = useState(
    "Восстановление зуба виниром E-max класса `премиум`"
  );

  const [serviceParagraph37, setServiceParagraph37] = useState(
    "Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
  );
  const [serviceParagraph38, setServiceParagraph38] = useState(
    "Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм)"
  );

  const [serviceParagraph39, setServiceParagraph39] = useState(
    "Протезирование частичным съемным пластиночным протезом для временного замещения отсутствующих 1-3 зубов (иммедиат-протез) "
  );

  const [serviceParagraph40, setServiceParagraph40] = useState(
    "Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм)"
  );
  const [serviceParagraph41, setServiceParagraph41] = useState(
    "Протезирование съемным бюгельным протезом кламерным"
  );
  const [serviceParagraph42, setServiceParagraph42] = useState(
    "Протезирование съемным бюгельным протезом шинирующим"
  );
  const [serviceParagraph43, setServiceParagraph43] = useState(
    "Протезирование съемным бюгельным протезом с замковыми креплениями Bredent "
  );
  const [serviceParagraph44, setServiceParagraph44] = useState(
    "Протезирование съемным бюгельным протезом Квадротти"
  );
  const [serviceParagraph45, setServiceParagraph45] = useState(
    "Изготовление ночной каппы при бруксизме"
  );

  const [serviceParagraph46, setServiceParagraph46] = useState(
    "Изготовление каппы для отбеливания (реминерализации)"
  );

  const [serviceParagraph47, setServiceParagraph47] = useState(
    "Изготовление спортивной каппы"
  );

  const [serviceParagraph48, setServiceParagraph48] = useState(
    "Определение центрального соотношения целюстей и центральной окклюзии"
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
  const [price14, setPrice14] = useState("1000₽");
  const [price15, setPrice15] = useState("1500₽");
  const [price16, setPrice16] = useState("2000₽");
  const [price17, setPrice17] = useState("1000₽");
  const [price18, setPrice18] = useState("3500₽");
  const [price19, setPrice19] = useState("1500₽");
  const [price20, setPrice20] = useState("2500₽");
  const [price21, setPrice21] = useState("2000₽");
  const [price22, setPrice22] = useState("5500₽");
  const [price23, setPrice23] = useState("25000₽");
  const [price24, setPrice24] = useState("7000₽");
  const [price25, setPrice25] = useState("15000₽");
  const [price26, setPrice26] = useState("10000₽");
  const [price27, setPrice27] = useState("2000₽");
  const [price28, setPrice28] = useState("3500₽");
  const [price29, setPrice29] = useState("12000₽");
  const [price30, setPrice30] = useState("18500₽");
  const [price31, setPrice31] = useState("18500₽");
  const [price32, setPrice32] = useState("18000₽");
  const [price33, setPrice33] = useState("27000₽");
  const [price34, setPrice34] = useState("3500₽");
  const [price35, setPrice35] = useState("25000₽");
  const [price36, setPrice36] = useState("35000₽");
  const [price37, setPrice37] = useState("40000₽");
  const [price38, setPrice38] = useState("9500₽");
  const [price39, setPrice39] = useState("40000₽");
  const [price40, setPrice40] = useState("45000₽");
  const [price41, setPrice41] = useState("48000₽");
  const [price42, setPrice42] = useState("55000₽");
  const [price43, setPrice43] = useState("45000₽");
  const [price44, setPrice44] = useState("9000₽");
  const [price45, setPrice45] = useState("4000₽");
  const [price46, setPrice46] = useState("10000₽");
  const [price47, setPrice47] = useState("0₽");

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
    setServiceName("Ортопедия");
    setServiceNameTwo("Оттиски");
    setServiceNameThree("Вкладки");
    setServiceParagraph(
      "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций"
    );
    setServiceParagraphTwo(
      "Фиксация на RELYX Luting несъемных ортопедических конструкций"
    );
    setServiceParagraphThree(
      "Фиксация несъемных ортопедических конструкций на временный цемент Temp bond "
    );
    setServiceParagraphFour(
      "Снятие несъемной ортопедической конструкции (1 единица) "
    );
    setServiceParagraphFive("Удаление вкладки");
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
    setServiceParagraph14(
      "Снятие оттиска с одной челюсти альгинатными массами "
    );
    setServiceParagraph15(
      "Снятие оттиска с одной челюсти массой из С-силикона"
    );
    setServiceParagraph16(
      "Снятие оттиска с одной челюсти массой из А-силикона "
    );
    setServiceParagraph17("Прикусной блок");
    setServiceParagraph18(
      "Изготовление прикусного шаблона и индивидуальной ложки"
    );
    setServiceParagraph19(
      "Снятие оттиска с одной челюсти для изготовления силиконового ключа"
    );

    setServiceParagraph20(
      "Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки "
    );

    setServiceParagraph21("Wax up восковое моделирование");

    setServiceParagraph22(
      "Цифровой оттиск (сканирование верхней и нижней челюсти, прикус) "
    );

    setServiceParagraph23(
      "Восстановление зуба с использованием керамической вкладки (накладки) Emax"
    );

    setServiceParagraph24(
      "Восстановление зуба с использованием цельнолитой культевой вкладки"
    );

    setServiceParagraph25(
      "Восстановление зуба с использованием культевой вкладки из диоксида циркония "
    );

    setServiceParagraph26(
      "Восстановление зуба с использованием золотой вкладки (без стоимости золота) "
    );

    setServiceParagraph27(
      "Восстановление зуба коронкой временной прямым методом"
    );

    setServiceParagraph28(
      "Восстановление зуба коронкой временной лабораторным способом "
    );

    setServiceParagraph29(
      "Восстановление зуба коронкой металлокерамической класса `стандарт`"
    );

    setServiceParagraph30(
      "Восстановление зуба коронкой металлокерамической класса `премиум`"
    );

    setServiceParagraph31(
      "Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
    );

    setServiceParagraph32(
      "Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
    );

    setServiceParagraph33(
      "Восстановление зуба коронкой из диоксида циркония класса `премиум`"
    );

    setServiceParagraph34(
      "Восстановление зуба виниром E-max класса `стандарт`"
    );

    setServiceParagraph35("Восстановление зуба виниром E-max класса `премиум`");

    setServiceParagraph36(
      "Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
    );

    setServiceParagraph37(
      "Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм)"
    );

    setServiceParagraph38(
      "Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм)"
    );

    setServiceParagraph39(
      "Протезирование частичным съемным пластиночным протезом для временного замещения отсутствующих 1-3 зубов (иммедиат-протез) "
    );
    setServiceParagraph40(
      "Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм)"
    );
    setServiceParagraph41(
      "Протезирование съемным бюгельным протезом кламерным"
    );
    setServiceParagraph42(
      "Протезирование съемным бюгельным протезом шинирующим"
    );
    setServiceParagraph43(
      "Протезирование съемным бюгельным протезом с замковыми креплениями Bredent"
    );
    setServiceParagraph44(
      "Протезирование съемным бюгельным протезом Квадротти"
    );
    setServiceParagraph45("Изготовление ночной каппы при бруксизме");
    setServiceParagraph46(
      "Изготовление каппы для отбеливания (реминерализации)"
    );
    setServiceParagraph47("Изготовление спортивной каппы");
    setServiceParagraph48(
      "Определение центрального соотношения целюстей и центральной окклюзии"
    );

    setPrice("1500₽");
    setPriceTwo("2000₽");
    setPriceThree("700₽");
    setPriceFour("1000₽");
    setPriceFive("4000₽");
    setPriceSix("1500₽");
    setPriceSeven("5500₽");
    setPriceEight("5500₽");
    setPriceNine("5500₽");
    setPriceTen("5500₽");
    setPrice11("5000₽");
    setPrice12("1500₽");
    setPrice13("20000₽");
    setPrice14("1000₽");
    setPrice15("1500₽");
    setPrice16("2000₽");
    setPrice17("1000₽");
    setPrice18("3500₽");
    setPrice19("1500₽");
    setPrice20("2500₽");
    setPrice21("2000₽");
    setPrice22("5500₽");
    setPrice23("25000₽");
    setPrice24("7000₽");
    setPrice25("15000₽");
    setPrice26("10000₽");
    setPrice27("2000₽");
    setPrice28("3500₽");
    setPrice29("12000₽");
    setPrice30("18500₽");
    setPrice31("18000₽");
    setPrice32("27000₽");
    setPrice33("25000₽");
    setPrice34("25000₽");
    setPrice35("35000₽");
    setPrice36("10000₽");
    setPrice37("40000₽");
    setPrice38("9500₽");
    setPrice39("40000₽");
    setPrice40("45000₽");
    setPrice41("48000₽");
    setPrice42("55000₽");
    setPrice43("45000₽");
    setPrice44("9000₽");
    setPrice45("4000₽");
    setPrice46("10000₽");
    setPrice47("0₽");
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
    setHeading("Оттиски");
    setServiceName("Оттиски");
    setServiceNameTwo("Оттиски");
    setServiceParagraph("Снятие оттиска с одной челюсти альгинатными массами");
    setServiceParagraphTwo(
      "Снятие оттиска с одной челюсти массой из С-силикона"
    );
    setServiceParagraphThree(
      "Снятие оттиска с одной челюсти массой из А-силикона"
    );
    setServiceParagraphFour("Прикусной блок ");
    setServiceParagraphFive(
      "Изготовление прикусного шаблона и индивидуальной ложки"
    );
    setServiceParagraphSix(
      "Снятие оттиска с одной челюсти для изготовления силиконового ключа "
    );
    setServiceParagraphSeven(
      "Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки"
    );
    setServiceParagraphEight("Wax up восковое моделирование ");
    setServiceParagraphNine(
      "Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
    );
    setServiceParagraphTen("");
    setServiceParagraph11("");
    setServiceParagraph12("");
    setServiceParagraph13("");
    setPrice("1000₽");
    setPriceTwo("1500₽");
    setPriceThree("2000₽");
    setPriceFour("1000₽");
    setPriceFive("3500₽");
    setPriceSix("1500₽");
    setPriceSeven("2500₽");
    setPriceEight("2000₽");
    setPriceNine("");
    setPriceTen("");
    setPrice11("");
    setPrice12("");
    setPrice13("");
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
    setHeading("Вкладки");
    setHeading("Вкладки");
    setServiceName("Вкладки");
    setServiceNameTwo("Вкладки");
    setServiceParagraph(
      "Восстановление зуба с использованием керамической вкладки (накладки) Emax"
    );
    setServiceParagraphTwo(
      "Восстановление зуба с использованием цельнолитой культевой вкладки"
    );
    setServiceParagraphThree(
      "Восстановление зуба с использованием культевой вкладки из диоксида циркония"
    );
    setServiceParagraphFour(
      "Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
    );
    setServiceParagraphFive("");
    setServiceParagraphSix("");
    setServiceParagraphSeven("");
    setServiceParagraphEight("");
    setServiceParagraphNine("");
    setServiceParagraphTen("");
    setServiceParagraph11("");
    setServiceParagraph12("");
    setServiceParagraph13("");
    setPrice("25000₽");
    setPriceTwo("7000₽");
    setPriceThree("15000₽");
    setPriceFour("10000₽");
    setPriceFive("");
    setPriceSix("");
    setPriceSeven("");
    setPriceEight("");
    setPriceNine("");
    setPriceTen("");
    setPrice11("");
    setPrice12("");
    setPrice13("");
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
    setHeading("Коронки");
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
    setHeading("Восстановление зуба виниром");
    setServiceName("Восстановление зуба виниром");
    setServiceNameTwo("Восстановление зуба виниром");
    setServiceParagraph("Восстановление зуба виниром E-max класса `стандарт`");
    setServiceParagraphTwo(
      "Восстановление зуба виниром E-max класса `премиум`"
    );
    setServiceParagraphThree(
      "Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС` "
    );
    setServiceParagraphFour("");
    setServiceParagraphFive("");
    setServiceParagraphSix("");
    setServiceParagraphSeven("");
    setServiceParagraphEight("");
    setServiceParagraphNine("");
    setServiceParagraphTen("");
    setServiceParagraph11("");
    setServiceParagraph12("");
    setServiceParagraph13("");
    setPrice("25000");
    setPriceTwo("35000₽");
    setPriceThree("10000₽");
    setPriceFour("");
    setPriceFive("");
    setPriceSix("");
    setPriceSeven("");
    setPriceEight("");
    setPriceNine("");
    setPriceTen("");
    setPrice11("");
    setPrice12("");
    setPrice13("");
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
    setHeading("Коронки");
    setServiceName("Коронки");
    setServiceNameTwo("Коронки");
    setServiceParagraph(
      "Восстановление зуба коронкой временной прямым методом"
    );
    setServiceParagraphTwo(
      "Восстановление зуба коронкой временной лабораторным способом "
    );
    setServiceParagraphThree(
      "Восстановление зуба коронкой металлокерамической класса `стандарт`"
    );
    setServiceParagraphFour(
      "Восстановление зуба коронкой металлокерамической класса `премиум`"
    );
    setServiceParagraphFive(
      "Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
    );
    setServiceParagraphSix(
      "Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
    );
    setServiceParagraphSeven(
      "Восстановление зуба коронкой из диоксида циркония класса `премиум`"
    );
    setServiceParagraphEight("");
    setServiceParagraphNine("");
    setServiceParagraphTen("");
    setServiceParagraph11("");
    setServiceParagraph12("");
    setServiceParagraph13("");
    setPrice("2000₽");
    setPriceTwo("3500₽");
    setPriceThree("12000₽");
    setPriceFour("18500₽");
    setPriceFive("18500₽");
    setPriceSix("18000₽");
    setPriceSeven("27000₽");
    setPriceEight("");
    setPriceNine("");
    setPriceTen("");
    setPrice11("");
    setPrice12("");
    setPrice13("");
  };

  const prothesisExpansion = () => {
    setToothHealingOpen(false);
    setWhiteningOpen(false);
    setMouthHygieneOpen(false);
    setHealingInSleepOpen(false);
    setParodontHealingOpen(false);
    setProthesisOpen(!isProthesisOpened);
    setDiagnosisOpen(false);
    setHeading("Восстановление зуба виниром");
    setServiceName("Коронки");
    setServiceNameTwo("Коронки");
    setServiceParagraph(
      "Восстановление зуба коронкой временной прямым методом"
    );
    setServiceParagraphTwo(
      "Восстановление зуба коронкой временной лабораторным способом "
    );
    setServiceParagraphThree(
      "Восстановление зуба коронкой металлокерамической класса `стандарт`"
    );
    setServiceParagraphFour(
      "Восстановление зуба коронкой металлокерамической класса `премиум`"
    );
    setServiceParagraphFive(
      "Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
    );
    setServiceParagraphSix(
      "Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
    );
    setServiceParagraphSeven(
      "Восстановление зуба коронкой из диоксида циркония класса `премиум`"
    );
    setServiceParagraphEight("");
    setServiceParagraphNine("");
    setServiceParagraphTen("");
    setServiceParagraph11("");
    setServiceParagraph12("");
    setServiceParagraph13("");
    setPrice("2000₽");
    setPriceTwo("3500₽");
    setPriceThree("12000₽");
    setPriceFour("18500₽");
    setPriceFive("18500₽");
    setPriceSix("18000₽");
    setPriceSeven("27000₽");
    setPriceEight("");
    setPriceNine("");
    setPriceTen("");
    setPrice11("");
    setPrice12("");
    setPrice13("");
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
                Оттиски
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
                Оттиски
              </button>
              <button
                className={isMouthHygieneOpened ? "button-active" : "button"}
                onClick={mouthHygieneExpansion}
              >
                Вкладки
              </button>
              <button
                className={isVinirsOpened ? "button-active" : "button"}
                onClick={vinirExpansion}
              >
                Коронки
              </button>
              <button
                className={isParodontHealingOpened ? "button-active" : "button"}
                onClick={parodontHealthExpansion}
              >
                Восстановление Зуба Виниром
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
              <PriceTabLong
                style={setDisplayNone}
                tabHeadign={serviceName}
                paragraphOne={serviceParagraph14}
                priceOne={price14}
                paragraphTwo={serviceParagraph15}
                priceTwo={price15}
                paragraphThree={serviceParagraph16}
                priceThree={price16}
                paragraphFour={serviceParagraph17}
                priceFour={price17}
                paragraphFive={serviceParagraphFive}
                priceFive={priceFive}
                paragraphSix={serviceParagraphSix}
                priceSix={priceSix}
                paragraphSeven={serviceParagraphSeven}
                priceSeven={priceSeven}
                paragraphEight={serviceParagraphEight}
                priceEight={priceEight}
                paragraphNine={serviceParagraphNine}
                priceNine={priceNine}
                paragraphTen={serviceParagraphTen}
                priceTen={priceTen}
                paragraph11={serviceParagraph11}
                price11={price11}
                paragraph12={serviceParagraph12}
                price12={price12}
                paragraph13={serviceParagraph13}
                price13={price13}
              ></PriceTabLong>
              <PriceTabLong
                tabHeadign={serviceNameTwo}
                paragraphOne={serviceParagraph14}
                priceOne={price14}
                paragraphTwo={serviceParagraph15}
                priceTwo={price15}
                paragraphThree={serviceParagraph16}
                priceThree={price16}
                paragraphFour={serviceParagraph17}
                priceFour={price17}
                paragraphFive={serviceParagraph18}
                priceFive={price18}
                paragraphSix={serviceParagraph19}
                priceSix={price19}
                paragraphSeven={serviceParagraph20}
                priceSeven={price20}
                paragraphEight={serviceParagraph21}
                priceEight={price21}
                paragraphNine={serviceParagraph22}
                priceNine={price22}
              ></PriceTabLong>
              <PriceTabLong
                tabHeadign={serviceNameThree}
                paragraphOne={serviceParagraph23}
                priceOne={price23}
                paragraphTwo={serviceParagraph24}
                priceTwo={price24}
                paragraphThree={serviceParagraph25}
                priceThree={price25}
                paragraphFour={serviceParagraph26}
                priceFour={price26}
              ></PriceTabLong>
              <PriceTabLong
                tabHeadign={serviceNameFour}
                paragraphOne={serviceParagraph27}
                priceOne={price27}
                paragraphTwo={serviceParagraph28}
                priceTwo={price28}
                paragraphThree={serviceParagraph29}
                priceThree={price29}
                paragraphFour={serviceParagraph30}
                priceFour={price30}
                paragraphFive={serviceParagraph31}
                priceFive={price31}
                paragraphSix={serviceParagraph32}
                priceSix={price32}
                paragraphSeven={serviceParagraph33}
                priceSeven={price33}
              ></PriceTabLong>
              <PriceTabLong
                tabHeadign={serviceNameFive}
                paragraphOne={serviceParagraph34}
                priceOne={price34}
                paragraphTwo={serviceParagraph35}
                priceTwo={price35}
                paragraphThree={serviceParagraph36}
                priceThree={price36}
              ></PriceTabLong>
              <PriceTabLong
                tabHeadign={serviceNameSix}
                paragraphOne={serviceParagraph37}
                priceOne={price37}
                paragraphTwo={serviceParagraph38}
                priceTwo={price38}
                paragraphThree={serviceParagraph39}
                priceThree={price39}
                paragraphFour={serviceParagraph40}
                priceFour={price40}
                paragraphFive={serviceParagraph41}
                priceFive={price41}
                paragraphSix={serviceParagraph42}
                priceSix={price42}
                paragraphSeven={serviceParagraph43}
                priceSeven={price43}
                paragraphEight={serviceParagraph44}
                priceEight={price44}
                paragraphTen={serviceParagraph45}
                priceTen={price45}
                paragraph11={serviceParagraph46}
                price11={price46}
                paragraph12={serviceParagraph47}
                price12={price47}
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
