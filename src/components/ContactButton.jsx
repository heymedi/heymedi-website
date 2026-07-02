"use client";
import ContactForm from "./ContactForm";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if(isMounted) setMounted(true);
    return () => { isMounted = false };
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="group relative flex items-center bg-[#1a1412] rounded-full p-1.5 pl-5 transition-all duration-300 hover-trigger hover:bg-[#2a201c] text-left"
      >
        <div className="mr-4 relative z-20">
          <span className="text-xs md:text-sm tracking-widest text-white group-hover:text-brand-copper transition-colors inline-block font-medium">
            상담받기
          </span>
        </div>
        
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          {/* Profile Image with Circular Mask */}
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden z-10 border border-white/10 group-hover:border-brand-copper/50 transition-colors duration-300">
            <img 
              src="/contact-profile.png" 
              alt="Contact Profile" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </button>

      {/* Main Contact Modal */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-[#0a0a0c]/80 backdrop-blur-md animate-fade-in">
          {/* Close overlay area */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-2xl relative z-10 animate-fade-in-up max-h-[90vh] overflow-y-auto border border-black/5">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-black transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#0a0a0c] leading-tight">
                상권 내 경쟁 병원이 먼저 계약하면,<br className="hidden md:block" />
                <span className="text-brand-copper">더 이상 기회는 없습니다.</span>
              </h3>
            </div>
            
            <ContactForm onShowPrivacy={() => setShowPrivacyModal(true)} isModal={true} />
          </div>
        </div>,
        document.body
      )}

      {/* Privacy Policy Modal */}
      {mounted && showPrivacyModal && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 bg-[#0a0a0c]/80 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setShowPrivacyModal(false)}></div>
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl w-full max-w-2xl relative z-10 animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-black transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h3 className="text-2xl font-medium tracking-tight mb-6 text-[#0a0a0c]">개인정보처리방침</h3>
            <div className="text-brand-gray text-sm font-light leading-relaxed space-y-4">
              <p>헤이메디는 문의 접수 및 상담을 위해 아래와 같이 개인정보 수집 및 이용합니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="font-medium text-[#0a0a0c]">수집 목적:</strong> 마케팅 문의 확인, 상담 및 견적 안내</li>
                <li><strong className="font-medium text-[#0a0a0c]">수집 항목:</strong> 병원명, 성함, 연락처, 이메일, 고민 사항</li>
                <li><strong className="font-medium text-[#0a0a0c]">보유 및 이용 기간:</strong> 상담 종료 후 1년 (또는 법령에 따른 보존 기간)</li>
              </ul>
              <p>위 개인정보 수집에 동의를 거부할 권리가 있으나, 거부 시 원활한 상담 안내가 제한될 수 있습니다.</p>
            </div>
            <div className="mt-10 text-center">
              <button onClick={() => setShowPrivacyModal(false)} className="px-10 py-4 bg-[#0a0a0c] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#2a2a2c] transition-colors duration-300 hover-trigger rounded-full">
                확인
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
