import React, { Component } from 'react'
import {
    HeroSection,
    AboutSection,
    WorkSection,
    MusicSection,
    ReadingSection,
    GamingSection,
    ContactSection,
    FooterSection
  } from './sections'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faChevronDown, 
  faUser, 
  faBriefcase,
  faMusic,
  faBookOpen,
  faGamepad } from '@fortawesome/free-solid-svg-icons'
import xml2js from 'xml2js'

const GOODREADS_API = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/4284038.xml?key=WtRxj0qGSLZH6RXaR3BRg&v=2"
let parser = new xml2js.Parser()
 
library.add(
  fab, 
  faEnvelope, 
  faChevronDown, 
  faUser, 
  faBriefcase,
  faMusic,
  faBookOpen,
  faGamepad
)

class App extends Component {

  componentDidMount() {
    this.setState({ isLoadingGoodreads: true });

    // fetch books currently reading
    fetch(GOODREADS_API + "&shelf=currently-reading")
      .then(response => {
        if (response.ok) {
          parser.parseString(response.body, function(err, result) {
            console.dir(result);
            console.log(response.body)
          });
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .catch(error => this.setState({ error, isLoadingGoodreads: false }));
  }

  render() {
    return (
      <div className="App">
        <HeroSection/>
        <AboutSection/>
        <WorkSection/>
        <MusicSection/>
        <ReadingSection/>
        <GamingSection/>
        <ContactSection/>
        <FooterSection/>
      </div>
    )
  }
}

export default App
