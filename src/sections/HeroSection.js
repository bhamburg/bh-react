import React from 'react'
import Section from '../components/Section'
import Navigation from '../components/Navigation'
import TypedHero from '../components/TypedHero'
import heroBg from '../assets/philly1927-dark.jpg'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroSection = props => {
  return (
    <Section
      elementType="header"
      id="hero"
      className="dark full"
      background={heroBg}
    >
      <Navigation />
      <div className="container animated flipInY slower delay-2s">
        <div className="hero-text">
          <h1>Brian Hamburg</h1>
          <div className="tagline">
            <TypedHero
              strings={[
                'Father of Female Fraternal Twins',
                'Spouse of Sandyflipflops18',
                'Strummer of Strings',
                'Implementer of Interfaces',
                'Brandisher of Banjos',
                'Wrangler of the Web',
                'Collector of Classic Cartridges',
                'Purveyor of Pixels'
              ]}
            />
          </div>
        </div>
      </div>
      <Link href="#about" to="about" smooth={true} className="more">
        <span>Learn More</span>
        <FontAwesomeIcon className="animated fadeOutDown slow infinite" icon={'chevron-down'}/>
      </Link>
    </Section>
  )
}

export default HeroSection
