import React from "react"
import GithubIcon from "../assets/icons/github.png"
import LinkedinIcon from "../assets/icons/linkedin.png"

export default () => (
  <ul className="navbar">
    <li className="navbar__link--active">intro</li>
    <li>blog</li>
    <li>about</li>
    <li>projects</li>
    <li>contact</li>
    <li className="navbar__link--active navbar__link--separated">eng</li>
    <li>esp</li>
    <li className="navbar__link--separated-extra">
      <a href="https://www.linkedin.com/in/patricio-ferraggi-ares/">
        <img
          className="link--external"
          alt="linkedin link"
          src={LinkedinIcon}
        />
      </a>
      <a href="https://github.com/Raagh/">
        <img className="link--external" alt="github link" src={GithubIcon} />
      </a>
    </li>
  </ul>
)
