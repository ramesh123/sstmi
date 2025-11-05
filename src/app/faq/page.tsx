"use client";
import { useEffect, useState } from "react";
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import faqData from './faq.json';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const Faq: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <MainHeader />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-lg">Find answers to common questions about our temple</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">


            <div className="divide-y divide-gray-200">
              {faqData.length > 0 ? (
                faqData.map((faq,index) => (
                  <div key={index} className="transition-all duration-200 hover:bg-gray-50">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-gray-50"
                    >
                      <div className="flex-1 pr-4">
                        {/* <div className="flex items-start gap-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                            {faq.category}
                          </span>
                        </div> */}
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openId === index ? (
                          <ChevronUp className="w-6 h-6 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {openId === index && (
                      <div className="px-6 pb-5 animate-fadeIn">
                        <div className="pl-4 border-l-4 border-blue-500">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500 text-lg">No questions found matching your search.</p>
                  <p className="text-gray-400 mt-2">Try different keywords or browse all categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Faq;