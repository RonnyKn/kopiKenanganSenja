import heroImg from "../assets/kopi1.jpg"
import aboutImg from "../assets/kopi3.jpg"
import espresoImg from "../assets/kopi2.jpg"

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
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet excepturi odio voluptatibus sint deserunt.",
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
const menu_data = {
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia tenetur impedit nemo, nisi sed!",
  menus: [
    { img: espresoImg, name: "espreso", price: "15k" },
    { img: espresoImg, name: "espreso", price: "15k" },
    { img: espresoImg, name: "espreso", price: "15k" },
    { img: espresoImg, name: "espreso", price: "15k" },
    { img: espresoImg, name: "espreso", price: "15k" },
    { img: espresoImg, name: "espreso", price: "15k" },
  ],
}
export { navbar_data, hero_data, about_data, menu_data }
