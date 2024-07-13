"use client"

import React, { Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.scss"


// import required modules
import { Autoplay} from 'swiper/modules';
const EmployeeSection = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className='title'>Наши сотрудники</h1>
      </div>
        <Swiper
        spaceBetween={6}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={6.24}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
            <SwiperSlide className="employee-slider">
                <img src="/employee-1.png"/>
                <h3 className="slider-title" >Aziza Tolajanova</h3>
                <p className='slider-subtitle'>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-2.png"/>
                <h3 className="slider-title" >Nargiza Yusupova</h3>
                <p className='slider-subtitle'>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-3.png"/>
                <h3 className="slider-title" >Jack Klimma</h3>
                <p className='slider-subtitle'>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-4.png"/>
                <h3 className="slider-title" >Ivan Klatiev</h3>
                <p className='slider-subtitle'>+20 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-5.png"/>
                <h3 className="slider-title" >Shohida Mansurova</h3>
                <p className='slider-subtitle'>+3 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-1.png"/>
                <h3 className="slider-title" >Aziza Tolajanova</h3>
                <p className='slider-subtitle'>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-2.png"/>
                <h3 className="slider-title" >Nargiza Yusupova</h3>
                <p className='slider-subtitle'>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-3.png"/>
                <h3 className="slider-title" >Jack Klimma</h3>
                <p className='slider-subtitle'>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-4.png"/>
                <h3 className="slider-title" >Ivan Klatiev</h3>
                <p className='slider-subtitle'>+20 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-5.png"/>
                <h3 className="slider-title" >Shohida Mansurova</h3>
                <p className='slider-subtitle'>+3 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-1.png"/>
                <h3 className="slider-title" >Aziza Tolajanova</h3>
                <p className='slider-subtitle'>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide className="employee-slider">
                <img src="/employee-2.png"/>
                <h3 className="slider-title" >Nargiza Yusupova</h3>
                <p className='slider-subtitle'>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
      </Swiper>
    </Fragment>
  )
}

export default EmployeeSection