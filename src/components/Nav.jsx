import logo from "../assets/logo/Logo.svg";
import menuIcon from "../assets/icons/icon _hamburger menu.svg";
import "./Nav.css";

import { useState } from "react";

export const navLinks = [
  { id: "home", text: "Home", link: "#" },
  { id: "about", text: "About", link: "#" },
  { id: "menu", text: "Menu", link: "#" },
  { id: "reservation", text: "Reservation", link: "#" },
  { id: "order-online", text: "Order Online", link: "#" },
  { id: "login", text: "Login", link: "#" },
];

export default function Nav() {

  

  return (
    <>
      <nav className='desk-nav-bar grid-3-system'>
        <div className='wrapper'>
          <img src={logo} alt='logo' />
          <ul>
            {navLinks.map((item) => {
              return (
                <li id={item.id}>
                  <a href={item.link}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <nav className='mobile-nav-bar grid-3-system'>
        <div className='wrapper'>
          <img src={logo} alt='logo' />
          <i className='ham-icon' onClick={}>
            <img src={menuIcon} alt='menu-icon' />
          </i>
        </div>
      </nav>
    </>
  );
}
