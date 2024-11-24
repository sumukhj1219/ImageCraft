'use client';

import { Images } from '@prisma/client';
import { CldImage } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

interface ImageOptimizerProps {
  image: Images;
}

type TransformationKey = 'cartoonify' | 'enhance';

const buttons = [
  { title: 'Enhance', key: 'enhance' },
  { title: 'Cartoonify', key: 'cartoonify' },
];

const arts = [
  'eucalyptus',
  'fes',
  'hairspray',
  'quartz',
  'red_rock',
  'sizzle',
  'ukulele',
];

const ImageOptimizer = ({ image }: ImageOptimizerProps) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
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
      return () => clearTimeout(timeout);
    }
  }, [loading, transformations]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center gap-4">
          <div className="border-2 border-gray-300 border-dashed rounded-md p-4 w-full max-w-xl">
            {loading ? (
              <Loader />
            ) : (
              <CldImage
                width={600} 
                height={600}
                src={image.url}
                sizes="100vw"
                alt={image.name}
                className="rounded-md w-full h-auto"
                {...transformations}
                priority
                extract={content}
              />
            )}
          </div>
          <div className="w-full max-w-xl">
            <label className="block text-sm text-gray-600 mb-1">
              Specify content to extract:
            </label>
            <input
              type="text"
              placeholder="Extract the content"
              className="input input-bordered w-full"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-muted">Transformations:</span>
            {buttons.map((button) => (
              <button
                key={button.key}
                className={`btn btn-outline ${transformations[button.key as TransformationKey] ? 'btn-active' : ''
                  }`}
                onClick={() => toggleTransformation(button.key as TransformationKey)}
              >
                {button.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold text-muted">Select Art Style:</span>
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-outline dropdown-toggle"
              >
                Arts
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box shadow-lg bg-base-100 w-52 p-2"
              >
                {arts.map((art) => (
                  <li key={art}>
                    <button
                      className={`w-full text-left px-4 py-2 ${transformations.art === art ? 'bg-gray-300' : ''
                        }`}
                      onClick={() => handleArtSelection(art)}
                    >
                      {art}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOptimizer;
