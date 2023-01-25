import "./Hero.css"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"

const Hero = ({ hero_data: { title_first, title_last, img, btn } }) => {
  const [text] = useTypewriter({
    words: [
      "Kopi senja ini semanis senyumanmu dan sepahit kenangan kita.",
      "Kopi yang baik akan selalu menemukan penikmatnya",
      "Kesempurnaan rasa kopi berasal dari rasa pahit di dalamnya.",
      "Dari candu kopi saja aku bisa lepas, apalagi Cuma kamu yang sekadar masa lalu.",
      "Kamu tau persamaan kamu dengan kopi. Keduanya sama membuat aku jatuh hati",
      "kopi kopi apa yg rasanya susu? yaa kopikir aja sendiri",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 4000,
  })

  return (
    <header className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-left"></div>
        <div className="hero-right">
          <h1>
            {title_first} <span>{title_last}</span>
          </h1>
          <p>
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#fff" />
          </p>
          <a href="#contact">{btn}</a>
        </div>
      </div>
      <div className="hero-img">
        <img src={img} alt="hero.png" />
      </div>
    </header>
  )
}

export default Hero
