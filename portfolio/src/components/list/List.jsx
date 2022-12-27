import React from 'react'
import './List.css'
import ParticleBackground from 'react-particle-backgrounds';
import Cube from '../cube/Cube';

function List() {
    const settings = {
        canvas: {
          canvasFillSpace: true,
          width: 200,
          height: 200,
          useBouncyWalls: false
        },
        particle: {
          particleCount: 15,
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
          opacityTransitionTime: 8000
        }
    }

  return (
    <div className='listContainer'>
        <ParticleBackground settings={settings} className='particle'/>
        <div className='vrtLine'>

        </div>
        {/* <Cube className='firstCube'/> */}
        <figure className='firstCube'>
          <div class="face front">
            <div></div>
          </div>

          <div class="face top">
            <div></div>
          </div>
          
          <div class="face right">
            <div></div>
          </div>

          <div class="face left">
            <div></div>
          </div>

          <div class="face bottom">
            <div></div>
          </div>

          <div class="face back">
            <div></div>
          </div>
        </figure>
    </div>
  )
}

export default List