import React from "react";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tiles from "@/components/Tiles";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const BhoodaanaPage = () => {
  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-md shadow-lg p-6">
          <h1 className="text-center text-2xl font-bold text-darkGreen mb-4">
            BHOODAANA SEVA
          </h1>
          <div className="text-center text-lg font-semibold text-darkGreen mb-4">
            <p className="sanskrit">
              Sarvasasya Aashraya BhoomiH Varahena samudrutha |
              <br />
              YasmAath ThasmAth Shivam eshyAth Atah Shanthim Prayacchame ||
            </p>
            <p className="italic text-md text-darkRed mt-2">
              "The Earth, which supports all living beings and which rose from
              the ocean through the boar incarnation of the Lord (Varaha
              avatar), from that may auspiciousness come, and hence may it grant
              us peace."
            </p>
          </div>

          {/* Image Section - now with 2 images */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/events/1bhoodanaseva2.jpeg"
              alt="Bhoodaana Seva"
              className="w-full rounded-md shadow-md"
            />
            <img
              src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/events/1bhoodanaseva.jpeg"
              alt="Bhoodaana Seva 2"
              className="w-full rounded-md shadow-md"
            />
          </div>

          {/* Donation Description */}
          <div className="text-md text-center text-darkGreen font-medium mb-6">
            <p>
              Donation of land/bhoomi daanam towards the temple has utmost
              benefits as per Vedic texts:
            </p>
            <div className="mt-4">
              <ul className="list-disc list-inside text-darkRed">
                <li>Protection from doshas</li>
                <li>Liberation from past deeds/karmas</li>
                <li>Blessings for abundance, wealth, health, and prosperity</li>
              </ul>
            </div>
          </div>

          {/* Donations Section with full-width first row header */}
<div
  className="p-4 rounded-md"
  style={{ backgroundColor: '#F4F0E3', color: '#01513A' }}
>
  <h2
    className="text-center text-lg font-bold mb-4"
    style={{ color: '#B22234' }}
  >
    Bhoodaana Seva Donations
  </h2>
  <div className="text-center font-medium text-md mb-4">
    <table
      className="mx-auto"
      style={{ borderCollapse: 'separate', borderSpacing: '30px 10px', width: 'fit-content' }}
    >
      <tbody>
        {/* Full width first row */}
        <tr>
          <td
            colSpan={4}
            style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.15rem', paddingBottom: '1rem' }}
          >
            1 Acre &nbsp;&nbsp;&nbsp; $64,001
          </td>
        </tr>

        {/* Remaining options two per row */}
        <tr>
          <td style={{ fontWeight: 'bold', textAlign: 'right', minWidth: '90px' }}>1/2 Acre</td>
          <td style={{ textAlign: 'left', minWidth: '70px' }}>$32,001</td>
          <td style={{ fontWeight: 'bold', textAlign: 'right', minWidth: '90px' }}>1/4 Acre</td>
          <td style={{ textAlign: 'left', minWidth: '70px' }}>$16,001</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', textAlign: 'right' }}>1/8 Acre</td>
          <td style={{ textAlign: 'left' }}>$8,001</td>
          <td style={{ fontWeight: 'bold', textAlign: 'right' }}>1/16 Acre</td>
          <td style={{ textAlign: 'left' }}>$4,001</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 'bold', textAlign: 'right' }}>1/32 Acre</td>
          <td style={{ textAlign: 'left' }}>$2,001</td>
          <td style={{ fontWeight: 'bold', textAlign: 'right' }}>1/64 Acre</td>
          <td style={{ textAlign: 'left' }}>$1,116</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="text-center mt-2">
    Your contributions will bring us closer to building this sacred space. <br />
    Select one of the contribution options above, or give any amount you wish. <br />
    Every Dollar counts - thank you for your generous support!
  </div>
  <ul className="text-center list-disc list-inside font-bold mb-4" style={{ marginTop: '1rem' }}>
    <a
      href="https://www.sstmi.org/donate/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#0056b3', textDecoration: 'underline' }}
    >
      Click Here To Donate Now
    </a>
  </ul>
</div>

        </div>
        <Tiles />
      </div>
      <Footer />
      <FloatingDonateButton />
    </>
  );
};

export default BhoodaanaPage;
