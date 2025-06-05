import "./SkillList.css";
import { fadeIn } from "../../../assets/assets";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

const SkillList = ({ text, imgSvg }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`skill-container ${isDark ? "skill-cont-dark" : "skill-cont-light"}`}
    >
      <div
        className={`icon-container ${isDark ? "icon-con-dark" : "icon-con-light"}`}
      >
        {imgSvg}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SkillList;
