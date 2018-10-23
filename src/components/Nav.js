import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = props => {
  return (
    <nav>
      <div className="container">      
        <a className="logo" href="/">
          bh
        </a>
        <div className="right">
          <Link href="#about" to="about" smooth={true}>About</Link>
          <Link href="#work" to="work" smooth={true}>Work</Link>
          <Link href="#music" to="music" smooth={true}>Music</Link>
          <Link href="#etc" to="etc" smooth={true}>Etc.</Link>
          <a href="mailto:bhamburg@gmail.com">
            <FontAwesomeIcon icon={'envelope'}/>
            <span>Email</span>
          </a>
          <a href="https://github.com/bhamburg">
            <FontAwesomeIcon icon={['fab', 'github']}/>
            <span>Github</span>
          </a>
          <a href="https://twitter.com/burgbits">
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            <span>Twitter</span>
          </a>
          <a href="https://instagram.com/burgbits">
            <FontAwesomeIcon icon={['fab', 'instagram']}/>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
