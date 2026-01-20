import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Globe, Menu, AlertTriangle } from 'lucide-react';
import Warning from '@/components/Shared/Warning/Warning';

// --- Mock Data (Matches your image exactly) ---
const visaData = {
    permitNumber: '031220240870177',
    status: 'EXPIRED',
    forename: 'MANISH KUMAR',
    surname: 'MANISH KUMAR',
    sex: 'Male',
    dob: '2001-05-22',
    birthCountry: '-',
    birthPlace: 'INDIA',
    docType: 'Passport',
    docNumber: 'X8794265',
    nationality: '-',
    docIssueDate: '2023-07-05',
    docExpiryDate: '2033-07-04',
    visaType: 'Visit',
    entryType: 'Single',
    daysOfStay: 30,
    purpose: 'Visit',
    arrivalDate: '2024-12-12',
    requestedVisa: '-',
    addressLine1: 'INDIA',
    secondaryAddress: '-',
    city: 'INDIA',
    province: 'INDIA',
    postalCode: '504001',
    primaryPhone: '9647504235653',
    secondaryPhone: '-',
    email: 'netcord14@gmail.com',
    stayAddress: 'ANKAWA',
    staySecondary: '-',
    stayCity: 'ERBIL',
    guarantorRef: '4822',
    // In a real app, these would be real URLs
    photoUrl: '/images/manish-photo.jpg',
    passportUrl: '/images/manish-passport.jpg'
};

// --- Reusable Components ---

const SectionTitle = ({ title }) => (
    <div className="border-b-[1.8px] border-gray-200 pb-2 mb-4 mt-8">
        <h3 className="MuiTypography-body1 text-gray-700">{title}</h3>
    </div>
);

const DetailItem = ({ label, value }) => (
    <div className="flex flex-col mb-4">
        <span className="MuiTypography-body2 text-gray-600 jss91">{label}</span>
        <span className="MuiTypography-h6 break-words">
            {value || '-'}
        </span>
    </div>
);

export default function VisaPermitPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Head>
                <title>e-Visa Permit | {visaData.permitNumber}</title>
            </Head>

            {/* --- Header --- */}
            

            {/* --- Main Content --- */}
            <main className="py-10 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto bg-white rounded-lg  border border-gray-200 overflow-hidden">

                    {/* Top Section: Logo & Status */}
                    <div className="flex flex-col items-center pt-10 pb-6 text-center">
                        {/* Logo Placeholder - Replace src with your actual Eagle Logo */}
                        <div className="w-[190px] h-[160px] mb-4 relative">
                            <img
                                src="/images/krg_logo.webp"
                                alt="KRG Eagle Logo"
                                className="object-contain w-full h-full"
                                height={160}
                                width={190}
                            />
                        </div>

                        <h1 className="Electo-h2 mb-4">e-Visa Permit</h1>

                        <span className="inline-block bg-red-100 text-red-500 text-md font-semibold px-2 py-1 rounded-1 uppercase  mb-4">
                            {visaData.status}
                        </span>

                        <p className="MuiTypography-body1 text-[#546e7a] font-bold">Visa Permit Number</p>
                        <p className="Electo-h4">{visaData.permitNumber}</p>
                    </div>

                    {/* Warning Box */}
                    <Warning/>

                    {/* Data Sections */}
                    <div className="px-8 pb-12">

                        {/* Row 1: Document Details & Granted Visa */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

                            {/* Left Col */}
                            <div>
                                <SectionTitle title="Document Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Document Type" value={visaData.docType} />
                                    <DetailItem label="Document Number" value={visaData.docNumber} />
                                    <DetailItem label="Country" value={visaData.birthPlace} />
                                    <DetailItem label="Nationality" value={visaData.nationality} />
                                    <DetailItem label="Document Issuance Date" value={visaData.docIssueDate} />
                                    <DetailItem label="Document Expiration Date" value={visaData.docExpiryDate} />
                                </div>
                            </div>

                            {/* Right Col */}
                            <div>
                                <SectionTitle title="Granted Visa" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Visa" value={visaData.visaType} />
                                    <DetailItem label="Entry Type" value={visaData.entryType} />
                                    <DetailItem label="Granted Days Of Stay" value={visaData.daysOfStay} />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Personal Details & Contact Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

                            {/* Left Col */}
                            <div>
                                <SectionTitle title="Personal Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Forename" value={visaData.forename} />
                                    <DetailItem label="Surname" value={visaData.surname} />
                                    <DetailItem label="Sex at Birth" value={visaData.sex} />
                                    <DetailItem label="Date of Birth" value={visaData.dob} />
                                    <DetailItem label="Country of Birth" value={visaData.birthCountry} />
                                    <DetailItem label="Place of Birth" value={visaData.birthPlace} />
                                </div>
                            </div>

                            {/* Right Col */}
                            <div>
                                <SectionTitle title="Current Address and Contact Information" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Address Line" value={visaData.addressLine1} />
                                    <DetailItem label="Secondary Address Line" value={visaData.secondaryAddress} />
                                    <DetailItem label="City" value={visaData.city} />
                                    <DetailItem label="Province/County/State" value={visaData.province} />
                                    <DetailItem label="Postal Code" value={visaData.postalCode} />
                                    <DetailItem label="Primary Phone" value={visaData.primaryPhone} />
                                    <DetailItem label="Secondary Phone" value={visaData.secondaryPhone} />
                                    <DetailItem label="Email" value={visaData.email} />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Travel Plan & Staying Address */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

                            {/* Left Col */}
                            <div>
                                <SectionTitle title="Travel Plan Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Requested Visa" value={visaData.requestedVisa} />
                                    <DetailItem label="Purpose of Stay" value={visaData.purpose} />
                                    <DetailItem label="Intended Days Of Stay" value={visaData.daysOfStay} />
                                    <DetailItem label="Intended Date Of Arrival" value={visaData.arrivalDate} />
                                </div>
                            </div>

                            {/* Right Col */}
                            <div>
                                <SectionTitle title="Address Where You Will Stay" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Staying Address Line" value={visaData.stayAddress} />
                                    <DetailItem label="Secondary Staying Address Line" value={visaData.staySecondary} />
                                    <DetailItem label="Staying City" value={visaData.stayCity} />
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Guarantor & Photos */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

                            {/* Left Col */}
                            <div>
                                <SectionTitle title="Guarantor Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Guarantor Reference Number" value={visaData.guarantorRef} />
                                </div>

                                <div className="mt-8">
                                    <SectionTitle title="Passport/Travel Document" />
                                    {/* Placeholder for Passport Image */}
                                    <div className="w-32 h-40 bg-gray-100 border border-gray-200 rounded-sm relative overflow-hidden">
                                        <img
                                            src={visaData.passportUrl}
                                            alt="Passport Scan"
                                            className="object-cover w-full h-full opacity-80"
                                        />
                                        <span className="absolute bottom-0 left-0 bg-white/90 text-[10px] w-full text-center py-1">Manish pss.jpg</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Col */}
                            <div>
                                <SectionTitle title="Photo" />
                                {/* Placeholder for User Photo */}
                                <div className="w-32 h-40 bg-gray-100 border border-gray-200 rounded-sm relative overflow-hidden">
                                    <img
                                        src={visaData.photoUrl}
                                        alt="User Photo"
                                        className="object-cover w-full h-full"
                                    />
                                    <span className="absolute bottom-0 left-0 bg-white/90 text-[10px] w-full text-center py-1">Manish ph.jpg</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}