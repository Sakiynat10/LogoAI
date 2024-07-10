"use client"
import "./style.scss"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay} from 'swiper/modules';
import { partnerData } from '@/data';

export default function PartnerCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4.5}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
            {partnerData.map((el,i) => (
            <SwiperSlide key={i} className={i%2===0 ?"partner-card odd":"partner-card even"}>
              <div>
                <h2>{el.h1}</h2>
                <img src={el.src} alt={el.h1} />
                <h3>{el.h2}</h3>
                <p>{el.p}</p>
              </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}

