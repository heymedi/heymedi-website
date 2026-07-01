"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Logo from "../../components/Logo";
import ContactButton from "../../components/ContactButton";
import ColorBends from "../../components/ColorBends";

export default function BlogAgency() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolledDown(true); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false); // scrolling up
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const cursorDot = cursorDotRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    if (window.innerWidth >= 768 && cursorDot && cursorFollower) {
      let xTo = gsap.quickTo(cursorFollower, "x", { duration: 0.4, ease: "power3" });
      let yTo = gsap.quickTo(cursorFollower, "y", { duration: 0.4, ease: "power3" });

      const onMouseMove = (e) => {
        gsap.set(cursorDot, { x: e.clientX, y: e.clientY });
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', onMouseMove);
      };
    } else {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorFollower) cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0c] selection:bg-brand-copper selection:text-white font-sans text-brand-gray overflow-x-hidden">
      
      {/* Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorFollowerRef} className="cursor-follower"></div>

      {/* Ambient Background */}
      <div className="ambient-light"></div>

      {/* Fixed Navigation */}
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-[#0a0a0c] transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex justify-between items-center mb-16">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}><Logo className="h-6 w-auto text-white" /></a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <ul className="flex flex-col gap-10 text-2xl font-light tracking-wide text-white">
            <li><a href="/all-in-one" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>올인원마케팅</a></li>
            <li><a href="/blog-agency" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>블로그대행</a></li>
            <li><a href="/blog-experience" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>블로그체험단</a></li>
            <li><a href="/cafe-viral" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>카페바이럴</a></li>
          </ul>
        </div>
      </div>

      <nav className={`fixed top-0 w-full z-[100] px-6 py-4 md:py-8 flex justify-between items-center transition-transform duration-300 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'} ${isAtTop ? 'text-white bg-transparent' : 'text-[#0a0a0c] bg-white/95 backdrop-blur-md shadow-none !py-3 md:!py-4'}`}>
        <div className="w-1/2 md:w-1/3 hover-trigger transition-colors">
          <a href="/"><Logo className="h-6 md:h-8 w-auto text-current" /></a>
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
            <li><a href="/all-in-one" className={`transition-colors cursor-pointer hover-trigger ${'blog-agency' === 'all-in-one' ? 'text-brand-copper' : 'hover:text-brand-copper'}`}>올인원마케팅</a></li>
            <li><a href="/blog-agency" className={`transition-colors cursor-pointer hover-trigger ${'blog-agency' === 'blog-agency' ? 'text-brand-copper' : 'hover:text-brand-copper'}`}>블로그대행</a></li>
            <li><a href="/blog-experience" className={`transition-colors cursor-pointer hover-trigger ${'blog-agency' === 'blog-experience' ? 'text-brand-copper' : 'hover:text-brand-copper'}`}>블로그체험단</a></li>
            <li><a href="/cafe-viral" className={`transition-colors cursor-pointer hover-trigger ${'blog-agency' === 'cafe-viral' ? 'text-brand-copper' : 'hover:text-brand-copper'}`}>카페바이럴</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Area */}
      <section className="relative h-[50vh] min-h-[400px] pt-32 pb-12 px-6 md:px-16 overflow-hidden bg-brand-dark text-white flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 opacity-40 pointer-events-none">
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
        
        <div className="max-w-4xl mx-auto relative z-10 my-auto">
          <span className="text-brand-copper font-mono text-xs md:text-sm tracking-widest mb-6 block uppercase">Blog Agency</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            진짜 방문객을 만드는<br />
            <span className="text-white">블로그 대행</span>
          </h1>
          <p className="text-lg text-[#bbbbbb] font-light leading-relaxed max-w-2xl mx-auto">
            단순히 방문자 수만 채우는 의미 없는 리뷰가 아닙니다.<br />
            내 병원 주변의 타겟 고객이 직접 검색하고 찾아올 수 있도록,<br />
            <strong className="text-white font-medium">잘 짜여진 기획과 생생한 경험</strong>을 전달합니다.
          </p>
        </div>
      </section>

      {/* Full Image Section */}
      <section id="white-section" className="bg-white w-full py-20 md:py-32 px-6 flex flex-col items-center">
        <div className="w-full max-w-[800px] mx-auto flex flex-col rounded-[32px] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <img key={num} src={`/images/blog-agency/heymedi-blog-agency-marketing-${num.toString().padStart(2, '0')}.${num === 6 ? 'gif' : 'png'}`} alt={`블로그 대행 상세 설명 ${num}`} className="w-full h-auto block -mt-[1px] first:mt-0" />
          ))}
        </div>
      </section>

      {/* [Section 4] Call to Action (Form) */}
      <section id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight text-white">
              상권 내 경쟁 병원이 먼저 계약하면,<br />
              <span className="text-brand-copper">더 이상 기회는 없습니다.</span>
            </h2>
            <p className="text-brand-gray font-light">
              지역당 단 1곳, 철저한 독점 파트너십으로 원장님의 성공에만 집중합니다.<br />
              현재 우리 지역의 계약 가능 여부를 확인해 보세요.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover-trigger">
            <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert('요청이 전송되었습니다. (데모)'); }}>
              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">01. 병원명(지역구포함) 적어주세요</label>
                <input type="text" placeholder="예: 강남 튼튼정형외과 (필수)" required className="hover-trigger w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] placeholder-gray-400 focus:outline-none focus:border-brand-copper transition-colors" />
              </div>
              
              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">02. 직책/성함을 적어주세요</label>
                <input type="text" placeholder="예: 대표원장 홍길동 (필수)" required className="hover-trigger w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] placeholder-gray-400 focus:outline-none focus:border-brand-copper transition-colors" />
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">03. 연락받으실 연락처를 적어주세요</label>
                <input type="tel" placeholder="연락처를 남겨주세요 (필수)" required className="hover-trigger w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] placeholder-gray-400 focus:outline-none focus:border-brand-copper transition-colors" />
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">04. 회신받으실 이메일주소를 적어주세요</label>
                <input type="email" placeholder="이메일 주소를 적어주세요 (필수)" required className="hover-trigger w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] placeholder-gray-400 focus:outline-none focus:border-brand-copper transition-colors" />
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">05. 현재 겪고 계신 문제점에 대해 적어주세요.</label>
                <textarea rows="3" placeholder="문제점에 대해 편하게 적어주세요 (필수)" required className="hover-trigger resize-none w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] placeholder-gray-400 focus:outline-none focus:border-brand-copper transition-colors"></textarea>
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">06. 현재 고민중인 마케팅 서비스가 있으신가요?</label>
                <div className="pt-2 relative">
                  <select required className="hover-trigger appearance-none w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl font-light text-[#0a0a0c] focus:outline-none focus:border-brand-copper transition-colors cursor-pointer">
                    <option value="" disabled selected>마케팅 서비스를 선택해주세요 (선택)</option>
                    <option value="네이버 블로그">네이버 블로그</option>
                    <option value="네이버 스마트플레이스">네이버 스마트플레이스</option>
                    <option value="네이버 체험단 마케팅">네이버 체험단 마케팅</option>
                    <option value="네이버 카페바이럴 마케팅">네이버 카페바이럴 마케팅</option>
                    <option value="유튜브 및 인스타그램">유튜브 및 인스타그램</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] rounded-xl p-6 mt-8">
                <div className="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2 md:gap-0">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacyConsent" required className="w-4 h-4 m-0 p-0 border-gray-300 rounded accent-[#0a0a0c] cursor-pointer" />
                    <label htmlFor="privacyConsent" className="text-sm md:text-base font-medium text-[#0a0a0c] cursor-pointer ml-1">
                      [필수] 개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  <button type="button" onClick={() => setShowPrivacyModal(true)} className="text-[#888888] text-sm underline underline-offset-2 hover:text-[#0a0a0c] transition-colors hover-trigger">
                    (전문 보기)
                  </button>
                </div>
                <p className="text-[#888888] text-sm leading-relaxed text-left">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 text-xs font-mono tracking-widest text-brand-gray bg-[#0a0a0c]">
        <div className="w-full flex flex-col gap-1 hover-trigger">
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
            <a href="mailto:team.archivehey@gmail.com" className="hover:text-white transition-colors hover-trigger">이메일: team.archivehey@gmail.com</a>
            <span>|</span>
            <a href="http://pf.kakao.com/_xacxenX/chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-trigger">카카오톡 문의</a>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-white transition-colors font-medium hover-trigger">개인정보처리방침</button>
            <span>|</span>
            <a href="/terms" className="hover:text-white transition-colors hover-trigger">이용약관</a>
          </div>
          <p>&copy; {new Date().getFullYear()} HEYMEDI. ALL RIGHTS RESERVED. PREMIUM HOSPITAL BRANDING</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-[100] hover-trigger">
        <ContactButton />
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in hover-trigger">
          <div className="bg-white text-black w-full max-w-2xl rounded-2xl p-8 md:p-12 shadow-2xl relative">
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-6 right-6 text-black/50 hover:text-black transition-colors hover-trigger">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="text-2xl font-medium mb-6">개인정보 수집 및 이용 동의</h3>
            <div className="text-sm text-gray-600 space-y-4 font-light leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. 수집하는 개인정보 항목</strong><br/>
                병원명, 성함, 연락처, 이메일, 마케팅 정보
              </p>
              <p>
                <strong>2. 개인정보 수집 및 이용 목적</strong><br/>
                마케팅 문의 확인, 상담 및 견적 안내
              </p>
              <p>
                <strong>3. 개인정보 보유 및 이용 기간</strong><br/>
                상담 종료 후 1년 보관 후 지체 없이 파기합니다.
              </p>
              <p>
                <strong>4. 동의 거부권 및 불이익</strong><br/>
                귀하는 개인정보 수집에 동의를 거부할 권리가 있습니다. 단, 필수 항목 동의 거부 시 원활한 상담이 제한될 수 있습니다.
              </p>
            </div>
            <div className="mt-10 text-center">
              <button onClick={() => setShowPrivacyModal(false)} className="px-8 py-4 bg-[#FF5900] text-white rounded-full font-medium tracking-wide hover:bg-[#e04e00] transition-colors hover-trigger">
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
