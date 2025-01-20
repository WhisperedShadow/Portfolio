import "./header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let tr = document.querySelector(".menu").style;
    let br = document.querySelector(".menu-bar").style;
    if (menu) {
      tr.transform = "translateY(0)";
      br.transform = "rotateZ(90deg)";
    } else {
      tr.transform = "translateY(-100%)";
      br.transform = "rotateZ(0)";
    }
  }, [menu]);

  return (
    <>
      <div className="menu-bar" onClick={toggleMenu}>
        <i className="fa-solid fa-3x fa-bars"></i>
      </div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="contact">Contact</a>
        <a href="/Durai's-Resume.pdf" download={true}>My Resume</a>
      </div>
      <header>
        <a href={import.meta.env.VITE_GIT} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={import.meta.env.VITE_LINK} target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href={import.meta.env.VITE_INSTA} target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href={import.meta.env.VITE_FB} target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <p>
          <strong>Follow me</strong>
        </p>
      </header>
    </>
  );
};

export default Header;
