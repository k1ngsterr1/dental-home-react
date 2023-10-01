import React, { useState, useRef, RefObject } from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Link as ScrollLink,
} from "react-scroll";
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";

import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const mainService = require("../../../assets/service_pc.webp");

const doctorOne = require("../../../assets/1.webp");
const doctorTwo = require("../../../assets/2.webp");
const doctorThree = require("../../../assets/3.webp");
const doctorFour = require("../../../assets/4.webp");
const doctorFive = require("../../../assets/5.webp");
const doctorSix = require("../../../assets/6.webp");
const doctorSeven = require("../../../assets/7.webp");
const doctorEight = require("../../../assets/8.webp");
const doctorNine = require("../../../assets/9.webp");

const doctorOneMob = require("../../../assets/01.webp");
const doctorTwoMob = require("../../../assets/02.webp");
const doctorThreeMob = require("../../../assets/03.webp");
const doctorFourMob = require("../../../assets/04.webp");
const doctorFiveMob = require("../../../assets/05.webp");
const doctorSixMob = require("../../../assets/06.webp");
const doctorSevenMob = require("../../../assets/07.webp");
const doctorEightMob = require("../../../assets/08.webp");
const doctorNineMob = require("../../../assets/09.webp");

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const Hygiene = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="screen">
      <main className="services-screen-mobile">
        <div className="content">
          <div className="header-container" style={{ width: "100%" }}>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
          </div>
          <div className="tablet" style={{ width: "100%" }}>
            <Header
              isMenuPcOpen={isMenuPcOpen}
              togglePcMenu={togglePcMenu}
            ></Header>
          </div>
          <div className="heading-container">
            <div className="bread-dots">
              <Link to="/" className="link">
                Главная
              </Link>
              <div className="circle"></div>
              <Link to="/#services" className="link">
                Услуги
              </Link>
              <div className="circle"></div>
              <Link to="/services/hygiene" className="link active">
                Гигиена полости рта
              </Link>
            </div>
            <h1 className="heading">Гигиена полости рта</h1>
            <button className="golden-button">
              <span className="text">Записаться</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="icon"
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="information-container">
            <div className="divider-container">
              <div className="divider"></div>
              <span className="text">Об услуге</span>
            </div>
            <section className="information">
              <h3 className="information-heading">
                Гигиена полости рта в Ивантеевке: эффективные методы и
                рекомендации Введение
              </h3>
              <p className="information-paragraph">
                Гигиена полости рта играет важную роль в общем состоянии
                здоровья человека. Регулярное и правильное уход за зубами и
                деснами помогает предотвратить развитие кариеса, пародонтита и
                других заболеваний полости рта. В клинике Dental Home в
                Ивантеевке мы предлагаем профессиональные услуги по гигиене
                полости рта, которые помогут вам поддерживать здоровье ваших
                зубов и десен. Этапы проведения гигиены полости рта
              </p>
            </section>
            <div className="divider"></div>
            <section className="information">
              <h3 className="information-heading">Индикация зубного налета</h3>
              <p className="information-paragraph">
                Первым этапом процедуры гигиены полости рта является индикация
                зубного налета. Специальный индикатор окрашивает зубы, позволяя
                пациенту увидеть наличие зубного налета и определить места,
                которые требуют более тщательной чистки. Это помогает пациентам
                сосредоточиться на проблемных областях и улучшить свою домашнюю
                гигиену.
              </p>
            </section>
            <div className="divider"></div>
            <section className="information">
              <h3 className="information-heading">
                Удаление зубных отложений ультразвуком
              </h3>
              <p className="information-paragraph">
                Следующим этапом является удаление зубных отложений с
                использованием ультразвука. Ультразвуковая насадка скейлера
                генерирует миллионы микродвижений в минуту, которые разрушают
                твердый зубной камень. Эта процедура безболезненная и эффективно
                удаляет зубные отложения, которые невозможно удалить обычной
                чисткой зубов.
              </p>
            </section>
            <div className="divider"></div>
            <section className="information">
              <h3 className="information-heading">Полировка</h3>
              <p className="information-paragraph">
                После удаления зубных отложений производится полировка
                поверхностей зубов. Специальные чашечки и головки используются
                для полировки зубов, придавая им гладкость и блеск. Кроме того,
                на поверхности зубов наносится фторсодержащий препарат, который
                помогает укрепить эмаль и предотвратить развитие кариеса.
              </p>
            </section>
            <div className="divider"></div>
            <section className="information">
              <h3 className="information-heading">
                Кому рекомендуется профессиональная гигиена под микроскопом?
              </h3>
              <p className="information-paragraph">
                Профессиональная гигиена полости рта рекомендуется всем
                пациентам, особенно тем, у кого есть глубокие подвесные карманы
                и воспалительные процессы в полости рта. Эти проблемы требуют
                более тщательного и глубокого очищения, которое может быть
                достигнуто только при помощи профессиональной гигиены. Для
                пациентов без проблем с гигиеной регулярная домашняя чистка
                может быть достаточной.
              </p>
            </section>
            <section className="information">
              <h3 className="information-heading">Выводы</h3>
              <p className="information-paragraph">
                Гигиена полости рта является важной составляющей общего
                здоровья. Профессиональная гигиена полости рта в клинике Dental
                Home в Ивантеевке поможет вам поддерживать здоровье ваших зубов
                и десен. Индикация зубного налета, удаление зубных отложений
                ультразвуком и полировка поверхностей зубов - это эффективные
                методы, которые помогут вам достичь оптимальной гигиены полости
                рта. Регулярное проведение профессиональной гигиены полости рта
                поможет предотвратить развитие заболеваний полости рта и
                сохранить вашу улыбку здоровой и красивой. Обратившись в нашу
                клинику, вы получите высококачественное обслуживание от опытных
                стоматологов, которые помогут вам достичь и поддерживать
                идеальную гигиену полости рта.
              </p>
            </section>
            <div className="divider"></div>
            <div className="plate">
              <section className="tab-one">
                <h5 className="plate-heading">Профилактика и гигиена</h5>
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса IV класс по
                  Блэку, МОД / А16.07.002.006
                </span>
                <span className="price">22 500 ₽</span>
              </section>
              <section className="tab-two">
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса II,III класс по
                  Блэку / А16.07.002.005
                </span>
                <span className="price">20 900 ₽</span>
              </section>
              <section className="tab-three">
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса I,V класс по
                  Блэку / А16.07.002.004
                </span>
                <span className="price last">17 600 ₽</span>
              </section>
            </div>
          </div>
          <div className="services-gallery">
            <h4 className="heading">Работы</h4>
            <div className="divider"></div>
            <ServiceGallery
              imageSrc={serviceOneMob}
              imageSrcTwo={serviceTwoMob}
              imageSrcThree={serviceOneMob}
              imageSrcFour={serviceFourMob}
            />
          </div>
          <div className="services-gallery">
            <h4 className="heading">Наши специалисты</h4>
            <div className="divider"></div>
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
          <div className="services-gallery">
            <h4 className="heading">Отзывы</h4>
            <div className="divider"></div>
            <ReviewGallery></ReviewGallery>
            <div className="form-screen" id="form-screen-mob">
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
                  {/* <div className="input-container">
                    <label htmlFor="direction" className="la">
                      Направление
                    </label>
                    <input
                      type="text"
                      name="direction"
                      placeholder="Выберите Направление"
                      className="input-text"
                    />
                  </div> */}
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
          </div>
        </div>
      </main>
      <main className="services-pc">
        <div className="pc-content">
          <Header
            isMenuPcOpen={isMenuPcOpen}
            toggleMenu={togglePcMenu}
          ></Header>
          <div className="upper-content">
            <div className="heading-container">
              <div className="bread-dots-container">
                <Link to="/" className="link">
                  Главная
                </Link>
                <div className="circle"></div>
                <Link to="/#services" className="link">
                  Услуги
                </Link>
                <div className="circle"></div>
                <Link to="/services/teeth-healing" className="link active">
                  Лечение кариеса
                </Link>
              </div>
              <h1 className="heading">Лечение кариеса</h1>
              <button className="button">
                <span className="text">Записаться</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="icon"
                ></FontAwesomeIcon>
              </button>
            </div>
            <img
              src={mainService}
              alt="service"
              className="service-image"
            ></img>
          </div>
          <div className="services-content">
            <div className="services-list">
              <span className="text">Содержание</span>
              <div className="buttons">
                <Button
                  to=""
                  value={"Основная информация"}
                  className="button"
                ></Button>
                <Button to="" value={"Цены"} className="button"></Button>
                <Button to="" value={"Врачи"} className="button"></Button>
                <Button to="" value={"Работы"} className="button"></Button>
                <Button to="" value={"Отзывы"} className="button"></Button>
                <Button to="" value={"Контакты"} className="button"></Button>
                <Button
                  to=""
                  value={"Записаться на прием"}
                  className="button"
                ></Button>
              </div>
            </div>
            <div className="services-information">
              <span className="text">Об услуге</span>
              <div className="information-one">
                <h3 className="heading-info">Лечение кариеса</h3>
                <p className="p-info">
                  Кариес не терпит промедления. Он довольно быстро может перейти
                  от легкого дефекта эмали к серьезным поражениям зуба с
                  обширным воспалением. Без качественного и своевременного
                  лечения развивающийся процесс грозит потерей зуба. В нашей
                  клинике специалисты борются за каждый зуб, используя самые
                  современные методы лечения кариеса.
                </p>
              </div>
              <div className="information-two">
                <h3 className="heading-info two">Причины появления кариеса</h3>
                <p className="p-info two">
                  Основная причина связана с бактериями, которые скапливаются в
                  зубном налете. Они питаются сахарами из потребляемой человеком
                  пищи и выделяют кислоту, разрушающую эмаль. Чтобы ослабить
                  негативный эффект, важно регулярно очищать ротовую полость,
                  удаляя налет. Если гигиена страдает, то сразу повышается риск
                  развития кариеса. Дополнительные причины возникновения:
                  неправильное питание с обилием сладкого, серьезный дефицит
                  минеральных веществ, перенесенные тяжелые заболевания. Эмаль
                  зубов ослабевает, как и иммунная система. В результате
                  кариесогенные бактерии начинают размножаться, а эмаль уже не
                  может противостоять их активности. Недостаточная выработка
                  слюны и нарушение ее состава тоже могут способствовать
                  появлению кариеса. Слюна является природной защитой от
                  кариеса. Она призвана омывать зубы, способствовать
                  реминерализации эмали, а также защищать слизистую полости рта
                  от повреждений. Другие причины появления кариеса: Неправильный
                  прикус (неадекватное распределение нагрузки на зубы
                  провоцирует повреждения эмали) Скученность зубов (их
                  аномальное расположение приводит к скоплению налета и остатков
                  пищи, усложняя гигиену) Нарушение бактериального баланса
                  полости рта (баланс полезных и вредных бактерий сдвигается в
                  сторону последних; местная иммунная защита ослабевает)
                  Проблемы с минеральным обменом (дефицит фтора, кальция и
                  других элементов, важных для прочности эмали)
                </p>
              </div>
              <div className="information-two">
                <h3 className="heading-info two">Виды кариеса</h3>
                <p className="p-info two">
                  Кариес бывает: начальный, поверхностный, средний и глубокий.
                  Каждый из видов требует своего подхода в лечении. Это
                  обусловлено тем, какие ткани зуба вовлекаются в патологический
                  процесс. При начальном кариесе поверхность зуба пока еще
                  гладкая, без видимых признаков разрушения. Однако на ней есть
                  пятно белого цвета (так называемая стадия пятна). Если не
                  начать лечение, пятно темнеет и становится шероховатым.
                  <br></br>
                  <br></br>
                  Поверхностный кариес - следующая стадия. Здесь все еще
                  страдает только эмаль, но уже происходит образование кариозных
                  полостей. Пациент начинает жаловаться на болезненные ощущения
                  при контакте с внешними раздражителями (сладкое, кислое,
                  горячее, холодное). Впрочем, жалобы могут отсутствовать.
                  <br></br>
                  <br></br>
                  Средний кариес - это поражение верхнего слоя дентина, который
                  расположен под эмалью зуба. Болевые ощущения при контакте с
                  раздражителями становятся все более сильными, а на зубе видна
                  невооруженным глазом темная полость.
                  <br></br>
                  <br></br>
                  Наконец, глубокий кариес, представляет последнюю стадию. Здесь
                  кариозный процесс проникает вглубь зуба, затрагивая внутренние
                  слои дентина. Зуб болит сам, и появляется реальный риск
                  пульпита (воспаления пульпы).
                  <br></br>
                  <br></br>
                  Также в зависимости от локализации в тканях зуба кариес бывает
                  фиссурным, контактным, пришеечным и кариесом корня.
                </p>
              </div>
              <div className="information-two">
                <h3 className="heading-info two">Профилактика</h3>
                <p className="p-info two">
                  Профилактические мероприятия позволяют значительно снизить
                  риск развития кариеса, даже у людей, к нему предрасположенных.
                  Все они опираются на профессиональную профилактику (в
                  стоматологии) и профилактику в домашних условиях. Первая
                  включает регулярную профессиональную гигиену полости рта.
                  График гигиенических процедур назначается индивидуально в
                  зависимости от клинической картины.
                  <br></br>
                  <br></br>К примеру, хроническое течение болезней десен может
                  потребовать более частых визитов в клинику для профгигиены и
                  пародонтологической чистки. В ходе самой профгигиены врач не
                  только удаляет бактериальный налет, стоящий за развитием
                  кариеса, но и укрепляет эмаль. Используются специальные
                  фторсодержащие средства, позволяющие ее реминерализировать.
                  <br></br>
                  <br></br>
                  Также необходимы регулярные профилактические визиты, в ходе
                  которых врач проведет осмотр полости рта, возможно,
                  скорректирует гигиену (поможет подобрать более подходящие
                  средства для домашнего ухода) и выявит проблемы на ранней
                  стадии развития. Если обнаружить кариес на стадии пятна,
                  пломбировка и прочие мероприятия не понадобятся. Домашняя
                  профилактика, в первую очередь, включает гигиену. Это
                  регулярное очищение полости рта с использованием правильно
                  подобранных средств. Еще важно сбалансированное питание и
                  поддержание баланса витаминов и микроэлементов, входящих в
                  состав эмали.
                  <br></br>
                  <br></br>
                  Ортодонтическое лечение (исправление прикуса) - отдельный
                  вопрос. Вследствие неправильного распределения нагрузки на
                  зубы может развиваться клиновидный дефект, который со временем
                  грозит переродиться в кариес. А в случае скученности зубов -
                  один из распространенных ортодонтических дефектов - гигиена
                  затруднена. Это автоматически ставит данные зубы под угрозу
                  кариеса.
                </p>
              </div>
              <div className="divider"></div>
              <section className="information-qa">
                <h3 className="heading-info">Вопрос-Ответ</h3>
                <div className="questions">
                  <h4 className="question-heading">
                    <strong>
                      1. В каких случаях лечение кариеса зубов может проводиться
                      в седации?
                    </strong>
                  </h4>
                  <p className="answer-paragraph">
                    Если вы испытываете сильную тревогу от одной мысли о
                    посещении клиники или предстоит объемное, длительное лечение
                    (устранение кариеса на нескольких зубах), вам может быть
                    показано лечение в седации. Благодаря этому подходу пациент
                    максимально расслабляется, тревога уходит, и высидеть в
                    кресле стоматолога длительное время становится проще.
                  </p>
                  <h4 className="question-heading">
                    <strong>
                      2. Обязательно ли устранять кариес на стадии пятна?
                    </strong>
                  </h4>
                  <p className="answer-paragraph">
                    В стоматологии безотказно действует принцип: чем раньше, тем
                    лучше. Устранить проблему на начальном этапе развития не
                    только проще и менее травматично для тканей, но и дешевле.
                    Серьезные поражения с разрушением коронковой части зуба и
                    осложнениями в виде пульпита могут потребовать больших
                    вложений.
                  </p>
                  <h4 className="question-heading">
                    <strong>
                      3. Каковы цены на лечение кариеса в Москве, в вашей
                      клинике?
                    </strong>
                  </h4>
                  <p className="answer-paragraph">
                    Со всеми актуальными предложениями по методам лечения
                    кариеса в стоматологической клинике Inwhite Medical вы
                    можете ознакомиться здесь. В целом стоит отметить, что
                    итоговая стоимость будет складываться из степени развития
                    кариозного поражения и метода анестезии.
                  </p>
                  <h4 className="question-heading">
                    <strong>
                      4. Можно ли лечить кариес под общим наркозом?
                    </strong>
                  </h4>
                  <p className="answer-paragraph">
                    Да, он позволяет провести достаточно объемные и сложные
                    процедуры. Поэтому за одно посещение возможно решить сразу
                    несколько проблем. Лечение в наркозе безопасно и четко
                    контролируется анестезиологической бригадой и специальным
                    оборудованием. Цена в Москве, в клинике Inwhite Medical, на
                    лечение под наркозом зависит от продолжительности процедуры.
                    Рассчитать стоимость поможет ваш лечащий врач, исходя из
                    объема предстоящей работы.
                  </p>
                </div>
              </section>
              <div className="price-tab">
                <h4 className="price-heading">Лечение кариеса</h4>
                <div className="prices">
                  <div className="price-row">
                    <span className="text">
                      Восстановление зуба пломбой, лечение кариеса IV класс по
                      Блэку, МОД / А16.07.002.006
                    </span>
                    <span className="price">22 500 ₽</span>
                  </div>
                  <div className="price-row">
                    <span className="text">
                      Восстановление зуба пломбой, лечение кариеса IV класс по
                      Блэку, МОД / А16.07.002.006
                    </span>
                    <span className="price">22 500 ₽</span>
                  </div>
                  <div className="price-row last">
                    <span className="text">
                      Восстановление зуба пломбой, лечение кариеса IV класс по
                      Блэку, МОД / А16.07.002.006
                    </span>
                    <span className="price">22 500 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="gallery"
            style={{
              borderTop: "1px solid #202637",
              marginTop: "clamp(32px,3.33312vw,128px)",
            }}
          >
            <PcServiceGallery
              imageSrc={serviceOnePc}
              imageSrc2={serviceTwoPc}
              imageSrc3={ServiceThreePc}
              imageSrc4={ServiceFourPc}
            ></PcServiceGallery>
          </div>
          <div
            className="gallery"
            style={{
              borderTop: "1px solid #202637",
            }}
          >
            <PcGallery
              imageSrc={doctorOne}
              imageSrc2={doctorTwo}
              imageSrc3={doctorThree}
              imageSrc4={doctorFour}
              imageSrc5={doctorFive}
              imageSrc6={doctorSix}
              imageSrc7={doctorSeven}
              imageSrc8={doctorEight}
              imageSrc9={doctorNine}
            />
            <div
              className="gallery"
              style={{
                borderTop: "1px solid #202637",
                marginTop: "clamp(32px,3.33312vw,128px)",
              }}
            >
              <ReviewGalleryDesktop />
            </div>
            <div
              className="form-pc-screen"
              id="form-screen"
              ref={form}
              style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
              onSubmit={sendEmail}
            >
              <section className="content">
                <div className="heading-container">
                  <h5 className="heading">Записаться На Прием</h5>
                </div>
                <div className="divider"></div>
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
                        onChange={(event) => setPhoneNumber(event.target.value)}
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
                        onChange={(event) => setServiceName(event.target.value)}
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
                        onChange={(event) => setDoctorName(event.target.value)}
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hygiene;
