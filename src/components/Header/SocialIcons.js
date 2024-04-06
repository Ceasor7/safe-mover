'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhoneVolume } from 'react-icons/fa6';
import { SocialIcon } from 'react-social-icons';

export default function SocialIcons() {
  return (
    <header className="p-3 flex items-start justify-between sm:mx-20 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row"
      >
        <SocialIcon
          url="https://twitter.com/"
          fgColor="#570987"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/"
          fgColor="#570987"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook/"
          fgColor="#570987"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor="#570987"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div className="hidden sm:inline-flex flex-row border rounded-2xl border-[#570987] p-2">
        <div className="flex justify-center mt-1">
          <FaPhoneVolume fill="#570987" />
        </div>
        <span className="text-[#570987] ml-3 items-center justify-center">
          {' '}
          +254 713 622 288
        </span>
      </motion.div>

      <Link href="/contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#570987"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[#570987]">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
