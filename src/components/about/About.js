import "./About.css"
import React from "react"

const About = ({ about_data: { img, about_why, about_us, about_us2 } }) => {
  return (
    <section className="about">
      <h1>
        <span>Tentang </span>Kami
      </h1>
      <div className="container about-container">
        <div className="about-left">
          <img src={img} alt="about.png" />
        </div>
        <div className="about-right">
          <h3>{about_why}</h3>
          <p>{about_us}</p>
          <p>{about_us2}</p>
        </div>
      </div>
    </section>
  )
}

export default About
