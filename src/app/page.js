"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Logo from "../components/Logo";
import ContactButton from "../components/ContactButton";
import ColorBends from "../components/ColorBends";

const testimonials = [
  {
    id: 1,
    quote: <>지역 독점이라 안심하고 맡겼는데, <strong className="text-brand-copper font-bold">신환 문의가 250% 늘었습니다.</strong></>,
    author: "김원장",
    clinic: "A 치과",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: <>단순한 광고가 아니라, <strong className="text-brand-copper font-bold">병원 브랜드 자체가 하이엔드</strong>로 올라간 느낌입니다.</>,
    author: "박원장",
    clinic: "B 피부과",
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: <>우리 병원의 가치를 알아주는 <strong className="text-brand-copper font-bold">프리미엄 환자층</strong>이 확연히 늘었습니다.</>,
    author: "이원장",
    clinic: "C 한의원",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    quote: <>광고비는 그대로인데, <strong className="text-brand-copper font-bold">상담 동의율이 2배</strong>가 되었습니다. 진정한 독점의 힘이네요.</>,
    author: "최원장",
    clinic: "D 성형외과",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    quote: <>정교한 디자인 덕분에 <strong className="text-brand-copper font-bold">대형 병원 못지않은 신뢰감</strong>을 줍니다.</>,
    author: "정원장",
    clinic: "E 정형외과",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

    // Header transition on scroll
    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top 80px", // When section 2 reaches header
      end: "bottom 80px", // When section 2 leaves header
      onEnter: () => setIsScrolled(true),
      onLeave: () => setIsScrolled(false),
      onEnterBack: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

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
        window.removeEventListener('mousemove', onMouseMove);
        // Clean up ScrollTrigger
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    } else {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorFollower) cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
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
      <nav className={`fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'text-[#0a0a0c] bg-white/90 backdrop-blur-md shadow-sm !py-4' : 'text-white bg-transparent'}`}>
        <div className="w-1/3 hover-trigger hover:text-brand-copper transition-colors">
          <Logo className="h-6 md:h-8 w-auto text-current" />
        </div>
        
        <div className="w-2/3 flex justify-end">
          {/* ContactButton moved to floating bottom right */}
        </div>
      </nav>

      {/* [Section 1] Hero Area */}
      <section className="relative min-h-screen flex flex-col px-6 md:px-16 overflow-hidden bg-brand-dark text-white">
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
              Premium Hospital Branding
            </p>
            
            <h1 className="hero-el text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tightest mb-10 max-w-5xl">
              우리의 목표는<br />
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
            <p className="text-sm md:text-base font-light tracking-wide">
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
              마케팅 전략가가 설계한 치밀한 환자 유입 경로를,<br />
              수석 디자이너가 압도적인 비주얼로 완성하여<br />
              단순한 병원이 아닌 <strong className="text-brand-copper font-medium">'하나의 프리미엄 브랜드'</strong>로 재탄생시킵니다.
            </p>
          </div>

          <div className="flex flex-col reveal">
            <div className="flex flex-col md:flex-row py-12">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <span className="font-mono text-xs tracking-widest text-brand-copper mb-4 block">POINT 01</span>
                <h4 className="text-2xl font-medium text-black">
                  환자를 모으는<br />
                  날카로운 기획력
                </h4>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-8">
                <div className="w-1/2">
                   <img src="/USP_marketer_profile.png" alt="마케터 프로필" className="w-full h-auto object-contain" />
                </div>
                <p className="text-brand-gray text-lg font-light leading-relaxed">
                  우리는 글을 쓰기 전, 성과가 날 수밖에 없는 '퍼널구조'부터 설계합니다.<br />
                  대부분의 대행사는 '상위노출'에 집착하지만, 헤이메디는 본질에 집중합니다.<br />
                  환자가 병원을 발견하고 예약 버튼을 누르기까지의 심리 동선을 먼저 짜지 않으면<br />
                  아무리 많은 글도 소용없습니다.
                </p>
                <div className="flex flex-col gap-4">
                  <img src="/USP_marketer1.png" alt="퍼널구조 1" className="w-full h-auto rounded-2xl border border-black/5" />
                  <img src="/USP_marketer2.png" alt="퍼널구조 2" className="w-full h-auto rounded-2xl border border-black/5" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row py-12">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <span className="font-mono text-xs tracking-widest text-brand-copper mb-4 block">POINT 02</span>
                <h4 className="text-2xl font-medium text-black">
                  첫인상 0.3초를 책임질<br />
                  디자인 감각
                </h4>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-8">
                <div className="w-1/2">
                   <img src="/USP_designer_profile.png" alt="디자이너 프로필" className="w-full h-auto object-contain" />
                </div>
                <p className="text-brand-gray text-lg font-light leading-relaxed">
                  환자가 병원을 선택하는 0.3초의 찰나,<br />
                  신뢰감 있는 첫인상은 비주얼로 결정됩니다.<br />
                  공공기관, 유명 뷰티 및 브랜드 프로젝트를 수행하며 다져진<br />
                  하이엔드급 디자이너가 우리 병원을 압도적으로 시각화 합니다.
                </p>
                <div className="flex flex-col gap-4">
                  <img src="/USP_designer1.png" alt="디자인 포트폴리오 1" className="w-full h-auto rounded-2xl border border-black/5" />
                  <img src="/USP_designer2.png" alt="디자인 포트폴리오 2" className="w-full h-auto rounded-2xl border border-black/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 2] Testimonial Marquee */}
      <section className="pt-48 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase mb-4">SUCCESS STORIES</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              헤이메디를 선택한 원장님들,<br />
              이미 경험하고 계십니다.
            </h3>
          </div>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] group mt-8">
          {/* Double the list for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {testimonials.map((t) => (
                <div key={`${i}-${t.id}`} className="relative w-[280px] md:w-[360px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 cursor-none hover-trigger border border-[#ffffff]/5">
                  <img src={t.image} alt="Testimonial background" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10">
                    <p className="text-[#ffffff] text-lg font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="text-brand-copper font-medium">{t.clinic}</p>
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
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase mb-4">WORK PROCESS</h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              지역구 1등은 우연이 아닙니다.<br />
              치밀하게 설계된 3단계 프로세스
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 reveal hover-trigger">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">1.</span> [유입] 환자의 눈에 띄게</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                단순히 비싼 광고비만 내고 잠깐 1등 자리에 오르는 방식은 쓰지 않아요. 헤이메디는 네이버가 좋아하는 '진짜 좋은 글'을 써서 탄탄하게 상위 노출을 만듭니다. 정성껏 가꾼 브랜드 블로그 하나만 있어도, 수십 개의 키워드를 안정적으로 꽉 잡을 수 있답니다.
              </p>
            </div>

            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 md:translate-y-8 reveal hover-trigger">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">2.</span> [설득] 진심 어린 스토리</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                아픈 환자들은 비싼 최신 장비보다 "여기 원장님은 내 고민을 진짜 이해해 줄까?"를 더 궁금해합니다. 원장님의 진심과 진료 철학이 환자의 마음에 고스란히 닿을 수 있도록, 우리 병원을 선택할 수밖에 없는 따뜻하고 특별한 이야기를 만들어 드립니다.
              </p>
            </div>

            <div className="relative p-10 hover:-translate-y-2 transition-transform duration-500 md:translate-y-16 reveal hover-trigger">
              <div className="text-brand-copper mb-8 opacity-80">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-2xl font-medium mb-6"><span className="text-brand-copper font-light mr-2">3.</span> [전환] 진짜 찾아오게</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                글을 읽고 호감을 느꼈다면 병원 문을 열고 들어오게 해야겠죠? '공감 → 신뢰 → 방문'으로 이어지는 매끄러운 길을 짭니다. 환자가 자연스럽게 진료 문의와 예약 버튼을 누를 수 있도록, 온라인의 관심이 실제 매출로 쏙쏙 이어지게 설계해 드려요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 4] Call to Action (Form) */}
      <section id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
              상권 내 경쟁 병원이 먼저 계약하면,<br />
              <span className="text-brand-gray">더 이상 기회는 없습니다.</span>
            </h2>
            <p className="text-brand-gray font-light">
              지역당 단 1곳, 철저한 독점 파트너십으로 원장님의 성공에만 집중합니다.<br />
              현재 우리 지역의 계약 가능 여부를 확인해 보세요.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal border border-black/5">
            <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); alert('요청이 전송되었습니다. (데모)'); }}>
              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">01. 병원 이름</label>
                <input type="text" placeholder="예: 튼튼정형외과 (필수)" required className="hover-trigger" />
              </div>
              
              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">02. 연락처</label>
                <input type="tel" placeholder="연락받으실 번호를 남겨주세요 (필수)" required className="hover-trigger" />
              </div>

              <div className="relative group">
                <label className="absolute text-xs font-mono tracking-widest text-brand-copper -top-4 left-0 transition-opacity">03. 고민 사항</label>
                <textarea rows="3" placeholder="요즘 가장 고민되는 점이 있다면 편하게 적어주세요 (선택)" className="hover-trigger resize-none"></textarea>
              </div>

              <div className="pt-8 text-center">
                <button type="submit" className="w-full md:w-auto px-12 py-5 bg-[#FF5900] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#e04e00] transition-colors duration-300 hover-trigger shadow-lg shadow-[#FF5900]/20 rounded-full">
                  [ 우리 지역 독점 T/O 확인하기 ]
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-xs font-mono tracking-widest text-brand-gray">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 mb-2">
              <span>아카이브헤이</span>
              <span>|</span>
              <span>브랜드명: 헤이메디</span>
              <span>|</span>
              <span>대표: 지원규</span>
              <span>|</span>
              <span>사업자등록번호: 151-47-01239</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-2">
              <span>주소: 경기도 화성시 동탄구 동탄중심상가2길 8, 4층 401-하46호</span>
              <span>|</span>
              <span>TEL: 0507-1395-1381</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:team.archivehey@gmail.com" className="hover:text-white transition-colors">team.archivehey@gmail.com</a>
              <span>|</span>
              <a href="http://pf.kakao.com/_xacxenX/chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
              <span>|</span>
              <a href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <p>&copy; {new Date().getFullYear()} HEYMEDI. ALL RIGHTS RESERVED.</p>
            <p className="mt-2">PREMIUM HOSPITAL BRANDING</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-[100] animate-fade-in-up hover-trigger">
        <ContactButton />
      </div>
    </>
  );
}
