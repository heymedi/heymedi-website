export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            "우리병원을 선택할<br />특별한 이유를 만들어 드립니다."
          </h1>
          <p className="hero-subtitle">
            단순한 노출이 아닌 환자의 마음을 여는 브랜딩.<br />
            효과가 없을 시 <strong style={{color: "var(--accent-color)"}}>100% 환불</strong>을 약속합니다.
          </p>
          <a href="#contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '18px' }}>
            무료 컨설팅 신청하기
          </a>
        </div>
      </section>

      {/* 3 Strategies */}
      <section className="section-padding bg-light" id="strategy">
        <div className="container">
          <h2 className="section-title">헤이메디만의 3단계 차별화 전략</h2>
          <p className="section-desc">
            단순히 광고비를 태워 잠깐 노출시키는 방식이 아닌, 콘텐츠 고유의 힘으로 안정적인 유입과 내원을 유도합니다.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">1. 보이게 만들고 (SEO)</h3>
              <p className="feature-desc">
                로직과 완성도를 기반으로, 브랜드 블로그로 수십 개의 핵심 키워드를 상위 노출시켜 꾸준한 유입 구조를 만듭니다.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3 className="feature-title">2. 스토리로 설득하고</h3>
              <p className="feature-desc">
                1시간 심층 인터뷰를 통해 환자의 고민을 공감해 주는 진심이 닿는 스토리텔링 콘텐츠를 설계합니다.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">3. 찾아오게 만듭니다</h3>
              <p className="feature-desc">
                환자의 시선에서 출발해 [공감 → 신뢰 → 방문]으로 이어지는 3단계 동선을 설계하여 예약과 내원으로 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" id="process">
        <div className="container">
          <h2 className="section-title">마케팅 진행 프로세스</h2>
          <p className="section-desc">단발성 세팅이 아닌, 병원의 성장 여정을 함께하는 지속 파트너가 됩니다.</p>
          
          <div className="process-list">
            {[
              { title: '맞춤 상담 진행', desc: '병원의 진료 분야, 목표, 현재 상황 분석 및 방향성 제시' },
              { title: '전문 마케팅팀 배치', desc: '브랜딩, 디자인, 콘텐츠 전문가로 전담팀 구성' },
              { title: '원장님 심층 설문', desc: '진료 철학, 병원 가치, 타깃 환자 파악' },
              { title: '시장 리서치 및 분석', desc: '경쟁 병원 차별점 도출 및 포지션 진단' },
              { title: '브랜딩 기획 및 디자인', desc: '병원의 철학 시각화 및 신뢰감 있는 이미지 완성' },
              { title: '콘텐츠 원고 작성', desc: '키워드 추출 및 특성에 맞춘 스토리텔링 기획' },
              { title: '공식 채널 세팅', desc: '블로그/스마트 지도 콘셉트에 맞춰 디자인 및 최적화' },
              { title: '마케팅 플랜 실행', desc: '콘텐츠 발행, 노출 모니터링 및 실시간 피드백 진행' }
            ].map((step, index) => (
              <div key={index} className="process-item">
                <div className="process-num">{index + 1}</div>
                <div>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-light" id="pricing">
        <div className="container">
          <h2 className="section-title">서비스 단가표</h2>
          <p className="section-desc">모든 금액은 부가세 별도입니다.</p>
          
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>서비스명</th>
                  <th>단가</th>
                  <th>상세 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>블로그 대행</strong></td>
                  <td className="price">100,000원 <span>/편</span></td>
                  <td>고감도 스토리텔링 원고 작성 및 발행</td>
                </tr>
                <tr>
                  <td><strong>카페 바이럴 (질문형)</strong></td>
                  <td className="price">50,000원 <span>/세트</span></td>
                  <td>브랜딩 설계 + 원고 1건 + 소통 2건 + 카페 리스트 추천</td>
                </tr>
                <tr>
                  <td><strong>카페 바이럴 (체험단형)</strong></td>
                  <td className="price">50,000원 <span>/건</span></td>
                  <td>원고 작성 후 배포 (시술 제공 없음)</td>
                </tr>
                <tr>
                  <td><strong>블로그 체험단</strong></td>
                  <td className="price">70,000원 <span>/건</span></td>
                  <td>모집/선정/포스팅 관리. 유지기간 30일 보장</td>
                </tr>
                <tr>
                  <td><strong>인스타그램 릴스 (공식)</strong></td>
                  <td className="price">2,000,000원 <span>/월 8건</span></td>
                  <td>병원 오피셜 인스타그램 릴스 기획 및 제작</td>
                </tr>
                <tr>
                  <td><strong>인스타그램 릴스 (체험단)</strong></td>
                  <td className="price">280,000원 <span>/인당</span></td>
                  <td>지역, 제공 시술 확인 후 맞춤 모집</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">자주 묻는 질문</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h4 className="faq-q">Q. 의료법 대응 가능한가요?</h4>
              <p className="faq-a">네, 가능합니다. 카페 커뮤니티나 체험단 마케팅 진행 시에도 의료법을 철저히 준수하며 자연스럽고 신뢰도 높은 후기를 설계합니다.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-q">Q. 효과가 없으면 환불해 주나요?</h4>
              <p className="faq-a">헤이메디는 성과에 확실한 자신감이 있기 때문에, 마케팅 진행 후 효과가 없을 시 100% 환불해 드리는 파격적인 정책을 약속하고 있습니다.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-q">Q. 브랜딩, 정말 효과가 있을까요?</h4>
              <p className="faq-a">원장님의 진심과 차별점을 담은 브랜딩은 [공감 → 신뢰 → 방문]으로 이어지는 확실한 내원 전환 구조를 만들어냅니다. 노출만 시키는 광고와는 다릅니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary" id="contact" style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>지금 바로 전문가와 상담하세요</h2>
          <p className="section-desc" style={{ color: '#cbd5e1', marginBottom: '40px' }}>
            우리 병원의 현 상황을 진단하고 가장 확실한 성장 방향을 제시해 드립니다.
          </p>
          <form className="contact-form" style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px' }}>
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

      {/* Footer */}
      <footer className="footer" style={{ padding: '40px 0', textAlign: 'center', background: '#0f172a', color: '#64748b', borderTop: '1px solid #1e293b' }}>
        <div className="container">
          <div className="logo" style={{ color: 'white', marginBottom: '16px' }}>HeyMedi</div>
          <p>© {new Date().getFullYear()} HeyMedi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
