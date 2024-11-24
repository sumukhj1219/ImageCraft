'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-0">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="relative inline-block">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-white">
              Image Craft
            </span>
            <motion.span
              className="absolute -inset-2 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 blur-2xl opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 0.4, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* Animated Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 border-4 border-blue-500 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              boxShadow: '0 0 15px #3b82f6, 0 0 30px #3b82f6, inset 0 0 15px #3b82f6',
            }}
          />
          <motion.div
            className="absolute w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-purple-500 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -360 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            style={{
              boxShadow: '0 0 15px #8b5cf6, 0 0 30px #8b5cf6, inset 0 0 15px #8b5cf6',
            }}
          />
          <motion.div
            className="absolute w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 border-4 border-blue-400 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
            style={{
              boxShadow: '0 0 15px #60a5fa, 0 0 30px #60a5fa, inset 0 0 15px #60a5fa',
            }}
          />
        </div>
      </section>

      {/* Get Started Button */}
      <div className="flex justify-center">
        <span className="border-b-4 border border-sky-500 rounded-xl font-extrabold p-3 md:p-4 md:text-2xl text-lg bg-transparent">
          <Link href='/dashboard' className="text-white flex items-center">
            Get Started <ArrowRight className="mt-1 ml-2" />
          </Link>
        </span>
      </div>
    </>
  );
}
