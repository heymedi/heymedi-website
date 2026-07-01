"use client";

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header({ currentPath = "/" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      // 1. Handle Scroll Direction for Mobile Hide/Show
      if (window.scrollY > 50) {
        if (window.scrollY > lastScrollY) {
          setIsScrolledDown(true); // Scrolling down
        } else {
          setIsScrolledDown(false); // Scrolling up
        }
      } else {
        setIsScrolledDown(false); // At top
      }
      lastScrollY = window.scrollY;

      // 2. Handle Theme based on section intersection
      const sections = document.querySelectorAll('section');
      let currentSection = null;
      
      // Header height is roughly 80px. We check what's underneath it.
      const headerOffset = 40; 
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
          currentSection = section;
        }
      });
      
      if (currentSection) {
        // Check if section is dark
        const isDark = currentSection.classList.contains('bg-brand-dark') || 
                       currentSection.classList.contains('bg-[#1a1a1a]') ||
                       currentSection.classList.contains('bg-black') ||
                       currentSection.classList.contains('bg-[#0a0a0c]');
        setTheme(isDark ? 'dark' : 'light');
      } else if (window.scrollY < 100) {
        // Default to dark at the very top (Hero section usually dark)
        setTheme('dark');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "올인원마케팅", path: "/all-in-one" },
    { name: "블로그대행", path: "/blog-agency" },
    { name: "블로그체험단", path: "/blog-experience" },
    { name: "카페바이럴", path: "/cafe-viral" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-[#0a0a0c] transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex justify-between items-center mb-16">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Logo className="h-6 w-auto text-white" />
            </a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-10 text-2xl font-light tracking-wide text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[100] px-6 py-4 md:py-8 flex justify-between items-center transition-all duration-300 shadow-none bg-transparent ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'} md:!translate-y-0 ${theme === 'dark' ? 'text-white' : 'text-[#0a0a0c]'}`}
      >
        <div className="w-1/2 md:w-1/3 hover-trigger transition-colors">
          <a href="/">
            <Logo className="h-6 md:h-8 w-auto text-current" />
          </a>
        </div>
        
        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2 text-current">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="w-2/3 flex justify-end hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || currentPath === link.path.replace('/', '');
              return (
                <li key={link.path}>
                  <a href={link.path} className={`transition-colors cursor-pointer hover-trigger ${isActive ? 'text-brand-copper' : 'hover:text-brand-copper'}`}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
