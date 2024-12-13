import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-con fade-in">
        <h1>Let&apos;s Get to Know Me! 🌱👨‍💻</h1>

        <div className="a-sec">
          <h3 className="a-sec-title">Hi, I’m Durai Pon Singh!</h3>
          <p className="a-sec-para">
            <img src="./Smile.png" alt="Image" />
            <p >
              I am an ambitious{" "}
              <strong>Computer Science and Engineering student</strong>, driven
              by my passion for technology and problem-solving. With a strong
              foundation in web development and a commitment to lifelong
              learning, I aim to create digital solutions that are innovative,
              functional, and impactful. <br />
              <br />
              Over the years, I have honed my skills in both{" "}
              <strong>frontend</strong> and <strong>backend development</strong>
              , enabling me to take on diverse technical challenges. From
              designing sleek, responsive interfaces to managing data in dynamic
              databases, I approach every project with curiosity and a focus on
              delivering quality. <br />
              <br />
              As I continue my journey, I am exploring emerging areas like{" "}
              <strong>Machine Learning</strong> and{" "}
              <strong>Deep Learning</strong>, where I aspire to harness the
              power of data-driven decision-making in my future projects.
            </p>
          </p>
        </div>
        <div className="a-sec">
          <h3 className="a-sec-title">What Shapes Me</h3>
          <ul className="a-ul">
            <li className="a-li">
              A belief in continuous learning to stay ahead in the fast-paced
              tech world.
            </li>
            <li className="a-li">
              A creative approach to problem-solving, influenced by my hobbies
              like <strong>drawing</strong> and <strong>crafting</strong>.
            </li>
            <li className="a-li">
              A disciplined mindset nurtured by my dedication to{" "}
              <strong>Martial Arts</strong> and <strong>Calisthenics</strong>
            </li>
          </ul>
          <p className="a-sec-para">
            I am motivated by challenges that inspire growth and push my
            boundaries. With a passion for learning and a collaborative mindset,
            I seek opportunities to work on impactful projects, exchange ideas,
            and contribute to transformative solutions that leave a lasting
            impression.
          </p>
        </div>
        <div className="a-sec">
          <h3 className="a-sec-title">Dive Deeper</h3>
          <a href="/education">👉🏻Education: My Academic Background👈🏻
          <p className="a-sec-para" >
            Dive into my experiences as a dedicated Computer Science and
            Engineering student, where I’ve cultivated a solid foundation in
            programming, software development, and problem-solving. Learn how my
            coursework, projects, and real-world applications have shaped my
            technical expertise and prepared me to tackle complex challenges
            with confidence and creativity.
          </p>
          </a>
          <a href="/skills">👉🏻Explore My Technical and Creative Skillset👈🏻
          <p className="a-sec-para">
            Uncover the diverse technical and creative skills I bring to the
            table—ranging from frontend and backend development to crafting
            engaging digital experiences. See how my ability to merge logic and
            creativity enables me to approach problem-solving with innovation,
            precision, and a relentless drive for excellence.
          </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
