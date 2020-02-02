import React from "react"
import device from "../../config/device"
import styleVariables from "../../config/style-variables"

const mediaQuery =
  typeof window !== `undefined`
    ? window.matchMedia(device.small)
    : { matches: false }

export default () => (
  <hr
    style={{
      borderBottom: "none",
      borderRight: "none",
      borderLeft: "none",
      borderTop: `2px solid ${styleVariables.primaryColor}`,
      margin: mediaQuery.matches ? "3.5rem 0 2.5rem 0" : "5.5rem 0 4.5rem 0",
      height: "0px",
    }}
  />
)
