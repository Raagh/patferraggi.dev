const size = {
  phone: "667px",
  tablet: "768px",
  tabletPortrait: "(min-width: 736px) and (max-width: 1366px)",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export default {
  phone: `(max-width: ${size.phone})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletPortrait: size.tabletPortrait,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}
