import React from "react"
import Image1 from "./../../assets/images/1.jpg"
import Image2 from "./../../assets/images/2.jpg"
import Image3 from "./../../assets/images/3.jpg"

export default () => (
  <section className="gallery-container">
    <img className="gallery-container__image" src={Image3} alt="3"></img>
    <img
      className="gallery-container__image gallery-container__image--vertical"
      src={Image1}
      alt="1"
    ></img>
    <img
      className="gallery-container__image gallery-container__image--vertical"
      src={Image2}
      alt="2"
    ></img>
  </section>
)
