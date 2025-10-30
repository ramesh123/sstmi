'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const staticTimestamp = Date.now(); // Generate a static timestamp
  const xmlUrl = `https://sstmi-website.s3.us-east-1.amazonaws.com/assets/gallery-index.xml?t=${staticTimestamp}`;


export default function MultiRowImageGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [modalImage, setModalImage] = useState<string | null>(null); // Modal state
  
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
    <div className="mx-auto w-full max-w-screen-xl px-4">
        <h1 className="text-4xl font-extrabold text-center text-darkRed mb-4 sm:mb-12 underline decoration-gold decoration-4">
          Photo Gallery
        </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y, Grid]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        grid={{
          rows: 2, // Default 2 rows
          fill: 'row', // Fill by row (default)
        }}
        breakpoints={{
          320: { slidesPerView: 1, grid: { rows: 2 } }, // 1 column, 2 rows on small screens
          640: { slidesPerView: 2, grid: { rows: 2 } }, // 2 columns, 2 rows
          1024: { slidesPerView: 3, grid: { rows: 3 } }, // 3 columns, 3 rows
          1440: { slidesPerView: 4, grid: { rows: 4 } }, // 4 columns, 4 rows
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="group">
            <div
              className="relative w-full h-48 overflow-hidden rounded-lg shadow-md bg-gray-100 cursor-pointer"
              onClick={() => setModalImage(src)} // Open modal with the clicked image
            >
              <img
                src={src}
                loading="lazy"
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for Pop-out Image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={() => setModalImage(null)} // Close modal
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={modalImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
