import logo from "../assets/logo/Logo.svg";
import menuIcon from "../assets/icons/icon _hamburger menu.svg";
import "./Nav.css";

import { useEffect, useState } from "react";

export const navLinks = [
  { id: "home", text: "Home", link: "#" },
  { id: "about", text: "About", link: "#" },
  { id: "menu", text: "Menu", link: "#" },
  { id: "reservation", text: "Reservation", link: "#" },
  { id: "order-online", text: "Order Online", link: "#" },
  { id: "login", text: "Login", link: "#" },
];

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {windowWidth >= 768 ? (
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
      ) : (
        <>
          <nav className='mobile-nav-bar grid-3-system'>
            <div className='wrapper'>
              <img src={logo} alt='logo' />
              <i
                className='ham-icon'
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
              >
                <img src={menuIcon} alt='menu-icon' />
              </i>
            </div>
          </nav>

          {mobileNav && (
            <div className='open-nav'>
              <ul>
                {navLinks.map((item) => {
                  return (
                    <li id={item.id} className='grid-3-system'>
                      <a className='wrapper' href={item.link}>
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}
