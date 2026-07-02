"use client";
import React from 'react';

export default function Footer({ onShowPrivacy }) {
  return (
    <footer className="py-10 px-6 md:px-16 text-[11px] md:text-xs font-mono tracking-widest text-brand-gray bg-[#0a0a0c]">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {onShowPrivacy ? (
            <button onClick={onShowPrivacy} className="hover:text-white transition-colors font-medium">개인정보처리방침</button>
          ) : (
            <a href="/privacy" className="hover:text-white transition-colors font-medium">개인정보처리방침</a>
          )}
          <a href="/terms" className="hover:text-white transition-colors">이용약관</a>
        </div>
        <p className="mt-4 text-[#555]">&copy; {new Date().getFullYear()} HEYMEDI. ALL RIGHTS RESERVED. PREMIUM HOSPITAL BRANDING</p>
      </div>
    </footer>
  );
}
