import React from "react"
import { EyebrowText, Button, ButtonUpDown } from "../../atoms";

import "./Card__ButtonCont.scss"
//Icons
import thumbsUp from "../../../assets/img/thumbs-up.svg";
import thumbsDown from "../../../assets/img/thumbs-down.svg";

export const Card__ButtonCont = ({ days, category, voteAction, id }) =>  {
  
  return(
    <div className="Card__ButtonCont" >
      <EyebrowText>{days} days ago in {category}</EyebrowText>
      <div className="Card__ButtonCont__Buttons">
        <ButtonUpDown className="card__icon-button" ariaLabel="thumbs up">
            <img src={thumbsUp} alt="thumbs up" />
        </ButtonUpDown>
        <ButtonUpDown className="card__icon-button" ariaLabel="thumbs down">
            <img src={thumbsDown} alt="thumbs down" />
        </ButtonUpDown>
        <Button className="card__vote" voteAction={() => voteAction(id)} >Vote Now</Button>
      </div>
    </div>
)}