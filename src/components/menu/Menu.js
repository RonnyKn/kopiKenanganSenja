import "./Menu.css"
import React from "react"

const Menu = ({ menu_data: { subtitle, menus } }) => {
  return (
    <section className="menu">
      <div className="menu-title container">
        <h1>
          <span>Menu </span>Kami
        </h1>
        <p>{subtitle}</p>
      </div>
      <div className="container menu-container">
        {menus?.map((val, idx) => (
          <div className="menu-content" key={idx}>
            <img src={val?.img} alt={`${val?.name}.png`} />
            <h3>~{val?.name}~</h3>
            <p>IDR {val?.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
