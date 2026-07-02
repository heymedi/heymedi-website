"use client";
import React from 'react';

export default function Footer({ onShowPrivacy }) {
  return (
    <footer className="py-10 px-6 md:px-16 text-[11px] md:text-xs font-mono tracking-widest text-brand-gray bg-[#0a0a0c]">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>아카이브헤이</span>
          <span>브랜드명: 헤이메디</span>
          <span>대표: 지원규</span>
          <span>사업자등록번호: 151-47-01239</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>주소: 경기도 화성시 동탄구 동탄중심상가2길 8, 4층 401-하46호</span>
          <span>TEL: 0507-1395-1381</span>
          <a href="mailto:team.archivehey@gmail.com" className="hover:text-white transition-colors">이메일: team.archivehey@gmail.com</a>
          <a href="http://pf.kakao.com/_xacxenX/chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
          {onShowPrivacy ? (
            <button onClick={onShowPrivacy} className="hover:text-white transition-colors font-medium">개인정보처리방침</button>
          ) : (
            <a href="/privacy" className="hover:text-white transition-colors font-medium">개인정보처리방침</a>
          )}
          <a href="/terms" className="hover:text-white transition-colors">이용약관</a>
        </div>
        <p className="mt-4 text-[#555]">&copy; {new Date().getFullYear()} HEYMEDI. ALL RIGHTS RESERVED. PREMIUM HOSPITAL BRANDING</p>
      </div>
    </footer>
  );
}
