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
                    To be a beacon of spiritual enlightenment and cultural preservation, serving as a
                    sacred sanctuary where devotees can connect with Lord Murugan and experience the
                    divine presence of Sri Subramanya Swamy. We envision creating a vibrant spiritual
                    community that transcends geographical boundaries and brings together people of all
                    backgrounds in devotion and harmony.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our vision extends beyond the temple walls to foster cultural education, preserve
                    ancient traditions, and nurture the spiritual growth of future generations. We aspire
                    to be a center of excellence in Vedic teachings, Sanskrit learning, and traditional
                    art forms, ensuring that our rich heritage continues to flourish in modern times.
                  </p>
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mt-8">
                    <p className="text-lg italic text-gray-800">
                      "To create a divine abode where spirituality meets community, and ancient wisdom
                      guides contemporary living."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Sri Subramanya Swamy Cultural Center is dedicated to serving the community
                    through spiritual guidance, cultural programs, and religious services. Our mission
                    is to provide a sacred space for worship, meditation, and celebration of Hindu
                    traditions while promoting values of peace, compassion, and unity.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-orange-700 mb-3">
                        Spiritual Services
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Daily pujas and archanas</li>
                        <li>• Special abhishekams on auspicious days</li>
                        <li>• Festival celebrations throughout the year</li>
                        <li>• Personal prayers and ceremonies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-orange-700 mb-3">
                        Cultural Programs
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tamil language classes for children</li>
                        <li>• Classical music and dance training</li>
                        <li>• Vedic chanting workshops</li>
                        <li>• Cultural events and performances</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-orange-700 mb-3">
                        Community Outreach
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Youth mentorship programs</li>
                        <li>• Senior citizen support services</li>
                        <li>• Charitable initiatives and food drives</li>
                        <li>• Interfaith dialogue events</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-orange-700 mb-3">
                        Educational Mission
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sanskrit and scriptures study</li>
                        <li>• Philosophy and theology discussions</li>
                        <li>• Yoga and meditation sessions</li>
                        <li>• Spiritual counseling services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    Our History
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Sri Subramanya Swamy Cultural Center was established by a devoted group of
                    Tamil Hindu families in the greater Detroit area who sought to create a spiritual
                    home away from home. What began as small prayer gatherings in community halls has
                    blossomed into a magnificent temple that serves thousands of devotees.
                  </p>
                  
                  <div className="space-y-8 mt-8">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="text-2xl font-bold text-orange-600">Early Days</span>
                      </div>
                      <div className="flex-1 border-l-4 border-orange-300 pl-6">
                        <p className="text-gray-700 leading-relaxed">
                          The foundation was laid by pioneering families who recognized the need for a
                          dedicated space to practice their faith and preserve their cultural heritage.
                          Through countless hours of volunteer work and generous donations, the dream
                          began to take shape.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="text-2xl font-bold text-orange-600">Growth</span>
                      </div>
                      <div className="flex-1 border-l-4 border-orange-300 pl-6">
                        <p className="text-gray-700 leading-relaxed">
                          As the community grew, so did the temple. The consecration ceremony brought
                          together devotees from across Michigan and beyond. Traditional rituals were
                          performed by learned priests, and the divine presence of Lord Murugan was
                          invoked to bless the sacred space.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="text-2xl font-bold text-orange-600">Present</span>
                      </div>
                      <div className="flex-1 border-l-4 border-orange-300 pl-6">
                        <p className="text-gray-700 leading-relaxed">
                          Today, the Sri Subramanya Swamy Cultural Center stands as a pillar of the
                          community, hosting daily services, grand festivals, and cultural programs.
                          The temple has become not just a place of worship, but a cultural hub where
                          generations connect, traditions are passed down, and the spirit of devotion
                          thrives.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="text-2xl font-bold text-orange-600">Future</span>
                      </div>
                      <div className="flex-1 border-l-4 border-orange-300 pl-6">
                        <p className="text-gray-700 leading-relaxed">
                          We continue to expand our facilities and programs to better serve our growing
                          community. Plans are underway for enhanced educational centers, meditation
                          halls, and community spaces that will carry forward our legacy for generations
                          to come.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-lg mt-8">
                    <h4 className="text-2xl font-semibold text-orange-700 mb-4">
                      A Testament to Faith and Unity
                    </h4>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Every brick, every sculpture, and every ritual performed at our temple is a
                      testament to the unwavering faith and unity of our community. We honor those who
                      built this sacred space and pledge to preserve and enhance it for future generations.
                    </p>
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