'use client';
import React from 'react';

const Sloka = () => {
  return (
    <div className="relative mx-auto max-w-full text-center min-h-[12rem] flex flex-col justify-center -mt-14 md:-mt-4 -mb-16">
    {/* Rest of the component stays the same */}
      <div className="flex flex-col justify-center mb-[calc(0.7vh+0.7vw)]">
        <p className="text-[calc(0.7vh+0.7vw)] leading-none m-0 py-[0.1vh] font-bold text-[#b71b22] text-shadow-sm">
          Shadananam Kunkuma Raktha Varnam, Mahamathim Divya Mayura Vaahanam |
        </p>
        <p className="text-[calc(0.7vh+0.7vw)] leading-none m-0 py-[0.1vh] font-bold text-[#b71b22] text-shadow-sm">
          Rudrasya Sunum Surasainya Natham, Guham Sadhaham Saranam Prapadhye ||
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-[calc(0.7vh+0.7vw)] leading-none m-0 py-[0.1vh] italic text-[#034c59] text-shadow-sm">
          The one with six faces, adorned in red, The great intellect who rides the divine peacock
        </p>
        <p className="text-[calc(0.7vh+0.7vw)] leading-none m-0 py-[0.1vh] italic text-[#034c59] text-shadow-sm">
          He is the son of Shiva and the leader of the celestial armies, I always seek shelter in him
        </p>
      </div>
    </div>
  );
};

export default Sloka;