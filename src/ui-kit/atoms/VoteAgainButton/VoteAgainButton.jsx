import React from "react"
import "./VoteAgainButton.scss"

export const VoteAgainButton = ({ children, voteAgainAction, id }) =>  <button className="card__vote" onClick={() => voteAgainAction(id)} type="button">{children}</button>