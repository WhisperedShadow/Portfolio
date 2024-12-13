import "./projects.css";
import Project from "./project/Project";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });

  const propprojects = projects.map((value) => (
    <Project project={value} key={value.id} />
  ));

  return (
    <div className="Projects">
      <div className="projects-con">
        <h1>Welcome to My Projects! 🚀</h1>
        <p>
          <br />
          <br />
          Explore a collection of projects that reflect my passion for
          technology and creativity. Each project is a step in my journey of
          learning, experimenting, and building solutions that make an impact.
          From responsive designs to backend integrations, these projects
          showcase my skills and dedication to crafting meaningful digital
          experiences. Dive in and discover how I bring ideas to life!
        </p>
        <div className="p-container">{propprojects}</div>
      </div>
    </div>
  );
};

export default Projects;
