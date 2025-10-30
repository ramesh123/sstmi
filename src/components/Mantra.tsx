'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Mantra = () => {
  const router = useRouter();
  
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between">
        {/* Left Peacock */}
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
          <Image
            src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/pics/peacock_small.png"
            alt="Peacock Left"
            fill
            className="transform scale-x-[-1] object-contain"
            priority
          />
        </div>

        {/* Center Mantra Image */}
        <div 
          className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-28 md:w-56 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => router.push('#')}
        >
          <Image
            src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/logo/mantra.png"
            alt="Mantra"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Peacock */}
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
          <Image
            src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/pics/peacock_small.png"
            alt="Peacock Right"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Mantra;