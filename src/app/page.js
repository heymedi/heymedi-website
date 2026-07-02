/* eslint-disable react/no-unescaped-entities */
"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Logo from "../components/Logo";
import ContactButton from "../components/ContactButton";
import ColorBends from "../components/ColorBends";
import testimonialsData from '../data/testimonials.json';

export default function Home() {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);
        const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    // GSAP Registration
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    gsap.from(".hero-el", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2
    });

    // Scroll-Triggered Reveal
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    // Sticky element fade out
    const stickyContainers = document.querySelectorAll('.sticky-container');
    stickyContainers.forEach((container) => {
      const stickyContent = container.querySelector('.sticky-content');
      if (stickyContent) {
        gsap.to(stickyContent, {
          scrollTrigger: {
            trigger: container,
            start: "bottom 60%", // 부모 영역의 하단이 화면의 60% 지점에 도달하면 페이드아웃 시작
            end: "bottom 30%",   // 화면 30% 지점에서 페이드아웃 완료
            scrub: true,         // 스크롤에 맞춰 부드럽게 전환
          },
          opacity: 0
        });
      }
    });// Custom Cursor
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
        window.removeEventListener('mousemove', onMouseMove);
        // Clean up ScrollTrigger
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    } else {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorFollower) cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
      return () => {
      };
    }
  }, []);

  return (
    <>
      {/* Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorFollowerRef} className="cursor-follower"></div>
      
      {/* Ambient Background */}
      <div className="ambient-light"></div>

      {/* Fixed Navigation */}
      <Header currentPath="/" />

      {/* [Section 1] Hero Area */}
      <section className="relative min-h-[100dvh] flex flex-col px-6 md:px-16 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0 opacity-50">
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
        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col pt-32 pb-12">
          <div className="my-auto">
            <p className="hero-el text-brand-copper font-mono text-xs md:text-sm tracking-widest mb-8 uppercase">
              OUR MISSION
            </p>
            
            <h1 className="hero-el text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.3] tracking-tightest mb-10 max-w-5xl break-keep">
              우리의 목표는<br className="hidden md:block" />
              <span className="text-white">"지역구 1등 병원" 만들기입니다.</span>
            </h1>
            
            <div className="hero-el flex flex-col md:flex-row md:items-end justify-between gap-8 mt-20">
              <p className="text-lg md:text-xl text-brand-gray max-w-2xl font-light leading-relaxed">
                마케팅 업체가 인근 지역의 경쟁 병원을 동시에 관리하면 어떻게 될까요?<br />
                똑같은 키워드로 서로 경쟁시키는 것은<br />
                <strong className="text-white font-medium">원장님의 마케팅 비용을 깎아먹는 비겁한 행위입니다.</strong>
              </p>
            </div>
          </div>
          
          <div className="hero-el flex flex-col items-start gap-4 text-brand-gray mt-auto">
            <p className="text-sm md:text-base font-light tracking-wide text-white">
              원장님의 마케팅 대행사는 여러곳을 담당하고 있지 않나요?
            </p>
            <svg className="w-6 h-6 animate-bounce text-brand-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* [Section 1] Core USP */}
      <section id="section-2" className="py-32 px-6 md:px-16 bg-white text-[#0a0a0c]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase mb-4">OUR PROMISE</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              1등은 나눠 가질 수 없겠죠?<br />
              지역당 단 1곳의 병원만 철저하게 관리합니다.
            </h3>
            <p className="text-lg text-brand-gray font-light leading-relaxed max-w-3xl">
              헤이메디는 본질부터 다르게 접근합니다.<br />
              유입 경로를, 디자이너가 압도적인 비주얼로 완성하여<br />
              
              단순한 병원이 아닌 <strong className="text-brand-copper font-medium">'하나의 프리미엄 브랜드'</strong>로 재탄생시킵니다.
            </p>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="w-full mx-auto mb-32 reveal">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <a href="/all-in-one" className="group block bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src="/images/service/service01.png" alt="올인원 마케팅" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-medium mb-2">올인원 마케팅</h4>
                <p className="text-sm text-brand-gray font-light">지역구 1등 만들기 프로젝트</p>
              </div>
            </a>
            
            <a href="/blog-agency" className="group block bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src="/images/service/service02.png" alt="블로그 대행" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-medium mb-2">블로그 대행</h4>
                <p className="text-sm text-brand-gray font-light">우리병원을 선택하게 만드는</p>
              </div>
            </a>

            <a href="/blog-experience" className="group block bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src="/images/service/service03.png" alt="블로그 체험단" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-medium mb-2">블로그 체험단</h4>
                <p className="text-sm text-brand-gray font-light">우리병원을 궁금하게 만드는</p>
              </div>
            </a>

            <a href="/cafe-viral" className="group block bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img src="/images/service/service04.png" alt="카페바이럴" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-medium mb-2">카페바이럴</h4>
                <p className="text-sm text-brand-gray font-light">입소문에 강력한 처방전</p>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col reveal">
            <div className="flex flex-col md:flex-row py-12 gap-8 md:gap-24 relative md:items-start sticky-container">
              <div className="w-full md:w-5/12 flex flex-col gap-6 md:sticky md:top-32 sticky-content">
                <div>
                  <span className="font-mono text-xs tracking-widest text-brand-copper mb-4 block">POINT 01</span>
                  <h4 className="text-3xl md:text-4xl font-medium text-black leading-tight">
                    환자를 모으는<br />
                    날카로운 기획력
                  </h4>
                </div>
                <div className="w-full">
                   <img src="/USP_marketer_profile.png" alt="마케터 프로필" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="w-full md:w-7/12 flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                  <img src="/USP_marketer01.png" alt="퍼널구조 1" className="w-full h-auto rounded-2xl border border-black/5 reveal" />
                  <img src="/USP_marketer02.png" alt="퍼널구조 2" className="w-full h-auto rounded-2xl border border-black/5 reveal" />
                  <img src="/USP_marketer03.png" alt="퍼널구조 3" className="w-full h-auto rounded-2xl border border-black/5 reveal" />
                </div>
                <p className="text-black text-lg font-light leading-relaxed break-keep mt-4">
                  우리는 글을 쓰기 전, 성과가 날 수밖에 없는 '퍼널구조'부터 설계합니다. 대부분의 대행사는 '상위노출'에 집착하지만, 헤이메디는 본질에 집중합니다. 환자가 병원을 발견하고 예약 버튼을 누르기까지의 심리 동선을 먼저 짜지 않으면 아무리 많은 글도 소용없습니다.
                </p>
              </div>
            </div>
            
            <hr className="w-full border-t border-black/10 my-16 md:my-24" />

            <div className="flex flex-col md:flex-row py-12 gap-8 md:gap-24 relative md:items-start sticky-container">
              <div className="w-full md:w-5/12 flex flex-col gap-6 md:sticky md:top-32 sticky-content">
                <div>
                  <span className="font-mono text-xs tracking-widest text-brand-copper mb-4 block">POINT 02</span>
                  <h4 className="text-3xl md:text-4xl font-medium text-black leading-tight">
                    첫인상 0.3초를 책임질<br />
                    디자인 감각
                  </h4>
                </div>
                <div className="w-full">
                   <img src="/USP_designer_profile.png" alt="디자이너 프로필" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="w-full md:w-7/12 flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                  <img src="/USP_designer01.png" alt="디자인 포트폴리오 1" className="w-full h-auto rounded-2xl border border-black/5 reveal" />
                  <img src="/USP_designer02.png" alt="디자인 포트폴리오 2" className="w-full h-auto rounded-2xl border border-black/5 reveal" />
                </div>
                <p className="text-black text-lg font-light leading-relaxed break-keep mt-4">
                  환자가 병원을 선택하는 0.3초의 찰나, 신뢰감 있는 첫인상은 비주얼로 결정됩니다. 공공기관, 유명 뷰티 및 브랜드 프로젝트를 수행하며 다져진 하이엔드급 디자이너가 우리 병원을 압도적으로 시각화 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 2] Testimonial Marquee */}
      <section className="pt-48 pb-24 overflow-hidden relative bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-copper uppercase mb-4">SUCCESS STORIES</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              헤이메디를 선택한 원장님들,<br />
              이미 경험하고 계십니다.
            </h3>
          </div>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] mt-8">
          {/* Double the list for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {testimonialsData.map((t) => (
                <div key={`${i}-${t.id}`} className="group relative w-[280px] md:w-[360px] rounded-2xl overflow-hidden flex-shrink-0 cursor-none hover-trigger border border-[#ffffff]/5 bg-[#1a1a1a]">
                  <img src={t.image} alt="Testimonial background" className="relative w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-10">
                    <p className="text-[#ffffff] text-lg font-medium leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.quote }} />
                    <div>
                      <p className="text-white font-medium">{t.clinic}</p>
                      <p className="text-[#888888] text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* [Section 3] How We Do It */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-copper uppercase mb-4">WORK PROCESS</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              지역구 1등은 우연이 아닙니다.<br />
              치밀하게 설계된 3단계 프로세스
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 reveal hover-trigger bg-white/5 border border-white/10 rounded-[32px] shadow-sm">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">1.</span> 유입을 늘리고</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                단순히 비싼 광고비만 내고 잠깐 1등 자리에 오르는 방식은 쓰지 않아요. 헤이메디는 네이버가 좋아하는 '진짜 좋은 글'을 써서 탄탄하게 상위 노출을 만듭니다. 정성껏 가꾼 브랜드 블로그 하나만 있어도, 수십 개의 키워드를 안정적으로 꽉 잡을 수 있답니다.
              </p>
            </div>

            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 md:translate-y-8 reveal hover-trigger bg-white/5 border border-white/10 rounded-[32px] shadow-sm">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">2.</span> 스토리로 설득하고</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                아픈 환자들은 비싼 최신 장비보다 "여기 원장님은 내 고민을 진짜 이해해 줄까?"를 더 궁금해합니다. 원장님의 진심과 진료 철학이 환자의 마음에 고스란히 닿을 수 있도록, 우리 병원을 선택할 수밖에 없는 따뜻하고 특별한 이야기를 만들어 드립니다.
              </p>
            </div>

            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 md:translate-y-16 reveal hover-trigger bg-white/5 border border-white/10 rounded-[32px] shadow-sm">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">3.</span> 방문하게 합니다.</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                글을 읽고 호감을 느꼈다면 병원 문을 열고 들어오게 해야겠죠? '공감 → 신뢰 → 방문'으로 이어지는 매끄러운 길을 짭니다. 환자가 자연스럽게 진료 문의와 예약 버튼을 누를 수 있도록, 온라인의 관심이 실제 매출로 쏙쏙 이어지게 설계해 드려요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 4] Call to Action (Form) */}
      <section id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
              상권 내 경쟁 병원이 먼저 계약하면,<br />
              <span className="text-brand-copper">더 이상 기회는 없습니다.</span>
            </h2>
            <p className="text-brand-gray font-light">
              지역당 단 1곳, 철저한 독점 파트너십으로 원장님의 성공에만 집중합니다.<br />
              현재 우리 지역의 계약 가능 여부를 확인해 보세요.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal border border-black/5">
            <ContactForm onShowPrivacy={() => setShowPrivacyModal(true)} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onShowPrivacy={() => setShowPrivacyModal(true)} />

      {/* Floating Contact Button */}
      <div className="fixed bottom-12 md:bottom-8 right-8 z-[100] animate-fade-in-up hover-trigger">
        <ContactButton />
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-black w-full max-w-2xl rounded-2xl p-8 md:p-12 shadow-2xl relative">
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-6 right-6 text-black/50 hover:text-black transition-colors">
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
              <button onClick={() => setShowPrivacyModal(false)} className="px-8 py-4 bg-[#FF5900] text-white rounded-full font-medium tracking-wide hover:bg-[#e04e00] transition-colors">
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
