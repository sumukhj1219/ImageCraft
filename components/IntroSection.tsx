'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { title: 'Photo Restoration', description: 'Bring old memories back to life', icon: '🖼️' },
  { title: 'Digital Art Creation', description: 'Transform photos into unique artworks', icon: '🎨' },
  { title: 'Image Enhancement', description: 'Perfect your photos with pro retouching', icon: '✨' },
]

import React from 'react'

const IntroSection = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-8 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Transforming Images into Art
    </motion.h2>
    <motion.p
      className="text-xl mb-12 text-blue-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      At Image Craft, we specialize in turning your ordinary photos into extraordinary works of art. 
      Our team of expert designers use cutting-edge techniques to enhance, manipulate, and reimagine your images.
    </motion.p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <Card className="bg-gradient-to-br from-blue-900 to-black border-blue-400 shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105 hover:-rotate-3">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl mb-4">{service.icon}</div>
              <p className="text-blue-200">{service.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default IntroSection


