import React from 'react'
import Section from '../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactSection = props => {
  return (
    <Section
      id="contact"
      sectionTitle="Contact"
      sectionTagline="Holler @ Me"
      className="dark"
    >
      <p>
        I’m a web developer with the <a href="https://dicegrp.org" ><abbr title="Digital Innovation and Consumer Experience">DICE</abbr> Group</a> at <a href="https://jefferson.edu">Jefferson</a>,
        where I get to work with a talented and diverse team of technologists, designers, researchers, and writers to improve healthcare and education experiences across the Philadelphia region and beyond.
      </p>
        <a className="nav-link" href="https://www.linkedin.com/in/brianhamburg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <span>Email</span>
        </a>
        <a href="https://github.com/bhamburg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
          <span>Github</span>
        </a>
        <a href="https://twitter.com/burgbits" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <span>Twitter</span>
        </a>
    </Section>
  )
}

export default ContactSection
