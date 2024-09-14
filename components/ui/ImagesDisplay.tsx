import { Images } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className='-z-20 grid grid-cols-3'>
      {images.map((image)=>(
        <div key={image.id} className="card-side rounded-md shadow-xl m-1">
      <figure>
        <Link href={`/image-optimize/${image.id}`}>
        <img
          width={image.width}
          height={image.height}
          src={image.url}
          alt={image.name} 
          className="hover:scale-125 transition-transform duration-1000 ease-in-out"
          />
        </Link>
      </figure>
    </div>
      ))}
    </div>
  )
}

export default ImagesDisplay
