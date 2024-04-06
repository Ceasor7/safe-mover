'use client';
import { useState } from 'react';

const images = [
  {
    src: '/carousel1.jpg',
    number1: '1',
    number2: '3',
    title: 'Confidential',
    description:
      'We invest in training our staff so you can expect the worlds best at your  doorstep on moving day.',
  },
  {
    src: '/carousel2.jpg',
    number1: '2',
    number2: '3',
    title: 'Credible',
    description:
      'We dont see, We dont hear, we dont say. Meaning that details of your household -from your belonging to your affairs will never be shared outside the function of our role.',
  },
  {
    src: '/carousel3.jpg',
    number1: '3',
    number2: '3',
    title: 'Competent',
    description:
      'We are experts at what we do, and will go the extra miles to meet the needs of your move.',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col sm:flex-row bg-[#00008B] py-10">
      <div className="sm:w-1/2 relative mx-5 sm:mx-24 mb-5">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        <div className="flex flex-row absolute bottom-0 left-0">
          <button
            onClick={handlePrevious}
            className="bg-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-4"
          >
            <img
              src="/previous-pic.png"
              alt="Previous Image"
              className="h-7 w-7"
            />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-4"
          >
            <img src="/next-pic.png" alt="Next Image" className="h-7 w-7" />
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 flex mx-5 sm:mx-24 justify-center items-center flex-col px-4">
        <div className="flex flex-row">
          <p className="text-xl text-white font-bold">
            {images[currentIndex].number1}
          </p>
          <p className="text-2xl text-white font-bold">/</p>
          <p className="text-7xl text-white font-bold">
            {images[currentIndex].number2}
          </p>
        </div>
        <p className="text-white text-2xl sm:text-4xl font-bold">
          {images[currentIndex].title}
        </p>
        <p className="text-white">{images[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default ImageCarousel;
