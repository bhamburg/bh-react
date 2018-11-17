import React from 'react'
import Section from '../components/Section'
import musicBg from '../assets/banjo-nursery-light-blur.jpg'

const MusicSection = props => {
  return (
    <Section
      id="music"
      background={musicBg}
      sectionTitle="Music"
      sectionTagline="Strummin’ &amp; Mummin’"
    >
      <iframe title="Brian Plays Banjo" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLA4A315D315FAFD4F" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <iframe title="Brian's Mummers Career" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLAB88B51FC86630CB" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </Section>
  )
}

export default MusicSection
