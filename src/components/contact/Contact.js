import "./Contact.css"
import React, { useRef } from "react"
import { IoPersonOutline } from "react-icons/io5"
import { MdAlternateEmail, MdOutlineMail } from "react-icons/md"
import { FiSend } from "react-icons/fi"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    window.alert(
      "Thankyou, your message has been sent successfully. \nHave a great day ❤."
    )

    emailjs
      .sendForm(
        "service_2y24t5g",
        "template_2gpy8ly",
        form.current,
        "8sH3i4bVXXbpdpkfh"
      )
      .then(
        (result) => {
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-title container">
        <h1>
          <span>Kontak </span>Kami
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          sed!
        </p>
      </div>
      <div className="container contact-container">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253002.71947938405!2d110.24607904138676!3d-7.772057146161363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a451db6303eb3%3A0x9b89d6aa0c730b34!2sKopi%20Kenangan%20-%20Ruko%20Pemuda%20Klaten!5e0!3m2!1sid!2sid!4v1674616915941!5m2!1sid!2sid"
            title="map"
            className="map"
            style={{ objectFit: "cover", width: "100%" }}
            // width="600"
            height="400"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <IoPersonOutline />
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="nama.."
                required
              />
            </div>
            <div className="input-group">
              <MdAlternateEmail />
              <input
                type="email"
                name="user_email"
                placeholder="email.."
                required
              />
            </div>
            <div className="input-group">
              <MdOutlineMail />
              <textarea
                name="message"
                id="message"
                cols="30"
                placeholder="masukan pesan.."
                required
              ></textarea>
            </div>
            <button type="submit">
              Kirim <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
