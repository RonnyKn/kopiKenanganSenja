import heroImg from "../assets/kopi1.jpg"
import aboutImg from "../assets/kopi3.jpg"
import espresoImg from "../assets/kopi2.jpg"
import espressoImg from "../assets/espresso.jpg"
import americanoHotImg from "../assets/americanohot.jpg"
import americanoIceImg from "../assets/americanoice.jpg"
import capucinoImg from "../assets/capucino.jpg"
import dripImg from "../assets/drip.jpg"
import brewImg from "../assets/brew.jpg"
import machiatoImg from "../assets/caramel machiatto.jpg"
import latteImg from "../assets/latte.jpg"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"

const menu_data = {
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia tenetur impedit nemo, nisi sed!",
  menus: [
    { img: espressoImg, name: "Espreso", price: "15" },
    { img: americanoHotImg, name: "Americano Hot", price: "18" },
    { img: americanoIceImg, name: "Americano Ice", price: "18" },
    { img: capucinoImg, name: "Cappucino", price: "18" },
    { img: latteImg, name: "Latte", price: "18" },
    { img: espresoImg, name: "Carramell Latte", price: "18" },
    { img: dripImg, name: "Drip Coffee", price: "18" },
    { img: brewImg, name: "Cold Brew", price: "18" },
    { img: machiatoImg, name: "Carramell Machiatto", price: "18" },
    { img: aboutImg, name: "Piccolo", price: "18" },
    { img: machiatoImg, name: "Carramell Machiatto", price: "18" },
    { img: machiatoImg, name: "Carramell Machiatto", price: "18" },
  ],
}

const navbar_data = {
  logo_first: `kenangan`,
  logo_last: "senja.",
  navigation: [
    { nav: "Home", path: "#home" },
    { nav: "Tentang Kami", path: "#about" },
    { nav: "Menu", path: "#menu" },
    { nav: "Kontak", path: "#contact" },
  ],
}
const hero_data = {
  title_first: "Mari Nikmati Secangkir",
  title_last: "Kopi",
  subtitle: "Kopi dari Jogja untuk Dunia",
  img: heroImg,
  btn: "Beli Sekarang",
}
const about_data = {
  img: aboutImg,
  about_why: "Kenapa memilih kopi kami?",
  about_us:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt totam maxime libero explicabo velit sapiente.",
  about_us2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique omnis dolore quod accusamus maxime.",
}

const footer_data = {
  socials: [
    { icon: <BsInstagram />, href: "https://www.instagram.com/" },
    { icon: <BsFacebook />, href: "https://www.facebook.com/" },
    { icon: <FiTwitter />, href: "https://www.twitter.com/" },
  ],
  links: ["Home", "Tentang Kami", "Menu", "Kontak"],
  copyrights: {
    designer: "Sandhika Galih",
    creator: "Ronny Kurniawan",
  },
}
export { navbar_data, hero_data, about_data, menu_data, footer_data }
