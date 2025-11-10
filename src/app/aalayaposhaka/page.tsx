import React from "react";
import MainHeader from "@/components/TopInfo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tiles from "@/components/Tiles";
import FloatingDonateButton from '@/components/FloatingDonateButton';

const AalayaposhakaPage = () => {
  // const sevas = [
  //   { name: "Vinayaka Abhishekam & Homam on Sankatahara Chaturthi", price: 51 },
  //   { name: "Murugar Vel Pooja", price: 31 },
  //   { name: "Murugar Abhishekam & Trishati Archana (Krittika Nakshatram)", price: 51 },
  //   { name: "Kaavadi, Paal Kodam, Abhishekam to Murugar on Shukla Shasti", price: 51 },
  //   { name: "Shiva Abhishekam on Pradosham (Twice in a Month)", price: 31 },
  //   { name: "Skandha Shasti Vratham (6 days) Yearly", price: 61 },
  //   { name: "Valli Devasena Sahita Sri Subrahmanya Swamy Kalyanam", price: 108 },
  //   { name: "Shatru Samhara Trishati Archana & Homam", price: 108 },
  //   { name: "Ashlesha Bali Pooja & Sarpa Homam (Yearly)", price: 251 },
  //   { name: "Chandi Homam (Yearly)", price: 151 },
  //   { name: "Satyanarayana Vratam on Pournami", price: 31 },
  // ];

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-peacock min-h-screen flex flex-col items-center justify-center p-6 text-center">
  <h1 className="text-3xl font-extrabold text-indigo-900 mb-6">
    Aalayaposhaka Seva
  </h1>

  <div className="sloka mb-6">
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

  <div className="mb-12 flex justify-center">
    <img
      alt="Aalayaposhaka Seva"
      className="w-full md:w-2/3 mx-auto rounded-md shadow-md"
      src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/events/aalayaposhakaseva.jpeg"
    />
  </div>
   {/* <Tiles /> */}
</div>

      <Footer />
      <FloatingDonateButton />
    </>
  );
};

export default AalayaposhakaPage;
