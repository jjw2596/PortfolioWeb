import React from 'react';
import './Intro.css';
import ParticleBackground from 'react-particle-backgrounds';
import {TypeAnimation} from 'react-type-animation';


function Intro() {
    const settings = {
        canvas: {
          canvasFillSpace: true,
          width: 200,
          height: 200,
          useBouncyWalls: false
        },
        particle: {
          particleCount: 50,
          color: '#fff',
          minSize: 2,
          maxSize: 10
        },
        velocity: {
          directionAngle: 0,
          directionAngleVariance: 360,
          minSpeed: 0.01,
          maxSpeed: 0.03
        },
        opacity: {
          minOpacity: 0,
          maxOpacity: 0.5,
          opacityTransitionTime: 30000
        }
      }
    
  return (
    <>
    <div className='container'>
        <ParticleBackground settings={settings} className='particle'/>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
          'We produce food for Mice',
          1000,
          'We produce food for Hamsters',
          1000,
          'We produce food for Guinea Pigs',
          1000,
          'We produce food for Chinchillas',
          1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '2em' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          className='Typing'
        />
    </div>
    </>
  )
}

export default Intro