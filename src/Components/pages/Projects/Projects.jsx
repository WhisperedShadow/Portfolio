import "./projects.css";
import Project from "./project/Project";
import { useState, useEffect } from "react";
import { ProjectsHelmet } from "../../cursor/SEO";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
    setLoad(false);
  }, []);

  const propprojects = projects.map((value) => (
    <Project project={value} key={value.id} />
  ));

  if (load) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingBar}></div>
      </div>
    );
  }

  return (
    <>
      <ProjectsHelmet />
      <section className="Projects">
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
      </section>
    </>
  );
};

const styles = {
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loadingBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0",
    height: "5px",
    backgroundColor: "cyan",
    animation: "load 3s infinite",
  },
};

export default Projects;
