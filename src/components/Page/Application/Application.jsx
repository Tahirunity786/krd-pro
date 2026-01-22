'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Warning from '@/components/Shared/Warning/Warning'; // Ensure this path is correct in your project
import axios from 'axios';
import { useParams } from 'next/navigation';

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

export default function Application() {
    const [visaInfo, setVisaInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const params = useParams();
    const { slug } = params;

    const fetchVisaData = async (slug) => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/visa/status/${slug}/`);
            const apiData = response.data.data;

            // Map API (snake_case) to UI (camelCase)
            const mappedData = {
                permitNumber: apiData.visa_permit_number,
                status: apiData.status, // e.g., "ACTIVE" or "EXPIRED"
                forename: apiData.forename,
                surname: apiData.surname,
                sex: apiData.sex_at_birth === 'M' ? 'Male' : apiData.sex_at_birth === 'F' ? 'Female' : apiData.sex_at_birth,
                dob: apiData.date_of_birth,
                birthCountry: apiData.country_of_birth,
                birthPlace: apiData.place_of_birth,
                docType: apiData.document_type,
                docNumber: apiData.document_number,
                nationality: apiData.nationality,
                docIssueDate: apiData.document_issuance_date,
                docExpiryDate: apiData.document_expiration_date,
                visaType: apiData.granted_visa_type,
                entryType: apiData.entry_type,
                daysOfStay: apiData.granted_days_of_stay,
                purpose: apiData.purpose_of_stay,
                arrivalDate: apiData.intended_date_of_arrival,
                requestedVisa: '-', // API doesn't return this, defaulting to '-'
                addressLine1: apiData.address_line,
                secondaryAddress: apiData.secondary_address_line,
                city: apiData.city,
                province: apiData.province_state,
                postalCode: apiData.postal_code,
                primaryPhone: apiData.primary_phone,
                secondaryPhone: apiData.secondary_phone,
                email: apiData.email,
                stayAddress: apiData.staying_address_line,
                staySecondary: apiData.staying_secondary_address_line,
                stayCity: apiData.staying_city,
                guarantorRef: apiData.guarantor_reference_number,
                // Append Server URL if the API returns a relative path (starts with /media)
                photoUrl: apiData.photo?.startsWith('http') 
                    ? apiData.photo 
                    : `${process.env.NEXT_PUBLIC_MEDIA_SERVER_URL}${apiData.photo}`,
                passportUrl: apiData.passport_scan?.startsWith('http') 
                    ? apiData.passport_scan 
                    : `${process.env.NEXT_PUBLIC_MEDIA_SERVER_URL}${apiData.passport_scan}`
            };

            setVisaInfo(mappedData);
        } catch (error) {
            console.error('Error fetching visa data:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchVisaData(slug);
        }
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error || !visaInfo) return <div className="min-h-screen flex items-center justify-center text-red-600">Error loading visa details.</div>;

    // Helper to determine status badge color
    const isExpired = visaInfo.status === 'EXPIRED';
    const statusStyles = isExpired 
        ? "bg-red-100 text-red-500" 
        : "bg-green-100 text-green-600"; 

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Note: In Next.js App Router, strictly speaking <Head> is legacy, 
                but keeping it here as per your request structure */}
            <Head>
                <title>e-Visa Permit | {visaInfo.permitNumber}</title>
            </Head>

            {/* --- Main Content --- */}
            <main className="py-6 px-4 sm:px-6">
                <div className="w-full mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden">

                    {/* Top Section: Logo & Status */}
                    <div className="flex flex-col items-center pt-10 pb-6 text-center">
                        {/* Logo */}
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

                        <span className={`inline-block ${statusStyles} text-md font-semibold px-2 py-1 rounded-1 uppercase mb-4`}>
                            {visaInfo.status}
                        </span>

                        <p className="MuiTypography-body1 text-[#546e7a] font-bold">Visa Permit Number</p>
                        <p className="Electo-h4">{visaInfo.permitNumber}</p>
                    </div>

                    {/* Warning Box */}
                    <Warning />

                    {/* Data Sections */}
                    <div className="px-8 pb-12">

                        {/* Row 1: Document Details & Granted Visa */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                            <div>
                                <SectionTitle title="Document Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Document Type" value={visaInfo.docType} />
                                    <DetailItem label="Document Number" value={visaInfo.docNumber} />
                                    <DetailItem label="Country" value={visaInfo.birthPlace} />
                                    <DetailItem label="Nationality" value={visaInfo.nationality} />
                                    <DetailItem label="Document Issuance Date" value={visaInfo.docIssueDate} />
                                    <DetailItem label="Document Expiration Date" value={visaInfo.docExpiryDate} />
                                </div>
                            </div>

                            <div>
                                <SectionTitle title="Granted Visa" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Visa" value={visaInfo.visaType} />
                                    <DetailItem label="Entry Type" value={visaInfo.entryType} />
                                    <DetailItem label="Granted Days Of Stay" value={visaInfo.daysOfStay} />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Personal Details & Contact Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                            <div>
                                <SectionTitle title="Personal Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Forename" value={visaInfo.forename} />
                                    <DetailItem label="Surname" value={visaInfo.surname} />
                                    <DetailItem label="Sex at Birth" value={visaInfo.sex} />
                                    <DetailItem label="Date of Birth" value={visaInfo.dob} />
                                    <DetailItem label="Country of Birth" value={visaInfo.birthCountry} />
                                    <DetailItem label="Place of Birth" value={visaInfo.birthPlace} />
                                </div>
                            </div>

                            <div>
                                <SectionTitle title="Current Address and Contact Information" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Address Line" value={visaInfo.addressLine1} />
                                    <DetailItem label="Secondary Address Line" value={visaInfo.secondaryAddress} />
                                    <DetailItem label="City" value={visaInfo.city} />
                                    <DetailItem label="Province/County/State" value={visaInfo.province} />
                                    <DetailItem label="Postal Code" value={visaInfo.postalCode} />
                                    <DetailItem label="Primary Phone" value={visaInfo.primaryPhone} />
                                    <DetailItem label="Secondary Phone" value={visaInfo.secondaryPhone} />
                                    <DetailItem label="Email" value={visaInfo.email} />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Travel Plan & Staying Address */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                            <div>
                                <SectionTitle title="Travel Plan Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Requested Visa" value={visaInfo.requestedVisa} />
                                    <DetailItem label="Purpose of Stay" value={visaInfo.purpose} />
                                    <DetailItem label="Intended Days Of Stay" value={visaInfo.daysOfStay} />
                                    <DetailItem label="Intended Date Of Arrival" value={visaInfo.arrivalDate} />
                                </div>
                            </div>

                            <div>
                                <SectionTitle title="Address Where You Will Stay" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Staying Address Line" value={visaInfo.stayAddress} />
                                    <DetailItem label="Secondary Staying Address Line" value={visaInfo.staySecondary} />
                                    <DetailItem label="Staying City" value={visaInfo.stayCity} />
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Guarantor & Photos */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                            <div>
                                <SectionTitle title="Guarantor Details" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Guarantor Reference Number" value={visaInfo.guarantorRef} />
                                </div>

                                <div className="mt-8">
                                    <SectionTitle title="Passport/Travel Document" />
                                    <div className="w-32 h-40 bg-gray-100 border border-gray-200 rounded-sm relative overflow-hidden">
                                        {visaInfo.passportUrl && (
                                            <img
                                                src={visaInfo.passportUrl}
                                                alt="Passport Scan"
                                                className="object-cover w-full h-full opacity-80"
                                            />
                                        )}
                                        <span className="absolute bottom-0 left-0 bg-white/90 text-[10px] w-full text-center py-1">Passport Scan</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <SectionTitle title="Photo" />
                                <div className="w-32 h-40 bg-gray-100 border border-gray-200 rounded-sm relative overflow-hidden">
                                    {visaInfo.photoUrl && (
                                        <img
                                            src={visaInfo.photoUrl}
                                            alt="User Photo"
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                    <span className="absolute bottom-0 left-0 bg-white/90 text-[10px] w-full text-center py-1">User Photo</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}