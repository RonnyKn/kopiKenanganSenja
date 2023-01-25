import React from "react"
import "./Footer.css"
const Footer = ({
  footer_data: {
    socials,
    links,
    copyrights: { creator },
  },
}) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-socials">
          {socials?.map((val, idx) => (
            <a href={val?.href} key={idx} target="_blank" rel="noreferrer">
              {val?.icon}
            </a>
          ))}
        </div>
        <ul className="footer-links">
          {links?.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>
        <div className="copyright">
          <h5>{creator}</h5>
          <h5>2023</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer
