import "./TestimonialCss.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import TestimonialCard from "./TestimonialCard";

export default function MobileLayout() {
  return (
    <Swiper
      style={{ padding: "30px", paddingLeft: "60px", paddingRight: "60px" }}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      slidesPerView={1}
      spaceBetween={0}
      navigation={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          padding: "10px",
        }}
      >
        <div className="inner-container">
          <div className="inner-container">
            <TestimonialCard
              number={"01"}
              title={"Title"}
              info={
                "Content"
              }
              image={
                "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
              }
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          padding: "10px",
        }}
      >
        <div className="inner-container">
          <div className="inner-container">
            <TestimonialCard
              number={"05"}
              title={"Title"}
              info={"Content"}
              image={
                "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
              }
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          padding: "10px",
        }}
      >
        <div className="inner-container">
          <div className="inner-container">
            <TestimonialCard
              number={"09"}
              title={"Title"}
              info={"Content"}
              image={
                "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
              }
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          padding: "10px",
        }}
      >
        <div className="inner-container">
          <div className="inner-container">
            <TestimonialCard
              number={"09"}
              title={"Title"}
              info={"Content"}
              image={
                "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
              }
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
