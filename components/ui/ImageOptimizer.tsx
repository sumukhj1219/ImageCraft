'use client';
import { Images } from '@prisma/client';
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

interface ImageOptimizerProps {
  image: Images;
}

const inputs = [
  { placeholder: 'Extract content from image' },
  { placeholder: 'Remove content from image' },
];

const buttons = [
  { title: 'Enhance' },
  { title: 'Cartoonify' },
  { title: 'Shadows' },
  { title: 'Blur' },
  { title: 'Fill' },
];

const arts = [
  { art: 'al_dente' },
  { art: 'athena' },
  { art: 'audrey' },
  { art: 'aurora' },
  { art: 'daguerre' },
  { art: 'eucalyptus' },
  { art: 'fes' },
  { art: 'frost' },
  { art: 'hairspray' },
  { art: 'hokusai' },
  { art: 'incognito' },
  { art: 'linen' },
  { art: 'peacock' },
  { art: 'primavera' },
  { art: 'quartz' },
  { art: 'red_rock' },
  { art: 'refresh' },
  { art: 'sizzle' },
  { art: 'sonnet' },
  { art: 'ukulele' },
  { art: 'zorro' },
];

const ImageOptimizer = ({ image }: ImageOptimizerProps) => {
  const [cartoonify, setCartoonify] = useState(false);
  const [blur, setBlur] = useState(false);
  const [enhance, setEnhance] = useState(false);
  const [shadows, setShadows] = useState(false);
  const [fill, setFill] = useState(false);
  const [art, setArt] = useState('');

  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-12">
        <div className="border-white border-2 rounded-md col-span-10">
          <CldImage
            width={image.width}
            height={image.height}
            src={image.public_id}
            sizes="100vw"
            alt={image.name}
            className="rounded-md"
            cartoonify={cartoonify}
            shadow={shadows}
            blur={blur}
            fill={fill}
            enhance={enhance}
            art={art} // Add art selection if relevant to transformations
            loading="eager"
            priority
          />
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
              onClick={() => {
                switch (button.title) {
                  case 'Cartoonify':
                    setCartoonify(!cartoonify);
                    break;
                  case 'Fill':
                    setFill(!fill);
                    break;
                  case 'Shadows':
                    setShadows(!shadows);
                    break;
                  case 'Enhance':
                    setEnhance(!enhance);
                    break;
                  case 'Blur':
                    setBlur(!blur);
                    break;
                  default:
                    break;
                }
              }}
            >
              {button.title}
            </button>
          </div>
        ))}

        <div className="dropdown dropdown-right mt-1">
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
                  onClick={() => setArt(artItem.art)}
                  className={`cursor-pointer ${
                    art === artItem.art ? 'bg-secondary' : ''
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
