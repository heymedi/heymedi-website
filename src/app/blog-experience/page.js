"use client";

import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import ContactButton from "../../components/ContactButton";
import ColorBends from "../../components/ColorBends";

export default function BlogExperience() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] selection:bg-brand-copper selection:text-white font-sans text-brand-gray overflow-x-hidden">
      
      {/* Ambient Background */}
      <div className="ambient-light"></div>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'text-[#0a0a0c] bg-white/90 backdrop-blur-md shadow-sm !py-4' : 'text-white bg-transparent'}`}>
        <div className="w-1/3 hover:text-brand-copper transition-colors">
          <a href="/"><Logo className="h-6 md:h-8 w-auto text-current" /></a>
        </div>
        
        <div className="w-2/3 flex justify-end hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <li><a href="#" className="hover:text-brand-copper transition-colors cursor-pointer">올인원마케팅</a></li>
            <li><a href="#" className="hover:text-brand-copper transition-colors cursor-pointer">블로그대행</a></li>
            <li><a href="/blog-experience" className="text-brand-copper transition-colors cursor-pointer">블로그체험단</a></li>
            <li><a href="#" className="hover:text-brand-copper transition-colors cursor-pointer">카페바이럴</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Area */}
      <section className="relative pt-48 pb-32 px-6 md:px-16 overflow-hidden bg-brand-dark text-white flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <ColorBends
            colors={["#FF5900", "#8a5cff", "#0a0a0c"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-copper font-mono text-xs md:text-sm tracking-widest mb-6 block uppercase">Blog Experience</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            진짜 방문객을 만드는<br />
            <span className="text-white">블로그 체험단</span>
          </h1>
          <p className="text-lg text-[#bbbbbb] font-light leading-relaxed max-w-2xl mx-auto">
            단순히 방문자 수만 채우는 의미 없는 리뷰가 아닙니다.<br />
            내 병원 주변의 타겟 고객이 직접 검색하고 찾아올 수 있도록,<br />
            <strong className="text-white font-medium">잘 짜여진 기획과 생생한 경험</strong>을 전달합니다.
          </p>
        </div>
      </section>

      {/* Full Image Section */}
      <section className="bg-white w-full py-10 md:py-20 flex flex-col items-center min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-6 w-full text-center">
          {/* Placeholder for the full image */}
          <div className="w-full aspect-auto rounded-3xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center text-brand-gray border border-gray-200 py-32 md:py-48">
            <svg className="w-16 h-16 mb-4 text-brand-copper opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-xl font-medium text-black mb-2">상품안내 통이미지 영역</p>
            <p className="text-sm">준비된 안내 이미지를 이곳에 꽉 차게 노출합니다.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 text-xs font-mono tracking-widest text-brand-gray bg-[#0a0a0c]">
        <div className="w-full flex flex-col gap-1">
          <div className="flex flex-wrap gap-4 mb-1">
            <span>아카이브헤이</span>
            <span>|</span>
            <span>브랜드명: 헤이메디</span>
            <span>|</span>
            <span>대표: 지원규</span>
            <span>|</span>
            <span>사업자등록번호: 151-47-01239</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-1">
            <span>주소: 경기도 화성시 동탄구 동탄중심상가2길 8, 4층 401-하46호</span>
            <span>|</span>
            <span>TEL: 0507-1395-1381</span>
            <span>|</span>
            <a href="mailto:team.archivehey@gmail.com" className="hover:text-white transition-colors">이메일: team.archivehey@gmail.com</a>
            <span>|</span>
            <a href="http://pf.kakao.com/_xacxenX/chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="/privacy" className="hover:text-white transition-colors font-medium">개인정보처리방침</a>
            <span>|</span>
            <a href="/terms" className="hover:text-white transition-colors">이용약관</a>
          </div>
          <p>&copy; {new Date().getFullYear()} HEYMEDI. ALL RIGHTS RESERVED. PREMIUM HOSPITAL BRANDING</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <ContactButton />
      </div>
    </div>
  );
}
