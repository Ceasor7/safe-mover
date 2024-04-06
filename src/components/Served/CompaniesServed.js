'use client';
import { useEffect, useState } from 'react';

const LogoCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="flex items-center justify-between overflow-x-hidden ">
      <div className="flex py-4 space-x-1 sm:space-x-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-24 h-24`}
            style={{
              transform: `translateX(${-(currentIndex - index) * 100}%)`,
            }}
          >
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CompaniesServed() {
  const companyLogos = [
    '/botswana-high-commision.webp',
    '/ntsa.webp',
    '/optica.webp',
    '/client12.webp',
    '/ccbk.webp',
    '/dstv.webp',
    '/foodforthehungry.webp',
    '/kfc.webp',
  ];
  return (
    <div className="flex mt-5 mx-5 sm:mx-24 flex-col sm:flex-row">
      <div className="sm:w-1/3 flex justify-center items-center text-center">
        <p>
          We have Served over
          <br />
          <span className="text-[#00008B] sm:text-4xl text-2xl font-bold">
            200
          </span>{' '}
          <span className="sm:text-4xl text-2xl font-bold">Companies</span>
        </p>
      </div>
      <div className="sm:w-2/3 ">
        <LogoCarousel logos={companyLogos} />
      </div>
    </div>
  );
}
