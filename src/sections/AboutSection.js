import React from 'react'
import { Link } from 'react-scroll'
import Section from '../components/Section'
import aboutBg from '../assets/office-light-blur.jpg'

const AboutSection = props => {
  return (
    <Section
      id="about"
      background={aboutBg}
      sectionTitle="About"
      sectionTagline="Who is this Brian character, anyway?"
      className="full"
      style={{backgroundPosition: 'left'}}
    >
      <p>
        I’m a web developer with the <a href="https://dicegrp.org" ><abbr title="Digital Innovation and Consumer Experience">DICE</abbr> Group</a> at <a href="https://jefferson.edu">Jefferson</a>,
        where I get to work with a talented and diverse team of technologists, designers, researchers, and writers to improve healthcare and education experiences across the greater Philadelphia region and beyond.
      </p>
      <p>
        Take a look at some of the projects that I have contributed to <Link href="#work" to="work" smooth={true}>below</Link>.
      </p>
      <p>
        Blurb about <Link href="#music" to="music" smooth={true}>music and mums</Link> and <Link href="#etc" to="etc" smooth={true}>nerdery</Link>.
      </p>
      <p>
        Blurb about family life.
      </p>
    </Section>
  )
}

export default AboutSection
