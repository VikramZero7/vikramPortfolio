import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./ContactMe.css";

import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useIntersectionObserver } from "../../assets/assets";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const { handleMenu } = useContext(ThemeContext);

  const contactRef = useRef(null);

  useIntersectionObserver(contactRef, () => handleMenu("Contact"));

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_014nadj", "template_jm5on2y", form.current, {
        publicKey: "MhPaqTz2gnemuO9qZ",
      })
      .then(
        () => {
          setSuccess("Message Sent Successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" ref={contactRef} className="contact-main-container">
      <div className="contact-left-container">
        <h1>Get In Touch</h1>
        <p>
          Feel free to reach out if you’d like to collaborate.
          <br />
          You are just a few clicks away!
        </p>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="contact-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="9"
            cols="50"
            placeholder="Message"
            className="contact-text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="contact-button"
          >
            Send
          </motion.button>
        </form>
        {success && <p className="success-message">{success}</p>}
      </div>
      <div className="contact-right-container">
        <img
          src="https://res.cloudinary.com/dpykift6z/image/upload/v1742297486/zaxgypaayek2lwaguizy.png"
          alt="email"
          className="image-email"
        />
        <div className="contact-details">
          <div className="contact-icon-container">
            <MdMailOutline className="contact-icon" />
            <p>ramrajvikram97@gmail.com</p>
          </div>
          <div className="contact-icon-container">
            <FiPhone className="contact-icon" />
            <p>+91 6383162535</p>
          </div>
          <div className="contact-icon-container">
            <IoLocationOutline className="contact-icon" />
            <p>Madurai, Tamil Nadu</p>
          </div>
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
  );
};

export default ContactMe;
