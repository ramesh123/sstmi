'use client';
import React from 'react';

export default function PoojaStores() {
  // Base URL for pooja item images
  const baseImageUrl = 'https://sstmi-website.s3.us-east-1.amazonaws.com/assets/pooja/';

  // Pooja store items
  const poojaItems = [
    { id: 1, fileName: 'turmeric_powder.jpg', name: 'Turmeric Powder', price: '$3 / pack' },
    { id: 2, fileName: 'kunkum.jpg', name: 'Kunkum', price: '$2 / pack' },
    { id: 3, fileName: 'incense_sticks.jpg', name: 'Incense Sticks & Dhoop', price: '$4 / pack' },
    { id: 4, fileName: 'camphor_rosewater.jpg', name: 'Camphor and Rose Water', price: '$5 / pack' },
    { id: 5, fileName: 'sandalwood_powder.jpg', name: 'Sandalwood Powder (100g)', price: '$7' },
    { id: 6, fileName: 'flowers.jpg', name: 'Flowers (Rose & Mums)', price: '$9 / 3 bunches' },
    { id: 7, fileName: 'fruits.jpg', name: 'Fruits (5 types)', price: '$10 / set' },
    { id: 8, fileName: 'betel_leaves_nuts.jpg', name: 'Betel Leaves & Nuts', price: '$6 / 30 each' },
    { id: 9, fileName: 'dry_coconut.jpg', name: 'Dry Coconut', price: '$2 each' },
    { id: 10, fileName: 'coconuts.jpg', name: 'Coconuts', price: '$3 each' },
    { id: 11, fileName: 'rice.jpg', name: 'Rice (5 lbs)', price: '$8' },
    { id: 12, fileName: 'ghee.jpg', name: 'Ghee (250g)', price: '$6' },
    { id: 13, fileName: 'navadhanyam.jpg', name: 'Navadhānyam & Vastra Set', price: '$12' },
    { id: 14, fileName: 'jaggery.jpg', name: 'Jaggery', price: '$2 / piece' },
    { id: 15, fileName: 'dates_dryfruits.jpg', name: 'Dates & Dry Fruits', price: '$8 / pack' },
    { id: 16, fileName: 'quarters.jpg', name: 'Quarters (coins)', price: '$0.25 each' },
    { id: 17, fileName: 'towels.jpg', name: 'New Towels', price: '$5 each' },
    { id: 18, fileName: 'blouse_pieces.jpg', name: 'Blouse Pieces (Red/Green)', price: '$3 each' },
    { id: 19, fileName: 'mango_leaves.jpg', name: 'Mango Leaves', price: '$4 / bunch' },
    { id: 20, fileName: 'kalasham.jpg', name: 'Kalasham (Silver/Copper)', price: '$30 / $18' },
    { id: 21, fileName: 'havan_samagri.jpg', name: 'Khel/Nell Puri & Havan Samagri', price: '$10 / pack' },
    { id: 22, fileName: 'foil_tray.jpg', name: 'Foil Tray (Big/Small)', price: '$2 each' },
    { id: 23, fileName: 'elaichi_cloves.jpg', name: 'Elaichi & Cloves (100g)', price: '$4' },
    // Additional items
    { id: 24, fileName: 'bronze_vel.jpg', name: 'Bronze Vel', price: '$25' },
    { id: 25, fileName: 'shiva_lingam.jpg', name: 'Shiva Lingam (Stone)', price: '$35' },
    { id: 26, fileName: 'ganesha_idol.jpg', name: 'Ganesha Idol (Brass)', price: '$40' },
    { id: 27, fileName: 'lakshmi_idol.jpg', name: 'Lakshmi Idol (Brass)', price: '$38' },
    { id: 28, fileName: 'bronze_lamp.jpg', name: 'Bronze Lamp (Kuthu Vilakku)', price: '$55' },
    { id: 29, fileName: 'bell.jpg', name: 'Pooja Bell (Bronze)', price: '$12' },
    { id: 30, fileName: 'arati_plate.jpg', name: 'Arati Plate (Bronze)', price: '$18' },
    { id: 31, fileName: 'kalasam_set.jpg', name: 'Kalasam Set (Copper)', price: '$28' },
    { id: 32, fileName: 'panchapatra.jpg', name: 'Panchapatra (Bronze)', price: '$10' },
    { id: 33, fileName: 'spoon.jpg', name: 'Pooja Spoon (Bronze)', price: '$4' },
    { id: 34, fileName: 'kumkum_box.jpg', name: 'Kumkum Box (Brass)', price: '$7' },
    { id: 35, fileName: 'agarbatti_holder.jpg', name: 'Agarbatti Holder (Brass)', price: '$6' },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center text-darkRed mb-6 decoration-gold decoration-4">
        Pooja Stores – Items for Sale
      </h1>
      <div className="text-center text-md font-semibold text-darkGreen mb-4">
        <p className="italic text-sm text-darkRed mt-2">
          Find all essential pooja items and traditional materials for your rituals and offerings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {poojaItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-md bg-white overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={`${baseImageUrl}${item.fileName}`}
              alt={item.name}
              className="w-full h-48 object-contain bg-yellow-50"
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
