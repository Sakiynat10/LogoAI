import React from "react";

const ServiceCards = () => {
  return (
    <div className="service-content">
      <div className="service-card">
        <h2>Создайте заказ</h2>
        <p>
          Сервис автоматически расчитает стоимость доставки за минуту и
          предложит услуги более 12 500 надежных перевозчиков
        </p>
        <img src="/service-1.png" alt="service" />
      </div>
      <div className="service-card">
        <h2>Отслеживайте доставку</h2>
        <p>
          Сервис автоматически расчитает стоимость доставки за минуту и
          предложит
        </p>
        <img src="/service-2.png" alt="service" />
      </div>
      <div className="service-card">
        <h2>СПолучаете свой груз</h2>
        <p>Сервис автоматически расчитает стоимость доста</p>
        <img src="/service-3.png" alt="service" />
      </div>
    </div>
  );
};

export default ServiceCards;
