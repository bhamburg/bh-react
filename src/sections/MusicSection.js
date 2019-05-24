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
      className="full"
    >
      <div className="video-container">
        <iframe title="Brian Plays Banjo" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLA4A315D315FAFD4F" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <p>
        It all started when my father asked me to join the newly formed Irish American String Band, to take tenor banjo lessons with him, and to participate in the Philadelphia Mummers Parade for the year 2000. More than twenty years later, the banjo has taken me places that I never thought possible.
      </p>
      <p>
        My main instrument is now the four-string plectrum banjo, which I play as a member of the Fralinger String Band and several traditional jazz and Dixieland bands when the opportunities arise. With the Fralinger band, we’ve literally traveled around the world, performing in myriad parades and festivals including the International Chinese New Year Parade in Hong Kong and the Mardi Gras parades in New Orleans. As a member of Fralinger since April of 2001, I was fortunate enough to be a part of our record-setting, eight-consecutive Mummers Parade championships. It's an honor to perform with such talented musicians and represent the United States and the City of Philadelphia while entertaining people with this traditional American instrument.
      </p>
      <p>
        Visit <a href="http://fralinger.org/" target="_blank" rel="noopener noreferrer">Fralinger.org</a> for more information about Fralinger and the   Philadelphia Mummers.
      </p>
    </Section>
  )
}

export default MusicSection
