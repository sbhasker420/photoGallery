import React from "react";
import "tachyons";
import "./card.css";

const Card = (props, { isVisible }) => {
  return (
    <div className="card grow bg-light-green tc dib br1 pa1 ma1">
      <div className="cardImage">
        {!isVisible ? (
          <img src={props.url} alt="" />
        ) : (
          <img src={props.thumbnailUrl} alt="" className="br-100 mt2" />
        )}
      </div>
      <div className="cardDetails">
        <p>{props.id}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default Card;
