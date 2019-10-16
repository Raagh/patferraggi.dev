import React from "react"
import Project from "./project"

const projects = [
  {
    name: "Rydoo",
    skills: [
      "C#",
      "ASP.net core",
      "Typescript",
      "Angular",
      "Test Driven Development",
      "Azure Blob Storage",
      "MongoDB",
      "SQL Server",
      "SASS",
    ],
  },
]

export default () => (
  <section id="projects" className="projects-container">
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
          skills={project.skills}
        />
      )
    })}
  </section>
)
