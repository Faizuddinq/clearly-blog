import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed w-full mb-4 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            Clearly Blog
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/how-we-work" className="text-gray-600 hover:text-gray-900">How We Work</a>
            <a href="/opt-out-guides" className="text-gray-600 hover:text-gray-900">DIY Opt-Out Guides</a>
            <a href="/business" className="text-gray-600 hover:text-gray-900">Business</a>
            <a href="/blog" className="text-gray-900 font-semibold">Blog</a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="/support" className="text-gray-600 hover:text-gray-900">Support</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full border border-blue-600 hover:border-blue-700">
              Login
            </a>
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden z-50">
            {/* Change icon based on isMenuOpen */}
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-sm p-4 space-y-4 z-40 absolute top-16 left-0 w-full">
            <a href="/how-we-work" className="text-gray-600 hover:text-gray-900 block">How We Work</a>
            <a href="/opt-out-guides" className="text-gray-600 hover:text-gray-900 block">DIY Opt-Out Guides</a>
            <a href="/business" className="text-gray-600 hover:text-gray-900 block">Business</a>
            <a href="/blog" className="text-gray-900 font-semibold block">Blog</a>
            <a href="/support" className="text-gray-600 hover:text-gray-900 block">Support</a>
            
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
