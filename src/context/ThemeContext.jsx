import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenu = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext value={{ isDark, activeMenu, handleMenu, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};
