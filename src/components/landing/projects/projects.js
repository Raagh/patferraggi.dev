import React from "react"
import Project from "./project"
import ProjectRydoo from "../../../assets/images/project-rydoo.png"

const projects = [
  {
    name: "Rydoo",
    img: ProjectRydoo,
    skills: ["C# develoment", "Unit testing", "and some other shit."],
  },
]

export default () => (
  <section className="projects-container">
    <p className="projects-container__text">
      Some examples of my{" "}
      <span className="projects-container__text--isSecondaryColor">work</span>
    </p>
    {projects.map(project => {
      const projectIndex = projects.indexOf(project)

      return (
        <Project
          key={projectIndex}
          name={project.name}
          image={project.img}
          skills={project.skills}
        />
      )
    })}
  </section>
)
