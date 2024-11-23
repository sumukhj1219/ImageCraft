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
      <div className="flex items-center justify-center mx-auto">
        <Image 
          className="grayscale"
          src={'/cart.png'}
          alt="not found"
          width={300}
          height={300}
        />
      </div>
    );
  }
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((image) => (
        <div key={image.id} className="relative w-full break-inside-avoid overflow-visible">
          <Link href={`/image-optimize/${image.id}`} 
          aria-label={`View image uploaded by ${image.uploadedById}`}
          >
         
            <Image
              width={image.width}
              height={image.height}
              src={image.url}
              alt={image.name}
              loading="eager"
              className="hover:scale-105 relative transition-transform duration-500 ease-in-out object-cover w-full h-auto rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImagesDisplay;
