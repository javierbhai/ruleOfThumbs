import React from "react"
import "./Rate.scss"
import thumbsUp from "../../../assets/img/thumbs-up.svg";
import thumbsDown from "../../../assets/img/thumbs-down.svg";

export const Rate = ({ isPositive, rate }) =>  {
  const definer = {
    styler: isPositive ? "rate--positive" :"rate--negative",
    upDown: isPositive ? "thumbs up" : "thumbs down",
  }
  let elementWidth = rate
  if (rate < 28){
    elementWidth = 30
  }

  return (
  <li className={`rate ${definer.styler}`} style={{ width: `${elementWidth}%`}}>
    <img className="rate__icon-button" src={isPositive ? thumbsUp : thumbsDown} alt={definer.upDown} />
    <p className="rate__indicator" >{`${rate}%`}</p>
  </li>
)}