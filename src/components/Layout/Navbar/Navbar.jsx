import React from 'react'

export const Navbar = () => {
    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-yellow-600">E-VISA</span>
                    <span className="text-xl font-light text-gray-500">Portal</span>
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                    <Globe className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
                    <Menu className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
                </div>
            </div>
        </header>
    )
}
