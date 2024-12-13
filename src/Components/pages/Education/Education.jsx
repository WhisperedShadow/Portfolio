import "./education.css";

const Education = () => {
  return (
    <section className="education">
      <div className="edu-con">
        <h1>My Learning Journey 📚🚀</h1>
        <div className="edu-sec scroll-animation-short">
          <h2>
            Bachelor of Engineering (B.E.) in Computer Science and Engineering
          </h2>
          <h3>
            Jeppiaar Engineering College, Anna University <br />
            2022 – Present (Expected Graduation: 2026)
          </h3>
          <img className="edu-img" src="/clg.png" alt="College Image" />
          <p>
            I am currently pursuing my degree in Computer Science and
            Engineering, where I am building a strong foundation in programming,
            software development, and emerging technologies. However, much of my
            learning extends beyond the classroom, driven by my curiosity and
            determination to explore independently.
            <br />
            <br />
            As a self-taught learner, I take the initiative to deepen my
            understanding of various technologies and tools, often going beyond
            the standard curriculum to work on real-world projects and acquire
            new skills. <br /> <br />
            <h4>Highlights of my academic journey include:</h4>
            <ul className="a-ul">
              <li className="a-li">
                Self-taught in web development with hands-on projects like a
                <strong>weather app, to-do list</strong>, and a{" "}
                <strong>professional portfolio website</strong>.
              </li>
              <li className="a-li">
                Participating in team projects that required collaboration,
                creative thinking, and real-world application of software
                development skills.
              </li>
              <li className="a-li">
                Exploring cutting-edge fields such as{" "}
                <strong>machine learning</strong> and
                <strong>artificial intelligence</strong>, which align with my
                aspirations for future specialization.
              </li>
            </ul>
          </p>
        </div>
        <div className="edu-sec scroll-animation-short">
        <img className="edu-img" src="/school2.png" alt="School Image" />
          <h2>Higher Secondary Education (Class 12)</h2>
          <h3>
            S.S.V. Hr. Sec. School (Bio-Maths Stream) <br />
            2020 – 2022
          </h3>
         
          <p>
            Focused on integrating science and mathematics to develop analytical
            and critical thinking skills. Subjects like{" "}
            <strong>Mathematics, Physics, Chemistry, and Biology</strong> have
            laid the groundwork for understanding technical concepts and logical
            reasoning. <br />
            <br />
            Key Takeaways from this Phase:
            <ul className="a-ul">
              <li className="a-li">
                Developed a strong interest in{" "}
                <strong>mathematics and problem-solving</strong>, which inspired
                my enthusiasm for programming.
              </li>
              <li className="a-li">
                Gained insights into <strong>biology concepts</strong>,
                fostering an interdisciplinary approach that piques my curiosity
                about fields like <strong>bioinformatics</strong> and{" "}
                <strong>AI in healthcare.</strong>
              </li>
            </ul>
          </p>
        </div>
        <div className="edu-sec scroll-animation-short">
          <h2>Secondary Education (Class 10)</h2>
          <h3>
            S.S.V. Hr. Sec. School <br />
            2018 – 2020
          </h3>
          <img className="edu-img" src="/school.png" alt="School Image" />
          <p>
            During this crucial phase of my academic journey, I built a strong
            foundation in core subjects such as{" "}
            <strong>Mathematics, Science, and Language Studies</strong>. These
            formative years were instrumental in shaping my interest in
            problem-solving and logical thinking, which eventually led to my
            passion for technology and programming.
            <br />
            <br />
            Key highlights of this phase include:
            <ul className="a-ul">
              <li className="a-li">
                <strong>Mathematics:</strong> Developing problem-solving skills
                and analytical thinking by mastering concepts like algebra,
                geometry, and arithmetic. These skills laid the groundwork for
                understanding programming logic.
              </li>
              <li className="a-li">
                <strong>Science:</strong> Exploring foundational concepts in
                physics, chemistry, and biology, which nurtured my curiosity and
                understanding of how technology can intersect with the natural
                world.
              </li>
              <li className="a-li">
                <strong>Language Studies:</strong> Enhancing communication
                skills and developing a structured thought process, critical for
                articulating ideas effectively—both in academic and technical
                contexts.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
