import React, { Component } from 'react'
import Section from './Section.js'
import './App.css'
import heroBg from './assets/philly1927-dark.jpg'
import aboutBg from './assets/philly1927-dark.jpg'
import workBg from './assets/center-city-dark.jpg'
import musicBg from './assets/banjo-nursery-light-blur.jpg'
import gamingBg from './assets/x-hadouken-dark.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section elementType='header' id='hero' background={heroBg}>
          <p>This is the hero section.</p>
        </Section>
        <Section id='about' background={aboutBg}>
          <p>This is a regular section.</p>
        </Section>
        <Section id='work' background={workBg}>
          <p>This is a regular section.</p>
        </Section>
        <Section id='music' background={musicBg}>
          <p>This is a regular section.</p>
        </Section>
        <Section id='etc' background={gamingBg}>
          <p>This is a regular section.</p>
        </Section>
        <Section elementType='footer' id='footer'>
          <p>This is the footer section.</p>
        </Section>
      </div>
    )
  }
}

export default App
