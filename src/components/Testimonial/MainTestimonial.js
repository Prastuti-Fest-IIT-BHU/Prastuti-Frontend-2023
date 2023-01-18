import "./TestimonialCss.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import TestimonialCard from "./TestimonialCard";

export default function MainTestimonial() {
  return (
    <Swiper
      style={{ padding: "30px", paddingLeft: "60px", paddingRight: "60px" }}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      slidesPerView={3}
      spaceBetween={20}
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
              info={`Content`}
              title={"GeeksForGEEKS"}
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
              info={`Main Testimonial`}
              title={"GeeksForGEEKS"}
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
              info={`Main Testimonial`}
              title={"GeeksForGEEKS"}
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
              info={`Main Testimonial`}
              title={"GeeksForGEEKS"}
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
              info={`Main Testimonial`}
              title={"GeeksForGEEKS"}
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
