import React, { useState } from 'react'

function Logo3DCHover () {
  const [isShown, setIsShown] = useState(false)

  const animationDuration = '550ms'
  const animationTimingFunction = 'ease-in-out'
  const sxHover = {
    opacity: isShown ? 1 : 0,
    transition: `opacity ${animationDuration} ${animationTimingFunction}`,
    width:'60em'
    /* Other styles for the component go here */
  }
  return (
    <>
    
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1024 560'
        fill='none'
        style={sxHover}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        
      </svg>
    </>
  )
}

export default Logo3DCHover
