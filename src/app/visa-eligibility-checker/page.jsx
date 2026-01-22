'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

// --- Reusable Components ---

const SelectInput = ({ label, value, onChange, options = [] }) => (
  <div className="relative w-full">
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-300 text-gray-700 text-sm py-2.5 pl-4 pr-10 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
      >
        <option value="" disabled hidden>{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function EligibilityPage() {
  const [docType, setDocType] = useState("");
  const [country, setCountry] = useState("");

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">

      {/* 1. Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="MuiTypography-h1 mb-6 text-slate-900">
            Eligibility Checker
          </h1>
          <p className="text-md text-slate-500 max-w-5xl">
            If you are traveling to the Kurdistan Region of Iraq, you might need a visa for your trip. Use our visa search tool below to enter your citizenship country and travel document type to determine if you are required to obtain a visa or not.
          </p>
        </div>

        {/* 'Born in Iraq' Info Section */}
        <div className="mb-12 space-y-6">
          <h2 className="MuiTypography-h1 text-slate-900">
            Born in Iraq
          </h2>
          <div className="space-y-6 text-slate-500" style={{ whiteSpace: "pre-line" }}>
            <p>
              If your passport or travel document states that your place of birth is Iraq, you do not require a visa to enter the Kurdistan Region of Iraq and do not need to proceed with the application.
            </p>
            <p>
              No delay penalty will be imposed if your residence period exceeds 30 days.
            </p>
            <p>
              If your passport or travel document does not state your place of birth, please provide additional documentation when you arrive at any of the Kurdistan Region of Iraq entry points to prove this.
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <SelectInput
            label="Document Type"
            options={['Ordinary Passport', 'Diplomatic Passport', 'Service Passport']}
            value={docType}
            onChange={setDocType}
          />
          <SelectInput
            label="Country"
            options={['Country', 'United States', 'United Kingdom', 'Germany', 'France']}
            value={country}
            onChange={setCountry}
          />
        </div>

        {/* Data Table Section */}
        <div className="bg-whiteoverflow-hidden mb-1 shadow-sm rounded-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EEEEEE] border-b border-gray-200">
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">#</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Duration of Stay</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Application Administrative Cost in Iraqi Dinars (IQD)</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Conditions</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty State Row */}
                <tr>
                  <td colSpan={5} className="py-4 text-center text-slate-500 border-b border-gray-100">
                    No data is available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}

        </div>
        <div className="flex items-center justify-end px-4 py-3 bg-white gap-4 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span>Rows Per Page:</span>
            <div className="relative">
              <select className="appearance-none bg-transparent border-none pr-6 focus:ring-0 cursor-pointer">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-800" />
            </div>
          </div>

          <span>0-0 of 0</span>

          <div className="flex items-center gap-4">
            <button disabled className="text-gray-300 cursor-not-allowed hover:text-gray-500">
              <ChevronLeft size={20} />
            </button>
            <button disabled className="text-gray-300 cursor-not-allowed hover:text-gray-500">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>


    </main>
  );
}