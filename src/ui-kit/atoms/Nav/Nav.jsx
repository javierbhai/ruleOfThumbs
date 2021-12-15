import React from "react"
//Icons
import searchIcon from "../../../assets/img/search.svg";
import "./Nav.scss"

export const Nav = () =>  (
<nav className="nav" role="navigation">
  <div className="max-centered">
    <h1 className="nav__logo">Rule of thumb.</h1>
    <button className="nav__hamburger icon-button" alt="Open Menu">
      <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" /></svg>
    </button>
    <ul className="nav__links">
      <li>
          <a href="#">Past Trials</a>
      </li>
      <li>
          <a href="#">How It Works</a>
      </li>
      <li>
          <a href="#">Login / Sign Up</a>
      </li>
      <li>
        <form action="javascript:void(0)">
          <input className="nav__search-input" aria-label="search" type="text"/>
          <button className="nav__search icon-button" alt="Search" type="submit">
            <img src={searchIcon} alt="search"/>
          </button>
        </form>
      </li>
    </ul>
  </div>
</nav>
)