import "./App.css"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Menu from "./components/menu/Menu"
import Navbar from "./components/navbar/Navbar"
import { navbar_data, hero_data, about_data } from "./assets/Data"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar navbar_data={navbar_data} />
      <Hero hero_data={hero_data} />
      <About about_data={about_data} />
      <Menu />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
