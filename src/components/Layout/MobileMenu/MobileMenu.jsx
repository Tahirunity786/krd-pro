'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent scrolling on the body when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Links Data matching the screenshot
  const menuItems = [
    { label: 'Home', href: '#', isActive: true }, // Simulating the active state seen in image
    { label: 'Eligibility Checker', href: '#' },
    { label: 'How to Apply', href: '#' },
    { label: 'Requirements', href: '#' },
    { label: 'Travel to Kurdistan Region of Iraq', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Retrieve Your Application', href: '#' },
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 flex justify-end transition-visibility duration-300 ${
        isOpen ? 'visible' : 'invisible delay-300'
      }`}
    >
      {/* 1. Backdrop Overlay */}
      {/* Fades in/out */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Sliding Panel */}
      {/* Slides from Right */}
      <div 
        className={`relative w-[256px] h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Header: Branding */}
        <div className="pt-4 pb-4 mt-4 text-center">
          <Image
            src="/images/portal-en.svg"
            alt="AppV Portal"
            width={118}
            height={16}
            className="mx-auto object-contain w-[118px] h-4"
          />
          {/* Close Button (Optional UX improvement not in original image but standard practice) */}
          {/* <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button> */}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-hidden py-2 px-4">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className={`block px-4 py-3 MuiTypography-subtitle2 ${
                    item.isActive 
                      ? 'bg-[#00000014] text-slate-900' // Active state style (Home)
                      : 'text-slate-700 hover:bg-gray-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='mx-4 mt-2'>
          <button className="w-full   bg-[#C8A45D] hover:bg-[#b08d4a] text-white font-bold py-1  rounded-[4px] shadow-sm transition-all duration-200 active:scale-[0.98]">
            Apply Now
          </button>
          </div>
        </nav>

      </div>
    </div>
  );
}