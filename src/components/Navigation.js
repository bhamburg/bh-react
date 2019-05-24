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
      <Navbar dark expand="lg" style={{borderBottom: '1px rgba(255, 255, 255, 0.5) solid'}}>
        <NavbarBrand href="/" className="logo">bh</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <div className="subrow">
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
            </div>
            <div className="subrow">
            <NavItem>
              <a className="nav-link" href="https://www.linkedin.com/in/brianhamburg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <span>Email</span>
              </a>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/bhamburg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} />
                <span>Github</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/burgbits" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                <span>Twitter</span>
              </NavLink>
            </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation
