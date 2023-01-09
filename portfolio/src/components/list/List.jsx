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
        <div className='listItem1'>
          <div className='vrtLine1'></div>
          {/* <Cube className='firstCube'/> */}
          <div className='fixedCube'>
            <figure className='cube1'>
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
          <div className='projectName'>Project1</div>
        </div>
        <div className='listItem2'>
          <div className='vrtLine2'></div>
          {/* <Cube className='firstCube'/> */}
          <div className='fixedCube'>
            <figure className='cube2'>
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
          <div className='projectName'>Project2</div>
        </div>
        <div className='listItem3'>
          <div className='vrtLine3'></div>
          {/* <Cube className='firstCube'/> */}
          <div className='fixedCube'>
            <figure className='cube3'>
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
          <div className='projectName'>Project3</div>
        </div>
        <div className='listItem4'>
          <div className='vrtLine4'></div>
          {/* <Cube className='firstCube'/> */}
          <div className='fixedCube'>
            <figure className='cube4'>
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
          <div className='projectName'>Project4</div>
        </div>
        <div className='listItem5'>
          <div className='vrtLine5'></div>
          {/* <Cube className='firstCube'/> */}
          <div className='fixedCube'>
            <figure className='cube5'>
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
          <div className='projectName'>Project5</div>
        </div>
        
    </div>
  )
}

export default List