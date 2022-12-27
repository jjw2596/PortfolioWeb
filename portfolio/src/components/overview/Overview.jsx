import React, {useState} from 'react';
import './Overview.css';
import ParticleBackground from 'react-particle-backgrounds';
import { Link } from 'react-router-dom';
import Jump from 'react-reveal/Jump';
import Cube from '../cube/Cube';

function Overview() {
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

  const [isHovering, setIsHovering] = useState(0);

  return (
    <div className='overviewContainer'>
      <ParticleBackground settings={settings} className='particle'/>
      <div className='overviewTxt'>
        <p>
          <text className='underline'>"노력은 배신하지 않는다"</text>는 말을 좋아합니다. 꾸준한 노력은 <text className='underline'>발전</text>을 가져다주기 때문입니다.<br/>
          카페에서 아르바이트 하는 1년 8개월 동안 누구의 도움없이 <text className='underline'>매일</text> "Latte Art"를 연습했고<br/>
          나날이 실력은 발전해 예쁜 라떼를 만들 수 있게 되었습니다.<br/>
          노력을 통한 <text className='underline'>성공을 경험</text>해 봤습니다.<br/>
          멈추지 않는 노력으로 <text className='big'>끊임없이 발전하는</text> 개발자가 되겠습니다.
        </p>
      </div>
      <div className='imgContainer'>

      </div>
      <Link to="/List" className='nextBtn' onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
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

export default Overview