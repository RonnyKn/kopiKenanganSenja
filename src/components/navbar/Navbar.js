import "./Navbar.css"
import React from "react"
import { NavLink } from "react-router-dom"
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Navbar = ({ navbar_data: { logo_first, logo_last, navigation } }) => {
  const [navShow, setNavShow] = useState(false)
  const [isActive, setIsActive] = useState("#home")
  const scrollTop = () => {
    window.scroll(0, -100)
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
          <ul className={navShow ? "show" : "hide"}>
            {navigation?.map((val, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setNavShow(false)
                  setIsActive(`${val?.path}`)
                }}
                className={val?.path === isActive ? "navbar_active" : null}
              >
                <a href={val?.path}>{val?.nav}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-icons">
          <AiOutlineSearch
            size="1.5em"
            onClick={() => window.alert("!FITUR DALAM PROSES PENGERJAAN!")}
          />
          <AiOutlineShoppingCart
            size="1.5em"
            onClick={() => window.alert("!FITUR DALAM PROSES PENGERJAAN!")}
          />
          <div className="navbar-hamburger">
            {navShow ? (
              <AiOutlineClose size="1.5em" onClick={() => setNavShow(false)} />
            ) : (
              <GiHamburgerMenu size="1.5em" onClick={() => setNavShow(true)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
