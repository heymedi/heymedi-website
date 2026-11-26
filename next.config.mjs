// 헤이메디 체험단 관리 앱(campaign)을 이 주소 아래로 이어 준다(멀티 존):
//   heymedi.kr/admin  관리자, heymedi.kr/client/…  고객사 포털(예전 /c/… 주소도 이어 주면 campaign 앱이 /client/…로 옮겨 줌), /auth/…  구글 로그인 복귀, /campaign-assets/…  그 앱의 정적 파일
// 요청은 그대로 campaign 앱으로 전달되고, 브라우저 주소는 heymedi.kr 그대로 유지된다.
const CAMPAIGN_ORIGIN = process.env.CAMPAIGN_ORIGIN || "https://campaign-gilt-six.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/admin", destination: `${CAMPAIGN_ORIGIN}/admin` },
        { source: "/admin/:path*", destination: `${CAMPAIGN_ORIGIN}/admin/:path*` },
        { source: "/client/:path*", destination: `${CAMPAIGN_ORIGIN}/client/:path*` },
        { source: "/c/:path*", destination: `${CAMPAIGN_ORIGIN}/c/:path*` },
        { source: "/auth/:path*", destination: `${CAMPAIGN_ORIGIN}/auth/:path*` },
        { source: "/campaign-assets/:path*", destination: `${CAMPAIGN_ORIGIN}/campaign-assets/:path*` },
      ],
    };
  },
};

export default nextConfig;
