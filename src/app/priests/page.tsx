"use client";

import Image from "next/image";
import MainHeader from "@/components/TopInfo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tiles from "@/components/Tiles";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const PriestsPage = () => {
  return (
    <>
      <MainHeader />
      <Navbar />

      <div className="gradient-background">
        <div className="container mx-auto py-12 px-6">
          {/* Main Services Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-center text-darkGreen mb-8 underline decoration-darkRed decoration-4">
              Hindu Priestly Services
            </h1>

            <p className="text-center text-lg mb-8 text-darkRed">
              Experienced and dedicated Hindu priest offering personalized services for all occasions:
            </p>

            {/* Pujas and Ceremonies Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Pujas, Vrathams, Ceremonies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full mb-8">
                  <thead>
                    <tr className="bg-darkRed text-white">
                      <th className="p-4 text-left">Seva/Services</th>
                      <th className="p-4 text-right">Donation (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Punyahavachanam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Namakaranam (Naming ceremony)</td>
                      <td className="p-4 text-right text-darkRed">$51</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Annaprashanam</td>
                      <td className="p-4 text-right text-darkRed">$31</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Kesha Kandana (Hair offering)</td>
                      <td className="p-4 text-right text-darkRed">$31</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Akshara Abhyasam</td>
                      <td className="p-4 text-right text-darkRed">$31</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Upanayanam</td>
                      <td className="p-4 text-right text-darkRed">$201</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Nischitartham (Betrothal ceremony)</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Hindu Wedding</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Seemantam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Shashtipoorti Shanti (60th Birthday)</td>
                      <td className="p-4 text-right text-darkRed">$201</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Bhimaratha Shanthi (70th Birthday)</td>
                      <td className="p-4 text-right text-darkRed">$201</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Shathabhishekam (80th Birthday)</td>
                      <td className="p-4 text-right text-darkRed">$201</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sathyanarayana Vratham</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Gruhapravesham, Vaastu Shanti</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Thirupaavai Ghoshti</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Hanuman Chalisa 108 times</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kalyanams Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Kalyanams
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full mb-8">
                  <thead>
                    <tr className="bg-darkRed text-white">
                      <th className="p-4 text-left">Kalyanam</th>
                      <th className="p-4 text-right">Donation (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Valli Devasena Sahita Sri Subrahmanya Swamy Kalyanam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">SivaParvathi Kalyanam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sri SitaRama Kalayanam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sri Godha Kalayanam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sri Srinivasa Kalayanam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Homams Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Homams
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full mb-8">
                  <thead>
                    <tr className="bg-darkRed text-white">
                      <th className="p-4 text-left">Homam</th>
                      <th className="p-4 text-right">Donation (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Gana Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Navagraha & Shanthi Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Kujagraha Shanthi Homam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Asleshabali Pooja & Sarpasanthi Homam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Shathru Samhara Homam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Aayusha Homam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sri Sarasvati/Sri Lakshmi Hayagriva Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Sri AstaLakshmi Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Rudra Homam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Maha Mrutyunjaya Homam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Manyusukta Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Maha Sudarshana Homam</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Raama Tharaka Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Dhanvantari Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Durga Homam</td>
                      <td className="p-4 text-right text-darkRed">$108</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Chandi Homam</td>
                      <td className="p-4 text-right text-darkRed">$251</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-darkRed">Gruhapravesham, Vaastu Shanti</td>
                      <td className="p-4 text-right text-darkRed">$151</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-darkRed mt-4">
                  Any other specific homams as desired by devotees
                </p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Vedic Astrological Consultations:
              </h2>
              <ul className="list-disc list-inside text-darkRed ml-4">
                <li>Horoscope preparation, Readings, Muhurtam Selection</li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Spiritual Guidance, Meditation Sessions, Satsangs
              </h2>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-darkGreen mb-4">
                Why Choose Us:
              </h2>
              <ul className="list-disc list-inside text-darkRed ml-4">
                <li>Trained in Vedic traditions</li>
                <li>Tailored ceremonies to suit your needs</li>
                <li>Flexible scheduling options available</li>
              </ul>
            </div>

            {/* Contact Information */}
            <h2 className="text-2xl font-semibold text-darkGreen mb-4">
              📞 Contact for bookings and inquiries:
            </h2>
            <p className="text-left text-lg mb-8 text-darkRed">
              240-413-4578, 248-255-4059
            </p>

            {/* Closing Statement */}
            <p className="text-center text-lg text-darkRed">
              Let us make your special moments divine!
            </p>
          </section>

          {/* **Priest Details Section** */}
          <div id="priests-section" className="container mx-auto py-8 px-4">
            <div className="priest-info mt-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48">
                <Image
                  src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/pics/harshaswamin.png"
                  alt="Sri Harshavardhan"
                  className="priest-image rounded-full"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <h2
                className="text-xl md:text-3xl font-bold tracking-tight mb-2 whitespace-nowrap"
                style={{ color: "#008080" }}
              >
                Sri Harshavardhan Swamy
              </h2>

              <p className="font-medium text-lg" style={{ color: "#008080" }}>
                Founder, President & Chief Priest
              </p>
              <p className="text-darkRed mt-2 text-lg">
                🌐 Languages Known: Telugu, Hindi, Tamil, Kannada, English
              </p>
            </div>
          </div>
        </div>

        {/* Additional Components */}
        {/** Tiles Component **/}
        {<Tiles />}
      </div>

      {/** Footer Section **/}
      {<Footer />}
      {/** Floating Donate Button **/}
      {<FloatingDonateButton />}
    </>
  );
};

export default PriestsPage;
