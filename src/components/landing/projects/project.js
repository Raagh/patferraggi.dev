import React from "react"

export default props => (
  <div className="project-container">
    <img
      className="project-container__image"
      src={props.image}
      alt="project-example"
    ></img>
    <div className="project-container__project">
      <div className="project-container__name">{props.name}</div>
      <ul className="project-container__skills">
        {props.skills.map(skill => {
          return <li>{skill}</li>
        })}
      </ul>
      <a href="https://rydoo.com" target="_blank" rel="noopener noreferrer">
        See project
      </a>
    </div>
  </div>
)
