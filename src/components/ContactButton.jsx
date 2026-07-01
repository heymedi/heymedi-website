import React from 'react';

export default function ContactButton() {
  return (
    <a href="#contact" className="group relative flex items-center bg-[#1a1412] rounded-full p-1.5 pl-5 transition-all duration-300 hover-trigger hover:bg-[#2a201c]">
      <div className="mr-4 relative z-20">
        <span className="text-xs md:text-sm tracking-widest text-white group-hover:text-brand-copper transition-colors pb-1 border-b border-white/50 group-hover:border-brand-copper inline-block uppercase">
          CONTACT ME
        </span>
      </div>
      
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        {/* Orange Circle (Hidden by default, slides left on hover) */}
        <div className="absolute inset-0 bg-[#FC5C2A] rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-500 ease-out z-0"></div>
        
        {/* Profile Image with Circular Mask */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden z-10 border border-white/10 group-hover:border-[#FC5C2A]/50 transition-colors duration-300">
          <img 
            src="/contact-profile.jpeg" 
            alt="Contact Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </a>
  );
}
