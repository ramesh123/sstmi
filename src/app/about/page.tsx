'use client';
import { useState } from 'react';
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';

export default function Home() {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'history', label: 'History' }
  ];

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              About Sri Subramanya Swamy Temple
            </h1>
            
            {/* About Subramanya Swamy Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                Subramanya Swamy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sri Subramanya (also known as Murugan, Kartikeya, Skanda) is the divine son of Lord Shiva and Goddess Parvathi, worshipped as a symbol of courage, wisdom, and spiritual awakening.
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Known as <strong>Shanmukha</strong> ("one with six faces"), each face represents divine powers:
                </p>
                
                <ul className="list-none space-y-2 ml-4" style={{listStyleType:'disc'}}>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Tatpurusha</span> - Control & restraint
                  </li>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Aparajita</span> - Unconquerable nature
                  </li>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Sadyojata</span> - Creative power
                  </li>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Vamadeva</span> - Preservation
                  </li>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Eshana</span> - Destruction
                  </li>
                  <li className="text-gray-700">
                    <span className="text-orange-600 font-semibold">Kartikeya</span> - The Self, the soul
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Lord Subramanya awakens the Kundalini Shakti within us, guiding devotees to overcome obstacles, conquer desires, and realize their higher spiritual potential.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-orange-600 text-white border-b-4 border-orange-700'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 md:p-12">
              {activeTab === 'vision' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our vision is to establish Sri Subramanya Swamy Temple as a beacon of unity, compassion, and enlightenment.
                  </p>
                  <ul className="list-none space-y-3 ml-4" style={{listStyleType:'disc'}}>
                    <li className="text-lg text-gray-700">A sacred place of worship and cultural preservation
                    </li>
                    <li className="text-lg text-gray-700">A center of harmony and spiritual growth
                    </li>
                    <li className="text-lg text-gray-700">A legacy for future generations
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our Mission
                  </h3>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    Mode of Operation
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    With your support, we are building a spiritual and cultural sanctuary for generations. Contributions will directly support:
                  </p>
                  <ul className="list-none space-y-3 ml-4 mb-6" style={{listStyleType:'disc'}}>
                    <li className="text-lg text-gray-700">Property and temple construction
                    </li>
                    <li className="text-lg text-gray-700">Sacred Vigrahams & Mandapams
                    </li>
                    <li className="text-lg text-gray-700">Cultural & community programs
                    </li>
                  </ul>
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
                    <p className="text-lg text-gray-700">
                      <span className="text-green-600 font-semibold">✅</span> All donations are 501(c)(3) tax-deductible
                    </p>
                    <p className="text-lg text-gray-700 mt-2">
                      <span className="text-orange-600 font-semibold">🙏</span> Every offering is received with gratitude and blessings
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our History
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Milestones of our journey so far:
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Nov 2023 -</span>
                      <p className="text-lg text-gray-700">Balaalayam established in a home in Farmington, MI</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Jan 22, 2024 -</span>
                      <p className="text-lg text-gray-700">Prathistapana performed with community participation</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Apr 18, 2024 -</span>
                      <p className="text-lg text-gray-700">Temple operations begin as Sri Subramanya Swamy Cultural Center</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Apr 22, 2024 -</span>
                      <p className="text-lg text-gray-700">Inaugurated by Brahmasri Vaddiparti Padmakar Garu</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Apr 23, 2025 -</span>
                      <p className="text-lg text-gray-700">Arrival of deity and sacred Vigrahams from India</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">May 8, 2025 -</span>
                      <p className="text-lg text-gray-700">Mahamandapam inaugurated</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Jun 8, 2025 -</span>
                      <p className="text-lg text-gray-700">(Vaikasi Visakam) Pratishtapana Kumbhabhishekam performed; temple inaugurated by local Mayors</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Jun 2025 -</span>
                      <p className="text-lg text-gray-700">Larger permanent property identified</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold text-lg min-w-fit">Jul 17, 2025 -</span>
                      <p className="text-lg text-gray-700">10-acre temple land officially acquired and announced by Brahmasri Samavedam Shanmukha Sarma Garu</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingDonateButton />
    </>
  );
}