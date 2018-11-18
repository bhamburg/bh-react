import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

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
        <NavbarBrand href="/" className="logo">bh</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" href="#about" to="about" smooth={true}>About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"href="#work" to="work" smooth={true}>Work</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"href="#music" to="music" smooth={true}>Music</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"href="#etc" to="etc" smooth={true}>Etc.</Link>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="mailto:bhamburg@gmail.com">
                <FontAwesomeIcon icon={'envelope'}/>
                <span>Email</span>
              </a>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/bhamburg">
                <FontAwesomeIcon icon={['fab', 'github']}/>
                <span>Github</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/burgbits">
                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                <span>Twitter</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://instagram.com/burgbits">
                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                <span>Instagram</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation
