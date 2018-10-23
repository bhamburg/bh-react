import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSection = props => {
  return (
    <Section elementType="footer" id="footer">
      <span className="left">
        Built with <a href="https://reactjs.org" title="React.js" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'react']} title="React.js"/></a> and hosted on <a href="https://github.com/bhamburg/bhamburg.github.io" title="Github Pages"><FontAwesomeIcon icon={['fab', 'github']}/></a>
      </span>
      <span className="right">
        <Link href="#hero" to="hero" smooth={true}>
          Scroll to top
        </Link>
      </span>
    </Section>
  )
}

export default FooterSection
