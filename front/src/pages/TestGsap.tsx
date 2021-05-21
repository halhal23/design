import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TestGsap: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setAnimation()
  }, [])
  const setAnimation = (): void => {
    gsap.fromTo(
      '#wrapper-a p',
      { opacity: 0, y: 20, x: 20 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#wrapper-a',
        },
      }
    )
  }

  return (
    <>
      <div style={{ background: 'gray', height: '1000px' }}></div>
      <div className="wrapper" id="wrapper-a" style={{ color: 'tomato' }}>
        <p>TEST ANIMATION</p>
      </div>
      <div style={{ background: 'gray', height: '1000px' }}></div>
    </>
  )
}

export default TestGsap
