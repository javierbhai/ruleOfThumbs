import React from "react"
import "./Button.scss"

export const Button = ({ children, className, ariaLabel }) =>  <button className={className} aria-label={ariaLabel} type="button">{children}</button>