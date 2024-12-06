'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import React from 'react'

const images = [
  { src: '/gal-1.avif', width: 400, height: 300 },
  { src: '/gal-2.avif', width: 300, height: 400 },
  { src: '/gal-3.jpg', width: 400, height: 300 },
  { src: '/gal-4.jpg', width: 300, height: 400 },
  { src: '/gal-5.avif', width: 400, height: 300 },
  { src: '/gal-6.jpg', width: 300, height: 400 },
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




