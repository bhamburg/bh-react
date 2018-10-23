import React from 'react'

const Section = props => {
  const Tag = props.elementType ? props.elementType : 'section'
  const Background = props.background ? `url(${props.background})` : 'none'
  return (
    <Tag
      style={{ ...props.style, backgroundImage: Background }}
      id={props.id}
      className={props.className}
    >
      <div className="container">
        {Tag === 'section' && (
          <div className="section-title">
            <h2>{props.sectionTitle}</h2>
            <div className="tagline">{props.sectionTagline}</div>
          </div>
        )}
        {props.children}
      </div>
    </Tag>
  )
}

export default Section
