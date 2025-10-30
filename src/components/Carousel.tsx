'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const staticTimestamp = Date.now(); // Generate a static timestamp
  const xmlUrl = `https://sstmi-website.s3.us-east-1.amazonaws.com/assets/carousel-index.xml?t=${staticTimestamp}`;


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
    // Remove the top/bottom margin from container if any
    <div className="mx-auto w-full max-w-screen-2xl px-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 25
          }
        }}
        // Remove all padding
        className="w-full !py-0" // Using !py-0 to override Swiper's default padding
        style={{ 
          marginTop: '0',
          marginBottom: '0',
          paddingTop: '0',
          paddingBottom: '0'
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide 
            key={index} 
            className="group !my-0" // Override any margin on slides
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={src}
                loading="lazy"
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
);
}