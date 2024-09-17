'use client';
import { Images } from '@prisma/client';
import { CldImage } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

interface ImageOptimizerProps {
  image: Images;
}

// Define valid transformation keys for type safety
type TransformationKey = 'cartoonify' | 'enhance' ;

const inputs = [
  { placeholder: 'Extract content from image' },
  { placeholder: 'Remove content from image' },
];

const buttons = [
  { title: 'Enhance' },
  { title: 'Cartoonify' },
];

const arts = [
  { art: 'eucalyptus' },
  { art: 'fes' },
  { art: 'hairspray' },
  { art: 'quartz' },
  { art: 'red_rock' },
  { art: 'sizzle' },
  { art: 'ukulele' },
];

const ImageOptimizer = ({ image }: ImageOptimizerProps) => {
  const [loading, setLoading] = useState(false);

  const [transformations, setTransformations] = useState({
    cartoonify: false,
    enhance: false,
    art: '',
  });

  const toggleTransformation = (key: TransformationKey) => {
    setLoading(true);
    setTransformations((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleArtSelection = (art: string) => {
    setLoading(true);
    setTransformations((prev) => ({
      ...prev,
      art,
    }));
  };

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 500);
      return(()=>clearTimeout(timeout))
    }
  }, [loading, transformations]);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-12">
        <div className="border-white border-2 rounded-md col-span-10">
          {loading ? (
            <Loader />
          ) : (
            <CldImage
              width={image.width}
              height={image.height}
              src={image.url}
              sizes="100vw"
              alt={image.name}
              className="rounded-md"
              {...transformations}
              priority
            />
          )}
        </div>

        <div className="col-span-2 flex flex-col justify-center gap-y-6 m-4">
          {inputs.map((input) => (
            <div key={input.placeholder}>
              <input
                type="text"
                placeholder={input.placeholder}
                className="input w-96 max-w-xs"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        {buttons.map((button) => (
          <div key={button.title}>
            <button
              className="btn btn-outline m-2 btn-warning"
              onClick={() => toggleTransformation(button.title.toLowerCase() as TransformationKey)}
            >
              {button.title}
            </button>
          </div>
        ))}

        <div className="dropdown dropdown-top mt-1">
          <div tabIndex={0} role="button" className="btn btn-warning m-1">
            Arts
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {arts.map((artItem) => (
              <li key={artItem.art}>
                <a
                  onClick={() => handleArtSelection(artItem.art)}
                  className={`cursor-pointer ${transformations.art === artItem.art ? 'bg-secondary' : ''
                    }`}
                >
                  {artItem.art}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageOptimizer;
