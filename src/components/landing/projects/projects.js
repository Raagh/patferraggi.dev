import React from "react"
import Project from "./project"
import styled from "styled-components"
import IcomoonReact from "icomoon-react"
import globalStyles from "../../../config/style-variables"
import device from "../../../config/device"
import iconSet from "../../../../content/assets/icons/selection.json"

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
  font-family: ${globalStyles.fontFamilyMedium};
`

const ProjectsWrapperText = styled.p`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;

  @media ${device.small} {
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -1px;
  }
`

export default () => (
  <ProjectsWrapper id="projects">
    <ProjectsWrapperText>
      Some examples of my work{" "}
      {<IcomoonReact iconSet={iconSet} size={"1em"} icon="heart" />}{" "}
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
