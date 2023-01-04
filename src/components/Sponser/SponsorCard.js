import "./SponsorCss.css";
import React from "react";

export default function SponsorCard(props) {
  return (
    <a
      // href="http://codepen.io/rickzanutta/pen/yjaeB"
      // target="_blank"
      // rel="noopener"
      className="experiment"
    >
      <div className="experiment-mask"></div>
      <div className="experiment-number-mask">
        <span>{props.number}</span>
      </div>
      <div className="experiment-circle">
        <div
          className="experiment-image"
          style={{ backgroundImage: props.image }}
        ></div>
      </div>
      <div className="experiment-title-area">
        <div className="experiment-title-label">{props.title}</div>
        <div className="experiment-title">{props.info}</div>
      </div>
      <div className="experiment-number-area ">&nbsp;</div>
    </a>
  );
}
