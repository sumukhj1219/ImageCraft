import { Images } from '@prisma/client'
import React from 'react'

interface ImageProps{
    images:Images[]
}

const ImagesDisplay = ({images}:ImageProps) => {
  return (
    <div>
      {images.map((image)=>(
        <div key={image.id} className="card rounded-md bg-base-100 w-80 shadow-xl m-2">
      <figure>
        <img
          width="fit"
          height={150}
          src={image.url}
          alt={image.name} 
          className="hover:scale-125 transition-transform duration-1000 ease-in-out"
          />
      </figure>
    </div>
      ))}
    </div>
  )
}

export default ImagesDisplay
