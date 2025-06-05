// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import "animate.css";

import React, { useContext, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../context/ThemeContext";

import "./Banner.css";

const Banner = () => {
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`banner-container ${isDark ? "banner-dark" : "banner-light"}`}
    >
      <div
        className={`profile-container-sm ${isDark ? "profile-container-dark" : "profile-container-light"}`}
      >
        <img
          src="https://res.cloudinary.com/dpykift6z/image/upload/v1748851045/kscpj59mtg1ax7adwkmm.png"
          alt=""
          className="profile"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <div className="banner-content">
        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
          Hello, It's Me <span className="name">Vikram</span>
        </h3>
        <h2
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="700"
          className="job-name"
        >
          And I'm a{" "}
          <span className={`${isDark ? "job-name-dark" : "job-name-light"}`}>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "API Maestro",
                "MERN Stack Architect",
                "React Magician",
              ]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
          <span className="">|</span> {/* Static Cursor */}
        </h2>
        <p
          data-aos="flip-down"
          data-aos-duration="1500"
          data-aos-delay="1100"
          className="text-lg text-gray-300 mt-6 max-w-2xl"
        >
          A passionate MERN Stack Developer who turns ideas into powerful web
          applications. Building fast, scalable, and user-friendly solutions
          with React, Node.js, Express, and MongoDB.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="900"
          className="banner-button-container"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            className={`banner-button ${isDark ? "banner-button-dark" : "banner-button-light"}`}
          >
            <a
              className="contact"
              target="_blank"
              download="VikramResume97.pdf"
              href="/VikramResume97.pdf"
            >
              Resume
            </a>
          </motion.button>
          <HashLink smooth to="/#contact">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              className={`banner-button ${isDark ? "contact-button-dark" : "contact-button-light"}`}
            >
              <a
                className={isDark ? "contact-dark" : "contact-light"}
                href="#contact"
              >
                Contact me
              </a>
            </motion.button>
          </HashLink>
        </div>
      </div>
      <div
        className={`profile-container-lg ${isDark ? "profile-container-dark" : "profile-container-light"}`}
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

export default Banner;
