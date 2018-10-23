import React from 'react'
import Section from '../components/Section'
import aboutBg from '../assets/office-light-blur.jpg'

const AboutSection = props => {
  return (
    <Section
      id="about"
      background={aboutBg}
      sectionTitle="About"
      sectionTagline="Who is this Brian character, anyway?"
    >
      <p>
        I’m a web developer with the <a href="https://dicegrp.org" ><abbr title="Digital Innovation and Consumer Experience">DICE</abbr> Group</a> at <a href="https://jefferson.edu">Jefferson</a>,
        where I get to work with a talented and diverse team of technologists, designers, researchers, and writers to improve healthcare and education experiences across the Philadelphia region and beyond.
      </p>
    </Section>
  )
}

export default AboutSection
