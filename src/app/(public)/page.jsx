"use client";

import { Fragment } from "react";
import "./style.scss";
import Slider from "./../../components/truck-slider/index";
import DeliverCards from "./../../components/deliver/index";
import ServiceCards from "./../../components/service-cards/index";
import ContactSection from "./../../components/contact/index";
import HeroSection from "./../../components/hero-section/index";
import AccordionSection from "@/components/accordion";
import { data } from "@/data";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

// export const metadata = {
//   title: "LogoAI ,Транспортная компания нового поколения",
//   description:
//     "Мгновенный расчет цены на грузоперевозку , Hyundai Mighty ,How much type of truck your company,We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company , (555)555-1234 ,Сервис автоматически расчитает стоимость доставки за минуту и предложит",
// };

export default function Home() {
  return (
    <Fragment>
      <section id="hero">
        <HeroSection data={data} />
      </section>
      <section id="service">
        <div className="container-outer service-outer">
          <div className="container">
            <ServiceCards />
          </div>
        </div>
      </section>
      <section id="range">
        <div className="container">
          <h2>Тип автомобиля</h2>
          <div className="range-content">
            <div className="range-left">
              <h1>Hyundai Mighty </h1>
              <p>или похожая</p>
              <div className="range-infos">
                <div className="info-card">
                  <span>Ширина:</span>
                  <p>3.2 м</p>
                </div>
                <div className="info-card">
                  <span>Длина:</span>
                  <p>6.2 м</p>
                </div>
                <div className="info-card">
                  <span>Длина:</span>
                  <p>6.2 м</p>
                </div>
                <div className="info-card">
                  <span>Высота:</span>
                  <p>6.2 м</p>
                </div>
                <div className="info-card">
                  <span>Объем:</span>
                  <p>6.2 м</p>
                </div>
              </div>
              <span>
                Найдите надежного перевозчика для доставки Steel and concrete
                products по Украине
              </span>
              <a href="#">Заказать Hyundai Mighty</a>
            </div>
            <Slider />
          </div>
        </div>
      </section>
      <section id="deliver">
        <div className="container-outer deliver-outer">
        <div className="container">
          <h1>Доставим все</h1>
          <DeliverCards />
        </div>
        </div>
      </section>
      <section id="accordion">
        <div className="container-outer accordion-outer">
          <AccordionSection />
        </div>
      </section>
      <section id="contact">
        <div className="container-outer contact-home-outer">
        <ContactSection />
        </div>
      </section>
      <section id="map">
        <div className="container-outer map-outer">
        <div className="map-content container">
          <div className="contact-num">
            <span className="border-1"></span>
            <span className="border-2"></span>
            <span className="border-3"></span>
            <span className="border-4"></span>
            <span>Телефон:</span>
            <h3>(555)555-1234</h3>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3863.4381059848765!2d69.2464931176056!3d41.300955585834956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b52c531597d%3A0xf8f015bc603ebb7f!2sBabura%20Most!5e0!3m2!1sen!2sus!4v1720589647656!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <YMaps>
            <Map
              width="100%"
              defaultState={{ center: [41.303532, 69.248622], zoom: 9 }}
              className="iframe"
            >
              <Placemark
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/placemark.svg",
                  iconImageSize: [120, 120],
                  iconColor:"red",
                }}
                geometry={[41.303532, 69.248622]}
                iconImageOffset={[-0, -0]}
                // Offset of the layer with content relative to the layer with the image.
                iconContentOffset={[0, 0]}
                className="map-img animated-image"
              />
            </Map>
          </YMaps>
          <div className="media-group">
            <a href="#link">
              <img src="/media-1.svg" alt="media" />
            </a>
            <a href="#link">
              <img src="/media-2.svg" alt="media" />
            </a>
            <a href="#link">
              <img src="/media-3.svg" alt="media" />
            </a>
            <a href="#link">
              <img src="/media-4.svg" alt="media" />
            </a>
          </div>
        </div>
        </div>
      </section>
    </Fragment>
  );
}
