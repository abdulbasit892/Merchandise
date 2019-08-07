import React from "react";
import CARD from "./cardDescription";

const CARDS = props => {
  console.log(props);
  return (
    <div className="listing-card">
      {props.data.map((prop, index) => {
        return <CARD onClick={props.onClick} key={index} index={index} />;
      })}
    </div>
  );
};
export default CARDS;
