import PropTypes from "prop-types";
import './skill.css'
const Skill = (props) => {
  const skillItems = props.skills.map((skill, index) => (
    <div className="skill" key={index}>
        <img src={skill.url} alt={skill.name} />
        <p>
          <strong>{skill.name}</strong>: {skill.des}
        </p>
      </div>
    
  ));

  return (
    <div className="area">
      <h2>{props.name}</h2>
      <div className="skill-con" >
      {skillItems}
    </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Skill;
