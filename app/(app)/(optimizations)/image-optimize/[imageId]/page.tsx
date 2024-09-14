'use server'
import prisma from '@/utils/db'
import Image from 'next/image'
import React from 'react'

interface ImageOptimizeProps{
    params:{
        imageId:string
    }
}

const ImageOptimize = async({params}:ImageOptimizeProps) => {
  const image = await prisma.images.findUnique({
    where:{
        id:params.imageId
    }
  })
  return (
    <div className='mt-14 max-w-3xl'>
      <Image 
      src={image?.url}
      width={image?.width}
      height={image?.height}
      alt={image?.name}
      
      />
    </div>
  )
}

export default ImageOptimize
