import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSection = props => {
  return (
    <Section elementType="footer" id="footer">
      <div className="row justify-content-between">
        <div className="col-auto mb-3 mr-auto text-center">
          Built with <a href="https://reactjs.org" title="React.js" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'react']} title="React.js"/></a> and hosted on <a href="https://github.com/bhamburg/bhamburg.github.io" title="Github Pages"><FontAwesomeIcon icon={['fab', 'github']}/></a>
        </div>
        <div className="col-auto mb-3 text-center">
          <Link href="#hero" to="hero" smooth={true}>
            Scroll to top
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default FooterSection
