import React from 'react';
import './Card.css';
function Card(props) {
  return (
    <div className="team-card">
      <div>
        <div className="cardImg">
          <img src={props.img} alt=""/>
        </div>
      <h4 className="pos">{props.position}</h4><br/>
      </div>
    </div>
  );
}
export default Card;
