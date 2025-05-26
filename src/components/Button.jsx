import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import '../styles/App.css'

function Button({ label, onClick, backgroundColor, className, style }) {
  const [springProps, api] = useSpring(() => ({
    opacity: 1,
    config: { tension: 300, friction: 20 },
  }))

  const handleMouseEnter = () => {
    api.start({ opacity: 0.9 })
  }

  const handleMouseLeave = () => {
    api.start({ opacity: 1 })
  }

  return (
    <animated.button
      className={`button ${className || ''}`}
      onClick={onClick}
      style={{
        backgroundColor,
        ...style,
        opacity: springProps.opacity,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </animated.button>
  )
}

export default Button
