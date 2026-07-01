import Header from "../../components/Header";
import Logo from "../../components/Logo";

export const metadata = {
  title: "이용약관 | 헤이메디",
  description: "헤이메디 서비스 이용약관입니다.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0c] selection:bg-brand-copper selection:text-white font-sans">
      <Header currentPath="/terms" />

      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-12">이용약관</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-light leading-relaxed">
          <p>
            <strong>제1조 (목적)</strong><br />
            이 약관은 헤이메디(이하 "회사")가 제공하는 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제2조 (용어의 정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>"서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 회사의 제반 서비스를 의미합니다.</li>
              <li>"이용자"란 회사의 웹사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 자를 말합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제3조 (약관의 게시와 개정)</h2>
            <p>
              회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
              회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <p>
              회사는 이용자에게 마케팅 상담, 병원 브랜딩 기획 및 관련 부수 서비스를 제공합니다.
              회사는 서비스의 내용이 변경되거나 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 서비스의 내용을 변경할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제5조 (책임제한)</h2>
            <p>
              회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
            </p>
          </section>
        </div>
        
        <div className="mt-20">
          <a href="/" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            홈으로 돌아가기
          </a>
        </div>
      </main>
    </div>
  );
}
