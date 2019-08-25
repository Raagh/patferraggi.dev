import React from "react"
import { Helmet } from "react-helmet"

const defaultProps = {
  url: "https://patferraggi.dev",
  pathname: "",
  title: "Patricio Ferraggi Ares",
  description: "Patricio Ferraggi 's personal website and blog",
  twitterHandle: "@patferraggi",
}

export default () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{defaultProps.url}</title>
    <meta name="description" content={defaultProps.description}></meta>
    <meta property="og:description" content={defaultProps.description} />
    <meta
      name="twitter:url"
      content={`${defaultProps.url}/${defaultProps.pathname}`}
    />
    <meta name="twitter:title" content={defaultProps.title} />
    <meta name="twitter:description" content={defaultProps.description} />
    <meta name="twitter:site" content={defaultProps.twitterHandle} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={defaultProps.twitterHandle} />
  </Helmet>
)
