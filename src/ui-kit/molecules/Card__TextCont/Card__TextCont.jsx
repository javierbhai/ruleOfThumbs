import React from "react"
import "./Card__TextCont.scss"
import { Text, CardTitle } from "../../atoms";

export const Card__TextCont = ({ name, description }) => (
  <div className="Card__TextCont" >
    <CardTitle>{name}</CardTitle>
    <Text className="text">{description}</Text>
  </div>
)