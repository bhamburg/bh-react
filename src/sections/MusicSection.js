import React from 'react'
import Section from '../components/Section'
import musicBg from '../assets/banjo-nursery-light-blur.jpg'

const MusicSection = props => {
  return (
    <Section
      id="music"
      background={musicBg}
      sectionTitle="Music"
      sectionTagline="Strummin’ &amp; Mummin’"
    >
      <p>
        I’m a web developer with the <a href="https://dicegrp.org" ><abbr title="Digital Innovation and Consumer Experience">DICE</abbr> Group</a> at <a href="https://jefferson.edu">Jefferson</a>,
        where I get to work with a talented and diverse team of technologists, designers, researchers, and writers to improve healthcare and education experiences across the Philadelphia region and beyond.
      </p>
    </Section>
  )
}

export default MusicSection
