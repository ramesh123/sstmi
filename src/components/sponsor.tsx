'use client';
import React from 'react';

export default function SponsorshipGallery() {
  // Base URL for sponsor images
  const baseImageUrl = 'https://sstmi-website.s3.us-east-1.amazonaws.com/assets/sponsor/';

  // Sponsorship items based on your details.
  const sponsorshipItems = [
    {
      id: 1,
      fileName: 'Dhvajastambham_15000.jpg',
      name: 'Dhvajastambham',
      price: '$15000',
    },
    {
      id: 2,
      fileName: 'hundi_2000.jpg',
      name: 'Hundi',
      price: '$2000 each',
    },
    {
      id: 3,
      fileName: 'Kuthu_vilaku_2500.jpg',
      name: 'Kuthu Vilaku',
      price: '$2500',
    },
    {
      id: 4,
      fileName: 'Makara_Thoranam_2116.jpg',
      name: 'Makara Thoranam',
      price: '$2116',
    },
    {
      id: 5,
      fileName: 'Makara_Thoranam2_2116.jpg',
      name: 'Makara Thoranam 2',
      price: '$2116',
    },
    {
      id: 6,
      fileName: 'Pradhana_Peetam_6500.jpg',
      name: 'Pradhana Peetam',
      price: '$6500',
    },
    {
      id: 7,
      fileName: 'Sathya_Narayana_Mandapam_6500.jpg',
      name: 'Sathya Narayana Mandapam',
      price: '$6500',
    },
    {
      id: 8,
      fileName: 'Sri_Garudar_5001.jpg',
      name: 'Sri Garudar',
      price: '$5001',
    },
    {
      id: 9,
      fileName: 'Sri_Ramanujar_2501.jpg',
      name: 'Sri Ramanujar',
      price: '$2501',
    },
    {
      id: 10,
      fileName: 'Vasthram Donation.png',
      name: 'Vasthram Donation',
      price: '$51',
    },
    {
      id: 11,
      fileName: 'Flowers Donation.png',
      name: 'Flowers Donation (for whole Week)',
      price: '$116',
    },
    {
      id: 12,
      fileName: 'Annadhanam.png',
      name: 'Annadhanam Food Donation',
      price: '$51',
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      {/* Gallery Section */}
      <h1 className="text-3xl font-extrabold text-center text-darkRed mb-6  decoration-gold decoration-4">
    
        Donations Opportunities
      </h1>
      <div className="text-center text-md font-semibold text-darkGreen mb-4">
 
        <p className="sanskrit">
            Mayilnada miduvoy malaradi saranam Saranam saranam saravanabava Om
        </p>
        <p className="sanskri">
            Saranam saranam shanmuhaa saranam Saranam saranam shanmuhaa saranam
        </p>
        <p className="italic text-sm text-darkRed mt-2">
            "I surrender to flowery feet of my Lord, Who travels on the peacock, I surrender, surrender and surrender to the Saravanabhava, I surrender, surrender and surrender to the Shanmuga."
        </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsorshipItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-md bg-white overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={`${baseImageUrl}${item.fileName}`}
              alt={item.name}
              className="w-full h-48 object-contain bg-red-900" // rich velvet background
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
}
