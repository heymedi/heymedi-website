import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

export const metadata = {
  title: "HeyMedi | 당신의 병원을 위한 프리미엄 브랜딩",
  description: "마케팅 비용은 계속 쓰는데, 왜 환자는 늘지 않을까요? 원장님 병원만의 '진짜 매력'을 찾아드릴게요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`scroll-smooth bg-[#0a0a0c] text-white ${inter.variable} ${notoSansKr.variable}`}>
      <body className="antialiased font-sans selection:bg-brand-copper selection:text-white break-keep">
        {children}
      </body>
    </html>
  );
}
