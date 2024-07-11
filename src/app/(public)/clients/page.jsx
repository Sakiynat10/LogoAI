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
      <section id="analysis">
        <div className="container-outer analysis-outer">
          <div className="container">
            <div className="analysis-content">
              <div className="analysis-left">
                <h1>Analytics that feels like it’s from the future</h1>
                <p>
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </p>
                <div className="left-cards">
                  <div className="card">
                    <div className="counter-number">
                      <Counter count={4000} />
                      <span>+</span>
                    </div>
                    <h4>Global customers</h4>
                    <p>We’ve helped over 4,000 amazing global companies.</p>
                  </div>
                  <div className="card">
                  <div className="counter-number">
                      <Counter count={4000} />
                      <span>+</span>
                    </div>
                    <h4>Global customers</h4>
                    <p>We’ve helped over 4,000 amazing global companies.</p>
                  </div>
                  <div className="card">
                  <div className="counter-number">
                      <Counter count={4000} />
                      <span>+</span>
                    </div>
                    <h4>Global customers</h4>
                    <p>We’ve helped over 4,000 amazing global companies.</p>
                  </div>
                  <div className="card">
                  <div className="counter-number">
                      <Counter count={4000} />
                      <span>+</span>
                    </div>
                    <h4>Global customers</h4>
                    <p>We’ve helped over 4,000 amazing global companies.</p>
                  </div>
                </div>
              </div>
              <img
                className="analysis-right"
                src="/hero-truck.png"
                alt="truck"
              />
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
