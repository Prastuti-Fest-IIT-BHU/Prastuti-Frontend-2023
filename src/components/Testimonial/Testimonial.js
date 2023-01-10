import "./TestimonialCss.css";
import React from "react";
import MainTestimonial from "./MainTestimonial";
import MobileLayout from "./MobileLayout";

export default function Testimonial() {
  return (
    <div>
      <div class="inner-container">
        <div
          class="section-text-mask"
        >
          <h4 class="h5 section-subtitle"></h4>
        </div>
        <div class="section-text-mask">
          <h2 class="h3 section-title">Testimonial</h2>
        </div>
      </div>
      <div className="MainTestimonial">
        <MainTestimonial />
      </div>
      <div className="showOnMobile">
      <MobileLayout/>
      </div>
    </div>
  );
}