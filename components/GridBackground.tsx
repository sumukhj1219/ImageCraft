import React from 'react'

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-950" />
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:2rem_2rem]"
      style={{
        maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
      }}
    />
  </div>
  )
}

export default GridBackground
