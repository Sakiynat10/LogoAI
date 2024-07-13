import React, { Fragment } from "react";
import { clientsData } from "@/data";
import AdvantageSection from "@/components/advantage-section";
import HeroSection from "@/components/hero-section";

import "./style.scss";
import EmployeeSection from "@/components/employee-section";
import DisVacancySection from "@/components/dis-vacancy";
import AccordionSection from "@/components/accordion";
import ContactSection from "@/components/contact";
import Counter from "@/components/counter";

export const metadata = {
  title: "LogoAI: Вакансия для диспечеров | Грузооотправителям | Перевозчикам | Диспетчерам",
  description:
    "Зарабатывайте от 80000 ₴ в месяц. Стабильная работа с оплатой за километраж",
};


const clientsAdvantages = [
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказам",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксиро",
  },
  {
    src: "/advantages-3.svg",
    h1: "Единый договор",
    p: "Всего один договор с Cargofy дает вам доступ к самым кру",
  },
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказам",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксиро",
  },
  {
    src: "/advantages-1.svg",
    h1: "Гарантия пробега",
    p: "Мы готовы обеспечить постоянными заказам",
  },
  {
    src: "/advanteges-2.svg",
    h1: "Фиксированные тарифы",
    p: "Мы предоставляем вам загрузки по всей Украине с фиксиро",
  },
  {
    src: "/advantages-3.svg",
    h1: "Единый договор",
    p: "Всего один договор с Cargofy дает вам доступ к самым кру",
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

const ClientPage = () => {
  return (
    <Fragment>
      <section id="hero">
        <HeroSection data={clientsData} />
      </section>
      <section id="advantage">
        <div className="container-outer advantage-outer">
          <AdvantageSection advantages={clientsAdvantages} />
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
              <div className="counter-number">
                  <Counter count={userInfo.employee} />
                </div>
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
      <section id="employee">
        <div className="container-outer employee-outer">
          <EmployeeSection />
        </div>
      </section>
      <section id="vacancy">
        <div className="container-outer vacancy-outer">
          <DisVacancySection />
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

export default ClientPage;
