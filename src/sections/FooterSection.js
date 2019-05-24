import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterSection = props => {
  return (
    <Section elementType="footer" id="footer">
      <div className="row">
        <div className="col-auto mb-3 mr-auto">
          Built with <a href="https://reactjs.org" title="React.js" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'react']} />
          </a> and hosted on <a href="https://github.com/bhamburg/bhamburg.github.io" title="Github Pages" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
        <div className="col-auto mb-3">
          <Link href="#hero" to="hero" smooth={true}>
            Scroll to top
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default FooterSection
