"use client";
import { useEffect, useState } from "react";
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Tiles from '@/components/Tiles';
import FloatingDonateButton from '@/components/FloatingDonateButton';

interface Seva {
  id: string;
  name: string;
  description: string | null;
  price: {
    price_id: string;
    unit_amount: number;
    currency: string;
  };
  category: string | null;
  donation: any | null;
}

const SevasPage = () => {
  const [sevas, setSevas] = useState<Seva[]>([]);

  useEffect(() => {
    // Fetch the JSON data from S3 bucket
    fetch("https://sstmi-website.s3.us-east-1.amazonaws.com/assets/sevas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Seva[]) => setSevas(data))
      .catch((error) => console.error("Error loading Sevas data:", error));
  }, []);

  // Categorize the sevas
  const categorizedSevas = sevas.reduce((acc: Record<string, Seva[]>, seva) => {
    const category = seva.category || "Special";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(seva);
    return acc;
  }, {});

  // Define explicit category order
  const categoryOrder = [
    "Priest Services",
    "Homam",
    "Abhishekam",
    "Special",
    "Donation",
  ];

  // Sort categories based on the explicit order
  const sortedCategories = Object.entries(categorizedSevas).sort(
    ([a], [b]) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background">
        <div className="bg-gradient-to-b from-golden-gradient-start via-golden-gradient-middle to-golden-gradient-end text-darkRed min-h-screen">
          <div className="container mx-auto max-w-4xl flex justify-between items-center">
            <div className="container mx-auto py-12 px-6">
              {/* Temple Schedule Section */}
              <section className="mb-16">
                <h1 className="text-4xl font-extrabold text-center text-darkRed mb-12 underline decoration-gold decoration-4">
                  Temple Schedule & Sevas
                </h1>

                {/* Daily Schedule */}
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-center text-brightRed mb-8 underline decoration-darkRed decoration-2">
                    DAILY EVENTS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-semibold text-darkRed mb-4">🌅 Morning</h3>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>09:00 AM – Guruvandanam</li>
                        <li>09:30 AM – Nitya Pooja</li>
                        <li>10:00 AM – Vel Abhishekam</li>
                        <li>11:00 AM – Maha Mangalarati</li>
                        <li>12:00 PM – Temple Closure (Closed weekdays, open weekends)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-darkRed mb-4">🌇 Evening</h3>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>05:30 PM – Temple Reopens</li>
                        <li>06:00 PM – Sahasranama Parayanam</li>
                        <li>07:00 PM – Abhishekam of the Day</li>
                        <li>08:15 PM – Archana & Maha Deeparadana</li>
                        <li>08:30 PM – Temple Closure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Special Poojas */}
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-center text-brightRed mb-8 underline decoration-darkRed decoration-2">
                    SPECIAL POOJAS
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>Shukla Paksha Shasti – Subramanya Abhishekam (7 PM)</li>
                    <li>Pournami – Sri Satyanarayana Pooja (7 PM)</li>
                    <li>Krishna Paksha Chaturthi – Ganesha Abhishekam (7 PM)</li>
                    <li>Krithigai – Vel Poojai (7 PM)</li>
                  </ul>
                </div>

                {/* Weekly Schedule */}
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-center text-brightRed mb-8 underline decoration-darkRed decoration-2">
                    WEEKLY SCHEDULE
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-darkRed mb-4">📅 Tuesday</h3>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Subrahmanya Abhishekam with Valli & Devasena (7 PM)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-darkRed mb-4">📅 Saturday</h3>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Navagraha Abhishekam (10 AM)</li>
                        <li>Shani Bhagavan Thaila Abhishekam (10:30 AM)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Weekend Notice */}
                <div className="p-6 rounded-lg mb-16">
                  {/* bg-yellow-50 */}
                  <p className="text-lg font-semibold text-gray-700 text-center">
                    Weekends maintain regular daily schedule. Check temple flyer for updates.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <Tiles />
        </div>
      </div>
      <Footer />
      <FloatingDonateButton />
    </>
  );
};

export default SevasPage;
