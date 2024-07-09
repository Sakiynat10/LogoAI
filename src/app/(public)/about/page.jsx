import React, { Fragment } from "react";
import HeroSection from "./../../../components/hero-section/index";
import OrderCard from "@/components/order-card";
import "./style.scss";
import AdvantageSection from "@/components/advantage-section";
import { aboutData, order, partnerData } from "@/data";
import PartnerCarousel from './../../../components/partner-carousel/index';
import ContactSection from "@/components/contact";
import AccordionSection from "@/components/accordion";

const advantages = [
  {
    src:"/advantages-1.svg",
    h1:"Гарантия пробега" ,
    p:"Мы готовы обеспечить постоянными заказами даже самый большой автопарк. Ежемесячная нагрузка на грузовик",
  },
  {
    src:"/advanteges-2.svg",
    h1:"Фиксированные тарифы" ,
    p:"Мы предоставляем вам загрузки по всей Украине с фиксированной оплатой за километраж.",
  },
  {
    src:"/advantages-3.svg",
    h1:"Единый договор" ,
    p:"Всего один договор с Cargofy дает вам доступ к самым крупным контрактам от компаний. Весь последующий",
  },
]

const AboutPage = () => {
  return (
    <Fragment>
      <section id="hero">
        <HeroSection data={aboutData} />
      </section>
      <section id="order">
        <div className="order-cards container">
          {order?.map((el, index) => (
            <OrderCard {...el} key={index} />
          ))}
        </div>
      </section>
      <section id="advantage">
        <AdvantageSection advantages={advantages} />
      </section>
      <section id="partner">
        <div className="container">
          <h1>Бонусы от партнеров</h1>
          <p>
            Мы готовы обеспечить постоянными заказами даже самый большой
            автопарк. Ежемесячная нагрузка на грузовик
          </p>
        </div>
        <PartnerCarousel/>
      </section>
      <section id="accordion">
        <AccordionSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
    </Fragment>
  );
};

export default AboutPage;