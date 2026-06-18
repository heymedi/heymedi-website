import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "헤이메디 - 병원 전문 브랜딩 대행사",
  description: "우리병원을 선택할 특별한 이유를 만들어 드립니다. 효과 없을 시 100% 환불 보장.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="header">
          <div className="logo">HeyMedi</div>
          <nav>
            <a href="#contact" className="btn-primary">무료 상담 신청</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
