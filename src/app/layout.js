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
  openGraph: {
    title: "HeyMedi | 프리미엄 병원 마케팅 & 브랜딩",
    description: "환자가 제 발로 찾아오는 1등 병원의 비밀, 헤이메디가 만들어 드립니다.",
    url: "https://www.heymedi.kr",
    siteName: "HeyMedi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HeyMedi Preview Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '-qpbhdqJwpVqoMXYK7wNG_q4K5pqQmEFTVmQFlkB6Xc',
    other: {
      'naver-site-verification': '39a6e6ac18ef7565de19a13d93a3c56d80c04f27',
    },
  },
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
