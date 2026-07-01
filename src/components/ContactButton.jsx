import React from 'react';

export default function ContactButton() {
  return (
    <a href="#contact" className="group relative flex items-center bg-[#1a1412] rounded-full p-1.5 pl-5 transition-all duration-300 hover-trigger hover:bg-[#2a201c]">
      <div className="mr-4 relative z-20">
        <span className="text-xs md:text-sm tracking-widest text-white group-hover:text-brand-copper transition-colors inline-block font-medium">
          상담받기
        </span>
      </div>
      
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        {/* Profile Image with Circular Mask */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden z-10 border border-white/10 group-hover:border-brand-copper/50 transition-colors duration-300">
          <img 
            src="/contact-profile.jpeg" 
            alt="Contact Profile" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </a>
  );
}
