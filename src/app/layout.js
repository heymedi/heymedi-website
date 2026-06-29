import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
});

export const metadata = {
  title: "헤이메디 - 프리미엄 병원 브랜딩 컨설팅",
  description: "우리 병원을 선택할 특별한 이유를 만들어 드립니다. 효과 없을 시 100% 환불 보장.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSerifKR.variable}>
      <head>
        <link rel="stylesheet" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <header className="header">
          <div className="logo" style={{ fontFamily: "var(--font-noto-serif-kr)", fontWeight: 900 }}>HeyMedi</div>
          <nav>
            <a href="#contact" className="btn-primary">무료 상담 신청</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
