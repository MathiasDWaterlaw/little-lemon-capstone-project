import footerLogo from "../assets/logo/footer_logo.png";
import "./Footer.css";

import { navLinks } from "./Nav";

const contactLinks = {
  contact: [
    { id: "address", text: "Address", link: "#" },
    { id: "phone", text: "Phone", link: "#" },
    { id: "email", text: "Email", link: "#" },
  ],
  social: [
    { id: "facebook", text: "Facebook", link: "#" },
    { id: "instagram", text: "Instagram", link: "#" },
    { id: "tiktok", text: "TikTok", link: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className='grid-3-system'>
      <div className='wrapper'>
        <img src={footerLogo} />

        <ul id='doormat-navigation'>
          {navLinks.map((item) => {
            return (
              <li id={item.id}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>

        <ul id='contact'>
          {contactLinks.contact.map((item) => {
            return (
              <li id={item.id}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>

        <ul id='social-media'>
          {contactLinks.social.map((item) => {
            return (
              <li id={item.id}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
