export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.heymedi.kr';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/c/', '/auth/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
