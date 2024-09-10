import { Images } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface ImageProps{
    images:Images[]
}

const ImagesDisplay = ({images}:ImageProps) => {
  if(images.length === 0)
  {
    return (
        <div className='flex items-center justify-center mx-auto '>
        <Image 
        className='grayscale'
        src={'/cart.png'}
        alt='not found'
        width={300}
        height={300}
        />
      </div>
    )
  }
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
