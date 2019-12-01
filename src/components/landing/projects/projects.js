import React from "react"
import Project from "./project"
import device from "../../shared/device"
import styled from "styled-components"
import globalStyles from "../../shared/global-styles"

const ProjectsWrapper = styled.section`
  grid-area: projects;
  padding-top: 5rem;

  @media ${device.phone} {
    padding-top: 3rem;
  }
`

const ProjectsWrapperText = styled.p`
  padding-bottom: 4rem;
  font-size: 64px;
  font-family: ${globalStyles.fontFamilyMedium};
  line-height: 64px;

  .isSecondaryColor {
    color: ${globalStyles.secondaryColor};
  }

  @media ${device.phone} {
    padding-bottom: 2rem;
    line-height: 32px;
    font-size: 32px;
  }
`

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
