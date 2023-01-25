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
import velvetImg from "../assets/velvet.jpg"
import mocacinoImg from "../assets/mocacino.jpg"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"

const menu_data = {
  subtitle: "Buat senja kamu lebih menarik dengan pilihan menu kopi kami",
  menus: [
    { img: mocacinoImg, name: "Mocacino", price: "18" },
    { img: espressoImg, name: "Espreso", price: "15" },
    { img: americanoHotImg, name: "Americano", price: "18" },
    { img: velvetImg, name: "Red Velvet", price: "18" },
    { img: americanoIceImg, name: "Americano Ice", price: "18" },
    { img: capucinoImg, name: "Cappucino", price: "18" },
    { img: latteImg, name: "Latte", price: "18" },
    { img: espresoImg, name: "Carramell Latte", price: "18" },
    { img: dripImg, name: "Drip Coffee", price: "18" },
    { img: brewImg, name: "Cold Brew", price: "18" },
    { img: machiatoImg, name: "Machiatto", price: "18" },
    { img: aboutImg, name: "Piccolo", price: "18" },
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
  img: heroImg,
  btn: "Beli Sekarang",
}
const about_data = {
  img: aboutImg,
  about_why: "Kenapa memilih kopi kami?",
  about_us:
    "Bukan hanya memiliki rasa yang khas dan harga yang terjangkau, kopi kami juga memiliki nama yang catchy, dan sederet menu yang akan memanjakan lidah kamu para pecinta kopi",
  about_us2:
    "Kata kenangan mengandung makna yang mendalam sedangkan senja adalah waktu yang pas untuk menikmati kopi yang satu ini.",
}

const footer_data = {
  socials: [
    { icon: <BsInstagram />, href: "https://www.instagram.com/" },
    { icon: <BsFacebook />, href: "https://www.facebook.com/" },
    { icon: <FiTwitter />, href: "https://www.twitter.com/" },
  ],
  links: [
    { nav: "Home", path: "#home" },
    { nav: "Tentang Kami", path: "#about" },
    { nav: "Menu", path: "#menu" },
    { nav: "Kontak", path: "#contact" },
  ],
  copyrights: {
    creator: "Ronny Kurniawan",
  },
}
export { navbar_data, hero_data, about_data, menu_data, footer_data }
