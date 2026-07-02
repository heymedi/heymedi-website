/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header";
import Logo from "../../components/Logo";

export const metadata = {
  title: "개인정보처리방침 | 헤이메디",
  description: "헤이메디 개인정보처리방침입니다.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0c] selection:bg-brand-copper selection:text-white font-sans">
      <Header currentPath="/privacy" />

      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-12">개인정보처리방침</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-light leading-relaxed">
          <p>
            <strong>헤이메디(이하 '회사')</strong>는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제1조 (개인정보의 처리목적)</h2>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>마케팅 문의 확인, 상담 및 견적 안내</li>
              <li>서비스 제공에 관한 계약 이행 및 요금 정산</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제2조 (처리하는 개인정보 항목)</h2>
            <p>회사는 상담 및 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>필수항목: 병원명, 성함, 연락처, 이메일</li>
              <li>선택항목: 현재 겪고 계신 문제점, 고려 중인 마케팅 서비스 등 문의 내용</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제3조 (개인정보의 처리 및 보유기간)</h2>
            <p>회사는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>보유 기간: <strong>문의 및 상담 종료 후 1년</strong> (단, 관계 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black mt-10 mb-4">제4조 (개인정보의 파기)</h2>
            <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
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
