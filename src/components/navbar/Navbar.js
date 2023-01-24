import "./Navbar.css"
import React from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = ({ navbar_data: { logo_first, logo_last, navigation } }) => {
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <NavLink onClick={scrollTop}>
            <h1>
              {logo_first}
              <span>{logo_last}</span>
            </h1>
          </NavLink>
        </div>
        <div className="navbar-nav">
          <ul>
            {navigation?.map((val, idx) => (
              <li key={idx}>
                <a href={val?.path}>{val?.nav}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-icons">
          <AiOutlineShoppingCart size="1.5em" />
          <AiOutlineSearch size="1.5em" />
          <div className="navbar-hamburger">
            <GiHamburgerMenu size="1.5em" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
