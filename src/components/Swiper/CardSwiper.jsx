
import React from "react";
import './Swip.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SwipCompo from "./SwipCompo";
import SwipCompoTwo from "./SwiperCompoTwo";
import SwipCom from "./SwipCom";


export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       
         <SwiperSlide><SwipCompo/></SwiperSlide>
         <SwiperSlide><SwipCompoTwo/></SwiperSlide>

         <SwiperSlide><SwipCom/></SwiperSlide>
        
      </Swiper>
     
    </>
  );
}
