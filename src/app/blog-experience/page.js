"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Logo from "../../components/Logo";
import ContactButton from "../../components/ContactButton";
import ColorBends from "../../components/ColorBends";

export default function BlogExperience() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSection = document.getElementById("white-section");
      if (whiteSection) {
        const rect = whiteSection.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Custom Cursor
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
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener('mousemove', onMouseMove);
      };
    } else {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorFollower) cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] selection:bg-brand-copper selection:text-white font-sans text-brand-gray overflow-x-hidden">
      
      {/* Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorFollowerRef} className="cursor-follower"></div>

      {/* Ambient Background */}
      <div className="ambient-light"></div>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'text-[#0a0a0c] !py-4' : 'text-white bg-transparent'}`}>
        <div className="w-1/3 hover-trigger transition-colors">
          <a href="/"><Logo className="h-6 md:h-8 w-auto text-current" /></a>
        </div>
        
        <div className="w-2/3 flex justify-end hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <li><a href="/all-in-one" className="hover:text-brand-copper transition-colors cursor-pointer hover-trigger">올인원마케팅</a></li>
            <li><a href="/blog-agency" className="hover:text-brand-copper transition-colors cursor-pointer hover-trigger">블로그대행</a></li>
            <li><a href="/blog-experience" className="text-brand-copper transition-colors cursor-pointer hover-trigger">블로그체험단</a></li>
            <li><a href="/cafe-viral" className="hover:text-brand-copper transition-colors cursor-pointer hover-trigger">카페바이럴</a></li>
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
      <section id="white-section" className="bg-white w-full py-20 md:py-32 px-6 flex flex-col items-center">
        <div className="w-full max-w-[800px] mx-auto flex flex-col rounded-[32px] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <img key={num} src={`/images/blog-experience/heymedi-blog-experience-marketing-${num.toString().padStart(2, '0')}.png`} alt={`블로그 체험단 상세 설명 ${num}`} className="w-full h-auto block" />
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
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">01. 병원 이름</label>
                <input type="text" placeholder="예: 튼튼정형외과 (필수)" required className="w-full bg-transparent border-b border-gray-300 py-4 text-black focus:outline-none focus:border-brand-copper transition-colors placeholder:text-gray-400 hover-trigger" />
              </div>
              
              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">02. 연락처</label>
                <input type="tel" placeholder="연락받으실 번호를 남겨주세요 (필수)" required className="w-full bg-transparent border-b border-gray-300 py-4 text-black focus:outline-none focus:border-brand-copper transition-colors placeholder:text-gray-400 hover-trigger" />
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">03. 고민 사항</label>
                <textarea rows="3" placeholder="요즘 가장 고민되는 점이 있다면 편하게 적어주세요 (선택)" className="w-full bg-transparent border-b border-gray-300 py-4 text-black focus:outline-none focus:border-brand-copper transition-colors placeholder:text-gray-400 resize-none hover-trigger"></textarea>
              </div>

              <div className="bg-[#f7f7f7] rounded-xl p-6 mt-8">
                <div className="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2 md:gap-0">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="privacyConsent" required className="w-5 h-5 border-gray-300 rounded accent-[#0a0a0c] cursor-pointer" />
                    <label htmlFor="privacyConsent" className="text-base font-medium text-[#0a0a0c] cursor-pointer">
                      [필수] 개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  <button type="button" onClick={() => setShowPrivacyModal(true)} className="text-[#888888] text-sm underline underline-offset-2 hover:text-[#0a0a0c] transition-colors hover-trigger">
                    (전문 보기)
                  </button>
                </div>
                <p className="text-[#888888] text-sm leading-relaxed text-left">
                  수집 목적: 프로젝트 문의 및 상담 / 항목: 이름, 연락처, 프로젝트 정보 / 보유 기간: 상담 종료 후 1년<br />
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
                이름, 연락처, 프로젝트 정보, 고민 사항(선택)
              </p>
              <p>
                <strong>2. 개인정보 수집 및 이용 목적</strong><br/>
                프로젝트 문의 및 상담 진행, 견적 산출, 서비스 안내
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
