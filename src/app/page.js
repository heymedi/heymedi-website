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
    quote: "마케팅 비용은 절반으로 줄었는데, 신환 예약은 3배 늘었습니다. 진작 만났어야 했어요.",
    author: "김원장",
    clinic: "A 치과",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: "매달 보내주는 리포트가 압권입니다. 우리 병원의 장점을 저보다 더 잘 아시더라고요.",
    author: "박원장",
    clinic: "B 피부과",
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "그냥 광고만 하는 게 아니라, 진짜로 환자의 마음을 움직이는 글을 써줍니다. 든든한 파트너입니다.",
    author: "이원장",
    clinic: "C 한의원",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    quote: "상담 동의율이 체감될 정도로 올랐습니다. 블로그 보고 왔다는 환자분들이 정말 많아졌어요.",
    author: "최원장",
    clinic: "D 성형외과",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    quote: "원장인 제가 봐도 설득력이 있습니다. 우리 병원의 핵심 가치를 정확하게 짚어주어 감사합니다.",
    author: "정원장",
    clinic: "E 정형외과",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

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

    // Light Theme Transition on Scroll
    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top 60%",
      onEnter: () => document.body.classList.add("light-theme"),
      onLeaveBack: () => document.body.classList.remove("light-theme"),
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
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center transition-colors duration-500">
        <div className="w-1/3 hover-trigger hover:text-brand-copper transition-colors">
          <Logo className="h-6 md:h-8 w-auto text-current" />
        </div>
        
        <div className="w-2/3 flex justify-end">
          <ContactButton />
        </div>
      </nav>

      {/* [Section 1] Hero Area */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20 overflow-hidden">
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
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <p className="hero-el text-brand-copper font-mono text-xs md:text-sm tracking-widest mb-8 uppercase">
            Premium Hospital Branding
          </p>
          
          <h1 className="hero-el text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tightest mb-10 max-w-5xl">
            마케팅 비용은 계속 쓰는데,<br />
            <span className="text-brand-gray">왜 환자는 늘지 않을까요?</span>
          </h1>
          
          <div className="hero-el flex flex-col md:flex-row md:items-end justify-between gap-8 mt-20">
            <p className="text-lg md:text-xl text-brand-gray max-w-2xl font-light leading-relaxed">
              원장님 병원만의 <strong className="text-white font-medium">'진짜 매력'</strong>을 찾아드릴게요.<br />
              만약 성과가 없다면 100% 환불해 드립니다.<br />
              그만큼 자신 있거든요!
            </p>
            <a href="#contact" className="inline-flex items-center gap-4 text-sm font-mono tracking-widest uppercase border border-brand-line px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all hover-trigger group">
              우리 병원 무료 진단받아보기 
              <span className="text-brand-copper group-hover:text-black">→</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-6 md:left-16 font-mono text-[10px] tracking-widest text-brand-gray flex items-center gap-4 hero-el z-10">
          <span>SCROLL</span>
          <div className="w-12 h-[1px] bg-brand-line"></div>
        </div>
      </section>

      {/* [Section 1.5] Testimonial Marquee */}
      <section className="py-24 border-t border-brand-line overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase reveal">
            01 / Success Stories
          </h2>
          <p className="text-xl font-light mt-4 text-white reveal">원장님들의 생생한 후기</p>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] group mt-8">
          {/* Double the list for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {testimonials.map((t) => (
                <div key={`${i}-${t.id}`} className="relative w-[280px] md:w-[360px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 cursor-none hover-trigger border border-white/5">
                  <img src={t.image} alt="Testimonial background" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10">
                    <p className="text-white text-lg font-medium leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="text-brand-copper font-medium">{t.clinic}</p>
                      <p className="text-brand-gray text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* [Section 2] Pain Point */}
      <section id="section-2" className="py-32 px-6 md:px-16 hairline-top">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase sticky top-32">
              02 / The Problem
            </h2>
          </div>
          <div className="md:col-span-8 reveal">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12">
              "검색하면 우리 병원이 1등인데,<br />왜 예약 전화는 안 울릴까요?"
            </h3>
            <div className="space-y-8 text-brand-gray text-lg font-light leading-relaxed max-w-2xl">
              <p>어디서 본 듯한 똑같은 광고 글로는 환자의 마음을 얻기 힘들어요.</p>
              <p>단순히 방문자 수만 늘리는 마케팅은 이제 그만! 진짜 치료가 필요한 환자가 <span className="text-white">스스로 찾아오게</span> 만들어야 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 3] Core USP */}
      <section className="py-32 px-6 md:px-16 hairline-top bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase mb-4">03 / Our Promise</h2>
            <p className="text-2xl md:text-3xl font-light">헤이메디는 이렇게 다릅니다.</p>
          </div>

          <div className="flex flex-col hairline-top reveal">
            <div className="flex flex-col md:flex-row justify-between py-8 md:py-12 hairline-bottom group hover:bg-white/[0.02] transition-colors hover-trigger">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-mono text-xs tracking-widest text-brand-copper">비용과 책임</span>
              </div>
              <div className="w-full md:w-1/3 mb-2 md:mb-0 text-brand-gray line-through decoration-brand-gray">
                보통: 계약하고 나면 연락이 잘 안 돼요.
              </div>
              <div className="w-full md:w-5/12 text-white font-medium">
                헤이메디: 효과가 없으면 100% 환불해 드려요.
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between py-8 md:py-12 hairline-bottom group hover:bg-white/[0.02] transition-colors hover-trigger">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-mono text-xs tracking-widest text-brand-copper">콘텐츠 만들기</span>
              </div>
              <div className="w-full md:w-1/3 mb-2 md:mb-0 text-brand-gray">
                보통: 기계적으로 똑같은 글만 복사해서 올려요.
              </div>
              <div className="w-full md:w-5/12 text-white font-medium">
                헤이메디: 원장님과 깊은 대화를 나누고 진짜 장점을 찾아요.
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-8 md:py-12 hairline-bottom group hover:bg-white/[0.02] transition-colors hover-trigger">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-mono text-xs tracking-widest text-brand-copper">광고 노출 방식</span>
              </div>
              <div className="w-full md:w-1/3 mb-2 md:mb-0 text-brand-gray">
                보통: 아무에게나 닥치는 대로 광고해요.
              </div>
              <div className="w-full md:w-5/12 text-white font-medium">
                헤이메디: 당장 치료가 필요한 분들에게만 콕 집어서 보여줘요.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 4] How We Do It */}
      <section className="py-32 px-6 md:px-16 hairline-top">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-4 reveal">
              <h2 className="font-mono text-xs tracking-widest text-brand-gray uppercase">04 / Work Process</h2>
            </div>
            <div className="md:col-span-8 reveal">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                "보이고, 설득하고,<br />찾아오게 만듭니다."
              </h3>
              <p className="text-brand-gray text-lg font-light">온라인의 관심이 실제 내원으로 이어지는 헤이메디만의 3단계 마법</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-10 hairline-top hairline-bottom md:border-l border-brand-line bg-brand-dark/50 hover:-translate-y-2 transition-transform duration-500 reveal hover-trigger">
              <div className="text-4xl font-light text-brand-copper mb-8">1.</div>
              <h4 className="text-2xl font-medium mb-6">[유입] 환자의 눈에 띄게</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                단순히 비싼 광고비만 내고 잠깐 1등 자리에 오르는 방식은 쓰지 않아요. 헤이메디는 네이버가 좋아하는 '진짜 좋은 글'을 써서 탄탄하게 상위 노출을 만듭니다. 정성껏 가꾼 브랜드 블로그 하나만 있어도, 수십 개의 키워드를 안정적으로 꽉 잡을 수 있답니다.
              </p>
            </div>

            <div className="relative p-10 hairline-top hairline-bottom md:border-l border-brand-line bg-brand-dark/50 hover:-translate-y-2 transition-transform duration-500 md:translate-y-8 reveal hover-trigger">
              <div className="text-4xl font-light text-brand-copper mb-8">2.</div>
              <h4 className="text-2xl font-medium mb-6">[설득] 진심 어린 스토리</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                아픈 환자들은 비싼 최신 장비보다 "여기 원장님은 내 고민을 진짜 이해해 줄까?"를 더 궁금해합니다. 원장님의 진심과 진료 철학이 환자의 마음에 고스란히 닿을 수 있도록, 우리 병원을 선택할 수밖에 없는 따뜻하고 특별한 이야기를 만들어 드립니다.
              </p>
            </div>

            <div className="relative p-10 hairline-top hairline-bottom md:border-l md:border-r border-brand-line bg-brand-dark/50 hover:-translate-y-2 transition-transform duration-500 md:translate-y-16 reveal hover-trigger">
              <div className="text-4xl font-light text-brand-copper mb-8">3.</div>
              <h4 className="text-2xl font-medium mb-6">[전환] 진짜 찾아오게</h4>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                글을 읽고 호감을 느꼈다면 병원 문을 열고 들어오게 해야겠죠? '공감 → 신뢰 → 방문'으로 이어지는 매끄러운 길을 짭니다. 환자가 자연스럽게 진료 문의와 예약 버튼을 누를 수 있도록, 온라인의 관심이 실제 매출로 쏙쏙 이어지게 설계해 드려요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [Section 5] Call to Action (Form) */}
      <section id="contact" className="py-32 px-6 md:px-16 hairline-top relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              비싼 광고비부터 쓰지 마세요.<br />
              <span className="text-brand-gray">병원의 매력부터 제대로 닦아내야 합니다.</span>
            </h2>
            <p className="text-brand-gray font-light">
              매월 딱 정해진 수의 병원만 꼼꼼하게 도와드리고 있어요.<br />
              우리 병원엔 어떤 처방이 필요할지, 지금 바로 편하게 이야기 나눠볼까요?
            </p>
          </div>

          <form className="space-y-12 reveal" onSubmit={(e) => { e.preventDefault(); alert('요청이 전송되었습니다. (데모)'); }}>
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
              <button type="submit" className="w-full md:w-auto px-12 py-5 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-brand-copper hover:text-white transition-colors duration-300 hover-trigger">
                [ 우리 병원 맞춤 성장 리포트 받아보기 ]
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-line text-xs font-mono tracking-widest text-brand-gray">
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
    </>
  );
}
