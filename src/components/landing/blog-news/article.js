import React from "react"

const getTitleClassNames = isActive => {
  return isActive
    ? "article-container__title article-container__title--active"
    : "article-container__title"
}

export default props => (
  <div className="article-display-container">
    <article className="article-container">
      <a
        href={props.link}
        className={getTitleClassNames(props.isActive)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
      <p className="article-container__creationDate">{props.creationDate}</p>
    </article>
    {props.addDivider && <div className="articles__divider"></div>}
  </div>
)