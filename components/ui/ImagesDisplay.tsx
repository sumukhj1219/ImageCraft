import { Images } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImageProps {
  images: Images[];
}

const ImagesDisplay = ({ images }: ImageProps) => {
  if (images.length === 0) {
    return (
      <div className='flex items-center justify-center mx-auto'>
        <Image 
          className='grayscale'
          src={'/cart.png'}
          alt='not found'
          width={300}
          height={300}
        />
      </div>
    );
  }
  return (
    <div className='grid grid-cols-3 gap-0'>
      {images.map((image) => (
        <div key={image.id} className='relative w-150 m-2'>
          <Link href={`/image-optimize/${image.id}`}>
            <Image
              width={image.width}
              height={image.height}
              src={image.url}
              alt={image.name}
              loading='eager'
              className="hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full border-white border-2 rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImagesDisplay;
