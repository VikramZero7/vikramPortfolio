import { useEffect } from "react";

export const menuList = ["Home", "About", "Skills", "Project", "Contact"];

export const projectList = [
  {
    id: 1,
    projectName: "Jobby App",
    category: "Information",
    projectUrl: "https://jobbyappvikram.ccbp.tech",
  },
  {
    id: 2,
    projectName: "Nxt Watch",
    category: "Entertainment",
    projectUrl: "https://nxtwatchvikram.ccbp.tech",
  },
  {
    id: 3,
    projectName: "Emoji Game",
    category: "Games",
    projectUrl: "https://emojigamevikram.ccbp.tech",
  },

  {
    id: 4,
    projectName: "Nxt Trendz",
    category: "E commerce",
    projectUrl: "https://nxttrendzvikram.ccbp.tech/login",
  },
  {
    id: 5,
    projectName: "IPL Dashboard",
    category: "Sports",
    projectUrl: "https://ipldashboardv7.ccbp.tech/",
  },
  {
    id: 6,
    projectName: "Match Game",
    category: "Games",
    projectUrl: "https://matchgamev7.ccbp.tech/",
  },
];

export const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transtion: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const useIntersectionObserver = (ref, callback, threshold = 0.6) => {
  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(); // Trigger callback when element is in view
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, threshold]);
};
