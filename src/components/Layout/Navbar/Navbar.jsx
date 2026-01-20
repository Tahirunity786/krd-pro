'use client';

import { Globe, Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar = () => {
    const pathname = usePathname();

    // Helper to check active state
    const isActive = (path) => pathname === path;

    // Common classes for all nav links to ensure they span full height
    const linkClasses = (path) => `
        h-full flex items-center px-1 border-b-[3px] transition-all duration-200 MuiTypography-subtitle2 font-medium text-[15px]
        ${isActive(path)
            ? 'border-[#c5a059] text-[#c5a059]'
            : 'border-transparent text-gray-800 hover:text-[#c5a059]'
        }
    `;

    return (
<header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 font-sans">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-2xl tracking-wide flex items-center">
                        <Image
                            src={'/images/portal-en.svg'}
                            alt="AppV Portal"
                            width={40}
                            height={40}
                            className="object-contain w-auto h-4"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center h-full gap-2">
                    <nav className="flex items-center gap-3 h-full">
                        <Link href="/" className={linkClasses('/')}>
                            Home
                        </Link>

                        <Link href="/visa-eligibility-checker" className={linkClasses('/visa-eligibility-checker')}>
                            Eligibility Checker
                        </Link>

                        <Link href="/how-to-apply" className={linkClasses('/how-to-apply')}>
                            How to Apply
                        </Link>

                        {/* Dropdown Link (Information) */}
                        <div className="group relative h-full flex items-center gap-1 cursor-pointer border-b-[3px] border-transparent hover:text-[#c5a059] MuiTypography-subtitle2 font-medium text-[15px] text-gray-800">
                            <span>Information</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>

                        <Link href="/faq" className={linkClasses('/faq')}>
                            FAQ
                        </Link>

                        <Link href="/retrieve" className={linkClasses('/retrieve')}>
                            Retrieve Your Application
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pl-2">
                        <Link
                            href="/"
                            className="bg-[#c5a059] hover:bg-[#b08d48] text-white px-2 py-1 rounded shadow-sm font-medium text-sm transition-colors"
                        >
                            Apply Now
                        </Link>

                        <Globe className="w-5 h-5 text-slate-600 cursor-pointer hover:text-[#c5a059] transition-colors" />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <Globe className="w-5 h-5 text-slate-600" />
                    <Menu className="w-6 h-6 text-slate-600 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}