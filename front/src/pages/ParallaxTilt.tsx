import React from 'react'
import Tilt from 'react-parallax-tilt'

const ParallaxTilt: React.FC = () => {
  const wrapperStyle = {
    height: '500px',
    width: '900px',
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div>
      <Tilt tiltReverse>
        <div style={wrapperStyle}>
          <Tilt>
            <div
              style={{
                height: '200px',
                width: '300px',
                background: 'skyblue',
              }}>
              <h1>pararax tilt</h1>
            </div>
          </Tilt>
        </div>
      </Tilt>
    </div>
  )
}

export default ParallaxTilt
