import React from "react";
import { Rate } from "../../atoms";
import "./RateComp.scss";

export const RateComp = ({ totalVotes }) => {
  const { positivePercentage, negativePercentage } = totalVotes

  return (
    <ul className="rateComp" >
      <Rate isPositive={true} rate={positivePercentage} />
      <Rate isPositive={false} rate={negativePercentage} />
    </ul>
)};