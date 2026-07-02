"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Logo from "../../components/Logo";
import ContactButton from "../../components/ContactButton";
import ColorBends from "../../components/ColorBends";

export default function CafeViral() {
        const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {const cursorDot = cursorDotRef.current;
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
        window.removeEventListener('mousemove', onMouseMove);
      };
    } else {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorFollower) cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
      return () => {};
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
      <Header currentPath="/cafe-viral" />

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
          <span className="text-brand-copper font-mono text-xs md:text-sm tracking-widest mb-6 block uppercase">입소문에 강력한 처방전</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-white">
            카페바이럴
          </h1>
        </div>
      </section>

      {/* Full Image Section */}
      <section id="white-section" className="bg-white w-full py-20 md:py-32 px-6 flex flex-col items-center">
        <div className="w-full max-w-[652px] mx-auto flex flex-col rounded-[32px] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <img key={num} src={`/images/experience/${num.toString().padStart(2, '0')}.png`} alt={`상세이미지 ${num}`} className="w-full h-auto block -mt-[1px] first:mt-0" />
          ))}
        </div>
      </section>

      {/* [Section 4] Call to Action (Form) */}
      <section id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-white">
              상권 내 경쟁 병원이 먼저 계약하면,<br />
              <span className="text-brand-copper">더 이상 기회는 없습니다.</span>
            </h2>
            <p className="text-brand-gray font-light">
              지역당 단 1곳, 철저한 독점 파트너십으로 원장님의 성공에만 집중합니다.<br />
              현재 우리 지역의 계약 가능 여부를 확인해 보세요.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover-trigger">
            <ContactForm onShowPrivacy={() => setShowPrivacyModal(true)} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onShowPrivacy={() => setShowPrivacyModal(true)} />

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
