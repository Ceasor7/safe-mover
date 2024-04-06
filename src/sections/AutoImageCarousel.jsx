'use client';
import { useEffect, useState } from 'react';

const images = [
  {
    src: '/auto-image-carousel.jpg',
    year: '2016',
    description:
      'Had a humbling experience  after being awarded the job of handling Pope Francis personal effects after he visited Kenya',
  },
  {
    src: '/auto-image-carousel1.jpg',
    year: '2014',
    description:
      'Executed what remains to date as the biggest  corporates move ever done in Kenya',
  },
];

const AutoImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/2 px-4 sm:mt-44 mx-5 sm:mx-24">
        <p className="text-[#00008B] tracking-wider my-2 font-bold text-4xl">
          {images[currentIndex].year}
        </p>
        <p className="text-[#00008B]">{images[currentIndex].description}</p>
      </div>
      <div className="sm:w-1/2 mx-5 sm:mx-24 mt-4 sm:mt-0">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AutoImageCarousel;
