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
      {props.children}
    </Tag>
  )
}

export default Section
