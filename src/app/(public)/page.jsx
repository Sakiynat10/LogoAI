import { Fragment } from "react";
import "./style.scss";
import Slider from "./../../components/truck-slider/index";
import DeliverCards from "./../../components/deliver/index";
import Accordion from "@/components/accordion";
import ServiceCards from "./../../components/service-cards/index";

export const metadata = {
  title: "LOGOAI ,LogoAi , LogoAI ,Транспортная компания нового поколения",
  description:
    "Мгновенный расчет цены на грузоперевозку , Hyundai Mighty ,How much type of truck your company,We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company , (555)555-1234 ,Сервис автоматически расчитает стоимость доставки за минуту и предложит",
};

export default function Home() {
  return (
    <Fragment>
      <section id="hero">
        <div className="hero-content container-1320">
          <div className="hero-infos">
            <h1>Транспортная компания нового поколения</h1>
            <p>Мгновенный расчет цены на грузоперевозку</p>
            <form>
              <input
                className="input"
                type="text"
                placeholder="Введите пункт отправления"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Введите пункт назначения"
                required
              />
              <img className="plug-input" src="/plugin.svg" alt="plugin" />
              <div className="contact-group">
                <button type="submit">Рассчитать</button>
                <div className="contact-number">
                  <p>или звоните:</p>
                  <p>+998 90 000-00-00</p>
                </div>
              </div>
            </form>
          </div>
          <img className="hero-img" src="/hero-truck.png" alt="hero truck" />
        </div>
      </section>
      <section id="service">
        <div className="container">
          <ServiceCards />
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
        <div className="container">
          <h1>Доставим все</h1>
          <DeliverCards />
        </div>
      </section>
      <section id="accordion">
        <div className="container">
          <h1>
            У вас есть вопрос?<span>?</span>
          </h1>
          <Accordion />
        </div>
      </section>
      <section id="contact">
        <div className="contact-content container">
          <div className="contact-infos">
            <h1>Свяжитесь с нами</h1>
            <p>
              We are offering the 5 types of delivery trucks. You can choose the
              truck which suits. How much type of truck your company
            </p>
            <form action="">
              <input type="text" required placeholder="Ваша Имя" />
              <div className="input-group">
                <select name="" id="">
                  <option value="1">+998</option>
                  <option value="2">+718</option>
                  <option value="3">+123</option>
                </select>
                <input type="tel" required placeholder="(99) 999 99 99" />
              </div>
              <button type="submit">Оставить зайавку</button>
            </form>
          </div>
          <img className="contact-card" src="/contact-img.png" />
        </div>
      </section>
      <section id="map">
        <div className="map-content container">
          <div className="contact-num">
            <span>Телефон:</span>
            <h3>(555)555-1234</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23978.982155121208!2d69.24848709482929!3d41.30075356785089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad31dd71f6f%3A0xe85aa2db6d49bad3!2sCity%20Department%20of%20Internal%20Affairs!5e0!3m2!1sen!2s!4v1720392290615!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
      </section>
    </Fragment>
  );
}
