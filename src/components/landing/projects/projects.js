import React from "react"
import Project from "./project"
import styled from "styled-components"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"

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

const ProjectsWrapper = styled.section`
  grid-area: projects;
`

const ProjectsWrapperText = styled.p``

export default () => (
  <ProjectsWrapper id="projects">
    <ProjectsWrapperText>
      Some examples of my <span className="isSecondaryColor">work</span>
    </ProjectsWrapperText>
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
  </ProjectsWrapper>
)
