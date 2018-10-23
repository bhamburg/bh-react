import React, { Component } from 'react'
import {
    HeroSection,
    AboutSection,
    WorkSection,
    MusicSection,
    EtcSection,
    ContactSection,
    FooterSection
  } from './sections'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faEnvelope, faChevronDown, faHeart)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection/>
        <AboutSection/>
        <WorkSection/>
        <MusicSection/>
        <EtcSection/>
        <ContactSection/>
        <FooterSection/>
      </div>
    )
  }
}

export default App
