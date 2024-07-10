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
        <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={7}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
            <SwiperSlide>
                <img src="/employee-1.png"/>
                <h3>Aziza Tolajanova</h3>
                <p>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-2.png"/>
                <h3>Nargiza Yusupova</h3>
                <p>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-3.png"/>
                <h3>Jack Klimma</h3>
                <p>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-4.png"/>
                <h3>Ivan Klatiev</h3>
                <p>+20 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-5.png"/>
                <h3>Shohida Mansurova</h3>
                <p>+3 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-1.png"/>
                <h3>Aziza Tolajanova</h3>
                <p>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-2.png"/>
                <h3>Nargiza Yusupova</h3>
                <p>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-3.png"/>
                <h3>Jack Klimma</h3>
                <p>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-4.png"/>
                <h3>Ivan Klatiev</h3>
                <p>+20 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-5.png"/>
                <h3>Shohida Mansurova</h3>
                <p>+3 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-1.png"/>
                <h3>Aziza Tolajanova</h3>
                <p>+23 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/employee-2.png"/>
                <h3>Nargiza Yusupova</h3>
                <p>+12 years experience</p>
                <div className="overlay"></div>
            </SwiperSlide>
      </Swiper>
      </div>
    </Fragment>
  )
}

export default EmployeeSection