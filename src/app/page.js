"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, ShieldCheck, HeartHandshake, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 24px',
      }}>
        {/* Abstract Glow Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vw',
          maxWidth: '800px',
          maxHeight: '800px',
          background: 'radial-gradient(circle, rgba(252,92,42,0.15) 0%, rgba(17,22,37,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }} />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, zIndex: 1, textAlign: 'center', maxWidth: '800px' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            style={{ 
              fontFamily: 'var(--font-noto-serif-kr)', 
              fontSize: 'min(5vw, 64px)', 
              lineHeight: 1.2,
              marginBottom: '32px',
              fontWeight: 900
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            우리 병원을 선택할<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--primary-color)' }}>특별한 이유</span>를 만들어 드립니다.
          </motion.h1>
          <motion.p 
            className="section-desc" 
            style={{ marginBottom: '48px', color: '#cbd5e1' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            단순한 노출이 아닌 환자의 마음을 여는 브랜딩.<br />
            성과에 대한 확신으로, 효과 없을 시 100% 환불을 약속합니다.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="#contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
              무료 마케팅 진단 신청
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values: Architecture of Wealth (Finsight Labs Style 2x2 Grid) */}
      <section className="section-padding" style={{ background: '#0a0d16' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-noto-serif-kr)' }}>병원의 가치를 설계합니다</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>
              광고비를 태우기 전, 브랜딩의 뼈대부터 바로 세워야 합니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div style={{ padding: '40px', background: 'var(--light-bg)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '24px', fontWeight: 900, fontFamily: 'var(--font-noto-serif-kr)' }}>01</span>
                <h3 style={{ marginTop: '16px', marginBottom: '8px', fontSize: '24px' }}>환자의 불안을 해소합니다</h3>
                <p style={{ color: '#94a3b8' }}>병원을 찾는 환자의 본질적인 두려움을 이해하고, 안심할 수 있는 메시지를 전달합니다.</p>
              </div>
              <div style={{ padding: '40px', background: 'var(--light-bg)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '24px', fontWeight: 900, fontFamily: 'var(--font-noto-serif-kr)' }}>02</span>
                <h3 style={{ marginTop: '16px', marginBottom: '8px', fontSize: '24px' }}>노출의 질을 높입니다</h3>
                <p style={{ color: '#94a3b8' }}>무의미한 트래픽이 아닌, 실제 내원으로 이어질 수 있는 고관여 타겟에게 노출시킵니다.</p>
              </div>
            </motion.div>

            {/* Center Visual Mockup */}
            <motion.div 
              style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 100px rgba(252,92,42,0.2)',
                position: 'relative'
              }}>
                <ShieldCheck size={80} color="white" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div style={{ padding: '40px', background: 'var(--light-bg)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '24px', fontWeight: 900, fontFamily: 'var(--font-noto-serif-kr)' }}>03</span>
                <h3 style={{ marginTop: '16px', marginBottom: '8px', fontSize: '24px' }}>원장님의 철학을 담습니다</h3>
                <p style={{ color: '#94a3b8' }}>1시간의 심층 인터뷰를 통해 뻔한 광고가 아닌, 진정성 있는 원장님만의 스토리를 발굴합니다.</p>
              </div>
              <div style={{ padding: '40px', background: 'var(--light-bg)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '24px', fontWeight: 900, fontFamily: 'var(--font-noto-serif-kr)' }}>04</span>
                <h3 style={{ marginTop: '16px', marginBottom: '8px', fontSize: '24px' }}>데이터 기반으로 설계합니다</h3>
                <p style={{ color: '#94a3b8' }}>정확한 상권 분석과 검색 로직을 통해 가장 효율적인 마케팅 포지션을 선점합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services (Horizontal Scroll / Glassmorphism) */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>병원의 상황에 맞는 전략</h2>
              <p style={{ color: '#94a3b8', fontSize: '18px' }}>원장님의 병원에 지금 가장 필요한 솔루션을 제안합니다.</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '40px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}>
            {[
              { icon: <PenTool size={40} />, title: "프리미엄 브랜드 블로그", desc: "검색 노출은 기본, 환자의 마음을 움직이는 심층 스토리텔링 원고를 기획 및 발행합니다." },
              { icon: <Search size={40} />, title: "네이버 플레이스 최적화", desc: "지역 환자들이 병원을 검색할 때 가장 먼저, 가장 매력적으로 보이도록 세팅합니다." },
              { icon: <HeartHandshake size={40} />, title: "체험단 및 카페 바이럴", desc: "의료법을 준수하면서도 신뢰도 높은 입소문을 만들어내어 병원의 평판을 구축합니다." },
              { icon: <TrendingUp size={40} />, title: "퍼포먼스 마케팅", desc: "메타(인스타/페이스북) 및 구글 배너 광고를 통해 잠재 환자의 트래픽을 극대화합니다." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                style={{
                  minWidth: '320px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '24px',
                  padding: '40px',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
                whileHover={{ y: -10, background: 'rgba(255,255,255,0.06)' }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ color: 'var(--accent-color)' }}>{service.icon}</div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" id="contact" style={{ backgroundColor: '#0a0d16', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">지금 바로 전문가와 상담하세요</h2>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
            우리 병원의 현 상황을 진단하고 가장 확실한 성장 방향을 제시해 드립니다.
          </p>
          <form className="contact-form" style={{ maxWidth: '500px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="form-group">
              <input type="text" placeholder="병원명" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="연락처" className="form-input" required />
            </div>
            <div className="form-group">
              <textarea placeholder="궁금하신 점이나 현재 고민을 적어주세요." className="form-input" rows="4"></textarea>
            </div>
            <button type="button" className="btn-primary" style={{ width: '100%', fontSize: '18px', padding: '16px' }}>
              무료 상담 신청하기
            </button>
          </form>
        </div>
      </section>

      {/* Footer (Heyflow Style Applied Earlier) */}
      <footer className="footer" style={{ background: '#05070a', color: '#64748b', padding: '60px 0', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.6' }}>
            <div>
              <span>아카이브헤이</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <span>브랜드명: 헤이메디</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <span>대표: 지원규</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <span>사업자등록번호: 151-47-01239</span>
            </div>
            <div>
              <span>주소: 경기도 화성시 동탄구 동탄중심상가2길 8, 4층 401-하46호</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <span>이메일: team.archivehey@gmail.com</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <span>TEL: 0507-1395-1381</span>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <a href="http://pf.kakao.com/_xacxenX/chat" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>카카오톡 문의</a>
            </div>
            <div style={{ marginTop: '8px' }}>
              <a href="/privacy" style={{ color: '#64748b', textDecoration: 'none' }}>개인정보처리방침</a>
              <span style={{ margin: '0 8px', color: '#334155' }}>|</span>
              <a href="/terms" style={{ color: '#64748b', textDecoration: 'none' }}>이용약관</a>
            </div>
          </div>
          <p style={{ marginTop: '16px' }}>© {new Date().getFullYear()} HeyMedi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
