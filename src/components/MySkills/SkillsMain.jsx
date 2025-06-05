// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";

import "./SkillsMain.css";
import { fadeIn, useIntersectionObserver } from "../../assets/assets";
import { ThemeContext } from "../../context/ThemeContext";

import React, { useContext } from "react";
import SkillList from "./SkillsList/SkillList";
import { useRef } from "react";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: IoLogoPython,
  },
];

const SkillsMain = () => {
  const { isDark, handleMenu } = useContext(ThemeContext);

  const skillRef = useRef(null);

  useIntersectionObserver(skillRef, () => handleMenu("Skills"));

  return (
    <div id="skills" ref={skillRef} className="skills-main-container">
      <h1
        className={`skill-heading ${isDark ? "heading-font-dark" : "heading-font-light"}`}
      >
        <span className={isDark ? "dark-about" : "light-about"}>My</span> Skills
      </h1>
      <p className={`skill-para ${isDark ? "dark-para" : "light-para"}`}>
        I not only work with these technologies but excellent in using them with
        best practices to deliver high-quality results, I have been working with
        all these skills to build my portfolio projects.
      </p>
      <div className="skill-bottom-container">
        <div className="all-skill">
          {skills.map((eachlist, index) => (
            <motion.div
              variants={fadeIn("up", `0.${index + 1}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              key={index}
            >
              <SkillList text={eachlist.skill} imgSvg={<eachlist.icon />} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
