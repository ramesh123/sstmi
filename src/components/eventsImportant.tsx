'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const staticTimestamp = Date.now();
const xmlUrl = `https://sstmi-website.s3.us-east-1.amazonaws.com/assets/events-index.xml?t=${staticTimestamp}`;

export default function Carousel() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(xmlUrl);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const contents = Array.from(xmlDoc.getElementsByTagName('Contents'));

        const imageUrls = contents
          .map((content) => {
            const key = content.getElementsByTagName('Key')[0]?.textContent;
            return key && /\.(jpg|jpeg|png|gif|tiff)$/i.test(key)
              ? `https://sstmi-website.s3.us-east-1.amazonaws.com/${key}`
              : null;
          })
          .filter((url): url is string => Boolean(url));

        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, [xmlUrl]);

  return (
    <div className="mx-auto w-full max-w-screen-lg px-2">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 }, // <-- Show 4 images on desktop
        }}
        className="w-full !py-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="group !my-0">
            <div className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden rounded-lg bg-transparent flex items-center justify-center">
              <img
                src={src}
                loading="lazy"
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
