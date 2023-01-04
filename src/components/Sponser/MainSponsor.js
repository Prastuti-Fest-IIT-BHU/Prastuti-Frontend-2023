import "./SponsorCss.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import SponsorCard from "./SponsorCard";

export default function MainSponsor() {
  return (
      <Swiper
        style={{ padding: "30px", paddingLeft: "0px", paddingRight: "0px" }}
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
              <SponsorCard
                number={"01"}
                title={"Main Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"02"}
                title={"koisa Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"03"}
                title={"pta nhi Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"04"}
                title={"koi to Sponsor"}
                info={"GeeksForGEEKS"}
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
              <SponsorCard
                number={"05"}
                title={"Main Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"06"}
                title={"koisa Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"07"}
                title={"pta nhi Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"08"}
                title={"koi to Sponsor"}
                info={"GeeksForGEEKS"}
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
              <SponsorCard
                number={"09"}
                title={"Main Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"10"}
                title={"koisa Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"11"}
                title={"pta nhi Sponsor"}
                info={"GeeksForGEEKS"}
                image={
                  "url(https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123__340.jpg)"
                }
              />
              <SponsorCard
                number={"12"}
                title={"koi to Sponsor"}
                info={"GeeksForGEEKS"}
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
