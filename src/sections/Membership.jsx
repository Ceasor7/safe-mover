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
    <div className="relative flex items-center justify-center overflow-x-hidden">
      <div
        className="flex py-10 space-x-1 sm:space-x-9"
        style={{ transition: 'transform 0.5s ease' }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-32 h-32`}
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
      {/* Opacity layers */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default function Membership() {
  const companyLogos = [
    '/bar.webp',
    '/iam.webp',
    '/iam1.webp',
    '/kncci.webp',
    '/bar.webp',
    '/iam.webp',
    '/iam1.webp',
    '/kncci.webp',
  ];
  return (
    <div className="mt-5 mx-5 py-10">
      <h3 className="my-4 font-bold text-4xl tracking-widest text-center">
        Membership
      </h3>
      <div>
        <LogoCarousel logos={companyLogos} />
      </div>
    </div>
  );
}
