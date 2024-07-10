"use client";

import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay } from "swiper/modules";
const DisVacancySection = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="title">Доступные вакансии</h1>
        <Swiper
          spaceBetween={28}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          slidesPerView={3.3}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default DisVacancySection;
