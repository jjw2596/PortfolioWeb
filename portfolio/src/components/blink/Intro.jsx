import React, { useState } from 'react';
import './Intro.css';
import ParticleBackground from 'react-particle-backgrounds';
import {TypeAnimation} from 'react-type-animation';
import { Link } from 'react-router-dom';
import Jump from 'react-reveal/Jump';
import Cube from '../cube/Cube';


function Intro() {
    const settings = {
        canvas: {
          canvasFillSpace: true,
          width: 200,
          height: 200,
          useBouncyWalls: false
        },
        particle: {
          particleCount: 55,
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
    
    const [isHovering, setIsHovering] = useState(0);
    
  return (
    <div className='introContainer'>
        <ParticleBackground settings={settings} className='particle'/>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
          '',
          1500,
          '배우는 걸 두려워하지 않고\n멈추지 않는 노력으로 끝까지 해내는\nFront-end Developer\n전종원 입니다.',
          4000,
          // '멈추지 않는 노력으로 끝까지 해내는',
          // 1500,
          // 'Front-end Developer',
          // 1000,
          // '전종원 입니다.',
          // 2000,
          ]}
          speed={5} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '4em' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          className='Typing'
        />
        
        <Link to="Overview" className='nextBtn' onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
          <Cube className='cube'/>
          {/* <figure className='cube'>
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
        </figure> */}
          {isHovering ? (<Jump>Click</Jump>) : ("Click")}
           
        </Link>
    </div>
  )
}

export default Intro