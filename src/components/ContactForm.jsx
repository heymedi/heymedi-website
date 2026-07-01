"use client";

import React, { useState, useRef, useEffect } from 'react';

const MARKETING_OPTIONS = [
  "네이버 블로그",
  "네이버 스마트플레이스",
  "네이버 체험단 마케팅",
  "네이버 카페바이럴 마케팅",
  "유튜브 및 인스타그램"
];

export default function ContactForm({ onShowPrivacy, isModal = false }) {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Custom Select Click Outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('요청이 전송되었습니다. (데모)');
  };

  // Generate unique ID for checkbox to prevent collision if multiple forms render
  const checkboxId = isModal ? "privacyConsentModalBtn" : "privacyConsent";

  return (
    <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">01. 병원명 (지역구 포함)</label>
        <input 
          type="text" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>
      
      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">02. 직책 / 성함</label>
        <input 
          type="text" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">03. 연락처</label>
        <input 
          type="tel" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">04. 이메일 주소</label>
        <input 
          type="email" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">05. 현재 겪고 계신 문제점</label>
        <textarea 
          rows="3" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger resize-none"
        ></textarea>
      </div>

      <div className="relative group" ref={dropdownRef}>
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">06. 고려 중인 마케팅 서비스 (선택)</label>
        <div className="relative">
          {/* Hidden real input for form submission validation if needed */}
          <input type="hidden" value={selectedService} />
          
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full flex items-center justify-between text-left border rounded-2xl px-5 py-4 text-base md:text-lg font-light transition-all hover-trigger ${
              isDropdownOpen ? 'bg-transparent border-brand-copper text-[#0a0a0c] ring-1 ring-brand-copper' : 
              selectedService ? 'bg-transparent border-gray-300 text-[#0a0a0c]' : 'bg-transparent border-gray-300 text-gray-400'
            }`}
          >
            <span>{selectedService || '마케팅 서비스를 선택해주세요'}</span>
            <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-copper' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Custom Dropdown Menu */}
          <div 
            className={`absolute z-[200] w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 origin-top ${
              isDropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
            }`}
          >
            <ul className="py-2">
              {MARKETING_OPTIONS.map((option, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 hover:bg-[#fff5f0] hover:text-brand-copper transition-colors ${selectedService === option ? 'bg-[#fff5f0] text-brand-copper font-medium' : 'text-gray-700 font-light'}`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] rounded-2xl p-6 mt-8">
        <div className="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-4 md:gap-0">
          <label htmlFor={checkboxId} className="group flex items-center cursor-pointer">
            <div className="flex items-center justify-center mr-3">
              <input 
                type="checkbox" 
                id={checkboxId} 
                required 
                className="w-5 h-5 border-gray-300 rounded accent-[#0a0a0c] cursor-pointer"
              />
            </div>
            <span className="text-base font-medium text-[#0a0a0c] group-hover:text-brand-copper transition-colors">
              [필수] 개인정보 수집 및 이용에 동의합니다.
            </span>
          </label>
          <button type="button" onClick={onShowPrivacy} className="text-[#888888] text-sm underline underline-offset-2 hover:text-[#0a0a0c] transition-colors">
            (전문 보기)
          </button>
        </div>
        <p className="text-[#888888] text-sm leading-relaxed text-left break-keep">
          수집 목적: 마케팅 문의 및 상담 / 항목: 병원명, 성함, 연락처, 이메일, 마케팅 정보 / 보유 기간: 상담 종료 후 1년<br />
          (동의 거부 시 원활한 상담이 제한될 수 있습니다.)
        </p>
      </div>

      <div className="pt-4 text-center">
        <button type="submit" className="w-full md:w-auto px-12 py-5 bg-[#FF5900] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#e04e00] transition-colors duration-300 hover-trigger shadow-lg shadow-[#FF5900]/20 rounded-full">
          우리 지역 독점 T/O 확인하기
        </button>
      </div>
    </form>
  );
}
