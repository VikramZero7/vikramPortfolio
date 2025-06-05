import { HashLink } from "react-router-hash-link";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { MdNightsStay } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";

import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./NavbarFixed.css";
import { menuList } from "../../../assets/assets";

const NavbarFixed = () => {
  const { activeMenu, handleMenu, isDark, toggleTheme } =
    useContext(ThemeContext);

  const scrollToWithOffset = (el) => {
    const yOffset = -80; // Adjust for navbar height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const lightActiveMenu = (item) => {
    return activeMenu === item ? "light-mode-active" : "light-navbar-menu-list";
  };
  const darkActiveMenu = (item) => {
    return activeMenu === item ? "dark-mode-active" : "dark-navbar-menu-list";
  };

  console.log(menuList);
  return (
    <motion.div
      className={`navbar-fixed ${isDark ? "navbar-fixed-dark" : "navbar-fixed-light"}`}
    >
      <img
        src={
          isDark
            ? "https://res.cloudinary.com/dpykift6z/image/upload/v1742360356/xshmmvyhncr3xngqofsd.png"
            : "https://res.cloudinary.com/dpykift6z/image/upload/v1742358065/flamingtext_com-33289242133_fchktq.png"
        }
        alt=""
        className="navbar-logo-fixed"
      />
      <div className="navbar-fixed-menu">
        <button onClick={() => toggleTheme()} type="button">
          {isDark ? (
            <IoSunnySharp
              className={`navbar-icon ${isDark ? "dark-navbar-icon" : ""}`}
            />
          ) : (
            <MdNightsStay
              className={`navbar-icon ${isDark ? "" : "light-navbar-icon"}`}
            />
          )}
        </button>
        <ul className="navbar-fixed-menu-list">
          {menuList.map((eachItem, index) => (
            <li onClick={() => handleMenu(eachItem)} key={index}>
              <HashLink
                smooth
                to={`/#${eachItem.toLocaleLowerCase()}`}
                scroll={scrollToWithOffset}
                className={`item
                  ${isDark ? darkActiveMenu(eachItem) : lightActiveMenu(eachItem)}`}
              >
                {eachItem}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default NavbarFixed;
