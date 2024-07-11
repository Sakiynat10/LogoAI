import React, { Fragment } from "react";
import HeroSection from "@/components/hero-section";
import { vacancyData } from "@/data";
import AdvantageSection from "@/components/advantage-section";

import "./style.scss";
import AccordionSection from "@/components/accordion";
import ContactSection from "@/components/contact";
import Counter from "@/components/counter";

const vacancyAdvantages = [
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказами даже самый большой автопарк. Ежемесячная нагрузка на грузовик",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксированной оплатой за километраж.",
  },
  {
    src: "/advantages-3.svg",
    h1: "Единый договор",
    p: "Всего один договор с Cargofy дает вам доступ к самым крупным контрактам от компаний. Весь последующий",
  },
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказами даже самый большой автопарк. Ежемесячная нагрузка на грузовик",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксированной оплатой за километраж.",
  },
  {
    src: "/advantages-3.svg",
    h1: "Единый договор",
    p: "Всего один договор с Cargofy дает вам доступ к самым крупным контрактам от компаний. Весь последующий",
  },
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказами даже самый большой автопарк. Ежемесячная нагрузка на грузовик",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксированной оплатой за километраж.",
  },
];

const checkBoxData = [
  {
    info: "Справедливая зарплата",
  },
  {
    info: "Работать дома",
  },
  {
    info: "Работа по договерености",
  },
  {
    info: "Минимальные операционные издержки",
  },
];

const userInfo = {
  day: 15,
  employee: 60,
  totalOrder: 950,
  userImg: "/user-img.png",
};

const VacancyPage = () => {
  return (
    <Fragment>
      <section id="hero">
        <HeroSection data={vacancyData} />
      </section>
      <section id="advantage">
        <div className="container-outer advantage-outer">
        <AdvantageSection advantages={vacancyAdvantages} />
        </div>
      </section>
      <section id="work">
        <div className="container-outer work-outer">
        <div className="work-content container">
          <div className="work-content_left">
            <h1>Условия работы</h1>
            <p>
              Мы предостовляем нашим сотрудникам самый лучшые предложения в
              нашем офисе вы можете развить ваши способности
            </p>
            <div className="content-left">
              {checkBoxData?.map((el, i) => (
                <div key={i}>
                  <img src="/checked.svg" alt="check" />
                  <span>{el?.info}</span>
                </div>
              ))}
              <button type="submit">Узнать больше</button>
            </div>
          </div>
          <div className="work-content_right">
            <div className="right-top">
              <div className="top-card">
                <div className="counter-number">
                  <Counter count={userInfo.day} />
                  <span>+</span>
                </div>
                <p>заказов в день</p>
              </div>
              <div className="top-card">
                <Counter count={userInfo.employee} />
                <p>Сотрудников</p>
              </div>
              <div className="top-card">
                <div className="counter-number">
                  <Counter count={userInfo.totalOrder} />
                  <span>+</span>
                </div>
                <p>заказов в 2022 году</p>
              </div>
            </div>
            <img src={userInfo?.userImg} alt="user-img" />
          </div>
        </div>
        </div>
      </section>
      <section id="accordion">
        <div className="container-outer accordion-outer">
        <AccordionSection />
        </div>
      </section>
      <section id="contact">
        <div className="container-outer contact-outer">
        <ContactSection />
        </div>
      </section>
    </Fragment>
  );
};

export default VacancyPage;
