// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "./Project.css";
import ProjectList from "./ProjectList/ProjectList";
import {
  fadeIn,
  projectList,
  useIntersectionObserver,
} from "../../assets/assets";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useRef } from "react";

const Project = () => {
  const { isDark, handleMenu } = useContext(ThemeContext);

  const projectRef = useRef(null);

  useIntersectionObserver(projectRef, () => handleMenu("Project"));

  return (
    <div id="project" ref={projectRef} className="project-main-container">
      <h1
        className={`skill-heading ${isDark ? "heading-font-dark" : "heading-font-light"}`}
      >
        Project
      </h1>
      <div className="project-container">
        {projectList.map((eachList, index) => (
          <motion.div
            variants={fadeIn("right", `0.${index + 1}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            key={eachList.id}
          >
            <ProjectList projectList={eachList} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
