import React from 'react'
import Image from 'next/image'
const Nav = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 bg-black/25 backdrop-blur">
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <h2 className="focus:outline-none cursor-pointer text-sky-500 text-4xl font-bold " aria-label="Go to top">
                        Autonomously
                    </h2>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Services</button>
                    <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Case Studies</button>
                    <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">About Us</button>
                    <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Contact</button>
                    <button className="px-5 py-2 bg-gradient-to-r from-[#00C0FF] to-[#7B42F6] rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(0,192,255,0.5)] transition-all cursor-pointer">Book a Call</button>
                </nav>
                <button className="md:hidden p-2 text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md hidden" style={{ height: '0px', opacity: '0' }}>
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex flex-col space-y-4">
                        <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Services</button>
                        <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Case Studies</button>
                        <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">About Us</button>
                        <button className="text-base font-medium hover:text-[#00C0FF] transition-colors cursor-pointer text-gray-300">Contact</button>
                        <button className="px-5 py-2 bg-gradient-to-r from-[#00C0FF] to-[#7B42F6] rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(0,192,255,0.5)] transition-all cursor-pointer">Book a Call</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
