import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-12">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Footer Logo Col */}
                <div>
                    <div className="w-16 h-16 mb-4 relative opacity-80">
                        <img src="/images/krg_logo.webp" alt="Logo" className="object-contain" />
                    </div>
                        <img src="/images/portal-en.svg" alt="Logo" className="object-contain" />
                    <p className="text-sm text-gray-500 mt-2 mb-4 max-w-xs">
                        The official government portal to apply for e-Visa
                    </p>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium px-4 py-2 rounded shadow-sm transition">
                        Apply Now
                    </button>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:underline">Eligibility Checker</a></li>
                        <li><a href="#" className="hover:underline">How to Apply</a></li>
                        <li><a href="#" className="hover:underline">Requirements</a></li>
                        <li><a href="#" className="hover:underline">Travel to Kurdistan Region of Iraq</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-gray-800 mb-4">Contact us</h3>
                    <p className="text-sm text-gray-600"><a href="mailto:visit@gov.krd" className="hover:underline">visit@gov.krd</a></p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center md:text-left">
                <p className="text-xs text-gray-400">© 2026 - KRG | Department of Information Technology</p>
            </div>
        </footer>
    )
}
