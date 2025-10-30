"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Tiles = () => {
  const router = useRouter();

  return (
    <div className="md:px-8 ">
      {/* Divider */}
      <hr className="mx-auto w-[90%] h-[5px] bg-[#b71b22] my-[2vh] border-none block" />

      {/* Heading */}
      <h2 className="text-[2.25vh] text-[#035772] font-bold text-center shadow-sm">
        Get Involved
      </h2>

      {/* Tiles Container */}
      <div className="py-[2vh] min-h-[20vh]">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6 ">
          {/* Each tile */}
          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/bhoodhana/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/bhoodhana_small.jpg"
              alt="Bhoodhana"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Bhoodhana
            </span>
          </div>

          {/* Repeat for other 5 tiles with same structure but different images and text */}
          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/mahaposhaka/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/mahapoksha_small.jpg"
              alt="Mahaposhaka"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Mahaposhaka
            </span>
          </div>

          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/velpooja/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/vel_pooja.png"
              alt="Vel Pooja"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Vel Pooja
            </span>
          </div>

          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/sponsor/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/sponsor_small.jpg"
              alt="Donations"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Donations
            </span>
          </div>

          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/poojastores/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/poojastores.png"
              alt="Pooja Stores"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Pooja Stores
            </span>
          </div>

          <div
            className="relative aspect-[3/4] rounded-[1vh] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-lg"
            onClick={() => router.push("/events/")}
          >
            <Image
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/tiles/events_small.jpg"
              alt="Events"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 p-[1vh] bg-white/80 text-[1.6vh] text-center text-[#034c59]">
              Events
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tiles;
