import React from "react"

export default function Die(props) {
    const isHeld  = props;
    const backgroundColor = props.isHeld ? "#59E391" : "white";
    const dots = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
    const dot = dots[props.value - 1];
  
    return (
      <div className="die-face" style={{ backgroundColor }} onClick={props.holdDice}>
        <h2 className="die-num">{dot}</h2>
      </div>
    );
  }