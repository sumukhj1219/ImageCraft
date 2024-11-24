'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import React from 'react'

const images = [
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796573/samples/woman-on-a-football-field.jpg', width: 400, height: 300 },
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796554/samples/food/spices.jpg', width: 300, height: 400 },
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796551/samples/landscapes/beach-boat.jpg', width: 400, height: 300 },
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796555/samples/landscapes/nature-mountains.jpg', width: 300, height: 400 },
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796572/samples/dessert-on-a-plate.jpg', width: 400, height: 300 },
  { src: 'https://res.cloudinary.com/dijepfvkc/image/upload/v1699796571/samples/man-on-a-street.jpg', width: 300, height: 400 },
]



const GallerySection = () => {

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Best Work</h2>
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 border-white">
      {images.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={`Gallery image ${index + 1}`}
            width={img.width}
            height={img.height}
            className=" md:m-3 m-2  border-slate-100 bg-origin-content p-4 border-8"
          />
      ))}
    </div>
  </section>
  )
}

export default GallerySection




