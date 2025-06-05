import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-content-container">
        <h1>Vikram</h1>
        <div className="footer-right-container">
          <div className="footer-menu-container">
            <ul>
              {["Home", "About", "Skills", "Project"].map((eachList, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={`/#${eachList.toLowerCase()}`}
                    className="hashlink"
                  >
                    {eachList}
                  </HashLink>
                </li>
              ))}
            </ul>
            <p>
              © <span>{year}</span> Vikram | All Rights Reserved.
            </p>
          </div>
          <div className="social-container">
            <a
              href="https://www.linkedin.com/in/vikramzero7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
            </a>
            <a
              href="https://github.com/vikramzero7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
