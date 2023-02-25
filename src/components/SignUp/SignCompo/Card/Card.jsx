import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div className="signCard">{props.children}</div>;
};

export default Card;
