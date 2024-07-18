"use client";

import React, { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";


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
      </div>
        <Swiper
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          slidesPerView={3.695}
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
        <Marquee         
        pauseOnHover={true}
        className="marquee">
        <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span className="vacancy-slide-title">Диспетчер</span>
            <span className="vacancy-slide-description">Нам нужен опытный работник болле чем 3 летним стажем </span>
          </SwiperSlide>
        </Marquee>
    </Fragment>
  );
};

export default DisVacancySection;
