import PropTypes from 'prop-types'
import './project.css'

const Project = props => {
  return (
    <div className="project scroll-animation">
            <img
              src={props.project.img_url}
              alt={props.project.name}
            />
            <div className="p-con">
              <h2>{props.project.name}</h2>
              <p>
              {props.project.description} <br /> <br /><strong>Tech Used :</strong>{props.project.tech_used}
              </p>
              <a href={props.project.link} target='_blank'>Visit</a>
            </div>
          </div>
  )
}

Project.propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tech_used: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      img_url: PropTypes.string.isRequired
    }).isRequired
  };

export default Project