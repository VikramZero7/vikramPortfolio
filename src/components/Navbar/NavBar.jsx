import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavbarDefault from "./NavbarDefault/NavbarDefault";
import NavbarFixed from "./NavbarFixed/NavbarFixed";

const Navbar = () => {
  const [isScrollPast, setIsScrollPast] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setIsScrollPast(true);
    } else {
      setIsScrollPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? <NavbarFixed /> : <NavbarDefault />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
