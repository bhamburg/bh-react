import React from 'react'
import Section from '../components/Section'
import gamingBg from '../assets/x-hadouken-dark.jpg'

const EtcSection = props => {
  return (
    <Section
      id="etc"
      background={gamingBg}
      sectionTitle="Et Cetera"
      sectionTagline="Random Acts of Nerdery"
      className="dark full"
      style={{backgroundPosition: 'right'}}
    >
      <p>
        When I’m not wrangling websites or strumming the old four-string, my other hobbies include reading about tech and philosophy, rooting for the Phillies and Eagles, and playing and collecting classic and modern video games on my various original consoles and custom-built gaming PC.
      </p>
      <p>
        I’ve become a bit of a retro gaming connoisseur over the past few years while rebuilding my library of cartridges and enjoying them in the highest fidelity possible. My tastes gravitate towards games from and inspired by the 8- and 16-bit “golden age” of pixel art. Kids can keep their Fortnite and Overwatch. Give me the “<abbr title="Nintendo Entertainment System">NES</abbr> Hard” platformers, run-and-guns, and <abbr title="role-playing games">RPGs</abbr>. If anyone wants to chat about <abbr title="professional video monitor">PVM</abbr> <abbr title="cathode-ray tube">CRT</abbr> scan lines in 240p <abbr title="red-green-blue additive color model">RGB</abbr>, 1CHIP <abbr title="Super Nintendo Entertainment System">SNES</abbr> models, or the latest advances in <abbr title="field-programmable gate array">FPGA</abbr>-based systems with near-perfect accuracy and zero-to-low input latency, hit me up.
      </p>
      <p>
        Check out what I’ve been reading and playing lately.
      </p>
    </Section>
  )
}

export default EtcSection
