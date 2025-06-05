import AOS from "aos";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "./AboutMe.css";
import { ThemeContext } from "../../context/themeContext";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../assets/assets";

const AboutMe = () => {
  const { isDark, handleMenu } = useContext(ThemeContext);

  const aboutRef = useRef(null);

  useIntersectionObserver(aboutRef, () => handleMenu("About"));

  useEffect(() => {
    AOS.init({ easing: "linear", duration: 500 });
  }, [handleMenu]);

  return (
    <div id="about" ref={aboutRef} className="about-main-container">
      <div
        data-aos="fade-right"
        className={`about-profile-lg ${isDark ? "dark-about-pro" : "light-about-pro"}`}
      >
        <img
          src="https://res.cloudinary.com/dpykift6z/image/upload/v1748851045/kscpj59mtg1ax7adwkmm.png"
          alt=""
          className={`profile ${isDark ? "profile-dr" : "profile-lg"}`}
        />
      </div>
      <div data-aos="fade-left" data-aos-offset="50" className="about-content">
        <h1
          className={`about-heading ${isDark ? "dark-font " : "light-font "}`}
        >
          About{" "}
          <span className={isDark ? "dark-about" : "light-about"}>Me</span>
        </h1>
        <h3
          className={`about-job ${isDark ? "job-name-dark" : "job-name-light"}`}
        >
          Mern Full Stack Developer
        </h3>

        <p className={`aboutme-para ${isDark ? "dark-para" : "light-para"}`}>
          I am Vikram, a passionate full-stack developer specializing in the
          MERN stack. With a strong foundation in JavaScript, React, Node.js,
          and MongoDB, I build dynamic, scalable, and efficient web
          applications. My journey started with a B.Sc. in Mathematics with
          Computer Applications, followed by experience in non-IT and executive
          roles, before transitioning into full-time development.
        </p>
        <hr />
        <p className={`aboutme-para ${isDark ? "dark-para" : "light-para"}`}>
          I am constantly learning and refining my skills, with a deep interest
          in mastering JavaScript at a pro level. My goal is to become a
          top-level professional in web development, crafting high-performance
          applications and delivering impactful digital experiences.
        </p>
        <hr />
        <p className={`aboutme-para ${isDark ? "dark-para" : "light-para"}`}>
          Let's connect and build something amazing!
        </p>
        {/*<motion.button
          whileHover={{
            scale: 1.1,
         }}
          whileTap={{ scale: 0.95 }}
          className={`about-button ${isDark ? "about-button-dark" : "about-button-light"}`}
        >
         </div> Know More
        </motion.button> */}
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className={`about-profile-sm ${isDark ? "dark-about-pro" : "light-about-pro"}`}
      >
        <img
          src="https://res.cloudinary.com/dpykift6z/image/upload/v1748851045/kscpj59mtg1ax7adwkmm.png"
          alt=""
          className={`profile ${isDark ? "profile-dr" : "profile-lg"}`}
        />
      </div>
    </div>
  );
};

export default AboutMe;
