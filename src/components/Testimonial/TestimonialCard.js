import "./TestimonialCss.css";
import React from "react";

export default function TestimonialCard(props) {
  return (
    <div className="card">
      <a
        // href="http://codepen.io/rickzanutta/pen/yjaeB"
        // target="_blank"
        // rel="noopener"
        className="experiment"
      >
        <div className="experiment-mask"></div>
        <div className="experiment-circle">
          <div
            className="experiment-image"
            style={{ backgroundImage: props.image }}
          ></div>
        </div>
        {/* <div className="experiment-number-mask" style={{position: props.position, left: props.left, fontSize: props.size}}>
          <span>{props.number}</span>
        </div> */}
        <div className="experiment-title-area">
          <div className="experiment-title-label">{props.info}</div>
          <div className="experiment-title">{props.title}
          
        <div className="experiment-number-area ">&nbsp;</div>
          </div>
        </div>
      </a>
    </div>
  );
}
