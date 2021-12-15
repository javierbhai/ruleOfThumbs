import React from "react"
import "./ButtonUpDown.scss"

export const ButtonUpDown = ({ children, className, ariaLabel, voteAction }) =>  <button className={className} onClick={() => voteAction()} aria-label={ariaLabel} type="button">{children}</button>