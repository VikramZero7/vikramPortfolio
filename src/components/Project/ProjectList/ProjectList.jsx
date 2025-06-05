import { motion } from "framer-motion";
import { FaLevelUpAlt, FaExternalLinkAlt } from "react-icons/fa";

import "./ProjectList.css";

const ProjectList = ({ projectList }) => {
  const { projectName, projectUrl, category } = projectList;
  return (
    <div className="pro-container">
      <div className="single-project-container">
        <h1>{projectName}</h1>
        <p>{category}</p>
        <span className="click">Click me!</span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="project-selection"
        >
          <h1 className="project-heading">{projectName}</h1>
          <p>{category}</p>
          <a href={projectUrl} target="_blank">
            <FaExternalLinkAlt />{" "}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectList;
