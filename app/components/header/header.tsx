'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d0d0f] border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className={`${montserrat.className} p-6`}>
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary" onClick={closeDrawer}>
              Razor
            </Link>
            <button
              onClick={closeDrawer}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/products" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={closeDrawer}
            >
              Products
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={closeDrawer}
            >
              Blog
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={closeDrawer}
            >
              Pricing
            </Link>
          </nav>
        </div>
      </div>

      <header className={`${montserrat.className} bg-[#121418] text-white`}>
        <div className="container mx-auto px-6 py-4">
          <div className="bg-[#0d0d0f] border border-gray-800 rounded-full shadow-lg shadow-gray-900/50 px-4 md:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Hamburger Menu - Mobile Only */}
              <div className="md:hidden">
                <button
                  onClick={toggleDrawer}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              {/* Logo */}
              <div className="shrink-0 flex-1 md:flex-1 flex justify-center md:justify-start">
                <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
                  Razor
                </Link>
              </div>

              {/* Navigation Links - Desktop Only */}
              <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                <Link 
                  href="/products" 
                  className="text-gray-150 hover:text-white transition-colors duration-200"
                >
                  Products
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-150 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-gray-150 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </nav>

              {/* Login/Signup Button */}
              <div className="shrink-0 flex-1 flex justify-end">
                <Link 
                  href="/login"
                  className="px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base"
                  style={{ background: 'var(--gradient-45)', color: 'black' }}
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}