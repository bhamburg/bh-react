import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap'
import logo from '../assets/bb.svg'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar dark expand="lg">
        <NavbarBrand href="/" className="logo">
          <img src={logo} alt="burgbits logo" style={{height: 33, width: 33}} />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <div className="subrow">
            <NavItem>
              <Link className="nav-link" href="#about" to="about" title="about Brian" smooth={true}>
                <FontAwesomeIcon icon={'user'} />
                <span>About</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" href="#work" to="work" title="work" smooth={true}>
                <FontAwesomeIcon icon={'briefcase'} />
                <span>Work</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" href="#music" to="music" title="music" smooth={true}>
              <FontAwesomeIcon icon={'music'} />
                <span>Music</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" href="#reading" to="reading" title="reading list" smooth={true}>
                <span>Reading</span>
                <FontAwesomeIcon icon={'book-open'} />
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" href="#gaming" to="gaming" title="gaming" smooth={true}>
                <span>Gaming</span>
                <FontAwesomeIcon icon={'gamepad'} />
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" href="#contact" to="contact" smooth={true}>
                <span>Contact</span>
                <FontAwesomeIcon icon={'envelope'} />
              </Link>
            </NavItem>
          </div>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation
