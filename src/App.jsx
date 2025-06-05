import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { ThemeContext } from "./context/themeContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className={`main-container ${isDark ? "dark" : "light"}`}>
        <Navbar />
        <div id="home" className="app">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
