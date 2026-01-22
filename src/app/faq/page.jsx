'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- Data: FAQ Content ---
const FAQ_DATA = [
  {
    question: "How to apply?",
    answer: (
      <div className="space-y-4 MuiTypography-body1 text-[##546e7a]">
        <p>In order to travel to the Kurdistan Region of Iraq, you need an e-Visa.</p>
        <p>
          If you are from <span className="font-bold text-[#C8A45D]">Country List A</span>, you only need to apply for an e-Visa in one of the following ways:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Through the E-VISA portal: You can apply for a Visit or Tourist visa and get an e-Visa within a few minutes.</li>
          <li>On Arrival: You can get your e-Visa in any of the entry points of Kurdistan Region of Iraq.</li>
        </ul>
        <p>
          If you are from <span className="font-bold text-[#C8A45D]">Country List B</span>, you need to apply for e-Visa through the e-Visa portal: Before applying, you need to coordinate with a guarantor from Kurdistan Region of Iraq who will support your application and apply on your behalf.
        </p>
      </div>
    )
  },
  {
    question: "What visa types are available to come to the Kurdistan Region of Iraq?",
    answer: "The available visa types vary depending on your Passport/Travel Document country. You can see the available visas for your country using the Eligibility Checker on the home page."
  },
  {
    question: "How long will my visa be valid for?",
    answer: "All types of visa are valid for 90 days from the date of issuance. This means that you can travel to the Kurdistan Region of Iraq on any day within these 90 days."
  },
  {
    question: "How long can I stay in the Kurdistan Region of Iraq?",
    answer: "All visa types have a staying period of 30 days. This means that you can stay for 30 days from the day you enter the Kurdistan Region of Iraq."
  },
  {
    question: "My passport will expire soon, can I apply for a visa to the Kurdistan Region of Iraq?",
    answer: "Your passport must be valid for at least six months when you apply for a visa for the Kurdistan Region of Iraq."
  },
  {
    question: "My passport has no empty pages, can I still apply for a visa to the Kurdistan Region of Iraq?",
    answer: "Your passport must have at least one empty page to be able to enter the Kurdistan Region of Iraq."
  },
  {
    question: "How much should I pay to get a visa to the Kurdistan Region of Iraq?",
    answer: "To get a visa to the Kurdistan Region of Iraq, you should pay an administrative fee of 100,000 IQD. This fee is non-refundable whether the application is accepted or refused."
  },
  {
    question: "If my visa application has been refused, will I be refunded?",
    answer: "The fee that you paid is an application fee and is not refundable. Everyone who applies for a visa is required to pay this fee which covers the cost of processing."
  },
  {
    question: "I don't have access to my email, can I still apply for a visa on your portal?",
    answer: "In order to proceed to apply for a visa, you must verify your email address. Therefore, in your visa application you must write an email address that you have access to."
  },
  {
    question: "How long does my visa application process take?",
    answer: "If you are from Country List A, you will receive your e-Visa within a few minutes. If you are from Country List B, the visa application process will take a maximum of five working days after your sponsor completes the application."
  }
];

// --- Sub-Component: Accordion Item ---
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4 bg-[#F8F9FA] rounded-[4px] overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#F8F9FA] hover:bg-[#F1F3F5] transition-colors duration-200"
    >
      <span className="text-[15px] font-medium text-slate-700">{question}</span>
      <ChevronDown
        className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        size={20}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
    >
      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
        {answer}
      </div>
    </div>
  </div>
);

// --- Main Page Component ---
export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(-1);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">

      {/* 1. Header Section with Illustrations */}
      <div className="w-full bg-white pb-8 ">

        <div className="w-full min-h-[16rem] flex justify-center items-start faq-header-bg">

          {/* Title */}
          {/* Added mt-12 to push text down slightly as per your inline style */}
          <h1 className="MuiTypography-h1 text-slate-900 tracking-tight mt-12 text-center">
            Frequently Asked Questions
          </h1>

        </div>

        {/* CSS Injection (or move this to your global css file) */}
        <style jsx>{`
        .faq-header-bg {
          background-image: url('/images/faq_background.svg');
          background-repeat: no-repeat;
          background-position: center bottom; /* Anchors people to bottom */
          background-size: contain; /* Ensures full width visibility */
        }
        
        /* Mobile Adjustment: Hide illustrations or adjust size if text overlaps */
        @media (max-width: 768px) {
          .faq-header-bg {
            background-size: cover;
            min-height: 12rem;
          }
        }
      `}</style>
      </div>

      {/* 2. Accordion List Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {FAQ_DATA.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>


    </main>
  );
}