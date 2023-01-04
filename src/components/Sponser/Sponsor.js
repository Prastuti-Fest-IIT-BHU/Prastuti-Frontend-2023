import "./SponsorCss.css";
import React from "react";
import MainSponsor from "./MainSponsor";
import MobileLayout from "./MobileLayout";

export default function Sponsor() {
  return (
    <>
      <div class="inner-container" style={{ margin: "40px" }}>
        <div
          class="section-text-mask"
          style={{
            padding: "30px",
          }}
        >
          <h4 class="h5 section-subtitle"></h4>
        </div>
        <div class="section-text-mask">
          <h2 class="h3 section-title">SPONSOR</h2>
        </div>
      </div>
      <div className="mainSponsor">
        <MainSponsor />
      </div>
      <div className="showOnMobile">
      <MobileLayout/>
      </div>
    </>
  );
}