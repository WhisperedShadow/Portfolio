import "./skills.css";
import Skill from "./skill/skill.jsx";
import { SkillsHelmet } from "../../SEO/SEO.jsx";

const Skills = () => {
  let frontendTechnologies = [
    {
      name: "HTML5",
      url: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      des: "Strong understanding of semantic markup and responsive design principles to structure web content effectively.",
    },
    {
      name: "CSS3",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      des: "Skilled in styling web pages, using modern techniques like Flexbox, CSS Grid, and media queries to ensure responsiveness.",
    },
    {
      name: "JavaScript",
      url: "https://quintagroup.com/cms/js/js-image/javascript-logo.png",
      des: "Proficient in core JavaScript concepts and used extensively for creating interactive and dynamic user interfaces.",
    },
    {
      name: "React",
      url: "https://www.devtopics.com/wp-content/uploads/2023/01/React-icon.svg_.png",
      des: "Experience building user interfaces with React, utilizing state management and hooks to create smooth, responsive web applications.",
    },
  ];

  const backendTechnologies = [
    {
      name: "Flask",
      url: "https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png",
      des: "Hands-on experience with the Flask web framework for building lightweight web applications, handling requests, and integrating databases.",
    },
    {
      name: "Express.js",
      url: "https://qualitapps.com/wp-content/uploads/2023/02/102.png",
      des: "Knowledge of building server-side applications and APIs using Express.js for handling routing and server logic.",
    },
    {
      name: "MongoDB",
      url: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      des: "Experience working with MongoDB to store and manage data in a NoSQL format, focusing on building scalable backend systems.",
    },
    {
      name: "MySQL",
      url: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
      des: "Proficient in MySQL for relational database management, creating and managing databases, tables, and performing queries.",
    },
  ];

  const versionControl = [
    {
      name: "Git & GitHub",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png", // Git logo URL
      des: "Comfortable using Git for version control, collaborating on projects, and managing repositories on GitHub for project sharing and tracking.",
    },
  ];

  const additionalTechnologies = [
    {
      name: "Bootstrap",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png",
      des: "Familiar with using Bootstrap for rapid UI design and responsive layouts.",
    },
    {
      name: "Three.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png",
      des: "Exploring Three.js for creating 3D graphics and interactive web elements, adding a creative touch to web design.",
    },
  ];

  const aiTechnologies = [
    {
      name: "Machine Learning",
      url: "https://img.freepik.com/free-vector/tiny-scientists-developing-ai-using-machine-learning-brain-computing-data-flat-vector-illustration-artificial-intelligence-technology-science-concept-banner-website-design-landing-web-page_74855-22578.jpg?t=st=1733974293~exp=1733977893~hmac=fa504dce566d7a3546018521b449c90106aa2b8bf345cee3144e3d4f685e0642&w=740",
      des: "Actively learning the fundamentals of Machine Learning to apply algorithms and data processing techniques to real-world problems."
    },
    {
      name: "Deep Learning",
      url: "https://img.freepik.com/free-vector/ai-brain-concept-illustration_114360-19015.jpg?t=st=1733974238~exp=1733977838~hmac=433969ffb3de828c19584f1c7bcab2d3acbe37c0abe6fded36383951fbb7606c&w=740",
      des: "Exploring Deep Learning through online resources, with plans to dive deeper into neural networks and AI."
    }
  ];
  

  return (
    <>
    <SkillsHelmet />
    <section className="skills">
      <div className="s-con">
        <h1>What I Do Best 🔧💡</h1>
        <Skill name="Frontend Technologies" skills={frontendTechnologies} />
        <Skill name="Backend Technologies" skills={backendTechnologies} />
        <Skill name="Version Control" skills={versionControl} />
        <Skill name="Web Development Tools & Libraries" skills={additionalTechnologies} />
        <Skill name="Emerging Technologies (In Progress)" skills={aiTechnologies} />
      </div>
    </section>
    </>
  );
};

export default Skills;
