import React from "react"
import device from "../../config/device"
import styleVariables from "../../config/style-variables"

const isMediaQuerySmall =
  typeof window !== `undefined`
    ? window.matchMedia(device.small).matches
    : false

export default props => {
  const margin = props.small
    ? "3.5rem 0 3.5rem 0"
    : isMediaQuerySmall
    ? "3.5rem 0 2.5rem 0"
    : "5.5rem 0 4.5rem 0"

  const finalMargin = props.margin ?? margin
  const maxWidth = props.maxWidth ?? null
  const color = props.color ?? styleVariables.primaryColor

  return (
    <hr
      style={{
        borderBottom: "none",
        borderRight: "none",
        borderLeft: "none",
        borderTop: `2px solid ${color}`,
        margin: finalMargin,
        height: "0px",
        maxWidth: maxWidth,
      }}
    />
  )
}
