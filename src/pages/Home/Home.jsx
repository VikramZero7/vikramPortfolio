import React from "react";
import Banner from "../../components/Banner/Banner";
import AboutMe from "../../components/AboutMe/AboutMe";
import SkillsMain from "../../components/MySkills/SkillsMain";
import Project from "../../components/Project/Project";
import ContactMe from "../../components/ContactMe/ContactMe";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <SkillsMain />
      <Project />
      <ContactMe />
    </>
  );
};

export default Home;
