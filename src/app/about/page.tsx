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
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Sri Subramanya Swamy Cultural Center
            </h2>
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
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The one with six faces, adorned in red, The great intellect who rides the divine peacock</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    He is the son of Shiva and the leader of the celestial armies, I always seek shelter in him</p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The one with six faces, adorned in red, The great intellect who rides the divine peacock</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    He is the son of Shiva and the leader of the celestial armies, I always seek shelter in him</p>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our History
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The one with six faces, adorned in red, The great intellect who rides the divine peacock</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    He is the son of Shiva and the leader of the celestial armies, I always seek shelter in him</p>
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