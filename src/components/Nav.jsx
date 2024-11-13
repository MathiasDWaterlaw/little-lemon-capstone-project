import logo from "../assets/logo/Logo.svg";
import menuIcon from "../assets/icons/icon _hamburger menu.svg";
import "./Nav.css";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const navLinks = [
  { id: "home", text: "Home", link: "/" },
  { id: "about", text: "About", link: "/about" },
  { id: "menu", text: "Menu", link: "/menu" },
  { id: "reservation", text: "Reservation", link: "/reservation" },
  { id: "order-online", text: "Order Online", link: "/order-online" },
  { id: "login", text: "Login", link: "/login" },
];

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    let scrollPosition = window.scrollY;
    const handleScroll = () => {
      const navigation = navigationRef.current;
      const currentScrollPosition = window.scrollY;

      if (!navigation) {
        return;
      }

      if (scrollPosition > currentScrollPosition) {
        navigation.style.transform = "translateY(0)";
      } else {
        setMobileNav(false);
        navigation.style.transform = "translateY(-200px)";
      }

      scrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {windowWidth >= 768 ? (
        <nav className='desk-nav-bar grid-3-system' ref={navigationRef}>
          <div className='wrapper'>
            <img src={logo} alt='logo' />
            <ul>
              {navLinks.map((item) => {
                return (
                  <li id={item.id}>
                    <Link to={item.link} className='link-item'>
                      <p>{item.text}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      ) : (
        <div className='sticky-container' ref={navigationRef}>
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
                      <Link
                        className='wrapper link-item'
                        to={item.link}
                        onClick={() => {
                          setMobileNav(!mobileNav);
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
