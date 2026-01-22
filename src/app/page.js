'use client';

import React, { useState } from 'react';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import InfoTabsSection from '@/components/Shared/InfoTabsSection/InfoTabsSection';
import AccordionItem from '@/components/Shared/AccordionItem/AccordionItem';

// --- Utility for cleaner classes ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const IconBook = ({ className }) => (
  <svg className={className} focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path>
  </svg>
);

// 2. Check Application Status Icon (Scope/Target)
const IconScope = ({ className }) => (
  <svg className={className} focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
  </svg>
);

// 3. Check Eligibility Icon (Doc Search)
const IconDocSearch = ({ className }) => (
  <svg className={className} focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
  </svg>
);

// --- Components ---

const Button = ({ variant = 'primary', children, className, ...props }) => {
  const variants = {
    primary: "bg-[#24557D] hover:bg-[#1b3a55] text-white shadow-sm", // Matched dark blue from image
    white: "bg-white hover:bg-gray-50 text-[#234B6E] shadow-sm",
    outline: "bg-transparent border border-[#234B6E] text-[#234B6E] hover:bg-blue-50",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 cursor-pointer pb-1 pt-[5px] text-[18px] font-semibold rounded-[4px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="gap-4">

    <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex items-center'>
      <div className="shrink-0 mt-1 mr-1 text-[#1F2937]">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <h3 className="Electo-h5 text-gray-800 mb-2">{title}</h3>
        <div className="text-[#546e7a] MuiTypography-body2">
          {children}
        </div>
      </div>
    </div>
  </div>
);



// --- Main Page Component ---

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">

      {/* 1. Hero Section */}
      <section
        className={cn(
          "relative w-full overflow-hidden",
          "flex flex-col justify-center items-center",
          "h-[80dvh]",      // Mobile
          "md:h-screen",    // Tablet/Laptop
          "xl:h-[80vh]"     // Desktop
        )}
      >       {/* Dotted Map Pattern Background */}
        <div className="fixed inset-0 z-0">
          <div
            className="w-full bg-[url('/images/banner.webp')] bg-cover bg-no-repeat bg-top bg-scroll h-[510px]"
          />
          {/* Subtle vignette to focus center */}
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Logo Emblem */}
          <div className="mb-4 relative">
            <div className="w-[140px] h-[120px]  relative">
              <img
                src="/images/krg_logo.webp"
                alt="KRG Eagle Logo"
                className="object-contain w-full h-full"
                height={120}
                width={140}
              />
            </div>
          </div>

          <h1 className="Electo-h2 mb-4 text-gray-900">
            e-Visa Portal
          </h1>
          <p className="Electo-h3 text-gray-900 mb-4">
            Kurdistan Regional Government
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="min-w-[100px]">
              Apply Now
            </Button>
            <Button variant="primary" className="min-w-[180px]">
              Retrieve Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Features Grid (Floating over section break) */}
      <section className="relative z-20 px-4 pt-8 mt-10 pb-15 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <FeatureCard icon={IconBook} title="Who Needs Visa">
            Citizens of <span className="text-[#C8A45D] font-medium">Country List A</span> can obtain an e-Visa either through the E-VISA portal or upon arrival at any entry point.
          </FeatureCard>

          {/* Card 2 */}
          <FeatureCard icon={IconScope} title="Check Application Status">
            Track your application process from the starting point to end
          </FeatureCard>

          {/* Card 3 */}
          <FeatureCard icon={IconDocSearch} title="Check Eligibility">
            Use visa search tool to determine if you are required to obtain a visa or not
          </FeatureCard>
        </div>
      </section>


      {/* 3. Tabbed Information Section */}
      <InfoTabsSection />
      {/* 4. Blue Eligibility Banner */}
      <section className="relative w-full h-[490px] overflow-hidden bg-[url('/images/cta-section.webp')] bg-cover bg-center bg-no-repeat">
        {/* 1. GRADIENT OVERLAY: This is the secret to the 'fade' look. 
      It goes from transparent on the left to your brand blue on the right. */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A56]/40 via-[#1F3A56]/80 to-[#1F3A56] z-10"></div> */}

        {/* 2. CONTAINER: Increased to max-w-7xl for standard alignment */}
        <div className="relative z-20 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-end">

          {/* 3. TEXT BLOCK: Full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2 lg:w-5/12 text-white pl-0 md:pl-8 ">
            <h2 className="Electo-h2 mb-4">
              Eligibility Checker
            </h2>
            <p className="MuiTypography-body1 mb-4 ">
              Use our visa search tool to enter your citizenship country and
              travel document type to determine if you are required to
              obtain a visa or not.
            </p>
            <button className="bg-white text-black px-3 py-2 rounded-[5px] font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg">
              Eligibility Checker
            </button>
          </div>

        </div>
      </section>
      {/* 5. FAQ Section */}
      <section className="relative z-20 px-4 pt-16 -mt-12 pb-30 bg-white">
        <div className="max-w-3xl xl:max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                key: 1,
                label: 'If my visa application has been refused, will I be refunded?',
                description: "The fee that you paid is application fee and is not refundable. Everyone who applies for a visa to enter the Kurdistan Region of Iraq is required to pay this fee, which covers the cost of processing the application. Since your application is processed, the application fee cannot be refunded whether the application is accepted or refused."
              },
              {
                key: 2,
                label: 'How long can I stay in the Region?',
                description: "All visa types have a staying period of 30 days. This means that you can stay for 30 days from the day you enter the Kurdistan Region of Iraq. For example: if your visa is issued on 1st March 2021 and will expire on 31st June 2021 at 11:59 PM, and you enter the Kurdistan Region of Iraq on 30th June 2021, therefore, you can stay in the Kurdistan Region of Iraq until 30th July 2021."
              },
              {
                key: 3,
                label: 'What visa types are available to come to the Kurdistan Region of Iraq?',
                description: "The available visa types vary depending on your Passport/Travel Document country. You can see the available visas for your country using the Eligibility Checker."
              },
              {
                key: 4,
                label: 'How long will my visa be valid for?',
                description: "All types of visa are valid for 90 days from the date of issuance. This means that you can travel to the Kurdistan Region of Iraq on any day within these 90 days. For example: your visa is issued on 1st March 2021 and will expire on 31st June 2021 at 11:59 PM. Therefore, you can travel to the Kurdistan Region of Iraq any time before 31st June 2021 at 11:59 PM and can stay as long as your permitted visa stay period."
              }
            ].map((q, idx) => (
              <AccordionItem
                key={idx}
                question={q}
                isOpen={openAccordion === idx}
                onClick={() => toggleAccordion(idx)}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="border border-gray-300 cursor-pointer text-gray-600 px-4 py-[6px] rounded-md hover:bg-gray-50 font-medium text-md transition-colors">
              Have More Questions?
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}