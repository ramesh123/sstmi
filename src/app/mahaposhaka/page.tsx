import React from "react";
import MainHeader from "@/components/TopInfo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tiles from "@/components/Tiles";
import FloatingDonateButton from '@/components/FloatingDonateButton';

const MahaposhakaPage = () => {
  const sevas = [
    { name: "Vinayaka Abhishekam & Homam on Sankatahara Chaturthi", price: 51 },
    { name: "Murugar Vel Pooja", price: 31 },
    { name: "Murugar Abhishekam & Trishati Archana (Krittika Nakshatram)", price: 51 },
    { name: "Kaavadi, Paal Kodam, Abhishekam to Murugar on Shukla Shasti", price: 51 },
    { name: "Shiva Abhishekam on Pradosham (Twice in a Month)", price: 31 },
    { name: "Skandha Shasti Vratham (6 days) Yearly", price: 61 },
    { name: "Valli Devasena Sahita Sri Subrahmanya Swamy Kalyanam", price: 108 },
    { name: "Shatru Samhara Trishati Archana & Homam", price: 108 },
    { name: "Ashlesha Bali Pooja & Sarpa Homam (Yearly)", price: 251 },
    { name: "Chandi Homam (Yearly)", price: 151 },
    { name: "Satyanarayana Vratam on Pournami", price: 31 },
  ];

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-peacock p-6 min-h-screen">
        <h1 className="text-center text-3xl font-extrabold text-indigo-900 mb-6">
          Mahaposhaka Seva
        </h1>

        <div className="sloka text-center mb-6">
  <p className="sanskrit text-xl font-bold text-teal-900">
    Shaktidharaya namastubhyam skandaya surasevita |
  </p>
  <p className="sanskrit text-xl font-bold text-teal-900">
    Sarvan kaman prayaccha tvam mayi bhaktim cha shashvatim ||
  </p>
  <p className="translation text-lg text-indigo-900">
    "O Skanda, bless us with devotion and fulfillment."
  </p>
</div>


        <div className="sevas-container max-w-3xl mx-auto bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
          {sevas.map((seva, index) => (
            <div
              key={index}
              className="seva-item flex justify-between items-center border-b border-indigo-200 py-3 last:border-b-0"
            >
              <span className="seva-name text-lg font-medium text-teal-900">{seva.name}</span>
              <span className="seva-price text-lg font-semibold text-indigo-900">
                ${seva.price}
              </span>
            </div>
          ))}
          <div className="special-offer mt-8 bg-gradient-to-r from-purple-100 to-yellow-100 border border-yellow-300 p-5 rounded-lg">
            <p className="text-center font-medium text-lg text-teal-800">
              Avail all sevas approx.{" "}
              <strong className="text-indigo-900">$5000</strong> for{" "}
              <strong className="text-green-800">$1116 yearly</strong> or{" "}
              <strong className="text-blue-800">$116 monthly</strong>.
            </p>
          </div>
        </div>
        <Tiles />
      </div>

      <Footer />
      <FloatingDonateButton />
    </>
  );
};

export default MahaposhakaPage;
