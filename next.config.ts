const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 1. Mock Data (Unsplash) resimleri için
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com', // 2. Google Profil fotoları
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com', // 3. İleride GCS resimleri için
      },
    ],
  },
  async headers() {
    return [
      {
        // protect all the routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
