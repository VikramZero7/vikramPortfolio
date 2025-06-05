import { HashLink } from "react-router-hash-link";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdNightsStay } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import "./NavbarDefault.css";
import { ThemeContext } from "../../../context/themeContext";
import { useContext, useState } from "react";
import { menuList, useIntersectionObserver } from "../../../assets/assets";
import { useRef } from "react";

const NavbarDefault = () => {
  const [showmenu, setShowmenu] = useState(false);
  const { isDark, toggleTheme, activeMenu, handleMenu } =
    useContext(ThemeContext);

  const headRef = useRef(null);

  // dynamic menu item change

  useIntersectionObserver(headRef, () => handleMenu("Home"));

  const scrollToWithOffset = (el) => {
    const yOffset = -80; // Adjust for navbar height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const lightActiveMenu = (item) =>
    activeMenu === item ? "light-mode-active" : "light-navbar-menu-list";

  const darkActiveMenu = (item) =>
    activeMenu === item ? "dark-mode-active" : "dark-navbar-menu-list";

  const lightMenuSm = isDark ? "navbar-sm-li-dark" : "navbar-sm-li-light";

  return (
    <>
      <div className="navbar" ref={headRef}>
        <div className="navbar-content">
          <img
            src={
              isDark
                ? "https://res.cloudinary.com/dpykift6z/image/upload/v1742360356/xshmmvyhncr3xngqofsd.png"
                : "https://res.cloudinary.com/dpykift6z/image/upload/v1742358065/flamingtext_com-33289242133_fchktq.png"
            }
            alt="logo"
            className="navbar-logo"
          />
          <div className="navbar-menu-container">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              type="button"
            >
              {isDark ? (
                <IoSunnySharp className="navbar-icon dark-navbar-icon" />
              ) : (
                <MdNightsStay className="navbar-icon light-navbar-icon" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setShowmenu(!showmenu)}
              className="navbar-icons-sm navbar-icon"
            >
              <FaBars
                className={`navbar-icon ${isDark ? "dark-navbar-icon" : "light-navbar-icon"}`}
              />
            </button>

            {/* Desktop Menu */}
            <ul className="navbar-lg">
              {menuList.map((eachItem, index) => (
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleMenu(eachItem)}
                  key={index}
                >
                  <HashLink
                    smooth
                    to={`/#${eachItem.toLowerCase()}`}
                    scroll={scrollToWithOffset}
                    className={
                      isDark
                        ? darkActiveMenu(eachItem)
                        : lightActiveMenu(eachItem)
                    }
                  >
                    {eachItem}
                  </HashLink>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showmenu && (
        <ul className="navbar-sm">
          {menuList.map((eachItem, index) => (
            <li
              className={`navbar-sm-li ${lightMenuSm}`}
              onClick={() => {
                handleMenu(eachItem);
                setShowmenu(false); // Close menu on click
              }}
              key={index}
            >
              <HashLink
                smooth
                to={`/#${eachItem.toLowerCase()}`}
                scroll={scrollToWithOffset}
                className={
                  isDark ? darkActiveMenu(eachItem) : lightActiveMenu(eachItem)
                }
              >
                {eachItem}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavbarDefault;
