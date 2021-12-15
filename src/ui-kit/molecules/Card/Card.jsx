import React from "react"
import "./Card.scss"

export const Card = ({ children }) =>  {
    return(
        <article className="card">{children}</article>
        // <article className="card">{children}</article>
    )
}