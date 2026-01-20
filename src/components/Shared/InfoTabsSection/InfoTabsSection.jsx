'use client';

import React, { useState, useMemo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 1. DATA DEFINITION
const TAB_DATA = [
  {
    id: 'passport-expiration',
    label: 'Passport Expiration',
    title: 'Passport Expiration',
    image: '/images/passport-expiration.webp',
    content: (
      <p>
        To apply for all types of visas, your passport should have at least six months of validity beyond your actual travel date. Therefore, you are not able to submit your application if your passport is expiring in less than 6 months.
      </p>
    )
  },
  {
    id: 'e-visa-validity',
    label: 'e-Visa Validity',
    title: 'e-Visa Validity',
    image: '/images/evisa-validity.webp',
    content: (
      <p>
        The e-Visa document displays some information including the validity of the visa. Failure to travel to Kurdistan Region of Iraq during the validity of visa will prevent you from entering Kurdistan Region of Iraq and you will need to re-apply for a visa.
      </p>
    )
  },
  {
    id: 'arrival-info',
    label: 'Visa on Arrival',
    title: 'Visa on Arrival',
    image: '/images/on-arrival-visa.webp',
    content: (
      <div className="space-y-4">
        <p>Visitors entering Iraq&apos;s Kurdistan Region are advised to take the following steps to expedite the issuance of their visa at the port of entry:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must be a citizen of a foreign national country entitled to obtain visas at border checkpoints.</li>
          <li>Eligible citizens must pay administration fees in Iraqi dinars at airport banking terminals.</li>
          <li>All visitors must have a passport or travel document valid for at least six months at the time of departure.</li>
        </ul>
      </div>
    )
  }
];

export default function InfoTabsSection() {
  const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);

  const activeContent = useMemo(() =>
    TAB_DATA.find((t) => t.id === activeTab) || TAB_DATA[0],
    [activeTab]);

  return (
    <section className="relative z-20 px-4 pt-16 -mt-12 pb-30 bg-white ">
      <div className="max-w-5xl xl:max-w-7xl mx-auto"> {/* Increased max-w slightly to accommodate layout */}

        {/* Tabs Header */}
        <div className="flex justify-center mb-16 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8">
            {TAB_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "pb-1 text-[20px] cursor-pointer transition-all duration-300 border-b-2 whitespace-nowrap px-4",
                    isActive
                      ? "border-[#be9d4b] text-[#be9d4b]"
                      : "border-transparent text-[#b0bec5] "
                  )}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div
          key={activeTab}
          className="flex flex-col md:flex-row items-center  gap-12 md:gap-16 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-start">
            {/* UPDATED CONTAINER:
                1. max-w-[392px]: Strictly enforces the Rendered width
                2. aspect-[196/227]: Strictly enforces the Intrinsic/Rendered ratio (Portrait)
            */}
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-[392px] aspect-[196/227] bg-gray-200 group mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400">
                <span className="text-sm">[Image: {activeContent.label}]</span>
              </div>
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 space-y-6 justify-center pt-4">
            <h2 className="Electo-h2 text-gray-800" style={{ fontWeight: 400 }}>
              {activeContent.title}
            </h2>
            <div className="text-[#546e7a] MuiTypography-subtitle1">
              {activeContent.content}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}