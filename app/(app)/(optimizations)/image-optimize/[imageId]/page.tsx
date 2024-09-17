'use server'
import ImageOptimizer from '@/components/ui/ImageOptimizer'
import prisma from '@/utils/db'
import { Images } from '@prisma/client'
import React from 'react'

interface ImageOptimizeProps{
    params:{
        imageId:string
    }
}

const ImageOptimize = async({params}:ImageOptimizeProps) => {
  const image:any = await prisma.images.findUnique({
    where:{
        id:params.imageId
    }
  })
  return (
    <div className='mt-14 max-w-3xl'>
      <ImageOptimizer image={image}/>
    </div>
  )
}

export default ImageOptimize
