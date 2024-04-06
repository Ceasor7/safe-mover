'use client';
import Link from 'next/link';
import { useState } from 'react';

const images = [
  {
    src: '/auto-image-carousel1.jpg',
    number1: '1',
    number2: '11',
    title: 'Residential House Movers in Kenya',
    description:
      'Move house to all parts of Kenya such as Kisumu, Diani, Nakuru, Nanyuki, Mombasa, Naivasha, and Malindi',
    link: '/residential',
  },
  {
    src: '/carousel1.jpg',
    number1: '2',
    number2: '11',
    title: 'International Movers in Kenya',
    description:
      'Enjoy door-to-door services from Kenya to any destination worldwide',
    link: '/international-movers',
  },
  {
    src: '/international-movers-banner.jpg',
    number1: '3',
    number2: '11',
    title: 'Corporates and office Movers in Kenya',
    description: 'Move office with minimal downtime to your business',
    link: '/coorporate-movers',
  },
  {
    src: '/services-carousel4.jpg',
    number1: '4',
    number2: '11',
    title: 'Top Cross-Border Movers in East Africa',
    description:
      'Move within East Africa and beyond quickly, safely, and reliably',
    link: '/cross-border-moving',
  },
  {
    src: '/international-movers-banner.jpg',
    number1: '5',
    number2: '11',
    title: 'Storage Service in Kenya',
    description:
      'Get a clean and secure storage unit for household goods in Nairobi',
    link: '/storage',
  },
  {
    src: '/residential-movers-banner.jpg',
    number1: '6',
    number2: '11',
    title: 'Machinery Mover in Kenya',
    description:
      'A Specialized service for moving industrial and heavy office equipment',
    link: '/machinery-moving',
  },
  {
    src: '/auto-image-carousel.jpg',
    number1: '7',
    number2: '11',
    title: 'Furniture Installation & Assembly Service in Kenya',
    description: 'We assemble and set up all your modular furniture',
    link: '/residential',
  },
  {
    src: '/storageImage2.jpg',
    number1: '8',
    number2: '11',
    title: 'Packing & Moving Carton Boxes for Sale in Kenya',
    description:
      'High quality Branded, Moving Boxes in different sizes available for purchase. Suitable for all types of moves including DIY moves and packing for storage',
    link: '/safe-movers-shop',
  },
  {
    src: '/auto-image-carousel1.jpg',
    number1: '9',
    number2: '11',
    title: 'Vehicle Relocation in Kenya',
    description: 'We help you take your vehicle with you to your new county',
    link: '/auto-relocation-service',
  },
  {
    src: '/storageImage3.jpg',
    number1: '10',
    number2: '11',
    title: 'Destinations Service in Kenya',
    description:
      'Settle into Kenya seamlessly with the only IAM-Trusted Moving Company partner in Kenya',
    link: '/destination-services-in-kenya',
  },
  {
    src: '/storageImage2.jpg',
    number1: '11',
    number2: '11',
    title: 'Fine Art Movers in Kenya',
    description: 'Specialized handling of all your priceless art pieces',
    link: '/fine-art-moving',
  },
];

const ServicesCarousel = () => {
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
    <div className="flex flex-col sm:flex-row bg-[#570598] py-10">
      <div className="sm:w-1/2 relative mx-5 sm:mx-24 mb-5">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        <div className="flex flex-row absolute bottom-0 left-0">
          <button
            onClick={handlePrevious}
            className="bg-[#570987] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-4"
          >
            <img
              src="/previous-pic.png"
              alt="Previous Image"
              className="h-7 w-7"
            />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#570987] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-4"
          >
            <img src="/next-pic.png" alt="Next Image" className="h-7 w-7" />
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 flex mx-5 sm:mx-24 flex-col px-4">
        <div className="flex flex-row my-4">
          <p className="text-xl text-white font-bold">
            {images[currentIndex].number1}
          </p>
          <p className="text-2xl text-white font-bold">/</p>
          <p className="text-7xl text-white font-bold">
            {images[currentIndex].number2}
          </p>
        </div>
        <p className="text-white text-2xl my-3 sm:text-4xl font-bold">
          {images[currentIndex].title}
        </p>
        <p className="text-white my-3">{images[currentIndex].description}</p>
        <Link
          href={images[currentIndex].link}
          className="bg-gray-300 rounded-full my-3 border-[#FF8A8A] border-2 w-48 px-7 py-4 font-bold"
        >
          {' '}
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServicesCarousel;
