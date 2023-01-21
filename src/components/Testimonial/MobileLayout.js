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
              info={`Prastuti provides students with the platform and the push to meet the most contemporary demands- renewable energy and computer interface within electronics and electrical engineering.
              Through comprehensive knowledge and an innovative approach to design and contemporary technologies, we aim to make a novel contribution in these areas.`}
              title={"Head of Department EEE, Dr. R.K. Pandey"}
              image={
                "url(./TestimonialImages/rkpandey.jpg)"
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
              info={`With Prastuti an effort will be made to provide a platform to the students, innovative industeries, startups
              and interface sectors to showcase the development and demeonstration of the respective products.`}
              title={"Mentor Professor, Dr. Soumya R Mohanty"}
              image={
                "url(./TestimonialImages/srm.png)"
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
              info={`Prastuti provided me with the platform and opportunity to grow and learn about technology and web development in particular.`}
              title={"Prastuti'22 Participant, Himanshu Kaithal"}
              image={
                "url(./TestimonialImages/himanshu.jpg)"
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
              info={`Attending the fest was an unforgettable experience. Not only did I have the opportunity to witness some of the most innovative and cutting-edge technology, but I also had the chance to network with like-minded individuals. The variety of events and competitions offered something for everyone, whether you were interested in programming, development, or even electronics.`}
              title={"Prastuti'22 Organizer, Atul Kumar"}
              image={
                "url(./TestimonialImages/atul.jpg)"
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
              info={`The Prastuti Technical fest is a fantastic opportunity to learn, grow, and be inspired. I highly recommend it to anyone interested in technology and innovation.`}
              title={"Prastuti'23 Senior Advisor, Shreyash Singh"}
              image={
                "url(./TestimonialImages/shreyash.jpg)"
              }
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
