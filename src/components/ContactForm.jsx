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
  const [formData, setFormData] = useState({
    hospitalName: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    service: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service) => {
    setFormData(prev => ({ ...prev, service }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const WEB_APP_URL = process.env.NEXT_PUBLIC_GOOGLE_WEBHOOK_URL;
      
      if (!WEB_APP_URL) {
        alert("시스템 설정 오류: 웹훅 URL이 설정되지 않았습니다.");
        setIsSubmitting(false);
        return;
      }

      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      
      alert("성공적으로 접수되었습니다!");
      setFormData({
        hospitalName: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate unique ID for checkbox to prevent collision if multiple forms render
  const checkboxId = isModal ? "privacyConsentModalBtn" : "privacyConsent";

  return (
    <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">01. 병원명 (지역구 포함)</label>
        <input 
          type="text" 
          name="hospitalName"
          value={formData.hospitalName}
          onChange={handleChange}
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>
      
      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">02. 직책 / 성함</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">03. 연락처</label>
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">04. 이메일 주소</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger" 
        />
      </div>

      <div className="relative group">
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">05. 현재 겪고 계신 문제점</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3" 
          required 
          className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 text-base md:text-lg font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all hover-trigger resize-none"
        ></textarea>
      </div>

      <div className="relative group" ref={dropdownRef}>
        <label className="block text-xs font-mono tracking-widest text-brand-copper mb-3">06. 고려 중인 마케팅 서비스 (선택)</label>
        <div className="relative">
          {/* Hidden real input for form submission validation if needed */}
          <input type="hidden" name="service" value={formData.service} />
          
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full flex items-center justify-between text-left border rounded-2xl px-5 py-4 text-base md:text-lg font-light transition-all hover-trigger ${
              isDropdownOpen ? 'bg-transparent border-brand-copper text-[#0a0a0c] ring-1 ring-brand-copper' : 
              formData.service ? 'bg-transparent border-gray-300 text-[#0a0a0c]' : 'bg-transparent border-gray-300 text-gray-400'
            }`}
          >
            <span>{formData.service || '마케팅 서비스를 선택해주세요'}</span>
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
                    onClick={() => handleSelectService(option)}
                    className={`w-full text-left px-5 py-3 hover:bg-[#fff5f0] hover:text-brand-copper transition-colors ${formData.service === option ? 'bg-[#fff5f0] text-brand-copper font-medium' : 'text-gray-700 font-light'}`}
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
        <button type="submit" disabled={isSubmitting} className={`w-full md:w-auto px-12 py-5 bg-[#FF5900] text-white font-medium tracking-wide uppercase text-sm transition-colors duration-300 rounded-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e04e00] hover-trigger shadow-lg shadow-[#FF5900]/20'}`}>
          {isSubmitting ? '전송 중...' : '우리 지역 독점 T/O 확인하기'}
        </button>
      </div>
    </form>
  );
}
