import React from "react"
import "./Button.scss"

export const Button = ({ children, className, ariaLabel, voteAction }) =>  <button className={className} onClick={() => voteAction()} aria-label={ariaLabel} type="button">{children}</button>