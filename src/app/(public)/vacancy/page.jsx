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
