import "./Hero.css"
import React from "react"

const Hero = ({
  hero_data: { title_first, title_last, subtitle, img, btn },
}) => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-left"></div>
        <div className="hero-right">
          <h1>
            {title_first} <span>{title_last}</span>
          </h1>
          <p>{subtitle}</p>
          <button>{btn}</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={img} alt="hero.png" />
      </div>
    </header>
  )
}

export default Hero
