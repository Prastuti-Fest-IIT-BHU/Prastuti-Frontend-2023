import "./SponsorCss.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard} from 'swiper';

export default function Sponsor() {
  return (
    <>
      <div class="inner-container" style={{margin: '40px'}}>
        <div class="section-text-mask" style={{
          padding: "30px"
        }}>
          <h4 class="h5 section-subtitle"></h4>
        </div>
        <div class="section-text-mask">
          <h2 class="h3 section-title">SPONSOR</h2>
        </div>
      </div>
      <Swiper
      style={{padding: '30px'}}
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
            padding: "20px",
          }}
        >
          <div className="inner-container">
            <div className="inner-container">
              <a
                // href="http://codepen.io/rickzanutta/pen/yjaeB"
                // target="_blank"
                // rel="noopener"
                className="experiment"
              >
                <div className="experiment-mask"></div>
                <div className="experiment-number-mask">
                  <span>01</span>
                </div>
                <div className="experiment-circle">
                  <div className="experiment-image"></div>
                </div>
                <div className="experiment-title-area">
                  <div className="experiment-title-label">Title</div>
                  <div className="experiment-title">
                    CSS3 spin preloader + preload Page
                  </div>
                </div>
                <div className="experiment-number-area ">&nbsp;</div>
              </a>
              <a
                // href="http://codepen.io/rickzanutta/pen/yjaeB"
                // target="_blank"
                // rel="noopener"
                className="experiment"
              >
                <div className="experiment-mask"></div>
                <div className="experiment-number-mask">
                  <span>02</span>
                </div>
                <div className="experiment-circle">
                  <div className="experiment-image"></div>
                </div>
                <div className="experiment-title-area">
                  <div className="experiment-title-label">Title</div>
                  <div className="experiment-title">
                    CSS3 spin preloader + preload Page
                  </div>
                </div>
                <div className="experiment-number-area">&nbsp;</div>
              </a>
              <a
                // href="http://codepen.io/rickzanutta/pen/yjaeB"
                // target="_blank"
                // rel="noopener"
                className="experiment"
              >
                <div className="experiment-mask"></div>
                <div className="experiment-number-mask">
                  <span>03</span>
                </div>
                <div className="experiment-circle">
                  <div className="experiment-image"></div>
                </div>
                <div className="experiment-title-area">
                  <div className="experiment-title-label">Title</div>
                  <div className="experiment-title">
                    CSS3 spin preloader + preload Page
                  </div>
                </div>
                <div className="experiment-number-area">&nbsp;</div>
              </a>
              <a
                // href="http://codepen.io/rickzanutta/pen/yjaeB"
                // target="_blank"
                // rel="noopener"
                className="experiment"
              >
                <div className="experiment-mask"></div>
                <div className="experiment-number-mask">
                  <span>04</span>
                </div>
                <div className="experiment-circle">
                  <div className="experiment-image"></div>
                </div>
                <div className="experiment-title-area">
                  <div className="experiment-title-label">Title</div>
                  <div className="experiment-title">
                    CSS3 spin preloader + preload Page
                  </div>
                </div>
                <div className="experiment-number-area">&nbsp;</div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            padding: "20px",
          }}
        >
          <div className="inner-container">
            <div className="inner-container">
              <a
                // href="http://codepen.io/rickzanutta/pen/yjaeB"
                // target="_blank"
                // rel="noopener"
                className="experiment"
              >
                <div className="experiment-mask"></div>
                <div className="experiment-number-mask">
                  <span>05</span>
                </div>
                <div className="experiment-circle">
                  <div className="experiment-image2"></div>
                </div>
                <div className="experiment-title-area">
                  <div className="experiment-title-label">Title2</div>
                  <div className="experiment-title">
                    CSS3 spin preloader + preload Page
                  </div>
                </div>
                <div className="experiment-number-area2">&nbsp;</div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide> */}
      </Swiper>
    </>
  );
}
