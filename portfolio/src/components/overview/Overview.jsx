import React from 'react';
import './Overview.css';
import ParticleBackground from 'react-particle-backgrounds';

function Overview() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 25,
      color: '#fff',
      minSize: 2,
      maxSize: 10
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0,
      maxSpeed: 0.001
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.8,
      opacityTransitionTime: 30000
    }
  }
  return (
    <div className='container'>
      <ParticleBackground settings={settings} className='particle'/>
        
    </div>
  )
}

export default Overview