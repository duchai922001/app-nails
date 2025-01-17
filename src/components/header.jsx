import React from "react";
import LOGO from "../assets/images/logo.jpg";
import "../styles/header.css";
const dataMenu = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "About",
    url: "/about",
  },

  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={LOGO} className="image-logo" />
        <span className="shop-name">Nails Studio</span>
      </div>
      <div className="header-navigate">
        <ul className="menu-parent">
          {dataMenu.map((item, index) => {
            return (
              <li className="menu-child" key={index}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-auth">
        <button className="btn-auth">Login now</button>
      </div>
    </div>
  );
};

export default Header;
